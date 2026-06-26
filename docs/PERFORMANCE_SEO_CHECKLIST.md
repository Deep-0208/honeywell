# Performance & SEO Checklist

> **Living Document** — Reflects exact implementations in `next.config.ts`, `app/layout.tsx`, `app/(site)/layout.tsx`, `globals.css`, and component files.

---

## 1. Core Web Vitals (CWV)

### 1.1 Largest Contentful Paint (LCP)

Target: **< 1.8 seconds**

| Check | Status | Implementation |
|-------|--------|---------------|
| Hero image has `priority` prop | ✅ | `HeroCarousel.tsx` — images loaded with `priority` + `fetchPriority="high"` |
| Image format `avif` / `webp` | ✅ | `next.config.ts`: `formats: ['image/avif', 'image/webp']` |
| Image quality | ✅ | `qualities: [75, 85, 100]` — optimized per device |
| `sharp` installed | ✅ | `package.json`: `"sharp": "^0.34.5"` |
| Hero image `decoding="sync"` | ✅ | First-paint inclusion |
| No render-blocking resources | ✅ | Fonts use `display: 'swap'` via `next/font` |
| Google Analytics deferred | ✅ | `strategy="afterInteractive"` on GA script tag |

### 1.2 Cumulative Layout Shift (CLS)

Target: **< 0.1**

| Check | Status | Implementation |
|-------|--------|---------------|
| Font display swap | ✅ | `Poppins` and `Roboto` both use `display: 'swap'` |
| Image dimensions declared | ✅ | All `<Image>` components have `width` + `height` |
| Mobile keyboard CLS prevention | ✅ | `viewport: { interactiveWidget: 'resizes-content' }` in `app/layout.tsx` |
| Mobile body padding | ✅ | `globals.css`: `@media (max-width: 1023px) { body { padding-bottom: 64px; } }` |
| No unsized media | ✅ | Next.js `<Image>` enforces aspect ratios |

### 1.3 Interaction to Next Paint (INP)

Target: **< 200ms**

| Check | Status | Implementation |
|-------|--------|---------------|
| Server Components default | ✅ | All page.tsx and section components are Server Components |
| Minimal client JS | ✅ | `"use client"` used only on: `Header`, `MegaMenu`, `MobileMenu`, `MobileConversionBar`, `HeroCarousel`, `FAQAccordion` |
| Passive scroll listeners | ✅ | `Header.tsx` — `window.addEventListener('scroll', handler, { passive: true })` |

---

## 2. Technical SEO Checklist

| Check | Status | Source |
|-------|--------|--------|
| Canonical URL on every page | ✅ | `buildMetadata({ canonical })` → `alternates.canonical` |
| Title tag < 60 chars | ✅ | Enforced per page in metadata exports |
| Meta description < 160 chars | ✅ | Enforced per page in metadata exports |
| Single `<h1>` per page | ✅ | `HeroSection.tsx` — only `as="h1"` in the site |
| OpenGraph image 1200×630 | ✅ | `images: [{ width: 1200, height: 630 }]` in `buildMetadata` |
| Twitter card `summary_large_image` | ✅ | Set globally in `app/layout.tsx` |
| `<html lang="en-IN">` | ✅ | `app/layout.tsx` |
| Theme color meta | ✅ | `viewport.themeColor: '#0D1B5C'` |
| Favicon + Apple icon | ✅ | `app/icon.png` + `app/apple-icon.png` |
| Schema on every page | ✅ | `<JsonLd>` component with `@graph` |
| Robots noIndex on staging | ✅ | `NEXT_PUBLIC_VERCEL_ENV !== 'production'` → `noIndex: true` |
| Redirects for canonical paths | ✅ | `/contact` → `/contact-us`, `/about` → `/about-us` (301) |
| Sitemap generated post-build | ✅ | `postbuild: next-sitemap --config next-sitemap.config.cjs` |
| Image sitemap | ✅ | `sitemap-images.xml` generated |
| Google Search Console verification | 🔲 | Add `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` env variable |

---

## 3. Image Optimization Checklist

