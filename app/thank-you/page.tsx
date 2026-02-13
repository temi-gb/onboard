import Link from 'next/link';
import { generateMetadata } from '../lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = generateMetadata({
  title: 'Thank You - Session Booked',
  description:
    'Thank you for booking a session with OnboardVisa. We look forward to helping you with your UK visa application.',
  path: '/thank-you',
  keywords: [
    'visa consultation',
    'UK visa booking',
    'visa session confirmed',
  ],
});

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-white">
        <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 py-20 lg:py-32">
          {/* Success Icon/Illustration */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full bg-[#e6ff32] flex items-center justify-center">
              <svg
                className="w-12 h-12 text-[#000]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl mb-6"
              style={{
                fontFamily: 'Georgia, serif',
                color: '#000',
                fontWeight: 510,
                lineHeight: '1.2',
              }}
            >
              Thank You for Booking!
            </h1>

            <p
              className="text-xl sm:text-2xl mb-8 max-w-2xl mx-auto"
              style={{
                fontFamily: 'Georgia, serif',
                color: '#262626E6',
                fontWeight: 400,
                lineHeight: '1.6',
              }}
            >
              We're thrilled that you've chosen OnboardVisa to guide you through your UK visa journey.
            </p>

            <div
              className="text-lg sm:text-xl mb-12 max-w-2xl mx-auto bg-gray-100 px-6 py-4 rounded-lg inline-block"
              style={{
                fontFamily: 'Georgia, serif',
                color: '#000',
                fontWeight: 500,
                lineHeight: '1.6',
              }}
            >
              We promise this will be a brilliant and productive session that brings you closer to your UK visa approval.
            </div>

            {/* What to Expect */}
            <div className="mt-1 mb-12 text-left max-w-2xl mx-auto">
              <h2
                className="text-2xl sm:text-3xl mb-6"
                style={{
                  fontFamily: 'Georgia, serif',
                  color: '#000',
                  fontWeight: 600,
                }}
              >
                What to Expect
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#e6ff32] flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-[#000]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-base sm:text-lg text-[#262626E6]">
                    A detailed review of your profile, business idea, or achievements
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#e6ff32] flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-[#000]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-base sm:text-lg text-[#262626E6]">
                    Strategic guidance on eligibility and endorsement readiness
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#e6ff32] flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-[#000]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-base sm:text-lg text-[#262626E6]">
                    Clear next steps for your UK visa application journey
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
              <Link
                href="/"
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
                Return to Home
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium transition-all duration-200 hover:opacity-80"
                style={{
                  color: '#000',
                  border: '1px solid #000',
                  borderRadius: '50px',
                  fontWeight: '500',
                }}
              >
                Read Our Blog
              </Link>
            </div>

            {/* Additional Info */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-4">
                You'll receive a confirmation email with the session details shortly.
              </p>
              <p className="text-sm text-gray-600">
                If you have any questions before our session, feel free to reach out to us.
              </p>
            </div>
          </div>
        </div>
    </div>
  );
}

