import Link from 'next/link';
import { generateMetadata, generateStructuredData } from '../lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = generateMetadata({
  title: 'Testimonials',
  description:
    'Read success stories from our clients who have successfully obtained their visas through OnboardVisa. Real testimonials from innovators, founders, and global talent.',
  path: '/testimonials',
  keywords: [
    'visa success stories',
    'immigration testimonials',
    'client reviews',
    'visa application success',
    'immigration service reviews',
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
        name: 'Testimonials',
        item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://onboardvisa.com'}/testimonials`,
      },
    ],
  },
});

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Tech Entrepreneur',
    location: 'San Francisco, CA',
    quote:
      'OnboardVisa made the entire Innovator Founder Visa process seamless. Their expert guidance helped me navigate the complex requirements and I successfully obtained my visa. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Michael Rodriguez',
    role: 'Research Scientist',
    location: 'London, UK',
    quote:
      'As a researcher, I needed help with the Global Talent Visa application. The team at OnboardVisa provided exceptional support throughout the process. Their attention to detail and expertise were invaluable.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Digital Artist',
    location: 'Mumbai, India',
    quote:
      'The Global Talent Visa application seemed overwhelming at first, but OnboardVisa broke it down into manageable steps. Their team was always available to answer questions and provide guidance.',
    rating: 5,
  },
  {
    name: 'David Kim',
    role: 'Startup Founder',
    location: 'Seoul, South Korea',
    quote:
      'I was impressed by the professionalism and expertise of the OnboardVisa team. They helped me prepare a strong business plan and successfully obtain my Innovator Founder Visa. Thank you!',
    rating: 5,
  },
  {
    name: 'Emma Thompson',
    role: 'Software Engineer',
    location: 'Toronto, Canada',
    quote:
      'OnboardVisa provided excellent support for my Global Talent Visa application. The process was smooth, and the team was always responsive and helpful. I couldn\'t have done it without them.',
    rating: 5,
  },
  {
    name: 'Ahmed Hassan',
    role: 'Innovation Consultant',
    location: 'Dubai, UAE',
    quote:
      'The team at OnboardVisa truly understands the visa application process. Their expertise and personalized approach made all the difference. I highly recommend their services to anyone looking to relocate.',
    rating: 5,
  },
];

export default function TestimonialsPage() {
  const reviewStructuredData = generateStructuredData({
    type: 'Service',
    data: {
      '@type': 'Service',
      name: 'OnboardVisa Visa Services',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: testimonials.length.toString(),
      },
      review: testimonials.map((testimonial) => ({
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: testimonial.name,
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: testimonial.rating.toString(),
        },
        reviewBody: testimonial.quote,
      })),
    },
  });

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
          __html: JSON.stringify(reviewStructuredData),
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
                  Testimonials
                </li>
              </ol>
            </nav>
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
                Client Testimonials
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Read success stories from our clients who have successfully
                obtained their visas through OnboardVisa. Our team is committed
                to helping innovators, founders, and global talent achieve their
                relocation goals.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-24 sm:py-32 bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <article
                  key={index}
                  className="flex flex-col rounded-lg bg-gray-50 p-6 dark:bg-gray-800"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.651l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="flex-1">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </blockquote>
                  <footer className="mt-auto">
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-500">
                      {testimonial.location}
                    </div>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 dark:bg-blue-700">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to Start Your Journey?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
                Join our successful clients and take the first step towards your
                global opportunities.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/innovator-founder-visa"
                  className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  href="/blog"
                  className="text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors"
                >
                  Read Our Blog <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