| Check | Status | Implementation |
|-------|--------|---------------|
| WebP format | ✅ | `next.config.ts` → `formats: ['image/avif', 'image/webp']` |
| AVIF format | ✅ | Same config — AVIF offered first (better compression) |
| `sizes` prop on responsive images | ✅ | e.g., `sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 240px"` |
| `priority` on LCP elements | ✅ | Hero carousel images |
| Descriptive alt text | ✅ | No "Image of" or "Picture of" prefixes |
| SEO-friendly filenames | ✅ | e.g., `hydraulic-cylinder-manufacturer-ahmedabad.webp` |
| OG image dimensions | ✅ | 1200×630px JPEG |
| Client logos compressed | ✅ | `.webp` format in `/images/clients/` |

---

## 4. Security Headers (`next.config.ts`)

Applied to all routes via `headers()`:

| Header | Value | Purpose |
|--------|-------|---------|
| `X-DNS-Prefetch-Control` | `on` | Faster DNS lookups |
| `X-XSS-Protection` | `1; mode=block` | XSS protection |
| `X-Frame-Options` | `SAMEORIGIN` | Clickjacking prevention |
| `X-Content-Type-Options` | `nosniff` | MIME sniffing prevention |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Privacy |
| `Permissions-Policy` | `camera=(), geolocation=(), browsing-topics=()` | Feature policy |

---

## 5. Font Loading Performance

```typescript
// app/layout.tsx
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
  variable: '--font-poppins',
  display: 'swap'  // ← prevents FOIT
});
```

- Font files are self-hosted via `next/font` (no external network requests to Google at runtime)
- `display: 'swap'` ensures text is visible immediately with fallback font
- CSS variable `--font-poppins` applied globally in `globals.css`
- Preconnect hints present in `<head>` (legacy — actual loading is now via `next/font`)

---

## 6. Analytics & Monitoring

| Tool | Component | Load Strategy | Conditional |
|------|-----------|--------------|-------------|
| Vercel Analytics | `<Analytics />` | Server-rendered | Always |
| Vercel Speed Insights | `<SpeedInsights />` | Server-rendered | Always |
| Google Analytics 4 | `<Script>` | `afterInteractive` | Only if `NEXT_PUBLIC_GA_ID` exists |
| Agentation (dev) | `<Agentation />` | Dev only | `NODE_ENV === 'development'` |

---

## 7. Bundle & Build Optimization

| Feature | Status | Detail |
|---------|--------|--------|
| Server Components default | ✅ | No unnecessary client JS |
| `compress: true` | ✅ | `next.config.ts` — gzip/brotli compression |
| TypeScript `ignoreBuildErrors: true` | ⚠️ | `next.config.ts` — type errors won't block build |
| Tree shaking | ✅ | Next.js/Turbopack handles automatically |
| Dynamic imports | 🔲 | Not yet used — heavy components (QuoteForm) could benefit |

---

## 8. Accessibility Checklist

| Check | Status | Implementation |
|-------|--------|---------------|
| Skip to content link | ✅ | `app/(site)/layout.tsx` — visible on focus |
| ARIA labels on all icons | ✅ | `aria-hidden="true"` on decorative icons |
| Keyboard nav in Header | ✅ | `Enter`/`Space` opens mega menus, `Escape` closes |
| Focus rings | ✅ | `globals.css` `:focus-visible` + component-level `focus-visible:ring-*` |
| WCAG AA contrast | ✅ | Navy on white (#0D1B5C on #FFFFFF = 10.6:1) |
| `aria-expanded` on menus | ✅ | Header buttons and mobile menu toggle |
| `aria-labelledby` on sections | ✅ | All sections linked to their heading ID |
| Touch targets ≥ 48px | ✅ | MobileConversionBar: `min-h-[56px]` |
| `lang` attribute | ✅ | `<html lang="en-IN">` |
| Reduced motion support | ✅ | All animations disabled via `prefers-reduced-motion` |

---

## Pre-Deployment Checklist

Before deploying to production, verify:

- [ ] `NEXT_PUBLIC_VERCEL_ENV=production` or robots will return `noIndex: true`
- [ ] `NEXT_PUBLIC_GA_ID` set for analytics tracking
- [ ] `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` set for Search Console
- [ ] All hero images have `priority` prop
- [ ] Sitemap generates correctly after `npm run build`
- [ ] No TypeScript build errors (resolve before deploying)
- [ ] All OG images exist at declared paths in `public/`
- [ ] NAP in Footer matches Google Business Profile exactly
- [ ] All 301 redirects tested
- [ ] Schema validated via Google Rich Results Test
