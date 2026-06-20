# 🎨 Honeywell Hydraulics — Design System
### Developer-Ready Specification for a Premium Industrial Manufacturer Website

**Brand Positioning:** Premium · Modern · Industrial · Trustworthy · Engineering-Grade  
**Anti-Pattern:** Avoid anything that looks like WordPress, template themes, generic SaaS, or cheap manufacturing sites  
**Reference Aesthetic:** Think Siemens Industrial + Linear App + Stripe — precision engineering meets modern software design  

---

## Design Philosophy

```
INDUSTRIAL PRECISION     →  Clean geometry, sharp edges, engineering grid
MANUFACTURING TRUST      →  Deep blues, steel grays, heavy typography weights
MODERN SOPHISTICATION    →  Subtle gradients, micro-animations, ample whitespace
PREMIUM CONFIDENCE       →  Restraint over decoration, quality over quantity
FUNCTIONAL CLARITY       →  Every element earns its place, zero visual clutter
```

> [!IMPORTANT]
> **The #1 rule:** This site must look like it was built by a company that manufactures precision equipment — not by someone who installed a WordPress theme. Every design choice should communicate: "We are serious engineers who build things that work."

---

# 1. COLORS

## 1.1 Color Tokens (CSS Custom Properties)

```css
:root {
  /* ═══════════════════════════════════════════════════
     PRIMARY — Steel Blue
     Industrial, trustworthy, engineering-grade.
     Inspired by hydraulic fluid blue + precision steel.
     ═══════════════════════════════════════════════════ */
  --color-primary-50:  #EEF4FF;
  --color-primary-100: #D9E6FF;
  --color-primary-200: #B3CDFF;
  --color-primary-300: #7AABFF;
  --color-primary-400: #4A8BF5;
  --color-primary-500: #2563EB;   /* ← Main brand blue */
  --color-primary-600: #1D4ED8;
  --color-primary-700: #1E40AF;
  --color-primary-800: #1E3A8A;
  --color-primary-900: #172554;
  --color-primary-950: #0F172A;   /* ← Deepest navy */

  /* ═══════════════════════════════════════════════════
     ACCENT — Hydraulic Orange
     Energy, urgency, industrial warmth.
     Used ONLY for CTAs and critical highlights.
     ═══════════════════════════════════════════════════ */
  --color-accent-50:  #FFF7ED;
  --color-accent-100: #FFEDD5;
  --color-accent-200: #FED7AA;
  --color-accent-300: #FDBA74;
  --color-accent-400: #FB923C;
  --color-accent-500: #F97316;   /* ← Main accent orange */
  --color-accent-600: #EA580C;
  --color-accent-700: #C2410C;
  --color-accent-800: #9A3412;
  --color-accent-900: #7C2D12;

  /* ═══════════════════════════════════════════════════
     NEUTRAL — Slate
     Backgrounds, borders, body text.
     Cool-toned grays that pair with steel blue.
     ═══════════════════════════════════════════════════ */
  --color-neutral-0:   #FFFFFF;
  --color-neutral-50:  #F8FAFC;
  --color-neutral-100: #F1F5F9;
  --color-neutral-200: #E2E8F0;
  --color-neutral-300: #CBD5E1;
  --color-neutral-400: #94A3B8;
  --color-neutral-500: #64748B;
  --color-neutral-600: #475569;
  --color-neutral-700: #334155;
  --color-neutral-800: #1E293B;
  --color-neutral-900: #0F172A;
  --color-neutral-950: #020617;

  /* ═══════════════════════════════════════════════════
     SEMANTIC — Status Colors
     ═══════════════════════════════════════════════════ */
  --color-success-500: #22C55E;
  --color-success-600: #16A34A;
  --color-success-50:  #F0FDF4;

  --color-warning-500: #EAB308;
  --color-warning-600: #CA8A04;
  --color-warning-50:  #FEFCE8;

  --color-error-500:   #EF4444;
  --color-error-600:   #DC2626;
  --color-error-50:    #FEF2F2;

  /* ═══════════════════════════════════════════════════
     SURFACE — Layered Background System
     Creates depth without visual clutter.
     ═══════════════════════════════════════════════════ */
  --surface-ground:    #FFFFFF;            /* Page background */
  --surface-card:      #FFFFFF;            /* Card background */
  --surface-raised:    #F8FAFC;            /* Raised sections (alternating bg) */
  --surface-sunken:    #F1F5F9;            /* Inset areas, code blocks */
  --surface-overlay:   rgba(15, 23, 42, 0.6); /* Modal/popup overlay */
  --surface-dark:      #0F172A;            /* Dark sections (hero, CTA) */
  --surface-dark-card: #1E293B;            /* Cards on dark backgrounds */

  /* ═══════════════════════════════════════════════════
     GRADIENTS
     ═══════════════════════════════════════════════════ */
  --gradient-hero:      linear-gradient(135deg, #0F172A 0%, #1E3A8A 50%, #172554 100%);
  --gradient-cta:       linear-gradient(135deg, #1E40AF 0%, #2563EB 100%);
  --gradient-accent:    linear-gradient(135deg, #F97316 0%, #EA580C 100%);
  --gradient-subtle:    linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%);
  --gradient-steel:     linear-gradient(135deg, #334155 0%, #1E293B 100%);
  --gradient-mesh:      radial-gradient(ellipse at 20% 50%, rgba(37, 99, 235, 0.08) 0%, transparent 50%),
                        radial-gradient(ellipse at 80% 20%, rgba(249, 115, 22, 0.05) 0%, transparent 50%);
}
```

