---
name: production-readiness
description: >
  Master Production Readiness & Launch Workflow for Honeywell Hydraulics.
  Executes the 21-stage validation pipeline across architecture, code quality,
  HTTP routes, technical SEO, JSON-LD structured data, AEO/GEO, mobile responsiveness,
  accessibility, asset authenticity, lead capture forms, security headers, analytics,
  domain redirects, and post-launch smoke monitoring. Enforces P0/P1 launch gates.
  Use when: preparing for production release, domain migration, product launches,
  or running pre-deployment sign-offs.
argument-hint: "[optional: standard | strict | dry-run]"
---

# /production-readiness — Master Production Release Pipeline

A repeatable, evidence-backed production launch pipeline designed to answer definitively:
> **"Is this website genuinely ready to go live, and can we prove it?"**

---

## 1. Severity & Launch Gate Model

| Severity Level | Definition | Launch Action |
| :--- | :--- | :--- |
| **P0 — Launch Blocker** | Build failure, broken homepage/navigation, broken RFQ/Contact form, wrong canonical domain, accidental `noindex`, broken sitemap/robots, exposed credentials/secrets. | 🛑 **STRICT STOP — DO NOT DEPLOY** |
| **P1 — High Priority** | Broken product route, missing/invalid JSON-LD schema, major accessibility defect, significant performance regression, missing critical redirect. | ⚠️ **Launch Requires Explicit Sign-off** |
| **P2 — Medium Priority** | Non-critical metadata length adjustments, minor UI alignment, missing secondary link anchor. | 📋 **Can Be Deferred with Ticket** |
| **P3 — Enhancement** | Future UX polish, optional content expansions, non-critical micro-interactions. | 💡 **Does Not Block Launch** |

---

## 2. The 21-Stage Master Workflow

```
 1. Repository Audit
        ↓
 2. Architecture Validation
        ↓
 3. Build / Type / Lint Validation
        ↓
 4. Route Validation (All 68 Routes)
        ↓
 5. Functional QA
        ↓
 6. UI / Responsive QA (320px – 1920px)
        ↓
 7. Accessibility QA (WCAG AA)
        ↓
 8. Performance QA (Core Web Vitals)
        ↓
 9. Technical SEO QA
        ↓
10. Structured Data QA (JSON-LD)
        ↓
11. Internal Linking QA
        ↓
12. Content & E-E-A-T QA
        ↓
13. Image & Asset QA (Authentic Assets)
        ↓
14. Forms & Lead-Gen QA (Resend)
        ↓
15. Security QA (CSP, HSTS, Sanitized Logs)
        ↓
16. Analytics QA (GA4, GTM, Vercel)
        ↓
17. Sitemap & Robots QA
        ↓
18. Domain & 301 Redirect QA
        ↓
19. Production Deployment Gate
        ↓
20. Post-Deployment Smoke Test
        ↓
21. Post-Launch Monitoring (24h / 72h / 7d)
```

---

## 3. Step-by-Step Execution Guide

### Stage 1: Automated Preflight Run
Run the master audit script against the local production build:
```bash
node scripts/production_audit.mjs
```
* **Pass criteria:** 0 P0 Blockers, 0 P1 Critical Schema/Canonical defects, All 68 routes return HTTP 200.

### Stage 2: Code Quality & Compilation
```bash
npx tsc --noEmit
npm run lint
npm run build
```
* **Pass criteria:** TypeScript 0 errors, Next.js static generation 68/68 pages complete, zero runtime hydration warnings.

### Stage 3: Technical SEO & Canonical Verification
* Every page has canonical URL pointing to `https://honeywellhydraulics.in<route>/` with trailing slash.
* Title length: 30–65 characters.
* Meta description: 120–165 characters with clear action CTA.
* Exactly **ONE `<h1>`** per page in the Hero section.
* Global robots policy allows indexation for production.

### Stage 4: Structured Data (JSON-LD)
* Valid JSON syntax on all pages.
* Mandatory Schemas:
  - `Organization` & `ManufacturingBusiness` on Root.
  - `BreadcrumbList` on all hierarchical routes.
  - `Product` schema on all 27 product detail pages.
  - `ContactPage` on `/contact-us/` and `/request-quote/`.
  - `FAQPage` on pages with visible Accordion FAQ components.

### Stage 5: Forms & Lead-Gen Engine
* Test `POST /api/contact` with valid and invalid payloads.
* Test `POST /api/quote` with multi-field engineering parameters (Bore, Stroke, Pressure, LPM).
* Verify email dispatch through Resend without leaking PII in server logs.

### Stage 6: Security & Privacy
* Verify security headers in `next.config.ts` (HSTS, CSP, X-Frame-Options, Permissions-Policy).
* Ensure `.env.local` contains all active secrets and is ignored by git.
* Verify `/api/test-email` is restricted or verified safe.

### Stage 7: Production Release Gate
Before approving Vercel/Production deployment:
```
P0 Count = 0
Critical P1 Count = 0
Production Build = PASS
Sitemap & Robots = PASS
Security Headers = PASS
```

---

## 4. Output Deliverable

Upon execution, generate a `PRODUCTION_READINESS_REPORT.md` following this structure:

```markdown
# Production Readiness Report — Honeywell Hydraulics
- **Release Version:** v1.0.0
- **Execution Date:** [YYYY-MM-DD]
- **Overall Decision:** [GO / NO-GO / GO WITH APPROVAL]
- **P0 Blockers:** [0]
- **P1 High Priority:** [0]
- **P2 Medium Priority:** [X]
- **Evidence Attached:** Yes (docs/production-audit-data.json)
```
