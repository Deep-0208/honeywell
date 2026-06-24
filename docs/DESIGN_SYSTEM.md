# Honeywell Hydraulics — Design System

> **Living Document** — This is the single source of truth for all UI, layout, and
> design decisions across the Honeywell Hydraulics website. All new pages MUST
> follow this document. When this document changes, all pages must be updated to match.

---

## 1. Brand Identity

### 1.1 Primary Objective
The design strictly serves **Honeywell Hydraulics** brand perception:
- **Vibe:** Modern engineering, technical capability, trust, precision manufacturing.
- **Inspirations:** Siemens, ABB, Festo, Schneider Electric, Emerson.
- **DO NOT USE:** Dark themes, red-heavy layouts, generic industrial styling.

### 1.2 Logo Visibility Rule (CRITICAL)
| Rule | Details |
|------|---------|
| **Allowed backgrounds** | White (`#FFFFFF`), Surface Gray (`#F8FAFC`), Light Surface (`#F1F5F9`) |
| **Never use on** | Navy, Black, Dark Gray, Red, or any dark background |
| **Header** | Must always be white background |

---

## 2. Color System

### 2.1 Primary Colors

| Token | Hex | Tailwind Class | Usage |
|-------|-----|----------------|-------|
| **Honeywell Navy** | `#0D1B5C` | `honeywell-navy` | Headings, nav, icons, footer strip |
| **Honeywell Red** | `#E31B23` | `honeywell-red` | CTA buttons, hover states, key highlights |
| **White** | `#FFFFFF` | `white` | Primary backgrounds, breathing room |

### 2.2 Supporting Colors

| Token | Hex | Tailwind Class | Usage |
|-------|-----|----------------|-------|
| Deep Navy | `#08133F` | `brand-deepNavy` | Footer strip, deep overlays |
| Technical Blue | `#1D3563` | `brand-technicalBlue` | Diagrams, technical accents |
| Dark Slate | `#334155` | `brand-darkSlate` | Body text emphasis |
| Steel Gray | `#64748B` | `brand-steelGray` | Body text, descriptions |
| Border Gray | `#CBD5E1` | `brand-borderGray` | Card borders, dividers |
| Surface Gray | `#F8FAFC` | `brand-surfaceGray` | Alternate section backgrounds |
| Light Surface | `#F1F5F9` | `brand-lightSurface` | Card surfaces, subtle fills |
| Text Dark | `#111827` | `brand-textDark` | High-contrast body text |

### 2.3 Color Distribution Rule

| Color | Percentage | Where |
|-------|-----------|-------|
| White | 70% | Primary backgrounds, breathing room |
| Light Gray | 20% | Alternate section backgrounds |
| Navy | 8% | Headings, navigation, icons, footer |
| Red | 2% | CTA buttons, hover states, key highlights |

> ⚠️ **Never** create large red sections. Red is used sparingly for emphasis only.

---

## 3. Typography

### 3.1 Font Family

| Role | Font | Weights | Tailwind Class |
|------|------|---------|----------------|
| **All headings** | Poppins | 600, 700 | `font-display` |
| **Body text** | Poppins | 400, 500 | `font-body` |
| **Technical data** | System mono | — | `font-mono` |

> **Note:** `globals.css` enforces Poppins on all headings and body via `!important`.
> The `font-display` and `font-body` Tailwind tokens map to `var(--font-roboto)`
> but are overridden by the global CSS rule. All rendered text uses Poppins.

### 3.2 Heading Scale

| Variant | HTML Tag | Mobile | Tablet | Desktop | Usage |
|---------|----------|--------|--------|---------|-------|
| `hero` | `h1` | 36px (text-4xl) | 48px (text-5xl) | 60px (text-6xl) | Hero section only — 1 per page |
| `section` | `h2` | 30px (text-3xl) | 36px (text-4xl) | 48px (text-5xl) | Section titles |
| `subsection` | `h3` | 24px (text-2xl) | 30px (text-3xl) | — | Sub-sections within a section |
| `card` | `h4` | 20px (text-xl) | 24px (text-2xl) | — | Card titles, feature names |

### 3.3 Body Text Scale

