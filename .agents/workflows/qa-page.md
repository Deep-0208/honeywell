---
name: qa-page
description: >
  Run a comprehensive quality assurance check on any page before deployment.
  Generates a scored audit report across 5 categories: SEO, Performance,
  Accessibility, UI/UX, and Conversion. Classifies pages as Production Ready,
  Excellent, Good, Needs Work, or Blocked.
  Use when: user wants to validate a page before launch, or says "QA", "quality check",
  "is this page ready".
argument-hint: "<page route or file path>"
---

# /qa-page — Quality Assurance Workflow

Run a comprehensive quality check on any page. Generates a scored report with classification.

---

## Trigger

User runs `/qa-page <route>` or asks for a quality check on a specific page.

---

## Input

1. **Target page** — route (e.g., `/about-us`) or file path
2. **Strictness** (optional) — `standard` (default) or `strict` (for production launch)

---

## Process

### 1. Read Target Page

- Read `page.tsx` and all imported section components
- Read the data file (if external)
- Read associated styles

### 2. Run 5-Category Audit

Score each category on a 0-20 scale (100 points total).

---

## Scoring System

### A. SEO Score (0-20)

| Check | Points | How to Verify |
|-------|--------|---------------|
| Title tag present, 50-60 chars | 2 | Read `metadata` export |
| Meta description present, 150-160 chars | 2 | Read `metadata` export |
| Exactly ONE H1 per page | 2 | Count `<h1>` and `<Heading variant="hero">` |
| H2 hierarchy (one per section) | 2 | Verify heading tags follow h1→h2→h3 |
| Primary keyword in first 100 words | 2 | Check hero/intro text |
| BreadcrumbList schema present | 2 | Check for JsonLd with BreadcrumbList |
| WebPage schema present | 2 | Check for JsonLd with WebPage type |
| FAQPage schema (if FAQs exist) | 2 | Check if FAQ section has matching schema |
| 3+ internal links | 2 | Count `<Link href>` and `<Button href>` |
| Canonical URL set | 2 | Check `metadata.alternates.canonical` |

### B. Performance Score (0-20)

| Check | Points | How to Verify |
|-------|--------|---------------|
| Server Component (no unnecessary 'use client') | 4 | Check for `'use client'` directive |
| No inline `<style>` tags | 2 | Search for `<style>` |
| Images use `next/image` with `sizes` prop | 4 | Check Image components |
| No large inline data (>50 items) | 2 | Check array sizes in page |
| Data externalized to data/ file | 4 | Verify large content in separate .ts file |
| No dynamic imports without loading state | 2 | Check dynamic() usage |
| Hero image has `priority` prop | 2 | Check first Image component |

### C. Accessibility Score (0-20)

| Check | Points | How to Verify |
|-------|--------|---------------|
| All sections have `aria-labelledby` | 4 | Check `<Section>` and `<section>` tags |
| All images have `alt` text or `aria-hidden` | 4 | Check `<Image>` and `<img>` tags |
| All decorative elements have `aria-hidden="true"` | 2 | Check icon dividers, bg accents |
| Interactive elements keyboard-focusable | 4 | Check buttons, links have proper roles |
| Touch targets ≥ 48px on mobile | 4 | Check button/link sizing |
| Color contrast passes WCAG AA | 2 | Check text-on-background combos |

### D. UI/UX Score (0-20)

| Check | Points | How to Verify |
|-------|--------|---------------|
| Uses `<Heading>` component (not raw h1-h6) | 3 | Search for raw heading tags |
| Uses `<Button>` component (not raw button/a) | 3 | Search for raw button/a with styling |
| Uses `<Section>` + `<Container>` wrappers | 3 | Check section wrapping |
| Backgrounds alternate (no two same adjacent) | 3 | Check bg props sequence |
| Red divider after section headings | 2 | Check for `w-16 h-1 bg-honeywell-red` |
| Mobile-first responsive classes | 3 | Check for base → sm → md → lg pattern |
| No arbitrary colors (non-design-token hex) | 3 | Search for `text-[#` or `bg-[#` |

