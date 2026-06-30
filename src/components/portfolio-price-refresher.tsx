"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function PortfolioPriceRefresher() {
  const router = useRouter();

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    const key = `zach-os-portfolio-refresh-${today}`;

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
      const response = await fetch("/api/portfolio/refresh-prices", {
        method: "POST",
      });
      const payload = (await response.json()) as {
        errors?: string[];
        error?: string;
        hasProvider?: boolean;
        pricesUpdated?: number;
        tickersChecked?: number;
        unavailableTickers?: string[];
      };

      if (!response.ok) {
        throw new Error(payload.error || "Could not refresh prices.");
      }

      const unavailable = payload.unavailableTickers ?? [];
      const providerErrors = payload.errors ?? [];
      const baseStatus = payload.hasProvider
        ? `Checked ${payload.tickersChecked ?? 0} tickers, updated ${
            payload.pricesUpdated ?? 0
          } stale prices.`
        : "No market data provider is available. Existing/manual prices were kept.";

      setStatus(
        [
          baseStatus,
          unavailable.length
            ? `No live quote found for ${unavailable.join(", ")}.`
            : "",
          providerErrors.length
            ? `Provider error: ${providerErrors.slice(0, 2).join("; ")}`
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
