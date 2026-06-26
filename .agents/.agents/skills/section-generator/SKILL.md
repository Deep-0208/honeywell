---
name: section-generator
description: >
  Add pre-built section components to any existing page using the Honeywell Hydraulics
  section library. Supports 24+ section patterns including product, trust/E-E-A-T, local SEO,
  and conversion sections. Generates the component, wires it into page.tsx, and creates
  the data file if the section is data-driven.
  Use when: user says "add section", "new section", or wants to add content to an existing page.
---

# Section Generator Skill

## Purpose

Add a new section to any existing page using pre-built patterns from the section library. Generates the component code, wires it into the page, and creates data files.

---

## Trigger

Activated when the user:
- Says "add a section", "new section", "add FAQ section", etc.
- Mentions a specific section type by name
- Uses `/new-section` command

---

## Input

1. **Target page** — which page to add the section to (route or file path)
2. **Section type** — which pattern to use (see catalog below)
3. **Position** — where to insert (before/after existing section, or at end)
4. **Content** (optional) — if not provided, generate with placeholder data

---

## Available Section Types

### Product Sections
| # | Section | Data Required | Component Pattern |
|---|---------|---------------|-------------------|
| 1 | Product Overview | Overview text | Two-column: text + image |
| 2 | Key Features | Features array | 3-column icon grid |
| 3 | Technical Specifications | Specs array | SpecTable component |
| 4 | Operating Principle | Steps array | Numbered process |
| 5 | Applications | Applications array | 3-column link cards |
| 6 | Industries Served | Industries array | 4-column link grid |
| 7 | Product Comparison | Comparison data | Table with header row |
| 8 | Download Brochure | PDF URL | Simple centered CTA |

### Trust & E-E-A-T Sections
| # | Section | Data Required | Component Pattern |
|---|---------|---------------|-------------------|
| 9 | Certifications | Certs array | 4-column badge cards |
| 10 | Manufacturing Process | Steps array | Timeline with numbers |
| 11 | Quality Control | Checks + Standards | Two-column: checklist + navy card |
| 12 | Why Choose Us | Differentiators array | 3-column cards with icons |
| 13 | Case Study | Case study object | 3-column challenge/solution/result |
| 14 | Client Logos | Logos array | Auto-scrolling marquee |
| 15 | Testimonials | Testimonials array | 3-column quote cards |

### Local SEO Sections
| # | Section | Data Required | Component Pattern |
|---|---------|---------------|-------------------|
| 16 | Service Areas | Areas array | Two-column: list + map |
| 17 | Location Advantages | Advantages array | 3-column icon cards |
| 18 | Local Industries | Industries array | 4-column link grid |

### Conversion Sections
| # | Section | Data Required | Component Pattern |
|---|---------|---------------|-------------------|
| 19 | Stats Strip | Stats array | 4-column navy bar |
| 20 | FAQ Accordion | FAQs array | Centered accordion |
| 21 | CTA Banner | Title + description | Navy bg CTA component |

### Content Sections
| # | Section | Data Required | Component Pattern |
|---|---------|---------------|-------------------|
| 22 | Standard Hero | H1 + description | Navy bg with breadcrumb |
| 23 | Split Hero | H1 + description + image | Two-column hero |
| 24 | Content Block | Paragraphs | Max-width centered text |

---

## Process

### Step 1 — Identify Section

Show the available section types and let the user choose, or auto-detect from their description.

### Step 2 — Determine Background Color

Read the target page to find the last section's background color. The new section MUST alternate:
- If last section is `bg="white"` → new section is `bg="gray"`
- If last section is `bg="gray"` → new section is `bg="white"`
- Exception: CTA Banner always uses navy bg

### Step 3 — Generate Section Code

Use the exact template from `references/section-library.md`. Replace placeholder content with:
- User-provided content (if given)
- Content from `docs/` folder (check first — content source validation)
- Generated placeholder content (if nothing available)

### Step 4 — Create Data File (if needed)

If the section is data-driven (features, specs, FAQs, etc.):
- Check if data file exists: `data/<page-name>.ts`
- If exists → add new exports to existing file
- If not → create new data file

### Step 5 — Wire into Page

Insert the section component into the target `page.tsx`:
- Add import statement at the top
- Insert component at the correct position
- Update section numbering comments
- Ensure background alternation is maintained

### Step 6 — Show Diff

Display the changes for review. Do NOT auto-commit.

---

## Design System Rules

Every generated section MUST:

- Use `<Section bg="white|gray">` wrapper
- Use `<Container>` for content width
- Use `<Heading variant="section" as="h2">` for title
- Include red divider: `<div className="w-16 h-1 bg-honeywell-red rounded-full" />`
- Use `aria-labelledby` with unique heading ID
- Follow mobile-first responsive classes
- Use `lucide-react` icons only
- Colors from design tokens only (no arbitrary hex)

---

## Example Usage

```
User: /new-section FAQ to about-us page
Agent:
  Adding FAQ section to app/(site)/about-us/page.tsx
  Position: Before CTA Banner (section 15)
  Background: bg="white" (previous section is gray)
  
  Content Source Status:
  - Documentation Found: YES
  - Source: ABOUT_FAQS already defined inline in page
  - Action: Refactor to use FAQAccordion component

  Changes:
  1. Added FAQAccordion import
  2. Inserted FAQ section at position 14
  3. Renumbered CTA Banner to position 15
  
  [Shows diff]
```

```
User: Add a technical specifications section to the custom hydraulic cylinders page
Agent:
  Section type: Technical Specifications (SpecTable)
  Target: app/(site)/products/hydraulic-cylinders/custom-hydraulic-cylinders/page.tsx
  
  Content Source Status:
  - Documentation Found: YES
  - Source: docs/content/products/custom-hydraulic-cylinders.md (specs table)
  - Action: Reuse existing specifications
  
  [Generates section with real specs data]
```