## 1.2 Color Usage Rules

| Element | Color Token | Rule |
|---|---|---|
| **Body text** | `--color-neutral-700` | Primary readable text on light backgrounds |
| **Headings** | `--color-neutral-900` | Maximum contrast for section headings |
| **Subtext / Labels** | `--color-neutral-500` | De-emphasized secondary text |
| **Links** | `--color-primary-600` | Underline on hover, no underline by default |
| **Primary CTA buttons** | `--color-accent-500` bg | Orange on dark = high visibility. ONLY for main CTAs. |
| **Secondary buttons** | `--color-primary-600` bg | Blue for secondary actions |
| **Borders** | `--color-neutral-200` | Subtle, 1px only |
| **Hover states** | Darken by one shade | e.g., primary-500 → primary-600 on hover |
| **Dark sections** | `--surface-dark` bg + `#FFFFFF` text | Hero, final CTA section, footer |
| **Alternating sections** | `--surface-ground` ↔ `--surface-raised` | Every other section alternates for visual rhythm |
| **Card backgrounds** | `--surface-card` | White with subtle border or shadow |
| **Accent NEVER for body text** | — | Orange is CTA only. Never large text blocks. |

## 1.3 Dark Section Palette

For hero, manufacturing, and final CTA sections with dark backgrounds:

```css
.section-dark {
  background: var(--gradient-hero);
  color: #FFFFFF;
}
.section-dark h2 { color: #FFFFFF; }
.section-dark p  { color: #CBD5E1; }  /* neutral-300 for softer body on dark */
.section-dark .stat-number { color: var(--color-accent-400); }
.section-dark .card {
  background: var(--surface-dark-card);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
```

---

# 2. TYPOGRAPHY

## 2.1 Font Stack

```css
:root {
  /* ═══════════════════════════════════════════════════
     PRIMARY FONT — Inter
     Clean, modern, highly legible sans-serif.
     Designed for screens. Perfect for industrial B2B.
     NOT Poppins (too friendly), NOT Open Sans (too generic),
     NOT Roboto (too Google).
     ═══════════════════════════════════════════════════ */
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  /* ═══════════════════════════════════════════════════
     MONO FONT — JetBrains Mono
     Used ONLY for spec tables, technical values,
     bore sizes, pressure ratings — engineering data.
     ═══════════════════════════════════════════════════ */
  --font-mono: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
}
```

**Font Loading Strategy:**

```html
<!-- Preload critical font weights -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap">
<link rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap">
```

## 2.2 Type Scale (Modular — 1.250 ratio)

```css
:root {
  --text-xs:    0.75rem;    /* 12px — captions, fine print */
  --text-sm:    0.875rem;   /* 14px — labels, metadata */
  --text-base:  1rem;       /* 16px — body text */
  --text-lg:    1.125rem;   /* 18px — lead paragraphs */
  --text-xl:    1.25rem;    /* 20px — card titles */
  --text-2xl:   1.5rem;     /* 24px — section subtitles */
  --text-3xl:   1.875rem;   /* 30px — H3 */
  --text-4xl:   2.25rem;    /* 36px — H2 */
  --text-5xl:   3rem;       /* 48px — H1 */
  --text-6xl:   3.75rem;    /* 60px — Hero display */

  --leading-tight:  1.2;     /* Headings */
  --leading-normal: 1.6;     /* Body text */
  --leading-relaxed: 1.75;   /* Long-form reading */

  --tracking-tight:  -0.025em;  /* Headings — tighter for impact */
  --tracking-normal:  0;        /* Body */
  --tracking-wide:    0.05em;   /* Labels, ALL-CAPS text */
}
```

## 2.3 Typography Styles

