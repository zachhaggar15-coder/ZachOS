import Link from "next/link";
import { notFound } from "next/navigation";

import { AuthPanel } from "@/components/auth-panel";
import { LearningLessonExperience } from "@/components/learning-lesson-experience";
import {
  ZachDatabaseSetupNotice,
  ZachNotice,
  ZachPageShell,
  ZachSetupRequired,
} from "@/components/zach-shell";
import {
  friendlyDatabaseError,
  getDatabaseSetupIssue,
} from "@/lib/database-setup";
import {
  getLearningLesson,
  lessonAttemptSeed,
  shuffleLessonChoices,
} from "@/lib/learning-zone";
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

  const lessonAttempts = await supabase
    .from("learning_sessions")
    .select("*")
    .eq("user_id", user.id)
    .eq("lesson_slug", lesson.slug)
    .order("completed_at", { ascending: false })
    .limit(5);

  const databaseSetupIssue = getDatabaseSetupIssue([lessonAttempts.error]);
  const dataError = databaseSetupIssue === null ? lessonAttempts.error : null;
  const latestAttempt = lessonAttempts.data?.[0] ?? null;
  const attemptSeed = lessonAttemptSeed(
    lesson.slug,
    lessonAttempts.data?.length ?? 0,
    latestAttempt?.completed_at,
  );

  return (
    <ZachPageShell
      active="learning"
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
          <LearningLessonExperience
            lesson={shuffleLessonChoices(lesson, attemptSeed)}
          />

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
