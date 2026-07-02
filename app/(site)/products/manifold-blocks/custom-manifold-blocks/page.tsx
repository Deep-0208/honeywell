/* eslint-disable */
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';

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
  CUSTOM_SPECS,
  CUSTOM_REASONS,
  CUSTOM_VS_STANDARD,
  CUSTOM_PROCESS,
  CUSTOM_FAQS,
} from '@/data/manifold-blocks/custom-manifold-blocks';

/* ═══════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════ */

const PAGE_TITLE = 'Custom Manifold Blocks Manufacturer | Bespoke Hydraulic Logic';
const PAGE_DESCRIPTION =
  'Expert custom hydraulic manifold block manufacturer in Gujarat. We design and CNC-machine bespoke cartridge valve manifolds for SPMs, test rigs, and complex OEM circuits.';
const PAGE_URL = '/products/manifold-blocks/custom-manifold-blocks/';
const PAGE_IMAGE = '/images/products/manifold-blocks/custom-manifold-block-cnc-machined.webp';

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
            name: 'Custom Manifold Blocks',
            item: `${siteUrl}${PAGE_URL}`,
          },
        ],
      },
      /* 3. FAQPage */
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}${PAGE_URL}#faq`,
        mainEntity: CUSTOM_FAQS.map((faq) => ({
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

export default function CustomManifoldBlocksPage() {
  const schema = buildPageSchema();

  return (
    <>
      <JsonLd data={schema} />

      <HeroSection />
      <OverviewSection />
      <WhyCustomSection />
      <DesignProcessSection />
      <CartridgeValveSection />
      <ComparisonSection />
      <ProjectSpotlightSection />
      <TechnicalSpecsSection />
      
      <SiteLocationsSection
        title="Custom Manifold Blocks in Gujarat"
        description="Our custom manifold design and machining service is available to OEMs, SPM builders, and automation integrators across Gujarat, with face-to-face design consultation available at our Ahmedabad facility."
      />

      <FAQSection />

      <CTA
        title="Have a hydraulic schematic and space constraints?"
        description="If your machine logic outgrows what standard blocks can deliver, Honeywell Hydraulics will design and manufacture the exact custom manifold block your circuit demands — guaranteed to fit, guaranteed to seal."
        primaryCtaText="REQUEST A CUSTOM DESIGN QUOTE"
        primaryCtaHref="/request-quote/"
        secondaryCtaText="Submit Schematic for Review"
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
              <span className="inline-block py-1 px-3 rounded-full bg-white border border-slate-200 text-honeywell-red font-bold tracking-widest text-xs uppercase shadow-sm">
                BESPOKE FLUID LOGIC ARCHITECTURE
              </span>
              <div className="h-4 w-px bg-slate-300" />
              <span className="text-brand-steelGray text-sm font-medium">Custom Manifold Blocks</span>
            </div>

            <Heading variant="hero" as="h1" className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-honeywell-navy leading-[1.1] mb-6">
              Custom Manifold Blocks Manufacturer
            </Heading>

            <p className="text-lg text-brand-darkSlate mb-8 max-w-xl leading-relaxed ">
              When standard CETOP blocks cannot solve the problem, we design the solution from scratch. We engineer completely bespoke hydraulic logic blocks for Special Purpose Machines, complex OEM automation circuits, and high-performance test rigs.
            </p>

            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Button href="/contact-us/" size="lg" variant="primary" className="w-full sm:w-auto font-bold tracking-wide">
                SUBMIT SCHEMATIC
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button href="/request-quote/" size="lg" variant="outline" className="w-full sm:w-auto bg-white hover:bg-brand-surfaceGray">
                REQUEST DESIGN QUOTE
              </Button>
            </div>
          </div>

          <div className="relative w-full aspect-[4/3] lg:aspect-square bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden group">
            <div className="absolute inset-0 bg-brand-surfaceGray opacity-50 rounded-xl" />
            <Image 
              src={PAGE_IMAGE} 
              alt="Custom manifold block manufacturer in Ahmedabad — Honeywell Hydraulics" 
              fill 
              priority 
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
            Consolidate Your Circuit. Eliminate Every Leak.
          </Heading>
          <div className="space-y-5 text-brand-darkSlate text-lg leading-relaxed">
            <p className="">
              We take your hydraulic schematic and transform it into a single, precision-machined monolithic block — eliminating every external fitting, every hose, and every potential leak point from your machine's logic centre.
            </p>
            <p className="">
              Standard <Link href="/products/manifold-blocks/cetop-manifold-blocks/" className="text-honeywell-red font-semibold hover:underline">CETOP subplates</Link> and <Link href="/products/manifold-blocks/multi-station-manifold-blocks/" className="text-honeywell-red font-semibold hover:underline">multi-station blocks</Link> solve the majority of industrial automation challenges. However, for specialized OEMs requiring absolute logic density, highly specific internal cross-porting, or the integration of advanced screw-in cartridge valves, a custom manifold block is the only viable engineering path.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ─── 03 Why Custom ─── */
function WhyCustomSection() {
  return (
    <Section bg="gray" id="why-custom">
      <Container>
        <div className="text-center flex flex-col items-center max-w-3xl mx-auto mb-16">
          <Heading variant="section" as="h2" underline="center" className="text-honeywell-navy mb-4">
            When Do You Need a Custom Manifold Block?
          </Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {CUSTOM_REASONS.map((reason, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-slate-200 p-8 transition-all hover:shadow-float hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red group">
              <IconBox icon={reason.icon} size="lg" variant="navy" className="mb-6 group-hover:bg-honeywell-red group-hover:text-white transition-colors" />
              <h3 className="text-xl font-bold text-honeywell-navy mb-3">{reason.title}</h3>
              <p className="text-brand-steelGray leading-relaxed ">{reason.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── 04 Design Process ─── */
function DesignProcessSection() {
  return (
    <Section bg="white" id="design-process">
      <Container>
        <div className="text-center flex flex-col items-center max-w-3xl mx-auto mb-16">
          <Heading variant="section" as="h2" underline="center" className="text-honeywell-navy mb-4">
            The Custom Manifold Design Process
          </Heading>
          <p className="text-lg text-brand-steelGray ">
            Our Custom Hydraulic System Design division follows a rigorous, stage-gated design process to guarantee first-time success.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-px" />
          
          <div className="space-y-12">
            {CUSTOM_PROCESS.map((step, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row items-start ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-honeywell-red flex items-center justify-center text-white font-bold -translate-x-1/2 z-10 border-4 border-white shadow-sm">
                  {idx + 1}
                </div>
                
                <div className="pl-12 md:pl-0 w-full md:w-1/2">
                  <div className={`bg-brand-lightSurface p-6 md:p-8 rounded-xl border border-slate-200 ${idx % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                    <h3 className="text-xl font-bold text-honeywell-navy mb-3">Stage {idx + 1}: {step.title}</h3>
                    <p className="text-brand-steelGray leading-relaxed ">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ─── 05 Cartridge Valves ─── */
function CartridgeValveSection() {
  return (
    <Section bg="gray" id="cartridge-valves">
      <Container>
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <Heading variant="section" as="h2" className="text-honeywell-navy mb-6">
              Cartridge Valve Integration
            </Heading>
            <div className="space-y-4 text-brand-darkSlate text-lg leading-relaxed ">
              <p>
                Our primary specialty within custom manifold design is the integration of <strong>screw-in cartridge valves</strong>. Unlike CETOP valves, cartridges screw directly into a machined cavity within the block body, making them completely internal and invisible from the outside.
              </p>
              <p>
                We machine cavities to the exact specifications of leading cartridge valve brands:
              </p>
              <ul className="space-y-2 mt-4 font-bold text-honeywell-navy">
                <li className="flex items-center gap-2"><ChevronRight className="w-5 h-5 text-honeywell-red" /> Sun Hydraulics / Hydraforce</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-5 h-5 text-honeywell-red" /> Bosch Rexroth (SE, SL, SP series)</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-5 h-5 text-honeywell-red" /> Parker Hannifin logic elements</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-5 h-5 text-honeywell-red" /> Bucher Hydraulics logic cartridges</li>
              </ul>
            </div>
          </div>
          <div className="lg:w-1/2 relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <Image 
              src="/images/products/manifold-blocks/custom-manifold-block-cnc-machined.webp" 
              alt="Cartridge valve custom manifold block"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ─── 06 Comparison ─── */
function ComparisonSection() {
  return (
    <Section bg="white" id="comparison">
      <Container>
        <div className="text-center flex flex-col items-center max-w-3xl mx-auto mb-12">
          <Heading variant="section" as="h2" underline="center" className="text-honeywell-navy mb-4">
            Custom Block vs. Standard Block
          </Heading>
          <p className="text-lg text-brand-steelGray">Decision Matrix</p>
        </div>
        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden border border-slate-200">
            <thead>
              <tr className="bg-honeywell-navy text-white text-sm uppercase tracking-wider">
                <th className="p-4 font-bold w-1/4 border-r border-slate-600">Design Factor</th>
                <th className="p-4 font-bold w-3/8 border-r border-slate-600">Custom Manifold Block</th>
                <th className="p-4 font-bold w-3/8">Standard CETOP/Multi-Station Block</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {CUSTOM_VS_STANDARD.map((row, idx) => (
                <tr key={idx} className="hover:bg-brand-surfaceGray transition-colors">
                  <td className="p-4 font-bold text-honeywell-navy border-r border-slate-200">{row.feature}</td>
                  <td className="p-4 text-brand-darkSlate font-medium border-r border-slate-200 bg-green-50/30">{row.columns[0]}</td>
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

/* ─── 07 Project Spotlight ─── */
function ProjectSpotlightSection() {
  return (
    <Section bg="gray" id="case-study">
      <Container>
        <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col md:flex-row">
          <div className="md:w-2/5 relative min-h-[300px]">
            <Image 
              src="/images/products/manifold-blocks/custom-manifold-block-cnc-machined.webp" 
              alt="Custom Cartridge Manifold for 12-Axis SPM"
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4 bg-honeywell-navy text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded">
              OEM Case Study
            </div>
          </div>
          <div className="md:w-3/5 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-honeywell-navy mb-2">Custom Cartridge Manifold for 12-Axis SPM Automation</h3>
            <p className="text-sm font-bold text-honeywell-red tracking-wide uppercase mb-6">Automotive Component Manufacturer — Sanand GIDC, Ahmedabad</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-brand-darkSlate mb-2">The Challenge:</h4>
                <p className="text-brand-steelGray leading-relaxed">
                  An automotive manufacturer was building a custom SPM requiring 12 independent clamping circuits with sequence valves and pilot-operated check valves. The machine frame allowed only 180mm × 280mm of vertical space for the entire logic assembly.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-brand-darkSlate mb-2">The Solution:</h4>
                <p className="text-brand-steelGray leading-relaxed">
                  Standard CETOP blocks would have required 900mm of rail length. We designed a single custom block measuring 165mm × 270mm × 310mm, integrating 12 Sun Hydraulics sequence/check cartridge sets entirely internally.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-brand-darkSlate mb-2">The Outcome:</h4>
                <p className="text-brand-steelGray leading-relaxed">
                  The block fit the tight dimensions perfectly, eliminated 48 external fittings, and achieved zero leaks on the first hydrostatic test, allowing the SPM to meet its 8-second cycle time specification immediately.
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
          <SpecTable specs={CUSTOM_SPECS} />
        </div>
      </Container>
    </Section>
  );
}

/* ─── 09 FAQs ─── */
function FAQSection() {
  return (
    <SiteFAQSection 
      faqs={CUSTOM_FAQS} 
      title="Frequently Asked Questions"
      description="Common questions about our custom manifold block design and manufacturing capabilities."
      injectSchema={false}
    />
  );
}
