---
name: page-builder
description: >
  Generate complete, production-ready Next.js pages for the Honeywell Hydraulics website.
  Supports 6 specialized page types: product, industry, application, location, service, resource.
  Each page type has its own metadata, schema, internal linking, required sections, and CTA strategy.
  Use when: user says "create a page", "new page", "build page", or mentions any of the 6 page types.
---

# Page Builder Skill

## Purpose

Generate a complete, production-ready Next.js page with SEO metadata, JSON-LD schemas, section components, data files, and image requirements — all in one operation.

## Page Types

This skill supports 6 specialized page types. Each has its own template, sections, and SEO strategy:

| Command | Page Type | Route Pattern | Example |
|---------|-----------|---------------|---------|
| `/new-product-page` | Product Detail | `/products/<category>/<slug>/` | `/products/hydraulic-cylinders/custom-hydraulic-cylinders/` |
| `/new-industry-page` | Industry | `/industries/<slug>/` | `/industries/injection-moulding/` |
| `/new-application-page` | Application | `/applications/<slug>/` | `/applications/hydraulic-press/` |
| `/new-location-page` | Location | `/locations/<slug>/` | `/locations/ahmedabad/` |
| `/new-service-page` | Service | `/services/<slug>/` | `/services/hydraulic-repair/` |
| `/new-resource-page` | Resource | `/resources/<slug>/` | `/resources/hydraulic-cylinder-guide/` |

---

## CRITICAL: Pre-Generation Checks

### Step 1 — Content Source Validation (MANDATORY)

Before generating ANY content, search for existing documentation:

```
Content Source Status:
- Documentation Found: YES / NO
- Source File(s): <list all matching files from /docs>
- Action: Reuse Existing Content / Generate New Content
```

**Search locations (in order):**
1. `docs/content/` — Pre-approved content files
2. `docs/` — Root documentation
3. `legacy-website/` — Legacy website content for migration
4. `data/` — Existing data files

**Rules:**
- If content exists → Reuse and structure it. Do NOT regenerate.
- Preserve technical accuracy and business messaging.
- Only improve formatting, SEO structure, and layout.
- If content does NOT exist → Generate new content following the content framework.

### Step 2 — Gather Page Information

Ask the user for:

1. **Page name** (e.g., "Custom Hydraulic Cylinders")
2. **Page type** (product / industry / application / location / service / resource)
3. **Route slug** (auto-suggest from name)
4. **Primary keyword** (auto-suggest based on page name)
5. **Section overrides** (optional — add/remove from default section list)

---

## File Generation

For each page, generate these files:

### 1. Page Route File
`app/(site)/<route>/page.tsx`

Must include:
- `import type { Metadata } from 'next'`
- SEO metadata via `buildMetadata()` from `@/lib/seo`
- JSON-LD schemas (Breadcrumb + WebPage minimum, plus page-type-specific schemas)
- Server Component (no `'use client'` unless section requires interactivity)
- All section components imported and rendered in correct order
- Comments with section numbering: `{/* 01 — Hero */}`

### 2. Data File
`data/<page-name>.ts`

Must include:
- All static content (FAQs, features, specs, stats)
- TypeScript interfaces for data structures
- Export named constants (not default exports)

### 3. Section Components (if new patterns needed)
`components/<page-category>/<SectionName>.tsx`

Must follow:
- Design system from `docs/DESIGN_SYSTEM.md`
- `Section` + `Container` + `Heading` component pattern
- Mobile-first responsive classes
- Alternating `bg="white"` / `bg="gray"` backgrounds
- Red divider under headings: `<div className="w-16 h-1 bg-honeywell-red rounded-full" />`

### 4. Image Requirements
Append to `REQUIRED_IMAGES.md`:
```markdown
## <Page Name> Page

| Asset | Status | Source | Path | Alt Text | Priority |
|---|---|---|---|---|---|
| <image name> | ❌ REQUIRED | Legacy or generate | `/images/<path>` | <SEO alt text> | High/Medium/Low |
```

---

## Page Type Templates

See `references/page-templates.md` for the complete template for each page type.

### Quick Reference — Default Sections per Page Type

#### Product Page (9 sections)
1. Hero (navy bg, breadcrumb, H1, product intro)
2. Product Overview (what it is, how it works)
3. Key Features (icon grid, 6 features)
4. Technical Specifications (SpecTable component)
5. Applications (where this product is used)
6. Industries Served (linked industry cards)
7. Advantages / Why Choose This Product
8. FAQ (5-8 questions, FAQAccordion)
9. CTA Banner (navy bg, Request Quote + Contact)

#### Industry Page (8 sections)
1. Hero (industry name, key challenge, hero stat)
2. Industry Overview (challenges + hydraulic solutions)
3. Products for This Industry (linked product cards)
4. Technical Requirements (specs table for industry)
5. Case Study / Application Example
6. Why Choose Us for This Industry
7. FAQ (5 industry-specific questions)
8. CTA Banner

#### Application Page (7 sections)
1. Hero (application name, use case)
2. Application Overview (problem → solution)
3. How It Works (process/operating principle)
4. Products Used (linked product cards)
5. Technical Specifications
6. FAQ
7. CTA Banner

