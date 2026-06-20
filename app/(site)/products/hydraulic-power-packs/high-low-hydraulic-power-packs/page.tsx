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
import {
  ArrowRight,
  Phone,
  MessageCircle,
  ShieldAlert,
  Settings,
  Activity,
  Thermometer,
  CheckCircle2,
  Box,
  Zap,
  Cog,
  FileCheck,
  Hammer,
  TrendingDown
} from 'lucide-react';

/* ═══════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════ */

const PAGE_TITLE =
  'High Low Hydraulic Power Pack Manufacturer | Press Machine Optimization';
const PAGE_DESCRIPTION =
  'Leading high low hydraulic power pack manufacturer. We engineer dual-pump, energy-efficient power units specifically for hydraulic presses and forging machines.';
const PAGE_URL = '/products/hydraulic-power-packs/high-low-hydraulic-power-packs/';
const PAGE_IMAGE = '/images/products/high-low-hydraulic-power-pack-manufacturer.webp';

export const metadata: Metadata = {
  ...buildMetadata({
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    keywords: [
      'High Low Hydraulic Power Pack Manufacturer in Ahmedabad',
      'Dual Pump Hydraulic Power Unit',
      'Press Machine Power Pack',
      'Energy Efficient Hydraulic Power Pack',
      'High Low Power Pack Gujarat',
      'Unloading Valve Hydraulic Circuit',
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
    question: 'Can I upgrade my existing press machine to a High-Low power pack?',
    answer:
      'Yes. This is one of our most popular services. We will remove your inefficient single-pump system and replace it with a dual-pump unit, drastically reducing your factory\'s electrical consumption.',
  },
  {
    question: 'Why does a single-pump system overheat a press machine?',
    answer:
      'In a single-pump system, the pump must be large enough to provide high speed, and capable of high pressure. When the press crushes the metal, that massive volume of fluid has nowhere to go, so it violently bypasses over a relief valve at high pressure, instantly converting electrical horsepower into severe heat. High-Low systems prevent this by unloading the volume before the pressure spikes.',
  },
  {
    question: 'Are High-Low power packs more expensive?',
    answer:
      'The upfront capital cost is slightly higher because it requires two pumps and a specialized manifold block. However, the ROI is usually achieved within 6 to 8 months solely through massive reductions in your monthly electricity bill.',
  },
  {
    question: 'Do you manufacture the custom manifold blocks for the unloading logic in-house?',
    answer:
      'Absolutely. We CNC-machine all of our logic manifolds from solid aluminum or steel blocks in our Gujarat facility, ensuring absolute control over the sequencing valve tolerances.',
  },
];

const TECHNICAL_SPECS = [
  { parameter: 'Pump Architecture', value: 'Tandem (Gear Pump + Radial/Axial Piston Pump)' },
  { parameter: 'High Flow Stage (Low Pressure)', value: 'Up to 300+ LPM @ 30 to 70 Bar' },
  { parameter: 'Low Flow Stage (High Pressure)', value: 'Up to 50 LPM @ 350 to 500 Bar' },
  { parameter: 'Electric Motor Ratings', value: '3 HP to 150+ HP (3-Phase AC)' },
  { parameter: 'Reservoir Capacity', value: '50 Liters to 2000+ Liters (Custom Fabricated)' },
  { parameter: 'Logic Control', value: 'Pilot-operated unloading valves, solenoid override available' },
  { parameter: 'Cooling Integration', value: 'Air-cooled, Water-cooled, or standalone offline cooling circuits' },
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
        name: 'High Low Hydraulic Power Packs',
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
        category: 'Hydraulic Power Packs',
        additionalProperty: [
          {
            '@type': 'PropertyValue',
            name: 'Architecture',
            value: 'Dual Pump (Tandem)',
          },
          {
            '@type': 'PropertyValue',
            name: 'Maximum Pressure',
            value: 'Up to 500 Bar',
          },
          {
            '@type': 'PropertyValue',
            name: 'Primary Application',
            value: 'Hydraulic Presses & Forging',
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
            name: 'Hydraulic Power Packs',
            item: `${siteUrl}/products/hydraulic-power-packs/`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'High Low Hydraulic Power Packs',
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

export default function HighLowPowerPacksPage() {
  const schema = buildPageSchema();

  return (
    <>
      <JsonLd data={schema} />

      {/* ─── 01 Hero Section ─── */}
      <HeroSection />

      {/* ─── 02 Product Overview ─── */}
      <ProductOverview />

      {/* ─── 03 How They Work ─── */}
      <HowItWorks />

      {/* ─── 04 Press Machine Necessity ─── */}
      <PressMachineNecessity />

      {/* ─── 05 High-Low vs Conventional Comparison ─── */}
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
        title="Ready to Slash Your Pressing Energy Costs?"
        description="Stop burning electrical horsepower to generate heat. Standardize your pressing machinery with highly intelligent, energy-efficient High-Low hydraulic power packs."
        primaryCtaText="REQUEST A QUOTE"
        primaryCtaHref="/request-quote/"
        secondaryCtaText="Call Engineering"
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
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-[#F8FAFC] skew-x-[-12deg] translate-x-20 -z-10 hidden lg:block"
        aria-hidden="true"
      />

      <Container>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center text-sm text-[#64748B] font-body gap-1.5">
            <li>
              <Link href="/" className="hover:text-[#E31B23] transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/products/" className="hover:text-[#E31B23] transition-colors">
                Products
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/products/hydraulic-power-packs/" className="hover:text-[#E31B23] transition-colors">
                Hydraulic Power Packs
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-[#0D1B5C] font-semibold" aria-current="page">
              High Low Hydraulic Power Packs
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="flex flex-col items-start z-10">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="custom">ENERGY-EFFICIENT FLUID GENERATION</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-bold text-[#0D1B5C] leading-[1.1] mb-6">
              High Low Hydraulic Power Pack Manufacturer
            </h1>

            <p className="text-lg text-[#334155] font-body mb-8 max-w-xl leading-relaxed">
              Maximize cycle speed while slashing electrical consumption. Honeywell Hydraulics is a premier high low hydraulic power pack manufacturer in Gujarat, engineering dual-pump power units specifically for the heavy pressing and forging industries. We design advanced unloading valve logic that provides rapid cylinder approach speeds at low pressure, followed by extreme high-pressure tonnage during the actual pressing phase—drastically reducing your machine's motor size, heat generation, and electricity costs.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <Button
                href="#"
                size="lg"
                variant="primary"
                className="w-full sm:w-auto font-bold tracking-wide"
              >
                DOWNLOAD DUAL-PUMP SPECS <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="#"
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white hover:bg-[#F8FAFC]"
              >
                SCHEDULE EFFICIENCY AUDIT <ArrowRight className="w-5 h-5 ml-2" />
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
                ISO 9001:2015
              </Badge>
              <Badge variant="madeInIndia" className="bg-white border border-orange-200">
                Made in India
              </Badge>
              <Badge variant="default" className="bg-white border border-gray-200">
                Dual-Pump Technology
              </Badge>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative w-full aspect-[4/3] lg:aspect-square bg-white rounded-xl border border-[#E2E8F0] shadow-sm p-4 overflow-hidden group">
            <div className="absolute inset-0 bg-[#F8FAFC] opacity-50 rounded-xl" />
            <Image
              src="/images/products/high-low-hydraulic-power-pack-manufacturer.webp"
              alt="High Low Hydraulic Power Pack Manufacturer in Ahmedabad - Dual pump press unit by Honeywell Hydraulics"
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
                Pump Architecture
              </span>
              <span className="block text-sm font-mono text-[#0D1B5C] font-semibold">
                Tandem High/Low
              </span>
            </div>
            <div className="px-6 flex-1 text-center">
              <span className="block text-xs font-bold text-[#64748B] uppercase tracking-wider mb-1">
                Max Press Pressure
              </span>
              <span className="block text-sm font-mono text-[#0D1B5C] font-semibold">
                Up to 500 Bar
              </span>
            </div>
            <div className="px-6 flex-1 text-center">
              <span className="block text-xs font-bold text-[#64748B] uppercase tracking-wider mb-1">
                Energy Efficiency
              </span>
              <span className="block text-sm font-mono text-[#E31B23] font-semibold">
                Up to 70% Savings
              </span>
            </div>
            <div className="px-6 flex-1 text-center">
              <span className="block text-xs font-bold text-[#64748B] uppercase tracking-wider mb-1">
                Primary Application
              </span>
              <span className="block text-sm font-mono text-[#0D1B5C] font-semibold">
                Press & Forging
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
            What Is A High Low Hydraulic Power Pack?
          </h2>
          <div className="space-y-5 text-[#334155] font-body text-lg leading-relaxed">
            <p>
              In the vast majority of heavy industrial pressing operations, the machine requires two completely different physical profiles during a single cycle: it needs to close the massive press die extremely fast (requiring high flow), and then it needs to crush the metal with immense force (requiring high pressure).
            </p>
            <p>
              A conventional single-pump power unit is fundamentally inefficient at handling this.
            </p>
            <p>
              A <strong className="text-[#0D1B5C]">High Low Hydraulic Power Pack</strong> (often called a Dual Pump Power Unit) solves this physics problem. Instead of one large pump, it utilizes a tandem double-pump configuration driven by a single electric motor. As a leading <strong>hydraulic press power pack supplier</strong>, we engineer these systems to automatically sequence a high-volume gear pump and a high-pressure radial piston pump. This mechanical intelligence allows the power pack to deliver exactly what the machine needs, the exact millisecond it needs it, resulting in monumental energy savings.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ─── 03 How It Works ─── */
function HowItWorks() {
  const points = [
    {
      icon: <Activity className="w-6 h-6" />,
      title: 'A. High Flow Stage (Rapid Approach)',
      desc: 'When the operator triggers the press to close, the cylinder needs to travel a long distance very quickly. During this "approach phase," the required pressure is very low, but the required fluid volume is massive. Both the large high-flow pump and the small high-pressure pump send fluid to the cylinder simultaneously, moving the ram downward at maximum speed.',
    },
    {
      icon: <Hammer className="w-6 h-6" />,
      title: 'B. Low Flow Stage (The Press Cycle)',
      desc: 'The moment the press ram contacts the metal workpiece, resistance spikes. The fluid pressure inside the system immediately rises, triggering the transition to the crushing phase of the cycle.',
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: 'C. Unloading Valve Logic',
      desc: 'When pressure reaches a set-point, the Unloading Valve automatically triggers. It "unloads" the large high-flow pump, dumping its volume back to the tank at near-zero pressure. Now, only the small high-pressure pump is driving the cylinder, generating 350+ Bar to crush the metal using minimal electrical horsepower.',
    },
  ];

  return (
    <Section bg="gray" id="how-it-works">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0D1B5C] mb-4">
            How High-Low Circuits Work
          </h2>
          <p className="text-lg text-[#64748B] font-body">
            The intelligence of a High-Low power pack relies on a specialized hydraulic component called the <strong>Unloading Valve</strong>, which dictates the behavior of the two pumps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {points.map((comp, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-[#E2E8F0] p-8 hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="flex items-center gap-4 mb-5">
                <IconBox icon={comp.icon} variant="primary" size="md" />
              </div>
              <h3 className="text-xl font-display font-bold text-[#0D1B5C] mb-3 group-hover:text-[#E31B23] transition-colors">
                {comp.title}
              </h3>
              <p className="text-[#64748B] font-body text-sm leading-relaxed">
                {comp.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── 04 Press Machine Necessity ─── */
function PressMachineNecessity() {
  return (
    <Section bg="white" id="necessity">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <TrendingDown className="w-12 h-12 text-[#E31B23] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0D1B5C] mb-6">
            Why Press Machines Demand High-Low Systems
          </h2>
          <p className="text-lg text-[#334155] font-body mb-6 leading-relaxed">
            Machine builders who try to build a 500-ton press using a standard single-pump power unit face catastrophic engineering failures. To get the press to close fast, they need a huge pump. To get the press to crush metal, they need huge pressure.
          </p>
          <p className="text-lg text-[#334155] font-body mb-8 leading-relaxed">
            If they use a single huge pump at huge pressure, they must install a massive 150 HP electric motor. This motor will consume incredible amounts of electricity, generate enough heat to boil the hydraulic oil, and destroy the fluid viscosity in days.
          </p>
          <div className="bg-[#F8FAFC] border-l-4 border-[#E31B23] p-6 rounded-r-lg text-left inline-block w-full">
            <p className="text-[#0D1B5C] font-semibold text-lg">
              By installing a High-Low Power Pack, that same 500-ton press can operate at the exact same cycle speed using a tiny 30 HP electric motor. The heat generation drops by 70%, electrical bills plummet, and the fluid remains thermally stable for months.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ─── 05 Comparison Section ─── */
function ComparisonSection() {
  return (
    <Section bg="gray" id="comparison">
      <Container>
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0D1B5C] mb-4">
            High-Low vs. Conventional Power Packs
          </h2>
          <p className="text-lg text-[#64748B] font-body">
            Understanding the mechanical advantage of dual-pump logic is critical for plant profitability.
          </p>
        </div>

        <div className="max-w-5xl mx-auto overflow-x-auto bg-white rounded-xl border border-[#E2E8F0] shadow-sm">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-[#E2E8F0] bg-[#0D1B5C] text-white">
                <th className="px-6 py-4 font-display font-bold text-lg w-[20%]">Engineering Feature</th>
                <th className="px-6 py-4 font-display font-bold text-lg w-[40%] border-l border-white/20">High-Low Hydraulic Power Packs</th>
                <th className="px-6 py-4 font-display font-bold text-lg w-[40%] border-l border-white/20">Conventional Single-Pump Units</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0]">
              <tr className="hover:bg-[#F8FAFC]/50">
                <td className="px-6 py-4 font-semibold text-[#334155]">Pump Architecture</td>
                <td className="px-6 py-4 text-[#0D1B5C] font-semibold border-l border-[#E2E8F0]">Dual tandem pumps (1 High Flow, 1 High Pressure)</td>
                <td className="px-6 py-4 text-[#334155] border-l border-[#E2E8F0]">Single Pump (Fixed displacement)</td>
              </tr>
              <tr className="hover:bg-[#F8FAFC]/50 bg-[#F8FAFC]/30">
                <td className="px-6 py-4 font-semibold text-[#334155]">Motor Size Required</td>
                <td className="px-6 py-4 text-[#E31B23] font-bold border-l border-[#E2E8F0]">Extremely Small (Highly energy efficient)</td>
                <td className="px-6 py-4 text-[#334155] border-l border-[#E2E8F0]">Massively Oversized (Highly inefficient)</td>
              </tr>
              <tr className="hover:bg-[#F8FAFC]/50">
                <td className="px-6 py-4 font-semibold text-[#334155]">Heat Generation</td>
                <td className="px-6 py-4 text-[#0D1B5C] border-l border-[#E2E8F0]">Very Low (Fluid bypasses to tank at low pressure)</td>
                <td className="px-6 py-4 text-[#334155] border-l border-[#E2E8F0]">Extremely High (Fluid shears through relief valves)</td>
              </tr>
              <tr className="hover:bg-[#F8FAFC]/50 bg-[#F8FAFC]/30">
                <td className="px-6 py-4 font-semibold text-[#334155]">Operating Cycle Speed</td>
                <td className="px-6 py-4 text-[#334155] border-l border-[#E2E8F0]">Fast approach, controlled slow pressing</td>
                <td className="px-6 py-4 text-[#334155] border-l border-[#E2E8F0]">Constant speed throughout the stroke</td>
              </tr>
              <tr className="hover:bg-[#F8FAFC]/50">
                <td className="px-6 py-4 font-semibold text-[#334155]">Primary Application</td>
                <td className="px-6 py-4 text-[#0D1B5C] font-bold border-l border-[#E2E8F0]">Hydraulic presses, forging, metal stamping</td>
                <td className="px-6 py-4 text-[#334155] border-l border-[#E2E8F0]">Constant-load applications</td>
              </tr>
              <tr className="hover:bg-[#F8FAFC]/50 bg-[#F8FAFC]/30">
                <td className="px-6 py-4 font-semibold text-[#334155]">Operating Cost</td>
                <td className="px-6 py-4 text-[#E31B23] font-bold border-l border-[#E2E8F0]">Incredibly Low (Saves massive amounts of electricity)</td>
                <td className="px-6 py-4 text-[#334155] border-l border-[#E2E8F0]">Very High</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="max-w-4xl mx-auto mt-8 bg-white p-6 rounded-lg border-l-4 border-[#E31B23]">
          <p className="text-[#334155] font-body italic">
            *If you are building an automated press machine, a deep drawing press, or a heavy scrap baler, a <strong>High-Low Power Pack</strong> is the only financially viable engineering choice.*
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0D1B5C] mb-4">
              Technical Specifications Framework
            </h2>
            <p className="text-lg text-[#64748B] font-body mb-8">
              Our high-low systems are mathematically calibrated to provide exact unloading sequencing for maximum efficiency.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/request-quote/" variant="primary" size="md" className="font-bold">
                DISCUSS YOUR SPECS <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button href="#" variant="outline" size="md">
                ENERGY CALCULATORS
              </Button>
            </div>
          </div>
          <SpecTable title="Standard Capabilities" rows={TECHNICAL_SPECS} />
        </div>
      </Container>
    </Section>
  );
}

/* ─── 07 Industries Served ─── */
function IndustriesSection() {
  const industries = [
    {
      icon: <Hammer className="w-6 h-6" />,
      name: 'Heavy Forging',
      desc: 'Providing extreme high-pressure/low-flow logic to generate the massive tonnages required to shape red-hot steel.',
      link: '#'
    },
    {
      icon: <Settings className="w-6 h-6" />,
      name: 'Sheet Metal & Stamping',
      desc: 'Supplying rapid-approach power packs to decrease machine cycle times and dramatically increase parts-per-hour output.',
      link: '#'
    },
    {
      icon: <Box className="w-6 h-6" />,
      name: 'Steel Industry',
      desc: 'Delivering robust, continuous-duty power units for heavy-duty metal shearing and bending operations.',
      link: '#'
    },
    {
      icon: <Cog className="w-6 h-6" />,
      name: 'Industrial Automation',
      desc: 'Designing highly compact, energy-efficient power units for automated robotic clamping and pressing cells.',
      link: '#'
    },
  ];

  return (
    <Section bg="gray" id="industries">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0D1B5C] mb-4">
            Industries Served
          </h2>
          <p className="text-lg text-[#64748B] font-body">
            Our custom dual-pump power units are the primary fluid generation engines for heavy fabrication and metal forming:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-[#E2E8F0] p-6 flex flex-col items-start gap-4 hover:shadow-md transition-shadow duration-300 h-full"
            >
              <div className="mt-1">
                <IconBox icon={ind.icon} variant="primary" size="sm" />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-[#0D1B5C] mb-2">{ind.name}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed mb-4">{ind.desc}</p>
              </div>
              <Link href={ind.link} className="text-[#E31B23] font-semibold text-sm hover:underline mt-auto flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
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
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0D1B5C] mb-6">
            Engineering Considerations (Specifying High-Low Systems)
          </h2>
          <p className="text-[#334155] font-body text-lg mb-8">
            Our{' '}
            <Link href="#" className="text-[#E31B23] font-semibold hover:underline">
              Custom Hydraulic System Design
            </Link>{' '}
            team mathematically guarantees the efficiency of your press machine.
          </p>

          <div className="space-y-6">
            <div className="bg-[#F8FAFC] p-6 rounded-lg border border-[#E2E8F0] shadow-sm">
              <h3 className="text-xl font-bold text-[#0D1B5C] mb-3 flex items-center">
                <Activity className="w-5 h-5 mr-3 text-[#E31B23]" />
                A. Pump & Motor Sizing
              </h3>
              <p className="text-[#64748B] font-body leading-relaxed">
                This is a delicate mathematical balance. We calculate the exact volume required for your desired "fast approach" time to size the low-pressure gear pump. Then, we calculate the exact fluid volume required to maintain the pressing speed at maximum tonnage to size the high-pressure radial piston pump. Finally, we calculate the combined horsepower draw exactly at the unloading point to specify the smallest possible electric motor.
              </p>
            </div>

            <div className="bg-[#F8FAFC] p-6 rounded-lg border border-[#E2E8F0] shadow-sm">
              <h3 className="text-xl font-bold text-[#0D1B5C] mb-3 flex items-center">
                <Settings className="w-5 h-5 mr-3 text-[#E31B23]" />
                B. Unloading Pressure Management
              </h3>
              <p className="text-[#64748B] font-body leading-relaxed">
                If the unloading valve is set too low, the large pump will dump to the tank before the press reaches the workpiece, causing the cylinder to crawl slowly. If set too high, the electric motor will stall and trip the breaker. We utilize highly precise, pilot-operated unloading valves integrated into custom Manifold Blocks to ensure exact sequence timing.
              </p>
            </div>

            <div className="bg-[#F8FAFC] p-6 rounded-lg border border-[#E2E8F0] shadow-sm">
              <h3 className="text-xl font-bold text-[#0D1B5C] mb-3 flex items-center">
                <Thermometer className="w-5 h-5 mr-3 text-[#E31B23]" />
                C. Heat Generation & Cooling
              </h3>
              <p className="text-[#64748B] font-body leading-relaxed">
                Because the large pump unloads its fluid directly to the tank at near-zero pressure, the oil does not shear across a high-pressure relief valve. This inherently prevents heat generation. However, for continuous 24/7 pressing operations, we still integrate highly efficient shell-and-tube water coolers or air-blast heat exchangers to guarantee absolute thermal stability.
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
    <Section bg="gray" id="manufacturing-process">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0D1B5C] mb-6">
              Manufacturing & Quality Process
            </h2>
            <p className="text-[#334155] font-body text-lg mb-8 leading-relaxed">
              Precision machining and rigorous testing ensure your unloading logic works perfectly every single cycle.
            </p>

            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Cog className="w-6 h-6 text-[#E31B23]" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-[#0D1B5C]">Precision Valve Assembly</h4>
                  <p className="text-[#64748B] font-body mt-1">
                    High-Low logic relies entirely on the rapid shifting of the unloading valve. We CNC-machine custom aluminum and steel manifolds to house these cartridge valves, eliminating exterior pipework and preventing pressure drops.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Box className="w-6 h-6 text-[#E31B23]" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-[#0D1B5C]">Laser Alignment</h4>
                  <p className="text-[#64748B] font-body mt-1">
                    The electric motor is coupled to the tandem dual-pump bracket using laser alignment tools to ensure absolute concentricity, eliminating vibration and preventing shaft seal blowouts.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-[#E31B23]" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-[#0D1B5C]">Simulated Press Testing</h4>
                  <p className="text-[#64748B] font-body mt-1">
                    100% of our High-Low power packs undergo rigorous testing on our simulated press rigs. We verify the exact millisecond the unloading valve triggers, ensuring a seamless transition from high-speed approach to high-pressure pressing.
                  </p>
                </div>
              </li>
            </ul>
            
            <div className="mt-8 bg-white p-4 rounded-lg border border-[#E2E8F0]">
              <p className="text-sm text-[#0D1B5C] font-semibold flex items-center">
                <ShieldAlert className="w-4 h-4 mr-2 text-[#E31B23]" />
                Backed by a strict [WARRANTY_MONTHS]-Month Defect Warranty.
              </p>
            </div>
          </div>

          <div className="relative aspect-square lg:aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-[#E2E8F0]">
            <Image
              src="/images/hero/hydraulic-cylinder-manufacturing-ahmedabad.png" // Placeholder
              alt="Hydraulic Logic Testing Facility"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B5C]/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <Badge variant="custom" className="mb-3">QA LAB</Badge>
              <h3 className="text-white text-xl font-bold">Unloading Valve Sequence Verification</h3>
            </div>
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
        <div className="bg-[#F8FAFC] rounded-2xl shadow-sm overflow-hidden border border-[#E2E8F0]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <Badge variant="custom" className="w-fit mb-6">PROJECT SPOTLIGHT</Badge>
              <h2 className="text-3xl font-display font-bold text-[#0D1B5C] mb-6">
                Energy Efficiency Retrofit for a 400-Ton Sheet Metal Deep Drawing Press
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-[#E31B23] font-bold mb-2 uppercase text-sm tracking-wider">The Challenge</h4>
                  <p className="text-[#64748B] font-body leading-relaxed">
                    An automotive stamping supplier in Sanand operated a 400-ton press powered by an outdated single-pump system and a massive 80 HP motor. The motor constantly drew peak amperage, the hydraulic oil boiled past 85°C, and massive electricity bills decimated profit margins.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-[#E31B23] font-bold mb-2 uppercase text-sm tracking-wider">The Solution</h4>
                  <p className="text-[#64748B] font-body leading-relaxed">
                    Honeywell performed a complete system teardown and designed a custom High-Low Hydraulic Power Pack. By implementing dual-pump unloading logic, we replaced the 80 HP motor with a tiny 25 HP motor, while perfectly maintaining the exact same 6-second cycle time.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-[#E31B23] font-bold mb-2 uppercase text-sm tracking-wider">The Outcome</h4>
                  <p className="text-[#0D1B5C] font-body font-semibold leading-relaxed">
                    Electrical consumption dropped by 65%. Oil temperatures stabilized naturally at 45°C without the use of an industrial chiller, achieving a complete return on investment within 7 months purely from energy savings.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative min-h-[300px] bg-[#0D1B5C] flex flex-col items-center justify-center p-12 text-center text-white">
               <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
               <TrendingDown className="w-16 h-16 text-[#E31B23] mb-6 relative z-10" />
               <div className="text-5xl font-bold mb-2 relative z-10">65%</div>
               <div className="text-xl font-medium text-white/80 relative z-10">Electrical Cost Reduction</div>
               <div className="w-16 h-1 bg-[#E31B23] mx-auto my-6 relative z-10"></div>
               <div className="text-5xl font-bold mb-2 relative z-10">40°C</div>
               <div className="text-xl font-medium text-white/80 relative z-10">Drop in Oil Temp</div>
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
      title: 'Hydraulic Power Packs Hub',
      desc: 'Explore our master category of power packs.',
      link: '/products/hydraulic-power-packs/',
      icon: <Zap className="w-6 h-6 text-[#E31B23]" />
    },
    {
      title: '3 Phase AC Power Packs',
      desc: 'Standard continuous-duty fluid generation units.',
      link: '/products/hydraulic-power-packs/3-phase-hydraulic-power-packs/',
      icon: <Activity className="w-6 h-6 text-[#E31B23]" />
    },
    {
      title: 'Welded Hydraulic Cylinders',
      desc: 'Extreme-pressure 350+ Bar cylinders for pressing.',
      link: '/products/hydraulic-cylinders/welded-hydraulic-cylinders/',
      icon: <Box className="w-6 h-6 text-[#E31B23]" />
    },
    {
      title: 'DC Mini Power Packs',
      desc: 'Compact battery-powered mobile units.',
      link: '/products/hydraulic-power-packs/dc-mini-power-packs/',
      icon: <Settings className="w-6 h-6 text-[#E31B23]" />
    }
  ];

  return (
    <Section bg="gray" id="related-products">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0D1B5C] mb-4">
            Related Products
          </h2>
          <p className="text-lg text-[#64748B] font-body">
            A High-Low power pack is the brain of a pressing system. Connect it to our extreme-duty actuators:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <Link key={idx} href={product.link} className="group block h-full">
              <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 h-full transition-all duration-300 hover:shadow-lg hover:border-[#0D1B5C]/30 flex flex-col">
                <div className="w-12 h-12 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {product.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0D1B5C] mb-2 group-hover:text-[#E31B23] transition-colors">
                  {product.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed mb-4 flex-grow">
                  {product.desc}
                </p>
                <div className="flex items-center text-[#E31B23] font-semibold text-sm mt-auto">
                  View Category <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
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
      title: 'Hydraulic Consulting',
      desc: 'Hire our systems architects to audit your factory floor and calculate exactly how much electricity you can save by upgrading aging presses.',
      link: '#',
      icon: <MessageCircle className="w-6 h-6 text-[#0D1B5C]" />
    },
    {
      title: 'OEM Hydraulic Manufacturing',
      desc: 'High-volume, repeatable production of custom High-Low power units specifically for press machine builders.',
      link: '#',
      icon: <Settings className="w-6 h-6 text-[#0D1B5C]" />
    },
    {
      title: 'Custom Hydraulic System Design',
      desc: 'We will design the entire press circuit, calculating the exact unloading pressures and cylinder bore sizes required.',
      link: '#',
      icon: <FileCheck className="w-6 h-6 text-[#0D1B5C]" />
    }
  ];

  return (
    <Section bg="white" id="related-services">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0D1B5C] mb-4">
            Related Services
          </h2>
          <p className="text-lg text-[#64748B] font-body">
            Purchasing a dual-pump power unit is an investment in energy efficiency. Leverage our heavy engineering services:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-[#F8FAFC] rounded-xl p-8 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-white rounded-lg border border-[#E2E8F0] flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0D1B5C] mb-3">{service.title}</h3>
              <p className="text-[#64748B] font-body leading-relaxed mb-6">
                {service.desc}
              </p>
              <Link href={service.link} className="inline-flex items-center text-[#E31B23] font-bold hover:underline">
                Explore Service <ArrowRight className="w-4 h-4 ml-2" />
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
  const cities = ['Ahmedabad', 'Surat', 'Rajkot', 'Vadodara', 'Gandhinagar', 'Jamnagar', 'Bhavnagar', 'Vapi'];

  return (
    <Section bg="gray" id="local-service-areas">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold text-[#0D1B5C] mb-6">
            Local OEM Support in Gujarat
          </h2>
          <p className="text-[#64748B] font-body text-lg mb-10">
            As a premier high-low hydraulic power pack manufacturer in Gujarat, we provide direct energy-efficiency consulting and heavy-freight delivery to forging hubs and press OEMs across the state.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((city, idx) => (
              <Link 
                key={idx} 
                href="#"
                className="bg-white border border-[#E2E8F0] text-[#0D1B5C] px-6 py-3 rounded-full font-semibold hover:bg-[#0D1B5C] hover:text-white hover:border-[#0D1B5C] transition-colors shadow-sm"
              >
                Press Power Packs in {city}
              </Link>
            ))}
          </div>
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
        <div className="bg-[#0D1B5C] rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Technical Resources
          </h2>
          <p className="text-white/80 font-body text-lg max-w-2xl mx-auto mb-10">
            Equip your plant engineers with vital data on fluid logic and energy efficiency.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link href="#" className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-colors flex flex-col items-center text-center group">
              <Zap className="w-8 h-8 text-[#E31B23] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg mb-2">Energy Calculators</h3>
              <p className="text-white/70 text-sm">Calculate the exact motor HP required for your desired approach speed.</p>
            </Link>
            <Link href="#" className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-colors flex flex-col items-center text-center group">
              <Box className="w-8 h-8 text-[#E31B23] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg mb-2">3D CAD Models</h3>
              <p className="text-white/70 text-sm">Access STEP/IGES files of our custom power packs.</p>
            </Link>
            <Link href="#" className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-colors flex flex-col items-center text-center group">
              <Settings className="w-8 h-8 text-[#E31B23] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg mb-2">Unloading Guide</h3>
              <p className="text-white/70 text-sm">Learn how to correctly adjust the unloading pressure set-point.</p>
            </Link>
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
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0D1B5C] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#64748B] font-body">
            Technical answers regarding press machinery retrofits and energy efficiency.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <FAQAccordion faqs={FAQS} />
        </div>
      </Container>
    </Section>
  );
}
