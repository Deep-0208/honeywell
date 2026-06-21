import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { CTA } from '@/components/ui/CTA';
import { ProductCard } from '@/components/cards/ProductCard';
import { FAQAccordion } from '@/components/faq/FAQAccordion';
import { SpecTable } from '@/components/tables/SpecTable';
import JsonLd from '@/components/seo/JsonLd';
import { ArrowRight, Settings, Activity, Layers, Wrench, Shield, CheckCircle } from 'lucide-react';
import { IconBox } from '@/components/ui/IconBox';
import { COMPANY_INFO } from '@/lib/constants';

// ── C3: Full metadata with canonical, OG, Twitter ────────────────────────────
export const metadata: Metadata = {
  title: 'Industrial Hydraulic Products Manufacturer | Honeywell Hydraulics',
  description:
    'Leading hydraulic products manufacturer in India. Explore our precision-engineered hydraulic cylinders, power packs, manifold blocks, and complete turnkey systems.',
  alternates: {
    canonical: '/products',
  },
  openGraph: {
    title: 'Industrial Hydraulic Products Manufacturer | Honeywell Hydraulics',
    description:
      'Leading hydraulic products manufacturer in India. Explore our precision-engineered hydraulic cylinders and power packs.',
    url: '/products',
    siteName: COMPANY_INFO.name,
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industrial Hydraulic Products Manufacturer | Honeywell Hydraulics',
    description:
      'Leading hydraulic products manufacturer in India. Explore hydraulic cylinders and power packs.',
  },
};

