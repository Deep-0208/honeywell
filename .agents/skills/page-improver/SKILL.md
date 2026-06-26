---
name: page-improver
description: >
  Audit and improve existing pages for SEO, E-E-A-T, CRO, and UI/UX compliance.
  Runs a scored checklist across 4 categories: SEO, E-E-A-T, CRO, UI/UX.
  Generates a prioritized fix list and applies fixes automatically with user approval.
  Use when: user says "improve page", "audit page", "fix page", or mentions SEO/design issues.
---

# Page Improver Skill

## Purpose

Audit an existing page across **4 dimensions** (SEO, E-E-A-T, CRO, UI/UX), generate a scored report, and apply fixes automatically with user approval.

---

## Trigger

Activated when the user:
- Says "improve this page", "audit this page", "fix this page"
- Mentions specific issues: "SEO", "mobile", "accessibility", "conversion"
- Uses `/improve-page` command

---

## Input

1. **Target page** — file path or route (e.g., `/about-us` or `app/(site)/about-us/page.tsx`)
2. **Focus area** (optional) — `seo`, `eeat`, `cro`, `ui`, or `all` (default: `all`)

---

## Process

### Step 1 — Read the Page

Read the target `page.tsx` and ALL its imported section components, data files, and styles.

### Step 2 — Run Audit

Score each category on a 0-100 scale.

---

## Audit Categories

### A. SEO Audit (25 points max)

| Check | Points | Pass Criteria |
|-------|--------|---------------|
| **Title Tag** | 3 | Present, 50-60 characters, primary keyword included |
| **Meta Description** | 3 | Present, 150-160 characters, CTA included |
| **H1 Tag** | 3 | Exactly ONE per page, primary keyword included |
| **Heading Hierarchy** | 2 | h1 → h2 → h3 (no level skipping) |
| **Keyword Coverage** | 3 | Primary keyword in first 100 words, natural usage throughout |
| **Semantic Keywords** | 2 | LSI/semantic keywords present in body content |
| **Internal Links** | 3 | 3+ internal links to related pages, descriptive anchor text |
| **Schema Validation** | 3 | BreadcrumbList + WebPage minimum, type-specific schemas present |
| **Content Depth** | 3 | Sufficient word count (products: 800+, content: 1500+) |

### B. E-E-A-T Audit (25 points max)

| Check | Points | Pass Criteria |
|-------|--------|---------------|
| **Certifications** | 5 | ISO 9001:2015 or relevant certifications mentioned |
| **Experience Signals** | 5 | Founding year, "since 2018", client count, production numbers |
| **Trust Indicators** | 5 | Client logos, testimonials, case studies present |
| **Contact Visibility** | 5 | Phone, email, or quote CTA visible (not buried in footer only) |
| **Technical Authority** | 5 | Engineering specs, material standards, testing protocols cited |

### C. CRO Audit (25 points max)

| Check | Points | Pass Criteria |
|-------|--------|---------------|
| **CTA Placement** | 5 | Primary CTA above fold, secondary CTAs in mid-page sections |
| **Quote Conversion Path** | 5 | Clear path: content → value prop → CTA → /request-quote/ |
| **Lead Generation Flow** | 5 | Phone, WhatsApp, quote form accessible within 1 click |
| **CTA Clarity** | 5 | CTAs use action verbs ("Request Quote" not "Submit"), primary=red |
| **CTA Density** | 5 | At least 3 CTAs on page (hero, mid-page, final navy banner) |

### D. UI/UX Audit (25 points max)

| Check | Points | Pass Criteria |
|-------|--------|---------------|
| **Visual Hierarchy** | 5 | Clear heading → description → content → CTA flow per section |
| **Mobile Readability** | 5 | Responsive text sizes, no fixed widths, touch targets ≥ 48px |
| **Spacing Consistency** | 5 | Uses `<Section>` + `<Container>`, consistent gaps and margins |
| **Component Reuse** | 5 | Uses `<Heading>`, `<Button>`, `<Section>`, `<Container>` — no raw HTML equivalents |
| **Design System Compliance** | 5 | Colors, fonts, shadows from DESIGN_SYSTEM.md — no arbitrary values |

