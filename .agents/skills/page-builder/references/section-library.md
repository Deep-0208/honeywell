# Section Library — Complete Catalog

A catalog of 30+ reusable section patterns for the Honeywell Hydraulics website. Each section follows the design system from `docs/DESIGN_SYSTEM.md`.

---

## Section Pattern (Standard Template)

Every section follows this structure:

```tsx
<Section bg="white | gray | navy" aria-labelledby="<section-id>-heading">
  <Container>
    {/* Section header — centered */}
    <div className="text-center mb-12 flex flex-col items-center">
      <Heading variant="section" as="h2" id="<section-id>-heading"
        className="text-3xl sm:text-4xl text-honeywell-navy mb-4">
        Section Title
      </Heading>
      <div className="w-16 h-1 bg-honeywell-red rounded-full" aria-hidden="true" />
      <p className="text-brand-steelGray font-body text-base sm:text-lg max-w-2xl mx-auto mt-4">
        Description text.
      </p>
    </div>

    {/* Content */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Items */}
    </div>

    {/* Section CTA */}
    <div className="text-center mt-10">
      <Button href="/target/" variant="primary" size="lg"
        rightIcon={<ArrowRight className="w-5 h-5" />}>
        CTA Text
      </Button>
    </div>
  </Container>
</Section>
```

---

## PRODUCT SECTIONS

### 1. Product Overview

Two-column layout: text left, image/placeholder right.

```tsx
<Section bg="white" aria-labelledby="overview-heading">
  <Container>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <Heading variant="section" as="h2" id="overview-heading"
          className="text-3xl sm:text-4xl text-honeywell-navy mb-4">
          What is <Product Name>?
        </Heading>
        <div className="w-16 h-1 bg-honeywell-red rounded-full mb-6" aria-hidden="true" />
        <p className="text-brand-darkSlate font-body leading-relaxed mb-4">
          First paragraph — define the product, primary keyword in first 100 words.
        </p>
        <p className="text-brand-darkSlate font-body leading-relaxed mb-4">
          Second paragraph — how it works, technical detail.
        </p>
        <p className="text-brand-darkSlate font-body leading-relaxed">
          Third paragraph — Honeywell Hydraulics' approach and capability.
        </p>
      </div>
      <div className="bg-brand-surfaceGray border border-slate-200 rounded-sm p-8">
        {/* IMAGE PLACEHOLDER */}
        <div className="aspect-[4/3] bg-white rounded-sm flex items-center justify-center">
          <Settings className="w-12 h-12 text-brand-steelGray" aria-hidden="true" />
        </div>
      </div>
    </div>
  </Container>
</Section>
```

### 2. Key Features (Icon Grid)

3-column grid with icon, title, description.

```tsx
<Section bg="gray" aria-labelledby="features-heading">
  <Container>
    <div className="text-center mb-12 flex flex-col items-center">
      <Heading variant="section" as="h2" id="features-heading"
        className="text-3xl sm:text-4xl text-honeywell-navy mb-4">
        Key Features
      </Heading>
      <div className="w-16 h-1 bg-honeywell-red rounded-full" aria-hidden="true" />
    </div>
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
      {FEATURES.map((feature) => (
        <li key={feature.title}
          className="bg-white border border-slate-200 rounded-sm p-6 hover:border-honeywell-red transition-colors">
          <IconBox icon={feature.icon} variant="primary" className="mb-4" />
          <h3 className="text-lg font-display font-bold text-honeywell-navy mb-2">
            {feature.title}
          </h3>
          <p className="text-sm text-brand-steelGray font-body leading-relaxed">
            {feature.description}
          </p>
        </li>
      ))}
    </ul>
  </Container>
</Section>
```

### 3. Technical Specifications (Table)

Uses the SpecTable component.

