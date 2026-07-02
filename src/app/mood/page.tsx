import { AuthPanel } from "@/components/auth-panel";
import { ZachLineChart } from "@/components/zach-charts";
import {
  ZachButtonLink,
  ZachDatabaseSetupNotice,
  ZachMetric,
  ZachPageShell,
  ZachPanel,
  ZachSetupRequired,
  ZachTable,
} from "@/components/zach-shell";
import { sortByDateAscending } from "@/lib/data-shaping";
import {
  friendlyDatabaseError,
  getDatabaseSetupIssue,
} from "@/lib/database-setup";
import { formatShortDate } from "@/lib/dates";
import { getSupabaseConfig } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { numeric } from "@/lib/utils";

export const dynamic = "force-dynamic";

type MoodPageProps = {
  searchParams: Promise<{ error?: string; message?: string }>;
};

function average(values: number[]) {
  const usable = values.filter((value) => Number.isFinite(value) && value > 0);
  return usable.length
    ? usable.reduce((total, value) => total + value, 0) / usable.length
    : null;
}

function formatValue(value: number | null) {
  return value === null ? "--" : value.toFixed(1);
}

export default async function MoodPage({ searchParams }: MoodPageProps) {
  const query = await searchParams;

  if (!getSupabaseConfig()) {
    return <ZachSetupRequired title="Connect Supabase before viewing mood" />;
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <AuthPanel error={query.error} message={query.message} />;
  }

  const dailyLogs = await supabase
    .from("daily_logs")
    .select("*")
    .eq("user_id", user.id)
    .order("date", { ascending: false })
    .limit(1000);
  const databaseSetupIssue = getDatabaseSetupIssue([dailyLogs.error]);
  const rows = sortByDateAscending(dailyLogs.data ?? []);
  const chartData = rows
    .filter((row) => row.mood_score !== null)
    .map((row) => ({
      date: formatShortDate(row.date),
      value: row.mood_score,
    }));
  const latest = rows.at(-1);
  const latestMood = latest?.mood_score ?? null;
  const sevenDay = average(rows.slice(-7).map((row) => numeric(row.mood_score)));
  const thirtyDay = average(rows.slice(-30).map((row) => numeric(row.mood_score)));

  return (
    <ZachPageShell
      active="mood"
      actions={<ZachButtonLink href="/manage">Update mood</ZachButtonLink>}
      subtitle="A simple mood graph. No recovery logic is blended into this page, so it stays clean and honest."
      title="Mood"
      userEmail={user.email}
    >
      {(query.error || query.message || dailyLogs.error) && !databaseSetupIssue && (
        <div className="rounded-md border border-[#bb5d3a]/35 bg-[#bb5d3a]/10 px-4 py-3 text-sm text-[#8d3f26]">
          {query.error ||
            (dailyLogs.error ? friendlyDatabaseError(dailyLogs.error) : query.message)}
        </div>
      )}

      {databaseSetupIssue ? (
        <ZachDatabaseSetupNotice issue={databaseSetupIssue} />
      ) : (
        <>
          <section className="grid gap-3 md:grid-cols-3">
            <ZachMetric label="Latest mood" meta={latest?.date ?? "No log yet"} value={formatValue(latestMood)} />
            <ZachMetric label="7-day average" value={formatValue(sevenDay)} />
            <ZachMetric label="30-day average" value={formatValue(thirtyDay)} />
          </section>

          <ZachPanel>
            <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                  Mood over time
                </p>
                <h2 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                  Daily score
                </h2>
              </div>
              <p className="text-sm text-[#8c8273]">{chartData.length} logged days</p>
            </div>
            <ZachLineChart data={chartData} height={320} />
          </ZachPanel>

          <ZachPanel>
            <ZachTable
              columns={["Date", "Mood", "Notes"]}
              empty="No mood logs yet."
              rows={[...rows].reverse().map((row) => ({
                Date: row.date,
                Mood: row.mood_score ?? "--",
                Notes: row.notes || "--",
              }))}
            />
          </ZachPanel>
        </>
      )}
    </ZachPageShell>
  );
}
