import Link from "next/link";

import { AuthPanel } from "@/components/auth-panel";
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
import {
  activityDetailHref,
  activityGroup,
  activityGroupLabel,
  formatActivityType,
  formatDistance,
  formatDuration,
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

export default async function ActivitiesPage({
  searchParams,
}: ActivitiesPageProps) {
  const query = await searchParams;

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

  const activities = await supabase
    .from("activities")
    .select("*")
    .eq("user_id", user.id)
    .order("date", { ascending: false })
    .limit(3000);
  const databaseSetupIssue = getDatabaseSetupIssue([activities.error]);
  const allRows = [...sortByDateAscending(activities.data ?? [])].reverse();
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

  return (
    <ZachPageShell
      active="activities"
      actions={<ZachButtonLink href="/running">Running trends</ZachButtonLink>}
      subtitle="A clean log of imported and manual activities. Running rows open into a detail page; gym is intentionally just a consistency log."
      title="Activities"
      userEmail={user.email}
    >
      {(query.error || query.message || activities.error) && !databaseSetupIssue && (
        <div className="rounded-md border border-[#bb5d3a]/35 bg-[#bb5d3a]/10 px-4 py-3 text-sm text-[#8d3f26]">
          {query.error ||
            (activities.error ? friendlyDatabaseError(activities.error) : query.message)}
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
