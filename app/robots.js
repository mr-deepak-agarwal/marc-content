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
          '/apply',         // job application form  usually not needed in index
          '/global/',       // internal pages (CIM, due diligence, valuation tools)
          '/home2',         // design iteration, superseded by "/"
          '/home_original', // design iteration, superseded by "/"
          '/s1',            // internal test/design page
          '/s2',            // internal test/design page
        ],
      },
    ],
    sitemap: 'https://marcglocal.com/sitemap.xml',
  }
}
