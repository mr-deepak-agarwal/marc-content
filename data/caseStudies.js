// data/caseStudies.js
//
// Week 6 — case studies rebuilt as full-funnel conversion pages.
//
// SOURCE: "MARC Case Studies From Attached Documents" deck + "Public Case Studies,
// Testimonials & Client References" note. Every figure below comes from those
// documents. Nothing here is invented: where the source describes findings
// and recommendations rather than a measured business result, the "results"
// list says so honestly instead of quoting a made-up percentage.
//
// NAMING: Coastal Chicken and Partagal Math are named (client consent
// confirmed). Every other engagement stays anonymous, as per the reference note.
//
// To add a case study: append an object here. The detail page, index card,
// filters, related-case links and sitemap entry are all generated from this file.

export const CASE_STUDY_INDUSTRIES = {
  'food-fmcg': 'Food & FMCG',
  'food-processing': 'Food Processing',
  engineering: 'Engineering & Construction',
  defence: 'Defence & Investment',
  agriculture: 'Agriculture & Equipment',
  technology: 'Technology & SaaS',
  pharma: 'Pharma & Life Sciences',
  tourism: 'Tourism & Social Infrastructure',
}

// service id -> label + the pillar service page it links to
export const CASE_STUDY_SERVICES = {
  feasibility: {
    label: 'Feasibility Study',
    href: '/services/feasibility-study-service-in-india',
    cta: 'Get a Free Scope Call',
    ctaBlurb: 'Tell us about your project and we will scope a feasibility study around it.',
  },
  'market-research': {
    label: 'Market Research',
    href: '/services/market-research-company-in-india',
    cta: 'Request a Research Proposal in 24 Hours',
    ctaBlurb: 'Share the decision you are trying to make and we will come back with a scoped proposal within a day.',
  },
  internationalisation: {
    label: 'Market Entry & Internationalisation',
    href: '/services/internationalization-services-india',
    cta: 'Discuss Your Expansion Plan',
    ctaBlurb: 'Tell us which markets you are considering and we will show you how we would rank and test them.',
  },
  strategy: {
    label: 'Growth Strategy & Profitability',
    href: '/services/strategy-consulting-companies-in-india',
    cta: 'Talk to a Strategy Advisor',
    ctaBlurb: 'Walk us through your capacity, margins and growth options and we will tell you where to start.',
  },
}

