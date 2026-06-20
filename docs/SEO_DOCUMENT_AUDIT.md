# SEO Document Audit — Honeywell Hydraulics

**Audited By:** Senior Technical SEO Architect
**Date:** June 7, 2026
**Source Documents:** 20 files across 6 documentation directories

---

## Documents Reviewed

| # | File | Location | Size | Purpose |
|---|---|---|---|---|
| 1 | `honeywell-technical-seo-spec.md` | `docs/seo/` | 61 KB | Title tags, meta, schema, sitemap, robots, CWV, image SEO |
| 2 | `page-inventory.md` | `docs/seo/` | 31 KB | 102-page launch inventory with URLs, keywords, priorities |
| 3 | `honeywell-hydraulics-seo-strategy.md` | `docs/strategy/` | 60 KB | Master strategy: SWOT, personas, keywords, IA, linking |
| 4 | `honeywell-keyword-map.md` | `docs/strategy/` | 36 KB | Full keyword-to-URL mapping |
| 5 | `honeywell-content-strategy.md` | `docs/strategy/` | 49 KB | Content templates, pillar-cluster, editorial calendar |
| 6 | `honeywell-scalable-content-framework-v2.md` | `docs/strategy/` | 8 KB | Scalable MDX content framework |
| 7 | `url_normalization_map.md` | `docs/implementation/` | 6 KB | Canonical URL architecture, 301 redirect mapping |
| 8 | `local_seo_schema.md` | `docs/implementation/` | 4 KB | NAP, LocalBusiness schema, GBP checklist |
| 9 | `eeat_framework.md` | `docs/implementation/` | 4 KB | E-E-A-T templates, reviewer blocks, case studies |
| 10 | `cro_specifications.md` | `docs/implementation/` | 3 KB | CTA audit, forms, lead routing, GA4 tracking |
| 11 | `broken_link_report.md` | `docs/implementation/` | 3 KB | Internal link errors |
| 12 | `missing_content_briefs.md` | `docs/implementation/` | 5 KB | Content gaps |
| 13 | `placeholder_inventory.md` | `docs/implementation/` | 3 KB | Placeholder content to replace |
| 14 | `honeywell-product-page-template.md` | `docs/architecture/` | 47 KB | Product page design blueprint |
| 15 | `honeywell-location-page-template.md` | `docs/architecture/` | 46 KB | Location page design blueprint |
| 16 | `project-architecture.md` | `docs/development/` | 123 KB | Technical stack and component hierarchy |
| 17 | `component-library.md` | `docs/ui/` | 52 KB | UI component specifications |
| 18 | `homepage-wireframe.md` | `docs/ui/` | 81 KB | Homepage section-by-section wireframe |
| 19 | `honeywell-design-system.md` | `docs/ui/` | 44 KB | Design system, colors, typography |
| 20 | `docs/content/*` (30+ files) | `docs/content/` | — | MDX content for all page types |

---

## 1. Existing SEO Rules (Consolidated)

### Title Tags
- **Source:** `honeywell-technical-seo-spec.md` §2, `page-inventory.md`
- Formula: `{Primary Keyword} {Modifier} | Honeywell Hydraulics`
- Length: 50–60 chars. Pipe separator. Brand always last.
- 102 unique title tags are pre-mapped in `page-inventory.md`.

### Meta Descriptions
- **Source:** `honeywell-technical-seo-spec.md` §3
- Length: 150–160 chars. Structure: `{What we do} + {Geo/Trust} + {CTA}`.
- Ends with action phrase. No quotation marks.

### Canonical URLs
- **Source:** `honeywell-technical-seo-spec.md` §4, `url_normalization_map.md`
- Self-referencing on every page. Enforce `https://www.` + trailing slash + lowercase.
- Product pillars sit at root (e.g., `/hydraulic-cylinders/` not `/products/hydraulic-cylinders/`).

### Robots Directives
- **Source:** `honeywell-technical-seo-spec.md` §1, §10
- `index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1`
- AI crawlers (GPTBot, ClaudeBot, PerplexityBot) allowed. Scraper bots (AhrefsBot, SemrushBot) blocked.

---

## 2. Existing Schema Rules

- **Source:** `honeywell-technical-seo-spec.md` §7, §14–17, `local_seo_schema.md`
- JSON-LD format only. Multiple schemas via `@graph` pattern.
- Schema-per-page-type mapping is fully documented.
- `@id` cross-referencing used for Organization entity across all pages.

**Complete schema assignments:**

| Page Type | Schema Types |
|---|---|
| Homepage | Organization + LocalBusiness + WebSite + WebPage + FAQPage |
| Product Pillar | CollectionPage + BreadcrumbList + ItemList |
| Product Page | Product + Offer + BreadcrumbList + FAQPage |
| Industry Page | WebPage + BreadcrumbList + FAQPage |
| Application Page | WebPage + BreadcrumbList |
| Location Page | LocalBusiness + WebPage + BreadcrumbList |
| Blog Article | Article + Person + BreadcrumbList |
| Contact Page | ContactPage + LocalBusiness + BreadcrumbList |

