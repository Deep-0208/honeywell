import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { WhatsAppFloatingCTA } from '@/components/ui/WhatsAppFloatingCTA';
import { COMPANY_INFO } from '@/lib/constants';

/* ─────────────────────────────────────────────
   NAP Data (from LOCAL_SEO_IMPLEMENTATION.md)
   ───────────────────────────────────────────── */
const NAP = {
  phone: '+91-9924343873',
  phoneDisplay: '+91 99243 43873',
  email: 'sales@honeywellhydraulics.com',
  address: 'B-18, Suryam Plaza Estate, Near Nilkanth Estate,\nRoad No. 15, Kathwada GIDC,\nAhmedabad, Gujarat 382430, India',
  whatsapp: 'https://wa.me/919924343873?text=Hello%2C%20I%20need%20a%20quote%20for%20hydraulic%20equipment.',
};

/* ─────────────────────────────────────────────
   Navigation Columns (SEO internal link matrix)
   ───────────────────────────────────────────── */
const footerColumns = [
  {
    heading: 'Products',
    links: [
      { label: 'Hydraulic Cylinders', href: '/products/hydraulic-cylinders/' },
      { label: 'Hydraulic Power Packs', href: '/products/hydraulic-power-packs/' },
      { label: 'Hydraulic Accessories', href: '/products/hydraulic-accessories/' },
    ],
  },

  {
    heading: 'Industries',
    links: [
      { label: 'Injection Moulding', href: '/industries/injection-moulding/' },
      { label: 'Automotive', href: '/industries/automotive/' },
      { label: 'Steel & Metallurgy', href: '/industries/steel-metallurgy/' },
      { label: 'Construction Equipment', href: '/industries/construction-equipment/' },
      { label: 'Material Handling', href: '/industries/material-handling/' },
      { label: 'Special Purpose Machines', href: '/industries/special-purpose-machines/' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '/about-us/' },
      { label: 'Infrastructure', href: '/infrastructure/' },
      { label: 'Quality', href: '/quality/' },
      { label: 'Manufacturing Facility', href: '/manufacturing-facility/' },
      { label: 'Contact Us', href: '/contact-us/' },
    ],
  },
];

const locationLinks = [
  { label: 'Gujarat', href: '/locations/gujarat-facility/' },
  { label: 'Maharashtra', href: '/locations/maharashtra/' },
  { label: 'Indore', href: '/locations/indore/' },
  { label: 'West Bengal', href: '/locations/west-bengal/' },
  { label: 'Rajasthan', href: '/locations/rajasthan/' },
  { label: 'Pan India', href: '/locations/india/' },
];

const trustBadges = [
  'ISO 9001:2015 Certified',
  'Since 2018',
  '500+ Clients',
  '25+ Industries',
  'Made In India',
];

