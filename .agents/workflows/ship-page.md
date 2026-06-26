---
name: ship-page
description: >
  Complete production-readiness pipeline for shipping a page. Runs QA audit,
  validates metadata and schemas, checks internal links, verifies image requirements,
  accessibility, and mobile responsiveness. Generates a final production readiness
  report with Go/No-Go decision.
  Use when: user wants to ship a page to production, or says "ship", "deploy",
  "launch", "is this ready for production".
argument-hint: "<page route or file path>"
---

# /ship-page — Production Readiness Pipeline

Full validation pipeline that determines if a page is ready for production deployment.

---

## Trigger

User runs `/ship-page <route>` or asks if a page is ready to deploy/launch.

---

## Input

1. **Target page** — route (e.g., `/about-us`) or file path

---

## Pipeline Steps

This workflow runs 8 validation steps in sequence. ALL must pass for production clearance.

### Step 1 — Run QA Audit

Execute the `/qa-page` workflow in `strict` mode.

**Pass criteria:** Overall score ≥ 90 with no ❌ FAIL items.

### Step 2 — Validate Metadata

Check:
- [ ] Title tag present and 50-60 characters
- [ ] Meta description present and 150-160 characters
- [ ] Canonical URL set and correct
- [ ] OpenGraph title, description, url, image all present
- [ ] Twitter card configured

**Pass criteria:** All checks pass.

### Step 3 — Validate Schemas

Check:
- [ ] `BreadcrumbList` schema present with correct hierarchy
- [ ] `WebPage` schema present with name, url, description
- [ ] Page-type-specific schema present:
  - Product pages → `Product` schema
  - Resource pages → `Article` schema
  - FAQ exists → `FAQPage` schema
- [ ] All schemas have `@context: "https://schema.org"`
- [ ] No duplicate schema types

**Pass criteria:** All required schemas present and structurally valid.

### Step 4 — Check Internal Links

Check:
- [ ] 3+ outbound internal links present
- [ ] All `<Link href>` and `<Button href>` routes are valid (match existing routes in app/)
- [ ] No broken links (href to non-existent routes)
- [ ] Breadcrumb links resolve correctly
- [ ] CTA links point to /request-quote/ or /contact-us/
- [ ] No external links without `rel="noopener noreferrer"`

**Pass criteria:** All links resolve. 3+ internal links minimum.

### Step 5 — Verify Image Requirements

Check:
- [ ] All `{/* IMAGE REQUIREMENT: ... */}` comments have matching entry in REQUIRED_IMAGES.md
- [ ] All `<Image>` components have valid `src`, `alt`, and `sizes` props
- [ ] Hero image has `priority` prop
- [ ] No `<img>` tags (must use `next/image`)
- [ ] Image placeholders are properly implemented (icon + text, not broken images)

**Pass criteria:** All images accounted for in REQUIRED_IMAGES.md. No broken image references.

### Step 6 — Verify Accessibility

Check:
- [ ] All `<section>` elements have `aria-labelledby`
- [ ] All headings have unique `id` attributes
- [ ] All images have `alt` text or `aria-hidden="true"`
- [ ] All decorative elements have `aria-hidden="true"`
- [ ] All buttons/links are keyboard-focusable
- [ ] No `tabindex > 0`
- [ ] Color contrast meets WCAG AA (text-on-background)
- [ ] Touch targets ≥ 48px on mobile

**Pass criteria:** No critical accessibility violations.

### Step 7 — Verify Mobile Responsiveness

Check:
- [ ] All text has responsive sizes (base → sm → md → lg)
- [ ] All grids use responsive columns (grid-cols-1 → sm: → lg:)
- [ ] All padding/margins are responsive (p-4 → sm: → md:)
- [ ] No fixed widths that would break on mobile
- [ ] No content overflow at 320px viewport
- [ ] Buttons use `w-full sm:w-auto` pattern
- [ ] Gap values are responsive

**Pass criteria:** All responsive rules followed.

### Step 8 — Generate Production Readiness Report

Compile results from all 7 steps into a final report.

---

## Report Format

