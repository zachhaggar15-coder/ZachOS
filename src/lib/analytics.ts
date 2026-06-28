import type {
  Activity,
  ConsultantReadinessLog,
  DailyLog,
  FinanceSnapshot,
  FitnessMetric,
} from "@/lib/supabase/database.types";
import { DAY_MS, isRunningActivity, numeric, toDate } from "@/lib/utils";

export type AverageMetric = {
  label: string;
  sevenDay: number | null;
  thirtyDay: number | null;
  trend: "up" | "down" | "flat" | "unknown";
  unit?: string;
};

export type RelationshipMetric = {
  label: string;
  note: string;
  value: number | null;
};

export type ConsultantReadinessScore = {
  deepWorkHours: number;
  readingPages: number;
  score: number;
  writingMinutes: number;
};

export type AnalyticsSummary = {
  averages: AverageMetric[];
  bestMoodDay: string;
  relationships: RelationshipMetric[];
};

function clamp(value: number) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function dateMs(date: string) {
  return toDate(date).getTime();
}

function latestDate(...groups: { date: string }[][]) {
  const dates = groups.flat().map((row) => dateMs(row.date));
  return dates.length ? Math.max(...dates) : Date.now();
}

function average(values: number[]) {
  const usable = values.filter((value) => Number.isFinite(value));
  return usable.length
    ? usable.reduce((total, value) => total + value, 0) / usable.length
    : null;
}

function trendFrom(current: number | null, previous: number | null) {
  if (current === null || previous === null) {
    return "unknown" as const;
  }

  const delta = current - previous;
  if (Math.abs(delta) < 0.05) {
    return "flat" as const;
  }

  return delta > 0 ? ("up" as const) : ("down" as const);
}

function rollingAverage<T extends { date: string }>(
  rows: T[],
  days: number,
  endDate: number,
  getValue: (row: T) => number,
) {
  const start = endDate - (days - 1) * DAY_MS;
  return average(
    rows
      .filter((row) => {
        const value = dateMs(row.date);
        return value >= start && value <= endDate;
      })
      .map(getValue)
      .filter((value) => value > 0),
  );
}

function previousAverage<T extends { date: string }>(
  rows: T[],
  days: number,
  endDate: number,
  getValue: (row: T) => number,
) {
  const end = endDate - days * DAY_MS;
  const start = end - (days - 1) * DAY_MS;
  return average(
    rows
      .filter((row) => {
        const value = dateMs(row.date);
        return value >= start && value <= end;
      })
      .map(getValue)
      .filter((value) => value > 0),
  );
}

function correlation(points: { x: number; y: number }[]) {
  const usable = points.filter(
    (point) => Number.isFinite(point.x) && Number.isFinite(point.y),
  );

  if (usable.length < 3) {
    return null;
  }

  const xAverage = average(usable.map((point) => point.x));
  const yAverage = average(usable.map((point) => point.y));

  if (xAverage === null || yAverage === null) {
    return null;
  }

  const numerator = usable.reduce(
    (total, point) => total + (point.x - xAverage) * (point.y - yAverage),
    0,
  );
  const xVariance = usable.reduce(
    (total, point) => total + (point.x - xAverage) ** 2,
    0,
  );
  const yVariance = usable.reduce(
    (total, point) => total + (point.y - yAverage) ** 2,
    0,
  );

  if (!xVariance || !yVariance) {
    return null;
  }

  return numerator / Math.sqrt(xVariance * yVariance);
}

function relationshipNote(value: number | null) {
  if (value === null) {
    return "Not enough paired data yet.";
  }

  const strength = Math.abs(value);
  if (strength < 0.2) {
    return "Weak relationship in the current data.";
  }

  if (strength < 0.45) {
    return value > 0
      ? "Moderate positive relationship in the current data."
      : "Moderate negative relationship in the current data.";
  }

  return value > 0
    ? "Strong positive relationship in the current data."
    : "Strong negative relationship in the current data.";
}

function weeklyRunningByWeek(activities: Activity[]) {
  const byWeek = new Map<string, number>();

  activities.filter(isRunningActivity).forEach((activity) => {
    const value = toDate(activity.date);
    const day = value.getUTCDay() || 7;
    value.setUTCDate(value.getUTCDate() - day + 1);
    const week = value.toISOString().slice(0, 10);
    byWeek.set(week, (byWeek.get(week) ?? 0) + numeric(activity.distance_km));
  });

  return byWeek;
}