#### Location Page (8 sections)
1. Hero (city/region name, local presence)
2. Local Industries Served
3. Products Available
4. Service Areas / Coverage
5. Location Advantages
6. Local Client Testimonials
7. FAQ (location-specific)
8. CTA Banner (with local phone/address)

#### Service Page (7 sections)
1. Hero (service name, value proposition)
2. Service Overview
3. Service Process (numbered steps)
4. Products Covered
5. Why Choose Our Service
6. FAQ
7. CTA Banner

#### Resource Page (6 sections)
1. Hero (resource title, type: guide/calculator/download)
2. Content Body (long-form article content)
3. Related Products
4. Related Resources
5. FAQ
6. CTA Banner

---

## Section Library

See `references/section-library.md` for the complete catalog of 30+ reusable section patterns with exact code templates.

---

## SEO Requirements (All Pages)

### Metadata
- Title: 50-60 characters, primary keyword first
- Description: 150-160 characters, includes CTA
- Keywords: 5-10 terms, primary + secondary + long-tail
- Canonical URL: absolute path with trailing slash
- OpenGraph: title, description, url, image
- Twitter: summary_large_image card

### JSON-LD Schemas (Minimum Required)
- `BreadcrumbList` — every page
- `WebPage` — every page
- `FAQPage` — if FAQ section exists
- `Product` — product pages only
- `Article` — resource pages only

### Internal Linking
- Breadcrumb navigation in hero
- 3+ internal links to related pages
- Section CTAs linking to conversion pages (`/request-quote`, `/contact-us`)
- Related product/industry cross-links

### Heading Hierarchy
```
h1 — Page title (Hero section only, ONE per page)
  h2 — Section titles (one per section)
    h3 — Sub-items (feature titles, card titles)
      h4 — Rarely needed
```

---

## Design System Compliance

Every generated page MUST use:

| Element | Component | Import Path |
|---------|-----------|-------------|
| Page sections | `<Section>` | `@/components/ui/Section` |
| Content width | `<Container>` | `@/components/ui/Container` |
| All headings | `<Heading>` | `@/components/ui/Heading` |
| All buttons | `<Button>` | `@/components/ui/Button` |
| CTA banners | `<CTA>` | `@/components/ui/CTA` |
| Cards | `<Card>` | `@/components/ui/Card` |
| Icon wrappers | `<IconBox>` | `@/components/ui/IconBox` |
| FAQ sections | `<FAQAccordion>` | `@/components/faq/FAQAccordion` |
| Schema | `<JsonLd>` | `@/components/seo/JsonLd` |

### Color Distribution
- White: 70% (primary backgrounds)
- Light Gray: 20% (alternate sections)
- Navy: 8% (headings, footer, hero)
- Red: 2% (CTAs, accents, dividers)

### Background Alternation (STRICT)
```
Section 1: bg="white"
Section 2: bg="gray"
Section 3: bg="white"
Section 4: bg="gray"
...
Final CTA: bg="navy"
```
Never two adjacent sections with the same background.

---

## Post-Generation Checklist

After generating all files, verify:

- [ ] `page.tsx` compiles without TypeScript errors
- [ ] All imports resolve to existing components
- [ ] Single H1 in Hero section
- [ ] Metadata title is 50-60 characters
- [ ] Metadata description is 150-160 characters
- [ ] JSON-LD includes BreadcrumbList + WebPage
- [ ] All sections use `<Section>` + `<Container>` + `<Heading>`
- [ ] Backgrounds alternate white/gray
- [ ] Data file exports named constants
- [ ] Image requirements appended to REQUIRED_IMAGES.md
- [ ] 3+ internal links present
- [ ] Mobile-first classes on all elements
- [ ] No `'use client'` unless required for interactivity

---

## Example Usage

```
User: /new-product-page
Agent: What product would you like to create a page for?
User: DC Mini Power Packs
Agent: 
  Content Source Status:
  - Documentation Found: YES
  - Source File(s): docs/content/products/dc-mini-power-packs.md
  - Action: Reuse Existing Content

  Creating page with route: /products/hydraulic-power-packs/dc-mini-power-packs/
  Primary keyword: "DC hydraulic power pack manufacturer"
  
  Generating:
  1. app/(site)/products/hydraulic-power-packs/dc-mini-power-packs/page.tsx
  2. data/dc-mini-power-packs.ts
  3. REQUIRED_IMAGES.md entry
  
  [Shows diff of all generated files]
```

```
User: /new-industry-page for injection moulding
Agent:
  Content Source Status:
  - Documentation Found: YES  
  - Source File(s): docs/content/industries/injection-moulding.md
  - Action: Reuse Existing Content

  Creating page: /industries/injection-moulding/
  ...
```

```
User: /new-location-page Surat
Agent:
  Content Source Status:
  - Documentation Found: NO
  - Action: Generate New Content

  Creating page: /locations/surat/
  Primary keyword: "hydraulic cylinder manufacturer Surat"
  ...
```
