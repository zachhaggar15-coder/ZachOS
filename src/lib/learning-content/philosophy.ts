import { buildAuthoredLessons, type AuthoredLesson } from "./types";

// Ten hand-written Philosophy lessons. Each is researched, concept-specific
// prose with real examples, named thinkers and genuine recall questions whose
// wrong answers are believable misconceptions rather than obvious filler.
const philosophy: AuthoredLesson[] = [
  {
    concept: "The Problem of Induction",
    level: "University",
    summary: "why no amount of evidence logically justifies expecting tomorrow to resemble today",
    estimatedMinutes: 9,
    deck: "Hume asked what justifies inferring the future from the past, and could not find an answer. Not a difficult answer — no answer. Three centuries later there is still no consensus solution, and the argument is worth understanding because the obvious replies all fail in instructive ways, and because every empirical claim you have ever accepted depends on it.",
    keyTerms: [
      { label: "The problem of induction", value: "Hume's argument that inference from observed to unobserved has no non-circular justification." },
      { label: "The uniformity of nature", value: "The assumption that unobserved cases resemble observed ones — which cannot itself be established." },
      { label: "Grue", value: "Goodman's predicate showing that evidence confirms incompatible hypotheses equally well." },
      { label: "The new riddle", value: "Goodman's reframing: the problem is not justifying induction but knowing which predicates to project." },
    ],
    sections: [
      {
        heading: "Hume's argument",
        body: [
          `Hume's structure is short and has never been comfortably answered. Every inference from observed cases to unobserved ones — the sun has risen daily, therefore it will rise tomorrow — presupposes that nature is uniform, that the unobserved resembles the observed. Ask what justifies that presupposition and there are only two candidate routes. It is not a truth of logic: no contradiction arises from supposing the sun fails to rise, and you can describe that world coherently, which is exactly the test for logical necessity.`,
          `So it must be established from experience. But every experiential argument for uniformity has the form: nature has been uniform in the past, therefore it will continue to be — which assumes uniformity to prove it. The justification is circular, and not fixably so, because any evidential argument you construct will need the same premise to get from the evidence to the conclusion. Hume's conclusion is that induction has no rational justification at all: we infer from past to future by habit, an animal disposition of the mind, not by reason. He was not sceptical about whether the sun will rise; he was sceptical that we can say why we are entitled to think so.`,
        ],
      },
      {
        heading: "Why the obvious replies fail",
        body: [
          `The reply that induction has worked well is the circular one restated, and its failure is the whole point: you are inferring that induction will keep working from the fact it has worked, which is an inductive inference. That is not a small technical flaw to be patched; it is the argument.`,
          `Appealing to probability fares no better. Saying past regularity makes future regularity likely requires a principle connecting observed frequencies to unobserved probabilities, and that principle is uniformity again wearing a mathematical costume. Popper's response was to concede the problem entirely: science does not use induction, it makes bold conjectures and eliminates the false ones by deduction, so no inductive justification is needed. This is elegant and widely doubted, because a theory that survived testing is only a reason to rely on it if surviving past tests bears on future performance — which is induction. Popper's corroboration either does that work and is induction, or does not and gives no grounds for building a bridge to his specifications.`,
        ],
      },
      {
        heading: "Goodman's grue",
        body: [
          `Nelson Goodman made the problem worse in a way that reframed it. Define grue: something is grue if it is observed before some future time t and green, or not so observed and blue. Every emerald examined has been green — and equally, every emerald examined has been grue, since they were all observed before t and green. So identical evidence confirms "all emeralds are green" and "all emeralds are grue" to exactly the same degree, and the two predict opposite things about the first emerald found after t.`,
          `This is not a puzzle about whether to trust induction; it is a puzzle about what induction even instructs. Evidence alone cannot select between the hypotheses, because it fits both perfectly. The natural objection — grue is gerrymandered, it smuggles in a time reference — collapses under inspection: someone whose primitive vocabulary is grue and bleen would define green using a time reference, since green would be grue-if-observed-before-t-or-bleen-otherwise. The simplicity is relative to a language, and nothing outside the languages ranks them. Goodman's new riddle is therefore that the problem was never justifying induction but knowing which predicates are projectible, and no formal criterion has been found.`,
        ],
      },
      {
        heading: "What survives",
        body: [
          `No solution commands agreement, and the serious positions are best understood as different ways of living with it. Goodman's own answer was entrenchment: green is projectible because it has a track record of successful projection in our linguistic community — which is honest and frankly descriptive rather than justificatory, since it explains our practice without vindicating it. Reliabilists argue that induction needs no justification we can articulate, only that it in fact reliably produces truth, which relocates the question rather than dissolving it. Strawson argued that asking for a justification of induction is confused, because being inductively reasonable is part of what "reasonable" means — a linguistic answer many find like being told the question is impolite.`,
          `The honest position is that we are not entitled to induction in the way we imagined and use it constantly and could not do otherwise. That is not a comfortable resting place, and its interest is what it reveals about what justification can deliver. The foundations of empirical knowledge are not secured by argument, and it turns out this does not matter operationally — the sun does keep rising. What Hume established is that our confidence has a source other than reason, and Goodman established that even granting the confidence, the evidence does not tell us what to be confident about without a prior sense of which categories carve anything.`,
        ],
      },
      {
        heading: "Why 'it has always worked' proves nothing",
        body: [
          `The argument has a practical residue worth carrying. When a process, a market or a relationship has been stable for a long time, the length of the record feels like evidence about the future, and Hume's point is that the feeling is habit rather than inference — you are not entitled to the confidence you have. This is not a reason for paralysis, since there is no alternative to projecting. It is a reason to notice that "it has never failed before" is precisely what everyone says before the first failure, and that the record's length measures how long the conditions held rather than how long they will. And Goodman adds the sharper question: the pattern you think you see depends entirely on which categories you brought, and the same data supports a pattern you have not thought of, described in a vocabulary you do not use.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "reasoning",
        prompt: "Why can uniformity of nature not be established as a truth of logic?",
        choices: [
          { id: "a", label: "A differing future is contradiction-free, so describable" },
          { id: "b", label: "Logic concerns only deductive relations, which nature does not exhibit" },
          { id: "c", label: "Uniformity has been observed to fail in quantum-scale phenomena" },
          { id: "d", label: "Logical truths cannot be about physical objects such as the sun" },
        ],
        correctChoiceId: "a",
        explanation: "You can coherently describe the sun failing to rise, and coherent describability is precisely the test for whether something is logically necessary. So uniformity must come from experience, where the circularity bites.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is 'induction has worked well in the past' not a defence?",
        choices: [
          { id: "a", label: "Inferring future success from past is itself induction" },
          { id: "b", label: "Induction has in fact failed frequently in the history of science" },
          { id: "c", label: "Past success cannot be measured without assuming a theory of probability" },
          { id: "d", label: "The claim confuses the reliability of induction with its popularity" },
        ],
        correctChoiceId: "a",
        explanation: "It restates the circularity rather than escaping it — and that is not a patchable technical flaw, it is Hume's argument. Any evidential route to uniformity needs uniformity to get from the evidence to the conclusion.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is Popper's falsificationism widely doubted as a solution?",
        choices: [
          { id: "a", label: "Trusting a survived theory assumes past predicts future" },
          { id: "b", label: "Falsification requires induction to establish that a test was correctly conducted" },
          { id: "c", label: "Scientists do not in practice attempt to falsify their own theories" },
          { id: "d", label: "Deduction cannot eliminate hypotheses without auxiliary assumptions" },
        ],
        correctChoiceId: "a",
        explanation: "Corroboration either does that work and is induction, or does not and gives no grounds for building a bridge to the theory's specifications. Conceding the problem does not help if you still want to use the surviving theory.",
      },
      {
        dimension: "depth",
        prompt: "What does Goodman's grue predicate demonstrate?",
        choices: [
          { id: "a", label: "Identical evidence fits rival hypotheses equally" },
          { id: "b", label: "Colour predicates are unreliable because perception varies between observers" },
          { id: "c", label: "Emeralds may in fact change colour at some unspecified future time" },
          { id: "d", label: "Induction fails only for predicates involving explicit time references" },
        ],
        correctChoiceId: "a",
        explanation: "Every emerald examined is green and equally grue, and the two predict opposite things after t. The problem is not whether to trust induction but what it instructs — evidence fits both perfectly.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does calling grue 'gerrymandered' fail as an objection?",
        choices: [
          { id: "a", label: "In grue/bleen, green needs the time clause — simplicity is relative" },
          { id: "b", label: "Gerrymandered predicates are used successfully throughout empirical science" },
          { id: "c", label: "Goodman explicitly defined grue without reference to any time" },
          { id: "d", label: "The objection assumes a formal criterion of simplicity that exists" },
        ],
        correctChoiceId: "a",
        explanation: "Someone whose primitives are grue and bleen would define green as grue-if-observed-before-t-or-bleen-otherwise. Nothing outside the languages ranks them, which is why the new riddle is about which predicates are projectible.",
      },
    ],
    sources: [
      { label: "The Problem of Induction (SEP)", note: "Stanford Encyclopedia entry on Hume's argument and the responses to it.", type: "Reference", url: "https://plato.stanford.edu/entries/induction-problem/" },
      { label: "Goodman, 'The New Riddle of Induction' (overview)", note: "Reference on grue, projectibility and entrenchment.", type: "Reference", url: "https://en.wikipedia.org/wiki/New_riddle_of_induction" },
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
          { id: "c", label: "You are right only by luck, not by tracking truth" },
          { id: "d", label: "Because you did not check a second clock" },
        ],
        correctChoiceId: "c",
        explanation: "Your belief is genuinely true and genuinely justified — but only coincidentally, because the clock froze at the right time. The lucky disconnect between reason and truth is exactly what Gettier cases expose.",
      },
      {
        dimension: "depth",
        prompt: "What did Gettier's 1963 paper actually show?",
        choices: [
          { id: "a", label: "Justified true belief is not always knowledge" },
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
          { id: "b", label: "It denies knowledge: the process was unreliable" },
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
          { id: "c", label: "To ask if we can rule out total deception" },
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
          { id: "b", label: "The greatest wellbeing for the greatest number" },
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
          { id: "b", label: "To rebut the charge that it is fit only for pigs" },
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
          { id: "a", label: "It can license sacrificing rights for a greater total" },
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
          { id: "b", label: "Which rules, generally followed, maximise wellbeing" },
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
          { id: "b", label: "A health system using QALYs on a fixed budget" },
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
          { id: "b", label: "Some acts are right or wrong in themselves" },
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
          { id: "b", label: "The maxim of lying cannot be universalised" },
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
          { id: "b", label: "Using someone purely as a tool, by deceit or force" },
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
          { id: "a", label: "Exceptionless rules can conflict and disturb" },
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
          { id: "b", label: "Human rights law and medical consent" },
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
    concept: "Moral Luck",
    level: "University",
    summary: "why we blame people for things they did not control, and cannot stop",
    estimatedMinutes: 9,
    deck: "Two drivers text at the wheel. One arrives home; the other kills a child who stepped out. They did the same thing, and we do not treat them the same — not slightly, but categorically. Either our entire moral practice is a mistake, or control is not required for responsibility. Neither answer is comfortable.",
    keyTerms: [
      { label: "Moral luck", value: "Where factors beyond an agent's control affect how much praise or blame they properly receive." },
      { label: "The control principle", value: "That people are morally assessable only for what is within their control — intuitive and apparently violated everywhere." },
      { label: "Resultant luck", value: "Luck in how an action turns out, exemplified by the two drivers." },
      { label: "Constitutive luck", value: "Luck in the character you have, which you did not choose and which produces your choices." },
    ],
    sections: [
      {
        heading: "The two drivers",
        body: [
          `Bernard Williams and Thomas Nagel independently identified the problem in 1976, and the cleanest case is the driver. Two people drive equally recklessly. One gets home; the other rounds a corner as a child steps out and cannot stop. Everything the drivers controlled was identical — same negligence, same decision, same care. The difference is a child's timing, which neither influenced or foresaw.`,
          `Yet we treat them entirely differently. One killed someone; the law will imprison him, he may never recover, and we hold him responsible for a death. The other is guilty of a driving offence and forgets it. This is not a subtle asymmetry we might argue away — it is one of the largest distinctions our moral practice makes, and it rests on a fact neither agent controlled. The problem is not that this is unfair in some cases; it is that it is systematic, and that we cannot bring ourselves to abandon it on reflection.`,
        ],
      },
      {
        heading: "The principle it violates",
        body: [
          `The clash is with something close to a truism. The control principle holds that we are morally assessable only for what lies within our control, and that two people who controlled the same things deserve the same assessment. It underlies excuses — I didn't know, I couldn't have stopped, it wasn't my doing — and it is deeply Kantian: the good will shines like a jewel regardless of what fortune allows it to achieve, since the moral worth of an action lies in its maxim and not in results the world supplies.`,
          `The principle is intuitively compelling and our practice contradicts it everywhere. That is the structure of the problem: two things we cannot give up, which cannot both be right. The tempting move is to say the unlucky driver is not more blameworthy, merely treated as if he were for legal or social reasons. But this does not describe the phenomenon honestly. He does not think he was unlucky in his punishment; he thinks he killed a child, and we agree with him. That reaction is not a confusion about the control principle — it is a considered response that survives knowing everything about the case.`,
        ],
      },
      {
        heading: "Four kinds, and the collapse",
        body: [
          `Nagel's decisive move was to show the problem is not confined to outcomes. Resultant luck is the drivers. Circumstantial luck concerns what situations you face: Nagel's example is the Germans who collaborated under the Nazi regime, versus those who emigrated in 1930 and lived unremarkable lives abroad — the second group were never tested, and we do not condemn them, though many would have collaborated identically. Their innocence is a matter of geography.`,
          `Then it goes deeper. Constitutive luck is luck in who you are: your temperament, your capacity for courage, your empathy — none of which you chose, all of which produce your choices. And causal luck is luck in how you are determined by antecedent circumstances. Nagel's conclusion is that applying the control principle rigorously does not refine moral judgement but eliminates it: strip away everything you did not control and there is no agent left to assess, only a sequence of events. The self that would have to do the controlling is itself unchosen, so the principle consumes its own subject.`,
        ],
      },
      {
        heading: "Living with it",
        body: [
          `The responses divide by which horn they take. Some deny the phenomenon: our practice is simply mistaken, blame tracks control, and the extra condemnation of the unlucky driver is a superstition we should outgrow — clean, and it requires calling one of our most robust moral reactions an error. Others deny the principle: responsibility was never about control, we are answerable for what we do in the world including what we could not foresee, and the control principle is a philosopher's fiction that never described anything.`,
          `Williams took a third route and denied the problem needs solving. His concept of agent-regret is the useful contribution: the lorry driver who kills a child through no fault whatsoever feels something distinct from the sympathy of a bystander, and correctly so — not guilt, since he was not at fault, but a relation to the death that is his because he was the cause. Someone who felt only what a witness felt would be missing something, and we would think less of him. Williams's point is that this reaction is not irrational, and a moral psychology that cannot accommodate it has described a creature that does not exist. The honest position may be that morality is not a domain where luck can be quarantined, and the demand that it be is a hope rather than a discovery.`,
        ],
      },
      {
        heading: "Why you take credit for your temperament",
        body: [
          `The uncomfortable exercise is constitutive luck applied to yourself. Your patience, your work ethic, your ability to stay calm — you did not select any of them, and the self that would have done the selecting is made of the same unchosen material. Yet you take credit, and you blame people whose temperaments were issued differently. Notice too the circumstantial version: most of the moral tests you have passed, you passed by never facing them, and your record is substantially a fact about your circumstances. None of this is a licence to stop judging, since Nagel's point is that consistent application eliminates judgement entirely and nobody can live there. It is a reason to hold your verdicts on others more loosely, given how much of your own record was handed to you.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "reasoning",
        prompt: "What makes the two-drivers case a genuine problem rather than an unfairness?",
        choices: [
          { id: "a", label: "The asymmetry is systematic and survives reflection" },
          { id: "b", label: "The unlucky driver was in fact more negligent than the lucky one" },
          { id: "c", label: "Legal systems require different treatment even when morality does not" },
          { id: "d", label: "The drivers' intentions were subtly different at the moment of the accident" },
        ],
        correctChoiceId: "a",
        explanation: "Everything controlled was identical; the difference is a child's timing. And it is one of the largest distinctions our practice makes — the unlucky driver does not think he was unlucky in his punishment, he thinks he killed a child, and we agree.",
      },
      {
        dimension: "depth",
        prompt: "What does the control principle hold?",
        choices: [
          { id: "a", label: "We are morally assessable only for what lies within our control" },
          { id: "b", label: "We are responsible for all foreseeable consequences of our actions" },
          { id: "c", label: "Moral worth depends on the outcomes an action actually produces" },
          { id: "d", label: "Agents should control their circumstances before acting" },
        ],
        correctChoiceId: "a",
        explanation: "It underlies every excuse and is deeply Kantian — the good will shines like a jewel regardless of what fortune allows it to achieve. It is intuitively compelling, and our practice contradicts it everywhere.",
      },
      {
        dimension: "reasoning",
        prompt: "What does Nagel's example of the emigrated Germans illustrate?",
        choices: [
          { id: "a", label: "Circumstantial luck — they were never tested" },
          { id: "b", label: "Resultant luck — their actions happened to produce better outcomes" },
          { id: "c", label: "Constitutive luck — they had better characters than those who stayed" },
          { id: "d", label: "That emigration is itself a morally praiseworthy choice" },
        ],
        correctChoiceId: "a",
        explanation: "We do not condemn them, though many would have collaborated identically had they stayed. Their moral record is substantially a fact about geography — which is luck in what situations you face rather than in how things turn out.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does rigorously applying the control principle eliminate moral judgement?",
        choices: [
          { id: "a", label: "Strip the unchosen and no agent remains to control" },
          { id: "b", label: "Control can never be established with certainty in any actual case" },
          { id: "c", label: "The principle applies only to outcomes, not to character or circumstance" },
          { id: "d", label: "Determinism shows that no action is ever within anyone's control" },
        ],
        correctChoiceId: "a",
        explanation: "Constitutive luck is the killer: your temperament and capacities produce your choices and you chose none of them. The principle consumes its own subject, leaving a sequence of events with nobody to assess.",
      },
      {
        dimension: "reasoning",
        prompt: "What is Williams's concept of agent-regret?",
        choices: [
          { id: "a", label: "A faultless agent's distinct relation to a harm they caused" },
          { id: "b", label: "Guilt experienced by someone who was in fact morally responsible" },
          { id: "c", label: "The regret of having chosen one course of action over another" },
          { id: "d", label: "A social convention requiring apology regardless of any fault" },
        ],
        correctChoiceId: "a",
        explanation: "The blameless lorry driver feels something a witness does not, and correctly so — someone who felt only what a bystander felt would be missing something. A moral psychology that cannot accommodate it describes a creature that does not exist.",
      },
    ],
    sources: [
      { label: "Moral Luck (SEP)", note: "Stanford Encyclopedia entry on Williams, Nagel and the four kinds of luck.", type: "Reference", url: "https://plato.stanford.edu/entries/moral-luck/" },
      { label: "Williams and Nagel, 'Moral Luck' (overview)", note: "Reference on the 1976 symposium and agent-regret.", type: "Reference", url: "https://en.wikipedia.org/wiki/Moral_luck" },
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
          { id: "a", label: "Mind and body are two different kinds of thing" },
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
          { id: "b", label: "It cannot explain mind-body interaction" },
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
          { id: "b", label: "Why any processing is accompanied by experience" },
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
          { id: "c", label: "Some facts about experience escape physics" },
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
          { id: "b", label: "The felt qualities of experience, like red" },
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
          { id: "b", label: "Every event is fixed by prior causes and law" },
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
          { id: "b", label: "Acting on your own reasons without coercion" },
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
          { id: "c", label: "We have free will, so determinism is false" },
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
          { id: "b", label: "The signal may not be a decision, and button-pressing models choice poorly" },
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
          { id: "b", label: "Ultimate responsibility is an illusion; none could do otherwise" },
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
          { id: "b", label: "A thought experiment on life without government" },
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
          { id: "c", label: "Without a common power, a war of all against all" },
          { id: "d", label: "Because he wanted citizens to be able to overthrow bad rulers" },
        ],
        correctChoiceId: "c",
        explanation: "Hobbes' bleak state of nature — 'solitary, poor, nasty, brutish, and short' — made almost any strong sovereign preferable to anarchy. Natural rights and a right of revolution (a, d) are Locke's contribution, not Hobbes'.",
      },
      {
        dimension: "depth",
        prompt: "How did Locke's social contract differ most sharply from Hobbes'?",
        choices: [
          { id: "a", label: "People may replace a government that breaks trust" },
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
          { id: "b", label: "Choosing justice blind to your own position" },
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
          { id: "b", label: "Most never consented and cannot really leave" },
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
          { id: "c", label: "Continuity of consciousness through memory" },
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
          { id: "b", label: "Memory-links are not transitive: A-B, B-C, not A-C" },
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
          { id: "b", label: "An overlapping chain of memories and traits" },
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
          { id: "c", label: "Identity cannot survive a split, so continuity matters" },
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
          { id: "b", label: "We value continuity and connectedness, not strict identity" },
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
    concept: "Theories of Well-being",
    level: "University",
    summary: "what actually makes a life go well for the person living it",
    estimatedMinutes: 9,
    deck: "Ask what makes a life good and you get an answer about happiness, or getting what you want, or achieving things that matter. These are not variations on a theme — they are three incompatible theories that disagree about whole categories of case, and each fails a thought experiment the others survive.",
    keyTerms: [
      { label: "Hedonism", value: "Well-being consists in pleasure and the absence of pain — nothing else counts in itself." },
      { label: "Desire satisfaction", value: "Well-being consists in getting what you want, whether or not it feels good." },
      { label: "Objective list", value: "Certain things benefit you whether or not you want them or enjoy them." },
      { label: "The experience machine", value: "Nozick's thought experiment offering any experience you like, in a tank, forever." },
    ],
    sections: [
      {
        heading: "Three answers that are not compatible",
        body: [
          `Theories of well-being answer a specific question: not what is morally right, but what makes a life go well for the person whose life it is. Hedonism says pleasure and the absence of pain, full stop — everything else matters only as a means. Desire satisfaction says getting what you want, so a life goes well to the extent your preferences are fulfilled, regardless of how it feels. Objective list theories say certain things — knowledge, friendship, achievement, autonomy — benefit you whether you want them or not.`,
          `These come apart on real cases rather than in the abstract. A person who is content because they have been deceived is doing well by hedonism and badly by the others. Someone who achieves what they wanted and hated every minute is doing well by desire satisfaction and badly by hedonism. A person happily absorbed in something trivial is flourishing by two theories and impoverished by the third. Choosing between them is not a taxonomic exercise — it determines what you should want for the people you love, and what a health system should be trying to produce.`,
        ],
      },
      {
        heading: "The experience machine",
        body: [
          `Nozick's thought experiment is the standard argument against hedonism, and it is elegantly constructed to close the exits. Neuroscientists can give you any experiences you choose — writing a great novel, being loved, whatever you want — while you float in a tank. You will not know you are in it; from inside it is indistinguishable from the real thing. You can programme a lifetime in advance. The question is whether you plug in for life.`,
          `Most people say no, and if hedonism were true the refusal would be unintelligible, since the machine dominates on the only dimension hedonism recognises. Nozick's diagnosis is that we want to *do* things and *be* certain kinds of person, not merely to have the experience of doing and being — and we want contact with reality, not a simulation of it, which suggests something matters beyond how life feels from inside. The argument is powerful and not decisive. Critics note the refusal may reflect status quo bias — people asked whether to unplug from a machine they are already in are more willing to stay — and that revulsion at an unfamiliar scenario is weak evidence about value. But something in the intuition survives the debunking: the person in the tank has an experience of achievement without any achievement, and that gap seems to matter.`,
        ],
      },
      {
        heading: "Why desire satisfaction fails too",
        body: [
          `Desire satisfaction looks like the fix — it explains the machine refusal, since you want to actually write the novel rather than experience writing it. But its own problems are severe. Some desires are based on false beliefs: you want the drink because you think it is water and it is bleach, and satisfying that desire does not benefit you. So the theory must retreat to informed desires, what you would want if you knew everything relevant — which quietly imports a standard of what is worth wanting, and starts to look like an objective list wearing a disguise.`,
          `Worse are desires about things that never touch your life. Parfit's case: you meet a stranger on a train, hear about their illness, and hope they recover. You never learn what happened. If their recovering makes your life go better, well-being has become disconnected from anything happening to you, which is absurd. If it does not, the theory needs a restriction — only desires about your own life count — and now it must say why, and any answer appeals to something other than desire. Then there is the problem of adaptation: people in deprived circumstances often report their desires as satisfied, because they have adjusted what they want to what they can get. A theory on which that constitutes flourishing has lost the ability to say anything is wrong.`,
        ],
      },
      {
        heading: "The list, and the charge against it",
        body: [
          `Objective list theories accommodate all this straightforwardly. The tank is bad because it lacks real achievement and real friendship. The stranger's recovery does not affect you because it is not on your list. The adapted preference does not constitute flourishing because knowledge and autonomy are genuine goods whether or not deprivation has taught you to stop wanting them. The theory delivers the verdicts we actually hold.`,
          `The obvious objection is paternalism, and it is serious: who compiled the list, and what licenses telling someone their life is going badly when they are perfectly content? The lists philosophers produce are conspicuously the goods philosophers value — knowledge and achievement rank high, and simple contentment does not. The best defence is the resonance constraint, associated with Railton: nothing can benefit you unless it engages you, so a good you are wholly alienated from does not count as your good. That excludes the crudest paternalism, and it concedes something to the subjective theories in the process. The honest state of the field is that no theory survives all the cases, most philosophers hold a hybrid, and the disagreement is not a failure to have done the work — it is that our concept of a good life is genuinely composite, and the thought experiments pull its components apart.`,
        ],
      },
      {
        heading: "Why you would not plug in",
        body: [
          `The machine is not hypothetical any more, which is what makes it worth taking seriously. You already choose between experience and reality constantly: the feed engineered to feel like connection, the game that delivers achievement's shape without its substance, the content that produces the sensation of learning. Notice that your refusal to plug in fully — assuming you would refuse — is a commitment to something beyond how your life feels from the inside, and that most of what is sold to you is sold on the other side of that line. And notice the harder version: adaptive preference means the strongest evidence that something is wrong is often absent precisely where things are worst, because people adjust what they want to what they can have. That applies to your own life, where satisfaction is not proof that you have not simply stopped wanting things.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What question do theories of well-being answer?",
        choices: [
          { id: "a", label: "What makes a life go well, not what is morally right" },
          { id: "b", label: "Which actions produce the greatest good for the greatest number" },
          { id: "c", label: "What obligations we owe to others in virtue of their interests" },
          { id: "d", label: "How societies should distribute resources between their members" },
        ],
        correctChoiceId: "a",
        explanation: "It is a question about prudential value rather than moral rightness — and the three answers come apart on real cases, determining what you should want for people you love and what a health system should try to produce.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does the experience machine threaten hedonism specifically?",
        choices: [
          { id: "a", label: "The machine wins on hedonism's only measure, so refusal is odd" },
          { id: "b", label: "The machine cannot produce pleasures as intense as real experiences" },
          { id: "c", label: "Hedonists would be unable to choose which experiences to programme" },
          { id: "d", label: "Time spent in the machine produces no pleasure for anyone else" },
        ],
        correctChoiceId: "a",
        explanation: "From inside it is indistinguishable and you can programme any experience. Nozick's diagnosis is that we want to do things and be certain people, and want contact with reality — so something matters beyond how life feels.",
      },
      {
        dimension: "reasoning",
        prompt: "Why must desire satisfaction retreat to 'informed' desires, and what does that cost?",
        choices: [
          { id: "a", label: "False-belief desires do not benefit you, and the fix smuggles in a standard" },
          { id: "b", label: "Uninformed desires are too numerous to satisfy within a single life" },
          { id: "c", label: "Informed desires are easier to measure empirically than raw preferences" },
          { id: "d", label: "The retreat costs nothing, since informed desires remain fully subjective" },
        ],
        correctChoiceId: "a",
        explanation: "Wanting the bleach you think is water is the case. Restricting to what you would want if fully informed starts to look like an objective list wearing a disguise — the theory's subjectivity is what was supposed to be its advantage.",
      },
      {
        dimension: "reasoning",
        prompt: "What does Parfit's stranger on the train show?",
        choices: [
          { id: "a", label: "If a desire never touching your life benefits you, well-being detaches from it" },
          { id: "b", label: "Desires about strangers are always weaker than desires about oneself" },
          { id: "c", label: "You cannot desire an outcome you will never learn about" },
          { id: "d", label: "Altruistic desires benefit the desirer more than selfish ones" },
        ],
        correctChoiceId: "a",
        explanation: "Either their recovery makes your life go better, which is absurd, or the theory needs a restriction to desires about your own life — and justifying that restriction appeals to something other than desire.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the resonance constraint's role in defending objective lists?",
        choices: [
          { id: "a", label: "Nothing benefits you unless it engages you" },
          { id: "b", label: "It establishes which goods belong on the list by democratic agreement" },
          { id: "c", label: "It permits overriding someone's preferences when experts disagree with them" },
          { id: "d", label: "It ranks the list's items by how strongly people typically desire them" },
        ],
        correctChoiceId: "a",
        explanation: "A good you are wholly alienated from does not count as your good — which answers the paternalism charge while conceding something to the subjective theories. Most philosophers end up holding a hybrid for exactly this reason.",
      },
    ],
    sources: [
      { label: "Well-Being (SEP)", note: "Stanford Encyclopedia entry on hedonism, desire theories and objective lists.", type: "Reference", url: "https://plato.stanford.edu/entries/well-being/" },
      { label: "Nozick's experience machine (overview)", note: "Reference on the thought experiment and the debate around it.", type: "Reference", url: "https://en.wikipedia.org/wiki/Experience_machine" },
    ],
  },
];

export const philosophyLessons = buildAuthoredLessons("philosophy", philosophy);
