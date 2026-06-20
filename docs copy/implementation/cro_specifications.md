# 📈 Honeywell Hydraulics — B2B CRO Specifications

**Prepared By:** B2B CRO Specialist
**Date:** June 6, 2026

## 1. CTA AUDIT & MISSING PAGES

**Current State:** The website utilizes a solid TOFU/MOFU/BOFU CTA structure, but **every single CTA points to a page that does not exist.**

**Missing Conversion Pages to Create:**
- `/request-quote/` (BOFU - Direct Sales)
- `/contact/` (General inquiry)
- `/contact/engineering/` or `/contact/support/` (MOFU - Technical Consulting)
- `/resources/downloads/` (TOFU - Lead Capture)

---

## 2. FORM DESIGNS & REQUIRED FIELDS

### A. Request a Quote Form (`/request-quote/`)
**Goal:** Capture high-intent BOFU leads with enough technical context to assign to a sales engineer immediately.

**Form Fields:**
1.  **Full Name** (Required)
2.  **Company Name** (Required)
3.  **Email Address** (Required - Professional preferred)
4.  **Phone / WhatsApp Number** (Required)
5.  **Product Category** (Dropdown, Required):
    - Hydraulic Cylinders
    - Hydraulic Power Packs
    - Manifold Blocks
    - Custom Hydraulic Systems
    - Cylinder Repair/Retrofit
6.  **Application / Industry** (Dropdown, Optional)
7.  **Technical Requirements / Specs** (Textarea, Required): "Please provide bore/stroke sizes, pressure requirements, or a brief description of your project."
8.  **File Upload** (Optional): "Upload CAD drawing, photo of old part, or spec sheet (PDF/JPG)."

### B. Engineering Consultation Form (`/contact/engineering/`)
**Goal:** Capture MOFU leads who need system design help or retrofitting analysis.

**Form Fields:**
1.  **Name & Company** (Required)
2.  **Contact Details (Email & Phone)** (Required)
3.  **Current Challenge** (Textarea, Required): "Describe the problem (e.g., slow cycle time, overheating, leaks)."
4.  **Machine Type** (Text input)

---

## 3. LEAD ROUTING WORKFLOW

To ensure rapid response (critical in Indian B2B manufacturing):

1.  **Form Submission:** User clicks "Submit".
2.  **User Experience:** Redirects to `/thank-you/` (Triggers GA4 Event).
3.  **Email Routing:**
    - If "Request Quote" -> routes to `sales@honeywellhydraulics.com`.
    - If "Engineering Consultation" -> routes to `engineering@honeywellhydraulics.com`.
4.  **Auto-Responder:** User receives immediate branded email: "Thank you. An engineer will review your specs and contact you within [2] hours."
5.  **WhatsApp Integration:** Integrate a script that forwards high-priority quote requests directly to the sales manager's WhatsApp.

---

## 4. THANK YOU PAGE DESIGN (`/thank-you/`)

*This page must be `noindex`.*

**H1:** Thank You for Reaching Out
**Body:** "Your request has been successfully submitted. Our engineering team is reviewing your requirements and will contact you shortly."
**Secondary Action:** "While you wait, explore our [Product Gallery](/resources/gallery/products/) or [Read our Technical Blog](/blog/)."

---

## 5. CONVERSION TRACKING EVENTS (GA4 / GTM)

Configure Google Tag Manager to fire the following events to GA4 and Google Ads:

| Action | GA4 Event Name | Parameter |
| :--- | :--- | :--- |
| Quote Form Submit | `generate_lead` | `form_type: request_quote` |
| Contact Form Submit | `generate_lead` | `form_type: general_contact` |
| WhatsApp Button Click | `click_whatsapp` | `page_location` |
| Phone Number Click | `click_phone` | `page_location` |
| PDF Download | `file_download` | `file_name` |

---

## 6. FLOATING WHATSAPP WIDGET

**Specification:** Install a persistent floating WhatsApp button in the bottom right corner of all mobile and desktop screens.
**Pre-filled Message:** "Hello Honeywell Hydraulics, I am on the page: {Page_Title} and I have a requirement."
