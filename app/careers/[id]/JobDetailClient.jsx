'use client'

import Link from 'next/link'
import Footer from '@/components/Footer'
import { jobDetails } from '@/data/careersData'
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

export default function JobDetailClient({ jobId }) {
  const job = jobDetails[jobId]

  if (!job) {
    return (
      <div className="min-h-screen bg-[#F7FFF5] pt-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#1D342F] mb-4">Job Not Found</h1>
          <p className="text-[#47635D] mb-8">The position you're looking for doesn't exist or has been filled.</p>
          <Link 
            href="/careers" 
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
            href="/careers" 
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
