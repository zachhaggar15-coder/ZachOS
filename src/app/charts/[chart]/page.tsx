import { notFound } from "next/navigation";

import { AuthPanel } from "@/components/auth-panel";
import {
  ZachButtonLink,
  ZachDatabaseSetupNotice,
  ZachNotice,
  ZachPageShell,
  ZachPanel,
  ZachSetupRequired,
  ZachTable,
} from "@/components/zach-shell";
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
  return <ZachSetupRequired title="Connect Supabase to inspect chart data" />;
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
    <ZachPageShell
      actions={
        <>
          <ZachButtonLink href="/">Dashboard</ZachButtonLink>
          <ZachButtonLink href="/manage">Manage</ZachButtonLink>
        </>
      }
      subtitle={view.description}
      title={view.title}
      userEmail={user.email}
    >
        {dataError && (
          <ZachNotice tone="error">
            {friendlyDatabaseError(dataError)}
          </ZachNotice>
        )}

        {databaseSetupIssue ? (
          <ZachDatabaseSetupNotice issue={databaseSetupIssue} />
        ) : (
          <ZachPanel>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                  Data table
                </p>
                <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                  {view.rows.length} rows
                </h2>
              </div>
              <p className="text-sm text-[#8c8273]">
                Last refreshed {formatShortDate(new Date().toISOString().slice(0, 10))}
              </p>
            </div>

            <div className="mt-4">
              <ZachTable
                columns={columns}
                empty="No rows yet for this chart."
                rows={view.rows.map((row) =>
                  Object.fromEntries(
                    columns.map((column) => [column, formatCell(row[column])]),
                  ),
                )}
              />
            </div>
          </ZachPanel>
        )}
    </ZachPageShell>
  );
}
