<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:mobile-responsive-rules -->
# Mobile-First Responsive Design Rules

All pages and components MUST be mobile-friendly. Google uses mobile-first indexing.

## Mandatory Design System Usage
- **Headings**: Always use `<Heading>` component from `@/components/ui/Heading`. Never use raw `<h1>`–`<h6>` with inline font sizes. The component has built-in mobile-first size ramps:
  - `hero`: text-3xl → sm:text-4xl → md:text-5xl → lg:text-6xl
  - `section`: text-2xl → sm:text-3xl → md:text-4xl → lg:text-5xl
  - `subsection`: text-xl → sm:text-2xl → md:text-3xl
  - `card`: text-lg → sm:text-xl → md:text-2xl
- **Sections**: Always use `<Section>` component. Built-in padding: py-12 → md:py-16 → lg:py-24
- **Containers**: Always use `<Container>` component. Built-in padding: px-4 → sm:px-6 → lg:px-8
- **Buttons**: Always use `<Button>` component from `@/components/ui/Button`

## Mobile Sizing Rules
- Do NOT override Heading sizes inline with `className="text-3xl sm:text-4xl"`. Let the variant handle it.
- Section header spacing: Use `mb-8 md:mb-12` (not `mb-12` which wastes mobile space)
- Card padding: Use responsive padding `p-4 sm:p-5 md:p-6` (not fixed `p-6` or `p-8`)
- CTA buttons on mobile: Use `w-full sm:w-auto` for full-width tap targets
- Grid gaps: Use responsive gaps `gap-4 sm:gap-6 md:gap-8` (not fixed `gap-8`)
- Text scaling: Always include a mobile size `text-sm sm:text-base md:text-lg`

## Touch Targets
- All interactive elements must be minimum 48×48px on mobile (WCAG / Google requirement)
- Use `min-h-[48px]` on buttons and links for mobile

## Breakpoints (Tailwind defaults)
- `sm`: 640px (large phones / small tablets)
- `md`: 768px (tablets)
- `lg`: 1024px (desktop)
- `xl`: 1280px (wide desktop)

## Testing Checklist for New Pages
- No horizontal scroll at 320px viewport width
- All text readable without zooming
- All CTA touch targets ≥ 48px
- Content above fold is meaningful (not wasted on whitespace)
<!-- END:mobile-responsive-rules -->

<!-- BEGIN:content-source-validation -->
# Content Source Validation (MANDATORY)

Before creating or generating ANY page content, check for existing documentation:

## Required Check
1. Search `docs/` folder for relevant content
2. Search `docs/content/` for pre-approved content
3. Search `legacy-website/` for migration content
4. Search `data/` for existing data files

## Rules
- If content exists → REUSE and restructure it
- Do NOT regenerate or overwrite approved documentation
- Preserve technical accuracy and business messaging
- Only improve formatting, SEO structure, and layout
- If content does NOT exist → generate following content-generator skill

## Required Output Before Any Page Generation
```
Content Source Status:
- Documentation Found: YES / NO
- Source File(s): <list files>
- Action: Reuse Existing Content / Generate New Content
```
<!-- END:content-source-validation -->

<!-- BEGIN:design-tokens -->
# Design Tokens Reference

Full source of truth: `docs/DESIGN_SYSTEM.md`

## Colors (Use ONLY These)
| Token | Hex | Tailwind Class | Usage |
|-------|-----|----------------|-------|
| Honeywell Navy | `#0D1B5C` | `honeywell-navy` | Headings, nav, footer |
| Honeywell Red | `#E31B23` | `honeywell-red` | CTAs, accents (2% max) |
| Dark Slate | `#334155` | `brand-darkSlate` | Body emphasis |
| Steel Gray | `#64748B` | `brand-steelGray` | Body text, descriptions |
| Border Gray | `#CBD5E1` | `brand-borderGray` | Borders, dividers |
| Surface Gray | `#F8FAFC` | `brand-surfaceGray` | Alternate section bg |
| Light Surface | `#F1F5F9` | `brand-lightSurface` | Card surfaces |

**NEVER use:** arbitrary hex values (`text-[#xxx]`), generic Tailwind colors (`text-gray-600`, `bg-red-500`).

## Required Components (Never Use Raw HTML Equivalents)
| Instead of... | Use... | Import |
|---------------|--------|--------|
| `<h1>` – `<h6>` | `<Heading variant="hero\|section\|subsection\|card">` | `@/components/ui/Heading` |
| `<section>` | `<Section bg="white\|gray\|navy">` | `@/components/ui/Section` |
| `<div class="max-w-7xl">` | `<Container>` | `@/components/ui/Container` |
| `<button>` or `<a>` | `<Button variant="primary\|secondary\|outline">` | `@/components/ui/Button` |
| CTA banner | `<CTA title="..." ...>` | `@/components/ui/CTA` |
| Icon wrapper | `<IconBox icon={...}>` | `@/components/ui/IconBox` |
| Schema | `<JsonLd data={...}>` | `@/components/seo/JsonLd` |

## Section Pattern (Every Section Must Follow)
```tsx
<Section bg="white | gray" aria-labelledby="<id>-heading">
  <Container>
    <div className="text-center mb-12 flex flex-col items-center">
      <Heading variant="section" as="h2" id="<id>-heading"
        className="text-3xl sm:text-4xl text-honeywell-navy mb-4">
        Title
      </Heading>
      <div className="w-16 h-1 bg-honeywell-red rounded-full" aria-hidden="true" />
    </div>
    {/* Content grid */}
    {/* Section CTA */}
  </Container>
</Section>
```

## Background Alternation (STRICT)
```
Section 1: bg="white"
Section 2: bg="gray"
Section 3: bg="white"
...
Final CTA: bg="navy" (use <CTA> component)
```
NEVER have two adjacent sections with the same background.

## Icons
- Use `lucide-react` ONLY — never mix icon libraries
- Sizes: inline `w-4 h-4`, card `w-5 h-5`, feature `w-6 h-6`, large `w-8 h-8`

## Data Storage
- Store large content in `data/<page-name>.ts` — NOT inline in page components
- Export named constants (not default exports)
- Include TypeScript interfaces for data structures
<!-- END:design-tokens -->

<!-- BEGIN:seo-requirements -->
# SEO Requirements (Every Page)

## Metadata
- Title: 50-60 characters, primary keyword first
- Description: 150-160 characters, includes CTA
- Canonical URL with trailing slash
- OpenGraph + Twitter card configured

## JSON-LD (Minimum Required)
- `BreadcrumbList` — every page
- `WebPage` — every page
- `FAQPage` — if FAQ section exists
- `Product` — product pages
- `Article` — resource pages

## Heading Hierarchy
```
h1 — ONE per page (Hero section only)
  h2 — One per section
    h3 — Sub-items within sections
```
Never skip heading levels.

## Internal Linking
- 3+ internal links per page minimum
- Breadcrumb navigation in hero
- Section CTAs to /request-quote/ or /contact-us/
<!-- END:seo-requirements -->
