'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface GlobalTalentFAQProps {
  faqData: FAQItem[];
}

export default function GlobalTalentFAQ({ faqData }: GlobalTalentFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqData.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index}>
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between p-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-left"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="text-gray-900 font-medium pr-4 flex-1">{item.question}</span>
              <span className="flex-shrink-0 text-gray-900">
                {isOpen ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                )}
              </span>
            </button>

            {isOpen && (
              <div
                id={`faq-answer-${index}`}
                className="mt-2 p-4 text-gray-700 leading-relaxed"
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}


