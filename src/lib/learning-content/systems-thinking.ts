import { buildAuthoredLessons, type AuthoredLesson } from "./types";

// Ten hand-written Systems Thinking lessons: researched, concept-specific prose
// drawing on Meadows, Senge, Goldratt and others, each closing on an everyday
// example, plus genuine recall quizzes.
const systemsThinking: AuthoredLesson[] = [
  {
    concept: "Feedback Loop",
    level: "GCSE",
    summary: "a circular relationship where outputs influence future inputs",
    estimatedMinutes: 7,
    deck: "Most of the world runs not in straight lines of cause and effect but in circles, where the output of a process loops back to influence its own future. Feedback loops are the basic engine of systems — and learning to see them explains everything from why savings snowball to why a thermostat keeps a room comfortable.",
    keyTerms: [
      { label: "Feedback loop", value: "A circular relationship where a system's output loops back to affect its own future behaviour." },
      { label: "Reinforcing loop", value: "A loop that amplifies change, producing growth or collapse (a vicious or virtuous cycle)." },
      { label: "Balancing loop", value: "A loop that counteracts change, producing stability toward a goal." },
      { label: "Systems thinking", value: "Understanding behaviour through the relationships and loops between parts, not parts alone." },
    ],
    sections: [
      {
        heading: "Cause and effect in circles",
        body: [
          `A feedback loop is a circular chain of cause and effect, in which the output of a process feeds back to become an input that shapes the same process in the future. This is the building block of systems thinking, and it contrasts with our usual linear default — A causes B, end of story. In reality, A affects B, which affects C, which loops back to affect A, so a system's behaviour continually influences its own future.`,
          `Seeing these loops explains behaviour that linear thinking cannot. When a system produces runaway growth, sudden collapse, stubborn stability or oscillation, the answer usually lies in its feedback loops rather than any single cause. The core habit is to ask, "and then what does that affect, and does it come back around?"`,
        ],
      },
      {
        heading: "Reinforcing loops: amplification",
        body: [
          `A reinforcing (or positive) loop amplifies change: more leads to more, and less to less, so a change accelerates in the same direction. Compound interest is the classic case — money earns interest, which is added to the money, which earns yet more. The more you have, the faster you gain.`,
          `Reinforcing loops drive the dramatic behaviours in systems: virtuous cycles where success breeds success (a growing firm attracts talent and customers), and vicious cycles where decline breeds decline. Epidemics, arms races, viral spread and runaway debt all run on them. Note that "positive" means amplifying, not good — a reinforcing loop can be ruinous as easily as beneficial.`,
        ],
      },
      {
        heading: "Balancing loops: stability",
        body: [
          `A balancing (or negative) loop counteracts change and holds a system near a goal. When the system drifts from its target, the loop pushes it back. A thermostat is the textbook example: too cold and the heating comes on, warm enough and it switches off, keeping the room around a set point.`,
          `Balancing loops quietly hold systems steady everywhere — your body regulating its temperature and blood sugar, a market tending toward an equilibrium price, a driver steering to stay in lane. Where reinforcing loops produce change, balancing loops produce stability, and any system's behaviour emerges from the interplay of the two.`,
        ],
      },
      {
        heading: "Acting on looped systems",
        body: [
          `Understanding loops changes how you intervene. Because systems respond through their loops, pushing hard on one governed by a strong balancing loop often produces frustratingly little — the loop resists and pushes back, like a company culture that snaps back to its old ways. A small push on a reinforcing loop, by contrast, can be amplified into a large effect, for good or ill.`,
          `So lasting change usually means working with the loops rather than brute effort: weakening a balancing loop that resists you, or setting up a reinforcing loop that will amplify what you want. This also warns against assuming effort produces proportional results — some efforts vanish into balancing loops while others are magnified by reinforcing ones.`,
        ],
      },
      {
        heading: "The loops running your own life",
        body: [
          `You live inside feedback loops. Savings compound in a reinforcing loop; your thermostat and your body temperature hold steady through balancing loops. You feel reinforcing loops in momentum — a habit that gets easier as it produces results, or a spiral where stress ruins sleep and worsens stress. You feel balancing loops when something keeps snapping back despite your efforts. The payoff is to stop thinking only in straight lines: when effort produces little, look for the balancing loop resisting it; when something grows or collapses fast, look for the reinforcing loop driving it.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is a feedback loop?",
        choices: [
          { id: "a", label: "A circular chain of cause and effect where a system's output feeds back to influence its own future" },
          { id: "b", label: "A one-way line of cause and effect" },
          { id: "c", label: "A complaint form for a product" },
          { id: "d", label: "A random change with no cause" },
        ],
        correctChoiceId: "a",
        explanation: "A feedback loop is the basic building block of systems: output loops back to become input, so a system's behaviour influences its own future in a continuous circle — the core shift from linear cause-and-effect thinking.",
      },
      {
        dimension: "depth",
        prompt: "What does a 'reinforcing' feedback loop do?",
        choices: [
          { id: "a", label: "It amplifies change — more leads to more — producing growth or collapse, like compound interest" },
          { id: "b", label: "It counteracts change to keep a system stable" },
          { id: "c", label: "It has no effect on a system" },
          { id: "d", label: "It always produces good outcomes" },
        ],
        correctChoiceId: "a",
        explanation: "A reinforcing loop feeds on itself so change accelerates in the same direction, producing exponential growth or collapse — virtuous or vicious cycles. 'Positive' means amplifying, not good: it can be ruinous as well as beneficial.",
      },
      {
        dimension: "depth",
        prompt: "What does a 'balancing' feedback loop do?",
        choices: [
          { id: "a", label: "It counteracts change and moves a system toward a goal or stable state, like a thermostat" },
          { id: "b", label: "It amplifies any change explosively" },
          { id: "c", label: "It removes all stability from a system" },
          { id: "d", label: "It only applies to money" },
        ],
        correctChoiceId: "a",
        explanation: "A balancing loop resists deviation, pushing a system back toward a target — a thermostat keeping a room at a set point, or the body maintaining temperature — producing stability rather than change.",
      },
      {
        dimension: "reasoning",
        prompt: "Why might pushing hard on a system produce frustratingly little result?",
        choices: [
          { id: "a", label: "A strong balancing loop may resist the effort and push back, absorbing the intervention" },
          { id: "b", label: "Because effort always produces proportional results" },
          { id: "c", label: "Because systems never respond to interventions" },
          { id: "d", label: "Because reinforcing loops always help" },
        ],
        correctChoiceId: "a",
        explanation: "Systems respond through their loops: a strong balancing loop resists and pushes back — like a company culture that snaps back to its old ways — so effort can be absorbed and vanish, defying the linear assumption of proportional results.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does understanding a system's loops change how you should try to influence it?",
        choices: [
          { id: "a", label: "Lasting change often requires working with the loops — weakening a resisting balancing loop or strengthening a helpful reinforcing one" },
          { id: "b", label: "Because loops make all intervention pointless" },
          { id: "c", label: "Because effort always vanishes in systems" },
          { id: "d", label: "Because systems have no structure" },
        ],
        correctChoiceId: "a",
        explanation: "Because interventions trigger feedback that changes their effect, effective action means working with the loop structure — a small push on a reinforcing loop can be amplified into a large effect, while a balancing loop may absorb a big effort.",
      },
    ],
    sources: [
      { label: "Donella Meadows, Thinking in Systems", note: "The classic primer on feedback loops and system structure.", type: "Reference", url: "https://en.wikipedia.org/wiki/Thinking_In_Systems:_A_Primer" },
      { label: "Feedback (overview)", note: "Reference on reinforcing and balancing feedback.", type: "Reference", url: "https://en.wikipedia.org/wiki/Feedback" },
    ],
  },
  {
    concept: "Stocks and Flows",
    level: "A-level",
    summary: "accumulations and rates that change them",
    estimatedMinutes: 8,
    deck: "To understand any system that changes over time, you need to distinguish two things: the amount of something accumulated (a stock) and the rates at which it fills or drains (flows). It sounds simple, but confusing the two — mistaking a change in the flow for a change in the stock — is behind a startling amount of muddled thinking.",
    keyTerms: [
      { label: "Stock", value: "An accumulation — the amount of something present at a given time." },
      { label: "Flow", value: "A rate that changes a stock — the inflow that adds to it or outflow that drains it." },
      { label: "The bathtub metaphor", value: "A stock is water in a tub; flows are the tap filling it and the drain emptying it." },
      { label: "Stock only changes via flows", value: "A stock rises or falls only through the difference between its inflows and outflows." },
    ],
    sections: [
      {
        heading: "Accumulations and rates",
        body: [
          `A "stock" is an accumulation — the amount of something at a moment: water in a reservoir, money in an account, a country's population, employees in a company. A "flow" is a rate that changes a stock over time: water in or out, money deposited or withdrawn, births and deaths, hiring and quitting. A stock is a snapshot; a flow is a movement.`,
          `The bathtub makes it concrete. The water in the tub is a stock; the tap is an inflow and the drain an outflow. The stock changes only through its flows: it rises when inflow exceeds outflow, falls when outflow exceeds inflow, and holds steady when they match. A stock is simply the accumulation of all past flows.`,
        ],
      },
      {
        heading: "Why the distinction trips people up",
        body: [
          `Confusing stocks and flows is a common and costly error, because reducing an inflow does not reduce a stock — it only slows its growth. Turn the tap down but not off while the tub still fills faster than it drains, and the water level keeps rising, just more slowly. To actually reduce the stock, outflow must exceed inflow.`,
          `This trips up serious reasoning. Atmospheric carbon dioxide keeps accumulating as long as emissions exceed absorption, so merely slowing the growth of emissions still raises the total; to stop the stock rising, emissions must fall to match absorption. The same logic holds for debt: cutting the deficit still adds to total debt as long as you are borrowing. Getting this right tells you whether a problem is actually shrinking or just growing more slowly.`,
        ],
      },
      {
        heading: "Stocks create inertia",
        body: [
          `Stocks change gradually, never instantly, because they can only be altered through flows over time. A bathtub takes time to fill; a population shifts over decades; a company's skills base builds up or runs down over years. This gives systems with large stocks a momentum: they respond slowly to changes in the flows, and the effects accumulate rather than appearing at once.`,
          `That slow response is a major reason systems are hard to steer. The lag between changing a flow and the stock reaching a new level leads to overshooting and oscillation, as people react to a stock still catching up to earlier changes. Large stocks also buffer a system, absorbing temporary imbalances in the flows and cushioning it against shocks.`,
        ],
      },
      {
        heading: "Thinking in stocks and flows",
        body: [
          `The framework forces clarity about how a quantity actually changes. For any system, ask: what are the key stocks, and what flows fill and drain them? This often exposes a solution aimed at the wrong thing — tackling a flow when the problem is the stock — or an apparent improvement that is illusory because the stock is still growing.`,
          `It also clarifies where to intervene. To change a stock you must change its flows, and you can do so from either end: to reduce a stock, turn down the inflow or turn up the outflow, whichever is the more effective lever. This clean distinction between the level of something and the rate at which it changes cuts through one of the most widespread errors in reasoning about the world.`,
        ],
      },
      {
        heading: "Why your bathtub explains your bank balance",
        body: [
          `You manage stocks and flows daily. Your bank balance is a stock; income and spending are flows, and the balance changes only through the gap between them — spending less still drains savings if you are spending more than you earn. Your weight is a stock changed by calories in and out; household clutter is a stock fed by what comes in and drained by what you remove. The key insight: slowing an inflow is not the same as reducing a stock. Whenever you hear a problem's growth is "slowing", ask whether the stock is actually shrinking or just growing more slowly — the difference between a problem getting better and still getting worse.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is the difference between a stock and a flow?",
        choices: [
          { id: "a", label: "A stock is an accumulation measured at a moment; a flow is a rate that adds to or drains the stock over time" },
          { id: "b", label: "They are the same thing" },
          { id: "c", label: "A stock is a rate; a flow is an amount" },
          { id: "d", label: "A flow can only increase, never decrease" },
        ],
        correctChoiceId: "a",
        explanation: "A stock is the amount present (water in a tub, money in an account); a flow is the movement changing it (the tap, the drain). The stock changes only through the difference between its inflows and outflows.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does reducing an inflow not necessarily reduce a stock?",
        choices: [
          { id: "a", label: "If inflow still exceeds outflow, the stock keeps rising, just more slowly — to reduce it, outflow must exceed inflow" },
          { id: "b", label: "Because reducing inflow instantly empties the stock" },
          { id: "c", label: "Because stocks never change" },
          { id: "d", label: "Because inflow has no effect on stocks" },
        ],
        correctChoiceId: "a",
        explanation: "Turning the tap down but not off, while the tub still fills faster than it drains, means the water level keeps rising; to actually reduce a stock you must make outflow exceed inflow — a distinction people routinely miss.",
      },
      {
        dimension: "reasoning",
        prompt: "How does the stock-flow distinction apply to atmospheric carbon dioxide?",
        choices: [
          { id: "a", label: "The stock keeps rising while emissions exceed absorption, so merely slowing emissions growth still increases the total" },
          { id: "b", label: "Stabilising emissions immediately reduces the stock" },
          { id: "c", label: "Emissions have no relationship to the stock" },
          { id: "d", label: "The stock falls whenever emissions grow more slowly" },
        ],
        correctChoiceId: "a",
        explanation: "The accumulated stock of CO2 rises as long as emissions (inflow) exceed absorption (outflow); to stop the stock rising, emissions must fall to match absorption — reasoning that also applies to debt, inventory and population.",
      },
      {
        dimension: "depth",
        prompt: "Why do stocks give systems 'inertia'?",
        choices: [
          { id: "a", label: "Because they can only change gradually through their flows over time, not instantly" },
          { id: "b", label: "Because they change instantly when flows change" },
          { id: "c", label: "Because they are unaffected by flows" },
          { id: "d", label: "Because they have no relationship to time" },
        ],
        correctChoiceId: "a",
        explanation: "A stock takes time to fill or drain however fast you change the flows, so systems with large stocks respond slowly, accumulate effects over time, and can be hard to steer — leading to overshoot and oscillation.",
      },
      {
        dimension: "reasoning",
        prompt: "To reduce a stock, what are your options?",
        choices: [
          { id: "a", label: "Either decrease the inflow or increase the outflow — the more effective lever depends on the situation" },
          { id: "b", label: "Only ever increase the inflow" },
          { id: "c", label: "Nothing can change a stock" },
          { id: "d", label: "Only change the stock directly, never the flows" },
        ],
        correctChoiceId: "a",
        explanation: "Since a stock changes only through its flows, you can reduce it by turning down the inflow or turning up the outflow; recognising both options is part of thinking clearly about where to intervene in a system.",
      },
    ],
    sources: [
      { label: "Donella Meadows, Thinking in Systems", note: "The classic treatment of stocks, flows and the bathtub.", type: "Reference", url: "https://en.wikipedia.org/wiki/Thinking_In_Systems:_A_Primer" },
      { label: "Stock and flow (overview)", note: "Reference on the distinction between accumulations and rates.", type: "Reference", url: "https://en.wikipedia.org/wiki/Stock_and_flow" },
    ],
  },
  {
    concept: "Delay",
    level: "GCSE",
    summary: "time lag between action and visible consequence",
    estimatedMinutes: 7,
    deck: "In the systems we deal with, cause and effect are rarely close together in time. There is usually a delay between an action and its visible consequence — and this simple fact is behind an enormous amount of bad decision-making, overreaction, and the tendency of systems to overshoot and oscillate wildly.",
    keyTerms: [
      { label: "Delay", value: "A time lag between an action and its visible effect in a system." },
      { label: "Overshoot", value: "Overcorrecting past the target because the effect of earlier action was delayed." },
      { label: "Oscillation", value: "Repeated swings above and below a target caused by delays in feedback." },
      { label: "Reacting to delayed feedback", value: "The error of responding to a stale signal that has not caught up with earlier actions." },
    ],
    sections: [
      {
        heading: "The gap between action and effect",
        body: [
          `A delay is a time lag between a cause and its effect. Delays are pervasive: a policy's effect may take years, a lifestyle choice's consequence decades, an economy's response to an interest-rate change many months. Systems thinking pays close attention to them because they profoundly affect behaviour in ways our intuition, which expects prompt effects, badly underestimates.`,
          `The core problem is that a delay breaks the tight connection between action and feedback that we rely on to steer. When the effect is delayed, you act, see nothing, and are tempted to act again — not realising the first action is still working through the system. By the time all the delayed effects arrive, you have done too much.`,
        ],
      },
      {
        heading: "The shower problem",
        body: [
          `The classic illustration is a shower with a lag between turning the tap and the water changing. It is too cold, so you turn it hot; nothing happens, so you turn it further hot; suddenly it is scalding, so you swing it cold; again nothing happens, so you go further cold, and it turns freezing. You oscillate, overcorrecting each time, because you keep reacting to a temperature that reflects your earlier adjustments, not your latest.`,
          `The principle is general: when you react to the current state without accounting for a delay, you overshoot the target and overcorrect the other way, swinging around the goal instead of settling on it. The feedback you react to is "stale" — it reflects the past — and the natural human response, to react harder when nothing happens, makes it worse.`,
        ],
      },
      {
        heading: "Delays in real systems",
        body: [
          `Delay-driven overshoot appears throughout real systems. In supply chains, the lag between ordering and receiving goods produces the "bullwhip effect", where small fluctuations in customer demand get amplified into wild swings in orders and inventory, as each link overreacts to delayed information. Economies show boom-and-bust cycles for a similar reason: policy and investment effects are delayed, so corrections arrive too late and overshoot.`,
          `Delays are most dangerous when they hide harm until it is too late to reverse. If the damage from an action — pollution, resource depletion, an eroding institution — appears only after a long lag, the connection to its cause is obscured, and enormous harm can be locked in before the consequence becomes visible. This is a major reason slow-building problems are neglected: the feedback that would prompt action comes too late.`,
        ],
      },
      {
        heading: "Managing systems with delays",
        body: [
          `The first lesson is patience: when you act on a delayed system, wait for the effect before acting again, resisting the urge to do more when nothing seems to be happening. Much overshoot comes from impatience — repeating an action because its delayed effect has not yet appeared. Often the wiser move is to recognise you already have enough action in the pipeline and simply wait.`,
          `It also helps to steer by where the system is heading, given the effects already in the pipeline, rather than only where it is now. And where you can, shortening the lag between action and feedback makes a system far easier to control, which is why fast, accurate information is so valuable. Delays cultivate humility: our actions may take time to matter, and some of the most important consequences of today's choices will not be visible for a long while.`,
        ],
      },
      {
        heading: "Why you keep overcorrecting the shower",
        body: [
          `You wrestle with delays constantly. The shower you cannot get right, the oven you keep adjusting, the car you oversteer on ice, are all delay-driven overshoot — you react to a state that reflects earlier actions and swing past the target. The pattern scales up: the diet whose results take weeks, so you quit before they show; the slow-building problem ignored because its harm is delayed. The wisdom is patience and anticipation: when nothing seems to happen after you act, resist acting harder, and steer by where a system is heading, not only where it is now.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is a delay in a system?",
        choices: [
          { id: "a", label: "A time lag between an action and its visible consequence" },
          { id: "b", label: "A permanent halt to a system" },
          { id: "c", label: "A cause with no effect" },
          { id: "d", label: "An instant response to any action" },
        ],
        correctChoiceId: "a",
        explanation: "A delay is the time lag between a cause and its effect; delays are pervasive in real systems and profoundly affect how they behave, in ways our intuition — expecting prompt effects — badly underestimates.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does the 'shower problem' produce oscillation between too hot and too cold?",
        choices: [
          { id: "a", label: "Because the delay makes you keep reacting to a temperature that reflects earlier adjustments, so you overshoot and overcorrect" },
          { id: "b", label: "Because the water has no temperature" },
          { id: "c", label: "Because there is no delay at all" },
          { id: "d", label: "Because taps only produce cold water" },
        ],
        correctChoiceId: "a",
        explanation: "When nothing happens immediately you adjust further, then the delayed effect of all adjustments arrives at once and overshoots, so you overcorrect the other way — reacting to 'stale' feedback that reflects the past, not the present.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the 'bullwhip effect' in supply chains?",
        choices: [
          { id: "a", label: "Small demand fluctuations get amplified into wild swings in orders and inventory as each link overreacts to delayed information" },
          { id: "b", label: "A method for delivering goods faster" },
          { id: "c", label: "The instant matching of supply to demand" },
          { id: "d", label: "A tool for measuring inventory" },
        ],
        correctChoiceId: "a",
        explanation: "The delay between ordering and receiving goods, combined with reactions to demand, causes each link in the chain to overreact to delayed information, amplifying small customer fluctuations into large swings up the supply chain.",
      },
      {
        dimension: "reasoning",
        prompt: "Why are long delays between action and consequence especially dangerous?",
        choices: [
          { id: "a", label: "They obscure cause and effect, so enormous accumulated harm can be locked in before the consequence becomes visible" },
          { id: "b", label: "Because they make problems easier to fix" },
          { id: "c", label: "Because they speed up feedback" },
          { id: "d", label: "Because they have no effect on decisions" },
        ],
        correctChoiceId: "a",
        explanation: "When damage appears only after a long delay, the connection to its cause is hidden and the feedback that would prompt action comes too late, so serious slow-building problems are neglected while the harm accumulates.",
      },
      {
        dimension: "depth",
        prompt: "What is the most important practical lesson for acting on a system with delays?",
        choices: [
          { id: "a", label: "Patience — wait for the effect before acting again, resisting the urge to do more when nothing seems to be happening" },
          { id: "b", label: "Always act harder and faster when nothing happens" },
          { id: "c", label: "Ignore the delay entirely" },
          { id: "d", label: "Never take any action" },
        ],
        correctChoiceId: "a",
        explanation: "Much overshoot comes from impatience — repeating or intensifying an action because its delayed effect has not yet appeared; recognising you may already have enough action in the pipeline and simply need to wait is often wiser.",
      },
    ],
    sources: [
      { label: "Donella Meadows, Thinking in Systems", note: "On delays, overshoot and oscillation in systems.", type: "Reference", url: "https://en.wikipedia.org/wiki/Thinking_In_Systems:_A_Primer" },
      { label: "Bullwhip effect (overview)", note: "Reference on delay-driven amplification in supply chains.", type: "Reference", url: "https://en.wikipedia.org/wiki/Bullwhip_effect" },
    ],
  },
  {
    concept: "Leverage Point",
    level: "University",
    summary: "a place in a system where small changes can have large effects",
    estimatedMinutes: 9,
    deck: "In complex systems, not all interventions are equal: some places yield huge change for a small push, while others absorb enormous effort for little result. These high-leverage places are 'leverage points' — and Donella Meadows's great insight was that people usually find them, and then push in exactly the wrong direction.",
    keyTerms: [
      { label: "Leverage point", value: "A place in a system where a small change can produce a large effect." },
      { label: "Meadows's hierarchy", value: "A ranking of leverage points from shallow (parameters) to deep (paradigms)." },
      { label: "Shallow vs deep leverage", value: "Tweaking numbers is low-leverage; changing goals and mindsets is high-leverage." },
      { label: "Pushing the wrong way", value: "The tendency to intervene at leverage points but in the counterproductive direction." },
    ],
    sections: [
      {
        heading: "Where to push",
        body: [
          `A leverage point is a place in a system where a small, well-focused intervention produces a large change in behaviour. The systems thinker Donella Meadows developed the idea from a simple observation: complex systems are not uniformly responsive. Push in some places and you get enormous effects; push in others, often with far more effort, and almost nothing moves.`,
          `The trouble is that effort is usually misdirected. People pour energy into low-leverage points that barely move the system, while the high-leverage places that could transform it go untouched. Leverage-point thinking reframes the question from "how hard should we push?" to "where should we push?"`,
        ],
      },
      {
        heading: "A hierarchy of leverage",
        body: [
          `Meadows ranked leverage points from least to most powerful, and argued the most obvious places are usually the least effective. At the shallow end are "parameters" — the numbers and settings, like tax rates or subsidies. People focus here because they are visible and easy to adjust, yet tweaking the numbers rarely changes a system's fundamental behaviour, because its structure stays the same.`,
          `Moving up toward higher leverage, you reach the strength and structure of feedback loops, the flows of information (who knows what), and the rules of the system — its incentives and constraints. Higher still are the system's goals — what it is actually trying to achieve — and, deepest of all, the "paradigm" or mindset from which the whole system arises. The higher the leverage point, the more powerful it is, but also the harder to change and the more resistance it meets.`,
        ],
      },
      {
        heading: "The counterintuitive twist",
        body: [
          `Meadows's most humbling insight was that people tend to identify leverage points correctly and then push them in the wrong direction. Intuition often senses where the high-leverage places are, but the intuitive response is frequently backwards, worsening the problem. A system may be crying out for the opposite of what everyone's instinct suggests.`,
          `So finding a leverage point is only half the challenge; understanding the system well enough to push it the right way is the harder half. Because feedback and delays make complex systems behave counterintuitively, the "obvious" direction is often precisely wrong — a strong argument for humility before intervening, since confident force at a leverage point without real understanding produces powerful, well-intentioned mistakes.`,
        ],
      },
      {
        heading: "The deepest leverage: goals and paradigms",
        body: [
          `The most powerful leverage points are the deepest: the goals of the system and the paradigm from which it arises. Change a system's goal and everything downstream reorganises, because all its parameters, loops and rules serve that goal; a system pursuing a different goal becomes a fundamentally different system. Changing the paradigm — the shared, often unexamined assumptions a whole system takes for granted — is the most powerful intervention of all, though the rarest and hardest.`,
          `This explains why genuinely transformative change so often comes not from tweaking policies but from a shift in how people fundamentally see something, which then reorganises everything beneath it. It also explains why such change is so resisted: paradigms and goals are the least visible and most defended features of a system, precisely because they are so powerful.`,
        ],
      },
      {
        heading: "Finding the real lever in your own problems",
        body: [
          `Apply this to any problem you want to change, from a personal habit to a whole organisation. The instinct is to reach for shallow, obvious levers — adjust a number, add a rule, try harder — but these are often absorbed by a structure that stays the same. Look deeper: at the feedback loops, the flow of information, the incentives and rules, and deepest of all, the underlying goals and mindset. Ask where a small change would actually shift the system's behaviour, not merely where change is easiest — and remember that even when you find the real lever, the intuitive direction to push may be wrong.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is a leverage point?",
        choices: [
          { id: "a", label: "A place in a system where a small, well-focused intervention can produce a large change" },
          { id: "b", label: "The heaviest part of a machine" },
          { id: "c", label: "A place where no intervention has any effect" },
          { id: "d", label: "The point where a system collapses" },
        ],
        correctChoiceId: "a",
        explanation: "Meadows's leverage point is where a modest effort yields a big result; systems are not uniformly responsive, so finding these high-leverage places is central to intervening effectively rather than exhausting effort on changes the system absorbs.",
      },
      {
        dimension: "reasoning",
        prompt: "Why did Meadows argue that adjusting 'parameters' (numbers like tax rates) is usually low-leverage?",
        choices: [
          { id: "a", label: "Because tweaking the numbers rarely changes a system's fundamental behaviour, since its structure remains the same" },
          { id: "b", label: "Because numbers are impossible to change" },
          { id: "c", label: "Because parameters are the deepest leverage point" },
          { id: "d", label: "Because they always transform the system" },
        ],
        correctChoiceId: "a",
        explanation: "Parameters are where people most often focus because they are visible and easy to adjust, but they are usually low-leverage: changing the numbers leaves the system's structure — its loops, rules and goals — intact, so its fundamental behaviour persists.",
      },
      {
        dimension: "depth",
        prompt: "According to Meadows, where do the most powerful leverage points lie?",
        choices: [
          { id: "a", label: "In the system's goals and its paradigm — the deep mindset and assumptions from which it arises" },
          { id: "b", label: "In the numbers and settings of the system" },
          { id: "c", label: "In the physical size of the system" },
          { id: "d", label: "In the speed of the system" },
        ],
        correctChoiceId: "a",
        explanation: "The deepest leverage lies in the intangible realm of purposes and mindsets: changing a goal reorganises everything downstream, and changing the paradigm — the shared assumptions a system takes for granted — is the most powerful, though rarest and hardest, intervention.",
      },
      {
        dimension: "reasoning",
        prompt: "What was Meadows's most counterintuitive insight about leverage points?",
        choices: [
          { id: "a", label: "People tend to identify leverage points correctly but push them in the wrong direction, worsening the problem" },
          { id: "b", label: "Leverage points do not really exist" },
          { id: "c", label: "The obvious direction to push is always correct" },
          { id: "d", label: "All leverage points are equally powerful" },
        ],
        correctChoiceId: "a",
        explanation: "Intuition often senses where the high-leverage places are, but the intuitive response is frequently backwards; because systems behave counterintuitively through feedback and delays, well-meaning interventions at genuine leverage points can make things worse.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is deep change at the level of goals and paradigms so difficult and resisted?",
        choices: [
          { id: "a", label: "Paradigms and goals are the least visible and most defended features of a system, precisely because they are so powerful" },
          { id: "b", label: "Because they have no effect on the system" },
          { id: "c", label: "Because they are the easiest things to change" },
          { id: "d", label: "Because no one ever tries to change them" },
        ],
        correctChoiceId: "a",
        explanation: "The highest leverage lies in the intangible assumptions and purposes from which a system's structures grow, and these are the least visible and most defended features — which is why transformative change so often comes from shifts in worldview yet meets fierce resistance.",
      },
    ],
    sources: [
      { label: "Donella Meadows, 'Leverage Points: Places to Intervene in a System'", note: "The classic essay ranking leverage points by power.", type: "Reference", url: "https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/" },
      { label: "Donella Meadows, Thinking in Systems", note: "The primer developing the leverage-point hierarchy.", type: "Reference", url: "https://en.wikipedia.org/wiki/Thinking_In_Systems:_A_Primer" },
    ],
  },
  {
    concept: "Bottleneck",
    level: "A-level",
    summary: "the constraint limiting overall system performance",
    estimatedMinutes: 8,
    deck: "A system is only as fast as its slowest step. The bottleneck — the single constraint that limits the performance of the whole — is where improvement actually matters, and one of the most useful insights in all of systems thinking is that effort spent improving anything except the bottleneck is very often wasted.",
    keyTerms: [
      { label: "Bottleneck", value: "The constraint that limits the throughput or performance of an entire system." },
      { label: "Theory of constraints", value: "Goldratt's principle that a system's output is governed by its single tightest constraint." },
      { label: "The chain metaphor", value: "A chain is only as strong as its weakest link; a system as fast as its slowest step." },
      { label: "Non-bottleneck improvement", value: "Improving anything but the constraint usually does not improve the whole." },
    ],
    sections: [
      {
        heading: "The slowest step governs the whole",
        body: [
          `A bottleneck is the point that limits the performance of the whole system — the constraint that determines how much it can produce, like the narrow neck of a bottle limiting the pour regardless of how wide the rest is. In any system with multiple stages, overall output is governed by the slowest or most limited part. A system is only as fast as its slowest step, just as a chain is only as strong as its weakest link.`,
          `This runs against the intuition that improving any part improves the whole. In a bottlenecked system, improving anything other than the bottleneck does not raise overall performance at all — the bottleneck still caps everything, and a faster non-bottleneck step just sits idle more, waiting on it. Knowing where the bottleneck is matters enormously: it is the one place where improvement translates into system-wide gains.`,
        ],
      },
      {
        heading: "The theory of constraints",
        body: [
          `Eliyahu Goldratt turned this into a management approach, the "Theory of Constraints", popularised in his novel The Goal. Every system has at least one constraint limiting its output, and the key is to focus relentlessly on that constraint rather than improving everything at once. His cycle: identify the constraint; exploit it (get the most from it without major investment); subordinate everything else to it; elevate it (add capacity if needed); then, once it is no longer the constraint, repeat on the new bottleneck.`,
          `The power is in the focus. Rather than dissipating effort across the whole system, it concentrates where it makes a difference — and it recognises that the bottleneck moves, so improvement is a continuous process of finding and relieving the current constraint. The logic is completely general, which is why it has been applied far beyond manufacturing to projects, services and organisations of all kinds.`,
        ],
      },
      {
        heading: "Why improving the non-bottleneck backfires",
        body: [
          `Improving a non-bottleneck can actively harm the system. Speed up a step feeding the bottleneck and it produces work faster than the bottleneck can process, so work piles up in front of the constraint — more inventory, more congestion — with no increase in output, since the bottleneck still limits everything. Local efficiency at a non-bottleneck can degrade the whole.`,
          `This exposes the danger of optimising the parts of a system in isolation. Many organisations push every department to be as productive as possible, assuming that maximising each part maximises the whole. In a bottlenecked system this is false: maximising non-bottleneck output just creates waste while the bottleneck caps the total. A step "underutilised" because it is waiting on the bottleneck is not a problem to fix — forcing it to be busy only makes things worse.`,
        ],
      },
      {
        heading: "Finding and using the bottleneck",
        body: [
          `Bottleneck thinking tells you where to focus. Faced with a system underperforming, the first question is: what is the constraint? Improvement should concentrate there, because that is the only place it raises overall performance. This is liberating — instead of being overwhelmed by everything that could be improved, you address the one thing that actually limits the system.`,
          `The bottleneck is usually easy to spot: it is where work piles up and things wait, the step everything else is feeding or starved by. Once found, it should be protected and used to the fullest, since time lost there is lost to the whole system, while time lost at a non-bottleneck may not matter at all. And because relieving one bottleneck reveals the next, it is a continuous discipline: find the constraint, focus there, then find the next.`,
        ],
      },
      {
        heading: "The one slow step holding everything up",
        body: [
          `You meet bottlenecks everywhere: the one slow checkout setting the pace of the whole queue, the single overloaded person whose backlog holds up a team, the one stage where everything waits. The counterintuitive lesson is that speeding up anything except the bottleneck usually achieves nothing — a faster step before the slow one just piles up work. So when something is too slow, resist improving everything; find the single constraint actually limiting the whole and focus there. And once you fix one bottleneck, another appears, so improvement is a continuous hunt for the current limiting step.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is a bottleneck in a system?",
        choices: [
          { id: "a", label: "The constraint that limits the performance of the whole system — the slowest or most limited part" },
          { id: "b", label: "The fastest part of a system" },
          { id: "c", label: "The average performance of all parts" },
          { id: "d", label: "The largest component by size" },
        ],
        correctChoiceId: "a",
        explanation: "A bottleneck is the constraint that governs the whole system's output; like the narrow neck of a bottle, the slowest step limits everything, so a system is only as fast as its slowest part.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does improving a non-bottleneck usually not improve overall performance?",
        choices: [
          { id: "a", label: "The bottleneck still constrains everything, so a faster non-bottleneck just sits idle or piles up work without raising total output" },
          { id: "b", label: "Because non-bottlenecks are the real constraint" },
          { id: "c", label: "Because improvement is always proportional" },
          { id: "d", label: "Because systems have no constraints" },
        ],
        correctChoiceId: "a",
        explanation: "In a system limited by a bottleneck, improving any other component leaves total output unchanged because the bottleneck still caps everything; making a non-bottleneck faster just means it waits more or piles up work in front of the constraint.",
      },
      {
        dimension: "depth",
        prompt: "What is the core principle of Goldratt's 'Theory of Constraints'?",
        choices: [
          { id: "a", label: "Every system has a constraint that limits its output, so improvement must focus relentlessly on that constraint" },
          { id: "b", label: "Improve every part of the system equally" },
          { id: "c", label: "Systems have no limiting factors" },
          { id: "d", label: "The fastest step determines output" },
        ],
        correctChoiceId: "a",
        explanation: "Goldratt argued that a system's output is governed by its tightest constraint, so improvement should identify, exploit, subordinate to, and elevate the constraint — then repeat on the new bottleneck once the old one is relieved.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can maximising the efficiency of every part of a system be harmful?",
        choices: [
          { id: "a", label: "Maximising non-bottleneck steps creates waste and pile-ups while the bottleneck still caps total output — you must optimise the whole, not the parts" },
          { id: "b", label: "Because efficiency is always bad" },
          { id: "c", label: "Because parts never affect the whole" },
          { id: "d", label: "Because bottlenecks do not exist" },
        ],
        correctChoiceId: "a",
        explanation: "Pushing every step to maximum efficiency assumes maximising each part maximises the whole, but in a bottlenecked system it just creates waste and imbalance while the constraint still limits output — so local efficiency should be subordinated to the constraint's throughput.",
      },
      {
        dimension: "reasoning",
        prompt: "How can you typically identify where a bottleneck is?",
        choices: [
          { id: "a", label: "It is usually where work piles up or waits — the queue forms in front of the constraint" },
          { id: "b", label: "It is always the fastest, least busy step" },
          { id: "c", label: "It is impossible to identify" },
          { id: "d", label: "It is wherever the most money is spent" },
        ],
        correctChoiceId: "a",
        explanation: "The bottleneck is typically where work accumulates and things wait, since the queue forms in front of the constraint; once found, it should be protected and used fully, because time lost at the bottleneck is lost to the whole system.",
      },
    ],
    sources: [
      { label: "Eliyahu Goldratt, The Goal / Theory of Constraints", note: "The classic development of bottleneck-focused improvement.", type: "Reference", url: "https://en.wikipedia.org/wiki/Theory_of_constraints" },
      { label: "Bottleneck (production) (overview)", note: "Reference on constraints and system throughput.", type: "Reference", url: "https://en.wikipedia.org/wiki/Bottleneck_(production)" },
    ],
  },
  {
    concept: "Unintended Consequences",
    level: "A-level",
    summary: "effects that emerge because systems respond to interventions",
    estimatedMinutes: 8,
    deck: "You intervene in a complex system to solve a problem, and it responds in ways you never anticipated — sometimes making the problem worse. Unintended consequences are not bad luck but a predictable feature of acting on systems that adapt, and understanding why they happen is a powerful guard against confident, well-meaning failure.",
    keyTerms: [
      { label: "Unintended consequences", value: "Effects of an action that were not foreseen, often undermining its goal." },
      { label: "Perverse incentive", value: "A reward that accidentally encourages the opposite of what was intended." },
      { label: "The cobra effect", value: "A famous case where a bounty on cobras led to more cobras being bred." },
      { label: "Systems adapt", value: "People and systems respond to interventions in ways that reshape their effects." },
    ],
    sections: [
      {
        heading: "Why systems bite back",
        body: [
          `Unintended consequences are outcomes of an action that were not foreseen and often work against its purpose. They are pervasive because complex systems do not passively receive an intervention — they respond and adapt, and their response can produce effects the intervenor never anticipated. It is a humbling lesson: our ability to predict and control complex systems is limited, and confident, well-intentioned actions frequently produce counterproductive results.`,
          `The root cause is that complex systems are interconnected and adaptive. An intervention ripples through the system's feedback loops and delays, producing knock-on effects far from the target. And when the system includes people, they change their behaviour in response — adapting to, exploiting or circumventing the intervention. Because we cannot trace all these ripples in advance, unintended consequences are a structural feature of acting on systems too complex to fully predict, not a sign of incompetence.`,
        ],
      },
      {
        heading: "Perverse incentives and the cobra effect",
        body: [
          `A telling category is the "perverse incentive" — one designed to encourage a behaviour that accidentally rewards its opposite. The classic case is the "cobra effect": to reduce venomous cobras in colonial Delhi, the authorities offered a bounty for dead cobras. It worked at first, until people began breeding cobras for the bounty; when the scheme was scrapped, the breeders released their now-worthless snakes, leaving more cobras than before.`,
          `The pattern is general: reward a measurable proxy for what you actually want, and people optimise the proxy in ways that defeat the goal. Reward doctors for operations performed and you may get unnecessary surgery; reward researchers for papers published and you get low-quality, salami-sliced output. This is Goodhart's Law — "when a measure becomes a target, it ceases to be a good measure" — and it is one of the most predictable sources of unintended consequences.`,
        ],
      },
      {
        heading: "Common patterns of backfire",
        body: [
          `Backfires follow recognisable patterns. In "policy resistance", a system's actors, pursuing their own goals, adapt to an intervention in ways that neutralise it, so it stubbornly returns to its previous state — a strong balancing loop defeating the effort. In problem "displacement", suppressing a problem in one place makes it pop up elsewhere: clamp down and it shifts, moved rather than solved.`,
          `Another is "shifting the burden": an intervention that relieves symptoms can undermine the system's own capacity to solve the root problem, creating dependence and worsening the cause over time. And short-term fixes routinely create long-term problems. What unites these is that they arise from the system's dynamic response — feedback, adaptation and delay — rather than from the intervention being wrong in isolation.`,
        ],
      },
      {
        heading: "Acting wisely despite uncertainty",
        body: [
          `None of this means we should never intervene — inaction has consequences too, and is itself a choice. It counsels a particular wisdom: humility about predicting complex systems, and caution about confident, sweeping interventions whose full effects we cannot foresee. It means thinking through how the system and its people will adapt, and especially how incentives might be gamed.`,
          `Above all it argues for an experimental approach: test interventions on a small scale before rolling them out, monitor closely for unexpected effects, and be ready to adjust or reverse course. Treating a policy less as a final answer and more as a hypothesis to be tested and revised is the mature response — it does not eliminate unintended consequences, but it catches them early and limits the damage.`,
        ],
      },
      {
        heading: "Why your clever fix might backfire",
        body: [
          `You have seen unintended consequences whenever a fix made things worse. The rule that solved one problem and created three; the incentive people gamed until it produced the opposite of its intent; the crackdown that just pushed a problem elsewhere. When you reward a metric or target rather than the real goal, expect people to optimise the metric in ways that defeat the purpose, exactly like the cobra breeders. So intervene with humility: think through how people will adapt, test changes small, watch for surprises, and before confidently fixing anything complex, ask "how might this backfire?" — because in adaptive systems, it often will.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "reasoning",
        prompt: "Why do interventions in complex systems reliably produce unintended consequences?",
        choices: [
          { id: "a", label: "Because such systems are interconnected and adaptive — an intervention ripples through feedback and delays, and people change their behaviour in response" },
          { id: "b", label: "Because the intervenors are always incompetent" },
          { id: "c", label: "Because systems never respond to interventions" },
          { id: "d", label: "Because effects are always exactly as predicted" },
        ],
        correctChoiceId: "a",
        explanation: "Complex systems respond and adapt rather than passively receiving an intervention; ripples through feedback loops and delays, plus people adapting their behaviour, produce effects that cannot be fully traced in advance — a structural feature, not incompetence.",
      },
      {
        dimension: "depth",
        prompt: "What is a 'perverse incentive', as shown by the cobra effect?",
        choices: [
          { id: "a", label: "An incentive designed to encourage one behaviour that accidentally rewards the opposite — a bounty on cobras led to breeding them" },
          { id: "b", label: "An incentive that always works perfectly" },
          { id: "c", label: "A reward that no one responds to" },
          { id: "d", label: "A punishment for good behaviour only" },
        ],
        correctChoiceId: "a",
        explanation: "A perverse incentive produces the opposite of its intent: the bounty for dead cobras led people to breed cobras, and scrapping it left more cobras than before — when you reward a proxy, people optimise it in ways that defeat the goal.",
      },
      {
        dimension: "reasoning",
        prompt: "How does the cobra effect connect to Goodhart's Law?",
        choices: [
          { id: "a", label: "'When a measure becomes a target, it ceases to be a good measure' — rewarding a proxy leads people to game it while missing the real purpose" },
          { id: "b", label: "It shows measures can never be gamed" },
          { id: "c", label: "It proves incentives have no effect" },
          { id: "d", label: "It means targets always work perfectly" },
        ],
        correctChoiceId: "a",
        explanation: "Rewarding a proxy for what you want — dead cobras, operations performed, papers published — leads people to optimise the proxy in ways that defeat the goal, exactly Goodhart's Law that a measure made a target ceases to measure well.",
      },
      {
        dimension: "depth",
        prompt: "What is 'policy resistance' as a pattern of unintended consequences?",
        choices: [
          { id: "a", label: "A system's actors adapt to an intervention in ways that neutralise it, so the system returns to its previous state" },
          { id: "b", label: "A policy that works perfectly forever" },
          { id: "c", label: "The refusal to ever make policy" },
          { id: "d", label: "A system with no actors" },
        ],
        correctChoiceId: "a",
        explanation: "In policy resistance, the system's various actors pursuing their own goals adapt to neutralise an intervention, so it stubbornly returns to its previous state — a strong balancing loop defeating repeated efforts.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the mature response to the reality of unintended consequences?",
        choices: [
          { id: "a", label: "Intervene with humility — anticipate adaptation, test small before scaling, monitor for surprises, and be ready to adjust" },
          { id: "b", label: "Never intervene in anything at all" },
          { id: "c", label: "Ignore consequences and push confidently ahead" },
          { id: "d", label: "Assume complex systems are fully predictable" },
        ],
        correctChoiceId: "a",
        explanation: "Since inaction is also a choice, the wise response is not paralysis but humility: think through how the system and people will adapt, test interventions small, watch for unexpected effects, and treat a policy as a hypothesis to be revised — expecting to be surprised.",
      },
    ],
    sources: [
      { label: "Unintended consequences (overview)", note: "Reference on the concept, perverse incentives and the cobra effect.", type: "Reference", url: "https://en.wikipedia.org/wiki/Unintended_consequences" },
      { label: "Donella Meadows, Thinking in Systems", note: "On policy resistance and why systems surprise us.", type: "Reference", url: "https://en.wikipedia.org/wiki/Thinking_In_Systems:_A_Primer" },
    ],
  },
  {
    concept: "Resilience",
    level: "A-level",
    summary: "capacity to absorb disturbance and keep functioning",
    estimatedMinutes: 8,
    deck: "There are two very different ways for a system to be good: to be efficient, squeezing the most out of every resource, and to be resilient, able to absorb shocks and keep working. Modern systems often optimise ruthlessly for the first while quietly destroying the second — which is why understanding resilience, and its tension with efficiency, matters enormously.",
    keyTerms: [
      { label: "Resilience", value: "A system's capacity to absorb disturbance and keep functioning." },
      { label: "Efficiency vs resilience", value: "The trade-off between optimising output and maintaining the capacity to withstand shocks." },
      { label: "Redundancy and diversity", value: "Backups and variety that let a system cope when parts fail." },
      { label: "Brittleness", value: "The fragility of a system optimised for efficiency with no slack." },
    ],
    sections: [
      {
        heading: "The capacity to withstand shocks",
        body: [
          `Resilience is a system's capacity to absorb disturbances and keep functioning, and to recover after being disrupted. A resilient system takes a hit — a failure, an attack, a shock — and keeps working, bending without breaking. Resilience is not about avoiding disturbance, which is often impossible, but about withstanding and recovering from it, and its absence is a source of catastrophic, cascading failure.`,
          `Crucially, resilience is a different property from performance under normal conditions. A system can perform brilliantly when everything goes as expected yet be extremely fragile, failing catastrophically the moment something goes wrong. Resilience is about behaviour under stress, not under ideal conditions, which is why it is easily overlooked: it provides no visible benefit until the moment of crisis.`,
        ],
      },
      {
        heading: "The efficiency-resilience trade-off",
        body: [
          `The most underappreciated insight about resilience is its tension with efficiency. Efficiency means the maximum output from minimum resources — eliminating waste, slack and redundancy. Resilience often depends on exactly those things: spare capacity to absorb surges, redundant backups, buffers and reserves for a crisis, and diversity that provides alternatives. The features that look like "waste" to an efficiency mindset are frequently what make a system resilient.`,
          `So there is a genuine trade-off. A system relentlessly optimised — no slack, no redundancy, every resource stretched — becomes brittle: highly productive normally but liable to fail catastrophically when something goes wrong, having no capacity to absorb the shock. Just-in-time supply chains that minimise inventory are efficient but proved fragile when disruptions caused cascading shortages. The relentless drive for efficiency, unbalanced by resilience, systematically produces dangerously brittle systems.`,
        ],
      },
      {
        heading: "What builds resilience",
        body: [
          `Several features make systems resilient, and most cost some efficiency. Redundancy — backups and duplicate capacity so that if one part fails another takes over — protects against single points of failure, at the price of duplication. Diversity — a variety of components or strategies rather than one optimised option — provides alternatives when one fails and prevents a single failure mode from taking down everything.`,
          `Buffers and reserves — spare stock, savings, slack — give a system something to draw on. Modularity contains failures rather than letting them cascade; decentralisation avoids dependence on a single point whose failure would be catastrophic; adaptability lets a system reorganise rather than being rigidly optimised for one scenario. What these share is slack, alternatives and the capacity to cope with the unexpected — the "inefficient" reserves that look wasteful in good times and keep a system alive in bad ones.`,
        ],
      },
      {
        heading: "Resilience as wise design",
        body: [
          `In an uncertain world, this argues against optimising purely for expected conditions and for deliberately building in the capacity to withstand shocks — accepting some cost in normal-times efficiency as the price of robustness. This is not an argument against efficiency, which has real value, but against the single-minded pursuit of it that strips out every buffer until a system cannot absorb the inevitable shock.`,
          `Resilience is easy to underrate because it is invisible until tested. Spare capacity and redundancy look like pure cost during the long stretches when nothing goes wrong, creating constant pressure to eliminate them. Their value is revealed, often dramatically, only at the moment of crisis. A system's true robustness is measured not by how well it performs when everything goes right, but by how well it holds up when things go wrong.`,
        ],
      },
      {
        heading: "Why the leanest option isn't always the best",
        body: [
          `You face the efficiency-resilience trade-off in your own life. Running your finances with no savings buffer is efficient — every pound working — but brittle, leaving you exposed to any shock; an emergency fund is "inefficient" idle money that keeps you afloat when something goes wrong. A schedule packed with no slack collapses the moment one thing runs late. A skill set narrowly optimised for one job is fragile if that job disappears. Be wary of stripping out every reserve and bit of slack in the name of efficiency: when everything is optimised to the limit, it works beautifully right up until it fails catastrophically.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is resilience?",
        choices: [
          { id: "a", label: "A system's capacity to absorb disturbances and keep functioning, recovering after disruption" },
          { id: "b", label: "A system's peak performance under ideal conditions" },
          { id: "c", label: "The elimination of all waste and slack" },
          { id: "d", label: "The speed at which a system produces output" },
        ],
        correctChoiceId: "a",
        explanation: "Resilience is the ability to take a hit and keep working — bending without breaking, recovering after disruption — a property distinct from performance under normal conditions, and invisible until the moment of crisis.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is there a trade-off between efficiency and resilience?",
        choices: [
          { id: "a", label: "Efficiency eliminates the slack, redundancy and reserves that resilience often depends on to absorb shocks" },
          { id: "b", label: "Because efficient systems are always resilient" },
          { id: "c", label: "Because resilience requires maximum output" },
          { id: "d", label: "Because they are the same property" },
        ],
        correctChoiceId: "a",
        explanation: "Efficiency squeezes out waste, slack and redundancy, but those are often exactly what make a system resilient — spare capacity, backups and reserves to absorb shocks — so the relentless pursuit of efficiency can quietly destroy resilience.",
      },
      {
        dimension: "depth",
        prompt: "What does it mean for a highly efficient system to be 'brittle'?",
        choices: [
          { id: "a", label: "It performs superbly under normal conditions but is liable to fail catastrophically when something goes wrong, having no capacity to absorb shocks" },
          { id: "b", label: "It is physically fragile and easily broken by hand" },
          { id: "c", label: "It never works at all" },
          { id: "d", label: "It has too much spare capacity" },
        ],
        correctChoiceId: "a",
        explanation: "A system optimised with no slack, redundancy or reserves is highly productive normally but brittle — it fails disastrously when a shock hits, as just-in-time supply chains did when disruptions caused cascading shortages.",
      },
      {
        dimension: "reasoning",
        prompt: "How does 'diversity' build resilience?",
        choices: [
          { id: "a", label: "Having varied components or strategies provides alternatives when one fails and prevents a single failure mode from taking down everything" },
          { id: "b", label: "By standardising on the single most efficient option" },
          { id: "c", label: "By removing all backups" },
          { id: "d", label: "By making a system maximally efficient" },
        ],
        correctChoiceId: "a",
        explanation: "Diversity provides alternatives when one approach fails and prevents a single failure mode from taking down the whole, though it is less efficient than standardising on one best option — one of the 'inefficient' features that build resilience.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is the value of resilience easy to underrate?",
        choices: [
          { id: "a", label: "Its reserves and redundancy look like waste during the long periods when nothing goes wrong, and only prove their worth in a crisis" },
          { id: "b", label: "Because resilience has no real value" },
          { id: "c", label: "Because crises never happen" },
          { id: "d", label: "Because resilience improves normal-times efficiency" },
        ],
        correctChoiceId: "a",
        explanation: "Spare capacity, backups and buffers appear as waste and cost when nothing goes wrong, creating pressure to eliminate them for efficiency, but their value is revealed dramatically at the moment of crisis — a false economy to strip them out.",
      },
    ],
    sources: [
      { label: "Donella Meadows, Thinking in Systems", note: "On resilience, self-organisation and why efficiency can reduce robustness.", type: "Reference", url: "https://en.wikipedia.org/wiki/Thinking_In_Systems:_A_Primer" },
      { label: "Resilience (overview)", note: "Reference on system resilience and the efficiency trade-off.", type: "Reference", url: "https://en.wikipedia.org/wiki/Resilience_(engineering_and_construction)" },
    ],
  },
  {
    concept: "Emergence",
    level: "University",
    summary: "patterns arising from interactions among parts",
    estimatedMinutes: 9,
    deck: "A single ant is nearly mindless, yet an ant colony behaves with startling intelligence. No neuron is conscious, yet brains are. This is emergence: complex, coherent patterns that arise from the interactions of simpler parts, yet cannot be found in or predicted from the parts alone. It is why the whole really can be more than the sum of its parts.",
    keyTerms: [
      { label: "Emergence", value: "The arising of complex patterns and properties from interactions among simpler parts." },
      { label: "The whole exceeds the parts", value: "Emergent properties belong to the system, not to any component." },
      { label: "Irreducibility", value: "Emergent behaviour cannot be understood by examining the parts in isolation." },
      { label: "Self-organisation", value: "Order arising from local interactions without central control." },
    ],
    sections: [
      {
        heading: "The whole beyond the parts",
        body: [
          `Emergence is where complex patterns and properties arise from the interactions of simpler components, and exist at the level of the whole rather than in any part. The slogan is that "the whole is more than the sum of its parts": a system can have behaviours that none of its components possess, appearing only when the parts interact. So understanding the parts is not enough to understand the system.`,
          `The examples are striking. A single ant follows simple rules with no grand plan, yet a colony collectively builds complex structures, finds optimal routes and allocates labour — behaviour no ant designs or comprehends. A single neuron is a simple cell, yet billions interacting give rise to mind. A flock of birds produces coordinated swirling patterns from each bird following simple local rules about its neighbours, with no leader.`,
        ],
      },
      {
        heading: "Order without a designer",
        body: [
          `Much emergence arises without central control — "self-organisation". The coordinated flock has no leader; the intelligent colony has no master ant; the pattern emerges from countless local interactions, each part following simple rules based only on its immediate situation. Order arises from the bottom up, through the interactions themselves, rather than being imposed from the top down. This overturns the intuition that complex, purposeful-looking order requires a designer.`,
          `This is found throughout nature and society. Ecosystems self-organise into complex webs; markets coordinate resources through countless individual decisions with no central planner (Adam Smith's "invisible hand" is an early recognition of this); cities develop intricate patterns from the uncoordinated activities of their inhabitants; and language, culture and social norms emerge without anyone designing them.`,
        ],
      },
      {
        heading: "Why you cannot reduce the whole to the parts",
        body: [
          `Emergent phenomena are, in an important sense, "irreducible": you cannot fully understand or predict them by studying the parts in isolation, however completely. Knowing everything about a single neuron does not tell you what consciousness is; a full description of one ant does not reveal the colony's behaviour. The emergent properties belong to the pattern of interaction among the parts, not to the parts themselves.`,
          `This challenges "reductionism" — understanding a system by breaking it into components. Reductionism is powerful and often essential, but for emergent phenomena, breaking the system apart destroys the very interactions that produce the emergent behaviour, so the whole cannot be found in the parts. Some things can only be understood holistically — a mind, a market, an ecosystem — by studying the interactions and patterns, not just cataloguing the components.`,
        ],
      },
      {
        heading: "Living with emergence",
        body: [
          `Because emergent behaviour arises unpredictably from interactions, complex systems can surprise us with behaviours no one designed — which connects to the difficulty of prediction and unintended consequences. If you want to influence an emergent phenomenon, working directly on the parts may not produce the intended whole-level effect; you often have to work on the interactions, the local rules, or the conditions from which the pattern emerges.`,
          `Emergence also carries wonder and humility. Some of the most remarkable things in existence — life, mind, consciousness, ecosystems, societies — are emergent, arising from simpler parts in ways we still struggle to understand. Reality is layered, with new kinds of order appearing at each level of organisation, not reducible to the level below — a nested hierarchy of wholes, each with properties that only appear when the parts come together.`,
        ],
      },
      {
        heading: "The wave that no fan starts",
        body: [
          `You witness emergence all the time. A stadium "wave" is a coherent pattern no single person creates — it emerges from each person simply reacting to their neighbours, order with no leader. A traffic jam can form and move backward along a motorway though every driver is trying to go forward — a pattern belonging to the traffic as a whole, not any car. A city's neighbourhoods, a market's prices, a workplace culture — all are emergent. The key insight: you cannot understand or control these wholes by looking only at the parts; to grasp a jam you study the interactions between cars, and to shift a culture you work on how people interact.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is emergence?",
        choices: [
          { id: "a", label: "Complex patterns and properties arising from the interactions of simpler parts, existing at the level of the whole" },
          { id: "b", label: "The breaking of a system into its components" },
          { id: "c", label: "A property found in every individual part" },
          { id: "d", label: "The failure of a system" },
        ],
        correctChoiceId: "a",
        explanation: "Emergence is where the whole is more than the sum of its parts: a system exhibits behaviours and properties none of its components possess, appearing only when the parts interact — as a colony is intelligent though no single ant is.",
      },
      {
        dimension: "reasoning",
        prompt: "What is remarkable about how a flock of birds produces its coordinated patterns?",
        choices: [
          { id: "a", label: "The order self-organises with no leader — each bird follows simple local rules about its neighbours" },
          { id: "b", label: "A lead bird directs every movement" },
          { id: "c", label: "The pattern is designed in advance" },
          { id: "d", label: "The birds do not actually interact" },
        ],
        correctChoiceId: "a",
        explanation: "The coordinated flock has no leader; the pattern emerges spontaneously from each bird following simple rules based on its neighbours — self-organisation, where complex order arises bottom-up from local interactions without central control.",
      },
      {
        dimension: "reasoning",
        prompt: "Why are emergent phenomena described as 'irreducible'?",
        choices: [
          { id: "a", label: "They cannot be fully understood by studying the parts in isolation, because the emergent properties belong to the interactions, not the parts" },
          { id: "b", label: "Because they can always be reduced to a single part" },
          { id: "c", label: "Because they have no relationship to the parts" },
          { id: "d", label: "Because the parts do not exist" },
        ],
        correctChoiceId: "a",
        explanation: "Knowing everything about a single neuron does not reveal consciousness, because emergent properties belong to the pattern of interaction among parts, not the parts themselves — so they can only be understood at the level of the whole.",
      },
      {
        dimension: "reasoning",
        prompt: "How does emergence challenge 'reductionism'?",
        choices: [
          { id: "a", label: "Breaking a system into parts destroys the interactions that produce the emergent behaviour, so the whole cannot be found in the parts" },
          { id: "b", label: "It proves reductionism always works perfectly" },
          { id: "c", label: "It shows parts should never be studied" },
          { id: "d", label: "It means systems have no components" },
        ],
        correctChoiceId: "a",
        explanation: "Reductionism studies a system by breaking it into components, but for emergent phenomena this destroys the very interactions that produce the behaviour, so understanding requires studying the whole and its patterns of interaction, not just the parts.",
      },
      {
        dimension: "depth",
        prompt: "If you want to influence an emergent phenomenon, what does emergence suggest you work on?",
        choices: [
          { id: "a", label: "The interactions, local rules and conditions from which the pattern emerges, rather than trying to control the emergent pattern directly" },
          { id: "b", label: "Only a single part in isolation" },
          { id: "c", label: "Nothing, since emergence cannot be influenced" },
          { id: "d", label: "The emergent pattern directly, ignoring the parts' interactions" },
        ],
        correctChoiceId: "a",
        explanation: "Because emergent behaviour arises from interactions and cannot be read off the parts, working directly on parts may not produce the intended whole-level effect; you often must work on the interactions, local rules, or conditions from which the pattern emerges.",
      },
    ],
    sources: [
      { label: "Emergence (overview)", note: "Reference on emergence, self-organisation and irreducibility.", type: "Reference", url: "https://en.wikipedia.org/wiki/Emergence" },
      { label: "Self-organization (overview)", note: "Reference on order arising without central control.", type: "Reference", url: "https://en.wikipedia.org/wiki/Self-organization" },
    ],
  },
  {
    concept: "Boundary",
    level: "University",
    summary: "the chosen edge of what counts inside the system",
    estimatedMinutes: 9,
    deck: "Before you can analyse a system, you must decide where it ends — what counts as inside it and what is left outside. But this boundary is a choice, not a fact given by the world, and where you draw it profoundly shapes what you see, what you miss, and what conclusions you reach.",
    keyTerms: [
      { label: "Boundary", value: "The chosen edge that defines what is included in a system and what is left outside." },
      { label: "Boundaries are choices", value: "Where to draw the edge is a decision by the analyst, not a fact of the world." },
      { label: "Externalities", value: "Effects pushed outside the boundary and thereby ignored in the analysis." },
      { label: "Boundary critique", value: "Deliberately questioning and re-examining where the boundary is drawn." },
    ],
    sections: [
      {
        heading: "Deciding where the system ends",
        body: [
          `Every analysis of a system requires deciding on its boundary — where the system ends and its environment begins, what to count as part of it and what to leave outside. This looks like a technical preliminary but is one of the most consequential choices in any analysis. The world does not come pre-divided into neatly bounded systems; boundaries are drawn by the analyst for the purpose at hand.`,
          `The crucial point is that boundaries are choices, not facts given by nature. A "system" is a mental construct we impose on a seamlessly interconnected reality to make it analysable, and where we cut it out is up to us. This does not make boundaries arbitrary — some are far more useful than others — but it makes them decisions we are responsible for and can question.`,
        ],
      },
      {
        heading: "How boundaries shape conclusions",
        body: [
          `Where a boundary is drawn shapes the analysis decisively. Draw it narrowly and factors outside it are ignored as external, even if they are crucial. Draw it wider and those same factors come inside and must be reckoned with, potentially reversing the conclusion. Two analyses of the "same" situation with different boundaries can reach opposite conclusions, not from disagreeing about shared facts but from including or excluding different things.`,
          `The concept of "externalities" in economics illustrates this. Draw a business's boundary narrowly around its own costs and revenues, and the pollution it produces is "external" and ignored, making the business look profitable. Draw it wider to include the environment and community, and the pollution becomes an internal cost that changes the whole picture. The pollution did not change; the boundary did. Much harm arises from boundaries drawn to push inconvenient costs "outside" where they can be ignored.`,
        ],
      },
      {
        heading: "The politics of the boundary",
        body: [
          `Because the boundary determines what is counted, drawing it is an exercise of power and values, not just analysis. Whoever draws the boundary decides what and who counts — whose concerns are included and whose are dismissed as "outside the scope", which costs are reckoned with and which ignored. A narrow boundary that excludes the affected community, the long-term consequences, or the wider costs is a decision, often a self-serving one, about what will be allowed to matter.`,
          `This is why critical systems thinkers emphasise "boundary critique": deliberately examining where boundaries are drawn, whose interests they serve, and what they exclude. Rather than accepting the given boundary as natural, it asks: who drew this, for what purpose, and what does it leave out? Many apparently technical disputes are really disagreements about where the boundary should be — about what should count as part of the problem.`,
        ],
      },
      {
        heading: "Choosing boundaries well",
        body: [
          `There is no single correct boundary; the right one depends on the purpose. A useful boundary includes what is relevant to the question and excludes what genuinely is not, capturing the important interactions while staying tractable. Too narrow, and you miss crucial factors; too wide, and the analysis loses focus. The art is to draw it wide enough to include what matters, but no wider.`,
          `The key discipline is to make the boundary choice conscious and explicit, and to stay willing to revisit it. Rather than accepting whatever boundary is implicit in how a problem is framed, ask what is being left out and whether it matters, and be ready to redraw. Often the crucial insight comes from expanding the boundary — asking "what else is connected to this that we are treating as external?"`,
        ],
      },
      {
        heading: "What the framing leaves out",
        body: [
          `You meet boundary choices constantly without noticing. Whenever a problem is framed a particular way — this is a question about cost, or about our department, or about this quarter — a boundary has been drawn that includes some things and excludes others, shaping the answer before analysis begins. The useful habit is to ask: where is the boundary, who drew it, and what is left outside? Notice when inconvenient costs and consequences are pushed "out of scope" — the pollution treated as external, the long-term effects ignored — and recognise that this is a choice, not a fact. Often the crucial insight is to widen the boundary and ask what connected thing is being treated as external.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is a system 'boundary'?",
        choices: [
          { id: "a", label: "The chosen edge that defines what is included in a system and what is left outside as external" },
          { id: "b", label: "A physical wall around a system" },
          { id: "c", label: "The largest component of a system" },
          { id: "d", label: "The point where a system fails" },
        ],
        correctChoiceId: "a",
        explanation: "A boundary defines where a system ends and its environment begins — what counts as inside and what is left out. Crucially, it is chosen by the analyst for a purpose, not given by nature, and it shapes the whole analysis.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is it significant that boundaries are 'choices, not facts'?",
        choices: [
          { id: "a", label: "The world is seamlessly interconnected, so where we cut a system out is a decision we are responsible for and that can be questioned" },
          { id: "b", label: "Because boundaries are fixed by nature" },
          { id: "c", label: "Because the boundary never affects conclusions" },
          { id: "d", label: "Because all boundaries are equally useless" },
        ],
        correctChoiceId: "a",
        explanation: "A system is a construct imposed on interconnected reality; where we draw its edge is up to us, which does not make boundaries arbitrary but does make them consequential decisions we are responsible for and can re-examine.",
      },
      {
        dimension: "reasoning",
        prompt: "How does the concept of 'externalities' illustrate the power of the boundary?",
        choices: [
          { id: "a", label: "Draw the boundary narrowly around a business's own costs and its pollution is 'external' and ignored; widen it and the pollution becomes an internal cost that changes the picture" },
          { id: "b", label: "Externalities are unaffected by where the boundary is drawn" },
          { id: "c", label: "Externalities prove boundaries do not matter" },
          { id: "d", label: "Externalities are always inside every boundary" },
        ],
        correctChoiceId: "a",
        explanation: "The pollution does not change; the boundary does. A narrow boundary excludes the pollution as 'external', making the business look profitable, while a wider one internalises it — showing the boundary choice is often ethical and political, not merely technical.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is drawing a boundary an exercise of power and values?",
        choices: [
          { id: "a", label: "Whoever draws it decides what and who counts — whose concerns are included and whose costs are dismissed as 'outside the scope'" },
          { id: "b", label: "Because boundaries are purely neutral and technical" },
          { id: "c", label: "Because no one ever chooses boundaries" },
          { id: "d", label: "Because power has no role in analysis" },
        ],
        correctChoiceId: "a",
        explanation: "Because the boundary determines what is counted, drawing it decides whose concerns matter and which costs are reckoned with; a narrow boundary excluding affected communities or long-term costs is a decision, often self-serving, about what will be allowed to matter.",
      },
      {
        dimension: "depth",
        prompt: "What is 'boundary critique'?",
        choices: [
          { id: "a", label: "Deliberately examining where a boundary is drawn, whose interests it serves, and what it includes and excludes" },
          { id: "b", label: "Accepting the given boundary of a problem as natural" },
          { id: "c", label: "Drawing the boundary as narrowly as possible" },
          { id: "d", label: "Refusing to define any system boundary" },
        ],
        correctChoiceId: "a",
        explanation: "Boundary critique questions the boundary rather than accepting it as given — asking who drew it, for what purpose, and what it leaves out — revealing that many apparently technical disputes are really disagreements about what should count as part of the problem.",
      },
    ],
    sources: [
      { label: "Systems thinking and boundary critique (overview)", note: "Reference on system boundaries and critical systems thinking.", type: "Reference", url: "https://en.wikipedia.org/wiki/Systems_thinking" },
      { label: "Externality (overview)", note: "Reference on effects pushed outside the analytical boundary.", type: "Reference", url: "https://en.wikipedia.org/wiki/Externality" },
    ],
  },
  {
    concept: "Incentive Structure",
    level: "A-level",
    summary: "rewards and penalties that shape repeated behaviour",
    estimatedMinutes: 8,
    deck: "'Show me the incentive and I'll show you the outcome,' said Charlie Munger. The incentive structure of a system — the rewards and penalties, formal and informal, that people face — is one of the most powerful forces shaping behaviour, and getting it wrong is one of the most reliable ways to produce exactly what you did not want.",
    keyTerms: [
      { label: "Incentive structure", value: "The system of rewards and penalties that shapes people's repeated behaviour." },
      { label: "Incentives shape behaviour", value: "People largely respond to the incentives they face, whatever the stated intentions." },
      { label: "Goodhart's Law", value: "When a measure becomes a target, it ceases to be a good measure." },
      { label: "Perverse incentives", value: "Rewards that accidentally encourage the opposite of what is intended." },
    ],
    sections: [
      {
        heading: "The power of incentives",
        body: [
          `An incentive structure is the system of rewards and penalties — financial, social, professional, personal — that people face, and that shapes their behaviour. One of the most reliable insights across economics and human behaviour is that incentives strongly shape what people do: they tend to do what they are rewarded for, often far more reliably than what they are merely told or asked to do. Charlie Munger put it bluntly: "Show me the incentive and I'll show you the outcome."`,
          `This makes incentives a crucial lever. To change behaviour, changing the incentives is often far more effective than exhortation or appeals to good intentions, because it works with the grain of self-interest rather than against it. Conversely, if a system's incentives point the wrong way, no amount of stated values or instructions will reliably overcome them — people follow the incentives.`,
        ],
      },
      {
        heading: "When incentives go wrong",
        body: [
          `Badly designed incentives reliably produce trouble, generating behaviour that satisfies the incentive while defeating its purpose. A "perverse incentive" rewards the opposite of what was intended — the bounty on cobras that led people to breed cobras. More broadly, whenever you reward a measurable proxy for what you actually want, people optimise the proxy in ways that miss the goal: reward doctors for operations and you may get unnecessary surgery; reward teachers for test scores and you get teaching to the test; reward employees for hours logged and you get presenteeism.`,
          `This is Goodhart's Law: "when a measure becomes a target, it ceases to be a good measure." A metric that was a useful indicator becomes distorted once people are incentivised to maximise it, because they optimise the metric rather than the underlying thing. Designing incentives well means anticipating how they will be gamed — asking not "what behaviour do I want to reward?" but "what behaviour will this actually produce, including the clever ways people will exploit it?"`,
        ],
      },
      {
        heading: "Beyond money",
        body: [
          `Incentives are not only financial. People respond to social incentives (status, approval, belonging, reputation), professional ones (advancement, recognition, avoiding blame), and personal ones (meaning, autonomy, the satisfaction of the work itself), often more powerfully than to money. A system's real incentive structure includes all of these, formal and informal, so understanding behaviour means considering the full range of rewards and penalties, not just the explicit financial ones.`,
          `Crucially, the informal and implicit incentives often matter more than the official ones, and can contradict them. An organisation may officially reward collaboration while informally rewarding individual heroics; may claim to value long-term thinking while rewarding short-term results; may say it wants people to raise problems while punishing those who do. Where formal and informal incentives conflict, behaviour follows the real ones — which is why the gap between an organisation's stated values and its actual incentives is so revealing.`,
        ],
      },
      {
        heading: "Designing and reading incentives",
        body: [
          `Understanding incentives has two uses. The first is design: to shape behaviour, get the incentives right and anticipate how they will actually be responded to, including how they might be gamed. Good design aligns the rewards people face with the outcomes you genuinely want, so that people pursuing their own interest also serve the goal, and avoids rewarding proxies that can be gamed at the goal's expense.`,
          `The second is diagnostic: reading a system's incentive structure to understand its behaviour and see past stated intentions to real drivers. When a system produces behaviour that seems irrational or contrary to its stated goals, the explanation usually lies in its incentives — someone is being rewarded for the undesirable behaviour, or punished for the desirable one. Asking "what are the incentives here?" cuts through official explanations to the real forces at work.`,
        ],
      },
      {
        heading: "Following the incentives around you",
        body: [
          `You can explain a huge amount of puzzling behaviour by following the incentives. When a company's staff act against its stated values, look at what actually gets people promoted and what gets them blamed. When a metric that once meant something becomes gamed and useless, you are watching Goodhart's Law. When a well-meaning rule produces the opposite of its intent, a perverse incentive is at work. And notice how powerfully you respond to incentives yourself, often more than to your own stated intentions. To change behaviour — in a team, a family, or yourself — change the incentives rather than just exhorting; to understand any system, ask "what are the incentives here?"`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is an incentive structure?",
        choices: [
          { id: "a", label: "The system of rewards and penalties — financial, social, professional — that shapes people's behaviour" },
          { id: "b", label: "A company's organisational chart" },
          { id: "c", label: "The physical layout of a workplace" },
          { id: "d", label: "A list of a system's official rules only" },
        ],
        correctChoiceId: "a",
        explanation: "An incentive structure is the full system of rewards and penalties people face, which strongly shapes their behaviour — 'show me the incentive and I'll show you the outcome', as Munger put it.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is changing incentives often more effective than exhortation or rules for changing behaviour?",
        choices: [
          { id: "a", label: "Incentives work with the grain of self-interest, and people follow them more reliably than they follow instructions or appeals" },
          { id: "b", label: "Because incentives have no effect on behaviour" },
          { id: "c", label: "Because people ignore rewards and punishments" },
          { id: "d", label: "Because exhortation always works best" },
        ],
        correctChoiceId: "a",
        explanation: "People tend to do what they are rewarded for far more reliably than what they are told to do, so changing incentives works with the grain of self-interest; if incentives point the wrong way, no amount of stated values will reliably overcome them.",
      },
      {
        dimension: "depth",
        prompt: "What does Goodhart's Law state?",
        choices: [
          { id: "a", label: "When a measure becomes a target, it ceases to be a good measure" },
          { id: "b", label: "All incentives are financial" },
          { id: "c", label: "Measures never affect behaviour" },
          { id: "d", label: "Targets always improve performance" },
        ],
        correctChoiceId: "a",
        explanation: "Once people are incentivised to maximise a metric, they optimise the metric rather than the underlying thing it was meant to track, distorting it — so tying rewards to a measure tends to corrupt that measure, as people game it.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is it a mistake to think of incentives as only financial?",
        choices: [
          { id: "a", label: "People also respond powerfully to social, professional and personal incentives, often more than to monetary ones" },
          { id: "b", label: "Because money is the only thing that motivates people" },
          { id: "c", label: "Because non-financial incentives do not exist" },
          { id: "d", label: "Because incentives never vary in kind" },
        ],
        correctChoiceId: "a",
        explanation: "People respond to status, approval, belonging, career advancement, meaning and autonomy as well as money — often the non-financial incentives are more powerful — so a system's real incentive structure includes all of them, formal and informal.",
      },
      {
        dimension: "reasoning",
        prompt: "When a system's formal and informal incentives conflict, which does behaviour usually follow?",
        choices: [
          { id: "a", label: "The real, informal incentives — what actually gets rewarded and punished in practice — rather than the stated ones" },
          { id: "b", label: "Always the official, stated incentives" },
          { id: "c", label: "Neither; behaviour is random" },
          { id: "d", label: "Whichever is written down first" },
        ],
        correctChoiceId: "a",
        explanation: "People read the real incentives accurately and respond to them: an organisation may officially reward collaboration while informally rewarding individual heroics, and behaviour follows what actually gets rewarded — which is why the gap between stated values and real incentives is so revealing.",
      },
    ],
    sources: [
      { label: "Incentive (overview)", note: "Reference on incentives, perverse incentives and behaviour.", type: "Reference", url: "https://en.wikipedia.org/wiki/Incentive" },
      { label: "Goodhart's law (overview)", note: "Reference on how targets corrupt the measures they are based on.", type: "Reference", url: "https://en.wikipedia.org/wiki/Goodhart%27s_law" },
    ],
  },
];

export const systemsThinkingLessons = buildAuthoredLessons(
  "systems-thinking",
  systemsThinking,
);
