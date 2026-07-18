import Link from "next/link";

import { AuthPanel } from "@/components/auth-panel";
import {
  ZachDatabaseSetupNotice,
  ZachEmpty,
  ZachMetric,
  ZachNotice,
  ZachPageShell,
  ZachPanel,
  ZachSetupRequired,
  ZachTable,
} from "@/components/zach-shell";
import { calculateAnalytics } from "@/lib/analytics";
import { sortByDateAscending } from "@/lib/data-shaping";
import {
  friendlyDatabaseError,
  getDatabaseSetupIssue,
} from "@/lib/database-setup";
import { getSupabaseConfig } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { buildWeeklyReview, type WeeklyMovement } from "@/lib/weekly-review";

export const dynamic = "force-dynamic";

type ReviewPageProps = {
  searchParams: Promise<{
    error?: string;
    message?: string;
  }>;
};

function formatValue(movement: WeeklyMovement, value: number | null) {
  if (value === null) {
    return "--";
  }

  if (movement.unit === " GBP") {
    return `£${Math.round(value).toLocaleString("en-GB")}`;
  }

  const digits = Math.abs(value) >= 100 || movement.label === "Lessons" ? 0 : 1;

  return `${value.toFixed(digits)}${movement.unit}`;
}

function ChangeCell({ movement }: { movement: WeeklyMovement }) {
  if (movement.changePercent === null) {
    return <span className="text-[#9a8d7a]">no prior week</span>;
  }

  const rounded = Math.round(movement.changePercent);
  const improving = movement.higherIsBetter ? rounded > 0 : rounded < 0;
  const flat = Math.abs(rounded) < 3;

  return (
    <span
      className={
        flat
          ? "text-[#8c8273]"
          : improving
            ? "font-semibold text-[#7a8c5a]"
            : "font-semibold text-[#bb5d3a]"
      }
    >
      {rounded > 0 ? "+" : ""}
      {rounded}%
    </span>
  );
}

export default async function ReviewPage({ searchParams }: ReviewPageProps) {
  const params = await searchParams;

  if (!getSupabaseConfig()) {
    return <ZachSetupRequired title="Connect Supabase before opening Review" />;
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <AuthPanel error={params.error} message={params.message} />;
  }

  const [dailyLogs, fitnessMetrics, activities, financeSnapshots, learningSessions] =
    await Promise.all([
      supabase
        .from("daily_logs")
        .select("date, mood_score, deep_work_hours, reading_pages, writing_minutes, french_minutes, notes")
        .eq("user_id", user.id)
        .order("date", { ascending: false })
        .limit(60),
      supabase
        .from("fitness_metrics")
        .select("date, sleep_score, hrv, resting_hr, training_load")
        .eq("user_id", user.id)
        .order("date", { ascending: false })
        .limit(60),
      supabase
        .from("activities")
        .select("date, activity_type, distance_km, duration_minutes")
        .eq("user_id", user.id)
        .order("date", { ascending: false })
        .limit(200),
      supabase
        .from("finance_snapshots")
        .select("date, net_worth_gbp")
        .eq("user_id", user.id)
        .order("date", { ascending: false })
        .limit(30),
      supabase
        .from("learning_sessions")
        .select("*")
        .eq("user_id", user.id)
        .order("completed_at", { ascending: false })
        .limit(60),
    ]);

  const queryErrors = [
    dailyLogs.error,
    fitnessMetrics.error,
    activities.error,
    financeSnapshots.error,
    learningSessions.error,
  ];
  const databaseSetupIssue = getDatabaseSetupIssue(queryErrors);
  const dataError = databaseSetupIssue === null ? queryErrors.find(Boolean) : null;

  // The narrow selects above return partial rows; the review and analytics
  // helpers only read these fields, so a cast keeps the query light.
  const review = buildWeeklyReview({
    activities: sortByDateAscending(activities.data ?? []) as never,
    dailyLogs: sortByDateAscending(dailyLogs.data ?? []) as never,
    financeSnapshots: sortByDateAscending(financeSnapshots.data ?? []) as never,
    fitnessMetrics: sortByDateAscending(fitnessMetrics.data ?? []) as never,
    learningSessions: learningSessions.data ?? [],
  });
  const analytics = calculateAnalytics({
    activities: sortByDateAscending(activities.data ?? []) as never,
    dailyLogs: sortByDateAscending(dailyLogs.data ?? []) as never,
    fitnessMetrics: sortByDateAscending(fitnessMetrics.data ?? []) as never,
  });

  return (
    <ZachPageShell
      active="review"
      kicker="Weekly"
      subtitle={`Last seven days against the seven before. ${review.rangeLabel}.`}
      title="Weekly review"
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
          title="Run the schema before opening the weekly review"
        />
      ) : (
        <>
          <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            <ZachMetric
              label="Days logged"
              meta="of the last 7"
              value={`${review.logDays}`}
            />
            <ZachMetric
              label="Lessons"
              meta="completed this week"
              value={`${review.learningLessons}`}
            />
            <ZachMetric
              label="Biggest move"
              meta={review.moved?.label ?? "--"}
              value={
                review.moved?.changePercent === null ||
                review.moved?.changePercent === undefined
                  ? "--"
                  : `${Math.round(review.moved.changePercent)}%`
              }
            />
            <ZachMetric
              label="Biggest slip"
              meta={review.stalled?.label ?? "--"}
              value={
                review.stalled?.changePercent === null ||
                review.stalled?.changePercent === undefined
                  ? "--"
                  : `${Math.round(review.stalled.changePercent)}%`
              }
            />
          </section>

          <ZachPanel>
            <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
              After-action
            </p>
            <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
              {review.headline}
            </h2>
            <div className="mt-4 rounded-md border border-[#bb5d3a]/25 bg-[#fffaf2] p-4">
              <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9a7d5f]">
                One decision for next week
              </p>
              <p className="mt-2 text-sm leading-6 text-[#3a342c]">
                {review.decision}
              </p>
            </div>
          </ZachPanel>

          <ZachPanel>
            <div className="mb-4">
              <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                Week over week
              </p>
              <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                What moved
              </h2>
            </div>
            <ZachTable
              columns={["Metric", "This week", "Last week", "Change"]}
              empty="Log a few days to build a comparison."
              rows={review.movements.map((movement) => ({
                Change: <ChangeCell movement={movement} />,
                "Last week": formatValue(movement, movement.previous),
                Metric: movement.label,
                "This week": formatValue(movement, movement.current),
              }))}
            />
          </ZachPanel>

          <ZachPanel>
            <div className="mb-4">
              <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                Patterns
              </p>
              <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                What the data says
              </h2>
            </div>
            <div className="grid gap-3">
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
                </article>
              ))}
              {!analytics.relationships.length && (
                <ZachEmpty>Not enough paired data yet.</ZachEmpty>
              )}
            </div>
          </ZachPanel>

          <div className="flex justify-end">
            <Link className="text-sm font-semibold text-[#bb5d3a]" href="/reflections">
              Open the day-by-day timeline
            </Link>
          </div>
        </>
      )}
    </ZachPageShell>
  );
}