```css
/* ─── DISPLAY — Hero headline only ─── */
.text-display {
  font-family: var(--font-sans);
  font-size: var(--text-6xl);
  font-weight: 800;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-neutral-900);
}

/* ─── H1 — One per page, primary keyword ─── */
h1, .text-h1 {
  font-family: var(--font-sans);
  font-size: var(--text-5xl);
  font-weight: 800;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-neutral-900);
}

/* ─── H2 — Section headings ─── */
h2, .text-h2 {
  font-family: var(--font-sans);
  font-size: var(--text-4xl);
  font-weight: 700;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-neutral-900);
}

/* ─── H3 — Subsection / card headings ─── */
h3, .text-h3 {
  font-family: var(--font-sans);
  font-size: var(--text-3xl);
  font-weight: 700;
  line-height: var(--leading-tight);
  color: var(--color-neutral-900);
}

/* ─── H4 — FAQ questions, feature titles ─── */
h4, .text-h4 {
  font-family: var(--font-sans);
  font-size: var(--text-2xl);
  font-weight: 600;
  line-height: var(--leading-tight);
  color: var(--color-neutral-800);
}

/* ─── Body ─── */
.text-body {
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: 400;
  line-height: var(--leading-normal);
  color: var(--color-neutral-700);
}

/* ─── Body Large — Lead paragraphs, intros ─── */
.text-body-lg {
  font-family: var(--font-sans);
  font-size: var(--text-lg);
  font-weight: 400;
  line-height: var(--leading-relaxed);
  color: var(--color-neutral-600);
}

/* ─── Label — Form labels, metadata, overlines ─── */
.text-label {
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: 600;
  line-height: var(--leading-normal);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-neutral-500);
}

/* ─── Caption — Small text, fine print ─── */
.text-caption {
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: 400;
  line-height: var(--leading-normal);
  color: var(--color-neutral-400);
}

/* ─── Spec Value — Technical data, measurements ─── */
.text-spec {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-primary-700);
}

/* ─── Stat Number — Trust bar big numbers ─── */
.text-stat {
  font-family: var(--font-sans);
  font-size: var(--text-5xl);
  font-weight: 800;
  line-height: 1;
  letter-spacing: var(--tracking-tight);
  color: var(--color-primary-600);
}

/* ─── Responsive adjustments ─── */
@media (max-width: 768px) {
  .text-display { font-size: var(--text-4xl); }
  h1, .text-h1 { font-size: var(--text-4xl); }
  h2, .text-h2 { font-size: var(--text-3xl); }
  h3, .text-h3 { font-size: var(--text-2xl); }
  .text-stat   { font-size: var(--text-4xl); }
}
```

---

# 3. SPACING

## 3.1 Spacing Scale (8px base)

```css
:root {
  --space-0:   0;
  --space-1:   0.25rem;   /*  4px */
  --space-2:   0.5rem;    /*  8px */
  --space-3:   0.75rem;   /* 12px */
  --space-4:   1rem;      /* 16px */
  --space-5:   1.25rem;   /* 20px */
  --space-6:   1.5rem;    /* 24px */
  --space-8:   2rem;      /* 32px */
  --space-10:  2.5rem;    /* 40px */
  --space-12:  3rem;      /* 48px */
  --space-16:  4rem;      /* 64px */
  --space-20:  5rem;      /* 80px */
  --space-24:  6rem;      /* 96px */
  --space-32:  8rem;      /* 128px */
}
```

## 3.2 Spacing Usage Rules

| Context | Token | Value | Usage |
|---|---|---|---|
| **Section padding** (vertical) | `--space-20` to `--space-24` | 80–96px | Top and bottom padding of homepage sections |
| **Section padding** (mobile) | `--space-12` to `--space-16` | 48–64px | Reduced vertical spacing on mobile |
| **Container padding** (horizontal) | `--space-6` | 24px | Left/right padding on mobile |
| **Card internal padding** | `--space-6` to `--space-8` | 24–32px | Content padding inside cards |
| **Between heading and paragraph** | `--space-4` | 16px | gap between H2 and its intro text |
| **Between cards in grid** | `--space-6` to `--space-8` | 24–32px | grid gap |
| **Between form fields** | `--space-5` | 20px | vertical spacing in forms |
| **Button internal padding** | `--space-3` / `--space-6` | 12px / 24px | vertical / horizontal |
| **Icon + text gap** | `--space-3` | 12px | Space between icon and label |
| **Section title bottom margin** | `--space-12` | 48px | Between section H2 and first content |

---

# 4. GRID SYSTEM

```css
:root {
  --grid-columns: 12;
  --grid-gutter:  2rem;     /* 32px gap between columns */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-max: 1200px;  /* Maximum content width */
}

/* ─── Container ─── */
.container {
  width: 100%;
  max-width: var(--container-max);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-6);
  padding-right: var(--space-6);
}

/* Wide container for hero / full-bleed sections */
.container-wide {
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-6);
  padding-right: var(--space-6);
}

/* ─── Grid ─── */
.grid {
  display: grid;
  gap: var(--grid-gutter);
}

/* Column variants */
.grid-cols-1  { grid-template-columns: repeat(1, 1fr); }
.grid-cols-2  { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3  { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4  { grid-template-columns: repeat(4, 1fr); }
.grid-cols-6  { grid-template-columns: repeat(6, 1fr); }
.grid-cols-12 { grid-template-columns: repeat(12, 1fr); }

/* Asymmetric layouts */
.grid-2-1  { grid-template-columns: 2fr 1fr; }
.grid-1-2  { grid-template-columns: 1fr 2fr; }
.grid-3-2  { grid-template-columns: 3fr 2fr; }
.grid-7-5  { grid-template-columns: 7fr 5fr; }  /* Content + sidebar */

/* ─── Responsive Breakpoints ─── */
@media (max-width: 1024px) {
  .grid-cols-4 { grid-template-columns: repeat(2, 1fr); }
  .grid-cols-3 { grid-template-columns: repeat(2, 1fr); }
  .grid-3-2, .grid-7-5 { grid-template-columns: 1fr; }
}

@media (max-width: 768px) {
  .grid-cols-2 { grid-template-columns: 1fr; }
  .grid-cols-3 { grid-template-columns: 1fr; }
  .grid-cols-4 { grid-template-columns: 1fr; }
  .grid-2-1, .grid-1-2 { grid-template-columns: 1fr; }
  .container { padding-left: var(--space-4); padding-right: var(--space-4); }
  .grid { gap: var(--space-4); }
}

/* ─── Section Layout ─── */
.section {
  padding-top: var(--space-20);
  padding-bottom: var(--space-20);
}

.section-alt {
  padding-top: var(--space-20);
  padding-bottom: var(--space-20);
  background: var(--surface-raised);
}

@media (max-width: 768px) {
  .section, .section-alt {
    padding-top: var(--space-12);
    padding-bottom: var(--space-12);
  }
}
```

