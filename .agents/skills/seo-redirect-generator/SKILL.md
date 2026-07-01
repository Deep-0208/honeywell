---
name: seo-redirect-generator
description: Parses SEO crawler Excel exports (like internal_all.xlsx) to generate Next.js 301 redirect maps for safe site migrations.
---

# SEO Redirect Generator Workflow

When requested to generate redirects from a crawler export, follow these steps:

1. **Read the Export:** Use a Python script with `pandas` to read the target `.xlsx` or `.csv` file.
2. **Extract HTML URLs:** Filter the data where `Content Type` contains `text/html` and extract the `Address` column.
3. **Analyze Local Codebase:** Scan the Next.js `app/` directory (or `data/`) to understand the new URL structure (e.g., `/locations/[slug]`, `/products/[slug]`).
4. **Map URLs:** Create a Python dictionary mapping the old WordPress URLs (removing the root domain) to the new Next.js routes. For URLs that no longer exist, map them to the closest parent category or the homepage.
5. **Update next.config.ts:** Use file replacement tools to inject the mapped redirects into the `async redirects()` array in `next.config.ts`. Set `permanent: true` for all of them.
