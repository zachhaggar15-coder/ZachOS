import { buildAuthoredLessons, type AuthoredLesson } from "./types";

// Ten hand-written Science lessons on how science actually works, pitched for a
// reader who already has a science degree: no remedial account of what a
// hypothesis or a control is. Each closes on an everyday example, with quizzes
// whose distractors are plausible and length-matched to the answer.
const science: AuthoredLesson[] = [
  {
    concept: "Bayesian Inference",
    level: "University",
    summary: "updating belief in proportion to evidence, and why the prior is unavoidable",
    estimatedMinutes: 9,
    deck: "Frequentist statistics answers a question almost nobody asks: how surprising is this data if nothing is going on? Bayesian inference answers the one you actually want: given this data, what should I now believe? The price is that you must state a prior — and the deepest objection to Bayes turns out to be its most honest feature.",
    keyTerms: [
      { label: "Prior", value: "The probability assigned to a hypothesis before seeing the new data." },
      { label: "Likelihood", value: "The probability of the observed data under a given hypothesis." },
      { label: "Posterior", value: "The updated probability of the hypothesis after the data, proportional to prior times likelihood." },
      { label: "Base rate neglect", value: "Ignoring the prior, which makes a good test look far more conclusive than it is." },
    ],
    sections: [
      {
        heading: "The question each framework answers",
        body: [
          `The frequentist p-value gives you the probability of data at least as extreme as yours, assuming the null hypothesis is true. Read that carefully: it is a statement about data conditional on a hypothesis. What you almost always want is the reverse — the probability of the hypothesis given your data. Those are different quantities, and the near-universal misreading of p-values as "the probability the result is a fluke" is really an attempt to get the Bayesian answer out of a frequentist tool.`,
          `Bayes' theorem supplies the inversion directly. The posterior probability of a hypothesis is proportional to its prior probability multiplied by the likelihood of the data under it. In words: what you believed before, updated by how well the hypothesis predicted what you saw, relative to how well rivals predicted it. Evidence does not establish belief on its own; it moves belief from wherever it started, and the size of the move depends on how sharply the hypotheses differ in what they predict.`,
        ],
      },
      {
        heading: "Why the base rate dominates",
        body: [
          `The most consequential implication is that a test's accuracy tells you far less than intuition insists, because the prior does most of the work. Take a screening test with 99% sensitivity and 99% specificity for a condition with a prevalence of 1 in 10,000. Among a million people, roughly 100 have it and about 99 test positive; but of the 999,900 without it, about 9,999 also test positive. A positive result therefore corresponds to roughly a 1% chance of actually having the condition — from a test that is right 99% of the time.`,
          `Nothing is wrong with the test. The arithmetic is driven by the base rate: rare conditions generate far more false positives than true ones however good the assay, because the false-positive rate acts on a vastly larger population. This is why screening asymptomatic populations for rare diseases is fraught, why confirmatory testing exists, and why "the test is 99% accurate" is a nearly useless statement without the prevalence. Base rate neglect is not a lay error; it is reliably demonstrated in clinicians reasoning about their own specialties.`,
        ],
      },
      {
        heading: "The prior objection, and the honest answer",
        body: [
          `The standard objection is that priors are subjective, so Bayesian conclusions are contaminated by whatever the analyst chose to believe. The objection has force but proves less than it appears. First, the prior is doing work whether or not you write it down: a frequentist analysis that treats a homeopathy trial and a well-mechanised pharmacology trial identically is implicitly assigning them the same prior, which is itself a strong and questionable choice. Bayes makes the assumption explicit and therefore criticisable.`,
          `Second, priors wash out under sufficient evidence. Two analysts starting from different reasonable priors converge as data accumulate, because the likelihood ratio compounds. Where they do not converge, that is genuine information: it means the data are too weak to overcome the disagreement, which is worth knowing rather than papering over. Sensitivity analysis across a range of defensible priors is the standard discipline. The real objection to a Bayesian analysis is never "you used a prior" but "your prior was indefensible, and here is why".`,
        ],
      },
      {
        heading: "Extraordinary claims, formalised",
        body: [
          `Bayes turns Sagan's slogan into arithmetic. "Extraordinary claims require extraordinary evidence" states that a low prior demands a high likelihood ratio to reach a respectable posterior — and how high is calculable rather than rhetorical. When the 2011 OPERA experiment appeared to show neutrinos exceeding light speed, physicists did not dispute the measurement's competence; they reasoned that the prior against violating special relativity, supported by a century of corroboration, was so low that a single anomalous timing result could not shift it. That reasoning was vindicated when a loose fibre-optic connector turned out to be responsible.`,
          `This also explains why replication carries the weight it does. Independent replications multiply likelihood ratios, so evidence compounds far faster across studies than within one. A single study with a striking result and a low prior barely moves the posterior; three independent replications move it enormously. The framework thereby recovers, as a formal consequence, the working scientist's instinct that one surprising paper is a curiosity and a replicated finding is knowledge.`,
        ],
      },
      {
        heading: "The positive test that means almost nothing",
        body: [
          `The practical payoff is a defence against a specific and common error. When a screening result comes back positive, or an app flags something, or a security check triggers, the instinct is to read the test's accuracy as the probability you have the thing. It is not, and if the base rate is low it is not remotely close. The question to ask is always: how common is this in the population being tested? A 99%-accurate test for something affecting one in ten thousand delivers roughly ninety-nine false alarms for every real case. That is not a broken test; it is what a good test does against a low base rate, and knowing it converts a frightening result into a reason for a confirmatory one.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "reasoning",
        prompt: "Why is reading a p-value as 'the probability the result is a fluke' a category error?",
        choices: [
          { id: "a", label: "It is the probability of the data given the hypothesis, not of the hypothesis given the data" },
          { id: "b", label: "It is a measure of effect size rather than a probability of any kind about the result" },
          { id: "c", label: "It describes the long-run error rate of the laboratory rather than of the individual experiment" },
          { id: "d", label: "It is undefined unless the sample was drawn from a perfectly normally distributed population" },
        ],
        correctChoiceId: "a",
        explanation: "The p-value conditions on the null being true and asks how extreme the data are. The intuitive reading inverts the conditional — which is precisely the quantity Bayes' theorem supplies and the frequentist tool does not.",
      },
      {
        dimension: "reasoning",
        prompt: "A test is 99% sensitive and 99% specific for a condition affecting 1 in 10,000. Roughly what does a positive mean?",
        choices: [
          { id: "a", label: "About a 1% chance of having it, because false positives vastly outnumber true ones at that prevalence" },
          { id: "b", label: "About a 99% chance of having it, since the test's accuracy directly gives the probability of disease" },
          { id: "c", label: "About a 50% chance, because sensitivity and specificity offset each other symmetrically at any base rate" },
          { id: "d", label: "The probability cannot be estimated without knowing the size of the population being screened" },
        ],
        correctChoiceId: "a",
        explanation: "Per million: ~100 have it and ~99 test positive; ~9,999 of the healthy also test positive. The base rate dominates because the false-positive rate acts on a vastly larger group — nothing is wrong with the test.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the strongest response to the objection that priors are subjective?",
        choices: [
          { id: "a", label: "The prior operates whether stated or not, so writing it down makes it criticisable rather than hidden" },
          { id: "b", label: "Priors can always be derived objectively from the physical properties of the system under study" },
          { id: "c", label: "Modern Bayesian software selects priors automatically, removing analyst discretion from the process" },
          { id: "d", label: "The objection is conceded, which is why Bayesian methods are confined to decision theory" },
        ],
        correctChoiceId: "a",
        explanation: "Treating a homeopathy trial and a mechanistically grounded trial identically is itself a strong prior, just an unstated one. Bayes makes the assumption explicit; priors also wash out under sufficient evidence, and sensitivity analysis is standard.",
      },
      {
        dimension: "reasoning",
        prompt: "Why did physicists doubt the OPERA faster-than-light neutrino result before any error was found?",
        choices: [
          { id: "a", label: "The prior against violating relativity was so low that one anomalous timing could not shift the posterior" },
          { id: "b", label: "The measurement fell below the five-sigma threshold conventionally required in particle physics" },
          { id: "c", label: "The collaboration had a documented history of timing errors in its previous published results" },
          { id: "d", label: "Faster-than-light travel is logically incoherent, so no experimental result could ever support it" },
        ],
        correctChoiceId: "a",
        explanation: "Nobody disputed the team's competence. A century of corroboration made the prior extremely low, so the required likelihood ratio was enormous — the formal content of 'extraordinary claims require extraordinary evidence'. A loose connector was the cause.",
      },
      {
        dimension: "depth",
        prompt: "Why does evidence compound faster across independent replications than within a single study?",
        choices: [
          { id: "a", label: "Independent likelihood ratios multiply, so several replications move the posterior far more than one study can" },
          { id: "b", label: "Replications use larger samples, so their individual p-values are necessarily smaller" },
          { id: "c", label: "Repetition raises the prior for the hypothesis before each subsequent study is conducted" },
          { id: "d", label: "Independent studies eliminate measurement error entirely once three or more agree" },
        ],
        correctChoiceId: "a",
        explanation: "Multiplying independent likelihood ratios compounds evidence rapidly, which is why one surprising paper against a low prior barely moves belief while three independent replications move it enormously — recovering the working scientist's instinct formally.",
      },
    ],
    sources: [
      { label: "Bayes' theorem (overview)", note: "Reference on priors, likelihoods, posteriors and base rates.", type: "Reference", url: "https://en.wikipedia.org/wiki/Bayes%27_theorem" },
      { label: "Base rate fallacy (overview)", note: "Reference on why accurate tests mislead against low prevalence.", type: "Reference", url: "https://en.wikipedia.org/wiki/Base_rate_fallacy" },
    ],
  },
  {
    concept: "Falsifiability",
    level: "A-level",
    summary: "whether a claim could be shown wrong by possible evidence",
    estimatedMinutes: 8,
    deck: "What separates science from pseudoscience? The philosopher Karl Popper had a bold answer: a claim is scientific only if it could, in principle, be proven wrong. A theory that explains every possible outcome, that no evidence could ever contradict, is not unbeatable — it is empty.",
    keyTerms: [
      { label: "Falsifiability", value: "The property of a claim that some possible observation could show it to be false." },
      { label: "Popper", value: "Karl Popper, who proposed falsifiability as the mark of genuine science." },
      { label: "The demarcation problem", value: "The question of how to distinguish science from non-science." },
      { label: "Unfalsifiable claim", value: "A claim compatible with every possible outcome, so no evidence could refute it." },
    ],
    sections: [
      {
        heading: "The mark of science",
        body: [
          `Falsifiability is the idea that a scientific claim must be capable, in principle, of being proven false by some possible observation. Karl Popper proposed it as the criterion distinguishing genuine science from pseudoscience — his answer to the "demarcation problem" of where to draw the line. For Popper, the hallmark of a scientific theory is not that it can be confirmed but that it sticks its neck out: it forbids certain outcomes, so that if those outcomes occurred, the theory would be refuted.`,
          `This turns a common intuition on its head. We tend to think a good theory explains a lot and fits all the evidence. Popper argued that a theory fitting absolutely everything, which no conceivable observation could contradict, is weak, not strong, because it risks nothing and forbids nothing. The more a theory forbids, the more it exposes itself to refutation and the more informative it is — a theory compatible with every possible state of affairs tells you nothing about which one actually obtains.`,
        ],
      },
      {
        heading: "Bold predictions and risky tests",
        body: [
          `Popper's favourite example was Einstein's general relativity, which made a bold, risky prediction: that starlight would be bent by the sun's gravity by a specific amount, observable during a solar eclipse. Had the light not bent as predicted, the theory would have been in serious trouble. When observations in 1919 matched the prediction, it was a striking success precisely because the theory had risked being wrong and survived a genuine test.`,
          `Popper contrasted this with theories he regarded as pseudoscientific, which could explain any outcome after the fact. If any result whatsoever can be read as confirming a theory, it is not really being tested, and its apparent explanatory power is illusory. The strength of a scientific theory lies in the risks it takes — the specific, checkable predictions that could turn out false. Confirmations are easy and cheap; it is surviving serious attempts at refutation that gives a theory its credibility.`,
        ],
      },
      {
        heading: "Spotting the unfalsifiable",
        body: [
          `The practical value of falsifiability is as a tool for spotting empty claims dressed up as knowledge. The key question to ask of any claim is: what possible evidence would show this to be false? If the honest answer is "nothing" — if the claim fits every conceivable outcome — then it is unfalsifiable, and however true it sounds, it is not making a genuine, testable claim about the world. Such claims are not necessarily false; they are simply outside the reach of scientific testing, and cannot claim scientific support.`,
          `The tell-tale sign of an unfalsifiable position is that its holder can explain away any counter-evidence, so no result would ever change their mind. A prediction so vague it fits any outcome, a claim rescued by ever-shifting excuses whenever it fails, or a belief for which no evidence could count against it — all are unfalsifiable. "What would convince you that you are wrong?" is a powerful test: a scientific claim can answer it; someone who admits no evidence could change their mind has stepped outside the domain of testable knowledge.`,
        ],
      },
      {
        heading: "The limits of a good idea",
        body: [
          `Falsifiability is enormously useful but not the last word, and later philosophers qualified Popper's picture. In real science a single failed prediction rarely refutes a theory outright, because any test depends on many background assumptions; scientists reasonably attribute a failure to a faulty assumption, a measurement error, or an auxiliary hypothesis rather than the core theory. Established theories are not discarded the moment one prediction fails — they are revised, and abandoned only when problems accumulate and a better alternative emerges.`,
          `There are also genuinely scientific claims hard to falsify directly, and pseudosciences that make some falsifiable claims, so falsifiability is a valuable guide rather than a perfect dividing line. Yet the core insight endures: a claim's scientific worth depends on its openness to being tested and potentially refuted, and a belief immune to all possible evidence is not a triumphant certainty but an empty one. Even where it does not settle every case, the demand "what would show this to be wrong?" is a superb filter for distinguishing real knowledge from its imitations.`,
        ],
      },
      {
        heading: "What would change your mind?",
        body: [
          `Falsifiability gives you a razor-sharp everyday question: for any strong claim, what evidence would show it to be false? A useful, testable belief can answer; an empty or pseudoscientific one cannot. When a horoscope, a conspiracy theory, or a "system" for beating the market can explain away every outcome — success proves it, failure is blamed on an excuse, no result counts against it — you are looking at an unfalsifiable claim wearing the costume of knowledge. Notice, too, when you yourself hold a belief that no possible evidence could shake, and ask whether that certainty is earned or merely immune to testing. "What would change your mind?" is one of the most clarifying questions you can ask of anyone, including yourself — and a belief with no answer is not stronger for it, but emptier.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What did Popper propose as the mark of a genuinely scientific theory?",
        choices: [
          { id: "a", label: "That it forbids certain outcomes and so could be refuted by a possible observation" },
          { id: "b", label: "That it accommodates the widest possible range of observed phenomena within one framework" },
          { id: "c", label: "That it has been confirmed by repeated independent observation under controlled conditions" },
          { id: "d", label: "That it can be expressed mathematically and generates quantitative rather than qualitative claims" },
        ],
        correctChoiceId: "a",
        explanation: "For Popper the hallmark is risk, not confirmation: a scientific theory sticks its neck out by forbidding outcomes, so that if those outcomes occurred it would be refuted. Accommodating everything is the mark of emptiness.",
      },
      {
        dimension: "reasoning",
        prompt: "Why did Popper regard a theory that fits every possible observation as weak?",
        choices: [
          { id: "a", label: "It forbids nothing, so it tells you nothing about which state of affairs actually obtains" },
          { id: "b", label: "It requires more auxiliary assumptions than a theory making narrow predictions" },
          { id: "c", label: "It cannot be expressed with sufficient precision to permit quantitative testing" },
          { id: "d", label: "It will eventually be contradicted once enough observations have accumulated" },
        ],
        correctChoiceId: "a",
        explanation: "A theory compatible with every conceivable outcome risks nothing and forbids nothing, so its apparent explanatory power is illusory. The more a theory forbids, the more informative it is and the more it exposes itself to refutation.",
      },
      {
        dimension: "reasoning",
        prompt: "Why was the 1919 eclipse observation such a strong test of general relativity?",
        choices: [
          { id: "a", label: "The theory predicted a specific deflection that could easily have failed, and it survived" },
          { id: "b", label: "The observation was made independently by several teams using identical instruments" },
          { id: "c", label: "It was the first prediction relativity had made that Newtonian mechanics could also explain" },
          { id: "d", label: "The result was consistent with every prevailing theory of gravitation at the time" },
        ],
        correctChoiceId: "a",
        explanation: "Relativity forbade outcomes: had starlight not bent by the predicted amount, the theory was in serious trouble. Surviving a test it could have failed is what makes a confirmation meaningful, since confirmations as such are cheap.",
      },
      {
        dimension: "depth",
        prompt: "What is the tell-tale sign of an unfalsifiable position?",
        choices: [
          { id: "a", label: "Its holder can explain away any counter-evidence, so no result would change their mind" },
          { id: "b", label: "Its predictions are quantitative but consistently smaller than measurement precision allows" },
          { id: "c", label: "It has survived every attempt at refutation that has so far been mounted against it" },
          { id: "d", label: "It is held by a minority of researchers working outside mainstream institutions" },
        ],
        correctChoiceId: "a",
        explanation: "Vagueness that fits any outcome, ever-shifting rescues when predictions fail, and an inability to name evidence that would count against the claim all mark unfalsifiability — which 'what would convince you that you are wrong?' exposes.",
      },
      {
        dimension: "reasoning",
        prompt: "What qualification do later philosophers add to Popper's account?",
        choices: [
          { id: "a", label: "Tests rely on background assumptions, so a failure may be blamed on those rather than the core theory" },
          { id: "b", label: "Falsification is impossible in principle because no observation is ever fully theory-neutral" },
          { id: "c", label: "Scientific theories should in fact be retained regardless of how many predictions fail" },
          { id: "d", label: "Demarcation is unnecessary because pseudoscience makes no testable claims whatsoever" },
        ],
        correctChoiceId: "a",
        explanation: "Because any test depends on auxiliary assumptions and instrumentation, a failure can reasonably be attributed to those rather than the theory. Established theories are revised, not discarded on one failure — so falsifiability guides rather than mechanically decides.",
      },
    ],
    sources: [
      { label: "Karl Popper (SEP)", note: "Stanford Encyclopedia entry on Popper and falsifiability.", type: "Reference", url: "https://plato.stanford.edu/entries/popper/" },
      { label: "Falsifiability (overview)", note: "Reference on the demarcation problem and testability.", type: "Reference", url: "https://en.wikipedia.org/wiki/Falsifiability" },
    ],
  },
  {
    concept: "The Duhem–Quine Thesis",
    level: "University",
    summary: "why no hypothesis can ever be tested in isolation",
    estimatedMinutes: 9,
    deck: "Popper's picture assumes a failed prediction refutes the theory. Duhem and Quine showed it cannot, because you never test a hypothesis alone — you test it bundled with instruments, background theory and auxiliary assumptions. When the bundle fails, logic alone cannot tell you which strand broke, and that gap is where scientific judgement actually lives.",
    keyTerms: [
      { label: "Holism", value: "The claim that hypotheses face evidence only in bundles with auxiliary assumptions, never alone." },
      { label: "Auxiliary hypothesis", value: "A background assumption a test depends on — instrument behaviour, purity, absence of confounds." },
      { label: "Underdetermination", value: "The situation where evidence cannot uniquely determine which of several theories to accept." },
      { label: "Ad hoc rescue", value: "Saving a theory by an adjustment with no independent support or testable consequence." },
    ],
    sections: [
      {
        heading: "The bundle, not the hypothesis",
        body: [
          `Pierre Duhem, a physicist and historian of science, observed that a physicist testing a hypothesis never tests it alone. The prediction follows from the hypothesis *plus* a great deal else: the theory of how the instrument works, the assumption that the sample is what it is labelled, the belief that no uncontrolled factor is operating, the mathematics used to derive the prediction. When the observation disagrees, strict logic tells you only that *something in the conjunction* is false. It does not tell you what.`,
          `W. V. O. Quine radicalised this into a claim about knowledge generally: our beliefs face the tribunal of experience not individually but as a corporate body, and any statement can be held true come what may if we make drastic enough adjustments elsewhere. Whether or not one accepts Quine's strong version, the working version is inescapable and every experimentalist knows it in their bones: a failed result is ambiguous between "the hypothesis is wrong" and "something about my setup is wrong", and no rule of logic resolves the ambiguity.`,
        ],
      },
      {
        heading: "Why this is not scepticism",
        body: [
          `The thesis is often misread as an argument that theories cannot be tested, or that scientists just believe what they like. It shows nothing of the kind. It shows that refutation is not mechanical — that deciding which strand of the bundle to abandon requires judgement rather than deduction. That judgement is disciplined, not arbitrary: it appeals to which assumptions have independent support, which adjustment would create new problems elsewhere, and which candidate has itself been tested separately.`,
          `The history is full of cases where blaming the auxiliaries was exactly right. Anomalies in Uranus's orbit contradicted Newtonian predictions; rather than abandoning Newton, astronomers posited an unseen planet perturbing it, and Neptune was duly found where the calculation said. The same move applied to Mercury's perihelion — a hypothetical planet Vulcan — and failed, and there the core theory really was at fault, as general relativity later showed. The identical logical move was brilliant once and wrong once. Only judgement, later vindicated or not, distinguished them at the time.`,
        ],
      },
      {
        heading: "The line between rescue and ad hoc rescue",
        body: [
          `If blaming auxiliaries is always available, what stops a theory being immunised against all evidence? This is Popper's real worry, and his answer is the right one: the question is not whether you adjust but whether the adjustment is independently testable. Neptune was a legitimate rescue because it made a new, risky, checkable prediction — a planet of a specific mass at a specific place, which could be looked for and found or not found. It exposed itself to refutation and paid off.`,
          `An ad hoc rescue does the opposite: it saves the theory while forbidding nothing new. "The effect disappears when a sceptic is present" rescues a claim about psychic powers at the cost of making it untestable, since it generates no independent check. The distinction is not always crisp at the time — Vulcan was a legitimate hypothesis that happened to be false, not an ad hoc rescue — but it is the operative one. A rescue that generates new testable consequences is science doing its job; a rescue that only absorbs the anomaly is the theory retreating from contact with evidence.`,
        ],
      },
      {
        heading: "Underdetermination and what breaks the tie",
        body: [
          `The broader consequence is underdetermination: for any body of evidence there are, in principle, multiple theories consistent with it, so evidence alone cannot uniquely select one. Some philosophers push this hard, arguing that theory choice must therefore rest on social factors. The more defensible reading is narrower. The rival theories that are genuinely consistent with all the evidence are usually not sitting there waiting — constructing even one is extraordinarily hard — and the ones that can be constructed are typically gerrymandered, forbidding nothing new.`,
          `So the tie is broken by criteria beyond bare consistency with data: fruitfulness in generating new predictions, unification of previously separate phenomena, absence of arbitrary adjustments, and independent support for the auxiliaries. These are epistemic virtues rather than logical entailments, which is exactly the point. Science is not a deductive machine that grinds out truth from data; it is a disciplined practice of judgement under permanent logical underdetermination — which is why it needs expertise, community and criticism rather than merely a method.`,
        ],
      },
      {
        heading: "When your experiment fails and you check the machine",
        body: [
          `Anyone who has worked at a bench knows this thesis without the name. Your result contradicts the hypothesis, and your first move is not to abandon the hypothesis — it is to check whether the reagent was old, the instrument drifted, the control was contaminated, the calculation slipped. That instinct is Duhem–Quine, and it is correct. But it also carries the trap the thesis identifies: the same move that rescues a good hypothesis from a bad reagent can protect a bad hypothesis indefinitely, one plausible excuse at a time. The discipline is to ask whether your rescue makes a new checkable prediction — go and test the reagent — or merely absorbs the anomaly and forbids nothing. The first is science; the second is how people talk themselves into results that will not replicate.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What does the Duhem–Quine thesis establish about a failed prediction?",
        choices: [
          { id: "a", label: "Logic shows only that something in the conjunction is false, not which element it is" },
          { id: "b", label: "The hypothesis under test has been refuted unless a measurement error can be demonstrated" },
          { id: "c", label: "The auxiliary assumptions are more likely at fault than the hypothesis being tested" },
          { id: "d", label: "The experiment must be repeated before any inference about the theory is permissible" },
        ],
        correctChoiceId: "a",
        explanation: "A prediction follows from the hypothesis plus instrument theory, sample assumptions and mathematics. Disagreement condemns the bundle, and no rule of logic identifies which strand broke — that requires judgement.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is the thesis not an argument that theories cannot be tested?",
        choices: [
          { id: "a", label: "It shows refutation requires disciplined judgement rather than deduction, not that evidence is powerless" },
          { id: "b", label: "It applies only to theories in physics, where auxiliary assumptions are unusually numerous" },
          { id: "c", label: "It concerns the logic of confirmation rather than the logic of refutation" },
          { id: "d", label: "It was refuted once Popper demonstrated that risky predictions are genuinely possible" },
        ],
        correctChoiceId: "a",
        explanation: "Deciding which strand to abandon appeals to independent support, knock-on problems and separately tested candidates. The judgement is disciplined rather than arbitrary — it simply is not mechanical deduction.",
      },
      {
        dimension: "reasoning",
        prompt: "Why are Neptune and Vulcan such an instructive pair?",
        choices: [
          { id: "a", label: "The identical logical move — blame an unseen planet — was brilliant once and wrong once" },
          { id: "b", label: "Both were eventually observed, confirming that auxiliary rescues are generally reliable" },
          { id: "c", label: "Neptune vindicated Newton whereas Vulcan vindicated relativity, so both theories survived" },
          { id: "d", label: "Both cases show that core theories should never be abandoned on orbital evidence alone" },
        ],
        correctChoiceId: "a",
        explanation: "Uranus's anomaly was rescued by positing Neptune, which was found. Mercury's was rescued by positing Vulcan, which was not — there the core theory really was at fault. Only judgement, later vindicated or not, separated them at the time.",
      },
      {
        dimension: "reasoning",
        prompt: "What distinguishes a legitimate rescue from an ad hoc one?",
        choices: [
          { id: "a", label: "Whether the adjustment generates a new, independently testable prediction of its own" },
          { id: "b", label: "Whether the adjustment was proposed before rather than after the anomalous result appeared" },
          { id: "c", label: "Whether the adjustment preserves the mathematical form of the original theory" },
          { id: "d", label: "Whether the adjustment is accepted by a majority of researchers in the field" },
        ],
        correctChoiceId: "a",
        explanation: "Neptune forbade things: a planet of a given mass in a given place, which could be looked for. 'The effect vanishes when a sceptic watches' forbids nothing. Vulcan shows a legitimate rescue can still be false — the test is testability, not truth.",
      },
      {
        dimension: "depth",
        prompt: "What breaks the tie when evidence underdetermines theory choice?",
        choices: [
          { id: "a", label: "Epistemic virtues — fruitfulness, unification, independently supported auxiliaries, absence of gerrymandering" },
          { id: "b", label: "Strict logical entailment from the accumulated observational record" },
          { id: "c", label: "Priority of publication, since the earliest adequate theory is conventionally retained" },
          { id: "d", label: "Nothing does; theory choice at that point is a purely social negotiation" },
        ],
        correctChoiceId: "a",
        explanation: "Rival theories consistent with all evidence are rarely available and usually gerrymandered. The tie is broken by virtues beyond bare consistency — which is why science needs expertise, community and criticism rather than merely a method.",
      },
    ],
    sources: [
      { label: "Underdetermination of Scientific Theory (SEP)", note: "Stanford Encyclopedia entry on Duhem, Quine and holism.", type: "Reference", url: "https://plato.stanford.edu/entries/scientific-underdetermination/" },
      { label: "Duhem–Quine thesis (overview)", note: "Reference on confirmation holism and auxiliary hypotheses.", type: "Reference", url: "https://en.wikipedia.org/wiki/Duhem%E2%80%93Quine_thesis" },
    ],
  },
  {
    concept: "Correlation and Causation",
    level: "A-level",
    summary: "association versus one factor producing another",
    estimatedMinutes: 8,
    deck: "Ice cream sales and drownings rise together, but ice cream does not cause drowning — hot weather drives both. 'Correlation does not imply causation' is the most quoted line in statistics, and the most ignored. Understanding why two things moving together need not mean one causes the other is a defence against being misled every single day.",
    keyTerms: [
      { label: "Correlation", value: "A statistical association: two things tend to vary together." },
      { label: "Causation", value: "One factor actually producing a change in another." },
      { label: "Confounder", value: "A third factor causing both correlated things, creating a spurious link." },
      { label: "Reverse causation", value: "When the effect is mistaken for the cause and the direction is backwards." },
    ],
    sections: [
      {
        heading: "Moving together is not causing",
        body: [
          `A correlation exists when two things tend to vary together: when one goes up, the other tends to go up (or down) as well. Causation is when one actually produces a change in the other. The most important and most violated principle in interpreting data is that correlation does not imply causation — an association does not establish that one thing causes the other. This sounds obvious, yet the temptation to leap from "these go together" to "this causes that" is constant and is the source of an enormous amount of faulty reasoning.`,
          `The reason is that an association can arise in several ways, only one of which is a direct causal link. Recognising the alternatives is the key skill. When you see a correlation and are tempted to conclude A causes B, the disciplined response is to ask what else could produce this pattern — because in many cases something other than "A causes B" is going on, and mistaking correlation for causation leads to conclusions that are not just wrong but actively misleading.`,
        ],
      },
      {
        heading: "The confounder",
        body: [
          `The most common reason two things correlate without one causing the other is a "confounder": a third factor that causes both, linking them even though neither causes the other. The classic case is that ice cream sales and drowning deaths rise and fall together across the year. Ice cream does not cause drowning, nor drowning ice cream — the confounder is hot weather, which independently drives both more ice cream buying and more swimming (hence more drownings). The correlation is real but the causal link between them is spurious.`,
          `Confounders are everywhere and endlessly deceptive. Countless reported associations — between a habit and an outcome, a trait and a result — turn out to be driven by a confounding third factor. People who drink red wine may be healthier, but wealth, diet and lifestyle may explain both the wine-drinking and the health. Whenever you meet a correlation presented as a cause, the first question is: could a plausible third factor be driving both? Very often there is one, and identifying it dissolves the apparent causal link entirely.`,
        ],
      },
      {
        heading: "Which way, and pure chance",
        body: [
          `A second alternative to "A causes B" is "reverse causation": the arrow points backwards, and it is B causing A. If a study finds that stress correlates with poor health, it is tempting to conclude stress damages health — but poor health may cause stress, or the relationship may run both ways. Correlation is symmetric while causation has a direction, so correlation alone cannot tell you which is cause and which effect, and getting the direction wrong can lead to exactly the wrong intervention.`,
          `A third possibility is pure coincidence. With enough variables measured, some will correlate by chance alone, with no causal or confounding relationship. There are famous "spurious correlations" — between a place's divorce rate and its consumption of a particular food, or between numbers that happen to track over time — that are utterly meaningless, arising simply because among countless pairings, some coincide. So a correlation, especially a surprising one dredged from lots of data, may be nothing but a fluke and needs far more than co-movement to count as evidence of a real relationship.`,
        ],
      },
      {
        heading: "Establishing real causation",
        body: [
          `If correlation cannot establish causation, what can? The strongest tool is the controlled experiment: deliberately changing the suspected cause while holding other factors constant and randomising, so confounders and reverse causation are ruled out and any resulting change can be attributed to the manipulated factor. This is why randomised controlled trials are so valued. When experiments are impossible — you cannot ethically assign people to smoke — scientists build a causal case another way: consistency across many studies, a dose-response relationship, a plausible mechanism, statistically ruling out confounders, and the cause preceding the effect.`,
          `The practical upshot is a healthy scepticism toward causal claims based on correlation alone, which are the staple of misleading headlines. "People who do X have better Y" is almost always a correlation, and the implication that X causes Y is usually unwarranted without an experiment or a carefully built case. Learning to notice the leap from correlation to causation, and to ask whether confounding, reverse causation or coincidence might explain the association instead, is one of the most useful and protective habits of thought there is.`,
        ],
      },
      {
        heading: "The headlines that fool you",
        body: [
          `You are fed correlation-as-causation constantly, especially in health and lifestyle headlines: "people who drink coffee live longer", "children who eat breakfast do better at school". Almost all are correlations, and the implied causation is usually unproven — coffee drinkers or breakfast-eaters may differ in wealth, habits and health in ways that explain the outcome (confounders), or the causation may run backwards. The reflex worth building is to meet every "A is linked to B" with three questions: could a third factor cause both? could the arrow point the other way? could it be coincidence? Very often one of these, not "A causes B", is the real story. This single habit — refusing to leap from correlation to causation without more evidence — protects you from a startling proportion of the misleading claims you will encounter.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "reasoning",
        prompt: "Why does the ice cream and drowning correlation not indicate a causal link?",
        choices: [
          { id: "a", label: "Hot weather independently drives both ice cream buying and swimming, so the link is spurious" },
          { id: "b", label: "The correlation disappears once the data are aggregated across a full calendar year" },
          { id: "c", label: "The association is too weak to reach conventional thresholds for statistical significance" },
          { id: "d", label: "Drowning deaths are too rare for any correlation with them to be reliably estimated" },
        ],
        correctChoiceId: "a",
        explanation: "The confounder is temperature, causing both. The correlation is entirely real and statistically robust — what is absent is any causal path between the two variables themselves.",
      },
      {
        dimension: "depth",
        prompt: "What is 'reverse causation'?",
        choices: [
          { id: "a", label: "The causal arrow runs the opposite way — the presumed effect is in fact the cause" },
          { id: "b", label: "A third variable produces both of the correlated quantities independently" },
          { id: "c", label: "An association that arises purely by chance among many measured variables" },
          { id: "d", label: "A relationship that reverses direction as the sample size increases" },
        ],
        correctChoiceId: "a",
        explanation: "If stress correlates with poor health, poor health may cause stress rather than the reverse. Correlation is symmetric while causation has direction, so the data alone cannot say which — and getting it wrong inverts the intervention.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can a surprising correlation mined from a large dataset be meaningless?",
        choices: [
          { id: "a", label: "Among countless possible pairings some coincide by chance, with no causal or confounding link" },
          { id: "b", label: "Large datasets systematically overstate the magnitude of every association they contain" },
          { id: "c", label: "Surprising results indicate measurement error, since real effects are rarely counterintuitive" },
          { id: "d", label: "Correlations computed on large samples are mathematically less reliable than on small ones" },
        ],
        correctChoiceId: "a",
        explanation: "With enough variables, some will track each other by chance alone — the famous spurious correlations. Co-movement dredged from many comparisons needs far more than itself to count as evidence of a real relationship.",
      },
      {
        dimension: "reasoning",
        prompt: "What makes a randomised controlled experiment the strongest tool for establishing causation?",
        choices: [
          { id: "a", label: "Manipulating the suspected cause while randomising rules out confounding and reverse causation" },
          { id: "b", label: "It produces larger effect sizes than observational designs studying the same question" },
          { id: "c", label: "It removes the need to specify a mechanism linking the intervention to the outcome" },
          { id: "d", label: "It guarantees the finding will generalise to populations outside the study sample" },
        ],
        correctChoiceId: "a",
        explanation: "Deliberate manipulation plus randomisation means the groups differ only in the intervention, so any resulting change is attributable to it. Notably it does not guarantee generalisation — that is a separate question.",
      },
      {
        dimension: "reasoning",
        prompt: "When experiments are impossible, how is a causal case built instead?",
        choices: [
          { id: "a", label: "Consistency across studies, dose-response, a plausible mechanism, and the cause preceding the effect" },
          { id: "b", label: "By collecting a sufficiently large observational sample that confounding averages out" },
          { id: "c", label: "By demonstrating the correlation persists across several different statistical models" },
          { id: "d", label: "By establishing that no alternative explanation has yet been proposed in the literature" },
        ],
        correctChoiceId: "a",
        explanation: "Where randomisation is unethical — you cannot assign people to smoke — the case is assembled from converging strands: replication, dose-response, mechanism, temporal order, and statistical control of known confounders.",
      },
    ],
    sources: [
      { label: "Correlation does not imply causation (overview)", note: "Reference on confounders, reverse causation and spurious correlation.", type: "Reference", url: "https://en.wikipedia.org/wiki/Correlation_does_not_imply_causation" },
      { label: "Understanding Science (UC Berkeley)", note: "How science distinguishes association from cause.", type: "Reference", url: "https://undsci.berkeley.edu/" },
    ],
  },
  {
    concept: "Publication Bias and Meta-analysis",
    level: "University",
    summary: "why the published literature is a biased sample of the research conducted",
    estimatedMinutes: 9,
    deck: "The literature is not a record of what was studied; it is a record of what got published, which is a very different thing. If null results are less likely to appear, then the visible evidence systematically overstates every effect — and a meta-analysis that pools it faithfully will reproduce the bias with a narrower confidence interval.",
    keyTerms: [
      { label: "Publication bias", value: "The systematic difference between studies conducted and studies published, usually favouring positive results." },
      { label: "Funnel plot asymmetry", value: "A visual diagnostic where missing small negative studies skew the plot's base." },
      { label: "Garbage in, gospel out", value: "The way meta-analysis lends spurious authority to a biased body of evidence." },
      { label: "Registered reports", value: "Peer review of the protocol before results exist, with publication guaranteed regardless of outcome." },
    ],
    sections: [
      {
        heading: "The censored sample",
        body: [
          `Every meta-analysis rests on an assumption that is usually false: that the studies you can find are a representative sample of the studies that were run. They are not. A trial with a striking positive result gets written up, submitted, accepted and cited; an equally rigorous trial finding nothing gets abandoned mid-write-up, rejected as uninteresting, or filed away. The mechanism is not fraud — it is the aggregate of thousands of individually reasonable decisions by authors, reviewers and editors who all find positive findings more interesting.`,
          `The consequence is that the literature is a censored sample, censored precisely on the variable of interest. This is the file-drawer problem, and it means the published effect for any given intervention is biased upward, sometimes enormously. The scale is documented rather than theoretical: comparisons of registered trials against published ones repeatedly find that a substantial fraction of completed studies never appear, and that the unpublished ones are disproportionately null. Turkey's antidepressant analysis of FDA-registered trials is a canonical example — the published record looked dramatically more favourable than the registered record from which it was drawn.`,
        ],
      },
      {
        heading: "Why meta-analysis can make it worse",
        body: [
          `Meta-analysis is rightly regarded as the top of the evidence hierarchy, and it is genuinely powerful: pooling studies increases precision and can resolve inconsistencies that individual trials cannot. But precision is not accuracy, and this is where it becomes dangerous. If the input studies are biased upward by selective publication, pooling them does not cancel the bias — it estimates the biased mean with a tighter confidence interval. The output looks more authoritative than any individual study while being wrong in exactly the same direction.`,
          `This is the "garbage in, gospel out" problem, and it is worse than the individual-study version because a meta-analysis carries institutional weight. It informs guidelines and gets cited as settled. A biased literature summarised rigorously produces a confidently wrong number, and the rigour of the summary is no protection whatsoever against bias in what was summarised. The methodological quality of a meta-analysis and the trustworthiness of its conclusion are far more independent than the evidence hierarchy suggests.`,
        ],
      },
      {
        heading: "Detecting what is not there",
        body: [
          `Since the missing studies cannot be observed, their absence must be inferred, and the main tool is the funnel plot: effect size against precision. Under no bias, small imprecise studies scatter widely and symmetrically around the true effect, and large precise ones cluster near it, producing a symmetric inverted funnel. If small negative studies are missing, the base becomes asymmetric — a visible hole where they should be. Egger's regression tests this asymmetry formally.`,
          `The diagnostics are useful and genuinely limited. Asymmetry has other causes: small studies may differ systematically in quality or population, producing real heterogeneity that mimics bias. The tests are underpowered when studies are few, which is exactly when bias matters most. And p-curve and related methods, which examine the distribution of significant p-values for the left-skew a real effect produces, address a related but distinct problem — selective analysis rather than selective publication. Every method infers a hole from the shape of what remains, which is inherently weaker than seeing what is missing.`,
        ],
      },
      {
        heading: "Fixing the pipeline rather than the analysis",
        body: [
          `Because detection is weak, the serious response is structural: stop censoring the literature in the first place. Mandatory trial registration before enrolment, with results reporting required regardless of outcome, means the existence of a study is known even if its results are never written up — so a systematic reviewer can see the hole directly rather than inferring it. Enforcement remains patchy, and audits of registry compliance repeatedly find substantial non-reporting, but the architecture is right.`,
          `Registered reports go further by attacking the incentive itself. The protocol is peer-reviewed before the data exist, and acceptance is granted on the strength of the question and the method; the paper is published whatever the result. This decouples publication from outcome entirely, which removes the author's incentive to find something and the editor's to prefer novelty. Early evidence is striking: the proportion of null results in registered reports is dramatically higher than in conventional publications in the same fields — which tells you, rather bleakly, what the conventional literature has been filtering out all along.`,
        ],
      },
      {
        heading: "Why the effect always shrinks",
        body: [
          `This explains a pattern you will have watched play out repeatedly: an intervention arrives with a large, well-evidenced effect, and over the following decade the effect shrinks with each better-conducted study until it is modest or absent. The usual reading is that science self-corrected, which is half right. The deeper point is that the initial effect was never real at that size — it was the visible tip of a censored distribution, and subsequent work sampled the distribution more honestly. The practical habit is to treat any effect resting on a body of small positive studies as an upper bound rather than an estimate, and to ask the question the literature cannot answer for you: how many studies like these were run and never published?`,
        ],
      },
    ],
    questions: [
      {
        dimension: "reasoning",
        prompt: "Why is publication bias not primarily a problem of fraud?",
        choices: [
          { id: "a", label: "It aggregates from reasonable decisions by authors, reviewers and editors who find positive results more interesting" },
          { id: "b", label: "Fraud is detected by peer review, whereas publication bias operates after a paper is accepted" },
          { id: "c", label: "It arises from statistical artefacts in how effect sizes are computed rather than from conduct" },
          { id: "d", label: "It affects only industry-funded research, where commercial incentives distort reporting" },
        ],
        correctChoiceId: "a",
        explanation: "Nobody need act dishonestly. Authors abandon dull write-ups, reviewers find nulls uninteresting, editors prefer novelty — and the aggregate of individually defensible choices censors the literature on the variable of interest.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can meta-analysis make publication bias more dangerous rather than less?",
        choices: [
          { id: "a", label: "Pooling biased studies estimates the biased mean more precisely, lending authority to a wrong number" },
          { id: "b", label: "Combining studies with different populations introduces heterogeneity that inflates the effect" },
          { id: "c", label: "Meta-analytic methods weight small studies more heavily than large ones by construction" },
          { id: "d", label: "The pooling process discards the individual study data needed to detect the bias" },
        ],
        correctChoiceId: "a",
        explanation: "Precision is not accuracy. Pooling does not cancel a bias shared by the inputs; it estimates the biased mean with a tighter interval, and the institutional weight of a meta-analysis makes that confidently wrong number harder to dislodge.",
      },
      {
        dimension: "depth",
        prompt: "What does asymmetry at the base of a funnel plot suggest?",
        choices: [
          { id: "a", label: "Small studies with null or negative results are missing from the literature" },
          { id: "b", label: "The pooled effect estimate has been calculated using an inappropriate statistical model" },
          { id: "c", label: "The included studies measured the outcome using incompatible instruments" },
          { id: "d", label: "The true effect size varies systematically with the year of publication" },
        ],
        correctChoiceId: "a",
        explanation: "Without bias, small imprecise studies scatter symmetrically and large ones cluster near the true effect. A hole at one side of the base is where the unpublished small negative studies should be — which Egger's regression tests formally.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the principal limitation of funnel-plot diagnostics?",
        choices: [
          { id: "a", label: "Asymmetry has other causes, and the tests are weakest when studies are few — exactly when bias matters most" },
          { id: "b", label: "They require access to the raw participant data, which is rarely available to reviewers" },
          { id: "c", label: "They can only be applied to randomised trials and not to observational studies" },
          { id: "d", label: "They detect selective analysis but are insensitive to selective publication" },
        ],
        correctChoiceId: "a",
        explanation: "Small studies may genuinely differ in quality or population, producing real heterogeneity that mimics bias, and power is poor with few studies. Every method infers a hole from the shape of what remains — inherently weaker than seeing what is absent.",
      },
      {
        dimension: "reasoning",
        prompt: "Why do registered reports attack publication bias at its root?",
        choices: [
          { id: "a", label: "Acceptance is granted on the protocol before results exist, decoupling publication from outcome" },
          { id: "b", label: "They require authors to publish every study they begin, including abandoned ones" },
          { id: "c", label: "They mandate larger samples, so null results become statistically informative" },
          { id: "d", label: "They replace peer review with automated statistical screening of the analysis" },
        ],
        correctChoiceId: "a",
        explanation: "Reviewing the question and method before the data exist, and guaranteeing publication whatever the result, removes the author's incentive to find something and the editor's to prefer novelty — and null rates in registered reports are dramatically higher.",
      },
    ],
    sources: [
      { label: "Publication bias (overview)", note: "Reference on the file-drawer problem, funnel plots and Egger's test.", type: "Reference", url: "https://en.wikipedia.org/wiki/Publication_bias" },
      { label: "Registered reports (Center for Open Science)", note: "The format reviewing protocols before results exist.", type: "Reference", url: "https://www.cos.io/initiatives/registered-reports" },
    ],
  },
  {
    concept: "Replication",
    level: "A-level",
    summary: "whether findings hold when repeated independently",
    estimatedMinutes: 8,
    deck: "A result that happens once might be real, might be a fluke, or might be a mistake. Only when other scientists repeat a study and get the same result does a finding earn real trust. Replication is the deep test of scientific reliability — and the discovery that many published findings do not replicate has shaken several fields.",
    keyTerms: [
      { label: "Replication", value: "Independently repeating a study to see whether the same result is obtained." },
      { label: "Independent repetition", value: "Different researchers reproducing a finding, ruling out flukes and quirks." },
      { label: "The replication crisis", value: "The finding that a large share of published results fail to replicate." },
      { label: "Self-correction", value: "Science's capacity to identify and discard unreliable findings over time." },
    ],
    sections: [
      {
        heading: "Why once is not enough",
        body: [
          `Replication is independently repeating a study to see whether the same result is obtained. It is fundamental because a single study, however careful, is never enough to establish a finding as reliable. Any individual result might be a fluke — a chance outcome that happened to appear this time — or the product of an error, a bias, or some peculiarity of that specific experiment. The way to tell whether a finding is real and general is to see whether it holds up when the study is repeated.`,
          `The power of replication comes from independence. When different researchers, in different labs, using their own materials and participants, repeat a study and get the same result, it becomes much harder to attribute the finding to chance or to a quirk of one team's setup. A result that reliably reappears across independent replications is far more trustworthy than one seen only once, because the alternative explanations — luck, error, local peculiarity — grow less plausible each time it reappears. Replication is how science converts a promising single result into an established finding.`,
        ],
      },
      {
        heading: "The replication crisis",
        body: [
          `In recent years science has confronted an uncomfortable discovery: a surprisingly large proportion of published findings, in several fields, fail to replicate. When researchers systematically tried to repeat many published studies — notably in psychology, but also in medicine, economics and elsewhere — a substantial fraction did not produce the same results. This "replication crisis" revealed that the literature contained many findings less solid than their publication implied, and prompted serious reflection on how science is done.`,
          `The causes are instructive. Some non-replication is the expected result of chance and honest error. But much stems from systematic problems: the pressure to publish novel, exciting, "positive" results; "publication bias", in which studies finding an effect get published while those finding nothing are quietly filed away, distorting the apparent evidence; small samples that make flukes more likely; and questionable practices, sometimes called "p-hacking", in which data are analysed many ways until a publishable result appears. These practices produce impressive-looking findings that are, in reality, unreliable — which is exactly why they fail to replicate.`,
        ],
      },
      {
        heading: "Science correcting itself",
        body: [
          `It is important to see the replication crisis not only as a scandal but as science working. That the crisis was discovered at all — scientists systematically testing whether findings replicated, and honestly reporting that many did not — is an example of science's capacity for self-correction. Replication is the mechanism by which unreliable findings are eventually identified and discarded, however impressive they looked. A field that takes it seriously will, over time, weed out its false findings, even if the process is uncomfortable and slow.`,
          `The crisis has driven genuine reforms: pre-registering studies (publicly committing to the hypothesis and analysis plan before collecting data, to prevent p-hacking), sharing data openly, running larger studies, and valuing and publishing replication attempts and negative results rather than only novel positive ones. These address the incentives that produced the problem. The episode reminds us that science is a human enterprise, subject to error and bad incentives, but that its commitment to replication gives it the means to find and fix its own mistakes — a self-correcting quality that distinguishes it from belief systems with no such mechanism.`,
        ],
      },
      {
        heading: "What it means for trusting findings",
        body: [
          `The lesson for gauging how much to trust a claim is clear: a single study is weak evidence, and independently replicated findings are far more trustworthy than fresh, unreplicated ones. This is especially true for surprising, counterintuitive or exciting single results, which attract attention precisely because they are novel but are disproportionately likely to be flukes that later fail to replicate. The most eye-catching new finding is often the least reliable, because striking one-off results are exactly what chance and bias tend to produce.`,
          `This does not mean distrusting all science, but calibrating confidence. Well-established knowledge rests not on single studies but on findings replicated many times and confirmed by multiple lines of evidence, and such knowledge is very reliable. New single findings are provisional and should be held loosely until reproduced. Understanding replication protects against two opposite errors: dismissing robust, replicated science as "just another study", and treating every fresh, unreplicated headline as established fact. The right question about a striking new result is not just "was it published?" but "has anyone else reproduced it?"`,
        ],
      },
      {
        heading: "Why one dramatic study should not convince you",
        body: [
          `Replication reshapes how you should read science news. When a single dramatic study makes headlines — a food that prevents disease, a simple trick that boosts intelligence, a surprising effect of some behaviour — the appropriate response is not immediate belief but "let's see if it replicates". Many such findings, especially the most surprising, quietly fail to reproduce and are never heard of again, even as the original headline lingers in memory. The most reliable scientific knowledge is the unglamorous kind confirmed by many independent studies over years, not the exciting one-off result. Building the habit of asking whether a finding has been independently replicated — and holding single studies loosely until it has — is one of the best defences against being misled by science that is real-sounding but not yet reliable.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "reasoning",
        prompt: "Why does the force of replication depend on independence?",
        choices: [
          { id: "a", label: "Different labs with their own materials rule out luck and one team's local quirks as explanations" },
          { id: "b", label: "Independent teams are more likely to use larger samples than the original investigators" },
          { id: "c", label: "Only researchers unconnected to the original study are permitted to publish replications" },
          { id: "d", label: "Independence guarantees the replication will use an identical protocol to the original" },
        ],
        correctChoiceId: "a",
        explanation: "When separate teams with separate materials and participants get the same result, chance, error and local peculiarity all become implausible explanations — which is why independent reappearance converts a promising result into an established one.",
      },
      {
        dimension: "depth",
        prompt: "What did systematic replication efforts reveal about the published literature?",
        choices: [
          { id: "a", label: "A substantial fraction of published findings, across several fields, did not reproduce" },
          { id: "b", label: "Published findings reproduced reliably except where outright fraud was involved" },
          { id: "c", label: "Reproduction rates were high in psychology but poor in medicine and economics" },
          { id: "d", label: "Failures to reproduce were almost entirely attributable to differences in sample size" },
        ],
        correctChoiceId: "a",
        explanation: "Efforts to repeat many published studies — notably in psychology, but also medicine and economics — found a substantial fraction did not produce the same results, revealing a literature less solid than publication implied.",
      },
      {
        dimension: "reasoning",
        prompt: "How does p-hacking generate findings that later fail to replicate?",
        choices: [
          { id: "a", label: "Analysing data many ways until something crosses the threshold finds noise, which will not recur" },
          { id: "b", label: "It inflates sample sizes artificially, producing significance where no effect is present" },
          { id: "c", label: "It substitutes Bayesian for frequentist analysis without declaring the change of framework" },
          { id: "d", label: "It relies on measurement instruments that drift systematically across the study period" },
        ],
        correctChoiceId: "a",
        explanation: "Trying different measures, exclusions and comparisons until a result passes p < 0.05 will almost always find something by chance. That something is noise, so the next honest attempt to reproduce it finds nothing.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is the replication crisis also evidence of science working?",
        choices: [
          { id: "a", label: "It was discovered by scientists testing their own field's findings and reporting the failures honestly" },
          { id: "b", label: "It demonstrated that the affected fields had been using invalid statistical methods throughout" },
          { id: "c", label: "It showed that peer review reliably catches unreliable findings before publication" },
          { id: "d", label: "It confirmed that non-replication is confined to a small number of fraudulent laboratories" },
        ],
        correctChoiceId: "a",
        explanation: "The crisis surfaced because researchers systematically tested whether findings replicated and published the uncomfortable answer. Replication is the mechanism that identifies and discards unreliable findings, however impressive they looked.",
      },
      {
        dimension: "reasoning",
        prompt: "Why are the most eye-catching new findings often the least reliable?",
        choices: [
          { id: "a", label: "Striking one-off results are exactly what chance and bias tend to produce" },
          { id: "b", label: "Novel findings are typically produced by less experienced research teams" },
          { id: "c", label: "Journals apply less rigorous review to results they consider newsworthy" },
          { id: "d", label: "Surprising effects are usually measured with less precise instrumentation" },
        ],
        correctChoiceId: "a",
        explanation: "Counterintuitive results attract attention precisely because they are novel, but flukes and bias generate exactly that profile — which is why a surprising single study is a starting point rather than a conclusion.",
      },
    ],
    sources: [
      { label: "Replication crisis (overview)", note: "Reference on replication, its failures and reforms.", type: "Reference", url: "https://en.wikipedia.org/wiki/Replication_crisis" },
      { label: "Reproducibility (overview)", note: "Reference on independent replication and reliability.", type: "Reference", url: "https://en.wikipedia.org/wiki/Reproducibility" },
    ],
  },
  {
    concept: "Statistical Significance",
    level: "University",
    summary: "whether an observed result is unlikely under a null model",
    estimatedMinutes: 9,
    deck: "'Statistically significant' sounds like it means 'important' or 'proven', but it means something far narrower and often misunderstood: that a result would be unlikely if nothing were really going on. Grasping what statistical significance actually says — and the many things it does not — is essential to reading evidence without being fooled.",
    keyTerms: [
      { label: "Statistical significance", value: "A result unlikely to have arisen by chance alone under a 'null' assumption of no real effect." },
      { label: "Null hypothesis", value: "The default assumption that there is no real effect or difference." },
      { label: "P-value", value: "The probability of a result at least this extreme if the null hypothesis were true." },
      { label: "Significance vs importance", value: "A significant result may be tiny; significance is not the same as real-world importance." },
    ],
    sections: [
      {
        heading: "What 'significant' actually means",
        body: [
          `In statistics, "significant" does not mean "important" or "large" or "proven" — it has a specific technical meaning that is widely misunderstood. A result is statistically significant if it would be unlikely to have arisen by chance alone, assuming there were no real effect. The idea rests on the "null hypothesis": the default, sceptical assumption that there is no genuine effect or difference — the treatment does nothing, the groups are really the same. Statistical significance asks how surprising the observed data would be if that null hypothesis were true.`,
          `The tool for this is the "p-value": the probability of getting a result at least as extreme as the one observed, if the null hypothesis were true. A small p-value means the data would be unlikely under the null, which is taken as evidence against it — suggesting something real may be going on. By convention, many fields use a threshold of p less than 0.05 (a 1-in-20 probability) to declare a result "statistically significant": if the p-value falls below it, the result is deemed unlikely enough under chance to be worth taking seriously.`,
        ],
      },
      {
        heading: "The pervasive misinterpretations",
        body: [
          `The p-value is one of the most misinterpreted concepts in science. Crucially, it is NOT the probability that the hypothesis is true, nor the probability the result is due to chance, nor the probability you are wrong. It is the probability of the data (or more extreme data) assuming the null hypothesis is true. A p-value of 0.05 does not mean a 95% chance the effect is real; it means that if there were no effect, data this extreme would occur only 5% of the time. These are genuinely different statements, and conflating them leads to serious errors.`,
          `Equally important, significance says nothing about the size or importance of an effect. A statistically significant result can be tiny and practically meaningless, especially with a very large sample, where even a trivial effect can achieve significance. Conversely, a real and important effect can fail to reach significance in a small study. "Statistically significant" and "important" are different questions — the first about whether an effect is distinguishable from chance, the second about whether it matters. A headline trumpeting a "significant" finding may be describing an effect far too small to care about.`,
        ],
      },
      {
        heading: "The trouble with the threshold",
        body: [
          `The 0.05 threshold, while useful, causes real problems. Treating it as a magic line — p = 0.049 "significant" and celebrated, p = 0.051 "non-significant" and dismissed — is arbitrary and misleading, since these two results are almost identical in what they show. The threshold encourages a false binary where the evidence is really a continuum, and it creates a powerful incentive to get results under the line, which distorts research.`,
          `This incentive drives "p-hacking": consciously or unconsciously analysing data many ways — trying different measures, excluding certain participants, testing many comparisons — until a p-value below 0.05 emerges, then reporting it as a single planned test. Because data can be sliced so many ways, a "significant" result can almost always be found by chance if you look hard enough, and such results are often flukes that will not replicate — a major contributor to the replication crisis. The threshold, combined with the pressure to publish significant findings, can manufacture impressive-looking but unreliable results, which is why the whole framework is under serious scrutiny.`,
        ],
      },
      {
        heading: "Reading significance wisely",
        body: [
          `Understanding significance properly means holding several cautions together. A significant result is a signal that an effect may be real rather than chance — genuinely useful information — but it is not proof, it says nothing about the effect's size or importance, and a single significant result can easily be a fluke, especially given p-hacking and publication bias. Confidence should come not from one significant p-value but from the size of the effect, the quality of the study, and above all whether the finding replicates.`,
          `Statisticians increasingly urge looking beyond significance to other measures: the effect size (how big the effect actually is), confidence intervals (the range of plausible values, conveying uncertainty better than a yes/no verdict), and the broader body of evidence. The mature stance treats significance as one limited piece of information, not a verdict of truth or importance. Knowing what it does and does not mean — that "significant" means "unlikely under chance", not "true", "large" or "important" — is essential to reading claims without being misled by a word that sounds far more authoritative than it is.`,
        ],
      },
      {
        heading: "Why 'statistically significant' shouldn't impress you on its own",
        body: [
          `You will meet "statistically significant" constantly in news and advertising, wielded as if it settled everything. Knowing what it really means lets you read past the impressive phrase. It does not mean the finding is proven, important, or large — only that the result would be unlikely if nothing were going on. So the useful follow-up questions are: how big is the effect (a significant result can be trivially small), how large and well-designed was the study, and has it replicated? A "significant" effect from one small study, especially a surprising one, may be a fluke that vanishes on repetition. Understanding statistical significance is a genuine defence against a specific manipulation: being persuaded by a technical-sounding word that means far less, and far more narrowly, than it appears to.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What does a p-value of 0.05 actually state?",
        choices: [
          { id: "a", label: "If no effect existed, data this extreme or more would arise about 5% of the time" },
          { id: "b", label: "There is a 95% probability that the hypothesis under test is in fact true" },
          { id: "c", label: "There is a 5% probability that the observed result was produced by chance" },
          { id: "d", label: "The measured effect is large enough to be of practical importance in 95% of cases" },
        ],
        correctChoiceId: "a",
        explanation: "The p-value conditions on the null being true and asks how extreme the data are. It is not the probability the hypothesis is true, nor that the result is chance — the two most common and consequential misreadings.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can a statistically significant result be practically meaningless?",
        choices: [
          { id: "a", label: "With a large enough sample, even a trivially small effect will cross the threshold" },
          { id: "b", label: "Significance testing systematically underestimates the magnitude of real effects" },
          { id: "c", label: "Significant results are usually obtained from samples too small to be representative" },
          { id: "d", label: "The threshold is calibrated for physical sciences and is too lenient elsewhere" },
        ],
        correctChoiceId: "a",
        explanation: "Significance asks whether an effect is distinguishable from chance; importance asks whether it matters. Sufficient sample size makes even a negligible difference detectable, so the word alone should not impress.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is treating p = 0.049 and p = 0.051 as categorically different misleading?",
        choices: [
          { id: "a", label: "The evidence is a continuum, and the two results say almost exactly the same thing" },
          { id: "b", label: "Both values fall within the margin of error of any conventional statistical test" },
          { id: "c", label: "The 0.05 threshold applies only to one-tailed tests and neither result qualifies" },
          { id: "d", label: "P-values below 0.10 should all be reported as significant under current guidance" },
        ],
        correctChoiceId: "a",
        explanation: "The threshold imposes a false binary on continuous evidence. Two nearly identical results land on opposite sides of a line, with one celebrated and one dismissed — and the incentive to cross it distorts research.",
      },
      {
        dimension: "depth",
        prompt: "What is p-hacking?",
        choices: [
          { id: "a", label: "Analysing data many ways until something passes the threshold, then reporting it as planned" },
          { id: "b", label: "Deliberately fabricating data values so that the analysis reaches significance" },
          { id: "c", label: "Selecting a statistical test after inspecting the distribution of the outcome variable" },
          { id: "d", label: "Combining several underpowered studies to reach a significant pooled estimate" },
        ],
        correctChoiceId: "a",
        explanation: "Because data can be sliced many ways — different measures, exclusions, comparisons — something will almost always cross p < 0.05 by chance. Reporting that as a single planned test manufactures a fluke that will not replicate.",
      },
      {
        dimension: "reasoning",
        prompt: "What should confidence in a finding rest on beyond a significant p-value?",
        choices: [
          { id: "a", label: "Effect size, confidence intervals, study quality and whether the result replicates" },
          { id: "b", label: "Whether the p-value falls substantially below the conventional 0.05 threshold" },
          { id: "c", label: "Whether the finding was published in a journal with a high impact factor" },
          { id: "d", label: "Whether the result is consistent with the prevailing theory in the field" },
        ],
        correctChoiceId: "a",
        explanation: "A single significant result can be a fluke, especially given p-hacking and publication bias. Statisticians urge effect size, intervals conveying uncertainty, study quality and replication — treating significance as one limited input.",
      },
    ],
    sources: [
      { label: "Statistical significance (overview)", note: "Reference on significance, p-values and their misinterpretation.", type: "Reference", url: "https://en.wikipedia.org/wiki/Statistical_significance" },
      { label: "Misuse of p-values (overview)", note: "Reference on p-value misinterpretation and p-hacking.", type: "Reference", url: "https://en.wikipedia.org/wiki/Misuse_of_p-values" },
    ],
  },
  {
    concept: "Scientific Models",
    level: "A-level",
    summary: "simplified representations used to explain and predict",
    estimatedMinutes: 8,
    deck: "Science does not capture reality whole; it builds simplified representations of it. A scientific model deliberately leaves things out in order to make a complex world understandable and predictable. As the statistician George Box put it, 'all models are wrong, but some are useful' — a phrase that unlocks how science actually works.",
    keyTerms: [
      { label: "Scientific model", value: "A simplified representation of reality used to explain and predict." },
      { label: "Simplification", value: "Deliberately leaving out detail to make a system understandable and tractable." },
      { label: "'All models are wrong'", value: "Box's dictum: every model is a simplification, so none is perfectly true." },
      { label: "Usefulness over truth", value: "Models are judged by how well they explain and predict, not by being perfect." },
    ],
    sections: [
      {
        heading: "Maps, not the territory",
        body: [
          `A scientific model is a simplified representation of some part of reality, built to help us understand, explain and predict it. Models take many forms — physical models, diagrams, equations, computer simulations, conceptual frameworks — but share a defining feature: they are deliberate simplifications. The world is too complex to grasp in full, so science builds models that capture the features mattering for a purpose while leaving out the rest. A model is to reality somewhat as a map is to the territory: useful precisely because it is not a perfect, full-scale copy but a selective guide.`,
          `The map analogy is illuminating. A map reproducing every detail at full size would be useless; a good map is valuable because it strips away most detail and shows only what you need — roads, distances, directions. Its usefulness comes from its simplification. Models work the same way: by simplifying, they make a bewildering reality tractable, letting us reason about it, calculate consequences and make predictions. The art of modelling is deciding what to include and what to leave out, so the model is simple enough to use yet still captures what matters for the question at hand.`,
        ],
      },
      {
        heading: "All models are wrong",
        body: [
          `This leads to one of the most liberating ideas about models, in George Box's dictum: "all models are wrong, but some are useful." Because every model is a simplification that leaves things out, none is perfectly, literally true — every model is "wrong" in the strict sense of not capturing reality completely. This is not a criticism but an understanding of their nature: models are not meant to be perfect mirrors of reality; they are tools, and demanding perfect truth misunderstands what they are for.`,
          `The crucial second half — "but some are useful" — is where the value lies. The right question about a model is not "is it true?" (none is perfectly true) but "is it useful for this purpose?" A model is good if it explains and predicts well enough for what we need, even as a simplification. Newton's model of gravity is "wrong" in being superseded by Einstein's more accurate account, yet remains enormously useful and is still used to navigate spacecraft, because for most purposes it predicts beautifully. Judging models by usefulness rather than perfect truth is central to how science actually operates.`,
        ],
      },
      {
        heading: "Knowing a model's limits",
        body: [
          `Because every model simplifies, every model has a domain where it works well and limits beyond which it breaks down. Its simplifications are assumptions, and when those assumptions do not hold, the model becomes unreliable. Newton's physics works superbly for everyday objects but fails at very high speeds or cosmic scales, where relativity is needed; a simple economic model may work under normal conditions but fail in a crisis it did not account for. Using a model well means knowing not just what it captures but where it stops applying.`,
          `This is why a dangerous error is to forget that a model is a simplification and mistake it for reality — to treat the map as the territory. When people take a model's outputs as literal truth without regard to its assumptions and limits, they can be badly misled, especially when the model is pushed beyond the conditions it was built for; financial models trusted beyond their valid range have contributed to real disasters. Disciplined use requires constant awareness that models are simplified tools with boundaries, holding their conclusions provisionally and staying alert to signs that reality is departing from the model's assumptions.`,
        ],
      },
      {
        heading: "Why models are indispensable anyway",
        body: [
          `Despite being simplifications that are never perfectly true and always have limits, models are indispensable, because they are how we make a complex world comprehensible and predictable. Without simplification we could not reason about complicated systems at all; the choice is not between a model and perfect knowledge, but between a useful simplification and being overwhelmed by complexity. Models let us test our understanding (does the model predict what we observe?), explore scenarios, and make predictions we otherwise could not. Much of scientific progress consists of building better models — more accurate, more broadly applicable, or capturing more of what matters.`,
          `Understanding models also clarifies how science advances and how to read its predictions. When a model's predictions fail, it signals the model needs improvement, driving science toward better models. And when we meet scientific predictions — about climate, epidemics, the economy — knowing they come from models helps us interpret them correctly: as outputs of simplified representations, valuable and often the best guide we have, but carrying uncertainty and depending on assumptions, rather than certain prophecies. Models are among the most powerful tools humans have devised for understanding reality, precisely because they trade perfect fidelity for usable insight.`,
        ],
      },
      {
        heading: "The maps you already trust",
        body: [
          `You rely on models and their simplifications all the time. A weather forecast is the output of a model — a simplified simulation of the atmosphere — which is why it is useful but uncertain, and why it degrades further into the future as small simplifications compound. A map, a diagram, a budget spreadsheet, even a mental rule of thumb are all simplified models you use because they are handy, not because they capture everything. The key habits transfer directly: judge a model by whether it is useful for your purpose, not by whether it is perfectly true; stay aware of the assumptions it makes and where they stop holding; and never mistake the map for the territory. When a forecast or projection fails, remember it was always a simplified model of a complex reality — useful, but never the whole truth.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "reasoning",
        prompt: "What does Box's 'all models are wrong, but some are useful' actually assert?",
        choices: [
          { id: "a", label: "Since every model omits detail, the right test is fitness for purpose rather than truth" },
          { id: "b", label: "Models should be discarded once their predictions are found to deviate from observation" },
          { id: "c", label: "A model becomes correct once enough of the omitted detail has been reincorporated" },
          { id: "d", label: "Simpler models are always preferable to complex ones regardless of the application" },
        ],
        correctChoiceId: "a",
        explanation: "Every model is a simplification, so none is literally true. They are tools, and demanding perfect truth misunderstands what they are for — the operative question is whether it explains and predicts well enough for the need at hand.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does Newton's superseded model of gravity remain valuable?",
        choices: [
          { id: "a", label: "It predicts extremely well for most purposes and is still used to navigate spacecraft" },
          { id: "b", label: "It is mathematically equivalent to relativity under all physically realisable conditions" },
          { id: "c", label: "It remains the only model simple enough to be computed without specialist software" },
          { id: "d", label: "Relativity has never been experimentally confirmed at the scales Newton describes" },
        ],
        correctChoiceId: "a",
        explanation: "Newton's model is 'wrong' in being superseded, yet within its domain it predicts beautifully — the clearest demonstration that usefulness for a purpose, not literal truth, is how models are properly judged.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does every model have a domain beyond which it fails?",
        choices: [
          { id: "a", label: "Its simplifications are assumptions, and it becomes unreliable where they cease to hold" },
          { id: "b", label: "Accumulated rounding error eventually dominates any extended computation" },
          { id: "c", label: "Models are calibrated to historical data and cannot address novel conditions" },
          { id: "d", label: "The complexity of reality grows faster than any model can be extended" },
        ],
        correctChoiceId: "a",
        explanation: "Newton's physics holds for everyday objects and fails near light speed; an economic model may hold in normal conditions and fail in a crisis it never encoded. Using a model well means knowing where its assumptions stop applying.",
      },
      {
        dimension: "depth",
        prompt: "What is the error of 'mistaking the map for the territory'?",
        choices: [
          { id: "a", label: "Treating a model's outputs as literal reality without regard to its assumptions and limits" },
          { id: "b", label: "Choosing a model whose level of abstraction is too coarse for the question asked" },
          { id: "c", label: "Comparing two models that were built for entirely different purposes" },
          { id: "d", label: "Refusing to use any model on the grounds that all are simplifications" },
        ],
        correctChoiceId: "a",
        explanation: "Forgetting a model is a simplification, especially when pushing it beyond the conditions it was built for, badly misleads — financial models trusted outside their valid range have contributed to real disasters.",
      },
      {
        dimension: "reasoning",
        prompt: "How should knowing a prediction comes from a model change how you read it?",
        choices: [
          { id: "a", label: "As a useful but uncertain output resting on assumptions, not as a certain prophecy" },
          { id: "b", label: "As unreliable, since models are by definition wrong about the system they describe" },
          { id: "c", label: "As authoritative, because computational models remove human judgement from forecasting" },
          { id: "d", label: "As provisional only until the model has been validated against a further dataset" },
        ],
        correctChoiceId: "a",
        explanation: "Predictions about climate, epidemics or the economy are outputs of simplified representations — often the best guide available, but carrying uncertainty and depending on assumptions that may or may not hold.",
      },
    ],
    sources: [
      { label: "Scientific modelling (overview)", note: "Reference on models as simplified representations.", type: "Reference", url: "https://en.wikipedia.org/wiki/Scientific_modelling" },
      { label: "All models are wrong (overview)", note: "Reference on George Box's aphorism and its meaning.", type: "Reference", url: "https://en.wikipedia.org/wiki/All_models_are_wrong" },
    ],
  },
  {
    concept: "Levels of Selection",
    level: "University",
    summary: "what natural selection actually acts on, and why altruism is the test case",
    estimatedMinutes: 9,
    deck: "Selection needs something that varies, replicates, and whose variation affects replication — but genes, individuals, groups and even species can all satisfy that description. Deciding which level selection really operates on is not a technicality: it determines whether altruism is a puzzle, an illusion, or exactly what the theory predicts.",
    keyTerms: [
      { label: "Levels of selection", value: "The question of which entities — genes, individuals, groups — selection actually acts upon." },
      { label: "Inclusive fitness", value: "Hamilton's measure counting an allele's effect on relatives' reproduction, weighted by relatedness." },
      { label: "Hamilton's rule", value: "Altruism spreads when relatedness times benefit exceeds cost: rb > c." },
      { label: "Gene's-eye view", value: "Treating the gene as the unit of selection because only it persists across generations." },
    ],
    sections: [
      {
        heading: "The altruism problem",
        body: [
          `Darwin's mechanism looks like it should make self-sacrifice impossible. An organism that reduces its own reproduction to benefit another is, by definition, leaving fewer descendants than a selfish rival, so the trait should vanish. Yet sterile worker castes exist in ants and bees, ground squirrels give alarm calls that draw predators to themselves, and cells in a body forgo reproduction entirely to build a soma that will die. Darwin recognised social insects as a potentially fatal difficulty for his theory, and he was right to.`,
          `The naive resolution — the behaviour benefits the species — is the one to resist, because it does not survive contact with the mechanism. Selection has no foresight and no concern for the species; it compares replicators within a population. A "for the good of the species" trait is invadable by definition: a mutant that takes the benefit without paying the cost out-reproduces the altruists and spreads. So group-benefit explanations are not merely unfashionable, they are structurally unstable unless something prevents the cheat from winning.`,
        ],
      },
      {
        heading: "Hamilton's inversion",
        body: [
          `W. D. Hamilton's resolution in 1964 was to change what fitness counts. If a gene's success is measured by copies in the next generation, it does not matter whose body those copies sit in. A gene causing you to help your brother is helping copies of itself, because your brother carries them with probability one-half. Inclusive fitness counts an allele's effect on the reproduction of relatives, discounted by relatedness — and altruism stops being an anomaly and becomes an expected consequence.`,
          `Hamilton's rule states the condition compactly: altruism spreads when rb > c, where r is relatedness, b the benefit to the recipient and c the cost to the actor. It makes quantitative predictions, which is what makes it science rather than a story. Haldane's remark that he would lay down his life for two brothers or eight cousins is the arithmetic in joke form. It also explained the social insects that had troubled Darwin: haplodiploidy in Hymenoptera makes full sisters unusually related, so a worker can propagate her genes more efficiently by raising sisters than daughters — an elegant fit, though later work showed the haplodiploidy story is neither necessary nor sufficient and monogamy matters more.`,
        ],
      },
      {
        heading: "The gene's-eye view and its critics",
        body: [
          `Generalising Hamilton, George Williams and later Richard Dawkins argued the gene is the unit of selection, because only it has the required permanence. Individuals are transient: your particular genome is dismantled at meiosis and never recurs. Genes persist across generations as copies, so they alone accumulate the effects of selection over the timescales it operates on. On this view, organisms are vehicles built by genes to propagate themselves, and apparent individual- or group-level phenomena are what gene-level selection looks like from the outside.`,
          `The view is powerful and has been attacked from two directions. Multilevel selection theorists argue that selection genuinely operates simultaneously at several levels — within groups, favouring selfishness, and between groups, favouring cooperation — and that the mathematics of group selection and inclusive fitness are often formally equivalent descriptions of the same process rather than rival hypotheses. Others object that the gene's-eye view underplays development: genes do not code for traits in isolation but interact with each other and the environment, so "a gene for altruism" is shorthand that can mislead if taken literally. The contemporary position is largely that the frameworks are intertranslatable, and the argument is frequently about which is more illuminating rather than which is true.`,
        ],
      },
      {
        heading: "Major transitions and why cheats matter",
        body: [
          `The deepest application is to the major evolutionary transitions: how replicating molecules became chromosomes, separate cells became eukaryotes, single cells became multicellular organisms, and individual insects became eusocial colonies. Each is a level shift, where entities that formerly replicated independently became parts of a larger unit that replicates as a whole. And each poses the same problem: what stops lower-level entities from cheating the higher-level cooperative?`,
          `The answers are structural rather than moral. Mechanisms that align interests do the work — high relatedness through a single-cell bottleneck, so cells in a body are genetically near-identical and have little to gain by defecting; policing, as in worker insects destroying eggs laid by other workers; sequestering a germ line so somatic cells have no reproductive future to compete for. Where alignment fails, defection reappears with terrible fidelity: cancer is precisely a somatic cell defecting from multicellular cooperation and reverting to its own replication. That framing is not metaphor — it is why evolutionary theory has real purchase on oncology, and why the levels-of-selection question is a live biological problem rather than a philosophical one.`,
        ],
      },
      {
        heading: "Why cancer is a cooperation failure",
        body: [
          `The reframe worth taking from this is that a body is not an individual so much as a truce. Thirty-odd trillion cells forgo their own reproduction to build a soma that will die, and they do it because a single-cell bottleneck each generation makes them near-clones with aligned interests, and because policing mechanisms punish defectors. Cancer is what happens when that truce breaks: a lineage acquires mutations that let it defect, and it then does exactly what selection predicts a replicator with a reproductive advantage will do — it outcompetes its neighbours, indifferent to the fate of the whole. Seen that way, the puzzling thing is not that cancer happens but that multicellular cooperation holds as long and as well as it does.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "reasoning",
        prompt: "Why is 'the behaviour benefits the species' an unstable explanation for altruism?",
        choices: [
          { id: "a", label: "A mutant taking the benefit without paying the cost out-reproduces the altruists and spreads" },
          { id: "b", label: "Species-level traits cannot be encoded genetically, only learned within a population" },
          { id: "c", label: "Species are too large for selection to act on within any realistic evolutionary timescale" },
          { id: "d", label: "Benefits to a species are impossible to measure, so the claim is untestable in principle" },
        ],
        correctChoiceId: "a",
        explanation: "Selection has no foresight and compares replicators within a population. Any 'for the good of the species' trait is invadable by definition, so it collapses unless something structurally prevents the cheat from winning.",
      },
      {
        dimension: "depth",
        prompt: "What does Hamilton's rule state?",
        choices: [
          { id: "a", label: "Altruism spreads when relatedness times benefit to the recipient exceeds cost to the actor" },
          { id: "b", label: "Altruism spreads whenever the benefit to the group exceeds the cost to the individual" },
          { id: "c", label: "Altruism persists only where reciprocation from the recipient is reliably enforced" },
          { id: "d", label: "Altruism arises when the actor's reproductive value has already declined to zero" },
        ],
        correctChoiceId: "a",
        explanation: "The condition rb > c makes quantitative predictions, which is what makes inclusive fitness science rather than a story — Haldane's two brothers or eight cousins is the same arithmetic expressed as a joke.",
      },
      {
        dimension: "reasoning",
        prompt: "Why did Williams and Dawkins argue the gene is the unit of selection?",
        choices: [
          { id: "a", label: "Only genes persist as copies across generations, so only they accumulate selection's effects" },
          { id: "b", label: "Genes are the smallest biological entities and selection always acts on the smallest unit" },
          { id: "c", label: "Genes are unaffected by the environment, making their fitness effects unambiguous" },
          { id: "d", label: "Individual organisms rarely vary enough within a population for selection to discriminate" },
        ],
        correctChoiceId: "a",
        explanation: "Your particular genome is dismantled at meiosis and never recurs; genes persist as copies over the timescales selection operates on. Permanence, not size, is the argument — organisms are transient vehicles.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the contemporary view of multilevel selection versus inclusive fitness?",
        choices: [
          { id: "a", label: "They are largely intertranslatable descriptions, so the dispute is often about which illuminates more" },
          { id: "b", label: "Multilevel selection has been formally refuted and retains only historical interest" },
          { id: "c", label: "Inclusive fitness applies to invertebrates while multilevel selection applies to vertebrates" },
          { id: "d", label: "The two make sharply different empirical predictions that experiments have now resolved" },
        ],
        correctChoiceId: "a",
        explanation: "The mathematics of group selection and inclusive fitness are frequently formally equivalent descriptions of the same process rather than rival hypotheses, so the argument is usually about explanatory perspective rather than truth.",
      },
      {
        dimension: "reasoning",
        prompt: "In levels-of-selection terms, what is cancer?",
        choices: [
          { id: "a", label: "A somatic lineage defecting from multicellular cooperation and reverting to its own replication" },
          { id: "b", label: "A failure of the immune system to eliminate cells carrying damaged genetic material" },
          { id: "c", label: "An accumulation of mutations with no analogue in evolutionary cooperation theory" },
          { id: "d", label: "A group-selected adaptation that limits organismal lifespan to benefit the population" },
        ],
        correctChoiceId: "a",
        explanation: "Multicellularity is a truce held together by clonal relatedness and policing. Cancer is a lineage acquiring the ability to defect and then doing exactly what selection predicts of a replicator with an advantage — which is why the framing has real purchase on oncology.",
      },
    ],
    sources: [
      { label: "Units and Levels of Selection (SEP)", note: "Stanford Encyclopedia entry on the levels-of-selection debate.", type: "Reference", url: "https://plato.stanford.edu/entries/selection-units/" },
      { label: "Kin selection and Hamilton's rule (overview)", note: "Reference on inclusive fitness, rb > c and the social insects.", type: "Reference", url: "https://en.wikipedia.org/wiki/Kin_selection" },
    ],
  },
  {
    concept: "Paradigm Shift",
    level: "University",
    summary: "deep change in the assumptions guiding normal science",
    estimatedMinutes: 9,
    deck: "Science does not always advance by steady accumulation. Sometimes the entire framework of assumptions a field takes for granted is overthrown and replaced, in a revolution that changes what scientists even see. Thomas Kuhn called this a 'paradigm shift', and his account transformed how we understand how knowledge really changes.",
    keyTerms: [
      { label: "Paradigm", value: "The framework of shared assumptions, methods and questions that guides a scientific field." },
      { label: "Normal science", value: "Routine research solving puzzles within an accepted paradigm." },
      { label: "Anomaly", value: "An observation the current paradigm cannot explain, which can accumulate into crisis." },
      { label: "Scientific revolution", value: "The overthrow and replacement of one paradigm by another." },
    ],
    sections: [
      {
        heading: "The framework beneath the facts",
        body: [
          `The paradigm shift comes from the historian and philosopher Thomas Kuhn, whose 1962 book The Structure of Scientific Revolutions challenged the traditional view that science advances by the steady, cumulative addition of facts. Kuhn argued that science is instead governed by "paradigms": the overarching frameworks of shared assumptions, theories, methods, standards and exemplary problems that define a field at a given time. A paradigm is not just a theory but a whole way of seeing and doing science — it shapes what questions are asked, what counts as a valid answer, and even what scientists perceive.`,
          `Most of the time, Kuhn observed, scientists do "normal science": research within the accepted paradigm, refining it, solving the puzzles it defines, and extending its application. Normal science is not about challenging the fundamental framework but working productively within it, like solving puzzles whose broad rules are already agreed. This ordinary, cumulative activity fills most of a scientist's career, and it is highly productive precisely because the shared paradigm provides agreed foundations no one has to keep re-litigating.`,
        ],
      },
      {
        heading: "Anomalies and crisis",
        body: [
          `The stability of normal science is periodically disrupted. As research proceeds, scientists encounter "anomalies" — observations the current paradigm cannot explain, that stubbornly resist being fitted into the framework. At first anomalies are set aside, explained away, or attributed to error, because a single anomaly does not overturn a productive paradigm, and scientists reasonably assume it will eventually be resolved within the existing framework. The paradigm has earned trust, and isolated puzzles are not enough to abandon it.`,
          `But if anomalies accumulate — becoming numerous, serious and persistent — they can precipitate a "crisis": a growing sense that the paradigm is failing and its foundations are in doubt. In a crisis, the confident routine of normal science breaks down; scientists question fundamental assumptions, propose alternative frameworks, and debate the foundations of their field. This uncomfortable but necessary period of ferment, in which the previously unquestioned paradigm is genuinely challenged, is the precondition for revolution.`,
        ],
      },
      {
        heading: "The revolution",
        body: [
          `A crisis can be resolved by a "scientific revolution": the overthrow of the old paradigm and its replacement by a new one that accounts for the anomalies the old could not. This is the paradigm shift — a fundamental transformation in the framework of a science, not merely new facts but a change in the basic assumptions through which the field understands its subject. The shift from Newtonian physics to Einstein's relativity, or the Copernican revolution replacing an Earth-centred cosmos with a sun-centred one, are classic examples: not just new discoveries, but new frameworks that reorganised everything.`,
          `Kuhn made the striking claim that competing paradigms are "incommensurable" — so different in their assumptions, concepts and standards that they cannot be fully translated into each other's terms or judged by a common measure. Scientists in different paradigms may almost "see" the world differently, interpreting the same observations in incompatible ways. This makes a paradigm shift less like a simple logical proof that the new view is correct and more like a wholesale conversion to a new way of seeing. After a revolution, scientists carry on with normal science within the new paradigm, until it too accumulates anomalies and the cycle may repeat.`,
        ],
      },
      {
        heading: "Insight and controversy",
        body: [
          `Kuhn's account was enormously influential and genuinely illuminating, capturing something real about major scientific change: that it can be revolutionary rather than merely cumulative, that frameworks of assumption shape perception, and that abandoning a deep-rooted paradigm is a wrenching, social and psychological process, not a tidy matter of evidence alone. It corrected a naive picture of science as the frictionless, purely rational accumulation of facts, showing it to be a human enterprise shaped by communities, commitments and resistance to change.`,
          `But his ideas are contested. Critics argue the "incommensurability" thesis is overstated — that competing paradigms can in fact be compared, and that new ones are generally adopted because they genuinely explain more and predict better, so shifts are more rational and evidence-driven than Kuhn's most radical formulations imply. There is also concern that "paradigm shift", now a fashionable buzzword for any minor change, has been stretched far beyond his meaning. The balanced view keeps Kuhn's real insight — that science undergoes occasional deep, framework-level revolutions, not just steady accumulation — while resisting the relativist reading that would deny science makes genuine, evidence-based progress.`,
        ],
      },
      {
        heading: "When your whole framework flips",
        body: [
          `Kuhn's idea reaches well beyond science, because we all operate within frameworks of assumption that shape what we notice and how we interpret it. You have experienced a personal paradigm shift when a new perspective suddenly reorganised how you saw everything — a realisation that made a mass of previously puzzling experiences click into a new pattern, after which you could not un-see it. Organisations, fields and whole cultures undergo such shifts, often resisting mounting "anomalies" until a crisis forces a rethink. The lessons transfer: recognise that you always work within a framework of assumptions that feels like plain reality but is not the only possibility; treat persistent anomalies your framework cannot explain as valuable signals rather than nuisances; and remember that the deepest progress sometimes requires not more facts within your current view, but changing the view itself. And use "paradigm shift" sparingly — for genuine framework-level change, not every new idea.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What does 'normal science' consist of in Kuhn's account?",
        choices: [
          { id: "a", label: "Solving the puzzles a paradigm defines and extending it, rather than questioning its framework" },
          { id: "b", label: "Systematically testing the foundational assumptions on which the current paradigm rests" },
          { id: "c", label: "The routine replication of previously published results to confirm their reliability" },
          { id: "d", label: "Research conducted before a field has settled on any shared theoretical framework" },
        ],
        correctChoiceId: "a",
        explanation: "Normal science works productively within agreed foundations rather than re-litigating them, which is precisely why it is so productive. It fills most of a scientist's career and is cumulative in exactly the way Kuhn denied of science as a whole.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does a single anomaly rarely overturn a paradigm?",
        choices: [
          { id: "a", label: "A productive paradigm has earned trust, so an isolated puzzle is assumed to be resolvable within it" },
          { id: "b", label: "Anomalies are usually suppressed by journals committed to the prevailing framework" },
          { id: "c", label: "Individual anomalies are almost always traced to instrumentation error on investigation" },
          { id: "d", label: "Paradigms are formulated so as to be logically compatible with any possible observation" },
        ],
        correctChoiceId: "a",
        explanation: "Anomalies are initially set aside, explained away or attributed to error — reasonably, since a framework with a strong record deserves the benefit of the doubt. Only accumulation into a persistent cluster precipitates crisis.",
      },
      {
        dimension: "depth",
        prompt: "What did Kuhn mean by claiming competing paradigms are 'incommensurable'?",
        choices: [
          { id: "a", label: "They differ so deeply in assumptions and standards that no common measure fully translates between them" },
          { id: "b", label: "They make contradictory predictions that cannot both be true of the same phenomena" },
          { id: "c", label: "They are formulated in different mathematical languages requiring specialist translation" },
          { id: "d", label: "They cannot be held simultaneously by any individual scientist during a career" },
        ],
        correctChoiceId: "a",
        explanation: "Scientists in different paradigms may almost 'see' the world differently, interpreting identical observations incompatibly — which makes a shift less a logical proof than a wholesale conversion to a new way of seeing.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the principal criticism of Kuhn's stronger claims?",
        choices: [
          { id: "a", label: "Incommensurability is overstated; paradigms can be compared, and new ones win by explaining more" },
          { id: "b", label: "Normal science does not exist, since researchers constantly test foundational assumptions" },
          { id: "c", label: "Anomalies never accumulate, because paradigms absorb them faster than they arise" },
          { id: "d", label: "Scientific revolutions are far more frequent than his historical account allowed" },
        ],
        correctChoiceId: "a",
        explanation: "Critics hold that shifts are more rational and evidence-driven than the radical formulation implies. The balanced view keeps the insight about framework-level revolutions while rejecting the relativist reading of genuine progress.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the transferable lesson of Kuhn's account beyond science?",
        choices: [
          { id: "a", label: "Treat persistent anomalies your framework cannot explain as signals rather than nuisances" },
          { id: "b", label: "Adopt new frameworks quickly, since resistance to change is always irrational" },
          { id: "c", label: "Avoid committing to any framework, since all will eventually be overthrown" },
          { id: "d", label: "Judge competing views by how many facts each can accommodate" },
        ],
        correctChoiceId: "a",
        explanation: "You always work within assumptions that feel like plain reality but are not the only possibility. The deepest progress sometimes requires changing the view rather than adding facts within it — and anomalies are the signal that moment has come.",
      },
    ],
    sources: [
      { label: "Thomas Kuhn (SEP)", note: "Stanford Encyclopedia entry on Kuhn, paradigms and revolutions.", type: "Reference", url: "https://plato.stanford.edu/entries/thomas-kuhn/" },
      { label: "The Structure of Scientific Revolutions (overview)", note: "Reference on paradigms, normal science and paradigm shifts.", type: "Reference", url: "https://en.wikipedia.org/wiki/The_Structure_of_Scientific_Revolutions" },
    ],
  },
];

export const scienceLessons = buildAuthoredLessons("science", science);
