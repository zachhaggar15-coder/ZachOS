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
import { calculateAnalytics, calculateConsultantReadiness } from "@/lib/analytics";
import { sortByDateAscending } from "@/lib/data-shaping";
import {
  friendlyDatabaseError,
  getDatabaseSetupIssue,
} from "@/lib/database-setup";
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

  const [activities, consultantLogs, dailyLogs, financeSnapshots, fitnessMetrics] =
    await Promise.all([
      supabase
        .from("activities")
        .select("*")
        .eq("user_id", user.id)
        .order("date", { ascending: false })
        .limit(3000),
      supabase
        .from("consultant_readiness_logs")
        .select("*")
        .eq("user_id", user.id)
        .order("date", { ascending: false })
        .limit(365),
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
    consultantLogs.error,
    dailyLogs.error,
    financeSnapshots.error,
    fitnessMetrics.error,
  ];
  const databaseSetupIssue = getDatabaseSetupIssue(queryErrors);
  const dataError =
    databaseSetupIssue === null
      ? queryErrors.find(Boolean)
      : null;
  const analytics = calculateAnalytics({
    activities: sortByDateAscending(activities.data ?? []),
    dailyLogs: sortByDateAscending(dailyLogs.data ?? []),
    fitnessMetrics: sortByDateAscending(fitnessMetrics.data ?? []),
  });
  const consultantReadiness = calculateConsultantReadiness({
    consultantLogs: sortByDateAscending(consultantLogs.data ?? []),
    dailyLogs: sortByDateAscending(dailyLogs.data ?? []),
  });

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
                <ZachMetric label="Readiness" value={`${consultantReadiness.score}/100`} />
              </section>
              <div className="mt-4 grid gap-3">
                {analytics.relationships.map((relationship) => (
                  <article
                    className="rounded-md border border-[#2c2824]/[0.1] bg-[#f9f4ec] p-4"
                    key={relationship.label}
                  >
                    <p className="text-sm font-semibold text-[#2c2824]">
                      {relationship.label}
                    </p>
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
        )}
    </ZachPageShell>
  );
}
