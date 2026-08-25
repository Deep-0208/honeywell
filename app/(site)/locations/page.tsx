import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { CTA } from '@/components/ui/CTA';
import { SiteFAQSection } from '@/components/faq/SiteFAQSection';
import JsonLd from '@/components/seo/JsonLd';
import { COMPANY_INFO } from '@/lib/constants';
import {
  ArrowRight,
  MapPin,
  Factory,
  Truck,
  Shield,
  ChevronRight,
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// SEO Metadata
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = buildMetadata({
  title: 'Service Areas & Industrial Hubs | Honeywell Hydraulics',
  description:
    'Custom hydraulic cylinders & power packs supplied across Gujarat, Maharashtra, and major industrial hubs in India. Direct from our Ahmedabad facility.',
  canonical: '/locations/',
});

// ─────────────────────────────────────────────────────────────────────────────
// Structured Data
// ─────────────────────────────────────────────────────────────────────────────
const siteUrl = COMPANY_INFO.websiteUrl;

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
    { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${siteUrl}/locations/` },
  ],
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Service Areas — Honeywell Hydraulics',
  url: `${siteUrl}/locations/`,
  description:
    'National service area directory for Honeywell Hydraulics — hydraulic cylinder and power pack manufacturer serving industrial customers across India from Ahmedabad, Gujarat.',
};

// ─────────────────────────────────────────────────────────────────────────────
// Location Registry — Single source for the hub page
// ─────────────────────────────────────────────────────────────────────────────

interface LocationLink {
  label: string;
  href: string;
  description?: string;
}

interface RegionGroup {
  region: string;
  hub?: LocationLink;
  cities: LocationLink[];
}

const GUJARAT_CITIES: LocationLink[] = [
  { label: 'Ahmedabad', href: '/locations/ahmedabad/', description: 'Manufacturing HQ — Kathwada GIDC' },
  { label: 'Surat', href: '/locations/surat/', description: 'Textiles, diamond processing, chemicals' },
  { label: 'Vadodara', href: '/locations/vadodara/', description: 'Petrochemicals, engineering, pharma' },
  { label: 'Rajkot', href: '/locations/rajkot/', description: 'Auto components, forging, machine tools' },
  { label: 'Bhavnagar', href: '/locations/bhavnagar/', description: 'Ship breaking, steel re-rolling' },
  { label: 'Jamnagar', href: '/locations/jamnagar/', description: 'Brass manufacturing, refinery support' },
  { label: 'Kutch', href: '/locations/kutch/', description: 'Port operations, salt, heavy industry' },
  { label: 'Gandhinagar', href: '/locations/gandhinagar/', description: 'Electronics, IT, government projects' },
  { label: 'Morbi', href: '/locations/morbi/', description: 'Ceramic tile pressing, industrial automation' },
  { label: 'Vapi', href: '/locations/vapi/', description: 'Chemicals, pharmaceuticals, plastics' },
  { label: 'Ankleshwar', href: '/locations/ankleshwar/', description: 'Chemical corridor, process plants' },
  { label: 'Halol', href: '/locations/halol/', description: 'Automotive OEM, stamping, Tier-1 supply' },
];

const GUJARAT_SPOKES: LocationLink[] = [
  { label: 'Injection Moulding Cylinders', href: '/locations/gujarat/injection-moulding-cylinders/', description: 'Core pull and clamping cylinders for injection moulding machines' },
  { label: 'Ship Breaking Cylinders', href: '/locations/gujarat/ship-breaking-cylinders/', description: 'Heavy-duty cylinders for Alang ship dismantling yards' },
  { label: 'Textile Machinery Cylinders', href: '/locations/gujarat/textile-machinery-cylinders/', description: 'Precision cylinders for textile processing equipment' },
];

const NATIONAL_REGIONS: RegionGroup[] = [
  {
    region: 'Maharashtra',
    hub: { label: 'Maharashtra', href: '/locations/maharashtra/', description: 'Pune, Mumbai, Nashik — automotive, engineering, EPC' },
    cities: [],
  },
  {
    region: 'Rajasthan',
    hub: { label: 'Rajasthan', href: '/locations/rajasthan/', description: 'Bhiwadi, Jaipur, Udaipur — RIICO industrial areas' },
    cities: [],
  },
  {
    region: 'Madhya Pradesh',
    hub: { label: 'Madhya Pradesh', href: '/locations/madhya-pradesh/', description: 'Indore, Pithampur, Bhopal — automotive and engineering' },
    cities: [],
  },
  {
    region: 'Karnataka',
    hub: { label: 'Karnataka', href: '/locations/karnataka/', description: 'Bengaluru, Hubli, Belgaum — engineering and automation' },
    cities: [],
  },
  {
    region: 'Tamil Nadu',
    hub: { label: 'Tamil Nadu', href: '/locations/tamil-nadu/', description: 'Chennai, Coimbatore — automotive and textile machinery' },
    cities: [],
  },
  {
    region: 'West Bengal',
    hub: { label: 'West Bengal', href: '/locations/west-bengal/', description: 'Kolkata, Durgapur — steel, heavy engineering, foundries' },
    cities: [],
  },
];

const LOCATION_FAQS = [
  {
    question: 'Where is Honeywell Hydraulics located?',
    answer:
      'Our manufacturing facility is located at B-18, Suryam Plaza Estate, Near Nilkanth Estate, Road no. 15, Kathwada GIDC, Ahmedabad, Gujarat 382430. All hydraulic cylinders, power packs, and manifold blocks are designed, machined, assembled, and pressure-tested at this facility.',
  },
  {
    question: 'Which areas does Honeywell Hydraulics supply hydraulic cylinders to?',
    answer:
      'We supply factory-direct to industrial customers across Gujarat (Ahmedabad, Surat, Vadodara, Rajkot, and 8+ other cities), Maharashtra, Rajasthan, Madhya Pradesh, Karnataka, Tamil Nadu, West Bengal, and other industrial states. Same-day delivery is available within the Ahmedabad region, with 1-3 day delivery across Gujarat and 2-5 days pan-India.',
  },
  {
    question: 'Can Honeywell Hydraulics deliver hydraulic equipment outside Gujarat?',
    answer:
      'Yes. While our manufacturing facility is in Ahmedabad, we supply hydraulic cylinders, power packs, and manifold blocks to industrial customers across India. Standard transit times are 1-2 days within Gujarat, 2-3 days to neighbouring states like Maharashtra and Rajasthan, and 3-5 days for pan-India delivery.',
  },
  {
    question: 'Do you offer same-day delivery for hydraulic cylinders?',
    answer:
      'Same-day delivery is available for customers within the Ahmedabad GIDC industrial zone and surrounding areas (Odhav, Vatva, Naroda, Changodar, Sanand). For breakdown emergencies, we offer priority dispatch to locations across Gujarat.',
  },
  {
    question: 'How do I get a quote for hydraulic cylinders in my area?',
    answer:
      'Visit our Request Quote page at /request-quote or call +91 9924343873. Provide your bore size, stroke length, operating pressure, and mounting configuration. Our engineering team reviews every submission and prepares a technical proposal with factory-direct pricing.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────────────────────
export default function LocationsHubPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={webPageSchema} />

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 1: HERO
          ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="bg-white pt-6 pb-16 md:pt-8 md:pb-24 relative overflow-hidden border-b border-slate-200"
        aria-labelledby="locations-hero-heading"
      >
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_10%_0%,#000_70%,transparent_100%)] pointer-events-none"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <nav aria-label="Breadcrumb" className="text-sm md:text-base font-body text-slate-500 mb-6">
            <ol className="flex items-center gap-2 flex-wrap">
              <li>
                <Link href="/" className="hover:text-honeywell-red transition-colors duration-200 ease-out">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-400">&rsaquo;</li>
              <li className="text-honeywell-red font-semibold" aria-current="page">
                Locations
              </li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            <Heading
              variant="section"
              as="h1"
              id="locations-hero-heading"
              className="font-display font-extrabold tracking-tight text-honeywell-navy leading-[1.12] mb-6"
            >
              Hydraulic Cylinder Manufacturer —{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-honeywell-navy to-honeywell-red">
                Serving Industrial India
              </span>
            </Heading>

            <p className="text-brand-steelGray text-lg md:text-xl font-body leading-relaxed mb-8 text-justify">
              Honeywell Hydraulics manufactures custom hydraulic cylinders, power packs, and manifold
              blocks at our Kathwada GIDC facility in Ahmedabad. We supply factory-direct to OEMs,
              machine builders, and industrial plants across Gujarat and pan-India — with same-day
              delivery locally and 2-5 day delivery nationwide.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                href="/request-quote/#quote-form"
                variant="primary"
                size="lg"
                className="font-bold tracking-wide shadow-md"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Get a Quote
              </Button>
              <Button href="/manufacturing-facility/" variant="outline" size="lg">
                Visit Our Factory
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 2: KEY FACTS STRIP
          ═══════════════════════════════════════════════════════════════════ */}
      <Section bg="gray">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Factory, stat: 'Ahmedabad', label: 'Manufacturing Base' },
              { icon: MapPin, stat: '12+ Cities', label: 'Gujarat Coverage' },
              { icon: Truck, stat: 'Same Day', label: 'Local Delivery' },
              { icon: Shield, stat: '100%', label: 'Pressure Tested' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="w-12 h-12 rounded-full bg-honeywell-navy/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-honeywell-navy" />
                </div>
                <p className="text-xl md:text-2xl font-display font-bold text-honeywell-navy">
                  {item.stat}
                </p>
                <p className="text-xs text-brand-steelGray font-body uppercase tracking-wider mt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 3: GUJARAT — PRIMARY SERVICE REGION
          ═══════════════════════════════════════════════════════════════════ */}
      <Section bg="white" aria-labelledby="gujarat-heading">
        <Container>
          <div className="flex flex-col items-center text-center mb-10">
            <Heading
              as="h2"
              variant="section"
              underline="center"
              id="gujarat-heading"
              className="text-honeywell-navy mb-3"
            >
              Gujarat — Our Manufacturing Hub
            </Heading>
            <p className="text-lg text-brand-steelGray font-body max-w-3xl text-center">
              Gujarat is our primary manufacturing and supply region. Our Kathwada GIDC facility in
              Ahmedabad provides same-day to next-day delivery across all major GIDC industrial
              estates in the state.
            </p>
          </div>

          {/* Gujarat hub link */}
          <div className="mb-8">
            <Link
              href="/locations/gujarat/"
              className="group flex items-center justify-between p-5 bg-gradient-to-r from-honeywell-navy to-brand-deepNavy rounded-sm text-white hover:shadow-float transition-all duration-350 ease-premium"
            >
              <div>
                <p className="text-xs font-body uppercase tracking-wider text-white/60 mb-1">
                  State Hub
                </p>
                <p className="text-lg md:text-xl font-display font-bold">
                  Hydraulic Cylinder Manufacturer Gujarat
                </p>
                <p className="text-sm text-white/70 font-body mt-1">
                  12 cities · 3 industrial application spokes · Same-day to next-day delivery
                </p>
              </div>
              <ChevronRight className="w-6 h-6 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0 ml-4" />
            </Link>
          </div>

          {/* Gujarat cities directory */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-1">
            {GUJARAT_CITIES.map((city) => (
              <Link
                key={city.href}
                href={city.href}
                className="group flex items-start gap-3 py-3.5 border-b border-slate-100 hover:border-honeywell-red/30 transition-colors duration-200"
              >
                <MapPin className="w-4 h-4 text-honeywell-red mt-0.5 shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm font-display font-bold text-honeywell-navy group-hover:text-honeywell-red transition-colors">
                    {city.label}
                  </p>
                  {city.description && (
                    <p className="text-xs text-brand-steelGray font-body mt-0.5 truncate">
                      {city.description}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* Gujarat industrial spokes */}
          <div className="mt-10 pt-8 border-t border-slate-200">
            <h3 className="text-base font-display font-bold text-honeywell-navy uppercase tracking-wider mb-4">
              Industry-Specific Pages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {GUJARAT_SPOKES.map((spoke) => (
                <Link
                  key={spoke.href}
                  href={spoke.href}
                  className="group block p-4 bg-brand-surfaceGray border border-slate-200 rounded-sm hover:border-honeywell-red/30 hover:shadow-elevated transition-all duration-300"
                >
                  <p className="text-sm font-display font-bold text-honeywell-navy group-hover:text-honeywell-red transition-colors mb-1">
                    {spoke.label}
                  </p>
                  {spoke.description && (
                    <p className="text-xs text-brand-steelGray font-body leading-relaxed">
                      {spoke.description}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 4: NATIONAL COVERAGE
          ═══════════════════════════════════════════════════════════════════ */}
      <Section bg="gray" aria-labelledby="national-heading">
        <Container>
          <div className="flex flex-col items-center text-center mb-10">
            <Heading
              as="h2"
              variant="section"
              underline="center"
              id="national-heading"
              className="text-honeywell-navy mb-3"
            >
              National Coverage
            </Heading>
            <p className="text-lg text-brand-steelGray font-body max-w-3xl text-center">
              Beyond Gujarat, we supply hydraulic cylinders and power packs to major industrial hubs
              across India. Factory-direct pricing with 2-5 day standard delivery nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {NATIONAL_REGIONS.map((region) => (
              <Link
                key={region.region}
                href={region.hub?.href || '#'}
                className="group block bg-white border border-slate-200 rounded-sm p-6 transition-all duration-350 ease-premium hover:shadow-float hover:-translate-y-1 border-t-2 border-t-transparent hover:border-t-honeywell-red"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-honeywell-navy flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-honeywell-navy group-hover:text-honeywell-red transition-colors">
                      {region.region}
                    </h3>
                  </div>
                </div>
                {region.hub?.description && (
                  <p className="text-sm text-brand-steelGray font-body leading-relaxed mb-4 text-justify">
                    {region.hub.description}
                  </p>
                )}
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-honeywell-red font-body">
                  View Coverage{' '}
                  <ArrowRight
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 5: WHY HONEYWELL HYDRAULICS
          ═══════════════════════════════════════════════════════════════════ */}
      <Section bg="white" aria-labelledby="why-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading
                as="h2"
                variant="section"
                underline="left"
                id="why-heading"
                className="text-honeywell-navy mb-3"
              >
                Why Industrial Customers Choose Us
              </Heading>
              <p className="text-brand-darkSlate font-body leading-relaxed mb-6 text-justify">
                Honeywell Hydraulics is a direct manufacturer — not a trading company. Every hydraulic
                cylinder, power pack, and manifold block is designed, CNC-machined, assembled, and
                pressure-tested at our own facility in Ahmedabad. This gives our customers three
                advantages that middlemen cannot match.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    title: 'Factory-Direct Pricing',
                    body: 'No distributor markups. You deal directly with our manufacturing team for transparent, competitive pricing on custom hydraulic equipment.',
                  },
                  {
                    title: 'Engineering Support',
                    body: 'Qualified fluid power engineers review every project — calculating forces, flows, and pressures before manufacturing begins.',
                  },
                  {
                    title: '100% Pressure Tested',
                    body: 'Every component is hydrostatically tested at 1.5× rated working pressure before dispatch. Test certificates included with every shipment.',
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-honeywell-red mt-2 shrink-0" />
                    <div>
                      <p className="font-display font-bold text-honeywell-navy text-sm">
                        {item.title}
                      </p>
                      <p className="text-sm text-brand-steelGray font-body leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-honeywell-navy text-white rounded-sm p-8 relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-1/2 h-full bg-honeywell-red opacity-5 -skew-x-12 translate-x-1/4"
                aria-hidden="true"
              />
              <div className="relative z-10">
                <h3 className="text-xl font-display font-bold text-white mb-6">
                  Products Available Nationwide
                </h3>
                <ul className="space-y-3">
                  {[
                    { label: 'Hydraulic Cylinders', href: '/products/hydraulic-cylinders/' },
                    { label: 'Hydraulic Power Packs', href: '/products/hydraulic-power-packs/' },
                    { label: 'Manifold Blocks', href: '/products/manifold-blocks/' },
                  ].map((product) => (
                    <li key={product.href}>
                      <Link
                        href={product.href}
                        className="flex items-center gap-2 text-brand-borderGray hover:text-white font-body text-sm transition-colors group"
                      >
                        <ChevronRight className="w-4 h-4 text-honeywell-red group-hover:translate-x-1 transition-transform" />
                        {product.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-xs text-white/60 uppercase tracking-wider font-body mb-2">
                    Manufacturing Base
                  </p>
                  <p className="text-sm text-white/80 font-body">
                    Kathwada GIDC, Ahmedabad, Gujarat 382430
                  </p>
                  <p className="text-sm text-white/80 font-body mt-1">
                    +91 9924343873 · sales@honeywellhydraulics.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 6: FAQ
          ═══════════════════════════════════════════════════════════════════ */}
      <SiteFAQSection
        faqs={LOCATION_FAQS}
        title="Service Area Questions"
        description="Common questions about Honeywell Hydraulics' service coverage, delivery, and nationwide supply."
        bg="gray"
      />

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 7: CTA
          ═══════════════════════════════════════════════════════════════════ */}
      <CTA
        title="Get Factory-Direct Hydraulic Equipment"
        description="Custom hydraulic cylinders, power packs, and manifold blocks — manufactured in Ahmedabad, delivered across India. Request a quote with your specifications."
        primaryCtaText="Request Quote"
        primaryCtaHref="/request-quote/#quote-form"
        secondaryCtaText="Contact Us"
        secondaryCtaHref="/contact-us/"
      />
    </>
  );
}
