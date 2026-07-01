# Honeywell Hydraulics — Design System

> **Living Document** — Single source of truth for all UI, layout, and design decisions.  
> **Code wins every time.** If this document conflicts with `tailwind.config.ts`, `globals.css`, or any component file, update this document.

---

## 1. Brand Identity

### 1.1 Design Philosophy
- **Vibe:** Modern B2B industrial engineering — precision, trust, capability
- **Inspirations:** Bosch Rexroth, Parker Hannifin, Eaton, Danfoss
- **Prohibited:** Dark themes, red-heavy large sections, generic bootstrap styling

### 1.2 Logo Visibility Rule

| Rule | Detail |
|------|--------|
| Allowed backgrounds | `#FFFFFF`, `#F8FAFC`, `#F1F5F9` |
| Never on | Navy, Black, Red, any dark background |
| Header | Must always remain on white |

---

## 2. Color System

**Source:** `tailwind.config.ts` → `theme.extend.colors`

### 2.1 Primary Brand Colors

| Token | Hex | Tailwind Usage | Role |
|-------|-----|---------------|------|
| **Honeywell Navy** | `#0D1B5C` | `bg-honeywell-navy`, `text-honeywell-navy` | Primary headings, nav, footer, icons |
| **Honeywell Red** | `#E31B23` | `bg-honeywell-red`, `text-honeywell-red` | CTAs, hover states, accents |

### 2.2 Supporting Brand Colors

| Token | Hex | Class | Role |
|-------|-----|-------|------|
| Deep Navy | `#08133F` | `brand-deepNavy` | Footer strip, deep overlays |
| Technical Blue | `#1D3563` | `brand-technicalBlue` | Diagrams, accent blocks |
| Dark Slate | `#334155` | `brand-darkSlate` | Body emphasis text |
| Steel Gray | `#64748B` | `brand-steelGray` | Descriptions, captions |
| Border Gray | `#CBD5E1` | `brand-borderGray` | Card borders, dividers |
| Surface Gray | `#F8FAFC` | `brand-surfaceGray` | Alternating section bg |
| Light Surface | `#F1F5F9` | `brand-lightSurface` | Card bg, input bg |
| Text Dark | `#111827` | `brand-textDark` | High-contrast body text |

### 2.3 Color Distribution

| Color | % | Applied to |
|-------|---|------------|
| White | 70% | Primary section backgrounds |
| Light Gray | 20% | Alternating section backgrounds |
| Navy | 8% | Headings, nav, CTAs, footer |
| Red | 2% | Buttons, hover accents, dividers |

> ⚠️ **NEVER** create large red section backgrounds. Red is accent-only.

---

## 3. Typography

**Source:** `app/layout.tsx`, `globals.css`, `tailwind.config.ts`

### 3.1 Font Loading

```typescript
// app/layout.tsx
const poppins = Poppins({
  variable: '--font-poppins',
  display: 'swap',
  weights: ['100','200','300','400','500','600','700','800','900']
});
const roboto = Roboto({ variable: '--font-roboto', display: 'swap' });
```

### 3.2 Font Application

```css
/* globals.css — enforced globally */
html, body { font-family: var(--font-poppins), sans-serif !important; }
h1, h2, h3, h4, h5, h6 { font-family: var(--font-poppins), sans-serif !important; }
```

### 3.3 Tailwind Font Tokens

| Token | Maps To | Tailwind Class |
|-------|---------|----------------|
| `font-display` | `var(--font-poppins)` | Headings, bold text |
| `font-body` | `var(--font-poppins)` | Body copy, UI labels |
| `font-roboto` | `var(--font-roboto)` | Available for secondary usage |
| `font-mono` | `ui-monospace` | Technical specs, code |

> **Note:** Both `font-display` and `font-body` resolve to Poppins in production. Roboto is available as a secondary accent.

### 3.4 Heading Scale (`components/ui/Heading.tsx`)

