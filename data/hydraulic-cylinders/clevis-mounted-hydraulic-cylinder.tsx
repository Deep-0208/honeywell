import React from 'react';
import {
  ShieldCheck,
  ArrowUpToLine,
  Settings,
  ShieldAlert,
  HardHat,
  Scale
} from 'lucide-react';
import { FaIndustry, FaBuilding, FaTractor } from 'react-icons/fa';
import type { ProductPageData } from '@/components/product-page/types';

export const clevisMountedCylinderData: ProductPageData = {
  // ── SEO ──
  seo: {
    title: 'Clevis Mounted Hydraulic Cylinder Manufacturer | Honeywell Hydraulics',
    description: 'Heavy-duty clevis mounted hydraulic cylinders engineered for pivoting applications, oscillating machinery, and articulated equipment. High-strength pin connections.',
    url: '/products/hydraulic-cylinders/clevis-mounted-hydraulic-cylinder',
    image: '/images/products/hydraulic-cylinders/clevis-mounted-hydraulic-cylinder.webp',
  },

  // ── Schema ──
  schema: {
    productName: 'Clevis Mounted Hydraulic Cylinder',
    category: 'Hydraulic Cylinders',
    properties: [
      { name: 'Mounting Style', value: 'Front & Rear Clevis / Pivot' },
      { name: 'Bore Size', value: 'Customizable up to 500mm' },
      { name: 'Working Pressure', value: 'Up to 350 Bar' },
      { name: 'Application', value: 'Articulated & Mobile Machinery' }
    ]
  },

  // ── Hero ──
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Hydraulic Cylinders', href: '/products/hydraulic-cylinders' },
    ],
    currentPage: 'Clevis Mounted Cylinders',
    subtitle: 'High-Strength Articulation for Oscillating Machinery',
    h1: 'Clevis Mounted Hydraulic Cylinders',
    description: 'Honeywell Hydraulics manufactures rugged clevis mounted hydraulic cylinders designed specifically for pivoting applications. Built with heavy-duty forged steel clevis ends and precision-machined pivot pins, our cylinders provide extremely smooth articulation while absorbing the intense dynamic forces of mobile and agricultural machinery.',
    primaryCta: { label: 'REQUEST A QUOTE', href: '/request-quote/#quote-form' },
    secondaryCta: { label: 'TECHNICAL SPECS', href: '#technical-specifications' },
    image: {
      src: '/images/products/hydraulic-cylinders/clevis-mounted-hydraulic-cylinder.webp',
      alt: 'Heavy duty clevis mounted hydraulic cylinder manufactured in Ahmedabad, Gujarat',
    },
    keySpecs: [
      { label: 'Mounting', value: 'Pivot / Clevis' },
      { label: 'Max Bore', value: '500 mm' },
      { label: 'Pressure', value: '350 Bar' },
      { label: 'Application', value: 'Articulated' },
    ],
  },

  // ── Overview ──
  overview: {
    heading: 'Engineered for Dynamic Pivoting Applications',
    content: (
      <>
        <p>
          In mobile equipment and articulated machinery, hydraulic cylinders rarely operate in a perfectly straight line. As the equipment arm or boom raises and lowers, the cylinder must pivot to maintain alignment. <strong className="text-honeywell-navy">Clevis mounted hydraulic cylinders</strong> are specifically designed to accommodate this oscillating motion through a secure pin-and-clevis connection.
        </p>
        <p>
          The clevis mount (often called a pivot mount) consists of a U-shaped bracket with holes through which a high-strength steel pin passes, securing it to the machine&apos;s mounting lug. This allows the cylinder body to pivot freely in one plane during extension and retraction, effectively absorbing structural deflection and drastically reducing the side-loading forces that would otherwise destroy internal seals.
        </p>
        <p>
          At Honeywell Hydraulics, we manufacture heavy-duty clevis cylinders tailored for the most brutal operating environments—including earthmoving equipment, agricultural attachments, and industrial dumpers. By utilizing forged clevis ends, self-lubricating spherical bearings, and high-tensile pivot pins, we guarantee long-lasting performance even under continuous heavy vibration.
        </p>
      </>
    ),
  },

  // ── Key Features ──
  keyFeatures: {
    heading: 'Core Advantages & Design Features',
    description: 'Our clevis mounted cylinders are engineered to provide maximum flexibility and durability in heavy-duty pivoting applications.',
    showStepNumbers: false,
    items: [
      {
        icon: <ArrowUpToLine className="w-6 h-6" />,
        title: 'Smooth Articulation',
        description: 'The precision-machined pin connection allows the cylinder to pivot seamlessly, matching the arc of moving machinery arms.',
      },
      {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: 'Side-Load Reduction',
        description: 'By accommodating angular deflection during operation, the clevis mount prevents fatal side-loads that cause rod bending and seal failure.',
      },
      {
        icon: <HardHat className="w-6 h-6" />,
        title: 'High-Strength Clevis',
        description: 'Manufactured with heavy-duty forged steel clevis ends (both cap and rod side) to withstand immense tensile and compressive shock loads.',
      },
      {
        icon: <ShieldAlert className="w-6 h-6" />,
        title: 'Spherical Bearings',
        description: 'Optionally equipped with self-aligning spherical plain bearings to accommodate slight misalignments in multiple planes.',
      },
      {
        icon: <Scale className="w-6 h-6" />,
        title: 'Heavy-Duty Pivot Pins',
        description: 'Includes high-tensile, induction-hardened steel pins equipped with grease nipples for easy maintenance and long wear life.',
      },
      {
        icon: <Settings className="w-6 h-6" />,
        title: 'OEM Customization',
        description: 'Fully customizable pin diameters, jaw widths, bore sizes, and stroke lengths to retrofit perfectly into existing equipment.',
      },
    ],
  },

  // ── Technical Specs ──
  technicalSpecs: {
    heading: 'Technical Specifications',
    description: 'Our clevis mounted cylinders are built using premium materials to endure the harsh realities of mobile and agricultural hydraulics.',
    primaryCta: { label: 'DISCUSS YOUR PROJECT', href: '/request-quote/#quote-form' },
    secondaryCta: { label: 'VIEW ALL PRODUCTS', href: '/products/hydraulic-cylinders' },
    tableTitle: 'Clevis Mounted Cylinder Specs',
    rows: [
      { parameter: 'Bore Diameter', value: '40 mm to 500 mm' },
      { parameter: 'Stroke Length', value: 'Up to 4000 mm (Customizable)' },
      { parameter: 'Working Pressure', value: 'Up to 350 Bar' },
      { parameter: 'Testing Pressure', value: '1.5x Working Pressure' },
      { parameter: 'Clevis Pin Diameter', value: 'Custom engineered per load requirement' },
      { parameter: 'Tube Material', value: 'ST52 Seamless Honed Tube (H8 Tolerance)' },
      { parameter: 'Piston Rod', value: 'EN8 / C45 / EN19 (Hard Chrome Plated)' },
      { parameter: 'Bearing Options', value: 'Standard Steel Bushings or Spherical Bearings' },
      { parameter: 'Seal Kits', value: 'Polyurethane & PTFE (Parker / Hallite)' },
      { parameter: 'Lubrication', value: 'Integrated grease zerks on clevis ends' },
    ],
  },

  // ── Variants ──
  variants: {
    heading: 'Available Clevis Configurations',
    description: 'We manufacture various clevis attachment styles depending on the machinery\'s mounting geometry and load dynamics.',
    items: [
      {
        icon: <ArrowUpToLine className="w-7 h-7" />,
        title: 'Female Clevis (U-Clevis)',
        description: 'The standard U-shaped mounting bracket with two mounting ears. It accepts a single machine lug between the ears and secures it with a cross-pin.',
        highlights: [
          'Most common pivot mount',
          'Excellent load distribution',
          'Easy pin installation'
        ],
      },
      {
        icon: <Settings className="w-7 h-7" />,
        title: 'Male Clevis (Tang)',
        description: 'A solid single lug (tang) that fits into a female U-bracket on the machine. This configuration is often used on the rod end of the cylinder.',
        highlights: [
          'Solid forged construction',
          'High tensile strength',
          'Space-saving profile'
        ],
      },
      {
        icon: <Scale className="w-7 h-7" />,
        title: 'Spherical Bearing Clevis',
        description: 'A specialized clevis eye fitted with a spherical plain bearing. This allows the cylinder to pivot and also tilt slightly, absorbing complex multi-axis misalignments.',
        highlights: [
          'Absorbs multi-axis deflection',
          'Prevents side-loading entirely',
          'Self-lubricating options'
        ],
      },
    ],
  },

  // ── Comparisons ──
  comparisons: [
    {
      heading: 'Clevis vs. Trunnion Mounted Cylinders',
      description: 'Both mounts allow the cylinder to pivot, but they distribute load and space very differently.',
      columns: [{ heading: 'Engineering Feature' }, { heading: 'Clevis Mounted' }, { heading: 'Trunnion Mounted' }],
      rows: [
        { feature: 'Best for Pivoting', values: [{ text: '✅ Yes (End pivot)' }, { text: '✅ Yes (Center pivot)' }] },
        { feature: 'Fixed Mounting', values: [{ text: '❌ No' }, { text: '❌ No' }] },
        { feature: 'Heavy Side Loads', values: [{ text: 'Moderate (Susceptible to buckling at full stroke)' }, { text: 'Excellent (Pivot point absorbs shear)', highlight: true }] },
        { feature: 'Typical Applications', values: [{ text: 'Excavator Booms, Dumpers' }, { text: 'Heavy Forging Presses' }] },
        { feature: 'Space Requirements', values: [{ text: 'Requires clearance at the ends' }, { text: 'Requires clearance around the middle barrel' }] },
      ],
    }
  ],

  // ── Engineering / How to Choose ──
  engineering: {
    heading: 'How to Choose the Right Clevis Mounted Cylinder',
    description: 'Proper specification prevents pin-shear and bearing failure in oscillating applications.',
    items: [
      {
        label: 'A',
        title: 'Pin Sizing & Shear Strength',
        description: 'The clevis pin must handle the entire payload in double-shear. We calculate pin diameter based on the maximum push/pull force to prevent premature shearing.',
      },
      {
        label: 'B',
        title: 'Spherical vs. Straight Bearings',
        description: 'If the machine chassis twists under load (e.g., an excavator on uneven ground), specify spherical bearings to absorb 3D misalignment and prevent rod bending.',
      },
      {
        label: 'C',
        title: 'Stroke Column Loading',
        description: 'Because clevis mounts pivot at the absolute ends of the cylinder, they are prone to buckling at long strokes. We specify over-sized induction-hardened rods for strokes exceeding 1500mm.',
      },
    ],
  },

  // ── Industries ──
  industries: {
    heading: 'Applications & Industries',
    description: 'Clevis mounted cylinders are essential for mobile machinery that requires articulated lifting and tilting.',
    items: [
      {
        icon: <FaTractor className="w-6 h-6" />,
        name: 'Agricultural Machinery',
        description: 'Actuation for tractor loaders, harvesters, plows, and heavy farming attachments.',
        href: '/industries/clevis-mounted-hydraulic-cylinder-manufacturer-honeywell-hydraulics',
      },
      {
        icon: <HardHat className="w-6 h-6" />,
        name: 'Construction Equipment',
        description: 'Boom and bucket cylinders for excavators, backhoes, and front-end loaders.',
        href: '/industries/construction-equipment',
      },
      {
        icon: <FaBuilding className="w-6 h-6" />,
        name: 'Material Handling',
        description: 'Tilt and lift cylinders for forklifts, telehandlers, and industrial dumpers.',
        href: '/industries/material-handling',
      },
      {
        icon: <FaIndustry className="w-6 h-6" />,
        name: 'Mobile Hydraulics',
        description: 'Hydraulic actuation for crane outriggers, aerial work platforms, and garbage trucks.',
        href: '/industries/mobile-hydraulics',
      },
    ],
  },

  // ── Manufacturing ──
  manufacturing: {
    heading: 'Honeywell Manufacturing Excellence',
    description: 'Our advanced manufacturing facility in Ahmedabad guarantees that every clevis cylinder is built to endure brutal mobile environments. We focus heavily on weld integrity and pin-hole tolerances to prevent premature failure.',
    steps: [
      {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: 'Forged Material Sourcing',
        description: 'Clevis mounts are machined from solid forged steel blocks (EN8/EN19) rather than cast iron, guaranteeing the highest tensile yield strength to absorb sudden shock loads without fracturing.',
      },
      {
        icon: <Settings className="w-6 h-6" />,
        title: 'Precision Line Boring',
        description: 'Post-weld distortion is eliminated by line-boring the clevis pin holes across both ears simultaneously. This ensures absolute parallel alignment for the pivot pin, preventing point-loading.',
      },
      {
        icon: <HardHat className="w-6 h-6" />,
        title: 'Bearing Assembly QA',
        description: 'Spherical bearings are cryogenically shrink-fitted into the clevis eye to ensure a permanent interference fit, preventing the bearing race from spinning out under high-frequency oscillation.',
      },
      {
        icon: <ShieldAlert className="w-6 h-6" />,
        title: 'Dynamic Load Validation',
        description: 'Completed clevis cylinders undergo rigorous multi-axis load testing at 1.5x working pressure to certify the structural welds and ensure the rod seals perform perfectly under simulated articulation.',
      },
    ],
    midCta: {
      heading: 'Need Custom Clevis Cylinders for Your Machinery?',
      description: 'Our engineers can design and manufacture cylinders based on your specific pin size, jaw width, and stroke length requirements.',
      primaryCta: { label: 'SUBMIT OEM REQUIREMENTS', href: '/request-quote/#quote-form' },
      whatsappLabel: 'WhatsApp Us',
    },
  },

  // ── Spotlights (Case Studies) ──
  spotlights: [
    {
      badge: 'CASE STUDY',
      heading: 'Upgrading Boom Cylinders for Heavy Earthmoving Excavators',
      subheading: 'Construction Equipment OEM — Gujarat, India',
      stats: [
        { value: '350', label: 'Bar Pressure' },
        { value: 'Spherical', label: 'Bearings' },
        { value: 'Zero', label: 'Pin Failures' },
      ],
      phases: [
        {
          number: '01',
          title: 'The Challenge',
          description: "An OEM manufacturing 20-ton excavators was experiencing premature seal wear and bent rods on their boom cylinders due to extreme side-loading and slight chassis deflection during heavy digging.",
        },
        {
          number: '02',
          title: 'The Engineering',
          description: "We redesigned their standard clevis cylinders by integrating heavy-duty spherical plain bearings into the rod and cap ends. We also upgraded the piston rod to induction-hardened EN19 steel for higher yield strength.",
        },
        {
          number: '03',
          variant: 'dark',
          title: 'The Outcome',
          description: "The new spherical clevis mounts successfully absorbed the multi-axis deflections. The OEM reported a total elimination of bent rods and a 300% increase in cylinder lifespan in the field.",
          cta: { label: 'READ FULL CASE STUDY', href: '#' },
        },
      ],
    },
  ],

  // ── FAQs ──
  faqs: [
    {
      question: 'What is a clevis mounted hydraulic cylinder?',
      answer: 'A clevis mounted hydraulic cylinder features a U-shaped bracket (clevis) at one or both ends. It attaches to the machine via a steel pivot pin, allowing the cylinder to swing or pivot in a single arc as it extends and retracts.'
    },
    {
      question: 'When is clevis mounting preferred over flange mounting?',
      answer: 'Clevis mounting is used when the load travels in an arc or when the machinery itself articulates (like an excavator arm or a dump truck bed). Flange mounting is used only when the load moves in a perfectly straight, fixed line (like a press).'
    },
    {
      question: 'How does clevis mounting reduce side loading?',
      answer: 'By allowing the cylinder body to pivot freely on its pin, the cylinder naturally aligns itself with the load as it moves through its arc. This prevents the bending forces (side loads) that would otherwise push laterally against the cylinder rod and destroy the internal seals.'
    },
    {
      question: 'What is the difference between a U-clevis and a spherical bearing mount?',
      answer: 'A standard U-clevis allows pivoting in only one straight arc (2D movement). A spherical bearing mount allows the cylinder to pivot and also tilt slightly side-to-side (3D movement), making it ideal for machinery where minor misalignment or chassis twisting occurs.'
    },
    {
      question: 'Can you match the pin size of my existing equipment?',
      answer: 'Yes. We custom manufacture clevis mounted cylinders with any required pin diameter, jaw width (the space between the clevis ears), and stroke length to drop perfectly into your existing machinery.'
    }
  ],

  // ── Related Products ──
  relatedProducts: {
    description: 'Explore our other hydraulic cylinder mounting styles designed for industrial applications.',
    items: [
      {
        title: 'Flange Mounted Hydraulic Cylinders',
        description: 'Rigid mounting cylinders designed for high-force straight-line industrial presses.',
        category: 'Hydraulic Cylinders',
        imageSrc: '/images/products/hydraulic-cylinders/flange-mounted-hydraulic-cylinder.webp',
        href: '/products/hydraulic-cylinders/flange-mounted-hydraulic-cylinder',
        ctaText: 'View Details',
      },
      {
        title: 'Welded Hydraulic Cylinders',
        description: 'Heavy-duty, compact cylinders designed for extreme industrial and mobile applications.',
        category: 'Hydraulic Cylinders',
        imageSrc: '/images/products/hydraulic-cylinders/welded-hydraulic-cylinders-manufacturer.webp',
        href: '/products/hydraulic-cylinders/welded-hydraulic-cylinders',
        ctaText: 'View Details',
      },
      {
        title: 'Tie Rod Hydraulic Cylinders',
        description: 'Standardized NFPA/ISO industrial cylinders held together by high-strength steel tie rods.',
        category: 'Hydraulic Cylinders',
        imageSrc: '/images/products/hydraulic-cylinders/tie-rod-hydraulic-cylinder-manufacturer.webp',
        href: '/products/hydraulic-cylinders/tie-rod-hydraulic-cylinders',
        ctaText: 'View Details',
      },
    ],
  },
};
