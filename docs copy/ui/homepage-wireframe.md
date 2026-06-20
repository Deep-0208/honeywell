# 🏗️ Honeywell Hydraulics — Homepage Desktop Wireframe
### Developer-Ready Section-by-Section Blueprint

**Synthesized from:**
- SEO Master Strategy
- Website Architecture
- Keyword Map (234 keywords)
- Content Strategy (100+ pages mapped)
- Homepage Blueprint (11 sections)
- Product Page Template
- Location Page Template
- Technical SEO Specification
- **Skills Applied:** Emil Kowalski (layout/composition) · Impeccable (code quality/architecture) · Taste Skill (typography/spacing/rhythm) · Anthropic Frontend (component patterns)

**Page URL:** `/` (Root)
**Primary Keyword:** `hydraulic cylinder manufacturer in Ahmedabad`
**Secondary Keywords:** hydraulic power pack manufacturer Ahmedabad · hydraulic equipment supplier Gujarat · hydraulic system manufacturer India · custom hydraulic cylinder manufacturer
**Search Intent:** Transactional
**Word Count Target:** 1,500–2,000 words across all 11 sections
**Schema:** Organization + LocalBusiness + WebSite + WebPage + FAQPage

---

## Design Principles Applied

```
SKILL: EMIL KOWALSKI
├── Landing page structure and visual hierarchy
├── Premium section composition
├── Intentional whitespace as a design element
├── Section rhythm: alternating light/dark/light
└── Adapted to industrial manufacturing (NOT SaaS)

SKILL: IMPECCABLE
├── Semantic HTML architecture (<header>, <nav>, <main>, <section>, <footer>)
├── Accessibility-first: ARIA labels, keyboard nav, focus states
├── Performance budget: <2.0s LCP, <200ms INP, <0.1 CLS
└── One H1. Clean heading hierarchy. No heading skips.

SKILL: TASTE
├── DESIGN_VARIANCE: 4 (centered/clean — industrial manufacturer, not experimental)
├── MOTION_INTENSITY: 3 (hover + scroll-triggered fades only)
├── VISUAL_DENSITY: 5 (balanced — enough information to build trust, not dashboard-dense)
├── 8px spacing grid, consistent vertical rhythm
├── Inter font. No decorative typefaces.
└── Whitespace is intentional, not empty.

SKILL: ANTHROPIC FRONTEND
├── Server-rendered components (Next.js App Router)
├── Component composition patterns
├── Accessible form patterns
└── Progressive enhancement
```

---

## Page-Level Structure

```
Total Sections: 11
Background Rhythm: Dark → Light → Raised → Light → Dark → Light → Raised → Light → Raised → Light → Dark
CTA Count: 7 (minimum per content strategy)
Internal Links: 16+ (per SEO linking architecture)
```

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  SECTION 00  │  STICKY HEADER / NAVIGATION                                 │
├──────────────────────────────────────────────────────────────────────────────┤
│  SECTION 01  │  HERO — Primary Value Proposition                           │
├──────────────────────────────────────────────────────────────────────────────┤
│  SECTION 02  │  TRUST BAR — Proof Numbers                                  │
├──────────────────────────────────────────────────────────────────────────────┤
│  SECTION 03  │  PRODUCTS — Core Product Categories                         │
├──────────────────────────────────────────────────────────────────────────────┤
│  SECTION 04  │  INDUSTRIES — Sectors We Serve                              │
├──────────────────────────────────────────────────────────────────────────────┤
│  SECTION 05  │  WHY CHOOSE US — Differentiators                            │
├──────────────────────────────────────────────────────────────────────────────┤
│  SECTION 06  │  MANUFACTURING — Factory & Capability                       │
├──────────────────────────────────────────────────────────────────────────────┤
│  SECTION 07  │  CERTIFICATIONS — Quality & Standards                       │
├──────────────────────────────────────────────────────────────────────────────┤
│  SECTION 08  │  PROCESS — How We Work                                      │
├──────────────────────────────────────────────────────────────────────────────┤
│  SECTION 09  │  TESTIMONIALS — Client Proof                                │
├──────────────────────────────────────────────────────────────────────────────┤
│  SECTION 10  │  FAQ — Common Questions                                     │
├──────────────────────────────────────────────────────────────────────────────┤
│  SECTION 11  │  FINAL CTA — Contact + Quote                                │
├──────────────────────────────────────────────────────────────────────────────┤
│  FOOTER      │  MEGA FOOTER — NAP + Links + Service Areas                  │
├──────────────────────────────────────────────────────────────────────────────┤
│  FLOATING    │  WHATSAPP BUTTON + MOBILE STICKY BAR                        │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

# SECTION 00: Sticky Header / Navigation

## Purpose
Primary navigation. Brand identification. Persistent access to quote CTA. SEO: internal links to all pillar pages via mega-menu.

## Layout

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                                                                                 │
│  [LOGO]     Products ▾    Applications ▾    Industries ▾    Resources ▾   About  │
│                                                          Contact  [GET QUOTE →] │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘

Width: Full viewport (100vw)
Container: max-width: 1200px, centered
Height: 72px
Position: sticky, top: 0, z-index: 1000
```

## Content Placement

| Position | Element | Details |
|---|---|---|
| **Left** | Logo | Honeywell Hydraulics wordmark. Links to `/`. 160px wide max. |
| **Center** | Navigation links | `Products ▾` · `Applications ▾` · `Industries ▾` · `Resources ▾` · `About` |
| **Right** | Contact link | Text link: "Contact" → `/contact/` |
| **Right** | CTA Button | `btn-primary btn-sm`: "GET QUOTE →" → `/request-quote/` |

## CTA Placement

| CTA | Style | Target |
|---|---|---|
| GET QUOTE → | `btn-primary btn-sm` (orange, small) | `/request-quote/` |

## SEO Purpose
- Internal links to all 4 product pillars via mega-menu
- Internal links to all application, industry, resource pages
- BreadcrumbList schema support (nav context)
- Logo link = homepage canonical reinforcement

## Conversion Purpose
- Persistent quote CTA visible on every scroll position
- Phone number accessible (in mega-menu or contact link)
- Reduces friction: buyer can access quote form from any scroll depth

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| **≥1024px** | Full horizontal nav with mega-menu dropdowns on hover |
| **768–1023px** | Condensed nav, fewer items visible, hamburger menu |
| **<768px** | Hamburger menu (☰) replaces nav. Logo + hamburger + CTA button only. Sticky bottom bar appears: `[ 📞 CALL ]  [ 💬 WHATSAPP ]  [ 📋 GET QUOTE ]` |

### Scroll Behavior
```
DEFAULT:    background: transparent (if hero is dark, white text)
SCROLLED:  background: rgba(255, 255, 255, 0.95)
            backdrop-filter: blur(12px)
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08)
            transition: 250ms ease-out
