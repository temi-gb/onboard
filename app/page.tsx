import Link from 'next/link';
import Image from 'next/image';
import { generateMetadata, generateStructuredData } from './lib/seo';
import type { Metadata } from 'next';
import FAQ from './components/FAQ';
import TestimonialsSection from './components/TestimonialsSection';
import HowItWorksSection from './components/HowItWorksSection';
import HeroSection from './components/HeroSection';

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
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left: Innovator Founder Visa - Dark Background */}
              <div className="flex flex-col p-8 lg:p-12" style={{ backgroundColor: 'rgb(10, 18, 23)', borderRadius: '24px', overflow: 'hidden' }}>
                <h3 className="text-3xl font-semibold text-white mb-3">Innovator Founder Visa</h3>
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
                  <Link
                    href="/innovator-founder-visa"
                    className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium text-[#171717] hover:opacity-90 transition-opacity"
                    style={{
                      backgroundColor: '#e6ff32',
                      color: '#000',
                      border: '0.5px solid #000',
                      borderRadius: '50px',
                    }}
                  >
                    Book a session
                  </Link>
                </div>

                {/* Visual Placeholder - Dark Theme */}
                <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[500px] innovator-image-hover" style={{ borderRadius: '24px', overflow: 'hidden' }}>
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
              <div className="flex flex-col p-8 lg:p-12" style={{ backgroundColor: 'rgb(228, 239, 247)', borderRadius: '24px', overflow: 'hidden' }}>
                <h3 className="text-3xl font-semibold text-[#171717] mb-3">Global Talent Visa</h3>
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
                      border: '1px solid rgba(0, 0, 0, 0.1)',
                      transition: '0.2s',
                      color: 'rgb(10, 18, 23)',
                      backgroundColor: 'transparent',
                    }}
                  >
                    Book a session
                  </Link>
                </div>

                {/* Image */}
                <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[500px] innovator-image-hover" style={{ borderRadius: '24px', overflow: 'hidden' }}>
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
                className="text-4xl lg:text-5xl font-bold mb-6"
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
              <div className="grid grid-cols-2 gap-4">
                {/* Feature Box 1 */}
                <div className="bg-gray-100 rounded-xl px-6 py-4 flex flex-col items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-gray-400 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-2.5 h-2.5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-xs font-medium pt-2" style={{ color: '#000000' }}>
                    Dedicated visa specialist
                  </p>
                </div>

                {/* Feature Box 2 */}
                <div className="bg-gray-100 rounded-xl px-6 py-4 flex flex-col items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-gray-400 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-2.5 h-2.5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-xs font-medium pt-2" style={{ color: '#000000' }}>
                  Priority collaboration & feedback loops
                  </p>
                </div>

                {/* Feature Box 3 */}
                <div className="bg-gray-100 rounded-xl px-6 py-4 flex flex-col items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-gray-400 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-2.5 h-2.5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-xs font-medium pt-2" style={{ color: '#000000' }}>
                    Tailored guidance
                  </p>
                </div>

                {/* Feature Box 4 */}
                <div className="bg-gray-100 rounded-xl px-6 py-4 flex flex-col items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-gray-400 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-2.5 h-2.5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-xs font-medium pt-2" style={{ color: '#000000' }}>
                  Positioning & narrative refinement
                  </p>
                </div>

                {/* Feature Box 5 */}
                <div className="bg-gray-100 rounded-xl px-6 py-4 flex flex-col items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-gray-400 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-2.5 h-2.5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-xs font-medium pt-2" style={{ color: '#000000' }}>
                    Visa strategy consulting
                  </p>
                </div>

                {/* Feature Box 6 */}
                <div className="bg-gray-100 rounded-xl px-6 py-4 flex flex-col items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-gray-400 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-2.5 h-2.5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-xs font-medium pt-2" style={{ color: '#000000' }}>
                  Ongoing insights & updates
                  </p>
                </div>

                {/* Feature Box 7 */}
                <div className="bg-gray-100 rounded-xl px-6 py-4 flex flex-col items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-gray-400 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-2.5 h-2.5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-xs font-medium pt-2" style={{ color: '#000000' }}>
                    Process clarity & optimisation
                  </p>
                </div>

                {/* Feature Box 8 - CTA Button */}
                <Link
                  href="/innovator-founder-visa"
                  className="bg-black rounded-xl p-6 flex items-center justify-center text-white font-medium hover:bg-black/78 hover:border-2 hover:border-black transition-all duration-300"
                >
                  Book a session
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />

    </div>
    </>
  );
}
