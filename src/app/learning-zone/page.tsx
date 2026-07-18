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
  LEARNING_CONCEPT_MAP,
  LEARNING_LESSONS,
  LEARNING_PATHS,
  LEARNING_TOPICS,
  buildReviewQueue,
  getLearningLesson,
  getLearningTopic,
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
  "breadth",
  "depth",
  "retention",
  "reasoning",
  "consistency",
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

  const [sessions, notes] = await Promise.all([
    supabase
      .from("learning_sessions")
      .select("*")
      .eq("user_id", user.id)
      .order("completed_at", { ascending: false })
      .limit(500),
    supabase
      .from("learning_lesson_notes")
      .select("*")
      .eq("user_id", user.id)
      .order("updated_at", { ascending: false })
      .limit(100),
  ]);
  const databaseSetupIssue = getDatabaseSetupIssue([sessions.error, notes.error]);
  const dataError =
    databaseSetupIssue === null ? sessions.error || notes.error : null;
  const progress = summariseLearningProgress(sessions.data ?? []);
  const savedNotes = notes.data ?? [];
  const completedSlugs = new Set((sessions.data ?? []).map((session) => session.lesson_slug));
  const completedLessons = Array.from(completedSlugs)
    .map((slug) => getLearningLesson(slug))
    .filter((lesson): lesson is NonNullable<typeof lesson> => lesson !== null);
  const levelStats = (["GCSE", "A-level", "University"] as const).map((level) => {
    const lessonsAtLevel = LEARNING_LESSONS.filter(
      (lesson) => lesson.concept.level === level,
    );
    const completedAtLevel = lessonsAtLevel.filter((lesson) =>
      completedSlugs.has(lesson.slug),
    ).length;

    return {
      completed: completedAtLevel,
      level,
      total: lessonsAtLevel.length,
    };
  });
  const weakTopics = progress.topicStats
    .filter((stat) => stat.attempts > 0 && stat.accuracy < 75)
    .sort((left, right) => left.accuracy - right.accuracy)
    .slice(0, 4);
  const revisitLessons = savedNotes
    .filter((note) => note.revisit || note.bookmarked)
    .map((note) => getLearningLesson(note.lesson_slug))
    .filter((lesson): lesson is NonNullable<typeof lesson> => lesson !== null);
  const unfinishedUniversityLessons = LEARNING_LESSONS.filter(
    (lesson) =>
      lesson.concept.level === "University" && !completedSlugs.has(lesson.slug),
  ).slice(0, 4);
  // Spaced repetition first: lessons genuinely due back outrank anything else.
  const reviewQueue = buildReviewQueue(sessions.data ?? []);
  const continueLessons = [
    ...reviewQueue.map((state) => state.lesson),
    ...revisitLessons,
    ...unfinishedUniversityLessons,
  ].filter(
    (lesson, index, all) =>
      all.findIndex((item) => item.slug === lesson.slug) === index,
  ).slice(0, 4);
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
      subtitle="A private study loop with a topic wheel, source-backed readings, richer multiple-choice recall and an intellect score split into breadth, depth, retention, reasoning and consistency."
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
              meta={`${sourceCount} referenced textbook/reference sources`}
              value={`${LEARNING_LESSONS.length} lessons`}
            />
            <ZachMetric
              label="Topics"
              meta="Registered wheel options"
              value={LEARNING_TOPICS.length}
            />
          </section>

          <section className="grid gap-4 xl:grid-cols-[minmax(0,1.1fr)_minmax(340px,0.9fr)]">
            <ZachPanel>
              <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                    Review
                  </p>
                  <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                    Continue learning
                  </h2>
                </div>
                <span className="font-mono text-xs text-[#8c8273]">
                  {reviewQueue.length
                    ? `${reviewQueue.length} due for review`
                    : `${completedLessons.length} unique lessons completed`}
                </span>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {continueLessons.map((lesson) => (
                  <Link
                    className="rounded-md border border-[#2c2824]/[0.1] bg-[#f9f4ec] p-3 transition hover:border-[#bb5d3a]/40"
                    href={`/learning-zone/lesson/${lesson.slug}`}
                    key={lesson.slug}
                  >
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-[#bb5d3a]/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8f442c]">
                        {lesson.concept.level}
                      </span>
                      <span className="rounded-full bg-[#2c2824]/[0.07] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6f6254]">
                        {getLearningTopic(lesson.topic).shortLabel}
                      </span>
                    </div>
                    <p className="mt-2 text-sm font-semibold text-[#2c2824]">
                      {lesson.title}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[#71685c]">
                      {lesson.concept.summary}
                    </p>
                  </Link>
                ))}
                {!continueLessons.length && (
                  <ZachEmpty>
                    Complete a lesson or bookmark one to build your review queue.
                  </ZachEmpty>
                )}
              </div>
            </ZachPanel>

            <ZachPanel>
              <div className="mb-4">
                <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                  Notebook
                </p>
                <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                  Saved context
                </h2>
              </div>
              <div className="grid gap-3">
                {savedNotes.slice(0, 4).map((note) => {
                  const lesson = getLearningLesson(note.lesson_slug);

                  return (
                    <Link
                      className="rounded-md border border-[#2c2824]/[0.1] bg-[#f9f4ec] p-3 transition hover:border-[#bb5d3a]/40"
                      href={`/learning-zone/lesson/${note.lesson_slug}`}
                      key={note.id}
                    >
                      <div className="flex flex-wrap gap-2">
                        {note.bookmarked && (
                          <span className="rounded-full bg-[#bb5d3a]/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8f442c]">
                            Bookmarked
                          </span>
                        )}
                        {note.revisit && (
                          <span className="rounded-full bg-[#2c2824]/[0.07] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6f6254]">
                            Revisit
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-sm font-semibold text-[#2c2824]">
                        {lesson?.title ?? note.lesson_slug}
                      </p>
                      <p className="mt-1 line-clamp-2 text-sm leading-6 text-[#71685c]">
                        {note.highlight || note.note || "Saved without a note yet."}
                      </p>
                    </Link>
                  );
                })}
                {!savedNotes.length && (
                  <ZachEmpty>
                    Lesson bookmarks and notes will appear here.
                  </ZachEmpty>
                )}
              </div>
            </ZachPanel>
          </section>

          <section className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_420px]">
            <ZachPanel>
              <div className="mb-4">
                <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                  Learning paths
                </p>
                <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                  Guided routes
                </h2>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {LEARNING_PATHS.map((path) => {
                  const completedInPath = path.lessons.filter((slug) =>
                    completedSlugs.has(slug),
                  ).length;
                  const nextSlug =
                    path.lessons.find((slug) => !completedSlugs.has(slug)) ??
                    path.lessons[0] ??
                    LEARNING_LESSONS[0].slug;
                  const nextLesson = getLearningLesson(nextSlug);

                  return (
                    <Link
                      className="rounded-md border border-[#2c2824]/[0.1] bg-[#f9f4ec] p-4 transition hover:border-[#bb5d3a]/40"
                      href={`/learning-zone/lesson/${nextSlug}`}
                      key={path.id}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-semibold text-[#2c2824]">
                          {path.title}
                        </p>
                        <span className="font-mono text-xs text-[#8c8273]">
                          {completedInPath}/{path.lessons.length}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-[#71685c]">
                        {path.description}
                      </p>
                      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#bb5d3a]">
                        Next: {nextLesson?.title ?? "Open path"}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </ZachPanel>

            <ZachPanel>
              <div className="mb-4">
                <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                  Concept map
                </p>
                <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                  Cross-topic links
                </h2>
              </div>
              <div className="grid gap-3">
                {LEARNING_CONCEPT_MAP.map((link) => {
                  const from = getLearningTopic(link.from);
                  const to = getLearningTopic(link.to);

                  return (
                    <div
                      className="rounded-md border border-[#2c2824]/[0.1] bg-[#f9f4ec] p-3"
                      key={link.id}
                    >
                      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#6f6254]">
                        <span>{from.shortLabel}</span>
                        <span>{"->"}</span>
                        <span>{to.shortLabel}</span>
                      </div>
                      <p className="mt-2 text-sm font-semibold text-[#2c2824]">
                        {link.title}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-[#71685c]">
                        {link.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </ZachPanel>
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
              <div className="mt-5 grid gap-2 md:grid-cols-3">
                {levelStats.map((stat) => (
                  <div
                    className="rounded-md border border-[#2c2824]/[0.1] bg-[#f9f4ec] p-3"
                    key={stat.level}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8c8273]">
                      {stat.level}
                    </p>
                    <p className="mt-1 font-mono text-sm text-[#2c2824]">
                      {stat.completed}/{stat.total}
                    </p>
                  </div>
                ))}
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
              {weakTopics.length > 0 && (
                <div className="mb-4 rounded-md border border-[#bb5d3a]/25 bg-[#bb5d3a]/10 p-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8f442c]">
                    Review first
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {weakTopics.map((stat) => (
                      <Link
                        className="rounded-full bg-[#fffaf2] px-3 py-1 text-xs font-semibold text-[#2c2824]"
                        href={`/learning-zone/topic/${stat.topic.id}`}
                        key={stat.topic.id}
                      >
                        {stat.topic.shortLabel} {stat.accuracy}%
                      </Link>
                    ))}
                  </div>
                </div>
              )}
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
