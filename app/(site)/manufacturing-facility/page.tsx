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
  Maximize,
  Ruler,
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

const CAPACITY_SPECS = [
  { icon: <Maximize className="w-5 h-5" />, label: 'Cylinder Bore Range', value: '25mm – 500mm+' },
  { icon: <Ruler className="w-5 h-5" />, label: 'Maximum Stroke', value: '3,000mm (standard)' },
  { icon: <Gauge className="w-5 h-5" />, label: 'Operating Pressure', value: 'Up to 350 Bar' },
  { icon: <Layers className="w-5 h-5" />, label: 'Surface Finish', value: 'Ra 0.4 µm (honed)' },
];

type GalleryItem = { name: string; file: string; alt: string; isReady?: boolean };
const GALLERY_ITEMS: GalleryItem[] = [
  { name: 'CNC Turning Centre', file: '/images/company/cnc-turning-lathe-machining.webp', alt: 'CNC lathe machine operator performing precision turning for hydraulic cylinder components', isReady: true },
  { name: 'Welding Fabrication', file: '/images/company/hydraulic-cylinder-welding-fabrication.webp', alt: 'Professional welding and fabrication of hydraulic cylinder barrels', isReady: true },
  { name: 'Assembly Area', file: '/images/company/hydraulic-cylinder-assembly-area.webp', alt: 'Skilled technicians assembling custom hydraulic cylinders', isReady: true },
  { name: 'Vertical Milling', file: '/images/company/vertical-milling-machine-machining.webp', alt: 'Vertical milling machine operations for precision machining', isReady: true },
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
      <section className="bg-white pt-12 md:pt-20 pb-20 relative overflow-hidden">
        {/* Subtle engineering grid background */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_10%_0%,#000_70%,transparent_100%)]" 
          aria-hidden="true" 
        />
        
        <Container className="relative z-10">
          <nav aria-label="Breadcrumb" className="text-base font-body text-slate-500 mb-8">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-honeywell-red transition-colors duration-200 ease-out">Home</Link>
              </li>
              <li aria-hidden="true">&rsaquo;</li>
              <li className="text-honeywell-red font-semibold" aria-current="page">Manufacturing Facility</li>
            </ol>
          </nav>

          <div className="w-full">

            
            <Heading variant="section" as="h1" className=" font-display font-extrabold tracking-tight text-honeywell-navy leading-[1.15] mb-6">
              Our Manufacturing Facility —<br className="hidden md:block" /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-honeywell-navy via-honeywell-navy to-honeywell-red"> Designed, Built, and Tested</span>{" "}in Ahmedabad
            </Heading>
            
            <p className="text-brand-steelGray text-lg md:text-xl font-body leading-relaxed mb-12 text-justify">
              Every hydraulic cylinder, power pack, and accessory that leaves Honeywell Hydraulics is designed, machined, assembled, pressure-tested, and certified within our Ahmedabad facility. We do not source and relabel — we manufacture.
            </p>
          </div>
            
        </Container>
      </section>

      {/* ── Facility Gallery ──────────────────── */}
      <Section bg="gray" aria-labelledby="gallery-mfg-heading">
        <Container>
          <div className="text-center mb-12 flex flex-col items-center">
            <Heading as="h2" variant="section" id="gallery-mfg-heading" className="mb-3" underline="center">
              Facility Gallery
            </Heading>

          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY_ITEMS.map((item) => (
              <div key={item.name} className="bg-white border border-slate-200 rounded-sm overflow-hidden transition-[transform,box-shadow,border-color] duration-300 ease-out hover:shadow-float hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red active:scale-[0.98] group">
                <div className="aspect-[3/4] bg-brand-lightSurface flex items-center justify-center relative">
                  {('isReady' in item) ? (
                    <Image
                      src={item.file}
                      alt={item.alt}
                      fill
                      className="object-cover object-[center_15%] transition-transform duration-500 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="text-center px-4">
                      <Camera className="w-8 h-8 text-brand-borderGray mx-auto mb-2" aria-hidden="true" />
                      <p className="text-xs text-[#94A3B8] font-body text-justify">{item.name}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-brand-steelGray font-body">
            Want to see our facility in person?{' '}
            <Link href="/contact-us" className="inline-block text-honeywell-red font-semibold transition-transform duration-150 ease-out hover:underline underline-offset-4 active:scale-[0.97]">
              Schedule a facility visit →
            </Link>
          </p>
        </Container>
      </Section>

      {/* ── Manufacturing Workflow ──────────────────── */}
      <Section bg="white" aria-labelledby="workflow-heading">
        <Container>
          <div className="text-center mb-14 flex flex-col items-center">
            <Heading as="h2" variant="section" id="workflow-heading" className="mb-3" underline="center">
              End-to-End Manufacturing Workflow
            </Heading>
            <p className="text-lg text-brand-steelGray font-body max-w-2xl mx-auto text-justify">
              Six stages from design to dispatch — every stage controlled, documented, and quality-verified.
            </p>
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" aria-label="Manufacturing workflow steps">
            {WORKFLOW_STEPS.map((step) => (
              <li key={step.step} className="bg-white border border-slate-200 rounded-sm p-6 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:shadow-float hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red active:scale-[0.98] relative group">

                <div className="w-12 h-12 rounded-full bg-honeywell-navy flex items-center justify-center text-white mb-4 transition-[background-color,transform] duration-200 ease-out group-hover:bg-honeywell-red group-hover:scale-110">
                  {step.icon}
                </div>
                <Heading as="h3" variant="card" className="mb-2 transition-colors duration-200 ease-out group-hover:text-honeywell-red">{step.title}</Heading>
                <p className="text-sm text-brand-steelGray font-body leading-relaxed text-justify">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* ── Design & Engineering ──────────────────── */}
      <Section bg="gray" aria-labelledby="design-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading as="h3" variant="subsection" id="design-heading" className="mb-3">
                Design &amp; Engineering
              </Heading>
              <p className="text-brand-darkSlate font-body leading-relaxed mb-4 text-justify">
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
                  <p className="text-sm font-semibold text-brand-darkSlate font-body text-justify">Engineering Design</p>
                  <p className="text-xs text-[#94A3B8] font-body text-justify">CAD-based hydraulic design</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      {/* ── Production Capacity ───────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-honeywell-navy to-[#0f172a] shadow-inner py-12 md:py-16">
        <Container>
          <div className="text-center mb-10">
            <Heading as="h2" variant="section" className="text-white mb-4">
              Production Capacity
            </Heading>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {CAPACITY_SPECS.map((item) => (
              <div key={item.label} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 ease-out overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:border-honeywell-red/40">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-honeywell-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-14 h-14 mx-auto rounded-full bg-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-honeywell-red group-hover:scale-110 transition-all duration-300 shadow-sm border border-white/10 group-hover:border-transparent">
                  {item.icon}
                </div>
                <p className="text-2xl font-display font-extrabold text-white mb-2 text-center group-hover:text-honeywell-red transition-colors duration-300 tracking-tight">{item.value}</p>
                <p className="text-xs text-[#94A3B8] font-body uppercase tracking-widest font-semibold text-center">{item.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Safety Standards ──────────────────── */}
      <Section bg="gray" aria-labelledby="safety-mfg-heading">
        <Container>
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <Heading as="h2" variant="section" id="safety-mfg-heading" className="mb-3" underline="center">
              Safety &amp; Compliance Standards
            </Heading>
            <p className="text-lg text-brand-steelGray font-body mb-8 text-justify">
              Manufacturing hydraulic equipment involves high-pressure systems and heavy components. Safety is integral to every operation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-6">
              {[
                { icon: <HardHat className="w-6 h-6" />, label: 'PPE Compliance' },
                { icon: <ShieldCheck className="w-6 h-6" />, label: 'Fire Safety Systems' },
                { icon: <Gauge className="w-6 h-6" />, label: 'Electrical Safety' },
                { icon: <CheckCircle2 className="w-6 h-6" />, label: 'Regular Training' },
              ].map((item) => (
                <div key={item.label} className="group bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center transition-all duration-300 ease-out hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:border-honeywell-red/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="w-16 h-16 rounded-full bg-brand-lightSurface flex items-center justify-center text-honeywell-navy mb-5 group-hover:bg-honeywell-red group-hover:text-white group-hover:scale-110 transition-all duration-300 relative z-10 shadow-sm border border-slate-100 group-hover:border-transparent">
                    {item.icon}
                  </div>
                  <p className="text-base sm:text-lg font-bold text-honeywell-navy font-display text-center relative z-10 group-hover:text-honeywell-red transition-colors duration-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
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
