import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Droptro',
  description: 'Droptro Privacy Policy - Learn how we collect, use, and protect your personal information.',
};

/**
 * Privacy Policy page component
 * Displays the company's privacy policy
 */
export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-4xl font-bold text-gray-900">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">1. Introduction</h2>
              <p>
                At Droptro, we take your privacy seriously. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">2. Information We Collect</h2>
              <p>
                We may collect personal information that you voluntarily provide to us when you register 
                on the website, express an interest in obtaining information about us or our products and services.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">3. How We Use Your Information</h2>
              <p>
                We use personal information collected via our website for a variety of business purposes 
                described below. We process your personal information for these purposes in reliance on 
                our legitimate business interests.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">4. Sharing Your Information</h2>
              <p>
                We only share information with the following third parties: data analytics services, 
                marketing and advertising platforms, and cloud computing services.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">5. Contact Us</h2>
              <p>
                If you have questions or comments about this policy, you may email us at support@droptro.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
