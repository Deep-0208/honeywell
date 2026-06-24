import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { COMPANY_INFO, SEO_DEFAULTS } from '@/lib/constants';
import './globals.css';
import { Agentation } from 'agentation';

/* ── Global Metadata (from SEO_ARCHITECTURE.md) ── */
export const metadata: Metadata = {
  title: {
    template: `%s | ${COMPANY_INFO.name}`,
    default: SEO_DEFAULTS.title,
  },
  description: SEO_DEFAULTS.description,
  metadataBase: new URL(COMPANY_INFO.websiteUrl),
  alternates: {},
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
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
      className="scroll-smooth poppins-regular"
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased flex min-h-screen flex-col bg-white selection:bg-[#B2D4FF] selection:text-black">
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
      </body>
    </html>
  );
}
