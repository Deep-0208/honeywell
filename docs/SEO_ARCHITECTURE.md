# Honeywell Hydraulics — SEO Architecture

> **Living Document** — Reflects the exact implementation in `lib/seo.ts`, `lib/constants.ts`, `app/layout.tsx`, `app/robots.ts`, and `next-sitemap.config.cjs`.

---

## 1. Company Constants (`lib/constants.ts`)

All SEO data is sourced from one file — never hardcoded in components:

```typescript
export const COMPANY_INFO = {
  name: 'Honeywell Hydraulics',
  phone: '+91-9924343873',
  email: 'sales@honeywellhydraulics.com',
  address: {
    streetAddress: 'B-18, Suryam Plaza Estate, Near Nilkanth Estate, Road no. 15, Kathwada GIDC',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    postalCode: '382430',
    addressCountry: 'IN'
  },
  foundingYear: '2018',
  openingHours: { opens: '09:00', closes: '19:00' },
  geo: { latitude: 23.035, longitude: 72.668 },
  websiteUrl: 'https://www.honeywellhydraulics.com',
  themeColor: '#0D1B5C',
  googleMapsUrl: 'https://maps.app.goo.gl/GYx2VmdKC4PJWww16',
  socialUrls: {
    linkedin: 'https://www.linkedin.com/company/honeywell-hydraulics',
    facebook: 'https://www.facebook.com/honeywellhydraulics',
    twitter: 'https://twitter.com/honeywellhyd'
  }
};

export const SEO_DEFAULTS = {
  title: 'Honeywell Hydraulics | Custom Hydraulic Cylinder Manufacturer in India',
  description: 'Leading manufacturer of custom hydraulic cylinders and power packs in Ahmedabad, Gujarat. Serving 25+ industries since 2018. Contact us today.',
  ogImage: '/images/og/default-og.jpg'
};
```

---

## 2. Global Metadata (`app/layout.tsx`)

The root layout establishes default metadata that is inherited by all pages:

```typescript
metadata = {
  title: {
    template: `%s | Honeywell Hydraulics`,
    default: 'Honeywell Hydraulics | Custom Hydraulic Cylinder Manufacturer in India'
  },
  description: SEO_DEFAULTS.description,
  metadataBase: new URL('https://www.honeywellhydraulics.com'),
  openGraph: {
    siteName: 'Honeywell Hydraulics',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/images/og/default-og.jpg', width: 1200, height: 630 }]
  },
  twitter: { card: 'summary_large_image' },
  robots: {
    index: false,  // auto-set to false on non-production Vercel environments
    follow: false,
  }
}

viewport = {
  themeColor: '#0D1B5C',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  interactiveWidget: 'resizes-content'  // prevents CLS on mobile keyboard
}
```

---

## 3. Per-Page Metadata (`lib/seo.ts` → `buildMetadata()`)

Every page calls `buildMetadata()` to generate its specific metadata:

```typescript
export function buildMetadata({ title, description, canonical, image, noIndex }) {
  return {
    title,
    description,
    alternates: { canonical: `${COMPANY_INFO.websiteUrl}${canonical}` },
    openGraph: { title, description, url, siteName, images, locale: 'en_IN' },
    twitter: { card: 'summary_large_image', title, description, images },
    robots: { index: !noIndex, follow: !noIndex }
  };
}
```

**noIndex rule:** `noIndex = process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production'` — automatically true on preview/staging environments.

### Homepage Metadata (Override)

```typescript
// app/(site)/page.tsx
export const metadata: Metadata = {
  ...buildMetadata({
    title: 'Hydraulic Cylinder & Power Pack Manufacturer in Ahmedabad',
    description: 'Leading manufacturer of hydraulic cylinders, power packs & custom hydraulic systems in Ahmedabad...',
    canonical: '/',
    image: '/images/og/custom-hydraulic-cylinder-manufacturer-og.jpg',
  }),
  title: { absolute: "Hydraulic Cylinder & Powerpack Manufacturer | Honeywell" },
};
```

The `title.absolute` override bypasses the template, giving the homepage its own exact title.

---

## 4. JSON-LD Schema System (`lib/seo.ts`)

### 4.1 Schema Generators

