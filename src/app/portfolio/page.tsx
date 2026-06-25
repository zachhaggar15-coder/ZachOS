import Link from "next/link";

import {
  savePortfolioAccount,
  savePortfolioHolding,
  seedDefaultPortfolio,
} from "@/app/actions";
import { AuthPanel } from "@/components/auth-panel";
import { DatabaseSetupNotice } from "@/components/database-setup-notice";
import {
  PortfolioPriceRefresher,
  PortfolioRefreshButton,
} from "@/components/portfolio-price-refresher";
import {
  friendlyDatabaseError,
  getDatabaseSetupIssue,
} from "@/lib/database-setup";
import { sortByDateAscending } from "@/lib/data-shaping";
import {
  calculatePortfolioSummary,
  marketPriceKey,
  type PortfolioAccountWithHoldings,
} from "@/lib/portfolio";
import { getSupabaseConfig } from "@/lib/supabase/config";
import type {
  MarketPrice,
  PortfolioAccount,
  PortfolioHolding,
} from "@/lib/supabase/database.types";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

type PortfolioPageProps = {
  searchParams: Promise<{
    error?: string;
    message?: string;
  }>;
};

const cardClass = "rounded border border-white/10 bg-white/[0.035] p-5";
const inputClass =
  "h-10 rounded border border-white/10 bg-black/20 px-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-cyan-300/70 focus:bg-white/[0.06]";

const currencyFormatter = new Intl.NumberFormat("en-GB", {
  currency: "GBP",
  maximumFractionDigits: 0,
  style: "currency",
});

function formatCurrency(value: number | null | undefined) {
  return typeof value === "number" && Number.isFinite(value)
    ? currencyFormatter.format(value)
    : "--";
}

function formatNumber(value: number | null | undefined) {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return "";
  }

  return Number.isInteger(value) ? `${value}` : value.toFixed(4);
}

function MetricCard({
  label,
  meta,
  value,
}: {
  label: string;
  meta?: string;
  value: string;
}) {
  return (
    <article className="rounded border border-white/10 bg-black/20 p-4">
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-zinc-500">
        {label}
      </p>
      <p className="mt-3 text-2xl font-semibold tracking-tight text-white">
        {value}
      </p>
      {meta && <p className="mt-1 text-xs text-zinc-500">{meta}</p>}
    </article>
  );
}

function SectionHeader({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div>
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-cyan-200/70">
        {kicker}
      </p>
      <h2 className="mt-1 text-lg font-semibold text-white">{title}</h2>
    </div>
  );
}

function SetupRequired() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#07090d] px-4 text-zinc-100">
      <section className="w-full max-w-2xl rounded border border-white/10 bg-white/[0.035] p-8">
        <p className="font-mono text-xs uppercase tracking-[0.32em] text-cyan-200/80">
          Setup required
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white">
          Connect Supabase to manage the portfolio
        </h1>
        <p className="mt-3 text-sm leading-6 text-zinc-400">
          Add your Supabase environment variables and run the SQL schema before
          using portfolio tracking.
        </p>
      </section>
    </main>
  );
}

function AccountSelect({
  accounts,
  defaultValue,
}: {
  accounts: PortfolioAccount[];
  defaultValue?: string;
}) {
  return (
    <select className={inputClass} defaultValue={defaultValue} name="account_id">
      {accounts.map((account) => (
        <option key={account.id} value={account.id}>
          {account.name} ({account.type})
        </option>
      ))}
    </select>
  );
}

function AccountTypeSelect({ defaultValue = "ISA" }: { defaultValue?: string }) {
  return (
    <select className={inputClass} defaultValue={defaultValue} name="type">
      <option value="ISA">ISA</option>
      <option value="LISA">LISA</option>
      <option value="Cash">Cash</option>
      <option value="Pension">Pension</option>
    </select>
  );
}

