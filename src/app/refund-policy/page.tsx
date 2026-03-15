import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy | Droptro',
  description:
    'Droptro Refund & Cancellation Policy – Understand how order cancellations and payment refunds are processed via Razorpay.',
};

/**
 * Refund & Cancellation Policy page
 * Aligned with Razorpay refund guidelines and Google Play Console requirements.
 */
export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-2 text-4xl font-bold text-gray-900">
            Refund &amp; Cancellation Policy
          </h1>
          <p className="mb-8 text-sm text-gray-500">
            <strong>Effective Date:</strong> March 15, 2026 &nbsp;|&nbsp;{' '}
            <strong>Last Updated:</strong> March 15, 2026
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed">

            {/* 1. Overview */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">1. Overview</h2>
              <p>
                This Refund &amp; Cancellation Policy applies to all orders placed through the
                Droptro platform — including the <strong>Droptro</strong> customer app,{' '}
                <strong>Droptro Seller</strong> vendor app, <strong>DroptroGo</strong> rider app,
                and our website (
                <strong>droptro.com</strong>). We are committed to a transparent and fair refund
                process in accordance with{' '}
                <a
                  href="https://razorpay.com/docs/payments/refunds/"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Razorpay&apos;s Refund Guidelines
                </a>{' '}
                and applicable Indian consumer protection laws.
              </p>
            </section>

            {/* 2. Order Cancellation */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                2. Order Cancellation
              </h2>

              <h3 className="mb-2 text-lg font-semibold text-gray-800">a) Cancellation by Customer</h3>
              <ul className="list-disc space-y-2 pl-6 mb-4">
                <li>
                  Orders may be cancelled <strong>before they are accepted by a seller/vendor</strong>{' '}
                  without any charges. A full refund will be initiated immediately.
                </li>
                <li>
                  Once an order has been accepted and is being prepared or is out for delivery,
                  cancellation is <strong>not permitted</strong>.
                </li>
                <li>
                  To cancel your order, go to <em>My Orders → Select Order → Cancel Order</em>{' '}
                  within the Droptro app.
                </li>
              </ul>

              <h3 className="mb-2 text-lg font-semibold text-gray-800">b) Cancellation by Droptro or Seller</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  If an order is cancelled by us or the seller (e.g., item out of stock, delivery
                  not serviceable), a <strong>full refund</strong> will be processed automatically.
                </li>
                <li>
                  You will be notified via the app and/or SMS/email about the cancellation and
                  refund initiation.
                </li>
              </ul>
            </section>

            {/* 3. Refund Eligibility */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                3. Refund Eligibility
              </h2>
              <p className="mb-3">You are eligible for a refund in the following situations:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Order cancelled before seller acceptance</li>
                <li>Order cancelled by seller or Droptro due to unavailability</li>
                <li>Wrong item or quantity delivered</li>
                <li>Damaged, defective, or tampered product delivered</li>
                <li>Order not delivered within the promised time and subsequently cancelled</li>
                <li>Duplicate payment or overcharge due to technical error</li>
              </ul>
              <p className="mt-4">
                Refund requests for delivered orders must be raised within{' '}
                <strong>24 hours of delivery</strong> by contacting our support team.
              </p>
            </section>

            {/* 4. Non-Refundable Situations */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                4. Non-Refundable Situations
              </h2>
              <p className="mb-3">Refunds will <strong>not</strong> be issued for:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Orders cancelled after seller acceptance and preparation has begun</li>
                <li>Customer-initiated cancellations once the order is out for delivery</li>
                <li>Change of mind after successful delivery</li>
                <li>Incorrect delivery address provided by the customer leading to non-delivery</li>
                <li>Products consumed or partially used before raising a complaint</li>
              </ul>
            </section>

            {/* 5. Refund Process */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                5. Refund Process
              </h2>
              <p className="mb-3">
                All payments on Droptro are processed through{' '}
                <strong>Razorpay Payment Gateway</strong>. Refunds are initiated via Razorpay and
                credited back to your original payment method.
              </p>

              <h3 className="mb-2 text-lg font-semibold text-gray-800">How to Request a Refund</h3>
              <ol className="list-decimal space-y-2 pl-6 mb-4">
                <li>
                  Open the <strong>Droptro</strong> app and go to <em>My Orders</em>.
                </li>
                <li>Select the relevant order and tap <em>Report an Issue</em>.</li>
                <li>Describe the issue and submit your refund request.</li>
                <li>
                  Alternatively, email us at{' '}
                  <a href="mailto:contact@droptro.com" className="text-blue-600 hover:underline">
                    contact@droptro.com
                  </a>{' '}
                  with your Order ID, phone number, and issue description.
                </li>
              </ol>

              <h3 className="mb-2 text-lg font-semibold text-gray-800">Refund Review</h3>
              <p>
                We will review your refund request within <strong>2–3 business days</strong> and
                notify you of the decision via email or in-app notification.
              </p>
            </section>

            {/* 6. Refund Timelines */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                6. Refund Timelines
              </h2>
              <p className="mb-4">
                Once approved, refunds are processed through Razorpay. Typical timelines are as
                follows (as per Razorpay&apos;s standard processing windows):
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">
                        Payment Method
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">
                        Refund Timeline
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">UPI (Google Pay, PhonePe, BHIM, etc.)</td>
                      <td className="border border-gray-300 px-4 py-2">Instant – 2 business days</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Debit Card</td>
                      <td className="border border-gray-300 px-4 py-2">5–7 business days</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Credit Card</td>
                      <td className="border border-gray-300 px-4 py-2">5–7 business days</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Net Banking</td>
                      <td className="border border-gray-300 px-4 py-2">5–7 business days</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Wallets (Paytm, Mobikwik, etc.)</td>
                      <td className="border border-gray-300 px-4 py-2">Instant – 1 business day</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Cash on Delivery (COD)</td>
                      <td className="border border-gray-300 px-4 py-2">Not applicable (no online payment)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                * Timelines may vary based on the bank&apos;s processing speed. Droptro is not
                responsible for bank-side delays.
              </p>
            </section>

            {/* 7. Partial Refunds */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">7. Partial Refunds</h2>
              <p>
                In cases where only part of an order is affected (e.g., one item out of several is
                missing or damaged), a partial refund proportional to the affected item(s) value
                will be issued, including any applicable taxes and delivery charges attributable to
                that item.
              </p>
            </section>

            {/* 8. Failed Transactions */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                8. Failed / Duplicate Transactions
              </h2>
              <p>
                If a payment is deducted from your account but the order is not placed (due to a
                technical failure), the amount will be automatically reversed to your account via
                Razorpay within <strong>5–7 business days</strong>. If you do not receive the
                reversal, please contact us with your transaction reference number.
              </p>
            </section>

            {/* 9. Contact */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                9. Contact Us
              </h2>
              <p className="mb-2">
                For refund or cancellation queries, please reach us at:
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
                <p>
                  Support Hours: Monday – Saturday, 9:00 AM – 6:00 PM (IST)
                </p>
              </address>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
