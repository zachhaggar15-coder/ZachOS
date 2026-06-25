import type { DatabaseSetupIssue } from "@/lib/database-setup";

export function DatabaseSetupNotice({
  issue,
  title = "Database setup needed",
}: {
  issue: DatabaseSetupIssue;
  title?: string;
}) {
  const tables = issue.missingTables.length
    ? issue.missingTables.join(", ")
    : "Zach OS tables";

  return (
    <section className="rounded border border-amber-200/25 bg-amber-300/[0.08] p-5 text-amber-50">
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-amber-100/80">
        Supabase schema
      </p>
      <h2 className="mt-2 text-xl font-semibold text-white">{title}</h2>
      <p className="mt-3 max-w-3xl text-sm leading-6 text-amber-50/85">
        Zach OS can log you in, but your Supabase database does not have all of
        the required tables yet. Open your Supabase project, go to SQL Editor,
        paste the full contents of <code>supabase/schema.sql</code>, run it,
        then refresh this page.
      </p>
      <div className="mt-4 rounded border border-amber-100/15 bg-black/25 p-3 text-sm">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-amber-100/70">
          Missing
        </p>
        <p className="mt-1 font-mono text-amber-50">{tables}</p>
      </div>
      <p className="mt-3 text-xs leading-5 text-amber-50/70">
        This is expected if the environment variables were added before the SQL
        schema was run. The app uses the anon key, so it cannot create database
        tables automatically, which keeps the setup safer.
      </p>
    </section>
  );
}
