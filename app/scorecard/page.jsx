import ScorecardClient from './ScorecardClient'

export const metadata = {
  title: 'India Market Entry & Feasibility Scorecard | Free Self-Assessment | MARC Glocal',
  description:
    'Free 4-minute self-assessment for SMEs and investors evaluating India market entry. Get an instant readiness score across market, regulatory, financial, and operational dimensions.',
  alternates: { canonical: 'https://marcglocal.com/scorecard' },
  openGraph: {
    title: 'India Market Entry & Feasibility Scorecard | MARC Glocal',
    description:
      'Free self-assessment tool — check your readiness across market, regulatory, financial, and operational dimensions before commissioning a full feasibility study.',
    url: 'https://marcglocal.com/scorecard',
  },
}

export default function ScorecardPage() {
  return <ScorecardClient source="Scorecard Page" />
}
