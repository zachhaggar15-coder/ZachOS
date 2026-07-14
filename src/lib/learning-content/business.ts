import { buildAuthoredLessons, type AuthoredLesson } from "./types";

// Ten hand-written Business lessons: researched, concept-specific prose with
// real frameworks and examples, each closing on an everyday-life example, plus
// genuine recall quizzes.
const business: AuthoredLesson[] = [
  {
    concept: "Value Proposition",
    level: "GCSE",
    summary: "the promise of useful value to a specific customer",
    estimatedMinutes: 7,
    deck: "Every business lives or dies on one sentence it may never write down: why should this particular customer care? A value proposition is that promise made explicit — and most struggling products fail not at execution but here, at being unable to say clearly what value they offer, to whom.",
    keyTerms: [
      { label: "Value proposition", value: "The clear promise of the value a product delivers to a specific customer." },
      { label: "Target customer", value: "The specific group whose problem the product is built to solve." },
      { label: "Jobs, pains, gains", value: "The customer's task to do, the frustrations to relieve, and the benefits sought." },
      { label: "Differentiation", value: "Why a customer should choose this offer over the alternatives." },
    ],
    sections: [
      {
        heading: "The one sentence that matters",
        body: [
          `A value proposition is the promise at the heart of any product or service: the value it offers, to whom, and why that value matters. Stripped down, it answers a single blunt question a customer is always asking, even silently — why should I care? A business that cannot answer that clearly has a problem no amount of marketing or hard work will fix, because there is nothing solid underneath to sell.`,
          `Crucially, a value proposition is about the customer's benefit, not the product's features. Customers do not want a drill; they want a hole in the wall, and really they want the shelf that hangs from it. A strong value proposition speaks in terms of the outcome the customer gets — time saved, money made, a problem removed, a desire fulfilled — not the technical specifications the company is proud of.`,
        ],
      },
      {
        heading: "Value for whom",
        body: [
          `A value proposition is meaningless without a specific target customer. "Everyone" is not a customer, and a promise aimed at everyone usually appeals strongly to no one. The same product offers different value to different people: a fast, no-frills meal is valuable to a rushed commuter and worthless to someone seeking a relaxed evening out. Naming the specific customer is what lets the value become sharp.`,
          `This is why the discipline of segmentation — identifying distinct customer groups — comes first. Once you know exactly who you are serving, you can articulate value that genuinely resonates with them and ignore the noise of trying to please everyone. A precise value proposition sounds like "for busy parents who have no time to cook, we deliver healthy meals ready in five minutes" — a specific person, a specific problem, a specific promise.`,
        ],
      },
      {
        heading: "Jobs, pains and gains",
        body: [
          `A useful way to build a value proposition, popularised by Alexander Osterwalder's value proposition canvas, is to study the customer through three lenses. What "jobs" are they trying to get done (functional, social or emotional tasks)? What "pains" frustrate them along the way — costs, risks, annoyances, obstacles? And what "gains" do they hope for — benefits, savings, delights? A strong proposition maps directly onto these: it helps the customer do their job, relieves specific pains, and creates concrete gains.`,
          `Framing it this way keeps the focus on the customer's reality rather than the company's assumptions. Many products fail because they solve a problem the founders found interesting rather than one customers actually feel. Anchoring the value proposition in the customer's genuine jobs, pains and gains is the difference between a solution looking for a problem and a product people will pay for.`,
        ],
      },
      {
        heading: "Why choose you",
        body: [
          `A value proposition must also answer why the customer should choose you over the alternatives — including the alternative of doing nothing. Customers always have options: rivals, substitutes, or simply carrying on as they are. If your offer is not clearly better on something they care about — cheaper, faster, easier, nicer, more trustworthy — there is no reason to switch. This is differentiation: the part of your value that competitors do not match.`,
          `The best test of a value proposition is whether it is specific and, ideally, testable. Vague claims ("high quality", "great service", "innovative solutions") are what everyone says and mean nothing. A sharp proposition makes a concrete promise you could check: this saves you two hours a week, this is half the price, this arrives in five minutes. If you cannot state your value in a way a sceptical customer could verify, you have not yet found it.`,
        ],
      },
      {
        heading: "The value proposition in your CV",
        body: [
          `You pitch value propositions constantly, even about yourself. A CV that lists tasks you performed is a feature list; one that shows the value you delivered — saved the team ten hours a week, grew sales by a fifth — is a value proposition aimed at a specific target customer, the employer. The same is true when you recommend a restaurant, ask for a pay rise, or persuade a friend to try something: the persuasive version always answers "why should you care, and why this over the alternatives?" Learning to state value clearly, in terms of the other person's benefit rather than your own features, is a skill that reaches far beyond business.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What does a value proposition fundamentally express?",
        choices: [
          { id: "a", label: "A list of a product's technical features" },
          { id: "b", label: "The promise of value a product offers, to whom, and why it matters" },
          { id: "c", label: "The company's internal mission statement" },
          { id: "d", label: "The price of the product" },
        ],
        correctChoiceId: "b",
        explanation: "A value proposition answers the customer's silent question 'why should I care?' — the value offered, to which specific customer, and why it matters — expressed as their benefit, not the product's features.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is a value proposition aimed at 'everyone' usually weak?",
        choices: [
          { id: "a", label: "Because a promise aimed at everyone appeals strongly to no one; value must be specific to a target customer" },
          { id: "b", label: "Because large markets are always unprofitable" },
          { id: "c", label: "Because everyone wants the same thing" },
          { id: "d", label: "Because targeting is illegal" },
        ],
        correctChoiceId: "a",
        explanation: "The same product offers different value to different people, so a proposition for 'everyone' becomes generic. Naming a specific customer and their specific problem is what makes the value sharp.",
      },
      {
        dimension: "reasoning",
        prompt: "In Osterwalder's framing, why start from the customer's 'jobs, pains and gains'?",
        choices: [
          { id: "a", label: "Because it keeps focus on the customer's real needs rather than the company's assumptions" },
          { id: "b", label: "Because it lists the product's features" },
          { id: "c", label: "Because it sets the price automatically" },
          { id: "d", label: "Because it ignores what customers want" },
        ],
        correctChoiceId: "a",
        explanation: "Mapping the customer's tasks, frustrations and desired benefits anchors the proposition in their reality — the difference between a solution looking for a problem and a product people will actually pay for.",
      },
      {
        dimension: "depth",
        prompt: "What role does differentiation play in a value proposition?",
        choices: [
          { id: "a", label: "It answers why the customer should choose you over rivals and over doing nothing" },
          { id: "b", label: "It makes the product identical to competitors" },
          { id: "c", label: "It sets the internal budget" },
          { id: "d", label: "It has no role at all" },
        ],
        correctChoiceId: "a",
        explanation: "Customers always have alternatives, including doing nothing; differentiation is the part of your value competitors do not match, giving the customer a reason to choose you.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the best test of a strong value proposition?",
        choices: [
          { id: "a", label: "That it uses impressive-sounding words like 'innovative'" },
          { id: "b", label: "That it makes a specific, concrete promise a sceptical customer could verify" },
          { id: "c", label: "That it is as vague as possible to appeal widely" },
          { id: "d", label: "That it lists every feature" },
        ],
        correctChoiceId: "b",
        explanation: "Vague claims like 'high quality' are what everyone says; a sharp proposition makes a concrete, checkable promise — saves two hours a week, half the price, arrives in five minutes.",
      },
    ],
    sources: [
      { label: "OpenStax Principles of Management", note: "Open textbook covering value, customers and strategy.", type: "Textbook", url: "https://openstax.org/details/books/principles-management" },
      { label: "Osterwalder, Value Proposition Design", note: "The jobs–pains–gains framework for designing value.", type: "Reference", url: "https://en.wikipedia.org/wiki/Value_proposition" },
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
    concept: "Operations",
    level: "GCSE",
    summary: "the repeatable system that turns inputs into outputs",
    estimatedMinutes: 7,
    deck: "Strategy decides what a business should do; operations is the machine that actually does it, over and over. It is the least glamorous part of business and often the most decisive — because a great idea delivered by a broken process still fails.",
    keyTerms: [
      { label: "Operations", value: "The repeatable system that turns inputs into the products or services customers receive." },
      { label: "Process", value: "The sequence of steps by which work gets done." },
      { label: "Bottleneck", value: "The slowest step that limits the throughput of the whole system." },
      { label: "Throughput", value: "The rate at which a system produces finished output." },
    ],
    sections: [
      {
        heading: "The machine behind the promise",
        body: [
          `Operations is how an organisation actually produces and delivers its product or service — the repeatable system that turns inputs (materials, labour, information, money) into outputs (the things customers receive). If strategy is the plan, operations is the execution: the day-to-day machine that must run reliably, again and again, for the business to deliver on its promises.`,
          `It is easy to overlook because it is unglamorous, but operations is often where businesses truly win or lose. A brilliant product with unreliable delivery, a restaurant with wonderful food but chaotic service, a service company that cannot handle demand — all fail at operations, no matter how good the underlying idea. Excellence in operations, meanwhile, can itself be a competitive advantage, letting a firm deliver faster, cheaper or more reliably than rivals.`,
        ],
      },
      {
        heading: "Thinking in processes",
        body: [
          `The core unit of operations is the process: a defined sequence of steps by which work gets done. Making a coffee, fulfilling an online order, onboarding a new customer, treating a patient — each is a process with stages, handoffs and resources. Mapping a process, step by step, is the first move in improving it, because it makes visible where time is spent, where work waits, and where things go wrong.`,
          `Thinking in processes reframes problems productively. When something fails repeatedly — orders lost, customers frustrated, quality inconsistent — the instinct is to blame people, but the more useful question is usually what in the process allowed the failure. A good process makes it easy to do the right thing and hard to do the wrong thing; a bad process sets even capable people up to fail. Fixing the system usually beats exhorting the individuals.`,
        ],
      },
      {
        heading: "The tyranny of the bottleneck",
        body: [
          `The single most powerful idea in operations is the bottleneck: the slowest step in a process, which limits the output of the whole system. A chain is only as strong as its weakest link, and a process can only produce as fast as its slowest stage, no matter how quick the others are. If a kitchen can prep ingredients fast but has only one oven, the oven is the bottleneck, and the whole kitchen's output is capped by it.`,
          `This has a sharp practical consequence, central to Eliyahu Goldratt's "Theory of Constraints": improving anything other than the bottleneck barely helps. Speeding up a non-bottleneck step just means work piles up waiting at the constraint. To increase the throughput of the whole system, you must find and improve the bottleneck specifically. Once you relieve it, the bottleneck moves somewhere else, and you repeat. Finding the true constraint is one of the most valuable skills in running any operation.`,
        ],
      },
      {
        heading: "Flow, waste and improvement",
        body: [
          `Great operations is largely about smooth flow and the removal of waste. The Toyota Production System, the origin of "lean" thinking, revolutionised manufacturing by relentlessly eliminating waste — anything that consumes resources without adding value for the customer, such as overproduction, waiting, unnecessary movement, defects and excess inventory. Work that flows steadily, without piling up or stalling, is faster, cheaper and higher quality.`,
          `This drive for continuous improvement — the Japanese term is "kaizen" — treats operations as never finished, always being refined. It also reveals a subtle truth: keeping every worker and machine 100% busy is often counterproductive, because it creates inventory and delays everywhere except the bottleneck. The goal is not maximum busyness but maximum flow of finished output. Good operations optimises the whole system, not each part in isolation.`,
        ],
      },
      {
        heading: "The bottleneck in your morning",
        body: [
          `You run operations every day, and you can feel the bottleneck. If your morning routine is always slow, there is usually one constraint — the single bathroom, the slow kettle, the app that takes forever to load — and speeding up anything else barely helps; work just waits at the real bottleneck. The same is true for a group project stalled on one person, or a kitchen where everyone waits for the oven. Once you learn to spot the single slowest step that caps the whole system, you stop wasting effort optimising the fast parts and fix the thing that actually limits you — the most useful operations habit there is.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What are 'operations' in a business?",
        choices: [
          { id: "a", label: "The plan for which markets to enter" },
          { id: "b", label: "The repeatable system that turns inputs into the products or services customers receive" },
          { id: "c", label: "The company's advertising campaigns" },
          { id: "d", label: "The share price over time" },
        ],
        correctChoiceId: "b",
        explanation: "Operations is the execution machine — the repeatable system converting inputs into outputs. If strategy is the plan, operations is the day-to-day delivery that must run reliably.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is it often more useful to fix the process than to blame the people when something repeatedly fails?",
        choices: [
          { id: "a", label: "Because a bad process sets even capable people up to fail, while a good one makes the right thing easy" },
          { id: "b", label: "Because people are never responsible for anything" },
          { id: "c", label: "Because processes cannot be changed" },
          { id: "d", label: "Because blaming people is always cheaper" },
        ],
        correctChoiceId: "a",
        explanation: "Repeated failures usually point to what in the process allowed them; a good process makes the right thing easy and the wrong thing hard, so fixing the system typically beats exhorting individuals.",
      },
      {
        dimension: "depth",
        prompt: "What is a 'bottleneck' in a process?",
        choices: [
          { id: "a", label: "The fastest step in the process" },
          { id: "b", label: "The slowest step, which limits the output of the whole system" },
          { id: "c", label: "The cheapest step" },
          { id: "d", label: "The final step only" },
        ],
        correctChoiceId: "b",
        explanation: "A bottleneck is the slowest stage; like a chain's weakest link, it caps how fast the whole process can produce, no matter how quick the other steps are.",
      },
      {
        dimension: "reasoning",
        prompt: "According to the Theory of Constraints, why does improving a non-bottleneck step barely help?",
        choices: [
          { id: "a", label: "Because faster non-bottleneck steps just pile up work waiting at the constraint" },
          { id: "b", label: "Because non-bottleneck steps are unimportant" },
          { id: "c", label: "Because bottlenecks never change" },
          { id: "d", label: "Because all steps are equally fast" },
        ],
        correctChoiceId: "a",
        explanation: "Speeding up a step that is not the constraint only creates work waiting at the bottleneck; to raise the whole system's throughput you must improve the bottleneck itself, then repeat as it moves.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is keeping every worker and machine 100% busy often counterproductive?",
        choices: [
          { id: "a", label: "Because it creates inventory and delays everywhere except the bottleneck; the goal is flow of finished output, not busyness" },
          { id: "b", label: "Because busy workers are always unhappy" },
          { id: "c", label: "Because idleness is always better" },
          { id: "d", label: "Because it reduces the number of bottlenecks to zero" },
        ],
        correctChoiceId: "a",
        explanation: "Maximising busyness at non-bottleneck steps piles up work-in-progress and delays; lean thinking optimises the whole system's flow of finished output rather than the local busyness of each part.",
      },
    ],
    sources: [
      { label: "Eliyahu Goldratt, The Goal", note: "The Theory of Constraints and the power of the bottleneck.", type: "Reference", url: "https://en.wikipedia.org/wiki/Theory_of_constraints" },
      { label: "OpenStax Principles of Management", note: "Open textbook on operations and process management.", type: "Textbook", url: "https://openstax.org/details/books/principles-management" },
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
    concept: "Cash Flow",
    level: "GCSE",
    summary: "timing and movement of cash through the organisation",
    estimatedMinutes: 7,
    deck: "Profit is an opinion; cash is a fact. A business can be profitable on paper and still collapse because it runs out of money at the wrong moment. Cash flow — the actual timing of money in and out — is what keeps the lights on, which is why they say cash is king.",
    keyTerms: [
      { label: "Cash flow", value: "The actual movement of money into and out of a business over time." },
      { label: "Profit vs cash", value: "Profit is revenue minus costs on paper; cash is money actually in the bank." },
      { label: "Working capital", value: "The cash tied up in running the business day to day." },
      { label: "Insolvency", value: "Being unable to pay debts as they fall due, even if profitable on paper." },
    ],
    sections: [
      {
        heading: "Profit is not cash",
        body: [
          `One of the most important and counterintuitive truths in business is that profit and cash are not the same thing. Profit is an accounting measure: revenue minus costs over a period, on paper. Cash is the actual money in the bank right now. A business can be profitable and still have no cash, or have plenty of cash while making a loss. Confusing the two has killed countless otherwise sound businesses.`,
          `The gap opens because of timing. Accounting often records a sale as revenue the moment it is made, even if the customer will not pay for 60 days. Meanwhile the business must pay its suppliers, staff and rent now. So a firm can be "profitable" — its sales exceed its costs on paper — while its bank account runs dry waiting for customers to pay. Profit tells you whether the business model works over time; cash tells you whether you can survive until then.`,
        ],
      },
      {
        heading: "Why timing kills",
        body: [
          `Because bills must be paid when they fall due, timing is everything. A business becomes insolvent — and can be forced to close — when it cannot pay its debts on time, regardless of how profitable it looks on paper. This is why cash flow, not profit, is the immediate life-or-death measure. The saying captures it: "Revenue is vanity, profit is sanity, but cash is king."`,
          `The danger is sharpest for growing businesses, which is deeply counterintuitive. Rapid growth often consumes cash faster than it generates it: you must buy more stock, hire more people and fund more unpaid customer invoices before the money from all that growth arrives. A fast-growing, profitable company can run out of cash and fail — "overtrading" — precisely because it is succeeding. Growth is hungry for cash, and forgetting that has sunk many promising firms.`,
        ],
      },
      {
        heading: "Working capital",
        body: [
          `The cash tied up in the day-to-day running of a business is called working capital, and managing it is central to healthy cash flow. Money gets locked up in unsold stock (inventory) and in invoices customers have not yet paid (receivables); it is freed up by delaying payments to your own suppliers (payables). The longer the gap between paying out cash and getting it back in, the more cash the business needs just to keep operating.`,
          `Managing cash flow is largely about managing this cycle: collecting money from customers faster, holding less idle stock, and negotiating sensible payment terms with suppliers. Small improvements in timing can free up large amounts of cash. A well-run business watches not just whether it is profitable, but how quickly cash cycles through it — because the faster cash comes back, the less the business must borrow or hold in reserve to survive.`,
        ],
      },
      {
        heading: "Forecasting to survive",
        body: [
          `Because running out of cash is fatal and often creeps up unseen, businesses forecast their cash flow: projecting when money will actually come in and go out over coming weeks and months, to spot any moment when the balance would go negative. A cash-flow forecast can reveal a looming crunch — say, a big tax bill due before a major customer pays — in time to arrange a loan, chase invoices, or delay a purchase. Without it, a solvent-looking business can be blindsided by a gap it never saw coming.`,
          `This forward-looking discipline is what separates businesses that survive rough patches from those that fold at the first shock. Profit can be reported once a year; cash must be watched constantly. The firms that endure are usually not the flashiest but the ones that never let their cash position surprise them — keeping a buffer, understanding their cycle, and always knowing roughly how long they could survive if the money stopped coming in.`,
        ],
      },
      {
        heading: "Your own cash-flow crunch",
        body: [
          `You live cash flow whenever your bank balance and your finances disagree. You might be comfortably 'in profit' over the month — earning more than you spend — yet still get caught short when rent, a bill and an annual subscription all land before payday. That is a cash-flow problem, not a profit problem, and the fix is timing: a buffer, or shifting when money moves. The same logic explains why a friend can earn well and still be broke mid-month, or why a growing small business can be busy, profitable and yet unable to make payroll. Watching the timing of money in and out, not just the totals, is the everyday version of the discipline that keeps businesses alive.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is the key difference between profit and cash?",
        choices: [
          { id: "a", label: "They are the same thing measured twice" },
          { id: "b", label: "Profit is revenue minus costs on paper; cash is the money actually in the bank now" },
          { id: "c", label: "Profit is always larger than cash" },
          { id: "d", label: "Cash only matters for large firms" },
        ],
        correctChoiceId: "b",
        explanation: "Profit is an accounting measure over a period; cash is money actually available now. A firm can be profitable yet cashless, or cash-rich yet loss-making — confusing the two has killed many businesses.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can a profitable business still be forced to close?",
        choices: [
          { id: "a", label: "Because it becomes insolvent if it cannot pay its debts when they fall due, regardless of paper profit" },
          { id: "b", label: "Because profit automatically means bankruptcy" },
          { id: "c", label: "Because customers dislike profitable firms" },
          { id: "d", label: "Because profit is illegal" },
        ],
        correctChoiceId: "a",
        explanation: "Bills must be paid on time; a firm that cannot meet its debts as they fall due is insolvent and can be forced to close, even while profitable on paper — which is why cash is the immediate life-or-death measure.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is rapid growth especially dangerous for cash flow?",
        choices: [
          { id: "a", label: "Because growth often consumes cash — for stock, staff and unpaid invoices — before the money from it arrives" },
          { id: "b", label: "Because growth reduces the need for cash" },
          { id: "c", label: "Because growing firms never have costs" },
          { id: "d", label: "Because customers pay faster when a firm grows" },
        ],
        correctChoiceId: "a",
        explanation: "Growth is hungry for cash: you must buy more stock, hire, and fund unpaid customer invoices before the growth money comes in, so a fast-growing profitable firm can run out of cash ('overtrading') precisely because it is succeeding.",
      },
      {
        dimension: "depth",
        prompt: "What is 'working capital'?",
        choices: [
          { id: "a", label: "The cash tied up in the day-to-day running of the business, such as stock and unpaid invoices" },
          { id: "b", label: "The salary of the workforce" },
          { id: "c", label: "The value of the company's buildings" },
          { id: "d", label: "The total profit for the year" },
        ],
        correctChoiceId: "a",
        explanation: "Working capital is cash locked in inventory and receivables (and freed by payables); the longer the gap between paying out and getting cash back, the more the business needs just to keep operating.",
      },
      {
        dimension: "reasoning",
        prompt: "Why do businesses forecast their cash flow?",
        choices: [
          { id: "a", label: "To spot in advance any moment the cash balance would go negative and act before a crunch hits" },
          { id: "b", label: "To calculate their annual profit" },
          { id: "c", label: "To decide the company logo" },
          { id: "d", label: "Because forecasting has no practical value" },
        ],
        correctChoiceId: "a",
        explanation: "A cash-flow forecast projects when money comes in and goes out, revealing a looming crunch — like a tax bill due before a customer pays — in time to arrange a loan or chase invoices, so a solvent firm is not blindsided.",
      },
    ],
    sources: [
      { label: "Cash flow (overview)", note: "Reference on cash flow, profit, working capital and insolvency.", type: "Reference", url: "https://en.wikipedia.org/wiki/Cash_flow" },
      { label: "OpenStax Principles of Management", note: "Open textbook covering finance and financial decisions.", type: "Textbook", url: "https://openstax.org/details/books/principles-management" },
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
