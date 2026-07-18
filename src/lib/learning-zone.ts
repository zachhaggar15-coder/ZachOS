import type { Database } from "@/lib/supabase/database.types";
import { anthropologyLessons } from "@/lib/learning-content/anthropology";
import { architectureUrbanismLessons } from "@/lib/learning-content/architecture-urbanism";
import { artHistoryLessons } from "@/lib/learning-content/art-history";
import { artificialIntelligenceLessons } from "@/lib/learning-content/artificial-intelligence";
import { businessLessons } from "@/lib/learning-content/business";
import { classicalCivilisationLessons } from "@/lib/learning-content/classical-civilisation";
import { economicsLessons } from "@/lib/learning-content/economics";
import { geopoliticsLessons } from "@/lib/learning-content/geopolitics";
import { historyOfIdeasLessons } from "@/lib/learning-content/history-of-ideas";
import { linguisticsEtymologyLessons } from "@/lib/learning-content/linguistics-etymology";
import { literatureLessons } from "@/lib/learning-content/literature";
import { marketingLessons } from "@/lib/learning-content/marketing";
import { militaryStrategyLessons } from "@/lib/learning-content/military-strategy";
import { musicTheoryLessons } from "@/lib/learning-content/music-theory";
import { pharmaceuticalBusinessesLessons } from "@/lib/learning-content/pharmaceutical-businesses";
import { philosophyLessons } from "@/lib/learning-content/philosophy";
import { politicsLessons } from "@/lib/learning-content/politics";
import { psychologyLessons } from "@/lib/learning-content/psychology";
import { rhetoricArgumentationLessons } from "@/lib/learning-content/rhetoric-argumentation";
import { scienceLessons } from "@/lib/learning-content/science";
import { socialEngineeringLessons } from "@/lib/learning-content/social-engineering";
import { sociologyLessons } from "@/lib/learning-content/sociology";
import { systemsThinkingLessons } from "@/lib/learning-content/systems-thinking";

type LearningSession = Database["public"]["Tables"]["learning_sessions"]["Row"];

export type LearningTopicId =
  | "philosophy"
  | "marketing"
  | "economics"
  | "science"
  | "linguistics-etymology"
  | "art-history"
  | "literature"
  | "anthropology"
  | "politics"
  | "sociology"
  | "artificial-intelligence"
  | "architecture-urbanism"
  | "social-engineering"
  | "business"
  | "classical-civilisation"
  | "geopolitics"
  | "history-of-ideas"
  | "military-strategy"
  | "music-theory"
  | "pharmaceutical-businesses"
  | "psychology"
  | "rhetoric-argumentation"
  | "systems-thinking";

export type LearningConceptLevel = "GCSE" | "A-level" | "University";

export type LearningDimension =
  | "breadth"
  | "consistency"
  | "depth"
  | "reasoning"
  | "retention";

export type LearningSource = {
  label: string;
  note: string;
  type: "Primary" | "Reference" | "Textbook";
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
  concept: {
    label: string;
    level: LearningConceptLevel;
    summary: string;
  };
  deck: string;
  difficulty: number;
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
  breadthPoints: number;
  consistencyPoints: number;
  correctCount: number;
  depthPoints: number;
  reasoningPoints: number;
  retentionPoints: number;
  scorePoints: number;
  totalQuestions: number;
};

type LearningTopic = {
  accent: string;
  id: LearningTopicId;
  label: string;
  shortLabel: string;
};

type TopicProfile = {
  fieldFrame: string;
  method: string;
  practicalContext: string;
  sourceKeys: Array<keyof typeof sourcePack>;
  stakes: string;
  topic: LearningTopic;
};

type LessonSeed = {
  concept: string;
  focus: string;
  level: LearningConceptLevel;
  practice: string;
};

type LessonDetail = {
  anchor: string;
  case: string;
  challenge: string;
  method: string;
  misconception: string;
};

type ArticleFrame = {
  advancedProblem: string;
  caseWorld: string;
  disciplinaryQuestion: string;
  evidenceStandard: string;
  limits: string;
  sourceMode: string;
  studyPractice: string;
};

type SectionPlan = {
  comparison: string;
  debate: string;
  example: string;
  mechanism: string;
  opening: string;
};

type AdvancedLens = {
  complication: string;
  evidenceProblem: string;
  sourceTradition: string;
  stakes: string;
  theoryMove: string;
};

const sourcePack = {
  aiTextbook: {
    label: "Artificial Intelligence: A Modern Approach",
    note: "Standard university AI textbook site by Russell and Norvig.",
    type: "Textbook",
    url: "https://aima.cs.berkeley.edu/",
  },
  anthropologyTextbook: {
    label: "Perspectives: An Open Introduction to Cultural Anthropology",
    note: "Open anthropology textbook built around core field concepts.",
    type: "Textbook",
    url: "https://perspectives.americananthro.org/",
  },
  artHistoryTextbook: {
    label: "Introduction to Art: Design, Context, and Meaning",
    note: "Open art history and visual analysis textbook.",
    type: "Textbook",
    url: "https://oer.galileo.usg.edu/arts-textbooks/3/",
  },
  businessTextbook: {
    label: "OpenStax Principles of Management",
    note: "Open textbook on management, strategy, organisations and operations.",
    type: "Textbook",
    url: "https://openstax.org/details/books/principles-management",
  },
  consumerTextbook: {
    label: "Consumer Behaviour",
    note: "Open textbook-style resource on consumer decision making.",
    type: "Textbook",
    url: "https://opentextbc.ca/introconsumerbehaviour/",
  },
  coreEcon: {
    label: "CORE Econ: The Economy",
    note: "Open economics textbook with models, institutions and evidence.",
    type: "Textbook",
    url: "https://www.core-econ.org/the-economy/",
  },
  d2l: {
    label: "Dive into Deep Learning",
    note: "Open textbook for machine learning and neural networks.",
    type: "Textbook",
    url: "https://d2l.ai/",
  },
  ethicsTextbook: {
    label: "Introduction to Philosophy: Ethics",
    note: "Open ethics textbook from the Rebus Community philosophy series.",
    type: "Textbook",
    url: "https://press.rebus.community/intro-to-phil-ethics/",
  },
  fdaDevelopment: {
    label: "FDA Drug Development Process",
    note: "Official reference for clinical research and approval stages.",
    type: "Reference",
    url: "https://www.fda.gov/patients/drug-development-process",
  },
  literatureTextbook: {
    label: "Writing and Critical Thinking Through Literature",
    note: "Open textbook on literary reading, interpretation and evidence.",
    type: "Textbook",
    url: "https://human.libretexts.org/Bookshelves/Literature_and_Literacy/Writing_and_Critical_Thinking_Through_Literature_(Ringo_and_Kashyap)",
  },
  linguisticsTextbook: {
    label: "Essentials of Linguistics",
    note: "Open textbook covering morphology, syntax, semantics and language change.",
    type: "Textbook",
    url: "https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/",
  },
  marketingTextbook: {
    label: "Principles of Marketing",
    note: "Open textbook on segmentation, positioning and marketing systems.",
    type: "Textbook",
    url: "https://open.umn.edu/opentextbooks/textbooks/50",
  },
  musicTheory21C: {
    label: "Music Theory for the 21st-Century Classroom",
    note: "Open four-semester college music theory textbook by Robert Hutchinson.",
    type: "Textbook",
    url: "https://musictheory.pugetsound.edu/mt21c/MusicTheory.html",
  },
  openMusicTheory: {
    label: "Open Music Theory",
    note: "Open undergraduate music theory textbook covering fundamentals, harmony, form, rhythm and twentieth-century materials.",
    type: "Textbook",
    url: "https://viva.pressbooks.pub/openmusictheory/",
  },
  fretboardHarmony: {
    label: "Fretboard Harmony for University Study",
    note: "Reference on integrating harmony with guitar fretboard performance and tactile understanding.",
    type: "Reference",
    url: "https://www.laguitarra-blog.com/wp-content/uploads/2012/05/Fretboard-Harmony-Jeffrey-McFadden-.pdf",
  },
  nistSecurity: {
    label: "NIST Cybersecurity and Human Factors Resources",
    note: "Reference material for recognising and reducing manipulation risk.",
    type: "Reference",
    url: "https://www.nist.gov/cybersecurity",
  },
  openStaxBiology: {
    label: "OpenStax Biology 2e",
    note: "Open textbook for scientific explanation, evidence and life sciences.",
    type: "Textbook",
    url: "https://openstax.org/details/books/biology-2e",
  },
  openStaxEconomics: {
    label: "OpenStax Principles of Economics 3e",
    note: "Open textbook on economic reasoning and policy trade-offs.",
    type: "Textbook",
    url: "https://openstax.org/details/books/principles-economics-3e",
  },
  openStaxPoliticalScience: {
    label: "OpenStax Introduction to Political Science",
    note: "Open textbook covering political institutions, comparative politics and international relations.",
    type: "Textbook",
    url: "https://openstax.org/books/introduction-political-science/pages/1-introduction",
  },
  openStaxPolitics: {
    label: "OpenStax American Government 3e",
    note: "Open textbook on institutions, representation and political behaviour.",
    type: "Textbook",
    url: "https://openstax.org/details/books/american-government-3e",
  },
  openStaxPsychology: {
    label: "OpenStax Psychology 2e",
    note: "Open psychology textbook covering cognition, development, social psychology, learning, stress and behaviour.",
    type: "Textbook",
    url: "https://openstax.org/details/books/psychology-2e",
  },
  openStaxSociology: {
    label: "OpenStax Introduction to Sociology 3e",
    note: "Open textbook on social structure, institutions and research methods.",
    type: "Textbook",
    url: "https://openstax.org/details/books/introduction-sociology-3e",
  },
  openStaxWorldHistory1: {
    label: "OpenStax World History Volume 1",
    note: "Open textbook covering ancient and classical civilisations to 1500.",
    type: "Textbook",
    url: "https://openstax.org/details/books/world-history-volume-1",
  },
  openStaxWorldHistory2: {
    label: "OpenStax World History Volume 2",
    note: "Open textbook covering modern global history, revolutions, imperialism, conflict and globalisation.",
    type: "Textbook",
    url: "https://openstax.org/details/books/world-history-volume-2",
  },
  pharmaAccess: {
    label: "WHO Medicines Pricing and Financing",
    note: "Reference material on pricing, access and health-system affordability.",
    type: "Reference",
    url: "https://www.who.int/teams/health-product-policy-and-standards/medicines-selection-ip-and-affordability/affordability-pricing-and-financing",
  },
  philosophyTextbook: {
    label: "Introduction to Philosophy: Logic",
    note: "Open textbook for argument, validity and philosophical method.",
    type: "Textbook",
    url: "https://press.rebus.community/intro-to-phil-logic/",
  },
  projectGutenberg: {
    label: "Project Gutenberg",
    note: "Primary literary texts used for interpretation and close reading.",
    type: "Primary",
    url: "https://www.gutenberg.org/",
  },
  projectGutenbergOnWar: {
    label: "Project Gutenberg: On War",
    note: "Public-domain primary text by Carl von Clausewitz for strategy and military theory.",
    type: "Primary",
    url: "https://www.gutenberg.org/ebooks/1946",
  },
  rhetoricTextbook: {
    label: "OpenStax Writing Guide with Handbook",
    note: "Open writing textbook with rhetoric, argumentation, evidence and genre material.",
    type: "Textbook",
    url: "https://openstax.org/details/books/writing-guide",
  },
  sep: {
    label: "Stanford Encyclopedia of Philosophy",
    note: "Peer-reviewed reference for advanced concepts and primary debates.",
    type: "Reference",
    url: "https://plato.stanford.edu/",
  },
  smarthistory: {
    label: "Smarthistory",
    note: "Museum-grade art history reference with images and essays.",
    type: "Reference",
    url: "https://smarthistory.org/",
  },
  silvaRhetoricae: {
    label: "Silva Rhetoricae",
    note: "Reference guide to classical and renaissance rhetorical terms and figures.",
    type: "Reference",
    url: "https://rhetoric.byu.edu/",
  },
  spaceSyntaxUrbanStudies: {
    label: "Introduction to Space Syntax in Urban Studies",
    note: "Open access reference on spatial configuration, movement and urban form.",
    type: "Reference",
    url: "https://library.oapen.org/handle/20.500.12657/50404",
  },
  systemsThinkingSustainability: {
    label: "Introduction to Sustainability: Systems Thinking",
    note: "Open textbook chapter introducing feedback loops and systems thinking through everyday sustainability examples.",
    type: "Textbook",
    url: "https://openbooks.macewan.ca/introductiontosustainability/chapter/chapter-two-systems-thinking/",
  },
  systemsThinker: {
    label: "The Systems Thinker",
    note: "Reference material on stocks, flows, causal loops and feedback reasoning.",
    type: "Reference",
    url: "https://thesystemsthinker.com/",
  },
} as const satisfies Record<string, LearningSource>;

const topicProfiles: Record<LearningTopicId, TopicProfile> = {
  anthropology: {
    fieldFrame:
      "anthropology studies human life comparatively, using culture, material evidence and fieldwork to understand what people do and why it makes sense inside a social world",
    method:
      "compare cases, separate insider and outsider perspectives, and treat everyday practices as evidence",
    practicalContext:
      "reading unfamiliar behaviour without flattening it into stereotypes or treating your own habits as the default",
    sourceKeys: ["anthropologyTextbook", "openStaxSociology"],
    stakes:
      "it builds intellectual humility: the same human problem can be solved through very different customs, meanings and institutions",
    topic: {
      accent: "#9a6b4d",
      id: "anthropology",
      label: "Anthropology",
      shortLabel: "Anthro",
    },
  },
  "art-history": {
    fieldFrame:
      "art history reads visual objects as evidence of skill, patronage, belief, technology, politics and taste",
    method:
      "look first, describe precisely, then connect form, context, maker, audience and historical conditions",
    practicalContext:
      "seeing paintings, buildings, images and interfaces with more disciplined attention",
    sourceKeys: ["artHistoryTextbook", "smarthistory"],
    stakes:
      "images shape memory and power; learning to read them makes visual culture less passive and more legible",
    topic: {
      accent: "#6e5aa7",
      id: "art-history",
      label: "Art History",
      shortLabel: "Art",
    },
  },
  "artificial-intelligence": {
    fieldFrame:
      "artificial intelligence studies systems that perceive, predict, reason, generate or act under uncertainty",
    method:
      "define the task, identify the data and objective, then test whether the system generalises beyond the examples it learned from",
    practicalContext:
      "judging models, automations and AI products without being dazzled by fluent output",
    sourceKeys: ["aiTextbook", "d2l"],
    stakes:
      "AI changes what can be automated, but it also changes what has to be evaluated by humans",
    topic: {
      accent: "#4f83a6",
      id: "artificial-intelligence",
      label: "Artificial Intelligence",
      shortLabel: "AI",
    },
  },
  "architecture-urbanism": {
    fieldFrame:
      "architecture and urbanism study how buildings, streets, public spaces and infrastructure shape everyday movement, attention, comfort, identity and power",
    method:
      "read the built environment through form, material, threshold, circulation, density, land use, public-private boundary and patterns of access",
    practicalContext:
      "noticing why a street feels safe or hostile, why a building guides behaviour, and how neighbourhood design changes ordinary life",
    sourceKeys: ["artHistoryTextbook", "spaceSyntaxUrbanStudies", "openStaxSociology"],
    stakes:
      "the built environment quietly trains habits: where people walk, meet, wait, avoid, spend money, feel welcome or feel watched",
    topic: {
      accent: "#6d7465",
      id: "architecture-urbanism",
      label: "Architecture & Urbanism",
      shortLabel: "Urban",
    },
  },
  business: {
    fieldFrame:
      "business studies how organisations create, deliver and capture value while coordinating people, capital and operations",
    method:
      "connect strategy to incentives, resources, execution and measurable customer outcomes",
    practicalContext:
      "understanding why some companies compound advantages while others waste motion",
    sourceKeys: ["businessTextbook", "marketingTextbook"],
    stakes:
      "good business judgement links ambition to constraints: cash, talent, time, trust and operational capacity",
    topic: {
      accent: "#607b4f",
      id: "business",
      label: "Business",
      shortLabel: "Biz",
    },
  },
  "classical-civilisation": {
    fieldFrame:
      "classical civilisation studies the cultures of ancient Greece and Rome through myth, politics, war, philosophy, law, theatre, art and urban life",
    method:
      "connect ancient texts, monuments, institutions and myths to the everyday concepts they still shape: citizenship, rhetoric, heroism, republics and public virtue",
    practicalContext:
      "seeing classical references in politics, buildings, sport, law, literature, luxury branding and ideas of leadership",
    sourceKeys: ["openStaxWorldHistory1", "projectGutenberg", "smarthistory"],
    stakes:
      "classical ideas remain powerful because they supply symbols and arguments that modern institutions still borrow, revise and contest",
    topic: {
      accent: "#9a7a45",
      id: "classical-civilisation",
      label: "Classical Civilisation",
      shortLabel: "Classics",
    },
  },
  economics: {
    fieldFrame:
      "economics studies scarcity, incentives, coordination and trade-offs across households, firms, markets and governments",
    method:
      "name the constraint, model the incentive, and ask who gains, who pays and what changes at the margin",
    practicalContext:
      "making sharper decisions about prices, work, policy, investment and time",
    sourceKeys: ["openStaxEconomics", "coreEcon"],
    stakes:
      "economic thinking helps you see hidden costs and second-order effects rather than only visible intentions",
    topic: {
      accent: "#7a8c5a",
      id: "economics",
      label: "Economics",
      shortLabel: "Econ",
    },
  },
  geopolitics: {
    fieldFrame:
      "geopolitics studies how geography, power, resources, technology, alliances and institutions shape the behaviour of states and regions",
    method:
      "connect maps to incentives: chokepoints, borders, energy routes, demographic pressures, military reach, trade dependence and diplomatic constraints",
    practicalContext:
      "reading news about wars, supply chains, energy prices, migration, sanctions and alliances with more structural depth",
    sourceKeys: ["openStaxPoliticalScience", "openStaxWorldHistory2", "openStaxEconomics"],
    stakes:
      "geopolitical thinking links everyday prices and headlines to geography, institutions and strategic choices made far away",
    topic: {
      accent: "#596f8c",
      id: "geopolitics",
      label: "Geopolitics",
      shortLabel: "Geo",
    },
  },
  "history-of-ideas": {
    fieldFrame:
      "history of ideas studies how concepts such as liberty, progress, nature, reason, nation, class and the self change across time and institutions",
    method:
      "trace an idea through texts, social conditions, institutions, technologies and ordinary vocabulary rather than treating it as timeless common sense",
    practicalContext:
      "recognising inherited assumptions in news, workplaces, education, self-improvement culture, politics and moral language",
    sourceKeys: ["openStaxWorldHistory2", "philosophyTextbook", "sep"],
    stakes:
      "ideas are not weightless; they become laws, habits, business models, identities and ways of judging what a good life is",
    topic: {
      accent: "#7f6655",
      id: "history-of-ideas",
      label: "History of Ideas",
      shortLabel: "Ideas",
    },
  },
  "linguistics-etymology": {
    fieldFrame:
      "linguistics studies language as a system, while etymology traces how words change form and meaning through history",
    method:
      "separate sound, structure, meaning and social use before explaining how a word or sentence works",
    practicalContext:
      "reading words, accents, grammar and persuasion with more precision",
    sourceKeys: ["linguisticsTextbook", "literatureTextbook"],
    stakes:
      "language is not just vocabulary; it is an operating system for thought, identity and social coordination",
    topic: {
      accent: "#3f8c7a",
      id: "linguistics-etymology",
      label: "Linguistics & Etymology",
      shortLabel: "Words",
    },
  },
  literature: {
    fieldFrame:
      "literature studies how language, form, voice and narrative create meaning across poems, plays, novels and essays",
    method:
      "read closely, track patterns, test interpretations against textual evidence and historical context",
    practicalContext:
      "getting more from serious reading and becoming harder to fool by shallow summaries",
    sourceKeys: ["literatureTextbook", "projectGutenberg"],
    stakes:
      "literature trains attention to ambiguity, motive, irony, rhythm and the inner lives of other people",
    topic: {
      accent: "#8f4f63",
      id: "literature",
      label: "Literature",
      shortLabel: "Lit",
    },
  },
  marketing: {
    fieldFrame:
      "marketing studies how value is understood, positioned, communicated and exchanged in a specific market",
    method:
      "start with the customer, segment the market, define the promise, and test whether behaviour changes",
    practicalContext:
      "spotting why a message, product, offer or brand either earns attention or disappears",
    sourceKeys: ["marketingTextbook", "consumerTextbook"],
    stakes:
      "marketing is not decoration; it is applied psychology, economics and strategy meeting the customer",
    topic: {
      accent: "#bb5d3a",
      id: "marketing",
      label: "Marketing",
      shortLabel: "Mktg",
    },
  },
  "military-strategy": {
    fieldFrame:
      "military strategy studies the use of organised force to achieve political aims under danger, uncertainty, friction and limited resources",
    method:
      "separate objective, enemy, terrain, logistics, morale, intelligence, timing and political constraint before judging a plan",
    practicalContext:
      "understanding conflict news, organisational competition, security decisions and everyday strategic language without romanticising war",
    sourceKeys: ["projectGutenbergOnWar", "openStaxPoliticalScience", "openStaxWorldHistory2"],
    stakes:
      "strategy teaches that plans fail not only through bad intentions but through friction, fog, incentives, logistics and mistaken assumptions about the opponent",
    topic: {
      accent: "#6e6a58",
      id: "military-strategy",
      label: "Military Strategy",
      shortLabel: "Strategy",
    },
  },
  "music-theory": {
    fieldFrame:
      "music theory explains how pitch, rhythm, harmony, melody, texture and form organise musical sound, with guitarists translating those structures onto a tuned, fretted instrument",
    method:
      "connect staff or chord-symbol theory to fretboard locations, interval shapes, voicings, rhythmic feel and the sound of real progressions",
    practicalContext:
      "understanding songs, improvisation, chord melody, riffs, accompaniment and composition through the guitar rather than through abstract notation alone",
    sourceKeys: ["openMusicTheory", "musicTheory21C", "fretboardHarmony"],
    stakes:
      "guitar theory is strongest when ear, hand, fretboard pattern and harmonic explanation all point to the same musical fact",
    topic: {
      accent: "#7c5f9f",
      id: "music-theory",
      label: "Music Theory for Guitar",
      shortLabel: "Guitar",
    },
  },
  "pharmaceutical-businesses": {
    fieldFrame:
      "pharmaceutical business studies how medicines move from scientific discovery through trials, regulation, market access, commercial launch and patient use",
    method:
      "track the asset, evidence package, regulator, payer, prescriber, patient and commercial model together",
    practicalContext:
      "understanding drug development, life-sciences sales systems, pricing, compliance and market access",
    sourceKeys: ["fdaDevelopment", "pharmaAccess", "businessTextbook"],
    stakes:
      "pharma sits where science, ethics, regulation and profit collide, so shallow business thinking is dangerous",
    topic: {
      accent: "#4f7790",
      id: "pharmaceutical-businesses",
      label: "Pharmaceutical Businesses",
      shortLabel: "Pharma",
    },
  },
  psychology: {
    fieldFrame:
      "psychology studies behaviour and mental processes, including perception, memory, learning, emotion, motivation, development and social influence",
    method:
      "connect everyday behaviour to mechanisms, evidence, context and limits rather than explaining everything through personality or willpower",
    practicalContext:
      "understanding habits, attention, stress, relationships, persuasion, motivation and decision-making in daily life",
    sourceKeys: ["openStaxPsychology", "openStaxSociology"],
    stakes:
      "psychology is useful when it turns familiar behaviour into testable mechanisms without reducing people to simplistic labels",
    topic: {
      accent: "#6f7f55",
      id: "psychology",
      label: "Psychology",
      shortLabel: "Psych",
    },
  },
  philosophy: {
    fieldFrame:
      "philosophy tests concepts, arguments and values when ordinary answers become too loose or too inherited",
    method:
      "define terms, reconstruct the argument charitably, test objections and separate what follows from what merely feels persuasive",
    practicalContext:
      "thinking clearly about belief, ethics, identity, knowledge and the good life",
    sourceKeys: ["philosophyTextbook", "ethicsTextbook", "sep"],
    stakes:
      "philosophy sharpens the mental tools used by every other subject: logic, clarity, doubt and judgement",
    topic: {
      accent: "#8a6f4d",
      id: "philosophy",
      label: "Philosophy",
      shortLabel: "Phil",
    },
  },
  politics: {
    fieldFrame:
      "politics studies power, institutions, legitimacy, conflict and collective decision making",
    method:
      "ask who has authority, how rules are made, whose interests count, and what incentives the institution creates",
    practicalContext:
      "reading campaigns, governments, media arguments and policy disputes with less tribal fog",
    sourceKeys: ["openStaxPolitics", "openStaxSociology"],
    stakes:
      "political ideas become budgets, laws, borders, rights and obligations, so definitions matter",
    topic: {
      accent: "#8f6644",
      id: "politics",
      label: "Politics",
      shortLabel: "Pol",
    },
  },
  "rhetoric-argumentation": {
    fieldFrame:
      "rhetoric and argumentation study how claims persuade audiences through evidence, arrangement, style, credibility, emotion and timing",
    method:
      "identify claim, audience, context, warrant, evidence, appeal, framing and counterargument before deciding whether persuasion is justified",
    practicalContext:
      "reading adverts, speeches, workplace pitches, essays, social media arguments and headlines without being carried by surface confidence",
    sourceKeys: ["rhetoricTextbook", "silvaRhetoricae", "philosophyTextbook"],
    stakes:
      "rhetorical literacy makes persuasion visible: not to become cynical, but to distinguish strong argument from pressure, ornament and manipulation",
    topic: {
      accent: "#8a5f78",
      id: "rhetoric-argumentation",
      label: "Rhetoric & Argumentation",
      shortLabel: "Rhetoric",
    },
  },
  science: {
    fieldFrame:
      "science builds reliable explanations by combining observation, theory, measurement, prediction and revision",
    method:
      "ask what would count as evidence, what would change the claim, and whether the result can survive independent scrutiny",
    practicalContext:
      "judging health claims, technology claims and research headlines without either cynicism or gullibility",
    sourceKeys: ["openStaxBiology", "coreEcon"],
    stakes:
      "scientific literacy is a defence against both overconfidence and vague scepticism",
    topic: {
      accent: "#4f7f8f",
      id: "science",
      label: "Science",
      shortLabel: "Sci",
    },
  },
  "social-engineering": {
    fieldFrame:
      "social engineering studies how people are influenced, deceived, pressured or guided through trust, emotion, authority and context",
    method:
      "identify the claimed identity, emotional lever, requested action, missing verification and ethical boundary",
    practicalContext:
      "recognising manipulation in scams, sales pressure, dark patterns, office politics and everyday persuasion",
    sourceKeys: ["consumerTextbook", "nistSecurity", "ethicsTextbook"],
    stakes:
      "learning manipulation is intellectually useful when it is framed as recognition, defence and ethical influence rather than exploitation",
    topic: {
      accent: "#85506e",
      id: "social-engineering",
      label: "Social Engineering",
      shortLabel: "SocEng",
    },
  },
  sociology: {
    fieldFrame:
      "sociology studies patterned social life: groups, norms, inequality, institutions, identity and social change",
    method:
      "link personal experience to social structure and test claims with evidence rather than anecdote alone",
    practicalContext:
      "understanding why individual choices often reflect wider systems of status, class, roles and institutions",
    sourceKeys: ["openStaxSociology", "anthropologyTextbook"],
    stakes:
      "sociology turns private troubles into public questions without erasing personal agency",
    topic: {
      accent: "#6c778d",
      id: "sociology",
      label: "Sociology",
      shortLabel: "Soc",
    },
  },
  "systems-thinking": {
    fieldFrame:
      "systems thinking studies how parts interact through feedback, stocks, flows, delays, incentives and boundaries to produce behaviour over time",
    method:
      "look past isolated events and map relationships, feedback loops, bottlenecks, delays, accumulation and unintended consequences",
    practicalContext:
      "understanding habits, traffic, money, organisations, apps, health routines, families and cities as interacting systems",
    sourceKeys: ["systemsThinkingSustainability", "systemsThinker", "openStaxBiology"],
    stakes:
      "systems thinking helps explain why sincere fixes can fail when they ignore feedback, delays, incentives or the wider structure",
    topic: {
      accent: "#4f8171",
      id: "systems-thinking",
      label: "Systems Thinking",
      shortLabel: "Systems",
    },
  },
};

