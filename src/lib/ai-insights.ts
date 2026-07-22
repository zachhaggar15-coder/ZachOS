import "server-only";

import {
  calculateAnalytics,
  compactAnalyticsForPrompt,
} from "@/lib/analytics";
import {
  activityGroup,
  buildRunningAnalytics,
  formatDistance,
  formatDuration,
  formatNumber,
} from "@/lib/fitness-analytics";
import { DAY_MS, numeric } from "@/lib/utils";
import type {
  Activity,
  DailyLog,
  FinanceSnapshot,
  FitnessMetric,
} from "@/lib/supabase/database.types";

export type InsightKind = "daily" | "weekly";

export type AiInsightResult = {
  content: string;
  error?: string;
  generatedAt: string;
  kind: InsightKind;
  source: "fallback" | "openai";
};

type InsightInput = {
  activities: Activity[];
  dailyLogs: DailyLog[];
  financeSnapshots: FinanceSnapshot[];
  fitnessMetrics: FitnessMetric[];
};

type MetricComparison = {
  current: number | null;
  delta: number | null;
  label: string;
  previous: number | null;
  unit?: string;
};

export type OperatingRecommendation = {
  bottleneck: string;
  intellectualAction: string;
  recoveryAction: string;
  strategicSummary: string;
  todayMove: string;
  trainingAction: string;
  weeklyComparisons: MetricComparison[];
  weeklyFocus: string;
};

function formatTrend(trend: string) {
  if (trend === "up" || trend === "down" || trend === "flat") {
    return trend;
  }

  return "unclear";
}

function dateMs(date: string) {
  return new Date(`${date}T12:00:00Z`).getTime();
}

function latestDate(input: InsightInput) {
  const dates = [
    ...input.activities,
    ...input.dailyLogs,
    ...input.financeSnapshots,
    ...input.fitnessMetrics,
  ].map((row) => dateMs(row.date));

  return dates.length ? Math.max(...dates) : Date.now();
}

function average(values: number[]) {
  const usable = values.filter((value) => Number.isFinite(value) && value > 0);
  return usable.length
    ? usable.reduce((total, value) => total + value, 0) / usable.length
    : null;
}

function sum(values: number[]) {
  const usable = values.filter((value) => Number.isFinite(value) && value > 0);
  return usable.length
    ? usable.reduce((total, value) => total + value, 0)
    : null;
}

function inWindow(date: string, endDate: number, daysBack: number) {
  const value = dateMs(date);
  const end = endDate - daysBack * DAY_MS;
  const start = end - 6 * DAY_MS;
  return value >= start && value <= end;
}

function metricComparison(
  label: string,
  unit: string | undefined,
  currentValues: number[],
  previousValues: number[],
  mode: "average" | "sum" = "average",
): MetricComparison {
  const calculate = mode === "sum" ? sum : average;
  const current = calculate(currentValues);
  const previous = calculate(previousValues);

  return {
    current,
    delta: current !== null && previous !== null ? current - previous : null,
    label,
    previous,
    unit,
  };
}

