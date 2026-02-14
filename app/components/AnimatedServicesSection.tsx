'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BookSessionButton from './BookSessionButton';

export default function AnimatedServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 bg-gray-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <h2
          className={`text-2xl font-semibold text-[#171717] mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Our services
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Left: Innovator Founder Visa - Dark Background */}
          <div
            className={`flex flex-col h-full p-8 lg:p-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{
              backgroundColor: 'rgb(10, 18, 23)',
              borderRadius: '24px',
              overflow: 'hidden',
              transitionDelay: '200ms',
            }}
          >
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
          <div
            className={`flex flex-col h-full p-8 lg:p-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{
              backgroundColor: 'rgb(228, 239, 247)',
              borderRadius: '24px',
              overflow: 'hidden',
              transitionDelay: '400ms',
            }}
          >
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
  );
}