```tsx
<Section bg="white" aria-labelledby="specs-heading">
  <Container>
    <div className="text-center mb-12 flex flex-col items-center">
      <Heading variant="section" as="h2" id="specs-heading"
        className="text-3xl sm:text-4xl text-honeywell-navy mb-4">
        Technical Specifications
      </Heading>
      <div className="w-16 h-1 bg-honeywell-red rounded-full" aria-hidden="true" />
    </div>
    <div className="max-w-4xl mx-auto">
      <SpecTable specs={PRODUCT_SPECS} />
    </div>
    <div className="text-center mt-8">
      <p className="text-sm text-brand-steelGray font-body mb-4">
        Need custom specifications? Our engineering team can design to your exact requirements.
      </p>
      <Button href="/request-quote/" variant="outline" size="md">
        Request Custom Specs
      </Button>
    </div>
  </Container>
</Section>
```

### 4. Operating Principle

Step-by-step numbered process.

```tsx
<Section bg="gray" aria-labelledby="principle-heading">
  <Container>
    <div className="text-center mb-12 flex flex-col items-center">
      <Heading variant="section" as="h2" id="principle-heading"
        className="text-3xl sm:text-4xl text-honeywell-navy mb-4">
        How It Works
      </Heading>
      <div className="w-16 h-1 bg-honeywell-red rounded-full" aria-hidden="true" />
    </div>
    <div className="max-w-3xl mx-auto space-y-8">
      {STEPS.map((step, i) => (
        <div key={step.title} className="flex gap-6 items-start">
          <span className="w-10 h-10 rounded-full bg-honeywell-red text-white text-lg font-bold flex items-center justify-center shrink-0">
            {i + 1}
          </span>
          <div>
            <h3 className="text-lg font-display font-bold text-honeywell-navy mb-2">{step.title}</h3>
            <p className="text-sm text-brand-steelGray font-body leading-relaxed">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  </Container>
</Section>
```

### 5. Applications

Card grid linking to application pages.

```tsx
<Section bg="white" aria-labelledby="applications-heading">
  <Container>
    <div className="text-center mb-12 flex flex-col items-center">
      <Heading variant="section" as="h2" id="applications-heading"
        className="text-3xl sm:text-4xl text-honeywell-navy mb-4">
        Applications
      </Heading>
      <div className="w-16 h-1 bg-honeywell-red rounded-full" aria-hidden="true" />
      <p className="text-brand-steelGray font-body text-base sm:text-lg max-w-2xl mx-auto mt-4">
        Where this product is used across industrial applications.
      </p>
    </div>
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
      {APPLICATIONS.map((app) => (
        <li key={app.name}>
          <Link href={app.href}
            className="block bg-brand-surfaceGray border border-slate-200 rounded-sm p-6 hover:border-honeywell-red hover:shadow-md transition-all duration-200 group">
            <h3 className="text-lg font-display font-bold text-honeywell-navy mb-2 group-hover:text-honeywell-red transition-colors">
              {app.name}
            </h3>
            <p className="text-sm text-brand-steelGray font-body leading-relaxed mb-3">
              {app.description}
            </p>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-honeywell-red font-body">
              Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  </Container>
</Section>
```

### 6. Industries Served

Linked industry cards.

```tsx
<Section bg="gray" aria-labelledby="industries-heading">
  <Container>
    <div className="text-center mb-12 flex flex-col items-center">
      <Heading variant="section" as="h2" id="industries-heading"
        className="text-3xl sm:text-4xl text-honeywell-navy mb-4">
        Industries Served
      </Heading>
      <div className="w-16 h-1 bg-honeywell-red rounded-full" aria-hidden="true" />
    </div>
    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4" role="list">
      {INDUSTRIES.map((industry) => (
        <li key={industry.name}>
          <Link href={industry.href}
            className="block bg-white border border-slate-200 rounded-sm p-5 text-center hover:border-honeywell-red hover:shadow-md transition-all duration-200 group">
            <p className="font-display font-bold text-honeywell-navy group-hover:text-honeywell-red transition-colors">
              {industry.name}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  </Container>
</Section>
```

### 7. Product Comparison

Side-by-side comparison table.

