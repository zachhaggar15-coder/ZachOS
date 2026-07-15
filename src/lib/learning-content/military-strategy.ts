import { buildAuthoredLessons, type AuthoredLesson } from "./types";

// Ten hand-written Military Strategy lessons: researched, concept-specific prose
// with real theorists and campaigns, each closing on an everyday-life example,
// plus genuine recall quizzes.
const militaryStrategy: AuthoredLesson[] = [
  {
    concept: "Friction",
    level: "GCSE",
    summary: "the gap between plans and reality under pressure",
    estimatedMinutes: 7,
    deck: "On paper, war is simple. In reality, everything is harder than it should be: orders are misheard, the weather turns, the fuel runs late. Clausewitz called this 'friction' — the force that separates the neat plan from the messy event, and the reason no strategy survives unchanged.",
    keyTerms: [
      { label: "Friction", value: "Clausewitz's term for the countless small problems that make real war harder than planned." },
      { label: "The fog of war", value: "The uncertainty and missing information commanders face in real time." },
      { label: "Contact with the enemy", value: "The moment a plan meets reality and must adapt or fail." },
      { label: "Robust planning", value: "Building in margin and flexibility to absorb the inevitable friction." },
    ],
    sections: [
      {
        heading: "Why the simple becomes hard",
        body: [
          `Carl von Clausewitz, the Prussian theorist whose On War remains the foundational text of strategy, coined its most useful idea: "Everything in war is very simple, but the simplest thing is difficult." A plan that looks easy on the map — march here, arrive by dawn, attack together — meets a mass of small obstacles that each slow or distort it. A unit gets lost; a bridge is out; a message is garbled; the men are exhausted; it starts to rain.`,
          `No single problem is fatal, but they accumulate, and together they turn a crisp plan into a delayed, half-executed muddle. That cumulative drag is friction, and it is why real operations never unfold as designed — and why war feels so different to those inside it than it looks on a map.`,
        ],
      },
      {
        heading: "The fog of war",
        body: [
          `A commander rarely has clear, complete, timely information. Instead there is confusion, contradictory reports, and gaps about where the enemy is and what one's own forces are doing — the "fog of war". Decisions must be made on partial, unreliable knowledge, under time pressure, with lives at stake.`,
          `Clausewitz insisted this uncertainty is not a defect to be engineered away but the nature of a violent, chaotic, human activity. Any theory of war that assumes clean execution and perfect information is describing a fantasy.`,
        ],
      },
      {
        heading: "No plan survives contact",
        body: [
          `The practical upshot was captured by the Prussian general Helmuth von Moltke: "No plan of operations extends with any certainty beyond the first contact with the main hostile force." The enemy does something unexpected, and the plan must change.`,
          `So good militaries issue clear intent rather than rigid detail — a philosophy called mission command. The commander states what must be achieved and why, then trusts those on the spot to work out how as circumstances shift. Because friction is certain, the ability to adapt under it matters more than the perfection of the original plan.`,
        ],
      },
      {
        heading: "Building in slack",
        body: [
          `If friction is inevitable, wise plans carry margin against it: spare time, held-back reserves, redundancy so one failure does not collapse the whole, and simplicity so there is less to go wrong. An intricate plan with no slack is brittle — it needs everything to work, which friction guarantees will not happen.`,
          `Experienced commanders also rehearse mentally how they will respond when things go wrong, so that they adapt rather than freeze. Since both sides suffer friction, the one that keeps functioning amid the chaos gains the edge. The skill is managing friction, not avoiding it.`,
        ],
      },
      {
        heading: "Why your plans go sideways",
        body: [
          `You meet friction whenever a plan hits reality. The project that looked straightforward runs into a sick colleague, a late supplier, a misread brief and a broken printer — none fatal alone, yet the deadline slips. The simple journey undone by traffic, a missed connection and a dead battery is friction in miniature. The lesson transfers directly: build in slack, keep plans simple, expect things to go wrong, and judge yourself less on having a flawless plan than on adapting well when reality refuses to cooperate. As boxers say, everyone has a plan until they get punched in the mouth.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What did Clausewitz mean by 'friction' in war?",
        choices: [
          { id: "a", label: "The cumulative drag of countless small problems that make real war harder than planned" },
          { id: "b", label: "The physical heat generated by weapons" },
          { id: "c", label: "A single catastrophic failure" },
          { id: "d", label: "The enemy's main attack" },
        ],
        correctChoiceId: "a",
        explanation: "Friction is the accumulation of minor difficulties — a lost unit, a garbled message, exhaustion, rain — that together turn a simple plan into a struggling muddle, so 'the simplest thing is difficult'.",
      },
      {
        dimension: "depth",
        prompt: "What is the 'fog of war'?",
        choices: [
          { id: "a", label: "The uncertainty and missing information a commander faces in real time" },
          { id: "b", label: "Literal fog on the battlefield" },
          { id: "c", label: "A type of chemical weapon" },
          { id: "d", label: "The smoke from artillery" },
        ],
        correctChoiceId: "a",
        explanation: "The fog of war is the confusion and incomplete, contradictory information commanders must decide on under pressure — itself a form of friction clouding judgement.",
      },
      {
        dimension: "reasoning",
        prompt: "What does Moltke's maxim that 'no plan survives contact with the enemy' imply for how to plan?",
        choices: [
          { id: "a", label: "A plan is a starting point to adapt from, not a rigid script to follow" },
          { id: "b", label: "Plans should never be made at all" },
          { id: "c", label: "The most detailed plan always wins" },
          { id: "d", label: "The enemy always follows your plan" },
        ],
        correctChoiceId: "a",
        explanation: "Because reality and the enemy intervene at the moment of contact, plans must change; good militaries favour clear intent and empower subordinates to adapt — mission command — rather than issuing rigid orders.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is an over-complex plan with no slack described as 'brittle'?",
        choices: [
          { id: "a", label: "Because it depends on everything working, which friction guarantees it will not" },
          { id: "b", label: "Because it is too short" },
          { id: "c", label: "Because it has too many reserves" },
          { id: "d", label: "Because complexity always defeats the enemy" },
        ],
        correctChoiceId: "a",
        explanation: "A complex plan with no margin needs every part to succeed, but friction ensures failures; a robust plan builds in time, reserves and redundancy so one failure does not collapse the whole.",
      },
      {
        dimension: "depth",
        prompt: "According to the lesson, what is the real skill regarding friction?",
        choices: [
          { id: "a", label: "Managing and coping with friction better than the enemy, not eliminating it" },
          { id: "b", label: "Completely removing all friction from operations" },
          { id: "c", label: "Ignoring friction entirely" },
          { id: "d", label: "Making the most detailed plan possible" },
        ],
        correctChoiceId: "a",
        explanation: "Friction cannot be eliminated; since both sides suffer it, the side that keeps functioning amid the chaos gains the edge — so the skill is coping and adapting, not avoiding it.",
      },
    ],
    sources: [
      { label: "Carl von Clausewitz, On War", note: "The origin of 'friction' and the fog of war.", type: "Primary", url: "https://www.gutenberg.org/ebooks/1946" },
      { label: "Friction / fog of war (overview)", note: "Reference on Clausewitzian friction and uncertainty.", type: "Reference", url: "https://en.wikipedia.org/wiki/Friction_(military_strategy)" },
    ],
  },
  {
    concept: "Centre of Gravity",
    level: "University",
    summary: "the source of strength that holds an opponent's system together",
    estimatedMinutes: 9,
    deck: "Not all targets are equal. Somewhere in any opponent lies the hub on which their whole capacity to resist depends — the thing that, if it collapses, brings everything else down with it. Finding this 'centre of gravity' is one of the deepest problems in strategy, because getting it wrong wastes your strength on the merely visible.",
    keyTerms: [
      { label: "Centre of gravity", value: "The source of an opponent's power on which their whole system depends." },
      { label: "Schwerpunkt", value: "The focal point where effort is concentrated to decisive effect." },
      { label: "Critical vulnerability", value: "A weak point through which the centre of gravity can be reached." },
      { label: "Concentration", value: "Focusing force against the decisive point rather than dispersing it." },
    ],
    sections: [
      {
        heading: "The hub of all power",
        body: [
          `Clausewitz called the centre of gravity "the hub of all power and movement, on which everything depends." An enemy is a system, and within it usually sits one thing that holds it together and sustains its ability to fight. Strike that, and the whole may collapse; strike anywhere else, and you can win a battle while the enemy fights on.`,
          `The strategist's hardest task is to look past the obvious. The centre of gravity might be the enemy's main army — but it could equally be their capital, a crucial alliance, a leader's personal authority, the loyalty of a population, an economic lifeline, or the public will to keep going. The question is always: what actually sustains this opponent's capacity to resist?`,
        ],
      },
      {
        heading: "It is not always the army",
        body: [
          `The great error is assuming the centre of gravity is simply the enemy's forces. Against a fragile coalition it may be the alliance itself, so the decisive move is to split it diplomatically. Against a guerrilla insurgency it is usually the population's support, not the fighters — so grinding down guerrilla units while alienating civilians can lose the war even as you win the firefights.`,
          `The United States in Vietnam inflicted enormous military losses yet never broke the true centre of gravity: the political will behind the insurgency, and eventually American public support at home. Spotting the real centre of gravity — which may be political, moral or economic rather than military — is what separates strategy from mere tactical success.`,
        ],
      },
      {
        heading: "Critical vulnerabilities",
        body: [
          `Identifying the centre of gravity is only half the problem, because it is usually well protected. So strategists look for "critical vulnerabilities" — the weak points through which it can be reached. If the enemy's centre of gravity is their fielded army, its critical vulnerability might be a fragile supply line whose severing paralyses it.`,
          `Tracing the chain from centre of gravity, to critical vulnerability, to the action you can actually take, is the heart of operational planning. It forces you to connect what you do to why it matters: taking a hill or destroying a unit is pointless unless it links, through cause and effect, to undermining the source of the enemy's power.`,
        ],
      },
      {
        heading: "Concentration and its risks",
        body: [
          `Because one point is decisive, the centre of gravity implies concentration — massing your strength there rather than spreading it evenly. The German concept of Schwerpunkt captures this: overwhelming force at the decisive place and moment, accepting weakness elsewhere. To be strong everywhere is to be decisive nowhere.`,
          `But the idea is a discipline, not a formula. The true centre of gravity is genuinely hard to identify and often clear only in hindsight; an opponent may have several, or one that shifts through a conflict. Concentrating against the wrong one is disastrous. Its value is in forcing the right question — what really sustains this opponent? — not in guaranteeing the answer.`,
        ],
      },
      {
        heading: "The keystone in your own problems",
        body: [
          `You use centre-of-gravity thinking whenever you find the one thing holding a situation together. A rival business may look strong across the board, but its real hub could be a single star founder, one key supplier, or the loyalty of a community — and competing head-on everywhere wastes effort compared with addressing that. A tangle of personal problems often has a keystone too: the one habit, relationship or constraint that, once changed, shifts the rest. Asking "what actually holds this together, and what weak point reaches it?" — instead of attacking whatever is most visible — is the everyday form of one of strategy's deepest ideas.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is a 'centre of gravity' in Clausewitz's sense?",
        choices: [
          { id: "a", label: "The source of an opponent's power on which their whole system depends" },
          { id: "b", label: "The geographic centre of the battlefield" },
          { id: "c", label: "The heaviest weapon an army has" },
          { id: "d", label: "The physical balance point of a tank" },
        ],
        correctChoiceId: "a",
        explanation: "The centre of gravity is 'the hub of all power and movement, on which everything depends' — strike it and the whole system may collapse; strike elsewhere and the enemy fights on.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is it dangerous to assume the centre of gravity is always the enemy's army?",
        choices: [
          { id: "a", label: "Because it may be political, moral or economic — like an alliance or a population's support — so you can win battles yet lose the war" },
          { id: "b", label: "Because armies never matter in war" },
          { id: "c", label: "Because the army is always the weakest point" },
          { id: "d", label: "Because centres of gravity do not exist" },
        ],
        correctChoiceId: "a",
        explanation: "Against a coalition the centre of gravity may be the alliance; against an insurgency, the population's support. Attacking the wrong one — as in Vietnam — means winning firefights while losing the war.",
      },
      {
        dimension: "depth",
        prompt: "What is a 'critical vulnerability'?",
        choices: [
          { id: "a", label: "A weak point through which the centre of gravity can be reached and attacked" },
          { id: "b", label: "The strongest part of the enemy's defences" },
          { id: "c", label: "The commander's personal flaw" },
          { id: "d", label: "A type of weapon" },
        ],
        correctChoiceId: "a",
        explanation: "The centre of gravity is often well protected, so critical vulnerabilities are the weak points that provide a path to it — like a fragile supply line whose severing paralyses a fielded army.",
      },
      {
        dimension: "reasoning",
        prompt: "What does the centre-of-gravity concept imply about concentrating force?",
        choices: [
          { id: "a", label: "Mass strength against the one decisive point rather than spreading it thin everywhere" },
          { id: "b", label: "Distribute force evenly across the whole front" },
          { id: "c", label: "Always keep all forces in reserve" },
          { id: "d", label: "Attack every point simultaneously" },
        ],
        correctChoiceId: "a",
        explanation: "Because one point is decisive, the Schwerpunkt principle concentrates overwhelming force there, accepting weakness elsewhere — being strong everywhere means being decisive nowhere.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is the centre of gravity called an analytical tool rather than a formula?",
        choices: [
          { id: "a", label: "Because identifying the true centre of gravity is genuinely hard, may shift, and concentrating against the wrong one can be disastrous" },
          { id: "b", label: "Because it always gives a guaranteed answer" },
          { id: "c", label: "Because it is never useful" },
          { id: "d", label: "Because enemies have no sources of strength" },
        ],
        correctChoiceId: "a",
        explanation: "The concept disciplines strategy to ask what really sustains an opponent, but the answer is often clear only in hindsight and may change; massing against a wrongly identified centre of gravity throws strength against the wrong thing.",
      },
    ],
    sources: [
      { label: "Carl von Clausewitz, On War", note: "The origin of the centre of gravity concept.", type: "Primary", url: "https://www.gutenberg.org/ebooks/1946" },
      { label: "Centre of gravity (military) (overview)", note: "Reference on the concept and its modern interpretation.", type: "Reference", url: "https://en.wikipedia.org/wiki/Center_of_gravity_(military)" },
    ],
  },
  {
    concept: "Logistics",
    level: "GCSE",
    summary: "movement and supply that make operations possible",
    estimatedMinutes: 7,
    deck: "Battles are won by the side that shows up fed, fuelled and armed. Behind every dramatic advance is an unglamorous machine of trucks, supply dumps and fuel lines — and again and again, campaigns have failed not because armies were beaten, but because they ran out of what they needed.",
    keyTerms: [
      { label: "Logistics", value: "The movement and supply of forces: food, fuel, ammunition, equipment and reinforcement." },
      { label: "Supply line", value: "The route along which supplies flow from base to the front." },
      { label: "Overextension", value: "Advancing beyond what your supply system can sustain." },
      { label: "Tail vs teeth", value: "The support forces behind the fighting forces at the front." },
    ],
    sections: [
      {
        heading: "The unglamorous foundation",
        body: [
          `Logistics is the practical business of keeping forces supplied and moving: food, fuel, ammunition, spare parts, medical care and reinforcements, delivered to the right place at the right time. A saying in military circles runs: "amateurs talk tactics, professionals talk logistics." The novice is dazzled by clever manoeuvres; the expert asks whether the force can actually be fed and fuelled to carry them out.`,
          `The reason is blunt: an army that cannot be supplied cannot fight, however brave or well-led. Modern forces consume staggering quantities of fuel, ammunition and food, all of which must be hauled — often over long distances into hostile territory. Logistics is the hidden circulatory system of war, and when it fails, the visible body dies.`,
        ],
      },
      {
        heading: "Supply lines and their limits",
        body: [
          `Forces depend on supply lines running from base to front, and these are both strength and vulnerability. As long as they hold, an army is sustained; cut them, and you can defeat it by starvation without a direct battle. So protecting your own supply lines while threatening the enemy's is central to strategy.`,
          `The great trap is overextension — advancing further or faster than the supply system can sustain. A force that outruns its logistics arrives exhausted and low on fuel and ammunition, unable to fight however far it has driven the enemy back. Success itself is dangerous, because a rapid advance stretches supply lines toward breaking, which is why wise commanders pace operations to what logistics can support.`,
        ],
      },
      {
        heading: "When logistics decided history",
        body: [
          `Napoleon's 1812 invasion of Russia is the classic case. His vast army pushed deep into Russia, but its supply system could not sustain it across the distances while the Russians retreated, destroying food and shelter. He reached Moscow, but the army disintegrated on the retreat — destroyed far more by hunger, cold and collapsed supply than by battle. The German invasion of the Soviet Union later foundered on the same overreach.`,
          `Conversely, the greatest feats of arms were often logistical triumphs. The 1944 Normandy invasion succeeded on an extraordinary supply operation — artificial harbours, fuel pipelines — that kept an army fed across a beachhead. Modern militaries pour resources into logistics precisely because wars are so often won or lost in the depots and transport networks, long before the shooting decides anything.`,
        ],
      },
      {
        heading: "Tail behind teeth",
        body: [
          `Militaries distinguish the "teeth" — combat forces that do the fighting — from the "tail" — the support forces that supply, transport, maintain and sustain them. It is tempting to think the teeth are what matter, but a large tail is what makes powerful teeth possible; in a modern force the ratio is heavily weighted toward support. Cut the tail to add more fighters and you get more mouths to feed and no way to feed them.`,
          `The wider principle reaches beyond the military: visible action depends on invisible support systems. The dramatic front-line activity that gets attention is only possible because of the unglamorous infrastructure behind it, and starving that infrastructure to pour everything into the visible edge eventually starves the edge itself.`,
        ],
      },
      {
        heading: "The supply chain behind everything",
        body: [
          `You depend on logistics far more than you notice. The shop shelf is stocked by a supply chain of astonishing complexity, and you only see it when a link breaks — a shortage, a shipping delay, a fuel crisis. Any ambitious plan of your own has a logistics dimension: the event that needs venue, catering and equipment all to arrive; the project that stalls because a key resource ran out. The military lesson applies directly — exciting goals fail on boring details, success can overextend you beyond what you can sustain, and it pays to invest in the unglamorous support behind the visible work. Amateurs plan the goal; professionals plan how to supply it.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What does the saying 'amateurs talk tactics, professionals talk logistics' capture?",
        choices: [
          { id: "a", label: "That experts recognise supply and movement as the foundation on which clever manoeuvres depend" },
          { id: "b", label: "That tactics never matter in war" },
          { id: "c", label: "That professionals dislike fighting" },
          { id: "d", label: "That logistics is only about paperwork" },
        ],
        correctChoiceId: "a",
        explanation: "The novice is dazzled by manoeuvres; the expert asks whether the force can actually be fed and fuelled to carry them out — an army that cannot be supplied cannot fight.",
      },
      {
        dimension: "depth",
        prompt: "What is 'overextension' in a military advance?",
        choices: [
          { id: "a", label: "Advancing faster or further than the supply system can sustain" },
          { id: "b", label: "Keeping too many troops in reserve" },
          { id: "c", label: "Attacking too slowly" },
          { id: "d", label: "Having too short a supply line" },
        ],
        correctChoiceId: "a",
        explanation: "Overextension is outrunning your logistics: the force arrives exhausted and low on supplies, unable to fight effectively however far it has pushed the enemy back — success itself stretches supply lines to breaking.",
      },
      {
        dimension: "reasoning",
        prompt: "Why did Napoleon's 1812 invasion of Russia end in disaster?",
        choices: [
          { id: "a", label: "His supply system could not sustain the army across vast distances, so it disintegrated from hunger and cold rather than battle" },
          { id: "b", label: "He lost a single decisive battle at the border" },
          { id: "c", label: "His army was outnumbered ten to one" },
          { id: "d", label: "He never reached Russian territory" },
        ],
        correctChoiceId: "a",
        explanation: "The Russians retreated destroying supplies while Napoleon's logistics failed over the huge distances; his army reached Moscow but was destroyed on the retreat by collapsed supply, hunger and cold, not by battle.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can cutting an enemy's supply line defeat them without a direct battle?",
        choices: [
          { id: "a", label: "Because starving a force of fuel, food and ammunition makes it unable to fight, however brave" },
          { id: "b", label: "Because supply lines are the enemy's strongest defence" },
          { id: "c", label: "Because it is against the rules of war" },
          { id: "d", label: "Because supplies are unimportant to modern armies" },
        ],
        correctChoiceId: "a",
        explanation: "Forces depend on supply lines flowing from base to front; cut them and the army is starved of what it needs, which is why protecting your own and threatening the enemy's is central to strategy.",
      },
      {
        dimension: "depth",
        prompt: "What does the distinction between 'teeth' and 'tail' highlight?",
        choices: [
          { id: "a", label: "That the support forces (tail) are what make the combat forces (teeth) possible" },
          { id: "b", label: "That combat forces need no support" },
          { id: "c", label: "That the tail should always be eliminated" },
          { id: "d", label: "That teeth and tail are the same thing" },
        ],
        correctChoiceId: "a",
        explanation: "The tail — supply, transport, maintenance — is what makes powerful teeth possible; cutting it to add fighters leaves more mouths to feed and no way to feed them, showing visible action depends on invisible support.",
      },
    ],
    sources: [
      { label: "Military logistics (overview)", note: "Reference on supply, the teeth-to-tail ratio and historical cases.", type: "Reference", url: "https://en.wikipedia.org/wiki/Military_logistics" },
      { label: "Napoleon's invasion of Russia (overview)", note: "The classic case of logistical overreach.", type: "Reference", url: "https://en.wikipedia.org/wiki/French_invasion_of_Russia" },
    ],
  },
  {
    concept: "Deterrence",
    level: "A-level",
    summary: "preventing action by making costs credible",
    estimatedMinutes: 8,
    deck: "The cheapest victory is the war that never happens because your opponent decides it isn't worth it. Deterrence is the art of preventing an action by convincing an adversary that the cost will outweigh the gain — a strategy fought entirely in the mind of the enemy, where belief matters more than force.",
    keyTerms: [
      { label: "Deterrence", value: "Preventing an action by threatening costs that outweigh the expected benefit." },
      { label: "Capability", value: "Actually possessing the means to impose the threatened cost." },
      { label: "Credibility", value: "The adversary believing you would actually carry out the threat." },
      { label: "Mutually assured destruction", value: "Deterrence by the certainty that any nuclear attack would be answered in kind." },
    ],
    sections: [
      {
        heading: "Winning by preventing",
        body: [
          `Deterrence stops an adversary from acting by convincing them the costs will exceed any benefit. Unlike defence, which resists an attack once it comes, deterrence prevents the attack from being attempted at all. When it works perfectly, nothing happens — no war — which makes success invisible and easily taken for granted, yet it is often the most valuable outcome of all.`,
          `Crucially, deterrence operates in the mind of the opponent. It is not about your forces in the abstract but about the adversary's beliefs and calculations: you are trying to make their intended action look like a bad deal. Deterrence succeeds or fails on what the adversary believes will happen, not on the physical facts alone.`,
        ],
      },
      {
        heading: "The three ingredients",
        body: [
          `A threat deters only when three things line up. Capability: you must actually possess the means to impose the cost — an empty threat deters no one. Credibility: the adversary must believe you would use that capability if they act. Communication: they must clearly understand the threat and what triggers it, or they cannot factor it in.`,
          `Credibility is usually the hardest. A country may plainly have the capability to retaliate, yet it is doubtful whether it really would, given the costs to itself — and adversaries probe that doubt. Much of the theatre of deterrence — declarations, alliances, forces positioned as tripwires, reputations for resolve — exists to shore up credibility. A deterrent that is capable but not credible is a bluff waiting to be called.`,
        ],
      },
      {
        heading: "The nuclear extreme",
        body: [
          `Nuclear deterrence shaped the entire Cold War through the doctrine of mutually assured destruction. Its grim logic: if both superpowers had enough nuclear weapons, protected so they could survive a first strike and retaliate devastatingly, then neither could attack without guaranteeing its own destruction. The certainty of catastrophic retaliation made a first strike irrational, and so the capacity for mutual annihilation kept the peace.`,
          `This produced counterintuitive conclusions. Vulnerability could be stabilising, since both sides knowing they cannot escape retaliation removes the temptation to strike first; defences could be destabilising, since a side that could shield itself might risk attacking. The whole apparatus existed to ensure it would never be used.`,
        ],
      },
      {
        heading: "The limits and dangers",
        body: [
          `Deterrence is powerful but fragile. It assumes a rational adversary weighing costs and benefits, yet opponents may be reckless, desperate, misinformed, or willing to bear costs you thought unbearable. It can fail through miscalculation — each side misreading the other's resolve, so a threat meant to prevent war instead provokes it, or an adversary crosses a line they did not know was there.`,
          `Threats can also spiral, as each side raises the stakes to keep its credibility, edging toward the very conflict deterrence was meant to avoid. Deterrence is therefore not an automatic mechanism but a delicate, dangerous balancing act that depends on clear communication and a shared interest in avoiding catastrophe — preserving peace well when those conditions hold, and failing disastrously when they fray.`,
        ],
      },
      {
        heading: "The lock and the alarm sign",
        body: [
          `You practise deterrence in everyday life. A visible burglar alarm or a "beware of the dog" sign deters by making the expected cost of trying outweigh the gain — and the sign often works without a real dog, which is deterrence by credibility rather than capability. A parent's or manager's credible consequence prevents misbehaviour that never has to be punished. You also see it fail in familiar ways: the threat nobody believes because it is never carried out, the escalating standoff where neither side backs down. Understanding capability, credibility and communication explains why some threats prevent action while others just invite someone to call your bluff.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "How does deterrence differ from defence?",
        choices: [
          { id: "a", label: "Deterrence prevents an action from being attempted; defence resists an attack once it comes" },
          { id: "b", label: "They are identical" },
          { id: "c", label: "Deterrence only works after a war starts" },
          { id: "d", label: "Defence forces an adversary to act" },
        ],
        correctChoiceId: "a",
        explanation: "Deterrence stops the action from ever being attempted by convincing the adversary it is not worth it; if it works perfectly, nothing happens — making success invisible but often most valuable.",
      },
      {
        dimension: "depth",
        prompt: "What are the three ingredients a threat needs to deter?",
        choices: [
          { id: "a", label: "Capability, credibility and communication" },
          { id: "b", label: "Speed, secrecy and surprise" },
          { id: "c", label: "Money, manpower and morale" },
          { id: "d", label: "Defence, attack and retreat" },
        ],
        correctChoiceId: "a",
        explanation: "You must possess the means (capability), the adversary must believe you would use them (credibility), and they must understand the threat and its trigger (communication) — all three must line up.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is credibility usually the hardest ingredient of deterrence?",
        choices: [
          { id: "a", label: "Because an adversary may doubt you would really carry out a threat given the costs to yourself, and will probe that doubt" },
          { id: "b", label: "Because capability is impossible to obtain" },
          { id: "c", label: "Because threats cannot be communicated" },
          { id: "d", label: "Because deterrence is purely physical" },
        ],
        correctChoiceId: "a",
        explanation: "A capability the adversary doubts you would ever use deters no one; much of deterrence — alliances, tripwires, reputations for resolve — exists to shore up credibility, since a capable but non-credible deterrent is a bluff waiting to be called.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the logic of mutually assured destruction (MAD)?",
        choices: [
          { id: "a", label: "If any nuclear attack guarantees devastating retaliation, a first strike is suicidal, so neither side attacks" },
          { id: "b", label: "Whichever side strikes first automatically wins" },
          { id: "c", label: "Nuclear weapons make defence easy" },
          { id: "d", label: "Deterrence requires actually using the weapons" },
        ],
        correctChoiceId: "a",
        explanation: "MAD rests on survivable retaliation: if both sides can answer a first strike devastatingly, attacking guarantees your own destruction, so the capacity for mutual annihilation paradoxically kept the peace.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can deterrence fail through miscalculation?",
        choices: [
          { id: "a", label: "Because each side may misread the other's resolve or cross a line they did not realise was there" },
          { id: "b", label: "Because deterrence always works automatically" },
          { id: "c", label: "Because adversaries are always perfectly rational" },
          { id: "d", label: "Because communication is never needed" },
        ],
        correctChoiceId: "a",
        explanation: "Deterrence rests on belief and communication, which can go wrong: an adversary may be misinformed or desperate, or misjudge resolve, so a threat meant to prevent conflict can instead provoke it.",
      },
    ],
    sources: [
      { label: "Deterrence theory (overview)", note: "Reference on capability, credibility and nuclear deterrence.", type: "Reference", url: "https://en.wikipedia.org/wiki/Deterrence_theory" },
      { label: "Thomas Schelling, The Strategy of Conflict", note: "Foundational work on deterrence and bargaining.", type: "Reference", url: "https://en.wikipedia.org/wiki/The_Strategy_of_Conflict" },
    ],
  },
  {
    concept: "Manoeuvre",
    level: "A-level",
    summary: "gaining advantage through movement, position and tempo",
    estimatedMinutes: 8,
    deck: "There are two ways to win a fight: grind the enemy down by sheer force, or outmanoeuvre them so their strength never comes to bear. Manoeuvre is the second way — using movement, position and speed to defeat an opponent's ability to fight, rather than simply destroying it piece by piece.",
    keyTerms: [
      { label: "Manoeuvre warfare", value: "Defeating the enemy's ability to fight through movement, not just attrition." },
      { label: "Attrition", value: "Winning by wearing the enemy down through direct destruction." },
      { label: "Indirect approach", value: "Liddell Hart's idea of striking where the enemy is unprepared, not head-on." },
      { label: "Tempo / the OODA loop", value: "Acting faster than the enemy can react, disrupting their decisions." },
    ],
    sections: [
      {
        heading: "Two ways to win",
        body: [
          `There are two broad philosophies of defeating an enemy. Attrition wins by direct destruction: apply superior firepower and numbers until the enemy can no longer fight. Manoeuvre wins by movement, position and speed: defeat the enemy's ability and will to fight rather than physically destroying every piece of them. Where attrition targets their forces, manoeuvre targets their cohesion, command and balance — aiming to make their strength irrelevant.`,
          `The manoeuvre approach avoids strength and strikes at weakness, seeking to put the enemy in an impossible position where their forces, however powerful, cannot be used. A classic aim is encirclement: cutting a force off so it is defeated not by being battered in battle but by being trapped, its supply and escape severed and its will to resist broken.`,
        ],
      },
      {
        heading: "The indirect approach",
        body: [
          `Reflecting on the frontal slaughter of the First World War, the military thinker B.H. Liddell Hart championed the "indirect approach". Studying history, he concluded that the most successful commanders rarely won by attacking head-on at the enemy's strongest point; instead they moved indirectly, striking where the enemy was unprepared and dislocating them before the decisive blow. The direct approach consolidates resistance; the indirect unravels it.`,
          `This echoes Sun Tzu in ancient China: the acme of skill is to defeat the enemy without fighting, and the skilled attacker strikes where the enemy is weak and unprepared. Both point away from brute confrontation and toward using deception and movement to gain a position so advantageous that the actual fighting is brief, decisive, or even unnecessary.`,
        ],
      },
      {
        heading: "Speed and the enemy's mind",
        body: [
          `A crucial dimension of manoeuvre is tempo — speed relative to the enemy. The American strategist John Boyd described the "OODA loop": every actor continuously Observes, Orients, Decides and Acts, then repeats. Cycle through this loop faster than your opponent and you get inside their decision-making, so that by the time they respond to your last move you have already made your next. The enemy is perpetually reacting to a situation that no longer exists.`,
          `This targets the mind, not just the body. A force repeatedly surprised and forced to react falls into confusion and paralysis: command breaks down, units lose coordination, and will collapses — often while plenty of physical strength remains. Manoeuvre warfare aims exactly at shattering cohesion through speed and surprise, defeating the enemy psychologically before, or instead of, destroying them.`,
        ],
      },
      {
        heading: "Blitzkrieg and its limits",
        body: [
          `The famous demonstration was the German "Blitzkrieg" of 1940. Fast-moving armoured columns, coordinated by radio and supported by aircraft, bypassed strong points and drove deep into the French rear. The French army — larger and in places well-equipped — was not so much destroyed as dislocated: its command could not cope with the tempo, its cohesion collapsed, and it fell apart with startling speed.`,
          `But manoeuvre is not a magic key. It depends on mobility, good communications, trusted subordinates, and an enemy who can be dislocated. Against a resilient, dispersed or dug-in opponent, or in terrain that denies movement, its opportunities shrink and attrition may be unavoidable — and a manoeuvre that overreaches can expose itself. The lasting lesson is that defeating an enemy's ability and will to fight is often smarter, and cheaper, than trying to destroy them piece by piece.`,
        ],
      },
      {
        heading: "Outflanking your problems",
        body: [
          `You use manoeuvre thinking whenever you win by cleverness rather than brute force. A smaller business rarely beats a stronger competitor head-on; it finds an angle they are not defending, moves faster than they can react, and competes where the rival is weak — pure indirect approach. In an argument, attacking someone's strongest point hardens their resistance, while addressing the issue from an unexpected angle can dissolve it. Even in your own tasks, going around a hard problem often beats grinding straight through it. Movement, position and speed can overcome strength that a direct assault never could.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "How does manoeuvre differ from attrition?",
        choices: [
          { id: "a", label: "Manoeuvre defeats the enemy's ability and will to fight through movement; attrition grinds them down by direct destruction" },
          { id: "b", label: "Manoeuvre uses more firepower than attrition" },
          { id: "c", label: "They are two words for the same approach" },
          { id: "d", label: "Attrition avoids the enemy's strength" },
        ],
        correctChoiceId: "a",
        explanation: "Attrition targets the enemy's forces with superior firepower; manoeuvre targets their cohesion, command and balance through movement and speed, aiming to make their strength irrelevant rather than destroy every piece.",
      },
      {
        dimension: "reasoning",
        prompt: "What did Liddell Hart argue with his 'indirect approach'?",
        choices: [
          { id: "a", label: "That striking where the enemy is unprepared unravels their resistance, while a direct head-on attack consolidates it" },
          { id: "b", label: "That frontal assaults on the strongest point are always best" },
          { id: "c", label: "That movement never matters" },
          { id: "d", label: "That numbers alone decide every battle" },
        ],
        correctChoiceId: "a",
        explanation: "Studying history, Liddell Hart found the best commanders moved indirectly, dislocating the enemy where unprepared rather than attacking head-on — the direct approach hardens resistance, the indirect unravels it.",
      },
      {
        dimension: "depth",
        prompt: "What is the idea behind Boyd's 'OODA loop'?",
        choices: [
          { id: "a", label: "Cycling through Observe–Orient–Decide–Act faster than the enemy so they are perpetually reacting to a situation that no longer exists" },
          { id: "b", label: "A formation for tanks" },
          { id: "c", label: "A way to count enemy forces" },
          { id: "d", label: "A supply-management technique" },
        ],
        correctChoiceId: "a",
        explanation: "Boyd argued that acting faster than your opponent's decision cycle gets you 'inside' their loop, so by the time they respond to your last move you have made your next — targeting the enemy's mind, not just their body.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is the German Blitzkrieg of 1940 a classic example of manoeuvre defeating attrition?",
        choices: [
          { id: "a", label: "Fast armoured columns dislocated and paralysed a larger French army whose command could not cope with the tempo" },
          { id: "b", label: "The Germans simply had far more soldiers" },
          { id: "c", label: "The French had no army at all" },
          { id: "d", label: "It relied purely on frontal assault" },
        ],
        correctChoiceId: "a",
        explanation: "Fast-moving columns bypassed strong points and drove deep, so the formidable French army was not destroyed but dislocated — its command overwhelmed by the tempo, its cohesion collapsing with startling speed.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is manoeuvre not a guaranteed 'magic key' to victory?",
        choices: [
          { id: "a", label: "It depends on mobility, communications and a dislocatable enemy; against dug-in or dispersed foes, attrition may be unavoidable" },
          { id: "b", label: "Because movement is always impossible" },
          { id: "c", label: "Because attrition always wins" },
          { id: "d", label: "Because speed never helps" },
        ],
        correctChoiceId: "a",
        explanation: "Manoeuvre needs mobility, good communications, trusted subordinates and an enemy that can be dislocated; against resilient or dug-in opponents, or in restrictive terrain, its opportunities shrink and overreach can expose the attacker.",
      },
    ],
    sources: [
      { label: "Maneuver warfare (overview)", note: "Reference on manoeuvre versus attrition, the OODA loop and Blitzkrieg.", type: "Reference", url: "https://en.wikipedia.org/wiki/Maneuver_warfare" },
      { label: "Sun Tzu, The Art of War", note: "Ancient source of the indirect approach and striking at weakness.", type: "Primary", url: "https://www.gutenberg.org/ebooks/132" },
    ],
  },
  {
    concept: "Intelligence",
    level: "A-level",
    summary: "information used to reduce uncertainty about opponents and terrain",
    estimatedMinutes: 8,
    deck: "War is a contest fought in the dark, and intelligence is the effort to switch on a light. Knowing where the enemy is, what they have, and what they intend can be worth more than extra divisions — but intelligence is never certain, can be faked, and is only as good as the judgement that turns raw information into understanding.",
    keyTerms: [
      { label: "Intelligence", value: "Information about an adversary and environment, gathered and analysed to inform decisions." },
      { label: "Collection vs analysis", value: "Gathering raw information versus interpreting what it means." },
      { label: "Signal vs noise", value: "The true, relevant information amid a mass of irrelevant or misleading data." },
      { label: "Deception", value: "Deliberately feeding an adversary false information to mislead them." },
    ],
    sections: [
      {
        heading: "Reducing the fog",
        body: [
          `Intelligence is information about the enemy, the terrain and the wider situation, gathered and analysed to reduce a commander's uncertainty. Because war is dominated by fog, anything that clarifies the picture is enormously valuable: knowing the enemy's location, strength and intentions lets a commander concentrate force where it matters and avoid traps. Good intelligence is a force multiplier, letting a smaller, better-informed force outperform a larger blind one.`,
          `Sun Tzu put knowledge at the centre of strategy: "If you know the enemy and know yourself, you need not fear the result of a hundred battles." Victory flows from superior understanding — of the enemy and of your own situation — and ignorance is the root of defeat.`,
        ],
      },
      {
        heading: "From raw data to understanding",
        body: [
          `Intelligence is a process, not just a pile of facts. Collection — through reconnaissance, spies, intercepted communications, imagery and open sources — gathers raw material. But raw information is not understanding: it must be analysed, pieced together and turned into an assessment of what the enemy can do and is likely to do. Analysis, not collection, is where data becomes actionable, and where much can go wrong.`,
          `A central challenge is separating "signal" from "noise" — the genuinely relevant, true information from the surrounding mass of ambiguous or misleading data. The crucial clue is usually buried among distractions, and looks obvious only in hindsight. Many famous intelligence failures were not failures to collect the vital information, which was often present, but failures to recognise its significance amid the noise, or to overcome preconceptions about what the enemy would do.`,
        ],
      },
      {
        heading: "The enemy is trying to fool you",
        body: [
          `Intelligence works against a thinking adversary who actively tries to deceive, which makes it unlike studying a passive natural phenomenon. Deception — feeding false information to create a misleading picture — has decided campaigns. Before the D-Day landings in 1944, the Allies mounted Operation Fortitude, using fake armies, false radio traffic and double agents to convince the Germans the main invasion would come at the Pas-de-Calais rather than Normandy, pinning German forces in the wrong place.`,
          `So intelligence must always ask not only "what is the enemy doing?" but "is the enemy trying to make me believe something false?" Information that conveniently confirms what you expected, or arrives suspiciously easily, deserves scepticism. Trusting intelligence naively can be worse than having none, if the enemy planted it.`,
        ],
      },
      {
        heading: "The limits of knowing",
        body: [
          `Intelligence is never certain or complete. It deals in probabilities and assessments, not facts, and good analysts express appropriate uncertainty rather than false confidence. The commander must decide and act on the best available, always imperfect, picture, weighing the risk that it is wrong — neither treating an estimate as a guarantee nor being paralysed by uncertainty.`,
          `Intelligence is also vulnerable to the tendency to see what you expect. Analysts and leaders fit ambiguous evidence to their preconceptions, dismiss warnings that contradict their assumptions, and are misled by hope and fear — biases that produce dramatic surprises even when the raw information was available. Good intelligence therefore requires disciplined, self-critical thinking that questions assumptions, not just data-gathering. The hardest part is interpreting honestly.`,
        ],
      },
      {
        heading: "Doing your homework",
        body: [
          `You practise intelligence whenever you reduce uncertainty before a decision. Researching a company before an interview, checking reviews before a big purchase, or scouting the other side before a negotiation is collection and analysis in miniature — and the raw information is useless until you interpret what it means for you. You face the enemy's tricks too: fake reviews, a carefully managed impression, a deal that looks too good. And you battle your own bias — the temptation to believe what confirms what you already wanted. Know the situation and yourself, distrust convenient information, and separate the real signal from the noise before you commit.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is the purpose of military intelligence?",
        choices: [
          { id: "a", label: "To gather and analyse information that reduces a commander's uncertainty about the enemy and situation" },
          { id: "b", label: "To increase the confusion of one's own forces" },
          { id: "c", label: "To replace the need for any soldiers" },
          { id: "d", label: "To guarantee certainty about the future" },
        ],
        correctChoiceId: "a",
        explanation: "Intelligence reduces the fog of missing information by building an accurate picture of the enemy and terrain, letting a commander concentrate force and avoid traps — a genuine force multiplier.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is analysis, not collection, where raw data becomes actionable intelligence?",
        choices: [
          { id: "a", label: "Because a pile of facts is useless until it is interpreted into an assessment of what the enemy can and will do" },
          { id: "b", label: "Because collecting information is impossible" },
          { id: "c", label: "Because analysis means simply storing the data" },
          { id: "d", label: "Because the enemy provides the analysis" },
        ],
        correctChoiceId: "a",
        explanation: "Collection gathers raw material, but understanding requires piecing it together and interpreting it; a mass of facts means nothing until analysis turns it into an assessment — and that is where much goes wrong.",
      },
      {
        dimension: "reasoning",
        prompt: "Why are many intelligence failures actually failures of interpretation rather than collection?",
        choices: [
          { id: "a", label: "Because the vital signal was often present but not recognised amid the noise, or was dismissed due to preconceptions" },
          { id: "b", label: "Because the information was never gathered at all" },
          { id: "c", label: "Because intelligence is always perfectly clear" },
          { id: "d", label: "Because enemies never hide anything" },
        ],
        correctChoiceId: "a",
        explanation: "The crucial clue is usually buried among distractions; failures often stem from not recognising its significance amid the noise or from preconceptions about what the enemy would do, not from failing to collect it.",
      },
      {
        dimension: "reasoning",
        prompt: "What does Operation Fortitude before D-Day illustrate?",
        choices: [
          { id: "a", label: "The power of deception — feeding false information to convince the enemy the invasion would come at the wrong place" },
          { id: "b", label: "That intelligence is never used in real war" },
          { id: "c", label: "That collection is more important than analysis" },
          { id: "d", label: "That the Germans had no intelligence service" },
        ],
        correctChoiceId: "a",
        explanation: "The Allies used fake armies, false radio traffic and double agents to convince the Germans the main landing would be at the Pas-de-Calais, showing intelligence works against a thinking enemy who actively deceives.",
      },
      {
        dimension: "depth",
        prompt: "Why can trusting intelligence naively be worse than having none?",
        choices: [
          { id: "a", label: "Because a thinking enemy may have planted false information, and convenient intelligence can be a deliberate trap" },
          { id: "b", label: "Because intelligence is always completely accurate" },
          { id: "c", label: "Because more information always paralyses decisions" },
          { id: "d", label: "Because enemies never try to deceive" },
        ],
        correctChoiceId: "a",
        explanation: "Because the adversary actively tries to deceive, information that conveniently confirms expectations or arrives suspiciously easily deserves scepticism; naively trusting planted intelligence can be disastrous.",
      },
    ],
    sources: [
      { label: "Sun Tzu, The Art of War", note: "The classic emphasis on knowing the enemy and yourself.", type: "Primary", url: "https://www.gutenberg.org/ebooks/132" },
      { label: "Military intelligence (overview)", note: "Reference on collection, analysis, deception and intelligence failure.", type: "Reference", url: "https://en.wikipedia.org/wiki/Military_intelligence" },
    ],
  },
  {
    concept: "Morale",
    level: "GCSE",
    summary: "will, cohesion and confidence under strain",
    estimatedMinutes: 7,
    deck: "Armies are not defeated when they run out of soldiers, but when their soldiers lose the will to fight. Morale — the confidence, cohesion and endurance of people under strain — is one of the most decisive forces in war, so much so that Napoleon rated it three times more important than physical strength.",
    keyTerms: [
      { label: "Morale", value: "The will, confidence and cohesion of a group under stress and danger." },
      { label: "Unit cohesion", value: "The bonds between members of a group that hold them together under strain." },
      { label: "The moral factor", value: "The human, psychological element of war, distinct from physical strength." },
      { label: "Breaking point", value: "When morale collapses and a force ceases to function, though physically intact." },
    ],
    sections: [
      {
        heading: "The three-to-one factor",
        body: [
          `Morale is the psychological strength of a fighting force: its confidence, its will to keep going, and the cohesion that holds it together under danger. It is intangible and hard to measure, yet one of the most powerful factors in war. Napoleon summed it up: "The moral is to the physical as three to one" — the human and psychological element matters roughly three times as much as the physical.`,
          `Forces do not usually fight until literally destroyed. Long before that, if morale collapses, they stop functioning — soldiers surrender, flee, or simply cease to obey, though they could physically fight on. A force that has lost its will is beaten whatever its strength on paper, while a force with high morale can endure appalling losses and keep fighting. The contest is often to break the enemy's will and preserve your own.`,
        ],
      },
      {
        heading: "Cohesion holds the line",
        body: [
          `Studies of soldiers in combat found something striking: what keeps most people fighting under extreme danger is not grand ideology or hatred of the enemy but loyalty to the small group of comrades around them. This is unit cohesion — the bonds of trust and mutual obligation within a small team. Soldiers endure and risk their lives largely so as not to let down the men beside them.`,
          `That makes cohesion a central concern. Well-led units with strong internal bonds are far more resilient than collections of individuals, however brave each may be, which is why militaries invest so heavily in building group identity through shared hardship and training. It is also why breaking up established units, or feeding replacements piecemeal to strangers, quietly wrecks fighting power: the strength of the whole rests on invisible bonds between its members.`,
        ],
      },
      {
        heading: "How morale breaks",
        body: [
          `Morale can collapse suddenly. It is eroded by exhaustion, heavy or seemingly pointless losses, poor leadership, lack of food and rest, the sense that a cause is hopeless or sacrifices wasted, and above all by fear that overwhelms cohesion. When soldiers come to believe fighting on is futile, or that their leaders neither know nor care what they are doing, the will to continue drains away, and a force can pass a breaking point after which it disintegrates rapidly.`,
          `This is why attacking the enemy's morale is a strategic aim in itself. Shock, surprise, encirclement and a sense of hopelessness aim not to kill every enemy but to convince them that resistance is pointless. A surrounded force often surrenders not because it cannot fight but because its morale breaks — which is why much of manoeuvre warfare targets will rather than bodies.`,
        ],
      },
      {
        heading: "Building and sustaining will",
        body: [
          `Sustaining morale is a core task of leadership. Good leaders build it through competence that earns trust, through sharing hardship rather than staying safely apart, through visible care for their people's welfare, and through giving actions meaning so that sacrifice feels worthwhile. Soldiers endure far more for a leader they trust and a cause they believe in, and morale can be squandered by callous or incompetent leadership.`,
          `The deeper lesson is that human will is strategic material, as real and important as fuel or ammunition, and must be managed as deliberately. A commander who spends their people carelessly, hides from them, or leaves them without purpose will find fighting power collapsing regardless of numbers.`,
        ],
      },
      {
        heading: "The team that punches above its weight",
        body: [
          `You have seen morale decide outcomes far from any battlefield. The sports team that beats a more talented opponent through belief and togetherness, the small business that outworks a bigger rival because its people care, the project team that either rallies or falls apart under pressure — all turn on morale and cohesion, not just resources. You feel your own morale rise and fall with fatigue, purpose, and whether you feel supported. And you know good and bad leadership when you meet it: the boss whose visible care and competence make you go the extra mile, versus the one whose indifference drains everyone's will. Napoleon's ratio holds well beyond war — spirit and cohesion regularly beat raw strength.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What did Napoleon mean by 'the moral is to the physical as three to one'?",
        choices: [
          { id: "a", label: "That the psychological and human element of war matters far more than physical strength" },
          { id: "b", label: "That armies should be three times larger" },
          { id: "c", label: "That morality is unimportant in war" },
          { id: "d", label: "That equipment always decides battles" },
        ],
        correctChoiceId: "a",
        explanation: "The 'moral' factor — will, confidence, cohesion — outweighs the physical roughly three to one, because forces usually stop fighting when their will collapses, long before they are physically destroyed.",
      },
      {
        dimension: "reasoning",
        prompt: "According to combat studies, what most keeps soldiers fighting under extreme danger?",
        choices: [
          { id: "a", label: "Loyalty to the small group of comrades immediately around them — unit cohesion" },
          { id: "b", label: "Hatred of the enemy above all" },
          { id: "c", label: "Grand political ideology alone" },
          { id: "d", label: "The promise of higher pay" },
        ],
        correctChoiceId: "a",
        explanation: "What sustains most people in combat is loyalty to their immediate comrades — the bonds of trust within a small team — so they endure and risk their lives largely so as not to let the group down.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can feeding replacements piecemeal to strangers quietly wreck fighting power?",
        choices: [
          { id: "a", label: "Because it undermines unit cohesion, the invisible bonds that make a group resilient under pressure" },
          { id: "b", label: "Because more soldiers always reduce strength" },
          { id: "c", label: "Because replacements never fight" },
          { id: "d", label: "Because cohesion is irrelevant to morale" },
        ],
        correctChoiceId: "a",
        explanation: "The strength of the whole rests on bonds of trust between members; breaking up units or adding strangers piecemeal erodes cohesion, so the group loses the resilience that would let it withstand pressure.",
      },
      {
        dimension: "depth",
        prompt: "Why does a surrounded force often surrender though it could still physically fight?",
        choices: [
          { id: "a", label: "Because its morale breaks under the belief that its situation is hopeless" },
          { id: "b", label: "Because it has literally run out of soldiers" },
          { id: "c", label: "Because surrounding is against the rules" },
          { id: "d", label: "Because it always has no weapons left" },
        ],
        correctChoiceId: "a",
        explanation: "Encirclement targets will, not just bodies: convinced that resistance is pointless, a force's morale collapses and it surrenders even while physically capable of fighting on — which is why much of manoeuvre warfare targets morale.",
      },
      {
        dimension: "reasoning",
        prompt: "How do good leaders sustain morale?",
        choices: [
          { id: "a", label: "Through trusted competence, sharing hardship, caring for their people's welfare, and giving actions meaning" },
          { id: "b", label: "By staying safely apart and issuing harsh punishments only" },
          { id: "c", label: "By ignoring their people's psychological state" },
          { id: "d", label: "By keeping the purpose of actions secret" },
        ],
        correctChoiceId: "a",
        explanation: "Morale is actively created: leaders build it by earning trust through competence, sharing hardship rather than staying safe, visibly caring for welfare, and giving sacrifice meaning — and can squander it through callousness.",
      },
    ],
    sources: [
      { label: "Morale (overview)", note: "Reference on morale, unit cohesion and the moral factor in war.", type: "Reference", url: "https://en.wikipedia.org/wiki/Morale" },
      { label: "Unit cohesion (overview)", note: "Reference on the bonds that sustain fighting power.", type: "Reference", url: "https://en.wikipedia.org/wiki/Unit_cohesion" },
    ],
  },
  {
    concept: "Asymmetric Warfare",
    level: "University",
    summary: "conflict between unequal actors using different methods",
    estimatedMinutes: 9,
    deck: "When a vastly weaker force takes on a superpower, it does not lose by refusing to fight the superpower's kind of war. Asymmetric warfare is what happens when unequal opponents fight by different rules — and it explains how guerrillas and insurgents have repeatedly frustrated far stronger conventional armies.",
    keyTerms: [
      { label: "Asymmetric warfare", value: "Conflict between opponents of very unequal strength using different methods." },
      { label: "Guerrilla warfare", value: "Irregular fighters using hit-and-run tactics, avoiding decisive battle." },
      { label: "The weaker actor's logic", value: "The weak refuse to fight the strong's way, choosing where the strong is vulnerable." },
      { label: "Political endurance", value: "Winning by outlasting the enemy's will, not by military victory." },
    ],
    sections: [
      {
        heading: "Refusing the strong's game",
        body: [
          `Asymmetric warfare is conflict between opponents of grossly unequal strength, in which the weaker side, unable to win a straight fight, adopts fundamentally different methods. The strong power's crucial error is to assume the weaker actor will fight the same kind of war — meeting tanks with tanks — where its advantages in firepower and technology would decide. The weak actor's whole strategy is precisely not to do this: to refuse the battle the strong wants and choose one the strong is poorly suited to fight.`,
          `A conventionally overwhelming force can therefore be curiously helpless, because its power is optimised for a war the enemy declines. The weaker side seeks to negate the stronger's advantages and exploit its vulnerabilities — cumbersome logistics, casualty-sensitivity, dependence on political support at home, difficulty telling fighter from civilian — changing the game so that raw superiority no longer decides it.`,
        ],
      },
      {
        heading: "Guerrilla warfare",
        body: [
          `The classic form is guerrilla warfare: small, mobile bands of irregulars who avoid decisive battle, striking with hit-and-run raids, ambushes and sabotage, then melting away before the stronger force can bring its power to bear. The guerrilla does not hold ground or try to destroy the enemy army; they harass, exhaust and demoralise it over time, imposing a steady drain of casualties and cost while presenting no target to be decisively defeated.`,
          `Mao Zedong stressed that the guerrilla depends utterly on the population — "the guerrilla must move amongst the people as a fish swims in the sea." The people provide concealment, food, recruits and intelligence, and hide the fighters among themselves. So the population's loyalty is the true prize: a guerrilla movement embedded in a supportive population is extraordinarily hard to defeat, and killing civilians to reach it only deepens their hostility.`,
        ],
      },
      {
        heading: "Winning by not losing",
        body: [
          `The weaker side often cannot win militarily and does not try. Its path to victory is political and temporal: to endure, make the war long and costly, and outlast the stronger side's will to continue. The strong power must win decisively; the weak power need only avoid losing and keep the conflict going until the cost becomes unbearable. As the insurgent maxim runs, the guerrilla wins if he does not lose, and the conventional army loses if it does not win.`,
          `History bears this out. The United States in Vietnam, and the Soviet Union and later the United States in Afghanistan, deployed overwhelming superiority, won virtually every conventional engagement, and were still frustrated by opponents who refused decisive battle, endured enormous losses, and outlasted the foreign power's political will. The stronger side was worn down until continuing was no longer worth it — the centre of gravity was the will to persist, not the enemy's forces.`,
        ],
      },
      {
        heading: "The counterinsurgent's dilemma",
        body: [
          `Fighting an asymmetric war poses brutal dilemmas for the stronger side. Overwhelming firepower, so decisive in conventional war, can be counterproductive against an enemy hidden among civilians, because the collateral damage of using it drives the population toward the insurgents — strengthening the very enemy it aims to destroy. The strong power's greatest assets can become liabilities.`,
          `This is why modern counterinsurgency doctrine holds that such wars are won politically, by protecting and winning over the population, rather than by firepower. The counterinsurgent must fight while also governing, protecting and persuading — a far harder task than winning battles. Patience, restraint and legitimacy matter more than force, and the stronger force that fights it as a conventional war, chasing military victory while losing the population, is likely to lose despite winning every battle.`,
        ],
      },
      {
        heading: "David versus Goliath, everywhere",
        body: [
          `The logic appears wherever a weaker player takes on a dominant one. A startup cannot beat an incumbent giant at the giant's own game of scale and resources; it wins by changing the rules — moving fast, serving a niche the giant ignores, using agility where the giant is slow, exactly as the weak refuse the strong's battle. A small campaigner challenging a powerful institution uses attention, moral pressure and endurance rather than force. Even arguing with someone more powerful, meeting them head-on may be hopeless while an indirect, patient approach can succeed. The weak do not beat the strong by playing the strong's game — they win by changing it, and by outlasting a stronger opponent's will.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "reasoning",
        prompt: "What is the crucial error a strong power makes in an asymmetric conflict?",
        choices: [
          { id: "a", label: "Assuming the weaker actor will fight the same kind of war, where the strong side's advantages would be decisive" },
          { id: "b", label: "Believing the weaker actor has no support" },
          { id: "c", label: "Using too little firepower" },
          { id: "d", label: "Refusing to fight at all" },
        ],
        correctChoiceId: "a",
        explanation: "The weak actor's whole strategy is to refuse the battle the strong wants; assuming they will meet tanks with tanks, where conventional superiority decides, misses that they change the game to negate that superiority.",
      },
      {
        dimension: "depth",
        prompt: "What characterises guerrilla warfare?",
        choices: [
          { id: "a", label: "Small mobile bands using hit-and-run raids and ambushes, avoiding decisive battle" },
          { id: "b", label: "Large armies meeting in open battle" },
          { id: "c", label: "Holding fixed ground at all costs" },
          { id: "d", label: "Relying entirely on air power" },
        ],
        correctChoiceId: "a",
        explanation: "Guerrillas avoid decisive battle, striking with raids, ambushes and sabotage then melting away, seeking to harass and exhaust the stronger force over time rather than destroy its army or hold ground.",
      },
      {
        dimension: "reasoning",
        prompt: "Why did Mao say the guerrilla 'must move amongst the people as a fish swims in the sea'?",
        choices: [
          { id: "a", label: "Because the population provides concealment, food, recruits and intelligence, making the guerrilla hard to find and defeat" },
          { id: "b", label: "Because guerrillas prefer to fight near water" },
          { id: "c", label: "Because civilians are irrelevant to guerrilla war" },
          { id: "d", label: "Because it describes a naval tactic" },
        ],
        correctChoiceId: "a",
        explanation: "The guerrilla depends on popular support for concealment, supplies and intelligence, so the population's loyalty is the true prize — a movement embedded in a supportive population is extraordinarily hard to defeat.",
      },
      {
        dimension: "reasoning",
        prompt: "How does the weaker side typically 'win' an asymmetric war?",
        choices: [
          { id: "a", label: "By enduring, making the war long and costly, and outlasting the stronger side's will to continue" },
          { id: "b", label: "By winning a single decisive conventional battle" },
          { id: "c", label: "By matching the strong side's firepower" },
          { id: "d", label: "By capturing the enemy capital quickly" },
        ],
        correctChoiceId: "a",
        explanation: "The weak side need only avoid losing and keep the conflict going until the cost becomes unbearable for the stronger power — the guerrilla wins if he does not lose; the conventional army loses if it does not win.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can overwhelming firepower be counterproductive for the stronger side?",
        choices: [
          { id: "a", label: "Because collateral damage among civilians drives the population toward the insurgents, strengthening the enemy" },
          { id: "b", label: "Because firepower is always ineffective" },
          { id: "c", label: "Because it wins the war too quickly" },
          { id: "d", label: "Because insurgents have more firepower" },
        ],
        correctChoiceId: "a",
        explanation: "Against an enemy hidden among civilians, heavy firepower's collateral damage alienates the population whose support is the real objective, so counterinsurgency stresses winning people over rather than pure military force.",
      },
    ],
    sources: [
      { label: "Asymmetric warfare (overview)", note: "Reference on irregular conflict between unequal actors.", type: "Reference", url: "https://en.wikipedia.org/wiki/Asymmetric_warfare" },
      { label: "Mao Zedong, On Guerrilla Warfare", note: "The classic theory of guerrilla war and popular support.", type: "Reference", url: "https://en.wikipedia.org/wiki/On_Guerrilla_Warfare" },
    ],
  },
  {
    concept: "Operational Art",
    level: "University",
    summary: "linking battles and campaigns to strategic objectives",
    estimatedMinutes: 9,
    deck: "You can win every battle and still lose the war. Between the tactics of individual fights and the strategy of overall war aims lies a distinct level of thinking — operational art — whose job is to make sure that battles actually add up to the political goal, rather than being a string of victories that lead nowhere.",
    keyTerms: [
      { label: "Operational art", value: "Arranging battles and campaigns so they achieve strategic objectives." },
      { label: "Levels of war", value: "The tactical (battles), operational (campaigns) and strategic (war aims) levels." },
      { label: "Campaign", value: "A connected series of operations aimed at an operational objective." },
      { label: "Sequencing", value: "Ordering operations so each sets up the next toward the goal." },
    ],
    sections: [
      {
        heading: "The missing middle level",
        body: [
          `Military thinking is usually divided into levels. At the bottom is tactics: how to win individual battles. At the top is strategy: the overall aims of the war and how force serves the political purpose. Between them lies operational art — arranging battles into campaigns that achieve strategic objectives. It is the link connecting what happens on the battlefield to what the war is actually for.`,
          `This middle level exists because winning battles does not automatically win wars. A string of tactical victories, if not directed toward a coherent purpose, can be strategically meaningless or even counterproductive. Without operational art, an army can be tactically brilliant and strategically lost, winning fights that lead nowhere.`,
        ],
      },
      {
        heading: "Winning battles, losing wars",
        body: [
          `The danger is captured in a haunting exchange after the Vietnam War, when an American colonel told a North Vietnamese counterpart, "You never defeated us on the battlefield," and received the reply, "That may be so, but it is also irrelevant." American forces won virtually every tactical engagement yet lost the war, because tactical success was never translated into strategic victory.`,
          `This is the classic failure operational art exists to prevent: being superb at the tactical level while failing to link that excellence to a coherent path toward the strategic goal. The purpose of fighting is not to win fights for their own sake but to achieve the political objective, and turning battlefield success into strategic effect is a distinct and difficult skill. Tactical prowess is necessary but never sufficient.`,
        ],
      },
      {
        heading: "Designing a campaign",
        body: [
          `Operational art works through the campaign: a connected series of operations, sequenced in time and space to achieve an operational objective that serves the strategy. Rather than fighting battles as isolated events, the operational commander designs a sequence in which each action sets up the next — securing a position that enables the following advance, drawing the enemy into a disadvantageous posture, timing operations so their effects combine.`,
          `This requires reasoning backwards from the strategic goal: what conditions must be achieved to reach it, what operational objectives would create those conditions, and what sequence of actions would achieve them. It also means managing tempo, reserves, logistics and risk across a whole theatre over extended time — a large-scale, forward-looking design problem distinct from both the craft of tactics and the political judgement of strategy.`,
        ],
      },
      {
        heading: "A modern discipline",
        body: [
          `Explicit recognition of the operational level is relatively modern, developed especially by Soviet theorists between the world wars and later adopted across Western militaries. As armies, technology and theatres grew vast, the gap between a single battle and the overall war became too large to bridge by tactics and strategy alone; a distinct level of campaign design was needed to organise operations across huge spaces and long timescales.`,
          `Its enduring value is that it forces a constant question at every level of effort: how does this contribute to the goal? It disciplines commanders to see beyond the immediate fight to the campaign, and beyond the campaign to the strategic purpose — insisting that the things you do be arranged so they actually achieve the thing you are trying to achieve.`,
        ],
      },
      {
        heading: "Winning tasks but missing the point",
        body: [
          `You need operational art whenever a big goal must be reached through many smaller actions. It is the difference between being busy and being effective: a person can complete task after task — winning every small battle of the day — while none of it advances what actually matters, exactly the "winning battles, losing the war" trap. A business can hit every quarterly target and still drift from its strategic goal; a student can ace every assignment yet lose sight of what the education is for. The remedy is the operational habit of mind: constantly asking how each action connects to the larger objective, and sequencing your efforts so they build toward it rather than just accumulating unconnected wins.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is operational art, and where does it sit among the levels of war?",
        choices: [
          { id: "a", label: "The middle level, arranging battles into campaigns that achieve strategic objectives, linking tactics to strategy" },
          { id: "b", label: "The lowest level, concerned only with winning individual firefights" },
          { id: "c", label: "The political level of war aims" },
          { id: "d", label: "A synonym for tactics" },
        ],
        correctChoiceId: "a",
        explanation: "Between tactics (winning battles) and strategy (war aims) sits operational art, which arranges engagements into campaigns that achieve strategic objectives — the crucial link connecting the battlefield to the war's purpose.",
      },
      {
        dimension: "reasoning",
        prompt: "What does the Vietnam exchange ('You never defeated us on the battlefield' — 'That is irrelevant') illustrate?",
        choices: [
          { id: "a", label: "That tactical victories can fail to translate into strategic success, so you can win battles yet lose the war" },
          { id: "b", label: "That the Americans lost every battle" },
          { id: "c", label: "That battles are the only thing that matters" },
          { id: "d", label: "That strategy is unnecessary" },
        ],
        correctChoiceId: "a",
        explanation: "American forces won nearly every engagement yet lost the war because tactical success was never linked to the political outcome — the exact failure operational art exists to prevent.",
      },
      {
        dimension: "depth",
        prompt: "What is a 'campaign' in operational art?",
        choices: [
          { id: "a", label: "A connected series of operations, sequenced in time and space to achieve an operational objective serving the strategy" },
          { id: "b", label: "A single isolated battle" },
          { id: "c", label: "A political advertising effort" },
          { id: "d", label: "The overall aim of the entire war" },
        ],
        correctChoiceId: "a",
        explanation: "A campaign arranges operations so each sets up the next — securing a position that enables an advance, timing effects to combine — orchestrating engagements toward an operational objective rather than fighting them in isolation.",
      },
      {
        dimension: "reasoning",
        prompt: "How does designing a campaign require 'reasoning backwards'?",
        choices: [
          { id: "a", label: "From the strategic goal to the conditions and operational objectives needed, then to the sequence of actions that would achieve them" },
          { id: "b", label: "By fighting battles in reverse chronological order" },
          { id: "c", label: "By ignoring the strategic goal entirely" },
          { id: "d", label: "By starting with tactics and hoping they add up" },
        ],
        correctChoiceId: "a",
        explanation: "The operational commander works back from the strategic goal: what conditions must exist to reach it, what operational objectives create those conditions, and what sequence of actions achieves them — connecting means to ends.",
      },
      {
        dimension: "depth",
        prompt: "What is the enduring value of the concept of operational art?",
        choices: [
          { id: "a", label: "It forces the constant question of how each action contributes to the goal, connecting means to ends" },
          { id: "b", label: "It proves battles do not matter" },
          { id: "c", label: "It removes the need for strategy" },
          { id: "d", label: "It focuses only on the immediate fight" },
        ],
        correctChoiceId: "a",
        explanation: "Operational art disciplines commanders to see beyond the fight to the campaign and beyond the campaign to the strategic purpose, insisting that what you do be arranged so it actually achieves what you are trying to achieve.",
      },
    ],
    sources: [
      { label: "Operational level of war (overview)", note: "Reference on operational art and the levels of war.", type: "Reference", url: "https://en.wikipedia.org/wiki/Operational_level_of_war" },
      { label: "Levels of warfare (overview)", note: "Reference on the tactical, operational and strategic levels.", type: "Reference", url: "https://en.wikipedia.org/wiki/Military_strategy" },
    ],
  },
  {
    concept: "Rules of Engagement",
    level: "A-level",
    summary: "constraints governing when and how force may be used",
    estimatedMinutes: 8,
    deck: "Even in war, force is not unlimited. Rules of engagement define when, where and how soldiers may use force — and far from being mere legal red tape, these constraints are woven into strategy itself, because in many modern conflicts, using force wrongly loses more than it wins.",
    keyTerms: [
      { label: "Rules of engagement", value: "Directives defining the circumstances and limits under which force may be used." },
      { label: "Proportionality", value: "The principle that force used must not be excessive relative to the military aim." },
      { label: "Legitimacy", value: "Whether the use of force is seen as lawful and justified, affecting support." },
      { label: "Restraint as strategy", value: "Limiting force deliberately because excess would be counterproductive." },
    ],
    sections: [
      {
        heading: "Force with limits",
        body: [
          `Rules of engagement (ROE) define when, where, against whom and how military force may be used in a given operation. They translate legal, political and strategic constraints into concrete guidance for the soldier on the ground: whether they may fire only if fired upon, what identifies a legitimate target, what areas or weapons are off-limits, and how to handle civilians.`,
          `Their existence reflects a fundamental truth: even in war, force is not unconstrained. It is bounded by the international laws of armed conflict, by political direction, and by strategic calculation, and ROE are where these constraints meet the trigger. Tactical action always sits inside a framework of legality and legitimacy.`,
        ],
      },
      {
        heading: "The laws of war",
        body: [
          `ROE are shaped by the laws of armed conflict, which impose real limits even on legitimate warfare. Among the core principles are distinction — the duty to target only combatants, not civilians; proportionality — that harm caused, especially to civilians, must not be excessive relative to the concrete military advantage sought; and necessity — that force serve a legitimate military objective. These are binding rules, and grave breaches are war crimes.`,
          `So "winning" does not license anything. A commander cannot lawfully cause disproportionate civilian harm even to achieve a military aim, nor deliberately target non-combatants. This matters practically as well as morally: a force that flouts the laws of war forfeits legitimacy, invites retaliation and prosecution, and undermines the political cause its fighting is supposed to serve.`,
        ],
      },
      {
        heading: "Restraint as strategy",
        body: [
          `In many modern conflicts, restraint is not merely a constraint on strategy but part of it. This is starkest in counterinsurgency, where the population's support is the true objective. There, excessive force is self-defeating: every civilian wrongly harmed creates enemies and drives people toward the insurgents. Tight ROE that limit force, even at greater risk to one's own soldiers, can be the strategically correct choice, because winning hearts and minds matters more than winning firefights.`,
          `This produces the "strategic corporal" phenomenon: in the age of global media, the actions of a single junior soldier — a checkpoint shooting, an abuse caught on camera — can have geopolitical consequences, inflaming populations and undermining an entire campaign. A tactical act of excess can hand the enemy a propaganda victory worth more than any battle. ROE that enforce restraint are not softness but hard-headed recognition that how force is used determines whether it helps or harms the goal.`,
        ],
      },
      {
        heading: "The tension of the trigger",
        body: [
          `Rules of engagement create genuine, painful tensions. Restrictive ROE that protect civilians and legitimacy can put soldiers at greater risk, forcing them to hold fire in ambiguous situations where a looser rule might save their lives. Overly permissive ROE protect soldiers in the moment but risk atrocities, illegitimacy and strategic damage. Calibrating the rules to the mission, the law and the context is a hard and consequential judgement, and the rules are often adjusted as a conflict evolves.`,
          `There is also the challenge of applying rules under extreme stress. A soldier in a split-second, life-or-death situation, with incomplete information and fear, must still act within the rules — a demand that requires enormous training, discipline and leadership. Rules on paper mean little without the culture to follow them when it is hardest.`,
        ],
      },
      {
        heading: "The rules that shape what you can do",
        body: [
          `You operate within your own rules of engagement all the time. Any job comes with constraints on what you may and may not do — how far you can push a customer, what you are authorised to decide, where the ethical and legal lines lie — and skilled professionals internalise these so they act well under pressure rather than freezing or overstepping. You grasp the "strategic corporal" idea intuitively too: one employee's caught-on-camera misconduct can damage a whole company far beyond the incident. And you know the tension between doing what is expedient in the moment and staying within the rules that protect legitimacy. Constraints on how you may act are not just obstacles but part of acting effectively, because overstepping them can cost more than any short-term gain.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What are rules of engagement (ROE)?",
        choices: [
          { id: "a", label: "Directives defining when, where and how military force may be used in an operation" },
          { id: "b", label: "The overall political aims of a war" },
          { id: "c", label: "A type of weapon system" },
          { id: "d", label: "The schedule for troop movements" },
        ],
        correctChoiceId: "a",
        explanation: "ROE translate legal, political and strategic constraints into concrete guidance for soldiers — whether to fire only if fired upon, what identifies a legitimate target, how to treat civilians — governing the actual use of force.",
      },
      {
        dimension: "depth",
        prompt: "What does the principle of 'proportionality' in the laws of war require?",
        choices: [
          { id: "a", label: "That harm caused, especially to civilians, must not be excessive relative to the military advantage sought" },
          { id: "b", label: "That both sides must have equal numbers of soldiers" },
          { id: "c", label: "That force must always be maximised" },
          { id: "d", label: "That every target be attacked equally" },
        ],
        correctChoiceId: "a",
        explanation: "Proportionality forbids causing civilian harm excessive relative to the concrete military advantage — a binding rule, alongside distinction and necessity, meaning 'winning' does not license anything.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can restraint be a part of strategy, not just an ethical constraint, in counterinsurgency?",
        choices: [
          { id: "a", label: "Because the population's support is the objective, and excessive force drives civilians toward the insurgents" },
          { id: "b", label: "Because restraint always wins conventional battles" },
          { id: "c", label: "Because insurgents respect restraint and surrender" },
          { id: "d", label: "Because firepower is never available" },
        ],
        correctChoiceId: "a",
        explanation: "Where winning hearts and minds is the true aim, every civilian wrongly harmed creates enemies, so tight ROE limiting force — even at greater risk to one's own troops — can be the strategically correct choice.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the 'strategic corporal' phenomenon?",
        choices: [
          { id: "a", label: "A single junior soldier's action can have strategic or geopolitical consequences in the age of global media" },
          { id: "b", label: "Corporals now command entire armies" },
          { id: "c", label: "Strategy is decided only by generals" },
          { id: "d", label: "Junior soldiers never affect outcomes" },
        ],
        correctChoiceId: "a",
        explanation: "In an era of global media, one junior soldier's act of excess — a checkpoint shooting, filmed abuse — can inflame populations and undermine a whole campaign, handing the enemy a propaganda victory worth more than a battle.",
      },
      {
        dimension: "reasoning",
        prompt: "What tension do restrictive rules of engagement create?",
        choices: [
          { id: "a", label: "Protecting civilians and legitimacy can put one's own soldiers at greater risk in ambiguous situations" },
          { id: "b", label: "They make soldiers completely safe with no downside" },
          { id: "c", label: "They have no effect on soldiers at all" },
          { id: "d", label: "They always guarantee victory" },
        ],
        correctChoiceId: "a",
        explanation: "Restrictive ROE that protect civilians and legitimacy can force soldiers to hold fire in ambiguous, dangerous moments, while permissive ROE protect soldiers but risk atrocities and strategic damage — a hard, consequential balance.",
      },
    ],
    sources: [
      { label: "Rules of engagement (overview)", note: "Reference on ROE and their role in operations.", type: "Reference", url: "https://en.wikipedia.org/wiki/Rules_of_engagement" },
      { label: "International humanitarian law (overview)", note: "Reference on distinction, proportionality and the laws of armed conflict.", type: "Reference", url: "https://en.wikipedia.org/wiki/International_humanitarian_law" },
    ],
  },
];

export const militaryStrategyLessons = buildAuthoredLessons(
  "military-strategy",
  militaryStrategy,
);
