# SEO Architecture — Honeywell Hydraulics

**Consolidated By:** Senior Technical SEO Architect
**Date:** June 7, 2026
**Sources:** `honeywell-technical-seo-spec.md`, `page-inventory.md`, `honeywell-hydraulics-seo-strategy.md`, `url_normalization_map.md`

---

## 1. Metadata Templates

### Homepage
- **Title:** `Hydraulic Cylinder & Power Pack Manufacturer in Ahmedabad | Honeywell Hydraulics`
- **Description:** `Leading manufacturer of custom hydraulic cylinders, power packs & hydraulic systems in Ahmedabad, Gujarat. Serving 20+ industries since 2018. Request a free quote today.`
- **Canonical:** `https://www.honeywellhydraulics.com/`
- **OG Type:** `website`
- **Robots:** `index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1`

### Product Category (Pillar) Pages
- **Title:** `{Product Category} — Custom Manufacturer in {City} | Honeywell`
- **Description:** `Custom {product category} manufacturer in {city}. {Types available}. Factory-direct pricing, {delivery time} delivery. {CTA}.`
- **Canonical:** `https://www.honeywellhydraulics.com/{product-category}/`
- **OG Type:** `website`

### Product Pages
- **Title:** `{Product Name} | Manufacturer in {Geo} | Honeywell`
- **Description:** `{Product name} manufacturer in {geo}. {Key spec}. Custom bore & stroke sizes available. Pressure-tested. {CTA}.`
- **Canonical:** `https://www.honeywellhydraulics.com/{category}/{product-slug}/`
- **OG Type:** `product`

### Service Pages
- **Title:** `{Service Name} | Honeywell Hydraulics {Geo}`
- **Description:** `{Service description}. {Key benefit}. Trusted by {number}+ clients. {CTA}.`
- **Canonical:** `https://www.honeywellhydraulics.com/services/{service-slug}/`
- **OG Type:** `website`

### Industry Pages
- **Title:** `Hydraulic Solutions for {Industry} | {Geo} Manufacturer`
- **Description:** `Hydraulic {products} for {industry} industry. {Specific benefit}. Trusted by {number}+ {industry} companies across {geo}. {CTA}.`
- **Canonical:** `https://www.honeywellhydraulics.com/industries/{industry-slug}/`
- **OG Type:** `website`

### Application Pages
- **Title:** `{Product} for {Application} | Manufacturer {Geo}`
- **Description:** `{Product} for {application}. {Key specification}. Custom manufacturing available. {CTA}.`
- **Canonical:** `https://www.honeywellhydraulics.com/applications/{application-slug}/`
- **OG Type:** `website`

### Location Pages
- **Title:** `Hydraulic Cylinder Manufacturer in {City} | Honeywell Hydraulics`
- **Description:** `Hydraulic cylinder manufacturer serving {city}. {Products}. {Delivery promise}. {Number}+ clients in {city/region}. {CTA}.`
- **Canonical:** `https://www.honeywellhydraulics.com/locations/{city-slug}/`
- **OG Type:** `website`

### About Pages
- **Title:** `About Honeywell Hydraulics | Hydraulic Manufacturer Since 2018`
- **Description:** `Learn about Honeywell Hydraulics, a precision hydraulic cylinder & power pack manufacturer in Ahmedabad, Gujarat. ISO quality standards. {CTA}.`
- **Canonical:** `https://www.honeywellhydraulics.com/about/`
- **OG Type:** `website`

### Blog Posts
- **Title:** `{Article Title} | Honeywell Hydraulics`
- **Description:** `{Article hook — question or value statement}. {What this guide covers}. By Honeywell Hydraulics.`
- **Canonical:** `https://www.honeywellhydraulics.com/blog/{post-slug}/`
- **OG Type:** `article`

### Resources
- **Title:** `{Resource Name} | Honeywell Hydraulics`
- **Description:** `{Resource description}. Free access for engineers and procurement teams.`
- **Canonical:** `https://www.honeywellhydraulics.com/resources/{resource-slug}/`
- **OG Type:** `website`

---

## 2. Schema Architecture (Final)

### Homepage
```
@graph: [Organization, ManufacturingBusiness, WebSite (SearchAction), WebPage, FAQPage]
```

### Product Category (Pillar) Pages
```
@graph: [CollectionPage, BreadcrumbList, ItemList]
```

### Product Pages
```
@graph: [Product (Offer, Brand, Manufacturer, additionalProperty), BreadcrumbList, FAQPage]
```

### Service Pages
```
@graph: [Service, BreadcrumbList]
```

