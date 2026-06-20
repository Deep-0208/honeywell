# 🗺️ Honeywell Hydraulics — Canonical URL Architecture & Redirect Map

**Prepared By:** Senior Technical SEO Architect
**Date:** June 6, 2026

## 1. URL Inconsistencies & Duplicate Patterns Found

During the content audit, several conflicting URL patterns were discovered across the site architecture doc, the page inventory, and the actual internal links within the Markdown files:

1.  **Product Parent Prefix:** Some links use `/products/hydraulic-cylinders/` while others use `/hydraulic-cylinders/` directly off the root.
2.  **Manifold Blocks:** Uses three different patterns: `/manifold-blocks/`, `/products/manifolds/`, and `/products/manifold-blocks/`.
3.  **Industry Slugs:** Mix of `/industries/steel-industry/` and `/industries/steel-metallurgy/`.
4.  **Application Slugs:** Mix of `/applications/press-machines/` and `/applications/hydraulic-press-machines/`.
5.  **File Extensions in URLs:** Several service pages link to `.md` files directly (e.g., `/services/hydraulic-cylinder-repair.md`).

---

## 2. FINAL CANONICAL URL ARCHITECTURE

**Core Rule:** Eliminate the `/products/` prefix. Product pillars sit at the root level to shorten the URL path and pass maximum PageRank to high-value product pages.

### Core Pages
- Homepage: `/`
- About: `/about/`
- Contact: `/contact/`
- Request Quote: `/request-quote/`

### Product Pillars & Variants
- **Cylinders Pillar:** `/hydraulic-cylinders/`
  - Variants: `/hydraulic-cylinders/double-acting/`, `/hydraulic-cylinders/single-acting/`, `/hydraulic-cylinders/welded/`, `/hydraulic-cylinders/tie-rod/`, `/hydraulic-cylinders/telescopic/`, `/hydraulic-cylinders/flange-mounting/`, `/hydraulic-cylinders/clevis-mounting/`, `/hydraulic-cylinders/trunnion-mounting/`, `/hydraulic-cylinders/square-body-jack/`, `/hydraulic-cylinders/custom/`
- **Power Packs Pillar:** `/hydraulic-power-packs/`
  - Variants: `/hydraulic-power-packs/3-phase/`, `/hydraulic-power-packs/single-phase/`, `/hydraulic-power-packs/dc-mini/`, `/hydraulic-power-packs/high-low/`, `/hydraulic-power-packs/for-press/`, `/hydraulic-power-packs/for-lift/`, `/hydraulic-power-packs/with-accumulator/`, `/hydraulic-power-packs/solenoid-valve/`, `/hydraulic-power-packs/hand-lever/`
- **Manifold Blocks Pillar:** `/manifold-blocks/`
  - Variants: `/manifold-blocks/06-size-multi-station/`, `/manifold-blocks/06-size-single-station/`, `/manifold-blocks/10-size-single-station/`, `/manifold-blocks/high-low-system/`, `/manifold-blocks/cetop/`, `/manifold-blocks/custom/`
- **Hydraulic Systems Pillar:** `/hydraulic-systems/`
  - Variants: `/hydraulic-systems/industrial/`, `/hydraulic-systems/proportional/`, `/hydraulic-systems/high-pressure/`, `/hydraulic-systems/mobile/`, `/hydraulic-systems/marine/`

### Applications
- Hub: `/applications/`
- Variants: `/applications/press-machines/`, `/applications/goods-lifts/`, `/applications/passenger-lifts/`, `/applications/car-parking-systems/`, `/applications/scissor-tables/`, `/applications/construction-equipment/`, `/applications/industrial-automation/`, `/applications/material-handling/`

### Industries
- Hub: `/industries/`
- Variants: `/industries/injection-moulding/`, `/industries/plastic-processing/`, `/industries/roto-moulding/`, `/industries/press-metal-forming/`, `/industries/steel-metallurgy/`, `/industries/printing/`, `/industries/fly-ash-brick/`, `/industries/automotive/`, `/industries/wooden-machinery/`, `/industries/agriculture/`, `/industries/construction-equipment/`, `/industries/material-handling/`, `/industries/special-purpose-machines/`

### Services
- Hub: `/services/`
- Variants: `/services/custom-hydraulic-system-design/`, `/services/hydraulic-consulting/`, `/services/hydraulic-system-retrofitting/`, `/services/hydraulic-cylinder-repair/`, `/services/oem-hydraulic-manufacturing/`, `/services/automation-integration/`

### Locations
- Hub: `/locations/`
- Variants: `/locations/gujarat/`, `/locations/india/`, `/locations/ahmedabad/`, `/locations/surat/`, `/locations/vadodara/`, `/locations/rajkot/`, `/locations/bhavnagar/`, `/locations/gandhinagar/`, `/locations/vapi/`, `/locations/jamnagar/`

### Resources & Blog
- Blog Index: `/blog/`
- Blog Posts: `/blog/{post-slug}/`
- Case Studies Hub: `/case-studies/`
- Case Study: `/case-studies/{study-slug}/`
- Technical Downloads: `/resources/downloads/`
- Gallery: `/resources/gallery/`
- FAQ: `/resources/faq/`

---

## 3. REDIRECT MAPPING TABLE (301 Redirects)

To be implemented in Nginx or `.htaccess`:

| Current/Inconsistent URL | Final Proposed URL (Canonical) | Reason for Change |
| :--- | :--- | :--- |
| `/products/hydraulic-cylinders/*` | `/hydraulic-cylinders/*` | Flatten architecture |
| `/products/hydraulic-power-packs/*` | `/hydraulic-power-packs/*` | Flatten architecture |
| `/products/hydraulic-systems/*` | `/hydraulic-systems/*` | Flatten architecture |
| `/products/manifold-blocks/*` | `/manifold-blocks/*` | Flatten architecture |
| `/products/manifolds/*` | `/manifold-blocks/*` | Standardize naming |
| `/industries/steel-industry/` | `/industries/steel-metallurgy/` | Match keyword mapping |
| `/industries/injection-moulding-industry/`| `/industries/injection-moulding/` | Remove redundant "industry" |
| `/applications/hydraulic-press-machines/` | `/applications/press-machines/` | Shorter, cleaner URL |
| `/*.md` (Any URL ending in .md) | `/*/` (Slash-terminated directory) | Clean URLs |

---

## 4. INTERNAL LINK UPDATE CHECKLIST

Before launching, perform a global search-and-replace across all `docs/content/` markdown files:

- [ ] Find: `/products/hydraulic-cylinders/` -> Replace with: `/hydraulic-cylinders/`
- [ ] Find: `/products/hydraulic-power-packs/` -> Replace with: `/hydraulic-power-packs/`
- [ ] Find: `/products/hydraulic-systems/` -> Replace with: `/hydraulic-systems/`
- [ ] Find: `/products/manifolds/` -> Replace with: `/manifold-blocks/`
- [ ] Find: `/products/manifold-blocks/` -> Replace with: `/manifold-blocks/`
- [ ] Find: `/industries/steel-industry/` -> Replace with: `/industries/steel-metallurgy/`
- [ ] Find: `/industries/injection-moulding-industry/` -> Replace with: `/industries/injection-moulding/`
- [ ] Find: `/applications/hydraulic-press-machines/` -> Replace with: `/applications/press-machines/`
- [ ] Regex Find: `\.md/?$` (in hrefs) -> Replace with: `/`
