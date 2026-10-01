// Week 5 — Pillar-cluster content architecture
//
// Thirteen clusters, each anchored to an existing service or hub page (the "pillar").
// The first five are the core commercial clusters from the plan (Feasibility, Market
// Research, Due Diligence, Valuation, India Market Entry). The remaining eight map the
// rest of the blog to the other service pages so no relevant post is left without a
// link up to a pillar. Posts that fit none of them (pure news / off-topic) are set to
// 'none' in CLUSTER_OVERRIDES on purpose: forcing them into a cluster would dilute it.
// Every blog post is assigned to at most one cluster, then:
//   - links UP to its pillar service page (sidebar, top-of-article note,
//     and "go deeper" box)
//   - links ACROSS to other posts in the same cluster (related cards +
//     "more on this topic" text links)
//
// HOW POSTS GET ASSIGNED
//   1. CLUSTER_OVERRIDES (below) wins if the slug is listed — use this to fix
//      any post the keyword matcher gets wrong, or to force 'none'.
//   2. Otherwise each cluster is scored by keyword hits in the post's title
//      (x3), tags (x2), and excerpt/category (x1). Highest score wins, and it
//      must reach MIN_SCORE, so weak/accidental matches stay unclustered.
//   3. Unclustered posts fall back to the old behaviour (same-category
//      related posts, generic sidebar) — nothing breaks.
//
// Run `node scripts/cluster-report.mjs` to see which posts landed where and
// which were left unmatched, then add overrides for the misses.

