# 📄 Honeywell Hydraulics — SEO Product Page Template
### Reusable Structure for All 23 Product Pages

**Applies to:** All hydraulic cylinder variants · All power pack variants · All manifold block variants · Hydraulic systems  
**Goal:** Rank for product-specific transactional keywords AND convert visitors into quote requests  
**Avg. Word Count Target:** 800–1,200 words per product page  

---

## Template Variable Map

Every product page uses this same template. Only the variables change:

```
{PRODUCT_NAME}         → "Double Acting Hydraulic Cylinder"
{PRODUCT_SLUG}         → "double-acting"
{PARENT_SILO}          → "Hydraulic Cylinders"
{PARENT_URL}           → "/hydraulic-cylinders/"
{PRIMARY_KEYWORD}      → "double acting hydraulic cylinder manufacturer"
{SECONDARY_KEYWORDS}   → ["DA cylinder", "push pull cylinder", ...]
{GEO_MODIFIER}         → "Ahmedabad Gujarat India"
{KEY_SPECS}            → { bore: "40–300mm", stroke: "up to 3000mm", ... }
{APPLICATIONS}         → ["Press Machines", "Goods Lifts", ...]
{INDUSTRIES}           → ["Injection Moulding", "Automotive", ...]
{RELATED_PRODUCTS}     → ["/single-acting/", "/flange-mounting/", ...]
{FAQ_ITEMS}            → [{ q: "...", a: "..." }, ...]
```

---

## Page Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│  BREADCRUMB                                  [Section 1] │
├─────────────────────────────────────────────────────────┤
│  PRODUCT HERO                                [Section 2] │
│  ┌─────────────────┬───────────────────────┐            │
│  │  Product Image  │  H1 + Specs + CTAs    │            │
│  └─────────────────┴───────────────────────┘            │
├─────────────────────────────────────────────────────────┤
│  KEY SPECS STRIP                             [Section 2b]│
├─────────────────────────────────────────────────────────┤
│  PRODUCT OVERVIEW                            [Section 3] │
├─────────────────────────────────────────────────────────┤
│  TECHNICAL SPECIFICATIONS TABLE              [Section 4] │
├─────────────────────────────────────────────────────────┤
│  AVAILABLE CONFIGURATIONS                    [Section 5] │
├─────────────────────────────────────────────────────────┤
│  APPLICATIONS                                [Section 6] │
├─────────────────────────────────────────────────────────┤
│  INDUSTRIES SERVED                           [Section 7] │
├─────────────────────────────────────────────────────────┤
│  MANUFACTURING & QUALITY                     [Section 8] │
├─────────────────────────────────────────────────────────┤
│  WHY CHOOSE THIS PRODUCT                     [Section 9] │
├─────────────────────────────────────────────────────────┤
│  RELATED PRODUCTS                            [Section 10]│
├─────────────────────────────────────────────────────────┤
│  CASE STUDY / PROJECT SPOTLIGHT              [Section 11]│
├─────────────────────────────────────────────────────────┤
│  FAQ                                         [Section 12]│
├─────────────────────────────────────────────────────────┤
│  INQUIRY CTA                                 [Section 13]│
├─────────────────────────────────────────────────────────┤
│  STRUCTURED DATA (invisible)                 [Section 14]│
└─────────────────────────────────────────────────────────┘
```

---

# SECTION 1: BREADCRUMB

## Purpose

| Attribute | Detail |
|---|---|
| **SEO Function** | Generates BreadcrumbList rich snippet in search results. Tells Google the page hierarchy. Passes link equity upward to the pillar page. |
| **UX Function** | Shows the user where they are in the site. One click back to parent category. Reduces disorientation on deep pages. |
| **CRO Function** | Prevents premature bounce — if this isn't the right product, breadcrumb lets them navigate to the parent to find the right one instead of leaving the site entirely. |

## Structure

```html
<nav aria-label="Breadcrumb" class="breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="{PARENT_URL}">{PARENT_SILO}</a></li>
    <li aria-current="page">{PRODUCT_NAME}</li>
  </ol>
</nav>
```

**Example:**
```
Home  >  Hydraulic Cylinders  >  Double Acting Hydraulic Cylinder
```

## Rules
- Last item (current page) is plain text, NOT a link
- Schema: BreadcrumbList JSON-LD (see Section 14)
- Separator: `>` chevron, not `/`
- Visible on desktop and mobile — never hide breadcrumbs

---

# SECTION 2: PRODUCT HERO

## Purpose

| Attribute | Detail |
|---|---|
| **SEO Function** | Contains the H1 with primary transactional keyword. First meaningful content for Googlebot. Product image with keyword-rich alt text for Google Images ranking. |
| **UX Function** | The visitor identifies the product within 2 seconds. Image + title + specs = instant confirmation of "yes, this is what I'm looking for." |
| **CRO Function** | CTA visible above the fold. Phone number visible. Zero scrolling required to take action. B2B buyers comparing 3–5 tabs will contact the first manufacturer that makes it easy. |

## Structure

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  ┌──────────────────┐  ┌──────────────────────────────────┐ │
│  │                  │  │                                  │ │
│  │  [PRODUCT IMAGE] │  │  {LABEL}: {PARENT_SILO}         │ │
│  │                  │  │                                  │ │
│  │  aspect: 4:3     │  │  [H1] {PRODUCT_NAME}            │ │
│  │                  │  │  Manufacturer in {GEO_MODIFIER}  │ │
│  │  Multiple views  │  │                                  │ │
│  │  (2–3 angles)    │  │  [SUBHEADING — 2 lines]          │ │
│  │                  │  │  Brief value proposition.        │ │
│  │                  │  │                                  │ │
│  │                  │  │  [BTN] REQUEST A QUOTE →          │ │
│  │                  │  │  [BTN] DOWNLOAD SPEC SHEET →      │ │
│  │                  │  │                                  │ │
│  │                  │  │  📞 +91 9924343873               │ │
│  │                  │  │  💬 WhatsApp for Quick Quote     │ │
│  │                  │  │                                  │ │
│  └──────────────────┘  └──────────────────────────────────┘ │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

## HTML Elements

```html
<!-- Label -->
<span class="text-label">{PARENT_SILO}</span>

