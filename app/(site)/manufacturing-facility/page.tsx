import React from 'react';
import { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { IconBox } from '@/components/ui/IconBox';
import { Button } from '@/components/ui/Button';
import { CTA } from '@/components/ui/CTA';
import { SiteFAQSection } from '@/components/faq/SiteFAQSection';
import JsonLd from '@/components/seo/JsonLd';
import { COMPANY_INFO } from '@/lib/constants';
import {
  ArrowRight,
  PenTool,
  Cog,
  Wrench,
  Layers,
  FlaskConical,
  Package,
  CheckCircle2,
  HardHat,
  ShieldCheck,
  Gauge,
  Camera,
  Users,
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// SEO Metadata
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  ...buildMetadata({
    title: 'Manufacturing Facility | Honeywell Hydraulics',
    description: 'Tour the Honeywell Hydraulics manufacturing facility in Kathwada GIDC, Ahmedabad. CNC machining, hydraulic testing, and quality inspection under one roof.',
    canonical: '/manufacturing-facility',
  }),
  keywords: 'hydraulic manufacturing facility ahmedabad, hydraulic cylinder factory, power pack manufacturing plant, kathwada gidc manufacturer',
};

// ─────────────────────────────────────────────────────────────────────────────
// Schema
// ─────────────────────────────────────────────────────────────────────────────
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${COMPANY_INFO.websiteUrl}/` },
    { '@type': 'ListItem', position: 2, name: 'About Us', item: `${COMPANY_INFO.websiteUrl}/about-us` },
    { '@type': 'ListItem', position: 3, name: 'Manufacturing Facility', item: `${COMPANY_INFO.websiteUrl}/manufacturing-facility` },
  ],
};

const manufacturingBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ManufacturingBusiness',
  '@id': `${COMPANY_INFO.websiteUrl}/manufacturing-facility#facility`,
  name: COMPANY_INFO.name,
  url: `${COMPANY_INFO.websiteUrl}/manufacturing-facility`,
  description: 'Hydraulic cylinder and power pack manufacturing facility in Kathwada GIDC, Ahmedabad.',
  telephone: COMPANY_INFO.phone,
  email: COMPANY_INFO.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY_INFO.address.streetAddress,
    addressLocality: COMPANY_INFO.address.addressLocality,
    addressRegion: COMPANY_INFO.address.addressRegion,
    postalCode: COMPANY_INFO.address.postalCode,
    addressCountry: COMPANY_INFO.address.addressCountry,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: COMPANY_INFO.geo.latitude,
    longitude: COMPANY_INFO.geo.longitude,
  },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Manufacturing Facility — Honeywell Hydraulics',
  url: `${COMPANY_INFO.websiteUrl}/manufacturing-facility`,
  description: 'Hydraulic cylinder and power pack manufacturing facility tour — Honeywell Hydraulics, Ahmedabad.',
};

// ─────────────────────────────────────────────────────────────────────────────
// Static content — sourced from docs/content/about/manufacturing-facility.md
// ─────────────────────────────────────────────────────────────────────────────
const WORKFLOW_STEPS = [
  {
    step: '01',
    icon: <PenTool className="w-6 h-6" />,
    title: 'Design & Engineering',
    body: 'CAD-based design with force, pressure, and thermal calculations. Every specification is physics-verified before manufacturing begins.',
  },
  {
    step: '02',
    icon: <Package className="w-6 h-6" />,
    title: 'Material Procurement',
    body: 'Raw materials procured with EN 10204 Type 3.1 certificates. Material received only after certificate verification against purchase order.',
  },
  {
    step: '03',
    icon: <Cog className="w-6 h-6" />,
    title: 'CNC Machining',
    body: 'Precision turning, deep-hole drilling, and honing on CNC machines. Cylinder barrels bored to H7 tolerance, surfaces finished to Ra 0.4 µm.',
  },
  {
    step: '04',
    icon: <Wrench className="w-6 h-6" />,
    title: 'Fabrication & Welding',
    body: 'Welded cylinder barrel-to-end cap construction with certified welding operators. Structural integrity verified at every weld joint.',
  },
  {
    step: '05',
    icon: <Layers className="w-6 h-6" />,
    title: 'Assembly & Integration',
    body: 'Power unit construction: reservoir preparation, motor-pump mounting, valve fitment, electrical wiring, and functional pre-testing.',
  },
  {
    step: '06',
    icon: <FlaskConical className="w-6 h-6" />,
    title: 'Testing & Dispatch',
    body: 'Hydrostatic pressure testing at 1.5× rated pressure. Test certificates issued. Protective packaging and documented dispatch.',
  },
];

