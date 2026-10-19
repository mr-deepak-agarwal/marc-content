import { Suspense } from 'react'
import BlogListClient from './BlogListClient'

export const metadata = {
  title: 'Insights & Trends for Modern Businesses | MARC Glocal Blog',
  description:
    'Research, guides and analysis from MARC Glocal on valuation, due diligence, M&A, market research, financial modelling and business strategy in India.',
  alternates: { canonical: 'https://www.marcglocal.com/blog' },
  openGraph: {
    title: 'Insights & Trends for Modern Businesses | MARC Glocal Blog',
    description:
      'Research, guides and analysis from MARC Glocal on valuation, due diligence, M&A, market research, financial modelling and business strategy.',
    url: 'https://www.marcglocal.com/blog',
  },
}

export default function Page() {
  return (
    <Suspense fallback={null}>
      <BlogListClient />
    </Suspense>
  )
}
