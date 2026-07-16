import { buildAuthoredLessons, type AuthoredLesson } from "./types";

// Ten hand-written Business lessons: researched, concept-specific prose with
// real frameworks and examples, each closing on an everyday-life example, plus
// genuine recall quizzes.
const business: AuthoredLesson[] = [
  {
    concept: "Transaction Cost Economics",
    level: "University",
    summary: "why firms exist at all, when markets are supposed to be efficient",
    estimatedMinutes: 9,
    deck: "If markets allocate resources efficiently, a firm is an anomaly: an island of central planning inside a market economy, where things happen by instruction rather than price. Coase asked why anyone would build one — and the answer turns out to explain outsourcing, vertical integration, and why your employment contract is so vague.",
    keyTerms: [
      { label: "Transaction costs", value: "The costs of using the price mechanism: searching, negotiating, contracting, monitoring, enforcing." },
      { label: "The boundary of the firm", value: "Where transacting internally becomes cheaper than transacting through the market." },
      { label: "Asset specificity", value: "Investment worth much less outside a particular relationship, creating hold-up risk." },
      { label: "Incomplete contracts", value: "Contracts that cannot specify every contingency, so residual control rights matter." },
    ],
    sections: [
      {
        heading: "Coase's embarrassing question",
        body: [
          `Ronald Coase, still an undergraduate, noticed something economics had not explained. If the price mechanism efficiently coordinates production, why is so much economic activity organised inside firms, where prices do not operate and people simply do as instructed? A firm is a planned economy in miniature. If planning is inefficient relative to markets, firms should not exist; if planning is efficient, why is the whole economy not one firm? Neither limit is observed, so something must determine the boundary.`,
          `His 1937 answer was that using the market is not free. Finding a counterparty, discovering the price, negotiating terms, writing a contract, monitoring performance, enforcing it when it fails — these consume real resources, and Coase called them transaction costs. A firm exists because there are activities for which organising by instruction is cheaper than organising by contract. The boundary falls where the two costs equalise: you internalise an activity when transacting for it would cost more than managing it, and you buy it when the reverse holds.`,
        ],
      },
      {
        heading: "Why the answer sat unused for decades",
        body: [
          `Coase's insight was correct and, for thirty years, useless — because "transaction costs" explained everything and therefore predicted nothing. Any observed boundary could be rationalised by asserting that transaction costs must have been high there. Without a theory of what makes them high in particular cases, the concept is a label rather than an explanation, and Coase himself later remarked that his paper was much cited and little used.`,
          `Oliver Williamson supplied what was missing by identifying the conditions that raise transaction costs, and the crucial one is asset specificity: investment worth much less outside a particular relationship. A general-purpose lathe has alternative uses; a die stamped for one manufacturer's part is scrap if that manufacturer walks away. Once you have made a specific investment, you are exposed — your counterparty can demand better terms knowing your alternative is worthless. This is the hold-up problem, and its anticipation is the point: rational parties foresee the vulnerability and either refuse to make the investment, which forgoes real value, or integrate to remove the counterparty.`,
        ],
      },
      {
        heading: "Incomplete contracts and residual control",
        body: [
          `Why not simply write a contract preventing hold-up? Because contracts are unavoidably incomplete. The future contains contingencies you cannot enumerate, some are observable to the parties but not verifiable to a court, and specifying everything is prohibitively costly. So every real contract has gaps, and the question becomes who decides in the gaps — which is what ownership means. Grossman, Hart and Moore's contribution was to define ownership as residual control rights: the right to decide anything the contract did not cover.`,
          `This makes the make-or-buy decision an allocation of decision rights rather than a comparison of prices. When you integrate a supplier you are not buying their capacity, you are buying the right to determine what happens in situations nobody wrote down. It also explains why employment contracts are strikingly vague compared to commercial ones: an employment contract does not specify your tasks, it establishes an authority relation within which tasks are assigned as they arise. That vagueness is the product, not a drafting failure — you are selling the residual right to direct your effort, precisely because the contingencies could not be enumerated in advance.`,
        ],
      },
      {
        heading: "What it predicts, and where it fails",
        body: [
          `The framework earns its keep with real predictions. Integration should track asset specificity, and it does — car makers historically integrated the production of specific body parts while buying generic fasteners, and the pattern holds across industries. It also predicts the direction of change: falling transaction costs should shrink firms, which is broadly the outsourcing story of recent decades, as better communication and contracting technology made market transacting cheaper relative to managing.`,
          `Its limits are real and worth naming. It says little about capability — Penrose and the resource-based view argue firms exist to accumulate and deploy knowledge that markets cannot assemble, which is a different reason with different implications, and a firm may keep an activity because it is good at it rather than because contracting is costly. It also underplays trust and relational contracting: Japanese supplier networks sustain high asset specificity without integration through long-term relationships that formal theory struggles to model. And Williamson's assumption of opportunism as the default is contested as both empirically overstated and self-fulfilling, since designing institutions on the premise that people will cheat tends to select for people who do.`,
        ],
      },
      {
        heading: "Why your job description is so vague",
        body: [
          `This explains something you have probably noticed and treated as sloppiness. Your employment contract almost certainly does not list what you actually do, and it cannot, because nobody could enumerate the situations that would arise. What you sold was not a specified set of tasks but the residual right to be directed within a scope — which is precisely why "that's not in my job description" is a formally correct and practically useless thing to say. The same logic runs the make-or-buy decisions you watch companies agonise over: the question is never really cost per unit, it is who gets to decide when something unanticipated happens, and how badly stranded you will be if the other party walks.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "reasoning",
        prompt: "What was the puzzle Coase identified?",
        choices: [
          { id: "a", label: "Firms are islands of planning inside markets, so neither pure markets nor one giant firm is observed" },
          { id: "b", label: "Markets fail to price externalities, requiring firms to internalise them" },
          { id: "c", label: "Firms grow larger than technical economies of scale would justify" },
          { id: "d", label: "Prices in firms diverge systematically from prices in open markets" },
        ],
        correctChoiceId: "a",
        explanation: "If planning is inefficient relative to markets, firms should not exist; if efficient, the whole economy should be one firm. Neither limit is observed, so something determines the boundary — and that something is the cost of using the price mechanism.",
      },
      {
        dimension: "reasoning",
        prompt: "Why was Coase's insight of little use for decades?",
        choices: [
          { id: "a", label: "Without a theory of what makes transaction costs high, it could rationalise any observed boundary" },
          { id: "b", label: "Transaction costs proved too small to explain firm boundaries empirically" },
          { id: "c", label: "The paper was not published in a journal economists read at the time" },
          { id: "d", label: "It contradicted the prevailing evidence on vertical integration" },
        ],
        correctChoiceId: "a",
        explanation: "A concept that explains everything predicts nothing. Coase himself noted his paper was much cited and little used, and Williamson's contribution was identifying the specific conditions that raise the costs.",
      },
      {
        dimension: "depth",
        prompt: "Why does asset specificity create the hold-up problem?",
        choices: [
          { id: "a", label: "Once the specific investment is sunk, the counterparty can demand better terms knowing your alternatives are worthless" },
          { id: "b", label: "Specific assets depreciate faster than general-purpose equipment does" },
          { id: "c", label: "Specific assets cannot be used as collateral for financing" },
          { id: "d", label: "Specific assets require specialised labour that is difficult to hire" },
        ],
        correctChoiceId: "a",
        explanation: "A die stamped for one manufacturer's part is scrap if they walk away. The key point is anticipation: rational parties foresee the vulnerability and either forgo the valuable investment or integrate to remove the counterparty.",
      },
      {
        dimension: "reasoning",
        prompt: "What does ownership mean in the Grossman-Hart-Moore account?",
        choices: [
          { id: "a", label: "Residual control rights — the right to decide anything the contract did not cover" },
          { id: "b", label: "The legal title to physical assets and the revenue they generate" },
          { id: "c", label: "The right to sell the asset to a third party without consent" },
          { id: "d", label: "The obligation to bear losses if the venture fails" },
        ],
        correctChoiceId: "a",
        explanation: "Contracts are unavoidably incomplete — contingencies cannot be enumerated and some are observable but not verifiable — so the question becomes who decides in the gaps. Integration buys decision rights, not capacity.",
      },
      {
        dimension: "reasoning",
        prompt: "What does the resource-based view add that transaction cost economics misses?",
        choices: [
          { id: "a", label: "Firms may keep activities because they are capable at them, not because contracting is costly" },
          { id: "b", label: "Transaction costs are always lower inside firms than in markets" },
          { id: "c", label: "Asset specificity is irrelevant to the boundary decision" },
          { id: "d", label: "Contracts can in fact be written to cover all contingencies" },
        ],
        correctChoiceId: "a",
        explanation: "Penrose and the resource-based view hold that firms exist to accumulate and deploy knowledge markets cannot assemble — a different reason with different implications from the cost of transacting.",
      },
    ],
    sources: [
      { label: "Coase, 'The Nature of the Firm'", note: "The 1937 paper asking why firms exist and answering with transaction costs.", type: "Reference", url: "https://en.wikipedia.org/wiki/The_Nature_of_the_Firm" },
      { label: "Transaction cost economics (overview)", note: "Reference on Williamson, asset specificity and incomplete contracts.", type: "Reference", url: "https://en.wikipedia.org/wiki/Transaction_cost" },
    ],
  },
  {
    concept: "Business Model",
    level: "A-level",
    summary: "how an organisation creates, delivers and captures value",
    estimatedMinutes: 8,
    deck: "A great product is not a business. A business model is the whole machine around it — how value is created, delivered to customers and, crucially, captured as revenue that exceeds costs. The same product can succeed or fail depending entirely on the model wrapped around it.",
    keyTerms: [
      { label: "Business model", value: "How an organisation creates, delivers and captures value." },
      { label: "Revenue streams", value: "The ways a business earns money from the value it provides." },
      { label: "Cost structure", value: "The major costs a business incurs to operate the model." },
      { label: "Value capture", value: "Turning delivered value into money the business keeps." },
    ],
    sections: [
      {
        heading: "Create, deliver, capture",
        body: [
          `A business model describes how an organisation makes money by creating value for customers. It has three linked parts. Value creation: what value do you make, and for whom? Value delivery: how does it reach the customer — through what channels, activities and resources? And value capture: how do you turn that value into revenue that exceeds your costs? A business that creates and delivers value but fails to capture it is a charity or a hobby, not a viable enterprise.`,
          `The last part trips up many businesses, and it is where a good product diverges from a good business. Plenty of firms create genuine value that they cannot capture — think of the countless useful free services that never found a way to make money. Understanding a business means understanding the whole loop: not just what it offers, but how the offering is delivered and how the money actually comes back in.`,
        ],
      },
      {
        heading: "Mapping the model",
        body: [
          `Alexander Osterwalder's Business Model Canvas gives a widely used one-page map of these moving parts. It lays out nine building blocks: the customer segments served, the value proposition offered, the channels used to reach customers, the customer relationships maintained, the revenue streams earned, the key resources and key activities needed, the key partnerships relied on, and the cost structure incurred. Seeing them together reveals whether the parts fit into a coherent whole.`,
          `The value of the canvas is that it forces you to check the connections. A brilliant value proposition is useless if the channels cannot reach the customer, or if the cost structure required to deliver it dwarfs the revenue it earns. A business model works only when all the pieces reinforce each other — when the way you create value, reach customers and earn money form a self-sustaining loop rather than a wish list.`,
        ],
      },
      {
        heading: "Same product, different models",
        body: [
          `A striking lesson is that the same product can be sold through very different business models, with very different results. Consider software. It can be sold once for a fixed price, licensed annually, offered free with paid premium tiers ("freemium"), funded by advertising, or rented monthly as a subscription. Each model changes the economics, the customer relationship and the incentives entirely, even though the underlying product is identical.`,
          `Classic examples abound. The "razor-and-blades" model sells the razor cheap and makes money on the ongoing blades — mirrored by printers and cheap cartridges, or consoles and games. The subscription model trades a big one-off payment for steady recurring revenue, transforming how a company forecasts and grows. A marketplace makes money by connecting buyers and sellers it does not own. Choosing the model is a strategic decision as consequential as designing the product itself.`,
        ],
      },
      {
        heading: "Where models break",
        body: [
          `Because the model is a whole system, it can fail even when the product is loved. If the cost of acquiring and serving a customer exceeds what that customer ever pays, the business loses money on every sale and grows itself into bankruptcy — a trap many venture-funded startups have fallen into by chasing growth without a viable model underneath. A beloved product with broken economics is still a failing business.`,
          `Conversely, a modest product with a brilliant model can thrive. The discipline is to interrogate the whole loop: Does value creation actually match what a specific customer wants? Can it be delivered at a cost below the price? Does the revenue model capture enough of the value created? Innovations in business model — not just product — have reshaped whole industries, from budget airlines to streaming to app stores. Often the model, not the product, is the real invention.`,
        ],
      },
      {
        heading: "Why the same coffee costs so differently",
        body: [
          `You navigate business models every day without naming them. The same cup of coffee is sold by a supermarket (cheap, buy-and-brew-at-home), a café (premium, for the experience and place), and a subscription service (recurring beans by post) — three business models around one product, each capturing value differently. When a game is 'free' but sells in-app extras, when a gym counts on you paying monthly and not showing up, when a 'free' app is really selling your attention to advertisers, you are seeing value capture at work. Asking 'how does this actually make its money?' about the things you buy reveals the model behind the product — and often explains its quirks.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What are the three linked parts of a business model?",
        choices: [
          { id: "a", label: "Marketing, sales and accounting" },
          { id: "b", label: "Creating value, delivering it, and capturing it as revenue" },
          { id: "c", label: "Hiring, training and firing" },
          { id: "d", label: "Design, manufacturing and shipping" },
        ],
        correctChoiceId: "b",
        explanation: "A business model covers how an organisation creates value, delivers it to customers, and captures it as revenue exceeding costs. A firm that creates and delivers but cannot capture value is not viable.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does the 'value capture' part trip up many businesses?",
        choices: [
          { id: "a", label: "Because many firms create genuine value they cannot turn into revenue that exceeds costs" },
          { id: "b", label: "Because capturing value is illegal" },
          { id: "c", label: "Because value capture is the same as value creation" },
          { id: "d", label: "Because customers never pay for anything" },
        ],
        correctChoiceId: "a",
        explanation: "Plenty of useful free services create real value but never find a way to make money — a good product diverges from a good business exactly at value capture.",
      },
      {
        dimension: "depth",
        prompt: "What is the purpose of the Business Model Canvas?",
        choices: [
          { id: "a", label: "To design the product's logo" },
          { id: "b", label: "To map the building blocks of a model on one page and check they form a coherent, reinforcing whole" },
          { id: "c", label: "To calculate the exact share price" },
          { id: "d", label: "To replace the need for customers" },
        ],
        correctChoiceId: "b",
        explanation: "The canvas lays out segments, value proposition, channels, relationships, revenue, resources, activities, partnerships and costs so you can check the pieces fit into a self-sustaining loop rather than a wish list.",
      },
      {
        dimension: "reasoning",
        prompt: "What does the 'razor-and-blades' model illustrate about business models?",
        choices: [
          { id: "a", label: "That the same product must always be sold the same way" },
          { id: "b", label: "That how you structure pricing and revenue — cheap razor, profitable blades — is a strategic choice separate from the product" },
          { id: "c", label: "That razors are unprofitable" },
          { id: "d", label: "That subscriptions never work" },
        ],
        correctChoiceId: "b",
        explanation: "Selling the razor cheap and profiting on ongoing blades (like printers and cartridges) shows the model is a strategic decision: the same product can be monetised in radically different ways.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can a beloved product still be a failing business?",
        choices: [
          { id: "a", label: "Because if the cost to acquire and serve each customer exceeds what they pay, the firm loses money on every sale" },
          { id: "b", label: "Because popular products are always cheap to make" },
          { id: "c", label: "Because customers dislike good products" },
          { id: "d", label: "Because product quality has no effect" },
        ],
        correctChoiceId: "a",
        explanation: "A loved product with broken economics grows itself into bankruptcy — a trap of chasing growth without a viable model, showing the model is a whole system that can fail even when the product succeeds.",
      },
    ],
    sources: [
      { label: "Osterwalder, Business Model Generation", note: "The Business Model Canvas and its nine building blocks.", type: "Reference", url: "https://en.wikipedia.org/wiki/Business_model_canvas" },
      { label: "OpenStax Principles of Management", note: "Open textbook on how organisations create and capture value.", type: "Textbook", url: "https://openstax.org/details/books/principles-management" },
    ],
  },
  {
    concept: "Competitive Advantage",
    level: "A-level",
    summary: "why a firm can outperform rivals over time",
    estimatedMinutes: 8,
    deck: "Any firm can have a good year. The question that fascinates strategists is why some companies keep winning for decades while others are quickly copied and overtaken. The answer is competitive advantage — and above all, whether that advantage is protected by something rivals cannot easily replicate.",
    keyTerms: [
      { label: "Competitive advantage", value: "The reason a firm can outperform its rivals, ideally in a lasting way." },
      { label: "Cost leadership", value: "Winning by producing at a lower cost than competitors." },
      { label: "Differentiation", value: "Winning by offering something distinctive customers value and will pay for." },
      { label: "Moat", value: "A durable barrier — brand, network, switching costs, scale — that protects an advantage." },
    ],
    sections: [
      {
        heading: "Beating the average",
        body: [
          `Competitive advantage is whatever allows a firm to outperform its rivals — to earn higher profits, win more customers, or sustain both over time. In a truly competitive market, advantages get copied and profits get competed away, so the deep question is not "why is this firm doing well now?" but "why can it keep doing well when others are trying to imitate it?" A temporary edge is common; a durable one is rare and valuable.`,
          `The strategist Michael Porter argued that, at root, there are two fundamental routes to advantage. A firm can win by being the low-cost producer, or by being different in a way customers value enough to pay a premium for. Trying to be both at once, without excelling at either, often leaves a firm "stuck in the middle" — not cheap enough to win on price, not distinctive enough to win on value.`,
        ],
      },
      {
        heading: "Cost or difference",
        body: [
          `The first route, cost leadership, means building a business that can produce and deliver at lower cost than anyone else — through scale, efficiency, superior processes or cheaper inputs — and then either undercutting rivals on price or pocketing higher margins at the same price. Budget airlines and discount retailers pursue this: relentless cost control lets them offer prices competitors cannot match profitably.`,
          `The second route, differentiation, means offering something distinctive that customers value — superior quality, a powerful brand, unique features, better design or service — so they willingly pay more or stay loyal. Luxury goods, premium technology and trusted brands compete this way. Both routes can work brilliantly; the fatal mistake is usually a lack of clarity about which one you are pursuing, and therefore excelling at neither.`,
        ],
      },
      {
        heading: "The moat",
        body: [
          `The investor Warren Buffett popularised the vivid idea of an economic "moat": a durable barrier that protects a business's profits from competitors, like a moat around a castle. An advantage without a moat is fragile, because success attracts imitators who compete the profits away. The interesting question about any strong company is therefore: what is the moat, and how deep is it?`,
          `Common moats include a powerful brand that commands trust and loyalty; network effects, where the product grows more valuable as more people use it; high switching costs that lock customers in; economies of scale that let a big player operate more cheaply; and proprietary technology or patents. These are the barriers that let a firm sustain its advantage rather than watch it erode. Identifying the moat separates a business with a fleeting head start from one built to last.`,
        ],
      },
      {
        heading: "Temporary versus durable",
        body: [
          `The critical distinction is between temporary and sustainable competitive advantage. A clever new feature, a marketing hit, or a first-mover position can give a real but temporary edge — until rivals copy it. Sustainable advantage requires something hard to imitate: a moat, a hard-won capability, a culture, a scale or a network that competitors cannot easily replicate even when they can see exactly what you are doing.`,
          `This is why strategy pays so much attention to imitability. If your advantage can be copied cheaply and quickly, it will be, and your excess profits will vanish. The most valuable advantages are those protected by causes that are difficult to reproduce — accumulated over years, tangled up in many reinforcing activities, or self-reinforcing like a network effect. Understanding competitive advantage means always asking the follow-up question: yes, but can it be copied?`,
        ],
      },
      {
        heading: "Why you keep using the same apps",
        body: [
          `You experience moats as a customer all the time. You stay on a messaging app because everyone you know is already there (a network effect), keep a subscription because moving your data and habits elsewhere is a hassle (switching costs), or pay more for a brand you trust over a cheaper unknown (differentiation). When you notice how hard it is to leave a service even when a rival looks similar, you are feeling a competitive moat from the inside. Asking why a company keeps its customers despite competition — and whether that reason could be copied — is exactly the question that separates a lasting business from a passing fad.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is the deep question behind competitive advantage?",
        choices: [
          { id: "a", label: "Why is a firm doing well this quarter?" },
          { id: "b", label: "Why can a firm keep outperforming rivals even when they try to imitate it?" },
          { id: "c", label: "How large is the firm's office?" },
          { id: "d", label: "How many employees the firm has" },
        ],
        correctChoiceId: "b",
        explanation: "In competitive markets, advantages get copied and profits competed away, so the key question is durability: why can a firm keep winning when others are trying to imitate it?",
      },
      {
        dimension: "depth",
        prompt: "What are Porter's two fundamental routes to competitive advantage?",
        choices: [
          { id: "a", label: "Cost leadership and differentiation" },
          { id: "b", label: "Advertising and hiring" },
          { id: "c", label: "Growth and shrinkage" },
          { id: "d", label: "Borrowing and lending" },
        ],
        correctChoiceId: "a",
        explanation: "Porter argued a firm wins either by being the low-cost producer or by being different in a way customers pay a premium for; trying to be both without excelling at either leaves it 'stuck in the middle'.",
      },
      {
        dimension: "reasoning",
        prompt: "What does Buffett's idea of an economic 'moat' capture?",
        choices: [
          { id: "a", label: "A durable barrier that protects a firm's profits from competitors" },
          { id: "b", label: "A firm's marketing budget" },
          { id: "c", label: "The physical size of a company's premises" },
          { id: "d", label: "A temporary discount on prices" },
        ],
        correctChoiceId: "a",
        explanation: "A moat is a durable defence — brand, network effects, switching costs, scale, patents — that stops imitators competing profits away; an advantage without one is fragile.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does strategy pay so much attention to 'imitability'?",
        choices: [
          { id: "a", label: "Because an advantage that can be copied cheaply and quickly will be, erasing excess profits" },
          { id: "b", label: "Because copying competitors is always illegal" },
          { id: "c", label: "Because imitation improves the original firm" },
          { id: "d", label: "Because advantages never get copied" },
        ],
        correctChoiceId: "a",
        explanation: "If an edge is easy to reproduce, rivals will reproduce it and the extra profit vanishes; sustainable advantage needs causes hard to imitate even when competitors can see exactly what you do.",
      },
      {
        dimension: "depth",
        prompt: "What distinguishes a sustainable competitive advantage from a temporary one?",
        choices: [
          { id: "a", label: "Sustainable advantage rests on something hard to imitate, like a moat, capability or network" },
          { id: "b", label: "Temporary advantage always lasts longer" },
          { id: "c", label: "Sustainable advantage requires no effort" },
          { id: "d", label: "They are identical in practice" },
        ],
        correctChoiceId: "a",
        explanation: "A clever feature or marketing hit gives a temporary edge until copied; sustainable advantage needs a moat or hard-won capability rivals cannot easily replicate even when they can see it.",
      },
    ],
    sources: [
      { label: "Michael Porter, Competitive Advantage", note: "The classic framework of cost leadership and differentiation.", type: "Reference", url: "https://en.wikipedia.org/wiki/Competitive_advantage" },
      { label: "OpenStax Principles of Management", note: "Open textbook on strategy and competition.", type: "Textbook", url: "https://openstax.org/details/books/principles-management" },
    ],
  },
  {
    concept: "Unit Economics",
    level: "University",
    summary: "profitability at the level of one customer, order or product",
    estimatedMinutes: 9,
    deck: "A business can be growing fast, raising money and dominating headlines while quietly losing money on every single sale. Unit economics zooms all the way in to one customer or one order and asks the question that headline growth can hide: does this actually make money?",
    keyTerms: [
      { label: "Unit economics", value: "The revenues and costs associated with a single unit — one customer, order or product." },
      { label: "Contribution margin", value: "Revenue from a unit minus the variable costs of producing it." },
      { label: "CAC", value: "Customer acquisition cost — what it costs, on average, to win one customer." },
      { label: "LTV", value: "Lifetime value — the total profit a customer generates over their whole relationship." },
    ],
    sections: [
      {
        heading: "Zooming in to one",
        body: [
          `Unit economics examines the profitability of a business at the level of a single "unit" — typically one customer, but sometimes one order, one product or one subscription. Instead of looking at total revenue and total costs, it asks: for one unit, how much money comes in and how much goes out? This granular view cuts through the noise of overall growth to reveal whether the fundamental engine of the business actually works.`,
          `The reason this matters is that aggregate numbers can deceive. A company can post soaring total revenue while losing money on each transaction, papering over the losses with investor cash. Growth then makes things worse, not better — every new customer deepens the loss. Unit economics is the discipline of checking the engine before you step on the accelerator: if one unit is unprofitable, scaling multiplies the problem.`,
        ],
      },
      {
        heading: "Contribution margin",
        body: [
          `The starting point is the contribution margin: the revenue from one unit minus the variable costs directly required to produce and deliver it. If a meal-delivery order brings in £20 but the food, packaging, delivery and payment fees cost £22, the contribution margin is negative — the business loses £2 before it has paid a penny of rent, salaries or marketing. No amount of scale fixes a negative contribution margin; it only enlarges the hole.`,
          `A positive contribution margin, by contrast, means each sale contributes something toward covering the fixed costs (rent, salaries, overhead) and eventually toward profit. The bigger the contribution margin, the fewer units you need to sell to break even. This single figure is the first health check of a business: it separates ventures that could become profitable with scale from those that are fundamentally underwater on every sale.`,
        ],
      },
      {
        heading: "The LTV to CAC ratio",
        body: [
          `For subscription and repeat-purchase businesses, the central unit-economics comparison is between two numbers. Customer acquisition cost (CAC) is what you spend, on average, to win one customer — the marketing and sales cost divided by customers gained. Lifetime value (LTV) is the total profit a customer generates over their entire relationship with you. The relationship between them decides whether growth creates or destroys value.`,
          `If it costs £100 to acquire a customer (CAC) who generates £300 of lifetime profit (LTV), the economics are healthy — a widely cited rule of thumb likes to see LTV at least three times CAC. But if you spend £100 to acquire a customer worth only £60, every customer is a £40 loss, and aggressive growth accelerates the bleeding. A great deal of the difference between celebrated startups and infamous failures comes down to whether they respected this ratio or ignored it while chasing headline growth.`,
        ],
      },
      {
        heading: "Why growth can be a trap",
        body: [
          `The deepest lesson of unit economics is counterintuitive: growth is only good if the unit economics are sound. When each unit is profitable, growth compounds success. When each unit loses money, growth compounds failure, burning cash faster the more you sell. Several high-profile companies have grown spectacularly while losing money on every customer, sustained only by investors betting the economics would eventually improve — a bet that sometimes pays off and often does not.`,
          `Sound analysis therefore always asks whether scale will fix the economics or worsen them. Sometimes scale genuinely helps: fixed costs spread over more units, suppliers offer volume discounts, processes get more efficient, so a unit that loses a little today becomes profitable at scale. But sometimes the losses are structural and scale only deepens them. Distinguishing the two — improvable versus fundamentally broken unit economics — is one of the most important judgements in business.`,
        ],
      },
      {
        heading: "The 'busy but broke' side hustle",
        body: [
          `Unit economics is the maths behind a familiar trap. Someone starts a side hustle baking cakes, sells loads, feels successful — then realises that after ingredients, packaging and delivery, each cake barely breaks even or loses money, so more orders just mean more work for nothing. That is negative contribution margin in real life. The same logic applies to a reseller who ignores fees and shipping, or anyone who confuses being busy with being profitable. Before scaling anything — a business, a side project, even a habit that costs money — it is worth asking the unit-economics question: does one of these actually pay off, or am I just multiplying a loss?`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What does unit economics examine?",
        choices: [
          { id: "a", label: "The total revenue of the whole company" },
          { id: "b", label: "The revenues and costs of a single unit, such as one customer or order" },
          { id: "c", label: "The number of employees per office" },
          { id: "d", label: "The company's share price" },
        ],
        correctChoiceId: "b",
        explanation: "Unit economics zooms in to one unit — a customer, order or product — asking how much money comes in and goes out per unit, cutting through the noise of aggregate growth.",
      },
      {
        dimension: "depth",
        prompt: "What is 'contribution margin'?",
        choices: [
          { id: "a", label: "Total company profit after tax" },
          { id: "b", label: "The revenue from one unit minus the variable costs to produce and deliver it" },
          { id: "c", label: "The amount donated to charity" },
          { id: "d", label: "The marketing budget" },
        ],
        correctChoiceId: "b",
        explanation: "Contribution margin is a unit's revenue minus its variable costs; if it is negative, the business loses money on each sale before any fixed costs, and scale only enlarges the hole.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can rapid growth make an unprofitable business worse?",
        choices: [
          { id: "a", label: "Because if each unit loses money, every new sale deepens the loss" },
          { id: "b", label: "Because growth is always bad" },
          { id: "c", label: "Because customers dislike growing companies" },
          { id: "d", label: "Because more sales always reduce revenue" },
        ],
        correctChoiceId: "a",
        explanation: "When unit economics are negative, growth compounds failure — every new customer adds to the loss, so scaling multiplies the problem rather than solving it.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is the LTV-to-CAC ratio central for subscription businesses?",
        choices: [
          { id: "a", label: "It compares the lifetime profit of a customer with the cost to acquire them, deciding if growth creates or destroys value" },
          { id: "b", label: "It measures office rent" },
          { id: "c", label: "It counts the number of products" },
          { id: "d", label: "It has no bearing on profitability" },
        ],
        correctChoiceId: "a",
        explanation: "If acquiring a customer costs less than the profit they generate over their lifetime (a rule of thumb likes LTV at least 3× CAC), growth is healthy; if not, every customer is a loss and growth accelerates the bleeding.",
      },
      {
        dimension: "reasoning",
        prompt: "What crucial judgement must analysis of unit economics make about scale?",
        choices: [
          { id: "a", label: "Whether scale will fix the economics or only deepen structural losses" },
          { id: "b", label: "Whether the company has a nice logo" },
          { id: "c", label: "Whether growth is always guaranteed to help" },
          { id: "d", label: "Whether to ignore variable costs" },
        ],
        correctChoiceId: "a",
        explanation: "Sometimes scale genuinely improves a unit that loses a little today (spreading fixed costs, volume discounts); sometimes losses are structural and scale worsens them — distinguishing improvable from broken unit economics is a key business judgement.",
      },
    ],
    sources: [
      { label: "Unit economics (overview)", note: "Reference on contribution margin, CAC and LTV.", type: "Reference", url: "https://en.wikipedia.org/wiki/Unit_economics" },
      { label: "OpenStax Principles of Management", note: "Open textbook on costs, margins and financial decisions.", type: "Textbook", url: "https://openstax.org/details/books/principles-management" },
    ],
  },
  {
    concept: "Queueing Theory and Little's Law",
    level: "University",
    summary: "why the queue explodes long before you run out of capacity",
    estimatedMinutes: 9,
    deck: "Intuition says a system at 90% utilisation has 10% slack and is fine. Queueing theory says it is nearly on fire. Waiting time does not rise linearly with load — it rises hyperbolically, heading for infinity as utilisation approaches one, and this is arithmetic rather than mismanagement.",
    keyTerms: [
      { label: "Utilisation", value: "The fraction of capacity in use; queueing delay explodes as it approaches one." },
      { label: "Little's Law", value: "L = λW: items in a system equal arrival rate times average time each spends in it." },
      { label: "Variability", value: "Randomness in arrivals and service times, which is what makes queues form below full capacity." },
      { label: "Work in progress", value: "The stock of started-but-unfinished items, which sets lead time given a fixed throughput." },
    ],
    sections: [
      {
        heading: "The curve nobody expects",
        body: [
          `The foundational result is counterintuitive enough that most organisations run afoul of it permanently. If arrivals and service times were perfectly regular, a system could run at 100% utilisation with no queue at all — each item arrives exactly as the last completes. Real arrivals and service times vary, and that variability alone generates queues even when average capacity comfortably exceeds average demand. Sometimes two arrive at once, sometimes one takes twice as long, and the resulting backlog does not fully clear before the next clump.`,
          `The consequence is that waiting time is a hyperbolic function of utilisation, roughly proportional to ρ/(1−ρ). At 50% utilisation the queue is negligible. At 80% it is noticeable. At 90% it is roughly double the 80% figure. At 95% it doubles again, and as utilisation approaches 100% the wait tends to infinity. The system does not degrade gracefully and then break; it is fine, fine, fine, and then catastrophically not — which is why the last few percentage points of "efficiency" cost far more than they appear to.`,
        ],
      },
      {
        heading: "Little's Law",
        body: [
          `Little's Law states that the average number of items in a system equals the average arrival rate multiplied by the average time each spends there: L = λW. Its remarkable property is generality — it holds for any stable system regardless of arrival distribution, service distribution, number of servers or queue discipline. It needs almost no assumptions, which is why it is one of the few results in operations that is genuinely always true rather than true under conditions.`,
          `Rearranged as W = L/λ it becomes a management tool. If your throughput is fixed at λ, then lead time is determined entirely by how much work is in the system. This is the arithmetic underneath every argument for limiting work in progress: a team that starts everything has an enormous L, and therefore a long W, regardless of how hard anyone works. You cannot shorten lead time by starting sooner — starting sooner raises L, which raises W. The only levers are increasing throughput or reducing the amount in flight, and the second is free.`,
        ],
      },
      {
        heading: "Why variability is the real enemy",
        body: [
          `Because queues are generated by variability rather than by load, reducing variability improves a system without adding capacity — and this is where the theory becomes actionable. Variability comes in two forms: arrival variability, which you often cannot control, and service variability, which you frequently can. A process that sometimes takes ten minutes and sometimes ninety produces far worse queues than one reliably taking fifty, even at identical average throughput. Standardising the process shortens waits without a single extra server.`,
          `The other lever is pooling. Several separate queues with dedicated servers perform worse than one queue feeding all servers, because in the separate case one server can idle while another's queue grows — capacity exists but is unreachable. This is why banks and airports adopted the single serpentine line, and it is the same reason a shared team backlog beats individually assigned work. It also explains why specialisation has a hidden cost: every time you make a server able to handle only certain items, you are unpooling, and you pay for it in queueing whatever you gain in speed.`,
        ],
      },
      {
        heading: "Why organisations run at 100% anyway",
        body: [
          `Knowing all this, organisations still push utilisation toward one, and the reason is that the costs are asymmetrically visible. Idle capacity is legible — an unbusy person, an unused machine, a line item — and it looks like waste to anyone reviewing a budget. The queue that idle capacity was preventing is invisible, diffuse and borne by someone else: the customer waiting, the project running late, the colleague blocked. So the pressure runs one way, and the system is optimised toward the cliff by people who can see only one of the two quantities.`,
          `This is the deeper lesson, and it generalises past operations. Slack is not waste; it is the thing absorbing variability, and a system with no slack has no capacity to absorb anything. A hospital at 100% bed occupancy cannot take an emergency, a team with every hour booked cannot handle a surprise, a road at capacity jams from a single braking event. The organisations that appear least efficient on a utilisation metric are frequently the ones that still work when something unexpected happens — and the ones that look magnificently lean are one perturbation from a queue that will not clear.`,
        ],
      },
      {
        heading: "Why your calendar being full is a mistake",
        body: [
          `Run the maths on yourself. If every hour of your week is committed, you are at 100% utilisation, and queueing theory says your response time to anything unplanned approaches infinity — which is exactly what it feels like: one meeting overruns and the whole week is a backlog that never clears. The instinct is to work harder, which does not touch the problem, because the problem is not throughput but that L is too high and there is no slack to absorb variance. The counterintuitive fix is to finish more before starting more, and to leave gaps deliberately — not as a reward but as the mechanism that makes the rest of the schedule function. Idle time looks like waste and is doing load-bearing work.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "reasoning",
        prompt: "Why do queues form even when average capacity exceeds average demand?",
        choices: [
          { id: "a", label: "Variability in arrivals and service times creates clumps that do not fully clear" },
          { id: "b", label: "Servers cannot sustain their average rate over long periods" },
          { id: "c", label: "Demand always grows to exceed whatever capacity is provided" },
          { id: "d", label: "Average measures are unreliable in systems with many servers" },
        ],
        correctChoiceId: "a",
        explanation: "With perfectly regular arrivals and service, 100% utilisation would produce no queue at all. Variability alone generates them: sometimes two arrive at once, sometimes one takes twice as long, and the backlog persists.",
      },
      {
        dimension: "reasoning",
        prompt: "What happens to waiting time as utilisation approaches 100%?",
        choices: [
          { id: "a", label: "It rises hyperbolically toward infinity rather than degrading gracefully" },
          { id: "b", label: "It rises linearly in proportion to the load applied" },
          { id: "c", label: "It plateaus once the system reaches its maximum throughput" },
          { id: "d", label: "It falls, because servers stop idling between arrivals" },
        ],
        correctChoiceId: "a",
        explanation: "Roughly proportional to ρ/(1−ρ): negligible at 50%, noticeable at 80%, double that at 90%, double again at 95%. The system is fine, fine, fine, then catastrophically not — so the last few points of efficiency cost enormously.",
      },
      {
        dimension: "depth",
        prompt: "What makes Little's Law unusual among operations results?",
        choices: [
          { id: "a", label: "It holds for any stable system regardless of distributions, servers or queue discipline" },
          { id: "b", label: "It applies only to systems with a single server and Poisson arrivals" },
          { id: "c", label: "It predicts throughput from capacity without needing arrival data" },
          { id: "d", label: "It was derived empirically rather than proved mathematically" },
        ],
        correctChoiceId: "a",
        explanation: "L = λW needs almost no assumptions, which is why it is genuinely always true rather than true under conditions — and rearranged as W = L/λ it says lead time is set by work in progress given fixed throughput.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does pooling several queues outperform dedicated queues per server?",
        choices: [
          { id: "a", label: "Separate queues let one server idle while another's queue grows, stranding capacity" },
          { id: "b", label: "Pooled queues reduce the total arrival rate into the system" },
          { id: "c", label: "Customers in pooled queues are more tolerant of waiting" },
          { id: "d", label: "Pooling reduces service time variability at each server" },
        ],
        correctChoiceId: "a",
        explanation: "Capacity exists but is unreachable — hence the serpentine line at banks and airports, and why a shared backlog beats individually assigned work. It also reveals specialisation's hidden cost: it is unpooling.",
      },
      {
        dimension: "reasoning",
        prompt: "Why do organisations push utilisation toward 100% despite the maths?",
        choices: [
          { id: "a", label: "Idle capacity is visible and looks like waste; the queue it prevented is invisible and borne elsewhere" },
          { id: "b", label: "Managers are generally unaware that queueing theory exists" },
          { id: "c", label: "High utilisation genuinely reduces cost per unit at every level" },
          { id: "d", label: "Regulators require capacity to be justified against demonstrated demand" },
        ],
        correctChoiceId: "a",
        explanation: "The costs are asymmetrically visible, so pressure runs one way and the system gets optimised toward the cliff by people who can see only one of the two quantities. Slack is not waste — it is what absorbs variability.",
      },
    ],
    sources: [
      { label: "Queueing theory (overview)", note: "Reference on utilisation, variability and the queueing curve.", type: "Reference", url: "https://en.wikipedia.org/wiki/Queueing_theory" },
      { label: "Little's law (overview)", note: "Reference on L = λW and its application to work in progress.", type: "Reference", url: "https://en.wikipedia.org/wiki/Little%27s_law" },
    ],
  },
  {
    concept: "Strategy",
    level: "A-level",
    summary: "choosing where to compete and what not to do",
    estimatedMinutes: 8,
    deck: "Most people think strategy is a grand plan to do lots of impressive things. The strategist Michael Porter argued almost the opposite: the essence of strategy is choosing what not to do. A strategy that tries to be everything to everyone is not a strategy at all.",
    keyTerms: [
      { label: "Strategy", value: "The deliberate choice of where to compete and how to win, defined by trade-offs." },
      { label: "Trade-off", value: "Deliberately giving up one thing to be better at another." },
      { label: "Operational effectiveness", value: "Doing the same activities better than rivals — necessary but not a strategy." },
      { label: "Positioning", value: "Choosing a distinctive set of activities to deliver a unique mix of value." },
    ],
    sections: [
      {
        heading: "Strategy is choice, not ambition",
        body: [
          `In everyday use, "strategy" often just means a plan or a set of ambitions. In business, it means something sharper: the deliberate choice of where to compete and how to win, which necessarily means choosing where not to compete and what not to do. A useful strategy narrows focus. A list of everything a company would like to achieve — grow, innovate, delight customers, cut costs, expand everywhere — is not a strategy; it is a wish list.`,
          `Michael Porter, the most influential thinker on the subject, put it bluntly: "The essence of strategy is choosing what not to do." Real strategy involves saying no — to certain customers, markets, features and opportunities — precisely so that you can be genuinely excellent at a chosen few. Without those exclusions, effort scatters and the firm ends up mediocre at many things instead of superb at something.`,
        ],
      },
      {
        heading: "Effectiveness is not strategy",
        body: [
          `Porter drew a crucial distinction between strategy and "operational effectiveness". Operational effectiveness means doing the same activities as your rivals, but better — faster, cheaper, higher quality. It is essential; a firm that is inefficient will lose. But it is not strategy, because best practices spread. Everyone eventually copies the better method, and the whole industry improves together while no one gains a lasting edge. Running the same race faster is not the same as running a different race.`,
          `Strategy, by contrast, means choosing to perform different activities from rivals, or the same activities in a different way, to deliver a unique kind of value. It is about being different, not just better. A firm with a real strategy occupies a distinctive position that competitors cannot easily copy without abandoning their own position — which is exactly what makes it defensible.`,
        ],
      },
      {
        heading: "The power of trade-offs",
        body: [
          `The heart of strategy is the trade-off: deliberately giving up one thing to be better at another. A budget airline chooses no assigned seats, no free meals, no connecting-flight guarantees — sacrifices that would horrify a full-service carrier — precisely because those sacrifices enable rock-bottom prices and fast turnarounds. The things it refuses to do are what make its low-cost position possible. Its strategy is defined as much by its exclusions as its inclusions.`,
          `Trade-offs are what make a strategy defensible, because they make it painful for rivals to imitate. A full-service airline cannot simply "add" budget prices without dismantling the very things that serve its premium customers; the two positions require incompatible activities. When a competitor would have to give up their own advantages to copy yours, your position is protected. A strategy with no trade-offs — where you claim to offer the best of everything — is usually no strategy at all, because anyone could claim the same and nothing forces a choice.`,
        ],
      },
      {
        heading: "Fit and coherence",
        body: [
          `Beyond a single choice, a strong strategy shows "fit": its many activities reinforce one another into a coherent whole. The budget airline's cheap fares, quick turnarounds, single aircraft type, point-to-point routes and no-frills service are not separate decisions but a mutually supporting system, each choice making the others work better. This interlocking fit is far harder for rivals to copy than any single practice, because they would have to replicate the entire system at once.`,
          `This is why strategy is best judged not by whether each activity is impressive in isolation, but by whether the activities cohere around a clear position. A common failure is the incoherent organisation whose various initiatives pull in different directions, cancelling each other out. Good strategy aligns everything — what you sell, to whom, how, at what price, supported by which capabilities — into a single, defensible logic. The clarity of that logic, and the discipline to stick to it and say no to distractions, is what strategy really tests.`,
        ],
      },
      {
        heading: "The strategy in your own choices",
        body: [
          `You face strategy whenever you cannot do everything. Trying to be brilliant at your job, your fitness, your relationships, a side project and a social life all at once usually means being mediocre at all of them; choosing which few to prioritise — and consciously accepting you will do less of the rest — is personal strategy, trade-offs and all. The person who tries to keep every option open often achieves less than the one who commits. Next time you feel stretched thin across too many goals, remember Porter's line: the essence of strategy is choosing what not to do, and the hardest, most valuable part is saying no.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "According to Porter, what is the essence of strategy?",
        choices: [
          { id: "a", label: "Doing as many impressive things as possible" },
          { id: "b", label: "Choosing what not to do, so you can excel at a chosen few things" },
          { id: "c", label: "Copying whatever competitors do" },
          { id: "d", label: "Maximising the number of markets entered" },
        ],
        correctChoiceId: "b",
        explanation: "Porter said 'the essence of strategy is choosing what not to do.' Strategy narrows focus through deliberate exclusions; a list of everything a firm wants to achieve is a wish list, not a strategy.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is 'operational effectiveness' not the same as strategy?",
        choices: [
          { id: "a", label: "Because doing the same activities better gets copied as best practices spread, giving no lasting edge" },
          { id: "b", label: "Because efficiency does not matter" },
          { id: "c", label: "Because strategy means being slower than rivals" },
          { id: "d", label: "Because effectiveness is illegal" },
        ],
        correctChoiceId: "a",
        explanation: "Operational effectiveness — doing the same activities better — is essential but imitable; everyone eventually copies the better method. Strategy means doing different activities to deliver unique value.",
      },
      {
        dimension: "depth",
        prompt: "Why are trade-offs central to strategy?",
        choices: [
          { id: "a", label: "Because deliberately giving up some things to excel at others makes a position defensible and hard to imitate" },
          { id: "b", label: "Because a good strategy offers the best of everything with no sacrifices" },
          { id: "c", label: "Because trade-offs are a sign of failure" },
          { id: "d", label: "Because they have no effect on rivals" },
        ],
        correctChoiceId: "a",
        explanation: "A budget airline's sacrifices (no assigned seats or meals) enable its low-cost position, and a full-service rival cannot copy the prices without dismantling their own advantages — trade-offs make a strategy defensible.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does a strategy that claims to offer 'the best of everything' usually fail as a strategy?",
        choices: [
          { id: "a", label: "Because with no trade-offs anyone could claim the same, and nothing forces the choices that make a position distinctive" },
          { id: "b", label: "Because offering more is always worse for customers" },
          { id: "c", label: "Because customers dislike good products" },
          { id: "d", label: "Because it is too expensive to advertise" },
        ],
        correctChoiceId: "a",
        explanation: "A position with no trade-offs is not defensible: anyone can claim best-of-everything, and without deliberate sacrifices there is nothing distinctive or hard to imitate.",
      },
      {
        dimension: "depth",
        prompt: "What does 'fit' mean in a strong strategy?",
        choices: [
          { id: "a", label: "That the firm's many activities reinforce one another into a coherent, hard-to-copy system" },
          { id: "b", label: "That the office layout is comfortable" },
          { id: "c", label: "That each activity is impressive in isolation" },
          { id: "d", label: "That the strategy changes constantly" },
        ],
        correctChoiceId: "a",
        explanation: "Fit is when activities interlock and reinforce each other into a coherent whole, which is far harder for rivals to copy than any single practice because they would have to replicate the entire system at once.",
      },
    ],
    sources: [
      { label: "Michael Porter, 'What Is Strategy?'", note: "The classic argument on trade-offs, fit and choosing what not to do.", type: "Reference", url: "https://en.wikipedia.org/wiki/Michael_Porter" },
      { label: "OpenStax Principles of Management", note: "Open textbook on strategic management.", type: "Textbook", url: "https://openstax.org/details/books/principles-management" },
    ],
  },
  {
    concept: "Organisational Culture",
    level: "A-level",
    summary: "shared norms that shape behaviour when nobody is watching",
    estimatedMinutes: 8,
    deck: "Every company has a poster of stated values on the wall. Its real culture is something else entirely: the unwritten rules that actually govern how people behave when no one is checking. Read those, not the poster, and you understand the organisation.",
    keyTerms: [
      { label: "Organisational culture", value: "The shared, often unspoken norms, beliefs and behaviours of a group." },
      { label: "Espoused vs actual values", value: "The gap between the values a firm claims and the ones it lives." },
      { label: "Artifacts, values, assumptions", value: "Schein's three levels of culture, from visible to deeply held." },
      { label: "Revealed by rewards", value: "Real culture is shown by what gets rewarded, tolerated and punished." },
    ],
    sections: [
      {
        heading: "The rules nobody writes down",
        body: [
          `Organisational culture is the set of shared values, beliefs, norms and behaviours that characterise how a group actually operates. It is often summarised as "the way we do things around here" — the unwritten rules that shape how people behave, especially when no one is explicitly watching or enforcing anything. Culture fills the vast space that formal rules and job descriptions leave blank, which is most of working life.`,
          `Its power lies in being largely invisible and automatic. People absorb a culture and then follow it without conscious thought, the way you absorb the norms of a family or a country. This makes culture enormously influential and hard to change, because you are not dealing with a policy but with a shared, internalised sense of what is normal, expected and acceptable — a set of assumptions people have stopped noticing they hold.`,
        ],
      },
      {
        heading: "The poster and the practice",
        body: [
          `The most important thing to understand about culture is the gap between espoused values and actual values. Espoused values are what an organisation says it believes — the mission statement, the poster in the lobby proclaiming "integrity, teamwork, innovation". Actual values are what its behaviour reveals. When the two diverge, the real culture is defined by behaviour, not words, and everyone inside knows it.`,
          `A company can proclaim it values work-life balance while rewarding only those who stay late; claim it values integrity while quietly tolerating dishonesty that hits targets; declare it prizes innovation while punishing every failed experiment. In each case the true culture is the lived one, and the gap between poster and practice breeds cynicism, because nothing teaches people the real rules faster than watching what actually happens to those who follow, or break, the stated ones.`,
        ],
      },
      {
        heading: "Reading culture from behaviour",
        body: [
          `Because stated values are unreliable, you read a real culture from evidence: what actually gets rewarded, tolerated and punished. Who gets promoted, and for what? What behaviour gets someone praised, and what gets them quietly sidelined? What do people do under pressure, when the targets are tight? What is joked about, and what is never mentioned? These patterns reveal the operating values far more accurately than any official statement.`,
          `The organisational psychologist Edgar Schein described culture as having three levels. On the surface are "artifacts" — the visible things: the office layout, the dress code, the rituals, the language. Beneath them are the "espoused values" the group claims. And deepest are the "basic underlying assumptions" — the taken-for-granted beliefs, invisible even to insiders, that truly drive behaviour. Real understanding means digging past the visible artifacts and the stated values to those deep assumptions, which is where a culture actually lives.`,
        ],
      },
      {
        heading: "Why culture beats strategy",
        body: [
          `There is a famous saying, often attributed to the management thinker Peter Drucker: "Culture eats strategy for breakfast." The point is that the finest strategy will fail if the culture undermines it. You can decree a new plan, but if the everyday norms and incentives pull in a different direction, people will keep doing what the culture rewards, and the strategy will quietly die. Culture is the medium through which every plan must actually be carried out.`,
          `This is why leaders who ignore culture and focus only on structure and strategy are so often frustrated. Changing a culture is slow and hard precisely because it lives in shared assumptions and daily incentives, not in memos. The most effective way to shift it is not to publish new values but to change what actually gets rewarded and punished, and to model the behaviour consistently from the top — because people believe what they see rewarded, not what they are told to value.`,
        ],
      },
      {
        heading: "The real rules of any group you join",
        body: [
          `You read organisational culture every time you join a new group. In the first weeks at a job, a club or a team, you quickly learn the real rules — not the ones in the handbook, but who actually holds sway, which corners are quietly cut, whether it is safe to admit a mistake, how people really speak to each other. You learn them by watching what gets someone praised and what gets them frozen out. Noticing the gap between a group's stated values and its lived ones — the friendly team that punishes anyone who disagrees, the 'open' culture where certain topics are taboo — is one of the most useful social skills there is, and it is exactly what studying organisational culture teaches.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is organisational culture best described as?",
        choices: [
          { id: "a", label: "The company's official mission statement" },
          { id: "b", label: "The shared, often unspoken norms that shape how people behave, especially when unwatched" },
          { id: "c", label: "The org chart and reporting lines" },
          { id: "d", label: "The annual financial results" },
        ],
        correctChoiceId: "b",
        explanation: "Culture is 'the way we do things around here' — the unwritten rules people absorb and follow automatically, filling the space formal rules leave blank.",
      },
      {
        dimension: "reasoning",
        prompt: "When a firm's stated values differ from its behaviour, which defines the real culture?",
        choices: [
          { id: "a", label: "The stated values on the poster" },
          { id: "b", label: "The behaviour — what people actually do and what actually happens" },
          { id: "c", label: "Whichever sounds more impressive" },
          { id: "d", label: "Neither; culture cannot be known" },
        ],
        correctChoiceId: "b",
        explanation: "When espoused and actual values diverge, the real culture is the lived one; a company claiming to value balance while rewarding only those who stay late has a culture defined by the reward, not the poster.",
      },
      {
        dimension: "reasoning",
        prompt: "How do you most reliably read an organisation's real culture?",
        choices: [
          { id: "a", label: "By reading the mission statement" },
          { id: "b", label: "By observing what actually gets rewarded, tolerated and punished" },
          { id: "c", label: "By counting the number of employees" },
          { id: "d", label: "By looking only at the logo" },
        ],
        correctChoiceId: "b",
        explanation: "Who gets promoted and for what, what is praised or quietly sidelined, and how people behave under pressure reveal the operating values far more accurately than any official statement.",
      },
      {
        dimension: "depth",
        prompt: "In Schein's model, what are the deepest level of culture?",
        choices: [
          { id: "a", label: "Visible artifacts like dress code and office layout" },
          { id: "b", label: "The basic underlying assumptions — taken-for-granted beliefs that truly drive behaviour" },
          { id: "c", label: "The espoused values on the wall" },
          { id: "d", label: "The company's revenue figures" },
        ],
        correctChoiceId: "b",
        explanation: "Schein's three levels run from visible artifacts, through espoused values, to the deepest basic underlying assumptions — the taken-for-granted beliefs, often invisible even to insiders, that actually drive behaviour.",
      },
      {
        dimension: "reasoning",
        prompt: "What does 'culture eats strategy for breakfast' mean?",
        choices: [
          { id: "a", label: "That the best strategy will fail if the everyday culture and incentives undermine it" },
          { id: "b", label: "That strategy is more important than culture" },
          { id: "c", label: "That companies should not plan" },
          { id: "d", label: "That culture and strategy are unrelated" },
        ],
        correctChoiceId: "a",
        explanation: "A brilliant plan dies if daily norms and incentives pull the other way; people keep doing what the culture rewards, so culture is the medium through which every strategy must actually be executed.",
      },
    ],
    sources: [
      { label: "Edgar Schein, Organizational Culture and Leadership", note: "The three levels of culture: artifacts, values and assumptions.", type: "Reference", url: "https://en.wikipedia.org/wiki/Organizational_culture" },
      { label: "OpenStax Principles of Management", note: "Open textbook on culture, behaviour and leadership.", type: "Textbook", url: "https://openstax.org/details/books/principles-management" },
    ],
  },
  {
    concept: "Cost of Capital",
    level: "University",
    summary: "why profitable is not the same as worth doing",
    estimatedMinutes: 9,
    deck: "A project returning 6% sounds like a good idea until you notice the money could have earned 9% elsewhere at the same risk — at which point it is destroying value while reporting a profit. Cost of capital is the hurdle that turns accounting profit into economic value, and mis-setting it is one of the most expensive errors a firm can make quietly.",
    keyTerms: [
      { label: "Opportunity cost of capital", value: "The return available on an alternative investment of equivalent risk — the true benchmark." },
      { label: "WACC", value: "The blended cost of debt and equity, weighted by their share of financing." },
      { label: "Hurdle rate", value: "The minimum return a project must clear to create value rather than consume it." },
      { label: "Economic profit", value: "Profit after charging for all capital employed, unlike accounting profit which charges only debt." },
    ],
    sections: [
      {
        heading: "The cost accounting does not charge",
        body: [
          `Accounting profit subtracts interest on debt because interest is a payment someone demands. It does not subtract any charge for equity, because shareholders do not send an invoice. This makes equity look free, and it is the single most consequential distortion in corporate reporting: a firm can report a healthy profit for decades while systematically destroying value, because the capital its shareholders supplied has been earning less than it would have earned elsewhere.`,
          `The correction is to recognise that capital has an opportunity cost regardless of whether anyone bills for it. If investors could earn 9% on an alternative of the same risk, then 9% is what your project must beat — not zero, and not the interest rate on your loans. Economic profit charges for all capital employed, and it is frequently negative in firms that look profitable. This is why the phrase "we made money on it" settles nothing: the question is never whether the return was positive but whether it exceeded what the same money and risk would have earned somewhere else.`,
        ],
      },
      {
        heading: "Why the rate depends on the project, not the firm",
        body: [
          `The cost of capital is a property of risk, not of the borrower. This is the point most consistently got wrong in practice. A firm computes its weighted average cost of capital — blending the cost of its debt and equity by their financing shares — and then applies that single number as the hurdle for every project it considers. That is correct only if every project carries the firm's average risk, which is essentially never true.`,
          `The consequence is a systematic misallocation that compounds. Apply one company-wide rate and low-risk projects are held to too high a bar and rejected, while high-risk projects are held to too low a bar and approved. The firm therefore drifts, one apparently rational decision at a time, toward a portfolio riskier than it intended, and the mechanism is invisible because each individual approval cleared the stated hurdle. The correct rate reflects the risk of the project's cash flows, which is why a stable utility and a speculative venture inside the same conglomerate should face entirely different hurdles even though the money comes from the same treasury.`,
        ],
      },
      {
        heading: "Cheap debt is not cheap",
        body: [
          `Debt looks cheaper than equity and in one sense is: lenders are paid first and bear less risk, so they demand less, and interest is usually tax-deductible, which subsidises it further. The naive inference is to fund everything with debt. Modigliani and Miller's theorem shows why this fails: in a frictionless world, capital structure does not change firm value at all, because loading on debt makes the remaining equity riskier and equity holders demand correspondingly more. The blended cost is unchanged — you have redistributed risk, not reduced it.`,
          `The world has frictions, so the theorem is a benchmark rather than a description, and the deviations are where the real answer lives. The tax shield genuinely favours debt; financial distress costs, and the loss of flexibility when covenants bind, genuinely oppose it. The optimum is a trade-off. But the theorem's discipline is what matters: any claim that a financing scheme creates value must specify which friction it exploits. If it does not, it is reshuffling risk while appearing to conjure returns — which is the structure of a great many financial engineering proposals.`,
        ],
      },
      {
        heading: "Where the estimate falls apart",
        body: [
          `For all its rigour, the cost of equity is estimated with tools that are shakier than their precision suggests. The standard approach uses the capital asset pricing model, adding a risk premium scaled by beta — the stock's covariance with the market — to a risk-free rate. Every input is contestable: beta is unstable and measured from historical data that may not describe the future, the equity risk premium is estimated with enormous uncertainty and reasonable people differ by several percentage points, and the model itself has substantial empirical problems.`,
          `So the hurdle rate is a judgement wearing a decimal point, and that matters most for exactly the decisions where it matters most. Long-lived projects are acutely sensitive to it — infrastructure, pharmaceutical development, anything where cash flows land decades out — because discounting compounds. Move the rate two points and a thirty-year project's value swings enormously, which means the investment decision was effectively made by the assumption rather than by the analysis. The honest practice is to test the range: if a project clears at 8% and fails at 11%, you have not established that it is worth doing, you have established that it depends on a number nobody actually knows.`,
        ],
      },
      {
        heading: "Why 'it made a profit' is not the test",
        body: [
          `The transferable move is to stop asking whether something returned more than zero and start asking what else that resource could have done. A business unit earning 4% on capital while the firm could earn 9% elsewhere is not a modest success, it is a loss being reported as a gain — and the same logic applies well outside finance. The hours you spent on a project that worked out fine were hours that could have gone somewhere better; the fact that it worked is not the standard. The second habit is to distrust any number that decides a case on its own: when a decision flips on whether the rate is 8% or 11%, the analysis is not telling you the answer, it is telling you which assumption you have to have a view about.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "reasoning",
        prompt: "Why does accounting profit systematically overstate performance?",
        choices: [
          { id: "a", label: "It charges for debt but not equity, so shareholder capital appears free" },
          { id: "b", label: "It records revenue before the corresponding cash has been received" },
          { id: "c", label: "It depreciates assets more slowly than they lose economic value" },
          { id: "d", label: "It excludes the tax liabilities arising from reported earnings" },
        ],
        correctChoiceId: "a",
        explanation: "Shareholders send no invoice, so no charge appears. A firm can report profit for decades while destroying value, because the equity supplied has been earning less than it would have earned elsewhere at the same risk.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is applying one company-wide WACC to every project a mistake?",
        choices: [
          { id: "a", label: "Cost of capital depends on project risk, so low-risk projects are over-hurdled and high-risk under-hurdled" },
          { id: "b", label: "WACC changes too frequently to serve as a stable planning benchmark" },
          { id: "c", label: "Projects funded internally do not draw on external capital markets" },
          { id: "d", label: "WACC understates the tax shield available on project-specific debt" },
        ],
        correctChoiceId: "a",
        explanation: "The firm drifts toward a portfolio riskier than intended, one apparently rational approval at a time, and the mechanism is invisible because each decision cleared the stated hurdle.",
      },
      {
        dimension: "reasoning",
        prompt: "What does the Modigliani-Miller theorem establish?",
        choices: [
          { id: "a", label: "In a frictionless world capital structure does not change firm value — loading debt makes equity riskier" },
          { id: "b", label: "Debt financing always reduces the weighted cost of capital through tax shields" },
          { id: "c", label: "Firms should maintain equal proportions of debt and equity financing" },
          { id: "d", label: "Capital structure determines value but only for firms above a certain size" },
        ],
        correctChoiceId: "a",
        explanation: "You redistribute risk rather than reduce it, so the blended cost is unchanged. Its discipline is that any claim a financing scheme creates value must name the friction it exploits — otherwise it is reshuffling risk while appearing to conjure returns.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is the cost of equity 'a judgement wearing a decimal point'?",
        choices: [
          { id: "a", label: "Beta is unstable and the equity risk premium is estimated with several points of uncertainty" },
          { id: "b", label: "Equity returns cannot be observed because shares are not always traded" },
          { id: "c", label: "The risk-free rate is unobservable in modern financial markets" },
          { id: "d", label: "Regulators require the figure to be disclosed only as a range" },
        ],
        correctChoiceId: "a",
        explanation: "CAPM's inputs are all contestable — beta measured from history that may not describe the future, a premium reasonable people differ on by points, and a model with substantial empirical problems.",
      },
      {
        dimension: "reasoning",
        prompt: "What should you conclude if a project clears at 8% and fails at 11%?",
        choices: [
          { id: "a", label: "The decision rests on an assumption nobody knows, not on the analysis" },
          { id: "b", label: "The project should proceed, since it is viable under plausible conditions" },
          { id: "c", label: "The cash flow projections require more precise estimation" },
          { id: "d", label: "The firm should refinance to bring its cost of capital below 8%" },
        ],
        correctChoiceId: "a",
        explanation: "Long-lived projects are acutely sensitive because discounting compounds, so the investment decision was effectively made by the rate assumption. The honest practice is testing the range and being explicit about what the answer depends on.",
      },
    ],
    sources: [
      { label: "Cost of capital (overview)", note: "Reference on WACC, hurdle rates and opportunity cost of capital.", type: "Reference", url: "https://en.wikipedia.org/wiki/Cost_of_capital" },
      { label: "Modigliani–Miller theorem (overview)", note: "Reference on capital structure irrelevance and its frictions.", type: "Reference", url: "https://en.wikipedia.org/wiki/Modigliani%E2%80%93Miller_theorem" },
    ],
  },
  {
    concept: "Network Effects",
    level: "University",
    summary: "value increasing as more users join",
    estimatedMinutes: 9,
    deck: "Some products get better the more people use them — a phone is useless if you are the only owner, priceless once everyone has one. Network effects are this self-reinforcing dynamic, and they are the closest thing in business to a law of gravity pulling markets toward winner-take-all.",
    keyTerms: [
      { label: "Network effect", value: "When a product becomes more valuable to each user as more users join." },
      { label: "Direct network effect", value: "Value rises directly with users of the same type (more people on a phone network)." },
      { label: "Two-sided network", value: "A platform where two groups (buyers and sellers) each attract the other." },
      { label: "Winner-take-all", value: "Markets that tip toward a single dominant player once a network lead builds." },
    ],
    sections: [
      {
        heading: "Value that grows with the crowd",
        body: [
          `A network effect exists when a product or service becomes more valuable to each user as more people use it. The classic example is the telephone: one phone is useless, because there is no one to call; two phones allow one connection; a million phones create a vast web of possible connections. The value of being on the network comes not from the device but from everyone else already on it. Social networks, messaging apps and marketplaces all work this way.`,
          `This makes network effects fundamentally different from ordinary economies of scale. Scale means a big company produces more cheaply. A network effect means the product itself gets better for users as the network grows — the value is created by the users for each other, not just by the firm. That distinction matters enormously, because it changes the competitive dynamics of an entire market.`,
        ],
      },
      {
        heading: "Direct and two-sided",
        body: [
          `Network effects come in types. A direct (or same-side) network effect is the simplest: each new user of the same kind adds value for the others, as with a phone network or a messaging app where more contacts means more usefulness. The more people on WhatsApp, the more valuable WhatsApp is to everyone on it.`,
          `More subtle are two-sided (or indirect) network effects, found in platforms connecting two different groups. A marketplace, ride-hailing app or operating system links, say, buyers and sellers, riders and drivers, or users and developers. Here each side attracts the other: more sellers draw more buyers, which draws still more sellers. These cross-side effects can be powerful but harder to start, because you often need both sides at once — the "chicken and egg" problem of building a platform from zero, where neither side wants to join until the other is already there.`,
        ],
      },
      {
        heading: "The pull toward winner-take-all",
        body: [
          `The defining consequence of strong network effects is a tendency toward "winner-take-all" or "winner-take-most" markets. Because the biggest network is the most valuable, it attracts even more users, which makes it more valuable still — a self-reinforcing loop. Beyond a certain point, the market "tips": one player pulls decisively ahead and rivals collapse, because users flock to where everyone else already is. This is why so many categories end up dominated by one or two giants.`,
          `Network effects also create formidable moats. A competitor with a better product can still lose, because it lacks the network — users will not switch to a superior app that none of their friends use. This "collective switching" problem locks users into the incumbent: any individual would have to move at the same time as everyone they connect with. The advantage compounds and defends itself, which is why network-effect businesses, once established, are among the most durable and valuable in the world.`,
        ],
      },
      {
        heading: "Not every scale is a network",
        body: [
          `Because network effects are so prized, the term is often misapplied, and a careful analyst distinguishes genuine network effects from ordinary growth. A restaurant chain with a thousand branches has scale, but your local branch is not more valuable to you because branches exist in other cities — that is scale, not a network effect. A true network effect requires that users make the product more valuable for each other, directly.`,
          `Network effects also have limits and vulnerabilities. They can weaken with congestion or declining quality (a social network overrun with spam becomes less valuable as it grows). They can run in reverse: just as growth is self-reinforcing, decline can be too, as users leaving makes a network less valuable and prompts more to leave — the collapse of once-dominant social platforms shows how a network moat can crumble fast once the tipping runs the other way. And they can be bypassed by "multi-homing", where users happily use several competing platforms at once. Network effects are powerful, but not invincible.`,
        ],
      },
      {
        heading: "Why you are stuck on the same apps",
        body: [
          `You feel network effects every time you stay on a platform you do not love because everyone else is there. You keep a messaging app because switching would mean leaving all your contacts behind; you sell on the marketplace with the most buyers, and buy where the most sellers are; you join the social network your friends use, not necessarily the best-designed one. When a clearly better app fails because no one you know is on it, that is a network-effect moat defeating a superior product. Noticing when a product's value comes from its users rather than its features — and how hard that makes it to leave — explains a great deal about which companies quietly dominate your life.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is a network effect?",
        choices: [
          { id: "a", label: "When a company produces goods more cheaply at large scale" },
          { id: "b", label: "When a product becomes more valuable to each user as more people use it" },
          { id: "c", label: "When a firm advertises on many channels" },
          { id: "d", label: "When a product's price falls over time" },
        ],
        correctChoiceId: "b",
        explanation: "A network effect means value rises with the number of users — like a phone network, where the worth comes from everyone else already connected, not the device itself.",
      },
      {
        dimension: "reasoning",
        prompt: "How does a network effect differ from an ordinary economy of scale?",
        choices: [
          { id: "a", label: "Scale makes production cheaper; a network effect makes the product itself better for users as more join" },
          { id: "b", label: "They are exactly the same thing" },
          { id: "c", label: "A network effect only reduces costs" },
          { id: "d", label: "Scale means users create value for each other" },
        ],
        correctChoiceId: "a",
        explanation: "Economies of scale lower the firm's costs; a network effect means users create value for one another, so the product improves as the network grows — a different dynamic with different competitive consequences.",
      },
      {
        dimension: "depth",
        prompt: "What is a 'two-sided' network effect?",
        choices: [
          { id: "a", label: "When one user counts twice" },
          { id: "b", label: "When a platform links two groups (like buyers and sellers) and each side attracts the other" },
          { id: "c", label: "When a product is sold in two countries" },
          { id: "d", label: "When a firm has two owners" },
        ],
        correctChoiceId: "b",
        explanation: "Two-sided (indirect) network effects arise on platforms connecting two groups — buyers and sellers, riders and drivers — where more of one side draws more of the other, creating the 'chicken and egg' challenge of starting from zero.",
      },
      {
        dimension: "reasoning",
        prompt: "Why do strong network effects tend to produce 'winner-take-all' markets?",
        choices: [
          { id: "a", label: "Because the biggest network is the most valuable, attracting more users in a self-reinforcing loop until the market tips to one player" },
          { id: "b", label: "Because regulators require a single winner" },
          { id: "c", label: "Because small networks are always better" },
          { id: "d", label: "Because users prefer variety above all" },
        ],
        correctChoiceId: "a",
        explanation: "The largest network is most valuable, drawing still more users and value; past a tipping point one player pulls decisively ahead and rivals collapse, since users flock to where everyone else already is.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is a thousand-branch restaurant chain scale rather than a true network effect?",
        choices: [
          { id: "a", label: "Because branches in other cities do not make your local branch more valuable to you; users must make the product better for each other directly" },
          { id: "b", label: "Because restaurants cannot have advantages" },
          { id: "c", label: "Because scale and network effects are identical" },
          { id: "d", label: "Because chains never grow" },
        ],
        correctChoiceId: "a",
        explanation: "A true network effect requires users to make the product more valuable for one another directly; a chain's far-off branches give it scale, but your local branch is no more valuable to you because of them.",
      },
    ],
    sources: [
      { label: "Network effect (overview)", note: "Reference on direct, two-sided effects and winner-take-all dynamics.", type: "Reference", url: "https://en.wikipedia.org/wiki/Network_effect" },
      { label: "OpenStax Principles of Management", note: "Open textbook on competition and platform strategy.", type: "Textbook", url: "https://openstax.org/details/books/principles-management" },
    ],
  },
  {
    concept: "Principal-Agent Problem",
    level: "University",
    summary: "misaligned incentives between owners, managers and workers",
    estimatedMinutes: 9,
    deck: "The moment you hire someone to act on your behalf, a hidden problem appears: their interests are not quite yours, and you cannot fully see what they do. The principal-agent problem is this gap, and it quietly shapes everything from executive pay to why your estate agent might not get you the best price.",
    keyTerms: [
      { label: "Principal and agent", value: "The principal hires the agent to act on their behalf, but their interests differ." },
      { label: "Information asymmetry", value: "The agent knows more about their own actions and effort than the principal can see." },
      { label: "Moral hazard", value: "The agent takes hidden actions in their own interest at the principal's expense." },
      { label: "Incentive alignment", value: "Designing rewards so the agent's interest matches the principal's." },
    ],
    sections: [
      {
        heading: "When someone acts for you",
        body: [
          `The principal-agent problem arises whenever one party (the principal) hires another (the agent) to act on their behalf, but the two have different interests and the principal cannot perfectly observe what the agent does. The agent is supposed to serve the principal's goals, but naturally has their own — and given the chance, may pursue their own at the principal's expense. This simple structure appears throughout economic life.`,
          `Shareholders (principals) hire executives (agents) to run their company, but executives may prefer empire-building, comfort or their own bonuses over shareholder value. Employers hire employees who may prefer an easy life to maximum effort. You hire a builder, a lawyer, a financial adviser or an estate agent, each of whom knows more than you and may not have your interests fully at heart. Once you see the pattern, it is everywhere someone acts on behalf of someone else.`,
        ],
      },
      {
        heading: "The information gap",
        body: [
          `What makes the problem hard is information asymmetry: the agent knows far more about their own actions, effort and knowledge than the principal can observe. You cannot watch your fund manager's every decision, verify how hard your employee is really working, or know whether your mechanic's recommended repair is necessary. This gap gives the agent room to act in their own interest without being caught.`,
          `Economists distinguish two flavours. "Moral hazard" is hidden action: after the deal, the agent takes actions the principal cannot see, like shirking effort or taking excessive risks with someone else's money. "Adverse selection" is hidden information before the deal: the agent knows something relevant (their true ability, the true state of a used car) that the principal does not. Both stem from the same root — the principal cannot see everything — and both let the agent's interests quietly override the principal's.`,
        ],
      },
      {
        heading: "Aligning incentives",
        body: [
          `The main defence against the principal-agent problem is incentive alignment: structuring the agent's rewards so that acting in their own interest also serves the principal's. If you pay a salesperson commission, selling more (good for you) also earns them more (good for them). Paying executives partly in company shares is meant to tie their wealth to shareholder value, so that what enriches them enriches the owners too.`,
          `But aligning incentives is genuinely hard, and clumsy attempts backfire. Reward executives on the share price and they may chase short-term boosts or manipulate results rather than build long-term value. Pay a surgeon per operation and you may get unnecessary surgery; pay a call-centre worker on call volume and you get rushed, useless calls. This is the trap of measuring the wrong thing: agents optimise exactly what you reward, so a poorly chosen incentive produces behaviour that hits the metric while betraying the goal — the same "you get what you measure" lesson that haunts management everywhere.`,
        ],
      },
      {
        heading: "Monitoring and its costs",
        body: [
          `The other defence is monitoring: watching the agent more closely to reduce the information gap — audits, performance reviews, reporting requirements, inspectors. Monitoring can genuinely curb bad behaviour, but it is never free and never complete. It costs money and time, it can never see everything, and heavy surveillance can itself demotivate good agents and signal distrust, sometimes making performance worse.`,
          `These unavoidable costs of the problem — the losses from agents pursuing their own interests, plus the money spent on incentives and monitoring to limit it — are called "agency costs", and they are a real and pervasive drag on organisations and economies. There is no perfect solution, only a balance: enough incentive alignment and monitoring to keep agents roughly on side, without spending more on the cure than the disease. Recognising the principal-agent problem is the first step to designing arrangements — contracts, pay structures, oversight — that manage it sensibly rather than pretending it away.`,
        ],
      },
      {
        heading: "Why your estate agent may not be on your side",
        body: [
          `You are a principal more often than you think, and the problem bites. Your estate agent earns commission on the sale, but their cut of a slightly higher price is tiny compared with the extra effort and delay, so they may push you to accept a quick, lower offer that suits them more than you. A mechanic paid for repairs has reason to find repairs; a financial adviser paid commission may favour products that pay them best. None of this requires villains — just ordinary people whose incentives differ from yours, and who know more than you do. Asking 'how is this person actually paid, and do their interests match mine?' before trusting an agent is one of the most practical pieces of economics you can carry into everyday life.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "When does the principal-agent problem arise?",
        choices: [
          { id: "a", label: "Only in government organisations" },
          { id: "b", label: "Whenever a principal hires an agent to act for them but their interests differ and the principal cannot fully observe the agent" },
          { id: "c", label: "Only when the agent is dishonest" },
          { id: "d", label: "Only in very large companies" },
        ],
        correctChoiceId: "b",
        explanation: "The problem appears whenever one party acts on another's behalf with differing interests and imperfect observation — shareholders and executives, employers and employees, you and your builder or adviser.",
      },
      {
        dimension: "depth",
        prompt: "What is 'information asymmetry' in this context?",
        choices: [
          { id: "a", label: "The agent knows more about their own actions and effort than the principal can observe" },
          { id: "b", label: "Both parties have exactly the same information" },
          { id: "c", label: "The principal always knows more than the agent" },
          { id: "d", label: "Information that is publicly available to everyone" },
        ],
        correctChoiceId: "a",
        explanation: "The agent knows more about their own effort, actions and knowledge than the principal can see — you cannot watch a fund manager's every move — giving the agent room to serve their own interest unseen.",
      },
      {
        dimension: "depth",
        prompt: "What is 'moral hazard'?",
        choices: [
          { id: "a", label: "Hidden action after a deal, where the agent shirks or takes risks the principal cannot see" },
          { id: "b", label: "The principal cheating the agent" },
          { id: "c", label: "A morally good outcome" },
          { id: "d", label: "Information revealed before a deal" },
        ],
        correctChoiceId: "a",
        explanation: "Moral hazard is hidden action: after the agreement, the agent takes actions the principal cannot observe — shirking effort or taking excessive risks with someone else's money.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can paying executives on the share price backfire as incentive alignment?",
        choices: [
          { id: "a", label: "Because agents optimise exactly what is rewarded, so they may chase short-term boosts or manipulate results rather than build long-term value" },
          { id: "b", label: "Because shares have no value" },
          { id: "c", label: "Because executives ignore all incentives" },
          { id: "d", label: "Because alignment is always impossible" },
        ],
        correctChoiceId: "a",
        explanation: "Poorly chosen incentives produce behaviour that hits the metric while betraying the goal — rewarding the share price can drive short-term manipulation, the same 'you get what you measure' trap seen across management.",
      },
      {
        dimension: "reasoning",
        prompt: "What are 'agency costs'?",
        choices: [
          { id: "a", label: "The losses from agents pursuing their own interests, plus the cost of incentives and monitoring to limit it" },
          { id: "b", label: "The fee charged by a recruitment agency" },
          { id: "c", label: "The salary of every employee" },
          { id: "d", label: "The cost of advertising" },
        ],
        correctChoiceId: "a",
        explanation: "Agency costs combine the losses from misaligned agents and the money spent on incentives and monitoring to curb them — a pervasive drag managed by balancing alignment and oversight without spending more than the problem costs.",
      },
    ],
    sources: [
      { label: "Principal–agent problem (overview)", note: "Reference on agency, information asymmetry and moral hazard.", type: "Reference", url: "https://en.wikipedia.org/wiki/Principal%E2%80%93agent_problem" },
      { label: "OpenStax Principles of Management", note: "Open textbook on incentives, governance and organisations.", type: "Textbook", url: "https://openstax.org/details/books/principles-management" },
    ],
  },
];

export const businessLessons = buildAuthoredLessons("business", business);
