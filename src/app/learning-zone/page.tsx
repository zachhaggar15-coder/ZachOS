import Link from "next/link";

import { AuthPanel } from "@/components/auth-panel";
import { LearningZoneWheel } from "@/components/learning-zone-wheel";
import {
  ZachButtonLink,
  ZachDatabaseSetupNotice,
  ZachEmpty,
  ZachMetric,
  ZachNotice,
  ZachPageShell,
  ZachPanel,
  ZachSetupRequired,
  ZachTable,
} from "@/components/zach-shell";
import {
  friendlyDatabaseError,
  getDatabaseSetupIssue,
} from "@/lib/database-setup";
import {
  LEARNING_DIMENSION_LABELS,
  LEARNING_LESSONS,
  LEARNING_TOPICS,
  getLearningLesson,
  summariseLearningProgress,
  type LearningDimension,
} from "@/lib/learning-zone";
import { getSupabaseConfig } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

type LearningZonePageProps = {
  searchParams: Promise<{
    error?: string;
    message?: string;
  }>;
};

const dimensionOrder: LearningDimension[] = [
  "knowledge",
  "reasoning",
  "application",
  "breadth",
  "retention",
];

function formatDate(value: string | null) {
  if (!value) {
    return "--";
  }

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
  }).format(new Date(value));
}

function SetupRequired() {
  return <ZachSetupRequired title="Connect Supabase before opening Learning Zone" />;
}

