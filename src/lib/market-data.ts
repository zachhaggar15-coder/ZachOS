import "server-only";

type MarketDataResult = {
  currency: string;
  price: number;
  provider: "alpha_vantage" | "fmp" | "yahoo";
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

type YahooChartQuote = {
  chart?: {
    error?: unknown;
    result?: Array<{
      meta?: {
        currency?: string;
        regularMarketPrice?: number;
        symbol?: string;
      };
    }>;
  };
};

const MARKET_ALIASES: Record<string, string[]> = {
  AMUNDI_PRIME_ACWI: ["WEBN.DE", "WEBN.MI", "WEBG.DE"],
  WEBN: ["WEBN.DE", "WEBN.MI"],
  WEBG: ["WEBG.DE", "WEBG.SW"],
  WEXU: ["WEXU.L"],
  VUAG: ["VUAG.L"],
};

const LONDON_SUFFIX = ".L";

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

function isLondonSymbol(symbol: string) {
  return symbol.toUpperCase().endsWith(LONDON_SUFFIX);
}

export function marketLookupSymbols(ticker: string, exchange: string | null) {
  const normalised = normaliseTicker(ticker);
  if (!normalised) {
    return [];
  }

  if (MARKET_ALIASES[normalised]) {
    return MARKET_ALIASES[normalised];
  }

  const exchangeName = exchange?.toLowerCase() ?? "";
  const looksLikeLse =
    exchangeName.includes("lse") ||
    exchangeName.includes("london") ||
    ["WEXU", "VUAG"].includes(normalised);

  const symbols = looksLikeLse && !isLondonSymbol(normalised)
    ? [`${normalised}${LONDON_SUFFIX}`]
    : [normalised];

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
        price: normaliseApiQuotePrice(price, symbol, currency),
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
        price: normaliseApiQuotePrice(price, symbol, currency),
        provider: "alpha_vantage",
        symbol: quote?.["01. symbol"] ?? symbol,
      } satisfies MarketDataResult);
}

function normaliseApiQuotePrice(
  price: number,
  symbol: string,
  fallbackCurrency: string,
) {
  // London ETF quotes are often returned in GBp/pence by generic APIs even
  // when the holding is stored as GBP. Keep dashboard values in pounds.
  if (
    fallbackCurrency.toUpperCase() === "GBP" &&
    isLondonSymbol(symbol) &&
    price >= 500
  ) {
    return price / 100;
  }

  return price;
}

function yahooFxSymbol(fromCurrency: string, toCurrency: string) {
  const from = fromCurrency.toUpperCase();
  const to = toCurrency.toUpperCase();

  if (from === to) {
    return null;
  }

  return `${from}${to}=X`;
}

async function fetchYahooFxRate(fromCurrency: string, toCurrency: string) {
  const symbol = yahooFxSymbol(fromCurrency, toCurrency);
  if (!symbol) {
    return 1;
  }

  const url = new URL(
    `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(
      symbol,
    )}`,
  );
  url.searchParams.set("range", "1d");
  url.searchParams.set("interval", "1d");

  const response = await fetch(url.toString(), {
    cache: "no-store",
    headers: { "User-Agent": "Mozilla/5.0" },
  });
  if (!response.ok) {
    return null;
  }

  const payload = (await response.json()) as YahooChartQuote;
  return numeric(payload?.chart?.result?.[0]?.meta?.regularMarketPrice);
}

async function normaliseYahooQuote(
  price: number,
  quoteCurrency: string | undefined,
  fallbackCurrency: string,
) {
  const rawCurrency = quoteCurrency ?? fallbackCurrency;
  const normalisedCurrency = rawCurrency.toUpperCase();

  if (rawCurrency === "GBp" || normalisedCurrency === "GBX") {
    return { currency: "GBP", price: price / 100 };
  }

  if (normalisedCurrency === fallbackCurrency.toUpperCase()) {
    return { currency: fallbackCurrency, price };
  }

  const fxRate = await fetchYahooFxRate(normalisedCurrency, fallbackCurrency);
  if (fxRate === null) {
    return { currency: normalisedCurrency, price };
  }

  return {
    currency: fallbackCurrency,
    price: price * fxRate,
  };
}

async function fetchYahooPrice(symbol: string, fallbackCurrency: string) {
  const url = new URL(
    `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(
      symbol,
    )}`,
  );
  url.searchParams.set("range", "1d");
  url.searchParams.set("interval", "1d");

  const response = await fetch(url.toString(), {
    cache: "no-store",
    headers: { "User-Agent": "Mozilla/5.0" },
  });
  if (!response.ok) {
    return null;
  }

  const payload = (await response.json()) as YahooChartQuote;
  const quote = payload?.chart?.result?.[0]?.meta;
  const price = numeric(quote?.regularMarketPrice);
  const normalised =
    price === null
      ? null
      : await normaliseYahooQuote(price, quote?.currency, fallbackCurrency);

  return normalised === null
    ? null
    : ({
        currency: normalised.currency,
        price: normalised.price,
        provider: "yahoo",
        symbol: quote?.symbol ?? symbol,
      } satisfies MarketDataResult);
}

export async function fetchLatestMarketPrice(
  ticker: string,
  exchange: string | null,
  currency = "GBP",
) {
  for (const symbol of marketLookupSymbols(ticker, exchange)) {
    const preferYahoo =
      isLondonSymbol(symbol) ||
      ["AMUNDI_PRIME_ACWI", "WEBN", "WEBG"].includes(normaliseTicker(ticker));

    if (preferYahoo) {
      const yahooPrice = await fetchYahooPrice(symbol, currency);
      if (yahooPrice) {
        return yahooPrice;
      }
    }

    const fmpPrice = await fetchFmpPrice(symbol, currency);
    if (fmpPrice) {
      return fmpPrice;
    }

    const alphaPrice = await fetchAlphaVantagePrice(symbol, currency);
    if (alphaPrice) {
      return alphaPrice;
    }

    if (!preferYahoo) {
      const yahooPrice = await fetchYahooPrice(symbol, currency);
      if (yahooPrice) {
        return yahooPrice;
      }
    }
  }

  return null;
}

export function hasMarketDataProvider() {
  // Yahoo Finance chart quotes are used as a no-key fallback for simple ETF
  // pricing, especially London-listed holdings that are not covered by free
  // FMP or Alpha Vantage plans.
  return true;
}
