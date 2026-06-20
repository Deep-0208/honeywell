# 📋 DOCUMENT USAGE AUDIT
**Audit Date:** 2026-06-09  
**Auditor:** Principal Technical SEO Architect  
**Scope:** All files inside `docs/` directory

---

## LEGEND
- ✅ **Used** — Content/structure directly implemented in code
- ⚠️ **Partially Used** — Some sections implemented, others missing
- ❌ **Unused** — Document exists but content not yet implemented
- 🚫 **Not Referenced** — No page/component references this document at all

---

## SECTION 1 — ARCHITECTURE DOCS (`docs/architecture/`)

| File | Status | Used By | Missing / Notes |
|------|--------|---------|-----------------|
| `honeywell-product-page-template.md` | ⚠️ **65% Used** | All 4 product hub pages | 10-section template partially followed; missing: Product Schema on hub with `@type: Product` (using CollectionPage instead), no inline specs table component wired to template data, no "related products" sidebar |
| `honeywell-location-page-template.md` | ❌ **0% Used** | — | No location pages built yet; template completely unused |

---

## SECTION 2 — SEO DOCS (`docs/seo/`)

| File | Status | Used By | Missing / Notes |
|------|--------|---------|-----------------|
| `honeywell-technical-seo-spec.md` (61 KB) | ⚠️ **70% Used** | `lib/seo.ts`, `app/layout.tsx`, `next-sitemap.config.js` | Implemented: @graph schema, metadata, robots, sitemap priorities, OG/Twitter. **Missing:** `application/ld+json` verification test, image sitemap `/sitemap-images.xml` (referenced but not generated), GSC verification env var not set, HTML sitemap page not built |
| `page-inventory.md` (31 KB) | ⚠️ **8% Used** | — | 102 planned pages. Only 5 built (Homepage + 4 Product Hubs). 97 pages remain unbuilt. All status markers still `[ ]` — not updated post-build. |

---

## SECTION 3 — CONTENT DOCS (`docs/content/`)

### Root Content Files

| File | Status | Used By | Missing / Notes |
|------|--------|---------|-----------------|
| `index.md` | ❌ **Unused** | — | Master content index — not referenced by any component or page |
| `contact.md` | ❌ **Unused** | — | No contact page built |
| `request-quote.md` | ❌ **Unused** | — | No quote form page built |

### Homepage (`docs/content/homepage/`)

| File | Status | Used By | Missing / Notes |
|------|--------|---------|-----------------|
| `homepage-copy.md` | ⚠️ **55% Used** | `data/homepage.ts`, `components/homepage/*` | Hero headline used. Stats (7+ yrs, 500+ projects, 50+ industries, 98% satisfaction) not all verified against doc. FAQ content drawn from this. Testimonials not sourced from doc. Trust strip data partially matched. **Not used:** detailed product descriptions, service highlights, location-specific copy |

### Hubs (`docs/content/hubs/`)

| File | Status | Used By | Missing / Notes |
|------|--------|---------|-----------------|
| `products-hub.md` | ⚠️ **40% Used** | Product hub pages | Hub pages exist but don't follow the full hub doc structure. Missing: cross-product comparison table, related services section |
| `industries-hub.md` | ❌ **Unused** | — | No `/industries/` hub page built |
| `applications-hub.md` | ❌ **Unused** | — | No `/applications/` hub page built |
| `locations-hub.md` | ❌ **Unused** | — | No `/locations/` hub page built |
| `resources-hub.md` | ❌ **Unused** | — | No `/resources/` page built |
| `services-hub.md` | ❌ **Unused** | — | No `/services/` page built |
| `about-hub.md` | ❌ **Unused** | — | No `/about/` page built |

### Products (`docs/content/products/`)

