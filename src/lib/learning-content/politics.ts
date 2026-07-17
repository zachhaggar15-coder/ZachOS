import { buildAuthoredLessons, type AuthoredLesson } from "./types";

// Ten hand-written Politics lessons: researched, concept-specific prose with
// named thinkers and real distinctions, each closing on an everyday example,
// plus genuine recall quizzes.
const politics: AuthoredLesson[] = [
  {
    concept: "Hegemony",
    level: "University",
    summary: "why the ruled consent to arrangements that do not serve them",
    estimatedMinutes: 9,
    deck: "Gramsci's question was why the revolution never came. Marx had predicted it; the conditions were there; the workers did not rise. His answer, written from a fascist prison, was that domination in advanced societies runs mainly through consent rather than force — and that the consent is manufactured in places nobody thinks of as political.",
    keyTerms: [
      { label: "Hegemony", value: "Rule secured through consent, where the dominant group's worldview is accepted as ordinary common sense." },
      { label: "Common sense", value: "Gramsci's term for the incoherent, inherited assumptions through which people interpret their situation." },
      { label: "War of position", value: "The long struggle to shift culture and institutions, as against a frontal seizure of the state." },
      { label: "Organic intellectual", value: "A thinker who articulates and organises the worldview of a class from within it." },
    ],
    sections: [
      {
        heading: "The question fascism posed",
        body: [
          `Antonio Gramsci wrote his Prison Notebooks between 1929 and 1935, imprisoned by Mussolini's regime, and the problem driving them was a failure of prediction. Orthodox Marxism held that capitalism's contradictions would produce revolution; instead the West produced stable capitalist democracies and, in Italy, mass enthusiasm for fascism. Workers had not merely failed to revolt — many had actively supported a movement against their material interests. Coercion could not explain this, because a regime that depended purely on force would need a policeman for everyone.`,
          `Gramsci's answer separated two modes of rule. Domination is coercion — the army, the courts, the prison he was sitting in. Hegemony is leadership secured through consent, where subordinate groups accept the dominant group's account of how the world works, not because they are deceived by a lie but because that account has become the ordinary furniture of thought. His crucial claim is that in advanced societies the second does most of the work, and the first is held in reserve for those the second failed on.`,
        ],
      },
      {
        heading: "Where consent is manufactured",
        body: [
          `The consent is not produced in parliament. Gramsci located it in civil society — schools, churches, newspapers, unions, professional bodies, popular culture, the family. These institutions are not usually classed as political, which is precisely what makes them effective: they transmit a worldview while appearing to do something else entirely. A curriculum teaching that talent plus effort determines outcomes is not propaganda for anything; it is just education. That is the point.`,
          `What gets transmitted Gramsci called common sense, and his treatment of it is more subtle than false consciousness. Common sense is not a coherent ideology someone installed. It is a sediment — fragments of folklore, religion, science and half-remembered philosophy, mutually inconsistent, absorbed without examination, and used to interpret everything that happens. It contains genuine insight alongside things that serve the powerful, which is why it cannot simply be refuted. And its authority comes from being unnoticed: an idea you can name and argue with is not doing hegemonic work, whereas one that feels like a description of reality rather than a claim about it is doing all of it.`,
        ],
      },
      {
        heading: "What hegemony costs the powerful",
        body: [
          `The theory's most useful move is that hegemony is not free, and this rescues it from being unfalsifiable. To lead rather than merely dominate, a group must make its interests plausibly universal — and doing so requires real concessions. Wages rise, the franchise extends, welfare provision appears, working conditions improve. These are not tricks. They are genuine material gains that the dominant group grants because leadership requires that subordinate groups see something of themselves in the arrangement.`,
          `So hegemony is a negotiated settlement in which the ruling group compromises on interests while retaining the fundamentals. This gives the concept teeth: it explains why reforms are both real and stabilising, and it predicts that a group unwilling to concede will lose consent and be forced back onto coercion. Gramsci's term for that state is a crisis of authority — the old order has lost its claim to lead but the new cannot yet lead either, and what fills the gap is not liberation but whatever is best organised. He watched fascism fill it.`,
        ],
      },
      {
        heading: "War of position",
        body: [
          `The strategic conclusion follows from the analysis. In Tsarist Russia the state was everything and civil society primitive, so seizing the state worked — a war of manoeuvre, a frontal assault. In the West the state is protected by a dense network of civil institutions, and Gramsci's image is that behind the outer trench lies a system of fortresses and earthworks. Storm the state and you find the culture reconstituting the old order underneath you.`,
          `The alternative is the war of position: a long, unglamorous struggle to build a rival common sense across schools, media, unions and associations before contesting power directly. This requires organic intellectuals, people who articulate a class's worldview from inside it rather than descending on it from outside, and it takes decades. The uncomfortable footnote is that the strategy is not left-wing property. The most successful wars of position in the past half-century were fought by the right — think tanks, foundations and media built over decades until a set of once-marginal economic ideas became the unremarkable background of policy debate. That is Gramsci's model executed by his opponents, which is the strongest evidence that he described something real.`,
        ],
      },
      {
        heading: "Why 'that's just how things are' is the tell",
        body: [
          `The usable residue is a habit of attention. When you catch yourself treating an arrangement as a fact about the world rather than a decision someone made — that this is how work is organised, that this is what success means, that this is what a person is for — you are looking at the output of a war of position that concluded before you arrived. The test is not whether you agree with the idea; it is whether it presents itself as an idea at all. And Gramsci's harder lesson is aimed at anyone who thinks winning the argument is the goal: hegemony is not held by having the better case, it is held by occupying the institutions that decide what counts as an argument in the first place.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "reasoning",
        prompt: "What problem was Gramsci's concept of hegemony designed to solve?",
        choices: [
          { id: "a", label: "Why workers in advanced societies did not revolt, and some supported fascism" },
          { id: "b", label: "Why capitalist economies produce recurring crises of overproduction" },
          { id: "c", label: "How a vanguard party should be organised for a seizure of power" },
          { id: "d", label: "Why colonial states required more coercion than European ones" },
        ],
        correctChoiceId: "a",
        explanation: "Orthodox Marxism predicted revolution and got stable democracies instead. Coercion cannot explain it — a regime depending purely on force would need a policeman for everyone.",
      },
      {
        dimension: "depth",
        prompt: "What distinguishes hegemony from domination?",
        choices: [
          { id: "a", label: "Hegemony is leadership secured through consent; domination is coercion held in reserve" },
          { id: "b", label: "Hegemony operates internationally while domination operates within states" },
          { id: "c", label: "Hegemony is exercised by elites, domination by state bureaucracies" },
          { id: "d", label: "Hegemony describes economic power, domination describes political power" },
        ],
        correctChoiceId: "a",
        explanation: "Subordinate groups accept the dominant account of how the world works, not because they are deceived but because it has become the ordinary furniture of thought. In advanced societies consent does most of the work.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does Gramsci locate hegemony in civil society rather than the state?",
        choices: [
          { id: "a", label: "Schools, media and churches transmit a worldview while appearing to do something else" },
          { id: "b", label: "State institutions are too weak to shape belief in modern societies" },
          { id: "c", label: "Civil society is where economic production actually takes place" },
          { id: "d", label: "The state is constitutionally barred from influencing public opinion" },
        ],
        correctChoiceId: "a",
        explanation: "They are not usually classed as political, which is exactly what makes them effective. A curriculum teaching that talent plus effort determines outcomes is not propaganda for anything — it is just education.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does the claim that hegemony requires real concessions give the concept teeth?",
        choices: [
          { id: "a", label: "It explains why reforms are both genuine and stabilising, and predicts loss of consent without them" },
          { id: "b", label: "It shows that concessions are always withdrawn once consent is secured" },
          { id: "c", label: "It proves that material interests are irrelevant to political stability" },
          { id: "d", label: "It demonstrates that subordinate groups are never genuinely deceived" },
        ],
        correctChoiceId: "a",
        explanation: "Rising wages and extended franchise are not tricks but the price of leadership. A group unwilling to concede falls back on coercion — Gramsci's crisis of authority, where the gap is filled by whatever is best organised.",
      },
      {
        dimension: "reasoning",
        prompt: "What does the war of position strategy require, and why?",
        choices: [
          { id: "a", label: "Building a rival common sense across institutions first, since culture would reconstitute the old order" },
          { id: "b", label: "Concentrating force on the state apparatus at a moment of maximum weakness" },
          { id: "c", label: "Withdrawing from civil institutions to avoid being co-opted by them" },
          { id: "d", label: "Winning parliamentary majorities before attempting cultural change" },
        ],
        correctChoiceId: "a",
        explanation: "Behind the outer trench lies a system of fortresses. Notably the most successful wars of position of the last fifty years were fought by the right — Gramsci's model executed by his opponents, which is evidence he described something real.",
      },
    ],
    sources: [
      { label: "Antonio Gramsci (SEP)", note: "Stanford Encyclopedia entry on hegemony, civil society and the Prison Notebooks.", type: "Reference", url: "https://plato.stanford.edu/entries/gramsci/" },
      { label: "Cultural hegemony (overview)", note: "Reference on common sense, war of position and organic intellectuals.", type: "Reference", url: "https://en.wikipedia.org/wiki/Cultural_hegemony" },
    ],
  },
  {
    concept: "Legitimacy",
    level: "A-level",
    summary: "why people accept authority as rightful",
    estimatedMinutes: 8,
    deck: "Any thug can make you obey at gunpoint, but no state can hold a gun to every citizen at once. What makes people obey laws and rulers voluntarily, accepting their authority as rightful rather than merely powerful, is legitimacy — the invisible foundation on which stable political order actually rests.",
    keyTerms: [
      { label: "Legitimacy", value: "The quality that makes people accept authority as rightful and obey willingly." },
      { label: "Power vs authority", value: "The ability to compel, versus the recognised right to be obeyed." },
      { label: "Weber's three types", value: "Traditional, charismatic and legal-rational grounds for legitimate authority." },
      { label: "Consent and performance", value: "Legitimacy based on agreement, and on delivering results." },
    ],
    sections: [
      {
        heading: "Beyond mere force",
        body: [
          `Legitimacy is what turns raw power into rightful authority — the widely shared belief that a ruler, government or law has the right to be obeyed, so people comply willingly rather than only from fear. It is the difference between authority and mere power. A robber with a gun has power over you but no legitimacy; you obey from fear and would resist or flee if you could. A legitimate government's laws you obey largely because you accept, at some level, that it has a rightful claim to your obedience.`,
          `This matters enormously because no regime can rule for long by force alone. There are far too many citizens and far too few enforcers; if everyone had to be coerced individually, the system would collapse. Stable order depends on most people obeying most laws voluntarily, most of the time, which requires legitimacy. A government that loses its legitimacy — seen as having no rightful claim to rule — becomes brittle, kept in place only by escalating force, and vulnerable to sudden collapse when that force falters.`,
        ],
      },
      {
        heading: "Weber's three types",
        body: [
          `Max Weber gave the classic analysis of why people accept authority as legitimate, identifying three pure types. Traditional authority rests on long-established custom and inherited status — people obey because "it has always been so", as with hereditary monarchs or tribal elders. Charismatic authority rests on the extraordinary personal qualities of a leader — people obey because they are inspired by, or devoted to, a figure they see as exceptional, heroic or even saintly.`,
          `The third, legal-rational authority, rests on a belief in the rightfulness of impersonal rules and procedures. People obey the office, not the person, and the person only insofar as they hold the office and follow the rules. This is the basis of modern states: we obey a law because it was made through legitimate constitutional procedures, and officials because they occupy a rule-defined office, not because of who they are personally. Weber saw legal-rational authority as characteristic of modern bureaucratic society, and most real governments blend all three types in varying proportions.`,
        ],
      },
      {
        heading: "Consent and performance",
        body: [
          `Beyond Weber's types, modern legitimacy often rests on two further grounds. One is consent: the democratic idea that authority is legitimate because it derives from the agreement of the governed, expressed through elections and participation. A democratically elected government claims legitimacy on the grounds that the people chose it and can remove it, so its authority flows from their consent rather than from tradition or force — which is why democracies place such weight on the fairness of elections.`,
          `The other is performance, or "output" legitimacy: authority earns acceptance by delivering results — security, prosperity, order, justice, effective services. A government may gain legitimacy by governing well and lose it by governing badly, regardless of how it came to power, and some regimes with weak claims to legitimacy by consent lean heavily on performance. Most durable legitimacy combines several sources; a government both chosen by its people and delivering good outcomes has a far stronger claim than one resting on any single ground.`,
        ],
      },
      {
        heading: "How legitimacy is won and lost",
        body: [
          `Legitimacy is not a permanent possession but something continuously earned, maintained and potentially lost. It is built through fair procedures, respect for rules and rights, competent government, and the sense that power is being exercised properly rather than abused. It is eroded by corruption, injustice, broken promises, rigged elections, and the perception that rulers serve themselves. When enough people stop believing a government has the right to rule, its legitimacy drains away, often quietly, until a crisis reveals how hollow its authority has become.`,
          `This is why the loss of legitimacy is so central to political upheaval. Revolutions and sudden collapses often occur not because a regime lost a physical contest of force, but because it lost legitimacy first: soldiers refused to fire, officials stopped obeying, and citizens no longer accepted its authority, so its apparent power evaporated. A government can command enormous coercive resources and still fall swiftly once the belief in its rightfulness has gone. Legitimacy, invisible and psychological, turns out to be the true bedrock of political power.`,
        ],
      },
      {
        heading: "Why you obey rules you never chose",
        body: [
          `You rely on legitimacy every day. You stop at red lights, pay taxes and follow laws you never personally agreed to and could often break undetected — largely because you accept, mostly without thinking, that the authorities making these rules have a rightful claim to your compliance. Notice the difference between a rule you follow because you accept its authority and one you follow only because you would be caught: the first is legitimacy, the second mere power. You also feel legitimacy erode — in your trust in an institution that seems corrupt, unfair or incompetent, whose rules you increasingly obey grudgingly or not at all. Understanding legitimacy reveals that political order rests less on force than on a widely shared, fragile belief that authority is rightful.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is legitimacy in politics?",
        choices: [
          { id: "a", label: "The widely shared belief that authority has a rightful claim to be obeyed, so people comply willingly" },
          { id: "b", label: "The amount of military force a government has" },
          { id: "c", label: "The size of a country's economy" },
          { id: "d", label: "The number of laws a government passes" },
        ],
        correctChoiceId: "a",
        explanation: "Legitimacy turns raw power into rightful authority — the belief that a ruler or law deserves obedience — which is why a robber has power but no legitimacy, while a legitimate government is obeyed willingly.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can no regime rule for long by force alone?",
        choices: [
          { id: "a", label: "Because there are too many citizens and too few enforcers, so order depends on most people obeying voluntarily" },
          { id: "b", label: "Because force is always illegal" },
          { id: "c", label: "Because citizens enjoy being coerced" },
          { id: "d", label: "Because legitimacy is unnecessary" },
        ],
        correctChoiceId: "a",
        explanation: "If everyone had to be coerced individually the system would collapse, so stable order requires most people to obey most laws voluntarily — which requires legitimacy, not just force.",
      },
      {
        dimension: "depth",
        prompt: "What are Weber's three types of legitimate authority?",
        choices: [
          { id: "a", label: "Traditional, charismatic and legal-rational" },
          { id: "b", label: "Democratic, socialist and liberal" },
          { id: "c", label: "Hard, soft and smart" },
          { id: "d", label: "Local, national and global" },
        ],
        correctChoiceId: "a",
        explanation: "Weber identified traditional authority (custom and inherited status), charismatic authority (an exceptional leader's personal qualities), and legal-rational authority (impersonal rules and offices) — most real governments blend all three.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the basis of 'legal-rational' authority?",
        choices: [
          { id: "a", label: "A belief in the rightfulness of impersonal rules and procedures, so people obey the office, not the person" },
          { id: "b", label: "Devotion to an inspiring individual leader" },
          { id: "c", label: "Long-established custom and tradition" },
          { id: "d", label: "Fear of punishment alone" },
        ],
        correctChoiceId: "a",
        explanation: "Legal-rational authority, the basis of modern states, rests on obeying laws made through legitimate procedures and officials who hold rule-defined offices — we obey the office, not the person, Weber's hallmark of modern bureaucracy.",
      },
      {
        dimension: "reasoning",
        prompt: "Why do revolutions often occur when a regime loses legitimacy, even if it retains coercive force?",
        choices: [
          { id: "a", label: "Because once people stop accepting its authority, soldiers and officials stop obeying and its apparent power evaporates" },
          { id: "b", label: "Because losing legitimacy makes a regime richer" },
          { id: "c", label: "Because force always guarantees survival" },
          { id: "d", label: "Because legitimacy has no effect on stability" },
        ],
        correctChoiceId: "a",
        explanation: "A regime can command huge coercive resources yet fall swiftly once belief in its rightfulness is gone — soldiers refuse to fire, officials stop obeying — showing legitimacy is the true bedrock of political power.",
      },
    ],
    sources: [
      { label: "Max Weber on legitimacy (overview)", note: "Reference on traditional, charismatic and legal-rational authority.", type: "Reference", url: "https://en.wikipedia.org/wiki/Legitimacy_(political)" },
      { label: "Political legitimacy (SEP)", note: "Stanford Encyclopedia entry on theories of legitimate authority.", type: "Reference", url: "https://plato.stanford.edu/entries/legitimacy/" },
    ],
  },
  {
    concept: "Infrastructural Power",
    level: "University",
    summary: "why the state that can imprison you may be weaker than the one that can find you",
    estimatedMinutes: 9,
    deck: "Michael Mann noticed that the states we call strong — the ones with secret police and arbitrary arrest — are often unable to collect tax or count their population, while the states that look mild can reach into every household with total accuracy. These are not degrees of the same power. They are different powers, and they trade off.",
    keyTerms: [
      { label: "Despotic power", value: "What elites can do to society without negotiation — arbitrary and unconstrained by routine." },
      { label: "Infrastructural power", value: "The state's capacity to actually penetrate society and implement decisions across its territory." },
      { label: "Legibility", value: "Scott's term for the state's project of making society countable, mappable and therefore governable." },
      { label: "The weak strong state", value: "A regime with enormous despotic reach and little capacity to accomplish anything routine." },
    ],
    sections: [
      {
        heading: "Two powers, not one",
        body: [
          `Michael Mann's 1984 distinction cut through a persistent confusion about what state strength means. Despotic power is the range of actions elites can take without routine negotiation with civil society — the emperor who executes on a whim, the regime that arrests without charge. Infrastructural power is the capacity to actually penetrate society and implement political decisions across the territory: to know who lives where, collect the tax owed, deliver the post, enforce the standard, run the census.`,
          `The pairing is not a spectrum, and this is Mann's whole point. Imperial China had immense despotic power and could do almost nothing routinely in the villages that housed most of its subjects — its reach ended at the county magistrate, and below that it governed through local notables it could not audit. A modern liberal democracy has trivial despotic power, hemmed in by courts and elections, and can locate any citizen, tax income at source, and know within days if a child stops attending school. The despot can kill you and cannot count you. The bureaucracy cannot touch you and knows everything about you.`,
        ],
      },
      {
        heading: "Legibility as the precondition",
        body: [
          `Infrastructural power has technical prerequisites, and James Scott's work on legibility catalogues them: the state must be able to see. Before permanent surnames, tax officials could not reliably attach a liability to a person, so states imposed them — many European surnames exist because a bureaucracy needed them to. Land had to be surveyed and registered in standard units before it could be taxed, replacing customary tenure that locals understood perfectly and outsiders could not parse. Cities needed numbered houses and named streets. Weights and measures had to be standardised. Populations needed censuses.`,
          `None of these are neutral administrative conveniences. Each replaces local knowledge, which is rich and illegible to outsiders, with a simplified map that a central office can act on — and the simplification always discards information that mattered to the people who lived in it. Scott's critical point is that the map then reshapes the territory: once the state can only see standardised units, it makes policy for standardised units, and the reality it cannot see stops counting. His cases of high modernist disaster — collectivised agriculture, planned cities designed for legibility rather than life — are what happens when infrastructural power is high and the discarded local knowledge turns out to have been load-bearing.`,
        ],
      },
      {
        heading: "Why the weak strong state persists",
        body: [
          `The distinction explains regimes that otherwise look paradoxical. A government may be able to disappear its critics and unable to deliver electricity, because the two capacities are built differently: despotic power requires a loyal instrument of violence, which is cheap and quick to assemble, while infrastructural power requires records, trained officials, standardised procedures and a population that mostly complies — which takes decades and cannot be commanded into existence.`,
          `Worse, they can be substitutes rather than complements. A regime that cannot collect tax reliably resorts to arbitrary seizure, which teaches everyone to hide assets, which makes the tax base less visible still. A state that cannot make its rules stick uses exemplary punishment instead, which produces compliance in view of the enforcer and nothing behind it. The despotic move is always available and always cheaper in the short term, and it degrades the conditions for the infrastructural alternative — which is one reason the two rarely converge, and why the failed state and the police state are so often the same address.`,
        ],
      },
      {
        heading: "The liberal bargain",
        body: [
          `The corollary for democracies is uncomfortable and is Mann's most quoted implication: high infrastructural power is what makes a modern liberal state work, and it is also what makes it dangerous. The same capacity that delivers universal healthcare and pays pensions on time is the capacity to identify, locate and act on any individual. Constraint on despotic power — courts, elections, rights — is the only thing standing between the two uses, and that constraint is a political fact rather than a technical one. The infrastructure does not care what it is pointed at.`,
          `This is why the historical worst cases required both. A regime with high despotic power alone can be brutal locally and remains inefficient; a regime with high infrastructural power alone is constrained by law. Twentieth-century totalitarianism is what happens when a state acquires modern administrative reach and then removes the limits on despotic use — and the administrative reach was built first, by liberal predecessors, for benign purposes. The lesson generalises to any capacity being built now: the tooling long outlives the intentions of whoever commissioned it, and it will be inherited by people you did not choose.`,
        ],
      },
      {
        heading: "Why compliance beats enforcement",
        body: [
          `The frame transfers to any organisation. A manager who can fire anyone but cannot find out what is actually happening has despotic power and no infrastructural power, and the response to that manager is universally the same: people become illegible on purpose. Reports get optimised, problems get hidden, the true state of things stops travelling upward — and each escalation of despotic power makes the information worse, because the cost of being seen has gone up. Notice that the organisations that function are the ones where the routine machinery works without anyone being threatened, and that reaching for the despotic lever is usually evidence the infrastructural one was never built. Mann's insight is that the capacity to compel and the capacity to accomplish are not the same, and that they eat each other.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is the difference between despotic and infrastructural power?",
        choices: [
          { id: "a", label: "What elites can do without negotiation, versus the capacity to actually implement decisions across society" },
          { id: "b", label: "Power exercised by the executive, versus power exercised by the legislature" },
          { id: "c", label: "Power over foreign states, versus power over the domestic population" },
          { id: "d", label: "Legally authorised power, versus power exercised outside the constitution" },
        ],
        correctChoiceId: "a",
        explanation: "They are not points on a spectrum. Imperial China could execute on a whim and could not count its villages; a liberal democracy cannot touch you and knows everything about you.",
      },
      {
        dimension: "reasoning",
        prompt: "Why did states impose permanent surnames and standardised measures?",
        choices: [
          { id: "a", label: "Infrastructural power requires that the state can see — liabilities must attach to identifiable persons" },
          { id: "b", label: "Local customary systems were genuinely less accurate than standardised ones" },
          { id: "c", label: "Standardisation was demanded by populations seeking equal treatment" },
          { id: "d", label: "They were adopted to facilitate trade rather than administration" },
        ],
        correctChoiceId: "a",
        explanation: "Many European surnames exist because a tax bureaucracy needed them. Scott's point is that legibility replaces rich local knowledge with a simplified map — and the simplification always discards what mattered to the people living in it.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can despotic and infrastructural power act as substitutes rather than complements?",
        choices: [
          { id: "a", label: "Arbitrary seizure teaches people to hide assets, making the tax base less visible still" },
          { id: "b", label: "States have fixed budgets and must choose which capacity to fund" },
          { id: "c", label: "Officials trained in coercion cannot be retrained for administration" },
          { id: "d", label: "International law prohibits states from developing both simultaneously" },
        ],
        correctChoiceId: "a",
        explanation: "The despotic move is always cheaper in the short term and degrades the conditions for the infrastructural alternative. Which is one reason the failed state and the police state are so often the same address.",
      },
      {
        dimension: "reasoning",
        prompt: "What does Scott's work suggest about high modernist projects?",
        choices: [
          { id: "a", label: "They fail when discarded local knowledge turns out to have been load-bearing" },
          { id: "b", label: "They fail because planners lacked sufficient computational capacity" },
          { id: "c", label: "They succeed wherever infrastructural power is sufficiently high" },
          { id: "d", label: "They demonstrate that legibility is unnecessary for governance" },
        ],
        correctChoiceId: "a",
        explanation: "The map reshapes the territory: once the state sees only standardised units, it makes policy for standardised units and the invisible reality stops counting. Collectivised agriculture and planned cities are the cases.",
      },
      {
        dimension: "reasoning",
        prompt: "Why did twentieth-century totalitarianism require both kinds of power?",
        choices: [
          { id: "a", label: "Modern administrative reach was built first for benign purposes, then the limits on despotic use were removed" },
          { id: "b", label: "Despotic power alone is sufficient, but was politically unpopular" },
          { id: "c", label: "Infrastructural power was invented specifically by totalitarian regimes" },
          { id: "d", label: "The two powers only became technically compatible in the twentieth century" },
        ],
        correctChoiceId: "a",
        explanation: "Despotic power alone is brutal but inefficient; infrastructural power alone is constrained by law. The tooling outlives the intentions of whoever commissioned it, and gets inherited by people you did not choose.",
      },
    ],
    sources: [
      { label: "Mann, 'The Autonomous Power of the State' (overview)", note: "Reference on the despotic and infrastructural distinction.", type: "Reference", url: "https://en.wikipedia.org/wiki/Michael_Mann_(sociologist)" },
      { label: "Scott, Seeing Like a State (overview)", note: "Reference on legibility, standardisation and high modernism.", type: "Reference", url: "https://en.wikipedia.org/wiki/Seeing_Like_a_State" },
    ],
  },
  {
    concept: "Arrow's Impossibility Theorem",
    level: "University",
    summary: "the proof that no voting system can be fair, and what survives it",
    estimatedMinutes: 9,
    deck: "Arrow listed a handful of conditions any reasonable way of turning individual preferences into a group decision should satisfy. Each is close to trivial. He then proved that no method satisfies all of them at once — not that we have not found one, that none exists. The result won a Nobel and is routinely misread as showing democracy is meaningless.",
    keyTerms: [
      { label: "Social welfare function", value: "Any rule mapping the profile of individual rankings onto a single collective ranking." },
      { label: "Independence of irrelevant alternatives", value: "The group's ranking of two options should depend only on how individuals rank those two." },
      { label: "Condorcet cycle", value: "Majority preferences that go round in a loop — A beats B beats C beats A." },
      { label: "Gibbard–Satterthwaite", value: "The companion result: every non-trivial voting rule can be manipulated by strategic voting." },
    ],
    sections: [
      {
        heading: "The conditions and the result",
        body: [
          `Kenneth Arrow's 1951 doctoral thesis asked whether individual preference rankings could be aggregated into a collective ranking, and imposed conditions that read like a list of things too obvious to state. Unrestricted domain: the rule must handle any combination of individual preferences without breaking. Pareto efficiency: if everyone prefers A to B, the group prefers A to B. Non-dictatorship: no single person's ranking simply determines the outcome regardless of everyone else. Independence of irrelevant alternatives: whether the group ranks A above B depends only on how individuals rank A against B, not on where C sits.`,
          `Arrow proved that with three or more options, no rule satisfies all four. This is a theorem, not a survey of existing systems — the impossibility is structural, and no cleverness will produce an exception, in the way no cleverness produces a largest prime. Every voting method you have heard of fails at least one condition, and the failures are not defects to be engineered out. They are the price of admission.`,
        ],
      },
      {
        heading: "What goes wrong, concretely",
        body: [
          `The Condorcet cycle shows the trouble is real rather than technical. Three voters rank three options: the first prefers A to B to C, the second B to C to A, the third C to A to B. Ask about A versus B and a majority prefers A. Ask B versus C and a majority prefers B. Ask C versus A and a majority prefers C. Majority preference goes round in a circle, so there is no option a majority prefers to all others, and whoever controls the order of the votes controls the outcome entirely — a genuinely open agenda is a decision procedure disguised as a formality.`,
          `Independence of irrelevant alternatives is the condition that fails most often and hurts most. Under plurality voting, adding a third candidate can flip which of the original two wins, without a single voter changing their mind about those two — the spoiler effect, and it is not a rounding error but a routine feature of elections. Instant-runoff fixes spoilers and violates independence in its own way, since eliminating a losing candidate can reverse the result between two others. Borda counts violate it too, and are additionally vulnerable to running a hopeless candidate purely to shift the averages. Each system has a characteristic pathology and the pathology is where its Arrow violation lives.`,
        ],
      },
      {
        heading: "The manipulation result",
        body: [
          `Gibbard and Satterthwaite proved the companion theorem independently in the 1970s, and it is arguably the more practical one. Any voting rule that is non-dictatorial and can produce at least three different outcomes is manipulable: there are situations where a voter does better by submitting a ranking that is not their true one. Again this is universal rather than a defect of particular systems.`,
          `So strategic voting is not a corruption of the process, it is a structural feature of every process. The voter abandoning a preferred candidate to stop a worse one is responding correctly to the rule's incentives, not failing to understand them. This has a sharp implication for how we read results: election outcomes do not straightforwardly report what voters wanted, because voters are reporting what the rule rewards them for reporting. And the honest conclusion is that "let people vote sincerely" is not an option that exists — a system can only choose which strategic distortions it prefers.`,
        ],
      },
      {
        heading: "What the theorem does not show",
        body: [
          `The overreading is that democracy is incoherent or that the general will is a fiction. Arrow shows no rule satisfies all four conditions — not that all rules are equally bad, which they emphatically are not. Approval and range voting evade the theorem entirely by taking cardinal information rather than rankings, at the cost of assuming intensity can be compared across people. Restricting the domain also escapes it: if preferences are single-peaked, so options sit on a line and each voter has an ideal point with support falling away from it, majority rule works fine and the median voter's choice wins. Real electorates are often approximately single-peaked, which is why democracies function rather than cycling permanently.`,
          `The mature reading is that "fair" is not one property but several that are jointly unsatisfiable, so the design question is which failure you can live with in your circumstances. Different trade-offs suit different problems: a system for a divided society may reasonably prioritise not producing a winner half the population rejects, while one for a stable electorate may prioritise decisiveness. That is a real engineering discipline with real better and worse answers. Arrow closed off the fantasy of a perfect rule, which is a different thing from closing off the subject.`,
        ],
      },
      {
        heading: "Why 'what does the group want' is a malformed question",
        body: [
          `The transferable insight is that group preference is not a thing waiting to be measured — it is an artefact of the procedure used to elicit it. A committee that would choose differently under a different but equally defensible voting order does not have a hidden true preference that one order revealed and the other obscured. There is nothing there to reveal. Notice what this means for anyone running a decision: the choice of procedure is a choice about the outcome, made before anyone speaks, and it is usually made casually by whoever booked the room. And notice the corollary for reading any result: since Gibbard–Satterthwaite guarantees people are answering strategically, the numbers tell you what the rule rewarded, not what anyone wanted.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What does independence of irrelevant alternatives require?",
        choices: [
          { id: "a", label: "The group's ranking of two options depends only on how individuals rank those two" },
          { id: "b", label: "Irrelevant candidates should be excluded from the ballot before voting" },
          { id: "c", label: "Voters must rank every available option rather than abstaining" },
          { id: "d", label: "The rule must produce the same result regardless of the number of voters" },
        ],
        correctChoiceId: "a",
        explanation: "It is the condition that fails most often. Under plurality, adding a third candidate can flip which of the original two wins without anyone changing their mind about them — the spoiler effect.",
      },
      {
        dimension: "reasoning",
        prompt: "What does a Condorcet cycle demonstrate?",
        choices: [
          { id: "a", label: "Majority preference can loop, so whoever controls the order of votes controls the outcome" },
          { id: "b", label: "Voters frequently hold inconsistent preferences between options" },
          { id: "c", label: "Three-candidate elections are inherently less accurate than two-candidate ones" },
          { id: "d", label: "Majority rule requires an odd number of voters to produce a result" },
        ],
        correctChoiceId: "a",
        explanation: "A beats B beats C beats A, with every individual perfectly consistent. There is no option a majority prefers to all others, which makes a genuinely open agenda a decision procedure disguised as a formality.",
      },
      {
        dimension: "reasoning",
        prompt: "What does Gibbard–Satterthwaite establish about strategic voting?",
        choices: [
          { id: "a", label: "Every non-dictatorial rule with three or more outcomes is manipulable, so it is structural rather than a defect" },
          { id: "b", label: "Strategic voting occurs only under plurality and instant-runoff systems" },
          { id: "c", label: "Voters who vote strategically systematically make themselves worse off" },
          { id: "d", label: "Manipulation can be eliminated by keeping individual ballots secret" },
        ],
        correctChoiceId: "a",
        explanation: "The voter abandoning a preferred candidate to block a worse one is responding correctly to the incentives. So 'let people vote sincerely' is not an option that exists — a system chooses which distortions it prefers.",
      },
      {
        dimension: "reasoning",
        prompt: "Why do real democracies function rather than cycling permanently?",
        choices: [
          { id: "a", label: "Preferences are often approximately single-peaked, which escapes the theorem's domain condition" },
          { id: "b", label: "Political parties suppress the cycles through coalition agreements" },
          { id: "c", label: "Cycles are mathematically possible but have never been observed" },
          { id: "d", label: "Constitutional courts resolve cycles when they arise" },
        ],
        correctChoiceId: "a",
        explanation: "If options sit on a line and each voter has an ideal point with support falling away from it, majority rule works and the median voter's choice wins. Restricting the domain is one of the genuine escape routes.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the mature reading of what Arrow proved?",
        choices: [
          { id: "a", label: "'Fair' is several jointly unsatisfiable properties, so design is about which failure you can live with" },
          { id: "b", label: "Democracy is incoherent and collective decisions are meaningless" },
          { id: "c", label: "All voting systems are equally defective in practice" },
          { id: "d", label: "A perfect voting system exists but has not yet been discovered" },
        ],
        correctChoiceId: "a",
        explanation: "Approval and range voting escape by using cardinal information; single-peaked domains escape too. Arrow closed off the fantasy of a perfect rule, which is different from closing off the subject.",
      },
    ],
    sources: [
      { label: "Arrow's Theorem (SEP)", note: "Stanford Encyclopedia entry on the conditions, the proof and its interpretation.", type: "Reference", url: "https://plato.stanford.edu/entries/arrows-theorem/" },
      { label: "Gibbard–Satterthwaite theorem (overview)", note: "Reference on the manipulability of non-dictatorial voting rules.", type: "Reference", url: "https://en.wikipedia.org/wiki/Gibbard%E2%80%93Satterthwaite_theorem" },
    ],
  },
  {
    concept: "Liberalism",
    level: "A-level",
    summary: "rights, individual freedom, consent and limited power",
    estimatedMinutes: 8,
    deck: "Liberalism is the political tradition that puts the individual and their freedom at the centre, and insists that power must be limited, justified and answerable. It is so woven into modern life — rights, the rule of law, tolerance, consent — that we forget it was once revolutionary, and easy to confuse with the narrower American use of 'liberal' to mean left-wing.",
    keyTerms: [
      { label: "Liberalism", value: "The tradition centring individual freedom, rights, consent and limited government." },
      { label: "Individual rights", value: "Protections belonging to each person that government must respect." },
      { label: "Limited government", value: "The principle that state power must be constrained and justified." },
      { label: "Negative liberty", value: "Freedom from interference — being left alone to live as one chooses." },
    ],
    sections: [
      {
        heading: "The individual at the centre",
        body: [
          `Liberalism places the individual and their freedom at the heart of politics. Its foundational belief is that individuals have inherent worth and certain rights, and that the central purpose of political arrangements is to protect the freedom and rights of individuals to live their own lives as they see fit. Where older traditions subordinated the individual to the community, the church, or the ruler, liberalism reversed the priority: political institutions exist to serve individuals, not the other way around.`,
          `This individualism has profound implications: it leads liberalism to prize personal freedom, to be suspicious of concentrated power, to insist that government be limited and justified, and to defend a sphere of individual life free from interference. Emerging in the 1600s and 1700s through thinkers like John Locke and later John Stuart Mill, liberalism was genuinely revolutionary, challenging the divine right of kings and the subordination of the individual to arbitrary authority. Its ideas — rights, consent, the rule of law, tolerance — are now so embedded in modern democracies that we forget how radical they once were.`,
        ],
      },
      {
        heading: "Rights and limited government",
        body: [
          `Two connected commitments define liberalism. The first is individual rights: liberals hold that people possess certain fundamental rights — to life, liberty, property, expression, conscience — that exist prior to government and that government must respect and protect rather than grant or withdraw at will. John Locke argued that people have natural rights and that governments exist to secure them, drawing legitimacy from the consent of the governed and forfeiting it if they violate those rights.`,
          `The second is limited government: because power is dangerous and can be abused, liberals insist it must be constrained — through the rule of law (government itself bound by law), constitutions that define and limit power, the separation of powers so no single body dominates, and the protection of rights against government encroachment. The liberal instinct is always to ask how power is being limited and held accountable, because unchecked power, even democratically won, threatens the individual freedom liberalism exists to protect. This suspicion of concentrated power is one of liberalism's most enduring contributions.`,
        ],
      },
      {
        heading: "Two ideas of freedom",
        body: [
          `Liberalism prizes freedom, but "freedom" contains an important tension, often framed as negative versus positive liberty. Negative liberty is freedom from interference — being left alone, free from external constraints, to do as one chooses. On this view you are free to the extent that others, especially the state, do not obstruct you. This "classical" liberal emphasis leads to a preference for a limited state that stays out of people's lives, and for free markets and individual choice.`,
          `Positive liberty is freedom to actually achieve one's goals and develop one's potential — which may require resources, education, health and opportunity, not just the absence of interference. On this view, a person left alone but trapped in poverty or ignorance is not truly free. This emphasis leads "social" or "modern" liberals to accept a more active state that provides the conditions for genuine freedom. The tension between seeing freedom mainly as being left alone and seeing it as being genuinely enabled runs through liberalism, explaining much of the disagreement within the broad tradition.`,
        ],
      },
      {
        heading: "Tolerance and its confusions",
        body: [
          `A core liberal value is tolerance: because individuals should be free to live as they choose and hold their own beliefs, liberalism defends the right of people to differ, dissent, and pursue their own conception of the good life, so long as they do not harm others. Mill's "harm principle" — that the only legitimate reason to restrict someone's liberty is to prevent harm to others — is a classic formulation, underpinning freedom of speech, religion and lifestyle, and a pluralist society where different ways of living coexist.`,
          `A frequent confusion, especially for those familiar with American usage, is that "liberal" in everyday American English has come to mean "left-wing" or "progressive", which is much narrower than the tradition. In its proper sense, liberalism underlies most modern democracies across the political spectrum: both the centre-left and much of the centre-right are, in this deeper sense, liberal, sharing commitments to rights, the rule of law and limited government while disagreeing about the state's economic role. Liberalism's rivals are traditions that reject its individualism and its limits on power — authoritarianism, and older collectivist or traditionalist views — not simply the political right.`,
        ],
      },
      {
        heading: "The liberal assumptions you live by",
        body: [
          `You live inside liberalism's achievements so completely that they feel like common sense. The idea that you have rights the government must respect, that you may believe and say what you like, that power should be limited by law and constitutions, that you should be free to live your life as you choose so long as you harm no one — all are liberal ideas, once revolutionary, now the water most modern democracies swim in. You feel liberalism's internal tension whenever you debate whether freedom means the government leaving you alone or actively giving you opportunities. And you can avoid a common confusion by remembering that "liberal" in the deep sense names a tradition spanning much of the political spectrum, not just one side. Recognising these assumptions as a specific tradition, not neutral common sense, lets you see both what modern politics takes for granted and what it argues about.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is the foundational belief of liberalism?",
        choices: [
          { id: "a", label: "That individuals have inherent worth and rights, and political arrangements exist to protect their freedom" },
          { id: "b", label: "That the community always outweighs the individual" },
          { id: "c", label: "That rulers have a divine right to absolute power" },
          { id: "d", label: "That the state should control every aspect of life" },
        ],
        correctChoiceId: "a",
        explanation: "Liberalism places the individual and their freedom at the centre, holding that institutions exist to serve individuals and protect their rights — a reversal of older traditions subordinating the individual to ruler or community.",
      },
      {
        dimension: "depth",
        prompt: "What did John Locke argue about rights and government?",
        choices: [
          { id: "a", label: "That people have natural rights and governments exist to secure them, drawing legitimacy from consent" },
          { id: "b", label: "That governments grant rights and can freely withdraw them" },
          { id: "c", label: "That individuals have no rights against the state" },
          { id: "d", label: "That kings rule by divine right" },
        ],
        correctChoiceId: "a",
        explanation: "Locke held that people possess natural rights existing prior to government, that governments exist to secure them and draw legitimacy from the consent of the governed, forfeiting it if they violate those rights.",
      },
      {
        dimension: "reasoning",
        prompt: "Why do liberals insist that government power be limited?",
        choices: [
          { id: "a", label: "Because power is dangerous and can be abused, threatening the individual freedom liberalism exists to protect" },
          { id: "b", label: "Because government should do nothing at all" },
          { id: "c", label: "Because only kings should hold power" },
          { id: "d", label: "Because limits make government more efficient" },
        ],
        correctChoiceId: "a",
        explanation: "Unchecked power, even democratically won, threatens individual freedom, so liberals constrain it through the rule of law, constitutions, separation of powers and protected rights — always asking how power is limited and held accountable.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the difference between negative and positive liberty?",
        choices: [
          { id: "a", label: "Negative liberty is freedom from interference; positive liberty is freedom to actually achieve one's goals, which may require resources" },
          { id: "b", label: "Negative liberty is bad and positive liberty is good" },
          { id: "c", label: "They mean exactly the same thing" },
          { id: "d", label: "Positive liberty means having no rights" },
        ],
        correctChoiceId: "a",
        explanation: "Negative liberty is being left alone, free from constraint (favouring a limited state); positive liberty is being genuinely enabled to achieve one's potential (favouring a more active state) — a tension running through liberalism.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is calling liberalism simply 'left-wing' a confusion?",
        choices: [
          { id: "a", label: "Because in its proper sense liberalism is a broad tradition underlying most modern democracies across the spectrum, not one side of politics" },
          { id: "b", label: "Because liberalism is actually far-right" },
          { id: "c", label: "Because liberalism rejects all rights" },
          { id: "d", label: "Because liberalism opposes democracy" },
        ],
        correctChoiceId: "a",
        explanation: "American usage narrowed 'liberal' to mean progressive, but the tradition — rights, rule of law, limited government — underlies both centre-left and centre-right; its true rivals are authoritarian and collectivist views, not simply the political right.",
      },
    ],
    sources: [
      { label: "Liberalism (SEP)", note: "Stanford Encyclopedia entry on the liberal tradition.", type: "Reference", url: "https://plato.stanford.edu/entries/liberalism/" },
      { label: "Isaiah Berlin, 'Two Concepts of Liberty'", note: "The classic distinction between negative and positive liberty.", type: "Reference", url: "https://en.wikipedia.org/wiki/Two_Concepts_of_Liberty" },
    ],
  },
  {
    concept: "Conservatism",
    level: "A-level",
    summary: "tradition, order, gradual change and social inheritance",
    estimatedMinutes: 8,
    deck: "Conservatism is less a fixed blueprint than a disposition — a caution about radical change, a respect for what has been inherited, and a suspicion that grand schemes to remake society tend to end badly. Understanding it means grasping why someone might defend an institution not because it is perfect, but because it has survived.",
    keyTerms: [
      { label: "Conservatism", value: "The disposition favouring tradition, order, gradual change and inherited institutions." },
      { label: "Burke", value: "Edmund Burke, whose reaction to the French Revolution shaped conservative thought." },
      { label: "Organic society", value: "The view of society as a living inheritance, not a machine to be redesigned." },
      { label: "Prudence and caution", value: "Preferring gradual, tested reform over sweeping, untested change." },
    ],
    sections: [
      {
        heading: "A disposition, not a blueprint",
        body: [
          `Conservatism is often misunderstood as simply resisting all change or defending the privileged. At its intellectual core it is something more interesting: a disposition rooted in caution about radical change, respect for tradition and inherited institutions, and scepticism toward grand schemes to remake society according to abstract principles. Unlike ideologies that start from a theory of how society should be and try to build it, conservatism is more a temperament — a way of approaching politics that distrusts sweeping transformation and values what has been tested by time.`,
          `This makes conservatism harder to pin down than doctrines with clear programmes, because it is less a set of fixed policies than an attitude that attaches to different specifics in different times and places. What conservatives seek to conserve varies with what exists; a conservative in one country or era defends different institutions than in another. But the underlying disposition is consistent: a preference for continuity over rupture, for the accumulated wisdom of established ways over the confident designs of reformers, and for gradual, careful change over revolutionary leaps.`,
        ],
      },
      {
        heading: "Burke and the fear of the guillotine",
        body: [
          `Conservatism as a self-conscious tradition is usually traced to Edmund Burke, and specifically to his Reflections on the Revolution in France (1790). Watching the French revolutionaries tear down their entire social and political order in the name of abstract principles of reason and rights, Burke was horrified, and predicted — correctly, as the Terror soon showed — that it would end in chaos and tyranny. His critique became the founding text of conservative thought.`,
          `Burke's core argument was that society is enormously complex, the product of generations of accumulated experience, custom and adjustment, and that the confident attempt to redesign it wholesale according to abstract theory is arrogant and dangerous. The revolutionaries, he argued, understood far less than they thought about the delicate web of institutions and habits that held society together, and in sweeping them away would unleash forces they could not control. Reform, for Burke, should be gradual and organic, working with the grain of existing institutions rather than demolishing and rebuilding from scratch — a suspicion of radical, theory-driven transformation that remains conservatism's central insight.`,
        ],
      },
      {
        heading: "Society as inheritance",
        body: [
          `A key conservative idea is that society is an "organic" whole — more like a living organism or an inheritance than a machine that can be freely redesigned. Enduring institutions, traditions and customs are seen as embodying accumulated wisdom, having survived precisely because they work in ways that may not be fully understood or easily articulated. Burke described society as a partnership "between those who are living, those who are dead, and those who are to be born" — we inherit institutions and hold them in trust for the future, rather than owning them to remake as we please.`,
          `This leads to a distinctive humility about reason and reform. Conservatives doubt that any generation, however clever, can fully grasp society's complexity or improve on the tested wisdom in long-standing institutions, and they worry about "unintended consequences" — the way well-meaning interventions in complex systems often produce unexpected harms. So even when an institution seems imperfect, the conservative counsels caution before sweeping it away, because it may serve purposes that are not obvious and its removal may cause more harm than the problem it was meant to solve. This is not a defence of everything as it is, but a demand that the burden of proof rest on those who would change things.`,
        ],
      },
      {
        heading: "Order, change and its varieties",
        body: [
          `Conservatism places a high value on social order, stability and the institutions that provide them — the rule of law, established authority, and often family, community and shared traditions — as the framework within which people can live secure and meaningful lives. It tends to view human nature as flawed and imperfectible rather than infinitely improvable, which makes it wary of utopian projects and inclined to see order and inherited restraints as necessary for a decent society.`,
          `Crucially, conservatism is not opposed to all change — Burke himself insisted that "a state without the means of some change is without the means of its conservation." The preference is for change that is gradual, cautious and organic, preserving continuity and building on what exists, rather than revolutionary rupture. The tradition contains real internal variety: some strands emphasise free markets and economic liberty, others social order and traditional values, and these can pull in different directions. But across its varieties, conservatism is united by its founding disposition: prudence about change, respect for the inherited and the tested, and suspicion of the confident belief that society can be perfected by design.`,
        ],
      },
      {
        heading: "The conservative instinct you already have",
        body: [
          `You think like a conservative more often than you might admit. The instinct to say "if it isn't broken, don't fix it", to be wary of a colleague's sweeping plan to reorganise everything at once, or to suspect that a clever scheme will have unintended consequences, is the conservative disposition in miniature. When you value a long-standing tradition partly because it has stood the test of time, or hesitate to tear something down before understanding why it was built, you are reasoning as Burke did. You may also feel its limits — when caution shades into defending the indefensible, or resisting genuinely needed change. Understanding conservatism as a disposition about how to change things, rather than a fixed programme, reveals a way of thinking about reform and tradition that runs far deeper than any party label.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "At its intellectual core, what is conservatism best understood as?",
        choices: [
          { id: "a", label: "A disposition favouring caution about radical change, respect for tradition, and scepticism of schemes to remake society" },
          { id: "b", label: "A fixed blueprint for the ideal society" },
          { id: "c", label: "The rejection of all institutions" },
          { id: "d", label: "A demand for constant revolution" },
        ],
        correctChoiceId: "a",
        explanation: "Conservatism is less a set of fixed policies than a temperament: a preference for continuity over rupture, respect for tested institutions, and distrust of sweeping transformation driven by abstract theory.",
      },
      {
        dimension: "depth",
        prompt: "What event and thinker shaped conservatism as a self-conscious tradition?",
        choices: [
          { id: "a", label: "Edmund Burke's reaction to the French Revolution in Reflections on the Revolution in France" },
          { id: "b", label: "Karl Marx's response to industrial capitalism" },
          { id: "c", label: "John Locke's theory of natural rights" },
          { id: "d", label: "The American Constitution" },
        ],
        correctChoiceId: "a",
        explanation: "Burke's 1790 Reflections, horrified by the French revolutionaries tearing down the social order for abstract principles, became the founding text of conservative thought and correctly predicted descent into chaos.",
      },
      {
        dimension: "reasoning",
        prompt: "What was Burke's core argument against wholesale, theory-driven reform?",
        choices: [
          { id: "a", label: "That society is enormously complex accumulated experience, and confidently redesigning it from abstract theory is arrogant and dangerous" },
          { id: "b", label: "That change is always impossible" },
          { id: "c", label: "That only kings should make decisions" },
          { id: "d", label: "That tradition has no value" },
        ],
        correctChoiceId: "a",
        explanation: "Burke argued the revolutionaries understood far less than they thought about the delicate web of institutions holding society together; sweeping them away for abstract theory would unleash forces they could not control.",
      },
      {
        dimension: "reasoning",
        prompt: "Why do conservatives counsel caution before sweeping away even an imperfect institution?",
        choices: [
          { id: "a", label: "Because it may serve purposes that are not obvious, and its removal may cause more harm than the problem it was meant to solve" },
          { id: "b", label: "Because all institutions are perfect" },
          { id: "c", label: "Because change is never needed" },
          { id: "d", label: "Because reason can fully grasp society" },
        ],
        correctChoiceId: "a",
        explanation: "Conservatives are humble about reason and worried about unintended consequences: a long-surviving institution may embody wisdom that is not fully understood, so the burden of proof should rest on those who would change it.",
      },
      {
        dimension: "reasoning",
        prompt: "Is conservatism opposed to all change?",
        choices: [
          { id: "a", label: "No — it prefers gradual, cautious, organic change over revolutionary rupture, as Burke's own words acknowledge" },
          { id: "b", label: "Yes, it opposes any change whatsoever" },
          { id: "c", label: "Yes, it demands constant revolution" },
          { id: "d", label: "It has no view on change" },
        ],
        correctChoiceId: "a",
        explanation: "Burke said a state without the means of change lacks the means of its own conservation; conservatism favours gradual, organic reform that preserves continuity, not the rejection of all change.",
      },
    ],
    sources: [
      { label: "Conservatism (SEP)", note: "Stanford Encyclopedia entry on conservative thought.", type: "Reference", url: "https://plato.stanford.edu/entries/conservatism/" },
      { label: "Edmund Burke, Reflections on the Revolution in France", note: "The founding text of modern conservatism.", type: "Primary", url: "https://www.gutenberg.org/ebooks/15679" },
    ],
  },
  {
    concept: "Socialism",
    level: "A-level",
    summary: "equality, collective ownership or control, and critique of class power",
    estimatedMinutes: 8,
    deck: "Socialism begins from a moral objection: that a society dividing into a few who own and many who merely work is unjust, and that the economy could be organised for the common good rather than private profit. From that root grows a family of very different movements, from revolutionary Marxism to the gentle welfare states of Scandinavia.",
    keyTerms: [
      { label: "Socialism", value: "The tradition seeking greater equality through collective ownership or control and a critique of class power." },
      { label: "Means of production", value: "The factories, land and capital used to produce goods — who owns them is central." },
      { label: "Class", value: "Groups defined by their relationship to economic production, and the power between them." },
      { label: "Reform vs revolution", value: "Achieving socialist aims gradually through democracy, or through revolutionary transformation." },
    ],
    sections: [
      {
        heading: "The critique of class",
        body: [
          `Socialism is built on a critique of economic inequality and the power of those who own wealth over those who do not. Its starting point is a moral objection to a society divided between a small class that owns the productive resources — factories, land, capital — and a large class that owns little and must sell its labour to survive. Socialists argue that this division produces injustice, exploitation and vast inequalities of wealth and power, and that society could and should be organised differently, for the collective good rather than private profit.`,
          `Central to socialist thinking is class: groups defined by their relationship to economic production, and the power imbalances between them. Socialists see the economy not as a neutral marketplace of equals but as a structure of unequal power, in which those who own capital have systematic advantages over those who only have their labour to sell. The distribution of wealth and power, on this view, reflects this underlying class structure, and genuine justice requires changing it rather than merely softening its worst effects — a focus that distinguishes socialism from traditions treating inequality as natural or acceptable.`,
        ],
      },
      {
        heading: "Marx and the radical analysis",
        body: [
          `The most influential socialist thinker was Karl Marx, whose 19th-century analysis of capitalism gave socialism much of its intellectual force. Marx argued that capitalism is inherently exploitative: workers produce value but the owners of capital capture the surplus as profit, so the system is built on the extraction of wealth from labour. He saw history as driven by class struggle, predicted that capitalism's contradictions would intensify, and anticipated that the working class would eventually overthrow it and establish a classless society based on common ownership.`,
          `Marx's analysis was powerful, but his predictions of capitalism's inevitable collapse did not come true as he expected, and the revolutionary socialist states built in his name in the 20th century largely became authoritarian and economically dysfunctional — a history that profoundly shaped later debates. Yet his core insights — that economic structures shape society and politics, that capitalism generates inequality and class power, and that the arrangements of ownership are political choices rather than natural facts — remain influential far beyond those who accept his full theory or revolutionary conclusions. His critique put economic power permanently on the political agenda.`,
        ],
      },
      {
        heading: "Reform or revolution",
        body: [
          `A fundamental division runs through the tradition over how socialist goals should be achieved. Revolutionary socialists, in the Marxist tradition, held that capitalism could not be genuinely reformed from within and had to be overthrown, replacing private ownership of the means of production with collective or state ownership. This path was taken, with catastrophic results, by the communist regimes of the 20th century, which combined the abolition of private enterprise with one-party dictatorship and, often, mass repression.`,
          `Reformist or "social democratic" socialists took a very different route, seeking greater equality and social justice gradually and peacefully, through democratic politics rather than revolution. Rather than abolishing capitalism, they sought to tame and regulate it: welfare states, strong public services, workers' rights and trade unions, progressive taxation, and government provision of healthcare, education and social security. The Scandinavian countries are often cited as successful social democracies, combining market economies with extensive redistribution and public provision. This reformist strand, accepting markets and democracy while insisting on substantial equality, has been socialism's most enduring and successful form in the democratic world.`,
        ],
      },
      {
        heading: "Ownership, equality and the common good",
        body: [
          `Beyond the reform-versus-revolution divide, socialist ideas cluster around several commitments. One is greater equality — not necessarily identical outcomes, but a strong concern to reduce the vast gaps in wealth, power and opportunity that unregulated markets produce, and a belief that extreme inequality is unjust and corrosive. Another is collective ownership or control of at least some economic activity — through state ownership, public services, cooperatives or regulation — so that key resources serve the common good rather than only private gain.`,
          `A third is solidarity and the common good: the idea that people have obligations to one another and that society should be organised cooperatively, providing collectively for needs like healthcare, education and security rather than leaving individuals to fend for themselves in the market. Different socialists emphasise these to different degrees, which is why socialism ranges so widely. But across its varieties it is united by the conviction that the economy is a political matter, that its current arrangements produce unjust inequality and class power, and that a fairer, more equal and cooperative society is possible and worth striving for. Even in societies that reject socialism as a whole, socialist pressure has shaped the welfare states, public services and workers' protections most now take for granted.`,
        ],
      },
      {
        heading: "The socialist ideas woven into modern life",
        body: [
          `Whatever your politics, socialist ideas have shaped the world you live in more than you may realise. Public healthcare, state education, pensions, unemployment support, the minimum wage, trade unions and workers' rights, progressive taxation — all owe much to socialist and social-democratic movements insisting that the economy serve the common good, not just private profit. When you debate whether inequality has grown too extreme, whether essential services should be public or private, or whether workers get a fair share of what they produce, you are engaging socialism's core questions about class, ownership and fairness. Understanding socialism as a family of movements — from failed revolutionary experiments to the successful welfare states of northern Europe — lets you see both the appeal of its moral critique and the very different, very consequential ways it has been pursued.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is the starting point of socialism?",
        choices: [
          { id: "a", label: "A moral objection to a society divided between a few who own productive resources and many who must sell their labour" },
          { id: "b", label: "A defence of unregulated free markets" },
          { id: "c", label: "The belief that inequality is always natural and just" },
          { id: "d", label: "Support for hereditary monarchy" },
        ],
        correctChoiceId: "a",
        explanation: "Socialism begins from a critique of economic inequality and class power, objecting to a division between owners of capital and those who must sell their labour, and arguing the economy could serve the common good rather than private profit.",
      },
      {
        dimension: "depth",
        prompt: "What did Marx argue about capitalism?",
        choices: [
          { id: "a", label: "That it is inherently exploitative — workers produce value but owners capture the surplus as profit — and driven by class struggle" },
          { id: "b", label: "That it produces perfect equality" },
          { id: "c", label: "That it should never be criticised" },
          { id: "d", label: "That class does not exist" },
        ],
        correctChoiceId: "a",
        explanation: "Marx argued capitalism extracts wealth from labour as profit, that history is driven by class struggle, and that capitalism's contradictions would lead the working class to overthrow it — an influential analysis whose predictions of collapse did not unfold as expected.",
      },
      {
        dimension: "depth",
        prompt: "How does reformist (social democratic) socialism differ from revolutionary socialism?",
        choices: [
          { id: "a", label: "It seeks greater equality gradually through democracy, taming and regulating capitalism rather than overthrowing it" },
          { id: "b", label: "It seeks to abolish democracy" },
          { id: "c", label: "It rejects all public services" },
          { id: "d", label: "It is identical to revolutionary socialism" },
        ],
        correctChoiceId: "a",
        explanation: "Social democrats pursue equality peacefully through democratic politics — welfare states, public services, workers' rights, progressive taxation — taming capitalism rather than overthrowing it, as in the Scandinavian model.",
      },
      {
        dimension: "reasoning",
        prompt: "Why do socialists see the economy as a 'structure of unequal power' rather than a neutral marketplace?",
        choices: [
          { id: "a", label: "Because those who own capital have systematic advantages over those who only have their labour to sell" },
          { id: "b", label: "Because all market participants are perfectly equal" },
          { id: "c", label: "Because markets do not exist" },
          { id: "d", label: "Because everyone owns the means of production" },
        ],
        correctChoiceId: "a",
        explanation: "Socialists argue the economy embeds a class structure in which capital owners hold systematic power over workers, so the distribution of wealth reflects that imbalance and genuine justice requires changing it, not just softening its effects.",
      },
      {
        dimension: "reasoning",
        prompt: "What enduring influence has socialism had even in societies that reject it as a whole?",
        choices: [
          { id: "a", label: "It shaped welfare states, public services and workers' protections that most now take for granted" },
          { id: "b", label: "It had no effect on any modern society" },
          { id: "c", label: "It abolished all private property everywhere" },
          { id: "d", label: "It only ever produced dictatorships" },
        ],
        correctChoiceId: "a",
        explanation: "Public healthcare, state education, pensions, the minimum wage and workers' rights owe much to socialist and social-democratic pressure to make the economy serve the common good — shaping institutions widely taken for granted.",
      },
    ],
    sources: [
      { label: "Socialism (overview)", note: "Reference on the socialist tradition and its varieties.", type: "Reference", url: "https://en.wikipedia.org/wiki/Socialism" },
      { label: "Karl Marx (SEP)", note: "Stanford Encyclopedia entry on Marx's analysis of capitalism and class.", type: "Reference", url: "https://plato.stanford.edu/entries/marx/" },
    ],
  },
  {
    concept: "Populism",
    level: "University",
    summary: "politics framed as pure people against corrupt elites",
    estimatedMinutes: 9,
    deck: "Populism is not a programme but a way of dividing the political world: into a pure, unified 'people' and a corrupt, self-serving 'elite'. This deceptively simple frame can attach to the left or the right, and its rise across the democratic world has made understanding it — and its uneasy relationship with democracy — genuinely urgent.",
    keyTerms: [
      { label: "Populism", value: "A political approach pitting a virtuous 'people' against a corrupt 'elite'." },
      { label: "Thin ideology", value: "Populism as a frame that attaches to fuller ideologies of left or right." },
      { label: "The pure people", value: "The populist claim to represent a single, unified, virtuous popular will." },
      { label: "Anti-pluralism", value: "The populist tendency to deny the legitimacy of opponents and dissent." },
    ],
    sections: [
      {
        heading: "The people against the elite",
        body: [
          `Populism is best understood not as a set of policies but as a way of framing politics: as a fundamental conflict between two homogeneous, antagonistic groups — a pure, virtuous "people" on one side, and a corrupt, self-serving "elite" on the other. The populist claims to be the authentic voice of ordinary people against an establishment that has betrayed them, and argues that politics should express the genuine will of this people, which the elite has ignored or suppressed. This framing, more basic than any specific programme, is the essence of populism.`,
          `The scholar Cas Mudde describes populism as a "thin-centred ideology" — one that divides society into "the pure people" versus "the corrupt elite" but does not, by itself, offer a full account of how society should be organised. Because it is thin, populism attaches to fuller "host" ideologies, which is why it appears on both left and right. Left populism typically casts the elite as the wealthy and big business exploiting ordinary people; right populism often casts it as a cultural and political establishment, sometimes bundled with hostility to immigrants or minorities framed as outside the "real" people. The populist frame is the constant; what it attaches to varies.`,
        ],
      },
      {
        heading: "The seductive simplicity",
        body: [
          `Populism's power comes partly from its simplicity and emotional appeal. It offers a clear story: your problems are the fault of a corrupt elite who have betrayed you, and the solution is to restore power to the true people (usually led by the populist). This narrative is emotionally satisfying, easy to grasp, and often contains a genuine grievance — populism frequently rises when significant groups feel ignored, left behind, or held in contempt by established elites, channelling real anger at genuine failures of representation. It should not be dismissed as mere irrationality; it often points to real problems even when its remedies are dubious.`,
          `But the same simplicity is dangerous, because the political world is not actually divided into a single virtuous people and a single villainous elite. Real societies contain many groups with legitimately different interests and views; "the people" is not one thing with one will. Populism's insistence that there is a single, unified popular will, which the populist alone represents, papers over this genuine diversity and pluralism. It offers simple answers to complex problems and a single enemy to blame, which is appealing but misleading — and treating complex trade-offs as mere elite betrayal can make good governance harder.`,
        ],
      },
      {
        heading: "The tension with democracy",
        body: [
          `Populism has a complicated relationship with democracy. On one hand, it appeals directly to democratic ideals — the sovereignty of the people, government by popular will — and can serve as a corrective, forcing established elites to address neglected concerns and re-engaging disillusioned citizens. In this sense it can be a symptom of democratic failures and even, sometimes, a spur to renewal; populists are not wrong that democracy is supposed to be rule by the people.`,
          `On the other hand, populism sits in tension with liberal democracy's protections and can become a threat to it. The claim to represent the single true will of the people can shade into denying the legitimacy of opponents, cast not as fellow citizens with different views but as enemies of the people or agents of the corrupt elite. This anti-pluralism is populism's dangerous edge: if only the populist represents the real people, then opposition, dissent, independent courts, a critical press and minority rights can all be portrayed as illegitimate obstacles to the popular will. Populist leaders in power have repeatedly used this logic to attack the checks and balances of liberal democracy in the name of the majority they claim to embody.`,
        ],
      },
      {
        heading: "Why populism is rising",
        body: [
          `The recent surge of populism across many democracies has prompted much analysis. Explanations include economic factors — inequality, insecurity, and the effects of globalisation and financial crises leaving significant groups feeling economically abandoned — and cultural factors — rapid social change, immigration, and a sense among some groups that their identity, values or status are threatened and that elites hold them in contempt. Distrust of established institutions, media and experts, and the role of social media in spreading emotionally charged, us-versus-them narratives, are also widely cited.`,
          `Whatever the precise mix, populism's rise is widely understood as reflecting real failures of representation: significant numbers of people feeling the political system does not listen to them or serve their interests, and turning to leaders who promise to give them back their voice. This means populism cannot simply be defeated by dismissing its supporters; the grievances it channels are often real, even where its diagnosis and remedies are flawed. Understanding it therefore means taking seriously both its genuine roots in democratic discontent and its capacity, when it denies pluralism and attacks institutional checks, to endanger the very democracy it claims to restore — neither celebrating nor dismissing it captures its complexity.`,
        ],
      },
      {
        heading: "Spotting the frame in the wild",
        body: [
          `Once you know the populist frame, you see it everywhere in political rhetoric: the appeal to a pure, ordinary "people" betrayed by a corrupt "elite", the promise to give the people back their voice, the casting of opponents not as rivals but as enemies of the people. You can recognise it on both the left and the right, since it is a frame that attaches to different content. And you can distinguish its legitimate core — real anger at genuine failures of representation, which democracies ignore at their peril — from its dangerous edge, the anti-pluralist denial that opponents, dissent, courts and a free press have any legitimate place. Learning to see populism as a way of dividing the political world, rather than a fixed ideology, lets you recognise the real grievances it channels while remaining alert to the threat it can pose to the pluralism democracy depends on.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "How is populism best understood?",
        choices: [
          { id: "a", label: "As a way of framing politics as a conflict between a pure 'people' and a corrupt 'elite'" },
          { id: "b", label: "As a fixed set of economic policies" },
          { id: "c", label: "As a synonym for democracy" },
          { id: "d", label: "As support for rule by experts" },
        ],
        correctChoiceId: "a",
        explanation: "Populism is a frame, not a programme: it divides politics into a virtuous 'people' versus a corrupt 'elite', claiming to be the authentic voice of ordinary people against a betraying establishment.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can populism appear on both the left and the right?",
        choices: [
          { id: "a", label: "Because it is a 'thin' ideology that attaches to fuller host ideologies, which define who counts as the 'elite'" },
          { id: "b", label: "Because it has no relationship to other ideologies" },
          { id: "c", label: "Because left and right are identical" },
          { id: "d", label: "Because it only ever appears on the right" },
        ],
        correctChoiceId: "a",
        explanation: "As Mudde argues, populism is thin-centred: it supplies the people-versus-elite frame but attaches to host ideologies — left populism casts the elite as the wealthy, right populism as a cultural establishment, sometimes with hostility to minorities.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is populism's insistence on a single 'popular will' misleading?",
        choices: [
          { id: "a", label: "Because real societies contain many groups with legitimately different interests; 'the people' is not one thing with one will" },
          { id: "b", label: "Because the people never have any views" },
          { id: "c", label: "Because elites do not exist" },
          { id: "d", label: "Because everyone always agrees" },
        ],
        correctChoiceId: "a",
        explanation: "The political world is not actually divided into one virtuous people and one villainous elite; populism papers over genuine diversity and pluralism by claiming a single unified will that the populist alone represents.",
      },
      {
        dimension: "reasoning",
        prompt: "What is populism's 'anti-pluralist' dangerous edge?",
        choices: [
          { id: "a", label: "Casting opponents, dissent, courts and a free press as illegitimate obstacles to the true will of the people" },
          { id: "b", label: "Encouraging more political parties" },
          { id: "c", label: "Strengthening independent courts" },
          { id: "d", label: "Welcoming all opposing views" },
        ],
        correctChoiceId: "a",
        explanation: "If only the populist represents the real people, opponents become enemies of the people and checks like independent courts, a critical press and minority rights are portrayed as illegitimate — a logic used to attack liberal democracy's safeguards.",
      },
      {
        dimension: "depth",
        prompt: "Why can't populism simply be defeated by dismissing its supporters?",
        choices: [
          { id: "a", label: "Because it channels real grievances and failures of representation, even where its diagnosis and remedies are flawed" },
          { id: "b", label: "Because its supporters are always irrational" },
          { id: "c", label: "Because it has no supporters" },
          { id: "d", label: "Because it never addresses real problems" },
        ],
        correctChoiceId: "a",
        explanation: "Populism often rises when significant groups feel ignored or held in contempt by elites, channelling genuine anger at real failures of representation — so dismissing supporters misses the real discontent it reflects.",
      },
    ],
    sources: [
      { label: "Cas Mudde on populism (overview)", note: "Reference on populism as a thin-centred ideology.", type: "Reference", url: "https://en.wikipedia.org/wiki/Populism" },
      { label: "Jan-Werner Müller, What Is Populism?", note: "Influential account of populism's anti-pluralism.", type: "Reference", url: "https://en.wikipedia.org/wiki/What_Is_Populism%3F" },
    ],
  },
  {
    concept: "Federalism",
    level: "University",
    summary: "power divided between central and regional governments",
    estimatedMinutes: 9,
    deck: "Should a country be governed from one centre, or should power be shared between a national government and regional ones, each supreme in its own sphere? Federalism is the answer that divides sovereignty itself — a way of holding large, diverse societies together by letting different levels of government each hold genuine, constitutionally protected power.",
    keyTerms: [
      { label: "Federalism", value: "A system dividing power between a central government and regional governments, each with protected authority." },
      { label: "Unitary state", value: "A system where ultimate power rests with the central government." },
      { label: "Division of powers", value: "The constitutional allocation of authority between levels of government." },
      { label: "Subsidiarity", value: "The principle that decisions should be taken at the most local level capable of handling them." },
    ],
    sections: [
      {
        heading: "Dividing sovereignty",
        body: [
          `Federalism is a system in which power is constitutionally divided between a central (national) government and regional governments — states, provinces or Länder — with each level having its own areas of genuine, protected authority. The defining feature is that the regional governments are not merely creatures of the centre that can be abolished or overridden at will; their powers are guaranteed, usually by a constitution, so that within their sphere they are genuinely autonomous. Federalism thus divides sovereignty itself, rather than concentrating it in one place.`,
          `This distinguishes federalism from a "unitary" state, in which ultimate power rests with the central government, and any regional or local authorities exist at its discretion and exercise only powers the centre chooses to delegate and could reclaim. Most countries are unitary; a minority, including some of the largest and most diverse — the United States, Germany, Canada, Australia, India, Brazil — are federal. The choice between these arrangements is one of the most fundamental in designing a political system, shaping how power is distributed and where decisions are made.`,
        ],
      },
      {
        heading: "Why divide power this way",
        body: [
          `Federalism serves several purposes. Historically, it has often been a way of uniting previously separate or diverse territories into a single country while allowing them to retain significant self-government — a bargain that makes union acceptable to regions that would not accept being simply absorbed. It is especially valuable for large countries and for those with significant regional, ethnic, linguistic or religious diversity, because it lets different regions govern themselves in matters they care about, accommodating diversity within a single state rather than forcing uniformity or risking break-up.`,
          `Federalism also disperses power, which many see as a safeguard against tyranny. By dividing authority between levels of government, it creates an additional check beyond the separation of the legislative, executive and judicial branches: the centre and regions can check each other, and no single government controls everything. It can also let regions act as "laboratories", experimenting with different policies so successful innovations spread and failures remain contained. And it can bring government closer to the people, allowing decisions to be tailored to local conditions rather than imposed uniformly from a distant capital.`,
        ],
      },
      {
        heading: "Dividing the powers",
        body: [
          `The heart of any federal system is the division of powers: which matters fall to the central government and which to the regions. Typically the centre handles matters that must be uniform or national — defence, foreign affairs, the currency, often major economic regulation — while regions handle matters better suited to local variation, such as education, policing, local infrastructure and many social services, though the exact allocation varies greatly between federations. Some powers are exclusive to one level; others are shared or "concurrent".`,
          `A related principle, prominent in the European Union and in Catholic social thought, is "subsidiarity": the idea that decisions should be taken at the most local level capable of handling them effectively, with higher levels acting only where lower ones cannot. This provides a principle for deciding where power should sit — a bias toward the local unless there is good reason to go higher. Drawing and maintaining these lines is genuinely difficult, and disputes over which level has authority over a given matter are a constant feature of federal systems, often ultimately resolved by constitutional courts policing the boundaries.`,
        ],
      },
      {
        heading: "Tensions and trade-offs",
        body: [
          `Federalism is powerful but brings real tensions and costs. Dividing power can produce inconsistency and inequality — different regions may have very different laws, rights, services and standards, so citizens of the same country experience quite different treatment depending on where they live, which can seem unfair. Coordination between levels can be cumbersome, and disputes over jurisdiction can produce gridlock, duplication and buck-passing, where each level blames the other and problems that cross boundaries go unaddressed.`,
          `There is also a perpetual tension over the balance of power between the levels, rarely static. In many federations power has tended to drift toward the centre over time, as national governments take on more responsibilities, control more revenue, and use their financial weight to influence regional policy; in others, regions push for greater autonomy, sometimes to the point of secessionist pressure. Managing this balance — keeping enough unity to function as one country while preserving enough regional autonomy to accommodate diversity — is the enduring challenge of federalism. Done well, it holds diverse societies together and disperses power; done badly, it produces paralysis, inequality or conflict between the levels.`,
        ],
      },
      {
        heading: "The layered government around you",
        body: [
          `You live under layered government whether or not your country is formally federal. In a federal system, different laws on taxes, education, policing or drugs on either side of a state or provincial border show federalism directly — the same country, different rules, because regions hold genuine power. Even in unitary states, debates about devolution, regional assemblies and how much power to hand from the capital to local areas are arguments about the federal question of where power should sit. When you notice that a decision affecting you is made locally rather than nationally, or vice versa, and wonder whether it is at the right level, you are engaging the logic of subsidiarity. Understanding federalism reveals that "the government" is often not one thing but several layers, dividing power in ways that shape which decisions are made close to you and which far away.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is the defining feature of federalism?",
        choices: [
          { id: "a", label: "Power is constitutionally divided between central and regional governments, each with its own protected authority" },
          { id: "b", label: "All power rests with a single central government" },
          { id: "c", label: "There is no central government at all" },
          { id: "d", label: "Regions can be abolished by the centre at will" },
        ],
        correctChoiceId: "a",
        explanation: "In federalism, regional governments have genuine, constitutionally protected powers within their sphere — not merely delegated authority the centre could reclaim — so it divides sovereignty rather than concentrating it.",
      },
      {
        dimension: "depth",
        prompt: "How does a unitary state differ from a federal one?",
        choices: [
          { id: "a", label: "In a unitary state ultimate power rests with the central government, and local authorities exist at its discretion" },
          { id: "b", label: "A unitary state has no government" },
          { id: "c", label: "A unitary state always has more regions" },
          { id: "d", label: "They are identical" },
        ],
        correctChoiceId: "a",
        explanation: "In a unitary state (most countries) the centre holds ultimate power and any local authorities exercise only powers it chooses to delegate and could reclaim, unlike federalism's constitutionally protected regional powers.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is federalism especially valuable for large, diverse countries?",
        choices: [
          { id: "a", label: "It lets different regions govern themselves in matters they care about, accommodating diversity within one state" },
          { id: "b", label: "It forces complete uniformity on every region" },
          { id: "c", label: "It abolishes all regional differences" },
          { id: "d", label: "It only works in tiny countries" },
        ],
        correctChoiceId: "a",
        explanation: "Federalism unites diverse territories while letting them retain self-government, accommodating regional, ethnic or linguistic diversity within a single state rather than forcing uniformity or risking break-up.",
      },
      {
        dimension: "depth",
        prompt: "What does the principle of 'subsidiarity' hold?",
        choices: [
          { id: "a", label: "That decisions should be taken at the most local level capable of handling them effectively" },
          { id: "b", label: "That all decisions should be centralised" },
          { id: "c", label: "That regions should never have any power" },
          { id: "d", label: "That courts should make all decisions" },
        ],
        correctChoiceId: "a",
        explanation: "Subsidiarity biases decisions toward the most local level able to handle them, with higher levels acting only where lower ones cannot — a principle for deciding where power should sit in a federal system.",
      },
      {
        dimension: "reasoning",
        prompt: "What is a genuine tension or cost of federalism?",
        choices: [
          { id: "a", label: "Different regions may have very different laws and services, so citizens of one country are treated quite differently by location" },
          { id: "b", label: "It guarantees identical treatment everywhere" },
          { id: "c", label: "It always eliminates gridlock" },
          { id: "d", label: "It removes all checks on power" },
        ],
        correctChoiceId: "a",
        explanation: "Dividing power can produce inconsistency and inequality, cumbersome coordination, jurisdictional disputes and buck-passing; managing the balance between unity and regional autonomy is federalism's enduring challenge.",
      },
    ],
    sources: [
      { label: "Federalism (SEP)", note: "Stanford Encyclopedia entry on federalism and its justifications.", type: "Reference", url: "https://plato.stanford.edu/entries/federalism/" },
      { label: "Federalism (overview)", note: "Reference on federal versus unitary systems and division of powers.", type: "Reference", url: "https://en.wikipedia.org/wiki/Federalism" },
    ],
  },
  {
    concept: "Public Policy",
    level: "University",
    summary: "government action shaped by evidence, ideology and implementation",
    estimatedMinutes: 9,
    deck: "Passing a law is the easy part; making it actually work in the messy real world is where most government action succeeds or fails. Public policy is the study of what governments choose to do and how — a field where evidence collides with ideology, and where the gap between a policy on paper and its effect on the ground is often vast.",
    keyTerms: [
      { label: "Public policy", value: "The choices governments make about what to do (and not do) to address problems." },
      { label: "The policy cycle", value: "A model of policymaking as stages: agenda, formulation, decision, implementation, evaluation." },
      { label: "Implementation gap", value: "The difference between a policy as designed and as it works in practice." },
      { label: "Unintended consequences", value: "Effects of a policy that were not anticipated, often undermining its goals." },
    ],
    sections: [
      {
        heading: "What governments choose to do",
        body: [
          `Public policy is the study of what governments actually do — the courses of action (and deliberate inaction) they choose to address public problems, from healthcare and education to crime, the environment and the economy. It moves beyond abstract political ideas to the concrete question of how governing power is used in practice: what problems get tackled, what solutions are chosen, and what actually happens as a result. It is where the lofty world of political principle meets the hard reality of trying to change things in a complex society.`,
          `A useful starting framework is the "policy cycle", which models policymaking as stages: getting an issue onto the agenda, formulating possible solutions, deciding on one, implementing it, and evaluating the results (which may feed into new agenda-setting). This is a simplification — real policymaking is messier, more circular and more political than any tidy cycle suggests — but it usefully highlights that policy is a process with distinct phases, each with its own challenges, rather than a single act of decision. Failures can occur at any stage, and identifying which stage is failing is often the key to understanding why a policy did not work.`,
        ],
      },
      {
        heading: "Evidence versus ideology",
        body: [
          `A central tension in public policy is between evidence and ideology. On one hand there is a strong case for "evidence-based policy": using data, research and evaluation to work out what actually works and design policies accordingly, rather than relying on assumption, tradition or political convenience. On the other, policy is inevitably shaped by values and ideology — beliefs about what government should do and how to weigh competing goods like liberty against equality or efficiency against fairness. These are not questions evidence alone can settle.`,
          `The relationship is complex and often uneasy. Evidence can tell you whether a policy is likely to achieve a given goal, but not which goals to pursue — that is a matter of values. In practice, evidence is frequently contested, incomplete, or ignored when it conflicts with political priorities, while ideology can masquerade as evidence and "evidence" can be cherry-picked to support predetermined positions. Good policymaking requires being honest about which questions are empirical (what works?) and which are normative (what should we value?), using evidence rigorously for the former while acknowledging the latter are genuine political choices. Confusing the two — treating value choices as technical facts, or dismissing inconvenient evidence as mere opinion — corrupts policy debate.`,
        ],
      },
      {
        heading: "The implementation gap",
        body: [
          `Perhaps the most underappreciated lesson of public policy is that designing a policy and passing a law is often the easy part; making it work in practice is where most policies succeed or fail. The "implementation gap" is the frequently large difference between a policy as it exists on paper and what actually happens when it meets the real world of frontline workers, complex organisations, resistant interests, limited resources and unpredictable human behaviour. A brilliantly designed policy that cannot be implemented effectively achieves nothing.`,
          `Implementation is hard for many reasons: it depends on the cooperation and competence of many actors the policymaker does not directly control; frontline workers exercise discretion that can reshape a policy in practice; resources may be inadequate; those affected may resist or adapt in unexpected ways; and organisations may lack the capacity to deliver. This is why so many well-intentioned policies disappoint, and why serious policy analysis pays close attention to the practicalities of delivery, not just the elegance of design. A policy is only as good as its implementation, and thinking through how something will actually be delivered, on the ground, by real people, is as important as deciding what to do.`,
        ],
      },
      {
        heading: "Unintended consequences",
        body: [
          `Public policy operates on complex social systems, which respond to intervention in ways that are hard to predict, so policies frequently produce "unintended consequences" — effects that were not anticipated and that can partly or wholly undermine the policy's goals, or create new problems. People and organisations adapt to policies in unexpected ways, incentives interact, and interventions ripple through interconnected systems with knock-on effects far from the target. A classic pattern is the perverse incentive, where a policy meant to encourage one thing accidentally rewards another, producing behaviour opposite to what was intended.`,
          `This is a recurring humbling lesson in governance: our ability to predict and control interventions in complex human systems is limited, and confident schemes often go awry in ways their designers never foresaw. It connects to the conservative caution about grand reform and the general difficulty of steering complex systems. The practical implications are to favour humility, to test and pilot policies before rolling them out widely, to monitor for unexpected effects, and to build in the ability to adjust as reality reveals what a policy actually does. Good policymaking treats a policy less as a final answer imposed on the world and more as a hypothesis to be tested, monitored and revised.`,
        ],
      },
      {
        heading: "Why good intentions aren't enough",
        body: [
          `Public policy explains why government so often disappoints even well-meaning citizens. When a law you supported fails to achieve its aim, the problem is frequently not the intention but the implementation — the gap between the policy on paper and its collision with frontline reality. When a scheme designed to fix one problem creates a new one, you are seeing unintended consequences in a complex system. When people argue past each other about a policy, they are often confusing what-works questions (settled by evidence) with what-we-should-value questions (settled by politics). Understanding public policy makes you a sharper citizen: it teaches you to ask not just "is this a good idea?" but "will it actually work in practice, what might it accidentally cause, and is the real disagreement about evidence or about values?" — the questions that separate serious thinking about government from wishful thinking.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What does the field of public policy study?",
        choices: [
          { id: "a", label: "What governments actually choose to do (and not do) to address public problems, and what results" },
          { id: "b", label: "Only the abstract theory of political ideas" },
          { id: "c", label: "Only how elections are run" },
          { id: "d", label: "Only the personalities of politicians" },
        ],
        correctChoiceId: "a",
        explanation: "Public policy is the concrete study of how governing power is used — what problems get tackled, what solutions are chosen and what actually happens — where political principle meets the reality of changing a complex society.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the key distinction between evidence and ideology in policy?",
        choices: [
          { id: "a", label: "Evidence can show whether a policy achieves a goal (an empirical question); ideology concerns which goals to pursue (a value question)" },
          { id: "b", label: "Evidence and ideology are the same thing" },
          { id: "c", label: "Ideology settles all empirical questions" },
          { id: "d", label: "Evidence can decide which values to hold" },
        ],
        correctChoiceId: "a",
        explanation: "Evidence tells you what works but not which goals to value; good policymaking separates empirical questions (what works?) from normative ones (what should we value?), and confusing the two corrupts policy debate.",
      },
      {
        dimension: "depth",
        prompt: "What is the 'implementation gap'?",
        choices: [
          { id: "a", label: "The difference between a policy as designed on paper and what actually happens when it meets the real world" },
          { id: "b", label: "The time between two elections" },
          { id: "c", label: "The gap between two political parties" },
          { id: "d", label: "The difference between two countries' laws" },
        ],
        correctChoiceId: "a",
        explanation: "The implementation gap is the often large difference between a policy on paper and its effect in practice, when it meets frontline workers, complex organisations, limited resources and unpredictable behaviour — a policy is only as good as its implementation.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is implementation so difficult?",
        choices: [
          { id: "a", label: "It depends on many actors the policymaker does not control, with frontline discretion, limited resources and unexpected resistance" },
          { id: "b", label: "Because passing the law is the hard part" },
          { id: "c", label: "Because policies never need to be delivered" },
          { id: "d", label: "Because implementation is always automatic" },
        ],
        correctChoiceId: "a",
        explanation: "Delivery depends on the cooperation and competence of actors the policymaker does not directly control, frontline discretion reshaping the policy, inadequate resources, and those affected resisting or adapting unexpectedly — which is why many well-intentioned policies disappoint.",
      },
      {
        dimension: "reasoning",
        prompt: "Why do policies frequently produce 'unintended consequences'?",
        choices: [
          { id: "a", label: "Because complex social systems respond to intervention in hard-to-predict ways, as people and incentives adapt unexpectedly" },
          { id: "b", label: "Because policymakers plan them deliberately" },
          { id: "c", label: "Because complex systems are easy to predict" },
          { id: "d", label: "Because policies never affect behaviour" },
        ],
        correctChoiceId: "a",
        explanation: "Interventions ripple through interconnected systems as people and organisations adapt and incentives interact, so effects emerge that undermine goals or create new problems — hence the value of piloting, monitoring and treating policy as a hypothesis to be revised.",
      },
    ],
    sources: [
      { label: "Public policy (overview)", note: "Reference on the policy process, the policy cycle and analysis.", type: "Reference", url: "https://en.wikipedia.org/wiki/Public_policy" },
      { label: "Implementation and unintended consequences (overview)", note: "Reference on the implementation gap and perverse incentives.", type: "Reference", url: "https://en.wikipedia.org/wiki/Unintended_consequences" },
    ],
  },
];

export const politicsLessons = buildAuthoredLessons("politics", politics);
