import { sortByDateAscending } from "@/lib/data-shaping";
import { getDatabaseSetupIssue } from "@/lib/database-setup";
import type { PortfolioAccountWithHoldings } from "@/lib/portfolio";
import type { SupabaseServerClient } from "@/lib/supabase/server";

/**
 * How far back the control room reads.
 *
 * The dashboard renders 14-day sparklines, today's vitals and rolling 30-day
 * averages, so a year of rows was being shipped to compute a fortnight of
 * chart. Quests are the exception: an all-time running total needs the full
 * activity history, so that query stays long but is trimmed to the columns the
 * dashboard and quest maths actually read.
 */
const RECENT_DAYS = 120;
const NET_WORTH_ROWS = 180;
const ACTIVITY_ROWS = 3000;

const DAILY_LOG_COLUMNS =
  "id, date, mood_score, deep_work_hours, french_minutes, reading_pages, writing_minutes, notes";
const FITNESS_COLUMNS =
  "id, date, sleep_score, sleep_hours, hrv, resting_hr, training_load, training_status";
const FINANCE_COLUMNS =
  "id, date, net_worth_gbp, invested_gbp, cash_gbp, isa_gbp, lifetime_isa_gbp, net_worth_change_percent";
// `notes` carries the activity title, so it is the label fallback - not optional.
const ACTIVITY_COLUMNS =
  "id, date, activity_type, distance_km, duration_minutes, avg_hr, max_hr, calories, training_effect, notes";

export async function loadControlRoomData(
  supabase: SupabaseServerClient,
  userId: string,
) {
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
      .select(DAILY_LOG_COLUMNS)
      .eq("user_id", userId)
      .order("date", { ascending: false })
      .limit(RECENT_DAYS),
    supabase
      .from("fitness_metrics")
      .select(FITNESS_COLUMNS)
      .eq("user_id", userId)
      .order("date", { ascending: false })
      .limit(RECENT_DAYS),
    supabase
      .from("finance_snapshots")
      .select(FINANCE_COLUMNS)
      .eq("user_id", userId)
      .order("date", { ascending: false })
      .limit(RECENT_DAYS),
    supabase
      .from("activities")
      .select(ACTIVITY_COLUMNS)
      .eq("user_id", userId)
      .order("date", { ascending: false })
      .limit(ACTIVITY_ROWS),
    supabase
      .from("quests")
      .select("*")
      .eq("user_id", userId)
      .order("deadline", { ascending: true, nullsFirst: false })
      .order("created_at", { ascending: true })
      .limit(100),
    supabase
      .from("daily_routine_logs")
      .select("*")
      .eq("user_id", userId)
      .order("date", { ascending: false })
      .limit(400),
    supabase
      .from("learning_sessions")
      .select("*")
      .eq("user_id", userId)
      .order("completed_at", { ascending: false })
      .limit(20),
    supabase
      .from("portfolio_accounts")
      .select("*, holdings:portfolio_holdings(*)")
      .eq("user_id", userId)
      .order("created_at", { ascending: true }),
    supabase.from("market_prices").select("*"),
    supabase
      .from("net_worth_snapshots")
      .select("id, date, estimated_net_worth, invested_value, cash_value")
      .eq("user_id", userId)
      .order("date", { ascending: false })
      .limit(NET_WORTH_ROWS),
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

  return {
    // The selects above are column subsets of each table. Every consumer reads
    // only those columns, so the widening cast is confined to this one place
    // rather than leaking `as never` across the page.
    activities: sortByDateAscending(activities.data ?? []) as never,
    dailyLogs: sortByDateAscending(dailyLogs.data ?? []) as never,
    dailyRoutineLogs: sortByDateAscending(dailyRoutineLogs.data ?? []),
    databaseSetupIssue,
    dataError: databaseSetupIssue === null ? queryErrors.find(Boolean) : null,
    financeSnapshots: sortByDateAscending(financeSnapshots.data ?? []) as never,
    fitnessMetrics: sortByDateAscending(fitnessMetrics.data ?? []) as never,
    learningSessions: learningSessions.data ?? [],
    marketPrices: marketPrices.data ?? [],
    netWorthSnapshots: sortByDateAscending(netWorthSnapshots.data ?? []) as never,
    portfolioAccounts: (portfolioAccounts.data ??
      []) as PortfolioAccountWithHoldings[],
    quests: quests.data ?? [],
  };
}
