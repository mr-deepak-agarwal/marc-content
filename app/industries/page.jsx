import IndustriesClient from './IndustriesClient'

export const metadata = {
  title: 'Industries We Serve | MARC Glocal',
  description:
    'MARC Glocal brings deep sector expertise across manufacturing, healthcare, hospitality, retail, and more — tailored consulting for each industry we serve.',
  alternates: { canonical: 'https://marcglocal.com/industries' },
  openGraph: {
    title: 'Industries We Serve | MARC Glocal',
    description:
      'MARC Glocal brings deep sector expertise across manufacturing, healthcare, hospitality, retail, and more.',
    url: 'https://marcglocal.com/industries',
  },
}

export default function Page() {
  return <IndustriesClient />
}
