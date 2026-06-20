# Graphify Monthly Audit Process

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
