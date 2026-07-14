import { buildAuthoredLessons, type AuthoredLesson } from "./types";

// Ten hand-written Linguistics & Etymology lessons: researched, concept-specific
// prose with real examples and named ideas, each closing on an everyday-life
// example, plus genuine recall quizzes.
const linguisticsEtymology: AuthoredLesson[] = [
  {
    concept: "Morphemes",
    level: "GCSE",
    summary: "the smallest meaningful units in words",
    estimatedMinutes: 7,
    deck: "Words are not the smallest pieces of meaning — they are built from smaller ones. 'Unhappiness' is really three bricks: un + happy + ness. Morphemes are those bricks, and once you can see them, you can take almost any word apart and understand how it was made.",
    keyTerms: [
      { label: "Morpheme", value: "The smallest unit of language that carries meaning or grammatical function." },
      { label: "Free vs bound", value: "Free morphemes stand alone ('cat'); bound ones must attach to something ('-s', 'un-')." },
      { label: "Root, prefix, suffix", value: "The core of a word and the bits added before and after it." },
      { label: "Inflection vs derivation", value: "Inflection tweaks grammar ('cats'); derivation makes new words ('happiness')." },
    ],
    sections: [
      {
        heading: "The atoms of meaning",
        body: [
          `A morpheme is the smallest unit of language that still carries meaning. It is tempting to think the word is the basic unit, but many words break down further. Take "cats": it is two morphemes, "cat" (the animal) plus "-s" (meaning "more than one"). "Unhappiness" is three: "un-" (not), "happy" (the core), and "-ness" (the quality of). Each piece contributes something, and you cannot chop them smaller without losing meaning — "hap" or "-nes" mean nothing on their own here.`,
          `This matters because it reveals language as a construction kit. Speakers do not memorise every word whole; they combine a stock of morphemes according to rules, which is how you can instantly understand a word you have never seen. Tell someone a "wug" is a creature, and they will unhesitatingly say two are "wugs" — applying the plural morpheme to a word that does not exist. That reflex shows morphemes are real, active pieces in the mind, not just spelling.`,
        ],
      },
      {
        heading: "Free and bound",
        body: [
          `Morphemes come in two basic kinds. A free morpheme can stand alone as a word: "cat", "happy", "run", "book". A bound morpheme cannot survive on its own and must attach to something: "-s", "-ed", "un-", "-ness", "-ing". You would never say just "ness" or "un" as words; they only exist clinging to a host. This free-versus-bound distinction is one of the first things linguists use to analyse a word.`,
          `The bound pieces are further split into prefixes, which attach at the front ("un-happy", "re-do", "pre-view"), and suffixes, which attach at the back ("happy-ness", "quick-ly", "kind-est"). A single root can gather several: "un-friend-li-ness" stacks a prefix and three suffixes onto the root "friend". Seeing these layers is like seeing the scaffolding of a word — you understand not just what it means but how it was assembled.`,
        ],
      },
      {
        heading: "Two jobs: grammar and new words",
        body: [
          `Bound morphemes do two quite different jobs. Inflectional morphemes adjust a word's grammar without changing its core identity or part of speech: adding "-s" for plural ("dog" to "dogs"), "-ed" for past tense ("walk" to "walked"), "-er" for comparison ("fast" to "faster"). English has only a handful of these, but they are used constantly. They tweak a word to fit the sentence; "dogs" is still the noun "dog".`,
          `Derivational morphemes, by contrast, create genuinely new words, often changing the part of speech. Add "-ness" to the adjective "happy" and you get the noun "happiness"; add "-ly" to it and you get the adverb "happily"; add "-en" to "dark" and you get the verb "darken". Derivation is how a language multiplies its vocabulary from a limited set of roots, endlessly generating new words from old parts.`,
        ],
      },
      {
        heading: "Cracking unfamiliar words",
        body: [
          `Understanding morphemes turns intimidating words into solvable puzzles, especially with the Latin and Greek pieces that fill academic and technical English. Break "unbelievable" into "un-" (not) + "believe" + "-able" (able to be), and its meaning is transparent. "Biology" is "bio-" (life) + "-logy" (study of); "geography" is "geo-" (earth) + "-graphy" (writing/description). Learn a stock of common roots and affixes and you can decode thousands of words you have never formally met.`,
          `This is exactly how the famously long "antidisestablishmentarianism" is understood — not memorised whole, but parsed: "anti-" (against) + "dis-" (reversal) + "establishment" + "-arian" (a supporter) + "-ism" (a doctrine), meaning opposition to withdrawing state support from a church. Nobody stores that as a single lump. The word is built and read morpheme by morpheme, which is the whole point: morphology is a system for making, and unmaking, meaning from parts.`,
        ],
      },
      {
        heading: "The words you decode daily",
        body: [
          `You use morphemes as a decoder every day without noticing. Meet a new word like "unfollowable", "microplastics" or "de-influencing" and you understand it instantly by its parts, never having seen it before. Brands and slang exploit this too: "Netflix", "Instagram", "-gate" stuck onto any scandal, "-core" onto any aesthetic ("cottagecore"). When you coin a plural for a made-up word, add "un-" to something for effect, or work out a medical term from its Latin roots, you are doing morphology — combining the smallest meaningful bricks of language, which is how the vocabulary keeps expanding faster than any dictionary can chase.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is a morpheme?",
        choices: [
          { id: "a", label: "The smallest unit of language that carries meaning or grammatical function" },
          { id: "b", label: "Any complete word" },
          { id: "c", label: "A single speech sound" },
          { id: "d", label: "A sentence" },
        ],
        correctChoiceId: "a",
        explanation: "A morpheme is the smallest meaningful unit: 'cats' is two morphemes ('cat' + '-s'), and 'unhappiness' is three ('un-' + 'happy' + '-ness'). Chop smaller and the meaning is lost.",
      },
      {
        dimension: "depth",
        prompt: "What is the difference between a free and a bound morpheme?",
        choices: [
          { id: "a", label: "Free morphemes are longer than bound ones" },
          { id: "b", label: "A free morpheme can stand alone as a word; a bound one must attach to something" },
          { id: "c", label: "Free morphemes are only used in speech" },
          { id: "d", label: "They are two names for the same thing" },
        ],
        correctChoiceId: "b",
        explanation: "A free morpheme like 'cat' or 'happy' works alone; a bound morpheme like '-s', 'un-' or '-ness' cannot survive on its own and must cling to a host.",
      },
      {
        dimension: "reasoning",
        prompt: "The 'wug test', where people say two 'wugs' for a made-up creature, shows that:",
        choices: [
          { id: "a", label: "People memorise every plural word individually" },
          { id: "b", label: "Morphemes are active rules in the mind, applied even to words that don't exist" },
          { id: "c", label: "Made-up words cannot be pluralised" },
          { id: "d", label: "Plurals are purely a spelling convention" },
        ],
        correctChoiceId: "b",
        explanation: "Applying the plural '-s' to a word never heard before shows morphemes are real, active pieces speakers combine by rule, not just whole words stored in memory.",
      },
      {
        dimension: "reasoning",
        prompt: "How does an inflectional morpheme differ from a derivational one?",
        choices: [
          { id: "a", label: "Inflection adjusts grammar without changing the word's identity; derivation creates a new word, often changing its part of speech" },
          { id: "b", label: "Inflection creates new words; derivation only marks plurals" },
          { id: "c", label: "They both only attach as prefixes" },
          { id: "d", label: "Inflection is bound; derivation is free" },
        ],
        correctChoiceId: "a",
        explanation: "Inflection like '-s' or '-ed' tweaks grammar ('dog' stays a noun as 'dogs'); derivation like '-ness' makes a new word and can change the part of speech ('happy' becomes the noun 'happiness').",
      },
      {
        dimension: "reasoning",
        prompt: "How is a long word like 'antidisestablishmentarianism' actually understood?",
        choices: [
          { id: "a", label: "It is memorised as a single indivisible lump" },
          { id: "b", label: "It is parsed morpheme by morpheme from its recognisable parts" },
          { id: "c", label: "It cannot be understood at all" },
          { id: "d", label: "Only by looking it up letter by letter" },
        ],
        correctChoiceId: "b",
        explanation: "The word is built and read from parts — 'anti-' + 'dis-' + 'establishment' + '-arian' + '-ism' — which is why knowing common roots and affixes lets you decode thousands of unfamiliar words.",
      },
    ],
    sources: [
      { label: "Essentials of Linguistics (open textbook)", note: "Open textbook chapters on morphology and word structure.", type: "Textbook", url: "https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/" },
      { label: "Morpheme (overview)", note: "Reference on free/bound morphemes, inflection and derivation.", type: "Reference", url: "https://en.wikipedia.org/wiki/Morpheme" },
    ],
  },
  {
    concept: "Phonemes",
    level: "GCSE",
    summary: "contrastive sound units that change meaning",
    estimatedMinutes: 7,
    deck: "Say 'pat' and 'bat'. A single sound separates them, and that difference flips the meaning. Phonemes are the handful of contrasting sounds a language uses to build all its words — and the reason a sound that matters in one language can be invisible to speakers of another.",
    keyTerms: [
      { label: "Phoneme", value: "A sound unit that can change the meaning of a word when swapped." },
      { label: "Minimal pair", value: "Two words differing by a single sound, proving that sound is a phoneme." },
      { label: "Allophone", value: "Variant pronunciations of the same phoneme that don't change meaning." },
      { label: "Phoneme inventory", value: "The specific set of contrastive sounds a given language uses." },
    ],
    sections: [
      {
        heading: "Sounds that make a difference",
        body: [
          `A phoneme is a unit of sound that can distinguish one word from another. The test is beautifully simple: swap one sound for another and see if the meaning changes. "Pat" and "bat" differ in just their first sound, yet they are completely different words — so /p/ and /b/ are separate phonemes in English. "Bat", "bit", "but", "bought" show the same for vowels. Phonemes are the meaningful sound-contrasts a language is built from.`,
          `This is why linguists study the sounds of speech, not the letters of spelling, which are a messy and unreliable guide. English spelling is notorious: the "gh" in "enough" sounds like /f/, but is silent in "though". A famous joke spells "fish" as "ghoti" — "gh" as in "enough", "o" as in "women", "ti" as in "nation". Phonemes describe the actual sound system underneath the chaotic spelling, which is why they are written in a special phonetic alphabet, between slashes.`,
        ],
      },
      {
        heading: "The minimal pair test",
        body: [
          `The core tool for finding phonemes is the minimal pair: two words that differ in exactly one sound and mean different things. "Ship" and "sheep" are a minimal pair, proving the two vowel sounds are distinct phonemes in English. "Rip" and "lip", "thin" and "thing", "cat" and "cad" — each pair isolates a single contrast and demonstrates that swapping that one sound changes the word.`,
          `If two sounds never form a minimal pair — if swapping them never changes a word's meaning — then to that language they are effectively "the same" sound, mere variations. English speakers use a slightly different "p" in "pin" (with a puff of air) and "spin" (without), but since no English word depends on that difference, speakers do not even notice it. These non-contrasting variants are called allophones: different sounds that count as one phoneme.`,
        ],
      },
      {
        heading: "Every language draws its own lines",
        body: [
          `Crucially, which sound differences count as meaningful is different in every language. Each language has its own phoneme inventory — the specific set of contrasts it uses — and languages carve up the space of possible sounds differently. A distinction that is meaningful in one language can be invisible in another, and vice versa. This is not about ability; it is about which contrasts your language trained your ear to notice.`,
          `The classic example is that English keeps /r/ and /l/ as separate phonemes ("rice" versus "lice"), but Japanese does not treat them as distinct, so Japanese speakers learning English often struggle to hear or produce the difference — not from any deficiency, but because their native system never marked it as meaningful. Equally, English speakers struggle with contrasts other languages make and English ignores. Your phoneme inventory is a filter you acquired as a baby, and it shapes what you can easily hear.`,
        ],
      },
      {
        heading: "Why the ear goes deaf young",
        body: [
          `Infants can hear the sound contrasts of every language, but during the first year of life the brain tunes itself to the phonemes that actually matter in the language around them, and gradually stops registering distinctions that language ignores. By adulthood, we literally struggle to perceive sound differences our native phoneme system treats as irrelevant. This is why a foreign accent is so persistent and why some contrasts feel impossible to master.`,
          `Understanding phonemes therefore explains a lot about language learning. When you cannot hear the difference between two foreign vowels, or your teacher insists two sounds are different when they seem identical to you, you are bumping against your own phoneme inventory. The sounds are physically there; your ear was simply trained, long ago, to file them under one category. Learning a language's phonemes is partly re-teaching your ear to notice contrasts it learned to ignore.`,
        ],
      },
      {
        heading: "The accent you can't shake",
        body: [
          `You feel phonemes at work whenever you meet a language whose sounds fight your ear. Maybe you cannot reliably tell apart two vowels in French or tones in Mandarin, or a friend learning English keeps mixing up sounds you find obvious. That is not stupidity on anyone's part — it is two phoneme inventories drawing the lines in different places. It also explains why autocorrect and voice assistants stumble on accents, and why "ghoti" is funny: spelling and sound are only loosely related. The set of contrasts your language wired into you as a baby is quietly shaping every foreign word you struggle to say.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is a phoneme?",
        choices: [
          { id: "a", label: "A letter of the alphabet" },
          { id: "b", label: "A sound unit that can change a word's meaning when swapped" },
          { id: "c", label: "The smallest unit of meaning in grammar" },
          { id: "d", label: "A complete syllable" },
        ],
        correctChoiceId: "b",
        explanation: "A phoneme is a contrastive sound: swapping /p/ for /b/ turns 'pat' into 'bat', proving they are distinct phonemes. Phonemes describe sound, not spelling.",
      },
      {
        dimension: "depth",
        prompt: "What does a 'minimal pair' like 'ship' and 'sheep' demonstrate?",
        choices: [
          { id: "a", label: "That the two differing sounds are distinct phonemes in the language" },
          { id: "b", label: "That the words are spelled the same" },
          { id: "c", label: "That the words mean the same thing" },
          { id: "d", label: "That the words come from the same root" },
        ],
        correctChoiceId: "a",
        explanation: "A minimal pair differs by exactly one sound and changes meaning, proving that sound is a separate phoneme — here, the two vowels are distinct phonemes in English.",
      },
      {
        dimension: "reasoning",
        prompt: "English speakers use different 'p' sounds in 'pin' and 'spin' but don't notice. Why?",
        choices: [
          { id: "a", label: "Because the two are allophones — variants of one phoneme, since no English word depends on the difference" },
          { id: "b", label: "Because they are actually identical sounds" },
          { id: "c", label: "Because 'p' is not a phoneme in English" },
          { id: "d", label: "Because spelling makes them the same" },
        ],
        correctChoiceId: "a",
        explanation: "Since swapping the two 'p' sounds never changes an English word's meaning, they count as one phoneme with two allophones — non-contrasting variants speakers don't even perceive.",
      },
      {
        dimension: "reasoning",
        prompt: "Why do Japanese speakers often struggle to hear the English /r/–/l/ difference?",
        choices: [
          { id: "a", label: "Because they cannot physically hear" },
          { id: "b", label: "Because Japanese does not treat /r/ and /l/ as distinct phonemes, so their system never marked the contrast as meaningful" },
          { id: "c", label: "Because English /r/ and /l/ are actually the same sound" },
          { id: "d", label: "Because Japanese has no consonants" },
        ],
        correctChoiceId: "b",
        explanation: "Each language has its own phoneme inventory. Japanese does not contrast /r/ and /l/, so the distinction was never marked as meaningful — a filter acquired in infancy, not any deficiency.",
      },
      {
        dimension: "reasoning",
        prompt: "Why do some foreign sound contrasts feel almost impossible for adults to hear?",
        choices: [
          { id: "a", label: "Because in the first year of life the brain tunes to native phonemes and stops registering ignored distinctions" },
          { id: "b", label: "Because adults lose all hearing ability" },
          { id: "c", label: "Because those sounds don't really exist" },
          { id: "d", label: "Because foreign languages have no phonemes" },
        ],
        correctChoiceId: "a",
        explanation: "Infants perceive all contrasts, but the brain tunes to the phonemes that matter locally and stops registering the rest — so adults struggle to hear distinctions their native system filed as irrelevant.",
      },
    ],
    sources: [
      { label: "Essentials of Linguistics (open textbook)", note: "Open textbook chapters on phonetics and phonology.", type: "Textbook", url: "https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/" },
      { label: "Phoneme (overview)", note: "Reference on phonemes, minimal pairs and allophones.", type: "Reference", url: "https://en.wikipedia.org/wiki/Phoneme" },
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
      { label: "Constituent", value: "A group of words that behaves as a single unit within a sentence." },
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
          { id: "a", label: "That grammaticality is separate from meaning — a sentence can be well-formed yet meaningless" },
          { id: "b", label: "That all sentences must make sense to be grammatical" },
          { id: "c", label: "That English has no grammar rules" },
          { id: "d", label: "That word order does not matter" },
        ],
        correctChoiceId: "a",
        explanation: "The sentence is nonsense but recognisably well-formed English, while the scrambled version is ungrammatical — showing the mind holds structural rules independent of meaning.",
      },
      {
        dimension: "depth",
        prompt: "What is a 'constituent' in syntax?",
        choices: [
          { id: "a", label: "A single word only" },
          { id: "b", label: "A group of words that behaves as a single unit within a sentence" },
          { id: "c", label: "The meaning of a sentence" },
          { id: "d", label: "A punctuation mark" },
        ],
        correctChoiceId: "b",
        explanation: "Constituents are word-clusters that act as units — 'the old dog' can be replaced by 'it' — and syntax describes how sentences are built from these nested groups, not flat strings.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does 'I saw the man with the telescope' have two meanings?",
        choices: [
          { id: "a", label: "Because 'with the telescope' can attach either to 'saw' or to 'the man' — two different structures" },
          { id: "b", label: "Because 'telescope' has two definitions" },
          { id: "c", label: "Because the sentence is ungrammatical" },
          { id: "d", label: "Because the words are in the wrong order" },
        ],
        correctChoiceId: "a",
        explanation: "The identical words can be grouped two ways — the telescope as the instrument of seeing, or as something the man holds — a structural ambiguity showing sentences have architecture beyond word order.",
      },
      {
        dimension: "depth",
        prompt: "What is 'recursion' in syntax, and why does it matter?",
        choices: [
          { id: "a", label: "Embedding structures within structures without limit, letting finite rules generate infinite sentences" },
          { id: "b", label: "Repeating the same word many times" },
          { id: "c", label: "Reading a sentence backwards" },
          { id: "d", label: "Memorising a fixed list of sentences" },
        ],
        correctChoiceId: "a",
        explanation: "Recursion embeds clauses inside clauses endlessly, so a finite grammar produces infinitely many possible sentences — explaining how you routinely build and understand entirely new ones.",
      },
      {
        dimension: "depth",
        prompt: "What broad word-order pattern does English mainly follow?",
        choices: [
          { id: "a", label: "Subject–Verb–Object, as in 'the dog chased the ball'" },
          { id: "b", label: "Verb–Subject–Object always" },
          { id: "c", label: "Object–Subject–Verb always" },
          { id: "d", label: "Word order is completely free in English" },
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
      { label: "Compositionality", value: "The meaning of a sentence is built from its parts and how they combine." },
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
          { id: "a", label: "The literal, conventional meaning of words and sentences" },
          { id: "b", label: "Only the sounds of speech" },
          { id: "c", label: "Only what a speaker implies in a situation" },
          { id: "d", label: "The history of where words came from" },
        ],
        correctChoiceId: "a",
        explanation: "Semantics concerns literal, conventional meaning — what words and sentences mean in themselves — as opposed to context-based implication (pragmatics) or word origins (etymology).",
      },
      {
        dimension: "reasoning",
        prompt: "Why is 'the morning star is the evening star' informative rather than empty?",
        choices: [
          { id: "a", label: "Because the two expressions share a reference (Venus) but differ in sense" },
          { id: "b", label: "Because they refer to two different planets" },
          { id: "c", label: "Because neither expression means anything" },
          { id: "d", label: "Because stars have no fixed meaning" },
        ],
        correctChoiceId: "a",
        explanation: "Frege's point: both pick out Venus (same reference) but present it differently (different sense), so identifying them is a genuine discovery, not a tautology — showing meaning is more than pointing.",
      },
      {
        dimension: "depth",
        prompt: "What does the principle of compositionality say?",
        choices: [
          { id: "a", label: "The meaning of a complex expression is built from its parts and how they combine" },
          { id: "b", label: "Every sentence must be memorised as a whole" },
          { id: "c", label: "Word order never affects meaning" },
          { id: "d", label: "All expressions refer to real things" },
        ],
        correctChoiceId: "a",
        explanation: "Compositionality means sentence meaning is computed from word meanings and their combination — which is why you understand brand-new sentences, and why 'dog bites man' differs from 'man bites dog'.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is an idiom like 'kick the bucket' called non-compositional?",
        choices: [
          { id: "a", label: "Because its meaning (to die) is not built from the meanings of its parts and must be learned as a whole" },
          { id: "b", label: "Because it contains too many words" },
          { id: "c", label: "Because it has no meaning at all" },
          { id: "d", label: "Because it is grammatically incorrect" },
        ],
        correctChoiceId: "a",
        explanation: "Idioms defy compositionality: 'kick the bucket' does not derive from 'kick' plus 'bucket', so it must be learned whole — which is why idioms trip up learners and literal translation software.",
      },
      {
        dimension: "depth",
        prompt: "What is the difference between ambiguity and vagueness?",
        choices: [
          { id: "a", label: "Ambiguity is a word having two distinct meanings; vagueness is a word with an unclear boundary" },
          { id: "b", label: "They are the same thing" },
          { id: "c", label: "Ambiguity applies only to sentences, vagueness only to sounds" },
          { id: "d", label: "Vagueness means a word has two meanings; ambiguity means it has none" },
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
          { id: "a", label: "The literal dictionary meaning of words in isolation" },
          { id: "b", label: "Meaning in context — what speakers actually mean beyond the literal words" },
          { id: "c", label: "The sounds that distinguish words" },
          { id: "d", label: "The historical origins of words" },
        ],
        correctChoiceId: "b",
        explanation: "Pragmatics is meaning in use: how context and inference let 'It's cold in here' function as a request to shut a window, going beyond the literal content that semantics provides.",
      },
      {
        dimension: "reasoning",
        prompt: "Asked if Jane is a good employee, a speaker says only 'She's very punctual.' What is the implicature?",
        choices: [
          { id: "a", label: "That Jane is excellent at her job" },
          { id: "b", label: "That Jane is probably not good at the actual job, since a cooperative speaker would have said so" },
          { id: "c", label: "That the speaker does not know Jane" },
          { id: "d", label: "That punctuality is the only job requirement" },
        ],
        correctChoiceId: "b",
        explanation: "By Grice's cooperative principle, a helpful, adequately informative speaker would mention real competence if it existed; offering only punctuality implicates a criticism never literally stated.",
      },
      {
        dimension: "depth",
        prompt: "What is a 'speech act', in Austin's sense?",
        choices: [
          { id: "a", label: "An utterance that performs an action, like promising or naming, rather than merely describing" },
          { id: "b", label: "Any sentence spoken aloud" },
          { id: "c", label: "A grammatically correct sentence" },
          { id: "d", label: "A word with two meanings" },
        ],
        correctChoiceId: "a",
        explanation: "Saying 'I promise', 'I now pronounce you married' or 'I name this ship' enacts the promise, marriage or naming — language doing things, not just stating facts.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does 'Can you pass the salt?' work as a request rather than a literal question?",
        choices: [
          { id: "a", label: "Because we perform one speech act (a polite request) through the words of another (a question about ability)" },
          { id: "b", label: "Because it is grammatically a command" },
          { id: "c", label: "Because 'salt' implies a request" },
          { id: "d", label: "Because it is literally asking about your strength" },
        ],
        correctChoiceId: "a",
        explanation: "Indirect speech acts perform one action through another's form — a request dressed as a question — for politeness, which is why no one answers 'yes' and does nothing.",
      },
      {
        dimension: "reasoning",
        prompt: "Why do deictic words like 'here', 'now' and 'you' need context?",
        choices: [
          { id: "a", label: "Because they have no fixed reference and point to different things depending on who speaks, when and where" },
          { id: "b", label: "Because they have no meaning at all" },
          { id: "c", label: "Because they are always ambiguous in the same way" },
          { id: "d", label: "Because they are grammatically incorrect" },
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
      { label: "Semantic shift", value: "The change in a word's meaning over time." },
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
          { id: "a", label: "The change in a word's meaning over time" },
          { id: "b", label: "The change in a word's spelling" },
          { id: "c", label: "The borrowing of a word from another language" },
          { id: "d", label: "The breaking of a word into morphemes" },
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
          { id: "a", label: "Amelioration — meaning becoming more positive" },
          { id: "b", label: "Broadening — meaning becoming wider" },
          { id: "c", label: "Pejoration — meaning becoming more negative" },
          { id: "d", label: "Narrowing — meaning becoming more specific" },
        ],
        correctChoiceId: "c",
        explanation: "Pejoration is a slide toward the negative: 'awful' decayed from inspiring reverence to 'very bad', as 'silly' fell from 'blessed' to 'foolish' — the word's attitude flipped.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is metaphor described as a major engine of semantic shift?",
        choices: [
          { id: "a", label: "Because a word extended from a literal domain to a figurative one can have the figurative sense take over" },
          { id: "b", label: "Because metaphors are always errors" },
          { id: "c", label: "Because metaphor only affects spelling" },
          { id: "d", label: "Because metaphors never change meaning" },
        ],
        correctChoiceId: "a",
        explanation: "Words extend by metaphor and the new sense can dominate: 'broadcast' went from scattering seed to transmitting signals, and a computer 'mouse' was named for the animal it resembled.",
      },
      {
        dimension: "reasoning",
        prompt: "What does semantic shift suggest about complaints that a word is being used 'wrongly'?",
        choices: [
          { id: "a", label: "They often object to a shift already well underway, and today's 'error' may be tomorrow's standard" },
          { id: "b", label: "They always correctly identify permanent errors" },
          { id: "c", label: "They prove language never changes" },
          { id: "d", label: "They show meanings are fixed forever" },
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
    concept: "Cognates",
    level: "GCSE",
    summary: "words in different languages with a common ancestor",
    estimatedMinutes: 7,
    deck: "Why does English 'father' look so like German 'Vater', Latin 'pater' and Sanskrit 'pitar'? Because they are cognates — descendants of a single ancient word. Tracing these family resemblances let scholars reconstruct a lost mother tongue, and it lets you decode foreign vocabulary you have never studied.",
    keyTerms: [
      { label: "Cognate", value: "A word that shares a common ancestor with a word in another language." },
      { label: "Proto-language", value: "A reconstructed ancestral language from which related languages descend." },
      { label: "The comparative method", value: "Comparing languages systematically to reconstruct their shared parent." },
      { label: "False friends", value: "Words that look alike across languages but differ in meaning." },
    ],
    sections: [
      {
        heading: "Family resemblances between languages",
        body: [
          `Cognates are words in different languages that descend from the same ancestral word. English "night", German "Nacht", Dutch "nacht", Latin "nox/noct-", French "nuit", Spanish "noche" — all trace back to a single word in a common ancestor language. They are, quite literally, related: not borrowed from one another, but inherited separately from a shared source, like cousins who resemble each other because they share a grandparent.`,
          `This is different from borrowing. A loanword is passed directly from one language to another; cognates are the result of one original word being carried down separate branches of a family tree as languages split and diverged. The resemblance between "father", "Vater", "pater" and "pitar" is not because English took the word from German or Latin, but because all four inherited it, with changes, from the same distant source.`,
        ],
      },
      {
        heading: "Reconstructing a lost language",
        body: [
          `The systematic study of cognates gave rise to one of the great intellectual achievements of the 1800s: the reconstruction of Proto-Indo-European, an unrecorded language spoken thousands of years ago, ancestor to a vast family including English, German, Latin, Greek, Russian, Persian and Sanskrit. No text of it survives, yet scholars reconstructed much of it by comparing cognates across its descendant languages and working backwards.`,
          `They did this using the comparative method: line up cognates from many related languages and look for regular sound correspondences. Where Latin has a "p", the Germanic languages systematically have an "f" — "pater/father", "pes/foot", "piscis/fish". Such recurring, regular correspondences are not coincidence; they are the fingerprints of shared descent and predictable sound changes. From enough of these patterns, the ancestral forms can be inferred. It is a kind of linguistic detective work, reconstructing a lost language from the clues left in its children.`,
        ],
      },
      {
        heading: "Cognates as a shortcut",
        body: [
          `For a language learner, cognates are a gift. Because related languages share so much inherited vocabulary, you can often recognise or guess words in a language you have barely studied. An English speaker meeting French "nation", "table", "impossible" or "animal" understands them instantly, because English and French share huge numbers of cognates (many via Latin). Spanish "familia", "problema", "importante" are transparent for the same reason. Whole swathes of vocabulary come almost free.`,
          `Recognising cognates also builds intuition about how sounds correspond between languages, so that with a little practice you can predict forms. Once you notice that English words often have a Latin/Romance cousin, you can decode technical and academic vocabulary and make educated guesses across an entire language family. Cognates turn the daunting mass of foreign vocabulary into something partly familiar, giving you footholds from the very first day.`,
        ],
      },
      {
        heading: "The false friends trap",
        body: [
          `But there is a danger: false friends (also called false cognates), words that look or sound alike across languages but do not mean the same thing. Spanish "embarazada" looks like "embarrassed" but means "pregnant". French "librairie" is a bookshop, not a library. German "Gift" means poison, not a present. Italian "camera" is a room. These traps catch confident learners precisely because the resemblance feels so reliable.`,
          `False friends arise in two ways: sometimes the words are genuinely unrelated and merely resemble each other by chance, and sometimes they are true cognates whose meanings drifted apart through semantic shift after the languages split. Either way, the lesson is caution: a family resemblance in form is a useful clue but not a guarantee of shared meaning. Cognates are a powerful shortcut, but they must be used with an eye open for the words that look like friends and behave like traps.`,
        ],
      },
      {
        heading: "Guessing your way abroad",
        body: [
          `You use cognates whenever you travel or meet a related language and find you can read more than you expected — a French menu, a Spanish sign, an Italian label all yield up words that look reassuringly like English. You are leaning on shared ancestry, decoding vocabulary you never learned. And you have probably been burned by a false friend: confidently using an English-looking word abroad only to get a strange look, or to accidentally announce you are pregnant when you meant embarrassed. That mix of helpful familiarity and occasional trap is the everyday face of cognates — the family resemblance between languages, still visible thousands of years after they split.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is a cognate?",
        choices: [
          { id: "a", label: "A word borrowed directly from another language" },
          { id: "b", label: "A word that shares a common ancestor with a word in another language" },
          { id: "c", label: "A word with two meanings" },
          { id: "d", label: "A made-up word" },
        ],
        correctChoiceId: "b",
        explanation: "Cognates descend from the same ancestral word — like 'night', 'Nacht' and 'noche' — inherited separately down branches of a language family, not borrowed from one another.",
      },
      {
        dimension: "reasoning",
        prompt: "How does a cognate differ from a loanword?",
        choices: [
          { id: "a", label: "A cognate is inherited from a shared ancestor; a loanword is passed directly from one language to another" },
          { id: "b", label: "They are the same thing" },
          { id: "c", label: "A cognate is always more recent" },
          { id: "d", label: "A loanword has no meaning" },
        ],
        correctChoiceId: "a",
        explanation: "Cognates result from one original word carried down separate branches as languages diverge; loanwords are borrowed directly. 'Father' and 'Vater' are cognates, not borrowings.",
      },
      {
        dimension: "reasoning",
        prompt: "How did scholars reconstruct the unrecorded Proto-Indo-European language?",
        choices: [
          { id: "a", label: "By finding ancient texts written in it" },
          { id: "b", label: "By comparing cognates across descendant languages and using regular sound correspondences" },
          { id: "c", label: "By guessing randomly" },
          { id: "d", label: "By translating modern English backwards" },
        ],
        correctChoiceId: "b",
        explanation: "With no surviving text, the comparative method lined up cognates and exploited regular correspondences (Latin 'p' matching Germanic 'f': pater/father) to infer the ancestral forms.",
      },
      {
        dimension: "depth",
        prompt: "What are 'false friends'?",
        choices: [
          { id: "a", label: "Words that look or sound alike across languages but differ in meaning" },
          { id: "b", label: "Words that are always true cognates" },
          { id: "c", label: "Words with no equivalent in another language" },
          { id: "d", label: "Words that cannot be translated" },
        ],
        correctChoiceId: "a",
        explanation: "False friends resemble each other across languages but mean different things — Spanish 'embarazada' is 'pregnant', German 'Gift' is 'poison' — trapping learners who trust the resemblance.",
      },
      {
        dimension: "reasoning",
        prompt: "Why are cognates useful to a language learner?",
        choices: [
          { id: "a", label: "Because shared inherited vocabulary lets you recognise or guess many words in a related language you have barely studied" },
          { id: "b", label: "Because they guarantee identical meanings everywhere" },
          { id: "c", label: "Because they remove the need to learn grammar" },
          { id: "d", label: "Because they only exist in one language" },
        ],
        correctChoiceId: "a",
        explanation: "Related languages share large amounts of vocabulary, so an English speaker instantly understands French 'nation' or Spanish 'familia' — footholds from day one, provided you watch for false friends.",
      },
    ],
    sources: [
      { label: "Online Etymology Dictionary", note: "Word histories showing cognate relationships across languages.", type: "Reference", url: "https://www.etymonline.com/" },
      { label: "Cognate and the comparative method (overview)", note: "Reference on cognates, proto-languages and false friends.", type: "Reference", url: "https://en.wikipedia.org/wiki/Cognate" },
    ],
  },
  {
    concept: "Loanwords",
    level: "GCSE",
    summary: "words borrowed across languages through contact",
    estimatedMinutes: 7,
    deck: "When you eat a croissant, do yoga, check your algebra or shampoo your hair, you are speaking French, Sanskrit, Arabic and Hindi. English is a magpie language, and its borrowed words are a fossil record of every culture it ever traded with, fought, or admired.",
    keyTerms: [
      { label: "Loanword", value: "A word adopted from one language into another through contact." },
      { label: "Language contact", value: "The situation, through trade, conquest or migration, that lets words be borrowed." },
      { label: "Prestige borrowing", value: "Adopting words from a language seen as high-status or sophisticated." },
      { label: "Borrowing vs inheritance", value: "Taking a word from another language, versus descending from a shared ancestor." },
    ],
    sections: [
      {
        heading: "Words on the move",
        body: [
          `A loanword is a word taken from one language into another. Whenever peoples come into contact — through trade, conquest, migration, religion or culture — their languages exchange words, usually flowing from the language of whatever is new, prestigious or unfamiliar. English is one of history's great borrowers: a huge proportion of its vocabulary was adopted from other languages, so much so that a "purely native" English sentence is surprisingly hard to write.`,
          `This borrowing is not a weakness but a record. Each layer of loanwords marks a historical encounter. The words a language borrows, and from where, tell you who it traded with, who conquered whom, and which cultures it looked up to. To read the loanwords in English is to read a compressed history of the English-speaking peoples and everyone they came into contact with.`,
        ],
      },
      {
        heading: "The layers in English",
        body: [
          `English shows its history in distinct strata. From the Norse of Viking settlers came everyday words like "sky", "egg", "knife", "they" and "them" — so basic that they reshaped the core of the language. Then the Norman Conquest of 1066 poured in French: the rulers spoke French, so English gained thousands of words of power, law, cuisine and refinement — "government", "justice", "beef", "pork", "art", "royal".`,
          `That last pair reveals borrowing's social logic. The live animals kept by English-speaking peasants stayed Anglo-Saxon — "cow", "pig", "sheep" — while the cooked meat served to French-speaking lords took French names — "beef" (boeuf), "pork" (porc), "mutton" (mouton). The language literally preserves the class divide of medieval England. Later layers piled on: Latin and Greek for scholarship and science, and words from across the globe through trade and empire — "algebra" and "algorithm" from Arabic, "shampoo" and "pyjamas" from Hindi, "sofa" from Arabic, "tsunami" from Japanese.`,
        ],
      },
      {
        heading: "Why languages borrow",
        body: [
          `Borrowing happens for clear reasons. The commonest is need: when a new thing arrives — a food, a technology, an idea — the easiest label is the one it came with, so English simply took "sushi", "yoga", "robot", "ketchup" and "safari" along with the things they name. Rather than invent a native word, a language grabs the ready-made one.`,
          `The other great driver is prestige. Speakers borrow from languages they perceive as sophisticated, learned or fashionable, even when a native word already exists, because the foreign term carries status. Centuries of borrowing French and Latin into English for anything cultured or educated is prestige borrowing, which is why English often has a plain native word and a fancier borrowed synonym side by side — "ask" (native) versus "enquire" (French), "kingly" versus "royal" versus "regal", "gut" versus "intestine". The register climbs as the words get more borrowed.`,
        ],
      },
      {
        heading: "Settling in",
        body: [
          `Once borrowed, a word usually gets naturalised — reshaped to fit its new home. Its pronunciation shifts toward the borrowing language's sound system, it takes on native endings ("to google", "googled", "googling"), and speakers often forget it was ever foreign. Few English speakers sense anything imported about "cotton" (Arabic), "tea" (Chinese), "boss" (Dutch) or "ketchup" (from a Chinese dialect via Malay). The word has been fully absorbed.`,
          `This is why borrowing is not "corruption" of a language, as purists sometimes claim, but one of the main engines of its growth. Some languages resist, coining native replacements instead, but English has always borrowed enthusiastically, and its enormous, flexible vocabulary is partly the result. A living language in contact with others will borrow; the borrowed words settle in, breed and are forgotten as foreign, becoming simply part of the language — until only their etymology remembers where they came from.`,
        ],
      },
      {
        heading: "The world in your sentences",
        body: [
          `You speak a dozen languages at once without realising it. Your morning might involve coffee (Arabic via Turkish), a bagel (Yiddish), some yoga (Sanskrit), checking an algorithm (Arabic), a croissant (French) and a smorgasbord (Swedish) of choices. New loanwords keep arriving — "emoji" and "karaoke" from Japanese, "barista" from Italian, food words from every cuisine you can order. Every time you use a word for a foreign food, a borrowed bit of tech, or a term that just sounds classier than its plain English cousin, you are handling a loanword — a small fossil of contact between cultures, so worn smooth by use that you no longer feel it is foreign at all.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is a loanword?",
        choices: [
          { id: "a", label: "A word inherited from a shared ancestor language" },
          { id: "b", label: "A word taken from one language into another through contact" },
          { id: "c", label: "A made-up word with no origin" },
          { id: "d", label: "A word that has two meanings" },
        ],
        correctChoiceId: "b",
        explanation: "A loanword is adopted from another language through contact — trade, conquest, migration — which is why English is full of borrowed words like 'croissant', 'yoga' and 'algebra'.",
      },
      {
        dimension: "reasoning",
        prompt: "Why do English peasants' animals ('cow', 'pig') have native names while the meat ('beef', 'pork') has French ones?",
        choices: [
          { id: "a", label: "Because after 1066 French-speaking lords ate the meat while English-speaking peasants raised the animals" },
          { id: "b", label: "Because the animals arrived later than the meat" },
          { id: "c", label: "Because French has no word for animals" },
          { id: "d", label: "Because the words are unrelated by chance" },
        ],
        correctChoiceId: "a",
        explanation: "The Norman Conquest split the vocabulary along class lines: live animals kept their Anglo-Saxon names while the cooked meat served to French-speaking lords took French ones — the language preserves the medieval divide.",
      },
      {
        dimension: "depth",
        prompt: "What is 'prestige borrowing'?",
        choices: [
          { id: "a", label: "Borrowing words from a language seen as high-status, even when a native word exists" },
          { id: "b", label: "Borrowing only words for new inventions" },
          { id: "c", label: "Refusing to borrow any words" },
          { id: "d", label: "Borrowing words only from ancestor languages" },
        ],
        correctChoiceId: "a",
        explanation: "Prestige borrowing adopts terms from a language perceived as sophisticated for their status — centuries of French and Latin into English gave pairs like 'ask' versus 'enquire', where the register climbs with borrowing.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the most common practical reason a language borrows a word?",
        choices: [
          { id: "a", label: "Need — a new thing arrives with a ready-made label, so the language takes it (sushi, robot, ketchup)" },
          { id: "b", label: "To replace all native words" },
          { id: "c", label: "To make the language harder" },
          { id: "d", label: "Purely by accident" },
        ],
        correctChoiceId: "a",
        explanation: "The commonest driver is need: when a new food, technology or idea arrives, the easiest label is the one it came with, so English simply adopted 'sushi', 'robot' and 'safari' along with the things.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is borrowing described as an engine of growth rather than 'corruption'?",
        choices: [
          { id: "a", label: "Because borrowed words naturalise and enrich a language's vocabulary, as English's enthusiastic borrowing gave it a huge, flexible word-stock" },
          { id: "b", label: "Because borrowing destroys native words" },
          { id: "c", label: "Because only weak languages borrow" },
          { id: "d", label: "Because borrowed words never settle in" },
        ],
        correctChoiceId: "a",
        explanation: "Loanwords get naturalised — reshaped, given native endings, forgotten as foreign — and swell the vocabulary; English's vast flexible word-stock is partly the fruit of its enthusiastic borrowing.",
      },
    ],
    sources: [
      { label: "Online Etymology Dictionary", note: "Origins of individual English words and their source languages.", type: "Reference", url: "https://www.etymonline.com/" },
      { label: "Loanword (overview)", note: "Reference on borrowing, language contact and naturalisation.", type: "Reference", url: "https://en.wikipedia.org/wiki/Loanword" },
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
          { id: "a", label: "The process by which lexical content words become grammatical markers over time" },
          { id: "b", label: "The borrowing of grammar from another language" },
          { id: "c", label: "The correcting of grammatical errors" },
          { id: "d", label: "The invention of entirely new words" },
        ],
        correctChoiceId: "a",
        explanation: "Grammaticalisation is the slow, one-way process by which content words (nouns, verbs) erode into grammatical machinery (auxiliaries, markers) — much everyday grammar began as ordinary vocabulary.",
      },
      {
        dimension: "reasoning",
        prompt: "How did 'going to' become a future marker like 'gonna'?",
        choices: [
          { id: "a", label: "Its literal 'motion' meaning bleached away to leave 'future', then the form eroded to 'gonna'" },
          { id: "b", label: "It was borrowed from French" },
          { id: "c", label: "It always meant the future" },
          { id: "d", label: "It was invented by grammarians" },
        ],
        correctChoiceId: "a",
        explanation: "From literal movement ('going to London'), the motion sense drained in phrases about intention, leaving a pure future ('it's going to rain'), and the form eroded to 'gonna' — which cannot take the old literal meaning.",
      },
      {
        dimension: "depth",
        prompt: "What is 'semantic bleaching' in grammaticalisation?",
        choices: [
          { id: "a", label: "A word losing its concrete meaning while keeping an abstract grammatical function" },
          { id: "b", label: "A word gaining a richer, more vivid meaning" },
          { id: "c", label: "A word being deleted from the language" },
          { id: "d", label: "A word changing its spelling only" },
        ],
        correctChoiceId: "a",
        explanation: "Bleaching is the loss of rich meaning for a structural one: 'have' in 'I have eaten' keeps no sense of possessing anything, having become a marker of the perfect tense.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does phonetic erosion (like 'going to' → 'gonna') tend to accompany grammaticalisation?",
        choices: [
          { id: "a", label: "Because constantly used markers that carry little information tend to shorten and weaken in speech" },
          { id: "b", label: "Because grammatical words must always be long" },
          { id: "c", label: "Because speakers deliberately design shorter forms" },
          { id: "d", label: "Because erosion has nothing to do with grammaticalisation" },
        ],
        correctChoiceId: "a",
        explanation: "As a word becomes predictable grammatical machinery used constantly and carrying little information, speech reduces it — 'going to' to 'gonna', 'want to' to 'wanna' — often fusing onto other words.",
      },
      {
        dimension: "reasoning",
        prompt: "What does grammaticalisation reveal about grammar itself?",
        choices: [
          { id: "a", label: "That grammar is historical and constantly renewing — recycled vocabulary at various stages of decay, not a fixed timeless system" },
          { id: "b", label: "That grammar never changes" },
          { id: "c", label: "That grammar is invented by rule-makers" },
          { id: "d", label: "That grammar has no relation to vocabulary" },
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
      { label: "Jargon", value: "Specialised vocabulary shared within a profession or group." },
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
          { id: "a", label: "The variety of language chosen to suit the situation, audience and purpose" },
          { id: "b", label: "The correct grammar everyone must always use" },
          { id: "c", label: "A list of words in a dictionary" },
          { id: "d", label: "The volume at which someone speaks" },
        ],
        correctChoiceId: "a",
        explanation: "Register is how we adjust language to fit context — audience, setting, formality — moving between a work email, family chat and interview without a thought.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is register a matter of appropriateness rather than correctness?",
        choices: [
          { id: "a", label: "Because casual and formal varieties are each right for their setting and out of place elsewhere, not better or worse in themselves" },
          { id: "b", label: "Because formal language is always superior" },
          { id: "c", label: "Because casual language is always wrong" },
          { id: "d", label: "Because register has no rules" },
        ],
        correctChoiceId: "a",
        explanation: "Slang at a funeral and legalese with friends both jar not because either variety is wrong in itself but because it clashes with the situation — the skill is fit, not correctness.",
      },
      {
        dimension: "depth",
        prompt: "What is jargon?",
        choices: [
          { id: "a", label: "Specialised vocabulary shared within a profession or group" },
          { id: "b", label: "Deliberately incorrect grammar" },
          { id: "c", label: "Words borrowed from other languages" },
          { id: "d", label: "The most formal register available" },
        ],
        correctChoiceId: "a",
        explanation: "Jargon is the technical vocabulary shared by insiders — efficient shorthand for specialists but opaque to outsiders, which is why using it with the wrong audience excludes people.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is code-switching described as a skill rather than confusion?",
        choices: [
          { id: "a", label: "Because deploying the right register or dialect for each context signals identity, respect and belonging" },
          { id: "b", label: "Because it means a speaker cannot decide how to talk" },
          { id: "c", label: "Because it only happens by accident" },
          { id: "d", label: "Because it always uses the same variety" },
        ],
        correctChoiceId: "a",
        explanation: "Code-switching fluidly deploys different varieties where they fit, carrying social weight — building rapport, showing respect, asserting authority — a sophisticated skill, though stigmatised-dialect speakers often bear an unfair pressure to switch.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can getting register wrong be costly in both directions?",
        choices: [
          { id: "a", label: "Too informal seems disrespectful; too formal seems cold or pompous — each mismatch undermines communication" },
          { id: "b", label: "Only being too informal ever causes problems" },
          { id: "c", label: "Only being too formal ever causes problems" },
          { id: "d", label: "Register mismatches are never noticed" },
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
