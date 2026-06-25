export type DatabaseSetupIssue = {
  message: string;
  missingTables: string[];
};

type SupabaseLikeError = {
  code?: string;
  details?: string | null;
  hint?: string | null;
  message?: string;
};

const SCHEMA_ERROR_CODES = new Set(["42P01", "PGRST106", "PGRST205"]);

function errorText(error: SupabaseLikeError | string | null | undefined) {
  if (!error) {
    return "";
  }

  if (typeof error === "string") {
    return error;
  }

  return [error.message, error.details, error.hint].filter(Boolean).join(" ");
}

export function missingTablesFromError(
  error: SupabaseLikeError | string | null | undefined,
) {
  const text = errorText(error);
  const tables = new Set<string>();

  for (const match of text.matchAll(/public\.([a-z_]+)/gi)) {
    tables.add(match[1]);
  }

  return Array.from(tables).sort();
}

export function isDatabaseSetupError(
  error: SupabaseLikeError | string | null | undefined,
) {
  if (!error) {
    return false;
  }

  const text = errorText(error).toLowerCase();
  const code = typeof error === "string" ? undefined : error.code;

  return (
    (code ? SCHEMA_ERROR_CODES.has(code) : false) ||
    text.includes("schema cache") ||
    (text.includes("relation") && text.includes("does not exist")) ||
    text.includes("could not find the table")
  );
}

export function databaseSetupMessage(missingTables: string[]) {
  const suffix = missingTables.length
    ? ` Missing table${missingTables.length === 1 ? "" : "s"}: ${missingTables.join(", ")}.`
    : "";

  return `Supabase database setup is incomplete. Run supabase/schema.sql in the Supabase SQL Editor, then refresh Zach OS.${suffix}`;
}

export function getDatabaseSetupIssue(
  errors: Array<SupabaseLikeError | string | null | undefined>,
): DatabaseSetupIssue | null {
  const setupErrors = errors.filter(isDatabaseSetupError);

  if (!setupErrors.length) {
    return null;
  }

  const missingTables = Array.from(
    new Set(setupErrors.flatMap(missingTablesFromError)),
  ).sort();

  return {
    message: databaseSetupMessage(missingTables),
    missingTables,
  };
}

export function friendlyDatabaseError(
  error: SupabaseLikeError | string | null | undefined,
) {
  if (!error) {
    return "Something went wrong.";
  }

  if (isDatabaseSetupError(error)) {
    return databaseSetupMessage(missingTablesFromError(error));
  }

  return errorText(error) || "Something went wrong.";
}
