import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { IconBox } from '@/components/ui/IconBox';
import { Button } from '@/components/ui/Button';
import { ContactForm } from '@/components/forms/ContactForm';
import { FAQAccordion } from '@/components/faq/FAQAccordion';
import JsonLd from '@/components/seo/JsonLd';
import { COMPANY_INFO } from '@/lib/constants';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Wrench,
  Settings2,
  Users,
  FileText,
  LifeBuoy,
  ArrowRight,
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// SEO Metadata
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Contact Honeywell Hydraulics Ahmedabad | Contact Us',
  description:
    'Contact Honeywell Hydraulics in Kathwada GIDC, Ahmedabad for custom hydraulic cylinders, power packs, and engineering support. Call, WhatsApp, or email our team.',
  alternates: {
    canonical: '/contact-us',
  },
  openGraph: {
    title: 'Contact Honeywell Hydraulics Ahmedabad | Contact Us',
    description:
      'Contact Honeywell Hydraulics in Kathwada GIDC, Ahmedabad for custom hydraulic cylinders, power packs, and engineering support.',
    url: '/contact-us',
    siteName: COMPANY_INFO.name,
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Honeywell Hydraulics Ahmedabad | Contact Us',
    description:
      'Contact Honeywell Hydraulics in Kathwada GIDC, Ahmedabad for custom hydraulic cylinders, power packs, and hydraulic accessories.',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Canonical NAP — sourced from lib/constants.ts (single source of truth)
// ─────────────────────────────────────────────────────────────────────────────
const NAP = {
  name: COMPANY_INFO.name,
  phone: COMPANY_INFO.phone,
  phoneHref: `tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`,
  whatsappHref: 'https://wa.me/919924343873',
  emailSales: COMPANY_INFO.email,
  emailEngineering: 'engineering@honeywellhydraulics.com',
  address: COMPANY_INFO.address,
  addressFormatted:
    'B-18, Suryam Plaza Estate, Near Nilkanth Estate, Road no. 15, Kathwada GIDC, Ahmedabad, Gujarat 382430, India',
  hours: 'Monday – Saturday: 09:00 AM – 07:00 PM',
  hoursClosed: 'Sunday: Closed (Emergency breakdown support available for existing clients)',
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
      hoursAvailable: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '09:00', closes: '19:00' },
    },
    {
      '@type': 'ContactPoint',
      telephone: COMPANY_INFO.phone,
      contactType: 'technical support',
      email: 'engineering@honeywellhydraulics.com',
      areaServed: 'IN',
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
// Static content
// ─────────────────────────────────────────────────────────────────────────────
const WHY_CONTACT = [
  {
    icon: <Wrench className="w-5 h-5" />,
    title: 'Engineering Support',
    body: 'Speak directly with our fluid power engineers about your project specifications, operating conditions, and selection criteria.',
  },
  {
    icon: <Settings2 className="w-5 h-5" />,
    title: 'Custom Design Consultation',
    body: 'Our team reviews your bore size, stroke, pressure rating, and mounting configuration requirements to recommend the right solution.',
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: 'Project Discussion',
    body: 'Whether you are in the early design phase or need an urgent replacement, we work with you to define the complete project scope.',
  },
  {
    icon: <LifeBuoy className="w-5 h-5" />,
    title: 'Technical Assistance',
    body: 'Existing clients can reach our maintenance support team for breakdown diagnostics, seal kit identification, or retrofit guidance.',
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: 'Direct Manufacturer',
    body: 'You communicate directly with the Ahmedabad factory — no middlemen, no resellers, no delays in technical communication.',
  },
];

const SERVICE_AREAS = [
  { city: 'Ahmedabad', note: 'HQ — Kathwada GIDC' },
  { city: 'Surat', note: 'Sachin GIDC, Pandesara, Hazira' },
  { city: 'Vadodara', note: 'Makarpura GIDC, Savli' },
  { city: 'Rajkot', note: 'Shapar, Aji GIDC, Metoda GIDC' },
  { city: 'Bhavnagar', note: 'Bhavnagar GIDC' },
  { city: 'Gandhinagar', note: 'Indroda, Khatraj' },
  { city: 'Vapi', note: 'Vapi GIDC, Silvassa' },
  { city: 'Jamnagar', note: 'Digvijay Port Road, Sikka GIDC' },
];

const CONTACT_FAQS = [
  {
    question: 'What are your business hours?',
    answer:
      'Our manufacturing facility in Kathwada GIDC, Ahmedabad is open Monday to Saturday, 09:00 AM to 07:00 PM. We are closed on Sundays, however emergency breakdown support is available for existing clients outside of business hours.',
  },
  {
    question: 'How can I reach the engineering support team?',
    answer:
      'You can reach our engineering support team directly at engineering@honeywellhydraulics.com or by calling +91 9924343873. When submitting the contact form, select "Engineering Support" from the department dropdown to ensure your inquiry is routed correctly.',
  },
  {
    question: 'Where is the Honeywell Hydraulics factory located?',
    answer:
      'Our manufacturing facility is located at B-18, Suryam Plaza Estate, Near Nilkanth Estate, Road no. 15, Kathwada GIDC, Ahmedabad, Gujarat 382430, India. All products are designed, machined, assembled, and pressure-tested at this single facility.',
  },
  {
    question: 'I need a custom hydraulic cylinder or power pack — how do I get a quote?',
    answer:
      'For a detailed engineering quote, use our Request Quote page to specify technical requirements including bore size, stroke length, operating pressure, and quantity. Alternatively, call +91 9924343873 or email sales@honeywellhydraulics.com and our team will guide you.',
  },
  {
    question: 'Do you manufacture hydraulic accessories?',
    answer:
      'Yes. In addition to hydraulic cylinders and power packs, we manufacture and supply a range of hydraulic accessories including valves, fittings, hoses, and related components. Contact us for specific accessory requirements.',
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

// ─────────────────────────────────────────────────────────────────────────────
// Page (Server Component)
// ─────────────────────────────────────────────────────────────────────────────
export default function ContactUsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={contactPageSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={faqSchema} />

      {/* ── Section 1: Hero ──────────────────────────────────────────────── */}
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
              <li className="text-white font-semibold" aria-current="page">Contact Us</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-sm bg-[#E31B23] text-white text-xs font-bold uppercase tracking-wider mb-6">
              Ahmedabad, Gujarat
            </span>
            <Heading variant="hero" as="h1" className="text-white mb-5">
              Contact Honeywell Hydraulics
            </Heading>
            <p className="text-[#CBD5E1] text-lg font-body leading-relaxed max-w-2xl mb-8">
              Whether you need a custom cylinder prototype, a complete power pack system, or hydraulic accessories, our engineering team in Ahmedabad is ready to assist.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={NAP.phoneHref}
                className="inline-flex items-center justify-center gap-2 bg-[#E31B23] hover:bg-[#C41220] text-white font-semibold font-body text-base px-6 py-3 rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E31B23] focus-visible:ring-offset-2"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call Now
              </a>
              <a
                href="/request-quote"
                className="inline-flex items-center justify-center gap-2 bg-transparent border border-white text-white hover:bg-white hover:text-[#0D1B5C] font-semibold font-body text-base px-6 py-3 rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
              >
                Request Quote
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Section 2: Contact Information + Form ────────────────────────── */}
      <Section bg="gray">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 items-start">

            {/* Contact Information Sidebar */}
            <aside aria-label="Contact information" className="space-y-6">

              {/* Direct Lines */}
              <div className="bg-white rounded-sm border border-[#E2E8F0] shadow-sm p-6 space-y-5">
                <h2 className="text-lg font-display font-bold text-[#0D1B5C] border-b border-[#E2E8F0] pb-3">
                  Direct Lines
                </h2>

                <a
                  href={NAP.phoneHref}
                  className="flex items-center gap-3 group"
                  aria-label={`Call ${NAP.phone}`}
                >
                  <IconBox icon={<Phone className="w-4 h-4" />} variant="primary" size="sm" className="shrink-0" />
                  <div>
                    <p className="text-xs text-[#94A3B8] font-body">Phone / WhatsApp</p>
                    <p className="text-sm font-semibold font-body text-[#0D1B5C] group-hover:text-[#E31B23] transition-colors">
                      {NAP.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={NAP.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                  aria-label="Message engineering team on WhatsApp"
                >
                  <IconBox icon={<MessageCircle className="w-4 h-4" />} variant="primary" size="sm" className="shrink-0" />
                  <div>
                    <p className="text-xs text-[#94A3B8] font-body">WhatsApp</p>
                    <p className="text-sm font-semibold font-body text-[#0D1B5C] group-hover:text-[#E31B23] transition-colors">
                      Message Engineering Team
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${NAP.emailSales}`}
                  className="flex items-center gap-3 group"
                  aria-label={`Email ${NAP.emailSales}`}
                >
                  <IconBox icon={<Mail className="w-4 h-4" />} variant="primary" size="sm" className="shrink-0" />
                  <div>
                    <p className="text-xs text-[#94A3B8] font-body">Sales &amp; Inquiries</p>
                    <p className="text-sm font-semibold font-body text-[#0D1B5C] group-hover:text-[#E31B23] transition-colors break-all">
                      {NAP.emailSales}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${NAP.emailEngineering}`}
                  className="flex items-center gap-3 group"
                  aria-label={`Email ${NAP.emailEngineering}`}
                >
                  <IconBox icon={<Mail className="w-4 h-4" />} variant="secondary" size="sm" className="shrink-0" />
                  <div>
                    <p className="text-xs text-[#94A3B8] font-body">Engineering Support</p>
                    <p className="text-sm font-semibold font-body text-[#0D1B5C] group-hover:text-[#E31B23] transition-colors break-all">
                      {NAP.emailEngineering}
                    </p>
                  </div>
                </a>
              </div>

              {/* Manufacturing Facility */}
              <div className="bg-white rounded-sm border border-[#E2E8F0] shadow-sm p-6 space-y-4">
                <h2 className="text-lg font-display font-bold text-[#0D1B5C] border-b border-[#E2E8F0] pb-3">
                  Manufacturing Facility
                </h2>

                <address
                  className="not-italic"
                  itemScope
                  itemType="https://schema.org/PostalAddress"
                >
                  <div className="flex items-start gap-3">
                    <IconBox icon={<MapPin className="w-4 h-4" />} variant="primary" size="sm" className="shrink-0 mt-0.5" />
                    <div className="text-sm font-body text-[#334155] leading-relaxed">
                      <strong className="text-[#0D1B5C]">{NAP.name}</strong><br />
                      <span itemProp="streetAddress">B-18, Suryam Plaza Estate,<br />Near Nilkanth Estate, Road no. 15,<br />Kathwada GIDC,</span><br />
                      <span itemProp="addressLocality">Ahmedabad</span>,{' '}
                      <span itemProp="addressRegion">Gujarat</span>{' '}
                      <span itemProp="postalCode">382430</span>,{' '}
                      <span itemProp="addressCountry">India</span>
                    </div>
                  </div>
                </address>

                <div className="flex items-start gap-3">
                  <IconBox icon={<Clock className="w-4 h-4" />} variant="secondary" size="sm" className="shrink-0 mt-0.5" />
                  <div className="text-sm font-body text-[#334155] leading-relaxed">
                    <strong className="text-[#0D1B5C]">Business Hours</strong><br />
                    {NAP.hours}<br />
                    <span className="text-[#64748B] text-xs">{NAP.hoursClosed}</span>
                  </div>
                </div>
              </div>

              {/* Google Maps Section */}
              <div className="bg-white rounded-sm border border-[#E2E8F0] shadow-sm overflow-hidden">
                <h2 className="text-lg font-display font-bold text-[#0D1B5C] px-6 pt-6 pb-3 border-b border-[#E2E8F0]">
                  Our Location
                </h2>
                <div className="relative w-full" style={{ height: '250px' }}>
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.0!2d${NAP.geo.longitude}!3d${NAP.geo.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKathwada+GIDC!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin`}
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
                <div className="px-6 py-3 bg-[#F8FAFC]">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${NAP.geo.latitude},${NAP.geo.longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E31B23] hover:underline underline-offset-4 font-body"
                  >
                    <MapPin className="w-3 h-3" />
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </aside>

            {/* Contact Form Panel */}
            <div className="bg-white rounded-sm border border-[#E2E8F0] shadow-sm p-6 sm:p-10">
              <Heading as="h2" variant="subsection" className="mb-2">
                General Inquiry Form
              </Heading>
              <p className="text-sm text-[#64748B] font-body mb-8">
                Fields marked <span className="text-[#E31B23] font-bold">*</span> are required.
                For urgent breakdown support, call{' '}
                <a href={NAP.phoneHref} className="text-[#E31B23] font-semibold hover:underline underline-offset-4">
                  {NAP.phone}
                </a>{' '}
                directly.
              </p>
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Section 3: Why Contact Honeywell ─────────────────────────────── */}
      <Section bg="white">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" variant="section" className="mb-4">
              Why Contact Honeywell Hydraulics?
            </Heading>
            <p className="text-lg text-[#64748B] font-body max-w-2xl mx-auto">
              Every inquiry is handled by a qualified fluid power engineer — not a generic call centre agent.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            {WHY_CONTACT.map((item) => (
              <li
                key={item.title}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-sm p-6 hover:border-[#E31B23] transition-colors"
              >
                <IconBox icon={item.icon} variant="primary" className="mb-4" />
                <h3 className="text-lg font-display font-bold text-[#0D1B5C] mb-2">{item.title}</h3>
                <p className="text-sm text-[#64748B] font-body leading-relaxed">{item.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ── Section 4: Service Areas ─────────────────────────────────────── */}
      <Section bg="gray">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" variant="section" className="mb-4">
              Gujarat Service Areas
            </Heading>
            <p className="text-lg text-[#64748B] font-body max-w-2xl mx-auto">
              We manufacture and deliver precision hydraulic equipment across Gujarat and pan-India from our Kathwada GIDC facility in Ahmedabad.
            </p>
          </div>

          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4" role="list">
            {SERVICE_AREAS.map((area) => (
              <li
                key={area.city}
                className="bg-white border border-[#E2E8F0] rounded-sm p-4 text-center hover:border-[#E31B23] transition-colors"
              >
                <p className="font-display font-bold text-[#0D1B5C] mb-1">{area.city}</p>
                <p className="text-xs text-[#94A3B8] font-body">{area.note}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ── Lead Generation CTA ────────────────────────────────────────── */}
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
            <Button
              href="/products/"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              View Products
            </Button>
            <a
              href={NAP.phoneHref}
              className="inline-flex items-center gap-2 bg-transparent border border-white text-white hover:bg-white hover:text-[#0D1B5C] font-semibold font-body text-sm px-6 py-3 rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Talk to an Engineer
            </a>
          </div>
        </Container>
      </section>

      {/* ── Section 5: FAQ ────────────────────────────────────────────────── */}
      <Section bg="white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Heading as="h2" variant="section" className="mb-4 text-center">
              Frequently Asked Questions
            </Heading>
            <p className="text-[#64748B] font-body text-center mb-10">
              Common questions about reaching us, our facility, hours, and the inquiry process.
            </p>
            <FAQAccordion faqs={CONTACT_FAQS} />
          </div>
        </Container>
      </Section>

      {/* ── Contact Strip ─────────────────────────────────────────────────── */}
      <section className="bg-[#0D1B5C] py-12" aria-label="Final contact strip">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white text-center md:text-left">
              <p className="text-xl font-display font-bold mb-1">Ready to discuss your project?</p>
              <p className="text-[#CBD5E1] font-body text-sm">
                Reach us by phone, WhatsApp, or email — our team responds to every inquiry.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={NAP.phoneHref}
                className="inline-flex items-center gap-2 bg-[#E31B23] hover:bg-[#C41220] text-white font-semibold font-body text-sm px-6 py-3 rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E31B23] focus-visible:ring-offset-2"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call {NAP.phone}
              </a>
              <a
                href={NAP.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-transparent border border-white text-white hover:bg-white hover:text-[#0D1B5C] font-semibold font-body text-sm px-6 py-3 rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