| Function | Schema Type | Used On |
|----------|------------|---------|
| `buildOrganizationJsonLd()` | `Organization` | All pages |
| `buildLocalBusinessJsonLd()` | `ManufacturingBusiness` | Homepage, contact |
| `buildProductJsonLd(product)` | `Product` | Product pages |
| `buildBreadcrumbJsonLd(items)` | `BreadcrumbList` | Inner pages |
| `buildFAQJsonLd(faqs)` | `FAQPage` | Pages with FAQs |
| `buildWebPageJsonLd(title, desc, url)` | `WebPage` | Inner pages |
| `buildArticleJsonLd(article)` | `Article` | Blog posts |
| `buildWebSiteJsonLd()` | `WebSite` + `SearchAction` | Homepage |
| `buildHomepageGraphSchema({title, desc, faqs})` | Full `@graph` | Homepage only |

### 4.2 Homepage `@graph` Structure (6 Nodes)

The homepage uses a single unified `@graph` block per Google's recommended pattern:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.honeywellhydraulics.com/#organization",
      "name": "Honeywell Hydraulics",
      "logo": { "@type": "ImageObject", "url": ".../long-size-logohydralics-logo.png" },
      "contactPoint": { "@type": "ContactPoint", "telephone": "+91-9924343873", "areaServed": "IN", "availableLanguage": ["en","hi","gu"] },
      "sameAs": ["linkedin.com/...", "facebook.com/...", "twitter.com/..."],
      "foundingDate": "2018"
    },
    {
      "@type": "ManufacturingBusiness",
      "@id": "https://www.honeywellhydraulics.com/#localbusiness",
      "address": { "@type": "PostalAddress", "streetAddress": "...", "addressLocality": "Ahmedabad", "addressRegion": "Gujarat", "postalCode": "382430" },
      "geo": { "@type": "GeoCoordinates", "latitude": 23.035, "longitude": 72.668 },
      "openingHoursSpecification": { "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "09:00", "closes": "19:00" },
      "parentOrganization": { "@id": ".../#organization" }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.honeywellhydraulics.com/#website",
      "potentialAction": { "@type": "SearchAction", "urlTemplate": ".../search?q={search_term_string}" }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.honeywellhydraulics.com/#webpage",
      "isPartOf": { "@id": ".../#website" },
      "about": { "@id": ".../#organization" }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.honeywellhydraulics.com/#faq",
      "mainEntity": [/* 4 Questions from homepageFAQs */]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.honeywellhydraulics.com/#breadcrumb",
      "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://..." }]
    }
  ]
}
```

### 4.3 Schema Component

```tsx
// Usage in any page.tsx
import JsonLd from '@/components/seo/JsonLd';
<JsonLd data={graphSchema} />
// Renders: <script type="application/ld+json">{JSON.stringify(data)}</script>
```

---

## 5. On-Page SEO Requirements

### 5.1 Heading Hierarchy

```
h1  — ONE per page. In HeroSection only. Keyword-optimized.
  h2 — One per major section. Uses <Heading variant="section" as="h2">.
    h3 — Sub-items within sections.
      h4 — Card titles. Rarely needed beyond this.
```

**Homepage H1:** "Hydraulic Cylinder & Hydraulic Powerpack Manufacturer in India Since 2018"

### 5.2 Image SEO

- All images use `next/image` component (mandatory)
- All `alt` text: descriptive, no "Image of" prefix
- Format: `avif` → `webp` (configured in `next.config.ts`)
- Hero images must have `priority` prop
- OG images: 1200×630px JPEG
- SEO filenames: `hydraulic-cylinder-manufacturer-ahmedabad.webp` (not `IMG_001.webp`)

### 5.3 Internal Linking

- Every section → links to its corresponding pillar page
- Footer → complete site nav link matrix
- Breadcrumbs on all inner pages via `components/layout/Breadcrumb.tsx`
- Target: 40+ internal links on homepage

---

## 6. Robots.txt (`app/robots.ts`)

Generated dynamically via the Next.js Metadata API:

| Bot | Rule |
|-----|------|
| `*` (all) | Allow `/`, disallow `/search`, `/admin/`, `/api/`, `/thank-you/` |
| `Googlebot` | Allow all |
| `Googlebot-Image` | Allow all |
| `Bingbot` | Allow all |
| `GPTBot` | Allow `/`, disallow `/admin/` |
| `Google-Extended` | Allow all |
| `ClaudeBot` | Allow all |
| `PerplexityBot` | Allow all |
| `AhrefsBot` | Disallow all |
| `SemrushBot` | Disallow all |
| `MJ12bot` | Disallow all |
| `DotBot` | Disallow all |

> **AI crawlers are intentionally allowed.** This is a strategic AEO/GEO decision to maximize AI search citation visibility for ChatGPT, Gemini, Claude, and Perplexity.

**Sitemaps declared:**
- `https://www.honeywellhydraulics.com/sitemap.xml`
- `https://www.honeywellhydraulics.com/sitemap-images.xml`

