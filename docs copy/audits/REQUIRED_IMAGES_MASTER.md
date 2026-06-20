# 🖼️ REQUIRED IMAGES MASTER LIST
**Audit Date:** 2026-06-09  
**Auditor:** Principal Technical SEO Architect

---

## SECTION 1 — EXISTING IMAGES INVENTORY

### `/public/images/` (Website)

| Path | File | Size | Status | Usage |
|------|------|------|--------|-------|
| `/public/images/hero/` | `hydraulic-cylinder-manufacturing-ahmedabad.png` | 451 KB | ✅ Exists | Homepage hero, ManufacturingBusiness schema |
| `/public/images/og/` | `default-og.jpg` | 538 KB | ✅ Exists | Default OG image, Homepage/layout.tsx |
| `/public/` | `favicon.ico` | 25 KB | ✅ Exists | Browser favicon |
| `/public/` | `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg` | — | ⚠️ Next.js boilerplate | Should be removed/replaced |

**Total existing website images: 2 actual product images, 1 favicon, 5 boilerplate**

---

### `legacy-website/images/` (Reference Images Available)

| File | Size | Usable For | Action Needed |
|------|------|------------|---------------|
| `Double-Acting-Hydraulic-Cylinder.png` | 451 KB | Hydraulic Cylinders hub hero | ✅ Copy + convert to .webp |
| `Hydraulic-Cylinder-Clevis-Mounting.png` | 430 KB | Clevis mounting product page | ✅ Copy + convert |
| `Hydraulic-Cylinder-Trunnion-Mounting.png` | 258 KB | Trunnion mounting product page | ✅ Copy + convert |
| `Hydraulic-Cylinder-for-Press.png` | 36 KB | Press application page | ✅ Copy + convert (small, may need replacement) |
| `Hydraulic-Power-Pack-3-Phase.png` | 81 KB | 3-phase power pack page | ✅ Copy + convert |
| `Hydraulic-Power-Pack-Single-Phase.png` | 60 KB | Single phase power pack page | ✅ Copy + convert |
| `Hydraulic-Tie-Rod-Cylinder.png` | 422 KB | Tie-rod cylinder product page | ✅ Copy + convert |
| `about.png` | 354 KB | About page hero | ✅ Copy + convert |
| `hydralics-logo.png` | 17 KB | Brand logo | ⚠️ Note spelling: "Hydralics" not "Hydraulics" |
| `hydralics.png` | 434 KB | General brand image | ✅ Usable for hero |
| `long-size-logohydralics-logo.png` | 103 KB | Header/Footer logo | ✅ Copy — but check branding |
| `pro4.png` | 452 KB | Product image | ✅ Usable |
| `product01.png` | 25 KB | Product thumbnail | ⚠️ Small, may need replacement |
| `product02.png` | 35 KB | Product thumbnail | ⚠️ Small |
| `product03.png` | 47 KB | Product thumbnail | ⚠️ Small |
| `product04.png` | 36 KB | Product thumbnail | ⚠️ Small |
| `small-size-logohydralics-logo.png` | 5 KB | Mobile logo | ✅ Use |
| `testi-1.png` | 8 KB | Testimonial avatar | ⚠️ Very small |
| `testi-2.png` | 8 KB | Testimonial avatar | ⚠️ Very small |
| `testi-3.png` | 21 KB | Testimonial avatar | ⚠️ Small |

---

## SECTION 2 — MISSING IMAGES (BROKEN REFERENCES IN CODE)

### 🔴 CRITICAL — Missing OG/Product Images (Break Schema & Social)

| Reference in Code | File Needed | Priority |
|-------------------|-------------|----------|
| `/images/products/hydraulic-cylinders-ahmedabad.webp` | Product hub OG image | 🔴 CRITICAL |
| `/images/products/hydraulic-power-pack-manufacturer.webp` | Product hub OG image | 🔴 CRITICAL |
| `/images/products/custom-hydraulic-manifold-block.webp` | Product hub OG image | 🔴 CRITICAL |
| `/images/products/custom-hydraulic-systems-manufacturer.webp` | Product hub OG image | 🔴 CRITICAL |
| `/logo.png` | Brand logo (used in Organization schema) | 🔴 CRITICAL |
| `/images/factory/honeywell-hydraulics-factory.jpg` | Factory image (ManufacturingBusiness schema) | 🟠 HIGH |

