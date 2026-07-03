import Link from "next/link";

import { AuthPanel } from "@/components/auth-panel";
import { ZachBarChart, ZachLineChart } from "@/components/zach-charts";
import {
  ZachButtonLink,
  ZachDatabaseSetupNotice,
  ZachEmpty,
  ZachMetric,
  ZachNotice,
  ZachPageShell,
  ZachPanel,
  ZachSetupRequired,
  ZachTable,
} from "@/components/zach-shell";
import { sortByDateAscending } from "@/lib/data-shaping";
import {
  friendlyDatabaseError,
  getDatabaseSetupIssue,
} from "@/lib/database-setup";
import {
  buildRunningAnalytics,
  formatDistance,
  formatDuration,
  formatNumber,
  monthlyRunningSeries,
  rangeWeeksFromParam,
  type RunningCoachCards,
} from "@/lib/fitness-analytics";
import {
  generateWeeklyRunningInsight,
  runningInsightPeriod,
} from "@/lib/running-insights";
import { getSupabaseConfig } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { todayInLondon } from "@/lib/dates";

export const dynamic = "force-dynamic";

type RunningPageProps = {
  searchParams: Promise<{
    error?: string;
    message?: string;
    range?: string;
  }>;
};

const rangeLinks = [
  { href: "/running?range=4", label: "4 weeks", value: 4 },
  { href: "/running?range=8", label: "8 weeks", value: 8 },
  { href: "/running?range=12", label: "12 weeks", value: 12 },
  { href: "/running?range=26", label: "6 months", value: 26 },
  { href: "/running?range=52", label: "1 year", value: 52 },
] as const;

function coachCardEntries(cards: RunningCoachCards) {
  return [
    ["Efficiency trend", cards.efficiencyTrend],
    ["Best recent run", cards.bestRecentRun],
    ["Fatigue warning", cards.fatigueWarning],
    ["Suggested next run", cards.suggestedNextRun],
    ["Mileage progression", cards.weeklyMileageProgression],
    ["Easy run efficiency", cards.easyRunEfficiency],
  ];
}

function formatDelta(value: number | null) {
  if (value === null) {
    return "--";
  }

  return `${value > 0 ? "+" : ""}${value.toFixed(0)} bpm`;
}

