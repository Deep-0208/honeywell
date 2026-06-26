# Graph Report - .  (2026-06-26)

## Corpus Check
- 336 files · ~490,369 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 609 nodes · 1243 edges · 31 communities (26 shown, 5 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Homepage Layout Components|Homepage Layout Components]]
- [[_COMMUNITY_SEO Schema & FAQ System|SEO Schema & FAQ System]]
- [[_COMMUNITY_Global Layout (HeaderFooter)|Global Layout (Header/Footer)]]
- [[_COMMUNITY_Navigation & Content Lib|Navigation & Content Lib]]
- [[_COMMUNITY_Build Configuration|Build Configuration]]
- [[_COMMUNITY_Custom Hydraulic Cylinders|Custom Hydraulic Cylinders]]
- [[_COMMUNITY_3-Phase Power Packs|3-Phase Power Packs]]
- [[_COMMUNITY_Welded Cylinders|Welded Cylinders]]
- [[_COMMUNITY_Request Quote Forms|Request Quote Forms]]
- [[_COMMUNITY_DC Mini Power Packs|DC Mini Power Packs]]
- [[_COMMUNITY_High-Low Power Packs|High-Low Power Packs]]
- [[_COMMUNITY_TypeScript Config|TypeScript Config]]
- [[_COMMUNITY_Contact Us Pages|Contact Us Pages]]
- [[_COMMUNITY_Telescopic Cylinders|Telescopic Cylinders]]
- [[_COMMUNITY_Tie-Rod Cylinders|Tie-Rod Cylinders]]
- [[_COMMUNITY_SEO Utilities|SEO Utilities]]
- [[_COMMUNITY_Hydraulic Cylinders Hub|Hydraulic Cylinders Hub]]
- [[_COMMUNITY_Hydraulic Power Packs Hub|Hydraulic Power Packs Hub]]
- [[_COMMUNITY_Content Migration Scripts|Content Migration Scripts]]
- [[_COMMUNITY_Hero Sections|Hero Sections]]
- [[_COMMUNITY_Product Hero Components|Product Hero Components]]
- [[_COMMUNITY_Loading States|Loading States]]
- [[_COMMUNITY_Motion Wrapper Scripts|Motion Wrapper Scripts]]
- [[_COMMUNITY_CTA Banner|CTA Banner]]
- [[_COMMUNITY_Next.js Config|Next.js Config]]
- [[_COMMUNITY_ESLint Config|ESLint Config]]
- [[_COMMUNITY_PostCSS Config|PostCSS Config]]
- [[_COMMUNITY_Tailwind Config|Tailwind Config]]

## God Nodes (most connected - your core abstractions)
1. `Container()` - 46 edges
2. `Section()` - 42 edges
3. `Button` - 29 edges
4. `IconBox()` - 24 edges
5. `COMPANY_INFO` - 23 edges
6. `Heading()` - 22 edges
7. `FAQAccordion()` - 18 edges
8. `compilerOptions` - 16 edges
9. `Badge()` - 12 edges
10. `CTA()` - 12 edges

## Surprising Connections (you probably didn't know these)
- `HeaderProps` --references--> `SiteNavigation`  [EXTRACTED]
  components/Header.tsx → types/navigation.ts
- `MobileMenuProps` --references--> `SiteNavigation`  [EXTRACTED]
  components/MobileMenu.tsx → types/navigation.ts
- `Breadcrumb()` --calls--> `buildBreadcrumbJsonLd()`  [EXTRACTED]
  components/layout/Breadcrumb.tsx → lib/seo.ts
- `SiteLayout()` --calls--> `getDynamicNavigation()`  [EXTRACTED]
  app/(site)/layout.tsx → lib/navigation.ts
- `HomePage()` --calls--> `buildHomepageGraphSchema()`  [EXTRACTED]
  app/(site)/page.tsx → lib/seo.ts

## Communities (31 total, 5 thin omitted)

