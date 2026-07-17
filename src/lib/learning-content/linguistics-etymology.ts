import { buildAuthoredLessons, type AuthoredLesson } from "./types";

// Ten hand-written Linguistics & Etymology lessons: researched, concept-specific
// prose with real examples and named ideas, each closing on an everyday-life
// example, plus genuine recall quizzes.
const linguisticsEtymology: AuthoredLesson[] = [
  {
    concept: "Poverty of the Stimulus",
    level: "University",
    summary: "the argument that children know more grammar than their evidence could teach",
    estimatedMinutes: 9,
    deck: "Children acquire a productive grammar in a few years, from messy, finite, largely uncorrected speech, and they converge on the same rules as everyone around them. Chomsky's argument is that the input is too impoverished to explain the outcome — and if that is right, something about grammar must already be in the child.",
    keyTerms: [
      { label: "Poverty of the stimulus", value: "The claim that linguistic input underdetermines the grammar children reliably acquire." },
      { label: "Structure dependence", value: "Grammatical rules operating on hierarchical phrase structure rather than linear word order." },
      { label: "Universal Grammar", value: "The proposed innate endowment constraining which grammars are humanly learnable." },
      { label: "No negative evidence", value: "Children are rarely told which sentences are ungrammatical, yet learn the limits anyway." },
    ],
    sections: [
      {
        heading: "The logical problem of language acquisition",
        body: [
          `The argument is an inference to the best explanation, not an observation. A child hears a finite, noisy sample of speech — false starts, interruptions, ungrammatical fragments — over a few years, and ends up able to produce and judge an unbounded set of sentences they have never encountered. That gap between input and output is the explanandum. Any theory of acquisition must explain how the child gets from one to the other, and the poverty-of-the-stimulus argument says that general-purpose learning from that data cannot do it.`,
          `A crucial and underrated component is the absence of negative evidence. Children are seldom told that a sentence is impossible, and when corrected it is usually for content rather than form — yet they reliably learn not just what is sayable but what is not. Learning a rule from positive examples alone is a genuinely hard inductive problem, because infinitely many rules are consistent with any finite set of good sentences. Something must be constraining which generalisation the child entertains, since they do not seem to try, and get corrected out of, the wrong ones.`,
        ],
      },
      {
        heading: "Structure dependence, the flagship case",
        body: [
          `Chomsky's classic illustration concerns forming yes-no questions. From "the man is tall" a child produces "is the man tall?", which is consistent with a simple linear rule: move the first "is" to the front. Now take "the man who is tall is happy". The linear rule predicts "is the man who tall is happy?" — and children do not produce this. They produce "is the man who is tall happy?", moving the auxiliary of the main clause rather than the first one encountered.`,
          `The point is what the child did not do. The linear rule is simpler, and it fits every simple sentence they have heard. Yet children apparently never entertain it, even though sentences complex enough to disconfirm it are vanishingly rare in speech to children. So they are not testing the simple hypothesis and abandoning it on evidence; they never seem to consider it at all. Chomsky's inference is that the child comes equipped with the knowledge that grammatical rules operate on hierarchical structure, not linear order — a constraint on the hypothesis space rather than something learned from within it.`,
        ],
      },
      {
        heading: "The case against",
        body: [
          `The argument has drawn sustained and serious fire. Corpus researchers, notably Pullum and Scholz, disputed the premise that the disconfirming data are absent, finding relevant complex constructions in child-directed speech and in accessible sources more often than claimed — which weakens an argument resting on their rarity. Others argue the inference smuggles in an impoverished view of learning: if the learner is a sophisticated statistical engine rather than a naive rule-tester, the input may be richer than it looks.`,
          `Computational work sharpened this. Bayesian learners equipped with a preference for simpler hypotheses can, in some demonstrations, converge on structure-dependent rules from realistic input without a structure-dependence constraint built in, because hierarchical grammars turn out to be the better explanation of the whole distribution. More recently, large language models have complicated everyone's intuitions: they acquire strikingly structure-sensitive behaviour from text alone with no innate grammar — though they see orders of magnitude more data than any child, which arguably concedes the developmental point rather than refuting it.`,
        ],
      },
      {
        heading: "What survives",
        body: [
          `The strong nativist reading — a richly specified Universal Grammar with detailed innate principles and parameters — is much less widely held than it was, including by Chomsky, whose Minimalist Program pared the innate endowment down toward something far thinner. What has proved durable is the framing: acquisition is an induction problem, the hypothesis space must be constrained somehow, and the interesting question is what does the constraining.`,
          `The live debate is therefore about the *nature* of the bias rather than its existence, and almost everyone now posits some. It might be language-specific and innate; it might be a general cognitive preference for hierarchical or simple structure; it might emerge from the demands of processing or communication. That is a genuine empirical disagreement with real stakes, and it is more productive than the caricatured nature-versus-nurture framing the debate is usually flattened into. The argument's lasting contribution was to make the gap between input and outcome something that demands an explanation rather than something nobody had noticed.`,
        ],
      },
      {
        heading: "The rules you know and were never taught",
        body: [
          `You are carrying the evidence. You know, without being told, that "is the man who tall is happy?" is not English — and you almost certainly cannot state the rule you just used. English speakers also reliably order adjectives as "big red wooden box" and never "wooden red big box", a rule almost no native speaker can articulate and none was ever taught. That gap between what you can do and what you can say about what you are doing is the phenomenon. Whether the constraint is innate or emerges from learning is genuinely open, but the striking fact is not in dispute: most of what you know about your own language, you know without ever having encountered it as a rule.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "reasoning",
        prompt: "Why is the absence of negative evidence central to the argument?",
        choices: [
          { id: "a", label: "Many rules fit finite input, yet children learn the limits" },
          { id: "b", label: "Children are corrected so often that they learn grammar mainly through explicit feedback" },
          { id: "c", label: "Parents systematically model ungrammatical sentences to show what is impossible" },
          { id: "d", label: "Negative evidence would make the induction problem harder rather than easier" },
        ],
        correctChoiceId: "a",
        explanation: "Learning from positive examples alone is genuinely hard inductively. Children reliably learn what is unsayable without being told, so something must constrain which generalisation they entertain in the first place.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the force of the question-formation example?",
        choices: [
          { id: "a", label: "Children never try the simpler linear rule they could" },
          { id: "b", label: "Children try the linear rule, are corrected by adults, and abandon it within months" },
          { id: "c", label: "The linear rule produces grammatical output, so both rules are equally available" },
          { id: "d", label: "Complex sentences are so frequent that the linear rule is disconfirmed immediately" },
        ],
        correctChoiceId: "a",
        explanation: "The linear 'move the first is' rule is simpler and consistent with every simple sentence a child hears. That children apparently never entertain it — rather than testing and rejecting it — suggests the hypothesis space is constrained from the start.",
      },
      {
        dimension: "reasoning",
        prompt: "What was Pullum and Scholz's principal objection?",
        choices: [
          { id: "a", label: "The disconfirming constructions appear in input more than claimed" },
          { id: "b", label: "Structure dependence is not in fact a property of natural language grammars" },
          { id: "c", label: "Children do produce the linear-rule errors, contrary to Chomsky's observation" },
          { id: "d", label: "Universal Grammar cannot be falsified and so lies outside empirical linguistics" },
        ],
        correctChoiceId: "a",
        explanation: "Their attack was on the empirical premise. An argument resting on the rarity of the crucial data is weakened if corpus work finds those constructions occurring more often than assumed in child-directed speech.",
      },
      {
        dimension: "reasoning",
        prompt: "Why do large language models complicate the debate without settling it?",
        choices: [
          { id: "a", label: "They learn structure from text, but on far more data than a child" },
          { id: "b", label: "They are explicitly programmed with hierarchical grammatical rules before training begins" },
          { id: "c", label: "They fail to reproduce structure-dependent judgements, confirming the nativist position" },
          { id: "d", label: "They learn only from corrected examples, which children demonstrably do not receive" },
        ],
        correctChoiceId: "a",
        explanation: "That structure-sensitivity is learnable from text without innate grammar is genuinely relevant. But the data volume is orders of magnitude beyond a child's, which arguably concedes the developmental argument rather than refuting it.",
      },
      {
        dimension: "depth",
        prompt: "What is the durable contribution of the argument?",
        choices: [
          { id: "a", label: "Framing acquisition as induction over a constrained hypothesis space" },
          { id: "b", label: "Establishing that a richly specified Universal Grammar is innate in all humans" },
          { id: "c", label: "Demonstrating that general-purpose statistical learning plays no role in acquisition" },
          { id: "d", label: "Proving that language is unlearnable without explicit instruction in its rules" },
        ],
        correctChoiceId: "a",
        explanation: "The strong nativist reading has receded, including for Chomsky. What survives is that the gap between input and outcome demands explanation, and that almost everyone now posits some bias — the live dispute is over its nature.",
      },
    ],
    sources: [
      { label: "Poverty of the stimulus (overview)", note: "Reference on the argument, structure dependence and its critics.", type: "Reference", url: "https://en.wikipedia.org/wiki/Poverty_of_the_stimulus" },
      { label: "Innateness and Language (SEP)", note: "Stanford Encyclopedia entry on nativism and language acquisition.", type: "Reference", url: "https://plato.stanford.edu/entries/innateness-language/" },
    ],
  },
  {
    concept: "Linguistic Relativity",
    level: "University",
    summary: "whether the language you speak shapes the thoughts you can think",
    estimatedMinutes: 9,
    deck: "The idea that language shapes thought has been asserted, ridiculed, buried and quietly revived. The strong version — that language determines what is thinkable — is almost certainly false. The weak version turns out to be true, testable, and more interesting than either the myth or the debunking suggests.",
    keyTerms: [
      { label: "Linguistic determinism", value: "The strong claim that language constrains what thoughts are possible — now generally rejected." },
      { label: "Linguistic relativity", value: "The weaker claim that language habitually influences attention, memory and categorisation." },
      { label: "Sapir–Whorf hypothesis", value: "The label attached to both claims, often conflating them to the detriment of both." },
      { label: "Absolute spatial framing", value: "Languages using cardinal directions rather than left/right, with measurable cognitive effects." },
    ],
    sections: [
      {
        heading: "Two claims, routinely confused",
        body: [
          `The Sapir–Whorf hypothesis is really two claims of wildly different strength, and most of the century-long argument comes from sliding between them. Linguistic determinism says language determines thought: what your language lacks, you cannot think. Linguistic relativity says language influences thought: habitual patterns of speaking nudge attention, memory and categorisation. The first is a bold and testable claim that appears to be false. The second is modest, and turns out to be well supported.`,
          `The determinist version fails on straightforward grounds. People routinely think thoughts their language has no word for, coin new words when needed, borrow across languages, and translate between them with effort but generally with success. Speakers of languages with only a handful of colour terms can perceive and remember colour distinctions their vocabulary does not mark. If language determined thought, none of this would work — and the fact that you can notice a gap in your own language is itself evidence against the strong claim.`,
        ],
      },
      {
        heading: "The Eskimo snow embarrassment",
        body: [
          `The field's reputation was badly damaged by its most famous example. The claim that Eskimo languages have dozens or hundreds of words for snow, popularised via Whorf and inflated by repetition, was demolished by Laura Martin and then Geoffrey Pullum in an essay memorably titled "The Great Eskimo Vocabulary Hoax". The count was largely an artefact: Inuit languages are polysynthetic, building single words from many morphemes, so "counting words" is nearly meaningless — English does the same with phrases, and skiers have plenty of snow vocabulary without anyone drawing conclusions about their cognition.`,
          `The episode is worth knowing for two reasons. It is a case study in how an appealing anecdote survives on repetition rather than evidence, becoming so entrenched that debunking it took decades and it circulates still. And its collapse discredited the whole research programme by association, so that for a generation any suggestion that language influences thought was treated as obviously naive. That overcorrection was itself unscientific, since a bad example does not refute a hypothesis, and it delayed serious empirical work on a question that turned out to be answerable.`,
        ],
      },
      {
        heading: "The evidence that survived",
        body: [
          `Careful experimental work has since found real effects, and they are specific rather than sweeping. The strongest cases involve spatial framing. Some languages — Guugu Yimithirr in Australia, Tzeltal in Mexico — lack egocentric terms like "left" and "right" for most purposes and use absolute cardinal directions instead: not "the cup is on your left" but "the cup is to your north". Speakers of these languages maintain a running orientation with an accuracy that astonishes outsiders, and Levinson's group showed the difference extends beyond speech into non-linguistic spatial reasoning and memory tasks.`,
          `Other findings are narrower but robust. Grammatical gender subtly biases how speakers describe objects, with German and Spanish speakers reaching for adjectives that match the noun's gender. Languages carving the blue-green space differently produce measurable differences in discrimination speed near the boundary, particularly in the right visual field. Russian's obligatory light/dark blue distinction speeds discrimination across that boundary. These are real, replicated effects — and they are effects on speed, attention and habitual encoding, not on what is thinkable. The picture is not that language builds a cage but that it makes some paths cheaper, and cheap paths get taken.`,
        ],
      },
      {
        heading: "Why the modest version is the interesting one",
        body: [
          `Once you see the mechanism, the modest claim stops looking like a consolation prize. Language forces habitual attention: if your grammar obligates you to mark whether you witnessed an event or merely heard of it, as evidentiality in Turkish or Quechua does, you must attend to your information source every time you speak, and unsurprisingly you become practised at tracking it. Nothing here says a Turkish speaker can think thoughts an English speaker cannot. It says they have been made to rehearse a distinction constantly, and rehearsal has effects.`,
          `This reframes the question productively. Language is not a prison; it is a set of well-worn grooves. The effects are strongest where the language makes a distinction obligatory rather than merely available, because obligation forces attention on every utterance, whereas anything expressible with effort is available to any speaker who bothers. That is why the surviving findings cluster around grammaticalised categories — gender, evidentiality, spatial frame, aspect — rather than vocabulary. It also predicts what the effects should look like: small, automatic, most visible under time pressure, and abolished when someone is asked to think carefully.`,
        ],
      },
      {
        heading: "Why 'untranslatable words' are oversold",
        body: [
          `You have met the popular version: lists of untranslatable words that supposedly prove other cultures perceive reality differently. Treat these with the scepticism the snow story earned. That German has *Schadenfreude* and English needs a phrase does not mean English speakers cannot feel it — obviously they can, which is why the borrowed word caught on instantly. What the research actually supports is subtler and more interesting: where your language forces you to mark something every time you open your mouth, you get very good at noticing it. So the real question is never "does my language have a word for this?" but "what does my language oblige me to specify?" — because that, not vocabulary, is where the grooves get worn.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What distinguishes linguistic determinism from linguistic relativity?",
        choices: [
          { id: "a", label: "Determinism constrains what is thinkable; relativity shapes attention" },
          { id: "b", label: "Determinism concerns vocabulary while relativity concerns grammatical structure" },
          { id: "c", label: "Determinism was proposed by Sapir and relativity by Whorf, working independently" },
          { id: "d", label: "Determinism applies to written language and relativity to spoken language only" },
        ],
        correctChoiceId: "a",
        explanation: "The strong claim is bold, testable and appears false; the weak one is modest and well supported. Most of the century-long confusion comes from sliding between them as though they stood or fell together.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does the 'many words for snow' claim collapse?",
        choices: [
          { id: "a", label: "Inuit is polysynthetic, so counting words means little" },
          { id: "b", label: "Inuit languages in fact have fewer snow terms than English does" },
          { id: "c", label: "The original fieldwork was later shown to have been fabricated entirely" },
          { id: "d", label: "Snow vocabulary has no demonstrable relationship to any cognitive ability" },
        ],
        correctChoiceId: "a",
        explanation: "Building single words from many morphemes makes a word count an artefact of morphology — English does the same with phrases, and skiers have rich snow vocabulary without anyone inferring anything about their cognition.",
      },
      {
        dimension: "reasoning",
        prompt: "What makes the absolute-spatial-framing findings strong evidence?",
        choices: [
          { id: "a", label: "The difference shows up in non-linguistic spatial tasks too" },
          { id: "b", label: "Speakers of those languages cannot understand egocentric directions when taught them" },
          { id: "c", label: "The effect appears in vocabulary counts across a large sample of unrelated languages" },
          { id: "d", label: "The languages concerned lack any means of expressing spatial relationships at all" },
        ],
        correctChoiceId: "a",
        explanation: "If the effect were merely how people talk, it would be trivial. Levinson's group showed speakers maintain running orientation and differ on non-linguistic tasks — the effect reaches cognition, not just expression.",
      },
      {
        dimension: "reasoning",
        prompt: "Why do the surviving effects cluster around grammaticalised categories rather than vocabulary?",
        choices: [
          { id: "a", label: "Obligatory marking forces attention that optional expression need not" },
          { id: "b", label: "Grammar is acquired earlier than vocabulary and so has a longer developmental effect" },
          { id: "c", label: "Vocabulary differences between languages are too small to produce measurable effects" },
          { id: "d", label: "Grammatical categories are universal, so they can be compared across languages reliably" },
        ],
        correctChoiceId: "a",
        explanation: "If your grammar obliges you to mark evidentiality or gender, you rehearse that distinction constantly and get practised at it. Anything merely expressible with effort is available to any speaker who bothers — so obligation, not availability, does the work.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is Schadenfreude a poor argument for linguistic relativity?",
        choices: [
          { id: "a", label: "English speakers feel it, which is why the word was borrowed" },
          { id: "b", label: "The word has a precise English equivalent that is simply less commonly used" },
          { id: "c", label: "German speakers report the emotion less frequently than English speakers do" },
          { id: "d", label: "Untranslatable words are always compounds and so do not count as single lexemes" },
        ],
        correctChoiceId: "a",
        explanation: "Lacking a single word is not lacking the concept. The instant uptake of the loanword demonstrates the thought was already there — which is why the real question is what your language obliges you to specify, not what it happens to lexicalise.",
      },
    ],
    sources: [
      { label: "Linguistic relativity (overview)", note: "Reference on the strong and weak claims and the modern evidence.", type: "Reference", url: "https://en.wikipedia.org/wiki/Linguistic_relativity" },
      { label: "Pullum, 'The Great Eskimo Vocabulary Hoax'", note: "The essay dismantling the most famous relativity anecdote.", type: "Reference", url: "https://en.wikipedia.org/wiki/Eskimo_words_for_snow" },
    ],
  },
  {
    concept: "Syntax",
    level: "A-level",
    summary: "rules and patterns for combining words into sentences",
    estimatedMinutes: 8,
    deck: "Words in a row are not a sentence. 'Furiously sleep ideas green colorless' is gibberish; reverse it and 'Colorless green ideas sleep furiously' is eerily grammatical, though meaningless. Syntax is the hidden rulebook that decides which arrangements of words your mind accepts as well-formed.",
    keyTerms: [
      { label: "Syntax", value: "The system of rules governing how words combine into phrases and sentences." },
      { label: "Constituent", value: "A group of words acting as one unit." },
      { label: "Recursion", value: "Embedding structures within structures, allowing endlessly long sentences." },
      { label: "Structural ambiguity", value: "One string of words with two possible grammatical structures and meanings." },
    ],
    sections: [
      {
        heading: "Grammar is not meaning",
        body: [
          `Syntax is the set of rules by which a language combines words into well-formed phrases and sentences. Its first surprising lesson is that grammaticality is separate from meaning. The linguist Noam Chomsky made the point in 1957 with the sentence "Colorless green ideas sleep furiously." It is total nonsense — ideas are not coloured, green cannot be colourless, ideas do not sleep — yet every English speaker recognises it as a grammatical English sentence. Scramble the same words to "Furiously sleep ideas green colorless" and it is not just meaningless but ungrammatical.`,
          `That contrast reveals that your mind holds a system of structural rules independent of meaning. You can judge whether a string is put together correctly even when it says nothing sensible. This is why syntax is studied as a system in its own right: there is a grammar in your head, one you were never explicitly taught, that silently sorts word-strings into the acceptable and the malformed.`,
        ],
      },
      {
        heading: "Words group into units",
        body: [
          `Sentences are not flat strings of words; they are built from nested groups called constituents — clusters of words that behave as a single unit. In "The old dog chased the ball", "the old dog" hangs together as one unit (you can replace it with "it"), and so does "the ball". These groupings are real: they determine what can move, be replaced, or be questioned. Syntax describes this hidden structure, often drawn as a branching tree showing which words belong together.`,
          `You can feel constituents when a sentence is ambiguous because the words can be grouped two ways. "I saw the man with the telescope" has two structures: either "with the telescope" attaches to "saw" (you used a telescope to see him) or to "the man" (he was holding a telescope). The words are identical; the grouping differs, and so does the meaning. Such structural ambiguity is powerful evidence that sentences have architecture beyond their left-to-right order.`,
        ],
      },
      {
        heading: "Infinite sentences from finite rules",
        body: [
          `One of syntax's deepest features is recursion: the ability to embed a structure inside another of the same kind, without limit. You can put a sentence inside a sentence — "She said that he thought that they knew that..." — and keep going forever. You can stack clauses: "the cat that chased the rat that ate the cheese that lay in the house that Jack built." No matter how long a grammatical sentence is, you can always make a longer one.`,
          `This is profound. From a finite set of rules and words, syntax generates an infinite number of possible sentences, the vast majority of which have never been spoken before. It explains one of the most remarkable facts about language: you routinely produce and understand brand-new sentences you have never encountered. You are not retrieving stored sentences but building them, on the fly, from rules — which is why language is creative rather than a fixed list of phrases.`,
        ],
      },
      {
        heading: "Word order and its rules",
        body: [
          `Different languages arrange the pieces differently. English is broadly a Subject–Verb–Object language: "The dog (S) chased (V) the ball (O)." Many languages, like Japanese, put the verb last (Subject–Object–Verb), and some place it first. Word order is not random or free; each language has its own consistent patterns, and violating them produces sentences that feel wrong even when the words are clear. This is why the deliberately jumbled order of Yoda's speech in Star Wars ("Powerful you have become") sounds strange but still parseable — it bends English word order without wholly breaking it.`,
          `Syntax also handles subtler dependencies, like agreement ("she runs" versus "they run") and how a question rearranges a statement ("You are ready" becoming "Are you ready?"). These rules operate on the sentence's structure, not just word positions, which is why they can reach across long distances. Mastering a language's syntax — consciously or not — means internalising this whole apparatus of order, grouping and agreement that turns a heap of words into a sentence.`,
        ],
      },
      {
        heading: "The grammar you never studied",
        body: [
          `You run a sophisticated syntax engine you were never formally taught. You instantly know that "the big red ball" is fine but "the red big ball" sounds off, though no one ever gave you the rule for adjective order. You feel the two meanings of "visiting relatives can be boring", untangle a garden-path sentence like "the old man the boats", and produce endless sentences no one has said before. Autocorrect and translation apps stumble exactly where syntax gets tricky — long-distance agreement, ambiguity, unusual order. Every time a sentence sounds "wrong" without your being able to say why, that is your internal grammar, the one you acquired as a child, quietly doing its work.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "reasoning",
        prompt: "What does Chomsky's 'Colorless green ideas sleep furiously' demonstrate?",
        choices: [
          { id: "a", label: "Grammar is separate from meaning: well-formed yet senseless" },
          { id: "b", label: "That a sentence must be meaningful to count as grammatical" },
          { id: "c", label: "That semantic anomaly always produces ungrammaticality" },
          { id: "d", label: "That meaning is what licenses a well-formed sentence" },
        ],
        correctChoiceId: "a",
        explanation: "The sentence is nonsense but recognisably well-formed English, while the scrambled version is ungrammatical — showing the mind holds structural rules independent of meaning.",
      },
      {
        dimension: "depth",
        prompt: "What is a 'constituent' in syntax?",
        choices: [
          { id: "a", label: "The smallest meaningful unit a word can contain" },
          { id: "b", label: "A group of words acting as one unit" },
          { id: "c", label: "The relation a subject bears to its main verb" },
          { id: "d", label: "A word that governs the case of those around it" },
        ],
        correctChoiceId: "b",
        explanation: "Constituents are word-clusters that act as units — 'the old dog' can be replaced by 'it' — and syntax describes how sentences are built from these nested groups, not flat strings.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does 'I saw the man with the telescope' have two meanings?",
        choices: [
          { id: "a", label: "It can attach to 'saw' or to 'the man'" },
          { id: "b", label: "Because 'saw' can mean either viewing or cutting" },
          { id: "c", label: "Because 'man' can be read as subject or object" },
          { id: "d", label: "Because 'the' is ambiguous between two referents" },
        ],
        correctChoiceId: "a",
        explanation: "The identical words can be grouped two ways — the telescope as the instrument of seeing, or as something the man holds — a structural ambiguity showing sentences have architecture beyond word order.",
      },
      {
        dimension: "depth",
        prompt: "What is 'recursion' in syntax, and why does it matter?",
        choices: [
          { id: "a", label: "Structures nested in structures without limit" },
          { id: "b", label: "Applying a rule to its own previous output once" },
          { id: "c", label: "Deriving surface order from an underlying structure" },
          { id: "d", label: "Combining words strictly in a left-to-right chain" },
        ],
        correctChoiceId: "a",
        explanation: "Recursion embeds clauses inside clauses endlessly, so a finite grammar produces infinitely many possible sentences — explaining how you routinely build and understand entirely new ones.",
      },
      {
        dimension: "depth",
        prompt: "What broad word-order pattern does English mainly follow?",
        choices: [
          { id: "a", label: "Subject–Verb–Object, as in 'the dog chased the ball'" },
          { id: "b", label: "Subject–Object–Verb, with the verb placed last" },
          { id: "c", label: "Verb–Subject–Object, with the verb placed first" },
          { id: "d", label: "Free word order, with case marking showing roles" },
        ],
        correctChoiceId: "a",
        explanation: "English is broadly Subject–Verb–Object; other languages differ (Japanese is Subject–Object–Verb). Each language has consistent order rules, which is why Yoda's rearranged English sounds odd but still parses.",
      },
    ],
    sources: [
      { label: "Essentials of Linguistics (open textbook)", note: "Open textbook chapters on syntax and sentence structure.", type: "Textbook", url: "https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/" },
      { label: "Syntax (overview)", note: "Reference on constituents, recursion and structural ambiguity.", type: "Reference", url: "https://en.wikipedia.org/wiki/Syntax" },
    ],
  },
  {
    concept: "Semantics",
    level: "A-level",
    summary: "literal meaning in words, phrases and sentences",
    estimatedMinutes: 8,
    deck: "Semantics is the study of literal meaning — what words and sentences mean in themselves, before context, tone or hidden implication get involved. It sounds obvious until you try to pin meaning down precisely, and discover how slippery, layered and genuinely hard 'what a word means' turns out to be.",
    keyTerms: [
      { label: "Semantics", value: "The study of literal, conventional meaning in language, apart from context." },
      { label: "Sense and reference", value: "A word's built-in meaning versus the actual thing in the world it points to." },
      { label: "Compositionality", value: "The relation a subject bears to its main verb is built from its parts and how they combine." },
      { label: "Lexical relations", value: "Meaning links between words: synonymy, antonymy, hyponymy and more." },
    ],
    sections: [
      {
        heading: "Literal meaning as a field of study",
        body: [
          `Semantics is the branch of linguistics concerned with meaning — specifically the literal, conventional meaning encoded in words and sentences, as opposed to what a speaker might imply in a particular situation (that is pragmatics). It asks what "dog" means, how "the cat sat on the mat" gets its meaning, and why "bank" can mean a riverside or a financial institution. Meaning feels effortless, but making it precise is one of the hardest tasks in the study of language.`,
          `Part of the difficulty is that meaning operates at several levels at once: individual words have meanings, and those combine into the meaning of a whole sentence. Semantics studies both — the meaning of the vocabulary (lexical semantics) and how word meanings assemble into sentence meaning. Getting clear on literal meaning first is essential, because it is the stable foundation on which context, tone and implication then build.`,
        ],
      },
      {
        heading: "Sense versus reference",
        body: [
          `A key distinction, drawn by the philosopher Gottlob Frege, separates sense from reference. Reference is what a word points to in the world; sense is its built-in meaning or mode of presentation. His famous example: "the morning star" and "the evening star" both refer to the same object, the planet Venus, so they share a reference. But they clearly differ in sense — one presents it as a star seen at dawn, the other at dusk — which is why "the morning star is the evening star" is an informative discovery, not an empty tautology.`,
          `This distinction matters because meaning is not simply a matter of pointing at things. Two expressions can pick out the same thing yet mean differently, and some meaningful expressions ("the largest prime number") refer to nothing at all yet are perfectly understandable. Semantics has to account for both what expressions denote and the meaning they carry independently of what, if anything, they happen to pick out.`,
        ],
      },
      {
        heading: "Building meaning from parts",
        body: [
          `A central principle is compositionality: the meaning of a complex expression is determined by the meanings of its parts and the way they are combined. This is what lets you understand a sentence you have never heard. You know what "the purple elephant juggled seven pineapples" means, despite never having encountered it, because you know the words and the rules for combining them. Meaning is computed, not looked up.`,
          `Compositionality also explains why structure changes meaning even with the same words. "The dog bit the man" and "The man bit the dog" contain identical words but mean opposite things, because how the parts combine differs. It also has limits: idioms like "kick the bucket" (to die) are non-compositional — their meaning is not built from the parts, which is why they must be learned as wholes and why they baffle language learners and literal-minded translation software.`,
        ],
      },
      {
        heading: "The web of word meanings",
        body: [
          `Word meanings are not isolated; they sit in networks of relationships that semantics maps. Synonymy is near-sameness of meaning ("big" and "large"); antonymy is oppositeness ("hot" and "cold"); hyponymy is the "kind-of" relation ("a rose is a kind of flower", so "rose" is a hyponym of "flower"). These relations structure the vocabulary into a vast web, and much of understanding a word is knowing its place in that web.`,
          `Semantics also has to handle the ways meaning goes fuzzy. Ambiguity is when a word has two distinct meanings ("bank"); vagueness is when a word's boundary is unclear (exactly how tall is "tall"?). And words carry connotation — the emotional or evaluative colouring beyond their bare definition, so "thrifty", "frugal" and "stingy" can describe the same behaviour while implying approval, neutrality or disdain. Pinning down literal meaning means untangling all of this — which is why precise wording matters so much in law, contracts and science.`,
        ],
      },
      {
        heading: "Meaning in the fine print",
        body: [
          `You feel semantics bite whenever exact wording matters. A contract clause, a law, an insurance policy or a set of rules turns on the precise literal meaning of its words, and disputes often come down to an ambiguity ("does 'children' include stepchildren?") or a vague term ("reasonable" effort). You exploit lexical relations when a thesaurus offers you synonyms with slightly different connotations, and you meet non-compositionality every time an idiom or a foreign phrase refuses to mean the sum of its words. And the eternal argument over whether "literally" can mean "figuratively" is a live semantic dispute about what a word really means. Getting meaning precisely right is not pedantry — it is where a great deal of real-world consequence lives.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What does semantics study?",
        choices: [
          { id: "a", label: "The conventional meaning of words and sentences" },
          { id: "b", label: "The system of sounds that distinguish words" },
          { id: "c", label: "What a speaker implies beyond the literal words" },
          { id: "d", label: "The way words are built from smaller meaningful parts" },
        ],
        correctChoiceId: "a",
        explanation: "Semantics concerns literal, conventional meaning — what words and sentences mean in themselves — as opposed to context-based implication (pragmatics) or word origins (etymology).",
      },
      {
        dimension: "reasoning",
        prompt: "Why is 'the morning star is the evening star' informative rather than empty?",
        choices: [
          { id: "a", label: "Same reference, but a different sense" },
          { id: "b", label: "Because their reference shifts with the time of day" },
          { id: "c", label: "Because sense and reference always coincide exactly" },
          { id: "d", label: "Because reference alone fixes the meaning of a name" },
        ],
        correctChoiceId: "a",
        explanation: "Frege's point: both pick out Venus (same reference) but present it differently (different sense), so identifying them is a genuine discovery, not a tautology — showing meaning is more than pointing.",
      },
      {
        dimension: "depth",
        prompt: "What does the principle of compositionality say?",
        choices: [
          { id: "a", label: "Meaning is built from the parts and how they combine" },
          { id: "b", label: "Every complex expression must be learned individually" },
          { id: "c", label: "The parts of an expression have no meaning alone" },
          { id: "d", label: "Meaning is fixed by convention rather than by parts" },
        ],
        correctChoiceId: "a",
        explanation: "Compositionality means sentence meaning is computed from word meanings and their combination — which is why you understand brand-new sentences, and why 'dog bites man' differs from 'man bites dog'.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is an idiom like 'kick the bucket' called non-compositional?",
        choices: [
          { id: "a", label: "Its meaning is not built from its parts and is learned whole" },
          { id: "b", label: "Because its individual words are archaic and rare" },
          { id: "c", label: "Because its meaning changes with the surrounding context" },
          { id: "d", label: "Because it can be read both literally and figuratively" },
        ],
        correctChoiceId: "a",
        explanation: "Idioms defy compositionality: 'kick the bucket' does not derive from 'kick' plus 'bucket', so it must be learned whole — which is why idioms trip up learners and literal translation software.",
      },
      {
        dimension: "depth",
        prompt: "What is the difference between ambiguity and vagueness?",
        choices: [
          { id: "a", label: "Two distinct meanings, versus one fuzzy boundary" },
          { id: "b", label: "They are the same thing" },
          { id: "c", label: "Ambiguity concerns structure, vagueness concerns reference" },
          { id: "d", label: "Vagueness is two senses; ambiguity is a fuzzy borderline" },
        ],
        correctChoiceId: "a",
        explanation: "Ambiguity is having distinct senses (like 'bank'); vagueness is a fuzzy boundary (how tall is 'tall'?). Both are ways literal meaning goes unclear, which semantics must untangle.",
      },
    ],
    sources: [
      { label: "Essentials of Linguistics (open textbook)", note: "Open textbook chapters on semantics and meaning.", type: "Textbook", url: "https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/" },
      { label: "Semantics (overview)", note: "Reference on sense, reference, compositionality and lexical relations.", type: "Reference", url: "https://en.wikipedia.org/wiki/Semantics" },
    ],
  },
  {
    concept: "Pragmatics",
    level: "University",
    summary: "meaning shaped by context, inference and social use",
    estimatedMinutes: 9,
    deck: "Ask 'Can you pass the salt?' and nobody answers 'Yes' and does nothing — everyone passes the salt. The gap between what words literally say and what we actually mean is the domain of pragmatics: how context, inference and cooperation let us mean far more than we say.",
    keyTerms: [
      { label: "Pragmatics", value: "The study of meaning in context — what speakers mean beyond the literal words." },
      { label: "Implicature", value: "Meaning that is suggested and inferred rather than literally stated." },
      { label: "Grice's maxims", value: "Assumptions of cooperative conversation that let listeners infer intended meaning." },
      { label: "Speech act", value: "An utterance that performs an action, like promising, warning or naming." },
    ],
    sections: [
      {
        heading: "Beyond the literal",
        body: [
          `Pragmatics studies meaning in use: what a speaker actually means in a particular context, which routinely goes far beyond, or even against, the literal meaning of their words. "It's cold in here" is literally a statement about temperature, but in context it may be a request to close a window. "Nice weather we're having" during a downpour means the opposite of what it says. Semantics gives you the literal content; pragmatics explains how listeners get from that to what was really meant.`,
          `This gap is not a defect of language but a feature. We constantly say less than we mean and rely on the listener to fill in the rest, which makes communication vastly more efficient. The remarkable thing is that it works: hearers reliably recover intended meanings that were never stated. Pragmatics is the study of how — the principles and inferences that let us communicate in the space between the lines.`,
        ],
      },
      {
        heading: "The cooperative principle",
        body: [
          `The philosopher H.P. Grice explained much of this with a simple idea: conversation is a cooperative activity, and we assume our partners are trying to communicate helpfully. From this "cooperative principle" he drew maxims we expect speakers to follow — roughly, be truthful, be adequately informative, be relevant, and be clear. Crucially, we assume these are being observed even when the words alone don't say everything, and we use that assumption to infer the rest.`,
          `This inference is called implicature. Ask "Is Jane a good employee?" and hear "She's very punctual", and you infer she is probably not much good at the actual job — because if she were, a cooperative speaker being adequately informative would have said so. Nothing critical was literally stated, yet the criticism is unmistakable. We generate such meanings by reasoning: given that the speaker is cooperating, what must they mean by saying only this? Implicature is meaning smuggled in through what is left unsaid.`,
        ],
      },
      {
        heading: "Saying is doing",
        body: [
          `The philosopher J.L. Austin pointed out that many utterances do not describe the world but perform actions in it. Saying "I promise to repay you", "I now pronounce you married", "I name this ship...", or "I bet you £10" does not report a promise, marriage, naming or bet — it enacts one. Austin called these speech acts, and the insight is that language is not only for stating facts but for doing things: warning, ordering, apologising, christening, resigning.`,
          `Speech acts also explain indirectness. "Can you pass the salt?" is literally a question about your ability, but it functions as a polite request; nobody treats it as a genuine query. We constantly perform one act through the words of another — making requests as questions, giving orders as observations ("someone's left the door open") — for reasons of politeness and social nuance. Understanding an utterance means grasping not just its content but what act the speaker is using it to perform.`,
        ],
      },
      {
        heading: "Anchored in context",
        body: [
          `Some meaning simply cannot be recovered without context at all. Words like "here", "now", "this", "you" and "tomorrow" — called deictic expressions — have no fixed reference; they point, and what they point to depends entirely on who is speaking, when and where. A note reading "back in an hour" is useless without knowing when it was written. "Meet me here tomorrow" means nothing on its own. These expressions bake the dependence on context directly into the language.`,
          `More broadly, pragmatics shows that context is not an optional extra but part of how meaning is made. The same sentence can be a joke, a threat, a request or a compliment depending on who says it to whom, when, with what tone and shared background. This is also why sarcasm, irony and politeness work — and why they so often fail in text messages and across cultures, where the shared context that would fix the meaning is missing. Stripped of context, words underdetermine what is meant.`,
        ],
      },
      {
        heading: "Reading between the lines",
        body: [
          `You are a master of pragmatics, running these inferences constantly. You hear "It's getting late" and understand it's time to leave; you read a lukewarm reference and catch the damning-with-faint-praise; you take "Can you...?" as a request, not a question about your capabilities. You also feel pragmatics break down: the sarcastic text that lands as sincere, the joke that offends because tone didn't carry, the cross-cultural misunderstanding where politeness norms differ. Every time you "read between the lines", catch what someone implied without saying, or realise a sentence's meaning depends entirely on who said it and when, you are doing the work pragmatics describes — meaning far more than the words alone contain.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What does pragmatics study?",
        choices: [
          { id: "a", label: "The conventional meaning of words taken in isolation" },
          { id: "b", label: "What a speaker means beyond the literal words" },
          { id: "c", label: "The smallest units that distinguish word meaning" },
          { id: "d", label: "The rules for combining words into sentences" },
        ],
        correctChoiceId: "b",
        explanation: "Pragmatics is meaning in use: how context and inference let 'It's cold in here' function as a request to shut a window, going beyond the literal content that semantics provides.",
      },
      {
        dimension: "reasoning",
        prompt: "Asked if Jane is a good employee, a speaker says only 'She's very punctual.' What is the implicature?",
        choices: [
          { id: "a", label: "That Jane's main strength is her competence" },
          { id: "b", label: "Probably not good; a cooperative speaker would say more" },
          { id: "c", label: "That the speaker is refusing to answer the question" },
          { id: "d", label: "That the speaker rates punctuality above all else" },
        ],
        correctChoiceId: "b",
        explanation: "By Grice's cooperative principle, a helpful, adequately informative speaker would mention real competence if it existed; offering only punctuality implicates a criticism never literally stated.",
      },
      {
        dimension: "depth",
        prompt: "What is a 'speech act', in Austin's sense?",
        choices: [
          { id: "a", label: "An utterance that does rather than describes" },
          { id: "b", label: "An utterance whose truth can be assessed" },
          { id: "c", label: "A statement that reports a state of affairs" },
          { id: "d", label: "A command issued in grammatical imperative form" },
        ],
        correctChoiceId: "a",
        explanation: "Saying 'I promise', 'I now pronounce you married' or 'I name this ship' enacts the promise, marriage or naming — language doing things, not just stating facts.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does 'Can you pass the salt?' work as a request rather than a literal question?",
        choices: [
          { id: "a", label: "We perform a request through the words of a question" },
          { id: "b", label: "Because the literal question has no possible answer" },
          { id: "c", label: "Because questions are always understood as requests" },
          { id: "d", label: "Because politeness requires the imperative to be avoided" },
        ],
        correctChoiceId: "a",
        explanation: "Indirect speech acts perform one action through another's form — a request dressed as a question — for politeness, which is why no one answers 'yes' and does nothing.",
      },
      {
        dimension: "reasoning",
        prompt: "Why do deictic words like 'here', 'now' and 'you' need context?",
        choices: [
          { id: "a", label: "Their reference shifts with speaker and setting" },
          { id: "b", label: "Because their meaning is purely emotional, not referential" },
          { id: "c", label: "Because they carry two literal senses at once" },
          { id: "d", label: "Because they belong to no grammatical category" },
        ],
        correctChoiceId: "a",
        explanation: "Deictic expressions point, and what they pick out depends entirely on the speaker, time and place — which is why 'back in an hour' is useless without knowing when it was written.",
      },
    ],
    sources: [
      { label: "Essentials of Linguistics (open textbook)", note: "Open textbook chapters on pragmatics, implicature and speech acts.", type: "Textbook", url: "https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/" },
      { label: "Pragmatics (overview)", note: "Reference on Grice's maxims, implicature, speech acts and deixis.", type: "Reference", url: "https://en.wikipedia.org/wiki/Pragmatics" },
    ],
  },
  {
    concept: "Semantic Shift",
    level: "A-level",
    summary: "words changing meaning across time",
    estimatedMinutes: 8,
    deck: "'Nice' once meant foolish. 'Awful' meant awe-inspiring. 'Silly' meant blessed. Word meanings drift, sometimes into their own opposites, and the slow river of semantic shift is why old texts can quietly mislead you — and why the language you speak is a snapshot of meanings still on the move.",
    keyTerms: [
      { label: "Semantic shift", value: "A word's meaning changing gradually over time." },
      { label: "Broadening", value: "A word's meaning widening to cover more than it once did." },
      { label: "Narrowing", value: "A word's meaning shrinking to a more specific sense." },
      { label: "Amelioration / pejoration", value: "A word's meaning becoming more positive, or more negative, over time." },
    ],
    sections: [
      {
        heading: "Meaning on the move",
        body: [
          `Words do not keep the same meaning forever. Semantic shift is the gradual change in what a word denotes over time, and it is happening constantly, usually too slowly to notice within a single lifetime. Read a text from a few centuries ago and you will meet familiar words used in unfamiliar ways — a trap for the unwary reader, who assumes the modern meaning and quietly misunderstands. The word looks the same; its sense has migrated.`,
          `Linguists have catalogued regular patterns in how meanings shift, which makes the change less random than it first appears. Rather than words simply meaning "whatever people decide", shift tends to follow recognisable routes — widening, narrowing, improving, worsening, and moving from literal to figurative. Knowing these patterns helps you read older language accurately and understand how today's meanings will themselves keep drifting.`,
        ],
      },
      {
        heading: "Widening and narrowing",
        body: [
          `Two opposite and common shifts are broadening and narrowing. Broadening is when a word's meaning widens over time. "Dog" once referred to a specific powerful breed and now covers the whole species; "holiday" was a "holy day", a religious festival, and now means any day off. The word came to cover far more than it originally did.`,
          `Narrowing is the reverse: a meaning shrinks to something more specific. "Meat" once meant food in general (a sense preserved in "sweetmeats" and "one man's meat"), then narrowed to animal flesh. "Deer" once meant any wild animal (compare German "Tier", animal) before narrowing to one specific kind. "Girl" once meant a young person of either sex before narrowing to females. In each case a broad word contracted onto a single slice of its old territory.`,
        ],
      },
      {
        heading: "Getting better, getting worse",
        body: [
          `Meanings also shift in their emotional value. Amelioration is when a word's sense improves over time. "Nice" is the star example: from Latin "nescius" (ignorant), it meant foolish or silly in Middle English, drifted through "fussy" and "precise", and only later settled into the mild approval it carries now. "Knight" rose from meaning merely a boy or servant to a noble warrior.`,
          `Pejoration is the opposite, a slide toward the negative. "Silly" once meant blessed, then innocent, then naïve, and finally foolish. "Awful" meant "full of awe", inspiring reverence, before decaying into "very bad". "Cunning" once meant simply knowledgeable or skilful, and "notorious" merely well-known, before both soured. These value-shifts show that a word carries not just a definition but an attitude, and the attitude can flip entirely while the word stays put.`,
        ],
      },
      {
        heading: "Why meanings drift",
        body: [
          `Meanings shift for understandable reasons. Metaphor is a major engine: we extend a word from a literal domain to a figurative one, and the figurative sense can take over. "Broadcast" originally meant scattering seed by hand before radio borrowed it; a computer "mouse" was named for its resemblance to the animal. Words also shift through euphemism (gentler terms for awkward things, which then themselves acquire the taint they were avoiding) and through everyday exaggeration, which is why "literally" is drifting toward "figuratively" and intensifiers like "terribly" and "awfully" lost their original force.`,
          `Social change drives shift too: as the world changes, words are stretched, repurposed and revalued to match. This is why prescriptive complaints that a word is being used "wrongly" often turn out to be objecting to a shift already well underway — today's "error" is frequently tomorrow's standard meaning. Semantic shift is not decay or sloppiness; it is the normal, continuous process by which a living language keeps fitting a changing world.`,
        ],
      },
      {
        heading: "The words shifting under you",
        body: [
          `You are living inside semantic shift right now. "Sick" and "wicked" flipped to mean excellent; "literally" is used for emphasis in ways that enrage purists; "cloud", "stream", "troll", "viral" and "tweet" were all repurposed for the digital age; "gay" changed meaning dramatically within living memory. When an older relative uses a word in a way that sounds oddly off, or you misread an old book because a familiar word meant something different then, you are witnessing the drift directly. The very complaints that young people are "ruining" words are usually just semantic shift caught in the act — the same process that gave us every "correct" meaning we now defend.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is semantic shift?",
        choices: [
          { id: "a", label: "A word's meaning changing gradually over time" },
          { id: "b", label: "A word's pronunciation drifting across generations" },
          { id: "c", label: "A word passing from one language into another" },
          { id: "d", label: "A word splitting into two separate forms" },
        ],
        correctChoiceId: "a",
        explanation: "Semantic shift is the gradual change in what a word denotes over time — why 'nice' once meant foolish and old texts can quietly mislead modern readers.",
      },
      {
        dimension: "depth",
        prompt: "The word 'meat' once meant food in general and now means animal flesh. This is an example of:",
        choices: [
          { id: "a", label: "Broadening" },
          { id: "b", label: "Narrowing" },
          { id: "c", label: "Amelioration" },
          { id: "d", label: "Borrowing" },
        ],
        correctChoiceId: "b",
        explanation: "Narrowing is when a meaning shrinks to something more specific: 'meat' contracted from all food to animal flesh, just as 'deer' narrowed from any wild animal to one kind.",
      },
      {
        dimension: "reasoning",
        prompt: "'Awful' shifted from meaning 'full of awe' to 'very bad'. What kind of shift is this?",
        choices: [
          { id: "a", label: "Amelioration, where a sense grows more favourable" },
          { id: "b", label: "Broadening, where a sense grows more general" },
          { id: "c", label: "Pejoration, where a sense grows more negative" },
          { id: "d", label: "Narrowing, where a sense grows more specific" },
        ],
        correctChoiceId: "c",
        explanation: "Pejoration is a slide toward the negative: 'awful' decayed from inspiring reverence to 'very bad', as 'silly' fell from 'blessed' to 'foolish' — the word's attitude flipped.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is metaphor described as a major engine of semantic shift?",
        choices: [
          { id: "a", label: "A figurative use can displace the literal sense" },
          { id: "b", label: "Because metaphor changes only a word's spelling" },
          { id: "c", label: "Because metaphor blocks any further change in sense" },
          { id: "d", label: "Because metaphor narrows a word to one fixed sense" },
        ],
        correctChoiceId: "a",
        explanation: "Words extend by metaphor and the new sense can dominate: 'broadcast' went from scattering seed to transmitting signals, and a computer 'mouse' was named for the animal it resembled.",
      },
      {
        dimension: "reasoning",
        prompt: "What does semantic shift suggest about complaints that a word is being used 'wrongly'?",
        choices: [
          { id: "a", label: "They resist a shift underway; errors become standard" },
          { id: "b", label: "They mark the moment a language begins to decay" },
          { id: "c", label: "They show that meanings are fixed by their origins" },
          { id: "d", label: "They reliably halt a change once it is named" },
        ],
        correctChoiceId: "a",
        explanation: "Shift is normal and continuous, so prescriptive complaints usually target change already in progress — the same process that produced every 'correct' meaning we now defend.",
      },
    ],
    sources: [
      { label: "Online Etymology Dictionary", note: "Traceable histories of how individual word meanings shifted.", type: "Reference", url: "https://www.etymonline.com/" },
      { label: "Semantic change (overview)", note: "Reference on broadening, narrowing, amelioration and pejoration.", type: "Reference", url: "https://en.wikipedia.org/wiki/Semantic_change" },
    ],
  },
  {
    concept: "The Comparative Method",
    level: "University",
    summary: "how linguists reconstruct languages nobody recorded and nobody has heard",
    estimatedMinutes: 9,
    deck: "Proto-Indo-European was never written down and died before history began, yet linguists reconstruct its sounds, words and grammar in detail — and have had reconstructions confirmed by later discoveries. The comparative method is one of the great achievements of the humanities, and it works because sound change is astonishingly regular.",
    keyTerms: [
      { label: "Regular sound change", value: "The Neogrammarian claim that a sound change applies to every eligible word without exception." },
      { label: "Systematic correspondence", value: "A recurring sound match across languages, the raw evidence for common descent." },
      { label: "Grimm's Law", value: "The regular consonant shift separating Germanic from the rest of Indo-European." },
      { label: "The laryngeal theory", value: "Saussure's reconstruction of unattested sounds, later confirmed by the decipherment of Hittite." },
    ],
    sections: [
      {
        heading: "Why regularity makes reconstruction possible",
        body: [
          `The method rests on a claim that sounds too strong to be true and is nearly right: sound change is regular. The Neogrammarians insisted that when a sound changes, it changes in every word where it occurs in the relevant environment, mechanically and without exception. It does not pick favourites. Apparent exceptions are not evidence against the principle but puzzles with their own explanations — the word was borrowed after the change, or reshaped by analogy with a related form, or the conditioning environment was subtler than assumed.`,
          `This is what makes the method possible rather than a guessing game. If change were sporadic, similarities between languages would be noise and no inference could be drawn. Because change is regular, it leaves systematic correspondences: not "these words look a bit alike" but "wherever this language has p, that one reliably has f, across hundreds of unrelated items". Chance resemblance cannot produce that pattern, and neither can borrowing, which is typically patchy and clusters in particular semantic domains. Systematic correspondence across basic vocabulary is the signature of common descent.`,
        ],
      },
      {
        heading: "Grimm's Law and the shape of the evidence",
        body: [
          `Grimm's Law is the standard demonstration. Comparing Germanic languages with Latin, Greek and Sanskrit reveals a systematic consonant shift: where the others have p, Germanic has f; where they have t, Germanic has th; where they have k, Germanic has h. So Latin *pater* corresponds to English *father*, Latin *tres* to *three*, Latin *cornu* to *horn*, Latin *piscis* to *fish*, Latin *pes/pedis* to *foot*. This is not a handful of cute pairs but a pervasive, predictable pattern across the core lexicon.`,
          `The method's power showed most clearly in handling its own exceptions. A residue of words stubbornly disobeyed Grimm's Law, which by Neogrammarian lights should not happen. Karl Verner then showed the residue was itself regular: the outcome depended on where the Proto-Indo-European accent had fallen, a conditioning factor invisible in Germanic but recoverable from Sanskrit's preserved accent. Verner's Law converted the most embarrassing counter-evidence into a triumph, and did more to establish the regularity hypothesis than any number of confirmations — because the exceptions turned out to have a rule too.`,
        ],
      },
      {
        heading: "Reconstruction, and the test it passed",
        body: [
          `Given systematic correspondences, you can run the changes backwards and reconstruct the ancestor, marking hypothetical forms with an asterisk. From the daughter languages' words for "father" you posit Proto-Indo-European \*ph₂tḗr; from many such comparisons you recover a sound system, a lexicon and much grammar of a language nobody recorded. The obvious worry is that this is unfalsifiable storytelling: the ancestor is gone, so who is to say?`,
          `Ferdinand de Saussure answered that in 1879 in the most striking way available. Working purely on internal patterning in the reconstructed vowel system, he proposed that PIE had contained a set of sounds — "coefficients sonantiques" — that had vanished from every known daughter language, leaving only distortions of neighbouring vowels behind. It was an argument from the shape of a hole. Decades later Hittite was deciphered, and there, written down, was a consonant appearing exactly where Saussure's reconstruction required. He had predicted a sound in an unattested language from an unknown family, and been vindicated by an archaeological discovery he did not live to see. That is a genuine risky prediction, and it is why the method is taken seriously as science rather than philology.`,
        ],
      },
      {
        heading: "The limits, and the fringe",
        body: [
          `The method has a hard ceiling, and it matters for spotting where it is abused. Regular change erodes evidence: after roughly eight to ten thousand years, so many changes have accumulated that correspondences become indistinguishable from chance resemblance. Any two languages share some accidental look-alikes, and with enough time the real signal falls below that noise floor. This is why serious historical linguists are sceptical of proposed macro-families like Nostratic or Proto-World — not from conservatism, but because the method cannot reach that far, and the proposals rely on scattered resemblances rather than systematic correspondence.`,
          `The same standard exposes the popular fringe. Claims that two distant languages are related because a handful of words sound similar ignore the two things the method insists on: correspondences must be systematic across the basic lexicon, and borrowing must be excluded. Basic vocabulary — kinship, body parts, low numerals, pronouns — is used because it resists borrowing; cultural vocabulary travels freely and proves nothing about descent. A methodological point worth generalising: what licenses the inference is the systematic pattern, and the isolated striking coincidence is exactly what chance most reliably produces.`,
        ],
      },
      {
        heading: "Why 'father' and 'pater' are not a coincidence",
        body: [
          `You can watch the method work in your own vocabulary. English *father*/Latin *pater*, *three*/*tres*, *foot*/*pedis*, *horn*/*cornu*, *fish*/*piscis* — that f-to-p and th-to-t and h-to-c pattern repeating across item after item is Grimm's Law, and it is the reason nobody thinks these are coincidences. Once you see it, you can partly predict: given Latin *cord-* you might guess English *heart*, and you would be right. The transferable lesson is about what counts as evidence. One striking similarity is worth almost nothing, because coincidence generates those reliably; a systematic pattern holding across hundreds of cases is worth a great deal. That is exactly why "these two words sound alike so the languages must be related" is a bad argument, and why the same instinct is worth applying to any pattern that impresses you on a single example.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "reasoning",
        prompt: "Why does the regularity of sound change make reconstruction possible?",
        choices: [
          { id: "a", label: "It leaves systematic correspondences that chance resemblance and borrowing cannot produce" },
          { id: "b", label: "It means languages change slowly enough for the ancestor to remain partly intact" },
          { id: "c", label: "It ensures every daughter language preserves the ancestral form of core vocabulary" },
          { id: "d", label: "It allows the date of each change to be calculated from the number of daughters affected" },
        ],
        correctChoiceId: "a",
        explanation: "If change were sporadic, similarities would be noise. Because it applies to every eligible word, you get 'wherever this language has p, that one reliably has f' across hundreds of items — a pattern chance cannot fake and patchy borrowing cannot mimic.",
      },
      {
        dimension: "reasoning",
        prompt: "Why was Verner's Law so important to the regularity hypothesis?",
        choices: [
          { id: "a", label: "Grimm's Law exceptions were themselves regular, set by accent" },
          { id: "b", label: "It demonstrated that Grimm's Law had been incorrectly formulated from the start" },
          { id: "c", label: "It proved that borrowing rather than descent explained the Germanic consonants" },
          { id: "d", label: "It established the first systematic correspondence between Germanic and Sanskrit" },
        ],
        correctChoiceId: "a",
        explanation: "A residue disobeyed Grimm's Law, which should not happen. Verner showed the outcome depended on where the PIE accent fell — recoverable from Sanskrit — converting the most embarrassing counter-evidence into the hypothesis's strongest support.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is Saussure's laryngeal theory treated as a genuine risky prediction?",
        choices: [
          { id: "a", label: "He posited unattested sounds, and Hittite later showed them" },
          { id: "b", label: "He predicted the discovery of an entire language family before any of it was attested" },
          { id: "c", label: "He derived the sounds from Hittite and then confirmed them in the other daughters" },
          { id: "d", label: "He calculated the date of Proto-Indo-European and archaeology subsequently confirmed it" },
        ],
        correctChoiceId: "a",
        explanation: "Arguing purely from the shape of a hole in the reconstructed vowel system, he proposed sounds vanished from every attested daughter. Hittite's decipherment decades later showed a consonant exactly where his reconstruction required.",
      },
      {
        dimension: "reasoning",
        prompt: "Why are macro-families like Nostratic viewed sceptically by historical linguists?",
        choices: [
          { id: "a", label: "Past ~10,000 years, change sinks correspondences below chance" },
          { id: "b", label: "The languages involved lack written records, so no comparison is possible in principle" },
          { id: "c", label: "The proposals contradict the archaeological evidence for human migration patterns" },
          { id: "d", label: "Regular sound change ceases to operate once a language family becomes sufficiently large" },
        ],
        correctChoiceId: "a",
        explanation: "The scepticism is methodological rather than conservative. Any two languages share accidental look-alikes, and given enough time the real signal falls below that noise floor — so the method simply cannot reach that far.",
      },
      {
        dimension: "depth",
        prompt: "Why does the method rely on basic vocabulary rather than cultural terms?",
        choices: [
          { id: "a", label: "Kinship and body parts resist borrowing; culture words travel" },
          { id: "b", label: "Basic vocabulary changes faster, so it yields more correspondences per unit of time" },
          { id: "c", label: "Cultural terms are usually compounds and so cannot be compared phonologically" },
          { id: "d", label: "Basic vocabulary is more likely to have been written down in early records" },
        ],
        correctChoiceId: "a",
        explanation: "Borrowing is the main confound with descent, and it clusters in cultural domains. Terms for kin, body parts and low numerals are borrowed far less readily, so correspondences there are better evidence of a shared ancestor.",
      },
    ],
    sources: [
      { label: "Comparative method (linguistics) (overview)", note: "Reference on reconstruction, correspondence and regularity.", type: "Reference", url: "https://en.wikipedia.org/wiki/Comparative_method" },
      { label: "Laryngeal theory (overview)", note: "Reference on Saussure's reconstruction and its Hittite confirmation.", type: "Reference", url: "https://en.wikipedia.org/wiki/Laryngeal_theory" },
    ],
  },
  {
    concept: "Creolisation and Language Contact",
    level: "University",
    summary: "how a full language can emerge in a generation, and what that reveals",
    estimatedMinutes: 9,
    deck: "Most languages descend slowly from a parent. Creoles do not: they arise in a generation or two, out of a makeshift contact jargon, with grammatical machinery their sources never supplied. Explaining where that structure comes from is one of the sharpest windows linguistics has onto how the language faculty works.",
    keyTerms: [
      { label: "Pidgin", value: "A simplified contact medium with no native speakers, used between groups sharing no language." },
      { label: "Creole", value: "A full natural language that has emerged from a contact situation and acquired native speakers." },
      { label: "Substrate and superstrate", value: "The subordinate languages and the dominant lexifier feeding into a contact language." },
      { label: "Language bioprogram hypothesis", value: "Bickerton's claim that children impose innate structure where input is impoverished." },
    ],
    sections: [
      {
        heading: "Pidgin and creole are not the same thing",
        body: [
          `A pidgin emerges when groups with no shared language must communicate — typically in trade, plantation or labour contexts. It is a makeshift: reduced vocabulary drawn mostly from the dominant language, minimal and variable grammar, heavy reliance on context, and crucially no native speakers. Everyone using it has another first language. It is a tool, not a mother tongue, and it is correspondingly limited: little morphology, no consistent way to mark tense or embed clauses.`,
          `A creole is what happens when a pidgin acquires native speakers — when children grow up with it as their first language. And the transformation is not gradual polishing. The output is a full natural language with consistent grammar, systematic tense-aspect marking, embedding, and every expressive capacity any language has. Anything sayable in English is sayable in Haitian Creole. This matters because the children did something their input did not contain: they built systematic grammatical machinery from a source that had none.`,
        ],
      },
      {
        heading: "The bioprogram claim",
        body: [
          `Derek Bickerton drew the strongest conclusion. Studying Hawaiian Creole English, he argued the creole's grammar could not have come from the pidgin, which lacked it, nor from the substrate languages, which had different systems, nor from the lexifier, which the children barely heard properly. Yet creoles worldwide, arising independently from unrelated language pairs, converge on strikingly similar features — SVO order, preverbal particles marking tense, mood and aspect in a consistent sequence, similar question formation.`,
          `His explanation was the language bioprogram hypothesis: where input is too impoverished to specify a grammar, children fall back on an innate default, and creoles reveal that default because nothing else was available to override it. If true, this is spectacular — a natural experiment exposing the language faculty's factory settings, and the strongest evidence anywhere for a substantive innate endowment. The convergence across unrelated creoles is the crux: independent recurrence of the same solutions is hard to explain by coincidence.`,
        ],
      },
      {
        heading: "The case against the natural experiment",
        body: [
          `The hypothesis has been heavily contested, and the objections are strong. Historically, the sharp pidgin-to-creole break Bickerton needs looks doubtful: sociohistorical work suggests creole formation was often gradual, spanning generations, with pidgin and creole features coexisting — so the single-generation leap may be an artefact of thin records. If so, the children had more input than the model assumes.`,
          `Substratists argue the grammar came from the substrate languages after all, with speakers relexifying their existing grammar using the dominant language's words — the structure was inherited, wearing borrowed vocabulary. That would explain the similarities without any bioprogram, especially where creoles arose from typologically similar substrates, as many Atlantic creoles did from West African languages. Others note that "creole features" may be less universal than claimed, partly because the canon was defined by studying a related set of cases, and partly because the label "creole" is sociohistorical rather than structural — which makes claiming that creoles share a typology dangerously close to circular.`,
        ],
      },
      {
        heading: "What the sign languages showed",
        body: [
          `The cleanest evidence came from an unexpected direction. Nicaraguan Sign Language emerged in the 1980s when deaf children, previously isolated, were brought together in schools for the first time. The first cohort developed a rudimentary signing system — a pidgin, essentially. Younger children arriving into that community did not merely learn it; they systematised it, adding consistent grammatical structure, spatial agreement and regularity the older signers' input lacked. Researchers watched a language become grammatical in real time, across cohorts, with the input documented.`,
          `This is the natural experiment creolistics wanted, and it supports the core insight while sidestepping the historical objections: nobody disputes what the input was, because it was observed. Children given unsystematic input imposed system on it, and the younger the learner, the more systematic the output. Whatever one concludes about a specific innate bioprogram, the finding that children are not passive absorbers but active regularisers — that they contribute structure their input does not supply — has survived. Language change is not only transmission with drift; each generation of learners is an engine that pushes toward system, which may be why languages are structured at all.`,
        ],
      },
      {
        heading: "Why creoles are not broken languages",
        body: [
          `The socially important upshot is a correction to a widespread and damaging assumption. Creoles are routinely dismissed as broken, lazy or simplified versions of their lexifiers — Haitian Creole as bad French, Jamaican Patois as bad English — and speakers are treated accordingly in schools and workplaces. Linguistically this is simply false. Creoles have full, rule-governed grammars, systematic tense-aspect systems that are often more regular than their lexifier's, and complete expressive power. A Jamaican Patois speaker is not failing at English; they are speaking a different language with its own grammar, and a speaker who commands both is bilingual rather than deficient. The judgement that a creole is broken tracks the social status of its speakers, not any property of the language — which is worth remembering whenever a way of speaking is described as lazy or incorrect.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is the defining difference between a pidgin and a creole?",
        choices: [
          { id: "a", label: "A creole has native speakers and a full grammar; a pidgin has neither" },
          { id: "b", label: "A creole is written whereas a pidgin exists only in spoken form" },
          { id: "c", label: "A creole draws vocabulary from one language while a pidgin mixes several" },
          { id: "d", label: "A creole is officially recognised by a state and a pidgin is not" },
        ],
        correctChoiceId: "a",
        explanation: "A pidgin is a makeshift tool with reduced grammar and no first-language speakers. A creole is what emerges when children acquire it natively — and the output is a full language with expressive power its input lacked.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the crux of Bickerton's bioprogram argument?",
        choices: [
          { id: "a", label: "Unrelated creoles converge on similar grammar, hard to call chance" },
          { id: "b", label: "Creoles preserve the grammar of the lexifier more faithfully than the pidgin did" },
          { id: "c", label: "Creole speakers acquire their language faster than speakers of established languages" },
          { id: "d", label: "Creoles are simpler than their source languages, revealing the minimal grammar possible" },
        ],
        correctChoiceId: "a",
        explanation: "Independent recurrence is the load-bearing observation: creoles arising from unrelated language pairs converge on SVO order, preverbal TMA particles in consistent sequence, similar question formation — which he attributed to an innate default surfacing.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the substratist alternative to the bioprogram?",
        choices: [
          { id: "a", label: "Substrate grammar relexified with dominant vocabulary" },
          { id: "b", label: "The grammar was taught explicitly by lexifier speakers to the enslaved population" },
          { id: "c", label: "Creole grammar emerged randomly and the observed similarities are coincidental" },
          { id: "d", label: "The pidgin already contained full grammar that later analysis failed to detect" },
        ],
        correctChoiceId: "a",
        explanation: "On this account the structure was inherited from the substrate and wearing borrowed words, which would explain cross-creole similarity without innateness — especially where substrates were typologically similar, as with West African languages and Atlantic creoles.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is Nicaraguan Sign Language such powerful evidence?",
        choices: [
          { id: "a", label: "The input was observed, so children demonstrably added structure their models lacked" },
          { id: "b", label: "It arose without any adult contact, isolating the innate contribution completely" },
          { id: "c", label: "It reproduced the grammar of Spanish, showing the lexifier supplies the structure" },
          { id: "d", label: "It developed over centuries, allowing gradual change to be tracked precisely" },
        ],
        correctChoiceId: "a",
        explanation: "The historical objection to creole evidence is that we cannot know what the input was. Here researchers watched it: younger cohorts systematised the older signers' rudimentary system, and the younger the learner the more systematic the output.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is calling a creole a 'broken' version of its lexifier linguistically false?",
        choices: [
          { id: "a", label: "Creoles have full rule-governed grammars, often more regular than the lexifier's" },
          { id: "b", label: "Creoles retain more of the lexifier's original grammar than modern varieties do" },
          { id: "c", label: "Creole speakers are typically fluent in the lexifier language as well" },
          { id: "d", label: "Creoles have larger vocabularies than the languages they emerged from" },
        ],
        correctChoiceId: "a",
        explanation: "A Patois speaker is not failing at English but speaking a different language with its own systematic grammar and complete expressive power. The 'broken' judgement tracks the social status of the speakers, not any property of the language.",
      },
    ],
    sources: [
      { label: "Creole language (overview)", note: "Reference on pidgins, creoles and the bioprogram debate.", type: "Reference", url: "https://en.wikipedia.org/wiki/Creole_language" },
      { label: "Nicaraguan Sign Language (overview)", note: "Reference on the emergence of grammar observed across cohorts.", type: "Reference", url: "https://en.wikipedia.org/wiki/Nicaraguan_Sign_Language" },
    ],
  },
  {
    concept: "Grammaticalisation",
    level: "University",
    summary: "lexical words turning into grammatical markers",
    estimatedMinutes: 9,
    deck: "'I'm going to eat' once meant physically travelling somewhere to eat. Now 'gonna' just marks the future, and the movement has vanished. Grammaticalisation is the slow process by which ordinary words erode into grammar itself — one of the deepest and most surprising ways languages change.",
    keyTerms: [
      { label: "Grammaticalisation", value: "The process by which lexical words become grammatical markers over time." },
      { label: "Semantic bleaching", value: "The loss of a word's original concrete meaning as it becomes grammatical." },
      { label: "Lexical vs grammatical", value: "Content words with rich meaning versus function words that do grammatical work." },
      { label: "Cline", value: "The gradual pathway along which a word moves from lexical toward grammatical." },
    ],
    sections: [
      {
        heading: "When content words become grammar",
        body: [
          `Languages contain two broad kinds of word. Lexical (or content) words — nouns, verbs, adjectives — carry rich, specific meaning: "dog", "run", "beautiful". Grammatical (or function) words and markers — articles, prepositions, auxiliaries, endings — carry little independent meaning but do structural work: "the", "of", "will", the "-ed" of past tense. Grammaticalisation is the remarkable process by which words of the first kind gradually turn into words of the second: content words erode into grammar.`,
          `This is a one-way street travelled slowly over centuries, and it is one of the major forces shaping how languages evolve. New grammatical machinery does not usually appear from nowhere; it is recycled from ordinary vocabulary that has been worn down and repurposed. Much of the grammar you use every day began life as concrete, meaningful words that lost their meaning and hardened into structure.`,
        ],
      },
      {
        heading: "The 'going to' story",
        body: [
          `The classic example is the English future "going to". Originally it was purely literal: "I am going to London" described physical movement toward a place. In a phrase like "I am going to marry her", the movement sense could bleach away, leaving just the idea of a future intention — you need not be travelling anywhere. Over time "going to" became a general marker of the future, detached from motion entirely, so we say "it's going to rain" though nothing is going anywhere.`,
          `The final stage is erosion of form: "going to" contracts to "gonna", a reduced grammatical marker barely resembling the verb it came from. Notice you cannot say "I'm gonna London" — the shrunken form only works in its new grammatical role, not the old literal one. In this single history you can watch a concrete verb of motion drain of meaning, shed its form, and end up as pure future tense. The same journey produced "will" (from an old verb meaning "to want") and countless grammatical markers across the world's languages.`,
        ],
      },
      {
        heading: "Bleaching and eroding",
        body: [
          `Grammaticalisation typically involves two linked changes. The first is semantic bleaching: the word loses its rich, concrete meaning and keeps only an abstract, grammatical function. "Going to" loses "motion" and keeps "future"; the verb "have" in "I have eaten" has lost all sense of possessing anything and become a mere marker of the perfect tense. The vivid meaning fades to a structural signal.`,
          `The second is phonetic erosion: as a word becomes predictable grammatical machinery, it tends to shorten and weaken. "Going to" becomes "gonna", "want to" becomes "wanna", and in many languages former independent words end up fused onto others as endings. Because these markers are used constantly and carry little information, speech shrinks them. Meaning bleaches, form erodes, and an independent word is gradually absorbed into the grammatical skeleton of the language.`,
        ],
      },
      {
        heading: "Why it reshapes languages",
        body: [
          `Grammaticalisation matters because it reveals grammar itself as historical and constantly renewing, not a fixed timeless system. The endings and function words that feel like the eternal bones of a language are, on a long enough view, recycled vocabulary at various stages of decay. Studying it shows how grammatical systems are born, and lets linguists trace where a language's machinery came from by following the trail back to the content words it originated in.`,
          `It also proceeds along recognisable pathways, or "clines" — a word tends to move in predictable steps from full lexical meaning toward grammatical function, and similar journeys recur across unrelated languages (verbs of motion becoming futures, verbs of possession becoming past-tense markers). This regularity means grammaticalisation is not random drift but a structured process, giving linguists a powerful lens on how the grammar of every human language quietly rebuilds itself over time.`,
        ],
      },
      {
        heading: "The grammar forming in your mouth",
        body: [
          `You can catch grammaticalisation happening in your own speech. "Gonna", "wanna" and "gotta" are grammatical markers in the making, worn down from "going to", "want to" and "got to". The quotative "like" ("I'm like, no way") is an ordinary word being pressed into a new grammatical job right now, much to older speakers' irritation. When you use "kind of" to soften a statement, or notice a full word shrinking into a mere grammatical tic, you are watching the same process that, given a few centuries, turns everyday vocabulary into the invisible grammatical scaffolding of the language — proof that grammar is not handed down finished but is forever being built out of the words we already have.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is grammaticalisation?",
        choices: [
          { id: "a", label: "Content words turning into grammatical markers" },
          { id: "b", label: "One language adopting another's grammatical endings" },
          { id: "c", label: "Grammatical rules being deliberately standardised" },
          { id: "d", label: "New grammatical categories being coined outright" },
        ],
        correctChoiceId: "a",
        explanation: "Grammaticalisation is the slow, one-way process by which content words (nouns, verbs) erode into grammatical machinery (auxiliaries, markers) — much everyday grammar began as ordinary vocabulary.",
      },
      {
        dimension: "reasoning",
        prompt: "How did 'going to' become a future marker like 'gonna'?",
        choices: [
          { id: "a", label: "Its motion sense bleached to future, then eroded" },
          { id: "b", label: "Its future sense was borrowed from a French idiom" },
          { id: "c", label: "It carried the future sense from its earliest use" },
          { id: "d", label: "It was coined deliberately as a shortened form" },
        ],
        correctChoiceId: "a",
        explanation: "From literal movement ('going to London'), the motion sense drained in phrases about intention, leaving a pure future ('it's going to rain'), and the form eroded to 'gonna' — which cannot take the old literal meaning.",
      },
      {
        dimension: "depth",
        prompt: "What is 'semantic bleaching' in grammaticalisation?",
        choices: [
          { id: "a", label: "Losing concrete sense, keeping a grammatical role" },
          { id: "b", label: "A word acquiring a sharper, more concrete sense" },
          { id: "c", label: "A word narrowing to one specialised meaning" },
          { id: "d", label: "A word splitting into two competing senses" },
        ],
        correctChoiceId: "a",
        explanation: "Bleaching is the loss of rich meaning for a structural one: 'have' in 'I have eaten' keeps no sense of possessing anything, having become a marker of the perfect tense.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does phonetic erosion (like 'going to' → 'gonna') tend to accompany grammaticalisation?",
        choices: [
          { id: "a", label: "Frequent low-information markers shorten" },
          { id: "b", label: "Because eroded forms carry more information, not less" },
          { id: "c", label: "Because rare words erode faster than frequent ones" },
          { id: "d", label: "Because writing, not speech, drives the shortening" },
        ],
        correctChoiceId: "a",
        explanation: "As a word becomes predictable grammatical machinery used constantly and carrying little information, speech reduces it — 'going to' to 'gonna', 'want to' to 'wanna' — often fusing onto other words.",
      },
      {
        dimension: "reasoning",
        prompt: "What does grammaticalisation reveal about grammar itself?",
        choices: [
          { id: "a", label: "Grammar is historical and self-renewing" },
          { id: "b", label: "That grammar is sealed off from the lexicon" },
          { id: "c", label: "That grammar predates the vocabulary it governs" },
          { id: "d", label: "That grammatical change runs the opposite way" },
        ],
        correctChoiceId: "a",
        explanation: "The function words and endings that seem like a language's eternal bones are recycled content words in various states of decay, showing grammar is born and constantly rebuilt from ordinary vocabulary.",
      },
    ],
    sources: [
      { label: "Essentials of Linguistics (open textbook)", note: "Open textbook material on language change and how grammar evolves.", type: "Textbook", url: "https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/" },
      { label: "Grammaticalisation (overview)", note: "Reference on bleaching, erosion and clines.", type: "Reference", url: "https://en.wikipedia.org/wiki/Grammaticalization" },
    ],
  },
  {
    concept: "Register",
    level: "A-level",
    summary: "language choices shaped by situation, audience and status",
    estimatedMinutes: 8,
    deck: "You do not speak to your boss the way you text your best friend, and you switch between them without a thought. Register is that constant, mostly unconscious adjustment of language to fit the situation — and getting it wrong, in either direction, is one of the fastest ways to misjudge a room.",
    keyTerms: [
      { label: "Register", value: "The variety of language chosen to suit a situation, audience and purpose." },
      { label: "Formality", value: "The dimension of register running from casual to highly formal." },
      { label: "Jargon", value: "Specialised vocabulary of a profession." },
      { label: "Code-switching", value: "Shifting between languages, dialects or registers according to context." },
    ],
    sections: [
      {
        heading: "One speaker, many voices",
        body: [
          `Register is the way we adjust our language to fit the situation we are in — the audience, the setting, the purpose, and how formal the occasion is. The same person commands many registers and moves between them constantly: the clipped efficiency of a work email, the warmth of chatting with family, the careful formality of a job interview, the shorthand of a group chat. You are not being inconsistent; you are matching your language to context, which is a core communicative skill.`,
          `Crucially, register is not about "good" versus "bad" language. Casual speech is not incorrect and formal speech is not superior; each is appropriate to its setting and out of place elsewhere. The skill lies in fit. Slang at a funeral, or stiff legalese with close friends, both jar — not because either variety is wrong in itself, but because it clashes with the situation. Register is a matter of appropriateness, not correctness.`,
        ],
      },
      {
        heading: "The dimensions of register",
        body: [
          `Register varies along several dimensions at once. The most obvious is formality: a scale from very casual ("wanna grab a bite?") through neutral ("would you like to get lunch?") to highly formal ("I would be delighted to invite you to dine"). We slide along this scale according to how much social distance and ceremony the situation demands. The more formal the register, the more it tends toward full forms, complex sentences, and careful, often Latin-derived vocabulary.`,
          `Register also involves specialised vocabulary, or jargon: the technical terms shared within a profession or group. Doctors, lawyers, coders and gamers each have a register dense with terms that are efficient shorthand for insiders but opaque to outsiders. Jargon is not inherently bad — it lets specialists communicate precisely and quickly — but it excludes those who do not share it, which is why using it with the wrong audience signals either carelessness or a deliberate flex of expertise.`,
        ],
      },
      {
        heading: "Switching codes",
        body: [
          `The ability to move between registers, dialects or even languages according to context is called code-switching. Many people do it fluidly: speaking one way at home and another at work, shifting into standard forms for a formal setting and back to a regional dialect among friends, or (for multilingual speakers) alternating languages within a conversation depending on topic and company. Each variety is deployed where it fits.`,
          `Code-switching is a sophisticated skill, not a sign of confusion, and it carries social weight. Choosing which register or dialect to use signals identity, belonging, respect and power. It can build rapport (matching a friend's casual style) or maintain distance (staying formal), include or exclude, assert authority or show deference. But it can also expose inequalities: speakers of stigmatised dialects are often pressured to switch to a "standard" variety to be taken seriously, which places a burden on them that speakers of the prestige variety never feel. Register choices are never purely neutral; they are woven into the social order.`,
        ],
      },
      {
        heading: "Reading and misreading the room",
        body: [
          `Because register signals so much, getting it wrong is costly in both directions. Too informal, and you can seem disrespectful, unprofessional or naïve — slang and emojis in a formal complaint undermine it. Too formal, and you can seem cold, pompous or distant — stiff, elaborate language with close friends creates awkwardness rather than respect. Skilled communicators read the situation and calibrate, and much of what we call social or professional polish is really finely judged register.`,
          `This is also why register is central to writing well. Good writing is not the most elaborate writing; it is writing pitched correctly for its audience and purpose. A brilliant academic register fails in a tabloid; a chatty register fails in a legal contract. Learning to write and speak effectively is largely learning to control register deliberately — to command the whole range from intimate to formal and choose consciously, rather than defaulting to one voice regardless of the room.`,
        ],
      },
      {
        heading: "The voices you switch between",
        body: [
          `You perform register shifts dozens of times a day, mostly on autopilot. Compare how you text a friend ("omg same lol") with how you write a cover letter, how you speak to a toddler versus a manager, how you talk in a job interview versus the pub afterwards. You feel it when someone gets it wrong: the over-familiar stranger, the colleague whose email is bafflingly stiff, the professional drowning you in jargon. And if you speak a regional dialect or a second language, you know the effort of code-switching to a "standard" to be taken seriously. Every one of those adjustments is register — the quiet, constant tailoring of language to the room, which turns out to be one of the most useful social skills you have.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is register in language?",
        choices: [
          { id: "a", label: "The variety chosen for the situation" },
          { id: "b", label: "The standard grammar enforced in formal writing" },
          { id: "c", label: "The set of sounds a speaker can produce" },
          { id: "d", label: "The accent that marks a speaker's origin" },
        ],
        correctChoiceId: "a",
        explanation: "Register is how we adjust language to fit context — audience, setting, formality — moving between a work email, family chat and interview without a thought.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is register a matter of appropriateness rather than correctness?",
        choices: [
          { id: "a", label: "Each variety fits its setting, wrong elsewhere" },
          { id: "b", label: "Because casual speech breaks grammatical rules" },
          { id: "c", label: "Because only the standard variety has real rules" },
          { id: "d", label: "Because appropriateness is fixed by grammar alone" },
        ],
        correctChoiceId: "a",
        explanation: "Slang at a funeral and legalese with friends both jar not because either variety is wrong in itself but because it clashes with the situation — the skill is fit, not correctness.",
      },
      {
        dimension: "depth",
        prompt: "What is jargon?",
        choices: [
          { id: "a", label: "Specialised vocabulary of a profession" },
          { id: "b", label: "Vocabulary invented to exclude outsiders deliberately" },
          { id: "c", label: "Overly formal words used to sound authoritative" },
          { id: "d", label: "The slang shared within an informal peer group" },
        ],
        correctChoiceId: "a",
        explanation: "Jargon is the technical vocabulary shared by insiders — efficient shorthand for specialists but opaque to outsiders, which is why using it with the wrong audience excludes people.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is code-switching described as a skill rather than confusion?",
        choices: [
          { id: "a", label: "The right variety signals identity and belonging" },
          { id: "b", label: "Because it blends two dialects into an unstable mix" },
          { id: "c", label: "Because it always defaults to the prestige variety" },
          { id: "d", label: "Because it signals indecision to the listener" },
        ],
        correctChoiceId: "a",
        explanation: "Code-switching fluidly deploys different varieties where they fit, carrying social weight — building rapport, showing respect, asserting authority — a sophisticated skill, though stigmatised-dialect speakers often bear an unfair pressure to switch.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can getting register wrong be costly in both directions?",
        choices: [
          { id: "a", label: "Too informal reads rude; too formal reads cold" },
          { id: "b", label: "Only mismatches in writing ever cause real problems" },
          { id: "c", label: "Only unfamiliar audiences notice a register error" },
          { id: "d", label: "Register errors matter only in professional settings" },
        ],
        correctChoiceId: "a",
        explanation: "Slang in a formal complaint undermines it, while stiff language with friends creates awkwardness — skilled communicators calibrate to the situation, which is much of what we call social and professional polish.",
      },
    ],
    sources: [
      { label: "Essentials of Linguistics (open textbook)", note: "Open textbook material on sociolinguistics, register and variation.", type: "Textbook", url: "https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/" },
      { label: "Register (sociolinguistics) (overview)", note: "Reference on register, formality, jargon and code-switching.", type: "Reference", url: "https://en.wikipedia.org/wiki/Register_(sociolinguistics)" },
    ],
  },
];

export const linguisticsEtymologyLessons = buildAuthoredLessons(
  "linguistics-etymology",
  linguisticsEtymology,
);
