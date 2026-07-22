import Link from "next/link";

import { AiInsightsTool } from "@/components/ai-insights-tool";
import { AuthPanel } from "@/components/auth-panel";
import {
  ZachButtonLink,
  ZachDatabaseSetupNotice,
  ZachMetric,
  ZachNotice,
  ZachPageShell,
  ZachPanel,
  ZachSetupRequired,
  ZachTable,
} from "@/components/zach-shell";
import { calculateAnalytics } from "@/lib/analytics";
import { buildLocalActivityOverview } from "@/lib/ai-insights";
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
  formatPace,
  formatActivityType,
  paceMinutesPerKm,
} from "@/lib/fitness-analytics";
import { todayInLondon } from "@/lib/dates";
import { getSupabaseConfig } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

type AiInsightsPageProps = {
  searchParams: Promise<{
    error?: string;
    message?: string;
  }>;
};

function SetupRequired() {
  return <ZachSetupRequired title="Connect Supabase before generating AI insights" />;
}

function formatAverage(value: number | null, unit = "") {
  return value === null ? "--" : `${value.toFixed(1)}${unit}`;
}

export default async function AiInsightsPage({
  searchParams,
}: AiInsightsPageProps) {
  const params = await searchParams;
  const today = todayInLondon();

  if (!getSupabaseConfig()) {
    return <SetupRequired />;
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <AuthPanel error={params.error} message={params.message} />;
  }

  const [activities, dailyLogs, financeSnapshots, fitnessMetrics] =
    await Promise.all([
      supabase
        .from("activities")
        .select("*")
        .eq("user_id", user.id)
        .order("date", { ascending: false })
        .limit(3000),
      supabase
        .from("daily_logs")
        .select("*")
        .eq("user_id", user.id)
        .order("date", { ascending: false })
        .limit(365),
      supabase
        .from("finance_snapshots")
        .select("*")
        .eq("user_id", user.id)
        .order("date", { ascending: false })
        .limit(365),
      supabase
        .from("fitness_metrics")
        .select("*")
        .eq("user_id", user.id)
        .order("date", { ascending: false })
        .limit(365),
    ]);

  const queryErrors = [
    activities.error,
    dailyLogs.error,
    financeSnapshots.error,
    fitnessMetrics.error,
  ];
  const databaseSetupIssue = getDatabaseSetupIssue(queryErrors);
  const dataError =
    databaseSetupIssue === null
      ? queryErrors.find(Boolean)
      : null;
  const activityRows = sortByDateAscending(activities.data ?? []);
  const dailyRows = sortByDateAscending(dailyLogs.data ?? []);
  const fitnessRows = sortByDateAscending(fitnessMetrics.data ?? []);
  const analytics = calculateAnalytics({
    activities: activityRows,
    dailyLogs: dailyRows,
    fitnessMetrics: fitnessRows,
  });
  const activityOverview = buildLocalActivityOverview({
    activities: activityRows,
    fitnessMetrics: fitnessRows,
    today,
  });
  const runningAnalytics = buildRunningAnalytics({
    activities: activityRows,
    fitnessMetrics: fitnessRows,
    today,
    weeks: 8,
  });
  const recentActivities = [...activityRows].slice(-8).reverse();
  const latestFitness = fitnessRows.at(-1) ?? null;

  return (
    <ZachPageShell
      active="ai"
      actions={<ZachButtonLink href="/running">Running insight</ZachButtonLink>}
      subtitle="Daily and weekly coaching summaries from stored Zach OS data. OpenAI is optional; local fallbacks keep the page useful without an API key."
      title="AI Insights"
      userEmail={user.email}
    >
        {(params.error || params.message || dataError) && (
          <ZachNotice tone={params.error || dataError ? "error" : "success"}>
            {params.error ||
              (dataError ? friendlyDatabaseError(dataError) : undefined) ||
              params.message}
          </ZachNotice>
        )}

        {databaseSetupIssue ? (
          <ZachDatabaseSetupNotice
            issue={databaseSetupIssue}
            title="Run the database schema before AI insights"
          />
        ) : (
          <AiInsightsTool openAiEnabled={Boolean(process.env.OPENAI_API_KEY)} />
        )}

        {!databaseSetupIssue && (
          <>
            <ZachPanel className="bg-[#f6efe4]">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                    Activity overview
                  </p>
                  <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                    Detailed training read
                  </h2>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-[#71685c]">
                    A richer local overview of recent Garmin-linked activity,
                    recovery context, and what the current data says to do next.
                  </p>
                </div>
                <Link
                  className="inline-flex h-10 items-center rounded-md border border-[#d2c8b8] bg-[#fffaf2] px-4 text-sm font-semibold text-[#2c2824] transition hover:border-[#b9aa95]"
                  href="/running"
                >
                  Open running drilldown
                </Link>
              </div>
              <section className="mt-5 grid gap-3 md:grid-cols-4">
                <ZachMetric
                  label="Last 7 days"
                  meta={`${runningAnalytics.current7RunCount} runs`}
                  value={formatDistance(runningAnalytics.current7DistanceKm)}
                />
                <ZachMetric
                  label="Previous 7 days"
                  value={formatDistance(runningAnalytics.previous7DistanceKm)}
                />
                <ZachMetric
                  label="Latest activity"
                  meta={runningAnalytics.latestRun?.date ?? "No run yet"}
                  value={runningAnalytics.latestRun?.paceLabel ?? "--"}
                />
                <ZachMetric
                  label="Latest recovery"
                  meta={latestFitness?.date ?? "No fitness row"}
                  value={
                    latestFitness
                      ? `${formatNumber(latestFitness.sleep_score, 0)} / ${formatNumber(latestFitness.hrv, 0)}`
                      : "--"
                  }
                />
              </section>
              <div className="mt-5 whitespace-pre-wrap text-sm leading-7 text-[#3a342c]">
                {activityOverview}
              </div>
            </ZachPanel>

            <section className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
              <ZachPanel>
                <div className="mb-4">
                  <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                    Recent activity
                  </p>
                  <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                    Latest sessions
                  </h2>
                </div>
                <ZachTable
                  columns={["Date", "Type", "Distance", "Duration", "Pace", "Avg HR"]}
                  rows={recentActivities.map((activity) => ({
                    "Avg HR": formatNumber(activity.avg_hr, 0),
                    Date: (
                      <Link
                        className="font-semibold text-[#bb5d3a]"
                        href={
                          activity.distance_km && activity.distance_km > 0
                            ? `/activities/${activity.id}`
                            : "/activities"
                        }
                      >
                        {activity.date}
                      </Link>
                    ),
                    Distance: formatDistance(activity.distance_km),
                    Duration: formatDuration(activity.duration_minutes),
                    Pace: formatPace(paceMinutesPerKm(activity)),
                    Type: formatActivityType(activity),
                  }))}
                />
              </ZachPanel>

              <ZachPanel>
                <div className="mb-4">
                  <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                    Running signals
                  </p>
                  <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                    Coach cards
                  </h2>
                </div>
                <div className="grid gap-3">
                  {[
                    ["Efficiency trend", runningAnalytics.coachCards.efficiencyTrend],
                    ["Long run progression", runningAnalytics.coachCards.longRunProgression],
                    ["Fatigue warning", runningAnalytics.coachCards.fatigueWarning],
                    ["Suggested next run", runningAnalytics.coachCards.suggestedNextRun],
                  ].map(([label, note]) => (
                    <article
                      className="rounded-md border border-[#2c2824]/[0.1] bg-[#f9f4ec] p-4"
                      key={label}
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9a7d5f]">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#3a342c]">{note}</p>
                    </article>
                  ))}
                </div>
              </ZachPanel>
            </section>

            <section className="grid gap-4 lg:grid-cols-2">
              <ZachPanel>
              <div className="mb-4">
                <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                  Simple analytics
                </p>
                <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                  7-day and 30-day averages
                </h2>
              </div>
              <ZachTable
                columns={["Metric", "7-day", "30-day", "Trend"]}
                rows={analytics.averages.map((metric) => ({
                  "30-day": formatAverage(metric.thirtyDay, metric.unit),
                  "7-day": formatAverage(metric.sevenDay, metric.unit),
                  Metric: metric.label,
                  Trend: metric.trend,
                }))}
              />
            </ZachPanel>

              <ZachPanel>
                <div className="mb-4">
                  <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                    Relationships
                  </p>
                  <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                    Behaviour links
                  </h2>
                </div>
                <section className="grid gap-3 md:grid-cols-2">
                  <ZachMetric label="Best mood day" value={analytics.bestMoodDay} />
                </section>
                <div className="mt-4 grid gap-3">
                  {analytics.relationships.map((relationship) => (
                    <article
                      className="rounded-md border border-[#2c2824]/[0.1] bg-[#f9f4ec] p-4"
                      key={relationship.label}
                    >
                      <div className="flex items-baseline justify-between gap-3">
                        <p className="text-sm font-semibold text-[#2c2824]">
                          {relationship.label}
                        </p>
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] ${
                            relationship.strength === "clear"
                              ? "bg-[#bb5d3a]/12 text-[#8f442c]"
                              : relationship.strength === "slight"
                                ? "bg-[#2c2824]/[0.07] text-[#6f6254]"
                                : "bg-[#2c2824]/[0.05] text-[#9a8d7a]"
                          }`}
                        >
                          {relationship.headline}
                        </span>
                      </div>
                      <p className="mt-1 text-sm leading-6 text-[#71685c]">
                        {relationship.note}
                      </p>
                      <p className="mt-1 font-mono text-xs text-[#9a8d7a]">
                        r = {relationship.value?.toFixed(2) ?? "--"}
                      </p>
                    </article>
                  ))}
                </div>
              </ZachPanel>
            </section>
          </>
        )}
    </ZachPageShell>
  );
}
