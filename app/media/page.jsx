import MediaClient from './MediaClient'

export const metadata = {
  title: 'Media & Press | MARC Glocal',
  description:
    'MARC Glocal in the news — press coverage, media mentions, and public commentary from our consulting and advisory practice.',
  alternates: { canonical: 'https://marcglocal.com/media' },
  openGraph: {
    title: 'Media & Press | MARC Glocal',
    description: 'MARC Glocal in the news — press coverage, media mentions, and public commentary.',
    url: 'https://marcglocal.com/media',
  },
}

export default function Page() {
  return <MediaClient />
}
