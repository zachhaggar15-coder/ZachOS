import type { LearningSession } from "@/lib/supabase/database.types";

export type LearningTopicId = "philosophy" | "marketing" | "economics" | "science";

export type LearningDimension =
  | "application"
  | "breadth"
  | "knowledge"
  | "reasoning"
  | "retention";

export type LearningSource = {
  label: string;
  note: string;
  type: "textbook" | "primary" | "reference";
  url: string;
};

export type LearningQuestion = {
  choices: Array<{
    id: string;
    label: string;
  }>;
  correctChoiceId: string;
  dimension: Exclude<LearningDimension, "breadth" | "retention">;
  explanation: string;
  id: string;
  prompt: string;
};

export type LearningLesson = {
  deck: string;
  difficulty: 1 | 2 | 3;
  estimatedMinutes: number;
  keyTerms: Array<{
    label: string;
    value: string;
  }>;
  questions: LearningQuestion[];
  sections: Array<{
    body: string[];
    heading: string;
  }>;
  slug: string;
  sources: LearningSource[];
  subtitle: string;
  title: string;
  topic: LearningTopicId;
};

export type LearningAnswerResult = {
  correct: boolean;
  correctChoiceId: string;
  dimension: LearningQuestion["dimension"];
  explanation: string;
  prompt: string;
  questionId: string;
  selectedChoiceId: string;
};

export type LearningScoreResult = {
  answers: LearningAnswerResult[];
  applicationPoints: number;
  breadthPoints: number;
  correctCount: number;
  knowledgePoints: number;
  reasoningPoints: number;
  retentionPoints: number;
  scorePoints: number;
  totalQuestions: number;
};

export const LEARNING_TOPICS = [
  {
    accent: "#8f6f48",
    id: "philosophy",
    label: "Philosophy",
    shortLabel: "Phil",
  },
  {
    accent: "#bb5d3a",
    id: "marketing",
    label: "Marketing",
    shortLabel: "Mkt",
  },
  {
    accent: "#6f7d8c",
    id: "economics",
    label: "Economics",
    shortLabel: "Econ",
  },
  {
    accent: "#6d8658",
    id: "science",
    label: "Science",
    shortLabel: "Sci",
  },
] as const satisfies ReadonlyArray<{
  accent: string;
  id: LearningTopicId;
  label: string;
  shortLabel: string;
}>;

const topicIds = new Set<string>(LEARNING_TOPICS.map((topic) => topic.id));

const sourcePack = {
  coreEconomy: {
    label: "CORE Econ, The Economy 1.0",
    note: "Open-access economics textbook used for opportunity cost, institutions and markets.",
    type: "textbook",
    url: "https://www.core-econ.org/project/core-the-economy/",
  },
  kantGroundwork: {
    label: "Immanuel Kant, Groundwork of the Metaphysics of Morals",
    note: "Primary source for duty-based ethics and universalisation.",
    type: "primary",
    url: "https://www.gutenberg.org/ebooks/5682",
  },
  millUtilitarianism: {
    label: "John Stuart Mill, Utilitarianism",
    note: "Primary source for classical utilitarian moral reasoning.",
    type: "primary",
    url: "https://www.gutenberg.org/ebooks/11224",
  },
  openStaxBiology: {
    label: "OpenStax, Biology 2e",
    note: "Open textbook used for scientific method, systems, cells and energy.",
    type: "textbook",
    url: "https://openstax.org/details/books/biology-2e",
  },
  openStaxEconomics: {
    label: "OpenStax, Principles of Economics 3e",
    note: "Open textbook used for incentives, markets, tradeoffs and externalities.",
    type: "textbook",
    url: "https://openstax.org/details/books/principles-economics-3e",
  },
  openTextMarketing: {
    label: "University of Minnesota Libraries, Principles of Marketing",
    note: "Open textbook used for customer value, segmentation, positioning and marketing planning.",
    type: "textbook",
    url: "https://open.umn.edu/opentextbooks/textbooks/principles-of-marketing",
  },
  rebusEthics: {
    label: "Rebus Community, Introduction to Philosophy: Ethics",
    note: "Open textbook used for ethical theory, argument structure and applied moral reasoning.",
    type: "textbook",
    url: "https://press.rebus.community/intro-to-phil-ethics/",
  },
  sepScientificMethod: {
    label: "Stanford Encyclopedia of Philosophy, Scientific Method",
    note: "Reference source used for philosophy of science and theory testing.",
    type: "reference",
    url: "https://plato.stanford.edu/entries/scientific-method/",
  },
} as const satisfies Record<string, LearningSource>;

