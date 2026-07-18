import { notFound, redirect } from "next/navigation";

import { AuthPanel } from "@/components/auth-panel";
import { ZachSetupRequired } from "@/components/zach-shell";
import { friendlyDatabaseError } from "@/lib/database-setup";
import {
  chooseNextLearningLesson,
  isLearningTopicId,
} from "@/lib/learning-zone";
import { getSupabaseConfig } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

type LearningTopicPageProps = {
  params: Promise<{
    topic: string;
  }>;
  searchParams: Promise<{
    error?: string;
    message?: string;
  }>;
};

function SetupRequired() {
  return <ZachSetupRequired title="Connect Supabase before opening Learning Zone" />;
}

export default async function LearningTopicPage({
  params,
  searchParams,
}: LearningTopicPageProps) {
  const { topic } = await params;
  const query = await searchParams;

  if (!isLearningTopicId(topic)) {
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

  const sessions = await supabase
    .from("learning_sessions")
    .select("*")
    .eq("user_id", user.id)
    .eq("topic", topic)
    .order("completed_at", { ascending: false })
    .limit(500);

  if (sessions.error) {
    redirect(
      `/learning-zone?error=${encodeURIComponent(friendlyDatabaseError(sessions.error))}`,
    );
  }

  const lesson = chooseNextLearningLesson(topic, sessions.data ?? []);

  redirect(`/learning-zone/lesson/${lesson.slug}`);
}
