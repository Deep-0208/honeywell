import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Building2, 
  Wrench, 
  Cpu, 
  ArrowRight, 
  Phone, 
  Gauge
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { buildMetadata, buildBreadcrumbJsonLd } from '@/lib/seo';
import { COMPANY_INFO } from '@/lib/constants';
import JsonLd from '@/components/seo/JsonLd';
import Gallery from '@/components/gallery/Gallery';
import { GALLERY_ITEMS } from '@/data/gallery';

/* ── Page SEO Metadata ── */
export const metadata: Metadata = {
  ...buildMetadata({
    title: 'Hydraulic Manufacturing & Product Gallery | Honeywell Hydraulics',
    description: "Explore Honeywell Hydraulics' engineering gallery: custom hydraulic cylinders, power packs, manifold blocks, CNC machining, assembly bays, and 400 bar testing in Ahmedabad, Gujarat.",
    canonical: '/gallery/',
    image: '/images/company/honeywell-manufacturing-facility-kathwada.webp',
  }),
};

export default function GalleryPage() {
  /* ── Structured Data Schemas ── */
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { name: 'Home', item: '/' },
    { name: 'Gallery', item: '/gallery/' },
  ]);

  const collectionPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Hydraulic Manufacturing & Product Gallery — Honeywell Hydraulics',
    description: 'Visual showcase of heavy-duty hydraulic cylinders, industrial power units, precision manifold blocks, and factory infrastructure in Ahmedabad, Gujarat.',
    url: `${COMPANY_INFO.websiteUrl}/gallery/`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: GALLERY_ITEMS.length,
      itemListElement: GALLERY_ITEMS.slice(0, 15).map((item, index) => ({
        '@type': 'ImageObject',
        position: index + 1,
        name: item.title,
        description: item.description,
        contentUrl: `${COMPANY_INFO.websiteUrl}${item.src}`,
        thumbnailUrl: `${COMPANY_INFO.websiteUrl}${item.src}`,
        representativeOfPage: index === 0,
      })),
    },
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={collectionPageSchema} />

      <main className="min-h-screen bg-slate-50/50 pb-20">
        {/* ── Top Header & Gallery Hero Section ── */}
        <section className="bg-white border-b border-slate-200 pt-4 pb-10">
          <Container>
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="text-xs sm:text-sm font-body text-slate-500 mb-4">
              <ol className="flex items-center gap-2 flex-wrap">
                <li>
                  <Link href="/" className="hover:text-honeywell-red transition-colors duration-200 ease-out">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-slate-400">&rsaquo;</li>
                <li className="text-honeywell-red font-semibold" aria-current="page">
                  Gallery
                </li>
              </ol>
            </nav>

            {/* Title Block - Full Width */}
            <div className="w-full pb-6 border-b border-slate-100">
              <Heading variant="section" as="h1" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-honeywell-navy tracking-tight w-full">
                Hydraulic Manufacturing &amp; Product Gallery
              </Heading>
              
              <p className="text-xs sm:text-sm md:text-base text-brand-steelGray mt-2 leading-relaxed font-light w-full">
                Verified visual portfolio of our custom hydraulic cylinders, continuous-duty power packs, CNC-machined manifold blocks, and fabrication bays at Kathwada GIDC, Ahmedabad.
              </p>
            </div>

            {/* Interactive Gallery System */}
            <div className="pt-6">
              <Gallery items={GALLERY_ITEMS} />
            </div>
          </Container>
        </section>

        {/* ── Inside Honeywell Hydraulics Manufacturing (AEO / GEO Section) ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card p-6 sm:p-10 lg:p-12">
            <div className="max-w-3xl">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-honeywell-red">
                Engineering Depth &amp; Quality Standards
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-honeywell-navy mt-1 tracking-tight">
                Inside Honeywell Hydraulics Manufacturing
              </h2>
              <p className="mt-3 text-sm sm:text-base text-brand-darkSlate/90 leading-relaxed">
                At our specialized engineering facility in Kathwada GIDC, Ahmedabad, every hydraulic cylinder, power unit, and manifold block is manufactured under strict ISO 9001:2015 certified quality controls. Here is how our production processes ensure zero-leak reliability:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 pt-8 border-t border-slate-100">
              {/* Pillar 1 */}
              <div className="flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-honeywell-navy/5 text-honeywell-navy flex items-center justify-center mb-3">
                  <Cpu className="w-5 h-5 text-honeywell-navy" />
                </div>
                <h3 className="text-base font-bold text-honeywell-navy">
                  1. CNC Machining &amp; Turning
                </h3>
                <p className="text-xs sm:text-sm text-brand-steelGray mt-2 leading-relaxed">
                  Precision CNC turning lathes and vertical machining centers produce micro-finished piston rods (f7/f8 tolerances) and manifold cavities with surface finishes down to Ra 0.2 µm.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-honeywell-red/10 text-honeywell-red flex items-center justify-center mb-3">
                  <Wrench className="w-5 h-5 text-honeywell-red" />
                </div>
                <h3 className="text-base font-bold text-honeywell-navy">
                  2. Welding &amp; Fabrication
                </h3>
                <p className="text-xs sm:text-sm text-brand-steelGray mt-2 leading-relaxed">
                  Heavy-duty barrel construction using submerged arc and certified TIG welding on St52 / E355 grade cold-drawn seamless steel tubes and forged end mountings.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                  <Building2 className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-base font-bold text-honeywell-navy">
                  3. Cleanroom Seal Assembly
                </h3>
                <p className="text-xs sm:text-sm text-brand-steelGray mt-2 leading-relaxed">
                  Assembly in contamination-controlled bays utilizing premium Parker and Merkel polyurethane, PTFE, and NBR multi-lip seal kits designed for high-cycle industrial duty.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-green-50 text-green-700 flex items-center justify-center mb-3">
                  <Gauge className="w-5 h-5 text-green-700" />
                </div>
                <h3 className="text-base font-bold text-honeywell-navy">
                  4. 100% Hydrostatic Testing
                </h3>
                <p className="text-xs sm:text-sm text-brand-steelGray mt-2 leading-relaxed">
                  Every cylinder and power unit undergoes static and dynamic pressure proof testing up to 400 bar (5800 PSI) with digital transducers to guarantee zero internal bypass.
                </p>
              </div>
            </div>

            {/* Quick Links to Core Divisions */}
            <div className="mt-10 p-5 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-xs sm:text-sm text-brand-darkSlate">
                <span className="font-bold text-honeywell-navy">Explore Specific Product Divisions:</span>{' '}
                <span className="text-brand-steelGray">
                  Hydraulic Cylinders, Hydraulic Power Packs, and Custom Manifolds.
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/products/hydraulic-cylinders/"
                  className="text-xs font-semibold px-3 py-1.5 bg-white hover:bg-honeywell-navy hover:text-white text-honeywell-navy rounded-md border border-slate-200 transition-colors"
                >
                  Cylinders Line
                </Link>
                <Link
                  href="/products/hydraulic-power-packs/"
                  className="text-xs font-semibold px-3 py-1.5 bg-white hover:bg-honeywell-navy hover:text-white text-honeywell-navy rounded-md border border-slate-200 transition-colors"
                >
                  Power Packs Line
                </Link>
                <Link
                  href="/products/manifold-blocks/"
                  className="text-xs font-semibold px-3 py-1.5 bg-white hover:bg-honeywell-navy hover:text-white text-honeywell-navy rounded-md border border-slate-200 transition-colors"
                >
                  Manifold Blocks
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Conversion Section ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="bg-gradient-to-r from-honeywell-navy via-brand-technicalBlue to-honeywell-navy rounded-2xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-honeywell-red bg-white/10 px-3 py-1 rounded-md">
                Direct Engineering Collaboration
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-3 leading-tight">
                Need Custom Hydraulic Engineering or a Facility Visit?
              </h2>
              <p className="text-sm sm:text-base text-slate-200 mt-3 leading-relaxed">
                Our Ahmedabad engineering team manufactures custom cylinders (bore up to 500mm), power packs (up to 100 HP), and CNC logic blocks. Send us your technical drawings or schedule a walkthrough at our Kathwada GIDC plant.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/request-quote/#quote-form"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-honeywell-red hover:bg-red-700 text-white font-bold text-sm sm:text-base shadow-glow hover:shadow-lg transition-all transform hover:scale-[1.02]"
                >
                  <span>Request Engineering Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/15 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
