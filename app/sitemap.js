// app/sitemap.js
// Next.js will automatically serve this at: https://marcglocal.com/sitemap.xml

import { blogs } from '@/data/blogData'

const BASE_URL = 'https://marcglocal.com'

// A fixed "last known update" date for static/marketing pages. Using new Date()
// here would stamp every page as "modified today" on every single build/request,
// which teaches Google to stop trusting the freshness signal. Bump this manually
// whenever you actually make a meaningful content change to these pages.
const SITE_LAST_UPDATED = new Date('2026-07-01')

// "July 2026" style strings from blogData.js -> real Date, for accurate lastModified
const MONTHS = {
  January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
  July: 6, August: 7, September: 8, October: 9, November: 10, December: 11,
}
function parseBlogDate(dateStr) {
  if (!dateStr) return SITE_LAST_UPDATED
  const [month, year] = dateStr.trim().split(' ')
  const m = MONTHS[month]
  const y = parseInt(year, 10)
  if (m === undefined || isNaN(y)) return SITE_LAST_UPDATED
  return new Date(y, m, 1)
}

export default function sitemap() {
  // ── Static pages ──────────────────────────────────────────────────────────
  // Note: /apply is intentionally excluded — it's noindexed (see robots.js),
  // and /home2, /home_original, /s1, /s2 are noindexed design iterations.
  const staticPages = [
    { url: BASE_URL, lastModified: SITE_LAST_UPDATED, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/about-us`, lastModified: SITE_LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/contact-us`, lastModified: SITE_LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: SITE_LAST_UPDATED, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/careers`, lastModified: SITE_LAST_UPDATED, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/case-studies`, lastModified: SITE_LAST_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/industries`, lastModified: SITE_LAST_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/insights`, lastModified: SITE_LAST_UPDATED, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/media`, lastModified: SITE_LAST_UPDATED, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/msme`, lastModified: SITE_LAST_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/msme/knowledge-hub`, lastModified: SITE_LAST_UPDATED, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/checkup`, lastModified: SITE_LAST_UPDATED, changeFrequency: 'monthly', priority: 0.6 },
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
    lastModified: SITE_LAST_UPDATED,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // ── Blog posts (pulled live from data/blogData.js — no more hand-maintained list) ──
  const blogPages = blogs.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: parseBlogDate(post.date),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))

  return [...staticPages, ...servicePages, ...blogPages]
}