const sectionPlans: Record<LearningTopicId, SectionPlan> = {
  anthropology: {
    comparison: "Comparative Context",
    debate: "Anthropological Debate",
    example: "Ethnographic Example",
    mechanism: "Culture, Practice, and Evidence",
    opening: "Concept in the Field",
  },
  "art-history": {
    comparison: "Visual Neighbours",
    debate: "Interpretive Dispute",
    example: "Work, Object, and Setting",
    mechanism: "Form, Medium, and Context",
    opening: "Visual Problem",
  },
  "artificial-intelligence": {
    comparison: "Related AI Concepts",
    debate: "Failure Modes and Limits",
    example: "System Example",
    mechanism: "Model, Data, and Objective",
    opening: "Technical Definition",
  },
  "architecture-urbanism": {
    comparison: "Related Spatial Ideas",
    debate: "Design Tension",
    example: "Built Environment Example",
    mechanism: "Form, Flow, and Use",
    opening: "Spatial Concept",
  },
  business: {
    comparison: "Adjacent Business Ideas",
    debate: "Strategic Tension",
    example: "Company Case",
    mechanism: "Value, Resources, and Execution",
    opening: "Management Concept",
  },
  "classical-civilisation": {
    comparison: "Related Classical Ideas",
    debate: "Ancient and Modern Tension",
    example: "Classical Example",
    mechanism: "Myth, Institution, and Public Life",
    opening: "Classical Concept",
  },
  economics: {
    comparison: "Nearby Economic Models",
    debate: "Policy and Welfare Tension",
    example: "Market Example",
    mechanism: "Incentives and Constraints",
    opening: "Economic Model",
  },
  geopolitics: {
    comparison: "Related Strategic Ideas",
    debate: "Power and Constraint",
    example: "Map and News Example",
    mechanism: "Geography, Resources, and Power",
    opening: "Geopolitical Concept",
  },
  "history-of-ideas": {
    comparison: "Related Intellectual Currents",
    debate: "Historical Tension",
    example: "Idea in Everyday Life",
    mechanism: "Concept, Context, and Transmission",
    opening: "Idea in History",
  },
  "linguistics-etymology": {
    comparison: "Related Language Features",
    debate: "Variation and Change",
    example: "Language Example",
    mechanism: "Structure, Meaning, and History",
    opening: "Linguistic Definition",
  },
  literature: {
    comparison: "Related Literary Devices",
    debate: "Critical Interpretation",
    example: "Textual Example",
    mechanism: "Form, Voice, and Meaning",
    opening: "Literary Term",
  },
  marketing: {
    comparison: "Related Marketing Ideas",
    debate: "Market Tension",
    example: "Consumer Example",
    mechanism: "Customer, Promise, and Exchange",
    opening: "Marketing Concept",
  },
  "military-strategy": {
    comparison: "Related Strategic Concepts",
    debate: "Friction and Command",
    example: "Conflict Example",
    mechanism: "Objective, Force, and Constraint",
    opening: "Strategy Concept",
  },
  "music-theory": {
    comparison: "Related Fretboard Ideas",
    debate: "Musical Tension",
    example: "Guitar Example",
    mechanism: "Sound, Shape, and Function",
    opening: "Guitar Theory Concept",
  },
  "pharmaceutical-businesses": {
    comparison: "Related Pharma Terms",
    debate: "Commercial and Ethical Tension",
    example: "Development or Access Example",
    mechanism: "Evidence, Regulation, and Market Access",
    opening: "Life-Sciences Business Concept",
  },
  psychology: {
    comparison: "Related Psychological Ideas",
    debate: "Evidence and Explanation",
    example: "Everyday Behaviour Example",
    mechanism: "Mind, Behaviour, and Context",
    opening: "Psychological Concept",
  },
  philosophy: {
    comparison: "Neighbouring Arguments",
    debate: "Philosophical Objection",
    example: "Argument Example",
    mechanism: "Claim, Premise, and Consequence",
    opening: "Philosophical Problem",
  },
  politics: {
    comparison: "Related Political Ideas",
    debate: "Institutional Dispute",
    example: "Government or Movement Example",
    mechanism: "Power, Authority, and Rules",
    opening: "Political Concept",
  },
  "rhetoric-argumentation": {
    comparison: "Related Persuasive Moves",
    debate: "Argument and Manipulation",
    example: "Everyday Argument Example",
    mechanism: "Claim, Audience, and Appeal",
    opening: "Rhetorical Concept",
  },
  science: {
    comparison: "Related Scientific Concepts",
    debate: "Scientific Limits",
    example: "Research Example",
    mechanism: "Observation, Model, and Test",
    opening: "Scientific Meaning",
  },
  "social-engineering": {
    comparison: "Related Influence Mechanisms",
    debate: "Ethical Boundary",
    example: "Persuasion or Attack Example",
    mechanism: "Cue, Trust, and Action",
    opening: "Influence Concept",
  },
  sociology: {
    comparison: "Related Social Concepts",
    debate: "Sociological Tension",
    example: "Social Example",
    mechanism: "Structure, Norm, and Institution",
    opening: "Sociological Concept",
  },
  "systems-thinking": {
    comparison: "Related System Ideas",
    debate: "Intervention Tension",
    example: "Everyday System Example",
    mechanism: "Feedback, Flow, and Delay",
    opening: "Systems Concept",
  },
};

const advancedLenses: Record<LearningTopicId, AdvancedLens> = {
  anthropology: {
    complication:
      "Anthropological explanation becomes stronger when it keeps meaning, power, ecology and history in view at the same time.",
    evidenceProblem:
      "Field evidence is partial and situated: it comes from access, translation, memory, observation and the researcher's own position in the scene.",
    sourceTradition:
      "Open anthropology textbooks usually move from culture and fieldwork into kinship, ritual, exchange and material life, so concepts are treated as tools for comparing social worlds without reducing them to stereotypes.",
    stakes:
      "The intellectual gain is comparative humility: human practices become intelligible without becoming identical, and difference becomes material for explanation rather than immediate dismissal.",
    theoryMove:
      "The theoretical move is to treat ordinary practice as organised meaning, not as raw behaviour waiting for an outsider's label.",
  },
  "art-history": {
    complication:
      "Art-historical explanation has to hold together material technique, patronage, viewing conditions, iconography and later museum interpretation.",
    evidenceProblem:
      "The evidence is visual before it is textual: composition, scale, medium, surface, gesture and placement often carry claims that documents only partly confirm.",
    sourceTradition:
      "Art history textbooks and museum references normally begin with formal analysis, then widen into context, medium, patronage, provenance and reception.",
    stakes:
      "The gain is a disciplined visual intelligence: artworks become historical arguments made through materials, not illustrations of facts already known elsewhere.",
    theoryMove:
      "The theoretical move is to treat the artwork as an active construction of meaning, status and memory rather than as a transparent picture of its subject.",
  },
  "artificial-intelligence": {
    complication:
      "AI concepts are complicated by the gap between formal objectives and the messy environments in which systems are deployed.",
    evidenceProblem:
      "The evidence problem is generalisation: performance on training data, benchmarks or demonstrations may not survive distribution shift, adversarial cases or real user incentives.",
    sourceTradition:
      "University AI and machine-learning textbooks usually frame the field through agents, search, representation, learning, optimisation and evaluation under uncertainty.",
    stakes:
      "The gain is technical scepticism without cynicism: fluent or high-scoring systems can be impressive while still needing careful specification, testing and governance.",
    theoryMove:
      "The theoretical move is to separate the task, representation, objective function, data distribution and evaluation procedure before judging intelligence.",
  },
  "architecture-urbanism": {
    complication:
      "Built environments become difficult to analyse because aesthetic choice, social control, land value, infrastructure and everyday habit are often fused in the same street or building.",
    evidenceProblem:
      "The evidence problem is spatial and lived: plans, photographs, footfall, materials, regulations and ordinary behaviour all reveal different parts of the built environment.",
    sourceTradition:
      "Architecture and urbanism sources usually move from form and material into circulation, public space, urban morphology, housing, planning and the politics of access.",
    stakes:
      "The gain is spatial literacy: pavements, doors, benches, walls, stations and squares become evidence about how a place expects people to move and behave.",
    theoryMove:
      "The theoretical move is to treat space as an active social arrangement rather than a neutral container for life.",
  },
  business: {
    complication:
      "Business analysis becomes difficult when growth, profit, cash timing, capability and culture point in different directions.",
    evidenceProblem:
      "The evidence problem is attribution: revenue, market share or customer praise may come from timing, subsidy, switching costs or temporary novelty rather than durable advantage.",
    sourceTradition:
      "Management textbooks usually organise the subject around value creation, strategy, organisation, operations, finance, leadership and the fit between resources and markets.",
    stakes:
      "The gain is commercial judgement: attractive stories about a company can be tested against constraints, incentives and execution capacity.",
    theoryMove:
      "The theoretical move is to connect a firm's choices to its activity system, resource base and economic engine rather than judging ideas in isolation.",
  },
  "classical-civilisation": {
    complication:
      "Classical civilisation is difficult because Greek and Roman material reaches modern life through admiration, translation, empire, education, ruins and selective memory.",
    evidenceProblem:
      "The evidence problem is fragmentary and mediated: texts, inscriptions, architecture, sculpture, coins and later retellings preserve different and often partial ancient voices.",
    sourceTradition:
      "Classical civilisation teaching usually combines myth, epic, drama, politics, philosophy, art, archaeology and Roman public life rather than treating the ancient world as one unified culture.",
    stakes:
      "The gain is cultural recognition: classical references in buildings, law, rhetoric and politics become legible as choices rather than decorative prestige.",
    theoryMove:
      "The theoretical move is to connect ancient practices to their institutions and then ask what modern culture keeps, edits or misunderstands.",
  },
  economics: {
    complication:
      "Economic explanation becomes serious when individual incentives, institutional rules, distributional effects and time horizons are considered together.",
    evidenceProblem:
      "The evidence problem is causal identification: observed outcomes may reflect selection, confounding, market power, policy design or changing expectations.",
    sourceTradition:
      "Economics textbooks move between models and evidence, using simplified assumptions to clarify scarcity, incentives, markets, bargaining and policy trade-offs.",
    stakes:
      "The gain is second-order reasoning: visible benefits can be compared with opportunity costs, unintended effects and who bears the adjustment.",
    theoryMove:
      "The theoretical move is to model a constraint and then ask how behaviour changes at the margin when incentives or rules change.",
  },
  geopolitics: {
    complication:
      "Geopolitical explanation becomes complex because geography constrains states, but institutions, technology, ideology and leadership mediate those constraints.",
    evidenceProblem:
      "The evidence problem is scale: maps, trade data, troop movements, treaty commitments, energy flows and demographic pressures all matter, but none is enough alone.",
    sourceTradition:
      "Political science and world-history textbooks usually approach geopolitics through states, sovereignty, international institutions, war, political economy and historical change.",
    stakes:
      "The gain is structural news reading: everyday headlines about fuel, migration, sanctions, supply chains and conflict can be connected to geography and power.",
    theoryMove:
      "The theoretical move is to ask how location, resources and security dilemmas change the menu of choices available to political actors.",
  },
  "history-of-ideas": {
    complication:
      "Ideas become difficult to study because they travel through books, schools, technologies, institutions, habits and slogans, changing meaning as they move.",
    evidenceProblem:
      "The evidence problem is contextual: a word such as progress, freedom or nature can mean different things depending on period, class, institution and political need.",
    sourceTradition:
      "History of ideas works between intellectual history, philosophy, political theory and social history, tracing concepts through arguments and the worlds that made them plausible.",
    stakes:
      "The gain is conceptual self-awareness: everyday assumptions begin to look inherited, contested and historically produced rather than obvious.",
    theoryMove:
      "The theoretical move is to treat an idea as an actor in history, shaped by context while also shaping what people think is possible.",
  },
  "linguistics-etymology": {
    complication:
      "Language analysis becomes richer when sound, grammar, meaning, social identity and historical change are not collapsed into one story.",
    evidenceProblem:
      "The evidence problem is separating intuition from pattern: speakers often know a language system implicitly while misdescribing how it works.",
    sourceTradition:
      "Linguistics textbooks typically separate phonetics, phonology, morphology, syntax, semantics, pragmatics, sociolinguistics and language change before recombining them in analysis.",
    stakes:
      "The gain is precision about language as a system: words and sentences become structured evidence rather than merely expressive habits.",
    theoryMove:
      "The theoretical move is to treat language as rule-governed and socially variable at the same time.",
  },
  literature: {
    complication:
      "Literary interpretation becomes demanding when form, historical context, voice, genre, ambiguity and readerly response all affect meaning.",
    evidenceProblem:
      "The evidence problem is textual warrant: an interpretation has to be supported by patterns in language, structure and recurrence rather than by a private reaction alone.",
    sourceTradition:
      "Literature textbooks generally begin with close reading, then connect imagery, narrative, character, genre and historical context to arguable interpretations.",
    stakes:
      "The gain is interpretive discipline: complex texts can remain ambiguous without becoming meaningless or reducible to plot summary.",
    theoryMove:
      "The theoretical move is to treat form as meaning-bearing, so rhythm, perspective, silence and repetition become part of the argument.",
  },
  marketing: {
    complication:
      "Marketing analysis becomes stronger when customer psychology, market structure, pricing, distribution and brand memory are considered together.",
    evidenceProblem:
      "The evidence problem is behaviour: attention, liking and stated preference do not always predict purchase, retention or willingness to pay.",
    sourceTradition:
      "Marketing and consumer behaviour textbooks usually build from customer need into segmentation, targeting, positioning, value, channels, persuasion and exchange.",
    stakes:
      "The gain is sharper commercial empathy: the market is not an abstract audience but a set of people making choices under constraints.",
    theoryMove:
      "The theoretical move is to translate a product feature into perceived value for a specific segment in a specific buying context.",
  },
  "military-strategy": {
    complication:
      "Military strategy is difficult because violence is organised for political purposes under uncertainty, fear, limited information and resistance from an intelligent opponent.",
    evidenceProblem:
      "The evidence problem is counterfactual: battles and campaigns show what happened, but strategy also asks what alternatives were available and what constraints commanders perceived.",
    sourceTradition:
      "Classical strategy and political science sources usually connect war to policy, friction, morale, logistics, terrain, command and the opponent's will.",
    stakes:
      "The gain is strategic realism: plans in conflict, business and everyday competition can be tested against friction, logistics, uncertainty and enemy adaptation.",
    theoryMove:
      "The theoretical move is to connect means to political ends while asking how friction and opposition transform the plan.",
  },
  "music-theory": {
    complication:
      "Guitar theory becomes complex because the same pitch, interval or chord can appear in several physical places, each with a different fingering, register, timbre and voice-leading possibility.",
    evidenceProblem:
      "The evidence problem is musical rather than only symbolic: notation, tablature, chord symbols, fretboard shapes and the ear can each describe the same event differently.",
    sourceTradition:
      "Open music theory textbooks usually build from pitch, rhythm, scales and intervals into harmony, cadence, form and chromaticism; a guitarist has to translate that sequence into strings, frets, positions, voicings and idiomatic movement.",
    stakes:
      "The gain is practical musicianship: theory stops being a list of names and becomes a way to hear, locate, voice, vary and explain musical choices on the guitar.",
    theoryMove:
      "The theoretical move is to connect a sound to its intervallic structure and then map that structure onto the fretboard without losing harmonic function.",
  },
  "pharmaceutical-businesses": {
    complication:
      "Pharmaceutical business analysis is unusually complex because scientific promise, clinical evidence, regulation, payer incentives and patient access can conflict.",
    evidenceProblem:
      "The evidence problem is translational: a biological mechanism, a clinical endpoint, a regulatory label and a commercial forecast answer different questions.",
    sourceTradition:
      "Drug-development and market-access references organise the field around discovery, trials, approval, pricing, reimbursement, promotion, safety and lifecycle management.",
    stakes:
      "The gain is ethical commercial literacy: medicine is both a public-health good and a regulated business asset.",
    theoryMove:
      "The theoretical move is to follow the asset from molecule to patient while tracking which institution controls each decision gate.",
  },
  psychology: {
    complication:
      "Psychological explanation becomes difficult because behaviour can be shaped by biology, learning history, perception, social context and conscious interpretation at the same time.",
    evidenceProblem:
      "The evidence problem is measurement: self-report, experiments, observation, reaction time and physiological data each capture only part of mental life.",
    sourceTradition:
      "Psychology textbooks usually move from biological bases and sensation into learning, memory, development, motivation, personality, stress and social behaviour.",
    stakes:
      "The gain is everyday self-understanding: habits, attention, conflict and motivation become mechanisms that can be studied rather than mysteries or moral failures.",
    theoryMove:
      "The theoretical move is to explain behaviour through interacting mechanisms rather than through a single trait label.",
  },
  philosophy: {
    complication:
      "Philosophical difficulty often lies in a concept's apparent simplicity: familiar words such as knowledge, good, self or truth become unstable under analysis.",
    evidenceProblem:
      "The evidence problem is argumentative rather than experimental: premises, validity, counterexamples, intuitions and conceptual distinctions have to be made explicit.",
    sourceTradition:
      "Philosophy textbooks and encyclopaedic references typically reconstruct arguments, define terms, test objections and locate disputes within longer traditions.",
    stakes:
      "The gain is intellectual hygiene: an attractive conclusion can be separated from an argument that actually supports it.",
    theoryMove:
      "The theoretical move is to slow down ordinary judgement until its hidden premises become visible.",
  },
  politics: {
    complication:
      "Political explanation becomes more serious when institutions, legitimacy, ideology, interests and collective action are analysed together.",
    evidenceProblem:
      "The evidence problem is interpretation of power: formal rules rarely show all the ways influence is exercised, resisted or normalised.",
    sourceTradition:
      "Government and politics textbooks usually move from power and constitutions into institutions, representation, parties, ideology, public policy and rights.",
    stakes:
      "The gain is institutional literacy: slogans can be translated into rules, incentives, authority and consequences.",
    theoryMove:
      "The theoretical move is to ask how power is authorised, limited, distributed and justified.",
  },
  "rhetoric-argumentation": {
    complication:
      "Rhetoric becomes difficult because persuasive force can come from good evidence, emotional timing, audience identity, style, omission or social pressure.",
    evidenceProblem:
      "The evidence problem is argumentative: claims need warrants, support, context and counterargument, while rhetorical appeals must be judged by audience and purpose.",
    sourceTradition:
      "Rhetoric and writing textbooks usually combine classical appeals, arrangement, evidence, genre, style, audience analysis and fallacy detection.",
    stakes:
      "The gain is persuasion literacy: adverts, speeches, workplace decks and online arguments become inspectable rather than merely convincing or annoying.",
    theoryMove:
      "The theoretical move is to separate how a claim persuades from whether its reasons actually justify belief or action.",
  },
  science: {
    complication:
      "Scientific concepts become stronger when measurement, model assumptions, causal mechanisms, uncertainty and replication are treated together.",
    evidenceProblem:
      "The evidence problem is robustness: a result may be statistically visible, practically small, dependent on method or unstable under replication.",
    sourceTradition:
      "Science textbooks usually connect observation, hypothesis, experiment, model, theory, peer review and revision rather than presenting facts as isolated conclusions.",
    stakes:
      "The gain is reliable doubt: claims can be tested without reducing science to either certainty or mere opinion.",
    theoryMove:
      "The theoretical move is to connect a claim to the observation or experiment that could support it, weaken it or force revision.",
  },
  "social-engineering": {
    complication:
      "Social-engineering analysis is complex because the same influence mechanism can appear in ordinary persuasion, manipulative design and criminal deception.",
    evidenceProblem:
      "The evidence problem is intent and effect: pressure, consent, transparency and verification determine whether influence remains ethical.",
    sourceTradition:
      "Consumer behaviour, security-awareness and ethics references frame the subject through attention, trust, authority, reciprocity, urgency, interface design and autonomy.",
    stakes:
      "The gain is defensive literacy: recognising manipulation makes ethical persuasion more precise and coercive persuasion easier to resist.",
    theoryMove:
      "The theoretical move is to separate the cue that triggers compliance from the truth of the claim being made.",
  },
  sociology: {
    complication:
      "Sociological explanation becomes powerful when personal experience, social structure, institutions, inequality and culture are kept in the same frame.",
    evidenceProblem:
      "The evidence problem is scale: anecdote, survey data, institutional records and historical comparison reveal different parts of social life.",
    sourceTradition:
      "Sociology textbooks usually move from social structure and research methods into culture, socialisation, inequality, institutions, deviance and social change.",
    stakes:
      "The gain is structural imagination: private experiences can be connected to public patterns without erasing agency.",
    theoryMove:
      "The theoretical move is to ask how patterned conditions make some actions more likely, rewarded or visible than others.",
  },
  "systems-thinking": {
    complication:
      "Systems thinking becomes difficult because the visible event is often produced by hidden accumulations, feedback loops, delays and incentives elsewhere in the system.",
    evidenceProblem:
      "The evidence problem is dynamic: a snapshot rarely explains behaviour over time, so stocks, flows, rates, delays and feedback signs have to be traced.",
    sourceTradition:
      "Systems-thinking sources usually begin with feedback loops, stocks, flows, boundaries, leverage points and unintended consequences in ecological, organisational and everyday systems.",
    stakes:
      "The gain is intervention discipline: quick fixes can be judged by how they alter the system rather than by how satisfying they feel immediately.",
    theoryMove:
      "The theoretical move is to shift from linear cause to interacting structure, asking what pattern the system is set up to reproduce.",
  },
};

