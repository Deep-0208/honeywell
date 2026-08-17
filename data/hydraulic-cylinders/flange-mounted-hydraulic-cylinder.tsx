import React from 'react';
import { ShieldCheck, ArrowUpToLine, Settings, ShieldAlert, HardHat, Scale, Cog, FlaskConical, Package, FileCheck } from 'lucide-react';
import { FaIndustry, FaBuilding, FaWarehouse, FaCogs } from 'react-icons/fa';
import type { ProductPageData } from '@/components/product-page/types';

export const flangeMountedCylinderData: ProductPageData = {
  // ── SEO ──
  seo: {
    title: 'Flange Mounted Hydraulic Cylinder Manufacturer | Honeywell Hydraulics',
    description: 'Heavy-duty flange mounted hydraulic cylinders for industrial machinery and presses. Engineered for rigid mounting and high-force linear motion.',
    url: '/products/hydraulic-cylinders/flange-mounted-hydraulic-cylinder',
    image: '/images/products/hydraulic-cylinders/flange-mounted-hydraulic-cylinder.webp',
  },

  // ── Schema ──
  schema: {
    productName: 'Flange Mounted Hydraulic Cylinder',
    category: 'Hydraulic Cylinders',
    properties: [
      { name: 'Mounting Style', value: 'Front Flange & Rear Flange' },
      { name: 'Bore Size', value: 'Up to 500 mm' },
      { name: 'Working Pressure', value: 'Up to 350 Bar' },
      { name: 'Application', value: 'Industrial Machinery & Presses' }
    ]
  },

  // ── Hero ──
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products/' },
      { label: 'Hydraulic Cylinders', href: '/products/hydraulic-cylinders/' },
    ],
    currentPage: 'Flange Mounted Cylinders',
    subtitle: 'Rigid Mounting for High-Force Linear Motion',
    h1: 'Flange Mounted Hydraulic Cylinders',
    description: 'Honeywell Hydraulics designs and manufactures high-performance flange mounted hydraulic cylinders. Engineered for fixed industrial installations where absolute rigidity and precise alignment are critical, these cylinders deliver reliable high-force motion for heavy machinery, presses, and automation systems.',
    primaryCta: { label: 'REQUEST A QUOTE', href: '/request-quote/#quote-form' },
    secondaryCta: { label: 'TECHNICAL SPECS', href: '#technical-specifications' },
    image: {
      src: '/images/products/hydraulic-cylinders/flange-mounted-hydraulic-cylinder.webp',
      alt: 'Heavy duty flange mounted hydraulic cylinder manufactured in Ahmedabad, Gujarat',
    },
    keySpecs: [
      { label: 'Mounting', value: 'Front / Rear Flange' },
      { label: 'Max Bore', value: '500 mm' },
      { label: 'Pressure', value: '350 Bar' },
      { label: 'Durability', value: 'Heavy-Duty Use' },
    ],
  },

  // ── Overview ──
  overview: {
    heading: 'Engineered for Absolute Rigidity in Industrial Machinery',
    content: (
      <>
        <p>
          In heavy-duty industrial applications, <strong className="text-honeywell-navy">flange mounted hydraulic cylinders</strong> provide the most secure and rigid method of transferring high-force linear motion. By bolting the cylinder directly to a machine structure via a heavy steel flange, the cylinder becomes an integral part of the machinery, eliminating unwanted movement and vibration.
        </p>
        <p>
          Unlike pivot-mounted cylinders (such as clevis or trunnion styles) which allow for arc movement, flange mounts are designed exclusively for straight-line force transfer. This makes them the standard choice for hydraulic presses, machine tools, plastic injection molding machines, and heavy material handling equipment where perfect alignment is non-negotiable.
        </p>
        <p>
          At Honeywell Hydraulics, we manufacture both Front Flange and Rear Flange configurations using high-grade ST52 seamless tubes and precision-machined steel flanges. Our cylinders are built to withstand immense continuous pressure while delivering flawless, repeatable performance in the most demanding manufacturing environments.
        </p>
      </>
    ),
  },

  // ── Key Features ──
  keyFeatures: {
    heading: 'Core Advantages & Design Features',
    description: 'Our flange mounted cylinders are precision-engineered to handle heavy industrial loads while maintaining absolute structural integrity.',
    showStepNumbers: false,
    items: [
      {
        icon: <ArrowUpToLine className="w-6 h-6" />,
        title: 'Rigid & Secure Mounting',
        description: 'The solid bolted flange connection ensures maximum rigidity, preventing any flexing or movement during high-pressure strokes.',
      },
      {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: 'Precise Alignment',
        description: 'Machined with strict tolerances to guarantee perfect perpendicular or parallel alignment with the machine structure.',
      },
      {
        icon: <Scale className="w-6 h-6" />,
        title: 'High-Force Transfer',
        description: 'Ideal for applications requiring immense pushing or pulling forces in a strictly linear path, such as industrial presses.',
      },
      {
        icon: <ShieldAlert className="w-6 h-6" />,
        title: 'Leak-Proof Sealing',
        description: 'Equipped with premium polyurethane and PTFE seals from Parker or Hallite to ensure zero leakage even in continuous operation.',
      },
      {
        icon: <HardHat className="w-6 h-6" />,
        title: 'Heavy-Duty Construction',
        description: 'Manufactured from high-yield strength ST52 steel tubes and hard-chrome plated EN8/EN19 rods to withstand extreme industrial environments.',
      },
      {
        icon: <Settings className="w-6 h-6" />,
        title: 'OEM Customization',
        description: 'Fully customizable flange dimensions, bolt patterns, bore sizes, and stroke lengths to match your exact machinery specifications.',
      },
    ],
  },

  // ── Technical Specs ──
  technicalSpecs: {
    heading: 'Technical Specifications',
    description: 'Our flange mounted hydraulic cylinders are built to exact tolerances using premium materials for maximum durability.',
    primaryCta: { label: 'DISCUSS YOUR PROJECT', href: '/request-quote/#quote-form' },
    secondaryCta: { label: 'VIEW ALL PRODUCTS', href: '/products/hydraulic-cylinders/' },
    tableTitle: 'Flange Mounted Cylinder Specs',
    rows: [
      { parameter: 'Bore Diameter', value: '40 mm to 500 mm' },
      { parameter: 'Stroke Length', value: 'Up to 3000 mm (Customizable)' },
      { parameter: 'Working Pressure', value: 'Up to 350 Bar' },
      { parameter: 'Testing Pressure', value: '1.5x Working Pressure' },
      { parameter: 'Mounting Style', value: 'Front Flange (Head) or Rear Flange (Cap)' },
      { parameter: 'Tube Material', value: 'ST52 Seamless Honed Tube (H8 Tolerance)' },
      { parameter: 'Piston Rod', value: 'EN8 / C45 / EN19 (Hard Chrome Plated)' },
      { parameter: 'Seal Kits', value: 'Premium Polyurethane (Parker / Hallite equivalent)' },
      { parameter: 'Operating Temperature', value: '-20°C to +80°C (High temp seals available)' },
      { parameter: 'Fluid Compatibility', value: 'Mineral Hydraulic Oils (HL, HLP)' },
    ],
  },

  // ── Variants ──
  variants: {
    heading: 'Available Flange Configurations',
    description: 'We manufacture both standard flange configurations based on your application\'s force requirements.',
    items: [
      {
        icon: <ArrowUpToLine className="w-7 h-7" />,
        title: 'Front Flange Mounted (Head Mount)',
        description: 'The flange is located at the rod end (head) of the cylinder. This is the strongest configuration for pulling loads (tension) because the mounting bolts are put into compression.',
        highlights: [
          'Best for pulling applications',
          'Flange located at rod end',
          'High tension strength'
        ],
      },
      {
        icon: <Settings className="w-7 h-7" />,
        title: 'Rear Flange Mounted (Cap Mount)',
        description: 'The flange is located at the base (cap) of the cylinder. This is the optimal configuration for pushing loads (compression) as the cylinder body is fully supported by the machine frame.',
        highlights: [
          'Best for pushing applications',
          'Flange located at base end',
          'Excellent for hydraulic presses'
        ],
      },
      {
        icon: <Scale className="w-7 h-7" />,
        title: 'Custom Rectangular / Square Flanges',
        description: 'While circular flanges are standard, we regularly manufacture square, rectangular, or completely custom flange shapes with specific bolt patterns to retrofit existing machinery.',
        highlights: [
          'Retrofit compatibility',
          'Custom bolt circles',
          'Specialized shapes'
        ],
      },
    ],
  },

  // ── Comparisons ──
  comparisons: [
    {
      heading: 'Flange Mounted vs. Clevis / Trunnion Mounted Cylinders',
      description: 'Understanding when to specify a fixed flange versus a pivoting mount.',
      columns: [{ heading: 'Engineering Feature' }, { heading: 'Flange Mounted' }, { heading: 'Clevis/Trunnion Mounted' }],
      rows: [
        { feature: 'Motion Arc', values: [{ text: 'Strictly Linear (Zero pivot)', highlight: true }, { text: 'Articulating (Pivots during stroke)' }] },
        { feature: 'Frame Rigidity Requirement', values: [{ text: 'Extremely High (Must absorb all bending moments)' }, { text: 'Lower (Allows for slight misalignment)' }] },
        { feature: 'Side-Load Vulnerability', values: [{ text: 'High (Rod acts as a cantilever)' }, { text: 'Low (Mount absorbs the lateral shift)' }] },
        { feature: 'Typical Application', values: [{ text: 'Presses, Machine Tools, Injection Molding' }, { text: 'Excavators, Cranes, Mobile Equipment' }] },
      ],
    }
  ],

  // ── Engineering / How to Choose ──
  engineering: {
    heading: 'Engineering Considerations for Flange Mounts',
    description: 'Specifying a flange mounted cylinder requires careful analysis of tension versus compression forces.',
    items: [
      {
        label: 'A',
        title: 'Front vs. Rear Flange Selection',
        description: 'If your application primarily pushes (compressive force), you must specify a rear (cap) flange so the load is transferred through the cylinder body into the machine frame. If your application primarily pulls (tensile force), specify a front (head) flange to put the mounting bolts into safe compression rather than shear stress.',
      },
      {
        label: 'B',
        title: 'Machine Frame Rigidity',
        description: 'Because a flange mount fixes the cylinder rigidly to the machine, it cannot pivot to compensate for misalignment. If the moving load shifts laterally, the entire side-load force is transferred to the cylinder rod, which can cause rapid seal failure or rod bending. The machine guides must be exceptionally rigid.',
      },
      {
        label: 'C',
        title: 'Tensile Bolt Loading',
        description: 'When a front flange is used for pushing, or a rear flange is used for pulling, the mounting bolts are subjected to extreme tensile stress. We calculate bolt-circle diameters and specify high-tensile fasteners to ensure the flange does not tear away from the machine chassis.',
      },
    ],
  },

  // ── Industries ──
  industries: {
    heading: 'Applications & Industries',
    description: 'Flange mounted cylinders are the backbone of fixed industrial machinery across heavy manufacturing sectors.',
    items: [
      {
        icon: <FaCogs className="w-6 h-6" />,
        name: 'Machine Tools',
        description: 'Providing precise linear actuation for CNC machines, lathes, and automated cutting equipment.',
        href: '#',
      },
      {
        icon: <FaIndustry className="w-6 h-6" />,
        name: 'Hydraulic Presses',
        description: 'Generating immense pushing force for metal stamping, forming, and plastic injection molding.',
        href: '#',
      },
      {
        icon: <FaBuilding className="w-6 h-6" />,
        name: 'Steel Processing',
        description: 'Heavy-duty actuation for steel mill equipment, shears, and continuous casting machines.',
        href: '#',
      },
      {
        icon: <FaWarehouse className="w-6 h-6" />,
        name: 'Industrial Automation',
        description: 'Fixed-position actuation for automated assembly lines, packaging machinery, and material handling.',
        href: '#',
      },
    ],
  },

  // ── Manufacturing ──
  manufacturing: {
    heading: 'Honeywell Manufacturing Excellence',
    description: 'Based in Ahmedabad, Gujarat, our ISO-compliant manufacturing facility utilizes advanced CNC machining to ensure the flanges on our cylinders are perfectly perpendicular to the cylinder axis, guaranteeing flawless alignment in your machinery.',
    steps: [
      {
        icon: <Cog className="w-6 h-6" />,
        title: 'Forged Flange Sourcing',
        description: 'To prevent stress fractures under heavy load, we utilize single-piece forged steel flanges rather than standard mild-steel plate cutouts, ensuring maximum tensile strength at the bolt circle.',
      },
      {
        icon: <FlaskConical className="w-6 h-6" />,
        title: 'Concentric Flange Welding',
        description: 'Flanges are mated to the ST52 barrels using precision rotary friction welding or deep-penetration automated MIG, ensuring absolute concentricity between the bolt pattern and the internal cylinder bore.',
      },
      {
        icon: <FileCheck className="w-6 h-6" />,
        title: 'Face Runout Machining',
        description: 'After welding, the entire assembly is chucked in a heavy lathe to face off the flange mounting surface. This guarantees perfect perpendicularity, eliminating the risk of rod-binding when bolted to your machine frame.',
      },
      {
        icon: <Package className="w-6 h-6" />,
        title: 'Bolt-Shear & Pressure Testing',
        description: 'In addition to standard 1.5x hydrostatic testing for seal integrity, custom-flange orders undergo simulated shear-load testing to verify the mechanical strength of the weld joint.',
      },
    ],
    midCta: {
      heading: 'Need Flange Mounted Cylinders for Your Machinery?',
      description: 'Our engineers can design and manufacture cylinders based on your specific force requirements, mounting constraints, and stroke lengths.',
      primaryCta: { label: 'SUBMIT OEM REQUIREMENTS', href: '/request-quote/#quote-form' },
      whatsappLabel: 'WhatsApp Us',
    },
  },

  // ── Spotlights (Case Studies) ──
  spotlights: [
    {
      badge: 'CASE STUDY',
      heading: 'Heavy-Duty Rear Flange Cylinders for a 200-Ton Hydraulic Press',
      subheading: 'Metal Stamping Facility — Pune, Maharashtra',
      stats: [
        { value: '250', label: 'mm Bore' },
        { value: '300', label: 'Bar Pressure' },
        { value: '24/7', label: 'Continuous Operation' },
      ],
      phases: [
        {
          number: '01',
          title: 'The Challenge',
          description: "A metal stamping manufacturer required a robust replacement cylinder for a 200-ton hydraulic press. The existing cylinder suffered from flange weld failures due to immense repetitive pushing forces and slight misalignment.",
        },
        {
          number: '02',
          title: 'The Engineering',
          description: "We manufactured a custom rear-flange mounted cylinder. To prevent weld failure, the rear flange and base cap were machined from a single solid block of forged steel. We utilized a heavy-duty ST52 tube and high-temperature Hallite seals to withstand continuous operation.",
        },
        {
          number: '03',
          variant: 'dark',
          title: 'The Outcome',
          description: "The newly installed cylinder provided perfect alignment and easily handled the 200-ton pushing force. The solid rear-flange design completely eliminated the previous structural failures, significantly increasing the press's uptime.",
          cta: { label: 'READ FULL CASE STUDY', href: '#' },
        },
      ],
    },
  ],

  // ── FAQs ──
  faqs: [
    {
      question: 'What is a flange mounted hydraulic cylinder?',
      answer: 'A flange mounted hydraulic cylinder features a flat, heavy steel plate (flange) welded or machined onto the front or rear of the cylinder body. This flange is bolted directly to a machine structure, providing a highly rigid, fixed-position mounting style.'
    },
    {
      question: 'When should I use a front flange vs a rear flange mount?',
      answer: 'Use a Front Flange (mounted at the rod end) for pulling applications (tension), as this puts the mounting bolts in compression, which is stronger. Use a Rear Flange (mounted at the base) for pushing applications (compression), as the cylinder body is fully supported by the machine frame.'
    },
    {
      question: 'Can flange mounted cylinders handle side loads?',
      answer: 'No. Flange mounted cylinders are rigidly fixed in place and do not pivot. Therefore, the load must travel in a perfectly straight line aligned with the cylinder rod. Any side loading or misalignment will cause rapid seal wear, rod bending, or catastrophic failure.'
    },
    {
      question: 'What materials are used for the flanges?',
      answer: 'Our flanges are typically CNC machined from high-strength forged steel or heavy MS (Mild Steel) plates, depending on the pressure rating. High-pressure applications often utilize flanges machined directly from solid billets for maximum strength.'
    },
    {
      question: 'Do you manufacture custom flange bolt patterns?',
      answer: 'Yes. As an OEM manufacturer, we can machine the flange to any shape (circular, square, rectangular) and drill custom bolt hole patterns to perfectly match your existing machinery or new engineering designs.'
    }
  ],

  // ── Related Products ──
  relatedProducts: {
    description: 'Explore our other hydraulic cylinder mounting styles designed for industrial applications.',
    items: [
      {
        title: 'Tie Rod Hydraulic Cylinders',
        description: 'Standardized NFPA/ISO industrial cylinders held together by high-strength steel tie rods.',
        category: 'Hydraulic Cylinders',
        imageSrc: '/images/products/hydraulic-cylinders/tie-rod-hydraulic-cylinder-manufacturer.webp',
        href: '/products/hydraulic-cylinders/tie-rod-hydraulic-cylinders/',
        ctaText: 'View Details',
      },
      {
        title: 'Welded Hydraulic Cylinders',
        description: 'Heavy-duty, compact cylinders designed for extreme industrial and mobile applications.',
        category: 'Hydraulic Cylinders',
        imageSrc: '/images/products/hydraulic-cylinders/welded-hydraulic-cylinders-manufacturer.webp',
        href: '/products/hydraulic-cylinders/welded-hydraulic-cylinders/',
        ctaText: 'View Details',
      },
      {
        title: 'Custom Hydraulic Cylinders',
        description: 'Purpose-built hydraulic cylinders engineered to your exact specifications and mounting requirements.',
        category: 'Hydraulic Cylinders',
        imageSrc: '/images/products/hydraulic-cylinders/custom-hydraulic-cylinder-manufacturer.webp',
        href: '/products/hydraulic-cylinders/custom-hydraulic-cylinders/',
        ctaText: 'View Details',
      },
    ],
  },
};
