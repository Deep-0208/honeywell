import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { COMPANY_INFO } from '@/lib/constants';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { IconBox } from '@/components/ui/IconBox';
import { CTA } from '@/components/ui/CTA';
import { SpecTable } from '@/components/tables/SpecTable';
import { SiteFAQSection } from '@/components/faq/SiteFAQSection';
import { ProductCard } from '@/components/cards/ProductCard';
import { SiteLocationsSection } from '@/components/locations/SiteLocationsSection';
import { IndustryCard } from '@/components/cards/IndustryCard';
import { Heading } from '@/components/ui/Heading';
import {
  ArrowRight,
  MessageCircle,
  PenTool,
  Calculator,
  Box,
  Layers,
  Wrench,
  FlaskConical,
  Cog,
  Anchor,
  Building2,
  Settings,
  Shield,
  Thermometer,
  RefreshCw,
  FileCheck,
  CheckCircle2,
  Lightbulb,
  BookOpen,
  Package,
  Cpu,
} from 'lucide-react';

/* ═══════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════ */

const PAGE_TITLE =
  'Custom Hydraulic Cylinder Manufacturer | Honeywell';
const PAGE_DESCRIPTION =
  'Custom hydraulic cylinder manufacturer in Ahmedabad. Bespoke CAD engineering, large bore cylinders (400mm+), and reverse engineering for heavy industry.';
const PAGE_URL = '/products/hydraulic-cylinders/custom-hydraulic-cylinders';
const PAGE_IMAGE = '/images/home/hero/custom-hydraulic-cylinder-manufacturer.webp';

export const metadata: Metadata = {
  ...buildMetadata({
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    
    canonical: PAGE_URL,
    image: PAGE_IMAGE,
  }),
  title: {
    absolute: PAGE_TITLE,
  },
};

/* ═══════════════════════════════════════════════
   PAGE DATA
   ═══════════════════════════════════════════════ */

import {
  CUSTOM_CYLINDER_FAQS,
  CUSTOM_CYLINDER_SPECS,
  CUSTOM_CYLINDER_STEPS,
  CUSTOM_CYLINDER_VARIANTS,
  CUSTOM_CYLINDER_INDUSTRIES,
} from '@/data/hydraulic-cylinders/custom-hydraulic-cylinders';

/* ═══════════════════════════════════════════════
   SCHEMA — @graph structure
   ═══════════════════════════════════════════════ */

function buildPageSchema() {
  const siteUrl = COMPANY_INFO.websiteUrl;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      /* 1. Product */
      {
        '@type': 'Product',
        '@id': `${siteUrl}${PAGE_URL}#product`,
        name: 'Custom Hydraulic Cylinders',
        description: PAGE_DESCRIPTION,
        image: [`${siteUrl}${PAGE_IMAGE}`],
        brand: {
          '@type': 'Brand',
          name: COMPANY_INFO.name,
        },
        manufacturer: {
          '@id': `${siteUrl}/#organization`,
        },
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'Organization',
            name: COMPANY_INFO.name,
          },
        },
        category: 'Hydraulic Cylinders',
        additionalProperty: [
          {
            '@type': 'PropertyValue',
            name: 'Bore Sizes',
            value: 'Micro-bores up to 400mm+',
          },
          {
            '@type': 'PropertyValue',
            name: 'Stroke Length',
            value: 'Up to 8,000+ mm',
          },
          {
            '@type': 'PropertyValue',
            name: 'Operating Pressure',
            value: 'Up to 500+ Bar / 7000+ PSI',
          },
          {
            '@type': 'PropertyValue',
            name: 'Barrel Materials',
            value: 'ST52, EN8, SS304, SS316, Custom Alloys',
          },
        ],
      },
      /* 2. WebPage */
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}${PAGE_URL}#webpage`,
        url: `${siteUrl}${PAGE_URL}`,
        name: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}${PAGE_URL}#product` },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${siteUrl}${PAGE_IMAGE}`,
        },
        breadcrumb: { '@id': `${siteUrl}${PAGE_URL}#breadcrumb` },
        inLanguage: 'en-IN',
      },
      /* 3. BreadcrumbList */
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}${PAGE_URL}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Products',
            item: `${siteUrl}/products/`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Hydraulic Cylinders',
            item: `${siteUrl}/products/hydraulic-cylinders/`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Custom Hydraulic Cylinders',
            item: `${siteUrl}${PAGE_URL}`,
          },
        ],
      },
      /* 4. FAQPage */
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}${PAGE_URL}#faq`,
        mainEntity: CUSTOM_CYLINDER_FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };
}

