import { buildAuthoredLessons, type AuthoredLesson } from "./types";

// Ten hand-written Marketing lessons: researched, concept-specific prose with
// real frameworks and examples, each closing on an everyday-life example, plus
// genuine recall quizzes.
const marketing: AuthoredLesson[] = [
  {
    concept: "The Double Jeopardy Law",
    level: "University",
    summary: "the empirical regularity that demolishes most of what brands believe about loyalty",
    estimatedMinutes: 9,
    deck: "Every brand wants to be the small one with fanatical customers. The data says that brand does not exist. Across categories, countries and decades, small brands have fewer buyers who are also less loyal — punished twice — and loyalty turns out to be almost entirely a consequence of size rather than a cause of it.",
    keyTerms: [
      { label: "Double jeopardy", value: "The regularity that small brands have both fewer buyers and lower loyalty among them." },
      { label: "Penetration", value: "How many people buy a brand at all — the variable that actually differs between brands." },
      { label: "The Dirichlet model", value: "The statistical model predicting brand performance metrics from market share alone." },
      { label: "Ehrenberg-Bass", value: "The institute whose empirical work established these laws across thousands of datasets." },
    ],
    sections: [
      {
        heading: "The regularity nobody wanted",
        body: [
          `Andrew Ehrenberg's work, extended by Byron Sharp's institute, rests on a pattern found so consistently that it is treated as a law: plot brands by market share and both their penetration (how many people buy them) and their loyalty (how often each buyer buys) rise together. Small brands are jeopardised twice — fewer customers, and those customers buy them less often. The pattern holds across packaged goods, cars, banks, airlines, retailers and services, in every market examined, over decades.`,
          `This is fatal to a story marketing tells constantly. The romantic ideal is the small brand with a devoted following: modest reach, extraordinary loyalty, a fierce niche. The data says this brand essentially does not exist at scale, and where a brand appears to have unusually high loyalty for its size, it almost always turns out to be a niche defined by restricted availability or a narrow functional need rather than by devotion. The apparent exceptions are usually measurement artefacts, which is the strongest possible position for an empirical generalisation to be in.`,
        ],
      },
      {
        heading: "Why loyalty is an effect, not a cause",
        body: [
          `The causal reading matters enormously and is routinely inverted. The instinctive story is that loyalty produces share: build devotion, and the devoted buy more, and the brand grows. Double jeopardy suggests the reverse — loyalty is largely what happens to you when you are big. A large brand is bought more often per buyer because it is available everywhere, salient, and the default that comes to mind, not because its buyers love it more. Loyalty metrics are therefore mostly a lagging readout of size.`,
          `The strategic consequence is uncomfortable for most marketing departments. If loyalty follows penetration, then attempting to grow by increasing loyalty among existing customers is pushing on the wrong variable — you are trying to move the effect while leaving the cause alone. Sharp's conclusion, drawn directly from the data, is that brands grow almost exclusively by increasing penetration: reaching more buyers, most of whom will be light buyers who purchase rarely. The mass of light buyers, individually unremarkable, collectively dominate a brand's volume, and they are where growth comes from.`,
        ],
      },
      {
        heading: "What the Dirichlet model does",
        body: [
          `The framework is not merely a correlation but a working predictive model. The Dirichlet, fitted with almost no brand-specific information, predicts a brand's penetration, purchase frequency, repeat rate, share of category requirements and duplication of purchase with other brands — from market share and category characteristics alone. It works. Fed real category data, it produces the observed numbers closely enough that deviations are notable events requiring explanation.`,
          `The implication is deflationary and worth sitting with. If a model that knows nothing about your brand's positioning, advertising, personality or customer relationships can predict its loyalty metrics from share, then those metrics are not measuring what marketers believe. A brand manager celebrating a repeat-purchase rate is celebrating a number the model would have told them from share alone. This is the empirical tradition's real challenge: not that marketing does not matter, but that most of what it measures is determined by size and therefore reveals nothing about the marketing.`,
        ],
      },
      {
        heading: "The disputes, and what they concede",
        body: [
          `The framework is contested and the criticisms are worth taking seriously. It is drawn heavily from mature, repertoire-based categories — packaged goods where people buy several brands habitually — and generalises less cleanly to subscription businesses with genuine switching costs, luxury goods, or B2B relationships with long contracts and few buyers. Critics note that the laws describe steady states and are least informative about the disruption and category creation marketers most want to cause.`,
          `There is also a real argument about whether the framework proves too much: if brand performance is predicted by share, and share moves slowly, the model risks implying that little a marketer does matters, which is a strange conclusion and probably not what Sharp intends. The honest position is that the laws are strongly established in the categories where they were tested, that they demolish specific widespread beliefs about loyalty and segmentation, and that their scope is narrower than their most enthusiastic advocates claim. That is still a substantial result: an empirical tradition that reliably kills a popular idea has done more than most marketing theory manages.`,
        ],
      },
      {
        heading: "Why your favourite brand is not special",
        body: [
          `Check the claim against yourself. You probably believe you are loyal to certain brands, and in a sense you are — but look at what you actually bought over the last year in any category and you will find a repertoire rather than a devotion: several brands, one bought most often, and that one is usually the big available default. Now notice what this means for the brands you barely think about: you are a light buyer of many things, and to those companies you are the growth. The counterintuitive management lesson generalises past marketing — when a metric moves with size, celebrating it tells you nothing about whether you did anything well, and the first question about any number is whether a model that knew nothing about you could have predicted it anyway.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What does the double jeopardy law state?",
        choices: [
          { id: "a", label: "Small brands have both fewer buyers and lower loyalty among those buyers" },
          { id: "b", label: "Small brands have fewer buyers but compensate with higher loyalty" },
          { id: "c", label: "Large brands sacrifice loyalty as they broaden their appeal" },
          { id: "d", label: "Brands lose share twice as fast as they gain it in mature categories" },
        ],
        correctChoiceId: "a",
        explanation: "Both penetration and loyalty rise with share — small brands are punished twice. The pattern holds across packaged goods, cars, banks, airlines and services, in every market examined, over decades.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does the law suggest loyalty is an effect rather than a cause of size?",
        choices: [
          { id: "a", label: "Large brands are bought more per buyer because they are available and salient, not more loved" },
          { id: "b", label: "Loyal customers are more likely to recommend a brand, driving penetration" },
          { id: "c", label: "Loyalty metrics are measured inaccurately in small brands' customer bases" },
          { id: "d", label: "Small brands deliberately restrict repeat purchase to maintain exclusivity" },
        ],
        correctChoiceId: "a",
        explanation: "Loyalty is largely what happens to you when you are big — a lagging readout of size. So trying to grow by raising loyalty among existing customers pushes on the effect while leaving the cause alone.",
      },
      {
        dimension: "reasoning",
        prompt: "What follows strategically if loyalty follows penetration?",
        choices: [
          { id: "a", label: "Brands grow by reaching more buyers, mostly light ones who purchase rarely" },
          { id: "b", label: "Brands should concentrate spending on their most valuable existing customers" },
          { id: "c", label: "Brands should reduce distribution to protect margin per buyer" },
          { id: "d", label: "Brands should target the segment with the highest observed loyalty" },
        ],
        correctChoiceId: "a",
        explanation: "The mass of light buyers, individually unremarkable, collectively dominate volume and are where growth comes from — which inverts the instinct to focus on the heavy, loyal core.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is the Dirichlet model's success deflationary for marketing?",
        choices: [
          { id: "a", label: "It predicts loyalty metrics from share alone, so those metrics reveal nothing about the marketing" },
          { id: "b", label: "It shows that advertising has no measurable effect on any brand outcome" },
          { id: "c", label: "It requires data most brands are unable to collect reliably" },
          { id: "d", label: "It only fits categories where a single brand dominates the market" },
        ],
        correctChoiceId: "a",
        explanation: "A model knowing nothing about positioning, advertising or personality predicts repeat rate and share of requirements from share and category alone. A manager celebrating a repeat-purchase rate is celebrating a number the model already knew.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the fairest criticism of the framework?",
        choices: [
          { id: "a", label: "It generalises less cleanly beyond mature repertoire categories to subscriptions, luxury and B2B" },
          { id: "b", label: "The underlying data was collected only in a single national market" },
          { id: "c", label: "The observed regularities disappear once category size is controlled for" },
          { id: "d", label: "The model has never been tested against actual purchase records" },
        ],
        correctChoiceId: "a",
        explanation: "It is drawn from packaged goods where people buy several brands habitually, and describes steady states — least informative about the disruption marketers most want to cause. The laws are robust where tested and narrower than advocates claim.",
      },
    ],
    sources: [
      { label: "Double jeopardy (marketing) (overview)", note: "Reference on the empirical law relating share, penetration and loyalty.", type: "Reference", url: "https://en.wikipedia.org/wiki/Double_jeopardy_(marketing)" },
      { label: "Sharp, How Brands Grow (overview)", note: "The Ehrenberg-Bass account of penetration, light buyers and the Dirichlet.", type: "Reference", url: "https://en.wikipedia.org/wiki/Byron_Sharp" },
    ],
  },
  {
    concept: "Positioning",
    level: "A-level",
    summary: "owning a clear place in the customer's mind",
    estimatedMinutes: 8,
    deck: "Positioning is not what you do to a product; it is what you do to the mind of the customer. In a world drowning in choices and messages, the brands that win are the ones that own a single clear idea in your head — safety, or luxury, or the cheapest — so that when the need arises, you think of them first.",
    keyTerms: [
      { label: "Positioning", value: "The distinct place a brand occupies in the customer's mind relative to rivals." },
      { label: "Point of difference", value: "The specific attribute a brand claims to own and be known for." },
      { label: "Frame of reference", value: "The category and competitors against which a brand is compared." },
      { label: "The overcrowded mind", value: "The idea that customers can only hold a few simple associations per category." },
    ],
    sections: [
      {
        heading: "A place in the mind",
        body: [
          `Positioning is about the place a brand occupies in the customer's mind, especially relative to its competitors. The concept was popularised by Al Ries and Jack Trout in their 1981 book Positioning: The Battle for Your Mind, whose central insight was that marketing is fought not in the marketplace but in the mind. Given how many products and messages bombard people, the scarce resource is mental space, and the winning brand is the one that claims a clear, simple, distinctive position there.`,
          `Crucially, positioning is not the product's features in themselves; it is the idea the customer holds. You can build a very safe car, but positioning is whether "safety" is the thing people associate with your brand. Ries and Trout argued that minds are overcrowded and simplify ruthlessly, so a brand must stand for one clear idea rather than a muddle of claims. Trying to be known for everything is a recipe for being known for nothing.`,
        ],
      },
      {
        heading: "Owning one idea",
        body: [
          `The most powerful positioning is owning a single word or attribute in a category. The classic example is Volvo and "safety": for decades, Volvo concentrated its message so consistently on safety that it came to own that idea in car buyers' minds, so that thinking "safe car" summoned Volvo. Other brands own "cheapest", or "fastest", or "most luxurious". The point of difference — the specific thing you are known for — is the heart of a position.`,
          `This requires discipline and sacrifice. To own one idea, a brand usually has to give up claiming others; a brand that is "safe" cannot easily also be "the sportiest" and "the cheapest" without blurring. Effective positioning therefore means choosing what not to be. The strongest positions are narrow and clear, because a sharp, single association is what survives in a crowded, forgetful mind, whereas a long list of virtues evaporates.`,
        ],
      },
      {
        heading: "Position is relative",
        body: [
          `A position only makes sense in relation to competitors — the "frame of reference". Being "the affordable option" means nothing without pricier rivals to be affordable against; being "the challenger" needs an incumbent to challenge. Good positioning explicitly chooses the comparison it wants customers to make, because that comparison shapes how the brand is judged. Frame yourself against the right competitor and you look favourable; against the wrong one, weak.`,
          `This is why some brands deliberately reframe their category. A famous strategy is defining yourself against the market leader to borrow its prominence, as Avis did with "We're number two. We try harder", turning a weakness (not being the leader) into a virtue and positioning itself in relation to Hertz. Others reposition a rival unfavourably by shifting the comparison. The lesson is that a position is never absolute; it is always a claim about where you stand in a landscape of alternatives, and choosing that landscape is part of the strategy.`,
        ],
      },
      {
        heading: "Building and defending a position",
        body: [
          `A position is built through consistency over time. A brand earns its place in the mind by repeating the same clear message across everything it does — its advertising, product, pricing, design and behaviour all reinforcing one idea, for years. Inconsistency confuses the association and erodes the position. This is slow, cumulative work; you cannot claim a position by announcing it once, only by earning it through relentless coherence.`,
          `Positions also have to be defended and occasionally updated. Competitors attack them, markets shift, and a position that once fit can become a liability (being known as "cheap and cheerful" can trap a brand trying to move upmarket). But changing a position is dangerous, because you are trying to overwrite an association already lodged in millions of minds, which is far harder than establishing it in the first place. The best-managed brands guard their position carefully, evolving it slowly rather than lurching, because the mental real estate they occupy is their most valuable and least replaceable asset.`,
        ],
      },
      {
        heading: "The word that pops into your head",
        body: [
          `You carry brand positions around in your head without effort. Think "safe car", "cheap flights", "premium phone", or "reliable search", and specific brands surface instantly — that reflex is positioning working exactly as intended. You feel it fail, too, when a brand seems confused about what it stands for, or when a company you knew as budget suddenly tries to sell you something premium and it just feels wrong. Even people do this: a colleague becomes "the reliable one" or "the creative one", occupying a clear slot in others' minds. Positioning is simply the deliberate management of that single, sticky association — the one idea you want to own when someone thinks of your category.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is positioning, according to Ries and Trout?",
        choices: [
          { id: "a", label: "The physical location where a product is sold" },
          { id: "b", label: "The distinct place a brand occupies in the customer's mind relative to competitors" },
          { id: "c", label: "The price of a product" },
          { id: "d", label: "The number of features a product has" },
        ],
        correctChoiceId: "b",
        explanation: "Positioning is the idea a brand owns in the customer's mind; marketing is fought in the mind, and the winning brand claims a clear, simple, distinctive mental position, not just product features.",
      },
      {
        dimension: "reasoning",
        prompt: "Why must a brand usually give up claiming other attributes to own one idea?",
        choices: [
          { id: "a", label: "Because minds are overcrowded and simplify, so a single sharp association survives while a long list of virtues evaporates" },
          { id: "b", label: "Because claiming many attributes is illegal" },
          { id: "c", label: "Because customers prefer expensive products" },
          { id: "d", label: "Because features do not matter at all" },
        ],
        correctChoiceId: "a",
        explanation: "In a crowded, forgetful mind, one clear idea sticks; trying to be known for everything blurs into being known for nothing, so strong positioning means choosing what not to be.",
      },
      {
        dimension: "depth",
        prompt: "What brand is the classic example of owning the idea of 'safety'?",
        choices: [
          { id: "a", label: "Volvo" },
          { id: "b", label: "The cheapest airline" },
          { id: "c", label: "The fastest sports car" },
          { id: "d", label: "The most luxurious watch" },
        ],
        correctChoiceId: "a",
        explanation: "Volvo concentrated its message so consistently on safety that it came to own that idea in car buyers' minds, so 'safe car' summons Volvo — the model of a clear point of difference.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is a brand's position described as 'relative'?",
        choices: [
          { id: "a", label: "Because it only makes sense against a frame of reference — the competitors it is compared to" },
          { id: "b", label: "Because it changes every day at random" },
          { id: "c", label: "Because it depends only on the product's cost" },
          { id: "d", label: "Because customers never compare brands" },
        ],
        correctChoiceId: "a",
        explanation: "Being 'the affordable option' or 'the challenger' means nothing without rivals to be affordable against or to challenge; good positioning chooses the comparison it wants customers to make, as Avis did against Hertz.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is changing an established brand position so dangerous?",
        choices: [
          { id: "a", label: "Because you must overwrite an association already lodged in millions of minds, which is harder than establishing it" },
          { id: "b", label: "Because positions can never change at all" },
          { id: "c", label: "Because it always reduces the product's quality" },
          { id: "d", label: "Because customers forget brands instantly" },
        ],
        correctChoiceId: "a",
        explanation: "A position is built through years of consistency, so repositioning means overwriting a sticky mental association in millions of minds — far harder than the original build, which is why brands evolve positions slowly.",
      },
    ],
    sources: [
      { label: "Ries & Trout, Positioning: The Battle for Your Mind", note: "The foundational text on owning a place in the customer's mind.", type: "Reference", url: "https://en.wikipedia.org/wiki/Positioning_(marketing)" },
      { label: "OpenStax, Principles of Marketing", note: "Open textbook material on positioning and differentiation.", type: "Textbook", url: "https://openstax.org/details/books/principles-marketing" },
    ],
  },
  {
    concept: "Customer Insight",
    level: "A-level",
    summary: "a useful truth about motivation, friction or context",
    estimatedMinutes: 8,
    deck: "Data tells you what customers do; insight tells you why. A genuine customer insight is a fresh, useful truth about people's motivations or frustrations — the kind of understanding that makes you say 'of course' and immediately see what to build or say. It is the rarest and most valuable thing in marketing.",
    keyTerms: [
      { label: "Insight", value: "A non-obvious, useful truth about customer motivation, behaviour or friction." },
      { label: "Data vs insight", value: "Data is what happens; insight is the underlying 'why' that explains it." },
      { label: "Latent need", value: "A real need customers feel but have not clearly articulated." },
      { label: "Actionability", value: "The test that a genuine insight points clearly toward what to do." },
    ],
    sections: [
      {
        heading: "The 'why' beneath the 'what'",
        body: [
          `A customer insight is a deep, useful understanding of why customers behave as they do — their real motivations, frustrations and unspoken needs. It is easy to confuse insight with data, but they are different things. Data is the observable "what": sales fell on Tuesdays, or most cart abandonments happen at the shipping-cost page. Insight is the "why" that explains it and points to action: perhaps customers feel ambushed by a shipping cost they were not warned about, and their trust collapses at that moment.`,
          `The distinction matters because you can drown in data and still have no insight. Numbers describe behaviour but do not, by themselves, tell you what is going on in the customer's head or what to do about it. Insight is the interpretive leap from observation to understanding — and it is that understanding, not the raw data, that generates good products and marketing. A single true insight can be worth more than a mountain of statistics.`,
        ],
      },
      {
        heading: "What makes an insight real",
        body: [
          `Not every observation deserves the name "insight". A genuine insight tends to have a few qualities. It is often non-obvious — it reveals something that was hidden or counterintuitive, producing a small "aha". It is true — grounded in real evidence about customers, not a convenient assumption. And, above all, it is actionable: it points clearly toward what to do, whether that is a product change, a message, or a new offering. An observation that is obvious, false, or leads nowhere is not an insight, however cleverly phrased.`,
          `The actionability test is the sharpest filter. Marketers often dress up bland truisms as insights ("customers want good value"), but such statements suggest no particular action because they are true of everyone always. A real insight is specific enough to imply a move: understanding that new parents buy a certain product not for its features but to relieve their anxiety about doing the right thing tells you exactly how to design and talk about it. The value of an insight is measured by what it lets you do.`,
        ],
      },
      {
        heading: "Finding what people won't say",
        body: [
          `The hardest insights concern latent needs — real needs customers feel but cannot or will not articulate. People are often poor at explaining their own behaviour; they rationalise, misremember, or give the answer they think is expected. Simply asking "what do you want?" frequently yields little, because the deepest motivations are unspoken or even unconscious. As the line often attributed to Henry Ford goes, if he had asked people what they wanted, they would have said faster horses, not imagined the car.`,
          `This is why uncovering insight usually requires going beyond surveys to observation and empathy — watching what people actually do (which often contradicts what they say), noticing their workarounds and frustrations, and understanding the emotional and social context of their behaviour. The richest insights come from paying close attention to real people in real situations and asking why they do what they do, rather than taking their stated reasons at face value. The gap between what people say and what they do is where insight hides.`,
        ],
      },
      {
        heading: "From insight to idea",
        body: [
          `An insight is not the end point; it is the spark for a marketing or product idea. The chain runs from insight (a true understanding of the customer) to a strategy or creative idea that acts on it. A famous kind of advertising insight identifies a real tension or truth in customers' lives and builds a campaign that speaks to it, so the audience feels seen. The dove of self-esteem, the sports brand's celebration of ordinary effort — behind memorable campaigns there is usually a sharp human insight the brand is dramatising.`,
          `Crucially, the insight must be turned into something testable, not just admired. A good process treats an insight as a hypothesis about customers and then designs a product, message or experiment to act on it and see if it works. This keeps insight honest: the market is the final judge of whether your understanding of the customer was correct. Insight without action is just an interesting observation; insight that drives a concrete, tested move is where marketing earns its keep.`,
        ],
      },
      {
        heading: "The insight behind a good gift",
        body: [
          `You practise insight every time you truly understand another person. The difference between a thoughtless gift and a perfect one is exactly the difference between data and insight: knowing someone's hobbies is data, while grasping what they secretly wish for, or the frustration they have never mentioned, is insight — and it points straight to the right present. You use it when you work out what a friend really means beneath what they say, or why a colleague is actually resistant to an idea. The marketer's skill is just this everyday empathy applied systematically: looking past what people do and say to understand why, because that 'why' is what tells you what to make and how to speak to them.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is the key difference between data and a customer insight?",
        choices: [
          { id: "a", label: "Data is the observable 'what'; insight is the 'why' that explains it and points to action" },
          { id: "b", label: "Data is always wrong; insight is always right" },
          { id: "c", label: "They are the same thing" },
          { id: "d", label: "Insight is just a larger amount of data" },
        ],
        correctChoiceId: "a",
        explanation: "Data describes behaviour (sales fell on Tuesdays); insight is the interpretive leap to why it happens and what to do — you can drown in data and still have no insight.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is 'actionability' the sharpest test of a real insight?",
        choices: [
          { id: "a", label: "Because a real insight is specific enough to imply a concrete move, unlike a bland truism true of everyone" },
          { id: "b", label: "Because insights must always be expensive to act on" },
          { id: "c", label: "Because actionable insights are always obvious" },
          { id: "d", label: "Because it means the insight can be ignored" },
        ],
        correctChoiceId: "a",
        explanation: "'Customers want good value' suggests no particular action because it is always true; a genuine insight is specific enough to point clearly toward a product change, message or offering.",
      },
      {
        dimension: "depth",
        prompt: "What is a 'latent need'?",
        choices: [
          { id: "a", label: "A real need customers feel but cannot or will not clearly articulate" },
          { id: "b", label: "A need that does not exist" },
          { id: "c", label: "A need only competitors have" },
          { id: "d", label: "A need customers state loudly and clearly" },
        ],
        correctChoiceId: "a",
        explanation: "Latent needs are genuine but unspoken or unconscious; people rationalise and misremember, so simply asking 'what do you want?' — the 'faster horses' problem — often fails to surface them.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does uncovering insight usually require observation, not just surveys?",
        choices: [
          { id: "a", label: "Because what people do often contradicts what they say, and the gap between the two is where insight hides" },
          { id: "b", label: "Because surveys are illegal" },
          { id: "c", label: "Because customers always explain themselves perfectly" },
          { id: "d", label: "Because observation is cheaper" },
        ],
        correctChoiceId: "a",
        explanation: "People are poor at explaining their own behaviour, so watching what they actually do — their workarounds and frustrations — reveals more than their stated reasons, which is where the deepest insight lives.",
      },
      {
        dimension: "reasoning",
        prompt: "Why should an insight be treated as a hypothesis rather than just admired?",
        choices: [
          { id: "a", label: "Because it must be turned into a tested product or message, with the market as the final judge of whether it was correct" },
          { id: "b", label: "Because insights are never reliable" },
          { id: "c", label: "Because admiring insights is forbidden" },
          { id: "d", label: "Because hypotheses cannot be tested" },
        ],
        correctChoiceId: "a",
        explanation: "Insight without action is just an observation; treating it as a hypothesis about customers and designing an experiment to act on it keeps it honest, since the market ultimately judges whether the understanding was right.",
      },
    ],
    sources: [
      { label: "OpenStax, Principles of Marketing", note: "Open textbook material on customer research and understanding needs.", type: "Textbook", url: "https://openstax.org/details/books/principles-marketing" },
      { label: "Consumer insight (overview)", note: "Reference on insight, latent needs and the data–insight distinction.", type: "Reference", url: "https://en.wikipedia.org/wiki/Consumer_insight" },
    ],
  },
  {
    concept: "Brand Equity",
    level: "University",
    summary: "the value created by memory, trust and associations",
    estimatedMinutes: 9,
    deck: "Why will people pay more for an identical product with a familiar logo on it? The answer is brand equity: the real, measurable value that lives not in the product but in the associations, trust and memories attached to its name. It is one of a company's largest assets and appears on no factory floor.",
    keyTerms: [
      { label: "Brand equity", value: "The added value a brand name gives a product beyond its functional benefits." },
      { label: "Brand awareness", value: "How readily customers recognise and recall a brand." },
      { label: "Brand associations", value: "The web of meanings, feelings and qualities linked to a brand." },
      { label: "Brand loyalty", value: "Customers' commitment to repurchase a brand over alternatives." },
    ],
    sections: [
      {
        heading: "Value beyond the product",
        body: [
          `Brand equity is the extra value that a brand name adds to a product, beyond the product's functional qualities. Take two chemically identical colas, or two similar trainers, and put a famous brand on one; many people will prefer it, trust it more, and pay more for it. That difference — the premium the brand commands purely because of what its name means to people — is brand equity. It is value that resides in the customer's mind, not in the physical good.`,
          `This makes strong brands enormously valuable assets, often worth more than a company's factories and equipment. A powerful brand can charge higher prices, sell more easily, launch new products on the strength of its name, and survive mistakes that would sink an unknown competitor. Brand equity is why companies invest so heavily in building and protecting their names: the name itself becomes a durable source of profit and resilience.`,
        ],
      },
      {
        heading: "What builds equity",
        body: [
          `Marketing scholars, notably David Aaker and Kevin Keller, break brand equity into components. Brand awareness is the foundation: whether customers recognise and recall the brand at all, and how readily it comes to mind. A brand nobody thinks of cannot be chosen. Beyond mere awareness lies the depth of associations — the web of thoughts, feelings, images and qualities that the brand triggers, from "reliable" or "cool" to specific memories and emotions.`,
          `Then there is perceived quality — the customer's belief about how good the brand is, which may or may not match reality — and brand loyalty, the commitment that makes customers return and resist switching. These build on one another: awareness enables associations, positive associations and perceived quality foster loyalty, and loyalty is the most valuable of all, because loyal customers are cheaper to keep, more forgiving, and often advocates who recruit others. Equity is the accumulated result of all these, built slowly over time.`,
        ],
      },
      {
        heading: "Recognition is not equity",
        body: [
          `A common mistake is to equate brand equity with logo recognition — as if being widely recognised were the same as being valuable. It is not. Recognition is only the first, shallowest layer. A brand can be instantly recognisable and yet carry negative or weak associations that destroy rather than create value; being famous for being unreliable or disliked is recognition without equity, and can be worse than obscurity.`,
          `Real brand equity requires positive, strong, distinctive associations and genuine trust, not just familiarity. This is why measuring equity looks beyond awareness to what the brand actually means to people and how it affects their behaviour — their willingness to pay a premium, to choose it over rivals, to forgive its errors and recommend it. A logo is a trigger; equity is the reservoir of meaning and trust the trigger unlocks. Confusing the two leads companies to chase visibility when they should be building substance.`,
        ],
      },
      {
        heading: "Fragile and hard-won",
        body: [
          `Brand equity is slow to build and can be quick to lose. It accumulates through years of consistent, positive experiences and communication, each interaction adding a little to the reservoir of trust and meaning. There is no shortcut; equity is earned through delivering on the brand's promise repeatedly. This is why the strongest brands are often old and remarkably consistent.`,
          `Yet that patiently built equity can be badly damaged by a serious failure — a safety scandal, a betrayal of the brand's core promise, a cynical cheapening of quality — that violates the trust customers had extended. Because equity lives in perceptions, it is vulnerable to anything that changes how people feel, and repairing a damaged brand is far harder than damaging it. Managing brand equity therefore means guarding the brand's promise carefully, staying consistent, and treating the accumulated trust as a precious, perishable asset rather than something to be exploited for a short-term gain.`,
        ],
      },
      {
        heading: "The premium you pay for a name",
        body: [
          `You reveal brand equity with your own wallet. When you pick the branded painkiller over the chemically identical supermarket generic, pay more for a labelled trainer, or feel reassured buying from a name you trust versus an unknown seller, you are paying for equity — value in the name, not the product. You also feel it collapse: when a brand you trusted does something that betrays it, the premium you were willing to pay evaporates, sometimes for good. Notice how a familiar name makes you more willing to try a company's new product sight unseen; that transferred trust is brand equity in action, and it is exactly what firms spend decades and fortunes to build.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is brand equity?",
        choices: [
          { id: "a", label: "The extra value a brand name adds to a product beyond its functional qualities" },
          { id: "b", label: "The cost of manufacturing a product" },
          { id: "c", label: "The number of products a company sells" },
          { id: "d", label: "The physical assets a company owns" },
        ],
        correctChoiceId: "a",
        explanation: "Brand equity is the premium a name commands purely because of what it means to people — value that resides in the customer's mind, not in the physical good, making strong brands major assets.",
      },
      {
        dimension: "depth",
        prompt: "Which is the foundational component of brand equity?",
        choices: [
          { id: "a", label: "Brand awareness — whether customers recognise and recall the brand at all" },
          { id: "b", label: "The price of the product" },
          { id: "c", label: "The size of the factory" },
          { id: "d", label: "The number of competitors" },
        ],
        correctChoiceId: "a",
        explanation: "Awareness is the foundation: a brand nobody thinks of cannot be chosen. On top of it build associations, perceived quality and loyalty — the deeper components of equity.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is logo recognition not the same as brand equity?",
        choices: [
          { id: "a", label: "Because a brand can be instantly recognised yet carry negative associations that destroy value" },
          { id: "b", label: "Because logos are unimportant" },
          { id: "c", label: "Because recognition guarantees loyalty" },
          { id: "d", label: "Because equity means only being famous" },
        ],
        correctChoiceId: "a",
        explanation: "Recognition is the shallowest layer; being famous for being unreliable is recognition without equity. Real equity requires positive, distinctive associations and genuine trust, not mere familiarity.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is brand loyalty considered the most valuable component of equity?",
        choices: [
          { id: "a", label: "Because loyal customers are cheaper to keep, more forgiving, and often advocates who recruit others" },
          { id: "b", label: "Because loyal customers pay nothing" },
          { id: "c", label: "Because loyalty removes the need for a product" },
          { id: "d", label: "Because loyal customers never buy anything" },
        ],
        correctChoiceId: "a",
        explanation: "Loyalty makes customers return and resist switching; they cost less to retain, forgive mistakes, and recommend the brand — the accumulated payoff of awareness, associations and perceived quality.",
      },
      {
        dimension: "reasoning",
        prompt: "Why must brand equity be guarded carefully once built?",
        choices: [
          { id: "a", label: "Because it is slow to build through consistency but can be quickly damaged by a failure that betrays customers' trust" },
          { id: "b", label: "Because equity increases automatically forever" },
          { id: "c", label: "Because equity is easy to rebuild after damage" },
          { id: "d", label: "Because equity does not depend on perceptions" },
        ],
        correctChoiceId: "a",
        explanation: "Equity accumulates over years of consistent positive experience but lives in perceptions, so a scandal or a cheapening of quality can rapidly erode it — and repairing a damaged brand is far harder than damaging it.",
      },
    ],
    sources: [
      { label: "Brand equity (overview)", note: "Reference on Aaker and Keller's components of brand value.", type: "Reference", url: "https://en.wikipedia.org/wiki/Brand_equity" },
      { label: "OpenStax, Principles of Marketing", note: "Open textbook material on branding and brand value.", type: "Textbook", url: "https://openstax.org/details/books/principles-marketing" },
    ],
  },
  {
    concept: "Attribution and Marketing Mix Modelling",
    level: "University",
    summary: "why the channel that reports the best numbers is usually the one taking credit",
    estimatedMinutes: 9,
    deck: "Digital advertising promised to end Wanamaker's complaint about not knowing which half of his spend was wasted. It did not. It replaced ignorance with something worse: precise, confident, granular numbers produced by a method that systematically credits whoever was standing nearest when the customer decided.",
    keyTerms: [
      { label: "Last-click attribution", value: "Assigning a conversion entirely to the final touchpoint before it — the default and the worst." },
      { label: "Incrementality", value: "The conversions that would not have happened without the spend — the only quantity that matters." },
      { label: "Marketing mix modelling", value: "Regressing aggregate outcomes on aggregate spend to estimate each channel's contribution." },
      { label: "Selection effect", value: "Targeting people already likely to convert, then claiming credit for their conversions." },
    ],
    sections: [
      {
        heading: "The question attribution does not answer",
        body: [
          `Attribution assigns credit for a conversion across the touchpoints that preceded it, and the industry default is last-click: whatever the customer touched immediately before buying gets the whole thing. This is a rule about bookkeeping, not causation, and the distinction is where the money goes wrong. The question a marketer needs answered is incrementality — would this sale have happened anyway? Attribution answers a different question: which of our things did they touch most recently? Those coincide only by accident.`,
          `The systematic bias follows directly. Channels that intercept people close to purchase — branded search, retargeting, affiliate links — appear spectacular under last-click, because by construction they are the last thing touched. Someone who already intends to buy your product searches your brand name, clicks the ad, and converts; last-click credits the ad with a sale that would have happened if the ad had not existed. Meanwhile channels that create demand weeks earlier get nothing, because nobody clicks a poster. The measurement system does not merely mismeasure — it mismeasures in a consistent direction, and budgets follow the numbers.`,
        ],
      },
      {
        heading: "The experiments that exposed it",
        body: [
          `This is not theoretical. eBay ran a large controlled experiment switching off branded search advertising in randomised regions and found the effect on sales was statistically indistinguishable from zero — the traffic simply arrived via organic results instead. The attributed return had been enormous; the incremental return was approximately nothing. Similar experiments at other large advertisers have repeatedly found attributed returns exceeding incremental returns by large multiples, with retargeting a frequent offender.`,
          `The mechanism is a selection effect wearing a causal claim. Retargeting shows ads to people who visited your site, and people who visited your site were already more likely to buy; the ad then claims the resulting purchases. The platform reporting the number is also the party selecting the audience and the party being paid, which is a conflict of interest sitting inside the measurement itself. None of this requires fraud — the numbers are accurate reports of a metric that was never incrementality, and everyone involved has read the metric as though it were.`,
        ],
      },
      {
        heading: "What MMM does differently",
        body: [
          `Marketing mix modelling attacks the problem from the other end. Rather than tracking individuals, it regresses aggregate outcomes — weekly sales — on aggregate inputs: spend by channel, price, distribution, seasonality, competitor activity, weather. Because it works top-down on totals, it does not need cookies or identifiers, which has made it newly fashionable as tracking has degraded under privacy regulation and platform changes. And because it sees all spend against all sales, it can in principle capture the long-term and offline effects attribution cannot see at all.`,
          `Its weaknesses are equally structural, and honesty about them matters. Media spend across channels is highly collinear — brands raise everything at Christmas — so separating the contributions is statistically fraught. The models need years of data, cannot resolve much below channel level, and are sensitive to specification choices that a determined analyst can lean on. MMM and attribution are therefore not rivals to be adjudicated: they are two biased instruments with different biases, and the mature practice triangulates, using geo experiments and holdout tests as the arbiter when they disagree.`,
        ],
      },
      {
        heading: "Why the incentives keep it broken",
        body: [
          `The persistence of a method everyone knows is broken is the interesting part, and it is not stupidity. Last-click is cheap, immediate, granular and available in the platform dashboard; incrementality testing requires deliberately withholding spend from a control group, which means spending money to learn something and forgoing the sales you were not going to get anyway but cannot prove you were not going to get. That is a hard sell against a number that already says the campaign returned four-to-one.`,
          `And the incentives run one direction. The performance marketer, the agency and the platform all look better under attributed numbers than incremental ones, and the person who commissions an incrementality test is commissioning evidence that their own results were overstated. Nobody in the chain is rewarded for the honest number. This is why the problem survives its own well-known diagnosis, and why the strongest signal about an organisation's measurement maturity is not which model it uses but whether anyone has ever run a holdout test and published the result internally.`,
        ],
      },
      {
        heading: "Why the ad that 'worked' probably didn't",
        body: [
          `The transferable question is the one attribution never asks: what would have happened anyway? It applies well past marketing. A recruiter takes credit for a hire who had already applied; a tool claims productivity gains from people who were already fast; an intervention reports success in a group selected for likely success. In each case the number is accurate and the causal reading is wrong, because nobody constructed a comparison against the world where the thing did not happen. The habit worth building is to treat any impressive number as a claim requiring a counterfactual, and to notice that the party producing the number is frequently the party being judged by it.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "reasoning",
        prompt: "Why does last-click attribution systematically mislead?",
        choices: [
          { id: "a", label: "It credits whoever intercepted the customer nearest purchase, regardless of whether they caused it" },
          { id: "b", label: "It undercounts conversions that occur across multiple devices" },
          { id: "c", label: "It applies equal weight to every touchpoint in the customer journey" },
          { id: "d", label: "It cannot track customers who use ad-blocking software" },
        ],
        correctChoiceId: "a",
        explanation: "It is bookkeeping, not causation. Branded search and retargeting look spectacular because by construction they are touched last, while demand-creating channels get nothing — and the bias runs consistently in one direction.",
      },
      {
        dimension: "reasoning",
        prompt: "What did eBay's branded search experiment find?",
        choices: [
          { id: "a", label: "Switching the ads off had an effect on sales indistinguishable from zero" },
          { id: "b", label: "Sales fell in proportion to the attributed value of the advertising" },
          { id: "c", label: "Organic traffic collapsed once the paid listings were removed" },
          { id: "d", label: "The experiment was inconclusive because of insufficient statistical power" },
        ],
        correctChoiceId: "a",
        explanation: "Traffic simply arrived via organic results instead. The attributed return had been enormous and the incremental return approximately nothing — a pattern replicated at other large advertisers, with retargeting a frequent offender.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is retargeting's reported performance a selection effect?",
        choices: [
          { id: "a", label: "It targets people who already visited and were more likely to buy, then claims their purchases" },
          { id: "b", label: "It reaches customers multiple times, inflating the impression count" },
          { id: "c", label: "It is measured over shorter attribution windows than other channels" },
          { id: "d", label: "It shows ads only to customers who have already completed a purchase" },
        ],
        correctChoiceId: "a",
        explanation: "The platform reporting the number also selects the audience and is paid for the result — a conflict of interest inside the measurement. No fraud is needed: the numbers accurately report a metric that was never incrementality.",
      },
      {
        dimension: "reasoning",
        prompt: "What is MMM's principal structural weakness?",
        choices: [
          { id: "a", label: "Spend across channels is highly collinear, making contributions hard to separate statistically" },
          { id: "b", label: "It requires individual-level tracking that privacy regulation now prohibits" },
          { id: "c", label: "It cannot incorporate offline channels into the model at all" },
          { id: "d", label: "It produces results too granular to inform channel-level budgeting" },
        ],
        correctChoiceId: "a",
        explanation: "Brands raise everything at Christmas, so untangling contributions is fraught. It also needs years of data and is sensitive to specification choices — which is why MMM and attribution are two biased instruments to triangulate, not rivals to adjudicate.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does a broken method survive its own well-known diagnosis?",
        choices: [
          { id: "a", label: "Nobody in the chain is rewarded for the honest number, and testing means withholding spend" },
          { id: "b", label: "Incrementality cannot be measured with any available technique" },
          { id: "c", label: "Platforms legally prohibit advertisers from running holdout experiments" },
          { id: "d", label: "Marketers are generally unaware that attribution differs from causation" },
        ],
        correctChoiceId: "a",
        explanation: "The marketer, agency and platform all look better under attributed numbers, and whoever commissions an incrementality test is commissioning evidence their results were overstated — which is why running one at all is the real maturity signal.",
      },
    ],
    sources: [
      { label: "Blake, Nosko and Tadelis, 'Consumer Heterogeneity and Paid Search Effectiveness'", note: "The eBay experiment finding branded search returns near zero.", type: "Reference", url: "https://www.nber.org/papers/w20171" },
      { label: "Marketing mix modeling (overview)", note: "Reference on MMM, attribution and incrementality testing.", type: "Reference", url: "https://en.wikipedia.org/wiki/Marketing_mix_modeling" },
    ],
  },
  {
    concept: "Pricing Psychology",
    level: "A-level",
    summary: "how framing and reference points affect willingness to pay",
    estimatedMinutes: 8,
    deck: "A price is a number, but how much you are willing to pay depends far more on how that number is framed than on the number itself. Pricing psychology is the study of these effects — anchors, decoys, charm prices, the signal of expense — and once you see them, you cannot un-see how thoroughly your sense of 'a fair price' is engineered.",
    keyTerms: [
      { label: "Anchoring", value: "The first number seen biases judgements of what is expensive or cheap." },
      { label: "Reference price", value: "The price a customer expects or compares against when judging value." },
      { label: "Charm pricing", value: "Ending prices in .99 to make them feel meaningfully lower." },
      { label: "Decoy effect", value: "Adding an option that makes another look more attractive by comparison." },
    ],
    sections: [
      {
        heading: "Price is a perception",
        body: [
          `Pricing psychology studies how the framing and presentation of a price shape what customers are willing to pay, often far more than the objective number. The key finding is that people do not judge prices in absolute terms; they judge them relative to reference points and are heavily influenced by how the price is presented. The same price can feel like a bargain or a rip-off depending entirely on the context it is placed in.`,
          `This flows from a broader truth in behavioural economics: humans are not the coldly rational calculators that classic economics assumed. We rely on mental shortcuts and are swayed by context, framing and comparison. Pricing exploits, or works with, these tendencies. Understanding them is essential both for setting prices and for defending yourself against the ways prices are designed to influence you.`,
        ],
      },
      {
        heading: "The power of the anchor",
        body: [
          `One of the strongest effects is anchoring: the first number you encounter sets a reference point that colours every judgement after it. Show a customer an expensive option first and a moderately priced one afterward looks cheap by comparison; the initial high price "anchored" their sense of what is normal. This is why a menu might list an extravagant dish, or a shop a premium model, partly to make everything else seem reasonable.`,
          `The classic tactic is the "was £100, now £60" sale. The struck-through original price is an anchor that frames £60 as a large saving, making it feel like a bargain — even if the item was never really worth £100, or rarely sold at that price. Your sense of the deal depends on the reference point you were handed. Anchoring shows that value is comparative: we do not know what a thing is "worth" in a vacuum, so we cling to whatever number is put in front of us.`,
        ],
      },
      {
        heading: "Charm prices and decoys",
        body: [
          `Two further tricks are ubiquitous. Charm pricing is the near-universal habit of ending prices in .99 or .95: £9.99 rather than £10. Because we read left to right and weight the first digit, £9.99 registers as meaningfully cheaper than £10 even though the difference is a penny. The "9" ending also signals a bargain by association. It is a tiny manipulation repeated billions of times because it reliably works.`,
          `The decoy effect is subtler and cleverer. Adding a third, deliberately unattractive option can push customers toward a more expensive one. In a famous case, when a magazine offered a web-only subscription cheaply and a print-and-web subscription expensively, few chose print. But adding a print-only option at the same high price as print-and-web made print-and-web look like obviously superb value, and sales of it jumped. The decoy was never meant to sell; it existed to make another option look better by comparison. Both tricks exploit the fact that we judge options against each other, not on their own.`,
        ],
      },
      {
        heading: "Price as a signal",
        body: [
          `Price does not only measure value; it signals it. Because we associate higher prices with higher quality, a price that is too low can actually reduce sales by signalling that something is cheap in the bad sense — inferior, suspect, not for people like us. In markets where buyers cannot easily judge quality (wine, cosmetics, professional services), the price itself becomes a cue, and raising it can increase both perceived quality and demand. A discount, conversely, can cheapen a premium brand's aura.`,
          `This means pricing is bound up with positioning and brand. A luxury brand deliberately prices high not just for margin but because the high price is part of the product's meaning; making it affordable would destroy the very exclusivity people are paying for. Getting price wrong in either direction misfires: too high without the perceived value and you lose sales, too low and you may signal poor quality or undermine your brand. Price is one of the loudest messages a product sends about what it is and who it is for.`,
        ],
      },
      {
        heading: "The engineering behind 'a good deal'",
        body: [
          `You are on the receiving end of pricing psychology every day. The £4.99 coffee, the "was/now" tag that makes you feel clever for saving, the suspiciously overpriced large popcorn that makes the medium look sensible, the wine you assume is better because it costs more — each is a designed effect, not a neutral number. Notice the menu's most expensive dish that you would never order but which makes the second-priciest seem reasonable; that is an anchor working on you. Simply knowing these tricks — anchoring, charm prices, decoys, price-as-quality — is a genuine defence: it lets you ask what a thing is actually worth to you, rather than accepting the reference point someone carefully placed in front of you.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is the core finding of pricing psychology?",
        choices: [
          { id: "a", label: "People judge prices relative to reference points and are heavily swayed by how a price is framed" },
          { id: "b", label: "People always calculate value with perfect rationality" },
          { id: "c", label: "The objective number is all that matters" },
          { id: "d", label: "Lower prices always increase sales" },
        ],
        correctChoiceId: "a",
        explanation: "People do not judge prices in absolute terms but relative to context and comparison, so the same price can feel like a bargain or a rip-off depending on how it is presented.",
      },
      {
        dimension: "reasoning",
        prompt: "How does the 'was £100, now £60' tactic work?",
        choices: [
          { id: "a", label: "The struck-through price acts as an anchor, framing £60 as a large saving even if the item was rarely worth £100" },
          { id: "b", label: "It proves the item is high quality" },
          { id: "c", label: "It has no effect on perception" },
          { id: "d", label: "It always reflects the true original price" },
        ],
        correctChoiceId: "a",
        explanation: "Anchoring: the first number seen sets a reference point, so the crossed-out £100 makes £60 feel like a bargain — value is comparative, and we cling to whatever number is placed in front of us.",
      },
      {
        dimension: "depth",
        prompt: "Why does charm pricing (£9.99 rather than £10) work?",
        choices: [
          { id: "a", label: "Because we read left to right and weight the first digit, so £9.99 registers as meaningfully cheaper" },
          { id: "b", label: "Because £9.99 is genuinely much cheaper than £10" },
          { id: "c", label: "Because customers dislike round numbers for no reason" },
          { id: "d", label: "Because it is required by law" },
        ],
        correctChoiceId: "a",
        explanation: "The first digit dominates our reading, so £9.99 feels notably cheaper than £10 despite the penny difference, and the '9' ending signals a bargain — a tiny manipulation that reliably works.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the point of a 'decoy' option in pricing?",
        choices: [
          { id: "a", label: "It is not meant to sell, but to make another option look better by comparison" },
          { id: "b", label: "It is the option most customers should buy" },
          { id: "c", label: "It is always the cheapest choice" },
          { id: "d", label: "It replaces the need for other options" },
        ],
        correctChoiceId: "a",
        explanation: "A deliberately unattractive third option — like print-only priced the same as print-and-web — makes a target option look like obviously superb value, exploiting the fact that we judge options against each other.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can a price that is too low sometimes reduce sales?",
        choices: [
          { id: "a", label: "Because price signals quality, so a very low price can suggest the product is inferior or suspect" },
          { id: "b", label: "Because low prices are illegal" },
          { id: "c", label: "Because customers always want to pay more" },
          { id: "d", label: "Because low prices never affect perception" },
        ],
        correctChoiceId: "a",
        explanation: "We associate higher prices with higher quality, so where buyers cannot easily judge quality, too low a price signals inferiority; this is also why a luxury brand's high price is part of its meaning.",
      },
    ],
    sources: [
      { label: "Anchoring and pricing (overview)", note: "Reference on anchoring, charm pricing and the decoy effect.", type: "Reference", url: "https://en.wikipedia.org/wiki/Psychological_pricing" },
      { label: "Dan Ariely, Predictably Irrational", note: "Popular account of the decoy effect and behavioural pricing.", type: "Reference", url: "https://en.wikipedia.org/wiki/Predictably_Irrational" },
    ],
  },
  {
    concept: "Jobs to Be Done",
    level: "University",
    summary: "the progress a customer is trying to make in context",
    estimatedMinutes: 9,
    deck: "People don't want a quarter-inch drill; they want a quarter-inch hole. The Jobs to Be Done theory says customers 'hire' products to make progress in their lives — and understanding the job they are hiring you for, rather than their age or demographics, is the key to knowing what to build and who you are really competing with.",
    keyTerms: [
      { label: "Job to be done", value: "The progress a customer is trying to make in a given situation." },
      { label: "Hiring a product", value: "The idea that customers 'hire' a product to get a job done, and 'fire' it if it fails." },
      { label: "Functional, emotional, social", value: "The three dimensions of most jobs beyond pure function." },
      { label: "Competing for the job", value: "Your real rivals are anything else that could do the same job." },
    ],
    sections: [
      {
        heading: "Products get hired for a job",
        body: [
          `Jobs to Be Done (JTBD) is a theory of why customers buy, associated especially with the Harvard professor Clayton Christensen. Its central claim is that people do not really want products; they want to make progress in their lives, and they "hire" products to get a "job" done. The customer's real question is not "what features does this have?" but "will this help me accomplish what I am trying to do in my situation?" The famous illustration: nobody wants a quarter-inch drill bit; they want a quarter-inch hole — and really, they want whatever the hole lets them achieve.`,
          `This reframes the entire focus of marketing and product design. Instead of starting with the product or the customer's demographic profile, you start with the job — the progress the customer is trying to make and the circumstances they are in. The product is merely a means; the job is the end. Get the job right and you understand what to build, how to talk about it, and what would genuinely satisfy the customer.`,
        ],
      },
      {
        heading: "The milkshake that wasn't about milkshakes",
        body: [
          `Christensen's favourite example is a study of why people bought milkshakes at a fast-food chain. Demographic analysis went nowhere. But watching when and why people bought them revealed that a surprising number were bought early in the morning by lone commuters. The job they were hiring the milkshake for was not "have a tasty treat" but something like "keep me occupied and not-hungry during a long, boring drive to work, using one hand." The milkshake won that job because it was thick (lasted the whole commute), easy to hold, and filling.`,
          `The insight transformed the problem. To sell more morning milkshakes, you would make them thicker and easier to grab, not fret over flavour surveys — and crucially, the milkshake's real competitors for that job were not other milkshakes but bananas, bagels and boredom. Understanding the job, rather than the product category or the customer's age, revealed both what to improve and who you were actually competing against. That is JTBD in action: the job explains the behaviour that demographics cannot.`,
        ],
      },
      {
        heading: "Jobs are more than functional",
        body: [
          `A job to be done usually has several dimensions, not just a functional one. There is the functional job — the practical task (get to work, drill a hole). But there are also emotional and social dimensions: how the customer wants to feel, and how they want to be seen by others. Someone buying a luxury watch is partly hiring it to tell the time (functional), but far more to feel successful (emotional) and to signal status to others (social). Ignoring these dimensions misses most of why people really buy.`,
          `This is why two products that do the same functional task can satisfy very different jobs. A fast-food meal and a fine-dining experience both "feed you", but they are hired for utterly different jobs — one for cheap quick fuel, the other for celebration, romance or status. Understanding the full job, including its emotional and social sides, explains behaviour that pure function cannot, and points to what would truly satisfy the customer rather than merely meeting a spec.`,
        ],
      },
      {
        heading: "Redefining the competition",
        body: [
          `One of JTBD's most useful consequences is that it redraws the competitive map. Your real competitors are not just other products in your category, but anything a customer could "hire" to do the same job — including doing nothing, or a completely different kind of solution. The milkshake competed with bagels and boredom; a video-conferencing tool competes with flights and phone calls; a productivity app competes with a pen and paper, or with the customer's own willpower.`,
          `Thinking in jobs guards against a dangerous narrowness. Companies that define themselves by their product category can be blindsided by a competitor from outside it that does the customer's job better — the classic pattern of disruption. Asking "what job is the customer really hiring for, and what else could do it?" keeps a business focused on the customer's actual goal rather than on beating direct rivals at features nobody deeply cares about. The job, not the product category, defines the true competitive landscape.`,
        ],
      },
      {
        heading: "What are you really hiring it for?",
        body: [
          `You hire products for jobs all the time, usually without noticing the real job. You did not buy a phone for its spec sheet; you hired it to stay connected, to avoid boredom, to feel capable, to not be left out. You hire a coffee less for caffeine than for a moment's pause, a reward, or an excuse to socialise. When you notice you bought something and it did not actually get your job done — the gym membership that did not make you feel healthier, the gadget that did not simplify your life — you 'fire' it, and understand JTBD from the inside. Asking "what progress am I really trying to make here?" cuts through features and marketing to what you, or any customer, is genuinely trying to achieve.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is the central claim of the Jobs to Be Done theory?",
        choices: [
          { id: "a", label: "People 'hire' products to make progress — to get a 'job' done in their situation" },
          { id: "b", label: "People buy products mainly for their features" },
          { id: "c", label: "People choose products based only on their demographics" },
          { id: "d", label: "People buy whatever is cheapest" },
        ],
        correctChoiceId: "a",
        explanation: "JTBD holds that customers want progress, not products, and 'hire' a product to get a job done — nobody wants a drill bit, they want the hole, and really what the hole enables.",
      },
      {
        dimension: "reasoning",
        prompt: "What did the milkshake study reveal about why lone morning commuters bought milkshakes?",
        choices: [
          { id: "a", label: "The job was to stay occupied and full during a long, one-handed drive — not merely to enjoy a treat" },
          { id: "b", label: "They were chosen purely for flavour" },
          { id: "c", label: "Demographics fully explained the purchases" },
          { id: "d", label: "They competed only with other milkshakes" },
        ],
        correctChoiceId: "a",
        explanation: "The milkshake was hired to occupy and fill a boring commute one-handed; being thick, filling and easy to hold won that job — an insight demographics could not reveal, and its rivals were bagels and boredom.",
      },
      {
        dimension: "depth",
        prompt: "What are the three dimensions most jobs have?",
        choices: [
          { id: "a", label: "Functional, emotional and social" },
          { id: "b", label: "Cheap, fast and reliable" },
          { id: "c", label: "Awareness, interest and action" },
          { id: "d", label: "Product, price and place" },
        ],
        correctChoiceId: "a",
        explanation: "Beyond the functional task, jobs have emotional (how the customer wants to feel) and social (how they want to be seen) dimensions — a luxury watch is hired to feel successful and signal status, not just tell time.",
      },
      {
        dimension: "reasoning",
        prompt: "How does JTBD redraw the competitive map?",
        choices: [
          { id: "a", label: "Your real competitors are anything that could do the same job, including doing nothing or a different kind of solution" },
          { id: "b", label: "Your only competitors are products in your exact category" },
          { id: "c", label: "There are no competitors once you know the job" },
          { id: "d", label: "Competition depends only on price" },
        ],
        correctChoiceId: "a",
        explanation: "Anything a customer could 'hire' for the job competes — a video tool competes with flights and phone calls; defining yourself by product category risks being blindsided by an outsider that does the job better.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can two products doing the same functional task satisfy very different jobs?",
        choices: [
          { id: "a", label: "Because the emotional and social dimensions differ — a fast meal is fuel, fine dining is celebration or status" },
          { id: "b", label: "Because function is the only thing that ever matters" },
          { id: "c", label: "Because they always have identical customers" },
          { id: "d", label: "Because jobs never vary" },
        ],
        correctChoiceId: "a",
        explanation: "A fast-food meal and fine dining both 'feed you' functionally but are hired for utterly different emotional and social jobs — cheap fuel versus celebration or status — which pure function cannot explain.",
      },
    ],
    sources: [
      { label: "Clayton Christensen, 'Know Your Customers' Jobs to Be Done' (HBR)", note: "The milkshake study and the JTBD framework.", type: "Reference", url: "https://hbr.org/2016/09/know-your-customers-jobs-to-be-done" },
      { label: "Jobs to be done (overview)", note: "Reference on the theory of customer progress and hiring products.", type: "Reference", url: "https://en.wikipedia.org/wiki/Jobs_to_be_done" },
    ],
  },
  {
    concept: "Mental Availability",
    level: "University",
    summary: "why brands are chosen by whoever comes to mind, not whoever persuaded",
    estimatedMinutes: 9,
    deck: "Marketing assumes buyers weigh options and pick the best-argued one. The evidence says most purchases are made by people who barely think, choosing from the two or three brands that surfaced — so the contest is not persuasion but retrieval, and it is decided long before anyone is deciding anything.",
    keyTerms: [
      { label: "Mental availability", value: "The probability a brand is noticed or retrieved in a buying situation — breadth and freshness of memory links." },
      { label: "Category entry points", value: "The cues — occasion, need, place, feeling — that trigger retrieval of a brand from memory." },
      { label: "Distinctive assets", value: "Colours, logos, characters and sounds that identify a brand instantly without argument." },
      { label: "Consideration set", value: "The two or three brands actually retrieved, from which nearly all choices are made." },
    ],
    sections: [
      {
        heading: "The contest is retrieval, not persuasion",
        body: [
          `The model implicit in most marketing is deliberative: buyers have needs, compare options against attributes, and select the one whose case is strongest. Advertising on this account is argument — communicate a superior benefit and win the comparison. The difficulty is that almost nobody buys this way. Most purchases in most categories are low-involvement, made quickly, by people whose attention is elsewhere, from the handful of brands that came to mind.`,
          `That handful is the whole game. If your brand is not retrieved, no argument you might have made is ever evaluated, because you were not in the room where the choosing happened. So the operative variable is mental availability — the probability of being noticed or thought of in a buying situation — and it is a memory property rather than a persuasion outcome. The competitor who beat you usually did not out-argue you; they were remembered and you were not, which is a contest decided before anything resembling a decision occurs.`,
        ],
      },
      {
        heading: "Category entry points",
        body: [
          `Mental availability is not a single quantity like awareness. It is the breadth and freshness of the memory links connecting a brand to the cues that arise in buying situations — what Ehrenberg-Bass call category entry points. Thirsty on a hot afternoon; needing something for guests arriving; wanting a treat after a bad day; looking for something the children will eat. Each is a distinct retrieval cue, and a brand is available for that occasion only if it is linked to it in memory.`,
          `This reframes growth as a memory-network problem rather than a messaging one. A brand linked to many entry points gets retrieved in many situations; one linked to a single occasion is retrieved only then, however strongly. It also explains why relentless single-message consistency can backfire: perfect focus on one benefit builds one very strong link and leaves the brand unavailable everywhere else. The strategic aim is not to own an attribute but to be present at as many entry points as possible — breadth of retrieval, not depth of positioning.`,
        ],
      },
      {
        heading: "Distinctive versus differentiated",
        body: [
          `The framework draws a distinction the industry constantly collapses. Differentiation is being meaningfully different — a superior benefit, a reason to prefer. Distinctiveness is being instantly recognisable: the colour, the shape, the jingle, the character. Differentiation is an argument; distinctiveness is a label, and it carries no claim about being better.`,
          `The empirical position is that distinctiveness does far more work. Buyers barely believe differentiation claims and mostly cannot recall them, but they identify a brand from a colour in a fraction of a second, and identification is what retrieval requires. This is why distinctive assets are treated as the genuine strategic property: they must be consistent for years to build the link, and refreshing them for internal reasons — a new marketing director wanting to make their mark — destroys accumulated memory structure. It also explains why brands with nothing distinctive to say still grow: they were retrievable, and retrievable beats meaningful because meaningful never gets evaluated.`,
        ],
      },
      {
        heading: "Where the argument overreaches",
        body: [
          `The tradition is at its strongest in low-involvement repertoire categories and pushes further than the evidence comfortably supports. High-consideration purchases — a house, enterprise software, a car — involve genuine deliberation where differentiation plausibly matters, and dismissing persuasion wholesale on evidence from soft drinks is a real overreach. Critics also note that in categories with strong network effects or genuine functional differences, availability alone will not save a worse product.`,
          `There is also a self-fulfilling worry. If everyone accepts that differentiation does not work and stops attempting it, the finding that buyers do not perceive differences becomes true by construction rather than by nature — a marketing orthodoxy producing the world it described. And the framework, like the double jeopardy law, is better at explaining steady states than at explaining how categories get created or disrupted, which is where the interesting cases live. What survives is the core correction: retrieval precedes evaluation, and a marketing plan that assumes it has the buyer's attention has assumed away the actual problem.`,
        ],
      },
      {
        heading: "Why you bought the one you thought of",
        body: [
          `Test it on your last few ordinary purchases. You almost certainly did not compare options; you thought of two or three things and picked one, in seconds, while thinking about something else. Now notice that the brands that surfaced were the ones linked in your memory to that moment — the situation, the mood, the need — and not the ones with the best case. And notice what this implies for anything you want chosen: a CV, a proposal, yourself. Being the best-argued option is worth nothing if you are not retrieved when the situation arises, which is why being memorably associated with the right cue beats being persuasive to an audience that is not currently listening.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "reasoning",
        prompt: "Why is retrieval a more fundamental contest than persuasion?",
        choices: [
          { id: "a", label: "A brand not retrieved is never evaluated, so its argument is never heard" },
          { id: "b", label: "Buyers distrust advertising claims and discount them heavily" },
          { id: "c", label: "Persuasive messages are more expensive to produce than memorable ones" },
          { id: "d", label: "Retrieval determines price sensitivity, which decides most purchases" },
        ],
        correctChoiceId: "a",
        explanation: "Most purchases are low-involvement, made quickly from the handful of brands that came to mind. If you are not in that set, no argument you might have made is ever assessed — the contest is decided before deciding begins.",
      },
      {
        dimension: "depth",
        prompt: "What are category entry points?",
        choices: [
          { id: "a", label: "The cues — occasion, need, mood, place — that trigger retrieval of a brand from memory" },
          { id: "b", label: "The demographic segments through which a brand first acquires buyers" },
          { id: "c", label: "The retail channels in which a category is initially distributed" },
          { id: "d", label: "The price thresholds at which buyers begin considering a category" },
        ],
        correctChoiceId: "a",
        explanation: "Thirsty on a hot afternoon; guests arriving; a treat after a bad day. Each is a distinct retrieval cue, and a brand is available for that occasion only if memory links it there — making growth a memory-network problem.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can relentless single-message consistency backfire?",
        choices: [
          { id: "a", label: "It builds one strong link while leaving the brand unretrievable at every other entry point" },
          { id: "b", label: "Repetition causes buyers to become fatigued and discount the message" },
          { id: "c", label: "Single messages cannot be adapted across different media channels" },
          { id: "d", label: "Consistency prevents a brand from responding to competitor claims" },
        ],
        correctChoiceId: "a",
        explanation: "Perfect focus on one benefit produces availability in one situation only. The aim is breadth of retrieval across many entry points rather than depth of positioning on a single attribute.",
      },
      {
        dimension: "depth",
        prompt: "What distinguishes distinctiveness from differentiation?",
        choices: [
          { id: "a", label: "Distinctiveness is instant recognisability; differentiation is a claim to be meaningfully better" },
          { id: "b", label: "Distinctiveness applies to packaging while differentiation applies to advertising" },
          { id: "c", label: "Distinctiveness is measured by recall and differentiation by purchase intent" },
          { id: "d", label: "Distinctiveness is achieved through price and differentiation through quality" },
        ],
        correctChoiceId: "a",
        explanation: "Differentiation is an argument; distinctiveness is a label carrying no claim of superiority. Buyers barely recall differentiation claims but identify a brand from a colour in a fraction of a second — and identification is what retrieval needs.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the self-fulfilling worry about the framework?",
        choices: [
          { id: "a", label: "If everyone stops attempting differentiation, buyers perceiving no differences becomes true by construction" },
          { id: "b", label: "Brands adopting the framework will converge on identical distinctive assets" },
          { id: "c", label: "Measuring mental availability changes the memory structures being measured" },
          { id: "d", label: "Buyers who learn about the framework will resist retrieval-based marketing" },
        ],
        correctChoiceId: "a",
        explanation: "A marketing orthodoxy could produce the world it described rather than describing the world. The framework also explains steady states better than category creation or disruption — where the interesting cases live.",
      },
    ],
    sources: [
      { label: "Mental availability and category entry points (overview)", note: "Reference on the Ehrenberg-Bass account of retrieval and memory links.", type: "Reference", url: "https://en.wikipedia.org/wiki/Byron_Sharp" },
      { label: "Brand awareness and distinctive assets (overview)", note: "Reference on distinctiveness versus differentiation in brand memory.", type: "Reference", url: "https://en.wikipedia.org/wiki/Brand_awareness" },
    ],
  },
  {
    concept: "Retention",
    level: "A-level",
    summary: "keeping customers through repeated value and reduced friction",
    estimatedMinutes: 8,
    deck: "Businesses obsess over winning new customers, but the quiet secret of durable success is keeping the ones they have. Retention — turning a first purchase into an ongoing relationship — is usually far cheaper than acquisition and far more profitable, which is why the smartest companies treat keeping customers as seriously as getting them.",
    keyTerms: [
      { label: "Retention", value: "Keeping existing customers so they continue to buy over time." },
      { label: "Churn", value: "The rate at which customers stop buying or cancel." },
      { label: "Customer lifetime value", value: "The total worth of a customer over the whole relationship." },
      { label: "Acquisition vs retention", value: "The cost of winning a new customer versus keeping an existing one." },
    ],
    sections: [
      {
        heading: "The leaky bucket",
        body: [
          `Retention is a business's ability to keep its existing customers over time, rather than losing them. It is easy to focus all energy on acquisition — winning new customers — but this is like pouring water into a leaky bucket: if customers drain away as fast as new ones arrive, the business runs hard just to stand still. Retention plugs the leaks, so that the customers you win actually accumulate into a growing, loyal base.`,
          `The rate at which customers leave is called churn, and it is one of the most important numbers in many businesses, especially subscription ones. High churn is corrosive: every lost customer must be replaced just to maintain revenue, and replacing them costs money. A business with strong retention and low churn compounds its growth, because new customers add to a stable base rather than merely refilling a draining one. Retention is what turns a stream of transactions into a durable enterprise.`,
        ],
      },
      {
        heading: "Why keeping beats winning",
        body: [
          `The economic case for retention is stark: it is almost always cheaper to keep an existing customer than to acquire a new one. Winning a new customer involves the full cost of marketing, advertising and persuading a stranger; keeping a happy existing one who already knows and trusts you costs far less. Studies across industries repeatedly find acquisition to be several times more expensive than retention, which is why a customer lost is more costly than it first appears.`,
          `Existing customers are also more valuable in other ways. They tend to buy more over time as trust grows, are more receptive to new products, are more forgiving of the occasional mistake, and often recommend you to others — free, credible acquisition. This is captured in the idea of customer lifetime value: the total profit a customer generates over the whole relationship, not just their first purchase. Viewed through lifetime value, a retained customer is a compounding asset, and a small improvement in retention can have an outsized effect on long-term profit.`,
        ],
      },
      {
        heading: "How retention is earned",
        body: [
          `Retention is earned in two broad ways: by delivering ongoing value and by reducing friction. Delivering value means the product must genuinely keep meeting the customer's need — reliability, quality, good service, and continued improvement. No loyalty scheme can retain customers who are fundamentally dissatisfied; the foundation of retention is a product worth coming back to. Reducing friction means making it easy to keep using you: smooth service, low hassle, and removing the irritations that drive people away.`,
          `On top of these, businesses use deliberate retention tactics: loyalty programmes that reward repeat custom, subscriptions that make continuing the default, personalisation that deepens the relationship, and proactive outreach to customers showing signs of leaving. The best of these strengthen a genuine relationship; the worst simply trap customers through switching costs and dark patterns, which breeds resentment and eventual defection. Durable retention comes from customers who stay because they want to, not because leaving is made painful.`,
        ],
      },
      {
        heading: "The retention trap",
        body: [
          `There is a cynical side to retention worth naming. Because keeping customers is so valuable, some businesses retain them not by earning loyalty but by making it hard to leave — burying the cancel button, requiring a phone call to quit, auto-renewing subscriptions people forgot about, or exploiting inertia. These tactics can boost retention numbers in the short term while quietly generating ill will, and they increasingly attract regulation and backlash.`,
          `The distinction is between retention through value and retention through captivity. A customer retained because your product genuinely serves them is an asset who advocates for you; a customer retained because escaping is a nuisance is a liability waiting to leave the moment a frustration-free alternative appears, and to warn others on the way out. Healthy retention aligns the business's interest with the customer's: you keep them by continuing to deserve them. That is harder than building a trap, but it is the only version that compounds rather than corrodes.`,
        ],
      },
      {
        heading: "The subscriptions you forgot about",
        body: [
          `You live inside other companies' retention strategies. The streaming service that auto-renews, the loyalty card that nudges you back, the app that pings you when you drift away, the subscription that is strangely hard to cancel — all are retention tactics aimed at you. You feel the good kind (a service so useful you happily stay) and the bad kind (the gym membership you kept paying because quitting was a hassle). Notice the difference between the companies you stay with because you want to and the ones you stay with because leaving is annoying; the first have earned your retention, the second have merely trapped it — and the moment an easier option appears, you are gone, exactly as retention economics predicts.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is customer retention?",
        choices: [
          { id: "a", label: "A business's ability to keep its existing customers buying over time" },
          { id: "b", label: "The process of acquiring new customers" },
          { id: "c", label: "The total number of products in stock" },
          { id: "d", label: "The price charged to first-time buyers" },
        ],
        correctChoiceId: "a",
        explanation: "Retention is keeping existing customers rather than losing them; without it, a business is a leaky bucket, running hard just to replace customers who drain away.",
      },
      {
        dimension: "depth",
        prompt: "What is 'churn'?",
        choices: [
          { id: "a", label: "The rate at which customers stop buying or cancel" },
          { id: "b", label: "The rate at which new products launch" },
          { id: "c", label: "The profit margin on a sale" },
          { id: "d", label: "The speed of delivery" },
        ],
        correctChoiceId: "a",
        explanation: "Churn is the rate customers leave; high churn is corrosive because every lost customer must be replaced just to maintain revenue, so low churn lets growth compound.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is retention usually more profitable than acquisition?",
        choices: [
          { id: "a", label: "Keeping a happy existing customer costs far less than winning a stranger, and they buy more, forgive more and recommend you" },
          { id: "b", label: "Because existing customers pay higher prices by law" },
          { id: "c", label: "Because acquisition is always free" },
          { id: "d", label: "Because retained customers never buy again" },
        ],
        correctChoiceId: "a",
        explanation: "Acquisition carries the full cost of persuading a stranger, while keeping a trusting customer is cheaper; existing customers also buy more over time, forgive mistakes and refer others — high customer lifetime value.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can no loyalty scheme retain fundamentally dissatisfied customers?",
        choices: [
          { id: "a", label: "Because the foundation of retention is a product genuinely worth coming back to; delivering value comes first" },
          { id: "b", label: "Because loyalty schemes are illegal" },
          { id: "c", label: "Because dissatisfied customers always stay anyway" },
          { id: "d", label: "Because schemes work only on new customers" },
        ],
        correctChoiceId: "a",
        explanation: "Retention rests on ongoing value and reduced friction; a rewards programme cannot compensate for a product that fails the customer's need, because loyalty is earned by being worth returning to.",
      },
      {
        dimension: "reasoning",
        prompt: "What distinguishes healthy retention from the 'retention trap'?",
        choices: [
          { id: "a", label: "Retention through value keeps customers who want to stay; retention through captivity traps them until an easier alternative appears" },
          { id: "b", label: "There is no difference between them" },
          { id: "c", label: "Captivity always produces loyal advocates" },
          { id: "d", label: "Value-based retention is always more expensive to the customer" },
        ],
        correctChoiceId: "a",
        explanation: "A customer kept because your product serves them is an advocate; one kept because leaving is a hassle is a liability who defects and warns others the moment a frustration-free option appears — only value-based retention compounds.",
      },
    ],
    sources: [
      { label: "Customer retention (overview)", note: "Reference on retention, churn and lifetime value.", type: "Reference", url: "https://en.wikipedia.org/wiki/Customer_retention" },
      { label: "OpenStax, Principles of Marketing", note: "Open textbook material on customer relationships and loyalty.", type: "Textbook", url: "https://openstax.org/details/books/principles-marketing" },
    ],
  },
  {
    concept: "Category Design",
    level: "University",
    summary: "framing a new problem so a new solution makes sense",
    estimatedMinutes: 9,
    deck: "The hardest marketing challenge is not being the best answer to a known question, but making people ask a new question in the first place. Category design is the ambitious game of creating a new category — a new way of seeing a problem — so that your solution becomes the obvious, defining answer to it.",
    keyTerms: [
      { label: "Category design", value: "Creating and defining a new market category rather than competing in an existing one." },
      { label: "Category king", value: "The company that defines and dominates a new category it created." },
      { label: "Different, not better", value: "Winning by changing the frame, not by beating rivals on existing terms." },
      { label: "Framing the problem", value: "Getting customers to see their situation in a new way that your solution fits." },
    ],
    sections: [
      {
        heading: "Creating the question, not just the answer",
        body: [
          `Most marketing competes within an existing category: you try to be the best or cheapest option among rivals answering a question customers already ask. Category design plays a different, more ambitious game. Instead of fighting to be the better answer to a known question, it creates a new category — a new way of framing a problem — so that a new kind of solution makes sense, and the company that defined the category becomes its natural leader.`,
          `The distinction is between "better" and "different". Competing on "better" means accepting the existing frame and trying to win within it — a hard, incremental battle against entrenched rivals. Category design competes on "different": it changes the frame itself, defining a new problem or a new way of thinking so that direct comparison with old solutions no longer applies. If you can make people see their situation your way, you are not one option among many; you are the category, and everyone else is compared to you.`,
        ],
      },
      {
        heading: "The category king",
        body: [
          `Research into fast-growing companies found that those which create and dominate a new category — sometimes called becoming the "category king" — capture a hugely disproportionate share of the value in that category, often the large majority of its profits. Being the company most associated with a new category is extraordinarily valuable, because you define the terms on which everyone, including later competitors, is judged. You set the standard, and rivals are forever the alternatives to you.`,
          `This is why category design is so powerful when it works: you are not splitting an existing pie but baking a new one and keeping most of it. Think of the companies that defined new categories — the ride-hailing app, the electric car as desirable rather than dutiful, the streaming service — each did not just enter a market but created and named a new way of doing something, and became synonymous with it. The prize is not market share in an old category but ownership of a new one.`,
        ],
      },
      {
        heading: "How you design a category",
        body: [
          `Creating a category is fundamentally about changing how people think, which is why it centres on framing the problem. The category designer articulates a problem, or a way of seeing the world, that people had not clearly named before, and positions their solution as the answer to it. This often means teaching the market: helping potential customers recognise a frustration or opportunity they had accepted as normal, so that once they see it your way, your solution feels not just appealing but obvious.`,
          `This is a different activity from ordinary product marketing. Much of the work is evangelising a point of view — spreading the new frame through language, storytelling and thought leadership, not just advertising features. You have to name the category, define its problem, and convince the market that it is real and important. If you succeed, demand for your solution follows naturally, because you have shaped the very lens through which customers now see their need. The company that defines the problem is best placed to own the answer.`,
        ],
      },
      {
        heading: "The risks of the frontier",
        body: [
          `Category design is high-reward but also high-risk and often misunderstood. Creating a genuinely new category is hard and expensive: you bear the cost of educating a market that does not yet know it wants what you offer, and many attempted new categories simply fail to take hold because the "problem" they name does not resonate. Being first is no guarantee; sometimes a later entrant, learning from the pioneer's mistakes, ends up owning the category the pioneer created.`,
          `There is also a temptation to mistake mere novelty or jargon for category design. Slapping a new buzzword on an old product, or claiming to have invented a category that is really just an existing one renamed, fools no one for long. True category design requires a genuinely new and useful way of framing a real problem, backed by a solution that delivers on it. When it is real, it is one of the most powerful strategies in business; when it is only marketing spin, it is quickly seen through. The frame has to be both new and true.`,
        ],
      },
      {
        heading: "The categories you now take for granted",
        body: [
          `You live surrounded by categories that someone designed. Before ride-hailing, "order a stranger's car with an app" was not a thing you wanted; before streaming, "watch anything instantly for a monthly fee" was not how you framed entertainment; energy drinks, the SUV, the smartphone — each named a new problem or desire and then owned the answer. You feel category design working whenever a product makes you realise you had a need you had never articulated, or when a brand becomes the generic word for a whole activity ("just Google it"). Noticing which companies you compare others to — the ones that set the standard for a category — reveals the category kings, and shows why creating the question can be far more powerful than merely answering it.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "How does category design differ from ordinary competition?",
        choices: [
          { id: "a", label: "It creates a new category and frame rather than competing to be the best answer to a known question" },
          { id: "b", label: "It only lowers prices within an existing category" },
          { id: "c", label: "It copies the market leader exactly" },
          { id: "d", label: "It avoids marketing altogether" },
        ],
        correctChoiceId: "a",
        explanation: "Rather than fighting to be the better answer to an existing question, category design creates a new way of framing a problem so a new solution makes sense — and its creator becomes the natural leader.",
      },
      {
        dimension: "reasoning",
        prompt: "What is the difference between competing on 'better' and on 'different'?",
        choices: [
          { id: "a", label: "'Better' accepts the existing frame and fights within it; 'different' changes the frame so old comparisons no longer apply" },
          { id: "b", label: "They mean exactly the same thing" },
          { id: "c", label: "'Different' means having a lower price" },
          { id: "d", label: "'Better' means creating a new category" },
        ],
        correctChoiceId: "a",
        explanation: "Competing on 'better' is an incremental battle within an entrenched frame; category design competes on 'different' by changing the frame itself, so you become the category rather than one option in it.",
      },
      {
        dimension: "depth",
        prompt: "What is a 'category king'?",
        choices: [
          { id: "a", label: "The company that defines and dominates a new category, capturing a disproportionate share of its value" },
          { id: "b", label: "The cheapest company in a market" },
          { id: "c", label: "The oldest company in an industry" },
          { id: "d", label: "A company that never advertises" },
        ],
        correctChoiceId: "a",
        explanation: "The category king creates and dominates a new category, capturing the majority of its profits, because it defines the terms on which everyone — including later rivals — is judged.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does category design centre on 'framing the problem'?",
        choices: [
          { id: "a", label: "Because it must change how people think, helping them see a need they had not named so the solution feels obvious" },
          { id: "b", label: "Because framing has nothing to do with customers" },
          { id: "c", label: "Because it only involves setting a price" },
          { id: "d", label: "Because customers already understand every new category" },
        ],
        correctChoiceId: "a",
        explanation: "Creating a category means teaching the market to recognise a frustration or opportunity it had accepted as normal; once people see it your way, your solution feels obvious, so the designer evangelises a point of view, not just features.",
      },
      {
        dimension: "reasoning",
        prompt: "What distinguishes true category design from mere marketing spin?",
        choices: [
          { id: "a", label: "A genuinely new, useful frame for a real problem backed by a solution that delivers — not a buzzword on an old product" },
          { id: "b", label: "Using the most impressive-sounding jargon" },
          { id: "c", label: "Renaming an existing category" },
          { id: "d", label: "Being first, which always guarantees success" },
        ],
        correctChoiceId: "a",
        explanation: "Slapping a new buzzword on an old product fools no one for long; real category design requires a new and true way of framing a real problem with a solution that delivers — the frame must be both new and true.",
      },
    ],
    sources: [
      { label: "Play Bigger (category design)", note: "Reference on creating categories and becoming the category king.", type: "Reference", url: "https://en.wikipedia.org/wiki/Category_management" },
      { label: "Positioning and differentiation (overview)", note: "Reference on framing, differentiation and new markets.", type: "Reference", url: "https://en.wikipedia.org/wiki/Product_differentiation" },
    ],
  },
];

export const marketingLessons = buildAuthoredLessons("marketing", marketing);
