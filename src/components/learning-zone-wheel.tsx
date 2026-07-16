"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import type { LearningTopicId } from "@/lib/learning-zone";

type LearningWheelTopic = {
  accent: string;
  href: string;
  id: LearningTopicId;
  label: string;
  shortLabel: string;
};

type LearningZoneWheelProps = {
  topics: LearningWheelTopic[];
};

export function LearningZoneWheel({ topics }: LearningZoneWheelProps) {
  const [selectedTopic, setSelectedTopic] = useState<LearningWheelTopic | null>(
    null,
  );
  const [rotation, setRotation] = useState(0);
  const gradient = useMemo(() => {
    const slice = 360 / topics.length;

    return topics
      .map((topic, index) => {
        const start = index * slice;
        const end = (index + 1) * slice;
        return `${topic.accent} ${start}deg ${end}deg`;
      })
      .join(", ");
  }, [topics]);

  function spin() {
    const nextIndex = Math.floor(Math.random() * topics.length);
    const slice = 360 / topics.length;
    const targetAngle = nextIndex * slice + slice / 2;
    const fullTurns = 5 + Math.floor(Math.random() * 3);
    const nextRotation = fullTurns * 360 + (360 - targetAngle);

    setSelectedTopic(topics[nextIndex]);
    setRotation((current) => current + nextRotation);
  }

  return (
    <section className="rounded-md border border-[#2c2824]/[0.13] bg-[#fffaf2] p-5">
      <div className="grid gap-5 lg:grid-cols-[minmax(240px,320px)_minmax(0,1fr)] lg:items-center">
        <div className="relative mx-auto aspect-square w-full max-w-[300px]">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-[-8px] z-10 h-0 w-0 -translate-x-1/2 border-x-[10px] border-t-[20px] border-x-transparent border-t-[#241f1a]"
          />
          <div
            className="grid h-full w-full place-items-center rounded-full border border-[#2c2824]/20 shadow-[inset_0_0_0_10px_rgba(255,250,242,0.55),0_18px_40px_rgba(44,40,36,0.12)] transition-transform duration-1000 ease-out"
            style={{
              background: `conic-gradient(${gradient})`,
              transform: `rotate(${rotation}deg)`,
            }}
          >
            <div className="grid h-[42%] w-[42%] place-items-center rounded-full border border-[#2c2824]/15 bg-[#fffaf2] text-center shadow-sm">
              <span className="zach-ui text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9a7d5f]">
                Learn
              </span>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 grid place-items-center">
            <div className="relative h-full w-full">
              {topics.map((topic, index) => {
                const angle = (360 / topics.length) * index + 360 / topics.length / 2;

                return (
                  <span
                    className="absolute left-1/2 top-1/2 rounded-full bg-[#fffaf2]/90 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#2c2824] shadow-sm"
                    key={topic.id}
                    style={{
                      transform: `rotate(${angle}deg) translateY(-112px) rotate(${-angle}deg) translate(-50%, -50%)`,
                    }}
                  >
                    {topic.shortLabel}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div>
            <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
              Topic selector
            </p>
            <h2 className="zach-display mt-1 text-4xl font-medium text-[#111820]">
              Spin for today&apos;s domain
            </h2>
          </div>
          <div
            aria-live="polite"
            className="min-h-[76px] rounded-md border border-[#2c2824]/[0.1] bg-[#f9f4ec] p-4"
          >
            <p className="text-sm font-semibold text-[#2c2824]">
              {selectedTopic
                ? selectedTopic.label
                : "Ready when you are."}
            </p>
            <p className="mt-1 text-sm leading-6 text-[#71685c]">
              {selectedTopic
                ? "The next page will choose a random unfinished lesson inside that topic."
                : "Philosophy, marketing, economics and science are loaded."}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              className="h-10 rounded-md border border-[#bb5d3a] bg-[#bb5d3a] px-4 text-sm font-semibold text-[#f9f4ec] transition hover:bg-[#a94f31] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bb5d3a]"
              onClick={spin}
              type="button"
            >
              Spin wheel
            </button>
            {selectedTopic && (
              <Link
                className="inline-flex h-10 items-center rounded-md border border-[#d2c8b8] bg-[#fffaf2] px-4 text-sm font-semibold text-[#2c2824] transition hover:border-[#b9aa95]"
                href={selectedTopic.href}
              >
                Study {selectedTopic.label}
              </Link>
            )}
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {topics.map((topic) => (
              <Link
                className="rounded-md border border-[#2c2824]/[0.1] bg-[#f9f4ec] px-3 py-2 text-sm font-semibold text-[#2c2824] transition hover:border-[#bb5d3a]/40"
                href={topic.href}
                key={topic.id}
              >
                <span
                  className="mr-2 inline-block h-2 w-2 rounded-full"
                  style={{ backgroundColor: topic.accent }}
                />
                {topic.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