const FACILITY_OVERVIEW = [
  { label: 'Location', value: 'Kathwada GIDC, Ahmedabad, Gujarat' },
  { label: 'Established', value: '2018' },
  { label: 'Operations', value: 'Multi-Shift Production' },
  { label: 'Certifications', value: 'ISO Standards Compliant' },
];

const CAPACITY_SPECS = [
  { label: 'Cylinder Bore Range', value: '25mm – 500mm+' },
  { label: 'Maximum Stroke', value: '3,000mm (standard), longer on request' },
  { label: 'Operating Pressure', value: 'Up to 350 Bar standard' },
  { label: 'Surface Finish', value: 'Ra 0.4 µm (honed barrels)' },
];

const GALLERY_ITEMS = [
  { name: 'CNC Turning Centre', file: '/images/facility/cnc-machining-center-hydraulic-cylinder.webp', alt: 'CNC turning centre for piston rod machining', isReady: true },
  { name: 'Welding Bay', file: '/images/manufacturing/welding-bay.webp', alt: 'Heavy-duty welding bay for cylinder barrel construction' },
  { name: 'Assembly Area', file: '/images/manufacturing/assembly-area.webp', alt: 'Hydraulic power pack assembly area' },
  { name: 'Test Rig', file: '/images/manufacturing/test-rig.webp', alt: 'Hydrostatic pressure test rig' },
];

