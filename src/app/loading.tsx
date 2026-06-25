export default function Loading() {
  return (
    <main className="min-h-screen bg-[#07090d] px-4 py-8 text-zinc-100">
      <div className="mx-auto grid w-full max-w-7xl gap-4">
        <div className="h-24 animate-pulse rounded border border-white/10 bg-white/[0.04]" />
        <div className="grid gap-4 lg:grid-cols-4">
          <div className="h-28 animate-pulse rounded border border-white/10 bg-white/[0.04]" />
          <div className="h-28 animate-pulse rounded border border-white/10 bg-white/[0.04]" />
          <div className="h-28 animate-pulse rounded border border-white/10 bg-white/[0.04]" />
          <div className="h-28 animate-pulse rounded border border-white/10 bg-white/[0.04]" />
        </div>
        <div className="h-80 animate-pulse rounded border border-cyan-200/20 bg-cyan-200/[0.05]" />
      </div>
    </main>
  );
}

