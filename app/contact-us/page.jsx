import ContactUsClient from './ContactUsClient'

export const metadata = {
  title: 'Contact MARC Glocal | Talk to a Consultant',
  description:
    'Get in touch with MARC Glocal for business consulting, valuation, due diligence, M&A advisory and market research. Based in India, working with clients globally.',
  alternates: { canonical: 'https://marcglocal.com/contact-us' },
  openGraph: {
    title: 'Contact MARC Glocal | Talk to a Consultant',
    description:
      'Get in touch with MARC Glocal for business consulting, valuation, due diligence, M&A advisory and market research.',
    url: 'https://marcglocal.com/contact-us',
  },
}

export default function Page() {
  return <ContactUsClient />
}
