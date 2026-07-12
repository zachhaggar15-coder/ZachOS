"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { generateAiInsight, type InsightKind } from "@/lib/ai-insights";
import { sortByDateAscending } from "@/lib/data-shaping";
import { friendlyDatabaseError } from "@/lib/database-setup";
import { todayInLondon } from "@/lib/dates";
import {
  answerLabel,
  getLearningLesson,
  scoreLearningAttempt,
} from "@/lib/learning-zone";
import {
  fetchStravaActivities,
  getStravaConfig,
  getValidStravaAccessToken,
  mapStravaActivity,
} from "@/lib/strava";
import { NET_WORTH_HISTORY } from "@/lib/net-worth-history";
import type { Database } from "@/lib/supabase/database.types";
import { createSupabaseServiceRoleClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";

type ActivityInsert = Database["public"]["Tables"]["activities"]["Insert"];
type DailyLogInsert = Database["public"]["Tables"]["daily_logs"]["Insert"];
type FitnessMetricInsert =
  Database["public"]["Tables"]["fitness_metrics"]["Insert"];
type FinanceSnapshotInsert =
  Database["public"]["Tables"]["finance_snapshots"]["Insert"];
type LearningSessionInsert =
  Database["public"]["Tables"]["learning_sessions"]["Insert"];
type LearningLessonNoteInsert =
  Database["public"]["Tables"]["learning_lesson_notes"]["Insert"];
type MarketPriceInsert = Database["public"]["Tables"]["market_prices"]["Insert"];
type PortfolioAccountInsert =
  Database["public"]["Tables"]["portfolio_accounts"]["Insert"];
type PortfolioHoldingInsert =
  Database["public"]["Tables"]["portfolio_holdings"]["Insert"];
export type AiInsightActionState = {
  content?: string;
  error?: string;
  generatedAt?: string;
  kind?: InsightKind;
  source?: "fallback" | "openai";
  status: "idle" | "error" | "success";
};
type GarminField =
  | "activity_type"
  | "avg_hr"
  | "calories"
  | "date"
  | "distance_km"
  | "duration_minutes"
  | "hrv"
  | "max_hr"
  | "notes"
  | "resting_hr"
  | "sleep_hours"
  | "sleep_score"
  | "training_load"
  | "training_effect"
  | "training_status"
  | "weekly_distance_km";

const GARMIN_FIELDS = new Set<GarminField>([
  "activity_type",
  "avg_hr",
  "calories",
  "date",
  "distance_km",
  "duration_minutes",
  "hrv",
  "max_hr",
  "notes",
  "resting_hr",
  "sleep_hours",
  "sleep_score",
  "training_load",
  "training_effect",
  "training_status",
  "weekly_distance_km",
]);
const DAILY_ROUTINE_KEYS = new Set([
  "train",
  "deep_work",
  "french",
  "read",
  "ate_well",
  "cold_shower",
]);
const DAILY_RITUAL_METRICS = new Set([
  "deep_work_minutes",
  "french_minutes",
  "reading_pages",
]);

function formString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function nullableNumber(formData: FormData, key: string) {
  const raw = formString(formData, key);

  if (!raw) {
    return null;
  }

  const value = Number(raw);
  return Number.isFinite(value) ? value : null;
}

function nullableInteger(formData: FormData, key: string) {
  const value = nullableNumber(formData, key);
  return value === null ? null : Math.round(value);
}

function redirectWithError(message: string): never {
  redirect(`/?error=${encodeURIComponent(message)}`);
}

function redirectWithMessage(message: string): never {
  redirect(`/?message=${encodeURIComponent(message)}`);
}

function siteUrl(path = "") {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  return baseUrl ? `${baseUrl}${path}` : undefined;
}

function redirectToGarminWithError(message: string): never {
  redirect(`/garmin-import?error=${encodeURIComponent(message)}`);
}

function redirectToGarminWithMessage(message: string): never {
  redirect(`/garmin-import?message=${encodeURIComponent(message)}`);
}

function redirectToIntegrationsWithError(message: string): never {
  redirect(`/integrations?error=${encodeURIComponent(message)}`);
}

function redirectToIntegrationsWithMessage(message: string): never {
  redirect(`/integrations?message=${encodeURIComponent(message)}`);
}

function redirectToManageWithMessage(message: string): never {
  redirect(`/manage?message=${encodeURIComponent(message)}`);
}

function redirectToPathWithMessage(path: string, message: string): never {
  const safePath = path.startsWith("/") && !path.startsWith("//") ? path : "/";
  const separator = safePath.includes("?") ? "&" : "?";

  redirect(`${safePath}${separator}message=${encodeURIComponent(message)}`);
}

function redirectToManageWithError(message: string): never {
  redirect(`/manage?error=${encodeURIComponent(message)}`);
}

function redirectToPortfolioWithMessage(message: string): never {
  redirect(`/portfolio?message=${encodeURIComponent(message)}`);
}

function redirectToPortfolioWithError(message: string): never {
  redirect(`/portfolio?error=${encodeURIComponent(message)}`);
}

function redirectToLearningWithError(message: string): never {
  redirect(`/learning-zone?error=${encodeURIComponent(message)}`);
}

function redirectToLearningLessonWithError(
  lessonSlug: string,
  message: string,
): never {
  redirect(
    `/learning-zone/lesson/${lessonSlug}?error=${encodeURIComponent(message)}`,
  );
}

async function requireAuthenticatedUser() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirectWithError("Please sign in before updating Zach OS.");
  }

  return { supabase, user };
}

