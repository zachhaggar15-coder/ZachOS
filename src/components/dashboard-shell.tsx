import Link from "next/link";

import {
  importNetWorthHistory,
  saveQuickDailyEntry,
  saveQuest,
  signOut,
  updatePassword,
  upsertDailyLog,
  upsertFinanceSnapshot,
  upsertFitnessMetrics,
} from "@/app/actions";
import { formatShortDate } from "@/lib/dates";
import type { DatabaseSetupIssue } from "@/lib/database-setup";
import {
  calculateAnalytics,
} from "@/lib/analytics";
import { buildLocalDailyBriefing } from "@/lib/ai-insights";
import {
  calculateAchievements,
  calculateCharacterAttributes,
  calculateLevelProgress,
  calculateQuestProgress,
  nextQuestAction,
  runningDistanceTotal,
} from "@/lib/scoring";
import type {
  Activity,
  DailyLog,
  FinanceSnapshot,
  FitnessMetric,
  Quest,
} from "@/lib/supabase/database.types";

import { DashboardCharts } from "@/components/dashboard-charts";
import { DatabaseSetupNotice } from "@/components/database-setup-notice";
import { PendingSubmitButton } from "@/components/pending-submit-button";

type DashboardShellProps = {
  activities: Activity[];
  dailyLogs: DailyLog[];
  databaseSetupIssue?: DatabaseSetupIssue | null;
  error?: string;
  financeSnapshots: FinanceSnapshot[];
  fitnessMetrics: FitnessMetric[];
  message?: string;
  quests: Quest[];
  today: string;
  userEmail?: string;
};

type FieldProps = {
  defaultValue?: number | string | null;
  label: string;
  max?: number;
  min?: number;
  name: string;
  placeholder?: string;
  required?: boolean;
  step?: string;
  type?: string;
};

const cardClass = "rounded-md border border-[#2c2824]/[0.13] bg-[#fffaf2] p-4";
const inputClass =
  "h-10 rounded-md border border-[#d2c8b8] bg-white px-3 text-sm text-[#2c2824] outline-none transition placeholder:text-[#9a8d7a] focus:border-[#bb5d3a]/70 focus:ring-2 focus:ring-[#bb5d3a]/10";

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

function formatNumber(value: number | null | undefined, suffix = "") {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return "--";
  }

  return `${Number.isInteger(value) ? value : value.toFixed(1)}${suffix}`;
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

function isRunningActivity(activity: Activity) {
  const type = activity.activity_type?.toLowerCase() ?? "";
  return (
    !type ||
    type.includes("run") ||
    type.includes("jog") ||
    type.includes("treadmill")
  );
}

function dateToNoon(date: string) {
  return new Date(`${date}T12:00:00Z`);
}

function weekStart(date: string) {
  const value = dateToNoon(date);
  const day = value.getUTCDay() || 7;
  value.setUTCDate(value.getUTCDate() - day + 1);
  return value.toISOString().slice(0, 10);
}

function monthLabel(month: string) {
  return new Intl.DateTimeFormat("en-GB", {
    month: "short",
    year: "2-digit",
  }).format(new Date(`${month}-01T12:00:00Z`));
}

