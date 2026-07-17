import { buildAuthoredLessons, type AuthoredLesson } from "./types";

// Ten hand-written Sociology lessons: researched, concept-specific prose with
// named thinkers, each closing on an everyday example, plus genuine recall
// quizzes.
const sociology: AuthoredLesson[] = [
  {
    concept: "Institutional Isomorphism",
    level: "University",
    summary: "why organisations in a field converge on the same form regardless of whether it works",
    estimatedMinutes: 9,
    deck: "Every hospital, university and regulator in a sector looks broadly like the others — same structures, same committees, same job titles. Efficiency does not explain it, because the convergence continues where the practices demonstrably do not work. DiMaggio and Powell's answer is that organisations are competing for legitimacy rather than performance.",
    keyTerms: [
      { label: "Organisational field", value: "The set of organisations that constitute a recognised area of institutional life and watch each other." },
      { label: "Coercive isomorphism", value: "Convergence driven by regulation or pressure from organisations you depend on." },
      { label: "Mimetic isomorphism", value: "Copying peers under uncertainty, because imitation is a defensible response to not knowing." },
      { label: "Decoupling", value: "Adopting a structure formally while insulating actual work from it — the standard resolution." },
    ],
    sections: [
      {
        heading: "The puzzle Weber could not solve",
        body: [
          `Paul DiMaggio and Walter Powell's 1983 paper opens with a correction to Weber. Weber explained bureaucratisation as driven by competition and efficiency — the rational-legal form wins because it outperforms. DiMaggio and Powell observe that by the late twentieth century, the spread was still happening while the efficiency story had stopped being plausible: organisations were becoming more similar in fields where nobody could demonstrate that the converging form was better, and the convergence often continued after practices had been shown not to work.`,
          `Their reframing is that once a field is established — once a set of organisations recognise each other as a field, watch each other, hire from each other and are evaluated together — the dominant force stops being competition for resources and becomes competition for legitimacy. Structural change is then driven by the need to be recognised as a proper instance of the kind of organisation you claim to be. And the payoff is that this predicts convergence on forms that make no operational sense, which the efficiency account cannot do.`,
        ],
      },
      {
        heading: "Three mechanisms",
        body: [
          `Coercive isomorphism comes from formal and informal pressure by organisations you depend on, and from cultural expectations. Regulation is the obvious form: comply or lose your licence. But the informal version is more pervasive — funders expect certain governance structures, large customers require particular certifications from suppliers, and the requirement propagates down a supply chain until an entire sector has the same management system because one buyer asked. Nobody assessed whether it helps at any point in that chain.`,
          `Mimetic isomorphism responds to uncertainty. When goals are ambiguous, technology is poorly understood, or success is hard to measure, copying a respected peer is the cheapest available strategy — and it is genuinely rational, since you cannot be blamed for doing what the leading organisation does. Consultancies industrialise this, carrying models between clients and producing convergence as a direct product. Normative isomorphism comes from professionalisation: professionals trained in the same programmes, certified by the same bodies, moving between organisations and belonging to networks that span them, carry a shared idea of what a proper organisation looks like. The finance director who arrives from a competitor does not import their methods to sabotage you; they import them because that is what a finance function *is* to them.`,
        ],
      },
      {
        heading: "Legitimacy as a survival resource",
        body: [
          `The mechanism holding this together is that legitimacy is not decoration — it is a resource organisations need to survive, and often needed more urgently than performance. An organisation that looks wrong for its field struggles to raise money, hire, win contracts and survive scrutiny, regardless of results. One that looks right is granted the benefit of the doubt when it fails, because its failures read as bad luck rather than as evidence of unfitness. So adopting the expected form has real returns that have nothing to do with whether the form does anything.`,
          `This is what makes the theory testable rather than cynical. It predicts that practices will spread fastest where outcomes are hardest to measure, that they will persist after being discredited if abandoning them would look irresponsible, and that adoption will correlate with visibility to funders rather than with need. Those predictions hold up across sectors — which is why a practice being demonstrably useless is such a weak predictor of its disappearance. The organisation that drops it is the one that must explain why it alone does not do the responsible thing, and that explanation is expensive even when it is correct.`,
        ],
      },
      {
        heading: "Decoupling, and its cost",
        body: [
          `The resolution organisations reach was named by Meyer and Rowan: decouple. Adopt the structure formally, display it to the outside, and insulate the actual work from it. The certification exists, the policy is written, the committee meets, and the people doing the work carry on much as before, with a layer of documentation produced for inspection. This is not simply hypocrisy — it is an adaptive response to genuinely conflicting demands, since the environment requires the form and the work requires something else, and decoupling delivers both.`,
          `It also has real costs that get understated. Someone must maintain the parallel reality, and that work is substantial and produces nothing. Everyone learns that formal structures are theatre, which corrodes the ones that matter — the organisation that decouples its ethics policy has taught its staff how to read every policy. And decoupling fails when the ceremony collides with something physical: the safety management system that exists on paper is fine until the accident, at which point the gap between the documented process and the actual one is the finding. The uncomfortable implication is that the pressure for isomorphism actively produces this, by demanding forms that organisations cannot honestly adopt and cannot afford to refuse.`,
        ],
      },
      {
        heading: "Why 'best practice' is a legitimacy claim",
        body: [
          `The useful reflex is to ask, of any practice being adopted, which of the three mechanisms is actually driving it, because the answer is rarely evidence. If it arrived because a regulator or major customer required it, that is coercive and the honest question is what it costs rather than whether it works. If it arrived because respected peers do it, that is mimetic, and note that the peers may be copying each other. If it arrived with a new senior hire or a professional body, that is normative. Notice specifically that "best practice" is a claim about legitimacy wearing the costume of a claim about evidence — it means other reputable organisations do this, which is precisely the mimetic mechanism describing itself. And the diagnostic that cuts through: ask what would happen if you simply did not do it, because if the answer is a reputational problem rather than an operational one, you have found the mechanism.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "reasoning",
        prompt: "What puzzle does institutional isomorphism solve that the efficiency account cannot?",
        choices: [
          { id: "a", label: "Convergence on forms nobody can show are better, continuing after they are discredited" },
          { id: "b", label: "The tendency of bureaucracies to grow larger than the tasks assigned to them require" },
          { id: "c", label: "Why competitive markets produce more organisational variety than monopolies do" },
          { id: "d", label: "Why some organisations resist adopting any standardised structures at all" },
        ],
        correctChoiceId: "a",
        explanation: "Weber's rational-legal form wins by outperforming, but the spread continued once that story stopped being plausible. Once a field is established, the competition is for legitimacy rather than resources.",
      },
      {
        dimension: "depth",
        prompt: "What drives mimetic isomorphism?",
        choices: [
          { id: "a", label: "Uncertainty — copying a respected peer is cheap and hard to be blamed for" },
          { id: "b", label: "Legal and licensing requirements imposed by regulators across an entire sector" },
          { id: "c", label: "Professional training that standardises what managers believe an organisation is" },
          { id: "d", label: "Competitive pressure to match the cost structures that rivals have achieved" },
        ],
        correctChoiceId: "a",
        explanation: "When goals are ambiguous and success is hard to measure, imitation is genuinely rational. Consultancies industrialise it, carrying models between clients and producing convergence as a direct product.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is legitimacy described as a survival resource?",
        choices: [
          { id: "a", label: "An organisation that looks right has its failures read as bad luck" },
          { id: "b", label: "Legitimacy can be exchanged more or less directly for funding in most sectors" },
          { id: "c", label: "Legitimate organisations attract better staff and therefore genuinely perform better" },
          { id: "d", label: "Regulators concentrate their investigations on organisations that appear illegitimate" },
        ],
        correctChoiceId: "a",
        explanation: "Looking wrong makes it hard to raise money, hire and survive scrutiny regardless of results. So adopting the expected form has returns unrelated to whether the form does anything.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does a discredited practice often survive being discredited?",
        choices: [
          { id: "a", label: "Dropping it means explaining why you alone skip the responsible thing" },
          { id: "b", label: "Evidence of the failure rarely reaches the people who adopted the practice" },
          { id: "c", label: "Sunk costs in the practice make abandoning it financially irrational to attempt" },
          { id: "d", label: "Practices are defended by the professionals whose own jobs depend upon them" },
        ],
        correctChoiceId: "a",
        explanation: "That explanation is expensive even when it is correct. The theory predicts practices spread fastest where outcomes are hardest to measure and adoption tracks visibility to funders rather than need.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the understated cost of decoupling?",
        choices: [
          { id: "a", label: "Staff learn that formal structures are theatre, and read every policy that way" },
          { id: "b", label: "It exposes the organisation to immediate sanction from its regulator" },
          { id: "c", label: "It prevents the organisation from claiming any legitimacy at all" },
          { id: "d", label: "It requires abandoning the informal practices that actually work" },
        ],
        correctChoiceId: "a",
        explanation: "The organisation that decouples its ethics policy has taught its staff how to read every policy. And the safety system that exists on paper is fine until the accident — while isomorphic pressure actively produces this.",
      },
    ],
    sources: [
      { label: "DiMaggio and Powell, 'The Iron Cage Revisited' (overview)", note: "Reference on the three mechanisms and the organisational field.", type: "Reference", url: "https://en.wikipedia.org/wiki/Institutional_isomorphism" },
      { label: "Meyer and Rowan on institutionalised organisations (overview)", note: "Reference on myth, ceremony and decoupling.", type: "Reference", url: "https://en.wikipedia.org/wiki/New_institutionalism" },
    ],
  },
  {
    concept: "Pluralistic Ignorance",
    level: "University",
    summary: "when everyone privately disagrees with what everyone publicly supports",
    estimatedMinutes: 9,
    deck: "A norm can be sustained indefinitely by a population in which nobody believes in it, because each person infers everyone else's belief from their public compliance — and their compliance is itself an inference from yours. The equilibrium is stable, it can be enormously costly, and it can collapse in a week.",
    keyTerms: [
      { label: "Pluralistic ignorance", value: "Where most people privately reject a norm but wrongly believe most others accept it." },
      { label: "Inference from behaviour", value: "The error at the core: reading public compliance as evidence of private belief." },
      { label: "Preference falsification", value: "Kuran's term for misrepresenting your view under perceived social pressure." },
      { label: "Revolutionary cascade", value: "The sudden collapse when falsified preferences become visible and thresholds unlock in sequence." },
    ],
    sections: [
      {
        heading: "The mechanism",
        body: [
          `Floyd Allport named it in the 1920s and the mechanism is precise. Each person privately rejects a norm. Each observes that everyone else appears to comply. Each concludes that they alone are the deviant, and complies to avoid exposure. Their compliance is then the evidence from which everyone else draws the same conclusion. The norm holds with unanimous private opposition and unanimous public support, and nobody is lying about anything they were asked.`,
          `The error is specific: inferring beliefs from behaviour without correcting for the fact that behaviour is itself an inference from others' behaviour. Everyone treats the crowd's compliance as independent evidence about what the crowd thinks, when it is nothing of the sort — it is a hall of mirrors in which each reflection is being counted as a separate witness. And the equilibrium is genuinely stable rather than fragile, because every individual acting on the false belief supplies the evidence sustaining it in everyone else. It does not decay on its own. It has to be broken.`,
        ],
      },
      {
        heading: "The empirical cases",
        body: [
          `The best-documented case is college drinking, from Prentice and Miller's work. Students consistently believe other students are more comfortable with heavy drinking than they themselves are — and the belief is wrong on average, because most students are privately uneasy. The consequence is not merely private discomfort: men in particular shift their actual attitudes over time toward the imagined norm, so the misperception generates the reality it started by misdescribing. The correction is unusually cheap and works: telling students the accurate distribution of private attitudes reduces drinking, because the norm was never load-bearing.`,
          `The historical cases are larger. Segregation in the American South was sustained partly by white populations who privately opposed it and each believed their neighbours supported it — the classic finding is that private attitudes had shifted well before public expression caught up. Communist Eastern Europe ran on it: Timur Kuran's account of 1989 turns on the observation that regime support was overwhelmingly falsified, so a system with almost no genuine believers appeared solid to everyone inside it, including to the regime, which was reading the same false signal as everyone else. The Emperor's New Clothes is the folk version and it is a precise model, including the detail that a child breaks it — someone outside the incentive structure.`,
        ],
      },
      {
        heading: "Why it breaks suddenly",
        body: [
          `Kuran's contribution is preference falsification and the cascade, and it explains why these systems collapse without warning. Each person has a threshold: the number of others who must dissent publicly before they will. Thresholds vary enormously — a few dissent at zero, most need substantial cover, some never. As long as visible dissent stays below the lowest thresholds, nothing moves and the system looks permanent. But if something pushes visible dissent past the first threshold, that person's dissent unlocks the next, which unlocks the next, and the sequence runs to completion in days.`,
          `The consequences are worth sitting with. The system's apparent stability contains no information about its actual support, so a regime with ninety percent private opposition looks exactly like one with ninety percent private support right up until it does not. Nobody can predict the collapse, including the participants, because the private distribution is unobservable to everyone by construction — the experts who failed to predict 1989 were not incompetent, they were reading the only data that existed. And the trigger can be trivial, since what matters is not the event's significance but whether it makes falsification visible: after the fact, everyone constructs an account in which the cause was proportionate to the effect, and that account is usually fiction.`,
        ],
      },
      {
        heading: "What breaks it, and what does not",
        body: [
          `The mechanism identifies its own remedies. Accurate information about the private distribution dissolves it directly, which is why norm-correction interventions work when the norm is genuinely misperceived. Anonymous expression — a secret ballot, an unattributed survey — reveals the distribution without requiring anyone to go first, which is a substantial part of what the secret ballot is for. And the first public dissenter carries a wildly disproportionate cost and effect: they take the entire risk of being the visible deviant, and their reward is unlocking everyone whose threshold was one.`,
          `What does not break it is private conviction, however widespread — and this is the disturbing part. Everyone can privately think the arrangement is absurd, forever, at no risk of it ending, because private belief generates no evidence. The norm is sustained by behaviour and only behaviour changes it. There is also a genuine limit worth stating: not every unpopular norm is pluralistic ignorance. Sometimes the majority really does support the thing, and the person who assumes silent agreement is projecting. The diagnostic question is whether people comply when unobserved — pluralistic ignorance predicts compliance collapses in private, while genuine belief predicts it does not.`,
        ],
      },
      {
        heading: "Why the meeting goes quiet",
        body: [
          `The everyday version is the meeting where a decision passes with no objection and half the room complains about it afterwards. Nobody was suppressed; each person read the silence as agreement and added their own silence to the evidence, and the decision now carries a unanimity it never had. Notice that the tell is your own reasoning: if you are staying quiet because you assume you are the only one, you are executing the mechanism, and the assumption is wrong more often than not. Notice also what this says about anyone who asks whether everyone is comfortable and hears yes — they have learned nothing, because the question was asked in the format that produces the error. The costly move is speaking first, and it is worth understanding that its value is not your objection but the cover it gives everyone whose threshold was one.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is the specific error at the core of pluralistic ignorance?",
        choices: [
          { id: "a", label: "Reading behaviour as belief, when the behaviour is itself read off others" },
          { id: "b", label: "Failing to recognise that the majority holds a view different from your own" },
          { id: "c", label: "Deliberately concealing your view in order to avoid a social sanction" },
          { id: "d", label: "Overestimating how closely others are attending to your own compliance" },
        ],
        correctChoiceId: "a",
        explanation: "A hall of mirrors where each reflection is counted as a separate witness. And the equilibrium is stable rather than fragile, because everyone acting on the false belief supplies the evidence sustaining it.",
      },
      {
        dimension: "reasoning",
        prompt: "What does the college drinking case add beyond misperception?",
        choices: [
          { id: "a", label: "Attitudes shift toward the imagined norm, so the error creates the reality" },
          { id: "b", label: "Students deliberately misreport their private attitudes to the researchers" },
          { id: "c", label: "Heavy drinkers are simply more visible, which explains the whole effect" },
          { id: "d", label: "The misperception is confined to students in their first year" },
        ],
        correctChoiceId: "a",
        explanation: "Men in particular converge on the imagined norm over time. The correction is unusually cheap and works — telling students the accurate distribution reduces drinking, because the norm was never load-bearing.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does Kuran's cascade model explain sudden collapse?",
        choices: [
          { id: "a", label: "Thresholds vary, so passing the lowest unlocks the next in sequence" },
          { id: "b", label: "Regimes lose the capacity to enforce compliance once opposition becomes visible" },
          { id: "c", label: "Private opposition accumulates until it exceeds a fixed critical mass of the population" },
          { id: "d", label: "External shocks eventually destroy the institutions that had sustained the norm" },
        ],
        correctChoiceId: "a",
        explanation: "Below the lowest threshold nothing moves and the system looks permanent. Which is why a regime with ninety percent private opposition looks exactly like one with ninety percent support until it does not.",
      },
      {
        dimension: "reasoning",
        prompt: "Why could nobody predict 1989, including the participants?",
        choices: [
          { id: "a", label: "The private distribution is unobservable, so stability carries no information" },
          { id: "b", label: "Intelligence agencies had been denied access to the relevant internal party data" },
          { id: "c", label: "The events that triggered the collapse were genuinely unpredictable in themselves" },
          { id: "d", label: "Participants deliberately concealed their intentions from any outside observer" },
        ],
        correctChoiceId: "a",
        explanation: "The experts were reading the only data that existed. The trigger can be trivial, since what matters is whether it makes falsification visible — and the proportionate cause everyone constructs afterwards is usually fiction.",
      },
      {
        dimension: "reasoning",
        prompt: "How can you distinguish pluralistic ignorance from a genuinely popular norm?",
        choices: [
          { id: "a", label: "Ask whether compliance collapses when nobody is observing" },
          { id: "b", label: "Survey participants about whether they personally agree with the norm" },
          { id: "c", label: "Check whether the norm has persisted for more than a single generation" },
          { id: "d", label: "Determine whether any formal sanction is attached to breaking it" },
        ],
        correctChoiceId: "a",
        explanation: "Not every unpopular norm is pluralistic ignorance — sometimes the majority really does support it and the dissenter is projecting. Private compliance is the discriminating evidence.",
      },
    ],
    sources: [
      { label: "Pluralistic ignorance (overview)", note: "Reference on Allport's mechanism, Prentice and Miller, and the historical cases.", type: "Reference", url: "https://en.wikipedia.org/wiki/Pluralistic_ignorance" },
      { label: "Kuran, Private Truths, Public Lies (overview)", note: "Reference on preference falsification and revolutionary cascades.", type: "Reference", url: "https://en.wikipedia.org/wiki/Preference_falsification" },
    ],
  },
  {
    concept: "Total Institutions",
    level: "University",
    summary: "how an institution dismantles a self, and what that reveals about selves in general",
    estimatedMinutes: 9,
    deck: "Goffman spent a year undercover in a Washington asylum and came out arguing that prisons, monasteries, boarding schools, ships and psychiatric hospitals are one thing wearing different justifications. What they share is a procedure for taking a person apart — and the procedure works, which is the finding that should worry you.",
    keyTerms: [
      { label: "Total institution", value: "A place of residence and work where a large number of people lead an enclosed, formally administered life." },
      { label: "Mortification of the self", value: "The systematic stripping of the supports on which an identity rested." },
      { label: "The moral career", value: "The predictable sequence of changes in how an inmate understands themselves over time." },
      { label: "Secondary adjustments", value: "Unauthorised arrangements by which inmates get satisfactions the institution forbids." },
    ],
    sections: [
      {
        heading: "One structure, many justifications",
        body: [
          `Erving Goffman worked undercover as an assistant athletic director at St Elizabeth's Hospital in 1955 and 1956, and Asylums (1961) reports what he saw. His organising move is a definition that cuts across every category we normally use: a total institution is a place of residence and work where a large number of similarly situated individuals, cut off from the wider society for an appreciable period, lead an enclosed and formally administered round of life. That definition puts the prison, the monastery, the boarding school, the barracks, the ship and the psychiatric hospital in a single class — and the point of the provocation is that their shared structure predicts their behaviour better than their stated purposes do.`,
          `The defining feature is the collapse of the boundaries that organise ordinary life. Normally you sleep, work and play in different places, with different people, under different authorities, and none of them sees the whole of you. In a total institution all activity happens in one place, under one authority, in the immediate company of a large batch of others treated identically, on a schedule imposed from above and serving the institution's aims. The result is that there is no offstage — no context in which you are not the role, and no audience before whom you can be someone else. That is a specific structural condition, and it is what produces the effects, regardless of whether the institution intends healing or punishment.`,
        ],
      },
      {
        heading: "Mortification",
        body: [
          `Goffman's central concept is mortification of the self, and its power comes from his showing that a self is not an inner essence but a standing achievement — sustained by props, and removable by removing them. The entry procedures do exactly this and are strikingly consistent across institution types. Personal possessions are confiscated, and identity kit with them: the clothes, the haircut, the cosmetics by which you present a face. Your name is replaced with a number or a generic term. Your history is documented in a file compiled by others and available to staff. You are washed, searched, photographed and assigned.`,
          `Then come the ongoing indignities, which are not sadism but structure. You must request permission for things adults do unthinkingly — to have a drink, to use a toilet, to make a telephone call — which enacts the dependency continuously. Privacy is abolished, so no backstage exists in which to be the person you were. Staff read your file and know things about you that you cannot know about them, and the asymmetry is total. Goffman's point is that this sequence reliably produces an inmate out of a person, and it works on anyone. The self that arrived was not weak; it was contextual, and the context has been removed.`,
        ],
      },
      {
        heading: "The moral career and its cruellest turn",
        body: [
          `The inmate's understanding of themselves then follows a trajectory Goffman calls the moral career, and the psychiatric version contains his sharpest observation. On entry, the person insists they do not belong here, that there has been a mistake, that they are not like these others. This is exactly what the institution reads as lack of insight — a symptom, evidence for the diagnosis. Meanwhile accepting the institution's account of you, agreeing that you are ill and belong here, is recorded as progress.`,
          `So the institution is arranged such that resistance confirms the classification and submission confirms it too, and there is no move available that disconfirms anything. Goffman's term for the resulting logic is the betrayal funnel: the relatives, doctors and officials who committed you each pass you along while framing the next step as being for your benefit, and the file follows, and by the time you are inside, the account of you has been assembled by everyone except you. What that exposes is not that psychiatry is malicious but something structural — an institution with the authority to interpret your behaviour, and no obligation to be interpretable in return, cannot be argued with, because your argument is data for it.`,
        ],
      },
      {
        heading: "What survives, and where the theory bends",
        body: [
          `The genuinely humane half of the book is Goffman's insistence that mortification is never complete, and his attention to secondary adjustments: the unauthorised practices by which inmates get satisfactions the institution denies. Hidden objects, private jokes, worked angles, small illicit trades, the smuggled cigarette, the private nickname for a staff member. These look trivial and are doing something essential — Goffman argues that the self exists precisely in the gap between the person and the role assigned to them, so the inmate who works a small angle is not merely getting a cigarette but demonstrating, mainly to themselves, that they are not only what the institution says. Identity is constituted by resistance to being fully defined, which is why the practices persist even where the payoff is negligible.`,
          `The framework has limits worth naming. It flattens real moral differences between institutions — the monastery and the prison share a structure and are not the same, and the voluntariness of entry matters in ways the analysis underweights. Goffman is also unclear on whether total institutions could be reformed or are irredeemable by construction. And the ethnography is a single site in a single decade. But the core has held up: the effects follow from the structural conditions rather than from anyone's intentions, which is why well-meaning versions produce the same pathologies as punitive ones, and why the reform that changes the philosophy without changing the enclosure changes nothing.`,
        ],
      },
      {
        heading: "Why the self is a standing achievement",
        body: [
          `The uncomfortable transfer is that if mortification works on anyone, then your sense of being a stable person is being maintained by conditions rather than possessed as a property — by your clothes, your name, your history being yours to tell, and above all by having somewhere to be offstage. Notice which of those an institution removes first, and notice how many partial versions exist: the workplace with no private context, the setting where your file is written by others and you cannot read it, the arrangement where you must ask permission for ordinary things. None of them are asylums, and they run fragments of the same procedure. The diagnostic Goffman leaves you is not about buildings — it is to ask where the backstage is, and to treat its absence as the significant fact, whatever the institution says it is for.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What defines a total institution?",
        choices: [
          { id: "a", label: "One place, one authority, a batch of others, an imposed schedule" },
          { id: "b", label: "An institution that detains its residents against their expressed wishes" },
          { id: "c", label: "Any organisation exercising complete control over what its members believe" },
          { id: "d", label: "A residential setting operated by the state rather than by a private body" },
        ],
        correctChoiceId: "a",
        explanation: "It puts the prison, monastery, boarding school and ship in one class — the shared structure predicts their behaviour better than their stated purposes do. The key result is that no offstage exists.",
      },
      {
        dimension: "reasoning",
        prompt: "What does mortification of the self reveal about selves generally?",
        choices: [
          { id: "a", label: "A self is an achievement sustained by props, and removable with them" },
          { id: "b", label: "Some personalities are inherently more resilient to institutional pressure than others" },
          { id: "c", label: "Identity is substantially fixed in childhood and resists later modification" },
          { id: "d", label: "Selves are illusions that the institution merely succeeds in exposing" },
        ],
        correctChoiceId: "a",
        explanation: "Confiscating identity kit, replacing names, abolishing privacy — the procedure works on anyone. The self that arrived was not weak; it was contextual, and the context has been removed.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does the psychiatric moral career leave no disconfirming move?",
        choices: [
          { id: "a", label: "Denial reads as lack of insight; agreement reads as progress" },
          { id: "b", label: "Inmates are prevented from communicating with anyone outside the institution" },
          { id: "c", label: "Diagnoses are never revised once they have been entered into the file" },
          { id: "d", label: "Staff are professionally required to disbelieve the accounts inmates give" },
        ],
        correctChoiceId: "a",
        explanation: "Resistance confirms the classification and submission confirms it too. An institution that can interpret your behaviour with no obligation to be interpretable in return cannot be argued with — your argument is data for it.",
      },
      {
        dimension: "reasoning",
        prompt: "Why do secondary adjustments matter beyond their material payoff?",
        choices: [
          { id: "a", label: "The self lives in the gap between person and role, and they prove the gap" },
          { id: "b", label: "They provide inmates with resources genuinely needed for physical survival" },
          { id: "c", label: "They establish informal hierarchies that end up stabilising the institution" },
          { id: "d", label: "They give staff an unofficial mechanism for rewarding compliant inmates" },
        ],
        correctChoiceId: "a",
        explanation: "The smuggled cigarette and the private nickname persist even where the payoff is negligible. Identity is constituted by resistance to being fully defined — which is the humane half of the argument.",
      },
      {
        dimension: "reasoning",
        prompt: "Why do well-meaning total institutions produce the same pathologies as punitive ones?",
        choices: [
          { id: "a", label: "The effects follow from the structure, not from anyone's intentions" },
          { id: "b", label: "Staff in caring institutions are recruited from the same population as guards are" },
          { id: "c", label: "Benevolent intentions are usually a pretext for control by another name" },
          { id: "d", label: "Inmates cannot distinguish between one institutional philosophy and another" },
        ],
        correctChoiceId: "a",
        explanation: "Which is why the reform that changes the philosophy without changing the enclosure changes nothing — and why the diagnostic is to ask where the backstage is, whatever the institution says it is for.",
      },
    ],
    sources: [
      { label: "Goffman, Asylums (overview)", note: "Reference on total institutions, mortification and the moral career.", type: "Reference", url: "https://en.wikipedia.org/wiki/Asylums_(book)" },
      { label: "Total institution (overview)", note: "Reference on the definition, the typology and subsequent criticism.", type: "Reference", url: "https://en.wikipedia.org/wiki/Total_institution" },
    ],
  },
  {
    concept: "Class",
    level: "A-level",
    summary: "economic and social hierarchy shaping life chances",
    estimatedMinutes: 8,
    deck: "Class is one of the most powerful forces shaping a life, and one of the most contested concepts in sociology. Your class position influences not just your income but your health, education, opportunities and even how long you live — which is why understanding class means understanding how deeply an accident of birth shapes an entire life.",
    keyTerms: [
      { label: "Class", value: "A social hierarchy based on economic position that shapes people's life chances." },
      { label: "Life chances", value: "Weber's term for the opportunities and outcomes shaped by one's social position." },
      { label: "Marx on class", value: "Class defined by relationship to the means of production: owners versus workers." },
      { label: "Weber on class", value: "A broader view including class, status and power as separate dimensions." },
    ],
    sections: [
      {
        heading: "Hierarchy and life chances",
        body: [
          `Class is the division of society into groups based on economic position — broadly, wealth, income, occupation and their associated standing. Almost all modern societies are stratified from those with the most resources to those with the least, and Max Weber's phrase "life chances" captures why it matters: the opportunities and outcomes a person is likely to experience are strongly shaped by their class position.`,
          `Class affects far more than money. It influences the quality of your education, your health and life expectancy (lower classes typically live shorter, less healthy lives), your career, housing and exposure to crime. These advantages compound and pass across generations, so the class you are born into strongly predicts where you end up. That is why class is so consequential: an accident of birth systematically shapes the whole trajectory of a life, challenging the ideal of equal opportunity.`,
        ],
      },
      {
        heading: "Marx: owners and workers",
        body: [
          `Karl Marx defined class by the relationship to the "means of production" — the resources used to make goods, such as factories, land and capital. Under capitalism he saw two primary classes: the "bourgeoisie", who own the means of production, and the "proletariat", who own no productive property and must sell their labour to survive. This relationship, for Marx, is inherently one of exploitation and conflict, since owners profit from workers' labour.`,
          `Marx saw class as the central engine of history, with the conflict of interest between owners and workers driving social change. His prediction of proletarian revolution did not unfold as expected, and modern class structures are more complex than his two-class model. But his core insight — that class is rooted in economic relationships of ownership and power, and that these generate systematic inequality and conflict — remains deeply influential, and put economic class permanently at the centre of social analysis.`,
        ],
      },
      {
        heading: "Weber: class, status and power",
        body: [
          `Max Weber offered a more multidimensional view. He agreed economic class matters but argued stratification has three distinct dimensions: class (economic position and market situation), status (social honour or prestige), and party (power, the ability to achieve one's aims). These need not coincide — someone can have high status but modest class (an impoverished aristocrat), or wealth without prestige (a disreputable but rich person) — so stratification is more complex than economics alone.`,
          `Weber also based economic class not just on ownership but on people's overall "market situation" — their skills, qualifications and position in the labour market. This allows a graduated class structure with many positions, including a large "middle class" defined by education and occupation, rather than Marx's fundamental two-class division. The two traditions are complementary lenses: Marx emphasising ownership, exploitation and conflict; Weber emphasising market situation and the multiple dimensions of inequality.`,
        ],
      },
      {
        heading: "Class today and social mobility",
        body: [
          `Class remains powerful in contemporary societies even as its forms change and some question its importance. Debates continue over how to define and measure it and how it intersects with gender, ethnicity and geography. But the underlying reality — that economic position profoundly shapes life chances, and that advantage and disadvantage are substantially inherited — persists, and by many measures inequality between classes has grown in recent decades.`,
          `Closely tied to class is "social mobility": how far people can move between classes within a lifetime or across generations. High mobility means class is not fixed; low mobility means it is largely inherited and opportunity is unequal. Research consistently shows mobility is more limited than the ideal of meritocracy suggests — where you end up remains strongly predicted by where you started. This gap between the promise of equal opportunity and the reality of inherited advantage is a central concern of the sociology of class.`,
        ],
      },
      {
        heading: "The head start you did or didn't get",
        body: [
          `Class has shaped your life in ways that can be hard to see. The schools you could access, the expectations and connections around you, the financial security or insecurity you grew up with, and the opportunities that seemed open or closed were all strongly influenced by the class position you were born into — and that position substantially shapes where you will end up. When you notice that people from wealthier backgrounds often had advantages with little to do with talent or effort — better schooling, useful networks, a safety net to take risks — you are seeing class and life chances at work. This does not erase individual effort, which is real, but it reveals that we do not all start from the same place, and that the comfortable belief in pure meritocracy understates how much an accident of birth shapes a whole life.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What does Weber's phrase 'life chances' capture about class?",
        choices: [
          { id: "a", label: "The opportunities and outcomes a person is likely to experience across a life" },
          { id: "b", label: "The probability that a person will move into a different class during their lifetime" },
          { id: "c", label: "The range of occupations open to someone given their formal qualifications" },
          { id: "d", label: "The degree to which income varies across the course of a working life" },
        ],
        correctChoiceId: "a",
        explanation: "Life chances cover education, health, career and life expectancy — the point being that class reaches far beyond money, and is substantially inherited across generations.",
      },
      {
        dimension: "depth",
        prompt: "How did Marx fundamentally define class?",
        choices: [
          { id: "a", label: "By the relationship to the means of production — owning property or selling labour" },
          { id: "b", label: "By position in the labour market, determined by skills and scarce qualifications" },
          { id: "c", label: "By the level of social honour a group is accorded by those around it" },
          { id: "d", label: "By the share of national income a group receives relative to other groups" },
        ],
        correctChoiceId: "a",
        explanation: "The bourgeoisie own productive property while the proletariat must sell their labour — an economic relationship Marx saw as inherently exploitative. Market situation is Weber's criterion, not his.",
      },
      {
        dimension: "depth",
        prompt: "What three dimensions of stratification did Weber distinguish?",
        choices: [
          { id: "a", label: "Class as economic position, status as social honour, and party as organised power" },
          { id: "b", label: "Economic capital, cultural capital and social capital, which convert into one another" },
          { id: "c", label: "Wealth, occupation and education, the three components of socioeconomic status" },
          { id: "d", label: "Ownership, labour and land, corresponding to the three factors of production" },
        ],
        correctChoiceId: "a",
        explanation: "The three need not coincide — the impoverished aristocrat has high status and modest class. The capital triad is Bourdieu's later scheme, not Weber's.",
      },
      {
        dimension: "reasoning",
        prompt: "How does Weber's conception of economic class differ from Marx's two-class model?",
        choices: [
          { id: "a", label: "It rests on market situation, allowing graduated positions and a large middle class" },
          { id: "b", label: "It treats class as subjective identification rather than an objective structural position" },
          { id: "c", label: "It locates class in patterns of consumption and lifestyle rather than productive relations" },
          { id: "d", label: "It defines class by legal ownership of property alone, excluding those who work for wages" },
        ],
        correctChoiceId: "a",
        explanation: "Skills, qualifications and labour-market position permit many graduated rungs, including a middle class defined by education and occupation — rather than Marx's fundamental owner/worker division.",
      },
      {
        dimension: "reasoning",
        prompt: "What does research on social mobility consistently show?",
        choices: [
          { id: "a", label: "Where you end up is strongly predicted by where you started" },
          { id: "b", label: "Educational expansion has largely severed the link between origins and destinations" },
          { id: "c", label: "Absolute mobility has risen steadily and relative mobility has improved alongside it" },
          { id: "d", label: "Rates vary so widely between countries that no general pattern can be identified" },
        ],
        correctChoiceId: "a",
        explanation: "Advantages and disadvantages are substantially inherited despite the promise of meritocracy, which is why origin remains such a strong predictor of destination.",
      },
    ],
    sources: [
      { label: "OpenStax, Introduction to Sociology", note: "Open textbook material on class, stratification and mobility.", type: "Textbook", url: "https://openstax.org/details/books/introduction-sociology-3e" },
      { label: "Social class (overview)", note: "Reference on Marxian and Weberian theories of class.", type: "Reference", url: "https://en.wikipedia.org/wiki/Social_class" },
    ],
  },
  {
    concept: "Status",
    level: "A-level",
    summary: "social honour or prestige attached to people and roles",
    estimatedMinutes: 8,
    deck: "Money is not the only thing people compete for; they compete for respect. Status — the social honour or prestige attached to a person or position — is a distinct dimension of inequality from economic class, and understanding it reveals why people crave recognition, chase status symbols, and can be rich yet looked down upon, or poor yet revered.",
    keyTerms: [
      { label: "Status", value: "The social honour, prestige or respect attached to a person or social position." },
      { label: "Ascribed vs achieved", value: "Status assigned at birth (ascribed) versus earned through effort (achieved)." },
      { label: "Status symbols", value: "Possessions or markers that signal and display one's status to others." },
      { label: "Status vs class", value: "Prestige is a separate dimension from economic position and need not match it." },
    ],
    sections: [
      {
        heading: "The pursuit of prestige",
        body: [
          `Status is the social honour, prestige or respect attached to a person or position — how much esteem others accord them. Max Weber identified it as a dimension of stratification distinct from economic class: people are ranked not only by wealth but by their standing in others' eyes, and the pursuit of recognition and esteem is among the most powerful human motivations, sometimes rivalling or exceeding the pursuit of money itself.`,
          `Crucially, status and class do not always align. Someone can have high economic class but low status ("new money" looked down upon by established society), or high status but modest class (an impoverished aristocrat, a respected but poorly paid academic or clergy member, a revered artist). This mismatch shows that prestige is a genuinely separate form of ranking, governed by its own logic of honour rather than simply following money — which is why understanding status is essential to understanding social hierarchy fully.`,
        ],
      },
      {
        heading: "Ascribed and achieved status",
        body: [
          `"Ascribed status" is assigned at birth or involuntarily, independent of effort — based on the family one is born into, sex, ethnicity, caste or age. A person born into an aristocratic family holds high status from birth; caste systems assign it rigidly. Ascribed status reflects how far a society allocates honour by inherited position rather than merit.`,
          `"Achieved status" is earned through one's own actions, efforts and abilities — becoming a respected professional, a skilled expert, a celebrated performer or successful entrepreneur. Modern societies emphasise achieved status more than traditional ones, ideally allocating respect by accomplishment rather than birth. In reality the two intertwine: ascribed advantages, like a privileged birth, make achievement easier, so "achieved" status is never purely earned. Still, the distinction captures a key difference in how honour is allocated, and a key way societies differ.`,
        ],
      },
      {
        heading: "Status symbols and display",
        body: [
          `Because status exists in the eyes of others, it must be communicated — which gives rise to "status symbols": possessions, behaviours or markers that signal one's standing. Luxury goods, prestigious brands, exclusive addresses, elite education, particular accents and refined tastes all function as signals. Thorstein Veblen coined "conspicuous consumption" for the display of wealth through visible, often wasteful spending, undertaken precisely to signal status — buying not for use but for the prestige it communicates.`,
          `Status symbols work because they are hard for those of lower status to obtain; if anyone could have them, they would signal nothing. This drives a constant dynamic: as a marker becomes widely accessible, it loses exclusivity and its signalling power, so those seeking distinction adopt newer, more exclusive markers, and the signs of taste and prestige continually shift. Much of consumer culture, fashion and lifestyle is driven by this restless pursuit of status — economic behaviour a purely material analysis would miss.`,
        ],
      },
      {
        heading: "Why status matters so much",
        body: [
          `The human concern with status runs remarkably deep. People will sacrifice money, comfort and even health for recognition, and the loss or threat of status — humiliation, disrespect, loss of face — is experienced as intensely painful. Much competition, ambition, consumption and conflict is driven not by material need but by the desire for esteem and the fear of losing it, and status hierarchies exist in virtually every human group.`,
          `This has individual and social significance. Individually, recognising the status motive explains why we care so much what others think and feel diminished by disrespect. Socially, status hierarchies both reflect and reinforce inequality, and the distribution of respect is itself a matter of justice: societies that grant esteem narrowly, or deny recognition to whole groups, cause real harm beyond material deprivation. Status reveals a dimension of inequality and of motivation that economic analysis alone cannot capture.`,
        ],
      },
      {
        heading: "The respect you chase without noticing",
        body: [
          `You are motivated by status more than you might admit. The concern with what others think of you, the small pleasure of recognition and the sting of disrespect, the pull of prestigious brands, titles or associations — all reflect the deep human pursuit of standing, a drive distinct from the pursuit of money. Notice how a job's prestige can matter as much as its pay, how status symbols signal where people stand, and how the markers of "cool" or class keep shifting as they become common. Notice, too, that respect and wealth do not always go together — the admired but modestly paid, the rich but looked-down-upon. Recognising the status motive in yourself and others explains a huge amount of behaviour that makes little sense in purely material terms, and it is worth asking how much of what you want is the thing itself, and how much is the esteem you believe it will bring.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is status, as distinct from economic class?",
        choices: [
          { id: "a", label: "The social honour or prestige accorded to a person or position by others" },
          { id: "b", label: "The legal standing that determines which rights and duties a person holds" },
          { id: "c", label: "The formal rank a person occupies within an organisation's hierarchy" },
          { id: "d", label: "The level of material comfort a person's income allows them to sustain" },
        ],
        correctChoiceId: "a",
        explanation: "Weber separated prestige from economic class: people are ranked by the esteem others accord them, not only by wealth, and the pursuit of that esteem is a powerful motivation in its own right.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is it significant that status and economic class do not always align?",
        choices: [
          { id: "a", label: "It shows prestige is a separate ranking — one can be rich but disdained, or poor but revered" },
          { id: "b", label: "It shows that status is derived from class but lags behind it by about a generation" },
          { id: "c", label: "It shows that unequal societies generate more status competition than equal ones do" },
          { id: "d", label: "It shows that status matters only in societies without a developed market economy" },
        ],
        correctChoiceId: "a",
        explanation: "The impoverished aristocrat and the disdained millionaire are the cases. Prestige runs on honour rather than simply following money, which is what makes it a genuinely separate dimension.",
      },
      {
        dimension: "depth",
        prompt: "What is the difference between ascribed and achieved status?",
        choices: [
          { id: "a", label: "Ascribed status is assigned at birth regardless of effort; achieved status is earned" },
          { id: "b", label: "Ascribed status is conferred formally by institutions; achieved status arises informally from peers" },
          { id: "c", label: "Ascribed status can be lost through misconduct, whereas achieved status is permanent once attained" },
          { id: "d", label: "Ascribed status applies to individuals, while achieved status applies to whole occupations" },
        ],
        correctChoiceId: "a",
        explanation: "Ascribed status comes from the family, sex or caste you were born into. Modern societies emphasise achieved status more, though the two intertwine heavily in practice.",
      },
      {
        dimension: "reasoning",
        prompt: "Why do status symbols continually shift over time?",
        choices: [
          { id: "a", label: "Once a marker becomes widely accessible it stops signalling, so new ones are adopted" },
          { id: "b", label: "Each generation rejects the previous one's tastes as a way of asserting its independence" },
          { id: "c", label: "Manufacturers deliberately retire products to force consumers to buy replacements" },
          { id: "d", label: "Rising incomes mean the same object costs a smaller share of a household budget" },
        ],
        correctChoiceId: "a",
        explanation: "Symbols work because they are hard to obtain, so those seeking distinction must keep moving to newer and more exclusive markers — which drives much of fashion and consumer culture.",
      },
      {
        dimension: "reasoning",
        prompt: "What does the depth of the human concern with status help explain?",
        choices: [
          { id: "a", label: "Why people trade money, comfort and health for recognition, and feel disrespect as real pain" },
          { id: "b", label: "Why material inequality narrows in societies that expand access to higher education" },
          { id: "c", label: "Why people in high-status occupations report lower job satisfaction than others" },
          { id: "d", label: "Why consumption patterns converge as societies become wealthier over time" },
        ],
        correctChoiceId: "a",
        explanation: "Much ambition, competition and conflict runs on the desire for esteem and the fear of losing it rather than on material need — a dimension of motivation that economic analysis alone cannot capture.",
      },
    ],
    sources: [
      { label: "OpenStax, Introduction to Sociology", note: "Open textbook material on status and stratification.", type: "Textbook", url: "https://openstax.org/details/books/introduction-sociology-3e" },
      { label: "Social status (overview)", note: "Reference on ascribed/achieved status and status symbols.", type: "Reference", url: "https://en.wikipedia.org/wiki/Social_status" },
    ],
  },
  {
    concept: "Role Conflict",
    level: "A-level",
    summary: "tension between expectations attached to different positions",
    estimatedMinutes: 8,
    deck: "Each of us occupies many social positions at once — worker, parent, friend, citizen — and each comes with its own set of expectations. Role conflict is the strain that arises when the demands of these different roles pull us in incompatible directions, and it is one of the most common sources of stress in modern life.",
    keyTerms: [
      { label: "Role", value: "The set of expected behaviours attached to a social position or status." },
      { label: "Role set", value: "The multiple roles a person holds simultaneously." },
      { label: "Role conflict", value: "Tension when the demands of different roles are incompatible." },
      { label: "Role strain", value: "Tension from competing demands within a single role." },
    ],
    sections: [
      {
        heading: "Positions and their scripts",
        body: [
          `In sociology a "status" is a social position a person occupies (parent, teacher, student), and a "role" is the set of expected behaviours, obligations and rights attached to it — the "script" that comes with the position. Being a doctor is a status; the doctor's role includes expectations to be knowledgeable, to care for patients, to keep confidences. We learn roles through socialisation and perform them largely without conscious thought, and social life runs smoothly partly because people generally play their expected roles.`,
          `Everyone occupies many statuses at once, and so plays many roles — employee, parent, spouse, friend, child, neighbour, citizen — a collection called a person's "role set". Most of the time we move between them easily, adjusting to whichever a situation calls for. But because each role carries its own expectations, holding many at once means tensions can arise when their demands clash — which is where role conflict comes in.`,
        ],
      },
      {
        heading: "When roles collide",
        body: [
          `Role conflict occurs when the expectations of two or more roles are incompatible, so fulfilling one makes it hard or impossible to fulfil another. The classic case is the working parent: the employee role may demand long hours and full commitment, while the parent role demands time and presence, and the two compete for the same limited time and energy. The person is pulled in opposite directions by legitimate but conflicting expectations and cannot fully satisfy both.`,
          `Role conflict is pervasive in modern life precisely because we hold so many roles and the demands of work, family and social life are so extensive. It is a major source of stress and guilt, as people fall short of one role's expectations to meet another's — the manager who must both support their team and enforce unpopular decisions from above, the person torn between career and caring for an ageing relative. It is not a personal failing but a structural feature of occupying multiple positions in a complex society.`,
        ],
      },
      {
        heading: "Role conflict and role strain",
        body: [
          `Sociologists distinguish role conflict from "role strain". Role conflict is tension between the expectations of different roles. Role strain is tension from competing demands within a single role. A teacher's one role, for instance, may require being both a supportive mentor and a strict, impartial assessor — competing demands internal to that role, producing strain without any second role involved. A parent's single role likewise includes both nurturing and setting limits, which can pull against each other.`,
          `The distinction matters because the two have different sources and solutions. Role conflict, the incompatibility between separate roles, is often managed by boundaries, prioritising, or renegotiating each role's demands. Role strain, built into a single role, is managed by handling the competing expectations within it. Both are common experiences of occupying social positions, and both reveal that the roles we play are not always smoothly compatible — with each other or within themselves.`,
        ],
      },
      {
        heading: "Managing the tensions",
        body: [
          `People develop various ways to manage role conflict, though none eliminates it. They prioritise roles (deciding which takes precedence when they clash), compartmentalise (keeping roles separate in time and space, so work stays at work), and renegotiate expectations (arranging flexible hours to accommodate parenting). Sometimes they must simply accept painful trade-offs, unable to meet every role's demands.`,
          `Crucially, how much role conflict people face is shaped by social arrangements, not just individual choices. Workplace policies (flexible hours, parental leave), the availability of support (childcare, elder care), and cultural expectations all affect how severe conflicts become. This makes role conflict partly a structural and political issue: societies can ease the acute work-family conflict many experience through supportive arrangements, or worsen it through demanding, inflexible ones. Seeing role conflict as partly structural connects a common personal stress to the broader organisation of work and social life.`,
        ],
      },
      {
        heading: "The pull between your own roles",
        body: [
          `You experience role conflict whenever your roles pull against each other — the tension between work and family, between what your job demands and what your relationships need, between loyalty to a friend and a professional obligation, between caring for children and caring for parents. And you feel role strain within single roles too: being both a supportive and a demanding manager, both a nurturing and a limit-setting parent. Recognising these tensions as a normal, structural feature of occupying many positions in a complex society — not a personal failing — can relieve some of the guilt they cause. It also reveals that some of the strain is shaped by arrangements beyond you: flexible work, available support and reasonable expectations reduce role conflict, while their absence intensifies it. The stress of juggling roles is real, common, and partly a matter of how society is organised, not just how well you personally cope.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is a 'role' in sociology?",
        choices: [
          { id: "a", label: "The expected behaviours, obligations and rights attached to a social position" },
          { id: "b", label: "The position itself, defined by its rank relative to others in a hierarchy" },
          { id: "c", label: "The personal style with which someone performs the duties their job requires" },
          { id: "d", label: "The set of relationships a person maintains with others in their group" },
        ],
        correctChoiceId: "a",
        explanation: "If a status is a position you hold, a role is the script that comes with it — learned through socialisation and largely performed automatically. The position itself is the status, not the role.",
      },
      {
        dimension: "depth",
        prompt: "What is role conflict?",
        choices: [
          { id: "a", label: "Tension when the expectations of two or more of a person's roles are incompatible" },
          { id: "b", label: "Tension between what a role demands and what the person performing it privately wants" },
          { id: "c", label: "Tension between two people who both claim entitlement to the same position" },
          { id: "d", label: "Tension arising when someone is not competent to perform a role they accepted" },
        ],
        correctChoiceId: "a",
        explanation: "Fulfilling one role makes it hard to fulfil another — the working parent whose employee and parent roles compete for the same finite time and energy.",
      },
      {
        dimension: "depth",
        prompt: "How does 'role strain' differ from role conflict?",
        choices: [
          { id: "a", label: "Role strain is tension from competing demands within one role, not between roles" },
          { id: "b", label: "Role strain occurs when a role's demands exceed the time available to meet all of them" },
          { id: "c", label: "Role strain describes tension felt by a group, while role conflict is felt individually" },
          { id: "d", label: "Role strain is temporary and self-resolving, while role conflict requires abandoning a role" },
        ],
        correctChoiceId: "a",
        explanation: "The teacher who must be both supportive mentor and strict assessor faces strain inside a single role. Because the sources differ, so do the remedies.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is role conflict described as a structural feature rather than a personal failing?",
        choices: [
          { id: "a", label: "It arises from holding multiple positions with competing but legitimate expectations" },
          { id: "b", label: "It is experienced identically by everyone who occupies the same combination of roles" },
          { id: "c", label: "It originates in the economy rather than in the family or the community" },
          { id: "d", label: "It can only ever be resolved by institutions, never by an individual's own choices" },
        ],
        correctChoiceId: "a",
        explanation: "We hold many roles at once and modern demands are extensive, so the strain of competing legitimate claims is built into the arrangement rather than into the person failing to cope with it.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is role conflict partly a structural and political issue?",
        choices: [
          { id: "a", label: "Flexible work, available care and cultural expectations shape how severe conflicts are" },
          { id: "b", label: "The severity of role conflict is determined mainly by how many roles a person holds" },
          { id: "c", label: "Conflicts between roles are ultimately resolved by law rather than by social norms" },
          { id: "d", label: "Employers rather than states bear the full cost of the role conflicts their staff face" },
        ],
        correctChoiceId: "a",
        explanation: "Workplace policy, childcare and elder care provision decide how much work-family strain people actually face — so societies can genuinely reduce it or worsen it through inflexible arrangements.",
      },
    ],
    sources: [
      { label: "OpenStax, Introduction to Sociology", note: "Open textbook material on roles, role conflict and role strain.", type: "Textbook", url: "https://openstax.org/details/books/introduction-sociology-3e" },
      { label: "Role conflict (overview)", note: "Reference on roles, role sets and role conflict versus strain.", type: "Reference", url: "https://en.wikipedia.org/wiki/Role_conflict" },
    ],
  },
  {
    concept: "Bureaucracy",
    level: "University",
    summary: "rule-based organisation with hierarchy and written procedures",
    estimatedMinutes: 9,
    deck: "Bureaucracy is a word we use as an insult, but sociology reveals it as one of the most powerful and characteristic institutions of the modern world. Weber saw it as the most efficient way to organise large-scale activity — and, in the same breath, as an 'iron cage' that could trap humanity in impersonal, dehumanising rationality.",
    keyTerms: [
      { label: "Bureaucracy", value: "A rule-based form of organisation with hierarchy, specialisation and written procedures." },
      { label: "Weber's ideal type", value: "A model of bureaucracy's defining features, used for analysis." },
      { label: "Rationalisation", value: "The spread of efficient, rule-governed, calculated ways of organising life." },
      { label: "The iron cage", value: "Weber's image of humanity trapped by impersonal bureaucratic rationality." },
    ],
    sections: [
      {
        heading: "The machine for organising",
        body: [
          `Bureaucracy is a form of organisation defined by hierarchy, a specialised division of labour, written rules and procedures, impersonal treatment, and appointment and promotion by qualifications and merit. It is how large-scale organisations — governments, corporations, universities, hospitals — are structured in the modern world. Though "bureaucracy" is often an insult meaning red tape, Max Weber, who gave the classic analysis, saw it as the most technically efficient form of organisation ever devised for coordinating many people toward complex goals.`,
          `Weber described it through an "ideal type" — a model of its defining features: a clear hierarchy of authority, specialised roles, governance by consistently applied written rules, impersonality (deciding cases by rule rather than feeling or favour), and recruitment and advancement by technical qualification rather than birth or connections. Together these make a bureaucracy work like a well-designed machine, handling enormous volumes of activity with a precision, consistency and predictability no informal organisation could match.`,
        ],
      },
      {
        heading: "Why bureaucracy triumphed",
        body: [
          `Weber argued bureaucracy came to dominate because of genuine advantages for large-scale, complex tasks: its precision, speed, consistency and reliability make it superior to older forms based on tradition, personal loyalty or charismatic leadership. Rules applied impersonally also mean cases are treated consistently rather than by an official's whim or favour — a real form of fairness. At its best, bureaucracy means being treated by the same rules as everyone else, not according to connections or arbitrary power.`,
          `Bureaucracy is part of a broader process Weber called "rationalisation": the long-term trend toward organising life by reason, efficiency, calculation and rules, replacing tradition, emotion and personal relationships. Rationalisation is, for Weber, the master process of modernity, and bureaucracy is its characteristic organisational form. Its spread across government, business and virtually every large institution reflects a deep transformation in how societies coordinate collective activity — a shift from the personal and traditional to the impersonal and calculated.`,
        ],
      },
      {
        heading: "The iron cage",
        body: [
          `Weber was deeply ambivalent, and here lies his most profound insight. For all its efficiency, bureaucracy has a dark side: its impersonality and reduction of people to cases and functions can be dehumanising, stripping away individuality, meaning and human warmth. The very features that make it efficient — treating everyone by the rules, subordinating individuals to procedure — can crush the human spirit. Bureaucratic rationality serves the organisation's goals, but not necessarily human flourishing.`,
          `Weber captured this in his image of the "iron cage" (or "steel-hard casing"): the fear that the rationalised, bureaucratic order of modern life would become an inescapable structure trapping humanity within impersonal systems, draining away meaning, spontaneity and freedom. As rationality spreads into every corner of life, people become cogs in vast impersonal machines. This vision — that the same rationality which freed us from tradition might imprison us in a soulless, over-organised world — is one of the most powerful critiques of modernity ever offered.`,
        ],
      },
      {
        heading: "The pathologies of bureaucracy",
        body: [
          `Beyond Weber's philosophical concern, bureaucracies show familiar practical pathologies. Rigid rule-following produces absurd or unjust outcomes when the rules do not fit a situation — the "computer says no" phenomenon. "Red tape", the proliferation of procedures and paperwork, slows action and frustrates everyone. And rules meant as means become ends in themselves, a "goal displacement" in which following the procedure matters more than achieving the goal it was meant to serve.`,
          `Bureaucracies can also become self-serving — expanding, perpetuating themselves, resisting change, and diffusing responsibility so no one is accountable ("just following the rules", "not my department"). This diffusion has a genuinely sinister potential: the impersonal, rule-following character of bureaucracy can let people take part in harmful actions while feeling they are merely doing their job, a dynamic implicated in some of history's worst atrocities. These pathologies do not negate bureaucracy's advantages, but they reveal it as a double-edged instrument — indispensable for organising modern life, yet capable of rigidity, absurdity, alienation and the abdication of moral responsibility.`,
        ],
      },
      {
        heading: "Why dealing with institutions feels the way it does",
        body: [
          `You meet bureaucracy constantly — government agencies, banks, insurers, universities, large companies — and feel both its advantages and its pathologies. When you are treated by the same rules as everyone else, not according to connections or an official's mood, that impersonal fairness is bureaucracy at its best. But when you hit the wall of "computer says no", endless forms, rules that make no sense for your case, or an official who "just follows procedure" while no one takes responsibility, you are meeting its pathologies — rigidity, red tape, goal displacement, diffused accountability. Weber's insight helps you see this not as random incompetence but as the characteristic double edge of the form itself: the same impersonal, rule-bound rationality that makes large-scale organisation possible and fair also makes it capable of being rigid, absurd and dehumanising.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What are the defining features of bureaucracy in Weber's 'ideal type'?",
        choices: [
          { id: "a", label: "Hierarchy, specialised labour, written rules, impersonality and merit appointment" },
          { id: "b", label: "Personal loyalty to a leader, appointment by patronage, and rule by established tradition" },
          { id: "c", label: "Flat structure, generalist staff, discretionary judgement and appointment by election" },
          { id: "d", label: "Collective decision-making, rotating leadership and accountability to an outside body" },
        ],
        correctChoiceId: "a",
        explanation: "Consistently applied written rules, impersonal treatment, and recruitment by qualification are what make bureaucracy operate like a precise machine. Loyalty and patronage describe exactly what it replaced.",
      },
      {
        dimension: "reasoning",
        prompt: "Why did Weber argue bureaucracy came to dominate the modern world?",
        choices: [
          { id: "a", label: "Its precision, consistency and capacity for vast work make it technically superior" },
          { id: "b", label: "It emerged with the nation state and spread by imitation rather than any real advantage" },
          { id: "c", label: "It concentrates authority so decisions can be taken quickly by a single office holder" },
          { id: "d", label: "It is cheaper to run than the traditional and charismatic forms it displaced" },
        ],
        correctChoiceId: "a",
        explanation: "Its impersonal rules also deliver a real fairness that patronage cannot. Weber saw it as part of the broader modern trend he called rationalisation — though later theorists did argue for imitation over efficiency.",
      },
      {
        dimension: "depth",
        prompt: "What did Weber mean by the 'iron cage'?",
        choices: [
          { id: "a", label: "That rationalised order would trap humanity in impersonal, meaning-draining systems" },
          { id: "b", label: "That a bureaucracy becomes impossible to dismantle once its officials secure tenure" },
          { id: "c", label: "That bureaucratic rules tend to grow more numerous and more rigid over time" },
          { id: "d", label: "That bureaucratic organisations resist competition from more efficient rivals" },
        ],
        correctChoiceId: "a",
        explanation: "The same rationality that freed us from tradition potentially imprisons us in a soulless, over-organised world. It is a claim about meaning and freedom, not about administrative durability.",
      },
      {
        dimension: "reasoning",
        prompt: "What is 'goal displacement' as a pathology of bureaucracy?",
        choices: [
          { id: "a", label: "Rules meant as means become ends, so procedure outranks the purpose it served" },
          { id: "b", label: "Officials pursue their own advancement instead of the goals their office was created for" },
          { id: "c", label: "Goals set at the top are reinterpreted at each level until the front line cannot recognise them" },
          { id: "d", label: "An organisation quietly abandons its stated purpose in favour of a more profitable one" },
        ],
        correctChoiceId: "a",
        explanation: "This is the 'computer says no' phenomenon — rules applied mechanically even when doing so defeats the aim they were written to serve.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the genuinely sinister potential of bureaucracy's impersonal character?",
        choices: [
          { id: "a", label: "It lets people take part in harm while feeling they are only doing their job" },
          { id: "b", label: "It concentrates enough information in one office to enable comprehensive surveillance" },
          { id: "c", label: "It removes any record of who authorised a decision, making accountability impossible" },
          { id: "d", label: "It selects for officials who are personally indifferent to the consequences of their work" },
        ],
        correctChoiceId: "a",
        explanation: "Rule-following and diffused responsibility together permit an abdication of moral judgement — a dynamic implicated in some of history's worst atrocities. Note it does not require indifferent people.",
      },
    ],
    sources: [
      { label: "Max Weber on bureaucracy (overview)", note: "Reference on the ideal type, rationalisation and the iron cage.", type: "Reference", url: "https://en.wikipedia.org/wiki/Bureaucracy" },
      { label: "OpenStax, Introduction to Sociology", note: "Open textbook material on organisations and bureaucracy.", type: "Textbook", url: "https://openstax.org/details/books/introduction-sociology-3e" },
    ],
  },
  {
    concept: "Deviance",
    level: "A-level",
    summary: "behaviour labelled as violating norms",
    estimatedMinutes: 8,
    deck: "What makes an act 'deviant'? Not the act itself, sociology argues, but the social reaction to it. Deviance is behaviour that violates a society's norms — and because norms vary across time, place and situation, the same act can be criminal or celebrated depending on who does it, where, and how others respond.",
    keyTerms: [
      { label: "Deviance", value: "Behaviour that violates a society's norms and provokes a negative social reaction." },
      { label: "Social construction", value: "The idea that what counts as deviant is defined by society, not inherent in the act." },
      { label: "Labelling theory", value: "Becker's view that deviance is created by the social response of labelling, not the act itself." },
      { label: "Strain theory", value: "Merton's account of deviance as arising from a gap between goals and legitimate means." },
    ],
    sections: [
      {
        heading: "Violating the norms",
        body: [
          `Deviance is behaviour that violates a society's norms and meets disapproval, condemnation or punishment. It ranges from minor breaches of etiquette to serious crimes, and it need not be illegal — laws are only a subset of norms. The sociological study of deviance is not about cataloguing "bad behaviour" but about a deeper question: how does a society come to define certain behaviours as deviant, and with what consequences?`,
          `The foundational insight is that deviance is not an inherent quality of any act but a matter of social definition and reaction. No behaviour is deviant in itself; it becomes deviant when a society defines and reacts to it as such. This is why what counts as deviant varies enormously across societies, eras and situations: the same act — killing, nudity, drug use, a particular sexual behaviour — can be a crime, a duty, or a matter of indifference depending on context. Deviance is relative, not absolute.`,
        ],
      },
      {
        heading: "Deviance is socially constructed",
        body: [
          `This relativity means deviance is "socially constructed" — created by processes of definition and reaction rather than given by nature. Whether an act is deviant depends on who does it, when, where, and how others respond: drinking alcohol is normal at a party but deviant at work; killing is murder in peacetime but duty in war. Even who acts matters — the powerful often escape the "deviant" label for behaviour that would condemn the powerless.`,
          `Because it is constructed, what counts as deviance changes over time, sometimes dramatically: behaviours once deeply condemned have become accepted, and vice versa. This ongoing redefinition shows deviance is a shifting social judgement, not a fixed category, and it raises the critical question of who gets to define it. Since powerful groups have more influence over which behaviours are labelled deviant and criminalised, definitions of deviance often reflect and reinforce existing power relations.`,
        ],
      },
      {
        heading: "Labelling theory",
        body: [
          `One of the most influential theories, associated especially with Howard Becker, is "labelling theory". Its radical claim is that deviance is not a quality of the act but a consequence of others applying rules and sanctions to an "offender". In Becker's words, the deviant is "one to whom the label has successfully been applied"; deviant behaviour is behaviour that people so label. This shifts the question from "why do people break rules?" to "how do some acts and people come to be labelled deviant?"`,
          `The implications are powerful. The reaction to an act — being caught, labelled and treated as deviant — can be more consequential than the act itself, and can produce further deviance. A deviant label can become a "master status" overriding all a person's other identities, close off legitimate opportunities, and lead them to see themselves as deviant and associate with others so labelled. This "secondary deviance", in which the response to labelling generates more rule-breaking, is a self-fulfilling prophecy: society's reaction can amplify deviance rather than reduce it.`,
        ],
      },
      {
        heading: "Deviance and social structure",
        body: [
          `Other theories locate deviance in social structure rather than reaction. Robert Merton's "strain theory" argues it arises from a gap between the goals a society encourages (like material success) and the legitimate means available to reach them. When people are pushed to want success but denied legitimate routes, the resulting strain can lead to deviance — pursuing the goals through illegitimate means, or rejecting them. Deviance here is not individual pathology but a predictable response to a structural mismatch, concentrated among those denied opportunity.`,
          `Émile Durkheim argued, strikingly, that deviance is not only inevitable but can be functional. Since every society defines some behaviour as deviant, deviance is normal and universal — and the collective reaction against it serves purposes: it clarifies and reaffirms shared norms and moral boundaries, promotes solidarity by uniting people against the offender, and can even drive social change, as today's deviance sometimes becomes tomorrow's norm. These structural and functional views complement labelling theory, together revealing deviance as a deeply social phenomenon rather than simple individual wrongdoing.`,
        ],
      },
      {
        heading: "Why the 'same' act can be crime or virtue",
        body: [
          `You can see the social construction of deviance all around you. The same behaviour — drinking, risk-taking, particular dress, sexual conduct, drug use — can be celebrated in one setting and condemned in another, treated as normal for some people and deviant for others, judged completely differently across cultures and eras. Notice how what counts as deviant shifts over time, how the powerful often escape labels the powerless cannot, and how being labelled a certain kind of person can stick and shape someone's whole future. When you catch yourself assuming an act is simply, inherently "wrong", the sociological move is to ask instead: by whose norms, in what context, and with what social reaction? This does not make all judgements equally valid or deny that some things are truly harmful. But it reveals how much of what we treat as obvious moral fact is a shifting social judgement, shaped by culture, context and power.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is the foundational sociological insight about deviance?",
        choices: [
          { id: "a", label: "Deviance is not inherent in an act but a matter of social definition and reaction" },
          { id: "b", label: "Deviance is best explained by the individual characteristics of those who engage in it" },
          { id: "c", label: "Deviance declines as societies become wealthier and more formally educated" },
          { id: "d", label: "Deviance and crime are the same phenomenon described by two different disciplines" },
        ],
        correctChoiceId: "a",
        explanation: "The same act can be criminal or admired depending on time, place and context — deviance is relative rather than absolute, which is why the interesting question is who gets to define it.",
      },
      {
        dimension: "reasoning",
        prompt: "What does it mean that deviance is 'socially constructed'?",
        choices: [
          { id: "a", label: "What counts as deviant is created by processes of definition and reaction" },
          { id: "b", label: "Deviant acts are learned within small groups rather than invented by individuals" },
          { id: "c", label: "Societies deliberately construct deviant categories in order to control surplus populations" },
          { id: "d", label: "Deviance is constructed by media coverage rather than by communities themselves" },
        ],
        correctChoiceId: "a",
        explanation: "Drinking is normal at a party and deviant at work. Definitions shift over time and reflect power, since the powerful routinely escape labels the powerless cannot.",
      },
      {
        dimension: "depth",
        prompt: "What is Becker's 'labelling theory' of deviance?",
        choices: [
          { id: "a", label: "Deviance is a consequence of others applying the label, not a quality of the act" },
          { id: "b", label: "People labelled deviant early in life are substantially more likely to be labelled again later" },
          { id: "c", label: "Labels attach to acts rather than to persons, which is precisely why they can be shed" },
          { id: "d", label: "The severity of a label reflects the actual harm that the labelled act caused" },
        ],
        correctChoiceId: "a",
        explanation: "Becker's formulation is that the deviant is one to whom the label has successfully been applied — which moves the object of study from the act to the process of labelling it.",
      },
      {
        dimension: "reasoning",
        prompt: "How can labelling produce a 'self-fulfilling prophecy' of further deviance?",
        choices: [
          { id: "a", label: "The label becomes a master status, closing legitimate paths and reshaping self-image" },
          { id: "b", label: "The label attracts official attention, so subsequent behaviour is scrutinised more closely" },
          { id: "c", label: "Once labelled, people conform deliberately in order to have the label removed" },
          { id: "d", label: "The label deters the labelled person while encouraging imitation by observers" },
        ],
        correctChoiceId: "a",
        explanation: "'Criminal' overrides other identities and pushes the person toward deviant associates — secondary deviance, where society's reaction amplifies rule-breaking rather than reducing it.",
      },
      {
        dimension: "reasoning",
        prompt: "What did Durkheim argue about the function of deviance?",
        choices: [
          { id: "a", label: "Reacting against it clarifies shared norms, builds solidarity and can drive change" },
          { id: "b", label: "It results from the failure of institutions to socialise individuals adequately" },
          { id: "c", label: "It persists because punishing it costs more than tolerating it would" },
          { id: "d", label: "A fixed proportion of any population deviates regardless of how norms are enforced" },
        ],
        correctChoiceId: "a",
        explanation: "Deviance is normal and even functional: the collective reaction reaffirms moral boundaries and promotes solidarity, and today's deviance sometimes becomes tomorrow's norm.",
      },
    ],
    sources: [
      { label: "Howard Becker, Outsiders (labelling theory)", note: "The classic statement of labelling theory of deviance.", type: "Reference", url: "https://en.wikipedia.org/wiki/Labeling_theory" },
      { label: "OpenStax, Introduction to Sociology", note: "Open textbook material on deviance, strain and social control.", type: "Textbook", url: "https://openstax.org/details/books/introduction-sociology-3e" },
    ],
  },
  {
    concept: "Social Capital",
    level: "University",
    summary: "resources available through networks and relationships",
    estimatedMinutes: 9,
    deck: "It is not just what you know, but who you know — and sociology takes that cliché seriously. Social capital is the real, valuable resource embedded in our networks of relationships: the trust, information, support and opportunities that flow through social connections, and that can matter as much as money or skill for how a life goes.",
    keyTerms: [
      { label: "Social capital", value: "The resources — trust, information, support, opportunity — available through social networks." },
      { label: "Networks", value: "The web of relationships and connections a person or group has." },
      { label: "Bonding vs bridging", value: "Ties within a close group versus ties connecting different groups (Putnam)." },
      { label: "Inequality of connections", value: "Unequal access to valuable networks, reproducing broader inequality." },
    ],
    sections: [
      {
        heading: "The value in relationships",
        body: [
          `Social capital is the resources — actual and potential — that individuals and groups can access through their social networks. Just as economic capital (money) and human capital (skills) are resources for achieving goals, so are social connections: the web of relationships a person has is itself a valuable asset. Through their networks, people gain information, support, influence, opportunity and trust they could not obtain alone. "It's not what you know but who you know" captures a real sociological truth.`,
          `Thinkers have developed the idea with different emphases. For Pierre Bourdieu, social capital is one of several forms of capital (alongside economic and cultural) that the advantaged use to maintain and reproduce their position — valuable connections being an asset the privileged possess and pass on. For Robert Putnam, it is more a feature of communities: the networks, norms of reciprocity and trust that let people cooperate for mutual benefit and make societies function well. Both capture the core idea that relationships are resources — whether for individual advantage or collective flourishing.`,
        ],
      },
      {
        heading: "What social capital does",
        body: [
          `Networks provide things that are genuinely useful and often otherwise inaccessible. They carry information — about jobs, opportunities, how things work — that flows through personal connections and advantages the well-connected. They provide access and influence, opening doors that stay closed to others. They provide practical and emotional support in times of need. And they supply the trust and reciprocity that let people cooperate and do business, reducing the friction and risk of social and economic life.`,
          `A famous illustration is Mark Granovetter's "strength of weak ties": people often find jobs not through close friends and family (strong ties) but through acquaintances and looser connections (weak ties). Close contacts tend to know the same things and people we do, while weak ties reach into different networks and bring new information. So a wide, diverse network of even loose connections can be more valuable for reaching new opportunities than a small circle of intense relationships, because it reaches further into the wider world.`,
        ],
      },
      {
        heading: "Bonding and bridging",
        body: [
          `Putnam distinguished two types of social capital. "Bonding" capital is the strong ties within a close-knit, homogeneous group — family, close friends, one's own community — providing support, solidarity and belonging, and good for "getting by". "Bridging" capital is the looser ties connecting people across different groups and social positions, good for "getting ahead" because it provides access to new information, resources and opportunities beyond one's own circle.`,
          `Both matter, but they do different things, and their balance has social significance. Bonding capital is essential for support and cohesion, but a society high in bonding and low in bridging can fragment into isolated, inward-looking groups that neither connect nor trust across their boundaries — good for internal solidarity, bad for wider cooperation. Bridging capital, by linking across divides, builds broader trust and gives access beyond one's own group. Healthy individuals and societies generally need both: the deep support of bonding ties and the reach of bridging ones.`,
        ],
      },
      {
        heading: "Social capital and inequality",
        body: [
          `Social capital is not distributed equally, and this is one of its most troubling features. People differ enormously in the networks they can access, and those differences track and reinforce other inequalities. The advantaged typically have more valuable connections — to influential, well-resourced people who provide information, opportunities and access — while the disadvantaged often have networks that, however supportive, connect them mainly to others in similar circumstances. So social capital is a mechanism by which advantage and disadvantage are reproduced across generations, quite apart from money or ability.`,
          `This has profound implications for equality of opportunity. Because connections shape access to jobs, education and opportunity, "meritocracy" is undercut by the unequal distribution of social capital: two equally talented people can have very different life chances because of the networks they were born into or able to build. Social capital thus reveals a hidden dimension of inequality that works through relationships rather than obvious material resources, and helps explain why formal equality of opportunity so often fails to produce equal outcomes — whom you know, not just what you know, powerfully shapes how a life goes.`,
        ],
      },
      {
        heading: "Why who you know shapes your life",
        body: [
          `You draw on social capital constantly, often without noticing — the job you heard about through an acquaintance, the advice from someone in your network, the door opened by a connection, the support of friends and family in hard times. Notice the strength-of-weak-ties insight in your own life: opportunities often come not from your closest circle but from looser acquaintances who link you to a wider world. Notice, too, the difference between your bonding ties (close support) and bridging ties (reach and opportunity), and how much a diverse network can help. Most importantly, recognise that social capital is unequally distributed — people born into well-connected networks have real advantages that have nothing to do with talent or effort, part of why pure meritocracy is a myth. Understanding social capital reveals how much of a life's trajectory runs through relationships, and why building and widening genuine connections is one of the most valuable, and unevenly available, resources there is.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is social capital?",
        choices: [
          { id: "a", label: "The information, support, influence and opportunity available through networks" },
          { id: "b", label: "The skills and credentials a person accumulates that employers are willing to pay for" },
          { id: "c", label: "The collective goodwill an organisation earns through its reputation with the public" },
          { id: "d", label: "The obligations a person owes to those who have previously helped them" },
        ],
        correctChoiceId: "a",
        explanation: "It treats connections as a genuine asset alongside economic and human capital — access to things you could not obtain alone. Skills and credentials are human capital, which is the standard confusion.",
      },
      {
        dimension: "reasoning",
        prompt: "What did Granovetter's 'strength of weak ties' finding reveal?",
        choices: [
          { id: "a", label: "People find jobs through acquaintances, whose networks reach information yours does not" },
          { id: "b", label: "Weak ties are easier to maintain, so a person can sustain far more of them at once" },
          { id: "c", label: "Acquaintances give more honest advice than close friends, who tend to soften bad news" },
          { id: "d", label: "Weak ties help more readily because they expect nothing in return for doing so" },
        ],
        correctChoiceId: "a",
        explanation: "Close contacts largely know what you already know. A wide, diverse network of loose connections can therefore beat a small intense circle for finding anything new.",
      },
      {
        dimension: "depth",
        prompt: "What is the difference between 'bonding' and 'bridging' social capital?",
        choices: [
          { id: "a", label: "Bonding is strong ties within a close group; bridging is looser ties across groups" },
          { id: "b", label: "Bonding describes ties between individuals, while bridging describes ties between organisations" },
          { id: "c", label: "Bonding is inherited through family, whereas bridging capital is built through work" },
          { id: "d", label: "Bonding operates locally within neighbourhoods; bridging operates at a national scale" },
        ],
        correctChoiceId: "a",
        explanation: "Putnam's distinction: bonding is good for getting by, bridging for getting ahead. Healthy individuals and societies need both, and the two are not stages of one another.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can a society high in bonding but low in bridging social capital become problematic?",
        choices: [
          { id: "a", label: "It fragments into inward-looking groups that do not trust across their boundaries" },
          { id: "b", label: "It concentrates information in a few well-connected individuals who become gatekeepers" },
          { id: "c", label: "It generates high trust that outsiders exploit without any reciprocal obligation" },
          { id: "d", label: "It produces strong communities that lack the resources to support their own members" },
        ],
        correctChoiceId: "a",
        explanation: "Bonding delivers real internal solidarity — the failure is between groups rather than within them, which is good for cohesion and bad for wider cooperation and integration.",
      },
      {
        dimension: "reasoning",
        prompt: "How does social capital undercut the ideal of meritocracy?",
        choices: [
          { id: "a", label: "It is unequally distributed, so equally talented people face different life chances" },
          { id: "b", label: "It lets employers verify candidates' claims, which makes hiring more accurate rather than less" },
          { id: "c", label: "It rewards the effort people invest in building networks rather than any inherited advantage" },
          { id: "d", label: "It concentrates in professions where credentials matter least, distorting only some sectors" },
        ],
        correctChoiceId: "a",
        explanation: "Valuable networks track existing advantage, so connections reproduce it across generations independently of money or ability — whom you know, not only what you know.",
      },
    ],
    sources: [
      { label: "Robert Putnam, Bowling Alone", note: "The influential account of bonding and bridging social capital.", type: "Reference", url: "https://en.wikipedia.org/wiki/Social_capital" },
      { label: "Granovetter, 'The Strength of Weak Ties'", note: "The classic study of weak ties and access to opportunity.", type: "Reference", url: "https://en.wikipedia.org/wiki/Interpersonal_ties" },
    ],
  },
  {
    concept: "Anomie",
    level: "University",
    summary: "normlessness or dislocation when social regulation weakens",
    estimatedMinutes: 9,
    deck: "When the rules that guide and restrain us weaken or break down, people can be left feeling adrift, without clear norms to orient their lives. Durkheim called this condition 'anomie' — a state of normlessness that he linked, disturbingly, to everything from social upheaval to suicide, and that captures a real malaise of rapidly changing modern societies.",
    keyTerms: [
      { label: "Anomie", value: "A condition of normlessness in which social norms are weak, unclear or breaking down." },
      { label: "Durkheim", value: "Émile Durkheim, who developed anomie and linked it to social integration and regulation." },
      { label: "Social regulation", value: "The way shared norms guide and restrain individual desires and behaviour." },
      { label: "Modern dislocation", value: "The sense of being adrift when rapid change erodes stable norms." },
    ],
    sections: [
      {
        heading: "Life without clear rules",
        body: [
          `Anomie, developed by the founding sociologist Émile Durkheim, is a condition of "normlessness" — a state in which the norms that regulate behaviour are weak, unclear, absent or breaking down, leaving individuals without adequate guidance or restraint. The word comes from Greek roots meaning "without norms". Durkheim argued that people need norms not only to coordinate behaviour but to give their lives structure, meaning and limits; when those norms fail, people can be left in a distressing state of confusion and dislocation.`,
          `The insight is counterintuitive but profound: people actually need the regulation and restraint that norms provide, and its absence is harmful rather than liberating. Human desires, Durkheim thought, are potentially limitless, and it is norms that give them shape and boundaries — a sense of what to aim for and when to be satisfied. Without that regulation, desires become unbounded and unsatisfiable, leaving people restless, disappointed and adrift. Freedom from all norms, on this view, is not liberation but dislocation.`,
        ],
      },
      {
        heading: "Durkheim, integration and regulation",
        body: [
          `Durkheim developed the concept most famously in his pioneering study of suicide (1897), one of the first works to show that a deeply personal act could be explained by social factors. He argued that suicide rates are shaped by two dimensions of society's relationship to the individual: "integration" (how connected people are to social groups) and "regulation" (how far their desires and behaviour are governed by shared norms). Too little — or too much — of either was associated with higher rates, revealing suicide as a social as well as individual phenomenon.`,
          `"Anomic suicide" was his term for suicide arising from a lack of regulation. Strikingly, he found suicide rates rose not only in economic depressions but also in times of sudden prosperity, and explained this through anomie: rapid change, whether for better or worse, disrupts the norms that regulate people's expectations. When familiar rules and limits suddenly no longer apply, people lose their bearings and their desires become unmoored. That even a sudden improvement in fortunes could increase distress powerfully illustrated his point that it is the disruption of regulation, not merely hardship, that produces anomie.`,
        ],
      },
      {
        heading: "Anomie and modern society",
        body: [
          `Durkheim linked anomie especially to the transition to modern society. Traditional societies, with stable shared norms and tight-knit communities, provided strong regulation and integration — a clear place, clear rules, and a sense of belonging. The rapid changes of modernity — industrialisation, urbanisation, the breakdown of traditional communities and shared moral frameworks, and the sheer pace of change — tend to weaken these norms, leaving individuals freer but also more isolated and less guided. Modernity carries an inherent risk of anomie.`,
          `This diagnosis captures something enduring. The very features often celebrated as modern progress — individual freedom, choice, mobility, release from tradition — can, taken to an extreme or amid rapid change, produce the dislocation of anomie: a loss of shared norms and meaning, a sense of being adrift. The modern experience of rootlessness, of too many choices and no clear rules, of communities and shared frameworks dissolving, resonates with the concept, which remains a powerful lens on the discontents of modern life.`,
        ],
      },
      {
        heading: "From Durkheim to Merton",
        body: [
          `The American sociologist Robert Merton later reworked anomie in his "strain theory" of deviance. For Merton, anomie arises specifically from a mismatch between the goals a society encourages people to pursue (such as material success) and the legitimate means available to achieve them. When a society intensely promotes wealth while failing to provide everyone legitimate opportunity, the resulting strain pressures people toward deviant adaptations, including pursuing the goals through illegitimate means.`,
          `Merton's version shifts anomie from Durkheim's broad normlessness to a specific structural strain between goals and means, and links it directly to crime. Where Durkheim emphasised the loss of regulation and the dangers of unbounded desire amid change, Merton emphasised the gap between what a society tells people to want and what it lets them achieve. Both share the core insight that anomie is a social condition, rooted in the relationship between individuals and the normative order, whose breakdown has real and sometimes destructive consequences — making anomie one of sociology's most influential concepts for understanding malaise, deviance and modern discontent.`,
        ],
      },
      {
        heading: "The feeling of being adrift",
        body: [
          `You may recognise anomie in yourself or your society more than you expect. The sense of being adrift when familiar structures fall away — after a major upheaval, a move, a loss, or when old rules no longer seem to apply — is anomie in a personal key: the disorientation of lacking clear norms to guide you. On a larger scale, the modern experience of rapid change, dissolving communities, overwhelming choice and eroding shared frameworks resonates with Durkheim's diagnosis. His counterintuitive insight is worth holding onto: we need some regulation and shared norms not as mere constraints but as sources of structure and meaning, and their loss can be genuinely painful rather than freeing. This does not romanticise rigid tradition or deny the value of freedom. But it explains why periods of rapid change and normlessness — in a life or a society — can produce real distress, and why belonging, structure and shared meaning matter to human well-being more than a purely individualist picture allows.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is anomie?",
        choices: [
          { id: "a", label: "A condition of normlessness where the norms regulating behaviour break down" },
          { id: "b", label: "A condition of isolation in which individuals lack the ties that integrate them into a group" },
          { id: "c", label: "A condition of alienation in which people are estranged from the products of their labour" },
          { id: "d", label: "A condition of over-regulation in which norms constrain people beyond what they can bear" },
        ],
        correctChoiceId: "a",
        explanation: "From Greek roots meaning without norms. Note the near misses are real concepts: isolation is Durkheim's egoism, over-regulation his fatalism, and estrangement from one's labour is Marx's alienation.",
      },
      {
        dimension: "reasoning",
        prompt: "What is Durkheim's counterintuitive insight about norms and regulation?",
        choices: [
          { id: "a", label: "People need regulation; without it desires become unbounded and unsatisfiable" },
          { id: "b", label: "People comply with norms they believe others endorse, regardless of their own private view" },
          { id: "c", label: "Norms work best when they are internalised rather than enforced from outside" },
          { id: "d", label: "Societies with the strictest norms produce the highest rates of rule-breaking" },
        ],
        correctChoiceId: "a",
        explanation: "Human desires are potentially limitless and norms give them shape, so freedom from all norms is dislocation rather than liberation — unregulated wanting has nothing to stop against.",
      },
      {
        dimension: "reasoning",
        prompt: "Why did Durkheim find that suicide rates rose even in times of sudden prosperity?",
        choices: [
          { id: "a", label: "Rapid change, even for the better, disrupts the norms that regulate expectations" },
          { id: "b", label: "Prosperity raises expectations faster than incomes, so relative deprivation grows" },
          { id: "c", label: "Prosperity weakens the social ties that had integrated people into their communities" },
          { id: "d", label: "Rising wealth widens inequality, and inequality rather than poverty is what harms" },
        ],
        correctChoiceId: "a",
        explanation: "Anomic suicide arises from lost regulation. Boom and slump both disrupt the norms governing desire, which is why it is the disruption rather than the hardship that does the damage.",
      },
      {
        dimension: "depth",
        prompt: "Why did Durkheim link anomie especially to modern society?",
        choices: [
          { id: "a", label: "Rapid modern change weakens the regulating norms traditional societies supplied" },
          { id: "b", label: "Modernity replaced mechanical solidarity with organic solidarity, which binds people more weakly" },
          { id: "c", label: "Modern states absorbed the moral functions that religious institutions had performed" },
          { id: "d", label: "Modern economies require mobility, which prevents people from forming lasting attachments" },
        ],
        correctChoiceId: "a",
        explanation: "Industrialisation and urbanisation loosen shared norms, leaving individuals freer but less guided — so modernity carries an inherent risk of anomie rather than an incidental one.",
      },
      {
        dimension: "reasoning",
        prompt: "How did Merton rework anomie in his 'strain theory'?",
        choices: [
          { id: "a", label: "As a gap between the goals a society promotes and the legitimate means available" },
          { id: "b", label: "As a gap between the norms of a subculture and those of the wider surrounding society" },
          { id: "c", label: "As a gap between what individuals desire and what their own abilities can deliver" },
          { id: "d", label: "As a gap between the pace of economic change and the pace of legal reform" },
        ],
        correctChoiceId: "a",
        explanation: "Promoting success intensely while denying legitimate opportunity creates structural strain that pressures people toward deviant adaptations — relocating anomie from regulation to opportunity.",
      },
    ],
    sources: [
      { label: "Émile Durkheim, Suicide / anomie (overview)", note: "Reference on anomie, integration, regulation and anomic suicide.", type: "Reference", url: "https://en.wikipedia.org/wiki/Anomie" },
      { label: "Robert Merton, strain theory (overview)", note: "Reference on Merton's reworking of anomie and deviance.", type: "Reference", url: "https://en.wikipedia.org/wiki/Strain_theory_(sociology)" },
    ],
  },
];

export const sociologyLessons = buildAuthoredLessons("sociology", sociology);
