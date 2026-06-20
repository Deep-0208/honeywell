# 🔗 INTERNAL LINK AUDIT
**Audit Date:** 2026-06-09  
**Auditor:** Principal Technical SEO Architect

---

## SITE ARCHITECTURE OVERVIEW

```
Homepage (/)
├── /products/hydraulic-cylinders/     ← Built ✅
│   ├── /hydraulic-cylinders/double-acting/     ← NOT BUILT ❌
│   ├── /hydraulic-cylinders/single-acting/     ← NOT BUILT ❌
│   ├── /hydraulic-cylinders/tie-rod/           ← NOT BUILT ❌
│   ├── /hydraulic-cylinders/telescopic/        ← NOT BUILT ❌
│   ├── /hydraulic-cylinders/welded/            ← NOT BUILT ❌
│   └── /hydraulic-cylinders/custom/            ← NOT BUILT ❌
├── /products/hydraulic-power-packs/   ← Built ✅
│   ├── /hydraulic-power-packs/3-phase/         ← NOT BUILT ❌
│   ├── /hydraulic-power-packs/high-low/        ← NOT BUILT ❌
│   └── /hydraulic-power-packs/compact/         ← NOT BUILT ❌
├── /products/manifold-blocks/         ← Built ✅
│   ├── /manifold-blocks/cetop/                 ← NOT BUILT ❌
│   ├── /manifold-blocks/custom/                ← NOT BUILT ❌
│   └── /manifold-blocks/multi-station/         ← NOT BUILT ❌
├── /products/hydraulic-systems/       ← Built ✅
│   ├── /hydraulic-systems/industrial/          ← NOT BUILT ❌
│   └── /hydraulic-systems/high-pressure/       ← NOT BUILT ❌
├── /industries/                       ← NOT BUILT ❌
│   ├── /industries/injection-moulding/         ← NOT BUILT ❌
│   ├── /industries/automotive/                 ← NOT BUILT ❌
│   └── ...8 more                               ← NOT BUILT ❌
├── /applications/                     ← NOT BUILT ❌
│   ├── /applications/press-machines/           ← NOT BUILT ❌
│   └── ...6 more                               ← NOT BUILT ❌
├── /locations/                        ← NOT BUILT ❌
│   ├── /locations/ahmedabad/                   ← NOT BUILT ❌
│   ├── /locations/gujarat/                     ← NOT BUILT ❌
│   └── ...10 more                              ← NOT BUILT ❌
├── /about/                            ← NOT BUILT ❌
├── /contact/                          ← NOT BUILT ❌
├── /request-quote/                    ← NOT BUILT ❌
└── /blog/                             ← NOT BUILT ❌
```

---

## HOMEPAGE INTERNAL LINK INVENTORY

| Section | Links Present | Destination | Status |
|---------|--------------|-------------|--------|
| Header Navigation | ✅ | Products, Industries, Applications, etc. | Most point to unbuilt pages |
| Hero Section CTAs | ✅ | `/request-quote/`, `/products/` | `/request-quote/` NOT BUILT; `/products/` NOT BUILT |
| Trust Strip | ❌ No links | — | — |
| Products Section | ✅ 4 cards | Each product hub | All 4 built ✅ |
| Why Choose Us | ❌ No links | — | — |
| Industries Section | ✅ 6 cards (implied) | `/industries/[slug]/` | Destination pages NOT BUILT |
| Applications Section | ✅ 6 cards (implied) | `/applications/[slug]/` | Destination pages NOT BUILT |
| Process Section | ❌ No links | — | — |
| Testimonials | ❌ No links | — | — |
| Locations Section | ✅ 6 cards | `/locations/[city]/` | Destination pages NOT BUILT |
| FAQ Section | ❌ No links | — | Opportunity: link to product pages within answer text |
| CTA Section | ✅ | `/request-quote/` | NOT BUILT |
| Footer | ✅ Multiple | Various pages | Most point to unbuilt pages |

**Homepage outbound links: ~22 total**  
**Links pointing to BUILT pages: ~4 (18%)**  
**Links pointing to UNBUILT pages: ~18 (82%)**

---

## PRODUCT HUB INTERNAL LINK ANALYSIS

### Hydraulic Cylinders Hub

| Section | Links Out | Destination | Built? |
|---------|-----------|-------------|--------|
| Hero CTAs | 2 | `/request-quote/`, `tel:+919924343873` | ❌ / ✅ |
| Types Grid | 6 (implied) | Double Acting, Single Acting, Tie Rod, Telescopic, Welded, Custom | ❌ None built |
| Applications | 0 explicit | — | No outbound links to application pages |
| Industries | 0 explicit | — | No outbound links to industry pages |
| CTA | 2 | `/request-quote/`, `tel:+919924343873` | ❌ / ✅ |
| Schema hasPart | 6 | Individual cylinder pages | ❌ All broken |

**❌ CRITICAL:** CylinderTypesGrid component needs to link to individual product pages. Currently cards likely have no href or placeholder hrefs.

---

### Power Packs Hub

