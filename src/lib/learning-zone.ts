import type { Database } from "@/lib/supabase/database.types";

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
  | "social-engineering"
  | "business"
  | "pharmaceutical-businesses";

export type LearningConceptLevel = "GCSE" | "A-level" | "University";

export type LearningDimension =
  | "application"
  | "breadth"
  | "knowledge"
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
  applicationPoints: number;
  breadthPoints: number;
  correctCount: number;
  knowledgePoints: number;
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
  openStaxPolitics: {
    label: "OpenStax American Government 3e",
    note: "Open textbook on institutions, representation and political behaviour.",
    type: "Textbook",
    url: "https://openstax.org/details/books/american-government-3e",
  },
  openStaxSociology: {
    label: "OpenStax Introduction to Sociology 3e",
    note: "Open textbook on social structure, institutions and research methods.",
    type: "Textbook",
    url: "https://openstax.org/details/books/introduction-sociology-3e",
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
};

export const LEARNING_TOPICS: LearningTopic[] = Object.values(topicProfiles).map(
  (profile) => profile.topic,
);

const topicIds = new Set<string>(LEARNING_TOPICS.map((topic) => topic.id));

export const LEARNING_DIMENSION_LABELS: Record<LearningDimension, string> = {
  application: "Application",
  breadth: "Breadth",
  knowledge: "Knowledge",
  reasoning: "Reasoning",
  retention: "Retention",
};

export const LEARNING_CONCEPT_LEVEL_LABELS: Record<LearningConceptLevel, string> = {
  "A-level": "A-level",
  GCSE: "GCSE",
  University: "University",
};

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

function buildQuestions(
  seed: LessonSeed,
  topic: LearningTopicId,
  slug: string,
  profile: TopicProfile,
): LearningQuestion[] {
  const [firstAlt, secondAlt, thirdAlt] = neighbouringConcepts(
    topic,
    seed.concept,
  );

  return [
    {
      choices: [
        { id: "a", label: seed.focus },
        { id: "b", label: firstAlt ? `mainly the same as ${firstAlt}` : "a purely decorative label" },
        { id: "c", label: "a claim that can be memorised without context or evidence" },
        { id: "d", label: "a personal opinion that cannot be tested against examples" },
      ],
      correctChoiceId: "a",
      dimension: "knowledge",
      explanation: `${seed.concept} is best understood as ${seed.focus}. The lesson asks you to recognise the concept before using it.`,
      id: `${slug}-knowledge`,
      prompt: `What does ${seed.concept} mainly mean in this lesson?`,
    },
    {
      choices: [
        {
          id: "a",
          label: `Define the term, use evidence, and compare it with nearby ideas such as ${firstAlt ?? "a related concept"}.`,
        },
        {
          id: "b",
          label: "Treat the term as true because it sounds academic.",
        },
        {
          id: "c",
          label: secondAlt
            ? `Replace the idea with ${secondAlt} whenever the example is difficult.`
            : "Ignore difficult examples so the explanation stays simple.",
        },
        {
          id: "d",
          label: "Use only personal instinct and avoid checking sources.",
        },
      ],
      correctChoiceId: "a",
      dimension: "reasoning",
      explanation: `The strongest reasoning move is to define ${seed.concept}, test it against evidence and distinguish it from neighbouring concepts.`,
      id: `${slug}-reasoning`,
      prompt: `What is the best reasoning habit when using ${seed.concept}?`,
    },
    {
      choices: [
        {
          id: "a",
          label: `${seed.practice}, while remembering that ${profile.method}.`,
        },
        {
          id: "b",
          label: "Use the concept as a label after the conclusion has already been chosen.",
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
      dimension: "application",
      explanation: `${seed.concept} becomes useful when it changes what you notice, verify or compare in a real case.`,
      id: `${slug}-application`,
      prompt: `How should you apply ${seed.concept} outside the reading?`,
    },
  ];
}

function buildLesson(topic: LearningTopicId, seed: LessonSeed): LearningLesson {
  const profile = topicProfiles[topic];
  const slug = `${topic}-${slugify(seed.concept)}`;
  const difficulty = levelDifficulty(seed.level);

  return {
    concept: {
      label: seed.concept,
      level: seed.level,
      summary: seed.focus,
    },
    deck: `${seed.concept} gives you a sharper handle on ${profile.topic.label.toLowerCase()}: it turns a broad subject into a usable mental model for noticing evidence, making distinctions and asking better questions.`,
    difficulty,
    estimatedMinutes: seed.level === "University" ? 7 : 6,
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
        label: seed.level,
        value: `This concept is classified at ${seed.level} level because of the abstraction, evidence handling and independence expected from the reader.`,
      },
    ],
    questions: buildQuestions(seed, topic, slug, profile),
    sections: [
      {
        heading: "The Core Idea",
        body: [
          `${seed.concept} is the lesson's central concept. In ${profile.topic.label.toLowerCase()}, it points to ${seed.focus}. That definition matters because a concept is not just a word to recognise in a textbook. It is a tool for sorting examples, noticing hidden assumptions and asking what evidence would make an interpretation stronger or weaker.`,
          `${profile.fieldFrame}. So this lesson treats ${seed.concept} as a working idea rather than a trivia item. You are looking for the moment where the concept changes what you see. A good reading should leave you able to use the term carefully, explain it to someone else and recognise when it is being stretched beyond its useful limits.`,
        ],
      },
      {
        heading: "How To Think With It",
        body: [
          `The first move is precision. Define ${seed.concept}, then separate it from nearby ideas. A vague definition makes every example seem to fit; a disciplined definition makes the borders visible. In practice, ${profile.method}. That means the concept has to do real work. It should clarify a case, expose a trade-off or improve a judgement.`,
          `The second move is comparison. Ask what would look different if ${seed.concept} were absent, weaker or replaced by another explanation. This prevents the classic beginner mistake: naming a concept and assuming the name is the analysis. The intellectual gain comes from testing the idea against examples and seeing which details it explains better than competing interpretations.`,
        ],
      },
      {
        heading: "Why It Matters",
        body: [
          `${profile.stakes}. ${seed.concept} matters because it links a concrete example to a larger pattern. Once you can make that link, you become less dependent on memorised facts. You start building a portable framework that can travel across books, arguments, work situations and news stories.`,
          `There is also a restraint built into the concept. A strong thinker knows when a concept applies and when it does not. If ${seed.concept} becomes a catch-all label, it stops sharpening thought and starts blurring it. The better habit is to ask: what evidence supports this reading, what evidence would challenge it, and what would a more careful alternative explanation look like?`,
        ],
      },
      {
        heading: "Use It Today",
        body: [
          `Use ${seed.concept} by ${seed.practice}. Pick one real example from your reading, work, media feed or daily life. Write a two-sentence explanation: first define the concept, then show exactly how the example demonstrates it. If the second sentence feels forced, the example probably needs more evidence or a different concept.`,
          `For the quiz, do not try to memorise the paragraphs. Aim to understand the structure: definition, distinction, evidence, application. That pattern is the point of Learning Zone. Each topic broadens your intellect score, but the real gain is that the concepts become available when you are thinking under pressure, not only when you are staring at the lesson page.`,
        ],
      },
    ],
    slug,
    sources: profile.sourceKeys.map((key) => sourcePack[key]),
    subtitle: `${seed.level} concept in ${profile.topic.label}: ${seed.focus}.`,
    title: seed.concept,
    topic,
  };
}

