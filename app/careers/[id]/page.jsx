import { jobDetails } from '@/data/careersData'
import JobDetailClient from './JobDetailClient'

const BASE_URL = 'https://marcglocal.com'

export function generateStaticParams() {
  return Object.keys(jobDetails).map((id) => ({ id }))
}

export function generateMetadata({ params }) {
  const job = jobDetails[params.id]

  if (!job) {
    return {
      title: 'Job Not Found | MARC Glocal Careers',
      robots: { index: false, follow: true },
    }
  }

  const title = `${job.title} — ${job.location} | MARC Glocal Careers`
  const description = job.overview?.slice(0, 155) || `${job.title} role at MARC Glocal, ${job.location}. ${job.type}, ${job.experience} experience.`

  return {
    title,
    description,
    alternates: { canonical: `${BASE_URL}/careers/${params.id}` },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/careers/${params.id}`,
      type: 'website',
    },
  }
}

function JobPostingSchema({ job, jobId }) {
  if (!job) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.overview,
    identifier: {
      '@type': 'PropertyValue',
      name: 'MARC Glocal',
      value: jobId,
    },
    datePosted: job.posted,
    validThrough: job.deadline,
    employmentType: job.type?.toUpperCase().includes('FULL') ? 'FULL_TIME' : job.type,
    hiringOrganization: {
      '@type': 'Organization',
      name: 'MARC Glocal',
      sameAs: BASE_URL,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.location,
        addressCountry: 'IN',
      },
    },
    experienceRequirements: job.experience,
    baseSalary: job.salary
      ? {
          '@type': 'MonetaryAmount',
          currency: 'INR',
          value: { '@type': 'QuantitativeValue', value: job.salary },
        }
      : undefined,
  }

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function JobDetailPage({ params }) {
  const job = jobDetails[params.id]
  return (
    <>
      <JobPostingSchema job={job} jobId={params.id} />
      <JobDetailClient jobId={params.id} />
    </>
  )
}