function Field({
  defaultValue,
  label,
  max,
  min,
  name,
  placeholder,
  required,
  step,
  type = "number",
}: FieldProps) {
  return (
    <label className="grid gap-1.5 text-sm text-[#3a342c]">
      {label}
      <input
        className={inputClass}
        defaultValue={defaultValue ?? ""}
        max={max}
        min={min}
        name={name}
        placeholder={placeholder}
        required={required}
        step={step}
        type={type}
      />
    </label>
  );
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
    <article className={cardClass}>
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

function SectionHeader({
  kicker,
  title,
}: {
  kicker: string;
  title: string;
}) {
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

function AccountSecurity({ userEmail }: { userEmail?: string }) {
  return (
    <section className={cardClass}>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <SectionHeader kicker="Account" title="Password access" />
          <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">
            Set a password once, then use the normal email and password login
            instead of waiting for a sign-in email each time.
          </p>
          <p className="mt-2 text-xs text-zinc-500">
            Signed in as {userEmail ?? "private user"}.
          </p>
        </div>
        <form
          action={updatePassword}
          className="grid w-full gap-3 sm:grid-cols-2 lg:max-w-xl"
        >
          <label className="grid gap-1.5 text-sm text-zinc-300">
            New password
            <input
              autoComplete="new-password"
              className={inputClass}
              minLength={8}
              name="password"
              required
              type="password"
            />
          </label>
          <label className="grid gap-1.5 text-sm text-zinc-300">
            Confirm password
            <input
              autoComplete="new-password"
              className={inputClass}
              minLength={8}
              name="confirm_password"
              required
              type="password"
            />
          </label>
          <button
            className="h-10 rounded bg-cyan-200 px-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100 sm:col-span-2"
            type="submit"
          >
            Set password
          </button>
        </form>
      </div>
    </section>
  );
}

function DashboardDisclosure({
  children,
  defaultOpen = false,
  summary,
  title,
}: {
  children: React.ReactNode;
  defaultOpen?: boolean;
  summary: string;
  title: string;
}) {
  return (
    <details
      className="group rounded border border-white/10 bg-white/[0.03] transition hover:border-cyan-200/25 open:bg-white/[0.045]"
      open={defaultOpen}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 [&::-webkit-details-marker]:hidden">
        <div>
          <h2 className="text-base font-semibold text-white">{title}</h2>
          <p className="mt-1 text-sm text-zinc-500">{summary}</p>
        </div>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded border border-white/10 bg-black/20 text-lg text-cyan-100 transition group-open:rotate-45">
          +
        </span>
      </summary>
      <div className="border-t border-white/10 p-4">{children}</div>
    </details>
  );
}

function chartPoints<T extends { date: string }>(
  rows: T[],
  getValue: (row: T) => number | null,
) {
  return rows.map((row) => ({
    date: formatShortDate(row.date),
    value: getValue(row),
  }));
}

function aggregateWeeklyRunning(activities: Activity[]) {
  const byWeek = new Map<string, number>();

  activities.filter(isRunningActivity).forEach((activity) => {
    const key = weekStart(activity.date);
    byWeek.set(key, (byWeek.get(key) ?? 0) + numeric(activity.distance_km));
  });

  return Array.from(byWeek.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, value]) => ({ date: `W/c ${formatShortDate(date)}`, value }));
}

function aggregateMonthlyRunning(activities: Activity[]) {
  const byMonth = new Map<string, number>();

  activities.filter(isRunningActivity).forEach((activity) => {
    const key = activity.date.slice(0, 7);
    byMonth.set(key, (byMonth.get(key) ?? 0) + numeric(activity.distance_km));
  });

  return Array.from(byMonth.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, value]) => ({ date: monthLabel(month), value }));
}

function averageHrTrend(activities: Activity[]) {
  const byDate = new Map<string, number[]>();

  activities.forEach((activity) => {
    const hr = numeric(activity.avg_hr);
    if (!hr) {
      return;
    }
    byDate.set(activity.date, [...(byDate.get(activity.date) ?? []), hr]);
  });

  return Array.from(byDate.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, values]) => ({
      date: formatShortDate(date),
      value: values.reduce((total, value) => total + value, 0) / values.length,
    }));
}

function sleepMoodPoints(dailyLogs: DailyLog[], fitnessMetrics: FitnessMetric[]) {
  const fitnessByDate = new Map(fitnessMetrics.map((metric) => [metric.date, metric]));

  return dailyLogs
    .map((log) => {
      const fitness = fitnessByDate.get(log.date);
      const mood = numeric(log.mood_score);
      const sleepScore = numeric(fitness?.sleep_score);

      return sleepScore && mood
        ? { label: formatShortDate(log.date), x: sleepScore, y: mood }
        : null;
    })
    .filter((point): point is { label: string; x: number; y: number } => !!point);
}

