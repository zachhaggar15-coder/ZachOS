import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

import { friendlyDatabaseError } from "@/lib/database-setup";
import { sortByDateAscending } from "@/lib/data-shaping";
import { todayInLondon } from "@/lib/dates";
import { fetchLatestMarketPrice, hasMarketDataProvider } from "@/lib/market-data";
import {
  calculatePortfolioSummary,
  marketPriceKey,
  type PortfolioAccountWithHoldings,
} from "@/lib/portfolio";
import type { Database } from "@/lib/supabase/database.types";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

type MarketPriceInsert =
  Database["public"]["Tables"]["market_prices"]["Insert"];

function jsonError(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status });
}

function priceIsFresh(updatedAt: string | null | undefined, today: string) {
  return Boolean(updatedAt && updatedAt.slice(0, 10) >= today);
}

export async function POST() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return jsonError("Please sign in before refreshing portfolio prices.", 401);
  }

  const accountsResult = await supabase
    .from("portfolio_accounts")
    .select("*, holdings:portfolio_holdings(*)")
    .eq("user_id", user.id)
    .order("created_at", { ascending: true });

  if (accountsResult.error) {
    return jsonError(friendlyDatabaseError(accountsResult.error));
  }

  const accounts = (accountsResult.data ?? []) as PortfolioAccountWithHoldings[];
  const holdings = accounts.flatMap((account) => account.holdings ?? []);
  const tickers = Array.from(
    new Set(
      holdings
        .filter((holding) => holding.auto_price_updates)
        .map((holding) => marketPriceKey(holding.ticker))
        .filter(Boolean),
    ),
  );

  const existingPricesResult = tickers.length
    ? await supabase.from("market_prices").select("*").in("ticker", tickers)
    : { data: [], error: null };

  if (existingPricesResult.error) {
    return jsonError(friendlyDatabaseError(existingPricesResult.error));
  }

  const today = todayInLondon();
  const existingPrices = existingPricesResult.data ?? [];
  const pricesByTicker = new Map(
    existingPrices.map((price) => [marketPriceKey(price.ticker), price]),
  );
  const rowsToUpsert: MarketPriceInsert[] = [];
  const errors: string[] = [];

  if (hasMarketDataProvider()) {
    for (const holding of holdings) {
      const ticker = marketPriceKey(holding.ticker);

      if (
        !ticker ||
        !holding.auto_price_updates ||
        priceIsFresh(pricesByTicker.get(ticker)?.updated_at, today) ||
        rowsToUpsert.some((row) => row.ticker === ticker)
      ) {
        continue;
      }

      try {
        const price = await fetchLatestMarketPrice(
          ticker,
          holding.exchange,
          holding.currency,
        );

        if (price) {
          rowsToUpsert.push({
            currency: price.currency,
            price: price.price,
            ticker,
            updated_at: new Date().toISOString(),
          });
        }
      } catch (error) {
        errors.push(
          `${ticker}: ${
            error instanceof Error ? error.message : "could not fetch price"
          }`,
        );
      }
    }
  }

  if (rowsToUpsert.length) {
    const { error } = await supabase
      .from("market_prices")
      .upsert(rowsToUpsert, { onConflict: "ticker" });

    if (error) {
      return jsonError(friendlyDatabaseError(error));
    }
  }

  const [pricesResult, snapshotsResult, financeResult] = await Promise.all([
    tickers.length
      ? supabase.from("market_prices").select("*").in("ticker", tickers)
      : Promise.resolve({ data: [], error: null }),
    supabase
      .from("net_worth_snapshots")
      .select("*")
      .eq("user_id", user.id)
      .order("date", { ascending: false })
      .limit(365),
    supabase
      .from("finance_snapshots")
      .select("cash_gbp")
      .eq("user_id", user.id)
      .order("date", { ascending: false })
      .limit(1)
      .maybeSingle(),
  ]);

  const loadError =
    pricesResult.error || snapshotsResult.error || financeResult.error;

  if (loadError) {
    return jsonError(friendlyDatabaseError(loadError));
  }

  const summary = calculatePortfolioSummary(
    accounts,
    pricesResult.data ?? [],
    sortByDateAscending(snapshotsResult.data ?? []),
  );
  const cashValue = financeResult.data?.cash_gbp ?? 0;
  const { error: snapshotError } = await supabase
    .from("net_worth_snapshots")
    .upsert(
      {
        cash_value: cashValue,
        date: today,
        estimated_net_worth: summary.totalInvested + cashValue,
        invested_value: summary.totalInvested,
        user_id: user.id,
      },
      { onConflict: "user_id,date" },
    );

  if (snapshotError) {
    return jsonError(friendlyDatabaseError(snapshotError));
  }

  revalidatePath("/");
  revalidatePath("/portfolio");
  revalidatePath("/manage");

  return NextResponse.json({
    errors,
    hasProvider: hasMarketDataProvider(),
    pricesUpdated: rowsToUpsert.length,
    tickersChecked: tickers.length,
    totalInvested: summary.totalInvested,
  });
}
