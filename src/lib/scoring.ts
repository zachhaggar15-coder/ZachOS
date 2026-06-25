import type {
  Activity,
  DailyLog,
  FinanceSnapshot,
  FitnessMetric,
  Quest,
} from "@/lib/supabase/database.types";

export type CharacterAttribute = {
  detail: string;
  label: "Endurance" | "Recovery" | "Discipline" | "Knowledge" | "Wealth";
  value: number;
};

export type AchievementBadge = {
  earned: boolean;
  label: string;
  progress: string;
};

export type LevelProgress = {
  currentLevelXp: number;
  level: number;
  nextLevelXp: number;
  progress: number;
  totalXp: number;
};

export type QuestProgress = Quest & {
  progress: number;
};

const XP_PER_LEVEL = 1000;
const DAY_MS = 24 * 60 * 60 * 1000;

function numeric(value: number | null | undefined) {
  return typeof value === "number" && Number.isFinite(value) ? value : 0;
}

function clampScore(value: number) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function toDate(date: string) {
  return new Date(`${date}T12:00:00Z`);
}

function isRunningActivity(activity: Activity) {
  const type = activity.activity_type?.toLowerCase() ?? "";
  return (
    !type ||
    type.includes("run") ||
    type.includes("jog") ||
    type.includes("treadmill")
  );
}

export function runningDistanceTotal(activities: Activity[]) {
  return activities
    .filter(isRunningActivity)
    .reduce((total, activity) => total + numeric(activity.distance_km), 0);
}

function runningDistanceSince(activities: Activity[], days: number) {
  const latest = activities.length
    ? Math.max(...activities.map((activity) => toDate(activity.date).getTime()))
    : Date.now();
  const since = latest - days * DAY_MS;

  return activities
    .filter(
      (activity) =>
        isRunningActivity(activity) &&
        toDate(activity.date).getTime() >= since,
    )
    .reduce((total, activity) => total + numeric(activity.distance_km), 0);
}

function sumDailyLogs(dailyLogs: DailyLog[]) {
  return dailyLogs.reduce(
    (totals, log) => ({
      deepWork: totals.deepWork + numeric(log.deep_work_hours),
      french: totals.french + numeric(log.french_minutes),
      reading: totals.reading + numeric(log.reading_pages),
    }),
    { deepWork: 0, french: 0, reading: 0 },
  );
}

export function calculateCurrentStreak(dailyLogs: DailyLog[]) {
  const dates = Array.from(new Set(dailyLogs.map((log) => log.date))).sort();
  if (!dates.length) {
    return 0;
  }

  let streak = 1;
  let cursor = toDate(dates[dates.length - 1]).getTime();

  for (let index = dates.length - 2; index >= 0; index -= 1) {
    const previous = toDate(dates[index]).getTime();
    if (cursor - previous !== DAY_MS) {
      break;
    }
    streak += 1;
    cursor = previous;
  }

  return streak;
}

function maxMonthlyRunningDistance(activities: Activity[]) {
  const byMonth = new Map<string, number>();

  activities.filter(isRunningActivity).forEach((activity) => {
    const key = activity.date.slice(0, 7);
    byMonth.set(key, (byMonth.get(key) ?? 0) + numeric(activity.distance_km));
  });

  return Math.max(0, ...Array.from(byMonth.values()));
}

export function calculateLevelProgress(input: {
  activities: Activity[];
  dailyLogs: DailyLog[];
  fitnessMetrics: FitnessMetric[];
}): LevelProgress {
  const dailyTotals = sumDailyLogs(input.dailyLogs);
  const runningXp = runningDistanceTotal(input.activities) * 10;
  const dailyXp =
    dailyTotals.deepWork * 50 + dailyTotals.french + dailyTotals.reading * 2;
  const sleepXp = input.fitnessMetrics.reduce(
    (total, metric) => total + (numeric(metric.sleep_score) >= 70 ? 20 : 0),
    0,
  );
  const sortedFitness = [...input.fitnessMetrics].sort((a, b) =>
    a.date.localeCompare(b.date),
  );
  const recoveryBonusXp = sortedFitness.reduce((total, metric, index) => {
    const hrv = numeric(metric.hrv);
    const recent = sortedFitness
      .slice(Math.max(0, index - 7), index)
      .map((row) => numeric(row.hrv))
      .filter((value) => value > 0);

    if (!hrv || !recent.length) {
      return total;
    }

    const average = recent.reduce((sum, value) => sum + value, 0) / recent.length;
    return total + (hrv > average ? 50 : 0);
  }, 0);
  const totalXp = Math.round(runningXp + dailyXp + sleepXp + recoveryBonusXp);
  const level = Math.floor(totalXp / XP_PER_LEVEL) + 1;
  const currentLevelXp = totalXp % XP_PER_LEVEL;

  return {
    currentLevelXp,
    level,
    nextLevelXp: XP_PER_LEVEL,
    progress: clampScore((currentLevelXp / XP_PER_LEVEL) * 100),
    totalXp,
  };
}

