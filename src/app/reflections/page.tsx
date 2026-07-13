import Link from "next/link";

import { AuthPanel } from "@/components/auth-panel";
import {
  ZachButtonLink,
  ZachDatabaseSetupNotice,
  ZachEmpty,
  ZachMetric,
  ZachNotice,
  ZachPageShell,
  ZachPanel,
  ZachSetupRequired,
} from "@/components/zach-shell";
import {
  friendlyDatabaseError,
  getDatabaseSetupIssue,
} from "@/lib/database-setup";
import { todayInLondon } from "@/lib/dates";
import { getLearningLesson } from "@/lib/learning-zone";
import { getSupabaseConfig } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type {
  Activity,
  DailyLog,
  DailyRoutineLog,
  FitnessMetric,
  LearningSession,
} from "@/lib/supabase/database.types";
import { isRunningActivity, numeric } from "@/lib/utils";

export const dynamic = "force-dynamic";

type ReflectionsPageProps = {
  searchParams: Promise<{
    error?: string;
    message?: string;
  }>;
};

type DaySnapshot = {
  activities: Activity[];
  date: string;
  fitness: FitnessMetric | null;
  learning: LearningSession[];
  log: DailyLog | null;
  routines: DailyRoutineLog[];
};

function SetupRequired() {
  return <ZachSetupRequired title="Connect Supabase before opening Reflections" />;
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    weekday: "long",
  }).format(new Date(`${value}T12:00:00Z`));
}

function formatShortDate(value: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
  }).format(new Date(`${value}T12:00:00Z`));
}

function formatNumber(value: number | null | undefined, suffix = "") {
  return typeof value === "number" && Number.isFinite(value)
    ? `${Number.isInteger(value) ? value : value.toFixed(1)}${suffix}`
    : "--";
}

function groupByDate<T extends { date: string }>(rows: T[]) {
  return rows.reduce((map, row) => {
    const existing = map.get(row.date) ?? [];
    existing.push(row);
    map.set(row.date, existing);
    return map;
  }, new Map<string, T[]>());
}

function learningDate(session: LearningSession) {
  return (session.completed_at ?? session.created_at).slice(0, 10);
}

function buildSnapshots({
  activities,
  dailyLogs,
  fitnessMetrics,
  learningSessions,
  routineLogs,
}: {
  activities: Activity[];
  dailyLogs: DailyLog[];
  fitnessMetrics: FitnessMetric[];
  learningSessions: LearningSession[];
  routineLogs: DailyRoutineLog[];
}) {
  const activityByDate = groupByDate(activities);
  const routineByDate = groupByDate(routineLogs);
  const fitnessByDate = new Map(fitnessMetrics.map((row) => [row.date, row]));
  const logByDate = new Map(dailyLogs.map((row) => [row.date, row]));
  const learningByDate = learningSessions.reduce((map, session) => {
    const date = learningDate(session);
    const existing = map.get(date) ?? [];
    existing.push(session);
    map.set(date, existing);
    return map;
  }, new Map<string, LearningSession[]>());
  const dates = new Set<string>([
    ...dailyLogs.map((row) => row.date),
    ...activities.map((row) => row.date),
    ...fitnessMetrics.map((row) => row.date),
    ...routineLogs.map((row) => row.date),
    ...learningSessions.map(learningDate),
  ]);

  return Array.from(dates)
    .sort((left, right) => right.localeCompare(left))
    .slice(0, 90)
    .map(
      (date): DaySnapshot => ({
        activities: activityByDate.get(date) ?? [],
        date,
        fitness: fitnessByDate.get(date) ?? null,
        learning: learningByDate.get(date) ?? [],
        log: logByDate.get(date) ?? null,
        routines: routineByDate.get(date) ?? [],
      }),
    );
}

function ReflectionCard({ snapshot }: { snapshot: DaySnapshot }) {
  const activityMinutes = snapshot.activities.reduce(
    (total, activity) => total + numeric(activity.duration_minutes),
    0,
  );
  const runDistance = snapshot.activities
    .filter(isRunningActivity)
    .reduce((total, activity) => total + numeric(activity.distance_km), 0);
  const completedRoutines = snapshot.routines.filter((routine) => routine.completed)
    .length;
  const learningScore = snapshot.learning.reduce(
    (total, session) => total + session.score_points,
    0,
  );
  const bestLearning = snapshot.learning
    .map((session) => getLearningLesson(session.lesson_slug)?.title)
    .filter(Boolean)
    .slice(0, 2);
  const reflection = snapshot.log?.notes?.trim();

  return (
    <article className="rounded-md border border-[#2c2824]/[0.13] bg-[#fffaf2] p-5">
      <div className="flex flex-col gap-3 border-b border-[#2c2824]/[0.1] pb-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
            {formatShortDate(snapshot.date)}
          </p>
          <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
            {formatDate(snapshot.date)}
          </h2>
        </div>
        <Link
          className="text-sm font-semibold text-[#bb5d3a]"
          href="/#note"
        >
          Open note
        </Link>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        <MiniStat label="Mood" value={snapshot.log?.mood_score ?? "--"} />
        <MiniStat
          label="Activity"
          value={`${formatNumber(activityMinutes, " min")} / ${formatNumber(runDistance, " km")}`}
        />
        <MiniStat
          label="Habits"
          value={
            snapshot.routines.length
              ? `${completedRoutines}/${snapshot.routines.length}`
              : "--"
          }
        />
        <MiniStat label="Learning" value={learningScore ? `+${learningScore}` : "--"} />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
        <section className="rounded-md border border-[#2c2824]/[0.1] bg-[#f9f4ec] p-4">
          <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9a7d5f]">
            Reflection
          </p>
          <p className="mt-2 text-sm leading-7 text-[#3f382f]">
            {reflection || "No reflection saved for this day."}
          </p>
        </section>

        <section className="grid gap-2 text-sm text-[#5f574d]">
          <SnapshotLine
            label="Deep work"
            value={formatNumber(snapshot.log?.deep_work_hours, " h")}
          />
          <SnapshotLine
            label="Reading"
            value={formatNumber(snapshot.log?.reading_pages, " pages")}
          />
          <SnapshotLine
            label="French"
            value={formatNumber(snapshot.log?.french_minutes, " min")}
          />
          <SnapshotLine
            label="Sleep"
            value={formatNumber(snapshot.fitness?.sleep_hours, " h")}
          />
          <SnapshotLine
            label="HRV"
            value={formatNumber(snapshot.fitness?.hrv)}
          />
        </section>
      </div>

      {(snapshot.activities.length > 0 || bestLearning.length > 0) && (
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {snapshot.activities.length > 0 && (
            <div className="rounded-md border border-[#2c2824]/[0.1] bg-[#f9f4ec] p-3">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8c8273]">
                Activity
              </p>
              <p className="mt-1 text-sm leading-6 text-[#3f382f]">
                {snapshot.activities
                  .slice(0, 2)
                  .map((activity) => activity.activity_type ?? "Activity")
                  .join(", ")}
              </p>
            </div>
          )}
          {bestLearning.length > 0 && (
            <div className="rounded-md border border-[#2c2824]/[0.1] bg-[#f9f4ec] p-3">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8c8273]">
                Learning
              </p>
              <p className="mt-1 text-sm leading-6 text-[#3f382f]">
                {bestLearning.join(", ")}
              </p>
            </div>
          )}
        </div>
      )}
    </article>
  );
}

