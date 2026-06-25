import Link from "next/link";
import { notFound } from "next/navigation";

import { AuthPanel } from "@/components/auth-panel";
import { DatabaseSetupNotice } from "@/components/database-setup-notice";
import {
  friendlyDatabaseError,
  getDatabaseSetupIssue,
} from "@/lib/database-setup";
import { sortByDateAscending } from "@/lib/data-shaping";
import { formatShortDate } from "@/lib/dates";
import { getSupabaseConfig } from "@/lib/supabase/config";
import type {
  Activity,
  DailyLog,
  FinanceSnapshot,
  FitnessMetric,
} from "@/lib/supabase/database.types";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

type ChartPageProps = {
  params: Promise<{ chart: string }>;
  searchParams: Promise<{ error?: string; message?: string }>;
};

type TableCell = number | string | null;
type TableRow = Record<string, TableCell>;
type TableView = {
  description: string;
  rows: TableRow[];
  title: string;
};

const CHART_TITLES: Record<string, string> = {
  "average-hr": "Average HR trend",
  "finance-hr": "Net worth and average HR",
  "hrv": "HRV over time",
  "hrv-training-load": "HRV versus training load",
  "monthly-running": "Monthly running distance",
  "mood": "Mood over time",
  "net-worth": "Net worth over time",
  "recovery": "Sleep score and HRV",
  "running-distance": "Running distance",
  "sleep": "Sleep score over time",
  "sleep-mood": "Sleep score versus mood",
  "weekly-running": "Weekly running distance",
};

function SetupRequired() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#07090d] px-4 text-zinc-100">
      <section className="w-full max-w-2xl rounded border border-white/10 bg-white/[0.035] p-8">
        <p className="font-mono text-xs uppercase tracking-[0.32em] text-cyan-200/80">
          Setup required
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white">
          Connect Supabase to inspect chart data
        </h1>
        <p className="mt-3 text-sm leading-6 text-zinc-400">
          Add your Supabase environment variables and run the SQL schema before
          opening chart drilldowns.
        </p>
      </section>
    </main>
  );
}

function numeric(value: number | null | undefined) {
  return typeof value === "number" && Number.isFinite(value) ? value : 0;
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
    month: "long",
    year: "numeric",
  }).format(new Date(`${month}-01T12:00:00Z`));
}

function averageHrByDate(activities: Activity[]) {
  const byDate = new Map<string, number[]>();

  activities.forEach((activity) => {
    const hr = numeric(activity.avg_hr);
    if (hr) {
      byDate.set(activity.date, [...(byDate.get(activity.date) ?? []), hr]);
    }
  });

  return byDate;
}

function aggregateRunning(
  activities: Activity[],
  groupDate: (date: string) => string,
) {
  const byDate = new Map<string, number>();

  activities.filter(isRunningActivity).forEach((activity) => {
    const key = groupDate(activity.date);
    byDate.set(key, (byDate.get(key) ?? 0) + numeric(activity.distance_km));
  });

  return Array.from(byDate.entries()).sort(([a], [b]) => a.localeCompare(b));
}