export function calculateCharacterAttributes(input: {
  activities: Activity[];
  dailyLogs: DailyLog[];
  financeSnapshots: FinanceSnapshot[];
  fitnessMetrics: FitnessMetric[];
}): CharacterAttribute[] {
  const latestFitness = input.fitnessMetrics.at(-1) ?? null;
  const latestFinance = input.financeSnapshots.at(-1) ?? null;
  const dailyTotals = sumDailyLogs(input.dailyLogs);
  const streak = calculateCurrentStreak(input.dailyLogs);
  const recentRunning = runningDistanceSince(input.activities, 30);
  const hrv = numeric(latestFitness?.hrv);
  const sleepScore = numeric(latestFitness?.sleep_score);
  const netWorth = numeric(latestFinance?.net_worth_gbp);

  return [
    {
      detail: `${recentRunning.toFixed(1)} km in latest 30-day window`,
      label: "Endurance",
      value: clampScore((recentRunning / 100) * 100),
    },
    {
      detail: `${Math.round(sleepScore)} sleep score, ${Math.round(hrv)} HRV`,
      label: "Recovery",
      value: clampScore((sleepScore / 100) * 50 + (hrv / 80) * 50),
    },
    {
      detail: `${streak}-day log streak, ${dailyTotals.deepWork.toFixed(
        1,
      )}h deep work`,
      label: "Discipline",
      value: clampScore((streak / 30) * 60 + (dailyTotals.deepWork / 40) * 40),
    },
    {
      detail: `${Math.round(dailyTotals.french)}m French, ${Math.round(
        dailyTotals.reading,
      )} pages`,
      label: "Knowledge",
      value: clampScore((dailyTotals.french / 500) * 50 + (dailyTotals.reading / 500) * 50),
    },
    {
      detail: "Placeholder target: GBP 100k net worth",
      label: "Wealth",
      value: clampScore((netWorth / 100000) * 100),
    },
  ];
}

export function calculateAchievements(input: {
  activities: Activity[];
  dailyLogs: DailyLog[];
  financeSnapshots: FinanceSnapshot[];
}): AchievementBadge[] {
  const dailyTotals = sumDailyLogs(input.dailyLogs);
  const streak = calculateCurrentStreak(input.dailyLogs);
  const bestRunningMonth = maxMonthlyRunningDistance(input.activities);
  const maxInvested = Math.max(
    0,
    ...input.financeSnapshots.map((snapshot) => numeric(snapshot.invested_gbp)),
  );
  const maxNetWorth = Math.max(
    0,
    ...input.financeSnapshots.map((snapshot) => numeric(snapshot.net_worth_gbp)),
  );

  return [
    {
      earned: input.dailyLogs.length > 0,
      label: "First Log",
      progress: `${input.dailyLogs.length} logs`,
    },
    { earned: streak >= 7, label: "7-Day Streak", progress: `${streak}/7` },
    { earned: streak >= 30, label: "30-Day Streak", progress: `${streak}/30` },
    {
      earned: bestRunningMonth >= 50,
      label: "50km Running Month",
      progress: `${bestRunningMonth.toFixed(1)}/50 km`,
    },
    {
      earned: bestRunningMonth >= 100,
      label: "100km Running Month",
      progress: `${bestRunningMonth.toFixed(1)}/100 km`,
    },
    {
      earned: dailyTotals.deepWork >= 10,
      label: "10 Hours Deep Work",
      progress: `${dailyTotals.deepWork.toFixed(1)}/10h`,
    },
    {
      earned: dailyTotals.french >= 500,
      label: "500 French Minutes",
      progress: `${Math.round(dailyTotals.french)}/500m`,
    },
    {
      earned: dailyTotals.reading >= 500,
      label: "500 Reading Pages",
      progress: `${Math.round(dailyTotals.reading)}/500 pages`,
    },
    {
      earned: maxInvested >= 10000,
      label: "£10k Invested",
      progress: `£${Math.round(maxInvested).toLocaleString("en-GB")}`,
    },
    {
      earned: maxNetWorth >= 50000,
      label: "£50k Net Worth",
      progress: `£${Math.round(maxNetWorth).toLocaleString("en-GB")}`,
    },
    {
      earned: maxNetWorth >= 100000,
      label: "£100k Net Worth",
      progress: `£${Math.round(maxNetWorth).toLocaleString("en-GB")}`,
    },
  ];
}

export function calculateQuestProgress(quests: Quest[]): QuestProgress[] {
  return quests.map((quest) => {
    const current = numeric(quest.current_value);
    const target = numeric(quest.target_value);

    return {
      ...quest,
      progress: target > 0 ? clampScore((current / target) * 100) : 0,
    };
  });
}

export function nextQuestAction(quests: QuestProgress[]) {
  const active = quests
    .filter((quest) => (quest.status ?? "active").toLowerCase() === "active")
    .sort((a, b) => a.progress - b.progress);

  if (!active.length) {
    return "Create an active quest to generate a suggested next action.";
  }

  const quest = active[0];
  return `Push "${quest.title}" next: add progress to ${quest.target_metric || "its target metric"}.`;
}
