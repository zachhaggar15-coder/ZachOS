import { AuthPanel } from "@/components/auth-panel";
import { ControlRoomDashboard } from "@/components/control-room-dashboard";
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
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#07090d] px-4 text-zinc-100">
      <section className="w-full max-w-2xl rounded border border-white/10 bg-white/[0.035] p-8">
        <p className="font-mono text-xs uppercase tracking-[0.32em] text-cyan-200/80">
          Setup required
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white">
          Connect Supabase to launch Zach OS
        </h1>
        <p className="mt-3 text-sm leading-6 text-zinc-400">
          Add the public Supabase URL and anon key to your local environment,
          then run the SQL schema from the README. The dashboard will stay
          private behind Supabase Auth once configured.
        </p>
        <pre className="mt-5 overflow-x-auto rounded bg-black/35 p-4 text-sm text-cyan-100">
          NEXT_PUBLIC_SUPABASE_URL=...{"\n"}
          NEXT_PUBLIC_SUPABASE_ANON_KEY=...
        </pre>
      </section>
    </main>
  );
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
    consultantLogs,
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
        .from("consultant_readiness_logs")
        .select("*")
        .eq("user_id", user.id)
        .order("date", { ascending: false })
        .limit(365),
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
    consultantLogs.error,
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
