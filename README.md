# Honeywell Hydraulics Next.js Enterprise Architecture

This repository contains the Next.js 15 rebuild of the Honeywell Hydraulics website. The project is architected for enterprise-grade scalability, maximum SEO performance, and deep content integration.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS (with `tailwind-merge` and `clsx`)
- **Icons:** `lucide-react`
- **Content:** MDX (via `next-mdx-remote` and `gray-matter`)
- **SEO & Sitemaps:** `next-sitemap`
- **Image Optimization:** `sharp`
- **Analytics:** `@vercel/analytics` and `@vercel/speed-insights`

## 📁 Folder Architecture

- `/app`: Next.js App Router endpoints, layouts, and pages.
- `/components`: Reusable UI components.
- `/content`: Local MDX files serving as the headless CMS for products, industries, etc.
- `/data`: Static JSON configurations and mapping files.
- `/docs`: Technical blueprints and architectural documentation.
- `/hooks`: Custom React hooks for client-side logic.
- `/lib`: Utility functions, API helpers, and MDX processing logic.
- `/seo`: JSON-LD Schema generators and metadata utilities.
- `/styles`: Global CSS and Tailwind directives.
- `/types`: TypeScript interfaces and type definitions.

## 🛠 Local Development

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run the Development Server:**
   ```bash
   npm run dev
   ```

3. **Build for Production:**
   ```bash
   npm run build
   ```

## 📝 Content Workflow

All dynamic content lives in the `/content` directory as `.mdx` files. Each file requires specific YAML frontmatter (e.g., `title`, `slug`, `seo`) to properly route and generate SEO metadata. 

See the `/docs` folder for detailed frontmatter specifications and component usage.
