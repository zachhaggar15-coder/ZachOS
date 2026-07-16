import { ZachPageShell, ZachPanel } from "@/components/zach-shell";

function SkeletonBlock({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse rounded-md bg-[#2c2824]/[0.08] ${className}`} />;
}

export default function LearningZoneLoading() {
  return (
    <ZachPageShell
      active="learning"
      subtitle="Preparing the wheel, random lesson picker and score anatomy."
      title="Learning Zone"
    >
      <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <ZachPanel key={index}>
            <SkeletonBlock className="h-3 w-20" />
            <SkeletonBlock className="mt-4 h-8 w-16" />
            <SkeletonBlock className="mt-3 h-3 w-28" />
          </ZachPanel>
        ))}
      </section>
      <section className="grid gap-4 xl:grid-cols-[minmax(0,1.1fr)_minmax(340px,0.9fr)]">
        <ZachPanel>
          <SkeletonBlock className="h-3 w-24" />
          <SkeletonBlock className="mt-4 h-9 w-56" />
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <SkeletonBlock className="h-28" key={index} />
            ))}
          </div>
        </ZachPanel>
        <ZachPanel>
          <SkeletonBlock className="h-3 w-24" />
          <SkeletonBlock className="mt-4 h-9 w-48" />
          <div className="mt-5 grid gap-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <SkeletonBlock className="h-20" key={index} />
            ))}
          </div>
        </ZachPanel>
      </section>
    </ZachPageShell>
  );
}
