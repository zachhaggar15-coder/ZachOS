import { buildAuthoredLessons, type AuthoredLesson } from "./types";

// Ten hand-written Economics lessons: researched, concept-specific prose with
// real models and examples, each closing on an everyday-life example, plus
// genuine recall quizzes.
const economics: AuthoredLesson[] = [
  {
    concept: "Scarcity",
    level: "GCSE",
    summary: "limited resources forcing choice and prioritisation",
    estimatedMinutes: 7,
    deck: "Economics begins with a single stubborn fact: we have limited resources but effectively unlimited wants. That gap forces choice, and choice is where all of economics starts. Scarcity is not the same as poverty — even a billionaire runs out of one thing: time.",
    keyTerms: [
      { label: "Scarcity", value: "The condition that resources are limited while wants are effectively unlimited." },
      { label: "The economic problem", value: "How to allocate scarce resources among competing uses." },
      { label: "Choice", value: "The unavoidable act scarcity forces: selecting some uses and giving up others." },
      { label: "Resources", value: "The inputs — time, money, labour, land, materials — that are always limited." },
    ],
    sections: [
      {
        heading: "The fundamental problem",
        body: [
          `Economics is often defined as the study of how people allocate scarce resources, and scarcity is the fact that gets it all going. Scarcity means that the resources available — time, money, labour, land, raw materials — are limited, while human wants are effectively unlimited. There is never enough of everything to satisfy every desire, and so choices must be made. This mismatch between limited means and unlimited ends is called "the economic problem", and every economic question ultimately traces back to it.`,
          `Because you cannot have everything, you must decide what to have and what to forgo. A person, a business, a government — each faces the same reality: finite resources and more possible uses for them than can all be satisfied. Scarcity is why economics exists at all. In a fantasy world of infinite resources, nothing would have a price, nothing would need rationing, and there would be no economics to study.`,
        ],
      },
      {
        heading: "Scarcity is not poverty",
        body: [
          `A crucial and often-missed point: scarcity does not mean poverty. Poverty is not having enough for a decent life; scarcity is the universal condition that there is never enough of everything relative to all our wants, no matter how rich we are. A billionaire faces scarcity just as a pauper does — perhaps not of money, but of time, attention, and the impossibility of being in two places at once. Scarcity is about limits and choice, not about being poor.`,
          `This is why "scarcity means choice under constraint" is a better slogan than "scarcity means shortage". Even with abundant money, you cannot spend the same hour twice, pursue every career, or read every book. The constraint may shift from money to time to energy, but it never disappears. Recognising this reframes economics as the universal logic of choosing under limits, relevant to everyone, not just a study of markets or of the poor.`,
        ],
      },
      {
        heading: "Everything has a cost",
        body: [
          `The deepest consequence of scarcity is that every choice has a cost, because choosing one use of a resource means giving up others. If you spend an hour on one activity, that hour is gone for anything else; if a government spends a budget on one programme, that money cannot fund another. This idea — that the true cost of anything is what you give up to get it — is the concept of opportunity cost, and it flows directly from scarcity.`,
          `This turns economics into the disciplined study of trade-offs. Because resources are scarce, there are no free choices, only choices with costs, and good decision-making means weighing what you gain against what you must give up. Politicians who promise everything at once, or plans that ignore what must be sacrificed, are denying scarcity — and scarcity always wins in the end. The mature economic habit is to ask, of any choice: what is being given up here?`,
        ],
      },
      {
        heading: "Rationing and allocation",
        body: [
          `Since resources are scarce, every society needs some way to decide who gets what — a mechanism for allocation. Markets do this largely through prices: when something is scarce, its price rises, which encourages people to economise and producers to supply more. But prices are not the only method; societies also allocate scarce resources by rationing, queuing, lottery, need, tradition or government decision. Every one of these is a response to the same underlying scarcity.`,
          `Understanding this makes debates about the economy clearer. Arguments about markets versus government, or about how to distribute healthcare, housing or education, are at bottom arguments about how to allocate scarce resources fairly and efficiently. There is no way to escape the need to choose and to ration; there are only different mechanisms for doing it, each with different consequences for efficiency and fairness. Scarcity guarantees the question; the debate is only ever about the answer.`,
        ],
      },
      {
        heading: "Scarcity in your own week",
        body: [
          `You confront scarcity most sharply not with money but with time. You cannot train, work, study, see friends, rest and pursue a hobby all to the maximum; the twenty-four hours are fixed, and choosing to spend them one way means giving up another. That is the economic problem in miniature, and it applies no matter how wealthy you are. Every time you decide how to spend an evening, a budget or a weekend, you are allocating scarce resources among competing wants and paying an opportunity cost. Noticing that there is no free choice — only choices with something given up — is the first and most useful lesson economics has to offer.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What does 'scarcity' mean in economics?",
        choices: [
          { id: "a", label: "That a society is poor" },
          { id: "b", label: "That resources are limited while wants are effectively unlimited, forcing choice" },
          { id: "c", label: "That a specific good has run out completely" },
          { id: "d", label: "That prices are always rising" },
        ],
        correctChoiceId: "b",
        explanation: "Scarcity is the mismatch between limited resources and unlimited wants — 'the economic problem' — which forces choices. It is a universal condition, not the same as poverty or a temporary shortage.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does even a billionaire face scarcity?",
        choices: [
          { id: "a", label: "Because scarcity is about limits and choice — you still cannot spend the same hour twice or be in two places at once" },
          { id: "b", label: "Because billionaires are secretly poor" },
          { id: "c", label: "Because money always runs out immediately" },
          { id: "d", label: "Billionaires do not face scarcity" },
        ],
        correctChoiceId: "a",
        explanation: "Scarcity is not poverty; it is the universal fact of never having enough of everything relative to all wants. Even with abundant money, time, attention and presence remain limited, forcing choice.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does scarcity mean every choice has a cost?",
        choices: [
          { id: "a", label: "Because choosing one use of a resource means giving up its other possible uses" },
          { id: "b", label: "Because everything must be bought with money" },
          { id: "c", label: "Because costs are set by the government" },
          { id: "d", label: "Because prices always fall" },
        ],
        correctChoiceId: "a",
        explanation: "With limited resources, using them one way forecloses others — the true cost of anything is what you give up to get it (opportunity cost), so there are no free choices, only choices with costs.",
      },
      {
        dimension: "depth",
        prompt: "Why does scarcity mean every society needs a way to allocate resources?",
        choices: [
          { id: "a", label: "Because someone must decide who gets what when there is not enough for every want" },
          { id: "b", label: "Because allocation is only needed in poor countries" },
          { id: "c", label: "Because resources are unlimited" },
          { id: "d", label: "Because prices never change" },
        ],
        correctChoiceId: "a",
        explanation: "Scarcity forces every society to decide who gets what — via prices, rationing, queuing, need or government decision. Debates about markets versus government are at bottom about which allocation mechanism to use.",
      },
      {
        dimension: "depth",
        prompt: "Why is 'choice under constraint' a better description of scarcity than 'shortage'?",
        choices: [
          { id: "a", label: "Because scarcity is the permanent condition of choosing under limits, not a temporary running-out of one good" },
          { id: "b", label: "Because shortages never happen" },
          { id: "c", label: "Because constraints only apply to money" },
          { id: "d", label: "Because scarcity affects only businesses" },
        ],
        correctChoiceId: "a",
        explanation: "A shortage is a temporary lack of one good; scarcity is the universal, permanent fact that limited resources force us to choose, whether the binding constraint is money, time or energy.",
      },
    ],
    sources: [
      { label: "OpenStax Principles of Economics 3e", note: "Open textbook chapters on scarcity and the economic problem.", type: "Textbook", url: "https://openstax.org/details/books/principles-economics-3e" },
      { label: "CORE Econ: The Economy", note: "Open economics textbook on scarcity, choice and allocation.", type: "Textbook", url: "https://www.core-econ.org/the-economy/" },
    ],
  },
  {
    concept: "Opportunity Cost",
    level: "GCSE",
    summary: "the best alternative sacrificed by a decision",
    estimatedMinutes: 7,
    deck: "The real cost of anything is not the price tag — it is what you give up to get it. Opportunity cost is economics' sharpest tool for honest decision-making, and once you see it, you cannot unsee the hidden sacrifices behind every choice.",
    keyTerms: [
      { label: "Opportunity cost", value: "The value of the next best alternative you give up when you make a choice." },
      { label: "Next best alternative", value: "The single most valuable option forgone — not all forgone options combined." },
      { label: "Implicit cost", value: "A cost that involves no money changing hands, such as forgone time or earnings." },
      { label: "Sunk cost", value: "A past cost that cannot be recovered and should not affect current decisions." },
    ],
    sections: [
      {
        heading: "The cost you cannot see",
        body: [
          `Opportunity cost is one of economics' most powerful ideas: the true cost of any choice is the value of the next best alternative you give up to make it. Because resources are scarce, choosing one option always means forgoing others, and the real cost of your choice is not merely what you pay in money but what you sacrifice in forgone alternatives. This shifts cost from something on a price tag to something about the roads not taken.`,
          `The phrase "there's no such thing as a free lunch" captures it. Even a lunch someone else pays for costs you the time you spend eating it and whatever you could have done instead. Nothing is truly free, because everything consumes scarce resources — money, time, attention — that had other valuable uses. Opportunity cost is the discipline of counting those hidden sacrifices that ordinary "how much did it cost?" thinking ignores.`,
        ],
      },
      {
        heading: "The next best, not all the rest",
        body: [
          `A precise point often muddled: opportunity cost is the value of the single next best alternative forgone, not the sum of all alternatives you gave up. If you have an hour and could spend it working (worth £20 to you), reading (worth £15) or napping (worth £10), the opportunity cost of choosing to work is not £25 — it is £15, the value of the best thing you gave up (reading). You only ever "spend" the resource once, so you only give up one best alternative.`,
          `This matters for clear thinking. Opportunity cost forces you to identify what you are actually trading against — the most valuable thing you could otherwise do — rather than vaguely gesturing at everything. The right comparison for any decision is: is this choice worth more to me than my single best alternative use of the same resource? If yes, choose it; if no, the alternative wins. That focused comparison is the heart of rational choice.`,
        ],
      },
      {
        heading: "Money is only part of it",
        body: [
          `Opportunity cost includes both explicit costs (money actually paid) and implicit costs (the value of resources used that involve no payment, especially your time). This is why the full cost of, say, going to university is far more than tuition and living expenses. It also includes the salary you could have earned during those years by working instead — a large implicit cost that never appears on any invoice but is very real.`,
          `Ignoring implicit costs leads to bad decisions that look fine on paper. A business owner who pays themselves no salary might think their shop is profitable, while overlooking that they could earn more working elsewhere — the shop's true economic cost includes that forgone income. Counting only the money that changes hands systematically understates the real cost of choices. Thinking in opportunity cost means always adding in the value of the time, effort and forgone earnings that money-accounting misses.`,
        ],
      },
      {
        heading: "Ignore sunk costs",
        body: [
          `Opportunity cost has a crucial partner idea: the sunk cost, a cost already incurred that cannot be recovered. The rule of rational choice is that sunk costs should be ignored, because they are gone whatever you now do. What matters for any decision is only the future costs and benefits — the opportunity costs going forward — not money or time already spent and unrecoverable.`,
          `Humans violate this constantly, a bias called the "sunk cost fallacy": finishing a bad film because you paid for the ticket, staying in a failing project because of all the effort already poured in, ordering more food because the buffet was expensive. In each case, the past spending is gone and irrelevant; the only sensible question is whether continuing is worth more than your best alternative from here. Recognising sunk costs, and refusing to let them trap you, is one of the most practically valuable habits economics teaches.`,
        ],
      },
      {
        heading: "The evening you can only spend once",
        body: [
          `You pay opportunity costs all day without pricing them. Saying yes to an evening out is saying no to the rest, the gym, an early night; the real cost of that pint with a friend is the single best thing you would otherwise have done. The sunk cost fallacy traps you too: finishing a boxset you have stopped enjoying because you have watched so much already, or sticking with a course, job or relationship mainly because of the time already invested. The economist's questions cut through both: what is my best alternative use of this time or money, and is this worth more than that — and am I clinging to something only because of what is already spent and gone?`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is opportunity cost?",
        choices: [
          { id: "a", label: "The money price printed on a product" },
          { id: "b", label: "The value of the next best alternative you give up to make a choice" },
          { id: "c", label: "The total of everything you could have done" },
          { id: "d", label: "A cost that has already been paid" },
        ],
        correctChoiceId: "b",
        explanation: "Opportunity cost is what you sacrifice — the value of the next best alternative forgone — which makes the true cost of a choice about the roads not taken, not just the price tag.",
      },
      {
        dimension: "reasoning",
        prompt: "If an hour could be spent working (£20), reading (£15) or napping (£10), what is the opportunity cost of choosing to work?",
        choices: [
          { id: "a", label: "£25 — the reading and napping combined" },
          { id: "b", label: "£15 — the value of the single next best alternative (reading)" },
          { id: "c", label: "£45 — everything added together" },
          { id: "d", label: "£20 — the value of working" },
        ],
        correctChoiceId: "b",
        explanation: "Opportunity cost is the value of the single best alternative given up, not the sum of all of them. Since you spend the hour only once, the cost of working is the £15 reading you forgo.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does the true cost of going to university exceed tuition and living expenses?",
        choices: [
          { id: "a", label: "Because it includes the implicit cost of the salary forgone by not working during those years" },
          { id: "b", label: "Because tuition is always refunded" },
          { id: "c", label: "Because there are no implicit costs" },
          { id: "d", label: "Because living expenses are free" },
        ],
        correctChoiceId: "a",
        explanation: "Opportunity cost includes implicit costs like forgone earnings; the income you could have earned by working instead is a large, real cost that never appears on any invoice.",
      },
      {
        dimension: "depth",
        prompt: "What is a 'sunk cost', and how should it affect a decision?",
        choices: [
          { id: "a", label: "A future cost that should dominate the decision" },
          { id: "b", label: "A past, unrecoverable cost that should be ignored when deciding what to do now" },
          { id: "c", label: "The price of the next best alternative" },
          { id: "d", label: "A cost paid by someone else" },
        ],
        correctChoiceId: "b",
        explanation: "A sunk cost is already incurred and cannot be recovered, so it is irrelevant to current choices; only future costs and benefits matter. Letting sunk costs drive decisions is the sunk cost fallacy.",
      },
      {
        dimension: "reasoning",
        prompt: "Which is an example of the sunk cost fallacy?",
        choices: [
          { id: "a", label: "Finishing a film you are not enjoying because you already paid for the ticket" },
          { id: "b", label: "Leaving a bad film because your time is better spent elsewhere" },
          { id: "c", label: "Comparing a choice to your best alternative" },
          { id: "d", label: "Ignoring money already spent" },
        ],
        correctChoiceId: "a",
        explanation: "Continuing a bad film because of the already-paid, unrecoverable ticket is the sunk cost fallacy; the sensible choice ignores the spent money and asks only whether continuing beats your best alternative now.",
      },
    ],
    sources: [
      { label: "OpenStax Principles of Economics 3e", note: "Open textbook on opportunity cost and rational choice.", type: "Textbook", url: "https://openstax.org/details/books/principles-economics-3e" },
      { label: "CORE Econ: The Economy", note: "Open economics textbook on costs, trade-offs and decisions.", type: "Textbook", url: "https://www.core-econ.org/the-economy/" },
    ],
  },
  {
    concept: "Supply and Demand",
    level: "GCSE",
    summary: "price formation through buyers, sellers and quantity",
    estimatedMinutes: 7,
    deck: "The most famous model in economics explains how prices emerge from the tug-of-war between what buyers want and what sellers offer. Understand supply and demand and you can predict, at least roughly, which way prices and quantities will move when the world changes.",
    keyTerms: [
      { label: "Demand", value: "How much buyers will purchase at each price — usually more when prices are lower." },
      { label: "Supply", value: "How much sellers will offer at each price — usually more when prices are higher." },
      { label: "Equilibrium", value: "The price where the quantity demanded equals the quantity supplied." },
      { label: "Shift vs movement", value: "A shift is the whole curve moving; a movement is along the curve as price changes." },
    ],
    sections: [
      {
        heading: "Two forces meeting",
        body: [
          `Supply and demand is the foundational model of how prices form in a market. It describes two opposing forces. Demand captures buyers' behaviour: generally, the lower the price, the more people want to buy — the "law of demand". Supply captures sellers' behaviour: generally, the higher the price, the more producers are willing to offer — the "law of supply". Price is the variable that connects and balances these two forces.`,
          `Picture two curves on a graph of price against quantity. The demand curve slopes downward (lower price, more wanted); the supply curve slopes upward (higher price, more offered). Where they cross is the crucial point. This simple picture, deceptively powerful, underlies a huge amount of economic reasoning about everything from house prices to wages to the cost of coffee.`,
        ],
      },
      {
        heading: "Finding equilibrium",
        body: [
          `The point where the supply and demand curves cross is the market equilibrium: the price at which the quantity buyers want to buy exactly equals the quantity sellers want to sell. At this "market-clearing" price, there is neither a shortage nor a surplus, and there is no pressure for the price to change. Markets, the model says, tend to gravitate toward this balancing point.`,
          `The self-correcting logic is elegant. If the price is too high, sellers offer more than buyers want, creating a surplus; unsold goods pile up, and sellers cut prices to shift them, pushing the price down toward equilibrium. If the price is too low, buyers want more than is available, creating a shortage; competition among buyers bids the price up. Either way, price movements push the market back toward the point where supply meets demand. Price acts as an automatic signal coordinating countless buyers and sellers who never meet.`,
        ],
      },
      {
        heading: "Shifts versus movements",
        body: [
          `A common confusion, worth getting right, is the difference between a movement along a curve and a shift of the whole curve. A movement along the demand curve happens when the price of the good itself changes — a higher price simply means less is demanded, tracing along the existing curve. A shift of the entire demand curve happens when something other than the good's own price changes: incomes, tastes, the price of related goods, expectations, or the number of buyers.`,
          `Keeping these separate is the key to using the model correctly. If tastes change and a product becomes fashionable, the whole demand curve shifts right (more demanded at every price), raising both the equilibrium price and quantity. If a new technology cuts production costs, the supply curve shifts right (more supplied at every price), lowering price but raising quantity. By working out which curve shifts and in which direction, you can predict how any change in the world will push prices and quantities.`,
        ],
      },
      {
        heading: "Power and limits of the model",
        body: [
          `Supply and demand explains an enormous amount. Why do concert tickets for a hugely popular act sell out and fetch high resale prices? Demand vastly exceeds the fixed supply. Why does a bumper harvest often lower farmers' prices? Supply shifts right. Why do house prices soar in cities where building is restricted? Demand rises while supply is constrained. The model gives you a reliable first-pass intuition for a great many price movements.`,
          `But it has limits worth knowing. It assumes reasonably competitive markets with many buyers and sellers; where there is monopoly power, the analysis changes. It can be complicated by expectations, by goods whose demand behaves unusually, and by government interventions like price controls (a price cap below equilibrium, for instance, tends to create a lasting shortage). Real markets are messier than the neat crossing curves. Still, supply and demand remains the indispensable starting point — the model you reach for first to reason about prices.`,
        ],
      },
      {
        heading: "Why the tickets cost so much",
        body: [
          `You watch supply and demand play out constantly. Concert or match tickets for a popular act sell out and resell for a fortune because demand far outstrips the fixed number of seats. Umbrellas get pricier in a downpour, hotel rooms cost more during a festival, and last season's fashions get slashed once demand fades. When you grumble that something is 'overpriced', the model gives you a sharper question: is the price high because demand is high, supply is low, or both — and what would have to change to move it? Reasoning through which way the curves are shifting turns vague complaints about prices into genuine understanding of them.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What does the 'law of demand' state?",
        choices: [
          { id: "a", label: "The higher the price, the more people want to buy" },
          { id: "b", label: "Generally, the lower the price, the more people want to buy" },
          { id: "c", label: "Demand never changes with price" },
          { id: "d", label: "Only sellers determine demand" },
        ],
        correctChoiceId: "b",
        explanation: "The law of demand says buyers generally want more at lower prices, giving the demand curve its downward slope — one of the two opposing forces that price balances.",
      },
      {
        dimension: "depth",
        prompt: "What is market equilibrium?",
        choices: [
          { id: "a", label: "The price where quantity demanded equals quantity supplied, with no shortage or surplus" },
          { id: "b", label: "The highest possible price" },
          { id: "c", label: "The point where supply is zero" },
          { id: "d", label: "A price set by the government" },
        ],
        correctChoiceId: "a",
        explanation: "Equilibrium is where the supply and demand curves cross — the market-clearing price at which buyers want exactly what sellers offer, so there is no pressure for price to change.",
      },
      {
        dimension: "reasoning",
        prompt: "If a price is set too high, what does the model predict and why?",
        choices: [
          { id: "a", label: "A shortage, because buyers want more than is available" },
          { id: "b", label: "A surplus, because sellers offer more than buyers want, pushing the price down" },
          { id: "c", label: "Nothing changes ever" },
          { id: "d", label: "The price rises further" },
        ],
        correctChoiceId: "b",
        explanation: "Above equilibrium, quantity supplied exceeds quantity demanded, creating a surplus; unsold goods lead sellers to cut prices, pushing the market back toward equilibrium.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the difference between a movement along the demand curve and a shift of the curve?",
        choices: [
          { id: "a", label: "A movement is caused by a change in the good's own price; a shift is caused by other factors like income or tastes" },
          { id: "b", label: "They are the same thing" },
          { id: "c", label: "A shift only happens when price changes" },
          { id: "d", label: "A movement changes the whole curve" },
        ],
        correctChoiceId: "a",
        explanation: "A change in the good's own price traces a movement along the existing curve; a change in something else — income, tastes, related prices, number of buyers — shifts the whole curve, changing quantity demanded at every price.",
      },
      {
        dimension: "reasoning",
        prompt: "Why do house prices tend to soar in cities where building is heavily restricted?",
        choices: [
          { id: "a", label: "Because demand rises while supply is constrained, pushing the equilibrium price up" },
          { id: "b", label: "Because supply rises faster than demand" },
          { id: "c", label: "Because demand falls" },
          { id: "d", label: "Because prices are unrelated to supply" },
        ],
        correctChoiceId: "a",
        explanation: "Restricted building holds supply down while demand keeps rising; with demand outstripping a constrained supply, the equilibrium price climbs — a classic supply-and-demand result.",
      },
    ],
    sources: [
      { label: "OpenStax Principles of Economics 3e", note: "Open textbook on demand, supply and equilibrium.", type: "Textbook", url: "https://openstax.org/details/books/principles-economics-3e" },
      { label: "CORE Econ: The Economy", note: "Open economics textbook on markets and price formation.", type: "Textbook", url: "https://www.core-econ.org/the-economy/" },
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
    concept: "Inflation",
    level: "GCSE",
    summary: "a sustained rise in the general price level",
    estimatedMinutes: 7,
    deck: "Inflation is money quietly losing its power. When the general level of prices rises over time, each pound buys a little less, and understanding why prices climb — and why a stable, gentle rise is actually the goal — is central to making sense of the economy and your own money.",
    keyTerms: [
      { label: "Inflation", value: "A sustained rise in the general level of prices across an economy." },
      { label: "Purchasing power", value: "How much a unit of money can actually buy — eroded by inflation." },
      { label: "Demand-pull vs cost-push", value: "Inflation driven by too much demand versus rising production costs." },
      { label: "CPI", value: "The Consumer Price Index, a common measure of inflation from a basket of goods." },
    ],
    sections: [
      {
        heading: "Money losing power",
        body: [
          `Inflation is a sustained rise in the general level of prices in an economy over time. The key words are "sustained" and "general". A one-off jump in one product's price is not inflation; inflation is an ongoing, broad-based increase across many goods and services. Its most important consequence is the erosion of purchasing power: as prices rise, each unit of money buys less than it did before. The same £10 that bought a certain basket last year buys less of it this year.`,
          `This is why inflation is usually expressed as a rate — the percentage increase in the price level over a year. An inflation rate of 3% means prices are, on average, 3% higher than a year ago, so money has lost roughly 3% of its purchasing power. Understanding inflation as the declining value of money, rather than just "things getting expensive", is the key to seeing why it matters so much for savings, wages, debts and the whole economy.`,
        ],
      },
      {
        heading: "Measuring the price level",
        body: [
          `Because inflation is about the general price level, not one product, it has to be measured across many goods at once. The standard method is a price index, most commonly the Consumer Price Index (CPI). Statisticians define a representative "basket" of goods and services that a typical household buys — food, housing, transport, clothing and so on — and track how the total cost of that basket changes over time. The percentage change in the basket's cost is the inflation rate.`,
          `This approach is practical but imperfect, and knowing its limits matters. The basket represents a typical household, so your personal inflation rate may differ if you spend very differently (someone who drives a lot feels petrol prices more). The basket must be updated as spending habits change, and it can struggle to fully account for quality improvements. Still, a price index like CPI gives a consistent, comparable measure of how the general price level — and thus the value of money — is changing, which is what policymakers and citizens need to track.`,
        ],
      },
      {
        heading: "Why prices rise",
        body: [
          `Economists distinguish two broad causes of inflation. Demand-pull inflation happens when total demand in the economy outstrips the supply of goods and services — "too much money chasing too few goods". When people collectively want to buy more than the economy can produce, prices get bid up. This can be driven by rising consumer confidence, government spending, or an expanding money supply. In the long run, many economists emphasise that sustained inflation is closely tied to growth in the money supply outpacing output.`,
          `Cost-push inflation, by contrast, happens when the costs of production rise and firms pass those costs on as higher prices. A sharp rise in the price of oil, wages or imported materials can push up prices across the economy even without extra demand — as seen when energy price spikes ripple through everything that needs transport or power. Real inflationary episodes often blend both forces, and expectations play a role too: if people expect prices to rise, they demand higher wages and set higher prices, which can make inflation self-fulfilling.`,
        ],
      },
      {
        heading: "Why a little is the goal",
        body: [
          `It is tempting to think the ideal inflation rate is zero, but most economists and central banks deliberately target a low, positive rate — commonly around 2%. A small, stable, predictable amount of inflation is considered healthy: it gives central banks room to cut interest rates below inflation to stimulate a weak economy, it makes it easier for wages and prices to adjust, and it keeps the economy a safe distance from the opposite danger, deflation (falling prices), which can be very damaging as people delay spending and debts grow heavier in real terms.`,
          `The problems come at the extremes. High and unpredictable inflation is corrosive: it erodes savings, arbitrarily redistributes wealth (hurting savers and lenders, helping some borrowers), and makes planning and investment difficult because no one knows what money will be worth. In severe cases, hyperinflation can destroy a currency and an economy entirely. This is why controlling inflation — keeping it low, stable and predictable rather than zero — is one of the central tasks of economic policy, usually pursued by central banks adjusting interest rates.`,
        ],
      },
      {
        heading: "Why your money buys less than it used to",
        body: [
          `You feel inflation whenever you notice that prices are not what they were — the chocolate bar, the pint, the train fare all creeping up, or the shrinking packet at the same price ('shrinkflation'). It also explains why cash under the mattress quietly loses value: at 3% inflation, money not earning at least that much is shrinking in real terms every year. It is why a pay rise that matches inflation leaves you no better off, and why your grandparents' prices sound absurdly low. Understanding inflation as the falling value of money, not just 'things getting dearer', helps you make sense of wages, savings and why keeping this gentle erosion low and steady is a constant job for the people who run the economy.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is inflation?",
        choices: [
          { id: "a", label: "A one-off rise in a single product's price" },
          { id: "b", label: "A sustained rise in the general level of prices across an economy" },
          { id: "c", label: "A fall in the money supply" },
          { id: "d", label: "An increase in the quality of goods" },
        ],
        correctChoiceId: "b",
        explanation: "Inflation is a sustained, broad-based rise in the general price level — not a one-off change in one product — and its key effect is that each unit of money buys less (falling purchasing power).",
      },
      {
        dimension: "depth",
        prompt: "How is inflation typically measured?",
        choices: [
          { id: "a", label: "By the price of gold alone" },
          { id: "b", label: "By tracking the changing cost of a representative basket of goods, as in the Consumer Price Index" },
          { id: "c", label: "By counting the number of banknotes printed" },
          { id: "d", label: "By the price of a single staple food" },
        ],
        correctChoiceId: "b",
        explanation: "A price index like the CPI tracks how the total cost of a representative basket of goods a typical household buys changes over time; the percentage change is the inflation rate.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the difference between demand-pull and cost-push inflation?",
        choices: [
          { id: "a", label: "Demand-pull comes from total demand outstripping supply; cost-push comes from rising production costs passed on as higher prices" },
          { id: "b", label: "They are the same thing" },
          { id: "c", label: "Demand-pull is caused only by falling wages" },
          { id: "d", label: "Cost-push means demand exceeds supply" },
        ],
        correctChoiceId: "a",
        explanation: "Demand-pull is 'too much money chasing too few goods' — demand exceeding supply; cost-push is rising costs (oil, wages, materials) pushing prices up even without extra demand. Real episodes often blend both.",
      },
      {
        dimension: "reasoning",
        prompt: "Why do central banks target a low, positive inflation rate rather than zero?",
        choices: [
          { id: "a", label: "A small, stable rate keeps a safe distance from damaging deflation and gives room to adjust wages, prices and interest rates" },
          { id: "b", label: "Because higher inflation is always better" },
          { id: "c", label: "Because zero inflation is impossible to measure" },
          { id: "d", label: "Because they want money to lose value quickly" },
        ],
        correctChoiceId: "a",
        explanation: "A low, stable, predictable rate (often around 2%) allows easier wage and price adjustment, gives room to cut interest rates below inflation, and avoids deflation, which can be very damaging.",
      },
      {
        dimension: "depth",
        prompt: "Why is high and unpredictable inflation harmful?",
        choices: [
          { id: "a", label: "It erodes savings, arbitrarily redistributes wealth, and makes planning and investment difficult" },
          { id: "b", label: "It has no real effects" },
          { id: "c", label: "It always benefits savers" },
          { id: "d", label: "It makes money worth more" },
        ],
        correctChoiceId: "a",
        explanation: "High, unpredictable inflation eats savings, shifts wealth arbitrarily between savers, lenders and borrowers, and makes it hard to plan because no one knows what money will be worth — with hyperinflation able to destroy a currency entirely.",
      },
    ],
    sources: [
      { label: "OpenStax Principles of Economics 3e", note: "Open textbook on inflation, price indices and monetary policy.", type: "Textbook", url: "https://openstax.org/details/books/principles-economics-3e" },
      { label: "CORE Econ: The Economy", note: "Open economics textbook on inflation and its causes.", type: "Textbook", url: "https://www.core-econ.org/the-economy/" },
    ],
  },
];

export const economicsLessons = buildAuthoredLessons("economics", economics);
