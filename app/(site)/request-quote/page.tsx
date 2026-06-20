import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { IconBox } from '@/components/ui/IconBox';
import { Button } from '@/components/ui/Button';
import { FAQAccordion } from '@/components/faq/FAQAccordion';
import { QuoteForm } from '@/components/forms/QuoteForm';
import JsonLd from '@/components/seo/JsonLd';
import { COMPANY_INFO } from '@/lib/constants';
import {
  ClipboardList,
  Microscope,
  FileText,
  Factory,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Wrench,
  Settings2,
  Users,
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// SEO Metadata
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Request Quote | Honeywell Hydraulics',
  description:
    'Request a quote for custom hydraulic cylinders or power packs from Honeywell Hydraulics, Ahmedabad.',
  alternates: {
    canonical: '/request-quote',
  },
  openGraph: {
    title: 'Request Hydraulic Quote Ahmedabad | Honeywell Hydraulics',
    description:
      'Submit your hydraulic project requirements online. Our engineering team in Ahmedabad reviews every quote personally.',
    url: '/request-quote',
    siteName: 'Honeywell Hydraulics',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Request Hydraulic Quote Ahmedabad | Honeywell Hydraulics',
    description:
      'Submit your hydraulic project requirements online. Our engineering team in Ahmedabad reviews every quote personally.',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Static data
// ─────────────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    question: 'What information do I need to provide to get a quote?',
    answer:
      'At minimum, provide your name, company, contact details, and a description of your requirement. If you know your technical parameters — bore size, stroke length, operating pressure, or flow rate — include those. Our engineers will follow up if additional information is needed.',
  },
  {
    question: 'How do you respond to quote requests?',
    answer:
      'Our engineering team personally reviews every quote submission. We will contact you via the phone or email you provide to confirm requirements, ask clarifying questions if needed, and prepare a detailed proposal.',
  },
  {
    question: 'Can I submit drawings or CAD files with my request?',
    answer:
      'Yes. The form includes an optional file upload for PDFs, images, and CAD formats (STEP, DXF, IGS). Sharing your existing design or dimensional drawing significantly speeds up the engineering review.',
  },
  {
    question: 'Do you manufacture standard or only custom hydraulic equipment?',
    answer:
      'We manufacture both. We offer standard bore sizes and configurations, but the majority of our work is custom-engineered to specific load, speed, pressure, and spatial requirements. There is no additional design consultation fee for custom work.',
  },
  {
    question: 'What is the process after I submit a quote request?',
    answer:
      'After submission: (1) Our team reviews your requirements. (2) We contact you to confirm specifications. (3) We prepare and send a detailed commercial proposal. (4) We discuss manufacturing timelines and delivery. You can also call us directly at +91 9924343873 for urgent requirements.',
  },
];

const BENEFITS = [
  {
    icon: <Wrench className="w-6 h-6" />,
    title: 'Engineering Support',
    body: 'Every quote is reviewed by a qualified fluid power engineer — not a sales executive. We verify your specifications before pricing.',
  },
  {
    icon: <Settings2 className="w-6 h-6" />,
    title: 'Custom Design Capability',
    body: 'We design and manufacture to your exact specifications. No compromise on bore size, stroke, pressure rating, or mounting configuration.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Direct Manufacturer',
    body: 'You deal directly with our Ahmedabad factory — no middlemen, no resellers. Transparent pricing with firm proposals.',
  },
];