export async function signIn(formData: FormData) {
  const email = formString(formData, "email");
  const password = formString(formData, "password");

  if (!email || !password) {
    redirectWithError("Enter an email and password.");
  }

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    if (error.message.toLowerCase().includes("invalid login credentials")) {
      redirectWithError(
        "Invalid email or password. If you normally use email links, send a password setup link or sign in once with an email link, then set a password in Manage.",
      );
    }

    redirectWithError(error.message);
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function sendMagicLink(formData: FormData) {
  const email = formString(formData, "email");

  if (!email) {
    redirectWithError("Enter your email address.");
  }

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: siteUrl("/auth/callback"),
    },
  });

  if (error) {
    redirectWithError(error.message);
  }

  redirectWithMessage("Check your email for a sign-in link.");
}

export async function sendPasswordReset(formData: FormData) {
  const email = formString(formData, "email");

  if (!email) {
    redirectWithError("Enter your email address.");
  }

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: siteUrl("/auth/callback?next=/manage"),
  });

  if (error) {
    redirectWithError(error.message);
  }

  redirectWithMessage(
    "Check your email for a password setup link, then open Manage to set the new password.",
  );
}

export async function signUp(formData: FormData) {
  const email = formString(formData, "email");
  const password = formString(formData, "password");

  if (!email || !password) {
    redirectWithError("Enter an email and password.");
  }

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.signUp({
    email,
    options: {
      emailRedirectTo: siteUrl("/auth/callback?next=/manage"),
    },
    password,
  });

  if (error) {
    redirectWithError(error.message);
  }

  revalidatePath("/", "layout");
  redirectWithMessage("Account created. If email confirmation is enabled, check your inbox.");
}

export async function updatePassword(formData: FormData) {
  const { supabase } = await requireAuthenticatedUser();
  const password = formString(formData, "password");
  const confirmPassword = formString(formData, "confirm_password");

  if (!password || !confirmPassword) {
    redirectToManageWithError("Enter and confirm the new password.");
  }

  if (password.length < 8) {
    redirectToManageWithError("Use at least 8 characters for the password.");
  }

  if (password !== confirmPassword) {
    redirectToManageWithError("The password confirmation does not match.");
  }

  const { error } = await supabase.auth.updateUser({ password });

  if (error) {
    redirectToManageWithError(error.message);
  }

  revalidatePath("/", "layout");
  redirectToManageWithMessage("Password updated. You can now use email and password login.");
}

export async function signOut() {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/");
}

export async function upsertDailyLog(formData: FormData) {
  const { supabase, user } = await requireAuthenticatedUser();
  const date = formString(formData, "date") || todayInLondon();
  const moodScore = nullableInteger(formData, "mood_score");

  if (moodScore !== null && (moodScore < 1 || moodScore > 10)) {
    redirectWithError("Mood score must be between 1 and 10.");
  }

  const { error } = await supabase.from("daily_logs").upsert(
    {
      date,
      deep_work_hours: nullableNumber(formData, "deep_work_hours"),
      french_minutes: nullableInteger(formData, "french_minutes"),
      mood_score: moodScore,
      notes: formString(formData, "notes") || null,
      reading_pages: nullableInteger(formData, "reading_pages"),
      user_id: user.id,
    },
    { onConflict: "user_id,date" },
  );

  if (error) {
    redirectWithError(friendlyDatabaseError(error));
  }

  revalidatePath("/");
  redirect("/");
}

export async function upsertFitnessMetrics(formData: FormData) {
  const { supabase, user } = await requireAuthenticatedUser();
  const date = formString(formData, "date") || todayInLondon();

  const { error } = await supabase.from("fitness_metrics").upsert(
    {
      date,
      hrv: nullableNumber(formData, "hrv"),
      resting_hr: nullableNumber(formData, "resting_hr"),
      sleep_score: nullableNumber(formData, "sleep_score"),
      user_id: user.id,
    },
    { onConflict: "user_id,date" },
  );

  if (error) {
    redirectWithError(friendlyDatabaseError(error));
  }

  revalidatePath("/");
  redirect("/");
}

export async function upsertFinanceSnapshot(formData: FormData) {
  const { supabase, user } = await requireAuthenticatedUser();
  const date = formString(formData, "date") || todayInLondon();
  const cash = nullableNumber(formData, "cash_gbp");
  const isa = nullableNumber(formData, "isa_gbp");
  const lifetimeIsa = nullableNumber(formData, "lifetime_isa_gbp");
  let invested = nullableNumber(formData, "invested_gbp");
  let netWorth = nullableNumber(formData, "net_worth_gbp");

  if (invested === null && (isa !== null || lifetimeIsa !== null)) {
    invested = (isa ?? 0) + (lifetimeIsa ?? 0);
  }

  if (netWorth === null && (cash !== null || invested !== null)) {
    netWorth = (cash ?? 0) + (invested ?? 0);
  }

  const { error } = await supabase.from("finance_snapshots").upsert(
    {
      cash_gbp: cash,
      date,
      invested_gbp: invested,
      isa_gbp: isa,
      lifetime_isa_gbp: lifetimeIsa,
      net_worth_change_percent: nullableNumber(
        formData,
        "net_worth_change_percent",
      ),
      net_worth_gbp: netWorth,
      user_id: user.id,
    },
    { onConflict: "user_id,date" },
  );

  if (error) {
    redirectWithError(friendlyDatabaseError(error));
  }

  revalidatePath("/");
  redirect("/");
}