function hrvTrainingLoadPoints(
  activities: Activity[],
  fitnessMetrics: FitnessMetric[],
) {
  const runningByWeek = new Map<string, number>();
  activities.filter(isRunningActivity).forEach((activity) => {
    const key = weekStart(activity.date);
    runningByWeek.set(key, (runningByWeek.get(key) ?? 0) + numeric(activity.distance_km));
  });

  const trainingLoadByWeek = new Map<string, number[]>();
  const hrvByWeek = new Map<string, number[]>();
  fitnessMetrics.forEach((metric) => {
    const hrv = numeric(metric.hrv);
    const trainingLoad = numeric(metric.training_load);
    const key = weekStart(metric.date);

    if (trainingLoad) {
      trainingLoadByWeek.set(key, [
        ...(trainingLoadByWeek.get(key) ?? []),
        trainingLoad,
      ]);
    }

    if (!hrv) {
      return;
    }
    hrvByWeek.set(key, [...(hrvByWeek.get(key) ?? []), hrv]);
  });

  return Array.from(hrvByWeek.entries()).map(([week, values]) => {
    const trainingLoadValues = trainingLoadByWeek.get(week) ?? [];
    const trainingLoad = trainingLoadValues.length
      ? trainingLoadValues.reduce((total, value) => total + value, 0) /
        trainingLoadValues.length
      : runningByWeek.get(week) ?? 0;

    return {
      label: `W/c ${formatShortDate(week)}`,
      x: trainingLoad,
      y: values.reduce((total, value) => total + value, 0) / values.length,
    };
  });
}

function QuickEntryForm({
  fitness,
  today,
  todayLog,
}: {
  fitness: FitnessMetric | null;
  today: string;
  todayLog: DailyLog | null;
}) {
  return (
    <form
      action={saveQuickDailyEntry}
      className="rounded border border-cyan-200/20 bg-gradient-to-br from-cyan-200/[0.08] to-white/[0.025] p-5"
    >
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <SectionHeader kicker="Quick add" title="Daily check-in" />
          <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-400">
            One form for the normal daily flow: habits, recovery score, and
            writing practice. Empty fields keep existing values for that date.
          </p>
        </div>
        <button
          className="h-10 rounded bg-cyan-200 px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
          type="submit"
        >
          Save check-in
        </button>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Field
          defaultValue={todayLog?.date ?? today}
          label="Date"
          name="date"
          type="date"
        />
        <Field
          defaultValue={todayLog?.mood_score}
          label="Mood"
          max={10}
          min={1}
          name="mood_score"
        />
        <Field
          defaultValue={todayLog?.deep_work_hours}
          label="Deep work hours"
          min={0}
          name="deep_work_hours"
          step="0.25"
        />
        <Field
          defaultValue={todayLog?.french_minutes}
          label="French minutes"
          min={0}
          name="french_minutes"
        />
        <Field
          defaultValue={todayLog?.reading_pages}
          label="Reading pages"
          min={0}
          name="reading_pages"
        />
        <Field
          defaultValue={fitness?.sleep_score}
          label="Sleep score"
          min={0}
          name="sleep_score"
          step="0.1"
        />
        <Field defaultValue={fitness?.hrv} label="HRV" min={0} name="hrv" />
        <Field
          defaultValue={fitness?.resting_hr}
          label="Resting HR"
          min={0}
          name="resting_hr"
        />
        <Field
          defaultValue={todayLog?.writing_minutes}
          label="Writing minutes"
          min={0}
          name="writing_minutes"
        />
        <label className="grid gap-1.5 text-sm text-zinc-300 sm:col-span-2 lg:col-span-4">
          Daily notes
          <textarea
            className="min-h-20 rounded border border-white/10 bg-black/20 px-3 py-2 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-cyan-300/70 focus:bg-white/[0.06]"
            defaultValue={todayLog?.notes ?? ""}
            name="notes"
            placeholder="Context, wins, friction..."
          />
        </label>
      </div>
    </form>
  );
}

