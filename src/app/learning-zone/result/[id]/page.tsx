import Link from "next/link";
import { notFound } from "next/navigation";

import { AuthPanel } from "@/components/auth-panel";
import {
  ZachButtonLink,
  ZachMetric,
  ZachNotice,
  ZachPageShell,
  ZachSetupRequired,
} from "@/components/zach-shell";
import { friendlyDatabaseError } from "@/lib/database-setup";
import {
  LEARNING_DIMENSION_LABELS,
  getLearningLesson,
  getLearningTopic,
  isLearningTopicId,
  summariseLearningProgress,
  type LearningDimension,
} from "@/lib/learning-zone";
import { getSupabaseConfig } from "@/lib/supabase/config";
import type { Json } from "@/lib/supabase/database.types";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

type LearningResultPageProps = {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{
    error?: string;
    message?: string;
  }>;
};

type StoredAnswer = {
  correct: boolean;
  correctAnswer: string;
  dimension: string;
  explanation: string;
  prompt: string;
  selectedAnswer: string;
};

const dimensions: LearningDimension[] = [
  "knowledge",
  "reasoning",
  "application",
  "breadth",
  "retention",
];

function isRecord(value: Json | undefined): value is Record<string, Json | undefined> {
  return !!value && typeof value === "object" && !Array.isArray(value);
}

function parseAnswers(value: Json): StoredAnswer[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.flatMap((item) => {
    if (!isRecord(item)) {
      return [];
    }

    return [
      {
        correct: item.correct === true,
        correctAnswer:
          typeof item.correctAnswer === "string" ? item.correctAnswer : "",
        dimension: typeof item.dimension === "string" ? item.dimension : "",
        explanation: typeof item.explanation === "string" ? item.explanation : "",
        prompt: typeof item.prompt === "string" ? item.prompt : "",
        selectedAnswer:
          typeof item.selectedAnswer === "string" ? item.selectedAnswer : "",
      },
    ];
  });
}

function SetupRequired() {
  return <ZachSetupRequired title="Connect Supabase before opening Learning Zone" />;
}

