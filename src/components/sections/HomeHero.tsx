'use client';

/**
 * HomeHero Component
 * Main hero section for the Droptro home page with Google Play Store download CTA
 * Features the headline "Your Water Delivery Solution" with app feature highlights
 */
export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 md:py-28 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="water-drop"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="30" cy="30" r="8" fill="#3B82F6" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#water-drop)" />
        </svg>
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Your Water Delivery{' '}
            <span className="text-blue-600">Solution</span>
          </h1>

          {/* Subheadline */}
          <p className="mb-8 text-lg text-gray-600 md:text-xl lg:text-2xl">
            Order water from nearby vendors with the <strong>Droptro</strong> customer app.
            <br className="hidden md:block" />
            Vendors use <strong>Droptro Seller</strong>. Delivery partners use{' '}
            <strong>DroptroGo</strong>.
          </p>

          {/* Google Play Store Buttons */}
          <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* Customer App */}
            <a
              href="https://play.google.com/store/apps/details?id=com.droptro.customer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl bg-gray-900 px-6 py-3 text-white transition-transform hover:scale-105 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-400">Customers — Download on</div>
                <div className="text-lg font-semibold leading-none">Google Play</div>
              </div>
            </a>
            {/* Seller App */}
            <a
              href="https://play.google.com/store/apps/details?id=com.droptro.seller"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border-2 border-gray-900 px-6 py-3 text-gray-900 transition-transform hover:scale-105 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-500">Vendors — Download on</div>
                <div className="text-lg font-semibold leading-none">Google Play</div>
              </div>
            </a>
          </div>

          {/* App Features Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-600">
            <span className="inline-flex items-center rounded-full bg-white px-4 py-2 shadow-sm">
              <span className="mr-2 text-blue-600">✓</span>
              Quick Ordering
            </span>
            <span className="inline-flex items-center rounded-full bg-white px-4 py-2 shadow-sm">
              <span className="mr-2 text-blue-600">✓</span>
              Real-time Tracking
            </span>
            <span className="inline-flex items-center rounded-full bg-white px-4 py-2 shadow-sm">
              <span className="mr-2 text-blue-600">✓</span>
              Secure Payments
            </span>
            <span className="inline-flex items-center rounded-full bg-white px-4 py-2 shadow-sm">
              <span className="mr-2 text-blue-600">✓</span>
              Subscription Support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
