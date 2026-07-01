"use client";

import { useRef } from "react";

import { updateDailyRitualMetric } from "@/app/actions";

type DailyRitualMetricInputProps = {
  date: string;
  metric: "deep_work_minutes" | "french_minutes" | "reading_pages";
  target: number;
  unit?: string;
  value?: number;
};

export function DailyRitualMetricInput({
  date,
  metric,
  target,
  unit,
  value,
}: DailyRitualMetricInputProps) {
  const lastSubmittedValue = useRef(String(Math.round(value ?? 0)));

  function submitIfChanged(form: HTMLFormElement | null, nextValue: string) {
    if (!form || nextValue === lastSubmittedValue.current) {
      return;
    }

    lastSubmittedValue.current = nextValue;
    form.requestSubmit();
  }

  return (
    <form action={updateDailyRitualMetric} className="flex items-center gap-1">
      <input name="date" type="hidden" value={date} />
      <input name="metric" type="hidden" value={metric} />
      <input
        aria-label={`Update ${metric.replaceAll("_", " ")}`}
        className="zach-ui h-8 w-[58px] rounded-md border border-[#2c2824]/20 bg-white px-2 text-center text-xs font-semibold text-[#3a342c] outline-none transition focus:border-[#bb5d3a]/55 focus:ring-2 focus:ring-[#bb5d3a]/15"
        defaultValue={Math.round(value ?? 0)}
        min={0}
        name="value"
        onBlur={(event) =>
          submitIfChanged(event.currentTarget.form, event.currentTarget.value)
        }
        onClick={(event) => event.stopPropagation()}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            submitIfChanged(event.currentTarget.form, event.currentTarget.value);
            event.currentTarget.blur();
          }
        }}
        step={1}
        type="number"
      />
      <span className="zach-ui w-10 text-[11px] font-medium text-[#9a8d7a]">
        / {target}
        {unit}
      </span>
      <button className="sr-only" type="submit">
        Save ritual value
      </button>
    </form>
  );
}
