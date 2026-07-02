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
import { ProductCard } from '@/components/cards/ProductCard';
import { SiteLocationsSection } from '@/components/locations/SiteLocationsSection';
import { IndustryCard } from '@/components/cards/IndustryCard';
import { Heading } from '@/components/ui/Heading';
import {
  ArrowRight,
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
  'Single Acting Hydraulic Cylinder Manufacturer | Honeywell';
const PAGE_DESCRIPTION =
  'Leading single acting hydraulic cylinder manufacturer in India. Supplying heavy-duty cylinders for presses, material handling, and custom applications.';
const PAGE_URL = '/products/hydraulic-cylinders/single-acting-hydraulic-cylinders';
const PAGE_IMAGE = '/images/products/hydraulic-cylinders/single-acting-hydraulic-cylinder-manufacturer.webp';

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
  SINGLE_ACTING_FAQS,
  SINGLE_ACTING_SPECS,
  SINGLE_ACTING_COMPONENTS,
  SINGLE_ACTING_ADVANTAGES,
  SINGLE_ACTING_INDUSTRIES,
} from '@/data/hydraulic-cylinders/single-acting-hydraulic-cylinders';

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
        name: 'Single Acting Hydraulic Cylinders',
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
            value: '40mm to 250mm',
          },
          {
            '@type': 'PropertyValue',
            name: 'Operating Pressure',
            value: 'Up to 450 Bar',
          },
          {
            '@type': 'PropertyValue',
            name: 'Stroke Length',
            value: 'Up to 6000mm',
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
            name: 'Single Acting Hydraulic Cylinders',
            item: `${siteUrl}${PAGE_URL}`,
          },
        ],
      },
      /* 4. FAQPage */
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}${PAGE_URL}#faq`,
        mainEntity: SINGLE_ACTING_FAQS.map((faq) => ({
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

export default function SingleActingHydraulicCylindersPage() {
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
      <SiteLocationsSection
        title="Direct Delivery Across India"
        description="As a premier hydraulic cylinder manufacturer in Gujarat, we provide direct engineering support and heavy-freight delivery to steel plants, manufacturing hubs, and OEMs across India."
      />

      {/* ─── 14 FAQs ─── */}
      <FAQSection />

      {/* ─── 16 CTA Section ─── */}
      <CTA
        title="Ready to Discuss Your Heavy-Duty Actuator Needs?"
        description="Standardize your heavy equipment with extreme-duty, high-pressure single acting hydraulic cylinders from Honeywell Hydraulics."
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
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-brand-surfaceGray" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-white to-transparent" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-honeywell-red/5 skew-x-[-12deg] translate-x-20 -z-10 hidden lg:block" />
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" aria-hidden="true" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="flex flex-col items-start z-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block py-1 px-3 rounded-full bg-white border border-slate-200 text-honeywell-red font-bold tracking-widest text-xs uppercase font-body shadow-sm">
                PRECISION LINEAR ACTUATORS
              </span>
              <div className="h-4 w-px bg-slate-300" />
              <span className="text-brand-steelGray text-sm font-medium">Single Acting Hydraulic Cylinders</span>
            </div>

            <Heading variant="hero" as="h1" className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-bold text-honeywell-navy leading-[1.1] mb-6">
              Single Acting Hydraulic Cylinder Manufacturer
            </Heading>

            <p className="text-lg text-brand-darkSlate font-body mb-8 max-w-xl leading-relaxed ">
              Engineered for efficiency and robust performance. Honeywell Hydraulics is a premier custom single acting hydraulic cylinder manufacturer in Gujarat. Our single acting cylinders are designed to apply unidirectional force for lifting, pushing, or pressing applications, offering a highly reliable and cost-effective fluid power solution capable of sustaining up to 450 Bar working pressures.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <Button
                href="/request-quote"
                size="lg"
                variant="primary"
                className="w-full sm:w-auto font-bold tracking-wide"
              >
                REQUEST A QUOTE <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="/contact-us"
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white hover:bg-brand-surfaceGray"
              >
                CUSTOM DESIGN CONSULTATION <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative w-full aspect-[4/3] lg:aspect-square bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden group">
            <div className="absolute inset-0 bg-brand-surfaceGray opacity-50 rounded-xl" />
            <Image
              src="/images/products/welded-hydraulic-cylinder.webp"
              alt="Single Acting Hydraulic Cylinder Manufacturer in Ahmedabad"
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
                Max Pressure
              </span>
              <span className="block text-sm font-mono text-honeywell-navy font-semibold">
                450 Bar
              </span>
            </div>
            <div className="px-6 flex-1 text-center group cursor-default">
              <span className="block text-xs font-bold text-brand-steelGray uppercase tracking-wider mb-1 group-hover:text-honeywell-red transition-colors duration-300">
                Bore Size
              </span>
              <span className="block text-sm font-mono text-honeywell-navy font-semibold">
                Up to 250 mm
              </span>
            </div>
            <div className="px-6 flex-1 text-center group cursor-default">
              <span className="block text-xs font-bold text-brand-steelGray uppercase tracking-wider mb-1 group-hover:text-honeywell-red transition-colors duration-300">
                Stroke
              </span>
              <span className="block text-sm font-mono text-honeywell-navy font-semibold">
                Up to 6000 mm
              </span>
            </div>
            <div className="px-6 flex-1 text-center group cursor-default">
              <span className="block text-xs font-bold text-brand-steelGray uppercase tracking-wider mb-1 group-hover:text-honeywell-red transition-colors duration-300">
                Applications
              </span>
              <span className="block text-sm font-mono text-honeywell-navy font-semibold">
                Unidirectional Force
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
            What Are Single Acting Hydraulic Cylinders?
          </Heading>
          <div className="space-y-5 text-brand-darkSlate font-body text-lg leading-relaxed">
            <p className="">
              Hydraulic cylinders are used as linear actuators to apply mechanical force in a linear motion. A <strong className="text-honeywell-navy">single acting hydraulic cylinder</strong>, also known as a single acting hydraulic ram, operates in a single direction.
            </p>
            <p className="">
              It typically has a single port at the bottom of the cylinder where pressurised fluid is pumped into the system. As the fluid enters the system, it fills the cylinder and extends the piston inside, creating mechanical force to lift, push, or press heavy loads.
            </p>
            <p className="">
              To retract the piston, a single acting hydraulic cylinder must rely on an external force to expunge the fluid inside. This can be left to gravity if there is no immediate need to retract the piston rapidly. A second piston, mechanical weight, or strong internal springs can also be used to forcefully push the piston back into the cylinder.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ─── 03 Mechanics Explained ─── */
function ConstructionExplained() {
  return (
    <Section aria-labelledby="construction-heading" bg="gray" id="construction">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading id="construction-heading" variant="section" as="h2" underline="center" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            Single Acting Cylinder Mechanics
          </Heading>
          <p className="text-lg text-brand-steelGray font-body">
            Simplicity meets extreme performance. A look inside our single acting actuators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {SINGLE_ACTING_COMPONENTS.map((comp, idx) => (
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
              <p className="text-brand-steelGray font-body text-sm leading-relaxed ">
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
  return (
    <Section aria-labelledby="advantages-heading" bg="white" id="advantages">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading id="advantages-heading" variant="section" as="h2" underline="center" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            Advantages of Single Acting Cylinders
          </Heading>
          <p className="text-lg text-brand-steelGray font-body">
            Why engineers specify single acting cylinders for lifting and pressing applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SINGLE_ACTING_ADVANTAGES.map((adv, idx) => (
            <div
              key={idx}
              className="bg-brand-surfaceGray rounded-xl border border-slate-200 p-8 transition-all duration-350 ease-premium hover:shadow-float hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red flex flex-col"
            >
              <div className="mb-6">
                <IconBox icon={adv.icon} variant="secondary" size="lg" />
              </div>
              <Heading variant="subsection" as="h3" className="text-xl font-display font-bold text-honeywell-navy mb-3">
                {adv.title}
              </Heading>
              <p className="text-brand-steelGray font-body text-sm leading-relaxed flex-grow ">
                {adv.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── 05 Comparison ─── */
function ComparisonSection() {
  return (
    <Section aria-labelledby="comparison-heading" bg="gray" id="comparison">
      <Container>
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <Heading id="comparison-heading" variant="section" as="h2" underline="center" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            Single Acting vs. Double Acting Cylinders
          </Heading>
          <p className="text-lg text-brand-steelGray font-body">
            Choosing the right actuator type for your machine's cycle profile.
          </p>
        </div>

        <div className="max-w-5xl mx-auto overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-sm">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-slate-200 bg-honeywell-navy text-white">
                <th className="px-6 py-4 font-display font-bold text-lg w-1/4">Feature</th>
                <th className="px-6 py-4 font-display font-bold text-lg w-[37.5%] border-l border-white/20">Single Acting Cylinders</th>
                <th className="px-6 py-4 font-display font-bold text-lg w-[37.5%] border-l border-white/20">
                  <Link href="/products/hydraulic-cylinders/double-acting-hydraulic-cylinders" className="hover:text-red-200 transition-colors underline decoration-white/30 underline-offset-4">
                    Double Acting Cylinders
                  </Link>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="hover:bg-brand-surfaceGray/50">
                <td className="px-6 py-4 font-semibold text-brand-darkSlate">Force Direction</td>
                <td className="px-6 py-4 text-honeywell-navy font-bold border-l border-slate-200">Unidirectional (Push OR Pull)</td>
                <td className="px-6 py-4 text-brand-darkSlate border-l border-slate-200">Bidirectional (Push AND Pull)</td>
              </tr>
              <tr className="hover:bg-brand-surfaceGray/50 bg-brand-surfaceGray/30">
                <td className="px-6 py-4 font-semibold text-brand-darkSlate">Hydraulic Ports</td>
                <td className="px-6 py-4 text-brand-darkSlate border-l border-slate-200">One (Extension only)</td>
                <td className="px-6 py-4 text-brand-darkSlate border-l border-slate-200">Two (Extension and Retraction)</td>
              </tr>
              <tr className="hover:bg-brand-surfaceGray/50">
                <td className="px-6 py-4 font-semibold text-brand-darkSlate">Retraction Method</td>
                <td className="px-6 py-4 text-brand-darkSlate border-l border-slate-200">Gravity, Load Weight, or Spring</td>
                <td className="px-6 py-4 text-brand-darkSlate border-l border-slate-200">Hydraulic Pressure</td>
              </tr>
              <tr className="hover:bg-brand-surfaceGray/50 bg-brand-surfaceGray/30">
                <td className="px-6 py-4 font-semibold text-brand-darkSlate">System Complexity</td>
                <td className="px-6 py-4 text-brand-darkSlate border-l border-slate-200">Low (Requires fewer valves/hoses)</td>
                <td className="px-6 py-4 text-brand-darkSlate border-l border-slate-200">High (Requires complex valving)</td>
              </tr>
              <tr className="hover:bg-brand-surfaceGray/50">
                <td className="px-6 py-4 font-semibold text-brand-darkSlate">Typical Applications</td>
                <td className="px-6 py-4 text-brand-darkSlate border-l border-slate-200">Scissor Lifts, Jacks, Forging Presses</td>
                <td className="px-6 py-4 text-brand-darkSlate border-l border-slate-200">Excavators, Steering, Automation</td>
              </tr>
            </tbody>
          </table>
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
            <Heading id="technical-specifications-heading" variant="section" as="h2" underline="center" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
              Technical Specifications
            </Heading>
            <p className="text-lg text-brand-steelGray font-body mb-8">
              Our single acting cylinders are manufactured using premium ST 52.3 honed tubes and high-grade alloy steel rods for maximum strength and endurance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/request-quote" variant="primary" size="md" className="font-bold">
                DISCUSS YOUR SPECS <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button href="/contact-us" variant="outline" size="md">
                REQUEST CAD MODELS
              </Button>
            </div>
          </div>
          <SpecTable title="Standard Spec Framework" rows={SINGLE_ACTING_SPECS} />
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
          <Heading id="industries-heading" variant="section" as="h2" underline="center" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            Industries Served
          </Heading>
          <p className="text-lg text-brand-steelGray font-body">
            Single acting cylinders are the workhorses of vertical lifting and pressing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {SINGLE_ACTING_INDUSTRIES.map((ind, idx) => (
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
          <Heading id="engineering-considerations-heading" variant="section" as="h2" underline="center" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-6">
            Engineering Considerations
          </Heading>
          <p className="text-brand-darkSlate font-body text-lg mb-8">
            When specifying a single acting cylinder, several key operational factors must be addressed to ensure reliable performance.
          </p>

          <div className="space-y-8">
            <div className="bg-brand-surfaceGray p-8 rounded-xl border border-slate-200">
              <Heading variant="subsection" as="h3" className="text-xl font-bold text-honeywell-navy mb-3 flex items-center gap-3">
                <span className="bg-honeywell-navy text-white w-8 h-8 rounded flex items-center justify-center text-sm font-bold">A</span>
                Retraction Method
              </Heading>
              <p className="text-brand-darkSlate text-sm leading-relaxed pl-11">
                Because there is no hydraulic pressure to retract the rod, you must determine if the load's weight is sufficient to overcome seal friction and push the fluid back into the reservoir quickly enough for your cycle times. If not, an internal return spring may be necessary.
              </p>
            </div>

            <div className="bg-brand-surfaceGray p-8 rounded-xl border border-slate-200">
              <Heading variant="subsection" as="h3" className="text-xl font-bold text-honeywell-navy mb-3 flex items-center gap-3">
                <span className="bg-honeywell-navy text-white w-8 h-8 rounded flex items-center justify-center text-sm font-bold">B</span>
                Breather Ports
              </Heading>
              <p className="text-brand-darkSlate text-sm leading-relaxed pl-11">
                The non-pressurized side of a single acting cylinder must be vented to the atmosphere to allow air to enter and exit as the cylinder strokes. We equip our breather ports with high-quality sintered bronze filters to prevent dust and moisture from being sucked into the cylinder during extension.
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
    <Section aria-labelledby="manufacturing-heading" bg="gray" id="manufacturing">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Heading id="manufacturing-heading" variant="section" as="h2" underline="center" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-6">
              Manufacturing & Quality Process
            </Heading>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <IconBox icon={<Flame className="w-5 h-5" />} variant="primary" size="sm" />
                </div>
                <div>
                  <Heading variant="card" as="h3" className="text-lg font-bold text-honeywell-navy">Premium Materials</Heading>
                  <p className="text-brand-steelGray text-sm mt-1 leading-relaxed ">
                    We exclusively use ST 52.3 seamless honed tubes and EN 8 / EN 19 piston rods. This guarantees superior wear resistance and structural integrity under high pressure.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <IconBox icon={<Cog className="w-5 h-5" />} variant="primary" size="sm" />
                </div>
                <div>
                  <Heading variant="card" as="h3" className="text-lg font-bold text-honeywell-navy">Precision Machining</Heading>
                  <p className="text-brand-steelGray text-sm mt-1 leading-relaxed ">
                    Our CNC machining processes ensure strict H8/H9 tolerances for the honed tubes and f7 tolerances for the piston rods, providing an ultra-smooth surface finish for extended seal life.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <IconBox icon={<Zap className="w-5 h-5" />} variant="primary" size="sm" />
                </div>
                <div>
                  <Heading variant="card" as="h3" className="text-lg font-bold text-honeywell-navy">Pressure Validation</Heading>
                  <p className="text-brand-steelGray text-sm mt-1 leading-relaxed ">
                    Every cylinder undergoes rigorous hydrostatic testing at pressures well beyond their rated working capacity to guarantee leak-free performance and structural safety.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-honeywell-navy p-6 rounded-xl border border-slate-200">
              <Heading variant="card" as="h3" className="font-bold text-white flex items-center gap-2 mb-2">
                <ShieldAlert className="w-5 h-5 text-honeywell-red" />
                The Honeywell Guarantee
              </Heading>
              <p className="text-white/80 text-sm">
                Our heavy-duty single acting cylinders are backed by our strict quality guarantee. Every unit is dispatched with complete material test certificates and dimensional reports.
              </p>
            </div>
          </div>

          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-slate-200">
            <Image
              src="/images/products/hydraulic-cylinders/single-acting-hydraulic-cylinder-manufacturer.webp"
              alt="Hydraulic Cylinder Manufacturing Process in Gujarat"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
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
    <Section aria-labelledby="project-spotlight-heading" bg="white" id="project-spotlight">
      <Container>
        <div className="bg-brand-surfaceGray rounded-2xl border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <Badge variant="custom" className="w-fit mb-4">PROJECT SPOTLIGHT</Badge>
              <Heading id="project-spotlight-heading" variant="section" as="h2" underline="center" className="text-2xl md:text-3xl font-display font-bold text-honeywell-navy mb-6">
                Custom Actuators for Heavy Goods Elevators
              </Heading>

              <div className="space-y-6">
                <div>
                  <Heading variant="card" as="h3" className="font-bold text-honeywell-navy uppercase text-xs tracking-wider mb-2">The Challenge:</Heading>
                  <p className="text-brand-darkSlate text-sm leading-relaxed ">
                    A material handling OEM required highly reliable, long-stroke lifting cylinders for their 5-ton industrial goods elevators. The cylinders needed to lift the platform efficiently and return safely using only the weight of the platform.
                  </p>
                </div>

                <div>
                  <Heading variant="card" as="h3" className="font-bold text-honeywell-navy uppercase text-xs tracking-wider mb-2">The Solution:</Heading>
                  <p className="text-brand-darkSlate text-sm leading-relaxed ">
                    We engineered custom <strong>Single Acting Hydraulic Cylinders</strong> with a 6000mm stroke and specialized velocity fuses built into the base port. We used ultra-smooth honed tubes and premium rod seals to minimize friction during the gravity-assisted return stroke.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-64 lg:h-auto bg-honeywell-navy">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-white text-center">
                  <div className="text-6xl font-display font-bold mb-2">6000</div>
                  <div className="text-xl font-bold uppercase tracking-widest text-red-400">mm Stroke Length</div>
                  <div className="mt-8 text-sm opacity-80">Smooth, Friction-Free Operation</div>
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
      title: 'Double Acting Hydraulic Cylinders',
      description: 'Actuators that provide hydraulic force in both extension and retraction strokes for full motion control.',
      href: '/products/hydraulic-cylinders/double-acting-hydraulic-cylinders/',
      image: '/images/products/double-acting-hydraulic-cylinder.webp',
    },
    {
      title: 'Custom Hydraulic Cylinders',
      description: 'Bespoke fluid power for when standard catalogs fail. We engineer large-bore and special-mount cylinders.',
      href: '/products/hydraulic-cylinders/custom-hydraulic-cylinders/',
      image: '/images/products/welded-hydraulic-cylinder.webp',
    },
    {
      title: 'Hydraulic Power Packs',
      description: 'Drive your single acting cylinders with our reliable, high-efficiency hydraulic power units.',
      href: '/products/hydraulic-power-packs/',
      image: '/images/products/3-phase-hydraulic-power-pack-manufacturer.webp',
    },
  ];

  return (
    <Section aria-labelledby="related-products-heading" bg="gray" id="related-products">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading id="related-products-heading" variant="section" as="h2" underline="center" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            Related Products
          </Heading>
          <p className="text-lg text-brand-steelGray font-body">
            Explore our complete range of hydraulic actuators and power generation systems.
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
      desc: 'High-volume, repeatable production of custom cylinders specifically for material handling and heavy equipment manufacturers.',
      href: '/contact-us',
    },
    {
      title: 'Hydraulic Cylinder Repair',
      desc: 'Send damaged or leaking units to our facility for complete inspection, re-sealing, honing, and hydrostatic testing.',
      href: '/contact-us',
    },
    {
      title: 'System Design & Engineering',
      desc: 'Our team can design the complete hydraulic circuit for your machinery, ensuring your cylinders and power packs work in perfect harmony.',
      href: '/contact-us',
    },
  ];

  return (
    <Section aria-labelledby="related-services-heading" bg="white" id="related-services">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading id="related-services-heading" variant="section" as="h2" underline="center" className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            The Heavy Engineering Advantage
          </Heading>
          <p className="text-lg text-brand-steelGray font-body">
            Leverage our fluid power expertise to optimize your manufacturing processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-brand-surfaceGray p-8 rounded-xl border border-slate-200 hover:border-honeywell-navy transition-colors group">
              <Heading variant="subsection" as="h3" className="text-xl font-bold text-honeywell-navy mb-3">{service.title}</Heading>
              <p className="text-brand-steelGray text-sm leading-relaxed mb-6 ">
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

/* ─── 15 FAQ Section ─── */
function FAQSection() {
  return (
    <SiteFAQSection
      faqs={SINGLE_ACTING_FAQS}
      title="Frequently Asked Questions"
      description="Technical answers regarding single acting cylinder applications and custom manufacturing."
      injectSchema={false}
    />
  );
}
