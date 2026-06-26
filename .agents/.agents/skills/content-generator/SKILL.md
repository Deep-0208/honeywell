---
name: content-generator
description: >
  Generate SEO-optimized content for any Honeywell Hydraulics page. Outputs all content
  elements: SEO title, meta description, H1, intro, section copy, FAQs, internal linking
  suggestions, CTA copy, and schema content. Follows the content-first workflow with
  mandatory source validation from /docs before generating new content.
  Use when: user says "generate content", "write content", "content for page", or needs
  SEO copy for a new or existing page.
---

# Content Generator Skill

## Purpose

Generate complete, SEO-optimized content for any page type. Outputs structured content that can be directly used in page generation or page improvement.

---

## Trigger

Activated when the user:
- Says "generate content", "write content", "create content"
- Needs SEO copy for a new page
- Uses `/generate-content` command

---

## Input

1. **Page name** — what the page is about (e.g., "Custom Hydraulic Cylinders")
2. **Page type** — product / industry / application / location / service / resource
3. **Primary keyword** (optional — auto-suggested from page name)
4. **Target audience** (optional — default: "OEMs, SPM builders, maintenance engineers")
5. **Tone** (optional — default: "Technical-professional, engineering-focused, authoritative")

---

## CRITICAL: Content Source Validation (MANDATORY)

Before generating ANY content, check existing documentation:

```
Content Source Status:
- Documentation Found: YES / NO
- Source File(s): <list all matching files>
- Action: Reuse Existing Content / Generate New Content
```

**Search locations (in order):**
1. `docs/content/` — Pre-approved content
2. `docs/` — Root documentation
3. `legacy-website/` — Legacy content for migration
4. `data/` — Existing data files
5. `website/content/` — Content directory in website

**Rules:**
- If content exists → Reuse. Restructure for SEO. Do NOT rewrite.
- Preserve technical accuracy, specifications, and business messaging.
- Only improve: SEO structure, heading hierarchy, keyword placement, readability.
- If content does NOT exist → Generate following the framework below.

---

## Output Structure

Generate ALL of the following elements:

### 1. SEO Title
- 50-60 characters
- Primary keyword FIRST
- Include location ("Ahmedabad") where relevant
- Include brand ("Honeywell Hydraulics") at end
- Format: `<Primary Keyword> | Honeywell Hydraulics`

### 2. Meta Description
- 150-160 characters
- Include primary keyword naturally
- Include a CTA ("Request a quote", "Contact us")
- Compelling, benefit-focused language
- Include location where relevant

### 3. H1 Heading
- Different from title tag (not identical)
- Include primary keyword naturally
- 5-12 words ideal
- Engineering-focused, not marketing-fluffy

### 4. Introduction Content
- 2-3 paragraphs (150-250 words)
- Primary keyword in first sentence
- Define the product/service/topic
- Establish Honeywell Hydraulics' expertise
- Include a secondary keyword

### 5. Section Copy
For each page section, generate:
- **Section heading** (H2 level)
- **Section description** (1-2 sentences below heading)
- **Body content** (section-specific: features, specs, process steps, etc.)

Content requirements per page type:

#### Product Pages
- Product overview (what, how, why)
- 6 key features with descriptions
- Technical specifications (parameter + value pairs)
- 4-6 application descriptions
- 6 advantages/differentiators
- Content word count: 800+ words total

#### Industry Pages
- Industry overview (challenges + hydraulic solutions)
- 3-4 products for this industry
- Technical requirements specific to industry
- 1 case study (challenge → solution → result)
- Content word count: 600+ words total

#### Location Pages
- Local presence description
- Local industries served
- Service area coverage
- Location advantages
- Content word count: 500+ words total

### 6. FAQs
- 5-8 questions per page
- Question format: natural language, how users actually search
- Include question-based keywords ("What is...", "How does...", "Why should...")
- Answers: 50-150 words each, technically accurate
- Include internal links in answers where relevant