const articleFrames: Record<LearningTopicId, ArticleFrame> = {
  anthropology: {
    advancedProblem:
      "The university-level problem is to avoid two opposite errors: treating culture as a prison that determines everything, and treating culture as a thin surface over supposedly universal behaviour.",
    caseWorld:
      "Use a fieldwork case: a household rule, a funeral practice, a market exchange, a healing ritual or a naming custom. Ask what participants say it does before asking what an outsider might infer.",
    disciplinaryQuestion:
      "Anthropology asks how human practices become meaningful inside shared worlds of kinship, economy, ritual, language and material life.",
    evidenceStandard:
      "Good anthropological evidence is comparative and contextual: observation, interviews, material traces, historical setting and the emic account have to be held together.",
    limits:
      "The limit is ethnocentrism in one direction and lazy relativism in the other. Understanding a practice in context does not automatically settle the ethical judgement of that practice.",
    sourceMode:
      "Open anthropology textbooks normally introduce concepts through ethnographic cases, then use those cases to unsettle assumptions about what is natural, rational or modern.",
    studyPractice:
      "Write a fieldnote-style paragraph: describe the practice, name the concept, give the insider meaning, then add one cautious outsider interpretation.",
  },
  "art-history": {
    advancedProblem:
      "The university-level problem is to make visual evidence argumentative without reducing the artwork to a caption about politics, biography or style.",
    caseWorld:
      "Use a work of art as the case: a painting, sculpture, building, photograph, installation or designed object. Begin with what is visible before moving to patronage, iconography and reception.",
    disciplinaryQuestion:
      "Art history asks how objects make meaning through form, material, technique, display, patronage and historical context.",
    evidenceStandard:
      "The evidence standard is visual precision. Claims should be anchored in composition, medium, scale, iconographic detail, site, audience and documented historical conditions.",
    limits:
      "The limit is over-reading. A sophisticated interpretation can still be weak if it ignores the object itself or treats every visible feature as a secret symbol.",
    sourceMode:
      "Art history textbooks tend to move from formal description to contextual interpretation: what the object looks like, how it was made, where it circulated and why that mattered.",
    studyPractice:
      "Write a visual analysis paragraph: describe three visible details, then explain how they support one historical interpretation.",
  },
  "artificial-intelligence": {
    advancedProblem:
      "The university-level problem is to separate task performance from understanding, and to distinguish optimisation against a metric from reliable behaviour in the world.",
    caseWorld:
      "Use an AI system as the case: a classifier, search engine, recommendation model, chatbot, forecasting tool or agent. Identify inputs, outputs, objective and failure modes.",
    disciplinaryQuestion:
      "Artificial intelligence asks how machines can represent problems, learn from data, search through possibilities and act under uncertainty.",
    evidenceStandard:
      "The evidence standard is empirical and formal: define the task, specify the data distribution, measure performance, inspect errors and ask whether the model generalises.",
    limits:
      "The limit is anthropomorphism. A fluent or accurate system may still be brittle, biased, mis-specified or aligned with the wrong objective.",
    sourceMode:
      "AI textbooks usually introduce concepts by formalising a problem, naming the representation, and then studying the algorithmic trade-offs that follow.",
    studyPractice:
      "Write a model card fragment: task, data, objective, intended use, likely failure case and one evaluation you would trust.",
  },
  "architecture-urbanism": {
    advancedProblem:
      "The advanced problem is to read space as both design and social instruction: a building can be beautiful, profitable, exclusionary and efficient at the same time.",
    caseWorld:
      "Use an everyday place: a station entrance, shopping street, housing estate, office lobby, bench, crossing, cafe frontage, school corridor or public square.",
    disciplinaryQuestion:
      "Architecture and urbanism ask how built form organises movement, visibility, belonging, comfort, ownership and public life.",
    evidenceStandard:
      "Good evidence includes spatial layout, material, threshold, route, sightline, regulation, user behaviour, maintenance and who is included or excluded.",
    limits:
      "The limit is treating design as either pure aesthetics or pure social control; most places combine beauty, function, cost and power.",
    sourceMode:
      "Architecture and urbanism sources move from form and material into circulation, urban morphology, public space and social use.",
    studyPractice:
      "Choose one everyday space and describe its path, boundary, invitation, obstruction and likely social effect.",
  },
  business: {
    advancedProblem:
      "The university-level problem is to connect strategic language to an operating model: resources, incentives, customer behaviour, cash timing and execution capacity.",
    caseWorld:
      "Use a firm as the case: a local service business, SaaS company, retailer, marketplace, consultancy or manufacturer. Ask where value is created and where it leaks away.",
    disciplinaryQuestion:
      "Business studies how organisations coordinate people, capital and operations to create, deliver and capture value.",
    evidenceStandard:
      "Good business evidence joins qualitative insight to numbers: customer behaviour, unit economics, process constraints, competitive position and cash flow all matter.",
    limits:
      "The limit is slogan strategy. A phrase like innovation, culture or growth is not analysis until it explains a decision and its opportunity cost.",
    sourceMode:
      "Management textbooks tend to move from definitions to organisational cases, showing how apparently abstract ideas become choices about structure, leadership and control.",
    studyPractice:
      "Write a one-page business diagnosis: customer, value promise, revenue logic, cost driver, bottleneck and one decision that would improve the system.",
  },
  economics: {
    advancedProblem:
      "The university-level problem is to reason at the margin while also noticing institutions, distribution and feedback effects that the simplest model leaves outside the diagram.",
    caseWorld:
      "Use a market or policy as the case: rent, transport, labour, subscriptions, taxes, energy, education or healthcare. Identify incentives before judging outcomes.",
    disciplinaryQuestion:
      "Economics asks how scarce resources are allocated when people, firms and governments respond to constraints and incentives.",
    evidenceStandard:
      "Good economic evidence specifies the mechanism, the counterfactual and the margin of adjustment. Prices, quantities and welfare effects should not be blurred together.",
    limits:
      "The limit is model worship. A model is useful because it simplifies; it becomes dangerous when the simplification is forgotten.",
    sourceMode:
      "Economics textbooks normally introduce a model, state its assumptions, show the predicted comparative statics and then test where the model clarifies or fails.",
    studyPractice:
      "Write a short economic analysis: decision-maker, constraint, incentive, likely response, external effect and one missing variable.",
  },
  "classical-civilisation": {
    advancedProblem:
      "The advanced problem is to recognise classical inheritance without turning Greece and Rome into timeless ideals or simple origins for modern life.",
    caseWorld:
      "Use an everyday classical trace: a courthouse column, Olympic language, republican symbolism, a heroic brand name, a political speech or a myth retold in film.",
    disciplinaryQuestion:
      "Classical civilisation asks how Greek and Roman myths, institutions, arts, wars and public ideals shaped ancient life and later cultural memory.",
    evidenceStandard:
      "Good evidence distinguishes primary ancient material, archaeological context, later reception and modern appropriation.",
    limits:
      "The limit is nostalgia. Classical material should not be treated as a single golden age or as automatic authority.",
    sourceMode:
      "Classical sources combine ancient texts, material culture, art history, political institutions and later reception.",
    studyPractice:
      "Identify one classical reference in modern life and separate the ancient source from the modern use.",
  },
  geopolitics: {
    advancedProblem:
      "The advanced problem is to avoid map determinism while still taking geography, resources and strategic position seriously.",
    caseWorld:
      "Use a news case: energy prices, shipping disruption, sanctions, border conflict, military basing, migration pressure or supply-chain vulnerability.",
    disciplinaryQuestion:
      "Geopolitics asks how geography, resources, technology, institutions and power shape state behaviour and regional order.",
    evidenceStandard:
      "Good evidence joins map position to trade flows, military reach, alliances, institutions, demographics and historical grievances.",
    limits:
      "The limit is explaining politics from geography alone. Leaders, institutions, ideas and mistakes still matter.",
    sourceMode:
      "Political science and world-history sources connect states, international systems, conflict, economics and historical development.",
    studyPractice:
      "Pick one headline and identify the map factor, economic factor, security factor and institution involved.",
  },
  "history-of-ideas": {
    advancedProblem:
      "The advanced problem is to see ideas as historical forces without pretending that texts alone explain social change.",
    caseWorld:
      "Use an everyday idea: productivity, freedom, progress, civilisation, nature, authenticity, merit or the self.",
    disciplinaryQuestion:
      "History of ideas asks how concepts emerge, travel, change meaning and become embedded in institutions and ordinary judgement.",
    evidenceStandard:
      "Good evidence traces vocabulary, texts, institutions, technologies, social conflict and the practical settings where an idea becomes plausible.",
    limits:
      "The limit is treating ideas as timeless definitions rather than contested historical tools.",
    sourceMode:
      "History-of-ideas work moves between philosophy, political theory, intellectual history and social context.",
    studyPractice:
      "Choose one familiar word and ask what period, institution or social problem gave it its current force.",
  },
  "linguistics-etymology": {
    advancedProblem:
      "The university-level problem is to stop treating language as a list of correct forms and instead analyse it as a rule-governed, historically changing social system.",
    caseWorld:
      "Use a word, sentence, accent feature, borrowed term or conversational exchange as the case. Ask what level of language is doing the work: sound, form, syntax, meaning or use.",
    disciplinaryQuestion:
      "Linguistics asks how language is structured, acquired, processed, varied and changed; etymology adds historical depth to the life of words.",
    evidenceStandard:
      "Good linguistic evidence distinguishes examples, intuitions, corpora, historical attestations and social context. A plausible origin story is not enough.",
    limits:
      "The limit is folk etymology and prescriptivism. Not every similarity is ancestry, and not every non-standard form is linguistic failure.",
    sourceMode:
      "Linguistics textbooks usually break language into analytic levels, then show how those levels interact in real speech and writing.",
    studyPractice:
      "Write a linguistic note: identify the form, classify the level of analysis, give two examples and state what evidence would confirm the explanation.",
  },
  literature: {
    advancedProblem:
      "The university-level problem is to make interpretation accountable to form: voice, structure, genre, rhythm and imagery must carry the argument, not decorate it.",
    caseWorld:
      "Use a passage from a poem, novel, play or essay as the case. Choose a small textual unit and read it slowly before making a claim about the whole work.",
    disciplinaryQuestion:
      "Literary study asks how language and form produce meaning, feeling, ambiguity, memory and critique.",
    evidenceStandard:
      "Good literary evidence is textual. It quotes or paraphrases precisely, notices pattern and deviation, and relates form to historical or theoretical context.",
    limits:
      "The limit is summary disguised as analysis. Retelling what happens is not the same as explaining how the text makes meaning.",
    sourceMode:
      "Literature textbooks usually teach close reading first, then build toward context, genre, theory and interpretive debate.",
    studyPractice:
      "Write a close-reading paragraph: claim, textual detail, formal feature, interpretation and one alternative reading you can rule out.",
  },
  marketing: {
    advancedProblem:
      "The university-level problem is to connect psychological insight, market structure and commercial execution without reducing marketing to promotion.",
    caseWorld:
      "Use an offer, category, brand, landing page, campaign or product launch as the case. Ask what behaviour the marketer is trying to change.",
    disciplinaryQuestion:
      "Marketing asks how value is understood by customers, differentiated from alternatives and exchanged through products, price, place and communication.",
    evidenceStandard:
      "Good marketing evidence combines customer research, segmentation logic, behavioural data and market outcomes. A clever message is not enough.",
    limits:
      "The limit is manipulation without value. Marketing becomes weak or unethical when persuasion outruns the product, the evidence or the customer's interest.",
    sourceMode:
      "Marketing textbooks tend to move from customer need to segmentation, targeting, positioning and the marketing mix, then test those choices against behaviour.",
    studyPractice:
      "Write a market note: segment, unmet need, competing alternative, positioning claim, proof point and one metric that would show behaviour changed.",
  },
  "military-strategy": {
    advancedProblem:
      "The advanced problem is to connect force to political purpose while accounting for friction, uncertainty, morale, logistics and enemy adaptation.",
    caseWorld:
      "Use a conflict case or strategic analogy: a campaign, siege, deterrence problem, organisational rivalry, security dilemma or failed plan.",
    disciplinaryQuestion:
      "Military strategy asks how organised force is used to achieve political aims under danger, uncertainty and resistance.",
    evidenceStandard:
      "Good evidence distinguishes objective, means, terrain, logistics, intelligence, morale, enemy will and political constraint.",
    limits:
      "The limit is romanticising battle or reducing strategy to clever tactics. Strategy is judged by political outcome, not drama.",
    sourceMode:
      "Strategy sources move between primary theory, historical campaigns and political science accounts of war and state behaviour.",
    studyPractice:
      "Analyse one plan by naming the objective, constraint, opponent, supply problem and likely friction.",
  },
  "music-theory": {
    advancedProblem:
      "The university-level problem is to connect abstract musical structure to embodied guitar playing without reducing theory to memorised box shapes or treating the fretboard as disconnected patterns.",
    caseWorld:
      "Use a guitar case: a chord progression, riff, melodic line, comping pattern, barre chord, triad shape, scale position or cadence that has to be heard and located on the fretboard.",
    disciplinaryQuestion:
      "Music theory asks how pitch, rhythm, harmony, melody, texture and form create musical meaning over time, and guitar theory adds the question of how those structures become playable shapes, positions and sounds.",
    evidenceStandard:
      "Good evidence comes from the sound, the notation or chord symbol, the interval structure, the fretboard location and the musical function inside the phrase.",
    limits:
      "The limit is shape without understanding. A guitarist can move a pattern accurately while missing what the notes are doing harmonically, rhythmically or melodically.",
    sourceMode:
      "Open music theory textbooks supply the conceptual grammar, while fretboard-harmony material translates that grammar into positions, voicings and tactile performance knowledge.",
    studyPractice:
      "Take one chord, scale or phrase and describe it three ways: by sound, by interval structure and by fretboard shape.",
  },
  "pharmaceutical-businesses": {
    advancedProblem:
      "The university-level problem is to hold science, regulation, payer evidence, ethics and commercial strategy in one frame rather than treating approval as the whole business.",
    caseWorld:
      "Use a medicine, therapeutic area, trial readout, launch plan or market-access decision as the case. Track the patient, clinician, payer, regulator and company separately.",
    disciplinaryQuestion:
      "Pharmaceutical business asks how medicines move from biological hypothesis to evidence package, approval, reimbursement, clinician adoption and patient access.",
    evidenceStandard:
      "Good pharma evidence distinguishes biological plausibility, clinical endpoints, safety signals, comparative effectiveness, regulatory standards and payer value.",
    limits:
      "The limit is commercial simplification. A medicine can be scientifically impressive and still fail commercially, ethically or operationally.",
    sourceMode:
      "Drug-development and market-access material usually works stage by stage: discovery, preclinical evidence, clinical phases, regulatory submission, launch and post-market monitoring.",
    studyPractice:
      "Write an asset memo: mechanism, development stage, main evidence risk, regulator question, payer question and commercial implication.",
  },
  psychology: {
    advancedProblem:
      "The advanced problem is to explain behaviour without reducing it to one cause: mind, body, habit, social context and interpretation interact.",
    caseWorld:
      "Use an everyday behaviour: procrastination, checking a phone, remembering a face, stress eating, arguing, practising, learning or avoiding a task.",
    disciplinaryQuestion:
      "Psychology asks how behaviour and mental processes arise from perception, learning, memory, emotion, motivation, development and social context.",
    evidenceStandard:
      "Good evidence distinguishes experiment, observation, self-report, physiological signal, effect size and alternative explanation.",
    limits:
      "The limit is armchair diagnosis. A psychological concept should explain a mechanism without pretending to know a person's whole mind.",
    sourceMode:
      "Psychology textbooks move from biological and cognitive mechanisms into learning, development, stress, personality and social behaviour.",
    studyPractice:
      "Choose one everyday behaviour and separate trigger, interpretation, learned response, social context and consequence.",
  },
  philosophy: {
    advancedProblem:
      "The university-level problem is to reconstruct arguments charitably while still pressing them hard enough to reveal hidden premises, counterexamples and conceptual costs.",
    caseWorld:
      "Use an argument, moral dilemma, thought experiment or ordinary claim as the case. Identify the conclusion before judging whether it is persuasive.",
    disciplinaryQuestion:
      "Philosophy asks what follows from our concepts, what justifies belief, what we owe one another and what kind of life or society is worth choosing.",
    evidenceStandard:
      "Good philosophical evidence is argumentative: definitions, distinctions, valid inference, counterexample, explanatory power and coherence with other commitments.",
    limits:
      "The limit is cleverness without discipline. A striking objection is not enough unless it actually targets a premise or inference.",
    sourceMode:
      "Philosophy textbooks usually teach the structure of an argument before introducing schools of thought, so students can evaluate rather than merely recite positions.",
    studyPractice:
      "Write an argument map: conclusion, premises, key definition, strongest objection and the reply a serious defender would make.",
  },
  politics: {
    advancedProblem:
      "The university-level problem is to connect normative ideals with institutions, incentives and enforcement. A political value means little until it meets a rule-making system.",
    caseWorld:
      "Use an election, law, protest, court decision, party strategy or policy dispute as the case. Ask who has authority and how accountability works.",
    disciplinaryQuestion:
      "Politics asks how power is organised, justified, contested and converted into collective decisions.",
    evidenceStandard:
      "Good political evidence combines institutions, interests, ideas and outcomes. It should distinguish rhetoric from mechanism.",
    limits:
      "The limit is tribal explanation. Saying one side is good or bad rarely explains how power actually moves through a system.",
    sourceMode:
      "Government and politics textbooks usually introduce institutions and ideologies together, showing how principles become procedures, rights, budgets and constraints.",
    studyPractice:
      "Write a political analysis: actor, institution, authority, incentive, legitimacy claim, affected group and likely unintended consequence.",
  },
  "rhetoric-argumentation": {
    advancedProblem:
      "The advanced problem is to distinguish persuasion that clarifies from persuasion that bypasses judgement through style, identity or pressure.",
    caseWorld:
      "Use an everyday argument: an advert, headline, speech, meeting pitch, online thread, apology, review or campaign message.",
    disciplinaryQuestion:
      "Rhetoric and argumentation ask how claims are made persuasive through audience, evidence, credibility, emotion, arrangement and style.",
    evidenceStandard:
      "Good evidence identifies claim, warrant, support, audience, appeal, counterargument, framing and missing alternatives.",
    limits:
      "The limit is cynicism. Rhetoric is not automatically manipulation; it is the study of how persuasion works.",
    sourceMode:
      "Rhetoric sources combine classical appeals with modern writing, argument structure, genre and audience analysis.",
    studyPractice:
      "Take one persuasive message and name the claim, audience, appeal, evidence and likely omission.",
  },
  science: {
    advancedProblem:
      "The university-level problem is to distinguish a result, a method, a model and an explanation. Scientific literacy depends on knowing which one a claim actually provides.",
    caseWorld:
      "Use a study, health claim, experiment, model, graph or technology claim as the case. Ask what was measured and what was merely inferred.",
    disciplinaryQuestion:
      "Science asks how reliable knowledge can be built from observation, measurement, experiment, theory and revision.",
    evidenceStandard:
      "Good scientific evidence specifies controls, measurement, uncertainty, causal design, replication and the scope of the conclusion.",
    limits:
      "The limit is both scientism and vague scepticism. A scientific claim is not automatically final, but neither is doubt a substitute for better evidence.",
    sourceMode:
      "Science textbooks usually move from observation to mechanism, then to experimental design and limits of inference.",
    studyPractice:
      "Write a study appraisal: claim, method, variable, control, result, uncertainty and one conclusion the evidence does not justify.",
  },
  "social-engineering": {
    advancedProblem:
      "The university-level problem is to study influence without turning it into a manual for exploitation. The goal is recognition, defence and ethical persuasion.",
    caseWorld:
      "Use a scam message, sales script, interface flow, office request, rumour or negotiation as the case. Identify the pressure, identity claim and requested action.",
    disciplinaryQuestion:
      "Social engineering asks how trust, authority, urgency, reciprocity, attention and social context can be used to steer behaviour.",
    evidenceStandard:
      "Good evidence separates the psychological lever from the delivery channel. A phishing email, dark pattern and manipulative conversation may use the same underlying mechanism.",
    limits:
      "The limit is ethics and consent. Understanding manipulation does not justify deception, coercion or extracting information from people who have not agreed to that game.",
    sourceMode:
      "Human-factors and consumer-behaviour material typically treats influence as a predictable pattern of attention, motivation, friction and trust.",
    studyPractice:
      "Write a defensive analysis: claimed identity, emotional lever, requested action, missing verification, likely target and ethical alternative.",
  },
  sociology: {
    advancedProblem:
      "The university-level problem is to connect individual experience to patterned social structure without erasing agency or pretending anecdotes are proof.",
    caseWorld:
      "Use a school, workplace, family, online community, class pattern, status game or institution as the case. Ask what is patterned across people.",
    disciplinaryQuestion:
      "Sociology asks how norms, institutions, inequality, roles and identities shape social life.",
    evidenceStandard:
      "Good sociological evidence links biography to structure through data, comparison, historical context and theory.",
    limits:
      "The limit is reduction. Not every personal decision is only social structure, but few decisions are made outside social conditions.",
    sourceMode:
      "Sociology textbooks often introduce the sociological imagination: private troubles become public questions when they show patterned causes.",
    studyPractice:
      "Write a sociological explanation: individual case, social pattern, institution, norm, inequality or role, and one piece of evidence beyond anecdote.",
  },
  "systems-thinking": {
    advancedProblem:
      "The advanced problem is to move from blaming single events to seeing the structure that keeps reproducing the pattern.",
    caseWorld:
      "Use an everyday system: sleep routine, money flow, traffic, inbox overload, fitness habits, workplace delays, family chores or app notifications.",
    disciplinaryQuestion:
      "Systems thinking asks how interacting parts, feedback loops, stocks, flows, delays and boundaries produce behaviour over time.",
    evidenceStandard:
      "Good evidence identifies variables, relationships, rates of change, feedback direction, delay and the boundary of the system being described.",
    limits:
      "The limit is making everything too big to act on. A useful system map still points to a leverage point.",
    sourceMode:
      "Systems-thinking sources usually begin with causal loops, stocks, flows, delays, boundaries and unintended consequences.",
    studyPractice:
      "Map one recurring problem as a loop: stock, inflow, outflow, feedback, delay and possible leverage point.",
  },
};

export const LEARNING_TOPICS: LearningTopic[] = Object.values(topicProfiles).map(
  (profile) => profile.topic,
);

const topicIds = new Set<string>(LEARNING_TOPICS.map((topic) => topic.id));

export const LEARNING_DIMENSION_LABELS: Record<LearningDimension, string> = {
  breadth: "Breadth",
  consistency: "Consistency",
  depth: "Depth",
  reasoning: "Reasoning",
  retention: "Retention",
};

export const LEARNING_CONCEPT_LEVEL_LABELS: Record<LearningConceptLevel, string> = {
  "A-level": "A-level",
  GCSE: "GCSE",
  University: "University",
};

export type LearningPath = {
  description: string;
  id: string;
  lessons: string[];
  title: string;
  topics: LearningTopicId[];
};

export type LearningConceptMapLink = {
  description: string;
  from: LearningTopicId;
  id: string;
  title: string;
  to: LearningTopicId;
};

export const LEARNING_PATHS: LearningPath[] = [
  {
    description:
      "Power, persuasion, institutions and social order from everyday arguments to state decisions.",
    id: "power-and-society",
    lessons: [
      "politics-power",
      "rhetoric-argumentation-ethos",
      "sociology-status",
      "geopolitics-soft-power",
      "military-strategy-deterrence",
    ],
    title: "Power and Society",
    topics: [
      "politics",
      "rhetoric-argumentation",
      "sociology",
      "geopolitics",
      "military-strategy",
    ],
  },
  {
    description:
      "Customer behaviour, value, incentives and organisational judgement without reducing business to slogans.",
    id: "business-judgement",
    lessons: [
      "business-value-proposition",
      "marketing-positioning",
      "economics-opportunity-cost",
      "psychology-motivation",
      "systems-thinking-leverage-point",
    ],
    title: "Business Judgement",
    topics: ["business", "marketing", "economics", "psychology", "systems-thinking"],
  },
  {
    description:
      "A calmer route through attention, habit, stress, influence and decision-making.",
    id: "everyday-psychology",
    lessons: [
      "psychology-attention",
      "psychology-working-memory",
      "psychology-stress-response",
      "social-engineering-authority",
      "systems-thinking-feedback-loop",
    ],
    title: "Everyday Psychology",
    topics: ["psychology", "social-engineering", "systems-thinking"],
  },
  {
    description:
      "Classical inheritance, rhetoric, tragedy, architecture and ideas still visible in modern life.",
    id: "classical-modern-world",
    lessons: [
      "classical-civilisation-republicanism",
      "classical-civilisation-tragedy-and-catharsis",
      "rhetoric-argumentation-logos",
      "architecture-urbanism-public-realm",
      "history-of-ideas-liberty",
    ],
    title: "Classical Ideas in Modern Life",
    topics: [
      "classical-civilisation",
      "rhetoric-argumentation",
      "architecture-urbanism",
      "history-of-ideas",
    ],
  },
  {
    description:
      "A guitarist's path from fretboard geography to harmony, voice leading and phrase design.",
    id: "guitar-theory-foundations",
    lessons: [
      "music-theory-fretboard-geography",
      "music-theory-intervals-on-guitar",
      "music-theory-triads-across-string-sets",
      "music-theory-functional-harmony",
      "music-theory-voice-leading",
    ],
    title: "Guitar Theory Foundations",
    topics: ["music-theory"],
  },
];

export const LEARNING_CONCEPT_MAP: LearningConceptMapLink[] = [
  {
    description:
      "Persuasive appeals become more powerful when they meet attention, identity and social pressure.",
    from: "rhetoric-argumentation",
    id: "rhetoric-psychology",
    title: "Persuasion and Attention",
    to: "psychology",
  },
  {
    description:
      "Marketing turns psychological and rhetorical mechanisms into offers, categories and behaviour change.",
    from: "psychology",
    id: "psychology-marketing",
    title: "Behaviour to Market",
    to: "marketing",
  },
  {
    description:
      "Urban form, social norms and institutions shape who feels invited, watched or excluded.",
    from: "architecture-urbanism",
    id: "urbanism-sociology",
    title: "Space and Society",
    to: "sociology",
  },
  {
    description:
      "Systems thinking makes economics more dynamic by adding feedback, delay and unintended consequences.",
    from: "economics",
    id: "economics-systems",
    title: "Markets as Systems",
    to: "systems-thinking",
  },
  {
    description:
      "Classical political vocabulary reappears in modern arguments about liberty, virtue and republics.",
    from: "classical-civilisation",
    id: "classics-ideas",
    title: "Ancient Terms, Modern Arguments",
    to: "history-of-ideas",
  },
  {
    description:
      "Geopolitical constraints become military problems when power, logistics and deterrence meet resistance.",
    from: "geopolitics",
    id: "geopolitics-strategy",
    title: "Map to Strategy",
    to: "military-strategy",
  },
];

