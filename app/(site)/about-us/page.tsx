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
import { clientLogos, homepageIndustries } from '@/data/homepage';
import { COMPANY_INFO } from '@/lib/constants';
import { IndustryCard } from '@/components/cards/IndustryCard';
import Image from 'next/image';
import { FaCogs, FaCar, FaIndustry, FaHardHat, FaBox, FaWrench, FaHammer } from 'react-icons/fa';
import {
  ArrowRight,
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
  Car,
  Tractor,
  Droplet,
} from 'lucide-react';

/* Icon mapping for industries */
const iconMap: Record<string, React.ReactNode> = {
  Cog: <FaCogs className="w-6 h-6" />,
  Car: <FaCar className="w-6 h-6" />,
  Factory: <FaIndustry className="w-6 h-6" />,
  Construction: <FaHardHat className="w-6 h-6" />,
  Package: <FaBox className="w-6 h-6" />,
  Wrench: <FaWrench className="w-6 h-6" />,
  Hammer: <FaHammer className="w-6 h-6" />,
};

// ─────────────────────────────────────────────────────────────────────────────
// SEO Metadata
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  ...buildMetadata({
    title: 'About Us | Hydraulic Manufacturer Ahmedabad',
    description: 'Learn about Honeywell Hydraulics — a leading hydraulic cylinder and power pack manufacturer in Ahmedabad, Gujarat. ISO-compliant manufacturing since 2018.',
    canonical: '/about-us',
  }),
  keywords: 'about honeywell hydraulics, hydraulic manufacturer ahmedabad, hydraulic cylinder manufacturer gujarat, about us hydraulic company, hydraulic power pack manufacturer',
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

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  url: `${COMPANY_INFO.websiteUrl}/about-us`,
  name: 'About Honeywell Hydraulics',
  description: 'Precision hydraulic cylinder and power pack manufacturer in Ahmedabad, Gujarat. Engineering-led manufacturing with 100% pressure testing.',
  mainEntity: {
    '@id': `${COMPANY_INFO.websiteUrl}/#organization`
  }
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: COMPANY_INFO.name,
  url: COMPANY_INFO.websiteUrl,
  logo: `${COMPANY_INFO.websiteUrl}/images/logos/long-size-logohydralics-logo.png`,
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



