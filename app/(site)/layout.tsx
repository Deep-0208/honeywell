import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MobileConversionBar } from '@/components/MobileConversionBar';
import JsonLd from '@/components/seo/JsonLd';
import { buildOrganizationJsonLd } from '@/lib/seo';
import { getDynamicNavigation } from '@/lib/navigation';

/**
 * Site Layout (app/(site)/layout.tsx)
 *
 * Provides the visual shell for all public-facing pages:
 * - Skip to content link (Accessibility)
 * - Global Header
 * - Main content wrapper
 * - Global Footer
 * - Mobile Conversion Bar (Call / WhatsApp / Quote)
 * - Organization JSON-LD Schema (SEO)
 */
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = buildOrganizationJsonLd();
  const navigationData = getDynamicNavigation();

  return (
    <>
      <JsonLd data={orgSchema} />

      {/* Accessibility: Skip to Main Content */}
      <a
        href="#main-content"
        className="
          sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100]
          focus:px-4 focus:py-2
          focus:bg-[#0D1B5C] focus:text-white focus:font-medium
          focus:rounded-sm focus:outline-none focus:ring-2 focus:ring-[#E31B23] focus:ring-offset-2
          font-body text-sm
        "
      >
        Skip to main content
      </a>

      {/* Global Header */}
      <Header navigation={navigationData} />

      {/* Main Content Area */}
      <main
        id="main-content"
        className="flex-1 flex flex-col w-full focus:outline-none"
        tabIndex={-1}
      >
        {children}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Mobile Sticky Conversion Bar — Call / WhatsApp / Quote */}
      <MobileConversionBar />
    </>
  );
}