function weekComparisons(input: InsightInput) {
  const endDate = latestDate(input);
  const currentDaily = input.dailyLogs.filter((row) => inWindow(row.date, endDate, 0));
  const previousDaily = input.dailyLogs.filter((row) => inWindow(row.date, endDate, 7));
  const currentFitness = input.fitnessMetrics.filter((row) =>
    inWindow(row.date, endDate, 0),
  );
  const previousFitness = input.fitnessMetrics.filter((row) =>
    inWindow(row.date, endDate, 7),
  );
  const currentFinance = input.financeSnapshots.filter((row) =>
    inWindow(row.date, endDate, 0),
  );
  const previousFinance = input.financeSnapshots.filter((row) =>
    inWindow(row.date, endDate, 7),
  );

  return [
    metricComparison(
      "Mood",
      undefined,
      currentDaily.map((row) => numeric(row.mood_score)),
      previousDaily.map((row) => numeric(row.mood_score)),
    ),
    metricComparison(
      "Deep work",
      "h",
      currentDaily.map((row) => numeric(row.deep_work_hours)),
      previousDaily.map((row) => numeric(row.deep_work_hours)),
      "sum",
    ),
    metricComparison(
      "French",
      "m",
      currentDaily.map((row) => numeric(row.french_minutes)),
      previousDaily.map((row) => numeric(row.french_minutes)),
      "sum",
    ),
    metricComparison(
      "Reading",
      " pages",
      currentDaily.map((row) => numeric(row.reading_pages)),
      previousDaily.map((row) => numeric(row.reading_pages)),
      "sum",
    ),
    metricComparison(
      "Sleep score",
      undefined,
      currentFitness.map((row) => numeric(row.sleep_score)),
      previousFitness.map((row) => numeric(row.sleep_score)),
    ),
    metricComparison(
      "HRV",
      undefined,
      currentFitness.map((row) => numeric(row.hrv)),
      previousFitness.map((row) => numeric(row.hrv)),
    ),
    metricComparison(
      "Net worth",
      " GBP",
      currentFinance.map((row) => numeric(row.net_worth_gbp)),
      previousFinance.map((row) => numeric(row.net_worth_gbp)),
    ),
  ];
}

export function buildOperatingRecommendation(input: InsightInput): OperatingRecommendation {
  const analytics = calculateAnalytics(input);
  const latestDaily = input.dailyLogs.at(-1);
  const latestFitness = input.fitnessMetrics.at(-1);
  const latestFinance = input.financeSnapshots.at(-1);
  const sleepScore = latestFitness?.sleep_score ?? null;
  const hrv = latestFitness?.hrv ?? null;
  const deepWork = latestDaily?.deep_work_hours ?? null;
  const french = latestDaily?.french_minutes ?? null;
  const reading = latestDaily?.reading_pages ?? null;
  const netWorth = latestFinance?.net_worth_gbp ?? null;
  const sleepAverage = analytics.averages.find(
    (metric) => metric.label === "Sleep score",
  );
  const hrvAverage = analytics.averages.find((metric) => metric.label === "HRV");
  const deepWorkAverage = analytics.averages.find(
    (metric) => metric.label === "Deep work",
  );
  const comparisons = weekComparisons(input);
  const recoveryLooksLow =
    (sleepScore !== null && sleepScore < 70) ||
    (sleepScore !== null &&
      sleepAverage?.sevenDay !== null &&
      sleepAverage?.sevenDay !== undefined &&
      sleepScore < sleepAverage.sevenDay) ||
    (hrv !== null &&
      hrvAverage?.sevenDay !== null &&
      hrvAverage?.sevenDay !== undefined &&
      hrv < hrvAverage.sevenDay);
  const habitLooksThin =
    (deepWorkAverage?.sevenDay ?? 0) < 1 ||
    numeric(deepWork) < 1 ||
    numeric(french) + numeric(reading) === 0;
  const bottleneck = recoveryLooksLow
    ? "recovery"
    : habitLooksThin
      ? "intellectual output"
      : netWorth === null
        ? "finance visibility"
        : "consistent execution";
  const trainingAction = recoveryLooksLow
    ? "Keep training easy today: zone 2, mobility, or rest if you feel flat."
    : "Do a controlled aerobic session or short run; keep it repeatable.";
  const recoveryAction = recoveryLooksLow
    ? "Prioritise a boring recovery win: earlier bedtime, hydration, and no late caffeine."
    : "Protect the sleep routine so training and deep work stay sustainable.";
  const intellectualAction =
    numeric(deepWork) < 1
      ? "Start with a 60-minute deep work block before admin."
      : numeric(french) < 20
        ? "Add 20 minutes of French before the day fragments."
        : numeric(reading) < 10
          ? "Read 10 pages and capture one useful idea."
          : "Convert today's learning into one short written note.";
  const todayMove =
    bottleneck === "recovery"
      ? "Make today recovery-led: train light, then spend the best energy on deep work or French."
      : bottleneck === "intellectual output"
        ? "Win one focused intellectual block before touching lower-value tasks."
        : bottleneck === "finance visibility"
          ? "Add or verify today's finance snapshot so wealth progress stays visible."
          : "Repeat the system: one training stimulus, one deep work block, one written note.";
  const weakestComparison = comparisons
    .filter((metric) => metric.delta !== null)
    .sort((a, b) => (a.delta ?? 0) - (b.delta ?? 0))[0];

  return {
    bottleneck,
    intellectualAction,
    recoveryAction,
    strategicSummary:
      "The goal is not to max every metric today; it is to identify the current constraint, then make the next useful move.",
    todayMove,
    trainingAction,
    weeklyComparisons: comparisons,
    weeklyFocus: weakestComparison
      ? `Recover the weakest week-over-week area: ${weakestComparison.label}.`
      : "Collect enough data this week to make the next review sharper.",
  };
}