export default async function LearningZonePage({
  searchParams,
}: LearningZonePageProps) {
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

  const sessions = await supabase
    .from("learning_sessions")
    .select("*")
    .eq("user_id", user.id)
    .order("completed_at", { ascending: false })
    .limit(500);
  const databaseSetupIssue = getDatabaseSetupIssue([sessions.error]);
  const dataError = databaseSetupIssue === null ? sessions.error : null;
  const progress = summariseLearningProgress(sessions.data ?? []);
  const wheelTopics = LEARNING_TOPICS.map((topic) => ({
    ...topic,
    href: `/learning-zone/topic/${topic.id}`,
  }));
  const sourceCount = new Set(
    LEARNING_LESSONS.flatMap((lesson) =>
      lesson.sources.map((source) => source.url),
    ),
  ).size;

  return (
    <ZachPageShell
      active="learning"
      actions={<ZachButtonLink href="/manage">Update data</ZachButtonLink>}
      subtitle="A private study loop with source-backed readings, multiple-choice recall and an intellect score split into knowledge, reasoning, application, breadth and retention."
      title="Learning Zone"
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
          title="Run the learning schema before scoring sessions"
        />
      ) : (
        <>
          <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            <ZachMetric
              label="Intellect"
              meta={`${progress.lessonsCompleted} completed sessions`}
              value={progress.intellectScore}
            />
            <ZachMetric
              label="Accuracy"
              meta="All multiple-choice checks"
              value={`${progress.accuracy}%`}
            />
            <ZachMetric
              label="Streak"
              meta="Consecutive learning days"
              value={progress.streakDays}
            />
            <ZachMetric
              label="Library"
              meta={`${sourceCount} referenced sources`}
              value={`${LEARNING_LESSONS.length} lessons`}
            />
            <ZachMetric
              label="Topics"
              meta="Registered wheel options"
              value={LEARNING_TOPICS.length}
            />
          </section>

          <LearningZoneWheel topics={wheelTopics} />

          <section className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_420px]">
            <ZachPanel>
              <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                    Score anatomy
                  </p>
                  <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                    Intellect dimensions
                  </h2>
                </div>
                <span className="font-mono text-xs text-[#8c8273]">
                  total {progress.intellectScore}
                </span>
              </div>
              <div className="grid gap-3">
                {dimensionOrder.map((dimension) => {
                  const value = progress.dimensions[dimension];
                  const maxValue = Math.max(
                    1,
                    ...dimensionOrder.map((item) => progress.dimensions[item]),
                  );

                  return (
                    <div key={dimension}>
                      <div className="mb-1 flex items-center justify-between gap-4">
                        <span className="text-sm font-semibold text-[#2c2824]">
                          {LEARNING_DIMENSION_LABELS[dimension]}
                        </span>
                        <span className="font-mono text-xs text-[#8c8273]">
                          {value}
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-[#2c2824]/[0.08]">
                        <div
                          className="h-2 rounded-full bg-[#bb5d3a]"
                          style={{ width: `${Math.round((value / maxValue) * 100)}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </ZachPanel>

            <ZachPanel>
              <div className="mb-4">
                <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                  Topics
                </p>
                <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                  Coverage
                </h2>
              </div>
              <div className="grid gap-3">
                {progress.topicStats.map((stat) => (
                  <Link
                    className="rounded-md border border-[#2c2824]/[0.1] bg-[#f9f4ec] p-3 transition hover:border-[#bb5d3a]/40"
                    href={`/learning-zone/topic/${stat.topic.id}`}
                    key={stat.topic.id}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm font-semibold text-[#2c2824]">
                        <span
                          className="mr-2 inline-block h-2 w-2 rounded-full"
                          style={{ backgroundColor: stat.topic.accent }}
                        />
                        {stat.topic.label}
                      </span>
                      <span className="font-mono text-xs text-[#8c8273]">
                        {stat.score} pts
                      </span>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-xs text-[#8c8273]">
                      <span>{stat.attempts} sessions</span>
                      <span>{stat.accuracy}% accuracy</span>
                      <span>{formatDate(stat.lastCompletedAt)}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </ZachPanel>
          </section>

          <section className="grid gap-4 xl:grid-cols-2">
            <ZachPanel>
              <div className="mb-4">
                <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                  Recent sessions
                </p>
                <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                  Recall history
                </h2>
              </div>
              <ZachTable
                columns={["Lesson", "Topic", "Score", "Accuracy", "Date"]}
                empty="No learning sessions yet."
                rows={progress.recentSessions.map((session) => {
                  const lesson = getLearningLesson(session.lesson_slug);

                  return {
                    Accuracy: `${Math.round(
                      (session.correct_count / Math.max(1, session.total_questions)) * 100,
                    )}%`,
                    Date: formatDate(session.completed_at),
                    Lesson: (
                      <Link
                        className="font-semibold text-[#bb5d3a]"
                        href={`/learning-zone/result/${session.id}`}
                      >
                        {lesson?.title ?? session.lesson_slug}
                      </Link>
                    ),
                    Score: session.score_points,
                    Topic: session.topic,
                  };
                })}
              />
            </ZachPanel>

            <ZachPanel>
              <div className="mb-4">
                <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                  Library
                </p>
                <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                  Registered lessons
                </h2>
              </div>
              <div className="grid gap-3">
                {LEARNING_LESSONS.map((lesson) => (
                  <Link
                    className="rounded-md border border-[#2c2824]/[0.1] bg-[#f9f4ec] p-3 transition hover:border-[#bb5d3a]/40"
                    href={`/learning-zone/lesson/${lesson.slug}`}
                    key={lesson.slug}
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[#2c2824]/[0.07] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6f6254]">
                        {lesson.topic}
                      </span>
                      <span className="font-mono text-[11px] text-[#8c8273]">
                        {lesson.estimatedMinutes} min
                      </span>
                    </div>
                    <p className="mt-2 text-sm font-semibold text-[#2c2824]">
                      {lesson.title}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[#71685c]">
                      {lesson.subtitle}
                    </p>
                  </Link>
                ))}
              </div>
            </ZachPanel>
          </section>

          {!progress.lessonsCompleted && (
            <ZachEmpty>
              Your first completed quiz will create the first Learning Zone score
              row.
            </ZachEmpty>
          )}
        </>
      )}
    </ZachPageShell>
  );
}
