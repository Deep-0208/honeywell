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
} from 'lucide-react';

/* ═══════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════ */

const PAGE_TITLE =
  'Custom Hydraulic Cylinder Manufacturer Ahmedabad | Bespoke & Large Bore | Honeywell Hydraulics';
const PAGE_DESCRIPTION =
  'Expert custom hydraulic cylinder manufacturer in Ahmedabad, Gujarat. Specializing in bespoke CAD engineering, large bore cylinders (400mm+), and reverse engineering obsolete actuators for heavy industry.';
const PAGE_URL = '/products/hydraulic-cylinders/custom-hydraulic-cylinders/';
const PAGE_IMAGE = '/images/products/custom-hydraulic-cylinder-manufacturer.webp';

export const metadata: Metadata = {
  ...buildMetadata({
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    keywords: [
      'Custom Hydraulic Cylinder Manufacturer Ahmedabad',
      'Custom Hydraulic Cylinder Supplier Gujarat',
      'Industrial Hydraulic Cylinder Manufacturer',
      'Custom Hydraulic Cylinders India',
      'Hydraulic Cylinder Manufacturer Gujarat',
      'Bespoke Hydraulic Cylinder',
      'Large Bore Hydraulic Cylinder',
      'Reverse Engineering Hydraulic Cylinder',
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
    question:
      'Can you manufacture a replacement for a broken imported cylinder without a part number?',
    answer:
      'Yes. This is our primary reverse-engineering service. Send us the damaged cylinder; our engineers will dismantle it, measure all internal and external tolerances, and manufacture an exact, fully compatible replacement.',
  },
  {
    question: 'What is the largest bore size you can manufacture?',
    answer:
      'We have the heavy machining capabilities to manufacture custom large-bore cylinders exceeding 400mm (16+ inches), specifically designed for heavy forging presses and infrastructure projects.',
  },
  {
    question:
      'Can you help design the cylinder if we only have the machine\'s payload requirements?',
    answer:
      'Absolutely. Our engineering team will perform the mechanical load calculations, determine the required system pressure, and engineer the cylinder from scratch to safely lift your payload.',
  },
  {
    question:
      'Do you offer specialized corrosion-resistant cylinders for the chemical industry?',
    answer:
      'Yes. We can manufacture entirely custom cylinders from 304 or 316 Stainless Steel, and utilize specialized Viton or Kalrez seals designed specifically to survive severe chemical processing environments.',
  },
];

const TECHNICAL_SPECS = [
  { parameter: 'Bore Sizes', value: 'Micro-bores up to Large Bores (400mm+)' },
  {
    parameter: 'Stroke Length',
    value: 'Micro-strokes up to Extreme Long Strokes (8,000+ mm)',
  },
  {
    parameter: 'Operating Pressures',
    value: 'Low pressure up to Extreme High Pressure (500+ Bar / 7000+ PSI)',
  },
  {
    parameter: 'Mounting Configurations',
    value: 'Standard, Offset, Asymmetrical, Custom Machined Interfaces',
  },
  {
    parameter: 'Barrel Materials',
    value: 'ST52, EN8, SS304, SS316, Custom High-Strength Alloys',
  },
  {
    parameter: 'Rod Surface Protection',
    value:
      'Heavy Hard Chrome, Nickel-Chrome, Ceramic Coating, Induction Hardening',
  },
  {
    parameter: 'Integrated Logic',
    value: 'Manifold blocks and load-holding valves welded directly to the cylinder',
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
      <LocalServiceAreas />

      {/* ─── 13 Resources ─── */}
      <ResourcesSection />

      {/* ─── 14 FAQs ─── */}
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
      {/* Background Decorative Element */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-brand-surfaceGray skew-x-[-12deg] translate-x-20 -z-10 hidden lg:block"
        aria-hidden="true"
      />

      <Container>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center text-sm text-brand-steelGray font-body gap-1.5">
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
              Custom Hydraulic Cylinders
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="flex flex-col items-start z-10">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="custom">UNRESTRICTED ENGINEERING</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-bold text-honeywell-navy leading-[1.1] mb-6">
              Custom Hydraulic Cylinder Manufacturer
            </h1>

            <p className="text-lg text-brand-darkSlate font-body mb-8 max-w-xl leading-relaxed">
              Bespoke fluid power for when standard catalogs fail. Honeywell
              Hydraulics is a premier custom hydraulic cylinder manufacturer in
              Gujarat, specializing in extreme large bore actuators,
              reverse-engineering obsolete imported equipment, and designing
              one-off cylinders for specialized machinery.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <Button
                href="/request-quote/"
                size="lg"
                variant="primary"
                className="w-full sm:w-auto font-bold tracking-wide"
              >
                SUBMIT DRAWINGS FOR QUOTE{' '}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="/contact-us/"
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white hover:bg-brand-surfaceGray"
              >
                BOOK CONSULTATION{' '}
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
                ISO 9001:2015
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
          <div className="relative w-full aspect-[4/3] lg:aspect-square bg-white rounded-xl border border-slate-200 shadow-sm p-4 overflow-hidden group">
            <div className="absolute inset-0 bg-brand-surfaceGray opacity-50 rounded-xl" />
            <Image
              src="/images/products/custom-hydraulic-cylinder-manufacturer.webp"
              alt="Custom Hydraulic Cylinder Manufacturer in Ahmedabad - Bespoke large bore cylinder by Honeywell Hydraulics"
              fill
              priority
              className="object-contain p-8 group-hover:scale-105 transition-transform duration-700 ease-out"
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
                Up to 400mm+
              </span>
            </div>
            <div className="px-6 flex-1 text-center">
              <span className="block text-xs font-bold text-brand-steelGray uppercase tracking-wider mb-1">
                Stroke
              </span>
              <span className="block text-sm font-mono text-honeywell-navy font-semibold">
                Up to 8,000+ mm
              </span>
            </div>
            <div className="px-6 flex-1 text-center">
              <span className="block text-xs font-bold text-brand-steelGray uppercase tracking-wider mb-1">
                Pressure
              </span>
              <span className="block text-sm font-mono text-honeywell-navy font-semibold">
                Up to 500+ Bar
              </span>
            </div>
            <div className="px-6 flex-1 text-center">
              <span className="block text-xs font-bold text-brand-steelGray uppercase tracking-wider mb-1">
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
    <Section bg="white" id="overview">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-6">
            What Are Custom Hydraulic Cylinders?
          </h2>
          <div className="space-y-5 text-brand-darkSlate font-body text-lg leading-relaxed">
            <p>
              Standard catalog cylinders—like{' '}
              <Link
                href="/products/hydraulic-cylinders/"
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
  const steps = [
    {
      icon: <Calculator className="w-6 h-6" />,
      title: 'Requirement Analysis',
      desc: 'Our engineers consult directly with your machine builders. We analyze the required operational tonnage, available physical space envelope, system pressure, stroke velocity, environmental temperatures, and potential side-loading threats.',
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: 'Load Calculations & Material Yield Analysis',
      desc: 'We perform rigorous column buckling calculations and hoop stress analyses to determine the exact required wall thickness of the cylinder barrel. For extremely long strokes, we calculate the required rod diameter to prevent deflection.',
    },
    {
      icon: <Box className="w-6 h-6" />,
      title: '3D CAD Design',
      desc: 'Our drafting team utilizes advanced SolidWorks and AutoCAD software to construct 3D models of the custom cylinder. These models are shared directly with your engineering team for digital interference checking.',
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'Material Selection',
      desc: 'We specify the precise metallurgy required for the environment—from standard ST52 seamless carbon steel for heavy applications to specialized Monel or Duplex Stainless Steel for extreme corrosive resistance.',
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Prototype Development',
      desc: 'For OEM clients ordering in volume, we machine a fully functional prototype for installation and physical field testing before moving to mass production.',
    },
    {
      icon: <FlaskConical className="w-6 h-6" />,
      title: 'Validation Testing',
      desc: 'Every custom cylinder undergoes 1.5x working pressure hydrostatic testing. We document the pressure holding capabilities and provide a comprehensive test certificate.',
    },
  ];

  return (
    <Section bg="gray" id="engineering-process">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            The Engineering Design Process
          </h2>
          <p className="text-lg text-brand-steelGray font-body">
            Designing a bespoke hydraulic cylinder requires rigorous fluid
            mechanics calculations and strict adherence to mechanical physics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
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
                <span className="text-sm font-mono font-bold text-honeywell-red">
                  Step {String(idx + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-honeywell-navy mb-3 group-hover:text-honeywell-red transition-colors">
                {step.title}
              </h3>
              <p className="text-brand-steelGray font-body text-sm leading-relaxed">
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
              Technical Specifications
            </h2>
            <p className="text-lg text-brand-steelGray font-body mb-8">
              Our custom manufacturing capabilities extend far beyond standard
              catalog parameters. Every specification is engineered to your exact
              requirements.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                href="/request-quote/"
                variant="primary"
                size="md"
                className="font-bold"
              >
                DISCUSS YOUR SPECS <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                href="/products/hydraulic-cylinders/"
                variant="outline"
                size="md"
              >
                VIEW STANDARD RANGE
              </Button>
            </div>
          </div>
          <SpecTable
            title="Custom Capability Range"
            rows={TECHNICAL_SPECS}
          />
        </div>
      </Container>
    </Section>
  );
}

/* ─── 05 Product Variants (Reverse Engineering + Large Bore + Special Materials) ─── */
function ProductVariants() {
  const variants = [
    {
      icon: <RefreshCw className="w-7 h-7" />,
      title: 'Reverse Engineering Services',
      description:
        'We take existing imported German, Japanese, or American cylinders, completely dismantle them, measure internal tolerances, and manufacture identical, fully interchangeable replacement units. If the original manufacturer has gone out of business, we reverse-engineer the required actuator from your remaining broken parts.',
      highlights: [
        'Imported cylinder replacement',
        'Obsolete equipment support',
        'Damaged cylinder redesign with flaw correction',
      ],
    },
    {
      icon: <Cog className="w-7 h-7" />,
      title: 'Large Bore & Extreme Duty Cylinders',
      description:
        'We possess the heavy machining capabilities to hone massive barrels (400mm+ bores) and machine heavy-tonnage pistons. These massive actuators are utilized in the steel industry for heavy forging presses, and in infrastructure projects for massive bridge lifting or dam-gate actuation.',
      highlights: [
        '400mm+ bore capacity',
        'Heavy forging press cylinders',
        'Infrastructure & dam-gate actuators',
      ],
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: 'Special Material Cylinders',
      description:
        'Standard ST52 steel and hard-chrome plating will quickly degrade in severe caustic or saline environments. Our custom capabilities extend to specialized metallurgy for extreme operating conditions.',
      highlights: [
        'SS304 / SS316 Stainless Steel for pharmaceutical & food processing',
        'Marine-grade alloys with epoxy coating for offshore applications',
        'High-temperature alloys with Viton / Kalrez seals for foundries',
      ],
    },
  ];

  return (
    <Section bg="gray" id="product-variants">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            Custom Cylinder Capabilities
          </h2>
          <p className="text-lg text-brand-steelGray font-body">
            From reverse-engineering obsolete imports to manufacturing extreme
            large-bore actuators, our capabilities cover the full spectrum of
            bespoke hydraulic engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {variants.map((variant, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200 p-8 hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className="mb-6">
                <IconBox
                  icon={variant.icon}
                  variant="secondary"
                  size="lg"
                />
              </div>
              <h3 className="text-xl font-display font-bold text-honeywell-navy mb-3">
                {variant.title}
              </h3>
              <p className="text-brand-steelGray font-body text-sm leading-relaxed mb-6 flex-grow">
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
  const industries = [
    {
      icon: <Thermometer className="w-6 h-6" />,
      name: 'Steel Plants & Foundries',
      desc: 'Large bore pressing cylinders and extreme high-temperature actuators for ladle tilting.',
    },
    {
      icon: <Anchor className="w-6 h-6" />,
      name: 'Marine & Offshore',
      desc: 'Corrosion-resistant, heavy-duty lifting cylinders for winches, ship-cranes, and port material handling.',
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      name: 'Infrastructure Projects',
      desc: 'Massive bespoke cylinders for dam spillway radial gates and heavy civil engineering projects.',
    },
    {
      icon: <Settings className="w-6 h-6" />,
      name: 'Special Purpose Machinery',
      desc: 'Non-standard actuators with complex logic-valve blocks welded directly to the cylinder barrel for smart factory automation.',
    },
  ];

  return (
    <Section bg="gray" id="industries">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-brand-steelGray font-body">
            Our custom engineering division serves the most demanding sectors in
            the Indian economy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="flex gap-5 bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow duration-300"
            >
              <IconBox
                icon={ind.icon}
                variant="secondary"
                size="md"
                className="shrink-0"
              />
              <div>
                <h3 className="text-lg font-display font-bold text-honeywell-navy mb-2">
                  {ind.name}
                </h3>
                <p className="text-sm text-brand-steelGray font-body leading-relaxed">
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
          <h2 className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            Manufacturing & Quality Process
          </h2>
          <p className="text-lg text-brand-steelGray font-body">
            Every custom cylinder is delivered with a comprehensive Engineering
            Dossier, including 3D CAD files, material test certificates (MTC),
            seal compound specs, and hydrostatic pressure testing reports.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-brand-surfaceGray rounded-xl border border-slate-200 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Cog className="w-6 h-6 text-honeywell-red" />
              <h3 className="text-lg font-display font-bold text-honeywell-navy">
                Heavy Machining Centers
              </h3>
            </div>
            <p className="text-sm text-brand-steelGray font-body leading-relaxed">
              Equipped with massive CNC boring and honing machines capable of
              processing large-bore seamless steel tubes up to immense lengths.
            </p>
          </div>

          <div className="bg-brand-surfaceGray rounded-xl border border-slate-200 p-8">
            <div className="flex items-center gap-3 mb-4">
              <FlaskConical className="w-6 h-6 text-honeywell-red" />
              <h3 className="text-lg font-display font-bold text-honeywell-navy">
                Metallurgical Verification
              </h3>
            </div>
            <p className="text-sm text-brand-steelGray font-body leading-relaxed">
              We rigorously verify the chemical composition and yield strength
              of all custom-ordered alloys before machining begins.
            </p>
          </div>

          <div className="bg-brand-surfaceGray rounded-xl border border-slate-200 p-8">
            <div className="flex items-center gap-3 mb-4">
              <FileCheck className="w-6 h-6 text-honeywell-red" />
              <h3 className="text-lg font-display font-bold text-honeywell-navy">
                Extreme Pressure Validation
              </h3>
            </div>
            <p className="text-sm text-brand-steelGray font-body leading-relaxed">
              100% of our bespoke cylinders undergo rigorous hydrostatic and
              shock-load testing to verify the integrity of custom-welded
              trunnions and flanges.
            </p>
          </div>
        </div>

        {/* Mid-page CTA */}
        <div className="bg-honeywell-navy rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-1/2 h-full bg-honeywell-red opacity-5 -skew-x-12 translate-x-1/4"
            aria-hidden="true"
          />
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 relative z-10">
            Need to Reverse-Engineer a Damaged Imported Cylinder?
          </h3>
          <p className="text-brand-borderGray font-body max-w-2xl mx-auto mb-6 relative z-10">
            Our engineering team can dismantle, measure, and replicate any
            cylinder — even without documentation or part numbers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Button
              href="/request-quote/"
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
    <Section bg="gray" id="faqs">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-brand-steelGray font-body">
              Common questions about our custom hydraulic cylinder manufacturing
              capabilities.
            </p>
          </div>
          <FAQAccordion faqs={FAQS} injectSchema={false} />
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
          {/* Section label */}
          <div className="flex items-center gap-3 mb-6">
            <Badge variant="years">CASE STUDY</Badge>
            <span className="text-sm text-brand-steelGray font-body font-medium">
              Reverse Engineering — Heavy Industry
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-3">
            Project Spotlight: Reverse Engineering a 600-Ton Forging Press Cylinder
          </h2>
          <p className="text-brand-steelGray font-body mb-10">
            Client: Heavy Metal Forging Plant &mdash; GIDC, Rajkot
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            {/* Challenge */}
            <div className="bg-brand-surfaceGray p-8 border-b md:border-b-0 md:border-r border-slate-200">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-honeywell-red/10 flex items-center justify-center shrink-0">
                  <span className="text-honeywell-red font-bold text-sm">01</span>
                </div>
                <h3 className="text-lg font-display font-bold text-honeywell-navy">The Challenge</h3>
              </div>
              <p className="text-sm text-brand-steelGray font-body leading-relaxed">
                The client&apos;s primary 600-ton forging press — an imported German machine from the
                1990s — experienced a catastrophic cylinder failure. The OEM no longer existed, and
                the massive cylinder was completely undocumented. The plant was losing production
                revenue every day the press remained offline.
              </p>
            </div>

            {/* Engineering Process */}
            <div className="bg-white p-8 border-b md:border-b-0 md:border-r border-slate-200">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-honeywell-navy/10 flex items-center justify-center shrink-0">
                  <span className="text-honeywell-navy font-bold text-sm">02</span>
                </div>
                <h3 className="text-lg font-display font-bold text-honeywell-navy">The Engineering</h3>
              </div>
              <p className="text-sm text-brand-steelGray font-body leading-relaxed">
                Honeywell&apos;s team extracted the massive, broken cylinder. In our facility, we
                completely dismantled it, utilizing advanced metrology to reverse-engineer the exact
                bore dimensions, port locations, and mounting flanges. We generated a new 3D CAD
                model and machined a completely new Custom Large Bore Cylinder to exacting tolerances.
              </p>
            </div>

            {/* Result */}
            <div className="bg-honeywell-navy p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-sm">03</span>
                </div>
                <h3 className="text-lg font-display font-bold text-white">The Outcome</h3>
              </div>
              <p className="text-sm text-brand-borderGray font-body leading-relaxed mb-6">
                Manufactured, tested, and delivered within <strong className="text-white">12 days</strong>.
                The new actuator dropped perfectly into the old German press. We also upgraded the
                outdated seal design to modern polyurethane V-packing, extending the new
                cylinder&apos;s lifespan well beyond the original OEM specifications.
              </p>
              <Button
                href="/request-quote/"
                variant="primary"
                size="md"
                className="font-bold w-full text-center justify-center"
              >
                GET SIMILAR RESULTS <ArrowRight className="w-4 h-4 ml-2" />
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
      imageSrc: '/images/products/hydraulic-manifold-block-manufacturer.webp',
      href: '/products/manifold-blocks/',  // existing route
      ctaText: 'View Manifold Blocks',
    },
    {
      title: 'Hydraulic Systems',
      description:
        'Complete integrated hydraulic system solutions — from reservoir to custom cylinder — engineered and commissioned as a single turnkey unit.',
      category: 'Complete Systems',
      imageSrc: '/images/products/complete-hydraulic-system-gujarat.webp',
      href: '/products/hydraulic-systems/',  // existing route
      ctaText: 'View Complete Systems',
    },
  ];

  return (
    <Section bg="gray" id="related-products">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
              Integrate Your Custom Cylinder
            </h2>
            <p className="text-lg text-brand-steelGray font-body">
              Custom cylinders require sophisticated fluid generation and precision control.
              Combine your bespoke actuator with our power systems for a complete solution.
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
    <Section bg="white" id="engineering-advantage">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            The Engineering Advantage
          </h2>
          <p className="text-lg text-brand-steelGray font-body">
            We do not just sell parts. We are a complete hydraulic engineering firm. Leverage our
            full suite of technical services alongside your custom cylinder project.
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
                <p className="text-sm text-brand-steelGray font-body leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            href="/contact-us/"
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

/* ─── 12 Local Service Areas ─── */
function LocalServiceAreas() {
  // NOTE: Location detail pages (/locations/*) do not yet exist.
  // These cards are rendered as informational (non-clickable links) until location pages
  // are built in a future Phase. href points to /contact/ as a safe existing fallback.
  const locations = [
    {
      city: 'Ahmedabad',
      description:
        'Our headquarters. Immediate dispatch capability for custom and reverse-engineered cylinders to all Ahmedabad GIDC industrial zones.',
      industries: ['Steel & Metallurgy', 'Automotive', 'Pharmaceuticals'],
    },
    {
      city: 'Surat',
      description:
        'Rapid supply of bespoke hydraulic cylinders to Surat\'s textile machinery, diamond cutting equipment, and chemical plant sectors.',
      industries: ['Textile Machinery', 'Chemical Plants', 'Diamond Industry'],
    },
    {
      city: 'Rajkot',
      description:
        'Serving Rajkot\'s heavy engineering and forging clusters with large bore and reverse-engineered actuators for forging presses.',
      industries: ['Heavy Forging', 'Engineering Works', 'Castings'],
    },
    {
      city: 'Vadodara',
      description:
        'Supplying custom hydraulic solutions to Vadodara\'s petrochemical, fertilizer, and heavy fabrication industries.',
      industries: ['Petrochemicals', 'Fertilizers', 'Heavy Fabrication'],
    },
    {
      city: 'Bhavnagar',
      description:
        'Marine-grade and corrosion-resistant custom cylinders for Bhavnagar\'s ship recycling yards and offshore support vessels.',
      industries: ['Ship Recycling', 'Marine Engineering', 'Port Handling'],
    },
    {
      city: 'Jamnagar',
      description:
        'High-pressure bespoke cylinders for Jamnagar\'s refinery, brass parts, and heavy industrial manufacturing base.',
      industries: ['Refineries', 'Brass Industry', 'Heavy Industry'],
    },
    {
      city: 'Gandhinagar',
      description:
        'Custom actuators for special purpose machinery, government infrastructure projects, and electronics manufacturing in Gandhinagar.',
      industries: ['SPM', 'Infrastructure', 'Electronics Mfg'],
    },
    {
      city: 'Vapi',
      description:
        'Stainless steel and chemical-resistant cylinders for Vapi\'s GIDC chemical processing and pharmaceutical manufacturing companies.',
      industries: ['Chemical Processing', 'Pharmaceuticals', 'GIDC Industries'],
    },
  ];

  return (
    <Section bg="gray" id="local-service-areas">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            Custom Hydraulic Cylinder Manufacturer in Gujarat
          </h2>
          <p className="text-lg text-brand-steelGray font-body">
            As the premier custom hydraulic cylinder manufacturer in Gujarat, we provide rapid
            reverse-engineering and bespoke manufacturing services to heavy industries across the state.
          </p>
        </div>

        {/* 8-card grid — location detail pages to be created in future Phase */}
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
  // NOTE: /resources/* sub-routes do not yet exist.
  // Cards are rendered as informational. CTAs route to /contact/ or /request-quote/ (existing routes).
  const resources = [
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Submit CAD Drawings',
      description:
        'Securely upload your SolidWorks or AutoCAD blueprints for an immediate manufacturing consultation. Our engineers respond within one business day.',
      ctaText: 'Upload & Request Quote',
      ctaHref: '/request-quote/',  // existing route
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Reverse Engineering Guide',
      description:
        'Learn how to accurately measure and document your obsolete cylinders for faster replication. Covers dimensional capturing, port identification, and seal specification.',
      ctaText: 'Contact for Guide',
      ctaHref: '/contact-us/',  // existing route
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: 'Cylinder Force Calculator',
      description:
        'Determine the exact bore size required for your extreme-tonnage press applications. Our engineers use this data to specify the minimum safe barrel wall thickness.',
      ctaText: 'Request Calculation',
      ctaHref: '/contact-us/',  // existing route
    },
  ];

  return (
    <Section bg="white" id="resources">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            Resources & Engineering Guides
          </h2>
          <p className="text-lg text-brand-steelGray font-body">
            Equip your plant engineers with vital data on custom hydraulic design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, idx) => (
            <div
              key={idx}
              className="bg-brand-surfaceGray rounded-xl border border-slate-200 p-8 flex flex-col hover:shadow-md transition-shadow duration-300"
            >
              <IconBox
                icon={resource.icon}
                variant="secondary"
                size="lg"
                className="mb-6"
              />
              <h3 className="text-xl font-display font-bold text-honeywell-navy mb-3">
                {resource.title}
              </h3>
              <p className="text-sm text-brand-steelGray font-body leading-relaxed mb-6 flex-grow">
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