---

# 5. CARD SYSTEM

## 5.1 Base Card

```css
:root {
  --card-radius:      12px;
  --card-radius-lg:   16px;
  --card-padding:     var(--space-6);
  --card-padding-lg:  var(--space-8);
  --card-border:      1px solid var(--color-neutral-200);
  --card-shadow:      0 1px 3px rgba(0, 0, 0, 0.04),
                      0 1px 2px rgba(0, 0, 0, 0.06);
  --card-shadow-hover: 0 10px 25px rgba(0, 0, 0, 0.08),
                       0 4px 10px rgba(0, 0, 0, 0.04);
  --card-transition:  all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card {
  background: var(--surface-card);
  border: var(--card-border);
  border-radius: var(--card-radius);
  padding: var(--card-padding);
  box-shadow: var(--card-shadow);
  transition: var(--card-transition);
}

.card:hover {
  box-shadow: var(--card-shadow-hover);
  transform: translateY(-2px);
  border-color: var(--color-primary-200);
}
```

## 5.2 Card Variants

### Product Card

```css
/* Used in: Products section, product category pages, related products */
.card-product {
  background: var(--surface-card);
  border: var(--card-border);
  border-radius: var(--card-radius);
  overflow: hidden;              /* Image clips to border radius */
  transition: var(--card-transition);
  display: flex;
  flex-direction: column;
}

.card-product:hover {
  box-shadow: var(--card-shadow-hover);
  transform: translateY(-4px);
  border-color: var(--color-primary-300);
}

.card-product__image {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  background: var(--surface-sunken);     /* Placeholder bg while loading */
}

.card-product__body {
  padding: var(--card-padding);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  flex-grow: 1;
}

.card-product__title {
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-neutral-900);
}

.card-product__desc {
  font-size: var(--text-sm);
  color: var(--color-neutral-600);
  line-height: var(--leading-normal);
  flex-grow: 1;
}

.card-product__link {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-primary-600);
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  transition: gap 0.2s ease;
}

.card-product__link:hover {
  color: var(--color-primary-700);
  gap: var(--space-3);              /* Arrow slides right on hover */
}
```

**Structure:**
```
┌────────────────────────┐
│      [Product Image]   │  aspect-ratio: 4/3
│                        │
├────────────────────────┤
│  Product Title         │  font-weight: 700
│  Short description     │  2 lines max
│  View Details →        │  Arrow animates on hover
└────────────────────────┘
```

### Industry Card

```css
/* Used in: Industries section on homepage, /industries/ hub page */
.card-industry {
  background: var(--surface-card);
  border: var(--card-border);
  border-radius: var(--card-radius);
  padding: var(--card-padding-lg);
  text-align: center;
  transition: var(--card-transition);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
}

.card-industry:hover {
  border-color: var(--color-primary-400);
  background: var(--color-primary-50);
  transform: translateY(-2px);
}

.card-industry__icon {
  width: 56px;
  height: 56px;
  background: var(--color-primary-50);
  border-radius: 12px;
  display: grid;
  place-items: center;
  color: var(--color-primary-600);
  transition: var(--card-transition);
}

.card-industry:hover .card-industry__icon {
  background: var(--color-primary-600);
  color: #FFFFFF;
}

.card-industry__title {
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-neutral-800);
}
```

### Stat Card

```css
/* Used in: Trust bar, manufacturing capability section */
.card-stat {
  text-align: center;
  padding: var(--space-6);
}

.card-stat__number {
  font-family: var(--font-sans);
  font-size: var(--text-5xl);
  font-weight: 800;
  color: var(--color-primary-600);
  line-height: 1;
  letter-spacing: var(--tracking-tight);
}

.card-stat__label {
  margin-top: var(--space-2);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-neutral-500);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
}

/* On dark background */
.section-dark .card-stat__number {
  color: var(--color-accent-400);
}
.section-dark .card-stat__label {
  color: var(--color-neutral-300);
}
```

### Testimonial Card