/* ═══════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════ */

export default function CustomHydraulicCylindersPage() {
  const schema = buildPageSchema();

  return (
    <>
      <JsonLd data={schema} />

      {/* ─── 01 Hero Section ─── */}
      <HeroSection />

      {/* ─── 02 Product Overview ─── */}
      <ProductOverview />

      {/* ─── 03 Key Features (Engineering Design Process) ─── */}
      <KeyFeatures />

      {/* ─── 04 Technical Specifications ─── */}
      <TechnicalSpecifications />

      {/* ─── 05 Product Variants ─── */}
      <ProductVariants />



      {/* ─── 07 Industries Served ─── */}
      <IndustriesSection />

      {/* ─── 08 Manufacturing Process ─── */}
      <ManufacturingProcess />

      {/* ─── 09 Project Spotlight ─── */}
      <ProjectSpotlight />

      {/* ─── 10 Related Products ─── */}
      <RelatedProducts />

      {/* ─── 11 Engineering Advantage (Related Services) ─── */}
      <EngineeringAdvantage />

      {/* ─── 12 Local Service Areas ─── */}
      <SiteLocationsSection
        title="Custom Hydraulic Cylinder Manufacturer in Gujarat"
        description="As the premier custom hydraulic cylinder manufacturer in Gujarat, we provide rapid reverse-engineering and bespoke manufacturing services to heavy industries across the state."
      />

      {/* ─── 13 FAQs ─── */}
      <FAQSection />

      {/* ─── 15 CTA Section ─── */}
      <CTA
        title="Ready to Discuss Your Custom Cylinder Project?"
        description="Don't let an obsolete cylinder halt your entire production line. Partner with an engineering firm capable of bespoke design, reverse engineering, and extreme-duty manufacturing."
        primaryCtaText="REQUEST A CUSTOM QUOTE"
        primaryCtaHref="/request-quote/"
        secondaryCtaText="Call Now"
        secondaryCtaHref="tel:+919924343873"
      />
    </>
  );
}

/* ═══════════════════════════════════════════════
   SECTION COMPONENTS
   ═══════════════════════════════════════════════ */

