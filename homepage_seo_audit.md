# 🔍 Comprehensive SEO Audit: Homepage (`/`)

I've audited the live URL (`https://honeywell-two.vercel.app/`) alongside the Next.js source code. Here is the prioritized checklist and the exact fixes required.

---

## 🔴 Critical Issues (Blocks Indexing / Major SEO Penalty)

### 1. Meta Robots (Crawlability & Indexing)
- **Status:** ❌ **FAIL**
- **Finding:** The homepage is globally blocking search engines! The `<meta name="robots">` tag evaluates to `noindex, nofollow`. Looking at `lib/seo.ts`, `noIndex` is hardcoded to `true` by default `noIndex = true, // Temporarily set to true while hosted on vercel.app`. `robots.ts` handles the vercel domain check properly, but the meta tags are hardcoded to block everything.
- **Exact Fix:**
  In `lib/seo.ts`, change the default `noIndex` parameter to check the environment variable dynamically:
  ```typescript
  noIndex = process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production'
  ```

---

## 🟠 High Priority (Rankings & CTR Impact)

### 2. Title Tag Length
- **Status:** ⚠️ **ISSUE**
- **Finding:** The current generated title is `<title>Hydraulic Cylinder & Power Pack Manufacturer in Ahmedabad | Honeywell Hydraulics</title>`. The length is **80 characters** (exceeds the 60 char limit). The `layout.tsx` title template is forcefully appending ` | Honeywell Hydraulics`.
- **Exact Fix:**
  In `app/(site)/page.tsx`, bypass the root template by using the `absolute` property for the homepage title:
  ```typescript
  export const metadata: Metadata = {
    ...buildMetadata({
      title: { absolute: "Hydraulic Cylinder & Powerpack Manufacturer | Honeywell" }, // 55 chars
      // ...
    })
  }
  ```

### 3. Meta Description CTA
- **Status:** ⚠️ **ISSUE**
- **Finding:** Length is perfect (159 chars), but it lacks a clear Call to Action (CTA) which reduces SERP Click-Through-Rate.
- **Exact Fix:**
  In `lib/constants.ts`, update `HOMEPAGE_DESCRIPTION` to include a CTA while staying under 160:
  ```typescript
  "Leading manufacturer of hydraulic cylinders & power packs in Ahmedabad. ISO 9001 certified. Serving 25+ industries across India. Get a free quote today!" // 156 chars
  ```

### 4. Open Graph Image
- **Status:** ⚠️ **ISSUE**
- **Finding:** The homepage is currently passing `image: '/images/og/default-og.jpg'` into `buildMetadata`. This uses the generic fallback rather than a page-specific visual.
- **Exact Fix:**
  In `app/(site)/page.tsx`, change the `image` path to the primary LCP hero image:
  ```typescript
  image: '/images/home/hero/custom-hydraulic-cylinder-manufacturer.webp'
  ```

---

## 🟡 Medium Priority (Best Practices & Performance)

### 5. Meta Keywords Tag
- **Status:** ⚠️ **ISSUE**
- **Finding:** The `<meta name="keywords">` tag is present in the source. Google explicitly ignores this tag, and leaving it exposes your exact keyword strategy to competitors.
- **Exact Fix:**
  Remove the `keywords` property completely from `lib/seo.ts` (`buildMetadata`) and delete `HOMEPAGE_KEYWORDS` from `lib/constants.ts` and `page.tsx`.

### 6. next/image Sizes Attribute (Client Logos)
- **Status:** ⚠️ **ISSUE**
- **Finding:** In `ClientLogosSection.tsx`, `<Image>` components lack the `sizes` attribute. Because `layout="responsive"` or fluid CSS widths might be used, Next.js can serve oversized images (e.g., generating `3840w` versions for small 240px logos).
- **Exact Fix:**
  Add the `sizes` prop to the logos in `components/homepage/ClientLogosSection.tsx`:
  ```tsx
  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 240px"
  ```

### 7. Mobile Tap Targets (Footer Social Links)
- **Status:** ⚠️ **ISSUE**
- **Finding:** The social media icons in the footer (LinkedIn, Facebook, X) are sized with Tailwind classes `w-7 h-7` (28x28px), which fails the minimum 44x44px touch target requirement for mobile accessibility.
- **Exact Fix:**
  In `app/(site)/layout.tsx` (or your footer component), increase the padding or minimum size of the anchor tags:
  ```tsx
  className="w-11 h-11 rounded-full flex items-center justify-center..." // 44x44px container
  ```

---

## 🟢 Passed Checks (No action needed)

- **Canonical Tag:** ✅ Valid and absolute (`https://www.honeywellhydraulics.com`).
- **Viewport:** ✅ Correctly set with `maximum-scale=5` to allow zooming.
- **Structured Data (JSON-LD):** ✅ Organization, ManufacturingBusiness, FAQPage, and BreadcrumbList are perfectly integrated into a single `@graph` array without conflicts.
- **Heading Structure:** ✅ Exactly one `<h1>` containing primary keywords. Proper `<h2>` → `<h3>` cascading in all sections (verified via source code grep).
- **Core Web Vitals:** ✅ LCP and CLS are excellent. The page is fully statically generated and loads in milliseconds. Hero image has `priority="high"` and below-the-fold images correctly default to `loading="lazy"`.
- **Internal Linking:** ✅ Nav, footer, and contextual links are correctly resolving to relative paths without trailing slash issues.
- **Accessibility (Contrast/ARIA):** ✅ Color contrast over CTAs and focus states are well-defined (`focus-visible:ring-honeywell-red`). `lang="en-IN"` is correctly set on `<html>`.

---

**Next Steps:** Let me know if you would like me to automatically apply these exact fixes to the codebase!