function UpdateForms({
  finance,
  fitness,
  today,
  todayLog,
}: {
  finance: FinanceSnapshot | null;
  fitness: FitnessMetric | null;
  today: string;
  todayLog: DailyLog | null;
}) {
  return (
    <section className="grid gap-4 xl:grid-cols-4">
      <form action={upsertDailyLog} className={cardClass}>
        <SectionHeader kicker="Manual input" title="Daily log" />
        <div className="mt-4 grid gap-3">
          <Field
            defaultValue={todayLog?.date ?? today}
            label="Date"
            name="date"
            type="date"
          />
          <Field
            defaultValue={todayLog?.mood_score}
            label="Mood score"
            max={10}
            min={1}
            name="mood_score"
          />
          <Field
            defaultValue={todayLog?.deep_work_hours}
            label="Deep work hours"
            min={0}
            name="deep_work_hours"
            step="0.25"
          />
          <Field
            defaultValue={todayLog?.french_minutes}
            label="French minutes"
            min={0}
            name="french_minutes"
          />
          <Field
            defaultValue={todayLog?.reading_pages}
            label="Reading pages"
            min={0}
            name="reading_pages"
          />
          <label className="grid gap-1.5 text-sm text-zinc-300">
            Notes
            <textarea
              className="min-h-24 rounded border border-white/10 bg-black/20 px-3 py-2 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-cyan-300/70 focus:bg-white/[0.06]"
              defaultValue={todayLog?.notes ?? ""}
              name="notes"
              placeholder="Useful context, wins, friction..."
            />
          </label>
          <PendingSubmitButton
            className="h-10 rounded bg-cyan-200 px-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
          >
            Save daily log
          </PendingSubmitButton>
        </div>
      </form>

      <form action={upsertFitnessMetrics} className={cardClass}>
        <SectionHeader kicker="Manual input" title="Fitness metrics" />
        <div className="mt-4 grid gap-3">
          <Field
            defaultValue={fitness?.date ?? today}
            label="Date"
            name="date"
            type="date"
          />
          <Field
            defaultValue={fitness?.sleep_score}
            label="Sleep score"
            min={0}
            name="sleep_score"
            step="0.1"
          />
          <Field defaultValue={fitness?.hrv} label="HRV" min={0} name="hrv" />
          <Field
            defaultValue={fitness?.resting_hr}
            label="Resting HR"
            min={0}
            name="resting_hr"
          />
          <p className="text-xs leading-5 text-zinc-500">
            Training status and running distance are intentionally left for
            Garmin or Strava imports.
          </p>
          <button
            className="h-10 rounded bg-cyan-200 px-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
            type="submit"
          >
            Save fitness
          </button>
        </div>
      </form>

      <form action={upsertFinanceSnapshot} className={cardClass}>
        <SectionHeader kicker="Manual input" title="Finance snapshot" />
        <div className="mt-4 grid gap-3">
          <Field
            defaultValue={finance?.date ?? today}
            label="Date"
            name="date"
            type="date"
          />
          <Field
            defaultValue={finance?.cash_gbp}
            label="Cash GBP"
            name="cash_gbp"
            step="0.01"
          />
          <Field
            defaultValue={finance?.isa_gbp}
            label="ISA GBP"
            name="isa_gbp"
            step="0.01"
          />
          <Field
            defaultValue={finance?.lifetime_isa_gbp}
            label="Lifetime ISA GBP"
            name="lifetime_isa_gbp"
            step="0.01"
          />
          <Field
            defaultValue={finance?.invested_gbp}
            label="Invested GBP"
            name="invested_gbp"
            step="0.01"
          />
          <Field
            defaultValue={finance?.net_worth_gbp}
            label="Net worth GBP"
            name="net_worth_gbp"
            step="0.01"
          />
          <Field
            defaultValue={finance?.net_worth_change_percent}
            label="Net worth change %"
            name="net_worth_change_percent"
            step="0.00001"
          />
          <p className="text-xs leading-5 text-zinc-500">
            Leave invested blank to derive it from ISA plus Lifetime ISA. Leave
            net worth blank to derive it from cash plus invested.
          </p>
          <button
            className="h-10 rounded bg-cyan-200 px-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
            type="submit"
          >
            Save finance
          </button>
        </div>
      </form>

      <form action={importNetWorthHistory} className={cardClass}>
        <SectionHeader kicker="Finance" title="Import snapshot history" />
        <p className="mt-4 text-sm leading-6 text-zinc-400">
          Imports the net worth table from your screenshot: ISA, Lifetime ISA,
          total net worth and percent change from February 2024 to June 2026.
        </p>
        <button
          className="mt-5 h-10 rounded bg-cyan-200 px-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
          type="submit"
        >
          Import 31 net worth rows
        </button>
        <p className="mt-3 text-xs leading-5 text-zinc-500">
          Safe to rerun. Existing dates are updated rather than duplicated.
        </p>
      </form>
    </section>
  );
}

