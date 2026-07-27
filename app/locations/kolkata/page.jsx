import CityPageTemplate from '@/components/CityPageTemplate'
import { MapPinned, ShoppingBag, Users, Globe } from 'lucide-react'

export const metadata = {
  title: 'Business Consulting Firm in Kolkata | Market Research & Feasibility | MARC Glocal',
  description:
    'MARC Glocal is a business consulting firm in Kolkata offering market research, feasibility studies, and growth strategy for East India\u2019s FMCG, retail, and trading businesses.',
  alternates: { canonical: 'https://marcglocal.com/locations/kolkata' },
  openGraph: {
    title: 'Business Consulting Firm in Kolkata | Market Research & Feasibility | MARC Glocal',
    description:
      'Business consulting, market research, and feasibility studies for Kolkata and East India\u2019s FMCG, retail, and trading businesses.',
    url: 'https://marcglocal.com/locations/kolkata',
  },
}

export default function KolkataLocationPage() {
  return (
    <CityPageTemplate
      city="Kolkata"
      state="West Bengal"
      tagline="Business Consulting in Kolkata"
      title="Market Research & Growth Advisory for East India's"
      titleHighlight="Businesses"
      description="Kolkata is the commercial gateway to East India and the Northeast — a market with a distinct trading and FMCG heritage that national playbooks often get wrong. MARC's Kolkata team brings the same senior-led market research and feasibility rigor we apply nationally, with an understanding of how business actually gets done in the region."
      heroImage="https://images.unsplash.com/photo-1558431382-27e303142255?w=1200&q=80"
      stats={[
        { value: '15+', label: 'Years Experience' },
        { value: '500+', label: 'Clients Served' },
        { value: '13', label: 'Offices — India & USA' },
        { value: '100+', label: 'International Projects' },
      ]}
      localContext={{
        heading: 'Consulting for East India\u2019s Trading & FMCG Economy',
        paragraphs: [
          'Kolkata anchors East India\u2019s economy as a historic trading and distribution hub, and remains the natural entry point for businesses expanding into the Northeast. Its FMCG, jute, steel-adjacent, and retail sectors run on relationship-driven, distribution-heavy models that differ meaningfully from how business is done in Mumbai or Bangalore.',
          'MARC\u2019s market research and feasibility work in Kolkata is built around that reality — sizing distribution networks, understanding regional consumer behaviour, and assessing feasibility for businesses using Kolkata as a base for wider East India and Northeast expansion.',
        ],
      }}
      whyMarc={[
        { icon: MapPinned, title: 'East India & Northeast Gateway', desc: 'On-ground understanding of Kolkata as a base for wider East India and Northeast market entry.' },
        { icon: ShoppingBag, title: 'FMCG & Trading Sector Experience', desc: 'Market research and feasibility work suited to distribution-heavy, relationship-driven business models.' },
        { icon: Users, title: 'Senior-Led Engagements', desc: 'Direct access to experienced consultants throughout the engagement.' },
        { icon: Globe, title: 'Local + Global Reach', desc: 'A Kolkata presence backed by MARC\u2019s pan-India and US office network.' },
      ]}
      services={[
        { title: 'Market Research', desc: 'Consumer and B2B research sized for East India\u2019s distribution and FMCG landscape.', href: '/services/market-research-company-in-india' },
        { title: 'Feasibility Study', desc: 'Market, technical, and financial feasibility for expansion into Kolkata, East India, or the Northeast.', href: '/services/feasibility-study-service-in-india' },
        { title: 'Strategy Consulting', desc: 'Market prioritisation, channel strategy, and localisation for regional expansion.', href: '/services/strategy-consulting-companies-in-india' },
        { title: 'Financial & Project Reports', desc: 'Profitability analysis and benchmarking for retail and FMCG businesses.', href: '/services/financial-and-project-report-consulting-services-in-india' },
        { title: 'Internationalization', desc: 'Support for businesses using Kolkata as a base for cross-border or regional expansion.', href: '/services/internationalization-services-india' },
        { title: 'Standard Operating Procedures', desc: 'Process documentation to structure operations as trading and FMCG businesses scale.', href: '/services/standard-operating-procedure-sop' },
      ]}
      office={{
        address: 'Ramakrishna Palli, VIP Road, Kaikhali, 2nd Floor, Office No. 10, Kolkata, West Bengal 700052',
        phone: '+91-83368 25469',
        email: 'kolkata@marcglocal.com',
        mapLink: 'https://g.page/Income-tax-service-North-Kolkata',
      }}
      faqs={[
        { q: 'Does MARC have a physical office in Kolkata?', a: 'Yes. Our Kolkata branch office is on VIP Road, Kaikhali, and serves clients across West Bengal and the wider East India / Northeast region.' },
        { q: 'Does MARC support businesses expanding from Kolkata into the Northeast?', a: 'Yes — market research and feasibility work for Northeast expansion is one of the more common engagement types from our Kolkata office.' },
        { q: 'What sectors does MARC work with in Kolkata?', a: 'FMCG, retail, trading, and distribution-focused businesses are a core focus, alongside the broader sector range MARC serves nationally.' },
        { q: 'Can MARC help size a distribution or channel strategy for East India?', a: 'Yes — this is a core part of our market research and strategy consulting work in the region.' },
      ]}
      ctaLabel="Talk to Our Kolkata Team"
      source="Kolkata Location Page"
    />
  )
}
