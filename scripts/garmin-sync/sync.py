"""Local Garmin Connect sync for Zach OS.

This script intentionally runs outside Vercel. It uses the unofficial
garminconnect package locally, stores Garmin tokens on your machine, then writes
small upsert batches into Supabase with the service-role key.
"""

from __future__ import annotations

import argparse
import os
import sys
from datetime import date, datetime, timedelta, timezone
from pathlib import Path
from typing import Any, Iterable

try:
    from dotenv import load_dotenv
except ImportError:
    load_dotenv = None

JsonRecord = dict[str, Any]

REPO_ROOT = Path(__file__).resolve().parents[2]
DEFAULT_ENV_FILE = REPO_ROOT / ".env.garmin-sync"
DEFAULT_TOKEN_DIR = REPO_ROOT / ".garmin-tokens"
ACTIVITY_SOURCE = "garmin_connect"
BATCH_SIZE = 200


def die(message: str) -> None:
    print(f"ERROR: {message}", file=sys.stderr)
    raise SystemExit(1)


def is_record(value: Any) -> bool:
    return isinstance(value, dict)


def as_record(value: Any) -> JsonRecord:
    return value if is_record(value) else {}


def number(value: Any) -> float | None:
    if isinstance(value, bool) or value is None:
        return None

    if isinstance(value, (int, float)):
        return float(value) if value == value else None

    if isinstance(value, str) and value.strip():
        try:
            parsed = float(value.strip())
        except ValueError:
            return None
        return parsed if parsed == parsed else None

    return None


def clean_text(value: Any) -> str | None:
    if isinstance(value, str) and value.strip():
        return value.strip()

    if isinstance(value, (int, float)) and not isinstance(value, bool):
        return str(value)

    return None


def round_number(value: float, digits: int = 2) -> float:
    return round(value, digits)


def date_from_value(value: Any) -> str | None:
    if value is None:
        return None

    if isinstance(value, date) and not isinstance(value, datetime):
        return value.isoformat()

    if isinstance(value, datetime):
        return value.date().isoformat()

    if isinstance(value, str) and value.strip():
        raw = value.strip()
        if len(raw) >= 10 and raw[4] == "-" and raw[7] == "-":
            return raw[:10]

        try:
            parsed = datetime.fromisoformat(raw.replace("Z", "+00:00"))
        except ValueError:
            return None
        return parsed.date().isoformat()

    epoch = number(value)
    if epoch is None:
        return None

    if epoch > 10_000_000_000:
        epoch /= 1000

    try:
        return datetime.fromtimestamp(epoch, tz=timezone.utc).date().isoformat()
    except (OverflowError, OSError, ValueError):
        return None


def get_path(source: JsonRecord, *path: str) -> Any:
    current: Any = source
    for key in path:
        if not is_record(current) or key not in current:
            return None
        current = current[key]
    return current


def first_value(source: JsonRecord, keys: Iterable[str]) -> Any:
    for key in keys:
        if key in source and source[key] is not None:
            return source[key]
    return None


def first_number(source: JsonRecord, keys: Iterable[str]) -> float | None:
    for key in keys:
        parsed = number(source.get(key))
        if parsed is not None:
            return parsed
    return None


def first_text(source: JsonRecord, keys: Iterable[str]) -> str | None:
    for key in keys:
        parsed = clean_text(source.get(key))
        if parsed:
            return parsed
    return None


def find_nested_number(value: Any, key_names: set[str]) -> float | None:
    if isinstance(value, list):
        for item in value:
            found = find_nested_number(item, key_names)
            if found is not None:
                return found
        return None

    if not is_record(value):
        return None

    for key, item in value.items():
        if key in key_names:
            parsed = number(item)
            if parsed is not None:
                return parsed

    for item in value.values():
        found = find_nested_number(item, key_names)
        if found is not None:
            return found

    return None


def find_nested_text(value: Any, key_names: set[str]) -> str | None:
    if isinstance(value, list):
        for item in value:
            found = find_nested_text(item, key_names)
            if found:
                return found
        return None

    if not is_record(value):
        return None

    for key, item in value.items():
        if key in key_names:
            parsed = clean_text(item)
            if parsed:
                return parsed

    for item in value.values():
        found = find_nested_text(item, key_names)
        if found:
            return found

    return None


