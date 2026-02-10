'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedStatCard from './AnimatedStatCard';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Small delay to ensure paint has happened, then trigger animations
    const id = requestAnimationFrame(() => {
      setIsVisible(true);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12 items-center min-h-[calc(100vh-4rem)] py-20 lg:py-28">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <Link
              href="/blog"
              className={`hero-animate ${isVisible ? 'hero-animate-in' : ''} inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors mb-6 w-fit`}
              style={{ transitionDelay: '0ms' }}
            >
              Powered by AI
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>

            {/* Heading */}
            <h1
              className={`hero-animate ${isVisible ? 'hero-animate-in' : ''}`}
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '2.7rem',
                color: '#000000',
                textAlign: 'left',
                lineHeight: '1.3',
                fontWeight: '500',
                transitionDelay: '120ms',
              }}
            >
              Your Gateway to the UK Innovator Founder & Global Talent Visa.
            </h1>

            {/* Paragraph */}
            <p
              className={`hero-animate ${isVisible ? 'hero-animate-in' : ''} text-lg mb-5 mt-8 max-w-xl`}
              style={{ color: '#171717', transitionDelay: '240ms' }}
            >
              We help founders and professionals shape a compelling story that
              secures endorsement and leads to a confident UK visa application.
              <br />
              Build the case. Earn the endorsement. Get approved!
            </p>

            {/* CTA */}
            <div
              className={`hero-animate ${isVisible ? 'hero-animate-in' : ''} mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4`}
              style={{ transitionDelay: '360ms' }}
            >
              <Link
                href="/innovator-founder-visa"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium transition-all duration-200 hover:scale-105"
                style={{
                  backgroundColor: '#e6ff32',
                  color: '#000',
                  border: '0.5px solid #000',
                  borderRadius: '50px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(230, 255, 50, 0.3)',
                }}
              >
                Book a session{' '}
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Right Content - Image with Stats */}
          <div
            className={`hero-image-animate ${isVisible ? 'hero-image-animate-in' : ''} relative`}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] lg:aspect-auto lg:h-[700px]">
              <Image
                src="/uk-visa-applicant-woman.png"
                alt="Smiling woman approved for UK Innovator Founder or Global Talent visa"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                priority
                className="object-cover"
                style={{ borderRadius: '16px' }}
              />

              {/* Statistics Cards Overlay - Desktop */}
              <div
                className={`hero-stats-animate ${isVisible ? 'hero-stats-animate-in' : ''} absolute top-6 left-6 sm:bottom-6 sm:top-auto sm:left-6 flex flex-row gap-3`}
              >
                {/* Stat Card 1 */}
                <div
                  className="hero-stat-card stat-card-hover bg-[#FEF3C7] rounded-xl p-3 sm:p-5 shadow-lg min-w-[110px] sm:min-w-[160px]"
                  style={{ transitionDelay: '600ms' }}
                >
                  <AnimatedStatCard
                    value={10}
                    prefix="over "
                    suffix="+"
                    label="Endorsed Secured"
                  />
                </div>

                {/* Stat Card 2 - Desktop only */}
                <div
                  className="hero-stat-card stat-card-hover hidden sm:block bg-[#FEF3C7] rounded-xl p-3 sm:p-5 shadow-lg min-w-[110px] sm:min-w-[160px]"
                  style={{ transitionDelay: '750ms' }}
                >
                  <AnimatedStatCard
                    value={1300}
                    suffix="+"
                    label="Guided applicants"
                    delay={100}
                  />
                </div>

                {/* Stat Card 3 - Desktop only */}
                <div
                  className="hero-stat-card stat-card-hover hidden sm:block bg-[#FEF3C7] rounded-xl p-3 sm:p-5 shadow-lg min-w-[110px] sm:min-w-[160px]"
                  style={{ transitionDelay: '900ms' }}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-[#171717]">
                    1:1
                  </div>
                  <div className="text-xs sm:text-sm text-[#171717] mt-1 opacity-80">
                    Applicant support
                  </div>
                </div>
              </div>

              {/* Card 2 - Mobile only */}
              <div
                className={`hero-animate ${isVisible ? 'hero-animate-in' : ''} stat-card-hover absolute bottom-6 right-2 sm:hidden bg-[#FEF3C7] rounded-xl p-3 shadow-lg min-w-[110px]`}
                style={{ transitionDelay: '750ms' }}
              >
                <AnimatedStatCard
                  value={1300}
                  suffix="+"
                  label="Guided applicants"
                  delay={100}
                />
              </div>

              {/* Card 3 - Mobile only */}
              <div
                className={`hero-animate ${isVisible ? 'hero-animate-in' : ''} stat-card-hover absolute bottom-6 left-6 sm:hidden bg-[#FEF3C7] rounded-xl p-3 shadow-lg min-w-[110px]`}
                style={{ transitionDelay: '900ms' }}
              >
                <div className="text-2xl font-bold text-[#171717]">1:1</div>
                <div className="text-xs text-[#171717] mt-1 opacity-80">
                  Applicant support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
