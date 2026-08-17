import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { buildMetadata } from '@/lib/seo';
import Link from 'next/link';
import { Shield, Lock, FileText, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy | Honeywell Hydraulics',
  description: 'Privacy Policy for Honeywell Hydraulics. Understand how we collect, use, and protect your information when inquiring about hydraulic equipment.',
  canonical: '/privacy-policy/',
});

const TOC_LINKS = [
  { id: 'overview', title: '1. Overview' },
  { id: 'collection', title: '2. Information We Collect' },
  { id: 'usage', title: '3. How We Use Information' },
  { id: 'protection', title: '4. Data Protection & Security' },
  { id: 'contact', title: '5. Contact Information' },
];

export default function PrivacyPolicyPage() {
  return (
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
              <li className="text-honeywell-red font-semibold" aria-current="page">Privacy Policy</li>
            </ol>
          </nav>

          <Heading variant="section" as="h1" className="text-honeywell-navy text-3xl sm:text-4xl md:text-5xl mb-3">
            Privacy Policy
          </Heading>
          <p className="text-brand-steelGray font-body text-sm sm:text-base max-w-3xl">
            Last Updated: March 2026 &bull; Official corporate privacy policy of Honeywell Hydraulics.
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
                  <FileText className="w-4 h-4" /> Table of Contents
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
                    <Shield className="w-4 h-4 text-honeywell-red" />
                    <span>ISO 9001:2015 Certified Plant</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-honeywell-navy">
                    <Lock className="w-4 h-4 text-honeywell-red" />
                    <span>Industrial NDA &amp; CAD Confidentiality</span>
                  </div>
                </div>
              </div>
            </aside>

            {/* Document Content */}
            <main className="lg:col-span-8 space-y-6 sm:space-y-8">
              {/* Section 1 */}
              <section id="overview" className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-honeywell-red flex items-center justify-center font-bold font-display text-lg">
                    1
                  </div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-honeywell-navy">
                    Overview &amp; Scope
                  </h2>
                </div>
                <p className="font-body text-brand-darkSlate leading-relaxed text-sm sm:text-base">
                  Honeywell Hydraulics (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates as a premier industrial manufacturer of hydraulic cylinders, power packs, and manifold blocks based in Kathwada GIDC, Ahmedabad, Gujarat, India. We are committed to protecting the privacy, security, and confidentiality of your corporate inquiries and engineering data.
                </p>
              </section>

              {/* Section 2 */}
              <section id="collection" className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-honeywell-red flex items-center justify-center font-bold font-display text-lg">
                    2
                  </div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-honeywell-navy">
                    Information We Collect
                  </h2>
                </div>
                <p className="font-body text-brand-darkSlate leading-relaxed text-sm sm:text-base mb-4">
                  When you submit inquiries, request technical quotations, or upload technical drawings through our website, we may collect:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80">
                    <h3 className="font-bold text-sm text-honeywell-navy mb-1 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-honeywell-red shrink-0" /> Commercial Contact Info
                    </h3>
                    <p className="text-xs text-brand-steelGray font-body">
                      Company name, authorized representative name, corporate email address, phone number, and delivery location.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80">
                    <h3 className="font-bold text-sm text-honeywell-navy mb-1 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-honeywell-red shrink-0" /> Technical Data &amp; CAD
                    </h3>
                    <p className="text-xs text-brand-steelGray font-body">
                      Operating pressure requirements, bore/stroke dimensions, mounting style, fluid medium, and custom engineering blueprints.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section id="usage" className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-honeywell-red flex items-center justify-center font-bold font-display text-lg">
                    3
                  </div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-honeywell-navy">
                    How We Use Your Information
                  </h2>
                </div>
                <p className="font-body text-brand-darkSlate leading-relaxed text-sm sm:text-base mb-4">
                  Your business and technical information is utilized strictly for authorized manufacturing and commercial operations:
                </p>
                <ul className="space-y-3 font-body text-sm sm:text-base text-brand-darkSlate">
                  <li className="flex items-start gap-3">
                    <span className="text-honeywell-red font-bold">&bull;</span>
                    <span><strong>Engineering Calculation &amp; Quotations:</strong> Analyzing cycle requirements, calculating tonnage, and issuing formal proposals.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-honeywell-red font-bold">&bull;</span>
                    <span><strong>Production &amp; Testing Traceability:</strong> Generating work orders, executing 100% hydrostatic testing, and issuing Material Test Certificates (MTC).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-honeywell-red font-bold">&bull;</span>
                    <span><strong>Logistics &amp; Dispatch:</strong> Coordinating freight delivery, tracking shipments, and providing technical warranty support.</span>
                  </li>
                </ul>
              </section>

              {/* Section 4 */}
              <section id="protection" className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-honeywell-red flex items-center justify-center font-bold font-display text-lg">
                    4
                  </div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-honeywell-navy">
                    Data Protection &amp; Confidentiality
                  </h2>
                </div>
                <p className="font-body text-brand-darkSlate leading-relaxed text-sm sm:text-base">
                  We maintain strict industrial data protection standards. Honeywell Hydraulics does not sell, rent, or monetize any client data. All engineering files, customer blueprints, and proprietary system schematics are stored securely and treated under standard non-disclosure confidentiality.
                </p>
              </section>

              {/* Section 5 */}
              <section id="contact" className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-honeywell-red flex items-center justify-center font-bold font-display text-lg">
                    5
                  </div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-honeywell-navy">
                    Contact Us Regarding Privacy
                  </h2>
                </div>
                <p className="font-body text-brand-darkSlate leading-relaxed text-sm sm:text-base mb-6">
                  For any inquiries regarding data protection or to request the update of your company details, please reach our administrative office:
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
    </div>
  );
}