function buildTableView(
  chart: string,
  data: {
    activities: Activity[];
    dailyLogs: DailyLog[];
    financeSnapshots: FinanceSnapshot[];
    fitnessMetrics: FitnessMetric[];
  },
): TableView | null {
  const title = CHART_TITLES[chart];
  if (!title) {
    return null;
  }

  if (chart === "mood") {
    return {
      description: "Daily mood scores from manual logs.",
      rows: data.dailyLogs.map((log) => ({
        Date: log.date,
        Mood: log.mood_score,
        Notes: log.notes,
      })),
      title,
    };
  }

  if (chart === "sleep") {
    return {
      description: "Sleep score rows from manual entry or Garmin import.",
      rows: data.fitnessMetrics.map((metric) => ({
        Date: metric.date,
        "Sleep score": metric.sleep_score,
      })),
      title,
    };
  }

  if (chart === "hrv") {
    return {
      description: "HRV rows from manual entry or Garmin import.",
      rows: data.fitnessMetrics.map((metric) => ({
        Date: metric.date,
        HRV: metric.hrv,
      })),
      title,
    };
  }

  if (chart === "recovery") {
    return {
      description: "Combined recovery inputs used by the dashboard chart.",
      rows: data.fitnessMetrics.map((metric) => ({
        Date: metric.date,
        HRV: metric.hrv,
        "Resting HR": metric.resting_hr,
        "Sleep score": metric.sleep_score,
        "Training load": metric.training_load,
      })),
      title,
    };
  }

  if (chart === "running-distance") {
    return {
      description: "Running activities imported from Garmin, Strava or manual CSV.",
      rows: data.activities.filter(isRunningActivity).map((activity) => ({
        Date: activity.date,
        Type: activity.activity_type,
        "Distance km": activity.distance_km,
        "Duration min": activity.duration_minutes,
        "Average HR": activity.avg_hr,
        Source: activity.source,
        "External ID": activity.external_id,
        Notes: activity.notes,
      })),
      title,
    };
  }

  if (chart === "weekly-running") {
    return {
      description: "Weekly running distance aggregated from activity rows.",
      rows: aggregateRunning(data.activities, weekStart).map(([week, value]) => ({
        "Week starting": week,
        "Distance km": value,
      })),
      title,
    };
  }

  if (chart === "monthly-running") {
    return {
      description: "Monthly running distance aggregated from activity rows.",
      rows: aggregateRunning(data.activities, (date) => date.slice(0, 7)).map(
        ([month, value]) => ({
          Month: monthLabel(month),
          "Distance km": value,
        }),
      ),
      title,
    };
  }

  if (chart === "net-worth") {
    return {
      description: "Finance snapshots used by net worth charts.",
      rows: data.financeSnapshots.map((snapshot) => ({
        Cash: snapshot.cash_gbp,
        Date: snapshot.date,
        Invested: snapshot.invested_gbp,
        ISA: snapshot.isa_gbp,
        "Lifetime ISA": snapshot.lifetime_isa_gbp,
        "Net worth": snapshot.net_worth_gbp,
      })),
      title,
    };
  }

  if (chart === "average-hr") {
    return {
      description: "Activity rows with average heart-rate values.",
      rows: data.activities
        .filter((activity) => activity.avg_hr !== null)
        .map((activity) => ({
          Date: activity.date,
          Type: activity.activity_type,
          "Average HR": activity.avg_hr,
          "Max HR": activity.max_hr,
          Source: activity.source,
        })),
      title,
    };
  }

  if (chart === "finance-hr") {
    const hrByDate = averageHrByDate(data.activities);

    return {
      description: "Net worth rows with same-day activity HR averages when present.",
      rows: data.financeSnapshots.map((snapshot) => {
        const hrValues = hrByDate.get(snapshot.date) ?? [];

        return {
          "Average HR": hrValues.length
            ? hrValues.reduce((total, value) => total + value, 0) /
              hrValues.length
            : null,
          Date: snapshot.date,
          "Net worth": snapshot.net_worth_gbp,
        };
      }),
      title,
    };
  }

  if (chart === "sleep-mood") {
    const fitnessByDate = new Map(
      data.fitnessMetrics.map((metric) => [metric.date, metric]),
    );

    return {
      description: "Dates where both sleep score and mood are available.",
      rows: data.dailyLogs
        .map((log) => {
          const fitness = fitnessByDate.get(log.date);

          return {
            Date: log.date,
            Mood: log.mood_score,
            "Sleep score": fitness?.sleep_score ?? null,
          };
        })
        .filter((row) => row.Mood !== null && row["Sleep score"] !== null),
      title,
    };
  }

  if (chart === "hrv-training-load") {
    const runningByWeek = new Map(
      aggregateRunning(data.activities, weekStart).map(([week, distance]) => [
        week,
        distance,
      ]),
    );

    return {
      description:
        "HRV with Garmin training load where present, falling back to weekly running distance for context.",
      rows: data.fitnessMetrics.map((metric) => {
        const week = weekStart(metric.date);

        return {
          Date: metric.date,
          HRV: metric.hrv,
          "Training load": metric.training_load,
          "Week running km": runningByWeek.get(week) ?? null,
          "Week starting": week,
        };
      }),
      title,
    };
  }

  return null;
}

