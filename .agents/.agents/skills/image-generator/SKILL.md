---
name: image-generator
description: >
  Manage the image requirements workflow for the Honeywell Hydraulics website.
  Audits pages for missing images, generates REQUIRED_IMAGES_MASTER.md entries,
  creates AI image generation prompts (Gemini), Photoshop enhancement prompts,
  and lifestyle image prompts. Follows the image placeholder rules — never blocks
  page development for missing images.
  Use when: user says "generate images", "image audit", "missing images", or needs
  to plan the image phase for completed pages.
---

# Image Generator Skill

## Purpose

Manage the image lifecycle for the Honeywell Hydraulics website:
1. Audit pages for missing/placeholder images
2. Generate structured entries for `REQUIRED_IMAGES_MASTER.md`
3. Create AI generation prompts (Gemini / DALL-E)
4. Create Photoshop enhancement prompts
5. Create lifestyle/marketing image prompts

**CRITICAL**: This skill follows the image placeholder rules. Images are ALWAYS the LAST phase. Never block page development because an image is missing.

---

## Trigger

Activated when the user:
- Says "generate images", "image audit", "missing images", "image prompts"
- Needs to plan image requirements for a page
- Uses `/generate-images` command
- Asks about image status across the site

---

## Input

1. **Scope** — one of:
   - Single page (e.g., "about-us")
   - Page category (e.g., "all product pages")
   - Full site audit
2. **Mode** — one of:
   - `audit` — List all missing images (default)
   - `prompts` — Generate AI image creation prompts
   - `full` — Audit + prompts + REQUIRED_IMAGES entries

---

## Process

### Step 1 — Scan for Image Requirements

For each page in scope, scan:
- `page.tsx` and section components for `{/* IMAGE REQUIREMENT: ... */}` comments
- `<Image>` components with placeholder paths
- `<div>` placeholders with icon-only content (indicating missing image)
- Existing entries in `REQUIRED_IMAGES.md`

### Step 2 — Check Legacy Assets

Search `legacy-website/images/` for reusable assets:
- Match by product name, category, or keyword
- Check image quality (resolution, format)
- Flag reusable images vs. needs-replacement

### Step 3 — Generate Output

---

## Output: Missing Image List

```markdown
# Image Audit: <Scope>

**Date:** <date>
**Pages Scanned:** <count>
**Images Found:** <count>
**Images Missing:** <count>

## Missing Images

| # | Page | Image | Path | Alt Text | Priority | Legacy Available |
|---|------|-------|------|----------|----------|-----------------|
| 1 | About Us | Hero image | /images/about/hero.webp | ... | High | ❌ |
| 2 | Products | Cylinder card | /images/products/cylinders.webp | ... | High | ✅ legacy/... |
```

---

## Output: REQUIRED_IMAGES_MASTER.md Entries

For each missing image, generate a structured entry:

```markdown
## <Page Name> Page

| Asset | Status | Source | Path | Alt Text | Priority |
|---|---|---|---|---|---|
| <Image Name> | ❌ REQUIRED | Legacy or generate | `/images/<category>/<filename>.webp` | <SEO alt text — descriptive, keyword-rich> | High / Medium / Low |
```

### Alt Text Rules
- Descriptive, not decorative ("Image of..." is banned)
- Include primary keyword naturally
- Include brand name for hero/product images
- Format: `<Description> - <Context/Brand>`
- Example: `Custom Hydraulic Cylinder Manufacturer in Ahmedabad - Honeywell Hydraulics`

### File Naming Rules
- Lowercase, hyphenated: `custom-hydraulic-cylinder-manufacturer.webp`
- Include primary keyword in filename
- Organized by category: `/images/products/`, `/images/about/`, `/images/industries/`

### Priority Classification
- **High**: Hero images, product page main images, OG images
- **Medium**: Section illustrations, feature images, process diagrams
- **Low**: Avatar placeholders, decorative backgrounds, icon alternatives

---

## Output: AI Image Generation Prompts (Gemini)

For each missing image, generate a prompt optimized for Gemini image generation:

