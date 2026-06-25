export default function Loading() {
  return (
    <main className="min-h-screen bg-[#07090d] px-4 py-8 text-zinc-100">
      <div className="mx-auto grid w-full max-w-7xl gap-4">
        <div className="h-24 animate-pulse rounded border border-white/10 bg-white/[0.04]" />
        <div className="h-72 animate-pulse rounded border border-cyan-200/20 bg-cyan-200/[0.05]" />
        <div className="h-72 animate-pulse rounded border border-white/10 bg-white/[0.04]" />
      </div>
    </main>
  );
}

