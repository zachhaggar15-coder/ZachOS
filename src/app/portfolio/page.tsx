import {
  savePortfolioAccount,
  savePortfolioHolding,
  seedDefaultPortfolio,
} from "@/app/actions";
import { AuthPanel } from "@/components/auth-panel";
import {
  PortfolioPriceRefresher,
  PortfolioRefreshButton,
} from "@/components/portfolio-price-refresher";
import {
  ZachButtonLink,
  ZachDatabaseSetupNotice,
  ZachNotice,
  ZachPageShell,
  ZachSetupRequired,
} from "@/components/zach-shell";
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

const cardClass = "rounded-md border border-[#2c2824]/[0.13] bg-[#fffaf2] p-5";
const inputClass =
  "h-10 rounded-md border border-[#d2c8b8] bg-white px-3 text-sm text-[#2c2824] outline-none transition placeholder:text-[#9a8d7a] focus:border-[#bb5d3a]/70 focus:ring-2 focus:ring-[#bb5d3a]/10";

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
    <article className="rounded-md border border-[#2c2824]/[0.1] bg-[#f9f4ec] p-4">
      <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9a7d5f]">
        {label}
      </p>
      <p className="zach-display mt-3 text-3xl font-medium tracking-tight text-[#111820]">
        {value}
      </p>
      {meta && <p className="mt-1 text-xs text-[#8c8273]">{meta}</p>}
    </article>
  );
}

function SectionHeader({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div>
      <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
        {kicker}
      </p>
      <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
        {title}
      </h2>
    </div>
  );
}