function AddAccountForm() {
  return (
    <form action={savePortfolioAccount} className={cardClass}>
      <SectionHeader kicker="Accounts" title="Add account" />
      <div className="mt-4 grid gap-3 md:grid-cols-4">
        <label className="grid gap-1.5 text-sm text-zinc-300">
          Name
          <input className={inputClass} name="name" placeholder="Stocks & Shares ISA" />
        </label>
        <label className="grid gap-1.5 text-sm text-zinc-300">
          Type
          <AccountTypeSelect />
        </label>
        <label className="grid gap-1.5 text-sm text-zinc-300">
          Provider
          <input className={inputClass} name="provider" placeholder="Trading212" />
        </label>
        <button
          className="h-10 self-end rounded bg-cyan-200 px-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
          type="submit"
        >
          Add account
        </button>
      </div>
    </form>
  );
}

function AddHoldingForm({ accounts }: { accounts: PortfolioAccount[] }) {
  return (
    <form action={savePortfolioHolding} className={cardClass}>
      <SectionHeader kicker="Holdings" title="Add holding" />
      <div className="mt-4 grid gap-3 md:grid-cols-3 xl:grid-cols-7">
        <label className="grid gap-1.5 text-sm text-zinc-300">
          Account
          <AccountSelect accounts={accounts} />
        </label>
        <label className="grid gap-1.5 text-sm text-zinc-300">
          Ticker
          <input className={inputClass} name="ticker" placeholder="VUAG" />
        </label>
        <label className="grid gap-1.5 text-sm text-zinc-300 xl:col-span-2">
          Fund name
          <input className={inputClass} name="fund_name" placeholder="Fund or ETF name" />
        </label>
        <label className="grid gap-1.5 text-sm text-zinc-300">
          Exchange
          <input className={inputClass} name="exchange" placeholder="LSE" />
        </label>
        <label className="grid gap-1.5 text-sm text-zinc-300">
          Units
          <input className={inputClass} min="0" name="units" step="0.0001" type="number" />
        </label>
        <label className="grid gap-1.5 text-sm text-zinc-300">
          Currency
          <input className={inputClass} defaultValue="GBP" name="currency" />
        </label>
        <label className="grid gap-1.5 text-sm text-zinc-300">
          Manual price
          <input className={inputClass} min="0" name="latest_price" step="0.0001" type="number" />
        </label>
        <label className="flex items-center gap-2 self-end text-sm text-zinc-300">
          <input
            className="h-4 w-4 accent-cyan-200"
            defaultChecked
            name="auto_price_updates"
            type="checkbox"
          />
          Auto price
        </label>
        <button
          className="h-10 self-end rounded bg-cyan-200 px-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
          type="submit"
        >
          Add holding
        </button>
      </div>
    </form>
  );
}

function EditAccounts({ accounts }: { accounts: PortfolioAccount[] }) {
  return (
    <section className={cardClass}>
      <SectionHeader kicker="Accounts" title="Edit accounts" />
      <div className="mt-4 grid gap-3">
        {accounts.map((account) => (
          <form
            action={savePortfolioAccount}
            className="grid gap-3 rounded border border-white/10 bg-black/15 p-3 md:grid-cols-4"
            key={account.id}
          >
            <input name="id" type="hidden" value={account.id} />
            <label className="grid gap-1.5 text-sm text-zinc-300">
              Name
              <input className={inputClass} defaultValue={account.name} name="name" />
            </label>
            <label className="grid gap-1.5 text-sm text-zinc-300">
              Type
              <AccountTypeSelect defaultValue={account.type} />
            </label>
            <label className="grid gap-1.5 text-sm text-zinc-300">
              Provider
              <input
                className={inputClass}
                defaultValue={account.provider ?? ""}
                name="provider"
              />
            </label>
            <button
              className="h-10 self-end rounded border border-white/10 bg-white/[0.04] px-4 text-sm font-semibold text-zinc-100 transition hover:border-cyan-200/30 hover:bg-cyan-300/10"
              type="submit"
            >
              Save
            </button>
          </form>
        ))}
      </div>
    </section>
  );
}

