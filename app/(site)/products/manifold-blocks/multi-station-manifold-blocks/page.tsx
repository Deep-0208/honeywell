/* eslint-disable */
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';

import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { COMPANY_INFO } from '@/lib/constants';

import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { CTA } from '@/components/ui/CTA';
import { SpecTable } from '@/components/tables/SpecTable';
import { SiteLocationsSection } from '@/components/locations/SiteLocationsSection';
import { SiteFAQSection } from '@/components/faq/SiteFAQSection';

import {
  MULTI_STATION_SPECS,
  MULTI_STATION_CIRCUIT_TYPES,
  MULTI_STATION_CIRCUIT_HEADERS,
  MULTI_STATION_COUNT_GUIDE,
  MULTI_STATION_CETOP_SIZES,
  MULTI_STATION_SAFETY_FEATURES,
  MULTI_STATION_FAQS,
} from '@/data/manifold-blocks/multi-station-manifold-blocks';

/* ═══════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════ */

const PAGE_TITLE = 'Multi-Station Manifold Blocks | Parallel Circuit Control';
const PAGE_DESCRIPTION =
  'Multi-station hydraulic manifold blocks manufacturer in India. We supply 2 to 10-station parallel circuit manifolds for synchronized multi-cylinder industrial automation.';
const PAGE_URL = '/products/manifold-blocks/multi-station-manifold-blocks/';
const PAGE_IMAGE = '/images/products/manifold-blocks/multi-station-manifold-block.webp';

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
            item: `${siteUrl}/products/manifold-blocks/`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Multi-Station Manifold Blocks',
            item: `${siteUrl}${PAGE_URL}`,
          },
        ],
      },
      /* 3. FAQPage */
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}${PAGE_URL}#faq`,
        mainEntity: MULTI_STATION_FAQS.map((faq) => ({
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

export default function MultiStationManifoldBlocksPage() {
  const schema = buildPageSchema();

  return (
    <>
      <JsonLd data={schema} />

      <HeroSection />
      <OverviewSection />
      <CircuitConfigurationSection />
      <StationCountSection />
      <CetopSizesSection />
      <SafetyFeaturesSection />
      <ProjectSpotlightSection />
      <TechnicalSpecsSection />
      
      <SiteLocationsSection
        title="Multi-Station Manifold Blocks in Gujarat"
        description="We manufacture multi-station manifold blocks for machine builders and SPM integrators across Gujarat's industrial corridor."
      />

      <FAQSection />

      <CTA
        title="Stop using chaotic pipework to connect multiple valves."
        description="Centralize your circuit logic into a single, precision-machined multi-station manifold block from Honeywell Hydraulics."
        primaryCtaText="REQUEST OEM QUOTE"
        primaryCtaHref="/request-quote/"
        secondaryCtaText="Submit SPM Schematic"
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
              <span className="text-brand-steelGray text-sm font-medium">Multi-Station Manifolds</span>
            </div>

            <Heading variant="section" as="h1" className=" lg:text-[3.25rem] font-bold text-honeywell-navy leading-[1.1] mb-6">
              Multi-Station Manifold Blocks Manufacturer
            </Heading>

            <p className="text-lg text-brand-darkSlate mb-8 max-w-xl leading-relaxed  text-justify">
              One block. Multiple cylinders. Total synchronized control. We manufacture single monolithic valve bodies housing 2 to 10 directional control valves in a shared P and T gallery circuit for complex Special Purpose Machines.
            </p>

            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Button href="/request-quote/" size="lg" variant="primary" className="w-full sm:w-auto font-bold tracking-wide">
                REQUEST A QUOTE
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button href="/contact-us/" size="lg" variant="outline" className="w-full sm:w-auto bg-white hover:bg-brand-surfaceGray">
                SUBMIT SCHEMATIC
              </Button>
            </div>
          </div>

          <div className="relative w-full aspect-[4/3] lg:aspect-square bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden group">
            <div className="absolute inset-0 bg-brand-surfaceGray opacity-50 rounded-xl" />
            <Image 
              src={PAGE_IMAGE} 
              alt="Multi-station manifold blocks manufacturer in Ahmedabad — Honeywell Hydraulics" 
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
            What Is a Multi-Station Manifold Block?
          </Heading>
          <div className="space-y-5 text-brand-darkSlate text-lg leading-relaxed">
            <p className=" text-justify">
              A <strong className="text-honeywell-navy">multi-station manifold block</strong> (also called a parallel manifold rail or gang block) is a single elongated block of machined metal that accommodates multiple directional control valves — each valve occupying one "station" on the block's top face.
            </p>
            <p className=" text-justify">
              Internally, the block contains two shared longitudinal galleries running the full length of the block:
            </p>
            <ul className="list-disc pl-6 space-y-2 ">
              <li><strong>The P Gallery:</strong> Connects to the hydraulic power pack and distributes system pressure to all valve stations simultaneously.</li>
              <li><strong>The T Gallery:</strong> Collects the return oil from all valve stations and routes it back to the tank.</li>
            </ul>
            <p className=" text-justify">
              Each valve station has its own independent <strong>A and B work port pair</strong> exiting the block body, allowing each valve to control an independent actuator. This architecture allows one power pack to serve multiple cylinders from a single, centralized, completely leak-proof block.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ─── 03 Circuit Configuration ─── */
function CircuitConfigurationSection() {
  return (
    <Section bg="gray" id="circuit-configuration">
      <Container>
        <div className="text-center flex flex-col items-center max-w-3xl mx-auto mb-12">
          <Heading variant="section" as="h2" underline="center" className="text-honeywell-navy mb-4">
            Parallel vs. Series Circuit Configuration
          </Heading>
          <p className="text-lg text-brand-steelGray  text-justify">
            The internal gallery design dictates the operational logic of the multi-station block. The majority of industrial SPM applications use parallel centre configuration, allowing any valve to be operated independently or simultaneously.
          </p>
        </div>
        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden border border-slate-200">
            <thead>
              <tr className="bg-honeywell-navy text-white text-sm uppercase tracking-wider">
                <th className="p-4 font-bold border-r border-slate-600">Circuit Type</th>
                {MULTI_STATION_CIRCUIT_HEADERS.map((header, idx) => (
                  <th key={idx} className="p-4 font-bold border-r border-slate-600 last:border-r-0">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {MULTI_STATION_CIRCUIT_TYPES.map((row, idx) => (
                <tr key={idx} className="hover:bg-brand-surfaceGray transition-colors">
                  <td className="p-4 font-bold text-honeywell-navy border-r border-slate-200">{row.feature}</td>
                  {row.columns.map((col, i) => (
                    <td key={i} className="p-4 text-brand-darkSlate border-r border-slate-200 last:border-r-0">{col}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  );
}

/* ─── 04 Station Count ─── */
function StationCountSection() {
  return (
    <Section bg="white" id="station-count">
      <Container>
        <div className="text-center flex flex-col items-center max-w-3xl mx-auto mb-12">
          <Heading variant="section" as="h2" underline="center" className="text-honeywell-navy mb-4">
            Station Count Selection Guide
          </Heading>
          <p className="text-lg text-brand-steelGray  text-justify">
            Selecting the correct number of stations is determined by the number of independent actuators in your circuit. Our engineers will analyse your hydraulic schematic and recommend the optimal station count.
          </p>
        </div>
        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden border border-slate-200">
            <thead>
              <tr className="bg-honeywell-navy text-white text-sm uppercase tracking-wider">
                <th className="p-4 font-bold w-1/4">Station Count</th>
                <th className="p-4 font-bold w-3/8">Typical Machine Type</th>
                <th className="p-4 font-bold w-3/8">Cylinder Requirement</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {MULTI_STATION_COUNT_GUIDE.map((row, idx) => (
                <tr key={idx} className="hover:bg-brand-surfaceGray transition-colors">
                  <td className="p-4 font-bold text-honeywell-navy border-r border-slate-200">{row.feature}</td>
                  <td className="p-4 text-brand-darkSlate border-r border-slate-200">{row.columns[0]}</td>
                  <td className="p-4 text-brand-steelGray">{row.columns[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  );
}

/* ─── 05 CETOP Sizes ─── */
function CetopSizesSection() {
  return (
    <Section bg="gray" id="cetop-sizes">
      <Container>
        <div className="text-center flex flex-col items-center max-w-3xl mx-auto mb-16">
          <Heading variant="section" as="h2" underline="center" className="text-honeywell-navy mb-4">
            CETOP Size Options
          </Heading>
          <p className="text-lg text-brand-steelGray text-justify">
            Multi-station manifold blocks are available in all standard CETOP sizes to match your required flow rates.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {MULTI_STATION_CETOP_SIZES.map((size, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-slate-200 p-6 hover:border-honeywell-red/50 transition-colors">
              <h3 className="text-lg font-bold text-honeywell-navy mb-3">{size.title}</h3>
              <p className="text-brand-steelGray text-sm leading-relaxed  text-justify">{size.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── 06 Safety Features ─── */
function SafetyFeaturesSection() {
  return (
    <Section bg="white" id="safety-features">
      <Container>
        <div className="text-center flex flex-col items-center max-w-3xl mx-auto mb-16">
          <Heading variant="section" as="h2" underline="center" className="text-honeywell-navy mb-4">
            Integrated Safety Features
          </Heading>
          <p className="text-lg text-brand-steelGray  text-justify">
            Multi-station blocks can incorporate optional integrated safety logic, eliminating additional external valve installations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {MULTI_STATION_SAFETY_FEATURES.map((feature, idx) => (
            <div key={idx} className="bg-brand-lightSurface rounded-xl border border-slate-200 p-8 flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle2 className="w-6 h-6 text-honeywell-red" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-honeywell-navy mb-3">{feature.title}</h3>
                <p className="text-brand-steelGray leading-relaxed  text-justify">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── 07 Project Spotlight ─── */
function ProjectSpotlightSection() {
  return (
    <Section bg="gray" id="case-study">
      <Container>
        <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col md:flex-row">
          <div className="md:w-2/5 relative min-h-[300px]">
            <Image 
              src="/images/products/manifold-blocks/multi-station-manifold-block.webp" 
              alt="8-Station CETOP 5 Manifold Block for Automotive Welding SPM"
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4 bg-honeywell-navy text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded">
              OEM Case Study
            </div>
          </div>
          <div className="md:w-3/5 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-honeywell-navy mb-2">8-Station CETOP 5 Manifold Block for Automotive Welding SPM</h3>
            <p className="text-sm font-bold text-honeywell-red tracking-wide uppercase mb-6 text-justify">Tier-2 Automotive Supplier — Changodar GIDC, Ahmedabad</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-brand-darkSlate mb-2">The Challenge:</h4>
                <p className="text-brand-steelGray leading-relaxed text-justify">
                  An automotive supplier was building a robotic MIG welding SPM that required 8 hydraulic clamps. Their original design used 8 individual CETOP 5 subplates connected by 16 steel pipes, which occupied excessive space and developed 3 leaks during prototyping.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-brand-darkSlate mb-2">The Solution:</h4>
                <p className="text-brand-steelGray leading-relaxed text-justify">
                  We designed a single 8-station CETOP 5 parallel manifold block with integrated POCV cartridges at each A port for clamp load-holding. All 16 pilot connections were internalized, leaving only 8 external A-port connections.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-brand-darkSlate mb-2">The Outcome:</h4>
                <p className="text-brand-steelGray leading-relaxed text-justify">
                  The block replaced all 16 pipes and 32 fittings. No leaks were recorded during commissioning, and the robot cell footprint was reduced by 220mm, allowing for an optimized robot reach envelope.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ─── 08 Specs ─── */
function TechnicalSpecsSection() {
  return (
    <Section bg="white" id="specs">
      <Container>
        <div className="text-center flex flex-col items-center max-w-3xl mx-auto mb-12">
          <Heading variant="section" as="h2" underline="center" className="text-honeywell-navy mb-4">
            Technical Specifications
          </Heading>
        </div>
        <div className="max-w-4xl mx-auto">
          <SpecTable rows={MULTI_STATION_SPECS} />
        </div>
      </Container>
    </Section>
  );
}

/* ─── 09 FAQs ─── */
function FAQSection() {
  return (
    <SiteFAQSection 
      faqs={MULTI_STATION_FAQS} 
      title="Frequently Asked Questions"
      description="Common questions about our multi-station hydraulic manifold blocks."
      injectSchema={false}
    />
  );
}
