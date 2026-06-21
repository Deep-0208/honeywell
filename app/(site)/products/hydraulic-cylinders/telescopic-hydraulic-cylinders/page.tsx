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
  Truck,
  ArrowUpToLine,
  Activity,
  HardHat,
  Trash2,
} from 'lucide-react';

/* ═══════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════ */

const PAGE_TITLE =
  'Telescopic Hydraulic Cylinder Manufacturer | Multi-Stage Tippers';
const PAGE_DESCRIPTION =
  'Leading telescopic hydraulic cylinder manufacturer in Gujarat. We engineer extreme-stroke, multi-stage cylinders for dump trucks, tipper bodies, and material handling.';
const PAGE_URL = '/products/hydraulic-cylinders/telescopic-hydraulic-cylinders/';
const PAGE_IMAGE = '/images/products/hydraulic-cylinders/telescopic-hydraulic-cylinders-manufacturer.webp';

export const metadata: Metadata = {
  ...buildMetadata({
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    keywords: [
      'Telescopic Hydraulic Cylinder Manufacturer Ahmedabad',
      'Multi Stage Hydraulic Cylinder Manufacturer',
      'Dump Truck Hydraulic Cylinder Supplier',
      'Telescopic Cylinder Manufacturer Gujarat',
      'Tipper Cylinder Manufacturer',
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
    question: 'Why does a telescopic cylinder get faster as it extends?',
    answer:
      'This is due to fluid dynamics. The hydraulic pump provides a constant flow of fluid (Liters Per Minute). As each smaller stage engages, it requires less fluid volume to fill. Therefore, the constant fluid flow fills the smaller volume faster, causing the extension speed to increase.',
  },
  {
    question: 'Can you build double-acting telescopic cylinders?',
    answer:
      'Yes. While single-acting (gravity return) is standard for dump trucks, we engineer double-acting telescopic cylinders for horizontal applications like refuse packer blades, where hydraulic pressure is required to both extend and retract the stages.',
  },
  {
    question: 'What causes a telescopic cylinder to bend or buckle?',
    answer:
      'Buckling is usually caused by extreme side-loading. This occurs if a dump truck attempts to tip its load while parked on uneven ground, or if the load gets stuck in the top of the dump bed. We engineer our cylinders with extended stage overlap to resist these bending forces, but operators must ensure safe tipping practices.',
  },
  {
    question: 'Do you manufacture both front-end and underbody tipper cylinders?',
    answer:
      'Yes. We manufacture long-stroke trunnion-mounted cylinders for front-end tipping, as well as highly compact, high-pressure cross-tube mounted cylinders designed specifically for tight underbody chassis spaces.',
  },
];

const TECHNICAL_SPECS = [
  { parameter: 'Number of Stages', value: '2-Stage to 6-Stage Configurations' },
  {
    parameter: 'Maximum Stroke Length',
    value: 'Up to 8,000+ mm (Custom long-stroke available)',
  },
  {
    parameter: 'Maximum Operating Pressure',
    value: 'Up to 250 Bar (3600 PSI)',
  },
  {
    parameter: 'Action Type',
    value: 'Single-Acting (Gravity Return), Double-Acting (Powered Return)',
  },
  {
    parameter: 'Mounting Options',
    value: 'Outer Trunnion (Front End), Cross-Tube (Underbody), Clevis',
  },
  {
    parameter: 'Stage Material',
    value:
      'ST52 / EN8 Seamless Honed Tube (OD and ID)',
  },
  {
    parameter: 'Surface Protection',
    value: 'Hard Chrome Plated (All Stages)',
  },
  {
    parameter: 'Sealing System',
    value: 'High-pressure V-packing, heavy-duty rod wipers, bronze-filled guide rings',
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
        name: 'Telescopic Hydraulic Cylinders',
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
            name: 'Number of Stages',
            value: '2-Stage to 6-Stage Configurations',
          },
          {
            '@type': 'PropertyValue',
            name: 'Maximum Stroke Length',
            value: 'Up to 8,000+ mm',
          },
          {
            '@type': 'PropertyValue',
            name: 'Maximum Operating Pressure',
            value: 'Up to 250 Bar (3600 PSI)',
          },
          {
            '@type': 'PropertyValue',
            name: 'Action Type',
            value: 'Single-Acting and Double-Acting',
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
            name: 'Telescopic Hydraulic Cylinders',
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

export default function TelescopicHydraulicCylindersPage() {
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

      {/* ─── 05 Product Variants (Telescopic vs Standard) ─── */}
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
        description="Standardize your commercial vehicles with highly reliable, maximum-stroke telescopic hydraulic cylinders. Partner with Honeywell Hydraulics to eliminate catastrophic tipping failures."
        primaryCtaText="REQUEST A TELESCOPIC QUOTE"
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
              Telescopic Cylinders
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="flex flex-col items-start z-10">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="custom">EXTREME STROKE IN COMPACT SPACES</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-bold text-honeywell-navy leading-[1.1] mb-6">
              Telescopic Hydraulic Cylinder Manufacturer
            </h1>

            <p className="text-lg text-brand-darkSlate font-body mb-8 max-w-xl leading-relaxed">
              Engineered for massive lifting heights from a minimal footprint. Honeywell Hydraulics is a premier custom telescopic hydraulic cylinder manufacturer in Gujarat, supplying highly robust, multi-stage cylinders exclusively for tipper bodies, dump trucks, and mobile lifting equipment.
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
                STROKE CALCULATION{' '}
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
                Multi-Stage Engineering
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
                100% Load Tested
              </Badge>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative w-full aspect-[4/3] lg:aspect-square bg-white rounded-xl border border-slate-200 shadow-sm p-4 overflow-hidden group">
            <div className="absolute inset-0 bg-brand-surfaceGray opacity-50 rounded-xl" />
            <Image
              src="/images/products/hydraulic-cylinders/telescopic-hydraulic-cylinders-manufacturer.webp"
              alt="Telescopic Hydraulic Cylinder Manufacturer in Ahmedabad - Multi-stage tipper cylinder by Honeywell Hydraulics"
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
                Stages
              </span>
              <span className="block text-sm font-mono text-honeywell-navy font-semibold">
                2 to 6 Stages
              </span>
            </div>
            <div className="px-6 flex-1 text-center">
              <span className="block text-xs font-bold text-brand-steelGray uppercase tracking-wider mb-1">
                Max Stroke
              </span>
              <span className="block text-sm font-mono text-honeywell-navy font-semibold">
                8,000+ mm
              </span>
            </div>
            <div className="px-6 flex-1 text-center">
              <span className="block text-xs font-bold text-brand-steelGray uppercase tracking-wider mb-1">
                Pressure
              </span>
              <span className="block text-sm font-mono text-honeywell-navy font-semibold">
                Up to 250 Bar
              </span>
            </div>
            <div className="px-6 flex-1 text-center">
              <span className="block text-xs font-bold text-brand-steelGray uppercase tracking-wider mb-1">
                Primary Use
              </span>
              <span className="block text-sm font-mono text-honeywell-navy font-semibold">
                Tippers & Trailers
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
            What Are Telescopic Hydraulic Cylinders?
          </h2>
          <div className="space-y-5 text-brand-darkSlate font-body text-lg leading-relaxed">
            <p>
              When a machine requires a massive lifting stroke but has virtually no physical space to house a fully retracted cylinder, engineers turn to <strong className="text-honeywell-navy">Telescopic Hydraulic Cylinders</strong>.
            </p>
            <p>
              Unlike standard Tie Rod Cylinders or Welded Cylinders which consist of a single rod and barrel, a telescopic cylinder features a series of nested, tubular steel stages (often referred to as sleeves or sleeves-and-plunger). These nested tubes slide outward from each other, operating much like a collapsible pirate&apos;s telescope.
            </p>
            <p>
              As a leading <strong className="text-honeywell-navy">multi-stage hydraulic cylinder supplier</strong>, we design these complex actuators specifically for mobile equipment. A telescopic cylinder can provide an extended stroke that is significantly longer than its collapsed length—sometimes extending up to six times its closed dimension. This makes them the undisputed standard for dump trucks, refuse collection vehicles, and heavy-duty tipper bodies where space under the chassis is severely limited.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ─── 03 Key Features (How They Work & Advantages) ─── */
function KeyFeatures() {
  const steps = [
    {
      icon: <ArrowUpToLine className="w-6 h-6" />,
      title: 'Sequential Extension',
      desc: 'Fluid pressure first acts on the largest diameter sleeve. Once fully extended, pressure forces the next smaller sleeve to extend. This continues until the final plunger is fully extended.',
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: 'Gravity Retraction',
      desc: 'In single-acting tipper applications, the cylinder relies on gravity. Opening the directional valve allows the immense weight of the dump bed to force fluid out and retract the sleeves.',
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'Stroke Multiplication',
      desc: 'Achieves massive extended heights. A 5-stage cylinder with a closed length of just 1 meter can extend to provide a massive 4.5-meter lifting stroke.',
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Extreme Space Saving',
      desc: 'A telescopic cylinder collapses into a fraction of its total stroke length (20% to 40%), allowing it to fit vertically under short truck chassis.',
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: 'Optimal Lifting Angles',
      desc: 'Placing a compact cylinder directly at the front of a dump body (trunnion mount) allows the tipper to achieve maximum mechanical leverage and tipping stability.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Specialized Load Handling',
      desc: 'The sequential extension exerts maximum force at the beginning of the stroke (when the dump bed is heaviest) and faster speed at the end of the stroke.',
    },
  ];

  return (
    <Section bg="gray" id="how-they-work">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            How Multi-Stage Cylinders Work
          </h2>
          <p className="text-lg text-brand-steelGray font-body">
            The internal fluid dynamics of a telescopic cylinder are vastly more complex than a standard single-rod actuator, offering unique engineering advantages.
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
              Engineered to support immense tipping loads with precise stage sequencing and robust column strength.
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
                CALCULATE STROKE
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

/* ─── 05 Product Variants (Telescopic vs Standard) ─── */
function ProductVariants() {
  return (
    <Section bg="gray" id="telescopic-vs-standard">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            Telescopic vs. Standard Cylinders
          </h2>
          <p className="text-lg text-brand-steelGray font-body">
            Choosing between a multi-stage cylinder and a standard actuator dictates the entire chassis design of your mobile equipment.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-surfaceGray border-b border-slate-200">
                  <th className="p-4 font-display font-bold text-honeywell-navy">Engineering Feature</th>
                  <th className="p-4 font-display font-bold text-honeywell-navy border-l border-slate-200">Telescopic Hydraulic Cylinders</th>
                  <th className="p-4 font-display font-bold text-honeywell-navy border-l border-slate-200">Standard Cylinders (Welded/Tie Rod)</th>
                </tr>
              </thead>
              <tbody className="text-sm font-body text-brand-darkSlate">
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-semibold text-honeywell-navy">Piston Rod Design</td>
                  <td className="p-4 border-l border-slate-200">Multiple nested tubular sleeves</td>
                  <td className="p-4 border-l border-slate-200">Single solid or hollow rod</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-semibold text-honeywell-navy">Collapsed Length</td>
                  <td className="p-4 border-l border-slate-200 font-semibold text-[#25D366]">Highly compact (20% to 40% of extended stroke)</td>
                  <td className="p-4 border-l border-slate-200">Bulky (Always longer than the extended stroke)</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-semibold text-honeywell-navy">Force Profile</td>
                  <td className="p-4 border-l border-slate-200">Force decreases as each smaller stage extends</td>
                  <td className="p-4 border-l border-slate-200">Constant force throughout the entire stroke</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-semibold text-honeywell-navy">Speed Profile</td>
                  <td className="p-4 border-l border-slate-200">Speed increases as each smaller stage extends</td>
                  <td className="p-4 border-l border-slate-200">Constant speed throughout the entire stroke</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-semibold text-honeywell-navy">Primary Action</td>
                  <td className="p-4 border-l border-slate-200">Usually Single-Acting (Gravity return)</td>
                  <td className="p-4 border-l border-slate-200">Usually Double-Acting (Powered return)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-honeywell-navy">Primary Risk</td>
                  <td className="p-4 border-l border-slate-200">Susceptible to side-loading and column buckling</td>
                  <td className="p-4 border-l border-slate-200">Highly rigid against side-loads</td>
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
      icon: <Truck className="w-6 h-6" />,
      name: 'Transportation & Logistics',
      desc: 'Supplying high-volume, multi-stage cylinders for heavy commercial tipper trucks and bulk transport trailers.',
    },
    {
      icon: <HardHat className="w-6 h-6" />,
      name: 'Construction',
      desc: 'Delivering robust lifting cylinders for massive earth-moving dump trucks and off-highway haulers operating in harsh environments.',
    },
    {
      icon: <Trash2 className="w-6 h-6" />,
      name: 'Waste Management',
      desc: 'Engineering compact, double-acting telescopic cylinders for refuse collection vehicles and garbage packer blades.',
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      name: 'Municipal Equipment',
      desc: 'Manufacturing highly reliable actuators for municipal road sweepers, snowplows, and specialized utility trucks.',
    },
  ];

  return (
    <Section bg="gray" id="industries">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            Industries Served
          </h2>
          <p className="text-lg text-brand-steelGray font-body">
            Our custom telescopic cylinders are the backbone of the heavy transportation and mobile infrastructure sectors.
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
            Every multi-stage cylinder is delivered with complete stroke-multiplication reports and certified column-load limits, ensuring the actuator meets all safety factors required for heavy mobile equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-brand-surfaceGray rounded-xl border border-slate-200 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Cog className="w-6 h-6 text-honeywell-red" />
              <h3 className="text-lg font-display font-bold text-honeywell-navy">
                Precision Stage Honing
              </h3>
            </div>
            <p className="text-sm text-brand-steelGray font-body leading-relaxed">
              Every tubular stage is CNC-machined, skived, and roller-burnished internally and externally to ensure absolute concentricity. This prevents the stages from binding or galling.
            </p>
          </div>

          <div className="bg-brand-surfaceGray rounded-xl border border-slate-200 p-8">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-6 h-6 text-honeywell-red" />
              <h3 className="text-lg font-display font-bold text-honeywell-navy">
                Hard Chrome Plating
              </h3>
            </div>
            <p className="text-sm text-brand-steelGray font-body leading-relaxed">
              Because the exterior of every stage acts as a rod, all stages are heavily hard-chrome plated to resist scoring and environmental corrosion from road salt and mud.
            </p>
          </div>

          <div className="bg-brand-surfaceGray rounded-xl border border-slate-200 p-8">
            <div className="flex items-center gap-3 mb-4">
              <FileCheck className="w-6 h-6 text-honeywell-red" />
              <h3 className="text-lg font-display font-bold text-honeywell-navy">
                Sequential Validation
              </h3>
            </div>
            <p className="text-sm text-brand-steelGray font-body leading-relaxed">
              100% of our telescopic cylinders undergo rigorous vertical hydrostatic testing to verify smooth stage sequencing and test the integrity of the mechanical stop rings.
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
          <p className="text-brand-borderGray font-body max-w-2xl mx-auto mb-6 relative z-10">
            Our heavy-duty telescopic cylinders are backed by a strict Defect Warranty. Should your mobile equipment experience seal failure due to harsh environmental debris, our Cylinder Repair division can completely rebuild the unit.
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
              Earth-Moving Equipment
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-3">
            Project Spotlight: Custom 5-Stage Mining Tipper Cylinder
          </h2>
          <p className="text-brand-steelGray font-body mb-10">
            Client: Heavy Mining Tipper OEM &mdash; Metoda GIDC, Rajkot
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <div className="bg-brand-surfaceGray p-8 border-b md:border-b-0 md:border-r border-slate-200">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-honeywell-red/10 flex items-center justify-center shrink-0">
                  <span className="text-honeywell-red font-bold text-sm">01</span>
                </div>
                <h3 className="text-lg font-display font-bold text-honeywell-navy">The Challenge</h3>
              </div>
              <p className="text-sm text-brand-steelGray font-body leading-relaxed">
                The OEM was designing a massive new dump truck specifically for heavy iron-ore mining. Standard 4-stage cylinders could not provide the required tipping angle without raising the truck&apos;s center of gravity dangerously high during transit.
              </p>
            </div>

            <div className="bg-white p-8 border-b md:border-b-0 md:border-r border-slate-200">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-honeywell-navy/10 flex items-center justify-center shrink-0">
                  <span className="text-honeywell-navy font-bold text-sm">02</span>
                </div>
                <h3 className="text-lg font-display font-bold text-honeywell-navy">The Solution</h3>
              </div>
              <p className="text-sm text-brand-steelGray font-body leading-relaxed">
                We engineered a custom 5-Stage Telescopic Cylinder. By adding an extra stage, we reduced the collapsed length by 15%, allowing the OEM to lower the dump bed. We also integrated heavy-duty metallic scrapers onto every stage to clear abrasive ore dust.
              </p>
            </div>

            <div className="bg-honeywell-navy p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-sm">03</span>
                </div>
                <h3 className="text-lg font-display font-bold text-white">The Outcome</h3>
              </div>
              <p className="text-sm text-brand-borderGray font-body leading-relaxed mb-6">
                The truck achieved a perfect 50-degree tipping angle from an ultra-low chassis profile. The specialized wiper seals prevented dust ingress, extending the cylinder&apos;s operational lifespan in the mining environment by over <strong className="text-white">200%</strong>.
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
      title: 'Welded Hydraulic Cylinders',
      description:
        'Explore our master category of standard cylinders, including our extreme-pressure welded variants for heavy construction.',
      category: 'Cylinders',
      imageSrc: '/images/products/welded-hydraulic-cylinder-manufacturer.webp',
      ctaText: 'Coming Soon',
    },
    {
      title: 'Hydraulic Power Packs',
      description:
        'Compact DC power units specifically designed for mounting on commercial vehicles and tipper trucks.',
      category: 'Power Generation',
      imageSrc: '/images/products/hydraulic-power-packs/hydraulic-power-pack-manufacturer.webp',
      href: '/products/hydraulic-power-packs/',
      ctaText: 'View Power Packs',
    },
    {
      title: 'Manifold Blocks',
      description:
        'Specialized fluid logic blocks designed to safely sequence the extension and gravity-retraction phases.',
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
              Integrate Your Telescopic Cylinder
            </h2>
            <p className="text-lg text-brand-steelGray font-body">
              Telescopic cylinders power mobile equipment. Control them with our robust mobile fluid power systems.
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
        'High-volume, repeatable CNC production of custom telescopic cylinders specifically for dump truck and trailer manufacturers.',
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Hydraulic Cylinder Repair',
      description:
        'Telescopic repairs require specialized vertical teardown equipment. Send damaged units to our facility for complete stage re-chroming and re-sealing.',
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: 'Hydraulic Maintenance Services',
      description:
        'Preventative maintenance programs to ensure your tipper fleets remain operational during peak construction seasons.',
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: 'Custom Engineering',
      description:
        'Our design team analyzes critical safety and physics factors before approving a telescopic build to prevent catastrophic column buckling.',
    },
  ];

  return (
    <Section bg="white" id="engineering-advantage">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            The Mobile OEM Advantage
          </h2>
          <p className="text-lg text-brand-steelGray font-body">
            Purchasing a telescopic cylinder is an investment in your vehicle&apos;s safety. Leverage our heavy engineering services.
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
      </Container>
    </Section>
  );
}

/* ─── 12 Local Service Areas ─── */
function LocalServiceAreas() {
  const locations = [
    {
      city: 'Ahmedabad',
      description: 'Headquarters for heavy tipper cylinder manufacturing.',
      industries: ['OEM Manufacturing', 'Logistics'],
    },
    {
      city: 'Surat',
      description: 'Multi-stage cylinders for municipal and waste management.',
      industries: ['Municipal', 'Waste Handling'],
    },
    {
      city: 'Rajkot',
      description: 'Serving machine builders and forging operations.',
      industries: ['Machine Tools', 'Earth Moving'],
    },
    {
      city: 'Vadodara',
      description: 'Standardized actuation for petrochemical transport.',
      industries: ['Petrochemicals', 'Engineering'],
    },
    {
      city: 'Gandhinagar',
      description: 'Providing cylinders for special purpose transport vehicles.',
      industries: ['SPM', 'Logistics'],
    },
    {
      city: 'Jamnagar',
      description: 'Refinery infrastructure and bulk transport solutions.',
      industries: ['Transport', 'Refineries'],
    },
    {
      city: 'Bhavnagar',
      description: 'Marine equipment automation and handling.',
      industries: ['Marine Engineering', 'Shipyards'],
    },
    {
      city: 'Vapi',
      description: 'Chemical resistant transportation cylinders.',
      industries: ['Chemical Plants', 'Pharmaceuticals'],
    },
  ];

  return (
    <Section bg="gray" id="local-service-areas">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            Telescopic Cylinder Manufacturer in Gujarat
          </h2>
          <p className="text-lg text-brand-steelGray font-body">
            We provide direct engineering support and heavy-freight delivery to commercial vehicle OEMs across the state.
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
        'Access STEP and IGES files of our front-end and underbody telescopic cylinders to integrate into your truck chassis blueprints.',
      ctaText: 'Request CAD Files',
      ctaHref: '/contact-us/',
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Telescopic Maintenance Guide',
      description:
        'Learn the correct procedures for bleeding air from a multi-stage cylinder to prevent jerky extension.',
      ctaText: 'Contact for Guide',
      ctaHref: '/contact-us/',
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: 'Tipping Force Calculators',
      description:
        'Instantly determine the required initial stage bore size based on your truck\'s payload and the angle of the cylinder mount.',
      ctaText: 'Request Calculation',
      ctaHref: '/contact-us/',
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
            Equip your vehicle design and fleet maintenance teams with vital multi-stage technical data.
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

/* ─── 14 FAQ Section ─── */
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
              Common questions about our telescopic hydraulic cylinder capabilities.
            </p>
          </div>
          <FAQAccordion faqs={FAQS} injectSchema={false} />
        </div>
      </Container>
    </Section>
  );
}
