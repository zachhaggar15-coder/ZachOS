"use client";

import Link from "next/link";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type ChartPoint = {
  date: string;
  value: number | null;
};

type ControlRoomChartsProps = {
  averageHr: ChartPoint[];
  className?: string;
  hrv: ChartPoint[];
  monthlyRunning: ChartPoint[];
  mood: ChartPoint[];
  netWorth: ChartPoint[];
  sleep: ChartPoint[];
  weeklyRunning: ChartPoint[];
};

const tooltipStyle = {
  background: "#0b1020",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: 8,
  color: "#f4f4f5",
};

function compactData(data: ChartPoint[], count = 12) {
  return data
    .filter((point) => typeof point.value === "number")
    .slice(-count);
}

function combineSeries(
  first: ChartPoint[],
  firstKey: string,
  second: ChartPoint[],
  secondKey: string,
) {
  const byDate = new Map<string, Record<string, number | string>>();

  first.forEach((point) => {
    if (typeof point.value !== "number") {
      return;
    }
    byDate.set(point.date, { date: point.date, [firstKey]: point.value });
  });

  second.forEach((point) => {
    if (typeof point.value !== "number") {
      return;
    }
    byDate.set(point.date, {
      ...(byDate.get(point.date) ?? { date: point.date }),
      [secondKey]: point.value,
    });
  });

  return Array.from(byDate.values()).slice(-12);
}

function EmptyChart() {
  return (
    <div className="flex h-full items-center justify-center text-xs text-zinc-600">
      No data yet
    </div>
  );
}

function ChartCard({
  accent,
  children,
  href,
  title,
}: {
  accent: string;
  children: React.ReactNode;
  href: string;
  title: string;
}) {
  return (
    <Link
      className="group min-h-0 rounded border border-white/10 bg-white/[0.04] p-2.5 transition hover:border-cyan-200/35 hover:bg-white/[0.06]"
      href={href}
    >
      <div className="mb-1.5 flex items-center justify-between gap-2">
        <h3 className="truncate text-xs font-semibold text-zinc-100">{title}</h3>
        <span
          className="h-2 w-2 rounded-full transition group-hover:scale-125"
          style={{ background: accent }}
        />
      </div>
      <div className="h-[calc(100%-1.35rem)] min-h-0">{children}</div>
    </Link>
  );
}

function axisProps() {
  return {
    stroke: "rgba(212,212,216,0.45)",
    tick: { fill: "rgba(212,212,216,0.55)", fontSize: 9 },
    tickLine: false,
  };
}

export function ControlRoomCharts({
  averageHr,
  className = "",
  hrv,
  monthlyRunning,
  mood,
  netWorth,
  sleep,
  weeklyRunning,
}: ControlRoomChartsProps) {
  const moodData = compactData(mood);
  const recoveryData = combineSeries(sleep, "sleep", hrv, "hrv");
  const runningData = compactData(weeklyRunning.length ? weeklyRunning : monthlyRunning, 10);
  const financeHrData = combineSeries(netWorth, "netWorth", averageHr, "avgHr");

  return (
    <section className={`${className} grid min-h-0 grid-cols-2 grid-rows-2 gap-2`}>
      <ChartCard accent="#67e8f9" href="/charts/mood" title="Mood over time">
        {moodData.length ? (
          <ResponsiveContainer height="100%" width="100%">
            <AreaChart data={moodData} margin={{ bottom: 0, left: -24, right: 4, top: 6 }}>
              <defs>
                <linearGradient id="moodFill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#67e8f9" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#67e8f9" stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
              <XAxis dataKey="date" {...axisProps()} />
              <YAxis domain={[0, 10]} {...axisProps()} />
              <Tooltip contentStyle={tooltipStyle} labelStyle={{ color: "#a1a1aa" }} />
              <Area
                dataKey="value"
                fill="url(#moodFill)"
                stroke="#67e8f9"
                strokeWidth={2}
                type="monotone"
              />
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          <EmptyChart />
        )}
      </ChartCard>

      <ChartCard accent="#a7f3d0" href="/charts/recovery" title="Sleep score and HRV">
        {recoveryData.length ? (
          <ResponsiveContainer height="100%" width="100%">
            <LineChart data={recoveryData} margin={{ bottom: 0, left: -24, right: 4, top: 6 }}>
              <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
              <XAxis dataKey="date" {...axisProps()} />
              <YAxis {...axisProps()} />
              <Tooltip contentStyle={tooltipStyle} labelStyle={{ color: "#a1a1aa" }} />
              <Line dataKey="sleep" dot={false} stroke="#6ee7b7" strokeWidth={2} type="monotone" />
              <Line dataKey="hrv" dot={false} stroke="#67e8f9" strokeWidth={2} type="monotone" />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <EmptyChart />
        )}
      </ChartCard>

      <ChartCard accent="#22d3ee" href="/charts/running-distance" title="Running distance">
        {runningData.length ? (
          <ResponsiveContainer height="100%" width="100%">
            <BarChart data={runningData} margin={{ bottom: 0, left: -24, right: 4, top: 6 }}>
              <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
              <XAxis dataKey="date" {...axisProps()} />
              <YAxis {...axisProps()} />
              <Tooltip contentStyle={tooltipStyle} labelStyle={{ color: "#a1a1aa" }} />
              <Bar dataKey="value" fill="#22d3ee" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <EmptyChart />
        )}
      </ChartCard>

      <ChartCard accent="#fef08a" href="/charts/finance-hr" title="Net worth and avg HR">
        {financeHrData.length ? (
          <ResponsiveContainer height="100%" width="100%">
            <LineChart data={financeHrData} margin={{ bottom: 0, left: -24, right: 4, top: 6 }}>
              <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
              <XAxis dataKey="date" {...axisProps()} />
              <YAxis {...axisProps()} />
              <Tooltip contentStyle={tooltipStyle} labelStyle={{ color: "#a1a1aa" }} />
              <Line dataKey="netWorth" dot={false} stroke="#fef08a" strokeWidth={2} type="monotone" />
              <Line dataKey="avgHr" dot={false} stroke="#f0abfc" strokeWidth={2} type="monotone" />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <EmptyChart />
        )}
      </ChartCard>
    </section>
  );
}
