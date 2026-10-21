import LegalPage from '@/components/LegalPage'

export const metadata = {
  title: 'Terms of Use',
  description: 'Terms for using the MARC Glocal website.',
  alternates: { canonical: 'https://marcglocal.com/terms' },
}

// DRAFT — have the client's legal advisor review before relying on it.
const sections = [
  { title: '1. Acceptance', body: ['By using marcglocal.com you agree to these terms. If you do not agree, please do not use the site.'] },
  { title: '2. General information only', body: ['Content on this website, including blogs, reports and tools, is general information. It is not legal, tax, investment or financial advice. Engagements with MARC are governed by a separate written agreement.'] },
  { title: '3. Intellectual property', body: ['All content, logos, reports and designs belong to MARC or its licensors. You may view and share pages for personal or internal business use with credit, but may not copy, resell or republish them without written permission.'] },
  { title: '4. Acceptable use', body: [{ list: [
    'Do not submit false, misleading or spam enquiries.',
    'Do not attempt to disrupt, scan or gain unauthorised access to the site.',
    'Do not use automated tools to scrape or overload the site.',
  ] }] },
  { title: '5. Third-party links', body: ['The site may link to other websites. We are not responsible for their content or practices.'] },
  { title: '6. No warranty and liability', body: ['The site is provided "as is". To the extent permitted by law, MARC is not liable for losses arising from use of the site or reliance on its content.'] },
  { title: '7. Governing law', body: ['These terms are governed by the laws of India. Courts at Panaji, Goa have jurisdiction, subject to any mandatory rights you have under local law.'] },
  { title: '8. Contact', body: ['Questions: contact@marcglocal.com.'] },
]

export default function TermsPage() {
  return <LegalPage title="Terms of Use" updated="11 October 2026" sections={sections} />
}
