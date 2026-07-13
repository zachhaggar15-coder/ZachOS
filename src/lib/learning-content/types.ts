import type {
  LearningConceptLevel,
  LearningLesson,
  LearningQuestion,
  LearningTopicId,
} from "@/lib/learning-zone";

// A question exactly as an author writes it, minus the machine-derived id.
export type AuthoredQuestion = Omit<LearningQuestion, "id">;

// Everything a human writes for one lesson. The mechanical fields (slug,
// subtitle, title, difficulty, topic, question ids) are filled in by
// buildAuthoredLessons so authors only ever touch real content.
export type AuthoredLesson = {
  concept: string;
  level: LearningConceptLevel;
  summary: string;
  estimatedMinutes: number;
  deck: string;
  keyTerms: Array<{ label: string; value: string }>;
  sections: Array<{ heading: string; body: string[] }>;
  questions: AuthoredQuestion[];
  sources: LearningLesson["sources"];
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function levelDifficulty(level: LearningConceptLevel) {
  if (level === "University") {
    return 3;
  }

  return level === "A-level" ? 2 : 1;
}

const TOPIC_LABELS: Partial<Record<LearningTopicId, string>> = {
  philosophy: "Philosophy",
};

const ID_LETTERS = ["a", "b", "c", "d", "e", "f"];

// Deterministic string hash so the correct answer's position is scattered
// across a/b/c/d rather than sitting in whatever slot the author wrote it in.
// This stops the quiz being beatable by "always pick the second option".
function hashString(value: string) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

// Re-order a question's choices so the correct one lands in a hash-chosen
// position, then relabel the ids by their new position. Authors never have to
// think about answer placement, and no positional pattern survives.
function balanceChoices(question: AuthoredQuestion, questionId: string): AuthoredQuestion {
  const choices = question.choices;
  const length = choices.length;
  const correctIndex = choices.findIndex(
    (choice) => choice.id === question.correctChoiceId,
  );

  if (correctIndex < 0) {
    return question;
  }

  const target = hashString(questionId) % length;
  const rotation = ((target - correctIndex) % length + length) % length;
  const rotated = choices.map(
    (_, index) => choices[(index - rotation + length) % length],
  );

  return {
    ...question,
    choices: rotated.map((choice, index) => ({
      id: ID_LETTERS[index],
      label: choice.label,
    })),
    correctChoiceId: ID_LETTERS[target],
  };
}

export function buildAuthoredLessons(
  topic: LearningTopicId,
  lessons: AuthoredLesson[],
): LearningLesson[] {
  const topicLabel = TOPIC_LABELS[topic] ?? topic;

  return lessons.map((lesson) => {
    const slug = `${topic}-${slugify(lesson.concept)}`;

    return {
      concept: {
        label: lesson.concept,
        level: lesson.level,
        summary: lesson.summary,
      },
      deck: lesson.deck,
      difficulty: levelDifficulty(lesson.level),
      estimatedMinutes: lesson.estimatedMinutes,
      keyTerms: lesson.keyTerms,
      questions: lesson.questions.map((question, index) => {
        const id = `${slug}-q${index + 1}`;

        return { ...balanceChoices(question, id), id };
      }),
      sections: lesson.sections,
      slug,
      sources: lesson.sources,
      subtitle: `${lesson.level} concept in ${topicLabel}: ${lesson.summary}.`,
      title: lesson.concept,
      topic,
    } satisfies LearningLesson;
  });
}
