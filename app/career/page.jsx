'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { 
  ArrowRight, 
  Briefcase, 
  Users, 
  Heart, 
  Shield, 
  Sparkles, 
  ChevronRight, 
  MapPin, 
  Clock, 
  GraduationCap,
  TrendingUp,
  Globe,
  Award,
  CheckCircle,
  Send,
  FileText,
  UserCheck,
  MessageSquare,
  Handshake,
  Coffee,
  BookOpen,
  Plane,
  HeartPulse,
  Wallet,
  Baby,
  Dumbbell,
  Quote
} from 'lucide-react'

// Employee Testimonials Data
const employeeTestimonials = [
  {
    id: 1,
    name: "Your Name Here",
    role: "Senior Analyst",
    department: "Market Research",
    years: "3 years at MARC",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
    quote: "Add your employee testimonial here. What do they love about working at MARC? What projects have they worked on? How have they grown?",
    highlight: "Promoted twice in 3 years"
  },
  {
    id: 2,
    name: "Your Name Here",
    role: "Project Manager",
    department: "Strategy Consulting",
    years: "5 years at MARC",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop",
    quote: "Add your employee testimonial here. Share their journey, the challenges they've overcome, and why they chose to stay at MARC.",
    highlight: "Led 20+ client engagements"
  },
  {
    id: 3,
    name: "Your Name Here",
    role: "Business Analyst",
    department: "M&A Advisory",
    years: "2 years at MARC",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop",
    quote: "Add your employee testimonial here. Include specifics about the work culture, mentorship, or career development opportunities.",
    highlight: "Worked on ₹200Cr+ deals"
  },
  {
    id: 4,
    name: "Your Name Here",
    role: "Research Lead",
    department: "Consumer & Retail",
    years: "4 years at MARC",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop",
    quote: "Add your employee testimonial here. What makes MARC different from other firms? What advice would they give to candidates?",
    highlight: "Built the retail practice"
  }
]

// Application Process Steps
const applicationSteps = [
  {
    step: 1,
    title: "Apply Online",
    description: "Submit your resume and cover letter through our careers portal.",
    duration: "Day 1",
    icon: Send
  },
  {
    step: 2,
    title: "Initial Screening",
    description: "Our HR team reviews your profile and reaches out for a brief call.",
    duration: "Days 3-5",
    icon: FileText
  },
  {
    step: 3,
    title: "Case Interview",
    description: "Demonstrate your problem-solving skills through a business case.",
    duration: "Week 2",
    icon: MessageSquare
  },
  {
    step: 4,
    title: "Panel Interview",
    description: "Meet with senior team members to discuss experience and fit.",
    duration: "Week 2-3",
    icon: UserCheck
  },
  {
    step: 5,
    title: "Final Decision",
    description: "Receive your offer letter with compensation details.",
    duration: "Week 3-4",
    icon: Handshake
  }
]

// Benefits Data
const benefits = [
  { icon: HeartPulse, title: "Health Insurance", description: "Comprehensive medical coverage for you and family" },
  { icon: GraduationCap, title: "Learning Budget", description: "Annual allowance for courses & certifications" },
  { icon: Wallet, title: "Performance Bonus", description: "Competitive bonuses tied to performance" },
  { icon: Plane, title: "Travel Opportunities", description: "Work with clients across India & abroad" },
  { icon: Baby, title: "Parental Leave", description: "Generous maternity and paternity leave" },
  { icon: Coffee, title: "Flexible Work", description: "Hybrid work model with WFH flexibility" },
  { icon: BookOpen, title: "Mentorship Program", description: "1-on-1 mentoring from senior consultants" },
  { icon: Dumbbell, title: "Wellness Programs", description: "Gym memberships & mental health support" },
]

// Job Openings Data
const jobOpenings = [
  {
    id: "business-development-executive",
    title: "Business Development Executive",
    type: "Full-time",
    location: "Goa, India",
    department: "Sales",
    experience: "2-4 years",
    salary: "Competitive + Incentives",
    posted: "2 days ago",
    urgent: true
  },
  {
    id: "senior-research-analyst",
    title: "Senior Research Analyst",
    type: "Full-time",
    location: "Mumbai, India",
    department: "Market Research",
    experience: "3-5 years",
    salary: "₹8-12 LPA",
    posted: "1 week ago",
    urgent: false
  },
  {
    id: "project-manager",
    title: "Project Manager",
    type: "Full-time",
    location: "Goa, India",
    department: "Operations",
    experience: "5-8 years",
    salary: "₹12-18 LPA",
    posted: "3 days ago",
    urgent: true
  },
  {
    id: "financial-analyst",
    title: "Financial Analyst",
    type: "Full-time",
    location: "Pune, India",
    department: "M&A Advisory",
    experience: "2-4 years",
    salary: "₹6-10 LPA",
    posted: "5 days ago",
    urgent: false
  },
  {
    id: "associate-consultant",
    title: "Associate Consultant",
    type: "Full-time",
    location: "Multiple Locations",
    department: "Strategy",
    experience: "0-2 years",
    salary: "₹5-8 LPA",
    posted: "1 week ago",
    urgent: false
  }
]

