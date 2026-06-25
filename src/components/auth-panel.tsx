import { signIn, signUp } from "@/app/actions";

type AuthPanelProps = {
  error?: string;
  message?: string;
};

const inputClass =
  "h-11 rounded border border-white/10 bg-white/[0.04] px-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-cyan-300/70 focus:bg-white/[0.07]";

export function AuthPanel({ error, message }: AuthPanelProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#07090d] px-4 text-zinc-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_75%_20%,rgba(16,185,129,0.11),transparent_28%)]" />
      <section className="relative grid w-full max-w-5xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex min-h-[520px] flex-col justify-between rounded border border-white/10 bg-white/[0.035] p-8 shadow-2xl shadow-black/30">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-cyan-200/80">
              Private dashboard
            </p>
            <h1 className="mt-5 text-5xl font-semibold tracking-tight text-white">
              Zach OS
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-zinc-400">
              Fitness, finance and intellectual habits in one secure command
              centre. Clean analytics, with just enough RPG character-sheet
              energy to make the numbers feel alive.
            </p>
          </div>

          <div className="grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-3">
            {["Endurance", "Knowledge", "Wealth"].map((attribute) => (
              <div key={attribute} className="border-l border-cyan-200/30 pl-4">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-zinc-500">
                  Attribute
                </p>
                <p className="mt-2 text-sm font-medium text-zinc-100">
                  {attribute}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded border border-white/10 bg-[#0c1117]/95 p-6 shadow-2xl shadow-black/30">
          <div className="mb-5">
            <h2 className="text-xl font-semibold text-white">Sign in</h2>
            <p className="mt-1 text-sm text-zinc-500">
              Supabase Auth keeps the app private.
            </p>
          </div>

          {(error || message) && (
            <div
              className={`mb-5 rounded border px-3 py-2 text-sm ${
                error
                  ? "border-rose-300/25 bg-rose-400/10 text-rose-100"
                  : "border-emerald-300/25 bg-emerald-400/10 text-emerald-100"
              }`}
            >
              {error || message}
            </div>
          )}

          <form action={signIn} className="grid gap-3">
            <label className="grid gap-1.5 text-sm text-zinc-300">
              Email
              <input
                autoComplete="email"
                className={inputClass}
                name="email"
                required
                type="email"
              />
            </label>
            <label className="grid gap-1.5 text-sm text-zinc-300">
              Password
              <input
                autoComplete="current-password"
                className={inputClass}
                name="password"
                required
                type="password"
              />
            </label>
            <button
              className="mt-2 h-11 rounded bg-cyan-200 px-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
              type="submit"
            >
              Log in
            </button>
          </form>

          <div className="my-6 h-px bg-white/10" />

          <div className="mb-4">
            <h3 className="text-sm font-semibold text-zinc-200">
              First time setup
            </h3>
            <p className="mt-1 text-sm text-zinc-500">
              Create a Supabase Auth user for this private dashboard.
            </p>
          </div>

          <form action={signUp} className="grid gap-3">
            <label className="grid gap-1.5 text-sm text-zinc-300">
              Email
              <input
                autoComplete="email"
                className={inputClass}
                name="email"
                required
                type="email"
              />
            </label>
            <label className="grid gap-1.5 text-sm text-zinc-300">
              Password
              <input
                autoComplete="new-password"
                className={inputClass}
                minLength={6}
                name="password"
                required
                type="password"
              />
            </label>
            <button
              className="h-11 rounded border border-white/10 bg-white/[0.04] px-4 text-sm font-semibold text-zinc-100 transition hover:border-emerald-200/40 hover:bg-emerald-300/10"
              type="submit"
            >
              Create account
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
