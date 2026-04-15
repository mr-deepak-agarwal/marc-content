'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { 
  ArrowLeft, 
  ArrowRight,
  MapPin, 
  Clock, 
  Briefcase, 
  Wallet,
  Calendar,
  CheckCircle,
  Users,
  GraduationCap,
  Building,
  Send
} from 'lucide-react'

// Job Details Data
const jobDetails = {
  "business-development-executive": {
    title: "Business Development Executive",
    department: "Sales",
    location: "Goa, India",
    type: "Full-time",
    experience: "2-4 years",
    salary: "Competitive + Performance Incentives",
    posted: "January 20, 2026",
    deadline: "February 15, 2026",
    overview: "We're looking for a driven Business Development Executive to join our growing sales team in Goa. You'll be responsible for identifying new business opportunities, building client relationships, and driving revenue growth across our consulting services.",
    responsibilities: [
      "Identify and pursue new business opportunities through research, networking, and outreach",
      "Build and maintain strong relationships with prospective and existing clients",
      "Prepare and deliver compelling presentations and proposals to C-level executives",
      "Collaborate with consulting teams to understand service offerings and client needs",
      "Meet and exceed quarterly and annual revenue targets",
      "Maintain accurate records in CRM and provide regular pipeline reports",
      "Attend industry events and conferences to represent MARC",
      "Contribute to the development of sales strategies and go-to-market plans"
    ],
    requirements: [
      "Bachelor's degree in Business, Marketing, or related field",
      "2-4 years of B2B sales experience, preferably in professional services",
      "Proven track record of meeting or exceeding sales targets",
      "Excellent communication and presentation skills",
      "Strong negotiation and closing abilities",
      "Proficiency in MS Office and CRM tools",
      "Willingness to travel within India (20-30%)"
    ],
    preferred: [
      "MBA or equivalent qualification",
      "Experience selling consulting or advisory services",
      "Existing network in hospitality, FMCG, or manufacturing sectors",
      "Knowledge of market research and strategy consulting"
    ],
    benefits: [
      "Competitive base salary with uncapped commission",
      "Health insurance for self and family",
      "Annual performance bonus",
      "Professional development budget",
      "Flexible work arrangements",
      "Travel allowance"
    ],
    team: "Sales & Business Development",
    reportingTo: "Director, Business Development",
    teamSize: "5-10 people"
  },
  "senior-research-analyst": {
    title: "Senior Research Analyst",
    department: "Market Research",
    location: "Mumbai, India",
    type: "Full-time",
    experience: "3-5 years",
    salary: "₹8-12 LPA",
    posted: "January 15, 2026",
    deadline: "February 28, 2026",
    overview: "Join our Market Research team as a Senior Research Analyst. You'll lead primary and secondary research projects, develop insights, and present findings to clients across industries including hospitality, consumer goods, and healthcare.",
    responsibilities: [
      "Design and execute primary research studies (surveys, interviews, focus groups)",
      "Conduct in-depth secondary research using industry databases and public sources",
      "Analyze quantitative and qualitative data to derive actionable insights",
      "Prepare comprehensive research reports and presentations for clients",
      "Present findings to client stakeholders and answer questions",
      "Mentor junior analysts and review their work",
      "Stay updated on industry trends and competitive landscape",
      "Contribute to proposal development and client pitches"
    ],
    requirements: [
      "Bachelor's or Master's degree in Economics, Statistics, Business, or related field",
      "3-5 years of experience in market research or consulting",
      "Strong analytical and quantitative skills",
      "Proficiency in Excel, PowerPoint, and research tools",
      "Excellent written and verbal communication",
      "Experience with primary research methodologies",
      "Ability to manage multiple projects simultaneously"
    ],
    preferred: [
      "Experience with SPSS, Tableau, or other analytics tools",
      "Knowledge of hospitality or consumer sectors",
      "Published research or case studies",
      "Client-facing experience"
    ],
    benefits: [
      "Competitive salary with annual increments",
      "Health insurance coverage",
      "Learning & development budget",
      "Work-from-home flexibility",
      "Performance bonus",
      "Certification sponsorship"
    ],
    team: "Market Research",
    reportingTo: "Research Manager",
    teamSize: "10-15 people"
  },
  "project-manager": {
    title: "Project Manager",
    department: "Operations",
    location: "Goa, India",
    type: "Full-time",
    experience: "5-8 years",
    salary: "₹12-18 LPA",
    posted: "January 18, 2026",
    deadline: "February 20, 2026",
    overview: "We're seeking an experienced Project Manager to oversee consulting engagements from initiation to delivery. You'll manage cross-functional teams, ensure project quality, and maintain strong client relationships.",
    responsibilities: [
      "Lead end-to-end delivery of consulting projects across service lines",
      "Define project scope, timelines, and resource requirements",
      "Manage project budgets and ensure profitability targets are met",
      "Coordinate with internal teams and external stakeholders",
      "Identify and mitigate project risks proactively",
      "Ensure deliverables meet quality standards and client expectations",
      "Conduct regular status meetings and provide progress reports",
      "Drive continuous improvement in project delivery processes"
    ],
    requirements: [
      "Bachelor's degree in Business, Engineering, or related field",
      "5-8 years of project management experience in consulting or professional services",
      "PMP certification or equivalent",
      "Strong understanding of project management methodologies",
      "Excellent stakeholder management and communication skills",
      "Experience managing budgets of ₹50L+ per project",
      "Proficiency in project management tools (MS Project, Asana, etc.)"
    ],
    preferred: [
      "MBA from a reputed institution",
      "Experience in strategy or market research projects",
      "Agile/Scrum certification",
      "Experience managing offshore teams"
    ],
    benefits: [
      "Competitive salary package",
      "Performance-based bonus",
      "Comprehensive health insurance",
      "Leadership development programs",
      "International travel opportunities",
      "Equity participation (for senior roles)"
    ],
    team: "Project Management Office",
    reportingTo: "Head of Operations",
    teamSize: "8-12 people"
  },
  "financial-analyst": {
    title: "Financial Analyst",
    department: "M&A Advisory",
    location: "Pune, India",
    type: "Full-time",
    experience: "2-4 years",
    salary: "₹6-10 LPA",
    posted: "January 16, 2026",
    deadline: "February 25, 2026",
    overview: "Join our M&A Advisory team as a Financial Analyst. You'll support due diligence, valuation, and financial modeling for transactions across sectors, working closely with senior advisors and client teams.",
    responsibilities: [
      "Build and maintain complex financial models for valuations and projections",
      "Conduct financial due diligence on target companies",
      "Analyze historical financial statements and identify key trends",
      "Prepare information memoranda and pitch books",
      "Support senior team members in client meetings and presentations",
      "Research industry benchmarks and comparable transactions",
      "Assist in preparing valuation reports and deal documentation",
      "Maintain deal databases and internal knowledge repositories"
    ],
    requirements: [
      "Bachelor's degree in Finance, Accounting, or Commerce (CA Inter/CFA Level 1 preferred)",
      "2-4 years of experience in investment banking, corporate finance, or Big 4 advisory",
      "Strong financial modeling skills in Excel",
      "Understanding of valuation methodologies (DCF, comparables, precedent transactions)",
      "Knowledge of Indian GAAP and financial reporting",
      "Excellent attention to detail and analytical skills",
      "Ability to work under tight deadlines"
    ],
    preferred: [
      "Chartered Accountant (CA) or CFA qualification",
      "Experience in M&A transactions",
      "Knowledge of specific sectors (manufacturing, consumer, healthcare)",
      "Familiarity with deal databases (Capital IQ, Bloomberg)"
    ],
    benefits: [
      "Competitive salary",
      "Transaction bonuses",
      "CA/CFA exam support",
      "Health insurance",
      "Exposure to live deals",
      "Fast-track career growth"
    ],
    team: "M&A Advisory",
    reportingTo: "Associate Director, M&A",
    teamSize: "6-8 people"
  },
  "associate-consultant": {
    title: "Associate Consultant",
    department: "Strategy",
    location: "Multiple Locations",
    type: "Full-time",
    experience: "0-2 years",
    salary: "₹5-8 LPA",
    posted: "January 14, 2026",
    deadline: "March 1, 2026",
    overview: "Perfect for recent graduates or early-career professionals! As an Associate Consultant, you'll work on diverse strategy projects, learn from experienced consultants, and develop foundational skills in business consulting.",
    responsibilities: [
      "Support project teams in research, analysis, and deliverable preparation",
      "Conduct industry and company research using various sources",
      "Analyze data and prepare charts, graphs, and presentations",
      "Participate in client meetings and take detailed notes",
      "Help prepare proposals and pitch materials",
      "Contribute to internal knowledge management initiatives",
      "Collaborate with cross-functional teams on projects",
      "Complete structured training programs and certifications"
    ],
    requirements: [
      "Bachelor's degree from a reputed institution (any discipline)",
      "0-2 years of work experience (freshers welcome)",
      "Strong analytical and problem-solving skills",
      "Excellent communication skills in English",
      "Proficiency in MS Office (Excel, PowerPoint, Word)",
      "Eagerness to learn and grow",
      "Ability to work in a fast-paced environment"
    ],
    preferred: [
      "MBA or Master's degree",
      "Internship experience in consulting, research, or strategy",
      "Knowledge of any specific industry vertical",
      "Leadership experience through extracurriculars"
    ],
    benefits: [
      "Structured training program",
      "Mentorship from senior consultants",
      "Rapid learning curve",
      "Health insurance",
      "Performance bonus",
      "Clear career progression path"
    ],
    team: "Strategy Consulting",
    reportingTo: "Engagement Manager",
    teamSize: "15-20 people"
  }
}

