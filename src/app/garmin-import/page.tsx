import { AuthPanel } from "@/components/auth-panel";
import { GarminImportTool } from "@/components/garmin-import-tool";
import {
  ZachButtonLink,
  ZachDatabaseSetupNotice,
  ZachNotice,
  ZachPageShell,
  ZachSetupRequired,
} from "@/components/zach-shell";
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
  return <ZachSetupRequired title="Connect Supabase before importing Garmin data" />;
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
      .select("id,date")
      .eq("user_id", user.id)
      .order("date", { ascending: false })
      .limit(1),
    supabase
      .from("fitness_metrics")
      .select("id,date,sleep_score,training_load")
      .eq("user_id", user.id)
      .order("date", { ascending: false })
      .limit(1),
  ]);
  const databaseSetupIssue = getDatabaseSetupIssue([
    activitiesCheck.error,
    fitnessCheck.error,
  ]);

  return (
    <ZachPageShell
      active="garmin"
      actions={
        <>
          <ZachButtonLink href="/running">Running</ZachButtonLink>
          <ZachButtonLink href="/activities">Activities</ZachButtonLink>
        </>
      }
      subtitle="Import Garmin account exports or mapped CSV files into Zach OS. The local daily automation remains the preferred path for ongoing updates."
      title="Garmin Import"
      userEmail={user.email}
    >
        {(params.error || params.message) && (
          <ZachNotice tone={params.error ? "error" : "success"}>
            {params.error || params.message}
          </ZachNotice>
        )}

        {databaseSetupIssue ? (
          <ZachDatabaseSetupNotice
            issue={databaseSetupIssue}
            title="Run the database schema before importing Garmin data"
          />
        ) : (
          <GarminImportTool
            latestActivityDate={activitiesCheck.data?.[0]?.date ?? null}
            latestFitnessDate={fitnessCheck.data?.[0]?.date ?? null}
          />
        )}
    </ZachPageShell>
  );
}