```tsx
<Section bg="white" aria-labelledby="comparison-heading">
  <Container>
    <div className="text-center mb-12 flex flex-col items-center">
      <Heading variant="section" as="h2" id="comparison-heading"
        className="text-3xl sm:text-4xl text-honeywell-navy mb-4">
        Product Comparison
      </Heading>
      <div className="w-16 h-1 bg-honeywell-red rounded-full" aria-hidden="true" />
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-honeywell-navy text-white">
            <th className="p-4 font-display font-bold">Feature</th>
            {VARIANTS.map((v) => (
              <th key={v.name} className="p-4 font-display font-bold text-center">{v.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {COMPARISON_ROWS.map((row, i) => (
            <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-brand-surfaceGray'}>
              <td className="p-4 font-body text-sm text-brand-darkSlate font-medium">{row.feature}</td>
              {row.values.map((val, j) => (
                <td key={j} className="p-4 text-center text-sm font-body text-brand-steelGray">{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Container>
</Section>
```

### 8. Download Brochure

Simple CTA section for PDF downloads.

```tsx
<Section bg="gray" aria-labelledby="download-heading">
  <Container>
    <div className="max-w-2xl mx-auto text-center">
      <Heading variant="subsection" as="h2" id="download-heading"
        className="text-honeywell-navy mb-4">
        Download Product Brochure
      </Heading>
      <p className="text-brand-steelGray font-body text-base mb-6">
        Get detailed specifications, dimensions, and ordering information in our PDF brochure.
      </p>
      <Button href="/downloads/<slug>-brochure.pdf" variant="primary" size="lg" asExternal
        leftIcon={<Download className="w-5 h-5" />}>
        Download PDF Brochure
      </Button>
    </div>
  </Container>
</Section>
```

---

## TRUST & E-E-A-T SECTIONS

### 9. Certifications

Badge-style certification display.

```tsx
<Section bg="white" aria-labelledby="certifications-heading">
  <Container>
    <div className="text-center mb-12 flex flex-col items-center">
      <Heading variant="section" as="h2" id="certifications-heading"
        className="text-3xl sm:text-4xl text-honeywell-navy mb-4">
        Certifications & Compliance
      </Heading>
      <div className="w-16 h-1 bg-honeywell-red rounded-full" aria-hidden="true" />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {CERTIFICATIONS.map((cert) => (
        <div key={cert.name}
          className="bg-brand-surfaceGray border border-slate-200 rounded-xl p-6 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center border border-slate-200">
            <Shield className="w-8 h-8 text-honeywell-navy" />
          </div>
          <h3 className="font-display font-bold text-honeywell-navy mb-1">{cert.name}</h3>
          <p className="text-xs text-brand-steelGray font-body">{cert.description}</p>
        </div>
      ))}
    </div>
  </Container>
</Section>
```

### 10. Manufacturing Process

Numbered process steps with timeline feel.

```tsx
<Section bg="gray" aria-labelledby="process-heading">
  <Container>
    <div className="text-center mb-12 flex flex-col items-center">
      <Heading variant="section" as="h2" id="process-heading"
        className="text-3xl sm:text-4xl text-honeywell-navy mb-4">
        Our Manufacturing Process
      </Heading>
      <div className="w-16 h-1 bg-honeywell-red rounded-full" aria-hidden="true" />
    </div>
    <div className="max-w-4xl mx-auto">
      {PROCESS_STEPS.map((step, i) => (
        <div key={step.title} className="flex gap-6 mb-8 last:mb-0">
          <div className="flex flex-col items-center">
            <span className="w-10 h-10 rounded-full bg-honeywell-red text-white font-bold flex items-center justify-center shrink-0">
              {i + 1}
            </span>
            {i < PROCESS_STEPS.length - 1 && (
              <div className="w-0.5 h-full bg-slate-200 mt-2" aria-hidden="true" />
            )}
          </div>
          <div className="pb-8">
            <h3 className="text-lg font-display font-bold text-honeywell-navy mb-2">{step.title}</h3>
            <p className="text-sm text-brand-steelGray font-body leading-relaxed">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  </Container>
</Section>
```

