import Link from 'next/link';
import { generateMetadata, generateStructuredData } from '../lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = generateMetadata({
  title: 'Innovator Founder Visa',
  description:
    'Apply for the Innovator Founder Visa with expert guidance. Fast-track your startup journey and establish your innovative business in a new country. Professional visa application support.',
  path: '/innovator-founder-visa',
  keywords: [
    'innovator founder visa',
    'startup visa',
    'entrepreneur visa',
    'business visa',
    'innovator visa application',
    'founder visa requirements',
  ],
});

const breadcrumbStructuredData = generateStructuredData({
  type: 'BreadcrumbList',
  data: {
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: process.env.NEXT_PUBLIC_SITE_URL || 'https://onboardvisa.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Innovator Founder Visa',
        item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://onboardvisa.com'}/innovator-founder-visa`,
      },
    ],
  },
});

const serviceStructuredData = generateStructuredData({
  type: 'Service',
  data: {
    serviceType: 'Innovator Founder Visa Application Service',
    provider: {
      '@type': 'Organization',
      name: 'OnboardVisa',
    },
    description:
      'Expert guidance and support for Innovator Founder Visa applications. Help innovative entrepreneurs establish their business in a new country.',
    areaServed: 'Worldwide',
  },
});

export default function InnovatorFounderPage() {
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
          __html: JSON.stringify(serviceStructuredData),
        }}
      />
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  <Link
                    href="/"
                    className="hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <span className="mx-2">/</span>
                </li>
                <li className="text-gray-900 dark:text-white" aria-current="page">
                  Innovator Founder Visa
                </li>
              </ol>
            </nav>
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
                Innovator Founder Visa
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Designed for innovative entrepreneurs looking to establish their
                business in a new country. The Innovator Founder Visa provides a
                pathway for talented founders to build and grow their innovative
                ventures with expert support.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-24 sm:py-32 bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  What is the Innovator Founder Visa?
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  The Innovator Founder Visa is designed for experienced business
                  people who want to set up an innovative business in a new
                  country. This visa category is perfect for entrepreneurs who
                  have a genuine, original business idea that meets new or
                  existing market needs and creates a competitive advantage.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-12">
                  Key Requirements
                </h2>
                <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-300 mb-6">
                  <li>
                    You must have an innovative, viable, and scalable business
                    idea
                  </li>
                  <li>
                    Your business idea must be endorsed by an approved endorsing
                    body
                  </li>
                  <li>
                    You must meet the English language requirement
                  </li>
                  <li>
                    You must have sufficient funds to support yourself and your
                    business
                  </li>
                  <li>
                    You must be at least 18 years old
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-12">
                  Benefits of the Innovator Founder Visa
                </h2>
                <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-300 mb-6">
                  <li>
                    Opportunity to establish and run your innovative business
                  </li>
                  <li>
                    Pathway to settlement after meeting certain conditions
                  </li>
                  <li>
                    Ability to bring family members as dependents
                  </li>
                  <li>
                    Access to business support and networking opportunities
                  </li>
                  <li>
                    Flexibility to work on your business full-time
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-12">
                  How We Can Help
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Our expert team provides comprehensive support throughout your
                  Innovator Founder Visa application process. We help you:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-300 mb-6">
                  <li>
                    Understand the eligibility requirements and prepare your
                    application
                  </li>
                  <li>
                    Develop a strong business plan that meets endorsement
                    criteria
                  </li>
                  <li>
                    Connect with approved endorsing bodies
                  </li>
                  <li>
                    Prepare all required documentation
                  </li>
                  <li>
                    Navigate the application process with confidence
                  </li>
                </ul>
              </div>

              <div className="mt-12 flex gap-4">
                <Link
                  href="/testimonials"
                  className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
                >
                  View Success Stories
                </Link>
                <Link
                  href="/blog"
                  className="rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-colors"
                >
                  Read Our Blog
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