// Culture Values
const cultureValues = [
  {
    icon: Sparkles,
    title: 'Adaptability',
    description: 'Innovation thinking, self-learning, and always having a positive attitude.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Knowledge sharing, frequent client interaction, and working as one team.',
  },
  {
    icon: Heart,
    title: 'Care',
    description: 'Everyone can achieve their potential with the right backing and support.',
  },
  {
    icon: Shield,
    title: 'Accountability',
    description: 'Being proactive, honest, committed, and communicative at all times.',
  }
]

export default function CareersPage() {
  const [isVisible, setIsVisible] = useState({})
  const [visibleSteps, setVisibleSteps] = useState([])
  const observerRefs = useRef([])

  useEffect(() => {
    const observers = observerRefs.current.map((ref, index) => {
      if (!ref) return null
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [index]: true }))
          }
        },
        { threshold: 0.1, rootMargin: '50px' }
      )
      observer.observe(ref)
      return observer
    })

    return () => observers.forEach(obs => obs?.disconnect())
  }, [])

  // Animate application steps
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setVisibleSteps((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.3 }
    )

    document.querySelectorAll('[data-step-item]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white" data-testid="careers-page">

      {/* ==================== HERO SECTION - Matching About/Industries Style ==================== */}
      <section className="relative pt-32 pb-20 bg-[#F7FFF5] overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4E9141]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C2DDB4]/20 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[3px] bg-[#4E9141]" />
                <span className="text-[#4E9141] font-bold text-lg uppercase tracking-[0.1em]">
                  Careers
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-[#1D342F] leading-[1.1] mb-6">
                Build Your Career
                <span className="text-[#4E9141]"> With MARC</span>
              </h1>
              
              <p className="text-xl text-[#47635D] leading-relaxed mb-8 max-w-xl">
                At MARC, you'll help clients expand across India, conduct due diligence 
                for major acquisitions, and build market entry strategies—from day one.
              </p>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="#openings" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#4E9141] hover:bg-[#3d7334] text-white font-semibold rounded-full transition-all group"
                  data-testid="view-openings-btn"
                >
                  View Open Positions
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#process" 
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#4E9141] text-[#4E9141] font-semibold rounded-full hover:bg-[#4E9141] hover:text-white transition-all"
                >
                  How to Apply
                </a>
              </div>
            </div>

            {/* Stats Grid - Matching Industries Style */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { num: '500+', label: 'Projects Delivered' },
                { num: '14+', label: 'Years Experience' },
                { num: '8', label: 'Offices in India' },
                { num: '30+', label: 'Countries Served' }
              ].map((stat, i) => (
                <div 
                  key={i}
                  className="aspect-square rounded-2xl bg-white border border-[#C2DDB4]/30 p-6 flex flex-col items-center justify-center hover:border-[#4E9141]/50 hover:shadow-lg transition-all duration-300"
                >
                  <span className="text-4xl font-bold text-[#4E9141]">{stat.num}</span>
                  <span className="text-sm font-medium text-[#47635D] text-center mt-2">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CULTURE VALUES ==================== */}
      <section 
        ref={el => observerRefs.current[0] = el}
        className="py-16 bg-white"
      >
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${isVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-[3px] bg-[#4E9141]" />
            <span className="text-[#4E9141] font-bold text-lg uppercase tracking-[0.1em]">
              Our Culture
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1D342F] mb-4">
            Built on <span className="text-[#4E9141]">4 Pillars</span>
          </h2>
          <p className="text-lg text-[#47635D] leading-relaxed max-w-3xl mb-12">
            Our values guide everything we do—from how we work with clients to how we support each other.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cultureValues.map((value, index) => (
              <div 
                key={index}
                className="group bg-[#F7FFF5] rounded-2xl p-8 border border-[#C2DDB4]/30 hover:border-[#4E9141]/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#4E9141] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1D342F] mb-3">{value.title}</h3>
                <p className="text-[#47635D] text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== EMPLOYEE TESTIMONIALS ==================== */}
      <section 
        ref={el => observerRefs.current[1] = el}
        className="py-16 bg-[#F7FFF5]"
      >
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${isVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-[3px] bg-[#4E9141]" />
            <span className="text-[#4E9141] font-bold text-lg uppercase tracking-[0.1em]">
              Our People
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1D342F] mb-12">
            Hear From Our Team
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {employeeTestimonials.map((employee, index) => (
              <div 
                key={employee.id}
                className="group relative bg-white rounded-2xl p-8 border border-[#C2DDB4]/30 hover:border-[#4E9141]/50 hover:shadow-xl transition-all duration-300"
                data-testid={`employee-testimonial-${index}`}
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-[#4E9141]/10" />
                
                <div className="flex items-start gap-4 mb-6">
                  <img 
                    src={employee.image} 
                    alt={`${employee.name} - ${employee.role} at MARC`}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#4E9141]/20"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-[#1D342F]">{employee.name}</h3>
                    <p className="text-[#4E9141] font-medium">{employee.role}</p>
                    <p className="text-sm text-[#47635D]">{employee.department} • {employee.years}</p>
                  </div>
                </div>

                <p className="text-[#47635D] leading-relaxed mb-4 italic">
                  "{employee.quote}"
                </p>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#4E9141]/10 rounded-full">
                  <Award className="w-4 h-4 text-[#4E9141]" />
                  <span className="text-sm font-medium text-[#4E9141]">{employee.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== APPLICATION PROCESS - Horizontal Steps ==================== */}
      <section 
        id="process"
        ref={el => observerRefs.current[2] = el}
        className="py-20 bg-white overflow-hidden"
      >
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${isVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-[3px] bg-[#4E9141]" />
            <span className="text-[#4E9141] font-bold text-lg uppercase tracking-[0.1em]">
              How To Apply
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1D342F] mb-4">
            Your Journey Starts Here
          </h2>
          <p className="text-lg text-[#47635D] mb-16 max-w-2xl">
            Our hiring process typically takes 3-4 weeks. Here's what to expect.
          </p>

          {/* Horizontal Steps */}
          <div className="relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-[2px] bg-gradient-to-r from-[#4E9141] via-[#C2DDB4] to-[#4E9141]" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {applicationSteps.map((step, index) => (
                <div 
                  key={step.step}
                  data-step-item
                  data-index={index}
                  className={`relative text-center transition-all duration-700 ${
                    visibleSteps.includes(index)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  data-testid={`application-step-${index}`}
                >
                  {/* Step Circle with Icon */}
                  <div className="relative z-10 mx-auto mb-6">
                    <div className={`w-20 h-20 mx-auto rounded-full bg-[#4E9141] flex items-center justify-center shadow-lg transition-all duration-500 ${
                      visibleSteps.includes(index) ? 'shadow-[#4E9141]/30 scale-100' : 'shadow-none scale-90'
                    }`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Step Number Badge */}
                    <div className={`absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#1D342F] text-white text-xs font-bold flex items-center justify-center transition-all duration-500 ${
                      visibleSteps.includes(index) ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                    }`} style={{ transitionDelay: `${index * 200 + 300}ms` }}>
                      {step.step}
                    </div>

                    {/* Pulse ring animation */}
                    {visibleSteps.includes(index) && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="absolute w-20 h-20 rounded-full border-2 border-[#4E9141]/30 animate-ping" style={{ animationDuration: '2s' }} />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className={`transition-all duration-500 ${
                    visibleSteps.includes(index) ? 'opacity-100' : 'opacity-0'
                  }`} style={{ transitionDelay: `${index * 200 + 200}ms` }}>
                    <h3 className="text-lg font-bold text-[#1D342F] mb-2">{step.title}</h3>
                    <p className="text-sm text-[#47635D] leading-relaxed mb-3 min-h-[48px]">{step.description}</p>
                    <span className="inline-block px-4 py-1.5 bg-[#F7FFF5] border border-[#C2DDB4]/50 rounded-full text-xs font-semibold text-[#4E9141]">
                      {step.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tips Box */}
          <div className="mt-16 p-8 rounded-2xl bg-[#F7FFF5] border border-[#C2DDB4]/30">
            <h3 className="text-xl font-bold text-[#1D342F] mb-4">Tips for Success</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#4E9141] flex-shrink-0 mt-0.5" />
                <p className="text-[#47635D] text-sm">Research MARC's recent projects and industry focus areas before your interview.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#4E9141] flex-shrink-0 mt-0.5" />
                <p className="text-[#47635D] text-sm">Prepare for case studies using structured frameworks (MECE, Porter's Five Forces).</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#4E9141] flex-shrink-0 mt-0.5" />
                <p className="text-[#47635D] text-sm">Be ready to discuss specific examples of problem-solving from your experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== BENEFITS ==================== */}
      <section 
        ref={el => observerRefs.current[3] = el}
        className="py-16 bg-[#F7FFF5]"
      >
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${isVisible[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-[3px] bg-[#4E9141]" />
                <span className="text-[#4E9141] font-bold text-lg uppercase tracking-[0.1em]">
                  Benefits & Perks
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1D342F] mb-6">
                We Take Care of Our People
              </h2>
              <p className="text-lg text-[#47635D] leading-relaxed mb-8">
                Beyond competitive salaries, we invest in your growth, health, and happiness. 
                Because when you thrive, we all thrive.
              </p>
              
              <a 
                href="#openings"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#4E9141] text-white font-semibold rounded-full hover:bg-[#3d7334] transition-all duration-300 group"
              >
                Explore Opportunities
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="group p-5 rounded-2xl bg-white border border-[#C2DDB4]/30 hover:border-[#4E9141]/50 hover:shadow-lg transition-all duration-300"
                  data-testid={`benefit-${index}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#4E9141] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-[#1D342F] mb-1">{benefit.title}</h3>
                  <p className="text-sm text-[#47635D]">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== JOB OPENINGS ==================== */}
      <section 
        id="openings"
        ref={el => observerRefs.current[4] = el}
        className="py-16 bg-white"
      >
        <div className={`max-w-5xl mx-auto px-6 transition-all duration-1000 ${isVisible[4] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-[3px] bg-[#4E9141]" />
            <span className="text-[#4E9141] font-bold text-lg uppercase tracking-[0.1em]">
              Open Positions
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1D342F] mb-4">
            Current Openings
          </h2>
          <p className="text-lg text-[#47635D] mb-12">
            Find your perfect role and take the next step in your career.
          </p>

          <div className="space-y-4">
            {jobOpenings.map((job, index) => (
              <Link 
                key={job.id}
                href={`/career/${job.id}`}
                className="group flex items-center justify-between p-6 rounded-2xl bg-[#F7FFF5] hover:bg-white border border-[#C2DDB4]/30 hover:border-[#4E9141]/50 hover:shadow-xl transition-all duration-300"
                data-testid={`job-card-${index}`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-[#1D342F] group-hover:text-[#4E9141] transition-colors">
                      {job.title}
                    </h3>
                    {job.urgent && (
                      <span className="px-2 py-0.5 bg-red-100 text-red-600 text-xs font-semibold rounded-full">
                        Urgent
                      </span>
                    )}
                    <span className="px-3 py-1 rounded-full bg-[#4E9141]/10 text-[#4E9141] text-xs font-semibold">
                      {job.department}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-[#47635D]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {job.experience}
                    </span>
                    <span className="flex items-center gap-1">
                      <Wallet className="w-4 h-4" />
                      {job.salary}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#4E9141] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="hidden sm:inline">View Details</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          {/* Don't see a fit */}
          <div className="mt-12 p-8 rounded-2xl bg-[#F7FFF5] border border-[#C2DDB4]/30 text-center">
            <h3 className="text-2xl font-bold text-[#1D342F] mb-2">Don't see a role that fits?</h3>
            <p className="text-[#47635D] mb-6">
              We're always looking for talented individuals. Send us your resume!
            </p>
            <a 
              href="mailto:careers@marcglocal.com" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#4E9141] text-white font-semibold rounded-full hover:bg-[#3d7334] transition-all duration-300"
              data-testid="send-resume-cta"
            >
              <Send className="w-5 h-5" />
              Send Your Resume
            </a>
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="py-20 bg-[#4E9141]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join MARC and be part of a team that's shaping business decisions across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#openings" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#4E9141] font-semibold rounded-full hover:bg-[#C2DDB4] transition-all group"
              data-testid="final-cta-explore"
            >
              Explore Opportunities
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="mailto:careers@marcglocal.com" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all"
            >
              Contact Recruiting
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