export async function importNetWorthHistory() {
  const { supabase, user } = await requireAuthenticatedUser();
  const rows: FinanceSnapshotInsert[] = NET_WORTH_HISTORY.map((row) => ({
    cash_gbp: 0,
    date: row.date,
    invested_gbp: row.totalGbp,
    isa_gbp: row.isaGbp,
    lifetime_isa_gbp: row.lifetimeIsaGbp,
    net_worth_change_percent: row.changePercent,
    net_worth_gbp: row.totalGbp,
    user_id: user.id,
  }));

  const { error } = await supabase
    .from("finance_snapshots")
    .upsert(rows, { onConflict: "user_id,date" });

  if (error) {
    redirectWithError(friendlyDatabaseError(error));
  }

  revalidatePath("/");
  revalidatePath("/manage");
  redirectToManageWithMessage(
    `Imported ${rows.length} historical net worth snapshots.`,
  );
}

export async function saveQuickDailyEntry(formData: FormData) {
  const { supabase, user } = await requireAuthenticatedUser();
  const date = formString(formData, "date") || todayInLondon();
  const moodScore = nullableInteger(formData, "mood_score");

  if (moodScore !== null && (moodScore < 1 || moodScore > 10)) {
    redirectToManageWithError("Mood score must be between 1 and 10.");
  }

  const [existingDaily, existingFitness, existingConsultant] = await Promise.all([
    supabase
      .from("daily_logs")
      .select("*")
      .eq("user_id", user.id)
      .eq("date", date)
      .maybeSingle(),
    supabase
      .from("fitness_metrics")
      .select("*")
      .eq("user_id", user.id)
      .eq("date", date)
      .maybeSingle(),
    supabase
      .from("consultant_readiness_logs")
      .select("*")
      .eq("user_id", user.id)
      .eq("date", date)
      .maybeSingle(),
  ]);

  const readError =
    existingDaily.error || existingFitness.error || existingConsultant.error;

  if (readError) {
    redirectToManageWithError(friendlyDatabaseError(readError));
  }

  const dailyNotes = formString(formData, "notes");
  const dailyUpsert = supabase.from("daily_logs").upsert(
    {
      date,
      deep_work_hours:
        nullableNumber(formData, "deep_work_hours") ??
        existingDaily.data?.deep_work_hours ??
        null,
      french_minutes:
        nullableInteger(formData, "french_minutes") ??
        existingDaily.data?.french_minutes ??
        null,
      mood_score: moodScore ?? existingDaily.data?.mood_score ?? null,
      notes: dailyNotes || existingDaily.data?.notes || null,
      reading_pages:
        nullableInteger(formData, "reading_pages") ??
        existingDaily.data?.reading_pages ??
        null,
      user_id: user.id,
    },
    { onConflict: "user_id,date" },
  );
  const fitnessUpsert = supabase.from("fitness_metrics").upsert(
    {
      date,
      hrv: nullableNumber(formData, "hrv") ?? existingFitness.data?.hrv ?? null,
      resting_hr:
        nullableNumber(formData, "resting_hr") ??
        existingFitness.data?.resting_hr ??
        null,
      sleep_score:
        nullableNumber(formData, "sleep_score") ??
        existingFitness.data?.sleep_score ??
        null,
      user_id: user.id,
    },
    { onConflict: "user_id,date" },
  );
  const consultantUpsert = supabase.from("consultant_readiness_logs").upsert(
    {
      date,
      user_id: user.id,
      writing_minutes:
        nullableInteger(formData, "writing_minutes") ??
        existingConsultant.data?.writing_minutes ??
        null,
    },
    { onConflict: "user_id,date" },
  );

  const [dailyResult, fitnessResult, consultantResult] = await Promise.all([
    dailyUpsert,
    fitnessUpsert,
    consultantUpsert,
  ]);
  const writeError =
    dailyResult.error || fitnessResult.error || consultantResult.error;

  if (writeError) {
    redirectToManageWithError(friendlyDatabaseError(writeError));
  }

  revalidatePath("/");
  revalidatePath("/manage");
  const returnTo = formString(formData, "return_to");
  if (returnTo) {
    redirectToPathWithMessage(returnTo, "Daily check-in saved.");
  }

  redirectToManageWithMessage("Daily check-in saved.");
}

export async function toggleDailyRoutine(formData: FormData) {
  const { supabase, user } = await requireAuthenticatedUser();
  const date = formString(formData, "date") || todayInLondon();
  const routineKey = formString(formData, "routine_key");
  const completed = formString(formData, "completed") === "true";

  if (!DAILY_ROUTINE_KEYS.has(routineKey)) {
    redirectWithError("Unknown daily routine.");
  }

  const { error } = await supabase.from("daily_routine_logs").upsert(
    {
      completed,
      date,
      routine_key: routineKey,
      updated_at: new Date().toISOString(),
      user_id: user.id,
    },
    { onConflict: "user_id,date,routine_key" },
  );

  if (error) {
    redirectWithError(friendlyDatabaseError(error));
  }

  revalidatePath("/");
}

