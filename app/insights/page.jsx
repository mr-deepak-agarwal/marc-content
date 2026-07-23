import InsightsClient from './InsightsClient'

export const metadata = {
  title: 'Insights | MARC Glocal',
  description:
    'Insights that inform better decisions — research, analysis and perspectives from MARC Glocal on markets, strategy, valuation and growth in India.',
  alternates: { canonical: 'https://marcglocal.com/insights' },
  openGraph: {
    title: 'Insights | MARC Glocal',
    description:
      'Insights that inform better decisions — research, analysis and perspectives from MARC Glocal.',
    url: 'https://marcglocal.com/insights',
  },
}

export default function Page() {
  return <InsightsClient />
}
