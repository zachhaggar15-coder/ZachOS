import { buildAuthoredLessons, type AuthoredLesson } from "./types";

// Ten hand-written Rhetoric & Argumentation lessons: researched,
// concept-specific prose from Aristotle to modern argument theory, each closing
// on an everyday example, plus genuine recall quizzes.
const rhetoricArgumentation: AuthoredLesson[] = [
  {
    concept: "The Universal Audience",
    level: "University",
    summary: "Perelman's test for whether an argument is rational or merely effective",
    estimatedMinutes: 9,
    deck: "Perelman spent the war years hidden in Brussels and came out asking how anyone could reason about values at all, given that logic cannot touch them and the alternative appeared to be force. His answer was to make the audience the standard — and then to construct an audience nobody has ever met, whose only function is to tell you whether you are reasoning or manipulating.",
    keyTerms: [
      { label: "The universal audience", value: "The rhetor's construction of all reasonable people, used as a test of an argument's rationality." },
      { label: "The particular audience", value: "The actual people addressed, with their specific commitments and susceptibilities." },
      { label: "Presence", value: "The rhetorical work of making some things vivid and near, which decides what gets reasoned about." },
      { label: "Dissociation", value: "Splitting a single concept into two — apparent versus real — to resolve an incompatibility." },
    ],
    sections: [
      {
        heading: "The problem of reasoning about values",
        body: [
          `Chaïm Perelman was a logician who spent the occupation in hiding, and The New Rhetoric (1958, with Lucie Olbrechts-Tyteca) came out of a question the period made urgent. Logical positivism held that value judgements are not truth-apt — that "this is unjust" expresses an attitude rather than states a fact. Perelman took the implication seriously and found it intolerable: if there is no reasoning about values, then value disputes are settled by force, and the century had just demonstrated what that looks like.`,
          `So he went looking for the logic of value judgements and concluded there was not one, in the formal sense. What there is instead is argumentation — reasoning that aims at the adherence of minds rather than at demonstration, and that is judged by whether it earns assent from an audience rather than by whether it is valid. This makes the audience the standard of a good argument, and immediately raises the obvious objection: if adherence is the test, then whatever persuades is good, and a demagogue with a stadium has out-argued a philosopher with a paper.`,
        ],
      },
      {
        heading: "The construct that answers the objection",
        body: [
          `Perelman's answer is the universal audience, and its strangeness is the point: it does not exist. It is the rhetor's own construction of what all reasonable, competent people would accept — everyone who is not a particular person with particular interests. When you address the universal audience you address no one, and you must therefore drop every appeal that works only on someone: no premise from a shared grievance, no argument that lands only for people with a stake, nothing that depends on your listener's specific position.`,
          `That constraint is the entire mechanism. An argument aimed at a particular audience may exploit their commitments; an argument that would satisfy an audience with no particular commitments cannot. So Perelman's distinction between persuading and convincing falls out cleanly: persuasion targets a particular audience, conviction targets the universal one, and the difference between rhetoric and reason turns out to be a fact about who you have imagined listening. The demagogue is answered — the stadium is a particular audience, and an argument that works only in that room has been marked, by that fact, as persuasion rather than proof.`,
        ],
      },
      {
        heading: "Why the construct is not a cheat",
        body: [
          `The obvious challenge is that the universal audience is invented by the arguer, so it will be constructed to approve whatever the arguer wants — every fanatic imagines all reasonable people agreeing with them. Perelman accepts the premise and denies it is fatal. The construction is culturally and historically situated: what a nineteenth-century European took as self-evident to any reasonable person is not what we would, and no one can build the audience from nowhere. He is not offering a view from outside history.`,
          `What he is offering is a discipline rather than a guarantee. Constructing the universal audience forces you to make explicit what you think any reasonable person accepts, and that claim is then exposed — it can be examined, and it is very often visibly false the moment it is stated. The fanatic's universal audience does not survive being written down, because the premises turn out to require agreeing with the fanatic first. The test is imperfect and it is not empty, and its imperfection is honest: it makes rationality a regulative ideal you argue toward rather than a property you either have or lack. Perelman's claim is that this is what rationality was always doing, and formal logic's promise of more was the illusion.`,
        ],
      },
      {
        heading: "Presence and dissociation",
        body: [
          `Two techniques from the book have outlived the framework. Presence is the observation that argument is decided before any argument is made, by what is vivid and near to the mind — an argued case competes not with counterarguments but with everything the audience is not currently thinking about. The single named victim moves what the accurate statistic does not, and Perelman's point is not that this is a bias to be corrected but that all reasoning happens over some selection of what is present, so someone is always choosing, and the choice is the argument's largest move. Repetition, concrete detail and vivid description are not decoration; they are how something gets into the space where reasoning occurs.`,
          `Dissociation is the deeper move: splitting a concept in two to dissolve a contradiction. Confronted with an incompatibility, you divide the notion into apparent and real — this is not true freedom but licence, not real democracy but its form, not justice but mere legality. The structure appears everywhere once you can see it, and it is genuinely double-edged. It is how philosophy makes progress, since the appearance-reality distinction is dissociation running the whole show, and it is also the standard manoeuvre of anyone defending a doctrine against its record. No true instance ever fails, because failures are reclassified as not true instances. Same move, and telling the good use from the bad requires asking whether the split does explanatory work beyond rescuing the thesis.`,
        ],
      },
      {
        heading: "Why 'anyone reasonable would agree' is a testable claim",
        body: [
          `The usable device is to write the sentence down. When you catch yourself thinking that any sensible person would see this your way, name the audience you are imagining and state the premises they hold — Perelman's finding is that this is where most confident positions fail, because the reasonable person turns out to need your interests, your information and your grievances to reach your conclusion, which makes them you. And carry the presence point separately: before assessing an argument, ask what is absent from it, since what you have not been given is not weighing against what you have, and the person who chose what to make vivid has already done most of the work of persuading you.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "reasoning",
        prompt: "What problem was The New Rhetoric written to solve?",
        choices: [
          { id: "a", label: "If values aren't truth-apt, force settles disputes" },
          { id: "b", label: "Classical rhetoric had been forgotten and needed restoring to the curriculum" },
          { id: "c", label: "Formal logic contained a paradox that undermined deductive proof" },
          { id: "d", label: "Audiences had become too fragmented for mass persuasion to work" },
        ],
        correctChoiceId: "a",
        explanation: "Perelman was a logician hiding during the occupation, and the positivist implication was intolerable given what the century had just demonstrated. He went looking for the logic of value judgements and found argumentation instead.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does making the audience the standard create an immediate problem?",
        choices: [
          { id: "a", label: "If adherence is the test, the demagogue wins" },
          { id: "b", label: "Audiences cannot reliably be surveyed for their actual reactions" },
          { id: "c", label: "Different audiences would rank the same argument identically" },
          { id: "d", label: "It makes argumentation indistinguishable from formal demonstration" },
        ],
        correctChoiceId: "a",
        explanation: "Argumentation aims at the adherence of minds rather than demonstration, so whatever persuades would count as good. The universal audience exists to answer exactly this.",
      },
      {
        dimension: "depth",
        prompt: "How does the universal audience distinguish convincing from persuading?",
        choices: [
          { id: "a", label: "Addressing no one drops every partial appeal" },
          { id: "b", label: "It surveys a representative sample of the population's actual views" },
          { id: "c", label: "It requires arguments to be stated in formally valid syllogisms" },
          { id: "d", label: "It ranks audiences by their competence to judge the question" },
        ],
        correctChoiceId: "a",
        explanation: "Persuasion targets a particular audience, conviction the universal one. An argument that works only in that room has been marked by that fact — the difference between rhetoric and reason is who you imagined listening.",
      },
      {
        dimension: "reasoning",
        prompt: "How does Perelman answer the charge that arguers just construct an audience that agrees with them?",
        choices: [
          { id: "a", label: "It is situated, but stating it exposes its failures" },
          { id: "b", label: "He argues the universal audience is derived from objective features of reason" },
          { id: "c", label: "He denies that arguers have any influence over the construction" },
          { id: "d", label: "He restricts the test to audiences with formal philosophical training" },
        ],
        correctChoiceId: "a",
        explanation: "The fanatic's universal audience does not survive being written down, because the premises require agreeing with the fanatic first. It makes rationality a regulative ideal you argue toward rather than a property you have.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is dissociation double-edged?",
        choices: [
          { id: "a", label: "The appearance-reality split both drives and rescues" },
          { id: "b", label: "It clarifies concepts for experts while confusing lay audiences" },
          { id: "c", label: "It works only for moral concepts and fails for empirical ones" },
          { id: "d", label: "It resolves contradictions but always at the cost of precision" },
        ],
        correctChoiceId: "a",
        explanation: "No true instance ever fails, because failures get reclassified as not true instances — the same move that makes philosophical progress. Telling them apart means asking whether the split does work beyond rescuing the thesis.",
      },
    ],
    sources: [
      { label: "Chaïm Perelman (SEP)", note: "Stanford Encyclopedia entry on The New Rhetoric, the universal audience and dissociation.", type: "Reference", url: "https://plato.stanford.edu/entries/perelman/" },
      { label: "The New Rhetoric (overview)", note: "Reference on presence, audience types and argumentation techniques.", type: "Reference", url: "https://en.wikipedia.org/wiki/The_New_Rhetoric" },
    ],
  },
  {
    concept: "Motivated Reasoning",
    level: "University",
    summary: "why the sharpest people are the hardest to persuade",
    estimatedMinutes: 9,
    deck: "The comfortable theory is that people believe wrong things because they lack information or reasoning ability. The data says otherwise: reasoning ability makes motivated belief worse, not better, and the most numerate people are the most likely to get a calculation wrong when the right answer is politically inconvenient.",
    keyTerms: [
      { label: "Motivated reasoning", value: "Reasoning where the conclusion is fixed in advance and the process constructs a justification." },
      { label: "Directional goals", value: "Wanting a particular conclusion, as against accuracy goals of wanting the true one." },
      { label: "Identity-protective cognition", value: "Kahan's finding that reasoning defends group belonging rather than tracking truth." },
      { label: "The argumentative theory", value: "Mercier and Sperber's claim that reasoning evolved to persuade, not to find truth." },
    ],
    sections: [
      {
        heading: "The illusion of open inquiry",
        body: [
          `Ziva Kunda's 1990 synthesis established the mechanism, and its subtlety is what makes it dangerous. Motivated reasoning is not lying to yourself and not simply believing what you want. It is a biased search: the desired conclusion is fixed in advance, and reasoning is then deployed to build a justification for it — but only one that could survive scrutiny, because people need to maintain an illusion of objectivity to themselves. You cannot conclude anything you like. You can conclude anything you can construct a plausible case for.`,
          `The bias therefore operates on the inputs rather than on the logic, which is why it is nearly invisible from inside. Evidence favouring the wanted conclusion gets a quick pass; evidence against it triggers a search for methodological flaws, and that search is genuinely rigorous and usually finds something, because all studies have flaws. Memory obliges by retrieving supportive instances more readily. The phenomenology is of open inquiry — you really did consider the evidence and really did find the objection — and every individual step is defensible. The conclusion was fixed before any of them.`,
        ],
      },
      {
        heading: "Intelligence makes it worse",
        body: [
          `The finding that overturns the deficit model is Dan Kahan's. Present people with a table of data and a question about whether a skin cream works, and performance tracks numeracy exactly as you would expect. Present the identical numbers as a study of gun control, and something remarkable happens: the highly numerate become *more* polarised, not less. They compute correctly when the correct answer supports their side and make errors when it does not, and the gap between the political groups is widest among the best at maths.`,
          `This kills the intuition that education and reasoning capacity are protective. Greater ability means a greater capacity to construct sophisticated justifications for whatever you were going to conclude — the skill is a better lawyer, not a better judge. Kahan's explanation is identity-protective cognition: on identity-loaded questions, being wrong costs you nothing personally, while dissenting from your community costs you standing among the people you live and work among. Reasoning your way to your group's position is therefore individually rational even when it produces collectively terrible beliefs, which is a genuinely uncomfortable result — it means the behaviour is not a bug in the individual.`,
        ],
      },
      {
        heading: "Why reasoning might be built for this",
        body: [
          `Hugo Mercier and Dan Sperber's argumentative theory proposes that this is not a malfunction at all. If reasoning evolved to find truth, confirmation bias is a catastrophic design flaw sitting at its centre. But if reasoning evolved for arguing — to persuade others and to evaluate their attempts to persuade you — then it is performing to specification. Producing arguments for your own position and scrutinising other people's is exactly what a good advocate does, and exactly what the bias delivers.`,
          `The theory explains an otherwise odd asymmetry: people are strikingly bad at finding flaws in their own arguments and strikingly good at finding flaws in arguments they disagree with, which makes no sense for a truth-detector and perfect sense for an advocate. Its consequence is that reasoning works best in the plural — a group that disagrees, where each side's bias is checked by the other's motivated scrutiny, reliably outperforms its members, while a group that agrees amplifies their shared bias with all the sophistication its members possess. Solitary reasoning about anything you care about is close to the worst case, and it is the mode in which most of us think we do our best thinking.`,
        ],
      },
      {
        heading: "What actually helps",
        body: [
          `The interventions that work follow from the mechanism rather than fighting it. Since the bias is driven by identity threat, reducing the threat reduces the bias: self-affirmation before evidence — having people write about a value that matters to them, unrelated to the issue — measurably reduces defensive processing of unwelcome findings. Framing that decouples a fact from tribal membership works for the same reason. Accountability helps, but only when you must justify yourself to an audience whose view is unknown, since a known audience just redirects the motivation.`,
          `The single most reliable move is exposure to genuine disagreement from people who are not enemies, because it enlists someone else's motivated scrutiny on your behalf. And the thing that does not work is being told about motivated reasoning. Knowing about the bias gives you a sharper tool for diagnosing it in others while leaving your own case untouched, since from inside there is nothing to detect — the reasoning felt like reasoning. This is why the correction cannot be individual insight, and has to be structural: you cannot introspect your way out, you can only put yourself somewhere that others can see what you cannot.`,
        ],
      },
      {
        heading: "Why 'I've thought about this a lot' is not reassuring",
        body: [
          `The practical residue is a reversal of instinct. The confidence that comes from having examined an issue carefully is not evidence you got it right, because careful examination is precisely the mechanism motivated reasoning runs on — the more thinking you did on something you had a stake in, the more sophisticated the justification you built. Notice the specific tell: when you find yourself scrutinising the methodology of a study whose conclusion you dislike, you are probably right about the flaw and should ask whether you would have looked for it had the result gone your way. The only real defence is other people, and the most dangerous position is being the smartest person in a room where everyone already agrees.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What does Kunda's account say the bias operates on?",
        choices: [
          { id: "a", label: "The inputs — what evidence is weighed — not the logic" },
          { id: "b", label: "The logical steps, which are systematically distorted toward the wanted conclusion" },
          { id: "c", label: "The willingness to state conclusions publicly rather than to hold them" },
          { id: "d", label: "The emotional response to evidence, before any reasoning occurs" },
        ],
        correctChoiceId: "a",
        explanation: "Every individual step is defensible; the conclusion was fixed before any of them. You cannot conclude anything you like — you can conclude anything you can construct a plausible case for, since the illusion of objectivity must hold.",
      },
      {
        dimension: "reasoning",
        prompt: "What did Kahan's skin cream versus gun control experiment show?",
        choices: [
          { id: "a", label: "The most numerate became the most polarised" },
          { id: "b", label: "Numeracy protected against political bias when the data were identical" },
          { id: "c", label: "Participants performed equally badly on both versions of the problem" },
          { id: "d", label: "Political framing made everyone equally unable to compute the answer" },
        ],
        correctChoiceId: "a",
        explanation: "They computed correctly when the answer supported their side and erred when it did not. Greater ability is a better lawyer, not a better judge — which kills the intuition that education is protective.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does Kahan argue identity-protective cognition is individually rational?",
        choices: [
          { id: "a", label: "Being wrong is cheap; dissenting costs standing" },
          { id: "b", label: "Group beliefs are usually more accurate than individual judgements" },
          { id: "c", label: "Identity provides a reliable heuristic when evidence is ambiguous" },
          { id: "d", label: "Rational agents should defer to their community on technical questions" },
        ],
        correctChoiceId: "a",
        explanation: "It produces collectively terrible beliefs through individually sensible incentives, which means the behaviour is not a bug in the individual — and is why the fix cannot be telling people to think harder.",
      },
      {
        dimension: "reasoning",
        prompt: "What does the argumentative theory explain that a truth-seeking model cannot?",
        choices: [
          { id: "a", label: "We miss our own flaws but catch others'" },
          { id: "b", label: "People reason more accurately when the stakes are higher" },
          { id: "c", label: "Confirmation bias disappears in expert populations" },
          { id: "d", label: "Groups consistently reason worse than their individual members" },
        ],
        correctChoiceId: "a",
        explanation: "Nonsense for a truth-detector, perfect for an advocate. The consequence is that reasoning works best in the plural — a group that disagrees outperforms its members, while a group that agrees amplifies their shared bias.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does knowing about motivated reasoning fail to protect you from it?",
        choices: [
          { id: "a", label: "Nothing to detect: it felt like reasoning" },
          { id: "b", label: "The knowledge is too abstract to recall in the moment of judgement" },
          { id: "c", label: "People forget the concept unless it is repeatedly reinforced" },
          { id: "d", label: "Awareness reduces the bias but only for low-stakes questions" },
        ],
        correctChoiceId: "a",
        explanation: "It gives you a sharper tool for diagnosing others while leaving your own case untouched. The correction has to be structural rather than introspective — you can only put yourself where others see what you cannot.",
      },
    ],
    sources: [
      { label: "Kunda, 'The Case for Motivated Reasoning' (overview)", note: "Reference on the biased-search mechanism and the illusion of objectivity.", type: "Reference", url: "https://en.wikipedia.org/wiki/Motivated_reasoning" },
      { label: "Mercier and Sperber, The Enigma of Reason (overview)", note: "Reference on the argumentative theory of reasoning.", type: "Reference", url: "https://en.wikipedia.org/wiki/Hugo_Mercier" },
    ],
  },
  {
    concept: "Stasis Theory",
    level: "University",
    summary: "finding the exact point where a disagreement actually turns",
    estimatedMinutes: 9,
    deck: "Most arguments fail before anyone makes a bad point, because the two sides are answering different questions and neither has noticed. Roman advocates had a procedure for this: four questions in a fixed order, where the first one you disagree on is the only one worth arguing, and every point made about a later question is wasted.",
    keyTerms: [
      { label: "Stasis", value: "The point where opposing arguments meet — the actual issue on which a dispute turns." },
      { label: "Conjecture", value: "The first question: did it happen, and what are the facts?" },
      { label: "Definition", value: "The second: what is it, and which category does it belong to?" },
      { label: "Quality", value: "The third: how serious is it, was it justified, what should we think of it?" },
    ],
    sections: [
      {
        heading: "Four questions, in order",
        body: [
          `Hermagoras systematised it in the second century BCE and Cicero and Quintilian made it the working method of Roman advocacy. The insight is that any dispute can be located on one of four questions, and that the questions are ordered, because each presupposes the answers to the ones before it. Conjecture: did it happen? Definition: what was it? Quality: how bad was it, and was it justified? Procedure: is this the right forum to decide it, and by what authority?`,
          `Stasis is the point where the opposing forces meet and stop — literally a standing, from the same root as the stalemate. The method's claim is that a dispute has exactly one, and that it is the first question on which the parties actually diverge. Everything before that point is agreed and needs no argument. Everything after it is unreachable until the stasis is resolved, because arguments about a later question presuppose an answer to an earlier one that has not been settled. So the first move in any argument is not to make your case; it is to find out which question you are on.`,
        ],
      },
      {
        heading: "Why arguing past the stasis fails",
        body: [
          `The failure mode is specific and extremely common. If we disagree at definition — I say what happened was a mistake, you say it was negligence — then no amount of argument at quality can move either of us. I can concede every fact you cite about how serious the consequences were, and it changes nothing, because my position is that the consequences of a mistake are a different matter from the consequences of negligence. You are supplying answers to a question I have not reached. To me, you are refusing to engage; to you, I am ignoring the evidence. Both readings are wrong, and both are inevitable.`,
          `This diagnoses the standard bad argument better than any theory of fallacies does, because nobody in it is reasoning badly. Two people arguing about whether a policy is justified when their real disagreement is about what the policy is will produce hours of high-quality reasoning and no movement. The tell is the specific frustration of having your points acknowledged and not counted — if the other side keeps conceding your evidence and not changing position, you are almost certainly arguing below their stasis, and adding more of what they have already granted is a way of confirming that you have not found it.`,
        ],
      },
      {
        heading: "The strategy of choosing the ground",
        body: [
          `Because the stasis determines the whole shape of the argument, choosing it is the most consequential move available, and skilled advocates fight over the location before fighting on it. The defence that cannot win at conjecture — the facts are simply against them — moves to definition, where the same facts describe something less serious. The defence that loses at definition too moves to quality, conceding what was done and arguing it was justified, or provoked, or trivial. The defence that loses there moves to procedure: this court has no jurisdiction, the evidence was improperly obtained, this is not a matter for law at all.`,
          `Each retreat concedes the ground behind it, and this is why the sequence is legible from outside — you can read a party's confidence directly off where they have chosen to stand. Someone arguing procedure has implicitly given you conjecture, definition and quality, and everyone in the room knows it. The move is not dishonest, since jurisdiction genuinely matters and the last available true argument is still a true argument. But the pattern is informative: watching an opponent's stasis migrate over the course of a dispute tells you exactly which of their positions has collapsed, whatever they say about it.`,
        ],
      },
      {
        heading: "Where the fourth question does real work",
        body: [
          `Procedure looks like the technicality of the set and is frequently where the whole matter is decided. Whether a question belongs to a court or a regulator, to a national parliament or a supranational body, to expert judgement or democratic vote, is not a preliminary to the substantive argument — it usually determines it, because different forums apply different standards and reach different answers on identical facts. Arguing about jurisdiction is arguing about the outcome by other means, which is why it is contested so bitterly by people who claim to be raising a formality.`,
          `The same applies to who has standing to raise a question and what counts as evidence in this forum. These are procedural questions in form and dispositive in effect, and a great deal of political conflict is stasis-four conflict conducted by people insisting they are not having the real argument yet. Recognising it prevents a common error: treating the framework fight as an obstacle delaying the substance, when the framework fight is the substance, and whoever wins it has usually won everything.`,
        ],
      },
      {
        heading: "Why finding the question beats making the case",
        body: [
          `The practical technique inverts how most people prepare. Before assembling arguments, establish where the stasis is — ask what the other side would have to concede for your point to matter, and if they have already conceded it, you are arguing beneath them and every further point is wasted. The productive question in a stuck disagreement is not "what evidence would change your mind" but "which of these four are we actually disagreeing about," and it is worth noticing how rarely anyone can answer it, including about their own position. The two failure modes are symmetrical: arguing below the stasis wastes your effort on ground already given, and arguing above it means asserting a conclusion that depends on a premise your opponent has never accepted.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is the stasis of a dispute?",
        choices: [
          { id: "a", label: "The first of the four questions on which the parties actually diverge" },
          { id: "b", label: "The strongest argument available to the party with the burden of proof" },
          { id: "c", label: "The point at which both parties agree to stop arguing" },
          { id: "d", label: "The set of facts that both sides accept without dispute" },
        ],
        correctChoiceId: "a",
        explanation: "Literally a standing, from the same root as stalemate — where opposing forces meet and stop. Everything before it is agreed; everything after is unreachable until it is resolved.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does arguing at quality fail when the real disagreement is at definition?",
        choices: [
          { id: "a", label: "Later questions assume an earlier one unsettled" },
          { id: "b", label: "Questions of quality are inherently more subjective than questions of definition" },
          { id: "c", label: "Definitional disputes cannot be resolved by evidence of any kind" },
          { id: "d", label: "Quality arguments require a shared moral framework that rarely exists" },
        ],
        correctChoiceId: "a",
        explanation: "Mistake versus negligence: I can concede every fact about the consequences and it changes nothing, because consequences of a mistake are a different matter. To you I am ignoring evidence; to me you are answering a question I have not reached.",
      },
      {
        dimension: "reasoning",
        prompt: "What signals that you are arguing below your opponent's stasis?",
        choices: [
          { id: "a", label: "They concede evidence but do not move" },
          { id: "b", label: "They respond with personal attacks rather than substance" },
          { id: "c", label: "They demand increasingly specific forms of proof" },
          { id: "d", label: "They restate their original position in different words" },
        ],
        correctChoiceId: "a",
        explanation: "The specific frustration of having points acknowledged and not counted. Adding more of what they have already granted is a way of confirming you have not found the stasis — and nobody in the exchange is reasoning badly.",
      },
      {
        dimension: "reasoning",
        prompt: "What does a party's choice of stasis reveal?",
        choices: [
          { id: "a", label: "Each retreat concedes the ground behind it" },
          { id: "b", label: "Which rhetorical training their advocate received" },
          { id: "c", label: "Whether they are arguing in good faith or bad faith" },
          { id: "d", label: "How much evidence they have gathered in preparation" },
        ],
        correctChoiceId: "a",
        explanation: "Someone arguing procedure has implicitly given you conjecture, definition and quality, and everyone knows it. Watching a stasis migrate tells you which position has collapsed, whatever they say about it.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is procedure not merely a technicality?",
        choices: [
          { id: "a", label: "Different forums reach different answers on the same facts" },
          { id: "b", label: "Procedural rules are harder to change than substantive ones" },
          { id: "c", label: "Courts prioritise procedural questions over substantive ones" },
          { id: "d", label: "Procedural objections are the only ones that cannot be rebutted" },
        ],
        correctChoiceId: "a",
        explanation: "Arguing about jurisdiction is arguing about the outcome by other means. Much political conflict is stasis-four conflict run by people insisting they are not having the real argument yet — but the framework fight is the substance.",
      },
    ],
    sources: [
      { label: "Stasis theory (overview)", note: "Reference on Hermagoras, the four questions and their use in Roman advocacy.", type: "Reference", url: "https://en.wikipedia.org/wiki/Stasis_(rhetoric)" },
      { label: "Ancient Rhetoric (SEP)", note: "Stanford Encyclopedia entry covering the classical rhetorical tradition and invention.", type: "Reference", url: "https://plato.stanford.edu/entries/aristotle-rhetoric/" },
    ],
  },
  {
    concept: "Kairos",
    level: "A-level",
    summary: "the timing and occasion that make persuasion effective",
    estimatedMinutes: 8,
    deck: "The same argument can fail one day and triumph the next. Kairos is the ancient Greek insight that persuasion depends not only on what you say and how, but on when — the opportune moment, the right occasion, the readiness of the audience. It is the appeal that turns a good argument into an effective one.",
    keyTerms: [
      { label: "Kairos", value: "The opportune moment and fitting occasion for persuasion." },
      { label: "The rhetorical situation", value: "The context — audience, occasion, moment — that shapes what will persuade." },
      { label: "Timeliness", value: "Saying the right thing at the moment the audience is ready to hear it." },
      { label: "Fittingness", value: "Matching the message to the specific occasion and audience." },
    ],
    sections: [
      {
        heading: "The right moment",
        body: [
          `Kairos is the ancient Greek concept of the opportune moment — the idea that effective persuasion depends on timing and occasion, on saying the right thing at the right time in the right way for the situation. Where ethos, pathos and logos concern the means of persuasion, kairos concerns its context: no argument exists in a vacuum, and the same message can succeed or fail depending on when and where it is delivered and to whom.`,
          `The Greeks had two words for time: chronos, sequential clock time, and kairos, the right or opportune moment — a qualitative sense of the moment being ripe. In rhetoric, kairos captures how deeply situational persuasion is. A brilliant argument delivered at the wrong moment, to an audience not ready to receive it, falls flat; the same argument at the right moment can be irresistible. Recognising and seizing the opportune moment is a crucial and often underappreciated part of persuading well.`,
        ],
      },
      {
        heading: "Reading the situation",
        body: [
          `Kairos requires sensitivity to the whole "rhetorical situation": the audience, the occasion, the surrounding events, the mood, and what the audience is ready to hear. A message must fit its moment. An argument for change may fall on deaf ears when things seem fine but become compelling in the wake of a crisis; a joke that lands at one moment offends at another. Persuasion that ignores the situation — the same pitch regardless of context — misfires, because it fails to meet the audience where they actually are.`,
          `So effective persuasion involves reading the moment and adapting: gauging the audience's mood, knowledge and concerns, the events of the day, and the nature of the occasion, then shaping and timing the message accordingly. The skilled persuader does not just have good arguments but knows when and how to deploy them — when the audience is receptive, when events have created an opening, when the moment is ripe. This situational awareness is what turns a potentially persuasive message into an actually persuasive one.`,
        ],
      },
      {
        heading: "Seizing the opening",
        body: [
          `Kairos has a dynamic, opportunistic quality: opportune moments arise, and they can be seized or missed. Events open windows in which certain arguments suddenly become possible — a disaster that makes people receptive to safety measures, a scandal that makes reform arguments land, a shift in mood that lets a long-resisted idea finally be heard. The persuader attuned to kairos watches for these openings and acts when they come, because such windows often close: the argument compelling in the immediate aftermath of an event may lose its force once attention moves on.`,
          `This is why timing can matter as much as content, from politics to business to personal life. Great communicators sense when the moment is right — when to launch an idea, make a request, or press a case, and when to wait. Raising the right issue at the wrong time can waste it or even backfire; raising it when the moment is ripe can carry it through. Understanding kairos means recognising that persuasion is not just about crafting the perfect message but deploying it at the perfect time, and that patience and timing are themselves rhetorical skills.`,
        ],
      },
      {
        heading: "Fittingness and its ethics",
        body: [
          `Beyond timing, kairos includes fittingness — the appropriateness of the message to the specific occasion and audience. What persuades in one setting is wrong for another: the tone, style, length, evidence and appeals suitable for a scientific conference differ from those for a political rally, a eulogy, or a casual conversation. Getting kairos right means matching the whole character of the communication to its occasion; a message perfectly judged for its occasion persuades, while one that jars with its setting undermines even good content.`,
          `Kairos also carries an ethical dimension. The same sensitivity to the opportune moment that helps honest persuaders can be exploited by the unscrupulous, who seize moments of fear, grief or confusion to push agendas that would not survive calmer scrutiny. Crises are moments of heightened kairos precisely because people are receptive, which makes them opportunities for both genuine leadership and cynical manipulation. Recognising kairos thus helps you both persuade more effectively and stay alert to when a moment of vulnerability is being exploited to rush you toward a conclusion you might resist in calmer times.`,
        ],
      },
      {
        heading: "Why timing is everything",
        body: [
          `You navigate kairos whenever you judge the right moment to say something. You know instinctively not to raise a difficult subject when someone is stressed and exhausted, to wait for the right opening to make a request, to read the room before making a joke. You have seen arguments that would have been dismissed become suddenly compelling after an event made people receptive, and watched good ideas fail simply because they were raised at the wrong time. In your own persuading — asking for a raise, pitching an idea, making a case — timing and fit often matter as much as the argument itself. And the same insight is a defence: when someone presses you hardest in a moment of fear, grief or pressure, recognising the exploitation of the moment can help you insist on deciding when you are calmer. Understanding kairos reveals that persuasion lives not just in what and how, but in when.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is kairos?",
        choices: [
          { id: "a", label: "The right thing said at the right moment" },
          { id: "b", label: "Persuasion through emotion" },
          { id: "c", label: "The credibility of the speaker" },
          { id: "d", label: "The logical structure of an argument" },
        ],
        correctChoiceId: "a",
        explanation: "Kairos is the ancient Greek concept of the opportune moment — effective persuasion depends on timing, occasion and context, not just on what is said and how.",
      },
      {
        dimension: "depth",
        prompt: "How did the Greeks distinguish 'kairos' from 'chronos'?",
        choices: [
          { id: "a", label: "Chronos is clock time; kairos is the opportune moment" },
          { id: "b", label: "They mean exactly the same thing" },
          { id: "c", label: "Kairos is clock time; chronos is the opportune moment" },
          { id: "d", label: "Both refer only to the future" },
        ],
        correctChoiceId: "a",
        explanation: "Chronos is measured sequential time, while kairos is the qualitative sense of the moment being ripe — the opportune moment — capturing how persuasion is deeply situational.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can the same argument succeed at one moment and fail at another?",
        choices: [
          { id: "a", label: "An argument that falls flat can compel after a crisis" },
          { id: "b", label: "Because arguments change their content over time" },
          { id: "c", label: "Because timing never affects persuasion" },
          { id: "d", label: "Because audiences are always identical" },
        ],
        correctChoiceId: "a",
        explanation: "No argument exists in a vacuum; the same message succeeds or fails depending on when and to whom it is delivered, because it must meet the audience where they actually are — receptive or not.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does kairos have a dynamic, opportunistic quality?",
        choices: [
          { id: "a", label: "Windows open, to seize or miss" },
          { id: "b", label: "Because opportune moments never arise" },
          { id: "c", label: "Because timing is fixed and unchanging" },
          { id: "d", label: "Because content never matters" },
        ],
        correctChoiceId: "a",
        explanation: "A scandal or disaster can suddenly make an argument land, but such windows often close once attention moves on — so the persuader attuned to kairos watches for openings and acts when the moment is ripe.",
      },
      {
        dimension: "depth",
        prompt: "What does the 'fittingness' aspect of kairos require?",
        choices: [
          { id: "a", label: "Matching tone, style and appeals to the occasion" },
          { id: "b", label: "Using the identical approach in every setting" },
          { id: "c", label: "Ignoring the audience entirely" },
          { id: "d", label: "Only ever using logical arguments" },
        ],
        correctChoiceId: "a",
        explanation: "Fittingness means the appeals suitable for a scientific conference differ from those for a rally or a eulogy; a message perfectly judged for its occasion persuades, while one that jars with its setting undermines even good content.",
      },
    ],
    sources: [
      { label: "Kairos (rhetoric) (overview)", note: "Reference on the concept of the opportune moment.", type: "Reference", url: "https://en.wikipedia.org/wiki/Kairos" },
      { label: "Purdue OWL: The Rhetorical Situation", note: "Guide to context, occasion and audience in persuasion.", type: "Reference", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/rhetorical_situation/index.html" },
    ],
  },
  {
    concept: "Framing",
    level: "A-level",
    summary: "shaping interpretation by selecting context and emphasis",
    estimatedMinutes: 8,
    deck: "You can describe the same operation as having a '90% survival rate' or a '10% death rate' — identical facts, opposite feelings. Framing is the power to shape how something is understood by choosing what to emphasise and what context to place it in. It is one of the most powerful and least visible tools of persuasion.",
    keyTerms: [
      { label: "Framing", value: "Selecting what to emphasise to shape reading." },
      { label: "Selection and salience", value: "Choosing what to include and make prominent, and what to omit." },
      { label: "Gain vs loss framing", value: "Presenting the same outcome in terms of what is gained or what is lost." },
      { label: "Reframing", value: "Changing how an issue is understood by shifting its frame." },
    ],
    sections: [
      {
        heading: "The same facts, a different picture",
        body: [
          `Framing is the way a message is constructed to shape how the audience interprets it — by selecting which aspects of a situation to emphasise, choosing the context to place it in, and deciding what to leave out. The core insight is that the same facts can be presented in different "frames" that lead to very different interpretations and feelings, without any fact being false. Framing works not by lying but by directing attention: making some features prominent and others invisible steers how we see a whole situation.`,
          `A classic demonstration is that a treatment described as having a "90% survival rate" is far more appealing than the identical treatment described as having a "10% mortality rate". The facts are the same; the frame changes the response. This power operates everywhere — how an issue, event, product or person is framed shapes how it is judged, often more than the underlying facts do. Because framing feels like neutral description rather than persuasion, it is one of the most powerful and least noticed ways of influencing how people think.`,
        ],
      },
      {
        heading: "Selection and salience",
        body: [
          `Framing works largely through selection and salience — what is included and made prominent, and what is omitted. Every account of a situation is selective; no one can mention everything, so choices must be made about what to foreground, and those choices constitute a frame. By emphasising particular facts, causes and consequences, a frame highlights one way of understanding a situation while pushing alternatives into the background. It answers, implicitly, "what is this really about?"`,
          `Consider how the same policy can be framed as being about "freedom" or "safety", "fairness" or "efficiency", "opportunity" or "risk" — each frame invokes different values, brings different considerations to mind, and points toward different conclusions, all while describing the same policy. Political debate is very often a battle over framing: whoever's frame prevails on what an issue is "about" has largely won the argument before the specifics are even debated.`,
        ],
      },
      {
        heading: "Gains, losses and reference points",
        body: [
          `One of the most studied framing effects concerns gains and losses. Because people are loss-averse — feeling losses more intensely than equivalent gains — the same outcome framed as a loss provokes a stronger reaction than framed as a gain. A price difference framed as a "surcharge" for paying by card feels worse than the same difference framed as a "discount" for paying by cash, though they are identical. People take more risks to avoid a loss than to secure an equivalent gain, so framing a choice in terms of what might be lost versus gained can flip the decision.`,
          `Framing also sets reference points — the baseline against which something is judged. Whether an outcome seems good or bad depends on what it is compared to, and the frame supplies that comparison. A salary, result or price is judged relative to expectations the framing can shape. This is why so much persuasion involves establishing the right comparison: making an offer look generous by anchoring it against a higher reference point, or a problem look severe by framing it against an ideal. Control the reference point, and you control much of the judgement.`,
        ],
      },
      {
        heading: "Framing, honesty and defence",
        body: [
          `Framing occupies an ambiguous ethical space. Some framing is unavoidable and legitimate: because all communication is selective, everyone frames, and presenting true information clearly and compellingly is a normal part of honest communication. There is no "frameless" description; the question is not whether to frame but how. Framing becomes deceptive when it is used to mislead — to create a false impression while technically stating truths, hide crucial context, or distort through selective emphasis rather than clarify.`,
          `The practical defence against manipulative framing is to become aware of frames and to reframe deliberately. When you notice an issue presented in a particular way, ask what the frame is emphasising and what it leaves out, and consciously consider the same facts under a different frame — survival versus mortality, gain versus loss, freedom versus safety. Seeing multiple frames on the same facts loosens the grip of any single one and lets you judge the underlying reality more clearly. Recognising framing is one of the most useful critical-thinking skills, because so much influence operates through it invisibly, disguised as neutral description.`,
        ],
      },
      {
        heading: "The spin you see every day",
        body: [
          `You are framed constantly. The news chooses which facts to foreground and what an event is "about"; a product is "95% fat-free" rather than "5% fat"; a political issue is presented in terms that favour one side's values; a price is a "discount" rather than a "surcharge". Notice how the same facts feel different depending on how they are framed, and how often what looks like neutral description is actually a choice about emphasis and context. The most useful habit is to reframe deliberately: when something is presented one way, ask what it looks like from another angle, what is being emphasised and what omitted. Learning to see framing — and to reframe for yourself — is a genuine defence against being steered by how information is packaged rather than by what is actually true.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is framing?",
        choices: [
          { id: "a", label: "Selecting what to emphasise to shape reading" },
          { id: "b", label: "Stating outright falsehoods" },
          { id: "c", label: "Using only emotional appeals" },
          { id: "d", label: "Timing a message correctly" },
        ],
        correctChoiceId: "a",
        explanation: "Framing shapes how an audience interprets a message by emphasising certain aspects, choosing the context, and leaving things out — steering understanding not by lying but by directing attention.",
      },
      {
        dimension: "reasoning",
        prompt: "Why do a '90% survival rate' and a '10% mortality rate' produce different responses?",
        choices: [
          { id: "a", label: "Same facts, different frame, different response" },
          { id: "b", label: "The survival rate describes a different treatment" },
          { id: "c", label: "One of the figures is false" },
          { id: "d", label: "Framing never affects judgement" },
        ],
        correctChoiceId: "a",
        explanation: "The two describe the same treatment with the same facts, but the different frame — emphasising survival versus death — changes how appealing it seems, showing framing works without any fact being false.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is much political debate really a 'battle over framing'?",
        choices: [
          { id: "a", label: "Winning the frame wins the argument in advance" },
          { id: "b", label: "Because framing is irrelevant to politics" },
          { id: "c", label: "Because all frames lead to the same conclusion" },
          { id: "d", label: "Because facts alone decide every debate" },
        ],
        correctChoiceId: "a",
        explanation: "The same policy framed as being about 'freedom' or 'safety' invokes different values and points to different conclusions; whoever's frame prevails on 'what this is really about' shapes everything that follows.",
      },
      {
        dimension: "depth",
        prompt: "Why does 'loss framing' tend to provoke a stronger reaction than 'gain framing'?",
        choices: [
          { id: "a", label: "Loss aversion: losses hurt more than gains" },
          { id: "b", label: "Because gains are always larger than losses" },
          { id: "c", label: "Because losses are always false" },
          { id: "d", label: "Because framing has no effect on decisions" },
        ],
        correctChoiceId: "a",
        explanation: "Loss aversion means the same outcome framed as a loss feels worse than framed as a gain — a card 'surcharge' feels worse than a cash 'discount' — so loss versus gain framing can flip the decision people make.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the practical defence against manipulative framing?",
        choices: [
          { id: "a", label: "Spot the frame and deliberately reframe" },
          { id: "b", label: "Ignoring all information" },
          { id: "c", label: "Accepting the first frame you encounter" },
          { id: "d", label: "Assuming framing never occurs" },
        ],
        correctChoiceId: "a",
        explanation: "Noticing what a frame emphasises and omits, and consciously viewing the same facts under another frame — survival versus mortality, freedom versus safety — loosens any single frame's grip and lets you judge the underlying reality more clearly.",
      },
    ],
    sources: [
      { label: "Framing (social sciences) (overview)", note: "Reference on framing effects and salience.", type: "Reference", url: "https://en.wikipedia.org/wiki/Framing_(social_sciences)" },
      { label: "Kahneman & Tversky, framing and prospect theory", note: "Reference on gain/loss framing and loss aversion.", type: "Reference", url: "https://en.wikipedia.org/wiki/Framing_effect_(psychology)" },
    ],
  },
  {
    concept: "Enthymeme",
    level: "University",
    summary: "an argument with an unstated premise supplied by the audience",
    estimatedMinutes: 9,
    deck: "Most everyday arguments leave something out — an assumption so obvious, or so convenient, that it is never spoken but simply assumed. Aristotle called this the enthymeme, and it is the real engine of persuasion: an argument the audience helps complete, which is exactly why it works, and exactly where hidden assumptions hide.",
    keyTerms: [
      { label: "Enthymeme", value: "An argument whose missing premise the audience supplies." },
      { label: "The rhetorical syllogism", value: "Aristotle's term for the enthymeme as reasoning suited to persuasion." },
      { label: "Unstated premise", value: "The assumption left implicit because the audience already shares or will supply it." },
      { label: "Audience participation", value: "The way the audience completes the argument, deepening its persuasive grip." },
    ],
    sections: [
      {
        heading: "The argument with a gap",
        body: [
          `An enthymeme is an argument in which one part — usually a premise — is left unstated, because the speaker assumes the audience already accepts it or will supply it themselves. Aristotle called it the "rhetorical syllogism", the characteristic form of reasoning in persuasion, as opposed to the fully explicit syllogisms of formal logic. A complete syllogism states everything: "All men are mortal; Socrates is a man; therefore Socrates is mortal." An enthymeme leaves part out: "Socrates is a man, so he is mortal" — leaving the general premise unspoken because everyone accepts it.`,
          `This might seem like mere shorthand, but it is deeply significant. Real persuasion almost never spells out every premise; that would be tedious and often counterproductive. Instead, arguments rely on the audience to fill in the gaps from shared assumptions. "She's a politician, so don't believe her" is an enthymeme resting on the unstated premise "politicians are untrustworthy", and it works only because the audience supplies that missing piece. The enthymeme is thus the natural form of everyday persuasive reasoning, and it reveals how much of an argument's real content lies in what is not said.`,
        ],
      },
      {
        heading: "Why leaving it out is powerful",
        body: [
          `Part of the enthymeme's power lies in audience participation. When the audience supplies the missing premise themselves, they become active participants rather than passive recipients, and an argument you help construct is more persuasive than one simply handed to you. By drawing on premises the audience already holds and letting them complete the reasoning, the enthymeme engages them in a kind of collaboration, so the conclusion feels more like their own realisation than an external claim.`,
          `Leaving a premise unstated is also powerful because unstated premises escape scrutiny. A spoken premise can be examined and challenged; an assumed one slips past unexamined, doing its work invisibly. If "politicians are untrustworthy" is never stated, it is never questioned, yet it carries the whole argument. This is why enthymemes are so central to how assumptions are transmitted: an argument can smuggle in a contentious assumption precisely by not stating it, relying on the audience to supply it without noticing they have accepted something debatable. The gap is where the hidden work happens.`,
        ],
      },
      {
        heading: "Enthymemes and shared assumptions",
        body: [
          `Because enthymemes rely on the audience to supply missing premises, they depend on shared assumptions — the common ground of beliefs, values and knowledge both take for granted. An enthymeme only works if the audience actually holds the unstated premise; the same argument that persuades one audience falls flat with another that does not share it. "She's a politician, so don't believe her" persuades those who assume politicians are untrustworthy and fails with those who do not. To understand why an argument persuades a particular audience, look at the unstated premises it relies on them to hold.`,
          `Enthymemes thus both reflect and reinforce a community's shared beliefs. Effective persuaders instinctively build arguments on the assumptions their audience already accepts, which is why persuasion is so audience-dependent, and why the unstated premises of a culture's common arguments reveal its underlying values. Analysing the enthymemes at work in political rhetoric, advertising or everyday debate — asking "what must the audience already believe for this argument to work?" — exposes the often-invisible assumptions on which persuasion rests, and how they are quietly perpetuated by being continually relied upon but never stated.`,
        ],
      },
      {
        heading: "Uncovering the unstated",
        body: [
          `The most valuable skill the enthymeme teaches is to uncover unstated premises — to reconstruct the full argument by identifying what has been left out. Faced with any persuasive claim, ask: what would have to be true, but is not stated, for this argument to work? Making the hidden premise explicit is often where an argument's real weakness is exposed. An argument may seem compelling until you surface its buried assumption and find that the assumption is precisely what is questionable — that the persuasive force rested on a premise you would reject if it were stated openly.`,
          `This is a core critical-thinking move. Much bad reasoning, and much manipulation, hides in unstated premises: a conclusion is presented as following obviously from a stated fact, when it really depends on a hidden assumption doing all the work that would not survive scrutiny. By training yourself to fill in the gaps — reconstructing the enthymeme into a full argument with every premise explicit — you can examine assumptions designed to slip past you. Understanding the enthymeme thus does double duty: it reveals how real persuasion works through what is left unsaid, and gives you a tool for exposing the hidden assumptions weak or manipulative arguments depend on.`,
        ],
      },
      {
        heading: "The assumptions hiding in plain sight",
        body: [
          `You reason through enthymemes constantly, and are persuaded by them without noticing. When someone says "it's natural, so it's good for you", "he went to a top university, so he must be brilliant", or "it's expensive, so it must be quality", they are giving you an enthymeme resting on an unstated premise you are expected to supply — and the persuasion works precisely because that premise goes unexamined. The powerful habit is to surface the missing piece: ask what you would have to assume for the argument to hold, then ask whether that assumption is actually true. Often the buried premise ("natural things are good", "expensive means quality") is exactly the dubious part. Learning to see the gap in an argument — and fill it in deliberately — turns you from someone who completes persuasive arguments automatically into someone who examines the assumptions they rest on.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is an enthymeme?",
        choices: [
          { id: "a", label: "An argument whose missing premise the audience supplies" },
          { id: "b", label: "An argument in which every premise is stated explicitly" },
          { id: "c", label: "A purely emotional appeal" },
          { id: "d", label: "A logical fallacy" },
        ],
        correctChoiceId: "a",
        explanation: "Aristotle's 'rhetorical syllogism', an enthymeme leaves a premise unstated because the audience already accepts it or will supply it — 'Socrates is a man, so he is mortal' leaves 'all men are mortal' unspoken.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does audience participation make the enthymeme so persuasive?",
        choices: [
          { id: "a", label: "A supplied premise feels like one's own" },
          { id: "b", label: "Because it states every premise fully" },
          { id: "c", label: "Because it removes the need for any premises" },
          { id: "d", label: "Because audiences ignore incomplete arguments" },
        ],
        correctChoiceId: "a",
        explanation: "By letting the audience complete the reasoning from premises they already hold, the enthymeme makes them active co-creators; an argument you help construct grips more than one simply handed to you.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is leaving a premise unstated powerful beyond mere brevity?",
        choices: [
          { id: "a", label: "An unstated premise works unseen" },
          { id: "b", label: "Because unstated premises are always true" },
          { id: "c", label: "Because it makes arguments longer" },
          { id: "d", label: "Because audiences never notice arguments" },
        ],
        correctChoiceId: "a",
        explanation: "A spoken premise can be examined and challenged, but an assumed one slips past unexamined — so an argument can smuggle in a contentious assumption precisely by relying on the audience to supply it without noticing.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does the same enthymeme persuade one audience but fall flat with another?",
        choices: [
          { id: "a", label: "It works only if the audience holds the premise" },
          { id: "b", label: "Because arguments change their words for each audience" },
          { id: "c", label: "Because all audiences share the same beliefs" },
          { id: "d", label: "Because enthymemes never depend on the audience" },
        ],
        correctChoiceId: "a",
        explanation: "Enthymemes depend on shared assumptions: 'she's a politician, so don't believe her' persuades those who assume politicians are untrustworthy and fails with those who do not — so the unstated premise reveals why an argument persuades a given audience.",
      },
      {
        dimension: "depth",
        prompt: "What critical-thinking move does the enthymeme teach?",
        choices: [
          { id: "a", label: "Ask what unstated thing must be true" },
          { id: "b", label: "Accepting every argument as complete" },
          { id: "c", label: "Ignoring the conclusion" },
          { id: "d", label: "Adding more emotional appeals" },
        ],
        correctChoiceId: "a",
        explanation: "Reconstructing the full argument by surfacing the hidden premise often exposes its real weakness — the buried assumption ('natural things are good', 'expensive means quality') is frequently exactly the dubious part doing all the work.",
      },
    ],
    sources: [
      { label: "Aristotle, Rhetoric", note: "The origin of the enthymeme as the rhetorical syllogism.", type: "Primary", url: "https://www.gutenberg.org/ebooks/6763" },
      { label: "Enthymeme (overview)", note: "Reference on enthymemes and unstated premises.", type: "Reference", url: "https://en.wikipedia.org/wiki/Enthymeme" },
    ],
  },
  {
    concept: "Fallacy",
    level: "A-level",
    summary: "a pattern of reasoning that appears stronger than it is",
    estimatedMinutes: 8,
    deck: "A fallacy is an argument that looks convincing but is actually broken — a flaw in reasoning that gives a claim more apparent support than it deserves. Learning to recognise the common fallacies is like learning the standard tricks of a card sharp: once you can name them, they stop working on you.",
    keyTerms: [
      { label: "Fallacy", value: "A pattern of reasoning that appears stronger than it is, giving false support to a conclusion." },
      { label: "Formal vs informal", value: "Fallacies of logical structure, versus fallacies of content, relevance or language." },
      { label: "Ad hominem", value: "Attacking the person instead of their argument." },
      { label: "Straw man", value: "Misrepresenting an opponent's argument to attack a weaker version." },
    ],
    sections: [
      {
        heading: "Reasoning that looks better than it is",
        body: [
          `A fallacy is a flaw in reasoning — a pattern of argument that appears to support its conclusion but does not really do so, or does so far less than it seems. Fallacies are dangerous precisely because they are persuasive: they exploit patterns that feel convincing while failing under examination. Learning the common fallacies is one of the most practical skills in critical thinking, because it lets you recognise bad reasoning that would otherwise slip past, both in others' arguments and your own.`,
          `Fallacies are traditionally divided into formal and informal. Formal fallacies are flaws in the logical structure — invalid regardless of content, like the pattern "if P then Q; Q; therefore P". Informal fallacies, more common in everyday persuasion, are flaws in the content, relevance, clarity or context of an argument rather than its pure structure. Most fallacies worth knowing are informal, because they pervade real debate, advertising and rhetoric, exploiting relevance, emotion and language rather than formal logic.`,
        ],
      },
      {
        heading: "Attacking the person and the straw man",
        body: [
          `Two of the most common fallacies concern how opponents are treated. The "ad hominem" fallacy attacks the person rather than the argument — dismissing a claim because of who says it, their character, or their motives, instead of engaging with its merits. "You would say that, you're biased" does not refute anything; a claim can be true regardless of who makes it or why. Ad hominem is fallacious because a person's flaws are usually irrelevant to whether their argument is sound.`,
          `The "straw man" fallacy misrepresents an opponent's position, replacing their actual argument with a distorted, weaker version that is easier to attack, then knocking down the distortion as if it defeated the real thing. It is enormously common in debate, because a distorted version is easier to refute and audiences may not notice the substitution. The straw man is the opposite of honest engagement, and recognising it — asking "is that really what they argued, or a weakened version of it?" — is a key defence against a very common manipulation.`,
        ],
      },
      {
        heading: "False choices and slippery slopes",
        body: [
          `Several fallacies distort the logical possibilities. The "false dilemma" presents only two options as if they were the only ones, when others exist — "you're either with us or against us" forces a choice that ignores the positions in between. By artificially narrowing the options, it manipulates the audience toward one of the two presented, and recognising it means asking whether the choice really is binary or whether other options have been hidden.`,
          `The "slippery slope" argues that one step will inevitably lead to a chain of increasingly bad consequences, without justifying why each step must follow — "if we allow this small thing, it will lead to disaster". This is not always fallacious (sometimes one thing genuinely does lead to another), but it becomes a fallacy when the chain of inevitability is merely asserted rather than shown. Other common fallacies include the "appeal to authority" (treating something as true merely because an authority, especially an irrelevant one, said it), "hasty generalisation" (a broad conclusion from too little evidence), and "circular reasoning" (assuming the conclusion in the premises).`,
        ],
      },
      {
        heading: "Using fallacies well and wisely",
        body: [
          `Knowing fallacies is powerful, but it comes with two cautions. First, an argument being fallacious does not make its conclusion false; it just means this particular argument fails to support it. A conclusion defended by a fallacy might still be true, defensible by a better argument. Confusing "your argument is fallacious" with "you are wrong" is itself an error — the "fallacy fallacy". Spotting a fallacy shows an argument is bad, not that the opposite is true.`,
          `Second, fallacy-spotting can be misused. In debate, people sometimes label anything they disagree with a "fallacy" to dismiss it without engaging, or apply the names loosely and incorrectly. Not every emotional appeal is a fallacious appeal to emotion, not every citation of an expert is a fallacious appeal to authority, and not every warning about consequences is a slippery slope. The point of learning fallacies is not to win arguments by shouting their names but to reason better — to recognise genuinely flawed patterns and avoid them, especially in one's own thinking. Used well, knowledge of fallacies sharpens thought; used as a rhetorical weapon, it becomes just another way of avoiding real engagement.`,
        ],
      },
      {
        heading: "The tricks that stop working once you name them",
        body: [
          `You encounter fallacies daily, and naming them defuses them. When someone attacks a person instead of their point (ad hominem), distorts your view into something easier to mock (straw man), forces a false choice ("either this or catastrophe"), or warns that a small step means inevitable disaster (slippery slope), you can recognise the pattern rather than being swayed by it. You will also catch these moves in your own thinking, where they do the quietest damage. But use the knowledge wisely: spotting a fallacy shows an argument is weak, not that its conclusion is false, and calling "fallacy" is no substitute for genuine engagement. Learning the common fallacies is like learning a magician's standard tricks — once you can see how the illusion is done, it loses its power to fool you.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is a fallacy?",
        choices: [
          { id: "a", label: "Reasoning that seems to support but does not" },
          { id: "b", label: "Any argument you disagree with" },
          { id: "c", label: "A statement that is factually false" },
          { id: "d", label: "A strong, valid argument" },
        ],
        correctChoiceId: "a",
        explanation: "A fallacy is a flaw in reasoning that seems convincing but fails under examination, giving a conclusion more apparent support than it deserves — which is exactly why fallacies are persuasive and worth learning to spot.",
      },
      {
        dimension: "depth",
        prompt: "What is the 'straw man' fallacy?",
        choices: [
          { id: "a", label: "Attacking a weakened version of the argument" },
          { id: "b", label: "Attacking the person instead of the argument" },
          { id: "c", label: "Presenting only two options as if they were the only ones" },
          { id: "d", label: "Citing an irrelevant authority" },
        ],
        correctChoiceId: "a",
        explanation: "The straw man replaces someone's actual argument with a distorted, weaker version that is easier to knock down, then treats defeating the caricature as if it refuted the real position.",
      },
      {
        dimension: "depth",
        prompt: "Why is an 'ad hominem' attack fallacious?",
        choices: [
          { id: "a", label: "Flaws don't bear on an argument's truth" },
          { id: "b", label: "Because people should never be criticised" },
          { id: "c", label: "Because it engages directly with the argument" },
          { id: "d", label: "Because it always uses evidence" },
        ],
        correctChoiceId: "a",
        explanation: "Ad hominem attacks the person rather than the argument, but who makes a claim or why is usually irrelevant to whether it is sound — 'you're biased' does not actually refute anything.",
      },
      {
        dimension: "reasoning",
        prompt: "When does 'slippery slope' reasoning become a fallacy?",
        choices: [
          { id: "a", label: "The chain of consequences is asserted, not shown" },
          { id: "b", label: "Whenever consequences are mentioned at all" },
          { id: "c", label: "Only when it is true" },
          { id: "d", label: "Never; it is always fallacious" },
        ],
        correctChoiceId: "a",
        explanation: "Slippery-slope reasoning is not always fallacious — sometimes one thing does lead to another — but it becomes a fallacy when the inevitability of the chain is merely asserted rather than justified.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the 'fallacy fallacy' — a key caution about spotting fallacies?",
        choices: [
          { id: "a", label: "Calling a conclusion false as its argument fails" },
          { id: "b", label: "That fallacies never exist" },
          { id: "c", label: "That every argument contains a fallacy" },
          { id: "d", label: "That naming a fallacy always wins the debate" },
        ],
        correctChoiceId: "a",
        explanation: "An argument being fallacious shows only that this argument fails to support its conclusion, not that the conclusion is false; confusing 'your argument is fallacious' with 'you are wrong' is itself an error.",
      },
    ],
    sources: [
      { label: "Fallacies (SEP)", note: "Stanford Encyclopedia entry on the theory of fallacies.", type: "Reference", url: "https://plato.stanford.edu/entries/fallacies/" },
      { label: "List of fallacies (overview)", note: "Reference cataloguing common formal and informal fallacies.", type: "Reference", url: "https://en.wikipedia.org/wiki/List_of_fallacies" },
    ],
  },
  {
    concept: "Burden of Proof",
    level: "A-level",
    summary: "who must support a claim and how much evidence is needed",
    estimatedMinutes: 8,
    deck: "In any dispute, a crucial and often-overlooked question comes before the evidence itself: whose job is it to prove the point? The burden of proof determines who must make the case and who may simply wait to be convinced — and controlling it, or shirking it, decides many arguments before a single fact is weighed.",
    keyTerms: [
      { label: "Burden of proof", value: "The obligation to provide evidence or reasons for a claim one asserts." },
      { label: "He who asserts must prove", value: "The principle that the one making a claim bears the burden of supporting it." },
      { label: "Shifting the burden", value: "Illegitimately demanding others disprove a claim rather than proving it yourself." },
      { label: "Proportioning evidence", value: "The idea that stronger or more extraordinary claims require stronger evidence." },
    ],
    sections: [
      {
        heading: "Whose job is it to prove it?",
        body: [
          `The burden of proof is the obligation to support a claim with evidence or reasons. In any disagreement, a fundamental question is who bears it: who must actively make the case, and who may simply withhold agreement until convinced. This matters enormously, because whoever bears the burden has work to do while the other party can wait. If you make a claim, the burden is generally on you to support it, not on others to disprove it — and misplacing it is a common source of bad reasoning.`,
          `The guiding principle, expressed in the Latin often rendered "he who asserts must prove", is that the person making a positive claim bears the burden of providing evidence for it. If someone asserts that a treatment works, or that an event happened, it is their job to support it, not the listener's to prove them wrong. The default, in the absence of evidence, is to withhold belief, not to accept a claim until it is disproven — a principle foundational to rational inquiry, science and fair debate.`,
        ],
      },
      {
        heading: "Why the asserter bears the burden",
        body: [
          `Placing the burden on the one who asserts is not arbitrary; it follows from a basic feature of evidence. It is generally possible to provide evidence for things that are true, but often impossible to prove a negative — to demonstrate that something does not exist or did not happen. If the burden were on the doubter to disprove every claim, one could assert anything (that invisible dragons exist, that a remedy works) and demand it be accepted until disproven, which is impossible. Requiring the asserter to provide positive evidence keeps the door closed to unlimited unfounded claims.`,
          `This is why, in rational discourse, the default is to not believe a claim until adequate evidence is provided, rather than believe it until refuted. Withholding belief in the absence of evidence is not stubbornness but the appropriate default; belief should be earned by evidence. The formulation "extraordinary claims require extraordinary evidence" builds on this: the more a claim departs from what is well established, or the more consequential accepting it would be, the stronger the evidence needed. A mundane claim needs little support; a startling one needs a great deal.`,
        ],
      },
      {
        heading: "Shifting and shirking the burden",
        body: [
          `A common rhetorical manoeuvre is to illegitimately shift the burden onto the other party — to make a claim and then demand that opponents disprove it. "Prove that it doesn't work" or "you can't prove I'm wrong" attempts to reverse the burden, putting the impossible task of disproof on the doubter while evading the responsibility to provide evidence. This is fallacious (an "appeal to ignorance"), because the inability to disprove a claim is not evidence that it is true — absence of a refutation is not proof.`,
          `Recognising illegitimate burden-shifting is a valuable defence. When someone makes an unsupported claim and then challenges you to disprove it, the correct response is to point out that the burden lies with them to support their claim, not with you to refute it. You are not obliged to disprove every assertion; the default is to withhold belief until evidence is offered. Much bad reasoning, from conspiracy theories to dubious sales pitches, relies on this reversal — asserting something and treating the absence of disproof as vindication. Holding the burden where it belongs cuts through a great deal of it.`,
        ],
      },
      {
        heading: "Proportioning belief to evidence",
        body: [
          `The burden of proof connects to a broader principle: proportioning your confidence to the strength of the evidence. Rather than treating belief as simply on or off, a good reasoner holds beliefs with degrees of confidence that match how well they are supported — strongly believing well-evidenced claims, tentatively entertaining weakly supported ones, and withholding belief where evidence is absent. This is more sophisticated than demanding either certainty or nothing, and it flows naturally from taking the burden of proof seriously.`,
          `The standard of evidence required also varies by context. A criminal court demands proof "beyond reasonable doubt" before convicting, reflecting the gravity of the consequences; a civil case uses the lower "balance of probabilities"; everyday decisions use looser standards still. The appropriate bar depends on the stakes: the more serious the consequences of being wrong, the higher it should be. Understanding the burden of proof thus means grasping not just who must provide evidence, but how much — a judgement that scales with how extraordinary the claim is and how much rides on getting it right.`,
        ],
      },
      {
        heading: "The 'prove me wrong' trap",
        body: [
          `You meet burden-of-proof issues whenever someone makes a claim you doubt. The key questions are: who should be proving this, and is the evidence enough for what is being claimed? Notice the common trap of illegitimate burden-shifting — the person who asserts something and then says "well, you can't prove it's not true", as if your inability to disprove it made it so. That is not how evidence works; the burden is on the one making the claim, and absence of disproof is not proof. Notice, too, how the evidence a claim deserves should scale with how surprising or consequential it is: a friend saying they had toast for breakfast needs no proof, but a startling or high-stakes claim demands real support. Keeping the burden where it belongs, and proportioning your belief to the evidence, is one of the simplest and most powerful tools for thinking clearly and not being talked into things.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is the burden of proof?",
        choices: [
          { id: "a", label: "The duty to back a claim with reasons" },
          { id: "b", label: "The obligation to disprove every claim you hear" },
          { id: "c", label: "The weight of a legal document" },
          { id: "d", label: "The requirement to always agree" },
        ],
        correctChoiceId: "a",
        explanation: "The burden of proof is the obligation to provide evidence for a claim; whoever bears it must actively make the case, while the other party may withhold agreement until convinced.",
      },
      {
        dimension: "depth",
        prompt: "According to the guiding principle, who bears the burden of proof?",
        choices: [
          { id: "a", label: "Whoever asserts must prove it" },
          { id: "b", label: "The person who doubts the claim" },
          { id: "c", label: "Whoever speaks last" },
          { id: "d", label: "Nobody" },
        ],
        correctChoiceId: "a",
        explanation: "The one asserting a claim must support it; it is not the listener's job to disprove it. The default in the absence of evidence is to withhold belief, not to accept a claim until it is refuted.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does placing the burden on the asserter follow from a feature of logic?",
        choices: [
          { id: "a", label: "Can't prove a negative, so anything goes" },
          { id: "b", label: "Because asserters are always right" },
          { id: "c", label: "Because doubters have more evidence" },
          { id: "d", label: "Because negatives are always easy to prove" },
        ],
        correctChoiceId: "a",
        explanation: "One can provide evidence for things that are true but often cannot prove something does not exist; if the burden were on the doubter, anyone could assert invisible dragons and demand acceptance until disproven — impossible — so the asserter must give positive evidence.",
      },
      {
        dimension: "reasoning",
        prompt: "What is illegitimate 'burden-shifting'?",
        choices: [
          { id: "a", label: "Demanding others disprove your claim" },
          { id: "b", label: "Providing strong evidence for your claim" },
          { id: "c", label: "Withholding belief until evidence is offered" },
          { id: "d", label: "Asking a fair question" },
        ],
        correctChoiceId: "a",
        explanation: "'Prove I'm wrong' reverses the burden onto the doubter, an appeal to ignorance — but inability to disprove a claim is not evidence it is true, so the correct response is that the burden lies with the one making the claim.",
      },
      {
        dimension: "depth",
        prompt: "What does 'extraordinary claims require extraordinary evidence' add to the burden of proof?",
        choices: [
          { id: "a", label: "Bigger or stranger claims need stronger evidence" },
          { id: "b", label: "That all claims need identical evidence" },
          { id: "c", label: "That extraordinary claims need no evidence" },
          { id: "d", label: "That evidence is never required" },
        ],
        correctChoiceId: "a",
        explanation: "The evidential bar scales with the claim: a mundane claim needs little support, while a startling or high-stakes one needs a great deal — belief should be proportioned to the strength of the evidence.",
      },
    ],
    sources: [
      { label: "Burden of proof (philosophy) (overview)", note: "Reference on the obligation to support claims and burden-shifting.", type: "Reference", url: "https://en.wikipedia.org/wiki/Burden_of_proof_(philosophy)" },
      { label: "Argument from ignorance (overview)", note: "Reference on the fallacy of treating absence of disproof as proof.", type: "Reference", url: "https://en.wikipedia.org/wiki/Argument_from_ignorance" },
    ],
  },
  {
    concept: "Steelman",
    level: "University",
    summary: "reconstructing the strongest version of an opposing argument",
    estimatedMinutes: 9,
    deck: "The opposite of a straw man is a steelman: instead of attacking the weakest version of an argument you disagree with, you rebuild its strongest version — sometimes stronger than its own advocates managed. It is a discipline that seems to make winning harder, but it is the fastest route to actually being right.",
    keyTerms: [
      { label: "Steelman", value: "The strongest, most charitable reconstruction of an argument you disagree with." },
      { label: "Straw man", value: "The opposite: attacking a weakened, distorted version of an argument." },
      { label: "Principle of charity", value: "Interpreting others' arguments in the strongest, most reasonable way possible." },
      { label: "Intellectual honesty", value: "Engaging with the best case against you rather than the easiest to beat." },
    ],
    sections: [
      {
        heading: "The opposite of a straw man",
        body: [
          `To "steelman" an argument is to construct the strongest, most compelling version of a position you disagree with, before responding to it — the deliberate opposite of the straw man fallacy, which attacks a weakened, distorted version. Where the straw man makes an opponent's view as easy to defeat as possible, the steelman makes it as strong as possible, sometimes strengthening it beyond what its actual advocates have managed. You then engage with this best version rather than the weakest or most poorly expressed form.`,
          `This sounds counterproductive — why make your opponent's case stronger? — but it is one of the most valuable intellectual disciplines there is. Steelmanning is rooted in the philosophical "principle of charity": interpreting others' statements in the most reasonable, strongest way their words allow, rather than seizing on the weakest interpretation. Applied to disagreement, it means engaging with your opponent's argument in its best form, which serves not just fairness but your own understanding and the pursuit of truth.`,
        ],
      },
      {
        heading: "Why strengthen your opponent's case",
        body: [
          `The first reason to steelman is that it is the only way to actually test your own position. If you defeat a weak, distorted version of an opposing view, you have proven nothing about the real view, and may be left with false confidence in a belief that would not survive the strongest counterargument. Only by confronting the best version of the opposing case can you know whether your position genuinely holds up. Steelmanning is a tool for finding out if you are actually right, rather than merely feeling right by beating up caricatures.`,
          `The second reason is that steelmanning is how you learn and improve. Grappling with the strongest form of a view you reject forces you to understand it deeply, exposes the real considerations on the other side, and often reveals genuine merits you had missed or shows your own view needs refinement. You may end up changing or strengthening your position. Someone who only engages with weak versions of opposing arguments learns nothing; someone who steelmans is constantly stress-testing and upgrading their own understanding against the best available challenges.`,
        ],
      },
      {
        heading: "Steelmanning in practice",
        body: [
          `Steelmanning is a discipline with recognisable steps. First, genuinely try to understand the opposing argument as its proponents understand it, setting aside the urge to dismiss it. Then reconstruct it in its strongest form: fix any obvious weaknesses in how it was expressed, supply the most reasonable versions of its premises, and state it as compellingly as you can, as if you were its ablest advocate. A good test is whether a thoughtful proponent would recognise and accept your version as a fair, even flattering, statement of their case. Only then do you engage with it.`,
          `A powerful sign that you have steelmanned well is that you can state the opposing view so accurately and sympathetically that its holders would say "yes, that is exactly what I mean, and you have put it even better than I could." This is captured in the "ideological Turing test": can you articulate the other side's position convincingly enough to pass as one of them? If you cannot state an opposing view in a form its advocates would accept, you probably do not understand it well enough to have earned the right to reject it.`,
        ],
      },
      {
        heading: "The costs, and why they are worth it",
        body: [
          `Steelmanning has real costs that explain why it is rare. It is harder and slower than attacking a straw man, requiring genuine effort to understand and strengthen a view you may find wrong or distasteful. It makes winning arguments harder, because you take on the strongest opposition rather than the weakest. And it requires intellectual courage and humility: the willingness to engage with the possibility that you might be wrong, and to risk having your view weakened or overturned. In a culture of point-scoring and tribal debate, this can feel like unilateral disarmament.`,
          `But these costs are exactly why steelmanning is so valuable, and they buy something worth more than winning arguments: getting closer to the truth. The goal of thinking well is not to defeat opponents but to hold accurate beliefs, and you cannot know whether your beliefs are accurate without testing them against the best opposing case. Steelmanning also improves discourse — engaging charitably with opponents' best arguments makes disagreement more productive, reduces polarisation, and builds the trust that lets people actually change their minds. It trades the cheap satisfaction of easy victories for the deeper reward of thinking clearly and honestly.`,
        ],
      },
      {
        heading: "Arguing to learn, not just to win",
        body: [
          `You can practise steelmanning in any disagreement. Before dismissing a view you oppose — in politics, at work, with friends — try to state it in its strongest form, as its most thoughtful advocates would, and ask whether they would accept your version as fair. Notice the temptation to do the opposite: to attack the silliest version of what "they" think, which feels satisfying but teaches you nothing and convinces no one. When you are certain someone's position is obviously wrong, the steelman test is revealing: if you cannot even state their best case, you have not yet earned your confidence. The deep shift steelmanning brings is from arguing to win toward arguing to learn — engaging with the strongest opposition not to be fair for its own sake, but because it is the only reliable way to find out whether you are actually right.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What does it mean to 'steelman' an argument?",
        choices: [
          { id: "a", label: "Build the strongest version of a view before replying" },
          { id: "b", label: "To attack the weakest version of an opponent's argument" },
          { id: "c", label: "To refuse to engage with opposing views" },
          { id: "d", label: "To agree with everything an opponent says" },
        ],
        correctChoiceId: "a",
        explanation: "Steelmanning builds the strongest version of a view you disagree with — the deliberate opposite of the straw man — engaging with the best form of the argument rather than the weakest, rooted in the principle of charity.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is defeating a straw man version of a view worthless for testing your own position?",
        choices: [
          { id: "a", label: "Beating a weak version proves nothing and misleads" },
          { id: "b", label: "Because straw men are always true" },
          { id: "c", label: "Because it takes too long" },
          { id: "d", label: "Because it engages the strongest argument" },
        ],
        correctChoiceId: "a",
        explanation: "Defeating a caricature proves nothing about the actual position; only by confronting the best version of the opposing case can you know whether your own view genuinely holds up rather than merely feeling right.",
      },
      {
        dimension: "reasoning",
        prompt: "How does steelmanning help you learn and improve your thinking?",
        choices: [
          { id: "a", label: "Facing the strongest view deepens understanding" },
          { id: "b", label: "It confirms you were right all along" },
          { id: "c", label: "It lets you ignore opposing considerations" },
          { id: "d", label: "It has no effect on your understanding" },
        ],
        correctChoiceId: "a",
        explanation: "Engaging the strongest form of a view you reject exposes the real considerations on the other side and can reveal merits you missed or refinements your view needs — so you constantly stress-test and upgrade your understanding.",
      },
      {
        dimension: "depth",
        prompt: "What is a good sign that you have steelmanned a view well?",
        choices: [
          { id: "a", label: "Its advocates would accept your version as fair" },
          { id: "b", label: "Its advocates would be offended by your version" },
          { id: "c", label: "You have made it as weak as possible" },
          { id: "d", label: "You have ignored what they actually argued" },
        ],
        correctChoiceId: "a",
        explanation: "A well-steelmanned view is stated so accurately and sympathetically that its holders would say you put it even better than they could — the 'ideological Turing test' of articulating the other side convincingly enough to pass as one of them.",
      },
      {
        dimension: "reasoning",
        prompt: "Why are steelmanning's real costs ultimately worth paying?",
        choices: [
          { id: "a", label: "The best opposing case tests belief" },
          { id: "b", label: "Because it guarantees you always win arguments" },
          { id: "c", label: "Because it avoids all effort" },
          { id: "d", label: "Because truth does not matter" },
        ],
        correctChoiceId: "a",
        explanation: "Steelmanning is harder and makes winning harder, but it buys getting closer to the truth — you cannot know your beliefs are accurate without testing them against the strongest opposition — and it makes disagreement more productive.",
      },
    ],
    sources: [
      { label: "Principle of charity (overview)", note: "Reference on charitable interpretation and steelmanning.", type: "Reference", url: "https://en.wikipedia.org/wiki/Principle_of_charity" },
      { label: "Straw man and steelman (overview)", note: "Reference on the contrast between distorting and strengthening arguments.", type: "Reference", url: "https://en.wikipedia.org/wiki/Straw_man" },
    ],
  },
  {
    concept: "Narrative Persuasion",
    level: "University",
    summary: "using story structure to make claims memorable and meaningful",
    estimatedMinutes: 9,
    deck: "Give people a table of statistics and they argue; tell them a story and they are transported. Narrative persuasion is the deep power of story to change minds in ways that arguments cannot — by absorbing us, lowering our defences, and making abstract claims vivid, memorable and emotionally real. It is the oldest form of persuasion and, often, the most effective.",
    keyTerms: [
      { label: "Narrative persuasion", value: "Changing beliefs and attitudes through story rather than explicit argument." },
      { label: "Transportation", value: "The state of being absorbed into a story, which lowers resistance to its message." },
      { label: "Reduced counter-arguing", value: "Story bypasses the critical scrutiny we apply to explicit claims." },
      { label: "Concreteness and memorability", value: "Stories make abstract ideas vivid, meaningful and easy to remember." },
    ],
    sections: [
      {
        heading: "The power of story",
        body: [
          `Narrative persuasion is the use of stories to shape beliefs, attitudes and behaviour — persuasion through storytelling rather than explicit argument and evidence. Humans are a storytelling species, and stories have a power over us that dry facts and logical arguments often lack. A well-told story can change minds, shift attitudes and drive action in ways that statistics and reasoned appeals struggle to match.`,
          `The effectiveness of narrative is not merely that stories are pleasant. Research in psychology finds that narratives can be genuinely more persuasive than statistical or argumentative appeals, especially for shifting attitudes and making messages stick — a striking finding given how much we like to think of ourselves as persuaded by evidence and logic. It suggests story taps into something deep in how humans process information and form beliefs, and that whoever tells the story often shapes what people come to believe.`,
        ],
      },
      {
        heading: "Transportation and lowered defences",
        body: [
          `A key mechanism behind narrative persuasion is "transportation" — becoming absorbed in a story, mentally carried into its world, losing awareness of your surroundings and the passage of time. When we are transported into a narrative, something important happens to our critical faculties: we become less likely to scrutinise, question and counter-argue against the story's implicit messages. We are going along with the story, and our usual defences against persuasion are lowered.`,
          `This is why narrative can succeed where direct argument fails. When someone makes an explicit claim, we naturally engage our critical faculties, weigh it, and often generate counterarguments — on guard against being persuaded. But when we are absorbed in a story, we are experiencing rather than arguing, and its messages slip in with far less resistance. A message embedded in an engaging narrative bypasses the scrutiny the same message would face as a bald claim. Transportation lowers the drawbridge that explicit persuasion runs straight into.`,
        ],
      },
      {
        heading: "Concreteness, meaning and identification",
        body: [
          `Stories persuade through several further mechanisms. They make the abstract concrete: a statistic about a problem is forgettable, but a story about a specific person experiencing it is vivid, emotionally engaging and memorable. Narrative gives ideas a human face, connecting to the "identifiable victim" effect by which we care far more about an individual we can picture than about numbers. This concreteness makes narrative messages both more moving and more memorable — stories stick in the mind where arguments fade.`,
          `Stories also work through identification and meaning. We identify with characters, seeing the world through their eyes and vicariously experiencing their journey, which lets a story convey what an experience is actually like and shift how we feel about the people and situations it depicts. And narrative imposes meaning, organising events into a coherent structure with cause and effect, motive and consequence, that helps us understand and remember. A story does not just present information; it makes sense of it, giving it a shape the mind can grasp and hold — a uniquely powerful vehicle for conveying not just facts but understanding, empathy and values.`,
        ],
      },
      {
        heading: "The double-edged power",
        body: [
          `Narrative persuasion's power makes it invaluable and, in the same breath, dangerous. Used well, it is essential to communicating truths that matter: it builds empathy across difference, makes abstract issues emotionally real, conveys understanding bare facts cannot, and motivates action. Great communication in almost every field — teaching, journalism, medicine, leadership — relies on telling the right story. To dismiss narrative as mere entertainment is to miss one of the deepest ways humans come to understand and care about anything.`,
          `But the very features that make narrative persuasive also make it a powerful tool for manipulation. Because story lowers our critical defences, a false or misleading narrative can be more persuasive than a true argument, and a compelling story can implant beliefs that would not survive scrutiny if stated plainly. Propaganda, misinformation and manipulation frequently work through narrative precisely because it bypasses the reasoning we apply to explicit claims. So understanding narrative matters for defence as well as communication: recognising when you are being persuaded by a story rather than by evidence, and asking whether a compelling narrative is actually true, is an important critical skill. The most persuasive story and the most accurate account are not always the same.`,
        ],
      },
      {
        heading: "Why the story stays with you",
        body: [
          `You are moved by narrative persuasion constantly. The charity appeal built around one person's story, the brand that sells itself through a story rather than a spec sheet, the political message wrapped in a compelling tale, the documentary that changes how you feel about an issue — all harness story's power to absorb you and slip past your defences. Notice how a single vivid story affects and stays with you more than pages of statistics, and how, when caught up in a narrative, you argue with it far less than you would with a bald claim. That is exactly why story is so powerful and so worth watching. Use it to communicate what matters and to build empathy; but when a story has swept you along, remember to ask the question the story itself never prompts — is it actually true? The most gripping narrative is not always the most accurate one.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is narrative persuasion?",
        choices: [
          { id: "a", label: "Changing minds through story, not argument" },
          { id: "b", label: "Persuasion using only statistics" },
          { id: "c", label: "Persuasion through the speaker's credentials" },
          { id: "d", label: "Refusing to tell any stories" },
        ],
        correctChoiceId: "a",
        explanation: "Narrative persuasion uses storytelling to shape beliefs and behaviour; research finds stories can be more persuasive than statistical or argumentative appeals, tapping into how humans process information.",
      },
      {
        dimension: "depth",
        prompt: "What is 'transportation' in narrative persuasion?",
        choices: [
          { id: "a", label: "Absorption in a story lowers resistance" },
          { id: "b", label: "The way stories are physically distributed" },
          { id: "c", label: "Moving an audience to a new location" },
          { id: "d", label: "A logical fallacy" },
        ],
        correctChoiceId: "a",
        explanation: "Transportation is becoming mentally carried into a story's world; when transported, we scrutinise and counter-argue less, so our usual defences against persuasion are lowered.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can a story succeed in persuading where a direct argument fails?",
        choices: [
          { id: "a", label: "A claim is scrutinised; a story slips past" },
          { id: "b", label: "Because stories contain no message" },
          { id: "c", label: "Because arguments are always false" },
          { id: "d", label: "Because audiences dislike stories" },
        ],
        correctChoiceId: "a",
        explanation: "A bald claim puts us on guard, evaluating and generating counterarguments; when absorbed in a story we are experiencing rather than arguing, so the message slips in with far less resistance.",
      },
      {
        dimension: "reasoning",
        prompt: "How does narrative connect to the 'identifiable victim' effect?",
        choices: [
          { id: "a", label: "One vivid person moves us where a statistic does not" },
          { id: "b", label: "Statistics move us more than individual stories" },
          { id: "c", label: "Stories cannot feature people" },
          { id: "d", label: "Narrative avoids all emotion" },
        ],
        correctChoiceId: "a",
        explanation: "Narrative makes the abstract concrete, giving ideas a human face; we care far more about an individual we can picture than about numbers, which makes narrative messages both more moving and more memorable.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is narrative persuasion's power 'double-edged'?",
        choices: [
          { id: "a", label: "Lowered defences carry falsehoods too" },
          { id: "b", label: "Because stories can never be false" },
          { id: "c", label: "Because narrative has no effect on belief" },
          { id: "d", label: "Because only statistics can mislead" },
        ],
        correctChoiceId: "a",
        explanation: "Because story bypasses the reasoning we apply to explicit claims, a compelling but false narrative can implant beliefs that would not survive scrutiny — which is why propaganda works through story, and why asking 'is it actually true?' matters.",
      },
    ],
    sources: [
      { label: "Narrative transportation theory (overview)", note: "Reference on transportation and narrative persuasion.", type: "Reference", url: "https://en.wikipedia.org/wiki/Narrative_transportation_theory" },
      { label: "Narrative persuasion (overview)", note: "Reference on how stories shape beliefs and attitudes.", type: "Reference", url: "https://en.wikipedia.org/wiki/Narrative" },
    ],
  },
];

export const rhetoricArgumentationLessons = buildAuthoredLessons(
  "rhetoric-argumentation",
  rhetoricArgumentation,
);