---

## SECTION 3 — IMAGES REQUIRED FOR PHASE 5 (Product Pages)

### Hydraulic Cylinders — Individual Products

| Page | Image Needed | Spec | Source |
|------|-------------|------|--------|
| `/hydraulic-cylinders/double-acting/` | Double acting cylinder hero | 1920×1080 WebP | ✅ Legacy: `Double-Acting-Hydraulic-Cylinder.png` |
| `/hydraulic-cylinders/single-acting/` | Single acting cylinder hero | 1920×1080 WebP | ❌ Must create/photograph |
| `/hydraulic-cylinders/tie-rod/` | Tie rod cylinder hero | 1920×1080 WebP | ✅ Legacy: `Hydraulic-Tie-Rod-Cylinder.png` |
| `/hydraulic-cylinders/telescopic/` | Telescopic cylinder hero | 1920×1080 WebP | ❌ Must create/photograph |
| `/hydraulic-cylinders/welded/` | Welded cylinder hero | 1920×1080 WebP | ❌ Must create/photograph |
| `/hydraulic-cylinders/custom/` | Custom cylinder hero | 1920×1080 WebP | ✅ Legacy: `Hydraulic-Cylinder-Clevis-Mounting.png` (closest) |
| `/hydraulic-cylinders/flange-mounting/` | Flange mount hero | 1920×1080 WebP | ❌ Must create |
| `/hydraulic-cylinders/clevis-mounting/` | Clevis mount hero | 1920×1080 WebP | ✅ Legacy: `Hydraulic-Cylinder-Clevis-Mounting.png` |
| `/hydraulic-cylinders/trunnion-mounting/` | Trunnion mount hero | 1920×1080 WebP | ✅ Legacy: `Hydraulic-Cylinder-Trunnion-Mounting.png` |

### Hydraulic Power Packs — Individual Products

| Page | Image Needed | Spec | Source |
|------|-------------|------|--------|
| `/hydraulic-power-packs/3-phase/` | 3-phase power pack hero | 1920×1080 WebP | ✅ Legacy: `Hydraulic-Power-Pack-3-Phase.png` |
| `/hydraulic-power-packs/single-phase/` | Single phase pack hero | 1920×1080 WebP | ✅ Legacy: `Hydraulic-Power-Pack-Single-Phase.png` |
| `/hydraulic-power-packs/for-press/` | Press machine power pack | 1920×1080 WebP | ✅ Legacy: `Hydraulic-Cylinder-for-Press.png` |
| `/hydraulic-power-packs/for-lift/` | Lift power pack | 1920×1080 WebP | ❌ Must create |
| `/hydraulic-power-packs/compact/` | Compact pack hero | 1920×1080 WebP | ❌ Must create |
| `/hydraulic-power-packs/high-low/` | High-low pack hero | 1920×1080 WebP | ❌ Must create |
| `/hydraulic-power-packs/solenoid-valve/` | Solenoid valve pack | 1920×1080 WebP | ❌ Must create |

### Manifold Blocks — Individual Products

| Page | Image Needed | Source |
|------|-------------|--------|
| `/manifold-blocks/cetop/` | CETOP manifold block | ❌ Must create |
| `/manifold-blocks/modular/` | Modular manifold | ❌ Must create |
| `/manifold-blocks/custom/` | Custom manifold | ❌ Must create |
| `/manifold-blocks/multi-station/` | Multi-station manifold | ❌ Must create |
| `/manifold-blocks/06-size/` | 06-size block | ❌ Must create |
| `/manifold-blocks/10-size/` | 10-size block | ❌ Must create |

### Hydraulic Systems — Individual Products

| Page | Image Needed | Source |
|------|-------------|--------|
| `/hydraulic-systems/industrial/` | Industrial system | ✅ Legacy: `hydralics.png` |
| `/hydraulic-systems/high-pressure/` | High-pressure system | ❌ Must create |
| `/hydraulic-systems/mobile/` | Mobile system | ❌ Must create |
| `/hydraulic-systems/automation/` | Automation system | ❌ Must create |