export const LEARNING_LESSONS: LearningLesson[] = [
  {
    deck: "Good thinking begins by separating a claim, its reasons and the hidden bridge between them.",
    difficulty: 1,
    estimatedMinutes: 4,
    keyTerms: [
      {
        label: "Claim",
        value: "The conclusion someone wants you to accept.",
      },
      {
        label: "Premise",
        value: "A reason offered in support of the claim.",
      },
      {
        label: "Warrant",
        value: "The often unstated link that makes a premise relevant.",
      },
    ],
    questions: [
      {
        choices: [
          { id: "a", label: "Whether the conclusion is popular" },
          { id: "b", label: "Whether the premises support the conclusion" },
          { id: "c", label: "Whether the speaker sounds confident" },
          { id: "d", label: "Whether the argument is short" },
        ],
        correctChoiceId: "b",
        dimension: "knowledge",
        explanation: "Argument quality depends on support: the reasons must make the conclusion more credible.",
        id: "philosophy-argument-q1",
        prompt: "What is the central test of a philosophical argument?",
      },
      {
        choices: [
          { id: "a", label: "The conclusion" },
          { id: "b", label: "The rhetorical style" },
          { id: "c", label: "The warrant" },
          { id: "d", label: "The topic label" },
        ],
        correctChoiceId: "c",
        dimension: "reasoning",
        explanation: "The warrant is the bridge between evidence and conclusion, and it is often where weak arguments hide.",
        id: "philosophy-argument-q2",
        prompt: "If someone says, 'This habit is old, so it is good,' what should you inspect first?",
      },
      {
        choices: [
          { id: "a", label: "Reject the idea immediately" },
          { id: "b", label: "Ask what evidence would make the claim stronger or weaker" },
          { id: "c", label: "Search for a more impressive synonym" },
          { id: "d", label: "Convert it into a personal anecdote" },
        ],
        correctChoiceId: "b",
        dimension: "application",
        explanation: "A practical philosopher treats claims as testable commitments rather than decorations.",
        id: "philosophy-argument-q3",
        prompt: "You hear a bold claim in a meeting. What is the best next move?",
      },
    ],
    sections: [
      {
        body: [
          "Philosophy is sometimes mistaken for the activity of having grand opinions. Its more useful discipline is smaller and sharper: it asks what follows from what. A philosophical argument is not merely a statement of belief. It is a structure in which a conclusion is supported by reasons, and those reasons rely on assumptions that can be examined.",
          "The first move is to identify the claim. If someone says, 'Technology makes us less free,' the claim is not yet an argument. The argument begins when reasons appear: perhaps technology collects data, shapes attention or makes dependence invisible. Each reason can then be tested. Is it true? Is it relevant? Does it support the exact conclusion, or only a weaker one?",
        ],
        heading: "Arguments have anatomy",
      },
      {
        body: [
          "The most interesting part is often the warrant. A warrant is the bridge between a premise and a conclusion. If the premise is 'this practice is traditional' and the conclusion is 'this practice is right,' the hidden warrant is that tradition is a reliable guide to value. That may be true in some cases and false in others. Philosophy improves thought by bringing such bridges into view.",
          "This is why a calm objection can be more useful than a loud counterclaim. The question is not, 'Can I defeat this?' It is, 'What must be true for this reasoning to work?' Once you ask that, arguments become inspectable objects. You can agree with some premises, reject others, or accept the conclusion for different reasons.",
        ],
        heading: "Hidden bridges matter",
      },
      {
        body: [
          "A strong argument also avoids changing its target midway. Suppose someone argues that reading difficult books is valuable because it develops patience. That does not prove that every difficult book is worth reading. The conclusion must match the support. Good reasoning has proportion: the claim should be only as large as the evidence allows.",
          "In daily life, this habit is powerful. Before accepting a claim about work, health, money or politics, separate the conclusion from the reasons. Then ask whether the reasons are true, whether the warrant is defensible, and whether the conclusion is modest enough. This does not make you cynical. It makes you harder to manipulate and easier to teach.",
        ],
        heading: "Use proportion",
      },
    ],
    slug: "philosophy-good-argument",
    sources: [sourcePack.rebusEthics],
    subtitle: "A compact model for claims, premises and hidden assumptions.",
    title: "The Shape of a Good Argument",
    topic: "philosophy",
  },
  {
    deck: "Utilitarian and duty-based ethics ask different questions, so they often notice different moral facts.",
    difficulty: 2,
    estimatedMinutes: 5,
    keyTerms: [
      {
        label: "Consequentialism",
        value: "Judging actions by their outcomes.",
      },
      {
        label: "Deontology",
        value: "Judging actions by duties, rights or rules.",
      },
      {
        label: "Universalise",
        value: "Ask whether a rule could be willed for everyone.",
      },
    ],
    questions: [
      {
        choices: [
          { id: "a", label: "Which action produces the best consequences?" },
          { id: "b", label: "Which action follows tradition most closely?" },
          { id: "c", label: "Which action is easiest to explain?" },
          { id: "d", label: "Which action protects my reputation?" },
        ],
        correctChoiceId: "a",
        dimension: "knowledge",
        explanation: "Utilitarian reasoning judges actions by their effects on overall welfare.",
        id: "philosophy-ethics-q1",
        prompt: "What question is most central to utilitarian ethics?",
      },
      {
        choices: [
          { id: "a", label: "Because outcomes are never relevant" },
          { id: "b", label: "Because some actions may violate duties or rights even when useful" },
          { id: "c", label: "Because rules remove all uncertainty" },
          { id: "d", label: "Because intention is always measurable" },
        ],
        correctChoiceId: "b",
        dimension: "reasoning",
        explanation: "Duty-based ethics worries that outcome calculations can excuse actions that treat people unfairly.",
        id: "philosophy-ethics-q2",
        prompt: "Why might a deontologist reject a purely outcome-based decision?",
      },
      {
        choices: [
          { id: "a", label: "Estimate consequences and inspect duties or rights at stake" },
          { id: "b", label: "Choose whichever option feels least awkward" },
          { id: "c", label: "Ignore consequences if a rule exists" },
          { id: "d", label: "Avoid deciding until everyone agrees" },
        ],
        correctChoiceId: "a",
        dimension: "application",
        explanation: "A mature ethical analysis can use both lenses: outcomes show impact, duties show limits.",
        id: "philosophy-ethics-q3",
        prompt: "How should you analyse a hard workplace tradeoff?",
      },
    ],
    sections: [
      {
        body: [
          "Two of the most durable moral lenses are utilitarianism and deontology. They do not simply offer different answers. They begin with different questions. Utilitarian reasoning asks what action would produce the greatest overall good, often understood as welfare, happiness or reduced suffering. Duty-based reasoning asks whether an action respects obligations, rights and principles that should not be traded away too casually.",
          "The utilitarian lens is powerful because it forces attention onto consequences. Good intentions are not enough if the predictable result is harm. In policy, management and personal life, this matters. A decision that feels noble but wastes resources or worsens outcomes deserves criticism. Utilitarianism trains the mind to ask, 'Who is affected, how much, and compared with what alternative?'",
        ],
        heading: "Consequences count",
      },
      {
        body: [
          "The duty-based lens pushes back against a danger in that calculation. If only outcomes matter, an individual can be treated as a convenient instrument for a larger total. Kantian ethics, in simplified form, asks whether the rule behind an action could be universalised and whether people are being respected as ends in themselves. Lying, coercion and betrayal are not wrong merely because they sometimes end badly. They can be wrong because they damage the conditions of trust and agency.",
          "This does not mean rules are simple machines. Duties can conflict. Telling the truth, protecting someone from harm and keeping a promise can pull in different directions. Duty-based ethics gives you a grammar for describing the conflict rather than pretending that a spreadsheet can settle it alone.",
        ],
        heading: "Duties set limits",
      },
      {
        body: [
          "In practice, the strongest moral reasoning often uses both lenses. Imagine a company considering a persuasive pricing tactic. The utilitarian asks whether it creates real value or merely extracts from confused customers. The deontologist asks whether it respects the customer's ability to make an informed choice. If the tactic increases revenue by exploiting misunderstanding, both lenses may condemn it, but for different reasons.",
          "The point is not to memorise labels. The point is to improve moral perception. Utilitarianism helps you see impact. Deontology helps you see boundaries. Together they make your judgement less impulsive: you ask what good will be produced, what duties apply, who might be used, and whether the rule behind your action could survive being made public.",
        ],
        heading: "Use both lenses",
      },
    ],
    slug: "philosophy-ethical-lenses",
    sources: [sourcePack.rebusEthics, sourcePack.millUtilitarianism, sourcePack.kantGroundwork],
    subtitle: "How consequence-based and duty-based reasoning complement each other.",
    title: "Two Ethical Lenses",
    topic: "philosophy",
  },
  {
    deck: "Marketing starts with value: what the customer gets, what they give up and why they should believe you.",
    difficulty: 1,
    estimatedMinutes: 4,
    keyTerms: [
      {
        label: "Customer value",
        value: "Perceived benefits minus perceived costs.",
      },
      {
        label: "Exchange",
        value: "A voluntary trade in which each side expects to gain.",
      },
      {
        label: "Positioning",
        value: "The place an offering occupies in a customer's mind.",
      },
    ],
    questions: [
      {
        choices: [
          { id: "a", label: "A slogan before a product exists" },
          { id: "b", label: "Benefits customers perceive relative to what they give up" },
          { id: "c", label: "The amount spent on promotion" },
          { id: "d", label: "A list of product features only" },
        ],
        correctChoiceId: "b",
        dimension: "knowledge",
        explanation: "Customer value compares perceived benefits with money, time, effort and risk.",
        id: "marketing-value-q1",
        prompt: "What does customer value mean in marketing?",
      },
      {
        choices: [
          { id: "a", label: "It may be irrelevant if customers do not see a benefit" },
          { id: "b", label: "It automatically creates demand" },
          { id: "c", label: "It removes the need for segmentation" },
          { id: "d", label: "It proves the brand is differentiated" },
        ],
        correctChoiceId: "a",
        dimension: "reasoning",
        explanation: "A feature only matters commercially when it connects to a customer job, pain or desired gain.",
        id: "marketing-value-q2",
        prompt: "Why can a technically impressive feature fail as marketing?",
      },
      {
        choices: [
          { id: "a", label: "Start with the customer's problem and the promised change" },
          { id: "b", label: "Start with every internal capability" },
          { id: "c", label: "Start with discounting" },
          { id: "d", label: "Start with a vague prestige claim" },
        ],
        correctChoiceId: "a",
        dimension: "application",
        explanation: "A useful message begins with the customer situation and the value created.",
        id: "marketing-value-q3",
        prompt: "You need to write a landing-page headline. What should guide the first draft?",
      },
    ],
    sections: [
      {
        body: [
          "Marketing is often reduced to promotion, but introductory textbooks usually begin somewhere more fundamental: exchange and value. A market exists because people have needs, wants, constraints and alternatives. Marketing work becomes serious when it asks what a customer receives, what they must give up, and why this exchange is better than doing nothing or choosing someone else.",
          "Customer value is not the same as product quality. A well-made product can still be a poor value if it solves the wrong problem, asks too much effort, feels risky or arrives through the wrong channel. Conversely, a simple product can be valuable if it removes friction at the moment a customer most cares about it.",
        ],
        heading: "Value before noise",
      },
      {
        body: [
          "This is why a feature list is rarely enough. Customers do not buy features in the abstract. They buy a change in their situation: less uncertainty, higher status, saved time, lower risk, better taste, improved performance or emotional reassurance. The marketer's job is to connect what the organisation can deliver with what the customer recognises as useful.",
          "The University of Minnesota Principles of Marketing text frames marketing around creating, communicating, delivering and exchanging value. That sequence is helpful. Communication cannot rescue a weak value proposition for long. Promotion may create awareness, but repeat demand depends on whether the customer experiences the promised benefit.",
        ],
        heading: "The promise must cash out",
      },
      {
        body: [
          "A practical value statement can be built with four checks. First, define the customer precisely. Second, name the problem or desire in the customer's language. Third, state the specific change the offering creates. Fourth, explain why the customer should believe it. This last step is where proof enters: demonstrations, reviews, guarantees, data, credentials or visible product evidence.",
          "Good marketing therefore has an ethical edge. If the message exaggerates value, it may win attention while destroying trust. If it underexplains value, it may leave a useful product invisible. The craft is to make the value obvious without making claims the product cannot sustain.",
        ],
        heading: "Make value legible",
      },
    ],
    slug: "marketing-customer-value",
    sources: [sourcePack.openTextMarketing],
    subtitle: "Why marketing begins with exchange, not noise.",
    title: "Customer Value Before Tactics",
    topic: "marketing",
  },
  {
    deck: "Segmentation, targeting and positioning turn a broad market into a clear choice for a specific customer.",
    difficulty: 2,
    estimatedMinutes: 5,
    keyTerms: [
      {
        label: "Segmentation",
        value: "Dividing a market into meaningful groups.",
      },
      {
        label: "Targeting",
        value: "Choosing which segment to serve.",
      },
      {
        label: "Positioning",
        value: "Designing the offer and message to occupy a distinct place.",
      },
    ],
    questions: [
      {
        choices: [
          { id: "a", label: "To avoid choosing a customer" },
          { id: "b", label: "To identify groups with different needs or behaviours" },
          { id: "c", label: "To make the market look larger" },
          { id: "d", label: "To replace product strategy" },
        ],
        correctChoiceId: "b",
        dimension: "knowledge",
        explanation: "Segmentation matters because customers differ in needs, behaviour, willingness to pay and buying context.",
        id: "marketing-stp-q1",
        prompt: "Why do marketers segment a market?",
      },
      {
        choices: [
          { id: "a", label: "A position is strongest when it is credible to a chosen segment" },
          { id: "b", label: "A position should be equally persuasive to everyone" },
          { id: "c", label: "Positioning is only a graphic design decision" },
          { id: "d", label: "Targeting comes after promotion" },
        ],
        correctChoiceId: "a",
        dimension: "reasoning",
        explanation: "Positioning works when a specific customer group believes the offer owns a relevant difference.",
        id: "marketing-stp-q2",
        prompt: "Which statement best connects targeting and positioning?",
      },
      {
        choices: [
          { id: "a", label: "Busy new managers who need credible client-ready summaries quickly" },
          { id: "b", label: "Everyone who reads" },
          { id: "c", label: "People aged 18 to 65" },
          { id: "d", label: "Any professional with a phone" },
        ],
        correctChoiceId: "a",
        dimension: "application",
        explanation: "The best segment is behaviourally and situationally specific enough to guide the offer.",
        id: "marketing-stp-q3",
        prompt: "Which is the clearest target segment for a professional learning app?",
      },
    ],
    sections: [
      {
        body: [
          "A common beginner mistake is to describe the target market as 'everyone who might buy'. That sounds ambitious, but it gives no guidance. Segmentation exists because customers differ. They have different jobs to be done, budgets, anxieties, habits, identities and decision processes. Treating them as one mass creates average messages for people who do not think of themselves as average.",
          "Segmentation divides the market into groups that matter commercially. A useful segment is not just a demographic label. 'Men aged 25 to 40' may be measurable, but it does not automatically explain behaviour. 'First-time marathon runners worried about injury' is more useful because it suggests needs, channels, objections and product features.",
        ],
        heading: "Markets are not blobs",
      },
      {
        body: [
          "Targeting is the disciplined act of choosing. A firm asks which segment is attractive, reachable and compatible with its capabilities. This choice creates tradeoffs. Serving beginners may require education and reassurance. Serving experts may require depth, speed and customisation. A brand that tries to satisfy both with the same message can become forgettable.",
          "Positioning then answers the customer's mental question: why this, for me, instead of the alternatives? It is not only a tagline. It is the relationship between product design, proof, price, channel and message. If a premium product is sold through a chaotic experience, the position weakens. If a low-cost product uses luxury cues, customers may feel confused.",
        ],
        heading: "Choice creates clarity",
      },
      {
        body: [
          "A practical positioning statement can be written as: for this target customer, our offering is the frame of reference that provides this key benefit because this proof makes it believable. For example, 'For time-poor analysts, this daily lesson system is a study habit that builds recall because every session ends with scored application questions.'",
          "The strength of the statement is that each part can be tested. Is the target real? Is the category clear? Is the benefit important? Is the proof credible? Marketing improves when these questions are answered before money is spent on promotion. The goal is not to sound clever to everyone. The goal is to become the obvious choice for someone specific.",
        ],
        heading: "Own a useful difference",
      },
    ],
    slug: "marketing-stp-positioning",
    sources: [sourcePack.openTextMarketing],
    subtitle: "How segmentation, targeting and positioning create strategic focus.",
    title: "Segmentation Makes Strategy Real",
    topic: "marketing",
  },
  {
    deck: "Opportunity cost is the value of the best alternative you give up when you choose.",
    difficulty: 1,
    estimatedMinutes: 4,
    keyTerms: [
      {
        label: "Scarcity",
        value: "The condition that resources and time are limited.",
      },
      {
        label: "Opportunity cost",
        value: "The value of the best forgone alternative.",
      },
      {
        label: "Tradeoff",
        value: "A choice between competing uses of scarce resources.",
      },
    ],
    questions: [
      {
        choices: [
          { id: "a", label: "The money price only" },
          { id: "b", label: "The value of the best alternative forgone" },
          { id: "c", label: "Every possible alternative added together" },
          { id: "d", label: "The emotional discomfort of choosing" },
        ],
        correctChoiceId: "b",
        dimension: "knowledge",
        explanation: "Opportunity cost is the next-best alternative, not every alternative and not only cash.",
        id: "economics-opportunity-q1",
        prompt: "What is opportunity cost?",
      },
      {
        choices: [
          { id: "a", label: "Because time, attention and capital are scarce" },
          { id: "b", label: "Because all choices are financial" },
          { id: "c", label: "Because markets remove scarcity" },
          { id: "d", label: "Because preferences never change" },
        ],
        correctChoiceId: "a",
        dimension: "reasoning",
        explanation: "Scarcity means choosing one use of a resource prevents another use.",
        id: "economics-opportunity-q2",
        prompt: "Why does opportunity cost apply even when no money changes hands?",
      },
      {
        choices: [
          { id: "a", label: "Compare it with the best specific alternative use of that time" },
          { id: "b", label: "Ignore the alternative because learning is always good" },
          { id: "c", label: "Count only the subscription price" },
          { id: "d", label: "Choose whatever feels productive" },
        ],
        correctChoiceId: "a",
        dimension: "application",
        explanation: "The economic question is what the same scarce time could otherwise produce.",
        id: "economics-opportunity-q3",
        prompt: "How should you judge whether a three-hour course is worth it?",
      },
    ],
    sections: [
      {
        body: [
          "Economics begins with scarcity. Not scarcity as a mood of anxiety, but as a structural fact: time, attention, labour, land, capital and energy have alternative uses. Because you cannot use the same hour for every purpose, choosing one thing means giving up another. Opportunity cost names the value of the best alternative forgone.",
          "This definition is deceptively simple. The cost of a free lecture is not zero if attending means missing a client call, sleep or focused work. The cost of investing in one project includes the return and learning that might have come from the best project you did not choose. Economics trains you to see the invisible side of choice.",
        ],
        heading: "The real cost is the alternative",
      },
      {
        body: [
          "A useful opportunity cost is specific. Saying 'I could have done anything else' is too vague to guide action. The comparison should be with the best realistic alternative. If you spend Saturday studying statistics, the opportunity cost might be a long run, a family visit or a paid shift, depending on your actual options and priorities.",
          "This is also why sunk costs should not dominate decisions. Money or effort already spent cannot be recovered. The question is what future choice has the best expected value from now. If a course is poor after two hours, the fact that you paid for it does not make the next ten hours free. Those hours still have alternatives.",
        ],
        heading: "Be specific and forward-looking",
      },
      {
        body: [
          "Opportunity cost does not tell you to maximise money. It tells you to be honest about tradeoffs. You may rationally choose rest over income, friendship over speed or mastery over entertainment. The point is to know what you are giving up and choose deliberately.",
          "This makes the concept useful outside formal markets. A personal operating system, a training plan or a learning habit is partly an allocation mechanism. It decides where scarce energy goes. If you want a richer life, do not only ask whether an activity is good. Ask whether it is better than the best alternative use of the same scarce resource.",
        ],
        heading: "Use it beyond money",
      },
    ],
    slug: "economics-opportunity-cost",
    sources: [sourcePack.openStaxEconomics, sourcePack.coreEconomy],
    subtitle: "The economic habit of seeing what a choice displaces.",
    title: "Opportunity Cost Is the Shadow Price of Choice",
    topic: "economics",
  },
  {
    deck: "Markets coordinate plans through prices, but externalities reveal where private incentives miss social costs.",
    difficulty: 2,
    estimatedMinutes: 5,
    keyTerms: [
      {
        label: "Incentive",
        value: "A reward or penalty that changes behaviour.",
      },
      {
        label: "Market",
        value: "An institution for exchange and price formation.",
      },
      {
        label: "Externality",
        value: "A cost or benefit affecting someone outside the exchange.",
      },
    ],
    questions: [
      {
        choices: [
          { id: "a", label: "They transmit information about scarcity and willingness to pay" },
          { id: "b", label: "They guarantee fairness" },
          { id: "c", label: "They remove all need for institutions" },
          { id: "d", label: "They make every cost visible" },
        ],
        correctChoiceId: "a",
        dimension: "knowledge",
        explanation: "Prices help coordinate decentralised choices by conveying information and incentives.",
        id: "economics-markets-q1",
        prompt: "What is one key coordinating role of prices?",
      },
      {
        choices: [
          { id: "a", label: "A private decision affects third parties outside the transaction" },
          { id: "b", label: "A price changes quickly" },
          { id: "c", label: "A buyer dislikes a product" },
          { id: "d", label: "A market has many sellers" },
        ],
        correctChoiceId: "a",
        dimension: "reasoning",
        explanation: "Externalities occur when not all costs or benefits are borne by the buyer and seller.",
        id: "economics-markets-q2",
        prompt: "When does an externality exist?",
      },
      {
        choices: [
          { id: "a", label: "Identify the private incentive and the social cost it excludes" },
          { id: "b", label: "Assume the market price already includes all costs" },
          { id: "c", label: "Ban every activity with any side effect" },
          { id: "d", label: "Ignore the transaction because it is voluntary" },
        ],
        correctChoiceId: "a",
        dimension: "application",
        explanation: "Policy analysis starts by locating the gap between private and social incentives.",
        id: "economics-markets-q3",
        prompt: "How should you analyse pollution from a factory?",
      },
    ],
    sections: [
      {
        body: [
          "Markets are not magic. They are institutions that allow buyers and sellers to exchange, compare alternatives and respond to prices. A price is more than a number. It carries information about scarcity, demand, costs and alternatives. When coffee beans become harder to source, higher prices encourage buyers to economise and sellers to bring more supply if they can.",
          "This coordinating power is impressive because no single person needs to understand the whole system. Each participant responds to local information. A cafe owner, importer, farmer and customer all make decisions in relation to prices and constraints. The result can be a pattern of coordination that would be impossible to plan manually at the same level of detail.",
        ],
        heading: "Prices coordinate",
      },
      {
        body: [
          "But markets work through incentives, and incentives depend on what decision makers bear. If a factory pays for labour, materials and machinery but not the health cost of pollution, the market price of its product is missing part of the true social cost. That missing cost is an externality. It falls on people outside the transaction.",
          "Externalities explain why voluntary exchange is not always enough. The buyer and seller may both benefit while others are harmed. This does not mean markets are useless. It means the institutional frame matters. Taxes, regulation, property rights, liability rules or tradable permits can sometimes bring private incentives closer to social costs.",
        ],
        heading: "Externalities reveal the frame",
      },
      {
        body: [
          "The same logic applies to positive externalities. Education, vaccination, research and attractive public spaces can create benefits beyond the person who pays. If the decision maker captures only part of the benefit, society may get too little of the activity without support or coordination.",
          "A good economic analysis therefore resists two lazy positions. It does not say markets always solve everything. It also does not say market failure proves markets are bad. It asks where incentives align with social value, where they do not, and which institution is likely to improve the tradeoff with the least collateral damage.",
        ],
        heading: "Ask what incentives miss",
      },
    ],
    slug: "economics-incentives-externalities",
    sources: [sourcePack.openStaxEconomics, sourcePack.coreEconomy],
    subtitle: "How prices coordinate choices and where they can fail.",
    title: "Markets, Incentives and Externalities",
    topic: "economics",
  },
  {
    deck: "Scientific claims become stronger when they survive risky tests, independent checks and better explanations.",
    difficulty: 1,
    estimatedMinutes: 4,
    keyTerms: [
      {
        label: "Hypothesis",
        value: "A proposed explanation that can be tested.",
      },
      {
        label: "Prediction",
        value: "What should be observed if the hypothesis is right.",
      },
      {
        label: "Replication",
        value: "Independent repetition that checks whether a result holds.",
      },
    ],
    questions: [
      {
        choices: [
          { id: "a", label: "It makes risky predictions that can be checked" },
          { id: "b", label: "It is impossible to question" },
          { id: "c", label: "It uses technical vocabulary" },
          { id: "d", label: "It confirms what people already believe" },
        ],
        correctChoiceId: "a",
        dimension: "knowledge",
        explanation: "Scientific hypotheses gain value by exposing themselves to possible correction.",
        id: "science-claims-q1",
        prompt: "What makes a hypothesis scientifically useful?",
      },
      {
        choices: [
          { id: "a", label: "It reduces the chance that the first result was noise, bias or error" },
          { id: "b", label: "It proves the theory can never change" },
          { id: "c", label: "It removes the need for measurement" },
          { id: "d", label: "It makes every claim equally strong" },
        ],
        correctChoiceId: "a",
        dimension: "reasoning",
        explanation: "Replication strengthens confidence because independent checks can expose fragile findings.",
        id: "science-claims-q2",
        prompt: "Why does replication matter?",
      },
      {
        choices: [
          { id: "a", label: "Ask about study design, sample size, measurement and independent confirmation" },
          { id: "b", label: "Accept it if the headline is exciting" },
          { id: "c", label: "Reject it because science is always uncertain" },
          { id: "d", label: "Trust it only if it matches your experience" },
        ],
        correctChoiceId: "a",
        dimension: "application",
        explanation: "Scientific literacy means inspecting evidence quality, not just the conclusion.",
        id: "science-claims-q3",
        prompt: "How should you assess a surprising health claim?",
      },
    ],
    sections: [
      {
        body: [
          "Science is not a collection of facts handed down with laboratory authority. It is a disciplined way of making claims answerable to evidence. A hypothesis proposes an explanation. A prediction says what should be observed if the explanation is right. A test then gives the world a chance to push back.",
          "This matters because many explanations can fit what is already known. The stronger test is whether an idea risks being wrong in advance. If a plant-growth hypothesis predicts that plants given more light will grow faster under controlled conditions, the observation can support, complicate or weaken the hypothesis. If the claim adapts to every possible outcome, it explains too much and tests too little.",
        ],
        heading: "Claims need risk",
      },
      {
        body: [
          "Measurement quality matters as much as enthusiasm. A study can be undermined by a biased sample, weak controls, noisy instruments, selective reporting or a result so small that it may not matter in practice. Scientific thinking therefore asks how the evidence was produced, not only what it says.",
          "Replication is one answer to human fallibility. If independent researchers can repeat a result under similar conditions, confidence grows. If results fail to replicate, that does not automatically mean fraud or incompetence. It may reveal that the effect depends on context, that the first measurement was fragile, or that the original theory needs refinement.",
        ],
        heading: "Methods carry the weight",
      },
      {
        body: [
          "Good scientific judgement is neither gullible nor cynical. Gullibility treats a published result as finished truth. Cynicism treats uncertainty as failure. The better stance is calibrated confidence. A claim supported by converging evidence from multiple methods deserves more trust than a single dramatic result. A claim that survives attempts to disconfirm it deserves more trust than one protected from criticism.",
          "For daily reading, use a simple filter. What is the claim? What mechanism is proposed? What evidence would have counted against it? How large is the effect? Has anyone checked it independently? These questions turn science news from spectacle into usable knowledge.",
        ],
        heading: "Confidence should be calibrated",
      },
    ],
    slug: "science-claims-evidence",
    sources: [sourcePack.openStaxBiology, sourcePack.sepScientificMethod],
    subtitle: "A practical model for evidence, replication and calibrated belief.",
    title: "How Scientific Claims Get Stronger",
    topic: "science",
  },
  {
    deck: "Living systems depend on flows of energy and feedback loops that keep change within workable limits.",
    difficulty: 2,
    estimatedMinutes: 5,
    keyTerms: [
      {
        label: "System",
        value: "A set of interacting parts whose behaviour depends on relationships.",
      },
      {
        label: "Feedback",
        value: "Information from outputs that changes future behaviour.",
      },
      {
        label: "Homeostasis",
        value: "Regulation that keeps internal conditions within a viable range.",
      },
    ],
    questions: [
      {
        choices: [
          { id: "a", label: "A set of interacting parts where relationships shape outcomes" },
          { id: "b", label: "Any object with a label" },
          { id: "c", label: "A list of separate facts" },
          { id: "d", label: "A process with no boundaries" },
        ],
        correctChoiceId: "a",
        dimension: "knowledge",
        explanation: "Systems thinking focuses on interactions, flows and relationships among parts.",
        id: "science-systems-q1",
        prompt: "What is the best definition of a system?",
      },
      {
        choices: [
          { id: "a", label: "It counteracts deviation and helps keep a variable near a set range" },
          { id: "b", label: "It amplifies every change without limit" },
          { id: "c", label: "It removes the need for energy" },
          { id: "d", label: "It prevents all adaptation" },
        ],
        correctChoiceId: "a",
        dimension: "reasoning",
        explanation: "Negative feedback stabilises systems by pushing against departures from a range.",
        id: "science-systems-q2",
        prompt: "What does negative feedback usually do in a biological system?",
      },
      {
        choices: [
          { id: "a", label: "Look for inputs, outputs, constraints and feedback loops" },
          { id: "b", label: "List facts without relationships" },
          { id: "c", label: "Focus only on the largest visible part" },
          { id: "d", label: "Assume every change has one cause" },
        ],
        correctChoiceId: "a",
        dimension: "application",
        explanation: "Systems analysis begins by mapping flows, constraints and feedback rather than isolated parts.",
        id: "science-systems-q3",
        prompt: "How should you analyse why sleep, training and mood interact?",
      },
    ],
    sections: [
      {
        body: [
          "A system is not just a pile of parts. It is a set of parts whose relationships shape behaviour. A cell, an ecosystem, a training plan and a company can all be studied as systems because inputs, outputs, boundaries and feedback loops matter. Changing one part can produce effects elsewhere, sometimes after a delay.",
          "Biology makes this visible through energy. Living organisms must take in energy, transform it and use it to maintain structure, move materials, repair damage and reproduce. Energy flow is not optional background. It is one reason living systems have limits. A body cannot train hard, recover poorly and adapt indefinitely. The energy and repair budget has to come from somewhere.",
        ],
        heading: "Relationships create behaviour",
      },
      {
        body: [
          "Feedback is another central systems idea. In negative feedback, a change triggers responses that counteract the change. Body temperature regulation is a classic example: when temperature rises, sweating and blood-flow changes help cool the body; when it falls, shivering and other responses help restore warmth. The system does not hold a perfect number. It keeps conditions within a workable range.",
          "Positive feedback works differently. It amplifies change. Blood clotting and childbirth contractions are common textbook examples. Positive feedback can be useful, but because it intensifies movement in one direction, it usually needs a stopping condition or boundary. Otherwise it can become destabilising.",
        ],
        heading: "Feedback shapes stability",
      },
      {
        body: [
          "Systems thinking improves everyday reasoning because it resists single-cause stories. If mood drops after hard training, the cause may not be training alone. Sleep, nutrition, stress, workload and expectations interact. The useful question becomes: what inputs changed, what feedback signals appeared, and where is the bottleneck?",
          "This is the scientific habit behind good self-tracking. Metrics are not trophies. They are signals from a system. HRV, sleep score, deep work and mood become more useful when interpreted together. A single data point can be noise. A pattern across connected variables can reveal the system's current constraints.",
        ],
        heading: "Use signals, not superstition",
      },
    ],
    slug: "science-systems-feedback",
    sources: [sourcePack.openStaxBiology],
    subtitle: "Energy, feedback and homeostasis as tools for thinking.",
    title: "Living Systems Think in Loops",
    topic: "science",
  },
];