### Industry Pages
```
@graph: [WebPage, BreadcrumbList, FAQPage]
```

### Application Pages
```
@graph: [WebPage, BreadcrumbList]
```

### Location Pages (HQ — Ahmedabad)
```
@graph: [ManufacturingBusiness (geo, openingHours, aggregateRating), WebPage, BreadcrumbList, FAQPage]
```

### Location Pages (Service Area — Surat, Rajkot, etc.)
```
@graph: [ManufacturingBusiness (areaServed: target city, address: HQ), WebPage, BreadcrumbList, FAQPage]
```

### Blog Articles
```
@graph: [Article (author: Person, publisher: Organization), BreadcrumbList]
```

### Contact Page
```
@graph: [ContactPage, ManufacturingBusiness (ContactPoint), BreadcrumbList]
```

### Case Studies
```
@graph: [Article, BreadcrumbList]
```

---

## 3. Internal Linking Blueprint

### Product Pages → Must Link To:
- ↑ Product Category (Pillar)
- ↔ 3–4 Related Products (within same pillar)
- → Relevant Application Pages
- → Relevant Industry Pages
- → `/request-quote/`

### Service Pages → Must Link To:
- → Related Products
- → Related Industries
- → Related Locations
- → `/request-quote/`

### Industry Pages → Must Link To:
- → Products used in this industry
- → Applications relevant to industry
- → Related Services
- → `/request-quote/`

### Location Pages → Must Link To:
- → All product pillar pages
- → Industries prevalent in that region
- → Related Services
- → `/request-quote/`

### Homepage → Must Distribute Authority To:
- → All 4 product pillar pages (Cylinders, Power Packs, Manifolds, Systems)
- → Top 3 industries (Injection Moulding, Automotive, Steel)
- → Top 3 locations (Ahmedabad, Gujarat, India)
- → `/request-quote/`
- → `/about/`

### Blog Articles → Must Link To:
- → ≥ 2 relevant product pages (contextual anchors)
- → Related blog articles
- → `/request-quote/`

---

## 4. Image SEO Standards

### Naming Convention
```
Format:   {product-type}-{descriptive-keyword}-{variant}.webp
Examples: double-acting-hydraulic-cylinder-ahmedabad.webp
          3-phase-hydraulic-power-pack-manufacturer.webp
Rules:    Lowercase, hyphens, descriptive, no IMG_0234.jpg
```

### Alt Text Rules
```
Format:   {Descriptive text of what's in the image} - {Context/brand}
Length:   50–125 characters
Rules:    ✅ Describe what the image SHOWS
          ✅ Include keyword naturally
          ❌ Never start with "Image of" or "Picture of"
          ❌ Never stuff keywords
          ❌ Never leave empty
```

### Compression & Format Strategy
```
Pipeline: Original → Resize (400w, 800w, 1200w) → Convert (AVIF, WebP, JPEG) → Compress
Targets:  400w < 50KB, 800w < 100KB, 1200w < 150KB
Output:   9 files per image (3 sizes × 3 formats)
```

### OG Images
```
Format:   JPEG (not WebP — social platforms need JPEG/PNG)
Size:     1200 × 630 pixels
Weight:   < 300KB
Content:  Brand logo + page title text overlay + product image
Location: /images/og/{page-slug}-og.jpg
Rule:     Every page gets a UNIQUE OG image
```

### Hero Images
```
- Preloaded with <link rel="preload"> and fetchpriority="high"
- decoding="sync" (renders with first paint)
- NO loading="lazy" on hero images
- Served as WebP, compressed < 100KB
```

---

## 5. Sitemap Strategy

### Index Structure
```
/sitemap.xml (index)
├── /sitemap-pages.xml      (core, industry, application, location pages)
├── /sitemap-products.xml   (product pillars + individual products)
├── /sitemap-blog.xml       (blog articles + case studies)
└── /sitemap-images.xml     (product images, factory photos)
```

### Priority Rules
| Page Type | Priority | Changefreq |
|---|---|---|
| Homepage | 1.0 | weekly |
| Product Pillars | 0.9 | weekly |
| Request Quote | 0.9 | monthly |
| Location Pages (key) | 0.9 | monthly |
| Product Pages | 0.8 | monthly |
| Industry Pages | 0.8 | monthly |
| Application Pages | 0.8 | monthly |
| Blog Articles | 0.7 | monthly |
| About / Contact | 0.7 | monthly |
| Case Studies | 0.6 | monthly |
| FAQ / Downloads | 0.6 | monthly |
| Gallery | 0.4 | monthly |
| Legal Pages | 0.2 | yearly |