```css
.card-testimonial {
  background: var(--surface-card);
  border: var(--card-border);
  border-radius: var(--card-radius-lg);
  padding: var(--card-padding-lg);
  position: relative;
}

/* Large decorative quotation mark */
.card-testimonial::before {
  content: '"';
  position: absolute;
  top: var(--space-4);
  left: var(--space-6);
  font-size: 4rem;
  font-weight: 800;
  color: var(--color-primary-100);
  line-height: 1;
  font-family: Georgia, serif;
}

.card-testimonial__quote {
  font-size: var(--text-lg);
  font-style: italic;
  color: var(--color-neutral-700);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-6);
}

.card-testimonial__author {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.card-testimonial__avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  background: var(--color-primary-100);
}

.card-testimonial__name {
  font-weight: 600;
  color: var(--color-neutral-900);
  font-size: var(--text-base);
}

.card-testimonial__role {
  font-size: var(--text-sm);
  color: var(--color-neutral-500);
}

.card-testimonial__stars {
  color: var(--color-accent-500);
  font-size: var(--text-lg);
  margin-top: var(--space-1);
}
```

### Blog Card

```css
.card-blog {
  background: var(--surface-card);
  border: var(--card-border);
  border-radius: var(--card-radius);
  overflow: hidden;
  transition: var(--card-transition);
}

.card-blog:hover {
  box-shadow: var(--card-shadow-hover);
  transform: translateY(-2px);
}

.card-blog__image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.card-blog__body {
  padding: var(--card-padding);
}

.card-blog__category {
  font-size: var(--text-xs);
  font-weight: 600;
  color: var(--color-primary-600);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
}

.card-blog__title {
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-neutral-900);
  margin-top: var(--space-2);
  /* Clamp to 2 lines */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-blog__meta {
  font-size: var(--text-xs);
  color: var(--color-neutral-400);
  margin-top: var(--space-3);
}
```

---

# 6. BUTTON SYSTEM

```css
/* ─── Base Button ─── */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-weight: 600;
  text-decoration: none;
  border: 2px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  position: relative;
  overflow: hidden;
}

.btn:active {
  transform: scale(0.98);
}

/* ─── Sizes ─── */
.btn-sm {
  font-size: var(--text-sm);
  padding: var(--space-2) var(--space-4);     /* 8px 16px */
  border-radius: 6px;
}

.btn-md {
  font-size: var(--text-base);
  padding: var(--space-3) var(--space-6);     /* 12px 24px */
}

.btn-lg {
  font-size: var(--text-lg);
  padding: var(--space-4) var(--space-8);     /* 16px 32px */
  border-radius: 10px;
}

/* ─── Primary — Main CTA (Orange) ─── */
.btn-primary {
  background: var(--gradient-accent);
  color: #FFFFFF;
  border-color: var(--color-accent-500);
  box-shadow: 0 1px 3px rgba(249, 115, 22, 0.3),
              0 1px 2px rgba(249, 115, 22, 0.2);
}

.btn-primary:hover {
  background: var(--color-accent-600);
  border-color: var(--color-accent-600);
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.35),
              0 2px 4px rgba(249, 115, 22, 0.2);
  transform: translateY(-1px);
}

/* ─── Secondary — Supporting action (Blue) ─── */
.btn-secondary {
  background: var(--color-primary-600);
  color: #FFFFFF;
  border-color: var(--color-primary-600);
}

.btn-secondary:hover {
  background: var(--color-primary-700);
  border-color: var(--color-primary-700);
  transform: translateY(-1px);
}

/* ─── Outline — Light background actions ─── */
.btn-outline {
  background: transparent;
  color: var(--color-primary-600);
  border-color: var(--color-primary-300);
}

.btn-outline:hover {
  background: var(--color-primary-50);
  border-color: var(--color-primary-500);
  color: var(--color-primary-700);
}

/* ─── Ghost — Minimal, text-like ─── */
.btn-ghost {
  background: transparent;
  color: var(--color-primary-600);
  border-color: transparent;
  padding-left: var(--space-2);
  padding-right: var(--space-2);
}

.btn-ghost:hover {
  background: var(--color-primary-50);
  color: var(--color-primary-700);
}

/* ─── White — For dark backgrounds ─── */
.btn-white {
  background: #FFFFFF;
  color: var(--color-primary-700);
  border-color: #FFFFFF;
}

.btn-white:hover {
  background: var(--color-primary-50);
  transform: translateY(-1px);
}

/* ─── Arrow icon animation ─── */
.btn .icon-arrow {
  transition: transform 0.2s ease;
}
.btn:hover .icon-arrow {
  transform: translateX(4px);
}
```

**Button Usage Rules:**

| Context | Button | Size |
|---|---|---|
| Hero CTA ("Request a Quote") | `btn-primary btn-lg` | Large |
| Section CTAs | `btn-primary btn-md` | Medium |
| Card actions ("View Details →") | `btn-ghost btn-sm` | Small |
| Secondary actions ("Learn More") | `btn-outline btn-md` | Medium |
| Dark background CTAs | `btn-white btn-lg` | Large |
| Navbar CTA | `btn-primary btn-sm` | Small |
| Form submit | `btn-primary btn-lg` (full width) | Large |

---

# 7. FORM SYSTEM

