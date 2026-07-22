import Link from "next/link";

import { AuthPanel } from "@/components/auth-panel";
import {
  ZachBarChart,
  ZachDualAxisChart,
  ZachScatterChart,
} from "@/components/zach-charts";
import {
  ZachButtonLink,
  ZachDatabaseSetupNotice,
  ZachEmpty,
  ZachMetric,
  ZachPageShell,
  ZachPanel,
  ZachSetupRequired,
  ZachTable,
} from "@/components/zach-shell";
import { formatShortDate, todayInLondon } from "@/lib/dates";
import { sortByDateAscending } from "@/lib/data-shaping";
import {
  friendlyDatabaseError,
  getDatabaseSetupIssue,
} from "@/lib/database-setup";
import {
  activityDetailHref,
  activityGroup,
  activityGroupLabel,
  buildRunningAnalytics,
  formatActivityType,
  formatDistance,
  formatDuration,
  formatNumber,
  formatPace,
  paceMinutesPerKm,
  trainingBenefit,
  type ActivityGroup,
} from "@/lib/fitness-analytics";
import { getSupabaseConfig } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { numeric } from "@/lib/utils";

export const dynamic = "force-dynamic";

type ActivitiesPageProps = {
  searchParams: Promise<{
    error?: string;
    group?: string;
    message?: string;
  }>;
};

const groupOptions: Array<{ href: string; key: ActivityGroup | "all"; label: string }> = [
  { href: "/activities", key: "all", label: "All" },
  { href: "/activities?group=running", key: "running", label: "Running" },
  { href: "/activities?group=gym", key: "gym", label: "Gym" },
  { href: "/activities?group=other", key: "other", label: "Other" },
];

function resolvedGroup(value: string | undefined): ActivityGroup | "all" {
  return value === "running" || value === "gym" || value === "other" ? value : "all";
}

function average(values: number[]) {
  const usable = values.filter((value) => Number.isFinite(value) && value > 0);
  return usable.length
    ? usable.reduce((total, value) => total + value, 0) / usable.length
    : null;
}

function median(values: number[]) {
  const sorted = [...values].sort((left, right) => left - right);
  if (!sorted.length) {
    return null;
  }

  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2
    ? sorted[middle]
    : (sorted[middle - 1] + sorted[middle]) / 2;
}

