import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { ContactForm } from '@/components/forms/ContactForm';
import { SiteFAQSection } from '@/components/faq/SiteFAQSection';
import { LocationCard } from '@/components/cards/LocationCard';
import JsonLd from '@/components/seo/JsonLd';
import { COMPANY_INFO } from '@/lib/constants';
import { homepageLocations } from '@/data/homepage';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  ArrowRight,
  CheckCircle,
  Shield,
  Zap,
  HeartHandshake,
} from 'lucide-react';

import { buildMetadata } from '@/lib/seo';

// ─────────────────────────────────────────────────────────────────────────────
// SEO Metadata
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  ...buildMetadata({
    title: 'Contact Us | Honeywell Hydraulics Ahmedabad',
    description:
      'Get in touch with Honeywell Hydraulics in Kathwada GIDC, Ahmedabad. Call, WhatsApp, or email for hydraulic cylinders, power packs, and accessories.',
    canonical: '/contact-us',
  }),
};

// ─────────────────────────────────────────────────────────────────────────────
// Canonical NAP
// ─────────────────────────────────────────────────────────────────────────────
const NAP = {
  name: COMPANY_INFO.name,
  phone: COMPANY_INFO.phone,
  phoneHref: `tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`,
  whatsappHref: 'https://wa.me/919924343873',
  emailSales: COMPANY_INFO.email,
  address: COMPANY_INFO.address,
  addressFormatted:
    'B-18, Suryam Plaza Estate, Near Nilkanth Estate, Road no. 15, Kathwada GIDC, Ahmedabad, Gujarat 382430, India',
  hours: 'Monday – Saturday: 09:00 AM – 07:00 PM',
  hoursClosed: 'Closed on Sundays',
  geo: COMPANY_INFO.geo,
};

// ─────────────────────────────────────────────────────────────────────────────
// Schema
// ─────────────────────────────────────────────────────────────────────────────
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${COMPANY_INFO.websiteUrl}/` },
    { '@type': 'ListItem', position: 2, name: 'Contact Us', item: `${COMPANY_INFO.websiteUrl}/contact-us` },
  ],
};

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Honeywell Hydraulics',
  description:
    'Contact page for Honeywell Hydraulics — hydraulic cylinder and power pack manufacturer in Ahmedabad, Gujarat.',
  url: `${COMPANY_INFO.websiteUrl}/contact-us`,
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: COMPANY_INFO.phone,
      contactType: 'sales',
      email: COMPANY_INFO.email,
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi', 'Gujarati'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00',
      },
    },
  ],
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ManufacturingBusiness',
  '@id': `${COMPANY_INFO.websiteUrl}/contact-us#localbusiness`,
  name: COMPANY_INFO.name,
  url: COMPANY_INFO.websiteUrl,
  telephone: COMPANY_INFO.phone,
  email: COMPANY_INFO.email,
  priceRange: '₹₹',
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
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: COMPANY_INFO.openingHours.opens,
    closes: COMPANY_INFO.openingHours.closes,
  },
  areaServed: [
    { '@type': 'City', name: 'Ahmedabad' },
    { '@type': 'City', name: 'Surat' },
    { '@type': 'City', name: 'Vadodara' },
    { '@type': 'City', name: 'Rajkot' },
    { '@type': 'City', name: 'Bhavnagar' },
    { '@type': 'City', name: 'Gandhinagar' },
    { '@type': 'City', name: 'Vapi' },
    { '@type': 'City', name: 'Jamnagar' },
    { '@type': 'State', name: 'Gujarat' },
    { '@type': 'Country', name: 'India' },
  ],
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Contact Honeywell Hydraulics Ahmedabad',
  url: `${COMPANY_INFO.websiteUrl}/contact-us`,
  description: 'Contact page for Honeywell Hydraulics, hydraulic manufacturer in Ahmedabad, Gujarat.',
};

