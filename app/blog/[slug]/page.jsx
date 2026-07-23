import { blogs } from '@/data/blogData'
import BlogDetailClient from './BlogDetailClient'

const BASE_URL = 'https://marcglocal.com'

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }) {
  const post = blogs.find((b) => b.slug === params.slug)

  if (!post) {
    return {
      title: 'Article Not Found | MARC Glocal',
      robots: { index: false, follow: true },
    }
  }

  const title = post.seo?.title || post.title
  const description = post.seo?.description || post.excerpt?.slice(0, 160)

  return {
    title,
    description,
    alternates: { canonical: `${BASE_URL}/blog/${post.slug}` },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/blog/${post.slug}`,
      type: 'article',
      images: post.image ? [{ url: post.image }] : undefined,
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: post.image ? [post.image] : undefined,
    },
  }
}

function ArticleSchema({ post }) {
  if (!post) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.seo?.description || post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author || 'MARC Research Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'MARC Glocal',
      url: BASE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${post.slug}`,
    },
    keywords: post.tags?.join(', '),
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${BASE_URL}/blog/${post.slug}` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  )
}

export default function BlogDetailPage({ params }) {
  const post = blogs.find((b) => b.slug === params.slug)
  return (
    <>
      <ArticleSchema post={post} />
      <BlogDetailClient slug={params.slug} />
    </>
  )
}
