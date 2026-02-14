import { generateMetadata } from '../lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = generateMetadata({
  title: 'Data Protection Policy',
  description:
    'OnboardVisa Data Protection Policy. Learn how we collect, use, store, and protect your personal data in compliance with UK GDPR and data protection regulations.',
  path: '/data-protection-policy',
  keywords: [
    'data protection policy',
    'privacy policy',
    'GDPR',
    'personal data',
    'data security',
  ],
});

export default function DataProtectionPolicy() {
  return (
    <div className="bg-white py-20 px-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl mb-4"
          style={{
            fontFamily: 'Ivyprestoheadline, Georgia, sans-serif',
            color: '#090909',
            fontWeight: 500,
          }}
        >
          Data Protection Policy
        </h1>
        <p className="text-sm text-gray-500 mb-12">Last updated: February 2025</p>

        <div className="space-y-10 text-[#171717] leading-relaxed">
          {/* Introduction */}
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
            <p>
              OnboardVisa (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting and respecting your personal data. This Data Protection Policy explains how we collect, use, store, and safeguard information when you use our website, services, or interact with us.
            </p>
            <p className="mt-3">
              We comply with applicable data protection laws, including the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </section>

          {/* Data Controller */}
          <section>
            <h2 className="text-xl font-semibold mb-3">2. Data Controller</h2>
            <p>
              OnboardVisa is the data controller responsible for your personal data. If you have questions about this policy or how we handle your data, please contact us at{' '}
              <a href="mailto:hello@onboardvisa.com" className="underline hover:opacity-70 transition-opacity">
                hello@onboardvisa.com
              </a>.
            </p>
          </section>

          {/* Data We Collect */}
          <section>
            <h2 className="text-xl font-semibold mb-3">3. Data We Collect</h2>
            <p className="mb-3">We may collect and process the following categories of personal data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Identity data:</strong> Full name, nationality, date of birth, and passport or identification details where relevant to your visa application.
              </li>
              <li>
                <strong>Contact data:</strong> Email address, phone number, and postal address.
              </li>
              <li>
                <strong>Professional data:</strong> Employment history, qualifications, business information, and professional achievements relevant to visa eligibility.
              </li>
              <li>
                <strong>Application data:</strong> Documents, personal statements, business plans, evidence, and other materials you provide as part of your visa preparation.
              </li>
              <li>
                <strong>Communication data:</strong> Records of correspondence between you and OnboardVisa, including emails, session notes, and consultation records.
              </li>
              <li>
                <strong>Technical data:</strong> IP address, browser type, device information, and usage data collected through cookies and analytics tools when you visit our website.
              </li>
              <li>
                <strong>Payment data:</strong> Billing information processed through our third-party payment provider. We do not store full payment card details.
              </li>
            </ul>
          </section>

          {/* How We Use Your Data */}
          <section>
            <h2 className="text-xl font-semibold mb-3">4. How We Use Your Data</h2>
            <p className="mb-3">We use your personal data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide visa strategy consulting, endorsement preparation, and related immigration services.</li>
              <li>To communicate with you about your application, sessions, and our services.</li>
              <li>To schedule and manage consultation sessions (via Calendly or similar tools).</li>
              <li>To process payments and manage your account.</li>
              <li>To improve our website, services, and user experience.</li>
              <li>To comply with legal obligations and regulatory requirements.</li>
              <li>To send you service-related updates and, where you have opted in, marketing communications.</li>
            </ul>
          </section>

          {/* Legal Basis */}
          <section>
            <h2 className="text-xl font-semibold mb-3">5. Legal Basis for Processing</h2>
            <p className="mb-3">We process your personal data on the following legal grounds:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Contractual necessity:</strong> Processing is necessary to deliver the services you have engaged us for.
              </li>
              <li>
                <strong>Legitimate interests:</strong> Processing is necessary for our legitimate business interests, such as improving our services and communicating with prospective clients.
              </li>
              <li>
                <strong>Consent:</strong> Where you have given explicit consent, such as subscribing to marketing communications.
              </li>
              <li>
                <strong>Legal obligation:</strong> Processing is necessary to comply with applicable laws and regulations.
              </li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-xl font-semibold mb-3">6. Data Sharing</h2>
            <p className="mb-3">
              We do not sell your personal data to third parties. We may share your data with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Service providers:</strong> Third-party tools and platforms that support our operations, including scheduling (Calendly), analytics (Google Analytics), payment processing, and hosting services.
              </li>
              <li>
                <strong>Professional advisors:</strong> Legal, accounting, or compliance professionals where necessary.
              </li>
              <li>
                <strong>Legal authorities:</strong> Where required by law, regulation, or legal proceedings.
              </li>
            </ul>
            <p className="mt-3">
              All third-party providers are required to process your data securely and in accordance with applicable data protection laws.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-xl font-semibold mb-3">7. Data Retention</h2>
            <p>
              We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, including to satisfy legal, accounting, or reporting obligations. When your data is no longer required, we will securely delete or anonymise it.
            </p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-xl font-semibold mb-3">8. Data Security</h2>
            <p>
              We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. While no method of transmission or storage is completely secure, we take reasonable steps to ensure the security of your information.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-xl font-semibold mb-3">9. Your Rights</h2>
            <p className="mb-3">Under UK GDPR, you have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Right of access:</strong> Request a copy of the personal data we hold about you.
              </li>
              <li>
                <strong>Right to rectification:</strong> Request correction of inaccurate or incomplete data.
              </li>
              <li>
                <strong>Right to erasure:</strong> Request deletion of your personal data in certain circumstances.
              </li>
              <li>
                <strong>Right to restrict processing:</strong> Request that we limit how we use your data.
              </li>
              <li>
                <strong>Right to data portability:</strong> Request transfer of your data to another provider in a structured, machine-readable format.
              </li>
              <li>
                <strong>Right to object:</strong> Object to processing based on legitimate interests or for direct marketing.
              </li>
              <li>
                <strong>Right to withdraw consent:</strong> Where processing is based on consent, you may withdraw it at any time.
              </li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:hello@onboardvisa.com" className="underline hover:opacity-70 transition-opacity">
                hello@onboardvisa.com
              </a>.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-xl font-semibold mb-3">10. Cookies</h2>
            <p>
              Our website uses cookies and similar tracking technologies to enhance your experience and analyse site usage. Cookies are small text files stored on your device. You can manage cookie preferences through your browser settings. Disabling certain cookies may affect website functionality.
            </p>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-xl font-semibold mb-3">11. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of those external sites. We encourage you to review the privacy policies of any third-party services you interact with.
            </p>
          </section>

          {/* International Transfers */}
          <section>
            <h2 className="text-xl font-semibold mb-3">12. International Data Transfers</h2>
            <p>
              Some of our third-party service providers may process data outside the UK. Where this occurs, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses or adequacy decisions, to protect your personal data in accordance with UK GDPR.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-xl font-semibold mb-3">13. Changes to This Policy</h2>
            <p>
              We may update this Data Protection Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-semibold mb-3">14. Contact Us</h2>
            <p>
              If you have any questions about this Data Protection Policy or wish to exercise your data protection rights, please contact us:
            </p>
            <p className="mt-3">
              <strong>Email:</strong>{' '}
              <a href="mailto:hello@onboardvisa.com" className="underline hover:opacity-70 transition-opacity">
                hello@onboardvisa.com
              </a>
            </p>
            <p className="mt-6 text-sm text-gray-500">
              You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) if you believe your data protection rights have been violated. Visit{' '}
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-70 transition-opacity"
              >
                ico.org.uk
              </a>{' '}
              for more information.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
