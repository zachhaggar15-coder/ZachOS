import { buildAuthoredLessons, type AuthoredLesson } from "./types";

// Ten hand-written Social Engineering lessons, written from a defensive,
// security-awareness angle: how manipulation and social-engineering attacks
// work so you can recognise and resist them. Each closes on an everyday example,
// with genuine recall quizzes.
const socialEngineering: AuthoredLesson[] = [
  {
    concept: "The Fraud Triangle",
    level: "University",
    summary: "why ordinary people commit fraud, and which leg you can actually remove",
    estimatedMinutes: 9,
    deck: "Cressey interviewed convicted embezzlers expecting to find criminals and found accountants. None had planned it; all had a private financial problem they could not admit to; each had a story in which they were not really stealing. His model of the three conditions is the foundation of every fraud control regime — and two of its legs are almost impossible to touch.",
    keyTerms: [
      { label: "Pressure", value: "A non-shareable financial problem the person cannot admit to anyone." },
      { label: "Opportunity", value: "The perceived ability to solve it secretly by violating trust." },
      { label: "Rationalisation", value: "The account under which the act is not really theft — held before, not after." },
      { label: "The trusted violator", value: "Cressey's subject: someone who took a position in good faith and later abused it." },
    ],
    sections: [
      {
        heading: "What Cressey found",
        body: [
          `Donald Cressey's 1953 study interviewed around two hundred imprisoned embezzlers and destroyed the profile everyone expected. His subjects were not people who took jobs intending to steal — they had entered their positions in good faith, often years earlier, with unremarkable records. He called them trusted violators, and the question became what turns a trustworthy person into one, given that nothing about the person had changed.`,
          `Three conditions had to hold together. Pressure: a financial problem the person defined as non-shareable, which is the crucial qualifier — not merely a need for money but one that could not be admitted to anyone, because admitting it would destroy a status they held. Gambling debts, an affair's expenses, a business failure concealed from a spouse, a lifestyle whose collapse would be visible. Opportunity: a perceived way to solve it secretly by violating trust. Rationalisation: a story under which the act was not really stealing. Remove any one and the fraud does not happen, which is why the model is a triangle rather than a list.`,
        ],
      },
      {
        heading: "The rationalisation comes first",
        body: [
          `The finding that carries the most weight is about sequence. Rationalisation is not a defence constructed after the fact to cope with guilt — it is a precondition, present before the first act, and without it the act does not occur. The person must be able to describe what they are about to do in terms consistent with being an honest person, because they are an honest person, and that self-image is not negotiable. It is the last thing they will give up, and the fraud is arranged around preserving it.`,
          `So the vocabulary is remarkably consistent across cases. It is a loan and I will put it back. I am owed this, given what they pay me and what I do. The company will never miss it. Everyone does this. I am only using it temporarily. Note that most of these are not obviously false — many embezzlers genuinely are underpaid, and the first amount often genuinely is repaid, which is what makes the rationalisation robust. The mechanism is that the story permits the first act, the first act does not produce the punishment the story predicted, and the amount grows until the loan can no longer be repaid and there is no exit. Almost nobody's last theft resembles their first.`,
        ],
      },
      {
        heading: "Only one leg is controllable",
        body: [
          `The model's practical value is what it says about control, and it is sobering. Pressure is largely outside an organisation's reach: you cannot know about the gambling debt, the ill relative or the concealed second household, and by definition the problem is non-shareable, so the person will not tell you. Rationalisation lives inside someone's head and responds only weakly to intervention — ethics training addresses it, and the honest evidence on whether it moves behaviour is thin, since the person committing fraud already believes they are honest and can generally pass a course confirming it.`,
          `Opportunity is the leg you can actually remove, and this is why fraud control looks the way it does rather than trying to make people better. Segregation of duties means no one person can both authorise and record a transaction. Mandatory leave exists because ongoing frauds usually need daily maintenance and surface within two weeks of the perpetrator being away from the system. Job rotation, dual authorisation, reconciliation by someone other than the preparer, audit trails that cannot be edited by their subject — every one is an admission that you cannot control the other two legs and are not going to try. The design assumption is not that your staff are dishonest; it is that you cannot tell which of them is under non-shareable pressure this year, and the arrangement should not require you to know.`,
        ],
      },
      {
        heading: "What the model misses",
        body: [
          `Later work adds a fourth condition that Cressey's framework underweights: capability. Wolfe and Hermanson's fraud diamond points out that opportunity is not enough — the person must have the position, the technical knowledge, the ego to believe they will not be caught, and the capacity to handle the sustained stress of concealment. This matters because it predicts where large frauds come from. They are committed by senior, capable, confident people, since those are the only people who can both see the gap and hold the deception together for years. Small frauds are widely distributed; the ruinous ones concentrate at the top, where controls are also weakest because the controls are administered by the people being controlled.`,
          `The other limit is that the triangle explains individual violation and not the organisational version, where nobody quite decides to commit fraud but a norm drifts. Pressure from targets, opportunity in the accounting judgement, and a rationalisation supplied by everyone around you doing the same thing produce collective misconduct through the same three legs with the individual decision removed — and the rationalisation is much stronger, because it is confirmed socially rather than privately maintained. That is a harder problem, and it is the one most large corporate scandals actually are.`,
        ],
      },
      {
        heading: "Why 'we trust our people' is not a control",
        body: [
          `The transferable point is a distinction between trust and control that most organisations collapse. Objecting to segregation of duties on the grounds that you trust your staff misunderstands what the control does: it does not express suspicion of a person, it removes a condition that would otherwise combine with pressures you cannot see and rationalisations you cannot audit. Trust is a belief about someone's character; a control is an arrangement that does not depend on your belief being right. Cressey's real finding is that character is not protective under sufficient non-shareable pressure — his subjects had good character right up until they had a problem they could not tell anyone about. And the personal version is worth keeping: the point to watch is not when you consider doing something wrong, it is when you notice you have a story for why it would not really be wrong.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "reasoning",
        prompt: "What made Cressey's subjects 'trusted violators'?",
        choices: [
          { id: "a", label: "They entered in good faith and later abused the trust" },
          { id: "b", label: "They were placed in roles despite known prior offences" },
          { id: "c", label: "They violated the trust of colleagues rather than of the organisation" },
          { id: "d", label: "They were trusted by auditors who failed to detect their schemes" },
        ],
        correctChoiceId: "a",
        explanation: "He expected criminals and found accountants with unremarkable records. The question became what turns a trustworthy person into one — which is what the three conditions answer.",
      },
      {
        dimension: "depth",
        prompt: "Why does Cressey specify that the financial pressure must be non-shareable?",
        choices: [
          { id: "a", label: "Admitting it would destroy a status they hold" },
          { id: "b", label: "Shared financial problems are resolved by colleagues before fraud occurs" },
          { id: "c", label: "Non-shareable problems tend to involve larger sums of money" },
          { id: "d", label: "Only secret debts create a legal motive for concealment" },
        ],
        correctChoiceId: "a",
        explanation: "Not merely needing money but a problem that cannot be told to anyone — gambling debts, a concealed business failure, a lifestyle whose collapse would be visible. This is why the leg is outside an organisation's reach.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does the sequence of rationalisation matter?",
        choices: [
          { id: "a", label: "It precedes the act; without the story, no act" },
          { id: "b", label: "It follows the act, which is why guilt eventually produces confessions" },
          { id: "c", label: "It develops gradually as the amounts stolen increase over time" },
          { id: "d", label: "It is constructed by defence lawyers rather than by perpetrators" },
        ],
        correctChoiceId: "a",
        explanation: "The self-image is not negotiable and the fraud is arranged around preserving it. The story permits the first act, the punishment it predicted does not arrive, and almost nobody's last theft resembles their first.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does fraud control target opportunity rather than the other two legs?",
        choices: [
          { id: "a", label: "Only opportunity is controllable; the rest is hidden" },
          { id: "b", label: "Opportunity is the leg most strongly correlated with actual losses" },
          { id: "c", label: "Regulators require opportunity controls but not ethics programmes" },
          { id: "d", label: "Removing opportunity also removes the pressure that motivates fraud" },
        ],
        correctChoiceId: "a",
        explanation: "Mandatory leave works because ongoing frauds need daily maintenance and surface within two weeks. The design assumption is that you cannot tell which of your staff is under non-shareable pressure this year.",
      },
      {
        dimension: "reasoning",
        prompt: "What does the capability addition predict about large frauds?",
        choices: [
          { id: "a", label: "They cluster at the top, where controls are weakest" },
          { id: "b", label: "They are committed by technically skilled staff in junior positions" },
          { id: "c", label: "They occur mainly in organisations without segregation of duties" },
          { id: "d", label: "They require collaboration between at least two perpetrators" },
        ],
        correctChoiceId: "a",
        explanation: "Only senior, capable, confident people can both see the gap and hold a deception together for years. Small frauds are widely distributed; the ruinous ones are not.",
      },
    ],
    sources: [
      { label: "Cressey's fraud triangle (overview)", note: "Reference on pressure, opportunity, rationalisation and the trusted violator.", type: "Reference", url: "https://en.wikipedia.org/wiki/Fraud_deterrence" },
      { label: "ACFE Report to the Nations", note: "Association of Certified Fraud Examiners' recurring study of occupational fraud cases.", type: "Reference", url: "https://www.acfe.com/fraud-resources/report-to-the-nations-archive" },
    ],
  },
  {
    concept: "Insider Threat",
    level: "University",
    summary: "the attacker who is already authorised, and why detection is the hard part",
    estimatedMinutes: 9,
    deck: "Every security control assumes a boundary with attackers outside it. The insider is inside — they hold valid credentials, their access is legitimate, their activity is normal for their role, and every control you own was built on the premise that this person is who you are protecting. The detection problem is not technical. It is that authorised use and abuse look identical.",
    keyTerms: [
      { label: "Insider threat", value: "Harm caused by someone with legitimate authorised access, whether deliberate or not." },
      { label: "The unwitting insider", value: "The employee whose access is used against the organisation without their knowledge." },
      { label: "Critical pathway", value: "The observable progression from personal stressor through concerning behaviour to hostile act." },
      { label: "Least privilege", value: "Granting only the access a role actually requires, which bounds the damage of any single account." },
    ],
    sections: [
      {
        heading: "Why the model breaks",
        body: [
          `Security is built around a perimeter: authenticate at the boundary, and inside the boundary access is granted because you established who you are. Every part of that architecture assumes the authenticated party is acting for the organisation, and the insider violates the assumption while satisfying every control. They pass authentication because the credentials are genuinely theirs. Their access is legitimate because it was granted deliberately for work they actually do. Their behaviour is normal because it is their normal behaviour.`,
          `This is why insider incidents run so long before discovery, typically far longer than external intrusions — an external attacker must do something anomalous to get in and leaves traces at the boundary, while the insider generates no boundary event at all. There is nothing to detect at the point of entry, because there is no entry. And the category is broader than the malicious employee: the negligent insider who misconfigures a share, and the unwitting insider whose account is used by someone else after a successful phish, cause the same harm through the same authorised path. From the logs they are indistinguishable, which is the whole problem.`,
        ],
      },
      {
        heading: "The detection problem",
        body: [
          `The signal you need is intent, and intent leaves almost no technical trace. An analyst downloading the customer database is doing their job; the same analyst downloading it the week before joining a competitor is exfiltrating it. Identical action, identical logs, opposite meaning — and no volume of monitoring resolves it, because the discriminating information is not in the system at all. This is a base rate problem too: insiders are rare, so a detector with a low false positive rate still buries every true hit under noise, and analysts learn to dismiss the alerts.`,
          `Behavioural analytics attacks it by modelling normal for each account and flagging deviation — accessing systems outside your pattern, working unusual hours, touching records unrelated to your cases. It genuinely helps and it is limited in ways worth naming. Normal drifts as roles change. The patient insider stays within their baseline, taking a little at a time for years, and the baseline is set by them. And the most damaging insiders are senior, where the role legitimately touches everything and there is no anomaly to find. So the detection that works is mostly not technical: the disclosure by a colleague, the reported approach from outside, the manager noticing that someone's account of their circumstances stopped adding up.`,
        ],
      },
      {
        heading: "The pathway, and why the profile fails",
        body: [
          `Research on cases, notably Shaw and Sellers' critical pathway work, finds that hostile insiders rarely act suddenly. There is a progression: a predisposition or personal stressor, then a grievance — often a specific triggering event like a bad review, a passed-over promotion or a disciplinary process — then observable concerning behaviours such as escalating disputes, policy violations, and probing systems outside their role, then the act. Crucially, colleagues usually noticed something and often reported nothing, because it did not look like security's business and reporting a colleague is socially expensive.`,
          `The trap is turning this into a profile, and it is worth being precise about why it fails. The pathway is common in insiders and vastly more common in people who never do anything — disgruntlement after a bad review is close to universal, and using it as a predictor generates false positives at a rate that would poison an organisation faster than any insider could. Programmes that go this way produce surveillance of grievance, which manufactures the grievance they were screening for and teaches everyone to hide their stressors. The defensible use of the pathway is as an intervention model rather than a detection one: the stressor and the grievance are the points where a functioning organisation can actually resolve something, and by the time you are looking for technical indicators you are already at the end.`,
        ],
      },
      {
        heading: "Controls that assume the insider",
        body: [
          `The workable defences do not try to identify the person and instead limit what any authorised account can do. Least privilege bounds the damage without needing to know who is hostile. Segregation of duties means no single account completes a harmful action alone. Tamper-evident logging matters specifically because it must not be editable by the person it records, which is the control senior insiders defeat most often. Exit procedures are the highest-yield item of all, since a large share of data theft happens in the final weeks of employment, when motive is highest and access has not yet been revoked.`,
          `Underneath is a cultural condition that no product supplies. Almost every discovered case involved someone who saw something and did not report it, so the reporting path has to be low-cost, credible and demonstrably not punitive toward the reporter or the subject — a channel where raising a concern about a colleague reliably results in someone competent looking into it, rather than in an investigation the reporter must own. Organisations that build heavy surveillance and no trusted channel get the worst outcome available: staff who assume they are monitored, resent it, and report nothing, in an environment where monitoring was never going to be the thing that worked.`,
        ],
      },
      {
        heading: "Why the exit is the exposure",
        body: [
          `The practical residue is a shift in where risk is expected to sit. It is not distributed evenly across a career — it concentrates hard at transitions, when someone has decided to leave and has not yet been offboarded, and that is a window an organisation controls completely and usually squanders. Notice too the defensive lesson for the individual: the unwitting insider category means the account most useful to an attacker is one belonging to someone with no idea they are involved, and the value of your access rarely matches your seniority. Whoever holds the credentials that touch the interesting system is the target, and it is frequently someone who assumes nobody would bother with them.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "reasoning",
        prompt: "Why does perimeter security fail against insiders?",
        choices: [
          { id: "a", label: "No boundary event: credentials and access are legitimate" },
          { id: "b", label: "Perimeter controls are typically misconfigured in most organisations" },
          { id: "c", label: "Insiders know which specific controls to circumvent" },
          { id: "d", label: "The perimeter cannot distinguish between employees and contractors" },
        ],
        correctChoiceId: "a",
        explanation: "There is nothing to detect at the point of entry because there is no entry. Which is why insider incidents run far longer before discovery than external intrusions do.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can monitoring not resolve the insider detection problem?",
        choices: [
          { id: "a", label: "The needed signal is intent, which actions hide" },
          { id: "b", label: "Monitoring systems cannot process the volume of logs organisations generate" },
          { id: "c", label: "Privacy law prohibits the monitoring that would be effective" },
          { id: "d", label: "Insiders routinely disable logging before acting" },
        ],
        correctChoiceId: "a",
        explanation: "An analyst downloading the customer database is doing their job, or exfiltrating it before joining a competitor. The discriminating information is not in the system at all — and the base rate buries true hits in noise.",
      },
      {
        dimension: "reasoning",
        prompt: "What limits behavioural analytics against the most damaging insiders?",
        choices: [
          { id: "a", label: "Senior roles touch everything and set their own baseline" },
          { id: "b", label: "Senior staff are usually excluded from monitoring by policy" },
          { id: "c", label: "Analytics require more historical data than most organisations retain" },
          { id: "d", label: "Behavioural models cannot be applied to shared service accounts" },
        ],
        correctChoiceId: "a",
        explanation: "Normal drifts as roles change, and taking a little at a time for years stays inside the baseline. The detection that works is mostly not technical — the disclosure by a colleague, the manager noticing an account that stopped adding up.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is the critical pathway dangerous to use as a profile?",
        choices: [
          { id: "a", label: "Disgruntlement is universal, so screening breeds false positives" },
          { id: "b", label: "The pathway stages occur in a different order in most real cases" },
          { id: "c", label: "Insiders deliberately conceal the early stages from colleagues" },
          { id: "d", label: "The research base is drawn from too few documented cases" },
        ],
        correctChoiceId: "a",
        explanation: "Surveillance of grievance produces the grievance it was screening for and teaches everyone to hide stressors. The defensible use is as an intervention model — the stressor and grievance are where something can actually be resolved.",
      },
      {
        dimension: "depth",
        prompt: "Why do exit procedures yield disproportionate protection?",
        choices: [
          { id: "a", label: "Most theft comes in the final weeks, access still live" },
          { id: "b", label: "Departing employees are more likely to be recruited by competitors" },
          { id: "c", label: "Exit interviews reliably surface prior misconduct" },
          { id: "d", label: "Revoking access removes the organisation's legal liability" },
        ],
        correctChoiceId: "a",
        explanation: "Risk concentrates at transitions rather than spreading evenly across a career — and that window is one the organisation controls completely and usually squanders.",
      },
    ],
    sources: [
      { label: "CISA Insider Threat Mitigation Guide", note: "US agency guidance on categories, indicators and programme design.", type: "Reference", url: "https://www.cisa.gov/topics/physical-security/insider-threat-mitigation" },
      { label: "CERT Common Sense Guide to Insider Threats", note: "Carnegie Mellon's case-derived best practices for detection and control.", type: "Reference", url: "https://insights.sei.cmu.edu/library/common-sense-guide-to-mitigating-insider-threats-seventh-edition/" },
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
          { id: "a", label: "A norm that we must repay what others give" },
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
          { id: "a", label: "Even an unasked gift creates debt that raises compliance" },
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
          { id: "a", label: "Refuse a big ask, then a smaller one feels owed" },
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
          { id: "a", label: "Seeing the gift as a tactic, not a favour" },
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
          { id: "a", label: "Most reciprocity is healthy and fine" },
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
    concept: "Synthetic Media",
    level: "University",
    summary: "what happens to evidence when recordings stop proving anything",
    estimatedMinutes: 9,
    deck: "The obvious worry about deepfakes is being fooled by a fake. The structural problem is the opposite one: once everyone knows convincing fakes are cheap, real recordings lose their power too, and the person caught on tape has a defence that did not previously exist. The damage does not require anyone to be deceived.",
    keyTerms: [
      { label: "Synthetic media", value: "Audio, image or video generated or altered by machine learning to depict events that did not occur." },
      { label: "The liar's dividend", value: "Chesney and Citron's term for the benefit the guilty gain once any recording can be dismissed as fake." },
      { label: "Provenance", value: "Verifying where a recording came from rather than inspecting the artefact for signs of forgery." },
      { label: "Vishing", value: "Voice phishing, now able to clone a specific known person from seconds of sample audio." },
    ],
    sections: [
      {
        heading: "The authentication assumption",
        body: [
          `For roughly a century, recorded media carried an implicit guarantee: producing a convincing fake required resources, skill and time proportionate to its quality. That assumption was doing enormous work throughout society. It underwrote photographic evidence in court, made recordings decisive in journalism, and — most invisibly — meant that hearing a familiar voice on the phone authenticated the speaker. Nobody wrote that rule down because nobody had to.`,
          `The assumption has failed. Cloning a specific person's voice now needs seconds of reference audio, which is trivially available for anyone who has spoken publicly, appeared in a video, or answered a phone. Video synthesis is behind audio but moving quickly. The important framing is not that a new attack has appeared but that a background assumption underpinning many unrelated systems has quietly stopped holding — and most of those systems never explicitly relied on it, so nobody is reviewing them. Voice authentication at a bank, a call from your finance director, a recording as evidence: all were resting on the same thing.`,
        ],
      },
      {
        heading: "The liar's dividend",
        body: [
          `Robert Chesney and Danielle Citron identified the effect that makes this structurally worse than fraud, and it is counterintuitive. The primary harm is not that people believe fakes. It is that the existence of fakes gives everyone plausible deniability about anything real. The politician recorded saying the damaging thing now says it is a deepfake, and that defence is newly available, cheap, and impossible to refute quickly.`,
          `They call this the liar's dividend, and the mechanics are ugly: it pays out best to the people who most deserve to be caught, and it grows as public awareness of deepfakes grows. Educating people that fakes exist — the obvious intervention — directly increases the dividend, because it is exactly what makes the denial credible. So the countermeasure strengthens the attack. And notice that no one has to be deceived for the harm to land: it is enough that the audience knows deception is possible, at which point recordings stop settling questions and become just another contested claim. The endpoint is not a world of successful fakes but one where evidence has lost its function, and where the epistemically careful person and the cynic are indistinguishable in behaviour.`,
        ],
      },
      {
        heading: "Why detection loses",
        body: [
          `The instinctive response is to build detectors, and the structural reasons this fails are worth understanding. Generative models improve against detectors directly — a detector is a discriminator, and training against one is the standard method for making a better generator, so publishing an effective detector supplies the training signal that defeats it. This is not an implementation flaw but an adversarial dynamic that runs in the attacker's favour by construction.`,
          `The deployment realities are worse than the technical ones. Detection must run before a claim spreads, and it does not: the fake is seen by the audience that matters within hours, and the analysis arrives days later to a much smaller audience that has already formed a view. Compression and re-encoding through ordinary platform pipelines destroy the artefacts detectors rely on, so the version people actually see is the hardest one to assess. And detectors output probabilities, while the questions asked of them are binary — "seventy-three percent likely synthetic" does not settle whether to run the story, and it does not persuade anyone who does not want to be persuaded. Detection is worth having as one input and it will not carry the weight being placed on it.`,
        ],
      },
      {
        heading: "Provenance instead",
        body: [
          `The more promising direction inverts the question: stop inspecting artefacts for signs of forgery and start verifying where they came from. Provenance approaches — the C2PA standard being the main effort — cryptographically sign media at capture and maintain a signed record of subsequent edits, so the claim being checked is not "does this look real" but "is this what that camera recorded, and what happened to it since." The asymmetry is favourable: you cannot forge a signature chain the way you can forge pixels.`,
          `The honest limitations are severe. It requires adoption across capture devices, editing software and platforms, and unsigned media cannot be treated as fake, since the vast majority of genuine footage — every phone recording of every real event — carries no signature at all. So provenance can raise confidence in signed material and cannot lower it in unsigned material, which is a real but partial win. The deeper point is that the fix is institutional rather than technical: the durable answer to "can I trust this recording" turns out to be the same as it was before recordings existed, which is trusting the chain of people and processes that handed it to you. We had a century-long holiday from that question, and it is ending.`,
        ],
      },
      {
        heading: "Why voice is no longer authentication",
        body: [
          `The immediate defensive consequence is concrete and worth acting on. Any process where recognising a voice authorises something — a payment, a credential reset, an urgent instruction from someone senior — is now broken, and the attacks are already routine rather than theoretical. The defence is not listening more carefully, because the clone is better than your ear; it is a channel change, where anything consequential requested by voice gets verified through a separate path the caller did not choose. Notice that the requests engineered to defeat this are the urgent ones, and urgency is precisely the thing that makes people skip the callback. More broadly, the reflex worth building is not "is this fake" — which you cannot determine — but "where did this come from, and what would I be doing if it were fake," which you can usually answer.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "reasoning",
        prompt: "What background assumption has synthetic media broken?",
        choices: [
          { id: "a", label: "A convincing fake once needed matching resources" },
          { id: "b", label: "That most people can identify manipulated images when they concentrate" },
          { id: "c", label: "That recordings are always made with the subject's knowledge" },
          { id: "d", label: "That digital media degrades detectably each time it is copied" },
        ],
        correctChoiceId: "a",
        explanation: "Nobody wrote the rule down because nobody had to — and it silently underwrote photographic evidence, journalism, and the fact that a familiar voice authenticated a caller. Those systems are not being reviewed because they never named the assumption.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is the liar's dividend worse than being deceived by fakes?",
        choices: [
          { id: "a", label: "No one need be fooled; the guilty just cry fake" },
          { id: "b", label: "It affects a larger number of people than any individual fake does" },
          { id: "c", label: "It causes reputational damage that cannot be legally remedied" },
          { id: "d", label: "It makes authentic recordings technically harder to produce" },
        ],
        correctChoiceId: "a",
        explanation: "Recordings stop settling questions and become contested claims. The endpoint is not a world of successful fakes but one where evidence has lost its function.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does educating the public about deepfakes have a perverse effect?",
        choices: [
          { id: "a", label: "Awareness makes the 'deepfake' denial credible" },
          { id: "b", label: "It teaches potential attackers which techniques are most effective" },
          { id: "c", label: "It causes people to over-detect fakes in ordinary photographs" },
          { id: "d", label: "It reduces the audience for legitimate investigative journalism" },
        ],
        correctChoiceId: "a",
        explanation: "The countermeasure strengthens the attack, and the dividend pays out best to the people who most deserve to be caught. This is the awkward core of Chesney and Citron's argument.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does publishing an effective detector undermine it?",
        choices: [
          { id: "a", label: "A detector is a discriminator that trains a better faker" },
          { id: "b", label: "Attackers can inspect the code to find implementation bugs" },
          { id: "c", label: "Public detectors attract adversarial attention they would not otherwise get" },
          { id: "d", label: "Detection accuracy declines as more people use the same tool" },
        ],
        correctChoiceId: "a",
        explanation: "It supplies the training signal that defeats it — an adversarial dynamic that runs in the attacker's favour by construction, not an implementation flaw. Compression destroying artefacts and probabilistic outputs make deployment worse still.",
      },
      {
        dimension: "reasoning",
        prompt: "What can provenance achieve, and what can it not?",
        choices: [
          { id: "a", label: "It lifts trust in signed media, but not in unsigned" },
          { id: "b", label: "It identifies synthetic media reliably once adoption reaches a majority of devices" },
          { id: "c", label: "It replaces the need to trust institutions with cryptographic guarantees" },
          { id: "d", label: "It works retroactively on recordings made before the standard existed" },
        ],
        correctChoiceId: "a",
        explanation: "You cannot forge a signature chain the way you forge pixels, but every phone video of every real event is unsigned. The durable answer turns out to be trusting the chain of people who handed it to you — as it was before recordings existed.",
      },
    ],
    sources: [
      { label: "Chesney and Citron, 'Deep Fakes' (overview)", note: "Reference on the liar's dividend and the legal and political consequences.", type: "Reference", url: "https://en.wikipedia.org/wiki/Deepfake" },
      { label: "C2PA Content Provenance Standard", note: "The coalition specification for signing media at capture and recording edits.", type: "Reference", url: "https://c2pa.org/" },
    ],
  },
  {
    concept: "Social Proof",
    level: "A-level",
    summary: "treating others' behaviour as evidence for what to do",
    estimatedMinutes: 8,
    deck: "When we don't know what to do, we look at what everyone else is doing and copy them. This 'social proof' is usually a sensible shortcut, but it can be fabricated with fake reviews, bought followers and staged crowds — and in the wrong conditions it can even lead a crowd to ignore an emergency happening right in front of them.",
    keyTerms: [
      { label: "Social proof", value: "Treating others' behaviour as the right way to act." },
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
          { id: "a", label: "Treating others' behaviour as the right way to act" },
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
          { id: "a", label: "Uncertainty, when we lack our own basis to decide" },
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
          { id: "a", label: "Fake reviews and bought followers faking popularity" },
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
          { id: "a", label: "Others' inaction reads as all-clear" },
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
          { id: "a", label: "Ask whether the crowd is genuine" },
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
          { id: "a", label: "Faking an identity and scenario to extract access" },
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
          { id: "a", label: "Names and jargon armour the fake role" },
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
          { id: "a", label: "Helpfulness and trust are what the pretexter exploits" },
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
          { id: "a", label: "People rarely verify identity and feel awkward asking" },
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
          { id: "a", label: "Verify identity through a separate trusted channel" },
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
      { label: "Phishing", value: "Deceptive messages tricking you into data or clicks." },
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
          { id: "a", label: "Deceptive messages tricking you into data or clicks" },
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
          { id: "a", label: "Researched and tailored to one target" },
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
          { id: "a", label: "Millions of messages cost almost nothing" },
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
          { id: "a", label: "Fake authority, urgency, a call to click" },
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
          { id: "a", label: "Verify through a separate channel, not its links" },
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
      { label: "Elicitation", value: "Drawing it out in casual talk, without obvious questioning." },
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
          { id: "a", label: "Drawing it out in casual talk" },
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
          { id: "a", label: "Praising expertise makes people reveal to prove it" },
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
          { id: "a", label: "A friendly chat feels safe, so guards drop" },
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
          { id: "a", label: "Harmless details aggregate into a valuable whole" },
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
          { id: "a", label: "Staying mindful of what you reveal, even in chat" },
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
      { label: "Roach motel", value: "Easy to sign up, hard to cancel." },
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
          { id: "a", label: "Interfaces built to trick users against their interests" },
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
          { id: "a", label: "Easy to sign up, hard to cancel" },
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
          { id: "a", label: "Shaming language for declining an option" },
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
          { id: "a", label: "They lift metrics subtly enough to escape notice" },
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
          { id: "a", label: "Recognising the named patterns as manipulation" },
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
          { id: "a", label: "Persuasion respects your agency; manipulation subverts it" },
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
          { id: "a", label: "Honest reasoning versus deception" },
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
          { id: "a", label: "Would it still work if the target fully knew?" },
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
          { id: "a", label: "It still disrespects autonomy" },
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
          { id: "a", label: "Deception, pressure or secrecy signal it" },
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