def normalise_duration_minutes(value: Any) -> float | None:
    duration = number(value)
    if duration is None:
        return None

    if duration > 10_000:
        return round_number(duration / 60_000, 2)

    if duration > 300:
        return round_number(duration / 60, 2)

    return round_number(duration, 2)


def normalise_distance_km(value: Any) -> float | None:
    distance = number(value)
    if distance is None:
        return None

    if distance > 10_000:
        return round_number(distance / 100_000, 3)

    if distance > 1_000:
        return round_number(distance / 1_000, 3)

    return round_number(distance, 3)


def normalise_sleep_hours(value: Any) -> float | None:
    sleep = number(value)
    if sleep is None:
        return None

    if sleep > 10_000:
        return round_number(sleep / 3_600_000, 2)

    if sleep > 24:
        return round_number(sleep / 3_600, 2)

    return round_number(sleep, 2)


def normalise_energy_to_calories(value: Any) -> int | None:
    energy = number(value)
    if energy is None:
        return None

    if energy > 1_500:
        return round(energy / 4.184)

    return round(energy)


def merge_non_null(row: JsonRecord, key: str, value: Any) -> None:
    if value is not None:
        row[key] = value


def call_first(client: Any, method_names: Iterable[str], *args: Any) -> Any:
    for method_name in method_names:
        method = getattr(client, method_name, None)
        if not callable(method):
            continue

        try:
            result = method(*args)
        except Exception as error:  # Garmin endpoints vary by account/device.
            print(f"Skipped Garmin method {method_name}: {error}")
            continue

        if result not in (None, "", [], {}):
            return result

    return None


def login_to_garmin(email: str, password: str, token_dir: Path) -> Any:
    try:
        from garminconnect import Garmin
    except ImportError:
        die(
            "Missing garminconnect. Run: .\\.venv-garmin\\Scripts\\python.exe "
            "-m pip install -r scripts\\garmin-sync\\requirements.txt"
        )

    token_dir.mkdir(parents=True, exist_ok=True)
    client = Garmin(
        email,
        password,
        prompt_mfa=lambda: input("Garmin MFA code: ").strip(),
    )
    client.login(str(token_dir))
    return client


def create_supabase_client() -> Any:
    try:
        from supabase import create_client
    except ImportError:
        die(
            "Missing supabase-py. Run: .\\.venv-garmin\\Scripts\\python.exe "
            "-m pip install -r scripts\\garmin-sync\\requirements.txt"
        )

    url = os.getenv("SUPABASE_URL") or os.getenv("NEXT_PUBLIC_SUPABASE_URL")
    key = os.getenv("SUPABASE_SERVICE_ROLE_KEY")

    if not url:
        die("SUPABASE_URL is missing from .env.garmin-sync.")
    if not key:
        die("SUPABASE_SERVICE_ROLE_KEY is missing from .env.garmin-sync.")

    return create_client(url, key)


def activity_date(row: JsonRecord) -> str | None:
    return (
        date_from_value(first_value(row, ("startTimeLocal", "start_time_local")))
        or date_from_value(first_value(row, ("startTimeGMT", "startTimeGmt")))
        or date_from_value(first_value(row, ("beginTimestamp", "startTime")))
        or date_from_value(first_value(row, ("calendarDate", "date")))
    )


def activity_type(row: JsonRecord) -> str | None:
    raw = first_value(row, ("activityType", "activity_type", "sportType", "type"))
    if isinstance(raw, str):
        return raw
    if is_record(raw):
        return (
            clean_text(raw.get("typeKey"))
            or clean_text(raw.get("activityTypeKey"))
            or clean_text(raw.get("sportTypeKey"))
            or clean_text(raw.get("displayName"))
        )
    return None


def external_activity_id(row: JsonRecord) -> str | None:
    return first_text(
        row,
        (
            "activityId",
            "activity_id",
            "uuid",
            "activityUuid",
            "summaryId",
            "id",
        ),
    )


def training_effect(row: JsonRecord) -> str | None:
    label = first_text(
        row,
        (
            "trainingEffectLabel",
            "training_effect_label",
            "trainingEffect",
            "training_effect",
        ),
    )
    if label:
        return label

    aerobic = first_number(row, ("aerobicTrainingEffect", "aerobic_training_effect"))
    anaerobic = first_number(
        row,
        ("anaerobicTrainingEffect", "anaerobic_training_effect"),
    )
    parts = []
    if aerobic is not None:
        parts.append(f"Aerobic {round_number(aerobic, 1)}")
    if anaerobic is not None:
        parts.append(f"Anaerobic {round_number(anaerobic, 1)}")
    return ", ".join(parts) or None