| Element | Class | Size |
|---------|-------|------|
| Section description | `text-base sm:text-lg` | 16px → 18px |
| Card/feature body | `text-sm` | 14px |
| Overline/label | `text-xs uppercase tracking-[0.12em]` | 12px |
| Metric label | `text-[11px] sm:text-[12px] uppercase tracking-[0.1em]` | 11px → 12px |

### 3.4 Heading Hierarchy Rules

```
h1 — ONE per page. Always in the Hero section.
  h2 — One per section. Uses <Heading variant="section">.
    h3 — Sub-items within sections (feature titles, card titles, etc.)
      h4 — Rarely needed. Only for deeply nested content.
```

> ⚠️ **Never skip heading levels** (e.g., h1 → h3). Always maintain proper hierarchy.

---

## 4. Spacing System

### 4.1 Section Spacing

| Component | Padding | Class |
|-----------|---------|-------|
| `<Section>` | Top/bottom: 64px (mobile), 96px (desktop) | `py-16 md:py-24` |

### 4.2 Container

| Property | Value | Class |
|----------|-------|-------|
| Max width | 1280px | `max-w-7xl` |
| Horizontal padding | 16px → 24px → 32px | `px-4 sm:px-6 lg:px-8` |
| Centering | Auto margins | `mx-auto` |

### 4.3 Common Spacing Values

| Token | Value | Usage |
|-------|-------|-------|
| Section header margin-bottom | `mb-12` (48px) | Space between header and content grid |
| Red divider below heading | `mb-4` to heading, then divider | Consistent visual break |
| Grid gaps | `gap-6` (cards), `gap-8` (features) | Standard spacing between items |
| CTA group margin-top | `mt-10` or `mt-12` | Space before section CTA |

---

## 5. Section Pattern (Standard Template)

Every section on the site MUST follow this pattern:

```tsx
<Section bg="white | gray | navy" aria-labelledby="unique-id-heading">
  <Container>
    {/* Section header — centered */}
    <div className="text-center mb-12 flex flex-col items-center">
      <Heading variant="section" as="h2" id="unique-id-heading"
        className="text-3xl sm:text-4xl text-honeywell-navy mb-4">
        Section Title Here
      </Heading>
      <div className="w-16 h-1 bg-honeywell-red rounded-full" aria-hidden="true" />
      {/* Optional description */}
      <p className="text-brand-steelGray font-body text-base sm:text-lg max-w-2xl mx-auto mt-4">
        Description text here.
      </p>
    </div>

    {/* Content grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Grid items */}
    </div>

    {/* Section CTA (required for most sections) */}
    <div className="text-center mt-10">
      <Button href="/target/" variant="primary | outline" size="lg"
        rightIcon={<ArrowRight className="w-5 h-5" />}>
        CTA Text
      </Button>
    </div>
  </Container>
</Section>
```

### 5.1 Section Header Pattern
- **Heading**: `<Heading variant="section">` with `text-3xl sm:text-4xl`
- **Red divider**: `<div className="w-16 h-1 bg-honeywell-red rounded-full" />`
- **Description** (optional): `text-brand-steelGray font-body text-base sm:text-lg`
- **All centered**: `text-center mb-12 flex flex-col items-center`

### 5.2 Background Alternation Rule

Sections MUST alternate backgrounds to create visual depth:

```
Section 1:  bg="white"
Section 2:  bg="gray"    ← brand-surfaceGray (#F8FAFC)
Section 3:  bg="white"
Section 4:  bg="gray"
...
Final CTA:  bg="navy"    ← honeywell-navy (#0D1B5C)
```

> ⚠️ **Never** have two adjacent sections with the same background color.

---

## 6. Component Inventory

### 6.1 Layout Components

| Component | File | Purpose |
|-----------|------|---------|
| `Section` | `components/ui/Section.tsx` | Wraps page sections with consistent py spacing + bg |
| `Container` | `components/ui/Container.tsx` | Max-width container with horizontal padding |
| `Header` | `components/Header.tsx` | Global sticky header with navigation |
| `Footer` | `components/Footer.tsx` | Global footer with links + NAP |
| `MobileConversionBar` | `components/MobileConversionBar.tsx` | Sticky bottom bar on mobile |

