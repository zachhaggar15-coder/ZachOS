import { AuthPanel } from "@/components/auth-panel";
import { ControlRoomDashboard } from "@/components/control-room-dashboard";
import { ZachSetupRequired } from "@/components/zach-shell";
import {
  friendlyDatabaseError,
  getDatabaseSetupIssue,
} from "@/lib/database-setup";
import { sortByDateAscending } from "@/lib/data-shaping";
import { todayInLondon } from "@/lib/dates";
import type { PortfolioAccountWithHoldings } from "@/lib/portfolio";
import { getSupabaseConfig } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

type HomeProps = {
  searchParams: Promise<{
    error?: string;
    message?: string;
  }>;
};

function SetupRequired() {
  return <ZachSetupRequired />;
}

export default async function Home({ searchParams }: HomeProps) {
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
    dailyRoutineLogs,
    learningSessions,
    portfolioAccounts,
    marketPrices,
    netWorthSnapshots,
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
        .from("daily_routine_logs")
        .select("*")
        .eq("user_id", user.id)
        .order("date", { ascending: false })
        .limit(1000),
      supabase
        .from("learning_sessions")
        .select("*")
        .eq("user_id", user.id)
        .order("completed_at", { ascending: false })
        .limit(20),
      supabase
        .from("portfolio_accounts")
        .select("*, holdings:portfolio_holdings(*)")
        .eq("user_id", user.id)
        .order("created_at", { ascending: true }),
      supabase.from("market_prices").select("*"),
      supabase
        .from("net_worth_snapshots")
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
    dailyRoutineLogs.error,
    learningSessions.error,
    portfolioAccounts.error,
    marketPrices.error,
    netWorthSnapshots.error,
  ];
  const databaseSetupIssue = getDatabaseSetupIssue(queryErrors);
  const dataError =
    databaseSetupIssue === null
      ? queryErrors.find(Boolean)
      : null;

  return (
    <ControlRoomDashboard
      activities={sortByDateAscending(activities.data ?? [])}
      dailyLogs={sortByDateAscending(dailyLogs.data ?? [])}
      dailyRoutineLogs={sortByDateAscending(dailyRoutineLogs.data ?? [])}
      databaseSetupIssue={databaseSetupIssue}
      error={
        params.error ??
        (dataError ? friendlyDatabaseError(dataError) : undefined)
      }
      financeSnapshots={sortByDateAscending(financeSnapshots.data ?? [])}
      fitnessMetrics={sortByDateAscending(fitnessMetrics.data ?? [])}
      learningSessions={learningSessions.data ?? []}
      message={params.message}
      marketPrices={marketPrices.data ?? []}
      netWorthSnapshots={sortByDateAscending(netWorthSnapshots.data ?? [])}
      portfolioAccounts={
        (portfolioAccounts.data ?? []) as PortfolioAccountWithHoldings[]
      }
      quests={quests.data ?? []}
      today={todayInLondon()}
      userEmail={user.email}
    />
  );
}
