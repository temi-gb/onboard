import Link from 'next/link';
import Image from 'next/image';
import { generateMetadata, generateStructuredData } from './lib/seo';
import type { Metadata } from 'next';
import FAQ from './components/FAQ';
import TestimonialsSection from './components/TestimonialsSection';
import HowItWorksSection from './components/HowItWorksSection';
import HeroSection from './components/HeroSection';
import BookSessionButton from './components/BookSessionButton';
import PartnershipFeatures from './components/PartnershipFeatures';
import AnimatedServicesSection from './components/AnimatedServicesSection';

export const metadata: Metadata = generateMetadata({
  title: 'Home',
  description:
    'Expert visa and immigration services for innovators, founders, and global talent. Navigate international relocation with confidence through our professional guidance.',
  path: '/',
  keywords: [
    'visa services',
    'immigration services',
    'innovator founder visa',
    'global talent visa',
    'visa application help',
    'international relocation',
  ],
});

const serviceStructuredData = generateStructuredData({
  type: 'Service',
  data: {
    serviceType: 'Visa and Immigration Services',
    provider: {
      '@type': 'Organization',
      name: 'OnboardVisa',
    },
    areaServed: 'Worldwide',
    description:
      'Professional visa and immigration services for innovators, founders, and global talent.',
  },
});

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceStructuredData),
        }}
      />
      <div className="flex flex-col bg-white">
        {/* Hero Section - Split Layout */}
        <HeroSection />

        {/* Products Section */}
        <AnimatedServicesSection />

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Partnership Services Section */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            {/* Top Section - Text Content */}
            <div className="text-center mb-16">
              <p className="text-sm font-medium mb-4" style={{ color: '#3b82f6' }}>
                Partnership services
              </p>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
                style={{
                  fontFamily: 'Ivyprestoheadline, Georgia, sans-serif',
                  color: '#090909',
                  fontWeight: 500,
                }}
              >
                Lets build endorsement-ready visa cases together
              </h2>
              <p className="text-lg text-[#171717] max-w-3xl mx-auto">
                Visa rules change, expectations shift, and endorsing bodies look for clarity — not effort.
                <br />
                We work alongside founders and professionals to refine positioning, strengthen evidence, and prepare applications built for approval.
          </p>
        </div>

            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <Image
                    src="/xd.png"
                    alt="Professional UK visa consultation and partnership services"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    style={{ borderRadius: '16px', objectPosition: 'center top' }}
                  />
                </div>
              </div>

              {/* Right Column - Feature Grid */}
              <PartnershipFeatures />
            </div>
        </div>
        </section>

        {/* FAQ Section */}
        <FAQ />

    </div>
    </>
  );
}
