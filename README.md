# Honeywell Hydraulics — Web Application & Technical SEO Documentation

[![Next.js](https://img.shields.io/badge/Next.js-16.2.7-000000?style=flat&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-20232A?style=flat&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3.0-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Transactional Email](https://img.shields.io/badge/Email-Resend_API-black?style=flat)](https://resend.com/)

> **Technical Architecture & Operations Manual**: Comprehensive documentation of codebase structure, component hierarchies, data layer contracts, prerendered route inventory, and technical SEO / AEO / GEO implementation for **Honeywell Hydraulics**.

---

## Documentation Status

This document reflects the verified implementation in the codebase as of the last technical audit.

### Status Legend
- **Implemented**: Fully confirmed and verified in source code and static build output.
- **Production Configuration**: Implemented in code; requires active hosting environment / DNS settings.
- **Manual Verification**: Operational item requiring runtime testing or external service configuration.
- **Planned**: Documented architectural roadmap item for future phases.

### Audit Summary (August 2026)

| Parameter | Confirmed Production Value | Status |
|---|---|---|
| **Last Audit Date** | August 25, 2026 | Implemented |
| **Framework Version** | Next.js `16.2.7` (App Router) / React `19.2.4` | Implemented |
| **Language & Tooling** | TypeScript `^5.0` / Tailwind CSS `v4.3.0` / PostCSS `^8.5.15` | Implemented |
| **Prerendered Page Routes** | **62 Static Pages** (Prerendered at build time) | Implemented |
| **Serverless API Routes** | **4 Endpoints** (`/api/contact`, `/api/quote`, `/api/og`, `/api/test-email`) | Implemented |
| **Total Route Entries** | **66 Next.js Application Routes** | Implemented |
| **Production Domain** | `https://honeywellhydraulics.in` (Trailing slash enforced) | Production Configuration |
| **Robots Directives** | Maintenance Mode (Crawlers blocked pending production signoff) | Implemented |
| **Transactional Mailer** | Resend API client configured in `/api/contact` & `/api/quote` | Implemented (Requires API Key) |

---

## Implemented vs. Manual Verification Matrix

| Area | Implementation Mechanism | Repository Status | Operational Verification Needed |
|---|---|---|---|
| **Page Rendering** | React Server Components (RSC) & static generation | Implemented (`app/(site)/`) | Verify build output via `npm run build` |
| **Dynamic Sitemap** | Programmatic generator in `app/sitemap.ts` | Implemented (62 paths) | Confirm XML output at `/sitemap.xml` |
| **Robots Configuration** | Programmatic rules in `app/robots.ts` | Implemented (Maintenance mode) | Update crawler rules for launch signoff |
| **Structured Data** | Schema.org `@graph` generation via `lib/seo.ts` | Implemented | Test URLs via Google Rich Results Tool |
| **Quote RFQ Ingestion** | Serverless API route `app/api/quote/route.ts` | Implemented | Supply valid `RESEND_API_KEY` in environment |
| **Contact Ingestion** | Serverless API route `app/api/contact/route.ts` | Implemented | Verify inbox delivery in target email account |
| **OpenGraph Generator** | Edge ImageResponse in `app/api/og/route.tsx` | Implemented | Verify social preview rendering |
| **DNS & Domain Binding** | Canonical `https://honeywellhydraulics.in/` | Configured in codebase | Verify DNS A/CNAME records on hosting platform |
| **Search Console** | Meta tag in `app/layout.tsx` via env variable | Implemented | Supply `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` |
| **Web Analytics** | GA4 Script & `@vercel/analytics` in root layout | Implemented | Supply `NEXT_PUBLIC_GA_ID` in production env |

---

## Table of Contents

1. [Documentation Status & Verification Matrix](#documentation-status)
2. [Project Overview & Canonical Identity](#1-project-overview--canonical-identity)
3. [Technology Stack](#2-technology-stack)
4. [Application Architecture & Directory Structure](#3-application-architecture--directory-structure)
5. [Complete Route Inventory (62 Pages + 4 API Endpoints)](#4-complete-route-inventory-62-pages--4-api-endpoints)
   - [Core, Company & Legal Pages (8 Routes)](#core-company--legal-pages-8-routes)
   - [Product Category Hubs & Hydraulic Cylinder Pages (14 Routes)](#product-category-hubs--hydraulic-cylinder-pages-14-routes)
   - [Hydraulic Power Pack Pages (10 Routes)](#hydraulic-power-pack-pages-10-routes)
   - [Hydraulic Manifold Block Pages (6 Routes)](#hydraulic-manifold-block-pages-6-routes)
   - [Location & Regional Hub Pages (23 Routes)](#location--regional-hub-pages-23-routes)
   - [Serverless API Endpoints (4 Endpoints)](#serverless-api-endpoints-4-endpoints)
6. [Product Architecture & Data Layer](#5-product-architecture--data-layer)
7. [SEO, AEO & Structured Data Implementation](#6-seo-aeo--structured-data-implementation)
   - [Technical SEO & URL Normalization](#technical-seo--url-normalization)
   - [Robots.txt Current State & Launch Transition](#robotstxt-current-state--launch-transition)
   - [Sitemap Architecture](#sitemap-architecture)
   - [Structured Data (`@graph` JSON-LD)](#structured-data-graph-json-ld)
   - [AEO & Agentic Discovery (`llms.txt`, `catalog.md`)](#aeo--agentic-discovery-llmstxt-catalogmd)
8. [Location Architecture & Regional Coverage](#7-location-architecture--regional-coverage)
9. [UI / UX Design System & Component Library](#8-ui--ux-design-system--component-library)
10. [Image & Asset Architecture](#9-image--asset-architecture)
11. [API Specifications & Request Contracts](#10-api-specifications--request-contracts)
12. [Environment Variables & Security Configuration](#11-environment-variables--security-configuration)
13. [Performance & Accessibility Standards](#12-performance--accessibility-standards)
14. [Testing & Quality Assurance Workflow](#13-testing--quality-assurance-workflow)
15. [Development Setup & NPM Scripts](#14-development-setup--npm-scripts)
16. [Content Management & Operational Maintenance](#15-content-management--operational-maintenance)
17. [Production Deployment & Launch Checklist](#16-production-deployment--launch-checklist)
18. [Engineering Rules & Development Guidelines](#17-engineering-rules--development-guidelines)
19. [Planned Architectural Improvements](#18-planned-architectural-improvements)

---

## 1. Project Overview & Canonical Identity

**Honeywell Hydraulics** is an industrial manufacturer established in 2018, operating from Kathwada GIDC, Ahmedabad, Gujarat, India. The company manufactures:
- **Industrial Hydraulic Cylinders** (Bore: 40 mm to 500 mm, Stroke: up to 6,000 mm, Working Pressure: up to 700 Bar)
- **Custom Hydraulic Power Packs** (Motor: 0.5 HP to 75 HP, Tank Capacity: 10 L to 2,000 L, Pressure: up to 450 Bar)
- **Precision Hydraulic Manifold Blocks** (CETOP 03 / NG6 to CETOP 10 / NG32, Monolithic Multi-Station Blocks)

### Canonical Business Parameters (`lib/constants.ts`)

| Parameter | Production Value | Source in Codebase |
|---|---|---|
| **Company Name** | Honeywell Hydraulics | `COMPANY_INFO.name` |
| **Founding Year** | 2018 | `COMPANY_INFO.foundingYear` |
| **Factory Address** | B-18, Suryam Plaza Estate, Near Nilkanth Estate, Road no. 15, Kathwada GIDC, Ahmedabad, Gujarat 382430, India | `COMPANY_INFO.address` |
| **Geo Coordinates** | Latitude: `23.035`, Longitude: `72.668` | `COMPANY_INFO.geo` |
| **Primary Phone** | `+91-9924343873` (Display: `+91 99243 43873`) | `COMPANY_INFO.phone` |
| **Sales Email** | `sales@honeywellhydraulics.com` | `COMPANY_INFO.email` |
| **Inbound Lead Destination** | `honeywellhydraulics@gmail.com` | `process.env.SALES_NOTIFICATION_EMAIL` |
| **Canonical URL** | `https://honeywellhydraulics.in` | `COMPANY_INFO.websiteUrl` |
| **Operating Hours** | Monday – Saturday, 09:00 – 19:00 IST | `COMPANY_INFO.openingHours` |

---

## 2. Technology Stack

| Layer | Package / Technology | Version in `package.json` | Operational Purpose |
|---|---|---|---|
| **Application Framework** | Next.js (App Router) | `16.2.7` | Static site generation, route handling, layout nesting, serverless functions |
| **UI Library** | React / React DOM | `19.2.4` | Component tree, React Server Components (RSC), leaf client state |
| **Programming Language** | TypeScript | `^5.0` | Strict type validation for product specifications, datasets, and schemas |
| **CSS Framework** | Tailwind CSS | `^4.3.0` | Design token system, responsive spacing, and utility classes |
| **CSS Post-Processor** | PostCSS / `@tailwindcss/postcss` | `^8.5.15` / `^4.3.0` | CSS bundle compilation and prefixing |
| **Icon Libraries** | `lucide-react` / `react-icons` | `^1.17.0` / `^5.6.0` | Standard UI icons and brand emblems |
| **Transactional Email** | Resend | `^6.20.0` | Server-side email delivery for `/api/contact` and `/api/quote` |
| **Image Pipeline** | Sharp | `^0.35.2` | Server-side image optimization for Next.js Image component |
| **Voice Assistant** | `@elevenlabs/react` | `^1.9.0` | Interactive client-side conversational AI voice widget |
| **Analytics & Web Vitals** | `@vercel/analytics` / `@vercel/speed-insights` | `^2.0.1` / `^2.0.0` | Privacy-focused analytics and Core Web Vitals field metric logging |
| **Content Utilities** | `gray-matter` / `next-mdx-remote` | `^4.0.3` / `^6.0.0` | Markdown catalog parsing and remote MDX handling |
| **Sitemap Postprocessor** | `next-sitemap` | `^4.2.3` | Post-build sitemap utility (complements dynamic `app/sitemap.ts`) |
| **Dev Tools** | `agentation` | `^3.0.2` | Development UI inspection overlay (active only when `NODE_ENV === 'development'`) |

---

## 3. Application Architecture & Directory Structure

```text
Honeywell SEO/
├── app/                                 # Next.js App Router root
│   ├── (site)/                          # Route group sharing primary visual layout
│   │   ├── about-us/                    # /about-us/ (Company story, ISO credentials)
│   │   ├── contact-us/                  # /contact-us/ (Interactive map, NAP, contact form)
│   │   ├── gallery/                     # /gallery/ (Filterable hydraulic media showcase)
│   │   ├── locations/                   # /locations/ (Location Hub & regional routes)
│   │   │   ├── ahmedabad/               # /locations/ahmedabad/
│   │   │   ├── ankleshwar/              # /locations/ankleshwar/
│   │   │   ├── bhavnagar/               # /locations/bhavnagar/
│   │   │   ├── gandhinagar/             # /locations/gandhinagar/
│   │   │   ├── gujarat/                 # /locations/gujarat/ (State Hub)
│   │   │   │   ├── injection-moulding-cylinders/ # /locations/gujarat/injection-moulding-cylinders/
│   │   │   │   ├── ship-breaking-cylinders/      # /locations/gujarat/ship-breaking-cylinders/
│   │   │   │   └── textile-machinery-cylinders/  # /locations/gujarat/textile-machinery-cylinders/
│   │   │   ├── halol/                   # /locations/halol/
│   │   │   ├── jamnagar/                # /locations/jamnagar/
│   │   │   ├── karnataka/               # /locations/karnataka/
│   │   │   ├── kutch/                   # /locations/kutch/
│   │   │   ├── madhya-pradesh/          # /locations/madhya-pradesh/
│   │   │   ├── maharashtra/             # /locations/maharashtra/
│   │   │   ├── morbi/                   # /locations/morbi/
│   │   │   ├── rajasthan/               # /locations/rajasthan/
│   │   │   ├── rajkot/                  # /locations/rajkot/
│   │   │   ├── surat/                   # /locations/surat/
│   │   │   ├── tamil-nadu/              # /locations/tamil-nadu/
│   │   │   ├── vadodara/                # /locations/vadodara/
│   │   │   ├── vapi/                    # /locations/vapi/
│   │   │   └── west-bengal/             # /locations/west-bengal/
│   │   ├── manufacturing-facility/      # /manufacturing-facility/ (CNC machinery, testing)
│   │   ├── privacy-policy/              # /privacy-policy/ (Legal & data privacy)
│   │   ├── products/                    # /products/ (Master Products Hub)
│   │   │   ├── hydraulic-cylinders/     # /products/hydraulic-cylinders/ (13 variant pages)
│   │   │   ├── hydraulic-power-packs/   # /products/hydraulic-power-packs/ (9 variant pages)
│   │   │   └── manifold-blocks/         # /products/manifold-blocks/ (5 variant pages)
│   │   ├── request-quote/               # /request-quote/ (Multi-step RFQ calculator)
│   │   ├── terms/                       # /terms/ (Commercial terms and warranties)
│   │   ├── error.tsx                    # Route error boundary
│   │   ├── layout.tsx                   # Site shell: Header, Skip-Link, Footer, Conversion Bar
│   │   ├── loading.tsx                  # Suspense fallback skeleton
│   │   └── page.tsx                     # Homepage ( / )
│   ├── api/                             # Serverless API routes
│   │   ├── contact/route.ts             # Contact form mailer via Resend
│   │   ├── og/route.tsx                 # Dynamic OpenGraph 1200x630 image generator (Edge)
│   │   ├── quote/route.ts               # Technical RFQ mailer via Resend
│   │   └── test-email/route.ts          # Resend diagnostic route
│   ├── apple-icon.png                   # Apple touch icon
│   ├── globals.css                      # Global Tailwind tokens, fonts, and utilities
│   ├── icon.png                         # Browser favicon
│   ├── layout.tsx                       # Root layout (HTML, Fonts, Analytics, JSON-LD)
│   ├── not-found.tsx                    # Custom branded 404 handler
│   ├── robots.ts                        # Programmatic robots.txt configuration
│   └── sitemap.ts                       # Dynamic sitemap.xml registry
├── components/                          # Modular component library
│   ├── cards/                           # Reusable feed & grid cards
│   ├── faq/                             # Accessible FAQ accordions with schema injection
│   ├── forms/                           # ContactForm.tsx & QuoteForm.tsx
│   ├── gallery/                         # Gallery grid, category filters, lightbox viewer
│   ├── homepage/                        # 16 Specialized homepage section components
│   ├── layout/                          # Breadcrumb.tsx, PageContainer.tsx
│   ├── locations/                       # SiteLocationsSection.tsx
│   ├── product-page/                    # Modular Product Engine (11 composable sections)
│   ├── products/                        # TechnicalBlueprintCard and category grids
│   ├── seo/                             # JsonLd.tsx, SEO.tsx helpers
│   ├── tables/                          # SpecTable.tsx technical data renderer
│   ├── templates/location/              # Location Page Template Engine (10 sub-sections)
│   ├── ui/                              # Atomic primitives: Button, Heading, Section, Container, etc.
│   ├── ElevenLabsWidget.tsx             # Interactive voice assistant
│   ├── Footer.tsx                       # Global footer with NAP & sitemap links
│   ├── Header.tsx                       # Sticky responsive header with scroll elevation
│   ├── MegaMenu.tsx                     # Multi-column desktop dropdown navigation
│   ├── MobileConversionBar.tsx          # Fixed mobile action bar (Call, WhatsApp, Quote)
│   └── MobileMenu.tsx                   # Mobile sliding drawer navigation
├── data/                                # Type-safe content & specification repository
│   ├── hydraulic-cylinders/             # 13 Cylinder variant datasets + pillar.ts
│   ├── hydraulic-power-packs/           # 9 Power Pack variant datasets + pillar.tsx
│   ├── locations/                       # 22 Location datasets (12 cities, 7 states, 3 spokes)
│   ├── manifold-blocks/                 # 5 Manifold Block datasets + pillar.ts
│   ├── gallery.ts                       # Structured media asset collection
│   ├── hero-carousel-images.ts          # Homepage hero slider specifications
│   ├── homepage.ts                      # All 16 homepage section datasets
│   └── navigation.ts                    # Global navigation tree hierarchy
├── lib/                                 # Shared utilities and configurations
│   ├── constants.ts                     # Single source of truth for company NAP & SEO defaults
│   ├── navigation.ts                    # Navigation retrieval and helper methods
│   ├── seo.ts                           # Metadata builders & JSON-LD schema factories
│   └── utils.ts                         # Class merging (clsx + twMerge) & formatting helpers
├── public/                              # Static public assets
│   ├── images/                          # Production WebP, PNG, and JPG assets
│   │   ├── company/                     # Facility, CNC lathes, welding, testing photos
│   │   ├── home/                        # Hero slider & product category images
│   │   ├── products/                    # Cylinders, power packs, manifold blocks
│   │   ├── seo/                         # Static fallback OG images
│   │   └── shared/                      # Brand logos, 20 client logos, and industrial textures
│   ├── catalog.md                       # Machine-readable product catalog for LLMs
│   ├── llms.txt                         # AI discovery protocol for Answer Engines
│   └── sitemap.xml                      # Legacy fallback sitemap
├── types/                               # TypeScript domain definitions
│   ├── index.ts                         # General product, FAQ, company interfaces
│   └── navigation.ts                    # Navigation and menu data structures
├── next.config.ts                       # Next.js security headers, redirects, images config
├── next-sitemap.config.cjs              # next-sitemap fallback configuration
├── package.json                         # Package dependencies, engines, and scripts
├── postcss.config.mjs                   # PostCSS pipeline
├── process_images.py                    # Automated image background removal & WebP converter
├── tailwind.config.ts                   # Tailwind CSS theme extension
└── tsconfig.json                        # TypeScript strict compiler configuration
```

---

## 4. Complete Route Inventory (62 Pages + 4 API Endpoints)

The application contains **62 static prerendered HTML page routes** and **4 serverless API endpoints**, totalling **66 Next.js routes**.

### Summary by Route Category
- **Core, Company & Legal Pages**: 8 routes
- **Product Category Hubs & Pillar Pages**: 4 routes
- **Hydraulic Cylinder Variants**: 13 routes
- **Hydraulic Power Pack Variants**: 9 routes
- **Hydraulic Manifold Block Variants**: 5 routes
- **Location Hubs, Cities & Industrial Spokes**: 23 routes
- **API Routes**: 4 endpoints

---

### Core, Company & Legal Pages (8 Routes)

| URL Path | Type | Purpose | Key Metadata & Component Structure |
|---|---|---|---|
| `/` | Static | Homepage | Main brand overview, hero carousel, product overview, process steps, FAQs, `@graph` schema |
| `/about-us/` | Static | About Us | Company background (est. 2018), management, ISO 9001:2015 quality standards |
| `/manufacturing-facility/` | Static | Infrastructure | Plant machinery, CNC VMC capabilities, testing rigs, clean assembly area |
| `/gallery/` | Static | Media Gallery | Filterable visual catalog (Cylinders, Power Packs, Manifolds, Infrastructure) with lightbox |
| `/request-quote/` | Static | RFQ Engine | Technical quote calculator with bore, stroke, pressure, and quantity fields |
| `/contact-us/` | Static | Contact Us | Company NAP, interactive Google Maps embed, direct inquiry form |
| `/privacy-policy/` | Static | Privacy Policy | Data privacy statements and cookie usage terms |
| `/terms/` | Static | Terms of Service | Commercial terms, manufacturing tolerances ($\pm 0.05\text{ mm}$), and warranty policies |

---

### Product Category Hubs & Hydraulic Cylinder Pages (14 Routes)

- **Master Products Hub**: `/products/`
- **Hydraulic Cylinders Pillar**: `/products/hydraulic-cylinders/`

| Cylinder Route | Bore Range | Pressure Rating | Key Application Focus |
|---|---|---|---|
| `/products/hydraulic-cylinders/custom-hydraulic-cylinders/` | 40 – 500 mm | Up to 700 Bar | Bespoke OEM machinery, heavy industrial actuators |
| `/products/hydraulic-cylinders/double-acting-hydraulic-cylinders/` | 40 – 350 mm | Up to 350 Bar | Metal forming, stamping presses, industrial automation |
| `/products/hydraulic-cylinders/single-acting-hydraulic-cylinders/` | 40 – 250 mm | Up to 250 Bar | Clamping fixtures, single-stroke lifts, hydraulic jacks |
| `/products/hydraulic-cylinders/telescopic-hydraulic-cylinders/` | 2 – 5 Stages | Up to 210 Bar | Multi-stage tipping trailers, long-reach platforms |
| `/products/hydraulic-cylinders/tie-rod-hydraulic-cylinders/` | 40 – 200 mm | Up to 160 Bar (NFPA) | Injection moulding, die-casting, machine tools |
| `/products/hydraulic-cylinders/welded-hydraulic-cylinders/` | 40 – 300 mm | Up to 350 Bar | Earthmoving machinery, excavators, heavy construction |
| `/products/hydraulic-cylinders/goods-lift-hydraulic-cylinders/` | 63 – 250 mm | Up to 210 Bar | Industrial freight elevators, warehouse mezzanine lifts |
| `/products/hydraulic-cylinders/car-parking-hydraulic-cylinders/` | 50 – 150 mm | Up to 200 Bar | Automated puzzle parking, multi-level stack systems |
| `/products/hydraulic-cylinders/scissor-lift-table-hydraulic-cylinder/` | 50 – 200 mm | Up to 250 Bar | Heavy-duty workshop lifting tables, dock levelers |
| `/products/hydraulic-cylinders/flange-mounted-hydraulic-cylinder/` | 40 – 300 mm | Up to 350 Bar | Rigid front/rear flange mounting for press tools |
| `/products/hydraulic-cylinders/clevis-mounted-hydraulic-cylinder/` | 40 – 250 mm | Up to 250 Bar | Pivoting movement, agricultural machinery linkages |
| `/products/hydraulic-cylinders/trunnion-mounted-hydraulic-cylinder/` | 50 – 300 mm | Up to 300 Bar | Tilting furnaces, boom articulation, pivot mounting |
| `/products/hydraulic-cylinders/square-body-hydraulic-cylinder/` | 40 – 200 mm | Up to 210 Bar | Compact die-clamping, aluminum extrusion systems |

---

### Hydraulic Power Pack Pages (10 Routes)

- **Hydraulic Power Packs Pillar**: `/products/hydraulic-power-packs/`

| Power Pack Route | Motor Rating | Tank Capacity | Technical Configuration |
|---|---|---|---|
| `/products/hydraulic-power-packs/single-phase-hydraulic-power-packs/` | 0.5 – 3 HP | 10 – 60 L | 220V operation for light workshops and auto garage hoists |
| `/products/hydraulic-power-packs/three-phase-hydraulic-power-packs/` | 2 – 50 HP | 40 – 1,000 L | 415V continuous duty for 24/7 industrial plant lines |
| `/products/hydraulic-power-packs/customized-hydraulic-power-packs/` | Custom Spec | Up to 2,000 L | Tailored manifolds, heat exchangers, PLC control panels |
| `/products/hydraulic-power-packs/hydraulic-power-packs-for-press/` | 5 – 75 HP | 100 – 1,500 L | Dual-stage rapid approach and high-pressure pressing cycle |
| `/products/hydraulic-power-packs/multistation-hydraulic-power-packs/` | Multi-Circuit | 100 – 800 L | Independent directional control for multiple actuators |
| `/products/hydraulic-power-packs/accumulator-hydraulic-power-packs/` | Bladder/Piston | High Discharge | Stored fluid energy for instantaneous peak flow and emergency backup |
| `/products/hydraulic-power-packs/hand-lever-operated-hydraulic-power-packs/` | Manual Valve | 20 – 200 L | Rugged manual directional valve control for rough field duty |
| `/products/hydraulic-power-packs/hand-pump-operated-hydraulic-power-packs/` | Manual Pump | 5 – 30 L | Zero-power emergency manual backup pumping stations |
| `/products/hydraulic-power-packs/high-low-hydraulic-power-packs/` | Dual Pump | 50 – 500 L | High-flow rapid approach with low-flow high-pressure lock |

---

### Hydraulic Manifold Block Pages (6 Routes)

- **Manifold Blocks Pillar**: `/products/manifold-blocks/`

| Manifold Block Route | Standard / Cavity | Material Grades | Pressure Rating |
|---|---|---|---|
| `/products/manifold-blocks/06-size-manifold-blocks/` | NG6 / CETOP 03 / D03 | Ductile Iron (GGG40) / Aluminum | Up to 315 Bar |
| `/products/manifold-blocks/10-size-manifold-blocks/` | NG10 / CETOP 05 / D05 | Ductile Iron / Forged Steel | Up to 350 Bar |
| `/products/manifold-blocks/cetop-manifold-blocks/` | CETOP 3, 5, 7, 8 | Cast Iron / EN8 Steel | ISO 4401 compliant |
| `/products/manifold-blocks/custom-manifold-blocks/` | Sun, HydraForce, Rexroth | Steel / Aluminum / SS316 | 4-Axis CNC machined logic circuits |
| `/products/manifold-blocks/multi-station-manifold-blocks/` | 2 to 10 Stations | Continuous Cast Ductile Iron | Integrated multi-valve leak-free blocks |

---

### Location & Regional Hub Pages (23 Routes)

- **Master Locations Hub**: `/locations/`
- **Gujarat State Hub**: `/locations/gujarat/`

```text
Location Route Hierarchy:
/locations/
├── /locations/gujarat/ (Gujarat State Hub)
│   ├── /ahmedabad/       (Kathwada, Vatva, Odhav, Naroda GIDC)
│   ├── /surat/           (Sachin, Hazira, Pandesara, Pipodara)
│   ├── /vadodara/        (Makarpura, Savli, Waghodia, Por)
│   ├── /rajkot/          (Metoda, Aji, Shapar-Veraval GIDC)
│   ├── /bhavnagar/       (Chitra, Vartej, Alang Port)
│   ├── /jamnagar/        (Brass machinery, Reliance SEZ)
│   ├── /kutch/           (Gandhidham, Mundra Port, Anjar)
│   ├── /gandhinagar/     (Electronic SEZ, Kolavada)
│   ├── /morbi/           (Ceramic presses & clay equipment)
│   ├── /vapi/            (Chemical, paper & packaging machinery)
│   ├── /ankleshwar/      (Pharma, dyes & chemical equipment)
│   ├── /halol/           (Automotive OEM corridor)
│   │
│   └── Industrial Spokes:
│       ├── /injection-moulding-cylinders/ (Plastics cluster)
│       ├── /ship-breaking-cylinders/      (Marine & Alang cutters)
│       └── /textile-machinery-cylinders/  (Weaving & spinning machinery)
│
└── National State Hubs:
    ├── /locations/maharashtra/    (Pune, Mumbai, Nashik, Aurangabad)
    ├── /locations/madhya-pradesh/ (Indore, Pithampur, Bhopal, Dewas)
    ├── /locations/rajasthan/      (Bhiwadi, Neemrana, Jaipur, Udaipur)
    ├── /locations/karnataka/      (Bengaluru Peenya, Belagavi, Hubli)
    ├── /locations/tamil-nadu/     (Chennai, Coimbatore, Sriperumbudur)
    └── /locations/west-bengal/    (Kolkata, Howrah, Durgapur)
```

---

### Serverless API Endpoints (4 Endpoints)

| Endpoint | Method | Runtime | Operational Purpose | Security / Diagnostic Note |
|---|---|---|---|---|
| `/api/contact` | `POST` | Node.js | Validates general contact inquiries and sends notification via Resend | Sanitizes user input server-side |
| `/api/quote` | `POST` | Node.js | Ingests multi-field technical RFQ payloads and delivers email notification | Validates email, phone, and spec fields |
| `/api/og` | `GET` | Edge | Dynamically generates branded 1200×630 OpenGraph PNG social cards | Contains fallback image response on error |
| `/api/test-email` | `GET` | Node.js | Verifies active Resend API key and email delivery health | **Diagnostic only** — protect or disable in production |

---

## 5. Product Architecture & Data Layer

Product pages are rendered using the composable **Modular Product Page Engine** in `components/product-page/ProductPage.tsx`.

### Section Component Hierarchy
1. `<ProductHero />`: Breadcrumbs, H1, badges, immediate CTA, hero product visual, key specs bar.
2. `<ProductOverview />`: Technical background, core operating mechanics, industrial applications.
3. `<ProductKeyFeatures />`: Highlight cards for mechanical design strengths.
4. `<ProductTechnicalSpecs />`: Structured specification table (Bore, Rod, Stroke, Pressure, Mounting).
5. `<ProductVariants />`: Sub-types and configuration matrix.
6. `<ProductComparison />`: Side-by-side comparison table (e.g., Standard vs Custom).
7. `<ProductEngineering />`: Seal package options, honed tube tolerances (H8/H9), chrome plating specifications.
8. `<ProductManufacturing />`: Step-by-step manufacturing and QC testing workflows.
9. `<ProductIndustries />`: Industry sector badges and application summaries.
10. `<ProductSpotlight />`: Case studies and key mechanical capability callouts.
11. `<ProductRelated />`: Contextual internal cross-links to adjacent product lines.

### Product Data Contract (`components/product-page/types.ts`)

```typescript
export interface ProductPageData {
  seo: {
    title: string;
    description: string;
    url: string;
    image: string;
  };
  hero: HeroData;
  schema: {
    productName: string;
    category: string;
    properties: SchemaProperty[];
  };
  overview?: OverviewData;
  keyFeatures?: KeyFeaturesData;
  technicalSpecs?: TechnicalSpecsData;
  variants?: VariantsData;
  comparisons?: ComparisonData[];
  industries?: IndustriesData;
  engineering?: EngineeringData;
  manufacturing?: ManufacturingData;
  spotlights?: SpotlightData[];
  relatedProducts?: RelatedProductsData;
  productName?: string;
  faqs?: FAQ[];
  cta?: FinalCtaData;
}
```

---

## 6. SEO, AEO & Structured Data Implementation

### Technical SEO & URL Normalization

- **Canonical URL Policy**: Configured with `trailingSlash: true` in `next.config.ts`. All canonical tags enforce trailing slash consistency matching the routing system.
- **Permanent 301 Redirects (`next.config.ts`)**:
  - `/contact` & `/contact/` $\rightarrow$ `/contact-us/`
  - `/about` & `/about/` $\rightarrow$ `/about-us/`
  - `/infrastructure` & `/infrastructure/` $\rightarrow$ `/manufacturing-facility/`
- **Heading Architecture**: Enforces exactly one semantic `<h1>` in the Hero section, followed by structured `<h2>` section headings and `<h3>` component cards.

---

### Robots.txt Current State & Launch Transition

File: `app/robots.ts`

#### Current Status: Maintenance Mode (Under Active Development)
All search engine crawlers and AI bots are currently restricted (`disallow: '/'`) while final quality assurance is conducted:

```typescript
// app/robots.ts (Current configuration)
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', disallow: '/' },
      { userAgent: 'Googlebot', disallow: '/' },
      { userAgent: 'Bingbot', disallow: '/' },
      { userAgent: 'GPTBot', disallow: '/' },
      { userAgent: 'Google-Extended', disallow: '/' },
      { userAgent: 'ClaudeBot', disallow: '/' },
      { userAgent: 'PerplexityBot', disallow: '/' },
      { userAgent: ['AhrefsBot', 'SemrushBot', 'MJ12bot', 'DotBot'], disallow: '/' },
    ],
    sitemap: ['https://honeywellhydraulics.in/sitemap.xml'],
  };
}
```

#### Recommended Production Launch Configuration
Upon production signoff by stakeholders, update `app/robots.ts` to:
- **Allow (`allow: '/'`)**: `Googlebot`, `Googlebot-Image`, `Bingbot`, `GPTBot`, `Google-Extended`, `ClaudeBot`, `PerplexityBot`.
- **Disallow (`disallow: ['/api/', '/thank-you/']`)**: Internal API routes and non-indexable utility endpoints.
- **Keep Blocked Permanently**: Third-party commercial backlink scrapers (`AhrefsBot`, `SemrushBot`, `MJ12bot`, `DotBot`).

---

### Sitemap Architecture

File: `app/sitemap.ts`

The dynamic sitemap generates XML entries from an internal page registry containing all 62 production URLs:
- **Homepage (`/`)**: `changeFrequency: 'weekly'`, `priority: 1.0`
- **Hubs & Conversion (`/products/`, `/locations/`, `/request-quote/`)**: `changeFrequency: 'weekly'` or `'monthly'`, `priority: 0.9`
- **Product Variants & Company Pages**: `changeFrequency: 'monthly'`, `priority: 0.8`
- **Regional City & Spoke Pages**: `changeFrequency: 'monthly'`, `priority: 0.7 – 0.8`

---

### Structured Data (`@graph` JSON-LD)

Structured data is generated via `lib/seo.ts` and `components/product-page/schema.ts`, injected through `components/seo/JsonLd.tsx`.

#### Verified Schema Implementations

1. **Homepage `@graph` (`lib/seo.ts`)**:
   - `Organization`: Legal name, official URL, logo, contact points, social profile links (`sameAs`).
   - `ManufacturingBusiness`: Kathwada address, geo coordinates (`23.035, 72.668`), opening hours.
   - `WebSite`: SearchAction entry point definition.
   - `WebPage`: Canonical URL, inLanguage (`en-IN`), publisher reference.
   - `FAQPage`: Question and acceptedAnswer array.
   - `BreadcrumbList`: Root breadcrumb hierarchy.

2. **Product Page `@graph` (`components/product-page/schema.ts`)**:
   - `Product`: Name, description, image, brand (`Honeywell Hydraulics`), manufacturer link, category, `additionalProperty` (Bore, Stroke, Pressure), and `offers` linking to `/request-quote`.
   - `WebPage`: Page-level schema linked to the product entity.
   - `BreadcrumbList`: Multi-level breadcrumb path.
   - `FAQPage`: Product-specific technical questions.

3. **Location Pages (`data/locations/*.ts`)**:
   - `Service` / `ManufacturingBusiness`: Localized service area, provider reference, city/state hierarchy, local FAQs, and breadcrumbs.

---

### AEO & Agentic Discovery (`llms.txt`, `catalog.md`)

To assist AI-assisted search systems (such as ChatGPT Search, Perplexity AI, Claude, and Google AI Overviews) in discovering structured business and product information:
- **`public/llms.txt`**: Plain-text summary outlining company history, manufacturing capabilities, cylinder/power-pack ranges, quality controls (ISO 9001:2015), and contact channels.
- **`public/catalog.md`**: Markdown-formatted technical catalog detailing cylinder variants, power pack motor/tank ranges, and manifold block sizes.
- **Content Formatting**: Section introductions and FAQ answers are written with concise, quantitative factual summaries to improve passage-level citability.

---

## 7. Location Architecture & Regional Coverage

Location pages are built using `components/templates/location/` to provide structured industrial coverage for Gujarat and key national manufacturing hubs:

### Template Sub-Components
- `<HeroSection />`: Geo-personalized H1 and trust badges.
- `<TrustSection />`: Localized dispatch estimates and client metrics.
- `<BenefitsSection />`: Factory-direct pricing and warranty terms.
- `<ProductsSection />`: Recommended hydraulic equipment for the region.
- `<IndustriesSection />`: Breakdown of local industrial sectors.
- `<CaseStudySection />`: Regional customer application summaries.
- `<CoverageSection />`: Specific industrial zones and GIDC/MIDC estates served.
- `<FAQSection />`: Local supply, delivery, and testing FAQs.
- `<CTASection />`: Quote request trigger.

---

## 8. UI / UX Design System & Component Library

### Brand Color Tokens (`tailwind.config.ts` / `app/globals.css`)

```css
/* Primary Brand Tokens */
--color-honeywell-navy:      #0D1B5C; /* Primary headers, navigation, footer */
--color-honeywell-red:       #E31B23; /* High-intent CTAs and accent highlights */
--color-brand-deepNavy:      #08133F; /* Dark mode and deep footer backgrounds */
--color-brand-technicalBlue:  #1D3563; /* Subheadings and technical badges */
--color-brand-darkSlate:      #334155; /* Body emphasis text */
--color-brand-steelGray:      #64748B; /* Body descriptions */
--color-brand-borderGray:     #CBD5E1; /* Card borders and table dividers */
--color-brand-surfaceGray:    #F8FAFC; /* Alternating section backgrounds */
--color-brand-lightSurface:   #F1F5F9; /* Card surfaces */
```

### Typography System
- **Display & Headings**: `Poppins` (`--font-poppins` via `next/font/google`).
- **Technical Tables & Numbers**: `Roboto` (`--font-roboto` via `next/font/google`).
- **Font Display**: Configured with `display: 'swap'` to reduce layout shifts during webfont loading.

### Reusable UI Primitives (`components/ui/`)
- `Button.tsx`: Standardized button supporting `primary`, `secondary`, `outline`, `ghost`, and `link` variants.
- `Heading.tsx`: Typographic hierarchy component enforcing `hero`, `section`, `subsection`, and `card` variants.
- `Section.tsx` & `Container.tsx`: Standardized section padding (`py-12 md:py-16 lg:py-24`) and container widths (`max-w-7xl`).
- `Card.tsx`: Structural card wrapper with subtle border and elevation transitions.
- `SpecTable.tsx`: Responsive technical specification table renderer.
- `MobileConversionBar.tsx`: Mobile-only sticky bottom bar with direct touch targets for Phone, WhatsApp, and Quote.
- `WhatsAppFloatingCTA.tsx`: Desktop floating button linking directly to WhatsApp.

---

## 9. Image & Asset Architecture

### Storage Directory Structure (`public/images/`)
- `public/images/products/`: Product photos organized by category (cylinders, power packs, manifold blocks).
- `public/images/company/`: Photos of manufacturing equipment (CNC lathes, VMC machines, welding stations, hydrostatic test rigs).
- `public/images/home/`: Hero carousel banners and category preview assets.
- `public/images/shared/`: Official logos (`honeywell-hydraulics-logo-full.png`), client emblems, and background textures.
- `public/images/seo/`: Static OpenGraph social fallback images (`.jpg`).

### Image Format Distribution
- **WebP (`.webp`)**: 78 files (Primary format for product and facility imagery).
- **PNG (`.png`)**: 1 file (Transparent brand logo in `public/images/shared/logos/`).
- **JPG (`.jpg`)**: 2 files (Static OpenGraph image fallbacks in `public/images/seo/`).

### Automated Image Processing (`process_images.py`)
A utility script using `rembg` (background removal) and `Pillow`:
- Strips background clutter and centers equipment on a clean white background.
- Resizes dimensions within an 800×800 bounding box while maintaining aspect ratio.
- Exports to WebP format at 85% quality.

---

## 10. API Specifications & Request Contracts

### 1. `POST /api/quote` — Technical RFQ Ingestion

#### Request Body Contract
```typescript
interface QuoteRequestBody {
  fullName: string;                // Required
  company?: string;                // Optional (defaults to 'Individual')
  email: string;                   // Required, validated
  phone: string;                   // Required, 10-digit Indian standard
  city?: string;                   // Buyer location
  productInterest: string;         // e.g., 'Custom Hydraulic Cylinder'
  industry?: string;               // e.g., 'Plastic Machinery'
  application?: string;            // e.g., 'Injection Moulding Machine'
  pressure?: string;               // Operating pressure in Bar/PSI
  boreSize?: string;               // Bore dimension in mm
  strokeLength?: string;           // Stroke dimension in mm
  flowRate?: string;               // Flow rate in LPM (Power packs)
  quantity?: string;               // Required quantity (default: '1')
  requirementDescription?: string; // Custom technical notes
}
```

#### Status Codes
- `200 OK`: `{ "success": true, "id": "resend_msg_id" }`
- `400 Bad Request`: `{ "error": "Full name, email, and phone number are required." }`
- `500 Server Error`: `{ "error": "Internal server error" }`

---

### 2. `POST /api/contact` — General Inquiries

#### Request Body Contract
```typescript
interface ContactRequestBody {
  fullName: string; // Required
  email: string;    // Required
  phone: string;    // Required
  company?: string; // Optional
  message: string;  // Required inquiry message
}
```

#### Status Codes
- `200 OK`: `{ "success": true, "id": "resend_msg_id" }`
- `400 Bad Request`: `{ "error": "Name, email, and message are required." }`
- `500 Server Error`: `{ "error": "Internal server error" }`

---

### 3. `GET /api/og` — Dynamic OpenGraph Card Generator
- **Runtime**: Edge Runtime
- **Query Parameters**: `?title=Custom+Title`
- **Output**: 1200×630 PNG image featuring Honeywell logo, page title, and brand gradient.

---

### 4. `GET /api/test-email` — Diagnostics
- **Runtime**: Node.js
- **Purpose**: Diagnostic test route for validating Resend API key configuration.
- **Security Guidance**: Disable or restrict access in production environments.

---

## 11. Environment Variables & Security Configuration

### Verified Environment Variables

| Variable Name | Exposure | Required / Optional | Operational Purpose |
|---|---|---|---|
| `RESEND_API_KEY` | Server-only | Required for email | API key from Resend for dispatching lead notifications |
| `SALES_NOTIFICATION_EMAIL` | Server-only | Optional | Destination email address (Defaults to `honeywellhydraulics@gmail.com`) |
| `NEXT_PUBLIC_GA_ID` | Client/Server | Optional | Google Analytics 4 Measurement ID (`G-XXXXXXXXXX`) |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Client/Server | Optional | Google Search Console HTML meta verification token |
| `NODE_ENV` | System | Automatic | Next.js environment identifier (`development` / `production`) |

### Security Headers (`next.config.ts`)

```typescript
// Configured in next.config.ts for all routes /(.*)
const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), geolocation=(), browsing-topics=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://vercel.live https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com https://va.vercel-scripts.com https://*.elevenlabs.io wss://*.elevenlabs.io; frame-src 'self' https://www.google.com https://maps.google.com; media-src 'self' https://*.elevenlabs.io; object-src 'none'; base-uri 'self'; form-action 'self';" },
];
```

---

## 12. Performance & Accessibility Standards

### Performance-Oriented Architecture
- **Static Prerendering**: All 62 public pages are generated as static HTML at build time.
- **Image Optimization**: Images utilize Next.js `<Image>` with explicit width/height and format delivery in WebP/AVIF.
- **Webfont Loading**: Google Fonts (`Poppins`, `Roboto`) are hosted via `next/font/google` using CSS variables to prevent external network hops and reduce layout shift.
- **Client Boundary Isolation**: Interactive components are isolated to leaf nodes; the layout and content sections remain Server Components.

### Accessibility Design
- **Semantic Structure**: Proper use of `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, and `<article>`.
- **Skip Navigation Link**: Accessible `#main-content` skip link implemented in `app/(site)/layout.tsx`.
- **Keyboard Navigation**: Form inputs, mega menus, accordions, and dialogs are accessible via standard keyboard controls.
- **Touch Target Sizing**: Mobile conversion buttons and navigation triggers are designed with minimum 48×48px tap areas.

---

## 13. Testing & Quality Assurance Workflow

### Static & Build Verification

```bash
# 1. Typecheck the codebase
npx tsc --noEmit

# 2. Run linter
npm run lint

# 3. Build and prerender all 62 production pages
npm run build
```

### Manual QA Checklist
1. **Lead Generation**: Submit test entries on `/contact-us/` and `/request-quote/` to confirm Resend delivery to `honeywellhydraulics@gmail.com`.
2. **Mobile Viewports**: Test responsive breakpoints at 320px, 375px, 768px, and 1024px to ensure no horizontal overflow.
3. **Structured Data**: Validate URLs in the Google Rich Results Test to ensure clean schema parsing.
4. **Redirects**: Confirm legacy routes (`/about`, `/contact`, `/infrastructure`) redirect to their canonical equivalents.

---

## 14. Development Setup & NPM Scripts

### Local Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The development server starts at **http://localhost:3000**.

### NPM Scripts (`package.json`)

| Script | Command | Action |
|---|---|---|
| `npm run dev` | `next dev` | Starts local Next.js development server with hot reload |
| `npm run build` | `next build` | Compiles application and prerenders 62 static routes |
| `npm run postbuild` | `next-sitemap --config next-sitemap.config.cjs` | Runs sitemap utility following build completion |
| `npm run start` | `next start` | Boots compiled production build locally for testing |
| `npm run lint` | `eslint` | Executes ESLint across all TypeScript and JavaScript files |

---

## 15. Content Management & Operational Maintenance

| Operational Task | Primary File to Modify | Procedure |
|---|---|---|
| **Add a New Cylinder Variant** | `data/hydraulic-cylinders/[slug].tsx` | 1. Create dataset adhering to `ProductPageData`.<br>2. Add route `app/(site)/products/hydraulic-cylinders/[slug]/page.tsx`.<br>3. Add route to `data/navigation.ts` and `app/sitemap.ts`. |
| **Add a New Location Hub** | `data/locations/[slug].ts` | 1. Add city/state industrial profile.<br>2. Create route `app/(site)/locations/[slug]/page.tsx`.<br>3. Register in `data/navigation.ts` and `app/sitemap.ts`. |
| **Update Factory Address or Phone** | `lib/constants.ts` | Edit `COMPANY_INFO.phone` or `address`. Changes propagate across Header, Footer, Contact Page, and JSON-LD schemas. |
| **Update Homepage Content** | `data/homepage.ts` | Edit hero USPs, client logos, process steps, or FAQ lists. |
| **Optimize New Product Imagery** | `process_images.py` | Place raw photos in source folder, run `python process_images.py`, and link the resulting WebP file in the dataset. |

---

## 16. Production Deployment & Launch Checklist

### Deployment Configuration
- [ ] Connect Git repository to hosting provider (e.g. Vercel).
- [ ] Configure environment variables: `RESEND_API_KEY`, `SALES_NOTIFICATION_EMAIL`, `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.
- [ ] Map custom domain `honeywellhydraulics.in` with SSL certificate.

### Launch SEO Verification
- [ ] **Robots Policy Update**: Update `app/robots.ts` to allow search engine crawlers (`Googlebot`, `Bingbot`) upon stakeholder signoff.
- [ ] **Sitemap Verification**: Confirm accessibility of `https://honeywellhydraulics.in/sitemap.xml`.
- [ ] **Search Console**: Verify property ownership in Google Search Console using the verification meta tag.
- [ ] **Forms Testing**: Execute end-to-end quote submissions to confirm email delivery.
- [ ] **Redirect Verification**: Confirm 301 redirects function correctly on production edge nodes.

---

## 17. Engineering Rules & Development Guidelines

1. **Preserve Real Engineering Specifications**: Never modify product dimensions, pressure boundaries, or mounting standards without verification from Honeywell Hydraulics technical personnel.
2. **Authentic Product Imagery**: Preserve real factory and hardware imagery; avoid generic synthetic AI mockups for industrial equipment.
3. **URL Persistence & Redirects**: Never change an indexed route path without implementing a 301 permanent redirect in `next.config.ts`.
4. **Data-Component Decoupling**: Keep all content, specifications, and navigation trees inside `data/` files rather than hardcoding in JSX components.
5. **Strict Trailing Slash Rule**: Maintain trailing slash consistency on all internal links, canonical URLs, and sitemap entries.
6. **Protect Secrets**: Never expose server-side API keys in client components or commit private `.env.local` files to source control.

---

## 18. Planned Architectural Improvements

The following items represent architectural proposals for future consideration:

1. **Dynamic Technical Knowledge Base (`/blog/`)**: Activating an MDX-driven technical resource section for fluid power engineering guides and maintenance checklists.
2. **Interactive 3D Cylinder Viewer**: Integrating a WebGL/Three.js CAD viewer to visualize stroke and mounting bracket geometries.
3. **Regional Language Localization**: Localizing selected industrial landing pages into Gujarati (`gu-IN`) and Hindi (`hi-IN`).
4. **ERP / CRM Lead Ingestion**: Connecting `/api/quote` directly to internal ERP or CRM webhooks.

---

*Documentation maintained by the Honeywell Hydraulics Technical Engineering & Web Operations Team.*  
*Official Inquiries: [sales@honeywellhydraulics.com](mailto:sales@honeywellhydraulics.com) | Direct Phone: [+91 99243 43873](tel:+919924343873)*
