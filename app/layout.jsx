import './globals.css'
import Script from 'next/script'
import { Poppins } from 'next/font/google'
import RouteLoader from '@/components/RouteLoader'
import Header from '@/components/Header'
import WhatsAppButton from '@/components/WhatsAppButton'
import ChatbotWidget from '@/components/ChatbotWidget'
import CookieConsentBanner from '@/components/CookieConsentBanner'
import LeadCapturePopup from '@/components/LeadCapturePopup'
import AttributionTracker from '@/components/AttributionTracker'
import { LoadingProvider } from '@/components/loading-store'
import { GoogleAnalytics } from '@next/third-parties/google'


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
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://marcglocal.com',
    title: 'MARC Glocal - Business Consulting',
    description: 'Leading strategy consultancy helping organizations achieve competitive advantage.',
    siteName: 'MARC Glocal',
    // TODO: swap for a proper 1200x630 OG image — the logo is a stopgap so link
    // previews aren't blank, but a designed OG image will perform much better on socials.
    images: [{ url: '/marc_logo.png', width: 512, height: 512, alt: 'MARC Glocal' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MARC Glocal',
    description: 'Business Consulting & Strategy',
    images: ['/marc_logo.png'],
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'MARC Glocal',
  url: 'https://marcglocal.com',
  logo: 'https://marcglocal.com/marc_logo.png',
  description: 'Leading strategy consultancy helping organizations achieve competitive advantage.',
  sameAs: [],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'MARC Glocal',
  url: 'https://marcglocal.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://marcglocal.com/blog?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
    <body className="antialiased font-sans">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      {/* Google Consent Mode v2 — must be set BEFORE gtag.js loads, so it starts
          every visit fully denied until CookieConsentBanner tells it otherwise. */}
      <Script id="consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'wait_for_update': 500
          });
        `}
      </Script>
      <GoogleAnalytics gaId="G-Z54096J7T3" />
      <Script id="gtag-phone-conversion" strategy="afterInteractive">
        {`
          gtag('config', 'AW-928957158/CFbwCOnJubccEOaF-7oD', {
            'phone_conversion_number': '+91 93596 28675'
          });
        `}
      </Script>
      {/* Meta Pixel — only loads if NEXT_PUBLIC_META_PIXEL_ID is set (create
          one at business.facebook.com/events_manager before running Meta/
          Instagram retargeting). Starts consent-revoked, same pattern as
          Google Consent Mode above — CookieConsentBanner grants it once the
          visitor accepts. See lib/consent.js. */}
      {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
            fbq('consent', 'revoke');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
      <AttributionTracker />
      <LoadingProvider>
        <RouteLoader />
        <Header />
        {children}
        <WhatsAppButton phoneNumber="919876543210" />
        <ChatbotWidget />
        <LeadCapturePopup />
        <CookieConsentBanner />
      </LoadingProvider>
    </body>
    </html>
    )
}