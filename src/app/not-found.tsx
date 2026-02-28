import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-16">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-10 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          404 — Page Not Found
        </p>
        <h1 className="mt-3 text-4xl font-bold text-gray-900">We couldn’t find that page</h1>
        <p className="mt-4 text-base text-gray-600">
          The link may be broken or the page may have been moved. Check the URL or go back home.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
          >
            Go to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-700 transition-colors duration-200 hover:border-blue-200 hover:text-blue-700"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </main>
  );
}
