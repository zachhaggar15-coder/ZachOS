import { buildAuthoredLessons, type AuthoredLesson } from "./types";

// Ten hand-written Politics lessons: researched, concept-specific prose with
// named thinkers and real distinctions, each closing on an everyday example,
// plus genuine recall quizzes.
const politics: AuthoredLesson[] = [
  {
    concept: "Power",
    level: "GCSE",
    summary: "the ability to shape behaviour, rules and outcomes",
    estimatedMinutes: 7,
    deck: "Power is the central concept of politics, and it is subtler than it looks. The crudest power forces you to do something; a cleverer power sets the agenda so your options are limited before you choose; and the deepest power shapes what you want in the first place, so you never feel forced at all.",
    keyTerms: [
      { label: "Power", value: "The ability to shape behaviour, rules and outcomes, even against resistance." },
      { label: "Coercion vs influence", value: "Getting compliance by force or threat, versus by persuasion or authority." },
      { label: "Agenda-setting", value: "Controlling which issues even get considered — power over the options." },
      { label: "The three faces of power", value: "Lukes's idea of power as decisions, agendas and shaping desires." },
    ],
    sections: [
      {
        heading: "Getting others to act",
        body: [
          `Power is the ability to shape behaviour, rules and outcomes — to make things happen and get others to do what you want, even when they might resist. The political scientist Robert Dahl gave the classic definition: A has power over B to the extent that A can get B to do something B would not otherwise do. This captures the most visible form of power: one actor prevailing over another in a direct contest of wills. Whoever wins the vote, the argument or the fight has exercised power in this obvious sense.`,
          `But this is only the most visible face of power, and treating it as the whole story misses much of how power works. Power can be exercised through force and coercion, but also through authority, persuasion, wealth, information and control of institutions. Understanding politics means learning to see power in all its forms, including the quiet and hidden ones, rather than only the loud confrontations where it is obvious who is pushing whom.`,
        ],
      },
      {
        heading: "Power over the agenda",
        body: [
          `A deeper form of power lies in controlling what is even up for discussion — "agenda-setting". If you can keep an issue off the table entirely, so it is never debated or voted on, you exercise power without ever having to win an open fight. The most effective power may be invisible precisely because it prevents challenges from arising: a question that is never asked, an option never considered, cannot be decided against you.`,
          `This "second face" of power, identified by Bachrach and Baratz, matters because studying only visible decisions misses those quietly excluded. Who decides what counts as a legitimate issue? Whose concerns never make it onto the agenda? A group can be defeated not by losing debates but by never getting its concerns treated as worthy of debate at all. Recognising agenda-setting power means asking not just "who won?" but "what was never allowed to be a question?"`,
        ],
      },
      {
        heading: "Power over minds",
        body: [
          `The most profound form of power, argued the theorist Steven Lukes, is the "third face": the power to shape people's very wants, beliefs and perceptions, so they willingly accept a situation that may not serve their interests. If you can make people want what you want them to want — or accept their circumstances as natural, inevitable or fair — you never need to coerce them or even win arguments. They comply willingly, and may not even perceive that power is being exercised at all.`,
          `This is the power to prevent conflict from arising by shaping consciousness itself, through culture, education, media and the framing of what is "normal" or "realistic". It is the most controversial face, because it is hardest to observe and prove, and it raises deep questions about whether people's expressed preferences truly reflect their interests. But it captures something real: the deepest domination is the kind not felt as domination, because those subject to it have internalised it as simply how things are.`,
        ],
      },
      {
        heading: "Hard and soft power",
        body: [
          `A related distinction, developed by Joseph Nye for international relations but applicable widely, is between "hard" and "soft" power. Hard power gets what you want through coercion and inducement — force, threats, money, sanctions: the stick and the carrot. Soft power gets what you want through attraction and persuasion — making others want what you want because they admire your values, culture or example. Soft power co-opts rather than compels.`,
          `The insight is that the most effective and durable power is often not the most forceful. A country, organisation or person that others admire and want to emulate can shape outcomes far more cheaply and lastingly than one that must constantly coerce. Relying purely on hard power is expensive and breeds resentment and resistance; soft power, where it exists, achieves willing cooperation. Real influence usually combines both, which explains why the loudest, most forceful actors are not always the most powerful in the end.`,
        ],
      },
      {
        heading: "The power you can't see",
        body: [
          `You experience all these faces of power beyond politics. At work, the obvious power is the boss who overrules you; the subtler power is who controls the meeting agenda, deciding which ideas even get discussed; the deepest is the workplace culture that makes certain options feel unthinkable so no one proposes them. In your own life, notice when you accept something as "just the way things are" — that acceptance may itself be power at work, shaping what you think is possible. And notice the difference between people who influence you by pressure and those you follow because you admire them: hard versus soft power. Seeing power in its hidden forms, not just its obvious confrontations, is the first real skill of political thinking.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "How did Robert Dahl classically define power?",
        choices: [
          { id: "a", label: "A has power over B insofar as A can get B to do something B would not otherwise do" },
          { id: "b", label: "Power is simply the amount of money someone has" },
          { id: "c", label: "Power is only the ability to make laws" },
          { id: "d", label: "Power is the number of people who like you" },
        ],
        correctChoiceId: "a",
        explanation: "Dahl's definition captures the most visible face of power — one actor getting another to act against their will — though this is only part of how power works.",
      },
      {
        dimension: "reasoning",
        prompt: "What is 'agenda-setting' power?",
        choices: [
          { id: "a", label: "Controlling which issues get discussed, so a challenge never even arises to be defeated" },
          { id: "b", label: "Winning every open vote" },
          { id: "c", label: "Setting the time of a meeting" },
          { id: "d", label: "Forcing someone at gunpoint" },
        ],
        correctChoiceId: "a",
        explanation: "The 'second face' of power keeps issues off the table entirely; a group can be defeated not by losing debates but by never getting its concerns treated as worthy of debate — power that is invisible because it prevents challenges arising.",
      },
      {
        dimension: "reasoning",
        prompt: "What is Lukes's 'third face' of power?",
        choices: [
          { id: "a", label: "Shaping people's wants and beliefs so they willingly accept a situation, without coercion" },
          { id: "b", label: "Winning a public argument" },
          { id: "c", label: "Controlling the meeting agenda" },
          { id: "d", label: "Using military force" },
        ],
        correctChoiceId: "a",
        explanation: "The deepest power shapes consciousness itself — making people want what you want or accept their circumstances as natural — so they comply willingly and may not perceive power is being exercised at all.",
      },
      {
        dimension: "depth",
        prompt: "What is the difference between hard and soft power?",
        choices: [
          { id: "a", label: "Hard power coerces or induces through force and money; soft power attracts and persuades through admiration and example" },
          { id: "b", label: "Hard power is legal; soft power is illegal" },
          { id: "c", label: "They are the same thing" },
          { id: "d", label: "Soft power uses only weapons" },
        ],
        correctChoiceId: "a",
        explanation: "Nye's distinction: hard power is the stick and carrot of coercion and inducement, while soft power gets what you want by making others admire and want to emulate you — often cheaper and more durable.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is relying purely on hard power often less effective in the long run?",
        choices: [
          { id: "a", label: "Because it is expensive and breeds resentment and resistance, while soft power achieves willing cooperation" },
          { id: "b", label: "Because hard power is always illegal" },
          { id: "c", label: "Because force always fails immediately" },
          { id: "d", label: "Because soft power requires no effort" },
        ],
        correctChoiceId: "a",
        explanation: "Constant coercion is costly and provokes resistance, whereas an actor others admire and want to emulate shapes outcomes more cheaply and lastingly — which is why the most forceful actors are not always the most powerful.",
      },
    ],
    sources: [
      { label: "Steven Lukes, Power: A Radical View", note: "The three faces of power explained.", type: "Reference", url: "https://en.wikipedia.org/wiki/Power:_A_Radical_View" },
      { label: "Power (social and political) (overview)", note: "Reference on definitions and forms of power.", type: "Reference", url: "https://en.wikipedia.org/wiki/Power_(social_and_political)" },
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
    concept: "The State",
    level: "GCSE",
    summary: "institutions claiming authority over territory and law",
    estimatedMinutes: 7,
    deck: "The state is so much a part of the background of modern life that we barely notice it, yet almost everything — your money, your safety, your rights, the roads you use — depends on it. Understanding what the state actually is, and the one power it claims that no one else may, is the starting point for understanding politics itself.",
    keyTerms: [
      { label: "The state", value: "The set of institutions claiming supreme authority over law and force within a territory." },
      { label: "Monopoly on legitimate force", value: "Weber's defining feature: only the state may rightfully use violence." },
      { label: "Sovereignty", value: "Supreme authority within a territory, not subject to any higher power inside it." },
      { label: "Nation vs state", value: "A people with shared identity, versus the political institutions governing a territory." },
    ],
    sections: [
      {
        heading: "The institutions that govern",
        body: [
          `The state is the set of enduring institutions — government, bureaucracy, courts, police, military, and the legal framework — that claim supreme authority to make and enforce rules over a defined territory and its people. It is not the same as the current government (the particular people temporarily in office) but the permanent apparatus of rule that persists as governments come and go: the machinery that collects taxes, makes laws, provides services and maintains order across a country.`,
          `The state is a relatively recent invention in its modern form, and it now organises almost the entire human population, divided into territorial states each claiming authority within its borders. So pervasive is the state that we take it for granted, but it is a remarkable and specific kind of institution. Understanding what marks it off from other organisations — clubs, companies, communities — is essential to understanding modern politics, because the state is the central arena and instrument of political power.`,
        ],
      },
      {
        heading: "The monopoly on legitimate force",
        body: [
          `Max Weber gave the most famous definition, centred on one distinctive feature: the state is the entity that successfully claims a "monopoly of the legitimate use of physical force" within a given territory. The key word is legitimate. Other actors — criminals, rebels — may use violence, but only the state claims the recognised right to do so and to authorise it. When police arrest someone, a court imposes a punishment, or an army defends a border, force is being used that is accepted as rightful; when anyone else uses force, it is generally treated as a crime.`,
          `This monopoly is the state's defining characteristic and the foundation of ordered social life. By reserving legitimate force to itself, the state can suppress private violence, enforce laws, and provide the security within which everything else — economy, society, ordinary life — can function. A state that loses this monopoly, where armed groups, warlords or militias contest its control of force, is a failing or collapsed state, and life within it becomes dangerous and unpredictable. The quiet security most of us take for granted rests on the state's effective monopoly on legitimate violence.`,
        ],
      },
      {
        heading: "Sovereignty",
        body: [
          `Closely tied to the state is sovereignty: supreme authority within a territory. A sovereign state recognises no higher political authority over its internal affairs; within its borders, its law is final. This principle, often traced to the settlement of European wars in the 1600s, underlies the modern international system of formally equal, sovereign states, each supreme within its own territory and (in principle) not to be interfered with by others. Sovereignty is what makes a state a state rather than a province or a colony.`,
          `In practice, sovereignty is more complicated and contested than the neat principle suggests. States are constrained by international law, treaties, economic interdependence, powerful neighbours and global institutions, so absolute sovereignty is more an ideal than a reality; some states pool aspects of it, as EU members do, and some are sovereign in name but dominated in fact. Nonetheless, the claim to be the supreme authority within one's borders remains central to what a state is, and to the disputes — over independence, borders and interference — that fill international politics.`,
        ],
      },
      {
        heading: "State, nation and government",
        body: [
          `Three often-confused terms need distinguishing. The "state" is the set of governing institutions and the authority they wield over a territory. The "government" is the particular group of people who control the state at a given time — governments change through elections or upheavals, while the state endures. The "nation" is different again: a group of people who see themselves as sharing a common identity, history, culture or destiny, whether or not they have their own state.`,
          `The "nation-state" — a state whose borders roughly coincide with a single nation — is often treated as the norm, but the fit is frequently imperfect. Many states contain several nations (multinational states), and some nations are spread across several states or lack a state of their own (stateless nations), which is the source of countless conflicts over self-determination, secession and identity. Keeping these terms distinct clarifies much of politics: it is often about who gets a state, whose identity a state represents, and how the enduring institutions of the state relate to the changing governments that steer them and the peoples they claim to serve.`,
        ],
      },
      {
        heading: "The state you rarely notice",
        body: [
          `The state is the invisible foundation of your daily life. The money in your pocket is trusted because the state backs it; you walk safely because the state monopolises legitimate force and suppresses private violence; your contracts, property and rights are enforceable because the state's courts stand behind them; the roads, schools and services around you are largely state-provided or regulated. You notice the state most when it fails — where it has lost its monopoly on force and violence is uncontrolled, or where its authority is contested. And debates about independence, borders, devolution or a people's right to their own state are arguments about the state, nation and sovereignty. Recognising the state as a specific institution, defined by its claim to legitimate force within a territory, reveals the hidden framework holding modern life together.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "How is 'the state' different from 'the government'?",
        choices: [
          { id: "a", label: "The state is the enduring institutions of rule; the government is the particular people temporarily in office" },
          { id: "b", label: "They are exactly the same thing" },
          { id: "c", label: "The government is permanent; the state changes constantly" },
          { id: "d", label: "The state has no institutions" },
        ],
        correctChoiceId: "a",
        explanation: "The state is the permanent apparatus — courts, bureaucracy, police, law — that persists as governments come and go, while the government is the specific group temporarily controlling and directing it.",
      },
      {
        dimension: "depth",
        prompt: "What is Weber's defining feature of the state?",
        choices: [
          { id: "a", label: "A monopoly of the legitimate use of physical force within a territory" },
          { id: "b", label: "The largest population in a region" },
          { id: "c", label: "Control of the most money" },
          { id: "d", label: "Having the oldest history" },
        ],
        correctChoiceId: "a",
        explanation: "Weber defined the state as the entity that successfully claims a monopoly of the legitimate use of force within a territory — only the state claims the recognised right to use and authorise violence.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is the state's monopoly on legitimate force the foundation of ordered social life?",
        choices: [
          { id: "a", label: "By reserving legitimate force to itself, the state can suppress private violence and enforce laws, providing security for everything else" },
          { id: "b", label: "Because it lets anyone use force freely" },
          { id: "c", label: "Because it makes the state wealthy" },
          { id: "d", label: "Because force is never actually used" },
        ],
        correctChoiceId: "a",
        explanation: "The monopoly lets the state suppress private violence and enforce laws, providing the security in which society and economy function; a state that loses it, contested by militias or warlords, is failing and dangerous.",
      },
      {
        dimension: "depth",
        prompt: "What is 'sovereignty'?",
        choices: [
          { id: "a", label: "Supreme authority within a territory, recognising no higher political power over its internal affairs" },
          { id: "b", label: "The right to invade other countries" },
          { id: "c", label: "The wealth of a monarch" },
          { id: "d", label: "The number of citizens a state has" },
        ],
        correctChoiceId: "a",
        explanation: "Sovereignty is supreme authority within a territory, where the state's law is final and it recognises no higher political authority internally — the principle underlying the international system of formally equal states.",
      },
      {
        dimension: "reasoning",
        prompt: "Why do 'stateless nations' and 'multinational states' cause political conflict?",
        choices: [
          { id: "a", label: "Because the fit between nation and state is imperfect, raising disputes over self-determination, secession and identity" },
          { id: "b", label: "Because every nation always has its own perfect state" },
          { id: "c", label: "Because nations and states are identical" },
          { id: "d", label: "Because such situations never occur" },
        ],
        correctChoiceId: "a",
        explanation: "A nation is a people with shared identity, a state is governing institutions, and they often do not coincide — states contain several nations, or nations lack a state — fuelling conflicts over who gets a state and whose identity it represents.",
      },
    ],
    sources: [
      { label: "State (polity) (overview)", note: "Reference on the state, its institutions and Weber's definition.", type: "Reference", url: "https://en.wikipedia.org/wiki/State_(polity)" },
      { label: "Sovereignty (overview)", note: "Reference on sovereignty and the modern state system.", type: "Reference", url: "https://en.wikipedia.org/wiki/Sovereignty" },
    ],
  },
  {
    concept: "Democracy",
    level: "GCSE",
    summary: "rule by the people through participation, representation and accountability",
    estimatedMinutes: 7,
    deck: "Democracy is often reduced to voting, but elections are only its most visible part. Genuine rule by the people rests on a whole ecosystem — accountability, rights, the rule of law, a free press, and the protection of minorities — without which voting alone can produce not freedom but a tyranny of the majority.",
    keyTerms: [
      { label: "Democracy", value: "Rule by the people, through participation, representation and accountability." },
      { label: "Direct vs representative", value: "The people deciding directly, versus electing representatives to decide for them." },
      { label: "Accountability", value: "The power of the people to scrutinise and remove those who govern." },
      { label: "Liberal democracy", value: "Democracy combined with rights, rule of law and minority protections." },
    ],
    sections: [
      {
        heading: "Rule by the people",
        body: [
          `Democracy means, literally, rule by the people (from the Greek demos, people, and kratos, power). Its core idea is that political authority ultimately belongs to the people as a whole, rather than to a monarch, an elite or a self-appointed ruler, and that government should be based on the will and consent of the governed. This is a genuinely radical idea with a long, contested history, and its meaning has been fought over for millennia. What "the people ruling" actually requires in practice is the substance of the concept.`,
          `At minimum, democracy involves the people having a real say in who governs and how, typically through the ability to choose and remove their rulers in free and fair elections. But reducing democracy to elections alone is a serious mistake. Elections are necessary but not sufficient; many undemocratic regimes hold elections that are rigged, unfree or meaningless. Real democracy is a richer system of which competitive elections are only one, admittedly crucial, part.`,
        ],
      },
      {
        heading: "Direct and representative",
        body: [
          `Democracy comes in two broad forms. In direct democracy, the people themselves make decisions, voting directly on laws and policies — as in the assemblies of ancient Athens, or in modern referendums and some local town meetings. This is democracy in its purest, most participatory form, but it is impractical for large, complex societies where millions cannot personally decide every issue, and it can be vulnerable to snap judgements on complicated matters.`,
          `So virtually all modern democracies are representative: the people elect representatives who make decisions on their behalf and can be held to account and voted out at the next election. This makes democracy workable at scale and allows for deliberation and expertise, at the cost of some distance between the people and decisions. It raises its own questions — how well representatives reflect the people's wishes, and whether they should follow public opinion or their own judgement — but it is the practical form democracy takes in the modern world, sometimes supplemented by direct elements like referendums.`,
        ],
      },
      {
        heading: "More than voting",
        body: [
          `A functioning democracy depends on far more than voting; it rests on a whole supporting ecosystem. Accountability is central: those who govern must be answerable to the people, subject to scrutiny, and removable, which requires not just elections but institutions that check power between them. The rule of law ensures everyone, including the government, is bound by law, so power cannot be exercised arbitrarily. A free press and free expression let citizens be informed, debate, and criticise those in power without fear.`,
          `Fundamental rights and freedoms — of speech, assembly, association — allow genuine political competition and dissent, and independent courts protect these rights and the rules of the game. Without this ecosystem, elections become hollow: a government can win a vote and then dismantle the very freedoms that made the vote meaningful, entrenching itself in power. This is why democracy is fragile and requires constant maintenance; it is not a machine that runs itself once elections are held, but a set of norms and institutions that must be actively protected, and that can be eroded even by leaders who came to power democratically.`,
        ],
      },
      {
        heading: "The tyranny of the majority",
        body: [
          `A crucial insight, emphasised by thinkers like Alexis de Tocqueville and John Stuart Mill, is that democracy is not simply majority rule, and pure majority rule can itself become tyrannical. If a majority can do whatever it likes, it can oppress minorities, strip them of rights, and crush dissent — all with democratic sanction. A "tyranny of the majority" is a real danger: fifty-one per cent voting to persecute the other forty-nine is democratic in the narrow electoral sense but destroys the freedom democracy is supposed to secure.`,
          `This is why modern "liberal democracy" combines majority rule with the protection of individual and minority rights, guaranteed by constitutions and independent courts that even a majority cannot easily override. The point is to reconcile rule by the people with the protection of everyone's basic freedoms, so being on the losing side of a vote does not mean losing one's fundamental rights. Democracy, properly understood, is a careful balance: the majority governs, but within limits that protect the minority, ensuring today's losers can compete again rather than simply being crushed. Getting this balance right is the perennial challenge of democratic design.`,
        ],
      },
      {
        heading: "Why elections alone aren't enough",
        body: [
          `You can see the difference between real democracy and mere voting whenever you compare a genuine democracy with a regime that holds elections but jails critics, controls the press and rigs the courts. The elections may look similar; the substance is worlds apart, because democracy lives in the whole ecosystem — accountability, rights, rule of law, free media — not just the ballot. When you value being able to criticise those in power, to get impartial justice, or to have your rights protected even when you are in the minority, you are valuing liberal democracy's protections against the tyranny of the majority. Understanding that democracy is a fragile ecosystem, not a one-off act of voting, is what lets you recognise when it is being hollowed out even by leaders who won at the ballot box.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "Why is reducing democracy to 'holding elections' a mistake?",
        choices: [
          { id: "a", label: "Because many undemocratic regimes hold rigged or meaningless elections; real democracy is a richer system of which fair elections are only one part" },
          { id: "b", label: "Because elections are never used in democracies" },
          { id: "c", label: "Because voting is unimportant" },
          { id: "d", label: "Because democracy means one ruler decides" },
        ],
        correctChoiceId: "a",
        explanation: "Elections are necessary but not sufficient — unfree regimes hold them too. Genuine democracy also requires accountability, rights, the rule of law and a free press, an ecosystem of which competitive elections are one crucial part.",
      },
      {
        dimension: "depth",
        prompt: "What is the difference between direct and representative democracy?",
        choices: [
          { id: "a", label: "In direct democracy the people vote on laws themselves; in representative democracy they elect representatives to decide for them" },
          { id: "b", label: "Direct democracy has no voting" },
          { id: "c", label: "Representative democracy is used only in ancient Athens" },
          { id: "d", label: "They are the same thing" },
        ],
        correctChoiceId: "a",
        explanation: "Direct democracy (as in ancient Athens or referendums) has the people decide directly, while representative democracy — the practical modern form — has them elect accountable representatives, making democracy workable at scale.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can elections become 'hollow' without a supporting ecosystem?",
        choices: [
          { id: "a", label: "Because a government can win a vote and then dismantle the freedoms that made the vote meaningful, entrenching itself" },
          { id: "b", label: "Because voting is physically impossible" },
          { id: "c", label: "Because rights make elections unfair" },
          { id: "d", label: "Because a free press prevents voting" },
        ],
        correctChoiceId: "a",
        explanation: "Without accountability, rule of law, free press and protected rights, a government can win an election and then crush the freedoms that gave the vote meaning — which is why democracy is fragile and must be actively maintained.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the 'tyranny of the majority'?",
        choices: [
          { id: "a", label: "When a majority uses democratic power to oppress a minority and strip it of rights" },
          { id: "b", label: "When a small minority rules over everyone" },
          { id: "c", label: "When no one is allowed to vote" },
          { id: "d", label: "When elections are held too often" },
        ],
        correctChoiceId: "a",
        explanation: "Pure majority rule can itself be tyrannical: a majority voting to persecute a minority is democratic in the narrow electoral sense but destroys the freedom democracy should secure — a danger Tocqueville and Mill warned against.",
      },
      {
        dimension: "depth",
        prompt: "How does 'liberal democracy' address the tyranny of the majority?",
        choices: [
          { id: "a", label: "By combining majority rule with protected individual and minority rights that even a majority cannot easily override" },
          { id: "b", label: "By abolishing majority rule entirely" },
          { id: "c", label: "By letting the majority do whatever it wants" },
          { id: "d", label: "By removing all elections" },
        ],
        correctChoiceId: "a",
        explanation: "Liberal democracy reconciles rule by the people with protection of everyone's basic freedoms, guaranteeing rights through constitutions and independent courts, so losing a vote does not mean losing one's fundamental rights.",
      },
    ],
    sources: [
      { label: "Democracy (SEP)", note: "Stanford Encyclopedia entry on democracy and its justifications.", type: "Reference", url: "https://plato.stanford.edu/entries/democracy/" },
      { label: "Liberal democracy (overview)", note: "Reference on representative democracy, rights and the rule of law.", type: "Reference", url: "https://en.wikipedia.org/wiki/Liberal_democracy" },
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