const PROCESS_STEPS = [
  {
    step: '01',
    icon: <ClipboardList className="w-6 h-6" />,
    title: 'Submit Requirement',
    body: 'Complete the form with your contact details, product interest, and requirement description. Attach technical drawings if available.',
  },
  {
    step: '02',
    icon: <Microscope className="w-6 h-6" />,
    title: 'Engineering Review',
    body: 'Our fluid power engineers analyse your specifications — operating pressure, load, cycle speed, and environment — to determine the optimal solution.',
  },
  {
    step: '03',
    icon: <FileText className="w-6 h-6" />,
    title: 'Detailed Proposal',
    body: 'We prepare a clear, itemised commercial proposal with product specifications, material details, and delivery information.',
  },
  {
    step: '04',
    icon: <Factory className="w-6 h-6" />,
    title: 'Manufacturing Discussion',
    body: 'Once you approve the proposal, we finalise drawings, confirm quantities, and schedule production at our Ahmedabad facility.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Schema
// ─────────────────────────────────────────────────────────────────────────────
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${COMPANY_INFO.websiteUrl}/` },
    { '@type': 'ListItem', position: 2, name: 'Request Quote', item: `${COMPANY_INFO.websiteUrl}/request-quote` },
  ],
};

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Request a Hydraulic Solution Quote',
  description: 'Request a quote for custom hydraulic cylinders, power packs, and hydraulic accessories from Honeywell Hydraulics, Ahmedabad.',
  url: `${COMPANY_INFO.websiteUrl}/request-quote`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: COMPANY_INFO.phone,
    contactType: 'sales',
    email: COMPANY_INFO.email,
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi', 'Gujarati'],
  },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Request Hydraulic Quote Ahmedabad | Honeywell Hydraulics',
  description: 'Submit your hydraulic project requirements online.',
  url: `${COMPANY_INFO.websiteUrl}/request-quote`,
  breadcrumb: { '@id': `${COMPANY_INFO.websiteUrl}/request-quote#breadcrumb` },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

const TRUST_STATS = [
  { value: 'Since 2018', label: 'Manufacturing Excellence' },
  { value: '500+', label: 'Cylinders Manufactured' },
  { value: '25+', label: 'Industries Served' },
  { value: '100%', label: 'Pressure Tested' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Page (Server Component)
// ─────────────────────────────────────────────────────────────────────────────
export default function RequestQuotePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={contactPageSchema} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={faqSchema} />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#0D1B5C] text-white pt-24 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#E31B23] opacity-5 -skew-x-12 translate-x-1/4" aria-hidden="true" />
        <Container className="relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-sm font-body text-[#CBD5E1] mb-6">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li aria-hidden="true">&rsaquo;</li>
              <li className="text-white font-semibold" aria-current="page">Request Quote</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-sm bg-[#E31B23] text-white text-xs font-bold uppercase tracking-wider mb-6">
              Free Engineering Consultation
            </span>
            <Heading variant="hero" as="h1" className="text-white mb-6">
              Request a Hydraulic Solution Quote
            </Heading>
            <p className="text-[#CBD5E1] text-lg font-body leading-relaxed max-w-2xl">
              Submit your technical requirements below. Our engineering team in Ahmedabad will personally review your specifications and prepare a detailed proposal. For urgent requirements, call us directly.
            </p>
            <p className="mt-4">
              <a
                href="tel:+919924343873"
                className="inline-flex items-center gap-2 text-[#E31B23] font-semibold font-body hover:underline underline-offset-4"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                +91 9924343873 — Urgent Support
              </a>
            </p>
          </div>
        </Container>
      </section>

      {/* ── Main: Form + Sidebar ──────────────────────────────────────────── */}
      <Section bg="gray">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-start">

            {/* Form Panel */}
            <div className="bg-white rounded-sm border border-[#E2E8F0] shadow-sm p-6 sm:p-10">
              <Heading as="h2" variant="subsection" className="mb-2">
                Quote Request Form
              </Heading>
              <p className="text-sm text-[#64748B] font-body mb-8">
                Fields marked <span className="text-[#E31B23] font-bold">*</span> are required. For urgent breakdowns, call us directly.
              </p>
              <QuoteForm />
            </div>

            {/* Sidebar */}
            <aside aria-label="Contact details and why choose us" className="space-y-6">

              {/* Why Choose Honeywell */}
              <div className="bg-white rounded-sm border border-[#E2E8F0] shadow-sm p-6">
                <h3 className="text-lg font-display font-bold text-[#0D1B5C] mb-5">
                  Why Request a Quote From Us?
                </h3>
                <ul className="space-y-5">
                  {BENEFITS.map((b) => (
                    <li key={b.title} className="flex items-start gap-4">
                      <IconBox icon={b.icon} variant="primary" size="sm" className="shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold font-body text-[#0D1B5C] text-sm mb-0.5">{b.title}</p>
                        <p className="text-xs text-[#64748B] font-body leading-relaxed">{b.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct Contact */}
              <div className="bg-[#0D1B5C] text-white rounded-sm p-6 space-y-4">
                <h3 className="text-lg font-display font-bold mb-2">Contact Us Directly</h3>
                <a
                  href="tel:+919924343873"
                  className="flex items-center gap-3 text-sm font-body hover:text-[#E31B23] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#E31B23] shrink-0" aria-hidden="true" />
                  +91 9924343873
                </a>
                <a
                  href="https://wa.me/919924343873"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-body hover:text-[#E31B23] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#E31B23] shrink-0" aria-hidden="true" />
                  WhatsApp — Engineering Team
                </a>
                <a
                  href="mailto:sales@honeywellhydraulics.com"
                  className="flex items-center gap-3 text-sm font-body hover:text-[#E31B23] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#E31B23] shrink-0" aria-hidden="true" />
                  sales@honeywellhydraulics.com
                </a>
                <div className="flex items-start gap-3 text-sm font-body text-[#CBD5E1]">
                  <MapPin className="w-4 h-4 text-[#E31B23] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Ahmedabad, Gujarat, India</span>
                </div>
              </div>

              {/* Made in India badge */}
              <div className="border border-[#E2E8F0] rounded-sm p-4 flex items-center gap-4 bg-white">
                <span className="text-3xl" role="img" aria-label="Indian Flag">🇮🇳</span>
                <div>
                  <p className="font-display font-bold text-[#0D1B5C] text-sm">Made in India</p>
                  <p className="text-xs text-[#64748B] font-body">Designed, machined, and tested at our Ahmedabad facility.</p>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {/* ── Trust Signals ─────────────────────────────────────────────────── */}
      <section className="bg-[#0D1B5C] py-10">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {TRUST_STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-display font-extrabold text-white mb-1">{stat.value}</p>
                <p className="text-xs text-[#94A3B8] font-body uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Process Timeline ─────────────────────────────────────────────── */}
      <Section bg="white">
        <Container>
          <div className="text-center mb-14">
            <Heading as="h2" variant="section" className="mb-4">
              How the Quote Process Works
            </Heading>
            <p className="text-lg text-[#64748B] font-body max-w-2xl mx-auto">
              From your first inquiry to a finalised manufacturing proposal — four clear steps.
            </p>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" aria-label="Quote process steps">
            {PROCESS_STEPS.map((step, idx) => (
              <li
                key={step.step}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Connector line (desktop only) */}
                {idx < PROCESS_STEPS.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-8 left-[calc(50%+32px)] w-[calc(100%-64px)] h-px bg-[#E2E8F0]"
                    aria-hidden="true"
                  />
                )}

                <div className="relative mb-5">
                  <div className="w-16 h-16 rounded-full bg-[#0D1B5C] flex items-center justify-center text-white shadow-md group-hover:bg-[#E31B23] transition-colors duration-200">
                    {step.icon}
                  </div>
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#E31B23] text-white text-[10px] font-bold flex items-center justify-center font-body">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold text-[#0D1B5C] mb-2">{step.title}</h3>
                <p className="text-sm text-[#64748B] font-body leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <Section bg="gray">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Heading as="h2" variant="section" className="mb-4 text-center">
              Frequently Asked Questions
            </Heading>
            <p className="text-[#64748B] font-body text-center mb-10">
              Everything you need to know before submitting your quote request.
            </p>
            <FAQAccordion faqs={FAQS} />
          </div>
        </Container>
      </Section>

      {/* ── Lead Generation CTA ──────────────────────────────────────────── */}
      <section className="bg-[#0D1B5C] py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#E31B23] opacity-5 -skew-x-12 translate-x-1/4" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-[#E31B23] opacity-[0.03] skew-x-12 -translate-x-1/4" aria-hidden="true" />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E31B23]/40 to-transparent" aria-hidden="true" />
        <Container className="relative z-10 text-center">
          <Heading variant="section" className="text-white mb-4">
            Need a Custom Hydraulic Solution?
          </Heading>
          <p className="text-[#CBD5E1] font-body max-w-2xl mx-auto mb-4 text-lg leading-relaxed">
            We design and manufacture precision hydraulic equipment tailored to your exact specifications.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm font-body">Hydraulic Cylinders</span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm font-body">Hydraulic Power Packs</span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm font-body">Hydraulic Accessories</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+919924343873"
              className="inline-flex items-center gap-2 bg-[#E31B23] hover:bg-[#C41220] text-white font-semibold font-body text-sm px-6 py-3 rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E31B23] focus-visible:ring-offset-2"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Talk to an Engineer
            </a>
            <a
              href="https://wa.me/919924343873"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-transparent border border-white text-white hover:bg-white hover:text-[#0D1B5C] font-semibold font-body text-sm px-6 py-3 rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              WhatsApp Us
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
