# 🚀 Honeywell Hydraulics — Scalable Content Framework (Version 2)
**Master Architectural Rulebook for 100+ Page Expansion**

This Version 2 framework incorporates all critical fixes identified in the Hub Architecture Audit. It establishes the mandatory local product SEO mapping, constructs the high-intent Services silo, and enforces strict E-E-A-T entity validation to ensure maximum algorithmic safety before scaling into Phase 3.

---

## PART 1 — THE SERVICES SILO (Commercial Intent Capture)

To capture high-ticket, BOFU commercial intent, all service-related content has been extracted from the informational `/resources/` hub and placed into a dedicated `/services/` commercial hub.

**Parent Hub:** `/services/`

### 1. `/services/hydraulic-cylinder-repair/`
*   **Search Intent:** Emergency Commercial / Transactional ("cylinder repair near me")
*   **Target Audience:** Maintenance Engineers, Plant Managers facing breakdown.
*   **Relationships:** Links to `/products/hydraulic-cylinders/`, `/locations/ahmedabad/` (local repair focus).

### 2. `/services/hydraulic-system-retrofitting/`
*   **Search Intent:** Commercial Investigation ("upgrade hydraulic press")
*   **Target Audience:** OEMs, Operations Directors looking to increase cycle speeds.
*   **Relationships:** Links to `/products/hydraulic-systems/`, `/applications/press-machines/`, `/industries/steel-industry/`.

### 3. `/services/custom-hydraulic-system-design/`
*   **Search Intent:** Commercial / Transactional ("custom hydraulic manufacturer")
*   **Target Audience:** Design Engineers, New Machine Builders.
*   **Relationships:** Links to `/about/facility/` (engineering capabilities), `/applications/special-purpose-machines/`.

### 4. `/services/hydraulic-maintenance-services/`
*   **Search Intent:** Commercial Investigation ("hydraulic AMC services")
*   **Target Audience:** Procurement Managers, Plant Maintenance Heads.
*   **Relationships:** Links to `/resources/maintenance/` (informational guides), `/locations/` (service coverage map).

### 5. `/services/oem-hydraulic-manufacturing/`
*   **Search Intent:** High-Ticket B2B Commercial ("hydraulic cylinder contract manufacturing")
*   **Target Audience:** Supply Chain Heads, Major OEMs.
*   **Relationships:** Links to `/about/quality/` (ISO certifications), `/products/`.

### 6. `/services/hydraulic-consulting/`
*   **Search Intent:** Informational/Commercial ("fluid dynamics calculation service")
*   **Target Audience:** Engineering Firms, R&D Teams.
*   **Relationships:** Links to `/about/team/` (EEAT validation), `/resources/calculators/`.

---

## PART 2 — LOCAL PRODUCT SEO FRAMEWORK (The "Scale" Rule)

If we do not map Product Pillars to City pages correctly, we will fail to rank for product-specific local searches (e.g., "Power Packs in Rajkot"). 

**Mandatory Rule:** Every Product Pillar page must contain a "Local Service Areas" H2 section that links to the city pages using **exact-match product + location anchor text.**

### Implementation Standard:
*   **Hydraulic Cylinders Pillar:** Must link as `[Hydraulic Cylinders in Ahmedabad](/locations/ahmedabad/)`, `[Hydraulic Cylinders in Surat](/locations/surat/)`, `[Hydraulic Cylinders in Rajkot](/locations/rajkot/)`, etc.
*   **Hydraulic Power Packs Pillar:** Must link as `[Hydraulic Power Packs in Vadodara](/locations/vadodara/)`, `[Hydraulic Power Packs in Vapi](/locations/vapi/)`, etc.
*   **Hydraulic Systems Pillar:** Must link as `[Hydraulic Systems in Gandhinagar](/locations/gandhinagar/)`, `[Hydraulic Systems in Bhavnagar](/locations/bhavnagar/)`, etc.
*   **Manifold Blocks Pillar:** Must link as `[Manifold Blocks in Jamnagar](/locations/jamnagar/)`, etc.

*Failure to implement this exact anchor text matrix will result in local SEO dilution.*

---

## PART 3 — AUTHOR ENTITY FRAMEWORK (E-E-A-T Validation)

Google's Knowledge Graph must validate that our `[Engineering Reviewer]` is a real expert. Placeholders are useless without a verified entity backing them.

**New Parent Hub:** `/about/`
**New Children:** `/about/team/`, `/about/facility/`, `/about/quality/`, `/about/careers/`

### The Engineering Reviewer Entity Framework
Every technical page will feature the Reviewer Block. That block MUST link to a dedicated `/about/team/[employee-name]/` bio page. 

