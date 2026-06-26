# Honeywell Hydraulics — Master Project Documentation

> **Status:** Production-Synchronized | **Single Source of Truth:** Codebase  
> **Framework:** Next.js 16.2.7 (App Router) | **React:** 19.2.4  
> **Styling:** Tailwind CSS v4 | **Language:** TypeScript 5  
> **Deployment:** Vercel | **Analytics:** Vercel Analytics + Speed Insights

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Full Folder Structure](#2-full-folder-structure)
3. [Routing & Page Architecture](#3-routing--page-architecture)
4. [Homepage Sections](#4-homepage-sections)
5. [Navigation & Header](#5-navigation--header)
6. [Footer](#6-footer)
7. [Data Layer](#7-data-layer)
8. [Component System](#8-component-system)
9. [SEO Architecture](#9-seo-architecture)
10. [Performance Engineering](#10-performance-engineering)
11. [Content System (MDX)](#11-content-system-mdx)
12. [Build & Deployment](#12-build--deployment)
13. [Environment Variables](#13-environment-variables)

---

## 1. Project Overview

Honeywell Hydraulics is a B2B hydraulic manufacturer based in Ahmedabad, Gujarat. This is their production Next.js website targeting:

- Industrial procurement managers and plant engineers in India
- Local SEO for Gujarat, Maharashtra, Indore, West Bengal, Rajasthan
- National SEO for "hydraulic cylinder manufacturer India"
- AI Search Optimization (AEO/GEO) for ChatGPT, Gemini, Perplexity citations

**Key business facts (from `lib/constants.ts`):**

| Field | Value |
|-------|-------|
| Company | Honeywell Hydraulics |
| Phone | +91-9924343873 |
| Email | sales@honeywellhydraulics.com |
| Address | B-18, Suryam Plaza Estate, Road No. 15, Kathwada GIDC, Ahmedabad, Gujarat 382430 |
| Founded | 2018 |
| Coordinates | 23.035°N, 72.668°E |
| Hours | Mon–Sat, 09:00–19:00 |
| Website | https://www.honeywellhydraulics.com |

---

## 2. Full Folder Structure

```
website/
├── app/
│   ├── globals.css              ← Tailwind base + global CSS
│   ├── layout.tsx               ← Root HTML shell, fonts, analytics
│   ├── robots.ts                ← robots.txt generation (Next.js API)
│   ├── not-found.tsx            ← Global 404 page
│   ├── apple-icon.png           ← Apple touch icon
│   ├── icon.png                 ← Favicon
│   └── (site)/                  ← Route group — all public-facing pages
│       ├── layout.tsx           ← Site shell: Header + Footer + MobileConversionBar
│       ├── loading.tsx          ← Suspense loading skeleton
│       ├── error.tsx            ← Error boundary page
│       ├── page.tsx             ← Homepage ( / )
│       ├── page.module.css      ← CSS Modules (homepage-specific)
│       ├── about-us/            ← /about-us/
│       ├── contact-us/          ← /contact-us/
│       ├── infrastructure/      ← /infrastructure/
│       ├── manufacturing-facility/ ← /manufacturing-facility/
│       ├── products/            ← /products/ (hub) + sub-routes
│       │   ├── page.tsx         ← Products hub page
│       │   ├── hydraulic-cylinders/
│       │   └── hydraulic-power-packs/
│       ├── quality/             ← /quality/
│       └── request-quote/       ← /request-quote/
│
├── components/
│   ├── Header.tsx               ← Global sticky header (client component)
│   ├── Footer.tsx               ← Global footer (server component)
│   ├── MegaMenu.tsx             ← Desktop dropdown mega menu (client)
│   ├── MobileMenu.tsx           ← Mobile slide-in menu drawer (client)
│   ├── MobileConversionBar.tsx  ← Sticky bottom bar on mobile (client)
│   ├── ElevenLabsWidget.tsx     ← AI voice widget
│   ├── ui/                      ← Atomic design system components
│   │   ├── Button.tsx           ← Button variants
│   │   ├── Heading.tsx          ← Typography normalizer
│   │   ├── Section.tsx          ← Section wrapper + bg variants
│   │   ├── Container.tsx        ← Max-width container
│   │   ├── Card.tsx             ← Base card
│   │   ├── Badge.tsx            ← Small credential labels
│   │   ├── IconBox.tsx          ← Icon container with backgrounds
│   │   ├── CTA.tsx              ← Full-width CTA banner block
│   │   ├── EmptyState.tsx       ← Empty list/no results state
│   │   ├── LoadingSkeleton.tsx  ← Shimmer loading placeholders
│   │   └── WhatsAppFloatingCTA.tsx ← WhatsApp FAB button
│   ├── homepage/                ← Homepage section components
│   │   ├── HeroSection.tsx
│   │   ├── HeroCarousel.tsx     ← Image carousel within hero
│   │   ├── ProductsSection.tsx
│   │   ├── ClientLogosSection.tsx ← Marquee + stats
│   │   ├── WhyChooseUsSection.tsx
│   │   ├── IndustriesSection.tsx
│   │   ├── ManufacturingFacilitySection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── CertificationsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── LocationsSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── HomepageCTASection.tsx
│   │   ├── BlogPreviewSection.tsx
│   │   ├── ActionCardsSection.tsx
│   │   └── TrustStrip.tsx
│   ├── cards/                   ← Card variants
│   │   ├── ProductCard.tsx
│   │   ├── IndustryCard.tsx
│   │   ├── TestimonialCard.tsx
│   │   ├── LocationCard.tsx
│   │   ├── ServiceCard.tsx
│   │   └── ApplicationCard.tsx
│   ├── forms/
│   │   ├── ContactForm.tsx      ← General contact form
│   │   └── QuoteForm.tsx        ← Detailed quote request form
│   ├── faq/
│   │   ├── FAQAccordion.tsx     ← FAQ accordion container (client)
│   │   └── FAQItem.tsx          ← Individual FAQ item
│   ├── layout/
│   │   ├── Breadcrumb.tsx       ← Breadcrumb navigation + schema
│   │   └── PageContainer.tsx    ← Page-level container wrapper
│   ├── seo/
│   │   ├── JsonLd.tsx           ← JSON-LD schema injector
│   │   └── SEO.tsx              ← SEO meta utilities
│   └── products/
│       ├── hydraulic-cylinders/ ← Cylinder-specific page components
│       │   ├── CylinderFAQs.tsx
│       │   ├── CylinderIndustries.tsx
│       │   ├── CylinderManufacturingProcess.tsx
│       │   ├── CylinderOverview.tsx
│       │   ├── CylinderTechnicalSpecs.tsx
│       │   ├── CylinderTypesGrid.tsx
│       │   ├── HydraulicCylinderHero.tsx
│       │   └── WhyChooseCylinders.tsx
│       └── hydraulic-power-packs/
│
├── content/                     ← MDX database for dynamic pages
│   ├── products/
│   │   ├── hydraulic-cylinders.mdx
│   │   └── hydraulic-power-packs.mdx
│   ├── locations/
│   │   └── ahmedabad.mdx
│   ├── industries/
│   │   └── steel-metallurgy.mdx
│   └── legacy-imports/          ← Archive (do not use)
│
├── data/                        ← TypeScript data objects
│   ├── homepage.ts              ← All homepage section data (types + values)
│   ├── navigation.ts            ← Site navigation structure
│   └── hero-carousel-images.ts  ← Hero carousel image config
│
├── lib/                         ← Core utilities
│   ├── constants.ts             ← COMPANY_INFO + SEO_DEFAULTS
│   ├── seo.ts                   ← Metadata + JSON-LD generators
│   ├── content.ts               ← MDX file system parser
│   ├── navigation.ts            ← Dynamic navigation builder
│   └── utils.ts                 ← General utilities
│
├── public/images/               ← Static image assets
│   ├── hero/                    ← (legacy, single hero)
│   ├── home/hero/               ← Carousel hero images (6 items)
│   ├── products/hero/           ← Product card images
│   ├── clients/                 ← 20 client logo .webp files
│   ├── facility/                ← Manufacturing facility photos
│   ├── logos/                   ← Honeywell Hydraulics logos
│   ├── og/                      ← OpenGraph images (1200×630)
│   └── testimonials/            ← Testimonial avatar images
│
├── types/
│   ├── index.ts                 ← Core TypeScript types (FAQ, Product, etc.)
│   └── navigation.ts            ← SiteNavigation type
│
├── docs/                        ← Project documentation
├── app/globals.css              ← See above
├── tailwind.config.ts           ← Tailwind v4 design tokens
├── next.config.ts               ← Next.js configuration
├── next-sitemap.config.cjs      ← Sitemap + robots.txt generation
└── package.json                 ← Dependencies (Next 16, React 19, TW v4)
```

---

## 3. Routing & Page Architecture

### Layout Hierarchy

```
app/layout.tsx          ← Root layout (HTML, fonts, <head>, analytics)
└── app/(site)/layout.tsx ← Site layout (Header, Footer, MobileConversionBar)
    ├── app/(site)/page.tsx     → /  (Homepage)
    ├── app/(site)/about-us/    → /about-us/
    ├── app/(site)/contact-us/  → /contact-us/
    ├── app/(site)/infrastructure/ → /infrastructure/
    ├── app/(site)/manufacturing-facility/ → /manufacturing-facility/
    ├── app/(site)/quality/     → /quality/
    ├── app/(site)/request-quote/ → /request-quote/
    └── app/(site)/products/    → /products/
        ├── page.tsx            → /products/
        ├── hydraulic-cylinders/ → /products/hydraulic-cylinders/
        └── hydraulic-power-packs/ → /products/hydraulic-power-packs/
```

### Redirects (from `next.config.ts`)

| Source | Destination | Type |
|--------|-------------|------|
| `/contact` | `/contact-us` | 301 Permanent |
| `/about` | `/about-us` | 301 Permanent |

### Server vs Client Components

| Component | Type | Reason |
|-----------|------|--------|
| All page.tsx | Server | SEO metadata, zero JS by default |
| app/(site)/layout.tsx | Server | Static shell |
| `Header.tsx` | **Client** | Scroll detection, mega menu state |
| `MegaMenu.tsx` | **Client** | Open/close interaction |
| `MobileMenu.tsx` | **Client** | Drawer animation |
| `MobileConversionBar.tsx` | **Client** | Mobile-only rendering |
| `HeroCarousel.tsx` | **Client** | Image rotation logic |
| `FAQAccordion.tsx` | **Client** | Accordion open/close |
| All Section components | Server | Static content |

---

## 4. Homepage Sections

**File:** `app/(site)/page.tsx`  
**Data source:** `data/homepage.ts`  
**Schema:** 6-type `@graph` JSON-LD via `buildHomepageGraphSchema()`

### Section Order (Production)

| # | Component | Data Source | Background | Notes |
|---|-----------|-------------|------------|-------|
| 01 | `HeroSection` | `hero-carousel-images.ts` | White | H1 lives here. Carousel. Priority LCP |
| 02 | `ProductsSection` | `homepageProducts` | White | 4 product categories |
| 03 | `ClientLogosSection` | `clientLogos` + `trustMetrics` | White | Marquee (40s) + 5 stats |
| 04 | `WhyChooseUsSection` | `usps` | Gray | 4 USPs with IconBox |
| 05 | `IndustriesSection` | `homepageIndustries` | White | 6 industry cards |
| 06 | `ManufacturingFacilitySection` | `manufacturingHighlights` | Gray | 5 highlights |
| 07 | `ProcessSection` | `processSteps` | White | 4-step process |
| 08 | `CertificationsSection` | `certifications` | Gray | ISO, MSME, GST, MakeInIndia |
| 09 | `TestimonialsSection` | `homepageTestimonials` | White | 3 testimonials |
| 10 | `LocationsSection` | `homepageLocations` | Gray | 6 locations |
| 11 | `FAQSection` | `homepageFAQs` | White | 4 FAQs + FAQPage schema |
| 12 | `HomepageCTASection` | Static | Navy | Final conversion |

### Section 01 — HeroSection

- **H1:** "Hydraulic Cylinder & Hydraulic Powerpack Manufacturer in India Since 2018"
- **Overline:** "Hydraulic System Manufacturer in Ahmedabad" (red text)
- **Subtitle:** "Export Hydraulic Solution to All Over India."
- **Trust chips:** Custom Engineering, Factory-Direct Pricing, 7–15 Day Delivery
- **Certification badge:** "ISO 9001:2015 Certified Company" (navy pill)
- **Primary CTA:** "Request Quote" → `/request-quote/` (red button, `size="lg"`)
- **Secondary CTA:** "Explore Products" → `/products/` (outline button)
- **Right column:** `HeroCarousel` with 6 product images (3:2 → 4:3 → 1:1 aspect ratio)
- **Background:** White with `bg-brand-surfaceGray` decorative circle accent
- **LCP target:** < 1.8s (hero carousel images have `priority`)

### Section 03 — ClientLogosSection

- **Heading:** "Trusted by Manufacturers Across India"
- **Marquee:** 20 client logos, `animate-marquee` (40s linear infinite), pauses on `hover`
- **Duplicate set:** Aria-hidden duplicate for seamless loop
- **Mask:** `linear-gradient` fade on left/right edges
- **Stats grid:** `trustMetrics` — 500+ Projects, 25+ Industries, 6+ Years, 5000+ Cylinders, 100% Tested

### Section 04 — WhyChooseUsSection (USPs)

4 USPs from `data/homepage.ts`:
1. Custom Engineering — "Every cylinder designed to your exact specs"
2. Quality Tested — "100% hydrostatic pressure testing. ISO 9001:2015"
3. 7–15 Day Delivery — "Standard: 7 days. Custom: 15 days"
4. Factory-Direct Pricing — "No middlemen. Volume discounts for OEM"

### Section 05 — IndustriesSection

6 industries: Injection Moulding, Construction & Earthmoving, Manufacturing & Industrial Automation, Material Handling, Rolling Mill, Wooden Industries.

### Section 07 — ProcessSection (Manufacturing Process)

4 steps: Load & Duty Cycle Analysis → Precision CAD Engineering → Micron-Level CNC Machining → Hydrostatic Pressure Validation.

### Section 08 — CertificationsSection

4 certifications: ISO 9001:2015, MSME Registered, GST Compliant, Make in India.

### Section 10 — LocationsSection

6 locations: Gujarat, Maharashtra, Indore, West Bengal, Rajasthan, Pan India.

### Section 11 — FAQSection

4 FAQs (injected into FAQPage schema):
1. What products does Honeywell Hydraulics manufacture?
2. What bore sizes do you manufacture?
3. What is the delivery time?
4. Do you supply across India?

---

## 5. Navigation & Header

**File:** `components/Header.tsx` (Client Component)  
**Data:** `data/navigation.ts` → `lib/navigation.ts` → `getDynamicNavigation()`

### Header Layout

```
┌─────────────────────────────────────────────────────────────┐
│  [Logo Pill]          [Nav Pills]          [Phone + Burger] │
│   84px desktop / 64px mobile                                │
│   White bg, sticky, shadow on scroll (> 50px)              │
└─────────────────────────────────────────────────────────────┘
```

**Scroll behavior:** On scroll > 50px → switches from floating pill design to solid white with `shadow-md rounded-b-3xl`.

### Navigation Items

| Label | Type | Primary Href |
|-------|------|-------------|
| Company | Mega Menu | `/about-us/` |
| Products | Mega Menu | `/products/` |
| Industries | Mega Menu | `/industries/` |
| Gallery | Direct Link | `/gallery/` |
| Contact | Direct Link | `/contact-us/` |

**Note:** The "Request Quote" CTA button was **removed** from the header. It is only present in the `MobileConversionBar` and Hero CTAs.

### Company Mega Menu

Links to: About Honeywell Hydraulics, Infrastructure, Quality, Manufacturing Facility.

### Products Mega Menu

- **Hydraulic Cylinders** with subcategories: Double Acting, Single Acting, Tie Rod, Welded, Telescopic
- **Hydraulic Power Packs** with subcategories: Custom, Standard, Mini, High Pressure
- **Featured panel:** "Need a Custom Solution?" → `/contact-us/`

### Industries Mega Menu

8 industries: Injection Moulding, Automotive, Steel & Metallurgy, Construction Equipment, Agriculture, Material Handling, Plastic Processing, Special Purpose Machines.

### Mobile Menu

`MobileMenu.tsx` — slide-in drawer from right (`slide-in-right` animation). Controlled by hamburger `<Menu>` icon in header.

### MobileConversionBar

`components/MobileConversionBar.tsx` — `fixed bottom-0`, `lg:hidden`. Three-column grid:
- **Call Now** → `tel:+91-9924343873` (navy)
- **WhatsApp** → `https://wa.me/919924343873?...` (navy, green icon)
- **Get Quote** → `/request-quote/` (red background)

Min touch target: `56px`. Safe-area inset support for notched devices. Body gets `padding-bottom: 64px` on mobile via `globals.css`.

---

## 6. Footer

**File:** `components/Footer.tsx` (Server Component)  
**NAP:** Hardcoded to match Google Business Profile exactly.

### Footer Columns

1. **Products:** Hydraulic Cylinders, Hydraulic Power Packs, Hydraulic Accessories
2. **Industries:** Injection Moulding, Automotive, Steel & Metallurgy, Construction Equipment, Material Handling, Special Purpose Machines
3. **Company:** About Us, Infrastructure, Quality, Manufacturing Facility, Contact Us
4. **Locations row:** Gujarat, Maharashtra, Indore, West Bengal, Rajasthan, Pan India

### Footer Trust Badges Strip

"ISO 9001:2015 Certified | Since 2018 | 500+ Clients | 25+ Industries | Made In India"

### Footer NAP Block

Exact address: `B-18, Suryam Plaza Estate, Near Nilkanth Estate, Road No. 15, Kathwada GIDC, Ahmedabad, Gujarat 382430, India`

### WhatsApp Floating CTA

`components/ui/WhatsAppFloatingCTA.tsx` — Fixed bottom-right FAB on desktop. Uses `animate-pulse-ring` (green, 2.5s). Separate from `MobileConversionBar`.

---

## 7. Data Layer

### `data/homepage.ts` — Exported Arrays

| Export | Type | Count | Used By |
|--------|------|-------|---------|
| `trustMetrics` | `TrustMetric[]` | 5 | `ClientLogosSection` |
| `trustBadges` | `TrustBadgeData[]` | 5 | Hero / TrustStrip |
| `homepageProducts` | `HomepageProduct[]` | 4 | `ProductsSection` |
| `usps` | `USP[]` | 4 | `WhyChooseUsSection` |
| `homepageIndustries` | `HomepageIndustry[]` | 6 | `IndustriesSection` |
| `processSteps` | `ProcessStep[]` | 4 | `ProcessSection` |
| `homepageTestimonials` | `HomepageTestimonial[]` | 3 | `TestimonialsSection` |
| `homepageLocations` | `HomepageLocation[]` | 6 | `LocationsSection` |
| `homepageFAQs` | `HomepageFAQ[]` | 4 | `FAQSection` + schema |
| `certifications` | `Certification[]` | 4 | `CertificationsSection` |
| `manufacturingHighlights` | `ManufacturingHighlight[]` | 5 | `ManufacturingFacilitySection` |
| `blogPreviews` | `BlogPreview[]` | 3 | `BlogPreviewSection` |
| `clientLogos` | `ClientLogo[]` | 20 | `ClientLogosSection` |
| `actionCards` | `ActionCard[]` | 4 | `ActionCardsSection` |

### `data/navigation.ts`

Exports `siteNavigation: SiteNavigation` — the complete nav tree consumed by `Header` and `MobileMenu`.

### `data/hero-carousel-images.ts`

6 hero carousel images with `src`, `alt`, `title`, `description`, `caption`, `keyword` fields. All images in `/images/home/hero/*.webp`.

### `lib/constants.ts`

`COMPANY_INFO` and `SEO_DEFAULTS` — the single source of truth for company data used in schema and metadata generators.

---

## 8. Component System

### Layout Components

| Component | File | Props | Notes |
|-----------|------|-------|-------|
| `Section` | `ui/Section.tsx` | `bg?: 'white' \| 'gray' \| 'navy'` | `py-12 md:py-16 lg:py-24` |
| `Container` | `ui/Container.tsx` | — | `max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto` |

### `Button` Component

**File:** `components/ui/Button.tsx`  
**Base styles:** `rounded-full`, `font-body`, `font-medium`, `active:scale-[0.97]`, `ease-premium`

| Variant | Background | Text | Border | Use |
|---------|-----------|------|--------|-----|
| `primary` | `#E31B23` | White | None | Primary CTA |
| `secondary` | `#0D1B5C` | White | None | Secondary emphasis |
| `outline` | Transparent | Navy | 2px Navy | Alternative actions |
| `ghost` | Transparent | Navy | None | Tertiary |
| `link` | Transparent | Red | None | Inline text |

| Size | Padding | Font |
|------|---------|------|
| `sm` | `px-3 py-1.5` | `text-xs` |
| `md` | `px-5 py-2.5` | `text-sm` |
| `lg` | `px-6 py-3` | `text-base` |

Extra props: `leftIcon`, `rightIcon`, `isLoading`, `isFullWidth`, `href` (renders as `<Link>`), `asExternal`.

> ⚠️ **Note:** Buttons use `rounded-full` (pill shape), NOT `rounded-sm`. The design doc was incorrect — code is the truth.

### `Heading` Component

**File:** `components/ui/Heading.tsx`  
**Base:** `font-display font-bold text-honeywell-navy`

| Variant | Default Tag | Size Scale | Usage |
|---------|-------------|-----------|-------|
| `hero` | `h1` | `text-3xl sm:4xl md:5xl lg:6xl` | Hero only |
| `section` | `h2` | `text-2xl sm:3xl md:4xl lg:5xl` | Section titles |
| `subsection` | `h3` | `text-xl sm:2xl md:3xl` | Sub-sections |
| `card` | `h4` | `text-lg sm:xl md:2xl` | Card titles |

### `IconBox` Component

**File:** `components/ui/IconBox.tsx`

| Variant | Background | Text |
|---------|-----------|------|
| `primary` | `bg-honeywell-red/10` | `text-honeywell-red` |
| `secondary` | `bg-honeywell-navy/10` | `text-honeywell-navy` |
| `outline` | `bg-white border-2 border-slate-200` | `text-honeywell-navy` |

Sizes: `sm` = 32px, `md` = 48px, `lg` = 64px. Shape: `rounded-lg`.

### Card System (`globals.css`)

```css
.card { @apply bg-white border border-brand-borderGray rounded-sm transition-all duration-300; }
.card-hover { @apply hover:shadow-card-hover hover:-translate-y-1 border-t-2 border-t-transparent hover:border-t-honeywell-red; }
```

### SEO Components

- **`JsonLd`** (`components/seo/JsonLd.tsx`) — accepts any schema object, renders `<script type="application/ld+json">` in the DOM.
- **`SEO`** (`components/seo/SEO.tsx`) — utility for meta tag generation.

### FAQ Components

- **`FAQAccordion`** — Client component. Container for the list of FAQ items.
- **`FAQItem`** — Individual expandable item with `details`/`summary` or state-based toggle.

### Forms

- **`QuoteForm`** — 22KB, detailed quote form with product selection, quantity, specs.
- **`ContactForm`** — 11KB, general contact form.

---

## 9. SEO Architecture

> See `docs/SEO_ARCHITECTURE.md` for full detail.

### Metadata System

- **Global defaults:** `app/layout.tsx` + `lib/constants.ts`
- **Per-page:** `buildMetadata()` from `lib/seo.ts`
- **Title template:** `%s | Honeywell Hydraulics`

**Homepage metadata:**
```typescript
title: { absolute: "Hydraulic Cylinder & Powerpack Manufacturer | Honeywell" }
description: "Leading manufacturer of hydraulic cylinders, power packs & custom hydraulic systems in Ahmedabad..."
canonical: "https://www.honeywellhydraulics.com/"
```

### `@graph` Schema — Homepage (6 types)

```
@graph [
  Organization         ← @id: /#organization
  ManufacturingBusiness ← @id: /#localbusiness
  WebSite              ← @id: /#website (with SearchAction)
  WebPage              ← @id: /#webpage
  FAQPage              ← @id: /#faq (from homepageFAQs)
  BreadcrumbList       ← @id: /#breadcrumb
]
```

### Robots.ts Strategy

**Allowed:** All bots including `GPTBot`, `Google-Extended`, `ClaudeBot`, `PerplexityBot` (intentional — AI visibility strategy).  
**Blocked:** `AhrefsBot`, `SemrushBot`, `MJ12bot`, `DotBot` (scraper bots).  
**Disallowed paths:** `/search`, `/admin/`, `/api/`, `/thank-you/`.

### Sitemap Strategy (`next-sitemap.config.cjs`)

| Priority | Routes |
|----------|--------|
| 1.0 | `/` (weekly) |
| 0.9 | `/products/`, pillar pages, `/request-quote/`, key locations |
| 0.8 | Individual product pages, industry pages, company pages |
| 0.7 | Blog articles, other locations |
| 0.6 | Case studies, resources |
| 0.2 | Privacy, terms |

Two sitemaps: `sitemap.xml` + `sitemap-images.xml`.

---

## 10. Performance Engineering

### Font Loading (`app/layout.tsx`)

```typescript
const poppins = Poppins({ 
  variable: '--font-poppins', 
  display: 'swap', 
  weights: ['100','200','300','400','500','600','700','800','900']
});
const roboto = Roboto({ 
  variable: '--font-roboto', 
  display: 'swap' 
});
```

CSS variables `--font-poppins` and `--font-roboto` are applied via `globals.css`. Poppins is the actual rendering font for all text.

### Image Optimization (`next.config.ts`)

```typescript
images: { formats: ['image/avif', 'image/webp'], qualities: [75, 85, 100] }
```

Hero image in `HeroCarousel` must have `priority` prop for LCP.

### Security Headers (`next.config.ts`)

All routes receive: `X-DNS-Prefetch-Control`, `X-XSS-Protection`, `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`.

### Core Web Vitals Strategies

| CWV | Strategy |
|-----|---------|
| LCP | `priority` on hero image, `avif`/`webp` formats |
| CLS | `display: swap` on fonts, explicit `width/height` on all images, `interactiveWidget: 'resizes-content'` in viewport |
| INP | Server Components by default, minimal client islands |

### Analytics

- `@vercel/analytics` — `<Analytics />` in root layout
- `@vercel/speed-insights` — `<SpeedInsights />` in root layout
- Google Analytics — conditional on `NEXT_PUBLIC_GA_ID`, loaded `afterInteractive`

---

## 11. Content System (MDX)

**Parser:** `lib/content.ts` using `gray-matter` for frontmatter.  
**Content root:** `content/` directory.

### Content Types

| Type | Directory | Files |
|------|-----------|-------|
| Products | `content/products/` | `hydraulic-cylinders.mdx`, `hydraulic-power-packs.mdx` |
| Locations | `content/locations/` | `ahmedabad.mdx` |
| Industries | `content/industries/` | `steel-metallurgy.mdx` |

### Key Functions

```typescript
getAllPages<T>(contentType) // Get all MDX docs of a type
getPage<T>(contentType, slug) // Get single page by slug
getAllSlugs(contentType)    // For generateStaticParams
getRelatedPages<T>(contentType, relatedSlugs) // Linked content
```

---

## 12. Build & Deployment

### Scripts (`package.json`)

```json
"dev": "next dev",
"build": "next build",
"postbuild": "next-sitemap --config next-sitemap.config.cjs",
"start": "next start",
"lint": "eslint"
```

The `postbuild` script automatically generates `sitemap.xml` and `sitemap-images.xml` after every build.

### Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `next` | 16.2.7 | Framework |
| `react` | 19.2.4 | UI runtime |
| `tailwindcss` | ^4.3.0 | Styling |
| `lucide-react` | ^1.17.0 | Icons |
| `gray-matter` | ^4.0.3 | MDX frontmatter |
| `next-sitemap` | ^4.2.3 | Sitemap generation |
| `@vercel/analytics` | ^2.0.1 | Analytics |
| `@elevenlabs/react` | ^1.9.0 | AI voice widget |
| `sharp` | ^0.34.5 | Image processing |

### Deployment: Vercel

- `robots: { index: false }` is automatically set on non-production environments (controlled by `NEXT_PUBLIC_VERCEL_ENV !== 'production'`).
- Allowed dev origins: `strong-apes-ring.loca.lt`, `192.168.1.12` (local tunnel).

---

## 13. Environment Variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `NEXT_PUBLIC_GA_ID` | Optional | Google Analytics 4 measurement ID |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional | Search Console verification |
| `NEXT_PUBLIC_VERCEL_ENV` | Auto (Vercel) | Controls `noIndex` on staging |

---

*This document reflects the production codebase as of June 2026. Any new pages, components, or architectural changes must be documented here before being considered complete.*
