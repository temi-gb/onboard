'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface AnimatedChecklistProps {
  items: string[];
}

function AnimatedChecklist({ items }: AnimatedChecklistProps) {
  const [step, setStep] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Start animation only when checklist enters viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Drive step-by-step checklist + progress once visible
  useEffect(() => {
    if (!hasStarted) return;

    setStep(0);
    let current = 0;

    const interval = setInterval(() => {
      current += 1;
      setStep((prev) => {
        const next = Math.min(items.length, Math.max(prev, current));
        if (next === items.length) {
          clearInterval(interval);
        }
        return next;
      });
    }, 600);

    return () => clearInterval(interval);
  }, [hasStarted, items.length]);

  const progress =
    items.length === 0 ? 0 : Math.round((Math.min(step, items.length) / items.length) * 100);

  return (
    <div ref={containerRef}>
      <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
        {items.map((label, index) => {
          const isComplete = index < step;
          const isCurrent = index === step;

          return (
            <div
              key={label}
              className={`flex items-start gap-2 sm:gap-3 transition-all duration-400 ${
                isComplete || isCurrent ? 'opacity-100 translate-y-0' : 'opacity-60 translate-y-1'
              }`}
            >
              <div
                className={`w-5 h-5 sm:w-5 sm:h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 mt-0.5 ${
                  isComplete
                    ? 'bg-[#e6ff32]'
                    : 'border-2 border-gray-300 bg-white'
                }`}
              >
                {isComplete && (
                  <svg
                    className="w-3 h-3 text-[#090909]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <span
                className={`text-xs sm:text-sm leading-relaxed transition-colors duration-300 flex-1 ${
                  isComplete ? 'text-[#171717]' : 'text-gray-500'
                }`}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>

      <div className="h-2 bg-gray-200 rounded-full overflow-hidden mt-4">
        <div
          className="h-full bg-[#e6ff32] rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default function HowItWorksSection() {
  return (
    <section className="bg-white py-20 px-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl px-8 sm:px-12 lg:px-16 xl:px-20">
        {/* Main Headline */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{
              fontFamily: 'Ivyprestoheadline, Georgia, sans-serif',
              color: '#090909',
              fontWeight: 500,
            }}
          >
            Choose the visa application type that fits your profile
          </h2>
          <p className="text-lg text-[#171717]">
            OnboardVisa supports both Innovator Founder Visa and Global Talent Visa applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
          {/* Left Panel - Text Content */}
          <div className="bg-gray-100 pt-16 pb-16 px-8 lg:px-16 lg:h-[500px] flex flex-col justify-center">
            {/* Coming Soon Banner */}
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-lg text-sm font-medium" style={{ backgroundColor: '#D4EDDA', color: '#155724' }}>
                How we work
              </span>
            </div>

            {/* Main Title */}
            <h3
              className="text-3xl lg:text-4xl font-bold mb-6"
              style={{
                fontFamily: 'Ivyprestoheadline, Georgia, sans-serif',
                color: '#090909',
                fontWeight: 500,
              }}
            >
              Streamlined Application Process
            </h3>

            {/* Body Text */}
            <div className="space-y-4 mb-8">
              <p className="text-base text-[#171717] leading-relaxed">
                Applying for a UK visa? Connect with OnboardVisa in minutes. Our expert team guides you through the entire process, ensuring your application is complete and compelling.
              </p>
              <p className="text-base text-[#171717] leading-relaxed">
                Our comprehensive service handles the rest: document preparation, application review.
              </p>
            </div>

            {/* CTA Button */}
            <Link
              href="/innovator-founder-visa"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-base font-medium transition-all duration-200 w-fit"
              style={{
                backgroundColor: '#000000',
                color: '#fff',
              }}
            >
              More about Our Services
            </Link>
          </div>

          {/* Right Panel - Visual Elements */}
          <div className="relative h-[500px] sm:h-[500px] lg:h-[500px] overflow-hidden">
            {/* Blurred Background */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(/uk-innovator-founder-visa-application.png)',
                filter: 'blur(20px)',
                transform: 'scale(1.1)',
              }}
            />
            
            {/* Overlay Content */}
            <div className="relative h-full flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
              {/* Visa Type Badge */}
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-3 sm:mb-4 lg:mb-6 shadow-lg">
                <span className="text-sm sm:text-base lg:text-lg font-semibold text-[#171717]">Innovator Founder Visa</span>
              </div>

              {/* Application Card UI */}
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 sm:p-5 lg:p-6 shadow-2xl max-w-md w-full mx-2 sm:mx-4">
                <h4 className="text-lg sm:text-xl font-semibold text-[#171717] mb-3 sm:mb-4">Application Checklist</h4>
                <AnimatedChecklist
                  items={[
                    'Innovation clearly defined',
                    'Viability supported with financial planning',
                    'Scalability backed by a realistic growth strategy',
                    "Founder's active role and expertise demonstrated",
                    'Endorsement-ready application submitted',
                  ]}
                />
              </div>

              {/* Global Talent Visa Badge */}
            </div>
          </div>
        </div>

        {/* Global Talent Visa Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center mt-20">
          {/* Left Panel - Visual Elements (Reversed) */}
          <div className="relative h-[500px] overflow-hidden order-2 lg:order-1">
            {/* Blurred Background */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(/uk-global-talent-visa-application.png)',
                filter: 'blur(20px)',
                transform: 'scale(1.1)',
              }}
            />
            
            {/* Overlay Content */}
            <div className="relative h-full flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
              {/* Visa Type Badge */}
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-3 sm:mb-4 lg:mb-6 shadow-lg">
                <span className="text-sm sm:text-base lg:text-lg font-semibold text-[#171717]">Global Talent Visa</span>
              </div>

              {/* Application Card UI */}
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 sm:p-5 lg:p-6 shadow-2xl max-w-md w-full mx-2 sm:mx-4">
                <h4 className="text-lg sm:text-xl font-semibold text-[#171717] mb-3 sm:mb-4">Application Checklist</h4>
                <AnimatedChecklist
                  items={[
                    'Exceptional Talent or Promise criteria clearly identified',
                    'Professional achievements evidenced with measurable impact',
                    'Independent recognition and references secured',
                    'Structured portfolio aligned with endorsement criteria',
                    'Endorsement-ready application package completed',
                  ]}
                />
              </div>

              {/* Innovator Founder Visa Badge */}
            </div>
          </div>

          {/* Right Panel - Text Content (Reversed) */}
          <div className="bg-gray-100 pt-16 pb-16 px-8 lg:px-16 lg:h-[500px] flex flex-col justify-center order-1 lg:order-2">
            {/* Coming Soon Banner */}
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-lg text-sm font-medium" style={{ backgroundColor: '#D4EDDA', color: '#155724' }}>
                How we work
              </span>
            </div>

            {/* Main Title */}
            <h3
              className="text-3xl lg:text-4xl font-bold mb-6"
              style={{
                fontFamily: 'Ivyprestoheadline, Georgia, sans-serif',
                color: '#090909',
                fontWeight: 500,
              }}
            >
              Global Talent Visa Application
            </h3>

            {/* Body Text */}
            <div className="space-y-4 mb-8">
              <p className="text-base text-[#171717] leading-relaxed">
                Applying for a Global Talent Visa? Our expert team helps exceptional talent navigate the endorsement process and visa application with confidence.
              </p>
              <p className="text-base text-[#171717] leading-relaxed">
                Our comprehensive service handles everything: endorsement application support, portfolio preparation, document review, and ongoing guidance throughout your visa journey.
              </p>
            </div>

            {/* CTA Button */}
            <Link
              href="/global-talent-visa"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-base font-medium transition-all duration-200 w-fit"
              style={{
                backgroundColor: '#000000',
                color: '#fff',
              }}
            >
              More about Global Talent Visa
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
