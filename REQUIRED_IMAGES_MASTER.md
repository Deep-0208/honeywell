# Master Image Requirements Tracker

> **Image Management Rule:** Never block page development because an image is missing.  
> **Workflow:** Build pages first. Add missing images here. Fulfill all images in a dedicated final phase.

---

## Image Specifications

| Type | Dimensions | Format | Max Size | Quality |
|------|------------|--------|----------|---------|
| OG / Social | 1200 × 630px | JPEG | 300KB | 85% |
| Hero Carousel | 1200 × 800px | WebP | 150KB | 85% |
| Product Card | 800 × 600px | WebP | 80KB | 80% |
| Client Logo | 240 × 120px | WebP | 20KB | 100% |
| Testimonial Avatar | 80 × 80px | WebP | 10KB | 90% |
| Facility Photo | 1200 × 800px | WebP | 200KB | 85% |
| Favicon | 32 × 32px | PNG | — | — |
| Apple Icon | 180 × 180px | PNG | — | — |

---

## Fulfilled Assets

| Asset | Path | Format | Status |
|-------|------|--------|--------|
| Company logo (long) | `/images/logos/long-size-logohydralics-logo.png` | PNG | ✅ In Place |
| Default OG image | `/images/og/default-og.jpg` | JPEG | ✅ In Place |
| Homepage OG image | `/images/og/custom-hydraulic-cylinder-manufacturer-og.jpg` | JPEG | ✅ In Place |
| Hero: custom cylinder | `/images/home/hero/custom-hydraulic-cylinder-manufacturer.webp` | WebP | ✅ In Place |
| Hero: heavy duty press | `/images/home/hero/heavy-duty-hydraulic-press-cylinder.webp` | WebP | ✅ In Place |
| Hero: telescopic | `/images/home/hero/telescopic-hydraulic-cylinder-manufacturer.webp` | WebP | ✅ In Place |
| Hero: tie-rod | `/images/home/hero/tie-rod-hydraulic-cylinder.webp` | WebP | ✅ In Place |
| Hero: multi-station HPP | `/images/home/hero/multi-station-hydraulic-power-pack.webp` | WebP | ✅ In Place |
| Hero: hand lever HPP | `/images/home/hero/hand-lever-hydraulic-power-pack-manufacturer.webp` | WebP | ✅ In Place |
| Product: Hydraulic Cylinders | `/images/products/hero/hydraulic-cylinders-ahmedabad.webp` | WebP | ✅ In Place |
| Product: Power Packs | `/images/products/hero/hydraulic-power-pack.webp` | WebP | ✅ In Place |
| Product: Manifold Blocks | `/images/products/hero/hydraulic-manifold-blocks-manufacturer.webp` | WebP | ✅ In Place |
| Product: Custom Systems | `/images/products/hero/custom-hydraulic-systems-ahmedabad.webp` | WebP | ✅ In Place |

### Client Logos (20 files — all ✅ In Place)

All files in `/images/clients/*.webp`:
`prikan-machinery-pvt-ltd.webp`, `aqseptence-group-of-india-pvt-ltd.webp`, `itl-industries.webp`, `indotech-industries.webp`, `naturage-storage-solution-pvt-ltd.webp`, `dhanwanti-engineering.webp`, `jai-industries.webp`, `sharda-industries.webp`, `j-j-industries.webp`, `spincast-solution-pvt-ltd.webp`, `asian-tubes-pvt-ltd.webp`, `ratnamani-metal-tubes.webp`, `hardik-engineering.webp`, `safari-construction-equipments-pvt-ltd.webp`, `neelam-fabricators.webp`, `optiflux-pipe-industries.webp`, `rama-cylinders-pvt-ltd.webp`, `modi-enterprise.webp`, `sushobhit-moulds.webp`, `creative-automation.webp`

---

## Pending Assets (Required)

*Add missing images here. Do NOT stop page development for these.*

| Asset Description | Route | Target Path | SEO Alt Text | Priority | Status |
|-------------------|-------|-------------|--------------|----------|--------|
| Testimonial Avatar 1 (Rajesh Desai) | Homepage | `/images/testimonials/avatar-1.webp` | Rajesh Desai, Maintenance Head, Gujarat Metal Stamping | Low | ⏳ PENDING |
| Testimonial Avatar 2 (Sandeep Sharma) | Homepage | `/images/testimonials/avatar-2.webp` | Sandeep Sharma, OEM Procurement, Apex Heavy Haulers | Low | ⏳ PENDING |
| Testimonial Avatar 3 (Amit Patel) | Homepage | `/images/testimonials/avatar-3.webp` | Amit Patel, Plant Engineering, Precision Auto Components | Low | ⏳ PENDING |
| Manufacturing Facility Overview | `/about-us/`, `/manufacturing-facility/` | `/images/facility/honeywell-manufacturing-facility-kathwada.webp` | Honeywell Hydraulics manufacturing facility at Kathwada GIDC, Ahmedabad | High | ⏳ PENDING |
| CNC Machining Center | `/manufacturing-facility/`, `/infrastructure/` | `/images/facility/cnc-machining-center-hydraulic-cylinder.webp` | CNC machining center for hydraulic cylinder manufacturing at Honeywell Hydraulics | High | ⏳ PENDING |
| Hydrostatic Test Rig | `/quality/` | `/images/facility/hydrostatic-pressure-testing-hydraulic-cylinder.webp` | Hydrostatic pressure testing equipment for hydraulic cylinders at ISO 9001:2015 certified facility | Medium | ⏳ PENDING |
| About Us / Team | `/about-us/` | `/images/about/honeywell-hydraulics-team-ahmedabad.webp` | Honeywell Hydraulics engineering team in Ahmedabad Gujarat | Medium | ⏳ PENDING |

---

## Image Processing Script

After creating raw images, run:

```bash
python process_images.py
```

This script (`/process_images.py` in project root) batch-converts images to WebP and optimizes them for production.

---

## SEO Filename Rules

- Use full descriptive names: `hydraulic-cylinder-manufacturer-ahmedabad.webp` ✅
- Never use generic names: `IMG_001.webp`, `photo.jpg`, `image-1.png` ❌
- Hyphens only, no underscores, no spaces
- Include location when relevant: `-ahmedabad`, `-gujarat`, `-india`
- Include product type: `-hydraulic-cylinder-`, `-power-pack-`
- Include manufacturer brand: `honeywell-hydraulics-`

## Alt Text Rules

- Descriptive of what's actually shown
- Include target keyword naturally
- No "Image of" or "Picture of" prefix
- Include location for facility/product images
- Example: "Custom hydraulic cylinder manufactured by Honeywell Hydraulics, Ahmedabad, Gujarat" ✅
