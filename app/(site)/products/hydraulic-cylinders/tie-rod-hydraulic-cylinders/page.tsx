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
import { FAQAccordion } from '@/components/faq/FAQAccordion';
import { ProductCard } from '@/components/cards/ProductCard';
import { LocationCard } from '@/components/cards/LocationCard';
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
const PAGE_IMAGE = '/images/products/tie-rod-hydraulic-cylinder-manufacturer.webp';

export const metadata: Metadata = {
  ...buildMetadata({
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    keywords: [
      'Tie Rod Hydraulic Cylinder Manufacturer Ahmedabad',
      'Tie Rod Hydraulic Cylinder Supplier Gujarat',
      'Industrial Tie Rod Cylinder',
      'NFPA Hydraulic Cylinder Manufacturer',
      'Tie Rod Cylinders India',
      'Tie Rod Hydraulic Cylinders',
    ],
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

const FAQS = [
  {
    question: 'Why should I choose a tie rod cylinder instead of a welded cylinder?',
    answer:
      'If your machine operates indoors and requires rapid maintenance to prevent costly downtime, tie rod cylinders are superior because they can be disassembled and rebuilt on the factory floor with standard wrenches.',
  },
  {
    question: 'Are your tie rod cylinders interchangeable with other NFPA brands?',
    answer:
      'Yes. We manufacture our tie rod cylinders to strict NFPA and ISO 6020/2 dimensional standards. The mounting dimensions, port locations, and pin-to-pin lengths will perfectly match major international brands, allowing for easy drop-in replacements.',
  },
  {
    question: 'Can a tie rod cylinder handle high pressures?',
    answer:
      'Tie rod cylinders are generally rated for low to medium pressure (up to 210 Bar / 3000 PSI). For extreme high-pressure applications (350+ Bar) where shock loads could cause the tie rods to stretch, we recommend our Welded Hydraulic Cylinders.',
  },
  {
    question: 'Do you offer adjustable cushioning on your tie rod cylinders?',
    answer:
      'Yes. We can integrate adjustable internal fluid cushions on both the head and cap ends to safely decelerate the piston at the end of the stroke, preventing mechanical slamming in high-speed automation.',
  },
];

const TECHNICAL_SPECS = [
  { parameter: 'Bore Sizes', value: '40mm to 250mm (1.5" to 10" NFPA standard)' },
  {
    parameter: 'Maximum Operating Pressure',
    value: 'Up to 210 Bar (3000 PSI)',
  },
  {
    parameter: 'Mounting Standards',
    value: 'NFPA, ISO 6020/2, Custom',
  },
  {
    parameter: 'Tie Rod Material',
    value: 'High-Tensile Alloy Steel',
  },
  {
    parameter: 'Barrel Material',
    value: 'ST52 Seamless Honed Tube (Ra 0.2 µm finish)',
  },
  {
    parameter: 'Sealing Options',
    value:
      'Polyurethane (Standard), Viton (High-Temp), PTFE (Low-Friction)',
  },
  {
    parameter: 'Cushioning',
    value: 'Adjustable internal cushioning available on both head and cap ends',
  },
];

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
        mainEntity: FAQS.map((faq) => ({
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

      {/* ─── 13 Resources ─── */}
      <ResourcesSection />

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
      className="relative bg-white pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-[#E2E8F0]"
      id="hero"
    >
      {/* Background Decorative Element */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-[#F8FAFC] skew-x-[-12deg] translate-x-20 -z-10 hidden lg:block"
        aria-hidden="true"
      />

      <Container>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center text-sm text-[#64748B] font-body gap-1.5">
            <li>
              <Link
                href="/"
                className="hover:text-[#E31B23] transition-colors"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/products/"
                className="hover:text-[#E31B23] transition-colors"
              >
                Products
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/products/hydraulic-cylinders/"
                className="hover:text-[#E31B23] transition-colors"
              >
                Hydraulic Cylinders
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li
              className="text-[#0D1B5C] font-semibold"
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

            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-bold text-[#0D1B5C] leading-[1.1] mb-6">
              Tie Rod Hydraulic Cylinder Manufacturer
            </h1>

            <p className="text-lg text-[#334155] font-body mb-8 max-w-xl leading-relaxed">
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
                className="w-full sm:w-auto bg-white hover:bg-[#F8FAFC]"
              >
                SIZING CONSULTATION{' '}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Contact Bar */}
            <div className="flex flex-wrap items-center gap-6 py-4 border-t border-[#E2E8F0] w-full">
              <a
                href="tel:+919924343873"
                className="flex items-center text-[#0D1B5C] hover:text-[#E31B23] font-medium transition-colors font-body"
                aria-label="Call Honeywell Hydraulics"
              >
                <div className="w-10 h-10 rounded-full bg-[#F1F5F9] flex items-center justify-center mr-3">
                  <Phone className="w-5 h-5" />
                </div>
                +91 99243 43873
              </a>
              <a
                href="https://wa.me/919924343873"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[#0D1B5C] hover:text-[#25D366] font-medium transition-colors font-body"
                aria-label="WhatsApp Honeywell Hydraulics"
              >
                <div className="w-10 h-10 rounded-full bg-[#F1F5F9] flex items-center justify-center mr-3">
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
          <div className="relative w-full aspect-[4/3] lg:aspect-square bg-white rounded-xl border border-[#E2E8F0] shadow-sm p-4 overflow-hidden group">
            <div className="absolute inset-0 bg-[#F8FAFC] opacity-50 rounded-xl" />
            <Image
              src="/images/products/tie-rod-hydraulic-cylinder-manufacturer.webp"
              alt="Tie Rod Hydraulic Cylinder Manufacturer in Ahmedabad - NFPA tie rod cylinder by Honeywell Hydraulics"
              fill
              priority
              className="object-contain p-8 group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Container>

      {/* Key Specs Strip */}
      <div className="absolute bottom-0 left-0 w-full border-t border-[#E2E8F0] bg-white hidden md:block">
        <Container>
          <div className="flex flex-wrap divide-x divide-[#E2E8F0] py-4">
            <div className="px-6 flex-1 text-center first:pl-0 last:pr-0">
              <span className="block text-xs font-bold text-[#64748B] uppercase tracking-wider mb-1">
                Bore
              </span>
              <span className="block text-sm font-mono text-[#0D1B5C] font-semibold">
                40mm - 250mm
              </span>
            </div>
            <div className="px-6 flex-1 text-center">
              <span className="block text-xs font-bold text-[#64748B] uppercase tracking-wider mb-1">
                Standard
              </span>
              <span className="block text-sm font-mono text-[#0D1B5C] font-semibold">
                NFPA / ISO 6020
              </span>
            </div>
            <div className="px-6 flex-1 text-center">
              <span className="block text-xs font-bold text-[#64748B] uppercase tracking-wider mb-1">
                Pressure
              </span>
              <span className="block text-sm font-mono text-[#0D1B5C] font-semibold">
                Up to 210 Bar
              </span>
            </div>
            <div className="px-6 flex-1 text-center">
              <span className="block text-xs font-bold text-[#64748B] uppercase tracking-wider mb-1">
                Maintenance
              </span>
              <span className="block text-sm font-mono text-[#0D1B5C] font-semibold">
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
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0D1B5C] mb-6">
            What Are Tie Rod Hydraulic Cylinders?
          </h2>
          <div className="space-y-5 text-[#334155] font-body text-lg leading-relaxed">
            <p>
              In the world of industrial linear actuation, the{' '}
              <strong className="text-[#0D1B5C]">Tie Rod Hydraulic Cylinder</strong> is the undisputed standard for automated manufacturing.
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
  const steps = [
    {
      icon: <Box className="w-6 h-6" />,
      title: 'The End Caps',
      desc: 'CNC-machined from solid steel blocks. The head cap and the rear cap feature deep grooves designed to perfectly seat the barrel. These caps house the fluid ports and the crucial rod wiper and gland seals.',
    },
    {
      icon: <WrenchIcon className="w-6 h-6" />,
      title: 'The Tie Rods',
      desc: 'High-yield-strength alloy steel rods. Torqued to exact mathematical specifications to provide massive clamping force, ensuring the O-ring static seals never blow out under pressure.',
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'The Barrel',
      desc: 'Precision-honed ST52 seamless steel tubing. Honed to a mirror-like Ra 0.2 µm finish. Zero heat-induced distortion maintains perfect internal cylindricity.',
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'The Piston & Rod',
      desc: 'Internal piston utilizes premium polyurethane U-cups. The hard-chrome plated piston rod transmits mechanical force and resists wear.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Sealing System',
      desc: 'Premium low-friction seals designed specifically to minimize heat generation during rapid, continuous-cycle stroking.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Rapid Serviceability',
      desc: 'Loosen the tie rod nuts, slide the end cap off, replace the seal, and re-bolt the cylinder together using standard hand tools within 30 minutes.',
    },
  ];

  return (
    <Section bg="gray" id="construction">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0D1B5C] mb-4">
            Tie Rod Construction Explained
          </h2>
          <p className="text-lg text-[#64748B] font-body">
            The structural integrity of a tie rod cylinder relies entirely on the precise machining and torquing of its core components.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-[#E2E8F0] p-8 hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="flex items-center gap-4 mb-5">
                <IconBox
                  icon={step.icon}
                  variant="primary"
                  size="md"
                />
              </div>
              <h3 className="text-xl font-display font-bold text-[#0D1B5C] mb-3 group-hover:text-[#E31B23] transition-colors">
                {step.title}
              </h3>
              <p className="text-[#64748B] font-body text-sm leading-relaxed">
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0D1B5C] mb-4">
              Technical Specifications
            </h2>
            <p className="text-lg text-[#64748B] font-body mb-8">
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
            rows={TECHNICAL_SPECS}
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
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0D1B5C] mb-4">
            Tie Rod vs. Welded Cylinders
          </h2>
          <p className="text-lg text-[#64748B] font-body">
            Understanding when to specify a tie rod cylinder versus a welded cylinder is critical to machine design.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl border border-[#E2E8F0] overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
                  <th className="p-4 font-display font-bold text-[#0D1B5C]">Feature</th>
                  <th className="p-4 font-display font-bold text-[#0D1B5C] border-l border-[#E2E8F0]">Tie Rod Cylinders</th>
                  <th className="p-4 font-display font-bold text-[#0D1B5C] border-l border-[#E2E8F0]">Welded Cylinders</th>
                </tr>
              </thead>
              <tbody className="text-sm font-body text-[#334155]">
                <tr className="border-b border-[#E2E8F0]">
                  <td className="p-4 font-semibold text-[#0D1B5C]">Construction</td>
                  <td className="p-4 border-l border-[#E2E8F0]">Bolted exterior rods clamp caps to barrel</td>
                  <td className="p-4 border-l border-[#E2E8F0]">End caps permanently welded to the barrel</td>
                </tr>
                <tr className="border-b border-[#E2E8F0]">
                  <td className="p-4 font-semibold text-[#0D1B5C]">Maximum Pressure</td>
                  <td className="p-4 border-l border-[#E2E8F0]">Low to Medium (Typically up to 210 Bar / 3000 PSI)</td>
                  <td className="p-4 border-l border-[#E2E8F0]">High to Extreme (Up to 350+ Bar / 5000+ PSI)</td>
                </tr>
                <tr className="border-b border-[#E2E8F0]">
                  <td className="p-4 font-semibold text-[#0D1B5C]">Serviceability</td>
                  <td className="p-4 border-l border-[#E2E8F0] font-semibold text-[#25D366]">Extremely High (Disassembled with standard wrenches)</td>
                  <td className="p-4 border-l border-[#E2E8F0]">Low (Requires specialized tools or cutting to rebuild)</td>
                </tr>
                <tr className="border-b border-[#E2E8F0]">
                  <td className="p-4 font-semibold text-[#0D1B5C]">Environment</td>
                  <td className="p-4 border-l border-[#E2E8F0]">Clean indoor factories, automated assembly lines</td>
                  <td className="p-4 border-l border-[#E2E8F0]">Harsh outdoor, heavy construction, mining</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#0D1B5C]">Standardization</td>
                  <td className="p-4 border-l border-[#E2E8F0]">Highly standardized (NFPA/ISO interchangeable)</td>
                  <td className="p-4 border-l border-[#E2E8F0]">Usually highly customized per application</td>
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
  const industries = [
    {
      icon: <Factory className="w-6 h-6" />,
      name: 'Automotive OEM',
      desc: 'Providing high-speed, highly serviceable clamping cylinders for robotic welding stations and assembly lines.',
    },
    {
      icon: <Box className="w-6 h-6" />,
      name: 'Plastic Processing',
      desc: 'Supplying standardized core-pull and ejector cylinders for injection moulding machines.',
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      name: 'Machine Tool Builders',
      desc: 'Delivering zero-distortion, low-friction actuation for automated CNC loading and unloading gantries.',
    },
    {
      icon: <Package className="w-6 h-6" />,
      name: 'Packaging & Automation',
      desc: 'Engineering rapid-cycle cylinders for high-speed corrugated box manufacturing and palletizing robots.',
    },
  ];

  return (
    <Section bg="gray" id="industries">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0D1B5C] mb-4">
            Industries Served
          </h2>
          <p className="text-lg text-[#64748B] font-body">
            Our custom tie rod hydraulic cylinders are the standard actuators for continuous manufacturing sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="flex gap-5 bg-white rounded-xl border border-[#E2E8F0] p-6 hover:shadow-md transition-shadow duration-300"
            >
              <IconBox
                icon={ind.icon}
                variant="secondary"
                size="md"
                className="shrink-0"
              />
              <div>
                <h3 className="text-lg font-display font-bold text-[#0D1B5C] mb-2">
                  {ind.name}
                </h3>
                <p className="text-sm text-[#64748B] font-body leading-relaxed">
                  {ind.desc}
                </p>
              </div>
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
    <Section bg="white" id="manufacturing-process">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0D1B5C] mb-4">
            Manufacturing & Quality Process
          </h2>
          <p className="text-lg text-[#64748B] font-body">
            Every NFPA tie rod cylinder is delivered with a complete dimensional test certificate, verifying that the pin-to-pin lengths and port orientations exactly match your supplied CAD drawings.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-8">
            <div className="flex items-center gap-3 mb-4">
              <Cog className="w-6 h-6 text-[#E31B23]" />
              <h3 className="text-lg font-display font-bold text-[#0D1B5C]">
                Precision Machining
              </h3>
            </div>
            <p className="text-sm text-[#64748B] font-body leading-relaxed">
              Advanced CNC milling centers utilized to machine perfectly square end caps, ensuring exact tie-rod alignment.
            </p>
          </div>

          <div className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-8">
            <div className="flex items-center gap-3 mb-4">
              <WrenchIcon className="w-6 h-6 text-[#E31B23]" />
              <h3 className="text-lg font-display font-bold text-[#0D1B5C]">
                Torque Calibration
              </h3>
            </div>
            <p className="text-sm text-[#64748B] font-body leading-relaxed">
              Pneumatic torque-yield wrenches used during assembly to guarantee uniform clamping force across all four tie rods, preventing asymmetrical barrel stress.
            </p>
          </div>

          <div className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-8">
            <div className="flex items-center gap-3 mb-4">
              <FileCheck className="w-6 h-6 text-[#E31B23]" />
              <h3 className="text-lg font-display font-bold text-[#0D1B5C]">
                System Validation
              </h3>
            </div>
            <p className="text-sm text-[#64748B] font-body leading-relaxed">
              100% of our tie rod cylinders undergo rigorous 1.5x working pressure hydrostatic testing to verify rod seal integrity and ensure zero static O-ring extrusion.
            </p>
          </div>
        </div>

        {/* Mid-page Guarantee */}
        <div className="bg-[#0D1B5C] rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-1/2 h-full bg-[#E31B23] opacity-5 -skew-x-12 translate-x-1/4"
            aria-hidden="true"
          />
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 relative z-10">
            The Honeywell Guarantee
          </h3>
          <p className="text-[#CBD5E1] font-body max-w-2xl mx-auto mb-6 relative z-10">
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
            <span className="text-sm text-[#64748B] font-body font-medium">
              Automotive Robotic Welding Cell
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0D1B5C] mb-3">
            Project Spotlight: Standardized Tie Rod Cylinders
          </h2>
          <p className="text-[#64748B] font-body mb-10">
            Client: Automotive Automation Integrator &mdash; Sanand, Gujarat
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm">
            <div className="bg-[#F8FAFC] p-8 border-b md:border-b-0 md:border-r border-[#E2E8F0]">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-[#E31B23]/10 flex items-center justify-center shrink-0">
                  <span className="text-[#E31B23] font-bold text-sm">01</span>
                </div>
                <h3 className="text-lg font-display font-bold text-[#0D1B5C]">The Challenge</h3>
              </div>
              <p className="text-sm text-[#64748B] font-body leading-relaxed">
                The OEM built a multi-station robotic welding cell using custom-welded cylinders for part clamping. When a seal failed due to weld-spatter damage, the maintenance team had to cut the cylinder apart, causing 14 hours of assembly line downtime.
              </p>
            </div>

            <div className="bg-white p-8 border-b md:border-b-0 md:border-r border-[#E2E8F0]">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-[#0D1B5C]/10 flex items-center justify-center shrink-0">
                  <span className="text-[#0D1B5C] font-bold text-sm">02</span>
                </div>
                <h3 className="text-lg font-display font-bold text-[#0D1B5C]">The Solution</h3>
              </div>
              <p className="text-sm text-[#64748B] font-body leading-relaxed">
                Honeywell Hydraulics replaced the entire clamping network with standardized NFPA Tie Rod Cylinders. We equipped the cylinders with heavy-duty rod wipers to clear weld spatter and standardized the mounting footprint across all 12 stations.
              </p>
            </div>

            <div className="bg-[#0D1B5C] p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-sm">03</span>
                </div>
                <h3 className="text-lg font-display font-bold text-white">The Outcome</h3>
              </div>
              <p className="text-sm text-[#CBD5E1] font-body leading-relaxed mb-6">
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
      imageSrc: '/images/products/custom-hydraulic-cylinder-manufacturer.webp',
      href: '/products/hydraulic-cylinders/custom-hydraulic-cylinders/',
      ctaText: 'View Custom Cylinders',
    },
    {
      title: 'Hydraulic Power Packs',
      description:
        'The fluid generation cores that supply the flow required for rapid tie rod actuation in automated environments.',
      category: 'Power Generation',
      imageSrc: '/images/products/hydraulic-power-pack-manufacturer.webp',
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0D1B5C] mb-4">
              Integrate Your Tie Rod Cylinder
            </h2>
            <p className="text-lg text-[#64748B] font-body">
              Tie rod cylinders are the standard actuators for automated environments. Power and control them with our premium fluid generation and logic systems.
            </p>
          </div>
          <div className="mt-6 md:mt-0 shrink-0">
            <Link
              href="/products/"
              className="text-[#E31B23] font-bold hover:underline font-body"
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
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0D1B5C] mb-4">
            The OEM Advantage
          </h2>
          <p className="text-lg text-[#64748B] font-body">
            Purchasing a tie rod cylinder is about ensuring long-term machine uptime. Leverage our engineering services to optimize your plant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex gap-5 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-7 hover:shadow-md transition-shadow duration-300"
            >
              <IconBox
                icon={service.icon}
                variant="primary"
                size="md"
                className="shrink-0 mt-1"
              />
              <div>
                <h3 className="text-lg font-display font-bold text-[#0D1B5C] mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[#64748B] font-body leading-relaxed">
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
  const locations = [
    {
      city: 'Ahmedabad',
      description: 'Headquarters for tie rod manufacturing.',
      industries: ['OEM Manufacturing', 'Automation'],
    },
    {
      city: 'Surat',
      description: 'Tie rod cylinders for textile and diamond automation.',
      industries: ['Textile Machinery', 'Diamond Cutting'],
    },
    {
      city: 'Rajkot',
      description: 'Serving machine builders and forging operations.',
      industries: ['Machine Tools', 'Forging'],
    },
    {
      city: 'Vadodara',
      description: 'Standardized actuation for petrochemical equipment.',
      industries: ['Petrochemicals', 'Engineering'],
    },
    {
      city: 'Gandhinagar',
      description: 'Providing tie rod cylinders for special purpose machinery.',
      industries: ['SPM', 'Electronics'],
    },
    {
      city: 'Jamnagar',
      description: 'Brass parts manufacturing automation solutions.',
      industries: ['Brass Components', 'Refineries'],
    },
    {
      city: 'Bhavnagar',
      description: 'Marine equipment automation and handling.',
      industries: ['Marine Engineering', 'Shipyards'],
    },
    {
      city: 'Vapi',
      description: 'Chemical resistant tie rod cylinders.',
      industries: ['Chemical Plants', 'Pharmaceuticals'],
    },
  ];

  return (
    <Section bg="gray" id="local-service-areas">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0D1B5C] mb-4">
            Tie Rod Cylinder Manufacturer in Gujarat
          </h2>
          <p className="text-lg text-[#64748B] font-body">
            Procure NFPA standard cylinders directly in your city with immediate dispatch capability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Future route per card: /locations/{city-slug}/ — to be enabled in Phase 5.x */}
          {locations.map((loc, idx) => (
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

/* ─── 13 Resources Section ─── */
function ResourcesSection() {
  const resources = [
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Download 3D CAD Models',
      description:
        'Access STEP and IGES files of our NFPA tie rod cylinders to integrate into your SolidWorks machine blueprints.',
      ctaText: 'Request CAD Files',
      ctaHref: '/contact-us/',
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Cylinder Maintenance Guide',
      description:
        'Step-by-step instructions on correctly torquing tie rod nuts during a seal replacement on the factory floor.',
      ctaText: 'Contact for Guide',
      ctaHref: '/contact-us/',
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: 'Fluid Power Calculators',
      description:
        'Instantly determine the required bore size based on your machine\'s operating pressure and required tonnage.',
      ctaText: 'Request Calculation',
      ctaHref: '/contact-us/',
    },
  ];

  return (
    <Section bg="white" id="resources">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0D1B5C] mb-4">
            Resources & Engineering Guides
          </h2>
          <p className="text-lg text-[#64748B] font-body">
            Equip your design and maintenance engineers with technical data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, idx) => (
            <div
              key={idx}
              className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-8 flex flex-col hover:shadow-md transition-shadow duration-300"
            >
              <IconBox
                icon={resource.icon}
                variant="secondary"
                size="lg"
                className="mb-6"
              />
              <h3 className="text-xl font-display font-bold text-[#0D1B5C] mb-3">
                {resource.title}
              </h3>
              <p className="text-sm text-[#64748B] font-body leading-relaxed mb-6 flex-grow">
                {resource.description}
              </p>
              <div className="mt-auto">
                <Button
                  href={resource.ctaHref}
                  variant="outline"
                  size="md"
                  className="w-full justify-center font-semibold"
                >
                  {resource.ctaText} <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── 14 FAQ Section ─── */
function FAQSection() {
  return (
    <Section bg="gray" id="faqs">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0D1B5C] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#64748B] font-body">
              Common questions about our tie rod hydraulic cylinder capabilities.
            </p>
          </div>
          <FAQAccordion faqs={FAQS} injectSchema={false} />
        </div>
      </Container>
    </Section>
  );
}
