import { ZachPageShell, ZachPanel } from "@/components/zach-shell";

function SkeletonBlock({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse rounded-md bg-[#2c2824]/[0.08] ${className}`} />;
}

export default function AppLoading() {
  return (
    <ZachPageShell
      active="dashboard"
      subtitle="Loading today's actions and context."
      title="ZachOS"
    >
      <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <ZachPanel key={index}>
            <SkeletonBlock className="h-3 w-24" />
            <SkeletonBlock className="mt-4 h-8 w-20" />
            <SkeletonBlock className="mt-3 h-3 w-32" />
          </ZachPanel>
        ))}
      </section>
      <section className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_420px]">
        <ZachPanel>
          <SkeletonBlock className="h-3 w-24" />
          <SkeletonBlock className="mt-4 h-9 w-64 max-w-full" />
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <SkeletonBlock className="h-24" key={index} />
            ))}
          </div>
        </ZachPanel>
        <ZachPanel>
          <SkeletonBlock className="h-3 w-24" />
          <SkeletonBlock className="mt-4 h-9 w-44" />
          <div className="mt-5 grid gap-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <SkeletonBlock className="h-12" key={index} />
            ))}
          </div>
        </ZachPanel>
      </section>
    </ZachPageShell>
  );
}
