import type { Activity, FitnessMetric } from "@/lib/supabase/database.types";
import { DAY_MS, isRunningActivity, numeric, toDate } from "@/lib/utils";

export type ActivityGroup = "gym" | "other" | "running";

export type RunningRangeWeeks = 4 | 8 | 12 | 26 | 52;

export type RunRow = Activity & {
  benefit: string;
  group: ActivityGroup;
  paceLabel: string;
  paceMinutes: number | null;
};

export type WeeklyRunningPoint = {
  avgHr: number | null;
  date: string;
  distanceKm: number;
  hrv: number | null;
  label: string;
  paceMinutes: number | null;
  runCount: number;
  trainingLoad: number | null;
};

export type PaceBandComparison = {
  band: string;
  currentAvgHr: number | null;
  currentRuns: number;
  deltaHr: number | null;
  previousAvgHr: number | null;
  previousRuns: number;
};

export type RunningCoachCards = {
  bestRecentRun: string;
  easyRunEfficiency: string;
  efficiencyTrend: string;
  fatigueWarning: string;
  longRunProgression: string;
  suggestedNextRun: string;
  weeklyMileageProgression: string;
};

export type RunningAnalytics = {
  calendarWeekDistanceKm: number;
  coachCards: RunningCoachCards;
  current7DistanceKm: number;
  current7PaceMinutes: number | null;
  current7RunCount: number;
  currentCalendarWeekDistanceKm: number;
  latestRun: RunRow | null;
  paceBandComparisons: PaceBandComparison[];
  previous7DistanceKm: number;
  previous7PaceMinutes: number | null;
  previousCalendarWeekDistanceKm: number;
  recentRuns: RunRow[];
  runs: RunRow[];
  weeklySeries: WeeklyRunningPoint[];
};

function average(values: number[]) {
  const usable = values.filter((value) => Number.isFinite(value) && value > 0);
  return usable.length
    ? usable.reduce((total, value) => total + value, 0) / usable.length
    : null;
}

function sum(values: number[]) {
  return values
    .filter((value) => Number.isFinite(value) && value > 0)
    .reduce((total, value) => total + value, 0);
}

function offsetDate(date: string, offsetDays: number) {
  const value = toDate(date);
  value.setUTCDate(value.getUTCDate() + offsetDays);
  return value.toISOString().slice(0, 10);
}

export function weekStart(date: string) {
  const value = toDate(date);
  const day = value.getUTCDay() || 7;
  value.setUTCDate(value.getUTCDate() - day + 1);
  return value.toISOString().slice(0, 10);
}

export function monthKey(date: string) {
  return date.slice(0, 7);
}

export function activityGroup(activity: Activity): ActivityGroup {
  const type = activity.activity_type?.toLowerCase() ?? "";

  if ((type && isRunningActivity(activity)) || (!type && numeric(activity.distance_km) > 0)) {
    return "running";
  }

  if (
    type.includes("strength") ||
    type.includes("gym") ||
    type.includes("weight") ||
    type.includes("lifting") ||
    type.includes("functional")
  ) {
    return "gym";
  }

  return "other";
}

export function formatActivityType(activity: Activity) {
  const group = activityGroup(activity);
  if (group === "gym") {
    return "Gym";
  }

  if (group === "running") {
    return activity.activity_type?.trim() || "Run";
  }

  return activity.activity_type?.trim() || "Other";
}

export function paceMinutesPerKm(activity: Pick<Activity, "distance_km" | "duration_minutes">) {
  const distance = numeric(activity.distance_km);
  const duration = numeric(activity.duration_minutes);

  return distance > 0 && duration > 0 ? duration / distance : null;
}

