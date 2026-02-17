'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { ArrowRight, ExternalLink, Newspaper, FileText, Mail, Calendar, ChevronRight, Award } from 'lucide-react'

// Media images for animated carousel
const mediaImages = [
  {
    url: 'https://images.unsplash.com/photo-1768508950408-d59387d4dcd1?w=800&q=80',
    title: 'Corporate Events',
  },
  {
    url: 'https://images.unsplash.com/photo-1713948412932-aad419b13f5e?w=800&q=80',
    title: 'Business News',
  },
  {
    url: 'https://images.unsplash.com/photo-1677640724372-adb865d29aa8?w=800&q=80',
    title: 'Awards & Recognition',
  },
  {
    url: 'https://images.unsplash.com/photo-1758691737538-220c1902b1ca?w=800&q=80',
    title: 'Team Celebrations',
  },
]

// Animated Media Carousel Component
function MediaCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mediaImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[450px]" data-testid="media-carousel">
      <div className="relative w-full h-full">
        {mediaImages.map((image, index) => {
          const isActive = index === currentIndex
          const isPrev = index === (currentIndex - 1 + mediaImages.length) % mediaImages.length
          const isNext = index === (currentIndex + 1) % mediaImages.length

          let transform = 'translateX(100%) scale(0.8)'
          let opacity = 0
          let zIndex = 0

          if (isActive) {
            transform = 'translateX(0) scale(1)'
            opacity = 1
            zIndex = 30
          } else if (isPrev) {
            transform = 'translateX(-30%) scale(0.85) rotateY(15deg)'
            opacity = 0.5
            zIndex = 20
          } else if (isNext) {
            transform = 'translateX(30%) scale(0.85) rotateY(-15deg)'
            opacity = 0.5
            zIndex = 20
          }

          return (
            <div
              key={index}
              className="absolute inset-0 transition-all duration-700 ease-out"
              style={{ transform, opacity, zIndex }}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-4 py-2 bg-white/90 text-[#1D342F] text-sm font-semibold rounded-full">
                    {image.title}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {mediaImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-6 bg-[#4E9141]' : 'bg-[#C2DDB4]'
            }`}
            data-testid={`carousel-dot-${index}`}
          />
        ))}
      </div>
    </div>
  )
}

const newsArticles = [
  {
    date: 'Sept 1, 2023',
    source: 'The Economic Times',
    title: 'The most admired Indian companies in 2023',
    excerpt: 'MARC gets featured in The Economic Times for "Top 10 Most Admired Companies in India 2023" that features a diverse range of companies that have achieved financial success while also prioritizing innovation, social responsibility, and employee well-being.',
    link: 'https://economictimes.indiatimes.com/news/company/corporate-trends/here-are-some-of-the-most-admired-indian-companies-in-2023/articleshow/103255539.cms',
    featured: true
  },
  {
    date: 'Oct 21, 2022',
    source: 'EMS Now',
    title: 'The Indian Companies Helping The C-Suite Tackle Talent Shortages',
    excerpt: 'MARC Glocal provides very different services but with a similar level of flexibility and expertise. Their CEO, Ashustosh Kharangate, explains that "we have spent time working in financial services supporting companies in their M&A activity, providing anything from research to due diligence services."',
    link: 'https://www.emsnow.com/the-indian-companies-helping-the-c-suite-tackle-talent-shortages/'
  },
  {
    date: 'Feb 2, 2022',
    source: 'The SME India',
    title: 'MSMEs and the Union Budget 2022',
    excerpt: 'The MSME sector is hailed as the backbone of the country\'s economy, comprising 6.3 million units and employing over 11 crores of the Indian population, accounting for more than 28 percent of the Indian GDP.',
    link: 'https://thesmeindia.com/msmes-and-the-union-budget-2022/'
  },
  {
    date: 'Jan 31, 2022',
    source: 'Deccan Herald',
    title: 'Ashutosh Kharangate, Founder & MD of MARC says, "Internationalization is Crucial for MSMEs"',
    excerpt: 'Over the last few years, working closely with clients, we have realized that several Indian companies have incredible quality products that are limited in a local market, ahead of its time or better suited for an overseas market.',
    link: 'https://www.deccanherald.com/brandspot/pr-spot/ashutosh-kharangate-founder-md-of-marc-says-internationalization-is-crucial-for-msmes-1076479.html'
  },
  {
    date: 'Dec 2, 2021',
    source: 'Daily Pioneer',
    title: 'MARC aims at helping SMEs throughout life',
    excerpt: 'MARC\'s robust portfolio has led the company to receive rewards, recognition and acknowledgements across the country. Their research concepts make it easy for clients to gauge Profitability & ROI, before commencing any business.',
    link: 'https://www.dailypioneer.com/2021/state-editions/marc-aims-at-helping-smes-throughout-life.html'
  },
  {
    date: 'Nov 18, 2021',
    source: 'Mid-Day',
    title: 'MARC is assisting SMEs & MSMEs in their growth journey',
    excerpt: 'MARC helps the small and medium scale businesses to start well, prosper and grow. Believing that every business is unique and has the capability to be the best.',
    link: 'https://www.mid-day.com/lifestyle/infotainment/article/marc-is-assisting-smes-and-msmes-in-their-growth-journey-23201433'
  },
  {
    date: 'Oct 27, 2021',
    source: 'Bangalore Mirror',
    title: 'It\'s time to dine and wine again',
    excerpt: 'After almost two years of grim tidings, the hospitality sector is grooving back to its pre-pandemic days. Festival fervour is helping businesses get back to profit levels of the times before covid.',
    link: 'https://bangaloremirror.indiatimes.com/bangalore/others/its-time-to-dine-and-wine-again/articleshow/87293424.cms'
  },
  {
    date: 'Oct 7, 2021',
    source: 'Hotelier India',
    title: 'What does the future hold for Goa\'s tourism business?',
    excerpt: 'Dipping occupancy and ARR levels post-pandemic saw many standalone hotels in Goa down their shutters. What does this bode for the state\'s hospitality sector?',
    link: 'https://www.hotelierindia.com/business/17874-is-it-the-end-of-the-road-for-goas-dream-tourism-run'
  },
  {
    date: 'Sept 22, 2021',
    source: 'SME Futures',
    title: 'Internationalization: New frontiers for SMEs in India',
    excerpt: 'If you thought Internationalisation was only the act of exporting, that\'s akin to saying Marketing and Sales are the same things. Exports are a part of internationalization, not the other way round.',
    link: 'https://smefutures.com/internationalization-new-frontiers-for-smes-in-india/'
  },
  {
    date: 'Sept 16, 2021',
    source: 'The Economic Times',
    title: 'Hinterland or Rural Tourism to boost India\'s tourism industry',
    excerpt: 'While we keep mourning the tragic demise of the tourism industry due to the pandemic, we miss the unique characteristics displayed by the Indian traveler.',
    link: 'https://hospitality.economictimes.indiatimes.com/news/speaking-heads/hinterland-or-rural-tourism-to-boost-indias-tourism-industry/86228000'
  },
  {
    date: 'Aug 16, 2021',
    source: 'The Navhind Times',
    title: 'Scaling up a business',
    excerpt: 'Scaling a business proves to be a lot harder than starting one. Ashutosh Kharangate shares his key learnings on the 4 important aspects you need to analyse in order to scale your business to new heights.',
    link: 'https://epaper.navhindtimes.in/NewsDetail.aspx?storyid=26989&date=2021-08-16&pageid=1'
  },
  {
    date: 'Aug 10, 2021',
    source: 'Your Story',
    title: '\'Your vibe attracts your tribe\' – 35 quotes from Indian startup journeys',
    excerpt: 'Ashutosh Kharangate, Founder and MD of MARC was quoted among the top 35 Indian Startup Entrepreneurs. Get an insight into the memorable journeys of these entrepreneurs in the country.',
    link: 'https://yourstory.com/2021/08/quotes-entrepreneurship-vibe-leader-team/amp'
  },
  {
    date: 'Aug 04, 2021',
    source: 'Your Story',
    title: 'How this ex-CA from PwC helps SMBs, MSMEs scale their business',
    excerpt: 'A former CA, now one of India\'s leading business advisors has led to the success of over 300 MSMEs across the country. Ashutosh shares insights on the vitality of research and analytics for entrepreneurs at every scale of their business.',
    link: 'https://yourstory.com/smbstory/pwc-ca-entrepreneur-msme-small-business-mangal-analytics-research-consulting-goa/amp'
  },
  {
    date: 'Jul 28, 2021',
    source: 'Your Story',
    title: 'Can MSMEs and small businesses survive a potential third wave?',
    excerpt: 'It is evident that a few enterprises which took their business online thrived during the first wave and some in the second, but will they be able to survive during the third wave?',
    link: 'https://yourstory.com/smbstory/msme-small-business-survival-measures-government-schemes-covid19-third-wave/amp'
  },
  {
    date: 'Jul 26, 2021',
    source: 'Business World',
    title: 'PPP Models in Domestic Tourism',
    excerpt: 'The hospitality and tourism industry in India have recently begun to flourish again thanks to the influx of domestic tourists and their contribution to the industry\'s revival.',
    link: 'http://bwhotelier.businessworld.in/article/PPP-Models-in-Domestic-Tourism/26-07-2021-397998/'
  },
  {
    date: 'Jul 12, 2021',
    source: 'The Economic Times',
    title: 'Role of social media to win travellers confidence',
    excerpt: 'With lockdowns lifted and vaccination drives taking place, there is a sudden urge to travel. Assuring tourist safety is key and using modern day advertising mediums is the way ahead.',
    link: 'https://hospitality.economictimes.indiatimes.com/news/speaking-heads/role-of-social-media-to-win-travellers-confidence/84339690'
  },
  {
    date: 'Jun 23, 2021',
    source: 'Outlook',
    title: 'Financial Advisors, the Guiding Lights for SMEs',
    excerpt: 'With the pandemic affecting multiple industries and businesses across the globe, financial advisors have proven to be the saving grace for SMEs through valuable Market, Industry and Performance Analysis.',
    link: 'https://www.outlookindia.com/outlookmoney/career/financial-advisors-the-guiding-lights-for-smes-7783'
  },
  {
    date: 'Jun 22, 2021',
    source: 'The Economic Times',
    title: 'Despite demand, luxury housing has taken a hit in Goa due to lockdown: Survey',
    excerpt: 'The coastal state of Goa has been a popular tourist hotspot. Luxury housing grew with the rise in demand over the last few decades. However, the ongoing pandemic has taken a huge toll on the real estate industry in Goa.',
    link: 'https://economictimes.indiatimes.com/industry/services/property-/-cstruction/despite-demand-luxury-housing-has-taken-a-hit-in-goa-due-to-lockdown-survey/articleshow/83740791.cms'
  },
  {
    date: 'Jun 05, 2021',
    source: 'The SME India',
    title: 'How SMEs can leverage finance efficiently and prudently',
    excerpt: 'Being prudent in leveraging your finance while planning your business venture is crucial. There are a few key aspects you need to keep in mind before arranging for funds and drafting a proposal to the bank.',
    link: 'https://thesmeindia.com/how-smes-can-leverage-finance-efficiently-and-prudently/'
  },
  {
    date: 'May 17, 2021',
    source: 'The Navhind Times',
    title: 'Goa\'s hospitality industry paradox',
    excerpt: 'The possibilities to improve the hospitality sector in Goa to enhance tourist experiences is endless. Ashutosh Kharangate talks about the little tweaks in the industry that can boost revenue in the state of Goa.',
    link: 'https://epaper.navhindtimes.in/NewsDetail.aspx?storyid=10957&date=2021-05-17&pageid=1'
  },
  {
    date: 'Apr 30, 2021',
    source: 'oHeraldo',
    title: 'The requirement of market research and project feasibility study',
    excerpt: 'If you plan on starting a business of your own, it is vital to take into account all the factors which can affect your venture\'s growth. A comprehensive market research and feasibility study is the key to your business growth.',
    link: 'https://www.heraldgoa.in/Edit/Opinions/The-requirement-of-market-research-and-project-feasibility-study/174267'
  },
  {
    date: 'Apr 01, 2021',
    source: 'The Finance Story',
    title: '7 questions with this CA who quit the Big 4 to run a consulting firm in the sandy shores of Goa',
    excerpt: 'Starting one of Goa\'s very first Due Diligence and Advisory Firm was not an easy task. However, the challenges ahead were no match for Ashutosh Kharangate. MARC has grown tremendously, with over 250 satisfied clients.',
    link: 'https://www.thefinancestory.com/7-questions-with-this-ca-who-started-his-own-due-dilignece-consulting-firm-in-goa/'
  },
  {
    date: 'Jan 20, 2021',
    source: 'The Finance Story',
    title: 'How this CA quit his Big 4 job & against all odds built a thriving due diligence firm in the sandy shores of Goa',
    excerpt: 'An inspiring journey of Ashutosh Kharangate who made a bold move to follow his passion. His sheer determination and perseverance for over the last decade led him to become an entrepreneur of a successful due diligence business in the coastal state of Goa.',
    link: 'https://www.thefinancestory.com/ca-starting-a-due-diligence-and-business-advisory-firm-in-goa/'
  },
  {
    date: 'Apr 09, 2019',
    source: 'The CEO Magazine',
    title: 'Ashutosh Kharangate: Advising Businesses To Reach The Apex Through MARC',
    excerpt: 'Progressing at a fast pace, the company has served more than 200 SMEs across the country, offering project reports/business plans and outsourced CFO services. MARC\'s clientele includes the Government of Goa, Planet Hollywood, Monginis, Magsons, and well-known five-star hotel brands.',
    link: 'https://theceo.in/magazines-in-india/year-2019/april-2019/fastest-growing-ceos/ashutosh-kharangate-advising-businesses-to-reach-the-apex-through-marc/'
  },
  {
    date: 'Mar 30, 2020',
    source: 'The Navhind Times',
    title: 'The COVID-19 adverse impact on the Goan economy',
    excerpt: 'The Goan economy is dependent on the tourism and hospitality industry after the shutdown of the mining industry. The coronavirus scare has affected tourism in Goa with crowds at its famed beaches thinning and hotels reporting cancellations.',
    link: 'https://www.navhindtimes.in/2020/03/30/magazines/bnc/the-covid-19-adverse-impact-on-goan-economy/'
  },
  {
    date: 'Feb 02, 2019',
    source: 'The Navhind Times',
    title: 'CII gives thumbs-up to budget',
    excerpt: 'Announcements such as no tax on the notional rent for the second self-occupied house and increasing the TDS limit on interest income will help in generating income for the poorer section of society.',
    link: 'https://www.navhindtimes.in/cii-gives-thumbs-up-to-budget/'
  },
  {
    date: 'Feb 26, 2018',
    source: 'oHeraldo',
    title: 'Our team will be 200 strong in 5 years: Kharangate',
    excerpt: 'We have learned our traits in a small market like Goa. Not a lot of data is available. Hence our work gets challenging. This has made us develop scientific tools for data capture and obtain data from primary sources, ensuring minimum variations.',
    link: 'https://www.heraldgoa.in/Business/In-Business/Our-team-will-be-200-strong-in-5-years-Kharangate/127390'
  },
  {
    date: 'Feb 16, 2018',
    source: 'The CEO Magazine',
    title: 'One Of The Fastest Growing Business Advisory Firms, MARC Is Committed To Delivering Excellence And Partnering Success',
    excerpt: 'MARC works with several international consultants and executes niche financial projects. The company has entered into an MOU with a Portugal-based giant, well established in Europe, Africa, and South America.',
    link: 'https://theceo.in/year-2017-html/one-of-the-fastest-growing-business-advisory-firms-marc-is-committed-to-delivering-excellence-and-partnering-success/'
  },
  {
    date: 'July 22, 2017',
    source: 'Entrepreneur India',
    title: '#4 Points Nascent Entrepreneurs Should Follow for Survival',
    excerpt: 'Understand the nature of your consumers and their capacity to pay. There is a difference between being rich and the capacity to pay. It may not be necessary that cities that offer good standards of living are home to a population willing to pay.',
    link: 'https://www.navhindtimes.in/cii-gives-thumbs-up-to-budget/'
  },
  {
    date: 'May 05, 2017',
    source: 'Consultants Review',
    title: 'Mangal Analytics and Research Consulting: Delivering Excellence, Partnering Success!',
    excerpt: 'The paperwork before taking a call on starting a new business is the first hurdle to be crossed by a prospective entrepreneur, says Ashutosh Kharangate. Understanding various licenses, registrations, permits, approvals, and NOCs is key.',
    link: 'https://www.navhindtimes.in/being-legal-while-starting-a-new-business/'
  },
  {
    date: 'Apr 17, 2017',
    source: 'The Navhind Times',
    title: 'Management Information Systems - Owner\'s Necessity',
    excerpt: 'Many times businessmen wait till the end of the year to realize that the net profit which they expected to generate has not really happened. Financial statements must be monitored proactively, not just for tax requirements.',
    link: 'https://www.navhindtimes.in/management-information-systems-owners-necessity/'
  },
  {
    date: 'Mar 13, 2017',
    source: 'The Navhind Times',
    title: 'Being legal while starting a new business',
    excerpt: 'Understanding the legal framework before starting a business is essential. Every entrepreneur must be aware of all necessary licenses, registrations, permits, approvals, and NOCs required for their specific industry.',
    link: 'https://www.navhindtimes.in/management-information-systems-owners-necessity/'
  },
]

const pressReleases = [
  {
    date: 'Nov 29, 2022',
    source: 'Business Goa / Outlook India',
    title: 'MARC celebrates 12 years of business with its flagship event \'Celebrating Entrepreneurship in Goa\'',
    excerpt: 'MARC celebrated its 12-year anniversary with its flagship event \'Celebrating Entrepreneurship in Goa\', honouring associates and industry leaders.',
    link: 'https://issuu.com/business_goa/docs/business_goa_november_2022/42'
  },
  {
    date: 'Jan 12, 2022',
    source: 'PR.com / Afaqs / Navhind Times',
    title: 'Anita Ganti joins the Board of Directors of MARC India',
    excerpt: 'Mangal Analytics and Research Consulting (MARC), a decade-old Market Research, Analytics, and Business Advisory Company appoints Ex-Wipro, Flex, and Texas Instruments executive Anita Ganti to its Board of Directors.',
    link: 'https://www.pr.com/press-release/852912'
  },
  {
    date: 'Aug 04, 2021',
    source: 'Business Standard / Outlook India / ANI / Business Wire / Flipboard',
    title: 'MARC Opens Its 8th Office In India On The Occasion Of Its 11th Anniversary',
    excerpt: 'MARC opens its latest office in Pune, offering a vast variety of professional and customized Analytical services to MSMEs across the country.',
    link: 'https://www.business-standard.com/content/press-releases-ani/marc-opens-its-8th-office-in-india-on-the-occasion-of-its-11th-anniversary-121080400986_1.html'
  },
  {
    date: 'Jun 25, 2020',
    source: 'oHeraldo',
    title: 'EFL ties up with MARC to set up a branch in Goa',
    excerpt: 'Electronica Finance Limited (EFL) has entered into a Memorandum of Understanding with Goa-based Mangal Analytics and Research Consulting (MARC) to provide services of a satellite office in Goa. MARC will actively source funding opportunities for EFL and do an evaluation of potential clients.',
    link: 'http://epaper.heraldgoa.in/articlepage.php?articleid=OHERALDO_GOA_20200625_8_4&width=203px&edition=oHeraldo&curpage=8'
  },
  {
    date: 'Jan 28, 2020',
    source: 'The Navhind Times',
    title: 'Mangal Analytics branches into IT consultancy',
    excerpt: 'Goan financial advisory company, Mangal Analytics and Research Consulting, branched into IT consultancy with the launch of TechPally, a new venture aimed at providing software consultation to local units.',
    link: 'https://www.navhindtimes.in/mangal-analytics-branches-into-it-consultancy/'
  },
  {
    date: 'Sep 01, 2018',
    source: 'Business Goa',
    title: 'MARC moves into its new corporate address',
    excerpt: 'Mangal Analytics And Research Consulting Private Limited (MARC) inaugurated its new office premises at 2nd Floor, CMM Building, Rua de Ourem, Panjim. The 200 square meter office houses the 30-strong team of MARC under one roof.',
    link: 'http://businessgoa.in/marc-moves-into-its-new-corporate-address/'
  }
]

const milestones = [
  { year: '2023', title: 'Top 10 Most Admired Companies', desc: 'Featured in The Economic Times for business excellence and innovation' },
  { year: '2022', title: '12 Years Anniversary', desc: 'Celebrated with flagship event "Celebrating Entrepreneurship in Goa"' },
  { year: '2022', title: 'Board Expansion', desc: 'Ex-Wipro, Flex & Texas Instruments executive Anita Ganti joins as Board Director' },
  { year: '2021', title: '8th Office Opening', desc: 'Expanded to Pune on 11th Anniversary offering MSME analytical services' },
  { year: '2020', title: 'TechPally Launch', desc: 'Branched into IT consultancy with software consultation services' },
  { year: '2020', title: 'EFL Partnership', desc: 'Electronica Finance Limited enters MOU with MARC for Goa satellite office' },
  { year: '2018', title: 'New Headquarters', desc: 'Moved to new corporate address at CMM Building, Rua de Ourem, Panjim, Goa' },
  { year: '2010', title: 'MARC Founded', desc: 'Started journey of delivering excellence and partnering success' }
]

const publications = [
  { name: 'The Economic Times' },
  { name: 'Your Story' },
  { name: 'Business Standard' },
  { name: 'Outlook India' },
  { name: 'Deccan Herald' },
  { name: 'Mid-Day' },
  { name: 'Daily Pioneer' },
  { name: 'Navhind Times' },
]

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState('news')
  const [isVisible, setIsVisible] = useState({})
  const [visibleMilestones, setVisibleMilestones] = useState([])
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setVisibleMilestones((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.3 }
    )

    document.querySelectorAll('[data-milestone-item]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white" data-testid="media-page">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#F7FFF5] overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4E9141]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C2DDB4]/20 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[3px] bg-[#4E9141]" />
                <span className="text-[#4E9141] font-bold text-lg uppercase tracking-[0.1em]">
                  Media & Press
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-[#1D342F] leading-[1.1] mb-6">
                In the news,
                <span className="text-[#4E9141]"> taking the spotlight</span>
              </h1>

              <p className="text-xl text-[#47635D] leading-relaxed mb-8">
                We are either brainstorming novel ways to execute strategies, or making headlines.
                MARC finds relevance in reaching out to the general public, either through our social
                outreach initiatives or simply because we are appreciated for our execution and insights.
                Stay abreast of our presence in the tabloids.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#coverage"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#4E9141] hover:bg-[#3d7334] text-white font-semibold rounded-full transition-all group"
                  data-testid="view-coverage-btn"
                >
                  View Coverage
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#milestones"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#4E9141] text-[#4E9141] font-semibold rounded-full hover:bg-[#4E9141] hover:text-white transition-all"
                  data-testid="milestones-btn"
                >
                  Our Journey
                </a>
              </div>
            </div>

            {/* Animated Carousel */}
            <div className="relative hidden lg:block">
              <MediaCarousel />
            </div>
          </div>
        </div>

        {/* Featured Publications */}
        <div className="max-w-7xl mx-auto px-6 mt-16">
          <div className="flex items-center gap-8 flex-wrap">
            <span className="text-[#47635D] text-sm uppercase tracking-wider font-medium">Featured In</span>
            {publications.map((pub, i) => (
              <div key={i} className="text-[#1D342F]/60 font-semibold text-sm hover:text-[#4E9141] transition-colors cursor-pointer">
                {pub.name}
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* News & Press Releases */}
      <section
        id="coverage"
        ref={el => observerRefs.current[1] = el}
        className="py-16 bg-[#F7FFF5]"
      >
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${isVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-[3px] bg-[#4E9141]" />
            <span className="text-[#4E9141] font-bold text-lg uppercase tracking-[0.1em]">
              Media Coverage
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D342F]">
              {activeTab === 'news' ? 'MARC in the News' : 'Press Releases'}
            </h2>

            <div className="flex p-1 bg-white rounded-full border border-[#C2DDB4]/30">
              <button
                onClick={() => setActiveTab('news')}
                className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all ${activeTab === 'news' ? 'bg-[#4E9141] text-white' : 'text-[#47635D] hover:text-[#1D342F]'}`}
                data-testid="news-tab"
              >
                <span className="flex items-center gap-2">
                  <Newspaper className="w-4 h-4" />
                  News
                </span>
              </button>
              <button
                onClick={() => setActiveTab('press')}
                className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all ${activeTab === 'press' ? 'bg-[#4E9141] text-white' : 'text-[#47635D] hover:text-[#1D342F]'}`}
                data-testid="press-tab"
              >
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Press Releases
                </span>
              </button>
            </div>
          </div>

          {/* Featured Article */}
          {activeTab === 'news' && newsArticles[0] && (
            <a
              href={newsArticles[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block mb-12 p-8 rounded-2xl bg-white border border-[#C2DDB4]/30 hover:border-[#4E9141]/50 hover:shadow-xl transition-all duration-300"
              data-testid="featured-article"
            >
              <div className="flex items-center gap-4 mb-4">
                <Award className="w-5 h-5 text-[#4E9141]" />
                <span className="text-sm font-medium text-[#4E9141]">Featured</span>
              </div>
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 text-sm text-[#47635D] mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{newsArticles[0].date}</span>
                    <span className="w-1 h-1 rounded-full bg-[#C2DDB4]" />
                    <span className="text-[#4E9141] font-medium">{newsArticles[0].source}</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#1D342F] group-hover:text-[#4E9141] transition-colors mb-4">
                    {newsArticles[0].title}
                  </h3>
                  <p className="text-[#47635D] leading-relaxed">{newsArticles[0].excerpt}</p>
                </div>
                <div className="flex items-center justify-center lg:justify-end">
                  <span className="inline-flex items-center gap-2 text-[#4E9141] font-semibold group-hover:gap-3 transition-all">
                    Read Article
                    <ExternalLink className="w-5 h-5" />
                  </span>
                </div>
              </div>
            </a>
          )}

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeTab === 'news' ? newsArticles.slice(1) : pressReleases).map((article, index) => (
              <a
                key={index}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col p-6 rounded-2xl bg-white border border-[#C2DDB4]/30 hover:border-[#4E9141]/50 hover:shadow-lg transition-all duration-300"
                data-testid={`article-${index}`}
              >
                <div className="flex items-center gap-2 text-xs text-[#47635D] mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{article.date}</span>
                </div>
                <div className="text-xs font-semibold text-[#4E9141] uppercase tracking-wider mb-2">
                  {article.source}
                </div>
                <h3 className="text-lg font-bold text-[#1D342F] group-hover:text-[#4E9141] transition-colors mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-[#47635D] leading-relaxed line-clamp-3 flex-grow">
                  {article.excerpt}
                </p>
                <div className="mt-4 pt-4 border-t border-[#C2DDB4]/30 flex items-center justify-between">
                  <span className="text-sm text-[#47635D]">Read more</span>
                  <ChevronRight className="w-4 h-4 text-[#4E9141] group-hover:translate-x-1 transition-all" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Milestones Journey Section */}
      <section
        id="milestones"
        ref={el => observerRefs.current[2] = el}
        className="py-20 bg-white overflow-hidden"
      >
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${isVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-[3px] bg-[#4E9141]" />
            <span className="text-[#4E9141] font-bold text-lg uppercase tracking-[0.1em]">
              Journey
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1D342F] mb-16">
            Milestones & Recognition
          </h2>

          <div className="relative">
            {/* Animated Path Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 overflow-hidden">
              <div
                className="w-full h-full bg-gradient-to-b from-[#4E9141] via-[#C2DDB4] to-[#4E9141]"
                style={{ animation: 'pathFlow 3s linear infinite' }}
              />
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#4E9141] shadow-lg shadow-[#4E9141]/50"
                style={{ animation: 'dotMove 4s ease-in-out infinite' }}
              />
            </div>

            <div className="space-y-8">
              {milestones.map((item, index) => (
                <div
                  key={index}
                  data-milestone-item
                  data-index={index}
                  className={`relative pl-20 transition-all duration-700 ${
                    visibleMilestones.includes(index)
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className={`absolute left-6 w-5 h-5 rounded-full border-4 border-white shadow-lg -translate-x-1/2 transition-all duration-500 ${
                    visibleMilestones.includes(index)
                      ? 'bg-[#4E9141] scale-110'
                      : 'bg-[#C2DDB4] scale-100'
                  }`}>
                    {visibleMilestones.includes(index) && (
                      <span className="absolute inset-0 rounded-full bg-[#4E9141] animate-ping opacity-30" />
                    )}
                  </div>

                  <div className="p-6 rounded-2xl bg-[#F7FFF5] border border-[#C2DDB4]/30 hover:border-[#4E9141]/50 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-2xl font-bold text-[#4E9141]">{item.year}</span>
                      <span className="w-8 h-[2px] bg-[#C2DDB4] group-hover:w-12 group-hover:bg-[#4E9141] transition-all" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1D342F] mb-2">{item.title}</h3>
                    <p className="text-[#47635D]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <style jsx>{`
              @keyframes pathFlow {
                0% { background-position: 0 0; }
                100% { background-position: 0 100px; }
              }
              @keyframes dotMove {
                0%, 100% { top: 0; opacity: 1; }
                50% { top: calc(100% - 12px); opacity: 0.5; }
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* Media Contacts */}
      <section
        ref={el => observerRefs.current[0] = el}
        className="py-16 bg-[#F7FFF5]"
      >
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${isVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-[3px] bg-[#4E9141]" />
            <span className="text-[#4E9141] font-bold text-lg uppercase tracking-[0.1em]">
              Get In Touch
            </span>
          </div>
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D342F] mb-4">Media Contacts</h2>
            <p className="text-[#47635D] leading-relaxed mb-6">
              Journalists, media houses, dailies, and publishers may use the contact information
              provided for inquiries and clarifications. Prior permission for the use of creative
              property, referencing the organisation and solicitation must be obtained beforehand.
            </p>
            <a
              href="mailto:contact@marcglocal.com"
              className="inline-flex items-center gap-2 text-[#4E9141] font-semibold text-lg hover:gap-3 transition-all"
              data-testid="media-contact-link"
            >
              <Mail className="w-5 h-5" />
              contact@marcglocal.com
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#4E9141]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Let us help you solve your toughest challenges and realize your greatest ambitions.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#4E9141] font-semibold rounded-full hover:bg-[#C2DDB4] transition-all group"
              data-testid="cta-consultation-btn"
            >
              Schedule a Free Consulting
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/insights"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all"
            >
              Explore Our Insights
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}