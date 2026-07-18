import Link from "next/link";

import { isRunningActivity, numeric, toDate } from "@/lib/utils";
import { saveQuickDailyEntry, signOut } from "@/app/actions";
import { DailyRitualMetricInput } from "@/components/daily-ritual-metric-input";
import { DailyRoutineToggle } from "@/components/daily-routine-toggle";
import { DatabaseSetupNotice } from "@/components/database-setup-notice";
import { PendingSubmitButton } from "@/components/pending-submit-button";
import { PortfolioPriceRefresher } from "@/components/portfolio-price-refresher";
import { ZachMobileBottomNav, ZachTopNav } from "@/components/zach-shell";
import { buildOperatingRecommendation } from "@/lib/ai-insights";
import {
  calculateAnalytics,
} from "@/lib/analytics";
import {
  formatDistance as formatActivityDistance,
  formatDuration as formatActivityDuration,
  trainingBenefit,
} from "@/lib/fitness-analytics";
import { getLearningLesson } from "@/lib/learning-zone";
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
  DailyLog,
  DailyRoutineLog,
  FinanceSnapshot,
  FitnessMetric,
  LearningSession,
  MarketPrice,
  NetWorthSnapshot,
  Quest,
} from "@/lib/supabase/database.types";

type ControlRoomDashboardProps = {
  activities: Activity[];
  dailyLogs: DailyLog[];
  dailyRoutineLogs: DailyRoutineLog[];
  databaseSetupIssue?: DatabaseSetupIssue | null;
  error?: string;
  financeSnapshots: FinanceSnapshot[];
  fitnessMetrics: FitnessMetric[];
  learningSessions: LearningSession[];
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
type RoutineKey =
  | "train"
  | "deep_work"
  | "french"
  | "read"
  | "ate_well"
  | "cold_shower";

const currencyFormatter = new Intl.NumberFormat("en-GB", {
  currency: "GBP",
  maximumFractionDigits: 0,
  style: "currency",
});

function latest<T>(rows: T[]) {
  return rows.length ? rows[rows.length - 1] : null;
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

function formatHours(value: number | null | undefined) {
  return formatNumber(value, { dash: "--", digits: 1, suffix: " h" });
}

function formatActivityTitle(activity: Activity | null) {
  if (!activity) {
    return "No Garmin activity yet";
  }

  return activity.notes?.trim() || activity.activity_type?.trim() || "Logged activity";
}

function formatTrainingStatus(value: string | null | undefined) {
  if (!value?.trim()) {
    return "--";
  }

  return value
    .trim()
    .toLowerCase()
    .split(/[\s_-]+/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function formatHeaderDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    weekday: "long",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00Z`));
}

function offsetDate(date: string, offset: number) {
  const value = toDate(date);
  value.setUTCDate(value.getUTCDate() + offset);
  return value.toISOString().slice(0, 10);
}

function routineCompletionMap(logs: DailyRoutineLog[]) {
  return new Map(
    logs.map((log) => [`${log.date}:${log.routine_key}`, log.completed]),
  );
}

function routineDone(
  completions: Map<string, boolean>,
  date: string,
  routineKey: RoutineKey,
  fallback: boolean,
) {
  return completions.get(`${date}:${routineKey}`) ?? fallback;
}

function weekStart(date: string) {
  const value = toDate(date);
  const day = value.getUTCDay() || 7;
  value.setUTCDate(value.getUTCDate() - day + 1);
  return value.toISOString().slice(0, 10);
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

function latestDatedValues(
  financeSnapshots: FinanceSnapshot[],
  netWorthSnapshots: NetWorthSnapshot[],
) {
  const valuesByDate = new Map<string, number>();

  financeSnapshots.forEach((snapshot) => {
    const value = finiteNumber(snapshot.net_worth_gbp);
    if (value !== null) {
      valuesByDate.set(snapshot.date, value);
    }
  });

  netWorthSnapshots.forEach((snapshot) => {
    const value = finiteNumber(snapshot.estimated_net_worth);
    if (value !== null) {
      valuesByDate.set(snapshot.date, value);
    }
  });

  return Array.from(valuesByDate.entries())
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([, value]) => value);
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

function learningSessionTime(session: LearningSession) {
  return new Date(session.completed_at ?? session.created_at).getTime();
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
  const clampY = (value: number) => Math.max(pad, Math.min(height - pad, value));
  const x = (index: number) =>
    pad + (width - pad * 2) * (index / (usableValues.length - 1));
  const y = (value: number) =>
    clampY(
      pad +
        (height - pad * 2) *
          (1 - (value - resolvedMin) / (resolvedMax - resolvedMin)),
    );
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
  const gradientId = `spark-area-${label.replace(/[^a-z0-9]/gi, "").toLowerCase()}`;

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
              <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor={accent} stopOpacity="0.16" />
                <stop offset="1" stopColor={accent} stopOpacity="0" />
              </linearGradient>
            </defs>
            {drawable.map((item, index) => (
              <g key={`${item.color}-${index}`}>
                {item.area && (
                  <path d={item.path?.area} fill={`url(#${gradientId})`} />
                )}
                <path
                  d={item.path?.d}
                  fill="none"
                  stroke={item.color}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={item.strokeWidth ?? 1.5}
                  vectorEffect="non-scaling-stroke"
                />
              </g>
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
  href,
  label,
  sub,
  value,
}: {
  href?: string;
  label: string;
  sub: string;
  value: string;
}) {
  const content = (
    <>
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
    </>
  );

  if (href) {
    return (
      <Link
        className="group flex items-center justify-between border-b border-[#2c2824]/[0.13] py-3 transition hover:bg-[#bb5d3a]/[0.06]"
        href={href}
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="flex items-center justify-between border-b border-[#2c2824]/[0.13] py-3">
      {content}
    </div>
  );
}

function GarminStat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-md border border-[#2c2824]/[0.08] bg-[#f9f4ec] px-3 py-2">
      <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#9a8d7a]">
        {label}
      </div>
      <div className="mt-1 text-[15px] font-semibold text-[#2c2824]">{value}</div>
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
  date,
  done,
  metric,
  name,
  routineKey,
  target,
  unit,
  variant = "compact",
  value,
}: {
  date: string;
  done: boolean;
  metric?: "deep_work_minutes" | "french_minutes" | "reading_pages";
  name: string;
  routineKey: RoutineKey;
  target?: number;
  unit?: string;
  variant?: "compact" | "mobile";
  value?: number;
}) {
  const mobile = variant === "mobile";

  return (
    <div
      className={`flex w-full items-center gap-2 rounded-md border border-transparent transition hover:border-[#bb5d3a]/20 hover:bg-[#bb5d3a]/[0.06] ${
        mobile ? "min-h-[54px] px-3 py-1.5" : "min-h-[30px] px-1 py-0.5"
      } ${
        done ? "bg-[#bb5d3a]/[0.07]" : ""
      }`}
    >
      <div className="min-w-0 flex-1">
        <DailyRoutineToggle
          comfortable={mobile}
          date={date}
          done={done}
          name={name}
          routineKey={routineKey}
          strikeWhenDone={target === undefined}
        />
      </div>
      {target !== undefined && metric && (
        <DailyRitualMetricInput
          date={date}
          metric={metric}
          target={target}
          unit={unit}
          value={value}
        />
      )}
    </div>
  );
}

function buildRitualRows(
  today: string,
  activities: Activity[],
  dailyLogs: DailyLog[],
  dailyRoutineLogs: DailyRoutineLog[],
): { adherence: number; completions: Map<string, boolean>; rows: RitualRow[] } {
  const dates = Array.from({ length: 21 }, (_, index) =>
    offsetDate(today, index - 20),
  );
  const dailyByDate = new Map(dailyLogs.map((log) => [log.date, log]));
  const activityDates = new Set(activities.map((activity) => activity.date));
  const completions = routineCompletionMap(dailyRoutineLogs);
  const defs = [
    {
      key: "train" as const,
      name: "Train",
      fallback: (date: string) => activityDates.has(date),
    },
    {
      key: "deep_work" as const,
      name: "Deep work",
      fallback: (date: string) =>
        numeric(dailyByDate.get(date)?.deep_work_hours) > 0,
    },
    {
      key: "french" as const,
      name: "French",
      fallback: (date: string) =>
        numeric(dailyByDate.get(date)?.french_minutes) > 0,
    },
    {
      key: "read" as const,
      name: "Read",
      fallback: (date: string) =>
        numeric(dailyByDate.get(date)?.reading_pages) > 0,
    },
    {
      key: "ate_well" as const,
      name: "Ate well",
      fallback: (date: string) =>
        (dailyByDate.get(date)?.notes ?? "").toLowerCase().includes("ate well"),
    },
    {
      key: "cold_shower" as const,
      name: "Cold shower",
      fallback: (date: string) =>
        (dailyByDate.get(date)?.notes ?? "").toLowerCase().includes("cold shower"),
    },
  ];
  let totalDone = 0;
  const rows = defs.map((def) => {
    const cells = dates.map((date) =>
      routineDone(completions, date, def.key, def.fallback(date)),
    );
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
    completions,
    rows,
  };
}

function shortAchievementLabel(label: string) {
  return label
    .replace("GBP ", "")
    .replace(" Running ", " ")
    .replace(" Reading Pages", " Pages")
    .replace(" Hours ", "h ")
    .replace(" Minutes", "")
    .replace("Net Worth", "NW");
}

function MobileNotebookCard({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section
      className="rounded-md border border-[#2c2824]/[0.13] bg-[#fffaf2] p-4 shadow-[0_1px_0_rgba(44,40,36,0.04)]"
      id={id}
    >
      {children}
    </section>
  );
}

function MobileField({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <label className="grid gap-1.5 text-sm font-medium text-[#3a342c]">
      {label}
      <input
        className="h-11 rounded-md border border-[#d2c8b8] bg-white px-3 text-sm text-[#2c2824] outline-none transition placeholder:text-[#9a8d7a] focus:border-[#bb5d3a]/70 focus:ring-2 focus:ring-[#bb5d3a]/10"
        name={name}
        placeholder={placeholder}
        type={type}
      />
    </label>
  );
}

export function ControlRoomDashboard({
  activities,
  dailyLogs,
  databaseSetupIssue,
  error,
  financeSnapshots,
  fitnessMetrics,
  learningSessions,
  marketPrices,
  message,
  netWorthSnapshots,
  portfolioAccounts,
  quests,
  today,
  dailyRoutineLogs,
  userEmail,
}: ControlRoomDashboardProps) {
  const todayLog = dailyLogs.find((log) => log.date === today) ?? null;
  const currentFitness = latest(fitnessMetrics);
  const latestActivity = latest(activities);
  const currentFinance = latest(financeSnapshots);
  const currentNetWorthSnapshot = latest(netWorthSnapshots);
  const attributes = calculateCharacterAttributes({
    activities,
    dailyLogs,
    financeSnapshots,
    fitnessMetrics,
    netWorthSnapshots,
  });
  const level = calculateLevelProgress({ activities, dailyLogs, fitnessMetrics });
  const achievements = calculateAchievements({
    activities,
    dailyLogs,
    financeSnapshots,
  });
  const questProgress = calculateQuestProgress(quests, {
    activities,
      dailyLogs,
    financeSnapshots,
    fitnessMetrics,
    netWorthSnapshots,
  });
  const activeQuests = questProgress
    .filter((quest) => (quest.status ?? "active").toLowerCase() === "active")
    .slice(0, 3);
  const operatingRecommendation = buildOperatingRecommendation({
    activities,
      dailyLogs,
    financeSnapshots,
    fitnessMetrics,
  });
  const analytics = calculateAnalytics({ activities, dailyLogs, fitnessMetrics });
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
  const trainingLoadValues = valuesFromRows(fitnessMetrics, (row) =>
    finiteNumber(row.training_load),
  );
  const netWorthValues = latestDatedValues(
    financeSnapshots,
    netWorthSnapshots,
  ).slice(-8);
  const netMin =
    netWorthValues.length > 1 ? Math.min(...netWorthValues) * 0.96 : undefined;
  const netMax =
    netWorthValues.length > 1 ? Math.max(...netWorthValues) * 1.04 : undefined;
  const latestMood = latestValue(moodValues);
  const moodTrend = trend(moodValues);
  const { adherence, completions: routineCompletions, rows: ritualRows } = buildRitualRows(
    today,
    activities,
    dailyLogs,
    dailyRoutineLogs,
  );
  const deepWorkMinutes = Math.round(numeric(todayLog?.deep_work_hours) * 60);
  const frenchMinutes = numeric(todayLog?.french_minutes);
  const readingPages = numeric(todayLog?.reading_pages);
  const todayHasActivity = activities.some((activity) => activity.date === today);
  const todayNotes = (todayLog?.notes ?? "").toLowerCase();
  const habitRows: Array<{
    done: boolean;
    metric?: "deep_work_minutes" | "french_minutes" | "reading_pages";
    name: string;
    routineKey: RoutineKey;
    target?: number;
    unit?: string;
    value?: number;
  }> = [
    {
      done: routineDone(routineCompletions, today, "train", todayHasActivity),
      name: "Train - light",
      routineKey: "train",
    },
    {
      done: routineDone(
        routineCompletions,
        today,
        "deep_work",
        deepWorkMinutes >= 90,
      ),
      metric: "deep_work_minutes",
      name: "Deep work",
      routineKey: "deep_work",
      target: 90,
      unit: "m",
      value: deepWorkMinutes,
    },
    {
      done: routineDone(routineCompletions, today, "french", frenchMinutes >= 30),
      metric: "french_minutes",
      name: "French",
      routineKey: "french",
      target: 30,
      unit: "m",
      value: frenchMinutes,
    },
    {
      done: routineDone(routineCompletions, today, "read", readingPages >= 20),
      metric: "reading_pages",
      name: "Read",
      routineKey: "read",
      target: 20,
      unit: "p",
      value: readingPages,
    },
    {
      done: routineDone(
        routineCompletions,
        today,
        "ate_well",
        todayNotes.includes("ate well"),
      ),
      name: "Ate well",
      routineKey: "ate_well",
    },
    {
      done: routineDone(
        routineCompletions,
        today,
        "cold_shower",
        todayNotes.includes("cold shower"),
      ),
      name: "Cold shower",
      routineKey: "cold_shower",
    },
  ];
  const habitDone = habitRows.filter((row) => row.done).length;
  const remainingHabits = Math.max(0, habitRows.length - habitDone);
  const latestLearningSession = [...learningSessions].sort(
    (left, right) => learningSessionTime(right) - learningSessionTime(left),
  )[0];
  const latestLearningLesson = latestLearningSession
    ? getLearningLesson(latestLearningSession.lesson_slug)
    : null;
  const learningActionHref = latestLearningLesson
    ? `/learning-zone/lesson/${latestLearningLesson.slug}`
    : "/learning-zone";
  const learningActionLabel = latestLearningLesson
    ? "Revisit latest lesson"
    : "Spin a topic";
  const learningSummary = latestLearningLesson
    ? `${latestLearningLesson.title} - ${latestLearningLesson.concept.level} ${latestLearningLesson.topic.replace(/-/g, " ")}`
    : "No completed lesson yet";
  const desktopActionHref =
    remainingHabits > 0 ? "#desktop-rituals" : learningActionHref;
  const desktopActionLabel =
    remainingHabits > 0 ? "Finish daily rituals" : learningActionLabel;
  const desktopActionReason =
    remainingHabits > 0
      ? `${remainingHabits} routine action${remainingHabits === 1 ? "" : "s"} still open`
      : learningSummary;
  const investedValue = portfolioSummary.totalInvested || currentFinance?.invested_gbp;
  const currentNetWorthValue =
    currentFinance?.net_worth_gbp ??
    currentNetWorthSnapshot?.estimated_net_worth ??
    (portfolioSummary.totalInvested || null);
  const currentNetWorthChangePercent =
    currentFinance?.net_worth_change_percent ??
    (portfolioSummary.weeklyGainLoss !== null &&
    currentNetWorthValue &&
    currentNetWorthValue !== portfolioSummary.weeklyGainLoss
      ? (portfolioSummary.weeklyGainLoss /
          (currentNetWorthValue - portfolioSummary.weeklyGainLoss)) *
        100
      : null);

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
    <main className="zach-ui min-h-screen bg-[#f9f4ec] text-[#2c2824]">
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col gap-4 px-4 pb-28 pt-[calc(1rem+env(safe-area-inset-top))] lg:hidden">
        <header className="flex items-start justify-between gap-4 border-b border-[#2c2824] pb-4">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#9a7d5f]">
              Personal OS
            </div>
            <h1 className="zach-display mt-1 text-4xl font-medium leading-none text-[#111820]">
              ZachOS
            </h1>
            <p className="mt-2 text-sm leading-5 text-[#71685c]">
              {formatHeaderDate(today)}
            </p>
          </div>
          <form action={signOut}>
            <button
              className="h-10 rounded-md border border-[#d2c8b8] bg-[#fffaf2] px-3 text-sm font-semibold text-[#2c2824]"
              type="submit"
            >
              Log out
            </button>
          </form>
        </header>

        {(error || message) && (
          <div
            className={`rounded border px-3 py-2 text-sm ${
              error
                ? "border-[#bb5d3a]/30 bg-[#bb5d3a]/10 text-[#8d3f26]"
                : "border-[#7a8c5a]/30 bg-[#7a8c5a]/10 text-[#54683b]"
            }`}
          >
            {error || message}
          </div>
        )}

        <MobileNotebookCard>
          <SectionKicker>Now</SectionKicker>
          <p className="zach-display mt-3 text-3xl leading-tight text-[#111820]">
            {operatingRecommendation.todayMove}
          </p>
          <div className="mt-4 grid gap-2 text-sm leading-6 text-[#71685c]">
            <p>
              Keep it light: check off what is done, leave enough context for
              tonight, then move on.
            </p>
            <p>
              Focus:{" "}
              <span className="font-semibold text-[#3a342c]">
                {operatingRecommendation.weeklyFocus}
              </span>
            </p>
          </div>
        </MobileNotebookCard>

        <MobileNotebookCard>
          <div className="flex items-center justify-between gap-3">
            <SectionKicker>Garmin pulse</SectionKicker>
            <Link className="text-xs font-semibold text-[#bb5d3a]" href="/recovery">
              Recovery
            </Link>
          </div>
          <div className="mt-4 grid gap-2">
            <GarminStat
              label="Sleep"
              value={`${formatNumber(currentFitness?.sleep_score, { dash: "--", digits: 0 })} score · ${formatHours(currentFitness?.sleep_hours)}`}
            />
            <GarminStat
              label="Recovery"
              value={`HRV ${formatNumber(currentFitness?.hrv, { dash: "--", digits: 0 })} · RHR ${formatNumber(currentFitness?.resting_hr, { dash: "--", digits: 0 })}`}
            />
            <GarminStat
              label="Load"
              value={`${formatNumber(currentFitness?.training_load, { dash: "--", digits: 0 })} · ${formatTrainingStatus(currentFitness?.training_status)}`}
            />
            <GarminStat
              label="Latest activity"
              value={`${formatActivityTitle(latestActivity)} · ${latestActivity ? latestActivity.date : "--"}`}
            />
          </div>
        </MobileNotebookCard>

        <MobileNotebookCard>
          <SectionKicker>Actions</SectionKicker>
          <div className="mt-4 grid gap-2">
            <Link
              className="flex min-h-14 items-center justify-between gap-3 rounded-md border border-[#2c2824]/[0.1] bg-[#f9f4ec] px-3 py-2"
              href="#habits"
            >
              <span>
                <span className="block text-sm font-semibold text-[#2c2824]">
                  Check habits
                </span>
                <span className="block text-xs leading-5 text-[#71685c]">
                  {remainingHabits === 0 ? "All clear today" : `${remainingHabits} still open`}
                </span>
              </span>
              <span className="font-mono text-sm text-[#bb5d3a]">
                {habitDone}/{habitRows.length}
              </span>
            </Link>
            <Link
              className="flex min-h-14 items-center justify-between gap-3 rounded-md border border-[#2c2824]/[0.1] bg-[#f9f4ec] px-3 py-2"
              href="#note"
            >
              <span>
                <span className="block text-sm font-semibold text-[#2c2824]">
                  Leave reflection
                </span>
                <span className="block text-xs leading-5 text-[#71685c]">
                  {todayLog?.notes ? "Saved for today" : "Mood, context and notes"}
                </span>
              </span>
              <span className="text-xs font-semibold text-[#bb5d3a]">
                {todayLog?.notes ? "View" : "Write"}
              </span>
            </Link>
            <Link
              className="flex min-h-14 items-center justify-between gap-3 rounded-md border border-[#2c2824]/[0.1] bg-[#f9f4ec] px-3 py-2"
              href={learningActionHref}
            >
              <span>
                <span className="block text-sm font-semibold text-[#2c2824]">
                  Learn
                </span>
                <span className="block text-xs leading-5 text-[#71685c]">
                  {latestLearningLesson ? latestLearningLesson.title : "Spin a topic"}
                </span>
              </span>
              <span className="text-xs font-semibold text-[#bb5d3a]">
                Open
              </span>
            </Link>
          </div>
        </MobileNotebookCard>

        <MobileNotebookCard id="habits">
          <div className="flex items-start justify-between gap-4">
            <div>
              <SectionKicker>Today</SectionKicker>
              <p className="mt-2 text-sm leading-6 text-[#71685c]">
                Tap as you go. The tick changes immediately while ZachOS saves
                it in the background.
              </p>
            </div>
            <span className="rounded-md border border-[#2c2824]/[0.1] bg-[#f9f4ec] px-2.5 py-1 text-xs font-semibold text-[#71685c]">
              {remainingHabits === 0 ? "clear" : `${remainingHabits} left`}
            </span>
          </div>
          <div className="mt-4 grid gap-2">
            {habitRows.map((habit) => (
              <DailyRitual
                date={today}
                done={habit.done}
                key={habit.name}
                metric={habit.metric}
                name={habit.name}
                routineKey={habit.routineKey}
                target={habit.target}
                unit={habit.unit}
                value={habit.value}
                variant="mobile"
              />
            ))}
          </div>
        </MobileNotebookCard>

        <MobileNotebookCard id="note">
          <div className="flex items-center justify-between gap-3">
            <SectionKicker>Reflection</SectionKicker>
            <Link
              className="text-xs font-semibold text-[#bb5d3a]"
              href="/reflections"
            >
              Review days
            </Link>
          </div>
          <form action={saveQuickDailyEntry} className="mt-4 grid gap-3">
            <input name="date" type="hidden" value={today} />
            <input name="return_to" type="hidden" value="/" />
            <div className="grid grid-cols-2 gap-3">
              <MobileField label="Mood" name="mood_score" placeholder="1-10" type="number" />
              <MobileField
                label="Deep work"
                name="deep_work_hours"
                placeholder="hours"
                type="number"
              />
              <MobileField
                label="Reading"
                name="reading_pages"
                placeholder="pages"
                type="number"
              />
              <MobileField
                label="French"
                name="french_minutes"
                placeholder="minutes"
                type="number"
              />
            </div>
            <label className="grid gap-1.5 text-sm font-medium text-[#3a342c]">
              Reflection
              <textarea
                className="min-h-24 rounded-md border border-[#d2c8b8] bg-white px-3 py-2 text-sm leading-6 text-[#2c2824] outline-none transition placeholder:text-[#9a8d7a] focus:border-[#bb5d3a]/70 focus:ring-2 focus:ring-[#bb5d3a]/10"
                name="notes"
                placeholder="What is worth remembering from today?"
              />
            </label>
            <PendingSubmitButton
              className="h-11 rounded-md border border-[#241f1a] bg-[#241f1a] px-4 text-sm font-semibold text-[#f9f4ec]"
            >
              Save note
            </PendingSubmitButton>
          </form>
        </MobileNotebookCard>

        <MobileNotebookCard>
          <SectionKicker>Learning</SectionKicker>
          <div className="mt-3 rounded-md border border-[#2c2824]/[0.1] bg-[#f9f4ec] p-3">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9a7d5f]">
              Next study action
            </div>
            <p className="mt-2 text-sm font-semibold leading-5 text-[#3a342c]">
              {learningSummary}
            </p>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <Link
              className="inline-flex h-11 items-center justify-center rounded-md border border-[#bb5d3a] bg-[#bb5d3a] px-3 text-sm font-semibold text-[#f9f4ec]"
              href={learningActionHref}
            >
              {learningActionLabel}
            </Link>
            <Link
              className="inline-flex h-11 items-center justify-center rounded-md border border-[#d2c8b8] bg-white px-3 text-sm font-semibold text-[#2c2824]"
              href="/learning-zone"
            >
              Open zone
            </Link>
          </div>
        </MobileNotebookCard>

        <MobileNotebookCard id="more">
          <SectionKicker>Brief look</SectionKicker>
          <div className="mt-4 grid gap-3 text-sm leading-6 text-[#71685c]">
            <p>
              Habits:{" "}
              <span className="font-semibold text-[#3a342c]">
                {remainingHabits === 0
                  ? "today is checked off"
                  : `${remainingHabits} action${remainingHabits === 1 ? "" : "s"} still open`}
              </span>
            </p>
            <p>
              Quests:{" "}
              <span className="font-semibold text-[#3a342c]">
                {activeQuests.length
                  ? nextQuestAction(questProgress)
                  : "no urgent quest action"}
              </span>
            </p>
            <p>
              Reflection:{" "}
              <span className="font-semibold text-[#3a342c]">
                {todayLog?.notes ? todayLog.notes.slice(0, 96) : "no note yet"}
              </span>
            </p>
            <p>
              Admin: portfolio edits, Garmin imports and dense tables stay out
              of the phone flow.
            </p>
          </div>
        </MobileNotebookCard>
      </div>

      <div className="mx-auto hidden min-h-screen w-full max-w-[1514px] flex-col px-6 py-7 lg:flex lg:px-10 lg:py-9">
        <PortfolioPriceRefresher />
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
            <div className="text-center">
              <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9a7d5f]">
                Level {level.level} - {level.totalXp.toLocaleString("en-GB")} XP
              </div>
              <div className="zach-display mt-1 text-[18px] leading-none text-[#5a3228]">
                {formatHeaderDate(today)}
              </div>
            </div>

            <nav className="flex flex-wrap items-center justify-end gap-2">
              <details className="group relative">
                <summary className="zach-ui inline-flex h-9 cursor-pointer list-none items-center rounded-md border border-[#bb5d3a] bg-[#bb5d3a] px-4 text-sm font-semibold text-[#f9f4ec] transition hover:bg-[#a94f31] [&::-webkit-details-marker]:hidden">
                  + Quick add
                  <span className="ml-2 text-[10px]">v</span>
                </summary>
                <form
                  action={saveQuickDailyEntry}
                  className="absolute right-0 z-20 mt-2 grid w-80 gap-2 rounded-lg border border-[#d2c8b8] bg-[#fffaf2] p-3 shadow-xl"
                >
                  <input name="date" type="hidden" value={today} />
                  <input name="return_to" type="hidden" value="/" />
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
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      className="h-9 rounded border border-[#d2c8b8] bg-white px-2 text-sm"
                      min={0}
                      name="reading_pages"
                      placeholder="Reading pages"
                      type="number"
                    />
                    <input
                      className="h-9 rounded border border-[#d2c8b8] bg-white px-2 text-sm"
                      min={0}
                      name="french_minutes"
                      placeholder="French minutes"
                      type="number"
                    />
                  </div>
                  <textarea
                    className="min-h-20 rounded border border-[#d2c8b8] bg-white px-2 py-2 text-sm"
                    name="notes"
                    placeholder="Reflection or context"
                  />
                  <PendingSubmitButton
                    className="h-9 rounded bg-[#1f2422] text-sm font-semibold text-[#f9f4ec]"
                  >
                    Save
                  </PendingSubmitButton>
                  <div className="grid grid-cols-4 gap-2 border-t border-[#2c2824]/[0.1] pt-2">
                    <Link className="rounded border border-[#d2c8b8] px-2 py-1.5 text-center text-xs font-semibold text-[#6f6254]" href="#desktop-rituals">
                      Habits
                    </Link>
                    <Link className="rounded border border-[#d2c8b8] px-2 py-1.5 text-center text-xs font-semibold text-[#6f6254]" href="/reflections">
                      Reflect
                    </Link>
                    <Link className="rounded border border-[#d2c8b8] px-2 py-1.5 text-center text-xs font-semibold text-[#6f6254]" href="/learning-zone">
                      Learning
                    </Link>
                    <Link className="rounded border border-[#d2c8b8] px-2 py-1.5 text-center text-xs font-semibold text-[#6f6254]" href="/portfolio">
                      Portfolio
                    </Link>
                  </div>
              </form>
              </details>
              <NavButton href="/reflections">Reflections</NavButton>
              <NavButton href="/learning-zone">Learning</NavButton>
              <NavButton href="/portfolio">Portfolio</NavButton>
              <details className="group relative">
                <summary className="zach-ui inline-flex h-9 cursor-pointer list-none items-center rounded-md border border-[#d2c8b8] bg-[#f9f4ec] px-3 text-sm font-medium text-[#2c2824] transition hover:border-[#b9aa95] [&::-webkit-details-marker]:hidden">
                  Data tools
                  <span className="ml-2 text-[10px]">v</span>
                </summary>
                <div className="absolute right-0 z-20 mt-2 grid w-48 gap-1 rounded-lg border border-[#d2c8b8] bg-[#fffaf2] p-2 text-sm shadow-xl">
                  <Link className="rounded px-3 py-2 font-medium text-[#3a342c] hover:bg-[#2c2824]/[0.06]" href="/manage">
                    Update data
                  </Link>
                  <Link className="rounded px-3 py-2 font-medium text-[#3a342c] hover:bg-[#2c2824]/[0.06]" href="/integrations">
                    Integrations
                  </Link>
                  <Link className="rounded px-3 py-2 font-medium text-[#3a342c] hover:bg-[#2c2824]/[0.06]" href="/garmin-import">
                    Garmin import
                  </Link>
                  <Link className="rounded px-3 py-2 font-medium text-[#3a342c] hover:bg-[#2c2824]/[0.06]" href="/recovery">
                    Recovery detail
                  </Link>
                </div>
              </details>
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
        <div className="mt-3 shrink-0">
          <ZachTopNav active="dashboard" />
        </div>

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

        <section className="grid flex-1 grid-cols-1 gap-7 pt-6 lg:grid-cols-[360px_minmax(0,1fr)_344px] lg:gap-0">
          <aside className="min-h-0 pr-8 lg:border-r lg:border-[#2c2824]/[0.13]">
            <SectionKicker>Today</SectionKicker>
            <div className="mt-4">
              <VitalRow
                href="/mood"
                label="Mood"
                sub={todayLog ? "logged today" : "no log today"}
                value={formatNumber(todayLog?.mood_score, { dash: "--" })}
              />
              <VitalRow
                href="/reflections"
                label="Deep work"
                sub={todayLog ? "hours" : "no log today"}
                value={formatNumber(todayLog?.deep_work_hours, { dash: "--" })}
              />
              <VitalRow
                href="/recovery"
                label="Sleep"
                sub="score"
                value={formatNumber(currentFitness?.sleep_score, { dash: "--", digits: 0 })}
              />
              <VitalRow
                href="/running"
                label="Running"
                sub="weekly km"
                value={formatNumber(weekKm, { dash: "--", digits: 0 })}
              />
              <details className="mt-3 rounded-md border border-[#2c2824]/[0.12] bg-[#fffaf2] px-3 py-2">
                <summary className="zach-ui cursor-pointer list-none text-xs font-semibold uppercase tracking-[0.16em] text-[#9a7d5f] [&::-webkit-details-marker]:hidden">
                  Recovery detail
                </summary>
                <div className="mt-2 grid gap-1 border-t border-[#2c2824]/[0.08] pt-2">
                  <VitalRow
                    href="/recovery"
                    label="Sleep"
                    sub="score"
                    value={formatNumber(currentFitness?.sleep_score, { dash: "--", digits: 0 })}
                  />
                  <VitalRow
                    href="/running"
                    label="Running"
                    sub="weekly km"
                    value={formatNumber(weekKm, { dash: "--", digits: 0 })}
                  />
                  <VitalRow
                    href="/hrv"
                    label="HRV"
                    sub="ms"
                    value={formatNumber(currentFitness?.hrv, { dash: "--", digits: 0 })}
                  />
                  <VitalRow
                    href="/recovery"
                    label="Sleep time"
                    sub="hours"
                    value={formatHours(currentFitness?.sleep_hours)}
                  />
                  <VitalRow
                    href="/recovery"
                    label="Resting HR"
                    sub="bpm"
                    value={formatNumber(currentFitness?.resting_hr, { dash: "--", digits: 0 })}
                  />
                  <VitalRow
                    href="/recovery"
                    label="Training load"
                    sub={formatTrainingStatus(currentFitness?.training_status)}
                    value={formatNumber(currentFitness?.training_load, { dash: "--", digits: 0 })}
                  />
                </div>
              </details>
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
              href="/mood"
              label="Mood - 14-day"
              series={[{ color: accent, max: 10, min: 0, values: moodValues }]}
              value={
                <div className="flex items-baseline gap-2">
                  <span className="zach-display text-[34px] font-medium leading-none text-[#0f1720]">
                    {formatNumber(latestMood, { dash: "--", digits: 1 })}
                  </span>
                  {moodTrend && (
                    <span className="text-[11px] font-semibold text-[#7a8c5a]">
                      {moodTrend}
                    </span>
                  )}
                </div>
              }
            />

            <SparkPanel
              href="/recovery"
              label="Sleep score - HRV"
              series={[
                { color: blue, max: 70, min: 30, strokeWidth: 1.2, values: hrvValues },
                { color: ink, max: 100, min: 40, strokeWidth: 1.5, values: sleepValues },
              ]}
              value={
                <div className="flex items-baseline gap-3">
                  <span className="zach-display text-[34px] font-medium leading-none text-[#0f1720]">
                    {formatNumber(currentFitness?.sleep_score, { dash: "--", digits: 0 })}
                  </span>
                  <span className="text-[11px] font-semibold text-[#6f7d8c]">
                    HRV {formatNumber(currentFitness?.hrv, { dash: "--", digits: 0 })}
                  </span>
                </div>
              }
            >
              <div className="mt-2 flex items-center justify-between gap-3 text-[11px] font-semibold text-[#71685c]">
                <span>Sleep {formatHours(currentFitness?.sleep_hours)}</span>
                <span>Load {formatNumber(currentFitness?.training_load, { dash: "--", digits: 0 })}</span>
              </div>
            </SparkPanel>

            <SparkPanel
              href="/recovery"
              label="Training load - 14-day"
              series={[{ color: accent, min: 0, strokeWidth: 1.5, values: trainingLoadValues }]}
              value={
                <div className="flex items-baseline gap-3">
                  <span className="zach-display text-[34px] font-medium leading-none text-[#0f1720]">
                    {formatNumber(currentFitness?.training_load, { dash: "--", digits: 0 })}
                  </span>
                  <span className="text-[11px] font-semibold text-[#6f7d8c]">
                    {formatTrainingStatus(currentFitness?.training_status)}
                  </span>
                </div>
              }
            />

            <SparkPanel
              href="/charts/net-worth"
              label="Net worth - 8-month"
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
                    {formatCurrency(currentNetWorthValue)}
                  </span>
                  <span className="text-[11px] font-semibold text-[#7a8c5a]">
                    {formatPercent(currentNetWorthChangePercent)}
                  </span>
                </div>
              }
            />

            <div className="flex min-h-0 flex-1 flex-col pt-3.5">
              <div className="flex items-baseline justify-between gap-4">
                <SectionKicker>Ritual consistency - 21-day</SectionKicker>
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
            <section className="rounded-md border border-[#bb5d3a]/25 bg-[#fffaf2] p-4 shadow-[0_1px_0_rgba(44,40,36,0.04)]">
              <SectionKicker>Command centre</SectionKicker>
              <p className="zach-display mt-2 text-[25px] font-normal leading-[1.25] text-[#2c2824]">
                {operatingRecommendation.todayMove}
              </p>
              <p className="mt-3 text-sm leading-6 text-[#71685c]">
                Next action:{" "}
                <span className="font-semibold text-[#3a342c]">
                  {desktopActionReason}
                </span>
              </p>
              <Link
                className="mt-4 inline-flex h-10 w-full items-center justify-center rounded-md border border-[#241f1a] bg-[#241f1a] px-4 text-sm font-semibold text-[#f9f4ec] transition hover:bg-[#3a342c]"
                href={desktopActionHref}
              >
                {desktopActionLabel}
              </Link>
              <div className="mt-4 grid grid-cols-2 gap-3 border-t border-[#2c2824]/[0.13] pt-3">
                <div className="min-w-0">
                  <div className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#9a8d7a]">
                    Bottleneck
                  </div>
                  <div className="mt-1.5 text-[13px] font-semibold text-[#bb5d3a]">
                    {operatingRecommendation.bottleneck}
                  </div>
                </div>
                <Link className="min-w-0 group" href="/review">
                  <div className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#9a8d7a]">
                    Weekly focus
                  </div>
                  <div className="mt-1.5 text-[13px] font-semibold text-[#3a342c] group-hover:text-[#bb5d3a]">
                    {operatingRecommendation.weeklyFocus}
                  </div>
                </Link>
              </div>
            </section>

            <section className="border-b border-[#2c2824]/[0.13] py-3.5">
              <div className="mb-3 flex items-center justify-between">
                <SectionKicker>Garmin pulse</SectionKicker>
                <Link className="text-[11px] font-semibold text-[#bb5d3a]" href="/activities">
                  all activity
                </Link>
              </div>
              <div className="rounded-md border border-[#2c2824]/[0.08] bg-[#f9f4ec] p-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9a8d7a]">
                      Latest activity
                    </div>
                    <div className="mt-1 text-[16px] font-semibold text-[#2c2824]">
                      {formatActivityTitle(latestActivity)}
                    </div>
                    <div className="mt-1 text-[11px] text-[#71685c]">
                      {latestActivity?.date ?? "No Garmin activity yet"}
                    </div>
                  </div>
                  <Link className="text-[11px] font-semibold text-[#bb5d3a]" href="/running">
                    running
                  </Link>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <GarminStat
                    label="Distance"
                    value={formatActivityDistance(latestActivity?.distance_km)}
                  />
                  <GarminStat
                    label="Duration"
                    value={formatActivityDuration(latestActivity?.duration_minutes)}
                  />
                  <GarminStat
                    label="Heart rate"
                    value={`${formatNumber(latestActivity?.avg_hr, { dash: "--", digits: 0 })} avg · ${formatNumber(latestActivity?.max_hr, { dash: "--", digits: 0 })} max`}
                  />
                  <GarminStat
                    label="Calories"
                    value={formatNumber(latestActivity?.calories, { dash: "--", digits: 0 })}
                  />
                </div>
                <div className="mt-2 grid gap-2">
                  <GarminStat
                    label="Training effect"
                    value={latestActivity ? trainingBenefit(latestActivity) : "--"}
                  />
                  <GarminStat
                    label="Recovery status"
                    value={`${formatHours(currentFitness?.sleep_hours)} sleep · ${formatTrainingStatus(currentFitness?.training_status)}`}
                  />
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
                      <div className="mb-1 flex justify-between gap-3 text-[10.5px] text-[#9a8d7a]">
                        <span className="truncate">
                          {quest.target_metric || "target"}
                          {quest.progress_source === "auto" ? " - auto" : " - manual"}
                        </span>
                        <span>
                          {formatNumber(quest.computed_current_value, {
                            digits: 1,
                          })}{" "}
                          / {formatNumber(quest.target_value, { digits: 1 })}
                        </span>
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

            <section
              className="scroll-mt-6 border-b border-[#2c2824]/[0.13] py-3.5"
              id="desktop-rituals"
            >
              <div className="mb-3 flex items-center justify-between">
                <SectionKicker>Daily rituals</SectionKicker>
                <span className="zach-display text-[16px] text-[#574e44]">
                  {habitDone} / {habitRows.length}
                </span>
              </div>
              <div className="grid gap-2">
                {habitRows.map((habit) => (
                  <DailyRitual
                    date={today}
                    done={habit.done}
                    key={habit.name}
                    metric={habit.metric}
                    name={habit.name}
                    routineKey={habit.routineKey}
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
      <ZachMobileBottomNav active="dashboard" />
    </main>
  );
}
