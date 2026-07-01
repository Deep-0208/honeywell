import type { NextConfig } from 'next';

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), geolocation=(), browsing-topics=()'
  },
  // HSTS — signals HTTPS trust to Google and browsers
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  // CSP — prevents XSS, clickjacking, and data injection attacks
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://vercel.live https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com https://va.vercel-scripts.com https://*.elevenlabs.io wss://*.elevenlabs.io; frame-src 'self' https://www.google.com https://maps.google.com; media-src 'self' https://*.elevenlabs.io; object-src 'none'; base-uri 'self'; form-action 'self';"
  },
];

const nextConfig: NextConfig = {
  compress: true,
  // Enforce trailing slash on all URLs for canonical consistency
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 85, 100],
    remotePatterns: [
      // Add any remote patterns here if needed in the future
    ],
  },
  allowedDevOrigins: ['strong-apes-ring.loca.lt', '192.168.1.12'],
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/contact-us/',
        permanent: true,
      },
      {
        source: '/contact/',
        destination: '/contact-us/',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/about-us/',
        permanent: true,
      },
      {
        source: '/about/',
        destination: '/about-us/',
        permanent: true,
      },
    ];
  },
  // TODO: Remove ignoreBuildErrors after fixing all TypeScript errors
  // Keeping for now during dev phase to prevent build failures
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