export default async function LearningResultPage({
  params,
  searchParams,
}: LearningResultPageProps) {
  const { id } = await params;
  const query = await searchParams;

  if (!getSupabaseConfig()) {
    return <SetupRequired />;
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <AuthPanel error={query.error} message={query.message} />;
  }

  const [sessionResult, sessionsResult] = await Promise.all([
    supabase
      .from("learning_sessions")
      .select("*")
      .eq("user_id", user.id)
      .eq("id", id)
      .maybeSingle(),
    supabase
      .from("learning_sessions")
      .select("*")
      .eq("user_id", user.id)
      .order("completed_at", { ascending: false })
      .limit(500),
  ]);

  if (sessionResult.error) {
    return (
      <ZachPageShell
        active="learning"
        title="Learning Result"
        userEmail={user.email}
      >
        <ZachNotice tone="error">
          {friendlyDatabaseError(sessionResult.error)}
        </ZachNotice>
      </ZachPageShell>
    );
  }

  if (!sessionResult.data) {
    notFound();
  }

  const session = sessionResult.data;
  const lesson = getLearningLesson(session.lesson_slug);
  const progress = summariseLearningProgress(sessionsResult.data ?? []);
  const topic = isLearningTopicId(session.topic)
    ? getLearningTopic(session.topic)
    : null;
  const answers = parseAnswers(session.answer_payload);
  const accuracy = Math.round(
    (session.correct_count / Math.max(1, session.total_questions)) * 100,
  );

  return (
    <ZachPageShell
      active="learning"
      actions={
        <>
          <ZachButtonLink href="/learning-zone">Learning Zone</ZachButtonLink>
          {topic && (
            <ZachButtonLink href={`/learning-zone/topic/${topic.id}`} primary>
              Spin within {topic.label}
            </ZachButtonLink>
          )}
        </>
      }
      subtitle={lesson?.subtitle ?? "Stored Learning Zone quiz result."}
      title={lesson?.title ?? "Learning Result"}
      userEmail={user.email}
    >
      {(query.error || query.message || sessionsResult.error) && (
        <ZachNotice tone={query.error || sessionsResult.error ? "error" : "success"}>
          {query.error ||
            (sessionsResult.error
              ? friendlyDatabaseError(sessionsResult.error)
              : undefined) ||
            query.message}
        </ZachNotice>
      )}

      <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
        <ZachMetric
          label="Attempt"
          meta={`${session.correct_count}/${session.total_questions} correct`}
          value={`${accuracy}%`}
        />
        <ZachMetric label="Points" meta="This session" value={session.score_points} />
        <ZachMetric
          label="Intellect"
          meta="Cumulative"
          value={progress.intellectScore}
        />
        <ZachMetric
          label="Reading"
          meta="Tracked in this session"
          value={`${Math.round(session.reading_seconds / 60)} min`}
        />
        <ZachMetric
          label="Streak"
          meta="Learning days"
          value={progress.streakDays}
        />
      </section>

      <section className="grid gap-4 xl:grid-cols-[420px_minmax(0,1fr)]">
        <section className="rounded-md border border-[#2c2824]/[0.13] bg-[#fffaf2] p-5">
          <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
            Points earned
          </p>
          <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
            Dimension split
          </h2>
          <div className="mt-5 grid gap-3">
            {dimensions.map((dimension) => {
              const sessionValue =
                dimension === "application"
                  ? session.application_points
                  : dimension === "breadth"
                    ? session.breadth_points
                    : dimension === "knowledge"
                      ? session.knowledge_points
                      : dimension === "reasoning"
                        ? session.reasoning_points
                        : session.retention_points;
              const totalValue = progress.dimensions[dimension];

              return (
                <div
                  className="rounded-md border border-[#2c2824]/[0.1] bg-[#f9f4ec] p-3"
                  key={dimension}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-semibold text-[#2c2824]">
                      {LEARNING_DIMENSION_LABELS[dimension]}
                    </span>
                    <span className="font-mono text-xs text-[#8c8273]">
                      +{sessionValue}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-[#8c8273]">
                    cumulative {totalValue}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="rounded-md border border-[#2c2824]/[0.13] bg-[#fffaf2] p-5">
          <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
            Review
          </p>
          <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
            Answer explanations
          </h2>
          <div className="mt-5 grid gap-3">
            {answers.map((answer, index) => (
              <article
                className={`rounded-md border p-4 ${
                  answer.correct
                    ? "border-[#7a8c5a]/35 bg-[#7a8c5a]/10"
                    : "border-[#bb5d3a]/35 bg-[#bb5d3a]/10"
                }`}
                key={`${answer.prompt}-${index}`}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${
                      answer.correct
                        ? "bg-[#7a8c5a] text-[#f9f4ec]"
                        : "bg-[#bb5d3a] text-[#f9f4ec]"
                    }`}
                  >
                    {answer.correct ? "Correct" : "Review"}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8c8273]">
                    {answer.dimension}
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold text-[#2c2824]">
                  {answer.prompt}
                </p>
                <div className="mt-3 grid gap-2 text-sm leading-6 text-[#5f574d] md:grid-cols-2">
                  <p>
                    <span className="font-semibold text-[#2c2824]">
                      Your answer:
                    </span>{" "}
                    {answer.selectedAnswer || "No answer"}
                  </p>
                  <p>
                    <span className="font-semibold text-[#2c2824]">
                      Correct:
                    </span>{" "}
                    {answer.correctAnswer}
                  </p>
                </div>
                <p className="mt-3 text-sm leading-6 text-[#5f574d]">
                  {answer.explanation}
                </p>
              </article>
            ))}
          </div>
        </section>
      </section>

      <div className="flex flex-wrap justify-end gap-2">
        {lesson && (
          <Link
            className="inline-flex h-10 items-center rounded-md border border-[#d2c8b8] bg-[#fffaf2] px-4 text-sm font-semibold text-[#2c2824] transition hover:border-[#b9aa95]"
            href={`/learning-zone/lesson/${lesson.slug}`}
          >
            Retake lesson
          </Link>
        )}
        <Link
          className="inline-flex h-10 items-center rounded-md border border-[#241f1a] bg-[#241f1a] px-4 text-sm font-semibold text-[#f9f4ec] transition hover:bg-[#3a342c]"
          href="/learning-zone"
        >
          Back to wheel
        </Link>
      </div>
    </ZachPageShell>
  );
}
