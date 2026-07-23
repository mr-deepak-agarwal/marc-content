import ApplyClient from './ApplyClient'

export const metadata = {
  title: 'Apply | MARC Glocal Careers',
  description: 'Submit your application for an open role at MARC Glocal.',
  robots: { index: false, follow: true },
}

export default function Page() {
  return <ApplyClient />
}