### Community 0 - "Homepage Layout Components"
Cohesion: 0.05
Nodes (66): IndustryCard(), IndustryCardProps, ProductCard(), ProductCardProps, ActionCard, actionCards, BlogPreview, blogPreviews (+58 more)

### Community 1 - "SEO Schema & FAQ System"
Cohesion: 0.05
Nodes (38): FAQ, FAQAccordion(), FAQAccordionProps, FAQItem(), FAQItemProps, breadcrumbSchema, CAPACITY_ITEMS, faqSchema (+30 more)

### Community 2 - "Global Layout (Header/Footer)"
Cohesion: 0.05
Nodes (28): ABOUT_FAQS, breadcrumbSchema, CAPABILITIES, CORE_VALUES, faqSchema, INDUSTRIES, metadata, organizationSchema (+20 more)

### Community 3 - "Navigation & Content Lib"
Cohesion: 0.08
Nodes (28): HeaderProps, MegaMenuProps, MobileConversionBar(), MobileMenuProps, siteNavigation, CONTENT_ROOT, findMdxFiles(), getAllPages() (+20 more)

### Community 4 - "Build Configuration"
Cohesion: 0.05
Nodes (38): browserslist, dependencies, clsx, @elevenlabs/react, gray-matter, lucide-react, next, next-mdx-remote (+30 more)

### Community 5 - "Custom Hydraulic Cylinders"
Cohesion: 0.07
Nodes (15): ApplicationCardProps, LocationCard(), LocationCardProps, ServiceCardProps, TestimonialCard(), TestimonialCardProps, buildPageSchema(), CustomHydraulicCylindersPage() (+7 more)

### Community 6 - "3-Phase Power Packs"
Cohesion: 0.09
Nodes (8): buildPageSchema(), FAQS, metadata, TECHNICAL_SPECS, ThreePhasePowerPacksPage(), SpecRow, SpecTable(), SpecTableProps

### Community 7 - "Welded Cylinders"
Cohesion: 0.10
Nodes (5): buildPageSchema(), FAQS, metadata, TECHNICAL_SPECS, WeldedHydraulicCylindersPage()

### Community 8 - "Request Quote Forms"
Cohesion: 0.10
Nodes (15): Errors, FormStatus, INITIAL_STATE, LabelledFieldProps, QuoteForm(), QuoteFormPayload, BENEFITS, breadcrumbSchema (+7 more)

### Community 9 - "DC Mini Power Packs"
Cohesion: 0.10
Nodes (5): buildPageSchema(), DcMiniPowerPacksPage(), FAQS, metadata, TECHNICAL_SPECS

### Community 10 - "High-Low Power Packs"
Cohesion: 0.10
Nodes (5): buildPageSchema(), FAQS, HighLowPowerPacksPage(), metadata, TECHNICAL_SPECS

### Community 11 - "TypeScript Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 12 - "Contact Us Pages"
Cohesion: 0.11
Nodes (15): breadcrumbSchema, CONTACT_FAQS, contactPageSchema, faqSchema, localBusinessSchema, metadata, NAP, SERVICE_AREAS (+7 more)

### Community 13 - "Telescopic Cylinders"
Cohesion: 0.11
Nodes (5): buildPageSchema(), FAQS, metadata, TECHNICAL_SPECS, TelescopicHydraulicCylindersPage()

### Community 14 - "Tie-Rod Cylinders"
Cohesion: 0.11
Nodes (5): buildPageSchema(), FAQS, metadata, TECHNICAL_SPECS, TieRodHydraulicCylindersPage()

### Community 15 - "SEO Utilities"
Cohesion: 0.24
Nodes (14): Breadcrumb(), BreadcrumbItem, BreadcrumbProps, buildArticleJsonLd(), buildBreadcrumbJsonLd(), buildFAQJsonLd(), buildOrganizationJsonLd(), buildProductJsonLd() (+6 more)