| File | Status | Used By | Missing / Notes |
|------|--------|---------|-----------------|
| `hydraulic-cylinders.md` | ⚠️ **75% Used** | `products/hydraulic-cylinders/page.tsx`, cylinder components | Technical specs, FAQ questions, cylinder types referenced. **Missing:** technical FAQ section from doc, complete specs table data |
| `hydraulic-power-packs.md` | ⚠️ **70% Used** | `products/hydraulic-power-packs/page.tsx`, power pack components | Types grid, applications, FAQ questions used. **Missing:** detailed specifications table |
| `manifold-blocks.md` | ⚠️ **65% Used** | `products/manifold-blocks/page.tsx`, manifold components | Core content used. **Missing:** material comparison table, CETOP sizing reference |
| `hydraulic-systems.md` | ⚠️ **60% Used** | `products/hydraulic-systems/page.tsx`, systems components | Engineering process used. **Missing:** case study references, system sizing guide |

### Products — Cylinders (`docs/content/products/cylinders/`)

| File | Status | Used By | Missing / Notes |
|------|--------|---------|-----------------|
| `custom-hydraulic-cylinders.md` | ❌ **Unused** | — | No individual product page built for `/hydraulic-cylinders/custom/` |
| `telescopic-hydraulic-cylinders.md` | ❌ **Unused** | — | No page built for `/hydraulic-cylinders/telescopic/` |
| `tie-rod-hydraulic-cylinders.md` | ❌ **Unused** | — | No page built for `/hydraulic-cylinders/tie-rod/` |
| `welded-hydraulic-cylinders.md` | ❌ **Unused** | — | No page built for `/hydraulic-cylinders/welded/` |

### Products — Manifolds (`docs/content/products/manifolds/`)

| File | Status | Used By | Missing / Notes |
|------|--------|---------|-----------------|
| `06-size-manifold-blocks.md` | ❌ **Unused** | — | No individual page built |
| `10-size-manifold-blocks.md` | ❌ **Unused** | — | No individual page built |
| `cetop-manifold-blocks.md` | ❌ **Unused** | — | No individual page built |
| `custom-manifold-blocks.md` | ❌ **Unused** | — | No individual page built |
| `multi-station-manifold-blocks.md` | ❌ **Unused** | — | No individual page built |

### Products — Power Packs (`docs/content/products/power-packs/`)

| File | Status | Used By | Missing / Notes |
|------|--------|---------|-----------------|
| `3-phase-hydraulic-power-packs.md` | ❌ **Unused** | — | No individual page built |
| `dc-mini-power-packs.md` | ❌ **Unused** | — | No individual page built |
| `high-low-hydraulic-power-packs.md` | ❌ **Unused** | — | No individual page built |

### Products — Systems (`docs/content/products/systems/`)

| File | Status | Used By | Missing / Notes |
|------|--------|---------|-----------------|
| `high-pressure-hydraulic-systems.md` | ❌ **Unused** | — | No individual page built |
| `industrial-hydraulic-systems.md` | ❌ **Unused** | — | No individual page built |
| `marine-hydraulic-systems.md` | ❌ **Unused** | — | No individual page built |
| `mobile-hydraulic-systems.md` | ❌ **Unused** | — | No individual page built |
| `proportional-hydraulic-systems.md` | ❌ **Unused** | — | No individual page built |

### Industries (`docs/content/industries/`)

| File | Status | Used By | Missing / Notes |
|------|--------|---------|-----------------|
| `agriculture-industry.md` | ❌ **Unused** | — | No industry page built — data partially referenced in `IndustriesSection` homepage component only |
| `automotive-industry.md` | ❌ **Unused** | — | Same as above |
| `construction-equipment-industry.md` | ❌ **Unused** | — | Same |
| `injection-moulding-industry.md` | ❌ **Unused** | — | Same |
| `material-handling-industry.md` | ❌ **Unused** | — | Same |
| `plastic-processing-industry.md` | ❌ **Unused** | — | Same |
| `special-purpose-machines-industry.md` | ❌ **Unused** | — | Same |
| `steel-industry.md` | ❌ **Unused** | — | Same |

### Applications (`docs/content/applications/`)

