'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RefreshCw, Home, ArrowRight } from 'lucide-react';

/**
 * Error Boundary for the (site) route group.
 *
 * Displayed when an unexpected runtime error occurs.
 * Next.js requires error.tsx to be a Client Component.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh] px-4 py-16 text-center">
      {/* Logo */}
      <Link href="/" className="mb-8 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-navy focus-visible:rounded-sm">
        <Image
          src="/images/logos/long-size-logohydralics-logo.png"
          alt="Honeywell Hydraulics"
          width={240}
          height={60}
          className="h-14 md:h-16 w-auto mx-auto"
          priority
        />
      </Link>

      {/* Error indicator */}
      <div
        className="w-16 h-16 rounded-full bg-honeywell-red/10 flex items-center justify-center mb-6"
        aria-hidden="true"
      >
        <span className="text-3xl font-bold text-honeywell-red font-display">!</span>
      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold font-display text-honeywell-navy mb-3">
        Something Went Wrong
      </h1>

      <p className="text-brand-steelGray font-body max-w-md mb-2 text-justify">
        An unexpected error occurred. Our team has been notified.
      </p>

      {/* Error digest for support reference */}
      {error.digest && (
        <p className="text-xs font-mono text-[#94A3B8] mb-8 bg-brand-surfaceGray px-3 py-1 rounded-sm border border-slate-200 text-justify">
          Reference: {error.digest}
        </p>
      )}

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 mt-6">
        <button
          type="button"
          onClick={reset}
          className="
            inline-flex items-center justify-center gap-2
            px-5 py-2.5 rounded-sm
            bg-honeywell-navy text-white text-sm font-semibold font-body
            hover:bg-[#0a154a] transition-colors duration-150
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-navy focus-visible:ring-offset-2
          "
        >
          <RefreshCw className="w-4 h-4" aria-hidden="true" />
          Try Again
        </button>

        <Link
          href="/"
          className="
            inline-flex items-center justify-center gap-2
            px-5 py-2.5 rounded-sm
            border-2 border-honeywell-navy text-honeywell-navy text-sm font-semibold font-body
            hover:bg-honeywell-navy hover:text-white transition-colors duration-150
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-navy focus-visible:ring-offset-2
          "
        >
          <Home className="w-4 h-4" aria-hidden="true" />
          Go to Homepage
        </Link>

        <Link
          href="/contact-us"
          className="
            inline-flex items-center justify-center gap-2
            px-5 py-2.5 rounded-sm
            bg-honeywell-red text-white text-sm font-semibold font-body
            hover:bg-red-700 transition-colors duration-150
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-red focus-visible:ring-offset-2
          "
        >
          Contact Support
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>

      {/* Support contact */}
      <p className="mt-10 text-sm text-[#94A3B8] font-body text-justify">
        Need immediate help?{' '}
        <a
          href="tel:+91-9924343873"
          className="text-honeywell-navy hover:text-honeywell-red font-medium transition-colors"
        >
          Call +91 99243 43873
        </a>
      </p>
    </div>
  );
}

