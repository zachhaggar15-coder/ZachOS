import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

import { friendlyDatabaseError } from "@/lib/database-setup";
import {
  parseGarminExportJsonEntries,
  type GarminExportJsonEntry,
} from "@/lib/garmin-export";
import type { Database } from "@/lib/supabase/database.types";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

type ActivityInsert = Database["public"]["Tables"]["activities"]["Insert"];
type FitnessMetric = Database["public"]["Tables"]["fitness_metrics"]["Row"];
type FitnessMetricInsert =
  Database["public"]["Tables"]["fitness_metrics"]["Insert"];

const BATCH_SIZE = 400;
const CHART_PATHS = [
  "/charts/average-hr",
  "/charts/hrv",
  "/charts/hrv-training-load",
  "/charts/recovery",
  "/charts/running-distance",
  "/charts/sleep",
  "/charts/sleep-mood",
  "/charts/weekly-running",
  "/charts/monthly-running",
];

function jsonError(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status });
}

function chunks<T>(rows: T[]) {
  const result: T[][] = [];

  for (let index = 0; index < rows.length; index += BATCH_SIZE) {
    result.push(rows.slice(index, index + BATCH_SIZE));
  }

  return result;
}

function mergeFitnessMetric(
  row: FitnessMetricInsert,
  existing: FitnessMetric | null,
): FitnessMetricInsert {
  return {
    date: row.date,
    hrv: row.hrv ?? existing?.hrv ?? null,
    resting_hr: row.resting_hr ?? existing?.resting_hr ?? null,
    sleep_hours: row.sleep_hours ?? existing?.sleep_hours ?? null,
    sleep_score: row.sleep_score ?? existing?.sleep_score ?? null,
    training_load: row.training_load ?? existing?.training_load ?? null,
    training_status: row.training_status ?? existing?.training_status ?? null,
    user_id: row.user_id,
    weekly_distance_km:
      row.weekly_distance_km ?? existing?.weekly_distance_km ?? null,
  };
}

async function upsertActivities(
  supabase: Awaited<ReturnType<typeof createSupabaseServerClient>>,
  activities: ActivityInsert[],
) {
  for (const batch of chunks(activities)) {
    const { error } = await supabase.from("activities").upsert(batch, {
      onConflict: "user_id,source,external_id",
    });

    if (error) {
      throw new Error(friendlyDatabaseError(error));
    }
  }
}

async function upsertFitnessMetrics(
  supabase: Awaited<ReturnType<typeof createSupabaseServerClient>>,
  userId: string,
  fitnessMetrics: FitnessMetricInsert[],
) {
  for (const batch of chunks(fitnessMetrics)) {
    const dates = batch.map((row) => row.date);
    const { data: existingRows, error: existingError } = await supabase
      .from("fitness_metrics")
      .select("*")
      .eq("user_id", userId)
      .in("date", dates);

    if (existingError) {
      throw new Error(friendlyDatabaseError(existingError));
    }

    const existingByDate = new Map(
      (existingRows ?? []).map((row) => [row.date, row]),
    );
    const upserts = batch.map((row) =>
      mergeFitnessMetric(row, existingByDate.get(row.date) ?? null),
    );
    const { error } = await supabase
      .from("fitness_metrics")
      .upsert(upserts, { onConflict: "user_id,date" });

    if (error) {
      throw new Error(friendlyDatabaseError(error));
    }
  }
}

function isEntry(value: unknown): value is GarminExportJsonEntry {
  return (
    !!value &&
    typeof value === "object" &&
    "fullName" in value &&
    "text" in value &&
    typeof value.fullName === "string" &&
    typeof value.text === "string"
  );
}

export async function POST(request: Request) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return jsonError("Please sign in before importing Garmin data.", 401);
  }

  let entries: GarminExportJsonEntry[];

  try {
    const payload = (await request.json()) as { entries?: unknown[] };
    entries = (payload.entries ?? []).filter(isEntry);
  } catch {
    return jsonError("Could not read the Garmin JSON import payload.");
  }

  if (!entries.length) {
    return jsonError("No Garmin JSON entries were provided.");
  }

  let parsed: ReturnType<typeof parseGarminExportJsonEntries>;

  try {
    parsed = parseGarminExportJsonEntries(entries, user.id);
  } catch (error) {
    return jsonError(
      error instanceof Error
        ? error.message
        : "Could not parse Garmin JSON entries.",
    );
  }

  try {
    await upsertActivities(supabase, parsed.activities);
    await upsertFitnessMetrics(supabase, user.id, parsed.fitnessMetrics);
  } catch (error) {
    return jsonError(
      error instanceof Error ? error.message : "Could not save Garmin data.",
    );
  }

  revalidatePath("/");
  revalidatePath("/garmin-import");
  revalidatePath("/manage");
  CHART_PATHS.forEach((path) => revalidatePath(path));

  return NextResponse.json({
    activitiesImported: parsed.activities.length,
    fitnessDaysImported: parsed.fitnessMetrics.length,
    jsonFilesRead: parsed.jsonFilesRead,
    latestActivityDate:
      parsed.activities
        .map((activity) => activity.date)
        .sort((a, b) => a.localeCompare(b))
        .at(-1) ?? null,
    latestFitnessDate:
      parsed.fitnessMetrics
        .map((metric) => metric.date)
        .sort((a, b) => a.localeCompare(b))
        .at(-1) ?? null,
    skippedFiles: parsed.skippedFiles,
  });
}
