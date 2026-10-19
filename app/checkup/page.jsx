import CheckupClient from './CheckupClient'

export const metadata = {
  title: 'Free Business Health Checkup | MARC Glocal',
  description:
    'A free, AI-powered business health checkup for MSMEs — answer a few questions and get an instant read on where your business stands.',
  alternates: { canonical: 'https://www.marcglocal.com/checkup' },
  openGraph: {
    title: 'Free Business Health Checkup | MARC Glocal',
    description:
      'A free, AI-powered business health checkup for MSMEs — answer a few questions and get an instant read on where your business stands.',
    url: 'https://www.marcglocal.com/checkup',
  },
}

export default function Page() {
  return <CheckupClient />
}