```markdown
### Image: <filename>

**Gemini Prompt:**
"Professional industrial photograph of <subject>. 
Setting: Modern manufacturing facility with CNC machines visible in background.
Style: Clean, well-lit, corporate industrial photography. 
Color palette: Neutral whites and grays with subtle blue/navy accents.
Composition: <specific framing instructions>.
Resolution: <width>x<height>px.
Quality: Sharp focus, professional lighting, no text overlays.
Brand feel: Siemens/ABB/Festo industrial aesthetic — modern, precise, trustworthy."

**Specifications:**
- Dimensions: <width>x<height>px
- Format: WebP
- Max file size: <size>KB
- Background: <white/transparent/factory>
```

### Prompt Templates by Image Type

#### Product Images
```
"Professional product photograph of a [product name], isolated on a clean white background.
The [product] should be shown at a 3/4 angle, highlighting the [key visual feature].
Lighting: Studio lighting with soft shadows. No text or labels.
Style: Technical product photography similar to Parker Hannifin or Bosch Rexroth catalogs.
Resolution: 800x800px. Sharp focus on engineering details."
```

#### Factory/Manufacturing Images
```
"Interior of a modern hydraulic manufacturing facility in India.
Show: CNC turning center actively machining a steel cylinder barrel.
Workers wearing safety gear. Clean, organized workshop floor.
Lighting: Natural + industrial lighting. No lens flare.
Style: Documentary industrial photography. Professional, not stock-photo generic.
Resolution: 1200x800px."
```

#### Application/Industry Images
```
"Industrial [application] scene showing hydraulic equipment in operation.
Environment: [specific industry setting — e.g., injection moulding factory floor].
Focus on: The hydraulic [cylinder/power pack] integrated into the [machine/system].
Style: Real-world industrial environment, not studio.
Resolution: 800x600px."
```

---

## Output: Photoshop Enhancement Prompts

For legacy images that need enhancement:

```markdown
### Image: <filename>

**Source:** legacy-website/images/<original-file>

**Photoshop Tasks:**
1. Remove old branding/watermarks
2. Color correct to match brand palette (neutral, no yellow tint)
3. Crop to <width>x<height>px
4. Remove background / replace with clean white
5. Adjust exposure and contrast for web display
6. Export as WebP, quality 80, max <size>KB

**Generative Fill Prompts (Photoshop AI):**
- "Clean white studio background"
- "Modern manufacturing facility background"
- "Remove text overlay and extend background"
```

---

## Output: Lifestyle Image Prompts

For marketing and hero images:

```markdown
### Image: <filename>

**Lifestyle Prompt:**
"An Indian engineer in safety gear inspecting a large hydraulic cylinder 
in a well-organized manufacturing facility. He is using a micrometer to 
measure the piston rod diameter. Background shows CNC machines and 
organized tool racks. Natural lighting from factory windows.
Professional, authentic, not posed. Documentary style.
Resolution: 1200x800px."

**Usage:** Hero section background, About Us page
**Mood:** Professional, competent, quality-focused
```

---

## Image Specifications Reference

| Image Type | Dimensions | Format | Max Size | Quality |
|-----------|------------|--------|----------|---------|
| Product hero | 800×800px | WebP | 100KB | 80 |
| Product card | 800×600px | WebP | 80KB | 80 |
| OG image | 1200×630px | JPEG | 300KB | 85 |
| Section illustration | 800×600px | WebP | 80KB | 80 |
| Client logo | 240×120px | PNG/WebP | 30KB | 100 |
| Avatar | 100×100px | WebP | 20KB | 80 |
| Hero background | 1920×1080px | WebP | 200KB | 75 |

---

## Example Usage

```
User: /generate-images audit all product pages
Agent:
  Scanning 14 product pages...
  
  # Image Audit: Product Pages
  
  Pages Scanned: 14
  Images Found: 1 (hero carousel)
  Images Missing: 13
  
  | # | Page | Image | Priority | Legacy |
  |---|------|-------|----------|--------|
  | 1 | Custom Cylinders | Hero image | High | ❌ |
  | 2 | Tie Rod Cylinders | Hero image | High | ❌ |
  ...

  Would you like me to generate:
  1. REQUIRED_IMAGES_MASTER.md entries
  2. Gemini generation prompts
  3. Both
```

```
User: /generate-images prompts for about-us page
Agent:
  Missing images: 2 (factory hero, capabilities image)
  
  ### Image 1: about-us-hero.webp
  **Gemini Prompt:** "Professional aerial view of a hydraulic manufacturing facility..."
  
  ### Image 2: manufacturing-capabilities.webp
  **Gemini Prompt:** "CNC turning center machining a steel hydraulic cylinder barrel..."
```
