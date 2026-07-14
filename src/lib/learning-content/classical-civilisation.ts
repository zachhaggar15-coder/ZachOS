import { buildAuthoredLessons, type AuthoredLesson } from "./types";

// Ten hand-written Classical Civilisation lessons: researched, concept-specific
// prose with real ancient sources and figures, each closing on an everyday-life
// example, plus genuine recall quizzes.
const classicalCivilisation: AuthoredLesson[] = [
  {
    concept: "Myth",
    level: "GCSE",
    summary: "traditional stories that organise values, power and identity",
    estimatedMinutes: 7,
    deck: "Calling something 'a myth' today means it is false. To the Greeks and Romans, myth was the opposite of trivial — it was how a society argued about its gods, its origins and its values. Read myths as cultural arguments, not childish tales, and the ancient world opens up.",
    keyTerms: [
      { label: "Myth", value: "A traditional story that carries a culture's values, explanations and identity." },
      { label: "Aetiology", value: "A myth that explains the origin of something — a ritual, a place, a natural feature." },
      { label: "Legitimation", value: "The use of myth to justify power, institutions or social order." },
      { label: "Pantheon", value: "The organised family of gods a culture worships and tells stories about." },
    ],
    sections: [
      {
        heading: "Not just a false story",
        body: [
          `In modern speech a "myth" is something untrue — a misconception to be debunked. This everyday meaning badly misleads us about the ancient world, where myth was one of the most serious and important things a culture possessed. A myth is a traditional story, passed down and retold, that carries a society's deepest ideas about the gods, the world's origins, human nature and how life should be lived. Its truth or falsity in a literal sense is beside the point; its job is to organise meaning.`,
          `The Greeks and Romans lived surrounded by myth. Their poets — above all Homer and Hesiod — gathered and shaped these stories into the shared inheritance of a whole civilisation. Myth explained why the world was as it was, modelled heroism and folly, warned against overreaching the gods, and gave communities a common set of references. To dismiss such stories as "just myths" is to miss that they were a culture thinking aloud about everything that mattered.`,
        ],
      },
      {
        heading: "What myths do",
        body: [
          `Myths perform identifiable kinds of work. Many are aetiological: they explain the origin of something — why a ritual is performed, how a city was founded, why a constellation exists, where fire came from. The story of Prometheus stealing fire for humanity explains both a benefit and a punishment. Others model behaviour, holding up heroes to admire and transgressors to fear, teaching values through vivid example rather than dry rule.`,
          `Crucially, myths express and manage a culture's anxieties. Stories of mortals punished for hubris — arrogant overreaching against the gods — encode a whole worldview about human limits and the danger of pride. Tales of the underworld process fears about death; stories of monstrous outsiders police the boundary between the civilised and the wild. A myth is rarely just entertainment; it is a society working through its hopes and fears in narrative form.`,
        ],
      },
      {
        heading: "Myth and power",
        body: [
          `One of myth's most important functions is legitimation: justifying power, status and institutions by rooting them in sacred story. Ruling families and whole cities claimed descent from gods and heroes, turning political authority into something ordained rather than merely seized. Julius Caesar's family, the Julii, claimed descent from the goddess Venus through the Trojan hero Aeneas — a mythical pedigree that dignified their power.`,
          `Rome's own foundation myths show this vividly. The story of Romulus and Remus, twins suckled by a she-wolf, gave Rome a heroic (and violent) origin, while Virgil's Aeneid tied Rome's destiny to the gods and the fall of Troy, casting the empire as fate. These were not idle tales; they were arguments about why Rome deserved to rule. Reading a myth well often means asking whose power it supports — a question as sharp for ancient stories as for modern ones.`,
        ],
      },
      {
        heading: "Reading myth as argument",
        body: [
          `The scholarly approach is to treat myths as evidence about the cultures that told them, not as failed science or mere fantasy. A myth reveals what a society valued, feared, honoured and forbade. Different versions of the same story — and there were always many — show a culture debating with itself, as poets and playwrights reshaped inherited myths to make new points. The tragedians took familiar myths and used them to probe justice, fate and responsibility on the public stage.`,
          `This is why "seeing myths as cultural arguments rather than childish tales" is the key skill. When you encounter a classical myth, the productive questions are: what does this explain or justify? Whose interests does it serve? What anxiety does it manage? What value does it teach? Answered this way, a myth stops being a quaint story and becomes a window into how an entire civilisation made sense of its world.`,
        ],
      },
      {
        heading: "The myths you still live by",
        body: [
          `You are surrounded by myths in exactly the ancient sense. National founding stories — plucky rebels, noble pioneers — organise a country's identity and justify its institutions, whatever the messier history. Brands build origin myths (two founders in a garage) to give themselves meaning; superheroes are a modern pantheon dramatising our values and fears. Even the "self-made success" story is a myth that teaches a worldview. None of these are simply false; like Greek and Roman myths, they are stories a culture tells to explain itself, model behaviour and justify power. Asking of any such story 'what does it explain, and whose power does it serve?' is the classicist's habit applied to your own world.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "Why is the modern meaning of 'myth' as 'a false story' misleading for the ancient world?",
        choices: [
          { id: "a", label: "Because ancient myths were always literally true" },
          { id: "b", label: "Because myth was a serious way a culture organised its values, origins and beliefs, not a mere falsehood" },
          { id: "c", label: "Because the Greeks had no myths" },
          { id: "d", label: "Because myths were only for children" },
        ],
        correctChoiceId: "b",
        explanation: "A myth is a traditional story carrying a society's deepest ideas about gods, origins and how to live; its literal truth is beside the point, so dismissing myths as 'just false' misses their role in organising meaning.",
      },
      {
        dimension: "depth",
        prompt: "What is an 'aetiological' myth?",
        choices: [
          { id: "a", label: "A myth that explains the origin of something, such as a ritual or natural feature" },
          { id: "b", label: "A myth that has been proven false" },
          { id: "c", label: "A myth about the future" },
          { id: "d", label: "A myth with no gods in it" },
        ],
        correctChoiceId: "a",
        explanation: "Aetiological myths explain origins — why a ritual is performed, how a city was founded, where fire came from, as with Prometheus stealing fire for humanity.",
      },
      {
        dimension: "reasoning",
        prompt: "How does a myth 'legitimate' power?",
        choices: [
          { id: "a", label: "By proving a ruler's policies are economically sound" },
          { id: "b", label: "By rooting authority in sacred story, as when Caesar's family claimed descent from Venus" },
          { id: "c", label: "By abolishing all rulers" },
          { id: "d", label: "By keeping power secret" },
        ],
        correctChoiceId: "b",
        explanation: "Legitimation justifies power by grounding it in sacred story; ruling families claimed descent from gods and heroes — the Julii from Venus via Aeneas — turning seized authority into something ordained.",
      },
      {
        dimension: "reasoning",
        prompt: "What does the existence of many different versions of the same myth reveal?",
        choices: [
          { id: "a", label: "That the culture was debating with itself, reshaping inherited stories to make new points" },
          { id: "b", label: "That all but one version were simply mistakes" },
          { id: "c", label: "That myths never changed" },
          { id: "d", label: "That the Greeks could not remember stories" },
        ],
        correctChoiceId: "a",
        explanation: "Multiple versions show a living tradition arguing with itself; poets and tragedians reshaped familiar myths to probe justice, fate and responsibility anew.",
      },
      {
        dimension: "depth",
        prompt: "What are the most productive questions to ask when reading a classical myth?",
        choices: [
          { id: "a", label: "Whether it is scientifically accurate" },
          { id: "b", label: "What it explains or justifies, whose interests it serves, and what value or anxiety it addresses" },
          { id: "c", label: "How long ago it was written" },
          { id: "d", label: "Whether children still enjoy it" },
        ],
        correctChoiceId: "b",
        explanation: "Treating myths as cultural arguments means asking what they explain, whose power they support, what anxiety they manage and what value they teach — turning a story into a window on the civilisation.",
      },
    ],
    sources: [
      { label: "OpenStax World History, Volume 1", note: "Open textbook covering the ancient Mediterranean world.", type: "Textbook", url: "https://openstax.org/details/books/world-history-volume-1" },
      { label: "Hesiod and Homer (Project Gutenberg)", note: "Primary sources for Greek myth and the shaping of the pantheon.", type: "Primary", url: "https://www.gutenberg.org/" },
    ],
  },
  {
    concept: "Polis",
    level: "A-level",
    summary: "the Greek city-state as political, religious and social community",
    estimatedMinutes: 8,
    deck: "The Greek polis was not just a town with walls. It was a total community — political, religious and social at once — in which being a citizen meant actively taking part, not merely living there. To understand Greek civilisation, and much of Western politics, you have to understand the polis.",
    keyTerms: [
      { label: "Polis", value: "The Greek city-state: a self-governing community of citizens, land and shared religion." },
      { label: "Citizen", value: "A member with the right and duty to participate in the political life of the polis." },
      { label: "Zoon politikon", value: "Aristotle's phrase: the human as a creature made to live in a polis." },
      { label: "Direct democracy", value: "Athens' system in which citizens themselves debated and voted, rather than electing representatives." },
    ],
    sections: [
      {
        heading: "More than a city",
        body: [
          `The polis (plural poleis) is usually translated "city-state", but the phrase undersells it. A polis was a self-governing community that fused what we now separate: it was simultaneously a political unit, a religious community with its own gods and festivals, and a social world of shared identity and custom. Ancient Greece was not one country but hundreds of these independent poleis — Athens, Sparta, Corinth, Thebes — each fiercely proud of its own way of life.`,
          `Crucially, the polis was defined by its people, not just its walls or territory. It was a community of citizens bound together, and to belong was to share in its religious rites, its defence, and its decisions. This fusion of the political, the sacred and the social into one community is what makes the polis so different from a modern city, and so central to understanding how the Greeks thought about human life.`,
        ],
      },
      {
        heading: "Citizenship as participation",
        body: [
          `The heart of the polis was a distinctive idea of citizenship. To be a citizen was not merely to reside somewhere or hold a legal status; it was to participate actively in the community's affairs — to debate in the assembly, serve on juries, hold office, fight in the army, and join in public religion. Citizenship was a bundle of rights and duties woven together; the citizen was a participant, not a spectator.`,
          `This ideal came with hard limits that must not be airbrushed. Citizenship was restricted — typically to free adult males of the right descent — and the polis rested on the labour of those excluded: women, foreigners (metics) and, above all, enslaved people, who had no political voice. The Greek achievement of participatory citizenship and its dependence on exclusion and slavery are two faces of the same system, and honest study holds both in view.`,
        ],
      },
      {
        heading: "The political animal",
        body: [
          `The philosopher Aristotle captured the Greek view in a famous phrase: the human being is by nature a "zoon politikon" — usually translated "political animal", but better understood as "a creature meant to live in a polis". For Aristotle this was not a casual observation but a claim about human nature: we are made to live in this kind of community, and only within it can we fully flourish and become truly human. A person outside the polis, he said, must be either a beast or a god.`,
          `This reveals how completely the Greeks tied individual life to the community. The good life was not something pursued in private isolation but achieved through active participation in a shared political and civic existence. The modern idea that politics is a separate, optional sphere you can ignore would have baffled them; for the Greeks, participating in the life of the polis was part of what it meant to be a fulfilled human being.`,
        ],
      },
      {
        heading: "Athens and the invention of democracy",
        body: [
          `The most famous polis, Athens, developed something genuinely new: democracy, from demos (the people) and kratos (power). Crucially, Athenian democracy was direct, not representative. Citizens did not elect politicians to decide for them; they themselves gathered in the assembly to debate and vote on laws and policies, and served in large citizen juries and rotating offices, many filled by lottery. Ordinary citizens directly held and exercised power.`,
          `This differs sharply from modern representative democracy, where we elect others to govern. Direct democracy was possible because the citizen body was relatively small and demanded intense, time-consuming participation — feasible only because excluded groups did much of the work. Athenian democracy was radical, unstable and much criticised even at the time (Plato was a fierce critic), but it established ideas — political equality among citizens, decision by public debate and vote, accountability of officials — that echo through all later democratic thought.`,
        ],
      },
      {
        heading: "Citizen or consumer",
        body: [
          `The polis poses a question that still cuts today: are you a participant in your community or just a resident of it? Modern life makes it easy to treat your town, workplace or country as a service you consume rather than a community you shape — to grumble about decisions without ever attending the meeting, voting, volunteering or joining in. The Greek citizen would have found that passivity strange, even shameful. Whenever you weigh whether to get involved in a local decision, a shared project or civic life at all, you are meeting the polis's central idea: that belonging means participating, and that a community is something you help make, not merely something you live inside.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "Why is 'city-state' an incomplete translation of polis?",
        choices: [
          { id: "a", label: "Because a polis had no territory" },
          { id: "b", label: "Because the polis fused political, religious and social community into one, defined by its citizens" },
          { id: "c", label: "Because a polis was always huge" },
          { id: "d", label: "Because poleis had no gods" },
        ],
        correctChoiceId: "b",
        explanation: "A polis was simultaneously a political unit, a religious community and a social world, defined by its people rather than just walls or land — a fusion a modern 'city' does not capture.",
      },
      {
        dimension: "depth",
        prompt: "What did citizenship in the polis fundamentally mean?",
        choices: [
          { id: "a", label: "Simply residing within the city walls" },
          { id: "b", label: "Actively participating — debating, voting, serving on juries, holding office, fighting" },
          { id: "c", label: "Owning the most land" },
          { id: "d", label: "Being born to any family at all" },
        ],
        correctChoiceId: "b",
        explanation: "Citizenship was participation, a bundle of rights and duties: the citizen debated in the assembly, served on juries, held office and fought — a participant, not a spectator.",
      },
      {
        dimension: "reasoning",
        prompt: "What did Aristotle mean by calling humans 'zoon politikon'?",
        choices: [
          { id: "a", label: "That humans are naturally violent" },
          { id: "b", label: "That humans are creatures meant to live in a polis and can only fully flourish within one" },
          { id: "c", label: "That politics should be avoided" },
          { id: "d", label: "That only rulers are truly human" },
        ],
        correctChoiceId: "b",
        explanation: "Aristotle claimed we are by nature made to live in a polis and can only become fully human within it — a person outside it, he said, must be either a beast or a god.",
      },
      {
        dimension: "reasoning",
        prompt: "How did Athenian direct democracy differ from modern representative democracy?",
        choices: [
          { id: "a", label: "Citizens themselves debated and voted on laws, rather than electing others to govern for them" },
          { id: "b", label: "Athenians elected a president for life" },
          { id: "c", label: "Only kings could vote" },
          { id: "d", label: "There was no voting at all" },
        ],
        correctChoiceId: "a",
        explanation: "In Athens citizens directly gathered in the assembly to debate and vote and served in juries and offices (often by lottery), rather than electing representatives to decide for them.",
      },
      {
        dimension: "depth",
        prompt: "What uncomfortable fact must honest study of the polis keep in view?",
        choices: [
          { id: "a", label: "That participatory citizenship depended on the exclusion of women, foreigners and enslaved people" },
          { id: "b", label: "That the polis had no religion" },
          { id: "c", label: "That citizens never participated" },
          { id: "d", label: "That all residents were citizens" },
        ],
        correctChoiceId: "a",
        explanation: "Citizenship was restricted to free adult males of the right descent, and the polis rested on the labour of the excluded — women, metics and enslaved people — so its achievement and its exclusions are two faces of one system.",
      },
    ],
    sources: [
      { label: "OpenStax World History, Volume 1", note: "Open textbook on ancient Greece and the city-states.", type: "Textbook", url: "https://openstax.org/details/books/world-history-volume-1" },
      { label: "Aristotle, Politics (Project Gutenberg)", note: "Primary source for the polis and 'zoon politikon'.", type: "Primary", url: "https://www.gutenberg.org/ebooks/6762" },
    ],
  },
  {
    concept: "Republicanism",
    level: "University",
    summary: "public liberty, mixed government and resistance to kingship",
    estimatedMinutes: 9,
    deck: "When modern politicians praise 'checks and balances', warn against tyranny, or call something a threat to 'the republic', they are speaking a language invented in ancient Rome. Republicanism is a tradition of public liberty and shared power, defined above all by its horror of one-man rule.",
    keyTerms: [
      { label: "Res publica", value: "Latin for 'the public thing' — the commonwealth belonging to the citizens, root of 'republic'." },
      { label: "Mixed government", value: "Blending monarchy, aristocracy and democracy so no single element dominates." },
      { label: "Liberty as non-domination", value: "The republican idea that freedom means not being subject to arbitrary power." },
      { label: "Tyranny", value: "Rule by one person's arbitrary will — the great fear republicanism is built against." },
    ],
    sections: [
      {
        heading: "The public thing",
        body: [
          `The word "republic" comes from the Latin res publica — literally "the public thing" or "public affair". The phrase captures the core idea: that the commonwealth belongs to the citizens as a whole, not to a king who owns it as private property. The Roman Republic (traditionally 509–27 BC) was founded, in Rome's own telling, by the overthrow of its last king, and the memory of that expulsion left Romans with a deep, lasting hatred of kingship.`,
          `This anti-monarchical instinct is central to republicanism. The very word rex (king) became politically toxic; to accuse someone of aiming at kingship was a grave charge, and Romans built their institutions specifically to prevent any one person from seizing permanent, unaccountable power. Republicanism is, at root, a tradition organised around a fear: the fear of domination by a single ruler.`,
        ],
      },
      {
        heading: "Mixed government",
        body: [
          `The Romans' central institutional answer was mixed government: blending different forms of rule so that no single element could dominate. The Greek historian Polybius, analysing Rome's success, argued that the Republic combined the three classic types — monarchy, aristocracy and democracy — in balance. The consuls (two of them, holding power jointly for only a year) supplied the monarchical element; the Senate the aristocratic; and the popular assemblies the democratic.`,
          `The genius, Polybius argued, was that each element checked the others, preventing any from degenerating into its corrupt form (monarchy into tyranny, aristocracy into oligarchy, democracy into mob rule). Power was also divided by having multiple magistrates, short terms, and the right of veto. This idea — that liberty is protected by dividing and balancing power rather than concentrating it — is one of Rome's most influential bequests, and the direct ancestor of modern "checks and balances".`,
        ],
      },
      {
        heading: "Liberty as non-domination",
        body: [
          `Republicanism carries a distinctive idea of freedom. For the republican tradition, liberty (libertas) means not being subject to the arbitrary will of another — what modern scholars call "freedom as non-domination". You are free not merely when no one is currently interfering with you, but when no one holds the unchecked power to interfere at their whim. Living at the mercy of a master's goodwill, even a kind master, is not freedom on this view; it is dependence.`,
          `This differs subtly but importantly from the liberal idea of freedom as simply the absence of interference. The republican worries about domination itself — the existence of arbitrary power — because power that could be used against you at any moment already makes you unfree, forcing you to flatter and self-censor. This is why republicans obsess over institutions: only laws, checks and shared power can secure freedom, by ensuring no one holds arbitrary sway over anyone else.`,
        ],
      },
      {
        heading: "The long afterlife",
        body: [
          `The Roman Republic eventually collapsed into the rule of emperors, but republicanism as an idea proved extraordinarily durable. It was revived in the Italian Renaissance, where Machiavelli, drawing on Roman history, wrote about how republics could sustain liberty and why they decay. It shaped the thinking of the English republicans of the 1600s and, above all, the founders of the United States, who steeped themselves in Roman example — adopting the Senate, warning endlessly against tyranny, and designing an elaborate system of separated, balanced powers.`,
          `This is why republican language still saturates modern politics. Appeals to "the republic", warnings that a leader threatens democratic institutions, praise for checks and balances, the horror of one person placing themselves above the law — all draw on a tradition that runs straight back to Rome. Recognising this inheritance lets you see that many contemporary political arguments are the latest round in a very old debate about how to enjoy public liberty without sliding into domination by the powerful.`,
        ],
      },
      {
        heading: "Republican language in the headlines",
        body: [
          `You hear republicanism whenever politics turns to the danger of concentrated power. A commentator warning that a leader is 'undermining institutions' or 'putting themselves above the law', an argument for splitting authority so no one branch dominates, the instinctive alarm when someone tries to cling to power past their term — all speak the Roman republican grammar of liberty as non-domination and fear of the would-be king. Even outside government, whenever you insist that a rule should apply to the powerful too, or that no single person should have unchecked say over a group, you are reaching for republican ideas that Rome first put into political language.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What does the Latin 'res publica' literally mean, and why does it matter?",
        choices: [
          { id: "a", label: "'The public thing' — the commonwealth belongs to the citizens, not a king who owns it" },
          { id: "b", label: "'The royal household' — the state belongs to the king" },
          { id: "c", label: "'The army' — power rests with soldiers" },
          { id: "d", label: "'The marketplace' — the state is purely economic" },
        ],
        correctChoiceId: "a",
        explanation: "Res publica means 'the public thing': the commonwealth belongs to the citizens as a whole, not to a king as private property — the founding idea of the republic.",
      },
      {
        dimension: "reasoning",
        prompt: "According to Polybius, why was Rome's 'mixed government' effective?",
        choices: [
          { id: "a", label: "Because it concentrated all power in the consuls" },
          { id: "b", label: "Because it balanced monarchic, aristocratic and democratic elements so each checked the others" },
          { id: "c", label: "Because it abolished the Senate" },
          { id: "d", label: "Because it gave the people no role" },
        ],
        correctChoiceId: "b",
        explanation: "Polybius argued Rome blended the three classic forms — consuls, Senate and assemblies — so each checked the others, preventing any from degenerating into tyranny, oligarchy or mob rule.",
      },
      {
        dimension: "depth",
        prompt: "What does the republican idea of 'liberty as non-domination' mean?",
        choices: [
          { id: "a", label: "Freedom is simply being left alone right now" },
          { id: "b", label: "Freedom is not being subject to anyone's arbitrary power, even a kind master's" },
          { id: "c", label: "Freedom is having the most wealth" },
          { id: "d", label: "Freedom is the right to rule others" },
        ],
        correctChoiceId: "b",
        explanation: "Republican liberty means no one holds unchecked power to interfere with you at their whim; living at the mercy of a master's goodwill, however kind, is dependence, not freedom.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does republicanism place such emphasis on institutions and divided power?",
        choices: [
          { id: "a", label: "Because only laws, checks and shared power can prevent anyone holding arbitrary sway over others" },
          { id: "b", label: "Because institutions are decorative" },
          { id: "c", label: "Because concentrating power protects liberty best" },
          { id: "d", label: "Because it distrusts all citizens equally" },
        ],
        correctChoiceId: "a",
        explanation: "Since domination is the enemy, republicans rely on laws, checks and divided power to ensure no one holds arbitrary sway — the direct ancestor of modern checks and balances.",
      },
      {
        dimension: "depth",
        prompt: "How did Roman republicanism influence the founders of the United States?",
        choices: [
          { id: "a", label: "They ignored Rome entirely" },
          { id: "b", label: "They drew on Roman example — a Senate, warnings against tyranny, and separated, balanced powers" },
          { id: "c", label: "They restored a monarchy" },
          { id: "d", label: "They abolished all checks on power" },
        ],
        correctChoiceId: "b",
        explanation: "Steeped in Roman history via thinkers like Machiavelli, the US founders adopted a Senate, warned endlessly against tyranny and built an elaborate system of separated, balanced powers.",
      },
    ],
    sources: [
      { label: "OpenStax World History, Volume 1", note: "Open textbook on the Roman Republic and its institutions.", type: "Textbook", url: "https://openstax.org/details/books/world-history-volume-1" },
      { label: "Polybius, The Histories (Project Gutenberg)", note: "Primary source analysing Rome's mixed constitution.", type: "Primary", url: "https://www.gutenberg.org/" },
    ],
  },
  {
    concept: "Patronage",
    level: "A-level",
    summary: "status and obligation created by unequal support relationships",
    estimatedMinutes: 8,
    deck: "Roman society ran not just on law and money but on a web of personal obligations between the powerful and those who depended on them. The patron–client bond — unequal, reciprocal and binding — was the hidden circuitry of influence behind every public honour.",
    keyTerms: [
      { label: "Patron and client", value: "The powerful patronus who provides support, and the cliens who owes loyalty in return." },
      { label: "Reciprocity", value: "The mutual, if unequal, exchange of benefits and obligations that binds the relationship." },
      { label: "Salutatio", value: "The morning ritual where clients greeted their patron, displaying his status." },
      { label: "Beneficia and officia", value: "The favours given and the duties owed within the patronage bond." },
    ],
    sections: [
      {
        heading: "The web beneath Roman society",
        body: [
          `Beneath the formal structures of Roman law and politics ran an informal but immensely powerful system of personal relationships: patronage. A patron (patronus) was a person of higher status and wealth who provided protection, financial help, legal support and advancement to those below him. In return, his clients (clientes) owed him loyalty, political support, public deference and various services. These bonds tied Roman society together from top to bottom in a great pyramid of dependence.`,
          `Patronage was not a marginal arrangement but a central organising principle of Roman life. Almost everyone was enmeshed in it — a client to those above, often a patron to those below. Even powerful men were clients of the still more powerful, so the whole society was laced with these vertical ties of obligation. To understand how influence, favours and power actually flowed in Rome, you have to look past the official institutions to this hidden circuitry of patronage.`,
        ],
      },
      {
        heading: "Unequal but binding",
        body: [
          `The relationship was defined by inequality combined with genuine, binding reciprocity. The patron and client were emphatically not equals — the whole point was the difference in status. Yet each owed the other real obligations. The patron provided beneficia (benefits, favours), such as money, legal defence, food, or help securing a job or office. The client provided officia (duties): political and electoral support, public praise, attendance, and the enhancement of the patron's prestige.`,
          `This reciprocity was morally serious, backed by strong social expectation rather than formal law. To fail in one's obligations — a patron neglecting a loyal client, or a client betraying a generous patron — was shameful and damaging to reputation. The bond could pass down through generations, families remaining clients of families. It was, in effect, a system of mutual obligation that did much of the work that formal contracts, welfare and institutions do in a modern state.`,
        ],
      },
      {
        heading: "Status made visible",
        body: [
          `Patronage was performed in public, and its most famous ritual was the salutatio, the morning greeting. Each day, clients would gather at their patron's house at dawn to pay their respects, ask for help, and receive instructions or a small gift. The size and quality of the crowd at a man's door was a direct, visible measure of his importance — a living display of his network of dependants for all the neighbourhood to see.`,
          `This shows how patronage fused the practical with the symbolic. The relationship delivered real goods — money, protection, advancement — but it also constantly performed and reinforced status. A great man's power was made visible through the throng of clients who honoured him, escorted him through the forum, and applauded his speeches. Public honour in Rome was rarely spontaneous; behind it usually stood an organised network of obligation, and reading Roman society means learning to see that network behind the honour.`,
        ],
      },
      {
        heading: "Patronage and politics",
        body: [
          `Patronage shaped Roman politics profoundly. In a system where elections and public life depended on visible support, a politician's network of clients was a crucial asset — a reliable base of votes, canvassers and cheering crowds. Great families competed by building ever-larger followings, and patronage extended even to whole communities and provinces, which might become clients of a powerful Roman who had done them a service.`,
          `This helps explain features of Roman politics that otherwise look strange, such as the intense importance of personal loyalty, reputation and networks over abstract policy or party. It also had a dark side, blurring into corruption, dependence and the buying of support. As the Republic declined, the greatest generals turned their armies into vast client networks personally loyal to them rather than to the state — a concentration of patronage that helped topple the Republic itself. The system that bound society together could also, at scale, tear it apart.`,
        ],
      },
      {
        heading: "The networking you already do",
        body: [
          `Patronage never really disappeared; it just changed clothes. A mentor who opens doors for a junior colleague, who in turn stays loyal and makes the mentor look good; the tangle of favours, introductions and 'I owe you one' that runs beneath every workplace and industry; the political donor whose money buys access and expects influence — all are patron–client relationships in modern dress, unequal, reciprocal and binding. When people say success depends on 'who you know', or when you feel the quiet obligation created by someone doing you a significant favour, you are inside the same web the Romans knew. Learning to see the network of obligation behind public success is a skill as useful now as it was in the forum.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What was the patron–client relationship in Rome?",
        choices: [
          { id: "a", label: "An equal friendship between two citizens" },
          { id: "b", label: "An unequal, reciprocal bond where a powerful patron gave support and a client owed loyalty and service" },
          { id: "c", label: "A purely legal contract enforced by courts" },
          { id: "d", label: "A relationship only between enslaved people" },
        ],
        correctChoiceId: "b",
        explanation: "A patron of higher status provided protection, money and advancement; the client owed loyalty, political support and deference in return — an unequal but binding web that tied Roman society together.",
      },
      {
        dimension: "depth",
        prompt: "What did each side provide in the patronage bond?",
        choices: [
          { id: "a", label: "The patron gave beneficia (favours); the client gave officia (duties like support and praise)" },
          { id: "b", label: "Both gave equal amounts of money" },
          { id: "c", label: "The client gave money; the patron gave labour" },
          { id: "d", label: "Neither owed the other anything" },
        ],
        correctChoiceId: "a",
        explanation: "The patron supplied beneficia — money, legal help, jobs — and the client supplied officia — political support, public praise, attendance — a morally serious reciprocity backed by social expectation.",
      },
      {
        dimension: "reasoning",
        prompt: "What did the size of the crowd at the morning 'salutatio' signal?",
        choices: [
          { id: "a", label: "The patron's wealth in coins" },
          { id: "b", label: "A visible, public measure of the patron's importance and network of dependants" },
          { id: "c", label: "How many enemies the patron had" },
          { id: "d", label: "Nothing of any significance" },
        ],
        correctChoiceId: "b",
        explanation: "Clients gathered at dawn to greet their patron; the size and quality of the crowd at his door was a living, public display of his status and the network that honoured him.",
      },
      {
        dimension: "reasoning",
        prompt: "Why was a network of clients a crucial political asset in Rome?",
        choices: [
          { id: "a", label: "It provided a reliable base of votes, canvassers and public support in a system built on visible backing" },
          { id: "b", label: "It replaced the need for any elections" },
          { id: "c", label: "It was banned from politics" },
          { id: "d", label: "It had no effect on political life" },
        ],
        correctChoiceId: "a",
        explanation: "Where public life depended on visible support, a large client network meant votes, canvassers and cheering crowds, so great families competed by building ever-larger followings.",
      },
      {
        dimension: "reasoning",
        prompt: "How did patronage contribute to the fall of the Roman Republic?",
        choices: [
          { id: "a", label: "The greatest generals turned their armies into client networks loyal to them personally rather than the state" },
          { id: "b", label: "Patronage was abolished, causing chaos" },
          { id: "c", label: "Clients refused all favours" },
          { id: "d", label: "It had no role in the Republic's fall" },
        ],
        correctChoiceId: "a",
        explanation: "As the Republic declined, powerful generals built vast patronage networks — including armies personally loyal to them rather than to Rome — a concentration of obligation that helped topple the Republic.",
      },
    ],
    sources: [
      { label: "OpenStax World History, Volume 1", note: "Open textbook on Roman society and social structure.", type: "Textbook", url: "https://openstax.org/details/books/world-history-volume-1" },
      { label: "Patronage in ancient Rome (overview)", note: "Reference on the patron–client system and its rituals.", type: "Reference", url: "https://en.wikipedia.org/wiki/Patronage_in_ancient_Rome" },
    ],
  },
  {
    concept: "Stoicism",
    level: "A-level",
    summary: "discipline of judgement, virtue and emotional self-command",
    estimatedMinutes: 8,
    deck: "Stoicism has become a social-media brand for grinding through hardship without feeling. The real philosophy is deeper and stranger: a rigorous system arguing that virtue is the only true good, that our judgements — not events — cause our suffering, and that freedom lies in mastering what is actually up to us.",
    keyTerms: [
      { label: "Dichotomy of control", value: "Distinguishing what is 'up to us' (our judgements, choices) from what is not." },
      { label: "Virtue as the only good", value: "The Stoic claim that a good character is the sole thing truly good for us." },
      { label: "Judgements cause emotions", value: "The view that our reactions come from our beliefs about events, not events themselves." },
      { label: "Living according to nature", value: "Living in accordance with reason and our nature as rational, social beings." },
    ],
    sections: [
      {
        heading: "More than 'keep calm and carry on'",
        body: [
          `Stoicism, founded in Athens around 300 BC by Zeno of Citium and later developed by Romans such as Seneca, Epictetus and the emperor Marcus Aurelius, has enjoyed a huge modern revival. But the popular image — the "stoic" as an unemotional tough guy who suppresses feelings and powers through — is a caricature of a rich philosophical system. Real Stoicism is not about feeling nothing; it is about transforming your relationship to what happens through disciplined reasoning.`,
          `At its heart, Stoicism is a philosophy of how to live well and find tranquillity in a world you largely cannot control. It combines a theory of ethics, a psychology of the emotions, and a view of the cosmos into a practical guide for living. To reduce it to a slogan about resilience is to miss its actual arguments — which are more demanding, and more interesting, than the motivational-poster version suggests.`,
        ],
      },
      {
        heading: "The dichotomy of control",
        body: [
          `The most famous Stoic idea, set out sharply by Epictetus, is the "dichotomy of control": the distinction between what is "up to us" and what is not. Up to us are our own judgements, choices, desires and reactions — our inner life. Not up to us are external things: our reputation, wealth, health, other people's actions, and ultimately most of what happens to us. Epictetus opens his Handbook with exactly this division.`,
          `The practical payoff is profound. Stoics argue we cause ourselves needless misery by investing our happiness in things we cannot control, and then being distressed when they go against us. Peace comes from focusing our concern and effort on what is genuinely within our power — our own character and responses — while accepting what is not. This is not passivity; you still act in the world, but you attach your sense of well-being to acting well, not to outcomes you cannot command.`,
        ],
      },
      {
        heading: "Judgements, not events",
        body: [
          `Underpinning this is a striking psychological claim: it is not events that disturb us, but our judgements about them. Epictetus put it directly — "people are disturbed not by things, but by their opinions about things." The Stoics held that emotions like anger, fear and grief arise from our beliefs and value-judgements, not directly from external happenings. Two people meet the same setback; one is destroyed, the other unmoved, because they judge it differently.`,
          `If that is right, then we have far more power over our emotional lives than we assume, because we can examine and revise our judgements. Much distress, the Stoics argued, comes from mistaken beliefs — above all, treating external things (money, status, even health) as genuinely good or bad, when the only true good is virtue and the only true evil is vice. This analysis of emotions as rooted in judgement directly inspired modern cognitive behavioural therapy, which similarly targets the beliefs behind distress.`,
        ],
      },
      {
        heading: "Virtue and the cosmos",
        body: [
          `The ethical core of Stoicism is radical: virtue — a good, rational, just character — is the only thing that is truly good, and vice the only true evil. Everything else — wealth, health, reputation, even life itself — is, in the technical Stoic term, "indifferent". This does not mean these things do not matter at all; Stoics called health and wealth "preferred indifferents", reasonable to pursue. But they are not genuinely good, because a good life depends only on the excellence of your character, which no external misfortune can take from you.`,
          `This connects to the Stoic view of the cosmos as a rational, ordered whole governed by reason (logos), of which we are each a part. "Living according to nature" means living in accordance with reason and with our nature as rational and social beings — accepting the order of the universe, doing our duty to others, and cultivating wisdom, justice, courage and self-control. Far from the cold individualism of the modern caricature, classical Stoicism is deeply social, insisting we are made to serve the common good, and its self-command is in service of living virtuously, not merely enduring.`,
        ],
      },
      {
        heading: "Stoicism versus the hustle version",
        body: [
          `You meet Stoicism most often now in its distorted, motivational form — 'control what you can', 'don't let feelings stop the grind', screenshots of Marcus Aurelius captioning a workout. The genuine philosophy is both more useful and more challenging. When you catch yourself furious at traffic, anxious about others' opinions, or crushed by an outcome you could not control, the real Stoic move is not to grit your teeth but to ask: is this actually up to me, and is my distress coming from the event or from my judgement of it? Redirecting your effort to your own choices and character, while genuinely letting go of what you cannot command, is the ancient practice beneath the hashtag — and it asks far more of you than simply pushing through.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "Why is the popular image of the 'unemotional stoic' a caricature?",
        choices: [
          { id: "a", label: "Because real Stoicism is about transforming your relationship to events through reasoning, not merely suppressing feeling" },
          { id: "b", label: "Because Stoics believed in indulging every emotion" },
          { id: "c", label: "Because Stoicism has no view on emotions" },
          { id: "d", label: "Because Stoicism was never actually practised" },
        ],
        correctChoiceId: "a",
        explanation: "Stoicism is a rich system about living well and finding tranquillity through disciplined reasoning, not a slogan about feeling nothing — the tough-guy image misses its actual arguments.",
      },
      {
        dimension: "depth",
        prompt: "What is Epictetus's 'dichotomy of control'?",
        choices: [
          { id: "a", label: "The division between rich and poor" },
          { id: "b", label: "The distinction between what is up to us (our judgements and choices) and what is not (external events)" },
          { id: "c", label: "The split between mind and body" },
          { id: "d", label: "The difference between two rulers" },
        ],
        correctChoiceId: "b",
        explanation: "The dichotomy separates what is 'up to us' — our judgements, choices and reactions — from what is not, such as reputation, wealth and others' actions; peace comes from focusing on the former.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the Stoic claim that 'people are disturbed not by things, but by their opinions about things'?",
        choices: [
          { id: "a", label: "That events have no causes" },
          { id: "b", label: "That our emotions arise from our judgements about events, giving us power to revise them" },
          { id: "c", label: "That opinions never matter" },
          { id: "d", label: "That external events are the sole cause of feelings" },
        ],
        correctChoiceId: "b",
        explanation: "Stoics held that emotions come from our beliefs and value-judgements, not directly from events — which is why two people can react oppositely to the same setback, and why examining our judgements gives us power over distress.",
      },
      {
        dimension: "depth",
        prompt: "What does Stoicism claim is the only thing truly good?",
        choices: [
          { id: "a", label: "Wealth" },
          { id: "b", label: "Virtue — a good, rational, just character" },
          { id: "c", label: "Health" },
          { id: "d", label: "Reputation" },
        ],
        correctChoiceId: "b",
        explanation: "For the Stoics virtue is the only genuine good and vice the only genuine evil; everything else, including health and wealth, is 'indifferent' (though some are 'preferred'), because a good life rests only on character.",
      },
      {
        dimension: "reasoning",
        prompt: "How does classical Stoicism differ from the cold, individualist modern caricature?",
        choices: [
          { id: "a", label: "It is deeply social, holding that we are rational beings made to serve the common good" },
          { id: "b", label: "It rejects reason entirely" },
          { id: "c", label: "It teaches that only the self matters" },
          { id: "d", label: "It has no ethical content" },
        ],
        correctChoiceId: "a",
        explanation: "Living 'according to nature' means living by reason as rational and social beings; classical Stoicism insists we do our duty to others and serve the common good, far from the modern go-it-alone image.",
      },
    ],
    sources: [
      { label: "Epictetus, The Enchiridion (Project Gutenberg)", note: "Primary Stoic text on the dichotomy of control.", type: "Primary", url: "https://www.gutenberg.org/ebooks/45109" },
      { label: "Marcus Aurelius, Meditations (Project Gutenberg)", note: "The Roman emperor's Stoic reflections.", type: "Primary", url: "https://www.gutenberg.org/ebooks/2680" },
    ],
  },
  {
    concept: "Tragedy and Catharsis",
    level: "University",
    summary: "serious drama that stages conflict, error and emotional recognition",
    estimatedMinutes: 9,
    deck: "Why would thousands of citizens gather to watch a king blind himself or a mother kill her children — and call it a civic duty? Greek tragedy turned human suffering into public art, and Aristotle's puzzling idea of 'catharsis' still frames how we think about why painful drama moves us.",
    keyTerms: [
      { label: "Tragedy", value: "Serious drama staging a protagonist's downfall through conflict, error and fate." },
      { label: "Catharsis", value: "Aristotle's term for the purging or clarification of pity and fear that tragedy produces." },
      { label: "Hamartia", value: "The error or flaw through which a tragic protagonist brings about their downfall." },
      { label: "The Dionysia", value: "The Athenian festival where tragedies were performed as a mass civic event." },
    ],
    sections: [
      {
        heading: "Suffering as civic art",
        body: [
          `Greek tragedy, which flourished in fifth-century-BC Athens through Aeschylus, Sophocles and Euripides, is one of humanity's great artistic achievements — and a strange one. These plays stage terrible things: patricide and incest in Oedipus, a mother murdering her children in Medea, the slow destruction of the powerful by fate, error and the gods. Yet they were not marginal entertainment. They were performed at the great festival of Dionysus, the Dionysia, before audiences of thousands, as a central event of the city's religious and civic year.`,
          `This civic dimension is essential. Attending tragedy was part of being an Athenian citizen; the performances were funded by wealthy citizens as a public duty and framed by civic ceremony. Tragedy was a way the whole community came together to confront, through story, the darkest possibilities of human life — suffering, injustice, the limits of human power against fate. It made private terror into shared, public experience.`,
        ],
      },
      {
        heading: "Aristotle's Poetics",
        body: [
          `Our most influential theory of tragedy comes from Aristotle's Poetics, written in the fourth century BC. Aristotle tried to analyse what tragedy is and how it works its powerful effect. He defined it as the imitation of a serious and complete action, in dramatic form, that arouses pity and fear in the audience — and then produces something he called catharsis of those emotions. This compact definition has shaped Western thinking about drama ever since.`,
          `Aristotle identified elements that make tragedy effective. The protagonist should be neither wholly good nor wholly evil, but a person of some stature who falls through hamartia — an error or flaw — so that we can identify with them and feel their fall could be ours. The best plots, he argued, turn on a reversal of fortune (peripeteia) and a moment of recognition (anagnorisis), where the character grasps a terrible truth, as when Oedipus realises he has killed his father and married his mother.`,
        ],
      },
      {
        heading: "The puzzle of catharsis",
        body: [
          `The most famous and debated idea in the Poetics is catharsis — the effect tragedy has on the emotions of pity and fear it arouses. Frustratingly, Aristotle never fully explains what he means, and scholars have argued over it for centuries. The two leading interpretations pull in different directions. One reads catharsis as a "purging" or release: watching tragedy lets us safely discharge pent-up pity and fear, leaving us calmer, like a pressure valve for the emotions.`,
          `The other reads it as a "clarification" or education of the emotions: tragedy teaches us to feel pity and fear appropriately, refining our emotional and moral judgement by exercising these feelings on fictional suffering. On this view tragedy is a kind of moral training, using powerful emotion to deepen our understanding of the human condition. Whichever reading is right — and it may be both — the core insight endures: painful art can be good for us, doing something valuable through the very emotions it stirs.`,
        ],
      },
      {
        heading: "Public emotion as education",
        body: [
          `Set in its Athenian context, tragedy looks like a remarkable civic institution: a way for a democratic community to feel powerful emotions together and think through its deepest problems. The plays repeatedly stage clashes with no easy resolution — duty to family against duty to the state in Antigone, justice against revenge in the Oresteia — inviting citizens to confront moral complexity rather than simple answers. Watching, weeping and fearing together was itself a shared civic and educational act.`,
          `This is why "reading public emotion as moral education" captures tragedy's function. It suggests that a society benefits from collectively confronting suffering, injustice and human limitation through art, rather than avoiding them. The Greeks built this confrontation into the calendar, treating the experience of pity and fear, safely aroused by drama, as something that made citizens wiser and the community stronger. Tragedy proposes that facing the worst, together, in the theatre, is part of living well.`,
        ],
      },
      {
        heading: "Why you choose the sad film",
        body: [
          `Catharsis explains a puzzle in your own life: why anyone willingly watches devastating films, reads harrowing novels, or listens to music that makes them cry. On the face of it, deliberately seeking out pity and fear makes no sense — yet a wrenching drama can leave you feeling not worse but strangely purged, clearer, more alive. Whether that is Aristotle's release of pent-up emotion or an education of your feelings, it is the same effect the Athenians gathered to experience. And when a whole audience gasps or weeps together at a film or play, you are sharing the ancient thing tragedy was built for: confronting the hardest parts of being human, safely, in company.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "In what setting were Greek tragedies performed?",
        choices: [
          { id: "a", label: "In private homes for small audiences" },
          { id: "b", label: "At the festival of Dionysus as a mass civic and religious event" },
          { id: "c", label: "In law courts as evidence" },
          { id: "d", label: "Only for the royal family" },
        ],
        correctChoiceId: "b",
        explanation: "Tragedies were staged at the Dionysia before audiences of thousands, funded as a public duty — a central event of Athens's religious and civic year, not marginal entertainment.",
      },
      {
        dimension: "depth",
        prompt: "How did Aristotle define tragedy in the Poetics?",
        choices: [
          { id: "a", label: "As comedy with a sad ending" },
          { id: "b", label: "As the imitation of a serious action arousing pity and fear, producing catharsis of those emotions" },
          { id: "c", label: "As a purely factual history" },
          { id: "d", label: "As a religious sacrifice" },
        ],
        correctChoiceId: "b",
        explanation: "Aristotle defined tragedy as the dramatic imitation of a serious, complete action that arouses pity and fear and then produces catharsis of those emotions.",
      },
      {
        dimension: "reasoning",
        prompt: "Why did Aristotle say the tragic protagonist should be neither wholly good nor wholly evil?",
        choices: [
          { id: "a", label: "So the audience can identify with them and feel their fall through hamartia could be their own" },
          { id: "b", label: "Because evil characters are funnier" },
          { id: "c", label: "Because good characters cannot act" },
          { id: "d", label: "Because the gods forbade heroes" },
        ],
        correctChoiceId: "a",
        explanation: "A protagonist of some stature who falls through an error (hamartia) lets us identify with them and feel that their downfall could be ours, which is what makes the fall move us.",
      },
      {
        dimension: "reasoning",
        prompt: "What are the two leading interpretations of Aristotle's 'catharsis'?",
        choices: [
          { id: "a", label: "Purging (safely releasing pity and fear) and clarification (educating the emotions)" },
          { id: "b", label: "Comedy and satire" },
          { id: "c", label: "Profit and loss" },
          { id: "d", label: "Praise and blame" },
        ],
        correctChoiceId: "a",
        explanation: "Since Aristotle never fully explains catharsis, scholars read it either as a purging or release of pent-up pity and fear, or as a clarification that refines our emotional and moral judgement.",
      },
      {
        dimension: "depth",
        prompt: "What does viewing tragedy as 'public emotion as moral education' suggest about its civic role?",
        choices: [
          { id: "a", label: "That a community benefits from collectively confronting suffering and moral complexity through art" },
          { id: "b", label: "That drama should avoid all difficult topics" },
          { id: "c", label: "That emotions have no place in public life" },
          { id: "d", label: "That tragedy was purely for entertainment" },
        ],
        correctChoiceId: "a",
        explanation: "Tragedy let a democratic community feel powerful emotions together and think through unresolved moral clashes, treating the shared experience of pity and fear as something that made citizens wiser.",
      },
    ],
    sources: [
      { label: "Aristotle, Poetics (Project Gutenberg)", note: "The foundational theory of tragedy, catharsis and hamartia.", type: "Primary", url: "https://www.gutenberg.org/ebooks/1974" },
      { label: "OpenStax World History, Volume 1", note: "Open textbook on Greek culture and drama.", type: "Textbook", url: "https://openstax.org/details/books/world-history-volume-1" },
    ],
  },
  {
    concept: "Roman Law",
    level: "A-level",
    summary: "legal categories and procedures shaping rights, property and citizenship",
    estimatedMinutes: 8,
    deck: "Rome's most durable conquest was not a territory but a way of thinking. Its legal system — with its careful categories of persons, property and contract — became the foundation of law across much of the world, so that Roman ideas still quietly structure your rights today.",
    keyTerms: [
      { label: "Ius", value: "Latin for law or right — the root of 'justice', 'jurist' and much legal vocabulary." },
      { label: "The Twelve Tables", value: "Rome's early written law code, publicly displayed so law was known, not secret." },
      { label: "Jurists", value: "Legal experts who interpreted and developed Roman law through reasoned opinion." },
      { label: "Corpus Juris Civilis", value: "Justinian's sixth-century compilation that preserved Roman law for later ages." },
    ],
    sections: [
      {
        heading: "Law as a system",
        body: [
          `Rome's lasting genius was the creation of law as a sophisticated, systematic discipline. Many societies have rules; Rome developed law into an intricate, reasoned body of categories, principles and procedures, refined over centuries. It distinguished carefully between different kinds of law, different categories of persons and things, and different types of legal action, building a framework of remarkable subtlety that could handle the complex disputes of a vast, diverse empire.`,
          `This systematic quality is why Roman law endured long after Rome itself. It was not just a list of local customs but a set of transferable concepts and ways of reasoning about rights, obligations, property and wrongs. Later societies could adopt and adapt these tools, which is exactly what happened. When people say Rome's greatest legacy was its law, they mean this: not particular rules, but a whole method of legal thinking.`,
        ],
      },
      {
        heading: "Written, public law",
        body: [
          `A foundational moment was the Twelve Tables, around 450 BC — Rome's early laws written down and publicly displayed. This mattered enormously. When law is unwritten and known only to a priestly or aristocratic elite, ordinary people are at the mercy of those who interpret it in secret. Publishing the law made it, in principle, knowable to all citizens, a crucial step toward the idea that law should be public, predictable and applied to everyone rather than wielded arbitrarily.`,
          `Over the following centuries, Roman law grew through several streams: legislation, the edicts of magistrates, and — distinctively — the writings of jurists, expert legal thinkers whose reasoned opinions carried great authority. These jurists treated law as an intellectual discipline, analysing cases, drawing distinctions and building principles. Their sophisticated commentary turned Roman law into a genuine science of jurisprudence, developed by argument and interpretation rather than mere decree.`,
        ],
      },
      {
        heading: "Enduring legal concepts",
        body: [
          `Roman law bequeathed concepts still fundamental today. It developed a sophisticated law of contract — agreements the law will enforce — analysing different types of agreement and the obligations they create. It elaborated the law of property, distinguishing ownership from mere possession and defining how property could be transferred. It grappled with the legal category of "persons", who counted as a legal actor with rights and duties, and with the law of wrongs and remedies.`,
          `The vocabulary itself reveals the debt. Words like "justice", "jurisdiction", "jurisprudence", "contract", "tribunal" and countless legal maxims descend from Latin. More deeply, the basic architecture of much modern law — the division into persons, things and actions, the very idea of systematic legal categories — comes from Rome. Even where specific rules have vanished, the conceptual scaffolding often remains, which is why law students in many countries still study Roman law as the grammar of their legal tradition.`,
        ],
      },
      {
        heading: "The great transmission",
        body: [
          `Roman law might have been lost when the western empire fell, but for a decisive act of preservation. In the sixth century AD, the eastern Roman emperor Justinian ordered the vast body of Roman law to be collected, organised and codified into what became known as the Corpus Juris Civilis (the "Body of Civil Law"). This monumental compilation captured centuries of legal thought in a single systematic work — and it survived.`,
          `Rediscovered and intensively studied in medieval European universities from the eleventh century onward, Justinian's compilation became the foundation of the "civil law" tradition that governs much of continental Europe, Latin America and beyond to this day. (The English "common law" tradition developed differently, though it too absorbed Roman influence.) So the legal systems of a huge part of the modern world trace directly back to Roman law, transmitted across a thousand years by Justinian's act of codification. It is one of history's most consequential intellectual inheritances.`,
        ],
      },
      {
        heading: "Roman law in your contracts",
        body: [
          `Roman law is quietly present whenever your rights are at stake. The moment you enter a contract — buying a phone, signing a tenancy, agreeing terms and conditions — you are relying on the idea, systematised by Rome, that certain agreements create obligations the law will enforce. The distinction between owning something and merely holding it, the notion of a legal 'person' with rights, the expectation that law is written and applies to everyone: all descend from Roman thinking. Even the Latin tags lawyers still use are the fingerprints of Rome on your daily life. Few things you rely on are older, or more invisible, than the legal grammar the Romans built.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What was Rome's most lasting legal achievement?",
        choices: [
          { id: "a", label: "A single unchangeable set of rules" },
          { id: "b", label: "Developing law into a sophisticated, systematic discipline of categories, principles and procedures" },
          { id: "c", label: "Abolishing all courts" },
          { id: "d", label: "Keeping law secret from citizens" },
        ],
        correctChoiceId: "b",
        explanation: "Rome turned law into an intricate, reasoned system of transferable concepts and methods — not just local rules — which is why it endured and could be adopted by later societies.",
      },
      {
        dimension: "reasoning",
        prompt: "Why did writing down the Twelve Tables matter so much?",
        choices: [
          { id: "a", label: "It made law publicly knowable rather than interpreted in secret by an elite" },
          { id: "b", label: "It reduced the number of laws to twelve forever" },
          { id: "c", label: "It gave the priests total control of law" },
          { id: "d", label: "It abolished citizenship" },
        ],
        correctChoiceId: "a",
        explanation: "Publishing the law made it knowable to all citizens rather than wielded secretly by an elite — a crucial step toward law being public, predictable and applied to everyone.",
      },
      {
        dimension: "depth",
        prompt: "Who were the Roman 'jurists' and why were they important?",
        choices: [
          { id: "a", label: "Soldiers who enforced the law by force" },
          { id: "b", label: "Legal experts whose reasoned opinions developed law as an intellectual discipline" },
          { id: "c", label: "Slaves who recorded trials" },
          { id: "d", label: "Priests who kept law secret" },
        ],
        correctChoiceId: "b",
        explanation: "Jurists were expert legal thinkers whose authoritative, reasoned opinions analysed cases and built principles, turning Roman law into a genuine science of jurisprudence developed by argument.",
      },
      {
        dimension: "reasoning",
        prompt: "How did Justinian's Corpus Juris Civilis shape later law?",
        choices: [
          { id: "a", label: "It preserved and codified Roman law, later becoming the foundation of the civil law tradition across much of the world" },
          { id: "b", label: "It destroyed all records of Roman law" },
          { id: "c", label: "It applied only within Justinian's lifetime" },
          { id: "d", label: "It had no influence after Rome fell" },
        ],
        correctChoiceId: "a",
        explanation: "Justinian's sixth-century compilation captured centuries of Roman legal thought, survived, was rediscovered in medieval universities, and became the basis of the civil law tradition in continental Europe, Latin America and beyond.",
      },
      {
        dimension: "depth",
        prompt: "Which modern legal ideas descend from Roman law?",
        choices: [
          { id: "a", label: "The law of contract, the distinction of ownership from possession, and the category of legal 'persons'" },
          { id: "b", label: "The concept that law should be secret" },
          { id: "c", label: "The idea that agreements never bind anyone" },
          { id: "d", label: "The rejection of all property rights" },
        ],
        correctChoiceId: "a",
        explanation: "Rome developed enforceable contracts, the ownership–possession distinction and the legal category of persons, plus much legal vocabulary — the conceptual scaffolding much modern law still rests on.",
      },
    ],
    sources: [
      { label: "OpenStax World History, Volume 1", note: "Open textbook on Roman institutions and law.", type: "Textbook", url: "https://openstax.org/details/books/world-history-volume-1" },
      { label: "Roman law (overview)", note: "Reference on the Twelve Tables, jurists and Justinian's codification.", type: "Reference", url: "https://en.wikipedia.org/wiki/Roman_law" },
    ],
  },
  {
    concept: "Civic Virtue",
    level: "GCSE",
    summary: "public-spirited character expected of citizens",
    estimatedMinutes: 7,
    deck: "The Romans had a demanding idea: that a good citizen owes something to the community beyond minding their own affairs. Civic virtue — putting the common good above private interest — was the character a republic depended on, and its loss was blamed for the republic's fall.",
    keyTerms: [
      { label: "Civic virtue", value: "The public-spirited character that puts the common good above private interest." },
      { label: "Virtus", value: "Roman ideal of manly excellence, courage and worth shown in public service." },
      { label: "Res publica", value: "The 'public thing' that civic virtue serves — the shared commonwealth." },
      { label: "Corruption", value: "The decay of public spirit into private greed, feared as fatal to a republic." },
    ],
    sections: [
      {
        heading: "Owing something to the whole",
        body: [
          `Civic virtue is the idea that a good citizen has a character oriented toward the public good — that being a citizen carries duties to the community, not just rights to be enjoyed privately. For the Romans, and the Greeks before them, the ideal citizen was public-spirited: willing to serve, to sacrifice private advantage for the common welfare, and to place the health of the res publica above personal gain. This was not optional decency but the very foundation on which a free republic was thought to rest.`,
          `The underlying belief is that self-government cannot survive if citizens care only about themselves. A republic asks citizens to serve in its offices, defend it in war, judge fairly in its courts, and put its interests first when they conflict with private ones. Without a widespread disposition to do these things — without civic virtue — the whole system was thought to hollow out. Freedom, in this view, is not free; it requires a certain kind of character in the people who share it.`,
        ],
      },
      {
        heading: "Virtus and Roman ideals",
        body: [
          `The Romans packed these expectations into a cluster of prized values. Virtus (the root of our "virtue") meant excellence, courage and worth, especially as demonstrated in public and military service. Related ideals included gravitas (seriousness and dignity), pietas (dutiful devotion to family, gods and country), and a deep respect for the mos maiorum, the "way of the ancestors". Honour was earned by serving the community with distinction, and a good reputation for public service was among the most valued things a Roman could possess.`,
          `Roman culture held up exemplary figures who embodied civic virtue, real or legendary, as models for citizens to emulate. The most famous is Cincinnatus, who, according to legend, was made dictator to save Rome in a crisis, won the war, and then immediately laid down his absolute power and returned to his farm rather than cling to it. He became the enduring symbol of the citizen who serves when needed and relinquishes power willingly — the very opposite of the would-be tyrant.`,
        ],
      },
      {
        heading: "Virtue and the health of the republic",
        body: [
          `Roman writers tied the fate of the republic directly to the civic virtue of its citizens. When citizens were disciplined, self-sacrificing and public-spirited, they believed, Rome flourished. When private greed, luxury and ambition displaced public spirit, the republic decayed. This connection between individual character and political health runs through Roman political thought and history-writing, especially in accounts of the republic's decline.`,
          `Historians like Sallust explicitly blamed the fall of the republic on moral corruption — the rise of avarice and the pursuit of private power at the expense of the common good. Whether or not this is the full historical truth, the idea itself is powerful: that a free society depends not only on good institutions but on a citizenry with the character to sustain them. Laws and constitutions, on this view, are not enough; they need public-spirited people to work them, and no structure can save a republic whose citizens have stopped caring about it.`,
        ],
      },
      {
        heading: "A demanding and contested ideal",
        body: [
          `Civic virtue is an inspiring ideal, but it deserves a critical eye. In Rome it was bound up with a narrow, militaristic and exclusionary vision: "virtue" was largely male (the word shares a root with vir, "man"), tied to warfare and public office, and available only to the citizen elite while excluding women, the poor, foreigners and the enslaved. The lofty rhetoric of public service could also mask the pursuit of personal glory and the interests of the ruling class.`,
          `Yet the core idea has proved enduring and adaptable. The notion that a self-governing community needs citizens who will participate, contribute and sometimes sacrifice for the common good has echoed through republican thought ever since, into modern debates about citizenship, public service and civic responsibility. Stripped of its ancient exclusions, the question civic virtue poses remains live: what does a free society need from its members beyond obeying the law and pursuing their own affairs?`,
        ],
      },
      {
        heading: "Civic virtue in ordinary life",
        body: [
          `You meet civic virtue whenever doing your bit for the group costs you something personally. Turning up for jury duty, voting, volunteering, picking up litter that is not yours, telling the truth on a committee when silence would be easier, or simply not free-riding on collective efforts — each is a small act of putting the common good above private convenience. The Roman worry still applies: a shared enterprise, from a flat-share to a country, quietly depends on enough people being willing to contribute rather than just take. When you choose to serve a community you belong to, even when no one is making you, you are practising the ancient virtue a republic was thought to need.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is civic virtue?",
        choices: [
          { id: "a", label: "The pursuit of maximum personal wealth" },
          { id: "b", label: "A public-spirited character that puts the common good above private interest" },
          { id: "c", label: "Obedience to a king" },
          { id: "d", label: "Skill at private business only" },
        ],
        correctChoiceId: "b",
        explanation: "Civic virtue is the disposition to serve the community and place the common good above personal gain — the character a free republic was thought to depend on.",
      },
      {
        dimension: "reasoning",
        prompt: "Why did the Romans think a republic depended on civic virtue?",
        choices: [
          { id: "a", label: "Because self-government hollows out if citizens care only about themselves" },
          { id: "b", label: "Because virtue makes citizens wealthier" },
          { id: "c", label: "Because kings require virtuous subjects" },
          { id: "d", label: "Because it had no real effect on politics" },
        ],
        correctChoiceId: "a",
        explanation: "A republic asks citizens to serve, defend it and put its interests first; without a widespread disposition to do so, the whole system was thought to hollow out — freedom requires a certain character.",
      },
      {
        dimension: "depth",
        prompt: "Why did Cincinnatus become the great symbol of civic virtue?",
        choices: [
          { id: "a", label: "Because he seized power permanently" },
          { id: "b", label: "Because, made dictator in a crisis, he won and then laid down absolute power to return to his farm" },
          { id: "c", label: "Because he refused to serve Rome" },
          { id: "d", label: "Because he became king" },
        ],
        correctChoiceId: "b",
        explanation: "Legend held that Cincinnatus took supreme power to save Rome, then relinquished it willingly rather than cling on — the model of the citizen who serves when needed and gives power back, the opposite of a tyrant.",
      },
      {
        dimension: "reasoning",
        prompt: "How did Roman writers like Sallust link civic virtue to the republic's fate?",
        choices: [
          { id: "a", label: "They blamed the republic's decline on moral corruption — greed and private ambition displacing public spirit" },
          { id: "b", label: "They said character had no bearing on politics" },
          { id: "c", label: "They argued the republic fell because of too much virtue" },
          { id: "d", label: "They claimed institutions alone determined everything" },
        ],
        correctChoiceId: "a",
        explanation: "Roman historians tied political health to citizens' character, blaming the republic's decay on avarice and the pursuit of private power over the common good — the idea that good institutions still need public-spirited people to work them.",
      },
      {
        dimension: "reasoning",
        prompt: "What is a fair criticism of the Roman ideal of civic virtue?",
        choices: [
          { id: "a", label: "It was narrow and exclusionary — largely male, militaristic and confined to the citizen elite" },
          { id: "b", label: "It demanded nothing of anyone" },
          { id: "c", label: "It applied equally to all people in Rome" },
          { id: "d", label: "It rejected all public service" },
        ],
        correctChoiceId: "a",
        explanation: "Roman 'virtue' shared a root with vir ('man'), was tied to warfare and office, and excluded women, the poor, foreigners and the enslaved, and its rhetoric could mask personal glory-seeking — though the core idea outlived those exclusions.",
      },
    ],
    sources: [
      { label: "OpenStax World History, Volume 1", note: "Open textbook on Roman values and the republic.", type: "Textbook", url: "https://openstax.org/details/books/world-history-volume-1" },
      { label: "Sallust and Roman virtue (overview)", note: "Reference on virtus, the mos maiorum and civic ideals.", type: "Reference", url: "https://en.wikipedia.org/wiki/Virtus" },
    ],
  },
  {
    concept: "Imperium",
    level: "University",
    summary: "command, authority and expansion in Roman political culture",
    estimatedMinutes: 9,
    deck: "Behind Rome's roads, legions and laws lay a single potent idea: imperium — the legitimate power to command. Tracing how this concept grew from a magistrate's authority into the very word for 'empire' reveals how Rome turned raw power into enduring, legitimate rule.",
    keyTerms: [
      { label: "Imperium", value: "The legitimate power to command — over armies, in law, and eventually over an empire." },
      { label: "Magistrate", value: "An elected Roman official who held imperium for a limited term." },
      { label: "Fasces", value: "The bundle of rods and axe symbolising a magistrate's power to punish and command." },
      { label: "Romanisation", value: "The spread of Roman law, language, citizenship and culture across conquered lands." },
    ],
    sections: [
      {
        heading: "The power to command",
        body: [
          `Imperium is one of the most important concepts in Roman political culture, and its meaning is richer than the modern word "empire" it eventually produced. At its core, imperium was the legitimate power to command — the supreme authority, granted to certain officials, to give orders, lead armies, enforce the law and administer justice, backed ultimately by the power of life and death. It was not mere brute force but authorised, legitimate power, formally conferred and recognised.`,
          `This distinction between raw power and legitimate authority is central to understanding Rome. Anyone with soldiers has force; imperium was the recognised right to command, held by specific magistrates under defined conditions. The Romans were careful about who held it, for how long, and within what limits, precisely because command over armies and citizens was so dangerous. Imperium was power made legitimate and, in the Republic at least, hedged with constraints.`,
        ],
      },
      {
        heading: "Holding and limiting command",
        body: [
          `In the Republic, imperium was granted to senior elected magistrates — chiefly the consuls and praetors — for their term of office. The Romans built in careful checks to stop this dangerous power becoming permanent or absolute. It was temporary, held only for a fixed period. It was usually shared — two consuls held it jointly, each able to check the other. And it was traditionally restricted within the city of Rome itself, where the power of the citizen assemblies and the right of appeal limited a magistrate's command.`,
          `The visible symbol of imperium was the fasces: a bundle of wooden rods tied around an axe, carried before a magistrate by attendants called lictors. The rods represented the power to punish (beating), the axe the power over life and death, and the number of fasces displayed the rank of the official. This vivid emblem made imperium visible wherever a magistrate went — a constant, physical reminder of legitimate authority. (Its later appropriation gave the twentieth century the word "fascism", a grim example of classical symbols reused for modern ends.)`,
        ],
      },
      {
        heading: "From command to empire",
        body: [
          `As Rome expanded, imperium stretched in meaning. Commanders were granted imperium to wage war and govern provinces far from Rome, and the sphere over which Roman command extended grew ever larger. Over time, "imperium" came to name not just the abstract power to command but the whole territory and dominion subject to Roman authority — the "empire". The word's evolution mirrors Rome's own transformation from a city with commanders into a vast dominion.`,
          `This is also the story of how the Republic became the Empire in the political sense. The concentration of imperium — especially long-term command over large armies in the provinces — gave individual generals power that overwhelmed the Republic's checks. Figures like Pompey and Caesar accumulated extraordinary commands, and ultimately Augustus gathered imperium into a permanent, personal form, becoming the first emperor (imperator, "holder of imperium"). The very concept that the Republic had tried to limit became, concentrated in one man, the basis of one-man rule.`,
        ],
      },
      {
        heading: "Making power last",
        body: [
          `Rome's lasting achievement was not just conquering territory but holding and integrating it, and imperium in practice meant a whole apparatus of durable rule. Roman power was projected and maintained through interlocking instruments: the legions that enforced it, the roads that moved armies and messages across the empire with famous speed, the law that ordered provincial life, and the extension of citizenship that gave conquered peoples a stake in Rome. Together these turned military dominance into a stable, administered order.`,
          `This combination of symbols, infrastructure, law and military power is what let Roman authority endure for centuries across three continents. The process by which conquered regions absorbed Roman language, law, urban forms and citizenship — often called "Romanisation" — meant that Roman rule became woven into local life rather than merely imposed from outside. Imperium, in the fullest sense, was this art of turning conquest into lasting, legitimate, administered dominion — one of history's most successful and consequential exercises of power.`,
        ],
      },
      {
        heading: "How power still projects itself",
        body: [
          `Rome's lesson about imperium — that lasting power needs legitimacy, symbols and infrastructure, not just force — is visible all around you. Modern states and organisations project authority through emblems (flags, uniforms, seals), through infrastructure that binds a territory together (roads, rail, networks), through law that orders daily life, and through granting people a stake so they consent to be ruled. When you notice how a government makes its authority feel legitimate rather than merely forced, or how genuine power depends on the boring machinery of administration and infrastructure as much as on armies, you are seeing what the Romans understood: that the deepest power is command made legitimate and built to last.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What did 'imperium' fundamentally mean in Roman culture?",
        choices: [
          { id: "a", label: "Simply having the largest army" },
          { id: "b", label: "The legitimate, authorised power to command armies, enforce law and administer justice" },
          { id: "c", label: "Personal wealth" },
          { id: "d", label: "The right to vote" },
        ],
        correctChoiceId: "b",
        explanation: "Imperium was the recognised, legitimate power to command — not mere brute force but authorised authority, formally conferred on certain officials and backed by the power of life and death.",
      },
      {
        dimension: "reasoning",
        prompt: "How did the Republic try to stop imperium becoming absolute?",
        choices: [
          { id: "a", label: "By making it permanent and held by one person" },
          { id: "b", label: "By making it temporary, usually shared between two consuls, and limited within the city" },
          { id: "c", label: "By abolishing all magistrates" },
          { id: "d", label: "By granting it to everyone equally" },
        ],
        correctChoiceId: "b",
        explanation: "Imperium was held only for a fixed term, usually shared by two consuls who could check each other, and traditionally restricted within Rome — deliberate limits on a dangerous power.",
      },
      {
        dimension: "depth",
        prompt: "What did the fasces symbolise?",
        choices: [
          { id: "a", label: "A magistrate's imperium — the rods the power to punish, the axe power over life and death" },
          { id: "b", label: "A farmer's harvest" },
          { id: "c", label: "A merchant's wealth" },
          { id: "d", label: "A religious sacrifice" },
        ],
        correctChoiceId: "a",
        explanation: "The fasces — rods bundled around an axe, carried by lictors — made imperium visible: the rods stood for the power to punish, the axe for power over life and death, the number showing rank.",
      },
      {
        dimension: "reasoning",
        prompt: "How did the concentration of imperium help end the Republic?",
        choices: [
          { id: "a", label: "Long-term command over large provincial armies gave individual generals power that overwhelmed the Republic's checks" },
          { id: "b", label: "It made all magistrates equally weak" },
          { id: "c", label: "It abolished the army" },
          { id: "d", label: "It had no political consequences" },
        ],
        correctChoiceId: "a",
        explanation: "Generals like Pompey and Caesar accumulated extraordinary commands, and Augustus finally gathered imperium into a permanent personal form as the first emperor — the concept the Republic had limited became the basis of one-man rule.",
      },
      {
        dimension: "depth",
        prompt: "Beyond armies, how did Rome turn conquest into lasting dominion?",
        choices: [
          { id: "a", label: "Through interlocking instruments — roads, law, citizenship and symbols — that integrated conquered lands ('Romanisation')" },
          { id: "b", label: "By leaving conquered regions entirely untouched" },
          { id: "c", label: "By relying on force alone with no administration" },
          { id: "d", label: "By refusing citizenship to everyone" },
        ],
        correctChoiceId: "a",
        explanation: "Rome projected power through legions, roads, law and the extension of citizenship, weaving Roman language, law and urban forms into local life — turning military dominance into stable, administered, legitimate rule.",
      },
    ],
    sources: [
      { label: "OpenStax World History, Volume 1", note: "Open textbook on Roman power, expansion and administration.", type: "Textbook", url: "https://openstax.org/details/books/world-history-volume-1" },
      { label: "Imperium (overview)", note: "Reference on imperium, magistrates, the fasces and empire.", type: "Reference", url: "https://en.wikipedia.org/wiki/Imperium" },
    ],
  },
  {
    concept: "Classical Reception",
    level: "University",
    summary: "later cultures reusing antiquity for prestige, critique or identity",
    estimatedMinutes: 9,
    deck: "Antiquity never stays in the past. Every age reaches back to Greece and Rome and remakes them for its own purposes — to borrow prestige, to argue a point, to build an identity. Classical reception studies this endless reuse, and its first lesson is to tell the ancient source apart from the modern spin.",
    keyTerms: [
      { label: "Reception", value: "The study of how later cultures interpret, adapt and reuse the classical past." },
      { label: "Appropriation", value: "Taking classical material and repurposing it for new, often unrelated, ends." },
      { label: "Legitimation by antiquity", value: "Borrowing the prestige of Greece or Rome to dignify a modern project." },
      { label: "Source vs spin", value: "Distinguishing what antiquity actually was from how a later age reimagines it." },
    ],
    sections: [
      {
        heading: "The past that keeps returning",
        body: [
          `Classical reception is the study of how later societies have received, interpreted, adapted and reused the cultures of ancient Greece and Rome. Antiquity has never simply sat in the past; every era, from the Middle Ages to the present, has reached back to it, remaking classical texts, myths, art, ideas and symbols for its own purposes. Reception studies shifts attention from "what was antiquity really like?" to "what have people done with antiquity, and why?"`,
          `This matters because much of what we "know" about the classical world is actually a later reconstruction, shaped by the needs and assumptions of those doing the reconstructing. The image of ancient Greece as the serene birthplace of reason, or of Rome as a model of noble empire, owes as much to later admirers as to the ancient reality. Studying reception means becoming alert to this filtering — recognising that antiquity always reaches us through the lens of those who have used it before.`,
        ],
      },
      {
        heading: "Borrowing prestige",
        body: [
          `A recurring motive for reaching back to antiquity is legitimation: borrowing the enormous cultural prestige of Greece and Rome to dignify a modern project. Because classical civilisation carries such authority, associating yourself with it lends grandeur, seriousness and a sense of rightful inheritance. This is why so much architecture of power — parliaments, banks, courthouses, museums, monuments — is dressed in Greek columns and Roman domes: the classical style silently claims stability, authority and civilisation.`,
          `The same borrowing pervades politics and branding. Revolutionaries and republics have invoked Roman liberty; empires have styled themselves as heirs of Rome; luxury brands and institutions reach for Latin names and classical imagery to signal quality and heritage. In each case, antiquity functions as a reservoir of prestige to be drawn on. Recognising this reveals that using the classical past is rarely neutral; it is usually a claim, quietly transferring the authority of Greece or Rome onto something modern.`,
        ],
      },
      {
        heading: "Antiquity as a weapon",
        body: [
          `Because the classical past is so authoritative, it can be enlisted for radically opposed causes — which is one of reception's most important lessons. The French and American revolutionaries drew on Roman republican ideals of liberty and virtue to justify overthrowing kings. Yet the same Rome, reimagined as a model of imperial grandeur and disciplined order, was later appropriated by fascist regimes: Mussolini deliberately styled his movement on ancient Rome, reviving its symbols (including the fasces, which gave "fascism" its name) to lend authority to dictatorship.`,
          `That the same ancient civilisation could be claimed by both revolutionary democrats and fascist dictators shows that antiquity carries no fixed political meaning. It is a resource that later ages shape to their own ends, selecting and reinterpreting to support whatever they wish to argue. This is precisely why the critical skill of reception matters: to see who is using antiquity, for what purpose, and how they are bending the ancient material to fit a modern agenda.`,
        ],
      },
      {
        heading: "Source versus spin",
        body: [
          `The central discipline of classical reception is separating the ancient source from the modern appropriation — telling what antiquity actually was from what a later age has made of it. Popular culture is full of vivid but heavily reworked antiquity: films and games that turn Sparta or Rome into stylised fantasies, self-help movements that flatten Stoicism into productivity slogans, political rhetoric that invokes a Greece or Rome that never quite existed. Each tells us as much about the modern moment as about the ancient world.`,
          `None of this reuse is illegitimate — reinterpreting the past is how a tradition stays alive, and modern adaptations can be brilliant and illuminating. The point is not to police "accuracy" but to read reception critically: to enjoy the modern version while knowing it is a version, and to notice what has been added, dropped or distorted, and why. Done well, studying reception is doubly rewarding: it teaches you about antiquity, and it teaches you to read your own culture's use of the past as the revealing, purposeful act it always is.`,
        ],
      },
      {
        heading: "Spotting antiquity in your world",
        body: [
          `Once you learn to look, classical reception is everywhere around you. The columns on a bank or town hall borrowing an air of solid authority; a film's stylised Rome that says more about today's tastes than about history; a fitness influencer quoting a flattened Marcus Aurelius; the Olympic rings and torch reaching back to Greece; a luxury brand's Latin name. Each is a modern reuse of antiquity for prestige, identity or persuasion. The skill classical reception teaches — enjoying these while asking 'what has been borrowed, changed or invented, and to what end?' — turns you into a sharper reader of every appeal to the ancient past you encounter.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What does the study of classical reception focus on?",
        choices: [
          { id: "a", label: "Only what ancient Greece and Rome were actually like" },
          { id: "b", label: "How later cultures interpret, adapt and reuse the classical past, and why" },
          { id: "c", label: "The exact dates of ancient events" },
          { id: "d", label: "Purely the archaeology of ruins" },
        ],
        correctChoiceId: "b",
        explanation: "Reception shifts from 'what was antiquity really like?' to 'what have people done with antiquity, and why?' — studying how every era remakes the classical past for its own purposes.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is so much architecture of power dressed in classical columns and domes?",
        choices: [
          { id: "a", label: "Because classical style is cheapest to build" },
          { id: "b", label: "To borrow the prestige of Greece and Rome, silently claiming authority and civilisation" },
          { id: "c", label: "Because ancient builders designed them" },
          { id: "d", label: "For no particular reason" },
        ],
        correctChoiceId: "b",
        explanation: "Associating a building with authoritative antiquity lends grandeur and legitimacy, which is why parliaments, banks and courthouses use classical forms to claim stability and civilisation.",
      },
      {
        dimension: "reasoning",
        prompt: "What does it show that both revolutionaries and fascists claimed ancient Rome?",
        choices: [
          { id: "a", label: "That antiquity carries no fixed political meaning and is shaped by later ages to their own ends" },
          { id: "b", label: "That Rome was itself a fascist state" },
          { id: "c", label: "That only one of them understood Rome" },
          { id: "d", label: "That antiquity is politically irrelevant" },
        ],
        correctChoiceId: "a",
        explanation: "Revolutionaries invoked Roman liberty while Mussolini styled fascism on imperial Rome (reviving the fasces); the same civilisation serving opposite causes shows antiquity is a malleable resource, not a fixed meaning.",
      },
      {
        dimension: "depth",
        prompt: "What is the central critical skill in classical reception?",
        choices: [
          { id: "a", label: "Separating the ancient source from the modern appropriation of it" },
          { id: "b", label: "Memorising ancient dates" },
          { id: "c", label: "Rejecting all modern uses of antiquity as illegitimate" },
          { id: "d", label: "Ignoring how the past is used today" },
        ],
        correctChoiceId: "a",
        explanation: "The discipline is telling what antiquity actually was from what a later age has made of it — reading modern versions critically to see what has been added, dropped or distorted, and why.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does reception study say modern reuse of antiquity is not illegitimate?",
        choices: [
          { id: "a", label: "Because reinterpreting the past is how a tradition stays alive, so the aim is critical reading, not policing accuracy" },
          { id: "b", label: "Because accuracy is impossible to judge" },
          { id: "c", label: "Because antiquity should never be studied" },
          { id: "d", label: "Because all adaptations are equally worthless" },
        ],
        correctChoiceId: "a",
        explanation: "Reinterpreting antiquity keeps a tradition alive and can be brilliant; the point is not to police accuracy but to enjoy the modern version while knowing it is a version and noticing what was changed and why.",
      },
    ],
    sources: [
      { label: "Classical reception studies (overview)", note: "Reference on how later cultures reuse Greece and Rome.", type: "Reference", url: "https://en.wikipedia.org/wiki/Classical_reception_studies" },
      { label: "OpenStax World History, Volume 1", note: "Open textbook context on the classical world and its legacy.", type: "Textbook", url: "https://openstax.org/details/books/world-history-volume-1" },
    ],
  },
];

export const classicalCivilisationLessons = buildAuthoredLessons(
  "classical-civilisation",
  classicalCivilisation,
);