export default function JobDetailPage() {
  const params = useParams()
  const jobId = params.id
  const job = jobDetails[jobId]

  if (!job) {
    return (
      <div className="min-h-screen bg-[#F7FFF5] pt-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#1D342F] mb-4">Job Not Found</h1>
          <p className="text-[#47635D] mb-8">The position you're looking for doesn't exist or has been filled.</p>
          <Link 
            href="/career" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#4E9141] text-white font-semibold rounded-full"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Careers
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F7FFF5]" data-testid="job-detail-page">
      
      {/* Header */}
      <section className="bg-[#1D342F] pt-28 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Link 
            href="/career" 
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all positions
          </Link>

          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#4E9141] text-white text-sm font-semibold">
                  {job.department}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm">
                  {job.type}
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{job.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-white/70">
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {job.location}
                </span>
                <span className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  {job.experience}
                </span>
                <span className="flex items-center gap-2">
                  <Wallet className="w-4 h-4" />
                  {job.salary}
                </span>
              </div>
            </div>

            <a 
              href={`mailto:careers@marcglocal.com?subject=Application for ${job.title}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#4E9141] text-white font-semibold rounded-full hover:bg-[#3d7334] transition-all hover:shadow-lg hover:-translate-y-0.5"
              data-testid="apply-now-btn"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Overview */}
              <div>
                <h2 className="text-2xl font-bold text-[#1D342F] mb-4">About This Role</h2>
                <p className="text-[#47635D] leading-relaxed text-lg">{job.overview}</p>
              </div>

              {/* Responsibilities */}
              <div>
                <h2 className="text-2xl font-bold text-[#1D342F] mb-4">What You'll Do</h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#4E9141] flex-shrink-0 mt-0.5" />
                      <span className="text-[#47635D]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <h2 className="text-2xl font-bold text-[#1D342F] mb-4">What We're Looking For</h2>
                <ul className="space-y-3">
                  {job.requirements.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#4E9141] flex-shrink-0 mt-0.5" />
                      <span className="text-[#47635D]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Preferred */}
              <div>
                <h2 className="text-2xl font-bold text-[#1D342F] mb-4">Nice to Have</h2>
                <ul className="space-y-3">
                  {job.preferred.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-[#B45309]" />
                      </div>
                      <span className="text-[#47635D]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-[#1D342F] mb-4">What We Offer</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {job.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#C2DDB4]/30">
                      <CheckCircle className="w-5 h-5 text-[#4E9141]" />
                      <span className="text-[#1D342F] font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Quick Info Card */}
              <div className="bg-white rounded-2xl p-6 border border-[#C2DDB4]/30 shadow-sm">
                <h3 className="font-bold text-[#1D342F] mb-4">Quick Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#F7FFF5] flex items-center justify-center">
                      <Building className="w-5 h-5 text-[#4E9141]" />
                    </div>
                    <div>
                      <div className="text-xs text-[#47635D]">Team</div>
                      <div className="font-medium text-[#1D342F]">{job.team}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#F7FFF5] flex items-center justify-center">
                      <Users className="w-5 h-5 text-[#4E9141]" />
                    </div>
                    <div>
                      <div className="text-xs text-[#47635D]">Team Size</div>
                      <div className="font-medium text-[#1D342F]">{job.teamSize}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#F7FFF5] flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-[#4E9141]" />
                    </div>
                    <div>
                      <div className="text-xs text-[#47635D]">Reports To</div>
                      <div className="font-medium text-[#1D342F]">{job.reportingTo}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#F7FFF5] flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-[#4E9141]" />
                    </div>
                    <div>
                      <div className="text-xs text-[#47635D]">Apply By</div>
                      <div className="font-medium text-[#1D342F]">{job.deadline}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Apply Card */}
              <div className="bg-[#4E9141] rounded-2xl p-6 text-white">
                <h3 className="font-bold text-xl mb-2">Interested?</h3>
                <p className="text-white/80 text-sm mb-4">
                  Send your resume and cover letter to our recruiting team.
                </p>
                <a 
                  href={`mailto:careers@marcglocal.com?subject=Application for ${job.title}`}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-white text-[#4E9141] font-semibold rounded-full hover:shadow-lg transition-all"
                >
                  <Send className="w-4 h-4" />
                  Apply Now
                </a>
              </div>

              {/* Share */}
              <div className="bg-white rounded-2xl p-6 border border-[#C2DDB4]/30">
                <h3 className="font-bold text-[#1D342F] mb-3">Share This Job</h3>
                <p className="text-sm text-[#47635D] mb-4">
                  Know someone who'd be perfect? Spread the word!
                </p>
                <div className="flex gap-2">
                  <a 
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://marcglocal.com/career/${jobId}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 text-center text-sm font-medium text-[#4E9141] bg-[#F7FFF5] rounded-lg hover:bg-[#C2DDB4]/30 transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out this ${job.title} role at MARC!`)}&url=${encodeURIComponent(`https://marcglocal.com/career/${jobId}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 text-center text-sm font-medium text-[#4E9141] bg-[#F7FFF5] rounded-lg hover:bg-[#C2DDB4]/30 transition-colors"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Openings */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1D342F] mb-8">Other Open Positions</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(jobDetails)
              .filter(([id]) => id !== jobId)
              .slice(0, 4)
              .map(([id, otherJob]) => (
                <Link 
                  key={id}
                  href={`/career/${id}`}
                  className="group p-5 rounded-xl bg-[#F7FFF5] hover:bg-[#C2DDB4]/20 border border-[#C2DDB4]/30 hover:border-[#4E9141]/40 transition-all"
                >
                  <h3 className="font-bold text-[#1D342F] group-hover:text-[#4E9141] transition-colors mb-1">
                    {otherJob.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-[#47635D]">
                    <span>{otherJob.location}</span>
                    <span>•</span>
                    <span>{otherJob.experience}</span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
