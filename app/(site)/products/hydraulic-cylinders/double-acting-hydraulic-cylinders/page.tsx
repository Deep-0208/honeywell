import { SiteLocationsSection } from '@/components/locations/SiteLocationsSection';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { COMPANY_INFO } from '@/lib/constants';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { IconBox } from '@/components/ui/IconBox';
import { CTA } from '@/components/ui/CTA';
import { SpecTable } from '@/components/tables/SpecTable';
import { SiteFAQSection } from '@/components/faq/SiteFAQSection';
import { Card, CardContent } from '@/components/ui/Card';
import { ProductCard } from '@/components/cards/ProductCard';
import {
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  Cog,
  Package,
} from 'lucide-react';

import { IndustryCard } from '@/components/cards/IndustryCard';
import {
  PRODUCT_FEATURES,
  TECHNICAL_SPECS,
  MOUNTING_TYPES,
  PRODUCT_APPLICATIONS,
  PRODUCT_INDUSTRIES,
  PRODUCT_FAQS,
  PRODUCT_ADVANTAGES,
} from '@/data/hydraulic-cylinders/double-acting-hydraulic-cylinders';

/* ═══════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════ */

const PAGE_TITLE =
  'Double Acting Hydraulic Cylinder Manufacturer | Honeywell';
const PAGE_DESCRIPTION =
  'Leading double acting hydraulic cylinder manufacturer in Ahmedabad. Bore 40–500mm, stroke up to 6000mm, 450 bar pressure. ISO certified. Get quote.';
const PAGE_URL = '/products/hydraulic-cylinders/double-acting-hydraulic-cylinders';
const PAGE_IMAGE = '/images/products/double-acting-hydraulic-cylinder.webp';

export const metadata: Metadata = {
  ...buildMetadata({
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    canonical: PAGE_URL,
    image: PAGE_IMAGE,
  }),
  title: {
    absolute: PAGE_TITLE,
  },
};

/* ═══════════════════════════════════════════════
   SCHEMA — @graph structure
   ═══════════════════════════════════════════════ */

function buildPageSchema() {
  const siteUrl = COMPANY_INFO.websiteUrl;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      /* 1. Product */
      {
        '@type': 'Product',
        '@id': `${siteUrl}${PAGE_URL}#product`,
        name: 'Double Acting Hydraulic Cylinder',
        description: PAGE_DESCRIPTION,
        image: [`${siteUrl}${PAGE_IMAGE}`],
        brand: {
          '@type': 'Brand',
          name: COMPANY_INFO.name,
        },
        manufacturer: {
          '@id': `${siteUrl}/#organization`,
        },
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'Organization',
            name: COMPANY_INFO.name,
          },
        },
        category: 'Hydraulic Cylinders',
        additionalProperty: [
          {
            '@type': 'PropertyValue',
            name: 'Bore Size Range',
            value: '40mm – 500mm',
          },
          {
            '@type': 'PropertyValue',
            name: 'Rod Diameter Range',
            value: '16mm – 350mm',
          },
          {
            '@type': 'PropertyValue',
            name: 'Stroke Length',
            value: 'Up to 6,000mm',
          },
          {
            '@type': 'PropertyValue',
            name: 'Working Pressure',
            value: 'Up to 450 Bar',
          },
          {
            '@type': 'PropertyValue',
            name: 'Honed Tube Material',
            value: 'ST 52.3 (Tolerance H8, H9)',
          },
          {
            '@type': 'PropertyValue',
            name: 'Piston Rod Material',
            value: 'EN 8 / EN 9 / EN 19 / EN 31 (f7)',
          },
        ],
      },
      /* 2. WebPage */
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}${PAGE_URL}#webpage`,
        url: `${siteUrl}${PAGE_URL}`,
        name: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}${PAGE_URL}#product` },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${siteUrl}${PAGE_IMAGE}`,
        },
        breadcrumb: { '@id': `${siteUrl}${PAGE_URL}#breadcrumb` },
        inLanguage: 'en-IN',
      },
      /* 3. BreadcrumbList */
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}${PAGE_URL}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Products',
            item: `${siteUrl}/products/`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Hydraulic Cylinders',
            item: `${siteUrl}/products/hydraulic-cylinders/`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Double Acting Hydraulic Cylinders',
            item: `${siteUrl}${PAGE_URL}`,
          },
        ],
      },
      /* 4. FAQPage */
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}${PAGE_URL}#faq`,
        mainEntity: PRODUCT_FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };
}