**The Bio Page Must Contain:**
1.  **Author Bio Block:** Full name, current title (e.g., Chief Hydraulics Engineer), high-resolution headshot.
2.  **Experience Block:** Previous engineering roles, degrees (e.g., B.Tech Mechanical), years in fluid power.
3.  **Expertise Block:** Specific technical proficiencies (e.g., "Specializes in high-low circuit design for deep drawing presses").
4.  **Schema Strategy:** The Bio page must use `Person` schema. The Product/Resource pages must use `reviewedBy` schema pointing directly to the URL of the `Person` schema.

---

## PART 4 — INDUSTRY ↔ APPLICATION MATRIX

To prevent orphaned silos and maximize contextual lateral linking, a mandatory cross-linking matrix is established.

**Mandatory Rule:**
*   Every Industry Page MUST contain a "Related Machinery & Applications" module.
*   Every Application Page MUST contain a "Primary Industries Served" module.

### Core Relationship Matrix

| Application (Machinery) | ↔ | Primary Industries |
| :--- | :--- | :--- |
| **Press Machines** | ↔ | Automotive, Steel Industry, Plastic Processing, Agriculture Forging |
| **Goods Lifts / Elevators** | ↔ | Material Handling, Warehousing, General Manufacturing |
| **Car Parking Systems** | ↔ | Infrastructure, Commercial Construction |
| **Injection Moulding Core-Pulls** | ↔ | Plastic Processing, Automotive Components |
| **Construction Equipment (Boom/Bucket)** | ↔ | Construction, Mining, Heavy Infrastructure |
| **Special Purpose Machines (SPMs)** | ↔ | Automotive OEM, Aerospace, R&D Labs |

---

## PART 5 — THE PRICING CLUSTER (TOFU/MOFU Lead Capture)

B2B buyers research costs before reaching out. We must capture this massive search intent.

**New Hub Path:** `/resources/pricing-guides/`
*   `[Hydraulic Cylinder Pricing Guide](/resources/pricing-guides/cylinders/)`
*   `[Hydraulic Power Pack Cost Guide](/resources/pricing-guides/power-packs/)`
*   `[Hydraulic System Installation Cost Guide](/resources/pricing-guides/systems/)`

**SEO Purpose:** To rank for "hydraulic cylinder price in India", "cost of industrial power pack", and capture emails by gating a "2026 Industrial Hydraulics Pricing Benchmark PDF."

---

## PART 6 — THE COMPARISON CLUSTER (Deep MOFU Evaluation)

Engineers search for technical comparisons when deciding how to design their machinery.

**New Hub Path:** `/resources/comparisons/`
*   `[Tie Rod vs Welded Hydraulic Cylinders](/resources/comparisons/tie-rod-vs-welded/)`
*   `[Flange vs Clevis Mounting Styles](/resources/comparisons/flange-vs-clevis/)`
*   `[Gear Pump vs Vane Pump for Power Packs](/resources/comparisons/gear-vs-vane-pump/)`
*   `[Hydraulic vs Pneumatic Systems](/resources/comparisons/hydraulic-vs-pneumatic/)`

**SEO Purpose:** To dominate "vs" search queries, establish absolute technical authority, and guide the engineer toward Honeywell's recommended solution.

---

## NEW INVENTORY & ROADMAP

### Updated Site Architecture
The site now possesses 7 Core Hubs:
1.  `/products/` (Commercial)
2.  `/services/` (Commercial/Transactional)
3.  `/industries/` (Commercial Investigation)
4.  `/applications/` (Commercial Investigation)
5.  `/locations/` (Local Commercial)
6.  `/resources/` (Informational/Authority)
7.  `/about/` (E-E-A-T/Entity Validation)

### New Hub & Content Inventory Added in V2
*   `/services/` (Hub + 6 Child Pages)
*   `/about/` (Hub + 4 Child Pages + Team Bios)
*   `/resources/pricing-guides/` (Hub + 3 Child Pages)
*   `/resources/comparisons/` (Hub + 4 Child Pages)

### Updated Rollout Roadmap
1.  **Phase 1: Framework & Master Hubs** *(Completed)*
2.  **Phase 2: Commercial Services & E-E-A-T Anchors** *(NEW: Build /services/ and /about/)*
3.  **Phase 3: Core Product Pillars** *(Hydraulic Cylinders, Power Packs, Systems, Manifolds)*
4.  **Phase 4: Local SEO Hubs** *(Ahmedabad, Surat, Rajkot, etc.)*
5.  **Phase 5: Industries & Applications** *(Injection Moulding, Press Machines, etc.)*
6.  **Phase 6: Resources & Technical Clusters** *(Pricing, Comparisons, Guides, Calculators)*

---

## FINAL RECOMMENDATION

**A) READY FOR PHASE 3 (With Phase 2 adjustment)**

With the Services Hub protecting commercial intent, the Local Product mapping preventing local SEO dilution, and the Author Entity framework solidifying E-E-A-T, the architectural flaws have been completely resolved. 

*We are fully greenlit to generate the Core Product Pillars, provided we quickly establish the `/services/` and `/about/` hub pages in sequence.*