export default async function RunningPage({ searchParams }: RunningPageProps) {
  const query = await searchParams;

  if (!getSupabaseConfig()) {
    return <ZachSetupRequired title="Connect Supabase before viewing running" />;
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <AuthPanel error={query.error} message={query.message} />;
  }

  const today = todayInLondon();
  const weeks = rangeWeeksFromParam(query.range);
  const [activities, fitnessMetrics] = await Promise.all([
    supabase
      .from("activities")
      .select("*")
      .eq("user_id", user.id)
      .order("date", { ascending: false })
      .limit(3000),
    supabase
      .from("fitness_metrics")
      .select("*")
      .eq("user_id", user.id)
      .order("date", { ascending: false })
      .limit(1000),
  ]);
  const databaseSetupIssue = getDatabaseSetupIssue([
    activities.error,
    fitnessMetrics.error,
  ]);
  const activityRows = sortByDateAscending(activities.data ?? []);
  const fitnessRows = sortByDateAscending(fitnessMetrics.data ?? []);
  const analytics = buildRunningAnalytics({
    activities: activityRows,
    fitnessMetrics: fitnessRows,
    today,
    weeks,
  });
  const weeklyChart = analytics.weeklySeries.map((week) => ({
    avgHr: week.avgHr,
    date: week.label,
    distanceKm: Number(week.distanceKm.toFixed(2)),
    hrv: week.hrv,
    pace: week.paceMinutes,
  }));
  const monthlyChart = monthlyRunningSeries(activityRows)
    .slice(-12)
    .map((month) => ({
      date: month.date,
      distanceKm: Number(month.distanceKm.toFixed(2)),
    }));
  const period = runningInsightPeriod(today);
  let insightContent = "";
  let insightSource: "fallback" | "openai" = "fallback";
  let insightGeneratedAt = "";
  let insightStoreError = "";

  if (!databaseSetupIssue) {
    const cachedInsight = await supabase
      .from("ai_weekly_insights")
      .select("*")
      .eq("user_id", user.id)
      .eq("insight_type", "running")
      .eq("period_start", period.periodStart)
      .maybeSingle();

    if (cachedInsight.error) {
      const generated = await generateWeeklyRunningInsight({
        activities: activityRows,
        fitnessMetrics: fitnessRows,
        today,
        weeks,
      });
      insightContent = generated.content;
      insightSource = generated.source;
      insightGeneratedAt = generated.generatedAt;
      insightStoreError =
        "Run the latest Supabase migration to store weekly AI running reports.";
    } else if (cachedInsight.data) {
      insightContent = cachedInsight.data.content;
      insightSource =
        cachedInsight.data.source === "openai" ? "openai" : "fallback";
      insightGeneratedAt = cachedInsight.data.generated_at;
    } else {
      const generated = await generateWeeklyRunningInsight({
        activities: activityRows,
        fitnessMetrics: fitnessRows,
        today,
        weeks,
      });
      insightContent = generated.content;
      insightSource = generated.source;
      insightGeneratedAt = generated.generatedAt;

      const { error } = await supabase.from("ai_weekly_insights").upsert(
        {
          content: generated.content,
          generated_at: generated.generatedAt,
          insight_type: "running",
          model: generated.model ?? null,
          period_end: generated.periodEnd,
          period_start: generated.periodStart,
          source: generated.source,
          user_id: user.id,
        },
        { onConflict: "user_id,insight_type,period_start" },
      );

      if (error) {
        insightStoreError = friendlyDatabaseError(error);
      }
    }
  }

  return (
    <ZachPageShell
      active="running"
      actions={
        <>
          <ZachButtonLink href="/activities?group=running">Run log</ZachButtonLink>
          <ZachButtonLink href="/garmin-import" primary>
            Garmin import
          </ZachButtonLink>
        </>
      }
      subtitle="Running trends from Garmin/Strava/manual activity summaries. The default view is the last four weeks, with deeper history one click away."
      title="Running"
      userEmail={user.email}
    >
      {(query.error || query.message || activities.error || fitnessMetrics.error) &&
        !databaseSetupIssue && (
          <ZachNotice tone={query.error || activities.error || fitnessMetrics.error ? "error" : "success"}>
            {query.error ||
              (activities.error
                ? friendlyDatabaseError(activities.error)
                : fitnessMetrics.error
                  ? friendlyDatabaseError(fitnessMetrics.error)
                  : query.message)}
          </ZachNotice>
        )}

      {databaseSetupIssue ? (
        <ZachDatabaseSetupNotice issue={databaseSetupIssue} />
      ) : (
        <>
          <section className="grid gap-3 md:grid-cols-4">
            <ZachMetric
              label="Current 7 days"
              meta={`${analytics.current7RunCount} runs`}
              value={formatDistance(analytics.current7DistanceKm)}
            />
            <ZachMetric
              label="Previous 7 days"
              value={formatDistance(analytics.previous7DistanceKm)}
            />
            <ZachMetric
              label="Current week"
              value={formatDistance(analytics.currentCalendarWeekDistanceKm)}
            />
            <ZachMetric
              label="Latest pace"
              meta={analytics.latestRun?.date ?? "No run yet"}
              value={analytics.latestRun?.paceLabel ?? "--"}
            />
          </section>

          <ZachPanel className="bg-[#f6efe4]">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                  Weekly coach insight
                </p>
                <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                  Running briefing
                </h2>
                <p className="mt-2 text-sm text-[#8c8273]">
                  {period.periodStart} to {period.periodEnd} -{" "}
                  {insightSource === "openai" ? "OpenAI" : "local fallback"} -{" "}
                  {insightGeneratedAt
                    ? new Date(insightGeneratedAt).toLocaleString("en-GB")
                    : "generated on view"}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {rangeLinks.map((range) => (
                  <Link
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                      weeks === range.value
                        ? "bg-[#241f1a] text-[#f9f4ec]"
                        : "border border-[#2c2824]/[0.13] text-[#6f6254] hover:bg-[#2c2824]/[0.06]"
                    }`}
                    href={range.href}
                    key={range.value}
                  >
                    {range.label}
                  </Link>
                ))}
              </div>
            </div>
            {insightStoreError && (
              <div className="mt-4">
                <ZachNotice tone="warning">{insightStoreError}</ZachNotice>
              </div>
            )}
            <div className="mt-5 whitespace-pre-wrap text-sm leading-7 text-[#3a342c]">
              {insightContent || "No running insight generated yet."}
            </div>
          </ZachPanel>

          <section className="grid gap-4 xl:grid-cols-[1fr_1fr]">
            <ZachPanel>
              <div className="mb-4">
                <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                  Weekly distance
                </p>
                <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                  Running volume
                </h2>
              </div>
              <ZachBarChart
                bars={[{ color: "#bb5d3a", key: "distanceKm", label: "Distance km" }]}
                data={weeklyChart}
                height={320}
              />
            </ZachPanel>
            <ZachPanel>
              <div className="mb-4">
                <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                  Average HR trend
                </p>
                <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                  Heart-rate drift
                </h2>
              </div>
              <ZachLineChart
                data={weeklyChart.filter((week) => week.avgHr !== null)}
                height={320}
                lines={[{ color: "#6f7d8c", key: "avgHr", label: "Average HR" }]}
              />
            </ZachPanel>
          </section>

          <ZachPanel>
            <div className="mb-4">
              <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                Weekly pace
              </p>
              <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                Average pace trend
              </h2>
              <p className="mt-2 text-sm text-[#8c8273]">
                Lower is better here. This uses weekly distance-weighted pace, so
                a short fast run does not dominate the whole week.
              </p>
            </div>
            <ZachLineChart
              data={weeklyChart.filter((week) => week.pace !== null)}
              height={300}
              lines={[{ color: "#bb5d3a", key: "pace", label: "Min/km" }]}
            />
          </ZachPanel>

          <section className="grid gap-4 xl:grid-cols-[0.8fr_1.2fr]">
            <ZachPanel>
              <div className="mb-4">
                <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                  Monthly running
                </p>
                <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                  Month trend
                </h2>
              </div>
              <ZachBarChart
                bars={[{ color: "#7a8c5a", key: "distanceKm", label: "Distance km" }]}
                data={monthlyChart}
                height={300}
              />
            </ZachPanel>
            <ZachPanel>
              <div className="mb-4">
                <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                  Coach cards
                </p>
                <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                  What changed
                </h2>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {coachCardEntries(analytics.coachCards).map(([label, value]) => (
                  <article
                    className="rounded-md border border-[#2c2824]/[0.1] bg-[#f9f4ec] p-4"
                    key={label}
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9a7d5f]">
                      {label}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#3a342c]">{value}</p>
                  </article>
                ))}
              </div>
            </ZachPanel>
          </section>

          <ZachPanel>
            <div className="mb-4">
              <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                Same pace versus HR
              </p>
              <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                Pace-band comparison
              </h2>
            </div>
            {analytics.paceBandComparisons.length ? (
              <ZachTable
                columns={[
                  "Pace band",
                  "This 7 days",
                  "Previous 7 days",
                  "HR change",
                  "Runs",
                ]}
                rows={analytics.paceBandComparisons.map((row) => ({
                  "HR change": formatDelta(row.deltaHr),
                  "Pace band": row.band,
                  "Previous 7 days": formatNumber(row.previousAvgHr, 0),
                  Runs: `${row.currentRuns} / ${row.previousRuns}`,
                  "This 7 days": formatNumber(row.currentAvgHr, 0),
                }))}
              />
            ) : (
              <ZachEmpty>
                Not enough repeated pace-band data yet. Once Garmin imports a few
                runs at similar speeds, this is where the “6:00/km HR changed
                from 160 to 155” style insight will show up.
              </ZachEmpty>
            )}
          </ZachPanel>

          <ZachPanel>
            <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                  Recent runs
                </p>
                <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                  Run log
                </h2>
              </div>
              <Link className="text-sm font-semibold text-[#bb5d3a]" href="/activities?group=running">
                View all activities
              </Link>
            </div>
            <ZachTable
              columns={[
                "Date",
                "Distance",
                "Duration",
                "Avg pace",
                "Avg HR",
                "Max HR",
                "Main benefit",
              ]}
              empty="No running activities imported yet."
              rows={analytics.recentRuns.map((run) => ({
                "Avg HR": run.avg_hr ?? "--",
                "Avg pace": run.paceLabel,
                Date: (
                  <Link className="font-semibold text-[#bb5d3a]" href={`/activities/${run.id}`}>
                    {run.date}
                  </Link>
                ),
                Distance: formatDistance(run.distance_km),
                Duration: formatDuration(run.duration_minutes),
                "Main benefit": run.benefit,
                "Max HR": run.max_hr ?? "--",
              }))}
            />
          </ZachPanel>
        </>
      )}
    </ZachPageShell>
  );
}