```css
/* ─── Form Layout ─── */
.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
}

@media (max-width: 640px) {
  .form-row { grid-template-columns: 1fr; }
}

/* ─── Labels ─── */
.form-label {
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-neutral-700);
}

.form-label--required::after {
  content: ' *';
  color: var(--color-error-500);
}

/* ─── Inputs ─── */
.form-input,
.form-select,
.form-textarea {
  font-family: var(--font-sans);
  font-size: var(--text-base);
  color: var(--color-neutral-900);
  background: var(--surface-card);
  border: 1.5px solid var(--color-neutral-300);
  border-radius: 8px;
  padding: var(--space-3) var(--space-4);    /* 12px 16px */
  width: 100%;
  transition: all 0.2s ease;
  outline: none;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: var(--color-neutral-400);
}

/* Focus state — prominent blue ring */
.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  border-color: var(--color-primary-500);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
}

/* Error state */
.form-input--error {
  border-color: var(--color-error-500);
}
.form-input--error:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15);
}

/* Success state */
.form-input--success {
  border-color: var(--color-success-500);
}

/* ─── Select ─── */
.form-select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748B' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: var(--space-10);
}

/* ─── Textarea ─── */
.form-textarea {
  min-height: 120px;
  resize: vertical;
}

/* ─── Error message ─── */
.form-error {
  font-size: var(--text-xs);
  color: var(--color-error-500);
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

/* ─── Help text ─── */
.form-help {
  font-size: var(--text-xs);
  color: var(--color-neutral-400);
}
```

---

# 8. ICONS

## Icon Strategy: Lucide Icons

```
Library: Lucide (https://lucide.dev)
Format: Inline SVG (not icon font — better performance, no flash of invisible content)
Size: 20px default, 24px for feature blocks, 16px for inline/buttons
Stroke: 1.5px (matches Inter's visual weight)
Color: currentColor (inherits from parent text color)
```

**Recommended Icons by Section:**

| Context | Icon Name | Lucide ID |
|---|---|---|
| Manufacturing | `factory` | Factory building |
| Custom Engineering | `wrench` | Wrench/settings |
| Quality Testing | `shield-check` | Shield with checkmark |
| Delivery | `truck` | Delivery truck |
| Pricing | `banknote` | Money/pricing |
| Support | `headphones` | Headset/support |
| Phone | `phone` | Phone receiver |
| WhatsApp | Custom SVG | WhatsApp brand icon |
| Email | `mail` | Envelope |
| Location | `map-pin` | Map pin |
| Arrow right | `arrow-right` | → for buttons |
| Chevron down | `chevron-down` | FAQ accordion |
| Download | `download` | PDF downloads |
| Calendar | `calendar` | Scheduling |
| Star | `star` | Ratings/testimonials |
| Check | `check-circle` | Feature list checkmarks |
| External link | `external-link` | Links opening new tabs |

**Implementation:**

```html
<!-- Inline SVG pattern — best for performance -->
<svg class="icon" width="20" height="20" viewBox="0 0 24 24"
     fill="none" stroke="currentColor" stroke-width="1.5"
     stroke-linecap="round" stroke-linejoin="round">
  <path d="..."/>
</svg>
```

```css
.icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  stroke: currentColor;
}

.icon-sm { width: 16px; height: 16px; }
.icon-md { width: 20px; height: 20px; }
.icon-lg { width: 24px; height: 24px; }
.icon-xl { width: 32px; height: 32px; }
```

---

# 9. IMAGERY STYLE

## 9.1 Photography Direction

| Category | Style Guide | Examples |
|---|---|---|
| **Product Shots** | Clean white/neutral background. Single product centered. Slight 30° angle. Soft shadow underneath. No distracting backgrounds. | Hydraulic cylinder on clean surface, chrome rod visible |
| **Factory Photos** | Natural facility lighting. Show machinery IN ACTION (CNC running, sparks, assembly). Include human element (worker hands, engineer inspecting). | CNC lathe turning a cylinder barrel, testing bench with gauges |
| **Detail / Close-up** | Macro shots of precision — chrome rod surface, thread machining, seal grooves, pressure gauge readings. | Close-up of honed bore surface finish |
| **Shipping / Delivery** | Products packed in crates, loaded on truck. Shows professionalism of dispatch. | Palletized cylinders ready for dispatch, wrapped and labeled |
| **Team / People** | Candid, authentic. Workers in uniforms, engineers reviewing drawings. No posed corporate stock photo feel. | Engineer pointing at a drawing on the shop floor |

## 9.2 Image Treatment

```css
/* Product images — consistent aspect ratio */
.img-product {
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: var(--card-radius);
  background: var(--surface-sunken);  /* Loading placeholder */
}

/* Hero / section background images */
.img-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* Image overlay for text readability on dark sections */
.img-overlay {
  position: relative;
}
.img-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(15, 23, 42, 0.7) 0%,
    rgba(15, 23, 42, 0.85) 100%
  );
}

/* Gallery grid images */
.img-gallery {
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease;
}
.img-gallery:hover {
  transform: scale(1.03);
}
```

## 9.3 Image Rules

