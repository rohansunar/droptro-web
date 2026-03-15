import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Droptro',
  description:
    'Droptro Privacy Policy – Learn how we collect, use, and protect your personal information in compliance with applicable data protection laws.',
};

/**
 * Privacy Policy page component
 * Compliant with Google Play Console requirements and Indian IT Act, 2000 / PDPB standards.
 */
export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-2 text-4xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="mb-8 text-sm text-gray-500">
            <strong>Effective Date:</strong> March 15, 2026 &nbsp;|&nbsp;{' '}
            <strong>Last Updated:</strong> March 15, 2026
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed">

            {/* 1. Introduction */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">1. Introduction</h2>
              <p>
                Welcome to <strong>Droptro</strong> (&quot;Company&quot;, &quot;we&quot;,
                &quot;our&quot;, or &quot;us&quot;). Droptro is operated by{' '}
                <strong>Droptro Technology</strong>, located at Bhanu Nagar, Jalpaiguri,
                West Bengal, India – 735101.
              </p>
              <p className="mt-3">
                This Privacy Policy describes how we collect, use, disclose, store, and protect
                your personal information when you use our mobile applications (
                <strong>DroptroGo</strong> and <strong>Droptro Seller</strong>), website (
                <strong>droptro.com</strong>), and related services (collectively, the
                &quot;Services&quot;). By using our Services you agree to this Privacy Policy.
              </p>
            </section>

            {/* 2. Information We Collect */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                2. Information We Collect
              </h2>
              <p className="mb-3">
                We collect the following categories of personal information:
              </p>

              <h3 className="mb-2 text-lg font-semibold text-gray-800">
                a) Information You Provide Directly
              </h3>
              <ul className="list-disc space-y-1 pl-6">
                <li>Full name, phone number, and email address (account registration)</li>
                <li>Delivery address, pincode, and location coordinates</li>
                <li>Order details and purchase history</li>
                <li>Payment information (processed securely via Razorpay; we do not store card or UPI details)</li>
                <li>Messages or queries submitted via our contact form or support channels</li>
              </ul>

              <h3 className="mt-4 mb-2 text-lg font-semibold text-gray-800">
                b) Information Collected Automatically
              </h3>
              <ul className="list-disc space-y-1 pl-6">
                <li>Device identifiers (device model, OS version, unique device ID)</li>
                <li>IP address and approximate location</li>
                <li>App usage data (screens visited, features used, session duration)</li>
                <li>Crash logs and performance diagnostics</li>
                <li>Push notification tokens (for order and delivery alerts)</li>
              </ul>

              <h3 className="mt-4 mb-2 text-lg font-semibold text-gray-800">
                c) Location Data
              </h3>
              <p>
                Our apps request access to device location (GPS) to provide accurate delivery
                address detection and serviceability checks. Location is used only during active
                app sessions and is not tracked in the background unless you explicitly grant
                background location permission. You may deny location access; however, some
                features may not function correctly.
              </p>
            </section>

            {/* 3. How We Use Your Information */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>To create and manage your account</li>
                <li>To process and fulfil your orders and deliveries</li>
                <li>To send transactional communications (order confirmations, OTPs, delivery updates)</li>
                <li>To send push notifications for order status and promotions (you may opt out in app settings)</li>
                <li>To improve app performance, fix bugs, and develop new features</li>
                <li>To detect and prevent fraud, security threats, and policy violations</li>
                <li>To comply with applicable laws, regulations, and legal processes</li>
                <li>To respond to your support requests and queries</li>
              </ul>
            </section>

            {/* 4. Sharing Your Information */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                4. How We Share Your Information
              </h2>
              <p className="mb-3">
                We do <strong>not</strong> sell your personal information. We may share your
                information with:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Delivery Partners / Riders:</strong> Your name, address, and phone number
                  are shared with the assigned delivery rider to fulfil your order.
                </li>
                <li>
                  <strong>Payment Processor (Razorpay):</strong> Payment transactions are handled
                  by Razorpay. Their privacy policy is available at{' '}
                  <a
                    href="https://razorpay.com/privacy/"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    razorpay.com/privacy
                  </a>
                  .
                </li>
                <li>
                  <strong>Cloud Infrastructure:</strong> We use secure cloud services to host data
                  and run our backend systems.
                </li>
                <li>
                  <strong>Analytics:</strong> Aggregated, anonymised usage data may be shared with
                  analytics providers to improve our services.
                </li>
                <li>
                  <strong>Legal Compliance:</strong> We may disclose your information where required
                  by law, court order, or government authority.
                </li>
              </ul>
            </section>

            {/* 5. Data Retention */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">5. Data Retention</h2>
              <p>
                We retain your personal data for as long as your account is active or as needed to
                provide our services. If you request account deletion, we will delete or anonymise
                your data within <strong>30 days</strong>, except where retention is required by
                law (e.g., financial records retained for 7 years per Indian GST regulations).
              </p>
              <p className="mt-3">
                You may request deletion of your account and data by visiting{' '}
                <a href="/delete-data" className="text-blue-600 hover:underline">
                  droptro.com/delete-data
                </a>{' '}
                or emailing us at{' '}
                <a href="mailto:contact@droptro.com" className="text-blue-600 hover:underline">
                  contact@droptro.com
                </a>
                .
              </p>
            </section>

            {/* 6. Security */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">6. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your personal
                information, including:
              </p>
              <ul className="list-disc space-y-1 pl-6 mt-2">
                <li>HTTPS/TLS encryption for all data in transit</li>
                <li>Encrypted storage for sensitive data at rest</li>
                <li>Access controls and authentication for internal systems</li>
                <li>Regular security audits and vulnerability assessments</li>
              </ul>
              <p className="mt-3">
                No method of transmission over the internet is 100% secure. While we strive to
                protect your data, we cannot guarantee absolute security.
              </p>
            </section>

            {/* 7. Children's Privacy */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                7. Children&apos;s Privacy
              </h2>
              <p>
                Our Services are not directed to children under the age of <strong>13</strong>. We
                do not knowingly collect personal information from children under 13. If you
                believe a child has provided us with personal information, please contact us
                immediately and we will take steps to delete such information.
              </p>
            </section>

            {/* 8. Your Rights */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                8. Your Rights
              </h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Access the personal information we hold about you</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal data (subject to legal obligations)</li>
                <li>Withdraw consent for data processing where consent is the legal basis</li>
                <li>Opt out of promotional communications at any time</li>
                <li>Disable location access via your device settings</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, email us at{' '}
                <a href="mailto:contact@droptro.com" className="text-blue-600 hover:underline">
                  contact@droptro.com
                </a>
                .
              </p>
            </section>

            {/* 9. Third-Party Links */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">9. Third-Party Links</h2>
              <p>
                Our Services may contain links to third-party websites or services. We are not
                responsible for the privacy practices of those third parties. We encourage you to
                review their privacy policies before providing any personal information.
              </p>
            </section>

            {/* 10. Changes to This Policy */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                10. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of
                significant changes by updating the Effective Date at the top of this page and, for
                material changes, by sending an in-app notification or email. Your continued use of
                the Services after any changes constitutes your acceptance of the updated policy.
              </p>
            </section>

            {/* 11. Governing Law */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">11. Governing Law</h2>
              <p>
                This Privacy Policy is governed by and construed in accordance with the laws of
                India, including the Information Technology Act, 2000, and the Information
                Technology (Reasonable Security Practices and Procedures and Sensitive Personal
                Data or Information) Rules, 2011. Any disputes shall be subject to the exclusive
                jurisdiction of the courts in Jalpaiguri, West Bengal.
              </p>
            </section>

            {/* 12. Contact Us */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">12. Contact Us</h2>
              <p className="mb-2">
                For any questions, concerns, or requests regarding this Privacy Policy, please
                contact us:
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
