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

export const trunnionMountedCylinderData: ProductPageData = {
  // ── SEO ──
  seo: {
    title: 'Trunnion Mounted Hydraulic Cylinder Manufacturer | Honeywell Hydraulics',
    description: 'Heavy-duty trunnion mounted hydraulic cylinders engineered for pivoting machinery, rotary motion applications, and heavy industrial equipment.',
    url: '/products/hydraulic-cylinders/trunnion-mounted-hydraulic-cylinder',
    image: '/images/products/hydraulic-cylinders/trunnion-mounted-hydraulic-cylinder.webp',
  },

  // ── Schema ──
  schema: {
    productName: 'Trunnion Mounted Hydraulic Cylinder',
    category: 'Hydraulic Cylinders',
    properties: [
      { name: 'Mounting Style', value: 'Centerline Trunnion' },
      { name: 'Bore Size', value: 'Customizable up to 500mm' },
      { name: 'Working Pressure', value: 'Up to 350 Bar' },
      { name: 'Application', value: 'High-Load Oscillating Machinery' }
    ]
  },

  // ── Hero ──
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Hydraulic Cylinders', href: '/products/hydraulic-cylinders' },
    ],
    currentPage: 'Trunnion Mounted Cylinders',
    subtitle: 'Precision Alignment for Heavy Oscillating Loads',
    h1: 'Trunnion Mounted Hydraulic Cylinders',
    description: 'Honeywell Hydraulics manufactures heavy-duty trunnion mounted hydraulic cylinders designed for severe industrial applications requiring rotary or pivoting motion. Engineered with centerline trunnion mounts, these cylinders distribute immense forces evenly, providing exceptional stability and extremely long operating life in steel plants, presses, and construction machinery.',
    primaryCta: { label: 'REQUEST A QUOTE', href: '/request-quote/#quote-form' },
    secondaryCta: { label: 'TECHNICAL SPECS', href: '#technical-specifications' },
    image: {
      src: '/images/products/hydraulic-cylinders/trunnion-mounted-hydraulic-cylinder.webp',
      alt: 'Heavy duty trunnion mounted hydraulic cylinder manufactured in Ahmedabad, Gujarat',
    },
    keySpecs: [
      { label: 'Mounting', value: 'Centerline Trunnion' },
      { label: 'Max Bore', value: '500 mm' },
      { label: 'Pressure', value: '350 Bar' },
      { label: 'Application', value: 'Heavy Oscillating' },
    ],
  },

  // ── Overview ──
  overview: {
    heading: 'Engineered for Perfect Centerline Force Distribution',
    content: (
      <>
        <p>
          In heavy industrial applications where machinery must pivot under extreme loads, standard end-mounting methods are often insufficient. <strong className="text-honeywell-navy">Trunnion mounted hydraulic cylinders</strong> solve this by utilizing two heavy-duty pivot pins (trunnions) mounted directly to the cylinder barrel, either at the head, cap, or an intermediate position along the tube.
        </p>
        <p>
          The defining advantage of a trunnion mount is that it aligns the pivot point directly on the cylinder&apos;s true centerline. This design eliminates eccentric loading and minimizes the destructive bending moments that cause rapid rod seal and bearing failure. When the cylinder extends or retracts, the entire body can rotate smoothly within the machine&apos;s mounting blocks, effortlessly absorbing the arc of the moving load.
        </p>
        <p>
          At Honeywell Hydraulics, our trunnion cylinders are the backbone of massive industrial automation and material handling systems. We utilize ultra-high-strength forged trunnion blocks and precision machining to ensure absolute concentricity, delivering unmatched reliability for steel mills, hydraulic presses, and heavy mining equipment.
        </p>
      </>
    ),
  },

  // ── Key Features ──
  keyFeatures: {
    heading: 'Core Advantages & Design Features',
    description: 'Our trunnion mounted cylinders are engineered to provide maximum stability and longevity in heavy-duty pivoting applications.',
    showStepNumbers: false,
    items: [
      {
        icon: <ArrowUpToLine className="w-6 h-6" />,
        title: 'Centerline Load Transfer',
        description: 'Trunnion pins are mounted exactly on the cylinder\'s centerline, ensuring forces are transmitted directly along the cylinder axis.',
      },
      {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: 'Zero Eccentric Loading',
        description: 'By eliminating off-center forces, trunnion mounting drastically reduces rod bending and uneven seal wear.',
      },
      {
        icon: <HardHat className="w-6 h-6" />,
        title: 'Forged Trunnion Blocks',
        description: 'Manufactured with heavy-duty forged steel trunnions to withstand immense tensile and compressive shock loads.',
      },
      {
        icon: <ShieldAlert className="w-6 h-6" />,
        title: 'Exceptional Stability',
        description: 'Intermediate (center) trunnion mounts provide the highest degree of column strength for very long stroke cylinders.',
      },
      {
        icon: <Scale className="w-6 h-6" />,
        title: 'Precision Machining',
        description: 'Trunnion pins are precision machined to exacting tolerances to ensure perfect alignment with machinery mounting blocks.',
      },
      {
        icon: <Settings className="w-6 h-6" />,
        title: 'OEM Customization',
        description: 'Fully customizable trunnion positions (head, cap, or intermediate) to suit specific machinery design requirements.',
      },
    ],
  },

  // ── Technical Specs ──
  technicalSpecs: {
    heading: 'Technical Specifications',
    description: 'Our trunnion mounted cylinders are built using premium materials to endure the harsh realities of heavy industrial applications.',
    primaryCta: { label: 'DISCUSS YOUR PROJECT', href: '/request-quote/#quote-form' },
    secondaryCta: { label: 'VIEW ALL PRODUCTS', href: '/products/hydraulic-cylinders' },
    tableTitle: 'Trunnion Mounted Cylinder Specs',
    rows: [
      { parameter: 'Bore Diameter', value: '40 mm to 500 mm' },
      { parameter: 'Stroke Length', value: 'Up to 4000 mm (Customizable)' },
      { parameter: 'Working Pressure', value: 'Up to 350 Bar' },
      { parameter: 'Testing Pressure', value: '1.5x Working Pressure' },
      { parameter: 'Mounting Positions', value: 'Head Trunnion, Cap Trunnion, Intermediate Trunnion' },
      { parameter: 'Trunnion Pin Diameter', value: 'Custom engineered per load requirement' },
      { parameter: 'Tube Material', value: 'ST52 Seamless Honed Tube (H8 Tolerance)' },
      { parameter: 'Piston Rod', value: 'EN8 / C45 / EN19 (Hard Chrome Plated)' },
      { parameter: 'Seal Kits', value: 'Polyurethane & PTFE (Parker / Hallite)' },
      { parameter: 'Surface Finish', value: 'Anti-corrosive epoxy or polyurethane coating' },
    ],
  },

  // ── Variants ──
  variants: {
    heading: 'Available Trunnion Configurations',
    description: 'We manufacture various trunnion placement styles depending on the machinery\'s mounting geometry and stroke requirements.',
    items: [
      {
        icon: <ArrowUpToLine className="w-7 h-7" />,
        title: 'Head (Rod End) Trunnion',
        description: 'Trunnion pins are located at the front (rod end) of the cylinder barrel. This configuration provides the greatest column strength, making it ideal for long-stroke pushing applications.',
        highlights: [
          'Maximum column stability',
          'Ideal for pushing loads',
          'Reduced buckling risk'
        ],
      },
      {
        icon: <Settings className="w-7 h-7" />,
        title: 'Cap (Blind End) Trunnion',
        description: 'Trunnion pins are located at the rear (blind end) of the cylinder. This allows the entire cylinder body to pivot freely and is commonly used when space at the front of the machine is limited.',
        highlights: [
          'Full barrel pivoting',
          'Space-saving front profile',
          'Excellent for pulling loads'
        ],
      },
      {
        icon: <Scale className="w-7 h-7" />,
        title: 'Intermediate Trunnion',
        description: 'Trunnion pins are welded or clamped at a specified position along the middle of the cylinder barrel. This provides a balance of stability and pivot range for specialized OEM machinery.',
        highlights: [
          'Custom pivot balance',
          'Optimized weight distribution',
          'Versatile machinery integration'
        ],
      },
    ],
  },

  // ── Comparisons ──
  comparisons: [
    {
      heading: 'Trunnion vs. Clevis Mounted Cylinders',
      description: 'Understanding pivot dynamics is critical when designing machinery with limited space.',
      columns: [{ heading: 'Engineering Feature' }, { heading: 'Trunnion Mounted' }, { heading: 'Clevis Mounted' }],
      rows: [
        { feature: 'Pivot Location', values: [{ text: 'Center, Front, or Rear' }, { text: 'Strictly at the Ends' }] },
        { feature: 'Buckling Resistance', values: [{ text: 'Excellent (Intermediate trunnions cut column length in half)', highlight: true }, { text: 'Poor (Prone to buckling on very long strokes)' }] },
        { feature: 'Space Efficiency', values: [{ text: 'High (Can fit into tight front/rear spaces)' }, { text: 'Low (Requires full end clearance)' }] },
        { feature: 'Load Capacity', values: [{ text: 'Ultra-Heavy (Forging presses, steel mills)' }, { text: 'Heavy (Excavators, mobile equipment)' }] },
      ],
    }
  ],

  // ── Engineering / How to Choose ──
  engineering: {
    heading: 'How to Choose the Right Trunnion Cylinder',
    description: 'Trunnion placement directly dictates the mechanical column strength of the cylinder.',
    items: [
      {
        label: 'A',
        title: 'Trunnion Position (Front vs Intermediate)',
        description: 'For extreme long-stroke applications, placing an intermediate trunnion near the middle of the barrel effectively halves the column length, massively increasing the buckling strength.',
      },
      {
        label: 'B',
        title: 'Pin Sizing & Bearing Blocks',
        description: 'Trunnion pins act as the sole load-bearing axis. We calculate pin diameter based on the maximum dynamic shear force. Mating pillow blocks must be heavily lubricated or utilize self-lubricating bronze.',
      },
      {
        label: 'C',
        title: 'Machinery Clearance',
        description: 'Unlike clevis mounts, trunnions require radial clearance around the cylinder barrel to allow the pins and pillow blocks to pivot freely without striking the machine chassis.',
      },
    ],
  },

  // ── Industries ──
  industries: {
    heading: 'Applications & Industries',
    description: 'Trunnion mounted cylinders are essential for heavy industrial machinery that requires powerful articulated movement.',
    items: [
      {
        icon: <FaIndustry className="w-6 h-6" />,
        name: 'Steel Plants & Mills',
        description: 'Actuation for furnace doors, ladle tilters, and heavy continuous casting equipment.',
        href: '/industries/trunnion-mounted-hydraulic-cylinder-manufacturer-honeywell-hydraulics',
      },
      {
        icon: <HardHat className="w-6 h-6" />,
        name: 'Hydraulic Presses',
        description: 'Tilting mechanisms and specialized pressing automation requiring precise alignment.',
        href: '/industries/hydraulic-presses',
      },
      {
        icon: <FaBuilding className="w-6 h-6" />,
        name: 'Material Handling',
        description: 'Heavy-duty rotary tippers, industrial dumpers, and bulk material unloaders.',
        href: '/industries/material-handling',
      },
      {
        icon: <FaTractor className="w-6 h-6" />,
        name: 'Construction Machinery',
        description: 'High-load articulation for massive mining shovels and specialized earthmoving equipment.',
        href: '/industries/construction-machinery',
      },
    ],
  },

  // ── Manufacturing ──
  manufacturing: {
    heading: 'Honeywell Manufacturing Excellence',
    description: 'Our advanced manufacturing facility in Ahmedabad guarantees that every trunnion cylinder is built to endure brutal industrial environments. We focus heavily on trunnion block integrity and concentricity.',
    steps: [
      {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: 'Solid Forged Trunnion Blocks',
        description: 'To withstand the immense shear forces of steel mills and presses, our trunnion blocks are CNC-machined from solid high-carbon forged steel, entirely eliminating the porosity risks of cast mounts.',
      },
      {
        icon: <Settings className="w-6 h-6" />,
        title: 'Micron-Level Concentricity',
        description: 'The trunnion pins are turned on large-swing CNC lathes to ensure they are perfectly concentric with the cylinder bore axis, guaranteeing zero binding during heavy articulation.',
      },
      {
        icon: <ShieldAlert className="w-6 h-6" />,
        title: 'Sub-Arc Barrel Fusion',
        description: 'Intermediate and front trunnion blocks are permanently fused to the heavy-wall ST52 barrel using multi-pass automated sub-arc welding, creating an unyielding monolithic structure.',
      },
      {
        icon: <HardHat className="w-6 h-6" />,
        title: 'Ultrasonic Weld Inspection',
        description: 'Before dispatch, all trunnion welds undergo rigorous Non-Destructive Testing (NDT) via ultrasonic scanning to detect any microscopic sub-surface flaws, followed by 1.5x hydrostatic testing.',
      },
    ],
    midCta: {
      heading: 'Need Custom Trunnion Cylinders for Your Plant?',
      description: 'Our engineers can design and manufacture cylinders based on your specific trunnion placement, pin diameter, and stroke length requirements.',
      primaryCta: { label: 'SUBMIT OEM REQUIREMENTS', href: '/request-quote/#quote-form' },
      whatsappLabel: 'WhatsApp Us',
    },
  },

  // ── Spotlights (Case Studies) ──
  spotlights: [
    {
      badge: 'CASE STUDY',
      heading: 'Upgrading Ladle Tilting Cylinders for a Major Steel Mill',
      subheading: 'Heavy Industrial Plant — Gujarat, India',
      stats: [
        { value: '300', label: 'Bar Pressure' },
        { value: 'Intermediate', label: 'Trunnion' },
        { value: 'Zero', label: 'Seal Failures' },
      ],
      phases: [
        {
          number: '01',
          title: 'The Challenge',
          description: "A steel plant was experiencing frequent rod seal blowouts on their ladle tilting mechanisms. The existing end-mounted cylinders were suffering from severe eccentric loading due to the massive weight shift as the molten steel was poured.",
        },
        {
          number: '02',
          title: 'The Engineering',
          description: "We redesigned the system using custom intermediate trunnion mounted cylinders. By positioning the trunnion precisely at the balance point of the load\'s arc, we ensured forces were transmitted perfectly down the cylinder\'s centerline.",
        },
        {
          number: '03',
          variant: 'dark',
          title: 'The Outcome',
          description: "The centerline mounting entirely eliminated the rod bending moments. The plant saw an immediate end to premature seal failures, drastically reducing maintenance downtime in the harsh high-temperature environment.",
          cta: { label: 'READ FULL CASE STUDY', href: '#' },
        },
      ],
    },
  ],

  // ── FAQs ──
  faqs: [
    {
      question: 'What is a trunnion mounted hydraulic cylinder?',
      answer: 'A trunnion mounted hydraulic cylinder features two cylindrical pins (trunnions) protruding from the sides of the cylinder barrel. These pins act as pivot points, allowing the cylinder to swing or rotate within its mounting blocks as it operates.'
    },
    {
      question: 'When should a trunnion mount be used?',
      answer: 'Trunnion mounts should be used in applications where the machinery moves in an arc and where forces must be transmitted exactly through the cylinder\'s centerline to prevent side-loading. They are essential for heavy, oscillating industrial loads.'
    },
    {
      question: 'What is the difference between head, cap, and intermediate trunnions?',
      answer: 'Head trunnions are at the rod end and provide maximum column strength for pushing. Cap trunnions are at the rear and allow the whole barrel to pivot. Intermediate trunnions are placed in the middle of the barrel to balance stability and pivot range.'
    },
    {
      question: 'What are the advantages of trunnion mounting over clevis mounting?',
      answer: 'While both allow pivoting, a trunnion mount transfers the load directly through the cylinder\'s centerline, offering superior resistance to eccentric loads and providing greater column stability (especially with head trunnions) compared to a rear clevis mount.'
    },
    {
      question: 'Can you custom place the intermediate trunnion?',
      answer: 'Yes. For OEM applications, we can engineer and weld the intermediate trunnion at any specific point along the cylinder barrel to match your machinery\'s exact geometric requirements.'
    }
  ],

  // ── Related Products ──
  relatedProducts: {
    description: 'Explore our other hydraulic cylinder mounting styles designed for industrial applications.',
    items: [
      {
        title: 'Clevis Mounted Hydraulic Cylinders',
        description: 'Heavy-duty pivoting cylinders with forged clevis ends for mobile machinery.',
        category: 'Hydraulic Cylinders',
        imageSrc: '/images/products/hydraulic-cylinders/clevis-mounted-hydraulic-cylinder.webp',
        href: '/products/hydraulic-cylinders/clevis-mounted-hydraulic-cylinder',
        ctaText: 'View Details',
      },
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
    ],
  },
};
