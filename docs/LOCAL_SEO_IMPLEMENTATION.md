# Local SEO Implementation

> **Living Document** — Reflects exact implementation in `lib/constants.ts`, `app/robots.ts`, `components/Footer.tsx`, and the `data/homepage.ts` locations data.

---

## 1. HQ Location (Primary)

**Source:** `lib/constants.ts → COMPANY_INFO`

```typescript
address: {
  streetAddress: 'B-18, Suryam Plaza Estate, Near Nilkanth Estate, Road no. 15, Kathwada GIDC',
  addressLocality: 'Ahmedabad',
  addressRegion: 'Gujarat',
  postalCode: '382430',
  addressCountry: 'IN'
},
geo: { latitude: 23.035, longitude: 72.668 },
openingHours: { opens: '09:00', closes: '19:00' },
googleMapsUrl: 'https://maps.app.goo.gl/GYx2VmdKC4PJWww16'
```

This data automatically populates:
1. `ManufacturingBusiness` JSON-LD on the homepage
2. NAP block in `Footer.tsx`
3. Contact page address block

---

## 2. NAP Citation Consistency

The NAP is hardcoded identically in `components/Footer.tsx` to match Google Business Profile exactly:

```
Name:     Honeywell Hydraulics
Address:  B-18, Suryam Plaza Estate, Near Nilkanth Estate,
          Road No. 15, Kathwada GIDC,
          Ahmedabad, Gujarat 382430, India
Phone:    +91-9924343873
Email:    sales@honeywellhydraulics.com
WhatsApp: https://wa.me/919924343873
```

**Critical rule:** If the GBP address changes, update `lib/constants.ts` first. The Footer and schema pull from it automatically.

---

## 3. Service Area Pages

Homepage `LocationsSection` links to 6 service area pages. All share the HQ schema but target regional keywords via page titles and H1s.

| City/Region | Page URL | Target Industries |
|------------|----------|-------------------|
| Gujarat | `/locations/gujarat-facility/` | Injection Moulding, Automotive, Steel, Textile |
| Maharashtra | `/locations/maharashtra/` | Automotive, Manufacturing, Engineering |
| Indore | `/locations/indore/` | Auto Parts, Pharmaceuticals, Food Processing |
| West Bengal | `/locations/west-bengal/` | Steel & Mining, Heavy Engineering, Manufacturing |
| Rajasthan | `/locations/rajasthan/` | Auto Components, Cement, Mining |
| Pan India | `/locations/india/` | OEM Supply, Project Orders, Export |

### Schema for Location Pages

Location pages should inject a `WebPage` schema with:
- `areaServed` set to the target region
- `parentOrganization` pointing to the HQ `@id`

```typescript
// Example for Maharashtra
buildWebPageJsonLd(
  'Hydraulic Cylinder Supplier in Maharashtra',
  'Factory-direct hydraulic equipment supply to Pune, Mumbai...',
  '/locations/maharashtra/'
)
```

---

## 4. LocalBusiness Schema Fields

The `ManufacturingBusiness` schema includes all fields required for a rich knowledge panel:

| Field | Value |
|-------|-------|
| `@type` | `ManufacturingBusiness` |
| `priceRange` | `₹₹` |
| `telephone` | `+91-9924343873` |
| `email` | `sales@honeywellhydraulics.com` |
| `latitude` | `23.035` |
| `longitude` | `72.668` |
| `openingHours` | Mon–Sat, 09:00–19:00 |
| `image` | `/images/hero/hydraulic-cylinder-manufacturing-ahmedabad.png` |

---

## 5. Footer Local SEO Links

`components/Footer.tsx` includes a dedicated locations row:

```
Gujarat | Maharashtra | Indore | West Bengal | Rajasthan | Pan India
```

These links form the internal link matrix that signals Googlebot about service areas.

---

## 6. Google Maps Integration

- Footer links to `COMPANY_INFO.googleMapsUrl`
- WhatsApp CTA links: `wa.me/919924343873`
- Both are configured in `lib/constants.ts`

---

## 7. Language & Locale

- `<html lang="en-IN">` — signals Indian English to search engines
- OpenGraph: `locale: 'en_IN'`
- Schema `ContactPoint.availableLanguage: ['en', 'hi', 'gu']` — signals multilingual support

---

## 8. Sitemap Priority for Local Pages

From `next-sitemap.config.cjs`:

```javascript
// Key location pages — Priority 0.9
const keyLocations = ['/locations/ahmedabad', '/locations/gujarat', '/locations/india'];

// Other location pages — Priority 0.7
if (path.startsWith('/locations/')) → priority: 0.7
```

---

## 9. Industry Targeting (National SEO)

The Industries mega menu and `IndustriesSection` on the homepage target national verticals. Each industry page provides a topical authority signal:

| Industry | Target Query Pattern |
|----------|---------------------|
| Injection Moulding | "hydraulic cylinder for injection moulding machine" |
| Automotive | "hydraulic power pack for automotive assembly" |
| Steel & Metallurgy | "heavy duty hydraulic cylinder for rolling mill" |
| Construction Equipment | "boom cylinder for excavator manufacturer" |
| Material Handling | "hydraulic lifting cylinder for warehouse" |
| Special Purpose Machines | "custom hydraulic cylinder for SPM" |
