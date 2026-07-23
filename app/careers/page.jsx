import CareersClient from './CareersClient'

export const metadata = {
  title: 'Careers at MARC Glocal | Open Roles',
  description:
    'Explore open roles at MARC Glocal across consulting, research, and business development. Build your career with a growing India-based advisory firm.',
  alternates: { canonical: 'https://marcglocal.com/careers' },
  openGraph: {
    title: 'Careers at MARC Glocal | Open Roles',
    description:
      'Explore open roles at MARC Glocal across consulting, research, and business development.',
    url: 'https://marcglocal.com/careers',
  },
}

export default function Page() {
  return <CareersClient />
}