---

## Step 3 — Generate Report

Output a structured report:

```markdown
# Page Audit Report: <Page Name>

**Route:** `/route/`
**Date:** <date>

## Scores

| Category | Score | Status |
|----------|-------|--------|
| SEO | XX/25 | ✅ / ⚠️ / ❌ |
| E-E-A-T | XX/25 | ✅ / ⚠️ / ❌ |
| CRO | XX/25 | ✅ / ⚠️ / ❌ |
| UI/UX | XX/25 | ✅ / ⚠️ / ❌ |
| **Overall** | **XX/100** | **Classification** |

### Classification
- 95+ → 🟢 Production Ready
- 90+ → 🟢 Excellent
- 80+ → 🟡 Good
- 70+ → 🟠 Needs Work
- <70 → 🔴 Blocked

## Issues Found

### 🔴 Critical (Must Fix)
1. Issue description → Proposed fix

### 🟡 Warning (Should Fix)
1. Issue description → Proposed fix

### 💡 Suggestion (Nice to Have)
1. Suggestion → Proposed improvement
```

---

## Step 4 — Apply Fixes

After presenting the report, ask:

> "I found X issues. Would you like me to fix them? I'll show the diff before applying."

**Auto-fixable issues:**
- Missing meta title/description → Generate and add
- Missing schema → Generate BreadcrumbList + WebPage
- Raw HTML headings → Replace with `<Heading>` component
- Missing aria-labelledby → Add to sections
- Missing red divider → Add after headings
- Background alternation violations → Fix bg props
- Missing CTAs → Add section CTA buttons
- Missing internal links → Add relevant links

**Manual review required:**
- Content rewrites (keyword insertion, E-E-A-T content)
- Layout changes (grid restructuring)
- New section additions
- Image requirements

---

## Design System Compliance Checks

### Color Violations
- ❌ `text-[#hex]` with non-standard hex → ✅ Replace with design token
- ❌ `bg-red-500` → ✅ `bg-honeywell-red`
- ❌ `text-gray-600` → ✅ `text-brand-steelGray`

### Component Violations
- ❌ `<h2 className="text-3xl">` → ✅ `<Heading variant="section" as="h2">`
- ❌ `<button className="...">` → ✅ `<Button variant="primary">`
- ❌ `<div className="max-w-7xl mx-auto px-4">` → ✅ `<Container>`
- ❌ `<section className="py-16">` → ✅ `<Section bg="white">`

### Spacing Violations
- ❌ Fixed padding on mobile (`p-8`) → ✅ Responsive (`p-4 sm:p-6 md:p-8`)
- ❌ Fixed text size (`text-xl`) → ✅ Responsive (`text-lg sm:text-xl md:text-2xl`)
- ❌ Fixed grid gap (`gap-8`) → ✅ Responsive (`gap-4 sm:gap-6 md:gap-8`)

---

## Example Usage

```
User: /improve-page about-us
Agent:
  Reading: app/(site)/about-us/page.tsx (798 lines)
  Scanning 0 section components (all inline)
  
  # Page Audit Report: About Us

  | Category | Score | Status |
  |----------|-------|--------|
  | SEO | 22/25 | ✅ Excellent |
  | E-E-A-T | 25/25 | ✅ Perfect |
  | CRO | 20/25 | 🟡 Good |
  | UI/UX | 18/25 | 🟡 Good |
  | **Overall** | **85/100** | **🟡 Good** |

  ## 🔴 Critical
  1. Section headers use raw `<h3>` instead of `<Heading>` in Mission/Vision

  ## 🟡 Warning
  1. CTA in hero has no "Request Quote" button (only general CTAs)
  2. Missing aria-labelledby on 3 sections

  Found 6 auto-fixable issues. Apply fixes? [Shows diff]
```

```
User: /improve-page products/hydraulic-cylinders focus:seo
Agent: [Runs SEO audit only, detailed keyword analysis]
```