function MiniStat({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="rounded-md border border-[#2c2824]/[0.1] bg-[#f9f4ec] p-3">
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8c8273]">
        {label}
      </p>
      <p className="mt-1 font-mono text-sm text-[#2c2824]">{value}</p>
    </div>
  );
}

function SnapshotLine({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-md border border-[#2c2824]/[0.1] bg-[#f9f4ec] px-3 py-2">
      <span>{label}</span>
      <span className="font-mono text-[#2c2824]">{value}</span>
    </div>
  );
}

export default async function ReflectionsPage({
  searchParams,
}: ReflectionsPageProps) {
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

  const [dailyLogs, activities, fitnessMetrics, routineLogs, learningSessions] =
    await Promise.all([
      supabase
        .from("daily_logs")
        .select("*")
        .eq("user_id", user.id)
        .order("date", { ascending: false })
        .limit(365),
      supabase
        .from("activities")
        .select("*")
        .eq("user_id", user.id)
        .order("date", { ascending: false })
        .limit(1500),
      supabase
        .from("fitness_metrics")
        .select("*")
        .eq("user_id", user.id)
        .order("date", { ascending: false })
        .limit(365),
      supabase
        .from("daily_routine_logs")
        .select("*")
        .eq("user_id", user.id)
        .order("date", { ascending: false })
        .limit(1500),
      supabase
        .from("learning_sessions")
        .select("*")
        .eq("user_id", user.id)
        .order("completed_at", { ascending: false })
        .limit(500),
    ]);
  const queryErrors = [
    dailyLogs.error,
    activities.error,
    fitnessMetrics.error,
    routineLogs.error,
    learningSessions.error,
  ];
  const databaseSetupIssue = getDatabaseSetupIssue(queryErrors);
  const dataError =
    databaseSetupIssue === null ? queryErrors.find(Boolean) : null;
  const snapshots = buildSnapshots({
    activities: activities.data ?? [],
    dailyLogs: dailyLogs.data ?? [],
    fitnessMetrics: fitnessMetrics.data ?? [],
    learningSessions: learningSessions.data ?? [],
    routineLogs: routineLogs.data ?? [],
  });
  const reflectionsCount = (dailyLogs.data ?? []).filter((log) =>
    log.notes?.trim(),
  ).length;
  const todaySnapshot = snapshots.find((snapshot) => snapshot.date === todayInLondon());

  return (
    <ZachPageShell
      active="reflections"
      actions={<ZachButtonLink href="/#note">Write reflection</ZachButtonLink>}
      subtitle="A day-by-day record of mood, reflection, activity, habits, learning and useful context."
      title="Reflections"
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
          title="Run the daily log schema before opening reflections"
        />
      ) : (
        <>
          <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            <ZachMetric
              label="Snapshots"
              meta="Days with any logged context"
              value={snapshots.length}
            />
            <ZachMetric
              label="Reflections"
              meta="Days with written notes"
              value={reflectionsCount}
            />
            <ZachMetric
              label="Today"
              meta="Mood, habits, activity, learning"
              value={todaySnapshot ? "Logged" : "Open"}
            />
            <ZachMetric
              label="Latest"
              meta="Most recent snapshot"
              value={snapshots[0] ? formatShortDate(snapshots[0].date) : "--"}
            />
          </section>

          <ZachPanel>
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                  Daily record
                </p>
                <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                  Snapshot timeline
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-[#71685c]">
                Each card pulls together the day&apos;s reflection with the key signals
                that explain the context around it.
              </p>
            </div>
          </ZachPanel>

          <section className="grid gap-4">
            {snapshots.map((snapshot) => (
              <ReflectionCard key={snapshot.date} snapshot={snapshot} />
            ))}
          </section>

          {!snapshots.length && (
            <ZachEmpty>
              Save a daily reflection or log a metric to start the timeline.
            </ZachEmpty>
          )}
        </>
      )}
    </ZachPageShell>
  );
}