// ─────────────────────────────────────────────────────────────────────────────
// Content
// ─────────────────────────────────────────────────────────────────────────────
const CONTACT_FAQS = [
  {
    question: 'What are your business hours?',
    answer:
      'Our factory in Kathwada GIDC, Ahmedabad is open Monday to Saturday, 09:00 AM to 07:00 PM. We are closed on Sundays. Existing clients can still reach us for emergency breakdown support outside business hours.',
  },
  {
    question: 'Where is your factory located?',
    answer:
      'We are at B-18, Suryam Plaza Estate, Near Nilkanth Estate, Road no. 15, Kathwada GIDC, Ahmedabad, Gujarat 382430. All our products are designed, machined, and tested here.',
  },
  {
    question: 'How do I get a price quote?',
    answer:
      'For a detailed quote, use our Request a Quote page and describe what you need. You can also call us at +91 9924343873 or send a WhatsApp message — our team will guide you step by step.',
  },
  {
    question: 'Do you supply hydraulic accessories?',
    answer:
      'Yes. Beyond hydraulic cylinders and power packs, we supply valves, fittings, hoses, and other hydraulic accessories. Contact us with your specific requirement.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: CONTACT_FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

const WHY_CONTACT = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'Fast Response',
    body: 'We respond to every inquiry personally — usually within the same business day.',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Direct from Factory',
    body: 'No agents, no middlemen. You speak directly with our Ahmedabad manufacturing team.',
  },
  {
    icon: <HeartHandshake className="w-5 h-5" />,
    title: 'Free Consultation',
    body: 'Not sure what you need? Our engineers will help you figure out the right solution.',
  },
  {
    icon: <CheckCircle className="w-5 h-5" />,
    title: 'No Pressure',
    body: 'Ask questions, get a quote, take your time. We\'re here to help, not to push you.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────
export default function ContactUsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={contactPageSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={faqSchema} />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-honeywell-navy text-white pt-6 md:pt-8 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-honeywell-red opacity-[0.06] -skew-x-12 translate-x-1/4" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

        <Container className="relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-base font-body text-slate-500 mb-8">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">&rsaquo;</li>
              <li className="text-white font-semibold" aria-current="page">Contact Us</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Headline */}
            <div>

              <Heading variant="section" as="h1" className="text-white mb-5 leading-tight">
                We&apos;re Here to Help — Just Reach Out
              </Heading>
              <p className="text-[#CBD5E1] text-lg font-body leading-relaxed mb-8 max-w-lg text-justify">
                Call us, send a WhatsApp, or fill the form below. Our team responds to every inquiry and will help you find the right hydraulic solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={NAP.phoneHref}
                  className="inline-flex items-center justify-center gap-2 bg-honeywell-red hover:bg-red-700 text-white font-semibold font-body text-sm px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-honeywell-red/30"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  Call Us Now
                </a>
                <a
                  href={NAP.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold font-body text-sm px-6 py-3 rounded-full transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  WhatsApp Us
                </a>
                <Link
                  href="/request-quote"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/20 text-white hover:bg-white/10 font-semibold font-body text-sm px-6 py-3 rounded-full transition-all duration-200"
                >
                  Request a Quote
                </Link>
              </div>
            </div>

            {/* Right — Why contact us — rounded-sm to match design system */}
            <div className="grid grid-cols-2 gap-4">
              {WHY_CONTACT.map((item) => (
                <div
                  key={item.title}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 transition-all duration-350 ease-premium hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red hover:bg-white/10 hover:shadow-float"
                >
                  <div className="w-10 h-10 rounded-xl bg-honeywell-red/20 flex items-center justify-center text-honeywell-red mb-3">
                    {item.icon}
                  </div>
                  <p className="font-display font-bold text-white text-sm mb-1 text-justify">{item.title}</p>
                  <p className="text-[#94A3B8] text-xs font-body leading-relaxed text-justify">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Contact Info + Form ──────────────────────────────────────────── */}
      <Section bg="gray">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-10 items-start">

            {/* Left — Contact details sidebar */}
            <aside aria-label="Contact information" className="space-y-5">

              {/* Quick contact — rounded-sm to match design system */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 transition-all duration-350 ease-premium hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red hover:shadow-float">
                <h2 className="text-base font-display font-bold text-honeywell-navy mb-5 pb-3 border-b border-slate-100">
                  Reach Us Directly
                </h2>
                <div className="space-y-3">
                  <a
                    href={NAP.phoneHref}
                    className="flex items-center gap-3 group p-3 rounded-xl hover:bg-slate-50 transition-colors"
                    aria-label={`Call ${NAP.phone}`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-honeywell-red/10 flex items-center justify-center shrink-0 group-hover:bg-honeywell-red/20 transition-colors">
                      <Phone className="w-4 h-4 text-honeywell-red" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-body uppercase tracking-wider text-justify">Phone / WhatsApp</p>
                      <p className="text-sm font-semibold font-body text-honeywell-navy group-hover:text-honeywell-red transition-colors text-justify">
                        {NAP.phone}
                      </p>
                    </div>
                  </a>

                  <a
                    href={NAP.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group p-3 rounded-sm hover:bg-green-50 transition-colors"
                    aria-label="Message engineering team on WhatsApp"
                  >
                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center shrink-0 group-hover:bg-green-200 transition-colors">
                      <MessageCircle className="w-4 h-4 text-green-600" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-body uppercase tracking-wider text-justify">WhatsApp</p>
                      <p className="text-sm font-semibold font-body text-honeywell-navy group-hover:text-green-600 transition-colors text-justify">
                        Message Our Engineers
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${NAP.emailSales}`}
                    className="flex items-center gap-3 group p-3 rounded-xl hover:bg-slate-50 transition-colors"
                    aria-label={`Email ${NAP.emailSales}`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-slate-200 transition-colors">
                      <Mail className="w-4 h-4 text-slate-500" aria-hidden="true" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] text-slate-400 font-body uppercase tracking-wider text-justify">Email Us</p>
                      <p className="text-sm font-semibold font-body text-honeywell-navy group-hover:text-honeywell-red transition-colors truncate text-justify">
                        {NAP.emailSales}
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Factory location — rounded-sm to match design system */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 transition-all duration-350 ease-premium hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red hover:shadow-float">
                <h2 className="text-base font-display font-bold text-honeywell-navy mb-5 pb-3 border-b border-slate-100">
                  Our Factory
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-honeywell-red/10 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-honeywell-red" aria-hidden="true" />
                    </div>
                    <address className="not-italic text-sm font-body text-brand-steelGray leading-relaxed" itemScope itemType="https://schema.org/PostalAddress">
                      <strong className="text-honeywell-navy block mb-0.5">{NAP.name}</strong>
                      <span itemProp="streetAddress">B-18, Suryam Plaza Estate,<br />Near Nilkanth Estate, Road no. 15,<br />Kathwada GIDC,</span>{' '}
                      <span itemProp="addressLocality">Ahmedabad</span>,{' '}
                      <span itemProp="addressRegion">Gujarat</span>{' '}
                      <span itemProp="postalCode">382430</span>,{' '}
                      <span itemProp="addressCountry">India</span>
                    </address>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-4 h-4 text-slate-500" aria-hidden="true" />
                    </div>
                    <div className="text-sm font-body text-brand-steelGray leading-relaxed">
                      <strong className="text-honeywell-navy block mb-0.5">Business Hours</strong>
                      {NAP.hours}<br />
                      <span className="text-xs text-slate-400">{NAP.hoursClosed}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps — rounded-sm to match design system */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-350 ease-premium hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red hover:shadow-float">
                <div className="px-5 pt-5 pb-3 border-b border-slate-100">
                  <h2 className="text-base font-display font-bold text-honeywell-navy">Find Us on Map</h2>
                </div>
                <div className="relative w-full" style={{ height: '220px' }}>
                  <iframe
                    src={`https://maps.google.com/maps?q=Honeywell+Hydraulics,+Ahmedabad,+Gujarat&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Honeywell Hydraulics Location — Kathwada GIDC, Ahmedabad"
                    className="absolute inset-0"
                  />
                </div>
                <div className="px-5 py-3">
                  <a
                    href={COMPANY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-honeywell-red hover:underline underline-offset-4 font-body"
                  >
                    <MapPin className="w-3 h-3" />
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </aside>

            {/* Contact Form Panel — rounded-sm to match design system */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-350 ease-premium hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red hover:shadow-float">
              <div className="px-6 sm:px-10 pt-8 pb-6 border-b border-slate-100">
                <Heading as="h2" variant="subsection" className="mb-2">
                  Send Us a Message
                </Heading>
                <p className="text-sm text-brand-steelGray font-body text-justify">
                  Not sure what to say? Just tell us what you need — our team will take it from there. For urgent needs, call{' '}
                  <a href={NAP.phoneHref} className="text-honeywell-red font-semibold hover:underline underline-offset-4">
                    {NAP.phone}
                  </a>.
                </p>
              </div>
              <div className="px-6 sm:px-10 py-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Service Areas — rounded-sm to match design system ── */}
      <Section bg="white">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" variant="section" className="mb-4">
              We Serve All of Gujarat &amp; Across India
            </Heading>
            <p className="text-lg text-brand-steelGray font-body max-w-2xl mx-auto text-justify">
              Our hydraulic products are delivered from our Ahmedabad factory to manufacturing plants across Gujarat and all major Indian cities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {homepageLocations.map((loc, index) => (
              <div key={`${loc.city}-${index}`}>
                <LocationCard
                  city={loc.city}
                  description={loc.description}
                  industries={loc.industries}
                  href={loc.href}
                  ctaText={loc.ctaText}
                />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
      <SiteFAQSection faqs={CONTACT_FAQS} />

      {/* ── Final CTA Banner — rounded-full buttons ── */}
      <section className="bg-honeywell-navy py-14 relative overflow-hidden" aria-label="Final contact strip">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-honeywell-red opacity-5 -skew-x-12 translate-x-1/4" aria-hidden="true" />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-honeywell-red/40 to-transparent" aria-hidden="true" />
        <Container className="relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white text-center md:text-left">
              <p className="text-xl font-display font-bold mb-1 text-justify">Ready to discuss your project?</p>
              <p className="text-[#CBD5E1] font-body text-sm max-w-md text-justify">
                Our engineers are happy to help — whether you have a full specification or just a rough idea.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href={NAP.phoneHref}
                className="inline-flex items-center gap-2 bg-honeywell-red hover:bg-red-700 text-white font-semibold font-body text-sm px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-honeywell-red/30"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call {NAP.phone}
              </a>
              <a
                href={NAP.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white hover:bg-white hover:text-honeywell-navy font-semibold font-body text-sm px-6 py-3 rounded-full transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                WhatsApp Us
              </a>
              <Button
                href="/request-quote"
                variant="secondary"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
