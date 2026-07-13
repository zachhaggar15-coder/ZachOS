import { buildAuthoredLessons, type AuthoredLesson } from "./types";

// Ten hand-written Architecture & Urbanism lessons: researched, concept-specific
// prose with named thinkers and real places, each closing on an everyday-life
// example, plus genuine recall quizzes.
const architectureUrbanism: AuthoredLesson[] = [
  {
    concept: "Thresholds",
    level: "GCSE",
    summary: "boundaries that organise entry, privacy and transition",
    estimatedMinutes: 7,
    deck: "A threshold is more than a line on the floor. It is the moment a building decides who may come in, how they should feel about it, and what changes about them once they cross. Architects spend enormous care on the few metres around a door — because that is where a space negotiates with the world.",
    keyTerms: [
      { label: "Threshold", value: "A transition point between one kind of space and another — public to private, outside to in." },
      { label: "Entrance transition", value: "Christopher Alexander's idea that a good entrance changes you gradually rather than abruptly." },
      { label: "Public–private gradient", value: "The graded sequence from fully public street to fully private room." },
      { label: "Defensible boundary", value: "A threshold that signals ownership and controls who feels welcome to cross." },
    ],
    sections: [
      {
        heading: "The most worked-over metre",
        body: [
          `Of all the space in a building, the threshold — the zone around the entrance — receives disproportionate design attention, and for good reason. It is where the building meets the world and decides the terms of the meeting. A grand flight of steps, a modest porch, a security turnstile, a beaded curtain: each is a threshold, and each says something different about who is expected, how welcome they are, and what kind of place they are entering.`,
          `Thresholds do practical work — keeping weather, noise and strangers out — but they also do symbolic work. Crossing one changes your status: from passer-by to guest, from public to private, from outside the institution to inside it. The care lavished on doorways across history, from cathedral portals to corporate lobbies, reflects how much meaning the crossing carries.`,
        ],
      },
      {
        heading: "Public to private, by degrees",
        body: [
          `One of the most useful ideas in architecture is the public–private gradient: the notion that space runs along a scale from fully public (the open street) to fully private (a bedroom), and that good design moves you along it in stages rather than in one jarring jump. A well-designed home does not open straight from the pavement into the living room; it offers a sequence — front garden, path, porch, hall — each slightly more private than the last.`,
          `These in-between zones are thresholds, and they cushion the transition. The architect Christopher Alexander, in A Pattern Language (1977), argued that an abrupt entrance is uncomfortable, and that a good "entrance transition" prepares you psychologically, letting you shed the street and arrive properly. The porch, the lobby, the courtyard: these are not wasted space but emotional airlocks.`,
        ],
      },
      {
        heading: "Filters that sort people",
        body: [
          `Thresholds also filter. They signal who belongs and who does not, sometimes gently and sometimes aggressively. A raised stoop and a low gate mark a home as private without a word; a manned reception desk, a keypad, or a velvet rope sort visitors into welcome and unwelcome. The design of a threshold is, quietly, a statement about power and access.`,
          `This is why the same crossing can feel warm or hostile depending on its design. An open, well-lit shopfront invites you in; a mirrored corporate entrance with a guard makes you check whether you are allowed. Reading thresholds means noticing these signals — asking what a doorway is trying to make you feel, and whom it is trying to keep out.`,
        ],
      },
      {
        heading: "When the threshold fails",
        body: [
          `You notice thresholds most when they are done badly. A shop whose entrance you cannot find, an office where you burst straight into a working room with no reception, a flat that opens directly onto a busy corridor — all create a small distress because the transition is missing. The absence of a proper threshold leaves people unsure whether they have arrived, whether they are intruding, or where they may go.`,
          `Good thresholds, by contrast, are almost invisible: they guide you so smoothly that you never think about them. That invisibility is a sign of skill, not simplicity. A great deal of design intelligence goes into making a crossing feel effortless — the right width, the right light, the right pause — so that you arrive feeling oriented and welcome rather than lost and exposed.`,
        ],
      },
      {
        heading: "The doormat test",
        body: [
          `Watch your own body at thresholds and you will feel the design working. You slow at a front door, wipe your feet, and shift register before knocking — the doormat and porch have prepared you to arrive. You hesitate at a shop with no obvious entrance, or feel oddly exposed walking into an open-plan office with no reception to announce yourself to. Notice how a good pub porch or café doorway eases you in, while a blank corporate lobby with a distant guard makes you check whether you belong. Every one of those small feelings is a threshold doing its quiet job of managing the crossing between one world and the next.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "Beyond keeping weather out, what does a threshold fundamentally do?",
        choices: [
          { id: "a", label: "It marks and manages the transition between different kinds of space" },
          { id: "b", label: "It only decorates the front of a building" },
          { id: "c", label: "It has no effect on how people feel" },
          { id: "d", label: "It exists purely for structural support" },
        ],
        correctChoiceId: "a",
        explanation: "A threshold negotiates the crossing between one kind of space and another — public to private, outside to in — changing a person's status and preparing them to arrive.",
      },
      {
        dimension: "depth",
        prompt: "What is the 'public–private gradient'?",
        choices: [
          { id: "a", label: "A rule that all buildings must be painted in graded colours" },
          { id: "b", label: "The graded sequence of spaces from fully public street to fully private room" },
          { id: "c", label: "A measure of how expensive a building is" },
          { id: "d", label: "The slope of a building's roof" },
        ],
        correctChoiceId: "b",
        explanation: "Space runs on a scale from public to private, and good design moves you along it in stages — garden, path, porch, hall — rather than in one jarring jump.",
      },
      {
        dimension: "reasoning",
        prompt: "Why did Christopher Alexander argue for a gradual 'entrance transition'?",
        choices: [
          { id: "a", label: "Because abrupt entrances are cheaper to build" },
          { id: "b", label: "Because an abrupt entrance is uncomfortable, and a transition lets you shed the street and arrive properly" },
          { id: "c", label: "Because transitions increase a building's height" },
          { id: "d", label: "Because entrances should always be hidden" },
        ],
        correctChoiceId: "b",
        explanation: "Alexander saw the porch or lobby as an 'emotional airlock' that prepares you psychologically, making arrival comfortable rather than jarring.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can the same doorway feel welcoming to one person and hostile to another?",
        choices: [
          { id: "a", label: "Because thresholds signal who belongs and filter who feels allowed to cross" },
          { id: "b", label: "Because doorways change size during the day" },
          { id: "c", label: "Because welcome is purely random" },
          { id: "d", label: "Because only the weather determines the feeling" },
        ],
        correctChoiceId: "a",
        explanation: "A threshold's design — an open shopfront versus a guarded mirrored lobby — is a quiet statement about power and access, sorting people into welcome and unwelcome.",
      },
      {
        dimension: "depth",
        prompt: "Why do we notice thresholds most when they are designed badly?",
        choices: [
          { id: "a", label: "Because good thresholds are always very large" },
          { id: "b", label: "Because a missing transition leaves people unsure whether they have arrived or are intruding" },
          { id: "c", label: "Because bad thresholds are more colourful" },
          { id: "d", label: "Because thresholds have no effect when done well" },
        ],
        correctChoiceId: "b",
        explanation: "A well-designed threshold guides you so smoothly it becomes invisible; a missing one — an entrance you cannot find, an office with no reception — creates distress because the transition never happens.",
      },
    ],
    sources: [
      { label: "Christopher Alexander, A Pattern Language", note: "The 'entrance transition' and other patterns of humane design.", type: "Reference", url: "https://en.wikipedia.org/wiki/A_Pattern_Language" },
      { label: "Introduction to Space Syntax in Urban Studies", note: "Open-access reference on spatial configuration, boundaries and movement.", type: "Reference", url: "https://library.oapen.org/handle/20.500.12657/50404" },
    ],
  },
  {
    concept: "Desire Lines",
    level: "GCSE",
    summary: "informal paths showing how people actually move through space",
    estimatedMinutes: 7,
    deck: "Look at any park and you will find them: worn tracks cutting across the grass where the paved path took the long way round. Desire lines are the honest record of how people actually move — and they quietly expose the gap between how designers think space should be used and how it really is.",
    keyTerms: [
      { label: "Desire line", value: "An informal, worn path created by people choosing their own route rather than the planned one." },
      { label: "Planned vs actual", value: "The gap between the routes a designer laid out and the routes people really take." },
      { label: "Post-occupancy", value: "Studying how a space is actually used after it is built, rather than assuming." },
      { label: "Legibility", value: "How easily people can read and navigate a space, which shapes where they walk." },
    ],
    sections: [
      {
        heading: "The path people actually take",
        body: [
          `A desire line (sometimes called a desire path or, more poetically, a "cow path") is the worn trail that appears where enough people ignore the official route and make their own. The muddy shortcut across the corner of a lawn, the gap trampled through a hedge, the track worn diagonally over a grass verge — each is a vote, cast by thousands of feet, for a route the designer did not provide.`,
          `What makes desire lines so valuable is that they are unfaked evidence. Surveys and interviews capture what people say they do; desire lines capture what they actually do, recorded automatically in the ground. They almost always reveal the same thing: people take the most direct, efficient route, and they will happily override a beautifully paved detour to save a few steps.`,
        ],
      },
      {
        heading: "Designers versus feet",
        body: [
          `Desire lines expose a recurring tension in design: the plan on paper against the behaviour on the ground. A landscape architect may lay out gently curving paths for aesthetic reasons, or route walkers around a lawn to protect it. Pedestrians, indifferent to the intention, cut straight across. The resulting scar is the plan being corrected by use.`,
          `The wise response is not to fight the desire line but to learn from it. There is a well-loved (though often apocryphal) design principle: build the buildings first, wait to see where people wear paths in the grass, and then pave those. Whether or not any particular campus did this, the philosophy is sound — let real movement, not a designer's guess, determine where the routes go. Some universities and parks now deliberately delay paving to read the desire lines first.`,
        ],
      },
      {
        heading: "Listening to use",
        body: [
          `Desire lines are the simplest example of a bigger idea: post-occupancy evaluation, the practice of studying how a building or space is really used after it opens, rather than assuming the design worked. Too much design is judged the day it is finished, when it is pristine and empty. The truth emerges months later, in the worn carpet by the ignored formal entrance, the propped-open fire door everyone actually uses, the bench nobody sits on.`,
          `Reading these signs is a humility discipline. It accepts that designers cannot fully predict behaviour and that users are the real experts on their own needs. A trampled shortcut is not vandalism or laziness; it is feedback. The best designers treat it as a gift — free, precise data about what people want that no amount of upfront planning could have produced.`,
        ],
      },
      {
        heading: "When blocking backfires",
        body: [
          `The instinct to defeat a desire line — with fences, chains, planting, or "keep off the grass" signs — usually fails, and the failure is instructive. People squeeze around the barrier, trample the new planting, or step over the chain, and the desire line simply re-forms a little to one side. The demand is real and the direct route is genuinely better; an obstacle just adds friction without removing the need.`,
          `This teaches a general lesson about designing for people: it is far easier to work with a strong underlying behaviour than against it. When a space fights how people naturally want to move, the people usually win, and the space just gets uglier in the struggle. Accommodating the desire line — paving it, widening it, lighting it — turns a scar into an amenity.`,
        ],
      },
      {
        heading: "The shortcut you already take",
        body: [
          `You make desire lines constantly. The diagonal you cut across an empty car park, the corner of the lawn you clip on the way to the station, the gap in the fence everyone uses — each is you voting with your feet for the efficient route over the official one. Next time you see a worn track across the grass, read it as a message: it is telling you, and any designer paying attention, exactly where the path should have gone. The gap between where the pavement is and where the footprints are is one of the most honest pieces of feedback a public space can give.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is a desire line?",
        choices: [
          { id: "a", label: "A line an architect draws to mark a boundary" },
          { id: "b", label: "A worn path created when people choose their own route instead of the planned one" },
          { id: "c", label: "A decorative pattern in paving" },
          { id: "d", label: "A rule about where you are allowed to walk" },
        ],
        correctChoiceId: "b",
        explanation: "A desire line is the trail worn where people ignore the official route and make their own — a physical record of how people actually move.",
      },
      {
        dimension: "reasoning",
        prompt: "Why are desire lines considered especially valuable evidence?",
        choices: [
          { id: "a", label: "Because they show what people actually do, not just what they say they do" },
          { id: "b", label: "Because they are always beautiful" },
          { id: "c", label: "Because designers create them on purpose" },
          { id: "d", label: "Because they never change" },
        ],
        correctChoiceId: "a",
        explanation: "Unlike surveys, which capture stated behaviour, desire lines are unfaked evidence recorded automatically in the ground — usually revealing that people take the most direct route.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the design philosophy behind waiting to see desire lines before paving?",
        choices: [
          { id: "a", label: "That paving should be avoided entirely" },
          { id: "b", label: "That real movement, not a designer's guess, should determine where routes go" },
          { id: "c", label: "That people should be forced onto curved paths" },
          { id: "d", label: "That grass is more important than people" },
        ],
        correctChoiceId: "b",
        explanation: "The principle — build first, watch where paths are worn, then pave those — lets actual behaviour rather than a designer's prediction decide the routes.",
      },
      {
        dimension: "depth",
        prompt: "What broader practice are desire lines the simplest example of?",
        choices: [
          { id: "a", label: "Post-occupancy evaluation — studying how a space is really used after it opens" },
          { id: "b", label: "Structural engineering" },
          { id: "c", label: "Budgeting a construction project" },
          { id: "d", label: "Choosing paint colours" },
        ],
        correctChoiceId: "a",
        explanation: "Desire lines are a form of post-occupancy feedback: evidence of real use — the worn carpet, the propped-open door — that reveals whether a design actually worked.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does blocking a desire line with a fence or sign usually fail?",
        choices: [
          { id: "a", label: "Because the direct route is genuinely better, so people just route around the barrier and the line re-forms" },
          { id: "b", label: "Because fences are illegal" },
          { id: "c", label: "Because people never notice barriers" },
          { id: "d", label: "Because desire lines disappear on their own" },
        ],
        correctChoiceId: "a",
        explanation: "The underlying demand is real, so an obstacle adds friction without removing the need — people squeeze around it and the desire line simply shifts, teaching that it is easier to work with behaviour than against it.",
      },
    ],
    sources: [
      { label: "Desire path (overview)", note: "Reference on desire lines as evidence of real pedestrian movement.", type: "Reference", url: "https://en.wikipedia.org/wiki/Desire_path" },
      { label: "Jan Gehl, Cities for People", note: "On observing how people actually use streets and public space.", type: "Reference", url: "https://islandpress.org/books/cities-people" },
    ],
  },
  {
    concept: "Public Realm",
    level: "A-level",
    summary: "shared spaces where civic life, movement and encounter happen",
    estimatedMinutes: 8,
    deck: "The public realm is the connective tissue of a city — the streets, squares and parks where strangers mix as equals. It is also under quiet threat, as spaces that look public increasingly turn out to be privately owned and privately controlled.",
    keyTerms: [
      { label: "Public realm", value: "The shared, openly accessible spaces of a city: streets, squares, parks and pavements." },
      { label: "Eyes on the street", value: "Jane Jacobs's idea that busy, watched public space is safer and more alive." },
      { label: "POPS", value: "Privately owned public space — looks public but is governed by private rules." },
      { label: "Civic encounter", value: "The mixing of different people as equals that public space makes possible." },
    ],
    sections: [
      {
        heading: "The city's shared rooms",
        body: [
          `The public realm is everything between the buildings that belongs, in principle, to everyone: streets, pavements, squares, parks, markets, waterfronts. It is where a city's public life happens — where you move, wait, protest, celebrate, people-watch and bump into neighbours. Unlike a home or an office, the public realm is open to all, and that openness is precisely its value.`,
          `A great public realm lets strangers of different classes, ages and backgrounds share the same space on roughly equal terms. The town square, the busy high street, the public park: these are the settings where a society encounters itself, where the abstract idea of "the public" becomes a crowd of actual people. The quality of a city's shared spaces is one of the truest measures of the quality of its civic life.`,
        ],
      },
      {
        heading: "Eyes on the street",
        body: [
          `The great champion of lively public space was the writer Jane Jacobs, whose 1961 book The Death and Life of Great American Cities attacked the sterile planning of her day. She argued that safe, vibrant streets are not produced by policing or by clearing people away, but by having many people around for many reasons at many hours — shopkeepers, residents, passers-by — providing what she called "eyes on the street".`,
          `A busy, mixed, watched street polices itself informally: there are always people who notice, who would help, whose mere presence deters trouble. An empty, single-use zone, however tidy, feels unsafe because no one is around to see. Jacobs's insight overturned the idea that order comes from control; often it comes from ordinary, unplanned human activity — which good public space invites and bad design drives away.`,
        ],
      },
      {
        heading: "The rise of pseudo-public space",
        body: [
          `A subtle threat to the public realm is the growth of privately owned public space, or POPS: plazas, atriums and "high streets" that look and feel public but are actually owned and controlled by private companies. A shopping mall is the clearest example. It offers many functions of a town centre — walking, sitting, meeting — but under private rules, monitored by private security, with activities like protest, leafleting, photography or simply loitering quietly forbidden.`,
          `The distinction matters because rights differ. In a genuine public square you may generally gather, demonstrate and speak; in a privately owned lookalike you may be removed for behaviour that breaks no law but displeases the owner. As more of the "public" city becomes privately managed, the freedoms once attached to public space quietly shrink, even though nothing appears to have changed on the surface.`,
        ],
      },
      {
        heading: "Access and exclusion",
        body: [
          `Even genuinely public space can include or exclude through design. A square with plentiful free seating, shade and no entry fee welcomes everyone; one with "hostile" details — armrests that stop people lying down, spikes, removed benches, sloped ledges — quietly filters out those it does not want, especially the homeless and the young. These design choices decide, without any sign, who is really allowed to linger.`,
          `Reading the public realm therefore means asking not just "is this space open?" but "open to whom, for what, and on whose terms?" A space can be legally public and still be shaped to discourage some of the public from using it. The best public spaces are generous — comfortable to stay in for free, tolerant of a wide range of people and behaviours — because that generosity is what makes shared civic life possible.`,
        ],
      },
      {
        heading: "Square versus mall",
        body: [
          `You feel the difference between real and pseudo-public space more than you might think. In a genuine town square you can sit for an hour without buying anything, hand out flyers, or join a protest; in a shopping centre that looks just as public, try any of those and security will appear, because you are a guest on private property, not a citizen in a commons. Notice, too, the benches with dividers that stop you lying down, or the café that has quietly annexed the pavement. Once you start asking who owns and controls the spaces you move through, the city divides into places where you are a member of the public and places where you are merely a customer.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What defines the public realm?",
        choices: [
          { id: "a", label: "The privately owned interiors of buildings" },
          { id: "b", label: "The shared, openly accessible spaces of a city, such as streets, squares and parks" },
          { id: "c", label: "Government offices only" },
          { id: "d", label: "Spaces reserved for officials" },
        ],
        correctChoiceId: "b",
        explanation: "The public realm is the connective space between buildings that belongs, in principle, to everyone — streets, pavements, squares and parks — where public life happens.",
      },
      {
        dimension: "reasoning",
        prompt: "What did Jane Jacobs mean by 'eyes on the street'?",
        choices: [
          { id: "a", label: "That streets need more CCTV cameras and police" },
          { id: "b", label: "That many people around for many reasons make a street safer through informal, natural surveillance" },
          { id: "c", label: "That streets should be emptied of people to reduce crime" },
          { id: "d", label: "That only shopkeepers make streets safe" },
        ],
        correctChoiceId: "b",
        explanation: "Jacobs argued that busy, mixed, watched streets police themselves informally — ordinary human activity, not control or clearance, is what makes public space safe and alive.",
      },
      {
        dimension: "depth",
        prompt: "What is 'POPS' (privately owned public space)?",
        choices: [
          { id: "a", label: "Space that looks public but is privately owned and governed by private rules" },
          { id: "b", label: "A government-run park" },
          { id: "c", label: "A private home opened to visitors" },
          { id: "d", label: "A type of public transport" },
        ],
        correctChoiceId: "a",
        explanation: "POPS are plazas and 'high streets', like shopping malls, that feel public but are privately controlled — where protest, leafleting or loitering can be forbidden even if legal.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does the distinction between public space and POPS matter for people's rights?",
        choices: [
          { id: "a", label: "It affects the price of nearby housing only" },
          { id: "b", label: "In genuine public space you may gather and protest; in a private lookalike you can be removed for lawful behaviour the owner dislikes" },
          { id: "c", label: "It makes no practical difference" },
          { id: "d", label: "It only affects how the space is cleaned" },
        ],
        correctChoiceId: "b",
        explanation: "Rights differ by ownership: as more 'public' city becomes privately managed, freedoms like assembly and speech quietly shrink even though the space looks unchanged.",
      },
      {
        dimension: "depth",
        prompt: "How can even genuinely public space exclude people through design?",
        choices: [
          { id: "a", label: "By using hostile features like anti-lie-down armrests, spikes and removed benches" },
          { id: "b", label: "By being too colourful" },
          { id: "c", label: "By having too much free seating" },
          { id: "d", label: "It cannot; public space always welcomes everyone" },
        ],
        correctChoiceId: "a",
        explanation: "Hostile design details quietly filter out unwanted users — especially the homeless and young — deciding without any sign who is really allowed to linger.",
      },
    ],
    sources: [
      { label: "Jane Jacobs, The Death and Life of Great American Cities", note: "The classic argument for lively, mixed, watched public streets.", type: "Reference", url: "https://en.wikipedia.org/wiki/The_Death_and_Life_of_Great_American_Cities" },
      { label: "Privately owned public space (overview)", note: "Reference on POPS and the privatisation of the public realm.", type: "Reference", url: "https://en.wikipedia.org/wiki/Privately_owned_public_space" },
    ],
  },
  {
    concept: "Human Scale",
    level: "A-level",
    summary: "design proportions that match bodily comfort and everyday perception",
    estimatedMinutes: 8,
    deck: "Why does one street feel warm and walkable while another, built at the same cost, feels bleak and hostile? Often the answer is human scale: whether a place is designed for a person walking at five kilometres an hour or for a car speeding past at sixty.",
    keyTerms: [
      { label: "Human scale", value: "Design proportioned to the size, speed and senses of a person on foot." },
      { label: "Active frontage", value: "Ground-floor facades with doors, windows and detail that engage passers-by." },
      { label: "The five km/h city", value: "Gehl's idea that street life is experienced at walking pace and must be designed for it." },
      { label: "Blank frontage", value: "Long, featureless walls at street level that make walking dull and lifeless." },
    ],
    sections: [
      {
        heading: "Built for bodies or for cars",
        body: [
          `Human scale means designing places to fit the human body — its size, its walking speed, its senses. A street at human scale offers things to see and do at eye level, doors and windows every few metres, textures and details you can appreciate on foot. A street built at the scale of the car offers wide fast roads, long blank walls, and buildings meant to be glimpsed at speed rather than experienced by a walker.`,
          `The Danish architect Jan Gehl spent his career arguing that most modern planning forgot the human body. In books like Cities for People, he pointed out that we experience the city at roughly five kilometres an hour, at eye level, with senses tuned to detail within a few metres. Design for the car and you get places that are efficient to drive through but miserable to stand in. Design for the person and you get places where public life can flourish.`,
        ],
      },
      {
        heading: "The ground floor does the work",
        body: [
          `Gehl's most practical insight is that the ground floor — the "active frontage" — matters more than the whole rest of a building for how a street feels. A pedestrian walking past experiences the bottom few metres intensely: are there doors, windows, shops, things happening? A lively frontage with entrances every few paces makes a walk interesting; a long blank wall, a blank car-park façade, or a mirrored corporate base makes the same distance feel dead and tiring.`,
          `This is why an old-fashioned high street, with a new shopfront every few metres, feels alive, while a single mega-store with one door in a hundred metres of blank wall feels hostile even if it is objectively cleaner and newer. The rhythm of detail at eye level is what keeps a walker engaged. Get the ground floor wrong and no amount of architectural drama up above can rescue the street.`,
        ],
      },
      {
        heading: "Why big and fast feels bleak",
        body: [
          `Superhuman scale — vast plazas, towers set far back, roads too wide to cross comfortably — tends to feel alienating precisely because it is not proportioned to us. An enormous windswept square with nothing at its edges gives a walker nothing to relate to; the body feels small, exposed and unwelcome. Grand from a helicopter, such spaces are often empty at street level, because people instinctively avoid places that offer them no shelter, detail or human company.`,
          `Speed makes it worse. A road designed for fast traffic pushes buildings apart, replaces doors with driveways, and turns the pedestrian into an afterthought dodging between car-oriented boxes. The result is the familiar dead zone of retail parks and motorway edges: technically full of destinations, yet impossible to enjoy on foot, because nothing about it was built for a person moving at walking pace.`,
        ],
      },
      {
        heading: "Bringing the scale back down",
        body: [
          `The good news is that human scale can be designed back in, and cities increasingly try. Narrowing traffic lanes, widening pavements, planting street trees, breaking long façades into smaller units, requiring active ground floors, and adding places to sit all pull a street back toward the walker. Gehl's own work transformed streets in Copenhagen, Melbourne and New York, showing that when you make space pleasant for people on foot, people on foot appear.`,
          `The underlying principle is simple but easy to forget: the pedestrian is the basic unit of city life, and a place that works for someone walking usually works for everyone. Designing at human scale is not nostalgia or decoration; it is matching the built environment to the creature that has to live in it. When the fit is right, a street invites you to slow down and stay.`,
        ],
      },
      {
        heading: "The street that invites you to linger",
        body: [
          `Compare two shopping trips. On an old high street you drift past a new window every few steps, pause at a café table, cross the road easily, and lose half an hour without noticing. At a car-oriented retail park you scurry across a windswept car park between blank-walled boxes, and leave the moment you have what you came for. The difference is human scale: doors and detail at walking pace versus vast surfaces built for the car. Once you can name it, you will feel it everywhere — the places that make you want to stay are almost always the ones proportioned to your own body.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What does 'human scale' mean in urban design?",
        choices: [
          { id: "a", label: "Making all buildings the same height" },
          { id: "b", label: "Proportioning design to the size, speed and senses of a person on foot" },
          { id: "c", label: "Designing only for tall people" },
          { id: "d", label: "Measuring buildings in metres" },
        ],
        correctChoiceId: "b",
        explanation: "Human scale fits places to the human body — its size, walking speed and senses — offering detail at eye level, rather than designing for the car's speed and scale.",
      },
      {
        dimension: "depth",
        prompt: "According to Jan Gehl, at what speed and level do we experience street life?",
        choices: [
          { id: "a", label: "At about 60 km/h from a car window" },
          { id: "b", label: "At about 5 km/h, at eye level, with senses tuned to nearby detail" },
          { id: "c", label: "From above, like a map" },
          { id: "d", label: "Only at night" },
        ],
        correctChoiceId: "b",
        explanation: "Gehl argued we experience the city at walking pace and eye level, so streets must be designed for that — detail within a few metres, not scenery glimpsed at speed.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does the ground-floor 'active frontage' matter so much for how a street feels?",
        choices: [
          { id: "a", label: "Because walkers experience the bottom few metres intensely, so doors and windows keep them engaged" },
          { id: "b", label: "Because it is the most expensive part to build" },
          { id: "c", label: "Because tall buildings are always unpleasant" },
          { id: "d", label: "Because the roof is what people notice most" },
        ],
        correctChoiceId: "a",
        explanation: "A pedestrian experiences the ground floor closely; frequent doors and windows make a walk interesting, while a long blank wall makes the same distance feel dead and tiring.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does a vast windswept plaza often feel bleak and stay empty?",
        choices: [
          { id: "a", label: "Because it is too small for crowds" },
          { id: "b", label: "Because superhuman scale offers the body nothing to relate to, leaving people feeling small and exposed" },
          { id: "c", label: "Because plazas are always ugly" },
          { id: "d", label: "Because people prefer indoor spaces only" },
        ],
        correctChoiceId: "b",
        explanation: "Space not proportioned to us feels alienating; a huge square with nothing at its edges gives a walker no shelter, detail or company, so people instinctively avoid it.",
      },
      {
        dimension: "depth",
        prompt: "How can human scale be designed back into a car-dominated street?",
        choices: [
          { id: "a", label: "By widening roads and removing pavements" },
          { id: "b", label: "By narrowing lanes, widening pavements, planting trees, breaking up façades and adding places to sit" },
          { id: "c", label: "By making all buildings taller" },
          { id: "d", label: "By banning shops" },
        ],
        correctChoiceId: "b",
        explanation: "Gehl's interventions — narrower traffic, wider pavements, active ground floors, seating and trees — pull a street back toward the walker, and where walking becomes pleasant, walkers appear.",
      },
    ],
    sources: [
      { label: "Jan Gehl, Cities for People", note: "The case for designing streets at the scale and speed of the pedestrian.", type: "Reference", url: "https://islandpress.org/books/cities-people" },
      { label: "Human scale in urban design (overview)", note: "Reference on proportion, active frontage and walkability.", type: "Reference", url: "https://en.wikipedia.org/wiki/Human_scale" },
    ],
  },
  {
    concept: "Mixed Use",
    level: "A-level",
    summary: "combining functions so places remain active across the day",
    estimatedMinutes: 8,
    deck: "Separate a city neatly into zones — housing here, offices there, shops somewhere else — and you get places that are half-dead for most of the day. Mixed use is the opposite bet: pile functions together so that a street has a reason to be alive at breakfast, lunch, dusk and midnight.",
    keyTerms: [
      { label: "Mixed use", value: "Combining homes, workplaces, shops and leisure in the same area or building." },
      { label: "Single-use zoning", value: "Separating functions into distinct zones, which can leave each dead outside its hours." },
      { label: "Primary mixed uses", value: "Jacobs's term for different activities that draw people at different times of day." },
      { label: "The 15-minute city", value: "A modern ideal where daily needs are within a short walk, requiring mixed use." },
    ],
    sections: [
      {
        heading: "The problem with sorting the city",
        body: [
          `Much of 20th-century planning was built on separation. Influenced by ideas about hygiene, order and the car, planners split cities into single-use zones: residential suburbs, office districts, shopping centres, industrial parks, each doing one thing. It looked rational on a map, and it produced a predictable result — places that come alive for a few hours and then empty out completely.`,
          `A pure office district is a ghost town at night and on weekends. A dormitory suburb is deserted all day while its residents commute away. A retail park is dead once the shops shut. Each zone is busy only during its own narrow window, and dead the rest of the time. Mixed use is the response: put different functions together so that different people have reasons to be there at different hours.`,
        ],
      },
      {
        heading: "Jacobs and the need for mixture",
        body: [
          `Jane Jacobs made the classic case for mixture in 1961. She argued that a lively, safe district needs what she called "primary mixed uses" — activities that bring people out at different times of day. If a street has homes, offices, shops, a school and a bar, then it has someone about in the morning, at lunchtime, in the afternoon and late at night. That constant, staggered presence is what keeps it both economically viable and safe.`,
          `Her insight ties mixed use directly to the "eyes on the street" idea: safety and vitality come from people being around for many reasons across the whole day, which only a mixture of uses can provide. A single-use zone concentrates all its activity into one burst and then falls silent; a mixed one spreads activity out, so there is never a dead hour when the street belongs to no one.`,
        ],
      },
      {
        heading: "Convenience and the short walk",
        body: [
          `Mixed use also transforms daily life by putting things within reach. When homes sit above and beside shops, cafés, workplaces and services, many everyday errands become a short walk rather than a car journey. This is the core of the "15-minute city" ideal that has gained ground recently: a neighbourhood where most of what you need for daily life — food, work, school, healthcare, leisure — lies within a quarter-hour on foot or by bike.`,
          `The benefits stack up: less driving, more walking, livelier streets, stronger local businesses, and time saved. None of it is possible under strict single-use zoning, which by design puts your home far from your shops and your shops far from your work, and makes the car compulsory. Mixed use is the precondition for a walkable, convenient neighbourhood.`,
        ],
      },
      {
        heading: "Getting the mix right",
        body: [
          `Mixed use is not simply cramming everything together; the mixture has to be handled with care. Some combinations clash — heavy industry next to bedrooms, loud late-night venues under family flats — and thoughtless mixing can create noise, conflict and nuisance. Good mixed-use design manages these frictions through layout, sound insulation, servicing arrangements and sensible pairing of compatible uses.`,
          `There is also a fairness dimension. Mixed-use regeneration can raise land values and rents, pricing out the very small shops and residents that gave a place its life and mixture in the first place. So the goal is not just any mixture but a durable, inclusive one — a range of uses and a range of price points that keep a neighbourhood genuinely varied rather than polished into sameness. Done well, mixed use is what makes a place feel like a living neighbourhood rather than a zoned machine.`,
        ],
      },
      {
        heading: "The neighbourhood you can walk",
        body: [
          `Think about where you live. If you can stroll to a shop for milk, grab a coffee, and pass homes, a workplace and a pub on the way, you are enjoying mixed use — and the street probably feels alive at most hours. If instead you must drive to a distant supermarket, past nothing but houses, and the nearest shops sit in a park that dies at closing time, you are living in single-use zoning. Notice which streets near you feel busy across the whole day and which fall silent after five; the difference is almost always whether the uses are mixed together or sorted apart.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is mixed use in urban planning?",
        choices: [
          { id: "a", label: "Combining homes, workplaces, shops and leisure in the same area" },
          { id: "b", label: "Separating a city into single-purpose zones" },
          { id: "c", label: "Building only high-rise towers" },
          { id: "d", label: "Reserving land for one industry" },
        ],
        correctChoiceId: "a",
        explanation: "Mixed use piles different functions together so a place has reasons to be active across the whole day, in contrast to single-use zoning.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does single-use zoning tend to produce 'dead' areas?",
        choices: [
          { id: "a", label: "Because each zone is busy only during its own narrow window and empty the rest of the time" },
          { id: "b", label: "Because zones are always too small" },
          { id: "c", label: "Because it uses too many colours on the map" },
          { id: "d", label: "Because people dislike new buildings" },
        ],
        correctChoiceId: "a",
        explanation: "An office district empties at night, a dormitory suburb by day, a retail park after closing — each concentrates activity into one burst and falls silent otherwise.",
      },
      {
        dimension: "reasoning",
        prompt: "How does Jacobs link 'primary mixed uses' to street safety?",
        choices: [
          { id: "a", label: "By arguing that mixture requires more police" },
          { id: "b", label: "By arguing that different uses keep people present at different hours, providing constant 'eyes on the street'" },
          { id: "c", label: "By arguing that empty streets are safest" },
          { id: "d", label: "By arguing that safety comes only from lighting" },
        ],
        correctChoiceId: "b",
        explanation: "Homes, offices, shops and bars each draw people at different times, so a mixed street is never left with a dead hour when no one is watching — safety through staggered presence.",
      },
      {
        dimension: "depth",
        prompt: "How does mixed use relate to the '15-minute city' ideal?",
        choices: [
          { id: "a", label: "It is the precondition for having daily needs within a short walk" },
          { id: "b", label: "It makes commuting by car compulsory" },
          { id: "c", label: "It has nothing to do with walkability" },
          { id: "d", label: "It requires separating homes from shops" },
        ],
        correctChoiceId: "a",
        explanation: "Putting homes near shops, work and services makes errands a short walk — the 15-minute city is impossible under strict single-use zoning, which spreads functions apart and mandates the car.",
      },
      {
        dimension: "reasoning",
        prompt: "What is a genuine risk of mixed-use regeneration that good design must manage?",
        choices: [
          { id: "a", label: "That it makes streets too quiet" },
          { id: "b", label: "That rising land values can price out the small shops and residents who gave a place its mixture" },
          { id: "c", label: "That it always reduces the number of shops" },
          { id: "d", label: "That it eliminates all housing" },
        ],
        correctChoiceId: "b",
        explanation: "Mixed-use regeneration can raise rents and displace the variety it depends on, so the aim is a durable, inclusive mix of uses and price points, not a place polished into sameness.",
      },
    ],
    sources: [
      { label: "Jane Jacobs, The Death and Life of Great American Cities", note: "The classic argument for mixed 'primary uses' and diversity.", type: "Reference", url: "https://en.wikipedia.org/wiki/The_Death_and_Life_of_Great_American_Cities" },
      { label: "Mixed-use development (overview)", note: "Reference on combining functions and the 15-minute city.", type: "Reference", url: "https://en.wikipedia.org/wiki/Mixed-use_development" },
    ],
  },
  {
    concept: "Defensible Space",
    level: "University",
    summary: "spatial design that shapes surveillance, ownership and perceived safety",
    estimatedMinutes: 9,
    deck: "Can the layout of a building make it safer — not by adding guards, but by changing who feels the space is theirs to watch over? Oscar Newman thought so. His theory of defensible space reshaped housing design, and its darker cousin now bristles from spikes and gates across the modern city.",
    keyTerms: [
      { label: "Defensible space", value: "Newman's idea that design can give residents a sense of ownership and natural surveillance." },
      { label: "Natural surveillance", value: "Layouts where people can easily see shared spaces, deterring crime without guards." },
      { label: "Territoriality", value: "The sense that a space belongs to a group who will therefore watch over it." },
      { label: "CPTED", value: "Crime Prevention Through Environmental Design — the broader field Newman helped launch." },
    ],
    sections: [
      {
        heading: "Newman's discovery",
        body: [
          `In 1972 the architect Oscar Newman published Defensible Space, based on a striking observation. Studying public housing in New York, he found that two projects with almost identical populations and densities had very different crime rates — and the difference tracked their design. The safer estate had layouts that gave residents a clear sense of ownership over shared areas and good sightlines over them; the dangerous one had anonymous, unwatched spaces that belonged to no one.`,
          `Newman's conclusion was that physical design influences crime by shaping two things: how much residents feel a space is theirs to control, and how easily they can see what happens in it. Where people feel ownership and can observe, they intervene — a stranger is noticed, an intruder challenged. Where space is anonymous and hidden, no one feels responsible, and trouble goes unwatched.`,
        ],
      },
      {
        heading: "Ownership and eyes",
        body: [
          `Two ideas do the work. The first is territoriality: design that makes it clear a space belongs to a particular group, who will then treat it as theirs and watch over it. A shared garden divided so each cluster of homes has its own defined patch invites care; a vast anonymous lawn shared by hundreds invites neglect. Marking ownership, even symbolically with a low wall or a change of surface, changes behaviour.`,
          `The second is natural surveillance: arranging buildings, windows and paths so that people can easily see shared spaces in the course of everyday life. Entrances overlooked by kitchen windows, well-lit routes with clear sightlines, play areas visible from homes — all mean that ordinary residents, without trying, keep an eye on things. This is Jane Jacobs's "eyes on the street" turned into a design method: safety as a by-product of visibility.`,
        ],
      },
      {
        heading: "From theory to a whole field",
        body: [
          `Newman's work seeded a broader discipline: Crime Prevention Through Environmental Design, or CPTED, which applies these principles to all kinds of places, from car parks to schools. Its toolkit is now familiar: good lighting, clear sightlines, defined boundaries, controlled access, and designs that encourage legitimate use so that spaces are occupied by people with a reason to be there.`,
          `The appeal is obvious — shaping behaviour through layout rather than through constant policing. But the theory has always been contested. Critics point out that Newman's early studies were correlational, that social factors (poverty, management, community) matter enormously, and that design alone cannot fix problems rooted elsewhere. Defensible space is a real effect, but it is one influence among many, not a magic switch.`,
        ],
      },
      {
        heading: "The hostile turn",
        body: [
          `Defensible space has a darker descendant. The same logic — control space to exclude trouble — can slide from fostering community surveillance into hard exclusion: gated communities, high fences, hostile "anti-homeless" details, and layouts designed to keep certain people out rather than to help residents watch over their own space. Newman's benign vision of neighbours caring for a shared courtyard is a long way from spikes under a bridge.`,
          `This is the ethical tension at the heart of the idea. Design that makes a space feel owned and watched can build community and genuine safety, or it can fortify privilege and criminalise presence, depending on who is included and who is designed out. The question to ask of any "safe by design" space is the same one asked of public space generally: safe for whom, and at whose expense? A courtyard that neighbours protect together is defensible space at its best; a moat of spikes and cameras that pushes the vulnerable elsewhere is its failure mode.`,
        ],
      },
      {
        heading: "Your own building's layout",
        body: [
          `You can read defensible space in the buildings you use daily. Think about which stairwells or car parks feel unsafe: usually the anonymous, hidden ones that no window overlooks and no one seems to own. Compare a block where each front door faces a shared, overlooked courtyard — where neighbours notice a stranger — with a maze of blind corridors and unwatched lifts that belong to nobody. Then notice the harder edge: the gates, spikes and dividers designed less to help residents watch their space than to keep certain people out. Both are Newman's idea at work, and telling the community-building version from the exclusionary one is the whole ethical skill.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What did Oscar Newman argue in Defensible Space?",
        choices: [
          { id: "a", label: "That crime is unaffected by building design" },
          { id: "b", label: "That design influences crime by shaping residents' sense of ownership and their ability to watch shared space" },
          { id: "c", label: "That only more police reduce crime" },
          { id: "d", label: "That tall buildings are always safest" },
        ],
        correctChoiceId: "b",
        explanation: "Newman found that estates with similar populations had different crime rates depending on design — safer where layouts gave residents ownership and clear sightlines over shared areas.",
      },
      {
        dimension: "depth",
        prompt: "What is 'natural surveillance'?",
        choices: [
          { id: "a", label: "Hidden CCTV monitoring" },
          { id: "b", label: "Arranging buildings and paths so people can easily see shared spaces in everyday life" },
          { id: "c", label: "Employing security guards at all times" },
          { id: "d", label: "Fencing off all public areas" },
        ],
        correctChoiceId: "b",
        explanation: "Natural surveillance means overlooked entrances, clear sightlines and visible routes, so ordinary residents keep an eye on shared space without trying — 'eyes on the street' as a design method.",
      },
      {
        dimension: "reasoning",
        prompt: "How does 'territoriality' reduce neglect of shared space?",
        choices: [
          { id: "a", label: "By making it clear a space belongs to a group who will then watch over it" },
          { id: "b", label: "By removing all boundaries between spaces" },
          { id: "c", label: "By making spaces as large and anonymous as possible" },
          { id: "d", label: "By banning residents from shared areas" },
        ],
        correctChoiceId: "a",
        explanation: "When design marks a space as belonging to a particular group — even symbolically — people treat it as theirs and care for it, whereas a vast anonymous shared area invites neglect.",
      },
      {
        dimension: "reasoning",
        prompt: "Why do critics say defensible space is not a 'magic switch' for crime?",
        choices: [
          { id: "a", label: "Because design has no effect at all" },
          { id: "b", label: "Because social factors like poverty and management matter enormously, and early studies were only correlational" },
          { id: "c", label: "Because crime cannot be studied" },
          { id: "d", label: "Because Newman never did any research" },
        ],
        correctChoiceId: "b",
        explanation: "Design is one influence among many; poverty, management and community shape crime too, and Newman's early evidence was correlational — so layout alone cannot fix problems rooted elsewhere.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the ethical tension in how defensible-space logic is applied?",
        choices: [
          { id: "a", label: "It can build genuine community safety or fortify privilege and criminalise presence, depending on who is included" },
          { id: "b", label: "It always makes cities uglier" },
          { id: "c", label: "It only works in warm climates" },
          { id: "d", label: "It has no downsides at all" },
        ],
        correctChoiceId: "a",
        explanation: "The same 'control space' logic can foster neighbours caring for a shared courtyard or slide into gates and hostile spikes that exclude the vulnerable — so the key question is 'safe for whom?'",
      },
    ],
    sources: [
      { label: "Oscar Newman, Defensible Space (1972)", note: "The foundational study linking housing layout to crime and surveillance.", type: "Reference", url: "https://en.wikipedia.org/wiki/Defensible_space_(fortification)" },
      { label: "Crime Prevention Through Environmental Design", note: "Reference on the broader CPTED field and its principles.", type: "Reference", url: "https://en.wikipedia.org/wiki/Crime_prevention_through_environmental_design" },
    ],
  },
  {
    concept: "Urban Density",
    level: "A-level",
    summary: "concentration of people, buildings and activity in a place",
    estimatedMinutes: 8,
    deck: "Density is one of the most misunderstood words in city-making. People hear it and picture grim tower blocks and crowding. But some of the most beloved places on earth are extremely dense — and the real question is never how many people, but how well the density is designed.",
    keyTerms: [
      { label: "Density", value: "The concentration of people, homes or activity in a given area of a city." },
      { label: "Crowding vs density", value: "Crowding is a felt lack of space; density is a measurable concentration — they are not the same." },
      { label: "Sprawl", value: "Low-density, car-dependent spreading of development across the landscape." },
      { label: "Critical mass", value: "The population needed nearby to support shops, transit and street life." },
    ],
    sections: [
      {
        heading: "Density is not crowding",
        body: [
          `The single most important thing to understand about density is that it is not the same as crowding. Density is a measurable fact: how many people or homes occupy a given area. Crowding is a feeling: the sense of being cramped and short of space. The two often come apart. Paris and Barcelona are among the densest cities in the world, yet they feel gracious, not oppressive, because their density is beautifully designed — generous streets, human-scale blocks, light-filled apartments.`,
          `Meanwhile, a poorly designed tower estate can feel crowded at a much lower density, because the space around it is bleak and unusable. So the reflexive fear of density — that packing people in must mean misery — confuses a design failure with density itself. The right question is not "how dense?" but "how good is the density?"`,
        ],
      },
      {
        heading: "What density makes possible",
        body: [
          `Density is not just tolerable; it is productive. A concentration of people within walking distance creates the "critical mass" that street life depends on. Shops, cafés, clinics, schools and public transport all need enough customers nearby to survive; spread those same people thinly across low-density sprawl and the corner shop closes, the bus route becomes uneconomic, and everything requires a car.`,
          `This is why dense places tend to be walkable and full of amenities, while sprawling ones tend to be car-dependent and thin on street life. Density supports the frequent bus, the local baker, the busy square, the chance encounter. It also uses land and infrastructure efficiently — shorter pipes, roads and cables per person — and tends to have a smaller environmental footprint per resident. Far from being a problem to minimise, a well-designed density is the engine of urban vitality.`,
        ],
      },
      {
        heading: "The costs of spreading out",
        body: [
          `The opposite of density is sprawl: low-density development spreading ever outward, typically car-dependent, with homes in one place, shops in another, and jobs somewhere else again. Sprawl has real attractions — space, gardens, quiet — but it carries heavy hidden costs: long commutes, car dependence, expensive infrastructure stretched thin, loss of countryside, and social isolation as everything worth doing requires a drive.`,
          `Sprawl also tends to be self-reinforcing. Once a place is built at low density around the car, it cannot easily support walking or transit, which locks in more driving, which pushes destinations further apart. Breaking the cycle usually means adding density — filling in, building up, bringing homes and shops closer together — which is why "gentle densification" of existing suburbs has become a central strategy in sustainable planning.`,
        ],
      },
      {
        heading: "Designing density well",
        body: [
          `Because density can be humane or grim, the craft lies in the design. Good dense places share features: buildings that meet the street with active ground floors, enough light and greenery, human-scale blocks you can walk around, a mix of uses, and quality public space to compensate for smaller private space. The classic European perimeter block — mid-rise buildings around a shared courtyard — achieves high density while keeping streets lively and homes light.`,
          `Getting it wrong produces the density people fear: towers in windswept parkland, no street life, no amenities within reach, poor light and long lift-dependent corridors. The lesson of a century of housing is that height and numbers alone decide nothing; layout, ground floor, public space and mix decide everything. Density done well is the foundation of a great city; density done badly discredits the whole idea.`,
        ],
      },
      {
        heading: "Your favourite dense place",
        body: [
          `Think of a place you love to visit — an old European quarter, a lively neighbourhood, a bustling market street. Almost certainly it is dense: lots of people, homes and activity packed close together, which is exactly why it has good cafés, frequent transport and a sense of life. Now think of a low-density retail-and-cul-de-sac suburb where you must drive for everything and the streets are empty. The contrast is the whole argument: it is rarely density itself that makes a place unpleasant, but bad design. The vibrant places you are drawn to are usually proof that packing people in, done well, is what makes a city worth being in.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is the key distinction between density and crowding?",
        choices: [
          { id: "a", label: "They are exactly the same thing" },
          { id: "b", label: "Density is a measurable concentration; crowding is a felt lack of space, and they often come apart" },
          { id: "c", label: "Density only applies to tall buildings" },
          { id: "d", label: "Crowding is measurable but density is not" },
        ],
        correctChoiceId: "b",
        explanation: "Density is how many people occupy an area; crowding is the feeling of being cramped. Dense Paris feels gracious, while a poorly designed low-density estate can feel crowded — proving the two differ.",
      },
      {
        dimension: "reasoning",
        prompt: "Why do dense places tend to be walkable and full of amenities?",
        choices: [
          { id: "a", label: "Because density provides the critical mass of nearby people that shops and transit need to survive" },
          { id: "b", label: "Because dense places ban cars entirely" },
          { id: "c", label: "Because amenities are randomly distributed" },
          { id: "d", label: "Because low density is cheaper to serve" },
        ],
        correctChoiceId: "a",
        explanation: "Enough people within walking distance lets shops, cafés and bus routes survive; spread the same people across sprawl and the corner shop closes and everything needs a car.",
      },
      {
        dimension: "depth",
        prompt: "What are the hidden costs of sprawl?",
        choices: [
          { id: "a", label: "Long commutes, car dependence, expensive thinly-stretched infrastructure and social isolation" },
          { id: "b", label: "Too much street life" },
          { id: "c", label: "Excessive public transport" },
          { id: "d", label: "There are no costs to sprawl" },
        ],
        correctChoiceId: "a",
        explanation: "Low-density, car-dependent spreading carries heavy hidden costs — long commutes, infrastructure stretched thin, lost countryside, and isolation as everything requires a drive.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is sprawl described as self-reinforcing?",
        choices: [
          { id: "a", label: "Because low density can't support walking or transit, which locks in more driving and pushes destinations further apart" },
          { id: "b", label: "Because it naturally becomes denser over time" },
          { id: "c", label: "Because people always prefer it" },
          { id: "d", label: "Because it reduces the need for roads" },
        ],
        correctChoiceId: "a",
        explanation: "Built around the car, sprawl cannot sustain walking or transit, which entrenches driving and spreads destinations even further — a cycle usually broken only by adding density.",
      },
      {
        dimension: "depth",
        prompt: "What decides whether density feels humane or grim?",
        choices: [
          { id: "a", label: "The height and number of people alone" },
          { id: "b", label: "The design — active ground floors, light, human-scale blocks, mixed uses and quality public space" },
          { id: "c", label: "The colour of the buildings" },
          { id: "d", label: "Whether cars are allowed" },
        ],
        correctChoiceId: "b",
        explanation: "Height and numbers decide nothing on their own; layout, ground floor, light, mix and public space decide everything — which is why dense Barcelona delights while towers in windswept parkland do not.",
      },
    ],
    sources: [
      { label: "Urban density (overview)", note: "Reference on density, sprawl and their effects on city life.", type: "Reference", url: "https://en.wikipedia.org/wiki/Urban_density" },
      { label: "Jan Gehl, Cities for People", note: "On designing dense places that remain humane and walkable.", type: "Reference", url: "https://islandpress.org/books/cities-people" },
    ],
  },
  {
    concept: "Circulation",
    level: "GCSE",
    summary: "the routes people take through buildings and cities",
    estimatedMinutes: 7,
    deck: "Circulation is the choreography of movement: the corridors, stairs, streets and paths that carry people through a place. Get it right and you never think about it; get it wrong and you are lost in a hospital, stuck in a bottleneck, or trapped in a shop you cannot find the exit of.",
    keyTerms: [
      { label: "Circulation", value: "The system of routes — corridors, stairs, streets — along which people move through a space." },
      { label: "Wayfinding", value: "How people orient themselves and find their route, aided or hindered by design." },
      { label: "Bottleneck", value: "A point where a route narrows and movement backs up." },
      { label: "Legibility", value: "How easily the layout of a place can be read and navigated." },
    ],
    sections: [
      {
        heading: "The movement system",
        body: [
          `Every building and every city has a circulation system: the network of routes along which people move. In a building these are the corridors, stairs, lifts, ramps and lobbies; in a city, the streets, paths, junctions and transit lines. Circulation is often invisible to users when it works, but it is one of the first things a designer plans, because how people move through a place shapes almost everything else about how it functions.`,
          `Good circulation does several things at once: it gets people efficiently from A to B, it helps them understand where they are, and it manages the flow so that busy points do not jam. A well-circulated space feels effortless to move through. A badly circulated one produces the familiar miseries of getting lost, doubling back, queuing at a pinch point, or arriving somewhere with no idea how you got there.`,
        ],
      },
      {
        heading: "Reading a space: wayfinding",
        body: [
          `A crucial job of circulation is wayfinding — helping people work out where they are and how to get where they are going. Good wayfinding is mostly built into the layout itself: clear sightlines, logical routes, landmarks, and a structure you can hold in your head. Signs help, but a place that needs a sign at every turn has usually failed at a deeper level. The best buildings guide you almost without words.`,
          `The urban planner Kevin Lynch, in The Image of the City (1960), studied how people build mental maps of cities, identifying elements like paths, edges, districts, nodes and landmarks that make a place "legible" — easy to read and remember. A legible layout lets you navigate confidently; an illegible one — a hospital of identical corridors, a car park of indistinguishable floors — leaves you anxious and dependent on signs, because there is no underlying order to grasp.`,
        ],
      },
      {
        heading: "Flow, pause and bottleneck",
        body: [
          `Circulation also manages the rhythm of movement: where people flow, where they pause, and where they get stuck. Designers think about capacity — is a corridor or staircase wide enough for the crowds it must carry at peak times? A bottleneck, where a route narrows below the demand placed on it, causes queues, frustration and, in emergencies, real danger. Much of the design of stations, stadiums and airports is about avoiding these choke points.`,
          `Equally important is designing for the pause. People do not only move; they stop to look, wait, meet or decide. A good circulation design provides room for pausing out of the flow — a widened spot by a lift, a seating nook off a corridor, a plaza beside a busy street — so that stationary people do not obstruct moving ones. Managing the interplay of movement and stillness is one of the subtler arts of the field.`,
        ],
      },
      {
        heading: "Routes shape behaviour",
        body: [
          `Circulation does more than move people; it shapes what they do. Where you route people determines what they see, whom they meet, and what they might buy. This is exploited everywhere: supermarkets place staples like milk at the back so you walk past temptation; IKEA famously channels visitors along a single winding path past the whole showroom; museums sequence galleries to tell a story in the right order.`,
          `The same power carries responsibility. Circulation that forces everyone past the tills can feel manipulative; circulation that separates people — grand routes for some, back stairs for others — can entrench hierarchy. And circulation must always serve everyone: step-free routes, lifts and ramps are not optional extras but the difference between a building the disabled, elderly and pram-pushing can use and one that quietly excludes them. How you let people move is never a neutral, purely technical choice.`,
        ],
      },
      {
        heading: "Lost in the hospital",
        body: [
          `You know good and bad circulation from the inside. Think of a hospital or multi-storey car park where every corridor and floor looks the same and you cannot find your way out — that is illegible circulation with poor wayfinding. Compare a well-designed station where the route to your platform is obvious the moment you enter, or a shop whose winding path somehow leads you past everything before the exit. Notice the crush at a narrow doorway when a crowd leaves at once — a bottleneck — and the relief of a widened space where you can stop to check your phone without being shoved. Every one of those experiences is circulation, designed well or badly, steering how you move.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is 'circulation' in architecture and urbanism?",
        choices: [
          { id: "a", label: "The heating and ventilation system" },
          { id: "b", label: "The network of routes along which people move through a space" },
          { id: "c", label: "The flow of money through a business" },
          { id: "d", label: "The rotation of staff between departments" },
        ],
        correctChoiceId: "b",
        explanation: "Circulation is the system of corridors, stairs, streets and paths that carry people through a building or city — one of the first things a designer plans because it shapes how everything functions.",
      },
      {
        dimension: "depth",
        prompt: "What is 'wayfinding'?",
        choices: [
          { id: "a", label: "Helping people work out where they are and how to reach their destination" },
          { id: "b", label: "Measuring the width of corridors" },
          { id: "c", label: "The study of building materials" },
          { id: "d", label: "Counting how many people enter a building" },
        ],
        correctChoiceId: "a",
        explanation: "Wayfinding is how people orient and navigate. Good wayfinding is built into the layout — clear sightlines, logical routes, landmarks — so a place guides you almost without signs.",
      },
      {
        dimension: "reasoning",
        prompt: "According to Kevin Lynch, what makes a city 'legible'?",
        choices: [
          { id: "a", label: "Having many signs on every corner" },
          { id: "b", label: "Clear elements like paths, edges, districts, nodes and landmarks that people can build into a mental map" },
          { id: "c", label: "Being as large as possible" },
          { id: "d", label: "Having identical repeated corridors" },
        ],
        correctChoiceId: "b",
        explanation: "Lynch found people navigate by mental maps built from paths, edges, districts, nodes and landmarks. A legible layout has an underlying order you can grasp; an illegible one leaves you dependent on signs.",
      },
      {
        dimension: "reasoning",
        prompt: "Why do designers of stations and stadiums worry about bottlenecks?",
        choices: [
          { id: "a", label: "Because a route narrowing below demand causes queues, frustration and, in emergencies, real danger" },
          { id: "b", label: "Because narrow routes are more attractive" },
          { id: "c", label: "Because bottlenecks save space" },
          { id: "d", label: "Because they slow people down usefully" },
        ],
        correctChoiceId: "a",
        explanation: "A bottleneck is a point narrower than the flow it must carry, backing movement up. In crowded venues this causes queues and can become dangerous, so avoiding choke points is central to their design.",
      },
      {
        dimension: "reasoning",
        prompt: "How does circulation shape behaviour, and why is that a responsibility?",
        choices: [
          { id: "a", label: "It determines what people see and do, so it can manipulate, exclude, or must instead serve everyone with step-free access" },
          { id: "b", label: "It has no effect on behaviour at all" },
          { id: "c", label: "It only affects how fast people walk" },
          { id: "d", label: "It is a purely technical choice with no ethical side" },
        ],
        correctChoiceId: "a",
        explanation: "Routing people past the tills or along a single winding path shapes what they buy; separate routes can entrench hierarchy; and step-free access decides whether a building includes or excludes — so circulation is never neutral.",
      },
    ],
    sources: [
      { label: "Kevin Lynch, The Image of the City", note: "The classic study of legibility, mental maps and how people navigate cities.", type: "Reference", url: "https://en.wikipedia.org/wiki/The_Image_of_the_City" },
      { label: "Circulation in architecture (overview)", note: "Reference on movement systems, wayfinding and flow.", type: "Reference", url: "https://en.wikipedia.org/wiki/Circulation_(architecture)" },
    ],
  },
  {
    concept: "Gentrification",
    level: "University",
    summary: "neighbourhood change involving reinvestment, rising costs and displacement",
    estimatedMinutes: 9,
    deck: "A rundown neighbourhood gets cafés, cyclists and fresh paint — and then its long-time residents can no longer afford to live there. Gentrification is the process where visible improvement and quiet displacement arrive together, and untangling the good from the harm is one of the hardest problems in urban studies.",
    keyTerms: [
      { label: "Gentrification", value: "The influx of wealthier residents and investment into a poorer area, raising costs and displacing existing residents." },
      { label: "Displacement", value: "The forcing out of existing residents and businesses by rising rents and prices." },
      { label: "Rent gap", value: "Neil Smith's idea that investment flows in when a place's actual rent falls well below its potential." },
      { label: "Reinvestment", value: "The flow of money into property and business in a previously neglected area." },
    ],
    sections: [
      {
        heading: "Naming the process",
        body: [
          `The term gentrification was coined in 1964 by the sociologist Ruth Glass, describing how middle-class newcomers were moving into working-class districts of London, renovating houses, and driving up prices until the original residents were pushed out. She named it after the "gentry", with a deliberate edge: the arrival of the better-off remade the neighbourhood in their image and displaced those who had made it home.`,
          `At its core, gentrification is the movement of wealthier people and investment into a previously poorer, often neglected area. On the surface this looks purely positive — buildings restored, new shops, cleaner streets, falling crime. The problem is what comes with it: as the area becomes desirable, rents and prices rise, and the existing lower-income residents and small businesses, who cannot keep pace, are gradually forced out. Improvement and displacement are two faces of the same process.`,
        ],
      },
      {
        heading: "Why the money moves in",
        body: [
          `Why does investment suddenly flood a long-neglected area? The geographer Neil Smith offered an influential answer: the "rent gap". When a neighbourhood is run down, its property earns far less than it potentially could if redeveloped. As that gap between actual and potential value widens, it becomes profitable for developers and landlords to buy cheap, upgrade, and capture the difference. Gentrification, in this view, is driven less by the tastes of hipsters than by the logic of capital seeking undervalued land.`,
          `This reframes gentrification as a structural economic process, not just a cultural one. The cafés, galleries and renovated flats are the visible symptoms; the engine underneath is the flow of investment into places where the rent gap has grown large enough to make redevelopment pay. Understanding this helps explain why gentrification follows patterns — spreading outward from already-expensive areas, targeting well-connected districts — rather than appearing at random.`,
        ],
      },
      {
        heading: "Who wins and who loses",
        body: [
          `Gentrification produces real winners and real losers, which is why it is so contested. Newcomers gain an attractive, improving neighbourhood. Property owners see their assets soar. The city gains tax revenue and reduced dereliction. But existing tenants face rising rents they cannot afford; local shops serving the old community are replaced by ones serving the new; and long-standing social networks — the web of neighbours, family and familiarity that made a place home — are broken as people are scattered.`,
          `The losses are easy to overlook because they are dispersed and invisible, while the gains are concentrated and photogenic. A gleaming new high street is a great headline; the family priced out to a distant suburb, cut off from their community and support, does not appear in the picture. Serious analysis of gentrification insists on counting both — asking not just "has the area improved?" but "improved for whom, and at whose expense?"`,
        ],
      },
      {
        heading: "Can you get the good without the harm?",
        body: [
          `The hard policy question is whether a neighbourhood can be improved without displacing the people who live there — regeneration without expulsion. Some argue that any reinvestment inevitably raises costs and pushes out the poor, so the choice is between neglect and displacement. Others argue that the harm is not inevitable but a policy failure, and can be softened.`,
          `The tools are known if rarely used at scale: protecting and building genuinely affordable housing, rent stabilisation, support for existing small businesses, and community ownership of land so that rising value benefits residents rather than displacing them. The goal is to capture gentrification's benefits — investment, safety, amenity — while shielding existing residents from its costs. Whether that balance can hold, or whether improvement and displacement are ultimately inseparable, remains one of the central debates in urban policy.`,
        ],
      },
      {
        heading: "The coffee-shop signal",
        body: [
          `You can watch gentrification happen in real time. A cheap, slightly rough neighbourhood gets its first artisan coffee shop, then a cluster of galleries and bars, then estate agents' boards multiply and rents climb; a few years on, the launderette and the greasy spoon are gone, and so are many of the people who used them. If you have ever moved somewhere cheap because it was affordable and "up and coming", you were part of the process — not as a villain, but as one small current in the flow of money and people that the theory describes. Noticing who arrives and who quietly disappears from a changing neighbourhood is the whole point of learning to see it.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What does gentrification fundamentally involve?",
        choices: [
          { id: "a", label: "Wealthier residents and investment moving in, raising costs and displacing existing residents" },
          { id: "b", label: "A neighbourhood becoming poorer over time" },
          { id: "c", label: "Simply cleaning the streets with no other effect" },
          { id: "d", label: "Government building new towns from scratch" },
        ],
        correctChoiceId: "a",
        explanation: "Coined by Ruth Glass in 1964, gentrification is the influx of the better-off into a poorer area — bringing visible improvement and, inseparably, the displacement of existing residents.",
      },
      {
        dimension: "reasoning",
        prompt: "What does Neil Smith's 'rent gap' explain?",
        choices: [
          { id: "a", label: "Why hipsters have particular tastes in coffee" },
          { id: "b", label: "Why investment flows in when a rundown area's actual rent falls far below its potential value" },
          { id: "c", label: "Why rents never change" },
          { id: "d", label: "Why cities should ban redevelopment" },
        ],
        correctChoiceId: "b",
        explanation: "The rent gap is the difference between what a neglected property earns and what it could earn if redeveloped. When the gap grows large enough, buying cheap and upgrading becomes profitable — a structural driver of gentrification.",
      },
      {
        dimension: "reasoning",
        prompt: "Why are gentrification's losses often overlooked?",
        choices: [
          { id: "a", label: "Because they do not really exist" },
          { id: "b", label: "Because they are dispersed and invisible while the gains are concentrated and photogenic" },
          { id: "c", label: "Because displaced people usually return quickly" },
          { id: "d", label: "Because only the wealthy are ever affected" },
        ],
        correctChoiceId: "b",
        explanation: "A gleaming new high street makes a great headline, but the family priced out to a distant suburb, cut off from their community, does not appear in the picture — the harms are scattered and hidden.",
      },
      {
        dimension: "depth",
        prompt: "Why is gentrification described as a structural economic process, not just a cultural one?",
        choices: [
          { id: "a", label: "Because it is driven by the flow of capital toward undervalued land, with cafés and galleries as symptoms" },
          { id: "b", label: "Because it depends only on individual taste" },
          { id: "c", label: "Because it happens completely at random" },
          { id: "d", label: "Because culture has no role at all" },
        ],
        correctChoiceId: "a",
        explanation: "Smith's rent-gap analysis frames the visible cultural changes as symptoms of the underlying engine: investment seeking places where redevelopment has become profitable — which is why gentrification follows predictable patterns.",
      },
      {
        dimension: "reasoning",
        prompt: "What tools are proposed to capture gentrification's benefits while limiting displacement?",
        choices: [
          { id: "a", label: "Affordable housing, rent stabilisation, support for local businesses and community land ownership" },
          { id: "b", label: "Removing all existing residents first" },
          { id: "c", label: "Banning any new shops" },
          { id: "d", label: "Letting rents rise as fast as possible" },
        ],
        correctChoiceId: "a",
        explanation: "The known, if rarely scaled, tools aim to keep investment and amenity while shielding residents — protecting affordable housing, stabilising rents, supporting small businesses and community land ownership so rising value benefits residents.",
      },
    ],
    sources: [
      { label: "Gentrification (overview)", note: "Reference on the process, from Ruth Glass's coinage to displacement debates.", type: "Reference", url: "https://en.wikipedia.org/wiki/Gentrification" },
      { label: "Neil Smith and the rent gap", note: "Reference on the economic theory of why reinvestment targets certain areas.", type: "Reference", url: "https://en.wikipedia.org/wiki/Rent_gap" },
    ],
  },
  {
    concept: "Third Places",
    level: "A-level",
    summary: "informal social settings outside home and work",
    estimatedMinutes: 8,
    deck: "Between the private world of home and the demanding world of work lies a third kind of place: the café, the pub, the barbershop, the park bench where people simply gather. Ray Oldenburg argued these 'third places' are the hidden infrastructure of community — and that losing them is quietly making us lonelier.",
    keyTerms: [
      { label: "Third place", value: "Oldenburg's term for informal public gathering spots that are neither home (first) nor work (second)." },
      { label: "Levellers", value: "Third places treat everyone as equals, regardless of status outside." },
      { label: "Social infrastructure", value: "The shared spaces that enable community and connection to form." },
      { label: "The great good place", value: "Oldenburg's phrase for the welcoming, sociable heart of community life." },
    ],
    sections: [
      {
        heading: "The place that is neither home nor work",
        body: [
          `In his 1989 book The Great Good Place, the sociologist Ray Oldenburg named a category of space we all use but rarely think about. Your home is your "first place"; your workplace is your "second place". The "third place" is everywhere else you go to be sociable without obligation: the café, the pub, the barbershop, the local park, the corner shop, the community hall. These are informal public settings where people gather, talk and belong, outside the roles of family and job.`,
          `Oldenburg argued that third places are not trivial leisure but essential social infrastructure. They are where community actually happens — where you encounter neighbours and strangers, where weak ties form and local information flows, where a lonely person can be among others without having to perform. A society rich in third places, he claimed, is one where connection comes easily; a society without them leaves people isolated between the pressures of home and work.`,
        ],
      },
      {
        heading: "What makes a third place work",
        body: [
          `Oldenburg identified features that good third places share. They are neutral ground, where no one is host or guest and people can come and go freely. They are levellers: your status at work or your wealth does not matter at the bar or in the queue; everyone is treated as an equal, which lets unlikely friendships form. Conversation is the main activity. They keep a low profile — plain, unpretentious, comfortable rather than glamorous. And crucially, they have their "regulars", whose presence sets the welcoming tone.`,
          `Above all, a third place feels like a "home away from home": somewhere you can relax, be yourself, and be recognised without the demands of either domestic life or the office. The mood is playful and warm. You go not to accomplish anything in particular but to be there — and that apparent purposelessness is exactly the point. The value is the low-stakes, repeated, face-to-face contact that slowly weaves people into a community.`,
        ],
      },
      {
        heading: "The quiet crisis",
        body: [
          `Oldenburg's argument gained force because third places have been under pressure for decades. Car-dependent suburbs built around single-use zoning often have nowhere to gather within walking distance. The decline of pubs, local shops and community venues removes gathering spots. Longer working hours and screen-based leisure keep people at home. The result, many argue, is a thinning of the informal social fabric — fewer casual encounters, weaker local ties, and rising loneliness.`,
          `The sociologist Robert Putnam documented a related decline in American community life in Bowling Alone (2000), and the theme has only sharpened since. When the places that used to hold casual public life disappear, connection does not simply move elsewhere; often it just diminishes. This is why urban designers increasingly treat third places not as optional amenities but as social infrastructure to be protected and provided, as vital to a healthy community as roads and pipes are to a functioning one.`,
        ],
      },
      {
        heading: "Designing for gathering",
        body: [
          `If third places matter, they can be planned for — or planned away. Walkable, mixed-use neighbourhoods naturally throw up third places, because there are cafés, shops and squares within reach and reasons to linger. Car-oriented sprawl tends to eliminate them, replacing the sociable high street with drive-to boxes you enter and leave alone. Public investment in libraries, parks, community centres and welcoming public space is, in effect, investment in the settings where community can form.`,
          `The digital age complicates the picture. Some argue online communities are the new third places; others counter that a screen cannot fully replace the embodied, unplanned, face-to-face contact that Oldenburg described — the nod from a regular, the overheard conversation, the ease of simply being physically among others. Either way, the concept endures because it names something real and increasingly scarce: the everyday, low-pressure places where belonging is built.`,
        ],
      },
      {
        heading: "Your own great good place",
        body: [
          `You probably have a third place, even if you have never called it that: the café where the staff know your order, the pub where you catch up with friends, the gym, the park, the barber, the library. Notice how different it feels from both home and work — no chores, no boss, just easy company and the comfort of being recognised. Then notice how much poorer a neighbourhood feels when it has none: nowhere to go, nowhere to bump into people, everyone shuttling between house and job by car. Protecting the places where you can simply be among others, with nothing to achieve, turns out to be one of the quiet foundations of a life that does not feel lonely.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is a 'third place' in Oldenburg's sense?",
        choices: [
          { id: "a", label: "A person's third home" },
          { id: "b", label: "An informal public gathering spot that is neither home (first) nor work (second)" },
          { id: "c", label: "The third floor of a building" },
          { id: "d", label: "A backup workplace" },
        ],
        correctChoiceId: "b",
        explanation: "Third places — cafés, pubs, barbershops, parks — are the informal settings, outside home and work, where people gather sociably and community forms.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does Oldenburg call third places 'levellers'?",
        choices: [
          { id: "a", label: "Because they are always on flat ground" },
          { id: "b", label: "Because status and wealth from outside do not matter there, so everyone is treated as an equal" },
          { id: "c", label: "Because they charge everyone the same price" },
          { id: "d", label: "Because they are run by the government" },
        ],
        correctChoiceId: "b",
        explanation: "In a good third place your job title or wealth does not matter; everyone is on equal footing, which is what lets unlikely friendships and easy conversation form.",
      },
      {
        dimension: "depth",
        prompt: "Why does Oldenburg call third places 'social infrastructure' rather than mere leisure?",
        choices: [
          { id: "a", label: "Because they are where community actually forms through casual, repeated contact" },
          { id: "b", label: "Because they are physically built like roads" },
          { id: "c", label: "Because they are always free to enter" },
          { id: "d", label: "Because they replace the need for homes" },
        ],
        correctChoiceId: "a",
        explanation: "Third places host the low-stakes, repeated, face-to-face encounters — with neighbours and strangers — that weave people into a community, making them essential infrastructure for connection.",
      },
      {
        dimension: "reasoning",
        prompt: "Why are third places said to be in decline?",
        choices: [
          { id: "a", label: "Because people prefer to socialise at work" },
          { id: "b", label: "Because car-dependent zoning, closing pubs and shops, longer hours and screen leisure remove gathering spots" },
          { id: "c", label: "Because there are now too many cafés" },
          { id: "d", label: "Because loneliness has disappeared" },
        ],
        correctChoiceId: "b",
        explanation: "Sprawl with nowhere to gather within walking distance, the loss of pubs and local shops, longer working hours and home-based screen leisure have all thinned the informal social fabric — echoing Putnam's Bowling Alone.",
      },
      {
        dimension: "depth",
        prompt: "How does neighbourhood design affect third places?",
        choices: [
          { id: "a", label: "Walkable, mixed-use areas foster them while car-oriented sprawl tends to eliminate them" },
          { id: "b", label: "Design has no effect on where people gather" },
          { id: "c", label: "Only rural areas can have third places" },
          { id: "d", label: "Third places only exist online now" },
        ],
        correctChoiceId: "a",
        explanation: "Mixed-use, walkable neighbourhoods naturally generate third places with cafés and squares within reach, whereas drive-to sprawl replaces the sociable high street with boxes you enter and leave alone.",
      },
    ],
    sources: [
      { label: "Ray Oldenburg, The Great Good Place", note: "The foundational account of third places and their role in community.", type: "Reference", url: "https://en.wikipedia.org/wiki/The_Great_Good_Place_(book)" },
      { label: "Robert Putnam, Bowling Alone", note: "On the decline of community connection and social capital.", type: "Reference", url: "https://en.wikipedia.org/wiki/Bowling_Alone" },
    ],
  },
];

export const architectureUrbanismLessons = buildAuthoredLessons(
  "architecture-urbanism",
  architectureUrbanism,
);
