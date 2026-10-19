import ServicePageTemplate2 from '@/components/ServicePageTemplate'
import { FileCheck, MapPin, Building2, TrendingUp, Calculator, Target, Shield, BarChart3, Users, Globe, PieChart } from 'lucide-react'

export const metadata = {
  title: 'Feasibility Study Consultant in India | Market & Financial',
  description: "Assess your project before investing. MARC combines market research, location assessment and financial analysis for feasibility studies in India.",
  alternates: { canonical: 'https://www.marcglocal.com/services/feasibility-study-service-in-india' },
  openGraph: {
    title: 'Feasibility Study Consultant in India | Market & Financial',
    description: "Assess your project before investing. MARC combines market research, location assessment and financial analysis for feasibility studies in India.",
    url: 'https://www.marcglocal.com/services/feasibility-study-service-in-india',
  },
}

const pageData = {
  source: "Feasibility Study",
  methodologySubtitle: "How we assess business feasibility",
  decisionSections: [
    {
      "title": "Choose the study around your investment decision",
      "body": "A new facility, a school and a retail location each need different evidence. Tell us what you plan to build, where you plan to operate and which decision the study must support. We will agree the research questions, geographic coverage and financial inputs before the work begins."
    }
  ],
  scopeTable: {
    "title": "What to agree before commissioning a study",
    "rows": [
      [
        "Decision",
        "New venture, location choice, product launch or expansion"
      ],
      [
        "Market",
        "Product or service, customer segment and geography"
      ],
      [
        "Research",
        "Secondary sources, interview groups and any fieldwork"
      ],
      [
        "Financial inputs",
        "Investment, operating costs, sales assumptions and scenarios"
      ],
      [
        "Outputs",
        "Analyses, recommendations and presentation format"
      ],
      [
        "Timing",
        "Milestones, client inputs and final review date"
      ]
    ]
  },
  scopeNotes: {
    "title": "What to bring to the first discussion",
    "body": "Share a short description of the project, the proposed location or markets, your target customers and the decision deadline. Include any existing sales information, investment estimates or business plan. We can then identify which assumptions need research."
  },
  relatedResources: [
    {
      "title": "Market research for your project",
      "body": "Define the demand, customer and competitor questions your study needs to answer.",
      "href": "/services/market-research-company-in-india",
      "label": "Explore market research"
    },
    {
      "title": "Financial analysis for your decision",
      "body": "Connect market assumptions to the investment and operating model.",
      "href": "/services/financial-and-project-report-consulting-services-in-india",
      "label": "Explore financial modelling"
    },
    {
      "title": "Start with an initial market estimate",
      "body": "MARC Market Pulse can help you explore the size of an Indian market before discussing a research engagement. Review the sources and assumptions, then bring the estimate to MARC when you need further validation.",
      "href": "https://pulse.marcglocal.com/",
      "label": "Explore Market Pulse"
    }
  ],

  tagline: 'Feasibility Study for Business in India',
  title: "Feasibility Study Services",
  titleHighlight: "in India",
  description: "Before you invest in a new business, location or expansion, test the demand and the financial assumptions behind it. MARC combines market research, location assessment and financial analysis to help you decide whether to proceed, revise the plan or investigate further.",
  
  // Custom images for Option 2
  heroImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80',
  serviceImages: [
    'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=600&q=80', // Market Demand Assessment - financial data
    'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80', // Location Feasibility - city aerial
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',    // Financial Viability - calculator/finance
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',    // Risk Analysis - warning/alert concept
    'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80', // Competitive Benchmarking - analytics
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80', // Business Planning - strategy documents - strategy doc
  ],

  stats: [
    { value: '360°', label: 'Research Coverage' },
    { value: '100+', label: 'Feasibility Studies' },
    { value: '5', label: 'Continents served' },
    { value: '15+', label: 'Years Experience' },
  ],

  valueProps: [
    { icon: 'PieChart', title: 'Market Feasibility', desc: 'We analyse the target market by evaluating competitors, estimated sales, market constraints, and market potential.' },
    { icon: 'Shield', title: 'Technical Feasibility', desc: 'We analyse technical factors such as labour laws, legal compliance, and relevant regulations.' },
    { icon: 'Calculator', title: 'Financial Feasibility', desc: 'Capital requirements, and potential financial returns for the project with detailed projections.' },
    { icon: 'Target', title: '360-Degree Research', desc: 'We provide you with 360-degree research services that cover global, national, and local markets.' },
  ],

  methodology: [
    { num: '01', title: 'Market Analysis', desc: 'Analyse target market by evaluating competitors, estimated sales, market constraints, and market potential.' },
    { num: '02', title: 'Technical Assessment', desc: 'Analyse technical factors such as labour laws, legal compliance, and relevant regulations.' },
    { num: '03', title: 'Financial Evaluation', desc: 'Comprehensive analysis of capital requirements and potential financial returns for the project.' },
    { num: '04', title: 'Primary Research', desc: 'Through primary and secondary market research, evaluate feasibility at micro location level.' },
    { num: '05', title: 'Stakeholder Interviews', desc: 'Interview distinguished individuals who are current or former stakeholders to understand key factors.' },
    { num: '06', title: 'Roadmap Development', desc: 'Provide comprehensive way forward to the client including roadmap on execution of the project.' },
  ],
  methodologyDescription: "We start with your proposed business model and the decision you need to make. We assess demand and competition, examine the location where relevant, and compare the opportunity with the investment and operating assumptions. Primary interviews and secondary research are selected to fit the agreed scope.",

  services: [
    {
      title: 'Market Demand Assessment',
      desc: 'Evaluate market demand, customer profiling, and growth potential before committing capital.',
      features: ['Demand Analysis', 'Customer Profiling', 'Growth Potential', 'Market Trends'],
      icon: 'Target',
    },
    {
      title: 'Location Feasibility',
      desc: 'Business location & feasibility advisory services to identify optimal geographies and operating models.',
      features: ['Geographic Viability', 'Infrastructure Readiness', 'Demographic Demand', 'Cost Factors'],
      icon: 'MapPin',
    },
    {
      title: 'Financial Viability',
      desc: 'Comprehensive analysis of capital requirements, ROI projections, and financial sustainability.',
      features: ['Capital Requirements', 'ROI Analysis', 'Financial Projections', 'Sustainability Assessment'],
      icon: 'Calculator',
    },
    {
      title: 'Risk Analysis',
      desc: 'Identify potential risks, regulatory factors, and execution challenges before investment.',
      features: ['Risk Identification', 'Regulatory Review', 'Execution Challenges', 'Mitigation Strategies'],
      icon: 'Shield',
    },
    {
      title: 'Competitive Benchmarking',
      desc: 'Market sizing, entry barriers, pricing analysis, and competitive landscape mapping.',
      features: ['Market Sizing', 'Entry Barriers', 'Pricing Analysis', 'Competitive Mapping'],
      icon: 'BarChart3',
    },
    {
      title: 'Business Planning',
      desc: 'Integrated feasibility study and business planning services for structured execution roadmaps.',
      features: ['Execution Roadmap', 'Growth Strategy', 'Operational Planning', 'Implementation Support'],
      icon: 'FileCheck',
    },
  ],

  caseStudies: [
    {
      client: 'K12 Residential School',
      industry: 'Education',
      service: 'Location-Based Feasibility Study',
      challenge: 'An accomplished group wanted to launch a world class educational institution in Pune, India. We were tasked with conducting a location-based feasibility study of setting up a K12 residential school.',
      solution: 'We assessed different parameters including common size and variance analysis, analyzing key cost centers, comparison of budget and actuals, and vertical/segment wise analysis. Through primary and secondary market research, we evaluated the feasibility of the residential school at that micro location. We interviewed several distinguished individuals who were current or former stakeholders of schools.',
      result: 'Based on our study we provided a comprehensive way forward to the client including a roadmap on execution of the project. The project is underway.',
    },
    {
      client: 'Manufacturing Expansion',
      industry: 'Manufacturing',
      service: 'Market & Financial Feasibility',
      challenge: 'A manufacturing company planning expansion into new product lines needed comprehensive feasibility analysis covering market demand, technical requirements, and financial viability.',
      solution: 'Conducted detailed market analysis evaluating competitors, estimated sales, and market potential. Assessed technical factors including infrastructure requirements, labour availability, and regulatory compliance. Developed financial projections with capital requirements and ROI analysis.',
      result: 'Delivered a complete feasibility report with clear go/no-go recommendations, enabling the client to proceed with confidence on high-potential product lines while avoiding risky ventures.',
    },
    {
      client: 'Retail Chain Expansion',
      industry: 'Retail',
      service: 'Location Feasibility Study',
      challenge: 'A retail chain needed to identify optimal locations for new store openings across multiple cities, balancing market potential with operational feasibility.',
      solution: 'Evaluated geographic viability, infrastructure readiness, demographic demand, and cost factors across shortlisted locations. Conducted catchment area analysis, footfall assessment, and competitor mapping. Developed location scoring model with clear ranking criteria.',
      result: 'Successfully identified top 3 locations with highest ROI potential, detailed operational requirements, and phased expansion roadmap, leading to successful store launches.',
    },
  ],

  faqs: [
    {"q": "How much does a feasibility study cost?", "a": "The scope determines the fee. Geographic coverage, primary interviews, site assessment and the financial analysis required all affect the work involved. Share your project outline so MARC can define the scope and prepare a proposal."},
    {"q": "How long does a feasibility study take?", "a": "Timing depends on the research questions, locations, access to respondents and availability of project data. Agree the milestones and delivery date in the proposal, including time to review assumptions with your team."},

    { q: 'What is a feasibility study for business?', a: 'A feasibility study for a business evaluates market demand, financial viability, technical requirements, and operational risks before launching or expanding a venture.' },
    { q: 'Why are feasibility study services important in India?', a: 'With diverse markets and regulatory complexity, feasibility study services in India help businesses minimize risk and align investments with real market potential.' },
    { q: 'What does a feasibility company typically analyze?', a: 'A feasibility company assesses market feasibility, financial returns, location suitability, regulatory factors, and execution challenges.' },
    { q: 'Who should opt for business feasibility services?', a: 'Startups, MSMEs, investors, and large enterprises planning new ventures, expansions, or capital investments benefit from Business Feasibility Services.' },
    { q: 'When should I engage a feasibility study consultant?', a: 'A feasibility study consultant should be engaged before launching a new business, entering a new market, expanding operations, raising capital, or selecting a business location.' },
    { q: 'What does a market feasibility study include?', a: 'A market feasibility study typically covers demand assessment, customer profiling, competitive benchmarking, pricing analysis, market sizing, entry barriers, and growth potential.' },
    { q: 'Do you provide location-based feasibility studies?', a: 'Yes, MARC provides comprehensive location-based feasibility studies evaluating geographic viability, infrastructure, demographics, and cost factors to identify optimal business locations.' },
  ],

  ctaTitle: "Discuss the decision behind your project",
  ctaDescription: "Tell us what you are considering and what you need to know before investing.",
  ctaLabel: "Discuss Your Feasibility Study",
  midPageCtaText: "Discuss the evidence you need before committing to your project.",
  showScorecardBanner: true,
  scorecardBannerContext: 'Not ready for a full study yet? Get an instant readiness score across market, regulatory, financial, and operational dimensions first — free, 4 minutes.',
  showChecklistCTA: true,
  socialProof: {
    type: 'outcome',
    client: 'Fly91 Aviation',
    result: 'Route-level demand-supply modelling gave Fly91 clear go/no-go decisions on four UDAN routes, including virgin routes with no prior air-traffic data.',
  },
}

export default function FeasibilityStudyPageOption2() {
  return <ServicePageTemplate2 {...pageData} />
}