<!-- H1 — ONE per page, primary keyword -->
<h1>{PRODUCT_NAME} — Manufacturer in Ahmedabad, Gujarat</h1>

<!-- Subheading — NOT an H2 -->
<p class="text-body-lg">
  {2-sentence value proposition describing this specific product, its key
  advantage, and who it's built for.}
</p>

<!-- CTAs -->
<a href="/request-quote/" class="btn btn-primary btn-lg">REQUEST A QUOTE →</a>
<a href="/resources/downloads/" class="btn btn-outline btn-md">DOWNLOAD SPEC SHEET →</a>

<!-- Phone -->
<a href="tel:+919924343873" class="phone-link">📞 +91 9924343873</a>
<a href="https://wa.me/919924343873" class="whatsapp-link">💬 WhatsApp for Quick Quote</a>
```

## Product Image Rules

```
Format:    WebP primary, JPEG fallback
Size:      800×600px (4:3 ratio)
Views:     Primary angle + 1–2 secondary (thumbnail gallery)
Alt text:  "{PRODUCT_NAME} — manufactured by Honeywell Hydraulics, Ahmedabad Gujarat"
Loading:   fetchpriority="high" — this is the LCP element
Preload:   <link rel="preload" as="image">
Source:    REAL product photo. NOT a 3D render. NOT stock.
```

## Section 2b: Key Specs Strip

```
┌──────────────────────────────────────────────────────────────┐
│  Bore: 40–300mm  │  Stroke: Up to 3000mm  │  Pressure: 210 bar  │  Mounting: All Types  │
└──────────────────────────────────────────────────────────────┘
```

| Attribute | Detail |
|---|---|
| **SEO Function** | Contains technical spec keywords that match engineer search queries ("40–300mm bore", "210 bar pressure"). |
| **UX Function** | Instant specification check — buyer sees if this product fits their requirement without scrolling. |
| **CRO Function** | If specs match, buyer proceeds. If not, they see the range is custom and contact for confirmation. Either way, engagement increases. |

```html
<div class="spec-strip">
  <div class="spec-strip__item">
    <span class="spec-strip__label">Bore Size</span>
    <span class="spec-strip__value text-spec">{BORE_RANGE}</span>
  </div>
  <div class="spec-strip__item">
    <span class="spec-strip__label">Stroke Length</span>
    <span class="spec-strip__value text-spec">{STROKE_RANGE}</span>
  </div>
  <div class="spec-strip__item">
    <span class="spec-strip__label">Working Pressure</span>
    <span class="spec-strip__value text-spec">{PRESSURE}</span>
  </div>
  <div class="spec-strip__item">
    <span class="spec-strip__label">Mounting</span>
    <span class="spec-strip__value text-spec">{MOUNTING_TYPES}</span>
  </div>
</div>
```

---

# SECTION 3: PRODUCT OVERVIEW

## Purpose

| Attribute | Detail |
|---|---|
| **SEO Function** | Primary keyword appears in first 100 words (critical for Google's on-page ranking). Secondary keywords woven naturally. This paragraph establishes topical relevance — Google reads it to understand what this page is about. |
| **UX Function** | Explains the product in plain language for buyers who aren't engineers. Describes what it does, what it's used for, and why Honeywell's version is different. |
| **CRO Function** | Builds enough product understanding that the buyer feels confident requesting a quote. Eliminates "I'm not sure this is the right product" hesitation. |

## Structure

```html
<section class="section">
  <div class="container">

    <h2>What is a {PRODUCT_NAME}?</h2>

    <p>
      {3–4 sentence paragraph. First sentence defines the product and contains
      the primary keyword naturally. Second sentence describes key applications.
      Third sentence differentiates Honeywell's version (custom manufacturing,
      quality, Gujarat-based). Fourth sentence includes a secondary keyword
      and geo-modifier naturally.}
    </p>

    <p>
      {2–3 sentence paragraph about specific advantages of this product type.
      Include technical details that matter to buyers — operating principle,
      force characteristics, efficiency. Link to a relevant blog article
      for deeper technical reading.}
    </p>

  </div>
</section>
```

## Content Rules
- **Word count:** 100–200 words
- **Primary keyword** must appear in the first sentence
- **Geo-modifier** (Ahmedabad, Gujarat, India) appears once, naturally
- **Internal link** to one blog article that explains this product type in depth
- **Tone:** Technical but accessible. Write for an engineer's boss — the person who approves purchases but may not be deeply technical
- **NO keyword stuffing.** If the text reads unnaturally, remove keywords.

## Example (Double Acting):

```
A double acting hydraulic cylinder generates force in both the extend and retract
strokes, making it the most versatile and widely used cylinder type in industrial
applications. Unlike single acting cylinders that rely on gravity or springs for
return, double acting cylinders provide full control in both directions — critical
for press machines, injection moulding, goods lifts, and material handling systems.

