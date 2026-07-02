import React from 'react';
import { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
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
  Shield,
  FlaskConical,
  Microscope,
  CheckCircle2,
  FileSearch,
  Layers,
  TrendingUp,
  Star,
  BadgeCheck,
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// SEO Metadata
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  ...buildMetadata({
    title: 'Quality Assurance & Testing | Honeywell Hydraulics',
    description: '100% pressure testing and ISO-compliant quality assurance for hydraulic cylinders and power packs. Discover our stringent QC protocols in Ahmedabad.',
    canonical: '/quality',
  }),
  keywords: 'hydraulic quality assurance, ISO compliant hydraulic manufacturer, hydraulic pressure testing, cylinder QC protocols, hydraulic testing lab',
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
    { '@type': 'ListItem', position: 3, name: 'Quality', item: `${COMPANY_INFO.websiteUrl}/quality` },
  ],
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Quality Assurance — Honeywell Hydraulics',
  url: `${COMPANY_INFO.websiteUrl}/quality`,
  description: 'Quality assurance processes, testing standards, and certifications at Honeywell Hydraulics Ahmedabad.',
};

// ─────────────────────────────────────────────────────────────────────────────
// Static content — sourced from docs/content/about/quality-policy.md & certifications.md
// ─────────────────────────────────────────────────────────────────────────────
const QA_PROCESS_STEPS = [
  {
    step: '01',
    icon: <FileSearch className="w-6 h-6" />,
    title: 'Incoming Material Inspection',
    body: 'All primary structural materials are procured with material test certificates (MTCs) conforming to EN 10204 Type 3.1. Certificates are verified against the purchase order specification before material is released to production.',
  },
  {
    step: '02',
    icon: <Layers className="w-6 h-6" />,
    title: 'In-Process Quality Checks',
    body: 'First-off inspection on every new job. Random dimensional spot checks at key machining stages. 100% critical feature inspection including thread gauging, bore gauge verification, and concentricity checks.',
  },
  {
    step: '03',
    icon: <Microscope className="w-6 h-6" />,
    title: 'Dimensional Verification',
    body: 'CMM coordinate measuring for first-article inspection. Bore gauges, outside micrometers, depth gauges calibrated to NABL standards. Surface profilometer for Ra verification on sealing surfaces.',
  },
  {
    step: '04',
    icon: <FlaskConical className="w-6 h-6" />,
    title: 'Hydrostatic Pressure Testing',
    body: 'Every pressure-bearing component is tested at 1.5× its rated working pressure. Test certificates documenting rated pressure, test pressure, duration, and result accompany every shipment. No exceptions.',
  },
  {
    step: '05',
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: 'Final Release & Documentation',
    body: 'Components are released only after passing all quality gates. Complete documentation package including test certificates, material certificates, and dimensional records accompanies each dispatch.',
  },
];

const FIVE_PILLARS = [
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Physics-Based Design',
    body: 'We calculate — not assume — the required wall thickness of every cylinder, the minimum gallery bore diameter, and the required motor kilowatt. Minimum 4:1 safety factor on all pressure-bearing walls.',
  },
  {
    icon: <FileSearch className="w-5 h-5" />,
    title: 'Material Traceability',
    body: 'Every kilogram of steel and aluminium carries a material certificate. Critical components are laser-engraved with heat codes linking to the raw material certificate — full traceability from component to steel mill.',
  },
  {
    icon: <Microscope className="w-5 h-5" />,
    title: 'In-Process Inspection',
    body: 'We do not rely on final inspection alone. First-off inspection, random dimensional verification, and 100% critical feature inspection at key machining stages catch errors before they propagate.',
  },
  {
    icon: <FlaskConical className="w-5 h-5" />,
    title: '100% Hydrostatic Testing',
    body: 'Every single pressure-bearing component is hydrostatically tested at 1.5× rated working pressure before dispatch. No exceptions. This is the non-negotiable foundation of our quality system.',
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: 'Continuous Improvement',
    body: 'Monthly review of all warranty claims and field feedback. Root cause analyses performed for every warranty claim. Corrective actions implemented before the next production run.',
  },
];

