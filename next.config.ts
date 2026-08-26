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
    value: 'camera=(), geolocation=(), browsing-topics=(), microphone=(self)'
  },
  // HSTS — signals HTTPS trust to Google and browsers
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  // CSP — prevents XSS, clickjacking, and data injection attacks
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: https://www.googletagmanager.com https://www.google-analytics.com https://vercel.live https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com https://va.vercel-scripts.com https://*.elevenlabs.io wss://*.elevenlabs.io; frame-src 'self' https://www.google.com https://maps.google.com; media-src 'self' blob: https://*.elevenlabs.io; worker-src 'self' blob:; object-src 'none'; base-uri 'self'; form-action 'self';"
  },
];

const nextConfig: NextConfig = {
  compress: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
  // Enforce trailing slash on all URLs for canonical consistency
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 85, 100],
    remotePatterns: [
      // Add any remote patterns here if needed in the future
    ],
  },
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
      // ── Core Pages ──
      { source: '/contact', destination: '/contact-us/', permanent: true },
      { source: '/contact/', destination: '/contact-us/', permanent: true },
      { source: '/about', destination: '/about-us/', permanent: true },
      { source: '/about/', destination: '/about-us/', permanent: true },
      { source: '/infrastructure', destination: '/manufacturing-facility/', permanent: true },
      { source: '/infrastructure/', destination: '/manufacturing-facility/', permanent: true },
      { source: '/clients', destination: '/about-us/', permanent: true },
      { source: '/clients/', destination: '/about-us/', permanent: true },
      { source: '/downloads', destination: '/request-quote/', permanent: true },
      { source: '/downloads/', destination: '/request-quote/', permanent: true },
      { source: '/industry-we-serve', destination: '/products/', permanent: true },
      { source: '/industry-we-serve/', destination: '/products/', permanent: true },

      // ── Legacy Hydraulic Cylinders ──
      { source: '/hydraulic-cylinder', destination: '/products/hydraulic-cylinders/', permanent: true },
      { source: '/hydraulic-cylinder/', destination: '/products/hydraulic-cylinders/', permanent: true },
      { source: '/hydraulic-cylinder-flange-mounting', destination: '/products/hydraulic-cylinders/flange-mounted-hydraulic-cylinder/', permanent: true },
      { source: '/hydraulic-cylinder-flange-mounting/', destination: '/products/hydraulic-cylinders/flange-mounted-hydraulic-cylinder/', permanent: true },
      { source: '/hydraulic-cylinder-clevis-mounting', destination: '/products/hydraulic-cylinders/clevis-mounted-hydraulic-cylinder/', permanent: true },
      { source: '/hydraulic-cylinder-clevis-mounting/', destination: '/products/hydraulic-cylinders/clevis-mounted-hydraulic-cylinder/', permanent: true },
      { source: '/hydraulic-cylinder-trunnion-mounting', destination: '/products/hydraulic-cylinders/trunnion-mounted-hydraulic-cylinder/', permanent: true },
      { source: '/hydraulic-cylinder-trunnion-mounting/', destination: '/products/hydraulic-cylinders/trunnion-mounted-hydraulic-cylinder/', permanent: true },
      { source: '/hydraulic-cylinder-for-car-parking', destination: '/products/hydraulic-cylinders/car-parking-hydraulic-cylinders/', permanent: true },
      { source: '/hydraulic-cylinder-for-car-parking/', destination: '/products/hydraulic-cylinders/car-parking-hydraulic-cylinders/', permanent: true },
      { source: '/hydraulic-cylinder-for-goods-lift', destination: '/products/hydraulic-cylinders/goods-lift-hydraulic-cylinders/', permanent: true },
      { source: '/hydraulic-cylinder-for-goods-lift/', destination: '/products/hydraulic-cylinders/goods-lift-hydraulic-cylinders/', permanent: true },
      { source: '/hydraulic-cylinder-for-passenger-lift', destination: '/products/hydraulic-cylinders/goods-lift-hydraulic-cylinders/', permanent: true },
      { source: '/hydraulic-cylinder-for-passenger-lift/', destination: '/products/hydraulic-cylinders/goods-lift-hydraulic-cylinders/', permanent: true },
      { source: '/hydraulic-cylinder-for-press', destination: '/products/hydraulic-cylinders/custom-hydraulic-cylinders/', permanent: true },
      { source: '/hydraulic-cylinder-for-press/', destination: '/products/hydraulic-cylinders/custom-hydraulic-cylinders/', permanent: true },
      { source: '/hydraulic-cylinder-for-scissor-table', destination: '/products/hydraulic-cylinders/scissor-lift-table-hydraulic-cylinder/', permanent: true },
      { source: '/hydraulic-cylinder-for-scissor-table/', destination: '/products/hydraulic-cylinders/scissor-lift-table-hydraulic-cylinder/', permanent: true },
      { source: '/hydraulic-tie-rod-cylinder', destination: '/products/hydraulic-cylinders/tie-rod-hydraulic-cylinders/', permanent: true },
      { source: '/hydraulic-tie-rod-cylinder/', destination: '/products/hydraulic-cylinders/tie-rod-hydraulic-cylinders/', permanent: true },
      { source: '/double-acting-hydraulic-cylinder', destination: '/products/hydraulic-cylinders/double-acting-hydraulic-cylinders/', permanent: true },
      { source: '/double-acting-hydraulic-cylinder/', destination: '/products/hydraulic-cylinders/double-acting-hydraulic-cylinders/', permanent: true },
      { source: '/single-acting-hydraulic-cylinders', destination: '/products/hydraulic-cylinders/single-acting-hydraulic-cylinders/', permanent: true },
      { source: '/single-acting-hydraulic-cylinders/', destination: '/products/hydraulic-cylinders/single-acting-hydraulic-cylinders/', permanent: true },
      { source: '/telescopic-hydraulic-cylinder', destination: '/products/hydraulic-cylinders/telescopic-hydraulic-cylinders/', permanent: true },
      { source: '/telescopic-hydraulic-cylinder/', destination: '/products/hydraulic-cylinders/telescopic-hydraulic-cylinders/', permanent: true },
      { source: '/square-body-hydraulic-jack', destination: '/products/hydraulic-cylinders/square-body-hydraulic-cylinder/', permanent: true },
      { source: '/square-body-hydraulic-jack/', destination: '/products/hydraulic-cylinders/square-body-hydraulic-cylinder/', permanent: true },

      // ── Legacy Hydraulic Power Packs ──
      { source: '/hydraulic-power-packs', destination: '/products/hydraulic-power-packs/', permanent: true },
      { source: '/hydraulic-power-packs/', destination: '/products/hydraulic-power-packs/', permanent: true },
      { source: '/hydraulic-power-pack-3-phase', destination: '/products/hydraulic-power-packs/three-phase-hydraulic-power-packs/', permanent: true },
      { source: '/hydraulic-power-pack-3-phase/', destination: '/products/hydraulic-power-packs/three-phase-hydraulic-power-packs/', permanent: true },
      { source: '/hydraulic-power-pack-single-phase', destination: '/products/hydraulic-power-packs/single-phase-hydraulic-power-packs/', permanent: true },
      { source: '/hydraulic-power-pack-single-phase/', destination: '/products/hydraulic-power-packs/single-phase-hydraulic-power-packs/', permanent: true },
      { source: '/hydraulic-power-for-press', destination: '/products/hydraulic-power-packs/hydraulic-power-packs-for-press/', permanent: true },
      { source: '/hydraulic-power-for-press/', destination: '/products/hydraulic-power-packs/hydraulic-power-packs-for-press/', permanent: true },
      { source: '/hydraulic-power-pack-with-accumulator', destination: '/products/hydraulic-power-packs/accumulator-hydraulic-power-packs/', permanent: true },
      { source: '/hydraulic-power-pack-with-accumulator/', destination: '/products/hydraulic-power-packs/accumulator-hydraulic-power-packs/', permanent: true },
      { source: '/hand-lever-operated-power-pack', destination: '/products/hydraulic-power-packs/hand-lever-operated-hydraulic-power-packs/', permanent: true },
      { source: '/hand-lever-operated-power-pack/', destination: '/products/hydraulic-power-packs/hand-lever-operated-hydraulic-power-packs/', permanent: true },
      { source: '/hydraulic-power-pack-with-multiple-solenoid-valve', destination: '/products/hydraulic-power-packs/multistation-hydraulic-power-packs/', permanent: true },
      { source: '/hydraulic-power-pack-with-multiple-solenoid-valve/', destination: '/products/hydraulic-power-packs/multistation-hydraulic-power-packs/', permanent: true },
      { source: '/hydraulic-power-pack-for-lift', destination: '/products/hydraulic-power-packs/customized-hydraulic-power-packs/', permanent: true },
      { source: '/hydraulic-power-pack-for-lift/', destination: '/products/hydraulic-power-packs/customized-hydraulic-power-packs/', permanent: true },

      // ── Legacy Manifold Blocks ──
      { source: '/manifold-block', destination: '/products/manifold-blocks/', permanent: true },
      { source: '/manifold-block/', destination: '/products/manifold-blocks/', permanent: true },
      { source: '/manifold-block-for-high-low-systems', destination: '/products/manifold-blocks/', permanent: true },
      { source: '/manifold-block-for-high-low-systems/', destination: '/products/manifold-blocks/', permanent: true },
      { source: '/06-size-single-station-manifold-block', destination: '/products/manifold-blocks/06-size-manifold-blocks/', permanent: true },
      { source: '/06-size-single-station-manifold-block/', destination: '/products/manifold-blocks/06-size-manifold-blocks/', permanent: true },
      { source: '/10-size-single-station-manifold-block', destination: '/products/manifold-blocks/10-size-manifold-blocks/', permanent: true },
      { source: '/10-size-single-station-manifold-block/', destination: '/products/manifold-blocks/10-size-manifold-blocks/', permanent: true },
      { source: '/06-size-multi-station-manifold-block', destination: '/products/manifold-blocks/multi-station-manifold-blocks/', permanent: true },
      { source: '/06-size-multi-station-manifold-block/', destination: '/products/manifold-blocks/multi-station-manifold-blocks/', permanent: true },
    ];
  },
};

export default nextConfig;

