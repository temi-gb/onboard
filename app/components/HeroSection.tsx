'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedStatCard from './AnimatedStatCard';
import { openCalendlyPopup } from './CalendlyModal';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPhrase1, setShowPhrase1] = useState(false);
  const [showPhrase3, setShowPhrase3] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Small delay to ensure paint has happened, then trigger animations
    const id = requestAnimationFrame(() => {
      setIsVisible(true);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Show first phrase after paragraph appears
    const timer1 = setTimeout(() => {
      setShowPhrase1(true);
    }, 1000); // 1 second after hero animation starts

    // Show third phrase
    const timer3 = setTimeout(() => {
      setShowPhrase3(true);
    }, 2000); // 2 seconds

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer3);
    };
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="relative bg-white -mt-8">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12 items-center min-h-[calc(100vh-4rem)] py-16 lg:py-24">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <Link
              href="/blog"
              className={`hero-animate ${isVisible ? 'hero-animate-in' : ''} powered-by-ai-glitter inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors mb-6 w-fit`}
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
              className={`hero-animate ${isVisible ? 'hero-animate-in' : ''} text-[2.0rem] sm:text-[2.4rem]`}
              style={{
                fontFamily: 'Georgia, serif',
                color: '#000',
                textAlign: 'left',
                lineHeight: '1.2',
                fontWeight: '500',
                transitionDelay: '120ms',
              }}
            >
              Your Gateway to the UK Innovator Founder & Global Talent Visa.
            </h1>

            {/* Paragraph */}
            <p
              className={`hero-animate ${isVisible ? 'hero-animate-in' : ''} text-lg mb-3 mt-8 max-w-xl`}
              style={{ color: '#262626E6', fontWeight: 360, transitionDelay: '240ms' }}
            >
              We help founders and professionals shape a compelling story that
              secures endorsement and leads to a confident UK visa application.
            </p>
            
            {/* Animated CTA Text - Sequential */}
            <div className="text-sm sm:text-base w-fit whitespace-nowrap hero-cta-blob">
              <span
                className={`transition-all duration-500 ${
                  showPhrase1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
                style={{ color: '#262626E6' }}
              >
                <svg className="w-5 h-5 mr-1 inline-block" style={{ verticalAlign: '-0.15em' }} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
                Build your case.
              </span>
              <span className="mx-2" style={{ color: '#262626E6' }}>|</span>
              <span
                className={`transition-all duration-500 ${
                  showPhrase3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
                style={{ color: '#262626E6' }}
              >
                Get Visa approved!
              </span>
            </div>

            {/* CTA */}
            <div
              className={`hero-animate ${isVisible ? 'hero-animate-in' : ''} mt-6 flex flex-row items-center gap-2 group`}
              style={{ transitionDelay: '360ms' }}
            >
              {/* Icon before button */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e6ff32', border: '0.5px solid #000' }}>
                  <svg
                    className={`w-6 h-6 text-black book-session-arrow arrow-animate-continuous ${isButtonHovered ? 'arrow-animate-hover' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 7l7 5m0 0l-7 5m7-5H4"
                    />
                  </svg>
                </div>
              </div>
              <button
                onMouseEnter={() => {
                  setIsButtonHovered(false);
                  setTimeout(() => setIsButtonHovered(true), 10);
                }}
                onMouseLeave={() => setIsButtonHovered(false)}
                onClick={() => openCalendlyPopup()}
                className="book-session-btn inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium transition-all duration-200 hover:scale-105"
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
                Book a session
              </button>
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

              {/* Stat cards - gentle float animation on load */}
              {/* Card: over 10+ Endorsed Secured (top-left) */}
              <div
                className={`hero-animate ${isVisible ? 'hero-animate-in' : ''} stat-card-hover hero-stat-float absolute top-6 left-6 bg-[#FEF3C7] rounded-xl p-3 sm:p-5 shadow-lg min-w-[110px] sm:min-w-[160px]`}
                style={{ transitionDelay: '600ms' }}
              >
                <AnimatedStatCard
                  value={10}
                  prefix="over "
                  suffix="+"
                  label="Endorsed Secured"
                />
              </div>

              {/* Card: 60+ Guided applicants (bottom-right) */}
              <div
                className={`hero-animate ${isVisible ? 'hero-animate-in' : ''} stat-card-hover hero-stat-float absolute bottom-6 right-2 bg-[#FEF3C7] rounded-xl p-3 sm:p-5 shadow-lg min-w-[110px] sm:min-w-[160px]`}
                style={{ transitionDelay: '750ms' }}
              >
                <AnimatedStatCard
                  value={60}
                  suffix="+"
                  label="Guided applicants"
                  delay={100}
                />
              </div>

              {/* Card: 1:1 support (bottom-left) */}
              <div
                className={`hero-animate ${isVisible ? 'hero-animate-in' : ''} stat-card-hover hero-stat-float absolute bottom-6 left-6 bg-[#FEF3C7] rounded-xl p-3 sm:p-5 shadow-lg min-w-[110px] sm:min-w-[160px]`}
                style={{ transitionDelay: '900ms' }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-[#171717]">1:1</div>
                <div className="text-xs sm:text-sm text-[#171717] mt-1 opacity-80">
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