function SetupRequired() {
  return <ZachSetupRequired title="Connect Supabase to manage the portfolio" />;
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
        <label className="grid gap-1.5 text-sm text-[#3a342c]">
          Name
          <input className={inputClass} name="name" placeholder="Stocks & Shares ISA" />
        </label>
        <label className="grid gap-1.5 text-sm text-[#3a342c]">
          Type
          <AccountTypeSelect />
        </label>
        <label className="grid gap-1.5 text-sm text-[#3a342c]">
          Provider
          <input className={inputClass} name="provider" placeholder="Trading212" />
        </label>
        <button
          className="h-10 self-end rounded-md bg-[#bb5d3a] px-4 text-sm font-semibold text-[#f9f4ec] transition hover:bg-[#a94f31]"
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
        <label className="grid gap-1.5 text-sm text-[#3a342c]">
          Account
          <AccountSelect accounts={accounts} />
        </label>
        <label className="grid gap-1.5 text-sm text-[#3a342c]">
          Ticker
          <input className={inputClass} name="ticker" placeholder="VUAG" />
        </label>
        <label className="grid gap-1.5 text-sm text-[#3a342c] xl:col-span-2">
          Fund name
          <input className={inputClass} name="fund_name" placeholder="Fund or ETF name" />
        </label>
        <label className="grid gap-1.5 text-sm text-[#3a342c]">
          Exchange
          <input className={inputClass} name="exchange" placeholder="LSE" />
        </label>
        <label className="grid gap-1.5 text-sm text-[#3a342c]">
          Units
          <input className={inputClass} min="0" name="units" step="0.0001" type="number" />
        </label>
        <label className="grid gap-1.5 text-sm text-[#3a342c]">
          Currency
          <input className={inputClass} defaultValue="GBP" name="currency" />
        </label>
        <label className="grid gap-1.5 text-sm text-[#3a342c]">
          Manual price
          <input className={inputClass} min="0" name="latest_price" step="0.0001" type="number" />
        </label>
        <label className="flex items-center gap-2 self-end text-sm text-[#3a342c]">
          <input
            className="h-4 w-4 accent-[#bb5d3a]"
            defaultChecked
            name="auto_price_updates"
            type="checkbox"
          />
          Auto price
        </label>
        <button
          className="h-10 self-end rounded-md bg-[#bb5d3a] px-4 text-sm font-semibold text-[#f9f4ec] transition hover:bg-[#a94f31]"
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
            className="grid gap-3 rounded-md border border-[#2c2824]/[0.1] bg-[#f9f4ec] p-3 md:grid-cols-4"
            key={account.id}
          >
            <input name="id" type="hidden" value={account.id} />
            <label className="grid gap-1.5 text-sm text-[#3a342c]">
              Name
              <input className={inputClass} defaultValue={account.name} name="name" />
            </label>
            <label className="grid gap-1.5 text-sm text-[#3a342c]">
              Type
              <AccountTypeSelect defaultValue={account.type} />
            </label>
            <label className="grid gap-1.5 text-sm text-[#3a342c]">
              Provider
              <input
                className={inputClass}
                defaultValue={account.provider ?? ""}
                name="provider"
              />
            </label>
            <button
              className="h-10 self-end rounded-md border border-[#d2c8b8] bg-[#fffaf2] px-4 text-sm font-semibold text-[#2c2824] transition hover:border-[#bb5d3a]/40"
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
                className="grid gap-3 rounded-md border border-[#2c2824]/[0.1] bg-[#f9f4ec] p-3 lg:grid-cols-10"
                key={holding.id}
              >
                <input name="id" type="hidden" value={holding.id} />
                <label className="grid gap-1.5 text-sm text-[#3a342c] lg:col-span-2">
                  Account
                  <AccountSelect accounts={accounts} defaultValue={holding.account_id} />
                </label>
                <label className="grid gap-1.5 text-sm text-[#3a342c]">
                  Ticker
                  <input
                    className={inputClass}
                    defaultValue={holding.ticker ?? ""}
                    name="ticker"
                  />
                </label>
                <label className="grid gap-1.5 text-sm text-[#3a342c] lg:col-span-2">
                  Fund
                  <input
                    className={inputClass}
                    defaultValue={holding.fund_name ?? ""}
                    name="fund_name"
                  />
                </label>
                <label className="grid gap-1.5 text-sm text-[#3a342c]">
                  Exchange
                  <input
                    className={inputClass}
                    defaultValue={holding.exchange ?? ""}
                    name="exchange"
                  />
                </label>
                <label className="grid gap-1.5 text-sm text-[#3a342c]">
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
                <label className="grid gap-1.5 text-sm text-[#3a342c]">
                  Currency
                  <input
                    className={inputClass}
                    defaultValue={holding.currency}
                    name="currency"
                  />
                </label>
                <label className="grid gap-1.5 text-sm text-[#3a342c]">
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
                <div className="grid gap-2 text-xs text-[#8c8273]">
                  <label className="flex items-center gap-2 text-sm text-[#3a342c]">
                    <input
                      className="h-4 w-4 accent-[#bb5d3a]"
                      defaultChecked={holding.auto_price_updates}
                      name="auto_price_updates"
                      type="checkbox"
                    />
                    Auto
                  </label>
                  <span>{price?.updated_at?.slice(0, 10) ?? "No price"}</span>
                </div>
                <button
                  className="h-10 self-end rounded-md border border-[#d2c8b8] bg-[#fffaf2] px-4 text-sm font-semibold text-[#2c2824] transition hover:border-[#bb5d3a]/40"
                  type="submit"
                >
                  Save
                </button>
              </form>
            );
          })
        ) : (
          <div className="rounded-md border border-dashed border-[#2c2824]/[0.18] p-5 text-sm text-[#8c8273]">
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
    <ZachPageShell
      active="portfolio"
      actions={
        <>
          <ZachButtonLink href="/manage">Update data</ZachButtonLink>
          <ZachButtonLink href="/running">Running</ZachButtonLink>
        </>
      }
      subtitle="Track ISA and LISA holdings, refresh market prices on Mondays and Thursdays, and keep invested value visible inside Zach OS."
      title="Portfolio"
      userEmail={user.email}
    >
      <PortfolioPriceRefresher />

        {(params.error || params.message || dataError) && (
          <ZachNotice tone={params.error || dataError ? "error" : "success"}>
            {params.error ||
              (dataError ? friendlyDatabaseError(dataError) : params.message)}
          </ZachNotice>
        )}

        {databaseSetupIssue ? (
          <ZachDatabaseSetupNotice issue={databaseSetupIssue} />
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
              <article className="rounded-md border border-[#2c2824]/[0.1] bg-[#f9f4ec] p-4">
                <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9a7d5f]">
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
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-[#71685c]">
                    Adds Trading212 ISA holdings for WEXU and VUAG, plus the
                    OneFamily Lifetime ISA fund. Safe to rerun; matching
                    holdings are updated.
                  </p>
                </div>
                <form action={seedDefaultPortfolio}>
                  <button
                    className="h-10 rounded-md bg-[#bb5d3a] px-4 text-sm font-semibold text-[#f9f4ec] transition hover:bg-[#a94f31]"
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
              <section className="rounded-md border border-dashed border-[#2c2824]/[0.18] bg-[#fffaf2] p-6 text-sm text-[#8c8273]">
                No portfolio accounts yet. Seed the defaults to get started, or
                add an account manually below.
              </section>
            )}

            <AddAccountForm />
          </>
        )}
    </ZachPageShell>
  );
}
