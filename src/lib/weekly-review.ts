import type {
  Activity,
  DailyLog,
  FinanceSnapshot,
  FitnessMetric,
  LearningSession,
} from "@/lib/supabase/database.types";
import { DAY_MS, isRunningActivity, numeric, toDate } from "@/lib/utils";

export type WeeklyMovement = {
  /** Higher is better for most metrics; false flips the wording. */
  higherIsBetter: boolean;
  label: string;
  previous: number | null;
  unit: string;
  current: number | null;
  /** Percentage change, null when there is no comparable prior week. */
  changePercent: number | null;
};

export type WeeklyReview = {
  decision: string;
  headline: string;
  movements: WeeklyMovement[];
  logDays: number;
  learningLessons: number;
  rangeLabel: string;
  stalled: WeeklyMovement | null;
  moved: WeeklyMovement | null;
};

type ReviewInput = {
  activities: Activity[];
  dailyLogs: DailyLog[];
  financeSnapshots: FinanceSnapshot[];
  fitnessMetrics: FitnessMetric[];
  learningSessions: LearningSession[];
};

function withinWindow<T extends { date: string }>(
  rows: T[],
  endMs: number,
  startMs: number,
) {
  return rows.filter((row) => {
    const value = toDate(row.date).getTime();
    return value > startMs && value <= endMs;
  });
}

function mean(values: number[]) {
  const usable = values.filter((value) => Number.isFinite(value) && value > 0);
  return usable.length
    ? usable.reduce((total, value) => total + value, 0) / usable.length
    : null;
}

function total(values: number[]) {
  const usable = values.filter((value) => Number.isFinite(value));
  return usable.length ? usable.reduce((sum, value) => sum + value, 0) : null;
}

function changePercent(current: number | null, previous: number | null) {
  if (current === null || previous === null || previous === 0) {
    return null;
  }

  return ((current - previous) / Math.abs(previous)) * 100;
}

function formatRange(startMs: number, endMs: number) {
  const format = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
  });

  return `${format.format(new Date(startMs))} - ${format.format(new Date(endMs))}`;
}

/**
 * Compare the last seven days against the seven before them.
 *
 * The dashboard is good at showing current state but never asks "what changed?".
 * This is the weekly after-action: what moved, what stalled, and the single
 * decision worth making next week - deliberately one decision, not a list.
 */
