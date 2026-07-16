import { buildAuthoredLessons, type AuthoredLesson } from "./types";

// Ten hand-written Economics lessons: researched, concept-specific prose with
// real models and examples, each closing on an everyday-life example, plus
// genuine recall quizzes.
const economics: AuthoredLesson[] = [
  {
    concept: "Asymmetric Information",
    level: "University",
    summary: "what happens to a market when one side knows more than the other",
    estimatedMinutes: 9,
    deck: "Standard price theory assumes buyers and sellers know what they are trading. Relax that single assumption and markets do not merely become less efficient — they can unravel completely, destroying trades that would have benefited everyone. Akerlof's insight was that information asymmetry is not a friction on markets but a force capable of killing them.",
    keyTerms: [
      { label: "Adverse selection", value: "Hidden information before a deal: the worst risks are the keenest to trade, degrading the pool." },
      { label: "Moral hazard", value: "Hidden action after a deal: being insured against a risk changes how carefully you avoid it." },
      { label: "Signalling", value: "The informed party spending resources to prove quality in a way a low type could not afford." },
      { label: "Screening", value: "The uninformed party designing choices so the informed sort themselves by which they pick." },
    ],
    sections: [
      {
        heading: "The market for lemons",
        body: [
          `George Akerlof's 1970 paper took the used-car market and asked what happens when sellers know each car's quality and buyers do not. Buyers, unable to distinguish good cars from bad ones, will only pay the average value. That price is a bargain for a bad car and an insult for a good one, so owners of good cars withdraw. The average quality of what remains falls, so buyers rationally lower what they will pay, so more of the better remaining cars withdraw — and the logic recurses. In the limit only the worst cars trade, and a market that would have served everyone collapses.`,
          `The result is startling because nothing is wrong with the market in the usual sense. There is no monopoly, no externality, no irrationality; every participant behaves sensibly given what they know. The failure is generated purely by the distribution of information, and it destroys trades that both parties would have wanted. Akerlof's paper was rejected by several journals partly on the grounds that if it were true, economics would have to be reconsidered — which was rather the point, and it eventually won a Nobel Prize.`,
        ],
      },
      {
        heading: "Hidden information versus hidden action",
        body: [
          `Two failures are routinely conflated and are cleanly distinct in timing. Adverse selection is hidden information *before* the contract: the party who knows they are a bad risk is precisely the one most eager to trade. Offer health insurance at a price reflecting average health and the sick will queue while the healthy decline, so the pool worsens and the premium must rise, which drives out the next-healthiest tier. This is the lemons spiral in another market.`,
          `Moral hazard is hidden action *after* the contract: once insured, your incentive to take care changes, because you no longer bear the full cost of the loss. Insure a car against theft and its owner locks it a little less diligently. The critical point is that neither requires bad faith. A person is not defrauding their insurer by feeling less anxious about a risk someone else now carries; the incentive simply shifted, and behaviour followed. That is why these problems cannot be solved by finding more honest counterparties — they are structural.`,
        ],
      },
      {
        heading: "Signalling and screening",
        body: [
          `Markets do not simply die of these problems; institutions evolve to fight them, and the two responses run in opposite directions. Signalling is the informed party proving quality — but a signal only works if it would be too expensive for a low-quality type to fake. Michael Spence's model of education makes the argument at its most provocative: even if a degree taught nothing whatsoever, it could still raise wages, because completing it is cheaper for an able person than an unable one, so it credibly sorts. A warranty signals the same way — costly to offer if your product is shoddy, cheap if it is not.`,
          `Screening runs the other way: the uninformed party designs a menu so the informed sort themselves by which option they take. Insurance deductibles are the classic instrument — offer a high-deductible cheap policy and a low-deductible expensive one, and low-risk customers select the former while high risks reveal themselves by choosing the latter. Both mechanisms are ingenious and neither is free: the signal's cost is real resources burned to convey information, which is why the education-as-signalling debate matters so much. If a substantial share of what education produces is sorting rather than skill, an enormous investment is being spent on communication rather than capability.`,
        ],
      },
      {
        heading: "Why this reshaped economics",
        body: [
          `Information economics did not add a footnote to price theory; it undermined a load-bearing assumption. The welfare theorems — the formal case that competitive markets produce efficient outcomes — assume, among other things, that agents know what they are buying. Where they do not, the conclusion simply does not follow, and the market failure is not an exception but the expected result. Stiglitz and Weiss showed the same logic produces credit rationing: banks may refuse to lend at any rate rather than raise it, because a higher rate adversely selects for riskier borrowers and worsens the pool it is meant to compensate for.`,
          `This reframes a great deal of institutional apparatus that looks like mere friction. Warranties, brands, professional licensing, credit ratings, regulatory disclosure, reputation systems, insurance underwriting — none is decoration on a market, each is machinery for surviving asymmetric information. It also explains why some markets barely exist despite obvious demand, and why the useful question about a strange-looking institution is usually "what information problem is this solving?" rather than "why is this so inefficient?"`,
        ],
      },
      {
        heading: "Why the good used car is hard to sell",
        body: [
          `You meet this constantly from the informed side. Selling a genuinely well-maintained car privately is frustrating precisely because you cannot credibly convey that — every seller says it, so the claim carries no information, and you are offered the price of an average car. Your options are Akerlof's: withdraw, or find a signal a bad seller could not afford, like a full documented service history or an independent inspection. Notice the same structure in hiring, dating, freelancing and buying anything used: the party who knows the truth cannot simply assert it, because assertion is free. The question that unlocks these situations is always what evidence would be expensive for a bad type to produce — that, and not sincerity, is what actually transmits information.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "reasoning",
        prompt: "Why does Akerlof's used-car market unravel?",
        choices: [
          { id: "a", label: "Buyers offer only average value, so good cars withdraw, lowering the average and recursing" },
          { id: "b", label: "Sellers collude to withhold quality information in order to sustain an inflated market price" },
          { id: "c", label: "Buyers systematically overestimate quality, so they overpay until the market corrects sharply" },
          { id: "d", label: "Transaction costs exceed the surplus available from trading any vehicle of average quality" },
        ],
        correctChoiceId: "a",
        explanation: "The spiral is the point: average pricing drives out the best cars, which lowers the average, which lowers the price, which drives out the next-best. No collusion or irrationality is needed — the information distribution alone destroys mutually beneficial trades.",
      },
      {
        dimension: "depth",
        prompt: "What distinguishes moral hazard from adverse selection?",
        choices: [
          { id: "a", label: "Moral hazard is hidden action after the contract; adverse selection is hidden information before it" },
          { id: "b", label: "Moral hazard involves deliberate fraud whereas adverse selection arises from honest mistakes" },
          { id: "c", label: "Moral hazard affects insurers while adverse selection affects lenders and their borrowers" },
          { id: "d", label: "Moral hazard concerns prices whereas adverse selection concerns the quantity traded" },
        ],
        correctChoiceId: "a",
        explanation: "The timing is the clean distinction. Adverse selection: the bad risk is keenest to sign. Moral hazard: once covered, care declines because you no longer bear the full loss. Neither requires bad faith — the incentives simply shifted.",
      },
      {
        dimension: "reasoning",
        prompt: "What makes a signal credible in Spence's model?",
        choices: [
          { id: "a", label: "It is more costly for a low-quality type to produce than for a high-quality one" },
          { id: "b", label: "It is verified by an independent third party with no stake in the transaction" },
          { id: "c", label: "It conveys information that the receiving party could not obtain by any other means" },
          { id: "d", label: "It is expensive enough that only a genuinely wealthy participant can afford it" },
        ],
        correctChoiceId: "a",
        explanation: "Differential cost is what carries the information. A degree could raise wages even teaching nothing, because completing it is cheaper for an able person — and a warranty signals because it is costly only if your product is shoddy.",
      },
      {
        dimension: "reasoning",
        prompt: "How does an insurance deductible menu screen customers?",
        choices: [
          { id: "a", label: "Low risks pick the cheap high-deductible policy while high risks reveal themselves by avoiding it" },
          { id: "b", label: "It raises the effective premium enough to deter customers who intend to claim fraudulently" },
          { id: "c", label: "It reduces the insurer's exposure so the composition of the risk pool stops mattering" },
          { id: "d", label: "It requires customers to disclose their risk factors before a policy can be priced" },
        ],
        correctChoiceId: "a",
        explanation: "Screening runs opposite to signalling: the uninformed party designs a menu so the informed sort themselves. Which option someone chooses reveals what they privately know about their own risk.",
      },
      {
        dimension: "reasoning",
        prompt: "Why did Stiglitz and Weiss argue banks may ration credit rather than raise rates?",
        choices: [
          { id: "a", label: "A higher rate adversely selects for riskier borrowers, worsening the pool it was meant to compensate for" },
          { id: "b", label: "Regulatory caps prevent lenders from charging rates that reflect the true default probability" },
          { id: "c", label: "Higher rates reduce loan demand below the level at which lending remains profitable" },
          { id: "d", label: "Borrowers interpret a high rate as a signal that the bank expects the economy to deteriorate" },
        ],
        correctChoiceId: "a",
        explanation: "Raising the price selects for exactly the borrowers you least want, because the safe ones drop out first. So the lender may refuse at any rate — the lemons logic applied to credit, and a market failure with no bad actor in it.",
      },
    ],
    sources: [
      { label: "Akerlof, 'The Market for Lemons'", note: "The founding paper on quality uncertainty and market collapse.", type: "Reference", url: "https://en.wikipedia.org/wiki/The_Market_for_Lemons" },
      { label: "Information asymmetry (overview)", note: "Reference on adverse selection, moral hazard, signalling and screening.", type: "Reference", url: "https://en.wikipedia.org/wiki/Information_asymmetry" },
    ],
  },
  {
    concept: "Discounting and Time Preference",
    level: "University",
    summary: "how to value the future, and why the discount rate decides the argument",
    estimatedMinutes: 9,
    deck: "Any decision spanning time requires converting future value into present value, and the rate you use to do it is doing far more work than it appears. Change the discount rate by two percentage points and a climate policy flips from urgent to unjustifiable — without a single fact about the climate changing.",
    keyTerms: [
      { label: "Discount rate", value: "The rate at which future value is converted to present value; small changes compound enormously." },
      { label: "Net present value", value: "Future cash flows discounted back to today and summed — the standard investment criterion." },
      { label: "Hyperbolic discounting", value: "Discounting the near future far more steeply than the far future, producing preference reversals." },
      { label: "Social discount rate", value: "The rate used for public policy across generations, part empirical and part ethical." },
    ],
    sections: [
      {
        heading: "The exponential nobody feels",
        body: [
          `Money now is worth more than money later, for reasons that are not merely psychological: it can be invested, inflation erodes it, and the future is uncertain. Discounting converts future values to present ones, and net present value — discounting every future cash flow back and summing — is the workhorse criterion of investment appraisal. The mechanics are simple. The consequences are not, because discounting is exponential and human intuition is not.`,
          `At 7% a year, a value halves roughly every decade: £100 in fifty years is worth about £3 today, and in a century about £0.11. This is not a quirk of a high rate; it is what any positive rate does given enough time. So a discounted appraisal is structurally near-blind to the distant future — not because anyone decided distant people do not matter, but because the arithmetic drives their weight toward zero. For a bridge or a drug, that is fine. For nuclear waste, ecosystem collapse or climate, it means the analysis has quietly answered the moral question before the moral argument began.`,
        ],
      },
      {
        heading: "Why the rate settles the climate argument",
        body: [
          `This became explicit in the clash between the Stern Review and its critics. Stern used a very low social discount rate, around 1.4%, and concluded that aggressive immediate climate action was overwhelmingly justified. William Nordhaus, using a rate nearer 4–5% grounded in observed market returns, concluded that a slower ramp was optimal. The two were not disagreeing about atmospheric physics or damage estimates in any decisive way. They were disagreeing about the discount rate, and that disagreement did nearly all the work.`,
          `The reason is arithmetic. Climate costs land largely in the far future while mitigation costs land now, so the whole case turns on the exchange rate between the two — and over a century, a few percentage points swings the answer by orders of magnitude. Stern's defence was explicitly ethical: he argued that the pure rate of time preference, the discounting of future people's welfare simply because they are later, should be near zero, since their being born later is not a reason to count them less. Ramsey called such discounting "a practice which is ethically indefensible and arises merely from the weakness of the imagination". Critics replied that a rate wildly out of line with observed savings behaviour implies absurd sacrifices and ignores that future generations will likely be richer.`,
        ],
      },
      {
        heading: "The two components, and which is empirical",
        body: [
          `The Ramsey framework decomposes the social discount rate into parts, and the decomposition clarifies the dispute. One part is pure time preference — impatience as such, discounting future welfare merely for being future. The other reflects growth: if future people will be richer, an extra pound matters less to them, so we discount their consumption not because they matter less but because they need it less, weighted by how sharply marginal utility declines with income.`,
          `The growth component is genuinely empirical and contestable with evidence — how fast will incomes grow, how curved is utility. The pure time preference component is not empirical at all; it is an ethical parameter about how much weight to place on people who do not yet exist. Conflating the two is the central confusion in these debates. When a market rate is imported wholesale into an intergenerational appraisal, an ethical judgement about future people's standing gets smuggled in wearing the costume of an observed number, and it is never defended because it never looks like a claim.`,
        ],
      },
      {
        heading: "Hyperbolic discounting and the inconsistent self",
        body: [
          `Real humans do not discount exponentially. Empirically we discount hyperbolically: steeply over the near term and shallowly further out. The signature is preference reversal. Offered £100 today versus £110 tomorrow, most take the £100; offered £100 in a year versus £110 in a year and a day, most take the £110. The delay is identical — one day — but the same person chooses differently depending on how far away the whole thing sits, which is formally inconsistent.`,
          `The consequence is that your future self will systematically overturn your present self's plans, and both are you. This is the structure of procrastination, undersaving and every diet abandoned at the moment of temptation: from a distance the patient choice looks obvious, and up close the impatient one wins. It also explains why commitment devices work — pension auto-enrolment, locked savings, deleting the app. They are not motivational tricks; they are your present self recognising that your future self has different preferences and constraining them in advance. Recognising the inconsistency is precisely what makes the constraint rational rather than defeatist.`,
        ],
      },
      {
        heading: "Why your future self keeps betraying you",
        body: [
          `You feel hyperbolic discounting every time the plan you made last week collapses on contact with the moment. That is not weakness of character in any simple sense — it is a documented, predictable structure in how people value time, and the same pattern that makes £100 today beat £110 tomorrow while £110 in a year beats £100 the day before. The useful move is to stop relying on your future self having your present self's preferences, because reliably it will not. Constrain it instead: automate the saving, prepay the commitment, remove the option. And when you meet any long-horizon argument — a pension projection, a climate appraisal, an infrastructure case — ask what discount rate it used, because that single number is often quietly deciding the conclusion the analysis appears to have derived.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "reasoning",
        prompt: "Why is a discounted appraisal structurally near-blind to the distant future?",
        choices: [
          { id: "a", label: "Discounting is exponential, so any positive rate drives distant weight toward zero given enough time" },
          { id: "b", label: "Analysts conventionally truncate cash flow projections at a fixed horizon of fifty years" },
          { id: "c", label: "Uncertainty about distant outcomes means they are excluded from the calculation entirely" },
          { id: "d", label: "The methodology assumes future generations will solve the problems they inherit" },
        ],
        correctChoiceId: "a",
        explanation: "At 7%, £100 in fifty years is worth about £3 today and £0.11 in a century. Nobody decided distant people do not matter; the arithmetic drives their weight to nearly nothing, which quietly answers a moral question before it is asked.",
      },
      {
        dimension: "reasoning",
        prompt: "What did Stern and Nordhaus principally disagree about?",
        choices: [
          { id: "a", label: "The discount rate, which did nearly all the work in their opposing conclusions" },
          { id: "b", label: "The physical climate sensitivity to a doubling of atmospheric carbon dioxide" },
          { id: "c", label: "The engineering cost of deploying renewable generation at industrial scale" },
          { id: "d", label: "Whether climate damages should be measured in output or in mortality" },
        ],
        correctChoiceId: "a",
        explanation: "Stern used ~1.4% and found urgent action overwhelmingly justified; Nordhaus used ~4–5% and found a slower ramp optimal. Costs land now and damages land later, so the exchange rate between them settles the argument.",
      },
      {
        dimension: "depth",
        prompt: "In the Ramsey decomposition, which component is an ethical rather than empirical parameter?",
        choices: [
          { id: "a", label: "Pure time preference — discounting future welfare simply because it is future" },
          { id: "b", label: "The growth rate of consumption per head over the appraisal horizon" },
          { id: "c", label: "The elasticity of marginal utility with respect to income" },
          { id: "d", label: "The observed real return on long-dated government securities" },
        ],
        correctChoiceId: "a",
        explanation: "Growth and the curvature of utility are contestable with evidence. Pure time preference is a judgement about the standing of people not yet born — which is why importing a market rate wholesale smuggles an ethical claim in as an observed number.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the signature of hyperbolic discounting?",
        choices: [
          { id: "a", label: "Preference reversal — the same one-day delay is judged differently near and far" },
          { id: "b", label: "A constant proportional decline in value for each additional period of delay" },
          { id: "c", label: "Refusing all delayed rewards regardless of the compensation offered" },
          { id: "d", label: "Valuing future gains more highly than equivalent immediate ones" },
        ],
        correctChoiceId: "a",
        explanation: "Most take £100 today over £110 tomorrow, yet take £110 in a year and a day over £100 in a year. The delay is identical; only the distance changed — which is formally inconsistent and means your future self will overturn your plans.",
      },
      {
        dimension: "reasoning",
        prompt: "Why are commitment devices a rational response rather than an admission of weakness?",
        choices: [
          { id: "a", label: "Your present self knows your future self will hold different preferences, so it constrains them in advance" },
          { id: "b", label: "They increase motivation by raising the psychological cost of abandoning a stated goal" },
          { id: "c", label: "They eliminate the uncertainty that causes people to discount future rewards steeply" },
          { id: "d", label: "They convert hyperbolic discounting into exponential discounting over the relevant horizon" },
        ],
        correctChoiceId: "a",
        explanation: "Auto-enrolment, locked savings and deleting the app are not motivational tricks. They are one self binding another whose preferences genuinely differ — which is exactly what makes the constraint rational rather than defeatist.",
      },
    ],
    sources: [
      { label: "Discounting and the Stern Review debate (overview)", note: "Reference on social discount rates and the Stern–Nordhaus dispute.", type: "Reference", url: "https://en.wikipedia.org/wiki/Stern_Review" },
      { label: "Hyperbolic discounting (overview)", note: "Reference on preference reversal and time inconsistency.", type: "Reference", url: "https://en.wikipedia.org/wiki/Hyperbolic_discounting" },
    ],
  },
  {
    concept: "Prices as Information",
    level: "University",
    summary: "why no planner can replace the price system, and what prices actually transmit",
    estimatedMinutes: 9,
    deck: "The usual defence of markets is that they are efficient. Hayek's is stranger and stronger: that the knowledge required to run an economy does not exist in any one place and never could, because it is dispersed, tacit and fleeting. Prices are not just numbers — they are the mechanism that lets millions of people use knowledge none of them possess.",
    keyTerms: [
      { label: "The knowledge problem", value: "Hayek's claim that economic knowledge is dispersed and never available to a single mind or agency." },
      { label: "Tacit knowledge", value: "Knowledge of particular circumstances of time and place that cannot be fully articulated or transmitted." },
      { label: "Prices as signals", value: "A price compressing countless unknown conditions into one number that guides action." },
      { label: "Socialist calculation debate", value: "The argument over whether a planner could compute an efficient allocation without market prices." },
    ],
    sections: [
      {
        heading: "The problem nobody was solving",
        body: [
          `Friedrich Hayek's 1945 essay "The Use of Knowledge in Society" begins by rejecting the way economics had framed its own central question. The problem of economic order, he argued, is not how to allocate given resources against given preferences — that is a maths problem, and if the data really were given, planning would be straightforward. The actual problem is that the data are never given to anyone. The knowledge required is dispersed across millions of individuals as incomplete, contradictory fragments, and it is never available as a whole to any single mind or agency.`,
          `This reframing is the whole argument. Much of the relevant knowledge is not scientific or statistical but knowledge of "the particular circumstances of time and place": that this machine runs rough on cold mornings, that this supplier is unreliable in December, that this customer will pay late. It is often tacit — the holder could not fully articulate it if asked — and it decays quickly. No survey collects it, no ministry can requisition it, and by the time it were centralised it would be stale. This is not a claim about computing power, which is why faster computers do not dissolve it.`,
        ],
      },
      {
        heading: "What a price actually does",
        body: [
          `Hayek's illustration is a commodity — say tin — becoming scarcer. Somewhere a mine floods or a new use emerges; almost nobody in the tin-using world knows which, and Hayek's point is that they do not need to. The price rises, and every user of tin economises, substitutes, delays, or hunts alternatives, and every potential supplier looks harder for it. The system adapts as if a single mind had surveyed the whole problem, and it does so without anyone holding more than a sliver of the relevant information.`,
          `The price is doing something remarkable: compressing the entire state of a global system — every source, use, expectation and constraint — into one number that tells you exactly what you need to know to act, and nothing you do not. Hayek called it "a system of telecommunications" economising on the knowledge each participant must have. Crucially the transmission is two-way. Your response to the price feeds back into it, so prices are not merely broadcasting information but continuously aggregating it from everyone acting on it — a distributed computation with no computer and no programmer.`,
        ],
      },
      {
        heading: "The calculation debate and what it settled",
        body: [
          `This was a weapon in the socialist calculation debate. Ludwig von Mises argued in 1920 that a socialist economy without markets in the means of production could not calculate rationally: with no prices for capital goods there is no way to compare the countless technically feasible ways of producing something, so planners would be groping. Oskar Lange replied that a planning board could simulate the market — set prices, watch inventories, adjust up or down, iterating toward equilibrium — and many economists judged Lange the winner on the formal argument.`,
          `Hayek's response cut underneath. The objection was never that the planner cannot solve the equations; it is that the planner cannot obtain the inputs, because the knowledge does not exist in transmittable form. It is tacit, local, and generated in the act of competing. Competition, he argued, is a "discovery procedure": we do not know the cheapest way to make something until someone tries and either profits or fails. There is no data to feed the model, because the data are produced by the process the model was meant to replace. The historical record of central planning — persistent shortages and gluts alongside impressive aggregate industrialisation — is at least consistent with the diagnosis.`,
        ],
      },
      {
        heading: "Where the argument stops",
        body: [
          `The knowledge problem is a powerful argument and it is not an argument for laissez-faire, which Hayek is often flattened into. It establishes that prices carry information no planner can assemble; it does not establish that prices carry all relevant information or that market outcomes are just. Where a price omits a real cost — pollution, congestion, systemic risk — it transmits a confident signal that is wrong, and every actor coordinates efficiently on the wrong thing. Externalities are precisely a failure of the information channel Hayek celebrated, and nothing in his argument prevents them.`,
          `Distribution is a separate limit. The price system aggregates willingness to pay, which is weighted by ability to pay, so it will efficiently allocate medicine away from a poor sick person toward a rich well one. That is the mechanism working, not failing, which is why "the market decided" answers a question about coordination and not one about justice. The honest reading is that Hayek identified something true and deep about the limits of centralised knowledge — a constraint any economic system must respect — while leaving open what to do where prices misinform or where their distributional verdict is unacceptable.`,
        ],
      },
      {
        heading: "Why nobody knows how to make a pencil",
        body: [
          `Leonard Read's essay made the point unforgettably: no single person on earth knows how to make a pencil. The wood needs loggers, saws, steel, mines, the graphite needs its own chain, the lacquer, the brass, the rubber — thousands of people across dozens of countries, most of whom have never heard of pencils and none of whom could produce one alone. No one designed this and no one runs it. It is coordinated by prices, each participant knowing only their own tiny corner and the numbers facing them. Once you see that, the everyday fact that a shop simply has bread in it stops looking mundane and starts looking like the output of an enormous distributed computation that nobody is performing — which is also why confidently redesigning a chunk of it, from the outside, is harder than it looks.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "reasoning",
        prompt: "How did Hayek reframe the central economic problem?",
        choices: [
          { id: "a", label: "Not allocating given data efficiently, but coping with knowledge that is never given to anyone" },
          { id: "b", label: "Not maximising output, but distributing the resulting surplus according to contribution" },
          { id: "c", label: "Not setting prices correctly, but ensuring competition remains sufficiently vigorous" },
          { id: "d", label: "Not measuring preferences, but predicting how they will change over time" },
        ],
        correctChoiceId: "a",
        explanation: "If the data really were given, allocation would be a maths problem and planning straightforward. Hayek's point is that the knowledge exists only as dispersed, incomplete, often tacit fragments held by millions — never available as a whole.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does a rising tin price coordinate users who know nothing about the cause?",
        choices: [
          { id: "a", label: "It compresses the whole system's state into one number telling each user what to do and nothing more" },
          { id: "b", label: "It signals to users that they should investigate the underlying supply disruption themselves" },
          { id: "c", label: "It reflects the planner's assessment of how scarce the commodity has become" },
          { id: "d", label: "It rises only after the cause has been publicly reported and widely understood" },
        ],
        correctChoiceId: "a",
        explanation: "Whether a mine flooded or a new use emerged is irrelevant to the tin user: the price alone tells them to economise. Hayek called it a system of telecommunications economising on the knowledge each participant must hold.",
      },
      {
        dimension: "reasoning",
        prompt: "Why did Hayek regard Lange's simulated-market reply as missing the point?",
        choices: [
          { id: "a", label: "The planner cannot obtain the inputs, because the knowledge is tacit and generated by competing" },
          { id: "b", label: "The iterative adjustment process would converge too slowly to be practically useful" },
          { id: "c", label: "Planners would lack the political independence to set prices without interference" },
          { id: "d", label: "The equations describing general equilibrium have no unique solution to compute" },
        ],
        correctChoiceId: "a",
        explanation: "The objection was never that the planner cannot solve the equations. Competition is a discovery procedure — we do not know the cheapest method until someone tries — so the data are produced by the process the model would replace.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does an externality represent a failure of the mechanism Hayek described?",
        choices: [
          { id: "a", label: "The price omits a real cost, so it transmits a confident signal that is wrong and everyone coordinates on it" },
          { id: "b", label: "The price becomes too volatile for participants to extract any information from it" },
          { id: "c", label: "The affected parties are excluded from the market and so cannot observe the price" },
          { id: "d", label: "Externalities arise only where prices are set administratively rather than by exchange" },
        ],
        correctChoiceId: "a",
        explanation: "Where pollution or systemic risk is not in the price, the signal is precise and misleading, and the coordination Hayek admired proceeds efficiently toward the wrong outcome. Nothing in the knowledge argument prevents this.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is 'the market decided' not an answer to a question about justice?",
        choices: [
          { id: "a", label: "Prices aggregate willingness to pay, which is weighted by ability to pay" },
          { id: "b", label: "Market outcomes are arbitrary and bear no systematic relation to preferences" },
          { id: "c", label: "Prices are set by producers rather than emerging from voluntary exchange" },
          { id: "d", label: "Distributional questions are empirically undecidable and so cannot be posed" },
        ],
        correctChoiceId: "a",
        explanation: "The system will efficiently allocate medicine away from a poor sick person toward a rich well one — that is the mechanism working, not failing. It answers a coordination question, and the distributional verdict is a separate matter.",
      },
    ],
    sources: [
      { label: "Hayek, 'The Use of Knowledge in Society'", note: "The 1945 essay on dispersed knowledge and prices as signals.", type: "Reference", url: "https://en.wikipedia.org/wiki/The_Use_of_Knowledge_in_Society" },
      { label: "Socialist calculation debate (overview)", note: "Reference on Mises, Lange, Hayek and economic calculation.", type: "Reference", url: "https://en.wikipedia.org/wiki/Socialist_calculation_debate" },
    ],
  },
  {
    concept: "Marginal Analysis",
    level: "A-level",
    summary: "deciding by comparing one more unit of benefit and cost",
    estimatedMinutes: 8,
    deck: "Good decisions are rarely all-or-nothing. The economist's secret is to think 'at the margin' — weighing the benefit and cost of just one more unit. This single shift, from totals to increments, is one of the most powerful ideas in all of economics.",
    keyTerms: [
      { label: "Marginal", value: "Relating to one additional unit — the next hour, item, or pound." },
      { label: "Marginal benefit", value: "The extra benefit gained from one more unit of something." },
      { label: "Marginal cost", value: "The extra cost incurred from one more unit of something." },
      { label: "Optimal point", value: "Where marginal benefit equals marginal cost — do more only while benefit exceeds cost." },
    ],
    sections: [
      {
        heading: "Think in increments",
        body: [
          `Marginal analysis is the habit of making decisions by looking at the margin — the effect of one more (or one less) unit — rather than at totals or averages. The key questions are always incremental: what is the additional benefit of doing a little more, and what is the additional cost? Should I study one more hour, produce one more item, hire one more worker, eat one more slice? Economists insist that rational decisions are made at the margin, one increment at a time.`,
          `This is genuinely counterintuitive, because people naturally think in all-or-nothing terms — should I study or not? — when the real choices are usually about degree: how much? Reframing decisions as "is one more unit worth it?" transforms fuzzy either/or questions into sharp, answerable comparisons. Almost every good decision, economists argue, comes down to comparing marginal benefit against marginal cost.`,
        ],
      },
      {
        heading: "The optimal rule",
        body: [
          `Marginal analysis yields a clean decision rule: keep doing more of something as long as the marginal benefit exceeds the marginal cost, and stop when they are equal. If one more hour of study adds more to your grade than it costs you in lost sleep or leisure, do it; keep going until the next hour's benefit no longer outweighs its cost. That balance point — where marginal benefit equals marginal cost — is the optimal amount, the point that maximises your net gain.`,
          `This rule explains why the best amount of almost anything is rarely zero or infinity, but somewhere in between. You should not study every waking hour (the marginal cost eventually becomes crushing) nor study nothing (early hours have huge marginal benefit). The optimum is where the two curves meet. The same logic governs how much a firm should produce, how much pollution to abate, how much to spend on safety — everywhere, "how much?" is answered by pushing to where marginal benefit and marginal cost balance.`,
        ],
      },
      {
        heading: "Diminishing returns",
        body: [
          `A pattern that makes marginal thinking bite is diminishing marginal benefit (or utility): each additional unit usually brings less extra benefit than the one before. The first slice of pizza when you are hungry is glorious; the second is good; the fifth is a struggle; the eighth might make you ill. The benefit of each extra slice diminishes. The same is true of most things — the first hour of a holiday, the first thousand pounds of income, the first hour of study — early units deliver more than later ones.`,
          `This is why the marginal benefit curve typically slopes down, and it is central to the optimal rule. Because extra benefit shrinks while extra cost often grows, there comes a point where one more unit is no longer worth it, even though earlier units were very much worth it. Diminishing returns is why moderation is so often optimal: not because extremes are morally wrong, but because the marginal value of more keeps falling until it drops below the marginal cost.`,
        ],
      },
      {
        heading: "Marginal, not average or sunk",
        body: [
          `Marginal analysis sharpens decisions by focusing attention on the right numbers and away from misleading ones. It insists you compare marginal quantities, not averages: a factory deciding whether to take one more order should look at the cost of producing that specific extra unit, not the average cost across all units, which may be quite different. Confusing average with marginal leads to systematically bad decisions.`,
          `It also reinforces the irrelevance of sunk costs. Since marginal analysis only ever asks about the next unit — the additional future benefit and cost — money and effort already spent simply do not enter the calculation. The only question is whether doing a bit more, from here, is worth it. This forward-looking, incremental focus is what makes marginal thinking so clarifying: it strips a decision down to the one comparison that actually matters and ignores the totals, averages and past costs that cloud judgement.`,
        ],
      },
      {
        heading: "One more slice, one more hour",
        body: [
          `You make marginal decisions all day, usually without the sharp question. Should you stay at the party another hour, add one more item to the basket, do one more rep, hit snooze once more? The economist reframes each not as all-or-nothing but as: is this next unit's benefit worth its cost? Diminishing returns explains why the answer changes — the first hour of study or the first slice of cake is worth far more than the fifth. Next time you are deciding 'how much' of anything, try the marginal test: does one more still add more than it costs? Stop when it does not, and you are optimising like an economist.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What does it mean to think 'at the margin'?",
        choices: [
          { id: "a", label: "To consider totals and averages only" },
          { id: "b", label: "To weigh the benefit and cost of one more (or one less) unit" },
          { id: "c", label: "To ignore all costs" },
          { id: "d", label: "To make only all-or-nothing choices" },
        ],
        correctChoiceId: "b",
        explanation: "Marginal analysis evaluates the effect of one additional unit — the next hour, item or pound — turning fuzzy either/or questions into sharp comparisons of marginal benefit against marginal cost.",
      },
      {
        dimension: "depth",
        prompt: "What is the marginal decision rule for the optimal amount of something?",
        choices: [
          { id: "a", label: "Do more until marginal benefit equals marginal cost, then stop" },
          { id: "b", label: "Always do as much as physically possible" },
          { id: "c", label: "Never do more than one unit" },
          { id: "d", label: "Do more only until total cost is zero" },
        ],
        correctChoiceId: "a",
        explanation: "Keep doing more while marginal benefit exceeds marginal cost and stop when they are equal; that balance point maximises net gain and is why the optimum is usually neither zero nor infinity.",
      },
      {
        dimension: "reasoning",
        prompt: "How does 'diminishing marginal benefit' explain why moderation is often optimal?",
        choices: [
          { id: "a", label: "Because each extra unit brings less benefit than the last, until it no longer outweighs its cost" },
          { id: "b", label: "Because extremes are always morally wrong" },
          { id: "c", label: "Because benefit stays constant forever" },
          { id: "d", label: "Because costs always fall" },
        ],
        correctChoiceId: "a",
        explanation: "The fifth slice of pizza is worth far less than the first; as marginal benefit shrinks while marginal cost often grows, more eventually stops being worth it — so the optimum tends to sit in the middle.",
      },
      {
        dimension: "reasoning",
        prompt: "Why should a factory taking one more order look at marginal cost rather than average cost?",
        choices: [
          { id: "a", label: "Because the relevant number is the cost of that specific extra unit, which can differ from the average" },
          { id: "b", label: "Because average cost is always higher" },
          { id: "c", label: "Because marginal cost is always zero" },
          { id: "d", label: "Because averages are always correct" },
        ],
        correctChoiceId: "a",
        explanation: "The decision is about one more unit, so it hinges on the extra cost of producing that unit; confusing average cost (spread over all units) with marginal cost leads to systematically bad decisions.",
      },
      {
        dimension: "depth",
        prompt: "Why do sunk costs not enter marginal analysis?",
        choices: [
          { id: "a", label: "Because marginal analysis only asks about the additional future benefit and cost of the next unit" },
          { id: "b", label: "Because sunk costs are always large" },
          { id: "c", label: "Because past costs determine future benefit" },
          { id: "d", label: "Because marginal analysis ignores costs entirely" },
        ],
        correctChoiceId: "a",
        explanation: "Marginal thinking is forward-looking, asking only whether doing a bit more from here is worth it; money and effort already spent are irrelevant to the next-unit comparison.",
      },
    ],
    sources: [
      { label: "OpenStax Principles of Economics 3e", note: "Open textbook on marginal analysis and decision-making.", type: "Textbook", url: "https://openstax.org/details/books/principles-economics-3e" },
      { label: "CORE Econ: The Economy", note: "Open economics textbook on marginal reasoning.", type: "Textbook", url: "https://www.core-econ.org/the-economy/" },
    ],
  },
  {
    concept: "Externalities",
    level: "A-level",
    summary: "costs or benefits falling on people outside a transaction",
    estimatedMinutes: 8,
    deck: "When you buy something, the price reflects what it costs you and the seller — but not always what it costs everyone else. Externalities are the spillover effects on bystanders, and they are the reason markets, left alone, can produce too much pollution and too little of the things that quietly benefit us all.",
    keyTerms: [
      { label: "Externality", value: "A cost or benefit from an activity that falls on a third party not involved in it." },
      { label: "Negative externality", value: "A spillover cost, like pollution, imposed on others." },
      { label: "Positive externality", value: "A spillover benefit, like vaccination or education, enjoyed by others." },
      { label: "Market failure", value: "When a free market delivers an inefficient outcome, as externalities cause." },
    ],
    sections: [
      {
        heading: "The bystander's bill",
        body: [
          `An externality is a cost or benefit from an economic activity that falls on someone who is not part of the transaction — a third party, a bystander. Normally, a market trade involves just a buyer and a seller, and the price reflects their private costs and benefits. But many activities also spill over onto others who neither chose nor were compensated for the effect. When those spillovers are ignored by the people making the decision, markets misfire.`,
          `Externalities come in two kinds. A negative externality imposes a cost on others: a factory that pollutes a river harms the people downstream, who bear a cost the factory does not pay. A positive externality confers a benefit on others: someone who gets vaccinated protects not just themselves but everyone they might otherwise have infected. In both cases, the decision-maker weighs only their own private costs and benefits, while the wider effects on others go uncounted.`,
        ],
      },
      {
        heading: "Why markets get the quantity wrong",
        body: [
          `Externalities cause "market failure" — a situation where the free market, left to itself, produces an inefficient amount. The logic is precise. With a negative externality, the producer pays only their private cost, not the extra cost imposed on society, so from society's viewpoint the good is under-priced and over-produced. Because polluters do not pay for the harm they cause, markets tend to generate too much pollution.`,
          `With a positive externality, the reverse happens. The person deciding whether to vaccinate, or to get educated, captures only their private benefit, not the extra benefit others receive, so they do less of it than would be best for society. Goods with positive externalities — vaccination, education, research — tend to be under-produced by free markets, because individuals ignore the benefits that spill onto everyone else. In both directions, the gap between private and social costs or benefits leads the market to the wrong quantity.`,
        ],
      },
      {
        heading: "Correcting the gap",
        body: [
          `If the problem is a gap between private and social costs, the classic solution is to close it — to make decision-makers "internalise" the externality so they face the full social cost or benefit of their actions. For negative externalities, the economist Arthur Pigou proposed a tax equal to the external cost: a "Pigouvian tax" on pollution makes the polluter pay for the harm, raising their private cost to match the social cost and reducing output to the efficient level. Carbon taxes and tobacco duties work on this principle.`,
          `For positive externalities, the mirror-image tool is a subsidy: paying people to do more of the beneficial thing, so their private incentive matches the social benefit — hence subsidised vaccination, free education and research grants. Other approaches include regulation (simply limiting pollution), tradable permits (creating a market in the right to pollute), and, the economist Ronald Coase argued, clearly assigning property rights so affected parties can bargain. Each is a way of forcing the ignored spillover back into the decision.`,
        ],
      },
      {
        heading: "Seeing externalities everywhere",
        body: [
          `Once you grasp externalities, you see them throughout public policy and daily life. Pollution, congestion, noise and antibiotic overuse are negative externalities; education, vaccination, a well-kept garden, and even basic research are positive ones. Much of the debate about environmental policy, public health and regulation is really an argument about how to handle externalities — whether and how to make people bear the full social consequences of their choices.`,
          `The concept also comes with cautions. Measuring the exact size of an externality is genuinely hard, so the "right" tax or subsidy is often uncertain. Interventions can have their own costs and unintended effects, and there are disputes about when a spillover is large enough to justify action. But the core insight is robust and important: when significant costs or benefits fall on people outside a transaction, the unaided market will systematically get the quantity wrong, and recognising this is essential to thinking clearly about the role of government.`,
        ],
      },
      {
        heading: "Your neighbour's music and your flu jab",
        body: [
          `Externalities surround you. A neighbour blasting music late imposes a negative externality — a cost you bear but did not agree to; a beautifully kept front garden gives the whole street a positive externality it never paid for. When you get a flu jab you protect others, not just yourself; when someone drives into a city at rush hour they add to congestion everyone else suffers. Once you can name these spillovers, you understand why some things get overdone (pollution, noise) and others underdone (vaccination, maintenance) when everyone acts on private incentives alone — and why 'make people bear the full cost of their choices' is such a recurring theme in public debate.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is an externality?",
        choices: [
          { id: "a", label: "A cost or benefit that falls on a third party not involved in the transaction" },
          { id: "b", label: "The price paid by the buyer" },
          { id: "c", label: "A tax on imports" },
          { id: "d", label: "The profit a seller makes" },
        ],
        correctChoiceId: "a",
        explanation: "An externality is a spillover cost or benefit on a bystander who is not part of the trade — like pollution harming those downstream, or a vaccine protecting others.",
      },
      {
        dimension: "reasoning",
        prompt: "Why do free markets tend to over-produce goods with negative externalities like pollution?",
        choices: [
          { id: "a", label: "Because producers pay only their private cost, not the extra cost imposed on society, so the good is under-priced" },
          { id: "b", label: "Because pollution is expensive for producers" },
          { id: "c", label: "Because consumers dislike cheap goods" },
          { id: "d", label: "Because governments always subsidise pollution" },
        ],
        correctChoiceId: "a",
        explanation: "Since the polluter does not pay for the harm to third parties, the private cost is below the social cost, so the good is under-priced and over-produced relative to what is efficient for society.",
      },
      {
        dimension: "reasoning",
        prompt: "Why do free markets tend to under-produce goods with positive externalities like vaccination?",
        choices: [
          { id: "a", label: "Because individuals capture only their private benefit and ignore the benefit spilling onto others" },
          { id: "b", label: "Because vaccines have no benefit" },
          { id: "c", label: "Because they are always banned" },
          { id: "d", label: "Because everyone already does the optimal amount" },
        ],
        correctChoiceId: "a",
        explanation: "The decision-maker weighs only their own benefit, not the extra benefit others receive, so they do less than is socially optimal — which is why vaccination, education and research tend to be under-produced.",
      },
      {
        dimension: "depth",
        prompt: "What is a 'Pigouvian tax'?",
        choices: [
          { id: "a", label: "A subsidy for beneficial activities" },
          { id: "b", label: "A tax equal to an external cost, making the producer face the full social cost" },
          { id: "c", label: "A tax on all goods equally" },
          { id: "d", label: "A ban on pollution" },
        ],
        correctChoiceId: "b",
        explanation: "Named after Arthur Pigou, it sets a tax equal to the external cost so the polluter internalises the harm — raising private cost to match social cost and cutting output to the efficient level, as with carbon taxes.",
      },
      {
        dimension: "depth",
        prompt: "What is a fair caution about acting on externalities?",
        choices: [
          { id: "a", label: "Measuring the exact size of an externality is hard, so the 'right' tax or subsidy is often uncertain" },
          { id: "b", label: "Externalities never actually exist" },
          { id: "c", label: "Interventions always work perfectly" },
          { id: "d", label: "Spillovers are always easy to price" },
        ],
        correctChoiceId: "a",
        explanation: "The core insight is robust, but the precise magnitude of a spillover is genuinely hard to measure, interventions carry their own costs, and there is dispute over when a spillover justifies action.",
      },
    ],
    sources: [
      { label: "OpenStax Principles of Economics 3e", note: "Open textbook on externalities and market failure.", type: "Textbook", url: "https://openstax.org/details/books/principles-economics-3e" },
      { label: "CORE Econ: The Economy", note: "Open economics textbook on externalities and policy.", type: "Textbook", url: "https://www.core-econ.org/the-economy/" },
    ],
  },
  {
    concept: "Elasticity",
    level: "A-level",
    summary: "how strongly quantity responds to price or income changes",
    estimatedMinutes: 8,
    deck: "Raise the price and people buy less — but how much less? That question is worth billions. Elasticity measures how sensitively quantity responds to a change in price or income, and it decides whether a tax raises revenue, whether a discount pays off, and which businesses survive a recession.",
    keyTerms: [
      { label: "Elasticity", value: "A measure of how responsive quantity is to a change in price or income." },
      { label: "Elastic", value: "Quantity responds a lot to a price change (responsive demand)." },
      { label: "Inelastic", value: "Quantity responds little to a price change (unresponsive demand)." },
      { label: "Determinants", value: "What makes demand elastic: substitutes, whether it is a necessity, and time." },
    ],
    sections: [
      {
        heading: "How much, not just which way",
        body: [
          `The law of demand tells you which way quantity moves when price changes: up in price, down in quantity. But that is only half the story. The vital practical question is how much quantity changes, and that is what elasticity measures. Price elasticity of demand captures the responsiveness of the quantity demanded to a change in price — the percentage change in quantity divided by the percentage change in price.`,
          `Two cases matter. Demand is "elastic" when quantity responds a lot to price: a small price rise causes a big drop in sales. Demand is "inelastic" when quantity responds little: even a large price rise barely dents sales. This difference, invisible if you only know demand slopes downward, turns out to drive an enormous number of real business and policy decisions. Knowing the direction of a price effect is easy; knowing its size is where the money and the good decisions are.`,
        ],
      },
      {
        heading: "What makes demand elastic",
        body: [
          `Whether demand is elastic or inelastic depends on identifiable factors. The most important is the availability of substitutes: if close alternatives exist, a price rise sends buyers to the substitute, making demand elastic. One brand of coffee is elastic because you can switch brands; coffee in general is more inelastic because there are fewer substitutes for caffeine. Necessities tend to be inelastic (you buy them almost regardless of price), while luxuries tend to be elastic (you can easily do without them).`,
          `Time also matters: demand is usually more elastic in the long run than the short run, because people need time to adjust. When petrol prices spike, drivers cannot change much immediately (inelastic short-run demand), but over years they buy more efficient cars, move closer to work, or switch to public transport (more elastic long-run demand). The share of income a good takes up matters too: people are more price-sensitive about big-ticket items than about cheap ones. Reading these determinants lets you predict, without any data, roughly how elastic a given demand is likely to be.`,
        ],
      },
      {
        heading: "Elasticity and revenue",
        body: [
          `Elasticity has a direct, sometimes surprising, effect on revenue (price times quantity), which is why businesses obsess over it. If demand is inelastic, raising the price increases total revenue: you lose few sales but earn more on each, so the price rise more than offsets the small drop in quantity. If demand is elastic, raising the price decreases total revenue: you lose so many sales that the higher price cannot compensate. The optimal pricing move depends entirely on which regime you are in.`,
          `This explains real pricing behaviour. A firm with a product that has few substitutes and loyal customers (inelastic demand) can raise prices and make more money. A firm in a competitive market with many substitutes (elastic demand) dares not, and may even cut prices to win volume. It also explains why sales and discounts make sense for some goods and not others: cutting the price only raises revenue if demand is elastic enough that the extra sales outweigh the lower margin.`,
        ],
      },
      {
        heading: "Elasticity in policy",
        body: [
          `Governments rely on elasticity too. Consider taxes designed to raise revenue versus taxes designed to change behaviour. Taxes on cigarettes, alcohol and petrol are lucrative precisely because demand for them is relatively inelastic — people keep buying despite the tax, so the government collects a lot of revenue without sales collapsing. The very inelasticity that makes these goods reliable tax earners, however, means the tax is not very effective at reducing consumption in the short run.`,
          `There is a genuine tension here: a tax cannot be both a big revenue-raiser and a big behaviour-changer at the same time, because those require opposite elasticities. If demand is inelastic, the tax raises revenue but changes little behaviour; if demand is elastic, it changes behaviour a lot but raises little revenue. Elasticity also determines who really bears a tax (its "incidence"): the more inelastic side of the market ends up paying most of it. Across pricing, taxation and trade, elasticity is the hidden variable that decides how much, not just which way.`,
        ],
      },
      {
        heading: "Petrol versus the cinema",
        body: [
          `You feel elasticity in your own spending. When petrol prices jump, you grumble but mostly keep driving — your demand is inelastic in the short run, because you cannot instantly change your commute. But if your favourite cinema doubled its ticket price, you would probably just stream a film instead — elastic demand, because a close substitute exists. Notice which purchases you would abandon at a small price rise (elastic) and which you would grimly keep paying for (inelastic): the difference is exactly what lets shops know where discounts pay off, and lets governments know which goods make dependable taxes. Asking 'how much would this price change actually alter my behaviour?' is elasticity thinking in daily life.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What does price elasticity of demand measure?",
        choices: [
          { id: "a", label: "Whether price rises or falls" },
          { id: "b", label: "How much the quantity demanded responds to a change in price" },
          { id: "c", label: "The total revenue of a firm" },
          { id: "d", label: "The cost of production" },
        ],
        correctChoiceId: "b",
        explanation: "Elasticity captures the size of the response — the percentage change in quantity relative to the percentage change in price — going beyond the law of demand's mere direction.",
      },
      {
        dimension: "depth",
        prompt: "What is the difference between elastic and inelastic demand?",
        choices: [
          { id: "a", label: "Elastic demand responds a lot to price; inelastic demand responds little" },
          { id: "b", label: "Elastic demand never changes; inelastic demand always changes" },
          { id: "c", label: "They are the same" },
          { id: "d", label: "Elastic means the price is high" },
        ],
        correctChoiceId: "a",
        explanation: "With elastic demand a small price change causes a big change in quantity; with inelastic demand even a large price change barely affects quantity.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is the demand for one brand of coffee more elastic than demand for coffee in general?",
        choices: [
          { id: "a", label: "Because close substitutes (other brands) exist for one brand, but there are fewer substitutes for coffee overall" },
          { id: "b", label: "Because coffee has no substitutes at all" },
          { id: "c", label: "Because brands are cheaper" },
          { id: "d", label: "Because coffee is a luxury" },
        ],
        correctChoiceId: "a",
        explanation: "Availability of substitutes is the key determinant: a price rise on one brand sends buyers to rival brands (elastic), whereas coffee in general has fewer alternatives, making it more inelastic.",
      },
      {
        dimension: "reasoning",
        prompt: "If demand is inelastic, what happens to total revenue when the price rises?",
        choices: [
          { id: "a", label: "Revenue rises, because few sales are lost while each earns more" },
          { id: "b", label: "Revenue falls sharply" },
          { id: "c", label: "Revenue stays exactly the same" },
          { id: "d", label: "Revenue becomes zero" },
        ],
        correctChoiceId: "a",
        explanation: "With inelastic demand, a price rise loses few sales, so the higher price more than offsets the small drop in quantity and total revenue increases — which is why firms with few substitutes can raise prices profitably.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can a tax not be both a big revenue-raiser and a big behaviour-changer at once?",
        choices: [
          { id: "a", label: "Because raising revenue needs inelastic demand, while changing behaviour needs elastic demand — opposite conditions" },
          { id: "b", label: "Because taxes never affect behaviour" },
          { id: "c", label: "Because all demand is equally elastic" },
          { id: "d", label: "Because governments cannot set taxes" },
        ],
        correctChoiceId: "a",
        explanation: "Inelastic demand means people keep buying despite the tax (lots of revenue, little behaviour change); elastic demand means they stop buying (big behaviour change, little revenue) — the two goals require opposite elasticities.",
      },
    ],
    sources: [
      { label: "OpenStax Principles of Economics 3e", note: "Open textbook on elasticity and its applications.", type: "Textbook", url: "https://openstax.org/details/books/principles-economics-3e" },
      { label: "CORE Econ: The Economy", note: "Open economics textbook on responsiveness and pricing.", type: "Textbook", url: "https://www.core-econ.org/the-economy/" },
    ],
  },
  {
    concept: "Comparative Advantage",
    level: "University",
    summary: "gains from specialisation even when one side is better at everything",
    estimatedMinutes: 9,
    deck: "Here is economics' most counterintuitive and beautiful result: two people or countries can both gain from trade even when one is better at producing everything. The secret is that what matters is not who is better, but who gives up less — and it explains why the world specialises and trades.",
    keyTerms: [
      { label: "Comparative advantage", value: "The ability to produce something at a lower opportunity cost than another party." },
      { label: "Absolute advantage", value: "Simply being better at producing something in raw terms — not what drives trade." },
      { label: "Opportunity cost", value: "What you give up to produce one thing rather than another — the basis of comparative advantage." },
      { label: "Gains from trade", value: "The extra total output that specialisation and exchange make possible." },
    ],
    sections: [
      {
        heading: "The puzzle of one-sided skill",
        body: [
          `Comparative advantage, first set out clearly by the economist David Ricardo in 1817, answers a puzzle that stumps most people. Suppose one country (or person) is better than another at producing absolutely everything. Surely, intuition says, there is no point in them trading — the superior producer should just make everything themselves. Ricardo showed this intuition is wrong: both parties can still gain from specialising and trading, even in this lopsided case. It is one of the most surprising and important results in all of economics.`,
          `The key is to distinguish two ideas. Absolute advantage means being better at producing something in raw terms — using fewer resources. Comparative advantage means being able to produce something at a lower opportunity cost — giving up less of other things to make it. Ricardo's insight was that trade is driven not by absolute advantage but by comparative advantage. What matters is not who is better, but who sacrifices less.`,
        ],
      },
      {
        heading: "It is about what you give up",
        body: [
          `The engine of comparative advantage is opportunity cost. Even if you are better at everything, you cannot do everything at once; time spent on one task is time not spent on another. So producing one good always costs you the other goods you could have made instead. Your comparative advantage lies in whatever you give up the least to produce — the good with your lowest opportunity cost.`,
          `Crucially, each party has a comparative advantage in something, even the one that is worse at everything, because opportunity costs are relative. If the more productive party specialises in what it does relatively best and the less productive party specialises in what it does relatively "least badly", and they trade, total output rises and both can end up with more than if each tried to produce everything alone. The mathematics is airtight: as long as their opportunity costs differ, there are gains from specialisation and exchange to be shared.`,
        ],
      },
      {
        heading: "The classic illustration",
        body: [
          `The standard example makes it vivid. Imagine a brilliant lawyer who is also the fastest typist in town — she has an absolute advantage at both law and typing. Should she type her own documents? No. Every hour she spends typing is an hour not spent practising law, where her time is far more valuable. Her opportunity cost of typing is enormous. So she is better off hiring a secretary who types more slowly, and spending all her time on law, even though she is personally the better typist.`,
          `The secretary, though worse at both tasks in absolute terms, has a comparative advantage in typing, because his opportunity cost of typing (the law he cannot do) is low. Both gain: the lawyer earns more by focusing on law, the secretary earns a living typing, and more total work gets done. This is comparative advantage in miniature, and the same logic scales up to explain why countries specialise — why one exports manufactured goods and imports food, even if it could produce both more efficiently than its trading partner.`,
        ],
      },
      {
        heading: "Power, limits and reality",
        body: [
          `Comparative advantage is the theoretical backbone of the case for free trade and specialisation: because it lets total production rise, trade can, in principle, make everyone better off. It is why economists so often favour openness to trade, and why the world economy is built on countries specialising and exchanging rather than each trying to be self-sufficient.`,
          `But the theory comes with important caveats that honest economics acknowledges. It shows that trade increases total gains, but not that those gains are shared fairly — specialisation can create winners and losers within a country, as industries that lose their comparative advantage decline and their workers suffer, even as the nation as a whole gains. The simple model also assumes resources can move easily between industries, ignores adjustment costs, and sets aside strategic, security and developmental concerns that can justify protecting some industries. Comparative advantage is a genuine and profound insight, but "trade raises total wealth" does not automatically mean "trade is good for everyone" — which is exactly where much real-world economic and political debate lives.`,
        ],
      },
      {
        heading: "Why you delegate even things you are good at",
        body: [
          `Comparative advantage explains a decision you face constantly: whether to do something yourself or let someone else. Even if you are better than a cleaner, a bookkeeper or a handyman at their job, it can still pay to hire them — because every hour you spend on those tasks is an hour taken from what you do best and value most. Your comparative advantage lies in whatever you give up the least to do. The same logic runs through any team or household dividing up tasks: the efficient split is not 'everyone does what they are best at' but 'everyone does what they give up least by doing'. Once you think in opportunity cost, delegating things you are personally good at stops feeling like a waste and starts looking like exactly the right move.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is the difference between absolute and comparative advantage?",
        choices: [
          { id: "a", label: "Absolute advantage is being better in raw terms; comparative advantage is producing at a lower opportunity cost" },
          { id: "b", label: "They mean exactly the same thing" },
          { id: "c", label: "Absolute advantage is about opportunity cost; comparative is about raw output" },
          { id: "d", label: "Comparative advantage only applies to countries, not people" },
        ],
        correctChoiceId: "a",
        explanation: "Absolute advantage means using fewer resources to produce something; comparative advantage means giving up less of other things to produce it. Trade is driven by comparative, not absolute, advantage.",
      },
      {
        dimension: "reasoning",
        prompt: "What was Ricardo's surprising insight about a party that is better at producing everything?",
        choices: [
          { id: "a", label: "It should produce everything itself and never trade" },
          { id: "b", label: "Both parties can still gain from specialising and trading, based on comparative advantage" },
          { id: "c", label: "Trade would make both parties worse off" },
          { id: "d", label: "Only the weaker party benefits" },
        ],
        correctChoiceId: "b",
        explanation: "Even when one party has an absolute advantage in everything, differing opportunity costs mean both can gain from specialising where each is relatively best and trading — economics' famous counterintuitive result.",
      },
      {
        dimension: "reasoning",
        prompt: "Why should a brilliant lawyer who is also the fastest typist hire a slower secretary?",
        choices: [
          { id: "a", label: "Because her opportunity cost of typing (the valuable law she cannot do) is enormous" },
          { id: "b", label: "Because she is actually bad at typing" },
          { id: "c", label: "Because typing is illegal for lawyers" },
          { id: "d", label: "Because the secretary types faster than her" },
        ],
        correctChoiceId: "a",
        explanation: "Despite her absolute advantage at typing, each hour typing costs her far more valuable legal work; she specialises in law, the secretary has a comparative advantage in typing, and both gain.",
      },
      {
        dimension: "depth",
        prompt: "Why does every party have a comparative advantage in something?",
        choices: [
          { id: "a", label: "Because opportunity costs are relative, so even the party worse at everything gives up least in some activity" },
          { id: "b", label: "Because everyone is equally skilled" },
          { id: "c", label: "Because governments assign advantages" },
          { id: "d", label: "Because absolute advantage guarantees it" },
        ],
        correctChoiceId: "a",
        explanation: "Since you cannot do everything at once, producing one good always costs another; the party worse at everything still has the lowest opportunity cost in some task — its comparative advantage.",
      },
      {
        dimension: "reasoning",
        prompt: "What important caveat does honest economics attach to comparative advantage?",
        choices: [
          { id: "a", label: "That trade raises total gains but does not guarantee they are shared fairly — it can create winners and losers" },
          { id: "b", label: "That trade always makes literally everyone better off" },
          { id: "c", label: "That specialisation reduces total output" },
          { id: "d", label: "That opportunity cost is irrelevant" },
        ],
        correctChoiceId: "a",
        explanation: "The model shows trade increases total wealth, but specialisation creates winners and losers within a country as declining industries suffer — so 'trade raises total wealth' does not automatically mean 'trade is good for everyone'.",
      },
    ],
    sources: [
      { label: "David Ricardo and comparative advantage", note: "Reference on Ricardo's 1817 theory of trade and specialisation.", type: "Reference", url: "https://en.wikipedia.org/wiki/Comparative_advantage" },
      { label: "OpenStax Principles of Economics 3e", note: "Open textbook on trade, specialisation and gains from trade.", type: "Textbook", url: "https://openstax.org/details/books/principles-economics-3e" },
    ],
  },
  {
    concept: "Game Theory",
    level: "University",
    summary: "strategic choices when outcomes depend on others",
    estimatedMinutes: 9,
    deck: "When your best move depends on what someone else will do — who is also trying to guess what you will do — you need game theory. It explains why rational individuals can end up in outcomes that are bad for all of them, from arms races to price wars to the tragedy of a shared resource.",
    keyTerms: [
      { label: "Game theory", value: "The study of strategic decisions where each player's outcome depends on others' choices." },
      { label: "Dominant strategy", value: "A move that is best for a player regardless of what others do." },
      { label: "Nash equilibrium", value: "A stable state where no player can do better by changing strategy alone." },
      { label: "Prisoner's Dilemma", value: "A game where individually rational choices produce a collectively worse outcome." },
    ],
    sections: [
      {
        heading: "Thinking about others thinking",
        body: [
          `Game theory is the study of strategic interaction: situations where the outcome for each participant depends not just on their own choice but on the choices of others, who are reasoning in the same way. Ordinary decision-making treats the world as fixed; game theory tackles the harder case where you must anticipate how others will respond to you, knowing they are anticipating you in turn. It provides tools to analyse this recursive puzzle rigorously, and it has transformed economics, politics, biology and beyond.`,
          `The basic elements of a "game" are players, the strategies available to each, and the payoffs each receives depending on the combination of strategies chosen. The aim is to predict what rational players will do and what outcomes will result. Game theory is not about board games (though it covers them); it is about any situation of interdependent choice — pricing decisions, negotiations, arms races, evolution, traffic, even asking someone on a date.`,
        ],
      },
      {
        heading: "Dominant strategies and equilibrium",
        body: [
          `Two central concepts organise the analysis. A dominant strategy is a choice that is best for a player no matter what the others do — if you have one, you should simply play it. But many games have no dominant strategy, so game theory needs a broader idea of a stable outcome. That idea, due to John Nash, is the Nash equilibrium: a combination of strategies where no player can improve their own payoff by unilaterally changing their strategy, given what everyone else is doing.`,
          `A Nash equilibrium is "stable" because no one has an incentive to deviate on their own. Its power and its unsettling implication is that a Nash equilibrium need not be the best outcome for the players collectively. Rational individuals, each doing what is best for themselves given others' choices, can settle into an equilibrium that is worse for all of them than some alternative they cannot reach without cooperating. This gap between individual rationality and collective good is game theory's most profound and disturbing lesson.`,
        ],
      },
      {
        heading: "The Prisoner's Dilemma",
        body: [
          `The most famous game, the Prisoner's Dilemma, captures this gap perfectly. Two suspects are arrested and interrogated separately. Each can stay silent (cooperate with the other) or confess (betray the other). If both stay silent, both get light sentences. If both confess, both get heavy sentences. But if one confesses while the other stays silent, the confessor goes free and the silent one gets the worst sentence of all.`,
          `Analyse it and something troubling emerges. Whatever the other does, each individual is better off confessing — confessing is a dominant strategy. So both rational players confess, and both end up with heavy sentences, even though both staying silent would have been better for both. Individually rational choices produce a collectively terrible outcome. The Prisoner's Dilemma is not a quirk; it models a vast range of real situations where cooperation would benefit everyone but each party's private incentive is to defect.`,
        ],
      },
      {
        heading: "Dilemmas everywhere",
        body: [
          `Once you recognise the structure, Prisoner's Dilemmas appear throughout the world. Two firms would both profit from keeping prices high, but each is tempted to undercut the other, so both cut prices and profits collapse — a price war. Nations would all be safer spending less on weapons, but each fears the others arming, so all pour money into an arms race. Everyone benefits from a clean shared environment, but each individual gains from polluting a little, so the commons is degraded — the "tragedy of the commons".`,
          `Understanding the structure also points toward solutions. Many real interactions are repeated rather than one-shot, and repetition changes everything: when players meet again and again, cooperation can emerge and be sustained, because betrayal can be punished in future rounds (the successful strategy "tit-for-tat" cooperates but retaliates). Institutions, contracts, reputations, communication and enforceable agreements are, in large part, mechanisms societies build to escape Prisoner's Dilemmas — to make cooperation individually rational when it would otherwise fall apart. Game theory both diagnoses why cooperation fails and illuminates how it can be rescued.`,
        ],
      },
      {
        heading: "Why everyone ends up standing at the concert",
        body: [
          `You live inside game-theory dilemmas. At a concert, everyone would see fine if all stayed seated, but each person can see better by standing — so everyone stands and no one is better off, just more tired. Group projects, tipping, keeping a shared kitchen clean, deciding whether to be honest when others might not be — all have the structure where what is best for you individually can be worse for everyone collectively. Spotting these situations is genuinely useful: it tells you when goodwill alone will fail and you need something more — an agreement, a rule, a repeated relationship, or a way to build trust — to reach the cooperative outcome everyone actually prefers.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What does game theory study?",
        choices: [
          { id: "a", label: "Only board games and puzzles" },
          { id: "b", label: "Strategic situations where each participant's outcome depends on the choices of others" },
          { id: "c", label: "Decisions made in complete isolation" },
          { id: "d", label: "The history of gambling" },
        ],
        correctChoiceId: "b",
        explanation: "Game theory analyses interdependent choice — where your best move depends on others' choices, who are reasoning about you in turn — covering pricing, negotiation, arms races, evolution and more.",
      },
      {
        dimension: "depth",
        prompt: "What is a Nash equilibrium?",
        choices: [
          { id: "a", label: "The outcome that is always best for everyone" },
          { id: "b", label: "A combination of strategies where no player can improve by unilaterally changing their own strategy" },
          { id: "c", label: "A situation with no strategies at all" },
          { id: "d", label: "The move a player makes at random" },
        ],
        correctChoiceId: "b",
        explanation: "In a Nash equilibrium no player can do better by changing strategy alone, given what others do — which makes it stable, but crucially not necessarily the best outcome for the players collectively.",
      },
      {
        dimension: "reasoning",
        prompt: "In the Prisoner's Dilemma, why do both rational prisoners confess?",
        choices: [
          { id: "a", label: "Because confessing is a dominant strategy — better for each whatever the other does — even though both would be better off staying silent" },
          { id: "b", label: "Because staying silent is always best" },
          { id: "c", label: "Because they can communicate freely" },
          { id: "d", label: "Because the sentences are equal in all cases" },
        ],
        correctChoiceId: "a",
        explanation: "Whatever the other does, each is individually better off confessing, so both confess and both get heavy sentences — even though mutual silence would have been better for both. Individual rationality yields a collectively bad outcome.",
      },
      {
        dimension: "depth",
        prompt: "What is game theory's most profound and disturbing lesson?",
        choices: [
          { id: "a", label: "That individually rational choices can produce an outcome worse for everyone than an achievable alternative" },
          { id: "b", label: "That people are never rational" },
          { id: "c", label: "That cooperation is always automatic" },
          { id: "d", label: "That outcomes never depend on others" },
        ],
        correctChoiceId: "a",
        explanation: "A Nash equilibrium need not be collectively best; rational individuals each doing what is best for themselves can settle into an outcome worse for all — the gap between individual rationality and the common good.",
      },
      {
        dimension: "reasoning",
        prompt: "How can repetition help players escape a Prisoner's Dilemma?",
        choices: [
          { id: "a", label: "Because when players meet repeatedly, betrayal can be punished in future rounds, so cooperation can be sustained" },
          { id: "b", label: "Because repetition removes all incentives" },
          { id: "c", label: "Because it makes defection always best" },
          { id: "d", label: "Because repeated games have no equilibrium" },
        ],
        correctChoiceId: "a",
        explanation: "In repeated interaction, future retaliation (as in the 'tit-for-tat' strategy) makes cooperation individually rational; institutions, contracts and reputations are ways societies sustain cooperation that a one-shot game would destroy.",
      },
    ],
    sources: [
      { label: "Game theory (overview)", note: "Reference on strategy, Nash equilibrium and the Prisoner's Dilemma.", type: "Reference", url: "https://en.wikipedia.org/wiki/Game_theory" },
      { label: "OpenStax Principles of Economics 3e", note: "Open textbook covering strategic behaviour and oligopoly.", type: "Textbook", url: "https://openstax.org/details/books/principles-economics-3e" },
    ],
  },
  {
    concept: "Public Goods",
    level: "A-level",
    summary: "non-excludable and non-rival goods that markets underprovide",
    estimatedMinutes: 8,
    deck: "Some things, once provided, are available to everyone and not used up by being shared — clean air, national defence, a lighthouse's beam. These public goods break the logic of markets, because no one can be made to pay, so everyone tries to free-ride, and the good goes unprovided.",
    keyTerms: [
      { label: "Public good", value: "A good that is both non-excludable and non-rival in consumption." },
      { label: "Non-excludable", value: "You cannot prevent people who do not pay from using it." },
      { label: "Non-rival", value: "One person's use does not reduce the amount available to others." },
      { label: "Free-rider problem", value: "People enjoy the good without paying, so it is underprovided by markets." },
    ],
    sections: [
      {
        heading: "Two special properties",
        body: [
          `Economists define a public good by two specific properties, and it is worth being precise because "public good" in economics does not simply mean "something good for the public". A true public good is both non-excludable and non-rival. Non-excludable means you cannot stop people who have not paid from benefiting from it. Non-rival means one person's enjoyment of it does not reduce the amount available for anyone else — it is not "used up" by being consumed.`,
          `The classic examples make the definition concrete. National defence protects everyone in a country whether or not they contributed, and one person being protected does not leave less protection for others. A lighthouse's beam guides every ship that sees it, and cannot be switched off for the one that did not pay. Clean air, a flood barrier, street lighting, and basic scientific knowledge share these features. Contrast them with a private good like an apple: excludable (the seller can withhold it until you pay) and rival (if you eat it, no one else can).`,
        ],
      },
      {
        heading: "The free-rider problem",
        body: [
          `These properties create a fundamental problem for markets: the free-rider problem. If a good is non-excludable, people can enjoy it without paying, so each individual has a strong incentive to let others foot the bill and then benefit for free. But if everyone reasons this way — and rationally, each should — no one pays, and the good does not get provided at all, even though everyone would be better off if it existed. This is why markets systematically underprovide public goods.`,
          `The logic is a Prisoner's Dilemma writ large. Imagine a community that would all benefit from a flood barrier. Each household would prefer the barrier to be built but paid for by others; if contribution is voluntary, most hold back hoping to free-ride, not enough money is raised, and the barrier — which everyone wants — never gets built. Private markets, which rely on charging users, cannot easily supply goods from which non-payers cannot be excluded. The very features that make public goods valuable to all are what make them unprofitable to provide privately.`,
        ],
      },
      {
        heading: "Why government steps in",
        body: [
          `The free-rider problem is the core economic justification for government provision of certain goods. Because markets underprovide public goods, governments can step in to supply them and fund them through taxation — which, crucially, is compulsory, solving the free-rider problem by making everyone contribute rather than relying on voluntary payment. This is a major part of the economic case for the state: not ideology, but a specific market failure that collective provision can remedy.`,
          `This is why defence, policing, public health measures, basic research, street lighting and flood defences are typically funded by governments rather than left to markets. It is not that private firms could not physically build a lighthouse or an army, but that they could not profitably charge for something non-payers can freely enjoy. Taxation converts a good everyone wants but no one will voluntarily pay for into something that actually gets provided. Recognising which goods are genuinely public helps clarify where markets need supplementing and where they work fine on their own.`,
        ],
      },
      {
        heading: "Degrees and complications",
        body: [
          `Real goods often sit on a spectrum rather than fitting the pure definition perfectly. Some goods are non-rival but excludable (a subscription streaming service, or a toll road that is not congested) — sometimes called "club goods". Others are rival but non-excludable, like fish in the open ocean or a public grazing common: no one can be excluded, but the resource is used up, leading to overuse and depletion. This last case is the famous "tragedy of the commons", where a shared, exhaustible resource is destroyed because each user has an incentive to take as much as possible before others do.`,
          `These variations matter for policy, because each type calls for different solutions — excludable goods can sometimes be handled by markets or clubs, while common resources may need regulation, quotas or collective management (as the economist Elinor Ostrom showed communities can sometimes achieve without the state). And technology can shift a good's category: encryption made some once-non-excludable information excludable. The lesson is to look carefully at whether a good is genuinely non-excludable and non-rival before concluding markets will fail — but where those properties truly hold, the free-rider problem is real and collective action of some kind is usually required.`,
        ],
      },
      {
        heading: "The whip-round nobody completes",
        body: [
          `You meet the free-rider problem whenever a group would all benefit from something but no one wants to pay for it alone. The office kitchen everyone uses and no one cleans; the shared streaming password; the neighbourhood that would love a communal garden but where everyone waits for someone else to organise it; the public radio that only a fraction of listeners donate to. In each case the good is hard to withhold from non-contributors, so people free-ride and it is underprovided. Recognising this explains why some genuinely wanted things need compulsory contribution, a designated organiser, or an enforceable agreement rather than goodwill — the same reason societies fund defence and clean air through taxes rather than a voluntary whip-round.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What two properties define a public good?",
        choices: [
          { id: "a", label: "Cheap and popular" },
          { id: "b", label: "Non-excludable (you cannot stop non-payers using it) and non-rival (one person's use does not reduce others')" },
          { id: "c", label: "Provided only by the government" },
          { id: "d", label: "Excludable and rival" },
        ],
        correctChoiceId: "b",
        explanation: "A public good is both non-excludable and non-rival — like national defence or a lighthouse beam — which is a precise economic definition, not simply 'something good for the public'.",
      },
      {
        dimension: "depth",
        prompt: "What is the 'free-rider problem'?",
        choices: [
          { id: "a", label: "People enjoy a non-excludable good without paying, so it is underprovided by markets" },
          { id: "b", label: "People pay too much for goods" },
          { id: "c", label: "Firms provide too many goods" },
          { id: "d", label: "Governments overcharge for services" },
        ],
        correctChoiceId: "a",
        explanation: "If people cannot be excluded, each has an incentive to let others pay and benefit for free; when everyone reasons this way, no one pays and the good is not provided, even though all would be better off with it.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can private markets not easily supply public goods?",
        choices: [
          { id: "a", label: "Because they rely on charging users, and non-payers cannot be excluded from a public good" },
          { id: "b", label: "Because public goods are physically impossible to build" },
          { id: "c", label: "Because no one wants public goods" },
          { id: "d", label: "Because governments forbid it" },
        ],
        correctChoiceId: "a",
        explanation: "Markets charge users, but a non-excludable good can be enjoyed by non-payers, so it is unprofitable to provide privately — the very features that make it valuable to all make it hard to sell.",
      },
      {
        dimension: "reasoning",
        prompt: "How does government funding through taxation solve the free-rider problem?",
        choices: [
          { id: "a", label: "Taxation is compulsory, so it makes everyone contribute rather than relying on voluntary payment" },
          { id: "b", label: "Taxation makes the good excludable" },
          { id: "c", label: "Taxation reduces demand for the good" },
          { id: "d", label: "Taxation has no effect on provision" },
        ],
        correctChoiceId: "a",
        explanation: "Because contribution is compulsory, taxation forces everyone to pay, converting a good everyone wants but no one will voluntarily fund into one that actually gets provided — the core economic case for state provision.",
      },
      {
        dimension: "depth",
        prompt: "What is the 'tragedy of the commons'?",
        choices: [
          { id: "a", label: "A good that is non-rival but excludable" },
          { id: "b", label: "A rival but non-excludable resource that is overused and depleted because each user takes as much as possible" },
          { id: "c", label: "A good provided only by markets" },
          { id: "d", label: "A public good that is never used" },
        ],
        correctChoiceId: "b",
        explanation: "When a resource is rival but non-excludable — like open-ocean fish or a shared common — no one can be excluded yet it is used up, so each user's incentive to take more leads to overuse and depletion.",
      },
    ],
    sources: [
      { label: "OpenStax Principles of Economics 3e", note: "Open textbook on public goods and the free-rider problem.", type: "Textbook", url: "https://openstax.org/details/books/principles-economics-3e" },
      { label: "Public good (overview)", note: "Reference on non-excludability, non-rivalry and the commons.", type: "Reference", url: "https://en.wikipedia.org/wiki/Public_good_(economics)" },
    ],
  },
  {
    concept: "Rational Expectations and the Lucas Critique",
    level: "University",
    summary: "why an econometric relationship breaks the moment you try to exploit it",
    estimatedMinutes: 9,
    deck: "Economics spent decades estimating relationships from historical data and using them to design policy. Lucas pointed out the flaw with devastating economy: those relationships were produced by people responding to the old policy, so changing the policy changes the relationship. You cannot exploit a regularity that exists only because you were not exploiting it.",
    keyTerms: [
      { label: "Rational expectations", value: "Agents form forecasts using the model generating outcomes, so errors are unbiased rather than systematic." },
      { label: "The Lucas critique", value: "Estimated relationships shift under policy change because they are not structural but reduced-form." },
      { label: "Deep parameters", value: "Preferences and technology, which may stay stable when policy changes, unlike observed correlations." },
      { label: "Time inconsistency", value: "The optimal policy announced today is not the one you will want to follow tomorrow." },
    ],
    sections: [
      {
        heading: "The correlation policymakers tried to spend",
        body: [
          `Through the 1960s the Phillips curve looked like a gift to policy. Historical data across many countries showed a stable inverse relationship between unemployment and inflation, which appeared to offer a menu: accept a little more inflation and buy permanently lower unemployment. Governments proceeded to buy. And through the 1970s the relationship fell apart, delivering stagflation — high inflation and high unemployment together — which the curve said should not exist.`,
          `Robert Lucas explained why this was predictable rather than bad luck. The historical curve was produced in a world where inflation was low and largely unanticipated, so when prices rose unexpectedly, firms mistook it for rising demand for their own product and hired. The correlation was real, and it was an artefact of expectations. Once policymakers exploited it systematically, workers and firms learned to expect the inflation, wage demands adjusted in advance, and the mechanism generating the correlation was gone. The curve did not break despite being exploited; it broke because it was.`,
        ],
      },
      {
        heading: "The critique stated generally",
        body: [
          `Lucas's 1976 paper generalised this into a methodological demolition. Econometric relationships estimated from historical data are not structural features of the economy; they are equilibrium outcomes of people optimising against the policy regime that prevailed while the data were generated. Change the regime and you change the behaviour that produced the coefficients, so the model you estimated no longer describes the world you have created by acting on it. Using such a model to evaluate a policy change is therefore invalid in principle — not merely imprecise.`,
          `The force of this is that it condemns a whole practice rather than particular models. Large-scale macroeconometric models had been built precisely to simulate policy counterfactuals, and Lucas's point was that they could not do the one job they existed for. The response was to try to build models on "deep parameters" — preferences, technology, constraints — which might plausibly remain stable when policy changes, and to derive behaviour from optimisation given those. That is the microfoundations programme, and whatever its own problems, its motivation was Lucas's argument.`,
        ],
      },
      {
        heading: "What rational expectations does and does not claim",
        body: [
          `Rational expectations is routinely caricatured as the claim that people are perfectly informed calculating machines. It says something weaker and stranger: that agents' forecast errors are not systematically biased, because if a mistake were predictable, someone would learn it and stop making it. People can be wrong constantly; they just cannot be wrong in the same direction forever in a way that is obvious from the data. The assumption is less about individual genius than about what can survive as a persistent pattern.`,
          `The implication for policy is sharp. If expectations are rational, only *unanticipated* policy has real effects, because anticipated policy is already priced in. A central bank that reliably inflates to boost output will simply be expected to inflate, and wages will adjust ahead of it, leaving output unchanged and inflation higher — the surprise was the whole mechanism, and surprises cannot be a strategy. This is why credibility became the central concept in monetary policy: what a central bank is believed to do next matters more than what it does today, since the belief moves prices first.`,
        ],
      },
      {
        heading: "Time inconsistency and why independence follows",
        body: [
          `Kydland and Prescott drew out the sting. A government's optimal announced policy is often not the policy it will want to follow when the time comes. Announce low inflation, let everyone set wages accordingly, and you then face a tempting opportunity to inflate a little and gain output — which is exactly what the public, being no fools, anticipates. So they never believe the announcement, wages are set for high inflation, and the economy lands at high inflation with no output gain: the worst cell, reached by everyone behaving rationally.`,
          `The remedy is not better intentions but constraint. If discretion is the problem, remove it: bind policy to a rule, or delegate it to an institution with a mandate and no electoral incentive to spring surprises. This is the intellectual foundation of central bank independence and inflation targeting, and it is a striking case of abstract theory reshaping real institutions — much of the developed world's monetary architecture is a response to a time-inconsistency argument. It also generalises far beyond monetary policy: any actor who benefits from being believed faces the same problem, and the same solution of making their own promises binding.`,
        ],
      },
      {
        heading: "Why the metric breaks when you target it",
        body: [
          `You have met this outside economics under a different name. Goodhart's Law — when a measure becomes a target it ceases to be a good measure — is the Lucas critique in miniature. A correlation observed while nobody was gaming it (test scores tracking learning, hospital waiting times tracking capacity, a KPI tracking real performance) exists because of behaviour that the act of targeting immediately changes. The number then rises while the thing it measured does not, and everyone is baffled that the relationship broke. It broke because you leaned on it. The transferable habit is to ask, of any regularity you intend to exploit: was this produced by people who were not being managed on it, and will it survive their noticing? Usually the answer is no, and knowing that in advance is worth more than the metric was.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "reasoning",
        prompt: "Why did the Phillips curve break down in the 1970s?",
        choices: [
          { id: "a", label: "Exploiting it taught agents to expect the inflation, destroying the surprise that generated it" },
          { id: "b", label: "Oil price shocks introduced a supply disturbance the original data had never contained" },
          { id: "c", label: "The historical correlation had been a statistical artefact with no real mechanism behind it" },
          { id: "d", label: "Trade union power rose, severing the link between unemployment and wage settlements" },
        ],
        correctChoiceId: "a",
        explanation: "The correlation was real but rested on unanticipated inflation, which firms misread as demand for their own product. Systematic exploitation taught everyone to expect it, wages adjusted in advance, and the mechanism vanished — it broke because it was used.",
      },
      {
        dimension: "depth",
        prompt: "What does the Lucas critique assert about estimated econometric relationships?",
        choices: [
          { id: "a", label: "They are equilibrium outcomes of the prevailing regime, so policy change invalidates them" },
          { id: "b", label: "They are estimated with too little data to support reliable policy counterfactuals" },
          { id: "c", label: "They omit expectations, which could be added as an additional explanatory variable" },
          { id: "d", label: "They are accurate in aggregate but break down when applied to individual agents" },
        ],
        correctChoiceId: "a",
        explanation: "The coefficients were produced by people optimising against the old regime. Change the regime and you change the behaviour that produced them, so the model no longer describes the world your action created — invalid in principle, not merely imprecise.",
      },
      {
        dimension: "reasoning",
        prompt: "What does rational expectations actually claim about agents?",
        choices: [
          { id: "a", label: "Their forecast errors are not systematically biased, since predictable mistakes get learned away" },
          { id: "b", label: "They possess complete information and compute optimal forecasts without error" },
          { id: "c", label: "They always act in their own narrow material self-interest when forming beliefs" },
          { id: "d", label: "They form expectations by extrapolating the most recent observed trend forward" },
        ],
        correctChoiceId: "a",
        explanation: "The claim is weaker and stranger than the caricature. People can be wrong constantly; they cannot be wrong in the same obvious direction forever, because someone would learn it. It is about what survives as a persistent pattern.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does rational expectations imply only unanticipated policy has real effects?",
        choices: [
          { id: "a", label: "Anticipated policy is already priced in, so wages adjust ahead and output is unchanged" },
          { id: "b", label: "Announced policies are rarely implemented in the form originally described" },
          { id: "c", label: "Agents deliberately counteract any policy whose intent they can identify" },
          { id: "d", label: "Policy transmission lags exceed the horizon over which expectations are formed" },
        ],
        correctChoiceId: "a",
        explanation: "A bank that reliably inflates is expected to inflate; wages adjust before it acts, leaving output flat and inflation higher. The surprise was the entire mechanism, and surprises cannot be a strategy — which is why credibility became central.",
      },
      {
        dimension: "reasoning",
        prompt: "What institutional conclusion follows from the time-inconsistency problem?",
        choices: [
          { id: "a", label: "Bind or delegate policy, since the issue is discretion rather than intentions" },
          { id: "b", label: "Grant policymakers wider discretion so they can respond to unforeseen shocks" },
          { id: "c", label: "Publish policy intentions more frequently to keep expectations well anchored" },
          { id: "d", label: "Set targets that are deliberately easier to hit than the optimal policy requires" },
        ],
        correctChoiceId: "a",
        explanation: "If the public anticipates the temptation to renege, the announcement is never believed and everyone lands at high inflation with no output gain. The remedy is removing discretion — the foundation of central bank independence and inflation targeting.",
      },
    ],
    sources: [
      { label: "Lucas critique (overview)", note: "Reference on why estimated relationships shift under policy change.", type: "Reference", url: "https://en.wikipedia.org/wiki/Lucas_critique" },
      { label: "Kydland and Prescott, time inconsistency (overview)", note: "Reference on rules versus discretion and central bank credibility.", type: "Reference", url: "https://en.wikipedia.org/wiki/Dynamic_inconsistency" },
    ],
  },
];

export const economicsLessons = buildAuthoredLessons("economics", economics);
