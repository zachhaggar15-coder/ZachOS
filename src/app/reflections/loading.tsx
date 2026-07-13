import { ZachPageShell, ZachPanel } from "@/components/zach-shell";

function SkeletonBlock({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse rounded-md bg-[#2c2824]/[0.08] ${className}`} />;
}

export default function ReflectionsLoading() {
  return (
    <ZachPageShell
      active="reflections"
      subtitle="Preparing your daily snapshots."
      title="Reflections"
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
      <ZachPanel>
        <SkeletonBlock className="h-3 w-28" />
        <SkeletonBlock className="mt-4 h-9 w-64 max-w-full" />
        <SkeletonBlock className="mt-3 h-4 w-full max-w-2xl" />
      </ZachPanel>
      <section className="grid gap-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <ZachPanel key={index}>
            <SkeletonBlock className="h-4 w-28" />
            <SkeletonBlock className="mt-3 h-8 w-56" />
            <div className="mt-5 grid gap-3 md:grid-cols-4">
              {Array.from({ length: 4 }).map((__, statIndex) => (
                <SkeletonBlock className="h-16" key={statIndex} />
              ))}
            </div>
            <SkeletonBlock className="mt-5 h-24 w-full" />
          </ZachPanel>
        ))}
      </section>
    </ZachPageShell>
  );
}
