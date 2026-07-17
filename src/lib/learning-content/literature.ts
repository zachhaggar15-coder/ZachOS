import { buildAuthoredLessons, type AuthoredLesson } from "./types";

// Ten hand-written Literature lessons: researched, concept-specific prose with
// real works and named ideas, each closing on an everyday-life example, plus
// genuine recall quizzes.
const literature: AuthoredLesson[] = [
  {
    concept: "Hermeneutics and the Interpretive Circle",
    level: "University",
    summary: "why understanding anything requires already understanding it",
    estimatedMinutes: 9,
    deck: "To grasp a sentence you need the paragraph; to grasp the paragraph you need the sentences. This looks like a vicious circle and is in fact the structure of all understanding — which means interpretation cannot start from nothing, and the fantasy of approaching a text with no assumptions is not rigour but self-deception.",
    keyTerms: [
      { label: "The hermeneutic circle", value: "The mutual dependence of part and whole in understanding — neither is available first." },
      { label: "Prejudice (Vorurteil)", value: "Gadamer's term for the pre-judgements that make understanding possible rather than corrupt it." },
      { label: "Fusion of horizons", value: "Understanding as the meeting of the interpreter's frame with the text's, not the erasure of one." },
      { label: "Hermeneutics of suspicion", value: "Ricoeur's name for reading against a text to expose what it conceals." },
    ],
    sections: [
      {
        heading: "The circle you cannot escape",
        body: [
          `The hermeneutic circle names a structural feature of interpretation that looks fatal. You cannot understand a word without the sentence that contextualises it, nor the sentence without the words composing it. Scale it up: the chapter needs the book, the book needs the chapter, the author's work needs the period, the period is read through its works. At no level is there a foundation you can grasp independently and build from. Understanding appears to require having already understood.`,
          `Friedrich Schleiermacher, formalising this for biblical and classical scholarship, treated it as a method rather than a paradox: you begin with a provisional grasp of the whole, use it to read the parts, revise the whole in light of what the parts turn out to say, and iterate. The circle is not vicious but productive — a spiral, where each pass corrects the guess you started with. The important admission is that you must start with a guess. There is no interpretation that begins from zero, because a reader with no expectations whatsoever could not identify what they were even looking at.`,
        ],
      },
      {
        heading: "Gadamer's inversion",
        body: [
          `Hans-Georg Gadamer took this further and turned the Enlightenment's central methodological demand on its head. The Enlightenment held that prejudice is the enemy of understanding: strip away your assumptions, approach the object neutrally, and see it as it is. Gadamer's Truth and Method argues this is impossible and, more provocatively, undesirable. Your prejudices — he uses the word deliberately, meaning pre-judgements rather than bigotries — are what make understanding possible. They constitute the horizon from which anything can appear as intelligible at all.`,
          `A reader genuinely without expectations would not find a text difficult; they would find it inert, because they would have no basis on which anything could strike them as surprising, wrong or significant. So the goal cannot be eliminating your standpoint, which would eliminate your capacity to understand. What Gadamer proposes instead is a fusion of horizons: understanding occurs when the interpreter's frame meets the text's and both are altered. You do not vacate your position to enter the text's world, and you do not simply impose yours — you arrive somewhere neither of you started, which is why genuine understanding changes the reader.`,
        ],
      },
      {
        heading: "The productive prejudice and the blind one",
        body: [
          `The obvious objection is that this licenses reading anything into anything: if prejudice enables understanding, what stops it from being distortion? Gadamer's answer is that prejudices are not all alike, and the test is whether the text can talk back. A productive prejudice is one you hold provisionally enough to be surprised — you approach a text with expectations, the text resists them, and the resistance forces revision. A blind prejudice is one so firmly held that nothing in the text could disturb it, so the reading confirms what you brought and the encounter teaches nothing.`,
          `The mark of understanding is therefore being pulled up short. If a text never resists you, you are almost certainly reading yourself. This gives the framework a real, if soft, criterion, and it has an uncomfortable diagnostic edge: an interpretation that finds exactly what the interpreter's theory predicted, across every text they touch, is not evidence for the theory but evidence that the circle has closed. The distinction is not between having assumptions and not having them; it is between assumptions that expose themselves to correction and assumptions that cannot lose.`,
        ],
      },
      {
        heading: "Suspicion, and its own circle",
        body: [
          `Paul Ricoeur named a rival tradition the hermeneutics of suspicion, after Marx, Nietzsche and Freud — three thinkers who read texts not for what they say but for what they conceal. On this approach the surface meaning is a symptom: the real content is the class interest, the will to power, or the repressed desire underneath, and the interpreter's job is to get behind the text rather than to listen to it. It is a powerful method and has produced much of the best critical work of the last century.`,
          `It also has a structural vulnerability that Ricoeur was clear about. A method that treats the text's protest as further evidence of concealment cannot be corrected by the text — resistance confirms rather than refutes, which is precisely the closed circle Gadamer warned against. Ricoeur's response was that suspicion must be paired with a hermeneutics of faith, a willingness to be addressed by the text as well as to unmask it, and that neither alone is adequate. The tension between listening and unmasking is real, and interpretation done well moves between them rather than settling permanently into either.`,
        ],
      },
      {
        heading: "Why 'just look at the evidence' is not advice",
        body: [
          `The transferable claim is that there is no view from nowhere, and pretending otherwise is where the damage happens. Someone who says they are approaching a question with no assumptions has assumptions they have not examined, which makes them less careful rather than more. That applies to reading a novel, reading a dataset and reading an argument you dislike. The useful test is Gadamer's: has this thing ever pulled you up short? If a framework you hold explains every case you have ever applied it to, and nothing has ever resisted it, that is not a track record — it is the circle closing. The assumptions worth having are the ones capable of losing.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "reasoning",
        prompt: "Why is the hermeneutic circle productive rather than vicious?",
        choices: [
          { id: "a", label: "The whole guides the parts, which revise the whole" },
          { id: "b", label: "The parts can eventually be understood independently of the whole" },
          { id: "c", label: "The circle only affects religious and classical texts, not modern ones" },
          { id: "d", label: "Sufficient scholarship eventually establishes a foundation to build from" },
        ],
        correctChoiceId: "a",
        explanation: "Schleiermacher treated it as method: begin with a guess, use it to read the parts, revise, iterate. The important admission is that you must start with a guess — a reader with no expectations could not identify what they were looking at.",
      },
      {
        dimension: "reasoning",
        prompt: "What does Gadamer claim about prejudice?",
        choices: [
          { id: "a", label: "Pre-judgements form the horizon that enables understanding" },
          { id: "b", label: "Prejudice can be eliminated through sufficiently rigorous method" },
          { id: "c", label: "Prejudice is harmless provided the interpreter declares it in advance" },
          { id: "d", label: "Prejudice affects interpretation of others' cultures but not one's own" },
        ],
        correctChoiceId: "a",
        explanation: "He inverts the Enlightenment demand. A reader genuinely without expectations would find a text inert rather than difficult, because nothing could strike them as surprising or significant — so eliminating your standpoint eliminates understanding.",
      },
      {
        dimension: "depth",
        prompt: "What does 'fusion of horizons' describe?",
        choices: [
          { id: "a", label: "Interpreter and text meet and both are altered" },
          { id: "b", label: "The interpreter setting aside their frame to enter the text's world" },
          { id: "c", label: "Two scholars reconciling their competing readings of a work" },
          { id: "d", label: "A text's meaning converging on a single stable interpretation over time" },
        ],
        correctChoiceId: "a",
        explanation: "You neither vacate your position nor impose it. Understanding happens in the meeting and changes both — which is why genuine understanding changes the reader rather than merely informing them.",
      },
      {
        dimension: "reasoning",
        prompt: "What distinguishes a productive prejudice from a blind one?",
        choices: [
          { id: "a", label: "Whether the text can resist and force revision" },
          { id: "b", label: "Whether it was acquired through scholarship or through personal experience" },
          { id: "c", label: "Whether the interpreter is conscious of holding it" },
          { id: "d", label: "Whether it is shared by other readers in the same tradition" },
        ],
        correctChoiceId: "a",
        explanation: "The mark of understanding is being pulled up short. If a text never resists you, you are reading yourself — and a theory that finds what it predicted in every text is not confirmed, it is a circle that has closed.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the structural vulnerability of the hermeneutics of suspicion?",
        choices: [
          { id: "a", label: "Calling resistance concealment makes it uncorrectable" },
          { id: "b", label: "It requires biographical information about authors that is often unavailable" },
          { id: "c", label: "It applies only to texts written under conditions of political repression" },
          { id: "d", label: "It cannot account for texts that openly declare their ideological commitments" },
        ],
        correctChoiceId: "a",
        explanation: "If protest confirms rather than refutes, nothing could count against the reading — exactly the closed circle Gadamer warned of. Ricoeur's answer was pairing suspicion with a willingness to be addressed by the text.",
      },
    ],
    sources: [
      { label: "Hermeneutics (SEP)", note: "Stanford Encyclopedia entry on the hermeneutic circle, Schleiermacher and Gadamer.", type: "Reference", url: "https://plato.stanford.edu/entries/hermeneutics/" },
      { label: "Gadamer, Truth and Method (overview)", note: "Reference on prejudice, horizons and their fusion.", type: "Reference", url: "https://en.wikipedia.org/wiki/Truth_and_Method" },
    ],
  },
  {
    concept: "Free Indirect Discourse",
    level: "University",
    summary: "the technique that let fiction get inside a head without saying whose",
    estimatedMinutes: 9,
    deck: "It looks like a grammatical footnote: a sentence that reports a character's thought in the narrator's grammar. It is the reason the novel can do something no other form manages — hold a character's mind and an ironic distance from it in the same breath, so you inhabit a delusion and see through it simultaneously.",
    keyTerms: [
      { label: "Free indirect discourse", value: "A character's thought rendered in third-person past tense, keeping their idiom without a reporting clause." },
      { label: "Reporting clause", value: "The 'she thought' that direct and indirect speech require and free indirect discourse omits." },
      { label: "Dual voice", value: "The simultaneous presence of character and narrator in one sentence, neither fully in control." },
      { label: "Double-edged irony", value: "The gap between the character's understanding and the reader's, opened without narratorial comment." },
    ],
    sections: [
      {
        heading: "The three ways to report a thought",
        body: [
          `Fiction has three options for a character's inner speech, and the difference is structural rather than stylistic. Direct: *She thought, "He is insufferable."* — the character's exact words, quarantined in quotation marks, with a reporting clause naming the act. Indirect: *She thought that he was insufferable.* — the narrator paraphrases, subordinating the thought grammatically and taking custody of it. Free indirect: *He was insufferable.* — no quotation marks, no reporting clause, the character's judgement in the narrator's tense and person.`,
          `That third sentence is doing something the other two cannot. It is grammatically the narrator's — third person, past tense, no attribution — while the assessment is unmistakably the character's. You cannot answer the question "who says he is insufferable?" because the sentence refuses to separate them. Direct speech quarantines the character's voice; indirect speech absorbs it into the narrator's; free indirect discourse holds both at once and makes the ambiguity permanent, which is the entire source of its power.`,
        ],
      },
      {
        heading: "Austen's engine",
        body: [
          `Austen did not invent the technique but she is where it becomes an instrument of moral analysis. Emma opens by telling us Emma Woodhouse is handsome, clever, rich, and seems to unite the best blessings of existence — and the sentence sounds like narratorial assessment while being substantially Emma's estimate of herself. The novel's method is then to let Emma's judgements arrive in this borrowed narratorial grammar and let events refute them, without the narrator once stepping forward to say she is wrong.`,
          `That is why the irony is so much sharper than commentary would be. If a narrator told us Emma was self-deceived, we would receive an opinion and could take it or leave it. Instead we are placed inside the self-deception, thinking Emma's thoughts in a voice that sounds authoritative, and we discover the error at the moment she does — or slightly before, which is where the reader's pleasure lives. The technique makes the reader complicit before it makes them critical. You cannot condescend to a delusion you have just been inhabiting, which is precisely Austen's ethical design: the novel does not judge Emma, it makes you catch yourself.`,
        ],
      },
      {
        heading: "The dual voice problem",
        body: [
          `Critics have argued for decades about what is actually happening in these sentences, and the dispute is not merely technical. The dual-voice account holds that both narrator and character are present, and the sentence is genuinely double — its meaning includes the friction between the two. On this reading, free indirect discourse is inherently ironic, since the narrator's presence always implies a perspective on the character's.`,
          `The rival view, most forcefully Ann Banfield's, is that these are unspeakable sentences: they represent consciousness directly, with no narrator present at all, which is why they cannot be assigned a speaker. Free indirect discourse on this account is not double but a distinct mode of representation that ordinary speech has no equivalent for — a thing writing can do that talking cannot. The stakes are real. If the dual-voice reading is right, the technique is always at some level ironic; if Banfield is right, it can be pure interiority with no evaluative distance, which is closer to how it works in Woolf. The most defensible position is that the technique permits both and that the tuning is contextual, which is unsatisfying as theory and matches what novels actually do.`,
        ],
      },
      {
        heading: "Why it mattered historically",
        body: [
          `The technique's rise tracks something larger than craft. Free indirect discourse gives access to a mind's texture — its rationalisations, evasions and self-flattery — without the artifice of soliloquy or the flatness of reported thought, and it does so while retaining a perspective from outside. Novels became instruments for examining consciousness rather than narrating events, and the interior life became the novel's proper subject in a way it had not been.`,
          `It also equips fiction with a specific epistemological tool: the unreliable interior. Because the character's judgement wears the narrator's grammar, the reader must work out how far to trust a sentence that sounds authoritative — which trains a kind of reading, and arguably a kind of thinking. Flaubert weaponised it against bourgeois cliché in Madame Bovary, letting Emma Bovary's borrowed romantic vocabulary appear in the narration so the prose itself is contaminated by what it depicts. Later, Joyce and Woolf pushed toward interiority so continuous that the narrator nearly disappears. The whole modernist project of representing consciousness runs through a device that started as a way of not writing "she thought".`,
        ],
      },
      {
        heading: "The voice in your head that isn't yours",
        body: [
          `The reason this matters beyond novels is that the same structure operates in ordinary speech and you rarely catch it. When someone reports a colleague's position in a subtly loaded paraphrase, or a news report renders a claim in language that is technically neutral and quietly borrowed from one side, the sentence is doing what free indirect discourse does: presenting a perspective in a grammar that claims not to have one. Notice how hard it is to object — there is no attributed opinion to disagree with, only a sentence that sounds like description. The novelistic skill of asking "whose judgement is this, actually?" of a sentence that appears to have no judge is a genuinely useful thing to carry out of literature and into everything else you read.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What distinguishes free indirect discourse from indirect speech?",
        choices: [
          { id: "a", label: "It keeps the character's idiom in the narrator's grammar" },
          { id: "b", label: "It uses quotation marks to preserve the character's exact wording" },
          { id: "c", label: "It shifts into present tense to convey immediacy of thought" },
          { id: "d", label: "It is spoken aloud by the character rather than merely thought" },
        ],
        correctChoiceId: "a",
        explanation: "Indirect speech subordinates the thought grammatically and takes custody of it. Free indirect discourse keeps the character's judgement while wearing the narrator's tense and person, so the two cannot be separated.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is Emma's opening sentence an example of the technique's power?",
        choices: [
          { id: "a", label: "It sounds like the narrator but is Emma's self-estimate" },
          { id: "b", label: "It explicitly warns the reader that Emma's judgement is unreliable" },
          { id: "c", label: "It uses direct quotation to establish Emma's characteristic idiom" },
          { id: "d", label: "It withholds information the narrator possesses to create suspense" },
        ],
        correctChoiceId: "a",
        explanation: "Handsome, clever, rich, uniting the best blessings of existence — authoritative in grammar, self-flattering in origin. The novel then lets events refute her judgements without the narrator ever stepping forward to say she is wrong.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is the irony sharper than narratorial commentary would be?",
        choices: [
          { id: "a", label: "You inhabit the delusion, so cannot condescend" },
          { id: "b", label: "Commentary would be too explicit for contemporary literary conventions" },
          { id: "c", label: "The narrator's silence leaves the moral judgement genuinely open" },
          { id: "d", label: "Irony requires that the character remain unaware throughout the novel" },
        ],
        correctChoiceId: "a",
        explanation: "Told Emma is self-deceived, we receive an opinion. Placed inside the self-deception in an authoritative-sounding voice, we discover the error as she does — the technique makes you complicit before it makes you critical.",
      },
      {
        dimension: "reasoning",
        prompt: "What does Banfield's 'unspeakable sentences' thesis claim?",
        choices: [
          { id: "a", label: "They show consciousness with no narrator to assign" },
          { id: "b", label: "The sentences are ungrammatical and could not occur in ordinary usage" },
          { id: "c", label: "Both narrator and character are present, making the sentence inherently ironic" },
          { id: "d", label: "The technique cannot be used for characters whose thoughts are inarticulate" },
        ],
        correctChoiceId: "a",
        explanation: "It is the rival to the dual-voice account. The stakes are real: if dual voice is right the technique is always ironic; if Banfield is right it can be pure interiority with no distance, closer to how Woolf uses it.",
      },
      {
        dimension: "reasoning",
        prompt: "What epistemological tool does the technique give fiction?",
        choices: [
          { id: "a", label: "A judgement in authoritative grammar the reader must calibrate" },
          { id: "b", label: "The ability to present multiple characters' thoughts simultaneously" },
          { id: "c", label: "A method for concealing plot information until a revelation" },
          { id: "d", label: "A way of establishing the historical accuracy of a narrator's account" },
        ],
        correctChoiceId: "a",
        explanation: "Because the character's judgement wears the narrator's grammar, the reader must work out how far to trust a sentence that sounds authoritative — Flaubert weaponised this so the prose itself is contaminated by the cliché it depicts.",
      },
    ],
    sources: [
      { label: "Free indirect speech (overview)", note: "Reference on the technique, its grammar and its literary history.", type: "Reference", url: "https://en.wikipedia.org/wiki/Free_indirect_speech" },
      { label: "Banfield, Unspeakable Sentences (overview)", note: "The no-narrator account of represented consciousness and the dual-voice dispute.", type: "Reference", url: "https://en.wikipedia.org/wiki/Narration" },
    ],
  },
  {
    concept: "The Death of the Author",
    level: "University",
    summary: "whether what a writer meant has any authority over what a text means",
    estimatedMinutes: 9,
    deck: "Barthes's essay is the most misquoted document in literary theory. It does not say authors are irrelevant or that any reading goes. It says something narrower and more disruptive: that appealing to what the author meant is a way of closing a text down, and that the meaning was never in their custody to begin with.",
    keyTerms: [
      { label: "The Author-God", value: "Barthes's target: the figure whose intention is treated as the text's ultimate explanation." },
      { label: "The intentional fallacy", value: "Wimsatt and Beardsley's earlier claim that authorial intention is neither available nor decisive." },
      { label: "The scriptor", value: "Barthes's replacement for the author — a writer who assembles existing language rather than originating meaning." },
      { label: "Hirsch's counter", value: "The defence that without intention there is no criterion distinguishing interpretation from invention." },
    ],
    sections: [
      {
        heading: "What the essay actually argues",
        body: [
          `Roland Barthes's 1967 essay attacks a specific critical habit: explaining a work by appeal to its author's life, psychology and intentions, as though the biography were the key and the text the lock. His objection is not that authors do not exist. It is that treating the author as the origin of meaning "imposes a limit on that text, furnishes it with a final signified, closes the writing" — the appeal to intention functions as a stopping rule, an authority that ends interpretation rather than informing it.`,
          `His alternative image is that a text is "a tissue of quotations drawn from the innumerable centres of culture". The writer does not invent language, genre, convention or association; they assemble what already circulates, and the resulting meanings exceed anything they could have intended because the materials carry histories they do not control. Barthes accordingly replaces the author with the "scriptor", who exists only in the act of writing and has no prior authority over the result. The famous last line — that the birth of the reader must be at the cost of the death of the author — is a claim about where meaning gets made, not an instruction to ignore who wrote things.`,
        ],
      },
      {
        heading: "The argument Barthes inherited",
        body: [
          `The analytic version arrived twenty years earlier and is more precise. Wimsatt and Beardsley's "The Intentional Fallacy" (1946) makes a two-part case that is harder to dismiss than Barthes's rhetoric. First, availability: you generally do not have access to the author's intention, and the evidence you do have — letters, interviews, drafts — is itself text requiring interpretation, so you have not escaped the problem, only relocated it. Second, and decisively, relevance: even granted the intention, it does not settle the question. If the poem achieves an effect the poet did not intend, the effect is in the poem. If the poet intended an effect the poem does not achieve, the intention does not rescue it.`,
          `That second point is the real force, and it survives most objections. Intention is a fact about a person; meaning is a property of a text meeting a competent reader. A writer who says "I meant it as a joke" has told you something true about themselves and has not thereby made the words funny. This is why the fallacy is a fallacy rather than a preference: appealing to intention answers a different question from the one being asked, and does so while sounding like it settles the matter.`,
        ],
      },
      {
        heading: "The strongest reply",
        body: [
          `E. D. Hirsch's objection is the one worth taking seriously. If meaning is not anchored to intention, what distinguishes interpretation from invention? Any text can be made to mean almost anything by a determined reader, and without the author there is no criterion for saying a reading is wrong — only that it is unfashionable. That is a genuine cost. Hirsch's move is to distinguish meaning, which he ties to authorial intention and treats as determinate, from significance, which is the text's relation to a reader and varies freely. On this view you can say what a text means and separately what it means to you, and the theorists collapsed the two.`,
          `The counter is that Hirsch's determinate meaning is not recoverable in practice, so it functions as a postulate that does no work — you still argue about what the text says, and now you argue about it while claiming to be recovering intention. The more defensible middle is that texts constrain readings without determining them: not every interpretation is available, because the words are what they are, but the constraint comes from the language rather than the author's mind. That preserves the possibility of being wrong, which Hirsch was right to insist on, without smuggling in an intention nobody can access.`,
        ],
      },
      {
        heading: "Why it stopped being about literature",
        body: [
          `The argument's consequences reach well beyond criticism, and the cases where they bite are not academic. When a law is applied, does it mean what its drafters intended or what its words say — the dispute between originalism and textualism, which is Wimsatt and Beardsley in a courtroom, with the additional wrinkle that a legislature's collective intention may not be a coherent object at all. When a work's author is disgraced, the question of whether the art is separable from them is a question about whether the author was ever in the text to begin with.`,
          `The most pressing contemporary case is generated text. When a model produces something meaningful, whose intention explains it? There is no scriptor with a biography, and yet the output is interpretable — which is either a reductio of the whole intentionalist position or evidence that Barthes described something real about how meaning is assembled from circulating language. It is genuinely unclear which, and that is interesting rather than embarrassing: a fifty-year-old argument about French literary criticism turns out to be the sharpest available tool for thinking about text with no author behind it.`,
        ],
      },
      {
        heading: "Why 'that's not what I meant' rarely works",
        body: [
          `You run this argument whenever a message lands badly. "That is not what I meant" is a true report of your intention and a weak defence of your words, because the person reading them has the words and not your mind — which is Wimsatt and Beardsley's point applied to a Slack thread. The intention is real and it is not in the text, and the gap between them is where nearly every avoidable conflict lives. The reverse holds too: when someone tells you the offence was unintended, they are telling you something true that does not settle what they said. The useful practice is to stop treating "what did they mean?" as the whole question and start asking what the words actually do — which is what a competent reader has to work with, and all anyone will ever have.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "reasoning",
        prompt: "What is Barthes's actual objection to appealing to the author?",
        choices: [
          { id: "a", label: "It is a stopping rule giving a final signified" },
          { id: "b", label: "Authors routinely misremember or misrepresent their own intentions" },
          { id: "c", label: "Biographical information about most authors is unavailable to scholars" },
          { id: "d", label: "Authors have no legal claim over interpretations of their published work" },
        ],
        correctChoiceId: "a",
        explanation: "The appeal ends interpretation rather than informing it. His alternative is that a text is a tissue of quotations whose materials carry histories the writer does not control — so meanings exceed anything intendable.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the decisive half of Wimsatt and Beardsley's argument?",
        choices: [
          { id: "a", label: "Relevance — what is in the poem, intended or not" },
          { id: "b", label: "Availability — the author's intention cannot usually be discovered" },
          { id: "c", label: "That authors deliberately conceal their intentions from readers" },
          { id: "d", label: "That poems have no determinate meaning independent of readers" },
        ],
        correctChoiceId: "a",
        explanation: "Availability relocates the problem; relevance dissolves it. Intention is a fact about a person, meaning a property of a text meeting a competent reader — 'I meant it as a joke' does not make the words funny.",
      },
      {
        dimension: "depth",
        prompt: "What is the 'scriptor' in Barthes's account?",
        choices: [
          { id: "a", label: "A writer assembling circulating language, not originating it" },
          { id: "b", label: "The implied narrator distinct from the historical person who wrote" },
          { id: "c", label: "A collaborative author whose work cannot be attributed to one person" },
          { id: "d", label: "The reader, who produces the text's meaning through interpretation" },
        ],
        correctChoiceId: "a",
        explanation: "The writer invents neither language, genre, convention nor association but assembles what already circulates — so they hold no prior authority over a result whose materials carry histories beyond their control.",
      },
      {
        dimension: "reasoning",
        prompt: "What is Hirsch's strongest objection?",
        choices: [
          { id: "a", label: "Without intention, reading cannot be told from invention" },
          { id: "b", label: "Authors have a moral right to control how their work is read" },
          { id: "c", label: "Readers lack the training to interpret texts without guidance" },
          { id: "d", label: "Texts have no meaning at all until an author confirms one" },
        ],
        correctChoiceId: "a",
        explanation: "A determined reader can make a text mean almost anything, and without the author no reading is wrong, only unfashionable. His distinction between determinate meaning and variable significance is the attempted rescue.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does machine-generated text sharpen the debate?",
        choices: [
          { id: "a", label: "There is no scriptor with a biography, yet the output is interpretable" },
          { id: "b", label: "Models explicitly encode the intentions of their training data's authors" },
          { id: "c", label: "Generated text has no meaning, confirming that intention is necessary" },
          { id: "d", label: "Copyright law resolves the question of authorship for such outputs" },
        ],
        correctChoiceId: "a",
        explanation: "This is either a reductio of intentionalism or evidence Barthes described something real about meaning assembled from circulating language — and it is genuinely unclear which, which is what makes it interesting.",
      },
    ],
    sources: [
      { label: "Barthes, 'The Death of the Author' (overview)", note: "Reference on the essay, the scriptor and the birth of the reader.", type: "Reference", url: "https://en.wikipedia.org/wiki/The_Death_of_the_Author" },
      { label: "Authorial intent and the intentional fallacy (overview)", note: "Reference on Wimsatt and Beardsley and Hirsch's reply.", type: "Reference", url: "https://en.wikipedia.org/wiki/Authorial_intent" },
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
      { label: "Dramatic irony", value: "When we know what a character does not." },
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
          { id: "a", label: "A gap of saying and meaning" },
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
          { id: "b", label: "When we know what a character does not" },
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
          { id: "a", label: "The audience knows he hunts himself; he does not" },
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
          { id: "a", label: "When the outcome defies what was expected" },
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
          { id: "a", label: "A knowing distance lets folly expose itself" },
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
      { label: "Genre", value: "A class of text sharing conventions." },
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
          { id: "a", label: "A class of text sharing conventions" },
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
          { id: "a", label: "Signalling genre tells the reader how to read it" },
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
          { id: "a", label: "You cannot break a rule the reader does not know" },
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
          { id: "a", label: "A death reads differently by genre" },
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
          { id: "a", label: "What a work does with convention matters" },
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
      { label: "Intertextuality", value: "Meaning shaped by ties to other texts." },
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
          { id: "a", label: "Meaning shaped by ties to other texts" },
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
          { id: "a", label: "A nod to another text" },
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
          { id: "a", label: "It rewrites Brontë from the silenced woman's view" },
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
          { id: "a", label: "Writers work from inherited texts" },
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
          { id: "a", label: "How the new work uses or challenges the old" },
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
      { label: "Hamartia", value: "The flaw that brings the hero down." },
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
          { id: "b", label: "The flaw that brings the hero down" },
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
          { id: "a", label: "A purging of pity and fear" },
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
          { id: "a", label: "Recognition strikes as fortune falls" },
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
          { id: "a", label: "By making an ordinary man a tragic hero" },
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
          { id: "a", label: "A staged confrontation giving the fall meaning" },
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
          { id: "b", label: "A smooth narrative felt like a lie after the war" },
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
          { id: "a", label: "Its disjointedness enacts post-war fragmentation" },
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
          { id: "a", label: "A character's flowing inner thoughts" },
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
          { id: "a", label: "Treat the difficulty as design with a purpose" },
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
          { id: "a", label: "Reality is filtered through fragmented consciousness" },
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
          { id: "a", label: "Reclaiming colonised voices" },
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
          { id: "a", label: "Western images of the 'Orient' served colonial power" },
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
          { id: "a", label: "It makes Africa a voiceless backdrop" },
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
          { id: "a", label: "Whether the marginalised speak for themselves" },
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
          { id: "a", label: "The coloniser's tongue is also domination" },
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
          { id: "a", label: "The stress pattern giving rhythm" },
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
          { id: "b", label: "An unstressed then stressed syllable" },
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
          { id: "a", label: "Five iambs per line" },
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
          { id: "a", label: "A broken rhythm jolts and stresses a word" },
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
          { id: "a", label: "How a line moves is part of what it means" },
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
