/* eslint-disable */
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { COMPANY_INFO } from '@/lib/constants';

import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { CTA } from '@/components/ui/CTA';
import { IconBox } from '@/components/ui/IconBox';
import { SpecTable } from '@/components/tables/SpecTable';
import { SiteLocationsSection } from '@/components/locations/SiteLocationsSection';
import { SiteFAQSection } from '@/components/faq/SiteFAQSection';

import {
  PILLAR_FEATURES,
  PILLAR_SPECS,
  PILLAR_BLOCK_TYPES,
  PILLAR_INDUSTRIES,
  PILLAR_FAQS,
} from '@/data/manifold-blocks/pillar';

/* ═══════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════ */

const PAGE_TITLE = 'Hydraulic Manifold Block Manufacturer Gujarat | Custom Valve Blocks';
const PAGE_DESCRIPTION =
  'Precision CNC-machined hydraulic manifold blocks. We are a leading manufacturer in Gujarat supplying custom, zero-leak CETOP and modular manifold blocks for OEMs.';
const PAGE_URL = '/products/manifold-blocks/';
const PAGE_IMAGE = '/images/products/manifold-blocks/custom-manifold-block-cnc-machined.webp'; // Will use placeholder initially

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
   SCHEMA GENERATION
   ═══════════════════════════════════════════════ */