export const LEARNING_DIMENSION_LABELS: Record<LearningDimension, string> = {
  application: "Application",
  breadth: "Breadth",
  knowledge: "Knowledge",
  reasoning: "Reasoning",
  retention: "Retention",
};

export function isLearningTopicId(value: string): value is LearningTopicId {
  return topicIds.has(value);
}

export function getLearningTopic(topicId: LearningTopicId) {
  return LEARNING_TOPICS.find((topic) => topic.id === topicId) ?? LEARNING_TOPICS[0];
}

export function getLearningLesson(slug: string) {
  return LEARNING_LESSONS.find((lesson) => lesson.slug === slug) ?? null;
}

export function getLearningLessonsByTopic(topic: LearningTopicId) {
  return LEARNING_LESSONS.filter((lesson) => lesson.topic === topic);
}

export function answerLabel(question: LearningQuestion, choiceId: string) {
  return question.choices.find((choice) => choice.id === choiceId)?.label ?? "No answer";
}

function completedTime(session: Pick<LearningSession, "completed_at" | "created_at">) {
  return new Date(session.completed_at ?? session.created_at).getTime();
}

function daysBetween(left: Date, right: Date) {
  return Math.abs(left.getTime() - right.getTime()) / 86_400_000;
}

export function chooseNextLearningLesson(
  topic: LearningTopicId,
  sessions: LearningSession[],
) {
  const lessons = getLearningLessonsByTopic(topic);
  const latestSession = [...sessions].sort((left, right) => completedTime(right) - completedTime(left))[0];
  const attemptsBySlug = new Map<string, LearningSession[]>();

  sessions.forEach((session) => {
    attemptsBySlug.set(session.lesson_slug, [
      ...(attemptsBySlug.get(session.lesson_slug) ?? []),
      session,
    ]);
  });

  const ranked = lessons
    .map((lesson) => {
      const attempts = attemptsBySlug.get(lesson.slug) ?? [];
      const averageAccuracy = attempts.length
        ? attempts.reduce(
            (total, attempt) =>
              total + attempt.correct_count / Math.max(1, attempt.total_questions),
            0,
          ) / attempts.length
        : 0;

      return {
        attempts: attempts.length,
        averageAccuracy,
        lesson,
        sameAsLatest: latestSession?.lesson_slug === lesson.slug,
      };
    })
    .sort((left, right) => {
      if (left.attempts !== right.attempts) {
        return left.attempts - right.attempts;
      }

      if (left.sameAsLatest !== right.sameAsLatest) {
        return left.sameAsLatest ? 1 : -1;
      }

      if (left.averageAccuracy !== right.averageAccuracy) {
        return left.averageAccuracy - right.averageAccuracy;
      }

      return left.lesson.difficulty - right.lesson.difficulty;
    });

  return ranked[0]?.lesson ?? lessons[0] ?? LEARNING_LESSONS[0];
}

