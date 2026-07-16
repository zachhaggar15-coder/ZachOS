import { buildAuthoredLessons, type AuthoredLesson } from "./types";

// Ten hand-written Social Engineering lessons, written from a defensive,
// security-awareness angle: how manipulation and social-engineering attacks
// work so you can recognise and resist them. Each closes on an everyday example,
// with genuine recall quizzes.
const socialEngineering: AuthoredLesson[] = [
  {
    concept: "Influence",
    level: "GCSE",
    summary: "changing attitudes or behaviour through social and psychological cues",
    estimatedMinutes: 7,
    deck: "Much of the time we don't weigh decisions carefully — we run on mental shortcuts that the right cue can trigger automatically. Learning the principles of influence is not about manipulating others; it's about noticing when your own psychological buttons are being pushed, so you're persuaded by good reasons rather than by triggers.",
    keyTerms: [
      { label: "Influence", value: "Changing attitudes or behaviour through social and psychological cues, often automatically." },
      { label: "Mental shortcuts", value: "Automatic rules of thumb that guide behaviour without deliberate thought." },
      { label: "Cialdini's principles", value: "Reciprocity, authority, scarcity, social proof, commitment and liking — key levers of influence." },
      { label: "Compliance", value: "Agreeing to a request, which these principles are used to increase." },
    ],
    sections: [
      {
        heading: "The automatic side of behaviour",
        body: [
          `The psychologist Robert Cialdini, studying the techniques of salespeople and fundraisers, found that much human behaviour runs on mental shortcuts — automatic rules of thumb that let us respond quickly without deliberating. These shortcuts are usually helpful, but they can be triggered deliberately by someone who knows how they work.`,
          `Cialdini likened it to a "click, whirr" response, like a recording playing: the right cue triggers a predictable behaviour. Hear "expensive" and we assume "good quality"; see something scarce and we want it more. That efficiency is the point — but it also means our behaviour can be steered by whoever pushes the right buttons, which is why knowing the principles is mainly a defence.`,
        ],
      },
      {
        heading: "The core principles",
        body: [
          `Cialdini identified a handful of levers, each exploiting a normally useful shortcut. Reciprocity: we feel obliged to return favours. Authority: we defer to apparent experts and officials. Scarcity: we value what seems limited. Social proof: we copy what others are doing. Commitment and consistency: once we commit, we feel pressure to act consistently. Liking: we are more easily persuaded by people we like.`,
          `Each shortcut is usually sensible — reciprocating, respecting real experts, valuing genuinely scarce things. The danger is that each can be triggered artificially, cut loose from the reality that would normally justify it: a manufactured scarcity, a fake authority, a manipulative gift, a false impression that "everyone's doing it." Naming the principle at work is the first step to responding to the substance instead of the trigger.`,
        ],
      },
      {
        heading: "Why the shortcuts persist",
        body: [
          `You might think that once these shortcuts can be exploited, we would stop using them — but we cannot, and should not. Modern life presents far too many decisions to analyse each one fully; the shortcuts let us navigate a complex world, and most of the time they serve us well. The vulnerability is the price of the efficiency.`,
          `So the defence is not to abandon the shortcuts but to notice when they are being deliberately triggered, especially in ways disconnected from reality. The skill is to catch the feeling of automatic compliance — the pull to say yes, defer, or grab a scarce item — and insert a moment of thought: is this authority genuinely relevant? Is this scarcity real? Is this gift creating a real obligation or a manufactured one?`,
        ],
      },
      {
        heading: "Influence, persuasion and manipulation",
        body: [
          `Influence itself is neutral and unavoidable — all communication influences, and using these principles honestly is simply effective communication. Highlighting a genuine expert's credentials, a real limited stock, or the true fact that others endorse a product is honest persuasion.`,
          `The principles become manipulation when the cues are false: the authority is fake, the scarcity manufactured, the social proof fabricated, the gift a calculated tool to obligate you. The line is not the technique but its honesty. Ethical influence works with true information and leaves you free to decide on the merits; manipulation uses false cues to steer you toward choices you would not make with full awareness.`,
        ],
      },
      {
        heading: "Noticing the button being pushed",
        body: [
          `You are influenced through these shortcuts every day — by advertisers, salespeople, apps and sometimes scammers. The free sample that makes you feel you should buy (reciprocity), the "expert recommended" label (authority), the "only 2 left" counter (scarcity), the "bestseller" tag (social proof) are all deliberate triggers. The valuable habit is not cynicism but awareness of the moment: when you feel a strong automatic pull to comply, treat that feeling itself as the cue to pause and ask whether the trigger reflects something real. Learning the principles is learning to feel your own levers being pulled.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "According to Cialdini, why does much influence work automatically?",
        choices: [
          { id: "a", label: "Because people run on mental shortcuts that can be triggered by the right cues, without deliberate thought" },
          { id: "b", label: "Because people always analyse every decision carefully" },
          { id: "c", label: "Because influence never affects behaviour" },
          { id: "d", label: "Because people have no automatic responses" },
        ],
        correctChoiceId: "a",
        explanation: "Cialdini found much behaviour runs on automatic 'click, whirr' shortcuts — usually helpful rules of thumb — that can be triggered deliberately, so understanding them is mainly a defence against being steered.",
      },
      {
        dimension: "depth",
        prompt: "Which of these is one of Cialdini's core principles of influence?",
        choices: [
          { id: "a", label: "Reciprocity — the pressure to return favours" },
          { id: "b", label: "Photosynthesis" },
          { id: "c", label: "Inflation" },
          { id: "d", label: "Gravity" },
        ],
        correctChoiceId: "a",
        explanation: "Cialdini's principles include reciprocity, authority, scarcity, social proof, commitment and consistency, and liking — each exploiting a normally useful mental shortcut that can be triggered to increase compliance.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can't we simply abandon the mental shortcuts that make us vulnerable to influence?",
        choices: [
          { id: "a", label: "Because they let us navigate too many decisions efficiently; we would be paralysed deliberating over every choice" },
          { id: "b", label: "Because they are never useful" },
          { id: "c", label: "Because everyone else uses them" },
          { id: "d", label: "Because they cannot be triggered" },
        ],
        correctChoiceId: "a",
        explanation: "The shortcuts are genuinely necessary given the volume of decisions we face, and usually serve us well; the vulnerability is the price of the efficiency, so the defence is recognising when they are triggered rather than abandoning them.",
      },
      {
        dimension: "reasoning",
        prompt: "What distinguishes ethical influence from manipulation, using these principles?",
        choices: [
          { id: "a", label: "Whether the cues are honest and connected to reality, leaving the person free to decide on the merits" },
          { id: "b", label: "Whether any principle is used at all" },
          { id: "c", label: "Whether the message is long or short" },
          { id: "d", label: "Whether the persuader is likeable" },
        ],
        correctChoiceId: "a",
        explanation: "The line is not the technique but its honesty and the recipient's interest: honest persuasion uses true cues and leaves people free to decide, while manipulation exploits the shortcuts with false cues to steer choices people would not make with full awareness.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the core defensive skill for resisting manipulative influence?",
        choices: [
          { id: "a", label: "Noticing the pull of automatic compliance and pausing to ask whether the trigger reflects something real" },
          { id: "b", label: "Distrusting absolutely everyone at all times" },
          { id: "c", label: "Never making any decisions" },
          { id: "d", label: "Always complying immediately" },
        ],
        correctChoiceId: "a",
        explanation: "Inserting a moment of deliberate thought where an automatic response was expected — asking whether an authority is genuinely relevant, whether scarcity is real — is the essence of responding to substance rather than the trigger.",
      },
    ],
    sources: [
      { label: "Robert Cialdini, Influence: The Psychology of Persuasion", note: "The classic account of the principles of influence.", type: "Reference", url: "https://en.wikipedia.org/wiki/Influence:_Science_and_Practice" },
      { label: "Social engineering (security) (overview)", note: "Reference on how influence techniques are used in manipulation.", type: "Reference", url: "https://en.wikipedia.org/wiki/Social_engineering_(security)" },
    ],
  },
  {
    concept: "Authority",
    level: "GCSE",
    summary: "people complying because a source appears legitimate or expert",
    estimatedMinutes: 7,
    deck: "We are trained from childhood to obey legitimate authority, and mostly this serves us well. But the deference runs so deep that it can be triggered by the mere appearance of authority — a uniform, a title, a confident tone — which is exactly why impersonating authority is one of the oldest tricks of the scammer.",
    keyTerms: [
      { label: "Authority", value: "The tendency to comply with those who appear legitimate, expert or in charge." },
      { label: "Symbols of authority", value: "Titles, uniforms, credentials and confident manner that trigger deference." },
      { label: "Milgram's obedience studies", value: "Experiments showing how far people obey an apparent authority." },
      { label: "Verification", value: "Independently checking that claimed authority is genuine before complying." },
    ],
    sections: [
      {
        heading: "The pull of authority",
        body: [
          `We tend to comply with, and defer to, those we see as legitimate authorities — experts, officials, people in charge. This is usually sensible: authorities often genuinely know more or have a real right to direct us, and a society could not function if everyone questioned every instruction from doctors and officials. We learn to obey legitimate authority early, and it becomes largely automatic.`,
          `Stanley Milgram's obedience experiments in the 1960s showed how powerful this is. Participants were instructed by an experimenter in a lab coat to give what they believed were increasingly severe electric shocks to another person, and a disturbing proportion kept obeying, apparently endangering someone, simply because an authority figure told them to. Ordinary people, it turned out, will override their own conscience for a perceived legitimate authority — a far stronger pull than most of us like to believe.`,
        ],
      },
      {
        heading: "Symbols trigger the response",
        body: [
          `Crucially, the authority response is often triggered not by real authority but by its symbols. We defer to titles ("Doctor", "Officer"), uniforms, credentials, and a confident, commanding manner — and anyone can wear those, whether or not they hold the authority they signal. Studies show people obey a figure in a uniform even when the authority is irrelevant to the situation.`,
          `This is why impersonating authority is a classic manipulation. Scammers pose as the bank's fraud department, the tax office, the police, IT support, or a senior executive, because the assumed authority triggers automatic compliance and lowers the target's guard. A confident caller claiming to be from your bank's security team, using the right jargon and a commanding tone, exploits trained deference to get information or money. The symbols do the work; the target rarely stops to check whether the authority is real.`,
        ],
      },
      {
        heading: "Why fake authority works so well",
        body: [
          `Fake-authority attacks combine several forces. The authority response is automatic, so we tend to comply before thinking. Questioning authority feels uncomfortable and even rude, so manipulators count on our reluctance to push back. And it is usually paired with urgency and fear — "your account has been compromised; act now" — which further short-circuits careful thought.`,
          `The deference is amplified in hierarchies. An instruction that appears to come from the boss carries enormous weight, and employees are reluctant to question it. This is the basis of "business email compromise": a fraudster impersonates a senior executive and instructs an employee to make an urgent payment, and the assumed authority plus the pressure not to question a superior leads them to comply with a request they should have checked. Authority need not even be present in person — its claimed presence, in an email or a call, is often enough.`,
        ],
      },
      {
        heading: "Defending against false authority",
        body: [
          `The defence is not to abandon respect for genuine authority but to distinguish real authority from its appearance, and to verify before complying with consequential requests. The key point: legitimate authorities can withstand verification, while impostors cannot. A real bank or executive will not object to you independently confirming their identity through a separate, trusted channel.`,
          `In practice, treat unsolicited contact from any "authority" with caution, especially when it demands urgent action, money or sensitive information. Rather than acting on the caller's or email's own contact details — which an impostor controls — look up the organisation's real number independently and contact them yourself. And give yourself permission to question and verify despite the social discomfort: a genuine authority will not be offended, and if someone reacts to verification with anger or extra pressure, that itself is a warning sign.`,
        ],
      },
      {
        heading: "The caller who claims to be your bank",
        body: [
          `You will most likely meet false authority as a scam: the call from "your bank's fraud team", the text from "the tax office", the email from "IT support" or even "the CEO", all borrowing the pull of authority to get you to act without thinking. The pattern is consistent — an authority you cannot see, an urgent demand, and pressure not to question. The single most protective habit is to refuse to act on the contact's own details and instead verify independently: hang up and call the organisation's real number that you look up yourself. Genuine authority survives that check; an impostor does not.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What did Milgram's obedience experiments demonstrate?",
        choices: [
          { id: "a", label: "That ordinary people will go to alarming lengths in obedience to a perceived legitimate authority" },
          { id: "b", label: "That people never obey authority" },
          { id: "c", label: "That authority has no effect on behaviour" },
          { id: "d", label: "That only certain personalities obey" },
        ],
        correctChoiceId: "a",
        explanation: "Participants instructed by an experimenter in a lab coat continued giving what they believed were dangerous shocks, showing the pull of authority is far stronger than most people assume, often overriding conscience.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is the authority response so exploitable?",
        choices: [
          { id: "a", label: "It is often triggered by the mere symbols of authority — titles, uniforms, confident manner — which anyone can wear" },
          { id: "b", label: "Because only genuine authorities can trigger it" },
          { id: "c", label: "Because symbols never influence people" },
          { id: "d", label: "Because people always verify authority" },
        ],
        correctChoiceId: "a",
        explanation: "We defer to titles, uniforms and an authoritative manner independent of the reality behind them, so impersonating authority — posing as the bank, police or IT support — reliably triggers compliance and lowers the target's guard.",
      },
      {
        dimension: "reasoning",
        prompt: "How do 'business email compromise' scams exploit authority?",
        choices: [
          { id: "a", label: "A fraudster impersonates a senior executive, exploiting the assumed authority and employees' reluctance to question a superior" },
          { id: "b", label: "They rely on employees having no boss" },
          { id: "c", label: "They avoid any claim of authority" },
          { id: "d", label: "They only target the CEO directly" },
        ],
        correctChoiceId: "a",
        explanation: "By posing as the 'CEO' instructing an urgent payment, the scam combines assumed authority with the pressure not to question a superior, leading employees to comply with requests they should have verified.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does combining fake authority with urgency make scams more effective?",
        choices: [
          { id: "a", label: "Urgency short-circuits careful thought while the assumed authority triggers automatic compliance" },
          { id: "b", label: "Urgency makes people more careful" },
          { id: "c", label: "Authority weakens under pressure" },
          { id: "d", label: "The two factors cancel each other out" },
        ],
        correctChoiceId: "a",
        explanation: "The automatic authority response plus manufactured pressure ('act now, your account is compromised') further short-circuits deliberation, which is why assumed authority and urgency are a staple combination in scams.",
      },
      {
        dimension: "depth",
        prompt: "What is the key defence against false-authority manipulation?",
        choices: [
          { id: "a", label: "Verify independently through a separate trusted channel before complying with consequential requests" },
          { id: "b", label: "Abandon respect for all authority" },
          { id: "c", label: "Always comply immediately to be polite" },
          { id: "d", label: "Use the contact details the caller provides" },
        ],
        correctChoiceId: "a",
        explanation: "Legitimate authorities survive verification while impostors do not, so the safe move is to resist immediate compliance and confirm identity through independently obtained contact details — a genuine authority is not offended by reasonable checks.",
      },
    ],
    sources: [
      { label: "Milgram experiment (overview)", note: "Reference on obedience to authority.", type: "Reference", url: "https://en.wikipedia.org/wiki/Milgram_experiment" },
      { label: "NCSC: recognising and reporting scams", note: "Practical guidance on impersonation and verification.", type: "Reference", url: "https://www.ncsc.gov.uk/collection/phishing-scams" },
    ],
  },
  {
    concept: "Reciprocity",
    level: "A-level",
    summary: "the pressure to return favours, gifts or concessions",
    estimatedMinutes: 8,
    deck: "When someone does something for us, we feel a deep-seated pressure to return the favour. This instinct is the glue of cooperative society — but it can be weaponised, because the obligation is triggered even by unwanted gifts and calculated concessions, letting a small favour buy a much larger return.",
    keyTerms: [
      { label: "Reciprocity", value: "The felt obligation to return favours, gifts or concessions." },
      { label: "The reciprocity rule", value: "A near-universal social norm that we should repay what others give us." },
      { label: "Unsolicited gift", value: "A gift you did not ask for that still creates a sense of obligation." },
      { label: "Door-in-the-face", value: "A large request refused, then a smaller one framed as a concession to reciprocate." },
    ],
    sections: [
      {
        heading: "The obligation to repay",
        body: [
          `The "rule of reciprocity" — that if someone does something for us we ought to do something in return — is one of the most widespread norms in human society, found across cultures. It is enormously valuable, because it underpins the trust and exchange on which cooperation depends; a society where favours were never repaid could not function.`,
          `But the obligation it creates is strong, largely automatic, and triggered even when we did not want the initial favour. Because the rule is so ingrained, a gift generates a sense of indebtedness that presses us to repay, whether or not we asked for it or even like the giver. So someone can deliberately give an unsolicited favour to create an obligation, then call it in — using a small gift to extract a larger return.`,
        ],
      },
      {
        heading: "The unsolicited gift",
        body: [
          `Because the obligation fires even for gifts we did not request, giving a small unrequested favour makes people more likely to comply with a later request. This is the logic behind free samples, small gifts enclosed with charity appeals, complimentary items, and the drink bought before a pitch. The recipient did not ask, but having received the gift, they feel a pull to reciprocate — often with a purchase or donation worth far more.`,
          `What makes this effective is that you cannot easily decline the sense of obligation once you have accepted the gift, even a trivial one, and even if you recognise the tactic. Charities that enclose a small "free gift" raise more, because the gift activates the reciprocity rule. The gift is not generosity but an investment expected to yield a larger return through the obligation it creates.`,
        ],
      },
      {
        heading: "Reciprocal concessions",
        body: [
          `Reciprocity applies to concessions too, which produces a clever technique. If someone retreats from a large demand to a smaller one, we feel obliged to reciprocate by making a concession of our own — usually agreeing to the smaller request. This is the "door-in-the-face": make a large request that will be refused, then follow with a smaller one framed as a concession. The target feels pressure to accept it, even though they might have refused the smaller request had it been made first.`,
          `The person who dropped from a big demand to a modest one appears to have compromised, and reciprocity pushes us to compromise back. A salesperson who starts with an expensive option and then offers a cheaper one, or a negotiator who begins extreme and "reluctantly" moderates, may be exploiting this: the apparent retreat obliges us to move toward them. The tell is when the large initial demand was never serious, but was made precisely so the smaller one could look like a generous concession.`,
        ],
      },
      {
        heading: "Defending against manufactured debt",
        body: [
          `The defence is not to reject all gifts, which would poison genuine cooperation, but to recognise when the rule is being deliberately exploited. Cialdini's key move is a redefinition: if you can see that a "gift" is actually a compliance tactic — an investment intended to obligate you — rather than a genuine favour, the reciprocity rule no longer binds you, because you owe nothing to a sales device dressed up as generosity.`,
          `In practice, be alert to unsolicited gifts and favours from people who then want something, and ask whether the "generosity" is real or a setup. You can accept a genuine kindness graciously and still evaluate any request that follows on its own merits — and in negotiations, notice the door-in-the-face pattern and judge the smaller request for itself, not as a compromise you must meet. The felt obligation is real, but you are not actually indebted to a manufactured favour.`,
        ],
      },
      {
        heading: "The free sample that isn't free",
        body: [
          `You feel reciprocity's pull constantly: the free sample at the shop, the "complimentary" upgrade before a sales pitch, the small gift in a charity letter, the negotiator who starts high and "generously" comes down. The healthy response is not to become cold and transactional, but to notice when generosity has strings attached — and to recognise that a gift designed to obligate you does not actually bind you. Telling real generosity from manufactured debt lets you keep the cooperation reciprocity makes possible while resisting its exploitation.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is the 'rule of reciprocity'?",
        choices: [
          { id: "a", label: "A widespread social norm that we feel obliged to repay what others give us" },
          { id: "b", label: "A law requiring equal payment for goods" },
          { id: "c", label: "The tendency to distrust all gifts" },
          { id: "d", label: "A rule that favours must never be repaid" },
        ],
        correctChoiceId: "a",
        explanation: "Reciprocity is the deeply rooted, near-universal norm that if someone does something for us we ought to return it — valuable because it underpins cooperation, but exploitable because the obligation is largely automatic.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is the 'unsolicited gift' an effective manipulation?",
        choices: [
          { id: "a", label: "The obligation to reciprocate is triggered even by gifts we did not request, so a small gift creates debt that increases later compliance" },
          { id: "b", label: "Because people always ask for the gifts they receive" },
          { id: "c", label: "Because unsolicited gifts create no obligation" },
          { id: "d", label: "Because recipients can easily decline the feeling of debt" },
        ],
        correctChoiceId: "a",
        explanation: "Because reciprocity fires even for gifts we did not want, a free sample or enclosed gift generates a sense of debt that presses the recipient to reciprocate — often with a purchase or donation worth far more than the gift.",
      },
      {
        dimension: "reasoning",
        prompt: "How does the 'door-in-the-face' technique exploit reciprocity?",
        choices: [
          { id: "a", label: "A large request is refused, then a smaller one is framed as a concession, so the target feels obliged to reciprocate by accepting it" },
          { id: "b", label: "Two identical requests are made in a row" },
          { id: "c", label: "Only a tiny request is ever made" },
          { id: "d", label: "The requester never compromises" },
        ],
        correctChoiceId: "a",
        explanation: "Reciprocity applies to concessions: retreating from a big demand to a modest one looks like a compromise, so the target feels pressure to compromise in return by saying yes — even to a request they might have refused first.",
      },
      {
        dimension: "reasoning",
        prompt: "According to Cialdini, what mental shift frees you from a manipulative 'gift'?",
        choices: [
          { id: "a", label: "Recognising that the gift is a compliance tactic rather than a genuine favour, so the reciprocity rule no longer binds you" },
          { id: "b", label: "Rejecting all gifts from everyone forever" },
          { id: "c", label: "Always repaying double what you receive" },
          { id: "d", label: "Ignoring that a gift was given" },
        ],
        correctChoiceId: "a",
        explanation: "If you redefine a 'gift' that is really an investment intended to obligate you as the sales device it is, you owe it no reciprocation — the felt obligation is real, but you are not actually indebted to a manufactured favour.",
      },
      {
        dimension: "depth",
        prompt: "Why is the defence NOT to reject all gifts and favours?",
        choices: [
          { id: "a", label: "Because most reciprocity is healthy and underpins genuine cooperation; the goal is only to recognise deliberate exploitation" },
          { id: "b", label: "Because all gifts are manipulative" },
          { id: "c", label: "Because reciprocity does not exist" },
          { id: "d", label: "Because refusing gifts is illegal" },
        ],
        correctChoiceId: "a",
        explanation: "Rejecting all gifts would poison the cooperation reciprocity makes possible; the aim is to distinguish real generosity from a calculated gift or concession designed to obligate you, keeping the good while resisting the exploitation.",
      },
    ],
    sources: [
      { label: "Robert Cialdini, Influence: The Psychology of Persuasion", note: "The classic analysis of reciprocity and the door-in-the-face technique.", type: "Reference", url: "https://en.wikipedia.org/wiki/Reciprocity_(social_psychology)" },
      { label: "Door-in-the-face technique (overview)", note: "Reference on reciprocal concessions in persuasion.", type: "Reference", url: "https://en.wikipedia.org/wiki/Door-in-the-face_technique" },
    ],
  },
  {
    concept: "Scarcity",
    level: "GCSE",
    summary: "limited availability increasing urgency and perceived value",
    estimatedMinutes: 7,
    deck: "We want things more when we might not be able to have them. Scarcity — real or manufactured — raises perceived value and triggers urgency, which is why 'only 2 left', 'limited time' and 'while stocks last' are among the most common phrases in selling. Recognising the trigger is a defence against buying on urgency rather than judgement.",
    keyTerms: [
      { label: "Scarcity principle", value: "We value things more, and want them more urgently, when they seem limited or running out." },
      { label: "Manufactured scarcity", value: "Artificial limits on quantity or time created to trigger urgency." },
      { label: "Loss aversion", value: "Feeling potential losses more strongly than equivalent gains, which scarcity exploits." },
      { label: "Urgency as a red flag", value: "Pressure to act immediately is a warning sign to slow down." },
    ],
    sections: [
      {
        heading: "Wanting what we might lose",
        body: [
          `We value things more, and desire them more strongly, when they seem limited, rare or running out. Opportunities look more valuable when their availability is restricted, which is why "act now, before it's gone" is such a powerful spur. Scarcity, real or perceived, converts a mild interest into an urgent desire.`,
          `Part of the reason is loss aversion — we feel the pain of a potential loss more intensely than the pleasure of an equivalent gain. When something is scarce, the frame shifts from "I could gain this" to "I could lose the chance to have this", and the fear of missing out on a diminishing opportunity is more motivating than the appeal of the thing itself. Scarcity turns a purchase into avoidance of a loss, which pushes us toward quick action rather than careful thought.`,
        ],
      },
      {
        heading: "Manufacturing scarcity",
        body: [
          `Because scarcity so reliably drives urgency, it is constantly manufactured. Real scarcity justifiably raises value, but much of the scarcity in selling is artificial, created to trigger the response: "only 2 left in stock", "limited-time offer", "sale ends midnight", countdown timers, "exclusive", "limited edition", and claims that others are viewing or buying the item. The scarcity is often the marketing, not the reality.`,
          `These techniques combine a limit with pressure to act immediately. A ticking countdown or a deadline compresses the decision, leaving less time to think, compare or reconsider — and less time is exactly what manipulation wants, because careful thought is its enemy. The urgency is designed to push us into acting on impulse and fear of missing out rather than reasoned judgement, and whether the stated limit is genuine is usually impossible to verify — which is part of the point.`,
        ],
      },
      {
        heading: "Why urgency is the tell",
        body: [
          `Scarcity is a favourite of scams as well as marketing, and its signature is manufactured urgency. Scammers create false time pressure — "transfer the money in the next hour", "this offer expires today", "act immediately or lose access" — precisely to stop the target thinking, checking with others, or verifying. The urgency is not incidental; it is the core mechanism, because a target given time to reflect would often see through the deception.`,
          `This makes urgency itself one of the most reliable warning signs of manipulation. When a message or seller pressures you to act right now, with no time to think, that pressure should trigger suspicion rather than compliance. Legitimate opportunities and genuine authorities rarely require you to act instantly: a real deal will usually still be there after you have considered it, and a genuine emergency can withstand verification. The very insistence that there is no time to think is a signal that thinking is exactly what you should do.`,
        ],
      },
      {
        heading: "Slowing down the scarcity response",
        body: [
          `The defence is to recognise the trigger and deliberately put back the time and thought that urgency is designed to remove. When you feel the pull — the flush of "I might miss out", the urge to grab it before it's gone — that feeling is the cue to slow down. The key question is whether you actually want the thing for its own merits, or only because it is scarce. Scarcity inflates desire artificially, so wanting something more because it is limited is not a reason to want it.`,
          `Concretely: resist deciding immediately, give yourself a rule to step back whenever urgency is imposed, and verify claimed limits where you can. A manufactured deadline is a manipulation device, and walking away from a "limited" offer usually costs far less than the seller implies. For anything consequential, deliberate delay disarms the trick — the manipulation depends on speed, so slowing down defeats it.`,
        ],
      },
      {
        heading: "The countdown timer working on you",
        body: [
          `You are targeted by scarcity every day: the "only 3 rooms left" on a booking site, the checkout countdown, the "limited edition", the "sale ends tonight", the scammer's "act now or lose your account". Notice how these shift you from "would I like this?" to "I'd better grab it before it's gone" — from gain to fear of loss. The most protective habit is to treat imposed urgency as a warning rather than a reason: when something insists you must act immediately with no time to think, that is precisely when to slow down, verify, and ask whether you want the thing on its own merits. A genuine opportunity survives a pause; a manipulation usually does not.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is the scarcity principle?",
        choices: [
          { id: "a", label: "We value things more, and want them more urgently, when they seem limited or running out" },
          { id: "b", label: "We value things less when they are rare" },
          { id: "c", label: "Availability has no effect on desire" },
          { id: "d", label: "We only want things that are freely available" },
        ],
        correctChoiceId: "a",
        explanation: "Scarcity raises perceived value and triggers urgency: restricted availability makes opportunities seem more valuable, and the possibility of losing something makes us want it more, converting mild interest into urgent desire.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is scarcity so powerful, connecting to loss aversion?",
        choices: [
          { id: "a", label: "It reframes a choice from 'I could gain this' to 'I could lose the chance', and we feel potential losses more intensely than gains" },
          { id: "b", label: "Because gains always feel stronger than losses" },
          { id: "c", label: "Because scarcity removes all emotion" },
          { id: "d", label: "Because people ignore missed opportunities" },
        ],
        correctChoiceId: "a",
        explanation: "Scarcity shifts the frame to avoiding a loss, and loss aversion means the fear of missing a diminishing opportunity is more motivating than the appeal of the thing itself — pushing toward quick action over deliberation.",
      },
      {
        dimension: "depth",
        prompt: "What is 'manufactured scarcity'?",
        choices: [
          { id: "a", label: "Artificial limits on quantity or time created to trigger urgency, whether or not the underlying limitation is real" },
          { id: "b", label: "A genuine, unavoidable shortage of a resource" },
          { id: "c", label: "Unlimited availability of a product" },
          { id: "d", label: "The removal of all deadlines" },
        ],
        correctChoiceId: "a",
        explanation: "Devices like 'only 2 left', countdown timers and 'sale ends midnight' create a sense of scarcity to trigger the response — the scarcity is often the marketing, not the reality, and the claim alone does the work.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is manufactured urgency a reliable warning sign of manipulation?",
        choices: [
          { id: "a", label: "Because it is designed to prevent you thinking, verifying or comparing — and legitimate opportunities rarely require instant action" },
          { id: "b", label: "Because urgent offers are always the best deals" },
          { id: "c", label: "Because genuine emergencies cannot be verified" },
          { id: "d", label: "Because thinking makes deals disappear" },
        ],
        correctChoiceId: "a",
        explanation: "Scammers create false time pressure precisely to short-circuit the deliberation that would expose the deception; a real deal usually survives a pause, so the insistence that there is no time to think is a signal that thinking is exactly what you should do.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the key question to ask when you feel the pull of scarcity?",
        choices: [
          { id: "a", label: "Whether you actually want the thing on its own merits, or only because it is scarce" },
          { id: "b", label: "How fast you can buy it" },
          { id: "c", label: "Whether the deadline is close enough" },
          { id: "d", label: "Whether others are also buying it" },
        ],
        correctChoiceId: "a",
        explanation: "Scarcity increases desire artificially, so wanting something more because it is limited is not a reason to want it; separating 'do I want this?' from 'am I afraid of losing the chance?' cuts through much of the effect.",
      },
    ],
    sources: [
      { label: "Robert Cialdini, Influence: The Psychology of Persuasion", note: "The classic analysis of the scarcity principle.", type: "Reference", url: "https://en.wikipedia.org/wiki/Scarcity_(social_psychology)" },
      { label: "NCSC / consumer guidance on high-pressure tactics", note: "Guidance on recognising urgency and pressure in scams.", type: "Reference", url: "https://www.ncsc.gov.uk/collection/phishing-scams" },
    ],
  },
  {
    concept: "Social Proof",
    level: "A-level",
    summary: "treating others' behaviour as evidence for what to do",
    estimatedMinutes: 8,
    deck: "When we don't know what to do, we look at what everyone else is doing and copy them. This 'social proof' is usually a sensible shortcut, but it can be fabricated with fake reviews, bought followers and staged crowds — and in the wrong conditions it can even lead a crowd to ignore an emergency happening right in front of them.",
    keyTerms: [
      { label: "Social proof", value: "Treating others' behaviour as evidence of the correct way to act, especially under uncertainty." },
      { label: "Uncertainty", value: "The condition that most strengthens reliance on social proof." },
      { label: "Fabricated social proof", value: "Fake reviews, bought followers and staged popularity used to manipulate." },
      { label: "The bystander effect", value: "When the inaction of others in a crowd leads each person not to act in an emergency." },
    ],
    sections: [
      {
        heading: "Following the crowd",
        body: [
          `Social proof is our tendency to look to others' behaviour to decide what is correct, especially when we are uncertain. We treat the actions of others — particularly many others, and others like us — as evidence of the right thing to do. Much of the time this is a reasonable shortcut: the collective behaviour of others often does encode useful information, so a busy restaurant probably has decent food.`,
          `It is strongest under two conditions. First, uncertainty: when we don't know what to do, we lean most heavily on others as a guide, because we lack our own basis for deciding. Second, similarity: we are more influenced by people we see as like ourselves, whose choices feel more relevant. Manipulators exploit both — deploying social proof at moments of uncertainty, and showcasing the approval of relatable others.`,
        ],
      },
      {
        heading: "Fabricating popularity",
        body: [
          `Because social proof is so influential, it is extensively faked. Online reviews, ratings, follower counts, "bestseller" labels, testimonials and "trusted by" logos are all social proof, and much of it is manipulated. Fake reviews, bought followers, and inflated user numbers manufacture the appearance of popularity for products that may not deserve it. When popularity can be bought, social proof becomes a tool for deception rather than a reliable signal.`,
          `Businesses also engineer live cues of popularity — "23 people are viewing this right now", "booked 5 times in the last hour" — and cultivate queues, since a line outside a venue signals it is worth queuing for. The manipulation borrows credibility from an apparent crowd: instead of arguing that something is good, it shows that others believe it is, which is often more persuasive and far easier to fake than genuine quality. Visible popularity is not the same as genuine merit.`,
        ],
      },
      {
        heading: "When social proof goes badly wrong",
        body: [
          `Social proof can lead groups collectively astray, most strikingly in the "bystander effect". In an emergency, the presence of others can make each individual less likely to help. Part of the reason is social proof: in an ambiguous situation, each person looks to others to judge whether it is really an emergency, and if everyone is looking at everyone else and no one is acting, each reads the others' inaction as evidence that nothing is wrong. The crowd's collective inaction becomes a signal that suppresses everyone's response.`,
          `This reveals how social proof can produce a collective illusion. When everyone takes their cue from everyone else, a group can converge on a wrong conclusion — that there is no emergency, that a bad product is good — because each person assumes the others know something they do not. Financial bubbles and fads have the same structure: people buy or believe something largely because others are, and the behaviour feeds on itself, detached from reality.`,
        ],
      },
      {
        heading: "Using the crowd wisely",
        body: [
          `The defence is not to ignore the crowd, which usually carries real information, but to notice when you are relying on it and ask whether the crowd is genuine and genuinely informed. When you find yourself persuaded mainly because "everyone is doing it" or "it has thousands of positive reviews", pause: is the popularity real, might it be fabricated, and does the crowd actually know something or is it just copying itself?`,
          `In practice, treat fakeable signals — reviews, follower counts — with scepticism where there is incentive to fake them, and give more weight to independent, harder-to-fake indicators. Remember the bystander lesson too: if you are waiting for others to act before you do, so may everyone else, so it can pay to think and act independently. The number of people doing something is not the same as whether it is right.`,
        ],
      },
      {
        heading: "Why the busy restaurant and the five-star product fool you",
        body: [
          `You rely on social proof daily — the busy restaurant over the empty one, the product with thousands of reviews, the show everyone is talking about — and usually it serves you fine. But you have also been fooled by its manufactured versions: fake reviews, bought followers, "only 2 people are viewing this". The useful habit is to notice when your choice is really "because others chose it" rather than because you evaluated it, and to ask whether that crowd is genuine and informed or possibly faked and merely copying itself. Using the crowd as one clue while keeping your own judgement gets you the benefit of social proof without its exploitation.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is social proof?",
        choices: [
          { id: "a", label: "Treating others' behaviour as evidence of the correct way to act, especially under uncertainty" },
          { id: "b", label: "A legal document proving ownership" },
          { id: "c", label: "The tendency to always disagree with the crowd" },
          { id: "d", label: "A guarantee that popular things are good" },
        ],
        correctChoiceId: "a",
        explanation: "Social proof is looking to what others — especially many, similar others — are doing to decide what is correct; usually a reasonable shortcut, since the crowd's behaviour often carries useful information, but exploitable when faked.",
      },
      {
        dimension: "reasoning",
        prompt: "Under what condition is social proof strongest?",
        choices: [
          { id: "a", label: "Uncertainty — when we are unsure what to do and lack our own basis for deciding" },
          { id: "b", label: "When we are confident experts" },
          { id: "c", label: "When we are completely alone" },
          { id: "d", label: "When others are very different from us" },
        ],
        correctChoiceId: "a",
        explanation: "Social proof is strongest under uncertainty, when we lean most on others' behaviour as a guide, and when the others are similar to us — which is why manipulators deploy it at uncertain moments and showcase relatable endorsers.",
      },
      {
        dimension: "depth",
        prompt: "Which is an example of fabricated social proof?",
        choices: [
          { id: "a", label: "Fake reviews, bought followers and inflated user numbers manufacturing apparent popularity" },
          { id: "b", label: "An independent laboratory test" },
          { id: "c", label: "A detailed product specification" },
          { id: "d", label: "A genuinely long queue that forms by itself" },
        ],
        correctChoiceId: "a",
        explanation: "Fake reviews, purchased likes and fabricated testimonials manufacture the appearance of approval for things that may not deserve it, exploiting our trust in the crowd — visible popularity is not the same as genuine merit.",
      },
      {
        dimension: "reasoning",
        prompt: "How does social proof contribute to the 'bystander effect'?",
        choices: [
          { id: "a", label: "In an ambiguous emergency, each person reads others' inaction as evidence that nothing is wrong, suppressing everyone's response" },
          { id: "b", label: "Crowds always act faster in emergencies" },
          { id: "c", label: "People ignore what others are doing" },
          { id: "d", label: "Social proof never affects groups" },
        ],
        correctChoiceId: "a",
        explanation: "When everyone looks to others to judge whether it is really an emergency and no one is yet acting, the crowd's collective inaction becomes a signal that nothing is wrong — a collective illusion that can suppress response even to a genuine emergency.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the sensible defence against misleading social proof?",
        choices: [
          { id: "a", label: "Notice when you are relying on it and ask whether the crowd is genuine and informed, keeping your own judgement" },
          { id: "b", label: "Always ignore what everyone else does" },
          { id: "c", label: "Always follow the largest crowd" },
          { id: "d", label: "Assume popularity always means quality" },
        ],
        correctChoiceId: "a",
        explanation: "Social proof usually carries real information, so the defence is to notice when popularity is driving your choice, ask whether it is genuine or faked and merely self-copying, and use it as one weak input rather than an override.",
      },
    ],
    sources: [
      { label: "Social proof (overview)", note: "Reference on the psychology of following the crowd.", type: "Reference", url: "https://en.wikipedia.org/wiki/Social_proof" },
      { label: "Bystander effect (overview)", note: "Reference on how group inaction suppresses emergency response.", type: "Reference", url: "https://en.wikipedia.org/wiki/Bystander_effect" },
    ],
  },
  {
    concept: "Pretexting",
    level: "University",
    summary: "using a fabricated role or story to shape trust",
    estimatedMinutes: 9,
    deck: "The most effective social-engineering attacks are not forced in; they are invited in, because the attacker has assumed a believable role. Pretexting is the craft of building a false but plausible identity and story — the IT technician, the new colleague, the auditor — to lower a target's guard and extract information, access or action.",
    keyTerms: [
      { label: "Pretexting", value: "Creating a fabricated identity and scenario to build trust and manipulate a target." },
      { label: "The pretext", value: "The invented role and story the attacker adopts and maintains." },
      { label: "Plausibility", value: "Making the false role believable enough that the target does not question it." },
      { label: "Verification of identity", value: "Independently confirming who someone really is — the core defence." },
    ],
    sections: [
      {
        heading: "Inventing a believable role",
        body: [
          `In pretexting, an attacker creates a fabricated scenario — a "pretext" — and assumes a false identity to manipulate a target into giving up information, access or cooperation. Rather than hacking a system technically, the pretexter hacks people, by becoming a character the target will trust and help. The role usually carries authority or a legitimate reason to make requests: an IT technician, a new employee, an auditor, a supplier, a delivery driver, an official from a bank.`,
          `The power lies in exploiting the trust and helpfulness we extend to people in legitimate-seeming roles. We are predisposed to cooperate with someone who appears to have a valid reason to ask — to help the technician fixing the system, to assist the new starter. By convincingly occupying the role, the pretexter borrows the trust that role would genuinely warrant, and uses it to extract things the target would never give an obvious stranger. The attack works not by breaking trust down but by manufacturing a false basis for it.`,
        ],
      },
      {
        heading: "Building and sustaining the pretext",
        body: [
          `Effective pretexting rests on preparation. A convincing pretext is built on research: the attacker gathers names, roles, jargon, procedures and current events so the fabricated role fits the target's world and withstands casual scrutiny. Knowing the right internal terminology and referencing real people or projects makes the pretext far more believable than a generic approach — which is why information gathered beforehand, often from public sources or earlier small deceptions, is so valuable.`,
          `Sustaining the pretext under interaction is the harder part. The attacker must hold the false identity consistently, respond plausibly to unexpected questions, and manage doubts, often with confidence and a calm command of detail. They may build the deception gradually, establishing the role over several innocuous contacts before making the real request, so that by the time they ask for something sensitive they are already a familiar, trusted presence. The aim is to ensure the target never reaches the point of asking "who is this really, and should I be helping them?"`,
        ],
      },
      {
        heading: "Why pretexting is so effective",
        body: [
          `Pretexting turns the target's good qualities against them. Helpfulness, trust and the desire to do one's job well are exactly the traits it exploits: a helpful employee wants to assist the "technician"; a diligent worker wants to comply with the "auditor". The very cooperativeness that makes an organisation function becomes the vulnerability, which is why technical security is often bypassed not by defeating it but by persuading a person to open the door.`,
          `Pretexting also exploits the fact that people rarely verify identity in routine interactions. We take claimed identities at face value — we do not demand proof that the caller really is from the bank, or that the visitor in a hi-vis vest really is a contractor — because constant verification would be impractical and feel distrustful. Pretexters count on the target not checking, and on the social awkwardness of demanding proof from someone who seems legitimate and pleasant. The attack lives in the gap between the trust we routinely extend and the verification we routinely skip.`,
        ],
      },
      {
        heading: "Defending against pretexting",
        body: [
          `The core defence is verifying identity through independent, trusted channels before acting on requests for sensitive information, access or action — and a culture that makes such verification normal rather than rude. Because a pretext rests entirely on the claimed identity being accepted without checking, independently confirming who someone really is collapses most pretexts. That means not relying on the contact details the person themselves provides (which they control), but calling back on an official number, checking with the department they claim to be from, or confirming through established procedures.`,
          `Organisations defend through policies and training: rules for verifying identity before releasing information or granting access, and a culture where employees are expected to verify and never penalised for reasonable caution. This must overcome the social pressure not to question a plausible, pleasant person, so good training makes verification routine. A genuine person in a genuine role will not object to reasonable verification — and a pretexter's confidence tends to falter once checking begins.`,
        ],
      },
      {
        heading: "The 'IT support' who just needs your password",
        body: [
          `You are a potential target whenever someone contacts you in a trusted-seeming role and asks for information, access or a favour: the caller from "IT support" who needs your login to "fix an issue", the "new colleague" asking for internal details, the "surveyor" seeking access. Notice how readily you extend helpfulness to someone who seems to have a legitimate reason to ask, and how uncomfortable it feels to demand proof of identity from a pleasant, plausible person — that discomfort is exactly what pretexting exploits. The protective habit is to make identity verification normal for anything sensitive: independently confirm who someone really is before helping, using trusted channels rather than the details they give you.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is pretexting?",
        choices: [
          { id: "a", label: "Creating a fabricated identity and scenario to build trust and manipulate a target into giving up information, access or cooperation" },
          { id: "b", label: "Hacking a computer system through technical exploits" },
          { id: "c", label: "Sending mass advertising emails" },
          { id: "d", label: "Publishing a research study" },
        ],
        correctChoiceId: "a",
        explanation: "Pretexting hacks people rather than systems: the attacker assumes a believable false role — IT technician, auditor, new colleague — to borrow the trust that role would earn and extract things the target would not give a stranger.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is research so valuable to a pretexter?",
        choices: [
          { id: "a", label: "Knowing names, jargon, procedures and current events makes the fabricated role fit the target's world and withstand scrutiny" },
          { id: "b", label: "Because research is required by law" },
          { id: "c", label: "Because it makes the attack slower" },
          { id: "d", label: "Because pretexts work better when generic" },
        ],
        correctChoiceId: "a",
        explanation: "A convincing pretext is built on gathered information; the right internal terminology and references to real people or projects make the role far more believable than a generic approach, so the target never questions it.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does pretexting turn a target's good qualities against them?",
        choices: [
          { id: "a", label: "Helpfulness, trust and the desire to do one's job well are exactly the traits the pretexter exploits to gain cooperation" },
          { id: "b", label: "Because helpful people are rare" },
          { id: "c", label: "Because good qualities make people suspicious" },
          { id: "d", label: "Because it only targets dishonest people" },
        ],
        correctChoiceId: "a",
        explanation: "A helpful employee wants to assist the 'technician' and a diligent worker to comply with the 'auditor'; the very cooperativeness that makes an organisation function becomes the vulnerability, which is why the human is often the easiest way in.",
      },
      {
        dimension: "reasoning",
        prompt: "What routine gap does pretexting exploit?",
        choices: [
          { id: "a", label: "That people rarely verify claimed identities in routine interactions, and feel awkward demanding proof from a plausible person" },
          { id: "b", label: "That people verify every identity constantly" },
          { id: "c", label: "That claimed identities are always false" },
          { id: "d", label: "That organisations never grant access" },
        ],
        correctChoiceId: "a",
        explanation: "We take claimed identities largely at face value because constant verification is impractical and feels distrustful; pretexters count on the target not checking and on the social awkwardness of demanding proof from someone who seems legitimate.",
      },
      {
        dimension: "depth",
        prompt: "What is the core defence against pretexting?",
        choices: [
          { id: "a", label: "Verifying identity through independent, trusted channels before acting, in a culture that makes verification normal" },
          { id: "b", label: "Trusting anyone who seems friendly" },
          { id: "c", label: "Using the credentials the person provides" },
          { id: "d", label: "Never granting access to anyone ever" },
        ],
        correctChoiceId: "a",
        explanation: "Because the pretext rests on the claimed identity being accepted unchecked, independently confirming who someone really is — via separately obtained trusted channels, not the details they provide — collapses most pretexts, especially where verification is made routine.",
      },
    ],
    sources: [
      { label: "Pretexting (overview)", note: "Reference on pretexting as a social-engineering technique.", type: "Reference", url: "https://en.wikipedia.org/wiki/Pretexting" },
      { label: "CISA: Avoiding Social Engineering and Phishing Attacks", note: "Official guidance on recognising and resisting social engineering.", type: "Reference", url: "https://www.cisa.gov/news-events/news/avoiding-social-engineering-and-phishing-attacks" },
    ],
  },
  {
    concept: "Phishing",
    level: "A-level",
    summary: "deceptive messages that request action, data or access",
    estimatedMinutes: 8,
    deck: "Phishing is social engineering at industrial scale: deceptive messages, sent in vast numbers, designed to trick recipients into clicking a link, revealing a password, or authorising a payment. It remains one of the most common and damaging cyber-attacks precisely because it targets people, not machines.",
    keyTerms: [
      { label: "Phishing", value: "Deceptive messages designed to trick recipients into revealing data, clicking malicious links or authorising action." },
      { label: "Spear phishing", value: "A targeted phishing attack tailored to a specific person or organisation." },
      { label: "The lure", value: "The pretext, authority and urgency that make a phishing message compelling." },
      { label: "Verification and caution", value: "Not acting on unsolicited messages without independent checks — the core defence." },
    ],
    sections: [
      {
        heading: "Bait cast at scale",
        body: [
          `Phishing uses deceptive messages — usually email, but also text ("smishing"), phone calls ("vishing") and other channels — to trick recipients into an action that benefits the attacker: revealing a password or bank details, clicking a link to a malicious site, opening an infected attachment, or authorising a payment. The name evokes fishing: the attacker casts out bait, and if a recipient bites, they are hooked. Phishing persists because it exploits human psychology rather than technical vulnerabilities.`,
          `Much phishing is a numbers game, sent in enormous volumes. Even a tiny success rate is profitable when sending millions of messages costs almost nothing, so mass phishing is often generic — a message pretending to be from a bank or delivery service — cast widely in the hope that some recipients happen to be customers and bite. The economics of near-free mass messaging are what make phishing so relentless.`,
        ],
      },
      {
        heading: "Targeted and tailored attacks",
        body: [
          `More dangerous is "spear phishing": a targeted attack tailored to a specific person or organisation. Instead of a generic mass message, the attacker researches the target and crafts a personalised message — referencing their name, role, colleagues or recent activities, and impersonating someone they know or a service they use. Because it fits the target's real context, it is much harder to spot and far more likely to succeed.`,
          `A particularly damaging form is "whaling" or business email compromise, targeting senior executives or exploiting their identity. An attacker might impersonate a CEO to instruct an urgent wire transfer, or compromise a real executive's account to send instructions that appear entirely genuine. These attacks have caused enormous financial losses precisely because they exploit authority and trust within an organisation — the more tailored and contextually plausible the attack, the more dangerous.`,
        ],
      },
      {
        heading: "The anatomy of the lure",
        body: [
          `Phishing messages typically combine several influence principles into a compelling lure. Authority: it appears to come from a trusted source — a bank, an agency, a well-known company, a senior colleague. Urgency and fear: it demands immediate action, often by invoking a threat ("your account has been compromised", "your account will be suspended"). A plausible pretext: a believable reason that fits expectations. And a call to action: a link to click, an attachment to open, or information to provide — the actual hook.`,
          `Recognising this anatomy reveals the warning signs. Be suspicious of unsolicited messages that create urgency, ask you to click a link or provide sensitive information, and pressure you to act now. Other tells include mismatched or subtly wrong sender addresses and links (a URL that looks almost right), generic greetings, unexpected requests, and requests for information a legitimate organisation would not ask for by email. No single sign is decisive, and modern phishing can be polished, but the combination of urgency, an unsolicited request, and a call to click is the classic pattern.`,
        ],
      },
      {
        heading: "Defending against phishing",
        body: [
          `The fundamental defence is caution with unsolicited messages and independent verification before acting. The single most protective habit is to not act directly on links, attachments or requests in an unexpected message, but to verify through a separate, trusted channel: rather than clicking the link in the "bank" email, go to the bank's website independently or call the number on your card; rather than replying to the "CEO's" urgent payment request, confirm it through a known channel. This breaks the attack, because the message controls only its own links and replies, not your independently chosen route to the real organisation.`,
          `Practical habits reinforce this: treat any message that creates urgency and asks you to click, log in, pay or reveal information as suspect until verified; hover over links to see where they really go; never enter passwords via a link in an unsolicited message; and use technical protections — spam filters, multi-factor authentication (which limits the damage even if a password is phished), and updated software. Because phishing targets human judgement, an informed, cautious human is the best defence.`,
        ],
      },
      {
        heading: "The text that says your parcel is held",
        body: [
          `You are targeted by phishing constantly: the text claiming your parcel is held pending a small fee, the email that your account has been suspended, the fake login page, the urgent request that appears to come from your boss. Notice the recurring anatomy — an authoritative-seeming sender, manufactured urgency, and a link to click or details to provide. The single habit that defeats most of it is never to act on the message's own links or replies, but to verify independently: go to the real website yourself, call the number on your card, confirm with the person through a channel you already trust. Phishing works by getting you to click or reply in the moment; refusing to do so disarms it.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is phishing?",
        choices: [
          { id: "a", label: "Deceptive messages designed to trick recipients into revealing data, clicking malicious links or authorising action" },
          { id: "b", label: "A technical method of breaking encryption" },
          { id: "c", label: "A type of legitimate marketing survey" },
          { id: "d", label: "A way to speed up email delivery" },
        ],
        correctChoiceId: "a",
        explanation: "Phishing uses deceptive messages — email, text (smishing), calls (vishing) — to trick recipients into revealing passwords, clicking malicious links, opening infected attachments or authorising payments, exploiting human psychology rather than technical flaws.",
      },
      {
        dimension: "depth",
        prompt: "How does 'spear phishing' differ from generic mass phishing?",
        choices: [
          { id: "a", label: "It is targeted and tailored to a specific person or organisation, using researched details, making it far harder to spot" },
          { id: "b", label: "It is sent to more people at once" },
          { id: "c", label: "It contains no links or requests" },
          { id: "d", label: "It is always less convincing" },
        ],
        correctChoiceId: "a",
        explanation: "Spear phishing researches the target and crafts a personalised message referencing their name, role and context, impersonating someone they know — far more convincing and dangerous than a generic mass message.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is mass phishing profitable even if very few people fall for it?",
        choices: [
          { id: "a", label: "Sending millions of messages costs almost nothing, so a tiny success rate across a huge number is still profitable" },
          { id: "b", label: "Because most recipients always comply" },
          { id: "c", label: "Because each message is expensive to send" },
          { id: "d", label: "Because it targets only wealthy people" },
        ],
        correctChoiceId: "a",
        explanation: "The economics of near-free mass messaging mean an attacker needs only a small success rate across a huge number of attempts, which is why generic phishing is cast so widely and relentlessly.",
      },
      {
        dimension: "reasoning",
        prompt: "What combination of elements typically makes up a phishing 'lure'?",
        choices: [
          { id: "a", label: "An authoritative-seeming source, manufactured urgency or fear, a plausible pretext, and a call to click or provide information" },
          { id: "b", label: "A relaxed tone with no request for action" },
          { id: "c", label: "A message with no sender and no links" },
          { id: "d", label: "A slow, months-long request" },
        ],
        correctChoiceId: "a",
        explanation: "Phishing combines authority (a trusted-seeming sender), urgency and fear (a threat demanding immediate action), a believable pretext, and a call to action — the link, attachment or information request that is the actual hook.",
      },
      {
        dimension: "depth",
        prompt: "What is the single most protective habit against phishing?",
        choices: [
          { id: "a", label: "Not acting on the message's own links or replies, but verifying through a separate trusted channel" },
          { id: "b", label: "Clicking the link quickly to check where it goes" },
          { id: "c", label: "Replying to confirm your details" },
          { id: "d", label: "Trusting any message that looks official" },
        ],
        correctChoiceId: "a",
        explanation: "Because the phishing message controls only its own links and replies, going to the real website independently or calling the number on your card breaks the attack — verify through a separate trusted route rather than acting in the moment.",
      },
    ],
    sources: [
      { label: "Phishing (overview)", note: "Reference on phishing, spear phishing and business email compromise.", type: "Reference", url: "https://en.wikipedia.org/wiki/Phishing" },
      { label: "NCSC: Phishing attacks — dealing with suspicious messages", note: "Official guidance on recognising and reporting phishing.", type: "Reference", url: "https://www.ncsc.gov.uk/collection/phishing-scams" },
    ],
  },
  {
    concept: "Elicitation",
    level: "University",
    summary: "drawing out information through ordinary conversation",
    estimatedMinutes: 9,
    deck: "The most valuable information is often given away for free, in friendly conversation, by people who never realise they revealed anything. Elicitation is the subtle art of extracting information without ever asking a direct question — using rapport, flattery and casual remarks so skilfully that the target volunteers what they should have kept private.",
    keyTerms: [
      { label: "Elicitation", value: "Drawing out information through ordinary conversation, without obvious questioning." },
      { label: "Indirect questioning", value: "Getting information without asking for it directly, so the target does not feel interrogated." },
      { label: "Rapport and flattery", value: "Building warmth and appealing to ego to make people talk more freely." },
      { label: "Information awareness", value: "Being conscious of what you reveal and to whom — the core defence." },
    ],
    sections: [
      {
        heading: "Extracting without asking",
        body: [
          `Elicitation is subtly drawing information out of people through ordinary conversation, without asking for it directly and without the target realising they are being questioned. A skilled elicitor extracts sensitive information while the target believes they are simply having a pleasant chat. Because the target does not feel interrogated, their guard stays down, and they may volunteer information they would instantly refuse if asked directly.`,
          `The core of the technique is indirection. Rather than asking "what security software does your company use?", which would put a target on guard, the elicitor steers the conversation so the target reveals it themselves — perhaps while complaining about their systems or boasting about their setup. The information is given freely, in the flow of talk, in response to remarks rather than questions. The target is a willing, unwitting participant, often leaving with no sense that anything was extracted.`,
        ],
      },
      {
        heading: "The techniques of drawing out",
        body: [
          `Elicitors use a repertoire of conversational moves. Rapport is foundational — people talk far more freely to someone they like, so the elicitor first builds warmth and common ground. Flattery and appeals to ego are powerful: praise someone's expertise and they elaborate to demonstrate it, revealing information in the process. Feigned ignorance works similarly: pretend not to understand, or state something slightly wrong, and the target jumps in to correct you, volunteering details.`,
          `Other moves include disclosure reciprocity — the elicitor shares some (possibly false) information of their own, triggering the target's urge to match openness with openness. A deliberate provocation can prompt an emotional, revealing response; complaining about a shared problem invites the target to describe their own situation in detail; assuming knowledge ("I heard you're rolling out the new system…") invites confirmation and elaboration. In every case the elicitor avoids direct questions, instead creating conditions in which the target naturally offers up information.`,
        ],
      },
      {
        heading: "Why elicitation succeeds",
        body: [
          `Elicitation exploits deep features of human behaviour. People like to talk, especially about themselves and their expertise, and enjoy an interested listener; the elicitor simply provides that attentive audience. People also want to appear knowledgeable, helpful and competent, and those desires lead them to say more than caution would advise. And because a friendly conversation does not feel like a security threat, the mental defences that a direct request for information might trigger simply never activate.`,
          `It is also effective because individual pieces of information seem harmless in isolation. A target may reveal small details — a name, a procedure, a piece of jargon, a grievance — each seemingly trivial, without realising that an attacker can assemble many fragments into a valuable whole, or use them to make a later pretext or phishing attack far more convincing. This is why elicitation is frequently a reconnaissance step: the target defends nothing because each fragment feels insignificant, and never sees the picture they add up to.`,
        ],
      },
      {
        heading: "Defending against elicitation",
        body: [
          `Defending against elicitation is genuinely hard, because the whole technique is designed to bypass the awareness that would trigger a defence. The foundation is information awareness: being conscious of what is sensitive, and staying mindful — even in relaxed, friendly conversation — of what you are revealing and to whom. This is not paranoia but a habit of noticing when a pleasant conversation is drifting toward sensitive topics, and recognising that casual interest in your work or systems might not be idle.`,
          `Practically, knowing the techniques makes them far less effective — recognising flattery, feigned ignorance and disclosure reciprocity as they happen defuses them. Be cautious about discussing sensitive matters with people you cannot verify, deflect probing turns rather than elaborating, and remember that no obligation compels you to satisfy someone's curiosity. Because small, individually harmless details can be aggregated, protecting even seemingly trivial information matters. The essential shift is from unawareness to awareness — elicitation thrives on targets who do not know it exists.`,
        ],
      },
      {
        heading: "The friendly stranger who's very interested in your work",
        body: [
          `You are elicited more often than you realise, not always maliciously — a curious acquaintance, a chatty stranger, a salesperson, or occasionally someone with worse intent can draw out more than you meant to share. Notice the techniques: the flattery that makes you want to demonstrate your expertise, the person who shares something personal so you feel you should reciprocate, the feigned ignorance that makes you jump in to correct them. None of it feels like questioning, which is exactly why it works. The protective habit is not to stop being friendly but to stay quietly aware of what is sensitive and to notice when a pleasant conversation drifts toward it — remembering that individually trivial details can be assembled into something valuable.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is elicitation?",
        choices: [
          { id: "a", label: "Subtly drawing information out of people through ordinary conversation, without directly asking or the target realising" },
          { id: "b", label: "Formally interrogating a suspect" },
          { id: "c", label: "Sending phishing emails in bulk" },
          { id: "d", label: "Publicly demanding information" },
        ],
        correctChoiceId: "a",
        explanation: "Elicitation extracts sensitive information while the target believes they are just having a pleasant chat; because they do not feel interrogated, their guard stays down and they volunteer what they would refuse if asked directly.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is 'flattery' an effective elicitation technique?",
        choices: [
          { id: "a", label: "Praising someone's expertise encourages them to demonstrate and elaborate, revealing information to prove their knowledge" },
          { id: "b", label: "Because flattery makes people suspicious and silent" },
          { id: "c", label: "Because it directly asks for the information" },
          { id: "d", label: "Because people dislike being praised" },
        ],
        correctChoiceId: "a",
        explanation: "People want to appear knowledgeable, so an expert flattered about their knowledge often says far more than they intended to prove it — one of several techniques, alongside feigned ignorance and disclosure reciprocity, that draw information out.",
      },
      {
        dimension: "reasoning",
        prompt: "Why do the mental defences that a direct request would trigger fail to activate during elicitation?",
        choices: [
          { id: "a", label: "Because a friendly conversation does not feel like a threat, so the target is not on guard" },
          { id: "b", label: "Because targets are always careless" },
          { id: "c", label: "Because elicitation uses obvious interrogation" },
          { id: "d", label: "Because people never protect information" },
        ],
        correctChoiceId: "a",
        explanation: "Elicitation is designed to bypass awareness: because the target perceives no danger in a pleasant chat, the defences a direct information request would trigger never activate — which is what makes it so hard to detect.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is elicitation often a reconnaissance step for a bigger attack?",
        choices: [
          { id: "a", label: "Individually harmless details can be aggregated into a valuable whole or used to make a later pretext or phishing attack more convincing" },
          { id: "b", label: "Because each detail is immediately damaging on its own" },
          { id: "c", label: "Because elicitation never gathers useful information" },
          { id: "d", label: "Because attackers prefer to work slowly for no reason" },
        ],
        correctChoiceId: "a",
        explanation: "A target reveals small details that each seem trivial, not realising an attacker can assemble many fragments into a valuable picture or use them to craft a far more convincing pretext or phishing attack later.",
      },
      {
        dimension: "depth",
        prompt: "What is the foundation of defence against elicitation?",
        choices: [
          { id: "a", label: "Information awareness — staying mindful of what is sensitive and what you reveal, even in friendly conversation, and recognising the techniques" },
          { id: "b", label: "Refusing to speak to anyone" },
          { id: "c", label: "Sharing everything freely to seem helpful" },
          { id: "d", label: "Assuming all conversations are harmless" },
        ],
        correctChoiceId: "a",
        explanation: "Because elicitation bypasses the awareness that would defend against it, the foundation is information awareness: noticing when a pleasant conversation drifts toward sensitive topics and recognising techniques like flattery and disclosure reciprocity as they happen makes you a much harder target.",
      },
    ],
    sources: [
      { label: "Elicitation (intelligence) (overview)", note: "Reference on conversational information-gathering techniques.", type: "Reference", url: "https://en.wikipedia.org/wiki/Elicitation_technique" },
      { label: "CISA / FBI guidance on elicitation", note: "Official guidance on recognising and resisting elicitation.", type: "Reference", url: "https://www.cisa.gov/news-events/news/avoiding-social-engineering-and-phishing-attacks" },
    ],
  },
  {
    concept: "Dark Patterns",
    level: "A-level",
    summary: "interface choices that steer users against their interests",
    estimatedMinutes: 8,
    deck: "Some frustrations in apps and websites are not accidents but design — deliberate tricks that nudge you into spending more, sharing more, or agreeing to things you did not intend. 'Dark patterns' are manipulative interfaces engineered to serve the business at the user's expense, and learning to spot them is a genuine consumer defence.",
    keyTerms: [
      { label: "Dark patterns", value: "Deceptive interface designs that trick users into actions against their own interests." },
      { label: "Roach motel", value: "A design that is easy to get into (signing up) but hard to get out of (cancelling)." },
      { label: "Confirmshaming", value: "Guilt-tripping language that shames users for declining an option." },
      { label: "Misdirection and hidden costs", value: "Steering attention or concealing charges until late in a process." },
    ],
    sections: [
      {
        heading: "Manipulation by design",
        body: [
          `Dark patterns (or "deceptive patterns") are user-interface designs deliberately crafted to trick users into doing things they did not intend and that are not in their interest — signing up for things, spending more, sharing more data, or giving up rights. The designer Harry Brignull coined the term. The key point is that these are not accidental flaws but intentional choices, engineered to exploit users' psychology and habits for the business's benefit. When an app makes something frustratingly difficult, that difficulty is sometimes a feature, not a bug.`,
          `They work by exploiting how people actually use interfaces: our tendency to take the path of least resistance, to skim rather than read, to trust default settings, and to give up when a task is made tedious. By quietly steering these tendencies toward the business's goals, companies influence behaviour without users realising. The manipulation hides in the design itself, which most users assume is neutral, making dark patterns a particularly insidious and widespread form of manipulation.`,
        ],
      },
      {
        heading: "A catalogue of tricks",
        body: [
          `Dark patterns come in recognisable types. The "roach motel" makes it easy to get in but hard to get out: signing up for a subscription takes one click, but cancelling requires navigating a maze or a phone call — exploiting the friction to keep you paying. "Confirmshaming" uses guilt-tripping language, so the decline option reads something like "No thanks, I don't want to save money". "Hidden costs" reveal extra charges only at the final step, after you have invested effort. "Sneak into basket" adds items you did not choose, relying on you not noticing.`,
          `Others include "misdirection", which uses visual design to draw attention toward the choice the business wants and away from the one you might prefer — the desired button large and colourful, the alternative tiny and grey. "Forced continuity" charges you when a free trial silently converts. "Trick questions" use confusing wording or double negatives so you agree without realising. Manipulative urgency and fake scarcity pressure quick decisions. Once you know these named patterns, you start seeing them everywhere.`,
        ],
      },
      {
        heading: "Why dark patterns are so common",
        body: [
          `Dark patterns are pervasive because they are effective at boosting business metrics — more sign-ups, more purchases, more data, fewer cancellations — and the manipulation is often subtle enough to escape notice or regulation. A company measured on conversions and retention faces constant temptation to nudge those numbers through design tricks, and the effects can be large: making cancellation slightly harder measurably reduces cancellations. The short-term incentives favour manipulation, even though it erodes trust over time.`,
          `There is a real ethical and increasingly legal problem here. Dark patterns undermine informed choice, extracting money, data and consent that users did not freely intend to give. Regulators in various jurisdictions have begun to act — for example, requiring that cancelling a subscription be as easy as signing up — but enforcement lags behind the ingenuity of the practices, which is why individual awareness is currently the most reliable defence.`,
        ],
      },
      {
        heading: "Spotting and resisting them",
        body: [
          `The primary defence is awareness: learning to recognise the named patterns so you can spot them in action and resist. When a "decline" option is worded to shame you, when cancellation is suspiciously difficult, when costs appear only at the last step, when a button is designed to catch your eye while the alternative hides — recognising these as deliberate manipulations, rather than accepting them as normal, breaks their power. A manipulation you can see is far less effective than one you cannot.`,
          `Practical habits help: read carefully rather than skimming, especially at moments of agreement, payment or sign-up; be suspicious of default settings and check what you are actually agreeing to; look actively for the option the design is steering you away from; set reminders before free trials convert; and slow down when you feel rushed by manufactured urgency. A company willing to manipulate you through its interface is signalling something about how it regards you.`,
        ],
      },
      {
        heading: "The 'no thanks, I hate saving money' button",
        body: [
          `You meet dark patterns constantly: the subscription that is one click to start and a phone call to cancel, the "No thanks, I don't want to save money" decline button, the surprise fees at checkout, the pre-ticked box sharing your data, the free trial that quietly starts charging, the giant "Accept All" cookie button beside a hidden "Reject". Once you know these are deliberate tricks with names — roach motel, confirmshaming, hidden costs, misdirection, forced continuity — you stop experiencing them as your own confusion and start seeing them as manipulation by design. The defence is awareness and deliberate slowness: read before you agree, hunt for the option the interface is hiding, and distrust defaults and manufactured urgency.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What are 'dark patterns'?",
        choices: [
          { id: "a", label: "Interface designs deliberately crafted to trick users into actions against their own interests" },
          { id: "b", label: "Accidental design flaws with no intent behind them" },
          { id: "c", label: "Colour schemes used at night" },
          { id: "d", label: "Security features that protect users" },
        ],
        correctChoiceId: "a",
        explanation: "Dark patterns are intentional, not accidental: interfaces engineered to exploit users' psychology and habits — steering them to spend more, share more, or give up rights — for the business's benefit at the user's expense.",
      },
      {
        dimension: "depth",
        prompt: "What is the 'roach motel' dark pattern?",
        choices: [
          { id: "a", label: "A design that is easy to get into (signing up) but hard to get out of (cancelling)" },
          { id: "b", label: "A design that shames users for declining" },
          { id: "c", label: "A design that hides all prices" },
          { id: "d", label: "A design that adds items to your basket" },
        ],
        correctChoiceId: "a",
        explanation: "The roach motel makes signing up a single click while cancelling requires navigating a maze or calling a phone line, exploiting friction to keep users paying for things they no longer want.",
      },
      {
        dimension: "depth",
        prompt: "What is 'confirmshaming'?",
        choices: [
          { id: "a", label: "Guilt-tripping language that shames users for declining an option, like 'No thanks, I don't want to save money'" },
          { id: "b", label: "Hiding extra costs until checkout" },
          { id: "c", label: "Adding items you did not choose" },
          { id: "d", label: "Charging after a free trial silently converts" },
        ],
        correctChoiceId: "a",
        explanation: "Confirmshaming manipulates through emotion, wording the decline option to shame the user for choosing it, so opting out feels like admitting something foolish or negative.",
      },
      {
        dimension: "reasoning",
        prompt: "Why are dark patterns so common despite eroding trust?",
        choices: [
          { id: "a", label: "They effectively boost business metrics like sign-ups and retention, and the manipulation is subtle enough to escape notice or regulation" },
          { id: "b", label: "Because users prefer manipulative designs" },
          { id: "c", label: "Because they are required by law" },
          { id: "d", label: "Because they reduce company profits" },
        ],
        correctChoiceId: "a",
        explanation: "Short-term incentives favour manipulation: making cancellation harder measurably reduces cancellations, and the tricks are often subtle enough to escape notice or lagging regulation — even though they erode user trust over time.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the primary defence against dark patterns?",
        choices: [
          { id: "a", label: "Awareness — recognising the named patterns as deliberate manipulation so you can spot and resist them" },
          { id: "b", label: "Always clicking the largest, most colourful button" },
          { id: "c", label: "Never reading anything before agreeing" },
          { id: "d", label: "Trusting that all interface design is neutral" },
        ],
        correctChoiceId: "a",
        explanation: "A manipulation you can see is far less effective than one you cannot; recognising confirmshaming, roach motels, hidden costs and misdirection as deliberate tricks — plus reading carefully and distrusting defaults — restores your ability to choose what you actually intend.",
      },
    ],
    sources: [
      { label: "Dark pattern / deceptive design (overview)", note: "Reference on manipulative interface designs and their types.", type: "Reference", url: "https://en.wikipedia.org/wiki/Dark_pattern" },
      { label: "Deceptive Design (Harry Brignull)", note: "Catalogue and explanation of common dark patterns.", type: "Reference", url: "https://www.deceptive.design/" },
    ],
  },
  {
    concept: "Ethical Persuasion",
    level: "University",
    summary: "influence that preserves truth, consent and agency",
    estimatedMinutes: 9,
    deck: "Everything in this topic can be used to help or to harm. The same principles that power scams also power honest advocacy, good teaching and public-health campaigns. Ethical persuasion is the line between the two — influence that respects the other person's truth, consent and freedom to choose, rather than exploiting them.",
    keyTerms: [
      { label: "Ethical persuasion", value: "Influence that preserves the other person's access to truth, consent and free agency." },
      { label: "Persuasion vs manipulation", value: "Influence that respects autonomy, versus influence that subverts it through deception or exploitation." },
      { label: "Transparency", value: "Being honest about what you are doing and why, rather than hiding your intent." },
      { label: "Serving the persuaded's interest", value: "Genuine concern for the other person's good, not only your own." },
    ],
    sections: [
      {
        heading: "The same tools, opposite ends",
        body: [
          `Everything in this topic — the principles of influence, authority, reciprocity, scarcity, social proof, pretexting, persuasion techniques — is in itself ethically neutral. The same tools a scammer uses to defraud can be used by a doctor to persuade a patient to take life-saving medication, by a charity to motivate genuine help, by a teacher to engage students. Influence is unavoidable and often good; the question is not whether to influence but how.`,
          `The central distinction is between persuasion, which respects the other person's rational agency and freedom to choose, and manipulation, which subverts it. Persuasion brings someone to a genuine, freely made decision by giving them good reasons and true information. Manipulation gets someone to a decision by bypassing or exploiting their judgement — through deception, hidden pressure, exploiting weaknesses, or triggering automatic responses with false cues. Both may aim to change behaviour, but persuasion treats the person as a rational agent to be convinced, manipulation as an object to be steered.`,
        ],
      },
      {
        heading: "Truth, consent and agency",
        body: [
          `Several criteria distinguish the two. Truth: ethical persuasion uses honest information and valid reasoning, while manipulation relies on deception, false cues or misleading framing. Persuading with genuine facts respects the person; deceiving them does not, however good the goal. Transparency: ethical influence is generally open about what it is doing — an argument presents itself as an argument — while manipulation works covertly, hiding its true intent so the target does not realise they are being influenced.`,
          `The most important criterion is agency: ethical persuasion preserves the other person's freedom to decide, leaving them genuinely able to say no, while manipulation undermines that freedom through pressure or exploiting weaknesses. A useful test is whether the influence would still work if the target were fully aware of what was being done. Honest persuasion is robust to transparency — a good argument still convinces even when you know it is an argument — while manipulation often collapses once seen, as a manufactured scarcity or false authority loses its power once recognised. If a technique only works while hidden, that is a strong sign it is manipulative.`,
        ],
      },
      {
        heading: "Whose interest, and the ends-and-means problem",
        body: [
          `Another dimension is whose interest the influence serves. Ethical persuasion is exercised with genuine concern for the other person's good, or at least in a fair exchange, whereas manipulation serves the manipulator at the target's expense — a doctor persuading a patient acts in the patient's interest; a scammer acts purely against it. This is not a perfect criterion, since persuasion can be self-interested and still ethical, as in fair commerce, but exploiting someone against their own interest is a hallmark of manipulation.`,
          `A tempting but dangerous line is that manipulation is justified when the end is good — that it is fine to deceive or pressure someone "for their own good" or for a worthy cause. Manipulating people even toward good ends still disrespects their autonomy, treating them as objects to be steered rather than agents to be reasoned with, and it sets a precedent easily abused: since almost everyone believes their own ends are good, licensing manipulation for good ends licenses it for everyone. How we influence carries moral weight independent of the goal.`,
        ],
      },
      {
        heading: "Living with influence honestly",
        body: [
          `This has two practical payoffs. The first is a guide to your own conduct: when you seek to influence others, you can aim to persuade rather than manipulate — being honest, transparent about your intent, respectful of the other person's freedom to decline, and mindful of their interests. This is not only more ethical but more sustainable, since manipulation, once discovered, destroys trust while honest persuasion builds it.`,
          `The second is defensive: the same criteria help you recognise when you are being manipulated. When influence relies on deception, hides its intent, pressures or exploits you, works only because you cannot see it clearly, or serves someone else against your interest, those are the signatures of manipulation. In a world saturated with attempts to shape our behaviour, the ability to tell honest persuasion from manipulation — and to hold to the former — is both a form of integrity and a form of self-defence.`,
        ],
      },
      {
        heading: "The line you can hold in your own life",
        body: [
          `Ethical persuasion is a standard you can apply daily, both ways. When you want someone to do something — a colleague, a friend, a customer — you can give them honest reasons and respect their freedom to say no (persuasion), or deceive, pressure and exploit them toward your desired outcome (manipulation). The transparency test clarifies it: would your influence still work if the other person saw exactly what you were doing? If yes, it is likely honest; if it only works hidden, it is likely manipulative. And on the receiving end, influence that relies on deception, hidden intent, pressure, or serving someone else against your interest is manipulation, whatever its justification.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is the central distinction between persuasion and manipulation?",
        choices: [
          { id: "a", label: "Persuasion respects the other person's rational agency and freedom to choose; manipulation subverts it" },
          { id: "b", label: "Persuasion is always dishonest; manipulation is always honest" },
          { id: "c", label: "They are the same thing" },
          { id: "d", label: "Persuasion never changes behaviour" },
        ],
        correctChoiceId: "a",
        explanation: "Persuasion brings someone to a freely made decision through good reasons and true information; manipulation bypasses or exploits their judgement through deception or hidden pressure — treating them as an object to steer rather than an agent to convince.",
      },
      {
        dimension: "depth",
        prompt: "Which criterion helps distinguish ethical persuasion from manipulation?",
        choices: [
          { id: "a", label: "Truth — ethical persuasion uses honest information and valid reasoning, while manipulation relies on deception and false cues" },
          { id: "b", label: "Volume — louder messages are more ethical" },
          { id: "c", label: "Length — longer messages are manipulative" },
          { id: "d", label: "Speed — faster persuasion is always ethical" },
        ],
        correctChoiceId: "a",
        explanation: "Ethical persuasion is honest, using true information and valid reasoning, while manipulation typically relies on deception, false cues or misleading framing — alongside criteria of transparency and respect for agency.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the 'transparency test' for distinguishing persuasion from manipulation?",
        choices: [
          { id: "a", label: "Whether the influence would still work if the target were fully aware of what was being done" },
          { id: "b", label: "Whether the message is written clearly" },
          { id: "c", label: "Whether the persuader speaks quickly" },
          { id: "d", label: "Whether the target agrees immediately" },
        ],
        correctChoiceId: "a",
        explanation: "Honest persuasion is robust to transparency — a good argument still convinces when you know it is an argument — while manipulation often collapses once seen, so a technique that only works while hidden is a strong sign of manipulation.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is 'manipulation is justified when the end is good' a dangerous argument?",
        choices: [
          { id: "a", label: "It still disrespects autonomy and sets a precedent easily abused, since almost everyone believes their own ends are good" },
          { id: "b", label: "Because good ends never exist" },
          { id: "c", label: "Because manipulation always fails" },
          { id: "d", label: "Because the ends never matter at all" },
        ],
        correctChoiceId: "a",
        explanation: "Manipulating people even toward good ends treats them as objects to steer rather than agents to reason with, and licensing it for 'good' ends licenses it for everyone — so how we influence carries moral weight independent of the goal.",
      },
      {
        dimension: "reasoning",
        prompt: "How do the criteria for ethical persuasion also serve as a defence?",
        choices: [
          { id: "a", label: "When influence relies on deception, hides its intent, pressures or exploits you, or works only unseen, those are signatures of manipulation to recognise" },
          { id: "b", label: "They guarantee you will never be influenced" },
          { id: "c", label: "They only apply to your own conduct" },
          { id: "d", label: "They make all persuasion impossible" },
        ],
        correctChoiceId: "a",
        explanation: "The same criteria — truth, transparency, respect for agency, serving the target's interest — let you spot manipulation: influence that deceives, hides its intent, pressures, or serves someone else against your interest is manipulation, and recognising it is your protection.",
      },
    ],
    sources: [
      { label: "Manipulation (SEP)", note: "Stanford Encyclopedia entry on the ethics of manipulation and persuasion.", type: "Reference", url: "https://plato.stanford.edu/entries/manipulation/" },
      { label: "Persuasion vs manipulation (overview)", note: "Reference on the ethical distinction between influence types.", type: "Reference", url: "https://en.wikipedia.org/wiki/Psychological_manipulation" },
    ],
  },
];

export const socialEngineeringLessons = buildAuthoredLessons(
  "social-engineering",
  socialEngineering,
);
