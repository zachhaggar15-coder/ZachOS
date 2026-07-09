import Link from "next/link";

export default function OfflinePage() {
  return (
    <main className="zach-ui flex min-h-screen items-center justify-center bg-[#f9f4ec] px-5 py-10 text-[#2c2824]">
      <section className="w-full max-w-md rounded-md border border-[#2c2824]/[0.13] bg-[#fffaf2] p-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
          ZachOS
        </p>
        <h1 className="zach-display mt-3 text-4xl font-medium leading-none text-[#111820]">
          Offline
        </h1>
        <p className="mt-4 text-sm leading-6 text-[#71685c]">
          The app shell is available, but your private dashboard data needs a
          connection to Supabase. Reconnect and refresh to continue.
        </p>
        <Link
          className="mt-5 inline-flex h-11 items-center rounded-md border border-[#241f1a] bg-[#241f1a] px-4 text-sm font-semibold text-[#f9f4ec]"
          href="/"
        >
          Try dashboard
        </Link>
      </section>
    </main>
  );
}
