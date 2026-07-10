"use client";

import { useOptimistic, useTransition } from "react";
import { useRouter } from "next/navigation";

import { toggleDailyRoutine } from "@/app/actions";

type DailyRoutineToggleProps = {
  comfortable?: boolean;
  date: string;
  done: boolean;
  name: string;
  routineKey: string;
  strikeWhenDone?: boolean;
};

export function DailyRoutineToggle({
  comfortable = false,
  date,
  done,
  name,
  routineKey,
  strikeWhenDone = false,
}: DailyRoutineToggleProps) {
  const router = useRouter();
  const [optimisticDone, setOptimisticDone] = useOptimistic(
    done,
    (_currentDone: boolean, nextDone: boolean) => nextDone,
  );
  const [isPending, startTransition] = useTransition();

  function toggle() {
    const nextDone = !optimisticDone;

    startTransition(async () => {
      setOptimisticDone(nextDone);
      const formData = new FormData();
      formData.set("date", date);
      formData.set("routine_key", routineKey);
      formData.set("completed", nextDone.toString());

      try {
        await toggleDailyRoutine(formData);
        router.refresh();
      } catch {
        router.refresh();
      }
    });
  }

  return (
    <button
      aria-label={
        optimisticDone ? `Mark ${name} incomplete` : `Mark ${name} complete`
      }
      aria-pressed={optimisticDone}
      className={`group flex w-full cursor-pointer select-none items-center gap-2.5 rounded-md text-left transition focus-visible:bg-[#bb5d3a]/[0.08] focus-visible:outline-none active:scale-[0.99] ${
        comfortable ? "min-h-11 py-2" : "py-1"
      }`}
      disabled={isPending}
      onClick={toggle}
      title={optimisticDone ? `Mark ${name} incomplete` : `Mark ${name} complete`}
      type="button"
    >
      <span
        className={`flex flex-none items-center justify-center rounded-full font-bold transition group-hover:scale-105 ${
          comfortable ? "h-6 w-6 text-[11px]" : "h-[17px] w-[17px] text-[10px]"
        } ${
          optimisticDone
            ? "bg-[#bb5d3a] text-[#f9f4ec]"
            : "border border-[#2c2824]/25 group-hover:border-[#bb5d3a]/70"
        }`}
      >
        {optimisticDone ? "✓" : ""}
      </span>
      <span
        className={`zach-ui min-w-0 flex-1 font-medium leading-tight transition group-hover:text-[#bb5d3a] ${
          comfortable ? "text-[15px]" : "text-[12.5px]"
        } ${
          optimisticDone && strikeWhenDone
            ? "text-[#9a8d7a] line-through"
            : "text-[#3a342c]"
        }`}
      >
        {name}
      </span>
      <span className="sr-only">
        {optimisticDone ? "Currently complete." : "Currently incomplete."}
      </span>
      <span
        aria-hidden="true"
        className={`text-[10px] font-semibold uppercase tracking-[0.14em] transition ${
          isPending ? "text-[#bb5d3a]" : "text-[#9a8d7a]"
        } ${comfortable ? "inline" : "hidden"}`}
      >
        {isPending ? "saving" : optimisticDone ? "done" : ""}
      </span>
    </button>
  );
}
