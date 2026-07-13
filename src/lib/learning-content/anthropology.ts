import { buildAuthoredLessons, type AuthoredLesson } from "./types";

// Ten hand-written Anthropology lessons: researched, concept-specific prose
// with named thinkers and real ethnographic cases, each closing on an
// everyday-life example, plus genuine recall quizzes.
const anthropology: AuthoredLesson[] = [
  {
    concept: "Culture",
    level: "GCSE",
    summary: "shared meanings, learned practices and symbolic systems",
    estimatedMinutes: 7,
    deck: "Culture is the invisible water you swim in: the learned, shared web of meanings that makes some behaviour feel obvious and other behaviour feel bizarre. Anthropology's first move is to notice the water — including your own.",
    keyTerms: [
      { label: "Enculturation", value: "The lifelong process of learning your culture, mostly without being taught it explicitly." },
      { label: "Symbolic", value: "Culture works through symbols — a ring, a nod, a flag — whose meaning is agreed, not natural." },
      { label: "Ethnocentrism", value: "Judging another culture by the standards of your own, treating your habits as the default." },
      { label: "Thick description", value: "Geertz's method: explaining not just what people do but what it means to them." },
    ],
    sections: [
      {
        heading: "The complex whole",
        body: [
          `In 1871 the anthropologist Edward Tylor gave the discipline its founding definition: culture is "that complex whole which includes knowledge, belief, art, morals, law, custom, and any other capabilities and habits acquired by man as a member of society." The crucial phrase is "acquired... as a member of society". Culture is not in your genes. It is learned, and learned from others.`,
          `That single fact does enormous work. Language, table manners, ideas of beauty, what counts as rude, how close you stand to a stranger — none of it is hardwired, all of it is absorbed. Anthropologists call this quiet, lifelong absorption enculturation. You were never sat down and taught how far to stand from someone in a queue, yet you know, and you feel it instantly when someone stands too close.`,
        ],
      },
      {
        heading: "Learned, shared, symbolic",
        body: [
          `Three features make culture what it is. It is learned, not inherited biologically. It is shared, which is what lets it coordinate a whole group rather than one eccentric. And it is symbolic: it runs on signs whose meaning is agreed rather than natural. A wedding ring is a circle of metal; a nod means yes here and no in parts of Greece and Bulgaria; the colour white means purity at a Western wedding and mourning at some East Asian funerals. Nothing about the object forces the meaning.`,
          `Because meanings are agreed rather than given, they only work inside a community that shares them. This is why stepping into an unfamiliar culture can feel like illiteracy: the signs are everywhere and you cannot read them. The anthropologist Clifford Geertz described culture as "webs of significance" that humans themselves have spun — and the job of anthropology as untangling those webs.`,
        ],
      },
      {
        heading: "Reading the meaning, not just the act",
        body: [
          `Geertz argued that describing behaviour is not enough; you have to interpret what it means to the people doing it. His famous example is a wink. On camera, a wink and an involuntary twitch of the eyelid are identical movements. But a wink is a signal — it might mean conspiracy, flirtation, or mockery — and only knowledge of the local code tells you which. He called the difference "thick description": recording not just the twitch but the whole web of meaning that makes it a wink.`,
          `This is why an anthropologist cannot understand a ceremony, a joke or an insult from the outside alone. The same act — a gift, a silence, a laugh — can carry opposite meanings in different cultural settings. Getting the meaning right requires patience, immersion, and a willingness to assume that behaviour which looks strange makes sense to insiders.`,
        ],
      },
      {
        heading: "The trap of the default",
        body: [
          `The natural human error is ethnocentrism: treating your own culture as the neutral baseline and everyone else's as a deviation from it. It feels like plain common sense that you eat with a fork, or that slurping soup is rude — until you meet a culture where slurping signals appreciation and eating with the left hand is the offence. Ethnocentrism is not usually malice; it is the default setting of a mind that learned one culture so early it mistook it for reality.`,
          `Anthropology's discipline is to switch that default off long enough to see clearly. The goal is not to abandon your own values but to stop confusing "unfamiliar" with "wrong". A habit that feels natural to you feels every bit as natural to someone raised the opposite way, and both of you are right that it feels natural — which is exactly the point.`,
        ],
      },
      {
        heading: "Culture at your own dinner table",
        body: [
          `You can catch culture at work the moment a norm is broken. Stand a little too close to someone in a lift and watch them tense; eat noisily at a quiet dinner table; call an English acquaintance by a nickname too soon. The flash of discomfort proves there was an invisible rule you both learned and never discussed. Watch how differently people queue, tip, greet or apologise across countries, and you are watching enculturation — thousands of tiny lessons nobody remembers receiving. Noticing your own culture, the water you cannot normally see, is the first genuinely anthropological skill.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is the single most important feature of culture in Tylor's definition?",
        choices: [
          { id: "a", label: "It is inherited biologically through our genes" },
          { id: "b", label: "It is acquired by learning as a member of society" },
          { id: "c", label: "It is identical in every human group" },
          { id: "d", label: "It is created deliberately by governments" },
        ],
        correctChoiceId: "b",
        explanation: "Tylor stressed that culture is acquired 'as a member of society' — learned from others, not inherited biologically. That is why it varies between groups and can be absorbed without explicit teaching.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does anthropology call culture 'symbolic'?",
        choices: [
          { id: "a", label: "Because every culture uses the same symbols" },
          { id: "b", label: "Because cultural meanings are agreed rather than fixed by nature" },
          { id: "c", label: "Because symbols are only found in religion" },
          { id: "d", label: "Because symbols never change over time" },
        ],
        correctChoiceId: "b",
        explanation: "A ring, a nod or a colour carries meaning only because a community agrees it does — nothing about the object forces it. That is why the same gesture can mean opposite things in different cultures.",
      },
      {
        dimension: "reasoning",
        prompt: "What does Geertz's 'thick description' add to simply recording behaviour?",
        choices: [
          { id: "a", label: "A longer and more detailed physical measurement of the action" },
          { id: "b", label: "An interpretation of what the action means to the people doing it" },
          { id: "c", label: "A moral judgement of whether the action is right" },
          { id: "d", label: "A count of how often the action occurs" },
        ],
        correctChoiceId: "b",
        explanation: "A wink and a twitch look identical on film; only the local web of meaning makes one a signal. Thick description captures that meaning, not just the physical movement.",
      },
      {
        dimension: "depth",
        prompt: "What is ethnocentrism?",
        choices: [
          { id: "a", label: "Studying a culture through long-term fieldwork" },
          { id: "b", label: "Treating your own culture as the neutral standard and others as deviations" },
          { id: "c", label: "The belief that all cultures are exactly equal in every respect" },
          { id: "d", label: "The scientific comparison of two cultures" },
        ],
        correctChoiceId: "b",
        explanation: "Ethnocentrism takes one's own habits as the default and judges others against them — usually not from malice but because early enculturation makes one culture feel like plain reality.",
      },
      {
        dimension: "depth",
        prompt: "What does the term 'enculturation' describe?",
        choices: [
          { id: "a", label: "The deliberate teaching of culture in schools only" },
          { id: "b", label: "The lifelong, largely unspoken process of absorbing one's culture" },
          { id: "c", label: "The loss of culture when someone emigrates" },
          { id: "d", label: "The invention of new symbols by artists" },
        ],
        correctChoiceId: "b",
        explanation: "Enculturation is how we absorb our culture over a lifetime, mostly without explicit instruction — which is why you know how far to stand from a stranger without ever being taught.",
      },
    ],
    sources: [
      { label: "Perspectives: An Open Introduction to Cultural Anthropology", note: "Open anthropology textbook chapters on culture, meaning and enculturation.", type: "Textbook", url: "https://perspectives.americananthro.org/" },
      { label: "Clifford Geertz, 'Thick Description'", note: "The interpretive approach to culture as webs of significance.", type: "Reference", url: "https://en.wikipedia.org/wiki/Thick_description" },
    ],
  },
  {
    concept: "Ethnography",
    level: "A-level",
    summary: "long-form fieldwork that studies life from inside a community",
    estimatedMinutes: 8,
    deck: "Ethnography is anthropology's signature method: not a survey or an experiment, but the slow work of living among people long enough to understand the world as they do. It was forged on a Melanesian beach during the First World War, and it still asks the hardest question in social science — can you really see through someone else's eyes?",
    keyTerms: [
      { label: "Fieldwork", value: "Extended first-hand research living among the people being studied, often for a year or more." },
      { label: "The native's point of view", value: "Malinowski's goal: to grasp a culture as its own members understand it." },
      { label: "Reflexivity", value: "The researcher's awareness of how their own presence and background shape what they find." },
      { label: "Ethnographic present", value: "The convention of describing a studied culture as if frozen at the moment of fieldwork." },
    ],
    sections: [
      {
        heading: "A method born on a beach",
        body: [
          `Ethnography means, literally, "writing culture", but its heart is a method: prolonged, immersive fieldwork. Its founding legend is Bronisław Malinowski, a Polish anthropologist stranded in the Trobriand Islands off New Guinea during the First World War. Unable to leave, he pitched his tent among the villagers rather than on the veranda of a colonial official, learned the local language, and stayed for years.`,
          `The book that resulted, Argonauts of the Western Pacific (1922), changed the discipline. Before Malinowski, much "anthropology" was armchair theorising built on the second-hand reports of missionaries and traders. He insisted that the anthropologist must go there, live it, and record the texture of everyday life directly. The image of the lone researcher immersed in a distant community became the discipline's defining ideal.`,
        ],
      },
      {
        heading: "The native's point of view",
        body: [
          `Malinowski set the goal that still guides ethnography: "to grasp the native's point of view, his relation to life, to realise his vision of his world." The aim is not to catalogue exotic customs from outside but to understand why they make sense from inside — to reach the point where a strange practice becomes intelligible rather than merely photographed.`,
          `This demands more than observation. It requires learning the language, sitting through the boring stretches, attending the arguments as well as the ceremonies, and staying long enough that people stop performing for you and simply live. A weekend visit yields exotic snapshots; a year yields understanding. The long timescale is not an accident of the method — it is the method.`,
        ],
      },
      {
        heading: "The observer in the picture",
        body: [
          `Ethnography's great complication is that the researcher is not a neutral camera. Their gender, nationality, class and assumptions shape what they are shown and what they notice. When Malinowski's private field diaries were published after his death, they revealed irritation, loneliness and prejudice toward the very people he studied so sympathetically — a jolt that forced the discipline to confront the gap between the polished monograph and the messy human doing the fieldwork.`,
          `Out of that reckoning came reflexivity: the discipline of writing your own presence into the account rather than pretending to be invisible. A reflexive ethnographer asks how being an outsider, or a particular kind of outsider, changed the very thing they were trying to observe. Honesty about the observer became part of the evidence, not a distraction from it.`,
        ],
      },
      {
        heading: "Not just faraway islands",
        body: [
          `For decades ethnography meant travelling to remote societies, and that framing carried a colonial shadow — the West studying "others". Modern ethnography has largely turned the lens around. Anthropologists now embed themselves in trading floors, hospitals, migrant camps, online communities and open-plan offices, applying the same method to the industrialised world that Malinowski applied to the Trobriands.`,
          `The move matters because it reveals that "we" have culture too, every bit as arbitrary and meaning-laden as anyone else's. A careful ethnography of a corporate sales team or a nightclub queue exposes unwritten rules, rituals and hierarchies that the participants themselves cannot see — precisely because, like the Trobrianders, they are too immersed to notice the water.`,
        ],
      },
      {
        heading: "Your first week as a field site",
        body: [
          `You have done rough ethnography every time you started a new job or joined a new friendship group. In the first week you cannot read the room: you do not know who really holds power, which jokes are safe, why everyone goes quiet at a certain name, what the unspoken dress code is. So you watch, you copy, you ask careful questions, and slowly the invisible rules surface. That is fieldwork in miniature — and it shows why a quick visit never delivers what months of immersion do. Real understanding of a social world only arrives once people forget you are watching and simply carry on.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is the defining feature of ethnography as a method?",
        choices: [
          { id: "a", label: "A short survey of many people at once" },
          { id: "b", label: "Prolonged, immersive fieldwork living among the people studied" },
          { id: "c", label: "A laboratory experiment with a control group" },
          { id: "d", label: "Analysing statistics from a distance" },
        ],
        correctChoiceId: "b",
        explanation: "Ethnography is defined by long-term immersion — living among people, often for a year or more — rather than surveys, experiments or distant statistical analysis.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is Malinowski's Trobriand fieldwork considered a turning point?",
        choices: [
          { id: "a", label: "He was the first to use statistics in anthropology" },
          { id: "b", label: "He replaced armchair theorising with immersive, first-hand fieldwork in the local language" },
          { id: "c", label: "He proved that all cultures are the same" },
          { id: "d", label: "He studied only written historical documents" },
        ],
        correctChoiceId: "b",
        explanation: "Before Malinowski, much anthropology relied on second-hand reports. By living among the Trobrianders and learning their language, he made direct immersion the discipline's standard.",
      },
      {
        dimension: "depth",
        prompt: "What did Malinowski mean by grasping 'the native's point of view'?",
        choices: [
          { id: "a", label: "Listing exotic customs as seen from outside" },
          { id: "b", label: "Understanding why practices make sense from within the culture" },
          { id: "c", label: "Persuading people to adopt the researcher's values" },
          { id: "d", label: "Measuring behaviour without talking to anyone" },
        ],
        correctChoiceId: "b",
        explanation: "The goal is to reach the point where an unfamiliar practice becomes intelligible from the inside, not merely recorded from the outside as a curiosity.",
      },
      {
        dimension: "reasoning",
        prompt: "Why did the publication of Malinowski's field diaries push anthropology toward reflexivity?",
        choices: [
          { id: "a", label: "They showed the researcher is not a neutral observer but a biased human whose presence shapes the findings" },
          { id: "b", label: "They proved his fieldwork was entirely fabricated" },
          { id: "c", label: "They showed that fieldwork is unnecessary" },
          { id: "d", label: "They revealed the Trobrianders had no culture" },
        ],
        correctChoiceId: "a",
        explanation: "The diaries exposed the gap between the sympathetic monograph and the irritated, prejudiced human writing it, forcing anthropologists to account for how the observer shapes what is observed.",
      },
      {
        dimension: "depth",
        prompt: "How has the scope of ethnography changed in modern anthropology?",
        choices: [
          { id: "a", label: "It is now used only for historical archives" },
          { id: "b", label: "It is applied to familiar settings like offices, hospitals and online communities, not just remote societies" },
          { id: "c", label: "It has been abandoned in favour of surveys" },
          { id: "d", label: "It now studies only non-human animals" },
        ],
        correctChoiceId: "b",
        explanation: "Ethnographers increasingly turn the method on their own industrialised world — trading floors, hospitals, offices — revealing that 'we' have unwritten cultural rules too.",
      },
    ],
    sources: [
      { label: "Perspectives: An Open Introduction to Cultural Anthropology", note: "Open textbook chapters on fieldwork methods and ethnographic writing.", type: "Textbook", url: "https://perspectives.americananthro.org/" },
      { label: "Malinowski, Argonauts of the Western Pacific", note: "The foundational 1922 ethnography of the Trobriand Islands.", type: "Primary", url: "https://en.wikipedia.org/wiki/Argonauts_of_the_Western_Pacific" },
    ],
  },
  {
    concept: "Participant Observation",
    level: "A-level",
    summary: "learning by watching, asking and taking part responsibly",
    estimatedMinutes: 8,
    deck: "Participant observation is the paradox at the centre of fieldwork: to understand a way of life you must join in, yet to analyse it you must stay one step outside. The best ethnographers spend their careers balancing on that contradiction.",
    keyTerms: [
      { label: "Participation", value: "Taking part in the activity being studied, not just watching from the sidelines." },
      { label: "Observation", value: "Systematically noticing and recording what happens, including your own reactions." },
      { label: "Going native", value: "Becoming so immersed you lose the analytical distance needed to study the culture." },
      { label: "Rapport", value: "The trust and relationship that lets people behave naturally around the researcher." },
    ],
    sections: [
      {
        heading: "Two words in tension",
        body: [
          `Participant observation, the core technique of ethnography, is a deliberate contradiction bolted together. To participate is to join in — to cook, dig, dance, trade or pray alongside people rather than watching from a notebook. To observe is to stand back, notice patterns, and record. Do only the first and you become a member who has stopped analysing; do only the second and people freeze around you, performing for the outsider with the clipboard.`,
          `The method works precisely because of the tension. By taking part, the researcher earns access to things no interview would reveal: the jokes, the improvisations, the way rules bend in practice. By continuing to observe, they keep the analytical eye that a full member has switched off. Anthropologists sometimes call this being a "professional stranger" — close enough to belong, distant enough to see.`,
        ],
      },
      {
        heading: "Earning your way in",
        body: [
          `You cannot observe what people hide from strangers, so the first task is rapport: the slow building of trust that lets people relax and behave normally. Early in fieldwork, a researcher is a curiosity, and everything happens with one eye on them. Months later, if the work goes well, people forget the anthropologist is "working" and simply live — and that is when the real data appears.`,
          `Rapport cannot be rushed or faked, which is another reason fieldwork takes so long. It is built through small competence and humility: fumbling the language and being corrected, helping with dull chores, showing up repeatedly, admitting ignorance. The willingness to be a beginner — to be laughed at while learning — is often what earns the access that cleverness alone never will.`,
        ],
      },
      {
        heading: "The risk of going native",
        body: [
          `The opposite failure is "going native": becoming so absorbed into the community that you lose the distance needed to analyse it. The convert who can no longer explain their new world to outsiders has stopped being an ethnographer. Complete immersion feels like success but quietly dissolves the second half of the method.`,
          `So participant observation demands constant self-management. The researcher deliberately preserves a sliver of outsider-ness — writing detailed field notes each night, stepping away periodically, questioning practices that have started to feel natural. The goal is a moving balance: immersed enough to understand from the inside, detached enough to explain to those who were never there. Neither pole works alone.`,
        ],
      },
      {
        heading: "Ethics of being there",
        body: [
          `Because participant observation means entering real lives, it carries real responsibilities. People may confide things that could harm them if published; a researcher's very presence can change events; and there is an inescapable power imbalance when someone studies a community and then leaves to write about it. Modern anthropology insists on informed consent, protecting identities, and honesty about the researcher's role and intentions.`,
          `These ethics are not bureaucratic add-ons; they follow from the method itself. You have been trusted with an inside view, and that trust can be betrayed. Getting the ethics right — asking whose story this is, who benefits, who might be exposed — is part of doing the fieldwork well, not a hurdle to clear before it.`,
        ],
      },
      {
        heading: "The new-job version",
        body: [
          `Anyone who has learned a sport, joined a band, or started at a company has done amateur participant observation. You cannot understand a five-a-side team by watching from the stands; you have to play, mistime tackles, and feel how the unwritten rules work. Yet if you throw yourself in completely you stop noticing what makes the group distinctive — it just becomes "how things are". The knack, in fieldwork and in life, is to dive in enough to genuinely belong while keeping a quiet corner of your attention watching how the whole thing actually works.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "Why is participant observation described as a deliberate contradiction?",
        choices: [
          { id: "a", label: "Because it combines joining in with standing back to analyse" },
          { id: "b", label: "Because it uses two researchers at once" },
          { id: "c", label: "Because it forbids talking to anyone" },
          { id: "d", label: "Because it relies only on written records" },
        ],
        correctChoiceId: "a",
        explanation: "The method fuses participation (joining in) with observation (analytical distance). Each corrects the other: participation reveals hidden reality, observation keeps the analytical eye a full member would lose.",
      },
      {
        dimension: "depth",
        prompt: "What is 'rapport' in fieldwork?",
        choices: [
          { id: "a", label: "A written contract with the community" },
          { id: "b", label: "The trust that lets people relax and behave naturally around the researcher" },
          { id: "c", label: "A statistical measure of accuracy" },
          { id: "d", label: "The researcher's fluency in a language" },
        ],
        correctChoiceId: "b",
        explanation: "Rapport is the relationship of trust that allows people to stop performing for the outsider and simply live. It cannot be rushed, which is one reason fieldwork takes so long.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is 'going native' a failure of the method rather than a success?",
        choices: [
          { id: "a", label: "Because the researcher becomes disliked by the community" },
          { id: "b", label: "Because full immersion dissolves the analytical distance needed to explain the culture to outsiders" },
          { id: "c", label: "Because it breaks the law" },
          { id: "d", label: "Because it means the researcher never participated" },
        ],
        correctChoiceId: "b",
        explanation: "Going native loses the observation half of participant observation: the fully absorbed convert can no longer analyse or explain the world they have joined, so the method collapses.",
      },
      {
        dimension: "reasoning",
        prompt: "Why are research ethics intrinsic to participant observation, not just an add-on?",
        choices: [
          { id: "a", label: "Because the method grants an inside view that can expose or harm people if misused" },
          { id: "b", label: "Because ethics make the research faster" },
          { id: "c", label: "Because anthropologists are legally employees of the community" },
          { id: "d", label: "Because participants are paid a fixed wage" },
        ],
        correctChoiceId: "a",
        explanation: "The researcher is trusted with confidences and can alter the lives they study, then leave to publish. That power makes consent, anonymity and honesty part of doing the fieldwork well.",
      },
      {
        dimension: "depth",
        prompt: "What balance does a skilled participant observer try to maintain?",
        choices: [
          { id: "a", label: "Total detachment from the community at all times" },
          { id: "b", label: "Complete immersion with no note-taking" },
          { id: "c", label: "Immersed enough to understand from inside, detached enough to explain to outsiders" },
          { id: "d", label: "Studying only from official documents" },
        ],
        correctChoiceId: "c",
        explanation: "The aim is a moving balance — the 'professional stranger' who is close enough to belong yet distant enough to keep seeing and explaining what insiders take for granted.",
      },
    ],
    sources: [
      { label: "Perspectives: An Open Introduction to Cultural Anthropology", note: "Open textbook chapters on participant observation and fieldwork ethics.", type: "Textbook", url: "https://perspectives.americananthro.org/" },
      { label: "Participant Observation (overview)", note: "Reference summary of the method, its history and its pitfalls.", type: "Reference", url: "https://en.wikipedia.org/wiki/Participant_observation" },
    ],
  },
  {
    concept: "Kinship",
    level: "GCSE",
    summary: "how societies organise family, descent, care and obligation",
    estimatedMinutes: 7,
    deck: "Every society has to answer the same questions — who counts as family, who inherits, who owes whom care — but they answer in wildly different ways. Kinship is anthropology's study of those answers, and its great discovery is that 'family' is far more invented than it feels.",
    keyTerms: [
      { label: "Descent", value: "The culturally recognised line through which family membership and inheritance pass." },
      { label: "Patrilineal / matrilineal", value: "Tracing descent through the father's line or the mother's line respectively." },
      { label: "Affinal vs consanguineal", value: "Kin by marriage versus kin by blood — a distinction cultures draw differently." },
      { label: "Kinship terminology", value: "The system of terms (like 'uncle' or 'cousin') that sorts relatives into categories." },
    ],
    sections: [
      {
        heading: "Family is not just biology",
        body: [
          `It is tempting to think family is simply a fact of nature: you are related to the people you share blood with, and that is that. Anthropology complicates this immediately. Every society recognises some biological relationships and ignores or reinterprets others, and layers cultural rules on top. Who counts as close kin, who you may marry, who inherits the house, who must care for the elderly — none of this is dictated by DNA. It is decided by culture.`,
          `Consider adoption, godparents, wet nurses, or the way many cultures call a parent's close friends "aunt" and "uncle". These are real kinship relationships with real obligations, built from social recognition rather than biology. Kinship, anthropologists say, is a system for organising rights and duties between people — and biology is only one of the raw materials it uses.`,
        ],
      },
      {
        heading: "Lines of descent",
        body: [
          `One of the biggest cultural choices a society makes is how to trace descent — the line through which membership, names and property flow. In patrilineal systems, you belong to your father's line; in matrilineal systems, to your mother's. This is not merely a naming convention; it decides who inherits, who has authority, and where a married couple lives.`,
          `The consequences can be dramatic. In some matrilineal societies, such as the Trobriand Islanders Malinowski studied, a man's heir is not his own son but his sister's son, because property passes through the female line. A child's most important male authority may be a maternal uncle rather than the father. Systems that feel "obviously" natural in one place look upside down in another — proof that descent is a cultural design, not a biological given.`,
        ],
      },
      {
        heading: "The map hidden in kin terms",
        body: [
          `The words a society uses for relatives are a window into how it thinks. English lumps together your father's brother and your mother's brother under one word, "uncle", and all their children under "cousin". Many societies split these apart, using different terms for the mother's brother and the father's brother, because the two relationships carry different duties. The 19th-century anthropologist Lewis Henry Morgan built the comparative study of kinship on exactly these terminological differences.`,
          `The lesson is that a kinship term is not a neutral label but a social instruction. Calling someone "brother" — even when they are what English would call a distant cousin — signals a whole bundle of expected loyalty, sharing and obligation. Learn a society's kin terms and you have learned a map of who owes what to whom.`,
        ],
      },
      {
        heading: "Is kinship even one thing?",
        body: [
          `In the 20th century, kinship was so central that anthropology sometimes seemed to be mostly the study of it. Then the anthropologist David Schneider mounted a famous challenge. In his study of American kinship he argued that the Western assumption — that kinship is fundamentally about biological reproduction — is itself a cultural belief, not a universal fact. Projecting "blood relations" onto societies that organise belonging differently, he warned, distorts them.`,
          `The critique did not destroy the field, but it humbled it. Anthropologists now treat kinship as one powerful way societies organise relatedness, without assuming every culture carves it the way the West does. New forms — families made through IVF, surrogacy, donor conception, or simply chosen friendship — keep proving the point that relatedness is something people actively make, not merely inherit.`,
        ],
      },
      {
        heading: "Your own kinship map",
        body: [
          `You already live inside a kinship system you never chose. Notice who you call family without any blood tie — the "auntie" who is really your mum's oldest friend, the "chosen family" of a close-knit friendship group, the in-laws you acquired through someone else's marriage. Notice, too, the obligations that come attached: who you must invite to the wedding, who you feel bound to visit at Christmas, who would take you in without question. None of that is written in your genes. It is a cultural system doing exactly what kinship does everywhere — turning a web of people into a map of rights, duties and belonging.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is the central anthropological insight about kinship?",
        choices: [
          { id: "a", label: "Kinship is determined entirely by biology" },
          { id: "b", label: "Kinship is a cultural system that organises rights and duties, using biology as only one input" },
          { id: "c", label: "Kinship is the same in every society" },
          { id: "d", label: "Kinship only exists in non-Western societies" },
        ],
        correctChoiceId: "b",
        explanation: "Kinship organises who counts as family, who inherits and who owes care — decisions made by culture, not dictated by DNA. Adoption and 'chosen family' show relatedness is built socially.",
      },
      {
        dimension: "reasoning",
        prompt: "In a matrilineal society, why might a man's heir be his sister's son rather than his own son?",
        choices: [
          { id: "a", label: "Because sons are considered unimportant everywhere" },
          { id: "b", label: "Because property and membership pass through the mother's line, so his heir lies in the female line" },
          { id: "c", label: "Because the society has no concept of inheritance" },
          { id: "d", label: "Because men cannot own property in any culture" },
        ],
        correctChoiceId: "b",
        explanation: "In matrilineal descent, membership and property flow through the female line. A man's own children belong to their mother's line, so his heir is often his sister's son — an arrangement that feels upside down only from a patrilineal viewpoint.",
      },
      {
        dimension: "depth",
        prompt: "What does a society's kinship terminology reveal?",
        choices: [
          { id: "a", label: "Nothing beyond simple labels" },
          { id: "b", label: "How it categorises relatives and the different duties attached to each relationship" },
          { id: "c", label: "The exact genetic distance between people" },
          { id: "d", label: "The population size of the community" },
        ],
        correctChoiceId: "b",
        explanation: "Kin terms are social instructions, not neutral labels. Whether a language separates the mother's brother from the father's brother reflects whether those relationships carry different obligations.",
      },
      {
        dimension: "reasoning",
        prompt: "What was David Schneider's challenge to the study of kinship?",
        choices: [
          { id: "a", label: "That kinship does not exist at all" },
          { id: "b", label: "That treating kinship as fundamentally biological is itself a Western cultural assumption, not a universal fact" },
          { id: "c", label: "That only biology matters in kinship" },
          { id: "d", label: "That kinship terms are identical worldwide" },
        ],
        correctChoiceId: "b",
        explanation: "Schneider argued that the Western equation of kinship with biological reproduction is a local cultural belief. Projecting it onto other societies distorts how they actually organise belonging.",
      },
      {
        dimension: "depth",
        prompt: "What distinguishes affinal from consanguineal kin?",
        choices: [
          { id: "a", label: "Affinal kin are related by marriage; consanguineal kin are related by blood" },
          { id: "b", label: "Affinal kin are older; consanguineal kin are younger" },
          { id: "c", label: "They are two words for the same thing" },
          { id: "d", label: "Affinal kin live nearby; consanguineal kin live far away" },
        ],
        correctChoiceId: "a",
        explanation: "Affinal kin are relatives by marriage (in-laws); consanguineal kin are relatives by blood. Different cultures draw and weight this distinction in different ways.",
      },
    ],
    sources: [
      { label: "Perspectives: An Open Introduction to Cultural Anthropology", note: "Open textbook chapters on kinship, descent and marriage.", type: "Textbook", url: "https://perspectives.americananthro.org/" },
      { label: "Kinship (overview)", note: "Reference on descent systems, kin terminology and the anthropology of relatedness.", type: "Reference", url: "https://en.wikipedia.org/wiki/Kinship" },
    ],
  },
  {
    concept: "Ritual",
    level: "A-level",
    summary: "repeated symbolic action that marks status, belief and transition",
    estimatedMinutes: 8,
    deck: "A graduation gown, a wedding vow, a minute's silence: rituals look like empty tradition until you see what they actually do. Anthropology treats ritual as social technology — a machine for changing people's status and binding a group together.",
    keyTerms: [
      { label: "Rite of passage", value: "Van Gennep's term for a ritual that moves a person from one social status to another." },
      { label: "Liminal phase", value: "The disorienting 'in-between' stage of a rite of passage, neither the old status nor the new." },
      { label: "Collective effervescence", value: "Durkheim's term for the shared emotional charge generated by group ritual." },
      { label: "Communitas", value: "Turner's term for the intense equality and bonding felt among people in the liminal phase together." },
    ],
    sections: [
      {
        heading: "Not empty tradition",
        body: [
          `To an outsider, ritual can look like pointless repetition: why the special clothes, the fixed words, the exact order of events? Anthropology's answer is that ritual does real work. It is repeated, formalised, symbolic action, and its job is to change something in the social world — a person's status, a group's cohesion, a community's relationship to what it holds sacred. The formality is not decoration; it is what makes the action count.`,
          `Think of the difference between casually saying "we're together" and standing before witnesses to exchange vows. The words may be similar, but the ritual — the setting, the audience, the formality — transforms a private feeling into a public, binding social fact. Ritual is how societies make things official.`,
        ],
      },
      {
        heading: "The three-part passage",
        body: [
          `In 1909 the folklorist Arnold van Gennep noticed that rituals marking a change of status — birth, coming of age, marriage, death — share a common three-part shape, which he called the rite of passage. First comes separation: the person is removed from their old status, often physically set apart. Then comes the transition, or liminal phase: a strange in-between state where they are neither what they were nor what they will become. Finally comes reincorporation: they rejoin society in their new status.`,
          `A graduation captures it neatly. Students are separated (gathered in special robes, apart from ordinary life), pass through a liminal ceremony (no longer students, not yet graduates, waiting in a hall following odd rules), and are reincorporated with a new status conferred publicly. The same skeleton underlies weddings, initiations, ordinations and funerals across utterly different cultures.`,
        ],
      },
      {
        heading: "Betwixt and between",
        body: [
          `The anthropologist Victor Turner became fascinated by the middle stage, the liminal phase — from the Latin for "threshold". Studying initiation among the Ndembu of Zambia, he found that people in this phase are "betwixt and between": stripped of their old identity, often given no rank, sometimes secluded or subjected to ordeals. They are, socially, temporarily nobody.`,
          `Turner noticed something powerful about this condition. People passing through liminality together, levelled to the same status, frequently form an intense bond he called communitas — a feeling of raw equality and solidarity that everyday hierarchy suppresses. Boot camps, initiations, pilgrimages and disaster experiences generate it: the strange closeness of people who went through the threshold side by side.`,
        ],
      },
      {
        heading: "The glue of the group",
        body: [
          `Ritual also binds the group as a whole. The sociologist Émile Durkheim, studying religion, argued that when people gather and act in unison — chanting, dancing, mourning, celebrating — they generate what he called collective effervescence: a shared emotional energy that feels larger than any individual. That energy, he claimed, is society experiencing itself, and it recharges people's commitment to the group and its values.`,
          `This is why rituals cluster around the moments a community most needs solidarity: funerals that hold the grieving together, national ceremonies, religious festivals, even the coordinated roar of a stadium crowd. The content varies enormously, but the function recurs: ritual takes private, scattered individuals and, for a while, makes them feel like one body.`,
        ],
      },
      {
        heading: "Rituals you never call rituals",
        body: [
          `Your life is full of rites of passage you might never label as such. A graduation, a stag or hen do, a first day at big school, a retirement send-off, a minute's silence, blowing out birthday candles while everyone sings — each separates, transitions and reincorporates, or binds a group in shared feeling. Notice the discomfort when a ritual is skipped or botched: a marriage with no ceremony, a death with no funeral, a milestone that passes unmarked can leave people feeling that the change never quite became real. That unease is the proof that ritual was doing something after all.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "How does anthropology understand the purpose of ritual?",
        choices: [
          { id: "a", label: "As meaningless repetition of old customs" },
          { id: "b", label: "As formalised symbolic action that changes status or binds a group" },
          { id: "c", label: "As purely private behaviour with no social effect" },
          { id: "d", label: "As entertainment with no function" },
        ],
        correctChoiceId: "b",
        explanation: "Ritual is repeated, formal, symbolic action that does social work — transforming a person's status or generating group cohesion. Its formality is what makes the change count as official.",
      },
      {
        dimension: "depth",
        prompt: "What are the three stages of van Gennep's rite of passage, in order?",
        choices: [
          { id: "a", label: "Separation, transition (liminal), reincorporation" },
          { id: "b", label: "Birth, marriage, death" },
          { id: "c", label: "Observation, participation, analysis" },
          { id: "d", label: "Past, present, future" },
        ],
        correctChoiceId: "a",
        explanation: "Van Gennep identified separation from the old status, a liminal in-between transition, and reincorporation into society with a new status — a shape shared by graduations, weddings and initiations.",
      },
      {
        dimension: "reasoning",
        prompt: "Why did Turner call people in the liminal phase 'betwixt and between'?",
        choices: [
          { id: "a", label: "Because they are physically between two countries" },
          { id: "b", label: "Because they have left their old status but not yet gained the new one" },
          { id: "c", label: "Because they are always asleep during the ritual" },
          { id: "d", label: "Because they refuse to take part" },
        ],
        correctChoiceId: "b",
        explanation: "In the liminal phase a person is stripped of their former identity and not yet granted the new one — socially, temporarily 'nobody', which is why the stage feels so disorienting.",
      },
      {
        dimension: "reasoning",
        prompt: "What is 'communitas', and when does Turner say it arises?",
        choices: [
          { id: "a", label: "The formal hierarchy of a society, arising in everyday life" },
          { id: "b", label: "An intense bond of equality among people passing through the liminal phase together" },
          { id: "c", label: "The money exchanged during a ritual" },
          { id: "d", label: "The written rules of a ceremony" },
        ],
        correctChoiceId: "b",
        explanation: "Communitas is the raw equality and solidarity felt by people levelled to the same status in the liminal phase together — the closeness of those who went through the threshold side by side.",
      },
      {
        dimension: "depth",
        prompt: "What did Durkheim mean by 'collective effervescence'?",
        choices: [
          { id: "a", label: "The shared emotional energy generated when a group acts in unison" },
          { id: "b", label: "The boredom felt during long ceremonies" },
          { id: "c", label: "A chemical reaction used in rituals" },
          { id: "d", label: "The individual's private religious doubt" },
        ],
        correctChoiceId: "a",
        explanation: "Durkheim argued that acting together — chanting, dancing, mourning — generates a shared energy that feels larger than any individual, recharging people's commitment to the group and its values.",
      },
    ],
    sources: [
      { label: "Perspectives: An Open Introduction to Cultural Anthropology", note: "Open textbook chapters on ritual, religion and rites of passage.", type: "Textbook", url: "https://perspectives.americananthro.org/" },
      { label: "Rite of passage (van Gennep and Turner)", note: "Reference on the three-stage structure and the concept of liminality.", type: "Reference", url: "https://en.wikipedia.org/wiki/Rite_of_passage" },
    ],
  },
  {
    concept: "Cultural Relativism",
    level: "University",
    summary: "understanding practices within context before evaluating them",
    estimatedMinutes: 9,
    deck: "Cultural relativism is anthropology's discipline of understanding before judging — seeing a strange practice through the eyes of the people who live it. It is one of the field's greatest achievements and the source of its hardest dilemma: if every culture sets its own standards, can you ever condemn anything?",
    keyTerms: [
      { label: "Ethnocentrism", value: "Judging other cultures by the standards of your own — the error relativism corrects." },
      { label: "Methodological relativism", value: "Suspending judgement in order to understand a practice on its own terms." },
      { label: "Moral relativism", value: "The stronger claim that there is no standard beyond culture for judging right and wrong." },
      { label: "Cultural evolutionism", value: "The 19th-century idea, which Boas attacked, that cultures rank from 'primitive' to 'civilised'." },
    ],
    sections: [
      {
        heading: "Boas versus the ladder",
        body: [
          `In the 19th century, anthropology was dominated by cultural evolutionism: the confident belief that all societies climb a single ladder from "savagery" through "barbarism" to "civilisation" — with Victorian Europe, naturally, at the top. Every other culture was ranked as a more primitive version of the West.`,
          `Franz Boas, often called the father of American anthropology, demolished this in the early 1900s. Drawing on close fieldwork, he argued that each culture is the product of its own particular history and environment, and must be understood on its own terms rather than as a rung on a universal ladder. There is no single scale on which cultures can be ranked. This principle — understand a culture in its own context — is cultural relativism, and it reoriented the whole discipline.`,
        ],
      },
      {
        heading: "A tool for seeing clearly",
        body: [
          `In its core anthropological sense, relativism is a method, not a moral surrender. To understand why a practice exists — a food taboo, a marriage rule, a ritual that looks cruel or bizarre — you must first suspend your instinctive judgement and ask what it means and does within its own system. A practice that seems irrational from outside often turns out to be coherent, even ingenious, once you grasp the local logic.`,
          `This "methodological" relativism is simply good science. Recoiling in disgust tells you about your own culture, not theirs. Only by bracketing your reactions can you see the practice clearly enough to explain it. The anthropologist withholds the verdict not because judgement is forbidden forever, but because premature judgement blinds you to understanding.`,
        ],
      },
      {
        heading: "The hard version",
        body: [
          `There is, however, a stronger and more troubling claim lurking nearby: moral relativism, the idea that because values come from culture, there is no standard beyond culture for judging any practice right or wrong. On this view, condemning another society's customs is always just ethnocentrism in disguise. Understanding shades into endorsement.`,
          `This is where relativism bites back. If no cross-cultural standard exists, then slavery, human sacrifice, or the violent suppression of a minority cannot be criticised from outside — a conclusion almost no one, including most anthropologists, is willing to accept. Boas himself was a fierce campaigner against racism, which shows that understanding cultures in context need not mean abandoning all moral judgement. The trick is holding two things at once: genuine effort to understand, and the refusal to pretend that understanding settles the ethics.`,
        ],
      },
      {
        heading: "Relativism and human rights",
        body: [
          `The tension becomes concrete in debates over universal human rights. Critics from some societies argue that "universal" rights are really Western values dressed up as neutral, imposed on cultures with different traditions — a relativist objection. Defenders reply that some protections (against torture, slavery, genocide) must hold across all cultures, or the very idea of rights is empty.`,
          `Most anthropologists today occupy a careful middle ground. They deploy relativism as an indispensable tool for understanding, and as a guard against the arrogance of assuming your culture is the measure of all others. But they resist the slide into a paralysing moral relativism that would forbid all criticism. The mature position is not "anything goes" but "understand deeply, judge carefully, and never confuse unfamiliarity with wrongness."`,
        ],
      },
      {
        heading: "The traveller's dilemma",
        body: [
          `You practise a rough cultural relativism whenever you travel and force yourself past the first flinch of "that's weird" — the unfamiliar food, the different sense of personal space, the custom that seems rude until you learn what it means. That effort to understand before judging is the everyday version of Boas's insight. But you also feel the limit: there are practices you would still condemn even after fully understanding them. Living well with other cultures means holding both instincts together — curiosity generous enough to understand, and a conscience honest enough not to excuse everything it understands.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What 19th-century idea did Franz Boas attack with cultural relativism?",
        choices: [
          { id: "a", label: "That all cultures are morally identical" },
          { id: "b", label: "Cultural evolutionism — the ranking of societies on a single ladder from primitive to civilised" },
          { id: "c", label: "That fieldwork is necessary" },
          { id: "d", label: "That language shapes thought" },
        ],
        correctChoiceId: "b",
        explanation: "Boas rejected the idea that cultures climb one universal ladder with the West on top, arguing instead that each culture is a product of its own history and must be understood in its own context.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is methodological relativism considered good scientific practice?",
        choices: [
          { id: "a", label: "Because it proves all cultures are superior to the West" },
          { id: "b", label: "Because suspending instinctive judgement lets you see a practice's local logic clearly enough to explain it" },
          { id: "c", label: "Because it forbids studying other cultures" },
          { id: "d", label: "Because it ranks cultures accurately" },
        ],
        correctChoiceId: "b",
        explanation: "Recoiling in disgust reveals your own culture, not theirs. Bracketing your reactions is what allows you to understand why a practice makes sense within its own system.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the troubling consequence of strong moral relativism?",
        choices: [
          { id: "a", label: "It makes all cultures easier to compare" },
          { id: "b", label: "It implies practices like slavery or genocide cannot be criticised from outside a culture" },
          { id: "c", label: "It forces everyone to adopt Western values" },
          { id: "d", label: "It proves that morality is biological" },
        ],
        correctChoiceId: "b",
        explanation: "If there is no standard beyond culture, then no outside criticism of any practice is legitimate — a conclusion that would rule out condemning slavery or genocide, which almost no one accepts.",
      },
      {
        dimension: "depth",
        prompt: "How does the fact that Boas campaigned against racism relate to relativism?",
        choices: [
          { id: "a", label: "It shows understanding cultures in context need not mean abandoning all moral judgement" },
          { id: "b", label: "It shows he secretly rejected relativism entirely" },
          { id: "c", label: "It proves relativism requires accepting every practice" },
          { id: "d", label: "It is unrelated to his anthropology" },
        ],
        correctChoiceId: "a",
        explanation: "Boas combined methodological relativism with fierce moral commitment against racism, demonstrating that understanding a culture in context is compatible with holding firm ethical judgements.",
      },
      {
        dimension: "depth",
        prompt: "What is the mature anthropological position on cultural relativism today?",
        choices: [
          { id: "a", label: "Anything goes; no practice can ever be judged" },
          { id: "b", label: "Understand deeply and guard against arrogance, but do not slide into forbidding all criticism" },
          { id: "c", label: "Western values are always correct" },
          { id: "d", label: "All cultures should be ranked scientifically" },
        ],
        correctChoiceId: "b",
        explanation: "Most anthropologists use relativism as a tool for understanding and a check on ethnocentrism, while resisting a paralysing moral relativism — 'understand deeply, judge carefully'.",
      },
    ],
    sources: [
      { label: "Perspectives: An Open Introduction to Cultural Anthropology", note: "Open textbook chapters on relativism, ethnocentrism and the Boasian tradition.", type: "Textbook", url: "https://perspectives.americananthro.org/" },
      { label: "Cultural relativism (overview)", note: "Reference on the methodological and moral senses of the concept.", type: "Reference", url: "https://en.wikipedia.org/wiki/Cultural_relativism" },
    ],
  },
  {
    concept: "Material Culture",
    level: "GCSE",
    summary: "objects as evidence of work, identity, exchange and value",
    estimatedMinutes: 7,
    deck: "The things people make and keep are not just stuff — they are frozen evidence of belief, labour, status and memory. Material culture is the anthropology of objects, and it treats a cooking pot or a phone as a document that can be read.",
    keyTerms: [
      { label: "Material culture", value: "The physical objects a society makes and uses, studied as evidence of its life and values." },
      { label: "The social life of things", value: "Appadurai's idea that objects have biographies, gaining and losing meaning as they move." },
      { label: "Commodity vs gift", value: "Whether an object's value lies in its market price or in the relationships it carries." },
      { label: "Provenance", value: "The traced history of an object's ownership, use and movement." },
    ],
    sections: [
      {
        heading: "Objects as documents",
        body: [
          `Most of human history left no written records, but it left things: tools, pots, ornaments, buildings, weapons, graves. Material culture is the study of these objects as evidence — not merely as artefacts to admire, but as documents that can be read for information about the people who made and used them. Archaeology depends entirely on this, but so does the anthropology of the living present.`,
          `An object encodes an astonishing amount. A single clay pot reveals the technology available, the materials traded, the labour organised, the aesthetic valued, and often the beliefs held — if it was buried with the dead, it tells you something about ideas of the afterlife. Learning to read objects means asking not just "what is this?" but "what did it take to make, what was it for, and what did it mean?"`,
        ],
      },
      {
        heading: "Things carry identity",
        body: [
          `Objects do not just reflect a society; they actively help make it. What people wear, display and own communicates who they are — status, group membership, taste, belief. A uniform, a wedding ring, a religious symbol, a luxury watch: each is a physical statement in a shared code. This is why anthropologists treat consumption and display as social acts, not trivial ones.`,
          `Because objects speak, they can be used to include and exclude. Fashions mark insiders and outsiders; heirlooms bind families across generations; sacred objects concentrate a community's deepest values into a form you can hold. To dismiss "material things" as superficial is to miss how much social work they quietly do.`,
        ],
      },
      {
        heading: "The social life of things",
        body: [
          `The anthropologist Arjun Appadurai argued in the 1980s that we should follow objects the way a biographer follows a person, tracing "the social life of things". An object's meaning is not fixed; it shifts as the thing moves through different hands and settings. The same painting can be a gift, then a commodity sold at auction, then a national treasure that could never be sold — its identity changing with each transition, even though the canvas stays the same.`,
          `This idea, "the cultural biography of things", reframes value as something done to objects rather than contained in them. A mass-produced mug is worthless until it becomes "Grandad's mug", at which point no money would buy it. Tracking how things gain and lose meaning as they travel exposes the hidden systems of value a society runs on.`,
        ],
      },
      {
        heading: "Where objects come from",
        body: [
          `Because objects carry meaning and value, their history — their provenance — matters enormously. Museums built on artefacts taken during colonial rule now face demands for restitution: the same object can be a prized exhibit in one place and stolen heritage in another. The physical thing has not changed, but understanding of who it rightfully belongs to has.`,
          `Provenance also underlies authenticity and worth in art and antiques: a documented chain of ownership can turn an anonymous painting into a fortune, or expose a forgery. In every case the lesson is the same — an object is never just itself. It carries its history, and reading material culture means reading that history, including the uncomfortable parts.`,
        ],
      },
      {
        heading: "Read your own possessions",
        body: [
          `Look around the room and read it as an anthropologist would. Your phone signals status and taste as loudly as any tribal ornament; your clothes announce group membership; the one battered object you would never throw away — a ticket stub, a ring, a childhood toy — has a value no market could set, because it is really a piece of frozen memory. Even a receipt is material evidence of an exchange. The things you keep, display and cannot part with form a document of who you are and what you value — exactly the kind of document anthropology has been reading for over a century.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "Why does anthropology treat objects as 'documents'?",
        choices: [
          { id: "a", label: "Because objects contain written text" },
          { id: "b", label: "Because they encode evidence of technology, labour, belief and value" },
          { id: "c", label: "Because they are always more reliable than people" },
          { id: "d", label: "Because they cannot be misinterpreted" },
        ],
        correctChoiceId: "b",
        explanation: "A single pot reveals available technology, traded materials, organised labour, aesthetics and even beliefs about death if it was a grave good. Objects can be read for information about the people who made them.",
      },
      {
        dimension: "reasoning",
        prompt: "What does Appadurai's 'social life of things' claim about objects?",
        choices: [
          { id: "a", label: "That objects have a single fixed meaning forever" },
          { id: "b", label: "That an object's meaning changes as it moves through different hands and settings" },
          { id: "c", label: "That objects have no meaning at all" },
          { id: "d", label: "That only expensive objects matter" },
        ],
        correctChoiceId: "b",
        explanation: "Appadurai argued objects have biographies: the same painting can be a gift, then a commodity, then an unsellable national treasure — its identity shifting with each transition though the canvas is unchanged.",
      },
      {
        dimension: "reasoning",
        prompt: "How does an ordinary mug becoming 'Grandad's mug' illustrate value in material culture?",
        choices: [
          { id: "a", label: "Value is fixed by the manufacturer" },
          { id: "b", label: "Value is done to objects through their social history, not just contained in them" },
          { id: "c", label: "Only new objects have value" },
          { id: "d", label: "Sentimental value does not exist" },
        ],
        correctChoiceId: "b",
        explanation: "A mass-produced mug is worthless until its biography makes it 'Grandad's mug', after which no money would buy it — showing value is conferred through an object's social life.",
      },
      {
        dimension: "depth",
        prompt: "Why does provenance matter for objects in museums?",
        choices: [
          { id: "a", label: "It never affects an object's meaning" },
          { id: "b", label: "An object's history can make it a prized exhibit in one place and contested stolen heritage in another" },
          { id: "c", label: "It only matters for modern art" },
          { id: "d", label: "It determines an object's physical weight" },
        ],
        correctChoiceId: "b",
        explanation: "Provenance — the traced history of ownership — underlies debates over restitution of colonial-era artefacts and questions of authenticity: the same object can carry opposite meanings depending on its history.",
      },
      {
        dimension: "depth",
        prompt: "What does material culture reveal about consumption and display?",
        choices: [
          { id: "a", label: "They are trivial and socially meaningless" },
          { id: "b", label: "They are social acts that communicate identity, status and group membership" },
          { id: "c", label: "They only occur in wealthy societies" },
          { id: "d", label: "They have no code that others can read" },
        ],
        correctChoiceId: "b",
        explanation: "What people wear, own and display is a physical statement in a shared code — marking status, taste and belonging — which is why anthropology treats consumption as meaningful social action.",
      },
    ],
    sources: [
      { label: "Perspectives: An Open Introduction to Cultural Anthropology", note: "Open textbook material on objects, exchange and economic anthropology.", type: "Textbook", url: "https://perspectives.americananthro.org/" },
      { label: "Arjun Appadurai, The Social Life of Things", note: "The idea of objects having cultural biographies and shifting value.", type: "Reference", url: "https://en.wikipedia.org/wiki/Arjun_Appadurai" },
    ],
  },
  {
    concept: "Liminality",
    level: "University",
    summary: "threshold states where ordinary roles are suspended or remade",
    estimatedMinutes: 9,
    deck: "Liminality is the strange in-between: the doorway state where you have left one identity but not yet arrived at the next. Anthropology discovered it in tribal initiations, but once you know the pattern you see it everywhere — in adolescence, in airports, in the disorienting first weeks of any new life.",
    keyTerms: [
      { label: "Limen", value: "Latin for 'threshold' — the root of liminality, the state of being on the boundary." },
      { label: "Liminal phase", value: "The middle stage of a rite of passage, between an old status and a new one." },
      { label: "Communitas", value: "The intense equality and solidarity that can arise among people in a liminal state together." },
      { label: "Liminoid", value: "Turner's term for liminal-like experiences in modern life, chosen rather than compulsory." },
    ],
    sections: [
      {
        heading: "On the threshold",
        body: [
          `Liminality comes from the Latin limen, meaning threshold — the strip of a doorway that is neither inside nor outside. Arnold van Gennep coined the idea to describe the middle stage of rites of passage, and Victor Turner made it one of anthropology's most powerful concepts. A liminal state is one of being betwixt and between: you have shed an old identity but not yet taken on the new one, standing on the boundary between two social worlds.`,
          `What makes liminality fascinating is that ordinary social rules loosen or invert there. The normal structure — ranks, roles, expectations — is temporarily suspended. The person in the doorway is, for a while, unclassifiable, and societies treat such people with a mixture of danger, sacredness and license.`,
        ],
      },
      {
        heading: "What Turner saw in initiation",
        body: [
          `Turner developed the idea studying initiation rites among the Ndembu of Zambia. Initiates were removed from society, stripped of their former status, their names, sometimes their clothes, and subjected to ordeals and secret teaching. During this phase they were treated as neither children nor adults — often as if invisible, or even symbolically dead, before being "reborn" into their new adult status.`,
          `Turner noticed the deep logic of this. The old self has to be dismantled before the new one can be built, and the liminal phase is the workshop where that transformation happens. The disorientation is not a flaw in the ritual; it is the mechanism. Suspending a person's identity is precisely what makes it possible to change it.`,
        ],
      },
      {
        heading: "Anti-structure and communitas",
        body: [
          `Turner argued that liminality reveals something structure normally hides. Because everyone in the liminal phase is stripped to the same bare condition — equal, rankless, undifferentiated — they can experience communitas: an intense, spontaneous bond of equality and shared humanity. He contrasted this "anti-structure" with the hierarchical structure of everyday society. Communitas is the electric solidarity of people going through the threshold together.`,
          `This helps explain the peculiar intensity of experiences like boot camp, pilgrimage, festivals, or surviving a disaster together. Ordinary status dissolves, strangers become intensely close, and people report feeling more alive and connected than in normal life. Turner saw such moments as a necessary counterweight to social structure — a periodic reminder of the raw human bond beneath the roles.`,
        ],
      },
      {
        heading: "Liminality in modern life",
        body: [
          `Turner extended the idea to industrial society, but with a twist. In tribal initiation, liminality is compulsory and transformative; in modern life, much of what looks liminal is chosen and playful — theatre, festivals, sport, art, travel. He called these "liminoid" phenomena: liminal-like experiences we opt into for leisure or meaning rather than being forced through by ritual.`,
          `The concept has since spread far beyond anthropology. Scholars describe airports, waiting rooms, adolescence, unemployment, migration and even the space of the internet as liminal — zones of suspended identity, unsettled and full of both anxiety and possibility. The word endures because it names something real: the vertigo, and the openness, of being between two settled states.`,
        ],
      },
      {
        heading: "Your own in-between",
        body: [
          `You have lived in liminal states more than you may realise. The first week of university or a new job, when you are no longer who you were and not yet who you will become. The engagement between "single" and "married". The disorienting stretch after a redundancy, or after moving countries, when the old rules no longer apply and the new ones are unclear. Even an airport at 3am — nowhere, timeless, everyone in transit — has the liminal feel. These thresholds are uncomfortable precisely because your identity is unfixed, but that same unfixing is what makes them the moments where real change becomes possible.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What does 'liminality' literally refer to?",
        choices: [
          { id: "a", label: "A state of high social status" },
          { id: "b", label: "A threshold or boundary state, between one identity and another" },
          { id: "c", label: "The final stage of a ritual" },
          { id: "d", label: "A written legal contract" },
        ],
        correctChoiceId: "b",
        explanation: "From the Latin limen ('threshold'), liminality is the 'betwixt and between' state in which an old identity has been shed but the new one not yet taken on.",
      },
      {
        dimension: "reasoning",
        prompt: "Why did Turner see the disorientation of the liminal phase as the mechanism of a rite, not a flaw?",
        choices: [
          { id: "a", label: "Because confusion makes rituals more entertaining" },
          { id: "b", label: "Because the old self must be dismantled before a new identity can be built" },
          { id: "c", label: "Because initiates enjoy being lost" },
          { id: "d", label: "Because it saves the community money" },
        ],
        correctChoiceId: "b",
        explanation: "Suspending a person's identity is what makes it possible to change it. The liminal phase is the 'workshop' where the old self is taken apart so the new status can be assembled.",
      },
      {
        dimension: "reasoning",
        prompt: "How does communitas relate to the liminal phase?",
        choices: [
          { id: "a", label: "It is the hierarchy that liminality reinforces" },
          { id: "b", label: "It is the intense equality and bonding that arises when everyone is stripped to the same rankless condition" },
          { id: "c", label: "It is the fee paid to enter a ritual" },
          { id: "d", label: "It is the return to normal social structure" },
        ],
        correctChoiceId: "b",
        explanation: "Because liminality levels everyone to the same bare status, it produces communitas — a spontaneous, intense bond of equality that everyday hierarchy suppresses.",
      },
      {
        dimension: "depth",
        prompt: "What did Turner mean by 'liminoid' phenomena in modern society?",
        choices: [
          { id: "a", label: "Compulsory tribal initiations" },
          { id: "b", label: "Liminal-like experiences we choose for leisure or meaning, such as theatre, festivals and travel" },
          { id: "c", label: "Purely economic transactions" },
          { id: "d", label: "Experiences that have no relation to liminality" },
        ],
        correctChoiceId: "b",
        explanation: "Turner distinguished the compulsory, transformative liminality of ritual from 'liminoid' experiences — leisure activities like theatre, festivals and sport that we opt into voluntarily.",
      },
      {
        dimension: "depth",
        prompt: "Why has 'liminality' been applied to places like airports and to periods like adolescence?",
        choices: [
          { id: "a", label: "Because they are always dangerous" },
          { id: "b", label: "Because they are zones of suspended, unsettled identity between two more settled states" },
          { id: "c", label: "Because they have no cultural meaning" },
          { id: "d", label: "Because they are permanent conditions" },
        ],
        correctChoiceId: "b",
        explanation: "The concept endures because it names the vertigo and openness of being between settled states — which airports, adolescence, migration and unemployment all share.",
      },
    ],
    sources: [
      { label: "Perspectives: An Open Introduction to Cultural Anthropology", note: "Open textbook chapters on ritual, liminality and Turner's work.", type: "Textbook", url: "https://perspectives.americananthro.org/" },
      { label: "Victor Turner, liminality and communitas", note: "Reference on the concept and its extension to modern 'liminoid' experience.", type: "Reference", url: "https://en.wikipedia.org/wiki/Liminality" },
    ],
  },
  {
    concept: "Gift Exchange",
    level: "University",
    summary: "reciprocity, obligation and status beyond simple market trade",
    estimatedMinutes: 9,
    deck: "There is no such thing as a free gift. A century ago Marcel Mauss showed that gifts everywhere carry an invisible thread of obligation — to give, to receive, and to repay — and that this thread, not money, is the oldest glue of human society.",
    keyTerms: [
      { label: "Reciprocity", value: "The obligation to return a gift, which binds giver and receiver into an ongoing relationship." },
      { label: "The three obligations", value: "Mauss's claim that gift systems compel people to give, to receive and to reciprocate." },
      { label: "Kula", value: "The Trobriand exchange of shell valuables that circulate endlessly, creating alliances." },
      { label: "Potlatch", value: "The Pacific Northwest feast where status is won by giving away or destroying wealth." },
    ],
    sections: [
      {
        heading: "The gift that binds",
        body: [
          `In 1925 the French anthropologist Marcel Mauss published a short book, The Gift, that reshaped how we understand exchange. His question was simple and profound: why, in societies across the world, does receiving a gift create a felt obligation to give one back? What is the "power in the gift" that compels a return?`,
          `Mauss's answer was that in gift-based societies, a gift is never fully separated from the person who gives it. It carries something of the giver, and so it demands reciprocity — a countergift — to keep the relationship in balance. Unlike a market sale, which is finished the moment money changes hands, a gift opens a bond that must be tended. Exchange, Mauss showed, is not primarily about goods; it is about weaving people together.`,
        ],
      },
      {
        heading: "Three obligations",
        body: [
          `Mauss argued that gift systems rest on three linked obligations. There is the obligation to give — refusing to give is refusing alliance, even declaring hostility. There is the obligation to receive — turning down a gift is a serious insult, a rejection of the relationship it offers. And there is the obligation to reciprocate — to return something, ideally of comparable or greater worth, in due course.`,
          `Together these three make gift exchange a kind of social engine. Each gift creates a debt; each repayment creates a new one; the cycle never quite closes, and so the relationship endures. This is why a gift given and instantly, exactly repaid feels cold — it cancels the bond rather than sustaining it. The lingering, slightly unequal debt is the point.`,
        ],
      },
      {
        heading: "Shells that never stop moving",
        body: [
          `Mauss drew on Malinowski's account of the Kula ring in the Trobriand Islands. Across a wide circle of islands, men undertook dangerous canoe voyages to exchange two kinds of shell valuable — red necklaces travelling one way around the ring, white armbands the other. These objects were not consumed or kept; each was held for a while, then passed on, circulating endlessly.`,
          `Economically this looks pointless: nobody ends up richer. But that misses the function. The Kula created and maintained alliances, trust and prestige across islands that might otherwise be hostile, and it provided the safe framework within which ordinary trade in food and tools could also happen. The valuables were the visible thread of an invisible web of relationships — exchange as diplomacy.`,
        ],
      },
      {
        heading: "Giving as power",
        body: [
          `Gift exchange is not always gentle. Among peoples of the Pacific Northwest coast, the potlatch was a feast where chiefs competed for status by giving away — and sometimes ostentatiously destroying — vast quantities of wealth: blankets, canoes, coppers. The more you could give away, the greater your prestige. Generosity became a weapon, and a rival could be humiliated by a gift too large to repay.`,
          `This reveals the hidden power in gifts. To give is to place the receiver in your debt, and an unrepayable gift is a form of domination. Mauss's insight cuts both ways: the gift binds people together, but it can also rank them. Behind the warm language of generosity runs a hard logic of obligation, competition and status.`,
        ],
      },
      {
        heading: "Why you buy the next round",
        body: [
          `Mauss is alive every time you feel you "owe" someone. A friend buys the first round and you feel bound to buy the next; a dinner invitation must eventually be returned; a gift that is too generous makes you uncomfortable because you cannot easily reciprocate. Notice how offering to pay a close friend back in cash for a home-cooked meal feels insulting — it converts a gift into a transaction and severs the bond instead of tending it. The awkwardness of an unequal exchange, the quiet scorekeeping of favours, the pressure to reciprocate a Christmas present you did not expect: all of it is the ancient logic of the gift, still running under modern life.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What was Marcel Mauss's central claim in The Gift?",
        choices: [
          { id: "a", label: "Gifts are always given freely with no obligation" },
          { id: "b", label: "A gift carries an obligation to reciprocate, binding giver and receiver into a relationship" },
          { id: "c", label: "Gift-giving only exists in modern economies" },
          { id: "d", label: "Money is the oldest form of exchange" },
        ],
        correctChoiceId: "b",
        explanation: "Mauss argued that a gift is never fully separated from the giver and so compels a return, opening an ongoing bond — unlike a market sale, which ends when money changes hands.",
      },
      {
        dimension: "depth",
        prompt: "What are Mauss's three obligations in gift exchange?",
        choices: [
          { id: "a", label: "To give, to receive and to reciprocate" },
          { id: "b", label: "To buy, to sell and to profit" },
          { id: "c", label: "To save, to invest and to spend" },
          { id: "d", label: "To take, to keep and to hoard" },
        ],
        correctChoiceId: "a",
        explanation: "Gift systems rest on the obligation to give (refusing signals hostility), to receive (refusing insults the relationship) and to reciprocate (returning something in due course).",
      },
      {
        dimension: "reasoning",
        prompt: "Economically, the Kula ring makes nobody richer. Why does it matter?",
        choices: [
          { id: "a", label: "Because the shells are secretly very valuable" },
          { id: "b", label: "Because circulating the valuables creates alliances, trust and prestige between islands" },
          { id: "c", label: "Because it replaces all ordinary trade" },
          { id: "d", label: "Because the objects are eventually eaten" },
        ],
        correctChoiceId: "b",
        explanation: "The endlessly circulating valuables were the visible thread of an invisible web of relationships, maintaining alliances and prestige and providing a safe framework for ordinary trade — exchange as diplomacy.",
      },
      {
        dimension: "reasoning",
        prompt: "What does the potlatch reveal about the power hidden in gifts?",
        choices: [
          { id: "a", label: "That giving is always purely altruistic" },
          { id: "b", label: "That an unrepayable gift can dominate and humiliate the receiver, so generosity can be a weapon" },
          { id: "c", label: "That gifts have no effect on status" },
          { id: "d", label: "That destroying wealth is economically efficient" },
        ],
        correctChoiceId: "b",
        explanation: "In the potlatch, chiefs won prestige by giving away or destroying wealth, and a gift too large to repay humiliated a rival — showing that placing someone in your debt can be a form of domination.",
      },
      {
        dimension: "depth",
        prompt: "Why does exactly and instantly repaying a gift feel cold?",
        choices: [
          { id: "a", label: "Because it cancels the debt and closes the bond the gift was meant to sustain" },
          { id: "b", label: "Because it is always mathematically impossible" },
          { id: "c", label: "Because gifts must never be repaid at all" },
          { id: "d", label: "Because it increases the giver's profit" },
        ],
        correctChoiceId: "a",
        explanation: "The lingering, slightly unequal debt is what keeps a relationship alive. Instantly settling it converts the gift into a transaction and severs the tie instead of tending it.",
      },
    ],
    sources: [
      { label: "Marcel Mauss, The Gift (1925)", note: "The foundational study of reciprocity and obligation in gift exchange.", type: "Primary", url: "https://en.wikipedia.org/wiki/The_Gift_(essay)" },
      { label: "Perspectives: An Open Introduction to Cultural Anthropology", note: "Open textbook chapters on economic anthropology, reciprocity and exchange.", type: "Textbook", url: "https://perspectives.americananthro.org/" },
    ],
  },
  {
    concept: "Emic and Etic",
    level: "A-level",
    summary: "insider and outsider explanations of the same behaviour",
    estimatedMinutes: 8,
    deck: "Do you explain a custom the way the people who practise it do, or the way an outside analyst does? Anthropology's answer is: both. The emic and etic distinction is the discipline's tool for holding the insider's meaning and the outsider's analysis in the same hand.",
    keyTerms: [
      { label: "Emic", value: "An account in the insiders' own terms, categories and meanings." },
      { label: "Etic", value: "An account in the outside analyst's terms, comparing across cultures." },
      { label: "Kenneth Pike", value: "The linguist who coined the pair from 'phonemic' and 'phonetic'." },
      { label: "Reflexivity", value: "Awareness that the etic analyst's categories are themselves shaped by their own culture." },
    ],
    sections: [
      {
        heading: "Two ways to explain a custom",
        body: [
          `Suppose you observe a community that refuses to eat a particular animal. You can explain this in two very different ways. The insiders might say the animal is sacred, or unclean, or an ancestor — that is the meaning the practice has for them. An outside analyst might instead argue that avoiding the animal makes ecological or economic sense in that environment — a reason the insiders may never mention or even recognise. Both explanations can be valid, and they answer different questions.`,
          `Anthropology names this pair the emic and the etic. An emic account describes a practice in the insiders' own terms and meanings; an etic account describes it in the analyst's terms, often to compare it with other cultures. Neither is simply "the truth"; they are two lenses, and skilled anthropology uses both without confusing them.`,
        ],
      },
      {
        heading: "Where the words come from",
        body: [
          `The distinction was coined in the 1950s by the linguist Kenneth Pike, who built the words from linguistics. "Phonemic" analysis studies the sound distinctions that matter within a particular language — the ones its speakers hear as meaningful. "Phonetic" analysis studies all speech sounds using a universal system, from outside any single language. Pike clipped these to emic and etic and generalised them to all of culture.`,
          `The origin is a useful reminder of what each term does. The emic, like the phonemic, is about the categories that are real and meaningful to insiders — the distinctions they actually make. The etic, like the phonetic, is a comparative framework imposed from outside to allow systematic analysis across many cases. One asks "what matters to them?", the other asks "how does this compare?"`,
        ],
      },
      {
        heading: "Why you need both",
        body: [
          `Rely only on the emic and you risk simply repeating what people believe about themselves, which may miss patterns they cannot see — an emic account of a marriage custom might never mention the economic alliances it quietly cements. Rely only on the etic and you risk imposing your own categories so heavily that you distort the very thing you are studying, explaining people's lives in terms they would not recognise and might reject.`,
          `The strongest anthropology moves between the two. It takes the insider's meanings seriously as data — you cannot understand a ritual without knowing what it means to the participants — while also standing back to analyse patterns, functions and comparisons the participants may not articulate. The emic keeps the account faithful; the etic keeps it analytical. Losing either one weakens the work.`,
        ],
      },
      {
        heading: "The catch in the outsider's view",
        body: [
          `There is a trap in the etic that reflexive anthropologists watch for. It is easy to imagine the outsider's analytical framework is neutral and objective — pure science looking down on local belief. But the etic categories are themselves products of a culture, usually a Western academic one. What looks like a universal, objective lens may quietly smuggle in its own assumptions about economics, rationality or human nature.`,
          `So the emic/etic distinction is not a simple hierarchy with objective analysis on top and mere belief below. Both are perspectives; both can be wrong. The discipline's task is to use insider meaning and outsider analysis together, while staying honest that the "outside" view has a culture too. Handled well, the pair is less a ladder than a conversation between two vantage points.`,
        ],
      },
      {
        heading: "Fan and analyst",
        body: [
          `You switch between emic and etic all the time. Ask a devoted football fan why the derby match matters and you get the emic account — history, loyalty, the meaning of the rivalry, all felt from inside. Ask a sports economist and you get the etic — attendance figures, media revenue, the commercial machinery the fan rarely thinks about. Neither is the whole truth; the fan's passion is real data, and so is the balance sheet. The same double vision helps in ordinary life: understanding why a colleague's team does something their way (emic) while also seeing the wider pattern they are too close to notice (etic) is exactly the skill anthropology has been formalising for decades.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is the difference between an emic and an etic account?",
        choices: [
          { id: "a", label: "Emic is written; etic is spoken" },
          { id: "b", label: "Emic describes a practice in insiders' own terms; etic describes it in the outside analyst's terms" },
          { id: "c", label: "Emic is true; etic is false" },
          { id: "d", label: "They are two words for the same perspective" },
        ],
        correctChoiceId: "b",
        explanation: "An emic account uses the insiders' own categories and meanings; an etic account uses the analyst's framework, often for cross-cultural comparison. Both are valid lenses answering different questions.",
      },
      {
        dimension: "depth",
        prompt: "Where did Kenneth Pike derive the terms 'emic' and 'etic'?",
        choices: [
          { id: "a", label: "From 'ethics' and 'economics'" },
          { id: "b", label: "From 'phonemic' and 'phonetic' in linguistics" },
          { id: "c", label: "From the names of two anthropologists" },
          { id: "d", label: "From Latin words for inside and outside" },
        ],
        correctChoiceId: "b",
        explanation: "Pike clipped 'phonemic' (sound distinctions meaningful within a language) and 'phonetic' (all sounds analysed from outside) to create emic and etic, generalising them to culture.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the risk of relying only on an emic account?",
        choices: [
          { id: "a", label: "It imposes foreign categories on the culture" },
          { id: "b", label: "It may simply repeat what people believe and miss patterns they cannot see" },
          { id: "c", label: "It is always more objective than any other view" },
          { id: "d", label: "It cannot be recorded" },
        ],
        correctChoiceId: "b",
        explanation: "An emic-only account risks echoing people's self-understanding while missing functions they don't articulate — like the economic alliances a marriage custom quietly cements.",
      },
      {
        dimension: "reasoning",
        prompt: "Why do reflexive anthropologists warn against treating the etic view as purely neutral?",
        choices: [
          { id: "a", label: "Because outsiders can never learn anything" },
          { id: "b", label: "Because etic categories are themselves products of a culture and can smuggle in their own assumptions" },
          { id: "c", label: "Because the emic view is always correct" },
          { id: "d", label: "Because comparison across cultures is impossible" },
        ],
        correctChoiceId: "b",
        explanation: "The analyst's 'objective' framework is usually a Western academic one, carrying its own assumptions about rationality or economics. The etic is a perspective too, not a view from nowhere.",
      },
      {
        dimension: "depth",
        prompt: "Why does strong anthropology use both emic and etic together?",
        choices: [
          { id: "a", label: "Because the emic keeps the account faithful while the etic keeps it analytical" },
          { id: "b", label: "Because using two methods is always faster" },
          { id: "c", label: "Because insiders and outsiders never disagree" },
          { id: "d", label: "Because one of them is always ignored" },
        ],
        correctChoiceId: "a",
        explanation: "The emic keeps the account faithful to what practices mean to participants; the etic supplies patterns, functions and comparisons they may not articulate. Losing either weakens the work.",
      },
    ],
    sources: [
      { label: "Perspectives: An Open Introduction to Cultural Anthropology", note: "Open textbook chapters on perspective, method and interpretation.", type: "Textbook", url: "https://perspectives.americananthro.org/" },
      { label: "Emic and etic (Kenneth Pike)", note: "Reference on the origin and use of the insider/outsider distinction.", type: "Reference", url: "https://en.wikipedia.org/wiki/Emic_and_etic" },
    ],
  },
];

export const anthropologyLessons = buildAuthoredLessons("anthropology", anthropology);