const STANDARDS = [
  { standard: 'ISO 6020-1 / ISO 6020-2', application: 'Hydraulic cylinder mounting dimensions' },
  { standard: 'ISO 4401', application: 'Mounting surfaces for directional control valves (CETOP)' },
  { standard: 'ISO 4406:2021', application: 'Hydraulic fluid cleanliness classification' },
  { standard: 'IS 14665', application: 'Indian Standard for hydraulic lift systems' },
  { standard: 'IS 2062 / IS 1570', application: 'Structural steel and alloy steel specifications' },
  { standard: 'ASME BPVC Sec. VIII', application: 'Pressure vessel design methodology' },
  { standard: 'SAE J517 / SAE J514', application: 'Hydraulic hose and tube fitting specifications' },
];

const TESTING_EQUIPMENT = [
  'Cylinder Test Rig — 0–700 Bar testing capability with cycle testing',
  'Component Pressure Test Rig — 1.5× rated pressure with inter-port leak verification',
  'CMM (Coordinate Measuring Machine) for first-article inspection',
  'Bore gauges, outside micrometers, depth gauges — NABL calibrated',
  'Surface profilometer for Ra verification on sealing surfaces',
  'Portable laser particle counter for ISO 4406 cleanliness measurement',
];

const QUALITY_STATS = [
  { value: '100%', label: 'Pressure Tested' },
  { value: '4:1', label: 'Min Safety Factor' },
  { value: 'EN 10204', label: 'Material Traceability' },
  { value: 'Monthly', label: 'Quality Reviews' },
];