export const LEARNING_LESSONS: LearningLesson[] = Object.entries(
  topicLessonSeeds,
).flatMap(([topic, seeds]) =>
  seeds.map((seed) => buildLesson(topic as LearningTopicId, seed)),
);

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
  const latestSession = [...sessions].sort(
    (left, right) => completedTime(right) - completedTime(left),
  )[0];
  const freshCandidates = lessons.filter(
    (lesson) => lesson.slug !== latestSession?.lesson_slug,
  );
  const pool = freshCandidates.length ? freshCandidates : lessons;
  const index = Math.floor(Math.random() * pool.length);

  return pool[index] ?? lessons[0] ?? LEARNING_LESSONS[0];
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
  const knowledgePoints =
    answerResults.filter(
      (answer) => answer.correct && answer.dimension === "knowledge",
    ).length * basePoints;
  const reasoningPoints =
    answerResults.filter(
      (answer) => answer.correct && answer.dimension === "reasoning",
    ).length * basePoints;
  const applicationPoints =
    answerResults.filter(
      (answer) => answer.correct && answer.dimension === "application",
    ).length * basePoints;
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
  const breadthPoints = topicIsNew ? 8 : switchedTopic ? 3 : 1;
  const latestLessonAttempt = [...previousLessonSessions].sort(
    (left, right) => completedTime(right) - completedTime(left),
  )[0];
  const accuracy = correctCount / Math.max(1, lesson.questions.length);
  const retentionPoints =
    latestLessonAttempt &&
    daysBetween(now, new Date(latestLessonAttempt.completed_at)) >= 7
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
  const sortedDates = Array.from(
    new Set(
      sessions.map((session) =>
        (session.completed_at ?? session.created_at).slice(0, 10),
      ),
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
