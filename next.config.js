/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,

  images: {
    formats: ['image/avif', 'image/webp'],
    // How long Next caches the optimized output on disk/CDN before re-checking
    // the source. Default is 60s; bump to 30 days since these are static
    // marketing assets, not content that changes minute to minute.
    minimumCacheTTL: 2592000,
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

  async headers() {
    return [
      {
        // Next's own build output (JS/CSS chunks) is already content-hashed,
        // so it's safe to cache "forever" — a new deploy ships new filenames.
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Optimized images served through the Next image endpoint.
        source: '/_next/image',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Static files in /public (logos, fonts, favicons, etc.) rarely
        // change; give browsers a long cache with a short revalidation
        // window instead of the framework's conservative default.
        source: '/:path*.(png|jpg|jpeg|webp|avif|svg|ico|woff|woff2|ttf)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=604800, stale-while-revalidate=86400' },
        ],
      },
    ]
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
        source: '/contact/',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/contact',
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