export async function updateDailyRitualMetric(formData: FormData) {
  const { supabase, user } = await requireAuthenticatedUser();
  const date = formString(formData, "date") || todayInLondon();
  const metric = formString(formData, "metric");
  const value = nullableNumber(formData, "value");

  if (!DAILY_RITUAL_METRICS.has(metric)) {
    redirectWithError("Unknown daily ritual metric.");
  }

  if (value !== null && value < 0) {
    redirectWithError("Daily ritual values cannot be negative.");
  }

  const row: DailyLogInsert = {
    date,
    user_id: user.id,
  };

  if (metric === "deep_work_minutes") {
    row.deep_work_hours = value === null ? null : value / 60;
  }

  if (metric === "french_minutes") {
    row.french_minutes = value === null ? null : Math.round(value);
  }

  if (metric === "reading_pages") {
    row.reading_pages = value === null ? null : Math.round(value);
  }

  const { error } = await supabase
    .from("daily_logs")
    .upsert(row, { onConflict: "user_id,date" });

  if (error) {
    redirectWithError(friendlyDatabaseError(error));
  }

  revalidatePath("/");
  revalidatePath("/manage");
}

export async function upsertConsultantReadinessLog(formData: FormData) {
  const { supabase, user } = await requireAuthenticatedUser();
  const date = formString(formData, "date") || todayInLondon();

  const { error } = await supabase.from("consultant_readiness_logs").upsert(
    {
      date,
      user_id: user.id,
      writing_minutes: nullableInteger(formData, "writing_minutes"),
    },
    { onConflict: "user_id,date" },
  );

  if (error) {
    redirectWithError(friendlyDatabaseError(error));
  }

  revalidatePath("/");
  redirect("/");
}

function parseNumber(value: unknown) {
  if (typeof value !== "string") {
    return null;
  }

  const cleaned = value.replace(/,/g, "").replace(/\u00a3/g, "").trim();
  if (!cleaned) {
    return null;
  }

  const match = cleaned.match(/-?\d+(\.\d+)?/);
  if (!match) {
    return null;
  }

  const number = Number(match[0]);
  return Number.isFinite(number) ? number : null;
}

function parseDistanceKm(value: unknown, header: string) {
  const number = parseNumber(value);

  if (number === null) {
    return null;
  }

  return /(^|\W)(mi|mile|miles)(\W|$)/i.test(header)
    ? Number((number * 1.609344).toFixed(3))
    : number;
}

function parseDurationMinutes(value: unknown) {
  if (typeof value !== "string") {
    return null;
  }

  const trimmed = value.trim();
  const colonParts = trimmed.split(":").map(Number);
  if (colonParts.length === 3 && colonParts.every(Number.isFinite)) {
    const [hours, minutes, seconds] = colonParts;
    return Number((hours * 60 + minutes + seconds / 60).toFixed(2));
  }

  if (colonParts.length === 2 && colonParts.every(Number.isFinite)) {
    const [minutes, seconds] = colonParts;
    return Number((minutes + seconds / 60).toFixed(2));
  }

  const hours = trimmed.match(/(\d+(\.\d+)?)\s*h/i);
  const minutes = trimmed.match(/(\d+(\.\d+)?)\s*m/i);
  if (hours || minutes) {
    return (
      (hours ? Number(hours[1]) * 60 : 0) +
      (minutes ? Number(minutes[1]) : 0)
    );
  }

  return parseNumber(trimmed);
}

function parseDateValue(value: unknown) {
  if (typeof value !== "string") {
    return null;
  }

  const trimmed = value.trim();
  if (!trimmed) {
    return null;
  }

  const iso = trimmed.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (iso) {
    return `${iso[1]}-${iso[2]}-${iso[3]}`;
  }

  const uk = trimmed.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{4})/);
  if (uk) {
    const [, day, month, year] = uk;
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  }

  const parsed = new Date(trimmed);
  return Number.isNaN(parsed.getTime())
    ? null
    : parsed.toISOString().slice(0, 10);
}

function parseRowsJson(value: string) {
  const parsed: unknown = JSON.parse(value);

  if (!Array.isArray(parsed)) {
    return [];
  }

  return parsed
    .filter(
      (row): row is Record<string, string> =>
        !!row && typeof row === "object" && !Array.isArray(row),
    )
    .slice(0, 500);
}

function parseMappingJson(value: string) {
  const parsed: unknown = JSON.parse(value);

  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    return [];
  }

  return Object.entries(parsed)
    .map(([header, field]) => ({
      field: typeof field === "string" && GARMIN_FIELDS.has(field as GarminField)
        ? (field as GarminField)
        : null,
      header,
    }))
    .filter(
      (entry): entry is { field: GarminField; header: string } =>
        entry.field !== null,
    );
}

function hasActivityData(row: ActivityInsert) {
  return Boolean(
    row.activity_type ||
      row.distance_km !== null ||
      row.duration_minutes !== null ||
      row.avg_hr !== null ||
      row.max_hr !== null ||
      row.calories !== null ||
      row.training_effect ||
      row.notes,
  );
}

function hasFitnessData(row: Partial<FitnessMetricInsert>) {
  return Boolean(
    row.sleep_hours !== undefined ||
      row.sleep_score !== undefined ||
      row.hrv !== undefined ||
      row.resting_hr !== undefined ||
      row.training_load !== undefined ||
      row.weekly_distance_km !== undefined ||
      row.training_status !== undefined,
  );
}

export async function importGarminCsv(formData: FormData) {
  const { supabase, user } = await requireAuthenticatedUser();
  const rowsJson = formString(formData, "rows_json");
  const mappingJson = formString(formData, "mapping_json");

  if (!rowsJson || !mappingJson) {
    redirectToGarminWithError("Upload a CSV and map at least the date column.");
  }

  let rows: Record<string, string>[];
  let mapping: { field: GarminField; header: string }[];

  try {
    rows = parseRowsJson(rowsJson);
    mapping = parseMappingJson(mappingJson);
  } catch {
    redirectToGarminWithError("The parsed CSV payload could not be read.");
  }

  if (!mapping.some((entry) => entry.field === "date")) {
    redirectToGarminWithError("Map a CSV column to the internal date field.");
  }

  const activities: ActivityInsert[] = [];
  const fitnessByDate = new Map<string, Partial<FitnessMetricInsert>>();

  rows.forEach((sourceRow) => {
    const activity: ActivityInsert = {
      activity_type: null,
      avg_hr: null,
      calories: null,
      date: "",
      distance_km: null,
      duration_minutes: null,
      max_hr: null,
      notes: null,
      training_effect: null,
      user_id: user.id,
    };
    const fitness: Partial<FitnessMetricInsert> = {};

    mapping.forEach(({ field, header }) => {
      const value = sourceRow[header] ?? "";

      if (field === "date") {
        const date = parseDateValue(value);
        if (date) {
          activity.date = date;
          fitness.date = date;
        }
      }

      if (field === "activity_type") {
        activity.activity_type = value.trim() || null;
      }

      if (field === "distance_km") {
        activity.distance_km = parseDistanceKm(value, header);
      }

      if (field === "duration_minutes") {
        activity.duration_minutes = parseDurationMinutes(value);
      }

      if (field === "avg_hr") {
        activity.avg_hr = parseNumber(value);
      }

      if (field === "max_hr") {
        activity.max_hr = parseNumber(value);
      }

      if (field === "calories") {
        activity.calories = parseNumber(value);
      }

      if (field === "training_effect") {
        activity.training_effect = value.trim() || null;
      }

      if (field === "notes") {
        activity.notes = value.trim() || null;
      }

      if (field === "sleep_hours") {
        fitness.sleep_hours = parseNumber(value);
      }

      if (field === "sleep_score") {
        fitness.sleep_score = parseNumber(value);
      }

      if (field === "hrv") {
        fitness.hrv = parseNumber(value);
      }

      if (field === "resting_hr") {
        fitness.resting_hr = parseNumber(value);
      }

      if (field === "training_load") {
        fitness.training_load = parseNumber(value);
      }

      if (field === "weekly_distance_km") {
        fitness.weekly_distance_km = parseDistanceKm(value, header);
      }

      if (field === "training_status") {
        fitness.training_status = value.trim() || null;
      }
    });

    if (activity.date && hasActivityData(activity)) {
      activities.push({
        ...activity,
        external_id: [
          activity.date,
          activity.activity_type ?? "",
          activity.distance_km?.toFixed(3) ?? "",
          activity.duration_minutes?.toFixed(2) ?? "",
        ].join("|"),
        source: "garmin",
      });
    }

    if (fitness.date && hasFitnessData(fitness)) {
      const previous = fitnessByDate.get(fitness.date) ?? {
        date: fitness.date,
        user_id: user.id,
      };
      fitnessByDate.set(fitness.date, { ...previous, ...fitness });
    }
  });

  const fitnessImports = Array.from(fitnessByDate.values());

  if (!activities.length && !fitnessImports.length) {
    redirectToGarminWithError("No usable rows were found in the mapped CSV.");
  }

  if (activities.length) {
    const { error } = await supabase
      .from("activities")
      .upsert(activities, { onConflict: "user_id,source,external_id" });

    if (error) {
      redirectToGarminWithError(friendlyDatabaseError(error));
    }
  }

  if (fitnessImports.length) {
    const importDates = fitnessImports
      .map((row) => row.date)
      .filter((date): date is string => typeof date === "string");

    const { data: existingRows, error: existingError } = await supabase
      .from("fitness_metrics")
      .select("*")
      .eq("user_id", user.id)
      .in("date", importDates);

    if (existingError) {
      redirectToGarminWithError(friendlyDatabaseError(existingError));
    }

    const existingByDate = new Map(
      (existingRows ?? []).map((row) => [row.date, row]),
    );

    const upserts = fitnessImports.map((row) => {
      const existing = row.date ? existingByDate.get(row.date) : null;

      return {
        date: row.date ?? todayInLondon(),
        hrv: row.hrv ?? existing?.hrv ?? null,
        resting_hr: row.resting_hr ?? existing?.resting_hr ?? null,
        sleep_hours: row.sleep_hours ?? existing?.sleep_hours ?? null,
        sleep_score: row.sleep_score ?? existing?.sleep_score ?? null,
        training_load: row.training_load ?? existing?.training_load ?? null,
        training_status:
          row.training_status ?? existing?.training_status ?? null,
        user_id: user.id,
        weekly_distance_km:
          row.weekly_distance_km ?? existing?.weekly_distance_km ?? null,
      };
    });

    const { error } = await supabase
      .from("fitness_metrics")
      .upsert(upserts, { onConflict: "user_id,date" });

    if (error) {
      redirectToGarminWithError(friendlyDatabaseError(error));
    }
  }

  revalidatePath("/");
  revalidatePath("/garmin-import");
  redirectToGarminWithMessage(
    `Imported ${activities.length} activities and ${fitnessImports.length} fitness metric days.`,
  );
}

