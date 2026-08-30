# Agent Rules & Constraints

## AI Bot Policy (Production Unlocked)
**Status**: UNBLOCKED FOR PRODUCTION. Search engine crawlers (Googlebot, Bingbot) and AI discovery bots (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) are enabled in `app/robots.ts` to maximize search and AI citation visibility. Commercial scraper bots (Ahrefs, Semrush, etc.) remain restricted.

## Image Generation Destination
**Rule**: Always move generated OG images AND ANY OTHER IMAGES you generate directly to the `website/public/images/og` folder. Do not leave them in temporary directories.

## Hero Image Styling & Sizing
**Rule**: When styling hero images or product images inside `.relative > .object-cover` containers, DO NOT use padding classes (like `p-8`) on the `<Image>` tag that unnecessarily shrink the image. Use `object-contain` (or `object-cover` without padding) to ensure the image properly fits the container and maintains consistent sizing across all pages.

## IndexNow & Search Engine Indexing Protocol
- **IndexNow Key**: `7b83d95e0c6a48f2913e5a7b9c1d3f5e`
- **Key Verification File**: `public/7b83d95e0c6a48f2913e5a7b9c1d3f5e.txt`
- **Submission Command**: `npm run indexnow` (executes `scripts/submit-indexnow.mjs`)
- **Action on New Pages**: Whenever new routes or pages are created/updated, always run `npm run indexnow` to broadcast the changes to Bing, Yandex, Seznam, and partner engines.
- **Domain Configuration**:
  - Apex domain `https://honeywellhydraulics.in` (Production)
  - `https://www.honeywellhydraulics.in` (301 Permanent Redirect to apex)
  - All HTTP requests 308 redirect to HTTPS.

## Mandatory Branching & Deployment Workflow (STRICT)
**Rule**: Always make changes in the `development` branch first!
1. **Active Work Branch**: All new features, page changes, code updates, and fixes MUST be written and committed on the `development` branch.
2. **Local & Preview Verification**: Test locally (`http://localhost:3000`) and on Vercel preview (`honeywell-two.vercel.app`).
3. **Merge to Master for Production**: Only merge `development` into `master` after changes are verified and approved for production release.
4. **Never Commit Directly to Master**: Do not make untested direct changes on `master`.


