import Image from 'next/image';
import type { Metadata } from 'next';
import { generateMetadata, generateStructuredData } from '../lib/seo';
import Link from 'next/link';
import GlobalTalentFAQ from '../components/GlobalTalentFAQ';

export const metadata: Metadata = generateMetadata({
  title: 'UK Global Talent Visa',
  description:
    'Apply for the UK Global Talent Visa with expert support. For exceptional individuals recognized as leaders in digital technology. Get professional guidance for your endorsement application.',
  path: '/global-talent-visa',
  keywords: [
    'UK Global Talent Visa',
    'Tech Nation Global Talent',
    'UK visa for exceptional talent',
    'global talent endorsement',
    'global talent visa application help',
    'UK global talent visa guidance',
    'Tech Nation endorsement',
  ],
});

const globalTalentStructuredData = generateStructuredData({
  type: 'Service',
  data: {
    serviceType: 'UK Global Talent Visa Support',
    provider: {
      '@type': 'Organization',
      name: 'OnboardVisa',
    },
    areaServed: 'United Kingdom',
    description:
      'Specialised support for exceptional technologists, founders, and senior operators applying for the UK Global Talent Visa through Tech Nation.',
  },
});

// FAQ data specific to Global Talent Visa
const globalTalentFAQ = [
  {
    question: 'How long does it take to get a Global Talent Visa endorsement?',
    answer: 'The endorsement process typically takes 3-8 weeks from submission to Tech Nation. Once endorsed, the visa application itself usually takes 3 weeks for standard processing. We help you prepare a strong application to minimize delays.',
  },
  {
    question: 'What evidence do I need to provide for the Global Talent Visa?',
    answer: 'You need to demonstrate exceptional talent or exceptional promise in digital technology. This includes evidence of technical innovation, recognition in your field, contributions to the industry, and proof of your exceptional abilities. We help you identify and structure the strongest evidence for your application.',
  },
  {
    question: 'What is the difference between Exceptional Talent and Exceptional Promise?',
    answer: 'Exceptional Talent is for established leaders with a proven track record of significant achievements. Exceptional Promise is for individuals who show clear potential to become leaders. We assess your profile and help you choose the route that best fits your background.',
  },
  {
    question: 'Do I need a job offer to apply for the Global Talent Visa?',
    answer: 'No, the Global Talent Visa does not require a job offer. This is one of its key advantages - you can come to the UK to work, start a business, or be self-employed in the digital technology sector.',
  },
  {
    question: 'Can I bring my family members on the Global Talent Visa?',
    answer: 'Yes, you can bring your partner and dependent children under 18. They will need to apply for dependent visas, and you must show you have sufficient funds to support them.',
  },
  {
    question: 'How long is the Global Talent Visa valid for?',
    answer: 'The Global Talent Visa is initially granted for up to 5 years. You can extend it for another 5 years, and after 5 years of continuous residence, you may be eligible to apply for indefinite leave to remain (settlement).',
  },
  {
    question: 'What happens if my endorsement application is refused?',
    answer: 'If your endorsement is refused, you can reapply. We help you understand the reasons for refusal and strengthen your application. There is no limit on the number of times you can apply, but each application requires a new fee.',
  },
  {
    question: 'How much does the Global Talent Visa cost?',
    answer: 'The endorsement application fee is £456, and the visa application fee is £623 (or £1,246 for priority processing). You will also need to pay the Immigration Health Surcharge. We provide transparent pricing for our support services.',
  },
];