/**
 * Footer — Honeywell Hydraulics
 *
 * Full enterprise footer meeting DESIGN.md, LOCAL_SEO_IMPLEMENTATION.md,
 * and SEO_ARCHITECTURE.md internal linking requirements.
 *
 * Structure:
 * 1. WhatsApp floating CTA (mobile-first)
 * 2. Trust strip
 * 3. Main footer body: NAP block + 4 nav columns
 * 4. Location links row
 * 5. Bottom bar: Copyright + Legal + Social
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* ═══════════════════════════════════════
          WHATSAPP FLOATING CTA
          ═══════════════════════════════════════ */}
      <WhatsAppFloatingCTA href={NAP.whatsapp} />

      <footer
        className="bg-brand-surfaceGray border-t border-slate-200"
        role="contentinfo"
        aria-label="Site footer"
      >
        {/* ═══════════════════════════════════════
            TRUST STRIP
            ═══════════════════════════════════════ */}
        <div className="border-b border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
              {trustBadges.map((badge) => (
                <div key={badge}>
                  <span
                    className="flex items-center gap-2 text-xs font-semibold text-honeywell-navy uppercase tracking-wider font-body"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-honeywell-red shrink-0"
                      aria-hidden="true"
                    />
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════
            MAIN FOOTER BODY
            ═══════════════════════════════════════ */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-6">

            {/* NAP COLUMN (spans 2 cols on lg) */}
            <div className="lg:col-span-2">
              <Link
                href="/"
                className="inline-flex items-center justify-center bg-white p-2.5 sm:p-3 rounded-lg mb-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-navy focus-visible:rounded-sm"
                aria-label="Honeywell Hydraulics — Home"
              >
                <Image
                  src="/long-size-logohydralics-logo.png"
                  alt="Honeywell Hydraulics Logo"
                  width={240}
                  height={60}
                  className="h-14 sm:h-16 w-auto"
                />
              </Link>

              <p className="text-sm text-brand-steelGray font-body leading-relaxed mb-6 max-w-xs">
                Precision hydraulic cylinder and power pack manufacturer in Ahmedabad, Gujarat.
                Custom-engineered solutions for 25+ industries across India.
              </p>

              {/* NAP — Critical for Local SEO */}
              <address className="not-italic space-y-3" itemScope itemType="https://schema.org/PostalAddress">
                <a
                  href={`tel:${NAP.phone}`}
                  className="flex items-center gap-3 text-sm text-brand-darkSlate hover:text-honeywell-red transition-colors font-body group"
                  aria-label={`Call us at ${NAP.phoneDisplay}`}
                >
                  <span className="w-8 h-8 rounded-full bg-honeywell-navy/8 flex items-center justify-center shrink-0 group-hover:bg-honeywell-red/10 transition-colors">
                    <Phone className="w-4 h-4 text-honeywell-navy group-hover:text-honeywell-red transition-colors" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-[13px] tracking-wide">{NAP.phoneDisplay}</span>
                </a>

                <a
                  href={`mailto:${NAP.email}`}
                  className="flex items-center gap-3 text-sm text-brand-darkSlate hover:text-honeywell-red transition-colors font-body group"
                >
                  <span className="w-8 h-8 rounded-full bg-honeywell-navy/8 flex items-center justify-center shrink-0 group-hover:bg-honeywell-red/10 transition-colors">
                    <Mail className="w-4 h-4 text-honeywell-navy group-hover:text-honeywell-red transition-colors" aria-hidden="true" />
                  </span>
                  <span>{NAP.email}</span>
                </a>

                <div className="flex items-start gap-3 text-sm text-brand-darkSlate font-body">
                  <span className="w-8 h-8 rounded-full bg-honeywell-navy/8 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-honeywell-navy" aria-hidden="true" />
                  </span>
                  <span
                    className="leading-relaxed"
                    itemProp="streetAddress"
                  >
                    {NAP.address.split('\n').map((line, i) => (
                      <span key={i} className="block">{line}</span>
                    ))}
                  </span>
                </div>
              </address>

              {/* Contact Us CTA */}
              <Link
                href="/contact-us/"
                className="
                  inline-flex items-center gap-2 mt-6
                  px-5 py-2.5 rounded-sm
                  bg-honeywell-red text-white text-sm font-semibold font-body
                  hover:bg-red-700 transition-all duration-200
                  hover:shadow-[0_4px_16px_-4px_rgba(227,27,35,0.4)]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-red focus-visible:ring-offset-2
                  group
                "
              >
                Contact Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
              </Link>
            </div>

            {/* NAVIGATION COLUMNS */}
            {footerColumns.map((col, colIdx) => (
              <div key={col.heading} className="lg:mt-[108px]">
                <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-honeywell-navy font-body mb-4">
                  {col.heading}
                </h3>
                <ul className="space-y-2.5" role="list">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="
                          text-sm text-[#475569] hover:text-honeywell-red
                          transition-colors duration-150 font-body
                          focus-visible:outline-none focus-visible:underline
                          inline-block hover:translate-x-0.5 transition-transform
                        "
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* LOCATIONS ROW — Local SEO internal links */}
          <div className="mt-10 pt-8 border-t border-slate-200">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-honeywell-navy font-body mb-4">
              Serving Locations
            </p>
            <ul className="flex flex-wrap gap-x-4 gap-y-2" role="list" aria-label="Service locations">
              {locationLinks.map((loc) => (
                <li key={loc.href}>
                  <Link
                    href={loc.href}
                    className="
                      text-sm text-[#475569] hover:text-honeywell-red
                      transition-colors duration-150 font-body
                      focus-visible:outline-none focus-visible:underline
                    "
                  >
                    Hydraulic Manufacturer in {loc.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ═══════════════════════════════════════
            BOTTOM BAR — Navy strip
            ═══════════════════════════════════════ */}
        <div className="bg-honeywell-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

              {/* Copyright */}
              <p className="text-xs text-[#94A3B8] font-body text-center sm:text-left">
                &copy; {currentYear}{' '}
                <Link
                  href="/"
                  className="text-white underline hover:text-honeywell-red transition-colors focus-visible:outline-none"
                >
                  Honeywell Hydraulics
                </Link>
                . All rights reserved. Manufactured in Ahmedabad, India.
              </p>

              {/* Legal + Social */}
              <div className="flex items-center gap-6">
                <nav aria-label="Legal navigation" className="flex items-center gap-4">
                  <Link
                    href="/privacy-policy/"
                    className="text-xs text-[#94A3B8] hover:text-white transition-colors font-body focus-visible:outline-none focus-visible:underline"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms/"
                    className="text-xs text-[#94A3B8] hover:text-white transition-colors font-body focus-visible:outline-none focus-visible:underline"
                  >
                    Terms
                  </Link>
                  <Link
                    href="/sitemap.xml"
                    className="text-xs text-[#94A3B8] hover:text-white transition-colors font-body focus-visible:outline-none focus-visible:underline"
                  >
                    Sitemap
                  </Link>
                </nav>

                {/* Social icons — inline SVG for brand accuracy */}
                <div className="flex items-center gap-3" aria-label="Social media links">
                  {/* LinkedIn */}
                  <a
                    href={COMPANY_INFO.socialUrls.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Honeywell Hydraulics on LinkedIn"
                    className="w-11 h-11 rounded-full flex items-center justify-center text-[#94A3B8] hover:text-white hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white hover:scale-110"
                  >
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  {/* Facebook */}
                  <a
                    href={COMPANY_INFO.socialUrls.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Honeywell Hydraulics on Facebook"
                    className="w-11 h-11 rounded-full flex items-center justify-center text-[#94A3B8] hover:text-white hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white hover:scale-110"
                  >
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  {/* X (Twitter) */}
                  <a
                    href={COMPANY_INFO.socialUrls.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Honeywell Hydraulics on X (Twitter)"
                    className="w-11 h-11 rounded-full flex items-center justify-center text-[#94A3B8] hover:text-white hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white hover:scale-110"
                  >
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