| Rule | Specification |
|---|---|
| **Format** | WebP primary, AVIF where supported, PNG fallback |
| **Max file size** | 100KB for product images, 200KB for hero images |
| **Lazy loading** | All images below the fold use `loading="lazy"` |
| **Hero image** | Preloaded via `<link rel="preload">`, no lazy load |
| **Alt text** | Keyword-rich, descriptive. Never generic. |
| **Aspect ratios** | Products: 4:3 · Heroes: 16:9 · Gallery: 1:1 · Blog: 16:9 |
| **Responsive** | Use `srcset` with 3 sizes: 400w, 800w, 1200w |
| **No stock photos** | Every image must be real. Stock = instant trust loss. |

---

# 10. ANIMATIONS

## 10.1 Design Principles

```
RESTRAINT    →  Animate to communicate, not to decorate
PURPOSE      →  Every animation serves a UX purpose (feedback, attention, spatial orientation)
PERFORMANCE  →  Only transform and opacity (GPU-accelerated). Never animate layout properties.
SUBTLETY     →  If the user notices the animation before the content, it's too much.
ACCESSIBLE   →  Respect prefers-reduced-motion. Disable all non-essential animation.
```

## 10.2 Timing Tokens

```css
:root {
  /* Durations */
  --duration-fast:    150ms;
  --duration-normal:  250ms;
  --duration-slow:    400ms;
  --duration-slower:  600ms;

  /* Easings */
  --ease-out:    cubic-bezier(0.0, 0.0, 0.2, 1);      /* Deceleration — entering elements */
  --ease-in:     cubic-bezier(0.4, 0.0, 1, 1);         /* Acceleration — exiting elements */
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);         /* Standard — most interactions */
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);    /* Playful — stat counters */
}
```

## 10.3 Hover Animations

```css
/* ─── Card hover lift ─── */
.card {
  transition: transform var(--duration-normal) var(--ease-out),
              box-shadow var(--duration-normal) var(--ease-out);
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--card-shadow-hover);
}

/* ─── Button hover ─── */
.btn {
  transition: all var(--duration-fast) var(--ease-in-out);
}
.btn:hover {
  transform: translateY(-1px);
}
.btn:active {
  transform: scale(0.98);
}

/* ─── Link arrow slide ─── */
.link-arrow .icon-arrow {
  transition: transform var(--duration-fast) var(--ease-out);
}
.link-arrow:hover .icon-arrow {
  transform: translateX(4px);
}

/* ─── Image zoom on hover ─── */
.card-product__image {
  transition: transform var(--duration-slow) var(--ease-out);
}
.card-product:hover .card-product__image {
  transform: scale(1.05);
}

/* ─── Industry icon background flip ─── */
.card-industry__icon {
  transition: background var(--duration-normal) var(--ease-out),
              color var(--duration-normal) var(--ease-out);
}
```

## 10.4 Scroll-Triggered Entrance Animations

```css
/* ─── Fade up — default entrance for all sections ─── */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ─── Fade in — subtler, for inline elements ─── */
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* ─── Scale up — for stat numbers ─── */
@keyframes scaleUp {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* ─── Slide in from left — for section content ─── */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-32px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* ─── Slide in from right — for section images ─── */
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(32px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* ─── Observer-triggered class ─── */
.animate-on-scroll {
  opacity: 0;
}

.animate-on-scroll.is-visible {
  animation-duration: var(--duration-slower);
  animation-fill-mode: both;
  animation-timing-function: var(--ease-out);
}

.animate-on-scroll.is-visible.fade-up     { animation-name: fadeUp; }
.animate-on-scroll.is-visible.fade-in     { animation-name: fadeIn; }
.animate-on-scroll.is-visible.scale-up    { animation-name: scaleUp; }
.animate-on-scroll.is-visible.slide-left  { animation-name: slideInLeft; }
.animate-on-scroll.is-visible.slide-right { animation-name: slideInRight; }

/* ─── Staggered children ─── */
.stagger-children.is-visible > *:nth-child(1) { animation-delay: 0ms; }
.stagger-children.is-visible > *:nth-child(2) { animation-delay: 80ms; }
.stagger-children.is-visible > *:nth-child(3) { animation-delay: 160ms; }
.stagger-children.is-visible > *:nth-child(4) { animation-delay: 240ms; }
.stagger-children.is-visible > *:nth-child(5) { animation-delay: 320ms; }
.stagger-children.is-visible > *:nth-child(6) { animation-delay: 400ms; }
```

**JavaScript — Intersection Observer:**

```javascript
/* Trigger animations when elements scroll into view */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); /* Animate once only */
      }
    });
  },
  {
    threshold: 0.15,         /* Trigger when 15% visible */
    rootMargin: '0px 0px -40px 0px'  /* Slight offset from bottom */
  }
);

document.querySelectorAll('.animate-on-scroll').forEach((el) => {
  observer.observe(el);
});
```

## 10.5 Specialty Animations