async function revalidatePortfolioViews() {
  revalidatePath("/");
  revalidatePath("/portfolio");
  revalidatePath("/manage");
}

async function getOrCreatePortfolioAccount(
  supabase: Awaited<ReturnType<typeof createSupabaseServerClient>>,
  payload: PortfolioAccountInsert,
) {
  const existing = await supabase
    .from("portfolio_accounts")
    .select("id")
    .eq("user_id", payload.user_id)
    .eq("name", payload.name)
    .eq("provider", payload.provider ?? "")
    .maybeSingle();

  if (existing.error) {
    throw new Error(friendlyDatabaseError(existing.error));
  }

  if (existing.data?.id) {
    return existing.data.id;
  }

  const created = await supabase
    .from("portfolio_accounts")
    .insert(payload)
    .select("id")
    .single();

  if (created.error) {
    throw new Error(friendlyDatabaseError(created.error));
  }

  return created.data.id;
}

async function upsertSeedHolding(
  supabase: Awaited<ReturnType<typeof createSupabaseServerClient>>,
  payload: PortfolioHoldingInsert,
) {
  const existing = await supabase
    .from("portfolio_holdings")
    .select("id")
    .eq("account_id", payload.account_id)
    .eq("ticker", payload.ticker ?? "")
    .maybeSingle();

  if (existing.error) {
    throw new Error(friendlyDatabaseError(existing.error));
  }

  if (existing.data?.id) {
    const { error } = await supabase
      .from("portfolio_holdings")
      .update(payload)
      .eq("id", existing.data.id);

    if (error) {
      throw new Error(friendlyDatabaseError(error));
    }

    return;
  }

  const { error } = await supabase.from("portfolio_holdings").insert(payload);

  if (error) {
    throw new Error(friendlyDatabaseError(error));
  }
}

export async function seedDefaultPortfolio() {
  const { supabase, user } = await requireAuthenticatedUser();

  try {
    const isaAccountId = await getOrCreatePortfolioAccount(supabase, {
      name: "Stocks & Shares ISA",
      provider: "Trading212",
      type: "ISA",
      user_id: user.id,
    });
    const lisaAccountId = await getOrCreatePortfolioAccount(supabase, {
      name: "Lifetime ISA",
      provider: "OneFamily",
      type: "LISA",
      user_id: user.id,
    });

    await Promise.all([
      upsertSeedHolding(supabase, {
        account_id: isaAccountId,
        auto_price_updates: true,
        currency: "GBP",
        exchange: "LSE",
        fund_name: "WEXU",
        ticker: "WEXU",
        units: 395,
      }),
      upsertSeedHolding(supabase, {
        account_id: isaAccountId,
        auto_price_updates: true,
        currency: "GBP",
        exchange: "LSE",
        fund_name: "VUAG",
        ticker: "VUAG",
        units: 29,
      }),
      upsertSeedHolding(supabase, {
        account_id: lisaAccountId,
        auto_price_updates: true,
        currency: "GBP",
        exchange: "Yahoo",
        fund_name: "Amundi Prime All Country World UCITS ETF Acc GBP",
        ticker: "AMUNDI_PRIME_ACWI",
        units: 1000,
      }),
    ]);
  } catch (error) {
    redirectToPortfolioWithError(
      error instanceof Error ? error.message : "Could not seed portfolio.",
    );
  }

  await revalidatePortfolioViews();
  redirectToPortfolioWithMessage("Default portfolio holdings added.");
}

export async function savePortfolioAccount(formData: FormData) {
  const { supabase, user } = await requireAuthenticatedUser();
  const id = formString(formData, "id");
  const name = formString(formData, "name");
  const type = formString(formData, "type");

  if (!name) {
    redirectToPortfolioWithError("Account name is required.");
  }

  if (!["ISA", "LISA", "Cash", "Pension"].includes(type)) {
    redirectToPortfolioWithError("Choose a valid account type.");
  }

  const payload = {
    name,
    provider: formString(formData, "provider") || null,
    type,
    user_id: user.id,
  };
  const result = id
    ? await supabase
        .from("portfolio_accounts")
        .update(payload)
        .eq("id", id)
        .eq("user_id", user.id)
    : await supabase.from("portfolio_accounts").insert(payload);

  if (result.error) {
    redirectToPortfolioWithError(friendlyDatabaseError(result.error));
  }

  await revalidatePortfolioViews();
  redirectToPortfolioWithMessage(id ? "Account updated." : "Account added.");
}

