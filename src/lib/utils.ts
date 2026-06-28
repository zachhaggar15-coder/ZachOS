import type { Activity } from "@/lib/supabase/database.types";

export const DAY_MS = 24 * 60 * 60 * 1000;

export function numeric(value: number | null | undefined): number {
  return typeof value === "number" && Number.isFinite(value) ? value : 0;
}

export function toDate(date: string): Date {
  return new Date(`${date}T12:00:00Z`);
}

export function isRunningActivity(activity: Activity): boolean {
  const type = activity.activity_type?.toLowerCase() ?? "";
  return (
    !type ||
    type.includes("run") ||
    type.includes("jog") ||
    type.includes("treadmill")
  );
}
