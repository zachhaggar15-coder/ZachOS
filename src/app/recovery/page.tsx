import { AuthPanel } from "@/components/auth-panel";
import { ZachBarChart, ZachDualAxisChart, ZachLineChart, ZachScatterChart } from "@/components/zach-charts";
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
import { weeklyFitnessTrendSeries, weeklyRunningSeries } from "@/lib/fitness-analytics";
import { getSupabaseConfig } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { numeric } from "@/lib/utils";

export const dynamic = "force-dynamic";

type RecoveryPageProps = {
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

function recoveryReadiness(latestSleep: number, latestHrv: number, avgSleep: number | null, avgHrv: number | null) {
  if (!latestSleep && !latestHrv) {
    return "No recovery baseline yet.";
  }

  const sleepOkay = latestSleep >= 70 || (avgSleep !== null && latestSleep >= avgSleep);
  const hrvOkay = latestHrv > 0 && (avgHrv === null || latestHrv >= avgHrv);

  if (sleepOkay && hrvOkay) {
    return "Recovery signals look broadly supportive for normal training.";
  }

  if (!sleepOkay && !hrvOkay) {
    return "Recovery signals are both below useful thresholds; keep the next session easy.";
  }

  return "Recovery signals are mixed; use an easy session unless you feel unusually fresh.";
}

export default async function RecoveryPage({ searchParams }: RecoveryPageProps) {
  const query = await searchParams;

  if (!getSupabaseConfig()) {
    return <ZachSetupRequired title="Connect Supabase before viewing recovery" />;
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
  const today = latest?.date ?? new Date().toISOString().slice(0, 10);
  const sevenDaySleep = average(
    fitnessRows.slice(-7).map((row) => numeric(row.sleep_score)),
  );
  const sevenDayHrv = average(fitnessRows.slice(-7).map((row) => numeric(row.hrv)));
  const recoveryChart = fitnessRows
    .filter((row) => row.sleep_score !== null || row.hrv !== null)
    .map((row) => ({
      date: formatShortDate(row.date),
      hrv: row.hrv,
      sleepScore: row.sleep_score,
    }));
  const weeklyRecoveryChart = weeklyFitnessTrendSeries(fitnessRows, today, 16).map(
    (row) => ({
      date: row.label,
      hrv: row.hrv,
      restingHr: row.restingHr,
      sleepScore: row.sleepScore,
      trainingLoad: row.trainingLoad,
    }),
  );
  const weekly = weeklyRunningSeries(activityRows, fitnessRows, today, 12);
  const loadChart = weekly.map((row) => ({
    date: row.label,
    distanceKm: row.distanceKm,
    trainingLoad: row.trainingLoad,
  }));
  const scatter = weekly
    .filter((row) => row.hrv !== null && (row.trainingLoad !== null || row.distanceKm > 0))
    .map((row) => ({
      label: row.label,
      x: row.trainingLoad ?? row.distanceKm,
      y: row.hrv,
    }));
  const latestSleep = numeric(latest?.sleep_score);
  const latestHrv = numeric(latest?.hrv);

  return (
    <ZachPageShell
      active="recovery"
      actions={<ZachButtonLink href="/hrv">HRV detail</ZachButtonLink>}
      subtitle="Recovery is based on Garmin-style inputs only: sleep score, HRV, resting HR and training load."
      title="Recovery"
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
          <section className="grid gap-3 md:grid-cols-4">
            <ZachMetric label="Sleep score" meta={latest?.date ?? "No Garmin row yet"} value={formatValue(latest?.sleep_score)} />
            <ZachMetric label="HRV" value={formatValue(latest?.hrv)} />
            <ZachMetric label="Resting HR" value={formatValue(latest?.resting_hr)} />
            <ZachMetric label="Training load" value={formatValue(latest?.training_load)} />
          </section>

          <ZachPanel>
            <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
              Recovery read
            </p>
            <p className="zach-display mt-2 max-w-4xl text-3xl leading-snug text-[#111820]">
              {recoveryReadiness(latestSleep, latestHrv, sevenDaySleep, sevenDayHrv)}
            </p>
            <p className="mt-3 text-sm leading-6 text-[#71685c]">
              This is a practical training-readiness observation, not a medical assessment.
            </p>
          </ZachPanel>

          <section className="grid gap-4 xl:grid-cols-[1fr_1fr]">
            <ZachPanel>
              <div className="mb-4">
                <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                  Weekly average
                </p>
                <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                  Sleep score over time
                </h2>
              </div>
              <ZachLineChart
                data={weeklyRecoveryChart.filter((row) => row.sleepScore !== null)}
                height={300}
                lines={[{ color: "#2c2824", key: "sleepScore", label: "Sleep score" }]}
              />
            </ZachPanel>
            <ZachPanel>
              <div className="mb-4">
                <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                  Weekly average
                </p>
                <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                  HRV over time
                </h2>
              </div>
              <ZachLineChart
                data={weeklyRecoveryChart.filter((row) => row.hrv !== null)}
                height={300}
                lines={[{ color: "#6f7d8c", key: "hrv", label: "HRV" }]}
              />
            </ZachPanel>
          </section>

          <section className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
            <ZachPanel>
              <div className="mb-4">
                <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                  Sleep score - HRV
                </p>
                <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                  Recovery trend
                </h2>
              </div>
              <ZachDualAxisChart data={recoveryChart} height={320} />
            </ZachPanel>
            <ZachPanel>
              <div className="mb-4">
                <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                  Weekly load
                </p>
                <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                  Load context
                </h2>
              </div>
              <ZachBarChart
                bars={[{ color: "#bb5d3a", key: "distanceKm", label: "Running km" }]}
                data={loadChart}
                height={320}
              />
            </ZachPanel>
          </section>

          <ZachPanel>
            <div className="mb-4">
              <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                Weekly balance
              </p>
              <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                Resting HR and training load
              </h2>
            </div>
            <ZachDualAxisChart
              data={weeklyRecoveryChart.filter(
                (row) => row.restingHr !== null || row.trainingLoad !== null,
              )}
              height={300}
              lines={[
                { color: "#2c2824", key: "restingHr", label: "Resting HR", yAxisId: "left" },
                {
                  color: "#bb5d3a",
                  key: "trainingLoad",
                  label: "Training load",
                  yAxisId: "right",
                },
              ]}
            />
          </ZachPanel>

          <ZachPanel>
            <div className="mb-4">
              <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                Relationship display
              </p>
              <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                HRV versus training load
              </h2>
            </div>
            <ZachScatterChart
              data={scatter}
              height={300}
              xLabel="Load or weekly km"
              yLabel="HRV"
            />
          </ZachPanel>

          <ZachPanel>
            <ZachTable
              columns={["Date", "Sleep score", "HRV", "Resting HR", "Training load"]}
              empty="No recovery rows yet."
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
