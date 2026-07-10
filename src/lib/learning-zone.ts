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

type LessonDetail = {
  anchor: string;
  case: string;
  challenge: string;
  method: string;
  misconception: string;
  sourceLink: string;
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

const topicLessonDetails: Record<LearningTopicId, LessonDetail[]> = {
  anthropology: [
    { anchor: "introductory anthropology chapters on culture as learned, shared and contested meaning", case: "the same meal functioning as nutrition, hospitality, gendered labour and religious boundary", challenge: "explain one ordinary practice as a cultural system without making it sound automatic or timeless", method: "separate learned meaning from biological need, then show how practice is transmitted and contested", misconception: "culture is not a list of exotic customs or a single personality shared by a whole people", sourceLink: "Use the anthropology textbook's treatment of culture, ethnocentrism and fieldwork as the baseline." },
    { anchor: "ethnographic method chapters on immersion, description and interpretation", case: "a researcher spending months in a workplace or village to understand informal rules that surveys would miss", challenge: "state what ethnography can reveal that a questionnaire would flatten", method: "track observation, participation, interviews and reflexive notes as different kinds of evidence", misconception: "ethnography is not just travel writing with academic vocabulary", sourceLink: "Use the textbook's fieldwork examples to connect method to evidence." },
    { anchor: "fieldwork sections on participant observation and researcher positionality", case: "joining a community event while recording who speaks, who serves, who watches and who is excluded", challenge: "explain why participation creates insight and also creates bias", method: "balance closeness to practice with explicit notes about role, access and power", misconception: "taking part does not make the observer neutral or automatically accepted", sourceLink: "Use the anthropology textbook's discussion of participant observation, rapport and reflexivity." },
    { anchor: "kinship chapters on descent, marriage, household and social reproduction", case: "care obligations distributed through aunties, cousins, godparents or clan relations rather than a nuclear family", challenge: "show how kinship organises rights and duties, not merely biological relatedness", method: "map descent, residence, inheritance and care before applying familiar family categories", misconception: "kinship is not simply genealogy under another name", sourceLink: "Use the kinship material as a guide to social categories and obligation." },
    { anchor: "ritual chapters on symbol, transition, repetition and social order", case: "graduation, initiation, mourning or oath-taking as a public transformation of status", challenge: "explain how ritual changes social recognition even when no physical object changes", method: "identify sequence, symbols, participants, audience and before-after status", misconception: "ritual is not meaningless repetition or just religious ceremony", sourceLink: "Use textbook treatments of ritual and rites of passage as the anchor." },
    { anchor: "cultural relativism discussions that distinguish understanding from approval", case: "an unfamiliar marriage, healing or punishment practice that provokes immediate moral judgement", challenge: "hold contextual understanding and ethical evaluation in the same paragraph", method: "describe the practice in local terms before naming your evaluative standard", misconception: "relativism is not the claim that every practice is morally beyond criticism", sourceLink: "Use the textbook's warning against ethnocentrism without collapsing into moral passivity." },
    { anchor: "material culture chapters on objects, labour, technology and identity", case: "a phone, cooking pot, uniform or shrine object revealing networks of status and work", challenge: "read one object as social evidence rather than as a neutral thing", method: "ask who made it, who uses it, who controls it and what meanings attach to it", misconception: "objects are not mute background; they organise social relations", sourceLink: "Use material culture sections to connect artefacts to practice." },
    { anchor: "rites of passage theory on separation, liminality and reincorporation", case: "a recruit, student, patient or migrant being between old and new social identities", challenge: "explain a threshold state without reducing it to personal confusion", method: "identify the old status, suspended rules, transition tests and new status", misconception: "liminality is not just any period of uncertainty", sourceLink: "Use textbook treatments of rites of passage to define the threshold structure." },
    { anchor: "exchange chapters on reciprocity, obligation and non-market value", case: "a wedding gift, business favour or ceremonial exchange that creates future obligation", challenge: "show how a gift can be generous and strategic at the same time", method: "track giver, receiver, timing, return expectation and status effect", misconception: "gift exchange is not the absence of economics; it is a different moral economy", sourceLink: "Use exchange theory material to connect reciprocity and social power." },
    { anchor: "method chapters distinguishing emic insider accounts and etic analytic accounts", case: "participants explaining a ritual as respect while analysts also see hierarchy and resource distribution", challenge: "write both explanations without treating one as automatically superior", method: "state the emic account first, then add the etic explanation and compare their evidence", misconception: "emic does not mean true and etic does not mean cold or hostile", sourceLink: "Use fieldwork methodology sections on perspective and interpretation." },
  ],
  "art-history": [
    { anchor: "introductory art history chapters on formal elements and visual analysis", case: "a portrait whose composition, lighting and scale organise authority before biography is considered", challenge: "make a claim from visible evidence alone before adding context", method: "describe line, colour, composition, texture and scale in precise sequence", misconception: "formal analysis is not saying whether an artwork looks nice", sourceLink: "Use the art textbook's formal vocabulary as the working toolkit." },
    { anchor: "iconography sections on symbols, attributes and conventional motifs", case: "a saint, ruler, animal or object whose meaning depends on a shared visual code", challenge: "distinguish a symbol supported by convention from a private guess", method: "identify motif, repeated context, audience knowledge and likely interpretive code", misconception: "not every object in an image is a hidden symbol", sourceLink: "Use textbook and Smarthistory examples of iconographic reading." },
    { anchor: "patronage chapters on commissions, institutions and audience", case: "a church fresco, corporate building or royal portrait shaped by the sponsor's interests", challenge: "explain how funding conditions can shape form without erasing artistic agency", method: "ask who paid, where the work appeared and what audience response was desired", misconception: "patronage does not mean the artist was merely a puppet", sourceLink: "Use textbook discussions of commissions and artistic labour." },
    { anchor: "Renaissance and perspective sections on depth, viewpoint and mathematics", case: "linear perspective placing the viewer in a controlled position before a sacred or civic scene", challenge: "show how perspective creates ideology as well as spatial illusion", method: "identify horizon line, vanishing point, viewer position and compositional hierarchy", misconception: "perspective is not simply better or more realistic art", sourceLink: "Use art history textbook explanations of perspective systems." },
    { anchor: "Renaissance chapters on humanism, antiquity and changing artist status", case: "a Renaissance work blending classical references with Christian or civic patronage", challenge: "explain Renaissance change without turning it into simple progress from medieval darkness", method: "connect form, patronage, humanist learning and workshop practice", misconception: "the Renaissance was not a single sudden rebirth experienced equally everywhere", sourceLink: "Use textbook periodisation carefully and compare regional examples." },
    { anchor: "modernism chapters on abstraction, rupture and medium", case: "a modernist painting refusing illusionistic depth after photography and industrial modernity", challenge: "read abstraction as an argument about perception and society", method: "connect formal experiment to historical disruption and changing media", misconception: "modernism is not just art that forgot how to represent reality", sourceLink: "Use textbook accounts of modernism's response to modern life." },
    { anchor: "museum studies and provenance discussions on ownership, authenticity and restitution", case: "an object moving from sacred site to colonial collection to national museum", challenge: "treat ownership history as part of meaning, not an administrative footnote", method: "trace maker, transfer, collector, museum label and contested claim", misconception: "provenance is not only a market authenticity check", sourceLink: "Use museum and art history references on collecting histories." },
    { anchor: "medium sections on material, technique and constraints", case: "oil paint, marble, fresco, photography or digital media enabling different kinds of illusion and authority", challenge: "explain how material choices shape meaning rather than merely carry it", method: "identify physical properties, technique, labour, durability and viewing conditions", misconception: "medium is not a neutral container for an idea", sourceLink: "Use textbook material on technique and medium specificity." },
    { anchor: "museum and display chapters on classification, canon and institutional power", case: "an exhibition label arranging objects as primitive, national, modern or masterpiece", challenge: "read a museum display as an argument with omissions", method: "analyse selection, ordering, label language, lighting and visitor path", misconception: "museums do not simply show art; they produce categories of value", sourceLink: "Use Smarthistory and museum studies material on display and interpretation." },
    { anchor: "portraiture sections on likeness, status and identity construction", case: "a portrait using clothing, setting, pose and gaze to produce authority", challenge: "distinguish likeness from social performance", method: "read pose, costume, attributes, background and intended audience together", misconception: "portraiture is not just what someone looked like", sourceLink: "Use art textbook examples of portraiture as social representation." },
  ],
  "artificial-intelligence": [
    { anchor: "AI textbook chapters on problem-solving agents and state-space search", case: "a route planner choosing paths under cost and constraint", challenge: "formulate a problem as states, actions, transition model, goal and path cost", method: "separate search space from search algorithm and evaluation function", misconception: "search is not random looking around; it is structured exploration", sourceLink: "Use AIMA's agent and search framing as the source model." },
    { anchor: "machine learning chapters on training data, hypothesis spaces and generalisation", case: "a spam filter improving from labelled examples but failing on new wording", challenge: "explain what is learned and what remains assumed by the designer", method: "distinguish data, labels, loss function, features and deployment distribution", misconception: "machine learning is not learning in the human biographical sense", sourceLink: "Use D2L and AIMA material on supervised learning and generalisation." },
    { anchor: "classification sections on labels, decision boundaries and error types", case: "a medical triage classifier balancing false positives and false negatives", challenge: "explain why accuracy alone may be the wrong metric", method: "identify classes, features, threshold, confusion matrix and cost of errors", misconception: "classification labels are not natural facts handed to the model", sourceLink: "Use ML textbook discussions of classifiers and evaluation." },
    { anchor: "neural network chapters on layered representations and optimisation", case: "a vision model transforming pixels into hierarchical features", challenge: "explain the role of layers without pretending the model sees like a person", method: "connect inputs, weights, activation, loss and gradient-based training", misconception: "neural networks are not miniature brains with human concepts inside", sourceLink: "Use D2L's neural network explanations as the technical anchor." },
    { anchor: "model selection sections on overfitting, validation and generalisation", case: "a model memorising training examples and failing on real users", challenge: "explain why lower training error can mean worse performance", method: "compare training, validation and test behaviour under distribution shift", misconception: "more complex is not automatically more intelligent", sourceLink: "Use ML textbook material on overfitting and validation sets." },
    { anchor: "representation learning chapters on vector spaces and semantic similarity", case: "a search system retrieving conceptually similar documents without exact word match", challenge: "explain how proximity in representation space can encode useful but imperfect similarity", method: "describe input encoding, learned dimensions, similarity metric and failure cases", misconception: "embeddings do not store dictionary definitions in coordinates", sourceLink: "Use D2L/AIMA representation material for the source logic." },
    { anchor: "reinforcement learning chapters on agents, rewards and policies", case: "a game-playing system learning actions from rewards that may not match human preferences", challenge: "separate reward maximisation from doing what the designer intended", method: "identify state, action, reward, policy, exploration and environment", misconception: "a reward function is not the same as a moral goal", sourceLink: "Use AIMA reinforcement learning framing as the anchor." },
    { anchor: "language model practice connected to task specification and context", case: "a model producing different answers when role, constraints and examples change", challenge: "explain prompting as interface design, not magic wording", method: "state task, context, constraints, examples and evaluation criteria", misconception: "prompting is not a substitute for checking output quality", sourceLink: "Use AI textbook principles of task formulation and evaluation." },
    { anchor: "AI safety discussions on objective specification and human values", case: "an assistant optimising engagement while undermining user welfare", challenge: "explain why alignment is partly technical and partly social", method: "identify stakeholders, objective, constraints, evaluation and failure incentives", misconception: "alignment is not solved by asking a model to be nice", sourceLink: "Use AI textbook and safety references on goals and rational agents." },
    { anchor: "evaluation sections on benchmarks, robustness and external validity", case: "a chatbot performing well on a benchmark but failing in a high-stakes workflow", challenge: "design an evaluation that tests the real use case, not just a demo", method: "compare benchmark, human review, adversarial cases, calibration and monitoring", misconception: "a high score is not the same as safe deployment", sourceLink: "Use AI evaluation principles from AIMA/D2L-style model assessment." },
  ],
  business: [
    { anchor: "management textbook sections on value creation and customer need", case: "a service that saves a customer time but charges less than the time saved", challenge: "state the value proposition without confusing it with features", method: "link customer problem, promised outcome, proof and willingness to pay", misconception: "a value proposition is not a slogan or tagline", sourceLink: "Use management and marketing textbook material on customer value." },
    { anchor: "business model chapters on value creation, delivery and capture", case: "a subscription service with high acquisition cost but recurring revenue", challenge: "explain how the organisation gets paid for the value it creates", method: "map customer, offer, channel, revenue, cost and key resources", misconception: "business model is not the same as business idea", sourceLink: "Use management textbook frameworks for organisational value capture." },
    { anchor: "strategy sections on resources, capabilities and competitive positioning", case: "a firm protected by brand trust, switching costs or operational scale", challenge: "distinguish a good quarter from a durable advantage", method: "identify resource, capability, barrier to imitation and customer relevance", misconception: "being popular once is not competitive advantage", sourceLink: "Use management textbook discussions of strategy and competitive advantage." },
    { anchor: "managerial accounting and entrepreneurship material on unit economics", case: "a delivery product losing money on every order despite revenue growth", challenge: "explain when growth makes a company stronger or weaker", method: "calculate contribution margin, acquisition cost, retention and payback", misconception: "revenue growth is not proof of a viable business", sourceLink: "Use business textbook material on costs, margins and operating decisions." },
    { anchor: "operations management sections on process, bottlenecks and quality", case: "a clinic, warehouse or content team slowed by one repeated handoff", challenge: "identify the constraint that controls the system's output", method: "map inputs, process steps, bottleneck, error rate and feedback loop", misconception: "operations is not just back-office administration", sourceLink: "Use management textbook operations chapters as the source base." },
    { anchor: "strategy chapters on trade-offs and fit between activities", case: "a company choosing premium service and refusing low-margin customers", challenge: "explain what the strategy deliberately refuses to do", method: "name target customer, activity system, trade-off and reinforcing choices", misconception: "strategy is not a list of ambitions", sourceLink: "Use strategy sections from management textbooks on trade-offs." },
    { anchor: "organisational behaviour chapters on norms, incentives and leadership", case: "a team saying quality matters while rewarding only speed", challenge: "infer culture from repeated behaviour rather than stated values", method: "compare stories, incentives, rituals, hiring and promotion signals", misconception: "culture is not office atmosphere or brand personality", sourceLink: "Use organisational behaviour textbook material on culture." },
    { anchor: "finance basics on cash timing, liquidity and working capital", case: "a profitable company struggling because customers pay late", challenge: "explain why accounting profit and survival cash are different", method: "track cash in, cash out, timing, runway and obligations", misconception: "profit automatically means there is money in the bank", sourceLink: "Use management/finance textbook sections on cash flow." },
    { anchor: "platform strategy material on network effects and switching value", case: "a marketplace becoming more useful as buyers and sellers join", challenge: "distinguish a true network effect from ordinary scale", method: "identify user sides, incremental value per user, liquidity and defensibility", misconception: "having many users is not itself a network effect", sourceLink: "Use strategy and platform examples from business texts." },
    { anchor: "agency theory sections on incentives, monitoring and goal conflict", case: "a sales team maximising commission while damaging retention", challenge: "explain how a metric can rationally create bad behaviour", method: "identify principal, agent, information asymmetry, incentive and monitoring cost", misconception: "bad outcomes are not always caused by bad people", sourceLink: "Use management textbook material on incentives and control." },
  ],
  economics: [
    { anchor: "introductory economics chapters on scarcity and choice", case: "a student allocating time between work, sleep, training and study", challenge: "show how scarcity exists even without money changing hands", method: "identify limited resource, competing uses and the decision rule", misconception: "scarcity does not mean poverty; it means choice under constraint", sourceLink: "Use OpenStax/CORE chapters on scarcity and economic decision-making." },
    { anchor: "opportunity cost sections on alternatives and trade-offs", case: "choosing an extra work shift instead of a long run or study block", challenge: "name the best forgone alternative, not every possible alternative", method: "compare the chosen action with the next-best realistic option", misconception: "opportunity cost is not the money price of the thing", sourceLink: "Use textbook definitions of opportunity cost and trade-off." },
    { anchor: "supply and demand chapters on price adjustment and equilibrium", case: "rents rising when housing supply is fixed and demand grows", challenge: "explain movement along curves versus shifts in curves", method: "identify buyers, sellers, price, quantity, demand shifter and supply shifter", misconception: "prices are not just chosen by greedy sellers", sourceLink: "Use OpenStax/CORE diagrams as the conceptual anchor." },
    { anchor: "marginal analysis sections on incremental benefit and cost", case: "whether to add one more training session, worker, discount or study hour", challenge: "avoid deciding from averages when the marginal case is what matters", method: "compare extra benefit with extra cost for the next unit only", misconception: "marginal does not mean unimportant", sourceLink: "Use economics textbook material on marginal decision-making." },
    { anchor: "externalities chapters on social cost and benefit", case: "pollution, vaccination or noisy nightlife affecting people outside the transaction", challenge: "show why private incentives can produce socially inefficient outcomes", method: "separate private cost, external cost, social cost and possible correction", misconception: "externality does not just mean any side effect", sourceLink: "Use textbook diagrams of external costs and benefits." },
    { anchor: "elasticity sections on responsiveness to price and income", case: "a price rise affecting cigarettes differently from restaurant meals", challenge: "explain why the same tax can produce different quantity responses", method: "identify substitutes, necessity, time horizon and budget share", misconception: "elasticity is not whether demand exists; it is responsiveness", sourceLink: "Use OpenStax elasticity definitions and examples." },
    { anchor: "trade chapters on comparative advantage and opportunity cost", case: "two people specialising even when one is better at both tasks", challenge: "explain gains from trade using relative rather than absolute productivity", method: "calculate opportunity costs and compare ratios", misconception: "comparative advantage is not being the best at something", sourceLink: "Use textbook examples of specialisation and trade." },
    { anchor: "game theory sections on strategic interaction", case: "two firms deciding whether to discount, advertise or cooperate", challenge: "explain why individually rational choices can produce worse joint outcomes", method: "map players, strategies, payoffs, dominant strategies and equilibrium", misconception: "game theory is not about games; it is about interdependence", sourceLink: "Use economics textbook introductions to strategic behaviour." },
    { anchor: "public goods chapters on non-rivalry and non-excludability", case: "street lighting, clean air, open-source software or national defence", challenge: "show why voluntary payment can underprovide shared goods", method: "test rivalry, excludability, free-riding and collective provision", misconception: "public good does not simply mean good for the public", sourceLink: "Use OpenStax public goods definitions." },
    { anchor: "macroeconomics chapters on price levels and purchasing power", case: "household budgets squeezed when wages lag a broad rise in prices", challenge: "distinguish relative price changes from inflation", method: "identify basket, price index, wage response and real purchasing power", misconception: "inflation is not just one expensive product", sourceLink: "Use macro textbook material on CPI and price levels." },
  ],
  "linguistics-etymology": [
    { anchor: "morphology chapters on roots, affixes and meaningful units", case: "unhappiness breaking into un-, happy and -ness", challenge: "explain meaning by structure rather than by whole-word memorisation", method: "identify free and bound morphemes and the meaning contribution of each", misconception: "a morpheme is not the same thing as a syllable", sourceLink: "Use Essentials of Linguistics morphology sections." },
    { anchor: "phonology chapters on contrastive sound units", case: "pat and bat differing by one sound that changes meaning in English", challenge: "separate physical sound from language-specific contrast", method: "use minimal pairs to test whether a sound difference matters", misconception: "phonemes are not letters", sourceLink: "Use the textbook's phoneme and minimal-pair explanations." },
    { anchor: "syntax chapters on constituency and sentence structure", case: "ambiguous sentences where grouping changes meaning", challenge: "show how word order and phrase structure shape interpretation", method: "identify constituents, heads, modifiers and movement or attachment", misconception: "syntax is not grammar policing", sourceLink: "Use syntax sections on phrase structure and constituency." },
    { anchor: "semantics chapters on lexical and compositional meaning", case: "every student read a book changing meaning depending on quantifier scope", challenge: "distinguish word meaning from sentence meaning", method: "analyse reference, sense, entailment and compositional structure", misconception: "semantics is not simply dictionary lookup", sourceLink: "Use textbook semantics chapters as the source anchor." },
    { anchor: "pragmatics chapters on implicature, speech acts and context", case: "Can you pass the salt? functioning as a request, not a question about ability", challenge: "explain meaning beyond literal sentence content", method: "identify speaker intention, context, shared knowledge and inference", misconception: "pragmatics is not vagueness; it has patterns", sourceLink: "Use textbook pragmatics material on context and inference." },
    { anchor: "historical linguistics sections on meaning change", case: "a word narrowing, broadening, ameliorating or pejorating over centuries", challenge: "track meaning change with evidence rather than anecdote", method: "compare dated attestations and classify the direction of shift", misconception: "old meanings are not automatically truer meanings", sourceLink: "Use textbook material on semantic change." },
    { anchor: "historical linguistics chapters on cognates and language families", case: "father, Vater and pater showing inherited similarity across Indo-European languages", challenge: "distinguish true cognates from accidental resemblance", method: "look for systematic sound correspondences across multiple words", misconception: "similar-looking words are not automatically related", sourceLink: "Use textbook explanations of cognates and reconstruction." },
    { anchor: "language contact chapters on borrowing and prestige", case: "food, law or technology vocabulary entering English through contact", challenge: "explain what borrowing reveals about power, trade or cultural prestige", method: "identify donor language, historical contact and semantic domain", misconception: "loanwords are not corruption of a pure language", sourceLink: "Use language contact material from linguistics textbooks." },
    { anchor: "grammaticalisation sections on change from lexical to grammatical function", case: "going to becoming gonna as a future marker", challenge: "show how repeated use changes grammar gradually", method: "track semantic bleaching, phonetic reduction and new syntactic role", misconception: "grammar does not only change through mistakes", sourceLink: "Use historical linguistics material on grammaticalisation." },
    { anchor: "sociolinguistics chapters on register and style-shifting", case: "the same speaker changing vocabulary and syntax for a job interview, group chat and lecture", challenge: "explain register as social competence rather than fake identity", method: "identify audience, setting, purpose, status and linguistic choices", misconception: "formal language is not inherently better language", sourceLink: "Use sociolinguistic discussions of register and variation." },
  ],
  literature: [
    { anchor: "literature textbook chapters on close reading and textual evidence", case: "a short poem where repeated images change the emotional logic of the speaker", challenge: "make interpretation from diction, imagery and pattern rather than plot summary", method: "quote a small textual detail, name the formal feature and explain its effect", misconception: "close reading is not hunting for a single hidden meaning", sourceLink: "Use the literature textbook's close-reading method as the anchor." },
    { anchor: "narrative chapters on narrator, focalisation and reliability", case: "a first-person narrator whose confidence masks limited knowledge", challenge: "separate author, narrator, implied audience and character perspective", method: "track pronouns, knowledge limits, tone and contradictions", misconception: "the narrator is not automatically the author's voice", sourceLink: "Use textbook material on narrative voice and point of view." },
    { anchor: "symbolism sections on recurrence, association and textual support", case: "a recurring door, bird, colour or weather pattern gathering meaning across a novel", challenge: "show why the symbol is supported by pattern rather than isolated guesswork", method: "collect repetitions, contexts, shifts and contradictions", misconception: "a symbol is not anything the reader personally associates with an object", sourceLink: "Use literature textbook guidance on imagery and symbol." },
    { anchor: "irony chapters on verbal, dramatic and situational gaps", case: "a scene where the reader knows more than the character and the gap creates judgement", challenge: "explain the gap between statement, intention, knowledge and outcome", method: "identify what is said, what is meant, who knows what and what changes", misconception: "irony is not simply sarcasm or unfortunate coincidence", sourceLink: "Use textbook distinctions among kinds of irony." },
    { anchor: "genre chapters on convention, expectation and deviation", case: "a detective story, tragedy or romance that works by bending expected rules", challenge: "show how genre shapes reading before the plot is even resolved", method: "name conventions, audience expectations and meaningful departures", misconception: "genre is not a marketing shelf label only", sourceLink: "Use literature textbook discussions of genre and convention." },
    { anchor: "intertextuality material on allusion, adaptation and literary conversation", case: "a modern novel echoing a myth, Shakespeare scene or biblical phrase", challenge: "explain how the later text revises the earlier one", method: "identify source text, echo, transformation and new ideological pressure", misconception: "intertextuality is not just spotting references", sourceLink: "Use textbook material on allusion and textual relationships." },
    { anchor: "drama and tragedy sections on conflict, recognition and catastrophe", case: "a protagonist whose flaw matters only because institutions and fate amplify it", challenge: "explain tragedy as structure, not merely sadness", method: "track conflict, reversal, recognition, responsibility and social order", misconception: "tragedy is not any story where someone dies", sourceLink: "Use textbook and primary drama examples for tragic form." },
    { anchor: "modernist literature chapters on fragmentation, consciousness and form", case: "a fragmented narrative reflecting memory, urban life or post-war dislocation", challenge: "read difficulty as a formal response to historical pressure", method: "connect broken chronology, perspective shifts and interiority to theme", misconception: "modernist fragmentation is not random confusion", sourceLink: "Use textbook material on modernism and narrative experiment." },
    { anchor: "postcolonial reading sections on empire, language and voice", case: "a text where official language collides with local speech, memory or resistance", challenge: "analyse power in narration without reducing the work to a political slogan", method: "ask who speaks, whose history counts and which language carries authority", misconception: "postcolonial reading is not adding empire as an afterthought", sourceLink: "Use literature textbook context chapters and primary texts as anchors." },
    { anchor: "poetry chapters on meter, rhythm and sound", case: "a line whose stress pattern reinforces control, hesitation or violence", challenge: "show how rhythm contributes to meaning", method: "scan stresses, notice variation and connect sound to sense", misconception: "meter is not decorative counting detached from interpretation", sourceLink: "Use textbook sections on poetic form and meter." },
  ],
  marketing: [
    { anchor: "marketing textbook chapters on segmentation and target markets", case: "a fitness app separating beginners, club runners and injured returners", challenge: "define a segment by behaviour and need rather than demographics alone", method: "identify shared need, difference from other groups, reachability and value", misconception: "segmentation is not slicing a market into arbitrary age bands", sourceLink: "Use the marketing textbook's STP framework." },
    { anchor: "positioning sections on differentiation and perceptual space", case: "a coffee brand choosing to be understood as craft, convenience or performance fuel", challenge: "state the comparison frame the brand wants to win", method: "name target, category, alternative, difference and reason to believe", misconception: "positioning is not simply what the company says about itself", sourceLink: "Use textbook positioning maps and value propositions." },
    { anchor: "consumer insight chapters on motivation, friction and research", case: "customers saying they want healthy meals but buying convenience at 8 p.m.", challenge: "turn observed contradiction into a useful insight", method: "separate stated preference, actual behaviour, context and emotional payoff", misconception: "insight is not a fun fact about customers", sourceLink: "Use consumer behaviour material on motivation and decision context." },
    { anchor: "brand equity sections on memory, associations and trust", case: "a brand commanding preference before the product is examined in detail", challenge: "explain why memory structure can become economic value", method: "track awareness, associations, perceived quality, loyalty and distinctiveness", misconception: "brand equity is not just logo recognition", sourceLink: "Use marketing textbook material on brand equity." },
    { anchor: "marketing funnel chapters on awareness, consideration, conversion and loyalty", case: "a landing page with traffic but weak trial signups", challenge: "diagnose the stage where behaviour is breaking", method: "map journey stage, user question, friction and next action", misconception: "the funnel is not a law of nature or a complete customer story", sourceLink: "Use textbook funnel and customer journey material." },
    { anchor: "pricing chapters on reference price, value and behavioural framing", case: "monthly versus annual pricing changing perceived affordability", challenge: "explain price as information and incentive, not just revenue", method: "identify reference point, willingness to pay, perceived value and fairness", misconception: "pricing psychology is not tricking people with random numbers", sourceLink: "Use consumer behaviour and marketing mix price sections." },
    { anchor: "innovation and customer need material behind jobs-to-be-done", case: "a commuter buying a podcast app to make dead time feel useful", challenge: "state the progress the customer is hiring the product to make", method: "separate product category from situation, struggle and desired progress", misconception: "a job is not the same as a demographic persona", sourceLink: "Use textbook material on needs, value and consumer decision-making." },
    { anchor: "social influence sections in consumer behaviour", case: "reviews making an uncertain buyer trust a product they cannot inspect", challenge: "show when others' behaviour becomes evidence and when it becomes herd pressure", method: "identify uncertainty, reference group, credibility and visible adoption", misconception: "social proof is not proof that a choice is objectively good", sourceLink: "Use consumer behaviour chapters on reference groups and influence." },
    { anchor: "relationship marketing chapters on satisfaction, loyalty and retention", case: "a subscription product reducing churn through repeated value and lower friction", challenge: "explain retention as value delivery, not email reminders", method: "track onboarding, habit formation, switching cost, support and renewal trigger", misconception: "retention is not trapping customers who want to leave", sourceLink: "Use textbook material on customer relationship management." },
    { anchor: "category and positioning material on market creation", case: "a product teaching buyers to name a problem they previously tolerated", challenge: "explain how category language shapes demand", method: "define old alternative, new problem frame, stakes and category proof", misconception: "category design is not inventing jargon for an ordinary product", sourceLink: "Use marketing strategy material on positioning and differentiation." },
  ],
  "pharmaceutical-businesses": [
    { anchor: "drug development references on target identification and lead discovery", case: "a company pursuing a biological pathway with promising lab evidence but uncertain clinical relevance", challenge: "separate scientific plausibility from developable asset", method: "identify target, mechanism, candidate, unmet need and translational risk", misconception: "drug discovery is not simply finding a cure in a lab", sourceLink: "Use FDA development stages and life-science business context." },
    { anchor: "preclinical development material on toxicology and animal/in vitro evidence", case: "a candidate showing activity in cells but raising safety concerns before first-in-human studies", challenge: "explain why preclinical success is necessary but not decisive", method: "track pharmacology, toxicology, dose, formulation and human relevance", misconception: "preclinical evidence is not proof a medicine works in patients", sourceLink: "Use FDA descriptions of preclinical research." },
    { anchor: "clinical research sections on Phase I, II and III trials", case: "a Phase II signal that must be confirmed in a larger controlled trial", challenge: "match each phase to the question it is designed to answer", method: "identify population, endpoint, comparator, randomisation and statistical power", misconception: "a trial phase is not a quality ranking from weak to strong", sourceLink: "Use FDA clinical research phase descriptions." },
    { anchor: "regulatory affairs material on evidence packages and submissions", case: "a dossier needing to persuade regulators on safety, efficacy and manufacturing quality", challenge: "explain regulation as evidence judgement, not paperwork", method: "map claims to data modules, risk management and labelling decisions", misconception: "regulatory affairs is not just compliance bureaucracy", sourceLink: "Use FDA/EMA-style regulatory process references." },
    { anchor: "market access material on reimbursement, value and payer evidence", case: "an approved drug failing uptake because payers question comparative benefit", challenge: "explain why approval and access are different hurdles", method: "identify payer, comparator, budget impact, outcomes and eligible population", misconception: "market access does not begin after launch; evidence strategy starts earlier", sourceLink: "Use WHO pricing/access material and pharma business sources." },
    { anchor: "pricing and reimbursement sections on affordability and innovation incentives", case: "a high-cost rare disease therapy forcing trade-offs between access and R&D incentives", challenge: "analyse price through payer, patient, company and health-system lenses", method: "compare value, budget impact, alternatives, exclusivity and equity", misconception: "medicine price is not explained by manufacturing cost alone", sourceLink: "Use WHO medicines pricing and financing resources." },
    { anchor: "medical affairs material on scientific exchange and evidence generation", case: "medical science liaisons discussing emerging data with clinicians before broad adoption", challenge: "separate education, evidence and promotion", method: "identify clinical question, data gap, stakeholder and compliant exchange", misconception: "medical affairs is not just sales with more scientific language", sourceLink: "Use pharma business and regulatory compliance framing." },
    { anchor: "pharmacovigilance material on post-market safety monitoring", case: "rare adverse events emerging only after broad real-world use", challenge: "explain why approval does not end evidence generation", method: "track signal detection, causality, reporting, label updates and risk minimisation", misconception: "a safe trial result does not mean no future safety learning", sourceLink: "Use FDA post-market safety concepts." },
    { anchor: "portfolio and patent material on exclusivity, generics and lifecycle management", case: "a blockbuster facing generic entry after loss of exclusivity", challenge: "connect patent expiry to revenue, investment and portfolio strategy", method: "identify exclusivity period, generic/biosimilar threat, lifecycle option and pipeline gap", misconception: "a patent cliff is not just a legal date; it is a strategic shock", sourceLink: "Use pharma business strategy and IP context." },
    { anchor: "life-sciences CRM material on compliant field engagement and account planning", case: "a field team using regulated CRM workflows to document HCP interactions", challenge: "explain why pharma CRM is shaped by compliance as much as sales efficiency", method: "map territory, account, interaction, consent, content approval and audit trail", misconception: "life sciences CRM is not generic sales software with doctor names added", sourceLink: "Use business process and regulated engagement context." },
  ],
  philosophy: [
    { anchor: "logic textbook chapters on validity, soundness and argument form", case: "an argument with true-sounding premises whose conclusion does not follow", challenge: "separate validity from truth and persuasiveness", method: "identify premises, conclusion, inference pattern and possible counterexample", misconception: "valid does not mean factually true", sourceLink: "Use the logic textbook's validity/soundness distinction." },
    { anchor: "epistemology material on knowledge, belief and justification", case: "a justified belief that turns out true by luck", challenge: "explain why true belief may still fall short of knowledge", method: "compare belief, truth, justification, reliability and luck", misconception: "knowledge is not just strong confidence", sourceLink: "Use philosophy textbook and SEP-style epistemology framing." },
    { anchor: "ethics textbook chapters on consequentialism", case: "a policy that harms a few but greatly benefits many", challenge: "state the utilitarian calculation and the objection it invites", method: "identify affected parties, consequences, measurement of wellbeing and distribution", misconception: "utilitarianism is not simply doing whatever feels useful", sourceLink: "Use ethics textbook sections on Bentham/Mill-style consequentialism." },
    { anchor: "ethics chapters on Kantian duty, rights and universalisation", case: "lying for convenience in a way that could not be universalised", challenge: "explain why duty can constrain beneficial outcomes", method: "test maxim, respect for persons, universalisation and rights", misconception: "deontology is not blind rule-following without reasons", sourceLink: "Use ethics textbook material on Kantian moral theory." },
    { anchor: "virtue ethics chapters on character and flourishing", case: "a habit that produces discipline, courage or vanity over time", challenge: "analyse an action by the character it cultivates", method: "identify virtue, vice, practical wisdom, habit and flourishing", misconception: "virtue ethics is not just being a nice person", sourceLink: "Use ethics textbook sections on Aristotle and character." },
    { anchor: "philosophy of mind material on consciousness and physical explanation", case: "pain described both as neural activity and first-person experience", challenge: "state what physical explanation seems to leave out", method: "separate correlation, reduction, subjective experience and explanatory gap", misconception: "mind-body debate is not solved by saying the brain is involved", sourceLink: "Use SEP-style philosophy of mind references." },
    { anchor: "free will material on determinism, agency and responsibility", case: "a choice shaped by upbringing, biology and immediate reasons", challenge: "explain whether responsibility requires alternative possibilities", method: "distinguish determinism, coercion, reasons-responsiveness and moral blame", misconception: "free will is not simply doing whatever you want", sourceLink: "Use philosophy textbook debates on compatibilism and incompatibilism." },
    { anchor: "political philosophy material on consent, obligation and legitimacy", case: "citizens obeying laws they never personally signed", challenge: "explain why social contract theory tries to justify authority", method: "identify state of nature, consent, benefit, obligation and dissent", misconception: "the social contract is not usually a literal historical contract", sourceLink: "Use philosophy/political theory textbook material." },
    { anchor: "personal identity material on memory, body and psychological continuity", case: "a person changing radically through memory loss or future uploading thought experiments", challenge: "explain what must persist for someone to remain the same person", method: "compare bodily continuity, memory, character and narrative identity", misconception: "identity over time is not solved by having the same name", sourceLink: "Use SEP-style personal identity debates." },
    { anchor: "ethics and ancient philosophy material on happiness, meaning and flourishing", case: "a life with pleasure, achievement and status but little reflection or virtue", challenge: "compare competing accounts of a life going well", method: "distinguish pleasure, desire satisfaction, virtue, meaning and objective goods", misconception: "the good life is not just whatever someone happens to want", sourceLink: "Use ethics textbook accounts of flourishing and wellbeing." },
  ],
  politics: [
    { anchor: "politics textbook chapters on power, authority and influence", case: "a minister, media owner or platform changing behaviour without direct force", challenge: "distinguish visible coercion from agenda-setting and soft power", method: "identify actor, resource, target, compliance mechanism and resistance", misconception: "power is not only what governments do", sourceLink: "Use government textbook discussions of power and authority." },
    { anchor: "legitimacy sections on consent, law and rightful rule", case: "a government winning office legally but losing public trust", challenge: "explain the gap between legal power and accepted authority", method: "compare legality, consent, performance, tradition and procedural fairness", misconception: "legitimacy is not the same as popularity", sourceLink: "Use political science textbook material on legitimacy." },
    { anchor: "state formation chapters on sovereignty, territory and monopoly of legitimate force", case: "a crisis where courts, police, local governments and central government clash", challenge: "distinguish the state from the government of the day", method: "identify institutions, territory, law, coercive capacity and sovereignty", misconception: "the state is not just politicians", sourceLink: "Use government textbook definitions of the state." },
    { anchor: "democracy chapters on participation, representation and accountability", case: "high-turnout elections with weak media freedom or unequal participation", challenge: "explain why elections alone do not exhaust democracy", method: "assess participation, competition, rights, accountability and rule of law", misconception: "democracy is not simply majority preference", sourceLink: "Use textbook material on democratic institutions." },
    { anchor: "ideology sections on liberalism, rights and limited government", case: "a dispute over free speech, privacy or state surveillance", challenge: "connect individual liberty to institutional limits", method: "identify right, interference, justification, consent and harm", misconception: "liberalism is not just being socially permissive", sourceLink: "Use government/political theory textbook accounts of liberalism." },
    { anchor: "ideology sections on conservatism, tradition and organic society", case: "resistance to rapid constitutional reform despite acknowledged problems", challenge: "explain caution as a theory of knowledge and social order", method: "identify inherited institution, risk of change, authority and continuity", misconception: "conservatism is not simply dislike of change", sourceLink: "Use political ideology textbook material on conservatism." },
    { anchor: "ideology sections on socialism, equality and class power", case: "a debate over public ownership, unions or redistribution", challenge: "separate moral equality claims from institutional design", method: "identify ownership, class relation, distribution, state role and democracy", misconception: "socialism is not any government spending", sourceLink: "Use political ideology textbook material on socialism." },
    { anchor: "populism literature on people, elites and anti-pluralist rhetoric", case: "a leader claiming only they represent the real people", challenge: "explain why populism can be democratic in language but anti-institutional in practice", method: "identify people/elite framing, excluded groups, leader claim and institutional target", misconception: "populism is not just popular policy", sourceLink: "Use politics textbook discussions of parties, representation and democratic strain." },
    { anchor: "federalism chapters on divided sovereignty and levels of government", case: "public health or education policy split between national and regional authorities", challenge: "explain why divided power can protect liberty and create coordination problems", method: "map competences, fiscal authority, conflict resolution and accountability", misconception: "federalism is not simple decentralisation", sourceLink: "Use government textbook material on federal systems." },
    { anchor: "public policy chapters on agenda-setting, implementation and evaluation", case: "a manifesto promise failing during delivery because incentives and capacity were ignored", challenge: "analyse policy beyond announcement and intention", method: "track problem definition, instrument, implementation, stakeholder and outcome measure", misconception: "policy is not the same as political messaging", sourceLink: "Use public policy sections in government textbooks." },
  ],
  science: [
    { anchor: "science textbook sections on hypothesis and testability", case: "a claim that a plant grows faster under one light condition than another", challenge: "turn a vague idea into a testable explanatory claim", method: "state independent variable, dependent variable, prediction and possible disconfirmation", misconception: "a hypothesis is not a wild guess", sourceLink: "Use OpenStax science method material." },
    { anchor: "philosophy of science and method sections on falsifiability", case: "a claim adjusted after every failed prediction so it can never be wrong", challenge: "explain why possible failure matters for scientific status", method: "name the observation that would count against the claim", misconception: "falsifiable does not mean false", sourceLink: "Use scientific method textbook discussions of testability." },
    { anchor: "experimental design chapters on controls and variables", case: "testing a supplement while controlling sleep, training and diet", challenge: "explain why comparison groups make causal inference stronger", method: "identify control group, variable isolation, randomisation and measurement", misconception: "an experiment is not just trying something and seeing what happens", sourceLink: "Use OpenStax material on controlled experiments." },
    { anchor: "research literacy sections on correlation, causation and confounding", case: "people who exercise more also reporting better mood", challenge: "show why association alone does not identify cause", method: "ask about confounders, temporal order, mechanism and experimental evidence", misconception: "correlation is not useless; it is just limited", sourceLink: "Use textbook explanations of causal inference limits." },
    { anchor: "scientific communication sections on peer review", case: "a dramatic preprint headline later revised after expert criticism", challenge: "explain peer review as filter, not guarantee", method: "distinguish submission, reviewer critique, revision, publication and replication", misconception: "peer-reviewed does not mean certainly true", sourceLink: "Use science textbook material on scientific publication." },
    { anchor: "research methods material on replication and reproducibility", case: "a psychology or biomedical finding that fails in a larger independent sample", challenge: "explain why replication tests durability rather than originality", method: "compare protocol, sample, measurement, effect size and independent repetition", misconception: "a failed replication does not always mean fraud", sourceLink: "Use scientific method material on reproducibility." },
    { anchor: "statistics sections on significance, null hypotheses and effect size", case: "a large study finding a statistically significant but tiny effect", challenge: "separate statistical signal from practical importance", method: "compare p-value, confidence interval, effect size and study design", misconception: "statistical significance does not mean important or certain", sourceLink: "Use textbook statistics/science interpretation material." },
    { anchor: "model sections on representation, simplification and prediction", case: "a climate, epidemiological or biological model simplifying complex systems", challenge: "explain what the model includes, excludes and predicts", method: "identify assumptions, variables, mechanism, validation and scope", misconception: "a model is not a miniature copy of reality", sourceLink: "Use science textbook material on models and theory." },
    { anchor: "biology textbook chapters on natural selection and population change", case: "antibiotic resistance increasing because some variants survive treatment", challenge: "explain adaptation without implying intention", method: "track variation, heritability, differential survival and population frequency", misconception: "individual organisms do not evolve because they need to", sourceLink: "Use OpenStax Biology evolution chapters." },
    { anchor: "history/philosophy of science material on paradigms and normal science", case: "a new framework changing which questions scientists consider legitimate", challenge: "explain paradigm shift without making science sound irrational", method: "distinguish anomaly, crisis, new framework and changed standards", misconception: "paradigm shift is not any new discovery", sourceLink: "Use science method and philosophy references on theory change." },
  ],
  "social-engineering": [
    { anchor: "consumer behaviour and human-factors material on influence mechanisms", case: "a salesperson, manager or interface changing behaviour through framing and timing", challenge: "analyse influence without assuming all influence is abusive", method: "identify cue, target motivation, consent, transparency and outcome", misconception: "influence is not automatically manipulation", sourceLink: "Use consumer behaviour and ethics sources as the anchor." },
    { anchor: "security-awareness material on authority cues and verification", case: "an email appearing to come from a boss, bank or platform administrator", challenge: "explain why authority accelerates compliance", method: "check identity, channel, urgency, request and independent verification", misconception: "authority is not evidence unless it is verified", sourceLink: "Use NIST-style security awareness and human factors material." },
    { anchor: "social influence material on reciprocity and obligation", case: "a small favour creating pressure to share information or accept a bad deal", challenge: "distinguish genuine reciprocity from engineered indebtedness", method: "identify gift, timing, requested return and proportionality", misconception: "reciprocity is not always kindness; it can be leveraged", sourceLink: "Use consumer behaviour material on persuasion principles." },
    { anchor: "behavioural material on scarcity, urgency and loss aversion", case: "a countdown timer pressuring a user to buy or disclose information", challenge: "explain how urgency suppresses verification", method: "identify scarcity claim, deadline, evidence and cost of waiting", misconception: "scarcity is not proof of value", sourceLink: "Use consumer behaviour and dark-pattern references." },
    { anchor: "consumer behaviour material on social proof and reference groups", case: "fake reviews or visible popularity making a risky action seem normal", challenge: "explain when group behaviour becomes persuasive evidence", method: "check uncertainty, reference group, authenticity and relevance", misconception: "many people doing something does not make it safe", sourceLink: "Use consumer behaviour discussions of social influence." },
    { anchor: "security material on pretexting and identity claims", case: "someone posing as IT support to reset credentials or gather internal details", challenge: "analyse the story that makes the request seem legitimate", method: "identify role, script, emotional pressure, requested action and verification gap", misconception: "pretexting is not only a technical attack; it is social role-play", sourceLink: "Use NIST/security awareness material on social engineering." },
    { anchor: "security-awareness material on phishing cues and response", case: "a message combining urgency, link redirection and credential request", challenge: "explain the anatomy of the attack without teaching exploitation steps", method: "inspect sender, link, request, emotional cue and safe reporting path", misconception: "phishing is not only badly spelled emails", sourceLink: "Use security-awareness references for defensive recognition." },
    { anchor: "elicitation material from security and interpersonal influence contexts", case: "casual conversation drawing out project names, travel plans or internal processes", challenge: "show how information can be extracted without direct questioning", method: "track topic opening, flattery, reciprocity, silence and disclosure", misconception: "elicitation is not always an obvious interrogation", sourceLink: "Use security human-factors material ethically and defensively." },
    { anchor: "dark-pattern and consumer protection material on interface manipulation", case: "a cancellation flow that hides the exit and emphasises fear of loss", challenge: "read interface design as behavioural steering", method: "identify user goal, friction, asymmetry, default and hidden cost", misconception: "bad UX is not always accidental", sourceLink: "Use consumer behaviour and security ethics material." },
    { anchor: "ethics material on persuasion, autonomy and consent", case: "a coach, teacher or marketer influencing behaviour transparently for the user's benefit", challenge: "define the line between persuasion and coercion", method: "check truthfulness, consent, agency, proportionality and reversibility", misconception: "ethical persuasion is not weak persuasion", sourceLink: "Use ethics textbook material alongside influence sources." },
  ],
  sociology: [
    { anchor: "sociology textbook chapters on structure and agency", case: "career choices shaped by school quality, networks and local labour markets", challenge: "connect individual action to patterned constraints", method: "identify institution, norm, resource distribution and agency within limits", misconception: "social structure does not mean individuals have no choices", sourceLink: "Use OpenStax sociology material on social structure." },
    { anchor: "norms chapters on informal rules and sanctions", case: "a group chat, workplace or classroom enforcing unwritten rules", challenge: "show how norms become visible when someone breaks them", method: "identify expectation, violation, sanction and group boundary", misconception: "norms are not only formal laws", sourceLink: "Use sociology textbook explanations of norms and social control." },
    { anchor: "socialisation sections on family, school, peers and media", case: "a child learning gender, class or achievement expectations before choosing them consciously", challenge: "explain learning of social roles without assuming passive programming", method: "track agents of socialisation, rewards, modelling and internalisation", misconception: "socialisation is not brainwashing", sourceLink: "Use OpenStax socialisation chapters." },
    { anchor: "stratification chapters on class, income, wealth and life chances", case: "two students with similar talent but different housing, networks and financial buffers", challenge: "show how class shapes opportunity beyond income", method: "compare wealth, education, cultural capital, security and mobility", misconception: "class is not just how much someone earns this month", sourceLink: "Use sociology textbook material on stratification." },
    { anchor: "status and social hierarchy material", case: "a low-paid role receiving prestige while a necessary role receives little honour", challenge: "separate economic value from social honour", method: "identify status markers, audience, role expectations and recognition", misconception: "status is not the same as money or formal authority", sourceLink: "Use sociology material on status and stratification." },
    { anchor: "role theory sections on expectations and conflict", case: "a worker, parent and student facing incompatible demands at the same time", challenge: "explain stress as a conflict of roles, not just poor time management", method: "map roles, expectations, sanctions and incompatible obligations", misconception: "role conflict is not personal weakness", sourceLink: "Use sociology textbook role theory." },
    { anchor: "bureaucracy chapters on rational-legal authority and organisation", case: "a hospital, school or welfare office using rules that are efficient and impersonal", challenge: "explain bureaucracy's strengths and dehumanising risks", method: "identify hierarchy, written rules, specialisation, records and discretion", misconception: "bureaucracy is not just any annoying paperwork", sourceLink: "Use OpenStax/Weberian bureaucracy material." },
    { anchor: "deviance chapters on labelling, norms and power", case: "the same behaviour treated as harmless in one group and deviant in another", challenge: "ask who has the power to label behaviour as deviant", method: "identify norm, violation, label, sanction and social status of actor", misconception: "deviance is not simply bad behaviour", sourceLink: "Use sociology textbook material on deviance and labelling." },
    { anchor: "social capital material on networks and resources", case: "a job opportunity travelling through friends, alumni or professional contacts", challenge: "explain how relationships become unequal resources", method: "map network tie, trust, information flow and gatekeeping", misconception: "social capital is not just knowing lots of people", sourceLink: "Use sociology material on networks and capital." },
    { anchor: "Durkheimian material on anomie, regulation and social change", case: "rapid economic change weakening shared expectations about success and belonging", challenge: "explain normlessness as social condition, not just personal aimlessness", method: "identify disrupted norms, weakened regulation, aspiration gap and social consequence", misconception: "anomie is not ordinary boredom", sourceLink: "Use sociology textbook discussions of Durkheim and social integration." },
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
      sourceLink: "Use the listed textbook sources as the reading anchor.",
    }
  );
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
      dimension: "knowledge",
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
      dimension: "application",
      explanation: `${seed.concept} becomes useful when it changes what you notice in a case. Here, the case is ${detail.case}, and the challenge is to ${detail.challenge}.`,
      id: `${slug}-application`,
      prompt: `Which application best follows the article's treatment of ${seed.concept}?`,
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
  const [firstAlt, secondAlt] = neighbouringConcepts(topic, seed.concept);
  const variantSeed = `${topic}:${seed.concept}`.split("").reduce(
    (total, character) => total + character.charCodeAt(0),
    seedIndex * 11,
  );
  const opening = [
    `${seed.concept} is not a decorative term in ${profile.topic.label.toLowerCase()}; it is one way the discipline answers a central question. ${frame.disciplinaryQuestion} In this lesson, the term means ${seed.focus}.`,
    `A textbook treatment of ${seed.concept} begins with the discipline's problem-space rather than with a dictionary definition. ${frame.disciplinaryQuestion} Here, ${seed.concept} refers to ${seed.focus}.`,
    `To read ${seed.concept} at university level, start with the question it was built to handle. ${frame.disciplinaryQuestion} The working definition for this lesson is ${seed.focus}.`,
    `${profile.topic.label} uses concepts like ${seed.concept} to turn a messy case into an analysable problem. ${frame.disciplinaryQuestion} In this article, ${seed.concept} names ${seed.focus}.`,
  ][variantSeed % 4];
  const evidenceLead = [
    `${frame.evidenceStandard} Applied to ${seed.concept}, that means moving from the abstract definition to a concrete evidential claim.`,
    `The evidential burden matters. ${frame.evidenceStandard} Without that standard, ${seed.concept} becomes a label rather than an explanation.`,
    `A serious use of ${seed.concept} has to meet the discipline's evidential rules: ${frame.evidenceStandard.toLowerCase()}`,
    `The textbook habit is to ask what would count as support. ${frame.evidenceStandard} That is the standard ${seed.concept} has to meet.`,
  ][(variantSeed + 1) % 4];
  const caseLead = [
    `${frame.caseWorld} For ${seed.concept}, the practical analytic move is ${seed.practice}.`,
    `A useful case should be concrete rather than ornamental. ${frame.caseWorld} In that setting, ${seed.concept} is applied by ${seed.practice}.`,
    `The concept becomes clearer in a case. ${frame.caseWorld} The relevant move is ${seed.practice}.`,
    `Do not begin with a conclusion and then attach the term. Begin with the material: ${frame.caseWorld} Then use ${seed.concept} by ${seed.practice}.`,
  ][(variantSeed + 2) % 4];
  const debateLead = [
    `${frame.advancedProblem} This is the part of the lesson that should feel challenging.`,
    `The advanced issue is not memorisation but judgement. ${frame.advancedProblem}`,
    `At university level, ${seed.concept} has to survive objection. ${frame.advancedProblem}`,
    `The concept is strongest when its pressure points are visible. ${frame.advancedProblem}`,
  ][(variantSeed + 3) % 4];

  return [
    {
      heading: "Textbook Orientation",
      body: [
        `${opening} The textbook anchor for this lesson is ${detail.anchor}. Read the concept as a way of organising a difficult problem, not as a flashcard answer. The first test is whether the term helps you see a pattern that ordinary description would miss.`,
        `${detail.sourceLink} The source material matters because ${seed.concept} is only useful when its limits are visible. A university-level reading asks what work the concept does, what evidence it organises, which assumptions it inherits from the field and what would count as a serious counterexample.`,
      ],
    },
    {
      heading: "Mechanism and Evidence",
      body: [
        `${evidenceLead} For this specific lesson, the analytic method is to ${detail.method}. If the concept is being used well, it should explain why one interpretation is stronger than another, not merely rename the thing being discussed.`,
        `A useful comparison is ${firstAlt ?? "a neighbouring concept"}. Both may sit near ${seed.concept} inside ${profile.topic.label.toLowerCase()}, but they do not ask the same question. ${seed.concept} directs attention to ${seed.focus}; ${firstAlt ?? "the neighbouring idea"} would push the analysis toward a different mechanism, scale or kind of evidence. The distinction matters because textbook reading often turns on small conceptual differences.`,
      ],
    },
    {
      heading: "Case and Interpretation",
      body: [
        `${caseLead} The concrete case for this lesson is ${detail.case}. Your task is to ${detail.challenge}. That does not mean forcing the concept onto the example. It means looking for the precise moment where the concept reveals something that ordinary description would miss.`,
        `Suppose you were writing a paragraph rather than taking a quiz. The paragraph would not begin, "${seed.concept} is important." It would begin with the case, describe the relevant detail, and then show why ${seed.concept} explains that detail better than a looser alternative. If ${secondAlt ?? "another concept"} explains the case better, the disciplined move is to change concepts rather than protect the first answer.`,
      ],
    },
    {
      heading: "Debate, Limits, and Misuse",
      body: [
        `${debateLead} Concepts are rarely treated as final answers. They are tools inside arguments, and arguments have opponents. A strong reader asks what the concept illuminates, what it obscures and who benefits when that framing becomes dominant.`,
        `${frame.limits} With ${seed.concept}, a common misconception is that ${detail.misconception}. Misuse usually happens when the term becomes too elastic. If it can explain every case, it has stopped explaining any case in particular. Keep the concept under pressure: specify the case, state the evidence, compare the alternative and name the limit of the claim.`,
      ],
    },
    {
      heading: "Reading Task",
      body: [
        `${frame.studyPractice} Make the paragraph difficult enough to be useful: include one sentence defining ${seed.concept}, one sentence applying it to ${detail.case}, and one sentence naming why ${detail.misconception}.`,
        `The purpose is not to collect terminology. It is to build a disciplined habit of reading. When ${seed.concept} appears again in a textbook, article, lecture or real-world problem, you should be able to ask: what is the author claiming, what evidence is doing the work, what concept is nearby but different, and what would make this interpretation fail?`,
      ],
    },
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
    deck: `${seed.concept} is taught through ${detail.anchor}, using ${detail.case} as the working case and ${detail.method} as the core study move.`,
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

export const LEARNING_LESSONS: LearningLesson[] = Object.entries(
  topicLessonSeeds,
).flatMap(([topic, seeds]) =>
  seeds.map((seed, index) => buildLesson(topic as LearningTopicId, seed, index)),
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
