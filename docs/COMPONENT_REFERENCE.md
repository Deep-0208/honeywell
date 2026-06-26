# Component Reference Guide

> **Source of truth:** The actual component files. This document summarizes props, variants, and usage based on the production code.

---

## Layout Components

### `Section`
**File:** `components/ui/Section.tsx` | **Type:** Server Component

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `bg` | `'white' \| 'gray' \| 'navy'` | `'white'` | Section background |
| `className` | `string` | `''` | Additional classes |
| `...HTMLAttributes` | — | — | Spread to `<section>` |

```tsx
<Section bg="gray" aria-labelledby="section-heading-id">
  {/* content */}
</Section>
```

Padding: `py-12 md:py-16 lg:py-24`  
Background: white → `bg-white`, gray → `bg-brand-surfaceGray`, navy → `bg-honeywell-navy text-white`

---

### `Container`
**File:** `components/ui/Container.tsx` | **Type:** Server Component

No props beyond standard HTML div attributes. Sets `max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto`.

```tsx
<Container>
  {/* max-width constrained content */}
</Container>
```

---

### `PageContainer`
**File:** `components/layout/PageContainer.tsx` | **Type:** Server Component

Page-level wrapper. Use within page.tsx for consistent page padding.

---

## Typography

### `Heading`
**File:** `components/ui/Heading.tsx` | **Type:** Server Component

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'hero' \| 'section' \| 'subsection' \| 'card'` | `'section'` | Typography scale |
| `as` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | variant default | Override HTML tag |
| `className` | `string` | `''` | Additional classes |

```tsx
<Heading variant="section" as="h2" id="section-id" className="text-honeywell-navy mb-4">
  Section Title
</Heading>
```

Base styles: `font-display font-bold text-honeywell-navy`

> ⚠️ ALWAYS add `id` to headings used with `aria-labelledby` on their parent `<section>`.

---

## Interactive Components

### `Button`
**File:** `components/ui/Button.tsx` | **Type:** Server/Client compatible

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'link'` | `'primary'` | Visual style |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size token |
| `href` | `string` | — | Renders as `<Link>` |
| `asExternal` | `boolean` | `false` | Renders as `<a target="_blank">` |
| `leftIcon` | `ReactNode` | — | Icon before text |
| `rightIcon` | `ReactNode` | — | Icon after text |
| `isLoading` | `boolean` | `false` | Shows spinner |
| `isFullWidth` | `boolean` | `false` | `w-full` |

```tsx
<Button href="/request-quote/" variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
  Request Quote
</Button>
```

**All buttons are `rounded-full` (pill shape).**

---

### `FAQAccordion`
**File:** `components/faq/FAQAccordion.tsx` | **Type:** Client Component (`"use client"`)

Wraps a list of `FAQItem` components. Handles open/close state.

---

### `FAQItem`
**File:** `components/faq/FAQItem.tsx` | **Type:** Client Component

Individual expandable FAQ item.

---

## Icon Container

### `IconBox`
**File:** `components/ui/IconBox.tsx` | **Type:** Server Component

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `ReactNode` | required | The Lucide icon element |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | 32/48/64px |
| `variant` | `'primary' \| 'secondary' \| 'outline'` | `'primary'` | Color scheme |

```tsx
<IconBox icon={<Settings2 className="w-6 h-6" />} size="md" variant="primary" />
```

---

## SEO Components

### `JsonLd`
**File:** `components/seo/JsonLd.tsx` | **Type:** Server Component

| Prop | Type | Description |
|------|------|-------------|
| `data` | `object` | Any valid JSON-LD object |

```tsx
<JsonLd data={buildHomepageGraphSchema({ title, description, faqs })} />
```

Renders: `<script type="application/ld+json">{JSON.stringify(data)}</script>`

---

## Navigation Components

### `Header`
**File:** `components/Header.tsx` | **Type:** Client Component (`"use client"`)

| Prop | Type | Description |
|------|------|-------------|
| `navigation` | `SiteNavigation` | From `getDynamicNavigation()` |

Features: scroll detection (50px threshold), mega menu with hover delay (200ms), `usePathname` for active states, keyboard navigation (Enter/Space/Escape).

**Note:** The Request Quote CTA button is NOT in the header. Removed intentionally.

---

### `MegaMenu`
**File:** `components/MegaMenu.tsx` | **Type:** Client Component

Rendered inside `Header.tsx`. Receives `item`, `isOpen`, `onClose`.

---

### `MobileMenu`
**File:** `components/MobileMenu.tsx` | **Type:** Client Component

Full-screen slide-in drawer. Triggered by hamburger button in `Header`.

---

