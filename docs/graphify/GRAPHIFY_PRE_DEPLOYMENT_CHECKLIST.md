# Graphify Pre-Deployment Checklist

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
