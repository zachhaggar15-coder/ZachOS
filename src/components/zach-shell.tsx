import Link from "next/link";

import { signOut } from "@/app/actions";
import type { DatabaseSetupIssue } from "@/lib/database-setup";

type ZachNavKey =
  | "activities"
  | "ai"
  | "dashboard"
  | "garmin"
  | "hrv"
  | "learning"
  | "manage"
  | "mood"
  | "portfolio"
  | "reflections"
  | "recovery"
  | "review"
  | "running";

type ZachPageShellProps = {
  active?: ZachNavKey;
  actions?: React.ReactNode;
  children: React.ReactNode;
  kicker?: string;
  maxWidth?: string;
  subtitle?: React.ReactNode;
  title: string;
  userEmail?: string | null;
};

const navItems: Array<{ href: string; key: ZachNavKey; label: string }> = [
  { href: "/", key: "dashboard", label: "Dashboard" },
  { href: "/review", key: "review", label: "Review" },
  { href: "/reflections", key: "reflections", label: "Reflections" },
  { href: "/learning-zone", key: "learning", label: "Learning" },
  { href: "/activities", key: "activities", label: "Activities" },
  { href: "/portfolio", key: "portfolio", label: "Portfolio" },
  { href: "/ai-insights", key: "ai", label: "Insights" },
  { href: "/manage", key: "manage", label: "Manage" },
];

const mobileNavItems: Array<{
  href: string;
  key: ZachNavKey;
  label: string;
}> = [
  { href: "/", key: "dashboard", label: "Home" },
  { href: "/#habits", key: "dashboard", label: "Habits" },
  { href: "/learning-zone", key: "learning", label: "Learn" },
  { href: "/review", key: "review", label: "Review" },
];

export function ZachKicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="zach-ui text-[10px] font-semibold uppercase leading-none tracking-[0.24em] text-[#9a7d5f]">
      {children}
    </p>
  );
}