export async function savePortfolioHolding(formData: FormData) {
  const { supabase } = await requireAuthenticatedUser();
  const id = formString(formData, "id");
  const accountId = formString(formData, "account_id");
  const ticker = formString(formData, "ticker").toUpperCase();
  const latestPrice = nullableNumber(formData, "latest_price");

  if (!accountId) {
    redirectToPortfolioWithError("Choose a portfolio account.");
  }

  const payload = {
    account_id: accountId,
    auto_price_updates: formData.get("auto_price_updates") === "on",
    currency: formString(formData, "currency") || "GBP",
    exchange: formString(formData, "exchange") || null,
    fund_name: formString(formData, "fund_name") || ticker || null,
    ticker: ticker || null,
    units: nullableNumber(formData, "units") ?? 0,
  };
  const result = id
    ? await supabase.from("portfolio_holdings").update(payload).eq("id", id)
    : await supabase.from("portfolio_holdings").insert(payload);

  if (result.error) {
    redirectToPortfolioWithError(friendlyDatabaseError(result.error));
  }

  if (ticker && latestPrice !== null) {
    let adminSupabase: ReturnType<typeof createSupabaseServiceRoleClient>;
    try {
      adminSupabase = createSupabaseServiceRoleClient();
    } catch (error) {
      redirectToPortfolioWithError(
        error instanceof Error
          ? error.message
          : "Portfolio price writes are not configured.",
      );
    }

    const pricePayload: MarketPriceInsert = {
      currency: payload.currency,
      price: latestPrice,
      ticker,
      updated_at: new Date().toISOString(),
    };
    const { error } = await adminSupabase
      .from("market_prices")
      .upsert(pricePayload, { onConflict: "ticker" });

    if (error) {
      redirectToPortfolioWithError(friendlyDatabaseError(error));
    }
  }

  await revalidatePortfolioViews();
  redirectToPortfolioWithMessage(id ? "Holding updated." : "Holding added.");
}

export async function saveQuest(formData: FormData) {
  const { supabase, user } = await requireAuthenticatedUser();
  const id = formString(formData, "id");
  const title = formString(formData, "title");

  if (!title) {
    redirectWithError("Quest title is required.");
  }

  const payload = {
    category: formString(formData, "category") || null,
    current_value: nullableNumber(formData, "current_value"),
    deadline: formString(formData, "deadline") || null,
    status: formString(formData, "status") || "active",
    target_metric: formString(formData, "target_metric") || null,
    target_value: nullableNumber(formData, "target_value"),
    title,
    user_id: user.id,
  };

  const result = id
    ? await supabase
        .from("quests")
        .update(payload)
        .eq("id", id)
        .eq("user_id", user.id)
    : await supabase.from("quests").insert(payload);

  if (result.error) {
    redirectWithError(friendlyDatabaseError(result.error));
  }

  revalidatePath("/");
  redirectWithMessage(id ? "Quest updated." : "Quest created.");
}

