# Performance SEO Checklist — Honeywell Hydraulics

**Consolidated By:** Performance Engineering Lead
**Date:** June 7, 2026
**Source:** `honeywell-technical-seo-spec.md` §13

---

## Target Metrics

| Metric | Target | Google "Good" Threshold |
|---|---|---|
| **Lighthouse Score** | 95+ | — |
| **LCP** (Largest Contentful Paint) | < 1.8s | < 2.5s |
| **CLS** (Cumulative Layout Shift) | < 0.05 | < 0.1 |
| **INP** (Interaction to Next Paint) | < 150ms | < 200ms |
| **FCP** (First Contentful Paint) | < 1.2s | < 1.8s |
| **TTFB** (Time to First Byte) | < 400ms | < 800ms |
| **Total Page Weight** | < 800KB | — |
| **DOM Elements** | < 800 | — |

---

## Resource Budget

```
CSS:     1 critical inline (< 15KB) + 1 main file (< 50KB) = < 65KB
JS:      1 main file (< 40KB) + analytics (< 30KB) = < 70KB
Fonts:   Barlow Condensed 600+700 + DM Sans 400+500 + JetBrains Mono 400 (WOFF2) ≈ 120KB
Images:  Hero < 100KB + 4 product cards < 50KB each = < 300KB
Total:   < 600KB first load (without cache)
```

---

## LCP Optimization

- [ ] Hero image preloaded with `<link rel="preload">` and `fetchpriority="high"`
- [ ] Hero image served as WebP, compressed < 100KB
- [ ] Hero image uses `decoding="sync"` (NOT `loading="lazy"`)
- [ ] Critical CSS inlined in `<head>` (< 15KB)
- [ ] Fonts preconnected: `fonts.googleapis.com` and `fonts.gstatic.com`
- [ ] `font-display: swap` on all `@font-face` declarations
- [ ] No render-blocking JavaScript in `<head>`
- [ ] No layout shifts before LCP element renders
- [ ] TTFB under 400ms (use CDN / edge functions)
- [ ] Next.js `<Image>` component with `priority` prop for hero images

---

## CLS Optimization

- [ ] ALL `<img>` elements have explicit `width` and `height` attributes
- [ ] ALL `<iframe>` embeds (Google Maps, YouTube) have explicit dimensions
- [ ] Fonts preloaded — no FOUT (Flash of Unstyled Text)
- [ ] No content injected above the fold after initial load
- [ ] Sticky header has reserved height in layout (avoid jump on scroll)
- [ ] No lazy-loaded content above the fold
- [ ] Web font fallback metrics closely match primary font
- [ ] Tailwind's `aspect-ratio` utility used for media containers

---

## INP Optimization

- [ ] All JavaScript deferred or async (except critical inline)
- [ ] No long tasks > 50ms on main thread
- [ ] Event handlers debounced (scroll, resize, input)
- [ ] Third-party scripts (GA4, Vercel Analytics) loaded AFTER `DOMContentLoaded`
- [ ] Intersection Observer for scroll animations (not scroll event listeners)
- [ ] FAQ accordion uses CSS transitions (not JS height calculations)
- [ ] Form validation runs on `blur`, not on every `keypress`
- [ ] React components use `React.memo()` / `useMemo()` where applicable

---

## Image Optimization

- [ ] All product images served as WebP with AVIF where supported
- [ ] Next.js `<Image>` component used for all images (automatic optimization via `sharp`)
- [ ] Hero images: `priority={true}`, no `loading="lazy"`
- [ ] Below-fold images: `loading="lazy"` via default Next.js behavior
- [ ] Image dimensions specified to prevent CLS
- [ ] OG images: JPEG format, 1200×630, < 300KB
- [ ] Responsive `srcset` with 3 breakpoints: 400w, 800w, 1200w

---

## Font Optimization

- [ ] Use `next/font` for automatic font optimization
- [ ] Load only required weights: Barlow Condensed 600, 700 | DM Sans 400, 500 | JetBrains Mono 400
- [ ] Subset fonts to Latin character set only
- [ ] WOFF2 format (smallest file size)
- [ ] `font-display: swap` applied automatically by `next/font`

---

## JavaScript Optimization

- [ ] No jQuery, no Elementor, no particles.js, no slick, no fancybox
- [ ] Use Next.js dynamic imports (`next/dynamic`) for non-critical components
- [ ] `@vercel/analytics` loaded via Next.js integration (automatically deferred)
- [ ] `@vercel/speed-insights` loaded via Next.js integration
- [ ] Google Analytics 4 loaded asynchronously, never blocking
- [ ] Bundle analysis: run `npm run build` and inspect `.next/` output

---

## Server & Deployment

- [ ] Deploy to Vercel Edge Network for global CDN + edge SSR
- [ ] HTTPS enforced with HSTS header
- [ ] HTTP/2 or HTTP/3 enabled (automatic on Vercel)
- [ ] Brotli compression enabled (automatic on Vercel)
- [ ] Cache headers: `stale-while-revalidate` for ISR pages
- [ ] Static pages served from CDN edge (< 50ms TTFB)

---

## Pre-Launch Performance Audit

- [ ] Run Lighthouse audit on all critical pages (score ≥ 95)
- [ ] Run PageSpeed Insights on mobile for homepage, top product, top location
- [ ] Verify CWV in Chrome DevTools Performance panel
- [ ] Check total page weight in Network tab (< 800KB)
- [ ] Confirm zero layout shifts during page load
- [ ] Test on 3G throttled connection (functional within 5s)
- [ ] Validate no console errors or warnings in production build