export const caseStudies = [
  // ─────────────────────────────────────────────────────────────── 1
  {
    slug: 'short-shelf-life-foods-kerala-distribution-feasibility',
    title: 'Kerala Short Shelf-Life Foods: Testing a ₹2,562 Crore Opportunity Across 9 Districts',
    shortTitle: 'Short Shelf-Life Packaged Foods in Kerala',
    client: 'A Kerala state cooperative (anonymised)',
    named: false,
    industry: 'food-fmcg',
    service: 'feasibility',
    tags: ['Distribution feasibility', 'Packaged foods', 'Kerala', 'Route economics', 'Pilot design'],
    metaDescription:
      'How MARC tested whether a dairy cooperative’s distribution network could carry bakery, batter and ready-to-cook foods in Kerala: a 150-stakeholder field study and a 90-day pilot model.',
    keywords: [
      'distribution feasibility study Kerala',
      'packaged food market entry India',
      'short shelf-life food distribution',
      'FMCG feasibility study India',
    ],
    summary:
      'A state cooperative with a strong dairy distribution legacy wanted to enter 24–48 hour freshness categories. MARC tested whether its network could protect freshness, margins and working capital together.',
    question:
      'Can an existing dairy distribution network support perishable bakery, batter and ready-to-cook products?',
    facts: [
      { value: '₹2,562 Cr', label: 'Kerala opportunity mapped (7% of packaged foods)' },
      { value: '150', label: 'stakeholders interviewed' },
      { value: '9', label: 'Kerala districts covered' },
      { value: '90-day', label: 'hub-and-spoke pilot model' },
    ],
    before: [
      'A state cooperative with a strong dairy distribution legacy wanted to enter categories that live or die within 24–48 hours of freshness.',
      'Categories assessed were bakery, batter and ready-to-cook (RTC) foods.',
      'The Kerala opportunity was mapped at ₹2,562 crore, about 7% of packaged foods, growing at a 7.03% CAGR.',
    ],
    approach: [
      'A 150-stakeholder field study across 9 Kerala districts.',
      'Analysis of route economics, trade margins, credit cycles, wastage and competitor benchmarks.',
      'A 90-day hub-and-spoke pilot model, so the network could be tested before capital was committed.',
    ],
    results: [
      'Trade economics, not consumer pull alone, decide whether a product earns shelf presence.',
      'RTC carried the highest margin but also the most severe working-capital and wastage risk.',
      'Distributor viability required routes under 40 km, 25–50 outlets per route and fulfilment in under 48 hours.',
    ],
    takeaway:
      'The right question was not “is there demand?” It was whether the distribution system could protect freshness, margins and working capital together.',
    relatedBlogs: [],
  },

  // ─────────────────────────────────────────────────────────────── 2
  {
    slug: 'coastal-chicken-poultry-growth-roadmap',
    title: 'Coastal Chicken: A Growth Roadmap to Fill 32,000 Birds a Day of Processing Capacity',
    shortTitle: 'Coastal Chicken Growth Roadmap',
    client: 'Coastal Chicken',
    named: true,
    industry: 'food-processing',
    service: 'strategy',
    tags: ['Capacity utilisation', 'B2B growth', 'Value-added poultry', 'Profitability'],
    metaDescription:
      'How MARC helped Coastal Chicken plan a path from about 10,000 to 32,000 birds a day: profitability diagnostics, B2B market sizing and a 12-month action plan with a 3-year roadmap.',
    keywords: [
      'poultry processing growth strategy India',
      'capacity utilisation strategy',
      'food processing consulting India',
      'B2B market sizing poultry',
    ],
    summary:
      'After expanding capacity to about 32,000 birds a day against roughly 10,000 in use, Coastal Chicken needed a sequenced plan to lift utilisation without scaling a low-margin product mix.',
    question:
      'How should a poultry processor improve utilisation after expanding capacity from 10,000 to 32,000 birds per day?',
    facts: [
      { value: '32,000', label: 'birds/day installed capacity' },
      { value: '10,000', label: 'birds/day current utilisation' },
      { value: '12-month', label: 'action plan' },
      { value: '3-year', label: 'growth roadmap' },
    ],
    before: [
      'Installed capacity had expanded to about 32,000 birds a day against roughly 10,000 birds a day of actual utilisation.',
      'Under-utilisation increased per-kg operating pressure and left the business dependent on commoditised raw chicken.',
      'Growth avenues on the table included B2B, retail, value-added products, exports and adjacent diversification.',
    ],
    approach: [
      'A diagnostic profitability and capacity cost assessment.',
      'B2B market sizing across hotels, QSRs, caterers, institutions, distributors and modern retail.',
      'An integrated 12-month action plan and a 3-year growth roadmap.',
    ],
    results: [
      'B2B volume was identified as the fastest, lower-risk route to better utilisation.',
      'Value-added poultry needs customer validation and competitor benchmarking before any plant-level decision.',
      'Exports need country screening, an importer database and a cold-chain logistics assessment before they are treated as a growth lever.',
    ],
    takeaway:
      'Growth strategy must start with economics. Scaling a low-margin product mix only increases stress unless capacity, customer and product profitability are sequenced correctly.',
    relatedBlogs: [],
  },

  // ─────────────────────────────────────────────────────────────── 3
  {
    slug: 'bim-structural-engineering-international-expansion',
    title: 'Which Market First? Country Prioritisation for a Structural Engineering and BIM Firm',
    shortTitle: 'International Expansion for a BIM & Engineering Firm',
    client: 'A structural engineering and BIM services firm (anonymised)',
    named: false,
    industry: 'engineering',
    service: 'internationalisation',
    tags: ['Country ranking', 'BIM', 'Precast', 'Partner profiling', 'Regulatory screening'],
    metaDescription:
      'How MARC ranked candidate countries for a structural engineering and BIM firm on market size, growth, regulatory ease and precast readiness, then deep-dived the top three.',
    keywords: [
      'international market entry strategy engineering services',
      'country prioritisation market research',
      'BIM services international expansion',
      'internationalisation consulting India',
    ],
    summary:
      'A structural engineering and BIM player wanted to lead with high-value precast modelling abroad. MARC ranked countries before any broader portfolio rollout, so outreach stayed focused.',
    question: 'Which international markets should a structural engineering and BIM player enter first?',
    facts: [
      { value: '4', label: 'ranking criteria' },
      { value: 'Top 3', label: 'countries deep-dived' },
      { value: '3', label: 'adjacent services queued' },
      { value: 'Phased', label: 'market-entry path' },
    ],
    before: [
      'The client wanted to lead with high-value structural engineering and BIM 3D modelling for precast projects.',
      'The need was country prioritisation before any broader portfolio rollout.',
      'Adjacent future services included architectural design, MEP and structural steel.',
    ],
    approach: [
      'Candidate countries were ranked on market size, GDP growth, regulatory ease and precast/BIM readiness.',
      'Deep-dive market sizing, regulatory and competitor analysis was done for the top three countries.',
      'Partner and customer profiling, plus outreach material, was developed for the chosen markets.',
    ],
    results: [
      'MARC recommended primary and secondary target markets.',
      'A phased market-entry path was defined before any full-suite rollout.',
      'The work created the basis for partner outreach and for medium-term service expansion.',
    ],
    takeaway:
      'International expansion should be sequenced by market readiness, not by aspiration. Country ranking prevents expensive, unfocused outreach.',
    relatedBlogs: [],
  },

  // ─────────────────────────────────────────────────────────────── 4
  {
    slug: 'global-defence-sector-investment-scan',
    title: 'Global Defence Sector Investment Scan: Market Size, Players and Technology Trends Across the USA, Canada and Israel',
    shortTitle: 'Global Defence Sector Investment Scan',
    client: 'An investment-focused client (anonymised)',
    named: false,
    industry: 'defence',
    service: 'market-research',
    tags: ['Investment research', 'Defence', 'Sector scan', 'Startup mapping', 'USA · Canada · Israel'],
    metaDescription:
      'How MARC assessed the global defence sector for an investor: market size and growth, military spending, key players and startups, and trends in AI/ML, advanced air mobility and robotics.',
    keywords: [
      'defence sector investment research',
      'sector market research for investors',
      'investment opportunity assessment',
      'market research firm India for PE and VC',
    ],
    summary:
      'A client wanted a comprehensive view of whether defence is attractive enough for investment. MARC combined spending data, technology themes and player mapping to separate structural opportunity from noise.',
    question: 'Is the defence sector attractive enough for investment consideration?',
    facts: [
      { value: '3', label: 'focus regions: USA, Canada, Israel' },
      { value: '3', label: 'technology themes analysed' },
      { value: 'Global', label: 'market size and growth view' },
    ],
    before: [
      'The client wanted a comprehensive defence sector investment assessment.',
      'The study had to cover market size, growth trajectory, key players and investment highlights.',
      'Focus regions were the USA, Canada and Israel.',
    ],
    approach: [
      'Global defence market size, growth projections and military spending trends were assessed.',
      'Military technology startups and major players were identified.',
      'Trends were analysed across AI/ML military devices, advanced air mobility, and robotics and automation.',
    ],
    results: [
      'The client gained a clearer understanding of the global defence sector.',
      'A detailed analysis of major players and growth trends was delivered.',
      'The work gave a clearer view of investment potential given rising defence budgets.',
    ],
    takeaway:
      'For investment themes, the objective is to separate structural opportunity from market noise by combining spending, technology and player mapping.',
    relatedBlogs: [],
  },

  // ─────────────────────────────────────────────────────────────── 5
  {
    slug: 'global-agriculture-equipment-research-manitoba-forecast',
    title: 'Global Agriculture and Equipment Research, With a Five-Year Manitoba Inflation and CPI Forecast',
    shortTitle: 'Global Agriculture & Equipment Research',
    client: 'A research client in the agriculture and equipment sector (anonymised)',
    named: false,
    industry: 'agriculture',
    service: 'market-research',
    tags: ['Sector research', 'Forecasting', 'Agriculture', 'Equipment industry', 'Macro trends'],
    metaDescription:
      'How MARC connected global crop performance, equipment industry trends (including MacDon and Linamar) and a five-year Manitoba CPI forecast into one management-ready decision view.',
    keywords: [
      'agriculture sector market research',
      'industry forecasting consulting',
      'equipment industry analysis',
      'predictive market research',
    ],
    summary:
      'MARC connected global crop performance, equipment industry trends and a five-year Manitoba inflation forecast into a single view for decision-making stakeholders.',
    question:
      'How should stakeholders interpret global agriculture, equipment industry and Manitoba macro trends?',
    facts: [
      { value: '5-year', label: 'Manitoba inflation and CPI forecast' },
      { value: '3', label: 'lenses joined: crops, equipment, macro' },
      { value: 'Predictive', label: 'models for production and performance' },
    ],
    before: [
      'The research covered major crops and global agriculture sector performance.',
      'The equipment industry and key companies such as MacDon and Linamar were to be reviewed.',
      'Manitoba inflation and CPI trends had to be forecast for five years.',
    ],
    approach: [
      'Data was collected and analysed across the global agriculture and equipment industries.',
      'Predictive models were used for crop production, industry performance, inflation and CPI.',
      'The findings were distilled into management-ready reporting.',
    ],
    results: [
      'A clearer view of crop, equipment and macroeconomic trendlines.',
      'The performance of key companies was assessed in context rather than in isolation.',
      'Actionable insights were prepared for decision-making stakeholders.',
    ],
    takeaway:
      'Sector research becomes valuable when macro indicators, industry performance and company-level analysis are connected into one decision view.',
    relatedBlogs: [],
  },

  // ─────────────────────────────────────────────────────────────── 6
  {
    slug: 'structured-content-saas-global-expansion-strategy',
    title: 'Where Can a DITA-Based Content SaaS Platform Expand? A Global Go-To-Market Assessment',
    shortTitle: 'Structured Content SaaS: Global GTM Assessment',
    client: 'A structured-content SaaS provider (anonymised)',
    named: false,
    industry: 'technology',
    service: 'internationalisation',
    tags: ['SaaS go-to-market', 'DITA XML', 'CCMS', 'Competitor benchmarking', 'North America'],
    metaDescription:
      'How MARC assessed global expansion for a DITA-based content conversion SaaS platform: CCMS market analysis, North America benchmarking and a localisation-led go-to-market recommendation.',
    keywords: [
      'SaaS go-to-market strategy consulting',
      'global expansion market research technology',
      'competitor benchmarking SaaS',
      'international market research India',
    ],
    summary:
      'A structured-documentation SaaS company needed to know where and how to expand globally. MARC benchmarked markets and competitors, then recommended a focused, segment-led route in.',
    question: 'Where can a DITA-based content conversion SaaS platform expand globally?',
    facts: [
      { value: '4', label: 'target sectors: manufacturing, pharma, finance, software' },
      { value: 'North America', label: 'benchmarked against other adoption clusters' },
      { value: '3', label: 'product extension ideas identified' },
    ],
    before: [
      'The client needed to assess its global enterprise expansion potential.',
      'The focus was structured documentation, CCMS and DITA XML use cases.',
      'Target sectors included manufacturing, pharma, finance and software.',
    ],
    approach: [
      'A deep-dive analysis of the CCMS, DITA XML and cloud migration services markets.',
      'North America and other adoption clusters were benchmarked.',
      'Competitors were benchmarked across features, industries served and client base.',
    ],
    results: [
      'MARC recommended cost-efficient, cloud-native positioning aimed at mid-sized enterprises.',
      'Potential extensions were identified into AI/ML documentation, AR/VR training guides and IoT manuals.',
      'Targeted partnerships, trial offers and a localisation-led go-to-market were suggested.',
    ],
    takeaway:
      'In technology markets, the winning go-to-market is rarely “sell everywhere.” It is segment, use case and feature roadmap discipline.',
    relatedBlogs: [],
  },

  // ─────────────────────────────────────────────────────────────── 7
  {
    slug: 'phytosterol-api-market-potential-feasibility',
    title: 'Phytosterol APIs: Ranking Products for Domestic Manufacturing on Demand, Cost and Regulation',
    shortTitle: 'Phytosterol API Market Potential',
    client: 'A pharma manufacturing client (anonymised)',
    named: false,
    industry: 'pharma',
    service: 'feasibility',
    tags: ['API market entry', 'Pharma feasibility', 'India vs China cost', 'Regulatory pathway'],
    metaDescription:
      'How MARC assessed API and phytosterol market entry: global and Indian demand-supply, product ranking, India-versus-China manufacturing cost and the regulatory pathway.',
    keywords: [
      'pharma API market entry feasibility India',
      'API manufacturing feasibility study',
      'pharmaceutical market research India',
      'India vs China API manufacturing cost',
    ],
    summary:
      'A client wanted to know whether domestic manufacturing could reduce dependency on foreign pharmaceutical suppliers. MARC ranked candidate products on demand, competition, regulation and cost.',
    question: 'Can domestic manufacturing reduce dependency on foreign pharmaceutical suppliers?',
    facts: [
      { value: '2', label: 'countries compared on cost: India and China' },
      { value: 'Global + India', label: 'demand-supply analysis' },
      { value: 'API · Intermediates · KSMs', label: 'products shortlisted' },
    ],
    before: [
      'The client needed an API and phytosterol market entry feasibility view.',
      'The study covered global and Indian demand-supply, trends, buyer behaviour and market gaps.',
      'Specific APIs, intermediates and key starting materials (KSMs) were shortlisted.',
    ],
    approach: [
      'Global and Indian market dynamics, growth trends and demand drivers were studied.',
      'Products were ranked by end-use, competition and regulatory feasibility.',
      'The India-versus-China manufacturing cost structure and regulatory ecosystem were assessed.',
    ],
    results: [
      'High-potential products were ranked to support the decision.',
      'Manufacturing cost and capacity considerations were translated into feasibility inputs.',
      'The regulatory pathway was clarified for domestic and international certifications.',
    ],
    takeaway:
      'For pharma entry, market demand is only one leg. Regulatory feasibility and manufacturing economics decide whether the opportunity is bankable.',
    relatedBlogs: [],
  },

  // ─────────────────────────────────────────────────────────────── 8
  {
    slug: 'partagal-math-spiritual-tourism-destination-feasibility',
    title: 'Partagal Math: Updating the Feasibility of a Spiritual Tourism Destination Built Around a 77-Foot Statue',
    shortTitle: 'Partagal Math Spiritual & Cultural Tourism Feasibility',
    client: 'Partagal Math, Goa',
    named: true,
    industry: 'tourism',
    service: 'feasibility',
    tags: ['Tourism feasibility', 'Financial modelling', 'Footfall (TAM/SAM)', 'Goa', 'Destination marketing'],
    metaDescription:
      'How MARC updated the feasibility study for Partagal Math’s proposed spiritual and cultural tourism destination in Goa: TAM/SAM footfall, revenue streams, CAPEX, IRR, NPV and marketing strategy.',
    keywords: [
      'tourism project feasibility study India',
      'religious tourism feasibility Goa',
      'feasibility study consultant India',
      'destination financial model IRR NPV',
    ],
    summary:
      'A 550-year-old spiritual institution in Goa had expanded its proposed destination and its earlier feasibility study no longer held. MARC re-tested the visitor model and the financials, zone by zone.',
    question:
      'How should a 550-year spiritual institution update its tourism feasibility and visitor model?',
    facts: [
      { value: '550-year', label: 'legacy spiritual institution' },
      { value: '77-ft', label: 'Lord Ram statue at the centre of the project' },
      { value: 'IRR · NPV · ROI', label: 'financial metrics updated' },
    ],
    before: [
      'Partagal Math is a legacy spiritual institution in Goa with a proposed destination centred on a 77-foot Lord Ram statue.',
      'The expanded scope included a Ramayana-themed park, a museum, a 3D/7D theatre, an auditorium, and yoga and meditation facilities.',
      'A prior feasibility study had to be updated because market conditions and the project scope had changed.',
    ],
    approach: [
      'The tourism market, visitor trends, catchment potential and competing destinations were reassessed.',
      'TAM/SAM footfall, revenue streams, CAPEX, OPEX, IRR, NPV, ROI and payback were updated.',
      'A branding, marketing and visitor engagement strategy was developed.',
    ],
    results: [
      'An updated feasibility report and a revised financial model were defined.',
      'Food-court demand, a space study and visitor distribution were planned.',
      'The marketing strategy was aligned to revenue targets and to the visitor experience.',
    ],
    takeaway:
      'Large religious tourism projects need commercial discipline without losing purpose: footfall, dwell time, spend per visitor and viability must be tested zone by zone.',
    relatedBlogs: [],
  },
]

// ── helpers ────────────────────────────────────────────────────────────────

export function getCaseStudy(slug) {
  return caseStudies.find((c) => c.slug === slug) || null
}

export function getServiceMeta(id) {
  return CASE_STUDY_SERVICES[id] || CASE_STUDY_SERVICES['market-research']
}

/** Up to `limit` related studies: same service first, then same industry, then the rest. */
export function getRelatedCaseStudies(study, limit = 3) {
  const others = caseStudies.filter((c) => c.slug !== study.slug)
  const score = (c) => (c.service === study.service ? 2 : 0) + (c.industry === study.industry ? 1 : 0)
  return others
    .map((c, i) => ({ c, s: score(c), i }))
    .sort((a, b) => b.s - a.s || a.i - b.i)
    .slice(0, limit)
    .map((x) => x.c)
}

/** Case studies to surface on a given service page (by service id). */
export function getCaseStudiesForService(serviceId, limit = 3) {
  return caseStudies.filter((c) => c.service === serviceId).slice(0, limit)
}