export async function syncStravaActivities() {
  const { supabase, user } = await requireAuthenticatedUser();
  const config = getStravaConfig(process.env.NEXT_PUBLIC_SITE_URL);

  if (!config) {
    redirectToIntegrationsWithError(
      "Add STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET and STRAVA_REDIRECT_URI before syncing Strava.",
    );
  }

  try {
    const accessToken = await getValidStravaAccessToken(
      supabase,
      user.id,
      config,
    );
    const stravaActivities = await fetchStravaActivities(accessToken);
    const activityRows = stravaActivities.map((activity) =>
      mapStravaActivity(user.id, activity),
    );

    if (activityRows.length) {
      const { error } = await supabase
        .from("activities")
        .upsert(activityRows, {
          onConflict: "user_id,source,external_id",
        });

      if (error) {
        throw new Error(friendlyDatabaseError(error));
      }
    }

    const { error: updateError } = await supabase
      .from("strava_connections")
      .update({
        last_sync_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .eq("user_id", user.id);

    if (updateError) {
      throw new Error(friendlyDatabaseError(updateError));
    }

    revalidatePath("/");
    revalidatePath("/integrations");
    redirectToIntegrationsWithMessage(
      `Synced ${activityRows.length} Strava activities.`,
    );
  } catch (error) {
    redirectToIntegrationsWithError(
      error instanceof Error ? error.message : "Could not sync Strava.",
    );
  }
}

export async function disconnectStrava() {
  const { supabase, user } = await requireAuthenticatedUser();
  const { error } = await supabase
    .from("strava_connections")
    .delete()
    .eq("user_id", user.id);

  if (error) {
    redirectToIntegrationsWithError(friendlyDatabaseError(error));
  }

  revalidatePath("/integrations");
  redirectToIntegrationsWithMessage("Strava disconnected.");
}

async function loadInsightData() {
  const { supabase, user } = await requireAuthenticatedUser();
  const [
    activities,
    consultantLogs,
    dailyLogs,
    financeSnapshots,
    fitnessMetrics,
  ] = await Promise.all([
    supabase
      .from("activities")
      .select("*")
      .eq("user_id", user.id)
      .order("date", { ascending: false })
      .limit(3000),
    supabase
      .from("consultant_readiness_logs")
      .select("*")
      .eq("user_id", user.id)
      .order("date", { ascending: false })
      .limit(365),
    supabase
      .from("daily_logs")
      .select("*")
      .eq("user_id", user.id)
      .order("date", { ascending: false })
      .limit(365),
    supabase
      .from("finance_snapshots")
      .select("*")
      .eq("user_id", user.id)
      .order("date", { ascending: false })
      .limit(365),
    supabase
      .from("fitness_metrics")
      .select("*")
      .eq("user_id", user.id)
      .order("date", { ascending: false })
      .limit(365),
  ]);

  const error =
    activities.error ||
    consultantLogs.error ||
    dailyLogs.error ||
    financeSnapshots.error ||
    fitnessMetrics.error;

  if (error) {
    throw new Error(friendlyDatabaseError(error));
  }

  return {
    activities: sortByDateAscending(activities.data ?? []),
    consultantLogs: sortByDateAscending(consultantLogs.data ?? []),
    dailyLogs: sortByDateAscending(dailyLogs.data ?? []),
    financeSnapshots: sortByDateAscending(financeSnapshots.data ?? []),
    fitnessMetrics: sortByDateAscending(fitnessMetrics.data ?? []),
  };
}

export async function generateAiInsightAction(
  _state: AiInsightActionState,
  formData: FormData,
): Promise<AiInsightActionState> {
  const requestedKind = formString(formData, "kind");
  const kind: InsightKind = requestedKind === "weekly" ? "weekly" : "daily";

  try {
    const data = await loadInsightData();
    const result = await generateAiInsight(kind, data);

    return {
      content: result.content,
      error: result.error,
      generatedAt: result.generatedAt,
      kind: result.kind,
      source: result.source,
      status: "success",
    };
  } catch (error) {
    return {
      error:
        error instanceof Error
          ? error.message
          : "Could not generate AI insight.",
      kind,
      status: "error",
    };
  }
}

export async function submitLearningQuiz(formData: FormData) {
  const { supabase, user } = await requireAuthenticatedUser();
  const lessonSlug = formString(formData, "lesson_slug");
  const lesson = getLearningLesson(lessonSlug);

  if (!lesson) {
    redirectToLearningWithError("That lesson is not registered in Learning Zone.");
  }

  const selectedAnswers = Object.fromEntries(
    lesson.questions.map((question) => [
      question.id,
      formString(formData, `question_${question.id}`),
    ]),
  );
  const missingAnswer = lesson.questions.find(
    (question) => !selectedAnswers[question.id],
  );

  if (missingAnswer) {
    redirectToLearningLessonWithError(lesson.slug, "Answer every question before submitting.");
  }

  const priorSessions = await supabase
    .from("learning_sessions")
    .select("*")
    .eq("user_id", user.id)
    .order("completed_at", { ascending: false })
    .limit(200);

  if (priorSessions.error) {
    redirectToLearningLessonWithError(
      lesson.slug,
      friendlyDatabaseError(priorSessions.error),
    );
  }

  const scored = scoreLearningAttempt(
    lesson,
    selectedAnswers,
    priorSessions.data ?? [],
  );
  const startedAtRaw = formString(formData, "started_at");
  const startedAt = Number.isNaN(Date.parse(startedAtRaw))
    ? new Date().toISOString()
    : new Date(startedAtRaw).toISOString();
  const readingSeconds = Math.max(
    0,
    nullableInteger(formData, "reading_seconds") ?? 0,
  );
  const payload: LearningSessionInsert = {
    answer_payload: scored.answers.map((answer) => {
      const question = lesson.questions.find(
        (item) => item.id === answer.questionId,
      );

      return {
        correct: answer.correct,
        correctAnswer: question
          ? answerLabel(question, answer.correctChoiceId)
          : answer.correctChoiceId,
        dimension: answer.dimension,
        explanation: answer.explanation,
        prompt: answer.prompt,
        selectedAnswer: question
          ? answerLabel(question, answer.selectedChoiceId)
          : answer.selectedChoiceId,
      };
    }),
    application_points: scored.consistencyPoints,
    breadth_points: scored.breadthPoints,
    consistency_points: scored.consistencyPoints,
    completed_at: new Date().toISOString(),
    correct_count: scored.correctCount,
    depth_points: scored.depthPoints,
    knowledge_points: scored.depthPoints,
    lesson_slug: lesson.slug,
    reading_seconds: readingSeconds,
    reasoning_points: scored.reasoningPoints,
    retention_points: scored.retentionPoints,
    score_points: scored.scorePoints,
    started_at: startedAt,
    topic: lesson.topic,
    total_questions: scored.totalQuestions,
    user_id: user.id,
  };
  const inserted = await supabase
    .from("learning_sessions")
    .insert(payload)
    .select("id")
    .single();

  if (inserted.error || !inserted.data) {
    redirectToLearningLessonWithError(
      lesson.slug,
      friendlyDatabaseError(inserted.error),
    );
  }

  revalidatePath("/learning-zone");
  revalidatePath(`/learning-zone/lesson/${lesson.slug}`);
  redirect(`/learning-zone/result/${inserted.data.id}`);
}

export async function saveLearningLessonNote(formData: FormData) {
  const { supabase, user } = await requireAuthenticatedUser();
  const lessonSlug = formString(formData, "lesson_slug");
  const lesson = getLearningLesson(lessonSlug);

  if (!lesson) {
    redirectToLearningWithError("That lesson is not registered in Learning Zone.");
  }

  const note = formString(formData, "note");
  const highlight = formString(formData, "highlight");
  const payload: LearningLessonNoteInsert = {
    bookmarked: formData.get("bookmarked") === "on",
    highlight: highlight || null,
    lesson_slug: lesson.slug,
    note: note || null,
    revisit: formData.get("revisit") === "on",
    topic: lesson.topic,
    updated_at: new Date().toISOString(),
    user_id: user.id,
  };
  const saved = await supabase
    .from("learning_lesson_notes")
    .upsert(payload, { onConflict: "user_id,lesson_slug" });

  if (saved.error) {
    redirectToLearningLessonWithError(lesson.slug, friendlyDatabaseError(saved.error));
  }

  revalidatePath("/learning-zone");
  revalidatePath(`/learning-zone/lesson/${lesson.slug}`);
  redirect(`/learning-zone/lesson/${lesson.slug}?message=Notebook saved`);
}