def activity_to_row(row: JsonRecord, user_id: str) -> JsonRecord | None:
    imported_date = activity_date(row)
    external_id = external_activity_id(row)
    if not imported_date or not external_id:
        return None

    summary = as_record(row.get("summaryDTO") or row.get("summary"))
    distance = first_value(row, ("distance", "distanceInMeters", "distanceMeters"))
    duration = first_value(row, ("duration", "movingDuration", "elapsedDuration"))

    return {
        "activity_type": activity_type(row),
        "avg_hr": first_number(
            row,
            ("avgHr", "averageHR", "averageHr", "averageHeartRate"),
        )
        or first_number(summary, ("averageHR", "averageHeartRate")),
        "calories": normalise_energy_to_calories(
            first_value(row, ("calories", "caloriesConsumed"))
            or first_value(summary, ("calories", "caloriesConsumed"))
        ),
        "date": imported_date,
        "distance_km": normalise_distance_km(distance or summary.get("distance")),
        "duration_minutes": normalise_duration_minutes(duration or summary.get("duration")),
        "external_id": external_id,
        "max_hr": first_number(row, ("maxHr", "maxHR", "maxHeartRate"))
        or first_number(summary, ("maxHR", "maxHeartRate")),
        "notes": first_text(row, ("activityName", "activity_name", "name")),
        "source": ACTIVITY_SOURCE,
        "synced_at": datetime.now(timezone.utc).isoformat(),
        "training_effect": training_effect(row),
        "user_id": user_id,
    }


def fetch_activities(client: Any, start: date, end: date, user_id: str) -> list[JsonRecord]:
    start_text = start.isoformat()
    end_text = end.isoformat()
    payload = call_first(client, ("get_activities_by_date",), start_text, end_text)

    if payload is None:
        payload = call_first(client, ("get_activities",), 0, 200)

    if not isinstance(payload, list):
        return []

    rows: list[JsonRecord] = []
    for item in payload:
        if not is_record(item):
            continue
        parsed_date = activity_date(item)
        if not parsed_date:
            continue
        parsed = date.fromisoformat(parsed_date)
        if start <= parsed <= end:
            row = activity_to_row(item, user_id)
            if row:
                rows.append(row)

    unique_by_id: dict[str, JsonRecord] = {}
    for row in rows:
        unique_by_id[str(row["external_id"])] = row
    return list(unique_by_id.values())


def sleep_score_from_payload(payload: Any) -> float | None:
    source = as_record(payload)
    return (
        number(get_path(source, "dailySleepDTO", "sleepScores", "overall", "value"))
        or number(get_path(source, "dailySleepDTO", "sleepScores", "overallScore"))
        or number(get_path(source, "sleepScores", "overall", "value"))
        or number(get_path(source, "sleepScores", "overallScore"))
        or find_nested_number(source, {"sleepScore", "overallScore"})
    )


def sleep_hours_from_payload(payload: Any) -> float | None:
    source = as_record(payload)
    daily_sleep = as_record(source.get("dailySleepDTO"))
    direct = (
        first_value(
            daily_sleep,
            (
                "sleepTimeSeconds",
                "totalSleepSeconds",
                "sleepTimeInSeconds",
                "totalSleepTimeSeconds",
            ),
        )
        or first_value(
            source,
            (
                "sleepTimeSeconds",
                "totalSleepSeconds",
                "sleepTimeInSeconds",
                "totalSleepTimeSeconds",
            ),
        )
    )
    if direct is not None:
        return normalise_sleep_hours(direct)

    phase_seconds = sum(
        number(daily_sleep.get(key)) or number(source.get(key)) or 0
        for key in ("deepSleepSeconds", "lightSleepSeconds", "remSleepSeconds")
    )
    return round_number(phase_seconds / 3600, 2) if phase_seconds else None