function QuestForm() {
  return (
    <form action={saveQuest} className={cardClass}>
      <SectionHeader kicker="Quests" title="Create quest" />
      <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        <Field
          label="Title"
          name="title"
          placeholder="Run Wales"
          required
          type="text"
        />
        <Field
          label="Category"
          name="category"
          placeholder="Fitness"
          type="text"
        />
        <Field
          label="Target metric"
          name="target_metric"
          placeholder="running km, invested, French"
          type="text"
        />
        <Field label="Target value" min={0} name="target_value" step="0.1" />
        <Field
          label="Manual current override"
          min={0}
          name="current_value"
          step="0.1"
        />
        <Field label="Deadline" name="deadline" type="date" />
        <label className="grid gap-1.5 text-sm text-zinc-300">
          Status
          <select className={inputClass} defaultValue="active" name="status">
            <option value="active">Active</option>
            <option value="paused">Paused</option>
            <option value="complete">Complete</option>
          </select>
        </label>
        <button
          className="h-10 self-end rounded bg-cyan-200 px-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
          type="submit"
        >
          Save quest
        </button>
      </div>
      <p className="mt-3 text-xs text-zinc-500">
        Current value is auto-derived when the target mentions running, deep
        work, French, reading, writing, invested value, net worth,
        sleep or HRV. Use the manual value only as a fallback.
      </p>
    </form>
  );
}