| Section | Links Out | Destination | Built? |
|---------|-----------|-------------|--------|
| Hero CTAs | 2 | `/request-quote/`, `tel:` | ❌ / ✅ |
| Types Grid | 5 (implied) | 3-phase, high-low, compact, mobile, custom | ❌ None built |
| Schema hasPart | 5 | Individual pack pages | ❌ All broken |

---

### Manifold Blocks Hub

| Section | Links Out | Destination | Built? |
|---------|-----------|-------------|--------|
| Hero CTAs | 2 | `/request-quote/`, `tel:` | ❌ / ✅ |
| Types Grid | 4 (implied) | CETOP, Modular, Custom, Multi-Station | ❌ None built |
| Schema hasPart | 4 | Individual manifold pages | ❌ All broken |

---

### Hydraulic Systems Hub

| Section | Links Out | Destination | Built? |
|---------|-----------|-------------|--------|
| Hero CTAs | 2 | `/request-quote/`, `tel:` | ❌ / ✅ |
| Types Grid | 4 (implied) | Industrial, Automation, High-Pressure, Mobile | ❌ None built |
| Schema hasPart | 4 | Individual system pages | ❌ All broken |

---

## SILO STRUCTURE ANALYSIS

### Current State (Built)
```
Silo Depth:    2 levels (Homepage → Hub)
Silo Width:    4 silos
Cross-links:   NONE between product hubs
Missing:       Level 3 (individual product pages)
Missing:       Industry ↔ Product cross-links
Missing:       Application ↔ Product cross-links  
Missing:       Location ↔ Product cross-links
```

### Target State (Full Scale)
```
Silo Depth:    4 levels (Homepage → Hub → Product → Variant)
Silo Width:    4 products + 11 industries + 8 applications + 12 locations
Cross-links:   Each industry links to 2-4 relevant products
               Each application links to 2-3 products + 1-2 industries
               Each location links to 4 products + 3-4 industries
Internal Links per page target: 8-15 contextual links
```

---

## AUTHORITY FLOW MAP

```
Homepage (DA: 100%)
    ↓ 100% passed to:
    ├── /products/hydraulic-cylinders/ (HighPriority) ← 1.0 flow
    ├── /products/hydraulic-power-packs/              ← 1.0 flow  
    ├── /products/manifold-blocks/                    ← 1.0 flow
    └── /products/hydraulic-systems/                  ← 1.0 flow

    ↓ Intended but broken (pages not built):
    ├── /industries/* — ❌ Dead ends, no pages to receive authority
    ├── /applications/* — ❌ Dead ends
    └── /locations/* — ❌ Dead ends
```

**Authority Waste:** ~75% of homepage outbound link equity flows to non-existent pages. Link building to the homepage won't cascade correctly until Phase 5-8 pages are built.

---

## INTERNAL LINKING GAPS — PRIORITY LIST

| Priority | Gap | Fix |
|----------|-----|-----|
| 🔴 CRITICAL | Types Grid cards in all 4 hubs have no working links | Add hrefs to individual product pages as they are built |
| 🔴 CRITICAL | `/request-quote/` linked everywhere but doesn't exist | Build request-quote page immediately |
| 🔴 CRITICAL | 18 homepage links are dead ends | Build linked pages (Phase 5-8) |
| 🟠 HIGH | No cross-linking between product hubs | Add "Related Products" sections |
| 🟠 HIGH | Schema hasPart arrays reference 404 pages | Remove until pages built |
| 🟠 HIGH | No breadcrumb component linked to `/products/` (unbuilt) | Build /products/ index page |
| 🟡 MEDIUM | FAQ sections don't link to relevant product pages | Add contextual links in FAQ answers |
| 🟡 MEDIUM | Industries section on homepage doesn't link to any built industry page | Either build industry pages or modify section to link to relevant product pages |
| 🟡 MEDIUM | No footer "Products" column links match built URLs | Update footer nav |
| 🟢 LOW | WhyChooseUs section has no links | Add CTA link to relevant certifications or about page |

---

## CROSS-LINKING MATRIX (REQUIRED FOR PHASE 5-8)

When building Phase 5-8 pages, implement this cross-linking pattern:

| From Page Type | Must Link To |
|---------------|--------------|
| Product Hub | 3+ applications, 3+ industries, 2+ locations |
| Individual Product | Parent hub, 2+ applications, 1+ location |
| Industry Page | 3+ product pages, 2+ applications |
| Application Page | 3+ products, 1+ industry, 1+ location |
| Location Page | 4 product hubs, top 3 industries for that region |
| Blog Post | 1+ product page, 1+ application/industry |

---

## RECOMMENDATIONS

1. **Immediate:** Build `/request-quote/` page — it is the most-linked unbuilt page (appears 5+ times across site)
2. **Immediate:** Fix next-sitemap.config.js path prefix issue
3. **Phase 5 Start:** Build individual cylinder product pages FIRST (highest SEO value, most links pointing to them from schema)
4. **All Phases:** Every new page must have minimum 8 outbound contextual links per the cross-linking matrix above
5. **Footer:** Update footer navigation to only show links to built pages (currently shows dead links)

---
*Generated: 2026-06-09 | Honeywell Hydraulics Pre-Scale Audit*
