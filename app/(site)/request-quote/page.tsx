import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { SiteFAQSection } from '@/components/faq/SiteFAQSection';
import { QuoteForm } from '@/components/forms/QuoteForm';
import JsonLd from '@/components/seo/JsonLd';
import { COMPANY_INFO } from '@/lib/constants';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ClipboardList,
  Microscope,
  FileText,
  Factory,
  ShieldCheck,
  Zap,
  Users,
  Star,
} from 'lucide-react';

import { buildMetadata } from '@/lib/seo';

// ─────────────────────────────────────────────────────────────────────────────
// SEO Metadata
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  ...buildMetadata({
    title: 'Request a Quote | Honeywell Hydraulics',
    description:
      'Get a free quote for hydraulic cylinders, power packs, or accessories from Honeywell Hydraulics, Ahmedabad. Simple form, fast engineering response.',
    canonical: '/request-quote',
  }),
};

// ─────────────────────────────────────────────────────────────────────────────
// Static data
// ─────────────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    question: 'What information do I need to provide?',
    answer:
      'Just your name, phone number, and a brief description of what you need. Even a rough idea is fine — our team will ask the right questions. If you have technical drawings or dimensions, you can attach them too.',
  },
  {
    question: 'How quickly will you respond?',
    answer:
      'Our engineering team reviews every submission personally. You will typically hear from us within the same business day. For urgent needs, call us directly at +91 9924343873.',
  },
  {
    question: 'Can I send drawings or photos?',
    answer:
      'Yes! The form has a file upload option. You can attach PDFs, photos, or CAD files (STEP, DXF). A photo of your existing part or a sketch often helps us understand your needs faster.',
  },
  {
    question: 'Do you make custom sizes, or only standard products?',
    answer:
      'Both. We manufacture standard hydraulic cylinders and power packs, but most of our work is fully custom-built to your exact dimensions and pressure requirements. There is no extra charge for custom design consultation.',
  },
  {
    question: 'What happens after I submit the form?',
    answer:
      'Step 1: Our team reviews your requirement. Step 2: We call or WhatsApp you to confirm the details. Step 3: We send you a detailed price quote. Step 4: You decide — no pressure, no obligation.',
  },
];

const PROCESS_STEPS = [
  {
    step: '01',
    icon: <ClipboardList className="w-6 h-6" />,
    title: 'Tell Us What You Need',
    body: 'Fill in the simple form below. No technical jargon required — just describe your project in your own words.',
  },
  {
    step: '02',
    icon: <Microscope className="w-6 h-6" />,
    title: 'We Review Your Request',
    body: 'Our engineers look at your requirement and figure out the best solution for your machine or project.',
  },
  {
    step: '03',
    icon: <FileText className="w-6 h-6" />,
    title: 'You Get a Clear Quote',
    body: 'We send you a detailed proposal with price, product specs, and delivery time. No hidden charges.',
  },
  {
    step: '04',
    icon: <Factory className="w-6 h-6" />,
    title: 'We Start Manufacturing',
    body: 'Once you approve, we begin production at our Ahmedabad factory. You can track progress anytime.',
  },
];

const TRUST_STATS = [
  { value: 'Since 2018', label: 'Manufacturing in India' },
  { value: '500+', label: 'Cylinders Built' },
  { value: '25+', label: 'Industries Served' },
  { value: '100%', label: 'Pressure Tested' },
];

