import { AuthPanel } from "@/components/auth-panel";
import { ZachLineChart, ZachScatterChart } from "@/components/zach-charts";
import {
  ZachButtonLink,
  ZachDatabaseSetupNotice,
  ZachMetric,
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
import { formatShortDate } from "@/lib/dates";
import { weeklyRunningSeries } from "@/lib/fitness-analytics";
import { getSupabaseConfig } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { numeric } from "@/lib/utils";

export const dynamic = "force-dynamic";

type HrvPageProps = {
  searchParams: Promise<{ error?: string; message?: string }>;
};

function average(values: number[]) {
  const usable = values.filter((value) => Number.isFinite(value) && value > 0);
  return usable.length
    ? usable.reduce((total, value) => total + value, 0) / usable.length
    : null;
}

function formatValue(value: number | null | undefined, digits = 0) {
  return typeof value === "number" && Number.isFinite(value) ? value.toFixed(digits) : "--";
}

export default async function HrvPage({ searchParams }: HrvPageProps) {
  const query = await searchParams;

  if (!getSupabaseConfig()) {
    return <ZachSetupRequired title="Connect Supabase before viewing HRV" />;
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <AuthPanel error={query.error} message={query.message} />;
  }

  const [fitnessMetrics, activities] = await Promise.all([
    supabase
      .from("fitness_metrics")
      .select("*")
      .eq("user_id", user.id)
      .order("date", { ascending: false })
      .limit(1000),
    supabase
      .from("activities")
      .select("*")
      .eq("user_id", user.id)
      .order("date", { ascending: false })
      .limit(3000),
  ]);
  const databaseSetupIssue = getDatabaseSetupIssue([
    fitnessMetrics.error,
    activities.error,
  ]);
  const fitnessRows = sortByDateAscending(fitnessMetrics.data ?? []);
  const activityRows = sortByDateAscending(activities.data ?? []);
  const latest = fitnessRows.at(-1);
  const hrvChart = fitnessRows
    .filter((row) => row.hrv !== null)
    .map((row) => ({ date: formatShortDate(row.date), value: row.hrv }));
  const today = latest?.date ?? new Date().toISOString().slice(0, 10);
  const weekly = weeklyRunningSeries(activityRows, fitnessRows, today, 12);
  const scatter = weekly
    .filter((row) => row.hrv !== null && (row.trainingLoad !== null || row.distanceKm > 0))
    .map((row) => ({
      label: row.label,
      x: row.trainingLoad ?? row.distanceKm,
      y: row.hrv,
    }));
  const sevenDay = average(fitnessRows.slice(-7).map((row) => numeric(row.hrv)));
  const thirtyDay = average(fitnessRows.slice(-30).map((row) => numeric(row.hrv)));

  return (
    <ZachPageShell
      active="hrv"
      actions={<ZachButtonLink href="/recovery">Recovery view</ZachButtonLink>}
      subtitle="HRV as a Garmin-derived recovery signal, shown alongside training load context where available."
      title="HRV"
      userEmail={user.email}
    >
      {(query.error || query.message || fitnessMetrics.error || activities.error) &&
        !databaseSetupIssue && (
          <div className="rounded-md border border-[#bb5d3a]/35 bg-[#bb5d3a]/10 px-4 py-3 text-sm text-[#8d3f26]">
            {query.error ||
              (fitnessMetrics.error
                ? friendlyDatabaseError(fitnessMetrics.error)
                : activities.error
                  ? friendlyDatabaseError(activities.error)
                  : query.message)}
          </div>
        )}

      {databaseSetupIssue ? (
        <ZachDatabaseSetupNotice issue={databaseSetupIssue} />
      ) : (
        <>
          <section className="grid gap-3 md:grid-cols-3">
            <ZachMetric label="Latest HRV" meta={latest?.date ?? "No Garmin row yet"} value={formatValue(latest?.hrv)} />
            <ZachMetric label="7-day average" value={formatValue(sevenDay)} />
            <ZachMetric label="30-day average" value={formatValue(thirtyDay)} />
          </section>

          <section className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
            <ZachPanel>
              <div className="mb-4">
                <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                  HRV over time
                </p>
                <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                  Daily HRV trend
                </h2>
              </div>
              <ZachLineChart data={hrvChart} height={320} />
            </ZachPanel>
            <ZachPanel>
              <div className="mb-4">
                <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                  Load relationship
                </p>
                <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                  Training load vs HRV
                </h2>
              </div>
              <ZachScatterChart
                data={scatter}
                height={320}
                xLabel="Load or weekly km"
                yLabel="HRV"
              />
            </ZachPanel>
          </section>

          <ZachPanel>
            <ZachTable
              columns={["Date", "HRV", "Training load", "Sleep score", "Resting HR"]}
              empty="No HRV rows yet."
              rows={[...fitnessRows].reverse().map((row) => ({
                Date: row.date,
                HRV: row.hrv ?? "--",
                "Resting HR": row.resting_hr ?? "--",
                "Sleep score": row.sleep_score ?? "--",
                "Training load": row.training_load ?? "--",
              }))}
            />
          </ZachPanel>
        </>
      )}
    </ZachPageShell>
  );
}
