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
import { SpecTable } from '@/components/tables/SpecTable';
import { SiteLocationsSection } from '@/components/locations/SiteLocationsSection';
import { SiteFAQSection } from '@/components/faq/SiteFAQSection';

import {
  NG16_SPECS,
  NG16_PERFORMANCE,
  NG16_PRODUCT_RANGE,
  NG16_MATERIALS,
  NG16_MATERIAL_HEADERS,
  NG16_FAQS,
} from '@/data/manifold-blocks/10-size-manifold-blocks';

/* ═══════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════ */

const PAGE_TITLE = 'NG16 (10-Size) Manifold Blocks | High-Flow CETOP 7 Subplates';
const PAGE_DESCRIPTION =
  'NG16 / 10-size manifold blocks manufacturer in India. Precision CETOP 7 (NG16) subplates for high-flow hydraulic circuits up to 250 LPM. Steel and aluminium, ISO 4401 compliant.';
const PAGE_URL = '/products/manifold-blocks/10-size-manifold-blocks/';
const PAGE_IMAGE = '/images/products/manifold-blocks/10-size-manifold-block-ng16.webp';

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
            name: 'NG16 / 10-Size Manifold Blocks',
            item: `${siteUrl}${PAGE_URL}`,
          },
        ],
      },
      /* 3. FAQPage */
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}${PAGE_URL}#faq`,
        mainEntity: NG16_FAQS.map((faq) => ({
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

export default function NG16ManifoldBlocksPage() {
  const schema = buildPageSchema();

  return (
    <>
      <JsonLd data={schema} />

      <HeroSection />
      <OverviewSection />
      <PerformanceEnvelopeSection />
      <ProductRangeSection />
      <MaterialSelectionSection />
      <ProjectSpotlightSection />
      <TechnicalSpecsSection />
      
      <SiteLocationsSection
        title="NG16 Manifold Blocks in Gujarat"
        description="We supply NG16 manifold blocks to press manufacturers, material handling OEMs, and industrial automation companies across Gujarat."
      />

      <FAQSection />

      <CTA
        title="Need NG16 subplates in stock with fast delivery?"
        description="The correct specification for high-flow industrial hydraulic circuits."
        primaryCtaText="ORDER NG16 BLOCKS"
        primaryCtaHref="/request-quote/"
        secondaryCtaText="Submit Circuit Schematic"
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
                HIGH-FLOW INDUSTRIAL POWER INTERFACE
              </span>
              <div className="h-4 w-px bg-slate-300" />
              <span className="text-brand-steelGray text-sm font-medium">NG16 / 10-Size Manifolds</span>
            </div>

            <Heading variant="hero" as="h1" className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-honeywell-navy leading-[1.1] mb-6">
              NG16 / 10-Size Manifold Blocks Manufacturer
            </Heading>

            <p className="text-lg text-brand-darkSlate mb-8 max-w-xl leading-relaxed ">
              When the job demands serious flow and serious force. We manufacture heavy-duty NG16 (CETOP 7 / 10-Size) manifold blocks — the correct specification for high-flow industrial hydraulic circuits up to 250 LPM.
            </p>

            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Button href="/request-quote/" size="lg" variant="primary" className="w-full sm:w-auto font-bold tracking-wide">
                ORDER NG16 BLOCKS
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button href="/resources/downloads/" size="lg" variant="outline" className="w-full sm:w-auto bg-white hover:bg-brand-surfaceGray">
                DOWNLOAD DATASHEET
              </Button>
            </div>
          </div>

          <div className="relative w-full aspect-[4/3] lg:aspect-square bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden group">
            <div className="absolute inset-0 bg-brand-surfaceGray opacity-50 rounded-xl" />
            <Image 
              src={PAGE_IMAGE} 
              alt="NG16 10-size manifold blocks manufacturer in Ahmedabad — Honeywell Hydraulics" 
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
            When Is NG16 (10-Size) Required?
          </Heading>
          <div className="space-y-5 text-brand-darkSlate text-lg leading-relaxed">
            <p className="">
              The most common and costly mistake in hydraulic manifold specification is <strong className="text-honeywell-navy">undersizing the valve interface</strong>. Machine builders frequently default to NG10 (CETOP 5) blocks because they are cheaper and more readily available — then wonder why their machines run hot, cycle slowly, and suffer premature valve failure.
            </p>
            <p className="font-bold text-honeywell-red">
              The rule is simple: If your circuit flow rate exceeds 80 LPM at the directional valve, you must use NG16 or larger.
            </p>
            <p className="">
              Common scenarios requiring NG16:
            </p>
            <ul className="list-disc pl-6 space-y-2 ">
              <li><strong>Large-bore cylinders:</strong> A 160mm bore cylinder extending at 0.1 m/s requires ~200 LPM. Routing 200 LPM through an NG10 block creates 15+ m/s fluid velocity — this is catastrophic for the valve and the system.</li>
              <li><strong>Multiple small cylinders on one valve:</strong> If one directional valve serves two or three cylinders simultaneously, the combined flow demand may exceed NG10 capacity.</li>
              <li><strong>High-speed automation:</strong> Presses and handling equipment requiring rapid cylinder travel speeds generate high peak flow demands that exhaust NG10 capacity.</li>
              <li><strong>Long-stroke cylinders:</strong> Large fluid volume requirements per cycle may not cause velocity problems but create temperature issues in NG10 blocks with their smaller T gallery cross-sections.</li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ─── 03 Performance Envelope ─── */
function PerformanceEnvelopeSection() {
  return (
    <Section bg="gray" id="performance">
      <Container>
        <div className="text-center flex flex-col items-center max-w-3xl mx-auto mb-12">
          <Heading variant="section" as="h2" underline="center" className="text-honeywell-navy mb-4">
            NG16 Technical Specification
          </Heading>
        </div>
        <div className="max-w-4xl mx-auto">
          <SpecTable specs={NG16_PERFORMANCE} />
        </div>
      </Container>
    </Section>
  );
}

/* ─── 04 Product Range ─── */
function ProductRangeSection() {
  return (
    <Section bg="white" id="product-range">
      <Container>
        <div className="text-center flex flex-col items-center max-w-3xl mx-auto mb-16">
          <Heading variant="section" as="h2" underline="center" className="text-honeywell-navy mb-4">
            NG16 Product Range
          </Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {NG16_PRODUCT_RANGE.map((product, idx) => (
            <div key={idx} className="bg-brand-lightSurface rounded-xl border border-slate-200 p-8 hover:border-honeywell-red/50 transition-colors">
              <h3 className="text-xl font-bold text-honeywell-navy mb-4">{product.title}</h3>
              <p className="text-brand-steelGray leading-relaxed">{product.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── 05 Material Selection ─── */
function MaterialSelectionSection() {
  return (
    <Section bg="gray" id="material-selection">
      <Container>
        <div className="text-center flex flex-col items-center max-w-3xl mx-auto mb-12">
          <Heading variant="section" as="h2" underline="center" className="text-honeywell-navy mb-4">
            Material Selection Guide for Heavy Industry
          </Heading>
          <p className="text-lg text-brand-steelGray ">
            NG16 blocks are predominantly used in heavy industrial environments where material selection is critical. Ductile Iron is frequently specified for NG16 blocks in forging and heavy-press environments because its damping characteristics absorb the pressure pulsations generated by large displacement gear pumps.
          </p>
        </div>
        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden border border-slate-200">
            <thead>
              <tr className="bg-honeywell-navy text-white text-sm uppercase tracking-wider">
                {NG16_MATERIAL_HEADERS.map((header, idx) => (
                  <th key={idx} className="p-4 font-bold border-r border-slate-600 last:border-r-0">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {NG16_MATERIALS.map((row, idx) => (
                <tr key={idx} className="hover:bg-brand-surfaceGray transition-colors">
                  <td className="p-4 font-bold text-honeywell-navy border-r border-slate-200">{row.feature}</td>
                  <td className="p-4 text-brand-darkSlate font-medium border-r border-slate-200">{row.columns[0]}</td>
                  <td className="p-4 text-brand-steelGray font-mono">{row.columns[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  );
}

/* ─── 06 Project Spotlight ─── */
function ProjectSpotlightSection() {
  return (
    <Section bg="white" id="case-study">
      <Container>
        <div className="max-w-5xl mx-auto bg-brand-lightSurface rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col md:flex-row">
          <div className="md:w-2/5 relative min-h-[300px]">
            <Image 
              src="/images/products/manifold-blocks/10-size-manifold-block-ng16.webp" 
              alt="NG16 4-Station Manifold Block for Hydraulic Goods Lift"
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4 bg-honeywell-navy text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded">
              OEM Case Study
            </div>
          </div>
          <div className="md:w-3/5 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-honeywell-navy mb-2">NG16 4-Station Manifold Block for Hydraulic Goods Lift</h3>
            <p className="text-sm font-bold text-honeywell-red tracking-wide uppercase mb-6">Material Handling Equipment Builder — Odhav GIDC, Ahmedabad</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-brand-darkSlate mb-2">The Challenge:</h4>
                <p className="text-brand-steelGray leading-relaxed">
                  A 10-tonne capacity hydraulic goods lift using four 200mm bore cylinders was suffering from premature valve seal degradation and synchronization hunting. Their previous design used four separate NG10 CETOP 5 blocks which were grossly undersized for the flow.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-brand-darkSlate mb-2">The Solution:</h4>
                <p className="text-brand-steelGray leading-relaxed">
                  We redesigned the logic around a single 4-station NG16 manifold block in ST52 steel. The enlarged galleries eliminated velocity-induced pressure drops, and we integrated proportional flow-control cartridges per station directly within the block body.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-brand-darkSlate mb-2">The Outcome:</h4>
                <p className="text-brand-steelGray leading-relaxed">
                  System operating temperature dropped by 22°C. The platform achieved ±1.2mm synchronization accuracy. The client standardized NG16 architecture across their entire heavy goods lift range.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ─── 07 Specs ─── */
function TechnicalSpecsSection() {
  return (
    <Section bg="gray" id="specs">
      <Container>
        <div className="text-center flex flex-col items-center max-w-3xl mx-auto mb-12">
          <Heading variant="section" as="h2" underline="center" className="text-honeywell-navy mb-4">
            Technical Specifications
          </Heading>
        </div>
        <div className="max-w-4xl mx-auto">
          <SpecTable specs={NG16_SPECS} />
        </div>
      </Container>
    </Section>
  );
}

/* ─── 08 FAQs ─── */
function FAQSection() {
  return (
    <SiteFAQSection 
      faqs={NG16_FAQS} 
      title="Frequently Asked Questions"
      description="Common questions about our NG16 (10-Size) CETOP 7 hydraulic manifold blocks."
      injectSchema={false}
    />
  );
}