export function buildLocalDailyBriefing(
  input: InsightInput,
  operating = buildOperatingRecommendation(input),
) {
  const analytics = calculateAnalytics(input);
  const latestDaily = input.dailyLogs.at(-1);
  const latestFitness = input.fitnessMetrics.at(-1);
  const sleepScore = latestFitness?.sleep_score ?? null;
  const hrv = latestFitness?.hrv ?? null;
  const mood = latestDaily?.mood_score ?? null;
  const sleepAverage = analytics.averages.find(
    (metric) => metric.label === "Sleep score",
  );
  const hrvAverage = analytics.averages.find((metric) => metric.label === "HRV");
  const deepWorkAverage = analytics.averages.find(
    (metric) => metric.label === "Deep work",
  );

  return [
    `Current state: mood ${mood ?? "unknown"}, sleep score ${sleepScore ?? "unknown"}, HRV ${hrv ?? "unknown"}.`,
    `Evidence: 7-day averages are sleep score ${sleepAverage?.sevenDay?.toFixed(1) ?? "unknown"}, HRV ${hrvAverage?.sevenDay?.toFixed(1) ?? "unknown"}, and deep work ${deepWorkAverage?.sevenDay?.toFixed(1) ?? "unknown"}h.`,
    `Today's move: ${operating.todayMove}`,
    `Main bottleneck: ${operating.bottleneck}.`,
    `Training recommendation: ${operating.trainingAction}`,
    `Recovery recommendation: ${operating.recoveryAction}`,
    `Intellectual habit recommendation: ${operating.intellectualAction}`,
    `Strategic summary: ${operating.strategicSummary}`,
  ].join("\n");
}

export function buildLocalWeeklyReport(
  input: InsightInput,
  operating = buildOperatingRecommendation(input),
) {
  const analytics = calculateAnalytics(input);
  const fitnessTrend =
    analytics.averages.find((metric) => metric.label === "HRV")?.trend ?? "unknown";
  const recoveryTrend =
    analytics.averages.find((metric) => metric.label === "Sleep score")?.trend ??
    "unknown";
  const intellectualTrend =
    analytics.averages.find((metric) => metric.label === "Deep work")?.trend ??
    "unknown";
  const finance = input.financeSnapshots.at(-1);
  const strongest = operating.weeklyComparisons
    .filter((metric) => metric.delta !== null)
    .sort((a, b) => (b.delta ?? 0) - (a.delta ?? 0))[0];
  const weakest = operating.weeklyComparisons
    .filter((metric) => metric.delta !== null)
    .sort((a, b) => (a.delta ?? 0) - (b.delta ?? 0))[0];

  return [
    `Fitness trend: HRV trend is ${formatTrend(fitnessTrend)} and training volume should be reviewed against recovery.`,
    `Recovery trend: sleep score trend is ${formatTrend(recoveryTrend)}.`,
    `Intellectual habits trend: deep work trend is ${formatTrend(intellectualTrend)}.`,
    `Finance trend: latest net worth is GBP ${Math.round(
      finance?.net_worth_gbp ?? 0,
    ).toLocaleString("en-GB")}.`,
    `Strongest week-over-week improvement: ${strongest ? `${strongest.label} changed by ${(strongest.delta ?? 0).toFixed(1)}${strongest.unit ?? ""}` : "not enough paired weekly data yet"}.`,
    `Weakest area: ${weakest ? `${weakest.label} changed by ${(weakest.delta ?? 0).toFixed(1)}${weakest.unit ?? ""}` : "not enough paired weekly data yet"}.`,
    `Suggested focus for next week: ${operating.weeklyFocus}`,
  ].join("\n");
}

