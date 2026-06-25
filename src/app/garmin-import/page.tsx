import Link from "next/link";

import { AuthPanel } from "@/components/auth-panel";
import { DatabaseSetupNotice } from "@/components/database-setup-notice";
import { GarminImportTool } from "@/components/garmin-import-tool";
import { getDatabaseSetupIssue } from "@/lib/database-setup";
import { getSupabaseConfig } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

type GarminImportPageProps = {
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
          Connect Supabase before importing Garmin data
        </h1>
        <p className="mt-3 text-sm leading-6 text-zinc-400">
          Add the Supabase environment variables and run the SQL migration
          before using the Garmin importer.
        </p>
      </section>
    </main>
  );
}

export default async function GarminImportPage({
  searchParams,
}: GarminImportPageProps) {
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

  const [activitiesCheck, fitnessCheck] = await Promise.all([
    supabase
      .from("activities")
      .select("id")
      .eq("user_id", user.id)
      .limit(1),
    supabase
      .from("fitness_metrics")
      .select("id,sleep_score,training_load")
      .eq("user_id", user.id)
      .limit(1),
  ]);
  const databaseSetupIssue = getDatabaseSetupIssue([
    activitiesCheck.error,
    fitnessCheck.error,
  ]);

  return (
    <main className="min-h-screen bg-[#07090d] text-zinc-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.13),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(16,185,129,0.1),transparent_26%)]" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-cyan-200/80">
              Zach OS
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              Importing as {user.email ?? "private user"}
            </p>
          </div>
          <Link
            className="inline-flex h-10 items-center rounded border border-white/10 bg-white/[0.04] px-4 text-sm font-semibold text-zinc-100 transition hover:border-cyan-200/30 hover:bg-cyan-300/10"
            href="/"
          >
            Back to dashboard
          </Link>
        </header>

        {(params.error || params.message) && (
          <div
            className={`rounded border px-4 py-3 text-sm ${
              params.error
                ? "border-rose-300/25 bg-rose-400/10 text-rose-100"
                : "border-emerald-300/25 bg-emerald-400/10 text-emerald-100"
            }`}
          >
            {params.error || params.message}
          </div>
        )}

        {databaseSetupIssue ? (
          <DatabaseSetupNotice
            issue={databaseSetupIssue}
            title="Run the database schema before importing Garmin data"
          />
        ) : (
          <GarminImportTool />
        )}
      </div>
    </main>
  );
}