| Variant | Default Tag | Mobile | sm | md | lg | Usage |
|---------|-------------|--------|----|----|----|----|
| `hero` | `h1` | `text-3xl` | `text-4xl` | `text-5xl` | `text-6xl` | Hero — 1 per page |
| `section` | `h2` | `text-2xl` | `text-3xl` | `text-4xl` | `text-5xl` | Section titles |
| `subsection` | `h3` | `text-xl` | `text-2xl` | `text-3xl` | — | Sub-sections |
| `card` | `h4` | `text-lg` | `text-xl` | `text-2xl` | — | Card/feature titles |

All headings: `font-display font-bold text-honeywell-navy leading-tight`

### 3.5 Body Text Scale

| Element | Class | Size |
|---------|-------|------|
| Section description | `text-base sm:text-lg` | 16px → 18px |
| Card body | `text-sm` | 14px |
| Overline/label | `text-xs uppercase tracking-[0.12em]` | 12px |
| Metric value | `text-[24px] sm:text-[32px] md:text-[40px]` | 24–40px |
| Metric label | `text-[11px] sm:text-[12px] uppercase tracking-[0.1em]` | 11–12px |

---

## 4. Spacing System

### 4.1 Section Spacing

**Source:** `components/ui/Section.tsx`

```css
/* Section defaults */
py-12 md:py-16 lg:py-24
```

Also available as CSS utilities in `globals.css`:
- `.section-white` — `bg-white py-16 md:py-24`
- `.section-gray` — `bg-brand-surfaceGray py-16 md:py-24`
- `.section-light` — `bg-brand-lightSurface py-16 md:py-24`

### 4.2 Container

**Source:** `components/ui/Container.tsx`

```
max-w-7xl (1280px)  |  px-4 sm:px-6 lg:px-8  |  mx-auto
```

### 4.3 Common Spacing Tokens

| Token | Value | Usage |
|-------|-------|-------|
| Section header `mb` | `mb-12` (48px) | Space between header and grid |
| Red divider below heading | `w-16 h-1` | `bg-honeywell-red rounded-full` |
| Grid gaps | `gap-6` | Cards; `gap-8` for features |
| CTA group `mt` | `mt-10` or `mt-12` | Before section CTA |

---

## 5. Shadow System

**Source:** `tailwind.config.ts` → `theme.extend.boxShadow`

| Token | Value | Class | Usage |
|-------|-------|-------|-------|
| `card` | `0 4px 6px -1px rgba(0,0,0,0.05),...` | `shadow-card` | Default card resting |
| `card-hover` | `0 10px 15px -3px rgba(0,0,0,0.1),...` | `shadow-card-hover` | Card lifted state |
| `subtle` | `0 1px 3px rgba(13,27,92,0.04),...` | `shadow-subtle` | Inputs, pills |
| `elevated` | `0 4px 12px -2px rgba(13,27,92,0.08),...` | `shadow-elevated` | Raised elements |
| `float` | `0 12px 32px -6px rgba(13,27,92,0.12),...` | `shadow-float` | Modals, popovers |
| `glow` | `0 8px 24px -4px rgba(227,27,35,0.2)` | `shadow-glow` | Red CTA glow |
| `nav-shadow` | `0 2px 16px -4px rgba(13,27,92,0.08)` | `shadow-nav-shadow` | Sticky header |

All shadows use **navy-tinted** (not pure black) for brand consistency.

---

## 6. Animation System

**Source:** `tailwind.config.ts` → `keyframes` + `animation`; `globals.css` → `@keyframes`

### 6.1 Timing Functions

| Token | Curve | Class | Usage |
|-------|-------|-------|-------|
| `premium` | `cubic-bezier(0.16, 1, 0.3, 1)` | `ease-premium` | Entrance animations |
| `smooth` | `cubic-bezier(0.4, 0, 0.2, 1)` | `ease-smooth` | Standard transitions |
| `bounce-soft` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | `ease-bounce-soft` | Micro-interactions |

### 6.2 Keyframe Animations

| Animation | Duration | Class | Usage |
|-----------|----------|-------|-------|
| `fade-in-up` | 500ms | `animate-fade-in-up` | Section entrance |
| `fade-in` | 400ms | `animate-fade-in` | Element reveal |
| `scale-in` | 500ms | `animate-scale-in` | Modals |
| `slide-in-right` | 300ms | `animate-slide-in-right` | Mobile menu |
| `marquee` | 40s linear infinite | `animate-marquee` | Client logos |