### 11. Quality Control

Checklist-style quality assurance section.

```tsx
<Section bg="white" aria-labelledby="quality-heading">
  <Container>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <Heading variant="section" as="h2" id="quality-heading"
          className="text-3xl sm:text-4xl text-honeywell-navy mb-4">
          Quality Assurance
        </Heading>
        <div className="w-16 h-1 bg-honeywell-red rounded-full mb-6" aria-hidden="true" />
        <ul className="space-y-3" role="list">
          {QUALITY_CHECKS.map((check) => (
            <li key={check} className="flex items-start gap-3 text-sm text-brand-darkSlate font-body">
              <CheckCircle2 className="w-4 h-4 text-honeywell-red shrink-0 mt-0.5" />
              {check}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-honeywell-navy text-white rounded-sm p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-honeywell-red opacity-5 -skew-x-12 translate-x-1/4" aria-hidden="true" />
        <div className="relative z-10">
          <h3 className="text-2xl font-display font-bold text-white mb-6">Testing Standards</h3>
          <ul className="space-y-4">
            {TESTING_STANDARDS.map((standard, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-brand-borderGray font-body">
                <span className="w-6 h-6 rounded-full bg-honeywell-red text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                {standard}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </Container>
</Section>
```

### 12. Why Choose Us

6-card differentiator grid.

```tsx
<Section bg="gray" aria-labelledby="why-choose-heading">
  <Container>
    <div className="text-center mb-12 flex flex-col items-center">
      <Heading variant="section" as="h2" id="why-choose-heading"
        className="text-3xl sm:text-4xl text-honeywell-navy mb-4">
        Why Choose Honeywell Hydraulics
      </Heading>
      <div className="w-16 h-1 bg-honeywell-red rounded-full" aria-hidden="true" />
    </div>
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
      {WHY_CHOOSE.map((item) => (
        <li key={item.title}
          className="bg-white border border-slate-200 rounded-sm p-6 hover:border-honeywell-red hover:shadow-md transition-all duration-200">
          <div className="w-14 h-14 rounded-full bg-honeywell-navy flex items-center justify-center mb-5 text-white">
            {item.icon}
          </div>
          <h3 className="text-lg font-display font-bold text-honeywell-navy mb-2">{item.title}</h3>
          <p className="text-sm text-brand-steelGray font-body leading-relaxed">{item.body}</p>
        </li>
      ))}
    </ul>
  </Container>
</Section>
```

### 13. Case Study

Featured case study with results.

```tsx
<Section bg="white" aria-labelledby="case-study-heading">
  <Container>
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12 flex flex-col items-center">
        <span className="text-xs uppercase tracking-[0.12em] text-honeywell-red font-body font-semibold mb-2">
          Case Study
        </span>
        <Heading variant="section" as="h2" id="case-study-heading"
          className="text-3xl sm:text-4xl text-honeywell-navy mb-4">
          {CASE_STUDY.title}
        </Heading>
        <div className="w-16 h-1 bg-honeywell-red rounded-full" aria-hidden="true" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-brand-surfaceGray rounded-sm p-6 text-center">
          <p className="text-xs uppercase tracking-wider text-brand-steelGray font-body mb-2">Challenge</p>
          <p className="text-sm text-brand-darkSlate font-body">{CASE_STUDY.challenge}</p>
        </div>
        <div className="bg-brand-surfaceGray rounded-sm p-6 text-center">
          <p className="text-xs uppercase tracking-wider text-brand-steelGray font-body mb-2">Solution</p>
          <p className="text-sm text-brand-darkSlate font-body">{CASE_STUDY.solution}</p>
        </div>
        <div className="bg-honeywell-navy rounded-sm p-6 text-center text-white">
          <p className="text-xs uppercase tracking-wider text-brand-borderGray font-body mb-2">Result</p>
          <p className="text-2xl font-display font-bold text-white mb-1">{CASE_STUDY.resultStat}</p>
          <p className="text-sm text-brand-borderGray font-body">{CASE_STUDY.resultLabel}</p>
        </div>
      </div>
    </div>
  </Container>
</Section>
```

