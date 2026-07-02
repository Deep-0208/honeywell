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
  Layers,
  Wrench,
  Cog,
  Building2,
  RefreshCw,
  FileCheck,
  BookOpen,
  Package,
  Cpu,
  Wrench as 
  ShieldCheck,
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
  'Telescopic Hydraulic Cylinder Manufacturer | Honeywell';
const PAGE_DESCRIPTION =
  'Leading telescopic hydraulic cylinder manufacturer in Gujarat. Engineering extreme-stroke, multi-stage cylinders for dump trucks and material handling.';
const PAGE_URL = '/products/hydraulic-cylinders/telescopic-hydraulic-cylinders';
const PAGE_IMAGE = '/images/og/telescopic-hydraulic-cylinders-og.png';

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
  TELESCOPIC_FAQS,
  TELESCOPIC_SPECS,
  TELESCOPIC_STEPS,
  TELESCOPIC_INDUSTRIES,
} from '@/data/hydraulic-cylinders/telescopic-hydraulic-cylinders';

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
        mainEntity: TELESCOPIC_FAQS.map((faq) => ({
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
      <SiteLocationsSection
        title="Telescopic Cylinder Manufacturer in Gujarat"
        description="We provide direct engineering support and heavy-freight delivery to commercial vehicle OEMs across the state."
      />

      {/* ─── 13 FAQs ─── */}
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
              <span className="text-brand-steelGray text-sm font-medium">Telescopic Cylinders</span>
            </div>

            <Heading variant="section" as="h1" className=" lg:text-[3.25rem] font-display font-bold text-honeywell-navy leading-[1.1] mb-6">
              Telescopic Hydraulic Cylinder Manufacturer
            </Heading>

            <p className="text-lg text-brand-darkSlate font-body mb-8 max-w-xl leading-relaxed  text-justify">
              Engineered for massive lifting heights from a minimal footprint. Honeywell Hydraulics is a premier custom telescopic hydraulic cylinder manufacturer in Gujarat, supplying highly robust, multi-stage cylinders exclusively for tipper bodies, dump trucks, and mobile lifting equipment.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <Button
                href="/request-quote"
                size="lg"
                variant="primary"
                className="w-full sm:w-auto font-bold tracking-wide"
              >
                REQUEST OEM QUOTE{' '}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="/contact-us"
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white hover:bg-brand-surfaceGray"
              >
                STROKE CALCULATION{' '}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            

            
          </div>

          {/* Image Column */}
          <div className="relative w-full aspect-[4/3] lg:aspect-square bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden group">
            <div className="absolute inset-0 bg-brand-surfaceGray opacity-50 rounded-xl" />
            <Image
              src="/images/products/hydraulic-cylinders/telescopic-hydraulic-cylinders-manufacturer.webp"
              alt="Telescopic Hydraulic Cylinder Manufacturer in Ahmedabad - Multi-stage tipper cylinder by Honeywell Hydraulics"
              fill
              priority fetchPriority="high" decoding="sync" quality={85}
              className="object-cover scale-[1.05] group-hover:scale-110 transition-transform duration-700 ease-out"
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
                Number of Stages
              </span>
              <span className="block text-sm font-mono text-honeywell-navy font-semibold">
                2 to 5 Stages
              </span>
            </div>
            <div className="px-6 flex-1 text-center group cursor-default">
              <span className="block text-xs font-bold text-brand-steelGray uppercase tracking-wider mb-1 group-hover:text-honeywell-red transition-colors duration-300">
                Total Stroke
              </span>
              <span className="block text-sm font-mono text-honeywell-navy font-semibold">
                Up to 10,000 mm
              </span>
            </div>
            <div className="px-6 flex-1 text-center group cursor-default">
              <span className="block text-xs font-bold text-brand-steelGray uppercase tracking-wider mb-1 group-hover:text-honeywell-red transition-colors duration-300">
                Lifting Capacity
              </span>
              <span className="block text-sm font-mono text-honeywell-navy font-semibold">
                Up to 80+ Tons
              </span>
            </div>
            <div className="px-6 flex-1 text-center group cursor-default">
              <span className="block text-xs font-bold text-brand-steelGray uppercase tracking-wider mb-1 group-hover:text-honeywell-red transition-colors duration-300">
                Action Type
              </span>
              <span className="block text-sm font-mono text-honeywell-navy font-semibold">
                Single / Double Acting
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
            What Are Telescopic Hydraulic Cylinders?
          </Heading>
          <div className="space-y-5 text-brand-darkSlate font-body text-lg leading-relaxed ">
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
  return (
    <Section aria-labelledby="how-they-work-heading" bg="gray" id="how-they-work">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading id="how-they-work-heading" variant="section" as="h2" underline="center" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            How Multi-Stage Cylinders Work
          </Heading>
          <p className="text-lg text-brand-steelGray font-body text-justify">
            The internal fluid dynamics of a telescopic cylinder are vastly more complex than a standard single-rod actuator, offering unique engineering advantages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TELESCOPIC_STEPS.map((step, idx) => (
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
              </div>
              <Heading variant="subsection" as="h3" className="text-xl font-display font-bold text-honeywell-navy mb-3 group-hover:text-honeywell-red transition-colors">
                {step.title}
              </Heading>
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
    <Section aria-labelledby="technical-specifications-heading" bg="white" id="technical-specifications">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <Heading id="technical-specifications-heading" variant="section" as="h2" underline="center" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
              Technical Specifications
            </Heading>
            <p className="text-lg text-brand-steelGray font-body mb-8 text-justify">
              Engineered to support immense tipping loads with precise stage sequencing and robust column strength.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                href="/request-quote"
                variant="primary"
                size="md"
                className="font-bold"
              >
                REQUEST OEM PRICING <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                href="/contact-us"
                variant="outline"
                size="md"
              >
                CALCULATE STROKE
              </Button>
            </div>
          </div>
          <SpecTable
            title="Standard Capability Range"
            rows={TELESCOPIC_SPECS}
          />
        </div>
      </Container>
    </Section>
  );
}

/* ─── 05 Product Variants (Telescopic vs Standard) ─── */
function ProductVariants() {
  return (
    <Section aria-labelledby="telescopic-vs-standard-heading" bg="gray" id="telescopic-vs-standard">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading id="telescopic-vs-standard-heading" variant="section" as="h2" underline="center" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            Telescopic vs. Standard Cylinders
          </Heading>
          <p className="text-lg text-brand-steelGray font-body text-justify">
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
  return (
    <Section aria-labelledby="industries-heading" bg="gray" id="industries">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Heading id="industries-heading" variant="section" as="h2" underline="center" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            Industries Served
          </Heading>
          <p className="text-lg text-brand-steelGray font-body text-justify">
            Our custom telescopic cylinders are the backbone of the heavy transportation and mobile infrastructure sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {TELESCOPIC_INDUSTRIES.map((ind, idx) => (
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
          <p className="text-lg text-brand-steelGray font-body text-justify">
            Every multi-stage cylinder is delivered with complete stroke-multiplication reports and certified column-load limits, ensuring the actuator meets all safety factors required for heavy mobile equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[32px] left-[16%] right-[16%] h-0.5 bg-slate-200 z-0" aria-hidden="true" />

          <div className="flex flex-col items-center text-center group cursor-default">
            <div className="bg-white rounded-lg mb-6 relative z-10 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110">
              <IconBox icon={<Cog className="w-6 h-6" />} variant="primary" size="lg" />
            </div>
            <Heading variant="card" as="h3" className="mb-3">Precision Stage Honing</Heading>
            <p className="text-brand-steelGray font-body text-sm leading-relaxed  text-justify">
              Every tubular stage is CNC-machined, skived, and roller-burnished internally and externally to ensure absolute concentricity. This prevents the stages from binding or galling.
            </p>
          </div>

          <div className="flex flex-col items-center text-center group cursor-default">
            <div className="bg-white rounded-lg mb-6 relative z-10 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110">
              <IconBox icon={<ShieldCheck className="w-6 h-6" />} variant="primary" size="lg" />
            </div>
            <Heading variant="card" as="h3" className="mb-3">Hard Chrome Plating</Heading>
            <p className="text-brand-steelGray font-body text-sm leading-relaxed  text-justify">
              Because the exterior of every stage acts as a rod, all stages are heavily hard-chrome plated to resist scoring and environmental corrosion from road salt and mud.
            </p>
          </div>

          <div className="flex flex-col items-center text-center group cursor-default">
            <div className="bg-white rounded-lg mb-6 relative z-10 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110">
              <IconBox icon={<FileCheck className="w-6 h-6" />} variant="primary" size="lg" />
            </div>
            <Heading variant="card" as="h3" className="mb-3">Sequential Validation</Heading>
            <p className="text-brand-steelGray font-body text-sm leading-relaxed  text-justify">
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
          <Heading variant="subsection" as="h3" className="text-2xl md:text-3xl font-display font-bold text-white mb-4 relative z-10">
            The Honeywell Guarantee
          </Heading>
          <p className="text-brand-borderGray font-body max-w-2xl mx-auto mb-6 relative z-10 text-justify">
            Our heavy-duty telescopic cylinders are backed by a strict Defect Warranty. Should your mobile equipment experience seal failure due to harsh environmental debris, our Cylinder Repair division can completely rebuild the unit.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Button href="/contact-us" variant="primary" size="lg" className="w-full sm:w-auto font-bold tracking-wide">
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
    <Section aria-labelledby="project-spotlight-heading" bg="white" id="project-spotlight">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm text-brand-steelGray font-body font-medium">
              Earth-Moving Equipment
            </span>
          </div>

          <Heading id="project-spotlight-heading" variant="section" as="h2" underline="center" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-3">
            Project Spotlight: Custom 5-Stage Mining Tipper Cylinder
          </Heading>
          <p className="text-brand-steelGray font-body mb-10 text-justify">
            Client: Heavy Mining Tipper OEM &mdash; Metoda GIDC, Rajkot
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <div className="bg-brand-surfaceGray p-8 border-b md:border-b-0 md:border-r border-slate-200">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-honeywell-red/10 flex items-center justify-center shrink-0">
                  <span className="text-honeywell-red font-bold text-sm">01</span>
                </div>
                <Heading variant="subsection" as="h3" className="text-lg font-display font-bold text-honeywell-navy">The Challenge</Heading>
              </div>
              <p className="text-sm text-brand-steelGray font-body leading-relaxed  text-justify">
                The OEM was designing a massive new dump truck specifically for heavy iron-ore mining. Standard 4-stage cylinders could not provide the required tipping angle without raising the truck&apos;s center of gravity dangerously high during transit.
              </p>
            </div>

            <div className="bg-white p-8 border-b md:border-b-0 md:border-r border-slate-200">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-honeywell-navy/10 flex items-center justify-center shrink-0">
                  <span className="text-honeywell-navy font-bold text-sm">02</span>
                </div>
                <Heading variant="subsection" as="h3" className="text-lg font-display font-bold text-honeywell-navy">The Solution</Heading>
              </div>
              <p className="text-sm text-brand-steelGray font-body leading-relaxed  text-justify">
                We engineered a custom 5-Stage Telescopic Cylinder. By adding an extra stage, we reduced the collapsed length by 15%, allowing the OEM to lower the dump bed. We also integrated heavy-duty metallic scrapers onto every stage to clear abrasive ore dust.
              </p>
            </div>

            <div className="bg-honeywell-navy p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-sm">03</span>
                </div>
                <Heading variant="subsection" as="h3" className="text-lg font-display font-bold text-white">The Outcome</Heading>
              </div>
              <p className="text-sm text-brand-borderGray font-body leading-relaxed mb-6  text-justify">
                The truck achieved a perfect 50-degree tipping angle from an ultra-low chassis profile. The specialized wiper seals prevented dust ingress, extending the cylinder&apos;s operational lifespan in the mining environment by over <strong className="text-white">200%</strong>.
              </p>
              <Button
                href="/request-quote"
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
      imageSrc: '/images/products/welded-hydraulic-cylinder.webp',
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
      imageSrc: '/images/products/hero/hydraulic-manifold-blocks-manufacturer.webp',
      href: '#',
      ctaText: 'View Manifold Blocks',
    },
  ];

  return (
    <Section aria-labelledby="related-products-heading" bg="gray" id="related-products">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <Heading id="related-products-heading" variant="section" as="h2" underline="center" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
              Integrate Your Telescopic Cylinder
            </Heading>
            <p className="text-lg text-brand-steelGray font-body text-justify">
              Telescopic cylinders power mobile equipment. Control them with our robust mobile fluid power systems.
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
    <Section aria-labelledby="engineering-advantage-heading" bg="white" id="engineering-advantage">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Heading id="engineering-advantage-heading" variant="section" as="h2" underline="center" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            The Mobile OEM Advantage
          </Heading>
          <p className="text-lg text-brand-steelGray font-body text-justify">
            Purchasing a telescopic cylinder is an investment in your vehicle&apos;s safety. Leverage our heavy engineering services.
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




/* ─── 14 FAQ Section ─── */
function FAQSection() {
  return (
    <SiteFAQSection
      faqs={TELESCOPIC_FAQS}
      title="Frequently Asked Questions"
      description="Common questions about our telescopic hydraulic cylinder capabilities."
      injectSchema={false}
    />
  );
}

