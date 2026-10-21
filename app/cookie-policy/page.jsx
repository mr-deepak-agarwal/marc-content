import LegalPage from '@/components/LegalPage'
import CookieSettingsLink from '@/components/CookieSettingsLink'

export const metadata = {
  title: 'Cookie Policy',
  description: 'The cookies marcglocal.com uses and how to change your choice.',
  alternates: { canonical: 'https://marcglocal.com/cookie-policy' },
}

// DRAFT — have the client's legal advisor review before relying on it.
const sections = [
  { title: '1. What cookies are', body: ['Cookies are small files stored on your device. We also use similar browser storage to remember your choices and campaign source.'] },
  { title: '2. What we use', body: [{ list: [
    'Essential: remember your cookie choice (marc_consent, 12 months) and keep the site secure and working, including Cloudflare Turnstile spam protection.',
    'Campaign source (browser storage, up to 90 days): remembers the UTM tags and advertising click ID of the page you arrived from, so we can tell which campaign led to an enquiry.',
    'Analytics (Google Analytics): counts visits and shows how pages are used.',
    'Advertising (Google Ads, Meta pixel if enabled): measures ad results. Ad personalisation and the Meta pixel stay off until you click Accept All.',
  ] }] },
  { title: '3. Your choice by region', body: [
    'If you are in the UK, European Economic Area or Switzerland, analytics and advertising cookies stay off until you click "Accept All".',
    'In other regions, basic analytics and ad measurement run by default so we can count visits, while ad personalisation stays off until you accept. In every region you can click "Reject Non-Essential" to switch analytics and advertising off.',
  ] },
  { title: '4. Change or withdraw your choice', body: ['You can change your choice at any time using the button below.'] },
  { title: '5. Browser controls', body: ['You can also block or delete cookies in your browser settings. Some parts of the site may not work properly if you block essential cookies.'] },
  { title: '6. More information', body: ['See our Privacy Policy, or email contact@marcglocal.com.'] },
]

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      updated="11 October 2026"
      sections={sections}
      after={
        <CookieSettingsLink className="px-5 py-2.5 rounded-full text-sm font-semibold bg-[#4E9141] text-white hover:bg-[#3e7433] transition-colors" />
      }
    />
  )
}