export function scoreLearningAttempt(
  lesson: LearningLesson,
  selectedAnswers: Record<string, string>,
  priorSessions: LearningSession[],
  now = new Date(),
): LearningScoreResult {
  const answerResults = lesson.questions.map((question) => {
    const selectedChoiceId = selectedAnswers[question.id] ?? "";

    return {
      correct: selectedChoiceId === question.correctChoiceId,
      correctChoiceId: question.correctChoiceId,
      dimension: question.dimension,
      explanation: question.explanation,
      prompt: question.prompt,
      questionId: question.id,
      selectedChoiceId,
    };
  });
  const correctCount = answerResults.filter((answer) => answer.correct).length;
  const basePoints = 10 + lesson.difficulty * 2;
  const knowledgePoints = answerResults
    .filter((answer) => answer.correct && answer.dimension === "knowledge")
    .length * basePoints;
  const reasoningPoints = answerResults
    .filter((answer) => answer.correct && answer.dimension === "reasoning")
    .length * basePoints;
  const applicationPoints = answerResults
    .filter((answer) => answer.correct && answer.dimension === "application")
    .length * basePoints;
  const previousTopicSessions = priorSessions.filter(
    (session) => session.topic === lesson.topic,
  );
  const previousLessonSessions = priorSessions.filter(
    (session) => session.lesson_slug === lesson.slug,
  );
  const latestSession = [...priorSessions].sort(
    (left, right) => completedTime(right) - completedTime(left),
  )[0];
  const topicIsNew = previousTopicSessions.length === 0;
  const switchedTopic =
    latestSession && latestSession.topic !== lesson.topic && previousTopicSessions.length > 0;
  const breadthPoints = topicIsNew ? 8 : switchedTopic ? 3 : 1;
  const latestLessonAttempt = [...previousLessonSessions].sort(
    (left, right) => completedTime(right) - completedTime(left),
  )[0];
  const accuracy = correctCount / Math.max(1, lesson.questions.length);
  const retentionPoints =
    latestLessonAttempt && daysBetween(now, new Date(latestLessonAttempt.completed_at)) >= 7
      ? accuracy >= 0.67
        ? 8
        : 2
      : latestLessonAttempt
        ? 2
        : 0;
  const scorePoints =
    knowledgePoints +
    reasoningPoints +
    applicationPoints +
    breadthPoints +
    retentionPoints;

  return {
    answers: answerResults,
    applicationPoints,
    breadthPoints,
    correctCount,
    knowledgePoints,
    reasoningPoints,
    retentionPoints,
    scorePoints,
    totalQuestions: lesson.questions.length,
  };
}

