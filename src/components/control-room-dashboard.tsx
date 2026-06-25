import Link from "next/link";

import { saveQuickDailyEntry, signOut } from "@/app/actions";
import { DatabaseSetupNotice } from "@/components/database-setup-notice";
import { PortfolioPriceRefresher } from "@/components/portfolio-price-refresher";
import { buildOperatingRecommendation } from "@/lib/ai-insights";
import {
  calculateAnalytics,
  calculateConsultantReadiness,
} from "@/lib/analytics";
import type { DatabaseSetupIssue } from "@/lib/database-setup";
import {
  calculatePortfolioSummary,
  type PortfolioAccountWithHoldings,
} from "@/lib/portfolio";
import {
  calculateAchievements,
  calculateCharacterAttributes,
  calculateLevelProgress,
  calculateQuestProgress,
  nextQuestAction,
} from "@/lib/scoring";
import type {
  Activity,
  ConsultantReadinessLog,
  DailyLog,
  FinanceSnapshot,
  FitnessMetric,
  MarketPrice,
  NetWorthSnapshot,
  Quest,
} from "@/lib/supabase/database.types";

type ControlRoomDashboardProps = {
  activities: Activity[];
  consultantLogs: ConsultantReadinessLog[];
  dailyLogs: DailyLog[];
  databaseSetupIssue?: DatabaseSetupIssue | null;
  error?: string;
  financeSnapshots: FinanceSnapshot[];
  fitnessMetrics: FitnessMetric[];
  marketPrices: MarketPrice[];
  message?: string;
  netWorthSnapshots: NetWorthSnapshot[];
  portfolioAccounts: PortfolioAccountWithHoldings[];
  quests: Quest[];
  today: string;
  userEmail?: string;
};

type SparkSeries = {
  area?: boolean;
  color: string;
  max?: number;
  min?: number;
  strokeWidth?: number;
  values: number[];
};

type RitualRow = {
  cells: boolean[];
  name: string;
  pct: number;
};

const ink = "#2c2824";
const accent = "#bb5d3a";
const blue = "#6f7d8c";

const currencyFormatter = new Intl.NumberFormat("en-GB", {
  currency: "GBP",
  maximumFractionDigits: 0,
  style: "currency",
});

function latest<T>(rows: T[]) {
  return rows.length ? rows[rows.length - 1] : null;
}

function numeric(value: number | null | undefined) {
  return typeof value === "number" && Number.isFinite(value) ? value : 0;
}

function finiteNumber(value: number | null | undefined) {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

function formatNumber(
  value: number | null | undefined,
  options: { dash?: string; digits?: number; suffix?: string } = {},
) {
  const dash = options.dash ?? "--";
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return dash;
  }

  const formatted = Number.isInteger(value)
    ? value.toString()
    : value.toFixed(options.digits ?? 1);

  return `${formatted}${options.suffix ?? ""}`;
}

function formatCurrency(value: number | null | undefined) {
  return typeof value === "number" && Number.isFinite(value)
    ? currencyFormatter.format(value)
    : "--";
}

function formatPercent(value: number | null | undefined) {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return "--";
  }

  return `${value > 0 ? "+" : ""}${value.toFixed(2)}%`;
}

function formatHeaderDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    weekday: "long",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00Z`));
}

function toDate(date: string) {
  return new Date(`${date}T12:00:00Z`);
}

function offsetDate(date: string, offset: number) {
  const value = toDate(date);
  value.setUTCDate(value.getUTCDate() + offset);
  return value.toISOString().slice(0, 10);
}

function weekStart(date: string) {
  const value = toDate(date);
  const day = value.getUTCDay() || 7;
  value.setUTCDate(value.getUTCDate() - day + 1);
  return value.toISOString().slice(0, 10);
}

function isRunningActivity(activity: Activity) {
  const type = activity.activity_type?.toLowerCase() ?? "";
  return (
    !type ||
    type.includes("run") ||
    type.includes("jog") ||
    type.includes("treadmill")
  );
}

function runningDistanceBetween(activities: Activity[], start: string, end: string) {
  return activities
    .filter(
      (activity) =>
        isRunningActivity(activity) &&
        activity.date >= start &&
        activity.date <= end,
    )
    .reduce((total, activity) => total + numeric(activity.distance_km), 0);
}

function valuesFromRows<T>(rows: T[], getValue: (row: T) => number | null) {
  return rows
    .map(getValue)
    .filter((value): value is number => typeof value === "number")
    .slice(-14);
}

function latestValue(values: number[]) {
  return values.length ? values[values.length - 1] : null;
}

function trend(values: number[]) {
  if (values.length < 2) {
    return null;
  }

  const last = values[values.length - 1];
  const previous = values[values.length - 2];
  return last >= previous ? "up" : "down";
}

function makeSparkPath(values: number[], min?: number, max?: number) {
  const cleanValues = values.filter(Number.isFinite);
  const usableValues =
    cleanValues.length === 1 ? [cleanValues[0], cleanValues[0]] : cleanValues;

  if (usableValues.length < 2) {
    return null;
  }

  const naturalMin = Math.min(...usableValues);
  const naturalMax = Math.max(...usableValues);
  let resolvedMin = min ?? naturalMin;
  let resolvedMax = max ?? naturalMax;

  if (resolvedMin === resolvedMax) {
    resolvedMin -= 1;
    resolvedMax += 1;
  }

  const width = 100;
  const height = 30;
  const pad = 2;
  const x = (index: number) =>
    pad + (width - pad * 2) * (index / (usableValues.length - 1));
  const y = (value: number) =>
    pad +
    (height - pad * 2) *
      (1 - (value - resolvedMin) / (resolvedMax - resolvedMin));
  const points = usableValues.map((value, index) => [x(index), y(value)]);
  let d = `M ${points[0][0].toFixed(2)} ${points[0][1].toFixed(2)}`;

  for (let index = 0; index < points.length - 1; index += 1) {
    const p0 = points[index - 1] || points[index];
    const p1 = points[index];
    const p2 = points[index + 1];
    const p3 = points[index + 2] || p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;

    d += ` C ${c1x.toFixed(2)} ${c1y.toFixed(2)} ${c2x.toFixed(
      2,
    )} ${c2y.toFixed(2)} ${p2[0].toFixed(2)} ${p2[1].toFixed(2)}`;
  }

  const lastPoint = points[points.length - 1];
  const firstPoint = points[0];

  return {
    area: `${d} L ${lastPoint[0].toFixed(2)} ${height} L ${firstPoint[0].toFixed(
      2,
    )} ${height} Z`,
    d,
  };
}

function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="zach-ui text-[9.5px] font-semibold uppercase leading-none tracking-[0.2em] text-[#9a7d5f]">
      {children}
    </div>
  );
}

function NavButton({
  children,
  href,
  primary = false,
}: {
  children: React.ReactNode;
  href: string;
  primary?: boolean;
}) {
  return (
    <Link
      className={`zach-ui inline-flex h-9 items-center rounded-md border px-3 text-sm font-medium transition ${
        primary
          ? "border-[#bb5d3a] bg-[#bb5d3a] text-[#f9f4ec] hover:bg-[#a94f31]"
          : "border-[#d2c8b8] bg-[#f9f4ec] text-[#2c2824] hover:border-[#b9aa95]"
      }`}
      href={href}
    >
      {children}
    </Link>
  );
}

function SparkPanel({
  children,
  href,
  label,
  series,
  value,
}: {
  children?: React.ReactNode;
  href: string;
  label: string;
  series: SparkSeries[];
  value?: React.ReactNode;
}) {
  const drawable = series
    .map((item) => ({ ...item, path: makeSparkPath(item.values, item.min, item.max) }))
    .filter((item) => item.path);

  return (
    <Link
      className="flex min-h-0 flex-1 flex-col border-b border-[#2c2824]/[0.13] py-3.5 transition hover:bg-[#f3eadf]"
      href={href}
    >
      <div className="flex items-baseline justify-between gap-4">
        <SectionKicker>{label}</SectionKicker>
        {value}
      </div>
      <div className="mt-1.5 flex min-h-0 flex-1 items-end">
        {drawable.length ? (
          <svg
            className="block h-full w-full"
            preserveAspectRatio="none"
            viewBox="0 0 100 30"
          >
            <defs>
              <linearGradient id="netWorthEditorialGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor={accent} stopOpacity="0.16" />
                <stop offset="1" stopColor={accent} stopOpacity="0" />
              </linearGradient>
            </defs>
            {drawable.map((item, index) =>
              item.area ? (
                <path
                  d={item.path?.area}
                  fill="url(#netWorthEditorialGradient)"
                  key={`${item.color}-${index}-area`}
                />
              ) : null,
            )}
            {drawable.map((item, index) => (
              <path
                d={item.path?.d}
                fill="none"
                key={`${item.color}-${index}`}
                stroke={item.color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={item.strokeWidth ?? 1.5}
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </svg>
        ) : (
          <div className="zach-ui flex h-full w-full items-center justify-center text-xs text-[#9a8d7a]">
            No data yet
          </div>
        )}
      </div>
      {children}
    </Link>
  );
}

function VitalRow({
  label,
  sub,
  value,
}: {
  label: string;
  sub: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-[#2c2824]/[0.13] py-3">
      <div>
        <div className="zach-ui text-[15px] font-medium leading-tight text-[#2c2824]">
          {label}
        </div>
        <div className="zach-ui mt-0.5 text-xs leading-none text-[#9a8d7a]">
          {sub}
        </div>
      </div>
      <div className="zach-display text-[28px] font-medium leading-none text-[#0f1720]">
        {value}
      </div>
    </div>
  );
}

function AttributeRow({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between gap-3">
        <span className="zach-ui text-sm font-medium text-[#2c2824]">{label}</span>
        <span className="zach-ui text-sm font-medium text-[#574e44]">{value}</span>
      </div>
      <div className="h-0.5 bg-[#2c2824]/[0.12]">
        <div
          className="h-0.5 bg-[#bb5d3a]"
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        />
      </div>
    </div>
  );
}

function RitualHeatmap({ rows }: { rows: RitualRow[] }) {
  return (
    <div className="mt-2.5 flex min-h-0 flex-col justify-center gap-[5px]">
      {rows.map((row) => (
        <div className="flex items-center gap-2.5" key={row.name}>
          <span className="zach-ui w-[72px] flex-none truncate text-[11px] font-medium leading-none text-[#3a342c]">
            {row.name}
          </span>
          <div className="grid flex-1 grid-cols-[repeat(21,minmax(0,1fr))] gap-[3px]">
            {row.cells.map((on, index) => (
              <span
                className={`h-3 rounded-sm ${on ? "bg-[#bb5d3a]" : "bg-[#2c2824]/[0.08]"}`}
                key={`${row.name}-${index}`}
              />
            ))}
          </div>
          <span className="zach-ui w-[30px] flex-none text-right text-[11px] font-semibold leading-none text-[#bb5d3a]">
            {row.pct}%
          </span>
        </div>
      ))}
    </div>
  );
}

function DailyRitual({
  done,
  name,
  target,
  unit,
  value,
}: {
  done: boolean;
  name: string;
  target?: number;
  unit?: string;
  value?: number;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <span
        className={`flex h-[15px] w-[15px] flex-none items-center justify-center rounded-full text-[10px] font-bold ${
          done
            ? "bg-[#bb5d3a] text-[#f9f4ec]"
            : "border border-[#2c2824]/25"
        }`}
      >
        {done ? "✓" : ""}
      </span>
      <span
        className={`zach-ui flex-1 text-[12.5px] font-medium leading-tight ${
          done && target === undefined
            ? "text-[#9a8d7a] line-through"
            : "text-[#3a342c]"
        }`}
      >
        {name}
      </span>
      {target !== undefined && (
        <>
          <input
            className="zach-ui h-8 w-[54px] rounded-md border border-[#2c2824]/20 bg-white px-2 text-center text-xs font-semibold text-[#3a342c] outline-none"
            readOnly
            type="number"
            value={Math.round(value ?? 0)}
          />
          <span className="zach-ui w-10 text-[11px] font-medium text-[#9a8d7a]">
            / {target}
            {unit}
          </span>
        </>
      )}
    </div>
  );
}

function buildRitualRows(
  today: string,
  activities: Activity[],
  dailyLogs: DailyLog[],
): { adherence: number; rows: RitualRow[] } {
  const dates = Array.from({ length: 21 }, (_, index) =>
    offsetDate(today, index - 20),
  );
  const dailyByDate = new Map(dailyLogs.map((log) => [log.date, log]));
  const activityDates = new Set(activities.map((activity) => activity.date));
  const defs = [
    {
      name: "Train",
      on: (date: string) => activityDates.has(date),
    },
    {
      name: "Deep work",
      on: (date: string) => numeric(dailyByDate.get(date)?.deep_work_hours) > 0,
    },
    {
      name: "French",
      on: (date: string) => numeric(dailyByDate.get(date)?.french_minutes) > 0,
    },
    {
      name: "Read",
      on: (date: string) => numeric(dailyByDate.get(date)?.reading_pages) > 0,
    },
    {
      name: "Ate well",
      on: (date: string) =>
        (dailyByDate.get(date)?.notes ?? "").toLowerCase().includes("ate well"),
    },
    {
      name: "Cold shower",
      on: (date: string) =>
        (dailyByDate.get(date)?.notes ?? "").toLowerCase().includes("cold shower"),
    },
  ];
  let totalDone = 0;
  const rows = defs.map((def) => {
    const cells = dates.map(def.on);
    const done = cells.filter(Boolean).length;
    totalDone += done;

    return {
      cells,
      name: def.name,
      pct: Math.round((done / cells.length) * 100),
    };
  });

  return {
    adherence: Math.round((totalDone / (dates.length * defs.length)) * 100),
    rows,
  };
}

function shortAchievementLabel(label: string) {
  return label
    .replace(" Running ", " ")
    .replace(" Reading Pages", " Pages")
    .replace(" Hours ", "h ")
    .replace(" Minutes", "")
    .replace("Net Worth", "NW")
    .replace("Â£", "£");
}

export function ControlRoomDashboard({
  activities,
  consultantLogs,
  dailyLogs,
  databaseSetupIssue,
  error,
  financeSnapshots,
  fitnessMetrics,
  marketPrices,
  message,
  netWorthSnapshots,
  portfolioAccounts,
  quests,
  today,
  userEmail,
}: ControlRoomDashboardProps) {
  const todayLog = dailyLogs.find((log) => log.date === today) ?? null;
  const currentFitness = latest(fitnessMetrics);
  const currentFinance = latest(financeSnapshots);
  const attributes = calculateCharacterAttributes({
    activities,
    dailyLogs,
    financeSnapshots,
    fitnessMetrics,
  });
  const level = calculateLevelProgress({ activities, dailyLogs, fitnessMetrics });
  const achievements = calculateAchievements({
    activities,
    dailyLogs,
    financeSnapshots,
  });
  const questProgress = calculateQuestProgress(quests);
  const activeQuests = questProgress
    .filter((quest) => (quest.status ?? "active").toLowerCase() === "active")
    .slice(0, 3);
  const operatingRecommendation = buildOperatingRecommendation({
    activities,
    consultantLogs,
    dailyLogs,
    financeSnapshots,
    fitnessMetrics,
  });
  const analytics = calculateAnalytics({ activities, dailyLogs, fitnessMetrics });
  const consultantReadiness = calculateConsultantReadiness({
    consultantLogs,
    dailyLogs,
  });
  const portfolioSummary = calculatePortfolioSummary(
    portfolioAccounts,
    marketPrices,
    netWorthSnapshots,
  );
  const earnedAchievements = achievements.filter((achievement) => achievement.earned);
  const visibleAchievements = achievements.slice(0, 11);
  const weekKm = runningDistanceBetween(activities, weekStart(today), today);
  const moodValues = valuesFromRows(dailyLogs, (row) => finiteNumber(row.mood_score));
  const sleepValues = valuesFromRows(fitnessMetrics, (row) =>
    finiteNumber(row.sleep_score),
  );
  const hrvValues = valuesFromRows(fitnessMetrics, (row) => finiteNumber(row.hrv));
  const netWorthValues = financeSnapshots
    .map((row) => finiteNumber(row.net_worth_gbp))
    .filter((value): value is number => value !== null)
    .slice(-8);
  const netMin =
    netWorthValues.length > 1 ? Math.min(...netWorthValues) * 0.96 : undefined;
  const netMax =
    netWorthValues.length > 1 ? Math.max(...netWorthValues) * 1.04 : undefined;
  const latestMood = latestValue(moodValues);
  const moodTrend = trend(moodValues);
  const { adherence, rows: ritualRows } = buildRitualRows(
    today,
    activities,
    dailyLogs,
  );
  const deepWorkMinutes = Math.round(numeric(todayLog?.deep_work_hours) * 60);
  const frenchMinutes = numeric(todayLog?.french_minutes);
  const readingPages = numeric(todayLog?.reading_pages);
  const todayHasActivity = activities.some((activity) => activity.date === today);
  const todayNotes = (todayLog?.notes ?? "").toLowerCase();
  const habitRows = [
    { done: todayHasActivity, name: "Train - light" },
    {
      done: deepWorkMinutes >= 90,
      name: "Deep work",
      target: 90,
      unit: "m",
      value: deepWorkMinutes,
    },
    {
      done: frenchMinutes >= 30,
      name: "French",
      target: 30,
      unit: "m",
      value: frenchMinutes,
    },
    {
      done: readingPages >= 20,
      name: "Read",
      target: 20,
      unit: "p",
      value: readingPages,
    },
    { done: todayNotes.includes("ate well"), name: "Ate well" },
    { done: todayNotes.includes("cold shower"), name: "Cold shower" },
  ];
  const habitDone = habitRows.filter((row) => row.done).length;
  const investedValue = portfolioSummary.totalInvested || currentFinance?.invested_gbp;

  if (databaseSetupIssue) {
    return (
      <main className="flex h-screen overflow-hidden bg-[#07090d] p-4 text-zinc-100">
        <div className="m-auto w-full max-w-4xl">
          <DatabaseSetupNotice issue={databaseSetupIssue} />
        </div>
      </main>
    );
  }

  return (
    <main className="zach-ui min-h-screen overflow-y-auto bg-[#f9f4ec] text-[#2c2824] lg:h-screen lg:overflow-hidden">
      <PortfolioPriceRefresher />
      <div className="mx-auto flex min-h-screen w-full max-w-[1514px] flex-col px-6 py-7 lg:h-full lg:min-h-0 lg:px-10 lg:py-9">
        <header className="flex shrink-0 flex-col gap-5 border-b border-[#2c2824] pb-5 lg:h-[84px] lg:flex-row lg:items-start lg:justify-between lg:gap-6">
          <div className="min-w-[220px]">
            <div className="text-xs font-semibold uppercase tracking-[0.45em] text-[#9a7d5f]">
              Personal operating system
            </div>
            <h1 className="zach-display mt-1 text-[42px] font-medium leading-none tracking-[-0.02em] text-[#111820]">
              Zach OS
            </h1>
          </div>

          <div className="flex flex-1 flex-wrap items-start justify-between gap-4">
            <div className="rounded-full bg-[#1f2422] p-1 shadow-[0_16px_34px_rgba(44,40,36,0.15)]">
              <button className="h-8 rounded-full px-5 text-sm font-semibold text-[#d3c3ad]">
                Command
              </button>
              <button className="h-8 rounded-full bg-[#cf6942] px-5 text-sm font-semibold text-white">
                Editorial
              </button>
            </div>

            <div className="text-center">
              <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9a7d5f]">
                Level {level.level} · {level.totalXp.toLocaleString("en-GB")} XP
              </div>
              <div className="zach-display mt-1 text-[18px] leading-none text-[#5a3228]">
                {formatHeaderDate(today)}
              </div>
            </div>

            <nav className="flex flex-wrap items-center justify-end gap-2">
              <details className="group relative">
                <summary className="zach-ui inline-flex h-9 cursor-pointer list-none items-center rounded-md border border-[#bb5d3a] bg-[#bb5d3a] px-4 text-sm font-semibold text-[#f9f4ec] transition hover:bg-[#a94f31] [&::-webkit-details-marker]:hidden">
                  + Quick add
                  <span className="ml-2 text-[10px]">▼</span>
                </summary>
                <form
                  action={saveQuickDailyEntry}
                  className="absolute right-0 z-20 mt-2 grid w-64 gap-2 rounded-lg border border-[#d2c8b8] bg-[#fffaf2] p-3 shadow-xl"
                >
                  <input name="date" type="hidden" value={today} />
                  <input
                    className="h-9 rounded border border-[#d2c8b8] bg-white px-2 text-sm"
                    max={10}
                    min={1}
                    name="mood_score"
                    placeholder="Mood"
                    type="number"
                  />
                  <input
                    className="h-9 rounded border border-[#d2c8b8] bg-white px-2 text-sm"
                    min={0}
                    name="sleep_score"
                    placeholder="Sleep score"
                    step="0.1"
                    type="number"
                  />
                  <input
                    className="h-9 rounded border border-[#d2c8b8] bg-white px-2 text-sm"
                    min={0}
                    name="deep_work_hours"
                    placeholder="Deep work hours"
                    step="0.25"
                    type="number"
                  />
                  <button
                    className="h-9 rounded bg-[#1f2422] text-sm font-semibold text-[#f9f4ec]"
                    type="submit"
                  >
                    Save
                  </button>
                </form>
              </details>
              <NavButton href="/manage">Update data</NavButton>
              <NavButton href="/portfolio">Portfolio</NavButton>
              <NavButton href="/integrations">Integrations</NavButton>
              <form action={signOut}>
                <button
                  className="zach-ui h-9 rounded-md border border-[#241f1a] bg-[#241f1a] px-4 text-sm font-semibold text-[#f9f4ec] transition hover:bg-[#3a342c]"
                  type="submit"
                >
                  Log out
                </button>
              </form>
            </nav>
          </div>
        </header>

        {(error || message) && (
          <div
            className={`mt-3 shrink-0 rounded border px-3 py-2 text-sm ${
              error
                ? "border-[#bb5d3a]/30 bg-[#bb5d3a]/10 text-[#8d3f26]"
                : "border-[#7a8c5a]/30 bg-[#7a8c5a]/10 text-[#54683b]"
            }`}
          >
            {error || message}
          </div>
        )}

        <section className="grid min-h-0 flex-1 grid-cols-1 gap-7 pt-6 lg:grid-cols-[360px_minmax(0,1fr)_344px] lg:gap-0">
          <aside className="min-h-0 pr-8 lg:border-r lg:border-[#2c2824]/[0.13]">
            <SectionKicker>Today</SectionKicker>
            <div className="mt-4">
              <VitalRow
                label="Mood"
                sub={todayLog ? "logged today" : "no log today"}
                value={formatNumber(todayLog?.mood_score, { dash: "—" })}
              />
              <VitalRow
                label="Deep work"
                sub={todayLog ? "hours" : "no log today"}
                value={formatNumber(todayLog?.deep_work_hours, { dash: "—" })}
              />
              <VitalRow
                label="Sleep"
                sub="score"
                value={formatNumber(currentFitness?.sleep_score, { dash: "—", digits: 0 })}
              />
              <VitalRow
                label="Running"
                sub="weekly km"
                value={formatNumber(weekKm, { dash: "—", digits: 0 })}
              />
              <VitalRow
                label="Readiness"
                sub="/ 100"
                value={consultantReadiness.score.toString()}
              />
              <VitalRow
                label="HRV"
                sub="ms"
                value={formatNumber(currentFitness?.hrv, { dash: "—", digits: 0 })}
              />
            </div>

            <div className="mt-5">
              <SectionKicker>Attributes</SectionKicker>
              <div className="mt-3 grid gap-3">
                {attributes.map((attribute) => (
                  <AttributeRow
                    key={attribute.label}
                    label={attribute.label}
                    value={attribute.value}
                  />
                ))}
              </div>
            </div>
          </aside>

          <section className="flex min-h-0 flex-col px-9">
            <SparkPanel
              href="/charts/mood"
              label="Mood · 14-day"
              series={[{ color: accent, max: 10, min: 0, values: moodValues }]}
              value={
                <div className="flex items-baseline gap-2">
                  <span className="zach-display text-[34px] font-medium leading-none text-[#0f1720]">
                    {formatNumber(latestMood, { dash: "—", digits: 1 })}
                  </span>
                  {moodTrend && (
                    <span className="text-[11px] font-semibold text-[#7a8c5a]">
                      {moodTrend === "up" ? "▲ up" : "▼ down"}
                    </span>
                  )}
                </div>
              }
            />

            <SparkPanel
              href="/charts/recovery"
              label="Sleep score · HRV"
              series={[
                { color: blue, max: 70, min: 30, strokeWidth: 1.2, values: hrvValues },
                { color: ink, max: 100, min: 40, strokeWidth: 1.5, values: sleepValues },
              ]}
              value={
                <div className="flex items-baseline gap-3">
                  <span className="zach-display text-[34px] font-medium leading-none text-[#0f1720]">
                    {formatNumber(currentFitness?.sleep_score, { dash: "—", digits: 0 })}
                  </span>
                  <span className="text-[11px] font-semibold text-[#6f7d8c]">
                    HRV {formatNumber(currentFitness?.hrv, { dash: "—", digits: 0 })}
                  </span>
                </div>
              }
            />

            <SparkPanel
              href="/charts/net-worth"
              label="Net worth · 8-month"
              series={[
                {
                  area: true,
                  color: accent,
                  max: netMax,
                  min: netMin,
                  values: netWorthValues,
                },
              ]}
              value={
                <div className="flex items-baseline gap-2">
                  <span className="zach-display text-[34px] font-medium leading-none text-[#0f1720]">
                    {formatCurrency(currentFinance?.net_worth_gbp)}
                  </span>
                  <span className="text-[11px] font-semibold text-[#7a8c5a]">
                    {formatPercent(currentFinance?.net_worth_change_percent)}
                  </span>
                </div>
              }
            />

            <div className="flex min-h-0 flex-1 flex-col pt-3.5">
              <div className="flex items-baseline justify-between gap-4">
                <SectionKicker>Ritual consistency · 21-day</SectionKicker>
                <div className="flex items-baseline gap-2">
                  <span className="zach-display text-[34px] font-medium leading-none text-[#0f1720]">
                    {adherence}%
                  </span>
                  <span className="text-[11px] font-semibold text-[#9a8d7a]">
                    adherence
                  </span>
                </div>
              </div>
              <RitualHeatmap rows={ritualRows} />
            </div>
          </section>

          <aside className="min-h-0 pl-8 lg:border-l lg:border-[#2c2824]/[0.13]">
            <section>
              <SectionKicker>Today&apos;s move</SectionKicker>
              <p className="zach-display mt-2 text-[23px] font-normal leading-[1.35] text-[#2c2824]">
                {operatingRecommendation.todayMove}
              </p>
              <div className="mt-3 flex gap-6 border-b border-[#2c2824]/[0.13] pb-4">
                <div>
                  <div className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#9a8d7a]">
                    Bottleneck
                  </div>
                  <div className="mt-1.5 text-[13px] font-semibold text-[#bb5d3a]">
                    {operatingRecommendation.bottleneck}
                  </div>
                </div>
                <div>
                  <div className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#9a8d7a]">
                    Weekly focus
                  </div>
                  <div className="mt-1.5 text-[13px] font-semibold text-[#3a342c]">
                    {operatingRecommendation.weeklyFocus}
                  </div>
                </div>
              </div>
            </section>

            <section className="border-b border-[#2c2824]/[0.13] py-3.5">
              <div className="mb-2 flex items-center justify-between">
                <SectionKicker>Active quests</SectionKicker>
                <span className="text-[11px] font-medium text-[#9a8d7a]">
                  {activeQuests.length} active
                </span>
              </div>
              {activeQuests.length ? (
                <div className="grid gap-2">
                  {activeQuests.map((quest) => (
                    <div key={quest.id}>
                      <div className="mb-1 flex justify-between gap-3 text-xs">
                        <span className="truncate font-medium">{quest.title}</span>
                        <span className="text-[#bb5d3a]">{quest.progress}%</span>
                      </div>
                      <div className="h-1 bg-[#2c2824]/[0.1]">
                        <div
                          className="h-1 bg-[#bb5d3a]"
                          style={{ width: `${quest.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-[12.5px] leading-[1.4] text-[#6b6356]">
                  {nextQuestAction(questProgress)}
                </p>
              )}
            </section>

            <section className="border-b border-[#2c2824]/[0.13] py-3.5">
              <div className="mb-3 flex items-center justify-between">
                <SectionKicker>Daily rituals</SectionKicker>
                <span className="zach-display text-[16px] text-[#574e44]">
                  {habitDone} / {habitRows.length}
                </span>
              </div>
              <div className="grid gap-2">
                {habitRows.map((habit) => (
                  <DailyRitual
                    done={habit.done}
                    key={habit.name}
                    name={habit.name}
                    target={habit.target}
                    unit={habit.unit}
                    value={habit.value}
                  />
                ))}
              </div>
            </section>

            <section className="border-b border-[#2c2824]/[0.13] py-3.5">
              <div className="mb-2 flex items-center justify-between">
                <SectionKicker>Portfolio</SectionKicker>
                <Link className="text-[11px] font-semibold text-[#bb5d3a]" href="/portfolio">
                  edit
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-[#6b6356]">
                <div>
                  <div>Total invested</div>
                  <div className="zach-display mt-1 text-xl text-[#2c2824]">
                    {formatCurrency(investedValue)}
                  </div>
                </div>
                <div>
                  <div>Weekly gain</div>
                  <div className="zach-display mt-1 text-xl text-[#2c2824]">
                    {portfolioSummary.weeklyGainLoss === null
                      ? "--"
                      : formatCurrency(portfolioSummary.weeklyGainLoss)}
                  </div>
                </div>
              </div>
            </section>

            <section className="pt-3.5">
              <div className="mb-3 flex items-center justify-between">
                <SectionKicker>Achievements</SectionKicker>
                <span className="zach-display text-[16px] text-[#574e44]">
                  {earnedAchievements.length} / {achievements.length}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {visibleAchievements.map((achievement) => (
                  <span
                    className={`rounded-full px-2.5 py-1 text-[11px] font-semibold leading-tight ${
                      achievement.earned
                        ? "bg-[#bb5d3a] text-[#f9f4ec]"
                        : "border border-[#2c2824]/20 text-[#8c8273]"
                    }`}
                    key={achievement.label}
                  >
                    {shortAchievementLabel(achievement.label)}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-[11px] leading-[1.35] text-[#9a8d7a]">
                Best mood day: {analytics.bestMoodDay}. Signed in as{" "}
                {userEmail ?? "private user"}.
              </p>
            </section>
          </aside>
        </section>
      </div>
    </main>
  );
}
