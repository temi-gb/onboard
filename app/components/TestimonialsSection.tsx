'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Testimonial {
  name: string;
  handle: string;
  quote: string;
  avatar: string;
  color: string;
  rotation: number;
  zIndex: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Chen',
    handle: '@sarahchen_tech',
    quote: 'OnboardVisa helped me secure my Innovator Founder Visa endorsement. Their strategic guidance made all the difference in presenting my business case compellingly.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    color: '#8b2635',
    rotation: 0,
    zIndex: 1,
  },
  {
    name: 'Michael Rodriguez',
    handle: '@mrodriguez_research',
    quote: 'The team at OnboardVisa transformed my Global Talent Visa application. Their expertise in storytelling and evidence preparation was invaluable.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    color: '#A855F7', // Purple
    rotation: 0,
    zIndex: 2,
  },
  {
    name: 'Priya Sharma',
    handle: '@priyasharma_design',
    quote: 'I was overwhelmed by the visa process until I found OnboardVisa. They broke down every step and helped me build a strong endorsement case.',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    color: '#F5E6D3', // Light beige/cream
    rotation: 0,
    zIndex: 3,
  },
  {
    name: 'David Kim',
    handle: '@davidkim_founder',
    quote: 'Secured my Innovator Founder Visa endorsement within months thanks to OnboardVisa. Their 1:1 support and strategic approach is unmatched.',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    color: '#FB923C', // Orange
    rotation: 0,
    zIndex: 4,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-black pt-8 pb-10 px-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="pt-3 pb-5 px-6 lg:pt-5 lg:pb-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-2">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 rounded-full border border-white text-sm font-medium text-white">
                TESTIMONIALS
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl leading-tight pb-4"
              style={{
                fontFamily: 'Georgia, serif',
                color: '#ffffff',
                fontWeight: 500,
              }}
            >
              Hear what the our clients are saying about their experience
            </h2>
          </div>

          <div className="flex justify-center items-center mt-2">
            {/* Centered Slider */}
            <div className="relative flex flex-col justify-center max-w-2xl w-full">
              {/* Slider Container */}
              <div className="relative h-[320px] sm:h-[360px] lg:h-[380px] overflow-hidden">
                <div
                  className="absolute inset-0 transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                  }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-4"
                      style={{
                        left: `${index * 100}%`,
                      }}
                    >
                      <div
                        className="rounded-2xl p-5 sm:p-6 lg:p-8 shadow-xl w-full max-w-md lg:max-w-lg mx-auto relative"
                        style={{
                          backgroundColor: testimonial.color,
                          transform: `rotate(${testimonial.rotation}deg)`,
                        }}
                      >
                        <div 
                          className={`absolute top-2 left-2 sm:top-3 sm:left-3 text-6xl sm:text-7xl lg:text-8xl font-serif leading-none opacity-20 ${
                            index === 0 ? 'text-white' : 'text-[#090909]'
                          }`}
                          style={{ fontFamily: 'Georgia, serif' }}
                        >
                          "
                        </div>
                        <p 
                          className={`text-sm sm:text-base font-medium mb-4 sm:mb-5 leading-relaxed relative z-10 pl-8 sm:pl-10 ${
                            index === 0 ? 'text-white' : 'text-[#090909]'
                          }`}
                        >
                          {testimonial.quote}
                        </p>
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/50">
                            <Image
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              width={56}
                              height={56}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div>
                            <div className={`font-semibold text-sm sm:text-base ${
                              index === 0 ? 'text-white' : 'text-[#090909]'
                            }`}>
                              {testimonial.name}
                            </div>
                            <div className={`text-xs sm:text-sm opacity-70 ${
                              index === 0 ? 'text-white' : 'text-[#090909]'
                            }`}>
                              {testimonial.handle}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-center gap-4 mt-6">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:opacity-80 transition-opacity flex-shrink-0"
                  aria-label="Previous testimonial"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <span className="text-sm font-medium text-white min-w-[60px] text-center">
                  {currentIndex + 1} / {testimonials.length}
                </span>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:opacity-80 transition-opacity flex-shrink-0"
                  aria-label="Next testimonial"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="flex items-center justify-center gap-2 mt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-white w-8'
                        : 'bg-gray-500 hover:bg-gray-400 w-2'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