### 6.2 UI Components

| Component | File | Purpose |
|-----------|------|---------|
| `Heading` | `components/ui/Heading.tsx` | Consistent heading typography (hero/section/subsection/card) |
| `Button` | `components/ui/Button.tsx` | All buttons (primary/secondary/outline/ghost/link) |
| `Badge` | `components/ui/Badge.tsx` | Small credential labels (ISO, Made in India, etc.) |
| `Card` | `components/ui/Card.tsx` | Base card wrapper with hover states |
| `IconBox` | `components/ui/IconBox.tsx` | Icon container with background circle |
| `CTA` | `components/ui/CTA.tsx` | Full-width navy CTA banner section |

### 6.3 Card Components

| Component | File | Purpose |
|-----------|------|---------|
| `ProductCard` | `components/cards/ProductCard.tsx` | Product category cards with image |
| `IndustryCard` | `components/cards/IndustryCard.tsx` | Industry cards with icon |
| `TestimonialCard` | `components/cards/TestimonialCard.tsx` | Customer testimonial cards |
| `LocationCard` | `components/cards/LocationCard.tsx` | Location/city cards with tags |

---

## 7. Button System

### 7.1 Variants

| Variant | Background | Text | Border | Use Case |
|---------|-----------|------|--------|----------|
| `primary` | `#E31B23` (red) | White | None | Primary CTA — Request Quote, Contact Us |
| `secondary` | `#0D1B5C` (navy) | White | None | Secondary emphasis actions |
| `outline` | Transparent | Navy | 2px Navy | Alternative actions — Explore, View All |
| `ghost` | Transparent | Navy | None | Tertiary — low-emphasis links |
| `link` | Transparent | Red | None | Inline text links |

### 7.2 Sizes

| Size | Padding | Font Size |
|------|---------|-----------|
| `sm` | `px-3 py-1.5` | `text-xs` (12px) |
| `md` | `px-5 py-2.5` | `text-sm` (14px) |
| `lg` | `px-6 py-3` | `text-base` (16px) |

### 7.3 Button Rules
- **Every major section** should have at least one CTA button.
- **CTA pair pattern**: Primary (red) + Ghost/Outline (secondary action).
- **Arrow icon**: Primary CTAs include `rightIcon={<ArrowRight />}`.
- **Hover**: `active:scale-[0.97]` press effect on all buttons.
- **Border radius**: `rounded-sm` (2px) — sharp, engineering feel.

---

## 8. Card System

### 8.1 Base Card Styles

```
Background:    bg-white
Border:        border border-brand-borderGray (or border-slate-200)
Border radius: rounded-sm (CSS class) or rounded-xl (certification cards)
Shadow:        shadow-card (resting)
Hover:         shadow-card-hover + -translate-y-1 + red top border
Transition:    transition-all duration-300
```

### 8.2 Card Hover Animation

```css
.card-hover {
  hover:shadow-card-hover
  hover:-translate-y-1
  border-t-2 border-t-transparent hover:border-t-honeywell-red
}
```

> Cards must feel responsive — subtle lift + shadow + red accent on hover.

---

## 9. Shadow System

| Token | CSS Value | Usage |
|-------|-----------|-------|
| `subtle` | `0 1px 3px rgba(13,27,92,0.04)` | Default resting state |
| `elevated` | `0 4px 12px -2px rgba(13,27,92,0.08)` | Cards, raised elements |
| `float` | `0 12px 32px -6px rgba(13,27,92,0.12)` | Modals, popovers |
| `glow` | `0 8px 24px -4px rgba(227,27,35,0.2)` | Red CTA glow effect |
| `nav-shadow` | `0 2px 16px -4px rgba(13,27,92,0.08)` | Sticky header |

> All shadows use **navy tint** (not pure black) for brand consistency.

---

## 10. Animation System

### 10.1 Timing Functions

| Token | Curve | Usage |
|-------|-------|-------|
| `premium` | `cubic-bezier(0.16, 1, 0.3, 1)` | Entrance animations |
| `smooth` | `cubic-bezier(0.4, 0, 0.2, 1)` | Standard transitions |
| `bounce-soft` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Playful micro-interactions |

### 10.2 Standard Animations

