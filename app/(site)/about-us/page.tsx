import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { IconBox } from '@/components/ui/IconBox';
import { Button } from '@/components/ui/Button';
import { FAQAccordion } from '@/components/faq/FAQAccordion';
import JsonLd from '@/components/seo/JsonLd';
import { COMPANY_INFO } from '@/lib/constants';
import Image from 'next/image';
import { clientLogos } from '@/data/homepage';
import {
  ArrowRight,
  Phone,
  Shield,
  Target,
  Eye,
  Wrench,
  Users,
  Factory,
  FlaskConical,
  Cog,
  Zap,
  Award,
  Handshake,
  Lightbulb,
  ShieldCheck,
  HeartPulse,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// SEO Metadata
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'About Us | Hydraulic Cylinder & Power Pack Manufacturer Ahmedabad',
  description:
    'Learn about Honeywell Hydraulics — a leading hydraulic cylinder and power pack manufacturer in Ahmedabad, Gujarat. ISO-compliant manufacturing since 2018. Visit our facility.',
  alternates: {
    canonical: '/about-us',
  },
  keywords: 'about honeywell hydraulics, hydraulic manufacturer ahmedabad, hydraulic cylinder manufacturer gujarat, about us hydraulic company, hydraulic power pack manufacturer',
  openGraph: {
    title: 'About Honeywell Hydraulics | Hydraulic Manufacturer Since 2018',
    description:
      'Precision hydraulic cylinder and power pack manufacturer in Ahmedabad, Gujarat. Engineering-led manufacturing with 100% pressure testing.',
    url: '/about-us',
    siteName: COMPANY_INFO.name,
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Honeywell Hydraulics | Hydraulic Manufacturer Since 2018',
    description:
      'Precision hydraulic cylinder and power pack manufacturer in Ahmedabad, Gujarat. Engineering-led manufacturing with 100% pressure testing.',
  },
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
  ],
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: COMPANY_INFO.name,
  url: COMPANY_INFO.websiteUrl,
  logo: `${COMPANY_INFO.websiteUrl}/long-size-logohydralics-logo.png`,
  foundingDate: COMPANY_INFO.foundingYear,
  description: 'Leading hydraulic cylinder and power pack manufacturer in Ahmedabad, Gujarat. Custom-engineered hydraulic solutions for 25+ industries across India.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY_INFO.address.streetAddress,
    addressLocality: COMPANY_INFO.address.addressLocality,
    addressRegion: COMPANY_INFO.address.addressRegion,
    postalCode: COMPANY_INFO.address.postalCode,
    addressCountry: COMPANY_INFO.address.addressCountry,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: COMPANY_INFO.phone,
    contactType: 'sales',
    email: COMPANY_INFO.email,
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi', 'Gujarati'],
  },
  sameAs: Object.values(COMPANY_INFO.socialUrls),
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'About Honeywell Hydraulics',
  url: `${COMPANY_INFO.websiteUrl}/about-us`,
  description: 'Learn about Honeywell Hydraulics — precision hydraulic manufacturer in Ahmedabad, Gujarat.',
};

// ─────────────────────────────────────────────────────────────────────────────
// Static content — all sourced from docs/content/about/*.md
// ─────────────────────────────────────────────────────────────────────────────
const CORE_VALUES = [
  {
    icon: <Award className="w-5 h-5" />,
    title: 'Engineering Excellence',
    body: 'We calculate — not assume. Every cylinder wall thickness, every gallery bore diameter, every motor kilowatt is physics-based.',
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: 'Quality First',
    body: '100% hydrostatic pressure testing. No exceptions. Every component is tested at 1.5× rated working pressure before dispatch.',
  },
  {
    icon: <Handshake className="w-5 h-5" />,
    title: 'Client Partnership',
    body: 'Long-term OEM relationships built on transparent pricing, firm delivery timelines, and consistent quality performance.',
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: 'Innovation',
    body: 'Continuous investment in CNC machining, testing infrastructure, and engineering capability to solve complex fluid power challenges.',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Integrity',
    body: 'Documented traceability from raw material to finished component. Material test certificates with every shipment.',
  },
  {
    icon: <HeartPulse className="w-5 h-5" />,
    title: 'Safety',
    body: 'Minimum 4:1 safety factor on all pressure-bearing walls. We do not compromise on structural integrity.',
  },
];

