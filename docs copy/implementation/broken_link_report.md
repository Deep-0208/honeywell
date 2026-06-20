# 🔗 Honeywell Hydraulics — Broken Link & Internal Linking Report

**Prepared By:** Technical SEO Specialist
**Date:** June 6, 2026

## 1. BROKEN LINK ANALYSIS

Based on the canonical URL normalization map and the current state of the content files, the following structural issues will result in mass 404 errors at launch if not corrected:

### A. Non-Existent Pages Linked
The following pages are linked extensively throughout the content but **do not exist**:
- `/request-quote/` (Linked 100+ times)
- `/contact/engineering/` and `/contact/support/` (Linked 50+ times)
- `/about/team/[PLACEHOLDER_NAME]/` (Linked 60+ times)
- `/resources/downloads/` (Linked 20+ times)

### B. URL Mismatches (Redirect Targets)
The following internal links are using the wrong URL pattern and need to be updated to match the final canonical structure:
- **Found:** `/products/hydraulic-cylinders/welded-hydraulic-cylinders/`
  **Update To:** `/hydraulic-cylinders/welded/`
- **Found:** `/products/hydraulic-power-packs/3-phase-hydraulic-power-packs/`
  **Update To:** `/hydraulic-power-packs/3-phase/`
- **Found:** `/products/manifolds/custom-manifold-blocks/`
  **Update To:** `/manifold-blocks/custom/`
- **Found:** `/industries/steel-industry/`
  **Update To:** `/industries/steel-metallurgy/`
- **Found:** `/services/hydraulic-cylinder-repair.md`
  **Update To:** `/services/hydraulic-cylinder-repair/`

---

## 2. FILE-BY-FILE FIX PLAN

A global Regex search-and-replace must be executed across all files in `docs/content/`.

**Execution Steps for Developers:**

1.  **Remove `/products/` prefix globally:**
    - Find: `href="/products/hydraulic-cylinders/` -> Replace: `href="/hydraulic-cylinders/`
    - Find: `href="/products/hydraulic-power-packs/` -> Replace: `href="/hydraulic-power-packs/`
    - Find: `href="/products/hydraulic-systems/` -> Replace: `href="/hydraulic-systems/`
    - Find: `href="/products/manifolds/` -> Replace: `href="/manifold-blocks/`
    - Find: `href="/products/manifold-blocks/` -> Replace: `href="/manifold-blocks/`

2.  **Strip Redundant Suffixes globally:**
    - Find: `-hydraulic-cylinders/"` -> Replace: `/"`
    - Find: `-hydraulic-power-packs/"` -> Replace: `/"`
    - Find: `-manifold-blocks/"` -> Replace: `/"`

3.  **Fix `.md` Extensions:**
    - Find (Regex): `href="([^"]+)\.md/?(")` -> Replace: `href="$1/$2`

---

## 3. ANCHOR TEXT OPTIMIZATION RECOMMENDATIONS

**Current Issue:** The site suffers from exact-match anchor text over-optimization. Every internal link uses highly repetitive, exact-match keywords (e.g., "Hydraulic Cylinder Manufacturer in Ahmedabad").

**Recommendations:**

1.  **Diversify Anchor Text Ratios:**
    - Exact Match: 20%
    - Partial Match / LSI: 40%
    - Branded: 20%
    - Generic/Action-Oriented: 20%

2.  **Examples of Fixes:**
    - **Current:** "For heavy lifting, see our [Welded Hydraulic Cylinders](/hydraulic-cylinders/welded/)."
    - **Better:** "For heavy lifting applications that require structural integrity, explore our range of [heavy-duty welded cylinders](/hydraulic-cylinders/welded/)."

    - **Current:** "We provide [Hydraulic System Retrofitting in Ahmedabad](/locations/ahmedabad/)."
    - **Better:** "Our [Ahmedabad engineering team](/locations/ahmedabad/) specializes in hydraulic system retrofits."

3.  **The "Local Service Areas" Block Risk:**
    Every product page contains a block linking to 8 cities using the exact formula: `[Product Name in City Name](/locations/city/)`.
    *Action:* Remove this block. Instead, use a single link: `[View our service availability across Gujarat's industrial zones](/locations/)` which points to the location hub, keeping link equity flowing naturally without looking like automated spam.