| File | Status | Used By | Missing / Notes |
|------|--------|---------|-----------------|
| `car-parking-systems.md` | ❌ **Unused** | — | No application page built |
| `construction-equipment.md` | ❌ **Unused** | — | Same |
| `goods-lifts.md` | ❌ **Unused** | — | Same |
| `industrial-automation.md` | ❌ **Unused** | — | Same |
| `material-handling.md` | ❌ **Unused** | — | Same |
| `passenger-lifts.md` | ❌ **Unused** | — | Same |
| `press-machines.md` | ❌ **Unused** | — | Same |
| `scissor-tables.md` | ❌ **Unused** | — | Same |

### Locations (`docs/content/locations/`)

| File | Status | Used By | Missing / Notes |
|------|--------|---------|-----------------|
| `ahmedabad.md` | ❌ **Unused** | — | Referenced only in homepage `LocationsSection`. No dedicated page |
| `bhavnagar.md` | ❌ **Unused** | — | Same |
| `gandhinagar.md` | ❌ **Unused** | — | Same |
| `gujarat.md` | ❌ **Unused** | — | Same |
| `india.md` | ❌ **Unused** | — | Same |
| `jamnagar.md` | ❌ **Unused** | — | Same |
| `rajkot.md` | ❌ **Unused** | — | Same |
| `surat.md` | ❌ **Unused** | — | Same |
| `vadodara.md` | ❌ **Unused** | — | Same |
| `vapi.md` | ❌ **Unused** | — | Same |

### Resources (`docs/content/resources/`)

| File | Status | Used By | Missing / Notes |
|------|--------|---------|-----------------|
| `downloads.md` | ❌ **Unused** | — | No downloads page built |
| `faq.md` | ❌ **Unused** | — | No standalone FAQ resource page (FAQs exist inline on product pages only) |

### Services (`docs/content/services/`)

| File | Status | Used By | Missing / Notes |
|------|--------|---------|-----------------|
| `automation-integration.md` | ❌ **Unused** | — | No services section built |
| `custom-hydraulic-system-design.md` | ❌ **Unused** | — | Same |
| `hydraulic-consulting.md` | ❌ **Unused** | — | Same |
| `hydraulic-cylinder-repair.md` | ❌ **Unused** | — | Same |
| `hydraulic-system-retrofitting.md` | ❌ **Unused** | — | Same |
| `oem-hydraulic-manufacturing.md` | ❌ **Unused** | — | Same |

### About (`docs/content/about/`)

| File | Status | Used By | Missing / Notes |
|------|--------|---------|-----------------|
| `certifications.md` | ❌ **Unused** | — | No about/certifications page |
| `manufacturing-facility.md` | ❌ **Unused** | — | Same |
| `our-team.md` | ❌ **Unused** | — | Same |
| `quality-policy.md` | ❌ **Unused** | — | Same |

### Blogs (`docs/content/blogs/`)
| Status | Notes |
|--------|-------|
| ❌ **Directory is EMPTY** | No blog content docs exist. Blog is entirely unstarted. |

---

## SECTION 4 — STRATEGY DOCS (`docs/strategy/`)

| File | Status | Used By | Missing / Notes |
|------|--------|---------|-----------------|
| `honeywell-content-strategy.md` (49 KB) | ⚠️ **30% Used** | General page architecture | Content pillars followed; keyword mapping partially implemented. **Missing:** content calendar, internal linking patterns not fully wired |
| `honeywell-hydraulics-seo-strategy.md` (60 KB) | ⚠️ **40% Used** | `lib/seo.ts`, metadata | Organization schema, ManufacturingBusiness schema implemented. **Missing:** E-E-A-T signals, review schema, competitor gap analysis actions |
| `honeywell-keyword-map.md` (36 KB) | ⚠️ **25% Used** | Page metadata keywords | Primary keywords mapped to 5 built pages. 85%+ of keyword targets unmapped to actual pages |
| `honeywell-scalable-content-framework-v2.md` (8 KB) | ⚠️ **50% Used** | Product hub architecture | Hub-and-spoke model followed for products. Not applied to industries/locations/blog yet |

---

## SECTION 5 — UI DOCS (`docs/ui/`)

