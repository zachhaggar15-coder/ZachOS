import { buildAuthoredLessons, type AuthoredLesson } from "./types";

// Ten hand-written Literature lessons: researched, concept-specific prose with
// real works and named ideas, each closing on an everyday-life example, plus
// genuine recall quizzes.
const literature: AuthoredLesson[] = [
  {
    concept: "Close Reading",
    level: "GCSE",
    summary: "slow attention to words, patterns, images and form",
    estimatedMinutes: 7,
    deck: "Close reading is the foundational skill of literary study: slowing down until the small choices in a text — a repeated word, an odd image, a shift in rhythm — start to reveal meaning. It is the difference between reading to find out what happens and reading to see how the writing works.",
    keyTerms: [
      { label: "Close reading", value: "Detailed attention to the specific words, images and form of a text." },
      { label: "Textual evidence", value: "Quoting and analysing exact words to support an interpretation." },
      { label: "Diction", value: "A writer's specific word choices and their effects." },
      { label: "Practical criticism", value: "Analysing a text closely on its own terms, without outside context." },
    ],
    sections: [
      {
        heading: "Reading with the brakes on",
        body: [
          `Close reading is the practice of paying slow, detailed attention to the actual words of a text, rather than skimming for the gist. Where ordinary reading rushes toward what happens next, close reading stops and asks how the writing produces its effects: why this word and not a synonym, why this image recurs, why the sentence breaks where it does. It treats the text as something carefully made, in which small choices carry meaning.`,
          `This is the bedrock skill of literary study, because interpretation is only as good as the attention beneath it. A vague impression that a poem is "sad" becomes a real reading when you can point to the specific words, images and rhythms that create the sadness. Close reading is what turns a feeling about a text into an argument about it — one anchored in evidence you can show to someone else.`,
        ],
      },
      {
        heading: "The text as evidence",
        body: [
          `The core discipline of close reading is grounding every claim in textual evidence — the exact words on the page. It is not enough to assert that a character is menacing or a scene is tense; you must quote the specific language and show how it works. This makes literary interpretation a genuine argument rather than free-floating opinion: your reading stands or falls on whether the words actually support it.`,
          `This attention focuses on features like diction (the specific word choices and their connotations), imagery (the pictures the language builds), and patterns (words, sounds or images that repeat). A writer's choice of "gnarled" over "old", or the recurrence of images of water throughout a story, is data. Close reading trains you to notice this data and ask what it is doing — to read the text as a structure of deliberate choices rather than a transparent window onto a story.`,
        ],
      },
      {
        heading: "Where the method came from",
        body: [
          `Close reading was made central by a movement in the early 20th century. The critic I.A. Richards, teaching at Cambridge in the 1920s, ran experiments he called "practical criticism": he gave students poems stripped of titles and authors' names and asked them to analyse the words alone. The often-embarrassing results showed how poorly people read when deprived of reputation and context, and how much rigorous attention to the text itself could reveal.`,
          `This fed into New Criticism, which insisted the meaning of a literary work is found in the text itself — its language, structure and internal tensions — rather than in the author's biography or intentions. That emphasis had limits, and later critics rightly brought history, politics and context back in. But the New Critics' gift endures: the conviction that you must actually read the words with care, closely and repeatedly, before you say anything about what they mean.`,
        ],
      },
      {
        heading: "How to do it",
        body: [
          `In practice, close reading means reading a passage several times and interrogating it. What words stand out, and what do they connote? Are there patterns — repeated sounds, recurring images, a rhythm that speeds up or stalls? Where does the language do something surprising or contradictory? How do the form and structure — line breaks, sentence length, punctuation — shape how you experience the meaning? Every noticing is a thread to pull.`,
          `The goal is not to hunt for a single hidden "correct" answer but to build an interpretation that the details genuinely support and that illuminates the whole. Done well, close reading is generative: the more carefully you look, the more the text yields, and passages that seemed simple reveal unexpected depth. It is a skill that rewards patience, and it underlies every other kind of literary analysis — you cannot interpret, compare or theorise about a text you have not first read closely.`,
        ],
      },
      {
        heading: "Reading the fine print of anything",
        body: [
          `The close-reading habit reaches far beyond poetry. It is exactly what you do — or should do — when you scrutinise the precise wording of a contract, notice the loaded word in a news headline, or catch the telling phrase in a politician's carefully hedged statement. Song lyrics reward it; so does a well-crafted advert, where every word was chosen to move you. When you re-read a text from someone and parse it for what the exact wording implies, you are close reading. Learning to slow down and attend to how language is actually built, rather than skating over it, is a defence against being manipulated and a way of getting far more out of everything you read.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is close reading?",
        choices: [
          { id: "a", label: "Reading quickly to find out what happens" },
          { id: "b", label: "Slow, detailed attention to the specific words, images and form of a text" },
          { id: "c", label: "Researching an author's biography" },
          { id: "d", label: "Summarising a book's plot" },
        ],
        correctChoiceId: "b",
        explanation: "Close reading stops to ask how the writing produces its effects — why this word, this image, this rhythm — treating the text as carefully made, rather than skimming for the gist.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is grounding claims in textual evidence central to close reading?",
        choices: [
          { id: "a", label: "It turns interpretation into a genuine argument that stands or falls on whether the words support it" },
          { id: "b", label: "It makes the reading longer" },
          { id: "c", label: "It proves the author's intentions" },
          { id: "d", label: "It replaces the need to read the text" },
        ],
        correctChoiceId: "a",
        explanation: "Quoting exact words and showing how they work makes interpretation an argument rather than free-floating opinion — your reading depends on whether the language actually supports it.",
      },
      {
        dimension: "depth",
        prompt: "What did I.A. Richards's 'practical criticism' experiments involve?",
        choices: [
          { id: "a", label: "Giving students poems without titles or authors and asking them to analyse the words alone" },
          { id: "b", label: "Teaching students authors' biographies first" },
          { id: "c", label: "Having students write their own poems" },
          { id: "d", label: "Ranking poems by popularity" },
        ],
        correctChoiceId: "a",
        explanation: "Richards stripped poems of names and context to test how people read the words themselves; the often poor results showed how much careful attention to the text alone could reveal.",
      },
      {
        dimension: "reasoning",
        prompt: "What did New Criticism insist about where a work's meaning is found?",
        choices: [
          { id: "a", label: "In the author's biography and intentions" },
          { id: "b", label: "In the text itself — its language, structure and internal tensions" },
          { id: "c", label: "In the reader's mood" },
          { id: "d", label: "In the book's sales figures" },
        ],
        correctChoiceId: "b",
        explanation: "New Criticism located meaning in the text's own language and structure rather than the author's life — an emphasis with limits, but one that established the discipline of reading the words with care.",
      },
      {
        dimension: "depth",
        prompt: "Why is close reading called the foundation of other literary analysis?",
        choices: [
          { id: "a", label: "Because you cannot interpret, compare or theorise about a text you have not first read closely" },
          { id: "b", label: "Because it is the only method ever needed" },
          { id: "c", label: "Because it ignores the words of the text" },
          { id: "d", label: "Because it requires no evidence" },
        ],
        correctChoiceId: "a",
        explanation: "Interpretation is only as good as the attention beneath it; every other approach depends on first having read the words carefully, which is why close reading underlies all literary analysis.",
      },
    ],
    sources: [
      { label: "Purdue OWL: Literary Theory and Close Reading", note: "Practical guidance on analysing texts closely.", type: "Reference", url: "https://owl.purdue.edu/owl/subject_specific_writing/writing_in_literature/index.html" },
      { label: "Close reading (overview)", note: "Reference on the method, practical criticism and New Criticism.", type: "Reference", url: "https://en.wikipedia.org/wiki/Close_reading" },
    ],
  },
  {
    concept: "Narrative Voice",
    level: "GCSE",
    summary: "who speaks, what they know and how they shape the story",
    estimatedMinutes: 7,
    deck: "Every story is told by someone, and that someone is a choice with enormous power. Who narrates — what they know, what they hide, whether you can trust them — shapes everything you think you are learning. The first question of any story is not 'what happens?' but 'who is telling me, and why should I believe them?'",
    keyTerms: [
      { label: "Narrative voice", value: "The perspective and persona through which a story is told." },
      { label: "First vs third person", value: "A narrator inside the story ('I') versus one outside it ('he', 'she')." },
      { label: "Omniscient vs limited", value: "A narrator who knows everything versus one confined to a single viewpoint." },
      { label: "Unreliable narrator", value: "A narrator whose account cannot be fully trusted." },
    ],
    sections: [
      {
        heading: "The teller shapes the tale",
        body: [
          `Narrative voice is the perspective from which a story is told — the persona doing the telling. It is one of a writer's most powerful tools, because the same events narrated by a different voice become a different story. What the narrator knows, notices, emphasises and conceals controls what you, the reader, experience. Before analysing what happens in a story, you have to ask who is telling it and from what vantage point.`,
          `A first crucial distinction is between author, narrator and character, which are not the same. The author is the real person who wrote the book; the narrator is the voice within the book doing the telling; the characters are the people in the story. Confusing them is a basic error: a repellent narrator does not mean the author holds repellent views. The narrator is a constructed device, chosen deliberately, and part of reading well is keeping these layers apart.`,
        ],
      },
      {
        heading: "Person and knowledge",
        body: [
          `Narrators vary along two main axes. The first is grammatical person. A first-person narrator is a character within the story, telling it as "I" — intimate and immediate, but limited to what that one person can know and coloured by their perspective. A third-person narrator stands outside the story, referring to characters as "he" or "she", which allows a wider, less personal view.`,
          `The second axis is how much the narrator knows. An omniscient narrator is godlike, able to see into every character's mind and know everything, past and future. A limited narrator is confined to one character's viewpoint, seeing only what that person sees and knows. These choices shape the reader's whole relationship to the story: a limited third-person narrator restricts you to one consciousness, while omniscience lets you know things the characters do not — the source, for instance, of much dramatic irony.`,
        ],
      },
      {
        heading: "When you cannot trust the narrator",
        body: [
          `One of the most powerful voices is the unreliable narrator: a narrator whose account you cannot fully trust, because they are biased, deceived, deluded, dishonest, or simply limited in ways they do not realise. The reader gradually senses a gap between what the narrator says and what is really going on, and must read against the narration to reconstruct the truth. This creates a rich, active kind of reading, and a whole extra layer of meaning.`,
          `The technique is everywhere in great fiction. The narrator of Nabokov's Lolita, Humbert Humbert, is eloquent and charming and utterly not to be trusted, and the novel's power lies in the reader seeing through his self-justifying account. Nick Carraway in The Great Gatsby claims to be honest and non-judgemental while quietly shaping everything. An unreliable narrator turns reading into detective work: you are not just receiving a story but assessing the reliability of the person telling it.`,
        ],
      },
      {
        heading: "Voice as meaning",
        body: [
          `The choice of narrative voice is never neutral; it is bound up with a work's meaning. Telling a story from the viewpoint of a child, an outsider, or a villain forces the reader into a particular position and shapes their sympathies. Restricting the narration to one character's limited knowledge can generate suspense; opening it to omniscience can create irony or tragic inevitability. A story that switches between multiple narrators can show the same events refracted through conflicting perspectives, denying any single authoritative truth.`,
          `So analysing narrative voice means asking not just "who tells this?" but "what does this choice do?" Why did the author filter these events through this particular consciousness? What do we gain, and what are we prevented from seeing? Whose version are we getting, and whose are we denied? Because the teller shapes the tale, understanding the voice is often the key that unlocks how a story means what it means.`,
        ],
      },
      {
        heading: "Whose version are you getting?",
        body: [
          `You navigate narrative voice constantly outside fiction. Every anecdote a friend tells is narrated from their perspective, casting them favourably and shaping what you hear; the same argument recounted by the other person becomes a different story. A memoir, a court testimony, a news report, a social media post — each has a teller with a viewpoint, knowledge limits and reasons to emphasise some things and omit others. When you catch yourself asking "but what would the other person say?", or sensing that a confident account does not quite add up, you are reading for narrative voice — assessing not just the story but the reliability and angle of whoever is telling it.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "Why must you distinguish the author, the narrator and the characters?",
        choices: [
          { id: "a", label: "Because they are the same and interchangeable" },
          { id: "b", label: "Because the narrator is a constructed voice within the book, distinct from the real author who wrote it" },
          { id: "c", label: "Because only the author's views ever appear" },
          { id: "d", label: "Because characters write the book" },
        ],
        correctChoiceId: "b",
        explanation: "The author is the real writer; the narrator is the chosen voice telling the story; the characters are people in it. A repellent narrator does not mean the author shares those views — they are separate layers.",
      },
      {
        dimension: "depth",
        prompt: "What is the difference between an omniscient and a limited narrator?",
        choices: [
          { id: "a", label: "An omniscient narrator can see into every mind and know everything; a limited one is confined to one character's viewpoint" },
          { id: "b", label: "An omniscient narrator uses 'I'; a limited one uses 'he'" },
          { id: "c", label: "They are two words for the same thing" },
          { id: "d", label: "A limited narrator always lies" },
        ],
        correctChoiceId: "a",
        explanation: "Omniscience is godlike knowledge of all characters and events; a limited narrator sees only what one character sees and knows — a distinction separate from first- versus third-person.",
      },
      {
        dimension: "depth",
        prompt: "What is an unreliable narrator?",
        choices: [
          { id: "a", label: "A narrator whose account cannot be fully trusted, so the reader must read against it to find the truth" },
          { id: "b", label: "A narrator who tells the story out of order" },
          { id: "c", label: "A narrator who knows everything" },
          { id: "d", label: "A narrator who never appears in the story" },
        ],
        correctChoiceId: "a",
        explanation: "An unreliable narrator is biased, deceived or dishonest, creating a gap between what they say and what is really happening — as with Humbert Humbert in Lolita — so reading becomes detective work.",
      },
      {
        dimension: "reasoning",
        prompt: "How can restricting narration to one character's limited knowledge affect a story?",
        choices: [
          { id: "a", label: "It can generate suspense by confining the reader to what that character sees and knows" },
          { id: "b", label: "It removes all tension from the story" },
          { id: "c", label: "It makes the narrator omniscient" },
          { id: "d", label: "It has no effect on the reader" },
        ],
        correctChoiceId: "a",
        explanation: "A limited viewpoint keeps the reader in one consciousness, which can build suspense, while omniscience — letting readers know what characters do not — is a common source of dramatic irony.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is the choice of narrative voice never neutral?",
        choices: [
          { id: "a", label: "Because it positions the reader, shapes their sympathies, and controls what they can and cannot see" },
          { id: "b", label: "Because all narrators tell the identical story" },
          { id: "c", label: "Because voice only affects grammar" },
          { id: "d", label: "Because readers ignore who is telling the story" },
        ],
        correctChoiceId: "a",
        explanation: "Filtering events through a child, an outsider or a villain forces a particular position and shapes sympathies; the voice determines whose version you get and what you are prevented from seeing — so it is bound up with a work's meaning.",
      },
    ],
    sources: [
      { label: "Narration and point of view (overview)", note: "Reference on person, omniscience and unreliable narration.", type: "Reference", url: "https://en.wikipedia.org/wiki/Narration" },
      { label: "Purdue OWL: Writing in Literature", note: "Guidance on analysing narrative perspective.", type: "Reference", url: "https://owl.purdue.edu/owl/subject_specific_writing/writing_in_literature/index.html" },
    ],
  },
  {
    concept: "Symbolism",
    level: "GCSE",
    summary: "objects, images or actions carrying layered meaning",
    estimatedMinutes: 7,
    deck: "A green light across the water, a white whale, a caged bird: in literature, a thing can be both itself and much more. Symbolism is how writers pack abstract meaning into concrete images — but reading symbols well means testing them against the text, not just projecting whatever meaning you fancy.",
    keyTerms: [
      { label: "Symbol", value: "A concrete object, image or action that also stands for a larger abstract meaning." },
      { label: "Motif", value: "A recurring image or idea that builds meaning through repetition." },
      { label: "Conventional vs contextual", value: "Symbols with widely shared meanings versus ones a specific text creates." },
      { label: "Textual support", value: "Evidence in the text that justifies reading something as symbolic." },
    ],
    sections: [
      {
        heading: "A thing that means more",
        body: [
          `A symbol is something concrete — an object, an image, a colour, an action — that also carries a larger, often abstract meaning. A rose can be a flower and also stand for love; a journey can be a physical trip and also a spiritual transformation. Symbolism lets writers make abstract ideas vivid and resonant by anchoring them in tangible images, so that a story can be about grief, ambition or innocence without ever naming them directly.`,
          `This works because images stay with us more powerfully than abstractions. Rather than stating a theme outright, a writer can embody it in a symbol that recurs and accumulates meaning, letting the reader feel the idea rather than being told it. A well-handled symbol gives a text depth and unity, tying its concrete details to its deepest concerns.`,
        ],
      },
      {
        heading: "Shared symbols and made ones",
        body: [
          `Symbols come in two broad kinds. Conventional symbols carry meanings widely shared across a culture: a dove for peace, a skull for death, darkness for evil or ignorance, spring for rebirth. Writers can draw on these ready-made associations, trusting readers to recognise them. But the richest literary symbols are often contextual — created by a particular text, which builds a special meaning into an image through how it is used.`,
          `The famous green light in The Great Gatsby is not a conventional symbol; the novel makes it mean what it means through repetition and placement, so that it comes to stand for Gatsby's yearning, hope and the receding American Dream. Moby-Dick's white whale accrues layers of meaning across the whole novel. These symbols cannot be looked up in a dictionary; you have to read the text to see the meaning it constructs, which is why the same object can be symbolic in one work and not in another.`,
        ],
      },
      {
        heading: "The discipline of not over-reading",
        body: [
          `Symbolism is where interpretation most easily goes wrong, because it is tempting to declare anything a symbol of anything. The safeguard is textual support: a reading of a symbol must be justified by evidence in the text — how the image is described, where it recurs, what it is associated with. Not every object is a symbol, and "the curtains were blue" may just mean the curtains were blue. The question is whether the text invites and sustains a symbolic reading.`,
          `Good symbolic reading therefore tests interpretations against recurring evidence rather than projecting a meaning onto the first available object. If an image appears once, in passing, with nothing to weight it, a grand symbolic claim is probably unfounded. If it recurs, is emphasised, connects to the work's themes, and is described in loaded language, a symbolic reading earns its keep. The skill is to be alert to symbolism without forcing it — to let the text tell you which of its details are carrying extra weight.`,
        ],
      },
      {
        heading: "Symbols that structure a whole work",
        body: [
          `The most powerful symbols do structural work, organising a whole text. In Lord of the Flies, the conch shell that summons the boys to order comes to symbolise civilisation and democratic authority, and its eventual smashing marks the collapse into savagery — a single object tracing the novel's central argument. Recurring symbols like this become motifs, threading through a work so that its meaning gathers force with each appearance.`,
          `Reading such symbols enriches a text enormously, revealing a design beneath the surface events. But the point is not to reduce a rich work to a code to be cracked, as if every image had one fixed "answer". The best symbols are suggestive and multiple, resisting a single tidy translation. Symbolism rewards attention and interpretation, not decoding — you are tracing how a concrete image carries and complicates meaning, not solving a puzzle with one right solution.`,
        ],
      },
      {
        heading: "The symbols you live among",
        body: [
          `You read symbols fluently every day. A wedding ring, a national flag, a designer logo, a poppy worn in November — each is an object that means far more than itself, exactly as a literary symbol does. Films lean on it heavily: a storm gathering as conflict brews, a caged bird for a trapped character, a colour that recurs around danger. You also know the over-reading trap — the friend who insists every detail of a film is a deep symbol when sometimes a cigar is just a cigar. Learning to spot genuine symbolism, and to test it against the evidence rather than inventing it, is the same skill whether you are reading a novel, watching a film, or decoding the loaded imagery of an advert.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is a symbol in literature?",
        choices: [
          { id: "a", label: "A concrete object, image or action that also stands for a larger abstract meaning" },
          { id: "b", label: "Any difficult word in a text" },
          { id: "c", label: "The author's signature" },
          { id: "d", label: "A summary of the plot" },
        ],
        correctChoiceId: "a",
        explanation: "A symbol is something concrete — a rose, a journey, a green light — that also carries an abstract meaning, letting writers embody ideas like love or hope in vivid images.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can't the green light in The Great Gatsby be looked up in a dictionary of symbols?",
        choices: [
          { id: "a", label: "Because it is a contextual symbol whose meaning the novel itself builds through repetition and placement" },
          { id: "b", label: "Because green always means money" },
          { id: "c", label: "Because it is a conventional symbol everyone knows" },
          { id: "d", label: "Because it has no meaning at all" },
        ],
        correctChoiceId: "a",
        explanation: "Unlike conventional symbols (a dove for peace), the green light is created by the text, accruing meaning — Gatsby's yearning and the receding dream — through how it is used, so you must read the novel to see it.",
      },
      {
        dimension: "reasoning",
        prompt: "What safeguards a symbolic reading against over-interpretation?",
        choices: [
          { id: "a", label: "Textual support — evidence in how the image is described, where it recurs and what it connects to" },
          { id: "b", label: "Declaring every object a symbol" },
          { id: "c", label: "Ignoring the text entirely" },
          { id: "d", label: "Relying only on the reader's mood" },
        ],
        correctChoiceId: "a",
        explanation: "A symbolic reading must be justified by evidence: not every object is a symbol, and 'the curtains were blue' may just be that. The test is whether the text invites and sustains the reading through emphasis and recurrence.",
      },
      {
        dimension: "depth",
        prompt: "What is the difference between a conventional and a contextual symbol?",
        choices: [
          { id: "a", label: "A conventional symbol has a widely shared cultural meaning; a contextual one is given meaning by a particular text" },
          { id: "b", label: "A conventional symbol is always longer" },
          { id: "c", label: "They mean the same thing" },
          { id: "d", label: "A contextual symbol is understood by everyone automatically" },
        ],
        correctChoiceId: "a",
        explanation: "Conventional symbols draw on shared associations (a dove for peace); contextual symbols, like the conch in Lord of the Flies, are built by a specific text through how they are used.",
      },
      {
        dimension: "reasoning",
        prompt: "Why should the best symbols not be treated as a code with one right answer?",
        choices: [
          { id: "a", label: "Because rich symbols are suggestive and multiple, resisting a single tidy translation" },
          { id: "b", label: "Because symbols have no meaning" },
          { id: "c", label: "Because every symbol means exactly one thing" },
          { id: "d", label: "Because decoding is the whole point of literature" },
        ],
        correctChoiceId: "a",
        explanation: "Powerful symbols suggest and complicate meaning rather than encoding a fixed answer; symbolism rewards interpretation and attention, not reducing a rich work to a puzzle with one solution.",
      },
    ],
    sources: [
      { label: "Symbolism in literature (overview)", note: "Reference on literary symbols, motifs and their interpretation.", type: "Reference", url: "https://en.wikipedia.org/wiki/Symbolism_(arts)" },
      { label: "Purdue OWL: Writing in Literature", note: "Guidance on analysing imagery and symbol with evidence.", type: "Reference", url: "https://owl.purdue.edu/owl/subject_specific_writing/writing_in_literature/index.html" },
    ],
  },
  {
    concept: "Irony",
    level: "A-level",
    summary: "gaps between appearance, intention, knowledge and outcome",
    estimatedMinutes: 8,
    deck: "Irony is the art of meaning more, or other, than you say. It runs on a gap — between words and intent, between what a character knows and what we know, between what is expected and what occurs — and learning to spot those gaps is learning to read for a text's sharpest, most sophisticated effects.",
    keyTerms: [
      { label: "Verbal irony", value: "Saying one thing while meaning another, often the opposite." },
      { label: "Dramatic irony", value: "When the audience knows something a character does not." },
      { label: "Situational irony", value: "When the outcome is the opposite of what was expected or intended." },
      { label: "Irony vs sarcasm", value: "Sarcasm is pointed, mocking verbal irony aimed at a target." },
    ],
    sections: [
      {
        heading: "The gap that makes irony",
        body: [
          `Irony arises from a gap between two levels: between what is said and what is meant, between what a character knows and what the audience knows, or between what is expected and what actually happens. In every case there is a discrepancy that the reader is invited to perceive, and the meaning lives in that gap. Irony is one of the most sophisticated effects in literature precisely because it requires the reader to hold two things at once and register the tension between them.`,
          `This makes irony demanding to read. To miss the gap is to misread entirely — to take an ironic statement at face value, or to fail to feel the weight of what a character does not know. Recognising irony is a mark of skilled reading, because the text often does not announce it; you have to detect the discrepancy yourself from cues in tone, context and situation.`,
        ],
      },
      {
        heading: "Three kinds of irony",
        body: [
          `Verbal irony is the most familiar: saying one thing while meaning another, often the opposite. Calling a disastrous day "wonderful" is verbal irony. Its sharpest, most mocking form is sarcasm, aimed pointedly at a target. Verbal irony depends on the listener recognising that the surface meaning is not the intended one — miss that, and the meaning inverts.`,
          `Dramatic irony works differently: it occurs when the audience knows something a character does not. We watch a character walk confidently toward a fate we can see coming, and the gap between their ignorance and our knowledge charges every word with extra meaning. Situational irony, the third kind, is when the outcome contradicts what was expected or intended — a fire station burning down, or a plan that produces exactly the opposite of its goal. Each depends on a different gap: between words and meaning, between character and audience, or between expectation and result.`,
        ],
      },
      {
        heading: "Dramatic irony and the ancient stage",
        body: [
          `Dramatic irony is one of the oldest and most powerful devices in drama, and Greek tragedy is its home. In Sophocles' Oedipus Rex, King Oedipus vows to hunt down the man whose crimes have cursed the city, not knowing — as the audience painfully does — that he himself is the culprit, that he has killed his own father and married his own mother. Every confident line he speaks about finding and punishing the guilty man lands with devastating weight, because we know what he does not.`,
          `This is why dramatic irony generates such intense tension and pathos. The audience is trapped in helpless foreknowledge, watching a character stride toward a doom they cannot see. It works in suspense and horror too — we know the danger behind the door that the character is about to open. The power comes entirely from the gap in knowledge: what would be an ordinary line becomes unbearable because of what the audience knows and the character does not.`,
        ],
      },
      {
        heading: "Irony as a way of seeing",
        body: [
          `Beyond specific techniques, irony can be a whole authorial stance — a way of writing that maintains a knowing distance, letting readers see more than characters do or than the surface states. An ironic narrator may present events deadpan while inviting us to judge them; a whole novel may be structured so that its outcomes quietly mock its characters' intentions. This sustained irony is a favourite tool of satire, which exposes folly and vice by letting the gap between pretension and reality speak for itself.`,
          `Irony's sophistication is also its risk: it can be missed, or it can tip into cynicism. But handled well, it is a tool of remarkable precision and honesty, able to hold contradictory truths together and to say difficult things obliquely. It respects the reader's intelligence, trusting them to perceive the gap rather than having it explained. To read for irony is to read alert to the possibility that a text means more, or other, than it appears to — which is often where its deepest meaning lies.`,
        ],
      },
      {
        heading: "The gaps you already feel",
        body: [
          `You handle all three ironies daily. You use verbal irony every time you say "great" about something terrible, and you brace when a friend's sarcasm might be misread in a text with no tone to carry it. You feel dramatic irony watching a horror film, screaming inwardly at the character not to open the door you know hides the killer, or watching a sitcom where you know the secret that a character does not. And you recognise situational irony when life delivers the opposite of what was intended — the diet plan that leads to comfort eating, the shortcut that takes longer. Naming these gaps is just making conscious a kind of double-vision you already use to enjoy stories and read people.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What underlies all forms of irony?",
        choices: [
          { id: "a", label: "A gap or discrepancy — between what is said and meant, known and unknown, or expected and actual" },
          { id: "b", label: "A rhyme scheme" },
          { id: "c", label: "A happy ending" },
          { id: "d", label: "A first-person narrator" },
        ],
        correctChoiceId: "a",
        explanation: "Irony lives in a gap between two levels — words versus meaning, character's knowledge versus audience's, expectation versus outcome — that the reader is invited to perceive.",
      },
      {
        dimension: "depth",
        prompt: "What is dramatic irony?",
        choices: [
          { id: "a", label: "Saying the opposite of what you mean" },
          { id: "b", label: "When the audience knows something a character does not" },
          { id: "c", label: "When the outcome is the opposite of what was expected" },
          { id: "d", label: "A very theatrical style of acting" },
        ],
        correctChoiceId: "b",
        explanation: "Dramatic irony is the gap between the audience's knowledge and a character's ignorance — we watch them move toward a fate we can see coming, charging their words with extra meaning.",
      },
      {
        dimension: "reasoning",
        prompt: "Why do Oedipus's confident vows to find the guilty man carry such devastating weight?",
        choices: [
          { id: "a", label: "Because the audience knows he himself is the culprit he is hunting, while he does not" },
          { id: "b", label: "Because he is speaking in verse" },
          { id: "c", label: "Because the audience does not understand the plot" },
          { id: "d", label: "Because he is being sarcastic" },
        ],
        correctChoiceId: "a",
        explanation: "This is dramatic irony: the audience knows Oedipus is the very man he vows to punish, so every confident line lands with tragic force because of the gap between his ignorance and our knowledge.",
      },
      {
        dimension: "depth",
        prompt: "What is situational irony?",
        choices: [
          { id: "a", label: "When the outcome contradicts what was expected or intended" },
          { id: "b", label: "When a narrator addresses the reader directly" },
          { id: "c", label: "When two characters argue" },
          { id: "d", label: "When a poem uses a strict meter" },
        ],
        correctChoiceId: "a",
        explanation: "Situational irony is a gap between expectation and result — a fire station burning down, a plan producing the opposite of its goal — distinct from verbal irony (words) and dramatic irony (knowledge).",
      },
      {
        dimension: "reasoning",
        prompt: "How can irony function as a whole authorial stance, especially in satire?",
        choices: [
          { id: "a", label: "By maintaining a knowing distance that lets the gap between pretension and reality expose folly" },
          { id: "b", label: "By explaining every joke to the reader" },
          { id: "c", label: "By removing all meaning from the text" },
          { id: "d", label: "By making the narrator omniscient" },
        ],
        correctChoiceId: "a",
        explanation: "Sustained irony keeps a knowing distance, letting readers see more than characters do; satire exploits this, exposing vice by letting the gap between characters' pretensions and reality speak for itself.",
      },
    ],
    sources: [
      { label: "Irony (overview)", note: "Reference on verbal, dramatic and situational irony.", type: "Reference", url: "https://en.wikipedia.org/wiki/Irony" },
      { label: "Sophocles, Oedipus Rex", note: "The classic source of dramatic irony on the tragic stage.", type: "Primary", url: "https://www.gutenberg.org/ebooks/31" },
    ],
  },
  {
    concept: "Genre",
    level: "A-level",
    summary: "shared conventions that guide expectations and meaning",
    estimatedMinutes: 8,
    deck: "The moment you know a story is a detective novel, a romance or a horror film, you already know a great deal about it. Genre is the invisible contract between writer and reader — a set of shared conventions that shapes expectations, and that the best works both rely on and deliberately break.",
    keyTerms: [
      { label: "Genre", value: "A category of text defined by shared conventions of form, content and style." },
      { label: "Convention", value: "A feature readers expect of a genre, like a mystery's final revelation." },
      { label: "Genre as contract", value: "The shared expectations that let a genre signal how it should be read." },
      { label: "Subverting genre", value: "Deliberately breaking conventions to create meaning or surprise." },
    ],
    sections: [
      {
        heading: "Categories with rules",
        body: [
          `Genre is a way of grouping texts by their shared conventions — recurring features of form, content, style and structure. Tragedy, comedy, detective fiction, romance, horror, the sonnet, the epic: each is a genre with its own familiar ingredients and patterns. Genres are not just library labels; they are sets of expectations that shape how a text is written and how it is read. Knowing a work's genre primes you for a whole cluster of features before you have read a word.`,
          `These conventions are what make a genre recognisable. A detective story leads you to expect a crime, an investigator, clues, suspects and a final revelation of the culprit. A romance sets up a couple, obstacles between them, and (usually) a resolution. A horror story promises threat, dread and the violation of safety. Readers absorb these patterns from experience, building an internal sense of "how this kind of story goes" that guides their reading.`,
        ],
      },
      {
        heading: "Genre as a contract",
        body: [
          `The most useful way to understand genre is as a contract between writer and reader. By signalling its genre — through title, cover, opening, style — a text tells you how to read it and what to expect, and you bring the appropriate expectations. This shared understanding is enormously efficient: the genre does a lot of the communicating, so the writer need not explain everything, and the reader knows how to orient themselves.`,
          `This contract shapes meaning, because the same event means different things in different genres. A death is grave and final in a tragedy but may be a puzzle to be solved in a detective story or a comic pratfall in a farce. A supernatural event is terrifying in horror and unremarkable in high fantasy. Reading well means reading a text partly in the light of its genre, understanding how it fulfils, and sometimes strains against, the conventions its genre sets up.`,
        ],
      },
      {
        heading: "Obeying and breaking the rules",
        body: [
          `Genre conventions are a resource writers actively work with, not a straitjacket. Much of the pleasure of genre fiction comes from a satisfying fulfilment of expectations — the detective does gather everyone to reveal the killer, the lovers do overcome the obstacle. But the most interesting works often deliberately subvert their genre, breaking a convention to create surprise, comment on the form, or make meaning. A detective story where the detective is the murderer, or a romance that refuses the happy ending, gets its force precisely from thwarting what you expected.`,
          `This is why genre is a dynamic, evolving thing rather than a fixed set of boxes. Writers bend conventions, blend genres, and parody or pay homage to earlier works, and genres themselves shift over time. A subversion only works because the convention is understood — you cannot meaningfully break a rule the reader does not know. So even the most rule-breaking work depends on the genre framework it is reacting against, which is why understanding conventions is essential to appreciating both the works that honour them and those that overturn them.`,
        ],
      },
      {
        heading: "Genre and value",
        body: [
          `Genre carries a history of snobbery worth noticing. So-called "genre fiction" — crime, romance, science fiction, fantasy, horror — has often been dismissed as lesser than "literary fiction", as if working within popular conventions were inherently inferior to supposedly convention-free literary work. But this distinction is shakier than it looks. "Literary fiction" is itself a genre with its own conventions, and many acknowledged masterpieces work squarely within popular genres, using their conventions to serious ends.`,
          `The more useful stance treats genre as a neutral descriptive tool rather than a ranking. What matters is not which genre a work belongs to but what it does with its conventions — whether it deploys them with skill, freshness and purpose. A brilliant detective novel and a brilliant literary novel are both brilliant; genre tells you what game each is playing, not how well it plays. Reading across genres, alert to the distinct conventions each brings, is far richer than defending a hierarchy between them.`,
        ],
      },
      {
        heading: "The expectations you bring",
        body: [
          `You use genre expertly every time you choose what to watch or read. Pick a rom-com and you expect a meet-cute, obstacles and a reunion; pick a thriller and you brace for danger and twists; a horror film sets you on edge before anything happens. You feel the contract when a film breaks it — the "romance" that ends in heartbreak, the whodunnit with no solution, the trailer that misleads you about the genre. Streaming services sort everything by genre precisely because it so reliably predicts what you will enjoy. Every time you sense "this isn't the kind of story I thought it was", you are feeling genre conventions being fulfilled or broken — the same contract that literature has always run on.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is a genre?",
        choices: [
          { id: "a", label: "A category of text defined by shared conventions of form, content and style" },
          { id: "b", label: "The length of a book" },
          { id: "c", label: "The name of the author" },
          { id: "d", label: "A single unique story with no relatives" },
        ],
        correctChoiceId: "a",
        explanation: "A genre groups texts by shared conventions — recurring features of form, content and style — that shape both how a work is written and how it is read.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is genre usefully understood as a 'contract' between writer and reader?",
        choices: [
          { id: "a", label: "Because signalling its genre tells the reader how to read it and what to expect, doing much of the communicating" },
          { id: "b", label: "Because writers must legally follow it" },
          { id: "c", label: "Because it fixes the price of the book" },
          { id: "d", label: "Because it prevents any originality" },
        ],
        correctChoiceId: "a",
        explanation: "By signalling genre, a text primes the reader's expectations efficiently, so the writer need not explain everything and the reader knows how to orient — a shared understanding that also shapes what events mean.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does subverting a genre convention depend on the reader knowing that convention?",
        choices: [
          { id: "a", label: "Because you cannot meaningfully break a rule the reader does not recognise, so the subversion relies on the genre framework" },
          { id: "b", label: "Because conventions are legally binding" },
          { id: "c", label: "Because readers never notice conventions" },
          { id: "d", label: "Because subversion requires ignoring the genre entirely" },
        ],
        correctChoiceId: "a",
        explanation: "A detective who turns out to be the murderer, or a romance that refuses its happy ending, gets its force from thwarting a known expectation — so even rule-breaking works depend on the conventions they react against.",
      },
      {
        dimension: "reasoning",
        prompt: "How can the same event mean different things across genres?",
        choices: [
          { id: "a", label: "A death is tragic in a tragedy, a puzzle in a detective story, and a comic pratfall in a farce" },
          { id: "b", label: "Events always mean exactly the same thing" },
          { id: "c", label: "Genre has no effect on meaning" },
          { id: "d", label: "Only the plot summary matters" },
        ],
        correctChoiceId: "a",
        explanation: "Because genre sets the reading frame, the same event carries different weight: a death is grave in tragedy, a problem to solve in a mystery, or a joke in farce — so reading well means reading in light of genre.",
      },
      {
        dimension: "depth",
        prompt: "What is the more useful stance on the 'genre fiction versus literary fiction' hierarchy?",
        choices: [
          { id: "a", label: "Treat genre as a neutral descriptor; what matters is what a work does with its conventions, since 'literary fiction' is itself a genre" },
          { id: "b", label: "Genre fiction is always inferior" },
          { id: "c", label: "Literary fiction has no conventions" },
          { id: "d", label: "Only genre fiction has value" },
        ],
        correctChoiceId: "a",
        explanation: "'Literary fiction' is itself a genre with conventions, and masterpieces work within popular genres too; genre tells you what game a work is playing, not how well it plays, so it is a descriptor, not a ranking.",
      },
    ],
    sources: [
      { label: "Literary genre (overview)", note: "Reference on genre, conventions and their evolution.", type: "Reference", url: "https://en.wikipedia.org/wiki/Literary_genre" },
      { label: "Purdue OWL: Writing in Literature", note: "Guidance on genre and literary analysis.", type: "Reference", url: "https://owl.purdue.edu/owl/subject_specific_writing/writing_in_literature/index.html" },
    ],
  },
  {
    concept: "Intertextuality",
    level: "University",
    summary: "texts echoing, revising or answering other texts",
    estimatedMinutes: 9,
    deck: "No text is an island. Every story is written in a language shaped by other stories, echoing, borrowing from and arguing with what came before. Intertextuality is the idea that texts are woven from other texts — and that meaning often lives in the relationships between them, not just inside any one.",
    keyTerms: [
      { label: "Intertextuality", value: "The shaping of a text's meaning by its relationships to other texts." },
      { label: "Allusion", value: "A deliberate reference to another text, work or story." },
      { label: "Retelling / rewriting", value: "A work that reimagines an earlier story from a new angle." },
      { label: "The literary conversation", value: "The idea that texts continually respond to and revise one another." },
    ],
    sections: [
      {
        heading: "Texts made of other texts",
        body: [
          `Intertextuality is the idea that texts do not exist in isolation but are shaped by their relationships to other texts. Every work is written within a tradition, in a language full of prior stories, phrases, forms and conventions, and it inevitably echoes, borrows from, alludes to, revises or reacts against what came before. The term was coined by the theorist Julia Kristeva in the 1960s, drawing on the idea that any text is a "mosaic" of other texts — an intersection of many voices rather than the pure invention of a single author.`,
          `This reframes how meaning works. Rather than a text's meaning being sealed inside it, much of it arises in the relationships between texts — in what a work echoes, quotes, parodies or answers. A reader who catches an allusion, or recognises that a story is reworking an older one, gains a layer of meaning invisible to one who does not. Literature, on this view, is less a collection of separate works than an ongoing conversation across time.`,
        ],
      },
      {
        heading: "From allusion to rewriting",
        body: [
          `Intertextuality operates at many levels. The most direct is allusion: a deliberate reference to another text, expecting the reader to recognise it and bring its associations. When a work alludes to the Bible, to Shakespeare, or to a myth, it borrows that source's weight and invites comparison. A single allusion can compress a great deal of meaning into a phrase, for readers equipped to catch it.`,
          `A deeper form is the retelling or rewriting, where a whole work reimagines an earlier one. James Joyce's Ulysses maps a single Dublin day onto the structure of Homer's Odyssey, so that an ordinary man's wanderings echo an epic hero's. Jean Rhys's Wide Sargasso Sea rewrites Charlotte Brontë's Jane Eyre from the perspective of its silenced "madwoman in the attic", giving voice and history to a character the original left as a monster. Such rewritings depend entirely on the earlier text: their meaning is generated by the dialogue between old and new, and cannot be fully grasped without knowing the source.`,
        ],
      },
      {
        heading: "The death of the isolated author",
        body: [
          `Intertextuality carries a challenge to the romantic idea of the author as a solitary genius conjuring pure originality. If every text is woven from prior texts, forms and conventions, then writers are always working with inherited materials, recombining and transforming what already exists rather than creating from nothing. The critic Roland Barthes pushed this to its limit, arguing that a text is "a tissue of quotations" and that meaning is made as much by readers, drawing on everything they have read, as by authors.`,
          `This does not diminish literature; it describes how it actually works. Originality becomes a matter of what a writer does with inherited materials — how they combine, transform and reanimate them — rather than an impossible creation from nowhere. Every writer learns by reading, absorbs a tradition, and writes in dialogue with it, whether consciously or not. Intertextuality names the truth that creativity is recombination, and that no work is wholly self-made.`,
        ],
      },
      {
        heading: "Reading the web",
        body: [
          `Recognising intertextuality enriches reading enormously, but it also raises a practical question of knowledge: you can only catch the references you are equipped to recognise. A reader steeped in the classics, the Bible and earlier literature will see webs of allusion invisible to another, which is one reason wide reading deepens understanding — each new text you know illuminates others. This can make dense, allusive works like Ulysses or T.S. Eliot's The Waste Land daunting, but it also makes them inexhaustibly rich.`,
          `At the same time, intertextuality is not a treasure hunt for hidden references to be ticked off. The point is not merely to spot allusions but to ask what the relationship between texts means — how the new work uses, transforms or challenges the old, and what that dialogue reveals. A rewriting that gives voice to a silenced character makes an argument; an allusion that ironically undercuts its source does real work. Reading intertextually means reading a work as part of a living conversation, alert to the other voices woven through it.`,
        ],
      },
      {
        heading: "Remix culture",
        body: [
          `You live in the most intertextual culture in history. A meme only works if you know the image or format it references; a sampled beat carries the ghost of the song it borrows; a film full of homages, a parody, a sequel, a reboot, a "based on a true story" — all generate meaning through their relationship to other texts. When you catch a movie's nod to an older film, laugh at a parody because you know the original, or recognise a lyric that quotes another song, you are reading intertextually. The whole logic of remix, reference and reboot that saturates modern entertainment is exactly what literary theory means by intertextuality: meaning made in the space between texts, not sealed inside any one.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is intertextuality?",
        choices: [
          { id: "a", label: "The shaping of a text's meaning by its relationships to other texts" },
          { id: "b", label: "The study of a single text in complete isolation" },
          { id: "c", label: "The grammar rules of a language" },
          { id: "d", label: "The biography of an author" },
        ],
        correctChoiceId: "a",
        explanation: "Coined by Kristeva, intertextuality holds that texts are woven from other texts — echoing, alluding to and revising them — so meaning often lives in the relationships between works, not just inside one.",
      },
      {
        dimension: "depth",
        prompt: "What is an allusion?",
        choices: [
          { id: "a", label: "A deliberate reference to another text, inviting the reader to bring its associations" },
          { id: "b", label: "A grammatical error" },
          { id: "c", label: "The main plot of a story" },
          { id: "d", label: "A type of rhyme" },
        ],
        correctChoiceId: "a",
        explanation: "An allusion references another text — the Bible, Shakespeare, a myth — borrowing its weight and inviting comparison, compressing meaning into a phrase for readers who catch it.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does Wide Sargasso Sea depend on Jane Eyre for its meaning?",
        choices: [
          { id: "a", label: "Because it rewrites Brontë's novel from the perspective of its silenced 'madwoman', so its meaning arises from the dialogue with the source" },
          { id: "b", label: "Because it is a direct sequel with new characters" },
          { id: "c", label: "Because it has no connection to any earlier text" },
          { id: "d", label: "Because it copies Jane Eyre word for word" },
        ],
        correctChoiceId: "a",
        explanation: "Rhys reimagines the earlier novel from the viewpoint of its silenced character, giving her voice and history; the rewriting's meaning is generated by its relationship to Jane Eyre and cannot be fully grasped without it.",
      },
      {
        dimension: "reasoning",
        prompt: "How does intertextuality challenge the idea of the author as a solitary genius?",
        choices: [
          { id: "a", label: "By showing writers always work with inherited texts, forms and conventions rather than creating from nothing" },
          { id: "b", label: "By proving authors do not exist" },
          { id: "c", label: "By claiming all books are identical" },
          { id: "d", label: "By arguing readers cannot understand texts" },
        ],
        correctChoiceId: "a",
        explanation: "If every text is woven from prior ones, originality becomes what a writer does with inherited materials — recombining and transforming them — rather than an impossible creation from nowhere, as Barthes's 'tissue of quotations' suggests.",
      },
      {
        dimension: "reasoning",
        prompt: "Beyond spotting references, what does reading intertextually really involve?",
        choices: [
          { id: "a", label: "Asking what the relationship between texts means — how the new work uses, transforms or challenges the old" },
          { id: "b", label: "Ticking off as many allusions as possible" },
          { id: "c", label: "Ignoring all other texts" },
          { id: "d", label: "Reading only the newest work" },
        ],
        correctChoiceId: "a",
        explanation: "Intertextuality is not a treasure hunt; the point is to ask what the dialogue between texts reveals — a rewriting that voices a silenced character, or an allusion that undercuts its source, makes an argument.",
      },
    ],
    sources: [
      { label: "Intertextuality (overview)", note: "Reference on Kristeva, Barthes, allusion and rewriting.", type: "Reference", url: "https://en.wikipedia.org/wiki/Intertextuality" },
      { label: "Roland Barthes, 'The Death of the Author'", note: "The influential essay on texts as tissues of quotation.", type: "Reference", url: "https://en.wikipedia.org/wiki/The_Death_of_the_Author" },
    ],
  },
  {
    concept: "Tragedy",
    level: "A-level",
    summary: "serious drama of conflict, error, fate, power and loss",
    estimatedMinutes: 8,
    deck: "Why do we willingly watch stories that end in ruin? For two and a half thousand years, tragedy has taken audiences through downfall and loss and left them, strangely, moved and clarified rather than merely depressed. Understanding how it works is understanding one of art's deepest and most enduring designs.",
    keyTerms: [
      { label: "Tragedy", value: "A serious drama tracing the downfall of a protagonist through error, fate or flaw." },
      { label: "Hamartia", value: "The error or flaw that leads to the tragic hero's downfall." },
      { label: "Catharsis", value: "The emotional release or clarification the audience feels through pity and fear." },
      { label: "Hubris", value: "Overweening pride that provokes a fall, a common tragic error." },
    ],
    sections: [
      {
        heading: "The oldest serious form",
        body: [
          `Tragedy is a dramatic form that traces the downfall of a protagonist, usually a person of stature, through some combination of error, fate, flaw and circumstance, ending in suffering, loss or death. It emerged in ancient Athens in the 5th century BCE, in the plays of Aeschylus, Sophocles and Euripides, and it has remained one of the most serious and enduring forms in Western literature, from the Greeks through Shakespeare to the modern stage.`,
          `What makes tragedy distinctive is not simply that it is sad, but that it treats human suffering with weight and dignity, asking hard questions about fate, responsibility, justice and the limits of human power. A tragedy is not a story of random misfortune; it is a structured confrontation between a human being and forces — internal or external — that overwhelm them, staged so that the downfall means something. Tragedy takes loss seriously and makes us look at it directly.`,
        ],
      },
      {
        heading: "Aristotle's anatomy",
        body: [
          `Our vocabulary for tragedy comes largely from Aristotle, who in the Poetics analysed the form using Greek plays, especially Sophocles' Oedipus Rex. He identified key elements that recur through the tradition. The tragic hero is typically a person of high standing brought low, and their fall turns on a hamartia — often translated "tragic flaw" but better understood as an error or misjudgement, sometimes a flaw of character, sometimes a mistake made in ignorance.`,
          `Aristotle also named the mechanics of the tragic plot: the peripeteia, or reversal of fortune, where the hero's situation turns from good to bad; and the anagnorisis, or recognition, where they finally understand their true situation, often too late. The most devastating tragedies fuse these — the moment of recognition is the moment of reversal. A recurring form of hamartia is hubris, an overweening pride or arrogance that leads a hero to overstep their limits and provoke their downfall.`,
        ],
      },
      {
        heading: "The paradox of catharsis",
        body: [
          `Tragedy poses an old puzzle: why do we take pleasure, or find value, in watching suffering? Aristotle's answer was catharsis — a purging or clarification of emotion. Tragedy, he argued, arouses pity and fear in the audience (pity for the suffering hero, fear because we recognise a shared human vulnerability) and then, through the shape of the drama, releases or resolves those emotions, leaving us clarified rather than merely upset.`,
          `Exactly what catharsis means is debated, but the phenomenon is real: a great tragedy does not leave us depressed but somehow steadied and moved, having faced something dark and true. Part of the answer is that tragedy gives suffering meaning and shape. By witnessing a downfall rendered with dignity and significance — rather than the random, senseless misfortune of real life — we confront mortality, error and loss within a form that makes them bearable to contemplate. Tragedy lets us rehearse the worst safely, and find it strangely ennobling.`,
        ],
      },
      {
        heading: "Tragedy after the kings",
        body: [
          `Classical tragedy centred on the great and highborn — kings, princes, heroes — partly on the theory that their fall was further and their fate bound up with their whole community. Shakespeare's tragedies (Hamlet, Macbeth, King Lear, Othello) inherited and enriched this, giving their heroes vast inner lives and locating the tragedy as much in psychology as in fate. Macbeth's ambition and Othello's jealousy are hamartia turned inward, character as destiny.`,
          `The modern age asked whether tragedy could belong to ordinary people. Arthur Miller argued yes, and his Death of a Salesman makes a tragic hero of Willy Loman, an ordinary failing salesman, insisting the common person can be a fit subject for tragedy. This democratised the form, relocating tragic weight from royal courts to living rooms. Whether about a king or a salesman, though, tragedy keeps its core: a human being confronting forces that destroy them, staged so that we feel the full weight of the loss and are, paradoxically, moved rather than crushed.`,
        ],
      },
      {
        heading: "Why we choose the sad story",
        body: [
          `You take part in the paradox of tragedy whenever you deliberately choose a story you know will hurt — the film that will make you cry, the novel with the devastating ending, the true-crime or war story of loss. You do not come away merely miserable; done well, it leaves you moved, clarified, even comforted, exactly as Aristotle described. You also use tragic vocabulary loosely all the time: calling someone's downfall the result of their "fatal flaw", or their "hubris", or a "tragic mistake". That instinct to seek out serious stories of suffering, and to feel better rather than worse for having faced them, is the same one that filled Athenian theatres two and a half thousand years ago.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is 'hamartia' in Aristotle's analysis of tragedy?",
        choices: [
          { id: "a", label: "The happy resolution of the plot" },
          { id: "b", label: "The error or flaw that leads to the tragic hero's downfall" },
          { id: "c", label: "The chorus's commentary" },
          { id: "d", label: "The setting of the play" },
        ],
        correctChoiceId: "b",
        explanation: "Hamartia is the tragic error or flaw — sometimes a character weakness, sometimes a mistake made in ignorance — that brings about the hero's fall, as with Oedipus.",
      },
      {
        dimension: "depth",
        prompt: "What is catharsis, Aristotle's answer to why we value watching suffering?",
        choices: [
          { id: "a", label: "The purging or clarification of pity and fear that leaves the audience moved rather than merely upset" },
          { id: "b", label: "The hero's realisation of their mistake" },
          { id: "c", label: "The reversal of fortune in the plot" },
          { id: "d", label: "The pride that causes a downfall" },
        ],
        correctChoiceId: "a",
        explanation: "Catharsis is the release or clarification of emotion: tragedy arouses pity and fear and then resolves them, so a great tragedy leaves us steadied and moved rather than depressed.",
      },
      {
        dimension: "reasoning",
        prompt: "Why are the most devastating tragedies said to fuse peripeteia and anagnorisis?",
        choices: [
          { id: "a", label: "Because the hero's moment of recognising the truth coincides with their reversal from good fortune to ruin" },
          { id: "b", label: "Because the play ends happily" },
          { id: "c", label: "Because the hero never learns anything" },
          { id: "d", label: "Because the audience leaves early" },
        ],
        correctChoiceId: "a",
        explanation: "Peripeteia is the reversal of fortune and anagnorisis the recognition of the true situation; the most powerful tragedies make the moment of understanding also the moment of downfall — often too late.",
      },
      {
        dimension: "reasoning",
        prompt: "How did Arthur Miller's Death of a Salesman change the tradition of tragedy?",
        choices: [
          { id: "a", label: "By making a tragic hero of an ordinary man, arguing the common person can be a fit subject for tragedy" },
          { id: "b", label: "By insisting only kings can be tragic heroes" },
          { id: "c", label: "By removing all suffering from the form" },
          { id: "d", label: "By setting it in ancient Greece" },
        ],
        correctChoiceId: "a",
        explanation: "Classical tragedy centred on the highborn, but Miller made a tragic hero of Willy Loman, an ordinary salesman, democratising the form and relocating tragic weight from royal courts to living rooms.",
      },
      {
        dimension: "depth",
        prompt: "What distinguishes tragedy from a story of mere random misfortune?",
        choices: [
          { id: "a", label: "It is a structured confrontation staged so the downfall carries meaning and dignity" },
          { id: "b", label: "It is simply any story with a sad ending" },
          { id: "c", label: "It always has a happy resolution" },
          { id: "d", label: "It avoids the subject of death" },
        ],
        correctChoiceId: "a",
        explanation: "Tragedy treats suffering with weight and dignity, staging a human being's confrontation with overwhelming forces so the loss means something — not the senseless, random misfortune of real life.",
      },
    ],
    sources: [
      { label: "Aristotle, Poetics", note: "The foundational analysis of tragedy, hamartia and catharsis.", type: "Primary", url: "https://www.gutenberg.org/ebooks/1974" },
      { label: "Tragedy (overview)", note: "Reference on tragedy from the Greeks through Shakespeare to Miller.", type: "Reference", url: "https://en.wikipedia.org/wiki/Tragedy" },
    ],
  },
  {
    concept: "Modernist Fragmentation",
    level: "University",
    summary: "broken form as a response to modern experience",
    estimatedMinutes: 9,
    deck: "Some of the most difficult literature ever written is difficult on purpose. Faced with a world shattered by war, industrialisation and lost certainties, modernist writers broke the smooth surfaces of storytelling into fragments — because a broken form, they felt, was the only honest way to represent a broken world.",
    keyTerms: [
      { label: "Fragmentation", value: "Deliberately broken, discontinuous form reflecting a fractured modern experience." },
      { label: "Stream of consciousness", value: "A style rendering the unfiltered flow of a character's thoughts." },
      { label: "Modernism", value: "The early-20th-century movement that broke with traditional forms and certainties." },
      { label: "Difficulty as design", value: "Treating a work's demands on the reader as meaningful, not a failure." },
    ],
    sections: [
      {
        heading: "A broken world, a broken form",
        body: [
          `Modernism, the great wave of experimental literature in the early 20th century, was born from a sense that the world had fundamentally changed and that the old, orderly ways of telling stories could no longer capture it. Industrialisation, the anonymity of the modern city, the collapse of religious and social certainties, and above all the unprecedented slaughter of the First World War shattered a confident 19th-century worldview. Writers felt that a smooth, coherent, linear narrative would be a lie about a reality that no longer felt smooth, coherent or linear.`,
          `Their response was fragmentation: deliberately breaking up the forms of literature. Modernist works often abandon straightforward chronology, unified plots, stable narrators and tidy resolutions in favour of discontinuity, juxtaposition, multiple perspectives, gaps and collage. The brokenness is not incompetence or mere fashion; it is mimetic — the form imitates the fractured, disorienting texture of modern experience. To represent a world in pieces, these writers made literature out of pieces.`,
        ],
      },
      {
        heading: "The Waste Land as collage",
        body: [
          `The emblematic work is T.S. Eliot's poem The Waste Land (1922), a landmark of fragmentation. It lurches between voices, scenes, languages and literary allusions with no smooth connective tissue, stitching together snatches of conversation, myth, quotation and vision into a deliberately broken mosaic. Its famous line "These fragments I have shored against my ruins" almost states its own method: assembling shards against collapse.`,
          `The poem's difficulty is the point. Its disjointedness enacts the spiritual desolation and cultural fragmentation of post-war Europe — a civilisation in ruins, its shared meanings shattered. A reader cannot glide through it; they must actively assemble sense from the fragments, experiencing the disorientation the poem describes. This is fragmentation as argument: the form does not merely depict a broken world, it makes the reader feel the labour of finding coherence in one.`,
        ],
      },
      {
        heading: "The mind's fragmented flow",
        body: [
          `Fragmentation also reshaped how fiction rendered consciousness. Modernist novelists turned inward, trying to capture the actual texture of thought and perception, which is anything but orderly. The technique of stream of consciousness attempts to render the continuous, associative, fragmentary flow of a character's inner life — thoughts, memories, sensations and impressions tumbling over one another without the tidy organisation of conventional narration.`,
          `Virginia Woolf, in novels like Mrs Dalloway, moves fluidly through her characters' minds, dissolving a single day into a shifting flux of memory and impression. James Joyce's Ulysses pushes the method to an extreme, especially in its final unpunctuated rush of one character's half-asleep thoughts. This inward fragmentation reflects a modern conviction that reality is not a stable external order but something filtered through individual, fragmented consciousness — so honest fiction had to break the smooth surface and follow the mind's real, jagged movement.`,
        ],
      },
      {
        heading: "Difficulty with a purpose",
        body: [
          `Modernist fragmentation makes real demands on readers, and it is easy to dismiss such work as wilfully obscure. The crucial interpretive move is to treat the difficulty as meaningful design rather than a failure to communicate. If a work is fragmented, disorienting or hard to follow, the productive question is not "why won't it just tell the story?" but "what does this broken form do — what experience does it create, and how does that connect to its themes?"`,
          `Read this way, the difficulty becomes generative. The disorientation of a fragmented war narrative conveys the incomprehensibility of trauma; the jumps and gaps force the reader into the active, effortful sense-making that is itself part of the meaning. This does not mean all difficulty is profound, or that anything goes — but it means that with genuine modernist works, the form is doing serious work, and refusing to engage with it because it is not smooth is to miss the point. Fragmentation asks the reader to participate, and rewards those who do.`,
        ],
      },
      {
        heading: "The fragments in your feed",
        body: [
          `Fragmented form surrounds you now, so the modernist experiment can feel oddly familiar. A social media feed is pure collage — snatches of news, jokes, tragedy and adverts juxtaposed with no connecting logic, much like The Waste Land's broken surface. Films tell stories out of order (Memento, Pulp Fiction) or in fractured, associative montages, trusting you to assemble them. Music samples and cuts between fragments. When you follow a nonlinear film, piece together a story told in shards, or feel the disorienting jumble of an endless scroll, you are doing exactly the active sense-making that modernist fragmentation demands — and getting a glimpse of why those writers felt a broken form was the truest mirror of modern life.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "reasoning",
        prompt: "Why did modernist writers turn to fragmented form?",
        choices: [
          { id: "a", label: "Because they lacked the skill to write coherent narratives" },
          { id: "b", label: "Because a smooth, linear narrative felt like a lie about a world shattered by war and lost certainties" },
          { id: "c", label: "Because publishers demanded shorter chapters" },
          { id: "d", label: "Because readers preferred confusion" },
        ],
        correctChoiceId: "b",
        explanation: "Industrialisation, the modern city, collapsing certainties and the First World War shattered a confident worldview; writers felt broken form was the honest way to represent a reality that no longer felt coherent — the form is mimetic.",
      },
      {
        dimension: "reasoning",
        prompt: "How does the difficulty of Eliot's The Waste Land relate to its meaning?",
        choices: [
          { id: "a", label: "Its disjointedness enacts post-war cultural fragmentation, making the reader labour to assemble coherence" },
          { id: "b", label: "Its difficulty is an accident with no meaning" },
          { id: "c", label: "It is actually a simple, linear poem" },
          { id: "d", label: "The fragments have no connection to its themes" },
        ],
        correctChoiceId: "a",
        explanation: "The poem's broken mosaic of voices and allusions enacts the spiritual desolation of a civilisation in ruins; the reader must actively assemble sense from fragments, experiencing the disorientation it describes — fragmentation as argument.",
      },
      {
        dimension: "depth",
        prompt: "What does 'stream of consciousness' attempt to render?",
        choices: [
          { id: "a", label: "The continuous, associative, fragmentary flow of a character's inner thoughts and impressions" },
          { id: "b", label: "A strictly chronological account of events" },
          { id: "c", label: "The narrator's moral judgements only" },
          { id: "d", label: "Dialogue between two characters" },
        ],
        correctChoiceId: "a",
        explanation: "Stream of consciousness captures the unfiltered, tumbling flow of the mind — thoughts, memories and sensations without tidy organisation — as in Woolf's Mrs Dalloway and Joyce's Ulysses.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the key interpretive move when facing a difficult modernist work?",
        choices: [
          { id: "a", label: "Treat the difficulty as meaningful design and ask what experience the broken form creates" },
          { id: "b", label: "Dismiss it as wilfully obscure and stop reading" },
          { id: "c", label: "Assume all difficulty is a mistake" },
          { id: "d", label: "Rewrite it as a linear story" },
        ],
        correctChoiceId: "a",
        explanation: "Rather than asking 'why won't it just tell the story?', the productive question is what the broken form does — the disorientation of a fragmented narrative can convey the incomprehensibility of trauma, making the difficulty generative.",
      },
      {
        dimension: "depth",
        prompt: "What conviction about reality underlies modernist inward fragmentation?",
        choices: [
          { id: "a", label: "That reality is filtered through individual, fragmented consciousness rather than a stable external order" },
          { id: "b", label: "That reality is perfectly orderly and linear" },
          { id: "c", label: "That the mind thinks in tidy, organised sentences" },
          { id: "d", label: "That consciousness cannot be represented at all" },
        ],
        correctChoiceId: "a",
        explanation: "Stream-of-consciousness fiction reflects the modern belief that reality is not a stable external order but something experienced through individual, fragmented consciousness — so honest fiction had to follow the mind's jagged movement.",
      },
    ],
    sources: [
      { label: "T.S. Eliot, The Waste Land", note: "The emblematic fragmented modernist poem of 1922.", type: "Primary", url: "https://www.poetryfoundation.org/poems/47311/the-waste-land" },
      { label: "Modernist literature (overview)", note: "Reference on fragmentation, stream of consciousness and the modernist break.", type: "Reference", url: "https://en.wikipedia.org/wiki/Modernist_literature" },
    ],
  },
  {
    concept: "Postcolonial Reading",
    level: "University",
    summary: "literature shaped by empire, language and resistance",
    estimatedMinutes: 9,
    deck: "Empires do not only conquer land; they shape stories, languages and who gets to speak. Postcolonial reading asks how literature was implicated in empire, and how writers from once-colonised societies have answered back — reclaiming the narrative, and forcing us to ask whose voice a text centres and whose it silences.",
    keyTerms: [
      { label: "Postcolonialism", value: "The study of literature and culture shaped by colonialism and its aftermath." },
      { label: "Orientalism", value: "Said's term for the West's distorting representations of the colonised 'East'." },
      { label: "The empire writes back", value: "Formerly colonised writers responding to and revising the colonial canon." },
      { label: "The subaltern", value: "The oppressed groups whose voices are excluded from dominant narratives." },
    ],
    sections: [
      {
        heading: "Reading in the shadow of empire",
        body: [
          `Postcolonial reading examines literature in relation to colonialism — the centuries in which European powers conquered and ruled much of the world — and its long aftermath. It works in two directions. First, it re-examines the literature of the colonising powers, asking how their texts represented colonised peoples and often served, consciously or not, to justify or naturalise empire. Second, it studies the rich body of writing produced by people from colonised and formerly colonised societies, who reclaim their own stories and talk back to the imperial narrative.`,
          `The central questions are about voice and power: whose perspective does a text adopt, whose humanity does it grant or deny, whose story gets told and whose is silenced? Postcolonial reading is alert to how literature participates in structures of domination and resistance — how a novel can flatter an empire's self-image or expose it, render a people fully human or reduce them to a backdrop. It insists that texts are political, entangled with the vast historical injustice of colonialism.`,
        ],
      },
      {
        heading: "Said and the invention of the 'Orient'",
        body: [
          `The founding work is Edward Said's Orientalism (1978), which analysed how Western scholarship, art and literature constructed a distorted image of the "Orient" — the Middle East and Asia — as exotic, backward, irrational and passive, in implicit contrast to a rational, advanced West. This was not innocent description, Said argued, but a system of representation bound up with power: by defining the East as inferior and in need of governance, Western culture helped justify colonial domination.`,
          `Said's insight was that knowledge and representation are never neutral; they can be instruments of power. To depict a people a certain way — to control how they appear in stories, images and scholarship — is itself a form of domination, shaping how they are seen and treated. This reframed the whole question of representation in literature: who has the power to represent whom, and in whose interest? Postcolonial reading applies this suspicion to the entire canon, asking what work a text's depictions of the colonised are quietly doing.`,
        ],
      },
      {
        heading: "The empire writes back",
        body: [
          `The other half of postcolonial literature is the response of colonised peoples themselves — what critics call "the empire writing back". Writers from Africa, the Caribbean, South Asia and elsewhere have reclaimed the narrative, telling their own histories and experiences from the inside, and challenging the images the colonisers made of them. A landmark is Chinua Achebe's Things Fall Apart (1958), which portrays a complex, fully human Igbo society before and during colonisation, deliberately countering the dehumanising European depictions of Africa.`,
          `Achebe made the stakes explicit in his critique of Joseph Conrad's Heart of Darkness, arguing that even this celebrated anti-imperial novel reduces Africa to a mere backdrop for a European psychological drama and denies Africans full humanity and voice. This is postcolonial reading in action: not simply condemning old texts, but reading them critically for whose perspective they centre and whose they erase — while championing the literature that restores the silenced point of view.`,
        ],
      },
      {
        heading: "Whose voice, and can it be heard?",
        body: [
          `A deep problem in the field is whether the most oppressed can ever truly speak within the dominant frameworks. The critic Gayatri Spivak, in her essay "Can the Subaltern Speak?", used "subaltern" for the most marginalised groups and questioned whether they can be heard on their own terms, or whether even sympathetic representation ends up speaking for them, filtering their voice through the very structures that silenced them. It is a caution against too-easy claims to "give voice" to the oppressed.`,
          `There is also the charged question of language itself. Many postcolonial writers write in the language of their former colonisers — English, French — which reaches a wide audience but is also the tongue of domination. Some, like the Kenyan writer Ngũgĩ wa Thiong'o, argue for writing in indigenous languages to decolonise the mind; others embrace and transform the colonial language, bending it to their own ends. These debates show postcolonial reading is not a fixed verdict but a set of urgent questions about power, representation and voice that remain live wherever literature and history's injustices meet.`,
        ],
      },
      {
        heading: "Whose story gets told",
        body: [
          `The questions postcolonial reading raises are everywhere in today's culture. Debates about representation in film and television — who gets to tell whose story, which perspectives are centred, who is reduced to a stereotype or a backdrop — are postcolonial questions in modern dress. When you notice that a "historical" film shows only the coloniser's viewpoint, or celebrate a story that finally centres a long-silenced community, or question whether an outsider should narrate a culture's trauma, you are reading postcolonially. The core habit — asking whose voice a story privileges and whose it erases, and remembering that representation is bound up with power — is one of the most useful critical instincts you can carry into everything you read and watch.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What are the two directions in which postcolonial reading works?",
        choices: [
          { id: "a", label: "Re-examining colonisers' literature for how it represented the colonised, and studying writing by colonised peoples who reclaim their stories" },
          { id: "b", label: "Analysing only ancient Greek texts" },
          { id: "c", label: "Studying only the grammar of colonial languages" },
          { id: "d", label: "Ranking authors by nationality" },
        ],
        correctChoiceId: "a",
        explanation: "Postcolonial reading both re-reads imperial literature for how it depicted the colonised and champions the writing of colonised peoples talking back to the imperial narrative — always asking whose voice is centred.",
      },
      {
        dimension: "reasoning",
        prompt: "What did Edward Said argue in Orientalism?",
        choices: [
          { id: "a", label: "That Western representations of the 'Orient' as backward were bound up with power and helped justify colonial domination" },
          { id: "b", label: "That the East and West are identical" },
          { id: "c", label: "That representation is always neutral" },
          { id: "d", label: "That colonialism had no effect on literature" },
        ],
        correctChoiceId: "a",
        explanation: "Said showed Western culture constructed a distorted image of the East as exotic and inferior, and that this system of representation was an instrument of power that helped justify empire — knowledge is never neutral.",
      },
      {
        dimension: "reasoning",
        prompt: "What was Achebe's critique of Conrad's Heart of Darkness?",
        choices: [
          { id: "a", label: "That even this anti-imperial novel reduces Africa to a backdrop and denies Africans full humanity and voice" },
          { id: "b", label: "That it was too sympathetic to Africans" },
          { id: "c", label: "That it was set in the wrong century" },
          { id: "d", label: "That it had no European characters" },
        ],
        correctChoiceId: "a",
        explanation: "Achebe argued the celebrated novel treats Africa as a mere backdrop for a European psychological drama, denying Africans full humanity — postcolonial reading in action, examining whose perspective a text centres.",
      },
      {
        dimension: "reasoning",
        prompt: "What question does Spivak's 'Can the Subaltern Speak?' raise?",
        choices: [
          { id: "a", label: "Whether the most marginalised can be heard on their own terms, or whether even sympathetic representation speaks for them" },
          { id: "b", label: "Whether literature should exist at all" },
          { id: "c", label: "Whether colonisers wrote good novels" },
          { id: "d", label: "Whether all languages are the same" },
        ],
        correctChoiceId: "a",
        explanation: "Spivak questions whether the 'subaltern' — the most oppressed — can truly speak within dominant frameworks, or whether even well-meaning representation filters their voice through the structures that silenced them.",
      },
      {
        dimension: "depth",
        prompt: "Why is the choice of language a charged issue for postcolonial writers?",
        choices: [
          { id: "a", label: "Writing in the coloniser's language reaches a wide audience but is also the tongue of domination, prompting debate over indigenous languages" },
          { id: "b", label: "Because language has no political dimension" },
          { id: "c", label: "Because only one language exists" },
          { id: "d", label: "Because postcolonial writers never use English" },
        ],
        correctChoiceId: "a",
        explanation: "Writing in English or French reaches many readers but is the language of empire; some, like Ngũgĩ wa Thiong'o, argue for indigenous languages to 'decolonise the mind', while others transform the colonial language to their own ends.",
      },
    ],
    sources: [
      { label: "Edward Said, Orientalism", note: "The founding text on Western representations of the colonised world.", type: "Reference", url: "https://en.wikipedia.org/wiki/Orientalism_(book)" },
      { label: "Chinua Achebe, Things Fall Apart", note: "Landmark novel countering colonial depictions of Africa.", type: "Reference", url: "https://en.wikipedia.org/wiki/Things_Fall_Apart" },
    ],
  },
  {
    concept: "Poetic Meter",
    level: "A-level",
    summary: "rhythmic pattern as part of poetic meaning",
    estimatedMinutes: 8,
    deck: "Poetry has a pulse. Beneath the words runs a pattern of stressed and unstressed beats, and that rhythm is not decoration — it carries meaning, creates emphasis, and makes lines memorable. Learning to hear meter is learning that in poetry, how something sounds is part of what it says.",
    keyTerms: [
      { label: "Meter", value: "The organised pattern of stressed and unstressed syllables in a line of verse." },
      { label: "Foot", value: "A basic unit of meter, such as the iamb (unstressed–stressed)." },
      { label: "Iambic pentameter", value: "Five iambs per line — the dominant meter of English verse." },
      { label: "Scansion", value: "Marking the pattern of stresses to analyse a line's meter." },
    ],
    sections: [
      {
        heading: "The beat beneath the words",
        body: [
          `Meter is the organised rhythmic pattern of a line of verse — the arrangement of stressed and unstressed syllables that gives poetry its underlying beat. English is a stress-based language: in any multi-syllable word, some syllables are naturally emphasised and others are not (say "poetry" and you stress the first syllable). Meter organises these natural stresses into a regular pattern, so that a metrical line has a detectable pulse, like the beat in music.`,
          `Recognising meter matters because rhythm is part of a poem's meaning, not a mere ornament. The pulse of a line shapes how it feels — driving or stately, smooth or jolting — and poets use it deliberately, working with and against the pattern to create emphasis and effect. To read poetry fully, you have to hear this rhythmic layer, which operates beneath the literal sense and colours everything the words do.`,
        ],
      },
      {
        heading: "Feet and the iamb",
        body: [
          `Meter is described in units called feet, each a small pattern of stressed and unstressed syllables. The most important in English is the iamb: an unstressed syllable followed by a stressed one (da-DUM), as in "be-LONG" or "a-GAIN". The iamb matters because its rhythm closely mirrors natural English speech and, famously, the beat of a heart, which is part of why it feels so natural and is by far the most common foot in English poetry.`,
          `Other feet reverse or vary the pattern: the trochee is stressed–unstressed (DUM-da, as in "GAR-den"), which feels more forceful or falling; the anapest is two unstressed then a stressed (da-da-DUM), which gallops. Naming the foot is a tool, not the goal — but knowing that a line is built from these repeating units lets you describe its rhythm precisely and notice when a poet switches feet to jolt the beat.`,
        ],
      },
      {
        heading: "The heartbeat of English verse",
        body: [
          `The dominant meter in English poetry is iambic pentameter: five iambs per line, giving ten syllables in a da-DUM da-DUM da-DUM da-DUM da-DUM pattern. This is the meter of Shakespeare's plays and sonnets, of Milton and Wordsworth — the workhorse rhythm of the English poetic tradition. A line like "Shall I compare thee to a summer's day?" falls naturally into it, and once you can hear the five-beat pulse, a vast body of English poetry opens up.`,
          `The process of marking out a line's stressed and unstressed syllables to identify its meter is called scansion. It sounds technical, but it is really just careful listening made visible: you tap out the beats and note the pattern. Scansion is not an end in itself but a means — it lets you see the rhythmic structure clearly, and, crucially, spot the moments where a poet departs from the expected pattern, which is where much of the meaning lives.`,
        ],
      },
      {
        heading: "Meaning in the breaks",
        body: [
          `The deepest point about meter is that departures from the pattern are where it becomes expressive. A poet who has established a regular rhythm can break it deliberately — inverting a foot, adding a beat, forcing a stress — and that disruption jolts the reader, drawing attention to a particular word or enacting a meaning. A metrical stumble can mirror hesitation or shock; a sudden extra stress can hammer a point home. The regular pattern is the backdrop against which meaningful variation stands out.`,
          `This is why meter is form doing the work of meaning, not decoration added afterward. The rhythm can reinforce sense (a galloping meter for a headlong chase), create tension (a jarring stress on an ominous word), or lend authority and memorability (the stately tread of a pentameter line). Even the strong beat that makes verse easy to memorise is meaning at work, binding sound to sense. To hear meter is to grasp that in poetry the music and the message are inseparable — how a line moves is part of what it means.`,
        ],
      },
      {
        heading: "The rhythm you already feel",
        body: [
          `You respond to meter constantly, even if you have never scanned a line. The pulse and flow of a rapper is meter in action — the placement of stresses against a beat is exactly what poets do, and a great flow rides and breaks the rhythm to land its punches. Song lyrics, nursery rhymes, advertising slogans and chants all stick in the memory because of their beat. You feel it when a line "scans" and lands, and when a clumsy one stumbles. Learning poetic meter just makes conscious a rhythmic sense you already use whenever a lyric hooks you or a phrase sounds satisfyingly right — the discovery that in words, as in music, the rhythm is part of the meaning.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is meter in poetry?",
        choices: [
          { id: "a", label: "The organised pattern of stressed and unstressed syllables that gives verse its rhythm" },
          { id: "b", label: "The rhyme scheme at the end of lines" },
          { id: "c", label: "The number of stanzas in a poem" },
          { id: "d", label: "The subject matter of the poem" },
        ],
        correctChoiceId: "a",
        explanation: "Meter is the underlying rhythmic pattern of stressed and unstressed syllables — the poem's pulse — which shapes how a line feels and is part of its meaning, not mere decoration.",
      },
      {
        dimension: "depth",
        prompt: "What is an iamb?",
        choices: [
          { id: "a", label: "A stressed syllable followed by an unstressed one" },
          { id: "b", label: "An unstressed syllable followed by a stressed one (da-DUM)" },
          { id: "c", label: "Two stressed syllables" },
          { id: "d", label: "A line with no rhythm" },
        ],
        correctChoiceId: "b",
        explanation: "An iamb is an unstressed–stressed foot (da-DUM), as in 'be-LONG'. Its rhythm mirrors natural English speech and the heartbeat, which is why it is the most common foot in English verse.",
      },
      {
        dimension: "depth",
        prompt: "What is iambic pentameter?",
        choices: [
          { id: "a", label: "Five iambs per line — the dominant meter of English poetry" },
          { id: "b", label: "A poem with exactly five lines" },
          { id: "c", label: "Five rhyming words per stanza" },
          { id: "d", label: "A meter with no stresses" },
        ],
        correctChoiceId: "a",
        explanation: "Iambic pentameter is five iambs (ten syllables) per line — the workhorse meter of Shakespeare, Milton and Wordsworth, as in 'Shall I compare thee to a summer's day?'",
      },
      {
        dimension: "reasoning",
        prompt: "Why are departures from the metrical pattern so important?",
        choices: [
          { id: "a", label: "Because breaking an established rhythm jolts the reader and can emphasise a word or enact a meaning" },
          { id: "b", label: "Because they are always mistakes" },
          { id: "c", label: "Because meter should never vary" },
          { id: "d", label: "Because they remove all meaning" },
        ],
        correctChoiceId: "a",
        explanation: "Against a regular pattern, a deliberate disruption — an inverted foot, an added stress — draws attention to a word or mirrors a meaning like hesitation or shock; much of meter's expressiveness lives in the breaks.",
      },
      {
        dimension: "reasoning",
        prompt: "What does it mean to say meter is 'form doing the work of meaning'?",
        choices: [
          { id: "a", label: "The rhythm itself reinforces sense, creates tension or lends memorability — how a line moves is part of what it means" },
          { id: "b", label: "Meter is purely decorative and separate from meaning" },
          { id: "c", label: "Only the literal words carry meaning" },
          { id: "d", label: "Rhythm has no effect on the reader" },
        ],
        correctChoiceId: "a",
        explanation: "A galloping meter for a chase, a jarring stress on an ominous word, the memorable beat of a slogan — the rhythm binds sound to sense, so in poetry the music and the message are inseparable.",
      },
    ],
    sources: [
      { label: "Poetry Foundation: Learning Lab on meter", note: "Accessible guides to feet, scansion and rhythm in verse.", type: "Reference", url: "https://www.poetryfoundation.org/learn/glossary-terms/meter" },
      { label: "Metre (poetry) (overview)", note: "Reference on feet, iambic pentameter and scansion.", type: "Reference", url: "https://en.wikipedia.org/wiki/Metre_(poetry)" },
    ],
  },
];

export const literatureLessons = buildAuthoredLessons("literature", literature);
