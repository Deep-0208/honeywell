import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { COMPANY_INFO } from '@/lib/constants';
import { homepageLocations } from '@/data/homepage';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { IconBox } from '@/components/ui/IconBox';
import { CTA } from '@/components/ui/CTA';
import { SpecTable } from '@/components/tables/SpecTable';
import { SiteFAQSection } from '@/components/faq/SiteFAQSection';
import { ProductCard } from '@/components/cards/ProductCard';
import { LocationCard } from '@/components/cards/LocationCard';
import { IndustryCard } from '@/components/cards/IndustryCard';
import {
  ArrowRight,
  Phone,
  MessageCircle,
  PenTool,
  Calculator,
  Box,
  Layers,
  Wrench,
  FlaskConical,
  Cog,
  Factory,
  Anchor,
  Building2,
  Settings,
  Hammer,
  Shield,
  Droplets,
  Thermometer,
  RefreshCw,
  FileCheck,
  CheckCircle2,
  Lightbulb,
  BookOpen,
  MapPin,
  Package,
  Cpu,
  Wrench as WrenchIcon,
  ShieldCheck,
  Zap,
} from 'lucide-react';

/* ═══════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════ */

const PAGE_TITLE =
  'Tie Rod Hydraulic Cylinder Manufacturer in Gujarat | NFPA Standard';
const PAGE_DESCRIPTION =
  'Leading tie rod hydraulic cylinder manufacturer in India. We supply heavy-duty, highly serviceable NFPA standard tie rod cylinders to OEMs and machine builders.';
