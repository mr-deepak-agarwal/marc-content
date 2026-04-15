// app/sitemap.js
// Place this file at: app/sitemap.js
// Next.js will automatically serve it at: https://marcglocal.com/sitemap.xml

const BASE_URL = 'https://marcglocal.com'

// ─────────────────────────────────────────────
// All blog slugs (from data/blogData.js)
// ─────────────────────────────────────────────
const blogSlugs = [
  'financial-model-validation-2025',
  'sme-ipo-preparation-guide-3-year-roadmap',
  'strong-mis-for-profitability-and-sustainable-growth',
  'competitive-benchmarking-with-market-research',
  'year-end-internal-audit-profit-and-loss-analysis',
  'future-of-due-diligence-services-2025',
  'peak-season-management-hospitality-consulting',
  '5-reasons-why-your-business-needs-a-process-audit',
  'why-market-research-drives-success',
  'what-makes-a-great-cim',
  'impact-2025-us-tariffs-india-textile-industry',
  'red-flags-in-financial-statements-what-a-quality-of-earnings-qoe-analysis-reveals-that-financial-reviews-miss',
  'how-ai-is-quietly-transforming-the-business-of-consulting-in-india',
  'blueprint-for-growth',
  'market-research-and-predictive-analytics-for-global-expansion',
  'decoding-market-entry-in-india-2024-feasibility-study-insights',
  'the-role-of-financial-modelling-in-risk-assessment-and-decision-making',
  'valuation-consulting-indian-healthcare-sector-strategies-and-tips',
  'the-power-of-management-information-systems-mis-for-data-driven-decisions',
  'feasibility-studies-and-financial-modelling-a-comprehensive-guide-for-project-financing',
  'role-of-financial-modelling-in-securing-investment-in-indian-startups',
  'how-due-diligence-can-make-or-break-mergers-and-acquisition-in-india',
  'from-startup-to-scale-up-the-journey-of-indian-entrepreneur',
  'managing-cash-flow-insights-for-entrepreneurs-in-maintaining-financial-health',
  'data-driven-market-research-key-to-successful-retail-mergers-in-india',
  'planning-for-global-expansion-expert-international-business-consulting-with-marc',
  'feasibility-study-the-first-step-towards-business-growth-strategy',
  'mergers-and-acquisition-consulting-your-golden-ticket-to-a-successful-merger',
  'new-product-launch-a-professional-market-research-guide-for-emerging-businesses',
  'your-go-to-guide-for-business-to-business-b2b-market-research-for-smes',
  'step-by-step-guide-on-how-to-start-up-your-own-business-a-2024-guide',
  '5-stages-of-internationalization-of-business-from-domestic-to-global-operations',
  'innovation-and-entrepreneurship-key-drivers-of-economic-growth',
  'entrepreneurship-in-the-digital-age',
  'how-can-business-consultants-play-a-crucial-role-for-the-gaming-industry',
  'the-best-business-valuation-services-in-india',
  'top-8-goals-and-objectives-of-employee-performance-management-system',
  'the-role-of-feasibility-study-consulting-in-india',
  '5-new-markets-to-keep-an-eye-on-while-we-go-into-2024',
  '5-new-business-resolutions-that-you-should-actually-follow-in-2024',
  'top-10-industry-trends-of-2023-and-what-to-expect-in-2024',
  'transforming-hospitality-businesses-discover-the-power-of-indias-top-hospitality-consultants',
  'unlock-financial-security-and-growth-with-our-comprehensive-financial-management-solutions',
  'empower-your-business-with-data-driven-strategies-through-our-market-research-and-analytics-solution',
  'elevate-your-business-performance-with-our-expert-business-management-consultancy-in-india',
  'how-management-accounting-services-can-help-you-take-your-business-to-the-next-level',
  'unlocking-market-potential-top-notch-market-research-companies-in-india',
  'financial-modeling-and-valuation-the-key-to-making-smart-financial-decisions',
  'a-complete-guide-to-business-valuation-services-in-india',
  'boost-efficiency-and-productivity-best-sop-services-in-india-for-your-business-needs',
  'market-research-company-in-india-you-can-trust-to-make-the-right-decisions',
  'marc-one-of-the-best-global-market-research-companies-in-india',
  'best-market-research-companies-in-india-you-can-trust-to-make-the-right-decisions',
  'are-you-looking-for-the-best-financial-modeling-services-in-india',
  'hire-the-best-business-valuation-services-company-in-india',
  'how-to-identify-a-top-management-consulting-firm-in-india',
  'how-do-i-choose-best-healthcare-market-research-firm',
  'how-to-choose-a-market-research-firm-that-will-provide-high-quality-insights',
  'the-impact-of-industry-trends-on-business-valuation',
  'the-role-of-business-management-consultancy-in-driving-organizational-success',
  'how-can-you-improve-your-business-with-deal-advisory-services',
  '5-advantages-of-having-financial-management-services-in-india',
  'why-is-market-research-analysis-the-core-of-every-project',
  'how-do-hospitality-consultants-help-business-growth',
  'what-are-the-3-main-benefits-of-customer-profitability-analysis',
  'why-financial-due-diligence-is-important-and-how-it-is-performed',
  'why-indias-manufacturing-industry-is-an-attractive-opportunity-for-investors',
  'esg-and-sustainable-development-in-indian-manufacturing-a-roadmap-for-the-future',
  'what-is-the-main-purpose-of-standard-operating-procedures',
  'how-feasibility-study-consultation-can-help-your-business-grow',
  'why-is-market-research-necessary-for-new-business-ideas',
  'sustainable-manufacturing-a-key-driver-in-indias-rise-as-a-manufacturing-leader',
  'topic-where-are-family-offices-investing-and-why',
  'driving-factors-propelling-india-as-a-leading-global-manufacturing-destination',
  '3-ways-sustainability-can-help-businesses-in-2023',
  'why-is-microsoft-investing-10-billion-in-chatgpt-and-what-is-the-future-of-ai',
]

export default function sitemap() {
  // ── Static pages ──────────────────────────────────────────────────────────
  const staticPages = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/careers`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/industries`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/insights`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/media`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/apply`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  // ── Service pages ─────────────────────────────────────────────────────────
  const servicePages = [
    'deal-advisory-india',
    'due-diligence-services-in-india',
    'feasibility-study-service-in-india',
    'financial-and-project-report-consulting-services-in-india',
    'human-resource-hr-consulting',
    'information-memorandum',
    'internal-audit',
    'internationalization-services-india',
    'management-information-systems-mis',
    'market-research-company-in-india',
    'mergers-and-acquisitions-india',
    'process-audit',
    'profit-and-loss-analysis-services-in-india',
    'sme-listing',
    'standard-operating-procedure-sop',
    'strategy-consulting-companies-in-india',
    'valuation-advisory-india',
  ].map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // ── Blog posts (dynamic) ──────────────────────────────────────────────────
  const blogPages = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))

  return [...staticPages, ...servicePages, ...blogPages]
}
