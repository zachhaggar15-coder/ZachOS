import { AuthPanel } from "@/components/auth-panel";
import { ControlRoomDashboard } from "@/components/control-room-dashboard";
import { ZachSetupRequired } from "@/components/zach-shell";
import { loadControlRoomData } from "@/lib/dashboard-data";
import { friendlyDatabaseError } from "@/lib/database-setup";
import { todayInLondon } from "@/lib/dates";
import { getSupabaseConfig } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

type HomeProps = {
  searchParams: Promise<{
    error?: string;
    message?: string;
  }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;

  if (!getSupabaseConfig()) {
    return <ZachSetupRequired />;
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <AuthPanel error={params.error} message={params.message} />;
  }

  const { dataError, ...data } = await loadControlRoomData(supabase, user.id);

  return (
    <ControlRoomDashboard
      {...data}
      error={
        params.error ?? (dataError ? friendlyDatabaseError(dataError) : undefined)
      }
      message={params.message}
      today={todayInLondon()}
      userEmail={user.email}
    />
  );
}
