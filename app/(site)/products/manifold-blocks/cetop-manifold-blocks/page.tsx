/* eslint-disable */
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

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
  CETOP_SPECS,
  CETOP_SIZE_COMPARISON,
  CETOP_BRAND_COMPATIBILITY,
  CETOP_CONFIGURATIONS,
  CETOP_FAQS,
} from '@/data/manifold-blocks/cetop-manifold-blocks';

/* ═══════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════ */

const PAGE_TITLE = 'CETOP Manifold Blocks Manufacturer | ISO 4401 Subplates';
const PAGE_DESCRIPTION =
  'Precision CETOP manifold block manufacturer in India. We supply ISO 4401 compliant CETOP 3 (NG6), CETOP 5 (NG10), CETOP 7, and CETOP 8 subplates for all valve brands.';
const PAGE_URL = '/products/manifold-blocks/cetop-manifold-blocks/';
const PAGE_IMAGE = '/images/products/manifold-blocks/cetop-manifold-block-iso-4401.webp';

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
            name: 'CETOP Manifold Blocks',
            item: `${siteUrl}${PAGE_URL}`,
          },
        ],
      },
      /* 3. FAQPage */
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}${PAGE_URL}#faq`,
        mainEntity: CETOP_FAQS.map((faq) => ({
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

export default function CetopManifoldBlocksPage() {
  const schema = buildPageSchema();

  return (
    <>
      <JsonLd data={schema} />

      <HeroSection />
      <OverviewSection />
      <SizeComparisonSection />
      <ConfigurationsSection />
      <MaterialSpecsSection />
      <BrandCompatibilitySection />
      <ProjectSpotlightSection />
      
      <SiteLocationsSection
        title="CETOP Subplate Manufacturer in Gujarat"
        description="We supply ISO 4401 CETOP manifold blocks to OEMs, machine builders, and hydraulic distributors across Gujarat's industrial clusters with fast local turnaround times."
      />

      <FAQSection />

      <CTA
        title="Need OEM volume supply with guaranteed lead times?"
        description="Eliminate valve interface incompatibility and specify precisely manufactured, ISO 4401 certified CETOP subplates from Honeywell Hydraulics."
        primaryCtaText="REQUEST OEM QUOTE"
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
              <span className="text-brand-steelGray text-sm font-medium">CETOP Manifold Blocks</span>
            </div>

            <Heading variant="section" as="h1" className=" lg:text-[3.25rem] font-bold text-honeywell-navy leading-[1.1] mb-6">
              CETOP Manifold Blocks Manufacturer
            </Heading>

            <p className="text-lg text-brand-darkSlate mb-8 max-w-xl leading-relaxed  text-justify">
              Standardized, zero-tolerance valve interfaces for universal compatibility. We machine ISO 4401-compliant subplates in CETOP 3, 5, 7, and 8 sizes to guarantee bolt-pattern and port compatibility with all major directional control valves.
            </p>

            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Button href="/request-quote/" size="lg" variant="primary" className="w-full sm:w-auto font-bold tracking-wide">
                ORDER CETOP BLOCKS
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button href="/resources/downloads/" size="lg" variant="outline" className="w-full sm:w-auto bg-white hover:bg-brand-surfaceGray">
                DOWNLOAD DRAWINGS
              </Button>
            </div>
          </div>

          <div className="relative w-full aspect-[4/3] lg:aspect-square bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden group">
            <div className="absolute inset-0 bg-brand-surfaceGray opacity-50 rounded-xl" />
            <Image 
              src={PAGE_IMAGE} 
              alt="CETOP manifold blocks manufacturer in Ahmedabad — Honeywell Hydraulics" 
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
            What Are CETOP Manifold Blocks?
          </Heading>
          <div className="space-y-5 text-brand-darkSlate text-lg leading-relaxed">
            <p className=" text-justify">
              <strong className="text-honeywell-navy">CETOP</strong> (Comité Européen des Transmissions Oléohydrauliques et Pneumatiques) is the European standards body that established the ISO 4401 mounting interface for hydraulic directional control valves.
            </p>
            <p className=" text-justify">
              A <strong>CETOP manifold block</strong> — also called a subplate or valve base — is a precision-machined mounting platform that provides:
            </p>
            <ul className="list-disc pl-6 space-y-2 ">
              <li>A standardized bolt pattern for mounting any CETOP-compliant directional valve</li>
              <li>Internal fluid galleries connecting the P (Pressure), T (Tank), A, and B work ports of the valve to the external system ports on the subplate body</li>
              <li>Port threads (BSPP, NPT, or SAE) for connecting the subplate to the wider hydraulic circuit</li>
            </ul>
            <p className=" text-justify">
              Because the mounting pattern is internationally standardized, an OEM can specify a Honeywell-manufactured CETOP 5 subplate and mount any CETOP 5 valve from any brand onto it without modification — a critical advantage for procurement flexibility and long-term spares availability.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ─── 03 Size Comparison ─── */
function SizeComparisonSection() {
  return (
    <Section bg="gray" id="sizes">
      <Container>
        <div className="text-center flex flex-col items-center max-w-3xl mx-auto mb-12">
          <Heading variant="section" as="h2" underline="center" className="text-honeywell-navy mb-4">
            CETOP Size Comparison Table
          </Heading>
          <p className="text-lg text-brand-steelGray  text-justify">
            Understanding the correct CETOP size for your system flow requirement is fundamental to avoiding pressure drops. A mismatched CETOP size causes catastrophic fluid velocity in the internal galleries, generating heat and destroying the valve. Always size by flow rate, not by convenience.
          </p>
        </div>
        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden border border-slate-200">
            <thead>
              <tr className="bg-honeywell-navy text-white text-sm uppercase tracking-wider">
                <th className="p-4 font-bold">Standard</th>
                <th className="p-4 font-bold">ISO 4401 Size</th>
                <th className="p-4 font-bold">Nominal Flow</th>
                <th className="p-4 font-bold">Working Pressure</th>
                <th className="p-4 font-bold">Port Thread</th>
                <th className="p-4 font-bold">Applications</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {CETOP_SIZE_COMPARISON.map((row, idx) => (
                <tr key={idx} className="hover:bg-brand-surfaceGray transition-colors">
                  <td className="p-4 font-bold text-honeywell-navy">{row.standard}</td>
                  <td className="p-4 text-brand-darkSlate font-mono">{row.iso}</td>
                  <td className="p-4 text-brand-darkSlate">{row.flow}</td>
                  <td className="p-4 text-brand-darkSlate">{row.pressure}</td>
                  <td className="p-4 text-brand-darkSlate font-mono">{row.port}</td>
                  <td className="p-4 text-brand-steelGray">{row.application}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  );
}

/* ─── 04 Configurations ─── */
function ConfigurationsSection() {
  return (
    <Section bg="white" id="configurations">
      <Container>
        <div className="text-center flex flex-col items-center max-w-3xl mx-auto mb-16">
          <Heading variant="section" as="h2" underline="center" className="text-honeywell-navy mb-4">
            Standard Subplate Configurations
          </Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {CETOP_CONFIGURATIONS.map((config, idx) => (
            <div key={idx} className="bg-brand-lightSurface rounded-xl border border-slate-200 p-8 hover:border-honeywell-red/50 transition-colors">
              <h3 className="text-xl font-bold text-honeywell-navy mb-4">{config.title}</h3>
              <p className="text-brand-steelGray leading-relaxed text-justify">{config.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── 05 Material Specs ─── */
function MaterialSpecsSection() {
  return (
    <Section bg="gray" id="specs">
      <Container>
        <div className="text-center flex flex-col items-center max-w-3xl mx-auto mb-12">
          <Heading variant="section" as="h2" underline="center" className="text-honeywell-navy mb-4">
            Material & Machining Specifications
          </Heading>
          <p className="text-lg text-brand-steelGray  text-justify">
            Our CETOP subplates are manufactured to guarantee zero-leak valve seating under cyclic operating conditions.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <SpecTable rows={CETOP_SPECS} />
        </div>
      </Container>
    </Section>
  );
}

/* ─── 06 Brand Compatibility ─── */
function BrandCompatibilitySection() {
  return (
    <Section bg="white" id="compatibility">
      <Container>
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <Heading variant="section" as="h2" className="text-honeywell-navy mb-4">
              Brand Compatibility Matrix
            </Heading>
            <p className="text-lg text-brand-steelGray mb-6 leading-relaxed text-justify">
              ISO 4401 is a global standard. Any valve from any manufacturer labelled "CETOP 3", "CETOP 5", "NG6", or "NG10" will bolt directly to our corresponding subplate without modification.
            </p>
          </div>
          <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
            {CETOP_BRAND_COMPATIBILITY.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-brand-surfaceGray border border-slate-200 rounded-lg p-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Check className="w-4 h-4 font-bold" />
                </div>
                <span className="font-bold text-honeywell-navy">{item.brand}</span>
              </div>
            ))}
          </div>
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
              src="/images/products/manifold-blocks/cetop-manifold-block-iso-4401.webp" 
              alt="CETOP 5 Subplate OEM Supply"
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4 bg-honeywell-navy text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded">
              OEM Case Study
            </div>
          </div>
          <div className="md:w-3/5 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-honeywell-navy mb-2">CETOP 5 Subplate OEM Supply for Hydraulic Press Automation</h3>
            <p className="text-sm font-bold text-honeywell-red tracking-wide uppercase mb-6 text-justify">Press Machine Builder — Vatva GIDC, Ahmedabad</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-brand-darkSlate mb-2">The Challenge:</h4>
                <p className="text-brand-steelGray leading-relaxed text-justify">
                  A press machine builder needed a reliable local source for high-quality CETOP 5 subplates compatible with their Parker D1VW valves, requiring consistent quality, short lead times, and custom-drilled pilot ports.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-brand-darkSlate mb-2">The Solution:</h4>
                <p className="text-brand-steelGray leading-relaxed text-justify">
                  We became their sole-source supplier, producing ST52 steel subplates with zinc plating and custom pilot ports. We perform 100% hydrostatic testing and maintain a 2-week buffer stock at our facility.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-brand-darkSlate mb-2">The Outcome:</h4>
                <p className="text-brand-steelGray leading-relaxed text-justify">
                  The builder eliminated import dependency, reduced lead times from 8 weeks to 5 days, and achieved a significant cost reduction. Zero leaks reported across their entire fleet.
                </p>
              </div>
            </div>
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
      faqs={CETOP_FAQS} 
      title="Frequently Asked Questions"
      description="Common questions about our CETOP standard hydraulic manifold blocks."
      injectSchema={false}
    />
  );
}
