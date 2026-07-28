import CityPageTemplate from '@/components/CityPageTemplate'

export const metadata = {
  title: 'Feasibility Study & Business Consulting Firm in Pune | MARC Glocal',
  description:
    'MARC Glocal is a business consulting firm in Pune offering feasibility studies, market research, SOP consulting, and financial modelling for manufacturing, auto, and IT/education-sector businesses.',
  alternates: { canonical: 'https://marcglocal.com/locations/pune' },
  openGraph: {
    title: 'Feasibility Study & Business Consulting Firm in Pune | MARC Glocal',
    description:
      'Business consulting, feasibility studies, and growth strategy for Pune\u2019s manufacturing, auto-ancillary, and education-sector businesses.',
    url: 'https://marcglocal.com/locations/pune',
  },
}

export default function PuneLocationPage() {
  return (
    <CityPageTemplate
      city="Pune"
      state="Maharashtra"
      tagline="Business Consulting in Pune"
      title="Feasibility & Growth Advisory for Pune's"
      titleHighlight="Manufacturing & Auto Ecosystem"
      description="Pune's economy runs on a distinctive mix — auto and auto-ancillary manufacturing along the Chakan-Talegaon belt, a dense IT/education base, and a fast-growing SME sector. MARC's Pune team brings the same feasibility, market research, and process-consulting rigor we use nationally, tuned to how Pune businesses actually operate."
      heroImage="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=1200&q=80"
      stats={[
        { value: '15+', label: 'Years Experience' },
        { value: '500+', label: 'Clients Served' },
        { value: '13', label: 'Offices — India & USA' },
        { value: '100+', label: 'International Projects' },
      ]}
      localContext={{
        heading: 'Consulting Built for Pune\u2019s Industrial & Education Economy',
        paragraphs: [
          'Pune sits at the center of Maharashtra\u2019s auto-ancillary and manufacturing corridor, alongside one of India\u2019s largest education and IT-services bases. That combination means Pune businesses often need feasibility studies for new plant locations, SOP and process-audit work to tighten operations as they scale, and MIS setup to convert shop-floor and campus data into decisions.',
          'MARC\u2019s methodology — market, technical, and financial feasibility; process and internal audits; SOP documentation with RASIC matrices — was built for exactly this kind of operationally complex, multi-site business, which is why it maps so directly onto Pune\u2019s manufacturing and services mix.',
        ],
      }}
      whyMarc={[
        { icon: 'Factory', title: 'Manufacturing & Auto-Ancillary Depth', desc: 'Feasibility, process audit, and SOP work suited to Pune\u2019s plant and supply-chain-heavy businesses.' },
        { icon: 'GraduationCap', title: 'Education & Services Sector Experience', desc: 'Consulting for Pune\u2019s large education and IT-services base, not just manufacturing.' },
        { icon: 'Users', title: 'Senior-Led Engagements', desc: 'Direct access to experienced consultants throughout the engagement.' },
        { icon: 'Globe', title: 'Local + Global Reach', desc: 'A Pune presence backed by MARC\u2019s pan-India and US office network.' },
      ]}
      services={[
        { title: 'Feasibility Study', desc: 'Market, technical, and financial feasibility for new plants, product lines, or locations.', href: '/services/feasibility-study-service-in-india' },
        { title: 'Standard Operating Procedures', desc: 'RASIC matrices, process flowcharts, and job descriptions to structure fast-scaling operations.', href: '/services/standard-operating-procedure-sop' },
        { title: 'Process & Internal Audit', desc: 'End-to-end workflow evaluation and control-effectiveness review across manufacturing and services.', href: '/services/process-audit' },
        { title: 'Market Research', desc: 'B2B and category research for auto-ancillary, manufacturing, and education-sector businesses.', href: '/services/market-research-company-in-india' },
        { title: 'Management Information Systems', desc: 'Convert operational and financial data into decision-ready dashboards.', href: '/services/management-information-systems-mis' },
        { title: 'Financial & Project Reports', desc: 'Profitability analysis and project reporting for expansion and capital planning.', href: '/services/financial-and-project-report-consulting-services-in-india' },
      ]}
      office={{
        address: '2nd Floor, Flat No. 5, Godawari Apartment, Karve Road, Pune, Maharashtra 411004',
        phone: '+91-91194 59098',
        email: 'pune@marcglocal.com',
        mapLink: 'https://goo.gl/maps/k58iKNPJ99NcEzh89',
      }}
      faqs={[
        { q: 'Does MARC have a physical office in Pune?', a: 'Yes. Our Pune branch office is on Karve Road and serves clients across Pune, Pimpri-Chinchwad, and the wider manufacturing belt.' },
        { q: 'Does MARC work with auto-ancillary and manufacturing businesses?', a: 'Yes — feasibility studies, process audits, and SOP consulting are among our most-requested services from Pune\u2019s manufacturing and auto-ancillary clients.' },
        { q: 'Can MARC help with a feasibility study for a new plant or facility?', a: 'Yes. Our feasibility methodology covers market demand, technical/regulatory factors, financial viability, and location-level primary research.' },
        { q: 'Does MARC only work with large corporates in Pune?', a: 'No — we work across SMEs, corporates, and PE-backed businesses, from early feasibility questions to full-scale operational and M&A engagements.' },
      ]}
      ctaLabel="Talk to Our Pune Team"
      source="Pune Location Page"
    />
  )
}
