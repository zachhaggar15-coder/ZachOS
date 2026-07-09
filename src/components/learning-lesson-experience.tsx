"use client";

import { useEffect, useMemo, useState } from "react";

import { submitLearningQuiz } from "@/app/actions";
import type { LearningLesson } from "@/lib/learning-zone";

type LearningLessonExperienceProps = {
  lesson: LearningLesson;
};

function formatTimer(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

export function LearningLessonExperience({ lesson }: LearningLessonExperienceProps) {
  const [quizOpen, setQuizOpen] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [startedAt] = useState(() => new Date().toISOString());
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>(
    {},
  );
  const estimatedSeconds = lesson.estimatedMinutes * 60;
  const readingProgress = Math.min(
    100,
    Math.round((elapsedSeconds / estimatedSeconds) * 100),
  );
  const answeredCount = useMemo(
    () =>
      lesson.questions.filter((question) => selectedAnswers[question.id]).length,
    [lesson.questions, selectedAnswers],
  );
  const allAnswered = answeredCount === lesson.questions.length;

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setElapsedSeconds((current) => current + 1);
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
      <article className="rounded-md border border-[#2c2824]/[0.13] bg-[#fffaf2] p-5">
        <div className="flex flex-col gap-4 border-b border-[#2c2824]/[0.1] pb-5 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
              {lesson.topic}
            </p>
            <h2 className="zach-display mt-1 max-w-3xl text-4xl font-medium leading-tight text-[#111820]">
              {lesson.title}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-[#71685c]">
              {lesson.subtitle}
            </p>
          </div>
          <div className="min-w-[158px] rounded-md border border-[#2c2824]/[0.1] bg-[#f9f4ec] p-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9a7d5f]">
              Reading
            </p>
            <p className="zach-display mt-1 text-3xl leading-none text-[#111820]">
              {formatTimer(elapsedSeconds)}
            </p>
            <div className="mt-3 h-1.5 rounded-full bg-[#2c2824]/[0.08]">
              <div
                className="h-1.5 rounded-full bg-[#bb5d3a]"
                style={{ width: `${readingProgress}%` }}
              />
            </div>
          </div>
        </div>

        <p className="zach-display mt-5 text-2xl leading-8 text-[#3a342c]">
          {lesson.deck}
        </p>

        <div className="mt-6 grid gap-6">
          {lesson.sections.map((section) => (
            <section key={section.heading}>
              <h3 className="zach-display text-2xl font-medium text-[#111820]">
                {section.heading}
              </h3>
              <div className="mt-3 grid gap-4 text-[16px] leading-8 text-[#3f382f]">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>

      <aside className="grid content-start gap-5">
        <section className="rounded-md border border-[#2c2824]/[0.13] bg-[#fffaf2] p-5">
          <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
            Key terms
          </p>
          <div className="mt-4 grid gap-3">
            {lesson.keyTerms.map((term) => (
              <div
                className="rounded-md border border-[#2c2824]/[0.1] bg-[#f9f4ec] p-3"
                key={term.label}
              >
                <p className="text-sm font-semibold text-[#2c2824]">
                  {term.label}
                </p>
                <p className="mt-1 text-sm leading-6 text-[#71685c]">
                  {term.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-md border border-[#2c2824]/[0.13] bg-[#fffaf2] p-5">
          <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
            Sources
          </p>
          <div className="mt-4 grid gap-3">
            {lesson.sources.map((source) => (
              <a
                className="rounded-md border border-[#2c2824]/[0.1] bg-[#f9f4ec] p-3 transition hover:border-[#bb5d3a]/40"
                href={source.url}
                key={source.url}
                rel="noreferrer"
                target="_blank"
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#bb5d3a]">
                  {source.type}
                </span>
                <span className="mt-1 block text-sm font-semibold text-[#2c2824]">
                  {source.label}
                </span>
                <span className="mt-1 block text-sm leading-6 text-[#71685c]">
                  {source.note}
                </span>
              </a>
            ))}
          </div>
        </section>

        {!quizOpen && (
          <button
            className="h-11 rounded-md border border-[#bb5d3a] bg-[#bb5d3a] px-4 text-sm font-semibold text-[#f9f4ec] transition hover:bg-[#a94f31] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bb5d3a]"
            onClick={() => setQuizOpen(true)}
            type="button"
          >
            Start quiz
          </button>
        )}
      </aside>

      {quizOpen && (
        <form
          action={submitLearningQuiz}
          className="rounded-md border border-[#2c2824]/[0.13] bg-[#fffaf2] p-5 xl:col-span-2"
        >
          <input name="lesson_slug" type="hidden" value={lesson.slug} />
          <input name="started_at" type="hidden" value={startedAt} />
          <input
            name="reading_seconds"
            type="hidden"
            value={elapsedSeconds.toString()}
          />
          <div className="flex flex-col gap-3 border-b border-[#2c2824]/[0.1] pb-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
                Recall check
              </p>
              <h3 className="zach-display mt-1 text-3xl font-medium text-[#111820]">
                Multiple choice
              </h3>
            </div>
            <p className="text-sm font-semibold text-[#71685c]">
              {answeredCount} / {lesson.questions.length}
            </p>
          </div>

          <div className="mt-5 grid gap-4">
            {lesson.questions.map((question, questionIndex) => (
              <fieldset
                className="rounded-md border border-[#2c2824]/[0.1] bg-[#f9f4ec] p-4"
                key={question.id}
              >
                <legend className="px-1 text-sm font-semibold text-[#2c2824]">
                  {questionIndex + 1}. {question.prompt}
                </legend>
                <div className="mt-3 grid gap-2 md:grid-cols-2">
                  {question.choices.map((choice) => {
                    const checked = selectedAnswers[question.id] === choice.id;

                    return (
                      <label
                        className={`flex cursor-pointer gap-3 rounded-md border p-3 text-sm leading-6 transition ${
                          checked
                            ? "border-[#bb5d3a] bg-[#bb5d3a]/[0.08]"
                            : "border-[#2c2824]/[0.1] bg-[#fffaf2] hover:border-[#bb5d3a]/40"
                        }`}
                        key={choice.id}
                      >
                        <input
                          checked={checked}
                          className="mt-1 h-4 w-4 accent-[#bb5d3a]"
                          name={`question_${question.id}`}
                          onChange={() =>
                            setSelectedAnswers((current) => ({
                              ...current,
                              [question.id]: choice.id,
                            }))
                          }
                          required
                          type="radio"
                          value={choice.id}
                        />
                        <span>{choice.label}</span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-sm leading-6 text-[#71685c]">
              Points feed Knowledge, Reasoning, Application, Breadth and
              Retention.
            </p>
            <button
              className="h-11 rounded-md border border-[#241f1a] bg-[#241f1a] px-5 text-sm font-semibold text-[#f9f4ec] transition hover:bg-[#3a342c] disabled:cursor-not-allowed disabled:opacity-50"
              disabled={!allAnswered}
              type="submit"
            >
              Submit answers
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
