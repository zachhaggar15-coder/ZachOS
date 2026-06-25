import Link from "next/link";

import {
  disconnectStrava,
  syncStravaActivities,
} from "@/app/actions";
import { AuthPanel } from "@/components/auth-panel";
import { DatabaseSetupNotice } from "@/components/database-setup-notice";
import {
  friendlyDatabaseError,
  getDatabaseSetupIssue,
} from "@/lib/database-setup";
import { getStravaConfig } from "@/lib/strava";
import { getSupabaseConfig } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

type IntegrationsPageProps = {
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
          Connect Supabase before integrations
        </h1>
        <p className="mt-3 text-sm leading-6 text-zinc-400">
          Add Supabase environment variables and run the SQL schema before
          connecting Strava or importing Garmin files.
        </p>
      </section>
    </main>
  );
}

function formatDateTime(value: string | null) {
  return value
    ? new Date(value).toLocaleString("en-GB", {
        dateStyle: "medium",
        timeStyle: "short",
      })
    : "Never";
}

export default async function IntegrationsPage({
  searchParams,
}: IntegrationsPageProps) {
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

  const connection = await supabase
    .from("strava_connections")
    .select("*")
    .eq("user_id", user.id)
    .maybeSingle();
  const databaseSetupIssue = getDatabaseSetupIssue([connection.error]);
  const dataError =
    databaseSetupIssue === null && connection.error
      ? friendlyDatabaseError(connection.error)
      : null;
  const stravaConfigured = Boolean(getStravaConfig(process.env.NEXT_PUBLIC_SITE_URL));

  return (
    <main className="min-h-screen bg-[#07090d] text-zinc-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.13),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(16,185,129,0.1),transparent_26%)]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-cyan-200/80">
              Zach OS
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Integrations
            </h1>
            <p className="mt-2 text-sm text-zinc-500">
              Strava for automatic activity sync. Garmin stays manual for
              health metrics.
            </p>
          </div>
          <Link
            className="inline-flex h-10 items-center rounded border border-white/10 bg-white/[0.04] px-4 text-sm font-semibold text-zinc-100"
            href="/"
          >
            Back to dashboard
          </Link>
        </header>

        {(params.error || params.message || dataError) && (
          <div
            className={`rounded border px-4 py-3 text-sm ${
              params.error || dataError
                ? "border-rose-300/25 bg-rose-400/10 text-rose-100"
                : "border-emerald-300/25 bg-emerald-400/10 text-emerald-100"
            }`}
          >
            {params.error || dataError || params.message}
          </div>
        )}

        {databaseSetupIssue ? (
          <DatabaseSetupNotice
            issue={databaseSetupIssue}
            title="Run the database schema before connecting integrations"
          />
        ) : (
          <section className="grid gap-4 lg:grid-cols-[1fr_0.8fr]">
            <article className="rounded border border-cyan-200/20 bg-gradient-to-br from-cyan-200/[0.08] to-white/[0.025] p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-cyan-200/70">
                    Automatic activity import
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    Strava OAuth
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
                    Use Strava as the first automatic integration. Zach OS uses
                    official OAuth, stores tokens server-side, and imports
                    activities into the existing activity charts.
                  </p>
                </div>
                <div
                  className={`rounded border px-3 py-2 text-sm ${
                    stravaConfigured
                      ? "border-emerald-200/25 bg-emerald-300/10 text-emerald-100"
                      : "border-amber-200/25 bg-amber-300/10 text-amber-100"
                  }`}
                >
                  {stravaConfigured ? "Configured" : "Needs env vars"}
                </div>
              </div>

              <div className="mt-5 grid gap-3 rounded border border-white/10 bg-black/20 p-4 text-sm sm:grid-cols-2">
                <div>
                  <p className="text-zinc-500">Connection</p>
                  <p className="mt-1 font-medium text-zinc-100">
                    {connection.data
                      ? connection.data.athlete_name ?? "Connected athlete"
                      : "Not connected"}
                  </p>
                </div>
                <div>
                  <p className="text-zinc-500">Last sync</p>
                  <p className="mt-1 font-medium text-zinc-100">
                    {formatDateTime(connection.data?.last_sync_at ?? null)}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  className="inline-flex h-10 items-center rounded bg-cyan-200 px-4 text-sm font-semibold text-slate-950"
                  href="/api/strava/connect"
                >
                  {connection.data ? "Reconnect Strava" : "Connect Strava"}
                </Link>
                <form action={syncStravaActivities}>
                  <button
                    className="h-10 rounded border border-white/10 bg-white/[0.04] px-4 text-sm font-semibold text-zinc-100 disabled:opacity-50"
                    disabled={!connection.data}
                    type="submit"
                  >
                    Sync activities
                  </button>
                </form>
                {connection.data && (
                  <form action={disconnectStrava}>
                    <button
                      className="h-10 rounded border border-rose-200/20 bg-rose-300/10 px-4 text-sm font-semibold text-rose-100"
                      type="submit"
                    >
                      Disconnect
                    </button>
                  </form>
                )}
              </div>
            </article>

            <article className="rounded border border-white/10 bg-white/[0.035] p-5">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-cyan-200/70">
                Manual health import
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white">
                Garmin import
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Keep Garmin as manual export import for sleep score, HRV,
                resting HR, training status, training load and other
                Garmin-specific metrics. No Garmin
                credentials are stored and no Garmin Connect scraping is used.
              </p>
              <Link
                className="mt-5 inline-flex h-10 items-center rounded border border-cyan-200/20 bg-cyan-200/10 px-4 text-sm font-semibold text-cyan-100"
                href="/garmin-import"
              >
                Import Garmin data
              </Link>
            </article>
          </section>
        )}
      </div>
    </main>
  );
}