### 6.3 Custom CSS Animations (globals.css)

| Animation | Duration | Class | Usage |
|-----------|----------|-------|-------|
| `gradient-shift` | 8s | `animate-gradient` | CTA gradient bg |
| `pulse-ring` | 2.5s | `animate-pulse-ring` | WhatsApp FAB (green) |
| `pulse-ring-red` | 2.5s | `animate-pulse-ring-red` | Quote CTA |
| `shimmer` | 1.8s | `animate-shimmer` | Loading skeletons |

### 6.4 Reduced Motion

```css
/* globals.css */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

CSS custom properties `--motion-duration` and `--motion-scale` are set to `0` when reduced motion is preferred and are used by `animate-gradient`, `animate-pulse-ring`, etc.

---

## 7. Button System

**Source:** `components/ui/Button.tsx`

**Base styles:** `rounded-full font-body font-medium transition-all duration-200 ease-premium active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2`

> ⚠️ **Buttons use `rounded-full` (pill shape).** Not `rounded-sm`. The code is the truth.

### 7.1 Variants

| Variant | Background | Text | Border | Hover |
|---------|-----------|------|--------|-------|
| `primary` | `#E31B23` | White | — | `#C41220`, glow shadow |
| `secondary` | `#0D1B5C` | White | — | `#0a154a`, elevated shadow |
| `outline` | Transparent | Navy | `2px border-honeywell-navy` | Navy bg, white text |
| `ghost` | Transparent | Navy | — | `brand-lightSurface` bg |
| `link` | Transparent | Red | — | Underline, no padding |

### 7.2 Sizes

| Size | Padding | Font |
|------|---------|------|
| `sm` | `px-3 py-1.5` | `text-xs` |
| `md` | `px-5 py-2.5` | `text-sm` |
| `lg` | `px-6 py-3` | `text-base` |

### 7.3 Button Rules

- Every major section needs at least one CTA button
- Primary CTAs use `rightIcon={<ArrowRight />}`
- Pair pattern: Primary (red) + Outline (secondary action)

---

## 8. Card System

**Source:** `globals.css` + `components/ui/Card.tsx`

### 8.1 Base Card Classes

```css
.card { @apply bg-white border border-brand-borderGray rounded-sm transition-all duration-300; }
.card-hover { @apply hover:shadow-card-hover hover:-translate-y-1 border-t-2 border-t-transparent hover:border-t-honeywell-red; }
```

> Note: Cards use `rounded-sm` (2px), not `rounded-xl`. Buttons use `rounded-full`. Keep these distinct.

### 8.2 Card Hover Animation

On hover: shadow lifts (`shadow-card-hover`), card rises 4px (`-translate-y-1`), top border becomes red (`border-t-honeywell-red`). Duration: 300ms.

---

## 9. Icon System

**Library:** `lucide-react` ^1.17.0 (sole icon library — do not mix).

### 9.1 Size Convention

| Context | Class | Size |
|---------|-------|------|
| Inline with text | `w-4 h-4` | 16px |
| Feature/card | `w-5 h-5` or `w-6 h-6` | 20–24px |
| Section accent | `w-8 h-8` | 32px |
| Hero/CTA | `w-10 h-10` | 40px |

### 9.2 IconBox Component

**File:** `components/ui/IconBox.tsx`

| Variant | Background | Text | Shape |
|---------|-----------|------|-------|
| `primary` | `bg-honeywell-red/10` | `text-honeywell-red` | `rounded-lg` |
| `secondary` | `bg-honeywell-navy/10` | `text-honeywell-navy` | `rounded-lg` |
| `outline` | `bg-white border-2 border-slate-200` | `text-honeywell-navy` | `rounded-lg` |

Sizes: `sm` = 32px, `md` = 48px, `lg` = 64px.

---

## 10. Section Pattern

Every section follows this standard template:

```tsx
<Section bg="white | gray | navy" aria-labelledby="section-id-heading">
  <Container>
    {/* Centered section header */}
    <div className="text-center mb-12 flex flex-col items-center">
      <Heading variant="section" as="h2" id="section-id-heading"
        className="text-honeywell-navy mb-4">
        Section Title
      </Heading>

      <p className="text-brand-steelGray text-base sm:text-lg max-w-2xl mx-auto mt-4">
        Optional description.
      </p>
    </div>

    {/* Content grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* items */}
    </div>

    {/* Section CTA */}
    <div className="text-center mt-10">
      <Button href="/path/" variant="primary" size="lg" rightIcon={<ArrowRight />}>
        CTA Label
      </Button>
    </div>
  </Container>
</Section>
```

### 10.1 Background Alternation (Homepage)

```
01 Hero                  → White (bg-white)
02 Products              → White (bg-white)
03 Client Trust          → White (bg-white) + subtle border-top
04 Why Choose Us         → Gray  (bg-brand-surfaceGray)
05 Industries            → White (bg-white)
06 Manufacturing         → Gray  (bg-brand-surfaceGray)
07 Process               → White (bg-white)
08 Certifications        → Gray  (bg-brand-surfaceGray)
09 Testimonials          → White (bg-white)
10 Locations             → Gray  (bg-brand-surfaceGray)
11 FAQ                   → White (bg-white)
12 CTA Banner            → Navy  (bg-honeywell-navy)
```

---

## 11. Responsive Breakpoints

**Source:** Tailwind CSS defaults

| Breakpoint | Width | Layout Change |
|------------|-------|--------------|
| Default | < 640px | Single column, stacked |
| `sm` | ≥ 640px | 2-column grids start |
| `md` | ≥ 768px | Tablet layouts, header changes |
| `lg` | ≥ 1024px | Desktop nav visible, multi-column |
| `xl` | ≥ 1280px | Container max-width reached |

### 11.1 Common Grid Patterns

| Section | Mobile | sm | lg |
|---------|--------|----|----|
| Products | 1 col | 2 col | 4 col |
| Industries | 1 col | 2 col | 3 col |
| USPs | 1 col | 2 col | 4 col |
| Testimonials | 1 col | — | 3 col |
| Locations | 1 col | 2 col | 3 col |
| Trust Metrics | 2 col | 3 col | 5 col |

---

## 12. Accessibility Standards

- **Focus rings:** `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-navy focus-visible:ring-offset-2`
- **Global focus style:** `globals.css` sets `outline: 2px solid #0D1B5C; outline-offset: 2px` on `:focus-visible`
- **Skip link:** `app/(site)/layout.tsx` — `href="#main-content"` visible on keyboard focus
- **ARIA labels:** All interactive elements with icons have `aria-label`
- **Heading hierarchy:** Strict h1 → h2 → h3 — never skip levels
- **Semantic HTML:** `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`
- **Images:** All have descriptive `alt` text — no "Image of" or "Picture of" prefixes
- **Touch targets:** Min 48px on mobile (MobileConversionBar uses `min-h-[56px]`)
- **Text selection:** `::selection { background: honeywell-red; color: white; }`

---

## 13. Special CSS Utilities

| Class | Definition | Usage |
|-------|-----------|-------|
| `.bg-grid-pattern` | Navy 1px grid at 32px | `ClientLogosSection` background |
| `.hero-overlay` | `bg-honeywell-navy/75` | Hero image overlays |
| `.section-divider` | Gradient horizontal rule | Between sections |
| `.animate-shimmer` | Skeleton loading | `LoadingSkeleton.tsx` |

### Custom Scrollbar (globals.css)

```css
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-thumb { background: rgba(13,27,92,0.15); border-radius: 3px; }
/* Firefox */
* { scrollbar-width: thin; scrollbar-color: rgba(13,27,92,0.15) transparent; }
```

---

## Changelog

| Date | Change | Source |
|------|--------|--------|
| 2026-06-26 | Full rewrite from codebase audit — corrected button shape (pill not sharp), heading scale, shadow values, all component APIs | Production codebase |
