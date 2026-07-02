import "server-only";

import type { Activity, FitnessMetric } from "@/lib/supabase/database.types";
import {
  buildRunningAnalytics,
  formatDistance,
  formatNumber,
  formatPace,
  weekStart,
  type RunningAnalytics,
  type RunningRangeWeeks,
} from "@/lib/fitness-analytics";
import { toDate } from "@/lib/utils";

export type WeeklyRunningInsight = {
  content: string;
  error?: string;
  generatedAt: string;
  model?: string;
  periodEnd: string;
  periodStart: string;
  source: "fallback" | "openai";
};

function addDays(date: string, days: number) {
  const value = toDate(date);
  value.setUTCDate(value.getUTCDate() + days);
  return value.toISOString().slice(0, 10);
}

export function runningInsightPeriod(today: string) {
  const periodStart = weekStart(today);
  return {
    periodEnd: addDays(periodStart, 6),
    periodStart,
  };
}

function compactAnalytics(analytics: RunningAnalytics) {
  return {
    coachCards: analytics.coachCards,
    current7: {
      avgPace: formatPace(analytics.current7PaceMinutes),
      distanceKm: Number(analytics.current7DistanceKm.toFixed(2)),
      runs: analytics.current7RunCount,
    },
    currentCalendarWeekDistanceKm: Number(
      analytics.currentCalendarWeekDistanceKm.toFixed(2),
    ),
    latestRun: analytics.latestRun
      ? {
          avgHr: analytics.latestRun.avg_hr,
          benefit: analytics.latestRun.benefit,
          date: analytics.latestRun.date,
          distanceKm: analytics.latestRun.distance_km,
          pace: analytics.latestRun.paceLabel,
        }
      : null,
    paceBandComparisons: analytics.paceBandComparisons,
    previous7: {
      avgPace: formatPace(analytics.previous7PaceMinutes),
      distanceKm: Number(analytics.previous7DistanceKm.toFixed(2)),
    },
    previousCalendarWeekDistanceKm: Number(
      analytics.previousCalendarWeekDistanceKm.toFixed(2),
    ),
    recentRuns: analytics.recentRuns.slice(0, 12).map((run) => ({
      avgHr: run.avg_hr,
      benefit: run.benefit,
      date: run.date,
      distanceKm: run.distance_km,
      durationMinutes: run.duration_minutes,
      pace: run.paceLabel,
    })),
    weeklySeries: analytics.weeklySeries.map((week) => ({
      avgHr: week.avgHr,
      date: week.date,
      distanceKm: Number(week.distanceKm.toFixed(2)),
      hrv: week.hrv,
      pace: formatPace(week.paceMinutes),
      runCount: week.runCount,
      trainingLoad: week.trainingLoad,
    })),
  };
}

export function buildLocalRunningInsight(analytics: RunningAnalytics) {
  const bestPaceBand = analytics.paceBandComparisons
    .filter((row) => row.deltaHr !== null)
    .sort((left, right) => (left.deltaHr ?? 0) - (right.deltaHr ?? 0))[0];
  const latestWeek = analytics.weeklySeries.at(-1);
  const previousWeek = analytics.weeklySeries.at(-2);
  const weeklyDistanceText =
    latestWeek && previousWeek
      ? `This calendar week is ${formatDistance(
          analytics.currentCalendarWeekDistanceKm,
        )} versus ${formatDistance(
          analytics.previousCalendarWeekDistanceKm,
        )} last week.`
      : "Weekly mileage comparison needs one more week of running data.";
  const paceBandText = bestPaceBand
    ? `The clearest pace-band signal is ${bestPaceBand.band}: average HR moved from ${formatNumber(
        bestPaceBand.previousAvgHr,
        0,
      )} to ${formatNumber(bestPaceBand.currentAvgHr, 0)} bpm.`
    : "There is not yet enough repeated pace-band data to compare HR at the same speed.";

  return [
    "Weekly running insight",
    "",
    `Running volume: ${weeklyDistanceText}`,
    `Efficiency: ${analytics.coachCards.efficiencyTrend}`,
    `Same-pace HR: ${paceBandText}`,
    `Long-run signal: ${analytics.coachCards.longRunProgression}`,
    `Easy-run signal: ${analytics.coachCards.easyRunEfficiency}`,
    `Recovery context: ${analytics.coachCards.fatigueWarning}`,
    `Best recent run: ${analytics.coachCards.bestRecentRun.replace("Best recent run: ", "")}`,
    `Suggested next run: ${analytics.coachCards.suggestedNextRun.replace("Suggested next run: ", "")}`,
    "",
    "Interpretation: treat this as a performance trend read, not a medical assessment. The most useful next step is to create repeated comparable runs, because same-pace HR only becomes powerful when the same pace bands have several data points.",
  ].join("\n");
}

function systemPrompt() {
  return [
    "You are Zach OS running coach, a private performance analyst using only stored Zach OS running and Garmin recovery data.",
    "Do not make medical claims, diagnose, or imply clinical certainty.",
    "Be direct, detailed, specific, and interesting. UK English.",
    "Focus on these angles: same pace versus HR, same distance versus pace, weekly distance versus HRV/recovery, long run progression, easy run efficiency, training load balance.",
    "Use exact metric evidence from the JSON. If data is missing, say what needs to be collected next.",
    "Return a detailed weekly insight with short headings and practical next actions.",
  ].join(" ");
}

async function callOpenAI(promptData: object) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return null;
  }

  const model = process.env.OPENAI_MODEL || "gpt-4o";
  const response = await fetch("https://api.openai.com/v1/responses", {
    body: JSON.stringify({
      input: [
        { content: systemPrompt(), role: "system" },
        { content: JSON.stringify(promptData), role: "user" },
      ],
      max_output_tokens: 1500,
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

export async function generateWeeklyRunningInsight(input: {
  activities: Activity[];
  fitnessMetrics: FitnessMetric[];
  today: string;
  weeks?: RunningRangeWeeks;
}): Promise<WeeklyRunningInsight> {
  const generatedAt = new Date().toISOString();
  const period = runningInsightPeriod(input.today);
  const analytics = buildRunningAnalytics(input);
  const fallback = () => buildLocalRunningInsight(analytics);

  if (!process.env.OPENAI_API_KEY) {
    return {
      content: fallback(),
      generatedAt,
      periodEnd: period.periodEnd,
      periodStart: period.periodStart,
      source: "fallback",
    };
  }

  try {
    const content = await callOpenAI({
      analytics: compactAnalytics(analytics),
      period,
      requestedDefaultView: `${input.weeks ?? 4} weeks`,
    });

    return {
      content: content || fallback(),
      generatedAt,
      model: process.env.OPENAI_MODEL || "gpt-4o",
      periodEnd: period.periodEnd,
      periodStart: period.periodStart,
      source: content ? "openai" : "fallback",
    };
  } catch (error) {
    return {
      content: fallback(),
      error: error instanceof Error ? error.message : "OpenAI request failed.",
      generatedAt,
      periodEnd: period.periodEnd,
      periodStart: period.periodStart,
      source: "fallback",
    };
  }
}
