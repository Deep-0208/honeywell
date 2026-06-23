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
                description: 'End-to-end hydraulic manufacturing at Kathwada GIDC, Ahmedabad.',
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
                  { label: 'Double Acting Cylinders', href: '/products/hydraulic-cylinders/' },
                  { label: 'Single Acting Cylinders', href: '/products/hydraulic-cylinders/' },
                  { label: 'Tie Rod Cylinders', href: '/products/hydraulic-cylinders/' },
                  { label: 'Welded Cylinders', href: '/products/hydraulic-cylinders/' },
                  { label: 'Telescopic Cylinders', href: '/products/hydraulic-cylinders/' },
                ],
              },
              {
                label: 'Hydraulic Power Packs',
                href: '/products/hydraulic-power-packs/',
                description:
                  'Custom-engineered hydraulic power units delivering precise flow rates for automated machinery and heavy presses.',
                subcategories: [
                  { label: 'Custom Power Units', href: '/products/hydraulic-power-packs/' },
                  { label: 'Standard Power Packs', href: '/products/hydraulic-power-packs/' },
                  { label: 'Mini Power Packs', href: '/products/hydraulic-power-packs/' },
                  { label: 'High Pressure Units', href: '/products/hydraulic-power-packs/' },
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
                href: '/industries/injection-moulding/',
                description: 'High-speed core pulls and high-pressure clamping solutions.',
              },
              {
                label: 'Automotive',
                href: '/industries/automotive/',
                description: 'Synchronized robotic welding and assembly station hydraulics.',
              },
              {
                label: 'Steel & Metallurgy',
                href: '/industries/steel-metallurgy/',
                description: 'Extreme-pressure fluid power for rolling mills and forging.',
              },
              {
                label: 'Construction Equipment',
                href: '/industries/construction-equipment/',
                description: 'Rugged hydraulic cylinders and components for earthmoving and heavy machinery.',
              },
              {
                label: 'Agriculture',
                href: '/industries/agriculture/',
                description: 'Reliable hydraulic solutions for farming and agri-equipment.',
              },
              {
                label: 'Material Handling',
                href: '/industries/material-handling/',
                description: 'Judder-free lifting power for warehouse and logistics automation.',
              },
              {
                label: 'Plastic Processing',
                href: '/industries/plastic-processing/',
                description: 'Precision hydraulics for extrusion, blow moulding, and thermoforming.',
              },
              {
                label: 'Special Purpose Machines',
                href: '/industries/special-purpose-machines/',
                description: 'Custom fluid power for unique, one-off manufacturing equipment.',
              },
            ],
          },
        ],
      },
    },

    /* ──────────────────────────────────────────────
       CONTACT — Direct Link
       ────────────────────────────────────────────── */
    {
      label: 'Contact',
      href: '/contact-us/',
    },
    {
      label: 'Gallery',
      href: '/gallery/',
    },
  ],
};
