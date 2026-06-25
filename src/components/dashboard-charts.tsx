"use client";

import Link from "next/link";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type ChartPoint = {
  date: string;
  value: number | null;
};

type ScatterPoint = {
  label: string;
  x: number;
  y: number;
};

type DashboardChartsProps = {
  averageHr: ChartPoint[];
  hrv: ChartPoint[];
  hrvTrainingLoad: ScatterPoint[];
  monthlyRunning: ChartPoint[];
  mood: ChartPoint[];
  netWorth: ChartPoint[];
  sleep: ChartPoint[];
  sleepMood: ScatterPoint[];
  weeklyRunning: ChartPoint[];
};

const lineCharts: {
  color: string;
  dataKey: keyof Pick<
    DashboardChartsProps,
    "averageHr" | "hrv" | "mood" | "netWorth" | "sleep"
  >;
  href: string;
  label: string;
  suffix?: string;
}[] = [
  { color: "#67e8f9", dataKey: "mood", href: "/charts/mood", label: "Mood over time" },
  { color: "#6ee7b7", dataKey: "sleep", href: "/charts/sleep", label: "Sleep score over time" },
  { color: "#a7f3d0", dataKey: "hrv", href: "/charts/hrv", label: "HRV over time" },
  {
    color: "#fef08a",
    dataKey: "netWorth",
    href: "/charts/net-worth",
    label: "Net worth over time",
    suffix: " GBP",
  },
  {
    color: "#f0abfc",
    dataKey: "averageHr",
    href: "/charts/average-hr",
    label: "Average HR trend",
    suffix: " bpm",
  },
];

const barCharts: {
  color: string;
  dataKey: keyof Pick<DashboardChartsProps, "monthlyRunning" | "weeklyRunning">;
  href: string;
  label: string;
  suffix: string;
}[] = [
  {
    color: "#67e8f9",
    dataKey: "weeklyRunning",
    href: "/charts/weekly-running",
    label: "Weekly running distance",
    suffix: " km",
  },
  {
    color: "#6ee7b7",
    dataKey: "monthlyRunning",
    href: "/charts/monthly-running",
    label: "Monthly running distance",
    suffix: " km",
  },
];

function EmptyChart() {
  return (
    <div className="flex h-56 items-center justify-center rounded border border-dashed border-white/10 text-sm text-zinc-600">
      No data yet
    </div>
  );
}

function ChartShell({
  children,
  color,
  href,
  label,
}: {
  children: React.ReactNode;
  color: string;
  href: string;
  label: string;
}) {
  return (
    <Link
      className="group rounded border border-white/10 bg-white/[0.035] p-4 transition hover:border-cyan-200/35 hover:bg-white/[0.055]"
      href={href}
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-zinc-100">{label}</h3>
        <span
          className="h-2 w-2 rounded-full transition group-hover:scale-125"
          style={{ backgroundColor: color }}
        />
      </div>
      {children}
    </Link>
  );
}