export function buildWeeklyReview(
  input: ReviewInput,
  now = new Date(),
): WeeklyReview {
  const endMs = now.getTime();
  const weekStartMs = endMs - 7 * DAY_MS;
  const priorStartMs = endMs - 14 * DAY_MS;

  const thisWeekLogs = withinWindow(input.dailyLogs, endMs, weekStartMs);
  const lastWeekLogs = withinWindow(input.dailyLogs, weekStartMs, priorStartMs);
  const thisWeekFitness = withinWindow(input.fitnessMetrics, endMs, weekStartMs);
  const lastWeekFitness = withinWindow(
    input.fitnessMetrics,
    weekStartMs,
    priorStartMs,
  );
  const runs = input.activities.filter(isRunningActivity);
  const thisWeekRuns = withinWindow(runs, endMs, weekStartMs);
  const lastWeekRuns = withinWindow(runs, weekStartMs, priorStartMs);

  const learningIn = (startMs: number, stopMs: number) =>
    input.learningSessions.filter((session) => {
      const value = new Date(session.completed_at ?? session.created_at).getTime();
      return value > startMs && value <= stopMs;
    });
  const thisWeekLearning = learningIn(weekStartMs, endMs);
  const lastWeekLearning = learningIn(priorStartMs, weekStartMs);

  const movements: WeeklyMovement[] = [
    {
      current: mean(thisWeekLogs.map((log) => numeric(log.mood_score))),
      higherIsBetter: true,
      label: "Mood",
      previous: mean(lastWeekLogs.map((log) => numeric(log.mood_score))),
      unit: "",
      changePercent: null,
    },
    {
      current: mean(thisWeekFitness.map((row) => numeric(row.sleep_score))),
      higherIsBetter: true,
      label: "Sleep score",
      previous: mean(lastWeekFitness.map((row) => numeric(row.sleep_score))),
      unit: "",
      changePercent: null,
    },
    {
      current: mean(thisWeekFitness.map((row) => numeric(row.hrv))),
      higherIsBetter: true,
      label: "HRV",
      previous: mean(lastWeekFitness.map((row) => numeric(row.hrv))),
      unit: "ms",
      changePercent: null,
    },
    {
      current: total(thisWeekLogs.map((log) => numeric(log.deep_work_hours))),
      higherIsBetter: true,
      label: "Deep work",
      previous: total(lastWeekLogs.map((log) => numeric(log.deep_work_hours))),
      unit: "h",
      changePercent: null,
    },
    {
      current: total(thisWeekLogs.map((log) => numeric(log.reading_pages))),
      higherIsBetter: true,
      label: "Reading",
      previous: total(lastWeekLogs.map((log) => numeric(log.reading_pages))),
      unit: " pages",
      changePercent: null,
    },
    {
      current: total(thisWeekLogs.map((log) => numeric(log.writing_minutes))),
      higherIsBetter: true,
      label: "Writing",
      previous: total(lastWeekLogs.map((log) => numeric(log.writing_minutes))),
      unit: "m",
      changePercent: null,
    },
    {
      current: total(thisWeekRuns.map((run) => numeric(run.distance_km))),
      higherIsBetter: true,
      label: "Running",
      previous: total(lastWeekRuns.map((run) => numeric(run.distance_km))),
      unit: "km",
      changePercent: null,
    },
    {
      current: thisWeekLearning.length || null,
      higherIsBetter: true,
      label: "Lessons",
      previous: lastWeekLearning.length || null,
      unit: "",
      changePercent: null,
    },
    {
      // Net worth is snapshotted irregularly, so compare the latest reading in
      // each window rather than an average across it.
      current:
        withinWindow(input.financeSnapshots, endMs, weekStartMs).at(-1)
          ?.net_worth_gbp ?? null,
      higherIsBetter: true,
      label: "Net worth",
      previous:
        withinWindow(input.financeSnapshots, weekStartMs, priorStartMs).at(-1)
          ?.net_worth_gbp ?? null,
      unit: " GBP",
      changePercent: null,
    },
  ].map((movement) => ({
    ...movement,
    changePercent: changePercent(movement.current, movement.previous),
  }));

  const comparable = movements.filter(
    (movement) => movement.changePercent !== null,
  );
  const ranked = [...comparable].sort(
    (left, right) => (right.changePercent ?? 0) - (left.changePercent ?? 0),
  );
  const moved = ranked[0] ?? null;
  const stalled = ranked.at(-1) ?? null;

  const logDays = thisWeekLogs.length;
  const headline = !comparable.length
    ? "Not enough history yet to compare two weeks."
    : moved && (moved.changePercent ?? 0) > 5
      ? `${moved.label} is your strongest move this week.`
      : stalled && (stalled.changePercent ?? 0) < -5
        ? `${stalled.label} slipped hardest this week.`
        : "A flat week: nothing moved much in either direction.";

  // One decision, chosen from the most concrete gap rather than a checklist.
  const decision = (() => {
    if (logDays < 4) {
      return "Log at least five days next week - below that, none of these comparisons mean anything.";
    }

    if (stalled && (stalled.changePercent ?? 0) < -10) {
      return `Protect ${stalled.label.toLowerCase()} next week: decide now which single day it is non-negotiable.`;
    }

    if (!thisWeekLearning.length) {
      return "No lessons completed this week - put one 10-minute Learning Zone block in the calendar.";
    }

    if (moved && (moved.changePercent ?? 0) > 15) {
      return `${moved.label} jumped this week. Write down what you did differently before you forget it.`;
    }

    return "Nothing is obviously broken. Pick the one metric you actually care about and raise its floor.";
  })();

  return {
    decision,
    headline,
    learningLessons: thisWeekLearning.length,
    logDays,
    movements,
    moved,
    rangeLabel: formatRange(weekStartMs, endMs),
    stalled,
  };
}