---

## 3. Existing Internal Linking Rules

- **Source:** `honeywell-hydraulics-seo-strategy.md` §3.4, `honeywell-technical-seo-spec.md` §11
- Minimum 3 contextual internal links per page. Maximum 100 total.
- Keyword-rich anchors (60% exact/partial match, 25% natural, 10% branded, 5% generic).
- Every page links UP (to parent pillar) and DOWN (to children).
- Cross-silo linking: Product → Application → Industry.
- Blog articles must contain ≥ 2 product page links.
- Zero orphan pages. Max 3-click depth from homepage.

---

## 4. Existing Metadata Rules

- **Source:** `honeywell-technical-seo-spec.md` §1, §5, §6
- Geo targeting meta tags: `geo.region=IN-GJ`, `geo.placename=Ahmedabad`.
- OG images: 1200×630 JPEG, <300KB, unique per page.
- Twitter cards: `summary_large_image`, reusing OG image.
- `lang="en-IN"` on all pages.

---

## 5. Existing Local SEO Rules

- **Source:** `local_seo_schema.md`, `honeywell-technical-seo-spec.md` §17
- NAP: "Honeywell Hydraulics" / "B-18, Suryam Plaza Estate..." / "+91 9924343873"
- HQ coordinates corrected to **23.035, 72.668** (Kathwada GIDC).
- Service-area pages (Surat, Rajkot, etc.) use HQ address with `areaServed` targeting the remote city.
- GBP primary category: "Hydraulic Equipment Supplier".

---

## 6. Existing Sitemap Rules

- **Source:** `honeywell-technical-seo-spec.md` §9
- Sitemap index with sub-sitemaps: `sitemap-pages.xml`, `sitemap-products.xml`, `sitemap-blog.xml`, `sitemap-images.xml`.
- Priority scale: Homepage 1.0 → Products 0.9 → Individual products 0.8 → Blog 0.7 → Legal 0.2.

---

## 7. Existing Performance Rules

- **Source:** `honeywell-technical-seo-spec.md` §13
- LCP < 1.8s, INP < 150ms, CLS < 0.05 (targets tighter than Google's thresholds).
- Total page weight < 800KB. DOM elements < 800.
- Hero image preloaded with `fetchpriority="high"`. No lazy-loading above fold.

---

## Identified Issues

### Duplicate Recommendations
1. **Schema definitions** appear in three places: `honeywell-technical-seo-spec.md` §7, `local_seo_schema.md`, and `honeywell-hydraulics-seo-strategy.md` §3.1.4. All three agree but are redundant copies.
2. **Title tag formulas** duplicated between `honeywell-technical-seo-spec.md` §2 and `page-inventory.md`.
3. **Internal linking rules** duplicated between `honeywell-technical-seo-spec.md` §11 and `honeywell-hydraulics-seo-strategy.md` §3.4.

### Conflicting Recommendations
1. **Geo coordinates:** `honeywell-technical-seo-spec.md` uses `23.0225, 72.5714` (generic Ahmedabad). `local_seo_schema.md` corrects this to `23.035, 72.668` (actual Kathwada GIDC). **Resolution: Use `23.035, 72.668`.**
2. **Schema type for local business:** `honeywell-technical-seo-spec.md` uses `LocalBusiness`. `local_seo_schema.md` uses `ManufacturingBusiness` (more specific subtype). **Resolution: Use `ManufacturingBusiness`.**
3. **Opening hours:** SEO spec says `closes: 19:00`. Prior `lib/seo.ts` has `closes: 18:00`. **Resolution: Use `19:00` per official docs.**
4. **Location page for Jamnagar:** `page-inventory.md` does not list it, but `docs/content/locations/jamnagar.md` exists with full content. **Resolution: Add Jamnagar to the page inventory.**

### Outdated Recommendations
1. **Font references:** `honeywell-technical-seo-spec.md` references `Inter` font family. The design system (Phase 1.2) specifies `Barlow Condensed` (display), `DM Sans` (body), and `JetBrains Mono` (technical). **Resolution: Use Phase 1.2 fonts.**
2. **Theme color:** `honeywell-technical-seo-spec.md` uses `#0F172A`. Design system uses `#0D1B5C` (Honeywell Navy). **Resolution: Use `#0D1B5C`.**

### Missing Recommendations
1. **Services schema:** No `Service` schema type documented. Service pages should use `Service` + `BreadcrumbList`.
2. **Image sitemap:** Mentioned in sitemap index but no generation strategy documented.
3. **`next-sitemap` configuration:** No implementation file exists yet.
4. **Structured data for case studies:** Mentioned as `Article` but no template provided.