export function DashboardCharts(props: DashboardChartsProps) {
  return (
    <section className="grid gap-4 lg:grid-cols-2">
      {lineCharts.map((chart) => (
        <ChartShell
          color={chart.color}
          href={chart.href}
          key={chart.dataKey}
          label={chart.label}
        >
          {props[chart.dataKey].length ? (
            <div className="h-56">
              <ResponsiveContainer height="100%" width="100%">
                <LineChart
                  data={props[chart.dataKey]}
                  margin={{ bottom: 0, left: -22, right: 8, top: 6 }}
                >
                  <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                  <XAxis
                    dataKey="date"
                    stroke="rgba(212,212,216,0.55)"
                    tick={{ fill: "rgba(212,212,216,0.65)", fontSize: 11 }}
                    tickLine={false}
                  />
                  <YAxis
                    allowDecimals
                    stroke="rgba(212,212,216,0.55)"
                    tick={{ fill: "rgba(212,212,216,0.65)", fontSize: 11 }}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "#0c1117",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: 8,
                      color: "#f4f4f5",
                    }}
                    formatter={(value) => [
                      `${value}${chart.suffix ?? ""}`,
                      "Value",
                    ]}
                    labelStyle={{ color: "#a1a1aa" }}
                  />
                  <Line
                    connectNulls
                    dataKey="value"
                    dot={false}
                    stroke={chart.color}
                    strokeWidth={2}
                    type="monotone"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <EmptyChart />
          )}
        </ChartShell>
      ))}

      {barCharts.map((chart) => (
        <ChartShell
          color={chart.color}
          href={chart.href}
          key={chart.dataKey}
          label={chart.label}
        >
          {props[chart.dataKey].length ? (
            <div className="h-56">
              <ResponsiveContainer height="100%" width="100%">
                <BarChart
                  data={props[chart.dataKey]}
                  margin={{ bottom: 0, left: -22, right: 8, top: 6 }}
                >
                  <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                  <XAxis
                    dataKey="date"
                    stroke="rgba(212,212,216,0.55)"
                    tick={{ fill: "rgba(212,212,216,0.65)", fontSize: 11 }}
                    tickLine={false}
                  />
                  <YAxis
                    allowDecimals
                    stroke="rgba(212,212,216,0.55)"
                    tick={{ fill: "rgba(212,212,216,0.65)", fontSize: 11 }}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "#0c1117",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: 8,
                      color: "#f4f4f5",
                    }}
                    formatter={(value) => [`${value}${chart.suffix}`, "Value"]}
                    labelStyle={{ color: "#a1a1aa" }}
                  />
                  <Bar dataKey="value" fill={chart.color} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <EmptyChart />
          )}
        </ChartShell>
      ))}

      <ChartShell color="#fef08a" href="/charts/sleep-mood" label="Sleep score versus mood">
        {props.sleepMood.length ? (
          <div className="h-56">
            <ResponsiveContainer height="100%" width="100%">
              <ScatterChart margin={{ bottom: 0, left: -22, right: 8, top: 6 }}>
                <CartesianGrid stroke="rgba(255,255,255,0.08)" />
                <XAxis
                  dataKey="x"
                  name="Sleep score"
                  stroke="rgba(212,212,216,0.55)"
                  tick={{ fill: "rgba(212,212,216,0.65)", fontSize: 11 }}
                  tickLine={false}
                  type="number"
                />
                <YAxis
                  dataKey="y"
                  domain={[0, 10]}
                  name="Mood"
                  stroke="rgba(212,212,216,0.55)"
                  tick={{ fill: "rgba(212,212,216,0.65)", fontSize: 11 }}
                  tickLine={false}
                  type="number"
                />
                <Tooltip
                  contentStyle={{
                    background: "#0c1117",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 8,
                    color: "#f4f4f5",
                  }}
                  cursor={{ strokeDasharray: "3 3" }}
                />
                <Scatter data={props.sleepMood} fill="#fef08a" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <EmptyChart />
        )}
      </ChartShell>

      <ChartShell color="#a78bfa" href="/charts/hrv-training-load" label="HRV versus training load">
        {props.hrvTrainingLoad.length ? (
          <div className="h-56">
            <ResponsiveContainer height="100%" width="100%">
              <ScatterChart margin={{ bottom: 0, left: -22, right: 8, top: 6 }}>
                <CartesianGrid stroke="rgba(255,255,255,0.08)" />
                <XAxis
                  dataKey="x"
                  name="Training load"
                  stroke="rgba(212,212,216,0.55)"
                  tick={{ fill: "rgba(212,212,216,0.65)", fontSize: 11 }}
                  tickLine={false}
                  type="number"
                />
                <YAxis
                  dataKey="y"
                  name="HRV"
                  stroke="rgba(212,212,216,0.55)"
                  tick={{ fill: "rgba(212,212,216,0.65)", fontSize: 11 }}
                  tickLine={false}
                  type="number"
                />
                <Tooltip
                  contentStyle={{
                    background: "#0c1117",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 8,
                    color: "#f4f4f5",
                  }}
                  cursor={{ strokeDasharray: "3 3" }}
                />
                <Scatter data={props.hrvTrainingLoad} fill="#a78bfa" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <EmptyChart />
        )}
      </ChartShell>
    </section>
  );
}