const topicLessonSeeds: Record<LearningTopicId, LessonSeed[]> = {
  anthropology: [
    { concept: "Culture", focus: "shared meanings, learned practices and symbolic systems", level: "GCSE", practice: "explaining why a habit feels natural inside one group but strange to another" },
    { concept: "Ethnography", focus: "long-form fieldwork that studies life from inside a community", level: "A-level", practice: "reading a setting before judging it from outside categories" },
    { concept: "Participant Observation", focus: "learning by watching, asking and taking part responsibly", level: "A-level", practice: "balancing closeness with analytical distance" },
    { concept: "Kinship", focus: "how societies organise family, descent, care and obligation", level: "GCSE", practice: "not assuming one household model explains every society" },
    { concept: "Ritual", focus: "repeated symbolic action that marks status, belief and transition", level: "A-level", practice: "seeing ceremonies as social technology rather than empty tradition" },
    { concept: "Cultural Relativism", focus: "understanding practices within context before evaluating them", level: "University", practice: "holding empathy and ethical judgement in tension" },
    { concept: "Material Culture", focus: "objects as evidence of work, identity, exchange and value", level: "GCSE", practice: "reading tools, clothes and homes as social evidence" },
    { concept: "Liminality", focus: "threshold states where ordinary roles are suspended or remade", level: "University", practice: "spotting transitions in education, status and identity" },
    { concept: "Gift Exchange", focus: "reciprocity, obligation and status beyond simple market trade", level: "University", practice: "understanding why gifts can create power" },
    { concept: "Emic and Etic", focus: "insider and outsider explanations of the same behaviour", level: "A-level", practice: "separating what participants say from what analysts infer" },
  ],
  "art-history": [
    { concept: "Formal Analysis", focus: "line, colour, composition, scale and texture as visual evidence", level: "GCSE", practice: "describing what is visible before interpreting meaning" },
    { concept: "Iconography", focus: "symbols, attributes and motifs that carry shared meaning", level: "A-level", practice: "reading images through signs rather than vibes" },
    { concept: "Patronage", focus: "the role of funders, institutions and commissions in shaping art", level: "A-level", practice: "asking who paid for the work and what they wanted" },
    { concept: "Perspective", focus: "techniques for representing depth and viewpoint", level: "GCSE", practice: "connecting visual space to power and realism" },
    { concept: "The Renaissance", focus: "humanism, classical revival and changing artist status", level: "A-level", practice: "linking style to intellectual and social change" },
    { concept: "Modernism", focus: "experimentation after industrialisation, photography and social rupture", level: "University", practice: "reading abstraction as argument rather than failure to depict" },
    { concept: "Provenance", focus: "ownership history, authenticity, collecting and restitution", level: "University", practice: "checking the social life of an artwork after creation" },
    { concept: "Medium Specificity", focus: "how material and technique shape meaning", level: "A-level", practice: "asking what paint, stone, film or pixels make possible" },
    { concept: "Museums and Power", focus: "display, classification and authority in public collections", level: "University", practice: "reading exhibitions as arguments" },
    { concept: "Portraiture", focus: "likeness, status, identity and performance in images of people", level: "GCSE", practice: "seeing portraits as constructed claims" },
  ],
  "artificial-intelligence": [
    { concept: "Search", focus: "exploring possible states to reach a goal", level: "GCSE", practice: "breaking a problem into states, actions and costs" },
    { concept: "Machine Learning", focus: "systems improving performance from data rather than explicit rules alone", level: "A-level", practice: "distinguishing training from deployment" },
    { concept: "Classification", focus: "assigning inputs to categories using learned patterns", level: "GCSE", practice: "asking what labels and errors define the task" },
    { concept: "Neural Networks", focus: "layered models that transform inputs into predictions", level: "A-level", practice: "judging them as statistical systems, not magic brains" },
    { concept: "Overfitting", focus: "performing well on training data but poorly on new cases", level: "A-level", practice: "checking whether a model generalises" },
    { concept: "Embeddings", focus: "representing meaning as positions in a learned vector space", level: "University", practice: "understanding semantic search and recommendation systems" },
    { concept: "Reinforcement Learning", focus: "learning action policies from rewards and environments", level: "University", practice: "separating reward design from desired behaviour" },
    { concept: "Prompting", focus: "shaping model behaviour through task framing and context", level: "GCSE", practice: "writing instructions that expose assumptions and constraints" },
    { concept: "Alignment", focus: "making model behaviour match human goals and norms", level: "University", practice: "asking whose goals, whose risks and what evidence counts" },
    { concept: "Evaluation", focus: "measuring whether AI output is useful, accurate and robust", level: "A-level", practice: "testing beyond impressive examples" },
  ],
  business: [
    { concept: "Value Proposition", focus: "the promise of useful value to a specific customer", level: "GCSE", practice: "stating why anyone should care in one testable sentence" },
    { concept: "Business Model", focus: "how an organisation creates, delivers and captures value", level: "A-level", practice: "linking customer value to revenue and cost structure" },
    { concept: "Competitive Advantage", focus: "why a firm can outperform rivals over time", level: "A-level", practice: "separating temporary wins from durable advantages" },
    { concept: "Unit Economics", focus: "profitability at the level of one customer, order or product", level: "University", practice: "checking whether growth improves or worsens the model" },
    { concept: "Operations", focus: "the repeatable system that turns inputs into outputs", level: "GCSE", practice: "finding bottlenecks, handoffs and failure points" },
    { concept: "Strategy", focus: "choosing where to compete and what not to do", level: "A-level", practice: "turning ambition into trade-offs" },
    { concept: "Organisational Culture", focus: "shared norms that shape behaviour when nobody is watching", level: "A-level", practice: "reading incentives from repeated behaviour" },
    { concept: "Cash Flow", focus: "timing and movement of cash through the organisation", level: "GCSE", practice: "seeing why profit and survival are not the same" },
    { concept: "Network Effects", focus: "value increasing as more users join", level: "University", practice: "distinguishing real networks from ordinary scale" },
    { concept: "Principal-Agent Problem", focus: "misaligned incentives between owners, managers and workers", level: "University", practice: "spotting when metrics invite gaming" },
  ],
  economics: [
    { concept: "Scarcity", focus: "limited resources forcing choice and prioritisation", level: "GCSE", practice: "asking what is being given up" },
    { concept: "Opportunity Cost", focus: "the best alternative sacrificed by a decision", level: "GCSE", practice: "comparing choices against the next best use of time or money" },
    { concept: "Supply and Demand", focus: "price formation through buyers, sellers and quantity", level: "GCSE", practice: "predicting pressure on prices and quantities" },
    { concept: "Marginal Analysis", focus: "deciding by comparing one more unit of benefit and cost", level: "A-level", practice: "avoiding all-or-nothing thinking" },
    { concept: "Externalities", focus: "costs or benefits falling on people outside a transaction", level: "A-level", practice: "looking beyond private incentives" },
    { concept: "Elasticity", focus: "how strongly quantity responds to price or income changes", level: "A-level", practice: "judging whether a tax or discount will move behaviour" },
    { concept: "Comparative Advantage", focus: "gains from specialisation even when one side is better at everything", level: "University", practice: "thinking in relative opportunity costs" },
    { concept: "Game Theory", focus: "strategic choices when outcomes depend on others", level: "University", practice: "mapping incentives before predicting behaviour" },
    { concept: "Public Goods", focus: "non-excludable and non-rival goods that markets underprovide", level: "A-level", practice: "understanding free-rider problems" },
    { concept: "Inflation", focus: "a sustained rise in the general price level", level: "GCSE", practice: "separating price shocks from broad purchasing-power change" },
  ],
  "linguistics-etymology": [
    { concept: "Morphemes", focus: "the smallest meaningful units in words", level: "GCSE", practice: "breaking words into roots, prefixes and suffixes" },
    { concept: "Phonemes", focus: "contrastive sound units that change meaning", level: "GCSE", practice: "hearing language as a system rather than a stream" },
    { concept: "Syntax", focus: "rules and patterns for combining words into sentences", level: "A-level", practice: "diagnosing why a sentence means what it means" },
    { concept: "Semantics", focus: "literal meaning in words, phrases and sentences", level: "A-level", practice: "separating meaning from tone and implication" },
    { concept: "Pragmatics", focus: "meaning shaped by context, inference and social use", level: "University", practice: "spotting what is meant but not said" },
    { concept: "Semantic Shift", focus: "words changing meaning across time", level: "A-level", practice: "tracking how culture changes vocabulary" },
    { concept: "Cognates", focus: "words in different languages with a common ancestor", level: "GCSE", practice: "using word history without inventing false links" },
    { concept: "Loanwords", focus: "words borrowed across languages through contact", level: "GCSE", practice: "seeing trade, conquest and prestige inside vocabulary" },
    { concept: "Grammaticalisation", focus: "lexical words turning into grammatical markers", level: "University", practice: "understanding language change as gradual reuse" },
    { concept: "Register", focus: "language choices shaped by situation, audience and status", level: "A-level", practice: "adjusting communication without losing precision" },
  ],
  literature: [
    { concept: "Close Reading", focus: "slow attention to words, patterns, images and form", level: "GCSE", practice: "supporting interpretation with exact textual evidence" },
    { concept: "Narrative Voice", focus: "who speaks, what they know and how they shape the story", level: "GCSE", practice: "separating author, narrator and character" },
    { concept: "Symbolism", focus: "objects, images or actions carrying layered meaning", level: "GCSE", practice: "testing symbols against recurring textual evidence" },
    { concept: "Irony", focus: "gaps between appearance, intention, knowledge and outcome", level: "A-level", practice: "noticing when text means more than it says" },
    { concept: "Genre", focus: "shared conventions that guide expectations and meaning", level: "A-level", practice: "seeing how texts obey and break rules" },
    { concept: "Intertextuality", focus: "texts echoing, revising or answering other texts", level: "University", practice: "reading literature as a conversation across time" },
    { concept: "Tragedy", focus: "serious drama of conflict, error, fate, power and loss", level: "A-level", practice: "looking for pressure between character and structure" },
    { concept: "Modernist Fragmentation", focus: "broken form as a response to modern experience", level: "University", practice: "treating difficulty as meaningful design" },
    { concept: "Postcolonial Reading", focus: "literature shaped by empire, language and resistance", level: "University", practice: "asking whose voice is centred and whose is muted" },
    { concept: "Poetic Meter", focus: "rhythmic pattern as part of poetic meaning", level: "A-level", practice: "hearing form as argument, not decoration" },
  ],
  marketing: [
    { concept: "Segmentation", focus: "dividing a market into meaningfully different customer groups", level: "GCSE", practice: "avoiding one-message-fits-everyone thinking" },
    { concept: "Positioning", focus: "owning a clear place in the customer's mind", level: "A-level", practice: "choosing the comparison you want buyers to make" },
    { concept: "Customer Insight", focus: "a useful truth about motivation, friction or context", level: "A-level", practice: "turning observation into a testable marketing idea" },
    { concept: "Brand Equity", focus: "the value created by memory, trust and associations", level: "University", practice: "distinguishing logo recognition from durable brand value" },
    { concept: "Marketing Funnel", focus: "the path from awareness to action and repeat behaviour", level: "GCSE", practice: "finding where attention, trust or conversion breaks" },
    { concept: "Pricing Psychology", focus: "how framing and reference points affect willingness to pay", level: "A-level", practice: "seeing price as signal, not just number" },
    { concept: "Jobs to Be Done", focus: "the progress a customer is trying to make in context", level: "University", practice: "asking what the product is being hired to do" },
    { concept: "Social Proof", focus: "people using others' behaviour as evidence", level: "GCSE", practice: "spotting when popularity substitutes for evaluation" },
    { concept: "Retention", focus: "keeping customers through repeated value and reduced friction", level: "A-level", practice: "optimising beyond acquisition" },
    { concept: "Category Design", focus: "framing a new problem so a new solution makes sense", level: "University", practice: "creating context before pitching features" },
  ],
  "music-theory": [
    { concept: "Fretboard Geography", focus: "understanding pitch locations across strings, frets and repeated octaves", level: "GCSE", practice: "mapping notes by string, position and octave rather than memorising isolated dots" },
    { concept: "Intervals on Guitar", focus: "the distance between notes as movable fretboard relationships", level: "GCSE", practice: "hearing and locating thirds, fifths, sevenths and octaves inside shapes" },
    { concept: "Major Scale Construction", focus: "the whole-step and half-step pattern that organises major-key melody and harmony", level: "GCSE", practice: "building scale degrees across one string and across positions" },
    { concept: "Minor Keys", focus: "minor-key pitch collections and their natural, harmonic and melodic variants", level: "A-level", practice: "relating minor sounds to chord function and lead lines" },
    { concept: "Triads Across String Sets", focus: "three-note chord structures mapped through adjacent guitar strings", level: "A-level", practice: "seeing chords as movable interval stacks, not only grips" },
    { concept: "Seventh Chords", focus: "four-note sonorities that add harmonic colour and function", level: "A-level", practice: "connecting chord symbols to chord tones and shell voicings" },
    { concept: "Inversions and Voicings", focus: "reordering chord tones to control register, bass movement and texture", level: "University", practice: "choosing guitar voicings for function, voice-leading and playability" },
    { concept: "Functional Harmony", focus: "tonic, predominant and dominant roles inside tonal progressions", level: "A-level", practice: "hearing why chords move rather than treating progressions as lists" },
    { concept: "Cadences", focus: "harmonic punctuation that creates arrival, pause or continuation", level: "A-level", practice: "recognising resolution points in songs and comping patterns" },
    { concept: "Rhythm and Meter", focus: "the organisation of beats, accents and subdivisions over time", level: "GCSE", practice: "locking strumming, picking and rests to pulse and grouping" },
    { concept: "Syncopation and Groove", focus: "accenting weak beats or offbeats to create forward motion", level: "A-level", practice: "placing attacks and silences against the underlying meter" },
    { concept: "Modes on the Fretboard", focus: "scale rotations with distinct centres, intervals and harmonic colours", level: "University", practice: "linking modal sound to drone, chord vamp and characteristic tones" },
    { concept: "Pentatonic and Blues Language", focus: "five-note frameworks and blue notes used in guitar melody and improvisation", level: "A-level", practice: "turning boxes into phrases with bends, targets and call-response" },
    { concept: "Voice Leading", focus: "smooth movement between chord tones across changing harmony", level: "University", practice: "connecting nearby notes instead of jumping between unrelated grips" },
    { concept: "Phrase and Form", focus: "how musical ideas group into motives, phrases, sections and larger designs", level: "University", practice: "hearing riffs, solos and progressions as structured musical paragraphs" },
  ],
  "architecture-urbanism": [
    { concept: "Thresholds", focus: "boundaries that organise entry, privacy and transition", level: "GCSE", practice: "reading doors, gates, lobbies and steps as social filters" },
    { concept: "Desire Lines", focus: "informal paths showing how people actually move through space", level: "GCSE", practice: "noticing where use disagrees with planned routes" },
    { concept: "Public Realm", focus: "shared spaces where civic life, movement and encounter happen", level: "A-level", practice: "distinguishing accessible public life from private consumption space" },
    { concept: "Human Scale", focus: "design proportions that match bodily comfort and everyday perception", level: "A-level", practice: "judging why some streets feel walkable and others feel hostile" },
    { concept: "Mixed Use", focus: "combining functions so places remain active across the day", level: "A-level", practice: "linking land use to safety, convenience and street life" },
    { concept: "Defensible Space", focus: "spatial design that shapes surveillance, ownership and perceived safety", level: "University", practice: "separating real safety from exclusionary control" },
    { concept: "Urban Density", focus: "concentration of people, buildings and activity in a place", level: "A-level", practice: "seeing density as design quality, not crowding alone" },
    { concept: "Circulation", focus: "the routes people take through buildings and cities", level: "GCSE", practice: "mapping movement, pause, bottleneck and orientation" },
    { concept: "Gentrification", focus: "neighbourhood change involving reinvestment, rising costs and displacement", level: "University", practice: "connecting visible improvement to power and access" },
    { concept: "Third Places", focus: "informal social settings outside home and work", level: "A-level", practice: "recognising cafes, parks and barbers as social infrastructure" },
  ],
  "classical-civilisation": [
    { concept: "Myth", focus: "traditional stories that organise values, power and identity", level: "GCSE", practice: "seeing myths as cultural arguments rather than childish tales" },
    { concept: "Polis", focus: "the Greek city-state as political, religious and social community", level: "A-level", practice: "linking citizenship to place and participation" },
    { concept: "Republicanism", focus: "public liberty, mixed government and resistance to kingship", level: "University", practice: "recognising Roman political language in modern politics" },
    { concept: "Patronage", focus: "status and obligation created by unequal support relationships", level: "A-level", practice: "seeing influence networks behind public honour" },
    { concept: "Stoicism", focus: "discipline of judgement, virtue and emotional self-command", level: "A-level", practice: "separating ancient ethics from modern productivity slogans" },
    { concept: "Tragedy and Catharsis", focus: "serious drama that stages conflict, error and emotional recognition", level: "University", practice: "reading public emotion as moral education" },
    { concept: "Roman Law", focus: "legal categories and procedures shaping rights, property and citizenship", level: "A-level", practice: "noticing legal inheritance in modern institutions" },
    { concept: "Civic Virtue", focus: "public-spirited character expected of citizens", level: "GCSE", practice: "asking what a society rewards as honourable service" },
    { concept: "Imperium", focus: "command, authority and expansion in Roman political culture", level: "University", practice: "connecting empire to symbols, roads, law and military power" },
    { concept: "Classical Reception", focus: "later cultures reusing antiquity for prestige, critique or identity", level: "University", practice: "separating ancient source from modern appropriation" },
  ],
  geopolitics: [
    { concept: "Chokepoints", focus: "narrow routes where trade, energy or military movement can be constrained", level: "GCSE", practice: "connecting shipping disruption to everyday prices" },
    { concept: "Sphere of Influence", focus: "an area where a power expects privileged strategic influence", level: "A-level", practice: "reading alliance pressure beyond formal borders" },
    { concept: "Energy Security", focus: "reliable access to affordable fuel and power under political risk", level: "A-level", practice: "linking bills, pipelines, sanctions and diplomacy" },
    { concept: "Buffer States", focus: "states positioned between rival powers", level: "A-level", practice: "seeing geography as exposure and bargaining position" },
    { concept: "Sanctions", focus: "economic restrictions used to change behaviour or signal pressure", level: "A-level", practice: "asking who bears the cost and what adaptation follows" },
    { concept: "Sea Power", focus: "control of maritime routes, ports and naval reach", level: "University", practice: "connecting naval access to trade and military options" },
    { concept: "Resource Curse", focus: "resource wealth producing instability, corruption or dependency", level: "University", practice: "looking beyond natural wealth to institutions" },
    { concept: "Demographic Pressure", focus: "population patterns shaping labour, migration, welfare and security", level: "A-level", practice: "reading age structure behind policy strain" },
    { concept: "Strategic Depth", focus: "space that lets a state absorb attack or buy time", level: "University", practice: "understanding why territory can matter militarily" },
    { concept: "Soft Power", focus: "influence through attraction, culture, legitimacy and institutions", level: "GCSE", practice: "seeing power outside armies and money" },
  ],
  "history-of-ideas": [
    { concept: "Progress", focus: "the belief that history can move toward improvement", level: "A-level", practice: "spotting progress assumptions in technology and politics" },
    { concept: "Liberty", focus: "freedom understood through rights, non-domination or self-rule", level: "University", practice: "asking what kind of constraint is being opposed" },
    { concept: "The Self", focus: "ideas of personhood, identity and inner life", level: "University", practice: "seeing self-improvement culture as historically shaped" },
    { concept: "Nature", focus: "the natural world as fact, norm, resource or ideal", level: "A-level", practice: "noticing when natural means good, original or inevitable" },
    { concept: "Civilisation", focus: "a contested idea of refinement, order and hierarchy", level: "University", practice: "detecting prestige and exclusion inside civilised language" },
    { concept: "Reason", focus: "human capacity for explanation, judgement and order", level: "A-level", practice: "seeing when reason is opposed to emotion, faith or tradition" },
    { concept: "Nation", focus: "a political community imagined through peoplehood, memory and territory", level: "A-level", practice: "recognising national stories in ordinary symbols" },
    { concept: "Meritocracy", focus: "status justified by talent, effort and achievement", level: "University", practice: "asking what counts as merit and who defines it" },
    { concept: "Authenticity", focus: "the ideal of being true to oneself or origins", level: "A-level", practice: "spotting authenticity claims in brands and identity" },
    { concept: "Modernity", focus: "social life shaped by industrialisation, bureaucracy, science and speed", level: "University", practice: "connecting everyday acceleration to historical change" },
  ],
  "military-strategy": [
    { concept: "Friction", focus: "the gap between plans and reality under pressure", level: "GCSE", practice: "expecting delay, confusion and failure points" },
    { concept: "Centre of Gravity", focus: "the source of strength that holds an opponent's system together", level: "University", practice: "looking for what actually sustains resistance" },
    { concept: "Logistics", focus: "movement and supply that make operations possible", level: "GCSE", practice: "seeing support systems behind visible action" },
    { concept: "Deterrence", focus: "preventing action by making costs credible", level: "A-level", practice: "separating threat, capability and belief" },
    { concept: "Manoeuvre", focus: "gaining advantage through movement, position and tempo", level: "A-level", practice: "thinking beyond direct confrontation" },
    { concept: "Intelligence", focus: "information used to reduce uncertainty about opponents and terrain", level: "A-level", practice: "asking what is known, assumed and hidden" },
    { concept: "Morale", focus: "will, cohesion and confidence under strain", level: "GCSE", practice: "seeing human endurance as strategic material" },
    { concept: "Asymmetric Warfare", focus: "conflict between unequal actors using different methods", level: "University", practice: "not assuming the weaker actor plays the same game" },
    { concept: "Operational Art", focus: "linking battles and campaigns to strategic objectives", level: "University", practice: "connecting local wins to larger purpose" },
    { concept: "Rules of Engagement", focus: "constraints governing when and how force may be used", level: "A-level", practice: "seeing legality and legitimacy inside tactical action" },
  ],
  psychology: [
    { concept: "Attention", focus: "selective processing of information under limited mental capacity", level: "GCSE", practice: "seeing distraction as competition, not laziness alone" },
    { concept: "Working Memory", focus: "temporary mental workspace for holding and manipulating information", level: "A-level", practice: "designing tasks around cognitive limits" },
    { concept: "Classical Conditioning", focus: "learning associations between stimuli", level: "GCSE", practice: "recognising why cues trigger feelings or habits" },
    { concept: "Operant Conditioning", focus: "learning through consequences and reinforcement", level: "GCSE", practice: "spotting reward loops in apps and routines" },
    { concept: "Cognitive Bias", focus: "systematic patterns in judgement under uncertainty", level: "A-level", practice: "treating intuition as evidence to inspect" },
    { concept: "Social Identity", focus: "self-understanding shaped by group membership", level: "A-level", practice: "noticing us-and-them thinking in ordinary settings" },
    { concept: "Stress Response", focus: "physiological and psychological mobilisation under perceived demand", level: "A-level", practice: "separating useful arousal from chronic strain" },
    { concept: "Motivation", focus: "processes that initiate, direct and sustain behaviour", level: "A-level", practice: "linking goals to incentives, meaning and friction" },
    { concept: "Attachment", focus: "relationship patterns shaped by early bonds and later expectations", level: "University", practice: "reading closeness and distance without instant diagnosis" },
    { concept: "Metacognition", focus: "awareness and regulation of one's own thinking", level: "University", practice: "checking confidence, strategy and error patterns" },
  ],
  "rhetoric-argumentation": [
    { concept: "Ethos", focus: "persuasion through credibility, character and authority", level: "GCSE", practice: "asking why a speaker seems trustworthy" },
    { concept: "Pathos", focus: "persuasion through emotion and audience feeling", level: "GCSE", practice: "separating emotional relevance from emotional pressure" },
    { concept: "Logos", focus: "persuasion through reasons, structure and evidence", level: "GCSE", practice: "checking whether the argument actually follows" },
    { concept: "Kairos", focus: "the timing and occasion that make persuasion effective", level: "A-level", practice: "seeing why the same message works differently by moment" },
    { concept: "Framing", focus: "shaping interpretation by selecting context and emphasis", level: "A-level", practice: "noticing what question an argument makes natural" },
    { concept: "Enthymeme", focus: "an argument with an unstated premise supplied by the audience", level: "University", practice: "finding the hidden assumption that makes persuasion work" },
    { concept: "Fallacy", focus: "a pattern of reasoning that appears stronger than it is", level: "A-level", practice: "naming errors without using labels as shortcuts" },
    { concept: "Burden of Proof", focus: "who must support a claim and how much evidence is needed", level: "A-level", practice: "resisting unsupported reversals of responsibility" },
    { concept: "Steelman", focus: "reconstructing the strongest version of an opposing argument", level: "University", practice: "arguing against the real position, not a weak copy" },
    { concept: "Narrative Persuasion", focus: "using story structure to make claims memorable and meaningful", level: "University", practice: "seeing how examples become moral direction" },
  ],
  "systems-thinking": [
    { concept: "Feedback Loop", focus: "a circular relationship where outputs influence future inputs", level: "GCSE", practice: "spotting reinforcing and balancing patterns" },
    { concept: "Stocks and Flows", focus: "accumulations and rates that change them", level: "A-level", practice: "separating current state from speed of change" },
    { concept: "Delay", focus: "time lag between action and visible consequence", level: "GCSE", practice: "not quitting interventions before effects appear" },
    { concept: "Leverage Point", focus: "a place in a system where small changes can have large effects", level: "University", practice: "looking for structure, not only effort" },
    { concept: "Bottleneck", focus: "the constraint limiting overall system performance", level: "A-level", practice: "improving the limiting step rather than everything equally" },
    { concept: "Unintended Consequences", focus: "effects that emerge because systems respond to interventions", level: "A-level", practice: "asking what behaviour the fix will create" },
    { concept: "Resilience", focus: "capacity to absorb disturbance and keep functioning", level: "A-level", practice: "valuing buffers, redundancy and recovery time" },
    { concept: "Emergence", focus: "patterns arising from interactions among parts", level: "University", practice: "not reducing group behaviour to one individual cause" },
    { concept: "Boundary", focus: "the chosen edge of what counts inside the system", level: "University", practice: "seeing how the frame changes the explanation" },
    { concept: "Incentive Structure", focus: "rewards and penalties that shape repeated behaviour", level: "A-level", practice: "asking what the system pays people to do" },
  ],
  "pharmaceutical-businesses": [
    { concept: "Drug Discovery", focus: "identifying promising biological targets and candidate molecules", level: "GCSE", practice: "linking scientific hypothesis to commercial risk" },
    { concept: "Preclinical Development", focus: "testing safety and biological activity before human trials", level: "A-level", practice: "understanding why early promise often fails" },
    { concept: "Clinical Trial Phases", focus: "Phase I safety, Phase II dose and efficacy, Phase III confirmation", level: "GCSE", practice: "reading trial news without overclaiming" },
    { concept: "Regulatory Affairs", focus: "evidence, compliance and submission strategy for approval", level: "A-level", practice: "seeing regulators as evidence judges, not marketing obstacles" },
    { concept: "Market Access", focus: "payer evidence, reimbursement and affordability after approval", level: "University", practice: "asking who pays and what proof they need" },
    { concept: "Pricing and Reimbursement", focus: "how medicines are valued, negotiated and funded", level: "University", practice: "balancing innovation incentives with patient access" },
    { concept: "Medical Affairs", focus: "scientific exchange, evidence generation and clinician education", level: "A-level", practice: "separating medical credibility from sales messaging" },
    { concept: "Pharmacovigilance", focus: "monitoring medicine safety after launch", level: "A-level", practice: "treating approval as the start of evidence, not the end" },
    { concept: "Patent Cliff", focus: "revenue pressure when exclusivity expires and generics enter", level: "University", practice: "connecting intellectual property to portfolio strategy" },
    { concept: "Life Sciences CRM", focus: "regulated customer engagement systems for pharma field teams", level: "GCSE", practice: "understanding Veeva-style workflows, compliance and account planning" },
  ],
  philosophy: [
    { concept: "Argument Validity", focus: "whether a conclusion follows from its premises", level: "GCSE", practice: "separating a persuasive claim from a logically supported one" },
    { concept: "Epistemology", focus: "knowledge, belief, justification and doubt", level: "A-level", practice: "asking what would make a belief justified" },
    { concept: "Utilitarianism", focus: "judging actions by their consequences for wellbeing", level: "A-level", practice: "weighing outcomes without ignoring individuals" },
    { concept: "Deontology", focus: "duties, rights and rules that constrain action", level: "A-level", practice: "asking what principle a choice would endorse" },
    { concept: "Virtue Ethics", focus: "character, habits and human flourishing", level: "GCSE", practice: "thinking about the kind of person a habit creates" },
    { concept: "The Mind-Body Problem", focus: "the relation between conscious experience and physical processes", level: "University", practice: "separating correlation from explanation" },
    { concept: "Free Will", focus: "agency, responsibility and causal determination", level: "A-level", practice: "testing whether responsibility needs absolute freedom" },
    { concept: "Social Contract", focus: "political obligation grounded in agreement or legitimacy", level: "University", practice: "asking why authority should be obeyed" },
    { concept: "Personal Identity", focus: "what makes someone the same person over time", level: "University", practice: "questioning memory, body and continuity" },
    { concept: "The Good Life", focus: "competing accounts of happiness, meaning and fulfilment", level: "GCSE", practice: "turning vague ambition into examined values" },
  ],
  politics: [
    { concept: "Power", focus: "the ability to shape behaviour, rules and outcomes", level: "GCSE", practice: "spotting visible and hidden forms of influence" },
    { concept: "Legitimacy", focus: "why people accept authority as rightful", level: "A-level", practice: "separating force from consent" },
    { concept: "The State", focus: "institutions claiming authority over territory and law", level: "GCSE", practice: "distinguishing government from the wider state" },
    { concept: "Democracy", focus: "rule by the people through participation, representation and accountability", level: "GCSE", practice: "checking whether democratic forms create real control" },
    { concept: "Liberalism", focus: "rights, individual freedom, consent and limited power", level: "A-level", practice: "seeing the difference between liberty and licence" },
    { concept: "Conservatism", focus: "tradition, order, gradual change and social inheritance", level: "A-level", practice: "understanding caution as a political argument" },
    { concept: "Socialism", focus: "equality, collective ownership or control, and critique of class power", level: "A-level", practice: "separating moral aims from institutional designs" },
    { concept: "Populism", focus: "politics framed as pure people against corrupt elites", level: "University", practice: "reading rhetoric and institutional consequences together" },
    { concept: "Federalism", focus: "power divided between central and regional governments", level: "University", practice: "asking what level of authority should decide" },
    { concept: "Public Policy", focus: "government action shaped by evidence, ideology and implementation", level: "University", practice: "moving from promise to delivery constraints" },
  ],
  science: [
    { concept: "Hypothesis", focus: "a testable proposed explanation", level: "GCSE", practice: "turning curiosity into a claim that evidence can challenge" },
    { concept: "Falsifiability", focus: "whether a claim could be shown wrong by possible evidence", level: "A-level", practice: "separating science from unfalsifiable assertion" },
    { concept: "Controlled Experiment", focus: "isolating variables to test causal claims", level: "GCSE", practice: "asking what changed and what stayed constant" },
    { concept: "Correlation and Causation", focus: "association versus one factor producing another", level: "A-level", practice: "not overreading patterns as mechanisms" },
    { concept: "Peer Review", focus: "expert scrutiny before publication", level: "GCSE", practice: "treating publication as a filter, not a guarantee" },
    { concept: "Replication", focus: "whether findings hold when repeated independently", level: "A-level", practice: "valuing durable evidence over single exciting results" },
    { concept: "Statistical Significance", focus: "whether an observed result is unlikely under a null model", level: "University", practice: "separating significance from importance" },
    { concept: "Scientific Models", focus: "simplified representations used to explain and predict", level: "A-level", practice: "asking what the model leaves out" },
    { concept: "Evolution by Natural Selection", focus: "heritable variation changing through differential survival and reproduction", level: "GCSE", practice: "thinking in populations, not intentions" },
    { concept: "Paradigm Shift", focus: "deep change in the assumptions guiding normal science", level: "University", practice: "seeing why evidence and frameworks interact" },
  ],
  "social-engineering": [
    { concept: "Influence", focus: "changing attitudes or behaviour through social and psychological cues", level: "GCSE", practice: "recognising influence without assuming every influence is unethical" },
    { concept: "Authority", focus: "people complying because a source appears legitimate or expert", level: "GCSE", practice: "verifying authority before acting under pressure" },
    { concept: "Reciprocity", focus: "the pressure to return favours, gifts or concessions", level: "A-level", practice: "noticing when a small gift creates an outsized obligation" },
    { concept: "Scarcity", focus: "limited availability increasing urgency and perceived value", level: "GCSE", practice: "slowing down when urgency replaces evidence" },
    { concept: "Social Proof", focus: "treating others' behaviour as evidence for what to do", level: "A-level", practice: "checking whether popularity is relevant evidence" },
    { concept: "Pretexting", focus: "using a fabricated role or story to shape trust", level: "University", practice: "spotting identity claims that bypass verification" },
    { concept: "Phishing", focus: "deceptive messages that request action, data or access", level: "A-level", practice: "inspecting the request, channel and consequence before responding" },
    { concept: "Elicitation", focus: "drawing out information through ordinary conversation", level: "University", practice: "noticing when friendly curiosity becomes extraction" },
    { concept: "Dark Patterns", focus: "interface choices that steer users against their interests", level: "A-level", practice: "reading design as persuasion with ethical stakes" },
    { concept: "Ethical Persuasion", focus: "influence that preserves truth, consent and agency", level: "University", practice: "using persuasive skill without coercion or deception" },
  ],
  sociology: [
    { concept: "Social Structure", focus: "patterns and institutions that shape behaviour", level: "GCSE", practice: "linking individual action to wider conditions" },
    { concept: "Norms", focus: "shared expectations about acceptable behaviour", level: "GCSE", practice: "seeing invisible rules when they are broken" },
    { concept: "Socialisation", focus: "how people learn roles, values and habits", level: "GCSE", practice: "connecting family, school, media and peers" },
    { concept: "Class", focus: "economic and social hierarchy shaping life chances", level: "A-level", practice: "looking beyond income to power and status" },
    { concept: "Status", focus: "social honour or prestige attached to people and roles", level: "A-level", practice: "reading why some signals command respect" },
    { concept: "Role Conflict", focus: "tension between expectations attached to different positions", level: "A-level", practice: "explaining stress without reducing it to weakness" },
    { concept: "Bureaucracy", focus: "rule-based organisation with hierarchy and written procedures", level: "University", practice: "weighing efficiency against impersonality" },
    { concept: "Deviance", focus: "behaviour labelled as violating norms", level: "A-level", practice: "asking who gets to define the norm" },
    { concept: "Social Capital", focus: "resources available through networks and relationships", level: "University", practice: "understanding opportunity as partly relational" },
    { concept: "Anomie", focus: "normlessness or dislocation when social regulation weakens", level: "University", practice: "reading instability as social as well as personal" },
  ],
};