export default function ProductsHubPage() {
  const siteUrl = COMPANY_INFO.websiteUrl;

  // C4: No ContactPage schema — this is a product hub, not a contact page.
  // C5: No CollectionPage hasPart — product detail pages do not exist yet (Phase 5).
  //     hasPart will be re-added in Phase 5 once product detail pages are built.
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${siteUrl}/products#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${siteUrl}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Products',
        item: `${siteUrl}/products`,
      },
    ],
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${siteUrl}/products#webpage`,
    url: `${siteUrl}/products`,
    name: 'Industrial Hydraulic Products Manufacturer | Honeywell Hydraulics',
    description: 'Leading hydraulic products manufacturer in India. Explore our precision-engineered hydraulic cylinders and power packs.',
    isPartOf: { '@id': `${siteUrl}/#website` },
    inLanguage: 'en-IN',
  };

  const productListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${siteUrl}/products#itemlist`,
    name: 'Honeywell Hydraulics Product Categories',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Hydraulic Cylinders', url: `${siteUrl}/products/hydraulic-cylinders` },
      { '@type': 'ListItem', position: 2, name: 'Hydraulic Power Packs', url: `${siteUrl}/products/hydraulic-power-packs` },
    ],
  };

  const faqs = [
    {
      question: 'Are your hydraulic products manufactured in-house?',
      answer: 'Yes. We are a direct manufacturer, not a trading house. All hydraulic cylinders and power packs are CNC-machined, assembled, and pressure-tested at our Ahmedabad, Gujarat manufacturing facility.',
    },
    {
      question: 'Do you offer custom industrial hydraulic equipment?',
      answer: 'Custom manufacturing is our primary focus. While we offer standard sizing, the majority of our hydraulic products are built specifically to our clients\' unique load, speed, and spatial requirements.',
    },
    {
      question: 'What is the standard lead time for custom hydraulic products?',
      answer: 'Standard custom cylinders are typically dispatched within 7 to 15 days. Custom power packs require 10 to 20 days depending on the complexity of the valve logic and tank size.',
    },
    {
      question: 'Do you supply OEM quantities?',
      answer: 'Absolutely. We act as the dedicated fluid power partner for dozens of OEMs across India, providing scheduled monthly deliveries of identical, high-tolerance hydraulic cylinders and power packs for their assembly lines.',
    },
  ];

  const comparisonRows = [
    { parameter: 'Hydraulic Cylinder', value: 'Converts fluid pressure into linear force | Medium (Seals, tolerances) | High Customization | 7-15 Days' },
    { parameter: 'Power Pack', value: 'Converts electrical power to fluid pressure | High (Motor, pump, reservoir) | High Customization | 10-20 Days' },
  ];

  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={productListSchema} />

      {/* Hero Section */}
      <Section className="bg-[#0D1B5C] text-white pt-12 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#E31B23] opacity-5 -skew-x-12 translate-x-1/4" aria-hidden="true" />
        <Container className="relative z-10">
          <nav aria-label="Breadcrumb" className="text-sm font-body text-[#CBD5E1] mb-6">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li aria-hidden="true">&gt;</li>
              <li className="text-white font-semibold" aria-current="page">Products</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-sm bg-[#E31B23] text-white text-xs font-bold uppercase tracking-wider mb-6">
              PRODUCTS HUB
            </span>
            <Heading variant="hero" as="h1" className="text-white mb-6">
              Industrial Hydraulic Products Manufacturer
            </Heading>
            <p className="text-[#CBD5E1] text-lg font-body mb-8 leading-relaxed max-w-2xl">
              Precision-engineered fluid power solutions for heavy industry. As a leading hydraulic products manufacturer, we design, machine, and test highly reliable hydraulic cylinders and power packs. Built for continuous operation in the most demanding manufacturing environments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* M2: Replaced dead # href with /request-quote */}
              <Button variant="primary" size="lg" href="/request-quote" rightIcon={<ArrowRight className="w-5 h-5" />}>
                REQUEST A CUSTOM QUOTE
              </Button>
              {/* M2: Replaced dead /contact/engineering/ href with /contact */}
              <Button variant="outline" size="lg" href="/contact-us/" className="border-white text-white hover:bg-white hover:text-[#0D1B5C]">
                CONTACT ENGINEERING TEAM
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* M6: EEAT Reviewer Block hidden — reviewer data not yet documented.
           Re-enable with real name, role, image when data is available.
           Tracked in REQUIRED_IMAGES_MASTER.md */}

      {/* The Honeywell Fluid Power Ecosystem */}
      <Section bg="white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Heading as="h2" variant="section" className="mb-6">
              The Honeywell Fluid Power Ecosystem
            </Heading>
            <p className="text-lg text-[#64748B] font-body">
              Industrial automation requires more than just individual components; it requires a synchronized fluid power ecosystem. At Honeywell Hydraulics, we manufacture every critical node of that ecosystem under one roof, ensuring absolute compatibility, minimal pressure drops, and maximum mechanical efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#F8FAFC] p-6 rounded-sm border border-[#E2E8F0] hover:border-[#E31B23] transition-colors">
               <IconBox icon={<Activity className="w-6 h-6" />} variant="primary" className="mb-4" />
               <h3 className="text-xl font-display font-bold text-[#0D1B5C] mb-3">Heart: Power Packs</h3>
               <p className="text-sm text-[#64748B] font-body">Converting electrical energy into pressurized hydrostatic energy.</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Product Categories Grid */}
      <Section bg="gray">
        <Container>
          <div className="max-w-3xl mb-12">
            <Heading as="h2" variant="section" className="mb-6">
              Product Categories
            </Heading>
            <p className="text-lg text-[#64748B] font-body">
              We manufacture two core families of industrial hydraulic equipment. Select a category below to explore technical specifications, mounting configurations, and variant options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
             <ProductCard 
                title="Hydraulic Cylinders"
                description="Heavy-duty linear actuators available in custom bore sizes from 40mm to 300mm. Variants: Double Acting, Single Acting, Flange Mounting, Clevis Mounting, Tie-Rod, Telescopic."
                category="Actuators"
                imageSrc="/images/products/hydraulic-cylinders-hub.jpg"
                href="/products/hydraulic-cylinders"
                ctaText="EXPLORE HYDRAULIC CYLINDERS"
             />
             <ProductCard 
                title="Hydraulic Power Packs"
                description="Pre-assembled, piped, and tested fluid power generation units. Variants: 3-Phase Industrial Units, Single-Phase Units, Dedicated Press Machine High-Low Circuits."
                category="Power Generation"
                imageSrc="/images/products/hydraulic-power-packs-hub.jpg"
                href="/products/hydraulic-power-packs"
                ctaText="EXPLORE HYDRAULIC POWER PACKS"
             />
          </div>
        </Container>
      </Section>

      {/* Product Selection Guide */}
      <Section bg="white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Heading as="h2" variant="section" className="mb-8 text-center">
              Product Selection Guide
            </Heading>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <IconBox icon={<span className="font-bold text-lg">1</span>} variant="secondary" className="shrink-0 rounded-full" />
                <div>
                  <h3 className="text-xl font-display font-bold text-[#0D1B5C] mb-2">Do you need to generate physical motion or force?</h3>
                  <p className="text-[#64748B] font-body mb-2">If you need linear push/pull force, you need a <strong>Hydraulic Cylinder</strong>.</p>
                  <p className="text-sm text-[#334155] font-body bg-[#F1F5F9] p-3 rounded-sm border-l-4 border-[#E31B23]">
                    <em>Key consideration:</em> Determine your required tonnage (Force = Pressure × Piston Area) to select the correct bore size.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <IconBox icon={<span className="font-bold text-lg">2</span>} variant="secondary" className="shrink-0 rounded-full" />
                <div>
                  <h3 className="text-xl font-display font-bold text-[#0D1B5C] mb-2">Do you need to generate pressurized fluid flow?</h3>
                  <p className="text-[#64748B] font-body mb-2">If you are building a new machine or replacing a failing pump system, you need a <strong>Hydraulic Power Pack</strong>.</p>
                  <p className="text-sm text-[#334155] font-body bg-[#F1F5F9] p-3 rounded-sm border-l-4 border-[#E31B23]">
                    <em>Key consideration:</em> Determine your required cycle speed (Flow Rate/LPM) and system pressure (Bar) to size the motor and pump correctly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Industries Overview */}
      <Section bg="gray">
        <Container>
          <div className="grid grid-cols-1 gap-12">
            <div>
              <Heading as="h2" variant="section" className="mb-6">
                Industries Served
              </Heading>
              <p className="text-[#64748B] font-body mb-6">
                Our hydraulic products are engineered to meet the strict regulatory and operational standards of India&apos;s core manufacturing sectors.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#E31B23] shrink-0 mt-0.5" />
                  <span className="text-[#334155] font-body"><strong>Injection Moulding:</strong> High-speed clamping and ejection cylinders.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#E31B23] shrink-0 mt-0.5" />
                  <span className="text-[#334155] font-body"><strong>Automotive OEM:</strong> Highly repeatable hydraulic systems for robotic assembly and welding lines.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#E31B23] shrink-0 mt-0.5" />
                  <span className="text-[#334155] font-body"><strong>Steel & Metallurgy:</strong> Heat-resistant cylinders for continuous rolling mill operations.</span>
                </li>
              </ul>
            </div>
            

          </div>
        </Container>
      </Section>

      {/* Engineering & Manufacturing Capabilities */}
      <Section bg="white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Heading as="h2" variant="section" className="mb-6 text-center">
              Engineering & Manufacturing Capabilities
            </Heading>
            <p className="text-lg text-[#64748B] font-body text-center mb-12">
              As an end-to-end hydraulic products manufacturer, we do not outsource our core competencies. By controlling the entire manufacturing lifecycle, we guarantee the structural integrity and performance of every product.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-[#0D1B5C] text-white p-8 rounded-sm shadow-md">
                <h4 className="text-xl font-display font-bold mb-6 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-[#E31B23]" />
                  Facility Technology Stack
                </h4>
                <ul className="space-y-4 font-body text-[#CBD5E1]">
                  <li><strong>Design & Simulation:</strong> 3D Modeling for fluid dynamic and stress analysis.</li>
                  <li><strong>Precision Machining:</strong> CNC Turning Centers ensuring h8 tolerances on all piston rods.</li>
                  <li><strong>Validation & Testing:</strong> PLC-driven hydrostatic test benches. Every unit is tested at 1.5x working pressure before dispatch.</li>
                </ul>
              </div>

              <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-8 rounded-sm">
                <h4 className="text-xl font-display font-bold text-[#0D1B5C] mb-6 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-[#E31B23]" />
                  The Honeywell Guarantee
                </h4>
                <p className="text-[#334155] font-body leading-relaxed mb-4">
                  Every hydraulic product we manufacture is backed by our strict Defect Warranty. In the event of an operational anomaly, our emergency engineering team dispatches replacement components or seal kits to minimize your production downtime.
                </p>
              </div>
            </div>

            <SpecTable title="Product Comparison Matrix" rows={comparisonRows} />

          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section bg="gray">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Heading as="h2" variant="section" className="mb-10 text-center">
              Frequently Asked Questions (FAQ)
            </Heading>
            <FAQAccordion faqs={faqs} />
          </div>
        </Container>
      </Section>

      {/* Conversion CTA — M2: replaced dead # href */}
      <CTA 
        title="Ready to discuss your exact requirements?"
        description="Whether you are in the initial design phase of a new machine or require an urgent breakdown replacement, Honeywell Hydraulics has the engineering capability to deliver."
        primaryCtaText="REQUEST A CUSTOM ENGINEERING QUOTE"
        primaryCtaHref="/request-quote"
        secondaryCtaText="Contact Engineering Team"
        secondaryCtaHref="/contact-us/"
      />
    </>
  );
}
