/* eslint-disable react/no-unescaped-entities */
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
import { SiteLocationsSection } from '@/components/locations/SiteLocationsSection';
import { IndustryCard } from '@/components/cards/IndustryCard';
import { Heading } from '@/components/ui/Heading';
import {
  ArrowRight,
  MessageCircle,
  ShieldAlert,
  Settings,
  Hammer,
  Box,
  Cog,
  FileCheck,
  Zap,
  Activity,
  Thermometer,
  CheckCircle2,
  Droplets,
  Truck
} from 'lucide-react';

/* ═══════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════ */

const PAGE_TITLE =
  '3 Phase Hydraulic Power Pack Manufacturer | Honeywell';
const PAGE_DESCRIPTION =
  'Leading 3 phase hydraulic power pack manufacturer. We engineer continuous-duty industrial AC power units for factory automation and heavy manufacturing.';
const PAGE_URL = '/products/hydraulic-power-packs/3-phase-hydraulic-power-packs';
const PAGE_IMAGE = '/images/products/hydraulic-power-packs/hydraulic-power-pack-3-phase.webp';

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

const FAQS = [
  {
    question: 'Can I run a 3-phase hydraulic power pack on a single-phase power supply?',
    answer:
      'No. A 3-phase motor requires three alternating current legs (415V/440V). To run it on a single-phase grid (220V), you must install a Variable Frequency Drive (VFD) or a phase converter to artificially generate the third phase, though this is generally only recommended for smaller horsepower units.',
  },
  {
    question: 'Why does my current single-phase power pack overheat so quickly?',
    answer:
      'Single-phase motors are generally designed for intermittent duty (e.g., running for 5 minutes to lift a car, then resting). They lack the smooth torque delivery of a 3-phase motor and draw massive amperage, generating extreme heat. For continuous automation, you must upgrade to a 3-phase system.',
  },
  {
    question: 'Do you custom-build the reservoirs for your industrial power packs?',
    answer:
      'Yes. We do not rely on standard, flimsy plastic tanks. We laser-cut and weld robust steel reservoirs in-house, sizing them specifically to provide adequate heat dissipation and fluid de-aeration for your machine\'s exact duty cycle.',
  },
  {
    question: 'Can you integrate variable displacement pumps into your 3-phase power packs?',
    answer:
      'Absolutely. For maximum energy efficiency, we frequently couple our IE3 3-phase motors with variable displacement piston or vane pumps. The pump automatically destrokes (stops pumping fluid) when the system reaches maximum pressure, drastically reducing the motor\'s electrical load.',
  },
];

