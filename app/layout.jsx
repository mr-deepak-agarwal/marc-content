import './globals.css'
import { Poppins } from 'next/font/google'
import RouteLoader from '@/components/RouteLoader'
import Header from '@/components/Header'
import WhatsAppButton from '@/components/WhatsAppButton'
import { LoadingProvider } from '@/components/loading-store'

const poppins = Poppins({ 
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://marcglocal.com'),
  title: {
    default: 'MARC Glocal - Business Consulting & Strategy',
    template: '%s | MARC Glocal'
  },
  description: 'Leading strategy consultancy helping organizations achieve competitive advantage.',
  keywords: ['business consulting', 'strategy', 'M&A', 'financial advisory', 'due diligence'],
  authors: [{ name: 'MARC Glocal' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://marcglocal.com',
    title: 'MARC Glocal - Business Consulting',
    description: 'Leading strategy consultancy helping organizations achieve competitive advantage.',
    siteName: 'MARC Glocal',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MARC Glocal',
    description: 'Business Consulting & Strategy',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
    <body className="antialiased font-sans">
      <LoadingProvider>
          <RouteLoader />
          <Header />
          {children}
          <WhatsAppButton phoneNumber="919876543210" />
          <ChatbotWidget />
        </LoadingProvider>
    </body>
    </html>
    )
}