import HeroSection from '@/components_v2/HeroSection'
import SectionDivider from '@/components_v2/SectionDivider'
import AboutSection from '@/components_v2/AboutSection'
import HowWeWorkSection from '@/components_v2/HowWeWorkSection'
import ServicesSection from '@/components_v2/ServicesSection'
import WhoWeWorkWithSection from '@/components_v2/WhoWeWorkWithSection'
import IndustriesSection from '@/components_v2/IndustriesSection'
import WhyUsSection from '@/components_v2/WhyUsSection'
import TestimonialsSection from '@/components_v2/TestimonialsSection'
import ClientsSection from '@/components_v2/ClientsSection'
import InsightsSection from '@/components_v2/InsightsSection'
import CareersSection from '@/components_v2/CareersSection'
import ContactSection from '@/components_v2/ContactSection'
import Footer from '@/components_v2/Footer'

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
