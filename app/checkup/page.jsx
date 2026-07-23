import CheckupClient from './CheckupClient'

export const metadata = {
  title: 'Free Business Health Checkup | MARC Glocal',
  description:
    'A free, AI-powered business health checkup for MSMEs — answer a few questions and get an instant read on where your business stands.',
  alternates: { canonical: 'https://marcglocal.com/checkup' },
  openGraph: {
    title: 'Free Business Health Checkup | MARC Glocal',
    description:
      'A free, AI-powered business health checkup for MSMEs — answer a few questions and get an instant read on where your business stands.',
    url: 'https://marcglocal.com/checkup',
  },
}

export default function Page() {
  return <CheckupClient />
}
