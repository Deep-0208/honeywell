---
trigger: always_on
---

IMAGE MANAGEMENT RULE

During website development, do not search for, generate, purchase, or upload new images unless absolutely required.

Use the following workflow:

1. Reuse existing assets from:
   legacy-website/images/

2. If a suitable image is unavailable:

   * Use a single placeholder image
   * Define the final image filename
   * Define SEO alt text
   * Add the requirement to REQUIRED_IMAGES_MASTER.md

3. Every page must contain:

   * final image filename
   * SEO alt text
   * image priority (High / Medium / Low)

4. Never block page development because an image is missing.

5. Complete website architecture, content, SEO, schema, internal linking, and page implementation first.

6. After all pages are built:

   * Audit all required images
   * Collect reusable legacy images
   * Create missing images
   * Convert to WebP
   * Replace placeholders in one final image optimization phase.

IMAGE PHASE ALWAYS HAPPENS AFTER PAGE DEVELOPMENT.