---

## SECTION 4 — IMAGES REQUIRED FOR PHASE 6-8 (Industries, Applications, Locations)

### Industry Pages (Phase 6)
- 11 industry hero images (1920×1080 WebP) — all must be created
- 11 industry icon/thumbnail images (400×300 WebP) — all must be created

### Application Pages (Phase 7)
- 8 application hero images — several recoverable from legacy:
  - Press machines: ✅ `Hydraulic-Cylinder-for-Press.png`
  - All others: ❌ Must create

### Location Pages (Phase 8)
- 10 city/region hero images — all must be created (maps, industrial zones, GIDC visuals)

---

## SECTION 5 — BLOG & RESOURCE IMAGES (Phase 9-10)

| Type | Quantity Needed | Notes |
|------|----------------|-------|
| Blog post featured images | 25+ | One per blog article |
| Diagram images | 10+ | Technical diagrams (how hydraulics works, etc.) |
| Infographics | 5+ | Types of cylinders, mounting types, etc. |
| Gallery images | 20+ | Factory photos, product photos |
| Video thumbnails | 5+ | For `/resources/videos/` |

---

## SECTION 6 — BRAND ASSETS REQUIRED

| Asset | Status | Notes |
|-------|--------|-------|
| `logo.png` (transparent, 400×100) | ❌ Missing from `/public/` | Referenced in Organization schema |
| `logo.svg` (vector) | ❌ Missing | SEO-friendly, scalable |
| `favicon-32x32.png` | ⚠️ Only .ico present | Need PNG for modern browsers |
| `apple-touch-icon.png` (180×180) | ❌ Missing | Referenced in page-inventory checklist |
| `site.webmanifest` | ❌ Missing | PWA/Chrome requirements |
| `og-product-default.jpg` | ✅ `/images/og/default-og.jpg` | Exists |

---

## SECTION 7 — IMAGE MIGRATION PLAN (IMMEDIATE ACTIONS)

### Step 1: Convert & Copy Legacy Images (Can do TODAY)
```
legacy-website/images/Double-Acting-Hydraulic-Cylinder.png
  → website/public/images/products/double-acting-hydraulic-cylinder.webp

legacy-website/images/Hydraulic-Tie-Rod-Cylinder.png
  → website/public/images/products/tie-rod-hydraulic-cylinder.webp

legacy-website/images/Hydraulic-Power-Pack-3-Phase.png
  → website/public/images/products/3-phase-hydraulic-power-pack.webp

legacy-website/images/Hydraulic-Power-Pack-Single-Phase.png
  → website/public/images/products/single-phase-hydraulic-power-pack.webp

legacy-website/images/long-size-logohydralics-logo.png
  → website/public/logo.png  (critical for schema)
```

### Step 2: Create Required OG Images (4 files — CRITICAL)
```
website/public/images/products/hydraulic-cylinders-ahmedabad.webp  (1200×630)
website/public/images/products/hydraulic-power-pack-manufacturer.webp  (1200×630)
website/public/images/products/custom-hydraulic-manifold-block.webp  (1200×630)
website/public/images/products/custom-hydraulic-systems-manufacturer.webp  (1200×630)
```

### Step 3: Remove Boilerplate SVGs
```
/public/file.svg  → DELETE
/public/globe.svg  → DELETE  
/public/next.svg  → DELETE
/public/vercel.svg  → DELETE
/public/window.svg  → DELETE
```

---

## SUMMARY TABLE

| Category | Exist | Missing | % Ready |
|----------|-------|---------|---------|
| Critical OG/Schema Images | 1 | 6 | 14% |
| Phase 5 Product Page Heroes | 7 (legacy) | 14 | 33% |
| Phase 6 Industry Heroes | 0 | 22 | 0% |
| Phase 7 Application Heroes | 1 (legacy) | 15 | 6% |
| Phase 8 Location Heroes | 0 | 12 | 0% |
| Phase 9 Blog Images | 0 | 25+ | 0% |
| Brand Assets | 2 | 5 | 28% |
| **TOTAL** | **11** | **99+** | **10%** |

---
*Generated: 2026-06-09 | Honeywell Hydraulics Pre-Scale Audit*