export function calculateAnalytics(input: {
  activities: Activity[];
  dailyLogs: DailyLog[];
  fitnessMetrics: FitnessMetric[];
}): AnalyticsSummary {
  const endDate = latestDate(
    input.activities,
    input.dailyLogs,
    input.fitnessMetrics,
  );
  const fitnessByDate = new Map(
    input.fitnessMetrics.map((metric) => [metric.date, metric]),
  );

  const makeAverage = <T extends { date: string }>(
    label: string,
    rows: T[],
    unit: string | undefined,
    getValue: (row: T) => number,
  ): AverageMetric => {
    const sevenDay = rollingAverage(rows, 7, endDate, getValue);
    const previousSeven = previousAverage(rows, 7, endDate, getValue);

    return {
      label,
      sevenDay,
      thirtyDay: rollingAverage(rows, 30, endDate, getValue),
      trend: trendFrom(sevenDay, previousSeven),
      unit,
    };
  };

  const moodByDay = new Map<string, number[]>();
  input.dailyLogs.forEach((log) => {
    const mood = numeric(log.mood_score);
    if (!mood) {
      return;
    }
    const dayName = new Intl.DateTimeFormat("en-GB", {
      weekday: "long",
    }).format(toDate(log.date));
    moodByDay.set(dayName, [...(moodByDay.get(dayName) ?? []), mood]);
  });

  const bestMoodDay =
    Array.from(moodByDay.entries())
      .map(([day, values]) => ({ day, value: average(values) ?? 0 }))
      .sort((a, b) => b.value - a.value)[0]?.day ?? "Not enough mood data yet";

  const sleepMood = input.dailyLogs
    .map((log) => {
      const fitness = fitnessByDate.get(log.date);
      return {
        x: numeric(fitness?.sleep_score),
        y: numeric(log.mood_score),
      };
    })
    .filter((point) => point.x > 0 && point.y > 0);

  const deepWorkMood = input.dailyLogs
    .map((log) => ({
      x: numeric(log.deep_work_hours),
      y: numeric(log.mood_score),
    }))
    .filter((point) => point.x > 0 && point.y > 0);

  const runningByWeek = weeklyRunningByWeek(input.activities);
  const trainingLoadByWeek = new Map<string, number[]>();
  const hrvByWeek = new Map<string, number[]>();
  input.fitnessMetrics.forEach((metric) => {
    const value = toDate(metric.date);
    const day = value.getUTCDay() || 7;
    value.setUTCDate(value.getUTCDate() - day + 1);
    const week = value.toISOString().slice(0, 10);
    const trainingLoad = numeric(metric.training_load);
    const hrv = numeric(metric.hrv);
    if (trainingLoad) {
      trainingLoadByWeek.set(week, [
        ...(trainingLoadByWeek.get(week) ?? []),
        trainingLoad,
      ]);
    }
    if (hrv) {
      hrvByWeek.set(week, [...(hrvByWeek.get(week) ?? []), hrv]);
    }
  });

  const trainingHrv = Array.from(hrvByWeek.entries())
    .map(([week, values]) => {
      const trainingLoad = average(trainingLoadByWeek.get(week) ?? []);
      return {
        x: trainingLoad ?? runningByWeek.get(week) ?? 0,
        y: average(values) ?? 0,
      };
    })
    .filter((point) => point.x > 0 && point.y > 0);

  const relationships = [
    { label: "Sleep score and mood", value: correlation(sleepMood) },
    { label: "Deep work and mood", value: correlation(deepWorkMood) },
    { label: "Training load and HRV", value: correlation(trainingHrv) },
  ].map((item) => ({
    ...item,
    note: relationshipNote(item.value),
  }));

  return {
    averages: [
      makeAverage("Mood", input.dailyLogs, undefined, (row) =>
        numeric(row.mood_score),
      ),
      makeAverage("Deep work", input.dailyLogs, "h", (row) =>
        numeric(row.deep_work_hours),
      ),
      makeAverage("French", input.dailyLogs, "m", (row) =>
        numeric(row.french_minutes),
      ),
      makeAverage("Reading", input.dailyLogs, " pages", (row) =>
        numeric(row.reading_pages),
      ),
      makeAverage("Sleep score", input.fitnessMetrics, undefined, (row) =>
        numeric(row.sleep_score),
      ),
      makeAverage("HRV", input.fitnessMetrics, undefined, (row) =>
        numeric(row.hrv),
      ),
      makeAverage("Training load", input.fitnessMetrics, undefined, (row) =>
        numeric(row.training_load),
      ),
    ],
    bestMoodDay,
    relationships,
  };
}

export function calculateConsultantReadiness(input: {
  consultantLogs: ConsultantReadinessLog[];
  dailyLogs: DailyLog[];
}): ConsultantReadinessScore {
  const latest = latestDate(input.consultantLogs, input.dailyLogs);
  const since = latest - 30 * DAY_MS;
  const recentConsultant = input.consultantLogs.filter(
    (log) => dateMs(log.date) >= since,
  );
  const recentDaily = input.dailyLogs.filter((log) => dateMs(log.date) >= since);
  const totals = {
    deepWorkHours: recentDaily.reduce(
      (total, log) => total + numeric(log.deep_work_hours),
      0,
    ),
    readingPages: recentDaily.reduce(
      (total, log) => total + numeric(log.reading_pages),
      0,
    ),
    writingMinutes: recentConsultant.reduce(
      (total, log) => total + numeric(log.writing_minutes),
      0,
    ),
  };

  return {
    ...totals,
    score: clamp(
      (totals.deepWorkHours / 30) * 45 +
        (totals.readingPages / 300) * 25 +
        (totals.writingMinutes / 300) * 30,
    ),
  };
}

export function compactAnalyticsForPrompt(input: {
  activities: Activity[];
  consultantLogs: ConsultantReadinessLog[];
  dailyLogs: DailyLog[];
  financeSnapshots: FinanceSnapshot[];
  fitnessMetrics: FitnessMetric[];
}) {
  const analytics = calculateAnalytics(input);
  const consultant = calculateConsultantReadiness(input);
  const recentDaily = input.dailyLogs.slice(-14);
  const recentFitness = input.fitnessMetrics.slice(-14);
  const recentFinance = input.financeSnapshots.slice(-8);
  const recentActivities = input.activities.slice(-20);

  return {
    analytics,
    consultant,
    recentActivities,
    recentDaily,
    recentFinance,
    recentFitness,
  };
}