export const CLUSTERS = [
  {
    id: 'feasibility',
    label: 'Feasibility Study',
    pillar: {
      href: '/services/feasibility-study-service-in-india',
      anchor: 'feasibility study services in India',
    },
    cta: { label: 'Get a Free Scope Call', blurb: 'Talk to our team about scoping a feasibility study for your project.' },
    keywords: [
      'feasibility', 'project report', 'dpr', 'detailed project report',
      'project viability', 'techno-economic', 'business viability',
    ],
  },
  {
    id: 'market-research',
    label: 'Market Research',
    pillar: {
      href: '/services/market-research-company-in-india',
      anchor: 'market research services in India',
    },
    cta: { label: 'Request a Research Proposal in 24 Hours', blurb: 'Tell us what you need to know — we respond with a scoped proposal within a day.' },
    keywords: [
      'market research', 'market study', 'market size', 'market sizing',
      'primary research', 'secondary research', 'consumer research',
      'b2b research', 'competitor analysis', 'competitive landscape',
      'market analysis', 'survey', 'market opportunity',
    ],
  },
  {
    id: 'due-diligence',
    label: 'Due Diligence',
    pillar: {
      href: '/services/due-diligence-services-in-india',
      anchor: 'due diligence services in India',
    },
    cta: { label: 'Discuss Your Deal Confidentially', blurb: 'Buy-side or sell-side — speak to a senior adviser in confidence.' },
    keywords: [
      'due diligence', 'red flag', 'quality of earnings', 'qoe',
      'financial due', 'commercial due', 'legal due', 'vendor due',
    ],
  },
  {
    id: 'valuation',
    label: 'Business Valuation',
    pillar: {
      href: '/services/valuation-advisory-india',
      anchor: 'business valuation services in India',
    },
    cta: { label: 'Get an Indicative Valuation', blurb: 'Share a few details and we will outline how your business would be valued.' },
    keywords: [
      'valuation', 'valuing', 'dcf', 'discounted cash flow', 'multiples',
      'enterprise value', 'fair value', 'cost of capital', 'wacc', 'terminal value',
    ],
  },
  {
    id: 'market-entry',
    label: 'India Market Entry',
    pillar: {
      href: '/services/internationalization-services-india',
      anchor: 'India market entry and expansion advisory',
    },
    cta: { label: 'Discuss Your Expansion Plan', blurb: 'Planning to enter or expand in India? Let us map the route with you.' },
    keywords: [
      'market entry', 'enter india', 'entering india', 'enter the indian',
      'foreign investor', 'fdi', 'foreign direct investment', 'expand into india',
      'setting up in india', 'set up in india', 'us companies in india',
      'cross-border', 'internationali', 'go-to-market', 'gtm', 'tier-2', 'tier 2',
    ],
  },
  // ── Supporting clusters (each maps to another existing service page) ─────
  {
    id: 'ma-deal-advisory',
    label: 'M&A & Deal Advisory',
    pillar: {
      href: '/services/mergers-and-acquisitions-india',
      anchor: 'M&A and deal advisory services in India',
    },
    cta: { label: 'Book a Confidential Discussion', blurb: 'Buy-side, sell-side or fundraising: talk to a senior adviser in confidence.' },
    keywords: [
      'mergers', 'acquisition', 'm&a', 'deal advisory', 'venture capital',
      'family office', 'ipo', 'sme listing', 'term sheet', 'fundrais',
      'private equity', 'investment banking',
    ],
  },
  {
    id: 'financial-modelling',
    label: 'Financial Modelling & Project Reports',
    pillar: {
      href: '/services/financial-and-project-report-consulting-services-in-india',
      anchor: 'financial modelling and project report services in India',
    },
    cta: { label: 'Request a Financial Model Consultation', blurb: 'Need a bank-ready or investor-ready model? Let us scope it with you.' },
    keywords: [
      'financial model', 'financial modeling', 'financial modelling', 'project report',
      'information memorandum', 'cash flow', 'budgeting', 'financial management',
      'management accounting', 'cfo', 'model validation',
    ],
  },
  {
    id: 'profitability-mis',
    label: 'Profitability Analysis & MIS',
    pillar: {
      href: '/services/profit-and-loss-analysis-services-in-india',
      anchor: 'profit and loss analysis services in India',
    },
    cta: { label: 'Get a P&L Diagnostic Call', blurb: 'Not sure where margin is leaking? We will show you where to look.' },
    keywords: [
      'profitability', 'profit and loss', 'p&l', 'management information',
      'robust mis', 'mis for', 'customer profitability', 'margin',
    ],
  },
  {
    id: 'internal-audit',
    label: 'Internal Audit',
    pillar: {
      href: '/services/internal-audit',
      anchor: 'internal audit services in India',
    },
    cta: { label: 'Request an Internal Audit Scope Call', blurb: 'Unsure where your control gaps are? Let us scope an audit around your risks.' },
    keywords: ['internal audit', 'audit function', 'control effectiveness'],
  },
  {
    id: 'sop-process',
    label: 'SOPs & Process Audit',
    pillar: {
      href: '/services/standard-operating-procedure-sop',
      anchor: 'SOP consulting services in India',
    },
    cta: { label: 'Request an SOP Scoping Call', blurb: 'Still running on tribal knowledge? Let us map what to document first.' },
    keywords: [
      'standard operating procedure', 'sops', 'sop services', 'sop)', 'process audit',
      'process documentation',
    ],
  },
  {
    id: 'strategy',
    label: 'Strategy & Management Consulting',
    pillar: {
      href: '/services/strategy-consulting-companies-in-india',
      anchor: 'strategy consulting services in India',
    },
    cta: { label: 'Talk to a Strategy Advisor', blurb: 'Tell us where you want to take the business and we will map how to get there.' },
    keywords: [
      'management consult', 'business consult', 'consulting firm', 'growth strategy',
      'benchmarking', 'business management', 'consultancy', 'hospitality consult',
      'business growth', 'scale-up', 'entrepreneur',
    ],
  },
  {
    // Manual only: posts are placed here through CLUSTER_OVERRIDES, never by keyword.
    // "industry" and "manufacturing" are too generic to score on without stealing
    // posts from the commercial clusters above.
    id: 'sector-outlook',
    label: 'India Sector & Industry Outlook',
    manual: true,
    pillar: {
      href: '/industries',
      anchor: 'India industry and sector research',
    },
    cta: { label: 'Request a Research Proposal in 24 Hours', blurb: 'Need sector data for a decision? We will scope the research and reply within a day.' },
    keywords: [],
  },
  {
    // Manual only: the blog has very little HR content, so posts are placed here
    // through CLUSTER_OVERRIDES.
    id: 'hr-consulting',
    label: 'HR Consulting',
    manual: true,
    pillar: {
      href: '/services/human-resource-hr-consulting',
      anchor: 'HR consulting services in India',
    },
    cta: { label: 'Talk to an HR Advisor', blurb: 'Scaling fast and feeling the people-strategy gaps? Talk to an HR advisor.' },
    keywords: [],
  },
]

