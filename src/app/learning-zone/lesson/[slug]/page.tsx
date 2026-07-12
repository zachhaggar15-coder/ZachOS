import Link from "next/link";
import { notFound } from "next/navigation";

import { AuthPanel } from "@/components/auth-panel";
import { LearningLessonExperience } from "@/components/learning-lesson-experience";
import {
  ZachButtonLink,
  ZachDatabaseSetupNotice,
  ZachMetric,
  ZachNotice,
  ZachPageShell,
  ZachSetupRequired,
} from "@/components/zach-shell";
import {
  friendlyDatabaseError,
  getDatabaseSetupIssue,
} from "@/lib/database-setup";
import { getLearningLesson, getLearningTopic } from "@/lib/learning-zone";
import { getSupabaseConfig } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

type LearningLessonPageProps = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    error?: string;
    message?: string;
  }>;
};

function formatDate(value: string | null | undefined) {
  if (!value) {
    return "--";
  }

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

function SetupRequired() {
  return <ZachSetupRequired title="Connect Supabase before opening Learning Zone" />;
}

export default async function LearningLessonPage({
  params,
  searchParams,
}: LearningLessonPageProps) {
  const { slug } = await params;
  const query = await searchParams;
  const lesson = getLearningLesson(slug);

  if (!lesson) {
    notFound();
  }

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

  const [lessonAttempts, topicAttempts, lessonNote] = await Promise.all([
    supabase
      .from("learning_sessions")
      .select("*")
      .eq("user_id", user.id)
      .eq("lesson_slug", lesson.slug)
      .order("completed_at", { ascending: false })
      .limit(5),
    supabase
      .from("learning_sessions")
      .select("*")
      .eq("user_id", user.id)
      .eq("topic", lesson.topic)
      .order("completed_at", { ascending: false })
      .limit(50),
    supabase
      .from("learning_lesson_notes")
      .select("*")
      .eq("user_id", user.id)
      .eq("lesson_slug", lesson.slug)
      .maybeSingle(),
  ]);
  const queryErrors = [lessonAttempts.error, topicAttempts.error, lessonNote.error];
  const databaseSetupIssue = getDatabaseSetupIssue(queryErrors);
  const dataError = databaseSetupIssue === null ? queryErrors.find(Boolean) : null;
  const latestAttempt = lessonAttempts.data?.[0] ?? null;
  const topic = getLearningTopic(lesson.topic);
  const topicAccuracy = topicAttempts.data?.length
    ? Math.round(
        (topicAttempts.data.reduce((sum, item) => sum + item.correct_count, 0) /
          Math.max(
            1,
            topicAttempts.data.reduce((sum, item) => sum + item.total_questions, 0),
          )) *
          100,
      )
    : 0;

  return (
    <ZachPageShell
      active="learning"
      actions={
        <>
          <ZachButtonLink href="/learning-zone">Learning Zone</ZachButtonLink>
          <ZachButtonLink href={`/learning-zone/topic/${lesson.topic}`}>
            Next {topic.label}
          </ZachButtonLink>
        </>
      }
      subtitle={lesson.subtitle}
      title={lesson.title}
      userEmail={user.email}
    >
      {(query.error || query.message || dataError) && (
        <ZachNotice tone={query.error || dataError ? "error" : "success"}>
          {query.error ||
            (dataError ? friendlyDatabaseError(dataError) : undefined) ||
            query.message}
        </ZachNotice>
      )}

      {databaseSetupIssue ? (
        <ZachDatabaseSetupNotice
          issue={databaseSetupIssue}
          title="Run the learning schema before taking quizzes"
        />
      ) : (
        <>
          <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            <ZachMetric
              label="Topic"
              meta="Wheel selection"
              value={
                <span>
                  <span
                    className="mr-2 inline-block h-3 w-3 rounded-full"
                    style={{ backgroundColor: topic.accent }}
                  />
                  {topic.label}
                </span>
              }
            />
            <ZachMetric
              label="Concept"
              meta={lesson.concept.label}
              value={lesson.concept.level}
            />
            <ZachMetric
              label="Read time"
              meta="Estimated"
              value={`${lesson.estimatedMinutes} min`}
            />
            <ZachMetric
              label="Topic accuracy"
              meta={`${topicAttempts.data?.length ?? 0} attempts`}
              value={`${topicAccuracy}%`}
            />
            <ZachMetric
              label="Last attempt"
              meta={latestAttempt ? `${latestAttempt.score_points} points` : "New lesson"}
              value={formatDate(latestAttempt?.completed_at)}
            />
          </section>

          <LearningLessonExperience lesson={lesson} note={lessonNote.data} />

          <div className="flex justify-end">
            <Link
              className="text-sm font-semibold text-[#bb5d3a]"
              href="/learning-zone"
            >
              Back to Learning Zone
            </Link>
          </div>
        </>
      )}
    </ZachPageShell>
  );
}
