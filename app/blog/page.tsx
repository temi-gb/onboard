import Link from 'next/link';
import Image from 'next/image';
import { generateMetadata, generateStructuredData } from '../lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = generateMetadata({
  title: 'The UK Innovator Founder Visa and Global Talent Visa Digest - Blog',
  description:
    'Stay informed with the latest updates, insights, and important changes about the UK Innovator Founder Visa and Global Talent Visa to navigate your journey with confidence.',
  path: '/blog',
  keywords: [
    'visa blog',
    'immigration articles',
    'visa application tips',
    'immigration news',
    'visa guide',
    'immigration advice',
    'Global Talent Visa',
  ],
});


const blogPosts = [
  {
    slug: 'choose-right-global-talent-visa-endorsement-body',
    title: 'How to Choose the Right Global Talent Visa Endorsement Body for Your Visa Application',
    date: '2024-05-07',
    readTime: '3 Mins Read',
    image: '/blog-1.jpg', // Placeholder - replace with actual image
  },
  {
    slug: 'mistakes-avoid-global-talent-visa',
    title: 'Mistakes to Avoid When Applying for the Global Talent Visa',
    date: '2025-05-07',
    readTime: '3 Mins Read',
    image: '/blog-2.jpg', // Placeholder - replace with actual image
  },
  {
    slug: 'global-talent-visa-moving-with-family',
    title: 'Global Talent Visa: Moving with Your Family',
    date: '2025-03-28',
    readTime: '3 Mins Read',
    image: '/blog-3.jpg', // Placeholder - replace with actual image
  },
  {
    slug: 'essential-tips-successful-uk-global-talent-visa',
    title: 'Essential Tips for a Successful UK Global Talent Visa Application',
    date: '2025-03-10',
    readTime: '3 Mins Read',
    image: '/blog-4.jpg', // Placeholder - replace with actual image
  },
  {
    slug: '5-reasons-consider-uk-global-talent-visa',
    title: '5 Reasons to Consider the UK Global Talent Visa',
    date: '2025-01-30',
    readTime: '3 Mins Read',
    image: '/blog-5.jpg', // Placeholder - replace with actual image
  },
  {
    slug: 'all-you-should-know-global-talent-visa',
    title: 'All You Should Know About the Global Talent Visa',
    date: '2025-01-25',
    readTime: '3 Mins Read',
    image: '/blog-6.jpg', // Placeholder - replace with actual image
  },
];

export default function BlogPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://onboardvisa.com';
  
  // Blog Collection Structured Data
  const blogCollectionStructuredData = generateStructuredData({
    type: 'WebSite',
    data: {
      '@type': 'CollectionPage',
      name: 'The UK Innovator Founder Visa and Global Talent Visa Digest',
      description:
        'Stay informed with the latest updates, insights, and important changes about the UK Innovator Founder Visa and Global Talent Visa to navigate your journey with confidence.',
      url: `${siteUrl}/blog`,
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: blogPosts.length,
        itemListElement: blogPosts.map((post, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'BlogPosting',
            headline: post.title,
            datePublished: post.date,
            dateModified: post.date,
            author: {
              '@type': 'Organization',
              name: 'OnboardVisa',
              url: siteUrl,
            },
            publisher: {
              '@type': 'Organization',
              name: 'OnboardVisa',
              url: siteUrl,
            },
            image: `${siteUrl}${post.image}`,
            url: `${siteUrl}/blog/${post.slug}`,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `${siteUrl}/blog/${post.slug}`,
            },
          },
        })),
      },
    },
  });

  // Breadcrumb Structured Data
  const breadcrumbStructuredData = generateStructuredData({
    type: 'BreadcrumbList',
    data: {
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: siteUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: `${siteUrl}/blog`,
        },
      ],
    },
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogCollectionStructuredData),
        }}
      />
      <div className="bg-gray-50 min-h-screen">
        {/* Header Section */}
        <section className="pt-20 pb-12">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="text-center">
              {/* Blog Tag */}
              <div className="inline-block mb-6">
                <span
                  className="px-6 py-2 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: '#E5E7EB',
                    color: '#000',
                  }}
                >
                  OnboardVisa Blog
                </span>
              </div>

              {/* Main Title */}
              <h1
                className="text-5xl lg:text-6xl font-bold mb-6"
                style={{
                  fontFamily: 'Ivyprestoheadline, Georgia, sans-serif',
                  color: '#090909',
                  fontWeight: 500,
                }}
              >
                The UK Innovator Founder Visa and{' '}
                <span className="block">Global Talent Visa Digest</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Stay informed with the latest updates, insights, and important changes about the UK Innovator Founder Visa and Global Talent Visa to navigate your journey with confidence.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <article className="bg-white rounded-xl shadow-sm overflow-hidden transition-shadow hover:shadow-lg h-full flex flex-col">
                    {/* Image Container */}
                    <div className="relative w-full h-64 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        style={{ borderRadius: '12px 12px 0 0' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={false}
                      />
                      {/* Read Time Tag Overlay */}
                      <div className="absolute top-4 right-4">
                        <span
                          className="px-3 py-1 rounded-lg text-xs font-medium text-white"
                          style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            backdropFilter: 'blur(4px)',
                          }}
                        >
                          {post.readTime}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h2 className="text-xl font-bold text-[#090909] mb-4 group-hover:text-gray-700 transition-colors line-clamp-3">
                        <Link href={`/blog/${post.slug}`} className="hover:underline">
                          {post.title}
                        </Link>
                      </h2>
                      <time
                        dateTime={post.date}
                        className="text-sm text-gray-500 mt-auto"
                        itemProp="datePublished"
                      >
                        {formatDate(post.date)}
                      </time>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner Section */}
        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div
              className="rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6"
              style={{ backgroundColor: '#000' }}
            >
              {/* Text Content */}
              <div className="flex-1">
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                  <span style={{ color: '#e6ff32' }}>Amplify</span>{' '}
                  <span style={{ color: '#fff' }}>your credibility,</span>
                  <br />
                  <span style={{ color: '#fff' }}>get featured in top publications</span>
                </h2>
              </div>

              {/* Buttons - Horizontal Row */}
              <div className="flex flex-row gap-4">
                <Link
                  href="#how-it-works"
                  className="px-6 py-3 text-white font-medium transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#333', borderRadius: '50px' }}
                >
                  How It Works
                </Link>
                <Link
                  href="#faq"
                  className="px-6 py-3 text-white font-medium transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#3b82f6', borderRadius: '50px' }}
                >
                  FAQ
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
