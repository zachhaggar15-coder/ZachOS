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
import { priceRefreshWindowId } from "@/lib/price-refresh";
import type { Database } from "@/lib/supabase/database.types";
import { createSupabaseServiceRoleClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

type MarketPriceInsert =
  Database["public"]["Tables"]["market_prices"]["Insert"];

type MarketPrice = Database["public"]["Tables"]["market_prices"]["Row"];

const MAX_AUTO_REFRESH_MOVE = 0.35;
const EXPECTED_PRICE_RANGES: Record<string, { max: number; min: number }> = {
  AMUNDI_PRIME_ACWI: { max: 40, min: 10 },
  VUAG: { max: 180, min: 70 },
  WEXU: { max: 18, min: 8 },
};

function jsonError(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status });
}

function priceIsFresh(
  updatedAt: string | null | undefined,
  refreshWindowId: string,
) {
  return Boolean(updatedAt && updatedAt.slice(0, 10) >= refreshWindowId);
}

function shouldAutoPriceHolding(holding: PortfolioAccountWithHoldings["holdings"][number]) {
  return (
    holding.auto_price_updates ||
    marketPriceKey(holding.ticker) === "AMUNDI_PRIME_ACWI"
  );
}

function formatPrice(value: number) {
  return value.toFixed(value >= 20 ? 2 : 4);
}

function isWithinExpectedRange(ticker: string, price: number) {
  const range = EXPECTED_PRICE_RANGES[ticker];
  return !range || (price >= range.min && price <= range.max);
}

function priceMoveLooksReasonable(previousPrice: number, nextPrice: number) {
  if (previousPrice <= 0 || nextPrice <= 0) {
    return false;
  }

  const ratio = nextPrice / previousPrice;
  return (
    ratio >= 1 - MAX_AUTO_REFRESH_MOVE &&
    ratio <= 1 + MAX_AUTO_REFRESH_MOVE
  );
}

function guardRefreshedPrice({
  existingPrice,
  nextPrice,
  ticker,
}: {
  existingPrice: MarketPrice | null;
  nextPrice: number;
  ticker: string;
}) {
  const existingValue = existingPrice?.price ?? null;
  const currentIsPlausible =
    existingValue === null || isWithinExpectedRange(ticker, existingValue);
  const candidateIsPlausible = isWithinExpectedRange(ticker, nextPrice);
  const penceToPounds = nextPrice / 100;
  const poundsToPence = nextPrice * 100;
  const penceToPoundsIsPlausible = isWithinExpectedRange(ticker, penceToPounds);
  const poundsToPenceIsPlausible = isWithinExpectedRange(ticker, poundsToPence);

  if (existingValue !== null) {
    if (!currentIsPlausible && candidateIsPlausible) {
      return {
        price: nextPrice,
        warning: `${ticker}: repaired an implausible stored price of ${formatPrice(
          existingValue,
        )} with ${formatPrice(nextPrice)}.`,
      };
    }

    if (
      currentIsPlausible &&
      candidateIsPlausible &&
      priceMoveLooksReasonable(existingValue, nextPrice)
    ) {
      return { price: nextPrice, warning: null };
    }

    if (
      penceToPoundsIsPlausible &&
      (priceMoveLooksReasonable(existingValue, penceToPounds) ||
        !currentIsPlausible)
    ) {
      return {
        price: penceToPounds,
        warning: `${ticker}: converted a pence-style quote from ${formatPrice(
          nextPrice,
        )} to ${formatPrice(penceToPounds)}.`,
      };
    }

    if (
      poundsToPenceIsPlausible &&
      currentIsPlausible &&
      priceMoveLooksReasonable(existingValue, poundsToPence)
    ) {
      return {
        price: poundsToPence,
        warning: `${ticker}: converted an under-scaled quote from ${formatPrice(
          nextPrice,
        )} to ${formatPrice(poundsToPence)}.`,
      };
    }

    return {
      price: null,
      warning: `${ticker}: skipped suspicious quote ${formatPrice(
        nextPrice,
      )}; previous stored price is ${formatPrice(existingValue)}.`,
    };
  }

  if (!candidateIsPlausible && penceToPoundsIsPlausible) {
    return {
      price: penceToPounds,
      warning: `${ticker}: converted first pence-style quote from ${formatPrice(
        nextPrice,
      )} to ${formatPrice(penceToPounds)}.`,
    };
  }

  if (!candidateIsPlausible) {
    return {
      price: null,
      warning: `${ticker}: skipped implausible first quote ${formatPrice(
        nextPrice,
      )}. Enter a manual price once, then auto-refresh can sanity-check future moves.`,
    };
  }

  return { price: nextPrice, warning: null };
}

export async function POST(request: Request) {
  const forceRefresh = new URL(request.url).searchParams.get("force") === "1";
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
  const amundiAutoRepairIds = holdings
    .filter(
      (holding) =>
        marketPriceKey(holding.ticker) === "AMUNDI_PRIME_ACWI" &&
        !holding.auto_price_updates,
    )
    .map((holding) => holding.id);

  if (amundiAutoRepairIds.length) {
    await supabase
      .from("portfolio_holdings")
      .update({ auto_price_updates: true, exchange: "Yahoo" })
      .in("id", amundiAutoRepairIds);
  }

  const tickers = Array.from(
    new Set(
      holdings
        .filter(shouldAutoPriceHolding)
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
  const refreshWindow = priceRefreshWindowId();
  const existingPrices = existingPricesResult.data ?? [];
  const pricesByTicker = new Map(
    existingPrices.map((price) => [marketPriceKey(price.ticker), price]),
  );
  const rowsToUpsert: MarketPriceInsert[] = [];
  const errors: string[] = [];
  const priceWarnings: string[] = [];
  const skippedTickers: string[] = [];
  const unavailableTickers: string[] = [];

  if (hasMarketDataProvider()) {
    for (const holding of holdings) {
      const ticker = marketPriceKey(holding.ticker);

      if (
        !ticker ||
        !shouldAutoPriceHolding(holding) ||
        (!forceRefresh &&
          priceIsFresh(
            pricesByTicker.get(ticker)?.updated_at,
            refreshWindow,
          )) ||
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
          const guarded = guardRefreshedPrice({
            existingPrice: pricesByTicker.get(ticker) ?? null,
            nextPrice: price.price,
            ticker,
          });

          if (guarded.warning) {
            priceWarnings.push(guarded.warning);
          }

          if (guarded.price === null) {
            skippedTickers.push(ticker);
            continue;
          }

          rowsToUpsert.push({
            currency: price.currency,
            price: guarded.price,
            ticker,
            updated_at: new Date().toISOString(),
          });
        } else {
          unavailableTickers.push(ticker);
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
    let adminSupabase: ReturnType<typeof createSupabaseServiceRoleClient>;
    try {
      adminSupabase = createSupabaseServiceRoleClient();
    } catch (error) {
      return jsonError(
        error instanceof Error
          ? error.message
          : "Portfolio price writes are not configured.",
        500,
      );
    }

    const { error } = await adminSupabase
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
    forceRefresh,
    hasProvider: hasMarketDataProvider(),
    priceWarnings,
    pricesUpdated: rowsToUpsert.length,
    refreshWindowId: refreshWindow,
    skippedTickers,
    tickersChecked: tickers.length,
    totalInvested: summary.totalInvested,
    unavailableTickers,
  });
}
