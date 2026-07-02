"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { isPriceRefreshDay, priceRefreshWindowId } from "@/lib/price-refresh";

export function PortfolioPriceRefresher() {
  const router = useRouter();

  useEffect(() => {
    if (!isPriceRefreshDay()) {
      return;
    }

    const refreshWindow = priceRefreshWindowId();
    const key = `zach-os-portfolio-refresh-${refreshWindow}`;

    if (sessionStorage.getItem(key)) {
      return;
    }

    sessionStorage.setItem(key, "pending");

    fetch("/api/portfolio/refresh-prices", { method: "POST" })
      .then((response) => response.json())
      .then((payload: { pricesUpdated?: number }) => {
        sessionStorage.setItem(key, "done");
        if ((payload.pricesUpdated ?? 0) > 0) {
          router.refresh();
        }
      })
      .catch(() => {
        sessionStorage.removeItem(key);
      });
  }, [router]);

  return null;
}

export function PortfolioRefreshButton() {
  const router = useRouter();
  const [status, setStatus] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  async function refresh() {
    setRefreshing(true);
    setStatus("");

    try {
      const response = await fetch("/api/portfolio/refresh-prices?force=1", {
        method: "POST",
      });
      const payload = (await response.json()) as {
        errors?: string[];
        error?: string;
        hasProvider?: boolean;
        priceWarnings?: string[];
        pricesUpdated?: number;
        refreshWindowId?: string;
        skippedTickers?: string[];
        tickersChecked?: number;
        unavailableTickers?: string[];
      };

      if (!response.ok) {
        throw new Error(payload.error || "Could not refresh prices.");
      }

      const unavailable = payload.unavailableTickers ?? [];
      const providerErrors = payload.errors ?? [];
      const priceWarnings = payload.priceWarnings ?? [];
      const skippedTickers = payload.skippedTickers ?? [];
      const baseStatus = payload.hasProvider
        ? `Checked ${payload.tickersChecked ?? 0} tickers for the ${
            payload.refreshWindowId ?? "current"
          } price window, updated ${payload.pricesUpdated ?? 0} prices.`
        : "No market data provider is available. Existing/manual prices were kept.";

      setStatus(
        [
          baseStatus,
          unavailable.length
            ? `No live quote found for ${unavailable.join(", ")}.`
            : "",
          skippedTickers.length
            ? `Skipped protected prices for ${skippedTickers.join(", ")}.`
            : "",
          providerErrors.length
            ? `Provider error: ${providerErrors.slice(0, 2).join("; ")}`
            : "",
          priceWarnings.length
            ? `Price guard: ${priceWarnings.slice(0, 2).join("; ")}`
            : "",
        ]
          .filter(Boolean)
          .join(" "),
      );
      router.refresh();
    } catch (error) {
      setStatus(
        error instanceof Error ? error.message : "Could not refresh prices.",
      );
    } finally {
      setRefreshing(false);
    }
  }

  return (
    <div className="flex flex-col items-start gap-2">
      <button
        className="h-10 rounded bg-cyan-200 px-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100 disabled:cursor-not-allowed disabled:opacity-60"
        disabled={refreshing}
        onClick={refresh}
        type="button"
      >
        {refreshing ? "Refreshing..." : "Refresh prices"}
      </button>
      {status && <p className="text-xs leading-5 text-zinc-500">{status}</p>}
    </div>
  );
}