/* ═══════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════ */

export default function DoubleActingHydraulicCylindersPage() {
  const schema = buildPageSchema();

  return (
    <>
      <JsonLd data={schema} />

      {/* ─── 01 Hero Section ─── */}
      <HeroSection />

      {/* ─── 02 Product Overview ─── */}
      <ProductOverview />

      {/* ─── 03 Key Features ─── */}
      <KeyFeatures />

      {/* ─── 04 Technical Specifications ─── */}
      <TechnicalSpecifications />

      {/* ─── 05 Available Mounting Types ─── */}
      <MountingTypesSection />

      {/* ─── 06 Applications ─── */}
      <ApplicationsSection />

      {/* ─── 07 Industries Served ─── */}
      <IndustriesSection />

      {/* ─── 08 Manufacturing & Quality ─── */}
      <ManufacturingProcess />

      {/* ─── 09 Project Spotlight ─── */}
      <ProjectSpotlight />

      {/* ─── 10 Related Products ─── */}
      <RelatedProducts />

      {/* ─── 11 Local Service Areas ─── */}
      <SiteLocationsSection
        title="Double Acting Cylinder Manufacturer in Gujarat"
        description="As a premier double acting hydraulic cylinder manufacturer in Gujarat, we provide rapid manufacturing and dispatch services to industries across the state."
      />

      {/* ─── 12 FAQs ─── */}
      <FAQSection />

      {/* ─── 13 CTA Section ─── */}
      <CTA
        title="Need a Double Acting Hydraulic Cylinder?"
        description="From standard bore sizes to fully custom configurations — our engineering team manufactures to your exact specifications. Get a detailed quote within 24 hours."
        primaryCtaText="REQUEST A QUOTE"
        primaryCtaHref="/request-quote/"
        secondaryCtaText="Call Now"
        secondaryCtaHref="tel:+919924343873"
      />
    </>
  );
}

/* ═══════════════════════════════════════════════
   SECTION COMPONENTS
   ═══════════════════════════════════════════════ */

