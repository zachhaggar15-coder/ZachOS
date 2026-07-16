import { buildAuthoredLessons, type AuthoredLesson } from "./types";

// Ten hand-written Psychology lessons: researched, concept-specific prose with
// named studies and thinkers, each closing on an everyday example, plus genuine
// recall quizzes.
const psychology: AuthoredLesson[] = [
  {
    concept: "Predictive Processing",
    level: "University",
    summary: "the brain as a prediction engine that only propagates its errors",
    estimatedMinutes: 9,
    deck: "The intuitive model of perception is that signals flow inward and the brain builds a picture from them. Predictive processing inverts this: the brain generates the picture and sends it down, and only the mismatch flows up. Perception becomes controlled hallucination constrained by sensory error — which explains illusions, hallucination and placebo as the same mechanism working normally.",
    keyTerms: [
      { label: "Generative model", value: "The brain's internal model of the causes of its sensory input, used to predict that input." },
      { label: "Prediction error", value: "The mismatch between predicted and actual signal — the only thing worth transmitting upward." },
      { label: "Precision weighting", value: "How much confidence is assigned to an error signal, determining whether it updates belief." },
      { label: "Active inference", value: "Reducing prediction error by acting on the world rather than by revising the model." },
    ],
    sections: [
      {
        heading: "Inverting the flow",
        body: [
          `Classical accounts treat perception as feedforward construction: light hits the retina, features are extracted, complexity accumulates up a hierarchy, and eventually an object is recognised. The anatomy has always been awkward for this. Descending connections in cortex vastly outnumber ascending ones — the traffic runs predominantly the wrong way for a system that merely builds upward from input. If perception were feedforward analysis, the brain has spent enormous resources wiring a return path with nothing much to carry.`,
          `Predictive processing takes the anatomy seriously and reverses the story. The brain maintains a generative model of what causes its sensations, and continuously predicts the incoming signal. Descending connections carry those predictions down; ascending connections carry only what the prediction got wrong. The system is not transmitting the world upward but transmitting its own errors, because everything successfully predicted is, informationally, already known. What you perceive is the model's best current guess, corrected by the residue it failed to anticipate.`,
        ],
      },
      {
        heading: "Why this is efficient and what it costs",
        body: [
          `The efficiency argument is straightforward and borrowed from signal processing: transmitting only the unpredicted part of a signal is enormously cheaper than transmitting all of it, which is exactly why video compression sends frame differences rather than frames. A brain spending roughly a fifth of the body's energy has strong reason to encode this way, and cortical microcircuitry does appear to segregate units carrying predictions from units carrying error.`,
          `The cost is that perception is now hostage to the model. If the model predicts confidently and wrongly, you will perceive the prediction, because only the mismatch could correct it and a confident prediction suppresses the mismatch. This is not a bug to be engineered out; it is the mechanism functioning as designed. It reframes what an illusion is: not a failure of the visual system but a case where the model's assumptions are strong enough to override the input. The checker-shadow illusion is the brain's assumption about illumination overriding the actual luminance, and no amount of knowing this dissolves the percept — the model is not accessible to your opinion of it.`,
        ],
      },
      {
        heading: "Precision, and the one dial that matters",
        body: [
          `Prediction error alone is not enough, because sensory data are noisy and not every mismatch deserves to move a belief. The system therefore weights errors by precision — an estimate of their reliability. High-precision error is trusted and updates the model; low-precision error is discounted as noise. In a dim room the brain lowers the precision on visual error and leans harder on priors, which is why you misidentify shapes in the dark: not because you see less, but because you have deliberately turned down the input's authority.`,
          `Precision does most of the explanatory work in the framework, and this is where it earns real clinical traction. If precision weighting fails — sensory error assigned too little precision, priors too much — the model runs away from the input and you perceive what you expect regardless of what is there. That is a candidate mechanism for hallucination, and the prediction is testable: people prone to hallucination should be unusually susceptible to expectation-driven percepts. Powers and colleagues showed exactly that using conditioned hallucination, where people trained to associate a light with a tone reliably report hearing tones that are not played — and voice-hearers do so far more strongly. Hallucination on this account is not perception broken but priors winning.`,
        ],
      },
      {
        heading: "Active inference and the dark room",
        body: [
          `The framework extends elegantly to action. There are two ways to reduce prediction error: change the model to match the world, or change the world to match the model. The second is action. On this view a motor command is not an instruction but a proprioceptive prediction — you predict your arm is raised, and the error is resolved by reflex arcs that move the arm until the prediction comes true. Perception and action become the same computation running in opposite directions, which is a genuinely unifying claim.`,
          `The obvious objection is the dark room problem: if the imperative is minimising prediction error, why not sit in a dark, silent room where everything is perfectly predictable and error is near zero? The answer is that your model of yourself does not predict sitting in a dark room — it predicts eating, moving, socialising — so inertia generates enormous error against those expectations. Whether this is a satisfying reply or a rescue that quietly imports goals through the back door is genuinely contested. It is one of the sharper live objections to the framework's ambition to explain everything from one principle.`,
        ],
      },
      {
        heading: "Why placebo actually works",
        body: [
          `This dissolves something that otherwise looks like magic. If pain is not a readout of tissue damage but the brain's best inference about bodily threat, then a strong prior that relief is coming genuinely changes the inference — and the resulting reduction in pain is not imaginary, it is the perceptual system doing its job with different inputs. That is why placebo effects are measurable, dose-dependent, sensitive to how the treatment is delivered, and partly blocked by opioid antagonists. You can watch the same mechanism in yourself: the phone buzz you feel that never happened is a confident prior generating a percept, and the fact that knowing about the checker-shadow illusion does not fix it tells you the model is running well below anything you can argue with.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "reasoning",
        prompt: "What anatomical fact motivates the predictive processing inversion?",
        choices: [
          { id: "a", label: "Descending cortical connections greatly outnumber ascending ones" },
          { id: "b", label: "Sensory receptors transmit signals faster than cortex can process them" },
          { id: "c", label: "The visual cortex occupies more area than any other sensory region" },
          { id: "d", label: "Cortical neurons fire continuously rather than only when stimulated" },
        ],
        correctChoiceId: "a",
        explanation: "If perception were feedforward construction, the brain has wired an enormous return path with little to carry. Predictive processing takes the traffic direction seriously: predictions descend, and only errors ascend.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does the framework only propagate prediction error upward?",
        choices: [
          { id: "a", label: "Successfully predicted signal is already known, so transmitting it would be redundant" },
          { id: "b", label: "Ascending pathways are too slow to carry the full sensory signal in real time" },
          { id: "c", label: "Error signals are more resistant to noise than raw sensory signals are" },
          { id: "d", label: "Higher cortical areas cannot interpret raw sensory data without preprocessing" },
        ],
        correctChoiceId: "a",
        explanation: "The logic is compression: sending only the unpredicted residue is far cheaper than sending everything, which is why video codecs transmit frame differences. A brain using a fifth of the body's energy has good reason to encode this way.",
      },
      {
        dimension: "reasoning",
        prompt: "What does the framework say an illusion is?",
        choices: [
          { id: "a", label: "A case where the model's assumptions are strong enough to override the sensory input" },
          { id: "b", label: "A breakdown in the early feature-extraction stages of the visual hierarchy" },
          { id: "c", label: "A failure of attention to allocate sufficient resources to the stimulus" },
          { id: "d", label: "An artefact of the retina's limited dynamic range under unusual lighting" },
        ],
        correctChoiceId: "a",
        explanation: "The checker-shadow illusion is the brain's assumption about illumination beating the actual luminance. It is the mechanism working as designed — which is why knowing about the illusion does not dissolve it.",
      },
      {
        dimension: "reasoning",
        prompt: "How does the framework account for hallucination?",
        choices: [
          { id: "a", label: "Priors are weighted too heavily against sensory error, so expectation wins over input" },
          { id: "b", label: "Sensory neurons fire spontaneously and generate signals with no external cause" },
          { id: "c", label: "The generative model is destroyed, leaving raw unfiltered input to reach awareness" },
          { id: "d", label: "Attention is captured by internal speech and misattributed to the outside world" },
        ],
        correctChoiceId: "a",
        explanation: "If sensory error gets too little precision and priors too much, the model runs away from the input. The conditioned-hallucination work showed voice-hearers report expectation-driven tones far more strongly — priors winning, not perception broken.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the 'dark room problem' for active inference?",
        choices: [
          { id: "a", label: "If minimising prediction error is the imperative, perfect predictability should be maximally attractive" },
          { id: "b", label: "Motor commands cannot be issued when sensory input falls below a threshold" },
          { id: "c", label: "Prediction error cannot be computed without a reference stimulus present" },
          { id: "d", label: "Darkness raises the precision of visual error, destabilising the generative model" },
        ],
        correctChoiceId: "a",
        explanation: "The reply is that your self-model predicts eating and moving, so inertia generates huge error against those expectations. Whether that answers the objection or smuggles goals in through the back door is genuinely contested.",
      },
    ],
    sources: [
      { label: "Predictive coding (overview)", note: "Reference on generative models, prediction error and precision.", type: "Reference", url: "https://en.wikipedia.org/wiki/Predictive_coding" },
      { label: "Clark, 'Whatever next? Predictive brains, situated agents'", note: "The influential synthesis of predictive processing in cognitive science.", type: "Reference", url: "https://en.wikipedia.org/wiki/Andy_Clark" },
    ],
  },
  {
    concept: "Working Memory",
    level: "A-level",
    summary: "temporary mental workspace for holding and manipulating information",
    estimatedMinutes: 8,
    deck: "Working memory is the mind's workbench: the small, temporary space where you hold information in mind and actively work with it — doing mental arithmetic, following an instruction, keeping a phone number in your head. It is astonishingly limited, and that limit shapes how we think, learn and get overwhelmed.",
    keyTerms: [
      { label: "Working memory", value: "The system for temporarily holding and manipulating information in mind." },
      { label: "Limited capacity", value: "Working memory holds only a few items at once — around four chunks." },
      { label: "Chunking", value: "Grouping items into meaningful units to hold more within the limit." },
      { label: "Cognitive load", value: "The demand a task places on limited working memory." },
    ],
    sections: [
      {
        heading: "The mind's workbench",
        body: [
          `Working memory is the mental system that holds information in mind and actively manipulates it over short periods — the "workspace" of conscious thought. It is distinct from long-term memory, the vast store of knowledge and experience; working memory is the small, temporary space where information is currently being used and worked on. When you multiply two numbers in your head, follow spoken directions, or keep track of a sentence while reading it, you are using working memory to hold the relevant pieces and operate on them.`,
          `The crucial word is "working": this is not just passive short-term storage but an active workspace. The psychologist Alan Baddeley's influential model describes it as having components for temporarily holding verbal information (a "phonological loop", like a mental voice repeating sounds) and visual-spatial information (a "sketchpad"), coordinated by a "central executive" that directs attention and manipulates the contents. Working memory is where thinking actually happens moment to moment, making it central to reasoning, comprehension and learning.`,
        ],
      },
      {
        heading: "A tiny capacity",
        body: [
          `The defining feature of working memory is how little it holds. A famous 1956 paper by George Miller proposed that we can hold about "seven, plus or minus two" items at once; more recent research suggests the true capacity for genuinely separate items is even smaller, around four "chunks". Either way, the number is strikingly small — a handful of items, not dozens. Try to hold more, and items start dropping out. This is why a long phone number is hard to remember for the few seconds before you dial it, and why complex mental arithmetic quickly overwhelms you.`,
          `Information in working memory is also fragile and fleeting: without active rehearsal (mentally repeating it), it fades within seconds, and it is easily disrupted by distraction. If someone interrupts you mid-calculation, the numbers you were holding vanish. This tiny, fragile capacity is one of the most important constraints on human cognition, a bottleneck through which conscious thought must pass. Much of what makes thinking hard, and much of how we design tools and instruction, comes down to working memory's severe limits.`,
        ],
      },
      {
        heading: "Chunking: doing more with the limit",
        body: [
          `We are not entirely trapped by working memory's small capacity, because the "items" it holds can be chunks of varying size. Chunking is the grouping of individual pieces of information into larger meaningful units, each of which counts as a single item. The string of letters F-B-I-C-I-A-N-A-S-A is hard to hold as ten separate letters, but easy as three chunks — FBI, CIA, NASA — because each familiar acronym is one meaningful unit. By packing more information into each chunk, we effectively hold more within the same numerical limit.`,
          `This is a key to expertise and skilled memory. Experts in a field can hold far more relevant information in working memory than novices, not because their capacity is larger but because their extensive knowledge lets them chunk information into large, meaningful units. A chess master glances at a board and remembers the positions easily by grouping pieces into familiar patterns, where a novice sees only many separate pieces. Chunking shows that working memory works hand in hand with long-term knowledge: the more you know, the more meaningfully you can package new information, stretching the fixed capacity further.`,
        ],
      },
      {
        heading: "Cognitive load and learning",
        body: [
          `Because working memory is the bottleneck of conscious thought, the demand a task places on it — its "cognitive load" — powerfully affects performance and learning. If a task or explanation requires holding too many elements in mind at once, working memory is overloaded, and understanding or performance collapses. This is why complex material presented all at once is bewildering, why interruptions are so disruptive, and why we make errors when juggling too much mentally.`,
          `This has direct implications for how we should learn and teach. Effective instruction manages cognitive load: breaking complex material into manageable steps, building on existing knowledge (which enables chunking), and avoiding needless demands that waste limited capacity. It is also why writing things down, using external aids, and offloading information from the head to paper or screen are so valuable — they free up the tiny mental workspace for the actual thinking. Understanding working memory's limits is not just theory; it is a practical guide to studying, explaining and designing anything that people have to understand.`,
        ],
      },
      {
        heading: "Why you forget the number before you dial",
        body: [
          `You bump into working memory's limits every day. Holding a phone number or a room code just long enough to use it, and losing it the moment you are distracted, is working memory in action and its fragility exposed. When mental arithmetic makes your head spin, you have hit the capacity limit. When you group a long number into chunks to remember it, or find that an expert grasps something complex you find overwhelming, you are seeing chunking and knowledge at work. And when you write down a to-do list or jot a calculation rather than holding it all in your head, you are wisely offloading cognitive load from a workspace that holds only a few things at once. Respecting this tiny bottleneck — by chunking, by offloading, by not overloading yourself — is one of the most practical uses of psychology.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "How does working memory differ from long-term memory?",
        choices: [
          { id: "a", label: "Working memory is a small temporary workspace for holding and manipulating current information; long-term memory is the vast store of knowledge" },
          { id: "b", label: "They are the same thing" },
          { id: "c", label: "Working memory stores everything permanently" },
          { id: "d", label: "Long-term memory holds only a few items" },
        ],
        correctChoiceId: "a",
        explanation: "Working memory is the active 'workbench' where information is currently being used and worked on, distinct from long-term memory, the vast store of knowledge and experience.",
      },
      {
        dimension: "depth",
        prompt: "Roughly how many separate 'chunks' can working memory hold at once?",
        choices: [
          { id: "a", label: "Around four (with older estimates of about seven plus or minus two)" },
          { id: "b", label: "Around a hundred" },
          { id: "c", label: "Unlimited" },
          { id: "d", label: "Exactly one" },
        ],
        correctChoiceId: "a",
        explanation: "Miller's classic estimate was seven plus or minus two, but more recent research suggests about four genuinely separate chunks — a strikingly small capacity, which is why long numbers are hard to hold.",
      },
      {
        dimension: "reasoning",
        prompt: "How does 'chunking' let us hold more information?",
        choices: [
          { id: "a", label: "By grouping items into larger meaningful units, each counting as a single item within the limit" },
          { id: "b", label: "By increasing the raw number of items working memory can hold" },
          { id: "c", label: "By deleting long-term memory" },
          { id: "d", label: "By slowing down thinking" },
        ],
        correctChoiceId: "a",
        explanation: "Chunking packs more information into each item — FBI, CIA, NASA as three chunks rather than ten letters — so we hold more within the same numerical limit, which is also how experts remember more in their field.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can a chess master remember a board far more easily than a novice?",
        choices: [
          { id: "a", label: "Their extensive knowledge lets them chunk pieces into familiar patterns, not because their capacity is larger" },
          { id: "b", label: "Because their working memory capacity is physically bigger" },
          { id: "c", label: "Because they memorise every game" },
          { id: "d", label: "Because chess has fewer pieces than it appears" },
        ],
        correctChoiceId: "a",
        explanation: "Working memory works with long-term knowledge: the master groups pieces into meaningful patterns (large chunks), while the novice sees many separate pieces — the same capacity, but more efficiently used.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is managing 'cognitive load' important for learning?",
        choices: [
          { id: "a", label: "Because if a task requires holding too much at once, working memory overloads and understanding collapses" },
          { id: "b", label: "Because cognitive load has no effect on learning" },
          { id: "c", label: "Because more load always improves memory" },
          { id: "d", label: "Because working memory has unlimited capacity" },
        ],
        correctChoiceId: "a",
        explanation: "Working memory is the bottleneck of thought, so overloading it collapses understanding; effective instruction breaks material into steps, builds on prior knowledge, and offloads information to free the tiny workspace for actual thinking.",
      },
    ],
    sources: [
      { label: "OpenStax, Psychology: Memory", note: "Open textbook material on working and short-term memory.", type: "Textbook", url: "https://openstax.org/details/books/psychology-2e" },
      { label: "Working memory (overview)", note: "Reference on Baddeley's model, capacity and chunking.", type: "Reference", url: "https://en.wikipedia.org/wiki/Working_memory" },
    ],
  },
  {
    concept: "Reward Prediction Error",
    level: "University",
    summary: "what dopamine actually encodes, and why it is not pleasure",
    estimatedMinutes: 9,
    deck: "Dopamine is described in popular writing as the pleasure chemical, and this is close to exactly wrong. Schultz's recordings showed dopamine neurons do not signal reward — they signal reward that was not predicted. That single correction turns conditioning from a behavioural regularity into a computation, and explains addiction, anhedonia and why nothing quite lives up to the anticipation.",
    keyTerms: [
      { label: "Reward prediction error", value: "The difference between reward received and reward predicted — what dopamine phasic firing encodes." },
      { label: "Temporal difference learning", value: "The reinforcement learning algorithm whose error term dopamine appears to implement." },
      { label: "Wanting vs liking", value: "Dissociable systems: dopamine drives incentive salience, not hedonic pleasure itself." },
      { label: "Incentive sensitisation", value: "Berridge and Robinson's account of addiction as pathological wanting without liking." },
    ],
    sections: [
      {
        heading: "The recordings that reframed reward",
        body: [
          `Wolfram Schultz recorded midbrain dopamine neurons in monkeys receiving juice, and the results did not fit the pleasure story. Naive animals showed a burst of firing at juice delivery, as expected. But once a tone reliably preceded the juice, the burst migrated backwards: dopamine fired to the tone and, crucially, fell silent at the juice itself. The juice was just as sweet and the monkey still drank it eagerly, yet the supposed pleasure signal had stopped responding to the pleasure entirely.`,
          `The third condition settled it. When the tone played and the juice was withheld, dopamine firing dropped below baseline at exactly the moment juice should have arrived — a negative signal precisely timed to an absence. No account in which dopamine encodes pleasure or reward magnitude can accommodate a dip triggered by nothing happening. What the neurons track is not reward but the discrepancy between reward and expectation: fire when better than predicted, pause when worse, stay silent when exactly as predicted.`,
        ],
      },
      {
        heading: "Why this is a computation, not a correlation",
        body: [
          `The reason this finding is celebrated rather than merely interesting is that the signal had already been derived theoretically. Temporal difference learning, developed by Sutton and Barto in machine learning, learns predictions of future reward by computing an error term — the difference between predicted and actual value — and using it to update. That algorithm was designed without reference to brains, and its error term has precisely the properties Schultz observed: it shifts to the earliest reliable predictor, vanishes when prediction is accurate, and goes negative on omission.`,
          `So this is a rare case of a computational theory predicting a neural signal in detail rather than being fitted to it afterwards. It also reframes classical conditioning entirely. Pavlov described a behavioural regularity; the dopamine account explains the mechanism and, importantly, explains its known exceptions. Blocking — where a cue paired with an already-predicted outcome fails to acquire associative strength — is mysterious if conditioning is mere contiguity, and inevitable if learning is driven by prediction error, since a fully predicted outcome generates no error and therefore nothing to learn from. The Rescorla–Wagner model had captured this behaviourally; dopamine appears to be its physical implementation.`,
        ],
      },
      {
        heading: "Wanting is not liking",
        body: [
          `Kent Berridge's work forces a further dissociation that the pleasure story cannot survive. Rats with dopamine systems destroyed will starve beside food they are not motivated to approach — yet their facial hedonic reactions to sweetness, a reliable measure of liking, remain entirely intact. They still enjoy sugar; they simply do not want it. Conversely, stimulating dopamine increases pursuit without increasing the hedonic reaction. Wanting and liking come apart cleanly, and dopamine is on the wanting side.`,
          `The distinction rewrites addiction. If dopamine were pleasure, addiction would be the pursuit of an intense high, and tolerance would mean chasing a diminishing pleasure. Incentive sensitisation says something bleaker: repeated use sensitises the wanting system while the liking system habituates or declines, so craving grows as enjoyment falls. That is precisely what people with severe addiction report — overwhelming compulsion toward a drug that has long since stopped being pleasurable. On a pleasure model this is incoherent. On a wanting/liking dissociation it is the predicted trajectory, which is a real point in the theory's favour.`,
        ],
      },
      {
        heading: "What the framework does and does not license",
        body: [
          `The account has become the standard model and it is not the whole story. Dopamine neurons are heterogeneous: some respond to salience, novelty or aversive events rather than cleanly to reward prediction error, so a single-signal story is too tidy. Tonic and phasic dopamine appear to do different jobs, with tonic levels implicated in vigour and the willingness to expend effort. And dopamine's role in motor control, disrupted so visibly in Parkinson's disease, sits awkwardly alongside a purely reward-learning interpretation.`,
          `It is also worth resisting the pop-neuroscience inflation the finding attracted — "dopamine detox", "dopamine hits" from notifications, dopamine as a currency of modern distraction. The underlying claim that variable, unpredictable rewards drive engagement is genuinely supported, since unpredictability is exactly what maximises prediction error, and slot machines and feeds exploit that. But the framework describes a learning signal, not a hedonic resource that can be depleted or reset by abstinence. Taking dopamine seriously means understanding it as an error term in a learning algorithm — which is both stranger and more useful than the wellness version.`,
        ],
      },
      {
        heading: "Why the anticipation beats the thing itself",
        body: [
          `You have felt this computation directly. The holiday you looked forward to for months is often better in anticipation than in the event, and this is not disappointment or cynicism — it is the signal doing what it does. Once an outcome is fully predicted, it generates no prediction error, so the very reliability that makes something dependable makes it quiet. The unpredictable notification, the slot machine, the feed that might have something good, all hold you precisely because they cannot be predicted; the error keeps firing. And it explains why the thing you compulsively check is frequently not the thing you most enjoy: wanting and liking are different systems, and only one of them is being trained.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "reasoning",
        prompt: "What did dopamine neurons do once a tone reliably predicted juice?",
        choices: [
          { id: "a", label: "They fired to the tone and fell silent at the juice itself" },
          { id: "b", label: "They fired more strongly to the juice because it was now expected" },
          { id: "c", label: "They fired equally to both the tone and the juice delivery" },
          { id: "d", label: "They stopped responding to either stimulus after conditioning was complete" },
        ],
        correctChoiceId: "a",
        explanation: "The burst migrated backwards to the earliest reliable predictor. The juice was just as sweet and still drunk eagerly, yet the supposed pleasure signal stopped responding to it — which no pleasure account can accommodate.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is the omission condition decisive against a pleasure interpretation?",
        choices: [
          { id: "a", label: "Firing dipped below baseline when nothing arrived, and an absence cannot be a pleasure signal" },
          { id: "b", label: "The animals showed distress, confounding the reward signal with an aversive one" },
          { id: "c", label: "Firing continued unchanged, showing dopamine ignores the actual outcome" },
          { id: "d", label: "The dip occurred before the tone rather than at the expected reward time" },
        ],
        correctChoiceId: "a",
        explanation: "A negative signal precisely timed to an expected reward failing to appear is a prediction error by definition. Nothing happened, and dopamine responded — impossible if it encodes reward magnitude or pleasure.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does prediction-error learning explain blocking?",
        choices: [
          { id: "a", label: "An already-predicted outcome generates no error, so a redundant cue has nothing to learn from" },
          { id: "b", label: "The second cue is perceptually masked by the first and never enters awareness" },
          { id: "c", label: "Attention is finite, so only one cue can be associated with an outcome at a time" },
          { id: "d", label: "Blocking occurs only when the two cues are presented in different modalities" },
        ],
        correctChoiceId: "a",
        explanation: "Blocking is mysterious if conditioning is mere contiguity — the cue was there, paired with the outcome. It is inevitable if learning is driven by error, because a fully predicted outcome produces no error and therefore no update.",
      },
      {
        dimension: "reasoning",
        prompt: "What does Berridge's dopamine-depleted rat demonstrate?",
        choices: [
          { id: "a", label: "Hedonic reactions to sweetness survive intact while motivation to obtain it disappears" },
          { id: "b", label: "Both enjoyment of and motivation for food are abolished together" },
          { id: "c", label: "The rats overeat because the satiety signal depends on dopamine" },
          { id: "d", label: "The rats can learn new associations but cannot express them behaviourally" },
        ],
        correctChoiceId: "a",
        explanation: "They starve beside food they still like — facial hedonic reactions are preserved — but do not want. Wanting and liking dissociate cleanly, and dopamine sits on the wanting side.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does incentive sensitisation explain addiction better than a pleasure model?",
        choices: [
          { id: "a", label: "Wanting sensitises while liking declines, so craving grows as enjoyment falls" },
          { id: "b", label: "Tolerance means users must escalate doses to reach the original level of pleasure" },
          { id: "c", label: "Withdrawal is aversive, so use continues purely to avoid discomfort" },
          { id: "d", label: "Addicted users report that the drug becomes steadily more pleasurable over time" },
        ],
        correctChoiceId: "a",
        explanation: "Severe addiction involves overwhelming compulsion toward a drug that stopped being pleasurable long ago. That is incoherent on a pleasure model and is exactly what a sensitising wanting system with a habituating liking system predicts.",
      },
    ],
    sources: [
      { label: "Schultz, dopamine and reward prediction error (overview)", note: "Reference on the recordings and the temporal difference account.", type: "Reference", url: "https://en.wikipedia.org/wiki/Reward_system" },
      { label: "Incentive salience (overview)", note: "Reference on Berridge and Robinson's wanting/liking dissociation.", type: "Reference", url: "https://en.wikipedia.org/wiki/Motivational_salience" },
    ],
  },
  {
    concept: "Signal Detection Theory",
    level: "University",
    summary: "separating how well you can see from how willing you are to say you saw",
    estimatedMinutes: 9,
    deck: "Any detection task confounds two entirely different things: your ability to discriminate signal from noise, and your willingness to say yes. Accuracy cannot separate them. Signal detection theory can — and once you see the separation, a great deal of apparently sensory disagreement turns out to be disagreement about thresholds instead.",
    keyTerms: [
      { label: "Sensitivity (d')", value: "How far apart the signal and noise distributions are — genuine discriminative ability." },
      { label: "Criterion", value: "Where the observer sets their yes/no threshold — a decision, independent of sensitivity." },
      { label: "Hits and false alarms", value: "The two rates needed together to recover sensitivity and criterion from behaviour." },
      { label: "ROC curve", value: "Hit rate against false alarm rate across criteria, tracing out sensitivity itself." },
    ],
    sections: [
      {
        heading: "Two things accuracy cannot tell apart",
        body: [
          `Consider two radiologists reading the same scans. One catches almost every tumour; the other misses some. It looks obvious who is the better clinician — until you check false positives and find the first also flags dozens of healthy patients. They may have identical discriminative ability and merely differ in where they set their threshold. The first says yes readily, catching more real cases and more phantoms; the second says yes reluctantly, missing more of both. Their hit rates differ and their skill may not.`,
          `Signal detection theory's foundational move is to insist these are separable and must be separated. Sensitivity, denoted d', measures how distinguishable signal is from noise — real perceptual or diagnostic ability. Criterion measures how much evidence you demand before responding yes — a decision, driven by payoffs, expectations and temperament. A hit rate alone confounds them hopelessly, because it can be raised to 100% by anyone willing to say yes to everything. You need hits and false alarms together to recover either.`,
        ],
      },
      {
        heading: "The model underneath",
        body: [
          `The framework's assumption is that there is no clean signal-versus-nothing. Both conditions produce internal activity that varies trial to trial: noise alone generates a distribution of internal responses, and signal-plus-noise generates a distribution shifted higher. Crucially they overlap, so no threshold can perfectly separate them — a strong noise trial can produce more internal response than a weak signal trial, and nothing in the observer's head distinguishes them.`,
          `Given overlap, detection is not sensing but deciding: the observer picks a criterion and reports signal above it, noise below. Sensitivity is the distance between the distribution means in units of their spread — how far apart the world pushed them. Criterion is where the observer places the line — how they choose to carve the ambiguity. This is why the theory generalises so far beyond psychophysics: any decision under uncertain evidence has this structure, and the same mathematics applies to radiology, jury verdicts, airport screening, spam filters and diagnostic tests.`,
        ],
      },
      {
        heading: "Why the criterion moves, and why that is rational",
        body: [
          `Criterion shifts are not error. They are the rational response to payoffs and base rates. If missing a tumour is catastrophic and a false positive means an unnecessary biopsy, you should adopt a lenient criterion — accepting many false alarms to avoid misses. If false accusations are the intolerable outcome, you should be conservative. The optimal criterion depends on the relative cost of the two error types and on how often the signal actually occurs, and it moves when either changes.`,
          `This has a sharp practical implication for evaluating people and systems: criticising someone's false alarm rate without asking about their criterion is usually unfair and often incoherent. A screening programme with many false positives may be correctly calibrated for a disease where misses kill, and "reduce the false positives" without discussing misses is a demand to shift the criterion while pretending to demand better sensitivity. The two are different asks. Improving sensitivity requires better information, better training or better instruments; shifting criterion requires only a decision, and is free — which is precisely why it is the change people unknowingly ask for.`,
        ],
      },
      {
        heading: "ROC and what it solved",
        body: [
          `Plot hit rate against false alarm rate as the criterion sweeps from maximally lenient to maximally strict and you trace a receiver operating characteristic curve. It is called that because it was developed for radar operators in the Second World War, facing exactly this problem: distinguishing aircraft from noise on a screen with an operator whose willingness to call it varied. The curve's shape reflects sensitivity alone; position along it reflects criterion. Its area gives a criterion-free measure of discriminative ability, which is why AUC became the standard metric for classifiers in machine learning.`,
          `The conceptual payoff is that ROC separates a question about the system from a question about its settings. It lets you ask "how good is this detector?" without confounding the answer with "how trigger-happy is it right now?" — a distinction that had genuinely eluded people evaluating radar operators, and that still eludes most public discussion of tests and algorithms. Whenever an accuracy figure is quoted for a screening test or a model, it is a single point on an implicit curve, chosen by someone who set a threshold — and the threshold was a value judgement about which error to prefer, not a technical fact.`,
        ],
      },
      {
        heading: "The colleague who is not more careful, just stricter",
        body: [
          `This gives you a genuinely useful lens on disagreement. When two people looking at the same evidence disagree — is that a real signal in the data, was that noise on the scan, is this candidate good enough — the argument is often not about perception at all but about criterion. One demands more evidence before committing; the other commits sooner. Both may see identically well. Notice too that the person who is right more often about the cases they flag may simply be stricter, catching fewer real cases while looking more reliable. The question worth asking is never just "how often are they right when they say yes?" but "what are they missing when they say no?" — and someone who never makes a false alarm is usually not more skilled, just more conservative.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "reasoning",
        prompt: "Why can a higher hit rate fail to indicate greater ability?",
        choices: [
          { id: "a", label: "A lenient criterion raises hits and false alarms together without improving discrimination" },
          { id: "b", label: "Hit rates are computed differently across observers and are not comparable" },
          { id: "c", label: "Higher hit rates always indicate the observer has seen the stimuli beforehand" },
          { id: "d", label: "Hit rate measures speed of response rather than accuracy of detection" },
        ],
        correctChoiceId: "a",
        explanation: "Anyone can reach a 100% hit rate by saying yes to everything. The radiologist catching more tumours may simply be flagging more of everything — you need hits and false alarms together to recover ability from willingness.",
      },
      {
        dimension: "depth",
        prompt: "What does d' measure?",
        choices: [
          { id: "a", label: "The separation between the signal and noise distributions in units of their spread" },
          { id: "b", label: "The proportion of trials on which the observer responded correctly" },
          { id: "c", label: "The threshold the observer adopts before committing to a yes response" },
          { id: "d", label: "The time taken to reach a decision once the stimulus is presented" },
        ],
        correctChoiceId: "a",
        explanation: "Sensitivity is how far apart the world pushed the two distributions — genuine discriminative ability. Where the observer draws their line within that overlap is criterion, which is a separate and independent quantity.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does the theory assume the two distributions overlap?",
        choices: [
          { id: "a", label: "Internal response varies trial to trial, so strong noise can exceed weak signal" },
          { id: "b", label: "Observers cannot attend to the stimulus continuously across a long session" },
          { id: "c", label: "Measurement instruments introduce error that blurs the true underlying values" },
          { id: "d", label: "Signals are always weaker than the noise present in natural environments" },
        ],
        correctChoiceId: "a",
        explanation: "Both conditions generate distributions of internal activity, and they overlap. A strong noise trial can produce more internal response than a weak signal trial with nothing in the observer's head to distinguish them — so detection becomes deciding, not sensing.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is 'reduce your false positives' often an incoherent demand?",
        choices: [
          { id: "a", label: "It asks for a criterion shift while appearing to ask for better sensitivity, ignoring the misses it causes" },
          { id: "b", label: "False positives cannot be measured independently of the base rate of the condition" },
          { id: "c", label: "Reducing false positives requires new instruments that are rarely available" },
          { id: "d", label: "False positives and hits are mathematically independent of one another" },
        ],
        correctChoiceId: "a",
        explanation: "Tightening the criterion cuts false alarms and raises misses — free, and not an improvement. Raising sensitivity needs better information, training or instruments. Conflating the two is asking for a value judgement while pretending to ask for skill.",
      },
      {
        dimension: "depth",
        prompt: "What does the area under an ROC curve provide?",
        choices: [
          { id: "a", label: "A criterion-free measure of discriminative ability across all possible thresholds" },
          { id: "b", label: "The optimal threshold for a given set of payoffs and base rates" },
          { id: "c", label: "The proportion of cases the detector will classify correctly in practice" },
          { id: "d", label: "The rate at which sensitivity degrades as the signal weakens" },
        ],
        correctChoiceId: "a",
        explanation: "The curve's shape reflects sensitivity while position along it reflects criterion, so its area answers 'how good is this detector?' independently of 'how trigger-happy is it?' — which is why AUC became standard for classifiers.",
      },
    ],
    sources: [
      { label: "Detection theory (overview)", note: "Reference on d', criterion, hits and false alarms.", type: "Reference", url: "https://en.wikipedia.org/wiki/Detection_theory" },
      { label: "Receiver operating characteristic (overview)", note: "Reference on ROC curves, AUC and their wartime radar origin.", type: "Reference", url: "https://en.wikipedia.org/wiki/Receiver_operating_characteristic" },
    ],
  },
  {
    concept: "Cognitive Bias",
    level: "A-level",
    summary: "systematic patterns in judgement under uncertainty",
    estimatedMinutes: 8,
    deck: "Human judgement is not randomly flawed but predictably flawed. Cognitive biases are the systematic errors our minds make, especially under uncertainty — mental shortcuts that usually serve us well but that lead us astray in consistent, exploitable ways. Knowing them is the beginning of thinking more clearly.",
    keyTerms: [
      { label: "Cognitive bias", value: "A systematic, predictable error in judgement or reasoning." },
      { label: "Heuristic", value: "A mental shortcut that gives fast answers but can produce bias." },
      { label: "Confirmation bias", value: "The tendency to seek and favour information that fits existing beliefs." },
      { label: "System 1 and System 2", value: "Fast automatic thinking versus slow deliberate thinking (Kahneman)." },
    ],
    sections: [
      {
        heading: "Predictable errors",
        body: [
          `A cognitive bias is a systematic pattern of deviation from rational judgement — a way our thinking goes wrong that is consistent and predictable, not random. The pioneering work of psychologists Daniel Kahneman and Amos Tversky showed that human judgement, especially under uncertainty, is subject to a whole catalogue of such biases. The key insight is that these errors are not haphazard mistakes but reliable tendencies of the human mind, which means they can be studied, anticipated, and to some extent guarded against.`,
          `Biases arise largely because the mind relies on "heuristics" — mental shortcuts that provide quick, good-enough answers without laborious analysis. These shortcuts are usually adaptive and efficient; we could not function if we deliberated fully over every judgement. But they systematically misfire in certain situations, producing predictable errors. So biases are not signs of stupidity but the flip side of useful mental efficiency: the same shortcuts that let us judge quickly also lead us astray in consistent ways. Understanding them reveals that the flaws in our thinking have a structure.`,
        ],
      },
      {
        heading: "Two systems of thinking",
        body: [
          `Kahneman later popularised a helpful framework: the mind operates in two modes, which he called System 1 and System 2. System 1 is fast, automatic, intuitive and effortless — it produces immediate impressions, gut feelings and snap judgements without conscious effort. System 2 is slow, deliberate, effortful and analytical — the conscious reasoning we do when we concentrate on a hard problem. Most of the time System 1 runs the show, because it is efficient and usually good enough.`,
          `Many cognitive biases arise because System 1's fast, intuitive judgements are wrong in predictable ways, and System 2, which could catch the errors, is lazy and often fails to intervene. We accept the effortless answer System 1 offers rather than doing the hard work of checking it. This framework explains why biases are so persistent: correcting them requires engaging slow, effortful System 2 thinking to override the fast intuitions, which is tiring and which we often skip. Knowing when to distrust a quick intuition and slow down is much of what it means to think well.`,
        ],
      },
      {
        heading: "A gallery of biases",
        body: [
          `Some biases are especially important to know. Confirmation bias is the tendency to seek out, notice and favour information that confirms what we already believe, while ignoring or discounting information that contradicts it — a major reason people cling to false beliefs and talk past each other. The availability heuristic leads us to judge how likely something is by how easily examples come to mind, so vivid, recent or well-publicised events (like plane crashes) seem more probable than they are, while common but unremarkable risks are underestimated.`,
          `Anchoring is the tendency to rely too heavily on the first piece of information encountered, so an initial number biases subsequent judgements even when it is arbitrary. Loss aversion means we feel losses more intensely than equivalent gains, distorting our decisions about risk. The list runs to dozens of documented biases, but the common thread is that they are systematic and shared: because everyone's mind uses similar shortcuts, everyone is prone to similar errors, which is precisely what makes biases both scientifically fascinating and practically dangerous.`,
        ],
      },
      {
        heading: "Living with a biased mind",
        body: [
          `Cognitive biases have huge practical consequences, distorting decisions in medicine, finance, law, politics and daily life, and they are relentlessly exploited by anyone seeking to influence us — advertisers, negotiators, manipulators. Recognising them is genuinely valuable, but it comes with a humbling catch: simply knowing about biases does not make you immune to them. They operate automatically, often below awareness, and even experts who study them remain susceptible. You cannot think your way out of having a fast, shortcut-using mind.`,
          `What awareness can do is help you recognise high-risk situations and build habits and systems that guard against error. Knowing about confirmation bias, you can deliberately seek out disconfirming evidence and opposing views. Knowing about anchoring, you can question initial numbers. More powerfully, you can design processes — checklists, structured decision procedures, seeking outside perspectives, sleeping on big decisions — that catch biases that individual willpower cannot. The realistic goal is not to become perfectly rational, which is impossible, but to know your mind's predictable failings well enough to compensate for them where it matters most.`,
        ],
      },
      {
        heading: "The flaws in your own thinking",
        body: [
          `You run on cognitive biases every day. You notice the news that confirms your existing opinion and dismiss the rest (confirmation bias); you overestimate dramatic risks you have heard about and underestimate mundane ones (availability); you are swayed by the first price you see (anchoring); you feel the pain of losing more than the joy of winning (loss aversion). When you catch yourself certain of a snap judgement, that is fast System 1 thinking, which may or may not be right. The value of knowing your biases is not that you can switch them off — you cannot — but that you can slow down at the moments that matter, seek out views that challenge you, and build habits that compensate for the predictable ways your mind goes wrong.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is a cognitive bias?",
        choices: [
          { id: "a", label: "A systematic, predictable error in judgement — not a random mistake" },
          { id: "b", label: "A random, one-off thinking error" },
          { id: "c", label: "A sign of low intelligence" },
          { id: "d", label: "A deliberate lie" },
        ],
        correctChoiceId: "a",
        explanation: "Cognitive biases are consistent, predictable deviations from rational judgement — reliable tendencies of the mind, not random mistakes, which is why they can be studied and anticipated.",
      },
      {
        dimension: "reasoning",
        prompt: "Why do biases arise from mental 'heuristics'?",
        choices: [
          { id: "a", label: "Because heuristics are efficient shortcuts that usually work but misfire predictably in certain situations" },
          { id: "b", label: "Because heuristics are always wrong" },
          { id: "c", label: "Because heuristics require full deliberation every time" },
          { id: "d", label: "Because heuristics have no effect on judgement" },
        ],
        correctChoiceId: "a",
        explanation: "Heuristics give quick, good-enough answers we could not function without, but the same shortcuts systematically misfire in some situations — so biases are the flip side of useful mental efficiency, not stupidity.",
      },
      {
        dimension: "depth",
        prompt: "In Kahneman's framework, what characterises 'System 1' thinking?",
        choices: [
          { id: "a", label: "Fast, automatic, intuitive and effortless" },
          { id: "b", label: "Slow, deliberate and analytical" },
          { id: "c", label: "Always correct" },
          { id: "d", label: "Only used for hard maths problems" },
        ],
        correctChoiceId: "a",
        explanation: "System 1 is fast, automatic and intuitive, producing snap judgements without effort; System 2 is slow and analytical. Many biases arise when System 1's errors go unchecked because effortful System 2 fails to intervene.",
      },
      {
        dimension: "depth",
        prompt: "What is confirmation bias?",
        choices: [
          { id: "a", label: "The tendency to seek and favour information that fits existing beliefs while ignoring contradicting evidence" },
          { id: "b", label: "Judging probability by how easily examples come to mind" },
          { id: "c", label: "Relying too heavily on the first number seen" },
          { id: "d", label: "Feeling losses more than gains" },
        ],
        correctChoiceId: "a",
        explanation: "Confirmation bias leads us to notice and favour information confirming what we already believe and discount what contradicts it — a major reason people cling to false beliefs and talk past each other.",
      },
      {
        dimension: "reasoning",
        prompt: "Why doesn't simply knowing about biases make you immune to them?",
        choices: [
          { id: "a", label: "Because they operate automatically below awareness, so even experts remain susceptible — awareness helps you build guarding habits, not switch biases off" },
          { id: "b", label: "Because knowing about a bias instantly removes it" },
          { id: "c", label: "Because biases are entirely conscious choices" },
          { id: "d", label: "Because only unintelligent people have biases" },
        ],
        correctChoiceId: "a",
        explanation: "Biases run automatically, often below awareness, so even those who study them stay prone to them; the realistic goal is to recognise high-risk moments and build processes — checklists, seeking opposing views — that compensate.",
      },
    ],
    sources: [
      { label: "Daniel Kahneman, Thinking, Fast and Slow", note: "The classic account of heuristics, biases and the two systems.", type: "Reference", url: "https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow" },
      { label: "Cognitive bias (overview)", note: "Reference on systematic biases and the heuristics behind them.", type: "Reference", url: "https://en.wikipedia.org/wiki/Cognitive_bias" },
    ],
  },
  {
    concept: "Social Identity",
    level: "A-level",
    summary: "self-understanding shaped by group membership",
    estimatedMinutes: 8,
    deck: "Part of who you are comes not from your individual qualities but from the groups you belong to — your nationality, team, profession, faith. Social identity theory shows how powerfully group membership shapes our sense of self, our behaviour, and our tendency to divide the world into 'us' and 'them'.",
    keyTerms: [
      { label: "Social identity", value: "The part of self-concept derived from membership of social groups." },
      { label: "In-group and out-group", value: "The group one belongs to, versus groups one does not." },
      { label: "In-group favouritism", value: "The tendency to favour and think better of one's own group." },
      { label: "Minimal group paradigm", value: "Experiments showing bias arises even from trivial, arbitrary group divisions." },
    ],
    sections: [
      {
        heading: "The group within the self",
        body: [
          `Social identity is the part of a person's self-concept that comes from their membership of social groups. Alongside our "personal identity" — the qualities that make us individuals — we have a social identity built from the groups we belong to: our nation, ethnicity, religion, profession, sports team, political side, and countless others. Developed by the psychologist Henri Tajfel and his colleague John Turner in the 1970s, social identity theory holds that these group memberships are not incidental but a genuine and important part of who we feel we are.`,
          `The theory's central claim is that we derive part of our sense of self, and our self-esteem, from the groups we belong to. When our group does well or is respected, we feel good about ourselves; when it is threatened or disparaged, we feel personally diminished. This is why people can feel genuine pride or shame at the achievements or failures of a group they belong to but had no personal part in — a national sports victory, say. The boundaries of the self extend beyond the individual to encompass the groups we identify with.`,
        ],
      },
      {
        heading: "Us and them",
        body: [
          `A key consequence of social identity is the division of the social world into "in-groups" (groups we belong to) and "out-groups" (groups we do not). Once we identify with a group, we tend to show "in-group favouritism": we view our own group and its members more positively, extend them more trust and generosity, and judge them more charitably, while viewing out-groups less favourably and sometimes with suspicion or hostility. This us-and-them division is a deep and pervasive feature of human social psychology.`,
          `Tajfel's most striking finding was just how easily this division arises. In his "minimal group" experiments, he divided people into groups on utterly trivial and arbitrary bases — even by the flip of a coin, or a meaningless preference — with no history, no contact, no conflict of interest, and no reason for loyalty. Astonishingly, people still favoured their own group, allocating more rewards to in-group members than to out-group members. The mere act of being categorised into a group, however meaningless, was enough to produce in-group favouritism. This suggests the tendency to divide into us and them is remarkably fundamental, not requiring real conflict or history to appear.`,
        ],
      },
      {
        heading: "Why we favour our own",
        body: [
          `The theory explains in-group favouritism through the link between group membership and self-esteem. Because part of our self-worth comes from our groups, we are motivated to see our groups as good and, crucially, as better than other groups — because a favourable comparison with out-groups makes our group, and therefore ourselves, look good. We enhance our own self-image by enhancing the status of our in-group relative to out-groups, which can be done both by boosting our own group and by derogating others.`,
          `This provides a psychological engine for intergroup bias, prejudice and conflict. The desire for positive social identity can drive competition and hostility between groups, as each seeks to see itself as superior. It helps explain phenomena from harmless tribalism, like the fierce loyalties of sports fandom, to the tragic, like ethnic and national hatreds. The unsettling implication is that the roots of prejudice lie partly not in ignorance or particular hatreds but in a basic psychological process — the drive to derive self-esteem from group belonging — that operates in all of us.`,
        ],
      },
      {
        heading: "Working with social identity",
        body: [
          `Understanding social identity has both cautionary and constructive uses. On the cautionary side, it reveals how easily group divisions form and how readily they generate bias, which helps explain and combat prejudice, polarisation and intergroup conflict. It warns that appeals to group identity are powerful tools that can be used to unite people but also to divide them and mobilise hostility, as demagogues throughout history have understood. Recognising the pull of "us versus them" in our own reactions is a first step to resisting its worst effects.`,
          `On the constructive side, the same processes can be harnessed positively. Building a shared, superordinate identity — helping people see themselves as members of a larger common group — can reduce conflict between subgroups, because former out-groups become part of a new, inclusive in-group. Fostering positive group identities can build cohesion, belonging and cooperation. Social identity is a fundamental feature of human psychology that shapes belonging, loyalty and division alike; understanding it lets us both guard against its dangers and use its power to build connection rather than conflict.`,
        ],
      },
      {
        heading: "Why you cheer for 'your' team",
        body: [
          `You feel social identity whenever a group becomes part of "you". The surge of joy when your national or local team wins, though you did nothing but watch; the instant warmth toward a stranger who supports the same club or shares your background; the way an insult to a group you belong to feels personal — all are social identity at work. Notice, too, how quickly you form "us and them" divisions, even over trivial things, and how you extend more charity to "your" people than to outsiders. Recognising this deep tendency in yourself is valuable: it helps you enjoy the belonging that group identity offers while staying alert to the same process's power to breed unfair bias, division and hostility toward those you have cast as "them".`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is social identity?",
        choices: [
          { id: "a", label: "The part of self-concept derived from membership of social groups" },
          { id: "b", label: "The qualities that make someone a unique individual" },
          { id: "c", label: "A person's legal name and documents" },
          { id: "d", label: "Someone's memory of their childhood" },
        ],
        correctChoiceId: "a",
        explanation: "Social identity, from Tajfel and Turner, is the part of self-concept built from the groups we belong to — nation, team, profession — a genuine and important part of who we feel we are.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can people feel genuine pride at a group achievement they had no part in?",
        choices: [
          { id: "a", label: "Because we derive part of our self-esteem from our groups, so the group's success feels like our own" },
          { id: "b", label: "Because they secretly did contribute" },
          { id: "c", label: "Because groups have no effect on the self" },
          { id: "d", label: "Because pride is unrelated to identity" },
        ],
        correctChoiceId: "a",
        explanation: "Because part of our sense of self and self-esteem comes from our groups, when the group does well we feel good — which is why a national sports victory can produce genuine personal pride.",
      },
      {
        dimension: "reasoning",
        prompt: "What did the 'minimal group' experiments reveal?",
        choices: [
          { id: "a", label: "That in-group favouritism arises even from trivial, arbitrary group divisions with no real conflict or history" },
          { id: "b", label: "That people never favour their own group" },
          { id: "c", label: "That bias requires long histories of conflict" },
          { id: "d", label: "That group membership has no effect on behaviour" },
        ],
        correctChoiceId: "a",
        explanation: "Dividing people on utterly trivial bases — even a coin flip — still produced favouritism toward their own group, showing the us-and-them tendency is remarkably fundamental, not requiring real conflict to appear.",
      },
      {
        dimension: "reasoning",
        prompt: "How does social identity theory explain in-group favouritism?",
        choices: [
          { id: "a", label: "Because self-esteem comes partly from our groups, we are motivated to see them as better than others, enhancing our own self-image" },
          { id: "b", label: "Because people dislike their own groups" },
          { id: "c", label: "Because favouritism has no psychological cause" },
          { id: "d", label: "Because out-groups are always genuinely superior" },
        ],
        correctChoiceId: "a",
        explanation: "Since part of our self-worth derives from our groups, we favour them and seek favourable comparisons with out-groups to make our group, and ourselves, look good — a psychological engine for intergroup bias.",
      },
      {
        dimension: "depth",
        prompt: "How can social identity processes be used constructively to reduce conflict?",
        choices: [
          { id: "a", label: "By building a shared, superordinate identity so former out-groups become part of a larger common in-group" },
          { id: "b", label: "By emphasising differences between groups" },
          { id: "c", label: "By abolishing all group belonging" },
          { id: "d", label: "By increasing competition between groups" },
        ],
        correctChoiceId: "a",
        explanation: "Helping people see themselves as members of a larger common group turns former out-groups into part of a new inclusive in-group, reducing conflict — the same identity processes harnessed to build cohesion rather than division.",
      },
    ],
    sources: [
      { label: "Social identity theory (overview)", note: "Reference on Tajfel, Turner, in-group bias and minimal groups.", type: "Reference", url: "https://en.wikipedia.org/wiki/Social_identity_theory" },
      { label: "OpenStax, Psychology: Social Psychology", note: "Open textbook material on groups, identity and prejudice.", type: "Textbook", url: "https://openstax.org/details/books/psychology-2e" },
    ],
  },
  {
    concept: "Stress Response",
    level: "A-level",
    summary: "physiological and psychological mobilisation under perceived demand",
    estimatedMinutes: 8,
    deck: "Faced with a threat, your body launches an ancient, automatic emergency response — heart pounding, senses sharpened, energy mobilised for fight or flight. This stress response is a brilliant survival system for short-term danger, but it becomes corrosive when a modern life of chronic pressure keeps it switched on with no off switch.",
    keyTerms: [
      { label: "Stress response", value: "The body's physiological and psychological mobilisation to a perceived demand or threat." },
      { label: "Fight-or-flight", value: "The acute response preparing the body to confront or flee danger." },
      { label: "Cortisol", value: "A key stress hormone released to sustain the response to demand." },
      { label: "Acute vs chronic stress", value: "Short-term stress that resolves, versus prolonged stress that harms health." },
    ],
    sections: [
      {
        heading: "The emergency system",
        body: [
          `The stress response is the body's automatic reaction to a perceived demand or threat — a coordinated mobilisation of body and mind to help cope with a challenge. It is triggered not only by physical danger but by any situation the mind appraises as demanding or threatening, from a charging animal to a job interview. When triggered, it produces the familiar physical signs of stress: racing heart, rapid breathing, heightened alertness, tensed muscles, a surge of energy. This is the body gearing up for action.`,
          `Crucially, the stress response is largely automatic and rooted in ancient survival mechanisms shared with other animals. It evolved to help our ancestors survive immediate physical dangers, and it is superbly designed for that purpose: it prepares the body to deal with an emergency right now. What matters is that a great deal of what happens when we are "stressed" is not a psychological weakness but a physiological system doing exactly what it evolved to do — mobilising resources to meet a perceived threat.`,
        ],
      },
      {
        heading: "Fight or flight",
        body: [
          `The acute stress response is often called "fight-or-flight", a term coined by the physiologist Walter Cannon. Faced with sudden danger, the body rapidly prepares either to fight the threat or to flee from it. The nervous system triggers the release of adrenaline, which produces the immediate changes: the heart beats faster to pump blood to the muscles, breathing quickens to take in more oxygen, the senses sharpen, and energy stores are released into the bloodstream. Non-essential functions like digestion are suppressed, because they can wait. The whole body is primed for vigorous physical action.`,
          `This response is beautifully adaptive for its original purpose. Facing a predator, the animal that instantly mobilises to fight or flee survives; hesitation is fatal. The changes are exactly what physical survival demands — more oxygen and fuel to the muscles, faster reactions, reduced sensitivity to pain. Alongside fight-or-flight, researchers have noted other responses like "freeze" (becoming still to avoid detection), and, particularly noted in humans, a "tend-and-befriend" response of seeking social support and protecting others under threat. But the core acute response remains a rapid, automatic priming of the body to deal with immediate danger.`,
        ],
      },
      {
        heading: "When stress won't switch off",
        body: [
          `The stress response works brilliantly for short-term threats that are quickly resolved: the danger passes, the body returns to normal, and no harm is done. The problem is that in modern life, many stressors are not brief physical emergencies but ongoing psychological pressures — money worries, difficult relationships, relentless work, chronic insecurity — that do not resolve quickly. When the stress response is triggered repeatedly or continuously over long periods, it becomes "chronic stress", and the same system that saves us in emergencies begins to harm us.`,
          `Sustained stress keeps the body flooded with stress hormones, particularly cortisol, which is useful in short bursts but damaging when chronically elevated. Prolonged chronic stress is linked to a wide range of health problems — cardiovascular disease, weakened immune function, digestive and sleep problems, anxiety and depression. The physiologist Hans Selye described how the body, under prolonged stress, moves from an initial alarm reaction through a stage of resistance to eventual exhaustion, as its resources are depleted. The mismatch is the core problem: a response evolved for brief physical emergencies is repeatedly triggered by unrelenting modern pressures it was never designed for, and never fully switches off.`,
        ],
      },
      {
        heading: "Managing the response",
        body: [
          `Understanding the stress response points toward how to manage it. Because the response is triggered by the mind's appraisal of a situation as threatening, how we interpret events matters: the same situation can be experienced as a threat or as a challenge, and reframing can change the physiological response. Not all stress is harmful — short-term, manageable stress (sometimes called "eustress") can sharpen performance and is part of a healthy, engaged life. The danger is chronic, unrelenting stress with no recovery.`,
          `Practical management works partly by giving the body the recovery the system needs. Physical exercise, which "uses up" the mobilised fight-or-flight energy and then allows the body to return to rest, is particularly effective, as our ancestors' stress would naturally have been followed by physical action and then calm. Relaxation techniques, adequate sleep, and social support all help the body return to its resting state and buffer the effects of stress. Crucially, recognising that the stress response is a physiological system, not a character flaw, both reduces the shame around feeling stressed and points to concrete, bodily ways of managing it — restoring the balance between mobilisation and recovery that chronic modern stress disrupts.`,
        ],
      },
      {
        heading: "Why your heart races before a big moment",
        body: [
          `You know the stress response from the inside: the pounding heart before an exam or interview, the surge of energy in a near-miss, the tense, wired feeling before something important. That is fight-or-flight, an ancient system mobilising you for a threat your mind has detected — not weakness, but physiology. You may also know its darker, chronic form: the grinding, unrelenting stress of ongoing pressures that never quite resolve, and its toll on sleep, mood and health. Recognising that a response built for brief physical emergencies is being triggered by modern pressures it was never designed for helps make sense of why chronic stress is so harmful, and why the remedies — exercise, rest, social support, reframing threats as challenges — work by restoring the recovery the system needs and rarely gets.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What triggers the stress response?",
        choices: [
          { id: "a", label: "Any situation the mind appraises as demanding or threatening, physical or psychological" },
          { id: "b", label: "Only literal physical attacks" },
          { id: "c", label: "Only pleasant experiences" },
          { id: "d", label: "Nothing; it is always active" },
        ],
        correctChoiceId: "a",
        explanation: "The stress response is an automatic mobilisation to any perceived demand or threat — from a charging animal to a job interview — producing racing heart, heightened alertness and mobilised energy.",
      },
      {
        dimension: "depth",
        prompt: "What does the acute 'fight-or-flight' response prepare the body to do?",
        choices: [
          { id: "a", label: "Take vigorous physical action — confront or flee a threat — by boosting heart rate, breathing and energy to the muscles" },
          { id: "b", label: "Fall asleep" },
          { id: "c", label: "Digest food more efficiently" },
          { id: "d", label: "Slow the heart and relax" },
        ],
        correctChoiceId: "a",
        explanation: "Adrenaline speeds the heart and breathing, sharpens the senses and releases energy to the muscles while suppressing non-essential functions like digestion — priming the body for immediate physical action against danger.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is the stress response, so adaptive for short-term threats, harmful in modern life?",
        choices: [
          { id: "a", label: "Because many modern stressors are ongoing psychological pressures that keep the response chronically triggered, harming health" },
          { id: "b", label: "Because it never activates in modern life" },
          { id: "c", label: "Because modern threats are always physical and brief" },
          { id: "d", label: "Because cortisol is always beneficial" },
        ],
        correctChoiceId: "a",
        explanation: "The response evolved for brief physical emergencies that quickly resolve, but modern pressures like money worries and chronic work keep it triggered continuously, flooding the body with cortisol and causing long-term harm.",
      },
      {
        dimension: "depth",
        prompt: "What harm is linked to chronically elevated stress hormones like cortisol?",
        choices: [
          { id: "a", label: "Cardiovascular disease, weakened immunity, sleep and digestive problems, anxiety and depression" },
          { id: "b", label: "Improved long-term health" },
          { id: "c", label: "No effect at all" },
          { id: "d", label: "Only temporary tiredness" },
        ],
        correctChoiceId: "a",
        explanation: "Cortisol is useful in short bursts but damaging when chronically elevated; prolonged chronic stress is linked to heart disease, weakened immune function, sleep and digestive problems, anxiety and depression.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is physical exercise particularly effective for managing stress?",
        choices: [
          { id: "a", label: "It uses up the mobilised fight-or-flight energy and lets the body return to rest, as stress was naturally meant to be followed by action then calm" },
          { id: "b", label: "It permanently switches off the stress response" },
          { id: "c", label: "It increases cortisol forever" },
          { id: "d", label: "It has no effect on stress" },
        ],
        correctChoiceId: "a",
        explanation: "The stress response mobilises the body for physical action; exercise 'uses up' that energy and allows a return to rest, mirroring how our ancestors' stress was followed by physical action and then calm — restoring the recovery the system needs.",
      },
    ],
    sources: [
      { label: "OpenStax, Psychology: Stress and Health", note: "Open textbook material on the stress response and its effects.", type: "Textbook", url: "https://openstax.org/details/books/psychology-2e" },
      { label: "Fight-or-flight response (overview)", note: "Reference on acute and chronic stress and their physiology.", type: "Reference", url: "https://en.wikipedia.org/wiki/Fight-or-flight_response" },
    ],
  },
  {
    concept: "Motivation",
    level: "A-level",
    summary: "processes that initiate, direct and sustain behaviour",
    estimatedMinutes: 8,
    deck: "Why do we do anything at all? Motivation is the set of forces that get us started, point us in a direction, and keep us going. Its study holds a genuinely surprising finding: that paying people to do something they already love can make them love it less — a clue that the deepest motivation comes from within.",
    keyTerms: [
      { label: "Motivation", value: "The processes that initiate, direct and sustain goal-directed behaviour." },
      { label: "Intrinsic motivation", value: "Doing something for its own inherent satisfaction." },
      { label: "Extrinsic motivation", value: "Doing something for an external reward or to avoid punishment." },
      { label: "Overjustification effect", value: "How external rewards can undermine intrinsic motivation." },
    ],
    sections: [
      {
        heading: "What drives behaviour",
        body: [
          `Motivation refers to the processes that initiate, direct and sustain goal-directed behaviour — the forces that get us to act, steer us toward particular goals, and keep us persisting. It is the answer to "why" questions about behaviour: why someone gets out of bed, works hard, pursues a hobby, or gives up. Understanding motivation is central to psychology because it underlies achievement, learning, well-being and the direction of a life, and because the practical question of how to motivate ourselves and others is one everyone faces.`,
          `Motivations are often divided into those rooted in basic biological needs — hunger, thirst, warmth, safety — and higher psychological ones — achievement, connection, meaning, mastery. Abraham Maslow famously arranged human needs in a hierarchy, from basic physiological and safety needs at the base up through belonging and esteem to "self-actualisation" (fulfilling one's potential) at the top, suggesting lower needs generally take priority. Though the strict hierarchy has been criticised, the underlying idea — that we are driven by a range of needs from the physical to the deeply psychological — remains useful for thinking about what moves people.`,
        ],
      },
      {
        heading: "Inside and outside",
        body: [
          `A fundamental and practically vital distinction is between intrinsic and extrinsic motivation. Intrinsic motivation is doing something for its own sake — because it is inherently interesting, enjoyable or satisfying. You play a game, read a book, or pursue a hobby intrinsically when the activity itself is the reward. Extrinsic motivation is doing something for an external reason — a reward, money, grades, praise, or the avoidance of punishment. Here the activity is a means to a separate end, not rewarding in itself.`,
          `This distinction matters because the two kinds of motivation feel different and behave differently. Intrinsically motivated activity tends to be more engaged, creative, persistent and satisfying; we throw ourselves into things we find inherently rewarding. Extrinsic motivation is powerful but can be shallower, lasting only as long as the reward, and it can crowd out enjoyment. Much of the art of motivating well — in education, work and parenting — is about the balance between the two, and especially about not undermining intrinsic motivation, which turns out to be surprisingly easy to do.`,
        ],
      },
      {
        heading: "The surprising cost of rewards",
        body: [
          `One of psychology's most striking and counterintuitive findings is the "overjustification effect": rewarding someone for an activity they already enjoy can actually reduce their intrinsic motivation for it. In classic experiments, children who loved drawing were given a reward for drawing; afterwards, when the reward was removed, they drew less than children who had never been rewarded. The external reward seemed to undermine their internal love of the activity. Having been paid to draw, they came to see drawing as work done for a reward rather than play done for its own sake.`,
          `The likely explanation is that the reward changes how people understand their own behaviour: "I must be doing this for the reward, not because I love it," which erodes the intrinsic motivation once the reward is gone. This has profound implications: incentives, so often assumed to be straightforwardly motivating, can backfire by crowding out the deeper, more sustainable motivation that comes from within. It is a caution against assuming that the way to make people do more of something is always to pay them for it, and a clue that intrinsic motivation is both valuable and fragile.`,
        ],
      },
      {
        heading: "What fosters lasting motivation",
        body: [
          `If external rewards can undermine motivation, what sustains it? Influential research by psychologists Edward Deci and Richard Ryan, known as self-determination theory, argues that intrinsic motivation flourishes when three basic psychological needs are met. The first is autonomy — the sense of acting from one's own choice rather than being controlled. The second is competence — the feeling of being effective and capable, of mastering challenges. The third is relatedness — feeling connected to and valued by others.`,
          `When activities and environments support these three needs, people tend to be more intrinsically motivated, engaged and well. This helps explain why the same task can feel energising or draining depending on how it is framed and structured: work that offers genuine choice, achievable challenge and connection nourishes motivation, while work that is coercive, either trivially easy or hopelessly hard, and isolating drains it. The practical lesson is that lasting motivation is best fostered not primarily by piling on external rewards and pressures, but by creating conditions of autonomy, competence and connection that let intrinsic motivation grow. Understanding this transforms how we think about motivating ourselves and others.`,
        ],
      },
      {
        heading: "Why the paid hobby loses its shine",
        body: [
          `You have felt these dynamics in your own life. Think of something you love doing for its own sake — a hobby, a sport, a creative pursuit — and notice how different it feels from a task you do only for a reward or to avoid trouble; that is intrinsic versus extrinsic motivation. Many people have experienced the overjustification effect directly: turning a beloved hobby into a paid job and finding the joy drains away, as the activity becomes work done for money. And you can probably identify when you feel most motivated — usually when you have genuine choice (autonomy), are stretched but capable (competence), and feel connected to others (relatedness). Understanding motivation lets you protect the intrinsic love that sustains long-term effort, and design your work and habits to nourish it rather than accidentally crushing it with the wrong kind of pressure.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is the difference between intrinsic and extrinsic motivation?",
        choices: [
          { id: "a", label: "Intrinsic motivation is doing something for its own inherent satisfaction; extrinsic is doing it for an external reward or to avoid punishment" },
          { id: "b", label: "Intrinsic is for money; extrinsic is for enjoyment" },
          { id: "c", label: "They are the same thing" },
          { id: "d", label: "Intrinsic motivation only applies to children" },
        ],
        correctChoiceId: "a",
        explanation: "Intrinsic motivation means the activity itself is the reward (a hobby you love); extrinsic motivation means doing it as a means to a separate end — a reward, grade, or avoiding punishment.",
      },
      {
        dimension: "depth",
        prompt: "What is at the top of Maslow's hierarchy of needs?",
        choices: [
          { id: "a", label: "Self-actualisation — fulfilling one's potential" },
          { id: "b", label: "Basic physiological needs like food and water" },
          { id: "c", label: "Safety and security" },
          { id: "d", label: "Financial wealth" },
        ],
        correctChoiceId: "a",
        explanation: "Maslow arranged needs from physiological and safety needs at the base, through belonging and esteem, up to self-actualisation — fulfilling one's potential — at the top, though the strict hierarchy has been criticised.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the 'overjustification effect'?",
        choices: [
          { id: "a", label: "Rewarding someone for an activity they already enjoy can reduce their intrinsic motivation for it" },
          { id: "b", label: "Rewards always increase motivation permanently" },
          { id: "c", label: "People only ever act for rewards" },
          { id: "d", label: "Intrinsic motivation cannot be affected by rewards" },
        ],
        correctChoiceId: "a",
        explanation: "Paying children to draw, an activity they loved, made them draw less once the reward stopped — the external reward crowded out their internal love, as they came to see it as work done for a reward rather than play.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can external rewards backfire, according to the overjustification effect?",
        choices: [
          { id: "a", label: "The reward changes how people understand their behaviour ('I do this for the reward, not because I love it'), eroding intrinsic motivation" },
          { id: "b", label: "Rewards make activities physically harder" },
          { id: "c", label: "Rewards are always too small" },
          { id: "d", label: "People forget the activity entirely" },
        ],
        correctChoiceId: "a",
        explanation: "The reward shifts self-perception toward 'I must be doing this for the reward', so when it is removed the intrinsic motivation, now undermined, is weaker — a caution that incentives can crowd out deeper motivation.",
      },
      {
        dimension: "depth",
        prompt: "What three needs does self-determination theory say foster intrinsic motivation?",
        choices: [
          { id: "a", label: "Autonomy, competence and relatedness" },
          { id: "b", label: "Money, status and power" },
          { id: "c", label: "Food, safety and shelter" },
          { id: "d", label: "Fear, reward and punishment" },
        ],
        correctChoiceId: "a",
        explanation: "Deci and Ryan's self-determination theory holds that intrinsic motivation flourishes when three needs are met: autonomy (acting from one's own choice), competence (feeling capable), and relatedness (feeling connected to others).",
      },
    ],
    sources: [
      { label: "OpenStax, Psychology: Motivation", note: "Open textbook material on motivation, Maslow and drives.", type: "Textbook", url: "https://openstax.org/details/books/psychology-2e" },
      { label: "Self-determination theory (overview)", note: "Reference on intrinsic motivation, autonomy, competence and relatedness.", type: "Reference", url: "https://en.wikipedia.org/wiki/Self-determination_theory" },
    ],
  },
  {
    concept: "Attachment",
    level: "University",
    summary: "relationship patterns shaped by early bonds and later expectations",
    estimatedMinutes: 9,
    deck: "The bonds we form with our earliest caregivers may leave a lasting imprint on how we relate to others for the rest of our lives. Attachment theory maps how these early relationships shape a deep, often unconscious template for intimacy, trust and security — one that echoes into our adult friendships and love.",
    keyTerms: [
      { label: "Attachment", value: "The deep emotional bond between a child and caregiver, and its lasting relational patterns." },
      { label: "Attachment styles", value: "Characteristic patterns of relating — secure, anxious, avoidant — first seen in infancy." },
      { label: "The strange situation", value: "Ainsworth's experiment classifying infant attachment patterns." },
      { label: "Internal working model", value: "A mental template of relationships formed from early experience." },
    ],
    sections: [
      {
        heading: "The first bond",
        body: [
          `Attachment theory, developed by the British psychiatrist John Bowlby in the mid-20th century, concerns the deep emotional bond that forms between an infant and its primary caregivers, and the lasting influence of that bond. Bowlby argued that human infants have an innate, evolved need to form a close attachment to a caregiver, because a helpless infant's survival depends on keeping a protector close. This attachment is not merely about being fed; it is a fundamental emotional need for security and closeness, as basic as any physical need.`,
          `Bowlby's key insight was that the quality of this early attachment shapes the child's developing sense of security and their expectations about relationships. A caregiver who is consistently responsive and available provides a "secure base" from which the child can confidently explore the world, returning for comfort when distressed. The experience of whether one's needs for comfort and security are reliably met, or not, in these earliest relationships lays down a foundation for how the person will approach closeness and trust throughout life — one of developmental psychology's most influential and enduring claims.`,
        ],
      },
      {
        heading: "The strange situation",
        body: [
          `Bowlby's ideas were given empirical grounding by the psychologist Mary Ainsworth, who devised a laboratory procedure called the "strange situation" to observe and classify infant attachment. In it, a child plays in a room, is briefly separated from and then reunited with their caregiver, and a stranger comes and goes. By watching how the infant responds — particularly to the separations and, crucially, the reunions — Ainsworth identified distinct patterns of attachment.`,
          `Securely attached infants used the caregiver as a secure base, exploring happily, showing some distress at separation, and being readily comforted on reunion. Insecurely attached infants showed different patterns: "anxious" (or ambivalent) infants were very distressed at separation and hard to soothe on reunion, seeming both to seek and resist comfort; "avoidant" infants showed little distress at separation and avoided or ignored the caregiver on reunion, appearing indifferent. (A fourth, "disorganised" pattern, marked by confused or contradictory behaviour, was identified later.) These patterns were linked to differences in how caregivers typically responded to the child — securely attached children generally having had more consistently sensitive and responsive care.`,
        ],
      },
      {
        heading: "The internal working model",
        body: [
          `The mechanism Bowlby proposed for how early attachment has lasting effects is the "internal working model": a mental template or set of expectations about relationships, formed from early attachment experiences. Based on how their earliest relationships went — whether caregivers were reliable and comforting, or inconsistent, rejecting or frightening — a child builds an internal model of what to expect from close others, and of whether they themselves are worthy of care. This model then shapes how they approach and interpret later relationships.`,
          `A child who experienced responsive care tends to develop a model in which others can be trusted and the self is worthy of love, supporting secure relationships later. A child whose needs were inconsistently or poorly met may develop a model of others as unreliable and relationships as anxious or unsafe, shaping later difficulties with trust and intimacy. Crucially, these working models operate largely outside conscious awareness, as deep-seated assumptions rather than explicit beliefs, which is part of why early attachment can have such a persistent, hard-to-articulate influence on how we relate to others.`,
        ],
      },
      {
        heading: "From cradle to adult relationships",
        body: [
          `A major and influential extension of attachment theory holds that these early patterns echo into adult relationships. Researchers have described adult attachment styles — broadly secure, anxious and avoidant — that resemble the infant patterns and shape how people approach romantic and close relationships. Securely attached adults tend to be comfortable with intimacy and trust; anxiously attached adults may crave closeness but fear abandonment and seek constant reassurance; avoidantly attached adults may value independence and feel uncomfortable with too much closeness. These styles are thought to reflect, in part, the internal working models laid down in early life.`,
          `Two important cautions temper this. First, attachment patterns are influences, not iron destinies: early attachment shapes but does not rigidly determine adult relationships, and attachment styles can and do change through later experiences, significant relationships, and therapy. The internal working model can be revised. Second, the theory should not be used to simplistically blame parents or to fatalistically doom those with difficult early experiences. What attachment theory offers is a powerful framework for understanding how early relationships can leave lasting emotional patterns, why relating to others feels the way it does, and how those patterns, once understood, can be worked with and changed rather than merely suffered.`,
        ],
      },
      {
        heading: "The patterns in your own relationships",
        body: [
          `Attachment offers a lens on your own relational life. You may recognise yourself or others in the styles — the person comfortable with closeness and trust, the one who craves reassurance and fears being left, the one who keeps others at arm's length and prizes independence. Noticing how you respond to closeness, conflict and separation in relationships can reveal an internal working model formed long ago, operating beneath conscious thought. The genuinely hopeful message of the theory is that these patterns, though deep, are not fixed: understanding where they come from, and having new, healthier relational experiences, can gradually revise the template. Attachment theory is not a life sentence handed down in childhood but a map of how early bonds shape us — and, once understood, a guide to relating differently.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What did Bowlby argue about infant attachment?",
        choices: [
          { id: "a", label: "That infants have an innate, evolved need to form a close attachment to a caregiver for security, not merely for feeding" },
          { id: "b", label: "That attachment is purely about being fed" },
          { id: "c", label: "That infants form no emotional bonds" },
          { id: "d", label: "That attachment has no lasting influence" },
        ],
        correctChoiceId: "a",
        explanation: "Bowlby argued infants have an evolved need to form a close attachment for security and closeness — as basic as a physical need — because staying near a protector aided survival, and this bond shapes later expectations of relationships.",
      },
      {
        dimension: "depth",
        prompt: "What did Ainsworth's 'strange situation' study observe to classify attachment?",
        choices: [
          { id: "a", label: "How infants responded to brief separations from and reunions with their caregiver" },
          { id: "b", label: "How fast infants could crawl" },
          { id: "c", label: "How much infants ate" },
          { id: "d", label: "How infants responded only to strangers" },
        ],
        correctChoiceId: "a",
        explanation: "Ainsworth watched how infants reacted to separations and, crucially, reunions with the caregiver, identifying secure, anxious and avoidant patterns linked to how sensitively caregivers typically responded.",
      },
      {
        dimension: "depth",
        prompt: "What is an 'internal working model'?",
        choices: [
          { id: "a", label: "A mental template of expectations about relationships, formed from early attachment experiences" },
          { id: "b", label: "A conscious plan for making friends" },
          { id: "c", label: "A physical part of the brain" },
          { id: "d", label: "A parenting technique" },
        ],
        correctChoiceId: "a",
        explanation: "The internal working model is a largely unconscious template of what to expect from close others, and of one's own worthiness of care, built from early experience and shaping how later relationships are approached and interpreted.",
      },
      {
        dimension: "reasoning",
        prompt: "How do securely and anxiously attached adults tend to differ?",
        choices: [
          { id: "a", label: "Secure adults are comfortable with intimacy and trust; anxious adults crave closeness but fear abandonment and seek reassurance" },
          { id: "b", label: "They are identical" },
          { id: "c", label: "Secure adults avoid all relationships" },
          { id: "d", label: "Anxious adults never want closeness" },
        ],
        correctChoiceId: "a",
        explanation: "Adult attachment styles echo infant patterns: secure adults are comfortable with intimacy and trust, while anxiously attached adults crave closeness yet fear abandonment and seek constant reassurance.",
      },
      {
        dimension: "reasoning",
        prompt: "What important caution should temper attachment theory?",
        choices: [
          { id: "a", label: "Early patterns are influences, not iron destinies — attachment styles can change through later experiences and therapy" },
          { id: "b", label: "Attachment permanently and rigidly determines all adult relationships" },
          { id: "c", label: "Attachment has no effect on adults" },
          { id: "d", label: "Only parents matter and nothing can change" },
        ],
        correctChoiceId: "a",
        explanation: "Attachment shapes but does not rigidly determine adult relationships; the internal working model can be revised through later relationships and therapy, so the theory is a map of influence, not a childhood life sentence.",
      },
    ],
    sources: [
      { label: "Attachment theory (overview)", note: "Reference on Bowlby, Ainsworth, attachment styles and working models.", type: "Reference", url: "https://en.wikipedia.org/wiki/Attachment_theory" },
      { label: "OpenStax, Psychology: Lifespan Development", note: "Open textbook material on attachment and early development.", type: "Textbook", url: "https://openstax.org/details/books/psychology-2e" },
    ],
  },
  {
    concept: "Metacognition",
    level: "University",
    summary: "awareness and regulation of one's own thinking",
    estimatedMinutes: 9,
    deck: "Metacognition is thinking about thinking — the mind's ability to monitor and steer itself. It sounds abstract, but it has a hugely practical payoff: much of the difference between effective and ineffective learners comes down to how well they judge what they know, and the most comfortable study methods are often the least effective.",
    keyTerms: [
      { label: "Metacognition", value: "Awareness and regulation of one's own thinking and learning." },
      { label: "Monitoring", value: "Judging one's own understanding — how well one knows something." },
      { label: "Regulation", value: "Adjusting one's learning strategies based on that monitoring." },
      { label: "Illusion of knowing", value: "Mistaking familiarity with material for genuine understanding." },
    ],
    sections: [
      {
        heading: "Thinking about thinking",
        body: [
          `Metacognition is, literally, cognition about cognition — thinking about one's own thinking. It is the mind's capacity to monitor and control its own mental processes: to be aware of what one knows and does not know, to judge how well one understands something, to notice when one is confused, and to choose and adjust strategies accordingly. Where ordinary cognition is directed at the world (thinking about a problem), metacognition is directed at the mind itself (thinking about how one is thinking about the problem). It is a kind of internal self-monitoring and self-steering.`,
          `This capacity has two broad components. One is metacognitive knowledge — what we know about how thinking and learning work, including our own strengths, weaknesses and strategies. The other is metacognitive regulation — the active monitoring and control of our thinking as we go: planning how to approach a task, monitoring our progress and understanding, and adjusting our approach when needed. Together these let us manage our own minds, and they turn out to be central to effective learning, problem-solving and self-improvement.`,
        ],
      },
      {
        heading: "Monitoring: knowing what you know",
        body: [
          `A crucial metacognitive skill is accurate monitoring: judging correctly how well you actually understand or know something. This sounds simple but is surprisingly hard, and people are often badly miscalibrated, either underestimating or, more commonly and more dangerously, overestimating their own knowledge and understanding. We frequently think we understand something better than we do, a failure of metacognitive monitoring with serious consequences for learning.`,
          `The classic manifestation is the "illusion of knowing" (or fluency illusion): mistaking familiarity with material for genuine understanding or mastery. When you re-read your notes and everything looks familiar, it feels like you know it — but familiarity is not the same as being able to recall or use the information, and this comfortable feeling of knowing can be a false signal. Students who rely on this feeling often get an unpleasant surprise in the exam, when they discover that recognising material on the page is very different from retrieving it from memory unaided. Good metacognition means learning to distrust the feeling of familiarity and to test your knowledge honestly.`,
        ],
      },
      {
        heading: "The most effective methods feel the worst",
        body: [
          `Research on learning has produced a striking and counterintuitive finding with deep metacognitive roots: the study methods that feel most effective are often the least effective, and vice versa. Re-reading and highlighting feel productive because they are easy and generate a comforting sense of familiarity, but they produce weak, shallow learning. By contrast, methods that feel harder and less pleasant — actively testing yourself by trying to recall information (retrieval practice), and spacing study out over time rather than cramming — produce far stronger, more durable learning, even though they feel more effortful and can create a sense that you know less.`,
          `This mismatch between how learning feels and how effective it actually is is a metacognitive trap. Because we judge our learning by the fluency and comfort of the experience, we are drawn to the easy methods that feel good but teach little, and we avoid the effortful methods — sometimes called "desirable difficulties" — that feel harder but work far better. Good metacognition means overriding these misleading feelings: recognising that the struggle of retrieval and spacing is a sign of effective learning, not of failure, and choosing methods based on evidence of what works rather than on what feels comfortable. This single insight can transform how effectively someone studies.`,
        ],
      },
      {
        heading: "Regulating your own learning",
        body: [
          `Beyond monitoring, metacognition involves regulation: using your awareness of your own understanding to control and adjust your learning. This is the practical payoff. A metacognitively skilled learner plans their approach, continually checks whether they are actually understanding, notices when they are confused or a strategy is not working, and changes course accordingly — spending more time on weak areas, switching methods, seeking help, or testing themselves to find the gaps. Metacognition turns learning from a passive absorption into an actively managed process.`,
          `This self-regulation is one of the strongest predictors of learning success, often more important than raw ability. Learners who accurately monitor their understanding and adjust their strategies outperform those who study hard but blindly, because they direct their effort where it is needed and avoid the traps of illusory knowing and ineffective methods. Metacognition can also be taught and developed, which is why it is so valuable: explicitly teaching learners to monitor their understanding, test themselves, and manage their own learning improves outcomes. The broader lesson reaches beyond study: being able to step back and observe one's own thinking — to notice one's assumptions, biases and confusions — is a foundation for clearer thinking and better decisions in every area of life.`,
        ],
      },
      {
        heading: "Why re-reading fools you",
        body: [
          `You have almost certainly been fooled by weak metacognition. If you have ever revised by re-reading notes until they felt familiar, walked into an exam confident, and then found you could not actually recall the material, you met the illusion of knowing head-on — familiarity masquerading as understanding. If you have ever avoided testing yourself because it felt uncomfortable and revealed how much you did not know, you were fleeing exactly the effortful method that works best. The practical upshot of metacognition is genuinely powerful: judge your learning by whether you can recall and use information, not by whether it feels familiar; embrace the productive discomfort of self-testing and spacing; and get in the habit of stepping back to observe your own thinking. Knowing how your mind learns, and steering it accordingly, is one of the most useful skills there is.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is metacognition?",
        choices: [
          { id: "a", label: "Awareness and regulation of one's own thinking — thinking about thinking" },
          { id: "b", label: "Thinking very quickly" },
          { id: "c", label: "Memorising large amounts of information" },
          { id: "d", label: "A type of emotion" },
        ],
        correctChoiceId: "a",
        explanation: "Metacognition is cognition about cognition: the mind's capacity to monitor and control its own processes — judging what it knows, noticing confusion, and choosing strategies accordingly.",
      },
      {
        dimension: "depth",
        prompt: "What is the 'illusion of knowing'?",
        choices: [
          { id: "a", label: "Mistaking familiarity with material for genuine understanding or mastery" },
          { id: "b", label: "Knowing something perfectly" },
          { id: "c", label: "Forgetting everything you learned" },
          { id: "d", label: "Deliberately pretending to know" },
        ],
        correctChoiceId: "a",
        explanation: "When re-reading notes makes everything look familiar, it feels like knowing — but familiarity is not the same as being able to recall or use information, a false signal that catches students out in exams.",
      },
      {
        dimension: "reasoning",
        prompt: "Why are re-reading and highlighting often ineffective study methods despite feeling productive?",
        choices: [
          { id: "a", label: "They generate a comforting sense of familiarity but produce weak, shallow learning" },
          { id: "b", label: "They are too difficult to do" },
          { id: "c", label: "They are the most effective methods known" },
          { id: "d", label: "They require self-testing" },
        ],
        correctChoiceId: "a",
        explanation: "Re-reading and highlighting feel productive because they are easy and create familiarity, but that comfort is a metacognitive trap: they teach little, while harder methods like self-testing produce far stronger learning.",
      },
      {
        dimension: "reasoning",
        prompt: "Why do effortful methods like retrieval practice and spacing produce better learning even though they feel worse?",
        choices: [
          { id: "a", label: "The difficulty of actively recalling and spacing study out ('desirable difficulties') builds stronger, more durable learning than easy familiarity" },
          { id: "b", label: "Because feeling bad always means learning is failing" },
          { id: "c", label: "Because they generate more familiarity" },
          { id: "d", label: "Because comfort always equals effective learning" },
        ],
        correctChoiceId: "a",
        explanation: "Testing yourself and spacing study feel harder and can make you feel you know less, but these 'desirable difficulties' create durable learning — so the struggle is a sign of effective learning, not failure.",
      },
      {
        dimension: "depth",
        prompt: "Why is metacognitive self-regulation such a strong predictor of learning success?",
        choices: [
          { id: "a", label: "Learners who monitor their understanding and adjust strategies direct effort where needed and avoid traps like illusory knowing" },
          { id: "b", label: "Because it replaces the need to study" },
          { id: "c", label: "Because raw ability is all that matters" },
          { id: "d", label: "Because it makes learning feel comfortable" },
        ],
        correctChoiceId: "a",
        explanation: "Learners who accurately monitor understanding and change course — spending time on weak areas, self-testing to find gaps — outperform those who study hard but blindly, often mattering more than raw ability, and metacognition can be taught.",
      },
    ],
    sources: [
      { label: "Metacognition (overview)", note: "Reference on monitoring, regulation and learning.", type: "Reference", url: "https://en.wikipedia.org/wiki/Metacognition" },
      { label: "Retrieval practice and desirable difficulties (overview)", note: "Reference on why effortful study methods work best.", type: "Reference", url: "https://en.wikipedia.org/wiki/Testing_effect" },
    ],
  },
];

export const psychologyLessons = buildAuthoredLessons("psychology", psychology);
