import type {
  MarketPrice,
  NetWorthSnapshot,
  PortfolioAccount,
  PortfolioHolding,
} from "@/lib/supabase/database.types";

export type PortfolioAccountWithHoldings = PortfolioAccount & {
  holdings: PortfolioHolding[];
};

export type HoldingValue = {
  accountId: string;
  accountName: string;
  accountType: string;
  currency: string;
  exchange: string | null;
  fundName: string;
  holdingId: string;
  price: number | null;
  priceUpdatedAt: string | null;
  ticker: string | null;
  units: number;
  value: number | null;
};

export type PortfolioSummary = {
  cashValue: number;
  holdingValues: HoldingValue[];
  isaValue: number;
  lisaValue: number;
  pricedHoldings: number;
  totalInvested: number;
  weeklyGainLoss: number | null;
};

function numeric(value: number | null | undefined) {
  return typeof value === "number" && Number.isFinite(value) ? value : 0;
}

export function marketPriceKey(ticker: string | null | undefined) {
  return ticker?.trim().toUpperCase() ?? "";
}

export function calculatePortfolioSummary(
  accounts: PortfolioAccountWithHoldings[],
  prices: MarketPrice[],
  snapshots: NetWorthSnapshot[] = [],
): PortfolioSummary {
  const pricesByTicker = new Map(
    prices.map((price) => [marketPriceKey(price.ticker), price]),
  );

  const holdingValues = accounts.flatMap((account) =>
    account.holdings.map((holding) => {
      const ticker = marketPriceKey(holding.ticker);
      const price = ticker ? pricesByTicker.get(ticker) ?? null : null;
      const units = numeric(holding.units);
      const value = price ? units * numeric(price.price) : null;

      return {
        accountId: account.id,
        accountName: account.name,
        accountType: account.type,
        currency: holding.currency,
        exchange: holding.exchange,
        fundName: holding.fund_name || holding.ticker || "Untitled holding",
        holdingId: holding.id,
        price: price?.price ?? null,
        priceUpdatedAt: price?.updated_at ?? null,
        ticker: holding.ticker,
        units,
        value,
      };
    }),
  );

  const sumByType = (type: string) =>
    holdingValues
      .filter((holding) => holding.accountType.toUpperCase() === type)
      .reduce((total, holding) => total + numeric(holding.value), 0);

  const isaValue = sumByType("ISA");
  const lisaValue = sumByType("LISA");
  const totalInvested = isaValue + lisaValue;
  const latestSnapshot = [...snapshots]
    .filter((snapshot) => snapshot.invested_value !== null)
    .sort((a, b) => a.date.localeCompare(b.date))
    .at(-1);
  const cutoffDate = latestSnapshot
    ? new Date(`${latestSnapshot.date}T12:00:00Z`)
    : null;

  if (cutoffDate) {
    cutoffDate.setUTCDate(cutoffDate.getUTCDate() - 7);
  }

  const weeklyBaseline =
    cutoffDate && latestSnapshot
      ? [...snapshots]
          .filter(
            (snapshot) =>
              snapshot.invested_value !== null &&
              snapshot.date <= cutoffDate.toISOString().slice(0, 10),
          )
          .sort((a, b) => a.date.localeCompare(b.date))
          .at(-1)
      : null;

  return {
    cashValue: numeric(latestSnapshot?.cash_value),
    holdingValues,
    isaValue,
    lisaValue,
    pricedHoldings: holdingValues.filter((holding) => holding.price !== null).length,
    totalInvested,
    weeklyGainLoss:
      weeklyBaseline?.invested_value !== null &&
      weeklyBaseline?.invested_value !== undefined
        ? totalInvested - weeklyBaseline.invested_value
        : null,
  };
}
