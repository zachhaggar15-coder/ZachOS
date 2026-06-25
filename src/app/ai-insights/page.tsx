import Link from "next/link";

import { AiInsightsTool } from "@/components/ai-insights-tool";
import { AuthPanel } from "@/components/auth-panel";
import { DatabaseSetupNotice } from "@/components/database-setup-notice";
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
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#07090d] px-4 text-zinc-100">
      <section className="w-full max-w-2xl rounded border border-white/10 bg-white/[0.035] p-8">
        <p className="font-mono text-xs uppercase tracking-[0.32em] text-cyan-200/80">
          Setup required
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white">
          Connect Supabase before generating AI insights
        </h1>
        <p className="mt-3 text-sm leading-6 text-zinc-400">
          Add Supabase environment variables and run the SQL migrations before
          using the insights page.
        </p>
      </section>
    </main>
  );
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
    <main className="min-h-screen bg-[#07090d] text-zinc-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.13),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(16,185,129,0.1),transparent_26%)]" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-cyan-200/80">
              Zach OS
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              Insights for {user.email ?? "private user"}
            </p>
          </div>
          <Link
            className="inline-flex h-10 items-center rounded border border-white/10 bg-white/[0.04] px-4 text-sm font-semibold text-zinc-100 transition hover:border-cyan-200/30 hover:bg-cyan-300/10"
            href="/"
          >
            Back to dashboard
          </Link>
        </header>

        {(params.error || params.message || dataError) && (
          <div
            className={`rounded border px-4 py-3 text-sm ${
              params.error || dataError
                ? "border-rose-300/25 bg-rose-400/10 text-rose-100"
                : "border-emerald-300/25 bg-emerald-400/10 text-emerald-100"
            }`}
          >
            {params.error ||
              (dataError ? friendlyDatabaseError(dataError) : undefined) ||
              params.message}
          </div>
        )}

        {databaseSetupIssue ? (
          <DatabaseSetupNotice
            issue={databaseSetupIssue}
            title="Run the database schema before AI insights"
          />
        ) : (
          <AiInsightsTool openAiEnabled={Boolean(process.env.OPENAI_API_KEY)} />
        )}

        {!databaseSetupIssue && <section className="grid gap-4 lg:grid-cols-2">
          <article className="rounded border border-white/10 bg-white/[0.035] p-5">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-cyan-200/70">
              Simple analytics
            </p>
            <h2 className="mt-1 text-lg font-semibold text-white">
              7-day and 30-day averages
            </h2>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="text-xs uppercase tracking-[0.16em] text-zinc-500">
                  <tr>
                    <th className="border-b border-white/10 px-3 py-2">Metric</th>
                    <th className="border-b border-white/10 px-3 py-2">7-day</th>
                    <th className="border-b border-white/10 px-3 py-2">30-day</th>
                    <th className="border-b border-white/10 px-3 py-2">Trend</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-300">
                  {analytics.averages.map((metric) => (
                    <tr className="border-b border-white/5" key={metric.label}>
                      <td className="px-3 py-2">{metric.label}</td>
                      <td className="px-3 py-2">
                        {formatAverage(metric.sevenDay, metric.unit)}
                      </td>
                      <td className="px-3 py-2">
                        {formatAverage(metric.thirtyDay, metric.unit)}
                      </td>
                      <td className="px-3 py-2 capitalize">{metric.trend}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <article className="rounded border border-white/10 bg-white/[0.035] p-5">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-cyan-200/70">
              Relationships
            </p>
            <h2 className="mt-1 text-lg font-semibold text-white">
              Behaviour links
            </h2>
            <div className="mt-4 grid gap-3">
              <div className="border-l border-cyan-200/25 pl-3">
                <p className="text-xs text-zinc-500">Best day for mood</p>
                <p className="mt-1 font-medium text-zinc-100">
                  {analytics.bestMoodDay}
                </p>
              </div>
              {analytics.relationships.map((relationship) => (
                <div className="border-l border-cyan-200/25 pl-3" key={relationship.label}>
                  <p className="text-xs text-zinc-500">
                    {relationship.label}
                  </p>
                  <p className="mt-1 text-sm text-zinc-200">
                    {relationship.note}
                  </p>
                  <p className="mt-1 font-mono text-xs text-zinc-500">
                    r = {relationship.value?.toFixed(2) ?? "--"}
                  </p>
                </div>
              ))}
              <div className="border-l border-cyan-200/25 pl-3">
                <p className="text-xs text-zinc-500">
                  Consultant readiness score
                </p>
                <p className="mt-1 font-medium text-zinc-100">
                  {consultantReadiness.score}/100
                </p>
              </div>
            </div>
          </article>
        </section>}
      </div>
    </main>
  );
}