### Community 16 - "Hydraulic Cylinders Hub"
Cohesion: 0.18
Nodes (11): CylinderFAQs(), CylinderIndustries(), CylinderManufacturingProcess(), CylinderOverview(), CylinderTechnicalSpecs(), CylinderTypesGrid(), buildPageSchema(), HydraulicCylindersHubPage() (+3 more)

### Community 17 - "Hydraulic Power Packs Hub"
Cohesion: 0.20
Nodes (10): buildPageSchema(), HydraulicPowerPacksHubPage(), metadata, PowerPackFAQs(), PowerPackIndustries(), PowerPackManufacturingProcess(), PowerPackOverview(), PowerPackTechnicalSpecs() (+2 more)

### Community 18 - "Content Migration Scripts"
Cohesion: 0.31
Nodes (8): CONTENT_DIR, ensureDir(), fs, generateMdxFrontmatter(), INVENTORY_PATH, main(), parseInventory(), path

### Community 19 - "Hero Sections"
Cohesion: 0.32
Nodes (5): heroCarouselImages, HeroCarousel(), HeroCarouselProps, HeroSection(), trustChips

### Community 20 - "Product Hero Components"
Cohesion: 0.32
Nodes (5): HydraulicCylinderHero(), HydraulicPowerPackHero(), Badge(), BadgeProps, BadgeVariant

### Community 23 - "Motion Wrapper Scripts"
Cohesion: 0.33
Nodes (5): content, fs, fullPath, path, targetFiles

### Community 24 - "CTA Banner"
Cohesion: 0.50
Nodes (3): HomepageCTASection(), CTA(), CTAProps

## Knowledge Gaps
- **232 isolated node(s):** `eslintConfig`, `securityHeaders`, `nextConfig`, `name`, `version` (+227 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `COMPANY_INFO` connect `Global Layout (Header/Footer)` to `Homepage Layout Components`, `SEO Schema & FAQ System`, `Custom Hydraulic Cylinders`, `3-Phase Power Packs`, `Welded Cylinders`, `Request Quote Forms`, `DC Mini Power Packs`, `High-Low Power Packs`, `Contact Us Pages`, `Telescopic Cylinders`, `Tie-Rod Cylinders`, `SEO Utilities`, `Hydraulic Cylinders Hub`, `Hydraulic Power Packs Hub`?**
  _High betweenness centrality (0.068) - this node is a cross-community bridge._
- **Why does `Container()` connect `Homepage Layout Components` to `SEO Schema & FAQ System`, `Global Layout (Header/Footer)`, `Custom Hydraulic Cylinders`, `3-Phase Power Packs`, `Welded Cylinders`, `Request Quote Forms`, `DC Mini Power Packs`, `High-Low Power Packs`, `Contact Us Pages`, `Telescopic Cylinders`, `Tie-Rod Cylinders`, `Hero Sections`, `Product Hero Components`, `CTA Banner`?**
  _High betweenness centrality (0.038) - this node is a cross-community bridge._
- **Why does `Section()` connect `Homepage Layout Components` to `SEO Schema & FAQ System`, `Global Layout (Header/Footer)`, `Custom Hydraulic Cylinders`, `3-Phase Power Packs`, `Welded Cylinders`, `Request Quote Forms`, `DC Mini Power Packs`, `High-Low Power Packs`, `Contact Us Pages`, `Telescopic Cylinders`, `Tie-Rod Cylinders`?**
  _High betweenness centrality (0.032) - this node is a cross-community bridge._
- **What connects `eslintConfig`, `securityHeaders`, `nextConfig` to the rest of the system?**
  _232 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Homepage Layout Components` be split into smaller, more focused modules?**
  _Cohesion score 0.053516819571865444 - nodes in this community are weakly interconnected._
- **Should `SEO Schema & FAQ System` be split into smaller, more focused modules?**
  _Cohesion score 0.047872340425531915 - nodes in this community are weakly interconnected._
- **Should `Global Layout (Header/Footer)` be split into smaller, more focused modules?**
  _Cohesion score 0.05391120507399577 - nodes in this community are weakly interconnected._