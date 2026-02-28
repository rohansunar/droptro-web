import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Droptro',
  description: 'Droptro Terms and Conditions - Read our terms of service.',
};

/**
 * Terms and Conditions page component
 * Displays the company's terms of service
 */
export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-4xl font-bold text-gray-900">Terms and Conditions</h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">1. Acceptance of Terms</h2>
              <p>
                By accessing and using Droptro&apos;s website and services, you accept and agree to be bound 
                by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">2. Description of Service</h2>
              <p>
                Droptro provides users with access to a rich collection of resources, including various 
                communications tools, forums, shopping services, personalized content, and branded 
                programming through its network of properties.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">3. User Registration</h2>
              <p>
                You agree to provide accurate and complete registration information and to keep this 
                information up-to-date. You are responsible for maintaining the confidentiality of 
                your account and password.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">4. User Conduct</h2>
              <p>
                You agree not to use the service to: upload, post, email, transmit, or otherwise make 
                available any content that is unlawful, harmful, threatening, abusive, harassing, 
                tortious, defamatory, vulgar, obscene, libelous, invasive of another&apos;s privacy.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">5. Limitation of Liability</h2>
              <p>
                In no event shall Droptro be liable for any indirect, incidental, special, consequential, 
                or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
                or other intangible losses.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">6. Contact Information</h2>
              <p>
                If you have any questions about these Terms and Conditions, please contact us at 
                support@droptro.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
