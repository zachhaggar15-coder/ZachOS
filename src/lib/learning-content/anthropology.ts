import { buildAuthoredLessons, type AuthoredLesson } from "./types";

// Ten hand-written Anthropology lessons: researched, concept-specific prose
// with named thinkers and real ethnographic cases, each closing on an
// everyday-life example, plus genuine recall quizzes.
const anthropology: AuthoredLesson[] = [
  {
    concept: "Habitus",
    level: "University",
    summary: "how social structure gets into the body and comes back out as taste",
    estimatedMinutes: 9,
    deck: "Bourdieu's problem was that neither answer to the structure-agency question works: people are not puppets of society, and they are not free choosers either. Habitus is his solution — structure deposited in the body as disposition, so that when you act most freely you are most reliably reproducing the order that made you.",
    keyTerms: [
      { label: "Habitus", value: "Durable dispositions instilled by social position, generating practice without conscious rule-following." },
      { label: "Field", value: "A structured arena of competition with its own stakes and rules, in which habitus operates." },
      { label: "Cultural capital", value: "Dispositions, knowledge and credentials convertible into advantage within a field." },
      { label: "Symbolic violence", value: "Domination that works because the dominated share the categories that rank them low." },
    ],
    sections: [
      {
        heading: "The problem habitus solves",
        body: [
          `Social theory had been stuck between two unsatisfying options. Structuralism made people executors of rules they did not author — but nobody experiences life as rule-following, and the account cannot explain improvisation or change. Rational choice made people calculating individuals — but that cannot explain why choices cluster so tightly by class, or why people so reliably want what their position makes available. Neither the puppet nor the calculator resembles anyone you have met.`,
          `Bourdieu's move was to relocate structure into the body. Habitus is a set of durable dispositions — postures, tastes, reflexes, senses of what is done and what is for people like us — laid down by early social position and functioning below deliberation. It generates practice the way grammar generates sentences: not by dictating what to say but by making some things sayable and others unthinkable. You improvise constantly and freely, and your improvisations are structured, because the thing doing the improvising was itself made by the structure.`,
        ],
      },
      {
        heading: "Taste as a class marker you feel as personal",
        body: [
          `Bourdieu's Distinction is the empirical demonstration, and it is deliberately uncomfortable. Surveying French cultural preferences, he found taste tracks class position with a precision that no story about individual sensibility can accommodate — in music, food, furniture, sport, photography. What people found beautiful, tedious or vulgar aligned with their trajectory through the social space, and it did so while each of them experienced their preferences as the most personal thing about them.`,
          `The mechanism is that taste is not an opinion about objects; it is a disposition instilled by conditions. Bourdieu argued the bourgeois aesthetic — valuing form over function, distance over involvement, difficulty over immediate pleasure — reflects the material condition of not needing things to be useful. Working-class taste for the substantial and the functional reflects necessity made into virtue. Neither group is choosing; both are expressing a formed sensibility and experiencing it as free judgement. His sharpest line is that taste classifies, and classifies the classifier — when you judge someone's furniture, you are placing yourself.`,
        ],
      },
      {
        heading: "Field, capital, and why the game is not fair",
        body: [
          `Habitus does not operate in a vacuum but in fields — structured arenas with their own stakes, hierarchies and forms of capital. Art, academia, law and fashion are fields, each with a currency: not just economic capital but cultural capital (knowledge, credentials, the trained eye), social capital (connections), and symbolic capital (recognised prestige). Capital in one field converts imperfectly into others, which is why money cannot straightforwardly buy artistic standing.`,
          `The critical insight is that fields reward a specific habitus while presenting themselves as meritocratic. An elite institution selects for confidence, ease, and a way of speaking that reads as sophistication — dispositions instilled by upbringing rather than acquired by effort — and then calls the outcome talent. Those who possess the right habitus experience the field as natural and perform without strain; those who do not experience constant friction and are told it reflects their ability. The rules are genuinely applied equally, and the game is still rigged, because what the rules select for was distributed before anyone started playing.`,
        ],
      },
      {
        heading: "Symbolic violence and the limits",
        body: [
          `Bourdieu's bleakest concept is symbolic violence: domination that works because the dominated accept the categories by which they are ranked. It requires no coercion — the working-class student who concludes that university is not for people like them has enforced the hierarchy on themselves using its own standards, and experiences the conclusion as realism. This is why he thought hierarchy so durable: it does not need enforcing when everyone, including its victims, believes the ranking is about worth.`,
          `The framework has real problems. It is often accused of a determinism it denies — if habitus is durable and fields reward it, how does anyone move or anything change? Bourdieu's answer is hysteresis: habitus formed in one context can misfit a changed one, producing the friction that drives change. Critics find this thin. He is also accused of using an unfalsifiable apparatus that can absorb any outcome, and of a French specificity that travels badly to societies with different class formations. What survives regardless is the core mechanism: advantage transmits not only through money but through embodied disposition, and it is most effective precisely when everyone experiences it as personal quality.`,
        ],
      },
      {
        heading: "Why your taste is not your own",
        body: [
          `The uncomfortable exercise is to run Bourdieu on yourself. Your sense of what music is embarrassing, what food is pretentious, what clothes look try-hard, what accent sounds unintelligent — none of that feels sociological. It feels like discernment. Bourdieu's claim is that it is a class trajectory expressing itself and experiencing itself as taste, and that when you feel a flash of contempt for someone's preferences you are performing a social classification while believing you are exercising judgement. You can also feel the field logic directly: the room where you knew instinctively how to behave, and the room where you did not, and how the second felt like personal inadequacy rather than a mismatch of dispositions. That misreading — structure felt as personal quality — is the whole point.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "reasoning",
        prompt: "What problem was habitus designed to solve?",
        choices: [
          { id: "a", label: "Neither structuralism nor rational choice fits how people act" },
          { id: "b", label: "Structuralism could not account for the existence of social hierarchy" },
          { id: "c", label: "Rational choice theory could not be tested against survey evidence" },
          { id: "d", label: "Anthropology lacked a vocabulary for describing non-Western societies" },
        ],
        correctChoiceId: "a",
        explanation: "The puppet cannot improvise or change; the calculator cannot explain why choices cluster by class. Habitus relocates structure into the body as disposition, so people improvise freely and their improvisations are still structured.",
      },
      {
        dimension: "reasoning",
        prompt: "What did Distinction demonstrate about taste?",
        choices: [
          { id: "a", label: "It tracks class while feeling like the most personal thing about you" },
          { id: "b", label: "It is largely random once income and education are statistically controlled" },
          { id: "c", label: "It converges across classes as mass media spreads shared references" },
          { id: "d", label: "It is consciously adopted by people seeking to signal their social position" },
        ],
        correctChoiceId: "a",
        explanation: "Preferences in music, food, furniture and sport aligned with trajectory through social space with a precision no story about individual sensibility explains — and each respondent experienced those preferences as intimately their own.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does Bourdieu say taste 'classifies the classifier'?",
        choices: [
          { id: "a", label: "Judging someone else's preferences reveals and places your own position" },
          { id: "b", label: "Classification systems are imposed by institutions rather than individuals" },
          { id: "c", label: "Taste can be ranked objectively once its social origins are known" },
          { id: "d", label: "Only those with cultural capital are entitled to make aesthetic judgements" },
        ],
        correctChoiceId: "a",
        explanation: "When you judge someone's furniture as vulgar or their music as embarrassing, the judgement expresses your formed sensibility and thereby locates you in the same social space you are ranking them within.",
      },
      {
        dimension: "reasoning",
        prompt: "How can a field be genuinely meritocratic in its rules and still rigged?",
        choices: [
          { id: "a", label: "It rewards a habitus fixed in advance, then calls it talent" },
          { id: "b", label: "Judges within the field consciously favour candidates from their own background" },
          { id: "c", label: "The rules are applied inconsistently to candidates with different capital" },
          { id: "d", label: "Economic capital can be exchanged directly for success in any field" },
        ],
        correctChoiceId: "a",
        explanation: "Elite institutions select for confidence and ease — dispositions instilled by upbringing, not acquired by effort. The rules apply equally; what they select for was allocated beforehand, and those without it are told the friction reflects ability.",
      },
      {
        dimension: "depth",
        prompt: "What makes symbolic violence so effective?",
        choices: [
          { id: "a", label: "The dominated share the categories that rank them low, so no coercion is needed" },
          { id: "b", label: "It operates through legal institutions that appear neutral to outsiders" },
          { id: "c", label: "Its victims are unaware that any hierarchy exists in the first place" },
          { id: "d", label: "It is enforced by symbolic rather than physical penalties for non-compliance" },
        ],
        correctChoiceId: "a",
        explanation: "The student who concludes university is not for people like them has enforced the hierarchy on themselves using its own standards, and experiences it as realism. Hierarchy needs no enforcement when its victims believe the ranking measures worth.",
      },
    ],
    sources: [
      { label: "Habitus (sociology) (overview)", note: "Reference on Bourdieu's dispositions, field and capital.", type: "Reference", url: "https://en.wikipedia.org/wiki/Habitus_(sociology)" },
      { label: "Bourdieu, Distinction (overview)", note: "The empirical study linking taste to class trajectory.", type: "Reference", url: "https://en.wikipedia.org/wiki/Distinction_(book)" },
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
          { id: "a", label: "A large questionnaire administered to many people at once" },
          { id: "b", label: "Long immersive fieldwork among the people studied" },
          { id: "c", label: "A controlled experiment comparing two matched groups" },
          { id: "d", label: "Analysis of official statistics gathered by others" },
        ],
        correctChoiceId: "b",
        explanation: "Ethnography is defined by long-term immersion — living among people, often for a year or more — rather than surveys, experiments or distant statistical analysis.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is Malinowski's Trobriand fieldwork considered a turning point?",
        choices: [
          { id: "a", label: "He was the first to apply statistical sampling to fieldwork" },
          { id: "b", label: "He replaced armchair theory with first-hand fieldwork" },
          { id: "c", label: "He demonstrated that every culture shares one moral core" },
          { id: "d", label: "He worked entirely from missionary and colonial records" },
        ],
        correctChoiceId: "b",
        explanation: "Before Malinowski, much anthropology relied on second-hand reports. By living among the Trobrianders and learning their language, he made direct immersion the discipline's standard.",
      },
      {
        dimension: "depth",
        prompt: "What did Malinowski mean by grasping 'the native's point of view'?",
        choices: [
          { id: "a", label: "Cataloguing a culture's strangest customs for outsiders" },
          { id: "b", label: "Seeing why practices make sense from within" },
          { id: "c", label: "Persuading the community to reform its own practices" },
          { id: "d", label: "Recording behaviour without ever speaking to participants" },
        ],
        correctChoiceId: "b",
        explanation: "The goal is to reach the point where an unfamiliar practice becomes intelligible from the inside, not merely recorded from the outside as a curiosity.",
      },
      {
        dimension: "reasoning",
        prompt: "Why did the publication of Malinowski's field diaries push anthropology toward reflexivity?",
        choices: [
          { id: "a", label: "The researcher is a biased human who shapes the findings" },
          { id: "b", label: "They revealed he had never actually left the mission station" },
          { id: "c", label: "They demonstrated that fieldwork yields no reliable data" },
          { id: "d", label: "They exposed his findings as pure colonial invention" },
        ],
        correctChoiceId: "a",
        explanation: "The diaries exposed the gap between the sympathetic monograph and the irritated, prejudiced human writing it, forcing anthropologists to account for how the observer shapes what is observed.",
      },
      {
        dimension: "depth",
        prompt: "How has the scope of ethnography changed in modern anthropology?",
        choices: [
          { id: "a", label: "It is now confined to the study of vanished societies" },
          { id: "b", label: "It now covers offices, hospitals and online communities too" },
          { id: "c", label: "It has been replaced by large-scale statistical surveys" },
          { id: "d", label: "It is now restricted to laboratory-based observation" },
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
          { id: "a", label: "It asks you to join in and to stand back at once" },
          { id: "b", label: "It requires two researchers with opposing viewpoints at once" },
          { id: "c", label: "It bans the researcher from speaking to any participant" },
          { id: "d", label: "It depends entirely on documents rather than observation" },
        ],
        correctChoiceId: "a",
        explanation: "The method fuses participation (joining in) with observation (analytical distance). Each corrects the other: participation reveals hidden reality, observation keeps the analytical eye a full member would lose.",
      },
      {
        dimension: "depth",
        prompt: "What is 'rapport' in fieldwork?",
        choices: [
          { id: "a", label: "A formal written agreement signed with the community" },
          { id: "b", label: "The trust that lets people act naturally around you" },
          { id: "c", label: "A numerical score for the reliability of the data" },
          { id: "d", label: "The researcher's command of the local language" },
        ],
        correctChoiceId: "b",
        explanation: "Rapport is the relationship of trust that allows people to stop performing for the outsider and simply live. It cannot be rushed, which is one reason fieldwork takes so long.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is 'going native' a failure of the method rather than a success?",
        choices: [
          { id: "a", label: "The researcher loses the community's respect and trust" },
          { id: "b", label: "Full immersion dissolves the distance needed to explain it" },
          { id: "c", label: "It violates the formal ethics code governing fieldwork" },
          { id: "d", label: "It shows the researcher never truly took part at all" },
        ],
        correctChoiceId: "b",
        explanation: "Going native loses the observation half of participant observation: the fully absorbed convert can no longer analyse or explain the world they have joined, so the method collapses.",
      },
      {
        dimension: "reasoning",
        prompt: "Why are research ethics intrinsic to participant observation, not just an add-on?",
        choices: [
          { id: "a", label: "The inside view it grants can expose or harm people if misused" },
          { id: "b", label: "Ethical clearance is what speeds a project through review" },
          { id: "c", label: "The anthropologist is legally an employee of the community" },
          { id: "d", label: "Participants are paid a fixed wage for their cooperation" },
        ],
        correctChoiceId: "a",
        explanation: "The researcher is trusted with confidences and can alter the lives they study, then leave to publish. That power makes consent, anonymity and honesty part of doing the fieldwork well.",
      },
      {
        dimension: "depth",
        prompt: "What balance does a skilled participant observer try to maintain?",
        choices: [
          { id: "a", label: "Complete detachment from the community throughout" },
          { id: "b", label: "Total immersion with no records kept at all" },
          { id: "c", label: "Immersed to understand, detached to explain" },
          { id: "d", label: "Working solely from the community's official records" },
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
    concept: "Structural Violence",
    level: "University",
    summary: "harm with no perpetrator, and why it kills more people than the kind with one",
    estimatedMinutes: 9,
    deck: "We reserve the word violence for events with an assailant. Galtung's argument is that this is a category error with a body count: arrangements that predictably shorten lives are doing the same work as an attacker, and the only difference is that no one has to swing. The concept is uncomfortable precisely because it removes the culprit and leaves the corpse.",
    keyTerms: [
      { label: "Structural violence", value: "Avoidable harm built into social arrangements, with no identifiable actor inflicting it." },
      { label: "The avoidability criterion", value: "Galtung's test: harm counts as violence if the means to prevent it exist and are not applied." },
      { label: "Erasure", value: "The way structural harm becomes invisible by appearing as misfortune, nature or personal failure." },
      { label: "Paul Farmer", value: "The physician-anthropologist who applied the concept to global health and clinical practice." },
    ],
    sections: [
      {
        heading: "Redefining violence by its effects",
        body: [
          `Johan Galtung's 1969 move was to define violence by what it does rather than who does it. Violence, he proposed, is present when human beings are influenced so that their actual realisation falls below their potential realisation — and crucially, when the gap is avoidable. If someone dies of tuberculosis in 1600, that is tragedy: no one could have prevented it. If someone dies of tuberculosis today, when the drugs exist and cost little, the gap between actual and possible is not fate but an outcome of how resources are arranged. Something is producing that death.`,
          `The avoidability criterion is what gives the concept teeth. It is not a claim that all suffering is violence, which would be sentimental and useless; it is a claim that suffering which existing means could prevent is being permitted, and that permitting is a form of doing. Galtung's contrast is with "personal" or direct violence, where an actor harms a victim. Structural violence has the same output — shortened lives, thwarted capacities — with the actor dissolved into arrangements. Nobody pulls a trigger, and the mortality is real.`,
        ],
      },
      {
        heading: "Why it hides",
        body: [
          `Structural violence is far harder to see than the direct kind, and Galtung thought this was intrinsic rather than incidental. Direct violence is an event: it has a time, a place, a perpetrator, and it makes news. Structural violence is a background condition — it is static, it looks like the way things are, and it produces its deaths diffusely across statistics rather than dramatically in one place. A murder is a story; a fifteen-year gap in life expectancy between postcodes is a fact about the world that nobody did.`,
          `It also disguises itself through explanation. Because there is no perpetrator, the harm gets attributed elsewhere: to nature ("some places are poor"), to misfortune ("he was unlucky with his health"), or most powerfully to the victim ("she made bad choices"). Each of these is available, each is partly true at the individual level, and each dissolves the pattern. This is the erasure Galtung and later Farmer emphasise — the concept's whole purpose is to make visible a causal structure that our habit of looking for culprits reliably renders invisible.`,
        ],
      },
      {
        heading: "Farmer and the clinic",
        body: [
          `Paul Farmer took the concept from peace studies into medicine, and made it concrete. Treating tuberculosis and HIV in Haiti, he confronted a pattern every clinician recognises: patients who "fail to comply" with treatment. The standard framing makes this a behavioural problem — education, adherence support, perhaps character. Farmer's argument was that non-compliance is usually a diagnosis of the patient's circumstances rather than their motivation: someone who cannot afford transport to the clinic, or cannot take a drug that must be swallowed with food they do not have, is not choosing to be ill.`,
          `His term for the analytical error is instructive: "immodest claims of causality" — the tendency to explain outcomes by proximate individual behaviour while ignoring the structure that constrained the behaviour. It matters clinically because the two framings prescribe differently. If the problem is knowledge, you educate. If the problem is that treatment is unaffordable and the patient is hungry, education is a way of not helping while appearing to. Farmer's programmes accordingly provided food, transport and cash alongside drugs, and adherence rates rose to levels the behavioural framing said were unachievable in that setting.`,
        ],
      },
      {
        heading: "The objections worth taking seriously",
        body: [
          `The concept attracts real criticism. The strongest is conceptual inflation: if arrangements that shorten lives are violence, the word stretches to cover most of the world's suffering and loses its force — and a word that describes everything discriminates nothing. Critics also argue that removing the perpetrator removes responsibility rather than distributing it, so structural violence can become a way of condemning a situation while identifying no one who could act and nothing they should do.`,
          `The more serious version is about causation. Attributing a death to "structure" is not an explanation until you specify a mechanism — which policy, which allocation, whose decision. Without that, the concept can substitute a moral posture for analysis, and it is not falsifiable in any useful sense. The defence is that the criticism is a demand for rigour rather than a refutation: Farmer's work is compelling precisely because it names mechanisms and shows what changes when you intervene on them. Used with that discipline the concept does real work; used as an atmosphere it does none.`,
        ],
      },
      {
        heading: "Why 'bad choices' is usually a diagnosis of circumstances",
        body: [
          `The habit worth taking is Farmer's. When someone's poor outcome gets explained by their behaviour — they did not attend, did not comply, did not apply, did not save — the explanation is almost always true at the surface and almost always incomplete. The question that opens it up is what the choice set actually looked like: what would this person have had to overcome for the sensible action to be available, and would you have overcome it? Notice too that the individual framing is not neutral. It is comfortable, because it locates the problem in someone who is not you and requires nothing structural to change. That comfort is why it is the default, and noticing the pull of it is most of the work.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "reasoning",
        prompt: "What does Galtung's avoidability criterion establish?",
        choices: [
          { id: "a", label: "Harm counts as violence when the means to prevent it exist and are not applied" },
          { id: "b", label: "All human suffering constitutes violence regardless of whether it is preventable" },
          { id: "c", label: "Violence requires an identifiable actor who could have chosen otherwise" },
          { id: "d", label: "Only harm inflicted by state institutions qualifies as structural" },
        ],
        correctChoiceId: "a",
        explanation: "Tuberculosis in 1600 is tragedy; tuberculosis today, when the drugs exist and cost little, is a gap between actual and possible that arrangements produce. The criterion prevents the concept collapsing into 'all suffering'.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is structural violence intrinsically harder to see than direct violence?",
        choices: [
          { id: "a", label: "A static background producing deaths across statistics" },
          { id: "b", label: "Its victims are usually unaware that they have been harmed at all" },
          { id: "c", label: "Governments deliberately suppress the data that would reveal it" },
          { id: "d", label: "It occurs only in societies without functioning news media" },
        ],
        correctChoiceId: "a",
        explanation: "A murder has a time, a place and a perpetrator, and makes news. A fifteen-year life expectancy gap between postcodes is a fact about the world that nobody did — no event, no culprit, no story.",
      },
      {
        dimension: "reasoning",
        prompt: "How does attributing harm to the victim erase structural violence?",
        choices: [
          { id: "a", label: "Partly true individually, it dissolves the pattern" },
          { id: "b", label: "It transfers legal liability from institutions to individuals" },
          { id: "c", label: "It is demonstrably false and so discredits the whole analysis" },
          { id: "d", label: "It applies only where victims had genuine alternatives available" },
        ],
        correctChoiceId: "a",
        explanation: "'She made bad choices' is available, partly accurate at the individual level, and dissolves the causal structure. Our habit of looking for culprits reliably renders the pattern invisible — which is what the concept exists to counter.",
      },
      {
        dimension: "reasoning",
        prompt: "What did Farmer mean by 'immodest claims of causality'?",
        choices: [
          { id: "a", label: "Blaming proximate behaviour, ignoring the structure" },
          { id: "b", label: "Asserting that structural forces determine health outcomes entirely" },
          { id: "c", label: "Claiming clinical interventions work without randomised evidence" },
          { id: "d", label: "Attributing disease to pathogens rather than to social conditions" },
        ],
        correctChoiceId: "a",
        explanation: "The framing matters clinically: if non-compliance reflects ignorance you educate, but if the patient cannot afford transport or must take a drug with food they lack, education is a way of not helping while appearing to.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the strongest objection to the concept?",
        choices: [
          { id: "a", label: "Naming no mechanism, it swaps analysis for posture" },
          { id: "b", label: "It exaggerates mortality figures beyond what epidemiology supports" },
          { id: "c", label: "It applies only in low-income settings and not in wealthy societies" },
          { id: "d", label: "It has been superseded by more precise measures of health inequality" },
        ],
        correctChoiceId: "a",
        explanation: "Attributing a death to 'structure' explains nothing until you specify which policy, which allocation, whose decision. Farmer's work is compelling because it names mechanisms and shows what changes when you intervene on them.",
      },
    ],
    sources: [
      { label: "Structural violence (overview)", note: "Reference on Galtung's definition and its applications.", type: "Reference", url: "https://en.wikipedia.org/wiki/Structural_violence" },
      { label: "Paul Farmer, Pathologies of Power (overview)", note: "The application of structural violence to global health and clinical practice.", type: "Reference", url: "https://en.wikipedia.org/wiki/Paul_Farmer" },
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
          { id: "a", label: "As the empty repetition of inherited custom" },
          { id: "b", label: "Symbolic action that shifts status or binds a group" },
          { id: "c", label: "As private behaviour that carries no wider social effect" },
          { id: "d", label: "As diversion that serves no real social purpose" },
        ],
        correctChoiceId: "b",
        explanation: "Ritual is repeated, formal, symbolic action that does social work — transforming a person's status or generating group cohesion. Its formality is what makes the change count as official.",
      },
      {
        dimension: "depth",
        prompt: "What are the three stages of van Gennep's rite of passage, in order?",
        choices: [
          { id: "a", label: "Separation, transition (liminal), reincorporation" },
          { id: "b", label: "The stages of birth, marriage and death" },
          { id: "c", label: "The phases of observation, participation and analysis" },
          { id: "d", label: "The movement from past through present to future" },
        ],
        correctChoiceId: "a",
        explanation: "Van Gennep identified separation from the old status, a liminal in-between transition, and reincorporation into society with a new status — a shape shared by graduations, weddings and initiations.",
      },
      {
        dimension: "reasoning",
        prompt: "Why did Turner call people in the liminal phase 'betwixt and between'?",
        choices: [
          { id: "a", label: "Because they stand physically between two territories" },
          { id: "b", label: "They have left the old status, not yet gained the new" },
          { id: "c", label: "Because they remain unconscious throughout the ritual" },
          { id: "d", label: "Because they have withdrawn from the ceremony entirely" },
        ],
        correctChoiceId: "b",
        explanation: "In the liminal phase a person is stripped of their former identity and not yet granted the new one — socially, temporarily 'nobody', which is why the stage feels so disorienting.",
      },
      {
        dimension: "reasoning",
        prompt: "What is 'communitas', and when does Turner say it arises?",
        choices: [
          { id: "a", label: "The formal social hierarchy, as expressed in daily life" },
          { id: "b", label: "An intense bond among equals in the liminal phase" },
          { id: "c", label: "The valuables handed over during the ceremony" },
          { id: "d", label: "The codified rules that govern a ceremony" },
        ],
        correctChoiceId: "b",
        explanation: "Communitas is the raw equality and solidarity felt by people levelled to the same status in the liminal phase together — the closeness of those who went through the threshold side by side.",
      },
      {
        dimension: "depth",
        prompt: "What did Durkheim mean by 'collective effervescence'?",
        choices: [
          { id: "a", label: "Shared energy when a group acts as one" },
          { id: "b", label: "The tedium that sets in during long ceremonies" },
          { id: "c", label: "A physical substance consumed during rituals" },
          { id: "d", label: "The private religious doubt felt by an individual" },
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
          { id: "a", label: "The claim that all cultures share one morality" },
          { id: "b", label: "Ranking societies from primitive to civilised" },
          { id: "c", label: "The claim that fieldwork is essential to the discipline" },
          { id: "d", label: "The claim that a language determines its speakers' thought" },
        ],
        correctChoiceId: "b",
        explanation: "Boas rejected the idea that cultures climb one universal ladder with the West on top, arguing instead that each culture is a product of its own history and must be understood in its own context.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is methodological relativism considered good scientific practice?",
        choices: [
          { id: "a", label: "It shows every culture to be superior to the West" },
          { id: "b", label: "Suspending judgement reveals a practice's local logic" },
          { id: "c", label: "It bars the researcher from studying other cultures" },
          { id: "d", label: "It produces an accurate ranking of the world's cultures" },
        ],
        correctChoiceId: "b",
        explanation: "Recoiling in disgust reveals your own culture, not theirs. Bracketing your reactions is what allows you to understand why a practice makes sense within its own system.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the troubling consequence of strong moral relativism?",
        choices: [
          { id: "a", label: "It makes cultures far simpler to compare directly" },
          { id: "b", label: "Even slavery or genocide could not be judged from outside" },
          { id: "c", label: "It compels every society to adopt Western values" },
          { id: "d", label: "It shows morality to be rooted in human biology" },
        ],
        correctChoiceId: "b",
        explanation: "If there is no standard beyond culture, then no outside criticism of any practice is legitimate — a conclusion that would rule out condemning slavery or genocide, which almost no one accepts.",
      },
      {
        dimension: "depth",
        prompt: "How does the fact that Boas campaigned against racism relate to relativism?",
        choices: [
          { id: "a", label: "Context need not mean dropping all judgement" },
          { id: "b", label: "It reveals that he privately rejected relativism" },
          { id: "c", label: "It proves relativism means accepting every practice" },
          { id: "d", label: "It bears no relation to his anthropological work" },
        ],
        correctChoiceId: "a",
        explanation: "Boas combined methodological relativism with fierce moral commitment against racism, demonstrating that understanding a culture in context is compatible with holding firm ethical judgements.",
      },
      {
        dimension: "depth",
        prompt: "What is the mature anthropological position on cultural relativism today?",
        choices: [
          { id: "a", label: "That anything goes and no practice may be judged" },
          { id: "b", label: "Understand deeply, resist arrogance, still judge" },
          { id: "c", label: "That Western values are the correct standard" },
          { id: "d", label: "That cultures should be ranked on scientific criteria" },
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
    concept: "Actor-Network Theory",
    level: "University",
    summary: "the claim that objects are participants in social life, not its scenery",
    estimatedMinutes: 9,
    deck: "Social science explains things by appealing to society — power, class, norms. Latour's provocation is that this explains nothing, because society is not a cause but an effect: the thing to be explained. And when you ask what actually holds a group together, the answer keeps turning out to include doors, keys, speed bumps and paperwork.",
    keyTerms: [
      { label: "Actor-network theory", value: "An approach treating both humans and non-humans as actors whose associations constitute the social." },
      { label: "Generalised symmetry", value: "The methodological rule to describe humans and objects in the same terms, granting neither explanatory priority." },
      { label: "Delegation", value: "Shifting a social obligation into an object, which then enforces it without anyone's attention." },
      { label: "Blackboxing", value: "The process by which a working assemblage becomes invisible and is treated as a single thing." },
    ],
    sections: [
      {
        heading: "Society as the thing to be explained",
        body: [
          `Standard sociological explanation runs: this happened because of power, or class, or norms — invoking society as the underlying cause of observable behaviour. Latour's objection is that this reverses the direction of inquiry. Society is not a hidden force operating behind events; it is the precarious result of associations that have to be continuously assembled and can fall apart. Explaining a phenomenon by "the social" is therefore explaining it by the very thing you were supposed to account for.`,
          `Actor-network theory's alternative is deflationary and demanding: stop explaining and start tracing. Follow the actors, describe the associations, and do not import a hidden structure to do the work. The reward is that once you stop assuming society exists behind the scenes, you notice what is actually holding things together — and a startling amount of it is not human. The office runs on keycards and filing systems; the laboratory's authority rests on instruments; the state's reach depends on forms, registers and roads. These are not the setting in which social life happens; they are load-bearing.`,
        ],
      },
      {
        heading: "Symmetry, and the objection it invites",
        body: [
          `The principle that generates most of the controversy is generalised symmetry: describe humans and non-humans in the same vocabulary, and do not decide in advance that only people can act. An "actant" is anything that makes a difference to an outcome. A speed bump reduces traffic speed; so does a policeman; so does a sign. All three are doing the same job, and Latour's point is that a framework which counts only the policeman as social is missing most of what produces the outcome.`,
          `The obvious objection is that this is absurd — a speed bump has no intentions, so calling it an actor either equivocates or attributes agency to concrete. Latour's reply is that symmetry is methodological rather than metaphysical: he is not claiming the bump wants anything, but insisting that if you want to explain why cars slow down, starting from the assumption that only intentional beings matter will make you miss the bump. Whether this reply fully works is genuinely contested, and critics argue the concept of agency gets stretched until it stops discriminating. But the methodological payoff is real: it forces you to look at what you would otherwise treat as background.`,
        ],
      },
      {
        heading: "Delegation, or how morality gets built into things",
        body: [
          `The most useful idea in the framework is delegation. Latour's example is a door: you want it shut, and you have two options. Discipline humans — post a sign, exhort, remind, sanction the ones who forget — which is expensive, needs constant maintenance, and fails. Or hire a door-closer: a spring that shuts the door whether anyone remembers or not. The social obligation has been delegated into a device, and the obligation now enforces itself, silently, forever, without a single person being persuaded of anything.`,
          `Once you see this, it is everywhere and it is political. A speed bump is a moral injunction — drive slowly near the school — cast in asphalt, and unlike a law it needs no enforcement, cannot be argued with, and does not care about your reasons. Turnstiles delegate ticket inspection; automatic locks delegate trust; the layout of a hospital delegates hygiene. The design decision and the political decision are the same decision, made once and then rendered invisible. This is why "it's just how the system works" is so often a political claim wearing technical clothes: somebody chose which obligations to build in, and the building-in is what makes them stop looking like choices.`,
        ],
      },
      {
        heading: "Blackboxing, and where the theory strains",
        body: [
          `Blackboxing names the second move: when an assemblage works reliably, it collapses into a single thing that nobody thinks about. You do not experience your phone as a network of supply chains, standards bodies, patents and rare earth mining; you experience it as a phone. Latour's observation is that this is what success looks like — a functioning network becomes invisible — and that the box only reopens when something breaks. Which is why controversy and failure are the researcher's opportunity: a broken network reveals its own contents.`,
          `The theory's limitations are real. Critics note it is superb at description and weak at explanation: tracing associations tells you how something is assembled, not why this assemblage rather than another, and it has notably little to say about power and inequality — the flattening that makes symmetry possible also removes the vocabulary for saying some actors have vastly more capacity than others. Latour would say power is an effect to be traced rather than a cause to be invoked, which is consistent but leaves the analyst with nothing to say about domination that a critical theorist would recognise. Taken as one method among several it is illuminating; taken as a total framework it is thin where it matters most.`,
        ],
      },
      {
        heading: "The politics built into the speed bump",
        body: [
          `The transferable habit is to look at what has been delegated. Every environment you move through contains obligations that someone converted into objects so they would enforce themselves: the barrier that makes fare-dodging impossible rather than forbidden, the form that cannot be submitted without the field you would have skipped, the default setting that decides what almost everyone does. These are decisions, made once by someone, and then made invisible by working. When something feels like just how things are, that is usually the tell — a functioning network has closed over a choice. Asking who delegated what, and what they would have had to persuade you of if they had not built it into the furniture, is a genuinely sharp way to see the politics in a room.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "reasoning",
        prompt: "What is Latour's objection to explaining events by 'the social'?",
        choices: [
          { id: "a", label: "Society is the effect of associations, so it explains nothing" },
          { id: "b", label: "Social forces cannot be measured with sufficient precision to support inference" },
          { id: "c", label: "Sociology has historically ignored the role of individual intentions" },
          { id: "d", label: "Society exists only in societies with formal political institutions" },
        ],
        correctChoiceId: "a",
        explanation: "Society is not a hidden force behind events but the result of associations that must be continuously assembled and can fall apart. So the alternative is to stop explaining and start tracing what actually holds things together.",
      },
      {
        dimension: "depth",
        prompt: "What does generalised symmetry require of the analyst?",
        choices: [
          { id: "a", label: "Describing humans and non-humans in the same terms" },
          { id: "b", label: "Treating all human actors as equally powerful within a network" },
          { id: "c", label: "Assuming objects possess intentions comparable to those of people" },
          { id: "d", label: "Weighting each actor's contribution by its measurable physical effect" },
        ],
        correctChoiceId: "a",
        explanation: "An actant is anything that makes a difference. The bump, the policeman and the sign all slow traffic — a framework counting only the policeman as social misses most of what produces the outcome.",
      },
      {
        dimension: "reasoning",
        prompt: "How does Latour answer the charge that speed bumps cannot be actors?",
        choices: [
          { id: "a", label: "Symmetry is methodological — it stops you overlooking causes" },
          { id: "b", label: "Objects do possess a form of intention distributed through their material structure" },
          { id: "c", label: "The charge is conceded, and non-humans are treated as passive intermediaries" },
          { id: "d", label: "Agency is defined by physical causation, so any object exerting force is an actor" },
        ],
        correctChoiceId: "a",
        explanation: "He is not claiming the bump wants anything, but that assuming only intentional beings matter guarantees you miss it. Whether the reply fully works is contested — critics say agency gets stretched until it stops discriminating.",
      },
      {
        dimension: "reasoning",
        prompt: "What makes delegation politically significant?",
        choices: [
          { id: "a", label: "An obligation built into a device enforces itself" },
          { id: "b", label: "Delegating tasks to objects removes employment from human workers" },
          { id: "c", label: "Devices enforce rules less reliably than human supervisors do" },
          { id: "d", label: "Delegation requires legislation before it can be implemented publicly" },
        ],
        correctChoiceId: "a",
        explanation: "A speed bump is a moral injunction cast in asphalt: it needs no enforcement, cannot be argued with, and ignores your reasons. Someone chose which obligations to build in, and building them in is what makes them stop looking like decisions.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the principal limitation critics identify in the theory?",
        choices: [
          { id: "a", label: "The flattening removes the words for power and inequality" },
          { id: "b", label: "It cannot describe networks containing more than a few dozen actors" },
          { id: "c", label: "It applies only to scientific laboratories and not to wider social settings" },
          { id: "d", label: "It relies on interviews, which cannot capture the role of objects" },
        ],
        correctChoiceId: "a",
        explanation: "It is superb at description and weak at explanation: tracing tells you how something is assembled, not why this assemblage. Treating power as an effect to be traced is consistent, but leaves little to say about domination.",
      },
    ],
    sources: [
      { label: "Actor–network theory (overview)", note: "Reference on Latour, symmetry, delegation and blackboxing.", type: "Reference", url: "https://en.wikipedia.org/wiki/Actor%E2%80%93network_theory" },
      { label: "Latour, Reassembling the Social (overview)", note: "The statement of ANT as an alternative to sociological explanation.", type: "Reference", url: "https://en.wikipedia.org/wiki/Bruno_Latour" },
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
          { id: "a", label: "A condition of unusually elevated social status" },
          { id: "b", label: "A threshold between one identity and another" },
          { id: "c", label: "The concluding phase of a ritual sequence" },
          { id: "d", label: "A binding legal agreement between parties" },
        ],
        correctChoiceId: "b",
        explanation: "From the Latin limen ('threshold'), liminality is the 'betwixt and between' state in which an old identity has been shed but the new one not yet taken on.",
      },
      {
        dimension: "reasoning",
        prompt: "Why did Turner see the disorientation of the liminal phase as the mechanism of a rite, not a flaw?",
        choices: [
          { id: "a", label: "Confusion is what makes the ritual more engaging" },
          { id: "b", label: "The old self is dismantled before a new one forms" },
          { id: "c", label: "Initiates find the disorientation pleasurable" },
          { id: "d", label: "The disorientation lowers the ritual's cost" },
        ],
        correctChoiceId: "b",
        explanation: "Suspending a person's identity is what makes it possible to change it. The liminal phase is the 'workshop' where the old self is taken apart so the new status can be assembled.",
      },
      {
        dimension: "reasoning",
        prompt: "How does communitas relate to the liminal phase?",
        choices: [
          { id: "a", label: "It is the social hierarchy that liminality restores" },
          { id: "b", label: "Intense equality when all are stripped to one rank" },
          { id: "c", label: "It is the payment required to enter the ritual" },
          { id: "d", label: "It is the restoring of ordinary social structure" },
        ],
        correctChoiceId: "b",
        explanation: "Because liminality levels everyone to the same bare status, it produces communitas — a spontaneous, intense bond of equality that everyday hierarchy suppresses.",
      },
      {
        dimension: "depth",
        prompt: "What did Turner mean by 'liminoid' phenomena in modern society?",
        choices: [
          { id: "a", label: "Obligatory initiation rites imposed by a tribe" },
          { id: "b", label: "Chosen liminal-like leisure, such as festivals" },
          { id: "c", label: "Ordinary economic transactions and nothing more" },
          { id: "d", label: "Experiences bearing no relation to the liminal at all" },
        ],
        correctChoiceId: "b",
        explanation: "Turner distinguished the compulsory, transformative liminality of ritual from 'liminoid' experiences — leisure activities like theatre, festivals and sport that we opt into voluntarily.",
      },
      {
        dimension: "depth",
        prompt: "Why has 'liminality' been applied to places like airports and to periods like adolescence?",
        choices: [
          { id: "a", label: "Because they are inherently dangerous places" },
          { id: "b", label: "Zones of unsettled identity between settled states" },
          { id: "c", label: "Because they carry no cultural significance at all" },
          { id: "d", label: "Because they represent a permanent fixed state" },
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
          { id: "a", label: "That gifts are given freely and carry no obligation" },
          { id: "b", label: "A gift obliges reciprocity, binding both parties" },
          { id: "c", label: "That gift exchange arises only in modern economies" },
          { id: "d", label: "That money is the earliest known form of exchange" },
        ],
        correctChoiceId: "b",
        explanation: "Mauss argued that a gift is never fully separated from the giver and so compels a return, opening an ongoing bond — unlike a market sale, which ends when money changes hands.",
      },
      {
        dimension: "depth",
        prompt: "What are Mauss's three obligations in gift exchange?",
        choices: [
          { id: "a", label: "To give, to receive and to reciprocate" },
          { id: "b", label: "The duties to buy, to sell and to profit" },
          { id: "c", label: "The duties to save, to invest and to spend" },
          { id: "d", label: "The duties to take, to keep and to hoard" },
        ],
        correctChoiceId: "a",
        explanation: "Gift systems rest on the obligation to give (refusing signals hostility), to receive (refusing insults the relationship) and to reciprocate (returning something in due course).",
      },
      {
        dimension: "reasoning",
        prompt: "Economically, the Kula ring makes nobody richer. Why does it matter?",
        choices: [
          { id: "a", label: "Because the shells hold great hidden market value" },
          { id: "b", label: "Circulating valuables builds alliances between islands" },
          { id: "c", label: "Because it supplants all other trade between islands" },
          { id: "d", label: "Because the valuables are consumed in the end" },
        ],
        correctChoiceId: "b",
        explanation: "The endlessly circulating valuables were the visible thread of an invisible web of relationships, maintaining alliances and prestige and providing a safe framework for ordinary trade — exchange as diplomacy.",
      },
      {
        dimension: "reasoning",
        prompt: "What does the potlatch reveal about the power hidden in gifts?",
        choices: [
          { id: "a", label: "That gift-giving is always wholly selfless" },
          { id: "b", label: "An unrepayable gift humiliates, so giving is a weapon" },
          { id: "c", label: "That gifts leave the receiver's status untouched" },
          { id: "d", label: "That the destruction of wealth is economically rational" },
        ],
        correctChoiceId: "b",
        explanation: "In the potlatch, chiefs won prestige by giving away or destroying wealth, and a gift too large to repay humiliated a rival — showing that placing someone in your debt can be a form of domination.",
      },
      {
        dimension: "depth",
        prompt: "Why does exactly and instantly repaying a gift feel cold?",
        choices: [
          { id: "a", label: "It cancels the debt and closes the bond" },
          { id: "b", label: "Because exact repayment is never actually possible" },
          { id: "c", label: "Because a gift is meant never to be repaid" },
          { id: "d", label: "Because instant repayment raises the giver's profit" },
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
          { id: "a", label: "The emic view is written and the etic view is spoken" },
          { id: "b", label: "Emic uses insiders' terms; etic the analyst's" },
          { id: "c", label: "The emic account is true and the etic account false" },
          { id: "d", label: "They are simply two labels for one single perspective" },
        ],
        correctChoiceId: "b",
        explanation: "An emic account uses the insiders' own categories and meanings; an etic account uses the analyst's framework, often for cross-cultural comparison. Both are valid lenses answering different questions.",
      },
      {
        dimension: "depth",
        prompt: "Where did Kenneth Pike derive the terms 'emic' and 'etic'?",
        choices: [
          { id: "a", label: "From the words 'ethics' and 'economics'" },
          { id: "b", label: "From the linguistic terms 'phonemic' and 'phonetic'" },
          { id: "c", label: "From the surnames of two founding anthropologists" },
          { id: "d", label: "From the Latin roots for inside and outside" },
        ],
        correctChoiceId: "b",
        explanation: "Pike clipped 'phonemic' (sound distinctions meaningful within a language) and 'phonetic' (all sounds analysed from outside) to create emic and etic, generalising them to culture.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the risk of relying only on an emic account?",
        choices: [
          { id: "a", label: "It forces foreign categories onto the culture studied" },
          { id: "b", label: "It echoes belief and misses hidden patterns" },
          { id: "c", label: "It is inevitably more objective than any rival account" },
          { id: "d", label: "It cannot be written down or recorded at all" },
        ],
        correctChoiceId: "b",
        explanation: "An emic-only account risks echoing people's self-understanding while missing functions they don't articulate — like the economic alliances a marriage custom quietly cements.",
      },
      {
        dimension: "reasoning",
        prompt: "Why do reflexive anthropologists warn against treating the etic view as purely neutral?",
        choices: [
          { id: "a", label: "Because an outsider can never learn anything real" },
          { id: "b", label: "Etic categories smuggle in their own assumptions" },
          { id: "c", label: "Because the insider account is always the correct one" },
          { id: "d", label: "Because comparing across cultures is simply impossible" },
        ],
        correctChoiceId: "b",
        explanation: "The analyst's 'objective' framework is usually a Western academic one, carrying its own assumptions about rationality or economics. The etic is a perspective too, not a view from nowhere.",
      },
      {
        dimension: "depth",
        prompt: "Why does strong anthropology use both emic and etic together?",
        choices: [
          { id: "a", label: "The emic keeps it faithful, the etic analytical" },
          { id: "b", label: "Because combining two methods is simply quicker" },
          { id: "c", label: "Because insiders and outsiders always end up agreeing" },
          { id: "d", label: "Because one of the two is invariably set aside" },
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