### 14. Client Logos (Marquee)

Auto-scrolling logo carousel — see `ClientLogosSection.tsx` for full implementation.

---

## LOCAL SEO SECTIONS

### 15. Service Areas

Map-adjacent list of service coverage areas.

```tsx
<Section bg="white" aria-labelledby="service-areas-heading">
  <Container>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <Heading variant="section" as="h2" id="service-areas-heading"
          className="text-3xl sm:text-4xl text-honeywell-navy mb-4">
          Service Areas
        </Heading>
        <div className="w-16 h-1 bg-honeywell-red rounded-full mb-6" aria-hidden="true" />
        <p className="text-brand-darkSlate font-body leading-relaxed mb-6">
          We deliver hydraulic equipment across <Region> and pan-India.
        </p>
        <ul className="grid grid-cols-2 gap-3" role="list">
          {SERVICE_AREAS.map((area) => (
            <li key={area} className="flex items-center gap-2 text-sm text-brand-darkSlate font-body">
              <CheckCircle2 className="w-4 h-4 text-honeywell-red shrink-0" />
              {area}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-brand-surfaceGray rounded-sm p-4">
        {/* MAP PLACEHOLDER */}
        <div className="aspect-[4/3] bg-white rounded-sm flex items-center justify-center">
          <MapPin className="w-12 h-12 text-brand-steelGray" />
        </div>
      </div>
    </div>
  </Container>
</Section>
```

### 16. Location Advantages

Why this location is strategic for hydraulic manufacturing.

```tsx
<Section bg="gray" aria-labelledby="advantages-heading">
  <Container>
    <div className="text-center mb-12 flex flex-col items-center">
      <Heading variant="section" as="h2" id="advantages-heading"
        className="text-3xl sm:text-4xl text-honeywell-navy mb-4">
        Why <Location> for Hydraulic Manufacturing
      </Heading>
      <div className="w-16 h-1 bg-honeywell-red rounded-full" aria-hidden="true" />
    </div>
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
      {LOCATION_ADVANTAGES.map((adv) => (
        <li key={adv.title}
          className="bg-white border border-slate-200 rounded-sm p-6 hover:border-honeywell-red transition-colors">
          <IconBox icon={adv.icon} variant="secondary" className="mb-4" />
          <h3 className="text-lg font-display font-bold text-honeywell-navy mb-2">{adv.title}</h3>
          <p className="text-sm text-brand-steelGray font-body leading-relaxed">{adv.description}</p>
        </li>
      ))}
    </ul>
  </Container>
</Section>
```

### 17. Local Industries

Industries served in a specific region.