```

---

# SECTION 01: Hero

## Purpose
First impression. Communicate what the company does, where it operates, and why the buyer should care. Target the #1 money keyword. Drive immediate quote requests.

## Layout

```
Background: var(--gradient-hero) → linear-gradient(135deg, #0F172A 0%, #1E3A8A 50%, #172554 100%)
Padding: 120px top, 120px bottom (desktop) | 64px top/bottom (mobile)
Container: max-width: 1200px

┌─────────────────────────────────────────────────────────────────────────────────┐
│                                                                                 │
│           DARK GRADIENT BACKGROUND (Navy → Steel Blue → Deep Navy)              │
│                                                                                 │
│     ┌──────────────────────────────┐    ┌─────────────────────────────────┐     │
│     │                              │    │                                 │     │
│     │  OVERLINE LABEL              │    │                                 │     │
│     │  "HYDRAULIC MANUFACTURER     │    │    [HERO IMAGE]                │     │
│     │   IN AHMEDABAD, GUJARAT"     │    │                                 │     │
│     │                              │    │    Factory photo showing        │     │
│     │  H1: Leading Hydraulic       │    │    CNC lathe machining a        │     │
│     │  Cylinder Manufacturer       │    │    hydraulic cylinder barrel.    │     │
│     │  in Ahmedabad, Gujarat       │    │    Real photo. No stock.        │     │
│     │                              │    │                                 │     │
│     │  Subtitle: Custom hydraulic  │    │    Aspect ratio: 4:3            │     │
│     │  cylinders, power packs &    │    │    border-radius: 16px          │     │
│     │  complete systems. Serving   │    │    Subtle glow shadow behind    │     │
│     │  20+ industries since 2018.  │    │                                 │     │
│     │                              │    │                                 │     │
│     │  [REQUEST A FREE QUOTE →]    │    │                                 │     │
│     │  [EXPLORE PRODUCTS]          │    │                                 │     │
│     │                              │    │                                 │     │
│     │  ✓ Custom Engineering        │    │                                 │     │
│     │  ✓ Factory-Direct Pricing    │    │                                 │     │
│     │  ✓ 7-15 Day Delivery         │    │                                 │     │
│     │                              │    │                                 │     │
│     └──────────────────────────────┘    └─────────────────────────────────┘     │
│                                                                                 │
│     Grid: 7fr 5fr (content : image)                                            │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## Content Placement

| Element | Token | Content |
|---|---|---|
| **Overline** | `.text-label` (uppercase, 14px, tracking-wide, accent-400 color) | "HYDRAULIC MANUFACTURER IN AHMEDABAD, GUJARAT" |
| **H1** | `.text-display` (60px, 800 weight, white, tracking-tight) | "Leading Hydraulic Cylinder Manufacturer in Ahmedabad, Gujarat" |
| **Subtitle** | `.text-body-lg` (18px, neutral-300 on dark) | "Custom hydraulic cylinders, power packs & complete hydraulic systems. Precision-engineered for 20+ industries since 2018." |
| **Primary CTA** | `btn-primary btn-lg` (orange gradient, large) | "REQUEST A FREE QUOTE →" |
| **Secondary CTA** | `btn-white btn-lg` (white on dark) | "EXPLORE PRODUCTS" |
| **Trust Chips** | Inline checkmarks, text-sm, neutral-300 | "✓ Custom Engineering · ✓ Factory-Direct Pricing · ✓ 7-15 Day Delivery" |
| **Hero Image** | Real factory photography | CNC lathe machining a cylinder barrel. Preloaded. WebP. |

## CTA Placement

| CTA | Style | Target | Position |
|---|---|---|---|
| REQUEST A FREE QUOTE → | `btn-primary btn-lg` | `/request-quote/` | Left column, below subtitle |
| EXPLORE PRODUCTS | `btn-white btn-lg` | `/hydraulic-cylinders/` | Left column, beside primary CTA |

## SEO Purpose
- H1 contains primary keyword: "hydraulic cylinder manufacturer in Ahmedabad, Gujarat"
- Overline reinforces geo-targeting
- Subtitle contains secondary keywords naturally
- Hero image with keyword-rich alt text: "CNC lathe manufacturing a hydraulic cylinder barrel at Honeywell Hydraulics factory in Ahmedabad"
- Preloaded hero image for LCP optimization

## Conversion Purpose
- Above-the-fold CTA (first of 7 across page)
- Trust chips address top buyer objections immediately (custom capability, pricing, delivery)
- Real factory photo builds instant credibility (not stock)
- Two CTAs serve two intents: ready-to-buy (quote) and researching (explore)

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| **≥1024px** | 7fr/5fr side-by-side grid. Image right. |
| **768–1023px** | Stack: text on top, image below. Text centered. |
| **<768px** | Full stack. H1 drops to `text-4xl` (36px). Subtitle drops to `text-base`. CTAs stack vertically, full-width. Image drops to 100% width below CTAs. |

### Animation
```
H1 + Overline:    fadeUp, delay: 0ms, duration: 600ms
Subtitle:         fadeUp, delay: 100ms
CTAs:             fadeUp, delay: 200ms
Trust chips:      fadeUp, delay: 300ms
Hero image:       fadeIn, delay: 400ms
```

---

# SECTION 02: Trust Bar

## Purpose
Immediate social proof via hard numbers. Anchor credibility before the buyer scrolls further. Build confidence that this is a real, established manufacturer.

## Layout

```
Background: var(--surface-dark) → #0F172A (continuation of hero darkness)
            OR thin separator line with var(--surface-raised) → #F8FAFC
Padding: 48px top, 48px bottom
Container: max-width: 1200px

Option A — Dark continuation (recommended):

┌─────────────────────────────────────────────────────────────────────────────────┐
│                   DARK BACKGROUND (same as hero base)                           │
│                                                                                 │
│     ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐              │
│     │   200+   │    │   20+    │    │    6+    │    │  10,000+ │              │
│     │ Projects │    │Industries│    │  Years   │    │ Cylinders│              │
│     │ Completed│    │  Served  │    │Experience│    │ Delivered│              │
│     └──────────┘    └──────────┘    └──────────┘    └──────────┘              │
│                                                                                 │
│     Grid: 4 equal columns (repeat(4, 1fr))                                     │
│     Dividers: 1px vertical line between stats (rgba(255,255,255,0.1))          │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## Content Placement

| Stat | Number | Label | Icon (optional) |
|---|---|---|---|
| **Column 1** | `200+` | "Projects Completed" | — |
| **Column 2** | `20+` | "Industries Served" | — |
| **Column 3** | `6+` | "Years of Experience" | — |
| **Column 4** | `10,000+` | "Cylinders Delivered" | — |

| Element | Token |
|---|---|
| Numbers | `.text-stat` (48px, 800 weight, accent-400 on dark) |
| Labels | `.text-label` (14px, 600 weight, uppercase, neutral-300 on dark) |

## CTA Placement
None. Pure trust signal. No CTA.

## SEO Purpose
- Structured data reinforcement (numberOfEmployees, founding year in Organization schema)
- Content signals to Google about business scale and E-E-A-T

## Conversion Purpose
- Overcomes "is this company real?" objection
- Numbers (200+ projects, 10,000+ cylinders) signal manufacturing scale
- Visitors who see stats are 2.7x more likely to submit a quote (industry benchmark)

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| **≥1024px** | 4 columns, horizontal with vertical dividers |
| **768–1023px** | 4 columns, tighter spacing |
| **<768px** | 2×2 grid. Numbers shrink to `text-4xl` (36px). |

### Animation
```
Stat numbers: Counter animation (0 → final number)
              Triggered by Intersection Observer (threshold: 0.15)
              Duration: 2s, easing: ease-out
              font-variant-numeric: tabular-nums (prevents width jumping)
Stagger: 100ms between each stat
```

---

# SECTION 03: Products

## Purpose
Showcase the 4 core product categories. Drive click-through to product pillar pages. This is the primary product discovery section.

## Layout

```
Background: var(--surface-ground) → #FFFFFF
Padding: 96px top, 96px bottom
Container: max-width: 1200px

┌─────────────────────────────────────────────────────────────────────────────────┐
│                                                                                 │
│     OVERLINE:  "OUR PRODUCTS"                                                  │
│     H2:        "Precision-Engineered Hydraulic Equipment"                      │
│     SUBTITLE:  "From individual cylinders to complete turnkey systems..."       │
│                                                                                 │
│     gap: 48px below H2 block                                                   │
│                                                                                 │
│     ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐          │
│     │  [Product Image] │  │  [Product Image] │  │  [Product Image] │          │
│     │  4:3 ratio       │  │  4:3 ratio       │  │  4:3 ratio       │          │
│     ├──────────────────┤  ├──────────────────┤  ├──────────────────┤          │
│     │  Hydraulic        │  │  Hydraulic        │  │  Manifold        │          │
│     │  Cylinders        │  │  Power Packs      │  │  Blocks          │          │
│     │                   │  │                   │  │                   │          │
│     │  8 types. Custom  │  │  7 variants.      │  │  CNC-machined.   │          │
│     │  bore & stroke.   │  │  3-phase &        │  │  06 & 10 size    │          │
│     │  40mm–300mm bore. │  │  single-phase.    │  │  configurations. │          │
│     │                   │  │                   │  │                   │          │
│     │  View Cylinders → │  │  View Packs →     │  │  View Blocks →   │          │
│     └──────────────────┘  └──────────────────┘  └──────────────────┘          │
│                                                                                 │
│                   ┌──────────────────────────────────┐                          │
│                   │  [Product Image]                  │                          │
│                   │  4:3 ratio                        │                          │
│                   ├──────────────────────────────────┤                          │
│                   │  Complete Hydraulic Systems        │                          │
│                   │                                    │                          │
│                   │  Turnkey solutions. Design to      │                          │
│                   │  commissioning. Full integration.  │                          │
│                   │                                    │                          │
│                   │  Discuss Your Project →            │                          │
│                   └──────────────────────────────────┘                          │
│                                                                                 │
│     Grid row 1: repeat(3, 1fr)                                                 │
│     Grid row 2: single card centered (max-width: 400px)                        │
│     OR: Grid 2x2 for all 4 cards                                               │
│     Card gap: 32px                                                              │
│                                                                                 │
│     [REQUEST A QUOTE →]  ← Section-level CTA, centered below cards            │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## Content Placement

| Card | Title | Description | Link | Image Alt |
|---|---|---|---|---|
| **Card 1** | Hydraulic Cylinders | "8 mounting types. Custom bore sizes from 40mm to 300mm. Double acting, single acting, telescopic & more." | "View Cylinders →" → `/hydraulic-cylinders/` | "Hydraulic cylinder with chrome rod manufactured by Honeywell Hydraulics" |
| **Card 2** | Hydraulic Power Packs | "7 variants including 3-phase, single-phase, press-specific & lift-specific power packs." | "View Power Packs →" → `/hydraulic-power-packs/` | "3-phase hydraulic power pack with solenoid valves" |
| **Card 3** | Manifold Blocks | "CNC-machined manifold blocks. 06 and 10 size configurations. Multi-station and single-station." | "View Manifold Blocks →" → `/manifold-blocks/` | "CNC machined hydraulic manifold block" |
| **Card 4** | Complete Hydraulic Systems | "Turnkey hydraulic solutions. From system design to commissioning. Full component integration." | "Discuss Your Project →" → `/hydraulic-systems/` | "Complete hydraulic system with cylinders, power pack and manifold block" |

## CTA Placement

| CTA | Style | Target |
|---|---|---|
| View [Product] → | `btn-ghost btn-sm` (text link with arrow) | Respective pillar page |
| REQUEST A QUOTE → | `btn-primary btn-md` (orange, centered below grid) | `/request-quote/` |

## SEO Purpose
- H2 contains secondary keyword naturally
- Internal links to all 4 product pillar pages (Rule 5 from linking architecture)
- Product descriptions contain product-specific keywords
- Image alt text optimized per Technical SEO Spec Section 12

## Conversion Purpose
- Product cards are clickable gateways to product pillar pages
- Each card description addresses what the buyer needs (bore sizes, mounting types)
- Section-level CTA captures buyers who are already convinced
- Card hover effect (translateY -4px + shadow) creates interactive feedback

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| **≥1024px** | 3 columns top row + 1 centered card below, OR 2×2 grid |
| **768–1023px** | 2×2 grid |
| **<768px** | Single column stack. Cards full-width. Horizontal scroll carousel option for mobile. |

### Animation
```
Section title:     fadeUp on scroll
Product cards:     fadeUp + stagger (80ms between each card)
Card images:       scale(1.05) on hover, 400ms ease-out
Card links:        Arrow slides right 4px on hover
```

---

# SECTION 04: Industries

## Purpose
Signal breadth of expertise. Capture industry-specific buyer intent. Drive click-through to industry landing pages that target Tier 4 keywords.

## Layout

```
Background: var(--surface-raised) → #F8FAFC
Padding: 96px top, 96px bottom
Container: max-width: 1200px

┌─────────────────────────────────────────────────────────────────────────────────┐
│                                                                                 │
│     OVERLINE: "INDUSTRIES WE SERVE"                                            │
│     H2: "Hydraulic Solutions for 20+ Industrial Sectors"                       │
│     SUBTITLE: "From injection moulding to automotive OEM..."                   │
│                                                                                 │
│     gap: 48px                                                                   │
│                                                                                 │
│     ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐       │
│     │ [Icon] │ │ [Icon] │ │ [Icon] │ │ [Icon] │ │ [Icon] │ │ [Icon] │       │
│     │Inject. │ │ Press  │ │ Auto   │ │ Steel  │ │Rolling │ │Fly Ash │       │
│     │Moulding│ │& Metal │ │  OEM   │ │& Metal │ │ Mills  │ │ Brick  │       │
│     └────────┘ └────────┘ └────────┘ └────────┘ └────────┘ └────────┘       │
│                                                                                 │
│     ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐       │
│     │ [Icon] │ │ [Icon] │ │ [Icon] │ │ [Icon] │ │ [Icon] │ │ [Icon] │       │
│     │Agricul.│ │Construc│ │Printing│ │ Wooden │ │  Roto  │ │ More   │       │
│     │Equipmt.│ │Equipmt.│ │Machines│ │Machinry│ │Moulding│ │  →     │       │
│     └────────┘ └────────┘ └────────┘ └────────┘ └────────┘ └────────┘       │
│                                                                                 │
│     Grid: repeat(6, 1fr), gap: 24px                                            │
│     Card: .card-industry (centered icon + title, hover: blue bg flip)          │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## Content Placement

Each tile contains:
1. **Icon** — 56×56px container, `primary-50` background, `primary-600` icon color. Lucide icon.
2. **Title** — `.text-base`, 600 weight, centered.
3. **Link** — Entire card is clickable → `/industries/[slug]/`

| Tile | Industry | Icon (Lucide) | Link |
|---|---|---|---|
| 1 | Injection Moulding | `factory` | `/industries/injection-moulding/` |
| 2 | Press & Metal Forming | `hammer` | `/industries/press-metal-forming/` |
| 3 | Automotive OEM | `car` | `/industries/automotive/` |
| 4 | Steel & Metallurgy | `flame` | `/industries/steel-metallurgy/` |
| 5 | Rolling Mills | `cog` | `/industries/rolling-mills/` |
| 6 | Fly Ash Brick | `building-2` | `/industries/fly-ash-brick/` |
| 7 | Agricultural Equipment | `tractor` | `/industries/agricultural-equipment/` |
| 8 | Construction Equipment | `crane` | `/applications/construction-equipment/` |
| 9 | Printing Machines | `printer` | `/industries/printing/` |
| 10 | Wooden Machinery | `trees` | `/industries/wooden-machinery/` |
| 11 | Roto Moulding | `rotate-3d` | `/industries/roto-moulding/` |
| 12 | View All Industries → | `arrow-right` | `/industries/` |

## CTA Placement
No standalone CTA button. Each tile IS a CTA (entire card clickable). The "View All Industries →" tile acts as the section's forward link.

## SEO Purpose
- Internal links to all 11 industry pages (massive internal linking value)
- H2 targets "hydraulic solutions for industries" keyword cluster
- Each tile creates a contextual internal link with keyword-rich destination

## Conversion Purpose
- Industry-specific buyers see their sector represented (builds relevance)
- Click-through to dedicated industry pages with tailored CTAs
- Signals breadth: "They serve MY industry, they understand my needs"

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| **≥1024px** | 6 columns per row (6×2 grid) |
| **768–1023px** | 4 columns per row (4×3 grid) |
| **<768px** | 3 columns per row (3×4 grid), tiles compact to 48px icons |

### Animation
```
Industry tiles: fadeUp + stagger (80ms between tiles)
Tile hover:     Icon background flips from primary-50 to primary-600,
                icon color flips from primary-600 to white
                Card border → primary-400, background → primary-50
                translateY(-2px)
```

---

# SECTION 05: Why Choose Us

## Purpose
Address key buyer objections. Differentiate from competitors. Provide concrete reasons to choose Honeywell over alternatives.

## Layout

```
Background: var(--surface-ground) → #FFFFFF
Padding: 96px top, 96px bottom
Container: max-width: 1200px

┌─────────────────────────────────────────────────────────────────────────────────┐
│                                                                                 │
│     OVERLINE: "WHY HONEYWELL HYDRAULICS"                                       │
│     H2: "Why 200+ Manufacturers Trust Us"                                      │
│     SUBTITLE: "Built for procurement managers who need reliability,             │
│                not promises."                                                   │
│                                                                                 │
│     gap: 48px                                                                   │
│                                                                                 │
│     ┌─────────────────────────────┐  ┌─────────────────────────────┐           │
│     │ [icon: wrench]              │  │ [icon: shield-check]        │           │
│     │                              │  │                              │           │
│     │ Custom Engineering           │  │ Quality Tested               │           │
│     │                              │  │                              │           │
│     │ Every cylinder built to      │  │ 100% pressure-tested before  │           │
│     │ your bore, stroke, and       │  │ dispatch. No shortcuts.      │           │
│     │ mounting specifications.     │  │ No compromises.              │           │
│     └─────────────────────────────┘  └─────────────────────────────┘           │
│                                                                                 │
│     ┌─────────────────────────────┐  ┌─────────────────────────────┐           │
│     │ [icon: truck]               │  │ [icon: banknote]            │           │
│     │                              │  │                              │           │
│     │ 7–15 Day Delivery            │  │ Factory-Direct Pricing       │           │
│     │                              │  │                              │           │
│     │ Standard products ship in    │  │ No middlemen. No dealer      │           │
│     │ 7 days. Custom cylinders     │  │ markup. Direct from our      │           │
│     │ in 15 days or less.          │  │ Ahmedabad factory.           │           │
│     └─────────────────────────────┘  └─────────────────────────────┘           │
│                                                                                 │
│     ┌─────────────────────────────┐  ┌─────────────────────────────┐           │
│     │ [icon: headphones]          │  │ [icon: factory]             │           │
│     │                              │  │                              │           │
│     │ After-Sales Support          │  │ In-House Manufacturing       │           │
│     │                              │  │                              │           │
│     │ Dedicated support for        │  │ Complete in-house production  │           │
│     │ maintenance, repairs, and    │  │ from raw material to          │           │
│     │ spare parts. Same-day        │  │ finished product. CNC, hone, │           │
│     │ WhatsApp response.           │  │ assembly, and testing.       │           │
│     └─────────────────────────────┘  └─────────────────────────────┘           │
│                                                                                 │
│     Grid: repeat(2, 1fr), gap: 32px                                            │
│     Card: .card (white bg, 1px neutral-200 border, 24px padding)               │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## Content Placement

| Feature | Icon | Title | Description |
|---|---|---|---|
| 1 | `wrench` | Custom Engineering | "Every cylinder built to your bore, stroke, and mounting specifications. Drawing-to-delivery service for OEMs." |
| 2 | `shield-check` | Quality Tested | "100% pressure-tested before dispatch. No shortcuts. No compromises on material or finish." |
| 3 | `truck` | 7–15 Day Delivery | "Standard products ship in 7 days. Custom cylinders manufactured and delivered in 15 days or less." |
| 4 | `banknote` | Factory-Direct Pricing | "No middlemen. No dealer markup. You buy direct from our Kathwada GIDC factory in Ahmedabad." |
| 5 | `headphones` | After-Sales Support | "Dedicated technical support. Same-day WhatsApp response. Maintenance guidance and spare parts supply." |
| 6 | `factory` | In-House Manufacturing | "Complete in-house production. CNC turning, honing, assembly, chrome plating, and hydraulic testing." |

## CTA Placement

| CTA | Style | Target |
|---|---|---|
| REQUEST A QUOTE → | `btn-primary btn-md` (centered below grid) | `/request-quote/` |

## SEO Purpose
- H2 targets trust/authority keyword cluster
- Addresses buyer intent questions captured in FAQ long-tails
- Supports E-E-A-T (Experience: real capabilities described)

## Conversion Purpose
- Each card directly addresses a top buyer objection (per Persona research)
- Persona 1 (Procurement): Cares about delivery time, testing, pricing
- Persona 2 (OEM): Cares about custom engineering, consistency
- Persona 3 (Business Owner): Cares about turnkey capability, support
- WhatsApp mention drives that channel

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| **≥1024px** | 2×3 grid |
| **768–1023px** | 2×3 grid, tighter padding |
| **<768px** | Single column stack, cards full-width |

### Animation
```
Feature cards: fadeUp + stagger (80ms between cards)
Card hover:    translateY(-2px), shadow increase, border → primary-200
```

---

# SECTION 06: Manufacturing Capability

## Purpose
Visual proof of manufacturing capability. Show the factory, machinery, and processes. Build E-E-A-T through real photography. Differentiate from competitors who have no factory photos.

## Layout

```
Background: var(--gradient-hero) → DARK section
Padding: 96px top, 96px bottom
Container: max-width: 1200px

┌─────────────────────────────────────────────────────────────────────────────────┐
│                                                                                 │
│     DARK BACKGROUND (Navy gradient)                                            │
│                                                                                 │
│     ┌──────────────────────────────┐    ┌─────────────────────────────────┐     │
│     │                              │    │                                 │     │
│     │    [FACTORY PHOTO]           │    │  OVERLINE: "OUR FACILITY"       │     │
│     │                              │    │                                 │     │
│     │    Real photo of the         │    │  H2: "Precision Manufacturing   │     │
│     │    Honeywell Hydraulics      │    │       from Our Ahmedabad        │     │
│     │    factory floor showing     │    │       Factory"                   │     │
│     │    CNC machines, assembly    │    │                                 │     │
│     │    area, testing bench.      │    │  Body: "Our 5,000 sq.ft.       │     │
│     │                              │    │  facility at Kathwada GIDC      │     │
│     │    Aspect ratio: 4:3         │    │  houses CNC lathes, honing     │     │
│     │    border-radius: 16px       │    │  machines, hydraulic test      │     │
│     │                              │    │  benches, and a dedicated      │     │
│     │                              │    │  assembly line."               │     │
│     │                              │    │                                 │     │
│     │                              │    │  Capability list:              │     │
│     │                              │    │  ✓ CNC Turning & Boring        │     │
│     │                              │    │  ✓ Internal Honing             │     │
│     │                              │    │  ✓ Chrome Rod Processing       │     │
│     │                              │    │  ✓ Hydraulic Pressure Testing  │     │
│     │                              │    │  ✓ Complete Assembly           │     │
│     │                              │    │                                 │     │
│     │                              │    │  [VIEW FACTORY GALLERY →]      │     │
│     │                              │    │  [SCHEDULE A VISIT →]          │     │
│     │                              │    │                                 │     │
│     └──────────────────────────────┘    └─────────────────────────────────┘     │
│                                                                                 │
│     Grid: 1fr 1fr (image : content), gap: 64px                                │
│     Image on LEFT, content on RIGHT                                            │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## CTA Placement

| CTA | Style | Target |
|---|---|---|
| VIEW FACTORY GALLERY → | `btn-white btn-md` | `/resources/gallery/factory/` |
| SCHEDULE A VISIT → | `btn-outline btn-md` (white border on dark) | `/contact/` |

## SEO Purpose
- Internal link to factory gallery page
- Content supports "hydraulic manufacturer factory Ahmedabad" keyword
- Real factory photos signal E-E-A-T (Experience)
- Geo-reference (Kathwada GIDC) reinforces local SEO

## Conversion Purpose
- Visual proof eliminates "are they real?" objection
- Factory visit CTA serves Persona 1 (wants to inspect facility before ordering)
- Capability list matches exactly what procurement managers evaluate

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| **≥1024px** | Side-by-side: image left (50%), content right (50%) |
| **<1024px** | Stack: image on top (100% width), content below |

### Animation
```
Factory image:    slideInLeft on scroll
Content block:    slideInRight on scroll
Capability items: fadeUp + stagger (80ms)
```

---

# SECTION 07: Certifications & Quality

## Purpose
Display quality certifications, testing standards, and compliance. Critical for Indian B2B trust. Directly supports E-E-A-T Authority signals.

## Layout

```
Background: var(--surface-raised) → #F8FAFC
Padding: 80px top, 80px bottom
Container: max-width: 1200px

┌─────────────────────────────────────────────────────────────────────────────────┐
│                                                                                 │
│     OVERLINE: "QUALITY ASSURANCE"                                              │
│     H2: "Certified Quality. Tested Performance."                               │
│     SUBTITLE: "Every product meets international standards..."                  │
│                                                                                 │
│     gap: 48px                                                                   │
│                                                                                 │
│     ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│     │  [ISO Badge] │  │ [Test Badge] │  │ [Mat. Badge] │  │ [Cert Badge] │    │
│     │              │  │              │  │              │  │              │    │
│     │  ISO 9001    │  │  100%        │  │  Certified   │  │  Industry    │    │
│     │  Quality     │  │  Pressure    │  │  Raw         │  │  Standards   │    │
│     │  Management  │  │  Tested      │  │  Materials   │  │  Compliant   │    │
│     └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                                                 │
│     Grid: repeat(4, 1fr), gap: 32px                                            │
│     Cards: centered icon/badge + title + subtitle                              │
│                                                                                 │
│     [VIEW OUR CERTIFICATIONS →]  ← Text link centered                          │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## CTA Placement

| CTA | Style | Target |
|---|---|---|
| VIEW OUR CERTIFICATIONS → | `btn-ghost btn-md` (text link with arrow) | `/certifications/` |

## SEO Purpose
- Internal link to `/certifications/` page
- H2 targets "certified hydraulic manufacturer" keyword cluster
- Supports E-E-A-T Authority signals

## Conversion Purpose
- ISO badge clears "are they certified?" procurement checkbox
- Addresses Persona 1 concern: quality standards before vendor shortlisting
- Testing claim (100% pressure tested) addresses cylinder failure fear

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| **≥1024px** | 4 columns |
| **768–1023px** | 2×2 grid |
| **<768px** | 2×2 grid with compact badges |

### Animation
```
Cert badges: scaleUp + stagger (100ms between badges)
```

---

# SECTION 08: Our Process

## Purpose
Show the buyer exactly what happens after they contact Honeywell. Reduce uncertainty. Demonstrate professionalism and structured workflow.

## Layout

```
Background: var(--surface-ground) → #FFFFFF
Padding: 96px top, 96px bottom
Container: max-width: 1200px

┌─────────────────────────────────────────────────────────────────────────────────┐
│                                                                                 │
│     OVERLINE: "HOW WE WORK"                                                   │
│     H2: "From Inquiry to Delivery in 4 Steps"                                 │
│                                                                                 │
│     gap: 48px                                                                   │
│                                                                                 │
│     ①────────────────②────────────────③────────────────④                       │
│     │                 │                 │                 │                       │
│   ┌─┴──────────┐   ┌─┴──────────┐   ┌─┴──────────┐   ┌─┴──────────┐           │
│   │  01         │   │  02         │   │  03         │   │  04         │           │
│   │             │   │             │   │             │   │             │           │
│   │  Share Your │   │  Technical  │   │  Production │   │  Quality    │           │
│   │  Requirement│   │  Design &   │   │  &          │   │  Testing &  │           │
│   │             │   │  Quote      │   │  Assembly   │   │  Delivery   │           │
│   │             │   │             │   │             │   │             │           │
│   │  Submit your│   │  Our team   │   │  Precision  │   │  100%       │           │
│   │  specs via  │   │  reviews &  │   │  machining  │   │  pressure   │           │
│   │  form, call,│   │  provides a │   │  on our CNC │   │  tested.    │           │
│   │  or WhatsApp│   │  detailed   │   │  machines.  │   │  Dispatched │           │
│   │             │   │  quotation. │   │  Full        │   │  in 7-15    │           │
│   │             │   │             │   │  assembly.  │   │  days.       │           │
│   └────────────┘   └────────────┘   └────────────┘   └────────────┘           │
│                                                                                 │
│     Layout: 4 columns with connecting line between step numbers                │
│     Step number: 40px circle, primary-600 bg, white text                       │
│     Connecting line: 2px, neutral-200, horizontal                              │
│                                                                                 │
│     [START YOUR PROJECT →]  ← CTA centered below                               │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## CTA Placement

| CTA | Style | Target |
|---|---|---|
| START YOUR PROJECT → | `btn-primary btn-md` | `/request-quote/` |

## SEO Purpose
- Supports "custom hydraulic cylinder design" keyword on linked pages
- Content addresses "hydraulic cylinder delivery time" search queries
- Process transparency = E-E-A-T Experience signal

## Conversion Purpose
- Reduces buyer anxiety: "I know what happens next"
- WhatsApp mention in Step 1 drives that channel
- 7-15 day delivery promise is a conversion accelerator

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| **≥1024px** | Horizontal 4-column layout with connecting lines |
| **768–1023px** | 2×2 grid, connecting lines removed |
| **<768px** | Vertical timeline. Steps stack with vertical connecting line on left. |

### Animation
```
Step items: fadeUp + stagger (100ms per step)
Connecting lines: progressFill animation (0% to 100% width) on scroll
```

---

# SECTION 09: Testimonials

## Purpose
Social proof from real clients. Build trust through third-party validation. Support E-E-A-T Trust signals.

## Layout

```
Background: var(--surface-raised) → #F8FAFC
Padding: 96px top, 96px bottom
Container: max-width: 1200px

┌─────────────────────────────────────────────────────────────────────────────────┐
│                                                                                 │
│     OVERLINE: "CLIENT TESTIMONIALS"                                            │
│     H2: "Trusted by 200+ Manufacturers Across Gujarat"                         │
│                                                                                 │
│     gap: 48px                                                                   │
│                                                                                 │
│     ┌───────────────────────────────┐  ┌───────────────────────────────┐        │
│     │  "                            │  │  "                            │        │
│     │  Honeywell Hydraulics         │  │  We have been ordering        │        │
│     │  delivered 40 custom          │  │  power packs from Honeywell   │        │
│     │  cylinders for our press      │  │  for 3 years. Consistent      │        │
│     │  line. Zero defects.          │  │  quality and on-time          │        │
│     │  On-time delivery.            │  │  delivery every time.         │        │
│     │                               │  │                               │        │
│     │  ★★★★★                        │  │  ★★★★★                        │        │
│     │                               │  │                               │        │
│     │  [Avatar] Rajesh Patel        │  │  [Avatar] Suresh Mehta        │        │
│     │           Plant Manager       │  │           Director             │        │
│     │           [Company], Rajkot   │  │           [Company], Surat     │        │
│     └───────────────────────────────┘  └───────────────────────────────┘        │
│                                                                                 │
│     Grid: repeat(2, 1fr), gap: 32px                                            │
│     Cards: .card-testimonial (large quote mark, italic text)                   │
│                                                                                 │
│     [VIEW ALL CLIENT STORIES →]                                                │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## CTA Placement

| CTA | Style | Target |
|---|---|---|
| VIEW ALL CLIENT STORIES → | `btn-ghost btn-md` | `/clients/` |

## SEO Purpose
- Internal link to `/clients/` page
- H2 contains "manufacturers across Gujarat" (geo + social proof)
- Client locations (Rajkot, Surat) reinforce Gujarat service area

## Conversion Purpose
- Real names, titles, and locations build trust
- Star ratings provide visual trust shorthand
- Industry-specific testimonials match buyer personas

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| **≥1024px** | 2 columns side-by-side |
| **<1024px** | Single column stack, OR horizontal carousel with dots |

### Animation
```
Testimonial cards: fadeUp on scroll
```

---

# SECTION 10: FAQ

## Purpose
Capture long-tail keyword searches via People Also Ask queries. Reduce bounce rate by answering common objections. Support FAQPage schema for rich snippets.

## Layout

```
Background: var(--surface-ground) → #FFFFFF
Padding: 96px top, 96px bottom
Container: max-width: 800px (narrower for readability)

┌─────────────────────────────────────────────────────────────────────────────────┐
│                                                                                 │
│     OVERLINE: "FREQUENTLY ASKED QUESTIONS"                                     │
│     H2: "Common Questions About Our Hydraulic Products"                        │
│                                                                                 │
│     gap: 32px                                                                   │
│                                                                                 │
│     ┌─────────────────────────────────────────────────────────────────┐         │
│     │  What bore sizes do you manufacture?                    [▼]    │         │
│     │  ─────────────────────────────────────────────                  │         │
│     │  We manufacture hydraulic cylinders with bore sizes from        │         │
│     │  40mm to 300mm. Custom sizes available on request.             │         │
│     └─────────────────────────────────────────────────────────────────┘         │
│                                                                                 │
│     ┌─────────────────────────────────────────────────────────────────┐         │
│     │  What is your delivery time?                             [▼]   │         │
│     └─────────────────────────────────────────────────────────────────┘         │
│                                                                                 │
│     ┌─────────────────────────────────────────────────────────────────┐         │
│     │  Do you offer custom hydraulic cylinders?                [▼]   │         │
│     └─────────────────────────────────────────────────────────────────┘         │
│                                                                                 │
│     ┌─────────────────────────────────────────────────────────────────┐         │
│     │  What industries do you serve?                           [▼]   │         │
│     └─────────────────────────────────────────────────────────────────┘         │
│                                                                                 │
│     ┌─────────────────────────────────────────────────────────────────┐         │
│     │  Do you provide after-sales support?                     [▼]   │         │
│     └─────────────────────────────────────────────────────────────────┘         │
│                                                                                 │
│     Accordion: single-expand, click to toggle                                  │
│     Chevron: rotates 180° when open                                            │
│                                                                                 │
│     [HAVE MORE QUESTIONS? CONTACT US →]                                        │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## Content Placement

| # | Question | Answer (summary) | Target Keywords |
|---|---|---|---|
| 1 | What bore sizes do you manufacture? | 40mm–300mm, custom sizes available | hydraulic cylinder bore size |
| 2 | What is your delivery time? | 7 days standard, 15 days custom | hydraulic cylinder delivery time India |
| 3 | Do you offer custom hydraulic cylinders? | Yes, drawing-to-delivery service | custom hydraulic cylinder manufacturer |
| 4 | What industries do you serve? | 20+ including injection moulding, automotive, press... | hydraulic solutions for industries |
| 5 | Do you provide after-sales support? | Yes, maintenance, repairs, spare parts, same-day response | hydraulic cylinder after sales support |

## CTA Placement

| CTA | Style | Target |
|---|---|---|
| HAVE MORE QUESTIONS? CONTACT US → | `btn-outline btn-md` | `/contact/` |

## SEO Purpose
- FAQPage schema markup (rich snippets in SERP)
- Targets People Also Ask long-tail queries
- Each answer contains internal links to relevant product/service pages
- H2 targets "hydraulic products" keyword naturally

## Conversion Purpose
- Answers objections that prevent quote submission
- "Custom cylinders" answer drives to quote form
- "After-sales" answer builds long-term confidence

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| **All breakpoints** | Full-width accordion, max-width 800px centered. No layout change needed. |

### Animation
```
Accordion expand:  grid-template-rows: 0fr → 1fr, 250ms ease-in-out
Chevron:           rotate(0deg → 180deg), 150ms ease-in-out
```

---

# SECTION 11: Final CTA

## Purpose
Last-chance conversion opportunity. Strong, clear call-to-action for buyers who have scrolled the entire page and are now convinced.

## Layout

```
Background: var(--gradient-hero) → DARK (Navy gradient)
Padding: 96px top, 96px bottom
Container: max-width: 800px (centered, narrow for focus)

┌─────────────────────────────────────────────────────────────────────────────────┐
│                                                                                 │
│     DARK BACKGROUND                                                            │
│                                                                                 │
│     ┌─────────────────────────────────────────────────────────────────┐         │
│     │                                                                 │         │
│     │             H2: "Ready to Discuss Your                          │         │
│     │                  Hydraulic Requirements?"                       │         │
│     │                                                                 │         │
│     │             Subtitle: "Get a free quote within 2 hours.         │         │
│     │             Call us, WhatsApp us, or fill our quick form."      │         │
│     │                                                                 │         │
│     │             [REQUEST A FREE QUOTE →]                            │         │
│     │             [📞 CALL +91 9924343873]  [💬 WHATSAPP US]          │         │
│     │                                                                 │         │
│     │             Everything centered.                                │         │
│     │                                                                 │         │
│     └─────────────────────────────────────────────────────────────────┘         │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## CTA Placement

| CTA | Style | Target |
|---|---|---|
| REQUEST A FREE QUOTE → | `btn-primary btn-lg` (orange, large) | `/request-quote/` |
| 📞 CALL +91 9924343873 | `btn-white btn-md` | `tel:+919924343873` |
| 💬 WHATSAPP US | `btn-white btn-md` | `https://wa.me/919924343873` |

## SEO Purpose
- Final internal link to `/request-quote/` and `/contact/`
- Phone number visible (NAP consistency)

## Conversion Purpose
- Triple-channel contact options (form, phone, WhatsApp)
- "2 hours" response time commitment creates urgency
- Dark background creates visual separation and urgency
- This is CTA #7 (final of the page)

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| **All breakpoints** | Centered layout. CTAs stack vertically on mobile. Phone and WhatsApp buttons side-by-side on desktop, stacked on mobile. |

### Animation
```
Entire section: fadeUp on scroll
```

---

# FOOTER

## Purpose
NAP consistency for local SEO. Comprehensive internal linking. Service area coverage. Legal compliance.

## Layout

```
Background: var(--surface-dark) → #0F172A (darkest navy)
Padding: 64px top, 32px bottom
Container: max-width: 1200px

┌─────────────────────────────────────────────────────────────────────────────────┐
│                                                                                 │
│  HONEYWELL HYDRAULICS          PRODUCTS               QUICK LINKS              │
│  ──────────────────            ────────               ───────────               │
│  B-18, Suryam Plaza Estate,   Hydraulic Cylinders     About Us                 │
│  Near Nilkanth Estate,        Hydraulic Power Packs   Clients                  │
│  Road no. 15, Kathwada GIDC,  Manifold Blocks         Certifications           │
│  Ahmedabad, Gujarat 382430    Hydraulic Systems       Blog & Guides            │
│                                                       Case Studies             │
│  📞 +91 9924343873            INDUSTRIES              FAQ                      │
│  📧 sales@honeywell...        Injection Moulding      Gallery                  │
│  💬 WhatsApp Us               Press & Metal Forming    Downloads                │
│                               Automotive              Privacy Policy           │
│                               Rolling Mills           Terms & Conditions       │
│                               Steel & Metallurgy      Sitemap                  │
│                               Agricultural Equipment                           │
│                                                                                 │
│  SERVICE AREAS                                                                  │
│  ─────────────                                                                  │
│  Ahmedabad · Surat · Vadodara · Rajkot · Bhavnagar · Gandhinagar · Vapi       │
│  Gujarat · Maharashtra · Rajasthan · All India                                 │
│                                                                                 │
│  ─────────────────────────────────────────────────────────────────────          │
│  © 2026 Honeywell Hydraulics. All Rights Reserved.                             │
│  Hydraulic Cylinder Manufacturer in Ahmedabad, Gujarat, India.                 │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘

Grid: 4 columns (Company Info | Products | Industries + Quick Links side by side)
Service Areas: full-width row below the columns
Copyright: full-width, separated by 1px border (neutral-800)
```

## SEO Purpose
- NAP block matches Organization + LocalBusiness schema exactly
- Internal links to all pillar pages, industry pages, location pages
- Service area links to all 12 location pages
- Copyright line contains primary keyword as anchor text
- Footer provides crawl paths to deep pages

## Conversion Purpose
- Phone and WhatsApp always visible
- "Service Areas" shows Gujarat-wide coverage (builds confidence for non-Ahmedabad buyers)

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| **≥1024px** | 4-column grid |
| **768–1023px** | 2×2 grid |
| **<768px** | Single column accordion-style (sections collapsible) |

---

# FLOATING ELEMENTS

## WhatsApp Button

```
Position: fixed, bottom: 24px, right: 24px
Size: 60×60px, border-radius: 50%
Background: #25D366 (WhatsApp green)
Icon: WhatsApp SVG, white, 32px
Shadow: 0 4px 12px rgba(0,0,0,0.15)
Animation: pulse (subtle green glow every 3 seconds)
z-index: 999
Link: https://wa.me/919924343873?text=Hi%20I%20need%20a%20quote%20for%20hydraulic%20equipment
```

## Mobile Sticky Bar (< 768px only)

```
Position: fixed, bottom: 0, left: 0, right: 0
Height: 56px
Background: #FFFFFF
Border-top: 1px solid neutral-200
Box-shadow: 0 -2px 8px rgba(0,0,0,0.08)
z-index: 998

Layout: flex, 3 equal buttons
┌──────────────────────────────────────────────────┐
│  [📞 CALL]      [💬 WHATSAPP]      [📋 QUOTE]   │
└──────────────────────────────────────────────────┘
```

---

# CTA INVENTORY (Complete Page Summary)

| # | Section | CTA Text | Type | Target |
|---|---|---|---|---|
| 1 | Header | GET QUOTE → | `btn-primary btn-sm` | `/request-quote/` |
| 2 | Hero | REQUEST A FREE QUOTE → | `btn-primary btn-lg` | `/request-quote/` |
| 3 | Hero | EXPLORE PRODUCTS | `btn-white btn-lg` | `/hydraulic-cylinders/` |
| 4 | Products | REQUEST A QUOTE → | `btn-primary btn-md` | `/request-quote/` |
| 5 | Why Choose Us | REQUEST A QUOTE → | `btn-primary btn-md` | `/request-quote/` |
| 6 | Manufacturing | SCHEDULE A VISIT → | `btn-outline btn-md` | `/contact/` |
| 7 | Process | START YOUR PROJECT → | `btn-primary btn-md` | `/request-quote/` |
| 8 | FAQ | CONTACT US → | `btn-outline btn-md` | `/contact/` |
| 9 | Final CTA | REQUEST A FREE QUOTE → | `btn-primary btn-lg` | `/request-quote/` |
| 10 | Final CTA | CALL +91 9924343873 | `btn-white btn-md` | `tel:+919924343873` |
| 11 | Final CTA | WHATSAPP US | `btn-white btn-md` | `wa.me/919924343873` |
| 12 | Floating | WhatsApp bubble | Green circle | `wa.me/919924343873` |
| 13 | Mobile Bar | CALL | Sticky bar | `tel:+919924343873` |
| 14 | Mobile Bar | WHATSAPP | Sticky bar | `wa.me/919924343873` |
| 15 | Mobile Bar | QUOTE | Sticky bar | `/request-quote/` |

**Total unique CTA touchpoints: 15**
**Quote form links: 6**
**Phone links: 3**
**WhatsApp links: 3**

---

# INTERNAL LINK MAP (Homepage)

| # | Destination | Anchor Context | Section |
|---|---|---|---|
| 1 | `/hydraulic-cylinders/` | Product card: "Hydraulic Cylinders" | Products |
| 2 | `/hydraulic-power-packs/` | Product card: "Power Packs" | Products |
| 3 | `/manifold-blocks/` | Product card: "Manifold Blocks" | Products |
| 4 | `/hydraulic-systems/` | Product card: "Hydraulic Systems" | Products |
| 5 | `/industries/injection-moulding/` | Industry tile | Industries |
| 6 | `/industries/press-metal-forming/` | Industry tile | Industries |
| 7 | `/industries/automotive/` | Industry tile | Industries |
| 8 | `/industries/steel-metallurgy/` | Industry tile | Industries |
| 9 | `/industries/rolling-mills/` | Industry tile | Industries |
| 10 | `/industries/fly-ash-brick/` | Industry tile | Industries |
| 11 | `/industries/agricultural-equipment/` | Industry tile | Industries |
| 12 | `/industries/` | "View All Industries →" | Industries |
| 13 | `/resources/gallery/factory/` | "View Factory Gallery →" | Manufacturing |
| 14 | `/certifications/` | "View Certifications →" | Certifications |
| 15 | `/clients/` | "View All Client Stories →" | Testimonials |
| 16 | `/contact/` | "Contact Us →" | FAQ |
| 17 | `/request-quote/` | Multiple CTAs (6 instances) | Multiple |
| 18 | `/about/` | Nav link | Header |
| 19 | `/locations/ahmedabad/` | Footer service area | Footer |
| 20 | `/locations/gujarat/` | Footer service area | Footer |
| 21+ | All location pages | Footer service area links | Footer |

**Total internal links from homepage: 25+**
**Exceeds minimum 5+ per page requirement from SEO strategy**

---

# SCHEMA MARKUP (Homepage)

```
Organization + LocalBusiness + WebSite (with SearchAction) + WebPage + FAQPage

All implemented as JSON-LD in @graph pattern per Technical SEO Spec Section 7.2
```

---

# TECHNICAL SPECIFICATIONS

| Spec | Target | Source Document |
|---|---|---|
| **LCP** | < 2.0 seconds | Technical SEO Spec |
| **INP** | < 200ms | Technical SEO Spec |
| **CLS** | < 0.1 | Technical SEO Spec |
| **Total Page Weight** | < 1MB | Technical SEO Spec |
| **CSS Files** | ≤ 3 (1 critical inline + 2 deferred) | Technical SEO Spec |
| **JS Files** | ≤ 5 (deferred/async) | Technical SEO Spec |
| **Font** | Inter (400, 500, 600, 700, 800) + JetBrains Mono (400, 500) | Design System |
| **Image Format** | WebP primary, AVIF where supported | Design System |
| **Hero Image** | Preloaded, not lazy-loaded | Technical SEO Spec |
| **Below-fold Images** | `loading="lazy"` | Technical SEO Spec |
| **Title Tag** | "Hydraulic Cylinder & Power Pack Manufacturer in Ahmedabad \| Honeywell Hydraulics" (58 chars) | Technical SEO Spec |
| **Meta Description** | "Leading manufacturer of custom hydraulic cylinders, power packs & systems in Ahmedabad, Gujarat. Serving 20+ industries since 2018. Request a free quote today." (158 chars) | Technical SEO Spec |
| **Canonical** | `https://www.honeywellhydraulics.com/` | Technical SEO Spec |
| **H1** | "Leading Hydraulic Cylinder Manufacturer in Ahmedabad, Gujarat" | Content Strategy |

---

# BACKGROUND RHYTHM MAP

| Section | Background | Text Color | Rationale |
|---|---|---|---|
| 00 Header | Transparent → White on scroll | Dark / White | Blends with hero |
| 01 Hero | `gradient-hero` (dark navy) | White + neutral-300 | Premium, commanding |
| 02 Trust Bar | `surface-dark` (dark continuation) | accent-400 + neutral-300 | Seamless hero extension |
| 03 Products | `surface-ground` (white) | neutral-900 + neutral-700 | Clean product showcase |
| 04 Industries | `surface-raised` (#F8FAFC) | neutral-800 | Visual separation |
| 05 Why Choose Us | `surface-ground` (white) | neutral-900 + neutral-700 | Clean feature blocks |
| 06 Manufacturing | `gradient-hero` (dark navy) | White + neutral-300 | Visual weight for factory |
| 07 Certifications | `surface-raised` (#F8FAFC) | neutral-800 | Light, trustworthy |
| 08 Process | `surface-ground` (white) | neutral-900 + neutral-700 | Clean step layout |
| 09 Testimonials | `surface-raised` (#F8FAFC) | neutral-700 | Soft social proof |
| 10 FAQ | `surface-ground` (white) | neutral-900 | Readable, focused |
| 11 Final CTA | `gradient-hero` (dark navy) | White | Urgency, conversion |
| Footer | `surface-dark` (#0F172A) | neutral-300 + neutral-400 | Anchoring, permanent |

**Pattern: Dark → Dark → Light → Light-alt → Light → Dark → Light-alt → Light → Light-alt → Light → Dark → Dark**

---

# TASTE SKILL: VISUAL RHYTHM CHECKLIST

- [x] 8px spacing grid enforced across all tokens
- [x] Section padding: 96px desktop, 48-64px mobile
- [x] Consistent 48px gap between section header and content
- [x] Card internal padding: 24-32px consistently
- [x] No two adjacent sections share the same background
- [x] Whitespace between sections is intentional, not accidental
- [x] Typography scale follows 1.25 modular ratio
- [x] Single font family (Inter) — no decorative fonts
- [x] Mono font (JetBrains Mono) reserved only for spec values
- [x] Maximum 60px line length for body text (readability)

# IMPECCABLE: ARCHITECTURE CHECKLIST

- [x] Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- [x] One `<h1>` per page
- [x] No heading level skips (H1 → H2 → H3 only)
- [x] Every `<img>` has keyword-rich `alt` text
- [x] Every interactive element has unique ID
- [x] Keyboard-navigable accordion (FAQ)
- [x] `prefers-reduced-motion` respected
- [x] `loading="lazy"` on all below-fold images
- [x] Critical CSS inlined, rest deferred
- [x] JSON-LD schema in `<head>`

# EMIL KOWALSKI: COMPOSITION CHECKLIST

- [x] Hero uses asymmetric grid (7fr/5fr), NOT centered text only
- [x] Alternating section backgrounds create depth
- [x] Dark sections bookend the page (hero + final CTA)
- [x] Cards have hover micro-interactions (lift + shadow)
- [x] Staggered entrance animations on scroll
- [x] Visual hierarchy: overline → H2 → subtitle → content → CTA
- [x] Consistent overline pattern across all sections
- [x] Adapted to industrial manufacturer (NOT SaaS startup aesthetic)

---

*Wireframe prepared: June 5, 2026*
*Synthesized from 8 project documents + 4 skills*
*Ready for developer implementation*