const topicLessonDetails: Record<LearningTopicId, LessonDetail[]> = {
  anthropology: [
    { anchor: "introductory anthropology chapters on culture as learned, shared and contested meaning", case: "the same meal functioning as nutrition, hospitality, gendered labour and religious boundary", challenge: "explain one ordinary practice as a cultural system without making it sound automatic or timeless", method: "separate learned meaning from biological need, then show how practice is transmitted and contested", misconception: "culture is not a list of exotic customs or a single personality shared by a whole people" },
    { anchor: "ethnographic method chapters on immersion, description and interpretation", case: "a researcher spending months in a workplace or village to understand informal rules that surveys would miss", challenge: "state what ethnography can reveal that a questionnaire would flatten", method: "track observation, participation, interviews and reflexive notes as different kinds of evidence", misconception: "ethnography is not just travel writing with academic vocabulary" },
    { anchor: "fieldwork sections on participant observation and researcher positionality", case: "joining a community event while recording who speaks, who serves, who watches and who is excluded", challenge: "explain why participation creates insight and also creates bias", method: "balance closeness to practice with explicit notes about role, access and power", misconception: "taking part does not make the observer neutral or automatically accepted" },
    { anchor: "kinship chapters on descent, marriage, household and social reproduction", case: "care obligations distributed through aunties, cousins, godparents or clan relations rather than a nuclear family", challenge: "show how kinship organises rights and duties, not merely biological relatedness", method: "map descent, residence, inheritance and care before applying familiar family categories", misconception: "kinship is not simply genealogy under another name" },
    { anchor: "ritual chapters on symbol, transition, repetition and social order", case: "graduation, initiation, mourning or oath-taking as a public transformation of status", challenge: "explain how ritual changes social recognition even when no physical object changes", method: "identify sequence, symbols, participants, audience and before-after status", misconception: "ritual is not meaningless repetition or just religious ceremony" },
    { anchor: "cultural relativism discussions that distinguish understanding from approval", case: "an unfamiliar marriage, healing or punishment practice that provokes immediate moral judgement", challenge: "hold contextual understanding and ethical evaluation in the same paragraph", method: "describe the practice in local terms before naming your evaluative standard", misconception: "relativism is not the claim that every practice is morally beyond criticism" },
    { anchor: "material culture chapters on objects, labour, technology and identity", case: "a phone, cooking pot, uniform or shrine object revealing networks of status and work", challenge: "read one object as social evidence rather than as a neutral thing", method: "ask who made it, who uses it, who controls it and what meanings attach to it", misconception: "objects are not mute background; they organise social relations" },
    { anchor: "rites of passage theory on separation, liminality and reincorporation", case: "a recruit, student, patient or migrant being between old and new social identities", challenge: "explain a threshold state without reducing it to personal confusion", method: "identify the old status, suspended rules, transition tests and new status", misconception: "liminality is not just any period of uncertainty" },
    { anchor: "exchange chapters on reciprocity, obligation and non-market value", case: "a wedding gift, business favour or ceremonial exchange that creates future obligation", challenge: "show how a gift can be generous and strategic at the same time", method: "track giver, receiver, timing, return expectation and status effect", misconception: "gift exchange is not the absence of economics; it is a different moral economy" },
    { anchor: "method chapters distinguishing emic insider accounts and etic analytic accounts", case: "participants explaining a ritual as respect while analysts also see hierarchy and resource distribution", challenge: "write both explanations without treating one as automatically superior", method: "state the emic account first, then add the etic explanation and compare their evidence", misconception: "emic does not mean true and etic does not mean cold or hostile" },
  ],
  "art-history": [
    { anchor: "introductory art history chapters on formal elements and visual analysis", case: "a portrait whose composition, lighting and scale organise authority before biography is considered", challenge: "make a claim from visible evidence alone before adding context", method: "describe line, colour, composition, texture and scale in precise sequence", misconception: "formal analysis is not saying whether an artwork looks nice" },
    { anchor: "iconography sections on symbols, attributes and conventional motifs", case: "a saint, ruler, animal or object whose meaning depends on a shared visual code", challenge: "distinguish a symbol supported by convention from a private guess", method: "identify motif, repeated context, audience knowledge and likely interpretive code", misconception: "not every object in an image is a hidden symbol" },
    { anchor: "patronage chapters on commissions, institutions and audience", case: "a church fresco, corporate building or royal portrait shaped by the sponsor's interests", challenge: "explain how funding conditions can shape form without erasing artistic agency", method: "ask who paid, where the work appeared and what audience response was desired", misconception: "patronage does not mean the artist was merely a puppet" },
    { anchor: "Renaissance and perspective sections on depth, viewpoint and mathematics", case: "linear perspective placing the viewer in a controlled position before a sacred or civic scene", challenge: "show how perspective creates ideology as well as spatial illusion", method: "identify horizon line, vanishing point, viewer position and compositional hierarchy", misconception: "perspective is not simply better or more realistic art" },
    { anchor: "Renaissance chapters on humanism, antiquity and changing artist status", case: "a Renaissance work blending classical references with Christian or civic patronage", challenge: "explain Renaissance change without turning it into simple progress from medieval darkness", method: "connect form, patronage, humanist learning and workshop practice", misconception: "the Renaissance was not a single sudden rebirth experienced equally everywhere" },
    { anchor: "modernism chapters on abstraction, rupture and medium", case: "a modernist painting refusing illusionistic depth after photography and industrial modernity", challenge: "read abstraction as an argument about perception and society", method: "connect formal experiment to historical disruption and changing media", misconception: "modernism is not just art that forgot how to represent reality" },
    { anchor: "museum studies and provenance discussions on ownership, authenticity and restitution", case: "an object moving from sacred site to colonial collection to national museum", challenge: "treat ownership history as part of meaning, not an administrative footnote", method: "trace maker, transfer, collector, museum label and contested claim", misconception: "provenance is not only a market authenticity check" },
    { anchor: "medium sections on material, technique and constraints", case: "oil paint, marble, fresco, photography or digital media enabling different kinds of illusion and authority", challenge: "explain how material choices shape meaning rather than merely carry it", method: "identify physical properties, technique, labour, durability and viewing conditions", misconception: "medium is not a neutral container for an idea" },
    { anchor: "museum and display chapters on classification, canon and institutional power", case: "an exhibition label arranging objects as primitive, national, modern or masterpiece", challenge: "read a museum display as an argument with omissions", method: "analyse selection, ordering, label language, lighting and visitor path", misconception: "museums do not simply show art; they produce categories of value" },
    { anchor: "portraiture sections on likeness, status and identity construction", case: "a portrait using clothing, setting, pose and gaze to produce authority", challenge: "distinguish likeness from social performance", method: "read pose, costume, attributes, background and intended audience together", misconception: "portraiture is not just what someone looked like" },
  ],
  "artificial-intelligence": [
    { anchor: "AI textbook chapters on problem-solving agents and state-space search", case: "a route planner choosing paths under cost and constraint", challenge: "formulate a problem as states, actions, transition model, goal and path cost", method: "separate search space from search algorithm and evaluation function", misconception: "search is not random looking around; it is structured exploration" },
    { anchor: "machine learning chapters on training data, hypothesis spaces and generalisation", case: "a spam filter improving from labelled examples but failing on new wording", challenge: "explain what is learned and what remains assumed by the designer", method: "distinguish data, labels, loss function, features and deployment distribution", misconception: "machine learning is not learning in the human biographical sense" },
    { anchor: "classification sections on labels, decision boundaries and error types", case: "a medical triage classifier balancing false positives and false negatives", challenge: "explain why accuracy alone may be the wrong metric", method: "identify classes, features, threshold, confusion matrix and cost of errors", misconception: "classification labels are not natural facts handed to the model" },
    { anchor: "neural network chapters on layered representations and optimisation", case: "a vision model transforming pixels into hierarchical features", challenge: "explain the role of layers without pretending the model sees like a person", method: "connect inputs, weights, activation, loss and gradient-based training", misconception: "neural networks are not miniature brains with human concepts inside" },
    { anchor: "model selection sections on overfitting, validation and generalisation", case: "a model memorising training examples and failing on real users", challenge: "explain why lower training error can mean worse performance", method: "compare training, validation and test behaviour under distribution shift", misconception: "more complex is not automatically more intelligent" },
    { anchor: "representation learning chapters on vector spaces and semantic similarity", case: "a search system retrieving conceptually similar documents without exact word match", challenge: "explain how proximity in representation space can encode useful but imperfect similarity", method: "describe input encoding, learned dimensions, similarity metric and failure cases", misconception: "embeddings do not store dictionary definitions in coordinates" },
    { anchor: "reinforcement learning chapters on agents, rewards and policies", case: "a game-playing system learning actions from rewards that may not match human preferences", challenge: "separate reward maximisation from doing what the designer intended", method: "identify state, action, reward, policy, exploration and environment", misconception: "a reward function is not the same as a moral goal" },
    { anchor: "language model practice connected to task specification and context", case: "a model producing different answers when role, constraints and examples change", challenge: "explain prompting as interface design, not magic wording", method: "state task, context, constraints, examples and evaluation criteria", misconception: "prompting is not a substitute for checking output quality" },
    { anchor: "AI safety discussions on objective specification and human values", case: "an assistant optimising engagement while undermining user welfare", challenge: "explain why alignment is partly technical and partly social", method: "identify stakeholders, objective, constraints, evaluation and failure incentives", misconception: "alignment is not solved by asking a model to be nice" },
    { anchor: "evaluation sections on benchmarks, robustness and external validity", case: "a chatbot performing well on a benchmark but failing in a high-stakes workflow", challenge: "design an evaluation that tests the real use case, not just a demo", method: "compare benchmark, human review, adversarial cases, calibration and monitoring", misconception: "a high score is not the same as safe deployment" },
  ],
  business: [
    { anchor: "management textbook sections on value creation and customer need", case: "a service that saves a customer time but charges less than the time saved", challenge: "state the value proposition without confusing it with features", method: "link customer problem, promised outcome, proof and willingness to pay", misconception: "a value proposition is not a slogan or tagline" },
    { anchor: "business model chapters on value creation, delivery and capture", case: "a subscription service with high acquisition cost but recurring revenue", challenge: "explain how the organisation gets paid for the value it creates", method: "map customer, offer, channel, revenue, cost and key resources", misconception: "business model is not the same as business idea" },
    { anchor: "strategy sections on resources, capabilities and competitive positioning", case: "a firm protected by brand trust, switching costs or operational scale", challenge: "distinguish a good quarter from a durable advantage", method: "identify resource, capability, barrier to imitation and customer relevance", misconception: "being popular once is not competitive advantage" },
    { anchor: "managerial accounting and entrepreneurship material on unit economics", case: "a delivery product losing money on every order despite revenue growth", challenge: "explain when growth makes a company stronger or weaker", method: "calculate contribution margin, acquisition cost, retention and payback", misconception: "revenue growth is not proof of a viable business" },
    { anchor: "operations management sections on process, bottlenecks and quality", case: "a clinic, warehouse or content team slowed by one repeated handoff", challenge: "identify the constraint that controls the system's output", method: "map inputs, process steps, bottleneck, error rate and feedback loop", misconception: "operations is not just back-office administration" },
    { anchor: "strategy chapters on trade-offs and fit between activities", case: "a company choosing premium service and refusing low-margin customers", challenge: "explain what the strategy deliberately refuses to do", method: "name target customer, activity system, trade-off and reinforcing choices", misconception: "strategy is not a list of ambitions" },
    { anchor: "organisational behaviour chapters on norms, incentives and leadership", case: "a team saying quality matters while rewarding only speed", challenge: "infer culture from repeated behaviour rather than stated values", method: "compare stories, incentives, rituals, hiring and promotion signals", misconception: "culture is not office atmosphere or brand personality" },
    { anchor: "finance basics on cash timing, liquidity and working capital", case: "a profitable company struggling because customers pay late", challenge: "explain why accounting profit and survival cash are different", method: "track cash in, cash out, timing, runway and obligations", misconception: "profit automatically means there is money in the bank" },
    { anchor: "platform strategy material on network effects and switching value", case: "a marketplace becoming more useful as buyers and sellers join", challenge: "distinguish a true network effect from ordinary scale", method: "identify user sides, incremental value per user, liquidity and defensibility", misconception: "having many users is not itself a network effect" },
    { anchor: "agency theory sections on incentives, monitoring and goal conflict", case: "a sales team maximising commission while damaging retention", challenge: "explain how a metric can rationally create bad behaviour", method: "identify principal, agent, information asymmetry, incentive and monitoring cost", misconception: "bad outcomes are not always caused by bad people" },
  ],
  economics: [
    { anchor: "introductory economics chapters on scarcity and choice", case: "a student allocating time between work, sleep, training and study", challenge: "show how scarcity exists even without money changing hands", method: "identify limited resource, competing uses and the decision rule", misconception: "scarcity does not mean poverty; it means choice under constraint" },
    { anchor: "opportunity cost sections on alternatives and trade-offs", case: "choosing an extra work shift instead of a long run or study block", challenge: "name the best forgone alternative, not every possible alternative", method: "compare the chosen action with the next-best realistic option", misconception: "opportunity cost is not the money price of the thing" },
    { anchor: "supply and demand chapters on price adjustment and equilibrium", case: "rents rising when housing supply is fixed and demand grows", challenge: "explain movement along curves versus shifts in curves", method: "identify buyers, sellers, price, quantity, demand shifter and supply shifter", misconception: "prices are not just chosen by greedy sellers" },
    { anchor: "marginal analysis sections on incremental benefit and cost", case: "whether to add one more training session, worker, discount or study hour", challenge: "avoid deciding from averages when the marginal case is what matters", method: "compare extra benefit with extra cost for the next unit only", misconception: "marginal does not mean unimportant" },
    { anchor: "externalities chapters on social cost and benefit", case: "pollution, vaccination or noisy nightlife affecting people outside the transaction", challenge: "show why private incentives can produce socially inefficient outcomes", method: "separate private cost, external cost, social cost and possible correction", misconception: "externality does not just mean any side effect" },
    { anchor: "elasticity sections on responsiveness to price and income", case: "a price rise affecting cigarettes differently from restaurant meals", challenge: "explain why the same tax can produce different quantity responses", method: "identify substitutes, necessity, time horizon and budget share", misconception: "elasticity is not whether demand exists; it is responsiveness" },
    { anchor: "trade chapters on comparative advantage and opportunity cost", case: "two people specialising even when one is better at both tasks", challenge: "explain gains from trade using relative rather than absolute productivity", method: "calculate opportunity costs and compare ratios", misconception: "comparative advantage is not being the best at something" },
    { anchor: "game theory sections on strategic interaction", case: "two firms deciding whether to discount, advertise or cooperate", challenge: "explain why individually rational choices can produce worse joint outcomes", method: "map players, strategies, payoffs, dominant strategies and equilibrium", misconception: "game theory is not about games; it is about interdependence" },
    { anchor: "public goods chapters on non-rivalry and non-excludability", case: "street lighting, clean air, open-source software or national defence", challenge: "show why voluntary payment can underprovide shared goods", method: "test rivalry, excludability, free-riding and collective provision", misconception: "public good does not simply mean good for the public" },
    { anchor: "macroeconomics chapters on price levels and purchasing power", case: "household budgets squeezed when wages lag a broad rise in prices", challenge: "distinguish relative price changes from inflation", method: "identify basket, price index, wage response and real purchasing power", misconception: "inflation is not just one expensive product" },
  ],
  "linguistics-etymology": [
    { anchor: "morphology chapters on roots, affixes and meaningful units", case: "unhappiness breaking into un-, happy and -ness", challenge: "explain meaning by structure rather than by whole-word memorisation", method: "identify free and bound morphemes and the meaning contribution of each", misconception: "a morpheme is not the same thing as a syllable" },
    { anchor: "phonology chapters on contrastive sound units", case: "pat and bat differing by one sound that changes meaning in English", challenge: "separate physical sound from language-specific contrast", method: "use minimal pairs to test whether a sound difference matters", misconception: "phonemes are not letters" },
    { anchor: "syntax chapters on constituency and sentence structure", case: "ambiguous sentences where grouping changes meaning", challenge: "show how word order and phrase structure shape interpretation", method: "identify constituents, heads, modifiers and movement or attachment", misconception: "syntax is not grammar policing" },
    { anchor: "semantics chapters on lexical and compositional meaning", case: "every student read a book changing meaning depending on quantifier scope", challenge: "distinguish word meaning from sentence meaning", method: "analyse reference, sense, entailment and compositional structure", misconception: "semantics is not simply dictionary lookup" },
    { anchor: "pragmatics chapters on implicature, speech acts and context", case: "Can you pass the salt? functioning as a request, not a question about ability", challenge: "explain meaning beyond literal sentence content", method: "identify speaker intention, context, shared knowledge and inference", misconception: "pragmatics is not vagueness; it has patterns" },
    { anchor: "historical linguistics sections on meaning change", case: "a word narrowing, broadening, ameliorating or pejorating over centuries", challenge: "track meaning change with evidence rather than anecdote", method: "compare dated attestations and classify the direction of shift", misconception: "old meanings are not automatically truer meanings" },
    { anchor: "historical linguistics chapters on cognates and language families", case: "father, Vater and pater showing inherited similarity across Indo-European languages", challenge: "distinguish true cognates from accidental resemblance", method: "look for systematic sound correspondences across multiple words", misconception: "similar-looking words are not automatically related" },
    { anchor: "language contact chapters on borrowing and prestige", case: "food, law or technology vocabulary entering English through contact", challenge: "explain what borrowing reveals about power, trade or cultural prestige", method: "identify donor language, historical contact and semantic domain", misconception: "loanwords are not corruption of a pure language" },
    { anchor: "grammaticalisation sections on change from lexical to grammatical function", case: "going to becoming gonna as a future marker", challenge: "show how repeated use changes grammar gradually", method: "track semantic bleaching, phonetic reduction and new syntactic role", misconception: "grammar does not only change through mistakes" },
    { anchor: "sociolinguistics chapters on register and style-shifting", case: "the same speaker changing vocabulary and syntax for a job interview, group chat and lecture", challenge: "explain register as social competence rather than fake identity", method: "identify audience, setting, purpose, status and linguistic choices", misconception: "formal language is not inherently better language" },
  ],
  literature: [
    { anchor: "literature textbook chapters on close reading and textual evidence", case: "a short poem where repeated images change the emotional logic of the speaker", challenge: "make interpretation from diction, imagery and pattern rather than plot summary", method: "quote a small textual detail, name the formal feature and explain its effect", misconception: "close reading is not hunting for a single hidden meaning" },
    { anchor: "narrative chapters on narrator, focalisation and reliability", case: "a first-person narrator whose confidence masks limited knowledge", challenge: "separate author, narrator, implied audience and character perspective", method: "track pronouns, knowledge limits, tone and contradictions", misconception: "the narrator is not automatically the author's voice" },
    { anchor: "symbolism sections on recurrence, association and textual support", case: "a recurring door, bird, colour or weather pattern gathering meaning across a novel", challenge: "show why the symbol is supported by pattern rather than isolated guesswork", method: "collect repetitions, contexts, shifts and contradictions", misconception: "a symbol is not anything the reader personally associates with an object" },
    { anchor: "irony chapters on verbal, dramatic and situational gaps", case: "a scene where the reader knows more than the character and the gap creates judgement", challenge: "explain the gap between statement, intention, knowledge and outcome", method: "identify what is said, what is meant, who knows what and what changes", misconception: "irony is not simply sarcasm or unfortunate coincidence" },
    { anchor: "genre chapters on convention, expectation and deviation", case: "a detective story, tragedy or romance that works by bending expected rules", challenge: "show how genre shapes reading before the plot is even resolved", method: "name conventions, audience expectations and meaningful departures", misconception: "genre is not a marketing shelf label only" },
    { anchor: "intertextuality material on allusion, adaptation and literary conversation", case: "a modern novel echoing a myth, Shakespeare scene or biblical phrase", challenge: "explain how the later text revises the earlier one", method: "identify source text, echo, transformation and new ideological pressure", misconception: "intertextuality is not just spotting references" },
    { anchor: "drama and tragedy sections on conflict, recognition and catastrophe", case: "a protagonist whose flaw matters only because institutions and fate amplify it", challenge: "explain tragedy as structure, not merely sadness", method: "track conflict, reversal, recognition, responsibility and social order", misconception: "tragedy is not any story where someone dies" },
    { anchor: "modernist literature chapters on fragmentation, consciousness and form", case: "a fragmented narrative reflecting memory, urban life or post-war dislocation", challenge: "read difficulty as a formal response to historical pressure", method: "connect broken chronology, perspective shifts and interiority to theme", misconception: "modernist fragmentation is not random confusion" },
    { anchor: "postcolonial reading sections on empire, language and voice", case: "a text where official language collides with local speech, memory or resistance", challenge: "analyse power in narration without reducing the work to a political slogan", method: "ask who speaks, whose history counts and which language carries authority", misconception: "postcolonial reading is not adding empire as an afterthought" },
    { anchor: "poetry chapters on meter, rhythm and sound", case: "a line whose stress pattern reinforces control, hesitation or violence", challenge: "show how rhythm contributes to meaning", method: "scan stresses, notice variation and connect sound to sense", misconception: "meter is not decorative counting detached from interpretation" },
  ],
  marketing: [
    { anchor: "marketing textbook chapters on segmentation and target markets", case: "a fitness app separating beginners, club runners and injured returners", challenge: "define a segment by behaviour and need rather than demographics alone", method: "identify shared need, difference from other groups, reachability and value", misconception: "segmentation is not slicing a market into arbitrary age bands" },
    { anchor: "positioning sections on differentiation and perceptual space", case: "a coffee brand choosing to be understood as craft, convenience or performance fuel", challenge: "state the comparison frame the brand wants to win", method: "name target, category, alternative, difference and reason to believe", misconception: "positioning is not simply what the company says about itself" },
    { anchor: "consumer insight chapters on motivation, friction and research", case: "customers saying they want healthy meals but buying convenience at 8 p.m.", challenge: "turn observed contradiction into a useful insight", method: "separate stated preference, actual behaviour, context and emotional payoff", misconception: "insight is not a fun fact about customers" },
    { anchor: "brand equity sections on memory, associations and trust", case: "a brand commanding preference before the product is examined in detail", challenge: "explain why memory structure can become economic value", method: "track awareness, associations, perceived quality, loyalty and distinctiveness", misconception: "brand equity is not just logo recognition" },
    { anchor: "marketing funnel chapters on awareness, consideration, conversion and loyalty", case: "a landing page with traffic but weak trial signups", challenge: "diagnose the stage where behaviour is breaking", method: "map journey stage, user question, friction and next action", misconception: "the funnel is not a law of nature or a complete customer story" },
    { anchor: "pricing chapters on reference price, value and behavioural framing", case: "monthly versus annual pricing changing perceived affordability", challenge: "explain price as information and incentive, not just revenue", method: "identify reference point, willingness to pay, perceived value and fairness", misconception: "pricing psychology is not tricking people with random numbers" },
    { anchor: "innovation and customer need material behind jobs-to-be-done", case: "a commuter buying a podcast app to make dead time feel useful", challenge: "state the progress the customer is hiring the product to make", method: "separate product category from situation, struggle and desired progress", misconception: "a job is not the same as a demographic persona" },
    { anchor: "social influence sections in consumer behaviour", case: "reviews making an uncertain buyer trust a product they cannot inspect", challenge: "show when others' behaviour becomes evidence and when it becomes herd pressure", method: "identify uncertainty, reference group, credibility and visible adoption", misconception: "social proof is not proof that a choice is objectively good" },
    { anchor: "relationship marketing chapters on satisfaction, loyalty and retention", case: "a subscription product reducing churn through repeated value and lower friction", challenge: "explain retention as value delivery, not email reminders", method: "track onboarding, habit formation, switching cost, support and renewal trigger", misconception: "retention is not trapping customers who want to leave" },
    { anchor: "category and positioning material on market creation", case: "a product teaching buyers to name a problem they previously tolerated", challenge: "explain how category language shapes demand", method: "define old alternative, new problem frame, stakes and category proof", misconception: "category design is not inventing jargon for an ordinary product" },
  ],
  "music-theory": [
    { anchor: "fundamentals chapters on pitch notation, octave equivalence and the guitar fretboard", case: "finding every E across open strings, twelfth fret duplicates and octave shapes", challenge: "explain why one pitch class appears in many playable locations", method: "map string tuning, fret distance, octave displacement and register", misconception: "knowing one note name is not the same as knowing its fretboard geography" },
    { anchor: "interval chapters connected to guitar shapes and string tuning", case: "a major third appearing as different fret shapes across the B-string break", challenge: "show how intervals stay conceptually stable while fingerings change", method: "identify semitone distance, quality, direction, string pair and sound", misconception: "intervals are not just scale numbers or memorised fret gaps" },
    { anchor: "major-scale sections on whole steps, half steps and scale degrees", case: "building G major on one string before shifting it into two-position guitar fingering", challenge: "connect the step pattern to scale degrees and chord construction", method: "track tonic, step pattern, degree names, position shift and available open strings", misconception: "a scale box is not the same as the major scale itself" },
    { anchor: "minor-key chapters on natural, harmonic and melodic minor materials", case: "A minor rhythm guitar moving between Am, Dm and E7 while lead lines raise G sharp over the dominant", challenge: "explain why minor keys often alter notes for harmonic function", method: "compare natural minor collection, raised leading tone, chord function and melodic tendency", misconception: "minor is not just the major scale starting on a different note" },
    { anchor: "triad chapters on root, third, fifth and inversion applied to string sets", case: "C major triads on strings 1-3, 2-4 and 3-5 with different inversions", challenge: "hear and name triads as chord tones rather than full six-string grips", method: "identify root, quality, inversion, string set and top voice", misconception: "a chord is not defined by how many strings are strummed" },
    { anchor: "seventh-chord chapters on chord quality, extensions and chord symbols", case: "G7, Gmaj7, Gm7 and Gm7b5 reduced to compact shell voicings", challenge: "connect chord symbol, chord tones and function without relying on big grips", method: "identify third, seventh, quality, omitted tones and likely resolution", misconception: "seventh chords are not just triads with a decorative extra note" },
    { anchor: "harmony and fretboard-harmony material on inversion, register and voicing", case: "choosing between open C, C/E, a closed triad and a high three-note voicing in the same progression", challenge: "explain how voicing changes texture and bass motion without changing chord identity", method: "track chord tones, bass note, spacing, register, doubling and physical playability", misconception: "inversion is not a different chord merely because the grip looks different" },
    { anchor: "functional-harmony chapters on tonic, predominant and dominant roles", case: "I-vi-IV-V or ii-V-I progressions played as movable shapes up the neck", challenge: "explain why chords create departure, preparation and return", method: "identify key, Roman numeral, chord function, tendency tones and resolution", misconception: "functional harmony is not just assigning Roman numerals after the fact" },
    { anchor: "cadence chapters on phrase endings and harmonic punctuation", case: "a V-I ending strengthened by leading tone resolution and bass motion on guitar", challenge: "show how cadence depends on placement, melody and harmonic arrival", method: "identify phrase boundary, dominant preparation, resolution, bass motion and top voice", misconception: "a cadence is not every chord change that sounds pleasant" },
    { anchor: "rhythm chapters on meter, beat, subdivision and notation", case: "a strumming pattern that accents beats two and four while subdividing sixteenth notes", challenge: "separate meter, subdivision, accent and strumming motion", method: "count pulse, beat grouping, subdivision, rests, ties and attack pattern", misconception: "rhythm is not just strumming continuously until the chord changes" },
    { anchor: "rhythm and popular-music sections on syncopation, anticipation and groove", case: "a funk guitar part placing short chord stabs on offbeats against a steady drummer", challenge: "explain groove through placement and silence as much as through notes", method: "identify weak-beat accent, anticipation, rest, muting and repeated pattern", misconception: "syncopation is not random playing off the beat" },
    { anchor: "modal chapters on scale rotations, tonal centre and characteristic tones", case: "D Dorian over a static Dm7 vamp compared with D natural minor in a progression", challenge: "distinguish modal colour from simply starting a major scale on another degree", method: "identify tonal centre, parent collection, characteristic interval, chord support and drone or vamp", misconception: "modes are not magic scale boxes for soloing over anything" },
    { anchor: "popular-music and blues materials on pentatonic scales, blue notes and phrase vocabulary", case: "minor pentatonic phrases targeting chord tones over a twelve-bar blues", challenge: "explain why the same box can sound musical or aimless depending on targets and phrasing", method: "track scale degree, bend, blue note, call-response, chord tone and rhythmic placement", misconception: "pentatonic fluency is not running the box up and down" },
    { anchor: "counterpoint and harmony material adapted to fretboard voice leading", case: "moving from G7 to Cmaj7 using nearest available thirds and sevenths on middle strings", challenge: "show how small melodic motions inside chords create harmonic clarity", method: "identify guide tones, common tones, semitone resolutions and playable string-set movement", misconception: "voice leading is not only a classical SATB rule for singers" },
    { anchor: "form and phrase chapters on motives, periods, sections and popular-song design", case: "a riff returning as intro, verse hook and solo reference inside a guitar song", challenge: "explain how repetition and variation create larger musical shape", method: "identify motive, phrase, cadence, section, contrast and return", misconception: "form is not just labelling verse and chorus after listening once" },
  ],
  "architecture-urbanism": [
    { anchor: "architecture chapters on boundary, entry and spatial sequence", case: "a shop entrance using steps, glass, lighting and security gates to filter who feels invited", challenge: "explain how a threshold changes behaviour before anyone speaks", method: "identify boundary, transition, visibility, access rule and bodily cue", misconception: "a threshold is not just a doorway" },
    { anchor: "urban design material on pedestrian movement and informal routes", case: "a muddy shortcut across grass beside a paved path", challenge: "show how desire lines reveal user knowledge ignored by planning", method: "compare planned route, actual route, friction, destination and repeated use", misconception: "informal paths are not simply bad behaviour" },
    { anchor: "urbanism sections on streets, squares and civic accessibility", case: "a privately managed plaza that looks public but controls seating, protest and photography", challenge: "separate public appearance from public rights", method: "map ownership, access, rules, surveillance and social use", misconception: "public realm is not any open-looking outdoor space" },
    { anchor: "architecture and urban design material on proportion and bodily comfort", case: "a wide road with blank facades feeling hostile to pedestrians despite good paving", challenge: "explain why scale changes comfort and attention", method: "assess height, frontage, speed, distance, detail and pedestrian perception", misconception: "human scale is not smallness by itself" },
    { anchor: "planning material on land use, street life and daily convenience", case: "a neighbourhood where flats, shops, schools and cafes keep pavements active across the day", challenge: "connect mixed use to safety and ordinary social life", method: "identify uses, hours, walking distance, street frontage and user overlap", misconception: "mixed use is not simply putting shops under any flats" },
    { anchor: "urban safety debates on defensible space, surveillance and exclusion", case: "a housing block redesigned with lighting, sightlines and controlled entry", challenge: "separate stewardship from hostile exclusion", method: "track visibility, ownership cues, access control, maintenance and who is displaced", misconception: "defensible space is not automatically good or democratic" },
    { anchor: "urban economics and planning chapters on density and infrastructure", case: "a dense street with small shops feeling lively while a tower district feels empty", challenge: "explain why density depends on design and use mix", method: "compare people, entrances, services, transit, street edge and dwelling mix", misconception: "density is not the same as overcrowding" },
    { anchor: "architecture sections on circulation and wayfinding", case: "a hospital corridor system that makes visitors lost despite signage", challenge: "explain movement as spatial logic rather than signs alone", method: "map route hierarchy, landmarks, sightlines, decision points and bottlenecks", misconception: "circulation is not only corridors and stairs" },
    { anchor: "urban sociology and planning material on reinvestment and displacement", case: "independent shops replaced by boutiques after a station upgrade", challenge: "connect visible improvement to rent, class and access", method: "track investment, land value, tenure, business mix and resident displacement", misconception: "gentrification is not just making a place nicer" },
    { anchor: "urban sociology material on informal gathering places and social infrastructure", case: "a barber, cafe, library or park bench acting as a regular social anchor", challenge: "show how ordinary places support belonging", method: "identify low barrier, repeat use, conversation, neutrality and local memory", misconception: "third places are not just leisure venues" },
  ],
  "classical-civilisation": [
    { anchor: "classical civilisation chapters on myth, ritual and cultural memory", case: "a brand using Hercules to signal strength and heroic effort", challenge: "explain myth as value-bearing narrative rather than decoration", method: "identify story pattern, divine or heroic role, moral tension and modern use", misconception: "myth does not mean false story in the simple modern sense" },
    { anchor: "Greek history sections on the polis, citizenship and public religion", case: "a city using civic ceremonies, sports and monuments to define belonging", challenge: "connect political identity to place and participation", method: "map citizens, outsiders, assemblies, cult practice and public space", misconception: "the polis was not just a town with walls" },
    { anchor: "Roman political history material on republic, mixed government and anti-monarchy", case: "modern politicians invoking the republic against concentrated executive power", challenge: "separate Roman republican ideals from modern democratic assumptions", method: "compare magistracy, senate, citizen body, liberty and fear of kingship", misconception: "republicanism is not identical with modern party politics" },
    { anchor: "Roman social history material on patronage, status and obligation", case: "a powerful contact opening doors while expecting loyalty and public gratitude", challenge: "explain unequal reciprocity without reducing it to friendship", method: "identify patron, client, benefit, obligation, status and public display", misconception: "patronage is not simply generosity" },
    { anchor: "Hellenistic and Roman philosophy material on Stoic ethics", case: "a person reframing a delayed train as outside their control", challenge: "distinguish ancient Stoic discipline from modern toughness slogans", method: "separate control, judgement, virtue, passion and duty", misconception: "Stoicism is not emotional numbness" },
    { anchor: "Greek drama chapters on tragedy, conflict and civic performance", case: "a film or public scandal staging a respected figure's downfall", challenge: "explain tragedy as structured recognition, not mere sadness", method: "identify error, conflict, reversal, recognition, audience emotion and public meaning", misconception: "tragedy is not just any bad ending" },
    { anchor: "Roman law material on citizenship, property and legal categories", case: "modern legal language around contract, property or citizenship echoing Roman categories", challenge: "show how legal concepts can outlive the society that produced them", method: "track category, right, procedure, status and later inheritance", misconception: "Roman law is not just old rules copied into modern codes" },
    { anchor: "Greek and Roman political ethics material on public service", case: "a school prize, military medal or civic award praising duty over private gain", challenge: "explain virtue as public expectation", method: "identify citizen role, honour, sacrifice, reputation and common good", misconception: "civic virtue is not simply being personally moral" },
    { anchor: "Roman imperial history material on command, roads, law and expansion", case: "a government building using imperial symbols to imply order and authority", challenge: "connect empire to administration as well as conquest", method: "identify command, territory, infrastructure, legal order and symbolic power", misconception: "imperium is not only military aggression" },
    { anchor: "reception studies material on antiquity in later culture", case: "a neoclassical museum, bank or courthouse borrowing columns and Latin mottos", challenge: "separate ancient meaning from modern prestige work", method: "compare source motif, later context, intended audience and ideological effect", misconception: "classical reception is not passive copying" },
  ],
  geopolitics: [
    { anchor: "international relations material on trade routes and maritime chokepoints", case: "shipping delays through a canal raising delivery costs for ordinary goods", challenge: "connect a narrow route to global price and security effects", method: "map route, alternative, cargo, actor control and vulnerability", misconception: "a chokepoint is not just a busy place on a map" },
    { anchor: "political science sections on great powers and regional influence", case: "a larger state pressuring neighbours over military alignment or trade policy", challenge: "explain influence without assuming formal occupation", method: "identify power, dependency, red line, local agency and alliance options", misconception: "sphere of influence is not the same as legal sovereignty" },
    { anchor: "political economy material on energy dependence and national security", case: "household energy bills rising after a gas supply dispute", challenge: "link domestic prices to infrastructure and foreign policy", method: "trace fuel source, pipeline or shipping route, storage, supplier and substitute", misconception: "energy security is not only having enough fuel underground" },
    { anchor: "geopolitical history material on borderlands and rival powers", case: "a country between alliances facing pressure from both sides", challenge: "show how location creates risk and bargaining power", method: "map neighbours, terrain, alliance choices, economy and military exposure", misconception: "buffer states are not empty cushions between real actors" },
    { anchor: "international political economy chapters on sanctions and coercion", case: "banking restrictions changing what ordinary firms can import", challenge: "explain sanctions through cost, adaptation and signalling", method: "identify target, mechanism, enforcement, secondary effects and evasion routes", misconception: "sanctions are not cost-free moral statements" },
    { anchor: "geopolitical and naval history material on sea power", case: "a port expansion changing a country's trade and military options", challenge: "connect maritime access to economic and strategic reach", method: "track ports, fleet, routes, allies, cargo and naval protection", misconception: "sea power is not just having ships" },
    { anchor: "development and political economy material on resources and institutions", case: "oil wealth funding public spending while weakening accountability", challenge: "explain why valuable resources can destabilise politics", method: "compare rent, taxation, institutions, corruption risk and external buyers", misconception: "resource curse means resources always make countries poor" },
    { anchor: "population and international relations material on demographic transition", case: "an ageing country redesigning immigration, pensions and defence priorities", challenge: "connect age structure to policy pressure", method: "track birth rates, dependency ratio, labour market, migration and welfare costs", misconception: "demography is not destiny, but it changes constraints" },
    { anchor: "military geography material on space, depth and defence", case: "a state valuing territory because it creates time before core cities are threatened", challenge: "show how distance can become strategic resource", method: "identify terrain, transport routes, population centres, warning time and defensive layers", misconception: "strategic depth is not just wanting more land" },
    { anchor: "international relations sections on culture, legitimacy and attraction", case: "a country's films, universities or sport shaping foreign admiration", challenge: "explain influence without coercion", method: "identify audience, cultural appeal, credibility, institution and policy spillover", misconception: "soft power is not simply good public relations" },
  ],
  "history-of-ideas": [
    { anchor: "modern history material on Enlightenment, industrialisation and reform", case: "a tech advert promising that every update makes life better", challenge: "show how progress becomes a moral assumption", method: "trace improvement claim, historical direction, evidence and excluded cost", misconception: "progress is not the same as change" },
    { anchor: "political philosophy material on freedom, rights and domination", case: "a workplace policy described as flexible by managers and insecure by workers", challenge: "distinguish kinds of liberty in ordinary language", method: "compare non-interference, self-rule, dependency and institutional constraint", misconception: "liberty is not one simple thing everyone means the same way" },
    { anchor: "intellectual history material on individuality and modern subjectivity", case: "a self-tracking app treating mood, productivity and identity as personal optimisation", challenge: "explain the modern self as historically formed", method: "identify inner life, measurement, autonomy, discipline and social expectation", misconception: "the self is not just a private natural fact" },
    { anchor: "history of science and environmental thought material on nature", case: "a product labelled natural to imply health, purity and moral superiority", challenge: "separate nature as fact from nature as value", method: "identify descriptive claim, normative claim, origin story and commercial use", misconception: "natural does not automatically mean good or harmless" },
    { anchor: "world history material on civilisation, empire and hierarchy", case: "a political speech contrasting civilised order with barbaric disorder", challenge: "expose hierarchy inside civilisation language", method: "track speaker, standard of refinement, excluded group and political use", misconception: "civilisation is not a neutral compliment" },
    { anchor: "Enlightenment and philosophy material on reason and critique", case: "a policy debate presenting data as if values were not involved", challenge: "show how reason can clarify without eliminating judgement", method: "separate evidence, inference, value assumption and practical choice", misconception: "reason is not the absence of emotion or interest" },
    { anchor: "modern political history material on nationalism and imagined communities", case: "flags, anthems and school histories making strangers feel part of one people", challenge: "explain nationhood as constructed and powerful", method: "identify memory, territory, symbol, institution and boundary", misconception: "nation is not simply ethnicity or state bureaucracy" },
    { anchor: "social and political thought material on merit, equality and education", case: "exam results treated as proof of personal worth despite unequal preparation", challenge: "ask what counts as merit and who gets to display it", method: "compare talent, effort, credential, opportunity and gatekeeping", misconception: "meritocracy is not automatically fair because it rewards achievement" },
    { anchor: "modern cultural history material on authenticity and the self", case: "a cafe, influencer or musician selling authenticity through curated roughness", challenge: "explain authenticity as a cultural ideal with conventions", method: "identify origin claim, sincerity signal, audience expectation and market value", misconception: "authenticity is not free from performance" },
    { anchor: "modernity chapters on industrialisation, bureaucracy and acceleration", case: "calendar alerts, commuting systems and performance dashboards shaping daily time", challenge: "connect ordinary speed to historical institutions", method: "track technology, bureaucracy, clock time, productivity and social discipline", misconception: "modernity is not just anything recent" },
  ],
  "military-strategy": [
    { anchor: "Clausewitzian strategy material on friction and uncertainty", case: "a simple event plan failing through weather, late transport and confused instructions", challenge: "explain why execution changes plans", method: "identify plan, uncertainty, delay, human error and adaptation", misconception: "friction is not an excuse for poor preparation" },
    { anchor: "strategy chapters on decisive sources of strength", case: "a competitor sustained less by one product than by supply chain, trust and cash reserves", challenge: "identify what actually holds resistance together", method: "map objective, opponent system, dependency, vulnerability and political effect", misconception: "centre of gravity is not always headquarters or a leader" },
    { anchor: "military history material on supply, transport and sustainment", case: "a campaign limited by fuel, food, spare parts and road access", challenge: "show how support determines possible action", method: "track supply source, route, consumption, distance and protection", misconception: "logistics is not background administration" },
    { anchor: "international security material on deterrence and credibility", case: "a warning only working if the opponent believes capability and willingness", challenge: "separate threat from credible deterrent", method: "identify actor, capability, communication, resolve and opponent perception", misconception: "deterrence is not just making a scary statement" },
    { anchor: "operational theory material on manoeuvre, tempo and position", case: "a weaker team winning by changing position faster than a stronger opponent can respond", challenge: "explain advantage through movement rather than direct strength", method: "track position, tempo, surprise, objective and opponent dislocation", misconception: "manoeuvre is not merely moving around" },
    { anchor: "intelligence material on information, uncertainty and deception", case: "a decision made from partial reports, rumours and misleading signals", challenge: "show why information quality changes strategy", method: "compare source, reliability, gap, deception risk and decision need", misconception: "intelligence is not the same as certainty" },
    { anchor: "military sociology and history material on morale and cohesion", case: "a team continuing under pressure because trust and purpose remain intact", challenge: "explain will as strategic resource", method: "identify cohesion, leadership, belief, fatigue and perceived chance of success", misconception: "morale is not just enthusiasm" },
    { anchor: "security studies material on insurgency and asymmetric conflict", case: "a small actor avoiding direct battle while using time, terrain and publicity", challenge: "explain unequal conflict without assuming conventional victory rules", method: "map actor strength, weakness, audience, sanctuary, method and political aim", misconception: "asymmetric warfare is not simply unfair fighting" },
    { anchor: "operational art material on campaigns and strategic linkage", case: "several local wins failing to produce the intended political outcome", challenge: "connect tactical success to campaign purpose", method: "identify battle, campaign, objective, sequencing and culminating point", misconception: "winning engagements is not the same as winning the war" },
    { anchor: "law of armed conflict material on constraint and legitimacy", case: "a commander limited by civilian risk, coalition rules and political consequence", challenge: "explain constraint as part of strategy", method: "identify authority, permitted action, target, proportionality and legitimacy cost", misconception: "rules of engagement are not optional politeness" },
  ],
  psychology: [
    { anchor: "cognitive psychology chapters on attention and selective processing", case: "checking a phone while reading and losing the thread repeatedly", challenge: "explain attention as limited selection", method: "identify stimulus competition, goal, salience, switching cost and environment", misconception: "attention failure is not always lack of character" },
    { anchor: "memory chapters on working memory capacity and cognitive load", case: "forgetting a multi-step instruction while trying to solve a problem", challenge: "connect overload to limited mental workspace", method: "track items held, manipulation demand, distraction and chunking", misconception: "working memory is not general intelligence" },
    { anchor: "learning chapters on association and conditioned responses", case: "feeling tense after hearing an email notification linked to criticism", challenge: "explain emotional response through learned association", method: "identify neutral cue, unconditioned event, pairing and conditioned response", misconception: "conditioning is not only training animals" },
    { anchor: "behaviourism chapters on reinforcement and consequence", case: "refreshing an app because occasional rewards keep the behaviour alive", challenge: "show how consequences shape repetition", method: "identify behaviour, reward schedule, punishment, extinction and context", misconception: "reinforcement is not the same as bribery" },
    { anchor: "cognition chapters on heuristics, bias and judgement", case: "overestimating danger after seeing one vivid news story", challenge: "separate useful shortcut from systematic error", method: "identify uncertainty, heuristic, evidence base, error direction and correction", misconception: "bias does not mean stupidity" },
    { anchor: "social psychology material on group membership and identity", case: "a sports shirt changing how strangers interpret someone's behaviour", challenge: "show how group labels affect perception", method: "identify in-group, out-group, stereotype, status and context", misconception: "social identity is not just personal preference" },
    { anchor: "stress and health psychology chapters on appraisal and coping", case: "the same deadline feeling motivating one week and overwhelming the next", challenge: "explain stress through demand and perceived resources", method: "compare stressor, appraisal, bodily response, coping and duration", misconception: "stress is not always bad or always external" },
    { anchor: "motivation chapters on intrinsic, extrinsic and goal-directed behaviour", case: "a habit fading once rewards stop because the activity never felt meaningful", challenge: "connect motivation to value, expectancy and friction", method: "identify goal, incentive, autonomy, competence, feedback and barrier", misconception: "motivation is not a fixed internal fuel tank" },
    { anchor: "developmental and relationship psychology material on attachment", case: "someone reading delayed replies as rejection despite little evidence", challenge: "discuss attachment patterns without diagnosing", method: "identify expectation, threat cue, regulation strategy and relational context", misconception: "attachment style is not a permanent personality type" },
    { anchor: "cognitive psychology material on monitoring and regulating thought", case: "realising confidence was high because the task felt familiar, not because answers were correct", challenge: "explain thinking about thinking", method: "compare confidence, strategy, error feedback, planning and adjustment", misconception: "metacognition is not just overthinking" },
  ],
  "rhetoric-argumentation": [
    { anchor: "rhetoric chapters on credibility and speaker character", case: "a doctor, celebrity or founder being believed before evidence is inspected", challenge: "explain credibility as constructed and relevant but not decisive", method: "identify expertise, character, goodwill, context and evidence gap", misconception: "ethos is not automatic truth" },
    { anchor: "rhetoric chapters on emotional appeal and audience response", case: "a charity advert using one vivid story to make a large problem feel urgent", challenge: "separate legitimate emotion from emotional shortcut", method: "identify feeling, audience value, image, claim and missing scale", misconception: "pathos is not always manipulation" },
    { anchor: "argumentation chapters on reasons, evidence and inference", case: "a workplace proposal supported by clear figures but a weak causal link", challenge: "check whether evidence supports the claim", method: "identify claim, premise, warrant, data and conclusion", misconception: "logos is not just including numbers" },
    { anchor: "classical rhetoric material on timing and occasion", case: "the same apology landing differently before and after public evidence emerges", challenge: "explain why timing changes persuasiveness", method: "track occasion, audience mood, urgency, constraint and opportunity", misconception: "kairos is not simply acting quickly" },
    { anchor: "composition chapters on framing, context and emphasis", case: "a headline describing a protest as unrest or civic action", challenge: "show how wording selects interpretation", method: "identify frame, excluded frame, loaded term, audience and implied cause", misconception: "framing is not only lying" },
    { anchor: "classical argumentation material on unstated premises", case: "an advert implying successful people use a product without saying it directly", challenge: "recover the missing assumption", method: "identify stated claim, audience belief, missing premise and conclusion", misconception: "enthymeme is not a failed syllogism" },
    { anchor: "logic and writing material on fallacies and weak reasoning", case: "a debate shifting from evidence to attacking the speaker's motives", challenge: "name the error without using the label as a substitute for analysis", method: "identify claim, support, error pattern and why it weakens inference", misconception: "fallacy spotting is not a way to automatically win arguments" },
    { anchor: "argumentation chapters on burden of proof and evidence standards", case: "someone demanding others disprove an unsupported claim", challenge: "explain who owes evidence and why", method: "identify claimant, risk, standard, available evidence and default position", misconception: "burden of proof is not whoever feels most challenged" },
    { anchor: "critical thinking material on charitable reconstruction", case: "rewriting an opponent's clumsy point into its strongest serious form", challenge: "distinguish fairness from agreement", method: "identify core claim, best evidence, strongest version and real objection", misconception: "steelman is not making the other side look correct at all costs" },
    { anchor: "rhetoric and narrative material on examples, plot and moral direction", case: "a founder story making a company seem inevitable and virtuous", challenge: "show how story selects causes and values", method: "identify protagonist, conflict, sequence, lesson and omitted alternatives", misconception: "narrative persuasion is not only fiction" },
  ],
  "systems-thinking": [
    { anchor: "systems-thinking chapters on reinforcing and balancing feedback", case: "stress causing poor sleep, which causes more stress the next day", challenge: "explain circular causation", method: "identify variable, direction, reinforcement or balance, and loop behaviour", misconception: "feedback is not just receiving comments" },
    { anchor: "systems material on stocks, flows and accumulation", case: "a bank balance changing through income and spending rates", challenge: "separate level from rate", method: "identify stock, inflow, outflow, time period and net change", misconception: "a stock is not the same as a flow" },
    { anchor: "systems chapters on delays and unintended timing effects", case: "training harder for a week before fatigue appears later", challenge: "show how delayed effects distort judgement", method: "identify action, lag, visible signal, hidden accumulation and response timing", misconception: "delay does not mean nothing is happening" },
    { anchor: "systems-thinking material on leverage points and intervention depth", case: "changing phone notification defaults instead of relying on willpower", challenge: "explain why structure beats repeated effort", method: "compare parameter, rule, information flow, goal and mindset", misconception: "leverage point is not simply the biggest visible problem" },
    { anchor: "operations and systems material on constraints", case: "a team improving every step except the approval queue that controls throughput", challenge: "locate the limiting step", method: "map process, capacity, queue, dependency and downstream effect", misconception: "a bottleneck is not just anything annoying" },
    { anchor: "systems material on policy resistance and side effects", case: "a discount increasing sales but training customers to wait for discounts", challenge: "trace the behaviour created by the fix", method: "identify intervention, actor response, feedback, side effect and time horizon", misconception: "unintended consequences are not always unpredictable accidents" },
    { anchor: "systems and sustainability material on resilience and buffers", case: "a household budget surviving a surprise bill because it has slack", challenge: "explain resilience through capacity and recovery", method: "identify disturbance, buffer, redundancy, adaptation and recovery path", misconception: "resilience is not maximum efficiency" },
    { anchor: "complex systems material on emergence and collective behaviour", case: "traffic jams appearing without one driver causing them", challenge: "show how local interactions create large patterns", method: "identify agents, rules, interaction, threshold and macro pattern", misconception: "emergence is not magic" },
    { anchor: "systems-thinking chapters on boundaries and framing", case: "a workplace burnout problem framed as individual time management or staffing design", challenge: "show how system boundary changes explanation", method: "identify included variables, excluded actors, time scale and responsibility", misconception: "the boundary is not given by nature" },
    { anchor: "systems and organisational behaviour material on incentives", case: "a sales target encouraging short-term deals that damage retention", challenge: "connect repeated behaviour to reward structure", method: "identify metric, reward, actor adaptation, side effect and redesigned incentive", misconception: "bad outcomes are not always caused by bad people" },
  ],
  "pharmaceutical-businesses": [
    { anchor: "drug development references on target identification and lead discovery", case: "a company pursuing a biological pathway with promising lab evidence but uncertain clinical relevance", challenge: "separate scientific plausibility from developable asset", method: "identify target, mechanism, candidate, unmet need and translational risk", misconception: "drug discovery is not simply finding a cure in a lab" },
    { anchor: "preclinical development material on toxicology and animal/in vitro evidence", case: "a candidate showing activity in cells but raising safety concerns before first-in-human studies", challenge: "explain why preclinical success is necessary but not decisive", method: "track pharmacology, toxicology, dose, formulation and human relevance", misconception: "preclinical evidence is not proof a medicine works in patients" },
    { anchor: "clinical research sections on Phase I, II and III trials", case: "a Phase II signal that must be confirmed in a larger controlled trial", challenge: "match each phase to the question it is designed to answer", method: "identify population, endpoint, comparator, randomisation and statistical power", misconception: "a trial phase is not a quality ranking from weak to strong" },
    { anchor: "regulatory affairs material on evidence packages and submissions", case: "a dossier needing to persuade regulators on safety, efficacy and manufacturing quality", challenge: "explain regulation as evidence judgement, not paperwork", method: "map claims to data modules, risk management and labelling decisions", misconception: "regulatory affairs is not just compliance bureaucracy" },
    { anchor: "market access material on reimbursement, value and payer evidence", case: "an approved drug failing uptake because payers question comparative benefit", challenge: "explain why approval and access are different hurdles", method: "identify payer, comparator, budget impact, outcomes and eligible population", misconception: "market access does not begin after launch; evidence strategy starts earlier" },
    { anchor: "pricing and reimbursement sections on affordability and innovation incentives", case: "a high-cost rare disease therapy forcing trade-offs between access and R&D incentives", challenge: "analyse price through payer, patient, company and health-system lenses", method: "compare value, budget impact, alternatives, exclusivity and equity", misconception: "medicine price is not explained by manufacturing cost alone" },
    { anchor: "medical affairs material on scientific exchange and evidence generation", case: "medical science liaisons discussing emerging data with clinicians before broad adoption", challenge: "separate education, evidence and promotion", method: "identify clinical question, data gap, stakeholder and compliant exchange", misconception: "medical affairs is not just sales with more scientific language" },
    { anchor: "pharmacovigilance material on post-market safety monitoring", case: "rare adverse events emerging only after broad real-world use", challenge: "explain why approval does not end evidence generation", method: "track signal detection, causality, reporting, label updates and risk minimisation", misconception: "a safe trial result does not mean no future safety learning" },
    { anchor: "portfolio and patent material on exclusivity, generics and lifecycle management", case: "a blockbuster facing generic entry after loss of exclusivity", challenge: "connect patent expiry to revenue, investment and portfolio strategy", method: "identify exclusivity period, generic/biosimilar threat, lifecycle option and pipeline gap", misconception: "a patent cliff is not just a legal date; it is a strategic shock" },
    { anchor: "life-sciences CRM material on compliant field engagement and account planning", case: "a field team using regulated CRM workflows to document HCP interactions", challenge: "explain why pharma CRM is shaped by compliance as much as sales efficiency", method: "map territory, account, interaction, consent, content approval and audit trail", misconception: "life sciences CRM is not generic sales software with doctor names added" },
  ],
  philosophy: [
    { anchor: "logic textbook chapters on validity, soundness and argument form", case: "an argument with true-sounding premises whose conclusion does not follow", challenge: "separate validity from truth and persuasiveness", method: "identify premises, conclusion, inference pattern and possible counterexample", misconception: "valid does not mean factually true" },
    { anchor: "epistemology material on knowledge, belief and justification", case: "a justified belief that turns out true by luck", challenge: "explain why true belief may still fall short of knowledge", method: "compare belief, truth, justification, reliability and luck", misconception: "knowledge is not just strong confidence" },
    { anchor: "ethics textbook chapters on consequentialism", case: "a policy that harms a few but greatly benefits many", challenge: "state the utilitarian calculation and the objection it invites", method: "identify affected parties, consequences, measurement of wellbeing and distribution", misconception: "utilitarianism is not simply doing whatever feels useful" },
    { anchor: "ethics chapters on Kantian duty, rights and universalisation", case: "lying for convenience in a way that could not be universalised", challenge: "explain why duty can constrain beneficial outcomes", method: "test maxim, respect for persons, universalisation and rights", misconception: "deontology is not blind rule-following without reasons" },
    { anchor: "virtue ethics chapters on character and flourishing", case: "a habit that produces discipline, courage or vanity over time", challenge: "analyse an action by the character it cultivates", method: "identify virtue, vice, practical wisdom, habit and flourishing", misconception: "virtue ethics is not just being a nice person" },
    { anchor: "philosophy of mind material on consciousness and physical explanation", case: "pain described both as neural activity and first-person experience", challenge: "state what physical explanation seems to leave out", method: "separate correlation, reduction, subjective experience and explanatory gap", misconception: "mind-body debate is not solved by saying the brain is involved" },
    { anchor: "free will material on determinism, agency and responsibility", case: "a choice shaped by upbringing, biology and immediate reasons", challenge: "explain whether responsibility requires alternative possibilities", method: "distinguish determinism, coercion, reasons-responsiveness and moral blame", misconception: "free will is not simply doing whatever you want" },
    { anchor: "political philosophy material on consent, obligation and legitimacy", case: "citizens obeying laws they never personally signed", challenge: "explain why social contract theory tries to justify authority", method: "identify state of nature, consent, benefit, obligation and dissent", misconception: "the social contract is not usually a literal historical contract" },
    { anchor: "personal identity material on memory, body and psychological continuity", case: "a person changing radically through memory loss or future uploading thought experiments", challenge: "explain what must persist for someone to remain the same person", method: "compare bodily continuity, memory, character and narrative identity", misconception: "identity over time is not solved by having the same name" },
    { anchor: "ethics and ancient philosophy material on happiness, meaning and flourishing", case: "a life with pleasure, achievement and status but little reflection or virtue", challenge: "compare competing accounts of a life going well", method: "distinguish pleasure, desire satisfaction, virtue, meaning and objective goods", misconception: "the good life is not just whatever someone happens to want" },
  ],
  politics: [
    { anchor: "politics textbook chapters on power, authority and influence", case: "a minister, media owner or platform changing behaviour without direct force", challenge: "distinguish visible coercion from agenda-setting and soft power", method: "identify actor, resource, target, compliance mechanism and resistance", misconception: "power is not only what governments do" },
    { anchor: "legitimacy sections on consent, law and rightful rule", case: "a government winning office legally but losing public trust", challenge: "explain the gap between legal power and accepted authority", method: "compare legality, consent, performance, tradition and procedural fairness", misconception: "legitimacy is not the same as popularity" },
    { anchor: "state formation chapters on sovereignty, territory and monopoly of legitimate force", case: "a crisis where courts, police, local governments and central government clash", challenge: "distinguish the state from the government of the day", method: "identify institutions, territory, law, coercive capacity and sovereignty", misconception: "the state is not just politicians" },
    { anchor: "democracy chapters on participation, representation and accountability", case: "high-turnout elections with weak media freedom or unequal participation", challenge: "explain why elections alone do not exhaust democracy", method: "assess participation, competition, rights, accountability and rule of law", misconception: "democracy is not simply majority preference" },
    { anchor: "ideology sections on liberalism, rights and limited government", case: "a dispute over free speech, privacy or state surveillance", challenge: "connect individual liberty to institutional limits", method: "identify right, interference, justification, consent and harm", misconception: "liberalism is not just being socially permissive" },
    { anchor: "ideology sections on conservatism, tradition and organic society", case: "resistance to rapid constitutional reform despite acknowledged problems", challenge: "explain caution as a theory of knowledge and social order", method: "identify inherited institution, risk of change, authority and continuity", misconception: "conservatism is not simply dislike of change" },
    { anchor: "ideology sections on socialism, equality and class power", case: "a debate over public ownership, unions or redistribution", challenge: "separate moral equality claims from institutional design", method: "identify ownership, class relation, distribution, state role and democracy", misconception: "socialism is not any government spending" },
    { anchor: "populism literature on people, elites and anti-pluralist rhetoric", case: "a leader claiming only they represent the real people", challenge: "explain why populism can be democratic in language but anti-institutional in practice", method: "identify people/elite framing, excluded groups, leader claim and institutional target", misconception: "populism is not just popular policy" },
    { anchor: "federalism chapters on divided sovereignty and levels of government", case: "public health or education policy split between national and regional authorities", challenge: "explain why divided power can protect liberty and create coordination problems", method: "map competences, fiscal authority, conflict resolution and accountability", misconception: "federalism is not simple decentralisation" },
    { anchor: "public policy chapters on agenda-setting, implementation and evaluation", case: "a manifesto promise failing during delivery because incentives and capacity were ignored", challenge: "analyse policy beyond announcement and intention", method: "track problem definition, instrument, implementation, stakeholder and outcome measure", misconception: "policy is not the same as political messaging" },
  ],
  science: [
    { anchor: "science textbook sections on hypothesis and testability", case: "a claim that a plant grows faster under one light condition than another", challenge: "turn a vague idea into a testable explanatory claim", method: "state independent variable, dependent variable, prediction and possible disconfirmation", misconception: "a hypothesis is not a wild guess" },
    { anchor: "philosophy of science and method sections on falsifiability", case: "a claim adjusted after every failed prediction so it can never be wrong", challenge: "explain why possible failure matters for scientific status", method: "name the observation that would count against the claim", misconception: "falsifiable does not mean false" },
    { anchor: "experimental design chapters on controls and variables", case: "testing a supplement while controlling sleep, training and diet", challenge: "explain why comparison groups make causal inference stronger", method: "identify control group, variable isolation, randomisation and measurement", misconception: "an experiment is not just trying something and seeing what happens" },
    { anchor: "research literacy sections on correlation, causation and confounding", case: "people who exercise more also reporting better mood", challenge: "show why association alone does not identify cause", method: "ask about confounders, temporal order, mechanism and experimental evidence", misconception: "correlation is not useless; it is just limited" },
    { anchor: "scientific communication sections on peer review", case: "a dramatic preprint headline later revised after expert criticism", challenge: "explain peer review as filter, not guarantee", method: "distinguish submission, reviewer critique, revision, publication and replication", misconception: "peer-reviewed does not mean certainly true" },
    { anchor: "research methods material on replication and reproducibility", case: "a psychology or biomedical finding that fails in a larger independent sample", challenge: "explain why replication tests durability rather than originality", method: "compare protocol, sample, measurement, effect size and independent repetition", misconception: "a failed replication does not always mean fraud" },
    { anchor: "statistics sections on significance, null hypotheses and effect size", case: "a large study finding a statistically significant but tiny effect", challenge: "separate statistical signal from practical importance", method: "compare p-value, confidence interval, effect size and study design", misconception: "statistical significance does not mean important or certain" },
    { anchor: "model sections on representation, simplification and prediction", case: "a climate, epidemiological or biological model simplifying complex systems", challenge: "explain what the model includes, excludes and predicts", method: "identify assumptions, variables, mechanism, validation and scope", misconception: "a model is not a miniature copy of reality" },
    { anchor: "biology textbook chapters on natural selection and population change", case: "antibiotic resistance increasing because some variants survive treatment", challenge: "explain adaptation without implying intention", method: "track variation, heritability, differential survival and population frequency", misconception: "individual organisms do not evolve because they need to" },
    { anchor: "history/philosophy of science material on paradigms and normal science", case: "a new framework changing which questions scientists consider legitimate", challenge: "explain paradigm shift without making science sound irrational", method: "distinguish anomaly, crisis, new framework and changed standards", misconception: "paradigm shift is not any new discovery" },
  ],
  "social-engineering": [
    { anchor: "consumer behaviour and human-factors material on influence mechanisms", case: "a salesperson, manager or interface changing behaviour through framing and timing", challenge: "analyse influence without assuming all influence is abusive", method: "identify cue, target motivation, consent, transparency and outcome", misconception: "influence is not automatically manipulation" },
    { anchor: "security-awareness material on authority cues and verification", case: "an email appearing to come from a boss, bank or platform administrator", challenge: "explain why authority accelerates compliance", method: "check identity, channel, urgency, request and independent verification", misconception: "authority is not evidence unless it is verified" },
    { anchor: "social influence material on reciprocity and obligation", case: "a small favour creating pressure to share information or accept a bad deal", challenge: "distinguish genuine reciprocity from engineered indebtedness", method: "identify gift, timing, requested return and proportionality", misconception: "reciprocity is not always kindness; it can be leveraged" },
    { anchor: "behavioural material on scarcity, urgency and loss aversion", case: "a countdown timer pressuring a user to buy or disclose information", challenge: "explain how urgency suppresses verification", method: "identify scarcity claim, deadline, evidence and cost of waiting", misconception: "scarcity is not proof of value" },
    { anchor: "consumer behaviour material on social proof and reference groups", case: "fake reviews or visible popularity making a risky action seem normal", challenge: "explain when group behaviour becomes persuasive evidence", method: "check uncertainty, reference group, authenticity and relevance", misconception: "many people doing something does not make it safe" },
    { anchor: "security material on pretexting and identity claims", case: "someone posing as IT support to reset credentials or gather internal details", challenge: "analyse the story that makes the request seem legitimate", method: "identify role, script, emotional pressure, requested action and verification gap", misconception: "pretexting is not only a technical attack; it is social role-play" },
    { anchor: "security-awareness material on phishing cues and response", case: "a message combining urgency, link redirection and credential request", challenge: "explain the anatomy of the attack without teaching exploitation steps", method: "inspect sender, link, request, emotional cue and safe reporting path", misconception: "phishing is not only badly spelled emails" },
    { anchor: "elicitation material from security and interpersonal influence contexts", case: "casual conversation drawing out project names, travel plans or internal processes", challenge: "show how information can be extracted without direct questioning", method: "track topic opening, flattery, reciprocity, silence and disclosure", misconception: "elicitation is not always an obvious interrogation" },
    { anchor: "dark-pattern and consumer protection material on interface manipulation", case: "a cancellation flow that hides the exit and emphasises fear of loss", challenge: "read interface design as behavioural steering", method: "identify user goal, friction, asymmetry, default and hidden cost", misconception: "bad UX is not always accidental" },
    { anchor: "ethics material on persuasion, autonomy and consent", case: "a coach, teacher or marketer influencing behaviour transparently for the user's benefit", challenge: "define the line between persuasion and coercion", method: "check truthfulness, consent, agency, proportionality and reversibility", misconception: "ethical persuasion is not weak persuasion" },
  ],
  sociology: [
    { anchor: "sociology textbook chapters on structure and agency", case: "career choices shaped by school quality, networks and local labour markets", challenge: "connect individual action to patterned constraints", method: "identify institution, norm, resource distribution and agency within limits", misconception: "social structure does not mean individuals have no choices" },
    { anchor: "norms chapters on informal rules and sanctions", case: "a group chat, workplace or classroom enforcing unwritten rules", challenge: "show how norms become visible when someone breaks them", method: "identify expectation, violation, sanction and group boundary", misconception: "norms are not only formal laws" },
    { anchor: "socialisation sections on family, school, peers and media", case: "a child learning gender, class or achievement expectations before choosing them consciously", challenge: "explain learning of social roles without assuming passive programming", method: "track agents of socialisation, rewards, modelling and internalisation", misconception: "socialisation is not brainwashing" },
    { anchor: "stratification chapters on class, income, wealth and life chances", case: "two students with similar talent but different housing, networks and financial buffers", challenge: "show how class shapes opportunity beyond income", method: "compare wealth, education, cultural capital, security and mobility", misconception: "class is not just how much someone earns this month" },
    { anchor: "status and social hierarchy material", case: "a low-paid role receiving prestige while a necessary role receives little honour", challenge: "separate economic value from social honour", method: "identify status markers, audience, role expectations and recognition", misconception: "status is not the same as money or formal authority" },
    { anchor: "role theory sections on expectations and conflict", case: "a worker, parent and student facing incompatible demands at the same time", challenge: "explain stress as a conflict of roles, not just poor time management", method: "map roles, expectations, sanctions and incompatible obligations", misconception: "role conflict is not personal weakness" },
    { anchor: "bureaucracy chapters on rational-legal authority and organisation", case: "a hospital, school or welfare office using rules that are efficient and impersonal", challenge: "explain bureaucracy's strengths and dehumanising risks", method: "identify hierarchy, written rules, specialisation, records and discretion", misconception: "bureaucracy is not just any annoying paperwork" },
    { anchor: "deviance chapters on labelling, norms and power", case: "the same behaviour treated as harmless in one group and deviant in another", challenge: "ask who has the power to label behaviour as deviant", method: "identify norm, violation, label, sanction and social status of actor", misconception: "deviance is not simply bad behaviour" },
    { anchor: "social capital material on networks and resources", case: "a job opportunity travelling through friends, alumni or professional contacts", challenge: "explain how relationships become unequal resources", method: "map network tie, trust, information flow and gatekeeping", misconception: "social capital is not just knowing lots of people" },
    { anchor: "Durkheimian material on anomie, regulation and social change", case: "rapid economic change weakening shared expectations about success and belonging", challenge: "explain normlessness as social condition, not just personal aimlessness", method: "identify disrupted norms, weakened regulation, aspiration gap and social consequence", misconception: "anomie is not ordinary boredom" },
  ],
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

function neighbouringConcepts(topic: LearningTopicId, concept: string) {
  const alternatives = topicLessonSeeds[topic]
    .map((seed) => seed.concept)
    .filter((item) => item !== concept);

  return alternatives.slice(0, 3);
}

function lessonDetailFor(topic: LearningTopicId, seedIndex: number) {
  const seed = topicLessonSeeds[topic][seedIndex];

  return (
    topicLessonDetails[topic]?.[seedIndex] ?? {
      anchor: `${topicProfiles[topic].topic.label} textbook material for ${seed?.concept ?? "this concept"}`,
      case: articleFrames[topic].caseWorld,
      challenge: `explain ${seed?.concept ?? "the concept"} through evidence rather than recognition`,
      method: articleFrames[topic].evidenceStandard.toLowerCase(),
      misconception: "treating the concept as a label rather than an argument",
    }
  );
}

function pickVariant<T>(items: T[], index: number) {
  return items[index % items.length];
}

function formatSourceNames(sourceNames: string[]) {
  if (sourceNames.length <= 1) {
    return sourceNames[0] ?? "the source material";
  }

  if (sourceNames.length === 2) {
    return `${sourceNames[0]} and ${sourceNames[1]}`;
  }

  return `${sourceNames.slice(0, -1).join(", ")} and ${sourceNames.at(-1)}`;
}

function sentenceStart(value: string) {
  return value.length ? `${value[0].toUpperCase()}${value.slice(1)}` : value;
}

function buildQuestions(
  seed: LessonSeed,
  topic: LearningTopicId,
  slug: string,
  detail: LessonDetail,
): LearningQuestion[] {
  const frame = articleFrames[topic];
  const [firstAlt, secondAlt, thirdAlt] = neighbouringConcepts(
    topic,
    seed.concept,
  );

  return [
    {
      choices: [
        { id: "a", label: seed.focus },
        {
          id: "b",
          label: firstAlt
            ? `mainly the same as ${firstAlt}`
            : "a label for any difficult example",
        },
        {
          id: "c",
          label: `a shortcut for avoiding ${frame.evidenceStandard.toLowerCase()}`,
        },
        {
          id: "d",
          label: "a personal reaction that does not need source-based support",
        },
      ],
      correctChoiceId: "a",
      dimension: "depth",
      explanation: `${seed.concept} is best understood as ${seed.focus}. The lesson anchors that definition in ${detail.anchor}, so the term has to do interpretive work rather than sit as vocabulary.`,
      id: `${slug}-knowledge`,
      prompt: `Which definition best captures ${seed.concept} as used in the article?`,
    },
    {
      choices: [
        {
          id: "a",
          label: `Use this method: ${detail.method}; then compare ${seed.concept} with ${firstAlt ?? "a related concept"}.`,
        },
        {
          id: "b",
          label: "Treat the term as correct because it sounds like a university concept.",
        },
        {
          id: "c",
          label: secondAlt
            ? `Replace the idea with ${secondAlt} whenever the example becomes complicated.`
            : "Ignore difficult examples so the explanation stays simple.",
        },
        {
          id: "d",
          label: "Use only personal instinct and avoid the source material.",
        },
      ],
      correctChoiceId: "a",
      dimension: "reasoning",
      explanation: `The strongest reasoning move is the one the article models: ${detail.method}. It also guards against the common mistake that ${detail.misconception}.`,
      id: `${slug}-reasoning`,
      prompt: `What is the best academic reasoning move when using ${seed.concept}?`,
    },
    {
      choices: [
        {
          id: "a",
          label: `${seed.practice}, using the case of ${detail.case}.`,
        },
        {
          id: "b",
          label: "Use the concept after the conclusion has already been chosen.",
        },
        {
          id: "c",
          label: thirdAlt
            ? `Jump immediately to ${thirdAlt} instead of examining the case.`
            : "Avoid the evidence and rely on a familiar slogan.",
        },
        {
          id: "d",
          label: "Assume examples from one context prove the same thing everywhere.",
        },
      ],
      correctChoiceId: "a",
      dimension: "depth",
      explanation: `${seed.concept} becomes useful when it changes what you notice in a case. Here, the case is ${detail.case}, and the challenge is to ${detail.challenge}.`,
      id: `${slug}-application`,
      prompt: `Which application best follows the article's treatment of ${seed.concept}?`,
    },
    {
      choices: [
        {
          id: "a",
          label: `${detail.anchor}; it keeps the concept tied to ${frame.evidenceStandard.toLowerCase()}.`,
        },
        {
          id: "b",
          label: "A personal memory that feels vivid enough to override source context.",
        },
        {
          id: "c",
          label: firstAlt
            ? `${firstAlt}, because neighbouring terms can always replace one another.`
            : "Any nearby concept, because source context is optional.",
        },
        {
          id: "d",
          label: "A broad opinion about the topic that does not need the article's evidence standard.",
        },
      ],
      correctChoiceId: "a",
      dimension: "depth",
      explanation: `The article treats source context as part of the concept. ${seed.concept} is anchored in ${detail.anchor}, and the evidence standard is ${frame.evidenceStandard.toLowerCase()}`,
      id: `${slug}-source-context`,
      prompt: `Which source-context reading best supports ${seed.concept}?`,
    },
    {
      choices: [
        {
          id: "a",
          label: `${seed.concept} focuses on ${seed.focus}, while ${secondAlt ?? "a neighbouring concept"} would shift the explanation toward a different mechanism or scale.`,
        },
        {
          id: "b",
          label: `${seed.concept} is just a more advanced name for ${secondAlt ?? "any related concept"}.`,
        },
        {
          id: "c",
          label: "Comparison is unnecessary because a single correct concept should explain the whole case.",
        },
        {
          id: "d",
          label: thirdAlt
            ? `${thirdAlt} is automatically the better answer whenever the article becomes complex.`
            : "A harder-sounding term is automatically the better answer.",
        },
      ],
      correctChoiceId: "a",
      dimension: "reasoning",
      explanation: `Strong comparison keeps ${seed.concept} distinct from neighbouring ideas. The point is to preserve what ${seed.concept} explains, not to collapse the topic's vocabulary into one broad label.`,
      id: `${slug}-comparison`,
      prompt: `Which comparison shows the strongest understanding of ${seed.concept}?`,
    },
  ];
}

function buildArticleSections(
  topic: LearningTopicId,
  seed: LessonSeed,
  profile: TopicProfile,
  seedIndex: number,
): LearningLesson["sections"] {
  const frame = articleFrames[topic];
  const detail = lessonDetailFor(topic, seedIndex);
  const lens = advancedLenses[topic];
  const plan = sectionPlans[topic];
  const [firstAlt, secondAlt] = neighbouringConcepts(topic, seed.concept);
  const sourceNames = formatSourceNames(
    profile.sourceKeys.map((key) => sourcePack[key].label),
  );
  const relatedOne = firstAlt ?? "a neighbouring concept";
  const relatedTwo = secondAlt ?? "a second neighbouring concept";
  const levelLens =
    seed.level === "University"
      ? "At university level, the concept is strongest when it can be held against rival explanations, awkward evidence and the possibility that the field's own categories are historically shaped."
      : seed.level === "A-level"
        ? "At A-level, the concept should be tied to a named case, a mechanism and at least one boundary condition."
        : "At GCSE level, the concept still does explanatory work: it gives a precise name to a pattern that would otherwise be described loosely.";

  const openingLead = pickVariant(
    [
      `${seed.concept} names ${seed.focus}. Within ${profile.topic.label.toLowerCase()}, that definition is attached to ${detail.anchor}, so the term should be read inside the field's wider claim: ${profile.fieldFrame}.`,
      `In ${profile.topic.label.toLowerCase()}, ${seed.concept} refers to ${seed.focus}. The relevant textbook setting is ${detail.anchor}, where the concept is introduced to solve a particular explanatory problem rather than to decorate an example.`,
      `${seed.concept} is a compact term for ${seed.focus}. Its academic force comes from ${detail.anchor}, because the concept only becomes clear when placed beside the field's larger concern: ${profile.fieldFrame}.`,
      `The starting point for ${seed.concept} is ${seed.focus}. In textbook treatment, especially in ${detail.anchor}, the term functions less like a dictionary entry than a small analytic instrument.`,
    ],
    seedIndex,
  );

  const sourceLead = pickVariant(
    [
      `${sourceNames} place ${seed.concept} inside a sequence of related problems rather than treating it as a loose fact.`,
      `The source tradition matters here. ${sourceNames} connect ${seed.concept} to methods, examples and limits, which keeps the concept tied to a discipline rather than to casual opinion.`,
      `A textbook reading of ${seed.concept} begins with the surrounding chapter logic. ${sourceNames} supply that logic by linking definitions to cases, evidence and neighbouring vocabulary.`,
      `The concept of ${seed.concept} is easier to misuse when it is detached from its source setting. Read with ${sourceNames}, it belongs to a structured argument rather than to a list of impressive terms.`,
    ],
    seedIndex + 1,
  );

  const methodLead = pickVariant(
    [
      `The mechanism can be stated directly: ${detail.method}. This connects the definition to evidence because ${frame.evidenceStandard.toLowerCase()}`,
      `The explanatory work begins with method. To analyse ${seed.concept}, the relevant move is to ${detail.method}. The evidence standard follows: ${frame.evidenceStandard.toLowerCase()}`,
      `A textbook account would not stop at the definition. It would show the mechanism through this operation: ${detail.method}. Evidence then has to meet the field's standard: ${frame.evidenceStandard.toLowerCase()}`,
      `The working logic of the concept is ${detail.method}. That logic prevents ${seed.concept} from becoming a vague impression, because ${frame.evidenceStandard.toLowerCase()}`,
    ],
    seedIndex + 2,
  );

  const exampleLead = pickVariant(
    [
      `Consider ${detail.case}. The case matters because it lets the concept appear as a relation among conditions, actions and consequences rather than as a label placed on top of events.`,
      `The ordinary case is ${detail.case}. It is not included as a decorative illustration; it shows what has to be noticed before the concept can explain anything.`,
      `A concrete way into the concept is ${detail.case}. The example narrows the field of vision so that the relevant actors, constraints, meanings and consequences remain visible.`,
      `${sentenceStart(detail.case)} is a useful case because it contains the tension the concept is designed to clarify. The point is not that the case is unusual, but that it makes an ordinary structure legible.`,
    ],
    seedIndex + 3,
  );

  const boundaryLead = pickVariant(
    [
      `${frame.advancedProblem} ${seed.concept} becomes academically serious at exactly this boundary: it clarifies something, but it also hides or simplifies something.`,
      `${frame.advancedProblem} With ${seed.concept}, simple recognition gives way to judgement, scope and competing explanation.`,
      `${frame.advancedProblem} A strong account therefore treats ${seed.concept} as a disciplined simplification, not as a complete description of reality.`,
      `${frame.advancedProblem} The difficulty with ${seed.concept} is to keep the term sharp enough to explain the case without letting it absorb everything nearby.`,
    ],
    seedIndex + 4,
  );

  const mechanismClose = pickVariant(
    [
      `${lens.theoryMove} For ${seed.concept}, the definition gives the boundary of the term; the mechanism explains why the pattern appears and why some tempting examples fall outside the concept.`,
      `${lens.theoryMove} This matters for ${seed.concept} because the definition alone only marks the concept's territory; the mechanism shows how the pattern is produced.`,
      `${lens.theoryMove} In that sense, ${seed.concept} works as a controlled abstraction: it simplifies the case without pretending the simplification is the whole case.`,
      `${lens.theoryMove} The result is a concept that can travel across examples while ${seed.concept} still depends on disciplined evidence in each one.`,
    ],
    seedIndex + 5,
  );

  const exampleAnalysis = pickVariant(
    [
      `The hard part is to ${detail.challenge}. That problem gives the example its academic value: the concept has to select relevant details, exclude misleading ones and preserve enough complexity to remain honest.`,
      `The interpretive pressure falls on this question: how can the case be used to ${detail.challenge}? A good account keeps the answer close to evidence rather than letting the example become a slogan.`,
      `The case becomes more than anecdote when it is used to ${detail.challenge}. That requirement keeps the lesson close to the source material, where examples carry definitions rather than merely decorate them.`,
      `The central difficulty is to ${detail.challenge}. The example is therefore useful because it forces a distinction between what is visible immediately and what the concept explains beneath the surface.`,
    ],
    seedIndex + 6,
  );

  const exampleClose = pickVariant(
    [
      `${levelLens} For ${seed.concept}, the case therefore works as evidence only when definition, mechanism and limitation meet in the same passage.`,
      `${levelLens} This is the point of the case: it should make ${seed.concept} narrower, not vaguer, by showing exactly what the term can and cannot explain.`,
      `${levelLens} The strongest reading keeps the ordinary detail intact while showing why ${seed.concept} adds explanatory power.`,
      `${levelLens} The example should leave ${seed.concept} more precise than it was at the start, with clearer evidence and a sharper boundary.`,
    ],
    seedIndex + 7,
  );

  const limitParagraph = pickVariant(
    [
      `${frame.limits} A useful boundary is this: ${detail.misconception}. That boundary matters because a concept that explains too much eventually stops explaining with precision.`,
      `${frame.limits} The common mistake is to forget that ${detail.misconception}. Once that mistake enters, the concept starts to blur rather than clarify.`,
      `${frame.limits} The limiting rule can be put plainly: ${detail.misconception}. This keeps the concept from becoming a catch-all for anything that looks roughly similar.`,
      `${frame.limits} The source material usually protects this distinction by making clear that ${detail.misconception}. Without that restraint, the concept loses its analytic edge.`,
    ],
    seedIndex + 8,
  );

  const comparisonLead = pickVariant(
    [
      `${seed.concept} belongs near ${relatedOne} and ${relatedTwo}, but the overlap should not be allowed to flatten the distinctions. ${seed.concept} emphasises ${seed.focus}; ${relatedOne} changes the mechanism, scale or evidence base.`,
      `The neighbouring vocabulary matters. ${relatedOne} and ${relatedTwo} may appear in the same chapter, yet ${seed.concept} has its own burden of proof: it has to explain ${seed.focus}.`,
      `Textbook chapters often work by contrast. ${seed.concept}, ${relatedOne} and ${relatedTwo} mark different ways of organising similar material, which is why substituting one for another changes the argument.`,
      `${seed.concept} should be kept distinct from ${relatedOne} and ${relatedTwo}. The difference is not just terminology; it changes what counts as evidence and what kind of explanation is being offered.`,
    ],
    seedIndex + 5,
  );

  const comparisonMiddle = pickVariant(
    [
      `Keeping the distinction around ${seed.concept} intact also protects the structure of the source material. Chapters are built by moving from one explanatory tool to another; if the tools collapse together, the argument becomes a blur.`,
      `This contrast is not pedantic. In textbook writing, nearby concepts often divide the work around ${seed.concept} between evidence, mechanism, scale and interpretation.`,
      `The distinction also explains why ${profile.topic.label.toLowerCase()} needs more than one term for similar-looking cases around ${seed.concept}. Each concept brings a different question into focus.`,
      `The neighbouring terms form a small map of the chapter around ${seed.concept}. Their differences show which parts of the case belong to definition, which to evidence and which to interpretation.`,
    ],
    seedIndex + 9,
  );

  const comparisonClose = pickVariant(
    [
      `${seed.concept} is therefore difficult in a productive way. It asks for a decision about evidence, level of analysis and explanatory scope, not merely recall of a definition.`,
      `That is why ${seed.concept} belongs in a serious learning system: it trains discrimination between similar explanations rather than simple recognition of a keyword.`,
      `The intellectual value of ${seed.concept} lies in the precision. Once the neighbouring concepts are separated, the original case can be read with less noise and more explanatory control.`,
      `The lesson is complete only when ${seed.concept} can be used without swallowing the terms beside it. Precision, not verbal difficulty, is what makes the concept advanced.`,
    ],
    seedIndex + 10,
  );

  const sourceModeParagraph = `${frame.sourceMode} For ${seed.concept}, that source pattern is narrowed through ${detail.anchor} and kept concrete by ${detail.case}.`;
  const methodDepthParagraph = `The concept of ${seed.concept} therefore carries both a definitional claim and an evidential claim. The definitional claim says what counts as ${seed.concept}; the evidential claim explains why this operation is appropriate: ${detail.method}.`;
  const everydayDepthParagraph = `Seen through ${seed.concept}, the stakes are clear: ${profile.stakes}. In everyday terms, this means ${profile.practicalContext}. The ordinary setting does not lower the academic standard; it makes the abstraction visible.`;
  const debateDepthParagraph = `The tension is productive because ${seed.concept} is neither a universal key nor a disposable label. It has to preserve the complexity of ${detail.case} while still making a stronger claim than ordinary description would make.`;
  const comparisonDepthParagraph = `Placed beside ${relatedOne} and ${relatedTwo}, ${seed.concept} also shows how academic vocabulary earns its keep: each term must change the reading of the case, not merely rename it.`;

  const openingSection = {
    heading: plan.opening,
    body: [
      `${openingLead} ${frame.disciplinaryQuestion}`,
      sourceLead,
      `${lens.sourceTradition} In this article, that wider tradition is narrowed to ${seed.concept} through ${detail.anchor}.`,
      sourceModeParagraph,
    ],
  };

  const mechanismSection = {
    heading: plan.mechanism,
    body: [
      methodLead,
      `${lens.evidenceProblem} For ${seed.concept}, that means the article has to keep this operation in view: ${detail.method}.`,
      mechanismClose,
      methodDepthParagraph,
    ],
  };

  const exampleSection = {
    heading: plan.example,
    body: [
      exampleLead,
      exampleAnalysis,
      exampleClose,
      everydayDepthParagraph,
    ],
  };

  const debateSection = {
    heading: plan.debate,
    body: [
      boundaryLead,
      limitParagraph,
      `${lens.complication} In the specific case of ${seed.concept}, ${lens.stakes}`,
      debateDepthParagraph,
    ],
  };

  const comparisonSection = {
    heading: plan.comparison,
    body: [
      comparisonLead,
      comparisonMiddle,
      comparisonClose,
      comparisonDepthParagraph,
    ],
  };

  if (
    topic === "art-history" ||
    topic === "literature" ||
    topic === "anthropology"
  ) {
    return [
      openingSection,
      exampleSection,
      mechanismSection,
      debateSection,
      comparisonSection,
    ];
  }

  if (
    topic === "artificial-intelligence" ||
    topic === "science" ||
    topic === "economics" ||
    topic === "pharmaceutical-businesses"
  ) {
    return [
      openingSection,
      mechanismSection,
      exampleSection,
      comparisonSection,
      debateSection,
    ];
  }

  return [
    openingSection,
    mechanismSection,
    exampleSection,
    debateSection,
    comparisonSection,
  ];
}

function buildLesson(
  topic: LearningTopicId,
  seed: LessonSeed,
  seedIndex: number,
): LearningLesson {
  const profile = topicProfiles[topic];
  const slug = `${topic}-${slugify(seed.concept)}`;
  const difficulty = levelDifficulty(seed.level);
  const detail = lessonDetailFor(topic, seedIndex);

  return {
    concept: {
      label: seed.concept,
      level: seed.level,
      summary: seed.focus,
    },
    deck: `${seed.concept} examines ${seed.focus}, anchored in ${detail.anchor} and tested through ${detail.case}.`,
    difficulty,
    estimatedMinutes: seed.level === "University" ? 9 : seed.level === "A-level" ? 8 : 7,
    keyTerms: [
      {
        label: seed.concept,
        value: seed.focus,
      },
      {
        label: profile.topic.label,
        value: profile.fieldFrame,
      },
      {
        label: "Textbook anchor",
        value: detail.anchor,
      },
      {
        label: seed.level,
        value: `This concept is classified at ${seed.level} level because of the abstraction, evidence handling and independence expected from the reader.`,
      },
    ],
    questions: buildQuestions(seed, topic, slug, detail),
    sections: buildArticleSections(topic, seed, profile, seedIndex),
    slug,
    sources: profile.sourceKeys.map((key) => sourcePack[key]),
    subtitle: `${seed.level} concept in ${profile.topic.label}: ${seed.focus}.`,
    title: seed.concept,
    topic,
  };
}

// Hand-written lessons replace the generated ones topic by topic. As each
// topic is rewritten, it is added here; any topic not present still falls back
// to the template generator below.
const authoredLessonsByTopic: Partial<Record<LearningTopicId, LearningLesson[]>> =
  {
    anthropology: anthropologyLessons,
    "architecture-urbanism": architectureUrbanismLessons,
    "art-history": artHistoryLessons,
    "artificial-intelligence": artificialIntelligenceLessons,
    business: businessLessons,
    "classical-civilisation": classicalCivilisationLessons,
    economics: economicsLessons,
    geopolitics: geopoliticsLessons,
    "history-of-ideas": historyOfIdeasLessons,
    "linguistics-etymology": linguisticsEtymologyLessons,
    literature: literatureLessons,
    marketing: marketingLessons,
    "military-strategy": militaryStrategyLessons,
    "music-theory": musicTheoryLessons,
    "pharmaceutical-businesses": pharmaceuticalBusinessesLessons,
    philosophy: philosophyLessons,
    politics: politicsLessons,
    psychology: psychologyLessons,
    "rhetoric-argumentation": rhetoricArgumentationLessons,
    science: scienceLessons,
    "social-engineering": socialEngineeringLessons,
    sociology: sociologyLessons,
    "systems-thinking": systemsThinkingLessons,
  };

export const LEARNING_LESSONS: LearningLesson[] = Object.entries(
  topicLessonSeeds,
).flatMap(([topic, seeds]) => {
  const topicId = topic as LearningTopicId;
  const authored = authoredLessonsByTopic[topicId];

  if (authored) {
    return authored;
  }

  return seeds.map((seed, index) => buildLesson(topicId, seed, index));
});

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

function sessionDepthPoints(session: LearningSession) {
  const withNewScore = session as LearningSession & { depth_points?: number };

  return withNewScore.depth_points ?? session.knowledge_points + session.application_points;
}

function sessionConsistencyPoints(session: LearningSession) {
  const withNewScore = session as LearningSession & {
    consistency_points?: number;
  };

  return withNewScore.consistency_points ?? 0;
}

function uniqueLearningDates(sessions: LearningSession[]) {
  return Array.from(
    new Set(
      sessions.map((session) =>
        (session.completed_at ?? session.created_at).slice(0, 10),
      ),
    ),
  ).sort((left, right) => right.localeCompare(left));
}

/**
 * Seed for a lesson's choice order.
 *
 * Deliberately derived rather than random: it stays stable if you refresh
 * mid-attempt, and changes once an attempt is recorded - so the shuffle lands
 * exactly when you next sit the lesson.
 */
export function lessonAttemptSeed(
  slug: string,
  attemptCount: number,
  lastCompletedAt?: string | null,
) {
  const input = `${slug}:${attemptCount}:${lastCompletedAt ?? "first"}`;
  let hash = 2166136261;

  for (let index = 0; index < input.length; index += 1) {
    hash ^= input.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function mulberry32(seed: number) {
  let state = seed >>> 0;

  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Reorder each question's choices for a single attempt.
 *
 * `buildAuthoredLessons` places the correct answer at a position derived from a
 * hash of the question id, which is stable for all time - so retaking a lesson
 * would test memory of where the answer sat rather than the concept. Shuffling
 * the display order per attempt fixes that. Choice ids stay welded to their
 * labels, so scoring is unaffected.
 */
export function shuffleLessonChoices(
  lesson: LearningLesson,
  seed: number,
): LearningLesson {
  return {
    ...lesson,
    questions: lesson.questions.map((question, questionIndex) => {
      // A generator per question, mixed with the question's own index so the
      // five questions do not all permute identically. Warmed up first because
      // mulberry32's opening value tracks its seed too closely, which was
      // collapsing the correct answer onto only a couple of positions.
      const random = mulberry32(seed + questionIndex * 0x9e3779b9);
      random();
      random();
      random();

      const choices = [...question.choices];

      for (let index = choices.length - 1; index > 0; index -= 1) {
        const swapWith = Math.floor(random() * (index + 1));
        [choices[index], choices[swapWith]] = [choices[swapWith], choices[index]];
      }

      return { ...question, choices };
    }),
  };
}

export type LearningLessonState = {
  accuracy: number | null;
  attempts: number;
  daysSinceLastAttempt: number | null;
  dueInDays: number | null;
  lesson: LearningLesson;
  reason: LearningQueueReason;
};

export type LearningQueueReason = "new" | "overdue" | "shaky" | "resting";

// Spaced-repetition interval per consecutive attempt, in days. A lesson answered
// well moves further down the ladder; a weak answer keeps it near the front.
const REVIEW_LADDER_DAYS = [3, 7, 16, 35, 70];

function reviewIntervalDays(attempts: number, accuracy: number) {
  // A weak answer always comes back at the shortest interval.
  if (accuracy < 0.6) {
    return REVIEW_LADDER_DAYS[0];
  }

  // A strong answer climbs one rung per attempt, starting at the first rung;
  // a middling one holds a rung back so it repeats sooner.
  const step = accuracy >= 0.8 ? attempts - 1 : attempts - 2;

  return REVIEW_LADDER_DAYS[
    Math.min(Math.max(step, 0), REVIEW_LADDER_DAYS.length - 1)
  ];
}

/**
 * Describe every lesson in a topic: how often it has been attempted, how well,
 * and whether spaced repetition says it is due. Ordered most-urgent first so the
 * caller can either take the head of the queue or render the whole board.
 */
export function buildLearningQueue(
  topic: LearningTopicId,
  sessions: LearningSession[],
  now = new Date(),
): LearningLessonState[] {
  const lessons = getLearningLessonsByTopic(topic);
  const byLesson = new Map<string, LearningSession[]>();

  sessions.forEach((session) => {
    const bucket = byLesson.get(session.lesson_slug) ?? [];
    bucket.push(session);
    byLesson.set(session.lesson_slug, bucket);
  });

  const states = lessons.map((lesson) => {
    const attemptsForLesson = (byLesson.get(lesson.slug) ?? []).sort(
      (left, right) => completedTime(right) - completedTime(left),
    );
    const latest = attemptsForLesson[0];

    if (!latest) {
      return {
        accuracy: null,
        attempts: 0,
        daysSinceLastAttempt: null,
        dueInDays: null,
        lesson,
        reason: "new" as const,
      };
    }

    const accuracy =
      latest.total_questions > 0
        ? latest.correct_count / latest.total_questions
        : 0;
    const daysSince = daysBetween(now, new Date(latest.completed_at ?? latest.created_at));
    const interval = reviewIntervalDays(attemptsForLesson.length, accuracy);
    const dueInDays = interval - daysSince;
    const reason: LearningQueueReason =
      dueInDays > 0 ? "resting" : accuracy < 0.8 ? "shaky" : "overdue";

    return {
      accuracy,
      attempts: attemptsForLesson.length,
      daysSinceLastAttempt: daysSince,
      dueInDays,
      lesson,
      reason,
    };
  });

  const rank: Record<LearningQueueReason, number> = {
    new: 0,
    shaky: 1,
    overdue: 2,
    resting: 3,
  };

  return states.sort((left, right) => {
    if (rank[left.reason] !== rank[right.reason]) {
      return rank[left.reason] - rank[right.reason];
    }

    // Within a band, the most overdue (or weakest) lesson comes first.
    if (left.reason === "new") {
      return left.lesson.slug.localeCompare(right.lesson.slug);
    }

    if (left.reason === "shaky") {
      return (left.accuracy ?? 1) - (right.accuracy ?? 1);
    }

    return (left.dueInDays ?? 0) - (right.dueInDays ?? 0);
  });
}

/**
 * The review queue across every topic: lessons already attempted that spaced
 * repetition says are due back. Unseen lessons are excluded - those are breadth,
 * not review - so this answers "what am I about to forget?".
 */
export function buildReviewQueue(
  sessions: LearningSession[],
  now = new Date(),
): LearningLessonState[] {
  return LEARNING_TOPICS.flatMap((topic) =>
    buildLearningQueue(topic.id, sessions, now),
  )
    .filter((state) => state.attempts > 0 && (state.dueInDays ?? 1) <= 0)
    .sort((left, right) => {
      if (left.reason !== right.reason) {
        return left.reason === "shaky" ? -1 : 1;
      }

      return (left.dueInDays ?? 0) - (right.dueInDays ?? 0);
    });
}

/**
 * Pick the lesson the learner most needs: unseen lessons first, then weak ones,
 * then whatever spaced repetition says is overdue. Only falls back to the
 * longest-rested lesson when everything is still inside its interval.
 */
export function chooseNextLearningLesson(
  topic: LearningTopicId,
  sessions: LearningSession[],
  now = new Date(),
) {
  const queue = buildLearningQueue(topic, sessions, now);

  return queue[0]?.lesson ?? getLearningLessonsByTopic(topic)[0] ?? LEARNING_LESSONS[0];
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
  const depthAnswerPoints =
    answerResults.filter(
      (answer) => answer.correct && answer.dimension === "depth",
    ).length * basePoints;
  const reasoningPoints =
    answerResults.filter(
      (answer) => answer.correct && answer.dimension === "reasoning",
    ).length * basePoints;
  const levelDepthBonus =
    lesson.concept.level === "University"
      ? 10
      : lesson.concept.level === "A-level"
        ? 6
        : 3;
  const depthPoints =
    depthAnswerPoints + (correctCount === lesson.questions.length ? levelDepthBonus : 0);
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
    latestSession &&
    latestSession.topic !== lesson.topic &&
    previousTopicSessions.length > 0;
  const breadthPoints = topicIsNew ? 14 : switchedTopic ? 5 : 1;
  const latestLessonAttempt = [...previousLessonSessions].sort(
    (left, right) => completedTime(right) - completedTime(left),
  )[0];
  const accuracy = correctCount / Math.max(1, lesson.questions.length);
  const retentionPoints =
    latestLessonAttempt &&
    daysBetween(now, new Date(latestLessonAttempt.completed_at)) >= 3
      ? accuracy >= 0.8
        ? 12
        : accuracy >= 0.6
          ? 6
          : 2
      : latestLessonAttempt
        ? 1
        : 0;
  const sortedDates = uniqueLearningDates(priorSessions);
  const todayKey = now.toISOString().slice(0, 10);
  const yesterday = new Date(now);
  yesterday.setUTCDate(yesterday.getUTCDate() - 1);
  const yesterdayKey = yesterday.toISOString().slice(0, 10);
  const studiedToday = sortedDates.includes(todayKey);
  const studiedYesterday = sortedDates.includes(yesterdayKey);
  const recentStudyDays = sortedDates.filter(
    (date) => daysBetween(now, new Date(`${date}T12:00:00Z`)) <= 7,
  ).length;
  const consistencyPoints =
    Math.min(10, recentStudyDays * 2) + (studiedToday || studiedYesterday ? 4 : 0);
  const scorePoints =
    breadthPoints +
    depthPoints +
    retentionPoints +
    reasoningPoints +
    consistencyPoints;

  return {
    answers: answerResults,
    breadthPoints,
    consistencyPoints,
    correctCount,
    depthPoints,
    reasoningPoints,
    retentionPoints,
    scorePoints,
    totalQuestions: lesson.questions.length,
  };
}

export function summariseLearningProgress(sessions: LearningSession[]) {
  const dimensions: Record<LearningDimension, number> = {
    breadth: 0,
    consistency: 0,
    depth: 0,
    reasoning: 0,
    retention: 0,
  };
  let correct = 0;
  let total = 0;

  sessions.forEach((session) => {
    dimensions.breadth += session.breadth_points;
    dimensions.consistency += sessionConsistencyPoints(session);
    dimensions.depth += sessionDepthPoints(session);
    dimensions.reasoning += session.reasoning_points;
    dimensions.retention += session.retention_points;
    correct += session.correct_count;
    total += session.total_questions;
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
      ? [...topicSessions].sort(
          (left, right) => completedTime(right) - completedTime(left),
        )[0].completed_at
      : null;

    return {
      accuracy: topicTotal ? Math.round((topicCorrect / topicTotal) * 100) : 0,
      attempts: topicSessions.length,
      lastCompletedAt,
      score: topicScore,
      topic,
    };
  });
  const sortedDates = uniqueLearningDates(sessions);
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
    intellectScore: Object.values(dimensions).reduce((sum, value) => sum + value, 0),
    lessonsCompleted: sessions.length,
    recentSessions: [...sessions]
      .sort((left, right) => completedTime(right) - completedTime(left))
      .slice(0, 6),
    streakDays,
    topicStats,
  };
}
