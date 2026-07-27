import CityPageTemplate from '@/components/CityPageTemplate'
import { TrendingUp, Building2, Users, Globe } from 'lucide-react'

export const metadata = {
  title: 'Market Research & Business Consulting Firm in Mumbai | MARC Glocal',
  description:
    'MARC Glocal is a business consulting firm in Mumbai offering market research, feasibility studies, due diligence, and valuation advisory for SMEs, PE/VC investors, and corporates.',
  alternates: { canonical: 'https://marcglocal.com/locations/mumbai' },
  openGraph: {
    title: 'Market Research & Business Consulting Firm in Mumbai | MARC Glocal',
    description:
      'Business consulting, market research, and M&A advisory for Mumbai-based SMEs, corporates, and investors — from a locally present, senior-led team.',
    url: 'https://marcglocal.com/locations/mumbai',
  },
}

export default function MumbaiLocationPage() {
  return (
    <CityPageTemplate
      city="Mumbai"
      state="Maharashtra"
      tagline="Business Consulting in Mumbai"
      title="Growth Advisory for Businesses Headquartered in"
      titleHighlight="Mumbai"
      description="From Nariman Point boardrooms to Borivali manufacturing units, Mumbai's businesses move fast and compete nationally. MARC's Mumbai team combines financial-capital market fluency with the same senior-led, data-backed approach we bring to every engagement — for SMEs scaling up, PE/VC-backed businesses at inflection points, and corporates evaluating their next market."
      heroImage="https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=1200&q=80"
      stats={[
        { value: '15+', label: 'Years Experience' },
        { value: '500+', label: 'Clients Served' },
        { value: '13', label: 'Offices — India & USA' },
        { value: '100+', label: 'International Projects' },
      ]}
      localContext={{
        heading: 'Consulting for Mumbai\u2019s Business Landscape',
        paragraphs: [
          'Mumbai is India\u2019s financial capital and the natural base for its densest concentration of PE/VC funds, investment banks, and corporate head offices — which means Mumbai-based businesses are usually raising capital, being acquired, or acquiring someone else at some point in their growth curve, not just running operations.',
          'That mix of finance-sector sophistication and genuine sector diversity — BFSI, media, FMCG, retail, real estate, manufacturing in the wider MMR belt — is exactly the environment MARC\u2019s market research, due diligence, and valuation advisory teams are built for. We work with Mumbai promoters and leadership teams who already know what good analysis looks like, so the bar for rigor is set accordingly.',
        ],
      }}
      whyMarc={[
        { icon: TrendingUp, title: 'Capital-Markets Fluent', desc: 'We speak the language of Mumbai\u2019s PE/VC and investment-banking ecosystem — deal-ready deliverables, not generic reports.' },
        { icon: Building2, title: 'Sector Breadth', desc: 'Retail, hospitality, real estate, manufacturing and FMCG experience across the wider Mumbai Metropolitan Region.' },
        { icon: Users, title: 'Senior-Led Engagements', desc: 'You work directly with experienced consultants — no handoff to a junior team after the pitch.' },
        { icon: Globe, title: 'Local + Global Reach', desc: 'A Mumbai presence backed by MARC\u2019s pan-India and US office network for cross-border mandates.' },
      ]}
      services={[
        { title: 'Market Research', desc: 'B2B and consumer research, primary and secondary, sized for PE due diligence or GTM planning.', href: '/services/market-research-company-in-india' },
        { title: 'Feasibility Study', desc: 'Market, technical, and financial feasibility before you commit capital to a new venture or location.', href: '/services/feasibility-study-service-in-india' },
        { title: 'Due Diligence', desc: 'Commercial and financial due diligence for buy-side and sell-side transactions.', href: '/services/due-diligence-services-in-india' },
        { title: 'Valuation Advisory', desc: 'Defensible valuations for fundraising, M&A, and regulatory purposes.', href: '/services/valuation-advisory-india' },
        { title: 'Deal Advisory', desc: 'End-to-end support across the deal lifecycle, from screening to post-merger integration.', href: '/services/mergers-and-acquisitions-india' },
        { title: 'Strategy Consulting', desc: 'Market prioritisation, GTM, and expansion strategy for Mumbai-based corporates.', href: '/services/strategy-consulting-companies-in-india' },
      ]}
      office={{
        address: 'B/509, Satyam Apartments, Link Road, Near Don Bosco School, Borivali West, Mumbai, Maharashtra 400091',
        phone: '+91-90295 03690',
        email: 'mumbai@marcglocal.com',
        mapLink: 'https://goo.gl/maps/jmu1AvPqTXbxGTpd9',
      }}
      faqs={[
        { q: 'Does MARC have a physical office in Mumbai?', a: 'Yes. Our Mumbai branch office is located in Borivali West and serves clients across the Mumbai Metropolitan Region and Maharashtra.' },
        { q: 'What industries does MARC serve in Mumbai?', a: 'We work across BFSI-adjacent services, retail, real estate, hospitality, manufacturing, and FMCG — plus PE/VC-backed businesses across sectors evaluating investment, expansion, or exit.' },
        { q: 'Can MARC support a due diligence engagement on a tight deal timeline?', a: 'Yes — our due diligence and valuation teams are set up for deal timelines and can scope a confidential engagement quickly. Use the contact options on this page to start that conversation.' },
        { q: 'Does MARC work with startups as well as established corporates in Mumbai?', a: 'Yes, from early-stage SMEs validating a new market to established corporates and PE-backed portfolio companies at an inflection point.' },
      ]}
      ctaLabel="Talk to Our Mumbai Team"
      source="Mumbai Location Page"
    />
  )
}