export function buildLocalActivityOverview(
  input: Pick<InsightInput, "activities" | "fitnessMetrics"> & { today: string },
) {
  const analytics = buildRunningAnalytics({
    activities: input.activities,
    fitnessMetrics: input.fitnessMetrics,
    today: input.today,
    weeks: 8,
  });
  const latestActivity = [...input.activities].at(-1) ?? null;
  const latestFitness = [...input.fitnessMetrics].at(-1) ?? null;
  const recentActivities = input.activities.filter((activity) => {
    const delta = latestActivity ? dateMs(latestActivity.date) - dateMs(activity.date) : 0;
    return delta >= 0 && delta <= 13 * DAY_MS;
  });
  const runningCount = recentActivities.filter(
    (activity) => activityGroup(activity) === "running",
  ).length;
  const gymCount = recentActivities.filter(
    (activity) => activityGroup(activity) === "gym",
  ).length;
  const otherCount = recentActivities.length - runningCount - gymCount;
  const bestPaceBand = analytics.paceBandComparisons
    .filter((row) => row.deltaHr !== null)
    .sort((left, right) => Math.abs(left.deltaHr ?? 0) - Math.abs(right.deltaHr ?? 0))[0];
  const activitySummary = latestActivity
    ? `${latestActivity.date}: ${latestActivity.activity_type || "Activity"} for ${formatDistance(
        latestActivity.distance_km,
      )} in ${formatDuration(latestActivity.duration_minutes)}${
        latestActivity.avg_hr ? `, avg HR ${formatNumber(latestActivity.avg_hr, 0)}` : ""
      }.`
    : "No imported activity yet.";
  const recoverySummary = latestFitness
    ? `Latest recovery markers: sleep score ${formatNumber(latestFitness.sleep_score, 0)}, HRV ${formatNumber(
        latestFitness.hrv,
        0,
      )}, resting HR ${formatNumber(latestFitness.resting_hr, 0)}.`
    : "No recovery metrics imported yet.";
  const samePaceSignal = bestPaceBand
    ? `At ${bestPaceBand.band}, average HR moved from ${formatNumber(
        bestPaceBand.previousAvgHr,
        0,
      )} to ${formatNumber(bestPaceBand.currentAvgHr, 0)} bpm.`
    : "Not enough repeated same-pace running yet to compare HR at like-for-like speeds.";

  return [
    `Training picture: ${formatDistance(analytics.current7DistanceKm)} across ${
      analytics.current7RunCount
    } runs in the last 7 days versus ${formatDistance(analytics.previous7DistanceKm)} in the previous 7 days.`,
    `Latest activity: ${activitySummary}`,
    `Recovery context: ${recoverySummary}`,
    `Efficiency signal: ${analytics.coachCards.efficiencyTrend.replace("Efficiency trend: ", "")}`,
    `Same-pace signal: ${samePaceSignal}`,
    `Activity mix: ${runningCount} running, ${gymCount} gym, and ${otherCount} other sessions in the last 14 days.`,
    `Next move: ${analytics.coachCards.suggestedNextRun.replace("Suggested next run: ", "")}`,
  ].join("\n");
}

