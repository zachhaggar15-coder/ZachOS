import { buildAuthoredLessons, type AuthoredLesson } from "./types";

// Ten hand-written Art History lessons: researched, concept-specific prose with
// named artists, works and theorists, each closing on an everyday-life example,
// plus genuine recall quizzes.
const artHistory: AuthoredLesson[] = [
  {
    concept: "The Period Eye",
    level: "University",
    summary: "why a fifteenth-century merchant saw things in a painting you cannot",
    estimatedMinutes: 9,
    deck: "We assume looking is natural — that a painting presents itself the same way to any pair of working eyes. Baxandall showed this is false: the skills a viewer brings are learned from their daily life, and a Renaissance merchant read pictorial information using competences from gauging barrels and dancing that you simply do not have.",
    keyTerms: [
      { label: "The period eye", value: "The historically specific visual skills a viewer brings, learned from their ordinary life." },
      { label: "Cognitive style", value: "The stock of patterns, categories and inferences a viewer uses to interpret what they see." },
      { label: "Gauging", value: "The merchant's trained skill at estimating volumes, transferable to reading pictorial solids." },
      { label: "Social history of vision", value: "Treating perception itself, not just taste, as a historical product." },
    ],
    sections: [
      {
        heading: "Perception as a skill, not a given",
        body: [
          `Michael Baxandall's Painting and Experience in Fifteenth-Century Italy begins from a deceptively modest observation: a painting is not self-explanatory. The retinal image is much the same for any viewer, but what a person does with it — what they notice, categorise, infer, find easy or difficult — depends on skills acquired elsewhere. He called the historically specific bundle of those skills the period eye, and his claim is that a painter works with the equipment their public actually has.`,
          `This reverses the usual direction of art history. Instead of asking what the artist intended, Baxandall asks what the audience was competent to see, and treats the picture as evidence of that competence — because a painter who deploys a visual effect their viewers cannot register is wasting the effect. The painting is thus a record of the shared cognitive equipment of its moment, and reading it properly means reconstructing the equipment rather than assuming your own.`,
        ],
      },
      {
        heading: "Where the skills came from",
        body: [
          `The demonstration is what makes the book famous, because the sources of the relevant skills are startlingly mundane. Fifteenth-century Italian merchants were trained in gauging: estimating the volume of irregular solids — barrels, bales, heaps of grain — by eye and by geometry, because that was how you priced goods without standardised containers. That is a serious, drilled, everyday competence in analysing three-dimensional form into manageable geometric components. And it is precisely the skill a viewer needs to read the pictorial solidity of a Piero della Francesca.`,
          `Baxandall's other cases are equally concrete. Educated viewers had a trained sense of proportion from commercial arithmetic, so they could register a painting's underlying ratios as a merchant registers a bargain. They knew the conventional gestures of preaching and of the dance, so a figure's stance carried a legible emotional register that reads to us as merely decorative posing. They had a stock of sermon-derived categories for the Annunciation's emotional stages — disquiet, reflection, submission — so a Mary's posture told them precisely which moment of a known sequence they were watching. None of this is esoteric knowledge. It is the ordinary furniture of a fifteenth-century commercial mind, and it is why the pictures were legible in ways they no longer are.`,
        ],
      },
      {
        heading: "What follows for looking at old art",
        body: [
          `The consequence is uncomfortable: your response to a Renaissance painting is not a purer, unmediated aesthetic reaction that the original audience's contextual baggage obscured. It is a differently equipped response, and in the specific respects Baxandall identifies, a less competent one. You are missing information the picture is actively transmitting, because you lack the skills to receive it. What feels like directly appreciating the beauty is partly failing to read the content.`,
          `This cuts against a persistent romanticism about art — the idea that great work speaks across time to the naked eye, and that scholarship gets in the way of experience. Baxandall's position is that scholarship restores rather than mediates: reconstructing the period eye lets you see what is there rather than what your own equipment makes available. It also cuts against the opposite error, the assumption that historical viewers were naive. They were more skilled than you at the things their world trained them for, and their pictures were built for their competences, not yours.`,
        ],
      },
      {
        heading: "The method and its limits",
        body: [
          `Baxandall's approach founded what became the social history of vision, and its methodological ambition is worth noticing: he is using pictures as evidence about cognition, and cognition as evidence about pictures, without either being reducible to the other. He is explicit that this is not "influence" or "background" — the merchant's gauging does not influence the painting, it constitutes the audience's capacity to read it, which is a stronger and more specific claim.`,
          `The obvious risk is circularity, and critics have pressed it: he infers the period eye partly from the pictures and then uses it to explain them. His defence is that the skills are independently documented — the gauging manuals, the dance treatises, the preaching handbooks exist and can be consulted — so the inference is anchored outside the pictures. Others note the account is narrow, describing a specific class of educated urban men and quietly generalising to "the" period eye when a society contains many. Both criticisms are fair and neither touches the core insight, which has proved extraordinarily portable: perception is trained, training is historical, and the trained eye is part of the artwork's conditions of existence.`,
        ],
      },
      {
        heading: "The things you cannot help seeing",
        body: [
          `Your own eye is period-specific and you cannot feel it. You read a photograph's shallow depth of field as intimacy, a jump cut as continuous action, a loading spinner as waiting — none of which is natural, all of which you drilled without noticing. Early cinema audiences had to learn that a cut was not a teleportation, and the fact that this seems absurd to you is the measure of your own training. It works in reverse too: watch someone from a different visual culture fail to see what is obvious to you in an interface or a diagram, and resist reading it as slowness. They are differently equipped, exactly as you are when you stand in front of a fifteenth-century altarpiece and see only a nice painting.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "reasoning",
        prompt: "What does the concept of the period eye claim?",
        choices: [
          { id: "a", label: "Viewers bring period skills that shape what they can read" },
          { id: "b", label: "Artists in each period deliberately restricted themselves to conventional techniques" },
          { id: "c", label: "Aesthetic preferences differ between periods while perception itself stays constant" },
          { id: "d", label: "Only trained artists could fully perceive the works of their contemporaries" },
        ],
        correctChoiceId: "a",
        explanation: "The retinal image is much the same for anyone; what differs is what a viewer notices, categorises and infers. A painter works with the equipment their public actually has, so the picture records that equipment.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does gauging matter for reading a Piero della Francesca?",
        choices: [
          { id: "a", label: "It trained merchants to break form into geometric parts" },
          { id: "b", label: "It taught merchants the specific proportions painters used in composition" },
          { id: "c", label: "Painters were themselves trained as gaugers before entering workshops" },
          { id: "d", label: "Gauged barrels appear frequently as objects within the paintings" },
        ],
        correctChoiceId: "a",
        explanation: "Estimating volumes of irregular solids by eye and geometry — because goods were priced without standardised containers — is exactly the competence needed to read pictorial solidity. It is an everyday commercial skill, not an artistic one.",
      },
      {
        dimension: "reasoning",
        prompt: "What does Baxandall's argument imply about your response to a Renaissance painting?",
        choices: [
          { id: "a", label: "It is equipped differently, and less able in key respects" },
          { id: "b", label: "It is purer, because you lack the doctrinal assumptions that constrained contemporaries" },
          { id: "c", label: "It is equivalent, since aesthetic response does not depend on trained skills" },
          { id: "d", label: "It is impossible, because the relevant skills cannot now be reconstructed" },
        ],
        correctChoiceId: "a",
        explanation: "You are missing information the picture is actively transmitting, because you lack the skills to receive it. What feels like directly appreciating beauty is partly failing to read content.",
      },
      {
        dimension: "reasoning",
        prompt: "How does the argument treat scholarship's relation to experience?",
        choices: [
          { id: "a", label: "Scholarship restores what is there, not a direct encounter" },
          { id: "b", label: "Scholarship necessarily interposes theory between viewer and object" },
          { id: "c", label: "Scholarship matters for attribution but not for perception" },
          { id: "d", label: "Scholarship should defer to the untrained response as more authentic" },
        ],
        correctChoiceId: "a",
        explanation: "Reconstructing the period eye lets you see what is present rather than what your own equipment makes available — cutting against the romanticism that great work speaks to the naked eye and scholarship gets in the way.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the strongest methodological objection to the approach?",
        choices: [
          { id: "a", label: "Circularity — inferred from the pictures it then explains" },
          { id: "b", label: "The relevant commercial skills left no documentary record to consult" },
          { id: "c", label: "It assumes viewers had no aesthetic response independent of trained skill" },
          { id: "d", label: "It cannot be applied to any period other than fifteenth-century Italy" },
        ],
        correctChoiceId: "a",
        explanation: "The defence is that gauging manuals, dance treatises and preaching handbooks exist independently, anchoring the inference outside the pictures. A fairer criticism is narrowness — it describes educated urban men and generalises to 'the' period eye.",
      },
    ],
    sources: [
      { label: "Baxandall, Painting and Experience in Fifteenth-Century Italy", note: "The founding text of the period eye and the social history of vision.", type: "Reference", url: "https://en.wikipedia.org/wiki/Michael_Baxandall" },
      { label: "Visual culture (overview)", note: "Reference on the historical study of perception and viewing skills.", type: "Reference", url: "https://en.wikipedia.org/wiki/Visual_culture" },
    ],
  },
  {
    concept: "Iconography",
    level: "A-level",
    summary: "symbols, attributes and motifs that carry shared meaning",
    estimatedMinutes: 8,
    deck: "A dog at a couple's feet, a skull on a desk, a woman holding a wheel: to the initiated, these are not decoration but a code. Iconography is the art of reading that code — recovering the meanings a culture packed into its images and that time has since made invisible.",
    keyTerms: [
      { label: "Iconography", value: "The study of the subject matter, symbols and motifs in images and their meanings." },
      { label: "Attribute", value: "An object that identifies a figure — a wheel for St Catherine, keys for St Peter." },
      { label: "Panofsky's levels", value: "Three layers of meaning: what you see, the story or symbol, and the deeper cultural meaning." },
      { label: "Vanitas", value: "Symbols like skulls and wilting flowers reminding the viewer of death and transience." },
    ],
    sections: [
      {
        heading: "Images as coded language",
        body: [
          `Iconography is the study of the meaning of images: their subject matter, symbols and recurring motifs. For most of history, art was made for viewers who shared a dense visual code, and objects that look incidental to us were once instantly legible signs. A lily meant purity; a skull meant death; a particular gesture meant blessing. To read older art properly, you have to relearn that vocabulary.`,
          `The clearest case is the identification of figures by their attributes — objects that act like name tags. In Christian art, a woman holding a broken wheel is Saint Catherine, martyred on one; a man with keys is Saint Peter, holder of the keys to heaven; a figure pierced with arrows is Saint Sebastian. Without the code, they are just people with odd props. With it, the picture tells a story the artist expected every viewer to know.`,
        ],
      },
      {
        heading: "Panofsky's three levels",
        body: [
          `The scholar who systematised this was Erwin Panofsky, who in the 1930s proposed reading an image on three levels. The first is pre-iconographic: simply describing what you see — a man raising his hat to a woman. The second is iconographic: identifying that this is a specific story, figure or convention — recognising the greeting as a particular custom, or the man as a known saint by his attributes. This level requires knowing the culture's stories and symbols.`,
          `The third and deepest level Panofsky called iconological: interpreting what the image reveals about the underlying worldview of the society that made it — its assumptions, anxieties and values. A painting crammed with symbols of wealth and death might, at this level, express a whole culture's tension between prosperity and piety. Panofsky's ladder takes you from seeing, to identifying, to understanding — each rung requiring more knowledge than the last.`,
        ],
      },
      {
        heading: "Reading a loaded picture",
        body: [
          `Consider the Dutch "vanitas" still life, popular in the 1600s. On the surface it is a table of beautiful objects. Iconographically it is a sermon: the skull is death, the wilting flowers and rotting fruit are transience, the extinguished candle and bubbles are the brevity of life, the coins and jewels are worldly vanity. Every object is a word in a sentence about mortality, aimed at a viewer fluent in the symbolism.`,
          `Or take a hidden detail like the small dog often placed at the feet of a couple in a portrait: it commonly signified fidelity and marital loyalty. These meanings were obvious to contemporaries and are invisible to us until we learn them. Iconography is the recovery operation — reconstructing the symbolic language so that a picture we found merely pretty becomes a message we can actually read.`,
        ],
      },
      {
        heading: "The limits of the code",
        body: [
          `Iconography is powerful but has pitfalls. Symbols are not fixed dictionaries: the same object can mean different things in different times, places and contexts, so meanings must be established from evidence, not imposed. A dog might mean fidelity in one painting and something else entirely in another. Over-reading is a real danger — not every object is a symbol, and treating a picture as a coded puzzle can crush its other qualities.`,
          `Later art historians also pushed beyond iconography, arguing that focusing only on hidden meanings can ignore how a work looks, who paid for it, and how it functioned socially. So iconography works best alongside formal analysis and context, not instead of them. Read responsibly, though, it remains indispensable: without it, vast stretches of religious, mythological and symbolic art are simply illegible to a modern eye.`,
        ],
      },
      {
        heading: "The symbols you already read",
        body: [
          `You are already a fluent iconographer of your own culture. You read a red rose as love, a skull-and-crossbones as danger, a white dove as peace, a brand logo as a whole set of associations — instantly, without decoding consciously. Film-makers rely on it: a character shown with a caged bird, a shattered mirror, or an approaching storm is being described in visual symbols you understand at once. The reason older art can feel opaque is simply that its symbolic vocabulary has fallen out of use. Learning iconography is learning to read someone else's visual language as easily as you read your own.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is iconography?",
        choices: [
          { id: "a", label: "The study of symbols and subject matter in images" },
          { id: "b", label: "The chemical analysis of a work's paint layers" },
          { id: "c", label: "The precise measurement of a painting's dimensions" },
          { id: "d", label: "The record of who has owned a work over time" },
        ],
        correctChoiceId: "a",
        explanation: "Iconography recovers the meanings a culture packed into its images — the symbols, motifs and subject matter that were once legible to shared viewers.",
      },
      {
        dimension: "depth",
        prompt: "What is an 'attribute' in iconography?",
        choices: [
          { id: "a", label: "A distinctive quality of the paint's surface texture" },
          { id: "b", label: "An object identifying a figure, as a wheel does St Catherine" },
          { id: "c", label: "The artist's own signature on the work" },
          { id: "d", label: "The market price attached to the artwork" },
        ],
        correctChoiceId: "b",
        explanation: "Attributes act like name tags: keys identify St Peter, a broken wheel St Catherine, arrows St Sebastian. Without the code they are just odd props; with it, they name the figure.",
      },
      {
        dimension: "reasoning",
        prompt: "What distinguishes Panofsky's 'iconological' level from the 'iconographic' one?",
        choices: [
          { id: "a", label: "Iconological merely catalogues the visible motifs" },
          { id: "b", label: "Iconological reads what the image says of its society" },
          { id: "c", label: "Iconological disregards meaning altogether" },
          { id: "d", label: "They are simply two labels for one level" },
        ],
        correctChoiceId: "b",
        explanation: "The iconographic level identifies the story or symbol; the deeper iconological level interprets what the image reveals about a culture's underlying assumptions, anxieties and values.",
      },
      {
        dimension: "reasoning",
        prompt: "In a Dutch 'vanitas' still life, what does the skull signify?",
        choices: [
          { id: "a", label: "The great wealth of the picture's owner" },
          { id: "b", label: "A reminder of death and life's transience" },
          { id: "c", label: "An illustration copied from a medical text" },
          { id: "d", label: "A hidden self-portrait of the artist" },
        ],
        correctChoiceId: "b",
        explanation: "In a vanitas, every object is a word about mortality: the skull is death, wilting flowers are transience, the snuffed candle the brevity of life — a sermon aimed at a symbolically literate viewer.",
      },
      {
        dimension: "reasoning",
        prompt: "What is a key pitfall when using iconography?",
        choices: [
          { id: "a", label: "Assuming fixed meanings, reading every object as code" },
          { id: "b", label: "Carefully describing what is visible in the image" },
          { id: "c", label: "Studying the culture's own stories and texts" },
          { id: "d", label: "Comparing two paintings from the same period" },
        ],
        correctChoiceId: "a",
        explanation: "Symbols are not fixed dictionaries — the same object can mean different things in different contexts, and not every object is a symbol. Meanings must be established from evidence, not imposed.",
      },
    ],
    sources: [
      { label: "Erwin Panofsky, Studies in Iconology", note: "The three-level method of reading meaning in images.", type: "Reference", url: "https://en.wikipedia.org/wiki/Iconography" },
      { label: "Smarthistory", note: "Museum-grade essays decoding symbols and subject matter in art.", type: "Reference", url: "https://smarthistory.org/" },
    ],
  },
  {
    concept: "Patronage",
    level: "A-level",
    summary: "the role of funders, institutions and commissions in shaping art",
    estimatedMinutes: 8,
    deck: "For most of history, artists did not paint what they liked and hope to sell it. They made what someone paid them to make. Patronage — the money and power behind the commission — shaped subject, size, materials and message, which is why the first question to ask of an old artwork is often: who paid, and what did they want?",
    keyTerms: [
      { label: "Patron", value: "The person or institution that commissions and pays for a work of art." },
      { label: "Commission", value: "An order for a specific artwork, often with detailed terms set by the patron." },
      { label: "The contract", value: "Agreements that specified size, subject, materials and even which pigments to use." },
      { label: "Propaganda / prestige", value: "Art commissioned to project a patron's power, piety or status." },
    ],
    sections: [
      {
        heading: "Art on commission",
        body: [
          `The romantic image of the artist as a free spirit painting personal visions is largely a modern invention. For most of art history, art was made to order. A patron — the Church, a prince, a city guild, a wealthy family — commissioned a work for a specific purpose and paid for it, and the artist delivered what was wanted. Understanding a work therefore means understanding the transaction behind it: who commissioned it, why, and on what terms.`,
          `This is not a cynical footnote but a central fact. The subject of a painting, its size, where it hung, how much gold it contained, even which saints appeared, were often dictated by the patron's needs — devotional, political, dynastic or commercial. "Follow the money" is genuinely good art-historical advice, because the money usually shaped the art.`,
        ],
      },
      {
        heading: "What the patron demanded",
        body: [
          `Patrons did not just fund; they specified. Surviving Renaissance contracts are startlingly precise: they set the subject, the deadline, the size, sometimes the exact composition, and crucially the materials. Expensive pigments were a status symbol, and contracts might stipulate how much gold leaf and, above all, how much ultramarine — a blue made from ground lapis lazuli, more costly than gold — the artist must use. The patron was buying visible expense as much as beauty.`,
          `This means material lavishness in old art is often a message about the patron's wealth and devotion, not merely the artist's taste. A robe painted in deep ultramarine announced that the commissioner had spared no cost, frequently to honour the Virgin Mary. Reading these choices as patron decisions, not just artistic ones, changes how you see the work: the splendour is partly a receipt.`,
        ],
      },
      {
        heading: "Power made visible",
        body: [
          `Because patrons paid, art became a tool for projecting their power and identity. The Medici family of Florence used lavish patronage of artists and architects to cement their prestige and legitimacy as unofficial rulers. Popes commissioned vast works to glorify the Church and themselves — Pope Julius II set Michelangelo to paint the Sistine Chapel ceiling and commissioned a grand tomb, monuments to papal authority as much as to faith.`,
          `Rulers across history grasped the same logic: grand architecture, imposing portraits and public monuments make power visible and awe-inspiring. Much of the world's greatest art exists because the powerful wanted to be seen as magnificent, pious or eternal. The art is genuinely great, and it is also, often, an argument on behalf of whoever paid for it.`,
        ],
      },
      {
        heading: "When the market replaced the patron",
        body: [
          `Patronage did not vanish, but it changed. In the Dutch Republic of the 1600s, a broad middle class bought art not on commission but ready-made from a market, which is why Dutch painting turned to portable pictures of landscapes, still lifes and everyday life that many buyers would want. The demand of an open market shaped the art as surely as a single patron's commission once had.`,
          `Later, art academies, then dealers and galleries, then museums and states, became the new patrons, each shaping what got made and celebrated. Even the modern idea of the "independent" artist depends on someone — a collector, a grant, a gallery — providing money and validation. The forms of patronage keep changing, but the underlying truth holds: art is made within systems of funding and power, and those systems leave their fingerprints on the work.`,
        ],
      },
      {
        heading: "Who funds the images you see",
        body: [
          `Patronage is alive wherever money shapes what gets made. The sponsored post, the brand-funded film, the corporate logo on a gallery wing, the mural paid for by a council or a developer — each is a modern commission, and each carries something of the funder's agenda. Next time you enjoy a slick advert, a music video, or a piece of public art, ask the old question: who paid for this, and what did they want you to feel or believe? The answer often explains the work better than the style does — exactly as it did for a Renaissance altarpiece.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What does 'patronage' mean in art history?",
        choices: [
          { id: "a", label: "The particular technique an artist uses to apply paint" },
          { id: "b", label: "Funding and commissioning that shape what art is made" },
          { id: "c", label: "The way visitors are expected to behave in a gallery" },
          { id: "d", label: "The recognisable signature style of a famous artist" },
        ],
        correctChoiceId: "b",
        explanation: "Patronage is the money and power behind a commission — the Church, princes or wealthy families paying for specific works, which shaped their subject, size, materials and message.",
      },
      {
        dimension: "reasoning",
        prompt: "Why might a Renaissance contract specify the use of expensive ultramarine?",
        choices: [
          { id: "a", label: "Because blue was the sole pigment then available" },
          { id: "b", label: "Costly pigments showed the patron's wealth" },
          { id: "c", label: "Because artists simply favoured it without reason" },
          { id: "d", label: "Because it was by far the cheapest pigment" },
        ],
        correctChoiceId: "b",
        explanation: "Ultramarine, ground from lapis lazuli, cost more than gold. Contracts stipulating it meant the patron was buying visible expense — the material lavishness is a message about their wealth and piety.",
      },
      {
        dimension: "depth",
        prompt: "How did powerful patrons like the Medici or Pope Julius II use art?",
        choices: [
          { id: "a", label: "To project and legitimise their power" },
          { id: "b", label: "Merely to decorate private rooms nobody saw" },
          { id: "c", label: "To deflect attention away from themselves" },
          { id: "d", label: "Solely as an investment to be resold later" },
        ],
        correctChoiceId: "a",
        explanation: "The Medici used lavish patronage to cement their standing, and Julius II commissioned works like the Sistine ceiling to glorify the Church and himself — art as a visible argument for power.",
      },
      {
        dimension: "reasoning",
        prompt: "Why did Dutch painting in the 1600s favour landscapes, still lifes and everyday scenes?",
        choices: [
          { id: "a", label: "Because the Church commissioned all of them" },
          { id: "b", label: "A middle-class market bought ready-made pictures" },
          { id: "c", label: "Because kings personally ordered such works" },
          { id: "d", label: "Because painting people was strictly forbidden" },
        ],
        correctChoiceId: "b",
        explanation: "In the Dutch Republic art was bought ready-made from a market rather than commissioned, so painters made portable pictures many buyers would want — the market shaped the art as a single patron once had.",
      },
      {
        dimension: "depth",
        prompt: "What is the enduring lesson about art and patronage?",
        choices: [
          { id: "a", label: "Art is made wholly independent of money" },
          { id: "b", label: "Funding and power mark the work" },
          { id: "c", label: "Only religious art has ever had patrons" },
          { id: "d", label: "Patronage died out after the Renaissance" },
        ],
        correctChoiceId: "b",
        explanation: "From popes to markets to modern galleries and states, the forms of patronage change but the truth holds: someone funds and validates art, and that shapes what gets made and celebrated.",
      },
    ],
    sources: [
      { label: "Smarthistory: patronage and the art market", note: "Essays on commissioning, contracts and the systems behind art.", type: "Reference", url: "https://smarthistory.org/" },
      { label: "Introduction to Art: Design, Context, and Meaning", note: "Open textbook on the social and economic context of art-making.", type: "Textbook", url: "https://oer.galileo.usg.edu/arts-textbooks/3/" },
    ],
  },
  {
    concept: "Perspective as Symbolic Form",
    level: "University",
    summary: "whether linear perspective discovered how we see or invented a convention",
    estimatedMinutes: 9,
    deck: "Linear perspective looks like the moment art stopped being wrong about space. Panofsky's argument is that this is the most successful piece of ideology in the history of images: perspective is a construction resting on assumptions that are false about human vision, and its triumph was to make a specific worldview feel like objectivity.",
    keyTerms: [
      { label: "Symbolic form", value: "Cassirer's term for a cultural scheme through which experience is organised and made meaningful." },
      { label: "Linear perspective", value: "The construction projecting space onto a plane from a single fixed viewpoint via a vanishing point." },
      { label: "The naturalness claim", value: "The assertion that perspective simply reproduces how the eye sees — which Panofsky denies." },
      { label: "The homogeneous space assumption", value: "Perspective's premise that space is infinite, continuous and uniform in all directions." },
    ],
    sections: [
      {
        heading: "The claim that perspective is a construction",
        body: [
          `Erwin Panofsky's 1927 essay makes an argument that still irritates people: linear perspective is not a discovery of how space looks but a symbolic form — a culturally specific scheme for organising visual experience, of the same kind as a language or a myth. Borrowing Cassirer's concept, he treats perspective not as the correct solution to a technical problem but as one construction among possible ones, whose adoption reveals what fifteenth-century Europe took reality to be.`,
          `The provocation matters because perspective does not feel like a convention. Medieval painting, with its hierarchical scaling and inconsistent spaces, looks like people trying to render depth and failing; Brunelleschi and Alberti look like people who finally worked it out. Panofsky's move is to deny the progress narrative. Those earlier spaces were not failed attempts at perspective — they encoded a different account of what mattered, in which a saint is larger because a saint is more important, which is not an error about optics but a statement about reality.`,
        ],
      },
      {
        heading: "Why perspective is false about vision",
        body: [
          `The technical core of the argument is that perspective's assumptions are demonstrably untrue of human seeing. It requires a single, fixed, monocular eye at a determinate point, with the visual field a flat plane. Actual vision is binocular, the eye moves constantly in saccades, the retina is curved, and there is no fixed viewpoint because the head does not stop moving. Panofsky notes that antiquity had recognised the curvature problem — the visual angle, not the flat plane, governs apparent size — and that perspective's flat projection therefore introduces distortions at the periphery that vision does not have.`,
          `So the construction achieves consistency by legislating away the messiness of seeing. Its deeper assumption is stronger still: it presupposes space as homogeneous, infinite, continuous and isotropic — the same in all directions, a neutral container within which objects sit. That is not a fact given in perception; it is a mathematical conception, one that Euclidean geometry supplies and lived experience does not. Perspective inscribes a metaphysics of space into a technique for drawing, and the technique's success made the metaphysics invisible.`,
        ],
      },
      {
        heading: "The worldview it installs",
        body: [
          `What perspective encodes, on this reading, is the emergence of the modern subject. It places a single beholder at the origin of the visual world, and organises everything in the picture relative to that one position — the vanishing point and the viewer's eye are mathematically corresponding points. The world becomes something spread out before an individual observer for their inspection. That is a claim about the relationship between self and world, and it is the claim of the Renaissance and of the scientific revolution that followed.`,
          `Panofsky's phrase for this ambivalence is that perspective represents a "systematic space" that is both an objectification of the subjective and a subjectification of the objective. It makes vision measurable and law-governed, which is an enormous gain and underwrites the whole project of representing nature rigorously. And it simultaneously makes the world radically dependent on where one person stands. Both movements happen in the same construction, which is why it is a symbolic form rather than either a discovery or an error — it does not report the world, it constitutes a way of having one.`,
        ],
      },
      {
        heading: "The dispute it started",
        body: [
          `The essay remains genuinely contested, and the objections are not silly. James Elkins and others argue Panofsky's history is unreliable: the ancient sources he leans on for a "curved" alternative are thinner than he suggests, and the neat correspondence between perspective and worldview is asserted more than shown. Art historians sceptical of the whole approach note that perspective does produce recognisably convincing pictures, which a merely arbitrary convention should not — the technique works, and its working needs explaining.`,
          `The strongest defence concedes that and reframes it. Perspective is not arbitrary; it is a good approximation under specific conditions — a static monocular viewer, a limited visual angle, a flat surface. What Panofsky targets is not its usefulness but its promotion from useful approximation to the truth about space, and the accompanying dismissal of every other pictorial system as primitive. That promotion is ideological, and it happened. Whether or not the historical detail holds, the essay achieved something durable: it made it impossible to treat perspective as the neutral default from which other traditions deviate.`,
        ],
      },
      {
        heading: "Why your camera lies convincingly",
        body: [
          `Photography inherited perspective wholesale — a lens is a perspective machine — which is why a photograph feels like evidence rather than a construction. But you already know it distorts: the wide-angle shot that makes a room look vast, the telephoto that flattens a face into something more flattering, the way a phone camera makes your nose look wrong at arm's length. None of those is the camera failing; they are the same fixed-viewpoint geometry Panofsky described, doing exactly what it does. The habit worth having is to notice that images which feel objective are the ones whose conventions you have most thoroughly internalised — and that the sensation of transparency is not evidence of neutrality but of familiarity.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What does calling perspective a 'symbolic form' assert?",
        choices: [
          { id: "a", label: "A culturally specific scheme for organising experience" },
          { id: "b", label: "It uses symbols whose meanings must be learned before pictures can be read" },
          { id: "c", label: "It represents abstract concepts rather than physical spatial relationships" },
          { id: "d", label: "It was adopted for symbolic religious reasons rather than practical ones" },
        ],
        correctChoiceId: "a",
        explanation: "Borrowing Cassirer, Panofsky treats perspective as one construction among possible ones rather than the correct solution to a technical problem — and its adoption reveals what fifteenth-century Europe took reality to be.",
      },
      {
        dimension: "reasoning",
        prompt: "On what grounds is perspective false about human vision?",
        choices: [
          { id: "a", label: "It assumes one fixed eye, though vision is binocular and mobile" },
          { id: "b", label: "It cannot represent objects at distances beyond the vanishing point" },
          { id: "c", label: "It reproduces colour inaccurately at the edges of the visual field" },
          { id: "d", label: "It assumes viewers know the dimensions of objects before seeing them" },
        ],
        correctChoiceId: "a",
        explanation: "The construction legislates away the messiness of seeing: no fixed viewpoint exists because the head moves, the retina is curved, and the flat projection introduces peripheral distortions that vision does not have.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does Panofsky reject the reading of medieval space as failed perspective?",
        choices: [
          { id: "a", label: "Scaling by rank encodes importance, not an optical error" },
          { id: "b", label: "Medieval painters demonstrably knew perspective and chose to conceal it" },
          { id: "c", label: "Medieval pictures were not intended to represent physical space at all" },
          { id: "d", label: "The surviving works are too damaged to assess their spatial construction" },
        ],
        correctChoiceId: "a",
        explanation: "A saint is larger because a saint is more important. That is a different account of what reality consists of, not a botched attempt at depth — which is why the progress narrative from failure to solution misdescribes what happened.",
      },
      {
        dimension: "reasoning",
        prompt: "What worldview does perspective install, on Panofsky's account?",
        choices: [
          { id: "a", label: "A single beholder, with the world laid out for one observer" },
          { id: "b", label: "A divinely ordered cosmos in which each object occupies its proper station" },
          { id: "c", label: "A collective viewpoint representing the shared perception of a community" },
          { id: "d", label: "A world of discrete objects unrelated to any observing position" },
        ],
        correctChoiceId: "a",
        explanation: "Vanishing point and viewer's eye are mathematically corresponding points, organising everything relative to one position. That is a claim about the relation of self to world — the claim of the Renaissance and the science that followed.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the strongest form of the defence against Panofsky's critics?",
        choices: [
          { id: "a", label: "Perspective approximates well; promoting it to truth is the ideology" },
          { id: "b", label: "Perspective is wholly arbitrary, and its apparent convincingness is learned entirely" },
          { id: "c", label: "The historical inaccuracies in the essay are minor and do not affect the argument" },
          { id: "d", label: "Perspective's technical effectiveness proves it captures the structure of vision" },
        ],
        correctChoiceId: "a",
        explanation: "It works for a static monocular viewer at a limited angle, and its working needs explaining. The target is its elevation from useful approximation to the truth about space, and the dismissal of other pictorial systems as primitive.",
      },
    ],
    sources: [
      { label: "Panofsky, Perspective as Symbolic Form (overview)", note: "Reference on the essay, Cassirer's symbolic forms and the debate.", type: "Reference", url: "https://en.wikipedia.org/wiki/Perspective_as_Symbolic_Form" },
      { label: "Perspective (graphical) (overview)", note: "Reference on the construction, its geometry and its history.", type: "Reference", url: "https://en.wikipedia.org/wiki/Perspective_(graphical)" },
    ],
  },
  {
    concept: "The Renaissance",
    level: "A-level",
    summary: "humanism, classical revival and changing artist status",
    estimatedMinutes: 8,
    deck: "The Renaissance was not just a burst of great paintings. It was a change in how Europeans saw the world, the past and themselves — reviving antiquity, placing the human being at the centre, and, for the first time, treating the artist as a celebrated genius rather than an anonymous craftsman.",
    keyTerms: [
      { label: "Humanism", value: "The intellectual movement centring human potential, reason and worldly life, drawing on classical texts." },
      { label: "Classical revival", value: "The rediscovery and imitation of the art, architecture and ideas of ancient Greece and Rome." },
      { label: "Naturalism", value: "The pursuit of convincing, observed representation of the human body and the world." },
      { label: "The artist-genius", value: "The new idea of the artist as an individual creative talent, not a mere tradesman." },
    ],
    sections: [
      {
        heading: "A rebirth of antiquity",
        body: [
          `"Renaissance" means rebirth, and the movement, beginning in Italy in the 1300s and flourishing through the 1500s, saw itself as reviving the glories of ancient Greece and Rome after what it dismissively called the "middle" ages. Scholars rediscovered classical texts; architects studied Roman ruins; artists looked to antique sculpture for the ideal human form. The past became a model to emulate rather than merely a period that had ended.`,
          `This classical revival reshaped art's ambitions. From ancient sculpture, artists relearned how to render the body convincingly — its anatomy, weight and movement. Buildings adopted Roman columns, arches and proportions. The result was a new visual language of balance, harmony and idealised naturalism, aiming to match or surpass the ancients rather than to serve only medieval devotional conventions.`,
        ],
      },
      {
        heading: "The human measure",
        body: [
          `The intellectual engine of the Renaissance was humanism: a movement that emphasised human potential, reason, and the value of worldly life and learning, inspired by classical philosophy. Where medieval thought often focused on the divine and the afterlife, humanism turned attention to what human beings could achieve, understand and create here on earth. It did not reject religion, but it placed the human being nearer the centre of the picture.`,
          `You can see humanism directly in the art. Figures became individuals with real bodies, emotions and presence, set in believable space (aided by the new linear perspective). Portraiture flourished as worldly individuals wanted to be recorded. Even religious scenes grew more human — Madonnas as tender mothers, saints as people. The dignity and capability of the human being became a central artistic theme, mirroring the humanist worldview.`,
        ],
      },
      {
        heading: "From craftsman to genius",
        body: [
          `One of the Renaissance's most lasting inventions was a new idea of the artist. In the medieval period, painters and sculptors were largely anonymous craftsmen, organised in guilds and ranked with other skilled tradesmen. Over the Renaissance, the leading artists rose to become celebrated individuals, praised for their unique genius. Michelangelo was called "il Divino", the divine one; Leonardo da Vinci became the very model of the wide-ranging "Renaissance man".`,
          `This shift was recorded and promoted by Giorgio Vasari, whose Lives of the Artists (1550) told the stories of great artists as heroic individuals with distinctive personalities and talents — effectively inventing art history and the artist's biography. Works began to be signed; artists sought fame and courted patrons as valued talents rather than hired hands. The modern notion that art expresses an individual creative genius largely begins here.`,
        ],
      },
      {
        heading: "Why it still matters",
        body: [
          `The Renaissance produced some of the most famous art ever made — Leonardo's Mona Lisa and Last Supper, Michelangelo's David and Sistine ceiling, Raphael's harmonious compositions — but its deeper importance is the shift in outlook it embodies. The revival of antiquity, the humanist confidence in reason and observation, the new status of the individual: these fed into the wider transformations of the coming centuries.`,
          `It is worth remembering the limits, too. The "rebirth" narrative was partly the Renaissance flattering itself and unfairly dismissing the achievements of the Middle Ages; the period's benefits were unevenly shared; and much of its glory rested on the patronage of the powerful. But as a turning point in how Europeans pictured the world and the human place in it, the Renaissance genuinely reset the terms — and we still work within many of them.`,
        ],
      },
      {
        heading: "The genius myth you inherited",
        body: [
          `The Renaissance shaped ideas you hold without noticing. Every time you treat an artist, musician or designer as a special creative genius whose signature and personal vision give a work its value, you are using a Renaissance invention — the elevation of the maker from anonymous craftsman to celebrated individual. The premium on originality, the fascination with the artist's biography, the signed and authenticated work: all descend from Vasari's heroic Lives. Even the phrase "Renaissance man", for someone brilliant across many fields, keeps the period's ideal alive. When you argue about whether something is "real art" because of who made it, you are still inside a debate the Renaissance opened.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What does the term 'Renaissance' mean, and what did the movement see itself as doing?",
        choices: [
          { id: "a", label: "'Rebirth' — reviving the art of Greece and Rome" },
          { id: "b", label: "'Revolution' — a total break with earlier art" },
          { id: "c", label: "'Reformation' — a reform of the Church" },
          { id: "d", label: "'Realism' — a rejection of the classical past" },
        ],
        correctChoiceId: "a",
        explanation: "Renaissance means rebirth: the movement saw itself as reviving the glories of classical antiquity after the 'middle' ages, taking the ancient past as a model to emulate.",
      },
      {
        dimension: "depth",
        prompt: "What is humanism, the intellectual engine of the Renaissance?",
        choices: [
          { id: "a", label: "A wholesale rejection of all learning" },
          { id: "b", label: "Prizing human reason and worldly life, drawn from the classics" },
          { id: "c", label: "The revived worship of the ancient gods" },
          { id: "d", label: "A style devoted only to landscape painting" },
        ],
        correctChoiceId: "b",
        explanation: "Humanism stressed human potential, reason and the value of worldly life and learning, drawing on classical philosophy — turning attention to what people could achieve on earth without rejecting religion.",
      },
      {
        dimension: "reasoning",
        prompt: "How did the status of the artist change during the Renaissance?",
        choices: [
          { id: "a", label: "Artists were reduced to anonymous guild craftsmen" },
          { id: "b", label: "Artists rose from craftsmen to celebrated geniuses" },
          { id: "c", label: "Artists were forbidden to sign their work" },
          { id: "d", label: "Artists forfeited all their social standing" },
        ],
        correctChoiceId: "b",
        explanation: "Over the Renaissance the best artists became famous individuals praised for unique genius — Michelangelo 'il Divino', Leonardo the model 'Renaissance man' — a reversal of their earlier craftsman status.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is Vasari's Lives of the Artists significant?",
        choices: [
          { id: "a", label: "It cast artists as heroes, inventing art history" },
          { id: "b", label: "It served as a manual for mixing paint" },
          { id: "c", label: "It insisted artists should stay anonymous" },
          { id: "d", label: "It set itself against the classical revival" },
        ],
        correctChoiceId: "a",
        explanation: "Vasari's 1550 Lives narrated great artists as heroic individuals with distinctive talents, promoting the idea of the artist-genius and founding the tradition of art history and biography.",
      },
      {
        dimension: "depth",
        prompt: "What is a fair criticism of the Renaissance 'rebirth' narrative?",
        choices: [
          { id: "a", label: "It dismissed the Middle Ages and flattered itself" },
          { id: "b", label: "That it produced no art of any importance" },
          { id: "c", label: "That it overlooked ancient Greece and Rome" },
          { id: "d", label: "That it attracted no wealthy patrons at all" },
        ],
        correctChoiceId: "a",
        explanation: "The 'rebirth' story was partly self-flattery that unfairly dismissed medieval achievements, its benefits were unevenly shared, and much of its glory rested on powerful patrons — even as it genuinely reset how Europeans pictured the world.",
      },
    ],
    sources: [
      { label: "Smarthistory: the Renaissance", note: "Essays on humanism, classical revival and Renaissance masters.", type: "Reference", url: "https://smarthistory.org/" },
      { label: "Giorgio Vasari, Lives of the Artists", note: "The 1550 biographies that shaped the idea of the artist-genius.", type: "Primary", url: "https://en.wikipedia.org/wiki/Lives_of_the_Most_Excellent_Painters,_Sculptors,_and_Architects" },
    ],
  },
  {
    concept: "Modernism",
    level: "University",
    summary: "experimentation after industrialisation, photography and social rupture",
    estimatedMinutes: 9,
    deck: "When a machine could suddenly capture a perfect likeness in seconds, what was left for painting to do? Modernism was art's radical answer to a world remade by industry, the camera and upheaval — abandoning the age-old goal of imitating reality to explore what art itself could be.",
    keyTerms: [
      { label: "Modernism", value: "The wave of experimental art from the later 1800s that broke with tradition and realism." },
      { label: "Avant-garde", value: "The advanced artists pushing radical new forms ahead of mainstream taste." },
      { label: "Abstraction", value: "Art that departs from depicting recognisable reality, up to pure form and colour." },
      { label: "'Make it new'", value: "Ezra Pound's slogan capturing modernism's drive for originality and rupture." },
    ],
    sections: [
      {
        heading: "The world that broke the old art",
        body: [
          `Modernism was art's response to a world transformed. From the mid-1800s, industrialisation, the growth of cities, new science, and social upheaval overturned settled ways of life. And in 1839 a specific shock arrived: photography. A machine could now produce a detailed, accurate likeness in an instant — precisely the task painting had spent centuries perfecting. If a camera could capture appearances, what was painting for?`,
          `Modernist artists answered by abandoning imitation as the goal. If reproducing appearances was no longer painting's unique job, then painting could explore what only painting could do: colour, form, the flatness of the canvas, the act of seeing itself, the inner world, pure feeling. The result, from roughly the 1860s to the mid-1900s, was an explosion of restless experimentation that repeatedly broke the rules of the past.`,
        ],
      },
      {
        heading: "Breaking with representation",
        body: [
          `The break unfolded in stages. Édouard Manet unsettled audiences by flattening space and flaunting the brushwork. The Impressionists — Monet, Renoir — chased fleeting light and colour rather than precise detail, dissolving solid form into visible strokes. Cézanne then analysed the underlying structure of what he saw, treating nature in terms of geometric solidity, and pointed the way beyond appearances altogether.`,
          `From there the pace accelerated. Picasso and Braque's Cubism (from around 1907) shattered the single viewpoint, showing objects from many angles at once on a near-flat surface. Then came full abstraction: Kandinsky, Mondrian and others made paintings of pure colour, line and shape that referred to nothing in the visible world at all. Painting had travelled from a window onto reality to an object in its own right, obeying its own laws.`,
        ],
      },
      {
        heading: "Abstraction as argument",
        body: [
          `To eyes trained on realism, abstract art can look like a failure or a fraud — a child could do it, the cliché goes. Modernism asks you to see it differently: as a deliberate argument, not an inability to draw (Picasso and Mondrian could draw superbly). Abstraction proposes that a painting need not be a picture of something else; it can be a direct arrangement of colour and form that produces meaning and feeling on its own terms.`,
          `The influential American critic Clement Greenberg gave this a theory: each art should purify itself down to what is unique to its own medium. For painting, that essence was flatness — so modern painting rightly abandoned the illusion of depth and embraced the flat surface. Whether or not you accept Greenberg's specific argument, the point stands: modernist abstraction is a considered position about what art is, and reading it requires meeting that argument rather than demanding a recognisable picture.`,
        ],
      },
      {
        heading: "The drive to make it new",
        body: [
          `Uniting the movements was a shared ethos, captured by the poet Ezra Pound's command to "make it new". The modernist prized originality, rupture and progress; each avant-garde group sought to overturn what came before and push art into unexplored territory. Manifestos proliferated; tradition was something to be broken, not obeyed. This restless forward drive is itself a defining feature of the modern outlook, not just of its art.`,
          `That ethos had costs as well as triumphs. The relentless demand for the new could tip into obscurity, elitism, or a treadmill of shock. By the later 20th century, postmodernism would react against modernism's earnest faith in progress and purity, embracing irony, mixture and the past that modernism had spurned. But the modernist revolution had permanently expanded what art was allowed to be — and that expansion did not reverse.`,
        ],
      },
      {
        heading: "Why the gallery still baffles",
        body: [
          `The next time you stand before a canvas of pure colour or a jumble of fractured shapes and think "my kid could do that", you are meeting modernism's central provocation. The work is not trying to be a good picture of something; it is arguing that art need not be a picture at all. Photography freed painting from mere likeness, and everything from abstract art to modern graphic design, album covers and minimalist product design flows from that liberation. You do not have to like it — but knowing why it abandoned realism turns bafflement into an argument you can actually have, rather than a joke you dismiss.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "reasoning",
        prompt: "How did the invention of photography help drive modernism?",
        choices: [
          { id: "a", label: "It made producing paintings far cheaper" },
          { id: "b", label: "Machine likeness freed painting from imitation" },
          { id: "c", label: "It forced every artist to take up photography" },
          { id: "d", label: "It had no real effect on painting at all" },
        ],
        correctChoiceId: "b",
        explanation: "Once a camera could capture appearances instantly, imitation was no longer painting's unique task — so modernists turned to colour, form, flatness and feeling, things only painting could pursue.",
      },
      {
        dimension: "depth",
        prompt: "What is 'abstraction' in modern art?",
        choices: [
          { id: "a", label: "Extremely detailed, near-photographic realism" },
          { id: "b", label: "Art leaving recognisable reality for pure form" },
          { id: "c", label: "Art made strictly in black and white" },
          { id: "d", label: "Faithfully copying ancient sculpture" },
        ],
        correctChoiceId: "b",
        explanation: "Abstraction moves away from representing the visible world; in its pure form (Kandinsky, Mondrian) a painting refers to nothing recognisable, becoming an arrangement of colour, line and shape in its own right.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does modernism ask us to see abstraction as 'an argument, not an inability to draw'?",
        choices: [
          { id: "a", label: "Picasso and Mondrian drew superbly and chose it" },
          { id: "b", label: "Because abstraction is always unintentional" },
          { id: "c", label: "Because drawing skill is a myth anyway" },
          { id: "d", label: "Because abstraction merely copies photographs" },
        ],
        correctChoiceId: "a",
        explanation: "Masters of realism chose abstraction on purpose, proposing that a painting need not picture something else but can produce meaning through colour and form directly — a considered position, not a failure.",
      },
      {
        dimension: "reasoning",
        prompt: "What did the critic Clement Greenberg argue each art should do?",
        choices: [
          { id: "a", label: "Go back to imitating the natural world" },
          { id: "b", label: "Purify to what is unique to its medium — flatness" },
          { id: "c", label: "Fuse all the separate media into one" },
          { id: "d", label: "Abandon the use of colour entirely" },
        ],
        correctChoiceId: "b",
        explanation: "Greenberg held that each art should reduce to its own essence; painting's essence was flatness, so modern painting rightly abandoned the illusion of depth for the flat surface.",
      },
      {
        dimension: "depth",
        prompt: "What ethos, captured by Ezra Pound's 'make it new', united the modernist movements?",
        choices: [
          { id: "a", label: "Prizing originality and rupture with tradition" },
          { id: "b", label: "A drive to preserve every past style unchanged" },
          { id: "c", label: "A firm rejection of all experiment" },
          { id: "d", label: "A focus solely on commercial gain" },
        ],
        correctChoiceId: "a",
        explanation: "Modernism prized originality, rupture and progress; each avant-garde sought to overturn what came before — a restless forward drive that is itself a hallmark of the modern outlook.",
      },
    ],
    sources: [
      { label: "Smarthistory: modernism and the avant-garde", note: "Essays from Manet and Impressionism through Cubism and abstraction.", type: "Reference", url: "https://smarthistory.org/" },
      { label: "Clement Greenberg, 'Modernist Painting'", note: "The medium-purity argument for abstraction and flatness.", type: "Reference", url: "https://en.wikipedia.org/wiki/Modernism" },
    ],
  },
  {
    concept: "Provenance",
    level: "University",
    summary: "ownership history, authenticity, collecting and restitution",
    estimatedMinutes: 9,
    deck: "Two identical-looking paintings can differ in value by millions, and the difference is not on the canvas — it is in the paperwork. Provenance, the documented history of an artwork's ownership, decides whether a work is a masterpiece or a fake, a proud acquisition or stolen property.",
    keyTerms: [
      { label: "Provenance", value: "The traced record of an artwork's ownership and location over time." },
      { label: "Authentication", value: "Establishing that a work is genuinely by the artist it is attributed to." },
      { label: "Restitution", value: "Returning looted or wrongfully taken art to its rightful owners or origin." },
      { label: "Due diligence", value: "The checks a buyer or museum should make on an object's history before acquiring it." },
    ],
    sections: [
      {
        heading: "The history that travels with the object",
        body: [
          `Provenance is the documented chain of an artwork's ownership — where it has been and whose hands it has passed through, ideally from the artist's studio to the present day. It sounds like dry bookkeeping, but it is one of the most consequential facts about any artwork, because a great deal of an object's value, meaning and legitimacy depends not on how it looks but on where it has been.`,
          `A well-documented provenance links a work securely to its maker and its past. Gaps in that record — years where nobody knows where a piece was — raise immediate questions: Is it genuine? Was it stolen? Is it what it claims to be? For serious collectors, museums and courts, the paper trail can matter as much as the paint.`,
        ],
      },
      {
        heading: "Real or fake",
        body: [
          `Provenance is central to authentication — establishing that a work is truly by the artist named. A convincing chain of ownership stretching back to the artist strongly supports authenticity; a suspicious or invented one is a red flag for forgery. Forgers know this, which is why the most dangerous fakes come not just with faked paint but with faked paperwork — fabricated receipts, invented former owners, forged exhibition records.`,
          `The stakes are enormous. The 20th-century forger Han van Meegeren fooled experts with fake Vermeers partly by constructing plausible histories for them; more recently, the Knoedler gallery scandal saw tens of millions paid for forged modernist paintings supported by an entirely fabricated provenance. When authentication fails, fortunes and reputations collapse — which is why provenance research, combined with scientific analysis, is a serious forensic discipline, not a formality.`,
        ],
      },
      {
        heading: "Looted art and the duty to return",
        body: [
          `Provenance carries a moral charge as well as a financial one, because ownership history can reveal theft. The most systematic case is art looted by the Nazis from Jewish families and others across Europe; decades later, provenance research is still used to identify these works in museums and collections and return them to the heirs of their rightful owners. A gap in a painting's history covering the years 1933–45 is now treated as a serious warning sign demanding investigation.`,
          `The same logic extends to objects taken during colonial rule. Many of the treasures in Western museums — the Benin Bronzes seized by British forces in 1897 are a famous example — were acquired through conquest, looting or coercion, and their countries of origin increasingly demand their return. These restitution debates turn on provenance: tracing how an object left its home reveals whether it was bought, given, or taken by force, and that history shapes the argument over where it belongs today.`,
        ],
      },
      {
        heading: "The buyer's responsibility",
        body: [
          `Because provenance can hide theft or forgery, everyone who acquires art is expected to perform due diligence — checking an object's history before buying or displaying it. A museum or collector who ignores an obvious gap, or fails to ask how a suspiciously cheap antiquity left its country, can end up holding stolen goods and facing legal and reputational disaster. Reputable institutions now research provenance carefully and publish it.`,
          `This has changed how the art world operates. Auction houses, dealers and museums increasingly document and disclose ownership history, and international agreements discourage trade in objects without clean provenance, partly to combat the looting of archaeological sites that funds crime and even conflict. Provenance has thus grown from a collector's curiosity into an ethical and legal obligation: knowing where a thing came from is now part of the responsibility of owning it.`,
        ],
      },
      {
        heading: "The receipt that makes it real",
        body: [
          `You rely on provenance more than you might think. The value of a vintage watch, a signed first edition, a footballer's shirt or a piece of memorabilia depends almost entirely on being able to prove its history — who owned it, that it is genuine, that it was not stolen. A second-hand marketplace lives or dies on trust in an item's past. When you check an eBay seller's history, ask for proof a bike is not stolen, or doubt a "designer" bag with no receipt, you are doing exactly what a museum does before acquiring a masterpiece: asking not just what the object is, but where it has been.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is provenance?",
        choices: [
          { id: "a", label: "The particular style in which a work is painted" },
          { id: "b", label: "The recorded history of a work's ownership" },
          { id: "c", label: "The current auction price of a work" },
          { id: "d", label: "The physical materials used to make a work" },
        ],
        correctChoiceId: "b",
        explanation: "Provenance is the traced chain of ownership — ideally from the artist's studio to the present — and much of an object's value, meaning and legitimacy depends on it.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is provenance central to detecting forgeries?",
        choices: [
          { id: "a", label: "A convincing ownership chain lends authenticity, so forgers fake it" },
          { id: "b", label: "Because forgeries always betray themselves in the image" },
          { id: "c", label: "Because provenance is irrelevant to authenticity" },
          { id: "d", label: "Because forgers never trouble with ownership records" },
        ],
        correctChoiceId: "a",
        explanation: "A credible chain back to the artist supports authenticity, so the most dangerous fakes come with fabricated histories — as in the Knoedler scandal, where forged paintings had entirely invented provenance.",
      },
      {
        dimension: "depth",
        prompt: "Why is a gap in a painting's history covering 1933–45 treated as a warning sign?",
        choices: [
          { id: "a", label: "Because few paintings were made in those years" },
          { id: "b", label: "It may mean the work was Nazi loot owing return" },
          { id: "c", label: "Because provenance counts only after 1945" },
          { id: "d", label: "Because all art from wartime is forged" },
        ],
        correctChoiceId: "b",
        explanation: "Provenance research uses such gaps to identify Nazi-looted art in collections and return it to the heirs of its rightful owners — so an unexplained wartime gap demands investigation.",
      },
      {
        dimension: "reasoning",
        prompt: "How does provenance underpin restitution debates over objects like the Benin Bronzes?",
        choices: [
          { id: "a", label: "It bears no relevance to where objects belong" },
          { id: "b", label: "How it left home shows if it was bought, given or seized" },
          { id: "c", label: "It shows museums always acquired objects fairly" },
          { id: "d", label: "It applies to paintings but never to artefacts" },
        ],
        correctChoiceId: "b",
        explanation: "Restitution arguments turn on ownership history: provenance showing an object was seized by conquest or coercion — like the Bronzes taken in 1897 — strengthens the case that it should be returned.",
      },
      {
        dimension: "depth",
        prompt: "What is 'due diligence' in acquiring art?",
        choices: [
          { id: "a", label: "Checking a work's history before buying it" },
          { id: "b", label: "Paying the highest price the market allows" },
          { id: "c", label: "Thoroughly cleaning the artwork before sale" },
          { id: "d", label: "Deliberately ignoring gaps in the record" },
        ],
        correctChoiceId: "a",
        explanation: "Due diligence means researching provenance before acquiring; ignoring an obvious gap can leave a buyer holding stolen property and facing legal and reputational disaster, so it is now an ethical and legal obligation.",
      },
    ],
    sources: [
      { label: "Provenance (overview)", note: "Reference on ownership history, authentication and restitution.", type: "Reference", url: "https://en.wikipedia.org/wiki/Provenance" },
      { label: "Smarthistory: looting, restitution and museums", note: "Essays on contested objects and the ethics of ownership.", type: "Reference", url: "https://smarthistory.org/" },
    ],
  },
  {
    concept: "Medium Specificity",
    level: "A-level",
    summary: "how material and technique shape meaning",
    estimatedMinutes: 8,
    deck: "A subject carved in marble, cast in bronze, painted in oil or filmed says four different things, even if the subject is the same. Medium specificity is the idea that what art is made of is not a neutral container for meaning but a shaper of it — that the material speaks.",
    keyTerms: [
      { label: "Medium", value: "The material and technique used to make an artwork — oil, marble, bronze, fresco, film, pixels." },
      { label: "Affordances", value: "What a given medium makes easy or possible, and what it makes difficult." },
      { label: "Medium specificity", value: "Greenberg's idea that each art should explore what is unique to its own material." },
      { label: "Fresco vs oil", value: "Fast wall-painting into wet plaster versus slow, blendable painting in oil." },
    ],
    sections: [
      {
        heading: "The material is not neutral",
        body: [
          `We often talk about a work's subject as if the material it is made from were just a delivery method — as though a portrait in oil, a portrait in marble and a photographic portrait were simply three ways of transmitting the same content. Medium specificity is the insistence that this is wrong. The medium — the physical material and the technique used to work it — shapes what an artwork can do, how it feels, and what it means. The material is part of the message.`,
          `Every medium has "affordances": things it makes easy, hard, or impossible. Marble can hold crisp detail and lasts millennia but cannot show colour and resists sudden gesture. Bronze can capture dynamic movement and thin, reaching forms that stone would snap. Oil paint dries slowly, allowing subtle blending and glowing depth; fresco dries fast, demanding speed and boldness. Choose a different medium and you change not just the look but the range of what is possible.`,
        ],
      },
      {
        heading: "Two ways to paint a wall",
        body: [
          `Compare fresco and oil, two great painting techniques. In fresco, pigment is applied onto wet plaster, so it must be done quickly, section by section, before the plaster dries, with little room for correction. This favours confident, monumental designs — think of Michelangelo racing across the Sistine ceiling. The result is matte, integral to the wall, and enormously durable, but it cannot easily achieve delicate blending or afterthoughts.`,
          `Oil paint, which came to dominate from the 1400s, behaves oppositely. It dries slowly, letting an artist blend colours seamlessly, build luminous layers of translucent glaze, rework passages, and render soft transitions of light and texture impossible in fresco. Jan van Eyck's jewel-like precision and later the smoky sfumato of Leonardo depended on oil's particular chemistry. The same scene rendered in fresco and in oil would not just look different; the technique steers what the artist can attempt.`,
        ],
      },
      {
        heading: "The theory of purity",
        body: [
          `In the 20th century the idea of medium specificity became an explicit doctrine, especially through the critic Clement Greenberg. He argued that modern art advances by having each medium explore and refine what is unique to itself, discarding what it borrows from other arts. For painting, the defining property was the flatness of the canvas; so, he argued, modern painting rightly abandoned the illusion of three-dimensional depth and embraced its own flat, coloured surface.`,
          `This was a powerful and influential position — it helped make sense of abstract painting as a logical self-purification rather than a failure. It was also contested. Later artists deliberately defied it, mixing media, making installations and conceptual works where the idea mattered more than any single material. But even in rejecting Greenberg's strict doctrine, they were still reckoning with his core insight: that material is meaningful, and that choosing or crossing media is an artistic decision with consequences.`,
        ],
      },
      {
        heading: "New media, old lesson",
        body: [
          `Each new medium extends the point. Photography introduced mechanical reproduction, capturing a specific instant with a truth-claim painting never had — and raising questions about art, copies and originality that the critic Walter Benjamin famously explored. Film added time, motion and montage. Digital and pixel-based media brought infinite copying, interactivity and manipulability, unsettling ideas of the unique original once more.`,
          `In every case, the medium is not a neutral vessel but a set of possibilities and constraints that shape what can be said and how it is experienced. To read an artwork well, then, you must ask not only what it depicts but what it is made of and why — because a photograph, a bronze, an oil painting and a video of the same thing are genuinely different works, saying different things through their different materials.`,
        ],
      },
      {
        heading: "Why the format changes the feeling",
        body: [
          `You feel medium specificity whenever the same content hits differently in a different form. A song heard live, on vinyl, and as a compressed stream is the "same" song, yet each carries a distinct texture and feeling. A film shot on grainy 35mm feels unlike the same story shot on crisp digital. A handwritten letter says something a text message cannot, even with identical words. A printed photograph on your wall means more than the same image lost in a phone's camera roll. In each case the material is doing part of the talking — exactly the insight that medium specificity brings to art.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What does 'medium specificity' claim?",
        choices: [
          { id: "a", label: "That the material is a neutral vessel with no effect on meaning" },
          { id: "b", label: "Material and technique shape what a work can do and mean" },
          { id: "c", label: "That a work's subject is all that matters" },
          { id: "d", label: "That every medium is wholly interchangeable" },
        ],
        correctChoiceId: "b",
        explanation: "Medium specificity insists the physical material and technique are not a neutral delivery method but shape the work's possibilities, feel and meaning — the material is part of the message.",
      },
      {
        dimension: "depth",
        prompt: "What are a medium's 'affordances'?",
        choices: [
          { id: "a", label: "How much the raw materials happen to cost" },
          { id: "b", label: "What the medium makes easy, and what it resists" },
          { id: "c", label: "The fixed size an artwork is obliged to be" },
          { id: "d", label: "The number of colours a work may use" },
        ],
        correctChoiceId: "b",
        explanation: "Affordances are what a medium enables and constrains — marble holds detail but no colour; bronze allows dynamic reaching forms; oil allows slow blending. Each choice changes what is possible.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does oil paint allow effects that fresco cannot?",
        choices: [
          { id: "a", label: "Oil dries slowly, allowing blending and soft transitions" },
          { id: "b", label: "Because oil sets on wet plaster within hours" },
          { id: "c", label: "Because oil paint cannot hold colour well" },
          { id: "d", label: "Because oil can only be worked on walls" },
        ],
        correctChoiceId: "a",
        explanation: "Oil's slow drying lets artists blend seamlessly, build luminous glazes and rework passages — enabling Van Eyck's precision and Leonardo's sfumato — whereas fresco's fast-drying plaster demands speed and boldness.",
      },
      {
        dimension: "reasoning",
        prompt: "How did Greenberg apply medium specificity to modern painting?",
        choices: [
          { id: "a", label: "He held that painting should imitate sculpture" },
          { id: "b", label: "Painting should embrace flatness and drop depth" },
          { id: "c", label: "He held that all media should merge into one" },
          { id: "d", label: "He held that painting should return to fresco" },
        ],
        correctChoiceId: "b",
        explanation: "Greenberg held each medium should refine what is unique to itself; painting's essence was the flat canvas, so modern painting rightly abandoned three-dimensional illusion — reframing abstraction as self-purification.",
      },
      {
        dimension: "depth",
        prompt: "What question does medium specificity add to interpreting an artwork?",
        choices: [
          { id: "a", label: "Simply what the work happens to depict" },
          { id: "b", label: "Not just what it depicts, but its material" },
          { id: "c", label: "Simply who has owned it before" },
          { id: "d", label: "Simply how much it is worth today" },
        ],
        correctChoiceId: "b",
        explanation: "Because a photograph, bronze, oil painting and video of the same subject say different things through their materials, reading a work well means asking what it is made of and why, not just what it shows.",
      },
    ],
    sources: [
      { label: "Clement Greenberg, 'Modernist Painting'", note: "The classic statement of medium specificity and purity.", type: "Reference", url: "https://en.wikipedia.org/wiki/Medium_specificity" },
      { label: "Introduction to Art: Design, Context, and Meaning", note: "Open textbook on media, materials and techniques of art.", type: "Textbook", url: "https://oer.galileo.usg.edu/arts-textbooks/3/" },
    ],
  },
  {
    concept: "Museums and Power",
    level: "University",
    summary: "display, classification and authority in public collections",
    estimatedMinutes: 9,
    deck: "A museum feels like a neutral window onto art and history. It is not. Every choice of what to collect, how to label it, and where to place it is an exercise of authority — deciding what counts as important, whose story gets told, and what the public learns to value.",
    keyTerms: [
      { label: "The canon", value: "The set of works and artists a culture treats as the most important — shaped, not given." },
      { label: "Framing", value: "How display, labels and arrangement guide the meaning a visitor takes away." },
      { label: "The white cube", value: "The neutral-seeming gallery style that presents art as timeless and above context." },
      { label: "Repatriation", value: "Returning objects to the communities or nations they were taken from." },
    ],
    sections: [
      {
        heading: "The museum is an argument",
        body: [
          `Walk into a great museum and it presents itself as a neutral container: here, simply, is the art and history worth seeing. But a museum is never neutral. Someone decided what to acquire and what to ignore, what to hang in the grand central gallery and what to leave in storage, how to label each object and what story to tell. Every one of those decisions is a claim about what matters — and taken together they form a powerful, if invisible, argument about value, importance and truth.`,
          `Because the public tends to trust museums as authorities, this power is considerable. What a museum displays becomes, in effect, official culture: the art it canonises is treated as great, the history it tells is treated as the history. To think critically about museums is to notice that these authoritative-seeming presentations are the result of choices, made by particular people with particular assumptions, that could have been made differently.`,
        ],
      },
      {
        heading: "Making the canon",
        body: [
          `Museums are central to forming the canon — the body of artists and works a culture treats as supremely important. By collecting, displaying and celebrating some works and not others, museums help decide who becomes a "great master" and who is forgotten. This process has never been neutral: for most of their history, Western museums overwhelmingly canonised the work of white European men, while women artists and those from other cultures were collected less, displayed less, and studied less.`,
          `The consequences compound. An artist in the collection is seen, studied, written about and valued; one left out is invisible, and their absence is read as evidence they were not important — a self-fulfilling loop. Recent decades have seen sustained effort to widen the canon, rediscovering overlooked women artists and giving fuller space to art from around the world. These are not just additions but corrections, revealing how much the old "neutral" canon reflected who held the power to collect and display.`,
        ],
      },
      {
        heading: "How display shapes meaning",
        body: [
          `Beyond what is shown, how it is shown steers meaning. The dominant modern style, the "white cube" — plain white walls, careful lighting, minimal labels, objects isolated in space — presents art as timeless, autonomous and above mere context, encouraging quiet reverence. That neutrality is itself a construction: it strips objects of their original settings and uses, turning a devotional altarpiece or a functional artefact into pure "art" to be contemplated.`,
          `Framing operates through labels, grouping and placement. Calling an object "primitive art" versus "sculpture", placing a culture's sacred objects in a natural-history museum rather than an art museum, arranging galleries to imply one triumphant story of progress — each shapes what visitors conclude. The same object can be presented as a masterpiece, an ethnographic specimen, or stolen loot, depending on the frame. Learning to read museums means noticing the framing and asking who chose it and why.`,
        ],
      },
      {
        heading: "Whose objects, whose story",
        body: [
          `Museums' power is entangled with history's inequalities, most starkly in how many great collections were assembled. Encyclopaedic museums built during the age of empire filled their halls with objects taken through conquest, colonial extraction and unequal exchange. The presence of another culture's treasures in a European or North American museum is often a monument to past domination as much as to curiosity, which is why demands for repatriation — returning objects to their communities of origin — have grown urgent.`,
          `These debates cut to the heart of what museums are for. Defenders argue the great "universal" museum lets the world's heritage be seen and compared in one place; critics reply that this universality was built on plunder and that peoples have a right to their own heritage. Meanwhile museums are rethinking their labels, sharing curatorial authority with source communities, and confronting their own histories. The institution that once presented itself as a neutral temple of culture is being forced to admit it was always also an instrument of power.`,
        ],
      },
      {
        heading: "Read the room next visit",
        body: [
          `On your next museum or gallery visit, look at the choices, not just the objects. Which works get the huge wall and the spotlight, and which are crammed in a corner? Whose art dominates, and who is barely present? What do the labels tell you — and what do they quietly leave out about how an object was acquired? Notice how the hushed white gallery makes you feel you should revere whatever is placed there. You are not just seeing art; you are being taught what to value, by an institution making arguments through arrangement. Seeing those arguments, instead of absorbing them unnoticed, is the whole skill.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "Why is a museum described as 'never neutral'?",
        choices: [
          { id: "a", label: "Its choices of what to show assert what matters" },
          { id: "b", label: "Because museums show everything ever made" },
          { id: "c", label: "Because visitors pay no heed to labels" },
          { id: "d", label: "Because art carries no meaning at all" },
        ],
        correctChoiceId: "a",
        explanation: "Decisions about what to acquire, what to spotlight and how to label form an invisible argument about value and importance — and because the public trusts museums, that argument becomes official culture.",
      },
      {
        dimension: "reasoning",
        prompt: "How do museums help create a self-fulfilling 'canon'?",
        choices: [
          { id: "a", label: "By showing a random selection each day" },
          { id: "b", label: "An artist shown is valued; one omitted vanishes" },
          { id: "c", label: "By declining to collect any art at all" },
          { id: "d", label: "By treating every artist exactly alike" },
        ],
        correctChoiceId: "b",
        explanation: "Collecting and celebrating some artists makes them 'great masters' while excluding others renders them invisible, and their absence is read as proof they did not matter — a compounding loop that long favoured white European men.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is the neutral-looking 'white cube' gallery itself a construction?",
        choices: [
          { id: "a", label: "It strips context, making artefacts pure art" },
          { id: "b", label: "Because plain white walls cost less" },
          { id: "c", label: "Because it shows objects in their first settings" },
          { id: "d", label: "Because it has no bearing on meaning" },
        ],
        correctChoiceId: "a",
        explanation: "The plain white gallery presents art as timeless and above context, but that neutrality is engineered: it removes an object's original use and setting, framing a devotional altarpiece or functional artefact as autonomous 'art'.",
      },
      {
        dimension: "depth",
        prompt: "How can 'framing' change the meaning of the same object?",
        choices: [
          { id: "a", label: "It cannot: an object holds one fixed meaning" },
          { id: "b", label: "Labels can make it a masterpiece, a specimen, or loot" },
          { id: "c", label: "Only the sheer size of the object matters" },
          { id: "d", label: "Framing means nothing but the picture frame" },
        ],
        correctChoiceId: "b",
        explanation: "Calling something 'primitive art' versus 'sculpture', or placing sacred objects in a natural-history rather than art museum, steers what visitors conclude — the same object shifts meaning with the frame.",
      },
      {
        dimension: "reasoning",
        prompt: "What is at the heart of repatriation debates over museum objects?",
        choices: [
          { id: "a", label: "Whether museums built on plunder should return heritage" },
          { id: "b", label: "Whether museums ought to raise their entry fees" },
          { id: "c", label: "Whether works should be cleaned more often" },
          { id: "d", label: "Whether wall labels should be made larger" },
        ],
        correctChoiceId: "a",
        explanation: "Many collections were filled through conquest and colonial extraction; repatriation debates weigh the 'universal museum' ideal against peoples' right to their own heritage, forcing museums to confront their role as instruments of power.",
      },
    ],
    sources: [
      { label: "Smarthistory: museums, collecting and display", note: "Essays on the museum as an institution and its politics.", type: "Reference", url: "https://smarthistory.org/" },
      { label: "The canon and repatriation (overview)", note: "Reference on canon formation, framing and contested collections.", type: "Reference", url: "https://en.wikipedia.org/wiki/Repatriation_(cultural_property)" },
    ],
  },
  {
    concept: "The Gaze",
    level: "University",
    summary: "who a picture assumes is looking, and what that assumption does",
    estimatedMinutes: 9,
    deck: "Every image is made for someone. Berger's insight was that the European nude assumed a specific someone — a male spectator-owner standing outside the frame — and that the woman in the painting is arranged for him while pretending not to know he is there. Once you see the position an image builds for its viewer, you cannot unsee it.",
    keyTerms: [
      { label: "The gaze", value: "The viewing position an image constructs and invites its spectator to occupy." },
      { label: "Spectator-owner", value: "Berger's term for the implied viewer of the nude — male, outside the frame, proprietorial." },
      { label: "Surveyor and surveyed", value: "Berger's account of women internalising the watching position and applying it to themselves." },
      { label: "The male gaze", value: "Mulvey's cinematic formulation, in which the camera adopts a masculine looking position." },
    ],
    sections: [
      {
        heading: "Naked versus nude",
        body: [
          `John Berger's Ways of Seeing turns on a distinction that sounds like pedantry and is not. To be naked is simply to be without clothes. To be a nude is to be seen naked by others and not recognised for oneself — nakedness converted into a display, arranged for a viewer. The European oil-painting nude is not a record of a woman without clothes; it is a woman composed, lit and posed for someone who is not in the picture, and the whole apparatus of the genre exists to serve that person.`,
          `Berger's evidence is the pictures' own logic. The woman's body is turned outward in ways no one alone would adopt; her gaze meets ours, or is averted with a coyness that only makes sense if she knows she is watched; the composition presents her rather than depicts her. Yet the convention requires her to appear unaware, because the fiction that she is not performing is precisely what the spectator wants. She is performing unawareness, and the picture needs both the performance and the denial.`,
        ],
      },
      {
        heading: "The spectator who is not in the frame",
        body: [
          `The crucial figure in Berger's analysis is absent from the canvas. The nude assumes a spectator-owner: male, positioned outside the frame, and proprietorial — the picture is arranged so that everything in it is offered to him. Berger's demonstration is that the paintings' conventions only make sense on this assumption. The mirror handed to Venus, ostensibly showing her vanity, actually turns her face toward us so we can look at her while blaming her for wanting to be looked at. The moral alibi and the arrangement for the viewer are the same device.`,
          `This is why he insists the nude is about property and power rather than desire as such. The paintings were commissioned by men, hung in their houses, and depicted women who belonged, in the picture's logic, to whoever stood in front of it. He contrasts this with the rare exceptions — pictures of a specific loved woman rather than a generic body, where the sitter's particularity resists conversion into display — and the contrast is stark enough to make the general rule visible. The genre's coherence depends on a viewing position, and the position is not neutral.`,
        ],
      },
      {
        heading: "Surveyor and surveyed",
        body: [
          `Berger's most consequential move is to follow the gaze out of the gallery. If a culture consistently positions women as objects of a watching eye, then women learn to watch themselves being watched. His formulation is precise: a woman must continually survey herself, so that she comes to be composed of a surveyor and a surveyed within her — the two constituting her identity as a woman. She is not merely looked at; she carries the looker internally and applies it to herself before anyone else does.`,
          `The famous compression is that men act and women appear; men look at women, and women watch themselves being looked at. This determines not only most relations between men and women but the relation of women to themselves — which is a claim about internalised social structure rather than about individual men, and is the reason the argument survives beyond the specific paintings. It also predicts something checkable: that this self-surveillance should intensify wherever the culture's image-supply intensifies, which is broadly what research on media exposure and self-objectification has found.`,
        ],
      },
      {
        heading: "Mulvey, and the objections",
        body: [
          `Laura Mulvey's 1975 essay took the argument into cinema and made it structural rather than thematic. The camera itself, she argued, adopts a masculine looking position: narrative cinema splits the woman into spectacle and the man into agent, and the audience — of whatever gender — is placed in the masculine position by the apparatus, because that is where the camera stands. Her claim is not that filmmakers intend this but that the conventions of shot, cut and narrative do it regardless.`,
          `The framework has drawn substantial and largely fair criticism. It is heteronormative, assuming a male viewer desiring a female object, and has little to say about queer spectatorship. It treats the audience as passive, ignoring how actively viewers resist, appropriate and read against images. Its psychoanalytic apparatus is unfalsifiable in the way psychoanalysis generally is. Mulvey herself revisited it, and later work on the female gaze and oppositional spectatorship — bell hooks's account of Black women watching against the grain is the sharpest — complicates it considerably. What survives all of that is the core question, which is genuinely portable: for whom is this constructed, and what does occupying that position do to you?`,
        ],
      },
      {
        heading: "The camera you perform for",
        body: [
          `Berger's argument arrived decades before anyone carried a camera constantly, and it reads now as a description of the present. The front-facing camera is the surveyor made literal: you see yourself as the image others will see, in real time, before you post. The angle you know is your good one, the practised expression, the pre-emptive judgement of how a photo will land — that is surveying yourself being surveyed, and Berger's point was that this is a learned social position rather than vanity. It applies well beyond women now, though not evenly. The useful question in front of any image, including your own, is the one he supplies: who is this arranged for, and what does standing where it wants you to stand make you into?`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What distinguishes the nude from the naked in Berger's account?",
        choices: [
          { id: "a", label: "The nude is nakedness converted into a display arranged for a viewer" },
          { id: "b", label: "The nude is painted whereas the naked is photographed or observed directly" },
          { id: "c", label: "The nude depicts an idealised body while the naked shows a particular one" },
          { id: "d", label: "The nude appears in public galleries and the naked in private collections" },
        ],
        correctChoiceId: "a",
        explanation: "To be naked is to be without clothes; to be a nude is to be seen naked by others and not recognised for oneself. The body is composed, lit and posed for someone outside the picture — and the genre exists to serve them.",
      },
      {
        dimension: "reasoning",
        prompt: "Why must the woman in the nude appear unaware she is watched?",
        choices: [
          { id: "a", label: "The spectator wants her unaware, so she performs unawareness" },
          { id: "b", label: "Direct address to the viewer was technically difficult to render convincingly" },
          { id: "c", label: "Church restrictions forbade depicting a subject acknowledging the viewer" },
          { id: "d", label: "Awareness would identify her as a specific person rather than an ideal type" },
        ],
        correctChoiceId: "a",
        explanation: "Her pose only makes sense if she knows she is watched, yet the convention requires her to seem not to. The picture needs both the performance and its denial — which is why the coyness is part of the arrangement, not a departure from it.",
      },
      {
        dimension: "reasoning",
        prompt: "How does the mirror handed to Venus function?",
        choices: [
          { id: "a", label: "It turns her face toward us while blaming her for wanting to be looked at" },
          { id: "b", label: "It demonstrates the painter's technical mastery of reflected surfaces" },
          { id: "c", label: "It conceals part of the body to satisfy contemporary decency conventions" },
          { id: "d", label: "It signals that the scene depicts a private moment rather than a display" },
        ],
        correctChoiceId: "a",
        explanation: "Ostensibly it shows her vanity. Functionally it arranges her face for the spectator while supplying a moral alibi — the arrangement for the viewer and the condemnation of her for being viewable are the same device.",
      },
      {
        dimension: "reasoning",
        prompt: "What does 'surveyor and surveyed' describe?",
        choices: [
          { id: "a", label: "A woman internalising the watcher and applying it to herself" },
          { id: "b", label: "The relationship between the painter and the model during a sitting" },
          { id: "c", label: "The division of a canvas between the depicted subject and its background" },
          { id: "d", label: "The distinction between the patron who commissioned a work and its audience" },
        ],
        correctChoiceId: "a",
        explanation: "She carries the looker internally and applies it before anyone else does — a claim about internalised social structure rather than individual men, which is why the argument survives beyond the specific paintings.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the most substantial criticism of Mulvey's formulation?",
        choices: [
          { id: "a", label: "It is heteronormative and treats audiences as passive" },
          { id: "b", label: "It applies to painting but cannot be extended to moving images" },
          { id: "c", label: "It assumes filmmakers consciously intend the effect she describes" },
          { id: "d", label: "It was contradicted by audience research conducted at the time" },
        ],
        correctChoiceId: "a",
        explanation: "It assumes a male viewer desiring a female object, says little about queer spectatorship, and overlooks how actively viewers resist and appropriate — hooks's account of Black women watching against the grain being the sharpest correction.",
      },
    ],
    sources: [
      { label: "Berger, Ways of Seeing (overview)", note: "Reference on the nude, the spectator-owner and surveyor/surveyed.", type: "Reference", url: "https://en.wikipedia.org/wiki/Ways_of_Seeing" },
      { label: "Male gaze (overview)", note: "Reference on Mulvey's cinematic formulation and its critics.", type: "Reference", url: "https://en.wikipedia.org/wiki/Male_gaze" },
    ],
  },
];

export const artHistoryLessons = buildAuthoredLessons("art-history", artHistory);