function relationshipCards(input: {
  paceHrScatter: Array<{ x: number; y: number }>;
  recentRuns: Array<{
    avg_hr: number | null;
    date: string;
    distance_km: number | null;
    paceLabel: string;
    paceMinutes: number | null;
  }>;
  weeklySeries: Array<{ avgHr: number | null; distanceKm: number; hrv: number | null }>;
}) {
  const samePaceSignal = input.paceHrScatter.length
    ? input.recentRuns
        .filter((run) => run.paceMinutes !== null && numeric(run.avg_hr) > 0)
        .slice(0, 12)
    : [];
  const distanceCutoff = median(
    input.recentRuns.map((run) => numeric(run.distance_km)).filter((value) => value > 0),
  );
  const shorterRuns = input.recentRuns.filter(
    (run) => distanceCutoff !== null && numeric(run.distance_km) < distanceCutoff,
  );
  const longerRuns = input.recentRuns.filter(
    (run) => distanceCutoff !== null && numeric(run.distance_km) >= distanceCutoff,
  );
  const shorterPace = average(
    shorterRuns.map((run) => run.paceMinutes ?? 0).filter((value) => value > 0),
  );
  const longerPace = average(
    longerRuns.map((run) => run.paceMinutes ?? 0).filter((value) => value > 0),
  );
  const shorterHr = average(shorterRuns.map((run) => numeric(run.avg_hr)));
  const longerHr = average(longerRuns.map((run) => numeric(run.avg_hr)));
  const weeklyDistanceCutoff = median(
    input.weeklySeries.map((week) => week.distanceKm).filter((value) => value > 0),
  );
  const higherWeeks = input.weeklySeries.filter(
    (week) => weeklyDistanceCutoff !== null && week.distanceKm >= weeklyDistanceCutoff,
  );
  const lowerWeeks = input.weeklySeries.filter(
    (week) => weeklyDistanceCutoff !== null && week.distanceKm > 0 && week.distanceKm < weeklyDistanceCutoff,
  );
  const highWeekHrv = average(higherWeeks.map((week) => numeric(week.hrv)));
  const lowWeekHrv = average(lowerWeeks.map((week) => numeric(week.hrv)));

  return [
    {
      label: "Longer distance vs pace",
      note:
        distanceCutoff === null || longerPace === null || shorterPace === null
          ? "Not enough varied running distance yet to compare short and long sessions."
          : `Using ${formatDistance(distanceCutoff)} as the split, longer runs are averaging ${formatPace(
              longerPace,
            )} versus ${formatPace(shorterPace)} on shorter runs. Average HR is ${formatNumber(
              longerHr,
              0,
            )} bpm versus ${formatNumber(shorterHr, 0)} bpm.`,
    },
    {
      label: "Higher-volume weeks vs HRV",
      note:
        weeklyDistanceCutoff === null || highWeekHrv === null || lowWeekHrv === null
          ? "Not enough weekly distance and HRV overlap yet to compare bigger weeks against lighter weeks."
          : `Weeks at or above ${formatDistance(weeklyDistanceCutoff)} average ${formatNumber(
              highWeekHrv,
              0,
            )} HRV versus ${formatNumber(lowWeekHrv, 0)} HRV in lighter weeks.`,
    },
    {
      label: "Recent pace discipline",
      note: samePaceSignal.length < 4
        ? "Need a few more runs with pace and HR to describe same-pace discipline."
        : `The latest ${samePaceSignal.length} comparable runs span from ${samePaceSignal.at(-1)?.paceLabel ?? "--"} to ${samePaceSignal[0]?.paceLabel ?? "--"}, so the useful read is whether HR is falling at familiar speeds rather than whether one isolated session was fast.`,
    },
  ];
}

