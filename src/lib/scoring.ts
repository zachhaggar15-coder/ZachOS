import type {
  Activity,
  ConsultantReadinessLog,
  DailyLog,
  FinanceSnapshot,
  FitnessMetric,
  NetWorthSnapshot,
  Quest,
} from "@/lib/supabase/database.types";
import { calculateConsultantReadiness } from "@/lib/analytics";
import { DAY_MS, isRunningActivity, numeric, toDate } from "@/lib/utils";

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
  computed_current_value: number;
  progress: number;
  progress_source: "auto" | "manual";
};

export type QuestProgressInput = {
  activities?: Activity[];
  consultantLogs?: ConsultantReadinessLog[];
  dailyLogs?: DailyLog[];
  financeSnapshots?: FinanceSnapshot[];
  fitnessMetrics?: FitnessMetric[];
  netWorthSnapshots?: NetWorthSnapshot[];
};

const XP_PER_LEVEL = 1000;

function clampScore(value: number) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function metricKey(quest: Quest) {
  return [quest.target_metric, quest.category, quest.title]
    .filter(Boolean)
    .join(" ")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function latestByDate<T extends { date: string }>(rows: T[] | undefined) {
  if (!rows?.length) {
    return null;
  }

  return [...rows].sort((a, b) => a.date.localeCompare(b.date)).at(-1) ?? null;
}

function sumConsultantWriting(consultantLogs: ConsultantReadinessLog[] | undefined) {
  return (consultantLogs ?? []).reduce(
    (total, log) => total + numeric(log.writing_minutes),
    0,
  );
}

function runningDistanceThisMonth(activities: Activity[] | undefined) {
  const running = (activities ?? []).filter(isRunningActivity);
  const latest = latestByDate(running);

  if (!latest) {
    return 0;
  }

  const month = latest.date.slice(0, 7);
  return running
    .filter((activity) => activity.date.startsWith(month))
    .reduce((total, activity) => total + numeric(activity.distance_km), 0);
}

function latestFinanceValue(
  input: QuestProgressInput,
  financeKey: "cash" | "invested" | "netWorth",
) {
  const latestFinance = latestByDate(input.financeSnapshots);
  const latestNetWorth = latestByDate(input.netWorthSnapshots);

  if (financeKey === "cash") {
    return (
      latestFinance?.cash_gbp ??
      latestNetWorth?.cash_value ??
      null
    );
  }

  if (financeKey === "invested") {
    return (
      latestFinance?.invested_gbp ??
      latestNetWorth?.invested_value ??
      null
    );
  }

  return (
    latestFinance?.net_worth_gbp ??
    latestNetWorth?.estimated_net_worth ??
    null
  );
}

function deriveQuestCurrentValue(quest: Quest, input: QuestProgressInput) {
  const key = metricKey(quest);
  const dailyTotals = sumDailyLogs(input.dailyLogs ?? []);
  const latestDaily = latestByDate(input.dailyLogs);
  const latestFitness = latestByDate(input.fitnessMetrics);

  if (!key) {
    return null;
  }

  if (
    key.includes("consultant") ||
    key.includes("readiness") ||
    key.includes("veeva")
  ) {
    return calculateConsultantReadiness({
      consultantLogs: input.consultantLogs ?? [],
      dailyLogs: input.dailyLogs ?? [],
    }).score;
  }

  if (key.includes("running") || key.includes("run ") || key.includes(" km")) {
    return key.includes("month")
      ? runningDistanceThisMonth(input.activities)
      : runningDistanceTotal(input.activities ?? []);
  }

  if (key.includes("distance")) {
    return runningDistanceTotal(input.activities ?? []);
  }

  if (key.includes("deep work") || key.includes("deepwork")) {
    return dailyTotals.deepWork;
  }

  if (key.includes("french")) {
    return dailyTotals.french;
  }

  if (key.includes("reading") || key.includes("read ") || key.includes("book")) {
    return dailyTotals.reading;
  }

  if (key.includes("writing")) {
    return sumConsultantWriting(input.consultantLogs);
  }

  if (key.includes("streak")) {
    return calculateCurrentStreak(input.dailyLogs ?? []);
  }

  if (key.includes("log")) {
    return input.dailyLogs?.length ?? 0;
  }

  if (
    key.includes("invested") ||
    key.includes("portfolio") ||
    key.includes("isa") ||
    key.includes("lisa")
  ) {
    return latestFinanceValue(input, "invested");
  }

  if (key.includes("net worth") || key.includes("wealth")) {
    return latestFinanceValue(input, "netWorth");
  }

  if (key.includes("cash")) {
    return latestFinanceValue(input, "cash");
  }

  if (key.includes("sleep") || key.includes("recovery")) {
    return latestFitness?.sleep_score ?? null;
  }

  if (key.includes("hrv")) {
    return latestFitness?.hrv ?? null;
  }

  if (key.includes("mood")) {
    return latestDaily?.mood_score ?? null;
  }

  return null;
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
      value: clampScore(recentRunning), // 100 km/month = 100%
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

export function calculateQuestProgress(
  quests: Quest[],
  input: QuestProgressInput = {},
): QuestProgress[] {
  return quests.map((quest) => {
    const autoCurrent = deriveQuestCurrentValue(quest, input);
    const current =
      typeof autoCurrent === "number" && Number.isFinite(autoCurrent)
        ? autoCurrent
        : numeric(quest.current_value);
    const target = numeric(quest.target_value);

    return {
      ...quest,
      computed_current_value: current,
      progress: target > 0 ? clampScore((current / target) * 100) : 0,
      progress_source:
        typeof autoCurrent === "number" && Number.isFinite(autoCurrent)
          ? "auto"
          : "manual",
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
  const key = metricKey(quest);

  if (key.includes("running") || key.includes("run ") || key.includes("distance")) {
    return `Push "${quest.title}" next: import the latest Garmin export or add the next easy run.`;
  }

  if (key.includes("deep work") || key.includes("deepwork")) {
    return `Push "${quest.title}" next: do one protected 60-90 minute deep work block.`;
  }

  if (key.includes("french")) {
    return `Push "${quest.title}" next: add one 20-30 minute French session.`;
  }

  if (key.includes("reading") || key.includes("read ") || key.includes("book")) {
    return `Push "${quest.title}" next: read 10 pages and capture one useful idea.`;
  }

  if (
    key.includes("consultant") ||
    key.includes("readiness") ||
    key.includes("veeva")
  ) {
    return `Push "${quest.title}" next: write one client-style recommendation from today's reading.`;
  }

  if (
    key.includes("invested") ||
    key.includes("portfolio") ||
    key.includes("net worth") ||
    key.includes("wealth")
  ) {
    return `Push "${quest.title}" next: refresh portfolio prices or add the latest finance snapshot.`;
  }

  if (key.includes("sleep") || key.includes("recovery") || key.includes("hrv")) {
    return `Push "${quest.title}" next: keep training light and protect tonight's sleep window.`;
  }

  return `Push "${quest.title}" next: add progress to ${quest.target_metric || "its target metric"}.`;
}
