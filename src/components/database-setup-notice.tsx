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
    <section className="rounded-md border border-[#b08c3c]/35 bg-[#f5ead0] p-5 text-[#2c2824]">
      <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
        Supabase schema
      </p>
      <h2 className="zach-display mt-2 text-3xl font-medium text-[#111820]">
        {title}
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f574d]">
        Zach OS can log you in, but your Supabase database does not have all of
        the required tables yet. Open your Supabase project, go to SQL Editor,
        paste the full contents of <code>supabase/schema.sql</code>, run it,
        then refresh this page.
      </p>
      <div className="mt-4 rounded-md border border-[#2c2824]/[0.13] bg-[#fffaf2] p-3 text-sm">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#9a7d5f]">
          Missing
        </p>
        <p className="mt-1 font-mono text-[#5a3228]">{tables}</p>
      </div>
      <p className="mt-3 text-xs leading-5 text-[#71685c]">
        This is expected if the environment variables were added before the SQL
        schema was run. The app uses the anon key, so it cannot create database
        tables automatically, which keeps the setup safer.
      </p>
    </section>
  );
}