export default async function ActivitiesPage({
  searchParams,
}: ActivitiesPageProps) {
  const query = await searchParams;
  const today = todayInLondon();

  if (!getSupabaseConfig()) {
    return <ZachSetupRequired title="Connect Supabase before viewing activities" />;
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <AuthPanel error={query.error} message={query.message} />;
  }

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
  const activityRowsAscending = sortByDateAscending(activities.data ?? []);
  const fitnessRows = sortByDateAscending(fitnessMetrics.data ?? []);
  const allRows = [...activityRowsAscending].reverse();
  const activeGroup = resolvedGroup(query.group);
  const rows =
    activeGroup === "all"
      ? allRows
      : allRows.filter((activity) => activityGroup(activity) === activeGroup);
  const runningCount = allRows.filter((activity) => activityGroup(activity) === "running").length;
  const gymCount = allRows.filter((activity) => activityGroup(activity) === "gym").length;
  const otherCount = allRows.filter((activity) => activityGroup(activity) === "other").length;
  const runningDistance = allRows
    .filter((activity) => activityGroup(activity) === "running")
    .reduce((total, activity) => total + numeric(activity.distance_km), 0);
  const activityTrend = Array.from(
    allRows.reduce((months, activity) => {
      const month = activity.date.slice(0, 7);
      const existing = months.get(month) ?? {
        date: month,
        gym: 0,
        other: 0,
        running: 0,
      };
      existing[activityGroup(activity)] += 1;
      months.set(month, existing);
      return months;
    }, new Map<string, { date: string; gym: number; other: number; running: number }>()),
  )
    .map(([, value]) => value)
    .sort((left, right) => left.date.localeCompare(right.date))
    .slice(-12);
  const runningAnalytics = buildRunningAnalytics({
    activities: activityRowsAscending,
    fitnessMetrics: fitnessRows,
    today,
    weeks: 12,
  });
  const weeklyLoadTrend = runningAnalytics.weeklySeries
    .filter((week) => week.distanceKm > 0 || week.hrv !== null)
    .map((week) => ({
      date: week.label,
      distanceKm: Number(week.distanceKm.toFixed(2)),
      hrv: week.hrv,
    }));
  const weeklyEfficiencyTrend = runningAnalytics.weeklySeries
    .filter((week) => week.paceMinutes !== null || week.avgHr !== null)
    .map((week) => ({
      avgHr: week.avgHr,
      date: week.label,
      pace: week.paceMinutes,
    }));
  const paceHrScatter = runningAnalytics.recentRuns
    .filter((run) => run.paceMinutes !== null && numeric(run.avg_hr) > 0)
    .slice(0, 30)
    .map((run) => ({
      label: formatShortDate(run.date),
      x: Number((run.paceMinutes ?? 0).toFixed(2)),
      y: numeric(run.avg_hr),
    }));
  const distancePaceScatter = runningAnalytics.recentRuns
    .filter((run) => numeric(run.distance_km) > 0 && run.paceMinutes !== null)
    .slice(0, 30)
    .map((run) => ({
      label: formatShortDate(run.date),
      x: Number(numeric(run.distance_km).toFixed(2)),
      y: Number((run.paceMinutes ?? 0).toFixed(2)),
    }));
  const relationships = relationshipCards({
    paceHrScatter,
    recentRuns: runningAnalytics.recentRuns,
    weeklySeries: runningAnalytics.weeklySeries,
  });

  return (
    <ZachPageShell
      active="activities"
      actions={<ZachButtonLink href="/running">Running trends</ZachButtonLink>}
      subtitle="Imported activity is no longer just a log here. This page now shows volume, efficiency, and recovery relationships alongside the raw session list."
      title="Activities"
      userEmail={user.email}
    >
      {(query.error || query.message || activities.error || fitnessMetrics.error) && !databaseSetupIssue && (
        <div className="rounded-md border border-[#bb5d3a]/35 bg-[#bb5d3a]/10 px-4 py-3 text-sm text-[#8d3f26]">
          {query.error ||
            (activities.error
              ? friendlyDatabaseError(activities.error)
              : fitnessMetrics.error
                ? friendlyDatabaseError(fitnessMetrics.error)
                : query.message)}
        </div>
      )}

      {databaseSetupIssue ? (
        <ZachDatabaseSetupNotice issue={databaseSetupIssue} />
      ) : (
        <>
          <section className="grid gap-3 md:grid-cols-4">
            <ZachMetric label="Running activities" value={runningCount} />
            <ZachMetric label="Gym sessions" value={gymCount} />
            <ZachMetric label="Other activities" value={otherCount} />
            <ZachMetric label="Total running" value={formatDistance(runningDistance)} />
          </section>

          <ZachPanel>
            <div className="mb-4">
              <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                Monthly activity mix
              </p>
              <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                Consistency trend
              </h2>
            </div>
            <ZachBarChart
              bars={[
                { color: "#bb5d3a", key: "running", label: "Running" },
                { color: "#7a8c5a", key: "gym", label: "Gym" },
                { color: "#6f7d8c", key: "other", label: "Other" },
              ]}
              data={activityTrend}
              height={300}
            />
          </ZachPanel>

          <section className="grid gap-4 xl:grid-cols-2">
            <ZachPanel>
              <div className="mb-4">
                <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                  Weekly running load
                </p>
                <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                  Distance and HRV
                </h2>
                <p className="mt-2 text-sm text-[#8c8273]">
                  This puts running volume against weekly HRV so higher-load weeks can
                  be judged against recovery instead of mileage alone.
                </p>
              </div>
              <ZachDualAxisChart
                data={weeklyLoadTrend}
                lines={[
                  { color: "#bb5d3a", key: "distanceKm", label: "Distance km", yAxisId: "left" },
                  { color: "#6f7d8c", key: "hrv", label: "HRV", yAxisId: "right" },
                ]}
              />
            </ZachPanel>

            <ZachPanel>
              <div className="mb-4">
                <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                  Weekly efficiency
                </p>
                <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                  Pace and heart rate
                </h2>
                <p className="mt-2 text-sm text-[#8c8273]">
                  Lower pace is better here. The useful signal is whether average
                  heart rate is holding or falling while pace improves.
                </p>
              </div>
              <ZachDualAxisChart
                data={weeklyEfficiencyTrend}
                lines={[
                  { color: "#7a8c5a", key: "pace", label: "Min/km", yAxisId: "left" },
                  { color: "#bb5d3a", key: "avgHr", label: "Average HR", yAxisId: "right" },
                ]}
              />
            </ZachPanel>
          </section>

          <section className="grid gap-4 xl:grid-cols-2">
            <ZachPanel>
              <div className="mb-4">
                <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                  Relationship graph
                </p>
                <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                  Pace versus heart rate
                </h2>
              </div>
              <ZachScatterChart
                data={paceHrScatter}
                xKey="x"
                xLabel="Pace min/km"
                yKey="y"
                yLabel="Average HR"
              />
            </ZachPanel>

            <ZachPanel>
              <div className="mb-4">
                <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                  Relationship graph
                </p>
                <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                  Distance versus pace
                </h2>
              </div>
              <ZachScatterChart
                data={distancePaceScatter}
                xKey="x"
                xLabel="Distance km"
                yKey="y"
                yLabel="Pace min/km"
              />
            </ZachPanel>
          </section>

          <ZachPanel>
            <div className="mb-4">
              <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                Relationships
              </p>
              <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                What the data suggests
              </h2>
            </div>
            {relationships.length ? (
              <section className="grid gap-3 lg:grid-cols-3">
                {relationships.map((relationship) => (
                  <article
                    className="rounded-md border border-[#2c2824]/[0.1] bg-[#f9f4ec] p-4"
                    key={relationship.label}
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9a7d5f]">
                      {relationship.label}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#3a342c]">
                      {relationship.note}
                    </p>
                  </article>
                ))}
              </section>
            ) : (
              <ZachEmpty>
                Import a few more runs with pace and heart-rate data to unlock the
                activity relationships section.
              </ZachEmpty>
            )}
          </ZachPanel>

          <ZachPanel>
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                  Activity groups
                </p>
                <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                  {activeGroup === "all" ? "All activity" : activityGroupLabel(activeGroup)}
                </h2>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {groupOptions.map((option) => (
                  <Link
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                      activeGroup === option.key
                        ? "bg-[#241f1a] text-[#f9f4ec]"
                        : "border border-[#2c2824]/[0.13] text-[#6f6254] hover:bg-[#2c2824]/[0.06]"
                    }`}
                    href={option.href}
                    key={option.key}
                  >
                    {option.label}
                  </Link>
                ))}
              </div>
            </div>
            <ZachTable
              columns={[
                "Date",
                "Group",
                "Type",
                "Distance",
                "Duration",
                "Avg pace",
                "Avg HR",
                "Max HR",
                "Calories",
                "Main benefit",
                "Source",
              ]}
              empty="No activities in this group yet."
              rows={rows.map((activity) => {
                const detailHref = activityDetailHref(activity);
                const dateCell = detailHref ? (
                  <Link className="font-semibold text-[#bb5d3a]" href={detailHref}>
                    {activity.date}
                  </Link>
                ) : (
                  activity.date
                );

                return {
                  "Avg HR": activity.avg_hr ?? "--",
                  "Avg pace": formatPace(paceMinutesPerKm(activity)),
                  Calories: activity.calories ?? "--",
                  Date: dateCell,
                  Distance: formatDistance(activity.distance_km),
                  Duration: formatDuration(activity.duration_minutes),
                  Group: activityGroupLabel(activityGroup(activity)),
                  "Main benefit": trainingBenefit(activity),
                  "Max HR": activity.max_hr ?? "--",
                  Source: activity.source,
                  Type: formatActivityType(activity),
                };
              })}
            />
            <p className="mt-3 text-xs text-[#8c8273]">
              Click a running date to inspect that run. Gym rows stay simple by design.
            </p>
          </ZachPanel>
        </>
      )}
    </ZachPageShell>
  );
}
