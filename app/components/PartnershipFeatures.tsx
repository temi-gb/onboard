'use client';

import { useEffect, useRef, useState } from 'react';
import BookSessionButton from './BookSessionButton';

const features = [
  'Dedicated visa specialist',
  'Priority collaboration & feedback loops',
  'Tailored guidance',
  'Positioning & narrative refinement',
  'Visa strategy consulting',
  'Ongoing insights & updates',
  'Process clarity & optimisation',
];

export default function PartnershipFeatures() {
  const [isVisible, setIsVisible] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={gridRef} className="grid grid-cols-2 gap-4">
      {features.map((label, index) => (
        <div
          key={index}
          className="bg-gray-100 rounded-xl px-6 py-4 flex flex-col items-start gap-3"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.97)',
            transition: `opacity 0.45s ease-out ${index * 0.07}s, transform 0.45s ease-out ${index * 0.07}s`,
          }}
        >
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
            {label}
          </p>
        </div>
      ))}

      {/* CTA Button */}
      <div
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.97)',
          transition: `opacity 0.45s ease-out ${features.length * 0.07}s, transform 0.45s ease-out ${features.length * 0.07}s`,
        }}
      >
        <BookSessionButton
          variant="black"
          className="rounded-xl p-6 flex items-center justify-center font-medium hover:bg-black/78 hover:border-2 hover:border-black transition-all duration-300 w-full h-full"
        />
      </div>
    </div>
  );
}