const TECHNICAL_SPECS = [
  { parameter: 'Electric Motor Inputs', value: '3-Phase AC (380V / 415V / 440V, 50Hz/60Hz)' },
  { parameter: 'Motor Efficiency Ratings', value: 'IE2, IE3 (Premium Efficiency), IE4 (Super Premium)' },
  { parameter: 'Horsepower Ratings', value: '1 HP to 200+ HP' },
  { parameter: 'Pump Architecture', value: 'Gear Pumps, Vane Pumps, Axial Piston Pumps (Fixed or Variable)' },
  { parameter: 'Maximum Operating Pressure', value: 'Up to 350 Bar (5000+ PSI)' },
  { parameter: 'Reservoir Capacity', value: '20 Liters to 5000+ Liters (Custom Steel or Stainless Steel)' },
  { parameter: 'Cooling Integration', value: 'Integrated Air-Cooled or Water-Cooled heat exchangers' },
  { parameter: 'Control Logic', value: 'Custom CNC Manifold Blocks integrated directly onto power unit' },
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
        name: '3 Phase Hydraulic Power Packs',
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
            name: 'Electric Motor',
            value: '3-Phase AC (380V / 415V / 440V)',
          },
          {
            '@type': 'PropertyValue',
            name: 'Duty Cycle',
            value: 'Continuous (100%)',
          },
          {
            '@type': 'PropertyValue',
            name: 'Operating Pressure',
            value: 'Up to 350 Bar / 5000+ PSI',
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
            name: '3 Phase Hydraulic Power Packs',
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

export default function ThreePhasePowerPacksPage() {
  const schema = buildPageSchema();

  return (
    <>
      <JsonLd data={schema} />

      {/* ─── 01 Hero Section ─── */}
      <HeroSection />

      {/* ─── 02 Product Overview ─── */}
      <ProductOverview />

      {/* ─── 03 Why 3 Phase ─── */}
      <WhyThreePhase />

      {/* ─── 04 Comparison ─── */}
      <ComparisonSection />

      {/* ─── 05 Technical Specifications ─── */}
      <TechnicalSpecifications />

      {/* ─── 06 Industries Served ─── */}
      <IndustriesSection />

      {/* ─── 07 Engineering Considerations ─── */}
      <EngineeringConsiderations />

      {/* ─── 08 Manufacturing Process ─── */}
      <ManufacturingProcess />

      {/* ─── 09 Project Spotlight ─── */}
      <ProjectSpotlight />

      {/* ─── 10 Related Products ─── */}
      <RelatedProducts />

      {/* ─── 11 Related Services ─── */}
      <RelatedServices />

      {/* ─── 12 Local Service Areas ─── */}
      <SiteLocationsSection
        title="Local Service Areas in Gujarat"
        description="As a premier industrial hydraulic power pack manufacturer in Gujarat, we provide direct energy-efficiency consulting and heavy-freight delivery to automated factories and GIDCs across the state."
      />

      {/* ─── 13 FAQs ─── */}
      <FAQSection />

      {/* ─── 15 CTA Section ─── */}
      <CTA
        title="Ready to Upgrade to Continuous AC Power?"
        description="Stop battling overheated motors and fluctuating hydraulic pressure. Standardize your automated factory with ultra-reliable, continuous-duty 3-phase hydraulic power packs."
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
      className="relative bg-white pt-2 pb-16 md:pt-4 md:pb-24 overflow-hidden border-b border-slate-200"
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
                CONTINUOUS DUTY FLUID POWER
              </span>
              <div className="h-4 w-px bg-slate-300" />
              <span className="text-brand-steelGray text-sm font-medium">3 Phase Hydraulic Power Packs</span>
            </div>

            <Heading variant="hero" as="h1" className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-bold text-honeywell-navy leading-[1.1] mb-6">
              3 Phase Hydraulic Power Pack Manufacturer
            </Heading>

            <p className="text-lg text-brand-darkSlate font-body mb-8 max-w-xl leading-relaxed">
              Unyielding, continuous fluid power for automated factories. Honeywell Hydraulics is a premier 3 phase hydraulic power pack manufacturer in Gujarat, engineering heavy-duty, industrial AC power units for manufacturing plants running 24/7. Designed specifically to leverage three-phase grid electricity, our systems provide the absolute thermal stability, electrical efficiency, and mechanical reliability required to power your critical production line machinery without interruption.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <Button
                href="#"
                size="lg"
                variant="primary"
                className="w-full sm:w-auto font-bold tracking-wide"
              >
                DOWNLOAD AC SPECS <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="#"
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white hover:bg-brand-surfaceGray"
              >
                SCHEDULE SYSTEM AUDIT <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            
            
            
          </div>

          {/* Image Column */}
          <div className="relative w-full aspect-[4/3] lg:aspect-square bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden group">
            <div className="absolute inset-0 bg-brand-surfaceGray opacity-50 rounded-xl" />
            <Image
              src="/images/products/3-phase-hydraulic-power-pack-manufacturer.webp"
              alt="3 Phase Hydraulic Power Pack Manufacturer in Ahmedabad - Continuous duty AC power unit by Honeywell Hydraulics"
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
                Duty Cycle
              </span>
              <span className="block text-sm font-mono text-honeywell-navy font-semibold">
                100% Continuous
              </span>
            </div>
            <div className="px-6 flex-1 text-center group cursor-default">
              <span className="block text-xs font-bold text-brand-steelGray uppercase tracking-wider mb-1 group-hover:text-honeywell-red transition-colors duration-300">
                Motor Input
              </span>
              <span className="block text-sm font-mono text-honeywell-navy font-semibold">
                3-Phase AC (415V/440V)
              </span>
            </div>
            <div className="px-6 flex-1 text-center group cursor-default">
              <span className="block text-xs font-bold text-brand-steelGray uppercase tracking-wider mb-1 group-hover:text-honeywell-red transition-colors duration-300">
                Efficiency
              </span>
              <span className="block text-sm font-mono text-honeywell-navy font-semibold">
                IE2 / IE3 / IE4
              </span>
            </div>
            <div className="px-6 flex-1 text-center group cursor-default">
              <span className="block text-xs font-bold text-brand-steelGray uppercase tracking-wider mb-1 group-hover:text-honeywell-red transition-colors duration-300">
                Applications
              </span>
              <span className="block text-sm font-mono text-honeywell-navy font-semibold">
                Heavy Automation
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
          <Heading id="overview-heading" variant="section" as="h2" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-6">
            What Is A 3 Phase Hydraulic Power Pack?
          </Heading>
          <div className="space-y-5 text-brand-darkSlate font-body text-lg leading-relaxed">
            <p>
              In heavy manufacturing and automated production environments, fluid power must be generated constantly and reliably. 
            </p>
            <p>
              A <strong className="text-honeywell-navy">3 Phase Hydraulic Power Pack</strong> is the standard industrial workhorse. Unlike{' '}
              <Link
                href="#"
                className="text-honeywell-red font-semibold hover:underline"
              >
                DC mini power packs
              </Link>{' '}
              used on mobile battery-operated equipment, or standard single-phase units used in light commercial garages, a 3-phase unit is designed to wire directly into a factory's 415V/440V alternating current (AC) electrical grid.
            </p>
            <p>
              As a leading <strong>industrial hydraulic power pack supplier</strong>, we construct these units around robust, high-efficiency 3-phase electric motors. This multi-phase electrical input allows the motor to generate massive, smooth rotational torque to drive heavy-displacement hydraulic pumps continuously for thousands of hours without overheating, stalling, or suffering from the extreme electrical phase imbalances common in single-phase systems.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ─── 03 Why 3 Phase ─── */
function WhyThreePhase() {
  const reasons = [
    {
      icon: <Activity className="w-6 h-6" />,
      title: 'A. Stable Power Delivery',
      desc: 'A 3-phase electrical supply provides three alternating currents that peak at sequential times. This means power delivery to the hydraulic pump is constant and smooth, unlike single-phase motors which experience "dead spots" in torque. This smooth torque prevents hydraulic pulsation and ensures stable pressure output to your machine.',
    },
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: 'B. Continuous Operation & Thermal Stability',
      desc: 'Because 3-phase motors run much cooler than equivalent single-phase motors, they are capable of a 100% duty cycle. A 3-phase hydraulic power pack can run 24 hours a day, 365 days a year without the motor burning out, making them mandatory for continuous-process industries.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'C. Superior Motor Efficiency',
      desc: '3-phase motors do not require failure-prone start capacitors or run capacitors. They draw significantly lower amperage per phase compared to single-phase motors of the same horsepower, resulting in massive long-term reductions in the factory\'s electricity consumption.',
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: 'D. Lower Operating Cost',
      desc: 'The initial capital investment in a 3-phase motor is often lower than a massive single-phase motor, and the electrical infrastructure required (smaller wire gauges, smaller breakers) is much cheaper to install. Combined with the energy savings, the Total Cost of Ownership (TCO) is incredibly low.',
    },
  ];

  return (
    <Section aria-labelledby="why-3-phase-heading" bg="gray" id="why-3-phase">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading id="why-3-phase-heading" variant="section" as="h2" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            Why Industrial Plants Prefer 3 Phase Systems
          </Heading>
          <p className="text-lg text-brand-steelGray font-body">
            Plant engineers and automation integrators exclusively specify 3-phase hydraulic power units for continuous-duty manufacturing for several critical physics-based reasons:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
          {reasons.map((comp, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200 p-8 transition-all duration-350 ease-premium hover:shadow-float hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red group"
            >
              <div className="flex items-center gap-4 mb-5">
                <IconBox icon={comp.icon} variant="primary" size="md" />
              </div>
              <Heading variant="subsection" as="h3" className="text-xl font-display font-bold text-honeywell-navy mb-3 group-hover:text-honeywell-red transition-colors">
                {comp.title}
              </Heading>
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

/* ─── 04 Comparison Section ─── */
function ComparisonSection() {
  return (
    <Section aria-labelledby="comparison-heading" bg="white" id="comparison">
      <Container>
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <Heading id="comparison-heading" variant="section" as="h2" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            3 Phase vs. Single Phase Power Packs
          </Heading>
          <p className="text-lg text-brand-steelGray font-body">
            Understanding when to specify a 3-phase unit versus a standard single-phase unit is critical for plant electrical planning.
          </p>
        </div>

        <div className="max-w-5xl mx-auto overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-sm">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-slate-200 bg-honeywell-navy text-white">
                <th className="px-6 py-4 font-display font-bold text-lg w-[20%]">Engineering Feature</th>
                <th className="px-6 py-4 font-display font-bold text-lg w-[40%] border-l border-white/20">3 Phase Hydraulic Power Packs</th>
                <th className="px-6 py-4 font-display font-bold text-lg w-[40%] border-l border-white/20">Single Phase Hydraulic Power Packs</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="hover:bg-brand-surfaceGray/50">
                <td className="px-6 py-4 font-semibold text-brand-darkSlate">Electrical Input</td>
                <td className="px-6 py-4 text-brand-darkSlate border-l border-slate-200">415V / 440V (Three alternating currents)</td>
                <td className="px-6 py-4 text-brand-darkSlate border-l border-slate-200">220V / 240V (Single alternating current)</td>
              </tr>
              <tr className="hover:bg-brand-surfaceGray/50 bg-brand-surfaceGray/30">
                <td className="px-6 py-4 font-semibold text-brand-darkSlate">Duty Cycle</td>
                <td className="px-6 py-4 text-honeywell-navy font-bold border-l border-slate-200">Continuous (100% Duty Cycle)</td>
                <td className="px-6 py-4 text-honeywell-red border-l border-slate-200">Intermittent (Prone to overheating if run constantly)</td>
              </tr>
              <tr className="hover:bg-brand-surfaceGray/50">
                <td className="px-6 py-4 font-semibold text-brand-darkSlate">Horsepower Limits</td>
                <td className="px-6 py-4 text-brand-darkSlate border-l border-slate-200">Virtually unlimited (Fractional up to 200+ HP)</td>
                <td className="px-6 py-4 text-brand-darkSlate border-l border-slate-200">Practically limited to 5 HP (due to extreme amp draw)</td>
              </tr>
              <tr className="hover:bg-brand-surfaceGray/50 bg-brand-surfaceGray/30">
                <td className="px-6 py-4 font-semibold text-brand-darkSlate">Motor Components</td>
                <td className="px-6 py-4 text-brand-darkSlate border-l border-slate-200">Simple, highly reliable (No capacitors/centrifugal switches)</td>
                <td className="px-6 py-4 text-brand-darkSlate border-l border-slate-200">Complex (Requires start/run capacitors that frequently fail)</td>
              </tr>
              <tr className="hover:bg-brand-surfaceGray/50">
                <td className="px-6 py-4 font-semibold text-brand-darkSlate">Operating Torque</td>
                <td className="px-6 py-4 text-honeywell-navy border-l border-slate-200">Smooth, continuous torque delivery</td>
                <td className="px-6 py-4 text-brand-darkSlate border-l border-slate-200">Pulsating torque</td>
              </tr>
              <tr className="hover:bg-brand-surfaceGray/50 bg-brand-surfaceGray/30">
                <td className="px-6 py-4 font-semibold text-brand-darkSlate">Primary Application</td>
                <td className="px-6 py-4 text-honeywell-navy font-bold border-l border-slate-200">Factory automation, heavy manufacturing, continuous processing</td>
                <td className="px-6 py-4 text-brand-darkSlate border-l border-slate-200">Home garages, light commercial lifts, remote single-phase grids</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="max-w-4xl mx-auto mt-8 bg-brand-lightSurface p-6 rounded-lg border-l-4 border-honeywell-navy">
          <p className="text-brand-darkSlate font-body italic">
            *If you are operating a small car lift in a residential garage, a single-phase unit is sufficient. If you are operating an automated production line, a CNC machine, or a massive material handling system inside a GIDC, the <strong>3 Phase Hydraulic Power Pack</strong> is the only safe and efficient choice.*
          </p>
        </div>
      </Container>
    </Section>
  );
}

/* ─── 05 Technical Specifications ─── */
function TechnicalSpecifications() {
  return (
    <Section aria-labelledby="technical-specifications-heading" bg="gray" id="technical-specifications">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <Heading id="technical-specifications-heading" variant="section" as="h2" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
              Technical Specifications Framework
            </Heading>
            <p className="text-lg text-brand-steelGray font-body mb-8">
              Our 3-phase industrial power packs are engineered for absolute fluid consistency and thermal stability in continuous manufacturing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/request-quote" variant="primary" size="md" className="font-bold">
                DISCUSS YOUR SPECS <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button href="#" variant="outline" size="md">
                MOTOR AMP DRAW CALCULATORS
              </Button>
            </div>
          </div>
          <SpecTable title="Standard Capabilities" rows={TECHNICAL_SPECS} />
        </div>
      </Container>
    </Section>
  );
}

/* ─── 06 Industries Served ─── */
function IndustriesSection() {
  const industries = [
    {
      icon: <Settings className="w-6 h-6" />,
      name: 'Manufacturing & Heavy Fabrication',
      desc: 'Supplying continuous, high-volume flow for heavy steel processing, shearing, and metal bending machinery.',
      link: '#'
    },
    {
      icon: <Cog className="w-6 h-6" />,
      name: 'Industrial Automation',
      desc: 'Designing highly compact, vibration-free 3-phase units for automated robotic clamping and CNC loading cells.',
      link: '#'
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      name: 'Process Industries',
      desc: 'Delivering robust, thermally stable power units for continuous chemical mixing and plastic extrusion environments.',
      link: '#'
    },
    {
      icon: <Truck className="w-6 h-6" />,
      name: 'Material Handling',
      desc: 'Providing fail-safe AC power packs for massive factory gantry cranes and continuous conveyor routing systems.',
      link: '#'
    },
  ];

  return (
    <Section aria-labelledby="industries-heading" bg="white" id="industries">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading id="industries-heading" variant="section" as="h2" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            Industries Served
          </Heading>
          <p className="text-lg text-brand-steelGray font-body">
            Our custom AC industrial power units are the central fluid generation engines for continuous-manufacturing sectors:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {industries.map((ind, idx) => (
              <div key={idx}>
                <IndustryCard
                  industryName={ind.name}
                  description={ind.desc}
                  icon={ind.icon}
                  href={ind.link || '/industries'}
                />
              </div>
            ))}
          </div>
      </Container>
    </Section>
  );
}

/* ─── 07 Engineering Considerations ─── */
function EngineeringConsiderations() {
  return (
    <Section aria-labelledby="engineering-considerations-heading" bg="gray" id="engineering-considerations">
      <Container>
        <div className="max-w-4xl mx-auto">
          <Heading id="engineering-considerations-heading" variant="section" as="h2" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-6">
            Engineering Considerations (Specifying AC Systems)
          </Heading>
          <p className="text-brand-darkSlate font-body text-lg mb-8">
            Our{' '}
            <Link href="#" className="text-honeywell-red font-semibold hover:underline">
              Custom Hydraulic System Design
            </Link>{' '}
            team analyzes your factory's electrical grid and machine duty cycle before engineering an industrial power pack.
          </p>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              <Heading variant="subsection" as="h3" className="text-xl font-bold text-honeywell-navy mb-3 flex items-center">
                <Zap className="w-5 h-5 mr-3 text-honeywell-red" />
                A. Motor Selection & Efficiency Ratings
              </Heading>
              <p className="text-brand-steelGray font-body leading-relaxed">
                We specify highly efficient IE2, IE3, or IE4 rated 3-phase induction motors. By accurately calculating the exact fluid volume (LPM) and system pressure (Bar) required by your machine, we select the smallest possible motor horsepower that can handle the peak load, drastically lowering your factory's reactive power consumption.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              <Heading variant="subsection" as="h3" className="text-xl font-bold text-honeywell-navy mb-3 flex items-center">
                <Thermometer className="w-5 h-5 mr-3 text-honeywell-red" />
                B. Duty Cycles & Heat Management
              </Heading>
              <p className="text-brand-steelGray font-body leading-relaxed">
                Even with an efficient 3-phase motor, pushing oil through a circuit 24 hours a day generates fluid heat. We engineer massive fabricated steel reservoirs to act as massive heat sinks, allowing the fluid to cool naturally and aerate properly. For high-cycle automated machinery, we integrate automated shell-and-tube water coolers or thermostatically controlled air-blast heat exchangers to maintain the oil at an optimal 45°C.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              <Heading variant="subsection" as="h3" className="text-xl font-bold text-honeywell-navy mb-3 flex items-center">
                <ShieldAlert className="w-5 h-5 mr-3 text-honeywell-red" />
                C. Reliability Planning & Filtration
              </Heading>
              <p className="text-brand-steelGray font-body leading-relaxed">
                In continuous-duty operations, fluid contamination causes catastrophic downtime. We equip our 3-phase power packs with oversized, 10-micron absolute return line filters, offline kidney-loop filtration systems, and electronic clogging indicators that alert your PLC <em>before</em> dirt destroys the hydraulic pump.
              </p>
            </div>
          </div>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Heading id="manufacturing-process-heading" variant="section" as="h2" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-6">
              Manufacturing & Testing Process
            </Heading>
            <p className="text-brand-darkSlate font-body text-lg mb-8 leading-relaxed">
              Every 3-phase power unit is built in-house and validated rigorously for thermal and pressure stability.
            </p>

            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Cog className="w-6 h-6 text-honeywell-red" />
                </div>
                <div className="ml-4">
                  <Heading variant="card" as="h4" className="text-lg font-bold text-honeywell-navy">Laser Motor Alignment</Heading>
                  <p className="text-brand-steelGray font-body mt-1">
                    The 3-phase electric motor and hydraulic pump are mounted on a precision-machined bell housing and coupled using laser alignment. This guarantees absolute concentricity, eliminating vibration and preventing pump shaft seal failures.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Hammer className="w-6 h-6 text-honeywell-red" />
                </div>
                <div className="ml-4">
                  <Heading variant="card" as="h4" className="text-lg font-bold text-honeywell-navy">Custom Reservoir Fabrication</Heading>
                  <p className="text-brand-steelGray font-body mt-1">
                    We laser-cut and seam-weld custom steel reservoirs in-house, integrating internal baffle plates to prevent oil foaming and ensure complete fluid de-aeration during continuous pumping.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Activity className="w-6 h-6 text-honeywell-red" />
                </div>
                <div className="ml-4">
                  <Heading variant="card" as="h4" className="text-lg font-bold text-honeywell-navy">Continuous Run Validation</Heading>
                  <p className="text-brand-steelGray font-body mt-1">
                    100% of our industrial power packs undergo rigorous 24-hour continuous-run testing on our dynamometer rigs. We monitor motor amperage draw, fluid temperature rise, and pressure stability before authorizing shipment.
                  </p>
                </div>
              </li>
            </ul>
            
            <div className="mt-8 bg-brand-surfaceGray p-4 rounded-lg border border-slate-200">
              <p className="text-sm text-honeywell-navy font-semibold flex items-center">
                <ShieldAlert className="w-4 h-4 mr-2 text-honeywell-red" />
                Backed by a strict [WARRANTY_MONTHS]-Month Defect Warranty.
              </p>
            </div>
          </div>

          <div className="relative aspect-square lg:aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/hero/hydraulic-cylinder-manufacturing-ahmedabad.webp" // Placeholder, will be replaced with power pack validation image later
              alt="Hydraulic Power Pack Testing Facility"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-honeywell-navy/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <Badge variant="custom" className="mb-3">QA LAB</Badge>
              <Heading variant="subsection" as="h3" className="text-white text-xl font-bold">24-Hour Dynamometer Testing</Heading>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ─── 09 Project Spotlight ─── */
function ProjectSpotlight() {
  return (
    <Section aria-labelledby="project-spotlight-heading" bg="gray" id="project-spotlight">
      <Container>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <Badge variant="custom" className="w-fit mb-6">PROJECT SPOTLIGHT</Badge>
              <Heading id="project-spotlight-heading" variant="section" as="h2" className="text-3xl font-display font-bold text-honeywell-navy mb-6">
                Continuous-Duty 3-Phase Power Pack for an Automated Textile Calendering Machine
              </Heading>
              
              <div className="space-y-6">
                <div>
                  <Heading variant="card" as="h4" className="text-honeywell-red font-bold mb-2 uppercase text-sm tracking-wider">The Challenge</Heading>
                  <p className="text-brand-steelGray font-body leading-relaxed">
                    The client's automated calendering machine in Surat was operating on an under-sized, single-phase power unit. Running 24 hours a day to meet export demands, the single-phase motor constantly overheated and tripped thermal breakers. The pulsating pressure also caused microscopic variations in textile fabric tension.
                  </p>
                </div>
                
                <div>
                  <Heading variant="card" as="h4" className="text-honeywell-red font-bold mb-2 uppercase text-sm tracking-wider">The Solution</Heading>
                  <p className="text-brand-steelGray font-body leading-relaxed">
                    Honeywell redesigned the fluid generation system entirely, manufacturing a custom 3-Phase Hydraulic Power Pack utilizing a premium-efficiency IE3 motor and a variable displacement vane pump. We integrated a massive 200-liter baffled reservoir with a dedicated offline cooling circuit.
                  </p>
                </div>
                
                <div>
                  <Heading variant="card" as="h4" className="text-honeywell-red font-bold mb-2 uppercase text-sm tracking-wider">The Outcome</Heading>
                  <p className="text-honeywell-navy font-body font-semibold leading-relaxed">
                    The 3-phase motor delivered flawlessly smooth torque, completely stabilizing hydraulic pressure and eliminating fabric tensioning issues. The new power pack has run continuously for 14 months without a single thermal shutdown, saving the plant over ₹45,000 in monthly electricity costs.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative min-h-[300px] bg-honeywell-navy flex flex-col items-center justify-center p-12 text-center text-white">
               <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
               <Activity className="w-16 h-16 text-honeywell-red mb-6 relative z-10" />
               <div className="text-5xl font-bold mb-2 relative z-10">₹45,000</div>
               <div className="text-xl font-medium text-white/80 relative z-10">Monthly Energy Savings</div>
               <div className="text-5xl font-bold mb-2 relative z-10">100%</div>
               <div className="text-xl font-medium text-white/80 relative z-10">Duty Cycle Uptime</div>
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
      title: 'Hydraulic Power Packs Hub',
      desc: 'Explore our master category of power packs.',
      link: '/products/hydraulic-power-packs/',
      icon: <Zap className="w-6 h-6 text-honeywell-red" />
    },
    {
      title: 'High-Low Logic Power Packs',
      desc: 'Specialized power units for press machinery.',
      link: '#',
      icon: <Activity className="w-6 h-6 text-honeywell-red" />
    },
    {
      title: 'Hydraulic Cylinders Hub',
      desc: 'Explore our master category of hydraulic cylinders.',
      link: '/products/hydraulic-cylinders/',
      icon: <Box className="w-6 h-6 text-honeywell-red" />
    },
    {
      title: 'Complete Hydraulic Systems',
      desc: 'Turnkey automated systems with PLC integration.',
      link: '#',
      icon: <Settings className="w-6 h-6 text-honeywell-red" />
    }
  ];

  return (
    <Section aria-labelledby="related-products-heading" bg="white" id="related-products">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading id="related-products-heading" variant="section" as="h2" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            Related Products
          </Heading>
          <p className="text-lg text-brand-steelGray font-body">
            A continuous-duty 3-phase power pack provides the heartbeat of your factory. Connect it to our extreme-duty industrial components:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <Link key={idx} href={product.link} className="group block h-full">
              <div className="bg-brand-surfaceGray border border-slate-200 rounded-xl p-6 h-full transition-all duration-350 ease-premium hover:shadow-float hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red flex flex-col">
                <div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {product.icon}
                </div>
                <Heading variant="subsection" as="h3" className="text-lg font-bold text-honeywell-navy mb-2 group-hover:text-honeywell-red transition-colors">
                  {product.title}
                </Heading>
                <p className="text-brand-steelGray text-sm leading-relaxed mb-4 flex-grow">
                  {product.desc}
                </p>
                <div className="flex items-center text-honeywell-red font-semibold text-sm mt-auto">
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

/* ─── 11 Related Services ─── */
function RelatedServices() {
  const services = [
    {
      title: 'Custom Hydraulic System Design',
      desc: 'We design the entire factory circuit, calculating the exact motor horsepower and cooling tonnage required for continuous operation.',
      link: '#',
      icon: <FileCheck className="w-6 h-6 text-honeywell-navy" />
    },
    {
      title: 'OEM Hydraulic Manufacturing',
      desc: 'High-volume, repeatable production of standard 3-phase power units specifically for CNC and SPM machine builders.',
      link: '#',
      icon: <Settings className="w-6 h-6 text-honeywell-navy" />
    },
    {
      title: 'Hydraulic Consulting',
      desc: 'Hire our systems architects to audit your factory\'s electrical efficiency and recommend power unit upgrades to lower your grid consumption.',
      link: '#',
      icon: <MessageCircle className="w-6 h-6 text-honeywell-navy" />
    }
  ];

  return (
    <Section aria-labelledby="related-services-heading" bg="gray" id="related-services">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading id="related-services-heading" variant="section" as="h2" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            Related Services
          </Heading>
          <p className="text-lg text-brand-steelGray font-body">
            Purchasing an industrial AC power unit is an investment in factory uptime. Leverage our heavy engineering services:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-brand-lightSurface rounded-lg flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <Heading variant="subsection" as="h3" className="text-xl font-bold text-honeywell-navy mb-3">{service.title}</Heading>
              <p className="text-brand-steelGray font-body leading-relaxed mb-6">
                {service.desc}
              </p>
              <Link href={service.link} className="inline-flex items-center text-honeywell-red font-bold hover:underline">
                Explore Service <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
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
    <SiteFAQSection
      faqs={FAQS}
      title="Frequently Asked Questions"
      description="Technical answers from our AC systems engineering team."
      injectSchema={false}
    />
  );
}

