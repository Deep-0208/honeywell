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
  ShieldAlert,
  Minimize2,
  CloudRain,
  Settings,
  Flame,
  Hammer,
  HardHat,
  Anchor,
  Box,
  Wrench,
  Cog,
  FileCheck,
  Zap,
} from 'lucide-react';

/* ═══════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════ */

const PAGE_TITLE =
  'Welded Hydraulic Cylinder Manufacturer in Gujarat | High Pressure Actuators';
const PAGE_DESCRIPTION =
  'Leading welded hydraulic cylinder manufacturer in India. We supply heavy-duty, high-pressure welded cylinders for forging presses, construction, and marine environments.';
const PAGE_URL = '/products/hydraulic-cylinders/welded-hydraulic-cylinders/';
const PAGE_IMAGE = '/images/products/welded-hydraulic-cylinder-manufacturer.webp';

export const metadata: Metadata = {
  ...buildMetadata({
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    keywords: [
      'Welded Hydraulic Cylinder Manufacturer in Ahmedabad',
      'Welded Hydraulic Cylinder',
      'Heavy Duty Welded Cylinder',
      'Industrial Welded Hydraulic Cylinder',
      'Hydraulic Cylinder Manufacturer Gujarat',
      'Welded Cylinder Supplier India',
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
    question: 'Can a welded cylinder be repaired if the seals fail?',
    answer:
      'Yes, but it requires machining. The welded cylinder must be placed on a lathe to cut the weld, allowing access to the internal seals. After replacing the seals, the end cap must be re-welded and hydrostatically tested. Our Hydraulic Cylinder Repair division handles this completely in-house.',
  },
  {
    question: 'Why are welded cylinders better for outdoor construction equipment?',
    answer:
      'Tie rod cylinders have external threads and nuts that catch dirt, mud, and water, leading to rapid corrosion. Welded cylinders have a smooth, sleek exterior profile that is inherently weatherproof and easier to protect with marine-grade paints.',
  },
  {
    question: 'Can you customize the mounting options on a welded cylinder?',
    answer:
      'Absolutely. Because there are no external tie rods obstructing the barrel, we can weld custom trunnions, cross-tubes, or heavy flanges directly to the cylinder barrel at any orientation required by your machine design.',
  },
  {
    question: 'Do you manufacture high-pressure cylinders for heavy forging presses?',
    answer:
      'Yes. Forging and deep drawing presses are our primary applications for welded cylinders. We engineer these actuators using ultra-thick ST52 seamless tubes designed to withstand constant, brutal 350+ Bar pressures.',
  },
];

const TECHNICAL_SPECS = [
  { parameter: 'Bore Sizes', value: '40mm to 400+ mm (Custom large-bore available)' },
  { parameter: 'Maximum Operating Pressure', value: 'Up to 350+ Bar (5000+ PSI)' },
  { parameter: 'Mounting Options', value: 'Cross-Tube, Clevis, Trunnion, Flange (Welded directly to barrel)' },
  { parameter: 'Barrel Material', value: 'ST52 / EN8 Seamless Honed Tube' },
  { parameter: 'Piston Rod Options', value: 'Hard Chrome Plated, Stainless Steel, Induction Hardened' },
  { parameter: 'Sealing System', value: 'Heavy-duty 5-piece piston seals, double-lip rod wipers, PTFE wear bands' },
  { parameter: 'Exterior Protection', value: 'Standard Polyurethane, Marine-Grade Epoxy, Zinc Plating' },
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
        name: 'Welded Hydraulic Cylinders',
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
            value: '40mm to 400+ mm',
          },
          {
            '@type': 'PropertyValue',
            name: 'Operating Pressure',
            value: 'Up to 350+ Bar / 5000+ PSI',
          },
          {
            '@type': 'PropertyValue',
            name: 'Barrel Materials',
            value: 'ST52 / EN8',
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
            name: 'Welded Hydraulic Cylinders',
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

export default function WeldedHydraulicCylindersPage() {
  const schema = buildPageSchema();

  return (
    <>
      <JsonLd data={schema} />

      {/* ─── 01 Hero Section ─── */}
      <HeroSection />

      {/* ─── 02 Product Overview ─── */}
      <ProductOverview />

      {/* ─── 03 Welded Cylinder Construction ─── */}
      <ConstructionExplained />

      {/* ─── 04 Advantages ─── */}
      <Advantages />

      {/* ─── 05 Welded vs Tie Rod Comparison ─── */}
      <ComparisonSection />

      {/* ─── 06 Technical Specifications ─── */}
      <TechnicalSpecifications />

      {/* ─── 07 Industries Served ─── */}
      <IndustriesSection />

      {/* ─── 08 Engineering Considerations ─── */}
      <EngineeringConsiderations />

      {/* ─── 09 Manufacturing Process ─── */}
      <ManufacturingProcess />

      {/* ─── 10 Project Spotlight ─── */}
      <ProjectSpotlight />

      {/* ─── 11 Related Products ─── */}
      <RelatedProducts />

      {/* ─── 12 Related Services ─── */}
      <RelatedServices />

      {/* ─── 13 Local Service Areas ─── */}
      <LocalServiceAreas />

      {/* ─── 14 Resources ─── */}
      <ResourcesSection />

      {/* ─── 15 FAQs ─── */}
      <FAQSection />

      {/* ─── 16 CTA Section ─── */}
      <CTA
        title="Ready to Discuss Your Heavy-Duty Actuator Needs?"
        description="Do not risk catastrophic machine failure with under-engineered actuators. Standardize your heavy equipment with extreme-duty, high-pressure welded hydraulic cylinders."
        primaryCtaText="REQUEST A QUOTE"
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
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-brand-surfaceGray skew-x-[-12deg] translate-x-20 -z-10 hidden lg:block"
        aria-hidden="true"
      />

      <Container>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center text-sm text-brand-steelGray font-body gap-1.5">
            <li>
              <Link href="/" className="hover:text-honeywell-red transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/products/" className="hover:text-honeywell-red transition-colors">
                Products
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/products/hydraulic-cylinders/" className="hover:text-honeywell-red transition-colors">
                Hydraulic Cylinders
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-honeywell-navy font-semibold" aria-current="page">
              Welded Hydraulic Cylinders
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="flex flex-col items-start z-10">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="custom">UNYIELDING STRUCTURAL INTEGRITY</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-bold text-honeywell-navy leading-[1.1] mb-6">
              Welded Hydraulic Cylinder Manufacturer
            </h1>

            <p className="text-lg text-brand-darkSlate font-body mb-8 max-w-xl leading-relaxed">
              Engineered for extreme pressure and brutal operating environments. Honeywell Hydraulics is a premier custom welded hydraulic cylinder manufacturer in Gujarat, supplying heavy-duty actuators designed specifically for massive shock loads. Unlike tie rod designs, our welded cylinders provide a highly compact footprint capable of sustaining 350+ Bar pressures in the harshest outdoor construction, heavy forging, and marine applications across India.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <Button
                href="/resources/downloads/"
                size="lg"
                variant="primary"
                className="w-full sm:w-auto font-bold tracking-wide"
              >
                DOWNLOAD ENGINEERING SPECS <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="/contact-us/"
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white hover:bg-brand-surfaceGray"
              >
                HIGH-PRESSURE CONSULTATION <ArrowRight className="w-5 h-5 ml-2" />
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
              <Badge variant="madeInIndia" className="bg-white border border-orange-200">
                Made in India
              </Badge>
              <Badge variant="default" className="bg-white border border-gray-200">
                1.5x Pressure Tested
              </Badge>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative w-full aspect-[4/3] lg:aspect-square bg-white rounded-xl border border-slate-200 shadow-sm p-4 overflow-hidden group">
            <div className="absolute inset-0 bg-brand-surfaceGray opacity-50 rounded-xl" />
            <Image
              src="/images/products/welded-hydraulic-cylinder-manufacturer.webp"
              alt="Welded Hydraulic Cylinder Manufacturer in Ahmedabad - Heavy-duty welded cylinder by Honeywell Hydraulics"
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
                Max Pressure
              </span>
              <span className="block text-sm font-mono text-honeywell-navy font-semibold">
                350+ Bar
              </span>
            </div>
            <div className="px-6 flex-1 text-center">
              <span className="block text-xs font-bold text-brand-steelGray uppercase tracking-wider mb-1">
                Bore Size
              </span>
              <span className="block text-sm font-mono text-honeywell-navy font-semibold">
                Up to 400+ mm
              </span>
            </div>
            <div className="px-6 flex-1 text-center">
              <span className="block text-xs font-bold text-brand-steelGray uppercase tracking-wider mb-1">
                Mounting
              </span>
              <span className="block text-sm font-mono text-honeywell-navy font-semibold">
                Barrel-Welded Custom
              </span>
            </div>
            <div className="px-6 flex-1 text-center">
              <span className="block text-xs font-bold text-brand-steelGray uppercase tracking-wider mb-1">
                Applications
              </span>
              <span className="block text-sm font-mono text-honeywell-navy font-semibold">
                Heavy Shock Loads
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
            What Are Welded Hydraulic Cylinders?
          </h2>
          <div className="space-y-5 text-brand-darkSlate font-body text-lg leading-relaxed">
            <p>
              When standard industrial cylinders fail under extreme shock loads, machine builders turn to{' '}
              <strong className="text-honeywell-navy">Welded Hydraulic Cylinders</strong>.
            </p>
            <p>
              Unlike{' '}
              <Link
                href="/products/hydraulic-cylinders/tie-rod-hydraulic-cylinders/"
                className="text-honeywell-red font-semibold hover:underline"
              >
                Tie Rod Hydraulic Cylinders
              </Link>
              , which rely on external threaded rods to bolt the assembly together, a welded cylinder is permanently fused into a single structural unit. The rear end cap and the front gland housing are precision-welded directly to the steel barrel.
            </p>
            <p>
              As a leading <strong>heavy-duty welded cylinder supplier</strong>, we manufacture these actuators for environments where failure is not an option. Because the external tie rods are completely eliminated, a welded cylinder can fit into incredibly tight spaces on construction equipment and automated machinery. More importantly, the welded construction allows the cylinder barrel to withstand immense internal pressure spikes without the risk of tie-rod stretching or catastrophic seal blowout.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ─── 03 Welded Cylinder Construction ─── */
function ConstructionExplained() {
  const components = [
    {
      icon: <Box className="w-6 h-6" />,
      title: 'A. The Welded Barrel',
      desc: 'We utilize heavy-walled ST52 seamless steel tubing. The internal surface is skived and roller-burnished to an Ra 0.2 µm finish. The barrel wall thickness is calculated mathematically to resist bulging or deformation under extreme high-pressure transients.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'B. The End Caps (Base and Head)',
      desc: 'The rear base cap is permanently welded to the barrel using advanced rotary friction or sub-arc welding techniques, creating a solid, leak-proof containment vessel. The front head cap (gland) is either welded or threaded securely into the barrel to house the rod seals.',
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'C. Mounting Interfaces',
      desc: 'Because there are no external tie rods obstructing the barrel, welded cylinders allow for incredibly versatile, heavy-duty mounting options. Trunnions, cross-tubes, and clevis mounts are welded directly to the barrel itself, creating a unified structure capable of absorbing massive shear forces.',
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: 'D. The Rod Assembly',
      desc: 'The hard-chrome plated piston rod transmits the mechanical force to the heavy load. For severe environments like marine engineering or mining, we upgrade the rod material to hardened stainless steel with specialized anti-corrosive epoxy coatings.',
    },
    {
      icon: <ShieldAlert className="w-6 h-6" />,
      title: 'E. The Sealing System',
      desc: 'Welded cylinders must survive extreme shock loads. We utilize heavy-duty, 5-piece piston seals, bronze-filled PTFE wear rings, and double-lip rod wipers designed to prevent dust, mud, and metallic rust from contaminating the high-pressure fluid.',
    },
  ];

  return (
    <Section bg="gray" id="construction">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            Welded Cylinder Construction Explained
          </h2>
          <p className="text-lg text-brand-steelGray font-body">
            The reliability of a welded cylinder relies entirely on the metallurgical integrity of its fused components.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {components.map((comp, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200 p-8 hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="flex items-center gap-4 mb-5">
                <IconBox icon={comp.icon} variant="primary" size="md" />
              </div>
              <h3 className="text-xl font-display font-bold text-honeywell-navy mb-3 group-hover:text-honeywell-red transition-colors">
                {comp.title}
              </h3>
              <p className="text-brand-steelGray font-body text-sm leading-relaxed">
                {comp.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── 04 Advantages ─── */
function Advantages() {
  const advantages = [
    {
      icon: <ShieldAlert className="w-7 h-7" />,
      title: 'Extreme Pressure Tolerance',
      description: 'A properly welded cylinder can safely operate at constant pressures of 350 Bar (5000+ PSI) and survive massive instantaneous pressure spikes that would stretch and destroy a tie-rod cylinder.',
    },
    {
      icon: <Minimize2 className="w-7 h-7" />,
      title: 'Compact Footprint',
      description: 'Eliminating the four bulky external tie rods creates a sleek, narrow profile. This is crucial for integrating actuators into tight machine frames, tractor chassis, and boom arms.',
    },
    {
      icon: <CloudRain className="w-7 h-7" />,
      title: 'Harsh Environment Survival',
      description: 'Without external rods and nuts to catch dirt, mud, or corrosive salt spray, a welded cylinder is inherently more weather-resistant and easier to protect in outdoor environments.',
    },
    {
      icon: <Settings className="w-7 h-7" />,
      title: 'Absolute Customizability',
      description: 'Welded construction allows for absolute freedom in port location and mounting configurations. Ports can be welded directly onto the barrel at any angle required by the machine design.',
    },
  ];

  return (
    <Section bg="white" id="advantages">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            Advantages of Welded Cylinders
          </h2>
          <p className="text-lg text-brand-steelGray font-body">
            Why do heavy equipment OEMs and forging plant managers specifically demand welded construction over standard bolted cylinders?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((adv, idx) => (
            <div
              key={idx}
              className="bg-brand-surfaceGray rounded-xl border border-slate-200 p-8 hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className="mb-6">
                <IconBox icon={adv.icon} variant="secondary" size="lg" />
              </div>
              <h3 className="text-xl font-display font-bold text-honeywell-navy mb-3">
                {adv.title}
              </h3>
              <p className="text-brand-steelGray font-body text-sm leading-relaxed flex-grow">
                {adv.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── 05 Welded vs Tie Rod Comparison ─── */
function ComparisonSection() {
  return (
    <Section bg="gray" id="comparison">
      <Container>
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            Welded vs. Tie Rod Cylinders
          </h2>
          <p className="text-lg text-brand-steelGray font-body">
            Choosing the correct cylinder construction dictates the lifespan of your machinery.
          </p>
        </div>

        <div className="max-w-5xl mx-auto overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-sm">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-slate-200 bg-honeywell-navy text-white">
                <th className="px-6 py-4 font-display font-bold text-lg w-1/4">Engineering Feature</th>
                <th className="px-6 py-4 font-display font-bold text-lg w-[37.5%] border-l border-white/20">Welded Hydraulic Cylinders</th>
                <th className="px-6 py-4 font-display font-bold text-lg w-[37.5%] border-l border-white/20">
                  <Link href="/products/hydraulic-cylinders/tie-rod-hydraulic-cylinders/" className="hover:text-red-200 transition-colors underline decoration-white/30 underline-offset-4">
                    Tie Rod Hydraulic Cylinders
                  </Link>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="hover:bg-brand-surfaceGray/50">
                <td className="px-6 py-4 font-semibold text-brand-darkSlate">Construction Method</td>
                <td className="px-6 py-4 text-brand-darkSlate border-l border-slate-200">End caps and mounts permanently welded to barrel</td>
                <td className="px-6 py-4 text-brand-darkSlate border-l border-slate-200">External threaded rods clamp square caps to barrel</td>
              </tr>
              <tr className="hover:bg-brand-surfaceGray/50 bg-brand-surfaceGray/30">
                <td className="px-6 py-4 font-semibold text-brand-darkSlate">Maximum Pressure</td>
                <td className="px-6 py-4 text-honeywell-red font-bold border-l border-slate-200">Extreme (Up to 350+ Bar / 5000+ PSI)</td>
                <td className="px-6 py-4 text-brand-darkSlate border-l border-slate-200">Low to Medium (Up to 210 Bar / 3000 PSI)</td>
              </tr>
              <tr className="hover:bg-brand-surfaceGray/50">
                <td className="px-6 py-4 font-semibold text-brand-darkSlate">Shock Load Resistance</td>
                <td className="px-6 py-4 text-honeywell-navy font-semibold border-l border-slate-200">Excellent. Fused structure absorbs heavy vibration</td>
                <td className="px-6 py-4 text-brand-darkSlate border-l border-slate-200">Poor. Shock loads can stretch tie rods, causing leaks</td>
              </tr>
              <tr className="hover:bg-brand-surfaceGray/50 bg-brand-surfaceGray/30">
                <td className="px-6 py-4 font-semibold text-brand-darkSlate">Physical Profile</td>
                <td className="px-6 py-4 text-brand-darkSlate border-l border-slate-200">Sleek, highly compact footprint</td>
                <td className="px-6 py-4 text-brand-darkSlate border-l border-slate-200">Bulky due to external rods and square caps</td>
              </tr>
              <tr className="hover:bg-brand-surfaceGray/50">
                <td className="px-6 py-4 font-semibold text-brand-darkSlate">Environmental Threat</td>
                <td className="px-6 py-4 text-brand-darkSlate border-l border-slate-200">Survives mud, dust, weather, and marine salt</td>
                <td className="px-6 py-4 text-brand-darkSlate border-l border-slate-200">Vulnerable to dirt buildup on external threads</td>
              </tr>
              <tr className="hover:bg-brand-surfaceGray/50 bg-brand-surfaceGray/30">
                <td className="px-6 py-4 font-semibold text-brand-darkSlate">Serviceability</td>
                <td className="px-6 py-4 text-brand-darkSlate border-l border-slate-200">Low. Requires specialized tools or machining to rebuild</td>
                <td className="px-6 py-4 text-honeywell-navy font-semibold border-l border-slate-200">High. Can be disassembled with standard wrenches</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="max-w-4xl mx-auto mt-8 bg-brand-lightSurface p-6 rounded-lg border-l-4 border-honeywell-navy">
          <p className="text-brand-darkSlate font-body italic">
            *If you are building an automated indoor packaging line that requires rapid maintenance, specify a Tie Rod Cylinder. If you are building a heavy forging press, a massive goods lift, or outdoor construction equipment, the <strong>Welded Hydraulic Cylinder</strong> is the only safe engineering choice.*
          </p>
        </div>
      </Container>
    </Section>
  );
}

/* ─── 06 Technical Specifications ─── */
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
              Our welded cylinders are engineered from the ground up for extreme durability and long-term reliability.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/request-quote/" variant="primary" size="md" className="font-bold">
                DISCUSS YOUR SPECS <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button href="/resources/downloads/" variant="outline" size="md">
                DOWNLOAD CAD MODELS
              </Button>
            </div>
          </div>
          <SpecTable title="Standard Spec Framework" rows={TECHNICAL_SPECS} />
        </div>
      </Container>
    </Section>
  );
}

/* ─── 07 Industries Served ─── */
function IndustriesSection() {
  const industries = [
    {
      icon: <Flame className="w-6 h-6" />,
      name: 'Steel & Metallurgy',
      desc: 'Supplying extreme-pressure, heat-resistant cylinders for rolling mills and automatic gauge control (AGC).',
    },
    {
      icon: <Hammer className="w-6 h-6" />,
      name: 'Heavy Forging',
      desc: 'Delivering massive, thick-walled pressing cylinders designed to survive brutal metal-stamping shock loads.',
    },
    {
      icon: <HardHat className="w-6 h-6" />,
      name: 'Construction Equipment',
      desc: 'Engineering rugged, weather-resistant boom, stick, and bucket cylinders for excavators and loaders.',
    },
    {
      icon: <Anchor className="w-6 h-6" />,
      name: 'Marine Engineering',
      desc: 'Manufacturing corrosion-resistant, high-tensile cylinders for ship-breaking shears and marine winches.',
    },
    {
      icon: <Box className="w-6 h-6" />,
      name: 'Material Handling',
      desc: 'Providing fail-safe, heavy-duty lifting cylinders for multi-ton gantry cranes and goods elevators.',
    },
  ];

  return (
    <Section bg="gray" id="industries">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            Industries Served
          </h2>
          <p className="text-lg text-brand-steelGray font-body">
            Our custom welded cylinders are the primary actuators for heavy manufacturing and outdoor sectors:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200 p-6 flex items-start gap-4 hover:shadow-md transition-shadow duration-300"
            >
              <div className="mt-1">
                <IconBox icon={ind.icon} variant="primary" size="sm" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-honeywell-navy mb-2">{ind.name}</h3>
                <p className="text-brand-steelGray text-sm leading-relaxed">{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── 08 Engineering Considerations ─── */
function EngineeringConsiderations() {
  return (
    <Section bg="white" id="engineering-considerations">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-6">
            Engineering Considerations (Specifying Welded Cylinders)
          </h2>
          <p className="text-brand-darkSlate font-body text-lg mb-8">
            Our{' '}
            <Link href="/services/custom-hydraulic-system-design/" className="text-honeywell-red font-semibold hover:underline">
              Custom Hydraulic System Design
            </Link>{' '}
            team analyzes critical environmental and operational factors before engineering a welded cylinder for your heavy machinery.
          </p>

          <div className="space-y-8">
            <div className="bg-brand-surfaceGray p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-honeywell-navy mb-3 flex items-center gap-3">
                <span className="bg-honeywell-navy text-white w-8 h-8 rounded flex items-center justify-center text-sm font-bold">A</span>
                Pressure Ratings & Wall Thickness
              </h3>
              <p className="text-brand-darkSlate text-sm leading-relaxed pl-11">
                We perform rigorous hoop-stress calculations. If your hydraulic press generates extreme internal pressures, we specify thicker seamless steel tubing for the barrel to guarantee the cylinder will not bulge or burst under maximum tonnage.
              </p>
            </div>

            <div className="bg-brand-surfaceGray p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-honeywell-navy mb-3 flex items-center gap-3">
                <span className="bg-honeywell-navy text-white w-8 h-8 rounded flex items-center justify-center text-sm font-bold">B</span>
                Shock Loads & Vibration
              </h3>
              <p className="text-brand-darkSlate text-sm leading-relaxed pl-11">
                In environments like Rajkot's forging industry, the cylinder experiences violent shock when the die hits the metal. We utilize specialized sub-arc welding techniques for the end caps to ensure the welds never crack under high-frequency vibration.
              </p>
            </div>

            <div className="bg-brand-surfaceGray p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-honeywell-navy mb-3 flex items-center gap-3">
                <span className="bg-honeywell-navy text-white w-8 h-8 rounded flex items-center justify-center text-sm font-bold">C</span>
                Corrosion Resistance & Outdoor Operation
              </h3>
              <p className="text-brand-darkSlate text-sm leading-relaxed pl-11">
                For cylinders exposed to mud, rain, or the saline air of Bhavnagar's shipyards, we upgrade the exterior protection. We apply multi-layer marine-grade epoxy coatings, utilize stainless steel piston rods, and install heavy-duty metallic scrapers to physically clear abrasive rust from the rod before it destroys the internal seals.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ─── 09 Manufacturing Process ─── */
function ManufacturingProcess() {
  return (
    <Section bg="gray" id="manufacturing">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-6">
              Manufacturing & Quality Process
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <IconBox icon={<Flame className="w-5 h-5" />} variant="primary" size="sm" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-honeywell-navy">Advanced Welding</h4>
                  <p className="text-brand-steelGray text-sm mt-1 leading-relaxed">
                    Utilizing automated rotary friction and sub-arc welding systems to ensure deep, slag-free weld penetration between the end caps and the high-tensile barrel.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <IconBox icon={<Cog className="w-5 h-5" />} variant="primary" size="sm" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-honeywell-navy">Post-Weld Machining</h4>
                  <p className="text-brand-steelGray text-sm mt-1 leading-relaxed">
                    Unlike inferior manufacturers, we hone the internal barrel <em>after</em> the welding process is complete. This completely removes any heat-induced metal distortion, ensuring perfect internal cylindricity and vastly extending seal life.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <IconBox icon={<Zap className="w-5 h-5" />} variant="primary" size="sm" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-honeywell-navy">Shock-Load Validation</h4>
                  <p className="text-brand-steelGray text-sm mt-1 leading-relaxed">
                    100% of our welded cylinders undergo extreme 1.5x working pressure hydrostatic testing to verify weld integrity and seal performance under simulated field conditions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 mb-6">
              <h4 className="font-bold text-honeywell-navy flex items-center gap-2 mb-2">
                <FileCheck className="w-5 h-5 text-honeywell-red" />
                Technical Validation Guarantee
              </h4>
              <p className="text-brand-darkSlate text-sm">
                Every welded cylinder is delivered with complete material traceability documentation (MTC) and dimensional reports, ensuring the actuator meets all specified OEM tolerances.
              </p>
            </div>

            <div className="bg-honeywell-navy p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-white flex items-center gap-2 mb-2">
                <ShieldAlert className="w-5 h-5 text-honeywell-red" />
                The Honeywell Guarantee
              </h4>
              <p className="text-white/80 text-sm">
                Our extreme-duty welded cylinders are backed by a strict <strong>12-Month Defect Warranty</strong>. Should your heavy equipment face catastrophic failure, our Hydraulic Cylinder Repair division can rapidly rebuild or re-machine the unit.
              </p>
            </div>
          </div>

          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-slate-200">
            <Image
              src="/images/products/welded-hydraulic-cylinder-manufacturer.webp"
              alt="Welded Cylinder Manufacturing Process in Gujarat"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ─── 10 Project Spotlight ─── */
function ProjectSpotlight() {
  return (
    <Section bg="white" id="project-spotlight">
      <Container>
        <div className="bg-brand-surfaceGray rounded-2xl border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <Badge variant="custom" className="w-fit mb-4">PROJECT SPOTLIGHT</Badge>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-honeywell-navy mb-6">
                Heavy-Duty Welded Cylinder Retrofit for a Steel Forging Press
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-honeywell-navy uppercase text-xs tracking-wider mb-2">The Challenge:</h4>
                  <p className="text-brand-darkSlate text-sm leading-relaxed">
                    The OEM's 800-ton forging press was previously equipped with large tie-rod cylinders. Due to the violent shock loads generated during the stamping cycle, the tie rods were continually stretching, causing the O-rings to blow out. The press was experiencing hydraulic fluid leaks every two weeks.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-honeywell-navy uppercase text-xs tracking-wider mb-2">The Solution:</h4>
                  <p className="text-brand-darkSlate text-sm leading-relaxed">
                    Honeywell Hydraulics completely redesigned the actuators. We manufactured four massive, custom <strong>Welded Hydraulic Cylinders</strong> utilizing ultra-thick ST52 barrels. By permanently welding the heavy flange mounts directly to the barrel, we created a single, unyielding structural unit capable of absorbing the extreme shock vibration.
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-honeywell-red uppercase text-xs tracking-wider mb-2">The Outcome:</h4>
                  <p className="text-honeywell-navy font-semibold text-sm leading-relaxed">
                    The fluid leaks were entirely eliminated. The welded cylinders safely absorbed the brutal 350 Bar shock spikes without yielding, allowing the forging plant to operate continuously for 18 months without requiring a single seal replacement.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative h-64 lg:h-auto bg-honeywell-navy">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-white text-center">
                  <div className="text-6xl font-display font-bold mb-2">350+</div>
                  <div className="text-xl font-bold uppercase tracking-widest text-red-400">Bar Shock Pressure</div>
                  <div className="mt-8 text-sm opacity-80">Absorbed Without Seal Failure</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ─── 11 Related Products ─── */
function RelatedProducts() {
  const products = [
    {
      title: 'Tie-Rod Hydraulic Cylinders',
      description: 'Highly serviceable cylinders with external tie rods, ideal for automated indoor packaging lines and standard automation.',
      href: '/products/hydraulic-cylinders/tie-rod-hydraulic-cylinders/',
      image: '/images/products/hydraulic-cylinders/tie-rod-hydraulic-cylinder-manufacturer.webp',
    },
    {
      title: 'Custom Hydraulic Cylinders',
      description: 'Bespoke fluid power for when standard catalogs fail. We engineer large-bore cylinders and provide reverse-engineering services.',
      href: '/products/hydraulic-cylinders/custom-hydraulic-cylinders/',
      image: '/images/products/custom-hydraulic-cylinder-manufacturer.webp',
    },
    {
      title: 'Telescopic Hydraulic Cylinders',
      description: 'Multi-stage cylinders designed to provide a long stroke from a highly compact retracted length. Ideal for tipper trucks.',
      href: '/products/hydraulic-cylinders/telescopic-hydraulic-cylinders/',
      image: '/images/products/telescopic-hydraulic-cylinder-manufacturer.webp',
    },
  ];

  return (
    <Section bg="gray" id="related-products">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            Related Products
          </h2>
          <p className="text-lg text-brand-steelGray font-body">
            Welded cylinders require extreme, reliable pressure. Power and control them with our heavy-duty fluid generation systems:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <ProductCard
              key={idx}
              title={product.title}
              description={product.description}
              category="Hydraulic Cylinders"
              href={product.href}
              imageSrc={product.image}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── 12 Related Services ─── */
function RelatedServices() {
  const services = [
    {
      title: 'OEM Hydraulic Manufacturing',
      desc: 'High-volume, repeatable production of custom welded cylinders specifically for tractor, crane, and heavy equipment manufacturers.',
      href: '/services/oem-hydraulic-manufacturing/',
    },
    {
      title: 'Hydraulic Cylinder Repair',
      desc: 'Welded cylinders are difficult to service in the field. Send damaged units to our Gujarat facility for complete lathe-cutting, re-sealing, re-welding, and hydrostatic testing.',
      href: '/services/hydraulic-cylinder-repair/',
    },
    {
      title: 'Hydraulic Maintenance Services',
      desc: 'AMC contracts covering the entire fluid power health of your heavy fabrication plant.',
      href: '/services/hydraulic-maintenance-services/',
    },
  ];

  return (
    <Section bg="white" id="related-services">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            The Heavy Engineering Advantage
          </h2>
          <p className="text-lg text-brand-steelGray font-body">
            Purchasing a welded cylinder is a long-term investment in your machine's structural integrity. Leverage our heavy engineering services:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-brand-surfaceGray p-8 rounded-xl border border-slate-200 hover:border-honeywell-navy transition-colors group">
              <h3 className="text-xl font-bold text-honeywell-navy mb-3">{service.title}</h3>
              <p className="text-brand-steelGray text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
              <Link href={service.href} className="inline-flex items-center text-honeywell-red font-bold text-sm group-hover:underline">
                LEARN MORE <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── 13 Local Service Areas ─── */
function LocalServiceAreas() {
  const LOCATIONS = [
    { city: 'Ahmedabad', href: '/locations/ahmedabad/' },
    { city: 'Surat', href: '/locations/surat/' },
    { city: 'Rajkot', href: '/locations/rajkot/' },
    { city: 'Vadodara', href: '/locations/vadodara/' },
    { city: 'Gandhinagar', href: '/locations/gandhinagar/' },
    { city: 'Jamnagar', href: '/locations/jamnagar/' },
    { city: 'Bhavnagar', href: '/locations/bhavnagar/' },
    { city: 'Vapi', href: '/locations/vapi/' },
  ];

  return (
    <Section bg="gray" id="local-areas">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            Direct Delivery Across Gujarat
          </h2>
          <p className="text-lg text-brand-steelGray font-body">
            As a premier welded cylinder manufacturer in Gujarat, we provide direct engineering support and heavy-freight delivery to steel plants, forging hubs, and OEMs across the state.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {LOCATIONS.map((loc, idx) => (
            <LocationCard
              key={idx}
              city={loc.city}
              description={`Heavy-duty welded cylinder manufacturing and supply in ${loc.city}.`}
              industries={['Steel', 'Forging', 'Construction']}
              href={loc.href}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── 14 Resources ─── */
function ResourcesSection() {
  return (
    <Section bg="white" id="resources">
      <Container>
        <div className="bg-honeywell-navy rounded-2xl p-8 md:p-12 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Engineering Resources
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Equip your design and maintenance engineers with vital high-pressure technical data.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="/resources/downloads/" className="bg-white/10 p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                <Box className="w-8 h-8 text-white mb-4" />
                <h3 className="font-bold text-lg mb-2">3D CAD Models</h3>
                <p className="text-white/70 text-sm">Access STEP and IGES files of our welded cylinders to integrate into your heavy machinery blueprints.</p>
              </a>
              <a href="/resources/guides/" className="bg-white/10 p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                <Wrench className="w-8 h-8 text-white mb-4" />
                <h3 className="font-bold text-lg mb-2">Maintenance Guide</h3>
                <p className="text-white/70 text-sm">Learn the correct procedures for diagnosing bent rods and blown seals in high-pressure environments.</p>
              </a>
              <a href="/resources/calculators/" className="bg-white/10 p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                <Cog className="w-8 h-8 text-white mb-4" />
                <h3 className="font-bold text-lg mb-2">Fluid Power Calculators</h3>
                <p className="text-white/70 text-sm">Instantly determine the required barrel wall thickness based on your machine's maximum shock-load pressures.</p>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ─── 15 FAQs ─── */
function FAQSection() {
  return (
    <Section bg="gray" id="faq">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-brand-steelGray font-body">
            Technical answers regarding welded cylinder repair, application, and custom manufacturing.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <FAQAccordion faqs={FAQS} />
        </div>
      </Container>
    </Section>
  );
}