const PAGE_URL = '/products/hydraulic-cylinders/tie-rod-hydraulic-cylinders/';
const PAGE_IMAGE = '/images/products/hydraulic-cylinders/tie-rod-hydraulic-cylinder-manufacturer.webp';

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
  TIE_ROD_FAQS,
  TIE_ROD_SPECS,
  TIE_ROD_COMPONENTS,
  TIE_ROD_INDUSTRIES,
} from '@/data/hydraulic-cylinders/tie-rod-hydraulic-cylinders';

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
        name: 'Tie Rod Hydraulic Cylinders',
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
          '@type': 'Offer',
          priceCurrency: 'INR',
          price: '0',
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
            value: '40mm to 250mm (1.5" to 10" NFPA standard)',
          },
          {
            '@type': 'PropertyValue',
            name: 'Maximum Operating Pressure',
            value: 'Up to 210 Bar (3000 PSI)',
          },
          {
            '@type': 'PropertyValue',
            name: 'Mounting Standards',
            value: 'NFPA, ISO 6020/2, Custom',
          },
          {
            '@type': 'PropertyValue',
            name: 'Barrel Material',
            value: 'ST52 Seamless Honed Tube',
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
            name: 'Tie Rod Hydraulic Cylinders',
            item: `${siteUrl}${PAGE_URL}`,
          },
        ],
      },
      /* 4. FAQPage */
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}${PAGE_URL}#faq`,
        mainEntity: TIE_ROD_FAQS.map((faq) => ({
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

export default function TieRodHydraulicCylindersPage() {
  const schema = buildPageSchema();

  return (
    <>
      <JsonLd data={schema} />

      {/* ─── 01 Hero Section ─── */}
      <HeroSection />

      {/* ─── 02 Product Overview ─── */}
      <ProductOverview />

      {/* ─── 03 Key Features (Construction & Advantages) ─── */}
      <KeyFeatures />

      {/* ─── 04 Technical Specifications ─── */}
      <TechnicalSpecifications />

      {/* ─── 05 Product Variants (Tie Rod vs Welded) ─── */}
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
      <LocalServiceAreas />



      {/* ─── 14 FAQs ─── */}
      <FAQSection />

      {/* ─── 15 CTA Section ─── */}
      <CTA
        title="Ready to discuss high-volume OEM manufacturing pricing?"
        description="Standardize your automated machinery with highly serviceable, NFPA-compliant tie rod hydraulic cylinders. Partner with Honeywell Hydraulics to eliminate prolonged maintenance downtime."
        primaryCtaText="REQUEST A TIE ROD QUOTE"
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
      {/* Background Decorative Element */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-brand-surfaceGray skew-x-[-12deg] translate-x-20 -z-10 hidden lg:block"
        aria-hidden="true"
      />

      <Container>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center text-base text-brand-steelGray font-body gap-1.5">
            <li>
              <Link
                href="/"
                className="hover:text-honeywell-red transition-colors"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/products/"
                className="hover:text-honeywell-red transition-colors"
              >
                Products
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/products/hydraulic-cylinders/"
                className="hover:text-honeywell-red transition-colors"
              >
                Hydraulic Cylinders
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li
              className="text-honeywell-navy font-semibold"
              aria-current="page"
            >
              Tie Rod Cylinders
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="flex flex-col items-start z-10">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="custom">HIGH SERVICEABILITY ACTUATION</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-bold text-honeywell-navy leading-[1.1] mb-6">
              Tie Rod Hydraulic Cylinder Manufacturer
            </h1>

            <p className="text-lg text-brand-darkSlate font-body mb-8 max-w-xl leading-relaxed  text-justify">
              Engineered for absolute precision and rapid field maintenance. Honeywell Hydraulics is a premier tie rod hydraulic cylinder manufacturer in Gujarat, supplying highly standardized, heavy-duty NFPA tie rod cylinders to OEMs, machine builders, and automated factories.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <Button
                href="/request-quote/"
                size="lg"
                variant="primary"
                className="w-full sm:w-auto font-bold tracking-wide"
              >
                REQUEST OEM QUOTE{' '}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="/contact-us/"
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white hover:bg-brand-surfaceGray"
              >
                SIZING CONSULTATION{' '}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Contact Bar */}
            <div className="flex flex-wrap items-center gap-6 py-4 border-t border-slate-200 w-full">
              <a
                href="tel:+919924343873"
                className="flex items-center text-honeywell-navy hover:text-honeywell-red font-medium transition-colors font-body"
                aria-label="Call Honeywell Hydraulics"
              >
                <div className="w-10 h-10 rounded-full bg-brand-lightSurface flex items-center justify-center mr-3">
                  <Phone className="w-5 h-5" />
                </div>
                +91 99243 43873
              </a>
              <a
                href="https://wa.me/919924343873"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-honeywell-navy hover:text-[#25D366] font-medium transition-colors font-body"
                aria-label="WhatsApp Honeywell Hydraulics"
              >
                <div className="w-10 h-10 rounded-full bg-brand-lightSurface flex items-center justify-center mr-3">
                  <MessageCircle className="w-5 h-5" />
                </div>
                WhatsApp Engineering Team
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-3 mt-6">
              <Badge variant="iso" className="bg-white">
                NFPA Standard
              </Badge>
              <Badge
                variant="madeInIndia"
                className="bg-white border border-orange-200"
              >
                Made in India
              </Badge>
              <Badge
                variant="default"
                className="bg-white border border-gray-200"
              >
                100% Tested
              </Badge>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative w-full aspect-[4/3] lg:aspect-square bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden group">
            <div className="absolute inset-0 bg-brand-surfaceGray opacity-50 rounded-xl" />
            <Image
              src="/images/products/hydraulic-cylinders/tie-rod-hydraulic-cylinder-manufacturer.webp"
              alt="Tie Rod Hydraulic Cylinder Manufacturer in Ahmedabad - NFPA tie rod cylinder by Honeywell Hydraulics"
              fill
              priority fetchPriority="high" decoding="sync" quality={85}
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Container>

      {/* Key Specs Strip */}
      <div className="absolute bottom-0 left-0 w-full border-t border-slate-200 bg-white hidden md:block">
        <Container>
          <div className="flex flex-wrap divide-x divide-slate-200 py-4">
            <div className="px-6 flex-1 text-center first:pl-0 last:pr-0">
              <span className="block text-xs font-bold text-brand-steelGray uppercase tracking-wider mb-1">
                Bore
              </span>
              <span className="block text-sm font-mono text-honeywell-navy font-semibold">
                40mm - 250mm
              </span>
            </div>
            <div className="px-6 flex-1 text-center">
              <span className="block text-xs font-bold text-brand-steelGray uppercase tracking-wider mb-1">
                Standard
              </span>
              <span className="block text-sm font-mono text-honeywell-navy font-semibold">
                NFPA / ISO 6020
              </span>
            </div>
            <div className="px-6 flex-1 text-center">
              <span className="block text-xs font-bold text-brand-steelGray uppercase tracking-wider mb-1">
                Pressure
              </span>
              <span className="block text-sm font-mono text-honeywell-navy font-semibold">
                Up to 210 Bar
              </span>
            </div>
            <div className="px-6 flex-1 text-center">
              <span className="block text-xs font-bold text-brand-steelGray uppercase tracking-wider mb-1">
                Maintenance
              </span>
              <span className="block text-sm font-mono text-honeywell-navy font-semibold">
                Field Serviceable
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
    <Section bg="white" id="overview">
      <Container>
        <div className="max-w-4xl mx-auto">
          <Heading variant="section" as="h2" underline="center" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-6">
            What Are Tie Rod Hydraulic Cylinders?
          </Heading>
          <div className="space-y-5 text-brand-darkSlate font-body text-lg leading-relaxed ">
            <p>
              In the world of industrial linear actuation, the{' '}
              <strong className="text-honeywell-navy">Tie Rod Hydraulic Cylinder</strong> is the undisputed standard for automated manufacturing. According to industry reliability studies, implementing standardized tie rod cylinders can reduce maintenance-related downtime by up to 80% compared to custom-welded alternatives in high-cycle environments.
            </p>
            <p>
              Unlike welded cylinders, which permanently fuse the barrel to the end caps, a tie rod cylinder relies on four or more high-tensile threaded steel rods (the &quot;tie rods&quot;) running the entire length of the cylinder exterior. These rods clamp the two end caps tightly against the central steel barrel.
            </p>
            <p>
              As a leading industrial tie rod cylinder supplier, we manufacture these units specifically for factory environments. Their clamped construction makes them incredibly easy to disassemble, inspect, and rebuild directly on the factory floor without requiring heavy cutting or welding equipment. Furthermore, they are typically manufactured to strict NFPA (National Fluid Power Association) or ISO dimensional standards, allowing machine builders to seamlessly drop our cylinders into existing equipment designs.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ─── 03 Key Features (Construction & Advantages) ─── */
function KeyFeatures() {
  return (
    <Section bg="gray" id="construction">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading variant="section" as="h2" underline="center" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            Tie Rod Construction Explained
          </Heading>
          <p className="text-lg text-brand-steelGray font-body text-justify">
            The structural integrity of a tie rod cylinder relies entirely on the precise machining and torquing of its core components.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TIE_ROD_COMPONENTS.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200 p-8 hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="flex items-center gap-4 mb-5">
                <IconBox
                  icon={step.icon}
                  variant="primary"
                  size="md"
                />
              </div>
              <h3 className="text-xl font-display font-bold text-honeywell-navy mb-3 group-hover:text-honeywell-red transition-colors">
                {step.title}
              </h3>
              <p className="text-brand-steelGray font-body text-sm leading-relaxed  text-justify">
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
    <Section bg="white" id="technical-specifications">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <Heading variant="section" as="h2" underline="center" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
              Technical Specifications
            </Heading>
            <p className="text-lg text-brand-steelGray font-body mb-8 text-justify">
              Manufactured to industry standard specifications to ensure interchangeability and reliability across all automated applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                href="/request-quote/"
                variant="primary"
                size="md"
                className="font-bold"
              >
                REQUEST OEM PRICING <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                href="/contact-us/"
                variant="outline"
                size="md"
              >
                DISCUSS SIZING
              </Button>
            </div>
          </div>
          <SpecTable
            title="Standard Capability Range"
            rows={TIE_ROD_SPECS}
          />
        </div>
      </Container>
    </Section>
  );
}

/* ─── 05 Product Variants (Tie Rod vs Welded) ─── */
function ProductVariants() {
  return (
    <Section bg="gray" id="tie-rod-vs-welded">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading variant="section" as="h2" underline="center" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            Tie Rod vs. Welded Cylinders
          </Heading>
          <p className="text-lg text-brand-steelGray font-body text-justify">
            Understanding when to specify a tie rod cylinder versus a welded cylinder is critical to machine design.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-surfaceGray border-b border-slate-200">
                  <th className="p-4 font-display font-bold text-honeywell-navy">Feature</th>
                  <th className="p-4 font-display font-bold text-honeywell-navy border-l border-slate-200">Tie Rod Cylinders</th>
                  <th className="p-4 font-display font-bold text-honeywell-navy border-l border-slate-200">Welded Cylinders</th>
                </tr>
              </thead>
              <tbody className="text-sm font-body text-brand-darkSlate">
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-semibold text-honeywell-navy">Construction</td>
                  <td className="p-4 border-l border-slate-200">Bolted exterior rods clamp caps to barrel</td>
                  <td className="p-4 border-l border-slate-200">End caps permanently welded to the barrel</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-semibold text-honeywell-navy">Maximum Pressure</td>
                  <td className="p-4 border-l border-slate-200">Low to Medium (Typically up to 210 Bar / 3000 PSI)</td>
                  <td className="p-4 border-l border-slate-200">High to Extreme (Up to 350+ Bar / 5000+ PSI)</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-semibold text-honeywell-navy">Serviceability</td>
                  <td className="p-4 border-l border-slate-200 font-semibold text-[#25D366]">Extremely High (Disassembled with standard wrenches)</td>
                  <td className="p-4 border-l border-slate-200">Low (Requires specialized tools or cutting to rebuild)</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-semibold text-honeywell-navy">Environment</td>
                  <td className="p-4 border-l border-slate-200">Clean indoor factories, automated assembly lines</td>
                  <td className="p-4 border-l border-slate-200">Harsh outdoor, heavy construction, mining</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-honeywell-navy">Standardization</td>
                  <td className="p-4 border-l border-slate-200">Highly standardized (NFPA/ISO interchangeable)</td>
                  <td className="p-4 border-l border-slate-200">Usually highly customized per application</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </Section>
  );
}


/* ─── 07 Industries Served ─── */
function IndustriesSection() {
  return (
    <Section bg="gray" id="industries">
      <Container>
        <div className="text-center mb-8 md:mb-12 flex flex-col items-center">
          <Heading variant="section" as="h2" underline="center" className="text-honeywell-navy mb-4">
            Industries Served
          </Heading>
          <p className="text-lg text-brand-steelGray font-body max-w-3xl text-center">
            Our custom tie rod hydraulic cylinders are the standard actuators for continuous manufacturing sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TIE_ROD_INDUSTRIES.map((ind, idx) => (
            <IndustryCard
              key={idx}
              industryName={ind.industryName}
              description={ind.description}
              icon={ind.icon}
              href={ind.href}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── 08 Manufacturing Process ─── */
function ManufacturingProcess() {
  return (
    <Section bg="white" id="manufacturing-process">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading variant="section" as="h2" underline="center" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            Manufacturing & Quality Process
          </Heading>
          <p className="text-lg text-brand-steelGray font-body text-justify">
            Every NFPA tie rod cylinder is delivered with a complete dimensional test certificate, verifying that the pin-to-pin lengths and port orientations exactly match your supplied CAD drawings.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-brand-surfaceGray rounded-xl border border-slate-200 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Cog className="w-6 h-6 text-honeywell-red" />
              <h3 className="text-lg font-display font-bold text-honeywell-navy">
                Precision Machining
              </h3>
            </div>
            <p className="text-sm text-brand-steelGray font-body leading-relaxed  text-justify">
              Advanced CNC milling centers utilized to machine perfectly square end caps, ensuring exact tie-rod alignment.
            </p>
          </div>

          <div className="bg-brand-surfaceGray rounded-xl border border-slate-200 p-8">
            <div className="flex items-center gap-3 mb-4">
              <WrenchIcon className="w-6 h-6 text-honeywell-red" />
              <h3 className="text-lg font-display font-bold text-honeywell-navy">
                Torque Calibration
              </h3>
            </div>
            <p className="text-sm text-brand-steelGray font-body leading-relaxed  text-justify">
              Pneumatic torque-yield wrenches used during assembly to guarantee uniform clamping force across all four tie rods, preventing asymmetrical barrel stress.
            </p>
          </div>

          <div className="bg-brand-surfaceGray rounded-xl border border-slate-200 p-8">
            <div className="flex items-center gap-3 mb-4">
              <FileCheck className="w-6 h-6 text-honeywell-red" />
              <h3 className="text-lg font-display font-bold text-honeywell-navy">
                System Validation
              </h3>
            </div>
            <p className="text-sm text-brand-steelGray font-body leading-relaxed  text-justify">
              100% of our tie rod cylinders undergo rigorous 1.5x working pressure hydrostatic testing to verify rod seal integrity and ensure zero static O-ring extrusion.
            </p>
          </div>
        </div>

        {/* Mid-page Guarantee */}
        <div className="bg-honeywell-navy rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-1/2 h-full bg-honeywell-red opacity-5 -skew-x-12 translate-x-1/4"
            aria-hidden="true"
          />
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 relative z-10">
            The Honeywell Guarantee
          </h3>
          <p className="text-brand-borderGray font-body max-w-2xl mx-auto mb-6 relative z-10 text-justify">
            Our heavy-duty tie rod cylinders are backed by a strict Defect Warranty. Should a unit require maintenance, our highly serviceable design allows your technicians to replace seals in minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Button href="/contact-us/" variant="primary" size="lg" className="w-full sm:w-auto font-bold tracking-wide">
              CONTACT US <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <a
              href="https://wa.me/919924343873"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-medium hover:text-[#25D366] transition-colors font-body"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ─── 09 Project Spotlight ─── */
function ProjectSpotlight() {
  return (
    <Section bg="white" id="project-spotlight">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Badge variant="years">CASE STUDY</Badge>
            <span className="text-sm text-brand-steelGray font-body font-medium">
              Automotive Robotic Welding Cell
            </span>
          </div>

          <Heading variant="section" as="h2" underline="center" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-3">
            Project Spotlight: Standardized Tie Rod Cylinders
          </Heading>
          <p className="text-brand-steelGray font-body mb-10 text-justify">
            Client: Automotive Automation Integrator &mdash; Sanand, Gujarat
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <div className="bg-brand-surfaceGray p-8 border-b md:border-b-0 md:border-r border-slate-200">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-honeywell-red/10 flex items-center justify-center shrink-0">
                  <span className="text-honeywell-red font-bold text-sm">01</span>
                </div>
                <h3 className="text-lg font-display font-bold text-honeywell-navy">The Challenge</h3>
              </div>
              <p className="text-sm text-brand-steelGray font-body leading-relaxed  text-justify">
                The OEM built a multi-station robotic welding cell using custom-welded cylinders for part clamping. When a seal failed due to weld-spatter damage, the maintenance team had to cut the cylinder apart, causing 14 hours of assembly line downtime.
              </p>
            </div>

            <div className="bg-white p-8 border-b md:border-b-0 md:border-r border-slate-200">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-honeywell-navy/10 flex items-center justify-center shrink-0">
                  <span className="text-honeywell-navy font-bold text-sm">02</span>
                </div>
                <h3 className="text-lg font-display font-bold text-honeywell-navy">The Solution</h3>
              </div>
              <p className="text-sm text-brand-steelGray font-body leading-relaxed  text-justify">
                Honeywell Hydraulics replaced the entire clamping network with standardized NFPA Tie Rod Cylinders. We equipped the cylinders with heavy-duty rod wipers to clear weld spatter and standardized the mounting footprint across all 12 stations.
              </p>
            </div>

            <div className="bg-honeywell-navy p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-sm">03</span>
                </div>
                <h3 className="text-lg font-display font-bold text-white">The Outcome</h3>
              </div>
              <p className="text-sm text-brand-borderGray font-body leading-relaxed mb-6  text-justify">
                When future seal replacements were required, the automotive maintenance crew simply unbolted the tie rods and replaced the seals directly on the jig without removing the cylinder body. Downtime was reduced from 14 hours to <strong className="text-white">45 minutes</strong>.
              </p>
              <Button
                href="/request-quote/"
                variant="primary"
                size="md"
                className="font-bold w-full text-center justify-center"
              >
                REQUEST OEM QUOTE <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ─── 10 Related Products ─── */
function RelatedProducts() {
  const products = [
    {
      title: 'Custom Hydraulic Cylinders',
      description:
        'Need beyond standard NFPA? Explore our bespoke manufacturing capabilities for extreme large bore and reverse-engineered actuators.',
      category: 'Cylinders',
      imageSrc: '/images/home/hero/custom-hydraulic-cylinder-manufacturer.webp',
      href: '/products/hydraulic-cylinders/custom-hydraulic-cylinders/',
      ctaText: 'View Custom Cylinders',
    },
    {
      title: 'Hydraulic Power Packs',
      description:
        'The fluid generation cores that supply the flow required for rapid tie rod actuation in automated environments.',
      category: 'Power Generation',
      imageSrc: '/images/products/hydraulic-power-packs/hydraulic-power-pack-manufacturer.webp',
      href: '/products/hydraulic-power-packs/',
      ctaText: 'View Power Packs',
    },
    {
      title: 'Manifold Blocks',
      description:
        'The zero-leak CNC-machined logic blocks that dictate the stroke timing of your tie rod cylinders.',
      category: 'Fluid Control',
      imageSrc: '/images/products/hydraulic-manifold-block-manufacturer.webp',
      href: '/products/manifold-blocks/',
      ctaText: 'View Manifold Blocks',
    },
  ];

  return (
    <Section bg="gray" id="related-products">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <Heading variant="section" as="h2" underline="center" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
              Integrate Your Tie Rod Cylinder
            </Heading>
            <p className="text-lg text-brand-steelGray font-body text-justify">
              Tie rod cylinders are the standard actuators for automated environments. Power and control them with our premium fluid generation and logic systems.
            </p>
          </div>
          <div className="mt-6 md:mt-0 shrink-0">
            <Link
              href="/products/"
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
      icon: <Cpu className="w-6 h-6" />,
      title: 'OEM Hydraulic Manufacturing',
      description:
        'High-volume, repeatable CNC production of NFPA tie rod cylinders for your machine assembly line. Batch production scheduling.',
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Hydraulic Cylinder Repair',
      description:
        'While tie rods are easy to service, we provide complete teardown, re-honing, and hard-chroming for severely damaged units.',
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: 'Hydraulic Maintenance Services',
      description:
        'AMC contracts for fluid flushing and preventative seal replacements across your entire factory floor.',
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: 'Custom Engineering',
      description:
        'Need an NFPA cylinder with special mounting lugs or extreme temperature seals? Our design team can modify standards.',
    },
  ];

  return (
    <Section bg="white" id="engineering-advantage">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Heading variant="section" as="h2" underline="center" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            The OEM Advantage
          </Heading>
          <p className="text-lg text-brand-steelGray font-body text-justify">
            Purchasing a tie rod cylinder is about ensuring long-term machine uptime. Leverage our engineering services to optimize your plant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex gap-5 bg-brand-surfaceGray rounded-xl border border-slate-200 p-7 hover:shadow-md transition-shadow duration-300"
            >
              <IconBox
                icon={service.icon}
                variant="primary"
                size="md"
                className="shrink-0 mt-1"
              />
              <div>
                <h3 className="text-lg font-display font-bold text-honeywell-navy mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-brand-steelGray font-body leading-relaxed  text-justify">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── 12 Local Service Areas ─── */
function LocalServiceAreas() {
  return (
    <Section bg="gray" id="local-service-areas">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Heading variant="section" as="h2" underline="center" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            Tie Rod Cylinder Manufacturer in India
          </Heading>
          <p className="text-lg text-brand-steelGray font-body text-justify">
            Procure NFPA standard cylinders directly in your city with immediate dispatch capability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Future route per card: /locations/{city-slug}/ — to be enabled in Phase 5.x */}
          {homepageLocations.map((loc, idx) => (
            <LocationCard
              key={idx}
              city={loc.city}
              description={loc.description}
              industries={loc.industries}
              href="/contact-us/"
              ctaText="Enquire Now"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}



/* ─── 14 FAQ Section ─── */
function FAQSection() {
  return (
    <SiteFAQSection 
      faqs={TIE_ROD_FAQS} 
      title="Frequently Asked Questions"
      description="Common questions about our tie rod hydraulic cylinder capabilities."
      injectSchema={false}
    />
  );
}
