"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#07090d] px-4 text-zinc-100">
      <section className="w-full max-w-2xl rounded border border-rose-300/25 bg-rose-400/10 p-8">
        <p className="font-mono text-xs uppercase tracking-[0.32em] text-rose-100/80">
          Zach OS error
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white">
          Something failed to load
        </h1>
        <p className="mt-3 text-sm leading-6 text-rose-100/80">
          {error.message || "The page hit an unexpected error."}
        </p>
        <button
          className="mt-5 h-10 rounded bg-rose-100 px-4 text-sm font-semibold text-rose-950 transition hover:bg-white"
          onClick={reset}
          type="button"
        >
          Try again
        </button>
      </section>
    </main>
  );
}

