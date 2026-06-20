import os

docs_dir = r"c:\Users\DELL\Desktop\Honeywell Seo\website\docs\graphify"
os.makedirs(docs_dir, exist_ok=True)

reports = {
    "GRAPHIFY_DEVELOPMENT_WORKFLOW.md": """# Graphify Development Workflow

This document defines the mandatory Graphify checks and workflow standards that must be adhered to during the development of the Honeywell Hydraulics Next.js application.

## Mandatory Graphify Checks
Before undertaking any of the following tasks, you MUST query the Graphify knowledge base:

1. **Creating new pages**: Query existing route structures and ensure the new page logically fits into the hierarchy.
2. **Modifying routes**: Check the route dependency graph to avoid breaking child routes or layouts.
3. **Refactoring components**: Verify parent/child component dependencies and check for shared import usages.
4. **Updating metadata**: Query metadata inheritance (e.g., from `layout.tsx`) to avoid duplicating or overwriting global tags.
5. **Adding schemas**: Check existing EEAT signals (Organization, ManufacturingBusiness) to ensure structured data is nested correctly.
6. **Creating content silos**: Query the current silo map to establish appropriate Hub-and-Spoke relationships.
7. **Updating internal links**: Assess the internal link network to ensure no orphan pages are created or hub authority is diluted.

## SEO Workflow Integration
Before implementing any SEO tasks, run the following queries to assess the landscape and generate recommendations:
1. **Existing Route Relationships**: `graphify query "List the route hierarchy and layout inheritance for [Target]"`
2. **Content Relationships**: `graphify query "Map the topical cluster around [Target Topic]"`
3. **Schema Relationships**: `graphify query "Analyze the EEAT schema structure across the domain"`
4. **Internal Linking Structure**: `graphify query "Trace the internal linking pathways to and from [Target URL]"`
5. **Location Page Relationships**: `graphify query "Map the Local SEO relationships for [Target City/Region]"`

## Component Workflow Integration
Prevent accidental breakages by validating component changes:
1. **Parent Dependencies**: `graphify query "What components import [Component Name]?"`
2. **Child Dependencies**: `graphify query "What components does [Component Name] rely on?"`
3. **Shared Components**: `graphify query "List all shared dependencies utilized by [Component Name]"`
4. **Import Graph**: `graphify path "[Component Name]" "[Root Layout/Page]"`
5. **Route Impact**: `graphify query "Which routes will be affected by a change to [Component Name]?"`

## Custom Honeywell Queries (Reusable)

### Route Analysis
- **Product Hubs**: `graphify query "Analyze the /products hub routing and its child dependencies"`
- **Product Pages**: `graphify query "Trace layout and metadata inheritance for /products/[slug]"`
- **Industry Pages**: `graphify query "Map the routing structure for /industries"`
- **Application Pages**: `graphify query "Analyze the /applications route inheritance"`
- **Service Pages**: `graphify query "Trace the route impact of /services pages"`
- **Resource Pages**: `graphify query "Map the /resources routing and related content silos"`

### SEO Analysis
- **Missing Metadata**: `graphify query "Identify any routes missing explicit <title> or <meta name='description'> tags"`
- **Missing Schema**: `graphify query "List pages that are missing core EEAT schema like Organization or LocalBusiness"`
- **Weak Internal Linking**: `graphify query "Find pages with fewer than 2 inbound internal links"`
- **Orphan Pages**: `graphify query "Identify all orphan routes with zero inbound internal links"`
- **Canonical Relationships**: `graphify query "Trace the canonical URL structure across all active routes"`

### Content Analysis
- **Hydraulic Cylinders**: `graphify query "Map the content silo and all internal links related to Hydraulic Cylinders"`
- **Hydraulic Power Packs**: `graphify query "Analyze the topic cluster for Hydraulic Power Packs"`
- **Hydraulic Systems**: `graphify query "Trace relationships between Hydraulic Systems content and engineering resources"`
- **Manifold Blocks**: `graphify query "Map the hub-to-silo relationship for Manifold Blocks"`
- **Ahmedabad SEO**: `graphify query "Analyze the Local SEO signals, schema, and routing for the Ahmedabad location"`
""",

    "GRAPHIFY_MONTHLY_AUDIT_PROCESS.md": """# Graphify Monthly Audit Process

Run these established commands monthly to maintain the health of the Honeywell Hydraulics platform.

## Full SEO Audit
Evaluates metadata, indexing readiness, and EEAT health.
```bash
graphify query "Run a comprehensive SEO audit: Check all routes for missing metadata, duplicate tags, and proper canonicalization."
```

## Internal Link Audit
Ensures optimal flow of PageRank and topical authority.
```bash
graphify query "Identify all orphan pages and pages with weak internal linking structures. Verify hub-to-spoke relationships."
```

## Schema Audit
Validates Google Rich Results readiness.
```bash
graphify query "Audit the structured data markup across the site. Verify the presence and correctness of Organization, ManufacturingBusiness, and Product schemas."
```

## Content Silo Audit
Verifies that topic clusters are tightly grouped.
```bash
graphify query "Analyze all content silos (Products, Industries, Applications). Identify missing supporting pages or broken hub-to-silo links."
```

## Image Audit
Ensures all visual assets meet criteria and legacy assets are reused.
```bash
graphify query "Audit all image assets. Cross-reference with REQUIRED_IMAGES_MASTER.md. Flag missing images, placeholder usage, and unoptimized files."
```

## Performance Audit
Reviews Next.js rendering strategies and bundle impact.
```bash
graphify query "Analyze the Server Component vs Client Component ratio. Identify components causing heavy hydration or large bundle sizes."
```
""",

    "GRAPHIFY_PRE_DEPLOYMENT_CHECKLIST.md": """# Graphify Pre-Deployment Checklist

Before merging into `main` or deploying to production, execute this Graphify verification checklist to ensure zero regressions.

## 1. Routes
- [ ] No broken dynamic routes (`/products/[slug]`, `/locations/[region]`).
- [ ] Layout inheritance is intact for new sub-directories.
- [ ] `graphify query "Verify there are no broken route dependencies or unhandled 404 paths"`

## 2. Metadata
- [ ] Global OpenGraph and Twitter tags are uncorrupted.
- [ ] Dynamic metadata overrides (e.g., `generateMetadata`) are resolving correctly.
- [ ] `graphify query "Confirm all newly added or modified routes have valid title and description metadata"`

## 3. Schema (EEAT)
- [ ] Organization and ManufacturingBusiness schemas are valid on appropriate pages.
- [ ] JSON-LD injection scripts have not been stripped out.
- [ ] `graphify query "Verify that schema structures on Product and Location pages are intact and properly nested"`

## 4. Internal Links
- [ ] No new orphan pages were introduced.
- [ ] Hub-to-silo link integrity is maintained.
- [ ] `graphify query "Check for broken internal links and confirm no new orphan pages exist"`

## 5. Images
- [ ] All new components use optimized WebP/AVIF images.
- [ ] No raw placeholders are pushed to production.
- [ ] `graphify query "Audit new components for missing images or non-standard placeholder usage"`

## 6. Accessibility
- [ ] Semantic HTML structures are preserved.
- [ ] Contrast and ARIA labels are maintained on new components.
- [ ] `graphify query "Analyze recent component changes for semantic HTML and ARIA label compliance"`

## 7. Performance
- [ ] Heavy interactive components are lazy-loaded or explicitly declared as `'use client'`.
- [ ] No unintended Client Components have polluted the Server Component tree.
- [ ] `graphify query "Verify that the Client/Server component boundary has not been compromised by recent imports"`
""",

    "GRAPHIFY_BEST_PRACTICES.md": """# Graphify Best Practices: Official Operating Guide

This is the official guide for interacting with Graphify on the Honeywell Hydraulics Next.js platform.

## 1. Query Before You Code
Graphify is your co-pilot. Never blindly modify a component or route. Always query its dependencies, parent layouts, and SEO implications first to understand the blast radius of your changes.

## 2. Leverage the Skill Agent
Use the `/graphify` command natively inside the AI assistant to instantly fetch context before asking coding questions. This ensures the assistant possesses an exact map of the Honeywell repository.

## 3. Prioritize Semantic Connections
When creating documentation or code comments, use explicit references. Graphify's semantic engine picks up on precise terminology (e.g., "See `HydraulicCylinder` schema in `lib/seo`") and builds stronger INFERRED edges.

## 4. Run Audits Incrementally
Don't wait for the monthly audit to catch SEO regressions. When pushing a large PR, run the specific Graphify queries related to your changes (e.g., Schema checks if you touched `seo/`, or Component impact if you touched `Header.tsx`).

## 5. Trust the Route Map
Next.js App Router relies heavily on folder structure. Use Graphify to visualize how `layout.tsx`, `page.tsx`, and `loading.tsx` interact. If a path feels overly nested, query Graphify to see if the layout hierarchy has become unnecessarily deep.

## 6. Maintain the Integrity of the Graph
Ensure the `graphify.config.json` is always respected. Do not attempt to bypass exclusions (like `.next` or `node_modules`). Graphify is designed to index *your* logic, not external dependencies.

## 7. The Roadmap is the Source of Truth
Review the `GRAPHIFY_IMPLEMENTATION_ROADMAP.md` before starting new feature sprints. Always address **Critical** and **High** priority SEO and Architecture issues mapped by Graphify before taking on technical debt.
"""
}

for filename, content in reports.items():
    filepath = os.path.join(docs_dir, filename)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

print("Generated Phase 2 Graphify Workflow documents successfully.")
