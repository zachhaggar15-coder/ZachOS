import { buildAuthoredLessons, type AuthoredLesson } from "./types";

// Ten hand-written Philosophy lessons. Each is researched, concept-specific
// prose with real examples, named thinkers and genuine recall questions whose
// wrong answers are believable misconceptions rather than obvious filler.
const philosophy: AuthoredLesson[] = [
  {
    concept: "Argument Validity",
    level: "GCSE",
    summary: "whether a conclusion follows from its premises",
    estimatedMinutes: 7,
    deck: "A valid argument is a machine for moving truth from premises to conclusion without leaks. Crucially, it can run perfectly on false fuel — which is why a valid argument and a true conclusion are two completely different things.",
    keyTerms: [
      { label: "Validity", value: "The structural property that if the premises were true, the conclusion could not be false." },
      { label: "Soundness", value: "A valid argument that also happens to have all-true premises. Soundness is validity plus truth." },
      { label: "Counterexample", value: "An imagined situation where every premise is true but the conclusion is false. One is enough to prove invalidity." },
      { label: "Affirming the consequent", value: "A classic invalid pattern: 'If P then Q; Q; therefore P.' Looks convincing, leaks badly." },
    ],
    sections: [
      {
        heading: "Structure, not content",
        body: [
          `Validity is the single most misunderstood word in logic, because in everyday speech "valid" just means "good" or "true". In philosophy it means something narrower and stranger. An argument is valid when its shape guarantees that IF the premises are true, the conclusion cannot be false. Notice what that definition does not mention: whether the premises are actually true. Validity is about the plumbing between claims, not about the claims themselves.`,
          `Take the most famous argument in the Western canon: "All humans are mortal. Socrates is a human. Therefore Socrates is mortal." It is valid because there is no possible world where the two premises hold and the conclusion fails. The logic is watertight. But the same watertight shape can carry nonsense.`,
        ],
      },
      {
        heading: "Valid, sound, and neither",
        body: [
          `Consider: "All fish can fly. A salmon is a fish. Therefore a salmon can fly." This argument is perfectly valid. The reasoning has no leak — if fish really could fly, salmon really would. It is just not sound, because the first premise is false. Validity is preserved; truth is not. A valid argument with a false premise proves precisely nothing.`,
          `That gives us the two-part vocabulary logicians actually use. Validity is about form: does the conclusion follow? Soundness is validity plus true premises: does the conclusion follow AND is the fuel real? Only a sound argument forces you to accept the conclusion. This is why spotting a valid-but-unsound argument is a real skill — the reasoning dazzles you while a smuggled false premise does the damage.`,
        ],
      },
      {
        heading: "The counterexample test",
        body: [
          `To show an argument is invalid, you do not attack whether the premises are true. You describe one situation where the premises are all true and the conclusion is still false. That single scenario is a counterexample, and it is fatal.`,
          `The everyday trap is "affirming the consequent": "If it rained, the ground is wet. The ground is wet. Therefore it rained." It feels airtight, but the counterexample writes itself — someone left the sprinkler on. Premises true, conclusion false, argument dead. Detectives, doctors and gossip all fall into this: a true "if-then" plus a true effect does not license you to run the arrow backwards.`,
        ],
      },
      {
        heading: "Truth in, truth out",
        body: [
          `Here is the deep reason logicians obsess over form. A valid argument is truth-preserving: it can never turn true premises into a false conclusion, so if you feed it truths, you are guaranteed to get a truth out. That is the entire point of deductive reasoning — it lets you extend what you already know without adding new errors. Mathematics is built on nothing else.`,
          `But truth-preservation runs one way only. Validity makes no promise about false premises; feed a valid argument garbage and it will happily hand you back garbage, dressed in the same respectable structure. This is why "but the logic is sound" is such a common bluff. People use "sound" loosely to mean "the reasoning hangs together", when the technical demand is far heavier: every premise must actually be true as well. An argument can have flawless structure and a false starting point, and then its tidy logic is precisely what makes the error persuasive.`,
        ],
      },
      {
        heading: "Why bother with form",
        body: [
          `Separating validity from truth gives you a portable defence against persuasion. When someone's conclusion sounds right, you can ask two independent questions: does it actually follow, and are the starting claims true? A slick speaker can win on neither and still carry a room, because a confident tone hides both a leaky inference and a smuggled false premise.`,
          `One boundary worth keeping: validity is a demand you can only make of deductive arguments, the ones that claim certainty. Inductive arguments — "the sun has risen every day, so it will rise tomorrow" — are not valid or invalid, only strong or weak. They trade guarantee for probability, and judging them well is a different craft. Knowing which kind of argument you are facing tells you which standard to hold it to: airtight structure for the deductive, weight of evidence for the inductive.`,
        ],
      },
      {
        heading: "Spotting it in the wild",
        body: [
          `Watch for affirming the consequent the next time an advert reasons at you. "Successful people wake at 5am — so wake at 5am and you'll be successful" runs the arrow backwards: even if the premise about successful people were true, the sprinkler objection applies, because plenty of other things could explain success. The same leak hides in "he's rich, so he must be clever" and "the diet worked for her, so it will work for me". Once you can separate whether a conclusion follows from whether it happens to be true, a surprising amount of confident everyday reasoning turns out to be dressed-up guessing.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What does it mean for an argument to be valid?",
        choices: [
          { id: "a", label: "All of its premises are actually true" },
          { id: "b", label: "If its premises were true, its conclusion could not be false" },
          { id: "c", label: "Its conclusion is true" },
          { id: "d", label: "It is persuasive to most reasonable people" },
        ],
        correctChoiceId: "b",
        explanation: "Validity is purely structural: it guarantees that true premises would force a true conclusion. It says nothing about whether the premises are in fact true — an argument with all-true premises is sound, which is a further property beyond validity.",
      },
      {
        dimension: "reasoning",
        prompt: "The argument 'All fish can fly; a salmon is a fish; therefore a salmon can fly' is best described as:",
        choices: [
          { id: "a", label: "Invalid, because the conclusion is false" },
          { id: "b", label: "Sound, because the reasoning has no gap" },
          { id: "c", label: "Valid but unsound, because a premise is false" },
          { id: "d", label: "Neither valid nor invalid, because it is silly" },
        ],
        correctChoiceId: "c",
        explanation: "The shape is watertight — if fish could fly, salmon would — so it is valid. But the first premise is false, so it is unsound. Validity survives false premises; soundness does not.",
      },
      {
        dimension: "depth",
        prompt: "How do you prove that an argument is invalid?",
        choices: [
          { id: "a", label: "Describe a case where all premises are true but the conclusion is false" },
          { id: "b", label: "Point out that one of its premises is false" },
          { id: "c", label: "Show that its conclusion is false" },
          { id: "d", label: "Show that it fails to convince people" },
        ],
        correctChoiceId: "a",
        explanation: "A single counterexample — premises all true, conclusion false — proves invalidity. Attacking the truth of a premise is an objection to soundness, not validity, and showing the conclusion is false does not show the reasoning is bad.",
      },
      {
        dimension: "reasoning",
        prompt: "'If it rained, the ground is wet. The ground is wet. Therefore it rained.' Why is this invalid?",
        choices: [
          { id: "a", label: "Because rain does not always make the ground wet" },
          { id: "b", label: "Because something else, like a sprinkler, could make the ground wet" },
          { id: "c", label: "Because the first premise has not been proven" },
          { id: "d", label: "Because the conclusion happens to be false" },
        ],
        correctChoiceId: "b",
        explanation: "This is 'affirming the consequent'. A sprinkler is a counterexample: both premises can be true while the conclusion is false, so the inference does not follow.",
      },
      {
        dimension: "depth",
        prompt: "What makes an argument sound rather than merely valid?",
        choices: [
          { id: "a", label: "It is valid and its conclusion is true" },
          { id: "b", label: "It is valid and all of its premises are actually true" },
          { id: "c", label: "It is valid and highly persuasive" },
          { id: "d", label: "It is valid and uses formal notation" },
        ],
        correctChoiceId: "b",
        explanation: "Soundness = validity + all-true premises. Only a sound argument actually forces its conclusion on you; a true conclusion on its own can sit on top of a completely broken argument.",
      },
    ],
    sources: [
      { label: "Logical Consequence (SEP)", note: "Stanford Encyclopedia entry on what it means for a conclusion to follow.", type: "Reference", url: "https://plato.stanford.edu/entries/logical-consequence/" },
      { label: "Validity and Soundness (IEP)", note: "Internet Encyclopedia of Philosophy primer on the two core properties of arguments.", type: "Reference", url: "https://iep.utm.edu/val-snd/" },
    ],
  },
  {
    concept: "Epistemology",
    level: "A-level",
    summary: "knowledge, belief, justification and doubt",
    estimatedMinutes: 8,
    deck: "For two thousand years philosophers thought knowledge was justified true belief. Then in 1963 a three-page paper broke that definition with a single lucky-guess counterexample — and epistemology has been trying to repair the crack ever since.",
    keyTerms: [
      { label: "JTB", value: "The classical analysis: you know something if you believe it, it is true, and you are justified in believing it." },
      { label: "Gettier case", value: "A scenario where all three JTB conditions hold but we hesitate to call it knowledge, usually because of luck." },
      { label: "Justification", value: "Having good reasons or reliable grounds for a belief, as opposed to a lucky hunch." },
      { label: "Reliabilism", value: "The view that a belief counts as knowledge if it was produced by a reliable, truth-tracking process." },
    ],
    sections: [
      {
        heading: "More than a lucky guess",
        body: [
          `Epistemology is the study of knowledge: what it is, where it comes from, and how much of it we are entitled to. The starting question is deceptively simple. What separates knowing that it will rain from merely guessing it, or fearing it, or hoping it? All four can point at the same fact.`,
          `Plato's answer, which held for millennia, was that knowledge is justified true belief. To know that the shop is open, three things must line up: you have to believe it, it has to actually be true, and you need good reasons — you saw the lights on, the sign flipped, a friend just walked out. Belief without truth is error. Truth without belief is not yours. Truth and belief without justification is a fluke. All three together, supposedly, is knowledge.`,
        ],
      },
      {
        heading: "The Gettier bomb",
        body: [
          `In 1963 Edmund Gettier published a paper barely three pages long and detonated the definition. His move was to construct cases where all three conditions are satisfied and yet, intuitively, there is no knowledge. Here is the cleanest version, from Bertrand Russell. You glance at a reliable clock. It reads two o'clock. It is in fact two o'clock, and you have every reason to trust the clock. So you have a justified, true belief that it is two o'clock. The catch: the clock stopped exactly twelve hours ago. You are right, and you are justified — but only by luck. That does not feel like knowledge.`,
          `The lesson is unsettling. Justification does not guarantee that your belief is connected to the truth in the right way. You can do everything an ideal reasoner should do and still land on a true belief for the wrong reason. Gettier showed that JTB is at best necessary and not sufficient.`,
        ],
      },
      {
        heading: "Patching the definition",
        body: [
          `Philosophers rushed to add a fourth ingredient. One popular fix is the "no false lemmas" condition: your reasoning must not pass through any false step. In the clock case, your belief secretly leans on the false assumption "this clock is currently running", which disqualifies it.`,
          `A more radical response, reliabilism, drops the demand for conscious justification altogether. On this view a belief is knowledge if it was produced by a reliable process — good eyesight, a working clock, a trustworthy witness — whether or not you can articulate your reasons. A stopped clock is not a reliable process, so the case fails cleanly. Decades on, no patch commands full agreement, which is itself the interesting result: "knowledge" is harder to pin down than almost anyone expected.`,
        ],
      },
      {
        heading: "The sceptic at the door",
        body: [
          `Behind these puzzles stands a bigger threat: scepticism. René Descartes asked how you could rule out that an all-powerful "evil demon" was feeding you a convincing illusion of a world. The modern remake is the brain in a vat, or the simulation. If you cannot prove you are not being deceived, can you claim to know anything about the external world at all?`,
          `The point of taking the sceptic seriously is not to end up believing nothing. It is to see how much of ordinary knowledge rests on trust — in our senses, our memory, and the testimony of others — that we can never fully verify from the inside. Epistemology is the discipline of asking, without cynicism, exactly how good our reasons really are.`,
        ],
      },
      {
        heading: "Knowing in daily life",
        body: [
          `You rely on justified true belief dozens of times before breakfast, mostly on testimony you never check: the time on your phone, the train time in an app, a headline a friend forwarded. Gettier lurks in all of it. You "know" the meeting is at three because a colleague said so; it really is at three; but they were half-guessing and happened to be right — true, justified, and yet not quite knowledge. Noticing how much of what you "know" is borrowed trust is not paranoia. It is a realistic sense of which of your beliefs would actually survive a second look.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "According to the classical 'JTB' analysis, knowledge requires which three things?",
        choices: [
          { id: "a", label: "Belief, certainty and proof" },
          { id: "b", label: "Belief, truth and justification" },
          { id: "c", label: "Truth, evidence and consensus" },
          { id: "d", label: "Confidence, coherence and usefulness" },
        ],
        correctChoiceId: "b",
        explanation: "The traditional definition is justified true belief: you must believe it, it must be true, and you must have good grounds. Demanding certainty and proof asks for more than JTB requires, and consensus is not part of the definition at all.",
      },
      {
        dimension: "reasoning",
        prompt: "In the stopped-clock case, your belief that it is two o'clock is true and justified. Why is it still not knowledge?",
        choices: [
          { id: "a", label: "Because the clock is broken, so your belief is actually false" },
          { id: "b", label: "Because you had no real justification for trusting the clock" },
          { id: "c", label: "Because you are right only by luck, not because your reason tracked the truth" },
          { id: "d", label: "Because you did not check a second clock" },
        ],
        correctChoiceId: "c",
        explanation: "Your belief is genuinely true and genuinely justified — but only coincidentally, because the clock froze at the right time. The lucky disconnect between reason and truth is exactly what Gettier cases expose.",
      },
      {
        dimension: "depth",
        prompt: "What did Gettier's 1963 paper actually show?",
        choices: [
          { id: "a", label: "That justified true belief is not always sufficient for knowledge" },
          { id: "b", label: "That knowledge is impossible" },
          { id: "c", label: "That true beliefs never need justification" },
          { id: "d", label: "That most of our everyday beliefs are false" },
        ],
        correctChoiceId: "a",
        explanation: "Gettier produced cases meeting all three JTB conditions that still are not knowledge, showing JTB is not sufficient. He did not argue that knowledge is impossible — that stronger claim is scepticism, a separate worry.",
      },
      {
        dimension: "reasoning",
        prompt: "How does reliabilism handle the stopped-clock case?",
        choices: [
          { id: "a", label: "It says the belief is knowledge because it is true and justified" },
          { id: "b", label: "It denies knowledge because the belief was not produced by a reliable process" },
          { id: "c", label: "It says all clock-based beliefs are unreliable" },
          { id: "d", label: "It rejects the case as impossible" },
        ],
        correctChoiceId: "b",
        explanation: "Reliabilism asks whether the belief came from a truth-tracking process. A stopped clock is not reliable, so the belief fails to count as knowledge — no fourth 'justification' clause needed.",
      },
      {
        dimension: "depth",
        prompt: "What is the philosophical point of Descartes' 'evil demon' scenario?",
        choices: [
          { id: "a", label: "To prove that demons exist" },
          { id: "b", label: "To show that our senses are always wrong" },
          { id: "c", label: "To challenge whether we can rule out being systematically deceived about the external world" },
          { id: "d", label: "To argue that knowledge comes only from religion" },
        ],
        correctChoiceId: "c",
        explanation: "The demon (and its modern cousins, the brain in a vat and the simulation) dramatises sceptical doubt: if you cannot prove you are not deceived, your knowledge of the outside world rests on unverifiable trust.",
      },
    ],
    sources: [
      { label: "The Analysis of Knowledge (SEP)", note: "Stanford Encyclopedia survey of JTB, Gettier cases and the attempts to fix them.", type: "Reference", url: "https://plato.stanford.edu/entries/knowledge-analysis/" },
      { label: "Epistemology (SEP)", note: "Broad overview of knowledge, justification, sources of belief and scepticism.", type: "Reference", url: "https://plato.stanford.edu/entries/epistemology/" },
    ],
  },
  {
    concept: "Utilitarianism",
    level: "A-level",
    summary: "judging actions by their consequences for wellbeing",
    estimatedMinutes: 8,
    deck: "Utilitarianism reduces morality to one instruction: produce the greatest happiness for the greatest number. It is elegant, egalitarian, and unnervingly willing to sacrifice one person for the many — which is the source of both its power and its most famous nightmares.",
    keyTerms: [
      { label: "Greatest happiness principle", value: "The right action is the one that maximises overall wellbeing, counting everyone's happiness equally." },
      { label: "Hedonic calculus", value: "Bentham's attempt to weigh pleasures and pains by intensity, duration, certainty, and reach." },
      { label: "Higher and lower pleasures", value: "Mill's claim that intellectual and moral pleasures count for more than mere physical ones." },
      { label: "Act vs rule", value: "Whether you apply the principle to each individual act, or to the rule the act follows." },
    ],
    sections: [
      {
        heading: "Add up the happiness",
        body: [
          `Utilitarianism is consequentialism's most famous form: an action is right or wrong purely because of its results, and the only result that ultimately matters is wellbeing. Jeremy Bentham put it bluntly in the late 1700s — the goal of morality and law is "the greatest happiness of the greatest number". Pleasure is the only thing good in itself; pain the only thing bad in itself; everything else is good or bad because of the pleasure or pain it produces.`,
          `Bentham even proposed a "hedonic calculus" to make this measurable: score each option by the intensity of pleasure it brings, how long it lasts, how certain it is, how soon it arrives, and how many people it touches. The idea was radical for its time because it counts everyone equally. The king's happiness and the pauper's happiness enter the sum at the same weight. That built-in egalitarianism is why utilitarianism drove real reforms in prisons, animal welfare and voting rights.`,
        ],
      },
      {
        heading: "Not all pleasures are equal",
        body: [
          `Bentham's calculus had an awkward implication: if only the quantity of pleasure matters, then a life of simple sensory indulgence could outscore a life of thought. John Stuart Mill, writing in 1863, refused this. He distinguished higher pleasures — the intellectual, creative and moral — from lower, bodily ones, and argued the higher ones count for more.`,
          `His slogan is unforgettable: "It is better to be a human being dissatisfied than a pig satisfied; better to be Socrates dissatisfied than a fool satisfied." His test for which pleasures rank higher was empirical: ask people who have genuinely experienced both, and they overwhelmingly prefer the higher ones even when they come with more discontent. Mill thus tried to keep utilitarianism's rigour while rescuing it from the charge that it was a philosophy fit only for swine.`,
        ],
      },
      {
        heading: "The surgeon problem",
        body: [
          `The deepest objection to utilitarianism is that maximising the total can trample the individual. Imagine a surgeon with five patients dying for want of five different organs, and one healthy visitor in the waiting room whose organs would save all five. The arithmetic is clear: one death, five lives saved, a huge net gain in wellbeing. Utilitarianism, taken literally, seems to recommend the murder.`,
          `Almost everyone recoils, and the recoil is the argument. It suggests we hold rights and justice as constraints that a good outcome cannot simply override. Related worries pile up: utilitarianism can seem to demand you give away nearly everything to those who need it more (the demandingness objection), and it can ignore how happiness is distributed, letting a contented majority feed off a suffering minority.`,
        ],
      },
      {
        heading: "Where it actually shows up",
        body: [
          `One reply is rule utilitarianism: instead of asking whether this act maximises happiness, ask which rules, if generally followed, would. A rule permitting surgeons to harvest visitors would terrify everyone into avoiding hospitals, so it fails — and the individual is protected without abandoning the theory.`,
          `Whatever its problems, utilitarian thinking is everywhere in modern life. Governments run cost-benefit analyses. Health systems ration treatment using QALYs — quality-adjusted life years — to squeeze the most health from a fixed budget. The effective altruism movement asks how a given pound can do the most good. Each is Bentham's calculus in a modern suit, and each inherits the same hard question: what happens to the person the sum decides to sacrifice?`,
        ],
      },
      {
        heading: "The calculus at the dinner table",
        body: [
          `You run utilitarian sums constantly. Splitting a group bill equally, choosing the restaurant that pleases the most friends, a manager handing the boring task to whoever minds it least — all quietly maximise total satisfaction. And you feel the objection just as often: the friend who ordered tap water resents subsidising everyone's cocktails, because an equal split ignored how the benefit was actually distributed. That flash of unfairness is the surgeon problem in miniature. Utilitarian thinking is genuinely useful for group decisions, right up to the moment it asks one person to absorb a cost for everyone else's gain.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is the core principle of utilitarianism?",
        choices: [
          { id: "a", label: "Always follow moral rules regardless of the outcome" },
          { id: "b", label: "The right action produces the greatest wellbeing for the greatest number" },
          { id: "c", label: "The right action is whatever a virtuous person would do" },
          { id: "d", label: "The right action is whatever benefits you most" },
        ],
        correctChoiceId: "b",
        explanation: "Utilitarianism judges actions solely by their consequences for overall wellbeing, counting everyone equally. Following rules regardless of outcome is closer to deontology; acting only for your own benefit is egoism, not utilitarianism.",
      },
      {
        dimension: "reasoning",
        prompt: "Why did Mill introduce 'higher' and 'lower' pleasures?",
        choices: [
          { id: "a", label: "To argue that pleasure does not matter at all" },
          { id: "b", label: "To answer the charge that utilitarianism is a philosophy fit only for pigs" },
          { id: "c", label: "To prove that the hedonic calculus can be measured precisely" },
          { id: "d", label: "To reject Bentham's greatest-happiness principle entirely" },
        ],
        correctChoiceId: "b",
        explanation: "Mill worried that counting only the quantity of pleasure would rank swinish indulgence above intellectual life. Ranking higher pleasures above lower ones answered the 'doctrine worthy only of swine' objection — while keeping, not rejecting, the greatest-happiness principle.",
      },
      {
        dimension: "reasoning",
        prompt: "What does the 'surgeon and five patients' thought experiment aim to show?",
        choices: [
          { id: "a", label: "That utilitarianism can license sacrificing an individual's rights for a greater total" },
          { id: "b", label: "That saving five lives is always wrong" },
          { id: "c", label: "That organ donation should be mandatory" },
          { id: "d", label: "That happiness cannot be measured" },
        ],
        correctChoiceId: "a",
        explanation: "The case is a counterexample: the maths favours killing one to save five, yet we recoil. That recoil suggests rights and justice constrain what a good outcome may demand — the central objection to utilitarianism.",
      },
      {
        dimension: "depth",
        prompt: "How does rule utilitarianism differ from act utilitarianism?",
        choices: [
          { id: "a", label: "It ignores consequences entirely" },
          { id: "b", label: "It asks which rules, if generally followed, would maximise wellbeing" },
          { id: "c", label: "It only applies to governments, not individuals" },
          { id: "d", label: "It says every act is permitted" },
        ],
        correctChoiceId: "b",
        explanation: "Rather than scoring each individual act, rule utilitarianism evaluates the general rule the act follows. This can protect individuals — a rule allowing surgeons to harvest visitors would have terrible general effects — while remaining consequentialist.",
      },
      {
        dimension: "depth",
        prompt: "Which modern practice most directly applies utilitarian reasoning?",
        choices: [
          { id: "a", label: "A constitution listing inviolable individual rights" },
          { id: "b", label: "A health system using QALYs to get the most health from a fixed budget" },
          { id: "c", label: "A court punishing on the basis of desert alone" },
          { id: "d", label: "A religion prescribing fixed duties" },
        ],
        correctChoiceId: "b",
        explanation: "QALY-based rationing maximises aggregate health outcomes from limited resources — Bentham's calculus in modern form. Inviolable rights and desert-based punishment are the kinds of constraint utilitarianism is often accused of overriding, not examples of it.",
      },
    ],
    sources: [
      { label: "Consequentialism (SEP)", note: "Stanford Encyclopedia entry situating utilitarianism within outcome-based ethics.", type: "Reference", url: "https://plato.stanford.edu/entries/consequentialism/" },
      { label: "The History of Utilitarianism (SEP)", note: "Bentham, Mill and the development of the greatest-happiness tradition.", type: "Reference", url: "https://plato.stanford.edu/entries/utilitarianism-history/" },
    ],
  },
  {
    concept: "Deontology",
    level: "A-level",
    summary: "duties, rights and rules that constrain action",
    estimatedMinutes: 8,
    deck: "Deontology is the moral theory that says some acts are simply forbidden, no matter how good the results. Where utilitarianism does arithmetic, Kant draws lines you may not cross — even to save lives — because the rightness of an act lives in the act itself, not its consequences.",
    keyTerms: [
      { label: "Categorical imperative", value: "Kant's supreme moral rule, binding on everyone regardless of their desires or goals." },
      { label: "Maxim", value: "The personal principle behind an action — the rule you would be acting on if you did it." },
      { label: "Ends, not means", value: "Kant's demand that we treat people as rational agents with their own goals, never merely as tools." },
      { label: "Perfect vs imperfect duty", value: "Duties we must always keep (do not lie) versus duties we must adopt but can fulfil flexibly (help others)." },
    ],
    sections: [
      {
        heading: "Some things are just wrong",
        body: [
          `Deontology comes from the Greek for "duty". Its central claim is that morality is a matter of rules and rights, not results. An action can be wrong even if it produces more happiness, and right even if it produces less. Torturing an innocent person to entertain a crowd would be wrong even if the crowd's delight outweighed the victim's pain. For a deontologist that verdict is obvious, and any theory that has to pause and calculate has already lost the plot.`,
          `This is the sharpest fault line in ethics. Consequentialists locate value in outcomes; deontologists locate it in the act and the will behind it. Immanuel Kant, writing in the 1780s, built the most rigorous version, grounding right and wrong not in feelings or God's commands but in reason itself.`,
        ],
      },
      {
        heading: "Kant's test",
        body: [
          `Kant's master rule is the categorical imperative — "categorical" because it binds you no matter what you happen to want, unlike a "hypothetical" imperative such as "if you want to pass, study." He gave it several formulations. The first: act only on a maxim you could will to become a universal law. Ask whether the principle behind your action could be followed by everyone without collapsing.`,
          `Lying fails this test. If everyone lied whenever convenient, promises and testimony would become worthless, and the very practice you are exploiting would self-destruct — so the maxim cannot be universalised. The second, more human, formulation: treat humanity, whether in yourself or another, always as an end and never merely as a means. Using a person purely as a tool — deceiving them, coercing them — denies their standing as a rational agent choosing their own ends.`,
        ],
      },
      {
        heading: "The murderer at the door",
        body: [
          `Kant pushed his rule to a conclusion most people find monstrous. If a would-be murderer asks where your friend is hiding, Kant argued you still may not lie, because the duty not to lie is absolute. Critics pounced: surely a theory that forbids a protective lie has confused rigour with rigidity.`,
          `The case exposes deontology's characteristic weakness. Rules can conflict — the duty to tell the truth against the duty to protect the innocent — and a system of exceptionless rules struggles to adjudicate. Later deontologists soften this by ranking duties or allowing that some are "prima facie", binding unless overridden by a weightier duty. The tension never fully disappears: the more you allow exceptions, the more you sound like the consequentialist you were trying to escape.`,
        ],
      },
      {
        heading: "Rights as trumps",
        body: [
          `For all the awkward edge cases, deontology captures something utilitarianism keeps fumbling: the idea that individuals have rights that cannot simply be outvoted by the majority's benefit. The philosopher Ronald Dworkin called rights "trumps" — cards that beat the ordinary calculation of collective welfare.`,
          `This is why deontological thinking dominates the places we least want traded away. Human rights law, the ethics of medical consent, the prohibition on torture, the rules of a fair trial — all say there are things you may not do to a person even to produce a better overall result. When a doctor refuses to harvest one patient to save five, or a court throws out a coerced confession, that is Kant's insistence at work: people are ends, not means.`,
        ],
      },
      {
        heading: "Duties you already keep",
        body: [
          `You are more of a deontologist than you think. You keep a boring promise to a friend when a better offer appears, even though breaking it would arguably produce more happiness all round. You would not read a partner's messages even if it would settle your worries, because some things are simply not yours to do. You leave a flattering lie off your CV that might have helped you. Each time, you are treating a rule or a person as a limit on the pursuit of good outcomes — Kant's insistence that certain acts are off the table however the sums come out.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is the central claim of deontology?",
        choices: [
          { id: "a", label: "The morality of an act depends only on its consequences" },
          { id: "b", label: "Some acts are right or wrong in themselves, regardless of the results" },
          { id: "c", label: "Morality is about developing a good character over time" },
          { id: "d", label: "Whatever produces the most happiness is right" },
        ],
        correctChoiceId: "b",
        explanation: "Deontology locates rightness in duties and the nature of the act itself, not in outcomes. Judging by consequences or by what maximises happiness describes consequentialism, while focusing on building good character describes virtue ethics.",
      },
      {
        dimension: "reasoning",
        prompt: "Using Kant's first formulation, why is lying wrong?",
        choices: [
          { id: "a", label: "Because lying usually leads to bad consequences" },
          { id: "b", label: "Because the maxim of lying cannot be universalised without self-destructing" },
          { id: "c", label: "Because liars tend to be unhappy" },
          { id: "d", label: "Because society punishes liars" },
        ],
        correctChoiceId: "b",
        explanation: "For Kant, if everyone lied when convenient, trust in promises and testimony would collapse, destroying the very practice the liar exploits. The wrong lies in the failed universalisation itself, not in the bad consequences or the risk of getting caught.",
      },
      {
        dimension: "depth",
        prompt: "What does Kant's 'treat humanity as an end, never merely as a means' formulation forbid?",
        choices: [
          { id: "a", label: "Ever relying on another person's help" },
          { id: "b", label: "Using someone purely as a tool, for example by deceiving or coercing them" },
          { id: "c", label: "Pursuing your own goals" },
          { id: "d", label: "Making any moral rules at all" },
        ],
        correctChoiceId: "b",
        explanation: "The formula forbids treating people merely as instruments, which deception and coercion do. It does not forbid relying on others at all — the key word is 'merely', and a fair transaction respects both parties as ends while still using their help.",
      },
      {
        dimension: "reasoning",
        prompt: "What does the 'murderer at the door' objection reveal about deontology?",
        choices: [
          { id: "a", label: "That absolute, exceptionless rules can conflict and produce disturbing verdicts" },
          { id: "b", label: "That lying is always morally acceptable" },
          { id: "c", label: "That consequences never matter" },
          { id: "d", label: "That Kant secretly agreed with utilitarianism" },
        ],
        correctChoiceId: "a",
        explanation: "Kant's refusal to permit even a protective lie shows how absolute rules can clash — truth-telling against protecting the innocent — and struggle to resolve the conflict. That rigidity is deontology's characteristic weakness.",
      },
      {
        dimension: "depth",
        prompt: "In which area is deontological thinking most clearly dominant today?",
        choices: [
          { id: "a", label: "Cost-benefit analysis of public policy" },
          { id: "b", label: "Human rights law and the ethics of medical consent" },
          { id: "c", label: "Maximising quality-adjusted life years" },
          { id: "d", label: "Calculating aggregate economic welfare" },
        ],
        correctChoiceId: "b",
        explanation: "Human rights, informed consent, the ban on torture and fair-trial protections all assert limits that a better overall outcome cannot override — the deontological idea of rights as constraints. The other options are consequentialist calculations.",
      },
    ],
    sources: [
      { label: "Kant's Moral Philosophy (SEP)", note: "The categorical imperative, maxims and the formula of humanity explained.", type: "Reference", url: "https://plato.stanford.edu/entries/kant-moral/" },
      { label: "Deontological Ethics (SEP)", note: "Duty-based ethics, its varieties, and the objections it faces.", type: "Reference", url: "https://plato.stanford.edu/entries/ethics-deontological/" },
    ],
  },
  {
    concept: "Virtue Ethics",
    level: "GCSE",
    summary: "character, habits and human flourishing",
    estimatedMinutes: 7,
    deck: "Virtue ethics quietly changes the question. Instead of 'what should I do?' it asks 'what kind of person should I become?' The answer, from Aristotle onwards, is that a good life is built not from rules or calculations but from habits — and courage, honesty and generosity are skills you practise, not boxes you tick.",
    keyTerms: [
      { label: "Eudaimonia", value: "Aristotle's word for flourishing or living well — the ultimate aim of a human life, richer than mere pleasure." },
      { label: "Golden mean", value: "The idea that each virtue sits between two vices, one of excess and one of deficiency." },
      { label: "Phronesis", value: "Practical wisdom: the judgement to see what a situation actually requires." },
      { label: "Hexis", value: "A settled disposition or habit of character, formed by repeated action." },
    ],
    sections: [
      {
        heading: "A different question",
        body: [
          `Most ethical theories are systems for evaluating actions. Utilitarianism scores outcomes; deontology checks rules. Virtue ethics, the oldest of the three, is suspicious of both. Its founding figure, Aristotle, thought morality was less like solving equations and more like becoming a certain kind of person. The right question is not "which act is permitted?" but "what would a good person do, and how do I become one?"`,
          `The aim of the whole enterprise is eudaimonia — usually translated "happiness" but better rendered "flourishing" or "a life well lived". It is not a feeling you can switch on; it is the condition of a human being functioning fully and well, the way a flourishing plant or a masterful craftsman flourishes. For Aristotle, we flourish by exercising our virtues over a whole life.`,
        ],
      },
      {
        heading: "The golden mean",
        body: [
          `Aristotle's most useful tool is the "golden mean". Each virtue, he argued, sits as a balance point between two vices: one of having too much of something, one of having too little. Courage is the mean between cowardice (too little confidence in the face of fear) and recklessness (too much). Generosity sits between stinginess and wastefulness. Honesty between deceit and brutal tactlessness.`,
          `The mean is not a fixed midpoint you calculate once. It shifts with the situation. The courageous amount of fear to feel facing a bully is different from the amount facing a bear. This is why virtue cannot be reduced to a rulebook — knowing where the mean lies in a real, messy situation takes judgement, which Aristotle called phronesis, or practical wisdom. It is the master-virtue that steers all the others.`,
        ],
      },
      {
        heading: "Virtue is a habit",
        body: [
          `Aristotle's deepest claim is that character is made, not born. "We become just by doing just acts, temperate by doing temperate acts, brave by doing brave acts." Virtue is a hexis — a settled habit — laid down by repetition, exactly the way you learn an instrument or a sport. Nobody becomes generous by admiring generosity; they become generous by giving, again and again, until it feels natural.`,
          `That has a practical, almost coaching flavour. If you want to be the kind of person who stays calm under pressure, you do not wait to feel calm; you practise acting calm in small pressures until the disposition takes hold. Morality becomes a training programme for the self, and small daily choices matter because each one nudges the kind of person you are turning into.`,
        ],
      },
      {
        heading: "The revival and the catch",
        body: [
          `Virtue ethics faded for centuries under the dominance of rules and consequences, then came roaring back after 1958, when Elizabeth Anscombe attacked modern "duty" ethics for having lost its foundations. Alasdair MacIntyre's 1981 book After Virtue made the revival famous, arguing that only a return to virtue and community could repair a fragmented moral culture.`,
          `The standard objection is that virtue ethics is vague where you most need help. Told to "do what a courageous, honest person would do", the person genuinely unsure what to do gets little guidance. Critics also note that lists of virtues vary across cultures. Defenders reply that this apparent weakness is honesty about moral life: real decisions require judgement, not a formula, and the point of cultivating good character is precisely to develop the wisdom a rulebook can never supply.`,
        ],
      },
      {
        heading: "You are building a character right now",
        body: [
          `Virtue ethics is the most literal description of habit-tracking there is. Every time you train when you would rather not, hold your temper in traffic, or do the honest thing in a small matter no one will ever check, you are not just performing an act — you are laying down a disposition, becoming slightly more the kind of person who does that. Aristotle's claim that we become brave by doing brave things is exactly why streaks and daily routines work: character is a skill you practise into existence, and the small, repeated choices are the training reps.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What question does virtue ethics put at the centre of morality?",
        choices: [
          { id: "a", label: "Which action produces the best consequences?" },
          { id: "b", label: "What kind of person should I become?" },
          { id: "c", label: "Which rule applies to this act?" },
          { id: "d", label: "What does the law require?" },
        ],
        correctChoiceId: "b",
        explanation: "Virtue ethics focuses on character rather than isolated acts. Judging by consequences belongs to utilitarianism and applying rules to deontology; virtue ethics asks who you should become.",
      },
      {
        dimension: "reasoning",
        prompt: "According to Aristotle's 'golden mean', courage is best understood as:",
        choices: [
          { id: "a", label: "The complete absence of fear" },
          { id: "b", label: "The mean between cowardice and recklessness" },
          { id: "c", label: "Always choosing the most dangerous option" },
          { id: "d", label: "A fixed rule that never changes with circumstances" },
        ],
        correctChoiceId: "b",
        explanation: "Each virtue sits between a vice of deficiency and a vice of excess; courage lies between cowardice and recklessness. It is not the complete absence of fear, and the mean shifts with the situation rather than being a fixed rule.",
      },
      {
        dimension: "depth",
        prompt: "What does eudaimonia mean in Aristotle's ethics?",
        choices: [
          { id: "a", label: "A pleasant feeling of contentment" },
          { id: "b", label: "Wealth and social status" },
          { id: "c", label: "Flourishing — a whole human life lived well" },
          { id: "d", label: "Obedience to moral rules" },
        ],
        correctChoiceId: "c",
        explanation: "Eudaimonia is flourishing across a whole life, achieved by exercising the virtues — not a momentary feeling of contentment, and not external goods like wealth or status.",
      },
      {
        dimension: "reasoning",
        prompt: "Aristotle says 'we become brave by doing brave acts'. What does this imply about virtue?",
        choices: [
          { id: "a", label: "Virtue is an inborn trait you either have or lack" },
          { id: "b", label: "Virtue is a habit built up through repeated practice" },
          { id: "c", label: "Virtue is just knowing the right theory" },
          { id: "d", label: "Virtue is impossible to develop deliberately" },
        ],
        correctChoiceId: "b",
        explanation: "For Aristotle character is a hexis — a settled disposition formed by repetition, like a skill. You cannot merely think your way to virtue by learning the theory; you practise your way there, which is why it is trainable rather than an inborn trait.",
      },
      {
        dimension: "depth",
        prompt: "What is the most common objection to virtue ethics?",
        choices: [
          { id: "a", label: "It gives little concrete guidance about what to actually do in a hard case" },
          { id: "b", label: "It ignores the importance of good character" },
          { id: "c", label: "It relies entirely on measuring happiness" },
          { id: "d", label: "It forbids all pleasure" },
        ],
        correctChoiceId: "a",
        explanation: "Being told to act as a virtuous person would offers little to someone unsure what that is. Defenders reply that real decisions need judgement, not a formula — but the guidance gap is the standard criticism.",
      },
    ],
    sources: [
      { label: "Virtue Ethics (SEP)", note: "The theory of character, eudaimonia and practical wisdom, plus its modern revival.", type: "Reference", url: "https://plato.stanford.edu/entries/ethics-virtue/" },
      { label: "Aristotle's Ethics (SEP)", note: "The Nicomachean Ethics, the doctrine of the mean and habituation.", type: "Reference", url: "https://plato.stanford.edu/entries/aristotle-ethics/" },
    ],
  },
  {
    concept: "The Mind-Body Problem",
    level: "University",
    summary: "the relation between conscious experience and physical processes",
    estimatedMinutes: 9,
    deck: "You are a lump of matter that has experiences. Neurons fire, and somehow there is something it is like to be you — the redness of red, the sting of pain. How physical processes give rise to inner experience is the mind-body problem, and after four centuries it remains philosophy's most stubborn puzzle.",
    keyTerms: [
      { label: "Dualism", value: "The view that mind and matter are two fundamentally different kinds of thing." },
      { label: "Physicalism", value: "The view that everything, including the mind, is ultimately physical — often that mental states just are brain states." },
      { label: "Qualia", value: "The subjective, felt qualities of experience: what red looks like, what pain feels like from the inside." },
      { label: "The hard problem", value: "Chalmers' name for the question of why physical processing is accompanied by any inner experience at all." },
    ],
    sections: [
      {
        heading: "Two kinds of thing?",
        body: [
          `René Descartes gave the problem its modern shape in 1641. He noticed he could doubt he had a body, but could not doubt that he was thinking, and concluded that mind and body must be two different substances: the mind an immaterial thinking thing, the body an extended physical thing. This is substance dualism, and it matches a deep intuition. Your thoughts do not seem to have a colour or a weight; your brain does.`,
          `But dualism has a notorious flaw: interaction. If the mind is non-physical, how does it push the physical body around? When you decide to raise your arm and it rises, an immaterial will somehow moves matter — but every physical effect seems to have a physical cause. Descartes gestured vaguely at the pineal gland as the meeting point and satisfied almost no one. The problem of how two utterly different substances could touch has haunted dualism ever since.`,
        ],
      },
      {
        heading: "Just the brain?",
        body: [
          `The dominant modern answer is physicalism: there are not two substances, only one. Mental states are physical states of the brain. The identity theory, developed in the 1950s, put it starkly — pain simply is a certain pattern of neural firing, the way lightning simply is an electrical discharge. On this view the mind is not spooky at all; it is what the brain does, and neuroscience is slowly mapping it.`,
          `Physicalism has enormous advantages. It fits the sciences, avoids the interaction problem, and predicts exactly what we observe: damage the brain and you damage the mind. Yet a nagging worry survives. Even a complete physical description of the brain — every neuron, every signal — seems to leave one thing out: why is any of it felt? Why is there an inner glow of experience rather than dark, unfeeling computation?`,
        ],
      },
      {
        heading: "The hard problem",
        body: [
          `In 1995 David Chalmers sharpened this worry into a distinction that reframed the whole debate. The "easy problems" of mind — how the brain discriminates colours, controls behaviour, integrates information — are hard in practice but clearly the sort of thing science can crack, because they are about functions. The "hard problem" is different: why is all that function accompanied by subjective experience at all? A machine could, in principle, process light of 700 nanometres and say "red" with no inner experience whatsoever. Why aren't we like that?`,
          `The gap between explaining what the brain does and explaining why it feels like anything is the "explanatory gap". You can hand someone the full physical story and they can still sensibly ask: but why does it feel like this? That the question stays open even after all the science is in is what makes the problem hard rather than merely complicated.`,
        ],
      },
      {
        heading: "Mary's room and the bat",
        body: [
          `Two thought experiments keep the pressure on physicalism. Thomas Nagel's 1974 essay "What Is It Like to Be a Bat?" points out that a bat navigates by echolocation, and no amount of objective, third-person science tells you what that experience is like from the inside. Subjective experience seems to be exactly the fact that objective description cannot reach.`,
          `Frank Jackson's 1982 "Mary's Room" drives it home. Mary is a brilliant scientist who knows every physical fact about colour vision but has lived her whole life in a black-and-white room. The day she steps out and sees a red rose, does she learn something new? Intuitively, yes — she learns what red looks like. But if she already knew all the physical facts and still learned something, then not all facts are physical facts. Physicalists have vigorous replies — perhaps she gains an ability rather than a fact, or a new way of grasping an old fact — and the debate is unresolved. That is the honest state of the mind-body problem: our best science and our clearest intuitions still do not fit together.`,
        ],
      },
      {
        heading: "The problem in ordinary moments",
        body: [
          `The mind-body problem shows up whenever a feeling seems both physical and not. A doctor tells you the pain is "in your head", and you bristle, because it plainly hurts — that friction is the gap between neural activity and felt experience. You wonder whether your dog is really enjoying the walk or just wired to wag; whether a chatbot that says it is happy feels anything at all; how anaesthesia can switch off the inner light entirely and then switch it back on. Every one of those everyday puzzles is a version of the same unanswered question about how matter comes to have an inside.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is substance dualism, as Descartes defended it?",
        choices: [
          { id: "a", label: "The view that mind and body are two fundamentally different kinds of thing" },
          { id: "b", label: "The view that only the physical brain exists" },
          { id: "c", label: "The view that the mind is an illusion" },
          { id: "d", label: "The view that everything is made of mind" },
        ],
        correctChoiceId: "a",
        explanation: "Descartes held that the mind is an immaterial thinking substance and the body an extended physical one — two distinct kinds of thing. The rival view that only the physical brain exists is physicalism.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the classic objection to Descartes' dualism?",
        choices: [
          { id: "a", label: "That the brain has no effect on the mind" },
          { id: "b", label: "That it cannot explain how an immaterial mind interacts with a physical body" },
          { id: "c", label: "That minds do not exist" },
          { id: "d", label: "That it relies too heavily on neuroscience" },
        ],
        correctChoiceId: "b",
        explanation: "The interaction problem: if mind and body are utterly different substances, it is mysterious how a non-physical will could move physical matter. Descartes' appeal to the pineal gland satisfied almost no one.",
      },
      {
        dimension: "depth",
        prompt: "How did Chalmers define the 'hard problem' of consciousness?",
        choices: [
          { id: "a", label: "Explaining how the brain discriminates and reacts to stimuli" },
          { id: "b", label: "Explaining why physical processing is accompanied by any subjective experience at all" },
          { id: "c", label: "Building a computer that can pass as human" },
          { id: "d", label: "Proving that the mind is immaterial" },
        ],
        correctChoiceId: "b",
        explanation: "Chalmers separated the 'easy' functional problems — how the brain discriminates and reacts to stimuli — from the hard one: why is any of that function felt from the inside? The persistence of that question even after the science is complete is the explanatory gap.",
      },
      {
        dimension: "reasoning",
        prompt: "In Jackson's 'Mary's Room', what is the argument if Mary learns something new on seeing red?",
        choices: [
          { id: "a", label: "That colour does not really exist" },
          { id: "b", label: "That she never really understood the physics" },
          { id: "c", label: "That some facts about experience are not captured by physical facts" },
          { id: "d", label: "That scientists should not study colour" },
        ],
        correctChoiceId: "c",
        explanation: "If Mary knew every physical fact yet still learned what red looks like, then knowing all the physical facts leaves something out — a challenge to physicalism. (Physicalists reply she gained an ability or a new mode of access, not a new fact.)",
      },
      {
        dimension: "depth",
        prompt: "What are 'qualia'?",
        choices: [
          { id: "a", label: "The measurable electrical signals in neurons" },
          { id: "b", label: "The subjective felt qualities of experience, like the redness of red" },
          { id: "c", label: "The logical rules governing thought" },
          { id: "d", label: "The behaviours a mind produces" },
        ],
        correctChoiceId: "b",
        explanation: "Qualia are the first-person, felt characters of experience — what pain feels like, what red looks like. They are precisely what objective neural signals and outward behaviours seem unable to fully capture.",
      },
    ],
    sources: [
      { label: "Consciousness (SEP)", note: "Overview of the hard problem, the explanatory gap and rival theories of experience.", type: "Reference", url: "https://plato.stanford.edu/entries/consciousness/" },
      { label: "Dualism (SEP)", note: "Substance and property dualism, the interaction problem and physicalist alternatives.", type: "Reference", url: "https://plato.stanford.edu/entries/dualism/" },
    ],
  },
  {
    concept: "Free Will",
    level: "A-level",
    summary: "agency, responsibility and causal determination",
    estimatedMinutes: 8,
    deck: "Every choice you make is the product of prior causes — your genes, your upbringing, the state of your neurons a second ago. If all of that was set in motion long before you were born, in what sense is any decision really up to you? And if it isn't, can anyone truly deserve blame or praise?",
    keyTerms: [
      { label: "Determinism", value: "The thesis that every event, including every choice, is fully fixed by prior causes and the laws of nature." },
      { label: "Hard determinism", value: "The view that determinism is true and therefore free will and moral responsibility are illusions." },
      { label: "Libertarianism (metaphysical)", value: "The view that we have genuine free will, so determinism must be false. Not the political doctrine of the same name." },
      { label: "Compatibilism", value: "The view that free will and determinism can both be true, because freedom means acting on your own reasons without coercion." },
    ],
    sections: [
      {
        heading: "The threat of determinism",
        body: [
          `The problem of free will is a collision between two things we find almost impossible to give up. On one side, cause and effect: everything that happens, happens because of what came before. Your decision to read this was preceded by brain states, which were caused by earlier states, stretching back before your birth. This is determinism, and modern science makes it hard to dismiss.`,
          `On the other side, the vivid sense that your choices are genuinely open — that you could have done otherwise — and the entire practice of holding people responsible. We praise, blame, punish and forgive on the assumption that people are the authors of their acts. If determinism is true, that assumption looks shaky. The free-will debate is the attempt to reconcile, or choose between, causation and responsibility.`,
        ],
      },
      {
        heading: "Three camps",
        body: [
          `Philosophers split into three broad positions. Hard determinists accept determinism and bite the bullet: free will is an illusion, and with it, ultimate moral responsibility. On this view the murderer, however chilling, is a link in a causal chain and could not, in the deepest sense, have acted differently.`,
          `Metaphysical libertarians go the other way. They insist our sense of genuine choice is real, so determinism must be false — perhaps the mind, or some quantum indeterminacy, opens a space where the self can act as an uncaused cause. (Note the label: this is nothing to do with political libertarianism.) The difficulty is explaining how an undetermined choice is any freer than a random one — a decision that just happens for no prior reason hardly seems like your doing either.`,
        ],
      },
      {
        heading: "Redefining freedom",
        body: [
          `The most popular position among philosophers is compatibilism, which tries to dissolve the whole conflict. Its move is to redefine freedom. Being free, the compatibilist says, does not require being uncaused. It requires acting on your own desires and reasons, without external coercion. A woman who donates to charity because she wants to is acting freely, even if that want has causes. A man handing over his wallet at gunpoint is not, because he is coerced.`,
          `David Hume argued this centuries ago: the opposite of "free" is not "caused" but "constrained". Modern compatibilists such as Harry Frankfurt refine it further, distinguishing acting on your immediate desires from endorsing them — a willing volunteer is freer than an addict who acts on a craving he wishes he did not have. On this view, determinism is no threat, because the freedom worth wanting was never about escaping causation in the first place.`,
        ],
      },
      {
        heading: "What the brain scans show, and don't",
        body: [
          `Neuroscience has entered the ring. In the 1980s Benjamin Libet found that a measurable spike of brain activity, the "readiness potential", appears a fraction of a second before people report consciously deciding to move. Some read this as evidence that the brain decides first and consciousness merely narrates — a scientific case against free will.`,
          `But the interpretation is fiercely contested. The readiness potential may reflect a general build-up rather than a specific decision; later studies suggest people can still "veto" an impending action; and pressing a button in a lab is a thin model of the deliberate, reasoned choices that responsibility usually tracks. The honest summary is that the science constrains the debate without settling it. Whether you are ultimately the author of your actions remains, for now, a question philosophy has to keep asking.`,
        ],
      },
      {
        heading: "Blame, diets and second chances",
        body: [
          `The free-will debate quietly governs how you judge people. When a friend snaps at you, you can see it as something they chose and blame them, or trace it to their exhausting week and excuse them — the same split between libertarian and determinist that philosophers argue over. "I couldn't help it" after a broken diet, the way courts weigh a hard upbringing in sentencing, the whole machinery of New Year's resolutions and self-forgiveness — all of it depends on how much you think a person could really have done otherwise. Compatibilism is the everyday intuition that upbringing shapes us and we are still, within limits, responsible.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What does determinism claim?",
        choices: [
          { id: "a", label: "That the future is completely unpredictable" },
          { id: "b", label: "That every event is fully fixed by prior causes and the laws of nature" },
          { id: "c", label: "That humans have no desires" },
          { id: "d", label: "That only some events have causes" },
        ],
        correctChoiceId: "b",
        explanation: "Determinism holds that everything, including choices, is entirely determined by earlier conditions plus natural law. This is what appears to threaten free will.",
      },
      {
        dimension: "reasoning",
        prompt: "How does compatibilism redefine freedom to reconcile it with determinism?",
        choices: [
          { id: "a", label: "Freedom means your choices have no causes at all" },
          { id: "b", label: "Freedom means acting on your own desires and reasons without coercion" },
          { id: "c", label: "Freedom means always doing the morally right thing" },
          { id: "d", label: "Freedom means being able to predict the future" },
        ],
        correctChoiceId: "b",
        explanation: "Compatibilists say the opposite of 'free' is 'coerced', not 'caused'. A caused desire you act on willingly is still free; a gun to your head is not. This lets determinism and freedom coexist.",
      },
      {
        dimension: "depth",
        prompt: "What does a metaphysical libertarian about free will believe?",
        choices: [
          { id: "a", label: "That determinism is true and free will is an illusion" },
          { id: "b", label: "That government should be as small as possible" },
          { id: "c", label: "That we have genuine free will, so determinism must be false" },
          { id: "d", label: "That freedom and determinism are compatible" },
        ],
        correctChoiceId: "c",
        explanation: "Metaphysical libertarianism affirms real, undetermined free will and therefore rejects determinism. It must not be confused with the political doctrine of small government, and it is the opposite of both hard determinism and compatibilism.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is the interpretation of Libet's readiness-potential experiments contested?",
        choices: [
          { id: "a", label: "Because the experiments were never actually performed" },
          { id: "b", label: "Because the signal may not represent a specific decision, and pressing a button poorly models real deliberate choice" },
          { id: "c", label: "Because they proved free will beyond doubt" },
          { id: "d", label: "Because neuroscience cannot measure brain activity" },
        ],
        correctChoiceId: "b",
        explanation: "Critics argue the readiness potential may be a general build-up rather than a decision, that people can veto the action, and that a spontaneous button-press is a thin stand-in for reasoned choices. So the data constrains but does not settle the debate.",
      },
      {
        dimension: "depth",
        prompt: "What does hard determinism conclude about moral responsibility?",
        choices: [
          { id: "a", label: "That people are fully responsible for everything they do" },
          { id: "b", label: "That ultimate moral responsibility is an illusion, since no one could have done otherwise" },
          { id: "c", label: "That only some people are responsible" },
          { id: "d", label: "That responsibility depends on quantum physics" },
        ],
        correctChoiceId: "b",
        explanation: "Hard determinists accept determinism and follow it through: if every act is fixed by prior causes, no one could ultimately have acted differently, so deep moral responsibility, and the desert behind praise and blame, dissolves.",
      },
    ],
    sources: [
      { label: "Free Will (SEP)", note: "The central problem, determinism, and the space of positions on agency and responsibility.", type: "Reference", url: "https://plato.stanford.edu/entries/freewill/" },
      { label: "Compatibilism (SEP)", note: "The view that free will survives determinism, from Hume to Frankfurt.", type: "Reference", url: "https://plato.stanford.edu/entries/compatibilism/" },
    ],
  },
  {
    concept: "Social Contract",
    level: "University",
    summary: "political obligation grounded in agreement or legitimacy",
    estimatedMinutes: 9,
    deck: "Why should you obey a government you never agreed to join? Social contract theory offers the boldest answer in political philosophy: imagine life with no state at all, and the terms on which rational people would agree to build one become the measure of when authority is legitimate — and when it forfeits the right to rule.",
    keyTerms: [
      { label: "State of nature", value: "A thought experiment picturing human life without government, used to justify why we accept one." },
      { label: "Consent", value: "The idea that legitimate authority derives from the agreement of the governed, actual or hypothetical." },
      { label: "General will", value: "Rousseau's notion of what a community collectively wills for the common good, distinct from mere private interests." },
      { label: "Veil of ignorance", value: "Rawls' device: choose the rules of society without knowing which position in it you will occupy." },
    ],
    sections: [
      {
        heading: "Why obey at all?",
        body: [
          `Political obligation is stranger than it looks. The state takes your money, constrains your behaviour and claims the right to punish you, yet you never signed a contract with it. What gives it the right? "Because it has the power" is not an answer — that would make a mugger a legitimate government. Social contract theory answers instead that legitimate authority rests on the agreement, real or reasonable, of the governed.`,
          `The strategy is ingenious. To work out what we owe the state, strip the state away and imagine what life would be like without it — the "state of nature". Whatever a rational person would trade to escape that condition tells you what the state is for, and by extension where its authority begins and ends.`,
        ],
      },
      {
        heading: "Escaping the state of nature",
        body: [
          `The great contract theorists disagreed sharply about that bare condition, and their disagreement drove their politics. Thomas Hobbes, writing amid the English Civil War in 1651, painted the darkest picture. Without a common power to keep order, life would be a "war of all against all", and human existence "solitary, poor, nasty, brutish, and short". To escape it, rational people would surrender their rights to an absolute sovereign whose overwhelming power guarantees peace. Almost any government beats anarchy.`,
          `John Locke, in 1689, was more optimistic. His state of nature already contains natural rights to life, liberty and property; government exists only to protect them better, and rules by the ongoing consent of the governed. Crucially, if it violates that trust, the people may replace it — a line that fed straight into the American Declaration of Independence. Jean-Jacques Rousseau added a third vision in 1762, opening with "man is born free, and everywhere he is in chains", and arguing that legitimate authority expresses the "general will" of the community rather than the private interests of rulers.`,
        ],
      },
      {
        heading: "The veil of ignorance",
        body: [
          `In 1971 John Rawls revived the tradition for the modern age with a brilliant thought experiment. Forget whether anyone historically signed anything; ask instead what principles of justice people would choose from behind a "veil of ignorance" — not knowing whether they will be rich or poor, healthy or sick, talented or not, in the society they are designing.`,
          `Stripped of the knowledge that lets you rig the rules in your own favour, Rawls argued, rational choosers would insist on equal basic liberties for all, and would permit inequalities only where they benefit the worst-off. The veil turns the social contract into a test of fairness: a just arrangement is one you would accept without knowing which seat you will draw. It makes vivid why the contract is best read not as history but as a standard for evaluating the societies we actually live in.`,
        ],
      },
      {
        heading: "Who never signed?",
        body: [
          `The obvious objection is that none of us ever actually consented. David Hume made it devastatingly in the 1700s: the peasant born into a society, unable to leave, has no more genuinely agreed to its government than a man carried aboard a ship while asleep has agreed to the voyage. Appeals to "tacit consent" — you consent by staying, or by using the roads — look strained when leaving is impossible or ruinous.`,
          `A second wave of critique asks who was ever at the bargaining table. Carole Pateman's "sexual contract" argues that the classic theorists quietly assumed a deal among men that subordinated women, and Charles Mills' "racial contract" argues the same social contracts underwrote racial domination. The force of these critiques is not to junk the idea but to sharpen it: if legitimacy rests on agreement among free equals, then every group excluded from the agreement is a standing indictment of the arrangement. That is exactly why the social contract remains a live tool for judging power rather than a dusty historical claim.`,
        ],
      },
      {
        heading: "The contract you sign daily",
        body: [
          `You honour an invisible social contract every day you obey a red light on an empty road at 3am, queue instead of shoving, or split the chores in a shared flat that no law enforces. None of it was signed, yet it holds because roughly everyone expects roughly everyone else to keep it, and the alternative — Hobbes's every-person-for-themselves — is worse for all. The theory also names your frustration when someone jumps the queue or dodges their share: they are free-riding on a cooperation they never agreed to but happily enjoy, which is exactly the tension the contract tradition exists to explain.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is the purpose of the 'state of nature' in social contract theory?",
        choices: [
          { id: "a", label: "A historical account of how the first governments literally formed" },
          { id: "b", label: "A thought experiment about life without government, used to justify why we accept one" },
          { id: "c", label: "A description of life in remote wilderness today" },
          { id: "d", label: "A religious account of human origins" },
        ],
        correctChoiceId: "b",
        explanation: "The state of nature is a hypothetical device: imagine life without a state, and what rational people would trade to escape it reveals the state's purpose and limits. It is generally not offered as a literal historical account of how governments formed.",
      },
      {
        dimension: "reasoning",
        prompt: "Why did Hobbes conclude people should submit to an absolute sovereign?",
        choices: [
          { id: "a", label: "Because he thought people had natural rights that governments must protect" },
          { id: "b", label: "Because he believed the general will demanded it" },
          { id: "c", label: "Because without a common power, life would be a violent 'war of all against all'" },
          { id: "d", label: "Because he wanted citizens to be able to overthrow bad rulers" },
        ],
        correctChoiceId: "c",
        explanation: "Hobbes' bleak state of nature — 'solitary, poor, nasty, brutish, and short' — made almost any strong sovereign preferable to anarchy. Natural rights and a right of revolution (a, d) are Locke's contribution, not Hobbes'.",
      },
      {
        dimension: "depth",
        prompt: "How did Locke's social contract differ most sharply from Hobbes'?",
        choices: [
          { id: "a", label: "Locke allowed the people to replace a government that violates their trust" },
          { id: "b", label: "Locke denied that any government was ever needed" },
          { id: "c", label: "Locke thought the state of nature was even more violent" },
          { id: "d", label: "Locke rejected the idea of consent" },
        ],
        correctChoiceId: "a",
        explanation: "Locke grounded government in the protection of natural rights and ongoing consent, and crucially argued the people may overthrow a government that breaks its trust — an idea that shaped the American Declaration of Independence.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the point of Rawls' 'veil of ignorance'?",
        choices: [
          { id: "a", label: "To show that people never really consent to government" },
          { id: "b", label: "To choose principles of justice without knowing your own position in society, ensuring fairness" },
          { id: "c", label: "To prove that inequality is always unjust" },
          { id: "d", label: "To describe how ancient societies were actually organised" },
        ],
        correctChoiceId: "b",
        explanation: "Behind the veil you do not know if you will be rich or poor, so you cannot rig the rules for yourself. Rawls argued you would then choose equal basic liberties and permit inequalities only if they help the worst-off — the contract as a test of fairness.",
      },
      {
        dimension: "depth",
        prompt: "What is Hume's objection to consent-based social contract theory?",
        choices: [
          { id: "a", label: "That government is unnecessary" },
          { id: "b", label: "That most people never actually consented and often cannot realistically leave" },
          { id: "c", label: "That the state of nature was peaceful" },
          { id: "d", label: "That only kings can legitimately rule" },
        ],
        correctChoiceId: "b",
        explanation: "Hume compared the citizen born into a state to a man carried aboard a ship in his sleep: staying is not genuine agreement when leaving is impossible. This is the classic challenge to the idea of 'tacit consent'.",
      },
    ],
    sources: [
      { label: "Contractarianism (SEP)", note: "The social contract tradition from Hobbes and Locke through to modern versions.", type: "Reference", url: "https://plato.stanford.edu/entries/contractarianism/" },
      { label: "The Original Position (SEP)", note: "Rawls' veil of ignorance and its role in his theory of justice.", type: "Reference", url: "https://plato.stanford.edu/entries/original-position/" },
    ],
  },
  {
    concept: "Personal Identity",
    level: "University",
    summary: "what makes someone the same person over time",
    estimatedMinutes: 9,
    deck: "You share almost no atoms, memories or opinions with the toddler in your baby photos — yet you are unquestionably the same person. What exactly is the thread that makes a life one life? The answer turns out to matter enormously for survival, responsibility, and what you should fear about the future.",
    keyTerms: [
      { label: "Psychological continuity", value: "The view that you persist through overlapping chains of memory, personality and intention." },
      { label: "Bodily continuity", value: "The rival view that you persist by being the same living organism or body over time." },
      { label: "Memory theory", value: "Locke's proposal that sameness of person is sameness of consciousness, linked by memory." },
      { label: "Relation R", value: "Parfit's term for psychological connectedness and continuity — which, he argued, is what really matters, not identity itself." },
    ],
    sections: [
      {
        heading: "The ship and the self",
        body: [
          `Start with an ancient puzzle. The ship of Theseus is preserved in a harbour, and over the years every plank is replaced as it rots. Is it still the same ship? Now make it worse: someone hoards the old planks and reassembles them. Which is the original? The puzzle bites because "same thing over time" is far slipperier than it looks — and you are a far more dramatic case than any ship.`,
          `Your body replaces most of its cells over the years. Your beliefs, tastes and moods shift beyond recognition across a lifetime. Almost nothing physical or mental stays fixed. And yet you are held responsible for promises made decades ago, you save for a retirement you cannot picture, and you fear your own death. All of that presupposes that the person then and the person now are one and the same. Personal identity is the search for what that sameness consists in.`,
        ],
      },
      {
        heading: "You are your memories?",
        body: [
          `John Locke, in 1689, gave the most influential answer: what makes you the same person is not the same body or soul but the same consciousness, linked through memory. You are identical to whatever past experiences you can, in principle, remember as your own. To dramatise it, Locke imagined the soul of a prince, carrying all the prince's memories, entering the body of a cobbler. The resulting person, he said, would be the prince — because personhood follows consciousness, not the flesh.`,
          `The appeal is obvious. It explains why we hold someone responsible for a crime they remember committing, and why a total, permanent amnesiac can feel like a genuinely different person inhabiting the same body. Identity, on this view, is written in psychology, not anatomy.`,
        ],
      },
      {
        heading: "The memory theory breaks",
        body: [
          `Thomas Reid found a fatal flaw. Consider a brave officer who, as a boy, was flogged for stealing from an orchard; as a young officer, he remembers the flogging; as an old general, he remembers his brave deeds as a young officer but has entirely forgotten the flogging. By Locke's memory criterion the officer is the same person as the boy, and the general is the same person as the officer — but the general is NOT the same person as the boy, because he cannot remember being him. That breaks a basic logical rule: if A is B and B is C, then A must be C. Straight memory cannot be the whole story.`,
          `The repair is to loosen the criterion from direct memory to psychological continuity: an overlapping chain of memories, intentions and character traits, like links in a rope where no single fibre runs the whole length. The general is connected to the boy through the intermediate officer even without a direct memory. This handles Reid's case, but it quietly changes the theory — sameness of person becomes a matter of continuity and degree, not an all-or-nothing fact.`,
        ],
      },
      {
        heading: "Parfit's teleporter",
        body: [
          `Derek Parfit, in Reasons and Persons (1984), pushed the puzzles to their breaking point with a teleporter. It scans and destroys your body on Earth, then builds an exact replica on Mars from new atoms, complete with all your memories. Did you travel to Mars, or did you die and a copy take your place? Now suppose the machine malfunctions and builds two replicas. They cannot both be you — they are two people — yet each has an equal claim. Identity, which must be one-to-one, cannot survive the split.`,
          `Parfit's radical conclusion was that we have been asking the wrong question. What matters in survival is not strict identity but Relation R — psychological connectedness and continuity — and that can hold to a greater or lesser degree, and can even branch. If your replica on Mars carries on your projects, memories and relationships, then what you actually care about is preserved, whether or not it counts as "you". This is oddly consoling: Parfit found that seeing identity as less deep made his own death seem "less bad", more like the ordinary way tomorrow's self is continuous with today's. Whether that is liberating or a trick of definition is a debate that is still very much open.`,
        ],
      },
      {
        heading: "The self at a reunion",
        body: [
          `Personal identity is what makes a school reunion strange. Someone insists "you haven't changed a bit" while you feel like a completely different person from the teenager they remember — and both of you are pointing at something real about continuity and change. You cringe at old messages as if a stranger wrote them, yet feel bound to honour a promise you made years ago. When people say they are "a new person" after a big life change, they are making a genuine philosophical claim about how much can shift before the thread that makes one life one life finally snaps.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "According to Locke's memory theory, what makes you the same person over time?",
        choices: [
          { id: "a", label: "Having the same physical body" },
          { id: "b", label: "Having the same immaterial soul" },
          { id: "c", label: "Continuity of consciousness, linked through memory" },
          { id: "d", label: "Keeping the same name and legal identity" },
        ],
        correctChoiceId: "c",
        explanation: "Locke located identity in sameness of consciousness, traced by memory — which is why his prince, waking in the cobbler's body with the prince's memories, would be the prince. He explicitly separated this from sameness of body or soul.",
      },
      {
        dimension: "reasoning",
        prompt: "How does Reid's 'brave officer' case undermine a simple memory theory of identity?",
        choices: [
          { id: "a", label: "It shows that memories are always false" },
          { id: "b", label: "It shows memory-links can fail to be transitive, so A can be B and B be C without A being C" },
          { id: "c", label: "It shows the body never changes" },
          { id: "d", label: "It shows that only the soul matters" },
        ],
        correctChoiceId: "b",
        explanation: "The general remembers being the young officer, who remembers being the flogged boy, but the general does not remember being the boy. Simple memory identity then violates transitivity — a logical breakdown that forces the move to psychological continuity.",
      },
      {
        dimension: "depth",
        prompt: "What is 'psychological continuity' as a criterion of identity?",
        choices: [
          { id: "a", label: "A single memory that runs unbroken through your whole life" },
          { id: "b", label: "An overlapping chain of memories, intentions and traits, like links in a rope" },
          { id: "c", label: "The physical persistence of your brain cells" },
          { id: "d", label: "Your consistent legal and social status" },
        ],
        correctChoiceId: "b",
        explanation: "Psychological continuity replaces direct memory with overlapping chains of psychological connections. No single memory need span the whole life, just as no fibre runs the length of a rope — this handles Reid's case.",
      },
      {
        dimension: "reasoning",
        prompt: "What does Parfit's malfunctioning teleporter (making two replicas) aim to show?",
        choices: [
          { id: "a", label: "That teleportation is technologically impossible" },
          { id: "b", label: "That both replicas are literally the same single person" },
          { id: "c", label: "That strict identity cannot survive a split, so what matters may be continuity rather than identity" },
          { id: "d", label: "That memories cannot be copied" },
        ],
        correctChoiceId: "c",
        explanation: "Two replicas cannot both be identical to you, since identity is one-to-one, yet each has an equal claim. Parfit concluded that what we care about in survival is psychological continuity (Relation R), which can branch, not identity as such.",
      },
      {
        dimension: "depth",
        prompt: "What did Parfit mean by claiming identity is 'not what matters'?",
        choices: [
          { id: "a", label: "That we should not care about the future at all" },
          { id: "b", label: "That what we really value in survival is psychological continuity and connectedness, not strict identity" },
          { id: "c", label: "That personal identity is completely fixed by the body" },
          { id: "d", label: "That memories are irrelevant to who we are" },
        ],
        correctChoiceId: "b",
        explanation: "Parfit argued the thing worth caring about is Relation R — the survival of your memories, projects and character — which can hold in degrees and even branch. Strict identity is a further, less important question, a view he found made death seem 'less bad'.",
      },
    ],
    sources: [
      { label: "Personal Identity (SEP)", note: "Bodily and psychological continuity theories, Locke, Reid and Parfit.", type: "Reference", url: "https://plato.stanford.edu/entries/identity-personal/" },
      { label: "Identity Over Time (SEP)", note: "The ship of Theseus and the general problem of persistence through change.", type: "Reference", url: "https://plato.stanford.edu/entries/identity-time/" },
    ],
  },
  {
    concept: "The Good Life",
    level: "GCSE",
    summary: "competing accounts of happiness, meaning and fulfilment",
    estimatedMinutes: 7,
    deck: "Everyone wants a good life, but almost no one stops to define it. Philosophy offers three rival answers — a life of pleasure, a life of getting what you want, or a life rich in genuinely worthwhile things — and a single famous thought experiment about a machine that can settle which one you truly believe.",
    keyTerms: [
      { label: "Hedonism", value: "The theory that wellbeing consists entirely in pleasure and the absence of pain." },
      { label: "Desire-satisfaction", value: "The theory that your life goes well to the extent that you get what you actually want." },
      { label: "Objective list", value: "The theory that certain things — knowledge, friendship, achievement — are good for you whether or not they please you." },
      { label: "Experience machine", value: "Nozick's thought experiment testing whether pleasure alone is what we really value." },
    ],
    sections: [
      {
        heading: "Three theories of a life going well",
        body: [
          `When philosophers ask what makes a life good FOR the person living it — not morally good, but good as in worth wanting — they usually sort the answers into three families. The first is hedonism: what is good is pleasure and the absence of pain, full stop. A good life is one that feels good from the inside, and everything else matters only as a route to that feeling. It is the oldest theory and, secretly, the one many people assume.`,
          `The second is the desire-satisfaction theory. Here, your life goes well to the extent that your desires are fulfilled — you get what you want, whatever that is. Its advantage over hedonism is that it respects individuality: it does not tell you that pleasure is the only thing worth wanting, only that getting what you actually want is good for you. The third is the objective list theory: some things are genuinely good for you — knowledge, deep friendship, achievement, autonomy — regardless of how much pleasure they bring or whether you happen to want them. On this view a person can be mistaken about what is good for them.`,
        ],
      },
      {
        heading: "The experience machine",
        body: [
          `In 1974 Robert Nozick designed a thought experiment to test the hedonist. Imagine a machine that could give you any experience you desired. Neuroscientists could stimulate your brain so that you would believe you were writing a great novel, making friends, falling in love — while all along you floated in a tank, electrodes in your skull. The inside would feel indistinguishable from a wonderful real life. Would you plug in for good?`,
          `Most people say no, and Nozick thought that answer was philosophically explosive. If pleasure were truly all that mattered, plugging in should be a no-brainer, because the machine delivers maximum pleasure with certainty. Our refusal reveals that we want more than the feeling of doing things — we want actually to do them, to be a certain kind of person, and to be in contact with a real world. That is a direct strike against hedonism: we value reality, not just the sensation of it.`,
        ],
      },
      {
        heading: "Pleasure isn't the whole story",
        body: [
          `The experience machine does not settle everything — it pushes you toward the desire or objective-list theories, but those have their own problems. The desire theory struggles with desires that are misinformed or self-destructive: getting exactly what you want is no gift if you wanted the wrong thing, which is why most versions restrict it to "informed" desires. The objective-list theory struggles to say who decides what belongs on the list, and risks arrogance in telling people their contented lives are secretly deficient.`,
          `Modern psychology has independently landed on a similar split, distinguishing "hedonic" wellbeing — feeling good — from "eudaimonic" wellbeing — a sense of meaning, growth and purpose. Studies repeatedly find that pleasure and meaning can come apart: raising children, training hard, or caring for someone can lower moment-to-moment pleasure while raising the sense that life is worthwhile. The philosophy of the good life is, in the end, the discipline of noticing that these are different targets, and deciding on purpose which one you are aiming at.`,
        ],
      },
      {
        heading: "Turning it on yourself",
        body: [
          `The payoff of all this is not an exam answer but a sharper set of questions to ask about your own life. When you say you want to be happy, do you mean you want to feel good, or that you want your life to go well by some fuller standard even if it is sometimes hard? The two can quietly conflict, and drifting between them is how people end up successful and hollow, or comfortable and restless.`,
          `Aristotle's ancient idea of eudaimonia — flourishing through the active exercise of your capacities — sits closest to the objective-list end and remains a serious rival to the modern default of chasing good feelings. You do not have to settle the debate to benefit from it. Simply forcing the vague ambition of "a good life" to declare itself — pleasure, satisfied desire, or worthwhile activity — turns a slogan into an examined choice, which is exactly what the question was for.`,
        ],
      },
      {
        heading: "Your own experience machine",
        body: [
          `Nozick's experience machine is no longer hypothetical — it is an evening spent scrolling. Endless feeds, games and binge-watching offer a reliable drip of pleasant experience while the real projects sit untouched, and the quiet dissatisfaction many people feel afterwards is precisely the intuition that pleasant experience is not the same as a life well lived. Every time you choose between the comfortable hit and the harder thing that will actually mean something — the workout, the real conversation, the project you keep deferring — you are answering the good-life question in practice, whether or not you have ever put it into words.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What does hedonism claim wellbeing consists in?",
        choices: [
          { id: "a", label: "Getting whatever you happen to desire" },
          { id: "b", label: "Pleasure and the absence of pain" },
          { id: "c", label: "Achieving objectively worthwhile things like knowledge and friendship" },
          { id: "d", label: "Following moral duties" },
        ],
        correctChoiceId: "b",
        explanation: "Hedonism holds that only pleasure is good in itself and only pain bad. The desire-satisfaction theory and the objective-list theory are its two main rivals.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does Nozick think most people's refusal to plug into the experience machine matters?",
        choices: [
          { id: "a", label: "It proves that pleasure does not exist" },
          { id: "b", label: "It suggests we value more than pleasure — such as actually doing things and contact with reality" },
          { id: "c", label: "It shows that everyone secretly wants to plug in" },
          { id: "d", label: "It proves the desire theory is correct" },
        ],
        correctChoiceId: "b",
        explanation: "If pleasure were all that mattered, plugging in should be obvious. Our refusal reveals we want to really do things and be in touch with reality, not just to feel as if we are — a direct challenge to hedonism.",
      },
      {
        dimension: "depth",
        prompt: "What is the objective-list theory of wellbeing?",
        choices: [
          { id: "a", label: "The view that only pleasure counts" },
          { id: "b", label: "The view that your life goes well only if you get what you want" },
          { id: "c", label: "The view that certain things are good for you whether or not they please you or you want them" },
          { id: "d", label: "The view that wellbeing cannot be defined at all" },
        ],
        correctChoiceId: "c",
        explanation: "Objective-list theories hold that goods such as knowledge, friendship and achievement benefit you regardless of your pleasure or desires — meaning a person can be mistaken about what is good for them.",
      },
      {
        dimension: "reasoning",
        prompt: "What is a standard problem for the desire-satisfaction theory?",
        choices: [
          { id: "a", label: "It cannot account for any individual differences" },
          { id: "b", label: "Getting what you want may not benefit you if the desire was misinformed or self-destructive" },
          { id: "c", label: "It claims pleasure is the only good" },
          { id: "d", label: "It denies that people have desires" },
        ],
        correctChoiceId: "b",
        explanation: "Fulfilling a desire is no gift if you wanted the wrong thing — hence most versions restrict it to 'informed' desires. This is why simple desire-satisfaction is widely seen as incomplete.",
      },
      {
        dimension: "depth",
        prompt: "What distinction have modern psychologists drawn that echoes this philosophical debate?",
        choices: [
          { id: "a", label: "Between conscious and unconscious desires" },
          { id: "b", label: "Between hedonic wellbeing (feeling good) and eudaimonic wellbeing (meaning and purpose)" },
          { id: "c", label: "Between short-term and long-term memory" },
          { id: "d", label: "Between moral and immoral pleasures" },
        ],
        correctChoiceId: "b",
        explanation: "Psychology distinguishes hedonic wellbeing (pleasant feeling) from eudaimonic wellbeing (meaning, growth, purpose), and finds they can come apart — mirroring the philosophical split between pleasure-based and richer accounts of the good life.",
      },
    ],
    sources: [
      { label: "Well-Being (SEP)", note: "Hedonism, desire-satisfaction and objective-list theories of what makes a life go well.", type: "Reference", url: "https://plato.stanford.edu/entries/well-being/" },
      { label: "Robert Nozick (SEP)", note: "Includes the experience machine and its challenge to hedonism.", type: "Reference", url: "https://plato.stanford.edu/entries/nozick/" },
    ],
  },
];

export const philosophyLessons = buildAuthoredLessons("philosophy", philosophy);