function ActiveQuests({ quests }: { quests: ReturnType<typeof calculateQuestProgress> }) {
  const active = quests.filter(
    (quest) => (quest.status ?? "active").toLowerCase() === "active",
  );

  return (
    <section className="grid gap-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeader kicker="Quests" title="Active quest board" />
        <p className="text-sm text-cyan-100">{nextQuestAction(quests)}</p>
      </div>
      {active.length ? (
        <div className="grid gap-4 lg:grid-cols-2">
          {active.map((quest) => (
            <article className={cardClass} key={quest.id}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-white">{quest.title}</h3>
                  <p className="mt-1 text-xs text-zinc-500">
                    {quest.category || "General"} - {quest.target_metric || "target"}
                    {quest.deadline ? ` - due ${quest.deadline}` : ""}
                  </p>
                  <p className="mt-1 text-xs text-zinc-500">
                    {quest.progress_source === "auto" ? "Auto" : "Manual"} current:{" "}
                    {quest.computed_current_value.toFixed(1)} /{" "}
                    {numeric(quest.target_value).toFixed(1)}
                  </p>
                </div>
                <p className="font-mono text-sm text-cyan-100">
                  {quest.progress}%
                </p>
              </div>
              <div className="mt-4 h-2 rounded bg-white/10">
                <div
                  className="h-2 rounded bg-gradient-to-r from-cyan-200 to-emerald-200"
                  style={{ width: `${quest.progress}%` }}
                />
              </div>
              <form action={saveQuest} className="mt-4 grid gap-2 sm:grid-cols-[1fr_1fr_auto]">
                <input name="id" type="hidden" value={quest.id} />
                <input name="title" type="hidden" value={quest.title} />
                <input name="category" type="hidden" value={quest.category ?? ""} />
                <input
                  name="target_metric"
                  type="hidden"
                  value={quest.target_metric ?? ""}
                />
                <input
                  name="target_value"
                  type="hidden"
                  value={quest.target_value ?? ""}
                />
                <input name="deadline" type="hidden" value={quest.deadline ?? ""} />
                <Field
                  defaultValue={quest.current_value}
                  label="Current"
                  min={0}
                  name="current_value"
                  step="0.1"
                />
                <label className="grid gap-1.5 text-sm text-zinc-300">
                  Status
                  <select
                    className={inputClass}
                    defaultValue={quest.status ?? "active"}
                    name="status"
                  >
                    <option value="active">Active</option>
                    <option value="paused">Paused</option>
                    <option value="complete">Complete</option>
                  </select>
                </label>
                <button
                  className="h-10 self-end rounded border border-white/10 bg-white/[0.04] px-4 text-sm font-semibold text-zinc-100 transition hover:border-cyan-200/30 hover:bg-cyan-300/10"
                  type="submit"
                >
                  Update
                </button>
              </form>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded border border-dashed border-white/15 p-5 text-sm text-zinc-500">
          No active quests yet.
        </div>
      )}
    </section>
  );
}

export function DashboardShell({
  activities,
  dailyLogs,
  databaseSetupIssue,
  error,
  financeSnapshots,
  fitnessMetrics,
  message,
  quests,
  today,
  userEmail,
}: DashboardShellProps) {
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
  const questProgress = calculateQuestProgress(quests, {
    activities,
      dailyLogs,
    financeSnapshots,
    fitnessMetrics,
  });
  const runTotal = runningDistanceTotal(activities);
  const localBriefing = buildLocalDailyBriefing({
    activities,
      dailyLogs,
    financeSnapshots,
    fitnessMetrics,
  });
  const analytics = calculateAnalytics({ activities, dailyLogs, fitnessMetrics });

  return (
    <main className="min-h-screen bg-[#f9f4ec] text-[#2c2824]">
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-4 border-b border-[#2c2824] pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#9a7d5f]">
              Personal operating system
            </p>
            <h1 className="zach-display mt-1 text-[42px] font-medium leading-none tracking-[-0.02em] text-[#111820]">
              Zach OS
            </h1>
            <p className="mt-3 text-sm text-[#8c8273]">
              Signed in as {userEmail ?? "private user"}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              className="inline-flex h-10 items-center rounded-md border border-[#d2c8b8] bg-[#fffaf2] px-4 text-sm font-semibold text-[#2c2824] transition hover:border-[#bb5d3a]/40"
              href="/ai-insights"
            >
              AI Insights
            </Link>
            <Link
              className="inline-flex h-10 items-center rounded-md border border-[#bb5d3a] bg-[#bb5d3a] px-4 text-sm font-semibold text-[#f9f4ec] transition hover:bg-[#a94f31]"
              href="/garmin-import"
            >
              Garmin import
            </Link>
            <Link
              className="inline-flex h-10 items-center rounded-md border border-[#d2c8b8] bg-[#fffaf2] px-4 text-sm font-semibold text-[#2c2824] transition hover:border-[#bb5d3a]/40"
              href="/portfolio"
            >
              Portfolio
            </Link>
            <form action={signOut}>
              <button
                className="h-10 rounded-md border border-[#241f1a] bg-[#241f1a] px-4 text-sm font-semibold text-[#f9f4ec] transition hover:bg-[#3a342c]"
                type="submit"
              >
                Log out
              </button>
            </form>
          </div>
        </header>

        {(error || message) && (
          <div
            className={`rounded border px-4 py-3 text-sm ${
              error
                ? "border-rose-300/25 bg-rose-400/10 text-rose-100"
                : "border-emerald-300/25 bg-emerald-400/10 text-emerald-100"
            }`}
          >
            {error || message}
          </div>
        )}

        {databaseSetupIssue && (
          <DatabaseSetupNotice issue={databaseSetupIssue} />
        )}

        <AccountSecurity userEmail={userEmail} />

        <QuickEntryForm
          fitness={currentFitness}
          today={today}
          todayLog={todayLog}
        />

        <section className="grid gap-6 xl:grid-cols-[1fr_0.82fr]">
          <div>
            <div className="flex items-start justify-between gap-3">
              <SectionHeader kicker="Today" title="Daily command stats" />
              <span className="rounded border border-cyan-200/20 bg-cyan-200/10 px-2 py-1 font-mono text-xs text-cyan-100">
                {today}
              </span>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <MetricCard
                label="Mood"
                meta={todayLog ? "Logged today" : "No log for today"}
                value={formatNumber(todayLog?.mood_score)}
              />
              <MetricCard
                label="Deep work"
                value={formatNumber(todayLog?.deep_work_hours, "h")}
              />
              <MetricCard
                label="French"
                value={formatNumber(todayLog?.french_minutes, "m")}
              />
              <MetricCard
                label="Reading"
                value={formatNumber(todayLog?.reading_pages, " pages")}
              />
            </div>
          </div>

          <div className={cardClass}>
            <div className="flex items-start justify-between gap-4">
              <SectionHeader kicker="Character sheet" title="Level progress" />
              <div className="text-right">
                <p className="font-mono text-3xl font-semibold text-cyan-100">
                  Lv {level.level}
                </p>
                <p className="text-xs text-zinc-500">
                  {level.totalXp.toLocaleString("en-GB")} XP
                </p>
              </div>
            </div>
            <div className="mt-4">
              <div className="mb-1 flex items-center justify-between text-xs text-zinc-500">
                <span>{level.currentLevelXp} XP</span>
                <span>{level.nextLevelXp} XP</span>
              </div>
              <div className="h-2 rounded bg-white/10">
                <div
                  className="h-2 rounded bg-gradient-to-r from-cyan-200 to-emerald-200"
                  style={{ width: `${level.progress}%` }}
                />
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-zinc-400">
              Detailed attributes, achievements, and charts are tucked into the
              sections below so this page stays readable at a glance.
            </p>
          </div>
        </section>

        <section className="grid gap-4 xl:grid-cols-[1fr_0.85fr]">
          <article className="rounded border border-cyan-200/20 bg-gradient-to-br from-cyan-200/[0.09] to-white/[0.025] p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <SectionHeader kicker="AI Insights" title="Today’s Briefing" />
              <Link
                className="inline-flex h-9 items-center rounded border border-cyan-200/25 bg-cyan-200/10 px-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-200/15"
                href="/ai-insights"
              >
                Generate AI summary
              </Link>
            </div>
            <div className="mt-4 space-y-2 text-sm leading-6 text-zinc-300">
              {localBriefing
                .split("\n")
                .slice(0, 6)
                .map((line) => (
                  <p key={line}>{line}</p>
                ))}
            </div>
            <p className="mt-4 text-xs text-zinc-500">
              Local briefing shown here. Open AI Insights to generate OpenAI
              daily and weekly summaries when `OPENAI_API_KEY` is configured.
            </p>
          </article>

          <article className={cardClass}>
            <SectionHeader kicker="Analytics" title="Quick read" />
            <div className="mt-4 grid gap-3">
              <div className="rounded border border-white/10 bg-black/15 p-3">
                <p className="text-xs text-zinc-500">Best mood day</p>
                <p className="mt-1 font-medium text-zinc-100">
                  {analytics.bestMoodDay}
                </p>
              </div>
              {analytics.relationships.map((relationship) => (
                <div
                  className="rounded border border-white/10 bg-black/15 p-3"
                  key={relationship.label}
                >
                  <p className="text-xs text-zinc-500">{relationship.label}</p>
                  <p className="mt-1 text-sm text-zinc-200">
                    {relationship.note}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="grid gap-3">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader kicker="Explore" title="Dashboard sections" />
            <p className="text-sm text-zinc-500">
              Click a section to open the deeper view.
            </p>
          </div>

          <DashboardDisclosure
            summary={`Endurance ${attributes[0]?.value ?? 0}, Recovery ${
              attributes[1]?.value ?? 0
            }, Discipline ${attributes[2]?.value ?? 0}`}
            title="Character attributes"
          >
            <div className="grid gap-4">
              {attributes.map((attribute) => (
                <div key={attribute.label}>
                  <div className="mb-1.5 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium text-zinc-100">
                        {attribute.label}
                      </p>
                      <p className="text-xs text-zinc-500">{attribute.detail}</p>
                    </div>
                    <p className="font-mono text-sm text-cyan-100">
                      {attribute.value}
                    </p>
                  </div>
                  <div className="h-2 rounded bg-white/10">
                    <div
                      className="h-2 rounded bg-gradient-to-r from-cyan-200 to-emerald-200"
                      style={{ width: `${attribute.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </DashboardDisclosure>

          <DashboardDisclosure
            summary={`${formatNumber(currentFitness?.sleep_score)} sleep score, ${formatNumber(
              currentFitness?.hrv,
            )} HRV, ${formatNumber(runTotal, " km")} running imported`}
            title="Fitness and recovery"
          >
            <section className="grid gap-6 lg:grid-cols-2">
              <div>
                <SectionHeader kicker="Fitness" title="Recovery and training" />
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <MetricCard
                    label="Sleep score"
                    meta={currentFitness?.date}
                    value={formatNumber(currentFitness?.sleep_score)}
                  />
                  <MetricCard
                    label="HRV"
                    meta={currentFitness?.date}
                    value={formatNumber(currentFitness?.hrv)}
                  />
                  <MetricCard
                    label="Running imported"
                    meta={`${activities.length} activities`}
                    value={formatNumber(runTotal, " km")}
                  />
                  <MetricCard
                    label="Resting HR"
                    meta={currentFitness?.date}
                    value={formatNumber(currentFitness?.resting_hr)}
                  />
                </div>
              </div>

              <div>
                <SectionHeader kicker="Finance" title="Capital snapshot" />
                <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  <MetricCard
                    label="Cash"
                    meta={currentFinance?.date}
                    value={formatCurrency(currentFinance?.cash_gbp)}
                  />
                  <MetricCard
                    label="ISA"
                    meta={currentFinance?.date}
                    value={formatCurrency(currentFinance?.isa_gbp)}
                  />
                  <MetricCard
                    label="Lifetime ISA"
                    meta={currentFinance?.date}
                    value={formatCurrency(currentFinance?.lifetime_isa_gbp)}
                  />
                  <MetricCard
                    label="Invested"
                    meta={currentFinance?.date}
                    value={formatCurrency(currentFinance?.invested_gbp)}
                  />
                  <MetricCard
                    label="Net worth"
                    meta={currentFinance?.date}
                    value={formatCurrency(currentFinance?.net_worth_gbp)}
                  />
                  <MetricCard
                    label="Change"
                    meta={currentFinance?.date}
                    value={formatPercent(currentFinance?.net_worth_change_percent)}
                  />
                </div>
              </div>
            </section>
          </DashboardDisclosure>

          <DashboardDisclosure
            summary={`${questProgress.filter((quest) => (quest.status ?? "active").toLowerCase() === "active").length} active quests - ${nextQuestAction(
              questProgress,
            )}`}
            title="Quests"
          >
            <div className="grid gap-5">
              <ActiveQuests quests={questProgress} />
              <QuestForm />
            </div>
          </DashboardDisclosure>

          <DashboardDisclosure
            summary={`${achievements.filter((achievement) => achievement.earned).length}/${achievements.length} badges earned`}
            title="Achievements"
          >
            <section>
              <SectionHeader kicker="Achievements" title="Badges" />
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {achievements.map((achievement) => (
                  <article
                    className={`rounded border p-4 ${
                      achievement.earned
                        ? "border-emerald-200/25 bg-emerald-300/10"
                        : "border-white/10 bg-white/[0.03]"
                    }`}
                    key={achievement.label}
                  >
                    <p className="text-sm font-semibold text-zinc-100">
                      {achievement.label}
                    </p>
                    <p className="mt-2 text-xs text-zinc-500">
                      {achievement.progress}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </DashboardDisclosure>

          <DashboardDisclosure
            summary="Mood, sleep score, HRV, running, finance, and relationship charts"
            title="Charts and trends"
          >
            <DashboardCharts
              averageHr={averageHrTrend(activities)}
              hrv={chartPoints(fitnessMetrics, (row) => row.hrv)}
              hrvTrainingLoad={hrvTrainingLoadPoints(activities, fitnessMetrics)}
              monthlyRunning={aggregateMonthlyRunning(activities)}
              mood={chartPoints(dailyLogs, (row) => row.mood_score)}
              netWorth={chartPoints(financeSnapshots, (row) => row.net_worth_gbp)}
              sleep={chartPoints(fitnessMetrics, (row) => row.sleep_score)}
              sleepMood={sleepMoodPoints(dailyLogs, fitnessMetrics)}
              weeklyRunning={aggregateWeeklyRunning(activities)}
            />
          </DashboardDisclosure>

          <DashboardDisclosure
            summary="Add or update today's daily log, fitness metrics, and finance snapshot"
            title="Advanced manual input"
          >
            <UpdateForms
              finance={currentFinance}
              fitness={currentFitness}
              today={today}
              todayLog={todayLog}
            />
          </DashboardDisclosure>

          <DashboardDisclosure
            summary="Upload a full Garmin export ZIP or map CSV files manually"
            title="Garmin import"
          >
            <section className="rounded border border-dashed border-cyan-200/25 bg-cyan-200/[0.035] p-5">
              <SectionHeader kicker="Garmin" title="Garmin Import" />
              <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">
                Full export ZIP import and CSV mapping are live. Upload Garmin
                data to Zach OS without storing Garmin credentials or scraping
                Garmin Connect.
              </p>
              <Link
                className="mt-4 inline-flex h-10 items-center rounded bg-cyan-200 px-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
                href="/garmin-import"
              >
                Import Garmin data
              </Link>
            </section>
          </DashboardDisclosure>
        </section>
      </div>
    </main>
  );
}
