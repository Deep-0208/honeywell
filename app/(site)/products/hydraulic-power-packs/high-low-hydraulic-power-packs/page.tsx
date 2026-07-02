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
import { HIGH_LOW_FAQS, HIGH_LOW_SPECS, HIGH_LOW_FEATURES, HIGH_LOW_INDUSTRIES } from '@/data/hydraulic-power-packs/high-low-hydraulic-power-packs';
import {
  ArrowRight,
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
  'High Low Hydraulic Power Pack Manufacturer | Honeywell';
const PAGE_DESCRIPTION =
  'Leading high low hydraulic power pack manufacturer. We engineer dual-pump, energy-efficient power units specifically for hydraulic presses and forging machines.';
const PAGE_URL = '/products/hydraulic-power-packs/high-low-hydraulic-power-packs';
const PAGE_IMAGE = '/images/products/hydraulic-power-packs/hydraulic-power-pack-single-phase.webp';

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
        mainEntity: HIGH_LOW_FAQS.map((faq) => ({
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
      <SiteLocationsSection
        title="Local OEM Support in Gujarat"
        description="As a premier high-low hydraulic power pack manufacturer in Gujarat, we provide direct energy-efficiency consulting and heavy-freight delivery to forging hubs and press OEMs across the state."
      />

      {/* ─── 14 FAQs ─── */}
      <SiteFAQSection faqs={HIGH_LOW_FAQS} />

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
              <span className="text-brand-steelGray text-sm font-medium">High Low Hydraulic Power Packs</span>
            </div>

            <Heading variant="section" as="h1" className=" lg:text-[3.25rem] font-display font-bold text-honeywell-navy leading-[1.1] mb-6">
              High Low Hydraulic Power Pack Manufacturer
            </Heading>

            <p className="text-lg text-brand-darkSlate font-body mb-8 max-w-xl leading-relaxed text-justify">
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
                className="w-full sm:w-auto bg-white hover:bg-brand-surfaceGray"
              >
                SCHEDULE EFFICIENCY AUDIT <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            
            
            
          </div>

          {/* Image Column */}
          <div className="relative w-full aspect-[4/3] lg:aspect-square bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden group">
            <div className="absolute inset-0 bg-brand-surfaceGray opacity-50 rounded-xl" />
            <Image
              src="/images/products/high-low-hydraulic-power-pack-manufacturer.webp"
              alt="High Low Hydraulic Power Pack Manufacturer in Ahmedabad - Dual pump press unit by Honeywell Hydraulics"
              fill
              priority fetchPriority="high" decoding="sync" quality={85}
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
                Pump Architecture
              </span>
              <span className="block text-sm font-mono text-honeywell-navy font-semibold">
                Tandem High/Low
              </span>
            </div>
            <div className="px-6 flex-1 text-center group cursor-default">
              <span className="block text-xs font-bold text-brand-steelGray uppercase tracking-wider mb-1 group-hover:text-honeywell-red transition-colors duration-300">
                Max Press Pressure
              </span>
              <span className="block text-sm font-mono text-honeywell-navy font-semibold">
                Up to 500 Bar
              </span>
            </div>
            <div className="px-6 flex-1 text-center group cursor-default">
              <span className="block text-xs font-bold text-brand-steelGray uppercase tracking-wider mb-1 group-hover:text-honeywell-red transition-colors duration-300">
                Energy Efficiency
              </span>
              <span className="block text-sm font-mono text-honeywell-red font-semibold">
                Up to 70% Savings
              </span>
            </div>
            <div className="px-6 flex-1 text-center group cursor-default">
              <span className="block text-xs font-bold text-brand-steelGray uppercase tracking-wider mb-1 group-hover:text-honeywell-red transition-colors duration-300">
                Primary Application
              </span>
              <span className="block text-sm font-mono text-honeywell-navy font-semibold">
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
    <Section aria-labelledby="overview-heading" bg="white" id="overview">
      <Container>
        <div className="max-w-4xl mx-auto">
          <Heading id="overview-heading" variant="section" as="h2" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-6" underline="center">
            What Is A High Low Hydraulic Power Pack?
          </Heading>
          <div className="space-y-5 text-brand-darkSlate font-body text-lg leading-relaxed">
            <p>
              In the vast majority of heavy industrial pressing operations, the machine requires two completely different physical profiles during a single cycle: it needs to close the massive press die extremely fast (requiring high flow), and then it needs to crush the metal with immense force (requiring high pressure).
            </p>
            <p>
              A conventional single-pump power unit is fundamentally inefficient at handling this.
            </p>
            <p>
              A <strong className="text-honeywell-navy">High Low Hydraulic Power Pack</strong> (often called a Dual Pump Power Unit) solves this physics problem. Instead of one large pump, it utilizes a tandem double-pump configuration driven by a single electric motor. As a leading <strong>hydraulic press power pack supplier</strong>, we engineer these systems to automatically sequence a high-volume gear pump and a high-pressure radial piston pump. This mechanical intelligence allows the power pack to deliver exactly what the machine needs, the exact millisecond it needs it, resulting in monumental energy savings.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ─── 03 How It Works ─── */
function HowItWorks() {
  

  return (
    <Section aria-labelledby="how-it-works-heading" bg="gray" id="how-it-works">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading id="how-it-works-heading" variant="section" as="h2" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4" underline="center">
            How High-Low Circuits Work
          </Heading>
          <p className="text-lg text-brand-steelGray font-body text-justify">
            The intelligence of a High-Low power pack relies on a specialized hydraulic component called the <strong>Unloading Valve</strong>, which dictates the behavior of the two pumps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {HIGH_LOW_FEATURES.map((comp, idx) => (
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
              <p className="text-brand-steelGray font-body text-sm leading-relaxed text-justify">
                {comp.description}
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
    <Section aria-labelledby="necessity-heading" bg="white" id="necessity">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <TrendingDown className="w-12 h-12 text-honeywell-red mx-auto mb-6" />
          <Heading id="necessity-heading" variant="section" as="h2" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-6" underline="center">
            Why Press Machines Demand High-Low Systems
          </Heading>
          <p className="text-lg text-brand-darkSlate font-body mb-6 leading-relaxed text-justify">
            Machine builders who try to build a 500-ton press using a standard single-pump power unit face catastrophic engineering failures. To get the press to close fast, they need a huge pump. To get the press to crush metal, they need huge pressure.
          </p>
          <p className="text-lg text-brand-darkSlate font-body mb-8 leading-relaxed text-justify">
            If they use a single huge pump at huge pressure, they must install a massive 150 HP electric motor. This motor will consume incredible amounts of electricity, generate enough heat to boil the hydraulic oil, and destroy the fluid viscosity in days.
          </p>
          <div className="bg-brand-surfaceGray border-l-4 border-honeywell-red p-6 rounded-r-lg text-left inline-block w-full">
            <p className="text-honeywell-navy font-semibold text-lg text-justify">
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
    <Section aria-labelledby="comparison-heading" bg="gray" id="comparison">
      <Container>
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <Heading id="comparison-heading" variant="section" as="h2" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4" underline="center">
            High-Low vs. Conventional Power Packs
          </Heading>
          <p className="text-lg text-brand-steelGray font-body text-justify">
            Understanding the mechanical advantage of dual-pump logic is critical for plant profitability.
          </p>
        </div>

        <div className="max-w-5xl mx-auto overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-sm">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-slate-200 bg-honeywell-navy text-white">
                <th className="px-6 py-4 font-display font-bold text-lg w-[20%]">Engineering Feature</th>
                <th className="px-6 py-4 font-display font-bold text-lg w-[40%] border-l border-white/20">High-Low Hydraulic Power Packs</th>
                <th className="px-6 py-4 font-display font-bold text-lg w-[40%] border-l border-white/20">Conventional Single-Pump Units</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="hover:bg-brand-surfaceGray/50">
                <td className="px-6 py-4 font-semibold text-brand-darkSlate">Pump Architecture</td>
                <td className="px-6 py-4 text-honeywell-navy font-semibold border-l border-slate-200">Dual tandem pumps (1 High Flow, 1 High Pressure)</td>
                <td className="px-6 py-4 text-brand-darkSlate border-l border-slate-200">Single Pump (Fixed displacement)</td>
              </tr>
              <tr className="hover:bg-brand-surfaceGray/50 bg-brand-surfaceGray/30">
                <td className="px-6 py-4 font-semibold text-brand-darkSlate">Motor Size Required</td>
                <td className="px-6 py-4 text-honeywell-red font-bold border-l border-slate-200">Extremely Small (Highly energy efficient)</td>
                <td className="px-6 py-4 text-brand-darkSlate border-l border-slate-200">Massively Oversized (Highly inefficient)</td>
              </tr>
              <tr className="hover:bg-brand-surfaceGray/50">
                <td className="px-6 py-4 font-semibold text-brand-darkSlate">Heat Generation</td>
                <td className="px-6 py-4 text-honeywell-navy border-l border-slate-200">Very Low (Fluid bypasses to tank at low pressure)</td>
                <td className="px-6 py-4 text-brand-darkSlate border-l border-slate-200">Extremely High (Fluid shears through relief valves)</td>
              </tr>
              <tr className="hover:bg-brand-surfaceGray/50 bg-brand-surfaceGray/30">
                <td className="px-6 py-4 font-semibold text-brand-darkSlate">Operating Cycle Speed</td>
                <td className="px-6 py-4 text-brand-darkSlate border-l border-slate-200">Fast approach, controlled slow pressing</td>
                <td className="px-6 py-4 text-brand-darkSlate border-l border-slate-200">Constant speed throughout the stroke</td>
              </tr>
              <tr className="hover:bg-brand-surfaceGray/50">
                <td className="px-6 py-4 font-semibold text-brand-darkSlate">Primary Application</td>
                <td className="px-6 py-4 text-honeywell-navy font-bold border-l border-slate-200">Hydraulic presses, forging, metal stamping</td>
                <td className="px-6 py-4 text-brand-darkSlate border-l border-slate-200">Constant-load applications</td>
              </tr>
              <tr className="hover:bg-brand-surfaceGray/50 bg-brand-surfaceGray/30">
                <td className="px-6 py-4 font-semibold text-brand-darkSlate">Operating Cost</td>
                <td className="px-6 py-4 text-honeywell-red font-bold border-l border-slate-200">Incredibly Low (Saves massive amounts of electricity)</td>
                <td className="px-6 py-4 text-brand-darkSlate border-l border-slate-200">Very High</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="max-w-4xl mx-auto mt-8 bg-white p-6 rounded-lg border-l-4 border-honeywell-red">
          <p className="text-brand-darkSlate font-body italic text-justify">
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
    <Section aria-labelledby="technical-specifications-heading" bg="white" id="technical-specifications">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <Heading id="technical-specifications-heading" variant="section" as="h2" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4" underline="center">
              Technical Specifications Framework
            </Heading>
            <p className="text-lg text-brand-steelGray font-body mb-8 text-justify">
              Our high-low systems are mathematically calibrated to provide exact unloading sequencing for maximum efficiency.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/request-quote" variant="primary" size="md" className="font-bold">
                DISCUSS YOUR SPECS <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button href="#" variant="outline" size="md">
                ENERGY CALCULATORS
              </Button>
            </div>
          </div>
          <SpecTable title="Standard Capabilities" rows={HIGH_LOW_SPECS} />
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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading id="industries-heading" variant="section" as="h2" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4" underline="center">
            Industries Served
          </Heading>
          <p className="text-lg text-brand-steelGray font-body text-justify">
            Our custom dual-pump power units are the primary fluid generation engines for heavy fabrication and metal forming:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {HIGH_LOW_INDUSTRIES.map((ind, idx) => (
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

/* ─── 08 Engineering Considerations ─── */
function EngineeringConsiderations() {
  return (
    <Section aria-labelledby="engineering-considerations-heading" bg="white" id="engineering-considerations">
      <Container>
        <div className="max-w-4xl mx-auto">
          <Heading id="engineering-considerations-heading" variant="section" as="h2" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-6" underline="center">
            Engineering Considerations (Specifying High-Low Systems)
          </Heading>
          <p className="text-brand-darkSlate font-body text-lg mb-8 text-justify">
            Our{' '}
            <Link href="#" className="text-honeywell-red font-semibold hover:underline">
              Custom Hydraulic System Design
            </Link>{' '}
            team mathematically guarantees the efficiency of your press machine.
          </p>

          <div className="space-y-6">
            <div className="bg-brand-surfaceGray p-6 rounded-lg border border-slate-200 shadow-sm">
              <Heading variant="subsection" as="h3" className="text-xl font-bold text-honeywell-navy mb-3 flex items-center">
                <Activity className="w-5 h-5 mr-3 text-honeywell-red" />
                A. Pump & Motor Sizing
              </Heading>
              <p className="text-brand-steelGray font-body leading-relaxed text-justify">
                This is a delicate mathematical balance. We calculate the exact volume required for your desired "fast approach" time to size the low-pressure gear pump. Then, we calculate the exact fluid volume required to maintain the pressing speed at maximum tonnage to size the high-pressure radial piston pump. Finally, we calculate the combined horsepower draw exactly at the unloading point to specify the smallest possible electric motor.
              </p>
            </div>

            <div className="bg-brand-surfaceGray p-6 rounded-lg border border-slate-200 shadow-sm">
              <Heading variant="subsection" as="h3" className="text-xl font-bold text-honeywell-navy mb-3 flex items-center">
                <Settings className="w-5 h-5 mr-3 text-honeywell-red" />
                B. Unloading Pressure Management
              </Heading>
              <p className="text-brand-steelGray font-body leading-relaxed text-justify">
                If the unloading valve is set too low, the large pump will dump to the tank before the press reaches the workpiece, causing the cylinder to crawl slowly. If set too high, the electric motor will stall and trip the breaker. We utilize highly precise, pilot-operated unloading valves integrated into custom Manifold Blocks to ensure exact sequence timing.
              </p>
            </div>

            <div className="bg-brand-surfaceGray p-6 rounded-lg border border-slate-200 shadow-sm">
              <Heading variant="subsection" as="h3" className="text-xl font-bold text-honeywell-navy mb-3 flex items-center">
                <Thermometer className="w-5 h-5 mr-3 text-honeywell-red" />
                C. Heat Generation & Cooling
              </Heading>
              <p className="text-brand-steelGray font-body leading-relaxed text-justify">
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
    <Section aria-labelledby="manufacturing-process-heading" bg="gray" id="manufacturing-process">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Heading id="manufacturing-process-heading" variant="section" as="h2" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-6" underline="center">
              Manufacturing & Quality Process
            </Heading>
            <p className="text-brand-darkSlate font-body text-lg mb-8 leading-relaxed text-justify">
              Precision machining and rigorous testing ensure your unloading logic works perfectly every single cycle.
            </p>

            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Cog className="w-6 h-6 text-honeywell-red" />
                </div>
                <div className="ml-4">
                  <Heading variant="card" as="h4" className="text-lg font-bold text-honeywell-navy">Precision Valve Assembly</Heading>
                  <p className="text-brand-steelGray font-body mt-1 text-justify">
                    High-Low logic relies entirely on the rapid shifting of the unloading valve. We CNC-machine custom aluminum and steel manifolds to house these cartridge valves, eliminating exterior pipework and preventing pressure drops.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Box className="w-6 h-6 text-honeywell-red" />
                </div>
                <div className="ml-4">
                  <Heading variant="card" as="h4" className="text-lg font-bold text-honeywell-navy">Laser Alignment</Heading>
                  <p className="text-brand-steelGray font-body mt-1 text-justify">
                    The electric motor is coupled to the tandem dual-pump bracket using laser alignment tools to ensure absolute concentricity, eliminating vibration and preventing shaft seal blowouts.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-honeywell-red" />
                </div>
                <div className="ml-4">
                  <Heading variant="card" as="h4" className="text-lg font-bold text-honeywell-navy">Simulated Press Testing</Heading>
                  <p className="text-brand-steelGray font-body mt-1 text-justify">
                    100% of our High-Low power packs undergo rigorous testing on our simulated press rigs. We verify the exact millisecond the unloading valve triggers, ensuring a seamless transition from high-speed approach to high-pressure pressing.
                  </p>
                </div>
              </li>
            </ul>
            
            <div className="mt-8 bg-white p-4 rounded-lg border border-slate-200">
              <p className="text-sm text-honeywell-navy font-semibold flex items-center text-justify">
                <ShieldAlert className="w-4 h-4 mr-2 text-honeywell-red" />
                Backed by a strict [WARRANTY_MONTHS]-Month Defect Warranty.
              </p>
            </div>
          </div>

          <div className="relative aspect-square lg:aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-slate-200">
            <Image
              src="/images/hero/hydraulic-cylinder-manufacturing-ahmedabad.webp" // Placeholder
              alt="Hydraulic Logic Testing Facility"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-honeywell-navy/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <Badge variant="custom" className="mb-3">QA LAB</Badge>
              <Heading variant="subsection" as="h3" className="text-white text-xl font-bold">Unloading Valve Sequence Verification</Heading>
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
    <Section aria-labelledby="project-spotlight-heading" bg="white" id="project-spotlight">
      <Container>
        <div className="bg-brand-surfaceGray rounded-2xl shadow-sm overflow-hidden border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <Badge variant="custom" className="w-fit mb-6">PROJECT SPOTLIGHT</Badge>
              <Heading id="project-spotlight-heading" variant="section" as="h2" className="text-3xl font-display font-bold text-honeywell-navy mb-6" underline="center">
                Energy Efficiency Retrofit for a 400-Ton Sheet Metal Deep Drawing Press
              </Heading>
              
              <div className="space-y-6">
                <div>
                  <Heading variant="card" as="h4" className="text-honeywell-red font-bold mb-2 uppercase text-sm tracking-wider">The Challenge</Heading>
                  <p className="text-brand-steelGray font-body leading-relaxed text-justify">
                    An automotive stamping supplier in Sanand operated a 400-ton press powered by an outdated single-pump system and a massive 80 HP motor. The motor constantly drew peak amperage, the hydraulic oil boiled past 85°C, and massive electricity bills decimated profit margins.
                  </p>
                </div>
                
                <div>
                  <Heading variant="card" as="h4" className="text-honeywell-red font-bold mb-2 uppercase text-sm tracking-wider">The Solution</Heading>
                  <p className="text-brand-steelGray font-body leading-relaxed text-justify">
                    Honeywell performed a complete system teardown and designed a custom High-Low Hydraulic Power Pack. By implementing dual-pump unloading logic, we replaced the 80 HP motor with a tiny 25 HP motor, while perfectly maintaining the exact same 6-second cycle time.
                  </p>
                </div>
                
                <div>
                  <Heading variant="card" as="h4" className="text-honeywell-red font-bold mb-2 uppercase text-sm tracking-wider">The Outcome</Heading>
                  <p className="text-honeywell-navy font-body font-semibold leading-relaxed text-justify">
                    Electrical consumption dropped by 65%. Oil temperatures stabilized naturally at 45°C without the use of an industrial chiller, achieving a complete return on investment within 7 months purely from energy savings.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative min-h-[300px] bg-honeywell-navy flex flex-col items-center justify-center p-12 text-center text-white">
               <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
               <TrendingDown className="w-16 h-16 text-honeywell-red mb-6 relative z-10" />
               <div className="text-5xl font-bold mb-2 relative z-10">65%</div>
               <div className="text-xl font-medium text-white/80 relative z-10">Electrical Cost Reduction</div>
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
      description: 'Explore our master category of power packs.',
      link: '/products/hydraulic-power-packs/',
      icon: <Zap className="w-6 h-6 text-honeywell-red" />
    },
    {
      title: '3 Phase AC Power Packs',
      description: 'Standard continuous-duty fluid generation units.',
      link: '/products/hydraulic-power-packs/3-phase-hydraulic-power-packs/',
      icon: <Activity className="w-6 h-6 text-honeywell-red" />
    },
    {
      title: 'Welded Hydraulic Cylinders',
      description: 'Extreme-pressure 350+ Bar cylinders for pressing.',
      link: '/products/hydraulic-cylinders/welded-hydraulic-cylinders/',
      icon: <Box className="w-6 h-6 text-honeywell-red" />
    },
    {
      title: 'DC Mini Power Packs',
      description: 'Compact battery-powered mobile units.',
      link: '/products/hydraulic-power-packs/dc-mini-power-packs/',
      icon: <Settings className="w-6 h-6 text-honeywell-red" />
    }
  ];

  return (
    <Section aria-labelledby="related-products-heading" bg="gray" id="related-products">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading id="related-products-heading" variant="section" as="h2" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4" underline="center">
            Related Products
          </Heading>
          <p className="text-lg text-brand-steelGray font-body text-justify">
            A High-Low power pack is the brain of a pressing system. Connect it to our extreme-duty actuators:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <Link key={idx} href={product.link} className="group block h-full">
              <div className="bg-white border border-slate-200 rounded-xl p-6 h-full transition-all duration-350 ease-premium hover:shadow-float hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red flex flex-col">
                <div className="w-12 h-12 bg-brand-surfaceGray rounded-lg border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {product.icon}
                </div>
                <Heading variant="subsection" as="h3" className="text-lg font-bold text-honeywell-navy mb-2 group-hover:text-honeywell-red transition-colors">
                  {product.title}
                </Heading>
                <p className="text-brand-steelGray text-sm leading-relaxed mb-4 flex-grow text-justify">
                  {product.description}
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

/* ─── 12 Related Services ─── */
function RelatedServices() {
  const services = [
    {
      title: 'Hydraulic Consulting',
      description: 'Hire our systems architects to audit your factory floor and calculate exactly how much electricity you can save by upgrading aging presses.',
      link: '#',
      icon: <MessageCircle className="w-6 h-6 text-honeywell-navy" />
    },
    {
      title: 'OEM Hydraulic Manufacturing',
      description: 'High-volume, repeatable production of custom High-Low power units specifically for press machine builders.',
      link: '#',
      icon: <Settings className="w-6 h-6 text-honeywell-navy" />
    },
    {
      title: 'Custom Hydraulic System Design',
      description: 'We will design the entire press circuit, calculating the exact unloading pressures and cylinder bore sizes required.',
      link: '#',
      icon: <FileCheck className="w-6 h-6 text-honeywell-navy" />
    }
  ];

  return (
    <Section aria-labelledby="related-services-heading" bg="white" id="related-services">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading id="related-services-heading" variant="section" as="h2" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4" underline="center">
            Related Services
          </Heading>
          <p className="text-lg text-brand-steelGray font-body text-justify">
            Purchasing a dual-pump power unit is an investment in energy efficiency. Leverage our heavy engineering services:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-brand-surfaceGray rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-white rounded-lg border border-slate-200 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <Heading variant="subsection" as="h3" className="text-xl font-bold text-honeywell-navy mb-3">{service.title}</Heading>
              <p className="text-brand-steelGray font-body leading-relaxed mb-6 text-justify">
                {service.description}
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




