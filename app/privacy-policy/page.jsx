import LegalPage from '@/components/LegalPage'

export const metadata = {
  title: 'Privacy Policy',
  description: 'How MARC Glocal collects, uses and protects personal information on marcglocal.com.',
  alternates: { canonical: 'https://marcglocal.com/privacy-policy' },
}

// DRAFT — have the client's legal advisor review before relying on it.
const sections = [
  {
    title: '1. Who we are',
    body: [
      'This website is operated by Mangal Analytics and Research Consulting (MARC), Office No 202, Second Floor, CMM Building, Rua De Ourem, Panaji, Goa 403001, India ("MARC Glocal", "we", "us"). You can reach us at contact@marcglocal.com.',
    ],
  },
  {
    title: '2. Information we collect',
    body: [
      { list: [
        'Details you give us: name, email, phone number, company, and the message or answers you submit through our contact forms, chatbot, pop-ups, report downloads, business check-up and scorecard.',
        'Marketing source details: the page you came from, UTM tags and advertising click IDs (for example Google Ads "gclid"), stored in your browser for up to 90 days so we know which campaign led to your enquiry.',
        'Usage data: pages visited, device, browser and approximate location, collected through Google Analytics and Google Ads when permitted by your cookie choice and local law.',
        'Technical data: IP address and security signals used to stop spam and abuse (including Cloudflare Turnstile).',
      ] },
    ],
  },
  {
    title: '3. How we use it',
    body: [
      { list: [
        'To respond to your enquiry and provide our services.',
        'To send reports or resources you ask for.',
        'To measure and improve our website and advertising.',
        'To keep the website secure and prevent spam.',
        'To meet legal obligations.',
      ] },
      'We do not sell your personal information.',
    ],
  },
  {
    title: '4. Legal basis',
    body: [
      'Where required (for example in the UK and European Economic Area) we rely on your consent for non-essential cookies and analytics, and on our legitimate interest in responding to enquiries and securing the site. In India we process your data with your consent and for the purposes you submit it for, in line with the Digital Personal Data Protection Act, 2023.',
    ],
  },
  {
    title: '5. Who we share it with',
    body: [
      'We use trusted service providers to run the website. They process data on our behalf:',
      { list: [
        'Supabase (database and storage of enquiries)',
        'Vercel (website hosting)',
        'Google (Analytics and Ads)',
        'Meta (advertising pixel, only if you accept cookies)',
        'Cloudflare (spam protection)',
        'Email and messaging providers used to reply to you',
      ] },
      'Some of these providers are located outside India, so your information may be transferred internationally.',
    ],
  },
  {
    title: '6. Cookies',
    body: [
      'See our Cookie Policy for the cookies we use and how to change your choice at any time.',
    ],
  },
  {
    title: '7. How long we keep it',
    body: [
      'We keep enquiry details for as long as needed to respond and for our legitimate business records, and delete or anonymise them when no longer needed. Advertising click IDs in your browser expire after 90 days.',
    ],
  },
  {
    title: '8. Your rights',
    body: [
      'Depending on where you live, you may ask to access, correct, delete or export your information, withdraw consent, or object to certain uses. Email contact@marcglocal.com and we will respond within a reasonable time (within 30 days). You may also complain to your local data protection authority.',
    ],
  },
  {
    title: '9. Security',
    body: [
      'We use encrypted connections, access controls and spam protection. No online service is completely secure, but we take reasonable steps to protect your information.',
    ],
  },
  {
    title: '10. Children',
    body: ['This website is not directed at children and we do not knowingly collect their information.'],
  },
  {
    title: '11. Changes',
    body: ['We may update this policy. The date at the top shows the latest version.'],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="11 October 2026"
      intro="This policy explains what personal information we collect on marcglocal.com, why, and the choices you have."
      sections={sections}
    />
  )
}
