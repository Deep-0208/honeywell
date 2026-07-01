/**
 * Navigation Data — Honeywell Hydraulics
 *
 * Single source of truth for the header navigation structure.
 * Content derived from docs/content/* as directed by the design system.
 */

import type { SiteNavigation } from '@/types/navigation';

export const siteNavigation: SiteNavigation = {
  phone: '+91-9924343873',
  phoneDisplay: '+91 99243 43873',
  ctaLabel: 'Request Quote',
  ctaHref: '/request-quote/',

  mainNav: [
            /* ──────────────────────────────────────────────
       COMPANY — Dropdown
       ────────────────────────────────────────────── */
    {
      label: 'Company',
      href: '/about-us/',
      megaMenu: {
        columns: [
          {
            heading: 'About Us',
            links: [
              {
                label: 'About Honeywell Hydraulics',
                href: '/about-us/',
                description: 'Our story, vision, and commitment to precision manufacturing.',
              },
              {
                label: 'Infrastructure',
                href: '/infrastructure/',
                description: 'CNC machining centres, testing rigs, and production infrastructure.',
              },
              {
                label: 'Quality',
                href: '/quality/',
                description: '100% pressure-tested. Zero-defect manufacturing philosophy.',
              },
              {
                label: 'Manufacturing Facility',
                href: '/manufacturing-facility/',
                description: 'End-to-end hydraulic manufacturing at our state-of-the-art facility in Gujarat.',
              },
            ],
          },
        ],
      },
    },

/* ──────────────────────────────────────────────
       PRODUCTS — Mega Menu
       ────────────────────────────────────────────── */
    {
      label: 'Products',
      href: '/products/',
      megaMenu: {
        columns: [
          {
            heading: 'Product Categories',
            links: [
              {
                label: 'Hydraulic Cylinders',
                href: '/products/hydraulic-cylinders/',
                description:
                  'Custom industrial hydraulic cylinders with bore sizes from 40–300 mm. Engineered for precision and endurance.',
                subcategories: [
                  { label: 'Single Acting Cylinders', href: '/products/hydraulic-cylinders/single-acting-hydraulic-cylinders/' },
                  { label: 'Double Acting Cylinders', href: '/products/hydraulic-cylinders/double-acting-hydraulic-cylinders/' },
                  { label: 'Custom Cylinders', href: '/products/hydraulic-cylinders/custom-hydraulic-cylinders/' },
                  { label: 'Tie Rod Cylinders', href: '/products/hydraulic-cylinders/tie-rod-hydraulic-cylinders/' },
                  { label: 'Welded Cylinders', href: '/products/hydraulic-cylinders/welded-hydraulic-cylinders/' },
                  { label: 'Telescopic Cylinders', href: '/products/hydraulic-cylinders/telescopic-hydraulic-cylinders/' },
                ],
              },
              {
                label: 'Hydraulic Power Packs',
                href: '/products/hydraulic-power-packs/',
                description:
                  'Custom-engineered hydraulic power units delivering precise flow rates for automated machinery and heavy presses.',
                subcategories: [
                  { label: '3-Phase Power Packs', href: '/products/hydraulic-power-packs/3-phase-hydraulic-power-packs/' },
                  { label: 'DC Mini Power Packs', href: '/products/hydraulic-power-packs/dc-mini-power-packs/' },
                  { label: 'High/Low Power Packs', href: '/products/hydraulic-power-packs/high-low-hydraulic-power-packs/' },
                ],
              },
              {
                label: 'Hydraulic Manifold Blocks',
                href: '/products/manifold-blocks/',
                description:
                  'Precision-machined logic blocks. Standard CETOP subplates and custom multi-station cartridge valve manifolds.',
                subcategories: [
                  { label: 'CETOP Manifold Blocks', href: '/products/manifold-blocks/cetop-manifold-blocks/' },
                  { label: 'Custom Manifold Blocks', href: '/products/manifold-blocks/custom-manifold-blocks/' },
                  { label: 'Multi-Station Blocks', href: '/products/manifold-blocks/multi-station-manifold-blocks/' },
                  { label: '06-Size Manifold Blocks', href: '/products/manifold-blocks/06-size-manifold-blocks/' },
                  { label: '10-Size Manifold Blocks', href: '/products/manifold-blocks/10-size-manifold-blocks/' },
                ],
              },
            ],
          },
        ],
        featured: {
          title: 'Need a Custom Solution?',
          description:
            'Our engineers design custom hydraulic solutions tailored to your exact specifications. Factory-direct pricing with 7–15 day delivery.',
          ctaLabel: 'Contact Us',
          ctaHref: '/contact-us/',
        },
      },
    },

/* ──────────────────────────────────────────────
       INDUSTRIES — Dropdown
       ────────────────────────────────────────────── */
    {
      label: 'Industries',
      href: '/industries/',
      megaMenu: {
        columns: [
          {
            heading: 'Industries We Serve',
            links: [
              {
                label: 'Injection Moulding',
                href: '#',
                description: 'High-speed core pulls and high-pressure clamping solutions.',
              },
              {
                label: 'Automotive',
                href: '#',
                description: 'Synchronized robotic welding and assembly station hydraulics.',
              },
              {
                label: 'Steel & Metallurgy',
                href: '#',
                description: 'Extreme-pressure fluid power for rolling mills and forging.',
              },
              {
                label: 'Construction Equipment',
                href: '#',
                description: 'Rugged hydraulic cylinders and components for earthmoving and heavy machinery.',
              },
              {
                label: 'Agriculture',
                href: '#',
                description: 'Reliable hydraulic solutions for farming and agri-equipment.',
              },
              {
                label: 'Material Handling',
                href: '#',
                description: 'Judder-free lifting power for warehouse and logistics automation.',
              },
              {
                label: 'Plastic Processing',
                href: '#',
                description: 'Precision hydraulics for extrusion, blow moulding, and thermoforming.',
              },
              {
                label: 'Special Purpose Machines',
                href: '#',
                description: 'Custom fluid power for unique, one-off manufacturing equipment.',
              },
            ],
          },
        ],
      },
    },

    /* ──────────────────────────────────────────────
       AREAS WE SERVE — Mega Menu
       ────────────────────────────────────────────── */
    {
      label: 'Areas We Serve',
      href: '/locations/',
      megaMenu: {
        columns: [
          {
            heading: 'Regions',
            links: [
              {
                label: 'Gujarat',
                href: '/locations/gujarat/',
                description: 'Our primary manufacturing and supply hub.',
                subcategories: [
                  { label: 'Ahmedabad', href: '/locations/ahmedabad/' },
                  { label: 'Surat', href: '/locations/surat/' },
                  { label: 'Vadodara', href: '/locations/vadodara/' },
                  { label: 'Rajkot', href: '/locations/rajkot/' },
                  { label: 'Bhavnagar', href: '/locations/bhavnagar/' },
                  { label: 'Gandhinagar', href: '/locations/gandhinagar/' },
                  { label: 'Vapi', href: '/locations/vapi-valsad/' },
                  { label: 'Jamnagar', href: '/locations/jamnagar/' },
                ],
              },
              {
                label: 'Maharashtra',
                href: '/locations/maharashtra/',
                description: 'Serving Pune, Mumbai, and major MIDC zones.',
              },
              {
                label: 'Rajasthan',
                href: '/locations/rajasthan/',
                description: 'Supplying to RIICO industrial areas like Bhiwadi.',
              },
              {
                label: 'West Bengal',
                href: '/locations/west-bengal/',
                description: 'Solutions for heavy engineering in Kolkata and Durgapur.',
              },
              {
                label: 'Pan India',
                href: '/locations/india/',
                description: 'Nationwide delivery across all major industrial cities.',
              },
            ],
          },
        ],
      },
    },

    /* ──────────────────────────────────────────────
       GALLERY — Direct Link
       ────────────────────────────────────────────── */
    {
      label: 'Gallery',
      href: '/gallery/',
    },
    /* ──────────────────────────────────────────────
       CONTACT — Direct Link
       ────────────────────────────────────────────── */
    {
      label: 'Contact',
      href: '/contact-us/',
    },
  ],
};