### 7. Internal Linking Suggestions
```
Outbound links (this page → other pages):
- /products/<related>/ — anchor: "<product name>"
- /industries/<related>/ — anchor: "hydraulic solutions for <industry>"
- /request-quote/ — anchor: "request a custom quote"
- /contact-us/ — anchor: "contact our engineering team"

Inbound link opportunities (other pages → this page):
- Homepage products section → this product
- Related product pages → cross-link
- Industry pages → product reference
```

### 8. CTA Copy
For each CTA on the page:
- **Hero CTA**: Primary action (e.g., "Request Custom Quote")
- **Mid-page CTA**: Secondary action (e.g., "View Full Product Range")
- **Final CTA**: Closing conversion (e.g., "Get Engineering Consultation")
- **Phone CTA**: Direct contact (e.g., "Call Our Engineers: +91 9924343873")

### 9. Schema Content
Content specifically for JSON-LD schemas:
- **Product name** (for Product schema)
- **Product description** (for Product schema)
- **FAQ Q&A pairs** (for FAQPage schema)
- **Breadcrumb names** (for BreadcrumbList schema)
- **WebPage name and description** (for WebPage schema)

---

## Content Quality Standards

### Honeywell Hydraulics Voice
- **Technical-professional**: Use engineering terminology correctly
- **Authoritative**: Cite standards (ISO, EN, NFPA), materials, testing protocols
- **Specific**: Include measurements, pressures, tolerances — not vague claims
- **Manufacturing-focused**: "We design, machine, assemble, and test" — not "We provide solutions"

### SEO Writing Rules
- Primary keyword in first 100 words
- Keywords used naturally — NEVER stuffed
- Use semantic/LSI keywords throughout (not exact-match repetition)
- Short paragraphs (2-4 sentences)
- Bullet points for scanability
- Active voice preferred
- No generic filler ("In today's world...", "It goes without saying...")

### E-E-A-T Content Signals
Include these trust signals naturally in content:
- Founding year: "Since 2018"
- Location: "Ahmedabad, Gujarat"
- Certifications: "ISO 9001:2015"
- Testing: "100% hydrostatic pressure tested"
- Materials: "EN 10204 Type 3.1 material certificates"
- Capacity: "500+ cylinders manufactured"
- Industries: "25+ industries served"

---

## Output Format

Generate content as a structured markdown document:

```markdown
# Content for: <Page Name>

## Content Source Status
- Documentation Found: YES / NO
- Source File(s): <files>
- Action: Reuse / Generate

---

## SEO Title
<title>

## Meta Description
<description>

## H1
<h1>

---

## Introduction
<paragraphs>

---

## Section: <Name>
### Heading: <H2 text>
### Description: <subtitle>
### Content:
<body content>

---

## FAQs
1. **Q:** <question>
   **A:** <answer>

---

## Internal Links
### Outbound
- <link suggestions>

### Inbound Opportunities
- <link suggestions>

---

## CTA Copy
- Hero: <text>
- Mid-page: <text>
- Final: <text>

---

## Schema Content
- Product Name: <name>
- Product Description: <desc>
- Breadcrumb: Home > <Category> > <Page>
```

---

## Example Usage

```
User: /generate-content for DC Mini Power Packs product page
Agent:
  Content Source Status:
  - Documentation Found: YES
  - Source File(s): docs/content/products/dc-mini-power-packs.md
  - Action: Reuse Existing Content — restructuring for SEO

  # Content for: DC Mini Power Packs

  ## SEO Title
  DC Mini Hydraulic Power Pack Manufacturer Ahmedabad | Honeywell Hydraulics

  ## Meta Description
  DC mini hydraulic power pack manufacturer in Ahmedabad. 12V & 24V compact power units
  for mobile hydraulic applications. ISO certified. Request a quote today.

  ## H1
  DC Mini Hydraulic Power Pack — Compact 12V & 24V Units

  [... full content output ...]
```

```
User: /generate-content for Surat location page
Agent:
  Content Source Status:
  - Documentation Found: NO
  - Action: Generate New Content

  [... generates location-specific content ...]
```
