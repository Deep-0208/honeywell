import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { COMPANY_INFO, SEO_DEFAULTS } from '@/lib/constants';
import './globals.css';
import { Agentation } from 'agentation';
import { ElevenLabsWidget } from '@/components/ElevenLabsWidget';
import JsonLd from '@/components/seo/JsonLd';
import { Poppins, Roboto } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
  display: 'swap',
});

/* ── Global Metadata (from SEO_ARCHITECTURE.md) ── */
export const metadata: Metadata = {
  title: {
    template: `%s | ${COMPANY_INFO.name}`,
    default: SEO_DEFAULTS.title,
  },
  description: SEO_DEFAULTS.description,
  metadataBase: new URL(COMPANY_INFO.websiteUrl),
  openGraph: {
    title: {
      template: `%s | ${COMPANY_INFO.name}`,
      default: SEO_DEFAULTS.title,
    },
    description: SEO_DEFAULTS.description,
    url: COMPANY_INFO.websiteUrl,
    siteName: COMPANY_INFO.name,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: SEO_DEFAULTS.ogImage,
        width: 1200,
        height: 630,
        alt: COMPANY_INFO.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      template: `%s | ${COMPANY_INFO.name}`,
      default: SEO_DEFAULTS.title,
    },
    description: SEO_DEFAULTS.description,
    images: [SEO_DEFAULTS.ogImage],
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification tag here via env var
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export const viewport: Viewport = {
  themeColor: COMPANY_INFO.themeColor,
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5, // Allow zooming for accessibility
  interactiveWidget: 'resizes-content', // Prevents CLS when mobile keyboard opens
};

/**
 * Root Layout
 * 
 * Sets up global HTML shell, fonts, metadata, and analytics.
 * The visual UI layout (Header, Footer) is handled in app/(site)/layout.tsx.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
      lang="en-IN"
      className={`scroll-smooth poppins-regular ${poppins.variable} ${roboto.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Fonts are now handled by next/font/google */}
      </head>
      <body className="antialiased flex min-h-screen flex-col bg-white selection:bg-[#B2D4FF] selection:text-black">
        {/* Global JSON-LD Schema */}
        <JsonLd
          data={[
            {
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: COMPANY_INFO.name,
              url: COMPANY_INFO.websiteUrl,
              logo: `${COMPANY_INFO.websiteUrl}/images/logos/long-size-logohydralics-logo.png`,
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: COMPANY_INFO.phone,
                contactType: 'sales',
                areaServed: 'IN',
                availableLanguage: ['English', 'Hindi'],
              },
              address: {
                '@type': 'PostalAddress',
                ...COMPANY_INFO.address,
              },
              sameAs: Object.values(COMPANY_INFO.socialUrls),
            },
            {
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: COMPANY_INFO.name,
              url: COMPANY_INFO.websiteUrl,
            },
          ]}
        />
        {children}
        <Analytics />
        <SpeedInsights />
        {/* Google Analytics — afterInteractive prevents render-blocking */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script
              id="ga-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { page_path: window.location.pathname });
                `,
              }}
            />
          </>
        )}
        {process.env.NODE_ENV === 'development' && <Agentation />}
        <ElevenLabsWidget />
      </body>
    </html>
  );
}