function HoldingsTable({
  accounts,
  holdings,
  prices,
}: {
  accounts: PortfolioAccount[];
  holdings: PortfolioHolding[];
  prices: MarketPrice[];
}) {
  const pricesByTicker = new Map(
    prices.map((price) => [marketPriceKey(price.ticker), price]),
  );

  return (
    <section className={cardClass}>
      <SectionHeader kicker="Holdings" title="Edit holdings" />
      <div className="mt-4 grid gap-3">
        {holdings.length ? (
          holdings.map((holding) => {
            const price = holding.ticker
              ? pricesByTicker.get(marketPriceKey(holding.ticker))
              : null;

            return (
              <form
                action={savePortfolioHolding}
                className="grid gap-3 rounded border border-white/10 bg-black/15 p-3 lg:grid-cols-10"
                key={holding.id}
              >
                <input name="id" type="hidden" value={holding.id} />
                <label className="grid gap-1.5 text-sm text-zinc-300 lg:col-span-2">
                  Account
                  <AccountSelect accounts={accounts} defaultValue={holding.account_id} />
                </label>
                <label className="grid gap-1.5 text-sm text-zinc-300">
                  Ticker
                  <input
                    className={inputClass}
                    defaultValue={holding.ticker ?? ""}
                    name="ticker"
                  />
                </label>
                <label className="grid gap-1.5 text-sm text-zinc-300 lg:col-span-2">
                  Fund
                  <input
                    className={inputClass}
                    defaultValue={holding.fund_name ?? ""}
                    name="fund_name"
                  />
                </label>
                <label className="grid gap-1.5 text-sm text-zinc-300">
                  Exchange
                  <input
                    className={inputClass}
                    defaultValue={holding.exchange ?? ""}
                    name="exchange"
                  />
                </label>
                <label className="grid gap-1.5 text-sm text-zinc-300">
                  Units
                  <input
                    className={inputClass}
                    defaultValue={formatNumber(holding.units)}
                    min="0"
                    name="units"
                    step="0.0001"
                    type="number"
                  />
                </label>
                <label className="grid gap-1.5 text-sm text-zinc-300">
                  Currency
                  <input
                    className={inputClass}
                    defaultValue={holding.currency}
                    name="currency"
                  />
                </label>
                <label className="grid gap-1.5 text-sm text-zinc-300">
                  Price
                  <input
                    className={inputClass}
                    defaultValue={formatNumber(price?.price)}
                    min="0"
                    name="latest_price"
                    step="0.0001"
                    type="number"
                  />
                </label>
                <div className="grid gap-2 text-xs text-zinc-500">
                  <label className="flex items-center gap-2 text-sm text-zinc-300">
                    <input
                      className="h-4 w-4 accent-cyan-200"
                      defaultChecked={holding.auto_price_updates}
                      name="auto_price_updates"
                      type="checkbox"
                    />
                    Auto
                  </label>
                  <span>{price?.updated_at?.slice(0, 10) ?? "No price"}</span>
                </div>
                <button
                  className="h-10 self-end rounded border border-white/10 bg-white/[0.04] px-4 text-sm font-semibold text-zinc-100 transition hover:border-cyan-200/30 hover:bg-cyan-300/10"
                  type="submit"
                >
                  Save
                </button>
              </form>
            );
          })
        ) : (
          <div className="rounded border border-dashed border-white/15 p-5 text-sm text-zinc-500">
            No holdings yet. Seed the defaults or add a holding below.
          </div>
        )}
      </div>
    </section>
  );
}