Same pattern as "Industries Served" (section #6) but with location-specific framing.

---

## CONVERSION SECTIONS

### 18. Stats Strip

Horizontal statistics bar — dark background.

```tsx
<section className="bg-honeywell-navy py-12 md:py-16">
  <Container>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {STATS.map((stat) => (
        <div key={stat.label}>
          <p className="text-3xl md:text-4xl font-display font-extrabold text-white mb-1">
            {stat.value}
          </p>
          <p className="text-[11px] sm:text-[12px] text-brand-borderGray font-body uppercase tracking-[0.1em]">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  </Container>
</section>
```

### 19. FAQ Accordion

Uses `FAQAccordion` component.

```tsx
<Section bg="white" aria-labelledby="faq-heading">
  <Container>
    <div className="text-center mb-12 flex flex-col items-center">
      <Heading variant="section" as="h2" id="faq-heading"
        className="text-3xl sm:text-4xl text-honeywell-navy mb-4">
        Frequently Asked Questions
      </Heading>
      <div className="w-16 h-1 bg-honeywell-red rounded-full" aria-hidden="true" />
    </div>
    <div className="max-w-3xl mx-auto">
      <FAQAccordion faqs={FAQS} />
    </div>
  </Container>
</Section>
```

### 20. CTA Banner (Navy)

Uses reusable `<CTA>` component.

```tsx
<CTA
  title="Ready to Get Started?"
  description="Contact our engineering team for a custom quote tailored to your specifications."
  primaryCtaText="Request Quote"
  primaryCtaHref="/request-quote/"
  secondaryCtaText="Call Us Now"
  secondaryCtaHref="tel:+919924343873"
/>
```

### 21. Testimonials

Grid of testimonial cards.

```tsx
<Section bg="gray" aria-labelledby="testimonials-heading">
  <Container>
    <div className="text-center mb-12 flex flex-col items-center">
      <Heading variant="section" as="h2" id="testimonials-heading"
        className="text-3xl sm:text-4xl text-honeywell-navy mb-4">
        What Our Clients Say
      </Heading>
      <div className="w-16 h-1 bg-honeywell-red rounded-full" aria-hidden="true" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {TESTIMONIALS.map((testimonial) => (
        <blockquote key={testimonial.name}
          className="bg-white border border-slate-200 rounded-sm p-6">
          <p className="text-sm text-brand-darkSlate font-body leading-relaxed italic mb-4">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <cite className="text-sm text-brand-steelGray font-body not-italic flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-surfaceGray flex items-center justify-center">
              <span className="text-xs font-bold text-honeywell-navy">{testimonial.initials}</span>
            </div>
            <div>
              <span className="block font-semibold text-honeywell-navy">{testimonial.name}</span>
              <span className="text-xs">{testimonial.role}</span>
            </div>
          </cite>
        </blockquote>
      ))}
    </div>
  </Container>
</Section>
```

---

## HERO SECTIONS

### 22. Standard Hero (Navy BG)

```tsx
<section className="bg-honeywell-navy text-white pt-8 md:pt-12 pb-12 md:pb-16 relative overflow-hidden">
  <div className="absolute top-0 right-0 w-1/2 h-full bg-honeywell-red opacity-5 -skew-x-12 translate-x-1/4" aria-hidden="true" />
  <Container className="relative z-10">
    {/* Breadcrumb */}
    <nav aria-label="Breadcrumb" className="text-sm font-body text-brand-borderGray mb-6">
      <ol className="flex items-center gap-2">
        <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
        <li aria-hidden="true">&rsaquo;</li>
        <li className="text-white font-semibold" aria-current="page">Page Name</li>
      </ol>
    </nav>
    <div className="max-w-3xl">
      <Heading variant="hero" as="h1" className="text-white mb-6">
        Page H1 Title
      </Heading>
      <p className="text-brand-borderGray text-base sm:text-lg font-body leading-relaxed max-w-2xl mb-8">
        Introductory paragraph.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button href="/request-quote/" variant="primary" size="lg"
          rightIcon={<ArrowRight className="w-5 h-5" />}>
          Request Quote
        </Button>
        <Button href="/contact-us/" variant="outline" size="lg"
          className="bg-transparent border-white text-white hover:bg-white hover:text-honeywell-navy">
          Contact Us
        </Button>
      </div>
    </div>
  </Container>
</section>
```

### 23. Hero with Image (Split Layout)

Same as Standard Hero but with 2-column grid: text left, image right. See Product Page template hero.

### 24. Hero with Stats

Standard hero plus a stats bar at the bottom of the hero section.

---

## Additional Pattern Notes

- **Background alternation**: `white → gray → white → gray → ... → navy (CTA)`
- **Red divider**: Always `w-16 h-1 bg-honeywell-red rounded-full` after heading
- **Section CTA**: Most sections end with a centered Button
- **Icons**: Always from `lucide-react`, wrapped in `<IconBox>` when standalone
- **Mobile-first**: Always include responsive classes (base → sm → md → lg)
- **Aria**: All sections have `aria-labelledby`, all decorative elements have `aria-hidden="true"`
