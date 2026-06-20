# 📍 Honeywell Hydraulics — Local SEO Schema & Checklist

**Prepared By:** Local SEO Expert
**Date:** June 6, 2026

## 1. NAP CONSISTENCY VERIFICATION

**Standard NAP to be used strictly across the entire web:**
- **Name:** Honeywell Hydraulics
- **Address:** B-18, Suryam Plaza Estate, Near Nilkanth Estate, Road no. 15, Kathwada GIDC, Ahmedabad, Gujarat 382430, India
- **Phone:** +91 9924343873
- **Email:** sales@honeywellhydraulics.com *(Replace placeholder)*

*Note: The current schema uses generic Ahmedabad coordinates (23.0225, 72.5714). The correct coordinates for Kathwada GIDC are roughly **23.035, 72.668**. Update this.*

---

## 2. GENERATED SCHEMA MARKUP (NO PLACEHOLDERS)

### A. Organization Schema (For Homepage & About Page)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Honeywell Hydraulics",
  "url": "https://www.honeywellhydraulics.com/",
  "logo": "https://www.honeywellhydraulics.com/images/logo/honeywell-hydraulics-logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9924343873",
    "contactType": "sales",
    "areaServed": "IN",
    "availableLanguage": ["en", "hi", "gu"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "B-18, Suryam Plaza Estate, Near Nilkanth Estate, Road no. 15, Kathwada GIDC",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "postalCode": "382430",
    "addressCountry": "IN"
  }
}
</script>
```

### B. LocalBusiness Schema (For Location Pages - e.g., `/locations/ahmedabad/`)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ManufacturingBusiness",
  "name": "Honeywell Hydraulics - Ahmedabad",
  "image": "https://www.honeywellhydraulics.com/images/factory/honeywell-hydraulics-factory.jpg",
  "url": "https://www.honeywellhydraulics.com/locations/ahmedabad/",
  "telephone": "+91-9924343873",
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
    "latitude": 23.0350,
    "longitude": 72.6680
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ],
    "opens": "09:00",
    "closes": "19:00"
  },
  "areaServed": {
    "@type": "City",
    "name": "Ahmedabad"
  }
}
</script>
```

### C. FAQ Schema (Dynamic per page)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Do you manufacture hydraulic cylinders in Ahmedabad?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, our manufacturing facility is located in Kathwada GIDC, Ahmedabad. We design and build custom hydraulic cylinders for various industrial applications."
    }
  }, {
    "@type": "Question",
    "name": "What is the typical lead time for a custom cylinder?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Our standard production lead time for custom hydraulic cylinders is typically 2 to 4 weeks depending on the complexity and material availability."
    }
  }]
}
</script>
```

---

## 3. GOOGLE BUSINESS PROFILE (GBP) CHECKLIST

- [ ] **Claim/Verify Profile:** Ensure the business is verified via video/postcard at the Kathwada address.
- [ ] **Categories:** Set Primary Category to `Hydraulic Equipment Supplier`. Set Secondary Categories to `Manufacturer` and `Industrial Equipment Supplier`.
- [ ] **Products:** Manually add top products (Double Acting Cylinder, Power Pack) with photos and links to the `/request-quote/` page.
- [ ] **Photos:** Upload exterior building photo (showing signage), interior factory floor, CNC machines in operation, and finished products.
- [ ] **Service Areas:** Add Ahmedabad, Surat, Rajkot, Vadodara, and Gujarat as service areas.
- [ ] **UTM Tracking:** Update the GBP website link to `https://www.honeywellhydraulics.com/?utm_source=gmb&utm_medium=organic&utm_campaign=local`.

---

## 4. LOCATION PAGE QA CHECKLIST

For every city page (Surat, Rajkot, Vadodara, etc.):
- [ ] Is the H1 and Title Tag unique to the city?
- [ ] Does the page mention specific local industrial estates (e.g., Hazira in Surat, Shapar in Rajkot)?
- [ ] Does it have `ManufacturingBusiness` JSON-LD with `areaServed` pointing to the target city?
- [ ] Are the embedded Google Maps accurate to the HQ location?
- [ ] Are testimonials localized?
- [ ] Are internal links to product pages working correctly?
