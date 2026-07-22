import type {
  Activity,
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
  /** Plain-language reading of the split, e.g. "1.4 higher mood". */
  headline: string;
  label: string;
  /** The full sentence with both group averages and the sample size. */
  note: string;
  sampleSize: number;
  strength: "none" | "slight" | "clear";
  /** Pearson r, kept for the AI prompt and charts. */
  value: number | null;
};

export type AnalyticsSummary = {
  averages: AverageMetric[];
  bestMoodDay: string;
  relationships: RelationshipMetric[];
};

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

// Keep acronyms like HRV intact when they appear mid-sentence.
function sentenceCase(label: string) {
  return label === label.toUpperCase() ? label : label.toLowerCase();
}

function median(values: number[]) {
  const sorted = [...values].sort((left, right) => left - right);
  const middle = Math.floor(sorted.length / 2);

  return sorted.length % 2
    ? sorted[middle]
    : (sorted[middle - 1] + sorted[middle]) / 2;
}

type RelationshipSpec = {
  /** How many decimals to show on the driver (x) value. */
  driverDigits?: number;
  driverLabel: string;
  driverUnit?: string;
  label: string;
  outcomeDigits?: number;
  outcomeLabel: string;
  outcomeUnit?: string;
  points: { x: number; y: number }[];
};

/**
 * Turn a scatter of paired points into a sentence a human can act on.
 *
 * A Pearson r tells you a relationship exists but not what to do about it, so
 * this splits the days at the median driver value and reports the difference in
 * outcome between the two halves - "mood averages 1.4 higher on days after a
 * sleep score of 78+" - which is the form you can actually test against.
 */
function describeRelationship(spec: RelationshipSpec): RelationshipMetric {
  const {
    driverDigits = 0,
    driverLabel,
    driverUnit = "",
    label,
    outcomeDigits = 1,
    outcomeLabel,
    outcomeUnit = "",
    points,
  } = spec;
  const value = correlation(points);
  const sampleSize = points.length;

  // Below this a median split is noise, not a signal.
  if (sampleSize < 8) {
    return {
      headline: "Not enough data",
      label,
      note: `Needs at least 8 paired days to compare; there ${
        sampleSize === 1 ? "is" : "are"
      } ${sampleSize}.`,
      sampleSize,
      strength: "none",
      value,
    };
  }

  const cutoff = median(points.map((point) => point.x));
  const high = points.filter((point) => point.x >= cutoff).map((point) => point.y);
  const low = points.filter((point) => point.x < cutoff).map((point) => point.y);

  if (!high.length || !low.length) {
    return {
      headline: "No variation",
      label,
      note: `${driverLabel} barely varies across these ${sampleSize} days, so there is nothing to compare.`,
      sampleSize,
      strength: "none",
      value,
    };
  }

  const highAverage = average(high) ?? 0;
  const lowAverage = average(low) ?? 0;
  const delta = highAverage - lowAverage;
  const spread = Math.abs(delta);
  // Judge the gap against the outcome's own scale rather than a fixed number,
  // so this works for mood out of 10 and HRV in milliseconds alike.
  const outcomeScale = Math.abs(average([...high, ...low]) ?? 1) || 1;
  const relative = spread / outcomeScale;
  const strength: RelationshipMetric["strength"] =
    relative < 0.04 ? "none" : relative < 0.1 ? "slight" : "clear";

  const cutoffText = `${cutoff.toFixed(driverDigits)}${driverUnit}`;
  const deltaText = `${spread.toFixed(outcomeDigits)}${outcomeUnit}`;
  const direction = delta > 0 ? "higher" : "lower";

  if (strength === "none") {
    return {
      headline: "No clear difference",
      label,
      note: `${outcomeLabel} is about the same above and below ${cutoffText} ${sentenceCase(driverLabel)} (${highAverage.toFixed(
        outcomeDigits,
      )} vs ${lowAverage.toFixed(outcomeDigits)}, n=${sampleSize}).`,
      sampleSize,
      strength,
      value,
    };
  }

  return {
    headline: `${deltaText} ${direction} ${sentenceCase(outcomeLabel)}`,
    label,
    note: `${outcomeLabel} averages ${highAverage.toFixed(
      outcomeDigits,
    )}${outcomeUnit} when ${sentenceCase(driverLabel)} is ${cutoffText} or above, against ${lowAverage.toFixed(
      outcomeDigits,
    )}${outcomeUnit} below it - ${deltaText} ${direction} (n=${sampleSize}).`,
    sampleSize,
    strength,
    value,
  };
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
    describeRelationship({
      driverLabel: "Sleep score",
      label: "Sleep score and mood",
      outcomeLabel: "Mood",
      points: sleepMood,
    }),
    describeRelationship({
      driverDigits: 1,
      driverLabel: "Deep work",
      driverUnit: "h",
      label: "Deep work and mood",
      outcomeLabel: "Mood",
      points: deepWorkMood,
    }),
    describeRelationship({
      driverLabel: "Training load",
      label: "Training load and HRV",
      outcomeDigits: 0,
      outcomeLabel: "HRV",
      outcomeUnit: "ms",
      points: trainingHrv,
    }),
  ];

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

export function compactAnalyticsForPrompt(input: {
  activities: Activity[];
  dailyLogs: DailyLog[];
  financeSnapshots: FinanceSnapshot[];
  fitnessMetrics: FitnessMetric[];
}) {
  const analytics = calculateAnalytics(input);
  const recentDaily = input.dailyLogs.slice(-14);
  const recentFitness = input.fitnessMetrics.slice(-14);
  const recentFinance = input.financeSnapshots.slice(-8);
  const recentActivities = input.activities.slice(-20);

  return {
    analytics,
    recentActivities,
    recentDaily,
    recentFinance,
    recentFitness,
  };
}