export default async function PortfolioPage({ searchParams }: PortfolioPageProps) {
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

  const [accountsResult, pricesResult, snapshotsResult] = await Promise.all([
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
    accountsResult.error,
    pricesResult.error,
    snapshotsResult.error,
  ];
  const databaseSetupIssue = getDatabaseSetupIssue(queryErrors);
  const dataError = databaseSetupIssue === null ? queryErrors.find(Boolean) : null;
  const accounts = ((accountsResult.data ?? []) as PortfolioAccountWithHoldings[])
    .map((account) => ({
      ...account,
      holdings: [...(account.holdings ?? [])].sort((a, b) =>
        (a.ticker ?? a.fund_name ?? "").localeCompare(b.ticker ?? b.fund_name ?? ""),
      ),
    }));
  const flatAccounts = accounts.map((account) => ({
    created_at: account.created_at,
    id: account.id,
    name: account.name,
    provider: account.provider,
    type: account.type,
    user_id: account.user_id,
  }));
  const holdings = accounts.flatMap((account) => account.holdings);
  const prices = pricesResult.data ?? [];
  const summary = calculatePortfolioSummary(
    accounts,
    prices,
    sortByDateAscending(snapshotsResult.data ?? []),
  );

  return (
    <main className="min-h-screen bg-[#07090d] text-zinc-100">
      <PortfolioPriceRefresher />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.13),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(16,185,129,0.1),transparent_26%)]" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-4 border-b border-white/10 pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-cyan-200/80">
              Portfolio module
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white">
              Investments
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
              Track ISA and LISA holdings, refresh market prices once per day,
              and keep total invested visible inside Zach OS.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              className="inline-flex h-10 items-center rounded border border-cyan-200/20 bg-cyan-200/10 px-4 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-200/15"
              href="/"
            >
              Dashboard
            </Link>
            <Link
              className="inline-flex h-10 items-center rounded border border-white/10 bg-white/[0.04] px-4 text-sm font-semibold text-zinc-100 transition hover:border-cyan-200/30 hover:bg-cyan-300/10"
              href="/manage"
            >
              Manage
            </Link>
          </div>
        </header>

        {(params.error || params.message || dataError) && (
          <div
            className={`rounded border px-4 py-3 text-sm ${
              params.error || dataError
                ? "border-rose-300/25 bg-rose-400/10 text-rose-100"
                : "border-emerald-300/25 bg-emerald-400/10 text-emerald-100"
            }`}
          >
            {params.error ||
              (dataError ? friendlyDatabaseError(dataError) : params.message)}
          </div>
        )}

        {databaseSetupIssue ? (
          <DatabaseSetupNotice issue={databaseSetupIssue} />
        ) : (
          <>
            <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
              <MetricCard
                label="Total invested"
                meta={`${summary.pricedHoldings}/${summary.holdingValues.length} holdings priced`}
                value={formatCurrency(summary.totalInvested)}
              />
              <MetricCard label="ISA value" value={formatCurrency(summary.isaValue)} />
              <MetricCard label="LISA value" value={formatCurrency(summary.lisaValue)} />
              <MetricCard
                label="Weekly gain/loss"
                meta="Uses portfolio snapshots"
                value={
                  summary.weeklyGainLoss === null
                    ? "--"
                    : formatCurrency(summary.weeklyGainLoss)
                }
              />
              <article className="rounded border border-cyan-200/20 bg-cyan-200/[0.05] p-4">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-cyan-200/70">
                  Pricing
                </p>
                <div className="mt-3">
                  <PortfolioRefreshButton />
                </div>
              </article>
            </section>

            <section className={cardClass}>
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <SectionHeader kicker="Seed data" title="Default holdings" />
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">
                    Adds Trading212 ISA holdings for WEXU and VUAG, plus the
                    OneFamily Lifetime ISA fund. Safe to rerun; matching
                    holdings are updated.
                  </p>
                </div>
                <form action={seedDefaultPortfolio}>
                  <button
                    className="h-10 rounded bg-cyan-200 px-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
                    type="submit"
                  >
                    Seed default portfolio
                  </button>
                </form>
              </div>
            </section>

            {flatAccounts.length ? (
              <>
                <HoldingsTable
                  accounts={flatAccounts}
                  holdings={holdings}
                  prices={prices}
                />
                <EditAccounts accounts={flatAccounts} />
                <AddHoldingForm accounts={flatAccounts} />
              </>
            ) : (
              <section className="rounded border border-dashed border-white/15 p-6 text-sm text-zinc-500">
                No portfolio accounts yet. Seed the defaults to get started, or
                add an account manually below.
              </section>
            )}

            <AddAccountForm />
          </>
        )}
      </div>
    </main>
  );
}
