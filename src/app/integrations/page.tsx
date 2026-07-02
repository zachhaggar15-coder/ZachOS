import Link from "next/link";

import {
  disconnectStrava,
  syncStravaActivities,
} from "@/app/actions";
import { AuthPanel } from "@/components/auth-panel";
import {
  ZachButtonLink,
  ZachDatabaseSetupNotice,
  ZachNotice,
  ZachPageShell,
  ZachPanel,
  ZachSetupRequired,
} from "@/components/zach-shell";
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
  return <ZachSetupRequired title="Connect Supabase before integrations" />;
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
    <ZachPageShell
      active="garmin"
      actions={
        <>
          <ZachButtonLink href="/garmin-import">Garmin import</ZachButtonLink>
          <ZachButtonLink href="/running">Running</ZachButtonLink>
        </>
      }
      maxWidth="max-w-6xl"
      subtitle="Garmin local automation is the preferred ongoing path. Strava remains available, but it is not required."
      title="Integrations"
      userEmail={user.email}
    >
        {(params.error || params.message || dataError) && (
          <ZachNotice tone={params.error || dataError ? "error" : "success"}>
            {params.error || dataError || params.message}
          </ZachNotice>
        )}

        {databaseSetupIssue ? (
          <ZachDatabaseSetupNotice
            issue={databaseSetupIssue}
            title="Run the database schema before connecting integrations"
          />
        ) : (
          <section className="grid gap-4 lg:grid-cols-[1fr_0.8fr]">
            <ZachPanel>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                    Automatic activity import
                  </p>
                  <h2 className="zach-display mt-2 text-4xl font-medium text-[#111820]">
                    Strava OAuth
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-[#71685c]">
                    Use Strava as the first automatic integration. Zach OS uses
                    official OAuth, stores tokens server-side, and imports
                    activities into the existing activity charts.
                  </p>
                </div>
                <div
                  className={`rounded-md border px-3 py-2 text-sm ${
                    stravaConfigured
                      ? "border-[#7a8c5a]/30 bg-[#7a8c5a]/10 text-[#54683b]"
                      : "border-[#b08c3c]/30 bg-[#b08c3c]/10 text-[#725822]"
                  }`}
                >
                  {stravaConfigured ? "Configured" : "Needs env vars"}
                </div>
              </div>

              <div className="mt-5 grid gap-3 rounded-md border border-[#2c2824]/[0.1] bg-[#f9f4ec] p-4 text-sm sm:grid-cols-2">
                <div>
                  <p className="text-[#8c8273]">Connection</p>
                  <p className="mt-1 font-medium text-[#2c2824]">
                    {connection.data
                      ? connection.data.athlete_name ?? "Connected athlete"
                      : "Not connected"}
                  </p>
                </div>
                <div>
                  <p className="text-[#8c8273]">Last sync</p>
                  <p className="mt-1 font-medium text-[#2c2824]">
                    {formatDateTime(connection.data?.last_sync_at ?? null)}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  className="inline-flex h-10 items-center rounded-md bg-[#bb5d3a] px-4 text-sm font-semibold text-[#f9f4ec]"
                  href="/api/strava/connect"
                >
                  {connection.data ? "Reconnect Strava" : "Connect Strava"}
                </Link>
                <form action={syncStravaActivities}>
                  <button
                    className="h-10 rounded-md border border-[#d2c8b8] bg-[#fffaf2] px-4 text-sm font-semibold text-[#2c2824] disabled:opacity-50"
                    disabled={!connection.data}
                    type="submit"
                  >
                    Sync activities
                  </button>
                </form>
                {connection.data && (
                  <form action={disconnectStrava}>
                    <button
                      className="h-10 rounded-md border border-[#bb5d3a]/30 bg-[#bb5d3a]/10 px-4 text-sm font-semibold text-[#8d3f26]"
                      type="submit"
                    >
                      Disconnect
                    </button>
                  </form>
                )}
              </div>
            </ZachPanel>

            <ZachPanel>
              <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                Garmin path
              </p>
              <h2 className="zach-display mt-2 text-4xl font-medium text-[#111820]">
                Local daily sync
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#71685c]">
                Garmin is the most important data source here. Zach OS supports
                the local browser-token sync script for daily updates, plus the
                account-export uploader for historical backfill and CSV mapping
                for edge cases.
              </p>
              <Link
                className="mt-5 inline-flex h-10 items-center rounded-md border border-[#d2c8b8] bg-[#fffaf2] px-4 text-sm font-semibold text-[#2c2824]"
                href="/garmin-import"
              >
                Import Garmin data
              </Link>
            </ZachPanel>
          </section>
        )}
    </ZachPageShell>
  );
}