function formatCell(value: TableCell) {
  if (typeof value === "number") {
    return Number.isInteger(value) ? value.toString() : value.toFixed(2);
  }

  return value || "--";
}

export default async function ChartDataPage({
  params,
  searchParams,
}: ChartPageProps) {
  const [{ chart }, query] = await Promise.all([params, searchParams]);

  if (!CHART_TITLES[chart]) {
    notFound();
  }

  if (!getSupabaseConfig()) {
    return <SetupRequired />;
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <AuthPanel error={query.error} message={query.message} />;
  }

  const [dailyLogs, fitnessMetrics, financeSnapshots, activities] =
    await Promise.all([
      supabase
        .from("daily_logs")
        .select("*")
        .eq("user_id", user.id)
        .order("date", { ascending: false })
        .limit(1000),
      supabase
        .from("fitness_metrics")
        .select("*")
        .eq("user_id", user.id)
        .order("date", { ascending: false })
        .limit(1000),
      supabase
        .from("finance_snapshots")
        .select("*")
        .eq("user_id", user.id)
        .order("date", { ascending: false })
        .limit(1000),
      supabase
        .from("activities")
        .select("*")
        .eq("user_id", user.id)
        .order("date", { ascending: false })
        .limit(3000),
    ]);

  const queryErrors = [
    dailyLogs.error,
    fitnessMetrics.error,
    financeSnapshots.error,
    activities.error,
  ];
  const databaseSetupIssue = getDatabaseSetupIssue(queryErrors);
  const dataError = databaseSetupIssue === null ? queryErrors.find(Boolean) : null;
  const view = buildTableView(chart, {
    activities: sortByDateAscending(activities.data ?? []),
    dailyLogs: sortByDateAscending(dailyLogs.data ?? []),
    financeSnapshots: sortByDateAscending(financeSnapshots.data ?? []),
    fitnessMetrics: sortByDateAscending(fitnessMetrics.data ?? []),
  });

  if (!view) {
    notFound();
  }

  const columns = Array.from(
    new Set(view.rows.flatMap((row) => Object.keys(row))),
  );

  return (
    <main className="min-h-screen bg-[#07090d] text-zinc-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.13),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(16,185,129,0.1),transparent_26%)]" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-4 border-b border-white/10 pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-cyan-200/80">
              Chart data
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white">
              {view.title}
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
              {view.description}
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

        {dataError && (
          <div className="rounded border border-rose-300/25 bg-rose-400/10 px-4 py-3 text-sm text-rose-100">
            {friendlyDatabaseError(dataError)}
          </div>
        )}

        {databaseSetupIssue ? (
          <DatabaseSetupNotice issue={databaseSetupIssue} />
        ) : (
          <section className="rounded border border-white/10 bg-white/[0.035] p-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-cyan-200/70">
                  Data table
                </p>
                <h2 className="mt-1 text-lg font-semibold text-white">
                  {view.rows.length} rows
                </h2>
              </div>
              <p className="text-sm text-zinc-500">
                Last refreshed {formatShortDate(new Date().toISOString().slice(0, 10))}
              </p>
            </div>

            {view.rows.length ? (
              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead className="text-xs uppercase tracking-[0.16em] text-zinc-500">
                    <tr>
                      {columns.map((column) => (
                        <th
                          className="whitespace-nowrap border-b border-white/10 px-3 py-2"
                          key={column}
                        >
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="text-zinc-300">
                    {view.rows.map((row, index) => (
                      <tr className="border-b border-white/5" key={index}>
                        {columns.map((column) => (
                          <td className="whitespace-nowrap px-3 py-2" key={column}>
                            {formatCell(row[column])}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="mt-4 rounded border border-dashed border-white/15 p-6 text-sm text-zinc-500">
                No rows yet for this chart.
              </div>
            )}
          </section>
        )}
      </div>
    </main>
  );
}
