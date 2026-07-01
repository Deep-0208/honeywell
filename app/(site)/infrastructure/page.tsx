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
  Factory,
  Cog,
  Microscope,
  Package,
  ShieldCheck,
  Gauge,
  Wrench,
  HardHat,
  CheckCircle2,
  Camera,
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// SEO Metadata
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  ...buildMetadata({
    title: 'Manufacturing Infrastructure | Honeywell Hydraulics',
    description:
      'Explore Honeywell Hydraulics manufacturing infrastructure — CNC machining, deep-hole drilling, honing machines, and hydrostatic test rigs in Ahmedabad.',
    canonical: '/infrastructure',
  }),
  keywords: 'hydraulic manufacturing infrastructure, CNC machining facility ahmedabad, hydraulic testing equipment, manufacturing plant gujarat',
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
    { '@type': 'ListItem', position: 3, name: 'Infrastructure', item: `${COMPANY_INFO.websiteUrl}/infrastructure` },
  ],
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Manufacturing Infrastructure — Honeywell Hydraulics',
  url: `${COMPANY_INFO.websiteUrl}/infrastructure`,
  description: 'CNC machining, testing, and quality inspection infrastructure at Honeywell Hydraulics Ahmedabad.',
};

// ─────────────────────────────────────────────────────────────────────────────
// Static content — sourced from docs/content/about/manufacturing-facility.md
// ─────────────────────────────────────────────────────────────────────────────
const MACHINING_EQUIPMENT = [
  {
    name: 'CNC Turning Centres',
    desc: 'Precision turning of piston rods, end caps, and cylinder barrels. Machining capability for large bore diameters.',
    icon: <Cog className="w-6 h-6" />,
  },
  {
    name: 'Deep-Hole Drilling Machines',
    desc: 'Boring cylinder barrel ID to H7 tolerance. Bore range covering standard and oversized specifications.',
    icon: <Wrench className="w-6 h-6" />,
  },
  {
    name: 'Honing Machines',
    desc: 'Final cylinder barrel surface finish to Ra 0.4 µm — required for optimal seal compatibility and longevity.',
    icon: <Gauge className="w-6 h-6" />,
  },
  {
    name: 'Heavy-Duty Welding Bays',
    desc: 'Welded cylinder barrel-to-end cap construction with certified welding operators for structural integrity.',
    icon: <Factory className="w-6 h-6" />,
  },
];

const TESTING_EQUIPMENT = [
  {
    name: 'Cylinder Test Rig',
    desc: '0–700 Bar testing capability. Cycle testing with full documentation. Test certificates issued for every cylinder manufactured.',
  },
  {
    name: 'Component Pressure Test Rig',
    desc: 'Pressurised seal testing at 1.5× rated working pressure with inter-port leak verification for all components.',
  },
  {
    name: 'System Test Stand',
    desc: 'Complete hydraulic system functional testing — all valves actuated, all sensors verified, all pressures and flow rates documented.',
  },
];

const QUALITY_EQUIPMENT = [
  'CMM (Coordinate Measuring Machine) for first-article and sampling inspection',
  'Bore gauges, outside micrometers, depth gauges — calibrated to NABL standards',
  'Surface profilometer for Ra verification on sealing surfaces',
  'Portable laser particle counter for hydraulic oil ISO 4406 cleanliness measurement',
];

const CAPACITY_ITEMS = [
  { label: 'Cylinder Bore Range', value: '25mm – 500mm+' },
  { label: 'Maximum Stroke', value: '3,000mm (standard)' },
  { label: 'Operating Pressure', value: 'Up to 350 Bar' },
  { label: 'Surface Finish', value: 'Ra 0.4 µm (honed)' },
];

