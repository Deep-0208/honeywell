import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { buildMetadata, buildBreadcrumbJsonLd, buildWebPageJsonLd } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import Link from 'next/link';
import { ShieldCheck, Truck, Wrench, FileCheck, Phone, Mail, MapPin, Scale } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: 'Terms & Conditions | Honeywell Hydraulics',
  description: 'Terms and Conditions for purchasing and servicing industrial hydraulic cylinders, power packs, and manifold blocks from Honeywell Hydraulics.',
  canonical: '/terms/',
});

const breadcrumbSchema = buildBreadcrumbJsonLd([
  { name: 'Home', item: '/' },
  { name: 'Terms & Conditions', item: '/terms/' }
]);

const webPageSchema = buildWebPageJsonLd(
  'Terms & Conditions | Honeywell Hydraulics',
  'Terms and Conditions for purchasing and servicing industrial hydraulic cylinders, power packs, and manifold blocks from Honeywell Hydraulics.',
  '/terms/'
);

const TOC_LINKS = [
  { id: 'quotations', title: '1. Quotations & Orders' },
  { id: 'quality', title: '2. Manufacturing & Testing' },
  { id: 'dispatch', title: '3. Dispatch & Freight' },
  { id: 'warranty', title: '4. Warranty & Support' },
  { id: 'jurisdiction', title: '5. Jurisdiction & Contact' },
];

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={webPageSchema} />
      <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-white border-b border-slate-200 py-8 md:py-10">
        <Container>
          <nav aria-label="Breadcrumb" className="text-xs sm:text-sm font-body text-slate-500 mb-3">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-honeywell-red transition-colors">Home</Link>
              </li>
              <li aria-hidden="true" className="text-slate-400">&rsaquo;</li>
              <li className="text-honeywell-red font-semibold" aria-current="page">Terms &amp; Conditions</li>
            </ol>
          </nav>

          <Heading variant="section" as="h1" className="text-honeywell-navy text-3xl sm:text-4xl md:text-5xl mb-3">
            Terms &amp; Conditions
          </Heading>
          <p className="text-brand-steelGray font-body text-sm sm:text-base max-w-3xl">
            Last Updated: March 2026 &bull; Commercial supply, manufacturing warranty, and operational terms of Honeywell Hydraulics.
          </p>
        </Container>
      </div>

      {/* Main Content Area */}
      <div className="py-8 sm:py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Sidebar / Quick Navigation */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-sm sticky top-24">
                <h2 className="text-xs font-bold uppercase tracking-widest text-honeywell-red mb-4 font-body flex items-center gap-2">
                  <Scale className="w-4 h-4" /> Table of Contents
                </h2>
                <nav className="space-y-1">
                  {TOC_LINKS.map((link) => (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      className="block text-sm font-body font-medium text-brand-darkSlate hover:text-honeywell-red hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors"
                    >
                      {link.title}
                    </a>
                  ))}
                </nav>

                <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-honeywell-navy">
                    <ShieldCheck className="w-4 h-4 text-honeywell-red" />
                    <span>100% Hydrostatic Pressure Testing</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-honeywell-navy">
                    <Wrench className="w-4 h-4 text-honeywell-red" />
                    <span>12-Month Manufacturer Warranty</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-honeywell-navy">
                    <Truck className="w-4 h-4 text-honeywell-red" />
                    <span>Ex-Works / CIF Nationwide Logistics</span>
                  </div>
                </div>
              </div>
            </aside>

            {/* Document Content */}
            <main className="lg:col-span-8 space-y-6 sm:space-y-8">
              {/* Section 1 */}
              <section id="quotations" className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-honeywell-red flex items-center justify-center font-bold font-display text-lg">
                    1
                  </div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-honeywell-navy">
                    Quotations &amp; Orders
                  </h2>
                </div>
                <p className="font-body text-brand-darkSlate leading-relaxed text-sm sm:text-base">
                  All price quotations issued by Honeywell Hydraulics are valid for 30 calendar days from issuance unless explicitly agreed in writing. Purchase orders (PO) must reference verified general arrangement (GA) drawings, operational pressure ratings, bore/stroke dimensions, and duty cycles. Production commences upon drawing sign-off and agreed commercial advance.
                </p>
              </section>

              {/* Section 2 */}
              <section id="quality" className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-honeywell-red flex items-center justify-center font-bold font-display text-lg">
                    2
                  </div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-honeywell-navy">
                    Manufacturing &amp; Quality Inspection
                  </h2>
                </div>
                <p className="font-body text-brand-darkSlate leading-relaxed text-sm sm:text-base mb-4">
                  Every hydraulic cylinder, power pack, and manifold block is built under ISO 9001:2015 certified manufacturing protocols.
                </p>
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80 space-y-2 text-xs sm:text-sm font-body text-brand-darkSlate">
                  <p className="flex items-start gap-2">
                    <FileCheck className="w-4 h-4 text-honeywell-red shrink-0 mt-0.5" />
                    <span><strong>1.5x Pressure Proofing:</strong> All units undergo hydrostatic testing to 1.5 times the rated working pressure with zero internal or external bypass.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <FileCheck className="w-4 h-4 text-honeywell-red shrink-0 mt-0.5" />
                    <span><strong>Traceable Certifications:</strong> Material Test Certificates (MTC EN 10204 3.1) and inspection reports accompany commercial dispatches upon request.</span>
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section id="dispatch" className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-honeywell-red flex items-center justify-center font-bold font-display text-lg">
                    3
                  </div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-honeywell-navy">
                    Dispatch, Delivery &amp; Freight
                  </h2>
                </div>
                <p className="font-body text-brand-darkSlate leading-relaxed text-sm sm:text-base">
                  Standard manufacturing lead times range from 7 to 15 business days depending on design customization and order volume. Commercial deliveries are executed Ex-Works Kathwada GIDC, Ahmedabad or delivered to customer sites via contracted road logistics partners across India.
                </p>
              </section>

              {/* Section 4 */}
              <section id="warranty" className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-honeywell-red flex items-center justify-center font-bold font-display text-lg">
                    4
                  </div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-honeywell-navy">
                    12-Month Manufacturer Warranty
                  </h2>
                </div>
                <p className="font-body text-brand-darkSlate leading-relaxed text-sm sm:text-base mb-4">
                  Honeywell Hydraulics provides a comprehensive 12-month manufacturer defect warranty covering material integrity and machining craftsmanship under proper operating conditions (ISO 4406 fluid cleanliness).
                </p>
                <div className="p-4 rounded-lg bg-red-50/50 border border-red-100 text-xs sm:text-sm font-body text-brand-darkSlate">
                  <p className="font-semibold text-honeywell-navy mb-1">Warranty Exclusions:</p>
                  <p className="text-brand-steelGray">
                    Damages caused by severe oil contamination, dry running pumps, exceeding specified relief valve pressures, or unauthorized mechanical disassembly are not covered.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section id="jurisdiction" className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-honeywell-red flex items-center justify-center font-bold font-display text-lg">
                    5
                  </div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-honeywell-navy">
                    Jurisdiction &amp; Commercial Inquiries
                  </h2>
                </div>
                <p className="font-body text-brand-darkSlate leading-relaxed text-sm sm:text-base mb-6">
                  All commercial agreements are governed by the laws of India and subject to the exclusive jurisdiction of the competent courts in Ahmedabad, Gujarat.
                </p>
                
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
                  <p className="font-bold text-honeywell-navy font-display text-lg">Honeywell Hydraulics</p>
                  <p className="text-xs sm:text-sm text-brand-steelGray flex items-start gap-2 font-body">
                    <MapPin className="w-4 h-4 text-honeywell-red shrink-0 mt-0.5" />
                    <span>B-18, Suryam Plaza Estate, Near Nilkanth Estate, Road No. 15, Kathwada GIDC, Ahmedabad, Gujarat 382430, India</span>
                  </p>
                  <p className="text-xs sm:text-sm text-brand-steelGray flex items-center gap-2 font-body">
                    <Mail className="w-4 h-4 text-honeywell-red shrink-0" />
                    <a href="mailto:sales@honeywellhydraulics.com" className="text-honeywell-red font-semibold hover:underline">sales@honeywellhydraulics.com</a>
                  </p>
                  <p className="text-xs sm:text-sm text-brand-steelGray flex items-center gap-2 font-body">
                    <Phone className="w-4 h-4 text-honeywell-red shrink-0" />
                    <a href="tel:+919924343873" className="hover:text-honeywell-navy transition-colors">+91 99243 43873</a>
                  </p>
                </div>
              </section>
            </main>
          </div>
        </Container>
      </div>

      {/* Conversion & Inquiry Strip */}
      <Section bg="white" aria-labelledby="terms-cta-heading" className="border-t border-slate-200">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 bg-brand-surfaceGray rounded-xl border border-brand-borderGray">
            <div>
              <Heading as="h3" variant="subsection" id="terms-cta-heading" className="text-honeywell-navy mb-1">
                Ready to initiate a purchase order or custom requirement?
              </Heading>
              <p className="text-sm text-brand-steelGray font-body">
                Our sales and applications engineering team will review your parameters within 24 hours.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Button href="/contact-us/" variant="outline" size="sm">
                Contact Sales
              </Button>
              <Button href="/request-quote/" variant="primary" size="sm">
                Request a Quote
              </Button>
            </div>
          </div>
        </Container>
      </Section>
      </div>
    </>
  );
}
