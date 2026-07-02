import Link from "next/link";

import { AuthPanel } from "@/components/auth-panel";
import { DashboardShell } from "@/components/dashboard-shell";
import {
  friendlyDatabaseError,
  getDatabaseSetupIssue,
} from "@/lib/database-setup";
import { sortByDateAscending } from "@/lib/data-shaping";
import { todayInLondon } from "@/lib/dates";
import { getSupabaseConfig } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

type ManagePageProps = {
  searchParams: Promise<{
    error?: string;
    message?: string;
  }>;
};

function SetupRequired() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#07090d] px-4 text-zinc-100">
      <section className="w-full max-w-2xl rounded border border-white/10 bg-white/[0.035] p-8">
        <p className="font-mono text-xs uppercase tracking-[0.32em] text-cyan-200/80">
          Setup required
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white">
          Connect Supabase to manage Zach OS
        </h1>
        <p className="mt-3 text-sm leading-6 text-zinc-400">
          Add your Supabase environment variables and run the SQL schema before
          editing dashboard data.
        </p>
      </section>
    </main>
  );
}

export default async function ManagePage({ searchParams }: ManagePageProps) {
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

  const [
    dailyLogs,
    fitnessMetrics,
    financeSnapshots,
    activities,
    quests,
    consultantLogs,
  ] = await Promise.all([
    supabase
      .from("daily_logs")
      .select("*")
      .eq("user_id", user.id)
      .order("date", { ascending: false })
      .limit(365),
    supabase
      .from("fitness_metrics")
      .select("*")
      .eq("user_id", user.id)
      .order("date", { ascending: false })
      .limit(365),
    supabase
      .from("finance_snapshots")
      .select("*")
      .eq("user_id", user.id)
      .order("date", { ascending: false })
      .limit(365),
    supabase
      .from("activities")
      .select("*")
      .eq("user_id", user.id)
      .order("date", { ascending: false })
      .limit(3000),
    supabase
      .from("quests")
      .select("*")
      .eq("user_id", user.id)
      .order("deadline", { ascending: true, nullsFirst: false })
      .order("created_at", { ascending: true })
      .limit(100),
    supabase
      .from("consultant_readiness_logs")
      .select("*")
      .eq("user_id", user.id)
      .order("date", { ascending: false })
      .limit(365),
  ]);

  const queryErrors = [
    dailyLogs.error,
    fitnessMetrics.error,
    financeSnapshots.error,
    activities.error,
    quests.error,
    consultantLogs.error,
  ];
  const databaseSetupIssue = getDatabaseSetupIssue(queryErrors);
  const dataError =
    databaseSetupIssue === null ? queryErrors.find(Boolean) : null;

  return (
    <>
      <div className="fixed right-4 top-4 z-20">
        <Link
          className="rounded-md border border-[#d2c8b8] bg-[#fffaf2] px-3 py-2 text-xs font-semibold text-[#2c2824] shadow-sm"
          href="/"
        >
          Back to one-screen dashboard
        </Link>
      </div>
      <DashboardShell
        activities={sortByDateAscending(activities.data ?? [])}
        consultantLogs={sortByDateAscending(consultantLogs.data ?? [])}
        dailyLogs={sortByDateAscending(dailyLogs.data ?? [])}
        databaseSetupIssue={databaseSetupIssue}
        error={
          params.error ??
          (dataError ? friendlyDatabaseError(dataError) : undefined)
        }
        financeSnapshots={sortByDateAscending(financeSnapshots.data ?? [])}
        fitnessMetrics={sortByDateAscending(fitnessMetrics.data ?? [])}
        message={params.message}
        quests={quests.data ?? []}
        today={todayInLondon()}
        userEmail={user.email}
      />
    </>
  );
}
