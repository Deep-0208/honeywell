# Local SEO Implementation — Honeywell Hydraulics

**Consolidated By:** Senior Local SEO Specialist
**Date:** June 7, 2026
**Sources:** `local_seo_schema.md`, `honeywell-technical-seo-spec.md` §17, `docs/content/locations/*`

---

## 1. NAP Standard (Canonical — Use Everywhere)

```
Name:    Honeywell Hydraulics
Address: B-18, Suryam Plaza Estate, Near Nilkanth Estate, Road no. 15, Kathwada GIDC, Ahmedabad, Gujarat 382430, India
Phone:   +91 9924343873
Email:   sales@honeywellhydraulics.com
```

> **Rule:** This exact NAP must appear identically in the website header, footer, contact page, all schema markup, Google Business Profile, and every citation.

---

## 2. Location Pages

### Target Cities

| # | City | URL | Content Status | Priority |
|---|---|---|---|---|
| 1 | Ahmedabad (HQ) | `/locations/ahmedabad/` | ✅ Full content exists | 🔴 Critical |
| 2 | Gujarat (State) | `/locations/gujarat/` | ✅ Full content exists | 🔴 Critical |
| 3 | India (National) | `/locations/india/` | ✅ Full content exists | 🔴 Critical |
| 4 | Surat | `/locations/surat/` | ✅ Full content exists | 🟠 High |
| 5 | Vadodara | `/locations/vadodara/` | ✅ Full content exists | 🟠 High |
| 6 | Rajkot | `/locations/rajkot/` | ✅ Full content exists | 🟠 High |
| 7 | Bhavnagar | `/locations/bhavnagar/` | ✅ Full content exists | 🟡 Medium |
| 8 | Gandhinagar | `/locations/gandhinagar/` | ✅ Full content exists | 🟡 Medium |
| 9 | Vapi | `/locations/vapi/` | ✅ Full content exists | 🟡 Medium |
| 10 | Jamnagar | `/locations/jamnagar/` | ✅ Full content exists | 🟡 Medium |

---

## 3. Metadata Structure Per Location Page

### Ahmedabad (HQ)
```
Title:       Hydraulic Cylinder Manufacturer in Ahmedabad | Honeywell Hydraulics
Description: Hydraulic cylinder, power pack & manifold block manufacturer in Kathwada GIDC, Ahmedabad, Gujarat. Factory-direct pricing. 200+ clients served. Get a free quote.
H1:          Hydraulic Cylinder Manufacturer in Ahmedabad
```

### Service-Area Cities (Surat, Rajkot, Vadodara, etc.)
```
Title:       Hydraulic Cylinder Manufacturer in {City} | Honeywell Hydraulics
Description: Hydraulic cylinder manufacturer serving {City}, Gujarat. Cylinders, power packs & complete systems. {Delivery promise to city}. {Number}+ clients. Contact us today.
H1:          Hydraulic Cylinder Manufacturer in {City}
```

---

## 4. ManufacturingBusiness Schema

### HQ Location (Ahmedabad)
```json
{
  "@context": "https://schema.org",
  "@type": "ManufacturingBusiness",
  "@id": "https://www.honeywellhydraulics.com/locations/ahmedabad/#localbusiness",
  "name": "Honeywell Hydraulics — Ahmedabad",
  "image": "https://www.honeywellhydraulics.com/images/factory/honeywell-hydraulics-factory.jpg",
  "url": "https://www.honeywellhydraulics.com/locations/ahmedabad/",
  "telephone": "+91-9924343873",
  "email": "sales@honeywellhydraulics.com",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "B-18, Suryam Plaza Estate, Near Nilkanth Estate, Road no. 15, Kathwada GIDC",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "postalCode": "382430",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 23.035,
    "longitude": 72.668
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "19:00"
    }
  ],
  "areaServed": [
    { "@type": "City", "name": "Ahmedabad" },
    { "@type": "State", "name": "Gujarat" }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "50",
    "bestRating": "5"
  }
}
```

### Service-Area Location (e.g., Surat)
```json
{
  "@context": "https://schema.org",
  "@type": "ManufacturingBusiness",
  "name": "Honeywell Hydraulics — Serving Surat",
  "description": "Hydraulic cylinder manufacturer serving Surat, Gujarat. Delivery to Sachin GIDC, Pandesara, and Hazira within 1-3 days.",
  "url": "https://www.honeywellhydraulics.com/locations/surat/",
  "telephone": "+91-9924343873",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "B-18, Suryam Plaza Estate, Near Nilkanth Estate, Road no. 15, Kathwada GIDC",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "postalCode": "382430",
    "addressCountry": "IN"
  },
  "areaServed": {
    "@type": "City",
    "name": "Surat",
    "containedIn": { "@type": "State", "name": "Gujarat" }
  }
}
```

> **Critical:** The physical `address` is always the Ahmedabad HQ. For service-area pages, we are NOT claiming an office in that city. The `areaServed` declares the business serves that region from its actual location.

---

## 5. FAQ Rules Per Location Page

Each location page must include 3–5 city-specific FAQs with `FAQPage` schema. Examples:

**Surat:**
- "Do you deliver hydraulic cylinders to Surat?"
- "What is the delivery time from Ahmedabad to Surat?"
- "Which GIDC areas in Surat do you serve?"

**Rajkot:**
- "Do you manufacture hydraulic cylinders for Rajkot industries?"
- "What industries in Rajkot use your hydraulic equipment?"
- "Can I visit your factory from Rajkot?"

---

## 6. Geo Coordinates Reference

| City | Latitude | Longitude | Notes |
|---|---|---|---|
| Ahmedabad (HQ) | 23.035 | 72.668 | Kathwada GIDC — actual factory location |
| Surat | 21.170 | 72.831 | Reference only (no office) |
| Vadodara | 22.307 | 73.181 | Reference only |
| Rajkot | 22.304 | 70.802 | Reference only |
| Bhavnagar | 21.764 | 72.153 | Reference only |
| Gandhinagar | 23.215 | 72.637 | Reference only |
| Vapi | 20.372 | 72.904 | Reference only |
| Jamnagar | 22.471 | 70.058 | Reference only |

> Only the Ahmedabad HQ coordinates should appear in `geo` schema. Service-area pages omit `geo` and use only `areaServed`.

---

## 7. Internal Linking Rules for Location Pages

Each location page must link to:
- All 4 product pillar pages
- Industries prevalent in that city/region
- Relevant service pages
- `/request-quote/`
- Other nearby location pages (geo-cluster linking)

---

## 8. Google Business Profile Checklist

- [ ] Claim and verify profile at Kathwada GIDC address
- [ ] Primary Category: `Hydraulic Equipment Supplier`
- [ ] Secondary Categories: `Manufacturer`, `Industrial Equipment Supplier`
- [ ] Add top products with photos and links to `/request-quote/`
- [ ] Upload photos: factory exterior (with signage), factory floor, CNC machines, finished products
- [ ] Service areas: Ahmedabad, Surat, Rajkot, Vadodara, Gujarat
- [ ] UTM-tracked website link: `https://www.honeywellhydraulics.com/?utm_source=gmb&utm_medium=organic&utm_campaign=local`
- [ ] Weekly GBP posts scheduled
