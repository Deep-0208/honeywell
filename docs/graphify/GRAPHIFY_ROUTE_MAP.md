# Graphify Route Map

## Next.js App Router Dependencies
- **`/` (Homepage)**
  - Depends on `app/layout.tsx`
  - Client components: `HeroBanner`, `ProductGrid`
- **`/products` (Product Hub)**
  - Server components: `ProductList`
  - Routes to: `/products/[slug]`
- **`/industries`**
  - Static generation, depends on `IndustryCard`
- **`/locations/[region]`**
  - Dynamic routing for Local SEO (e.g., Ahmedabad, Gujarat)
