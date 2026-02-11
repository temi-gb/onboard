'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What UK visas does OnboardVisa support?',
    answer:
      'OnboardVisa supports the UK Innovator Founder Visa and the UK Global Talent Visa. These visa routes rely heavily on endorsement, evidence, and professional positioning, which is the core of our service.',
  },
  {
    question: "Can I use OnboardVisa if I'm already in the UK?",
    answer:
      'Yes. OnboardVisa supports applicants inside and outside the UK, including visa switchers, students, workers, and founders already resident in the UK preparing endorsement or visa applications.',
  },
  {
    question: 'How is OnboardVisa different from an immigration lawyer or agent?',
    answer:
      'OnboardVisa focuses on strategy, storytelling, and endorsement readiness, not form-filling. Many clients use OnboardVisa alongside an immigration lawyer to strengthen their case before submission.',
  },
  {
    question: 'Does OnboardVisa work directly with UK endorsing bodies?',
    answer:
      'No. OnboardVisa is independent and does not represent endorsing bodies. We help applicants align their applications with published endorsement criteria and expectations used by UK-approved endorsing organisations.',
  },
  {
    question: 'What happens during a booked session with OnboardVisa?',
    answer:
      "A booked session is a strategic review of your profile, business idea, or achievements. You'll receive guidance on eligibility, gaps, endorsement readiness, and next steps for your UK visa application.",
  },
  {
    question: 'Can I change or cancel my plan at any time?',
    answer:
      'Yes. You can change or cancel your OnboardVisa plan at any time. There are no long-term commitments or lock-ins.',
  },
  {
    question: 'Is OnboardVisa an AI-only platform?',
    answer:
      'No. OnboardVisa uses AI as a supporting tool, but all guidance is human-led and strategy-driven. Decisions, reviews, and recommendations are not automated.',
  },
  {
    question: 'Who typically uses OnboardVisa?',
    answer:
      'OnboardVisa is used by startup founders, entrepreneurs, tech professionals, researchers, creatives, and exceptional talent preparing UK Innovator Founder or Global Talent visa applications.',
  },
  {
    question: 'How do I know which UK visa route is right for me?',
    answer:
      "If you're unsure whether the Innovator Founder Visa or Global Talent Visa is right for you, OnboardVisa can assess your background and help you determine the most suitable UK visa route.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-20 px-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <h2
          className="text-center mb-12 text-3xl sm:text-4xl lg:text-5xl"
          style={{
            fontFamily: 'Ivyprestoheadline, Georgia, sans-serif',
            color: '#090909',
            fontWeight: 500,
          }}
        >
          Frequently asked questions
        </h2>

        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index}>
                {/* Question Box */}
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between p-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-[#090909] font-medium pr-4 flex-1">{item.question}</span>
                  <span className="flex-shrink-0 text-[#090909]">
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

                {/* Answer */}
                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="mt-2 text-[#090909] leading-relaxed"
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
      </div>
    </section>
  );
}

