"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export type ZachChartDatum = Record<string, number | string | null>;

type Series = {
  color?: string;
  key: string;
  label?: string;
  yAxisId?: "left" | "right";
};

type ChartProps = {
  data: ZachChartDatum[];
  height?: number;
  lines?: Series[];
  xKey?: string;
};

const accent = "#bb5d3a";
const ink = "#2c2824";
const blue = "#6f7d8c";
const green = "#7a8c5a";

const tooltipStyle = {
  background: "#fffaf2",
  border: "1px solid rgba(44,40,36,0.16)",
  borderRadius: 6,
  boxShadow: "0 12px 30px rgba(44,40,36,0.12)",
  color: ink,
};

function EmptyChart({ height = 260 }: { height?: number }) {
  return (
    <div
      className="flex items-center justify-center rounded-md border border-dashed border-[#2c2824]/[0.16] bg-[#f9f4ec] text-sm text-[#9a8d7a]"
      style={{ height }}
    >
      No data yet
    </div>
  );
}

function axisProps() {
  return {
    stroke: "rgba(44,40,36,0.32)",
    tick: { fill: "#8c8273", fontSize: 11 },
    tickLine: false,
  };
}

export function ZachLineChart({
  data,
  height = 280,
  lines = [{ color: accent, key: "value", label: "Value" }],
  xKey = "date",
}: ChartProps) {
  if (!data.length) {
    return <EmptyChart height={height} />;
  }

  return (
    <div style={{ height }}>
      <ResponsiveContainer height="100%" width="100%">
        <LineChart data={data} margin={{ bottom: 2, left: -20, right: 12, top: 12 }}>
          <CartesianGrid stroke="rgba(44,40,36,0.09)" vertical={false} />
          <XAxis dataKey={xKey} {...axisProps()} />
          <YAxis allowDecimals {...axisProps()} />
          <Tooltip contentStyle={tooltipStyle} labelStyle={{ color: "#6f6254" }} />
          {lines.map((line) => (
            <Line
              connectNulls
              dataKey={line.key}
              dot={false}
              key={line.key}
              name={line.label ?? line.key}
              stroke={line.color ?? accent}
              strokeLinecap="round"
              strokeWidth={2}
              type="monotone"
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ZachBarChart({
  bars = [{ color: accent, key: "value", label: "Value" }],
  data,
  height = 280,
  xKey = "date",
}: ChartProps & { bars?: Series[] }) {
  if (!data.length) {
    return <EmptyChart height={height} />;
  }

  return (
    <div style={{ height }}>
      <ResponsiveContainer height="100%" width="100%">
        <BarChart data={data} margin={{ bottom: 2, left: -20, right: 12, top: 12 }}>
          <CartesianGrid stroke="rgba(44,40,36,0.09)" vertical={false} />
          <XAxis dataKey={xKey} {...axisProps()} />
          <YAxis allowDecimals {...axisProps()} />
          <Tooltip contentStyle={tooltipStyle} labelStyle={{ color: "#6f6254" }} />
          {bars.map((bar) => (
            <Bar
              dataKey={bar.key}
              fill={bar.color ?? accent}
              key={bar.key}
              name={bar.label ?? bar.key}
              radius={[3, 3, 0, 0]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ZachDualAxisChart({
  data,
  height = 280,
  lines = [
    { color: ink, key: "sleepScore", label: "Sleep score", yAxisId: "left" },
    { color: blue, key: "hrv", label: "HRV", yAxisId: "right" },
  ],
  xKey = "date",
}: ChartProps) {
  if (!data.length) {
    return <EmptyChart height={height} />;
  }

  return (
    <div style={{ height }}>
      <ResponsiveContainer height="100%" width="100%">
        <ComposedChart data={data} margin={{ bottom: 2, left: -20, right: -12, top: 12 }}>
          <CartesianGrid stroke="rgba(44,40,36,0.09)" vertical={false} />
          <XAxis dataKey={xKey} {...axisProps()} />
          <YAxis yAxisId="left" {...axisProps()} />
          <YAxis orientation="right" yAxisId="right" {...axisProps()} />
          <Tooltip contentStyle={tooltipStyle} labelStyle={{ color: "#6f6254" }} />
          <Legend wrapperStyle={{ color: "#6f6254", fontSize: 12 }} />
          {lines.map((line) => (
            <Line
              connectNulls
              dataKey={line.key}
              dot={false}
              key={line.key}
              name={line.label ?? line.key}
              stroke={line.color ?? accent}
              strokeLinecap="round"
              strokeWidth={2}
              type="monotone"
              yAxisId={line.yAxisId ?? "left"}
            />
          ))}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ZachScatterChart({
  data,
  height = 280,
  xLabel = "x",
  xKey = "x",
  yLabel = "y",
  yKey = "y",
}: {
  data: ZachChartDatum[];
  height?: number;
  xKey?: string;
  xLabel?: string;
  yKey?: string;
  yLabel?: string;
}) {
  if (!data.length) {
    return <EmptyChart height={height} />;
  }

  return (
    <div style={{ height }}>
      <ResponsiveContainer height="100%" width="100%">
        <ScatterChart margin={{ bottom: 2, left: -18, right: 12, top: 12 }}>
          <CartesianGrid stroke="rgba(44,40,36,0.09)" />
          <XAxis dataKey={xKey} name={xLabel} type="number" {...axisProps()} />
          <YAxis dataKey={yKey} name={yLabel} type="number" {...axisProps()} />
          <Tooltip contentStyle={tooltipStyle} cursor={{ strokeDasharray: "3 3" }} />
          <Scatter data={data} fill={green} name={yLabel} />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}

export const zachChartColors = {
  accent,
  blue,
  green,
  ink,
};
