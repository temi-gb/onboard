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
        <section className="py-24 sm:py-32 bg-gray-100">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <h2 className="text-2xl font-semibold text-[#171717] mb-12">Our services</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              {/* Left: Innovator Founder Visa - Dark Background */}
              <div className="flex flex-col h-full p-8 lg:p-12" style={{ backgroundColor: 'rgb(10, 18, 23)', borderRadius: '24px', overflow: 'hidden' }}>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-3">Innovator Founder Visa</h3>
                <p className="text-lg mb-8" style={{ color: '#85898c' }}>We help founders and intending founders build endorsement-ready cases for the UK</p>
                
                <div className="flex flex-row gap-4 mb-8">
                  <Link
                    href="/innovator-founder-visa"
                    className="inline-flex items-center justify-center"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      fontSize: '14px',
                      fontWeight: 450,
                      padding: '8px 16px',
                      borderRadius: '24px',
                      border: '1px solid transparent',
                      transition: '0.2s',
                      color: 'rgb(10, 18, 23)',
                      backgroundColor: 'rgb(255, 255, 255)',
                    }}
                  >
                    Explore
                  </Link>
                  <BookSessionButton
                    className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
                  />
                </div>

                {/* Visual Placeholder - Dark Theme */}
                <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[500px] innovator-image-hover mt-auto" style={{ borderRadius: '24px', overflow: 'hidden' }}>
                  <Image
                    src="/uk-innovator-founder-visa-application.png"
                    alt="Applicants preparing a UK Innovator Founder visa application"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover innovator-image-transition"
                    style={{ 
                      borderRadius: '24px',
                      objectPosition: '50% 100%',
                    }}
                  />
                </div>
              </div>

              {/* Right: Global Talent Visa - Light Background */}
              <div className="flex flex-col h-full p-8 lg:p-12" style={{ backgroundColor: 'rgb(228, 239, 247)', borderRadius: '24px', overflow: 'hidden' }}>
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#171717] mb-3">Global Talent Visa</h3>
                <p className="text-lg mb-8" style={{ color: '#85898c' }}>We help professionals strengthen their profile and translate achievement into endorsement</p>
                
                <div className="flex flex-row gap-4 mb-8">
                  <Link
                    href="/global-talent-visa"
                    className="inline-flex items-center justify-center"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      fontSize: '14px',
                      fontWeight: 450,
                      padding: '8px 16px',
                      borderRadius: '24px',
                      border: '1px solid transparent',
                      transition: '0.2s',
                      color: 'rgb(255, 255, 255)',
                      backgroundColor: 'rgb(10, 18, 23)',
                    }}
                  >
                    Explore
                  </Link>
                  <BookSessionButton
                    variant="outline"
                    className="inline-flex items-center justify-center"
                  />
                </div>

                {/* Image */}
                <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[500px] innovator-image-hover mt-auto" style={{ borderRadius: '24px', overflow: 'hidden' }}>
                  <Image
                    src="/uk-global-talent-visa-application.png"
                    alt="Professional preparing a UK Global Talent visa application"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover innovator-image-transition"
                    style={{ 
                      borderRadius: '24px',
                      objectPosition: 'center top',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

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
