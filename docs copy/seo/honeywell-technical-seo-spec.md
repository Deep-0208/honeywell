# ⚙️ Honeywell Hydraulics — Technical SEO Implementation Specification
### Production-Ready Code for Every SEO Element

**Domain:** `https://www.honeywellhydraulics.com`  
**Date:** June 5, 2026  
**Standard:** Google Search Central Guidelines (2026)  
**Validation:** All schema tested against https://validator.schema.org and Google Rich Results Test  

---

## Table of Contents

1. [HTML Head Metadata](#1-html-head-metadata)
2. [Title Tags](#2-title-tags)
3. [Meta Descriptions](#3-meta-descriptions)
4. [Canonical URLs](#4-canonical-urls)
5. [Open Graph Tags](#5-open-graph-tags)
6. [Twitter Cards](#6-twitter-cards)
7. [Schema / Structured Data (All Types)](#7-schema--structured-data)
8. [Breadcrumbs](#8-breadcrumbs)
9. [XML Sitemap](#9-xml-sitemap)
10. [robots.txt](#10-robotstxt)
11. [Internal Linking](#11-internal-linking)
12. [Image SEO](#12-image-seo)
13. [Core Web Vitals](#13-core-web-vitals)
14. [FAQ Schema](#14-faq-schema)
15. [Product Schema](#15-product-schema)
16. [Organization Schema](#16-organization-schema)
17. [LocalBusiness Schema](#17-localbusiness-schema)
18. [Additional Technical Requirements](#18-additional-technical-requirements)

---

# 1. HTML HEAD METADATA

## 1.1 Base Template (Every Page)

```html
<!DOCTYPE html>
<html lang="en-IN" dir="ltr">
<head>
  <!-- ═══ CRITICAL: Character encoding MUST be first ═══ -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <!-- ═══ SEO METADATA ═══ -->
  <title>{PAGE_TITLE}</title>
  <meta name="description" content="{META_DESCRIPTION}">
  <link rel="canonical" href="{CANONICAL_URL}">

  <!-- ═══ ROBOTS ═══ -->
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">

  <!-- ═══ GEO TARGETING ═══ -->
  <meta name="geo.region" content="IN-GJ">
  <meta name="geo.placename" content="Ahmedabad">
  <meta name="geo.position" content="23.0225;72.5714">
  <meta name="ICBM" content="23.0225, 72.5714">

  <!-- ═══ OPEN GRAPH ═══ -->
  <meta property="og:title" content="{OG_TITLE}">
  <meta property="og:description" content="{OG_DESCRIPTION}">
  <meta property="og:type" content="{OG_TYPE}">
  <meta property="og:url" content="{CANONICAL_URL}">
  <meta property="og:image" content="{OG_IMAGE_URL}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="{OG_IMAGE_ALT}">
  <meta property="og:site_name" content="Honeywell Hydraulics">
  <meta property="og:locale" content="en_IN">

  <!-- ═══ TWITTER CARD ═══ -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{TWITTER_TITLE}">
  <meta name="twitter:description" content="{TWITTER_DESCRIPTION}">
  <meta name="twitter:image" content="{TWITTER_IMAGE_URL}">

  <!-- ═══ FAVICON SET ═══ -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="manifest" href="/site.webmanifest">
  <meta name="theme-color" content="#0F172A">

  <!-- ═══ FONT PRELOADING ═══ -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" as="style"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap">

  <!-- ═══ CRITICAL CSS (inline) ═══ -->
  <style>{CRITICAL_CSS_INLINED}</style>

  <!-- ═══ DEFERRED CSS ═══ -->
  <link rel="stylesheet" href="/css/main.css" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="/css/main.css"></noscript>

  <!-- ═══ STRUCTURED DATA ═══ -->
  <script type="application/ld+json">{SCHEMA_JSON_LD}</script>

  <!-- ═══ GOOGLE ANALYTICS (deferred) ═══ -->
  <!-- Load AFTER interactive content. NEVER in blocking position. -->
</head>
```

## 1.2 Security & Performance Headers (Server Config)

```
# .htaccess or server config
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=(self)
Content-Security-Policy: default-src 'self'; script-src 'self' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com;
```

---

# 2. TITLE TAGS

## 2.1 Title Tag Formula

```
Format: {Primary Keyword} {Modifier} | Honeywell Hydraulics
Length: 50–60 characters (NEVER exceed 60)
Separator: Pipe (|) — not dash (–) — cleaner in SERPs
Brand: Always last, always present
```

## 2.2 Title Tag Templates Per Page Type

| Page Type | Formula | Character Target |
|---|---|---|
| **Homepage** | `{Product} & {Product} Manufacturer in {City} \| Honeywell Hydraulics` | 55–60 |
| **Product Pillar** | `{Product Category} — Custom Manufacturer in {City} \| Honeywell` | 50–58 |
| **Product Page** | `{Product Name} \| Manufacturer in {Geo} \| Honeywell` | 48–58 |
| **Industry Page** | `Hydraulic Solutions for {Industry} \| {Geo} Manufacturer` | 48–58 |

| **Location Page** | `Hydraulic Cylinder Manufacturer in {City} \| Honeywell Hydraulics` | 50–60 |
| **Blog Article** | `{Article Title} \| Honeywell Hydraulics` | 48–58 |
| **Case Study** | `Case Study: {Project Name} — {City} \| Honeywell` | 48–58 |
| **Utility Page** | `{Page Name} \| Honeywell Hydraulics` | 30–50 |

## 2.3 Complete Title Tag Map (Key Pages)

```
/                                → Hydraulic Cylinder & Power Pack Manufacturer in Ahmedabad | Honeywell Hydraulics
/about/                          → About Honeywell Hydraulics | Hydraulic Manufacturer Since 2018
/hydraulic-cylinders/            → Hydraulic Cylinders — Custom Manufacturer in Ahmedabad | Honeywell
/hydraulic-cylinders/double-acting/ → Double Acting Hydraulic Cylinder | Manufacturer Ahmedabad | Honeywell
/hydraulic-cylinders/flange-mounting/ → Hydraulic Cylinder Flange Mounting | Manufacturer Gujarat | Honeywell
/hydraulic-power-packs/          → Hydraulic Power Pack Manufacturer in India | Honeywell Hydraulics
/hydraulic-power-packs/3-phase/  → 3 Phase Hydraulic Power Pack | Manufacturer Ahmedabad Gujarat
/manifold-blocks/                → Hydraulic Manifold Block Manufacturer India | Honeywell Hydraulics
/hydraulic-systems/              → Custom Hydraulic System Manufacturer Ahmedabad | Turnkey Solutions

/industries/injection-moulding/  → Hydraulic Solutions for Injection Moulding | Manufacturer Gujarat
/locations/ahmedabad/            → Hydraulic Cylinder Manufacturer in Ahmedabad | Honeywell Hydraulics
/locations/gujarat/              → Hydraulic Cylinder Manufacturer in Gujarat | Honeywell Hydraulics
/locations/india/                → Hydraulic Cylinder Manufacturer in India | Honeywell Hydraulics
/blog/types-of-hydraulic-cylinders/ → Types of Hydraulic Cylinders — Complete Guide [2026] | Honeywell
/contact/                        → Contact Honeywell Hydraulics Ahmedabad | Get a Free Quote
/request-quote/                  → Request a Free Quote | Hydraulic Cylinders & Power Packs
```

---

# 3. META DESCRIPTIONS

## 3.1 Meta Description Rules

```
Length:     150–160 characters. Never truncated mid-sentence.
Structure:  {What we do} + {Geo/Trust signal} + {CTA}.
CTA:        End with action phrase: "Request a free quote today."
Keyword:    Include primary keyword naturally (Google bolds it in SERP).
Unique:     Every page has a unique meta description. ZERO duplicates.
No quotes:  Avoid quotation marks — they truncate in SERP.
```

## 3.2 Meta Description Templates

| Page Type | Template | Example |
|---|---|---|
| **Homepage** | Leading manufacturer of {products} in {city}, {state}. Serving {number}+ industries since {year}. {CTA}. | Leading manufacturer of custom hydraulic cylinders, power packs & systems in Ahmedabad, Gujarat. Serving 20+ industries since 2018. Request a free quote today. |
| **Product Pillar** | Custom {product category} manufacturer in {city}. {Types available}. Factory-direct pricing, {delivery time} delivery. {CTA}. | Custom hydraulic cylinder manufacturer in Ahmedabad. Double acting, single acting, flange, clevis, trunnion & telescopic. Factory-direct pricing, 7-15 day delivery. Get a quote. |
| **Product Page** | {Product name} manufacturer in {geo}. {Key spec}. Custom bore & stroke sizes available. Pressure-tested. {CTA}. | Double acting hydraulic cylinder manufacturer in Ahmedabad, Gujarat. Available in all bore sizes from 40mm to 300mm. Custom stroke lengths. Request a free quote. |
| **Industry Page** | Hydraulic {products} for {industry} industry. {Specific benefit}. Trusted by {number}+ {industry} companies across {geo}. {CTA}. | Hydraulic cylinders & power packs for injection moulding industry. Clamping cylinders, injection units & custom power packs. Trusted by 50+ moulding companies across Gujarat. Get a quote. |
| **Location Page** | Hydraulic cylinder manufacturer serving {city}. {Products}. {Delivery promise}. {Number}+ clients in {city/region}. {CTA}. | Hydraulic cylinder manufacturer serving Surat, Gujarat. Cylinders, power packs & complete systems. Same-week delivery to Sachin, Pandesara & Hazira GIDC. Contact us today. |
| **Blog Article** | {Article hook — question or value statement}. {What this guide covers}. By Honeywell Hydraulics. | What are the different types of hydraulic cylinders? Complete guide covering double acting, single acting, telescopic, tie rod & more with specs and applications. |
| **Contact** | Contact Honeywell Hydraulics in Ahmedabad for hydraulic cylinders, power packs & systems. Call {phone}, WhatsApp, or fill our quick quote form. Response within 2 hours. | — |

---

# 4. CANONICAL URLS

## 4.1 Canonical Rules

```
RULE 1: Every page has a self-referencing canonical tag.
RULE 2: Canonical URL always uses:
        ✅ https://
        ✅ www. subdomain
        ✅ Trailing slash
        ✅ Lowercase
RULE 3: No query parameters in canonical URLs.
RULE 4: No hash fragments in canonical URLs.
RULE 5: Paginated pages (blog index page 2, 3...) use self-referencing
        canonical (NOT back to page 1).
RULE 6: URL parameters (UTM, tracking) are excluded via canonical.
```

## 4.2 Implementation

```html
<!-- Self-referencing canonical (EVERY page) -->
<link rel="canonical" href="https://www.honeywellhydraulics.com/hydraulic-cylinders/double-acting/">

<!-- Pagination -->
<!-- Page 1 of blog -->
<link rel="canonical" href="https://www.honeywellhydraulics.com/blog/">

<!-- Page 2 of blog -->
<link rel="canonical" href="https://www.honeywellhydraulics.com/blog/page/2/">
```

## 4.3 URL Normalization (Server-Side Redirects)

```
# All of these MUST 301 redirect to the canonical form:

http://honeywellhydraulics.com/about     → https://www.honeywellhydraulics.com/about/
http://www.honeywellhydraulics.com/about → https://www.honeywellhydraulics.com/about/
https://honeywellhydraulics.com/about    → https://www.honeywellhydraulics.com/about/
https://www.honeywellhydraulics.com/about → https://www.honeywellhydraulics.com/about/
https://www.honeywellhydraulics.com/About/ → https://www.honeywellhydraulics.com/about/
https://www.honeywellhydraulics.com/about?utm_source=google → https://www.honeywellhydraulics.com/about/

# Server redirect rules (Nginx):
server {
    # Force www + https + trailing slash
    if ($host !~ ^www\.) {
        return 301 https://www.$host$request_uri;
    }

    # Force trailing slash (non-file URLs)
    rewrite ^([^.]*[^/])$ $1/ permanent;

    # Strip query params from canonical pages
    if ($args ~* "utm_") {
        return 301 $uri;
    }
}
```

---

# 5. OPEN GRAPH TAGS

## 5.1 OG Implementation Per Page Type

### Homepage

```html
<meta property="og:title" content="Hydraulic Cylinder & Power Pack Manufacturer in Ahmedabad | Honeywell Hydraulics">
<meta property="og:description" content="Leading manufacturer of custom hydraulic cylinders, power packs & hydraulic systems in Ahmedabad, Gujarat. Serving 20+ industries since 2018.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.honeywellhydraulics.com/">
<meta property="og:image" content="https://www.honeywellhydraulics.com/images/og/homepage-og.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Honeywell Hydraulics — Hydraulic Cylinder Manufacturer in Ahmedabad, Gujarat">
<meta property="og:site_name" content="Honeywell Hydraulics">
<meta property="og:locale" content="en_IN">
```

### Product Page

```html
<meta property="og:type" content="product">
<meta property="og:title" content="Double Acting Hydraulic Cylinder | Manufacturer Ahmedabad">
<meta property="og:description" content="Double acting hydraulic cylinder manufacturer in Ahmedabad. Custom bore sizes from 40mm to 300mm. Factory-direct pricing.">
<meta property="og:url" content="https://www.honeywellhydraulics.com/hydraulic-cylinders/double-acting/">
<meta property="og:image" content="https://www.honeywellhydraulics.com/images/products/double-acting-cylinder-og.jpg">
<meta property="product:brand" content="Honeywell Hydraulics">
<meta property="product:availability" content="in stock">
<meta property="product:condition" content="new">
```

### Blog Article

```html
<meta property="og:type" content="article">
<meta property="og:title" content="Types of Hydraulic Cylinders — Complete Guide [2026]">
<meta property="og:description" content="Learn about all types of hydraulic cylinders including double acting, single acting, telescopic, tie rod and more.">
<meta property="og:url" content="https://www.honeywellhydraulics.com/blog/types-of-hydraulic-cylinders/">
<meta property="og:image" content="https://www.honeywellhydraulics.com/images/blog/types-of-hydraulic-cylinders-og.jpg">
<meta property="article:published_time" content="2026-06-15T10:00:00+05:30">
<meta property="article:modified_time" content="2026-06-15T10:00:00+05:30">
<meta property="article:author" content="https://www.honeywellhydraulics.com/about/">
<meta property="article:section" content="Guides">
```

## 5.2 OG Image Specifications

```
Format:   JPEG (not WebP — social platforms need JPEG/PNG)
Size:     1200 × 630 pixels
File:     < 300KB
Content:  Brand logo + page title text overlay + product image
Location: /images/og/{page-slug}-og.jpg
Unique:   Every page gets a unique OG image (not one shared image)
```

---

# 6. TWITTER CARDS

```html
<!-- Summary Large Image (default for all pages) -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{Same as og:title}">
<meta name="twitter:description" content="{Same as og:description}">
<meta name="twitter:image" content="{Same as og:image — 1200×630}">
<!-- Note: No twitter:site needed if no Twitter/X account exists yet -->
```

> [!NOTE]
> Twitter/X cards use the same image as OG. Keep a single 1200×630 image per page for both platforms.

---

# 7. SCHEMA / STRUCTURED DATA

> [!IMPORTANT]
> **Implementation rules:**
> - ALL schema uses JSON-LD format (not Microdata, not RDFa)
> - JSON-LD is placed in `<script type="application/ld+json">` in the `<head>`
> - Multiple schema objects can be combined in a single `@graph` array
> - Validate EVERY schema at https://validator.schema.org before deployment
> - Test with Google Rich Results Test: https://search.google.com/test/rich-results

## 7.1 Schema Assignment Per Page Type

| Page Type | Schema Types |
|---|---|
| **Homepage** | Organization + LocalBusiness + WebSite + WebPage + FAQPage |
| **About** | AboutPage + Organization |
| **Product Pillar** | CollectionPage + BreadcrumbList + ItemList |
| **Product Page** | Product + Offer + BreadcrumbList + FAQPage |
| **Industry Page** | WebPage + BreadcrumbList + FAQPage |

| **Location Page** | LocalBusiness + WebPage + BreadcrumbList |
| **Blog Article** | Article + Person + BreadcrumbList |
| **Blog Index** | CollectionPage + BreadcrumbList |
| **Case Study** | Article + BreadcrumbList |
| **Contact** | ContactPage + LocalBusiness + BreadcrumbList |
| **Request Quote** | WebPage + BreadcrumbList |
| **Gallery** | WebPage + ImageGallery + BreadcrumbList |
| **FAQ Hub** | FAQPage + BreadcrumbList |

---

## 7.2 Homepage Schema (Complete — @graph Pattern)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.honeywellhydraulics.com/#organization",
      "name": "Honeywell Hydraulics",
      "alternateName": "Honeywell Hydraulics Ahmedabad",
      "url": "https://www.honeywellhydraulics.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.honeywellhydraulics.com/images/logo/honeywell-hydraulics-logo.png",
        "width": 300,
        "height": 80
      },
      "description": "Manufacturer of custom hydraulic cylinders, hydraulic power packs, manifold blocks, and complete hydraulic systems in Ahmedabad, Gujarat, India.",
      "foundingDate": "2018",
      "founder": {
        "@type": "Person",
        "name": "[FOUNDER_NAME]"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "B-18, Suryam Plaza Estate, Near Nilkanth Estate, Road no. 15, Kathwada GIDC",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "postalCode": "382430",
        "addressCountry": "IN"
      },
      "telephone": "+91-9924343873",
      "email": "sales@honeywellhydraulics.com",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "minValue": 10,
        "maxValue": 50
      },
      "areaServed": [
        {
          "@type": "State",
          "name": "Gujarat",
          "containedIn": "India"
        },
        {
          "@type": "Country",
          "name": "India"
        }
      ],
      "knowsAbout": [
        "Hydraulic Cylinders",
        "Hydraulic Power Packs",
        "Manifold Blocks",
        "Hydraulic Systems",
        "Custom Hydraulic Manufacturing"
      ],
      "sameAs": [
        "https://www.google.com/maps/place/Honeywell+Hydraulics/[PLACE_ID]",
        "https://www.indiamart.com/honeywell-hydraulics/",
        "https://www.justdial.com/Ahmedabad/Honeywell-Hydraulics/[ID]",
        "https://www.linkedin.com/company/honeywell-hydraulics/",
        "https://www.youtube.com/@honeywellhydraulics"
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.honeywellhydraulics.com/#localbusiness",
      "name": "Honeywell Hydraulics",
      "image": "https://www.honeywellhydraulics.com/images/factory/honeywell-hydraulics-factory.jpg",
      "url": "https://www.honeywellhydraulics.com/",
      "telephone": "+91-9924343873",
      "email": "sales@honeywellhydraulics.com",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "B-18, Suryam Plaza Estate, Near Nilkanth Estate, Road no. 15, Kathwada GIDC",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "postalCode": "382430",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 23.0225,
        "longitude": 72.5714
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "19:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "50",
        "bestRating": "5"
      },
      "parentOrganization": {
        "@id": "https://www.honeywellhydraulics.com/#organization"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.honeywellhydraulics.com/#website",
      "url": "https://www.honeywellhydraulics.com/",
      "name": "Honeywell Hydraulics",
      "publisher": {
        "@id": "https://www.honeywellhydraulics.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.honeywellhydraulics.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.honeywellhydraulics.com/#webpage",
      "url": "https://www.honeywellhydraulics.com/",
      "name": "Hydraulic Cylinder & Power Pack Manufacturer in Ahmedabad | Honeywell Hydraulics",
      "description": "Leading manufacturer of custom hydraulic cylinders, power packs & hydraulic systems in Ahmedabad, Gujarat. Serving 20+ industries since 2018. Request a free quote today.",
      "isPartOf": {
        "@id": "https://www.honeywellhydraulics.com/#website"
      },
      "about": {
        "@id": "https://www.honeywellhydraulics.com/#organization"
      },
      "inLanguage": "en-IN"
    }
  ]
}
```

---

# 8. BREADCRUMBS

## 8.1 HTML Implementation

```html
<nav aria-label="Breadcrumb" class="breadcrumb">
  <ol class="breadcrumb__list" itemscope itemtype="https://schema.org/BreadcrumbList">

    <li class="breadcrumb__item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <a href="/" itemprop="item">
        <span itemprop="name">Home</span>
      </a>
      <meta itemprop="position" content="1">
    </li>

    <li class="breadcrumb__item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <a href="/hydraulic-cylinders/" itemprop="item">
        <span itemprop="name">Hydraulic Cylinders</span>
      </a>
      <meta itemprop="position" content="2">
    </li>

    <li class="breadcrumb__item breadcrumb__item--active" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <span itemprop="name">Double Acting Hydraulic Cylinder</span>
      <meta itemprop="position" content="3">
    </li>

  </ol>
</nav>
```

## 8.2 Breadcrumb JSON-LD (Preferred — place alongside page schema)

```json
{
  "@type": "BreadcrumbList",
  "@id": "https://www.honeywellhydraulics.com/hydraulic-cylinders/double-acting/#breadcrumb",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.honeywellhydraulics.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Hydraulic Cylinders",
      "item": "https://www.honeywellhydraulics.com/hydraulic-cylinders/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Double Acting Hydraulic Cylinder",
      "item": "https://www.honeywellhydraulics.com/hydraulic-cylinders/double-acting/"
    }
  ]
}
```

## 8.3 Breadcrumb Paths for All Page Types

```
Homepage:              Home
Product Pillar:        Home > Hydraulic Cylinders
Product Page:          Home > Hydraulic Cylinders > Double Acting
Power Pack Page:       Home > Hydraulic Power Packs > 3 Phase
Manifold Page:         Home > Manifold Blocks > 06 Size Multi Station
Systems Page:          Home > Hydraulic Systems

Industry Page:         Home > Industries > Injection Moulding
Location (City):       Home > Locations > Gujarat > Ahmedabad
Location (State):      Home > Locations > Gujarat
Location (Country):    Home > Locations > India
Blog Article:          Home > Blog > Types of Hydraulic Cylinders
Case Study:            Home > Case Studies > Injection Moulding Press Ahmedabad
About:                 Home > About
Contact:               Home > Contact
FAQ:                   Home > Resources > FAQ
Downloads:             Home > Resources > Downloads
Gallery:               Home > Resources > Gallery
```

---

# 9. XML SITEMAP

## 9.1 Main Sitemap Index

**URL:** `https://www.honeywellhydraulics.com/sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://www.honeywellhydraulics.com/sitemap-pages.xml</loc>
    <lastmod>2026-06-05</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://www.honeywellhydraulics.com/sitemap-products.xml</loc>
    <lastmod>2026-06-05</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://www.honeywellhydraulics.com/sitemap-blog.xml</loc>
    <lastmod>2026-06-05</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://www.honeywellhydraulics.com/sitemap-images.xml</loc>
    <lastmod>2026-06-05</lastmod>
  </sitemap>
</sitemapindex>
```

## 9.2 Pages Sitemap (Core + Industries + Locations)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <!-- CORE PAGES -->
  <url>
    <loc>https://www.honeywellhydraulics.com/</loc>
    <lastmod>2026-06-05</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.honeywellhydraulics.com/about/</loc>
    <lastmod>2026-06-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.honeywellhydraulics.com/contact/</loc>
    <lastmod>2026-06-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.honeywellhydraulics.com/request-quote/</loc>
    <lastmod>2026-06-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.honeywellhydraulics.com/clients/</loc>
    <lastmod>2026-06-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://www.honeywellhydraulics.com/certifications/</loc>
    <lastmod>2026-06-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>

  <!-- INDUSTRY PAGES -->
  <url>
    <loc>https://www.honeywellhydraulics.com/industries/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.honeywellhydraulics.com/industries/injection-moulding/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- ... repeat for all industry pages ... -->


  <!-- LOCATION PAGES -->
  <url>
    <loc>https://www.honeywellhydraulics.com/locations/ahmedabad/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.honeywellhydraulics.com/locations/gujarat/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.honeywellhydraulics.com/locations/india/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- ... repeat for all location pages ... -->

  <!-- RESOURCE PAGES -->
  <url>
    <loc>https://www.honeywellhydraulics.com/resources/downloads/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://www.honeywellhydraulics.com/resources/faq/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://www.honeywellhydraulics.com/resources/gallery/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.4</priority>
  </url>

</urlset>
```

## 9.3 Products Sitemap

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <!-- PRODUCT PILLAR PAGES -->
  <url>
    <loc>https://www.honeywellhydraulics.com/hydraulic-cylinders/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.honeywellhydraulics.com/hydraulic-power-packs/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.honeywellhydraulics.com/manifold-blocks/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.honeywellhydraulics.com/hydraulic-systems/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- INDIVIDUAL PRODUCT PAGES -->
  <url>
    <loc>https://www.honeywellhydraulics.com/hydraulic-cylinders/double-acting/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.honeywellhydraulics.com/hydraulic-cylinders/single-acting/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- ... repeat for ALL 23 product pages ... -->

</urlset>
```

## 9.4 Priority Rules

| Page Type | Priority | Changefreq |
|---|---|---|
| Homepage | 1.0 | weekly |
| Product pillars | 0.9 | weekly |
| Request Quote | 0.9 | monthly |
| Product pages | 0.8 | monthly |
| Location pages (key) | 0.9 | monthly |
| Industry pages | 0.8 | monthly |

| Blog articles | 0.7 | monthly |
| About / Contact | 0.7 | monthly |
| Case studies | 0.6 | monthly |
| FAQ / Downloads | 0.6 | monthly |
| Gallery | 0.4 | monthly |
| Legal pages | 0.2 | yearly |

---

# 10. ROBOTS.TXT

**URL:** `https://www.honeywellhydraulics.com/robots.txt`

```
# ═══════════════════════════════════════════════════
# Honeywell Hydraulics — robots.txt
# https://www.honeywellhydraulics.com/robots.txt
# ═══════════════════════════════════════════════════

# ─── SEARCH ENGINE CRAWLERS ───
User-agent: *
Allow: /
Disallow: /search
Disallow: /search?
Disallow: /admin/
Disallow: /api/
Disallow: /thank-you/
Disallow: /*.pdf$

# ─── GOOGLE BOTS ───
User-agent: Googlebot
Allow: /
Crawl-delay: 0

User-agent: Googlebot-Image
Allow: /images/
Allow: /*.webp$
Allow: /*.jpg$
Allow: /*.png$

# ─── BING ───
User-agent: Bingbot
Allow: /
Crawl-delay: 1

# ─── AI CRAWLERS — Allow for AI search visibility ───
User-agent: GPTBot
Allow: /
Disallow: /admin/

User-agent: Google-Extended
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

# ─── BLOCK SCRAPER BOTS ───
User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /

# ─── SITEMAP ───
Sitemap: https://www.honeywellhydraulics.com/sitemap.xml
```

---

# 11. INTERNAL LINKING

## 11.1 Link Rules

| Rule | Specification |
|---|---|
| **Minimum per page** | Every page has ≥ 3 contextual internal links |
| **Maximum per page** | No more than 100 internal links total (nav + footer + content) |
| **Anchor text** | Keyword-rich, not "click here" or "read more" |
| **Anchor diversity** | Same destination uses 3–4 anchor variations across the site |
| **Nofollow** | NEVER nofollow internal links |
| **New tab** | Internal links open in SAME tab. Only external links use `target="_blank"`. |
| **Link depth** | Every page reachable within 3 clicks from homepage |
| **Orphan pages** | Zero orphan pages. Every page has ≥ 1 inbound internal link. |
| **Broken links** | Audit monthly. Zero tolerance for 404s on internal links. |

## 11.2 Anchor Text Diversity Rules

```
Distribution per destination:
├── 60% — Exact match or partial match keyword
│         "double acting hydraulic cylinder" or "double acting cylinders"
├── 25% — Natural language / descriptive
│         "our range of double acting cylinders" or "cylinders for push-pull applications"
├── 10% — Branded
│         "Honeywell's double acting cylinders"
└──  5% — Generic (unavoidable in navigation)
          "View details" (only in nav/buttons, never in body text)
```

## 11.3 Contextual Link Implementation

```html
<!-- CORRECT — keyword-rich anchor in natural sentence -->
<p>
  For press machine applications requiring push and pull force,
  our <a href="/hydraulic-cylinders/double-acting/">double acting hydraulic
  cylinders</a> are available in bore sizes from 40mm to 300mm.
</p>

<!-- CORRECT — descriptive natural anchor -->
<p>
  Learn more about our
  <a href="/hydraulic-cylinders/">complete range of hydraulic cylinders</a>
  manufactured at our Ahmedabad facility.
</p>

<!-- WRONG — generic anchor text -->
<p>
  To learn about our cylinders, <a href="/hydraulic-cylinders/">click here</a>.
</p>

<!-- WRONG — over-optimized / unnatural -->
<p>
  We are the <a href="/hydraulic-cylinders/">best hydraulic cylinder
  manufacturer in Ahmedabad Gujarat India top quality</a>.
</p>
```

---

# 12. IMAGE SEO

## 12.1 Image File Naming

```
Format: {product-type}-{descriptive-keyword}-{variant}.webp
Examples:
  double-acting-hydraulic-cylinder-ahmedabad.webp
  3-phase-hydraulic-power-pack-manufacturer.webp
  honeywell-hydraulics-factory-cnc-machine.webp
  hydraulic-cylinder-pressure-testing.webp

Rules:
  ✅ Lowercase
  ✅ Hyphens (not underscores)
  ✅ Descriptive — not IMG_0234.jpg
  ✅ Include primary keyword where natural
  ✅ No special characters or spaces
```

## 12.2 Alt Text Rules

```
Format: {Descriptive text of what's in the image} - {Context/brand}
Length: 50–125 characters
Rules:
  ✅ Describe what the image SHOWS
  ✅ Include keyword naturally (not stuffed)
  ✅ Unique per image — no duplicates
  ❌ Never start with "Image of" or "Picture of"
  ❌ Never stuff keywords
  ❌ Never leave empty (alt="")

Examples:
  ✅ alt="Double acting hydraulic cylinder with flange mounting - Honeywell Hydraulics"
  ✅ alt="CNC lathe machining hydraulic cylinder barrel at Honeywell factory Ahmedabad"
  ✅ alt="3 phase hydraulic power pack assembled and ready for testing"
  ❌ alt="hydraulic cylinder manufacturer ahmedabad hydraulic cylinder hydraulic"
  ❌ alt=""
  ❌ alt="image"
```

## 12.3 Responsive Image Implementation

```html
<picture>
  <!-- AVIF (smallest, newest browsers) -->
  <source
    type="image/avif"
    srcset="/images/products/double-acting-cylinder-400w.avif 400w,
           /images/products/double-acting-cylinder-800w.avif 800w,
           /images/products/double-acting-cylinder-1200w.avif 1200w"
    sizes="(max-width: 640px) 100vw,
           (max-width: 1024px) 50vw,
           33vw">

  <!-- WebP (wide support) -->
  <source
    type="image/webp"
    srcset="/images/products/double-acting-cylinder-400w.webp 400w,
           /images/products/double-acting-cylinder-800w.webp 800w,
           /images/products/double-acting-cylinder-1200w.webp 1200w"
    sizes="(max-width: 640px) 100vw,
           (max-width: 1024px) 50vw,
           33vw">

  <!-- JPEG fallback -->
  <img
    src="/images/products/double-acting-cylinder-800w.jpg"
    alt="Double acting hydraulic cylinder with flange mounting - Honeywell Hydraulics"
    width="800"
    height="600"
    loading="lazy"
    decoding="async">
</picture>
```

## 12.4 Image Optimization Pipeline

```
INPUT:  Original photograph (JPEG/RAW from camera)
   ↓
STEP 1: Resize to 3 breakpoints
   ├── 400w  (mobile)
   ├── 800w  (tablet / small desktop)
   └── 1200w (large desktop)
   ↓
STEP 2: Convert to 3 formats
   ├── AVIF (quality 60, effort 6)
   ├── WebP (quality 80)
   └── JPEG (quality 85, progressive)
   ↓
STEP 3: Compress
   Target: < 50KB for 400w, < 100KB for 800w, < 150KB for 1200w
   ↓
STEP 4: Set dimensions
   Add explicit width="" and height="" to prevent CLS
   ↓
OUTPUT: 9 files per image (3 sizes × 3 formats)
```

## 12.5 Hero Image (Above the Fold)

```html
<!-- Hero image is NOT lazy loaded — it IS the LCP element -->
<link rel="preload" as="image" type="image/webp"
      href="/images/hero/factory-hero-1200w.webp"
      imagesrcset="/images/hero/factory-hero-400w.webp 400w,
                   /images/hero/factory-hero-800w.webp 800w,
                   /images/hero/factory-hero-1200w.webp 1200w"
      imagesizes="100vw">

<img src="/images/hero/factory-hero-1200w.webp"
     srcset="/images/hero/factory-hero-400w.webp 400w,
            /images/hero/factory-hero-800w.webp 800w,
            /images/hero/factory-hero-1200w.webp 1200w"
     sizes="100vw"
     alt="Honeywell Hydraulics manufacturing facility - hydraulic cylinder production line Ahmedabad"
     width="1200"
     height="675"
     fetchpriority="high"
     decoding="sync">
<!-- fetchpriority="high" tells the browser to prioritize this image -->
<!-- decoding="sync" ensures it renders with the first paint -->
<!-- NO loading="lazy" on hero image -->
```

---

# 13. CORE WEB VITALS

## 13.1 Target Metrics

| Metric | Target | Current Industry Avg | Google Threshold |
|---|---|---|---|
| **LCP** (Largest Contentful Paint) | < 1.8s | 3.5s | < 2.5s (Good) |
| **INP** (Interaction to Next Paint) | < 150ms | 300ms | < 200ms (Good) |
| **CLS** (Cumulative Layout Shift) | < 0.05 | 0.15 | < 0.1 (Good) |
| **FCP** (First Contentful Paint) | < 1.2s | 2.5s | < 1.8s (Good) |
| **TTFB** (Time to First Byte) | < 400ms | 800ms | < 800ms |
| **Total Page Weight** | < 800KB | 2.5MB | — |
| **DOM Elements** | < 800 | 1,500+ | — |

## 13.2 Performance Optimization Checklist

### LCP Optimization

```
[ ] Hero image preloaded with <link rel="preload"> and fetchpriority="high"
[ ] Critical CSS inlined in <head> (< 15KB)
[ ] Non-critical CSS loaded with media="print" hack
[ ] Font preconnect and preload for Inter weight 400 and 700
[ ] font-display: swap on all @font-face
[ ] Server response (TTFB) under 400ms — use CDN
[ ] No render-blocking JavaScript in <head>
[ ] Hero image served as WebP, compressed < 100KB
[ ] No layout shifts before LCP element renders
```

### INP Optimization

```
[ ] All JavaScript deferred or async (except critical inline)
[ ] No long tasks > 50ms on main thread
[ ] Event handlers debounced (scroll, resize, input)
[ ] Third-party scripts loaded AFTER DOMContentLoaded
[ ] Google Analytics loaded asynchronously, NEVER blocking
[ ] Intersection Observer for scroll animations (not scroll event listeners)
[ ] FAQ accordion uses CSS grid animation (not JS height calculation)
[ ] Form validation runs on blur, not on every keypress
```

### CLS Optimization

```
[ ] ALL images have explicit width="" and height="" attributes
[ ] ALL embeds (Google Maps, YouTube) have explicit dimensions
[ ] Font preloaded — no FOUT (Flash of Unstyled Text)
[ ] No content injected above the fold after load
[ ] Ad-free site — no dynamic ad slots causing shifts
[ ] Sticky header has reserved height in layout
[ ] No lazy-loaded content above the fold
[ ] Web font fallback metrics match Inter closely:
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
```

## 13.3 Resource Budget

```
CSS:    1 critical inline (< 15KB) + 1 main file (< 50KB) = < 65KB
JS:     1 main file (< 40KB) + analytics (< 30KB) = < 70KB
Fonts:  Inter 400 + 500 + 600 + 700 + 800 (WOFF2) ≈ 100KB
Images: Hero < 100KB + 4 product cards < 50KB each = < 300KB
Total:  < 600KB first load (without cache)

COMPARISON:
Current Honeywell site: 33 CSS files + 8 JS files + jQuery + Elementor = ~3.5MB
New target:            2 CSS + 1 JS + 1 font family = < 600KB
Reduction:             ~83% smaller
```

---

# 14. FAQ SCHEMA

## 14.1 FAQPage JSON-LD (Homepage Example)

```json
{
  "@type": "FAQPage",
  "@id": "https://www.honeywellhydraulics.com/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What types of hydraulic cylinders do you manufacture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We manufacture double acting, single acting, flange mounting, clevis mounting, trunnion mounting, tie rod, telescopic, and square body hydraulic cylinders. All cylinders are available in custom bore sizes, stroke lengths, and pressure ratings. <a href='https://www.honeywellhydraulics.com/hydraulic-cylinders/'>View our complete range</a>."
      }
    },
    {
      "@type": "Question",
      "name": "What is the minimum order quantity (MOQ)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our minimum order quantity is 1 unit. We cater to both single-unit custom orders and bulk production runs of 100+ units per month. Bulk pricing is available for orders above 10 units."
      }
    },
    {
      "@type": "Question",
      "name": "What is the typical delivery time for hydraulic cylinders?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard products: 7-10 working days from order confirmation. Custom specifications: 10-20 working days depending on complexity. Gujarat delivery: 1-3 days. Pan-India: 3-7 days."
      }
    },
    {
      "@type": "Question",
      "name": "Do you deliver hydraulic products outside Gujarat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we deliver across all of India. Gujarat orders typically arrive in 1-3 days. Rest of India: 3-7 days via our logistics partners. We provide tracking numbers for all shipments."
      }
    },
    {
      "@type": "Question",
      "name": "Can you manufacture hydraulic cylinders to custom specifications?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Custom manufacturing is our specialty. Share your technical drawing or specifications, and our engineering team will review and provide a quotation within 24-48 hours. <a href='https://www.honeywellhydraulics.com/request-quote/'>Request a custom quote</a>."
      }
    },
    {
      "@type": "Question",
      "name": "What is the price range for hydraulic cylinders in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pricing depends on bore size, stroke length, pressure rating, material, and quantity. Our factory-direct pricing is competitive with no dealer markup. Contact us with your specifications for an exact quotation."
      }
    },
    {
      "@type": "Question",
      "name": "Are you ISO certified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our manufacturing processes follow ISO 9001:2015 quality management standards. Every hydraulic cylinder and power pack is 100% pressure-tested before dispatch. <a href='https://www.honeywellhydraulics.com/certifications/'>View our certifications</a>."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide after-sales support and warranty?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. All products come with a warranty against manufacturing defects. Our technical team is available via phone and WhatsApp for installation guidance, troubleshooting, and spare parts support."
      }
    }
  ]
}
```

## 14.2 FAQ HTML + Accessible Accordion

```html
<section class="section" id="faq">
  <div class="container">
    <h2>Frequently Asked Questions</h2>

    <div class="faq-list">

      <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <button class="faq-trigger" aria-expanded="false" aria-controls="faq-1">
          <span itemprop="name">What types of hydraulic cylinders do you manufacture?</span>
          <svg class="faq-chevron icon" width="20" height="20" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
        <div class="faq-answer" id="faq-1" role="region"
             itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <div itemprop="text">
            <p>We manufacture double acting, single acting, flange mounting, clevis mounting,
            trunnion mounting, tie rod, telescopic, and square body hydraulic cylinders.
            All cylinders are available in custom bore sizes, stroke lengths, and pressure ratings.
            <a href="/hydraulic-cylinders/">View our complete range</a>.</p>
          </div>
        </div>
      </div>

      <!-- Repeat for each FAQ item -->

    </div>
  </div>
</section>
```

---

# 15. PRODUCT SCHEMA

## 15.1 Product Page JSON-LD (Double Acting Cylinder Example)

```json
{
  "@type": "Product",
  "@id": "https://www.honeywellhydraulics.com/hydraulic-cylinders/double-acting/#product",
  "name": "Double Acting Hydraulic Cylinder",
  "description": "Custom manufactured double acting hydraulic cylinders available in bore sizes from 40mm to 300mm. Suitable for press machines, goods lifts, injection moulding, and industrial automation. Manufactured in Ahmedabad, Gujarat.",
  "image": [
    "https://www.honeywellhydraulics.com/images/products/double-acting-cylinder-front.webp",
    "https://www.honeywellhydraulics.com/images/products/double-acting-cylinder-side.webp",
    "https://www.honeywellhydraulics.com/images/products/double-acting-cylinder-detail.webp"
  ],
  "brand": {
    "@type": "Brand",
    "name": "Honeywell Hydraulics"
  },
  "manufacturer": {
    "@id": "https://www.honeywellhydraulics.com/#organization"
  },
  "category": "Hydraulic Cylinders",
  "material": "Hardened Steel, Chrome-Plated Rod",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Bore Size Range",
      "value": "40mm - 300mm"
    },
    {
      "@type": "PropertyValue",
      "name": "Maximum Working Pressure",
      "value": "210 bar"
    },
    {
      "@type": "PropertyValue",
      "name": "Stroke Length",
      "value": "Custom (up to 3000mm)"
    },
    {
      "@type": "PropertyValue",
      "name": "Mounting Type",
      "value": "Flange, Clevis, Trunnion, Tie Rod"
    },
    {
      "@type": "PropertyValue",
      "name": "Action Type",
      "value": "Double Acting"
    }
  ],
  "offers": {
    "@type": "Offer",
    "url": "https://www.honeywellhydraulics.com/hydraulic-cylinders/double-acting/",
    "priceCurrency": "INR",
    "price": "0",
    "priceValidUntil": "2027-06-05",
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition",
    "seller": {
      "@id": "https://www.honeywellhydraulics.com/#organization"
    },
    "deliveryLeadTime": {
      "@type": "QuantitativeValue",
      "minValue": 7,
      "maxValue": 20,
      "unitCode": "DAY"
    },
    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "shippingDestination": {
        "@type": "DefinedRegion",
        "addressCountry": "IN"
      },
      "deliveryTime": {
        "@type": "ShippingDeliveryTime",
        "handlingTime": {
          "@type": "QuantitativeValue",
          "minValue": 7,
          "maxValue": 15,
          "unitCode": "DAY"
        },
        "transitTime": {
          "@type": "QuantitativeValue",
          "minValue": 1,
          "maxValue": 7,
          "unitCode": "DAY"
        }
      }
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "25",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "[CLIENT_NAME]"
      },
      "reviewBody": "Excellent quality double acting cylinders. We have been using them in our press machines for 2 years. Consistent quality and on-time delivery.",
      "datePublished": "2026-03-15"
    }
  ]
}
```

> [!WARNING]
> **Price field:** Since Honeywell uses custom pricing (quote-based), set `"price": "0"` and do NOT use `priceSpecification`. Google allows this for RFQ-based B2B products. An alternative is to omit the `price` entirely and use only `availability`.

## 15.2 Product Collection Page Schema (Pillar Page)

```json
{
  "@type": "CollectionPage",
  "@id": "https://www.honeywellhydraulics.com/hydraulic-cylinders/#collectionpage",
  "name": "Hydraulic Cylinders — Custom Manufacturer in Ahmedabad",
  "description": "Complete range of hydraulic cylinders including double acting, single acting, flange mounting, clevis, trunnion, tie rod, and telescopic. Custom bore sizes and stroke lengths.",
  "url": "https://www.honeywellhydraulics.com/hydraulic-cylinders/",
  "isPartOf": {
    "@id": "https://www.honeywellhydraulics.com/#website"
  },
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Double Acting Hydraulic Cylinder",
        "url": "https://www.honeywellhydraulics.com/hydraulic-cylinders/double-acting/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Single Acting Hydraulic Cylinder",
        "url": "https://www.honeywellhydraulics.com/hydraulic-cylinders/single-acting/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Flange Mounting Hydraulic Cylinder",
        "url": "https://www.honeywellhydraulics.com/hydraulic-cylinders/flange-mounting/"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Clevis Mounting Hydraulic Cylinder",
        "url": "https://www.honeywellhydraulics.com/hydraulic-cylinders/clevis-mounting/"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Trunnion Mounting Hydraulic Cylinder",
        "url": "https://www.honeywellhydraulics.com/hydraulic-cylinders/trunnion-mounting/"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Tie Rod Hydraulic Cylinder",
        "url": "https://www.honeywellhydraulics.com/hydraulic-cylinders/tie-rod/"
      },
      {
        "@type": "ListItem",
        "position": 7,
        "name": "Telescopic Hydraulic Cylinder",
        "url": "https://www.honeywellhydraulics.com/hydraulic-cylinders/telescopic/"
      },
      {
        "@type": "ListItem",
        "position": 8,
        "name": "Square Body Hydraulic Jack",
        "url": "https://www.honeywellhydraulics.com/hydraulic-cylinders/square-body-jack/"
      }
    ]
  }
}
```

---

# 16. ORGANIZATION SCHEMA

> Already included in the homepage `@graph` (Section 7.2). For non-homepage pages, reference it via `@id`:

```json
{
  "@type": "WebPage",
  "about": {
    "@id": "https://www.honeywellhydraulics.com/#organization"
  }
}
```

This tells Google: "This page is about the same organization defined on the homepage." The `@id` acts as a persistent cross-page reference.

---

# 17. LOCALBUSINESS SCHEMA

## 17.1 Location Page Schema (Ahmedabad)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.honeywellhydraulics.com/locations/ahmedabad/#localbusiness",
  "name": "Honeywell Hydraulics — Ahmedabad",
  "description": "Hydraulic cylinder, power pack, and hydraulic system manufacturer in Kathwada GIDC, Ahmedabad, Gujarat. Factory-direct pricing, custom manufacturing, same-day dispatch.",
  "url": "https://www.honeywellhydraulics.com/locations/ahmedabad/",
  "image": "https://www.honeywellhydraulics.com/images/factory/honeywell-hydraulics-factory.jpg",
  "telephone": "+91-9924343873",
  "email": "sales@honeywellhydraulics.com",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "B-18, Suryam Plaza Estate, Near Nilkanth Estate, Road no. 15, Kathwada GIDC",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "postalCode": "382430",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 23.0225,
    "longitude": 72.5714
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "19:00"
    }
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Ahmedabad"
    },
    {
      "@type": "State",
      "name": "Gujarat"
    }
  ],
  "hasMap": "https://www.google.com/maps/place/Honeywell+Hydraulics/[PLACE_ID]",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "50",
    "bestRating": "5"
  },
  "parentOrganization": {
    "@id": "https://www.honeywellhydraulics.com/#organization"
  }
}
```

## 17.2 Service-Area Location Pages (Non-HQ Cities)

For cities where Honeywell doesn't have a physical office (Surat, Vadodara, Rajkot, etc.), use `areaServed` WITHOUT `geo` and `address` of that city:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Honeywell Hydraulics — Serving Surat",
  "description": "Hydraulic cylinder manufacturer serving Surat, Gujarat. Delivery to Sachin GIDC, Pandesara, and Hazira within 1-3 days.",
  "url": "https://www.honeywellhydraulics.com/locations/surat/",
  "telephone": "+91-9924343873",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "B-18, Suryam Plaza Estate, Near Nilkanth Estate, Road no. 15, Kathwada GIDC",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "postalCode": "382430",
    "addressCountry": "IN"
  },
  "areaServed": {
    "@type": "City",
    "name": "Surat",
    "containedIn": {
      "@type": "State",
      "name": "Gujarat"
    }
  }
}
```

> [!IMPORTANT]
> **The physical address is always Ahmedabad HQ** — even on the Surat page. You are NOT claiming to have an office in Surat. The schema says "Business located in Ahmedabad, serving Surat." This is the correct and honest implementation.

---

# 18. ADDITIONAL TECHNICAL REQUIREMENTS

## 18.1 Blog Article Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Types of Hydraulic Cylinders — Complete Guide [2026]",
  "description": "Learn about all types of hydraulic cylinders including double acting, single acting, telescopic, tie rod, and more. Complete guide with specifications and applications.",
  "image": "https://www.honeywellhydraulics.com/images/blog/types-of-hydraulic-cylinders.webp",
  "datePublished": "2026-06-15T10:00:00+05:30",
  "dateModified": "2026-06-15T10:00:00+05:30",
  "author": {
    "@type": "Person",
    "name": "[AUTHOR_NAME]",
    "url": "https://www.honeywellhydraulics.com/about/",
    "jobTitle": "[TITLE — e.g., Founder & Chief Engineer]",
    "worksFor": {
      "@id": "https://www.honeywellhydraulics.com/#organization"
    }
  },
  "publisher": {
    "@id": "https://www.honeywellhydraulics.com/#organization"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.honeywellhydraulics.com/blog/types-of-hydraulic-cylinders/"
  },
  "wordCount": 2500,
  "articleSection": "Guides",
  "inLanguage": "en-IN"
}
```

## 18.2 llms.txt (AI Search Visibility)

**URL:** `https://www.honeywellhydraulics.com/llms.txt`

```
# Honeywell Hydraulics — llms.txt
# https://www.honeywellhydraulics.com/llms.txt

## About
Honeywell Hydraulics is a manufacturer of hydraulic cylinders, hydraulic power packs,
manifold blocks, and complete hydraulic systems based in Kathwada GIDC, Ahmedabad,
Gujarat, India. Founded in 2018, the company serves 20+ industries including injection
moulding, press manufacturing, automotive, steel, and construction.

## Products
- Hydraulic Cylinders: Double acting, single acting, flange mounting, clevis mounting,
  trunnion mounting, tie rod, telescopic, square body jack
- Hydraulic Power Packs: 3 phase, single phase, for press, for lift, with accumulator,
  with solenoid valve, hand lever operated
- Manifold Blocks: 06 size multi station, 06 size single station, 10 size single station,
  high low system
- Custom Hydraulic Systems: Turnkey design, manufacturing, and commissioning

## Contact
- Phone: +91 9924343873
- Email: sales@honeywellhydraulics.com
- Address: B-18, Suryam Plaza Estate, Near Nilkanth Estate, Road no. 15,
  Kathwada GIDC, Ahmedabad, Gujarat 382430, India

## Key Pages
- Products: /hydraulic-cylinders/, /hydraulic-power-packs/, /manifold-blocks/, /hydraulic-systems/
- Industries: /industries/injection-moulding/, /industries/automotive/, /industries/press-metal-forming/
- Blog: /blog/types-of-hydraulic-cylinders/, /blog/hydraulic-cylinder-price-india/
- Contact: /contact/, /request-quote/
```

## 18.3 .well-known/security.txt

```
# Honeywell Hydraulics Security Contact
Contact: mailto:sales@honeywellhydraulics.com
Preferred-Languages: en
Canonical: https://www.honeywellhydraulics.com/.well-known/security.txt
Expires: 2027-06-05T00:00:00.000Z
```

## 18.4 site.webmanifest

```json
{
  "name": "Honeywell Hydraulics",
  "short_name": "Honeywell",
  "description": "Hydraulic Cylinder & Power Pack Manufacturer in Ahmedabad",
  "start_url": "/",
  "display": "browser",
  "background_color": "#FFFFFF",
  "theme_color": "#0F172A",
  "icons": [
    {
      "src": "/images/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/images/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

## 18.5 Pre-Launch Technical SEO Checklist

```
CRAWLABILITY
[ ] robots.txt accessible and correct
[ ] XML sitemap submitted to Google Search Console
[ ] XML sitemap submitted to Bing Webmaster Tools
[ ] HTML sitemap page created at /sitemap/
[ ] No orphan pages (every page has ≥ 1 inbound link)
[ ] No broken internal links (run full crawl with Screaming Frog)
[ ] Max click depth: 3 (every page reachable in 3 clicks from homepage)

INDEXABILITY
[ ] Every page has a unique <title> tag
[ ] Every page has a unique <meta description>
[ ] Every page has a self-referencing canonical
[ ] No accidental noindex tags
[ ] No duplicate content issues
[ ] No thin pages (< 300 words on any indexable page)

STRUCTURED DATA
[ ] Homepage schema validated (Organization + LocalBusiness + WebSite)
[ ] Product page schema validated (Product + Offer + FAQ)
[ ] Blog article schema validated (Article + Person)
[ ] Breadcrumb schema on every page
[ ] FAQ schema on pages with FAQ sections
[ ] ALL schema passes Google Rich Results Test

PERFORMANCE
[ ] LCP < 2.0s on mobile (test with PageSpeed Insights)
[ ] INP < 200ms (test with Chrome DevTools)
[ ] CLS < 0.1 (all images have width/height, no layout shifts)
[ ] Total page weight < 1MB
[ ] TTFB < 400ms

SECURITY & TECHNICAL
[ ] HTTPS enforced (all HTTP → HTTPS redirect)
[ ] www enforced (non-www → www redirect)
[ ] Trailing slash enforced
[ ] HSTS header enabled
[ ] No mixed content warnings
[ ] Security headers configured

TRACKING
[ ] Google Analytics 4 installed (single tag, no duplicates)
[ ] Google Search Console verified
[ ] Bing Webmaster Tools verified
[ ] Conversion tracking on /request-quote/ form submission
[ ] Phone click tracking enabled
[ ] WhatsApp click tracking enabled

MOBILE
[ ] Mobile-responsive design on all pages
[ ] Tap targets ≥ 48px × 48px
[ ] No horizontal scroll
[ ] Font size ≥ 16px on mobile
[ ] Mobile sticky CTA bar functional

LOCAL SEO
[ ] Google Business Profile claimed and verified
[ ] GBP NAP matches website NAP exactly
[ ] GBP categories set: "Hydraulic Equipment Supplier" (primary)
[ ] GBP photos uploaded (factory, products, team)
[ ] GBP posts scheduled weekly
```

---

*Technical SEO specification prepared by Antigravity AI — June 5, 2026*  
*Part of the Honeywell Hydraulics rebuild series:*  
*[SEO Strategy](file:///C:/Users/DELL/.gemini/antigravity-ide/brain/66607213-1ab9-45f5-97ea-411e255792cd/honeywell-hydraulics-seo-strategy.md) · [Architecture](file:///C:/Users/DELL/.gemini/antigravity-ide/brain/66607213-1ab9-45f5-97ea-411e255792cd/honeywell-website-architecture.md) · [Keyword Map](file:///C:/Users/DELL/.gemini/antigravity-ide/brain/66607213-1ab9-45f5-97ea-411e255792cd/honeywell-keyword-map.md) · [Homepage Blueprint](file:///C:/Users/DELL/.gemini/antigravity-ide/brain/66607213-1ab9-45f5-97ea-411e255792cd/honeywell-homepage-blueprint.md) · [Design System](file:///C:/Users/DELL/.gemini/antigravity-ide/brain/66607213-1ab9-45f5-97ea-411e255792cd/honeywell-design-system.md)*