### E. Conversion Score (0-20)

| Check | Points | How to Verify |
|-------|--------|---------------|
| Primary CTA above fold (hero section) | 4 | Check hero for Button with href |
| CTA Banner at page bottom (navy bg) | 4 | Check for `<CTA>` component |
| At least 3 CTAs total on page | 4 | Count all CTA buttons |
| Phone/contact accessible | 4 | Check for phone link or contact CTA |
| Request Quote path present | 4 | Check for link to /request-quote/ |

---

## Report Format

```markdown
# QA Report: <Page Name>

**Route:** `/<route>/`
**File:** `app/(site)/<route>/page.tsx`
**Date:** <date>
**Strictness:** Standard / Strict

---

## Overall Score: XX/100 — 🟢 Production Ready

| Category | Score | Grade |
|----------|-------|-------|
| SEO | XX/20 | ✅ / ⚠️ / ❌ |
| Performance | XX/20 | ✅ / ⚠️ / ❌ |
| Accessibility | XX/20 | ✅ / ⚠️ / ❌ |
| UI/UX | XX/20 | ✅ / ⚠️ / ❌ |
| Conversion | XX/20 | ✅ / ⚠️ / ❌ |

### Classification
- 95-100 → 🟢 **Production Ready** — Ship it
- 90-94 → 🟢 **Excellent** — Minor polish only
- 80-89 → 🟡 **Good** — Fix warnings before launch
- 70-79 → 🟠 **Needs Work** — Significant issues remain
- Below 70 → 🔴 **Blocked** — Do not deploy

---

## Detailed Results

### SEO (XX/20)
- ✅ Title tag: "..." (58 chars) — PASS
- ✅ Meta description: "..." (155 chars) — PASS
- ❌ Missing FAQPage schema — FAIL (-2)
- ...

### Performance (XX/20)
- ✅ Server Component — PASS
- ⚠️ Hero image missing `priority` prop — WARN (-2)
- ...

### Accessibility (XX/20)
- ✅ All images have alt text — PASS
- ❌ 3 sections missing aria-labelledby — FAIL (-4)
- ...

### UI/UX (XX/20)
- ✅ All headings use <Heading> component — PASS
- ❌ 2 raw <h3> elements found — FAIL (-3)
- ...

### Conversion (XX/20)
- ✅ Hero CTA present — PASS
- ✅ CTA Banner at bottom — PASS
- ⚠️ Only 2 CTAs total (minimum 3) — WARN (-2)
- ...

---

## Action Items

### 🔴 Must Fix (Blocking)
1. <issue> → <fix>

### 🟡 Should Fix (Before Launch)
1. <issue> → <fix>

### 💡 Suggestions
1. <suggestion>

---

## Auto-Fix Available

The following issues can be fixed automatically:
1. Add `aria-labelledby` to 3 sections
2. Add FAQPage schema
3. Replace raw `<h3>` with `<Heading variant="subsection">`

Run `/improve-page <route>` to apply auto-fixes.
```

---

## Strict Mode (Production Launch)

When `strictness=strict`:
- All checks are weighted equally (no partial credit)
- Any ❌ FAIL makes the page **Blocked** regardless of total score
- Additional checks:
  - No TODO/FIXME comments in code
  - No placeholder images (all images must be real or have REQUIRED_IMAGES entry)
  - All links resolve to existing routes
  - Page loads in dev server without errors

---

## Example Usage

```
User: /qa-page about-us
Agent:
  ## Overall Score: 85/100 — 🟡 Good

  | Category | Score |
  |----------|-------|
  | SEO | 18/20 |
  | Performance | 16/20 |
  | Accessibility | 14/20 |
  | UI/UX | 17/20 |
  | Conversion | 20/20 |

  ### 🔴 Must Fix
  1. 3 sections missing aria-labelledby

  ### 🟡 Should Fix
  1. Hero image missing priority prop
  2. Missing FAQPage schema (FAQs exist on page)

  Auto-fix available for 3 issues. Run /improve-page about-us?
```
