import Link from "next/link";
import { notFound } from "next/navigation";

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
import {
  activityGroup,
  formatActivityType,
  formatDistance,
  formatDuration,
  formatNumber,
  formatPace,
  paceBandLabel,
  paceMinutesPerKm,
  trainingBenefit,
} from "@/lib/fitness-analytics";
import {
  friendlyDatabaseError,
  getDatabaseSetupIssue,
} from "@/lib/database-setup";
import { getSupabaseConfig } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

type ActivityDetailPageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ error?: string; message?: string }>;
};

export default async function ActivityDetailPage({
  params,
  searchParams,
}: ActivityDetailPageProps) {
  const [{ id }, query] = await Promise.all([params, searchParams]);

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

  const activity = await supabase
    .from("activities")
    .select("*")
    .eq("user_id", user.id)
    .eq("id", id)
    .maybeSingle();
  const databaseSetupIssue = getDatabaseSetupIssue([activity.error]);

  if (!activity.data && !activity.error && !databaseSetupIssue) {
    notFound();
  }

  const row = activity.data;
  const pace = row ? paceMinutesPerKm(row) : null;

  return (
    <ZachPageShell
      active="activities"
      actions={
        <>
          <ZachButtonLink href="/activities">Activity log</ZachButtonLink>
          <ZachButtonLink href="/running" primary>
            Running trends
          </ZachButtonLink>
        </>
      }
      subtitle={row ? `${row.date} - ${formatActivityType(row)}` : undefined}
      title="Run detail"
      userEmail={user.email}
    >
      {(query.error || query.message || activity.error) && !databaseSetupIssue && (
        <ZachNotice tone={query.error || activity.error ? "error" : "success"}>
          {query.error ||
            (activity.error ? friendlyDatabaseError(activity.error) : query.message)}
        </ZachNotice>
      )}

      {databaseSetupIssue ? (
        <ZachDatabaseSetupNotice issue={databaseSetupIssue} />
      ) : row ? (
        <>
          {activityGroup(row) !== "running" && (
            <ZachNotice tone="warning">
              This activity is not classified as running.{" "}
              <Link className="font-semibold text-[#bb5d3a]" href="/activities">
                Return to the activity log
              </Link>
              .
            </ZachNotice>
          )}

          <section className="grid gap-3 md:grid-cols-4">
            <ZachMetric label="Distance" value={formatDistance(row.distance_km)} />
            <ZachMetric label="Duration" value={formatDuration(row.duration_minutes)} />
            <ZachMetric label="Average pace" meta={paceBandLabel(pace)} value={formatPace(pace)} />
            <ZachMetric label="Average HR" value={formatNumber(row.avg_hr, 0)} />
          </section>

          <section className="grid gap-4 xl:grid-cols-[1fr_0.8fr]">
            <ZachPanel>
              <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                Main training benefit
              </p>
              <p className="zach-display mt-2 text-4xl font-medium leading-tight text-[#111820]">
                {trainingBenefit(row)}
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-6 text-[#71685c]">
                Zach OS uses Garmin training effect first when imported. If that
                is missing, it falls back to a simple classification from
                distance, duration, pace and heart-rate.
              </p>
            </ZachPanel>

            <ZachPanel>
              <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                Stored source
              </p>
              <dl className="mt-4 grid gap-3 text-sm">
                <div className="flex justify-between gap-4 border-b border-[#2c2824]/[0.1] pb-2">
                  <dt className="text-[#8c8273]">Source</dt>
                  <dd className="font-semibold">{row.source}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-[#2c2824]/[0.1] pb-2">
                  <dt className="text-[#8c8273]">External ID</dt>
                  <dd className="max-w-[220px] truncate font-mono text-xs">{row.external_id ?? "--"}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-[#2c2824]/[0.1] pb-2">
                  <dt className="text-[#8c8273]">Synced</dt>
                  <dd className="font-mono text-xs">{row.synced_at?.slice(0, 16) ?? "--"}</dd>
                </div>
              </dl>
            </ZachPanel>
          </section>

          <ZachPanel>
            <ZachTable
              columns={["Field", "Value"]}
              rows={[
                { Field: "Date", Value: row.date },
                { Field: "Activity type", Value: formatActivityType(row) },
                { Field: "Distance", Value: formatDistance(row.distance_km) },
                { Field: "Duration", Value: formatDuration(row.duration_minutes) },
                { Field: "Average pace", Value: formatPace(pace) },
                { Field: "Average HR", Value: formatNumber(row.avg_hr, 0) },
                { Field: "Max HR", Value: formatNumber(row.max_hr, 0) },
                { Field: "Calories", Value: formatNumber(row.calories, 0) },
                { Field: "Training effect", Value: row.training_effect ?? "--" },
                { Field: "Notes", Value: row.notes ?? "--" },
              ]}
            />
          </ZachPanel>
        </>
      ) : null}
    </ZachPageShell>
  );
}