const PROMISES = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'Fast Response',
    body: 'Same-day reply during business hours.',
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: 'No Middlemen',
    body: 'You deal directly with our factory in Ahmedabad.',
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: 'Free Consultation',
    body: 'Our engineers help you choose the right product.',
  },
  {
    icon: <Star className="w-5 h-5" />,
    title: 'Quality Guaranteed',
    body: 'Every product is pressure-tested before delivery.',
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
  description: 'Request a free quote for custom hydraulic cylinders, power packs, and hydraulic accessories from Honeywell Hydraulics, Ahmedabad.',
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
  name: 'Request a Free Hydraulic Quote | Honeywell Hydraulics Ahmedabad',
  description: 'Submit your hydraulic project requirements online and get a fast response from our engineering team.',
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
      <section className="bg-honeywell-navy text-white pt-6 md:pt-8 pb-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-honeywell-red opacity-[0.06] -skew-x-12 translate-x-1/4" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

        <Container className="relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-sm font-body text-brand-borderGray mb-8">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li aria-hidden="true">&rsaquo;</li>
              <li className="text-white font-semibold" aria-current="page">Request Quote</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Headline */}
            <div>
              <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-honeywell-red/20 border border-honeywell-red/40 text-honeywell-red text-xs font-bold uppercase tracking-wider mb-6">
                Free · No Obligation · Fast Response
              </span>
              <Heading variant="hero" as="h1" className="text-white mb-5 leading-tight">
                Get a Free Quote for Your Hydraulic Requirement
              </Heading>
              <p className="text-[#CBD5E1] text-lg font-body leading-relaxed mb-8 max-w-lg">
                Not sure what you need? That&apos;s okay. Just tell us about your machine or project and our team will guide you to the right solution.
              </p>

              {/* Quick contact options — rounded-full to match design system */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+919924343873"
                  className="inline-flex items-center justify-center gap-2 bg-honeywell-red hover:bg-red-700 text-white font-semibold font-body text-sm px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-honeywell-red/30"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  Call Us Now
                </a>
                <a
                  href="https://wa.me/919924343873"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold font-body text-sm px-6 py-3 rounded-full transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Right — Promises grid — rounded-sm to match design system */}
            <div className="grid grid-cols-2 gap-4">
              {PROMISES.map((p) => (
                <div
                  key={p.title}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 transition-all duration-350 ease-premium hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red hover:bg-white/10 hover:shadow-float"
                >
                  <div className="w-10 h-10 rounded-xl bg-honeywell-red/20 flex items-center justify-center text-honeywell-red mb-3">
                    {p.icon}
                  </div>
                  <p className="font-display font-bold text-white text-sm mb-1">{p.title}</p>
                  <p className="text-[#94A3B8] text-xs font-body leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Trust stats bar ────────────────────────────────────────────────── */}
      <div className="bg-honeywell-red py-5">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {TRUST_STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-xl md:text-2xl font-display font-extrabold text-white">{stat.value}</p>
                <p className="text-xs text-red-100 font-body uppercase tracking-wider mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ── Main: Form + Sidebar ──────────────────────────────────────────── */}
      <Section bg="gray">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start">

            {/* Form Panel — rounded-sm to match design system */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-350 ease-premium hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red hover:shadow-float">
              {/* Form header */}
              <div className="px-6 sm:px-10 pt-8 pb-6 border-b border-slate-100">
                <Heading as="h2" variant="subsection" className="mb-2">
                  Tell Us What You Need
                </Heading>
                <p className="text-sm text-brand-steelGray font-body">
                  Fill in what you know. Fields with <span className="text-honeywell-red font-bold">*</span> are required. Everything else is optional.
                </p>
              </div>
              <div className="px-6 sm:px-10 py-8">
                <QuoteForm />
              </div>
            </div>

            {/* Sidebar */}
            <aside aria-label="Contact details and why choose us" className="space-y-5">

              {/* Prefer to talk? — rounded-sm to match design system */}
              <div className="bg-honeywell-navy text-white rounded-xl p-6 transition-all duration-350 ease-premium hover:-translate-y-1.5 hover:shadow-float border-t-2 border-t-transparent hover:border-t-honeywell-red">
                <p className="font-display font-bold text-lg mb-1">Prefer to talk?</p>
                <p className="text-[#94A3B8] text-sm font-body mb-5">Reach us directly — we&apos;re happy to answer any questions.</p>

                <div className="space-y-3">
                  <a
                    href="tel:+919924343873"
                    className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-sm px-4 py-3 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-honeywell-red flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#94A3B8] font-body uppercase tracking-wider">Call Us</p>
                      <p className="text-sm font-semibold text-white group-hover:text-honeywell-red transition-colors">+91 9924343873</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/919924343873"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-sm px-4 py-3 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-green-600 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#94A3B8] font-body uppercase tracking-wider">WhatsApp</p>
                      <p className="text-sm font-semibold text-white group-hover:text-green-400 transition-colors">Message Our Engineers</p>
                    </div>
                  </a>

                  <a
                    href="mailto:sales@honeywellhydraulics.com"
                    className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-sm px-4 py-3 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-brand-steelGray/30 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#94A3B8] font-body uppercase tracking-wider">Email</p>
                      <p className="text-sm font-semibold text-white group-hover:text-honeywell-red transition-colors break-words">sales@honeywellhydraulics.com</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 px-4 py-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-[#94A3B8]" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#94A3B8] font-body uppercase tracking-wider">Location</p>
                      <p className="text-sm text-[#CBD5E1] font-body">Kathwada GIDC, Ahmedabad</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What you can ask about — rounded-sm to match design system */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 transition-all duration-350 ease-premium hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red hover:shadow-float">
                <p className="font-display font-bold text-honeywell-navy mb-4">What can you ask about?</p>
                <ul className="space-y-2.5">
                  {[
                    'Hydraulic Cylinders (all sizes)',
                    'Hydraulic Power Packs',
                    'Hydraulic Accessories',
                    'Custom / Special Designs',
                    'Replacement Parts',
                    'Technical Advice (free)',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm font-body text-brand-steelGray">
                      <span className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                        <span className="w-2 h-2 rounded-full bg-green-500 block" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Made in India badge — rounded-sm to match design system */}
              <div className="bg-gradient-to-br from-orange-50 to-green-50 border border-slate-200 rounded-xl p-5 flex items-center gap-4 transition-all duration-350 ease-premium hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red hover:shadow-float">
                <span className="text-4xl" role="img" aria-label="Indian Flag">🇮🇳</span>
                <div>
                  <p className="font-display font-bold text-honeywell-navy">Made in India</p>
                  <p className="text-xs text-brand-steelGray font-body mt-0.5">Designed, machined &amp; tested at our Ahmedabad facility.</p>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {/* ── Process Timeline ─────────────────────────────────────────────── */}
      <Section bg="white">
        <Container>
          <div className="text-center mb-14">
            <Heading as="h2" variant="section" className="mb-4">
              How It Works — 4 Simple Steps
            </Heading>
            <p className="text-lg text-brand-steelGray font-body max-w-xl mx-auto">
              From your first message to your product delivered — here&apos;s exactly what happens.
            </p>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" aria-label="Quote process steps">
            {PROCESS_STEPS.map((step, idx) => (
              <li
                key={step.step}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Connector line (desktop only) */}
                {idx < PROCESS_STEPS.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-8 left-[calc(50%+36px)] w-[calc(100%-72px)] h-px bg-gradient-to-r from-slate-200 to-slate-200"
                    aria-hidden="true"
                  />
                )}

                <div className="relative mb-5">
                  {/* Icon container rounded-sm */}
                  <div className="w-16 h-16 rounded-xl bg-honeywell-navy flex items-center justify-center text-white shadow-md group-hover:bg-honeywell-red transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-honeywell-red/20">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-honeywell-red text-white text-xs font-bold flex items-center justify-center font-body shadow-sm">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-base font-display font-bold text-honeywell-navy mb-2">{step.title}</h3>
                <p className="text-sm text-brand-steelGray font-body leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <SiteFAQSection faqs={FAQS} />

      {/* ── Final CTA — rounded-full buttons ─────────────────────────────── */}
      <section className="bg-honeywell-navy py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-honeywell-red opacity-5 -skew-x-12 translate-x-1/4" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-honeywell-red opacity-[0.03] skew-x-12 -translate-x-1/4" aria-hidden="true" />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-honeywell-red/40 to-transparent" aria-hidden="true" />
        <Container className="relative z-10 text-center">
          <Heading variant="section" className="text-white mb-4">
            Still Have Questions?
          </Heading>
          <p className="text-[#CBD5E1] font-body max-w-xl mx-auto mb-8 text-lg leading-relaxed">
            Our team is happy to talk through your requirement before you even fill a form. Just call or WhatsApp us.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+919924343873"
              className="inline-flex items-center gap-2 bg-honeywell-red hover:bg-red-700 text-white font-semibold font-body text-sm px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-honeywell-red/30"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Talk to an Engineer
            </a>
            <a
              href="https://wa.me/919924343873"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-transparent border border-white/30 text-white hover:bg-white hover:text-honeywell-navy font-semibold font-body text-sm px-7 py-3.5 rounded-full transition-all duration-200"
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
