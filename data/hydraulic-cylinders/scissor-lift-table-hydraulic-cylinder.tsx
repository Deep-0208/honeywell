import React from 'react';
import { ShieldCheck, ArrowUpToLine, Settings, ShieldAlert, HardHat, Scale, Cog, FlaskConical, Package, FileCheck } from 'lucide-react';
import { FaIndustry, FaBuilding, FaWarehouse } from 'react-icons/fa';
import type { ProductPageData } from '@/components/product-page/types';

export const scissorLiftCylinderData: ProductPageData = {
  // ── SEO ──
  seo: {
    title: 'Scissor Lift Table Hydraulic Cylinder Manufacturer | Honeywell Hydraulics',
    description: 'Heavy-duty hydraulic cylinder for scissor lift tables, platforms, and warehouse elevators. Engineered for synchronized lifting with up to 500 Tons capacity.',
    url: '/products/hydraulic-cylinders/scissor-lift-table-hydraulic-cylinder',
    image: '/images/products/hydraulic-cylinders/scissor-lift-table-hydraulic-cylinder.webp',
  },

  // ── Schema ──
  schema: {
    productName: 'Scissor Lift Table Hydraulic Cylinder',
    category: 'Hydraulic Cylinders',
    properties: [
      { name: 'Bore Size', value: 'Up to 700 mm' },
      { name: 'Stroke', value: 'Up to 6000 mm' },
      { name: 'Lifting Capacity', value: 'Up to 500 Tons' },
      { name: 'Working Pressure', value: 'Up to 500 Bar' }
    ]
  },

  // ── Hero ──
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Hydraulic Cylinders', href: '/products/hydraulic-cylinders' },
    ],
    currentPage: 'Scissor Lift Cylinders',
    subtitle: 'Precision-Engineered for Material Handling',
    h1: 'Scissor Lift Table Hydraulic Cylinders',
    description: 'Honeywell Hydraulics designs and manufactures high-performance hydraulic cylinders specifically engineered for scissor lift tables, stackers, and industrial lifting platforms. Built for continuous operation with zero-drift load holding capabilities.',
    primaryCta: { label: 'REQUEST A QUOTE', href: '/request-quote' },
    secondaryCta: { label: 'TECHNICAL SPECS', href: '#technical-specifications' },
    image: {
      src: '/images/products/hydraulic-cylinders/scissor-lift-table-hydraulic-cylinder.webp',
      alt: 'Heavy duty scissor lift table hydraulic cylinder manufactured in Ahmedabad, Gujarat',
    },
    keySpecs: [
      { label: 'Max Bore', value: '700 mm' },
      { label: 'Max Stroke', value: '6 Meters' },
      { label: 'Capacity', value: '500 Tons' },
      { label: 'Pressure', value: '500 Bar' },
    ],
  },

  // ── Overview ──
  overview: {
    heading: 'Heavy-Duty Hydraulic Cylinders for Scissor Platforms',
    content: (
      <>
        <p>
          Hydraulic cylinders are the primary lifting muscle behind <strong className="text-honeywell-navy">industrial scissor lift tables</strong> and warehouse material handling platforms. Operating in these environments requires absolute precision, zero-drift holding capabilities, and smooth, judder-free synchronized motion.
        </p>
        <p>
          Unlike standard cylinders, scissor lift cylinders face their highest horizontal thrust demands when the platform is fully lowered. We engineer our cylinders with high-yield strength steel tubes, heavy-duty hard-chrome plated rods, and advanced internal valving to ensure they can safely handle these immense starting loads without buckling.
        </p>
        <p>
          Whether you need a single-acting displacement cylinder for a standard warehouse lift, or a synchronized pair for a massive 100-ton tandem scissor platform, Honeywell Hydraulics delivers customized OEM solutions built for absolute reliability and long service life.
        </p>
      </>
    ),
  },

  // ── Key Features ──
  keyFeatures: {
    heading: 'Core Advantages & Safety Features',
    description: 'Our scissor lift cylinders are precision-engineered to handle heavy dynamic loads while maintaining absolute safety and smooth operation.',
    showStepNumbers: false,
    items: [
      {
        icon: <ArrowUpToLine className="w-6 h-6" />,
        title: 'Smooth & Synchronized Motion',
        description: 'Internal valving and micro-honed finishes ensure judder-free lifting, critical for assembly lines and material handling.',
      },
      {
        icon: <ShieldAlert className="w-6 h-6" />,
        title: 'Zero-Drift Load Holding',
        description: 'Advanced sealing technologies prevent internal bypassing, guaranteeing the lift table holds position without drifting under heavy continuous loads.',
      },
      {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: 'Heavy-Duty Construction',
        description: 'Manufactured with high-yield strength steel tubes and hard-chrome plated rods to withstand immense horizontal stress during initial lift phases.',
      },
      {
        icon: <Settings className="w-6 h-6" />,
        title: 'OEM Customization',
        description: 'Fully customizable mounting styles, rod ends, and fluid ports to seamlessly drop into existing or new scissor lift equipment designs.',
      },
      {
        icon: <Scale className="w-6 h-6" />,
        title: 'High Load Capacity',
        description: 'Capable of generating immense thrust to safely elevate industrial platforms with payloads up to 500 Tons.',
      },
      {
        icon: <HardHat className="w-6 h-6" />,
        title: 'Low Maintenance',
        description: 'Designed with long-lasting wiper seals and wear bands to protect against dust and debris common in warehouse environments.',
      },
    ],
  },

  // ── Technical Specs ──
  technicalSpecs: {
    heading: 'Technical Specifications',
    description: 'Our scissor lift table cylinders are manufactured using the finest quality materials to meet the rigorous demands of industrial material handling.',
    primaryCta: { label: 'DISCUSS YOUR LIFT TABLE', href: '/request-quote' },
    secondaryCta: { label: 'VIEW ALL PRODUCTS', href: '/products/hydraulic-cylinders' },
    tableTitle: 'Scissor Lift Cylinder Specs',
    rows: [
      { parameter: 'Maximum Bore Diameter', value: 'Up to 700 mm' },
      { parameter: 'Maximum Stroke Length', value: 'Up to 6000 mm (6 Meters)' },
      { parameter: 'Maximum Load Capacity', value: 'Up to 500 Tons' },
      { parameter: 'Working Pressure', value: 'Up to 500 Bar' },
      { parameter: 'Rod Material', value: 'EN8 / C45 / EN19 (Hard Chrome Plated)' },
      { parameter: 'Tube Material', value: 'Seamless Honed Tube (ST 52)' },
      { parameter: 'Seal Kits', value: 'Parker / Hallite (Zero-leakage)' },
      { parameter: 'Mounting Options', value: 'Trunnion, Clevis, Flange, Custom OEM' },
    ],
  },

  // ── Variants ──
  variants: {
    heading: 'Available Lift Table Configurations',
    description: 'We supply cylinders tailored to all types of industrial scissor lift mechanisms.',
    items: [
      {
        icon: <ArrowUpToLine className="w-7 h-7" />,
        title: 'Single Scissor Lifts',
        description: 'Standard single-acting displacement cylinders designed for high-thrust, single-level warehouse loading and unloading tables.',
        highlights: [
          'Gravity-return operation',
          'Highly cost-effective',
          'Standard lift heights'
        ],
      },
      {
        icon: <Settings className="w-7 h-7" />,
        title: 'Multi-Stage / Tandem Lifts',
        description: 'Synchronized hydraulic cylinder sets engineered for high-elevation or extra-long tandem lift platforms.',
        highlights: [
          'Precision synchronization',
          'Prevents platform tilt',
          'For extended platforms'
        ],
      },
      {
        icon: <Scale className="w-7 h-7" />,
        title: 'Heavy-Duty Industrial Platforms',
        description: 'Large-bore cylinders built to handle massive payloads for aerospace, automotive, and metallurgy sectors.',
        highlights: [
          'Up to 500 Tons capacity',
          'Extreme thrust force',
          'Thick-walled ST52 tubes'
        ],
      },
    ],
  },

  // ── Engineering / How to Choose ──
  engineering: {
    heading: 'Engineering Considerations for Scissor Lifts',
    description: 'Scissor mechanisms create extreme mechanical disadvantage at the start of the stroke, requiring precise cylinder specifications.',
    items: [
      {
        label: 'A',
        title: 'Leveraged Load Calculation',
        description: 'Unlike direct-acting lifts, a scissor lift cylinder must push horizontally to force the scissor arms apart and lift vertically. When the table is fully collapsed (flat), the required thrust force can be 5x to 10x the actual payload weight. We calculate exact bore sizes based on your scissor geometry to ensure sufficient breakaway force.',
      },
      {
        label: 'B',
        title: 'Trunnion Placement & Strength',
        description: 'Scissor lift cylinders pivot during extension. We engineer high-strength cross-tube trunnions or heavy-duty clevis mounts specifically welded to handle the extreme shear stress generated during the initial lift phase.',
      },
      {
        label: 'C',
        title: 'Stroke-to-Lift Ratio',
        description: 'A small cylinder stroke translates to a massive vertical lift due to the scissor leverage. This amplifies any jitter or stick-slip in the cylinder. We utilize micro-honed barrels and low-friction seals to guarantee smooth elevation of the platform.',
      },
    ],
  },

  // ── Industries ──
  industries: {
    heading: 'Applications & Industries',
    description: 'Our scissor lift cylinders are trusted by OEMs and facilities across various demanding industrial sectors.',
    items: [
      {
        icon: <FaWarehouse className="w-6 h-6" />,
        name: 'Warehouse & Logistics',
        description: 'Loading bay platforms, dock levelers, and pallet handling scissor lifts.',
        href: '/industries/scissor-lift-table-hydraulic-cylinder-manufacturer-honeywell-hydraulics',
      },
      {
        icon: <FaIndustry className="w-6 h-6" />,
        name: 'Automotive Manufacturing',
        description: 'Vehicle assembly line lifts and ergonomic worker positioning tables.',
        href: '/industries/automotive-manufacturing',
      },
      {
        icon: <FaBuilding className="w-6 h-6" />,
        name: 'Industrial Facilities',
        description: 'Maintenance platforms, heavy machinery lifting, and material transfer stations.',
        href: '/industries/industrial-facilities',
      },
    ],
  },

  // ── Manufacturing ──
  manufacturing: {
    heading: 'Honeywell Manufacturing Excellence',
    description: 'Located in Ahmedabad, Gujarat, our state-of-the-art facility strictly adheres to international manufacturing standards. Every scissor lift cylinder undergoes rigorous pressure testing to guarantee absolute reliability under maximum payload before dispatch.',
    steps: [
      {
        icon: <Cog className="w-6 h-6" />,
        title: 'Heavy-Wall Barrel Sourcing',
        description: 'Because scissor lift cylinders experience extreme internal pressure spikes during the initial flat-lift phase, we utilize ultra-thick ST52 seamless tubes specifically selected to prevent barrel ballooning.',
      },
      {
        icon: <FlaskConical className="w-6 h-6" />,
        title: 'High-Shear Trunnion Welding',
        description: 'Mounting trunnions and clevises are robotically welded with deep penetration techniques to ensure they can withstand the immense shear forces of lifting a collapsed scissor mechanism.',
      },
      {
        icon: <ShieldAlert className="w-6 h-6" />,
        title: 'Polyurethane Seal Fitting',
        description: 'We install heavy-duty Polyurethane U-cups and rigid wear bands designed to handle high-pressure spikes and slight side-loading as the cylinder pivots through its arc.',
      },
      {
        icon: <Package className="w-6 h-6" />,
        title: 'High-Pressure Burst Testing',
        description: 'To simulate the extreme breakaway force required to lift a fully loaded, completely collapsed scissor table, every cylinder undergoes a rigorous peak-pressure hydrostatic test before dispatch.',
      },
    ],
    midCta: {
      heading: 'Need Cylinders for Your Scissor Lifts?',
      description: 'Our engineers can design and manufacture cylinders in volume based on your specific platform size and lifting height requirements.',
      primaryCta: { label: 'SUBMIT OEM REQUIREMENTS', href: '/request-quote' },
      whatsappLabel: 'WhatsApp Us',
    },
  },

  // ── Spotlights (Case Studies) ──
  spotlights: [
    {
      badge: 'CASE STUDY',
      heading: 'Heavy-Duty Synchronized Cylinders for an Automotive Assembly Line',
      subheading: 'Vehicle Manufacturing Plant — Pune, Maharashtra',
      stats: [
        { value: '50', label: 'Ton Capacity' },
        { value: '24/7', label: 'Continuous Operation' },
        { value: 'Zero', label: 'Platform Drift' },
      ],
      phases: [
        {
          number: '01',
          title: 'The Challenge',
          description: "An automotive manufacturer required a highly reliable set of synchronized cylinders for a massive tandem scissor lift used to elevate heavy vehicle chassis on the assembly line. Zero platform drift was critical to ensure worker safety.",
        },
        {
          number: '02',
          title: 'The Engineering',
          description: "We manufactured custom large-bore double-acting cylinders featuring heavy hard-chrome plated rods and premium Hallite seals. We integrated pilot-operated check valves directly onto the cylinder ports to guarantee absolute zero-drift holding.",
        },
        {
          number: '03',
          variant: 'dark',
          title: 'The Outcome',
          description: "The cylinders were successfully integrated into the assembly line, providing perfectly synchronized, judder-free lifting with zero reported drift over three years of continuous high-cycle operation.",
          cta: { label: 'READ FULL CASE STUDY', href: '#' },
        },
      ],
    },
  ],

  // ── FAQs ──
  faqs: [
    {
      question: 'Which type of hydraulic cylinder is best for a scissor lift table?',
      answer: 'Scissor lift tables typically use single-acting cylinders (where gravity lowers the platform) or double-acting cylinders (for powered lowering). The choice depends on the required lowering speed, platform weight, and control precision.'
    },
    {
      question: 'What is the maximum lifting capacity of your scissor lift cylinders?',
      answer: 'We manufacture heavy-duty hydraulic cylinders capable of generating enough thrust to lift industrial platforms with payloads up to 500 Tons.'
    },
    {
      question: 'How do you prevent the lift table from dropping unexpectedly?',
      answer: 'Our cylinders are integrated with high-grade, zero-leakage seal kits and can be fitted with integrated pilot-operated check valves (PO check valves) or rupture valves to lock the cylinder in place and prevent catastrophic drops in case of hose failure.'
    },
    {
      question: 'Can you manufacture custom cylinders for existing lift platforms?',
      answer: 'Yes. As an OEM manufacturer, we can design and build custom hydraulic cylinders that precisely match the mounting dimensions, stroke length, and bore requirements of your existing scissor lift equipment.'
    },
    {
      question: 'Why does a scissor lift cylinder need high thrust at the start of the stroke?',
      answer: 'Due to the mechanical geometry of a scissor mechanism, the highest horizontal force is required when the platform is fully lowered. Our cylinders are engineered with sufficient bore size and structural integrity to handle this massive initial horizontal stress safely without buckling.'
    }
  ],

  // ── Related Products ──
  relatedProducts: {
    description: 'Explore our other hydraulic cylinders and power units designed for industrial material handling.',
    items: [
      {
        title: 'Goods Lift Hydraulic Cylinders',
        description: 'Heavy-duty cylinders with integrated safety rupture valves for industrial freight elevators.',
        category: 'Hydraulic Cylinders',
        imageSrc: '/images/products/hydraulic-cylinders/goods-lift-hydraulic-cylinder-v2.webp',
        href: '/products/hydraulic-cylinders/goods-lift-hydraulic-cylinders',
        ctaText: 'View Details',
      },
      {
        title: 'Double Acting Hydraulic Cylinders',
        description: 'Versatile cylinders providing powered force in both extension and retraction strokes.',
        category: 'Hydraulic Cylinders',
        imageSrc: '/images/products/hydraulic-cylinders/double-acting-hydraulic-cylinders-manufacturer.webp',
        href: '/products/hydraulic-cylinders/double-acting-hydraulic-cylinders',
        ctaText: 'View Details',
      },
      {
        title: 'Hydraulic Power Packs',
        description: 'Custom engineered power units to drive your scissor lift hydraulic cylinders.',
        category: 'Power Packs',
        imageSrc: '/images/products/hydraulic-power-packs/hydraulic-power-pack-manufacturer.webp',
        href: '/products/hydraulic-power-packs',
        ctaText: 'View Details',
      },
    ],
  },
};