const QUALITY_FAQS = [
  {
    question: 'Are all hydraulic cylinders pressure-tested before dispatch?',
    answer:
      'Yes. 100% of hydraulic cylinders and pressure-bearing components manufactured at Honeywell Hydraulics undergo hydrostatic pressure testing at 1.5× their rated working pressure. A test certificate documenting the test pressure, duration, and result accompanies every shipment. There are no exceptions to this requirement.',
  },
  {
    question: 'What quality certifications does Honeywell Hydraulics hold?',
    answer:
      'We design and manufacture to international standards including ISO 6020-1/2 (hydraulic cylinder mounting dimensions), ISO 4401 (CETOP valve mounting), ISO 4406 (fluid cleanliness), and Indian standards IS 2062, IS 1570, and IS 14665. All measuring instruments are calibrated to NABL standards.',
  },
  {
    question: 'How do you ensure material traceability?',
    answer:
      'All primary structural materials are procured with EN 10204 Type 3.1 material test certificates. Critical pressure-bearing components are laser-engraved with heat codes linking each finished component to its raw material certificate, machining records, and test results. Digital records are maintained for a minimum of 5 years.',
  },
  {
    question: 'What is the warranty period on your products?',
    answer:
      'All Honeywell Hydraulics products carry a manufacturing defect warranty from the date of dispatch. The warranty covers failures attributable to manufacturing defects as determined by our technical team. It does not cover system contamination, operation beyond rated parameters, physical damage, or use of incompatible fluids.',
  },
  {
    question: 'Can you provide third-party witnessed test certificates?',
    answer:
      'Yes. For projects requiring independent verification — such as infrastructure, defence, or export contracts — we can arrange third-party witnessed pressure testing by Bureau Veritas, SGS India, TÜV SÜD South Asia, or DNV India. Third-party certification requires advance notice for scheduling.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: QUALITY_FAQS.map((faq) => ({
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
export default function QualityPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={faqSchema} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-white pt-12 md:pt-20 pb-8 md:pb-12 relative overflow-hidden border-b border-slate-200">
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
              <li className="text-honeywell-red font-semibold" aria-current="page">Quality</li>
            </ol>
          </nav>

          <div className="w-full">
            <Heading variant="section" as="h1" className=" font-display font-extrabold tracking-tight text-honeywell-navy leading-[1.15] mb-6">
              Quality Assurance —<br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-honeywell-navy via-honeywell-navy to-honeywell-red"> Zero Defect, Zero Compromise</span>
            </Heading>
            
            <p className="text-brand-steelGray text-lg md:text-xl font-body leading-relaxed text-justify">
              At Honeywell Hydraulics, quality is not a department. It is the engineering discipline that governs every decision — from how we calculate a cylinder wall thickness to how we test a component before dispatch.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Quality Policy Statement ──────────────────────────────────────── */}
      <Section bg="white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Heading as="h2" variant="section" className="mb-6 text-center">
              Our Quality Policy Statement
            </Heading>
            <blockquote className="bg-brand-surfaceGray border-l-4 border-honeywell-red p-6 rounded-r-sm">
              <p className="text-honeywell-navy font-body text-lg leading-relaxed font-medium italic text-justify">
                &ldquo;Honeywell Hydraulics commits to manufacturing hydraulic cylinders, power packs, and accessories that conform to agreed engineering specifications, applicable Indian and international standards, and our clients&apos; dimensional and performance requirements — consistently, verifiably, and without exception.&rdquo;
              </p>
            </blockquote>
          </div>
        </Container>
      </Section>

      {/* ── Quality Assurance Process ──────────────────── */}
      <Section bg="gray" aria-labelledby="qa-process-heading">
        <Container>
          <div className="text-center mb-14 flex flex-col items-center">
            <Heading as="h2" variant="section" id="qa-process-heading" className="mb-3">
              Quality Assurance Process
            </Heading>
            <p className="text-lg text-brand-steelGray font-body max-w-2xl mx-auto text-justify">
              Five rigorous quality gates — from raw material receipt to final dispatch. Every component passes every gate.
            </p>
          </div>
          <ol className="space-y-6" aria-label="Quality assurance process steps">
            {QA_PROCESS_STEPS.map((step) => (
              <li key={step.step} className="bg-white border border-slate-200 rounded-sm p-6 flex items-start gap-6 transition-all duration-350 ease-premium hover:shadow-float hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red group">
                <div className="relative shrink-0">
                  <div className="w-14 h-14 rounded-full bg-honeywell-navy flex items-center justify-center text-white">
                    {step.icon}
                  </div>
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-honeywell-red text-white text-[10px] font-bold flex items-center justify-center font-body">
                    {step.step}
                  </span>
                </div>
                <div>
                  <Heading as="h3" variant="card" className="mb-2">{step.title}</Heading>
                  <p className="text-sm text-brand-steelGray font-body leading-relaxed text-justify">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* ── Testing Equipment ──────────────────── */}
      <Section bg="white" aria-labelledby="testing-eq-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading as="h2" variant="section" id="testing-eq-heading" className="mb-3">
                Testing &amp; Metrology Equipment
              </Heading>
              <p className="text-brand-darkSlate font-body leading-relaxed mb-6 text-justify">
                Our quality laboratory houses dedicated testing rigs and precision metrology equipment to verify every critical dimension and pressure rating.
              </p>
              <ul className="space-y-3" role="list">
                {TESTING_EQUIPMENT.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-brand-darkSlate font-body">
                    <CheckCircle2 className="w-4 h-4 text-honeywell-red shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button href="/manufacturing-facility/" variant="outline" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  View Manufacturing Facility
                </Button>
              </div>
            </div>
            <div className="bg-brand-surfaceGray border border-slate-200 rounded-sm p-8">
              <div className="aspect-[4/3] bg-slate-200 rounded-sm flex items-center justify-center">
                <div className="text-center px-6">
                  <FlaskConical className="w-12 h-12 text-[#94A3B8] mx-auto mb-3" aria-hidden="true" />
                  <p className="text-sm font-semibold text-brand-darkSlate font-body text-justify">Pressure Test Rig</p>
                  <p className="text-xs text-[#94A3B8] font-body text-justify">0–700 Bar testing capability</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Certifications & Standards ──────────────────── */}
      <Section bg="gray" aria-labelledby="standards-heading">
        <Container>
          <div className="text-center mb-12 flex flex-col items-center">
            <Heading as="h2" variant="section" id="standards-heading" className="mb-3">
              Certifications &amp; Standards
            </Heading>
            <p className="text-lg text-brand-steelGray font-body max-w-2xl mx-auto text-justify">
              We design and manufacture to recognised Indian and international hydraulic standards.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border border-slate-200 rounded-sm overflow-hidden">
              <table className="w-full text-sm font-body">
                <thead className="bg-honeywell-navy text-white">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold">Standard</th>
                    <th className="text-left py-3 px-4 font-semibold">Application</th>
                  </tr>
                </thead>
                <tbody>
                  {STANDARDS.map((row, i) => (
                    <tr key={row.standard} className={i % 2 === 0 ? 'bg-white' : 'bg-brand-surfaceGray'}>
                      <td className="py-3 px-4 font-semibold text-honeywell-navy">{row.standard}</td>
                      <td className="py-3 px-4 text-brand-steelGray">{row.application}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Five Pillars ──────────────────── */}
      <Section bg="white" aria-labelledby="pillars-heading">
        <Container>
          <div className="text-center mb-12 flex flex-col items-center">
            <Heading as="h2" variant="section" id="pillars-heading" className="mb-3">
              The Five Pillars of Quality
            </Heading>
            <p className="text-lg text-brand-steelGray font-body max-w-2xl mx-auto text-justify">
              Our quality commitment is built on five engineering pillars — each one a non-negotiable requirement for every component we manufacture.
            </p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
            {FIVE_PILLARS.map((pillar, i) => (
              <li key={pillar.title} className="bg-brand-surfaceGray border border-slate-200 rounded-sm p-6 transition-all duration-350 ease-premium hover:shadow-float hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red relative group">
                <span className="absolute top-4 right-4 w-7 h-7 rounded-full bg-honeywell-navy text-white text-xs font-bold flex items-center justify-center font-body">
                  {i + 1}
                </span>
                <IconBox icon={pillar.icon} variant="primary" className="mb-4" />
                <Heading as="h3" variant="card" className="mb-2">{pillar.title}</Heading>
                <p className="text-sm text-brand-steelGray font-body leading-relaxed text-justify">{pillar.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ── Quality Statistics ─────────────────────────────────────────────── */}
      <section className="bg-honeywell-navy py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {QUALITY_STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-display font-extrabold text-white mb-1 text-justify">{stat.value}</p>
                <p className="text-sm text-[#94A3B8] font-body uppercase tracking-wider text-justify">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Customer Warranty & Support ──────────────────── */}
      <Section bg="gray" aria-labelledby="warranty-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading as="h2" variant="section" id="warranty-heading" className="mb-3">
                Customer Warranty &amp; Support
              </Heading>
              <p className="text-brand-darkSlate font-body leading-relaxed mb-4 text-justify">
                All Honeywell Hydraulics products carry a manufacturing defect warranty from date of dispatch. Our warranty process is designed to be straightforward and fair.
              </p>
              <Heading as="h3" variant="card" className="mb-3">Claiming a Warranty</Heading>
              <ol className="space-y-3 mb-6" role="list">
                {[
                  'Contact us at warranty@honeywellhydraulics.com with failure description, serial number, and photographs',
                  'We respond within 24 working hours with a preliminary assessment',
                  'If the failure is attributable to a manufacturing defect, we replace or repair at our cost with priority lead time',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-brand-darkSlate font-body">
                    <span className="w-5 h-5 rounded-full bg-honeywell-red text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            <div className="bg-honeywell-navy text-white rounded-sm p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-honeywell-red opacity-5 -skew-x-12 translate-x-1/4" aria-hidden="true" />
              <div className="relative z-10">
                <BadgeCheck className="w-10 h-10 text-honeywell-red mb-4" aria-hidden="true" />
                <Heading as="h3" variant="card" className="text-white mb-4">Quality Assurance Guarantee</Heading>
                <ul className="space-y-3">
                  {[
                    '100% hydrostatic pressure testing on every component',
                    'EN 10204 Type 3.1 material traceability',
                    'Manufacturing defect warranty from dispatch date',
                    'Dedicated warranty support team',
                    'Third-party test certification available on request',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-brand-borderGray font-body">
                      <Star className="w-4 h-4 text-honeywell-red shrink-0 mt-0.5" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Lead Generation CTA ────────────────────────────────────────── */}
      <CTA
        title="Ready to Inspect Our Quality Process?"
        description="We welcome client visits for facility audits and witnessed pressure testing. Factory-direct pricing with full material traceability from Ahmedabad."
        primaryCtaText="Request a Quote"
        primaryCtaHref="/request-quote/"
        secondaryCtaText="Call +91 99243 43873"
        secondaryCtaHref="tel:+91-9924343873"
      />

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <SiteFAQSection faqs={QUALITY_FAQS} />
    </>
  );
}