function buildPageSchema() {
  const siteUrl = COMPANY_INFO.websiteUrl;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      /* 1. WebPage */
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}${PAGE_URL}#webpage`,
        url: `${siteUrl}${PAGE_URL}`,
        name: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        isPartOf: { '@id': `${siteUrl}/#website` },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${siteUrl}${PAGE_IMAGE}`,
        },
        breadcrumb: { '@id': `${siteUrl}${PAGE_URL}#breadcrumb` },
        inLanguage: 'en-IN',
      },
      /* 2. BreadcrumbList */
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
            name: 'Manifold Blocks',
            item: `${siteUrl}${PAGE_URL}`,
          },
        ],
      },
      /* 3. FAQPage */
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}${PAGE_URL}#faq`,
        mainEntity: PILLAR_FAQS.map((faq) => ({
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

export default function ManifoldBlocksPillarPage() {
  const schema = buildPageSchema();

  return (
    <>
      <JsonLd data={schema} />

      <HeroSection />
      <OverviewSection />
      <KeyFeaturesSection />
      <BlockTypesSection />
      <TechnicalSpecsSection />
      <IndustriesSection />
      <ManufacturingProcessSection />
      
      <SiteLocationsSection
        title="Hydraulic Manifold Block Manufacturer in Gujarat"
        description="As a premier hydraulic manifold block manufacturer in Gujarat, we provide direct engineering support and rapid CNC production to OEMs and machine builders across Ahmedabad, Surat, Rajkot, and Vadodara."
      />

      <FAQSection />

      <CTA
        title="Ready to discuss OEM manufacturing volumes and pricing?"
        description="Eliminate hydraulic leaks, save space, and optimize your machine's performance with a custom-engineered manifold block. Partner with Honeywell Hydraulics for absolute precision fluid logic."
        primaryCtaText="REQUEST A CUSTOM QUOTE"
        primaryCtaHref="/request-quote/"
        secondaryCtaText="Consult Engineering"
        secondaryCtaHref="/contact-us/"
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
    <div className="relative bg-white pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden border-b border-slate-200" id="hero">
      <div className="absolute inset-0 bg-brand-surfaceGray" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-white to-transparent" aria-hidden="true" />
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col items-start z-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-brand-steelGray text-sm font-medium">OEM Manifold Blocks</span>
            </div>

            <Heading variant="section" as="h1" className=" lg:text-[3.25rem] font-bold text-honeywell-navy leading-[1.1] mb-6">
              Hydraulic Manifold Block Manufacturer in Gujarat
            </Heading>

            <p className="text-lg text-brand-darkSlate mb-8 max-w-xl leading-relaxed  text-justify">
              Engineering zero-leak fluid power control. We design, CNC-machine, and test high-precision CETOP, modular, and custom valve manifold blocks that consolidate complex hydraulic logic into a single, highly efficient footprint.
            </p>

            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Button href="/request-quote/" size="lg" variant="primary" className="w-full sm:w-auto font-bold tracking-wide">
                REQUEST A QUOTE
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button href="/resources/downloads/" size="lg" variant="outline" className="w-full sm:w-auto bg-white hover:bg-brand-surfaceGray">
                DOWNLOAD 3D CAD
              </Button>
            </div>
          </div>

          <div className="relative w-full aspect-[4/3] lg:aspect-square bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden group">
            <div className="absolute inset-0 bg-brand-surfaceGray opacity-50 rounded-xl" />
            <Image 
              src={PAGE_IMAGE} 
              alt="Hydraulic manifold block manufacturer in Ahmedabad — Honeywell Hydraulics" 
              fill 
              priority fetchPriority="high" decoding="sync" quality={85} 
              className="object-cover p-8 group-hover:scale-105 transition-transform duration-700" 
              sizes="(max-width: 1024px) 100vw, 50vw" 
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

/* ─── 02 Overview ─── */
function OverviewSection() {
  return (
    <Section bg="white" id="overview">
      <Container>
        <div className="max-w-4xl mx-auto">
          <Heading variant="section" as="h2" underline="center">
            What is a Hydraulic Manifold Block?
          </Heading>
          <div className="space-y-5 text-brand-darkSlate text-lg leading-relaxed">
            <p className=" text-justify">
              A <strong className="text-honeywell-navy">hydraulic manifold block</strong> is the central "brain" of any advanced fluid power circuit. It is a solid block of metal (typically Aluminum or ST52 Carbon Steel) into which complex internal galleries, ports, and cavities have been precisely machined.
            </p>
            <p className=" text-justify">
              Instead of routing hydraulic fluid through dozens of separate hoses, steel pipes, and individual inline valves, a manifold block consolidates all pressure, directional, and flow-control valves into one central hub. The fluid enters the block from the pump, navigates through the internal machined pathways based on the logic of the attached valves (such as solenoid-operated CETOP valves or screw-in logic cartridges), and exits the block directly to the <Link href="/products/hydraulic-cylinders/" className="text-honeywell-red font-semibold hover:underline">Hydraulic Cylinders</Link> or motors.
            </p>
            <p className=" text-justify">
              As a specialized <strong>hydraulic manifold block supplier and manufacturer</strong>, we cater directly to OEM engineering teams and automation integrators who require absolute precision. A poorly machined manifold will suffer from internal fluid bypass (cross-talk), ruining machine performance. We guarantee h8 tolerances and Ra 0.2 µm surface finishes to ensure absolute zero-leak operation.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ─── 03 Key Features ─── */
function KeyFeaturesSection() {
  return (
    <Section bg="gray" id="features">
      <Container>
        <div className="text-center flex flex-col items-center max-w-3xl mx-auto mb-16">
          <Heading variant="section" as="h2" underline="center" className="text-honeywell-navy mb-4">
            Why Manifold Blocks Are Critical
          </Heading>
          <p className="text-lg text-brand-steelGray  text-justify">
            In the past, hydraulic logic was achieved through "plumbing"—connecting separate valves using a chaotic web of steel tubing and fittings. For modern machine builders, this outdated method is unacceptable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {PILLAR_FEATURES.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-slate-200 p-8 transition-all hover:shadow-float hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red group">
              <IconBox icon={feature.icon} size="lg" variant="primary" className="mb-6 group-hover:bg-honeywell-red group-hover:text-white transition-colors" />
              <h3 className="text-xl font-bold text-honeywell-navy mb-3">{feature.title}</h3>
              <p className="text-brand-steelGray leading-relaxed  text-justify">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── 04 Block Types ─── */
function BlockTypesSection() {
  return (
    <Section bg="white" id="types">
      <Container>
        <div className="text-center flex flex-col items-center max-w-3xl mx-auto mb-16">
          <Heading variant="section" as="h2" underline="center" className="text-honeywell-navy mb-4">
            Types of Manifold Blocks We Manufacture
          </Heading>
          <p className="text-lg text-brand-steelGray  text-justify">
            We machine several distinct categories of hydraulic control blocks based on the complexity of the OEM circuit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {PILLAR_BLOCK_TYPES.map((type, idx) => (
            <Link key={idx} href={type.href} className="flex flex-col sm:flex-row bg-brand-lightSurface rounded-xl border border-slate-200 overflow-hidden group hover:shadow-md transition-shadow">
              <div className="w-full sm:w-2/5 aspect-[4/3] sm:aspect-auto relative bg-white border-b sm:border-b-0 sm:border-r border-slate-200 p-4">
                <Image src={type.image || PAGE_IMAGE} alt={type.title} fill className="object-contain p-2 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col justify-center sm:w-3/5">
                <h3 className="text-xl font-bold text-honeywell-navy mb-3 group-hover:text-honeywell-red transition-colors">
                  {type.title}
                </h3>
                <p className="text-brand-steelGray leading-relaxed mb-4  text-justify">
                  {type.description}
                </p>
                <div className="mt-auto flex items-center text-honeywell-red font-bold text-sm">
                  VIEW DETAILS <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── 05 Technical Specs ─── */
function TechnicalSpecsSection() {
  return (
    <Section bg="gray" id="specs">
      <Container>
        <div className="text-center flex flex-col items-center max-w-3xl mx-auto mb-12">
          <Heading variant="section" as="h2" underline="center" className="text-honeywell-navy mb-4">
            Technical Specifications Framework
          </Heading>
        </div>
        <div className="max-w-4xl mx-auto">
          <SpecTable rows={PILLAR_SPECS} />
        </div>
      </Container>
    </Section>
  );
}

/* ─── 06 Industries ─── */
function IndustriesSection() {
  return (
    <Section bg="white" id="industries">
      <Container>
        <div className="text-center flex flex-col items-center max-w-3xl mx-auto mb-16">
          <Heading variant="section" as="h2" underline="center" className="text-honeywell-navy mb-4">
            Industries Served
          </Heading>
          <p className="text-lg text-brand-steelGray  text-justify">
            Our custom manifold blocks are the trusted logic centers for heavy industries, delivering precision control where standard piping fails.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {PILLAR_INDUSTRIES.map((industry, idx) => (
            <div key={idx} className="bg-brand-lightSurface rounded-xl border border-slate-200 p-8 flex flex-col items-center text-center hover:border-honeywell-red/50 transition-colors">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-honeywell-navy shadow-sm mb-6">
                {industry.icon}
              </div>
              <h3 className="text-xl font-bold text-honeywell-navy mb-3">{industry.name}</h3>
              <p className="text-brand-steelGray leading-relaxed text-justify">{industry.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── 07 Manufacturing Process ─── */
function ManufacturingProcessSection() {
  return (
    <Section bg="gray" id="manufacturing">
      <Container>
        <div className="max-w-4xl mx-auto">
          <Heading variant="section" as="h2" underline="center">
            The Manufacturing Process (From CAD to CNC)
          </Heading>
          <div className="space-y-6 text-brand-darkSlate text-lg leading-relaxed">
            <p className=" text-justify">
              As a premier <strong>manifold block manufacturer in Gujarat</strong>, we maintain absolute control over the production process to guarantee zero-leak performance.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-honeywell-red/10 text-honeywell-red flex items-center justify-center font-bold flex-shrink-0 mt-1">1</div>
                <div>
                  <strong className="text-honeywell-navy block mb-1">Material Selection</strong>
                  <p className="text-brand-steelGray  text-justify">We source high-grade Aluminum (for systems up to 210 Bar) and dense, porosity-free ST52 Carbon Steel or Ductile Iron (for systems operating at 315–500 Bar).</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-honeywell-red/10 text-honeywell-red flex items-center justify-center font-bold flex-shrink-0 mt-1">2</div>
                <div>
                  <strong className="text-honeywell-navy block mb-1">CNC Machining</strong>
                  <p className="text-brand-steelGray  text-justify">The 3D CAD design is fed into our 5-axis CNC machines. The galleries are deep-hole drilled, and the valve cavities are form-machined to exact ISO/SAE tolerances to ensure O-rings seal perfectly.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-honeywell-red/10 text-honeywell-red flex items-center justify-center font-bold flex-shrink-0 mt-1">3</div>
                <div>
                  <strong className="text-honeywell-navy block mb-1">Surface Finishing & Deburring</strong>
                  <p className="text-brand-steelGray  text-justify">Internal galleries are thoroughly deburred using specialized tooling and high-pressure flushing to ensure no metal chips remain to destroy the hydraulic pump.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-honeywell-red/10 text-honeywell-red flex items-center justify-center font-bold flex-shrink-0 mt-1">4</div>
                <div>
                  <strong className="text-honeywell-navy block mb-1">Hydrostatic Leak Testing</strong>
                  <p className="text-brand-steelGray  text-justify">The final block is sealed and pressurized to 1.5x its maximum working pressure to verify the integrity of the internal wall thicknesses before dispatch.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ─── 08 FAQs ─── */
function FAQSection() {
  return (
    <SiteFAQSection 
      faqs={PILLAR_FAQS} 
      title="Frequently Asked Questions"
      description="Common questions about our hydraulic manifold blocks and custom manufacturing capabilities."
      injectSchema={false}
    />
  );
}
