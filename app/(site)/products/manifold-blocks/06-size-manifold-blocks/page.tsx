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
import { SpecTable } from '@/components/tables/SpecTable';
import { SiteLocationsSection } from '@/components/locations/SiteLocationsSection';
import { SiteFAQSection } from '@/components/faq/SiteFAQSection';

import {
  NG10_SPECS,
  NG10_PERFORMANCE,
  NG10_PRODUCT_RANGE,
  NG10_SIZE_COMPARISON,
  NG10_SIZE_HEADERS,
  NG10_FAQS,
} from '@/data/manifold-blocks/06-size-manifold-blocks';

/* ═══════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════ */

const PAGE_TITLE = 'NG10 (06-Size) Manifold Blocks | CETOP 5 Hydraulic Subplates';
const PAGE_DESCRIPTION =
  'NG10 / 06-size hydraulic manifold blocks manufacturer in India. We supply precision CETOP 5 (NG10) subplates and multi-station blocks for industrial automation up to 120 LPM.';
const PAGE_URL = '/products/manifold-blocks/06-size-manifold-blocks/';
const PAGE_IMAGE = '/images/products/manifold-blocks/06-size-manifold-block-ng10.webp';

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
            name: 'NG10 / 06-Size Manifold Blocks',
            item: `${siteUrl}${PAGE_URL}`,
          },
        ],
      },
      /* 3. FAQPage */
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}${PAGE_URL}#faq`,
        mainEntity: NG10_FAQS.map((faq) => ({
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

export default function NG10ManifoldBlocksPage() {
  const schema = buildPageSchema();

  return (
    <>
      <JsonLd data={schema} />

      <HeroSection />
      <OverviewSection />
      <PerformanceEnvelopeSection />
      <ProductRangeSection />
      <SizeComparisonSection />
      <ProjectSpotlightSection />
      <TechnicalSpecsSection />
      
      <SiteLocationsSection
        title="NG10 Manifold Blocks in Gujarat"
        description="We supply NG10 manifold blocks with short lead times to machine builders across Gujarat's GIDC industrial estates."
      />

      <FAQSection />

      <CTA
        title="Need standard NG10 subplates with fast delivery?"
        description="The most widely used hydraulic valve interface size in industrial manufacturing."
        primaryCtaText="ORDER NG10 BLOCKS"
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
    <div className="relative bg-white pt-2 pb-16 md:pt-4 md:pb-24 overflow-hidden border-b border-slate-200" id="hero">
      <div className="absolute inset-0 bg-brand-surfaceGray" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-white to-transparent" aria-hidden="true" />
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col items-start z-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block py-1 px-3 rounded-full bg-white border border-slate-200 text-honeywell-red font-bold tracking-widest text-xs uppercase shadow-sm">
                THE INDUSTRIAL WORKHORSE SIZE
              </span>
              <div className="h-4 w-px bg-slate-300" />
              <span className="text-brand-steelGray text-sm font-medium">NG10 / 06-Size Manifolds</span>
            </div>

            <Heading variant="hero" as="h1" className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-honeywell-navy leading-[1.1] mb-6">
              NG10 / 06-Size Manifold Blocks Manufacturer
            </Heading>

            <p className="text-lg text-brand-darkSlate mb-8 max-w-xl leading-relaxed text-justify">
              The most widely used hydraulic valve interface size in industrial manufacturing. We manufacture high-precision NG10 (CETOP 5 / 06-Size) manifold blocks — the universally adopted standard for medium-duty industrial automation up to 120 LPM.
            </p>

            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Button href="/request-quote/" size="lg" variant="primary" className="w-full sm:w-auto font-bold tracking-wide">
                ORDER NG10 BLOCKS
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button href="/resources/downloads/" size="lg" variant="outline" className="w-full sm:w-auto bg-white hover:bg-brand-surfaceGray">
                DOWNLOAD LIBRARY
              </Button>
            </div>
          </div>

          <div className="relative w-full aspect-[4/3] lg:aspect-square bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden group">
            <div className="absolute inset-0 bg-brand-surfaceGray opacity-50 rounded-xl" />
            <Image 
              src={PAGE_IMAGE} 
              alt="NG10 06-size manifold blocks manufacturer in Ahmedabad — Honeywell Hydraulics" 
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
            Understanding the NG10 / 06 Designation
          </Heading>
          <div className="space-y-5 text-brand-darkSlate text-lg leading-relaxed">
            <p className="text-justify">
              The <strong>NG10</strong> and <strong>06-Size</strong> designations both refer to the same physical valve interface, governed by <strong>ISO 4401</strong> (CETOP 5). The dual naming convention exists because different regions use different terminology:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-justify">
              <li><strong>NG10:</strong> European designation used by Rexroth, Atos, and Wandfluh. "NG" = Nenngröße (Nominal Size in German).</li>
              <li><strong>CETOP 5:</strong> French standards body designation. Numerically refers to the standardized mounting interface.</li>
              <li><strong>06-Size:</strong> North American designation used by Parker, Vickers, and Eaton/Danfoss.</li>
            </ul>
            <p className="text-justify font-bold text-honeywell-navy">
              All three designations are physically identical. A Parker D3W "06-size" directional valve will mount directly onto a Honeywell CETOP 5 (NG10) manifold block — same bolt pattern, same port locations, same O-ring groove sizes.
            </p>
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
            NG10 Performance Envelope
          </Heading>
          <p className="text-lg text-brand-steelGray text-justify">
            Understanding the operating limits of the NG10 interface prevents undersizing (which causes dangerous heat generation) or oversizing (which wastes capital). Attempting to run 200 LPM through an NG10 block will create fluid velocity exceeding 6 m/s in the internal galleries, generating severe heat and turbulence that destroys the directional valve internals.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <SpecTable specs={NG10_PERFORMANCE} />
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
            NG10 Block Product Range
          </Heading>
          <p className="text-lg text-brand-steelGray">
            We manufacture the full NG10 product family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {NG10_PRODUCT_RANGE.map((product, idx) => (
            <div key={idx} className="bg-brand-lightSurface rounded-xl border border-slate-200 p-8 hover:border-honeywell-red/50 transition-colors">
              <h3 className="text-xl font-bold text-honeywell-navy mb-4">{product.title}</h3>
              <p className="text-brand-steelGray text-justify leading-relaxed">{product.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── 05 Size Comparison ─── */
function SizeComparisonSection() {
  return (
    <Section bg="gray" id="size-comparison">
      <Container>
        <div className="text-center flex flex-col items-center max-w-3xl mx-auto mb-12">
          <Heading variant="section" as="h2" underline="center" className="text-honeywell-navy mb-4">
            NG10 vs. NG6 and NG16: Choosing the Right Size
          </Heading>
          <p className="text-lg text-brand-steelGray text-justify">
            If you are in doubt between NG10 and NG16, calculate your actual circuit flow: Cylinder Bore² × π/4 × Piston Speed = Flow Rate (LPM). Match this to the NG size capacity.
          </p>
        </div>
        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden border border-slate-200">
            <thead>
              <tr className="bg-honeywell-navy text-white text-sm uppercase tracking-wider">
                <th className="p-4 font-bold border-r border-slate-600">Design Consideration</th>
                {NG10_SIZE_HEADERS.map((header, idx) => (
                  <th key={idx} className={`p-4 font-bold border-r border-slate-600 last:border-r-0 ${idx === 1 ? 'bg-honeywell-red' : ''}`}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {NG10_SIZE_COMPARISON.map((row, idx) => (
                <tr key={idx} className="hover:bg-brand-surfaceGray transition-colors">
                  <td className="p-4 font-bold text-honeywell-navy border-r border-slate-200">{row.feature}</td>
                  {row.columns.map((col, i) => (
                    <td key={i} className={`p-4 text-brand-darkSlate border-r border-slate-200 last:border-r-0 ${i === 1 ? 'font-bold bg-green-50/30' : ''}`}>{col}</td>
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

/* ─── 06 Project Spotlight ─── */
function ProjectSpotlightSection() {
  return (
    <Section bg="white" id="case-study">
      <Container>
        <div className="max-w-5xl mx-auto bg-brand-lightSurface rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col md:flex-row">
          <div className="md:w-2/5 relative min-h-[300px]">
            <Image 
              src="/images/products/manifold-blocks/06-size-manifold-block-ng10.webp" 
              alt="NG10 4-Station Manifold Block for Injection Moulding Core-Pull System"
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4 bg-honeywell-navy text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded">
              OEM Case Study
            </div>
          </div>
          <div className="md:w-3/5 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-honeywell-navy mb-2">NG10 4-Station Manifold Block for Injection Moulding Core-Pull</h3>
            <p className="text-sm font-bold text-honeywell-red tracking-wide uppercase mb-6">Plastic Injection Mould Manufacturer — Sachin GIDC, Surat</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-brand-darkSlate mb-2">The Challenge:</h4>
                <p className="text-brand-steelGray text-justify leading-relaxed">
                  A mould manufacturer building an 8-cavity injection mould needed to integrate a 4-axis hydraulic core-pull system inside the mould base itself. Four individual NG10 subplates connected by external piping would not fit.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-brand-darkSlate mb-2">The Solution:</h4>
                <p className="text-brand-steelGray text-justify leading-relaxed">
                  We designed a compact 4-station NG10 parallel manifold block with all four valve stations on one face. All P and T connections were internalized, and block height was minimized by using low-profile solenoid valves.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-brand-darkSlate mb-2">The Outcome:</h4>
                <p className="text-brand-steelGray text-justify leading-relaxed">
                  The assembly fit within the mould base with 12mm to spare. The mould achieved a 6.2-second cycle time — 0.8 seconds faster than the competitor's external-pipework solution due to reduced fluid dead-volume.
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
          <SpecTable specs={NG10_SPECS} />
        </div>
      </Container>
    </Section>
  );
}

/* ─── 08 FAQs ─── */
function FAQSection() {
  return (
    <SiteFAQSection 
      faqs={NG10_FAQS} 
      title="Frequently Asked Questions"
      description="Common questions about our NG10 (06-Size) CETOP 5 hydraulic manifold blocks."
      injectSchema={false}
    />
  );
}
