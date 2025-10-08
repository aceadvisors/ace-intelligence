import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-1 min-h-screen px-6 bg-gradient-to-br from-green-50 via-white to-blue-50 flex flex-col items-center justify-center text-center">
      {/* 404 Number */}
      <div className="mb-8">
        <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-green-600 drop-shadow-lg">
          404
        </h1>
      </div>

      {/* Message */}
      <div className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/80 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-green-900 hover:bg-green-800 text-white px-8 py-3 rounded-lg text-base md:text-lg transition shadow-md hover:shadow-lg hover:-translate-y-1"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="bg-white/80 backdrop-blur-sm hover:bg-white text-green-900 px-8 py-3 rounded-lg text-base md:text-lg transition shadow-md hover:shadow-lg hover:-translate-y-1 border border-green-900"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Helpful Links */}
      <div className="mt-12 bg-white/40 backdrop-blur-md p-6 rounded-xl border border-white/60 shadow-lg max-w-xl">
        <p className="text-gray-700 font-semibold mb-4">You might want to visit:</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/explore" className="text-green-900 hover:underline font-medium">
            Explore
          </Link>
          <span className="text-gray-400">•</span>
          <Link href="/features" className="text-green-900 hover:underline font-medium">
            Features
          </Link>
          <span className="text-gray-400">•</span>
          <Link href="/pricing" className="text-green-900 hover:underline font-medium">
            Pricing
          </Link>
        </div>
      </div>
    </main>
  );
}