export default function GlobalTalentVisaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(globalTalentStructuredData),
        }}
      />

      <main className="bg-white">
        {/* Hero Section */}
        <section className="border-b border-gray-100">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
            <h1
              className="mb-6"
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '3.5rem',
                lineHeight: 1.15,
                fontWeight: 400,
                color: '#000000',
              }}
            >
              Applying for Talent Visas
              </h1>
            <p className="text-lg text-gray-700 max-w-3xl mb-8">
              The UK Global Talent Visa is designed for exceptional individuals recognized as leaders or potential leaders in digital technology. 
              We provide expert guidance to help you navigate the endorsement process and secure your visa.
            </p>
          </div>
        </section>

        {/* Application Overview */}
        <section className="border-b border-gray-100 bg-white">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
            <h2
              className="mb-6"
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '2.5rem',
                lineHeight: 1.2,
                fontWeight: 400,
                color: '#000000',
              }}
            >
              Application Overview
            </h2>
            <div className="prose prose-lg max-w-3xl">
              <p className="text-gray-700 mb-6">
                The UK Global Talent Visa endorsement assesses applicants' skills, abilities, and achievements in digital technology 
                to determine whether they should be endorsed to progress their visa application.
              </p>
              <p className="text-gray-700 mb-6">
                To be successful, applicants need to demonstrate either <strong>Exceptional Talent</strong> (for established leaders) 
                or <strong>Exceptional Promise</strong> (for emerging leaders) in digital technology. The endorsement is assessed by 
                Tech Nation, the designated competent body for digital technology applications.
              </p>
              <p className="text-gray-700">
                Applicants must comply with Tech Nation's endorsement criteria and provide evidence that demonstrates their exceptional 
                abilities or promise in their field. We help you understand these requirements and prepare a compelling application.
              </p>
            </div>
          </div>
        </section>

        {/* How to Apply */}
        <section className="border-b border-gray-100 bg-gray-50/60">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
            <h2
              className="mb-6"
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '2.5rem',
                lineHeight: 1.2,
                fontWeight: 400,
                color: '#000000',
              }}
            >
              How to Apply
                </h2>
            <div className="prose prose-lg max-w-3xl">
              <p className="text-gray-700 mb-6">
                The Global Talent endorsement application is submitted online directly to the Home Office through the 
                <a href="https://www.gov.uk/global-talent" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                  UK Government website
                </a>.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <p className="text-gray-800 font-medium mb-2">Important:</p>
                <p className="text-gray-700 text-sm">
                  Endorsement applications and visa applications must NOT be sent to OnboardVisa directly. 
                  All applications must only be sent to the Home Office. We provide guidance and support to help you prepare your application.
                </p>
              </div>
              <p className="text-gray-700">
                The information on this page is meant to inform applicants about the Global Talent Visa process and our support services. 
                We provide expert guidance, but all official applications must go through the Home Office.
                </p>
            </div>
          </div>
        </section>

        {/* The Application Process */}
        <section className="border-b border-gray-100 bg-white">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
            <h2
              className="mb-6"
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '2.5rem',
                lineHeight: 1.2,
                fontWeight: 400,
                color: '#000000',
              }}
            >
              The Application Process
                </h2>
            <div className="max-w-3xl">
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white text-sm font-semibold flex items-center justify-center">
                    1
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Applicant submits application to Home Office</p>
                    <p className="text-gray-700 text-sm">
                      You complete and submit your endorsement application online through the UK Government portal, 
                      including all required documents and evidence.
                    </p>
                  </div>
                  </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white text-sm font-semibold flex items-center justify-center">
                    2
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Home Office sends application to Tech Nation</p>
                    <p className="text-gray-700 text-sm">
                      The Home Office forwards digital technology applications to Tech Nation, the designated competent body 
                      for assessing Global Talent Visa endorsements in tech.
                    </p>
                  </div>
                  </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white text-sm font-semibold flex items-center justify-center">
                    3
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Tech Nation reviews the application</p>
                    <p className="text-gray-700 text-sm">
                      Tech Nation assesses your application against their endorsement criteria, evaluating your evidence 
                      of exceptional talent or exceptional promise in digital technology.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white text-sm font-semibold flex items-center justify-center">
                    4
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Tech Nation sends endorsement decision to Home Office</p>
                    <p className="text-gray-700 text-sm">
                      Tech Nation communicates their endorsement decision (approved or refused) back to the Home Office.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white text-sm font-semibold flex items-center justify-center">
                    5
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Home Office informs applicant of decision</p>
                    <p className="text-gray-700 text-sm">
                      If endorsed, you can proceed with your visa application. If refused, you can reapply with additional evidence. 
                      The Home Office will notify you of the final decision.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Endorsement Criteria */}
        <section className="border-b border-gray-100 bg-gray-50/60">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
            <h2
              className="mb-6"
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '2.5rem',
                lineHeight: 1.2,
                fontWeight: 400,
                color: '#000000',
              }}
            >
              Endorsement Criteria
            </h2>
            <div className="max-w-3xl">
              <p className="text-gray-700 mb-8">
                Applicants who wish to be endorsed for the UK Global Talent Visa in digital technology must demonstrate 
                either <strong>Exceptional Talent</strong> or <strong>Exceptional Promise</strong>. You must meet the criteria 
                for one of these routes:
              </p>

              <div className="space-y-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Exceptional Talent Route</h3>
                  <p className="text-gray-700 mb-4">
                    For established leaders in digital technology. You must demonstrate that you are a recognized leader 
                    in your field by providing evidence of:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Significant technical, commercial, or entrepreneurial contributions to the digital technology sector</li>
                    <li>Recognition as a leading talent in your field</li>
                    <li>Evidence of exceptional ability that has been recognized beyond your immediate occupation</li>
                    <li>Outstanding achievements that have been recognized by peers or industry bodies</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Exceptional Promise Route</h3>
                  <p className="text-gray-700 mb-4">
                    For emerging leaders who show clear potential to become leaders in digital technology. You must demonstrate:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Clear potential to become a leading talent in your field</li>
                    <li>Evidence of exceptional promise that has been recognized by peers or industry bodies</li>
                    <li>Innovation in your work that shows potential for significant future contributions</li>
                    <li>A strong track record relative to your career stage</li>
                </ul>
                </div>
              </div>

              <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-4">
                <p className="text-gray-800 font-medium mb-2">Evidence Requirements</p>
                <p className="text-gray-700 text-sm mb-3">
                  Both routes require evidence across multiple criteria, including:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                  <li>Technical innovation and contributions</li>
                  <li>Recognition in your field</li>
                  <li>Significant technical, commercial, or entrepreneurial contributions</li>
                  <li>Letters of recommendation from recognized experts</li>
                  <li>Proof of exceptional ability or promise</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="border-b border-gray-100 bg-white">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
            <h2
              className="mb-12 text-center"
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '2.5rem',
                lineHeight: 1.2,
                fontWeight: 400,
                color: '#000000',
              }}
            >
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto">
              <GlobalTalentFAQ faqData={globalTalentFAQ} />
            </div>
          </div>
        </section>

        {/* Contact/CTA Section */}
        <section className="bg-gray-50/80">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
            <div className="max-w-3xl">
              <h2
                className="mb-4"
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '2rem',
                  lineHeight: 1.2,
                  fontWeight: 400,
                  color: '#000000',
                }}
              >
                Got a Question?
              </h2>
              <p className="text-gray-700 mb-6">
                Please read the information on this page thoroughly. If you still have a question after having done so, 
                we're here to help. Book a consultation to discuss your Global Talent Visa application.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book-session"
                  className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium hover:scale-[1.02] transition-transform"
                  style={{
                    backgroundColor: '#e6ff32',
                    color: '#000',
                    borderRadius: '50px',
                    border: '0.5px solid #000',
                    boxShadow: '0 2px 8px rgba(230,255,50,0.3)',
                  }}
                >
                  Book a Consultation
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border border-gray-300 rounded-full text-gray-900 hover:bg-gray-50"
                >
                  Read Our Blog
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