```markdown
# 🚀 Production Readiness Report

**Page:** <Page Name>
**Route:** `/<route>/`
**Date:** <date>
**Pipeline Version:** 1.0

---

## Decision: ✅ READY FOR PRODUCTION / ❌ NOT READY

**Overall Score:** XX/100

---

## Pipeline Results

| Step | Check | Status | Score |
|------|-------|--------|-------|
| 1 | QA Audit | ✅ PASS / ❌ FAIL | XX/100 |
| 2 | Metadata Validation | ✅ PASS / ❌ FAIL | X/6 checks |
| 3 | Schema Validation | ✅ PASS / ❌ FAIL | X/X schemas |
| 4 | Internal Links | ✅ PASS / ❌ FAIL | X links found |
| 5 | Image Requirements | ✅ PASS / ⚠️ WARN | X/X accounted |
| 6 | Accessibility | ✅ PASS / ❌ FAIL | X/8 checks |
| 7 | Mobile Responsiveness | ✅ PASS / ❌ FAIL | X/7 checks |

---

## 🔴 Blocking Issues (Must Fix Before Deploy)

1. <issue description>
   **File:** `<file path>`
   **Fix:** <specific fix>

2. ...

---

## ⚠️ Warnings (Should Fix, Not Blocking)

1. <warning description>
   **Impact:** <what happens if not fixed>

---

## ✅ Passed Checks

- Title: "<title>" (XX chars) ✅
- Description: "<desc>" (XX chars) ✅
- H1: "<h1 text>" ✅
- Schemas: BreadcrumbList, WebPage, FAQPage ✅
- Internal links: X found ✅
- Images: X accounted in REQUIRED_IMAGES.md ✅
- Accessibility: X/8 checks passed ✅
- Mobile: X/7 checks passed ✅

---

## Final Score: XX/100

### Classification
- 95-100 → 🟢 **SHIP IT** — Deploy to production
- 90-94 → 🟢 **APPROVED** — Minor polish, safe to deploy  
- 80-89 → 🟡 **CONDITIONAL** — Fix warnings, then deploy
- 70-79 → 🟠 **HOLD** — Fix blocking issues first
- Below 70 → 🔴 **BLOCKED** — Significant work remaining

---

## Next Steps

### If READY:
- [ ] Run `npm run build` to verify production build
- [ ] Manual review in browser at localhost:3000/<route>
- [ ] Git commit with message: `feat(<route>): add <page name> page`
- [ ] Deploy to Vercel

### If NOT READY:
- [ ] Run `/improve-page <route>` to auto-fix issues
- [ ] Address blocking issues manually
- [ ] Re-run `/ship-page <route>` after fixes
```

---

## Go/No-Go Logic

```
IF all 7 steps PASS:
  → ✅ READY FOR PRODUCTION
  → Show "Next Steps: If READY"

IF any step has ❌ FAIL:
  → ❌ NOT READY
  → List blocking issues
  → Suggest /improve-page to auto-fix
  → Show "Next Steps: If NOT READY"

IF only ⚠️ WARN items:
  → 🟡 CONDITIONAL
  → List warnings
  → User decides to deploy or fix first
```

---

## Example Usage

```
User: /ship-page about-us
Agent:
  Running production readiness pipeline for /about-us...

  Step 1/7: QA Audit... ✅ 88/100
  Step 2/7: Metadata... ✅ 6/6
  Step 3/7: Schemas... ✅ 4/4 schemas valid
  Step 4/7: Links... ✅ 12 internal links
  Step 5/7: Images... ⚠️ 2 images in REQUIRED_IMAGES (not yet sourced)
  Step 6/7: Accessibility... ❌ 3 sections missing aria-labelledby
  Step 7/7: Mobile... ✅ 7/7 checks passed

  # Decision: ❌ NOT READY

  ## Blocking Issues
  1. 3 sections missing aria-labelledby
     Fix: Add id to Heading, aria-labelledby to section

  ## Warnings
  1. 2 images pending in REQUIRED_IMAGES.md (placeholder in use)

  Run `/improve-page about-us` to auto-fix blocking issues?
```

```
User: /ship-page products/hydraulic-cylinders/custom-hydraulic-cylinders
Agent:
  Running production readiness pipeline...
  All 7 steps: ✅ PASS
  
  # Decision: ✅ READY FOR PRODUCTION
  Score: 96/100

  Next: Run `npm run build`, review at localhost, then deploy.
```