/* ─── 01 Hero ─── */
function HeroSection() {
  return (
    <div
      className="relative bg-white pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden border-b border-slate-200"
      id="hero"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-brand-surfaceGray" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-white to-transparent" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-honeywell-red/5 skew-x-[-12deg] translate-x-20 -z-10 hidden lg:block" />
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" aria-hidden="true" />

      <Container>
        {/* Breadcrumb */}
        

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="flex flex-col items-start z-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-brand-steelGray text-sm font-medium">Double Acting Hydraulic Cylinders</span>
            </div>

            <Heading variant="section" as="h1" className=" lg:text-[3.25rem] font-display font-bold text-honeywell-navy leading-[1.1] mb-6">
              Double Acting Hydraulic Cylinder Manufacturer
            </Heading>

            <p className="text-lg text-brand-darkSlate font-body mb-8 max-w-xl leading-relaxed  text-justify">
              Full bi-directional hydraulic force for precision industrial
              applications. Manufactured in-house at our Ahmedabad facility with
              bore sizes from 40mm to 500mm, stroke lengths up to 6,000mm, and
              working pressures up to 450 bar.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <Button
                href="/request-quote"
                size="lg"
                variant="primary"
                className="w-full sm:w-auto font-bold tracking-wide"
              >
                REQUEST A QUOTE{' '}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="/contact-us"
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white hover:bg-brand-surfaceGray"
              >
                CONTACT ENGINEERING{' '}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            

            
          </div>

          {/* Image Column */}
          <div className="relative w-full aspect-[4/3] lg:aspect-square bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden group">
            <div className="absolute inset-0 bg-brand-surfaceGray opacity-50 rounded-xl" />
            <Image src="/images/products/double-acting-hydraulic-cylinder.webp" alt="Double acting hydraulic cylinder manufacturer in Ahmedabad — Honeywell Hydraulics" fill priority fetchPriority="high" decoding="sync" quality={85} className="object-cover p-8 group-hover:scale-105 transition-transform duration-700 ease-out" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        </div>
      </Container>

      {/* Key Specs Strip */}
      <div className="absolute bottom-0 left-0 w-full bg-white/80 backdrop-blur-md border-t border-slate-200/50 hidden md:block shadow-[0_-4px_24px_-12px_rgba(0,0,0,0.05)] z-20">
        <Container>
          <div className="flex flex-wrap divide-x divide-slate-200/50 py-4">
            <div className="px-6 flex-1 text-center first:pl-0 last:pr-0 group cursor-default">
              <span className="block text-xs font-bold text-brand-steelGray uppercase tracking-wider mb-1 group-hover:text-honeywell-red transition-colors duration-300">
                Bore
              </span>
              <span className="block text-sm font-mono text-honeywell-navy font-semibold">
                40 – 500 mm
              </span>
            </div>
            <div className="px-6 flex-1 text-center group cursor-default">
              <span className="block text-xs font-bold text-brand-steelGray uppercase tracking-wider mb-1 group-hover:text-honeywell-red transition-colors duration-300">
                Stroke
              </span>
              <span className="block text-sm font-mono text-honeywell-navy font-semibold">
                Up to 6,000 mm
              </span>
            </div>
            <div className="px-6 flex-1 text-center group cursor-default">
              <span className="block text-xs font-bold text-brand-steelGray uppercase tracking-wider mb-1 group-hover:text-honeywell-red transition-colors duration-300">
                Pressure
              </span>
              <span className="block text-sm font-mono text-honeywell-navy font-semibold">
                Up to 450 Bar
              </span>
            </div>
            <div className="px-6 flex-1 text-center group cursor-default">
              <span className="block text-xs font-bold text-brand-steelGray uppercase tracking-wider mb-1 group-hover:text-honeywell-red transition-colors duration-300">
                Mounting
              </span>
              <span className="block text-sm font-mono text-honeywell-navy font-semibold">
                4 Options
              </span>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
/* ─── 02 Product Overview ─── */
function ProductOverview() {
  return (
    <Section bg="white" id="overview" aria-labelledby="overview-heading">
      <Container>
        <div className="max-w-4xl mx-auto">
          <Heading variant="section" as="h2" underline="center" id="overview-heading">
            What Is a Double Acting Hydraulic Cylinder?
          </Heading>
          <div className="space-y-5 text-brand-darkSlate font-body text-lg leading-relaxed">
            <p className=" text-justify">
              A <strong className="text-honeywell-navy">double acting hydraulic cylinder</strong> generates
              force in both the extend and retract strokes, making it the most
              versatile and widely used cylinder type in industrial applications.
              Unlike{' '}
              <Link
                href="/products/hydraulic-cylinders"
                className="text-honeywell-red font-semibold hover:underline"
              >
                single acting cylinders
              </Link>{' '}
              that rely on gravity or springs for return, double acting cylinders
              provide full hydraulic control in both directions — critical for
              press machines, injection moulding, goods lifts, and material
              handling systems.
            </p>
            <p className=" text-justify">
              The cylinder operates through two ports, typically located at the
              bottom and top of the barrel. Hydraulic fluid is pumped into the
              bottom port to extend the piston, and through the top port to push
              the piston back. This bi-directional fluid power provides faster,
              more predictable retraction compared to spring-return designs,
              making double acting cylinders the better choice for projects
              needing repeatable accuracy and controlled motion profiles.
            </p>
            <p className=" text-justify">
              At Honeywell Hydraulics, we manufacture double acting hydraulic
              cylinders in custom bore sizes from 40mm to 500mm and stroke
              lengths up to 6,000mm at our{' '}
              <Link
                href="/about-us"
                className="text-honeywell-red font-semibold hover:underline"
              >
                Ahmedabad manufacturing facility
              </Link>
              . Every cylinder is CNC-machined from solid ST 52.3 seamless
              steel, fitted with imported Hallite / Parker seals, and
              pressure-tested at 1.5× working pressure before dispatch.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ─── 03 Key Features ─── */
function KeyFeatures() {
  return (
    <Section bg="gray" id="key-features" aria-labelledby="key-features-heading">
      <Container>
        <div className="text-center flex flex-col items-center max-w-3xl mx-auto mb-16">
          <Heading variant="section" as="h2" underline="center" id="key-features-heading" className="text-honeywell-navy mb-4">
            Key Features
          </Heading>
          <p className="text-lg text-brand-steelGray font-body  text-justify">
            Every double acting cylinder we manufacture is engineered for
            durability, precision, and zero-leakage performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {PRODUCT_FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200 p-8 transition-all duration-350 ease-premium hover:shadow-float hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red group"
            >
              <div className="flex items-center gap-4 mb-5">
                <IconBox
                  icon={feature.icon}
                  variant="primary"
                  size="md"
                />
              </div>
              <Heading variant="subsection" as="h3" className="text-xl font-display font-bold text-honeywell-navy mb-3 group-hover:text-honeywell-red transition-colors">
                {feature.title}
              </Heading>
              <p className="text-brand-steelGray font-body text-sm leading-relaxed  text-justify">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── 04 Technical Specifications ─── */
function TechnicalSpecifications() {
  return (
    <Section bg="white" id="technical-specifications" aria-labelledby="technical-specifications-heading">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <Heading variant="section" as="h2" underline="center" id="technical-specifications-heading">
              Technical Specifications
            </Heading>
            <p className="text-lg text-brand-steelGray font-body mb-8  text-justify">
              Our double acting cylinders are manufactured with precision-grade
              materials and machined to exacting tolerances. Every specification
              listed below can be customized to your exact requirements.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                href="/request-quote"
                variant="primary"
                size="md"
                className="font-bold"
              >
                DISCUSS YOUR SPECS <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                href="/products/hydraulic-cylinders"
                variant="outline"
                size="md"
              >
                VIEW ALL CYLINDER TYPES
              </Button>
            </div>
          </div>
          <SpecTable
            title="Double Acting Cylinder Specifications"
            rows={TECHNICAL_SPECS}
          />
        </div>
      </Container>
    </Section>
  );
}

/* ─── 05 Mounting Types ─── */
function MountingTypesSection() {
  return (
    <Section bg="gray" id="mounting-types" aria-labelledby="mounting-types-heading">
      <Container>
        <div className="text-center flex flex-col items-center max-w-3xl mx-auto mb-16">
          <Heading variant="section" as="h2" underline="center" id="mounting-types-heading" className="text-honeywell-navy mb-4">
            Available Mounting Configurations
          </Heading>
          <p className="text-lg text-brand-steelGray font-body  text-justify">
            Choose from four standard mounting types, or request a custom
            mounting interface designed to integrate with your specific machine
            frame.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {MOUNTING_TYPES.map((mount, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200 p-8 transition-all duration-350 ease-premium hover:shadow-float hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red flex flex-col"
            >
              <Heading variant="subsection" as="h3" className="text-xl font-display font-bold text-honeywell-navy mb-3">
                {mount.title}
              </Heading>
              <p className="text-brand-steelGray font-body text-sm leading-relaxed mb-6 flex-grow  text-justify">
                {mount.description}
              </p>
              {mount.applications && mount.applications.length > 0 && (
                <ul className="space-y-2.5 border-t border-slate-200 pt-5 mt-auto">
                  {mount.applications.map((app, appIdx) => (
                    <li
                      key={appIdx}
                      className="flex items-start gap-2.5 text-sm text-brand-darkSlate font-body"
                    >
                      <CheckCircle2 className="w-4 h-4 text-honeywell-red mt-0.5 shrink-0" />
                      {app}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── 06 Applications ─── */
function ApplicationsSection() {
  return (
    <Section bg="white" id="applications" aria-labelledby="applications-heading">
      <Container>
        <div className="text-center flex flex-col items-center max-w-3xl mx-auto mb-16">
          <Heading variant="section" as="h2" underline="center" id="applications-heading" className="text-honeywell-navy mb-4">
            Applications
          </Heading>
          <p className="text-lg text-brand-steelGray font-body  text-justify">
            Double acting hydraulic cylinders are the preferred choice across a
            wide range of industrial applications where controlled
            bi-directional force is essential.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PRODUCT_APPLICATIONS.map((app, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200 p-6 transition-all duration-350 ease-premium hover:shadow-float hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red"
            >
              <Heading variant="subsection" as="h3" className="text-lg font-display font-bold text-honeywell-navy mb-2">
                {app.name}
              </Heading>
              <p className="text-sm text-brand-steelGray font-body leading-relaxed  text-justify">
                {app.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── 07 Industries Served ─── */
function IndustriesSection() {
  return (
    <Section bg="gray" id="industries" aria-labelledby="industries-heading">
      <Container>
        <div className="text-center flex flex-col items-center max-w-3xl mx-auto mb-12">
          <Heading variant="section" as="h2" underline="center" id="industries-heading" className="text-honeywell-navy mb-4">
            Industries We Serve
          </Heading>
          <p className="text-lg text-brand-steelGray font-body  text-justify">
            Our double acting hydraulic cylinders power critical machinery
            across India&apos;s most demanding industrial sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PRODUCT_INDUSTRIES.map((ind, idx) => (
            <div key={idx}>
              <IndustryCard
                industryName={ind.name}
                description={ind.description}
                icon={ind.icon}
                href={'/industries'}
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── 08 Manufacturing & Quality ─── */
function ManufacturingProcess() {
  return (
    <Section bg="white" id="manufacturing-process" aria-labelledby="manufacturing-process-heading">
      <Container>
        <div className="text-center flex flex-col items-center max-w-3xl mx-auto mb-16">
          <Heading variant="section" as="h2" underline="center" id="manufacturing-process-heading" className="text-honeywell-navy mb-4">
            Manufacturing &amp; Quality Process
          </Heading>
          <p className="text-lg text-brand-steelGray font-body  text-justify">
            Every double acting cylinder is manufactured in-house at our
            Ahmedabad GIDC facility. Zero outsourcing of critical machining
            operations ensures complete quality control.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card variant="interactive" className="h-full bg-brand-surfaceGray group">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-honeywell-red group-hover:scale-110 transition-transform duration-300">
                  <Cog className="w-6 h-6" />
                </div>
                <Heading variant="card" as="h3">
                  CNC Honing &amp; Machining
                </Heading>
              </div>
              <p className="text-sm text-brand-steelGray font-body leading-relaxed  text-justify">
                ST 52.3 seamless steel tubes are CNC-honed in-house to H8/H9
                tolerance. Piston rods are precision-ground and hard chrome plated
                from EN 8/EN 9/EN 19/EN 31 grade steel.
              </p>
            </CardContent>
          </Card>

          <Card variant="interactive" className="h-full bg-brand-surfaceGray group">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-honeywell-red group-hover:scale-110 transition-transform duration-300">
                  <Package className="w-6 h-6" />
                </div>
                <Heading variant="card" as="h3">
                  Imported Sealing Systems
                </Heading>
              </div>
              <p className="text-sm text-brand-steelGray font-body leading-relaxed  text-justify">
                We exclusively use Hallite and Parker imported seals. These
                premium sealing compounds ensure zero internal leakage and are
                rated for extended service life in harsh industrial environments.
              </p>
            </CardContent>
          </Card>

          <Card variant="interactive" className="h-full bg-brand-surfaceGray group">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-honeywell-red group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <Heading variant="card" as="h3">
                  Pressure Validation
                </Heading>
              </div>
              <p className="text-sm text-brand-steelGray font-body leading-relaxed  text-justify">
                100% of our double acting cylinders undergo rigorous hydrostatic
                testing at 1.5× working pressure. A detailed test certificate is
                provided with every cylinder dispatched.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose — Advantages List */}
        <div className="bg-honeywell-navy rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-1/2 h-full bg-honeywell-red opacity-5 -skew-x-12 translate-x-1/4"
            aria-hidden="true"
          />
          <div className="relative z-10">
            <Heading variant="section" as="h2" underline="center" className="text-white">
              Why Choose Honeywell for Double Acting Cylinders?
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {PRODUCT_ADVANTAGES.map((advantage, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-honeywell-red mt-0.5 shrink-0" />
                  <span className="text-sm text-brand-borderGray font-body leading-relaxed">
                    {advantage}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                href="/request-quote"
                variant="primary"
                size="lg"
                className="font-bold"
              >
                GET YOUR QUOTE <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <a
                href="https://wa.me/919924343873"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-medium hover:text-[#25D366] transition-colors font-body"
                aria-label="WhatsApp for cylinder inquiry"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ─── 09 Project Spotlight ─── */
function ProjectSpotlight() {
  return (
    <Section bg="gray" id="project-spotlight" aria-labelledby="project-spotlight-heading">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-6">
            <Badge variant="years">CASE STUDY</Badge>
            <span className="text-sm text-brand-steelGray font-body font-medium">
              Press Machine — Automotive Component Plant
            </span>
          </div>

          <Heading variant="section" as="h2" underline="center" id="project-spotlight-heading">
            Project Spotlight: 24 Double Acting Cylinders for a 500-Ton Press Line
          </Heading>
          <p className="text-brand-steelGray font-body mb-10 text-justify">
            Client: Automotive Component Manufacturer &mdash; GIDC, Ahmedabad
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            {/* Challenge */}
            <div className="bg-brand-surfaceGray p-8 border-b md:border-b-0 md:border-r border-slate-200">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-honeywell-red/10 flex items-center justify-center shrink-0">
                  <span className="text-honeywell-red font-bold text-sm">01</span>
                </div>
                <Heading variant="card" as="h3">The Challenge</Heading>
              </div>
              <p className="text-sm text-brand-steelGray font-body leading-relaxed  text-justify">
                The client&apos;s existing imported cylinders across their 500-ton press
                line were failing prematurely due to seal degradation. The OEM&apos;s
                lead time was 12+ weeks, and every day of press downtime was costing
                significant production revenue. They needed a local manufacturer
                capable of matching the original bore tolerances and delivering fast.
              </p>
            </div>

            {/* Engineering Process */}
            <div className="bg-white p-8 border-b md:border-b-0 md:border-r border-slate-200">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-honeywell-navy/10 flex items-center justify-center shrink-0">
                  <span className="text-honeywell-navy font-bold text-sm">02</span>
                </div>
                <Heading variant="card" as="h3">The Engineering</Heading>
              </div>
              <p className="text-sm text-brand-steelGray font-body leading-relaxed  text-justify">
                We measured the existing cylinders, matched bore, rod, and port
                dimensions exactly, and upgraded the sealing system from the
                OEM&apos;s outdated rubber O-rings to premium Parker polyurethane
                V-packing sets. The new cylinders were CNC-machined from ST 52.3
                tube with H8 bore tolerance and hard chrome plated EN 19 rods.
              </p>
            </div>

            {/* Result */}
            <div className="bg-honeywell-navy p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-sm">03</span>
                </div>
                <Heading variant="card" as="h3">The Outcome</Heading>
              </div>
              <p className="text-sm text-brand-borderGray font-body leading-relaxed mb-6  text-justify">
                All 24 double acting cylinders manufactured, tested at 1.5× working
                pressure, and delivered within{' '}
                <strong className="text-white">10 working days</strong>. The upgraded
                seal design extended service life by an estimated 40% over the original
                imported units. The client has since standardized on Honeywell for all
                press cylinder requirements.
              </p>
              <Button
                href="/request-quote"
                variant="primary"
                size="md"
                className="font-bold w-full text-center justify-center"
              >
                GET SIMILAR RESULTS <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ─── 10 Related Products ─── */
function RelatedProducts() {
  const products = [
    {
      title: 'Custom Hydraulic Cylinders',
      description:
        'When standard bore sizes and stroke lengths are insufficient — bespoke engineering for extreme applications, reverse engineering, and large bore actuators.',
      category: 'Custom Engineering',
      imageSrc: '/images/home/hero/custom-hydraulic-cylinder-manufacturer.webp',
      href: '/products/hydraulic-cylinders/custom-hydraulic-cylinders/',
      ctaText: 'View Custom Cylinders',
    },
    {
      title: 'Hydraulic Power Packs',
      description:
        'Complete fluid power generation units designed to drive your double acting cylinders. Available in 3-phase, single-phase, and DC configurations.',
      category: 'Power Generation',
      imageSrc: '/images/products/hydraulic-power-packs/hydraulic-power-pack-manufacturer.webp',
      href: '/products/hydraulic-power-packs/',
      ctaText: 'View Power Packs',
    },
    {
      title: 'Manifold Blocks',
      description:
        'CNC-machined hydraulic manifold blocks for precise valve integration and flow control in multi-cylinder systems.',
      category: 'Fluid Control',
      imageSrc: '/images/products/hero/hydraulic-manifold-blocks-manufacturer.webp',
      href: '/contact-us',
      ctaText: 'View Manifold Blocks',
    },
  ];

  return (
    <Section bg="white" id="related-products" aria-labelledby="related-products-heading">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <Heading variant="section" as="h2" underline="center" id="related-products-heading">
              Complete Your Hydraulic System
            </Heading>
            <p className="text-lg text-brand-steelGray font-body  text-justify">
              A double acting cylinder needs the right power source and flow
              control. Pair your cylinder with our power packs and manifold
              blocks for a complete hydraulic solution.
            </p>
          </div>
          <div className="mt-6 md:mt-0 shrink-0">
            <Link
              href="/products"
              className="text-honeywell-red font-bold hover:underline font-body"
            >
              Browse all products →
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <ProductCard
              key={idx}
              title={product.title}
              description={product.description}
              category={product.category}
              imageSrc={product.imageSrc}
              href={product.href}
              ctaText={product.ctaText}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}



/* ─── 12 FAQ Section ─── */
function FAQSection() {
  return <SiteFAQSection faqs={PRODUCT_FAQS} injectSchema={false} />;
}
