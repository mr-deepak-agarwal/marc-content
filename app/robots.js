// app/robots.js
// Next.js will automatically serve this at: https://marcglocal.com/robots.txt

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Block private/internal routes from being indexed
        disallow: [
          '/admin/',
          '/dashboard/',
          '/api/',
          '/apply',         // job application form — usually not needed in index
          '/global/',       // internal pages (CIM, due diligence, valuation tools)
        ],
      },
    ],
    sitemap: 'https://marcglocal.com/sitemap.xml',
  }
}
