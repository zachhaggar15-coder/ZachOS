import { buildAuthoredLessons, type AuthoredLesson } from "./types";

// Ten hand-written Art History lessons: researched, concept-specific prose with
// named artists, works and theorists, each closing on an everyday-life example,
// plus genuine recall quizzes.
const artHistory: AuthoredLesson[] = [
  {
    concept: "Formal Analysis",
    level: "GCSE",
    summary: "line, colour, composition, scale and texture as visual evidence",
    estimatedMinutes: 7,
    deck: "Before you can say what a picture means, you have to say what it actually shows. Formal analysis is the discipline of describing an artwork's visual choices — its lines, colours and composition — so precisely that interpretation rests on evidence rather than on a vague vibe.",
    keyTerms: [
      { label: "Formal elements", value: "The visual building blocks: line, shape, colour, tone, texture, space and scale." },
      { label: "Composition", value: "How the elements are arranged within the frame to guide the eye." },
      { label: "Describe before interpret", value: "The core rule: establish what you see before claiming what it means." },
      { label: "Wölfflin's pairs", value: "Contrasts like linear vs painterly that Heinrich Wölfflin used to compare styles." },
    ],
    sections: [
      {
        heading: "Looking, slowed down",
        body: [
          `Formal analysis is the first skill in art history, and the most underrated. It means paying disciplined attention to how an artwork looks — its formal elements — before rushing to what it means. Line, shape, colour, tone, texture, the use of space, the scale of things, the way the whole is composed: these are the visual facts an artist actually controls, and they are the evidence from which every interpretation must be built.`,
          `The reason it matters is that meaning in art is carried by visual choices, and if you skip the looking you end up asserting meanings the image does not support. A diagonal composition feels dynamic and unstable; a symmetrical one feels calm and formal; warm reds advance while cool blues recede. None of this is mystical — it is the grammar of images, and formal analysis is learning to read it.`,
        ],
      },
      {
        heading: "Describe before you interpret",
        body: [
          `The golden rule is: describe before you interpret. Confronted with a painting, resist the urge to declare "it's about grief" and instead ask what you actually see. Where is the light coming from? What is the biggest shape, and where does your eye go first? Are the lines sharp or soft, the colours bright or muted, the space deep or flat? Only once you have gathered these observations should you ask what they add up to.`,
          `This order protects you from projecting. A student who says a portrait "looks sad" has an impression; one who notes the downturned mouth, the shadowed eyes, the muted palette and the figure pushed to the edge of a large empty space has evidence. Interpretation built on description can be defended and shared; interpretation built on a hunch cannot. Formal analysis turns "I feel" into "I can show".`,
        ],
      },
      {
        heading: "The elements at work",
        body: [
          `Each formal element does specific work. Line can be an outline, but it can also imply movement or direction, leading your eye across the canvas. Colour affects mood and depth, and artists exploit warm–cool contrasts and complementary pairs to make things pop or recede. Tone — the range from light to dark — models form and creates drama; a strong contrast of light and shade (chiaroscuro) can make a figure seem to emerge from darkness.`,
          `Composition ties it together: the arrangement of everything within the frame. Artists use devices like the rule of thirds, framing, symmetry, and leading lines to control where you look and in what order. Scale signals importance and can overwhelm or intimate. Learning to name these choices, and to notice their effect on you, is what lets you analyse any image — a masterpiece, a poster, or a photograph — rather than just consuming it.`,
        ],
      },
      {
        heading: "Comparing with a trained eye",
        body: [
          `Formal analysis becomes especially powerful in comparison. The art historian Heinrich Wölfflin argued in the early 1900s that styles could be distinguished by contrasting formal principles — for example "linear" art, which defines forms with clear outlines, versus "painterly" art, which dissolves edges into masses of colour and light. Set a crisp Renaissance panel beside a loose Baroque canvas and the difference is not vague taste but describable form.`,
          `This is why formal analysis underpins the whole discipline. Dating a work, attributing it to an artist, tracing an influence, distinguishing an original from a copy — all begin with close looking at how the thing is made. You cannot interpret, compare or judge an artwork responsibly until you can describe it accurately. Everything else in art history is built on this foundation of trained attention.`,
        ],
      },
      {
        heading: "Reading the feed",
        body: [
          `You use rough formal analysis every time an image stops your scroll. Ask why a particular photo, advert or film frame grips you and the answers are formal: the strong diagonal, the pop of a single warm colour against grey, the face placed exactly on a third of the frame, the light raking across a texture. Advertisers and film-makers are masters of this grammar, steering your eye and mood with composition you never consciously notice. Slowing down to name what an image actually does — before deciding what it means or whether you like it — turns you from a passive viewer into someone who can see how the effect was built.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is formal analysis?",
        choices: [
          { id: "a", label: "Researching who bought and sold a painting" },
          { id: "b", label: "Describing an artwork's visual elements — line, colour, composition — before interpreting it" },
          { id: "c", label: "Guessing the emotional meaning of a work at a glance" },
          { id: "d", label: "Studying the chemistry of the paint" },
        ],
        correctChoiceId: "b",
        explanation: "Formal analysis is disciplined attention to how a work looks — its formal elements and composition — which provides the visual evidence on which interpretation must rest.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does the rule 'describe before you interpret' matter?",
        choices: [
          { id: "a", label: "Because description makes interpretation defensible with evidence rather than projection" },
          { id: "b", label: "Because interpretation is never allowed in art history" },
          { id: "c", label: "Because artists dislike being interpreted" },
          { id: "d", label: "Because description takes less time" },
        ],
        correctChoiceId: "a",
        explanation: "Noting the downturned mouth, shadowed eyes and muted palette turns 'it looks sad' into evidence that can be defended and shared, protecting you from asserting meanings the image does not support.",
      },
      {
        dimension: "depth",
        prompt: "What does 'composition' refer to?",
        choices: [
          { id: "a", label: "The chemical make-up of the pigments" },
          { id: "b", label: "How the visual elements are arranged within the frame to guide the eye" },
          { id: "c", label: "The price the work sold for" },
          { id: "d", label: "The frame around the picture" },
        ],
        correctChoiceId: "b",
        explanation: "Composition is the arrangement of everything within the frame — using devices like symmetry, framing and leading lines — to control where the viewer looks and in what order.",
      },
      {
        dimension: "reasoning",
        prompt: "How did Wölfflin use formal principles like 'linear versus painterly'?",
        choices: [
          { id: "a", label: "To decide which paintings were most expensive" },
          { id: "b", label: "To distinguish styles by describable formal contrasts rather than vague taste" },
          { id: "c", label: "To prove all art is identical" },
          { id: "d", label: "To rank artists by nationality" },
        ],
        correctChoiceId: "b",
        explanation: "Wölfflin contrasted principles such as linear (clear outlines) versus painterly (dissolved edges) so that stylistic differences could be described precisely rather than felt vaguely.",
      },
      {
        dimension: "depth",
        prompt: "Why is formal analysis called the foundation of art history?",
        choices: [
          { id: "a", label: "Because dating, attribution, comparison and interpretation all begin with close looking at how a work is made" },
          { id: "b", label: "Because it is the only skill art historians ever use" },
          { id: "c", label: "Because it requires no training" },
          { id: "d", label: "Because it ignores the visual elements" },
        ],
        correctChoiceId: "a",
        explanation: "You cannot responsibly interpret, compare, date or attribute a work until you can describe accurately how it is made — so the whole discipline rests on trained close looking.",
      },
    ],
    sources: [
      { label: "Smarthistory: How to do visual (formal) analysis", note: "Museum-grade guide to describing the formal elements of art.", type: "Reference", url: "https://smarthistory.org/" },
      { label: "Introduction to Art: Design, Context, and Meaning", note: "Open art history textbook on visual analysis and the elements of art.", type: "Textbook", url: "https://oer.galileo.usg.edu/arts-textbooks/3/" },
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
          { id: "a", label: "The study of the symbols, subject matter and motifs in images and their meanings" },
          { id: "b", label: "The chemical analysis of paint layers" },
          { id: "c", label: "The measurement of a painting's dimensions" },
          { id: "d", label: "The history of who owned a work" },
        ],
        correctChoiceId: "a",
        explanation: "Iconography recovers the meanings a culture packed into its images — the symbols, motifs and subject matter that were once legible to shared viewers.",
      },
      {
        dimension: "depth",
        prompt: "What is an 'attribute' in iconography?",
        choices: [
          { id: "a", label: "A quality of the paint's texture" },
          { id: "b", label: "An object that identifies a particular figure, like a wheel for St Catherine" },
          { id: "c", label: "The signature of the artist" },
          { id: "d", label: "The price of the artwork" },
        ],
        correctChoiceId: "b",
        explanation: "Attributes act like name tags: keys identify St Peter, a broken wheel St Catherine, arrows St Sebastian. Without the code they are just odd props; with it, they name the figure.",
      },
      {
        dimension: "reasoning",
        prompt: "What distinguishes Panofsky's 'iconological' level from the 'iconographic' one?",
        choices: [
          { id: "a", label: "Iconological simply describes what is visible" },
          { id: "b", label: "Iconological interprets what the image reveals about the deeper worldview of the society that made it" },
          { id: "c", label: "Iconological ignores meaning entirely" },
          { id: "d", label: "They are two names for the same level" },
        ],
        correctChoiceId: "b",
        explanation: "The iconographic level identifies the story or symbol; the deeper iconological level interprets what the image reveals about a culture's underlying assumptions, anxieties and values.",
      },
      {
        dimension: "reasoning",
        prompt: "In a Dutch 'vanitas' still life, what does the skull signify?",
        choices: [
          { id: "a", label: "The wealth of the owner" },
          { id: "b", label: "A reminder of death and the transience of life" },
          { id: "c", label: "A medical textbook illustration" },
          { id: "d", label: "The artist's self-portrait" },
        ],
        correctChoiceId: "b",
        explanation: "In a vanitas, every object is a word about mortality: the skull is death, wilting flowers are transience, the snuffed candle the brevity of life — a sermon aimed at a symbolically literate viewer.",
      },
      {
        dimension: "reasoning",
        prompt: "What is a key pitfall when using iconography?",
        choices: [
          { id: "a", label: "Assuming symbols have fixed meanings and over-reading every object as a hidden code" },
          { id: "b", label: "Describing what is visible in the image" },
          { id: "c", label: "Learning the culture's stories" },
          { id: "d", label: "Comparing two paintings" },
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
          { id: "a", label: "The technique an artist uses to apply paint" },
          { id: "b", label: "The funding and commissioning of art by patrons, which shapes what gets made" },
          { id: "c", label: "The way visitors behave in a gallery" },
          { id: "d", label: "The signature style of a famous artist" },
        ],
        correctChoiceId: "b",
        explanation: "Patronage is the money and power behind a commission — the Church, princes or wealthy families paying for specific works, which shaped their subject, size, materials and message.",
      },
      {
        dimension: "reasoning",
        prompt: "Why might a Renaissance contract specify the use of expensive ultramarine?",
        choices: [
          { id: "a", label: "Because blue was the only colour available" },
          { id: "b", label: "Because costly pigments displayed the patron's wealth and devotion, so the splendour was partly a status message" },
          { id: "c", label: "Because artists preferred it for no reason" },
          { id: "d", label: "Because it was the cheapest option" },
        ],
        correctChoiceId: "b",
        explanation: "Ultramarine, ground from lapis lazuli, cost more than gold. Contracts stipulating it meant the patron was buying visible expense — the material lavishness is a message about their wealth and piety.",
      },
      {
        dimension: "depth",
        prompt: "How did powerful patrons like the Medici or Pope Julius II use art?",
        choices: [
          { id: "a", label: "To project and legitimise their power, prestige and authority" },
          { id: "b", label: "Only to decorate private rooms no one saw" },
          { id: "c", label: "To avoid attracting any attention" },
          { id: "d", label: "Purely as a financial investment to resell" },
        ],
        correctChoiceId: "a",
        explanation: "The Medici used lavish patronage to cement their standing, and Julius II commissioned works like the Sistine ceiling to glorify the Church and himself — art as a visible argument for power.",
      },
      {
        dimension: "reasoning",
        prompt: "Why did Dutch painting in the 1600s favour landscapes, still lifes and everyday scenes?",
        choices: [
          { id: "a", label: "Because the Church commissioned them" },
          { id: "b", label: "Because a broad middle-class market bought ready-made pictures, shaping demand toward portable, widely appealing subjects" },
          { id: "c", label: "Because kings ordered them" },
          { id: "d", label: "Because artists were forbidden to paint people" },
        ],
        correctChoiceId: "b",
        explanation: "In the Dutch Republic art was bought ready-made from a market rather than commissioned, so painters made portable pictures many buyers would want — the market shaped the art as a single patron once had.",
      },
      {
        dimension: "depth",
        prompt: "What is the enduring lesson about art and patronage?",
        choices: [
          { id: "a", label: "Art is always made in complete independence from money" },
          { id: "b", label: "Art is made within systems of funding and power that leave their fingerprints on the work" },
          { id: "c", label: "Only religious art has patrons" },
          { id: "d", label: "Patronage ended with the Renaissance" },
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
    concept: "Perspective",
    level: "GCSE",
    summary: "techniques for representing depth and viewpoint",
    estimatedMinutes: 7,
    deck: "How do you fit a three-dimensional world onto a flat surface so convincingly that the eye is fooled? The answer, worked out in Renaissance Florence, was linear perspective — a mathematical trick so powerful it changed not just how pictures looked, but how a whole civilisation pictured space itself.",
    keyTerms: [
      { label: "Linear perspective", value: "A geometric system for depicting depth, with parallel lines converging on a vanishing point." },
      { label: "Vanishing point", value: "The point on the horizon where receding parallel lines appear to meet." },
      { label: "Foreshortening", value: "Depicting an object at an angle so it appears to project into or recede from space." },
      { label: "Hierarchical scale", value: "The earlier convention of sizing figures by importance rather than distance." },
    ],
    sections: [
      {
        heading: "The problem of flatness",
        body: [
          `Every painter faces the same basic problem: the world has depth, but a canvas or wall is flat. How do you create the convincing illusion that you are looking through the surface into real space? Different cultures and eras solved this differently, and the solutions reveal how people thought about space, importance and reality itself.`,
          `In much medieval European art, depth was not the priority. Figures were often sized by hierarchical scale — the more important the person, the bigger they were painted, regardless of where they stood. Christ or a king might loom over smaller attendants not because they were nearer but because they mattered more. Space was symbolic, organised by meaning rather than by optics. This was not incompetence; it was a different set of priorities.`,
        ],
      },
      {
        heading: "Florence cracks the code",
        body: [
          `In the early 1400s in Florence, the architect Filippo Brunelleschi is credited with demonstrating linear perspective: a geometric system that makes a flat image mimic how the eye actually sees receding space. The core idea is the vanishing point — a single point, usually on the horizon, toward which all parallel lines running away from the viewer appear to converge, like railway tracks meeting in the distance.`,
          `In 1435 the scholar Leon Battista Alberti wrote it up as a teachable method in his treatise On Painting, turning a demonstration into a system any trained artist could use. Suddenly painters could construct a believable, measurable space, place figures correctly within it, and make a wall dissolve into an apparent room or landscape. It was, in effect, a technology for controlling illusion, and it spread rapidly.`,
        ],
      },
      {
        heading: "A new picture of the world",
        body: [
          `Linear perspective did more than improve realism; it embodied a new worldview. It treats space as uniform, rational and measurable, seen from the fixed position of a single human eye. The viewer is placed at a precise spot, and the whole scene is organised around their viewpoint. This mirrored the Renaissance's growing confidence in mathematics, observation and the individual observer as the measure of things.`,
          `Compare it with the earlier hierarchical scale: where medieval space was organised by spiritual importance, perspectival space is organised by optics and geometry. The shift from one to the other tracks a broader change — from a world pictured according to its divine order to a world pictured according to how it appears to a human looking at it. Perspective is a technique, but it is also a statement about who stands at the centre of the picture.`,
        ],
      },
      {
        heading: "Bending and breaking the rules",
        body: [
          `Once mastered, perspective became a toolkit artists could exploit and eventually challenge. Dramatic foreshortening — depicting a body or object sharply angled toward the viewer, like a figure whose feet loom huge and head shrinks — showed off virtuosity and created powerful effects. Painters used perspective to stage theatrical depth, to lead the eye to a focal point, and to make architecture soar.`,
          `Centuries later, modern artists deliberately broke it. The Cubists shattered the single fixed viewpoint, showing objects from several angles at once; others flattened space on purpose. These were not failures to draw "correctly" but rejections of the claim that a single-eye, geometric view is the only truthful way to picture the world. Knowing the rules of perspective is what lets you see that breaking them is a deliberate, meaningful choice.`,
        ],
      },
      {
        heading: "The perspective in your phone",
        body: [
          `Linear perspective is now so normal you forget it is a construction. Every photograph your phone takes obeys it — parallel lines converging, distant things smaller — and every video game builds convincing 3D worlds by computing exactly the vanishing-point geometry Brunelleschi demonstrated. When an image feels oddly "flat" or "off", it is often because the perspective is unusual or broken. The system a handful of Florentines worked out six hundred years ago is now the default way screens, cameras and games render space — which is why it can be startling to see art, medieval or modern, that refuses to play by its rules.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is the 'vanishing point' in linear perspective?",
        choices: [
          { id: "a", label: "The brightest spot in a painting" },
          { id: "b", label: "The point, usually on the horizon, where receding parallel lines appear to converge" },
          { id: "c", label: "The signature of the artist" },
          { id: "d", label: "The centre of the frame regardless of depth" },
        ],
        correctChoiceId: "b",
        explanation: "The vanishing point is where parallel lines running away from the viewer seem to meet — like railway tracks converging in the distance — creating the illusion of depth on a flat surface.",
      },
      {
        dimension: "reasoning",
        prompt: "How did earlier medieval art often organise the size of figures?",
        choices: [
          { id: "a", label: "By strict geometric perspective" },
          { id: "b", label: "By hierarchical scale — more important figures painted larger, regardless of distance" },
          { id: "c", label: "By the order they were painted" },
          { id: "d", label: "By making all figures identical in size" },
        ],
        correctChoiceId: "b",
        explanation: "Medieval art frequently used hierarchical scale, sizing figures by importance rather than optics — space was symbolic, organised by meaning, not by how the eye sees.",
      },
      {
        dimension: "depth",
        prompt: "Who is credited with demonstrating linear perspective, and who wrote it up as a method?",
        choices: [
          { id: "a", label: "Brunelleschi demonstrated it; Alberti wrote it up in On Painting (1435)" },
          { id: "b", label: "Michelangelo demonstrated it; Vasari wrote it up" },
          { id: "c", label: "Leonardo invented it; Panofsky wrote it up" },
          { id: "d", label: "Wölfflin demonstrated it; Alberti wrote it up" },
        ],
        correctChoiceId: "a",
        explanation: "Brunelleschi is credited with demonstrating linear perspective in early-1400s Florence, and Alberti turned it into a teachable system in his 1435 treatise On Painting.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is linear perspective described as embodying a new worldview, not just a technique?",
        choices: [
          { id: "a", label: "Because it treats space as uniform and rational, organised around a single human viewpoint" },
          { id: "b", label: "Because it made art cheaper to produce" },
          { id: "c", label: "Because it removed all religious subjects" },
          { id: "d", label: "Because it required no mathematics" },
        ],
        correctChoiceId: "a",
        explanation: "Perspective organises the scene around the fixed position of a single observing eye, mirroring the Renaissance's confidence in mathematics, observation and the individual — a shift from space ordered by divine importance to space ordered by how it appears.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is it significant that Cubists 'broke' perspective?",
        choices: [
          { id: "a", label: "It shows they could not draw correctly" },
          { id: "b", label: "It was a deliberate rejection of the idea that a single fixed viewpoint is the only truthful way to picture the world" },
          { id: "c", label: "It proves perspective never existed" },
          { id: "d", label: "It was an accident of poor training" },
        ],
        correctChoiceId: "b",
        explanation: "By showing objects from several angles at once, the Cubists deliberately rejected the single-eye geometric view — a meaningful choice you can only appreciate once you know the rules they were breaking.",
      },
    ],
    sources: [
      { label: "Smarthistory: linear perspective", note: "Essays on Brunelleschi, Alberti and the geometry of depth.", type: "Reference", url: "https://smarthistory.org/" },
      { label: "Leon Battista Alberti, On Painting (1435)", note: "The treatise that turned perspective into a teachable method.", type: "Primary", url: "https://en.wikipedia.org/wiki/Perspective_(graphical)" },
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
          { id: "a", label: "'Rebirth' — reviving the art and ideas of ancient Greece and Rome" },
          { id: "b", label: "'Revolution' — overthrowing all previous art" },
          { id: "c", label: "'Reformation' — reforming the Church" },
          { id: "d", label: "'Realism' — rejecting the classical past" },
        ],
        correctChoiceId: "a",
        explanation: "Renaissance means rebirth: the movement saw itself as reviving the glories of classical antiquity after the 'middle' ages, taking the ancient past as a model to emulate.",
      },
      {
        dimension: "depth",
        prompt: "What is humanism, the intellectual engine of the Renaissance?",
        choices: [
          { id: "a", label: "A rejection of all learning" },
          { id: "b", label: "A movement emphasising human potential, reason and worldly life, inspired by classical thought" },
          { id: "c", label: "The worship of ancient gods" },
          { id: "d", label: "A style of painting only landscapes" },
        ],
        correctChoiceId: "b",
        explanation: "Humanism stressed human potential, reason and the value of worldly life and learning, drawing on classical philosophy — turning attention to what people could achieve on earth without rejecting religion.",
      },
      {
        dimension: "reasoning",
        prompt: "How did the status of the artist change during the Renaissance?",
        choices: [
          { id: "a", label: "Artists became anonymous guild craftsmen for the first time" },
          { id: "b", label: "Leading artists rose from anonymous craftsmen to celebrated individual geniuses" },
          { id: "c", label: "Artists were banned from signing their work" },
          { id: "d", label: "Artists lost all social standing" },
        ],
        correctChoiceId: "b",
        explanation: "Over the Renaissance the best artists became famous individuals praised for unique genius — Michelangelo 'il Divino', Leonardo the model 'Renaissance man' — a reversal of their earlier craftsman status.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is Vasari's Lives of the Artists significant?",
        choices: [
          { id: "a", label: "It told artists' stories as heroic individuals, effectively inventing art history and the artist's biography" },
          { id: "b", label: "It was a manual for mixing paint" },
          { id: "c", label: "It argued artists should remain anonymous" },
          { id: "d", label: "It rejected the classical revival" },
        ],
        correctChoiceId: "a",
        explanation: "Vasari's 1550 Lives narrated great artists as heroic individuals with distinctive talents, promoting the idea of the artist-genius and founding the tradition of art history and biography.",
      },
      {
        dimension: "depth",
        prompt: "What is a fair criticism of the Renaissance 'rebirth' narrative?",
        choices: [
          { id: "a", label: "That it unfairly dismissed the achievements of the Middle Ages and flattered itself" },
          { id: "b", label: "That it produced no important art" },
          { id: "c", label: "That it ignored ancient Greece and Rome" },
          { id: "d", label: "That it had no wealthy patrons" },
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
          { id: "a", label: "It made painting cheaper to produce" },
          { id: "b", label: "By capturing likeness mechanically, it freed painting from imitation and pushed it to explore what only painting could do" },
          { id: "c", label: "It forced all artists to become photographers" },
          { id: "d", label: "It had no effect on painting" },
        ],
        correctChoiceId: "b",
        explanation: "Once a camera could capture appearances instantly, imitation was no longer painting's unique task — so modernists turned to colour, form, flatness and feeling, things only painting could pursue.",
      },
      {
        dimension: "depth",
        prompt: "What is 'abstraction' in modern art?",
        choices: [
          { id: "a", label: "Extremely detailed, photographic realism" },
          { id: "b", label: "Art that departs from depicting recognisable reality, up to pure colour and form" },
          { id: "c", label: "Art made only in black and white" },
          { id: "d", label: "Copying ancient sculpture" },
        ],
        correctChoiceId: "b",
        explanation: "Abstraction moves away from representing the visible world; in its pure form (Kandinsky, Mondrian) a painting refers to nothing recognisable, becoming an arrangement of colour, line and shape in its own right.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does modernism ask us to see abstraction as 'an argument, not an inability to draw'?",
        choices: [
          { id: "a", label: "Because abstract artists like Picasso and Mondrian could draw superbly and chose abstraction deliberately" },
          { id: "b", label: "Because abstraction is always accidental" },
          { id: "c", label: "Because drawing skill does not exist" },
          { id: "d", label: "Because abstraction copies photographs" },
        ],
        correctChoiceId: "a",
        explanation: "Masters of realism chose abstraction on purpose, proposing that a painting need not picture something else but can produce meaning through colour and form directly — a considered position, not a failure.",
      },
      {
        dimension: "reasoning",
        prompt: "What did the critic Clement Greenberg argue each art should do?",
        choices: [
          { id: "a", label: "Return to imitating nature" },
          { id: "b", label: "Purify itself down to what is unique to its own medium — for painting, flatness" },
          { id: "c", label: "Combine all media into one" },
          { id: "d", label: "Reject colour entirely" },
        ],
        correctChoiceId: "b",
        explanation: "Greenberg held that each art should reduce to its own essence; painting's essence was flatness, so modern painting rightly abandoned the illusion of depth for the flat surface.",
      },
      {
        dimension: "depth",
        prompt: "What ethos, captured by Ezra Pound's 'make it new', united the modernist movements?",
        choices: [
          { id: "a", label: "A prizing of originality and rupture, overturning tradition to push art into new territory" },
          { id: "b", label: "A commitment to preserving all past styles unchanged" },
          { id: "c", label: "A rejection of all experimentation" },
          { id: "d", label: "A focus purely on making money" },
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
          { id: "a", label: "The style in which a work is painted" },
          { id: "b", label: "The documented history of an artwork's ownership and location over time" },
          { id: "c", label: "The current market price of a work" },
          { id: "d", label: "The materials used to make a work" },
        ],
        correctChoiceId: "b",
        explanation: "Provenance is the traced chain of ownership — ideally from the artist's studio to the present — and much of an object's value, meaning and legitimacy depends on it.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is provenance central to detecting forgeries?",
        choices: [
          { id: "a", label: "Because a convincing ownership chain supports authenticity, so forgers fake the paperwork as well as the paint" },
          { id: "b", label: "Because forgeries are always obvious from the image alone" },
          { id: "c", label: "Because provenance has nothing to do with authenticity" },
          { id: "d", label: "Because forgers never bother with history" },
        ],
        correctChoiceId: "a",
        explanation: "A credible chain back to the artist supports authenticity, so the most dangerous fakes come with fabricated histories — as in the Knoedler scandal, where forged paintings had entirely invented provenance.",
      },
      {
        dimension: "depth",
        prompt: "Why is a gap in a painting's history covering 1933–45 treated as a warning sign?",
        choices: [
          { id: "a", label: "Because paintings were rarely made in that period" },
          { id: "b", label: "Because it may indicate the work was looted by the Nazis and should be returned to rightful owners" },
          { id: "c", label: "Because provenance only matters after 1945" },
          { id: "d", label: "Because all wartime art is fake" },
        ],
        correctChoiceId: "b",
        explanation: "Provenance research uses such gaps to identify Nazi-looted art in collections and return it to the heirs of its rightful owners — so an unexplained wartime gap demands investigation.",
      },
      {
        dimension: "reasoning",
        prompt: "How does provenance underpin restitution debates over objects like the Benin Bronzes?",
        choices: [
          { id: "a", label: "It has no relevance to where objects belong" },
          { id: "b", label: "Tracing how an object left its home reveals whether it was bought, given or taken by force, shaping the case for return" },
          { id: "c", label: "It proves museums always acquired objects fairly" },
          { id: "d", label: "It only matters for paintings, not artefacts" },
        ],
        correctChoiceId: "b",
        explanation: "Restitution arguments turn on ownership history: provenance showing an object was seized by conquest or coercion — like the Bronzes taken in 1897 — strengthens the case that it should be returned.",
      },
      {
        dimension: "depth",
        prompt: "What is 'due diligence' in acquiring art?",
        choices: [
          { id: "a", label: "Checking an object's history before buying or displaying it, to avoid holding stolen or fake goods" },
          { id: "b", label: "Paying the highest possible price" },
          { id: "c", label: "Cleaning the artwork before sale" },
          { id: "d", label: "Ignoring gaps in the record" },
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
          { id: "a", label: "That the material is a neutral container that does not affect meaning" },
          { id: "b", label: "That the material and technique shape what an artwork can do and mean" },
          { id: "c", label: "That only the subject of a work matters" },
          { id: "d", label: "That all media are interchangeable" },
        ],
        correctChoiceId: "b",
        explanation: "Medium specificity insists the physical material and technique are not a neutral delivery method but shape the work's possibilities, feel and meaning — the material is part of the message.",
      },
      {
        dimension: "depth",
        prompt: "What are a medium's 'affordances'?",
        choices: [
          { id: "a", label: "How much the materials cost" },
          { id: "b", label: "What the medium makes easy or possible, and what it makes difficult" },
          { id: "c", label: "The size an artwork must be" },
          { id: "d", label: "The number of colours allowed" },
        ],
        correctChoiceId: "b",
        explanation: "Affordances are what a medium enables and constrains — marble holds detail but no colour; bronze allows dynamic reaching forms; oil allows slow blending. Each choice changes what is possible.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does oil paint allow effects that fresco cannot?",
        choices: [
          { id: "a", label: "Because oil dries slowly, allowing blending, glazing, reworking and soft transitions" },
          { id: "b", label: "Because oil must be applied to wet plaster quickly" },
          { id: "c", label: "Because oil cannot show colour" },
          { id: "d", label: "Because oil is always used on walls" },
        ],
        correctChoiceId: "a",
        explanation: "Oil's slow drying lets artists blend seamlessly, build luminous glazes and rework passages — enabling Van Eyck's precision and Leonardo's sfumato — whereas fresco's fast-drying plaster demands speed and boldness.",
      },
      {
        dimension: "reasoning",
        prompt: "How did Greenberg apply medium specificity to modern painting?",
        choices: [
          { id: "a", label: "He argued painting should imitate sculpture" },
          { id: "b", label: "He argued painting should embrace its unique property, flatness, and abandon the illusion of depth" },
          { id: "c", label: "He argued all media should merge into one" },
          { id: "d", label: "He argued painting should return to fresco" },
        ],
        correctChoiceId: "b",
        explanation: "Greenberg held each medium should refine what is unique to itself; painting's essence was the flat canvas, so modern painting rightly abandoned three-dimensional illusion — reframing abstraction as self-purification.",
      },
      {
        dimension: "depth",
        prompt: "What question does medium specificity add to interpreting an artwork?",
        choices: [
          { id: "a", label: "Only what the work depicts" },
          { id: "b", label: "Not only what it depicts, but what it is made of and why" },
          { id: "c", label: "Only who owned it" },
          { id: "d", label: "Only how much it is worth" },
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
          { id: "a", label: "Because its choices of what to collect, display and label are claims about what matters" },
          { id: "b", label: "Because museums display everything ever made" },
          { id: "c", label: "Because visitors ignore the labels" },
          { id: "d", label: "Because art has no meaning" },
        ],
        correctChoiceId: "a",
        explanation: "Decisions about what to acquire, what to spotlight and how to label form an invisible argument about value and importance — and because the public trusts museums, that argument becomes official culture.",
      },
      {
        dimension: "reasoning",
        prompt: "How do museums help create a self-fulfilling 'canon'?",
        choices: [
          { id: "a", label: "By displaying random works each day" },
          { id: "b", label: "An artist in the collection is seen and valued, while one left out becomes invisible and is assumed unimportant" },
          { id: "c", label: "By refusing to collect any art" },
          { id: "d", label: "By treating all artists identically" },
        ],
        correctChoiceId: "b",
        explanation: "Collecting and celebrating some artists makes them 'great masters' while excluding others renders them invisible, and their absence is read as proof they did not matter — a compounding loop that long favoured white European men.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is the neutral-looking 'white cube' gallery itself a construction?",
        choices: [
          { id: "a", label: "Because it strips objects of their original context, turning artefacts into pure 'art' for reverent contemplation" },
          { id: "b", label: "Because white walls are cheaper" },
          { id: "c", label: "Because it shows objects in their original settings" },
          { id: "d", label: "Because it has no effect on meaning" },
        ],
        correctChoiceId: "a",
        explanation: "The plain white gallery presents art as timeless and above context, but that neutrality is engineered: it removes an object's original use and setting, framing a devotional altarpiece or functional artefact as autonomous 'art'.",
      },
      {
        dimension: "depth",
        prompt: "How can 'framing' change the meaning of the same object?",
        choices: [
          { id: "a", label: "It cannot; objects have one fixed meaning" },
          { id: "b", label: "Labels, grouping and placement can present it as a masterpiece, an ethnographic specimen, or stolen loot" },
          { id: "c", label: "Only the object's size matters" },
          { id: "d", label: "Framing only refers to the picture frame" },
        ],
        correctChoiceId: "b",
        explanation: "Calling something 'primitive art' versus 'sculpture', or placing sacred objects in a natural-history rather than art museum, steers what visitors conclude — the same object shifts meaning with the frame.",
      },
      {
        dimension: "reasoning",
        prompt: "What is at the heart of repatriation debates over museum objects?",
        choices: [
          { id: "a", label: "Whether 'universal' museums built partly on colonial plunder should return heritage to its communities of origin" },
          { id: "b", label: "Whether museums should charge higher entry fees" },
          { id: "c", label: "Whether art should be cleaned more often" },
          { id: "d", label: "Whether labels should be larger" },
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
    concept: "Portraiture",
    level: "GCSE",
    summary: "likeness, status, identity and performance in images of people",
    estimatedMinutes: 7,
    deck: "A portrait looks like a simple record of a face. It almost never is. From royal propaganda to the selfie, portraits are carefully constructed claims about who someone is — or who they want to be seen as — which makes them one of art's most revealing and least honest forms.",
    keyTerms: [
      { label: "Likeness", value: "The resemblance of a portrait to its sitter — only one of a portrait's jobs." },
      { label: "Status and power", value: "Portraits often exist to project the sitter's wealth, rank or authority." },
      { label: "Self-fashioning", value: "Constructing and presenting a chosen identity, rather than a neutral record." },
      { label: "Self-portrait", value: "An artist's image of themselves, often the most searching kind of portrait." },
    ],
    sections: [
      {
        heading: "More than a face",
        body: [
          `A portrait is an image of a specific person, and the obvious assumption is that its job is likeness — to record what someone looked like. Likeness matters, but it is rarely the whole story and often not the main point. Portraits are constructed claims about identity: about the sitter's status, character, role and values, shaped by what they, and the artist, wanted the image to say. Reading a portrait means asking not just "who is this?" but "how are they being presented, and why?"`,
          `This is why the same person can appear utterly differently in different portraits. The choices — pose, clothing, setting, objects, expression, scale — are a language for constructing a self. A portrait is less a mirror than a performance, and the interesting question is usually what performance is being staged.`,
        ],
      },
      {
        heading: "Portraits of power",
        body: [
          `Throughout history, portraiture has been a tool for projecting power. Rulers used it as propaganda long before the word existed. Hans Holbein's portraits of Henry VIII present the king as a broad, immovable, magnificently dressed figure who fills the frame — an image of unassailable authority carefully engineered, not a candid snapshot. Royal and aristocratic portraits deployed rich fabrics, symbols of office, grand settings and commanding poses to broadcast wealth and rank.`,
          `The details are a coded language of status. A sword or armour signalled nobility and martial virtue; books signalled learning; a particular flower or animal signalled a valued quality; sumptuous cloth signalled wealth. The sitter is being described through a curated set of props and postures. When you look at a grand old portrait, much of what you are seeing is an argument — this is an important, powerful, admirable person — dressed up as a mere likeness.`,
        ],
      },
      {
        heading: "The searching self-portrait",
        body: [
          `When artists turn the portrait on themselves, something distinctive happens. The self-portrait is at once the most available subject — the artist is always to hand — and a space for unusually honest or probing self-examination. Rembrandt painted himself across his entire life, from confident youth to worn old age, producing a remarkable record of ageing, self-scrutiny and changing fortune that few commissioned portraits would ever risk.`,
          `Self-portraits can also be assertions of the artist's identity and status, especially once the Renaissance had elevated the artist to a figure worth depicting. And they can experiment freely, since the artist answers to no patron's vanity. This makes the self-portrait a special case within portraiture: still a constructed image, but one where the constructor and the subject are the same person, examining themselves.`,
        ],
      },
      {
        heading: "Honesty, flattery and truth",
        body: [
          `Because portraits are commissioned and staged, they raise a permanent tension between flattery and truth. A portraitist depended on pleasing the sitter, so there was pressure to idealise — to smooth the wrinkles, straighten the posture, ennoble the face. Yet the greatest portraits also convey something of a real inner life, a sense of an actual person behind the performance. The art lies in the balance: too much flattery and you get a lifeless mask; too much candour and you might lose the commission.`,
          `This tension makes portraits fascinating historical evidence, but evidence to be read carefully. A portrait tells you how a person wished to be seen at least as much as how they actually were. That is not a flaw to be corrected but the very thing that makes portraiture revealing: it captures the image people chose to project, which is often more telling than an unguarded snapshot would be.`,
        ],
      },
      {
        heading: "You, curating yourself",
        body: [
          `You are a portraitist of yourself every day. Choosing a profile picture, framing a selfie, selecting the LinkedIn headshot that looks capable or the dating-app photo that looks fun — you are doing exactly what a court painter did for a monarch: constructing an image that projects a chosen identity, not a neutral record. Notice how you pick the angle, the setting, the expression, the props in the background, and how differently you present yourself across a CV, a social feed and a family photo. Every one is a curated performance of a self. Portraiture is simply the long, sophisticated history of the thing you now do with a phone.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is the main insight about what a portrait does?",
        choices: [
          { id: "a", label: "It is a neutral, purely accurate record of a face" },
          { id: "b", label: "It is a constructed claim about the sitter's identity, status and character" },
          { id: "c", label: "It is only ever about the artist, not the sitter" },
          { id: "d", label: "It has no meaning beyond decoration" },
        ],
        correctChoiceId: "b",
        explanation: "Likeness matters but is rarely the whole point; portraits construct claims about identity — status, character, role and values — shaped by what the sitter and artist wanted the image to say.",
      },
      {
        dimension: "reasoning",
        prompt: "How does Holbein's portrait of Henry VIII function beyond mere likeness?",
        choices: [
          { id: "a", label: "As a candid, unposed snapshot of the king" },
          { id: "b", label: "As engineered propaganda projecting unassailable authority through pose, scale and dress" },
          { id: "c", label: "As a study of the king's private doubts" },
          { id: "d", label: "As a landscape painting" },
        ],
        correctChoiceId: "b",
        explanation: "Holbein presents Henry as broad, immovable and magnificently dressed, filling the frame — a carefully engineered image of power, using props and posture as a coded language of status.",
      },
      {
        dimension: "depth",
        prompt: "Why is the self-portrait a special case within portraiture?",
        choices: [
          { id: "a", label: "Because the constructor and the subject are the same person examining themselves" },
          { id: "b", label: "Because self-portraits never involve any construction" },
          { id: "c", label: "Because they always flatter the sitter" },
          { id: "d", label: "Because they cannot show a likeness" },
        ],
        correctChoiceId: "a",
        explanation: "In a self-portrait the artist is both maker and subject, allowing unusually probing self-examination — as in Rembrandt's lifelong record of his own ageing — while still being a constructed image.",
      },
      {
        dimension: "reasoning",
        prompt: "What tension is built into commissioned portraiture?",
        choices: [
          { id: "a", label: "Between flattery, to please the sitter, and truth, to convey a real person" },
          { id: "b", label: "Between using oil or fresco" },
          { id: "c", label: "Between portrait and landscape" },
          { id: "d", label: "Between large and small canvases" },
        ],
        correctChoiceId: "a",
        explanation: "A portraitist depended on pleasing the sitter, creating pressure to idealise, yet the greatest portraits also convey a real inner life — the art lies in balancing flattery against candour.",
      },
      {
        dimension: "depth",
        prompt: "Why does the fact that a portrait shows 'how a person wished to be seen' make it valuable evidence?",
        choices: [
          { id: "a", label: "Because it is a flaw that ruins the portrait" },
          { id: "b", label: "Because the chosen self-image people project is often more telling than an unguarded snapshot" },
          { id: "c", label: "Because it means portraits are worthless as history" },
          { id: "d", label: "Because it proves portraits are always accurate" },
        ],
        correctChoiceId: "b",
        explanation: "A portrait records the identity a person chose to project, which is not a defect but the very thing that makes it revealing — capturing how they wished to be seen, at least as much as how they were.",
      },
    ],
    sources: [
      { label: "Smarthistory: portraiture", note: "Essays on likeness, status and the construction of identity in portraits.", type: "Reference", url: "https://smarthistory.org/" },
      { label: "Introduction to Art: Design, Context, and Meaning", note: "Open textbook on portraiture and representation.", type: "Textbook", url: "https://oer.galileo.usg.edu/arts-textbooks/3/" },
    ],
  },
];

export const artHistoryLessons = buildAuthoredLessons("art-history", artHistory);
