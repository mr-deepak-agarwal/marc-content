/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'marc-content.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.marcglocal.com',
      },
    ],
    unoptimized: false,
  },

  async redirects() {
    return [
      // ── WordPress pages → Next.js equivalents ──────────────────────────
      {
        source: '/locations',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/locations/',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/marc-team',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/marc-team/',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/marc-glocal-clientele',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/marc-glocal-clientele/',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/marc-glocal-affiliations',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/marc-glocal-affiliations/',
        destination: '/about-us',
        permanent: true,
      },

      // ── Service slug mismatches ─────────────────────────────────────────
      {
        source: '/services/valuation-consulting-india',
        destination: '/services/valuation-advisory-india',
        permanent: true,
      },
      {
        source: '/services/valuation-consulting-india/',
        destination: '/services/valuation-advisory-india',
        permanent: true,
      },
      {
        source: '/services/global-mergers-and-acquisitions-consulting-india',
        destination: '/services/mergers-and-acquisitions-india',
        permanent: true,
      },
      {
        source: '/services/global-mergers-and-acquisitions-consulting-india/',
        destination: '/services/mergers-and-acquisitions-india',
        permanent: true,
      },
      {
        source: '/services/investment-memo-services',
        destination: '/services/information-memorandum',
        permanent: true,
      },
      {
        source: '/services/investment-memo-services/',
        destination: '/services/information-memorandum',
        permanent: true,
      },
      {
        source: '/services/market-research-and-data-analytics',
        destination: '/services/market-research-company-in-india',
        permanent: true,
      },
      {
        source: '/services/market-research-and-data-analytics/',
        destination: '/services/market-research-company-in-india',
        permanent: true,
      },
      {
        source: '/services/market-research-solutions-and-data-analytics-2',
        destination: '/services/market-research-company-in-india',
        permanent: true,
      },
      {
        source: '/services/market-research-solutions-and-data-analytics-2/',
        destination: '/services/market-research-company-in-india',
        permanent: true,
      },
      {
        source: '/services/performance-evaluation-of-sme-listing-in-india',
        destination: '/services/sme-listing',
        permanent: true,
      },
      {
        source: '/services/performance-evaluation-of-sme-listing-in-india/',
        destination: '/services/sme-listing',
        permanent: true,
      },
      {
        source: '/services/management-accounting-services-in-india',
        destination: '/services/management-information-systems-mis',
        permanent: true,
      },
      {
        source: '/services/management-accounting-services-in-india/',
        destination: '/services/management-information-systems-mis',
        permanent: true,
      },
      {
        source: '/services/scrutinizing-financials',
        destination: '/services/due-diligence-services-in-india',
        permanent: true,
      },
      {
        source: '/services/scrutinizing-financials/',
        destination: '/services/due-diligence-services-in-india',
        permanent: true,
      },

      // ── Misc WP pages ───────────────────────────────────────────────────
      {
        source: '/services',
        destination: '/',
        permanent: true,
      },
      {
        source: '/services/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/thank-you',
        destination: '/',
        permanent: false,
      },
      {
        source: '/thank-you/',
        destination: '/',
        permanent: false,
      },
      {
        source: '/contact-us-backup',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/contact-us-backup/',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/popup-video',
        destination: '/',
        permanent: true,
      },
      {
        source: '/popup-video/',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig