# Required Images Master List

**Last Updated:** 2026-06-10 (Phase 4.5A.4B Audit Fixes)

---

## Existing Images (Confirmed in /public)

| Page / Component | Final Image Filename | SEO Alt Text | Format | Status |
| :--- | :--- | :--- | :--- | :--- |
| Hero Section (Homepage) | `/images/hero/hydraulic-cylinder-manufacturing-ahmedabad.png` | Hydraulic cylinder manufacturing facility in Ahmedabad — Honeywell Hydraulics | PNG | ✅ Exists |

> **M3 — CONVERSION NOTE:** `/images/hero/hydraulic-cylinder-manufacturing-ahmedabad.png` must be converted to `.webp` during Image Optimization Phase. Final filename: `hydraulic-cylinder-manufacturing-ahmedabad.webp`. Target: < 100KB. Hero images must use WebP per SEO_ARCHITECTURE.md.

---

## Missing Images — Required Before Launch

### Priority: HIGH

| Page / Component | Final Image Filename | SEO Alt Text | Used In | Status |
| :--- | :--- | :--- | :--- | :--- |
| Root Layout OG | `/images/og/default-og.jpg` | Honeywell Hydraulics — Hydraulic Cylinder & Power Pack Manufacturer in Ahmedabad | `layout.tsx` `SEO_DEFAULTS.ogImage` | 🔴 Missing |
| Products Hub — Cylinders Card | `/images/products/hydraulic-cylinders-hub.webp` | Heavy-duty hydraulic cylinders for industrial applications — Honeywell Hydraulics Ahmedabad | `app/(site)/products/page.tsx` `ProductCard` | 🔴 Missing |
| Products Hub — Power Packs Card | `/images/products/hydraulic-power-packs-hub.webp` | Industrial 3-phase hydraulic power pack unit — Honeywell Hydraulics Gujarat | `app/(site)/products/page.tsx` `ProductCard` | 🔴 Missing |
| Cylinders Hub — Schema & Metadata OG | `/images/products/hydraulic-cylinders-ahmedabad.webp` | Industrial hydraulic cylinder manufacturer Ahmedabad — Honeywell Hydraulics | `app/(site)/products/hydraulic-cylinders/page.tsx` schema + metadata | 🔴 Missing |
| Power Packs Hub — Schema & Metadata OG | `/images/products/hydraulic-power-pack-manufacturer.webp` | Hydraulic power pack manufacturer Gujarat — Honeywell Hydraulics | `app/(site)/products/hydraulic-power-packs/page.tsx` schema + metadata | 🔴 Missing |
| Logo (Footer & Header) | `/logo.png` | Honeywell Hydraulics Logo | `components/Footer.tsx` | ❓ Needs confirmation in /public |

### Priority: MEDIUM

| Page / Component | Final Image Filename | SEO Alt Text | Used In | Status |
| :--- | :--- | :--- | :--- | :--- |
| Request Quote — Hero | `/images/request-quote/quote-hero.webp` | Honeywell Hydraulics factory floor with precision CNC machinery | `app/(site)/request-quote/page.tsx` | 🔴 Missing |
| Contact — Map Placeholder | `/images/contact/kathwada-gidc-map-placeholder.webp` | Honeywell Hydraulics factory location — Kathwada GIDC Ahmedabad map | `app/(site)/contact-us/page.tsx` | 🔴 Missing |
| Infra Gallery — CNC | `/images/infrastructure/cnc-machining-centre.webp` | CNC turning centre for hydraulic cylinder barrel machining | `app/(site)/infrastructure/page.tsx` | 🔴 Missing |
| Infra Gallery — Test Rig | `/images/infrastructure/hydrostatic-test-rig.webp` | Hydrostatic pressure testing rig for hydraulic cylinders | `app/(site)/infrastructure/page.tsx` | 🔴 Missing |
| Infra Gallery — Assembly | `/images/infrastructure/assembly-bay.webp` | Hydraulic power pack assembly bay | `app/(site)/infrastructure/page.tsx` | 🔴 Missing |
| Infra Gallery — Quality | `/images/infrastructure/quality-inspection.webp` | Quality inspection equipment — CMM and bore gauges | `app/(site)/infrastructure/page.tsx` | 🔴 Missing |
| Mfg Gallery — CNC | `/images/manufacturing/cnc-turning-centre.webp` | CNC turning centre for piston rod machining | `app/(site)/manufacturing-facility/page.tsx` | 🔴 Missing |
| Mfg Gallery — Welding | `/images/manufacturing/welding-bay.webp` | Heavy-duty welding bay for cylinder barrel construction | `app/(site)/manufacturing-facility/page.tsx` | 🔴 Missing |
| Mfg Gallery — Assembly | `/images/manufacturing/assembly-area.webp` | Hydraulic power pack assembly area | `app/(site)/manufacturing-facility/page.tsx` | 🔴 Missing |
| Mfg Gallery — Test Rig | `/images/manufacturing/test-rig.webp` | Hydrostatic pressure test rig | `app/(site)/manufacturing-facility/page.tsx` | 🔴 Missing |
| Quality — Test Rig | `/images/quality/pressure-test-rig.webp` | Hydraulic cylinder pressure test rig — 700 Bar capacity | `app/(site)/quality/page.tsx` | 🔴 Missing |

### Priority: LOW

| Page / Component | Final Image Filename | SEO Alt Text | Used In | Status |
| :--- | :--- | :--- | :--- | :--- |
| Products Hub — EEAT Reviewer | `/images/team/placeholder-headshot.jpg` | Reviewer Name — Honeywell Hydraulics Engineering Team | `app/(site)/products/page.tsx` (currently hidden) | ⏸ Deferred (block hidden until real data available) |

---

## Naming Convention Rules (from SEO_ARCHITECTURE.md)
- Format: `{product-type}-{descriptive-keyword}-{variant}.webp`
- All lowercase, hyphens only, no underscores
- OG Images: JPEG format, 1200×630px, < 300KB
- Product images: WebP, 3 breakpoints (400w, 800w, 1200w), < 100KB each
- Hero images: WebP, fetchpriority="high", priority prop, no loading="lazy"

---

## Image Optimization Phase Checklist
- [ ] Convert hero PNG → WebP
- [ ] Create/source all HIGH priority product images
- [ ] Create all OG images (JPEG 1200×630)
- [ ] Confirm /logo.png exists in /public
- [ ] Run next/image optimization pass
- [ ] Update status column above to ✅ Exists for each confirmed image