/* ─── 01 Hero ─── */
function HeroSection() {
  return (
    <div
      className="relative bg-white pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden border-b border-slate-200"
      id="hero"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-brand-surfaceGray" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-white to-transparent" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-honeywell-red/5 skew-x-[-12deg] translate-x-20 -z-10 hidden lg:block" />
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" aria-hidden="true" />

      <Container>
        {/* Breadcrumb */}
        

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="flex flex-col items-start z-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block py-1 px-3 rounded-full bg-white border border-slate-200 text-honeywell-red font-bold tracking-widest text-xs uppercase font-body shadow-sm">
                UNRESTRICTED ENGINEERING
              </span>
              <div className="h-4 w-px bg-slate-300" />
              <span className="text-brand-steelGray text-sm font-medium">Custom Hydraulic Cylinders</span>
            </div>

            <Heading variant="hero" as="h1" className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-bold text-honeywell-navy leading-[1.1] mb-6">
              Custom Hydraulic Cylinder Manufacturer
            </Heading>

            <p className="text-lg text-brand-darkSlate font-body mb-8 max-w-xl leading-relaxed ">
              Bespoke fluid power for when standard catalogs fail. Honeywell
              Hydraulics is a premier custom hydraulic cylinder manufacturer in
              Gujarat, specializing in extreme large bore actuators,
              reverse-engineering obsolete imported equipment, and designing
              one-off cylinders for specialized machinery.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <Button
                href="/request-quote"
                size="lg"
                variant="primary"
                className="w-full sm:w-auto font-bold tracking-wide"
              >
                SUBMIT DRAWINGS FOR QUOTE{' '}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="/contact-us"
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white hover:bg-brand-surfaceGray"
              >
                BOOK CONSULTATION{' '}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            

            
          </div>

          {/* Image Column */}
          <div className="relative w-full aspect-[4/3] lg:aspect-square bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden group">
            <div className="absolute inset-0 bg-brand-surfaceGray opacity-50 rounded-xl" />
            <Image
              src="/images/home/hero/custom-hydraulic-cylinder-manufacturer.webp"
              alt="Custom Hydraulic Cylinder Manufacturer in Ahmedabad - Bespoke large bore cylinder by Honeywell Hydraulics"
              fill
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Container>

      {/* Key Specs Strip */}
      <div className="absolute bottom-0 left-0 w-full bg-white/80 backdrop-blur-md border-t border-slate-200/50 hidden md:block shadow-[0_-4px_24px_-12px_rgba(0,0,0,0.05)] z-20">
        <Container>
          <div className="flex flex-wrap divide-x divide-slate-200/50 py-4">
            <div className="px-6 flex-1 text-center first:pl-0 last:pr-0 group cursor-default">
              <span className="block text-xs font-bold text-brand-steelGray uppercase tracking-wider mb-1 group-hover:text-honeywell-red transition-colors duration-300">
                Bore
              </span>
              <span className="block text-sm font-mono text-honeywell-navy font-semibold">
                Up to 400mm+
              </span>
            </div>
            <div className="px-6 flex-1 text-center group cursor-default">
              <span className="block text-xs font-bold text-brand-steelGray uppercase tracking-wider mb-1 group-hover:text-honeywell-red transition-colors duration-300">
                Stroke
              </span>
              <span className="block text-sm font-mono text-honeywell-navy font-semibold">
                Up to 8,000+ mm
              </span>
            </div>
            <div className="px-6 flex-1 text-center group cursor-default">
              <span className="block text-xs font-bold text-brand-steelGray uppercase tracking-wider mb-1 group-hover:text-honeywell-red transition-colors duration-300">
                Pressure
              </span>
              <span className="block text-sm font-mono text-honeywell-navy font-semibold">
                Up to 500+ Bar
              </span>
            </div>
            <div className="px-6 flex-1 text-center group cursor-default">
              <span className="block text-xs font-bold text-brand-steelGray uppercase tracking-wider mb-1 group-hover:text-honeywell-red transition-colors duration-300">
                Mounting
              </span>
              <span className="block text-sm font-mono text-honeywell-navy font-semibold">
                Fully Custom
              </span>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

/* ─── 02 Product Overview ─── */
function ProductOverview() {
  return (
    <Section aria-labelledby="overview-heading" bg="white" id="overview">
      <Container>
        <div className="max-w-4xl mx-auto">
          <Heading id="overview-heading" variant="section" as="h2" underline="center" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-6">
            What Are Custom Hydraulic Cylinders?
          </Heading>
          <div className="space-y-5 text-brand-darkSlate font-body text-lg leading-relaxed ">
            <p>
              Standard catalog cylinders—like{' '}
              <Link
                href="/products/hydraulic-cylinders"
                className="text-honeywell-red font-semibold hover:underline"
              >
                Tie Rod Cylinders
              </Link>{' '}
              or standard Welded Cylinders—are designed to satisfy 80% of
              industrial machinery requirements. However, the top 20% of
              engineering applications operate in extreme parameter zones where
              standard catalogs simply do not apply.
            </p>
            <p>
              When designing a massive dam spillway gate, an automated foundry
              ladle, or a 10,000-ton deep-drawing press, engineers require{' '}
              <strong className="text-honeywell-navy">
                Custom Hydraulic Cylinders
              </strong>
              .
            </p>
            <p>
              As an elite bespoke hydraulic cylinder supplier, we do not
              constrain you to predefined bore sizes or standard rod materials.
              Our custom design division starts every project with a blank CAD
              file. We engineer the exact barrel wall thickness, specify custom
              multi-stage piston sealing systems, and machine non-standard
              mounting configurations (such as barrel-welded trunnions or offset
              clevises) required to seamlessly integrate the cylinder into your
              machine&apos;s physical envelope.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ─── 03 Key Features (Engineering Design Process) ─── */
function KeyFeatures() {
  return (
    <Section aria-labelledby="engineering-process-heading" bg="gray" id="engineering-process">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading id="engineering-process-heading" variant="section" as="h2" underline="center" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            The Engineering Design Process
          </Heading>
          <p className="text-lg text-brand-steelGray font-body ">
            Designing a bespoke hydraulic cylinder requires rigorous fluid
            mechanics calculations and strict adherence to mechanical physics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CUSTOM_CYLINDER_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200 p-8 transition-all duration-350 ease-premium hover:shadow-float hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red group"
            >
              <div className="flex items-center gap-4 mb-5">
                <IconBox
                  icon={step.icon}
                  variant="primary"
                  size="md"
                />
                <span className="text-sm font-mono font-bold text-honeywell-red">
                  Step {String(idx + 1).padStart(2, '0')}
                </span>
              </div>
              <Heading variant="subsection" as="h3" className="text-xl font-display font-bold text-honeywell-navy mb-3 group-hover:text-honeywell-red transition-colors ">
                {step.title}
              </Heading>
              <p className="text-brand-steelGray font-body text-sm leading-relaxed ">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── 04 Technical Specifications ─── */
function TechnicalSpecifications() {
  return (
    <Section aria-labelledby="technical-specifications-heading" bg="white" id="technical-specifications">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <Heading id="technical-specifications-heading" variant="section" as="h2" underline="center" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
              Technical Specifications
            </Heading>
            <p className="text-lg text-brand-steelGray font-body mb-8 ">
              Our custom manufacturing capabilities extend far beyond standard
              catalog parameters. Every specification is engineered to your exact
              requirements.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                href="/request-quote"
                variant="primary"
                size="md"
                className="font-bold"
              >
                DISCUSS YOUR SPECS <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                href="/products/hydraulic-cylinders"
                variant="outline"
                size="md"
              >
                VIEW STANDARD RANGE
              </Button>
            </div>
          </div>
          <SpecTable
            title="Custom Capability Range"
            rows={CUSTOM_CYLINDER_SPECS}
          />
        </div>
      </Container>
    </Section>
  );
}

/* ─── 05 Product Variants (Reverse Engineering + Large Bore + Special Materials) ─── */
function ProductVariants() {
  return (
    <Section aria-labelledby="product-variants-heading" bg="gray" id="product-variants">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading id="product-variants-heading" variant="section" as="h2" underline="center" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            Custom Cylinder Capabilities
          </Heading>
          <p className="text-lg text-brand-steelGray font-body ">
            From reverse-engineering obsolete imports to manufacturing extreme
            large-bore actuators, our capabilities cover the full spectrum of
            bespoke hydraulic engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CUSTOM_CYLINDER_VARIANTS.map((variant, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200 p-8 transition-all duration-350 ease-premium hover:shadow-float hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red flex flex-col"
            >
              <div className="mb-6">
                <IconBox
                  icon={variant.icon}
                  variant="secondary"
                  size="lg"
                />
              </div>
              <Heading variant="subsection" as="h3" className="text-xl font-display font-bold text-honeywell-navy mb-3">
                {variant.title}
              </Heading>
              <p className="text-brand-steelGray font-body text-sm leading-relaxed mb-6 flex-grow ">
                {variant.description}
              </p>
              <ul className="space-y-2.5 border-t border-slate-200 pt-5">
                {variant.highlights.map((highlight, hIdx) => (
                  <li
                    key={hIdx}
                    className="flex items-start gap-2.5 text-sm text-brand-darkSlate font-body"
                  >
                    <CheckCircle2 className="w-4 h-4 text-honeywell-red mt-0.5 shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── 07 Industries Served ─── */
function IndustriesSection() {
  return (
    <Section aria-labelledby="industries-heading" bg="gray" id="industries">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Heading id="industries-heading" variant="section" as="h2" underline="center" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            Industries We Serve
          </Heading>
          <p className="text-lg text-brand-steelGray font-body ">
            Our custom engineering division serves the most demanding sectors in
            the Indian economy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {CUSTOM_CYLINDER_INDUSTRIES.map((ind, idx) => (
            <div key={idx}>
              <IndustryCard
                industryName={ind.industryName}
                description={ind.description}
                icon={ind.icon}
                href={ind.href}
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── 08 Manufacturing Process ─── */
function ManufacturingProcess() {
  return (
    <Section aria-labelledby="manufacturing-process-heading" bg="white" id="manufacturing-process">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading id="manufacturing-process-heading" variant="section" as="h2" underline="center" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            Manufacturing & Quality Process
          </Heading>
          <p className="text-lg text-brand-steelGray font-body ">
            Every custom cylinder is delivered with a comprehensive Engineering
            Dossier, including 3D CAD files, material test certificates (MTC),
            seal compound specs, and hydrostatic pressure testing reports.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 relative mb-16 w-full">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[32px] left-[10%] right-[10%] h-0.5 bg-slate-200 z-0" aria-hidden="true" />

          <div className="flex flex-col items-center text-center group cursor-default">
            <div className="bg-white rounded-lg mb-6 relative z-10 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110">
              <IconBox icon={<Cog className="w-6 h-6" />} variant="primary" size="lg" />
            </div>
            <Heading variant="card" as="h3" className="mb-3">Heavy Machining Centers</Heading>
            <p className="text-brand-steelGray font-body text-sm ">
              Equipped with massive CNC boring and honing machines capable of
              processing large-bore seamless steel tubes up to immense lengths.
            </p>
          </div>

          <div className="flex flex-col items-center text-center group cursor-default">
            <div className="bg-white rounded-lg mb-6 relative z-10 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110">
              <IconBox icon={<FlaskConical className="w-6 h-6" />} variant="primary" size="lg" />
            </div>
            <Heading variant="card" as="h3" className="mb-3">Metallurgical Verification</Heading>
            <p className="text-brand-steelGray font-body text-sm ">
              We rigorously verify the chemical composition and yield strength
              of all custom-ordered alloys before machining begins.
            </p>
          </div>

          <div className="flex flex-col items-center text-center group cursor-default">
            <div className="bg-white rounded-lg mb-6 relative z-10 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110">
              <IconBox icon={<FileCheck className="w-6 h-6" />} variant="primary" size="lg" />
            </div>
            <Heading variant="card" as="h3" className="mb-3">Extreme Pressure Validation</Heading>
            <p className="text-brand-steelGray font-body text-sm ">
              100% of our bespoke cylinders undergo rigorous hydrostatic and
              shock-load testing to verify the integrity of custom-welded
              trunnions and flanges.
            </p>
          </div>

          <div className="flex flex-col items-center text-center group cursor-default">
            <div className="bg-white rounded-lg mb-6 relative z-10 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110">
              <IconBox icon={<Package className="w-6 h-6" />} variant="primary" size="lg" />
            </div>
            <Heading variant="card" as="h3" className="mb-3">Secure Delivery</Heading>
            <p className="text-brand-steelGray font-body text-sm ">
              Cylinders are thoroughly cleaned, painted, safely packaged, and dispatched to your facility PAN-India.
            </p>
          </div>
        </div>

        {/* Mid-page CTA */}
        <div className="bg-honeywell-navy rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-1/2 h-full bg-honeywell-red opacity-5 -skew-x-12 translate-x-1/4"
            aria-hidden="true"
          />
          <Heading variant="subsection" as="h3" className="text-2xl md:text-3xl font-display font-bold text-white mb-4 relative z-10">
            Need to Reverse-Engineer a Damaged Imported Cylinder?
          </Heading>
          <p className="text-brand-borderGray font-body max-w-2xl mx-auto mb-6 relative z-10 ">
            Our engineering team can dismantle, measure, and replicate any
            cylinder — even without documentation or part numbers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Button
              href="/request-quote"
              variant="primary"
              size="lg"
              className="font-bold"
            >
              REQUEST REVERSE ENGINEERING QUOTE{' '}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <a
              href="https://wa.me/919924343873"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-medium hover:text-[#25D366] transition-colors font-body"
              aria-label="WhatsApp for reverse engineering inquiry"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ─── 09 FAQ Section ─── */
function FAQSection() {
  return (
    <SiteFAQSection
      faqs={CUSTOM_CYLINDER_FAQS}
      title="Frequently Asked Questions"
      description="Common questions about our custom hydraulic cylinder manufacturing capabilities."
      injectSchema={false}
    />
  );
}

/* ─── 09 Project Spotlight ─── */
function ProjectSpotlight() {
  return (
    <Section aria-labelledby="project-spotlight-heading" bg="white" id="project-spotlight">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <Badge variant="years">CASE STUDY</Badge>
            <Heading id="project-spotlight-heading" variant="section" as="h2" underline="center" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mt-4 mb-3">
              Reverse Engineering a 600-Ton Forging Press Cylinder
            </Heading>
            <p className="text-brand-steelGray font-body text-lg ">
              Heavy Metal Forging Plant &mdash; GIDC, Rajkot
            </p>
          </div>

          {/* Stats Strip */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            <div className="bg-brand-surfaceGray rounded-xl p-5 text-center border border-slate-200">
              <span className="block text-2xl md:text-3xl font-display font-bold text-honeywell-red">12</span>
              <span className="text-xs font-body text-brand-steelGray uppercase tracking-wider mt-1">Days to Deliver</span>
            </div>
            <div className="bg-brand-surfaceGray rounded-xl p-5 text-center border border-slate-200">
              <span className="block text-2xl md:text-3xl font-display font-bold text-honeywell-red">600</span>
              <span className="text-xs font-body text-brand-steelGray uppercase tracking-wider mt-1">Ton Press</span>
            </div>
            <div className="bg-brand-surfaceGray rounded-xl p-5 text-center border border-slate-200">
              <span className="block text-2xl md:text-3xl font-display font-bold text-honeywell-red">100%</span>
              <span className="text-xs font-body text-brand-steelGray uppercase tracking-wider mt-1">Drop-in Fit</span>
            </div>
          </div>

          {/* Timeline Cards */}
          <div className="relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-slate-200" aria-hidden="true" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Challenge */}
              <div className="relative bg-white rounded-xl border border-slate-200 p-7 transition-all duration-350 ease-premium hover:shadow-float hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red">
                <div className="w-10 h-10 rounded-full bg-honeywell-red text-white flex items-center justify-center font-bold text-sm mb-5 relative z-10">
                  01
                </div>
                <Heading variant="subsection" as="h3" className="text-lg font-display font-bold text-honeywell-navy mb-3">The Challenge</Heading>
                <p className="text-sm text-brand-steelGray font-body leading-relaxed ">
                  The client&apos;s primary 600-ton forging press — an imported German machine from the
                  1990s — experienced a catastrophic cylinder failure. The OEM no longer existed, and
                  the massive cylinder was completely undocumented.
                </p>
              </div>

              {/* Engineering */}
              <div className="relative bg-white rounded-xl border border-slate-200 p-7 transition-all duration-350 ease-premium hover:shadow-float hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red">
                <div className="w-10 h-10 rounded-full bg-honeywell-navy text-white flex items-center justify-center font-bold text-sm mb-5 relative z-10">
                  02
                </div>
                <Heading variant="subsection" as="h3" className="text-lg font-display font-bold text-honeywell-navy mb-3">The Engineering</Heading>
                <p className="text-sm text-brand-steelGray font-body leading-relaxed ">
                  Our team completely dismantled the broken cylinder, utilizing advanced metrology to
                  reverse-engineer exact bore dimensions, port locations, and mounting flanges. A new 3D CAD
                  model was generated and machined to exacting tolerances.
                </p>
              </div>

              {/* Outcome */}
              <div className="relative bg-honeywell-navy rounded-xl p-7 transition-all duration-350 ease-premium hover:shadow-float hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red">
                <div className="w-10 h-10 rounded-full bg-honeywell-red text-white flex items-center justify-center font-bold text-sm mb-5 relative z-10">
                  03
                </div>
                <Heading variant="subsection" as="h3" className="text-lg font-display font-bold text-white mb-3">The Outcome</Heading>
                <p className="text-sm text-brand-borderGray font-body leading-relaxed mb-6 ">
                  Manufactured, tested, and delivered within <strong className="text-white">12 days</strong>.
                  The new actuator was a perfect drop-in fit. We also upgraded the seal design to modern
                  polyurethane V-packing, extending lifespan beyond OEM specifications.
                </p>
                <Button
                  href="/request-quote"
                  variant="primary"
                  size="md"
                  className="font-bold w-full text-center justify-center"
                >
                  GET SIMILAR RESULTS <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ─── 10 Related Products ─── */
function RelatedProducts() {
  // NOTE: Only routes that currently exist are linked.
  // Future product detail pages will be enabled in Phase 5.x
  const products = [
    {
      title: 'Hydraulic Power Packs',
      description:
        'We design massive, custom-built fluid reservoirs and multi-pump architectures specifically sized to drive your large-bore custom cylinders.',
      category: 'Power Generation',
      imageSrc: '/images/products/hydraulic-power-packs/hydraulic-power-pack-manufacturer.webp',
      href: '/products/hydraulic-power-packs/',  // existing route
      ctaText: 'View Power Packs',
    },
    {
      title: 'Manifold Blocks',
      description:
        'Custom CNC-machined logic blocks designed specifically to sequence the movement of your bespoke actuators with precision valve control.',
      category: 'Fluid Control',
      imageSrc: '/images/products/hero/hydraulic-manifold-blocks-manufacturer.webp',
      href: '#',  // existing route
      ctaText: 'View Manifold Blocks',
    },
    {
      title: 'Hydraulic Systems',
      description:
        'Complete integrated hydraulic system solutions — from reservoir to custom cylinder — engineered and commissioned as a single turnkey unit.',
      category: 'Complete Systems',
      imageSrc: '/images/products/hero/custom-hydraulic-systems-ahmedabad.webp',
      href: '#',  // existing route
      ctaText: 'View Complete Systems',
    },
  ];

  return (
    <Section aria-labelledby="related-products-heading" bg="gray" id="related-products">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <Heading id="related-products-heading" variant="section" as="h2" underline="center" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
              Integrate Your Custom Cylinder
            </Heading>
            <p className="text-lg text-brand-steelGray font-body ">
              Custom cylinders require sophisticated fluid generation and precision control.
              Combine your bespoke actuator with our power systems for a complete solution.
            </p>
          </div>
          <div className="mt-6 md:mt-0 shrink-0">
            <Link
              href="/products"
              className="text-honeywell-red font-bold hover:underline font-body"
            >
              Browse all products →
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <ProductCard
              key={idx}
              title={product.title}
              description={product.description}
              category={product.category}
              imageSrc={product.imageSrc}
              href={product.href}
              ctaText={product.ctaText}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── 11 Engineering Advantage (Related Services) ─── */
function EngineeringAdvantage() {
  const services = [
    {
      icon: <PenTool className="w-6 h-6" />,
      title: 'Custom Hydraulic System Design',
      description:
        'Let our engineers design the entire hydraulic circuit from the reservoir to the custom cylinder. Full system architecture, pressure calculations, and schematic delivery.',
      // Future route: /services/custom-hydraulic-system-design/ — Phase 5.x
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Hydraulic Consulting',
      description:
        'Hire our systems architects to analyze your machine\'s failure points and recommend bespoke upgrades. Root cause analysis and engineering improvement reports.',
      // Future route: /services/hydraulic-consulting/ — Phase 5.x
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Hydraulic Cylinder Repair',
      description:
        'Expert teardown, re-chroming, and re-machining of your massive large-bore cylinders. We restore worn bores and damaged rods to OEM tolerances.',
      // Future route: /services/hydraulic-cylinder-repair/ — Phase 5.x
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'OEM Hydraulic Manufacturing',
      description:
        'Volume manufacturing programs for OEM clients. Prototype sign-off, batch production scheduling, and dedicated quality documentation for each production run.',
      // Future route: /services/oem-hydraulic-manufacturing/ — Phase 5.x
    },
  ];

  return (
    <Section aria-labelledby="engineering-advantage-heading" bg="white" id="engineering-advantage">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Heading id="engineering-advantage-heading" variant="section" as="h2" underline="center" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            The Engineering Advantage
          </Heading>
          <p className="text-lg text-brand-steelGray font-body ">
            We do not just sell parts. We are a complete hydraulic engineering firm. Leverage our
            full suite of technical services alongside your custom cylinder project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex gap-5 bg-brand-surfaceGray rounded-xl border border-slate-200 p-7 transition-all duration-350 ease-premium hover:shadow-float hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red"
            >
              <IconBox
                icon={service.icon}
                variant="primary"
                size="md"
                className="shrink-0 mt-1"
              />
              <div>
                <Heading variant="subsection" as="h3" className="text-lg font-display font-bold text-honeywell-navy mb-2">
                  {service.title}
                </Heading>
                <p className="text-sm text-brand-steelGray font-body leading-relaxed ">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            href="/contact-us"
            variant="secondary"
            size="lg"
            className="font-bold"
          >
            DISCUSS YOUR ENGINEERING REQUIREMENTS <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </Container>
    </Section>
  );
}




