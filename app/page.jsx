import HeroSection from '@/components/HeroSection'
import SectionDivider from '@/components/SectionDivider'
import AboutSection from '@/components/AboutSection'
import HowWeWorkSection from '@/components/HowWeWorkSection'
import ServicesSection from '@/components/ServicesSection'
import WhoWeWorkWithSection from '@/components/WhoWeWorkWithSection'
import IndustriesSection from '@/components/IndustriesSection'
import WhyUsSection from '@/components/WhyUsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ClientsSection from '@/components/ClientsSection'
import InsightsSection from '@/components/InsightsSection'
import CareersSection from '@/components/CareersSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'MARC - Growth Advisory for Indian & Global Businesses | Business Consulting India',
  description: 'MARC is a growth advisory firm partnering with founders and investors to build scalable businesses. Specializing in India market entry, international expansion, M&A, and growth strategy consulting.',
  keywords: ['growth advisory India', 'business consulting India', 'India market entry', 'international expansion', 'M&A advisory', 'growth strategy', 'market intelligence', 'MARC Glocal', 'compounding growth'],
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HeroSection />
        <SectionDivider title="About Us" variant="line-text" />
        <AboutSection />
        <SectionDivider title="What We Do" variant="line-text" />
        <ServicesSection />
        <SectionDivider title="How We Work" variant="line-text" />
        <HowWeWorkSection />
        <SectionDivider title="Who We Work With" variant="line-text" />
        <WhoWeWorkWithSection />
        <SectionDivider title="Industries" variant="line-text" />
        <IndustriesSection />
        <SectionDivider title="Why Choose Us" variant="line-text" />
        <WhyUsSection />
        <SectionDivider title="Testimonials" variant="line-text" />
        <TestimonialsSection />
        <ClientsSection />
        <SectionDivider title="Insights" variant="line-text" />
        <InsightsSection />
        <SectionDivider title="Careers" variant="line-text" />
        <CareersSection />
        <SectionDivider title="Contact" variant="line-text" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