At Honeywell Hydraulics, we manufacture double acting hydraulic cylinders in custom
bore sizes from 40mm to 300mm and stroke lengths up to 3000mm at our Ahmedabad
facility. Every cylinder is CNC-machined from solid steel, fitted with imported
seals, and pressure-tested at 1.5x working pressure before dispatch. Learn more
about how double acting cylinders work in our complete guide.
[→ /blog/types-of-hydraulic-cylinders/]
```

---

# SECTION 4: TECHNICAL SPECIFICATIONS TABLE

## Purpose

| Attribute | Detail |
|---|---|
| **SEO Function** | Structured specification data that Google can extract for featured snippets and product schema. Engineer search queries like "bore size range" or "working pressure" match these data points exactly. Spec tables are the #1 content type that earns organic backlinks from engineering forums and reference sites. |
| **UX Function** | Engineers don't read prose — they scan tables. A spec table is the fastest way for a technical buyer to determine if this product meets their requirements. |
| **CRO Function** | A buyer who finds their required spec range in the table will request a quote. A buyer who doesn't see exact specs will still request a quote for custom sizing — IF the table shows that custom sizes are available. |

## Structure

```html
<section class="section section-alt">
  <div class="container">

    <h2>Technical Specifications — {PRODUCT_NAME}</h2>

    <table class="spec-table">
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Specification</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bore Diameter</td>
          <td class="text-spec">{BORE_RANGE}</td>
        </tr>
        <tr>
          <td>Rod Diameter</td>
          <td class="text-spec">{ROD_RANGE}</td>
        </tr>
        <tr>
          <td>Stroke Length</td>
          <td class="text-spec">{STROKE_RANGE}</td>
        </tr>
        <tr>
          <td>Working Pressure</td>
          <td class="text-spec">{WORKING_PRESSURE}</td>
        </tr>
        <tr>
          <td>Test Pressure</td>
          <td class="text-spec">{TEST_PRESSURE}</td>
        </tr>
        <tr>
          <td>Barrel Material</td>
          <td>{BARREL_MATERIAL}</td>
        </tr>
        <tr>
          <td>Rod Material</td>
          <td>{ROD_MATERIAL}</td>
        </tr>
        <tr>
          <td>Rod Finish</td>
          <td>{ROD_FINISH}</td>
        </tr>
        <tr>
          <td>Seal Type</td>
          <td>{SEAL_TYPE}</td>
        </tr>
        <tr>
          <td>Mounting Options</td>
          <td>{MOUNTING_OPTIONS}</td>
        </tr>
        <tr>
          <td>Port Size</td>
          <td class="text-spec">{PORT_SIZE}</td>
        </tr>
        <tr>
          <td>Operating Temperature</td>
          <td class="text-spec">{TEMP_RANGE}</td>
        </tr>
        <tr>
          <td>Hydraulic Fluid</td>
          <td>{FLUID_TYPE}</td>
        </tr>
        <tr>
          <td>Custom Sizes</td>
          <td><strong>Available on request</strong></td>
        </tr>
      </tbody>
    </table>

    <!-- Download CTA below table -->
    <div class="spec-download">
      <p>📄 Download the complete specification sheet with dimensional drawings.</p>
      <a href="/resources/downloads/" class="btn btn-outline btn-sm">
        DOWNLOAD SPEC SHEET (PDF) →
      </a>
    </div>

  </div>
</section>
```

## Rules
- **Use mono font** (`text-spec`) for numerical values — it signals "engineering data"
- **"Custom Sizes: Available on request"** must always be the last row. This is the safety net — if the buyer's spec isn't listed, they know custom is possible.
- **Add PDF download CTA** below the table — spec sheets are lead magnets (gate with name + phone)
- **Do NOT fake specs.** Only include parameters you can actually deliver. An incorrect spec in a quotation based on a wrong table = lost client forever.

---

# SECTION 5: AVAILABLE CONFIGURATIONS

## Purpose

| Attribute | Detail |
|---|---|
| **SEO Function** | Captures long-tail variation keywords. "Double acting cylinder with flange mounting" is a different search query than "double acting cylinder with clevis mounting." Listing all variants covers multiple keyword combinations from a single page. |
| **UX Function** | Shows the full range of options. Buyers see they can get this product in multiple configurations — reduces the chance they leave to find a competitor with more options. |
| **CRO Function** | Pre-qualifies the inquiry. When a buyer sees the exact configuration they need listed, they're more confident when filling out the quote form. |

## Structure

```html
<section class="section">
  <div class="container">

    <h2>Available Configurations</h2>

    <p>
      We manufacture {PRODUCT_NAME}s in the following standard configurations.
      Custom configurations are available — contact us with your specific requirements.
    </p>

    <div class="grid grid-cols-3">

      <!-- Configuration Card (repeat for each variant) -->
      <div class="config-card">
        <h3>{Configuration Name}</h3>
        <ul>
          <li>Bore range: {range}</li>
          <li>Mounting: {type}</li>
          <li>Typical application: {use case}</li>
        </ul>
        <a href="/request-quote/" class="btn btn-ghost btn-sm">
          Get Quote →
        </a>
      </div>

    </div>

  </div>
