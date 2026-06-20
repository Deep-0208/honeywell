# 🧩 COMPONENT AUDIT
**Audit Date:** 2026-06-09  
**Auditor:** Principal Technical SEO Architect

---

## COMPONENT INVENTORY

### Global Components (`components/`)

| Component | File | Size | Used By | Status |
|-----------|------|------|---------|--------|
| `Header` | `Header.tsx` | 10.1 KB | `app/(site)/layout.tsx` | ✅ Active |
| `Footer` | `Footer.tsx` | 17.5 KB | `app/(site)/layout.tsx` | ✅ Active |
| `MegaMenu` | `MegaMenu.tsx` | 5.8 KB | `Header.tsx` | ✅ Active |
| `MobileMenu` | `MobileMenu.tsx` | 9.2 KB | `Header.tsx` | ✅ Active |

---

### Homepage Components (`components/homepage/`)

| Component | File | Size | Used By | Status | Notes |
|-----------|------|------|---------|--------|-------|
| `HeroSection` | `HeroSection.tsx` | 11.7 KB | `app/(site)/page.tsx` | ✅ Active | Primary LCP element |
| `TrustStrip` | `TrustStrip.tsx` | 1.5 KB | `app/(site)/page.tsx` | ✅ Active | — |
| `ProductsSection` | `ProductsSection.tsx` | 2.3 KB | `app/(site)/page.tsx` | ✅ Active | Uses ProductCard |
| `WhyChooseUsSection` | `WhyChooseUsSection.tsx` | 2.7 KB | `app/(site)/page.tsx` | ✅ Active | — |
| `IndustriesSection` | `IndustriesSection.tsx` | 2.5 KB | `app/(site)/page.tsx` | ✅ Active | Links to unbuilt pages |
| `ApplicationsSection` | `ApplicationsSection.tsx` | 2.1 KB | `app/(site)/page.tsx` | ✅ Active | Links to unbuilt pages |
| `ProcessSection` | `ProcessSection.tsx` | 3.0 KB | `app/(site)/page.tsx` | ✅ Active | — |
| `TestimonialsSection` | `TestimonialsSection.tsx` | 1.6 KB | `app/(site)/page.tsx` | ✅ Active | Uses TestimonialCard |
| `LocationsSection` | `LocationsSection.tsx` | 2.8 KB | `app/(site)/page.tsx` | ✅ Active | Links to unbuilt pages |
| `FAQSection` | `FAQSection.tsx` | 1.3 KB | `app/(site)/page.tsx` | ✅ Active | Uses FAQAccordion |
| `HomepageCTASection` | `HomepageCTASection.tsx` | 742 B | `app/(site)/page.tsx` | ✅ Active | — |

**Homepage Components: 11/11 active (100%)**

---

### Product Components — Hydraulic Cylinders (`components/products/hydraulic-cylinders/`)

| Component | File | Size | Used By | Status |
|-----------|------|------|---------|--------|
| `HydraulicCylinderHero` | `HydraulicCylinderHero.tsx` | 5.8 KB | Cylinders hub page | ✅ Active |
| `CylinderOverview` | `CylinderOverview.tsx` | 2.5 KB | Cylinders hub page | ✅ Active |
| `CylinderTypesGrid` | `CylinderTypesGrid.tsx` | 3.2 KB | Cylinders hub page | ✅ Active |
| `CylinderApplications` | `CylinderApplications.tsx` | 2.1 KB | Cylinders hub page | ✅ Active |
| `CylinderIndustries` | `CylinderIndustries.tsx` | 2.9 KB | Cylinders hub page | ✅ Active |
| `WhyChooseCylinders` | `WhyChooseCylinders.tsx` | 3.0 KB | Cylinders hub page | ✅ Active |
| `CylinderTechnicalSpecs` | `CylinderTechnicalSpecs.tsx` | 3.1 KB | Cylinders hub page | ✅ Active |
| `CylinderManufacturingProcess` | `CylinderManufacturingProcess.tsx` | 3.4 KB | Cylinders hub page | ✅ Active |
| `CylinderFAQs` | `CylinderFAQs.tsx` | 3.1 KB | Cylinders hub page | ✅ Active |

**Cylinders Components: 9/9 active (100%)**

---

### Product Components — Manifold Blocks (`components/products/manifold-blocks/`)

| Component | File | Size | Used By | Status |
|-----------|------|------|---------|--------|
| `ManifoldBlocksHero` | `ManifoldBlocksHero.tsx` | 4.0 KB | Manifolds hub page | ✅ Active |
| `ManifoldOverview` | `ManifoldOverview.tsx` | 1.9 KB | Manifolds hub page | ✅ Active |
| `ManifoldTypesGrid` | `ManifoldTypesGrid.tsx` | 2.6 KB | Manifolds hub page | ✅ Active |
| `ManifoldApplications` | `ManifoldApplications.tsx` | 2.3 KB | Manifolds hub page | ✅ Active |
| `ManifoldIndustries` | `ManifoldIndustries.tsx` | 2.6 KB | Manifolds hub page | ✅ Active |
| `WhyChooseManifolds` | `WhyChooseManifolds.tsx` | 2.9 KB | Manifolds hub page | ✅ Active |
| `ManifoldTechnicalSpecs` | `ManifoldTechnicalSpecs.tsx` | 2.7 KB | Manifolds hub page | ✅ Active |
| `ManifoldManufacturingProcess` | `ManifoldManufacturingProcess.tsx` | 3.3 KB | Manifolds hub page | ✅ Active |
| `ManifoldFAQs` | `ManifoldFAQs.tsx` | 3.0 KB | Manifolds hub page | ✅ Active |

**Manifolds Components: 9/9 active (100%)**

---

### Product Components — Hydraulic Power Packs (`components/products/hydraulic-power-packs/`)

| Component | File | Size | Used By | Status |
|-----------|------|------|---------|--------|
| `HydraulicPowerPackHero` | `HydraulicPowerPackHero.tsx` | 4.1 KB | Power Packs hub page | ✅ Active |
| `PowerPackOverview` | `PowerPackOverview.tsx` | 2.0 KB | Power Packs hub page | ✅ Active |
| `PowerPackTypesGrid` | `PowerPackTypesGrid.tsx` | 2.9 KB | Power Packs hub page | ✅ Active |
| `PowerPackApplications` | `PowerPackApplications.tsx` | 2.7 KB | Power Packs hub page | ✅ Active |
| `PowerPackIndustries` | `PowerPackIndustries.tsx` | 2.7 KB | Power Packs hub page | ✅ Active |
| `WhyChoosePowerPacks` | `WhyChoosePowerPacks.tsx` | 3.0 KB | Power Packs hub page | ✅ Active |
| `PowerPackTechnicalSpecs` | `PowerPackTechnicalSpecs.tsx` | 2.8 KB | Power Packs hub page | ✅ Active |
| `PowerPackManufacturingProcess` | `PowerPackManufacturingProcess.tsx` | 3.6 KB | Power Packs hub page | ✅ Active |
| `PowerPackFAQs` | `PowerPackFAQs.tsx` | 3.3 KB | Power Packs hub page | ✅ Active |

**Power Packs Components: 9/9 active (100%)**

---

### Product Components — Hydraulic Systems (`components/products/hydraulic-systems/`)

| Component | File | Size | Used By | Status |
|-----------|------|------|---------|--------|
| `HydraulicSystemsHero` | `HydraulicSystemsHero.tsx` | 4.1 KB | Systems hub page | ✅ Active |
| `SystemsOverview` | `SystemsOverview.tsx` | 1.8 KB | Systems hub page | ✅ Active |
| `SystemTypesGrid` | `SystemTypesGrid.tsx` | 2.7 KB | Systems hub page | ✅ Active |
| `SystemsApplications` | `SystemsApplications.tsx` | 2.3 KB | Systems hub page | ✅ Active |
| `SystemsIndustries` | `SystemsIndustries.tsx` | 2.6 KB | Systems hub page | ✅ Active |
| `WhyChooseSystems` | `WhyChooseSystems.tsx` | 2.9 KB | Systems hub page | ✅ Active |
| `SystemsTechnicalSpecs` | `SystemsTechnicalSpecs.tsx` | 2.7 KB | Systems hub page | ✅ Active |
| `SystemsEngineeringProcess` | `SystemsEngineeringProcess.tsx` | 3.4 KB | Systems hub page | ✅ Active |
| `SystemsFAQs` | `SystemsFAQs.tsx` | 3.1 KB | Systems hub page | ✅ Active |

**Systems Components: 9/9 active (100%)**

---

### Card Components (`components/cards/`)

| Component | File | Size | Used By | Status | Notes |
|-----------|------|------|---------|--------|-------|
| `ProductCard` | `ProductCard.tsx` | 2.3 KB | `ProductsSection.tsx` | ✅ Active | Used on homepage |
| `IndustryCard` | `IndustryCard.tsx` | 1.7 KB | `IndustriesSection.tsx` | ✅ Active | Used on homepage |
| `ApplicationCard` | `ApplicationCard.tsx` | 1.7 KB | `ApplicationsSection.tsx` | ✅ Active | Used on homepage |
| `LocationCard` | `LocationCard.tsx` | 2.5 KB | `LocationsSection.tsx` | ✅ Active | Used on homepage |
| `ServiceCard` | `ServiceCard.tsx` | 1.7 KB | **Unknown** | ⚠️ Potentially Unused | No services section built yet |
| `TestimonialCard` | `TestimonialCard.tsx` | 2.0 KB | `TestimonialsSection.tsx` | ✅ Active | — |

---

### FAQ Components (`components/faq/`)

| Component | File | Size | Used By | Status |
|-----------|------|------|---------|--------|
| `FAQAccordion` | `FAQAccordion.tsx` | 1.5 KB | `FAQSection.tsx` | ✅ Active |
| `FAQItem` | `FAQItem.tsx` | 1.9 KB | `FAQAccordion.tsx` | ✅ Active |

---

### Layout Components (`components/layout/`)

| Component | File | Size | Used By | Status |
|-----------|------|------|---------|--------|
| `Breadcrumb` | `Breadcrumb.tsx` | 2.2 KB | Available — not yet used in hub pages | ⚠️ **Unused in product hubs** |
| `PageContainer` | `PageContainer.tsx` | 544 B | Unknown | ⚠️ Usage unknown |

---

### SEO Components (`components/seo/`)

| Component | File | Size | Used By | Status |
|-----------|------|------|---------|--------|
| `JsonLd` | `JsonLd.tsx` | 867 B | All 5 built pages | ✅ Active |

---

### UI Components (`components/ui/`)

| Component | File | Size | Used By | Status | Notes |
|-----------|------|------|---------|--------|-------|
| `Badge` | `Badge.tsx` | 1.1 KB | Unknown | ⚠️ Potentially Unused | No badge usage found in hub pages |
| `Button` | `Button.tsx` | 3.4 KB | Various | ✅ Active | Primary CTA button |
| `CTA` | `CTA.tsx` | 2.0 KB | All 4 product hubs | ✅ Active | Bottom CTA section |
| `Card` | `Card.tsx` | 1.7 KB | Unknown | ⚠️ Potentially Unused | Product card variants use custom styling |
| `Container` | `Container.tsx` | 653 B | Various | ✅ Active | Wrapper component |
| `EmptyState` | `EmptyState.tsx` | 1.2 KB | Unknown | ⚠️ Potentially Unused | No empty state scenarios yet |
| `Heading` | `Heading.tsx` | 1.2 KB | Various | ✅ Active | Section headings |
| `IconBox` | `IconBox.tsx` | 1.0 KB | Various | ✅ Active | USP blocks |
| `LoadingSkeleton` | `LoadingSkeleton.tsx` | 1.7 KB | Unknown | ⚠️ Potentially Unused | No dynamic data loading yet |
| `Section` | `Section.tsx` | 712 B | Various | ✅ Active | Section wrapper |

---

### Table Components (`components/tables/`)

| Component | File | Size | Used By | Status |
|-----------|------|------|---------|--------|
| `SpecTable` | `SpecTable.tsx` | 2.0 KB | Unknown | ⚠️ **Not used in any hub page despite tech specs sections** |

---

## COMPONENT HEALTH SUMMARY

| Category | Total | Active | Unused | Needs Attention |
|----------|-------|--------|--------|-----------------|
| Global (Header/Footer/Menus) | 4 | 4 | 0 | 0 |
| Homepage | 11 | 11 | 0 | 0 |
| Product — Cylinders | 9 | 9 | 0 | 0 |
| Product — Power Packs | 9 | 9 | 0 | 0 |
| Product — Manifolds | 9 | 9 | 0 | 0 |
| Product — Systems | 9 | 9 | 0 | 0 |
| Cards | 6 | 5 | 1 | ServiceCard |
| FAQ | 2 | 2 | 0 | 0 |
| Layout | 2 | 0 | 2 | Breadcrumb (needs wiring to product pages) |
| SEO | 1 | 1 | 0 | 0 |
| UI | 10 | 5 | 5 | Badge, Card, EmptyState, LoadingSkeleton |
| Tables | 1 | 0 | 1 | SpecTable (built but not connected) |
| **TOTAL** | **73** | **64** | **9** | — |

---

## CRITICAL FINDINGS

### 🔴 Breadcrumb Component Not Wired to Product Hubs
- `components/layout/Breadcrumb.tsx` exists but none of the 4 product hub pages render it
- Visual breadcrumbs (not just schema) are expected by users and search engines
- **Action:** Add `<Breadcrumb>` component to all 4 product hub pages above the hero section

### 🔴 SpecTable Not Connected
- `components/tables/SpecTable.tsx` exists but technical specs sections use custom JSX tables instead
- This creates inconsistency and makes data management harder at scale
- **Action:** Refactor `CylinderTechnicalSpecs`, `ManifoldTechnicalSpecs`, `PowerPackTechnicalSpecs`, `SystemsTechnicalSpecs` to use `<SpecTable>` component

### 🟠 5 Potentially Unused UI Components
- `Badge`, `Card`, `EmptyState`, `LoadingSkeleton` have no confirmed usages
- They don't cause harm but represent dead weight
- **Action:** Either use them in Phase 5+ pages or document intended use cases

### 🟠 ServiceCard with No Home
- `ServiceCard.tsx` exists but no services section or page exists yet
- **Action:** Plan the `/services/` section (docs exist in `docs/content/services/`)

### 🟡 Component Naming Pattern Inconsistency
- Some components: `HydraulicCylinderHero` vs `ManifoldBlocksHero` (naming differs)
- For Phase 5 individual product pages, establish consistent naming:
  - Pattern: `[ProductName]Hero`, `[ProductName]Specs`, `[ProductName]FAQs`

---

## COMPONENTS NEEDED FOR PHASE 5+ (Not Yet Built)

| Needed Component | For Phase | Notes |
|-----------------|-----------|-------|
| `LocalBusinessMap` | Phase 8 | Google Maps embed for location pages |
| `LocationHero` | Phase 8 | Geo-targeted hero component |
| `IndustryHero` | Phase 6 | Industry-specific hero |
| `ApplicationHero` | Phase 7 | Application-specific hero |
| `BlogCard` | Phase 10 | Blog listing card |
| `BlogLayout` | Phase 10 | Blog article layout |
| `RelatedProducts` | Phase 5+ | Cross-linking widget |
| `ProductCompare` | Phase 5+ | Side-by-side comparison table |
| `CTAFloat` | All pages | Sticky/floating CTA for mobile |
| `WhatsAppFloat` | All pages | WhatsApp CTA button |
| `SearchBox` | All pages | Site search |
| `ImageGallery` | Phase 9 | Product/factory gallery |

---
*Generated: 2026-06-09 | Honeywell Hydraulics Pre-Scale Audit*
