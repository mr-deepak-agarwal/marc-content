'use client'

import ServicePageTemplate from '@/components/ServicePageTemplate'
import { TrendingUp, FileCheck, Users, Award, Building2, Scale, Target, BarChart3 } from 'lucide-react'

const pageData = {
  tagline: 'SME Listing Advisory Services',
  title: 'Navigate Your Listing Journey from',
  titleHighlight: 'Readiness to Market Entry',
  description: 'Access to capital markets can be a transformative milestone for growing businesses, but navigating the SME listing process requires careful planning, regulatory preparedness, and financial discipline. MARC\'s SME Listing advisory services support companies through every stage of their listing journey, from readiness assessment to successful market entry.',
  
  stats: [
    { value: '25+', label: 'SME Listings Advised' },
    { value: '100%', label: 'Regulatory Compliance' },
    { value: '₹2,000Cr+', label: 'Capital Raised' },
    { value: '90%', label: 'Listing Success Rate' },
  ],
  
  valueProps: [
    { icon: Target, title: 'Listing Readiness', desc: 'Comprehensive assessment of eligibility, suitability, and readiness for SME exchanges.' },
    { icon: FileCheck, title: 'Regulatory Preparation', desc: 'Ensure businesses are well-prepared to meet all regulatory requirements.' },
    { icon: Award, title: 'Governance Strengthening', desc: 'Strengthen financial and governance frameworks for market credibility.' },
    { icon: Scale, title: 'Transaction Support', desc: 'Coordinate with legal advisors, merchant bankers, auditors, and stakeholders.' },
  ],
  
  methodology: [
    { num: '01', title: 'Listing Readiness Assessment', desc: 'Assess listing readiness, eligibility, and suitability for SME exchanges.' },
    { num: '02', title: 'Financial & Compliance Review', desc: 'Review historical financials, compliance status, and governance frameworks.' },
    { num: '03', title: 'Preparation Support', desc: 'Support preparation of financial information, projections, and regulatory disclosures.' },
    { num: '04', title: 'Controls & Systems', desc: 'Assist in strengthening internal controls, MIS, and reporting systems.' },
    { num: '05', title: 'Stakeholder Coordination', desc: 'Coordinate with legal advisors, merchant bankers, auditors, and other advisors.' },
    { num: '06', title: 'Listing Execution', desc: 'Support through documentation, approval processes, and successful market entry.' },
  ],
  methodologyDescription: 'We work closely with promoters and management teams to evaluate listing feasibility, strengthen financial and governance frameworks. Our approach ensures that businesses are well-prepared to meet regulatory requirements while positioning themselves credibly in front of investors.',
  
  services: [
    {
      title: 'Listing Readiness Assessment',
      desc: 'Comprehensive evaluation of eligibility and preparedness for SME listing.',
      features: ['Eligibility Assessment', 'Financial Review', 'Compliance Check', 'Readiness Gap Analysis'],
      icon: Target,
    },
    {
      title: 'Financial Preparation',
      desc: 'Prepare financial statements, projections, and disclosures for listing.',
      features: ['Financial Statement Review', 'Projection Preparation', 'Disclosure Documentation', 'Audit Coordination'],
      icon: BarChart3,
    },
    {
      title: 'Governance & Controls',
      desc: 'Strengthen governance frameworks and internal controls for listed entity.',
      features: ['Board Structure', 'Internal Controls', 'MIS Implementation', 'Policy Framework'],
      icon: Building2,
    },
    {
      title: 'Transaction Coordination',
      desc: 'Manage coordination with merchant bankers, lawyers, and regulators.',
      features: ['Advisor Coordination', 'Documentation Support', 'Regulatory Filings', 'Investor Relations'],
      icon: Users,
    },
  ],
  
  caseStudies: [
    {
      title: 'Manufacturing SME Listing',
      client: 'Mid-Market Manufacturing Company',
      desc: 'Supported SME listing from readiness assessment through successful market entry, strengthening financial controls, governance framework, and regulatory compliance resulting in oversubscribed IPO.',
      tags: ['Manufacturing', 'SME IPO'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=800',
    },
    {
      title: 'Technology Company Listing',
      client: 'Technology Services Provider',
      desc: 'Provided comprehensive listing advisory including financial preparation, MIS setup, and stakeholder coordination enabling successful SME platform listing.',
      tags: ['Technology', 'Services'],
      image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?w=800',
    },
    {
      title: 'Healthcare SME Listing',
      client: 'Healthcare Services Chain',
      desc: 'Advised on listing readiness, strengthened governance and controls, and coordinated with transaction advisors for successful capital market access.',
      tags: ['Healthcare', 'Multi-Location'],
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?w=800',
    },
  ],
  
  faqs: [
    { q: 'What is SME listing and why consider it?', a: 'SME listing provides access to capital markets for small and medium enterprises. It can be a transformative milestone for raising growth capital, providing liquidity to promoters, enhancing brand visibility, and creating value for stakeholders.' },
    { q: 'What are the eligibility criteria for SME listing?', a: 'Eligibility criteria vary by exchange but generally include minimum post-issue paid-up capital, track record of operations, profitability requirements, and corporate governance standards. We assess your specific eligibility during our readiness assessment.' },
    { q: 'How long does the SME listing process take?', a: 'The listing process typically takes 6-9 months from readiness assessment to market entry, depending on the company\'s preparedness, regulatory approvals, and market conditions.' },
    { q: 'What preparation is required before listing?', a: 'Companies need to strengthen financial controls, implement robust MIS, establish governance frameworks, ensure regulatory compliance, prepare historical financials and projections, and position the business credibly for investors.' },
    { q: 'Who should consider SME Listing advisory services?', a: 'SME Listing advisory is suitable for growing businesses considering capital market access, promoter exits, or structured growth funding, and who are ready to strengthen governance and financial discipline.' },
    { q: 'What are the key benefits of SME listing?', a: 'Key benefits include clear understanding of listing feasibility and requirements, improved financial discipline and transparency, stronger governance and controls, structured preparation for investor interaction, and reduced execution risk during the listing process.' },
    { q: 'Do you coordinate with other advisors?', a: 'Yes, we coordinate closely with legal advisors, merchant bankers, auditors, and other stakeholders to ensure comprehensive coverage and smooth listing execution.' },
  ],
  
  ctaTitle: 'Considering SME Listing?',
  ctaDescription: 'Partner with MARC to navigate your listing journey with comprehensive advisory from readiness assessment through successful market entry.',
}

export default function SMEListingPage() {
  return <ServicePageTemplate {...pageData} />
}
