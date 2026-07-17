import { buildAuthoredLessons, type AuthoredLesson } from "./types";

// Ten hand-written Systems Thinking lessons: researched, concept-specific prose
// drawing on Meadows, Senge, Goldratt and others, each closing on an everyday
// example, plus genuine recall quizzes.
const systemsThinking: AuthoredLesson[] = [
  {
    concept: "Path Dependence and Lock-In",
    level: "University",
    summary: "why systems get stuck with outcomes nobody would choose today",
    estimatedMinutes: 9,
    deck: "Standard economic reasoning says the best option wins. Path dependence says that where increasing returns operate, the option that gets ahead early wins — and then cannot be dislodged even if something better exists. History is not a search for the optimum; it is a sequence of moments where small accidents got locked in.",
    keyTerms: [
      { label: "Path dependence", value: "Where the sequence of past events, not just present conditions, determines the outcome." },
      { label: "Increasing returns", value: "The condition where adoption makes further adoption more attractive, amplifying early leads." },
      { label: "Lock-in", value: "A state where switching is individually irrational even when the alternative is collectively better." },
      { label: "Switching costs", value: "The private cost of moving, which sustains lock-in regardless of the option's merits." },
    ],
    sections: [
      {
        heading: "Why the best option need not win",
        body: [
          `Conventional analysis assumes competition selects the superior technology: buyers compare, the better product wins, and if something better arrives it displaces the incumbent. This holds where returns diminish — where the more of something exists, the less attractive the next unit becomes. Brian Arthur's contribution was to work out what happens under the opposite condition, increasing returns, where each adoption makes the next adoption more likely.`,
          `Under increasing returns the dynamics invert. Whatever gets ahead early gets further ahead, because its lead is itself an advantage: more users mean more complements, more training, more compatibility, more reason for the next person to join. Small, possibly accidental early events get amplified rather than corrected, and the system converges on one outcome and stays there. Crucially the process is not selecting for quality — it is selecting for whatever happened to lead when the amplification kicked in, and quality is at best one input among several.`,
        ],
      },
      {
        heading: "The mechanisms that do the locking",
        body: [
          `Several distinct mechanisms produce increasing returns, and they compound. Network effects: a communication technology's value rises with its users, so nobody wants the better network with nobody on it. Learning effects: the more a technology is used, the better people get at using and improving it, so the incumbent improves faster simply by being incumbent. Coordination: it pays to do what others do, regardless of merit. And complementary assets: once an ecosystem of skills, tools and supporting products has grown around a standard, the standard is held in place by everything built on it.`,
          `The last mechanism is the strongest and the least visible. A technology can be locked in not by its own merits but by the accumulated investment surrounding it — the trained workforce, the compatible equipment, the codebase, the institutional processes. Switching means abandoning all of it, so the cost of moving is not the price of the new thing but the value of everything the old thing supports. This is why lock-in survives long after the original advantage has evaporated: the thing holding the standard in place was never the standard.`,
        ],
      },
      {
        heading: "The QWERTY problem and its critics",
        body: [
          `The canonical example is the QWERTY keyboard. The standard story, from Paul David, is that the layout was designed in the 1870s partly to slow typists and prevent typebars jamming; typists learned it, employers bought machines matching their typists, and the loop closed. The Dvorak layout, patented in 1936 and claimed to be substantially faster, never displaced it — not because it lost a fair contest but because no individual typist gains from retraining onto a layout no employer uses, and no employer gains from buying machines no typist knows.`,
          `The example is genuinely contested and it is worth knowing why, because the critique sharpens the concept. Liebowitz and Margolis argued the evidence for Dvorak's superiority is thin, resting substantially on studies with Dvorak's own involvement, and that later controlled comparisons show little advantage. If QWERTY is not meaningfully worse, it is not a market failure at all — just a standard. Their broader point deserves respect: demonstrating lock-in requires showing a superior alternative exists and is not being adopted, which is much harder than pointing at a standard you dislike. Path dependence is real; QWERTY may be a poor example of it, and "this is just path dependence" is often an untested assertion.`,
        ],
      },
      {
        heading: "What follows for intervening",
        body: [
          `The framework carries a sharp practical implication about timing. If increasing returns operate, there is an early window during which the outcome is genuinely open and small interventions can decide it — and after which the system is locked and enormous force achieves nothing. Intervention is therefore not uniformly difficult; it is nearly free early and nearly impossible late, and the difference between those regimes can be a few years. Most attempts to shift a locked system fail not because the effort was insufficient but because it arrived after the window closed.`,
          `It also reframes what an inefficient arrangement is evidence of. Where a system is locked into something suboptimal, the useful inference is not that the people in it are foolish — each individual is behaving rationally given what everyone else does, which is precisely why nobody defects. That is a coordination failure, not a competence failure, and it is why exhortation never works and why escaping lock-in generally requires either a coordinating actor who can move everyone at once or a shock large enough to break the complementary assets. Understanding which of those you are dealing with is the whole strategic question.`,
        ],
      },
      {
        heading: "Why you are still using the thing you complain about",
        body: [
          `You are locked in right now, and the tell is that you can name the better alternative and are not using it. The software you grumble about because your colleagues and files are on it; the platform whose competitor is better but empty; the file format, the language, the qwerty keyboard under your fingers. Notice that you are not being irrational — moving alone would genuinely make you worse off, which is exactly what lock-in means and why it survives everyone privately preferring something else. The useful habit is to notice when a system is still in its open window, because that is the only time a small push decides anything. After it closes, the same push does nothing, and effort spent there is spent for the satisfaction rather than the outcome.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "reasoning",
        prompt: "Why do increasing returns break the assumption that the best option wins?",
        choices: [
          { id: "a", label: "The system selects for whatever led early, not for quality" },
          { id: "b", label: "Consumers cannot evaluate technical quality without expert guidance" },
          { id: "c", label: "Better options are usually more expensive to produce at scale" },
          { id: "d", label: "Competition drives out variety before quality can be assessed" },
        ],
        correctChoiceId: "a",
        explanation: "Under diminishing returns, competition selects quality. Under increasing returns, each adoption makes the next more likely, so small accidental early leads get amplified and the system converges on whatever happened to be ahead.",
      },
      {
        dimension: "reasoning",
        prompt: "Which mechanism most durably sustains lock-in?",
        choices: [
          { id: "a", label: "Skills, tools and processes built around the standard" },
          { id: "b", label: "Patent protection preventing competitors from copying the incumbent" },
          { id: "c", label: "Brand loyalty among users who resist unfamiliar alternatives" },
          { id: "d", label: "Regulatory approval that competitors would have to obtain independently" },
        ],
        correctChoiceId: "a",
        explanation: "Switching means abandoning the trained workforce, compatible equipment and everything built on the standard. The cost of moving is the value of the ecosystem, not the price of the new thing — so lock-in outlives any original advantage.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the substance of the Liebowitz and Margolis critique of QWERTY?",
        choices: [
          { id: "a", label: "Dvorak's edge is thin, so QWERTY may be fine, not a failure" },
          { id: "b", label: "Typists did in fact retrain onto Dvorak in large numbers during the 1940s" },
          { id: "c", label: "Path dependence cannot occur in markets with more than two competing designs" },
          { id: "d", label: "QWERTY was demonstrably the fastest layout available at the time of its adoption" },
        ],
        correctChoiceId: "a",
        explanation: "Their point is methodological and fair: demonstrating lock-in requires showing a superior alternative exists and is not adopted. If Dvorak is not meaningfully better, QWERTY is just a standard — and 'this is path dependence' is often untested.",
      },
      {
        dimension: "reasoning",
        prompt: "What does path dependence imply about when to intervene?",
        choices: [
          { id: "a", label: "Nearly free early, nearly impossible after lock-in" },
          { id: "b", label: "Intervention becomes easier over time as the inefficiency grows more obvious" },
          { id: "c", label: "Intervention requires the same effort regardless of the system's maturity" },
          { id: "d", label: "Intervention should be delayed until the superior alternative is fully proven" },
        ],
        correctChoiceId: "a",
        explanation: "There is a window during which the outcome is genuinely open and small pushes decide it, after which enormous force achieves nothing. Most failed attempts to shift a locked system arrived late rather than being underpowered.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is a locked-in suboptimal outcome not evidence that participants are behaving foolishly?",
        choices: [
          { id: "a", label: "Each is rational given the others, so nobody defects" },
          { id: "b", label: "Participants are usually unaware that a superior alternative exists at all" },
          { id: "c", label: "The suboptimality is typically too small for any individual to notice" },
          { id: "d", label: "Rational actors would have prevented the lock-in from occurring initially" },
        ],
        correctChoiceId: "a",
        explanation: "Moving alone makes you worse off, so nobody moves — a coordination failure, not a competence failure. That is why exhortation never works and escape needs either a coordinating actor or a shock that breaks the complementary assets.",
      },
    ],
    sources: [
      { label: "Path dependence (overview)", note: "Reference on increasing returns, lock-in and the QWERTY debate.", type: "Reference", url: "https://en.wikipedia.org/wiki/Path_dependence" },
      { label: "W. Brian Arthur, increasing returns (overview)", note: "Reference on self-reinforcing mechanisms in economics.", type: "Reference", url: "https://en.wikipedia.org/wiki/W._Brian_Arthur" },
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
          { id: "a", label: "A stock is a level; a flow is a rate" },
          { id: "b", label: "A stock and a flow are two names for one quantity" },
          { id: "c", label: "A stock is a rate of change; a flow is the level" },
          { id: "d", label: "A flow is fixed while a stock varies freely" },
        ],
        correctChoiceId: "a",
        explanation: "A stock is the amount present (water in a tub, money in an account); a flow is the movement changing it (the tap, the drain). The stock changes only through the difference between its inflows and outflows.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does reducing an inflow not necessarily reduce a stock?",
        choices: [
          { id: "a", label: "If inflow still beats outflow, the stock rises, just slower" },
          { id: "b", label: "Because a stock responds only to its outflow, not inflow" },
          { id: "c", label: "Because inflow and outflow always stay balanced" },
          { id: "d", label: "Because the stock adjusts to the flow after a fixed lag" },
        ],
        correctChoiceId: "a",
        explanation: "Turning the tap down but not off, while the tub still fills faster than it drains, means the water level keeps rising; to actually reduce a stock you must make outflow exceed inflow — a distinction people routinely miss.",
      },
      {
        dimension: "reasoning",
        prompt: "How does the stock-flow distinction apply to atmospheric carbon dioxide?",
        choices: [
          { id: "a", label: "Emissions exceed absorption, so the stock climbs" },
          { id: "b", label: "Stable emissions bring the stock straight back down" },
          { id: "c", label: "The stock tracks the yearly emissions rate directly" },
          { id: "d", label: "Slower emissions growth is enough to shrink the total" },
        ],
        correctChoiceId: "a",
        explanation: "The accumulated stock of CO2 rises as long as emissions (inflow) exceed absorption (outflow); to stop the stock rising, emissions must fall to match absorption — reasoning that also applies to debt, inventory and population.",
      },
      {
        dimension: "depth",
        prompt: "Why do stocks give systems 'inertia'?",
        choices: [
          { id: "a", label: "Because they change only gradually through their flows" },
          { id: "b", label: "Because a flow resets the stock the moment it shifts" },
          { id: "c", label: "Because stocks and flows adjust in perfect step" },
          { id: "d", label: "Because a stock leads its flows rather than lagging" },
        ],
        correctChoiceId: "a",
        explanation: "A stock takes time to fill or drain however fast you change the flows, so systems with large stocks respond slowly, accumulate effects over time, and can be hard to steer — leading to overshoot and oscillation.",
      },
      {
        dimension: "reasoning",
        prompt: "To reduce a stock, what are your options?",
        choices: [
          { id: "a", label: "Cut the inflow or raise the outflow" },
          { id: "b", label: "Raise the inflow so the outflow catches up" },
          { id: "c", label: "Adjust the stock and let the flows follow it" },
          { id: "d", label: "Freeze both flows and wait for the stock to settle" },
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
    concept: "Requisite Variety",
    level: "University",
    summary: "why a controller must be at least as complex as what it controls",
    estimatedMinutes: 9,
    deck: "Ashby's Law is one of the few genuine theorems about control: only variety can absorb variety. A regulator with fewer possible responses than the system has possible disturbances cannot hold it steady — not through incompetence, but as a matter of arithmetic. It explains why simple rules fail complex problems, and why every fix is either more variety or less.",
    keyTerms: [
      { label: "Variety", value: "The number of distinguishable states a system can occupy — Ashby's measure of complexity." },
      { label: "Ashby's Law", value: "Only variety can destroy variety: a regulator needs at least as many responses as there are disturbances." },
      { label: "Attenuation", value: "Reducing the variety a controller must face, by restricting what the system is allowed to do." },
      { label: "Amplification", value: "Increasing the controller's variety, by delegating, automating or adding discretion." },
    ],
    sections: [
      {
        heading: "Variety as a countable quantity",
        body: [
          `W. Ross Ashby's move was to make complexity countable. The variety of a system is the number of distinguishable states it can occupy — a light switch has two, a chessboard has an astronomical number. Once complexity is a number rather than an adjective, you can do arithmetic with it, and the arithmetic yields a hard constraint on control that holds regardless of skill, effort or intention.`,
          `The law states that only variety can destroy variety. To keep a system within acceptable bounds against disturbances, the regulator must have at least as many distinct responses as the disturbances have distinct forms. If the environment can do a hundred things and you can do ten, ninety of them pass through unregulated — and no amount of trying harder alters this, because the missing responses do not exist. This is not a heuristic or an observation about organisations. It is a theorem, with the status of a conservation law: it tells you what is impossible before you begin.`,
        ],
      },
      {
        heading: "The two moves available",
        body: [
          `Because the law is an inequality, there are exactly two ways to satisfy it, and every real control strategy is one or the other. Amplify the regulator's variety: hire more people, delegate authority, automate responses, give frontline staff discretion, add sensors. Or attenuate the system's variety: restrict what it is permitted to do, standardise inputs, refuse non-standard cases, simplify the product range. Every fix is one of these, and recognising which one you are attempting clarifies most control problems.`,
          `Attenuation is far more common than people admit, because it is cheaper and it disguises itself. When a company standardises its offering, when a form allows only certain answers, when a service refuses to handle edge cases, when a hospital protocol narrows what may be considered — the variety has not been managed, it has been forbidden. That is often the right call. But the variety does not vanish; it is displaced onto whoever must live with the exclusion, which is why every rigid system generates a shadow economy of workarounds. The cases the system attenuated away still exist, and someone is absorbing them off the books.`,
        ],
      },
      {
        heading: "Why simple rules fail complex problems",
        body: [
          `The law explains a pattern that otherwise looks like recurring bad luck: a simple rule imposed on a varied situation fails, and the failure is structural rather than a defect of the rule. A policy with five categories facing a world with five hundred cases will misclassify, and tightening the rule does not help because tightening does not add variety. This is why the answer to a failing rule is so often a further rule, and why the resulting rulebook grows without ever catching up — each addition adds one response to a domain that keeps generating new disturbances.`,
          `It also explains why frontline discretion keeps reappearing after being abolished. Discretion is variety amplification: it lets a human generate a response the rulebook does not contain. Remove it and the organisation's variety drops below the environment's, and the excluded cases either fail visibly or get handled through unofficial channels. Every organisation that has centralised decisions to ensure consistency, and then discovered its staff quietly improvising, has run this experiment. The improvisation is not indiscipline; it is the system restoring the variety it needs to function.`,
        ],
      },
      {
        heading: "What the law does not license",
        body: [
          `The law is frequently over-claimed, and its limits matter. It does not say the regulator must be as complex as the system in every respect — only that it needs enough variety on the dimensions that matter for the goal. A thermostat regulates a room containing vastly more variety than two states, because it only cares about one variable, and against that variable its variety is adequate. Choosing which dimensions matter is a modelling judgement the law says nothing about, and getting it wrong is how regulators with impressive variety still fail: they are varied along the wrong axis.`,
          `Nor does it justify unlimited complexity in controllers. Variety is expensive, and a regulator with more variety than it needs is waste, not safety. The law is a lower bound rather than a target. Its real value is diagnostic: when regulation is failing, it tells you the answer must be more variety here, less variety there, or a better choice of which dimension to regulate on — and that trying harder along the current axis, which is the instinctive response, is the one option arithmetic has already ruled out.`,
        ],
      },
      {
        heading: "Why the policy never covers your case",
        body: [
          `You have been on the wrong end of this. The support line whose options do not include your problem, the form with no box for your situation, the policy that clearly never imagined you — none of these is failing through malice or stupidity. Someone attenuated the variety to make the system tractable, and you are one of the cases that got attenuated away. Notice what happens next: the agent bends a rule, or you find a workaround, or you give up. That is variety being restored off the books, which is why the workaround is a permanent feature of every rigid system rather than a temporary imperfection. And when you next design anything — a process, a rule, a form — the useful question is not whether it handles the common case but how much variety the world will throw at it, and whether you are prepared to amplify to meet it or honest about what you are forbidding.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What does Ashby's Law state?",
        choices: [
          { id: "a", label: "Responses must match the number of disturbances" },
          { id: "b", label: "A system's complexity grows in proportion to the number of its components" },
          { id: "c", label: "Control becomes impossible once a system exceeds a fixed threshold of states" },
          { id: "d", label: "Regulators should be simpler than the systems they act upon to remain reliable" },
        ],
        correctChoiceId: "a",
        explanation: "Only variety can destroy variety. If the environment can do a hundred things and you can do ten, ninety pass unregulated — and trying harder cannot help, because the missing responses do not exist. It is a theorem, not a heuristic.",
      },
      {
        dimension: "reasoning",
        prompt: "What are the only two ways to satisfy the law?",
        choices: [
          { id: "a", label: "Amplify the regulator's variety, or attenuate the system's" },
          { id: "b", label: "Increase resources, or lower the acceptable performance standard" },
          { id: "c", label: "Add feedback loops, or lengthen the time allowed to respond" },
          { id: "d", label: "Improve measurement accuracy, or reduce environmental noise" },
        ],
        correctChoiceId: "a",
        explanation: "The law is an inequality, so you raise the left side or lower the right. Every real control strategy — delegation, automation, standardisation, refusing edge cases — is one of these two moves.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does attenuation disguise itself as control?",
        choices: [
          { id: "a", label: "Excluded variety is displaced onto those it excludes" },
          { id: "b", label: "Attenuation is only possible in systems that were already fully regulated" },
          { id: "c", label: "Restricting inputs raises the regulator's variety as a side effect" },
          { id: "d", label: "Attenuated systems report fewer disturbances because sensing is reduced" },
        ],
        correctChoiceId: "a",
        explanation: "Forbidding variety is not managing it. The cases still exist and someone absorbs them off the books — which is why every rigid system grows a shadow economy of workarounds.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does abolishing frontline discretion tend to backfire?",
        choices: [
          { id: "a", label: "Cutting discretion drops variety below the environment" },
          { id: "b", label: "Staff resent the loss of autonomy and deliberately underperform in response" },
          { id: "c", label: "Centralised decisions take longer, so throughput falls below demand" },
          { id: "d", label: "Rules cannot be written quickly enough to replace the removed judgements" },
        ],
        correctChoiceId: "a",
        explanation: "Discretion lets a human generate responses the rulebook lacks. Remove it and excluded cases either fail visibly or get handled unofficially — and that improvisation is the system restoring the variety it needs, not indiscipline.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can a thermostat regulate a room despite having only two states?",
        choices: [
          { id: "a", label: "It needs variety only on the dimension it regulates" },
          { id: "b", label: "The room's variety is lower than it appears once air is treated as uniform" },
          { id: "c", label: "Ashby's Law applies only to systems containing human decision-makers" },
          { id: "d", label: "Continuous feedback substitutes for the variety the controller lacks" },
        ],
        correctChoiceId: "a",
        explanation: "The law demands enough variety on the dimensions that matter for the goal. Choosing those dimensions is a modelling judgement the law is silent on — and regulators with impressive variety still fail when it is varied along the wrong axis.",
      },
    ],
    sources: [
      { label: "Variety (cybernetics) and Ashby's Law (overview)", note: "Reference on requisite variety, attenuation and amplification.", type: "Reference", url: "https://en.wikipedia.org/wiki/Variety_(cybernetics)" },
      { label: "W. Ross Ashby, An Introduction to Cybernetics", note: "The work stating and proving the law of requisite variety.", type: "Reference", url: "https://en.wikipedia.org/wiki/W._Ross_Ashby" },
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
          { id: "a", label: "Where a small push yields a large change" },
          { id: "b", label: "The point that carries the most physical load" },
          { id: "c", label: "The part that consumes the most resources overall" },
          { id: "d", label: "The stage at which the system reaches its limit" },
        ],
        correctChoiceId: "a",
        explanation: "Meadows's leverage point is where a modest effort yields a big result; systems are not uniformly responsive, so finding these high-leverage places is central to intervening effectively rather than exhausting effort on changes the system absorbs.",
      },
      {
        dimension: "reasoning",
        prompt: "Why did Meadows argue that adjusting 'parameters' (numbers like tax rates) is usually low-leverage?",
        choices: [
          { id: "a", label: "Tweaking numbers rarely changes behaviour, since structure stays" },
          { id: "b", label: "Because parameters are hidden from those who run the system" },
          { id: "c", label: "Because numeric change is resisted more than structural change" },
          { id: "d", label: "Because parameters only matter in small, simple systems" },
        ],
        correctChoiceId: "a",
        explanation: "Parameters are where people most often focus because they are visible and easy to adjust, but they are usually low-leverage: changing the numbers leaves the system's structure — its loops, rules and goals — intact, so its fundamental behaviour persists.",
      },
      {
        dimension: "depth",
        prompt: "According to Meadows, where do the most powerful leverage points lie?",
        choices: [
          { id: "a", label: "In its goals and paradigm — the mindset the system runs on" },
          { id: "b", label: "In the buffer sizes and delays built into the system" },
          { id: "c", label: "In the feedback loops that govern day-to-day flows" },
          { id: "d", label: "In the rules that regulate who has access to information" },
        ],
        correctChoiceId: "a",
        explanation: "The deepest leverage lies in the intangible realm of purposes and mindsets: changing a goal reorganises everything downstream, and changing the paradigm — the shared assumptions a system takes for granted — is the most powerful, though rarest and hardest, intervention.",
      },
      {
        dimension: "reasoning",
        prompt: "What was Meadows's most counterintuitive insight about leverage points?",
        choices: [
          { id: "a", label: "People find leverage points but push them the wrong way" },
          { id: "b", label: "Leverage points move around too fast to be used" },
          { id: "c", label: "The strongest leverage points are the most visible ones" },
          { id: "d", label: "Pushing any leverage point hard enough always works" },
        ],
        correctChoiceId: "a",
        explanation: "Intuition often senses where the high-leverage places are, but the intuitive response is frequently backwards; because systems behave counterintuitively through feedback and delays, well-meaning interventions at genuine leverage points can make things worse.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is deep change at the level of goals and paradigms so difficult and resisted?",
        choices: [
          { id: "a", label: "Paradigms and goals are the least visible and most defended" },
          { id: "b", label: "Because changing them needs authority no one holds" },
          { id: "c", label: "Because they shift on their own without any effort" },
          { id: "d", label: "Because they can only be changed from outside the system" },
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
          { id: "a", label: "The constraint that caps the whole system's performance" },
          { id: "b", label: "The stage that processes the largest volume" },
          { id: "c", label: "The component that fails most frequently in practice" },
          { id: "d", label: "The step where the most staff are concentrated" },
        ],
        correctChoiceId: "a",
        explanation: "A bottleneck is the constraint that governs the whole system's output; like the narrow neck of a bottle, the slowest step limits everything, so a system is only as fast as its slowest part.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does improving a non-bottleneck usually not improve overall performance?",
        choices: [
          { id: "a", label: "The bottleneck still caps output; the step just idles" },
          { id: "b", label: "Because every step contributes output in equal proportion" },
          { id: "c", label: "Because a faster non-bottleneck slows the constraint down" },
          { id: "d", label: "Because the gain simply appears at a later stage instead" },
        ],
        correctChoiceId: "a",
        explanation: "In a system limited by a bottleneck, improving any other component leaves total output unchanged because the bottleneck still caps everything; making a non-bottleneck faster just means it waits more or piles up work in front of the constraint.",
      },
      {
        dimension: "depth",
        prompt: "What is the core principle of Goldratt's 'Theory of Constraints'?",
        choices: [
          { id: "a", label: "One constraint per system; focus there" },
          { id: "b", label: "Spread improvement evenly across all the steps" },
          { id: "c", label: "Replace the constraint rather than managing it" },
          { id: "d", label: "The output is set by the average of all steps" },
        ],
        correctChoiceId: "a",
        explanation: "Goldratt argued that a system's output is governed by its tightest constraint, so improvement should identify, exploit, subordinate to, and elevate the constraint — then repeat on the new bottleneck once the old one is relieved.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can maximising the efficiency of every part of a system be harmful?",
        choices: [
          { id: "a", label: "Speeding other steps piles up work, output capped" },
          { id: "b", label: "Because local efficiency always lifts the whole" },
          { id: "c", label: "Because the constraint moves to whichever part is slowest" },
          { id: "d", label: "Because idle capacity is always cheaper than pile-ups" },
        ],
        correctChoiceId: "a",
        explanation: "Pushing every step to maximum efficiency assumes maximising each part maximises the whole, but in a bottlenecked system it just creates waste and imbalance while the constraint still limits output — so local efficiency should be subordinated to the constraint's throughput.",
      },
      {
        dimension: "reasoning",
        prompt: "How can you typically identify where a bottleneck is?",
        choices: [
          { id: "a", label: "Where work piles up, the queue forms" },
          { id: "b", label: "It is the step with the newest equipment" },
          { id: "c", label: "It is wherever the fewest people are working" },
          { id: "d", label: "It is the first step in the whole process" },
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
          { id: "a", label: "Adaptive systems ripple and adapt to any push" },
          { id: "b", label: "Because complex systems are simply too large to model" },
          { id: "c", label: "Because feedback always cancels an intervention exactly" },
          { id: "d", label: "Because delays make every effect arrive early instead" },
        ],
        correctChoiceId: "a",
        explanation: "Complex systems respond and adapt rather than passively receiving an intervention; ripples through feedback loops and delays, plus people adapting their behaviour, produce effects that cannot be fully traced in advance — a structural feature, not incompetence.",
      },
      {
        dimension: "depth",
        prompt: "What is a 'perverse incentive', as shown by the cobra effect?",
        choices: [
          { id: "a", label: "It ends up rewarding the opposite behaviour" },
          { id: "b", label: "An incentive too weak to change any behaviour" },
          { id: "c", label: "A reward that only the wealthy can act upon" },
          { id: "d", label: "A penalty applied at random to everyone alike" },
        ],
        correctChoiceId: "a",
        explanation: "A perverse incentive produces the opposite of its intent: the bounty for dead cobras led people to breed cobras, and scrapping it left more cobras than before — when you reward a proxy, people optimise it in ways that defeat the goal.",
      },
      {
        dimension: "reasoning",
        prompt: "How does the cobra effect connect to Goodhart's Law?",
        choices: [
          { id: "a", label: "Target a measure and people game the proxy" },
          { id: "b", label: "It shows proxies always track their true purpose" },
          { id: "c", label: "It proves targets are immune to manipulation" },
          { id: "d", label: "It means a good measure improves once it is a target" },
        ],
        correctChoiceId: "a",
        explanation: "Rewarding a proxy for what you want — dead cobras, operations performed, papers published — leads people to optimise the proxy in ways that defeat the goal, exactly Goodhart's Law that a measure made a target ceases to measure well.",
      },
      {
        dimension: "depth",
        prompt: "What is 'policy resistance' as a pattern of unintended consequences?",
        choices: [
          { id: "a", label: "Actors adapt to neutralise it, restoring the old state" },
          { id: "b", label: "A policy that the public simply refuses to obey" },
          { id: "c", label: "A system too rigid to respond to any policy at all" },
          { id: "d", label: "A policy that succeeds only after a long delay" },
        ],
        correctChoiceId: "a",
        explanation: "In policy resistance, the system's various actors pursuing their own goals adapt to neutralise an intervention, so it stubbornly returns to its previous state — a strong balancing loop defeating repeated efforts.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the mature response to the reality of unintended consequences?",
        choices: [
          { id: "a", label: "Intervene humbly: test small, watch for surprises, adjust" },
          { id: "b", label: "Model the system fully before touching anything" },
          { id: "c", label: "Intervene as forcefully as possible to overwhelm resistance" },
          { id: "d", label: "Wait until every side effect can be ruled out first" },
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
          { id: "a", label: "The capacity to absorb shocks and keep functioning" },
          { id: "b", label: "The output a system reaches when fully optimised" },
          { id: "c", label: "The speed with which a system reaches its target" },
          { id: "d", label: "The ability to run at full capacity indefinitely" },
        ],
        correctChoiceId: "a",
        explanation: "Resilience is the ability to take a hit and keep working — bending without breaking, recovering after disruption — a property distinct from performance under normal conditions, and invisible until the moment of crisis.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is there a trade-off between efficiency and resilience?",
        choices: [
          { id: "a", label: "Efficiency strips the slack resilience needs" },
          { id: "b", label: "Because resilience requires running at maximum output" },
          { id: "c", label: "Because slack always makes a system less stable" },
          { id: "d", label: "Because redundancy raises efficiency at the same time" },
        ],
        correctChoiceId: "a",
        explanation: "Efficiency squeezes out waste, slack and redundancy, but those are often exactly what make a system resilient — spare capacity, backups and reserves to absorb shocks — so the relentless pursuit of efficiency can quietly destroy resilience.",
      },
      {
        dimension: "depth",
        prompt: "What does it mean for a highly efficient system to be 'brittle'?",
        choices: [
          { id: "a", label: "Superb until something breaks, then it fails hard" },
          { id: "b", label: "It is cheap to build but expensive to maintain" },
          { id: "c", label: "It works only under close human supervision" },
          { id: "d", label: "It degrades slowly and predictably over time" },
        ],
        correctChoiceId: "a",
        explanation: "A system optimised with no slack, redundancy or reserves is highly productive normally but brittle — it fails disastrously when a shock hits, as just-in-time supply chains did when disruptions caused cascading shortages.",
      },
      {
        dimension: "reasoning",
        prompt: "How does 'diversity' build resilience?",
        choices: [
          { id: "a", label: "Variety gives alternatives when one fails" },
          { id: "b", label: "By ensuring every component is identical and optimal" },
          { id: "c", label: "By concentrating capability in one reliable unit" },
          { id: "d", label: "By speeding recovery after a total collapse" },
        ],
        correctChoiceId: "a",
        explanation: "Diversity provides alternatives when one approach fails and prevents a single failure mode from taking down the whole, though it is less efficient than standardising on one best option — one of the 'inefficient' features that build resilience.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is the value of resilience easy to underrate?",
        choices: [
          { id: "a", label: "Its reserves look like waste until a crisis proves them" },
          { id: "b", label: "Because its benefits show up only in accounting terms" },
          { id: "c", label: "Because resilience and efficiency cannot be told apart" },
          { id: "d", label: "Because its costs are hidden while its gains are visible" },
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
          { id: "a", label: "Patterns from interacting parts, at the whole's level" },
          { id: "b", label: "The sum of the properties of a system's parts" },
          { id: "c", label: "A behaviour designed into the system in advance" },
          { id: "d", label: "A property that each part already possesses alone" },
        ],
        correctChoiceId: "a",
        explanation: "Emergence is where the whole is more than the sum of its parts: a system exhibits behaviours and properties none of its components possess, appearing only when the parts interact — as a colony is intelligent though no single ant is.",
      },
      {
        dimension: "reasoning",
        prompt: "What is remarkable about how a flock of birds produces its coordinated patterns?",
        choices: [
          { id: "a", label: "Self-organising: each bird follows local rules" },
          { id: "b", label: "A shared signal synchronises the whole flock at once" },
          { id: "c", label: "Each bird tracks the flock's overall shape directly" },
          { id: "d", label: "An external force shapes the flock from outside" },
        ],
        correctChoiceId: "a",
        explanation: "The coordinated flock has no leader; the pattern emerges spontaneously from each bird following simple rules based on its neighbours — self-organisation, where complex order arises bottom-up from local interactions without central control.",
      },
      {
        dimension: "reasoning",
        prompt: "Why are emergent phenomena described as 'irreducible'?",
        choices: [
          { id: "a", label: "Parts alone miss what lives in the interactions" },
          { id: "b", label: "Because they arise before the parts themselves do" },
          { id: "c", label: "Because they can only be described statistically" },
          { id: "d", label: "Because they change faster than the parts can" },
        ],
        correctChoiceId: "a",
        explanation: "Knowing everything about a single neuron does not reveal consciousness, because emergent properties belong to the pattern of interaction among parts, not the parts themselves — so they can only be understood at the level of the whole.",
      },
      {
        dimension: "reasoning",
        prompt: "How does emergence challenge 'reductionism'?",
        choices: [
          { id: "a", label: "Splitting it destroys the interactions behind the whole" },
          { id: "b", label: "It shows the parts are more real than the whole" },
          { id: "c", label: "It means a system has no describable parts at all" },
          { id: "d", label: "It replaces analysis of parts with pure holism" },
        ],
        correctChoiceId: "a",
        explanation: "Reductionism studies a system by breaking it into components, but for emergent phenomena this destroys the very interactions that produce the behaviour, so understanding requires studying the whole and its patterns of interaction, not just the parts.",
      },
      {
        dimension: "depth",
        prompt: "If you want to influence an emergent phenomenon, what does emergence suggest you work on?",
        choices: [
          { id: "a", label: "The interactions the pattern emerges from" },
          { id: "b", label: "A single dominant part that steers the rest" },
          { id: "c", label: "The pattern itself, treating it as a fixed object" },
          { id: "d", label: "The average behaviour of the parts taken separately" },
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
          { id: "a", label: "The chosen edge of what is in and out" },
          { id: "b", label: "The outermost physical limit of a system" },
          { id: "c", label: "The interface where two systems exchange flows" },
          { id: "d", label: "The line separating inputs from outputs" },
        ],
        correctChoiceId: "a",
        explanation: "A boundary defines where a system ends and its environment begins — what counts as inside and what is left out. Crucially, it is chosen by the analyst for a purpose, not given by nature, and it shapes the whole analysis.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is it significant that boundaries are 'choices, not facts'?",
        choices: [
          { id: "a", label: "The world is seamless, so the cut is our choice" },
          { id: "b", label: "Because the correct boundary can always be computed" },
          { id: "c", label: "Because boundaries are set by physical limits alone" },
          { id: "d", label: "Because only experts are entitled to draw them" },
        ],
        correctChoiceId: "a",
        explanation: "A system is a construct imposed on interconnected reality; where we draw its edge is up to us, which does not make boundaries arbitrary but does make them consequential decisions we are responsible for and can re-examine.",
      },
      {
        dimension: "reasoning",
        prompt: "How does the concept of 'externalities' illustrate the power of the boundary?",
        choices: [
          { id: "a", label: "Narrow hides pollution as external; wide internalises it" },
          { id: "b", label: "Externalities exist only where boundaries are absent" },
          { id: "c", label: "Externalities are always counted whatever the boundary" },
          { id: "d", label: "Externalities disappear once a boundary is chosen" },
        ],
        correctChoiceId: "a",
        explanation: "The pollution does not change; the boundary does. A narrow boundary excludes the pollution as 'external', making the business look profitable, while a wider one internalises it — showing the boundary choice is often ethical and political, not merely technical.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is drawing a boundary an exercise of power and values?",
        choices: [
          { id: "a", label: "Whoever draws it decides whose concerns and costs count" },
          { id: "b", label: "Because the widest possible boundary is always fairest" },
          { id: "c", label: "Because values enter only after the boundary is set" },
          { id: "d", label: "Because the boundary follows automatically from the goal" },
        ],
        correctChoiceId: "a",
        explanation: "Because the boundary determines what is counted, drawing it decides whose concerns matter and which costs are reckoned with; a narrow boundary excluding affected communities or long-term costs is a decision, often self-serving, about what will be allowed to matter.",
      },
      {
        dimension: "depth",
        prompt: "What is 'boundary critique'?",
        choices: [
          { id: "a", label: "Examining where it sits and whose interests it serves" },
          { id: "b", label: "Redrawing a boundary until the answer comes out right" },
          { id: "c", label: "Choosing the boundary that keeps the analysis simplest" },
          { id: "d", label: "Setting the boundary by consensus among the affected" },
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
      { label: "Goodhart's Law", value: "Once a measure is made a target, it stops measuring well." },
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
          { id: "a", label: "The rewards and penalties that shape behaviour" },
          { id: "b", label: "The chain of command through which orders pass" },
          { id: "c", label: "The formal policies an organisation publishes" },
          { id: "d", label: "The budget allocated to each part of a system" },
        ],
        correctChoiceId: "a",
        explanation: "An incentive structure is the full system of rewards and penalties people face, which strongly shapes their behaviour — 'show me the incentive and I'll show you the outcome', as Munger put it.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is changing incentives often more effective than exhortation or rules for changing behaviour?",
        choices: [
          { id: "a", label: "Incentives run with self-interest, unlike appeals" },
          { id: "b", label: "Because rules are always obeyed more reliably than rewards" },
          { id: "c", label: "Because appeals to duty outlast any material incentive" },
          { id: "d", label: "Because incentives change beliefs rather than actions" },
        ],
        correctChoiceId: "a",
        explanation: "People tend to do what they are rewarded for far more reliably than what they are told to do, so changing incentives works with the grain of self-interest; if incentives point the wrong way, no amount of stated values will reliably overcome them.",
      },
      {
        dimension: "depth",
        prompt: "What does Goodhart's Law state?",
        choices: [
          { id: "a", label: "Once a measure is made a target, it stops measuring well" },
          { id: "b", label: "Every target eventually improves the thing it tracks" },
          { id: "c", label: "A measure only works once it is set as a target" },
          { id: "d", label: "People ignore whatever measure is turned into a target" },
        ],
        correctChoiceId: "a",
        explanation: "Once people are incentivised to maximise a metric, they optimise the metric rather than the underlying thing it was meant to track, distorting it — so tying rewards to a measure tends to corrupt that measure, as people game it.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is it a mistake to think of incentives as only financial?",
        choices: [
          { id: "a", label: "Social and personal incentives can outweigh money" },
          { id: "b", label: "Because financial rewards always dominate the others" },
          { id: "c", label: "Because status and pride cannot actually change behaviour" },
          { id: "d", label: "Because only measurable incentives affect real choices" },
        ],
        correctChoiceId: "a",
        explanation: "People respond to status, approval, belonging, career advancement, meaning and autonomy as well as money — often the non-financial incentives are more powerful — so a system's real incentive structure includes all of them, formal and informal.",
      },
      {
        dimension: "reasoning",
        prompt: "When a system's formal and informal incentives conflict, which does behaviour usually follow?",
        choices: [
          { id: "a", label: "The informal ones — what is really rewarded" },
          { id: "b", label: "Whichever set of incentives is enforced most harshly" },
          { id: "c", label: "The stated incentives, since people respect the rules" },
          { id: "d", label: "The incentives set by the most senior person present" },
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
