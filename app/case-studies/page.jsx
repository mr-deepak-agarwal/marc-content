import CaseStudiesClient from './CaseStudiesClient'
import { caseStudies } from '@/data/caseStudies'

const BASE_URL = 'https://marcglocal.com'

export const metadata = {
  title: 'Case Studies | Feasibility, Market Research & Market Entry | MARC Glocal',
  description:
    'Case studies from MARC Glocal: feasibility studies, market research, international expansion and growth strategy for food, pharma, engineering, technology, defence and tourism clients.',
  alternates: { canonical: `${BASE_URL}/case-studies` },
  openGraph: {
    title: 'Case Studies | MARC Glocal',
    description:
      'How MARC Glocal has helped clients decide where to enter, what to build and how to grow, across food, pharma, engineering, technology, defence and tourism.',
    url: `${BASE_URL}/case-studies`,
  },
}

export default function Page() {
  // Structured data so search engines can see the full list of case study pages
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'MARC Glocal Case Studies',
    url: `${BASE_URL}/case-studies`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: caseStudies.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${BASE_URL}/case-studies/${c.slug}`,
        name: c.shortTitle,
      })),
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CaseStudiesClient />
    </>
  )
}
