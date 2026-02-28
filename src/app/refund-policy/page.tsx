import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy | Droptro',
  description: 'Droptro Refund Policy - Learn about our refund and return policy.',
};

/**
 * Refund Policy page component
 * Displays the company's refund policy
 */
export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-4xl font-bold text-gray-900">Refund Policy</h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">1. Refund Eligibility</h2>
              <p>
                We want you to be completely satisfied with your purchase. If you&apos;re not satisfied 
                with your order, you may be eligible for a refund within 30 days of purchase.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">2. Refund Process</h2>
              <p>
                To request a refund, please contact our support team at support@droptro.com with your 
                order number and reason for the refund request. We&apos;ll review your request within 
                3-5 business days.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">3. Refund Methods</h2>
              <p>
                Refunds will be credited to the original payment method used for the purchase. 
                Please allow 5-10 business days for the refund to appear in your account.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">4. Digital Products</h2>
              <p>
                For digital products, refunds are available within 14 days of purchase if the product 
                has not been downloaded or accessed. Once a digital product has been downloaded, 
                it is considered used and may not be eligible for a refund.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">5. Subscription Services</h2>
              <p>
                For subscription services, you may cancel at any time. Refunds are not available for 
                partial billing periods. If you cancel, you will continue to have access until the 
                end of your current billing period.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">6. Contact Us</h2>
              <p>
                If you have any questions about our Refund Policy, please contact us at 
                support@droptro.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