### `MobileConversionBar`
**File:** `components/MobileConversionBar.tsx` | **Type:** Client Component

Fixed bottom bar on mobile (`lg:hidden`). Three CTAs:
- Call Now → `tel:+91-9924343873`
- WhatsApp → `wa.me/919924343873`
- Get Quote → `/request-quote/` (red bg)

---

## Card Components

### `ProductCard`
**File:** `components/cards/ProductCard.tsx` | **Type:** Server Component

Used in `ProductsSection`. Displays product image, category badge, title, description, and CTA.

### `IndustryCard`
**File:** `components/cards/IndustryCard.tsx` | **Type:** Server Component

Used in `IndustriesSection`. Displays Lucide icon, industry name, description.

### `TestimonialCard`
**File:** `components/cards/TestimonialCard.tsx` | **Type:** Server Component

Used in `TestimonialsSection`. Displays quote, name, company, role.

### `LocationCard`
**File:** `components/cards/LocationCard.tsx` | **Type:** Server Component

Used in `LocationsSection`. Displays city, description, industry tags.

### `ServiceCard`
**File:** `components/cards/ServiceCard.tsx` | **Type:** Server Component

Generic service/feature display card.

### `ApplicationCard`
**File:** `components/cards/ApplicationCard.tsx` | **Type:** Server Component

Application-specific display card.

---

## Homepage Section Components

All in `components/homepage/`. All are **Server Components** except `HeroCarousel`.

| Component | Data Source | Key Features |
|-----------|-------------|-------------|
| `HeroSection` | `hero-carousel-images.ts` | H1, carousel, CTAs, trust chips |
| `HeroCarousel` | prop `images` | **Client** — image auto-rotation |
| `ProductsSection` | `homepageProducts` | 4 product category cards |
| `ClientLogosSection` | `clientLogos` + `trustMetrics` | Marquee logos, 5 stats |
| `WhyChooseUsSection` | `usps` | 4 USPs with IconBox |
| `IndustriesSection` | `homepageIndustries` | 6 industry cards |
| `ManufacturingFacilitySection` | `manufacturingHighlights` | 5 facility highlights |
| `ProcessSection` | `processSteps` | 4-step numbered process |
| `CertificationsSection` | `certifications` | ISO, MSME, GST, Make in India |
| `TestimonialsSection` | `homepageTestimonials` | 3 testimonial cards |
| `LocationsSection` | `homepageLocations` | 6 location cards |
| `FAQSection` | `homepageFAQs` | `FAQAccordion` with 4 items |
| `HomepageCTASection` | Static | Navy bg, final CTA |
| `BlogPreviewSection` | `blogPreviews` | 3 blog article previews |
| `ActionCardsSection` | `actionCards` | 4 action cards (Quote/Catalog/Support/Engineer) |
| `TrustStrip` | Static | Small trust badges strip |

---

## Utility Components

### `Badge`
**File:** `components/ui/Badge.tsx`

Small credential pills. Used for ISO, Made in India, etc.

### `Card`
**File:** `components/ui/Card.tsx`

Base card wrapper. Apply `.card` and `.card-hover` CSS classes.

### `CTA`
**File:** `components/ui/CTA.tsx`

Full-width navy CTA banner. Use `HomepageCTASection` on homepage.

### `EmptyState`
**File:** `components/ui/EmptyState.tsx`

Empty list / no results fallback UI.

### `LoadingSkeleton`
**File:** `components/ui/LoadingSkeleton.tsx`

Shimmer placeholder using `.animate-shimmer` CSS class. Used in `app/(site)/loading.tsx`.

### `WhatsAppFloatingCTA`
**File:** `components/ui/WhatsAppFloatingCTA.tsx`

Fixed bottom-right WhatsApp FAB button. Shows on desktop only (hidden on mobile where `MobileConversionBar` serves this purpose). Uses `animate-pulse-ring` for green pulsing effect.

---

## Form Components

### `QuoteForm`
**File:** `components/forms/QuoteForm.tsx`
22KB — Detailed quote form with product type selection, bore size, stroke, pressure, quantity, delivery timeline, and contact info fields.

### `ContactForm`
**File:** `components/forms/ContactForm.tsx`
11KB — General contact form with name, email, phone, company, and message fields.

---

## Layout Helpers

### `Breadcrumb`
**File:** `components/layout/Breadcrumb.tsx`

Breadcrumb navigation with `BreadcrumbList` JSON-LD schema injection. Required on all inner pages.

---

## Special Components

### `ElevenLabsWidget`
**File:** `components/ElevenLabsWidget.tsx`

AI voice widget powered by `@elevenlabs/react` ^1.9.0. Rendered in `app/layout.tsx`. Always visible across all pages.