const WHY_CHOOSE = [
  {
    icon: <Factory className="w-6 h-6" />,
    title: 'Direct Manufacturer',
    body: 'No middlemen. You deal directly with our Ahmedabad factory for transparent pricing and fast communication.',
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: 'Engineering Support',
    body: 'Every project is reviewed by qualified fluid power engineers who verify specifications before manufacturing.',
  },
  {
    icon: <FlaskConical className="w-6 h-6" />,
    title: '100% Pressure Tested',
    body: 'Every hydraulic cylinder and component is hydrostatically tested at 1.5× rated pressure. Test certificates included.',
  },
  {
    icon: <Cog className="w-6 h-6" />,
    title: 'Custom Design Capability',
    body: 'We manufacture to your exact bore size, stroke, pressure rating, and mounting configuration. No compromise.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Rapid Delivery',
    body: 'OEM First Article turnaround within 7–15 working days. Emergency and priority orders accommodated.',
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: 'Traceable Quality',
    body: 'EN 10204 Type 3.1 material certificates. Laser-engraved heat codes. Full traceability from steel mill to dispatch.',
  },
];

const INDUSTRIES = [
  { name: 'Injection Moulding', href: '/industries/injection-moulding/' },
  { name: 'Automotive', href: '/industries/automotive/' },
  { name: 'Steel & Metallurgy', href: '/industries/steel-metallurgy/' },
  { name: 'Construction Equipment', href: '/industries/construction-equipment/' },
  { name: 'Agriculture', href: '/industries/agriculture/' },
  { name: 'Material Handling', href: '/industries/material-handling/' },
  { name: 'Plastic Processing', href: '/industries/plastic-processing/' },
  { name: 'Special Purpose Machines', href: '/industries/special-purpose-machines/' },
];

const PRODUCTS = [
  {
    name: 'Hydraulic Cylinders',
    href: '/products/hydraulic-cylinders/',
    desc: 'Custom industrial hydraulic cylinders — double acting, welded, telescopic, tie rod configurations. Bore sizes 25mm to 500mm+.',
  },
  {
    name: 'Hydraulic Power Packs',
    href: '/products/hydraulic-power-packs/',
    desc: 'Custom-engineered AC and DC power units for precise flow and pressure requirements. 3-phase industrial and DC mini units.',
  },
  {
    name: 'Hydraulic Accessories',
    href: '/products/hydraulic-accessories/',
    desc: 'Complete range of hydraulic valves, fittings, hoses, and components to support your hydraulic system requirements.',
  },
];

const STATS = [
  { value: '2018', label: 'Founded' },
  { value: '500+', label: 'Cylinders Manufactured' },
  { value: '25+', label: 'Industries Served' },
  { value: '100%', label: 'Pressure Tested' },
];

const CAPABILITIES = [
  'CNC turning centres for precision machining of piston rods, end caps, and cylinder barrels',
  'Deep-hole drilling machines for cylinder barrel boring to H7 tolerance',
  'Honing machines for final surface finish to Ra 0.4 µm',
  'Heavy-duty welding bays with certified welding operators',
  'Hydrostatic pressure test rigs — 0–700 Bar testing capability',
  'CMM coordinate measuring machine for first-article inspection',
];

