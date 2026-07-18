"use client";

import { useEffect, useMemo, useState } from "react";

import { submitLearningQuiz } from "@/app/actions";
import { PendingSubmitButton } from "@/components/pending-submit-button";
import type { LearningLesson } from "@/lib/learning-zone";

type LearningLessonExperienceProps = {
  lesson: LearningLesson;
};

export function LearningLessonExperience({ lesson }: LearningLessonExperienceProps) {
  const [quizOpen, setQuizOpen] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [startedAt] = useState(() => new Date().toISOString());
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>(
    {},
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
    <div className="grid gap-5">
      <article className="rounded-md border border-[#2c2824]/[0.13] bg-[#fffaf2] p-5">
        <div className="border-b border-[#2c2824]/[0.1] pb-5">
          <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
            {lesson.topic}
          </p>
          <h2 className="zach-display mt-1 max-w-3xl text-4xl font-medium leading-tight text-[#111820]">
            {lesson.title}
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-md border border-[#bb5d3a]/30 bg-[#bb5d3a]/10 px-2.5 py-1 text-xs font-semibold text-[#8f442c]">
              {lesson.concept.level}
            </span>
            <span className="rounded-md border border-[#2c2824]/[0.1] bg-[#f9f4ec] px-2.5 py-1 text-xs font-semibold text-[#71685c]">
              {lesson.concept.label}
            </span>
          </div>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-[#71685c]">
            {lesson.subtitle}
          </p>
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

        <section className="mt-7 border-t border-[#2c2824]/[0.1] pt-5">
          <p className="zach-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7d5f]">
            Key terms
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
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
      </article>

      {!quizOpen && (
        <div className="flex justify-end">
          <button
            className="h-11 rounded-md border border-[#bb5d3a] bg-[#bb5d3a] px-4 text-sm font-semibold text-[#f9f4ec] transition hover:bg-[#a94f31] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bb5d3a]"
            onClick={() => setQuizOpen(true)}
            type="button"
          >
            Start quiz
          </button>
        </div>
      )}

      {quizOpen && (
        <form
          action={submitLearningQuiz}
          className="rounded-md border border-[#2c2824]/[0.13] bg-[#fffaf2] p-5"
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
              Answer every question to submit the quiz.
            </p>
            <PendingSubmitButton
              className="h-11 rounded-md border border-[#241f1a] bg-[#241f1a] px-5 text-sm font-semibold text-[#f9f4ec] transition hover:bg-[#3a342c] disabled:cursor-not-allowed disabled:opacity-50"
              disabled={!allAnswered}
              pendingLabel="Submitting..."
            >
              Submit answers
            </PendingSubmitButton>
          </div>
        </form>
      )}
    </div>
  );
}
