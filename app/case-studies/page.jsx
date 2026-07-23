import CaseStudiesClient from './CaseStudiesClient'

export const metadata = {
  title: 'Case Studies | MARC Glocal Client Results',
  description:
    'Real client results from MARC Glocal across valuation, due diligence, M&A, market research and strategy consulting engagements in India and globally.',
  alternates: { canonical: 'https://marcglocal.com/case-studies' },
  openGraph: {
    title: 'Case Studies | MARC Glocal Client Results',
    description:
      'Real client results from MARC Glocal across valuation, due diligence, M&A, market research and strategy consulting engagements.',
    url: 'https://marcglocal.com/case-studies',
  },
}

export default function Page() {
  return <CaseStudiesClient />
}