def fetch_fitness_metric(client: Any, day: date, user_id: str) -> JsonRecord:
    day_text = day.isoformat()
    row: JsonRecord = {"date": day_text, "user_id": user_id}

    stats = as_record(call_first(client, ("get_stats", "get_user_summary"), day_text))
    heart_rates = as_record(call_first(client, ("get_heart_rates",), day_text))
    sleep = call_first(client, ("get_sleep_data",), day_text)
    hrv = call_first(
        client,
        (
            "get_hrv_data",
            "get_hrv",
            "get_hrv_summary",
        ),
        day_text,
    )
    training_readiness = call_first(
        client,
        ("get_training_readiness", "get_training_readiness_data"),
        day_text,
    )
    training_status = call_first(
        client,
        (
            "get_training_status",
            "get_training_status_data",
            "get_training_load",
        ),
        day_text,
    )

    merge_non_null(row, "sleep_score", sleep_score_from_payload(sleep))
    merge_non_null(row, "sleep_hours", sleep_hours_from_payload(sleep))
    merge_non_null(
        row,
        "hrv",
        first_number(as_record(hrv), ("lastNightAvg", "weeklyAvg", "hrvValue", "value"))
        or find_nested_number(hrv, {"lastNightAvg", "weeklyAvg", "hrvValue"}),
    )
    merge_non_null(
        row,
        "resting_hr",
        first_number(stats, ("restingHeartRate", "restingHR"))
        or first_number(heart_rates, ("restingHeartRate", "restingHR")),
    )
    merge_non_null(
        row,
        "training_load",
        first_number(
            as_record(training_readiness),
            ("acuteLoad", "acuteTrainingLoad", "dailyTrainingLoadAcute"),
        )
        or first_number(
            as_record(training_status),
            ("acuteLoad", "acuteTrainingLoad", "trainingLoad", "dailyTrainingLoadAcute"),
        )
        or find_nested_number(
            training_status,
            {"acuteLoad", "acuteTrainingLoad", "dailyTrainingLoadAcute"},
        ),
    )
    merge_non_null(
        row,
        "training_status",
        first_text(as_record(training_readiness), ("level", "trainingStatus"))
        or first_text(as_record(training_status), ("trainingStatus", "status", "level"))
        or find_nested_text(training_status, {"trainingStatus", "status", "level"}),
    )

    return row


def fetch_fitness_metrics(
    client: Any,
    start: date,
    end: date,
    user_id: str,
) -> list[JsonRecord]:
    rows: list[JsonRecord] = []
    current = start
    while current <= end:
        row = fetch_fitness_metric(client, current, user_id)
        if any(row.get(key) is not None for key in row if key not in {"date", "user_id"}):
            rows.append(row)
        current += timedelta(days=1)
    return rows


def chunks(rows: list[JsonRecord], size: int = BATCH_SIZE) -> Iterable[list[JsonRecord]]:
    for index in range(0, len(rows), size):
        yield rows[index : index + size]


def upsert_activities(supabase: Any, activities: list[JsonRecord]) -> int:
    count = 0
    for batch in chunks(activities):
        supabase.table("activities").upsert(
            batch,
            on_conflict="user_id,source,external_id",
        ).execute()
        count += len(batch)
    return count


def existing_fitness_by_date(
    supabase: Any,
    user_id: str,
    dates: list[str],
) -> dict[str, JsonRecord]:
    if not dates:
        return {}

    result = (
        supabase.table("fitness_metrics")
        .select("*")
        .eq("user_id", user_id)
        .in_("date", dates)
        .execute()
    )
    data = result.data or []
    return {row["date"]: row for row in data if is_record(row) and row.get("date")}


def merge_fitness_metric(row: JsonRecord, existing: JsonRecord | None) -> JsonRecord:
    existing = existing or {}
    merged = {
        "date": row["date"],
        "hrv": row.get("hrv") if row.get("hrv") is not None else existing.get("hrv"),
        "resting_hr": row.get("resting_hr")
        if row.get("resting_hr") is not None
        else existing.get("resting_hr"),
        "sleep_hours": row.get("sleep_hours")
        if row.get("sleep_hours") is not None
        else existing.get("sleep_hours"),
        "sleep_score": row.get("sleep_score")
        if row.get("sleep_score") is not None
        else existing.get("sleep_score"),
        "training_load": row.get("training_load")
        if row.get("training_load") is not None
        else existing.get("training_load"),
        "training_status": row.get("training_status")
        if row.get("training_status") is not None
        else existing.get("training_status"),
        "weekly_distance_km": existing.get("weekly_distance_km"),
        "user_id": row["user_id"],
    }
    return merged