const ABOUT_FAQS = [
  {
    question: 'What does Honeywell Hydraulics manufacture?',
    answer:
      'Honeywell Hydraulics manufactures custom hydraulic cylinders, hydraulic power packs, and hydraulic accessories. We specialise in engineering solutions for industrial applications including injection moulding, automotive, steel, construction, and material handling industries.',
  },
  {
    question: 'Where is the Honeywell Hydraulics manufacturing facility located?',
    answer:
      'Our manufacturing facility is located at B-18, Suryam Plaza Estate, Near Nilkanth Estate, Road no. 15, Kathwada GIDC, Ahmedabad, Gujarat 382430, India. All products are designed, machined, assembled, and pressure-tested at this single facility.',
  },
  {
    question: 'What industries does Honeywell Hydraulics serve?',
    answer:
      'We serve 25+ industries including injection moulding, automotive, steel and metallurgy, construction equipment, agriculture, material handling, plastic processing, and special purpose machines. Our hydraulic solutions are engineered for severe-duty industrial environments.',
  },
  {
    question: 'Does Honeywell Hydraulics offer custom hydraulic solutions?',
    answer:
      'Yes. The majority of our work is custom-engineered to specific load, speed, pressure, and spatial requirements. We design and manufacture to your exact bore size, stroke length, operating pressure, and mounting configuration. There is no additional design consultation fee for custom work.',
  },
  {
    question: 'How can I request pricing from Honeywell Hydraulics?',
    answer:
      'You can request pricing by visiting our Request Quote page at /request-quote, calling +91 9924343873, or emailing sales@honeywellhydraulics.com. Our engineering team personally reviews every submission and prepares a detailed commercial proposal.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: ABOUT_FAQS.map((faq) => ({
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
export default function AboutUsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={faqSchema} />

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 1: HERO
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-honeywell-navy text-white pt-8 md:pt-12 pb-12 md:pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-honeywell-red opacity-5 -skew-x-12 translate-x-1/4" aria-hidden="true" />
        <Container className="relative z-10">
          <nav aria-label="Breadcrumb" className="text-sm font-body text-brand-borderGray mb-6">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li aria-hidden="true">&rsaquo;</li>
              <li className="text-white font-semibold" aria-current="page">About Us</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <Heading variant="hero" as="h1" className="text-white mb-6">
              Honeywell Hydraulics — Precision Hydraulic Manufacturer Since 2018
            </Heading>
            <p className="text-brand-borderGray text-lg font-body leading-relaxed max-w-2xl">
              Honeywell Hydraulics is a premier engineering firm specialising in the design, manufacturing, and supply of industrial hydraulic cylinders and power packs. Based in the Kathwada GIDC industrial zone in Ahmedabad, we deliver precision-engineered fluid power solutions that minimise downtime and maximise operational efficiency.
            </p>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 2: COMPANY OVERVIEW
          ═══════════════════════════════════════════════════════════════════ */}
      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading as="h2" variant="section" className="mb-6 text-honeywell-red">
                Precision Engineering, Proven Performance
              </Heading>
              <p className="text-brand-darkSlate font-body leading-relaxed mb-4">
                Founded in 2018 in Ahmedabad&apos;s industrial corridor, Honeywell Hydraulics has grown from a focused cylinder manufacturing operation into a comprehensive hydraulic equipment manufacturer serving 25+ industries across India.
              </p>
              <p className="text-brand-darkSlate font-body leading-relaxed mb-4">
                We are not a trading company that relabels third-party products. Every hydraulic cylinder, power pack, and accessory that carries our name is designed, machined, assembled, pressure-tested, and certified within our own manufacturing facility. This end-to-end production control is the foundation of our quality consistency.
              </p>
              <p className="text-brand-darkSlate font-body leading-relaxed">
                Our engineering team applies rigorous fluid power physics to every project — calculating forces, flows, velocities, and thermal outputs before manufacturing a single component. This discipline is what separates engineered hydraulic solutions from catalogue-copied ones.
              </p>
            </div>
            <div className="bg-honeywell-red text-white rounded-sm p-8">
              {/* IMAGE REQUIREMENT: /images/about/about-us-hero.webp
                  Alt: Honeywell Hydraulics manufacturing facility — precision hydraulic production in Ahmedabad
                  Priority: High */}
              <div className="aspect-[4/3] bg-black/10 rounded-sm flex items-center justify-center">
                <div className="text-center px-6">
                  <Factory className="w-12 h-12 text-white/80 mx-auto mb-3" aria-hidden="true" />
                  <p className="text-sm font-semibold text-white font-body">Manufacturing Facility</p>
                  <p className="text-xs text-white/80 font-body">Ahmedabad</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 3: OUR STORY
          ═══════════════════════════════════════════════════════════════════ */}
      <Section bg="gray">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Heading as="h2" variant="section" className="mb-6 text-honeywell-red">
              Our Story
            </Heading>
            <p className="text-brand-darkSlate font-body leading-relaxed mb-4">
              Honeywell Hydraulics was founded by engineers who recognised a fundamental gap in India&apos;s hydraulic manufacturing market: too many suppliers were selling underspecified, catalogue-copied components that failed in severe-duty industrial environments.
            </p>
            <p className="text-brand-darkSlate font-body leading-relaxed mb-4">
              We started with a clear engineering principle — <strong className="text-honeywell-navy">hydraulic systems are too important to be designed by guesswork</strong>. A hydraulic press with an incorrectly sized cylinder will cycle slowly, overheat, and destroy its seals within months. A goods lift with an incorrectly specified counterbalance valve is a danger to life.
            </p>
            <p className="text-brand-darkSlate font-body leading-relaxed">
              From our first cylinder produced in 2018, we have grown to manufacture hydraulic cylinders, power packs, and accessories for clients across Gujarat and pan-India — always maintaining our core commitment to physics-based engineering and zero-defect manufacturing.
            </p>
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTIONS 4-5: MISSION & VISION
          ═══════════════════════════════════════════════════════════════════ */}
      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-honeywell-navy text-white rounded-sm p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-honeywell-red opacity-5 -skew-x-12 translate-x-1/4" aria-hidden="true" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-honeywell-red flex items-center justify-center mb-5">
                  <Target className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-4">Our Mission</h3>
                <p className="text-brand-borderGray font-body leading-relaxed">
                  To deliver zero-defect hydraulic components and systems that perform to their rated specification throughout their design service life — consistently, verifiably, and without exception. We achieve this through physics-based engineering, traceable raw materials, and 100% hydrostatic pressure testing.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-brand-surfaceGray border border-slate-200 rounded-sm p-8">
              <div className="w-12 h-12 rounded-full bg-honeywell-navy flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-display font-bold text-honeywell-navy mb-4">Our Vision</h3>
              <p className="text-brand-darkSlate font-body leading-relaxed">
                To be recognised as India&apos;s most trusted hydraulic equipment manufacturer — the first call for OEMs, SPM builders, and maintenance engineers who need reliable, correctly specified, and fully documented hydraulic solutions for critical industrial applications.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 6: CORE VALUES
          ═══════════════════════════════════════════════════════════════════ */}
      <Section bg="gray">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" variant="section" className="mb-4 text-honeywell-red">
              Core Values
            </Heading>
            <p className="text-lg text-brand-steelGray font-body max-w-2xl mx-auto">
              The principles that govern every engineering decision, every manufacturing process, and every client interaction at Honeywell Hydraulics.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
            {CORE_VALUES.map((value) => (
              <li
                key={value.title}
                className="bg-white border border-slate-200 rounded-sm p-6 hover:border-honeywell-red transition-colors"
              >
                <IconBox icon={value.icon} variant="primary" className="mb-4" />
                <h3 className="text-lg font-display font-bold text-honeywell-navy mb-2">{value.title}</h3>
                <p className="text-sm text-brand-steelGray font-body leading-relaxed">{value.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 7: WHY CHOOSE HONEYWELL HYDRAULICS
          ═══════════════════════════════════════════════════════════════════ */}
      <Section bg="white">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" variant="section" className="mb-4 text-honeywell-red">
              Why Choose Honeywell Hydraulics
            </Heading>
            <p className="text-lg text-brand-steelGray font-body max-w-2xl mx-auto">
              Six reasons why OEMs, SPM builders, and maintenance engineers across India trust us as their hydraulic manufacturing partner.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            {WHY_CHOOSE.map((item) => (
              <li
                key={item.title}
                className="bg-brand-surfaceGray border border-slate-200 rounded-sm p-6 hover:border-honeywell-red hover:shadow-md transition-all duration-200"
              >
                <div className="w-14 h-14 rounded-full bg-honeywell-navy flex items-center justify-center mb-5 text-white">
                  {item.icon}
                </div>
                <h3 className="text-lg font-display font-bold text-honeywell-navy mb-2">{item.title}</h3>
                <p className="text-sm text-brand-steelGray font-body leading-relaxed">{item.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 8: INDUSTRIES WE SERVE
          ═══════════════════════════════════════════════════════════════════ */}
      <Section bg="gray">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" variant="section" className="mb-4 text-honeywell-red">
              Industries We Serve
            </Heading>
            <p className="text-lg text-brand-steelGray font-body max-w-2xl mx-auto">
              We have engineered robust hydraulic solutions for severe-duty environments across India.
            </p>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4" role="list">
            {INDUSTRIES.map((industry) => (
              <li key={industry.name}>
                <Link
                  href={industry.href}
                  className="block bg-white border border-slate-200 rounded-sm p-5 text-center hover:border-honeywell-red hover:shadow-md transition-all duration-200 group"
                >
                  <p className="font-display font-bold text-honeywell-navy group-hover:text-honeywell-red transition-colors">{industry.name}</p>
                  <ChevronRight className="w-4 h-4 text-[#94A3B8] mx-auto mt-2 group-hover:text-honeywell-red transition-colors" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 9: OUR PRODUCTS
          ═══════════════════════════════════════════════════════════════════ */}
      <Section bg="white">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" variant="section" className="mb-4 text-honeywell-red">
              Our Products
            </Heading>
            <p className="text-lg text-brand-steelGray font-body max-w-2xl mx-auto">
              Precision-engineered hydraulic equipment designed and manufactured at our Ahmedabad facility.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="block bg-brand-surfaceGray border border-slate-200 rounded-sm p-6 hover:border-honeywell-red hover:shadow-md transition-all duration-200 group"
              >
                <h3 className="text-lg font-display font-bold text-honeywell-navy mb-3 group-hover:text-honeywell-red transition-colors">{product.name}</h3>
                <p className="text-sm text-brand-steelGray font-body leading-relaxed mb-4">{product.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-honeywell-red font-body">
                  View Products <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 10: MANUFACTURING CAPABILITIES
          ═══════════════════════════════════════════════════════════════════ */}
      <Section bg="gray">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading as="h2" variant="section" className="mb-6 text-honeywell-red">
                Manufacturing Capabilities
              </Heading>
              <p className="text-brand-darkSlate font-body leading-relaxed mb-6">
                Our Ahmedabad manufacturing facility houses advanced CNC machining centres, precision testing equipment, and dedicated assembly areas — enabling end-to-end hydraulic component production under one roof.
              </p>
              <ul className="space-y-3" role="list">
                {CAPABILITIES.map((cap) => (
                  <li key={cap} className="flex items-start gap-3 text-sm text-brand-darkSlate font-body">
                    <CheckCircle2 className="w-4 h-4 text-honeywell-red shrink-0 mt-0.5" aria-hidden="true" />
                    {cap}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button href="/contact-us" variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Contact Us
                </Button>
                <Button href="/manufacturing-facility" variant="outline" size="md">
                  Tour Our Facility
                </Button>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-sm p-8">
              {/* IMAGE REQUIREMENT: /images/about/manufacturing-capabilities.webp
                  Alt: CNC machining centre at Honeywell Hydraulics manufacturing facility Ahmedabad
                  Priority: Medium */}
              <div className="aspect-[4/3] bg-brand-surfaceGray rounded-sm flex items-center justify-center">
                <div className="text-center px-6">
                  <Cog className="w-12 h-12 text-[#94A3B8] mx-auto mb-3" aria-hidden="true" />
                  <p className="text-sm font-semibold text-brand-darkSlate font-body">CNC Machining Centre</p>
                  <p className="text-xs text-[#94A3B8] font-body">Precision hydraulic component manufacturing</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 11: TEAM / EXPERTISE
          ═══════════════════════════════════════════════════════════════════ */}
      <Section bg="white">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" variant="section" className="mb-4 text-honeywell-red">
              Our Engineering Team
            </Heading>
            <p className="text-lg text-brand-steelGray font-body max-w-2xl mx-auto">
              Behind every hydraulic solution we design is a team of fluid power engineers who have dedicated their careers to understanding the physics of hydraulic systems.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-surfaceGray border border-slate-200 rounded-sm p-6">
              <Users className="w-8 h-8 text-honeywell-navy mb-4" aria-hidden="true" />
              <h3 className="text-lg font-display font-bold text-honeywell-navy mb-2">Qualified Engineers</h3>
              <p className="text-sm text-brand-steelGray font-body leading-relaxed">
                Our engineering team holds B.Tech qualifications in Mechanical Engineering with specialisation in fluid power systems and hydraulic design.
              </p>
            </div>
            <div className="bg-brand-surfaceGray border border-slate-200 rounded-sm p-6">
              <Wrench className="w-8 h-8 text-honeywell-navy mb-4" aria-hidden="true" />
              <h3 className="text-lg font-display font-bold text-honeywell-navy mb-2">Skilled Machinists</h3>
              <p className="text-sm text-brand-steelGray font-body leading-relaxed">
                Experienced CNC machine operators handle precision turning, boring, honing, and welding operations with documented competency certifications.
              </p>
            </div>
            <div className="bg-brand-surfaceGray border border-slate-200 rounded-sm p-6">
              <FlaskConical className="w-8 h-8 text-honeywell-navy mb-4" aria-hidden="true" />
              <h3 className="text-lg font-display font-bold text-honeywell-navy mb-2">Quality Inspectors</h3>
              <p className="text-sm text-brand-steelGray font-body leading-relaxed">
                Dedicated quality team performs incoming material inspection, in-process checks, and final hydrostatic pressure testing on every component.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 12: QUALITY COMMITMENT
          ═══════════════════════════════════════════════════════════════════ */}
      <Section bg="gray">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-honeywell-navy text-white rounded-sm p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-honeywell-red opacity-5 -skew-x-12 translate-x-1/4" aria-hidden="true" />
              <div className="relative z-10">
                <h3 className="text-2xl font-display font-bold text-white mb-6">The Five Pillars of Quality</h3>
                <ul className="space-y-4">
                  {[
                    'Physics-based design — not catalogue copying',
                    'Full material traceability — EN 10204 Type 3.1',
                    'In-process dimensional inspection at every stage',
                    '100% hydrostatic pressure testing — no exceptions',
                    'Continuous improvement through monthly reviews',
                  ].map((pillar, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-brand-borderGray font-body">
                      <span className="w-6 h-6 rounded-full bg-honeywell-red text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {pillar}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button href="/quality" variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                    View Quality Policy
                  </Button>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Heading as="h2" variant="section" className="mb-6 text-honeywell-red">
                Quality Commitment
              </Heading>
              <p className="text-brand-darkSlate font-body leading-relaxed mb-4">
                At Honeywell Hydraulics, quality is not a department — it is the engineering discipline that governs every decision. From how we calculate a cylinder wall thickness to how we test a component before dispatch.
              </p>
              <p className="text-brand-darkSlate font-body leading-relaxed mb-4">
                Our quality policy is a written commitment that every component we manufacture will perform to its rated specification throughout its design service life, backed by traceable documentation and meaningful warranty terms.
              </p>
              <p className="text-brand-darkSlate font-body leading-relaxed">
                We do not skip the hydrostatic pressure test because the client is in a hurry. We do not use oversized cylinders to compensate for undertested wall thickness calculations. These shortcuts generate callback warranty costs, field failures, and genuine safety risks.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 13: STATISTICS
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-honeywell-navy py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-display font-extrabold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-[#94A3B8] font-body uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 14: CLIENT TRUST
          ═══════════════════════════════════════════════════════════════════ */}
      <Section bg="white">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" variant="section" className="mb-4 text-honeywell-red">
              Trusted by Industry Leaders
            </Heading>
            <p className="text-lg text-brand-steelGray font-body max-w-2xl mx-auto">
              OEMs, SPM builders, and maintenance engineers across Gujarat and India trust Honeywell Hydraulics for reliable, correctly specified hydraulic equipment.
            </p>
          </div>
          {/* Premium Logo Marquee */}
          <div className="relative flex w-full max-w-7xl mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] group pt-4 mb-12">

            {/* First set of logos */}
            <div className="flex shrink-0 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
              {clientLogos.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex items-center justify-center shrink-0 pr-6 md:pr-10"
                >
                  <div className="relative flex items-center justify-center w-[160px] h-[80px] sm:w-[200px] sm:h-[100px] md:w-[240px] md:h-[120px] bg-white rounded-xl border border-slate-200 shadow-sm transition-transform duration-300 hover:shadow-md hover:-translate-y-1 p-2 sm:p-3">
                    <Image
                      src={client.imageSrc}
                      alt="" /* Decorative in marquee context */
                      fill
                      className="object-contain p-2 transition-all duration-300"
                      sizes="(max-width: 768px) 200px, 240px"
                      quality={100}
                      aria-hidden="true"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Second set of logos for seamless loop */}
            <div className="flex shrink-0 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none" aria-hidden="true">
              {clientLogos.map((client, index) => (
                <div
                  key={`dup-${client.name}-${index}`}
                  className="flex items-center justify-center shrink-0 pr-6 md:pr-10"
                >
                  <div className="relative flex items-center justify-center w-[160px] h-[80px] sm:w-[200px] sm:h-[100px] md:w-[240px] md:h-[120px] bg-white rounded-xl border border-slate-200 shadow-sm transition-transform duration-300 hover:shadow-md hover:-translate-y-1 p-2 sm:p-3">
                    <Image
                      src={client.imageSrc}
                      alt=""
                      fill
                      className="object-contain p-2 transition-all duration-300"
                      sizes="(max-width: 768px) 200px, 240px"
                      quality={100}
                      aria-hidden="true"
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
          {/* Testimonial */}
          <div className="max-w-2xl mx-auto text-center bg-brand-surfaceGray border border-slate-200 rounded-sm p-8">
            <blockquote className="text-brand-darkSlate font-body text-lg leading-relaxed italic mb-4">
              &ldquo;Honeywell Hydraulics has been our trusted supplier for hydraulic cylinders for over 3 years. Their engineering support, consistent quality, and on-time delivery make them an invaluable manufacturing partner.&rdquo;
            </blockquote>
            <cite className="text-sm text-brand-steelGray font-body not-italic">
              — Procurement Manager, Industrial OEM Client
            </cite>
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 15: LEAD GENERATION CTA
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-honeywell-navy py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-honeywell-red opacity-5 -skew-x-12 translate-x-1/4" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-honeywell-red opacity-[0.03] skew-x-12 -translate-x-1/4" aria-hidden="true" />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-honeywell-red/40 to-transparent" aria-hidden="true" />
        <Container className="relative z-10 text-center">
          <Heading variant="section" className="text-white mb-4">
            Need a Custom Hydraulic Solution?
          </Heading>
          <p className="text-brand-borderGray font-body max-w-2xl mx-auto mb-4 text-lg leading-relaxed">
            We design and manufacture precision hydraulic equipment tailored to your exact specifications.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm font-body">Hydraulic Cylinders</span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm font-body">Hydraulic Power Packs</span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm font-body">Hydraulic Accessories</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/contact-us"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              Contact Us
            </Button>
            <a
              href="tel:+91-9924343873"
              className="inline-flex items-center gap-2 bg-transparent border border-white text-white hover:bg-white hover:text-honeywell-navy font-semibold font-body text-sm px-6 py-3 rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Talk to an Engineer
            </a>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FAQ SECTION
          ═══════════════════════════════════════════════════════════════════ */}
      <Section bg="gray">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Heading as="h2" variant="section" className="mb-4 text-center text-honeywell-red">
              Frequently Asked Questions
            </Heading>
            <p className="text-brand-steelGray font-body text-center mb-10">
              Common questions about Honeywell Hydraulics, our capabilities, and how to work with us.
            </p>
            <FAQAccordion faqs={ABOUT_FAQS} />
          </div>
        </Container>
      </Section>
    </>
  );
}
