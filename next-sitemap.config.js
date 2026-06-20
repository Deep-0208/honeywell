/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.honeywellhydraulics.com',
  generateRobotsTxt: true,
  generateIndexSitemap: true,

  // ── Exclude non-indexable routes ──
  exclude: [
    '/thank-you',
    '/thank-you/*',
    '/admin',
    '/admin/*',
    '/api',
    '/api/*',
    '/search',
    '/search/*',
  ],

  // ── robots.txt policies ──
  robotsTxtOptions: {
    policies: [
      // Search engine crawlers
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/search', '/search?', '/admin/', '/api/', '/thank-you/', '/*.pdf$'],
      },
      // Google
      { userAgent: 'Googlebot', allow: '/', },
      { userAgent: 'Googlebot-Image', allow: ['/images/', '/*.webp$', '/*.jpg$', '/*.png$'], },
      // Bing
      { userAgent: 'Bingbot', allow: '/', },
      // AI crawlers — allow for AI search visibility
      { userAgent: 'GPTBot', allow: '/', disallow: ['/admin/'], },
      { userAgent: 'Google-Extended', allow: '/', },
      { userAgent: 'ClaudeBot', allow: '/', },
      { userAgent: 'PerplexityBot', allow: '/', },
      // Block scraper bots
      { userAgent: 'AhrefsBot', disallow: '/', },
      { userAgent: 'SemrushBot', disallow: '/', },
      { userAgent: 'MJ12bot', disallow: '/', },
      { userAgent: 'DotBot', disallow: '/', },
    ],
    additionalSitemaps: [
      'https://www.honeywellhydraulics.com/sitemap-images.xml',
    ],
  },

  // ── Per-path priority and changefreq overrides ──
  transform: async (config, path) => {
    // Homepage
    if (path === '/') {
      return { loc: path, changefreq: 'weekly', priority: 1.0, lastmod: new Date().toISOString() };
    }

    // Products hub
    if (path === '/products' || path === '/products/') {
      return { loc: path, changefreq: 'weekly', priority: 0.9, lastmod: new Date().toISOString() };
    }

    // Product pillar pages
    const productPillars = [
      '/products/hydraulic-cylinders',
      '/products/hydraulic-power-packs',
      '/products/hydraulic-accessories',
    ];
    if (productPillars.some((p) => path === p || path === `${p}/`)) {
      return { loc: path, changefreq: 'weekly', priority: 0.9, lastmod: new Date().toISOString() };
    }

    // Request quote
    if (path.startsWith('/request-quote')) {
      return { loc: path, changefreq: 'monthly', priority: 0.9, lastmod: new Date().toISOString() };
    }

    // Key location pages
    const keyLocations = ['/locations/ahmedabad', '/locations/gujarat', '/locations/india'];
    if (keyLocations.some((l) => path.startsWith(l))) {
      return { loc: path, changefreq: 'monthly', priority: 0.9, lastmod: new Date().toISOString() };
    }

    // Individual product pages (children of pillars)
    if (productPillars.some((p) => path.startsWith(p + '/') && path !== p && path !== `${p}/`)) {
      return { loc: path, changefreq: 'monthly', priority: 0.8, lastmod: new Date().toISOString() };
    }

    // Industry pages
    if (path.startsWith('/industries/')) {
      return { loc: path, changefreq: 'monthly', priority: 0.8, lastmod: new Date().toISOString() };
    }

    // Blog articles
    if (path.startsWith('/blog/')) {
      return { loc: path, changefreq: 'monthly', priority: 0.7, lastmod: new Date().toISOString() };
    }

    // Other location pages
    if (path.startsWith('/locations/')) {
      return { loc: path, changefreq: 'monthly', priority: 0.7, lastmod: new Date().toISOString() };
    }

    // Company Pages
    const companyPages = [
      '/about-us',
      '/infrastructure',
      '/quality',
      '/manufacturing-facility',
      '/contact-us'
    ];
    if (companyPages.some((p) => path === p)) {
      return { loc: path, changefreq: 'monthly', priority: 0.8, lastmod: new Date().toISOString() };
    }

    // Case studies
    if (path.startsWith('/case-studies/')) {
      return { loc: path, changefreq: 'monthly', priority: 0.6, lastmod: new Date().toISOString() };
    }

    // Resources (FAQ, Downloads)
    if (path.startsWith('/resources/')) {
      return { loc: path, changefreq: 'monthly', priority: 0.6, lastmod: new Date().toISOString() };
    }

    // Legal pages
    if (path.startsWith('/privacy') || path.startsWith('/terms')) {
      return { loc: path, changefreq: 'yearly', priority: 0.2, lastmod: new Date().toISOString() };
    }

    // Default fallback
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.lastmod ? new Date().toISOString() : undefined,
    };
  },
};