def upsert_fitness_metrics(
    supabase: Any,
    user_id: str,
    fitness_metrics: list[JsonRecord],
) -> int:
    count = 0
    for batch in chunks(fitness_metrics):
        dates = [str(row["date"]) for row in batch]
        existing = existing_fitness_by_date(supabase, user_id, dates)
        merged = [
            merge_fitness_metric(row, existing.get(str(row["date"]))) for row in batch
        ]
        supabase.table("fitness_metrics").upsert(
            merged,
            on_conflict="user_id,date",
        ).execute()
        count += len(merged)
    return count


def insert_sync_run(
    supabase: Any,
    user_id: str,
    status: str,
    message: str,
    activities_count: int,
    fitness_count: int,
    lookback_days: int,
) -> None:
    try:
        supabase.table("garmin_sync_runs").insert(
            {
                "user_id": user_id,
                "started_at": datetime.now(timezone.utc).isoformat(),
                "finished_at": datetime.now(timezone.utc).isoformat(),
                "status": status,
                "message": message[:1000],
                "activities_upserted": activities_count,
                "fitness_days_upserted": fitness_count,
                "lookback_days": lookback_days,
            }
        ).execute()
    except Exception as error:
        print(f"Could not write garmin_sync_runs row: {error}")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Sync Garmin Connect into Zach OS.")
    parser.add_argument(
        "--env",
        default=str(DEFAULT_ENV_FILE),
        help="Path to .env.garmin-sync.",
    )
    parser.add_argument(
        "--days",
        type=int,
        default=None,
        help="Lookback window, including today. Defaults to GARMIN_SYNC_LOOKBACK_DAYS or 14.",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Fetch and parse Garmin data without writing to Supabase.",
    )
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    env_file = Path(args.env)
    if not env_file.exists():
        die(f"Env file not found: {env_file}")

    if load_dotenv is None:
        die(
            "Missing python-dotenv. Run: .\\.venv-garmin\\Scripts\\python.exe "
            "-m pip install -r scripts\\garmin-sync\\requirements.txt"
        )

    load_dotenv(env_file)

    email = os.getenv("GARMIN_EMAIL")
    password = os.getenv("GARMIN_PASSWORD")
    user_id = os.getenv("ZACH_USER_ID")
    days = args.days or int(os.getenv("GARMIN_SYNC_LOOKBACK_DAYS", "14"))
    token_dir = Path(os.getenv("GARMIN_TOKEN_DIR") or str(DEFAULT_TOKEN_DIR))

    if not email:
        die("GARMIN_EMAIL is missing from .env.garmin-sync.")
    if not password:
        die("GARMIN_PASSWORD is missing from .env.garmin-sync.")
    if not user_id:
        die("ZACH_USER_ID is missing from .env.garmin-sync.")
    if days < 1:
        die("--days must be at least 1.")

    if not token_dir.is_absolute():
        token_dir = REPO_ROOT / token_dir

    end = date.today()
    start = end - timedelta(days=days - 1)

    print(f"Syncing Garmin data for {start.isoformat()} to {end.isoformat()}...")
    client = login_to_garmin(email, password, token_dir)
    activities = fetch_activities(client, start, end, user_id)
    fitness_metrics = fetch_fitness_metrics(client, start, end, user_id)

    latest_activity = (
        sorted(row["date"] for row in activities)[-1] if activities else "none"
    )
    latest_fitness = (
        sorted(row["date"] for row in fitness_metrics)[-1]
        if fitness_metrics
        else "none"
    )
    summary = (
        f"Fetched {len(activities)} activities and {len(fitness_metrics)} fitness "
        f"days. Latest activity: {latest_activity}. Latest fitness day: {latest_fitness}."
    )

    if args.dry_run:
        print(f"DRY RUN: {summary}")
        return

    supabase = create_supabase_client()
    activities_count = upsert_activities(supabase, activities)
    fitness_count = upsert_fitness_metrics(supabase, user_id, fitness_metrics)
    summary = (
        f"Upserted {activities_count} activities and {fitness_count} fitness days. "
        f"Latest activity: {latest_activity}. Latest fitness day: {latest_fitness}."
    )
    insert_sync_run(
        supabase,
        user_id,
        "success",
        summary,
        activities_count,
        fitness_count,
        days,
    )
    print(summary)


if __name__ == "__main__":
    try:
        main()
    except Exception as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        raise