const PRODUCTS = [
  {
    name: 'Hydraulic Cylinders',
    href: '/products/hydraulic-cylinders/',
    desc: 'Custom industrial hydraulic cylinders — double acting, welded, telescopic, tie rod configurations. Bore sizes 25mm to 500mm+.',
    imageSrc: '/images/products/hero/hydraulic-cylinders-ahmedabad.webp'
  },
  {
    name: 'Hydraulic Power Packs',
    href: '/products/hydraulic-power-packs/',
    desc: 'Custom-engineered AC and DC power units for precise flow and pressure requirements. 3-phase industrial and DC mini units.',
    imageSrc: '/images/products/hero/hydraulic-power-pack.webp'
  },
  {
    name: 'Hydraulic Accessories',
    href: '#',
    desc: 'Complete range of hydraulic valves, fittings, hoses, and components to support your hydraulic system requirements.',
    imageSrc: '/images/products/hero/hydraulic-manifold-blocks-manufacturer.webp'
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
      <JsonLd data={aboutPageSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={faqSchema} />

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 1: HERO
          ═══════════════════════════════════════════════════════════════════ */}
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
              <li className="text-honeywell-red font-semibold" aria-current="page">About Us</li>
            </ol>
          </nav>

          <div className="w-full">
            <Heading variant="section" as="h1" className=" font-display font-extrabold tracking-tight text-honeywell-navy leading-[1.15] mb-6">
              Honeywell Hydraulics —<br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-honeywell-navy via-honeywell-navy to-honeywell-red"> Hydraulic System Manufacturer</span>{" "}Since 2018
            </Heading>
            
            <p className="text-brand-steelGray text-lg md:text-xl font-body leading-relaxed text-justify">
              Honeywell Hydraulics is a premier engineering firm specialising in the design, manufacturing, and supply of industrial hydraulic cylinders and power packs. Based in the Kathwada GIDC industrial zone in Ahmedabad, we deliver precision-engineered fluid power solutions that minimise downtime and maximise operational efficiency.
            </p>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 2: COMPANY OVERVIEW
          ═══════════════════════════════════════════════════════════════════ */}
      <Section bg="white" aria-labelledby="overview-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading as="h2" variant="section" underline="center" id="overview-heading" className="mb-3 text-honeywell-navy">
                Precision Engineering, Proven Performance
              </Heading>
              <p className="text-brand-darkSlate font-body leading-relaxed mb-4 text-justify">
                Founded in 2018 in Ahmedabad&apos;s industrial corridor, Honeywell Hydraulics has grown from a focused cylinder manufacturing operation into a comprehensive hydraulic equipment manufacturer serving 25+ industries across India.
              </p>
              <p className="text-brand-darkSlate font-body leading-relaxed mb-4 text-justify">
                We are not a trading company that relabels third-party products. Every hydraulic cylinder, power pack, and accessory that carries our name is designed, machined, assembled, pressure-tested, and certified within our own manufacturing facility. This end-to-end production control is the foundation of our quality consistency.
              </p>
              <p className="text-brand-darkSlate font-body leading-relaxed text-justify">
                Our engineering team applies rigorous fluid power physics to every project — calculating forces, flows, velocities, and thermal outputs before manufacturing a single component. This discipline is what separates engineered hydraulic solutions from catalogue-copied ones.
              </p>
            </div>
            <div className="aspect-[4/3] relative rounded-xl shadow-md overflow-hidden bg-brand-surfaceGray group">
              {/* IMAGE REQUIREMENT: /images/about/about-us-hero.webp
                  Alt: Honeywell Hydraulics manufacturing facility — precision hydraulic production in Ahmedabad
                  Priority: High */}
              <Image
                src="/images/facility/cnc-machining-center-hydraulic-cylinder.webp"
                alt="Honeywell Hydraulics manufacturing facility — precision hydraulic production in Ahmedabad"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-premium"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Floating Banner */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-md p-4 shadow-lg border border-slate-100 z-10">
                <p className="text-[10px] sm:text-xs font-bold text-honeywell-red uppercase tracking-widest mb-1 font-body text-justify">Manufacturing Headquarters</p>
                <p className="text-sm sm:text-base font-display font-bold text-honeywell-navy text-justify">Kathwada GIDC, Ahmedabad, Gujarat</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 3: OUR STORY
          ═══════════════════════════════════════════════════════════════════ */}
      <Section bg="gray" aria-labelledby="story-heading">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Heading as="h2" variant="section" underline="center" id="story-heading" className="mb-3 text-honeywell-navy">
              Our Story
            </Heading>
            <p className="text-brand-darkSlate font-body leading-relaxed mb-4 text-justify">
              Honeywell Hydraulics was founded by engineers who recognised a fundamental gap in India&apos;s hydraulic manufacturing market: too many suppliers were selling underspecified, catalogue-copied components that failed in severe-duty industrial environments.
            </p>
            <p className="text-brand-darkSlate font-body leading-relaxed mb-4 text-justify">
              We started with a clear engineering principle — <strong className="text-honeywell-navy">hydraulic systems are too important to be designed by guesswork</strong>. A hydraulic press with an incorrectly sized cylinder will cycle slowly, overheat, and destroy its seals within months. A goods lift with an incorrectly specified counterbalance valve is a danger to life.
            </p>
            <p className="text-brand-darkSlate font-body leading-relaxed text-justify">
              From our first cylinder produced in 2018, we have grown to manufacture hydraulic cylinders, power packs, and accessories for clients across Gujarat and pan-India — always maintaining our core commitment to physics-based engineering and zero-defect manufacturing.
            </p>
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTIONS 4-5: MISSION & VISION
          ═══════════════════════════════════════════════════════════════════ */}
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
                <Heading as="h3" variant="card" className="text-white mb-4">Our Mission</Heading>
                <p className="text-brand-borderGray font-body leading-relaxed text-justify">
                  To deliver zero-defect hydraulic components and systems that perform to their rated specification throughout their design service life — consistently, verifiably, and without exception. We achieve this through physics-based engineering, traceable raw materials, and 100% hydrostatic pressure testing.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-brand-surfaceGray border border-slate-200 rounded-sm p-8">
              <div className="w-12 h-12 rounded-full bg-honeywell-navy flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <Heading as="h3" variant="card" className="text-honeywell-navy mb-4">Our Vision</Heading>
              <p className="text-brand-darkSlate font-body leading-relaxed text-justify">
                To be recognised as India&apos;s most trusted hydraulic equipment manufacturer — the first call for OEMs, SPM builders, and maintenance engineers who need reliable, correctly specified, and fully documented hydraulic solutions for critical industrial applications.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 6: CORE VALUES
          ═══════════════════════════════════════════════════════════════════ */}
      <Section bg="gray" aria-labelledby="values-heading">
        <Container>
          <div className="text-center mb-12 flex flex-col items-center">
            <Heading as="h2" variant="section" underline="center" id="values-heading" className="mb-3 text-honeywell-navy">
              Core Values
            </Heading>
            <p className="text-lg text-brand-steelGray font-body max-w-2xl mx-auto text-justify">
              The principles that govern every engineering decision, every manufacturing process, and every client interaction at Honeywell Hydraulics.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
            {CORE_VALUES.map((value) => (
              <li
                key={value.title}
                className="bg-white border border-slate-200 rounded-sm p-6 transition-all duration-350 ease-premium hover:shadow-float hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red group"
              >
                <IconBox icon={value.icon} variant="primary" className="mb-4 group-hover:scale-110 transition-transform duration-300" />
                <Heading as="h3" variant="card" className="mb-2">{value.title}</Heading>
                <p className="text-sm text-brand-steelGray font-body leading-relaxed text-justify">{value.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 7: WHY CHOOSE HONEYWELL HYDRAULICS
          ═══════════════════════════════════════════════════════════════════ */}
      <Section bg="white" aria-labelledby="why-heading">
        <Container>
          <div className="text-center mb-12 flex flex-col items-center">
            <Heading as="h2" variant="section" underline="center" id="why-heading" className="mb-3 text-honeywell-navy">
              Why Choose Honeywell Hydraulics
            </Heading>
            <p className="text-lg text-brand-steelGray font-body max-w-2xl mx-auto text-justify">
              Six reasons why OEMs, SPM builders, and maintenance engineers across India trust us as their hydraulic manufacturing partner.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            {WHY_CHOOSE.map((item) => (
              <li
                key={item.title}
                className="bg-brand-surfaceGray border border-slate-200 rounded-sm p-6 transition-all duration-350 ease-premium hover:shadow-float hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red group"
              >
                <div className="w-14 h-14 rounded-full bg-honeywell-navy flex items-center justify-center mb-5 text-white group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <Heading as="h3" variant="card" className="mb-2">{item.title}</Heading>
                <p className="text-sm text-brand-steelGray font-body leading-relaxed text-justify">{item.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 8: INDUSTRIES WE SERVE
          ═══════════════════════════════════════════════════════════════════ */}
      <Section bg="gray" aria-labelledby="industries-heading">
        <Container>
          <div className="text-center mb-12 flex flex-col items-center">
            <Heading as="h2" variant="section" underline="center" id="industries-heading" className="mb-3 text-honeywell-navy">
              Industries We Serve
            </Heading>
            <p className="text-lg text-brand-steelGray font-body max-w-2xl mx-auto text-justify">
              We have engineered robust hydraulic solutions for severe-duty environments across India.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {homepageIndustries.map((industry) => (
              <div key={industry.industryName}>
                <IndustryCard
                  industryName={industry.industryName}
                  description={industry.description}
                  icon={iconMap[industry.iconName] || <FaCogs className="w-6 h-6" />}
                  href={industry.href}
                />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 9: OUR PRODUCTS
          ═══════════════════════════════════════════════════════════════════ */}
      <Section bg="white" aria-labelledby="products-heading">
        <Container>
          <div className="text-center mb-12 flex flex-col items-center">
            <Heading as="h2" variant="section" underline="center" id="products-heading" className="mb-3 text-honeywell-navy">
              Our Products
            </Heading>
            <p className="text-lg text-brand-steelGray font-body max-w-2xl mx-auto text-justify">
              Precision-engineered hydraulic equipment designed and manufactured at our Ahmedabad facility.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="block bg-brand-surfaceGray border border-slate-200 rounded-sm transition-all duration-350 ease-premium hover:shadow-float hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red group overflow-hidden"
              >
                <div className="aspect-[3/2] relative bg-slate-200 border-b border-slate-200">
                  <Image
                    src={product.imageSrc}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <Heading as="h3" variant="card" className="mb-3 group-hover:text-honeywell-red transition-colors">{product.name}</Heading>
                  <p className="text-sm text-brand-steelGray font-body leading-relaxed mb-4 text-justify">{product.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-honeywell-red font-body">
                    View Products <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 10: MANUFACTURING CAPABILITIES
          ═══════════════════════════════════════════════════════════════════ */}
      <Section bg="gray" aria-labelledby="capabilities-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading as="h2" variant="section" underline="center" id="capabilities-heading" className="mb-3 text-honeywell-navy">
                Manufacturing Capabilities
              </Heading>
              <p className="text-brand-darkSlate font-body leading-relaxed mb-6 text-justify">
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
              <div className="aspect-[4/3] relative rounded-sm overflow-hidden bg-brand-surfaceGray">
                <Image
                  src="/images/facility/cnc-machining-center-hydraulic-cylinder.webp"
                  alt="CNC machining centre at Honeywell Hydraulics manufacturing facility Ahmedabad"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 11: TEAM / EXPERTISE
          ═══════════════════════════════════════════════════════════════════ */}
      <Section bg="white" aria-labelledby="team-heading">
        <Container>
          <div className="text-center mb-12 flex flex-col items-center">
            <Heading as="h2" variant="section" underline="center" id="team-heading" className="mb-3 text-honeywell-navy">
              Our Engineering Team
            </Heading>
            <p className="text-lg text-brand-steelGray font-body max-w-2xl mx-auto text-justify">
              Behind every hydraulic solution we design is a team of fluid power engineers who have dedicated their careers to understanding the physics of hydraulic systems.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-surfaceGray border border-slate-200 rounded-sm p-6">
              <Users className="w-8 h-8 text-honeywell-navy mb-4" aria-hidden="true" />
              <Heading as="h3" variant="card" className="mb-2">Qualified Engineers</Heading>
              <p className="text-sm text-brand-steelGray font-body leading-relaxed text-justify">
                Our engineering team holds B.Tech qualifications in Mechanical Engineering with specialisation in fluid power systems and hydraulic design.
              </p>
            </div>
            <div className="bg-brand-surfaceGray border border-slate-200 rounded-sm p-6">
              <Wrench className="w-8 h-8 text-honeywell-navy mb-4" aria-hidden="true" />
              <Heading as="h3" variant="card" className="mb-2">Skilled Machinists</Heading>
              <p className="text-sm text-brand-steelGray font-body leading-relaxed text-justify">
                Experienced CNC machine operators handle precision turning, boring, honing, and welding operations with documented competency certifications.
              </p>
            </div>
            <div className="bg-brand-surfaceGray border border-slate-200 rounded-sm p-6">
              <FlaskConical className="w-8 h-8 text-honeywell-navy mb-4" aria-hidden="true" />
              <Heading as="h3" variant="card" className="mb-2">Quality Inspectors</Heading>
              <p className="text-sm text-brand-steelGray font-body leading-relaxed text-justify">
                Dedicated quality team performs incoming material inspection, in-process checks, and final hydrostatic pressure testing on every component.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 12: QUALITY COMMITMENT
          ═══════════════════════════════════════════════════════════════════ */}
      <Section bg="gray" aria-labelledby="quality-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-honeywell-navy text-white rounded-sm p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-honeywell-red opacity-5 -skew-x-12 translate-x-1/4" aria-hidden="true" />
              <div className="relative z-10">
                <Heading as="h3" variant="card" className="text-white mb-6">The Five Pillars of Quality</Heading>
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
              <Heading as="h2" variant="section" underline="center" id="quality-heading" className="mb-3 text-honeywell-navy">
                Quality Commitment
              </Heading>
              <p className="text-brand-darkSlate font-body leading-relaxed mb-4 text-justify">
                At Honeywell Hydraulics, quality is not a department — it is the engineering discipline that governs every decision. From how we calculate a cylinder wall thickness to how we test a component before dispatch.
              </p>
              <p className="text-brand-darkSlate font-body leading-relaxed mb-4 text-justify">
                Our quality policy is a written commitment that every component we manufacture will perform to its rated specification throughout its design service life, backed by traceable documentation and meaningful warranty terms.
              </p>
              <p className="text-brand-darkSlate font-body leading-relaxed text-justify">
                We do not skip the hydrostatic pressure test because the client is in a hurry. We do not use oversized cylinders to compensate for undertested wall thickness calculations. These shortcuts generate callback warranty costs, field failures, and genuine safety risks.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 13: STATISTICS
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 sm:py-20 border-t border-b border-slate-200 relative overflow-hidden">
        {/* Subtle grid background pattern */}
        <div
          className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-grid-pattern"
          aria-hidden="true"
        />
        <Container className="relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-7xl mx-auto">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="font-display text-[28px] sm:text-[36px] md:text-[40px] leading-tight font-bold text-honeywell-navy mb-1">
                  {stat.value}
                </div>
                <p className="text-[11px] sm:text-[12px] text-honeywell-red font-display font-bold uppercase tracking-[0.1em] text-justify">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 14: CLIENT TRUST
          ═══════════════════════════════════════════════════════════════════ */}
      <Section bg="white" aria-labelledby="trust-heading">
        <Container>
          <div className="text-center mb-12 flex flex-col items-center">
            <Heading as="h2" variant="section" underline="center" id="trust-heading" className="mb-3 text-honeywell-navy">
              Trusted by Industry Leaders
            </Heading>
            <p className="text-lg text-brand-steelGray font-body max-w-2xl mx-auto text-justify">
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

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 15: LEAD GENERATION CTA
          ═══════════════════════════════════════════════════════════════════ */}
      <CTA
        title="Need a Custom Hydraulic Solution?"
        description="We design and manufacture precision hydraulic cylinders, power packs, and accessories tailored to your exact specifications. Factory-direct pricing from Ahmedabad."
        primaryCtaText="Request a Quote"
        primaryCtaHref="/request-quote/"
        secondaryCtaText="Call +91 99243 43873"
        secondaryCtaHref="tel:+91-9924343873"
      />

      {/* ═══════════════════════════════════════════════════════════════════
          FAQ SECTION
          ═══════════════════════════════════════════════════════════════════ */}
      <SiteFAQSection faqs={ABOUT_FAQS} />
    </>
  );
}