</section>
```

## Example Configurations (Double Acting Cylinder):

| Config | Key Spec | Application |
|---|---|---|
| Flange Mounting (Front) | Centerline force transfer | Press machines, injection moulding |
| Flange Mounting (Rear) | Pull-from-rear force | Goods lifts, clamping |
| Clevis Mounting | Pivot arc during stroke | Tipping, dumping, steering |
| Trunnion Mounting | Mid-body pivot | Heavy loads, cranes |
| Foot/Side Mounting | Surface-mount | Conveyor systems, automation |
| Extended Tie Rod | Interchangeable standard | General industrial |

---

# SECTION 6: APPLICATIONS

## Purpose

| Attribute | Detail |
|---|---|
| **SEO Function** | Targets application-specific keywords from THIS product page ("double acting cylinder for press machine"). Creates natural internal links to application landing pages, distributing link equity across the application silo. |
| **UX Function** | Buyer self-identifies their use case: "Yes, they specifically make this cylinder for MY application." This is the industry recognition effect applied at the product level. |
| **CRO Function** | When the buyer sees their exact application listed, it removes the "will this work for my use case?" doubt. They move from "maybe" to "let me get a quote." |

## Structure

```html
<section class="section section-alt">
  <div class="container">

    <h2>Applications of {PRODUCT_NAME}</h2>

    <p>
      Our {PRODUCT_NAME}s are used across a wide range of industrial applications:
    </p>

    <div class="grid grid-cols-2">

      <!-- Application Block -->
      <div class="application-block">
        <h3>🔧 {Application Name}</h3>
        <p>{2 sentences: what role this product plays in this application
           and why it's suited for it.}</p>
        <a href="{APPLICATION_PAGE_URL}">Learn more →</a>
      </div>

      <!-- Repeat for 4–6 applications -->

    </div>

  </div>
</section>
```

## Content Rules
- **List 4–6 applications** — not more. Keep it focused.
- **Each application links to its dedicated application page** (if one exists)
- **If no dedicated page exists**, link to the most relevant industry page
- **2-sentence descriptions** — first sentence states the use case, second sentence explains why this product type is ideal for it
- **Order by relevance** — most common/highest-revenue application first

---

# SECTION 7: INDUSTRIES SERVED

## Purpose

| Attribute | Detail |
|---|---|
| **SEO Function** | Cross-links from product page to industry pages. Builds the topic cluster mesh — Google sees this product connected to multiple industries, confirming topical breadth. Industry keywords appear naturally. |
| **UX Function** | Industry recognition. An automotive procurement manager sees "Automotive OEM" and thinks "they understand my quality standards and volume requirements." |
| **CRO Function** | Industry listing acts as social proof — "if they serve automotive OEMs and steel plants, they can handle my requirements." Perceived capability increases with each industry listed. |

## Structure

```html
<section class="section">
  <div class="container">

    <h2>Industries That Use {PRODUCT_NAME}s</h2>

    <div class="industry-tags">
      <!-- Tag-style chips linking to industry pages -->
      <a href="/industries/injection-moulding/" class="industry-tag">Injection Moulding</a>
      <a href="/industries/press-metal-forming/" class="industry-tag">Press & Metal Forming</a>
      <a href="/industries/automotive/" class="industry-tag">Automotive OEM</a>
      <a href="/industries/fly-ash-brick/" class="industry-tag">Fly Ash Brick</a>
      <a href="/industries/rolling-mills/" class="industry-tag">Rolling Mills</a>
      <a href="/industries/agricultural-equipment/" class="industry-tag">Agriculture</a>
      <!-- Only include industries this product actually serves -->
    </div>

    <p class="mt-4">
      Don't see your industry?
      <a href="/request-quote/">Contact us</a> — we serve 20+ industrial sectors.
    </p>

  </div>
</section>
```

## Rules
- **Only list industries this specific product serves.** A single-phase power pack doesn't serve steel plants. Be accurate.
- **Tag/chip design** — compact, horizontal, clickable. Not full cards. This section should feel lightweight.
- **Each tag links to its industry page**

---

# SECTION 8: MANUFACTURING & QUALITY

## Purpose

| Attribute | Detail |
|---|---|
| **SEO Function** | E-E-A-T signal. Contains "manufacturer" and "quality" keywords naturally. Mentions facility location (Ahmedabad GIDC), reinforcing geo-relevance. Google's quality raters look for evidence of real manufacturing capability. |
| **UX Function** | Shows HOW this product is made. Moves the buyer from "what do they sell?" to "how do they make it?" — a deeper level of trust. |
| **CRO Function** | Answers the unspoken objection: "Is this a real manufacturer or just a trader?" This section proves manufacturing capability with specific, verifiable details. Particularly critical for first-time buyers and large-order buyers. |

## Structure

```html
<section class="section section-alt">
  <div class="container grid grid-7-5">

    <!-- Left: Content -->
    <div>
      <h2>How We Manufacture {PRODUCT_NAME}s</h2>

      <p>
        {3–4 sentences describing the manufacturing process for THIS specific
        product. What machines are used. What materials. What finish. What testing.
        Be specific — "CNC-turned from ST52 seamless tube" not "made from quality steel."}
      </p>

      <h3>Quality Assurance</h3>
      <ul>
        <li>✅ CNC-machined barrels with mirror-finish honing</li>
        <li>✅ Hard chrome-plated rods ground to h8 tolerance</li>
        <li>✅ Imported polyurethane seals (Parker / Hallite equivalent)</li>
        <li>✅ 100% pressure-tested at 1.5× working pressure</li>
        <li>✅ Dimensional inspection at every manufacturing stage</li>
      </ul>

      <a href="/certifications/" class="btn btn-ghost btn-sm">
        View our certifications →
      </a>
    </div>

    <!-- Right: Manufacturing Image -->
    <div>
      <img src="{MANUFACTURING_IMAGE}"
           alt="CNC machining {PRODUCT_NAME} — Honeywell Hydraulics Ahmedabad"
           width="600" height="450" loading="lazy" class="img-product">
    </div>

  </div>
</section>
```

## Content Rules
- **Process MUST be specific to this product type.** Don't copy the same manufacturing text to every product page.
- For cylinders: mention barrel honing, rod grinding, seal fitting, pressure testing
- For power packs: mention motor mounting, pump piping, valve integration, electrical wiring, system testing
- For manifold blocks: mention CNC boring, deburring, pressure testing, port marking
- **Quality checklist** uses checkmark icons — scannable, visual, trustworthy
- **Manufacturing image** is specific to this product (not a generic factory shot)

---

# SECTION 9: WHY CHOOSE THIS PRODUCT

## Purpose

| Attribute | Detail |
|---|---|
| **SEO Function** | Targets "best {product} manufacturer" and "why choose {product}" search queries. Natural placement for differentiator keywords. |
| **UX Function** | Direct comparison positioning. This section answers "why should I buy THIS product from THIS manufacturer?" |
| **CRO Function** | Eliminates final purchase objections specific to this product type. Each point should kill one reason the buyer might hesitate. |

## Structure

```html
<section class="section">
  <div class="container">

    <h2>Why Choose Honeywell's {PRODUCT_NAME}s?</h2>

    <div class="grid grid-cols-3">

      <div class="feature-block">
        <h3>{Product-Specific Advantage 1}</h3>
        <p>{2-sentence explanation}</p>
      </div>

      <div class="feature-block">
        <h3>{Product-Specific Advantage 2}</h3>
        <p>{2-sentence explanation}</p>
      </div>

      <div class="feature-block">
        <h3>{Product-Specific Advantage 3}</h3>
        <p>{2-sentence explanation}</p>
      </div>

      <div class="feature-block">
        <h3>{Product-Specific Advantage 4}</h3>
        <p>{2-sentence explanation}</p>
      </div>

    </div>

  </div>
</section>
```

## Example Advantages (adapt per product):

| Product | Advantage 1 | Advantage 2 | Advantage 3 | Advantage 4 |
|---|---|---|---|---|
| **DA Cylinder** | Full force in both directions | Custom bore up to 300mm | Multiple mounting options | 1-unit MOQ, no minimums |
| **SA Cylinder** | Simpler design, lower cost | Gravity/spring return options | Ideal for vertical applications | Compact footprint |
| **Tie Rod** | NFPA-interchangeable dimensions | Easy field maintenance | Cost-effective for standard apps | Fast production (7 days) |
| **Telescopic** | Maximum stroke, compact retracted | Multi-stage options | Ideal for mobile/construction | Heavy-duty rated |
| **3-Phase PP** | Industrial 415V compatibility | High flow rates | Suitable for continuous duty | Complete with tank & valves |
| **Press PP** | Matched to press tonnage | High-low circuit option | Rapid approach capability | Pre-wired & tested |

---

# SECTION 10: RELATED PRODUCTS

## Purpose

| Attribute | Detail |
|---|---|
| **SEO Function** | Internal cross-links between sibling product pages. Strengthens the topical cluster. Google sees products are related, boosting the pillar page's authority. Reduces orphan page risk for less-visited products. |
| **UX Function** | If this product isn't exactly right, the buyer sees alternatives without leaving the site. Reduces bounce to Google → competitor. |
| **CRO Function** | Cross-sell opportunity. A buyer looking at a double acting cylinder might also need a power pack. Showing related products increases average inquiry value. |

## Structure

```html
<section class="section section-alt">
  <div class="container">

    <h2>Related Products</h2>

    <div class="grid grid-cols-3">

      <!-- Related Product Card (reuse card-product component) -->
      <a href="{RELATED_PRODUCT_URL}" class="card card-product">
        <img src="{RELATED_IMAGE}" alt="{RELATED_NAME}" loading="lazy">
        <div class="card-product__body">
          <h3 class="card-product__title">{RELATED_NAME}</h3>
          <p class="card-product__desc">{1-line description}</p>
          <span class="card-product__link">View Details →</span>
        </div>
      </a>

      <!-- Show exactly 3 related products -->

    </div>

  </div>
</section>
```

## Linking Rules

| Current Product | Related Product 1 | Related Product 2 | Related Product 3 |
|---|---|---|---|
| Double Acting Cylinder | Single Acting Cylinder | Flange Mounting Cylinder | 3-Phase Power Pack |
| Single Acting Cylinder | Double Acting Cylinder | Clevis Mounting Cylinder | Single-Phase Power Pack |
| Flange Mounting Cyl | Clevis Mounting Cyl | Trunnion Mounting Cyl | Double Acting Cylinder |
| Telescopic Cylinder | Double Acting Cylinder | Tie Rod Cylinder | Construction App Page |
| 3-Phase Power Pack | Single-Phase Power Pack | Power Pack for Press | Double Acting Cylinder |
| Power Pack for Press | Power Pack for Lift | 3-Phase Power Pack | Press Application Page |
| Manifold Block | High-Low System Manifold | Hydraulic Systems | 3-Phase Power Pack |

## Rules
- **Always 3 related products** — not 2, not 4
- **Mix same-silo and cross-silo:** Show 2 from same product category + 1 from a complementary category (cylinder page shows a power pack, power pack page shows a cylinder)
- **Use the product card component** from the design system — visual consistency
- **Link to product pages, not external sites**

---

# SECTION 11: CASE STUDY / PROJECT SPOTLIGHT

## Purpose

| Attribute | Detail |
|---|---|
| **SEO Function** | Real project content is an E-E-A-T goldmine — Google's raters specifically look for "evidence of real-world application." Long-tail keywords appear naturally in project descriptions. |
| **UX Function** | Social proof at the product level. "This exact product was used in a real project, successfully." More persuasive than generic testimonials. |
| **CRO Function** | Prospect thinks: "If this worked for an injection moulding plant in Ahmedabad, it'll work for mine." Reduces perceived risk of ordering from a new supplier. |

## Structure

```html
<section class="section">
  <div class="container grid grid-2-1">

    <div>
      <span class="text-label">PROJECT SPOTLIGHT</span>
      <h2>{Case Study Title}</h2>
      <p>{3–4 sentences: what the client needed, what Honeywell supplied,
         what the result was. Include product specs, quantity, and timeline.}</p>

      <div class="project-stats">
        <div><strong>Products:</strong> {products supplied}</div>
        <div><strong>Industry:</strong> {industry}</div>
        <div><strong>Location:</strong> {city, state}</div>
        <div><strong>Delivery:</strong> {timeline}</div>
      </div>

      <a href="{CASE_STUDY_URL}" class="btn btn-outline btn-sm">
        Read Full Case Study →
      </a>
    </div>

    <div>
      <img src="{PROJECT_IMAGE}" alt="{project alt text}"
           loading="lazy" class="img-product">
    </div>

  </div>
</section>
```

## Rules
- **Show the most relevant case study** for this product type. DA cylinder page → injection moulding case study. Power pack for press page → press machine case study.
- **If no case study exists yet**, skip this section entirely. An empty or fake case study is worse than none.
- **Include real numbers:** "12 double acting cylinders, 80mm bore × 500mm stroke, delivered in 10 working days"
- **Link to the full case study page** for those who want more detail

---

# SECTION 12: FAQ

## Purpose

| Attribute | Detail |
|---|---|
| **SEO Function** | FAQPage schema generates rich snippets. Captures "People Also Ask" positions for product-specific questions. Targets long-tail question keywords that don't warrant dedicated pages. Each Q&A is a ranking opportunity for a different search query. |
| **UX Function** | Answers the 5–6 most common questions buyers ask about this specific product BEFORE they have to call or email. Reduces friction between "interested" and "inquiring." |
| **CRO Function** | FAQ positioned near bottom of page catches "almost convinced" visitors. Without answers to their last questions, they leave. With answers, they click the CTA. Proven to increase conversion rates by 10–15% on B2B product pages. |

## Structure

```html
<section class="section section-alt">
  <div class="container">

    <h2>Frequently Asked Questions — {PRODUCT_NAME}</h2>

    <div class="faq-list">

      <div class="faq-item">
        <button class="faq-trigger" aria-expanded="false">
          <span>{Question — product-specific}</span>
          <svg class="faq-chevron">...</svg>
        </button>
        <div class="faq-answer">
          <p>{Answer — 2–4 sentences. Include internal link where relevant.}</p>
        </div>
      </div>

      <!-- Repeat for 5–6 questions -->

    </div>

  </div>
</section>
```

## Product-Specific FAQ Questions (adapt per product):

**For Cylinder Pages:**
1. What bore sizes are available for {PRODUCT_NAME}?
2. What is the maximum stroke length for this cylinder?
3. What working pressure can this cylinder handle?
4. Can you manufacture this cylinder to custom specifications?
5. What is the delivery time for {PRODUCT_NAME}?
6. What is the price of a {PRODUCT_NAME}?

**For Power Pack Pages:**
1. What motor power options are available?
2. What is the tank capacity?
3. Can this power pack be customized for my application?
4. Does it come fully assembled and tested?
5. What valves are included?
6. What is the delivery time and pricing?

## Rules
- **5–6 questions per product page** — not more
- **Questions must be different from the homepage FAQ** — no duplication
- **Each answer:** 2–4 sentences, includes ≥ 1 internal link
- **Price question is mandatory** — never dodge it. Explain what drives pricing and CTA to quote.
- **Implement FAQPage schema** (see Section 14)

---

# SECTION 13: INQUIRY CTA

## Purpose

| Attribute | Detail |
|---|---|
| **SEO Function** | Contains secondary keyword mention + geo-modifier. Reinforces page topic for Google. |
| **UX Function** | Final conversion opportunity. The visitor has consumed all product information. Now give them the easiest possible path to act. |
| **CRO Function** | Bottom-of-page CTA captures the 30–40% of B2B leads that come from page-end CTAs. The visitor has scrolled through specs, quality, applications, FAQ — they're now maximally informed and ready to act. This CTA must have ZERO friction. |

## Structure

```html
<section class="section section-dark">
  <div class="container grid grid-7-5">

    <!-- Left: CTA Copy -->
    <div>
      <h2>Get a Quote for {PRODUCT_NAME}s</h2>

      <p>
        Tell us your specifications — bore size, stroke length, working pressure,
        mounting type, and quantity. Our engineering team will review your
        requirement and send a detailed quotation within 24 hours.
      </p>

      <div class="cta-contact-options">
        <a href="tel:+919924343873" class="cta-option">
          📞 Call: +91 9924343873
        </a>
        <a href="https://wa.me/919924343873" class="cta-option">
          💬 WhatsApp: Quick Quote
        </a>
        <a href="mailto:sales@honeywellhydraulics.com" class="cta-option">
          📧 Email: sales@honeywellhydraulics.com
        </a>
      </div>
    </div>

    <!-- Right: Mini Quote Form -->
    <div class="cta-form-card">
      <h3>Quick Quote Request</h3>
      <form action="/api/quote" method="POST">
        <input type="hidden" name="product" value="{PRODUCT_NAME}">
        <input type="text" name="name" placeholder="Your Name *" required>
        <input type="tel" name="phone" placeholder="Phone / WhatsApp *" required>
        <select name="product_type">
          <option value="{PRODUCT_NAME}">{PRODUCT_NAME}</option>
          <!-- Pre-selected to this product -->
        </select>
        <textarea name="specs" placeholder="Your specifications — bore, stroke, pressure, qty..."></textarea>
        <button type="submit" class="btn btn-primary btn-lg btn-full">
          SUBMIT INQUIRY →
        </button>
      </form>
      <p class="form-trust">🔒 No spam. Response within 2 hours.</p>
    </div>

  </div>
</section>
```

## Rules
- **Product pre-selected** in dropdown — reduce friction
- **Only 4 fields:** name, phone, product (pre-filled), specs (optional)
- **Dark background** to visually separate from content above
- **Phone + WhatsApp + Email** all visible alongside form — multiple channels
- **"Response within 2 hours"** creates urgency and reduces form anxiety

---

# SECTION 14: STRUCTURED DATA

## Complete JSON-LD Per Product Page

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.honeywellhydraulics.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "{PARENT_SILO}",
          "item": "https://www.honeywellhydraulics.com{PARENT_URL}"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "{PRODUCT_NAME}",
          "item": "https://www.honeywellhydraulics.com{PARENT_URL}{PRODUCT_SLUG}/"
        }
      ]
    },
    {
      "@type": "Product",
      "name": "{PRODUCT_NAME}",
      "description": "{Meta description text}",
      "image": [
        "https://www.honeywellhydraulics.com/images/products/{PRODUCT_SLUG}-front.webp",
        "https://www.honeywellhydraulics.com/images/products/{PRODUCT_SLUG}-side.webp"
      ],
      "brand": {
        "@type": "Brand",
        "name": "Honeywell Hydraulics"
      },
      "manufacturer": {
        "@id": "https://www.honeywellhydraulics.com/#organization"
      },
      "category": "{PARENT_SILO}",
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Bore Size Range",
          "value": "{BORE_RANGE}"
        },
        {
          "@type": "PropertyValue",
          "name": "Maximum Stroke Length",
          "value": "{STROKE_RANGE}"
        },
        {
          "@type": "PropertyValue",
          "name": "Working Pressure",
          "value": "{WORKING_PRESSURE}"
        },
        {
          "@type": "PropertyValue",
          "name": "Mounting Type",
          "value": "{MOUNTING_OPTIONS}"
        }
      ],
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition",
        "priceCurrency": "INR",
        "price": "0",
        "seller": {
          "@id": "https://www.honeywellhydraulics.com/#organization"
        },
        "deliveryLeadTime": {
          "@type": "QuantitativeValue",
          "minValue": 7,
          "maxValue": 20,
          "unitCode": "DAY"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "{REVIEW_COUNT}",
        "bestRating": "5"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "{FAQ_Q1}",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "{FAQ_A1}"
          }
        },
        {
          "@type": "Question",
          "name": "{FAQ_Q2}",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "{FAQ_A2}"
          }
        }
      ]
    }
  ]
}
```

---

# PER-PRODUCT VARIABLE REFERENCE

## Hydraulic Cylinders

| Variable | Double Acting | Single Acting | Flange Mount | Clevis Mount | Trunnion Mount | Tie Rod | Telescopic | Square Body Jack |
|---|---|---|---|---|---|---|---|---|
| `H1` | Double Acting Hydraulic Cylinder | Single Acting Hydraulic Cylinder | Hydraulic Cylinder — Flange Mounting | Hydraulic Cylinder — Clevis Mounting | Hydraulic Cylinder — Trunnion Mounting | Tie Rod Hydraulic Cylinder | Telescopic Hydraulic Cylinder | Square Body Hydraulic Jack |
| `Primary KW` | double acting hydraulic cylinder manufacturer | single acting hydraulic cylinder manufacturer | hydraulic cylinder flange mounting | hydraulic cylinder clevis mounting | hydraulic cylinder trunnion mounting | hydraulic tie rod cylinder manufacturer | telescopic hydraulic cylinder manufacturer | square body hydraulic jack manufacturer |
| `Bore` | 40–300mm | 40–250mm | 40–300mm | 40–200mm | 50–300mm | 40–200mm | 40–200mm | 40–150mm |
| `Stroke` | Up to 3000mm | Up to 2000mm | Up to 3000mm | Up to 1500mm | Up to 2000mm | Up to 2000mm | Up to 5000mm | Up to 300mm |
| `Pressure` | 210 bar | 210 bar | 210 bar | 160 bar | 210 bar | 160 bar | 200 bar | 200 bar |
| `Key Applications` | Press, lift, moulding | Lift, clamp, vertical | Press, moulding, forming | Tipping, dump, steering | Crane, heavy pivot | General industrial | Construction, tipper | Lifting, alignment |
| `Industries` | IM, Press, Auto, Agri | Printing, Wood, Agri | IM, Press, Auto, Steel | Agri, Construction | Rolling, Steel, Crane | Press, Auto, General | Construction, Agri | General |
| `Related 1` | Single Acting | Double Acting | Clevis Mount | Flange Mount | Clevis Mount | Double Acting | Double Acting | Double Acting |
| `Related 2` | Flange Mount | Clevis Mount | Trunnion Mount | Trunnion Mount | Flange Mount | Flange Mount | Tie Rod | Flange Mount |
| `Related 3` | 3-Phase PP | Single-Phase PP | DA Cylinder | DA Cylinder | DA Cylinder | Press PP | Construction App | SA Cylinder |

## Hydraulic Power Packs

| Variable | 3-Phase | Single-Phase | For Press | For Lift | With Accumulator | Solenoid Valve | Hand Lever |
|---|---|---|---|---|---|---|---|
| `H1` | 3 Phase Hydraulic Power Pack | Single Phase Hydraulic Power Pack | Hydraulic Power Pack for Press | Hydraulic Power Pack for Lift | Hydraulic Power Pack with Accumulator | Hydraulic Power Pack — Solenoid Valve | Hand Lever Operated Power Pack |
| `Primary KW` | 3 phase hydraulic power pack manufacturer | single phase hydraulic power pack | hydraulic power pack for press machine | hydraulic power pack for lift | hydraulic power pack with accumulator | hydraulic power pack solenoid valve | hand lever operated hydraulic power pack |
| `Key Specs` | 415V, 1–50 HP | 220V, 0.5–5 HP | High-low circuit, rapid approach | Smooth start/stop, low noise | Pressure storage, intermittent duty | Multi-station, automated | Manual operation, portable |
| `Key Applications` | Factory machinery | Small workshop, lab | Stamping, bending, forming | Goods lift, elevator | Intermittent high-force | Assembly line, automation | Field use, mobile |
| `Related 1` | Single-Phase PP | 3-Phase PP | PP for Lift | PP for Press | 3-Phase PP | Accumulator PP | Single-Phase PP |
| `Related 2` | Press PP | Hand Lever PP | DA Cylinder | DA Cylinder | Solenoid PP | 3-Phase PP | Clevis Cylinder |
| `Related 3` | DA Cylinder | SA Cylinder | Press App Page | Goods Lift App | Hydraulic Systems | Automotive Industry | — |

---

# CHECKLIST — Before Publishing Any Product Page

```
CONTENT
[ ] H1 contains primary keyword + geo-modifier
[ ] Primary keyword in first 100 words of overview
[ ] Overview is unique — not copy-pasted from another product page
[ ] All spec table values are accurate and verified
[ ] FAQ questions are product-specific (not duplicated from homepage)
[ ] FAQ answers contain ≥ 1 internal link each
[ ] Manufacturing section describes process specific to THIS product
[ ] Case study is relevant to THIS product type (or section omitted)
[ ] Related products show 2 same-silo + 1 cross-silo

SEO
[ ] Unique title tag ≤ 60 chars
[ ] Unique meta description 150–160 chars
[ ] Self-referencing canonical
[ ] Breadcrumb schema (BreadcrumbList)
[ ] Product schema (Product + Offer)
[ ] FAQPage schema (5–6 Q&A)
[ ] All images have keyword-rich alt text
[ ] All images are WebP with width/height

CONVERSION
[ ] Hero CTA visible without scrolling
[ ] Phone number visible without scrolling
[ ] WhatsApp link functional
[ ] Quote form pre-selects this product
[ ] At least 3 CTAs on the page (hero, mid-page, bottom)
[ ] Spec sheet download available (or coming soon)

LINKS
[ ] Breadcrumb links to pillar page
[ ] Overview links to ≥ 1 blog article
[ ] Applications link to application pages
[ ] Industries link to industry pages
[ ] Related products link to 3 sibling/complementary pages
[ ] Case study links to full case study page
[ ] FAQ links to relevant pages
[ ] Bottom CTA links to /request-quote/
```

---

*Product page template prepared by Antigravity AI — June 5, 2026*  
*Part of the Honeywell Hydraulics rebuild series*  
*Companion: [Homepage Blueprint](file:///C:/Users/DELL/.gemini/antigravity-ide/brain/66607213-1ab9-45f5-97ea-411e255792cd/honeywell-homepage-blueprint.md) · [Design System](file:///C:/Users/DELL/.gemini/antigravity-ide/brain/66607213-1ab9-45f5-97ea-411e255792cd/honeywell-design-system.md) · [Technical SEO](file:///C:/Users/DELL/.gemini/antigravity-ide/brain/66607213-1ab9-45f5-97ea-411e255792cd/honeywell-technical-seo-spec.md) · [Content Strategy](file:///C:/Users/DELL/.gemini/antigravity-ide/brain/66607213-1ab9-45f5-97ea-411e255792cd/honeywell-content-strategy.md) · [Homepage Copy](file:///C:/Users/DELL/.gemini/antigravity-ide/brain/66607213-1ab9-45f5-97ea-411e255792cd/honeywell-homepage-copy.md)*