```css
/* ─── Counter animation (for stat numbers) ─── */
/* Implemented via JS — CSS provides the visual treatment */
.stat-counter {
  font-variant-numeric: tabular-nums;  /* Prevents width jumping */
}

/* ─── Accordion expand/collapse (FAQ) ─── */
.faq-answer {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows var(--duration-normal) var(--ease-in-out);
  overflow: hidden;
}

.faq-item.is-open .faq-answer {
  grid-template-rows: 1fr;
}

.faq-answer > div {
  overflow: hidden;
}

/* ─── Chevron rotation (FAQ trigger) ─── */
.faq-chevron {
  transition: transform var(--duration-fast) var(--ease-in-out);
}

.faq-item.is-open .faq-chevron {
  transform: rotate(180deg);
}

/* ─── Progress bar (process steps) ─── */
@keyframes progressFill {
  from { width: 0%; }
  to   { width: 100%; }
}

.process-step__line.is-visible {
  animation: progressFill var(--duration-slower) var(--ease-out);
}

/* ─── Subtle pulse — WhatsApp floating button ─── */
@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4); }
  50%      { box-shadow: 0 0 0 12px rgba(37, 211, 102, 0); }
}

.whatsapp-float {
  animation: pulse 3s infinite;
}

/* ─── Header scroll shadow ─── */
.header {
  transition: box-shadow var(--duration-normal) var(--ease-out),
              background var(--duration-normal) var(--ease-out);
}

.header.is-scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}
```

## 10.6 Reduced Motion

```css
/* ─── CRITICAL: Respect user preferences ─── */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  .animate-on-scroll {
    opacity: 1;
  }

  .whatsapp-float {
    animation: none;
  }
}
```

---

# ANIMATION MAP — What Animates Where

| Section | Element | Animation | Trigger |
|---|---|---|---|
| **Header** | Nav bar | Shadow + blur backdrop on scroll | Scroll position > 50px |
| **Hero** | H1 + subheading | `fadeUp` with 0ms delay | Page load |
| **Hero** | CTA buttons | `fadeUp` with 200ms delay | Page load |
| **Hero** | Hero image | `fadeIn` with 400ms delay | Page load |
| **Trust Bar** | Stat numbers | Counter animation (0 → number) | Scroll into view |
| **Products** | Section title | `fadeUp` | Scroll |
| **Products** | Product cards | `fadeUp` + stagger (80ms between) | Scroll |
| **Products** | Card images | Scale 1.05 on hover | Hover |
| **Industries** | Industry tiles | `fadeUp` + stagger | Scroll |
| **Industries** | Tile icons | Background color flip | Hover |
| **Why Choose Us** | Feature blocks | `fadeUp` + stagger | Scroll |
| **Manufacturing** | Content | `slideInLeft` | Scroll |
| **Manufacturing** | Image | `slideInRight` | Scroll |
| **Certifications** | Cert badges | `scaleUp` + stagger | Scroll |
| **Process** | Step items | `fadeUp` + stagger (100ms) | Scroll |
| **Process** | Connecting lines | `progressFill` | Scroll |
| **Testimonials** | Testimonial cards | `fadeUp` | Scroll |
| **FAQ** | Accordion | Expand/collapse with grid rows | Click |
| **FAQ** | Chevron | 180° rotation | Click |
| **Contact CTA** | Section | `fadeUp` | Scroll |
| **Floating** | WhatsApp button | Subtle pulse every 3s | Always |
| **All** | Buttons | translateY(-1px) + shadow | Hover |
| **All** | Cards | translateY(-4px) + shadow | Hover |
| **All** | Link arrows | translateX(4px) | Hover |

---

# COMPLETE CSS RESET + BASE

```css
/* ─── Modern CSS Reset ─── */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}

body {
  font-family: var(--font-sans);
  font-size: var(--text-base);
  line-height: var(--leading-normal);
  color: var(--color-neutral-700);
  background: var(--surface-ground);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img, video, svg {
  display: block;
  max-width: 100%;
  height: auto;
}

a {
  color: var(--color-primary-600);
  text-decoration: none;
  transition: color var(--duration-fast) var(--ease-in-out);
}

a:hover {
  color: var(--color-primary-700);
}

ul, ol {
  list-style: none;
}

button {
  font-family: inherit;
  cursor: pointer;
  border: none;
  background: none;
}

input, textarea, select {
  font-family: inherit;
}

/* ─── Focus visible (accessibility) ─── */
:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}

/* ─── Selection color ─── */
::selection {
  background: var(--color-primary-100);
  color: var(--color-primary-900);
}
```

---

*Design system prepared by Antigravity AI — June 5, 2026*  
*Part of the Honeywell Hydraulics rebuild series*  
*Companion documents: [SEO Strategy](file:///C:/Users/DELL/.gemini/antigravity-ide/brain/66607213-1ab9-45f5-97ea-411e255792cd/honeywell-hydraulics-seo-strategy.md) · [Architecture](file:///C:/Users/DELL/.gemini/antigravity-ide/brain/66607213-1ab9-45f5-97ea-411e255792cd/honeywell-website-architecture.md) · [Keyword Map](file:///C:/Users/DELL/.gemini/antigravity-ide/brain/66607213-1ab9-45f5-97ea-411e255792cd/honeywell-keyword-map.md) · [Homepage Blueprint](file:///C:/Users/DELL/.gemini/antigravity-ide/brain/66607213-1ab9-45f5-97ea-411e255792cd/honeywell-homepage-blueprint.md)*