---

## 7. Sitemap (`next-sitemap.config.cjs`)

Generated on `postbuild` by `next-sitemap` package.

### Priority Matrix

| Priority | Change Freq | Routes |
|----------|-------------|--------|
| **1.0** | weekly | `/` |
| **0.9** | weekly | `/products/`, product pillars, `/request-quote/`, key locations |
| **0.8** | monthly | Individual product sub-pages, industry pages, company pages |
| **0.7** | monthly | Blog articles, other location pages |
| **0.6** | monthly | Case studies, resources |
| **0.2** | yearly | `/privacy`, `/terms` |

### Excluded from Sitemap

`/thank-you`, `/admin/*`, `/api/*`, `/search`, `/search/*`

### Index Sitemap

`generateIndexSitemap: true` — generates a sitemap index that references both `sitemap.xml` and `sitemap-images.xml`.

---

## 8. Local SEO Strategy

> See `docs/LOCAL_SEO_IMPLEMENTATION.md` for full implementation.

### Primary Location (Schema)

All schema inherits the HQ at Kathwada GIDC, Ahmedabad (coordinates: 23.035°N, 72.668°E).

### Service Area Targeting

| Region | Location Page | Industries |
|--------|--------------|-----------|
| Gujarat | `/locations/gujarat-facility/` | Injection Moulding, Automotive, Steel, Textile |
| Maharashtra | `/locations/maharashtra/` | Automotive, Manufacturing, Engineering |
| Indore | `/locations/indore/` | Auto Parts, Pharmaceuticals, Food Processing |
| West Bengal | `/locations/west-bengal/` | Steel & Mining, Heavy Engineering |
| Rajasthan | `/locations/rajasthan/` | Auto Components, Cement, Mining |
| Pan India | `/locations/india/` | OEM Supply, Project Orders, Export |

### NAP Consistency

The NAP (Name, Address, Phone) is locked in `lib/constants.ts` and must exactly match the Google Business Profile:
- **Name:** Honeywell Hydraulics
- **Address:** B-18, Suryam Plaza Estate, Near Nilkanth Estate, Road No. 15, Kathwada GIDC, Ahmedabad, Gujarat 382430
- **Phone:** +91-9924343873

---

## 9. AEO / GEO / AI Search Strategy

### Entity Graph

The schema explicitly creates a linked entity graph:
- `ManufacturingBusiness.parentOrganization` → `Organization @id`
- `WebPage.about` → `Organization @id`
- `WebPage.isPartOf` → `WebSite @id`

This signals to AI models that these are related entities, improving citation coherence.

### FAQ Schema for AI Answers

4 FAQs in `homepageFAQs` are designed to directly answer commercial queries that LLMs receive:
1. "What hydraulic products does Honeywell Hydraulics manufacture?"
2. "What bore sizes do you manufacture?"
3. "What is the delivery time?"
4. "Do you supply across India?"

### AI Crawler Access

All major AI crawlers (`GPTBot`, `Google-Extended`, `ClaudeBot`, `PerplexityBot`) are explicitly allowed in `robots.ts`. This is deliberate — restriction would eliminate AI citation visibility.

### E-E-A-T Signals

- ISO 9001:2015 certification (in schema + on-page)
- Founded 2018 (foundingDate in Organization schema)
- Physical address with geo-coordinates
- Verified testimonials with company names and roles
- Social profile `sameAs` links
- Google Maps link in footer

---

## 10. Core Web Vitals (CWV)

| Metric | Target | Implementation |
|--------|--------|---------------|
| LCP | < 1.8s | Hero `priority`, `avif`/`webp` formats |
| CLS | < 0.1 | `display: swap` fonts, explicit image dimensions, `interactiveWidget: 'resizes-content'` |
| INP | < 200ms | Server Components default, minimal client JS |

### Monitoring

- **Vercel Speed Insights** — Real User Monitoring for CWV from actual visitors
- **Vercel Analytics** — Page view and event tracking