// slug -> cluster id | 'none'. Fix mis-classified posts here.
export const CLUSTER_OVERRIDES = {
  // ── Core clusters: keep these posts with the commercial pillar ───────────
  'how-due-diligence-can-make-or-break-mergers-and-acquisition-in-india': 'due-diligence',
  'dme-ebitda-why-the-number-may-be-telling-half-the-story': 'due-diligence',
  'feasibility-studies-and-financial-modelling-a-comprehensive-guide-for-project-financing': 'feasibility',
  'step-by-step-guide-on-how-to-start-up-your-own-business-a-2024-guide': 'feasibility',
  'data-driven-market-research-key-to-successful-retail-mergers-in-india': 'market-research',
  'competitive-benchmarking-with-market-research': 'market-research',
  'ai-valuation-risks-2026-us-tech-ma': 'valuation',
  'financial-modeling-and-valuation-the-key-to-making-smart-financial-decisions': 'valuation',
  'planning-for-global-expansion-expert-international-business-consulting-with-marc': 'market-entry',
  'why-indias-manufacturing-industry-is-an-attractive-opportunity-for-investors': 'market-entry',
  'driving-factors-propelling-india-as-a-leading-global-manufacturing-destination': 'market-entry',

  // ── Supporting clusters ───────────────────────────────────────────────────
  'managing-cash-flow-insights-for-entrepreneurs-in-maintaining-financial-health': 'financial-modelling',
  'capacity-expansion-without-financial-alignment-manufacturing-case-study': 'profitability-mis',
  'peak-season-management-hospitality-consulting': 'strategy',
  'how-ai-is-quietly-transforming-the-business-of-consulting-in-india': 'strategy',
  '5-new-business-resolutions-that-you-should-actually-follow-in-2024': 'strategy',
  'top-8-goals-and-objectives-of-employee-performance-management-system': 'hr-consulting',

  // ── Sector & industry outlook (manual cluster) ────────────────────────────
  'dawn-of-urban-mining-india-lib-recycling-market': 'sector-outlook',
  'impact-2025-us-tariffs-india-textile-industry': 'sector-outlook',
  '5-new-markets-to-keep-an-eye-on-while-we-go-into-2024': 'sector-outlook',
  'top-10-industry-trends-of-2023-and-what-to-expect-in-2024': 'sector-outlook',
  'esg-and-sustainable-development-in-indian-manufacturing-a-roadmap-for-the-future': 'sector-outlook',
  'sustainable-manufacturing-a-key-driver-in-indias-rise-as-a-manufacturing-leader': 'sector-outlook',

  // ── Deliberately unclustered (off-topic for MARC's services) ─────────────
  // Adding these to a cluster would dilute it. They still get a category-matched CTA.
  'why-is-microsoft-investing-10-billion-in-chatgpt-and-what-is-the-future-of-ai': 'none',
  '3-ways-sustainability-can-help-businesses-in-2023': 'none',
}

const MIN_SCORE = 3

const lower = (s) => (s || '').toString().toLowerCase()

function scoreCluster(post, cluster) {
  const title = lower(post.title)
  const tags = (post.tags || []).map(lower).join(' | ')
  const rest = `${lower(post.excerpt)} ${lower(post.category)} ${lower(post.categoryLabel)}`
  let score = 0
  for (const kw of cluster.keywords) {
    if (title.includes(kw)) score += 3
    if (tags.includes(kw)) score += 2
    if (rest.includes(kw)) score += 1
  }
  return score
}

export function getCluster(post) {
  if (!post) return null
  const override = CLUSTER_OVERRIDES[post.slug]
  if (override === 'none') return null
  if (override) return CLUSTERS.find((c) => c.id === override) || null

  let best = null
  let bestScore = 0
  for (const c of CLUSTERS) {
    if (c.manual) continue
    const s = scoreCluster(post, c)
    if (s > bestScore) {
      best = c
      bestScore = s
    }
  }
  return bestScore >= MIN_SCORE ? best : null
}

function sharedTagCount(a, b) {
  const set = new Set((a.tags || []).map(lower))
  return (b.tags || []).reduce((n, t) => n + (set.has(lower(t)) ? 1 : 0), 0)
}

function dateValue(post) {
  const t = Date.parse(post.date)
  return Number.isNaN(t) ? 0 : t
}

// Other posts in the same cluster, most-related first (shared tags, then newest).
export function getClusterPosts(post, allPosts, count = 6) {
  const cluster = getCluster(post)
  if (!cluster) return []
  return allPosts
    .filter((p) => p.slug !== post.slug && getCluster(p)?.id === cluster.id)
    .sort((a, b) => sharedTagCount(post, b) - sharedTagCount(post, a) || dateValue(b) - dateValue(a))
    .slice(0, count)
}

// ── Service-matched CTA for every post ─────────────────────────────────────
//
// Order of preference:
//   1. the post's own cluster            -> that cluster's service page + CTA
//   2. the post's category               -> nearest service cluster (below)
// Every post therefore ends with a CTA that points to a relevant service page,
// instead of the generic "Need Expert Consultation?" box.
const CATEGORY_TO_CLUSTER = {
  'market-research': 'market-research',
  strategy: 'strategy',
  finance: 'financial-modelling',
  industry: 'sector-outlook',
  'due-diligence': 'due-diligence',
  entrepreneurship: 'feasibility',
}

export function getPostCtaCluster(post) {
  const own = getCluster(post)
  if (own) return own
  const id = CATEGORY_TO_CLUSTER[post?.category] || 'strategy'
  return CLUSTERS.find((c) => c.id === id) || CLUSTERS[0]
}

/**
 * @returns {{ title: string, description: string, button: string, href: string, anchor: string, label: string }}
 */
export function getPostCta(post) {
  const c = getPostCtaCluster(post)
  return {
    title: `Talk to MARC about ${c.label}`,
    description: c.cta.blurb,
    button: c.cta.label,
    href: c.pillar.href,
    anchor: c.pillar.anchor,
    label: c.label,
  }
}