export function ZachTopNav({ active }: { active?: ZachNavKey }) {
  return (
    <nav className="flex flex-wrap items-center gap-1.5 border-y border-[#2c2824]/[0.13] py-2">
      {navItems.map((item) => (
        <Link
          className={`zach-ui rounded-full px-3 py-1.5 text-xs font-semibold transition ${
            active === item.key
              ? "bg-[#241f1a] text-[#f9f4ec]"
              : "text-[#6f6254] hover:bg-[#2c2824]/[0.06] hover:text-[#2c2824]"
          }`}
          href={item.href}
          key={item.key}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export function ZachMobileBottomNav({ active }: { active?: ZachNavKey }) {
  return (
    <nav className="zach-ui fixed inset-x-0 bottom-0 z-40 border-t border-[#2c2824]/[0.13] bg-[#fffaf2]/95 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-2 shadow-[0_-10px_30px_rgba(44,40,36,0.08)] backdrop-blur lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-4 gap-1">
        {mobileNavItems.map((item) => (
          <Link
            className={`flex min-h-11 items-center justify-center rounded-md px-2 text-xs font-semibold transition ${
              active === item.key && !item.href.includes("#")
                ? "bg-[#241f1a] text-[#f9f4ec]"
                : "text-[#6f6254] hover:bg-[#2c2824]/[0.06] hover:text-[#2c2824]"
            }`}
            href={item.href}
            key={`${item.href}-${item.label}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export function ZachButtonLink({
  children,
  href,
  primary = false,
}: {
  children: React.ReactNode;
  href: string;
  primary?: boolean;
}) {
  return (
    <Link
      className={`zach-ui inline-flex h-10 items-center rounded-md border px-4 text-sm font-semibold transition ${
        primary
          ? "border-[#bb5d3a] bg-[#bb5d3a] text-[#f9f4ec] hover:bg-[#a94f31]"
          : "border-[#d2c8b8] bg-[#fffaf2] text-[#2c2824] hover:border-[#b9aa95]"
      }`}
      href={href}
    >
      {children}
    </Link>
  );
}

export function ZachPageShell({
  active,
  actions,
  children,
  kicker = "Personal operating system",
  maxWidth = "max-w-[1514px]",
  subtitle,
  title,
  userEmail,
}: ZachPageShellProps) {
  return (
    <main className="zach-ui min-h-screen bg-[#f9f4ec] text-[#2c2824]">
      <div className={`mx-auto flex w-full ${maxWidth} flex-col gap-6 px-5 pb-28 pt-6 sm:px-8 lg:px-10 lg:py-8`}>
        <header className="grid gap-5 border-b border-[#2c2824] pb-5 lg:grid-cols-[minmax(240px,0.8fr)_minmax(0,1.2fr)_auto] lg:items-end">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.45em] text-[#9a7d5f]">
              {kicker}
            </div>
            <h1 className="zach-display mt-1 text-[42px] font-medium leading-none tracking-[-0.02em] text-[#111820] sm:text-[52px]">
              {title}
            </h1>
            {subtitle && (
              <div className="mt-3 max-w-2xl text-sm leading-6 text-[#71685c]">
                {subtitle}
              </div>
            )}
          </div>

          <div className="lg:justify-self-center">
            <ZachTopNav active={active} />
            {userEmail && (
              <p className="mt-2 text-center text-[11px] font-medium text-[#9a8d7a]">
                Signed in as {userEmail}
              </p>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2 lg:justify-end">
            {actions}
            <form action={signOut}>
              <button
                className="zach-ui h-10 rounded-md border border-[#241f1a] bg-[#241f1a] px-4 text-sm font-semibold text-[#f9f4ec] transition hover:bg-[#3a342c]"
                type="submit"
              >
                Log out
              </button>
            </form>
          </div>
        </header>
        {children}
      </div>
      <ZachMobileBottomNav active={active} />
    </main>
  );
}

export function ZachPanel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-md border border-[#2c2824]/[0.13] bg-[#fffaf2] p-5 shadow-[0_1px_0_rgba(44,40,36,0.04)] ${className}`}
    >
      {children}
    </section>
  );
}

export function ZachMetric({
  label,
  meta,
  value,
}: {
  label: string;
  meta?: React.ReactNode;
  value: React.ReactNode;
}) {
  return (
    <article className="rounded-md border border-[#2c2824]/[0.1] bg-[#f9f4ec] p-4">
      <ZachKicker>{label}</ZachKicker>
      <div className="zach-display mt-3 text-3xl font-medium leading-none text-[#111820]">
        {value}
      </div>
      {meta && <div className="mt-2 text-xs leading-5 text-[#8c8273]">{meta}</div>}
    </article>
  );
}

export function ZachNotice({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "error" | "neutral" | "success" | "warning";
}) {
  const toneClass = {
    error: "border-[#bb5d3a]/35 bg-[#bb5d3a]/10 text-[#8d3f26]",
    neutral: "border-[#2c2824]/[0.13] bg-[#2c2824]/[0.04] text-[#6f6254]",
    success: "border-[#7a8c5a]/35 bg-[#7a8c5a]/10 text-[#54683b]",
    warning: "border-[#b08c3c]/35 bg-[#b08c3c]/10 text-[#725822]",
  }[tone];

  return <div className={`rounded-md border px-4 py-3 text-sm ${toneClass}`}>{children}</div>;
}

export function ZachEmpty({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-md border border-dashed border-[#2c2824]/[0.18] bg-[#f9f4ec] p-6 text-sm text-[#8c8273]">
      {children}
    </div>
  );
}

export function ZachSetupRequired({
  message,
  title = "Connect Supabase to launch Zach OS",
}: {
  message?: string;
  title?: string;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f9f4ec] px-4 text-[#2c2824]">
      <section className="w-full max-w-2xl rounded-md border border-[#2c2824]/[0.13] bg-[#fffaf2] p-8">
        <ZachKicker>Setup required</ZachKicker>
        <h1 className="zach-display mt-4 text-4xl font-medium text-[#111820]">
          {title}
        </h1>
        <p className="mt-3 text-sm leading-6 text-[#71685c]">
          {message ??
            "Add the public Supabase URL and anon key to your environment, then run the SQL schema from the README."}
        </p>
        <pre className="mt-5 overflow-x-auto rounded bg-[#2c2824]/[0.06] p-4 text-sm text-[#5a3228]">
          NEXT_PUBLIC_SUPABASE_URL=...{"\n"}
          NEXT_PUBLIC_SUPABASE_ANON_KEY=...
        </pre>
      </section>
    </main>
  );
}

export function ZachTable({
  columns,
  empty,
  rows,
}: {
  columns: string[];
  empty?: React.ReactNode;
  rows: Array<Record<string, React.ReactNode>>;
}) {
  if (!rows.length) {
    return <ZachEmpty>{empty ?? "No rows yet."}</ZachEmpty>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left text-sm">
        <thead className="text-[10px] uppercase tracking-[0.18em] text-[#9a7d5f]">
          <tr>
            {columns.map((column) => (
              <th
                className="whitespace-nowrap border-b border-[#2c2824]/[0.13] px-3 py-2 font-semibold"
                key={column}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-[#3a342c]">
          {rows.map((row, index) => (
            <tr className="border-b border-[#2c2824]/[0.08]" key={index}>
              {columns.map((column) => (
                <td className="whitespace-nowrap px-3 py-2.5" key={column}>
                  {row[column] ?? "--"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ZachDatabaseSetupNotice({
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
    <ZachPanel className="border-[#b08c3c]/35 bg-[#f5ead0]">
      <ZachKicker>Supabase schema</ZachKicker>
      <h2 className="zach-display mt-2 text-3xl font-medium text-[#111820]">
        {title}
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f574d]">
        Zach OS can log you in, but your Supabase database does not have all of
        the required tables yet. Open your Supabase project, go to SQL Editor,
        paste the full contents of <code>supabase/schema.sql</code>, run it,
        then refresh this page.
      </p>
      <div className="mt-4 rounded border border-[#2c2824]/[0.13] bg-[#fffaf2] p-3 text-sm">
        <ZachKicker>Missing</ZachKicker>
        <p className="mt-2 font-mono text-[#5a3228]">{tables}</p>
      </div>
    </ZachPanel>
  );
}
