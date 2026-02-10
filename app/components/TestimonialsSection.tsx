'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Testimonial {
  name: string;
  tag: string;
  image: string;
  caseStudy: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Abagail Pumphrey',
    tag: 'BOSS PROJECT',
    image: '/uk-visa-applicant-woman.png',
    caseStudy: 'Read case study',
  },
  {
    name: 'John Doe',
    tag: 'SUCCESS STORY',
    image: '/uk-innovator-founder-visa-application.png',
    caseStudy: 'Read case study',
  },
  {
    name: 'Jane Smith',
    tag: 'CLIENT TESTIMONIAL',
    image: '/uk-global-talent-visa-application.png',
    caseStudy: 'Read case study',
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
    <section className="bg-gray-100 py-20 px-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="bg-white rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div>
              <h2
                className="text-4xl lg:text-5xl leading-tight mb-8"
                style={{
                  fontFamily: 'Ivyprestoheadline, Georgia, sans-serif',
                  color: '#090909',
                  fontWeight: 500,
                }}
              >
                Over 150,000
                <br />
                experts and
                <br />
                businesses rely on
                <br />
                OnboardVisa
              </h2>
            </div>

            {/* Right Side - Testimonial Card */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden flex">
                {/* Left Half - Dark Background */}
                <div className="w-1/2 bg-[#8B2635] p-8 flex flex-col justify-between">
                  <div>
                    <h3
                      className="text-3xl lg:text-4xl mb-4"
                      style={{
                        fontFamily: 'Ivyprestoheadline, Georgia, sans-serif',
                        color: '#fff',
                        fontWeight: 500,
                      }}
                    >
                      {currentTestimonial.name}
                    </h3>
                    <button
                      className="px-4 py-2 rounded-lg text-sm font-medium text-white mb-8"
                      style={{ backgroundColor: '#5A1A24' }}
                    >
                      {currentTestimonial.tag}
                    </button>
                  </div>
                  <a
                    href="#"
                    className="text-white text-sm font-medium flex items-center gap-2 hover:opacity-80 transition-opacity"
                  >
                    {currentTestimonial.caseStudy}
                    <svg
                      className="w-4 h-4"
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
                  </a>
                </div>

                {/* Right Half - Image */}
                <div className="w-1/2 bg-black relative">
                  <div className="absolute inset-0">
                    <Image
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-center gap-4 mt-6">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:opacity-80 transition-opacity"
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
                <span className="text-sm font-medium text-[#090909]">
                  {currentIndex + 1} / {testimonials.length}
                </span>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:opacity-80 transition-opacity"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

