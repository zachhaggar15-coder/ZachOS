import "server-only";

type MarketDataResult = {
  currency: string;
  price: number;
  provider: "alpha_vantage" | "fmp";
  symbol: string;
};

type FmpQuote = {
  price?: number;
  symbol?: string;
};

type AlphaQuote = {
  "Global Quote"?: {
    "01. symbol"?: string;
    "05. price"?: string;
  };
};

function numeric(value: unknown) {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === "string" && value.trim()) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }

  return null;
}

function normaliseTicker(ticker: string) {
  return ticker.trim().toUpperCase();
}

export function marketLookupSymbols(ticker: string, exchange: string | null) {
  const normalised = normaliseTicker(ticker);
  if (!normalised) {
    return [];
  }

  const symbols = [normalised];
  const exchangeName = exchange?.toLowerCase() ?? "";
  const looksLikeLse =
    exchangeName.includes("lse") ||
    exchangeName.includes("london") ||
    ["WEXU", "VUAG"].includes(normalised);

  if (looksLikeLse && !normalised.endsWith(".L")) {
    symbols.push(`${normalised}.L`);
  }

  return Array.from(new Set(symbols));
}

async function fetchJson<T>(url: string) {
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) {
    return null;
  }

  return (await response.json()) as T;
}

async function fetchFmpPrice(symbol: string, currency: string) {
  const apiKey = process.env.FMP_API_KEY;
  if (!apiKey) {
    return null;
  }

  const url = new URL("https://financialmodelingprep.com/stable/quote-short");
  url.searchParams.set("symbol", symbol);
  url.searchParams.set("apikey", apiKey);

  const payload = await fetchJson<FmpQuote[]>(url.toString());
  const quote = Array.isArray(payload) ? payload[0] : null;
  const price = numeric(quote?.price);

  return price === null
    ? null
    : ({
        currency,
        price,
        provider: "fmp",
        symbol: quote?.symbol ?? symbol,
      } satisfies MarketDataResult);
}

async function fetchAlphaVantagePrice(symbol: string, currency: string) {
  const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
  if (!apiKey) {
    return null;
  }

  const url = new URL("https://www.alphavantage.co/query");
  url.searchParams.set("function", "GLOBAL_QUOTE");
  url.searchParams.set("symbol", symbol);
  url.searchParams.set("apikey", apiKey);

  const payload = await fetchJson<AlphaQuote>(url.toString());
  const quote = payload?.["Global Quote"];
  const price = numeric(quote?.["05. price"]);

  return price === null
    ? null
    : ({
        currency,
        price,
        provider: "alpha_vantage",
        symbol: quote?.["01. symbol"] ?? symbol,
      } satisfies MarketDataResult);
}

export async function fetchLatestMarketPrice(
  ticker: string,
  exchange: string | null,
  currency = "GBP",
) {
  for (const symbol of marketLookupSymbols(ticker, exchange)) {
    const fmpPrice = await fetchFmpPrice(symbol, currency);
    if (fmpPrice) {
      return fmpPrice;
    }

    const alphaPrice = await fetchAlphaVantagePrice(symbol, currency);
    if (alphaPrice) {
      return alphaPrice;
    }
  }

  return null;
}

export function hasMarketDataProvider() {
  return Boolean(process.env.FMP_API_KEY || process.env.ALPHA_VANTAGE_API_KEY);
}