const GALLERY_ITEMS = [
  { name: 'CNC Machining Centre', file: '/images/facility/cnc-machining-center-hydraulic-cylinder.webp', alt: 'CNC turning centre for hydraulic cylinder barrel machining', isReady: true },
  { name: 'Hydrostatic Test Rig', file: '/images/infrastructure/hydrostatic-test-rig.webp', alt: 'Hydrostatic pressure testing rig for hydraulic cylinders' },
  { name: 'Assembly Bay', file: '/images/infrastructure/assembly-bay.webp', alt: 'Hydraulic power pack assembly bay' },
  { name: 'Quality Inspection', file: '/images/infrastructure/quality-inspection.webp', alt: 'Quality inspection equipment — CMM and bore gauges' },
];

const INFRA_FAQS = [
  {
    question: 'What CNC machines does your facility have?',
    answer:
      'Our facility houses CNC turning centres for precision machining of piston rods and cylinder barrels, deep-hole drilling machines for cylinder barrel boring to H7 tolerance, and honing machines for surface finish to Ra 0.4 µm. All machines are maintained on a scheduled preventive maintenance programme.',
  },
  {
    question: 'How do you test hydraulic cylinders?',
    answer:
      'Every hydraulic cylinder manufactured at our facility undergoes hydrostatic pressure testing at 1.5× its rated working pressure. Our test rigs have a 0–700 Bar capability. Test certificates documenting the rated pressure, test pressure applied, duration, and result accompany every shipment.',
  },
  {
    question: 'What is your monthly production capacity?',
    answer:
      'Our production capacity covers hydraulic cylinders with bore sizes from 25mm to 500mm+ and strokes up to 3,000mm. We operate multiple shifts to accommodate both standard and priority OEM orders. Contact us for specific volume requirements.',
  },
  {
    question: 'Can clients visit the manufacturing facility?',
    answer:
      'Yes. We welcome client visits for facility audits, first-article inspections, and witnessed factory acceptance tests. Our team will walk you through every stage of the manufacturing process. Contact sales@honeywellhydraulics.com to schedule a visit.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: INFRA_FAQS.map((faq) => ({
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
export default function InfrastructurePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
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
              <li className="text-white font-semibold" aria-current="page">Infrastructure</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-sm bg-honeywell-red text-white text-xs font-bold uppercase tracking-wider mb-6">
              Engineered Infrastructure
            </span>
            <Heading variant="hero" as="h1" className="text-white mb-6">
              Manufacturing Infrastructure — Built for Precision Hydraulic Production
            </Heading>
            <p className="text-brand-borderGray text-lg font-body leading-relaxed max-w-2xl">
              Our Ahmedabad facility houses advanced CNC machining centres, hydrostatic test rigs, and metrology equipment — enabling complete hydraulic component production, testing, and certification under one roof.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Manufacturing Infrastructure Overview ──────────────────── */}
      <Section bg="white" aria-labelledby="infra-overview-heading">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12 flex flex-col items-center">
            <Heading as="h2" variant="section" id="infra-overview-heading" className="mb-3">
              Manufacturing Infrastructure Overview
            </Heading>
            <p className="text-lg text-brand-steelGray font-body">
              Every hydraulic cylinder, power pack, and accessory that leaves Honeywell Hydraulics is designed, machined, assembled, pressure-tested, and certified within our Kathwada GIDC manufacturing facility. We do not source from third-party fabricators and relabel — we manufacture.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Location', value: 'Kathwada GIDC, Ahmedabad' },
              { label: 'Production Area', value: 'Dedicated Manufacturing Zone' },
              { label: 'Operations', value: 'Multi-Shift Production' },
              { label: 'Workforce', value: 'Engineers + CNC Operators' },
            ].map((item) => (
              <div key={item.label} className="bg-brand-surfaceGray border border-slate-200 rounded-sm p-5 text-center">
                <p className="text-sm text-[#94A3B8] font-body mb-1">{item.label}</p>
                <p className="text-sm font-display font-bold text-honeywell-navy">{item.value}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Machining Facilities ──────────────────── */}
      <Section bg="gray" aria-labelledby="cnc-heading">
        <Container>
          <div className="text-center mb-12 flex flex-col items-center">
            <Heading as="h2" variant="section" id="cnc-heading" className="mb-3">
              CNC Machining Centres
            </Heading>
            <p className="text-lg text-brand-steelGray font-body max-w-2xl mx-auto">
              Our machine park enables precision manufacturing of hydraulic cylinders and power pack components to exacting tolerances.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8" role="list">
            {MACHINING_EQUIPMENT.map((eq) => (
              <li key={eq.name} className="group bg-white border border-slate-200 rounded-sm p-6 transition-all duration-350 ease-premium hover:shadow-float hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red">
                <div className="w-12 h-12 rounded-full bg-honeywell-navy flex items-center justify-center text-white mb-4">
                  {eq.icon}
                </div>
                <Heading as="h3" variant="card" className="mb-2 group-hover:text-honeywell-red transition-colors">{eq.name}</Heading>
                <p className="text-sm text-brand-steelGray font-body leading-relaxed">{eq.desc}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ── Assembly Facilities ──────────────────── */}
      <Section bg="white" aria-labelledby="assembly-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading as="h2" variant="section" id="assembly-heading" className="mb-3">
                Assembly &amp; Integration Bay
              </Heading>
              <p className="text-brand-darkSlate font-body leading-relaxed mb-4">
                A dedicated assembly area for hydraulic power unit construction and cylinder sub-assembly, featuring:
              </p>
              <ul className="space-y-3" role="list">
                {[
                  'Reservoir welding and shot-blast preparation',
                  'Motor-pump mounting and coupling alignment',
                  'Valve sub-assembly and cartridge valve fitment',
                  'Electrical panel wiring and solenoid valve connection',
                  'Pre-delivery functional testing with calibrated instruments',
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
                  <Factory className="w-12 h-12 text-[#94A3B8] mx-auto mb-3" aria-hidden="true" />
                  <p className="text-sm font-semibold text-brand-darkSlate font-body">Assembly Bay</p>
                  <p className="text-xs text-[#94A3B8] font-body">Power pack assembly and integration</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Testing Facilities ──────────────────── */}
      <Section bg="gray" aria-labelledby="testing-heading">
        <Container>
          <div className="text-center mb-12 flex flex-col items-center">
            <Heading as="h2" variant="section" id="testing-heading" className="mb-3">
              Hydrostatic Testing Facility
            </Heading>
            <p className="text-lg text-brand-steelGray font-body max-w-2xl mx-auto">
              The final stage before any component or system leaves our facility — every pressure-bearing component is tested at 1.5× rated working pressure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTING_EQUIPMENT.map((eq) => (
              <div key={eq.name} className="group bg-white border border-slate-200 rounded-sm p-6 transition-all duration-350 ease-premium hover:shadow-float hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red">
                <Microscope className="w-8 h-8 text-honeywell-navy mb-4" aria-hidden="true" />
                <Heading as="h3" variant="card" className="mb-2 group-hover:text-honeywell-red transition-colors">{eq.name}</Heading>
                <p className="text-sm text-brand-steelGray font-body leading-relaxed">{eq.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Quality Inspection Equipment ──────────────────── */}
      <Section bg="white" aria-labelledby="metrology-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-honeywell-navy text-white rounded-sm p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-honeywell-red opacity-5 -skew-x-12 translate-x-1/4" aria-hidden="true" />
              <div className="relative z-10">
                <Heading as="h3" variant="card" className="text-white mb-6">Metrology Equipment</Heading>
                <ul className="space-y-3">
                  {QUALITY_EQUIPMENT.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-brand-borderGray font-body">
                      <CheckCircle2 className="w-4 h-4 text-honeywell-red shrink-0 mt-0.5" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <Heading as="h2" variant="section" id="metrology-heading" className="mb-3">
                Quality Inspection Equipment
              </Heading>
              <p className="text-brand-darkSlate font-body leading-relaxed mb-4">
                Our metrology lab ensures every critical dimension meets specification — from cylinder barrel bore diameter to sealing surface finish quality.
              </p>
              <p className="text-brand-darkSlate font-body leading-relaxed">
                All measuring instruments are maintained on a calibration schedule traceable to NABL standards, ensuring measurement accuracy and repeatability across all production runs.
              </p>
              <div className="mt-6">
                <Button href="/quality" variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  View Quality Standards
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Storage & Logistics ──────────────────── */}
      <Section bg="gray" aria-labelledby="dispatch-heading">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 flex flex-col items-center">
              <Heading as="h2" variant="section" id="dispatch-heading" className="mb-3">
                Storage &amp; Dispatch
              </Heading>
              <p className="text-lg text-brand-steelGray font-body">
                Organised material flow from raw material receipt through finished goods dispatch ensures traceability and production efficiency.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: <Package className="w-6 h-6" />, title: 'Raw Material Storage', desc: 'Dedicated stores with material certificate verification on receipt' },
                { icon: <ShieldCheck className="w-6 h-6" />, title: 'Finished Goods', desc: 'Protective packaging for hydraulic components prior to dispatch' },
                { icon: <Factory className="w-6 h-6" />, title: 'Dispatch', desc: 'Documented dispatch with test certificates and material traceability records' },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-slate-200 rounded-sm p-5 text-center transition-all duration-350 ease-premium hover:shadow-float hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red group">
                  <IconBox icon={item.icon} variant="primary" className="mx-auto mb-3" />
                  <Heading as="h3" variant="card" className="mb-2">{item.title}</Heading>
                  <p className="text-xs text-brand-steelGray font-body">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Safety Standards ──────────────────── */}
      <Section bg="white" aria-labelledby="safety-heading">
        <Container>
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <Heading as="h2" variant="section" id="safety-heading" className="mb-3">
              Safety &amp; Compliance
            </Heading>
            <p className="text-lg text-brand-steelGray font-body mb-8">
              Manufacturing hydraulic equipment involves high-pressure systems and heavy components. Safety is integral to our operations.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: <HardHat className="w-5 h-5" />, label: 'PPE Compliance' },
                { icon: <ShieldCheck className="w-5 h-5" />, label: 'Fire Safety' },
                { icon: <Gauge className="w-5 h-5" />, label: 'Electrical Safety' },
                { icon: <CheckCircle2 className="w-5 h-5" />, label: 'Safety Training' },
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

      {/* ── Production Capacity ───────────────────────────────────────────── */}
      <section className="bg-honeywell-navy py-12 md:py-16">
        <Container>
          <div className="text-center mb-10">
            <Heading as="h2" variant="section" className="text-white mb-4">
              Production Capacity
            </Heading>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {CAPACITY_ITEMS.map((item) => (
              <div key={item.label} className="border border-white/10 rounded-sm p-5">
                <p className="text-xl md:text-2xl font-display font-extrabold text-white mb-1">{item.value}</p>
                <p className="text-xs text-[#94A3B8] font-body uppercase tracking-wider">{item.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Infrastructure Gallery ──────────────────── */}
      <Section bg="gray" aria-labelledby="gallery-heading">
        <Container>
          <div className="text-center mb-12 flex flex-col items-center">
            <Heading as="h2" variant="section" id="gallery-heading" className="mb-3">
              Facility Gallery
            </Heading>
            <p className="text-lg text-brand-steelGray font-body max-w-2xl mx-auto">
              Inside our Ahmedabad manufacturing facility — from CNC machining to final pressure testing.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY_ITEMS.map((item) => (
              <div key={item.name} className="bg-white border border-slate-200 rounded-sm overflow-hidden transition-all duration-350 ease-premium hover:shadow-float hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red group">
                {/* IMAGE REQUIREMENT: {item.file} — Alt: {item.alt} — Priority: Medium/Low */}
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
        </Container>
      </Section>

      {/* ── Lead Generation CTA ──────────────────────────────────────────── */}
      <CTA
        title="Need a Custom Hydraulic Solution?"
        description="We design and manufacture precision hydraulic equipment tailored to your exact specifications. Factory-direct pricing from Ahmedabad."
        primaryCtaText="Request a Quote"
        primaryCtaHref="/request-quote/"
        secondaryCtaText="Call +91 99243 43873"
        secondaryCtaHref="tel:+91-9924343873"
      />

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <SiteFAQSection faqs={INFRA_FAQS} />
    </>
  );
}