function systemPrompt(kind: InsightKind) {
  const shared =
    "You are Zach OS, a private personal operating coach and dashboard analyst. Use only the JSON dashboard data supplied by the app. Do not make medical claims, diagnose, or imply clinical certainty. Be cautious, practical, specific, evidence-led, and UK-English. Sound like a serious coach: direct, analytical, calm, and useful rather than fluffy. If data is missing, say so plainly. Avoid saying you know anything outside the stored dashboard data.";

  if (kind === "daily") {
    return `${shared} Return the daily summary with these exact headings: Current state, Today's move, Main bottleneck, Training recommendation, Recovery recommendation, Intellectual habit recommendation, Strategic summary. Under each heading, include 1-3 practical sentences and cite the stored metric signals that justify the recommendation.`;
  }

  return `${shared} Return the weekly report with these exact headings: Fitness trend, Recovery trend, Intellectual habits trend, Finance trend, Strongest week-over-week improvement, Weakest area, Suggested focus for next week. Compare the latest 7-day period against the previous 7-day period when data allows, explain what changed, and finish with one focused weekly operating plan.`;
}

async function callOpenAI(kind: InsightKind, promptData: object) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return null;
  }

  const model = process.env.OPENAI_MODEL || "gpt-4o";
  const response = await fetch("https://api.openai.com/v1/responses", {
    body: JSON.stringify({
      input: [
        { content: systemPrompt(kind), role: "system" },
        {
          content: JSON.stringify(promptData),
          role: "user",
        },
      ],
      max_output_tokens: kind === "daily" ? 1000 : 1300,
      model,
    }),
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || `OpenAI request failed with ${response.status}.`);
  }

  const payload: unknown = await response.json();

  if (
    payload &&
    typeof payload === "object" &&
    "output_text" in payload &&
    typeof payload.output_text === "string"
  ) {
    return payload.output_text.trim();
  }

  const output = (payload as { output?: unknown[] }).output;
  if (Array.isArray(output)) {
    const text = output
      .flatMap((item) => {
        if (!item || typeof item !== "object" || !("content" in item)) {
          return [];
        }
        const content = (item as { content?: unknown }).content;
        if (!Array.isArray(content)) {
          return [];
        }
        return content
          .map((part) => {
            if (!part || typeof part !== "object" || !("text" in part)) {
              return "";
            }
            return String((part as { text?: unknown }).text ?? "");
          })
          .filter(Boolean);
      })
      .join("\n")
      .trim();

    if (text) {
      return text;
    }
  }

  throw new Error("OpenAI returned an unexpected response shape.");
}

export async function generateAiInsight(
  kind: InsightKind,
  input: InsightInput,
): Promise<AiInsightResult> {
  const generatedAt = new Date().toISOString();
  let operating: OperatingRecommendation | null = null;
  const getOperating = () => {
    operating ??= buildOperatingRecommendation(input);
    return operating;
  };
  const getPromptData = () => ({
    ...compactAnalyticsForPrompt(input),
    operatingRecommendation: getOperating(),
  });
  const getFallback = () =>
    kind === "daily"
      ? buildLocalDailyBriefing(input, getOperating())
      : buildLocalWeeklyReport(input, getOperating());

  if (!process.env.OPENAI_API_KEY) {
    return {
      content: getFallback(),
      generatedAt,
      kind,
      source: "fallback",
    };
  }

  try {
    const aiContent = await callOpenAI(kind, getPromptData());

    if (!aiContent) {
      return {
        content: getFallback(),
        generatedAt,
        kind,
        source: "fallback",
      };
    }

    return {
      content: aiContent,
      generatedAt,
      kind,
      source: "openai",
    };
  } catch (error) {
    return {
      content: getFallback(),
      error: error instanceof Error ? error.message : "OpenAI request failed.",
      generatedAt,
      kind,
      source: "fallback",
    };
  }
}