const MFG_FAQS = [
  {
    question: 'Where is the Honeywell Hydraulics factory located?',
    answer:
      'Our manufacturing facility is located at B-18, Suryam Plaza Estate, Near Nilkanth Estate, Road no. 15, Kathwada GIDC, Ahmedabad, Gujarat 382430, India. We are in the heart of the Kathwada GIDC industrial zone.',
  },
  {
    question: 'What is the bore size range you can manufacture?',
    answer:
      'We manufacture hydraulic cylinders with bore sizes from 25mm to 500mm and above. Our CNC turning centres and deep-hole drilling machines accommodate a wide range of specifications. For bore sizes beyond our standard range, contact our engineering team to discuss custom capabilities.',
  },
  {
    question: 'Do you offer facility visits for clients?',
    answer:
      'Yes. We welcome client visits for facility audits, first-article inspections, and witnessed factory acceptance tests. Our team will walk you through every stage of the manufacturing process for your specific component or system. Contact sales@honeywellhydraulics.com to schedule a visit.',
  },
  {
    question: 'What is the maximum stroke length for cylinders?',
    answer:
      'Our standard maximum stroke length is 3,000mm. Longer strokes are available on request — our deep-hole drilling and honing equipment can accommodate extended specifications. Contact us with your specific stroke requirements.',
  },
  {
    question: 'Can you handle custom OEM manufacturing orders?',
    answer:
      'Yes. Custom OEM manufacturing is a core strength. We design and manufacture to your exact specifications with no additional design consultation fee. Our First Article turnaround is typically 7–15 working days, and we maintain dedicated capacity allocation for priority OEM orders.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: MFG_FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────
export default function ManufacturingFacilityPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={manufacturingBusinessSchema} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={faqSchema} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-honeywell-navy text-white pt-6 md:pt-8 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-honeywell-red opacity-5 -skew-x-12 translate-x-1/4" aria-hidden="true" />
        <Container className="relative z-10">
          <nav aria-label="Breadcrumb" className="text-sm font-body text-brand-borderGray mb-6">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li aria-hidden="true">&rsaquo;</li>
              <li className="text-white font-semibold" aria-current="page">Manufacturing Facility</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-sm bg-honeywell-red text-white text-xs font-bold uppercase tracking-wider mb-6">
              Built Here. Tested Here. Certified Here.
            </span>
            <Heading variant="hero" as="h1" className="text-white mb-6">
              Our Manufacturing Facility — Designed, Built, and Tested in Ahmedabad
            </Heading>
            <p className="text-brand-borderGray text-lg font-body leading-relaxed max-w-2xl">
              Every hydraulic cylinder, power pack, and accessory that leaves Honeywell Hydraulics is designed, machined, assembled, pressure-tested, and certified within our Ahmedabad manufacturing facility. We do not source from third-party fabricators and relabel — we manufacture.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Facility Overview ──────────────────── */}
      <Section bg="white" aria-labelledby="facility-overview-heading">
        <Container>
          <div className="text-center mb-12 flex flex-col items-center">
            <Heading as="h2" variant="section" id="facility-overview-heading" className="mb-3">
              Facility Overview
            </Heading>
            <p className="text-lg text-brand-steelGray font-body max-w-2xl mx-auto">
              End-to-end production control under one roof — from raw material receipt to final dispatch with test certification.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {FACILITY_OVERVIEW.map((item) => (
              <div key={item.label} className="bg-brand-surfaceGray border border-slate-200 rounded-sm p-5 text-center transition-all duration-350 ease-premium hover:shadow-float hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red group">
                <p className="text-sm text-[#94A3B8] font-body mb-1">{item.label}</p>
                <p className="text-sm font-display font-bold text-honeywell-navy group-hover:text-honeywell-red transition-colors">{item.value}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Manufacturing Workflow ──────────────────── */}
      <Section bg="gray" aria-labelledby="workflow-heading">
        <Container>
          <div className="text-center mb-14 flex flex-col items-center">
            <Heading as="h2" variant="section" id="workflow-heading" className="mb-3">
              End-to-End Manufacturing Workflow
            </Heading>
            <p className="text-lg text-brand-steelGray font-body max-w-2xl mx-auto">
              Six stages from design to dispatch — every stage controlled, documented, and quality-verified.
            </p>
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" aria-label="Manufacturing workflow steps">
            {WORKFLOW_STEPS.map((step) => (
              <li key={step.step} className="bg-white border border-slate-200 rounded-sm p-6 transition-all duration-350 ease-premium hover:shadow-float hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red relative group">
                <span className="absolute top-4 right-4 w-7 h-7 rounded-full bg-honeywell-red text-white text-xs font-bold flex items-center justify-center font-body">
                  {step.step}
                </span>
                <div className="w-12 h-12 rounded-full bg-honeywell-navy flex items-center justify-center text-white mb-4 group-hover:bg-honeywell-red group-hover:scale-110 transition-all duration-300">
                  {step.icon}
                </div>
                <Heading as="h3" variant="card" className="mb-2 group-hover:text-honeywell-red transition-colors">{step.title}</Heading>
                <p className="text-sm text-brand-steelGray font-body leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* ── Design & Engineering ──────────────────── */}
      <Section bg="white" aria-labelledby="design-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading as="h3" variant="subsection" id="design-heading" className="mb-3">
                Design &amp; Engineering
              </Heading>
              <p className="text-brand-darkSlate font-body leading-relaxed mb-4">
                Quality begins at the design phase. We calculate — not assume — the required wall thickness of every cylinder, the required motor kilowatt of every power unit, and the flow requirements of every system.
              </p>
              <ul className="space-y-3" role="list">
                {[
                  'CAD-based design with advanced engineering software',
                  'Force, pressure, and thermal calculations for every project',
                  'Minimum 4:1 safety factor on all pressure-bearing walls',
                  'Full kinematic analysis for multi-component systems',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-brand-darkSlate font-body">
                    <CheckCircle2 className="w-4 h-4 text-honeywell-red shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-brand-surfaceGray border border-slate-200 rounded-sm p-8">
              <div className="aspect-[4/3] bg-slate-200 rounded-sm flex items-center justify-center">
                <div className="text-center px-6">
                  <PenTool className="w-12 h-12 text-[#94A3B8] mx-auto mb-3" aria-hidden="true" />
                  <p className="text-sm font-semibold text-brand-darkSlate font-body">Engineering Design</p>
                  <p className="text-xs text-[#94A3B8] font-body">CAD-based hydraulic design</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Custom Manufacturing ──────────────────── */}
      <Section bg="gray" aria-labelledby="custom-mfg-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-honeywell-navy text-white rounded-sm p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-honeywell-red opacity-5 -skew-x-12 translate-x-1/4" aria-hidden="true" />
              <div className="relative z-10">
                <Users className="w-10 h-10 text-honeywell-red mb-4" aria-hidden="true" />
                <Heading as="h3" variant="card" className="text-white mb-4">OEM Partnership Benefits</Heading>
                <ul className="space-y-3">
                  {[
                    'No additional design consultation fee for custom work',
                    'First Article turnaround within 7–15 working days',
                    'Dedicated capacity allocation for priority orders',
                    'Direct factory communication — no middlemen',
                    'Transparent pricing with firm delivery timelines',
                    'Complete documentation package with every shipment',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-brand-borderGray font-body">
                      <CheckCircle2 className="w-4 h-4 text-honeywell-red shrink-0 mt-0.5" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Heading as="h2" variant="section" id="custom-mfg-heading" className="mb-3">
                Custom Manufacturing Capability
              </Heading>
              <p className="text-brand-darkSlate font-body leading-relaxed mb-4">
                The majority of our work is custom-engineered to specific load, speed, pressure, and spatial requirements. We design and manufacture hydraulic cylinders, power packs, and accessories to your exact specifications.
              </p>
              <p className="text-brand-darkSlate font-body leading-relaxed mb-4">
                Whether you are an OEM requiring consistent supply of custom-specified components, an SPM builder needing one-off hydraulic solutions, or a maintenance engineer seeking a precise replacement — our facility is equipped to deliver.
              </p>
              <div className="mt-6">
                <Button href="/request-quote" variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Request Custom Quote
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Production Capacity ───────────────────────────────────────────── */}
      <section className="bg-honeywell-navy py-12 md:py-16">
        <Container>
          <div className="text-center mb-10">
            <Heading as="h2" variant="section" className="text-white mb-4">
              Production Capacity
            </Heading>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {CAPACITY_SPECS.map((item) => (
              <div key={item.label} className="border border-white/10 rounded-sm p-5">
                <p className="text-lg md:text-xl font-display font-extrabold text-white mb-1">{item.value}</p>
                <p className="text-xs text-[#94A3B8] font-body uppercase tracking-wider">{item.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Safety Standards ──────────────────── */}
      <Section bg="white" aria-labelledby="safety-mfg-heading">
        <Container>
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <Heading as="h2" variant="section" id="safety-mfg-heading" className="mb-3">
              Safety &amp; Compliance Standards
            </Heading>
            <p className="text-lg text-brand-steelGray font-body mb-8">
              Manufacturing hydraulic equipment involves high-pressure systems and heavy components. Safety is integral to every operation.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: <HardHat className="w-5 h-5" />, label: 'PPE Compliance' },
                { icon: <ShieldCheck className="w-5 h-5" />, label: 'Fire Safety Systems' },
                { icon: <Gauge className="w-5 h-5" />, label: 'Electrical Safety' },
                { icon: <CheckCircle2 className="w-5 h-5" />, label: 'Regular Training' },
              ].map((item) => (
                <div key={item.label} className="bg-brand-surfaceGray border border-slate-200 rounded-sm p-4">
                  <IconBox icon={item.icon} variant="primary" size="sm" className="mx-auto mb-2" />
                  <p className="text-xs font-semibold text-honeywell-navy font-body">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Facility Gallery ──────────────────── */}
      <Section bg="gray" aria-labelledby="gallery-mfg-heading">
        <Container>
          <div className="text-center mb-12 flex flex-col items-center">
            <Heading as="h2" variant="section" id="gallery-mfg-heading" className="mb-3">
              Facility Gallery
            </Heading>
            <p className="text-lg text-brand-steelGray font-body max-w-2xl mx-auto">
              Inside our Kathwada GIDC manufacturing facility — from CNC machining to final testing and dispatch.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY_ITEMS.map((item) => (
              <div key={item.name} className="bg-white border border-slate-200 rounded-sm overflow-hidden transition-all duration-350 ease-premium hover:shadow-float hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red group">
                <div className="aspect-square bg-brand-lightSurface flex items-center justify-center relative">
                  {('isReady' in item) ? (
                    <Image
                      src={item.file}
                      alt={item.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-premium"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="text-center px-4">
                      <Camera className="w-8 h-8 text-brand-borderGray mx-auto mb-2" aria-hidden="true" />
                      <p className="text-xs text-[#94A3B8] font-body">{item.name}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-brand-steelGray font-body">
            Want to see our facility in person?{' '}
            <Link href="/contact-us" className="text-honeywell-red font-semibold hover:underline underline-offset-4">
              Schedule a facility visit →
            </Link>
          </p>
        </Container>
      </Section>

      {/* ── Lead Generation CTA ──────────────────────────────────────────── */}
      <CTA
        title="Ready to See Our Factory in Action?"
        description="We welcome facility visits, witnessed pressure tests, and OEM capability audits. Factory-direct hydraulic manufacturing from our Ahmedabad facility."
        primaryCtaText="Request a Quote"
        primaryCtaHref="/request-quote/"
        secondaryCtaText="Call +91 99243 43873"
        secondaryCtaHref="tel:+91-9924343873"
      />

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <SiteFAQSection faqs={MFG_FAQS} />
    </>
  );
}