| Animation | Duration | Usage |
|-----------|----------|-------|
| `fade-in-up` | 500ms | Section entrance on scroll |
| `fade-in` | 400ms | Element reveal |
| `scale-in` | 500ms | Modal/popover entrance |
| `marquee` | 40s linear infinite | Client logos scroll |

### 10.3 Reduced Motion
All animations respect `prefers-reduced-motion`. CSS variable `--motion-duration`
is set to `0` when reduced motion is preferred.

---

## 11. Icon System

### 11.1 Library
- **Primary:** `lucide-react` (MIT licensed, consistent style)
- **DO NOT** mix with other icon libraries.

### 11.2 Size Convention

| Context | Class | Size |
|---------|-------|------|
| Inline with text | `w-4 h-4` | 16px |
| Feature/card icon | `w-5 h-5` or `w-6 h-6` | 20px–24px |
| Large feature icon | `w-8 h-8` | 32px |
| Hero/placeholder | `w-10 h-10` | 40px |

### 11.3 Icon Container Pattern (IconBox)
Icons are wrapped in `<IconBox>` with these styles:
- Background: `bg-honeywell-red/10` (primary) or `bg-honeywell-navy/[0.06]` (outline)
- Shape: Rounded square (`rounded-lg` or `rounded-2xl`)
- Sizes: `sm` (32px), `md` (40px), `lg` (48px)

---

## 12. Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| Mobile (default) | < 640px | Single column, stacked layouts |
| `sm` | ≥ 640px | 2-column grids begin |
| `md` | ≥ 768px | Tablet — adjusted spacing |
| `lg` | ≥ 1024px | Desktop — full multi-column layouts |
| `xl` | ≥ 1280px | Large desktop — max container width |

### 12.1 Common Grid Patterns

| Pattern | Mobile | sm | lg | Usage |
|---------|--------|-----|-----|-------|
| Products | 1 col | 2 col | 4 col | Product cards |
| Industries | 1 col | 2 col | 3 col | Industry cards |
| USP/Features | 1 col | 2 col | 4 col | Feature icons |
| Testimonials | 1 col | — | 3 col | Testimonial cards |
| Locations | 1 col | 2 col | 3 col | Location cards |

---

## 13. SEO Component Rules

### 13.1 Per-Page Requirements
- **Single H1** in the Hero/first section only
- **All sections** wrapped in `<section>` with `aria-labelledby`
- **All headings** must have unique `id` attributes
- **All images** must have descriptive `alt` text (no "Image of" prefix)
- **All interactive elements** keyboard-focusable with visible focus rings
- **JSON-LD schema** on every page via `<JsonLd>` component

### 13.2 Internal Linking
- Every section should link to its corresponding pillar page
- Use `<Button href="/path/">` for section CTAs
- Footer includes full site navigation links

---

## 14. Page Template

When building a new page, follow this structure:

```
page.tsx
├── SEO Metadata (buildMetadata + keywords)
├── JSON-LD Schema (buildPageGraphSchema or similar)
├── Hero/Header Section (h1)
├── Content Sections (alternating white/gray, each with h2)
│   ├── Section Header (Heading + red divider + description)
│   ├── Content Grid
│   └── Section CTA
├── FAQ Section (if applicable)
└── CTA Banner (navy bg — final conversion)
```

---

## 15. File Organization

```
components/
├── ui/              ← Atomic design system components
├── cards/           ← Card variants (Product, Industry, etc.)
├── homepage/        ← Page-specific sections
├── faq/             ← FAQ accordion component
├── forms/           ← Form components
├── seo/             ← JSON-LD, meta components
├── layout/          ← Layout helpers
├── Header.tsx       ← Global header
└── Footer.tsx       ← Global footer

data/
├── homepage.ts      ← Homepage section data
├── hero-carousel-images.ts
└── [page-name].ts   ← Per-page data files

docs/
├── DESIGN_SYSTEM.md ← THIS FILE (source of truth)
├── DESIGN.md        ← Original design brief
└── SEO_ARCHITECTURE.md
```

---

## Changelog

| Date | Change | Author |
|------|--------|--------|
| 2026-06-24 | Initial creation from homepage audit | AI |