export function summariseLearningProgress(sessions: LearningSession[]) {
  const dimensions: Record<LearningDimension, number> = {
    application: 0,
    breadth: 0,
    knowledge: 0,
    reasoning: 0,
    retention: 0,
  };
  let correct = 0;
  let total = 0;
  let score = 0;

  sessions.forEach((session) => {
    dimensions.application += session.application_points;
    dimensions.breadth += session.breadth_points;
    dimensions.knowledge += session.knowledge_points;
    dimensions.reasoning += session.reasoning_points;
    dimensions.retention += session.retention_points;
    correct += session.correct_count;
    total += session.total_questions;
    score += session.score_points;
  });

  const topicStats = LEARNING_TOPICS.map((topic) => {
    const topicSessions = sessions.filter((session) => session.topic === topic.id);
    const topicCorrect = topicSessions.reduce(
      (sum, session) => sum + session.correct_count,
      0,
    );
    const topicTotal = topicSessions.reduce(
      (sum, session) => sum + session.total_questions,
      0,
    );
    const topicScore = topicSessions.reduce(
      (sum, session) => sum + session.score_points,
      0,
    );
    const lastCompletedAt = topicSessions.length
      ? [...topicSessions].sort((left, right) => completedTime(right) - completedTime(left))[0]
          .completed_at
      : null;

    return {
      accuracy: topicTotal ? Math.round((topicCorrect / topicTotal) * 100) : 0,
      attempts: topicSessions.length,
      lastCompletedAt,
      score: topicScore,
      topic,
    };
  });
  const sortedDates = Array.from(
    new Set(
      sessions.map((session) => (session.completed_at ?? session.created_at).slice(0, 10)),
    ),
  ).sort((left, right) => right.localeCompare(left));
  let streakDays = 0;

  if (sortedDates.length) {
    const cursor = new Date(`${sortedDates[0]}T12:00:00Z`);

    for (const date of sortedDates) {
      const expected = cursor.toISOString().slice(0, 10);
      if (date !== expected) {
        break;
      }

      streakDays += 1;
      cursor.setUTCDate(cursor.getUTCDate() - 1);
    }
  }

  return {
    accuracy: total ? Math.round((correct / total) * 100) : 0,
    dimensions,
    intellectScore: score,
    lessonsCompleted: sessions.length,
    recentSessions: [...sessions]
      .sort((left, right) => completedTime(right) - completedTime(left))
      .slice(0, 6),
    streakDays,
    topicStats,
  };
}
