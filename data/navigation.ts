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
  ctaHref: '/request-quote/#quote-form',

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
                icon: 'building',
              },
              {
                label: 'Manufacturing Facility',
                href: '/manufacturing-facility/',
                description: 'End-to-end hydraulic manufacturing at our state-of-the-art facility in Gujarat.',
                icon: 'factory',
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
                  { label: 'Goods Lift Cylinders', href: '/products/hydraulic-cylinders/goods-lift-hydraulic-cylinders/' },
                  { label: 'Car Parking Cylinders', href: '/products/hydraulic-cylinders/car-parking-hydraulic-cylinders/' },
                  { label: 'Scissor Lift Table Cylinders', href: '/products/hydraulic-cylinders/scissor-lift-table-hydraulic-cylinder/' },
                  { label: 'Flange Mounted Cylinders', href: '/products/hydraulic-cylinders/flange-mounted-hydraulic-cylinder/' },
                  { label: 'Clevis Mounted Cylinders', href: '/products/hydraulic-cylinders/clevis-mounted-hydraulic-cylinder/' },
                  { label: 'Trunnion Mounted Cylinders', href: '/products/hydraulic-cylinders/trunnion-mounted-hydraulic-cylinder/' },
                  { label: 'Square Body Cylinders', href: '/products/hydraulic-cylinders/square-body-hydraulic-cylinder/' },
                ],
              },
              {
                label: 'Hydraulic Power Packs',
                href: '/products/hydraulic-power-packs/',
                description:
                  'Custom-engineered hydraulic power units delivering precise flow rates for automated machinery and heavy presses.',
                subcategories: [
                  { label: 'Single Phase Power Packs', href: '/products/hydraulic-power-packs/single-phase-hydraulic-power-packs/' },
                  { label: 'Three Phase Power Packs', href: '/products/hydraulic-power-packs/three-phase-hydraulic-power-packs/' },
                  { label: 'Customized Power Packs', href: '/products/hydraulic-power-packs/customized-hydraulic-power-packs/' },
                  { label: 'Power Packs for Press', href: '/products/hydraulic-power-packs/hydraulic-power-packs-for-press/' },
                  { label: 'Multistation Power Packs', href: '/products/hydraulic-power-packs/multistation-hydraulic-power-packs/' },
                  { label: 'Accumulator Power Packs', href: '/products/hydraulic-power-packs/accumulator-hydraulic-power-packs/' },
                  { label: 'Hand Lever Power Packs', href: '/products/hydraulic-power-packs/hand-lever-operated-hydraulic-power-packs/' },
                  { label: 'Hand Pump Power Packs', href: '/products/hydraulic-power-packs/hand-pump-operated-hydraulic-power-packs/' },
                  { label: 'High-Low Power Packs', href: '/products/hydraulic-power-packs/high-low-hydraulic-power-packs/' },
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
                  { label: 'Vapi', href: '/locations/vapi/' },
                  { label: 'Jamnagar', href: '/locations/jamnagar/' },
                  { label: 'Ankleshwar', href: '/locations/ankleshwar/' },
                  { label: 'Morbi', href: '/locations/morbi/' },
                  { label: 'Halol', href: '/locations/halol/' },
                  { label: 'Kutch', href: '/locations/kutch/' },
                ],
              },
              {
                label: 'Maharashtra',
                href: '/locations/maharashtra/',
                description: 'Serving Pune, Mumbai, and major MIDC zones.',
                subcategories: [
                  { label: 'Pune (Chakan, Bhosari, Ranjangaon)', href: '/locations/maharashtra/' },
                  { label: 'Mumbai & Thane', href: '/locations/maharashtra/' },
                  { label: 'Nashik & Sinnar MIDC', href: '/locations/maharashtra/' },
                  { label: 'Aurangabad (Sambhajinagar)', href: '/locations/maharashtra/' },
                  { label: 'Kolhapur & Sangli', href: '/locations/maharashtra/' },
                  { label: 'Nagpur & Butibori', href: '/locations/maharashtra/' },
                  { label: 'Navi Mumbai & Raigad', href: '/locations/maharashtra/' },
                ],
              },
              {
                label: 'Rajasthan',
                href: '/locations/rajasthan/',
                description: 'Supplying to RIICO industrial areas like Bhiwadi.',
                subcategories: [
                  { label: 'Jaipur & Sitapura', href: '/locations/rajasthan/' },
                  { label: 'Bhiwadi & Neemrana RIICO', href: '/locations/rajasthan/' },
                  { label: 'Jodhpur', href: '/locations/rajasthan/' },
                  { label: 'Kota & Bundi', href: '/locations/rajasthan/' },
                  { label: 'Udaipur & Rajsamand', href: '/locations/rajasthan/' },
                  { label: 'Alwar & Matsya', href: '/locations/rajasthan/' },
                ],
              },
              {
                label: 'Madhya Pradesh',
                href: '/locations/madhya-pradesh/',
                description: 'Automotive and engineering hubs — Indore, Pithampur, Bhopal.',
                subcategories: [
                  { label: 'Indore & Pithampur', href: '/locations/madhya-pradesh/' },
                  { label: 'Bhopal & Mandideep', href: '/locations/madhya-pradesh/' },
                  { label: 'Jabalpur', href: '/locations/madhya-pradesh/' },
                  { label: 'Gwalior & Malanpur', href: '/locations/madhya-pradesh/' },
                  { label: 'Ujjain & Dewas', href: '/locations/madhya-pradesh/' },
                ],
              },
              {
                label: 'Karnataka',
                href: '/locations/karnataka/',
                description: 'Engineering and automation — Bengaluru, Hubli, Belgaum.',
                subcategories: [
                  { label: 'Bengaluru (Peenya, Bommasandra)', href: '/locations/karnataka/' },
                  { label: 'Hubli-Dharwad', href: '/locations/karnataka/' },
                  { label: 'Belgaum (Belagavi)', href: '/locations/karnataka/' },
                  { label: 'Mysuru & Kadakola', href: '/locations/karnataka/' },
                  { label: 'Mangaluru', href: '/locations/karnataka/' },
                ],
              },
              {
                label: 'Tamil Nadu',
                href: '/locations/tamil-nadu/',
                description: 'Automotive and textile machinery — Chennai, Coimbatore.',
                subcategories: [
                  { label: 'Chennai (Sriperumbudur, Oragadam)', href: '/locations/tamil-nadu/' },
                  { label: 'Coimbatore', href: '/locations/tamil-nadu/' },
                  { label: 'Hosur', href: '/locations/tamil-nadu/' },
                  { label: 'Tiruppur', href: '/locations/tamil-nadu/' },
                  { label: 'Salem', href: '/locations/tamil-nadu/' },
                ],
              },
              {
                label: 'West Bengal',
                href: '/locations/west-bengal/',
                description: 'Steel and heavy engineering — Kolkata, Durgapur.',
                subcategories: [
                  { label: 'Kolkata & Howrah', href: '/locations/west-bengal/' },
                  { label: 'Durgapur & Asansol', href: '/locations/west-bengal/' },
                  { label: 'Haldia', href: '/locations/west-bengal/' },
                  { label: 'Kharagpur', href: '/locations/west-bengal/' },
                ],
              },
              {
                label: 'Pan India',
                href: '/locations/',
                description: 'Nationwide delivery across all major industrial cities.',
                subcategories: [
                  { label: 'North India (Delhi NCR, Haryana, Punjab)', href: '/locations/' },
                  { label: 'West India (Gujarat, Maharashtra, Rajasthan)', href: '/locations/' },
                  { label: 'South India (Karnataka, Tamil Nadu, Telangana)', href: '/locations/' },
                  { label: 'East & Central (West Bengal, MP, Odisha)', href: '/locations/' },
                  { label: 'Express Transit Across All 28 States', href: '/locations/' },
                ],
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
      href: '#',
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