| File | Status | Used By | Missing / Notes |
|------|--------|---------|-----------------|
| `component-library.md` (52 KB) | ⚠️ **70% Used** | `components/ui/*`, `components/cards/*`, `components/faq/*` | Core UI components built. **Missing:** Tabs component, Accordion variants, Modal/Dialog, Toast notifications, Progress indicators |
| `homepage-wireframe.md` (81 KB) | ✅ **90% Used** | `app/(site)/page.tsx`, all homepage components | All 11 homepage sections implemented. **Missing:** sticky contact bar, floating WhatsApp button |
| `honeywell-design-system.md` (44 KB) | ⚠️ **60% Used** | `styles/`, `tailwind.config.ts`, fonts | Typography system (Barlow Condensed + DM Sans + JetBrains Mono) implemented. Colors partial. **Missing:** full CSS variable token system, dark mode tokens |

---

## SECTION 6 — DEVELOPMENT DOCS (`docs/development/`)

| File | Status | Used By | Missing / Notes |
|------|--------|---------|-----------------|
| `project-architecture.md` (123 KB) | ⚠️ **55% Used** | Overall project structure | App Router, TypeScript, Tailwind, server components pattern followed. **Missing:** i18n routing, ISR/SSG for product pages, image optimization pipeline |

---

## SECTION 7 — IMPLEMENTATION DOCS (`docs/implementation/`)

| File | Status | Used By | Missing / Notes |
|------|--------|---------|-----------------|
| `broken_link_report.md` | ❌ **Not Applied** | — | Known broken links documented but not fixed |
| `cro_specifications.md` | ❌ **Not Applied** | — | CRO specs (form optimization, CTA testing) not implemented |
| `eeat_framework.md` | ❌ **Not Applied** | — | E-E-A-T signals (author bios, expertise indicators, trust badges) not implemented |
| `local_seo_schema.md` | ⚠️ **50% Applied** | `lib/seo.ts` | ManufacturingBusiness + geo coords implemented at homepage level. City-level LocalBusiness schemas not built |
| `missing_content_briefs.md` | ❌ **Not Applied** | — | Content gap briefs identified but content not written |
| `placeholder_inventory.md` | ❌ **Not Applied** | — | Placeholder items documented but not replaced |
| `url_normalization_map.md` | ⚠️ **40% Applied** | `next-sitemap.config.js` | Trailing slash enforced. Old URL redirects not implemented (no `next.config.ts` redirects array) |

---

## DOCUMENT USAGE SUMMARY TABLE

| Category | Total Docs | Used | Partially Used | Unused |
|----------|-----------|------|----------------|--------|
| Architecture | 2 | 0 | 1 | 1 |
| SEO | 2 | 0 | 2 | 0 |
| Content — Root | 3 | 0 | 0 | 3 |
| Content — Homepage | 1 | 0 | 1 | 0 |
| Content — Hubs | 7 | 0 | 1 | 6 |
| Content — Products (Hub) | 4 | 0 | 4 | 0 |
| Content — Cylinders | 4 | 0 | 0 | 4 |
| Content — Manifolds | 5 | 0 | 0 | 5 |
| Content — Power Packs | 3 | 0 | 0 | 3 |
| Content — Systems | 5 | 0 | 0 | 5 |
| Content — Industries | 8 | 0 | 0 | 8 |
| Content — Applications | 8 | 0 | 0 | 8 |
| Content — Locations | 10 | 0 | 0 | 10 |
| Content — Resources | 2 | 0 | 0 | 2 |
| Content — Services | 6 | 0 | 0 | 6 |
| Content — About | 4 | 0 | 0 | 4 |
| Content — Blogs | 0 | — | — | — (empty) |
| Strategy | 4 | 0 | 4 | 0 |
| UI | 3 | 0 | 3 | 0 |
| Development | 1 | 0 | 1 | 0 |
| Implementation | 7 | 0 | 2 | 5 |
| **TOTALS** | **89** | **0** | **19** | **70** |

---

> **⚠️ CRITICAL FINDING:** 70 of 89 documents (78.6%) are completely unused. The documentation library is far ahead of the implementation. This is the correct pre-scale position — the documentation exists and is ready to drive Phase 5–10 development.

---
*Generated: 2026-06-09 | Honeywell Hydraulics Pre-Scale Audit*