export function formatPace(value: number | null | undefined) {
  if (typeof value !== "number" || !Number.isFinite(value) || value <= 0) {
    return "--";
  }

  const minutes = Math.floor(value);
  const seconds = Math.round((value - minutes) * 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}/km`;
}

export function formatDuration(minutes: number | null | undefined) {
  if (typeof minutes !== "number" || !Number.isFinite(minutes) || minutes <= 0) {
    return "--";
  }

  const hours = Math.floor(minutes / 60);
  const remainder = Math.round(minutes % 60);

  return hours ? `${hours}h ${remainder.toString().padStart(2, "0")}m` : `${remainder}m`;
}

export function formatDistance(value: number | null | undefined) {
  if (typeof value !== "number" || !Number.isFinite(value) || value <= 0) {
    return "--";
  }

  return `${value.toFixed(value >= 10 ? 1 : 2)} km`;
}

export function formatNumber(value: number | null | undefined, digits = 1) {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return "--";
  }

  return Number.isInteger(value) ? value.toString() : value.toFixed(digits);
}

export function trainingBenefit(activity: Activity) {
  const effect = activity.training_effect?.trim();
  if (effect) {
    return effect;
  }

  const distance = numeric(activity.distance_km);
  const duration = numeric(activity.duration_minutes);
  const avgHr = numeric(activity.avg_hr);
  const pace = paceMinutesPerKm(activity);

  if (activityGroup(activity) === "gym") {
    return "Strength consistency";
  }

  if (distance >= 14 || duration >= 80) {
    return "Long endurance";
  }

  if (avgHr >= 165 || (pace !== null && pace < 4.75)) {
    return "Hard aerobic stimulus";
  }

  if (distance >= 7 && avgHr > 0 && avgHr < 150) {
    return "Easy aerobic efficiency";
  }

  if (distance > 0) {
    return "Aerobic base";
  }

  return "Logged activity";
}

export function paceBandLabel(pace: number | null | undefined) {
  if (typeof pace !== "number" || !Number.isFinite(pace) || pace <= 0) {
    return "Unknown pace";
  }

  if (pace < 4) {
    return "Sub 4:00/km";
  }

  const halfHours = Math.floor((pace - 4) / 0.5);
  const start = 4 + halfHours * 0.5;
  const end = start + 0.5;

  return `${formatPace(start).replace("/km", "")}-${formatPace(end).replace("/km", "")}/km`;
}

export function runRows(activities: Activity[]): RunRow[] {
  return activities
    .filter((activity) => activityGroup(activity) === "running")
    .map((activity) => {
      const paceMinutes = paceMinutesPerKm(activity);

      return {
        ...activity,
        benefit: trainingBenefit(activity),
        group: "running" as const,
        paceLabel: formatPace(paceMinutes),
        paceMinutes,
      };
    })
    .sort((left, right) => right.date.localeCompare(left.date));
}

function inDateWindow<T extends { date: string }>(
  rows: T[],
  start: string,
  end: string,
) {
  return rows.filter((row) => row.date >= start && row.date <= end);
}

function paceAverage(runs: RunRow[]) {
  const weightedDistance = sum(runs.map((run) => numeric(run.distance_km)));
  const duration = sum(runs.map((run) => numeric(run.duration_minutes)));
  return weightedDistance > 0 && duration > 0 ? duration / weightedDistance : null;
}

function compareText(
  label: string,
  current: number | null,
  previous: number | null,
  formatter: (value: number) => string,
  lowerIsBetter = false,
) {
  if (current === null || previous === null) {
    return `${label}: not enough comparable data yet.`;
  }

  const delta = current - previous;
  const improved = lowerIsBetter ? delta < 0 : delta > 0;
  const direction = Math.abs(delta) < 0.05 ? "held steady" : improved ? "improved" : "dipped";

  return `${label}: ${direction} from ${formatter(previous)} to ${formatter(current)}.`;
}

function bestRecentRun(runs: RunRow[]) {
  const recent = runs
    .filter((run) => numeric(run.distance_km) >= 3 && run.paceMinutes !== null)
    .slice(0, 20);

  if (!recent.length) {
    return "Best recent run: log a few more runs before ranking quality.";
  }

  const best = [...recent].sort((left, right) => {
    const leftScore =
      (left.paceMinutes ?? 99) + numeric(left.avg_hr) / 220 - numeric(left.distance_km) / 50;
    const rightScore =
      (right.paceMinutes ?? 99) + numeric(right.avg_hr) / 220 - numeric(right.distance_km) / 50;
    return leftScore - rightScore;
  })[0];

  return `Best recent run: ${best.date}, ${formatDistance(best.distance_km)} at ${best.paceLabel}${best.avg_hr ? `, avg HR ${formatNumber(best.avg_hr, 0)}` : ""}.`;
}

function longRunProgression(currentRuns: RunRow[], previousRuns: RunRow[]) {
  const currentLong = Math.max(0, ...currentRuns.map((run) => numeric(run.distance_km)));
  const previousLong = Math.max(0, ...previousRuns.map((run) => numeric(run.distance_km)));

  return compareText(
    "Long run progression",
    currentLong || null,
    previousLong || null,
    (value) => formatDistance(value),
  );
}

function easyRunEfficiency(runs: RunRow[]) {
  const easyRuns = runs
    .filter((run) => numeric(run.distance_km) >= 3 && numeric(run.avg_hr) > 0 && numeric(run.avg_hr) <= 155)
    .slice(0, 12);

  if (easyRuns.length < 2) {
    return "Easy run efficiency: not enough easy runs with HR yet.";
  }

  const latest = easyRuns.slice(0, Math.ceil(easyRuns.length / 2));
  const previous = easyRuns.slice(Math.ceil(easyRuns.length / 2));

  return compareText(
    "Easy run efficiency",
    paceAverage(latest),
    paceAverage(previous),
    formatPace,
    true,
  );
}

function fatigueWarning(weeklySeries: WeeklyRunningPoint[]) {
  const latest = weeklySeries.at(-1);
  const previous = weeklySeries.at(-2);

  if (!latest || !previous) {
    return "Fatigue warning: keep collecting running and HRV data.";
  }

  const distanceJump =
    previous.distanceKm > 0
      ? (latest.distanceKm - previous.distanceKm) / previous.distanceKm
      : 0;
  const hrvDrop =
    latest.hrv !== null && previous.hrv !== null ? latest.hrv - previous.hrv : null;

  if (distanceJump > 0.25 && hrvDrop !== null && hrvDrop < 0) {
    return `Fatigue warning: mileage is up ${Math.round(distanceJump * 100)}% while HRV is down ${Math.abs(hrvDrop).toFixed(1)}. Keep the next run easy.`;
  }

  if (distanceJump > 0.35) {
    return `Fatigue warning: mileage jumped ${Math.round(distanceJump * 100)}%. Avoid stacking another hard week immediately.`;
  }

  return "Fatigue warning: no obvious mileage/HRV red flag in the current weekly data.";
}

function suggestedNextRun(runs: RunRow[], weeklySeries: WeeklyRunningPoint[]) {
  const latest = weeklySeries.at(-1);
  const previous = weeklySeries.at(-2);
  const latestRun = runs.at(0);

  if (!latestRun) {
    return "Suggested next run: easy 20-30 minutes to establish a baseline.";
  }

  if (latest && previous && latest.distanceKm > previous.distanceKm * 1.3) {
    return "Suggested next run: 30-45 minutes easy, keep HR controlled, no pace target.";
  }

  if (numeric(latestRun.distance_km) >= 10) {
    return "Suggested next run: short easy recovery run or gym day.";
  }

  return "Suggested next run: steady aerobic run, then review pace/HR against the same pace band.";
}

function buildPaceBandComparisons(runs: RunRow[], today: string) {
  const currentStart = offsetDate(today, -6);
  const previousStart = offsetDate(today, -13);
  const previousEnd = offsetDate(today, -7);
  const bands = new Map<string, { current: number[]; previous: number[] }>();

  runs.forEach((run) => {
    const hr = numeric(run.avg_hr);
    if (!hr || run.paceMinutes === null) {
      return;
    }

    const band = paceBandLabel(run.paceMinutes);
    const entry = bands.get(band) ?? { current: [], previous: [] };
    if (run.date >= currentStart && run.date <= today) {
      entry.current.push(hr);
    }
    if (run.date >= previousStart && run.date <= previousEnd) {
      entry.previous.push(hr);
    }
    bands.set(band, entry);
  });

  return Array.from(bands.entries())
    .map(([band, values]) => {
      const currentAvgHr = average(values.current);
      const previousAvgHr = average(values.previous);
      return {
        band,
        currentAvgHr,
        currentRuns: values.current.length,
        deltaHr:
          currentAvgHr !== null && previousAvgHr !== null
            ? currentAvgHr - previousAvgHr
            : null,
        previousAvgHr,
        previousRuns: values.previous.length,
      };
    })
    .filter((row) => row.currentRuns || row.previousRuns)
    .sort((left, right) => left.band.localeCompare(right.band));
}

function weeklyFitnessAverages(fitnessMetrics: FitnessMetric[]) {
  const grouped = new Map<string, FitnessMetric[]>();

  fitnessMetrics.forEach((metric) => {
    const week = weekStart(metric.date);
    grouped.set(week, [...(grouped.get(week) ?? []), metric]);
  });

  return new Map(
    Array.from(grouped.entries()).map(([week, rows]) => [
      week,
      {
        hrv: average(rows.map((row) => numeric(row.hrv))),
        trainingLoad: average(rows.map((row) => numeric(row.training_load))),
      },
    ]),
  );
}

export function weeklyRunningSeries(
  activities: Activity[],
  fitnessMetrics: FitnessMetric[],
  today: string,
  weeks: RunningRangeWeeks = 4,
): WeeklyRunningPoint[] {
  const runs = runRows(activities);
  const fitnessByWeek = weeklyFitnessAverages(fitnessMetrics);
  const currentWeekStart = weekStart(today);

  return Array.from({ length: weeks }, (_, index) => {
    const date = offsetDate(currentWeekStart, (index - weeks + 1) * 7);
    const weekRuns = runs.filter((run) => weekStart(run.date) === date);
    const fitness = fitnessByWeek.get(date);
    const avgHr = average(weekRuns.map((run) => numeric(run.avg_hr)));

    return {
      avgHr,
      date,
      distanceKm: sum(weekRuns.map((run) => numeric(run.distance_km))),
      hrv: fitness?.hrv ?? null,
      label: `W/c ${date.slice(5)}`,
      paceMinutes: paceAverage(weekRuns),
      runCount: weekRuns.length,
      trainingLoad: fitness?.trainingLoad ?? null,
    };
  });
}

export function monthlyRunningSeries(activities: Activity[]) {
  const byMonth = new Map<string, number>();

  runRows(activities).forEach((run) => {
    const month = monthKey(run.date);
    byMonth.set(month, (byMonth.get(month) ?? 0) + numeric(run.distance_km));
  });

  return Array.from(byMonth.entries())
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([date, distanceKm]) => ({ date, distanceKm }));
}

export function buildRunningAnalytics(input: {
  activities: Activity[];
  fitnessMetrics: FitnessMetric[];
  today: string;
  weeks?: RunningRangeWeeks;
}): RunningAnalytics {
  const weeks = input.weeks ?? 4;
  const runs = runRows(input.activities);
  const weeklySeries = weeklyRunningSeries(
    input.activities,
    input.fitnessMetrics,
    input.today,
    weeks,
  );
  const current7 = inDateWindow(runs, offsetDate(input.today, -6), input.today);
  const previous7 = inDateWindow(
    runs,
    offsetDate(input.today, -13),
    offsetDate(input.today, -7),
  );
  const currentWeekStart = weekStart(input.today);
  const previousWeekStart = offsetDate(currentWeekStart, -7);
  const currentCalendarWeek = inDateWindow(runs, currentWeekStart, input.today);
  const previousCalendarWeek = inDateWindow(
    runs,
    previousWeekStart,
    offsetDate(currentWeekStart, -1),
  );
  const current7Pace = paceAverage(current7);
  const previous7Pace = paceAverage(previous7);
  const current7Distance = sum(current7.map((run) => numeric(run.distance_km)));
  const previous7Distance = sum(previous7.map((run) => numeric(run.distance_km)));
  const currentCalendarDistance = sum(
    currentCalendarWeek.map((run) => numeric(run.distance_km)),
  );
  const previousCalendarDistance = sum(
    previousCalendarWeek.map((run) => numeric(run.distance_km)),
  );
  const efficiencyTrend = compareText(
    "Efficiency trend",
    current7Pace,
    previous7Pace,
    formatPace,
    true,
  );

  return {
    calendarWeekDistanceKm: currentCalendarDistance,
    coachCards: {
      bestRecentRun: bestRecentRun(runs),
      easyRunEfficiency: easyRunEfficiency(runs),
      efficiencyTrend,
      fatigueWarning: fatigueWarning(weeklySeries),
      longRunProgression: longRunProgression(current7, previous7),
      suggestedNextRun: suggestedNextRun(runs, weeklySeries),
      weeklyMileageProgression: compareText(
        "Weekly mileage progression",
        currentCalendarDistance,
        previousCalendarDistance,
        formatDistance,
      ),
    },
    current7DistanceKm: current7Distance,
    current7PaceMinutes: current7Pace,
    current7RunCount: current7.length,
    currentCalendarWeekDistanceKm: currentCalendarDistance,
    latestRun: runs.at(0) ?? null,
    paceBandComparisons: buildPaceBandComparisons(runs, input.today),
    previous7DistanceKm: previous7Distance,
    previous7PaceMinutes: previous7Pace,
    previousCalendarWeekDistanceKm: previousCalendarDistance,
    recentRuns: runs.slice(0, 30),
    runs,
    weeklySeries,
  };
}

export function rangeWeeksFromParam(value: string | string[] | undefined): RunningRangeWeeks {
  const raw = Array.isArray(value) ? value[0] : value;
  const numericValue = Number(raw);
  return [4, 8, 12, 26, 52].includes(numericValue)
    ? (numericValue as RunningRangeWeeks)
    : 4;
}

export function activityGroupLabel(group: ActivityGroup) {
  return group === "running" ? "Running" : group === "gym" ? "Gym" : "Other";
}

export function activityDetailHref(activity: Activity) {
  return activityGroup(activity) === "running" ? `/activities/${activity.id}` : undefined;
}

export function latestDateFromRows(rows: Array<{ date: string }[]>, fallback: string) {
  const latest = rows
    .flat()
    .map((row) => row.date)
    .filter(Boolean)
    .sort((left, right) => right.localeCompare(left))[0];

  return latest ?? fallback;
}

export function daysBetween(left: string, right: string) {
  return Math.round((toDate(right).getTime() - toDate(left).getTime()) / DAY_MS);
}
