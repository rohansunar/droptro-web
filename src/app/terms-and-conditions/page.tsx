import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Droptro',
  description:
    'Droptro Terms & Conditions – Read our terms of service governing the use of our platform, mobile apps, and services.',
};

/**
 * Terms & Conditions page component
 * Compliant with Google Play Console requirements and Indian consumer laws.
 */
export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-2 text-4xl font-bold text-gray-900">Terms &amp; Conditions</h1>
          <p className="mb-8 text-sm text-gray-500">
            <strong>Effective Date:</strong> March 15, 2026 &nbsp;|&nbsp;{' '}
            <strong>Last Updated:</strong> March 15, 2026
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed">

            {/* 1. Acceptance */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                1. Acceptance of Terms
              </h2>
              <p>
                By downloading, installing, or using any of Droptro&apos;s applications (
                <strong>DroptroGo</strong>, <strong>Droptro Seller</strong>) or visiting our
                website (<strong>droptro.com</strong>), you agree to be legally bound by these
                Terms &amp; Conditions (&quot;Terms&quot;). If you do not agree, please do not
                use our Services.
              </p>
              <p className="mt-3">
                These Terms form a legally binding agreement between you and{' '}
                <strong>Droptro Technology</strong>, Bhanu Nagar, Jalpaiguri, West Bengal,
                India – 735101.
              </p>
            </section>

            {/* 2. Description of Service */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                2. Description of Services
              </h2>
              <p>
                Droptro is an online platform that connects customers with local water jar and
                essential goods vendors for home delivery. Our Services include:
              </p>
              <ul className="list-disc space-y-2 pl-6 mt-3">
                <li>
                  <strong>DroptroGo:</strong> Customer-facing mobile application for browsing
                  vendors, placing orders, tracking deliveries, and managing accounts.
                </li>
                <li>
                  <strong>Droptro Seller:</strong> Vendor/seller-facing mobile application for
                  managing products, accepting orders, and coordinating deliveries.
                </li>
                <li>
                  <strong>droptro.com:</strong> Website providing information about the platform
                  and access to support.
                </li>
              </ul>
            </section>

            {/* 3. Eligibility */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">3. Eligibility</h2>
              <p>To use our Services, you must:</p>
              <ul className="list-disc space-y-2 pl-6 mt-3">
                <li>Be at least <strong>18 years of age</strong> or using the Services under parental/guardian supervision.</li>
                <li>Be legally capable of entering into a binding contract under Indian law.</li>
                <li>Provide accurate and truthful registration information.</li>
                <li>Not have been previously suspended or removed from our platform.</li>
              </ul>
            </section>

            {/* 4. User Accounts */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">4. User Accounts</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  You are responsible for maintaining the confidentiality of your account
                  credentials (phone number, OTP, password).
                </li>
                <li>
                  You are responsible for all activities that occur under your account.
                </li>
                <li>
                  You must immediately notify us at{' '}
                  <a href="mailto:contact@droptro.com" className="text-blue-600 hover:underline">
                    contact@droptro.com
                  </a>{' '}
                  of any unauthorised use of your account.
                </li>
                <li>
                  Sharing your account with another person or creating multiple accounts for
                  fraudulent purposes is prohibited.
                </li>
              </ul>
            </section>

            {/* 5. Orders & Payments */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                5. Orders &amp; Payments
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  All prices listed on the platform are in <strong>Indian Rupees (INR)</strong>{' '}
                  and include applicable taxes unless otherwise stated.
                </li>
                <li>
                  Payments are processed securely through{' '}
                  <strong>Razorpay</strong>. We do not store your card or UPI credentials.
                </li>
                <li>
                  An order is confirmed only after successful payment processing and seller
                  acceptance.
                </li>
                <li>
                  We reserve the right to cancel orders due to pricing errors, stock
                  unavailability, or suspected fraud.
                </li>
                <li>
                  For refunds and cancellations, please refer to our{' '}
                  <a href="/refund-policy" className="text-blue-600 hover:underline">
                    Refund &amp; Cancellation Policy
                  </a>
                  .
                </li>
              </ul>
            </section>

            {/* 6. Delivery */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">6. Delivery</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Delivery timelines are estimates and may vary due to traffic, weather,
                  vendor availability, or other factors beyond our control.
                </li>
                <li>
                  Customers must ensure someone is available at the delivery address to receive
                  the order. If delivery fails due to customer unavailability, Droptro is not
                  liable for re-delivery costs.
                </li>
                <li>
                  Delivery is currently available only in selected serviceable areas. Pincode
                  serviceability is checked at the time of order placement.
                </li>
              </ul>
            </section>

            {/* 7. Prohibited Conduct */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                7. Prohibited Conduct
              </h2>
              <p className="mb-3">You agree not to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Use the Services for any unlawful purpose or in violation of these Terms</li>
                <li>Attempt to decompile, reverse-engineer, or tamper with our apps</li>
                <li>Place fraudulent orders or manipulate pricing</li>
                <li>Harass, abuse, or harm other users, vendors, or delivery partners</li>
                <li>Submit false reviews, ratings, or complaints</li>
                <li>Use automated bots, scrapers, or scripts to access our platform</li>
                <li>Interfere with the security or integrity of our systems</li>
              </ul>
              <p className="mt-3">
                Violation of this section may result in immediate account suspension and legal
                action.
              </p>
            </section>

            {/* 8. Intellectual Property */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                8. Intellectual Property
              </h2>
              <p>
                All content on Droptro including logos, trademarks, software, design, text, and
                images are the exclusive property of <strong>Droptro Technology</strong> or its
                licensors. You may not reproduce, distribute, modify, or create derivative works
                without our prior written consent.
              </p>
            </section>

            {/* 9. Third-Party Services */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                9. Third-Party Services
              </h2>
              <p>
                Our platform integrates with third-party services including Razorpay (payments),
                Google Maps (location), and cloud providers. Use of these services is subject to
                their respective terms. Droptro is not liable for issues arising from third-party
                services.
              </p>
            </section>

            {/* 10. Disclaimer of Warranties */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                10. Disclaimer of Warranties
              </h2>
              <p>
                Our Services are provided on an &quot;as is&quot; and &quot;as available&quot;
                basis without any warranty of any kind, express or implied. We do not warrant
                that the Services will be uninterrupted, error-free, or free of viruses. Use of
                the Services is at your own risk.
              </p>
            </section>

            {/* 11. Limitation of Liability */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                11. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, Droptro Technology shall not
                be liable for any indirect, incidental, special, consequential, or punitive
                damages, including loss of profits, data, goodwill, or business interruption,
                arising out of or in connection with your use of the Services.
              </p>
              <p className="mt-3">
                Our total liability to you for any claim shall not exceed the amount paid by you
                for the specific order giving rise to the claim.
              </p>
            </section>

            {/* 12. Indemnification */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">12. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Droptro Technology, its directors,
                employees, and partners from any claims, damages, or expenses (including legal
                fees) arising from your use of the Services or violation of these Terms.
              </p>
            </section>

            {/* 13. Termination */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">13. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your account at any time, with or
                without notice, for violation of these Terms or for any other reason at our sole
                discretion. You may delete your account at any time via the app settings or by
                contacting us.
              </p>
            </section>

            {/* 14. Modifications */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                14. Changes to These Terms
              </h2>
              <p>
                We may revise these Terms at any time. Material changes will be communicated via
                in-app notification or email. Continued use of the Services after changes
                constitutes acceptance of the revised Terms.
              </p>
            </section>

            {/* 15. Governing Law */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">15. Governing Law</h2>
              <p>
                These Terms are governed by the laws of India. Any disputes arising from these
                Terms shall be subject to the exclusive jurisdiction of the competent courts in{' '}
                <strong>Jalpaiguri, West Bengal, India</strong>. Consumer disputes may also be
                referred to the appropriate Consumer Disputes Redressal Forum under the Consumer
                Protection Act, 2019.
              </p>
            </section>

            {/* 16. Contact */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                16. Contact Information
              </h2>
              <p className="mb-2">
                For questions or concerns regarding these Terms, contact us at:
              </p>
              <address className="not-italic space-y-1 text-gray-700">
                <p>
                  <strong>Droptro Technology</strong>
                </p>
                <p>Bhanu Nagar, Jalpaiguri, West Bengal, India – 735101</p>
                <p>
                  Email:{' '}
                  <a href="mailto:contact@droptro.com" className="text-blue-600 hover:underline">
                    contact@droptro.com
                  </a>
                </p>
                <p>
                  Phone:{' '}
                  <a href="tel:+919474393764" className="text-blue-600 hover:underline">
                    +91 94743-93764
                  </a>
                </p>
              </address>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
