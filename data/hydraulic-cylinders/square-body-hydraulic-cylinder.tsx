import React from 'react';
import { ShieldCheck, ArrowUpToLine, Settings, ShieldAlert, HardHat, Scale, Cog, FlaskConical, Package, FileCheck } from 'lucide-react';
import { FaIndustry, FaBuilding, FaWarehouse, FaTractor } from 'react-icons/fa';
import type { ProductPageData } from '@/components/product-page/types';

export const squareBodyCylinderData: ProductPageData = {
  // ── SEO ──
  seo: {
    title: 'Square Body Hydraulic Cylinder Manufacturer | Honeywell Hydraulics',
    description: 'Heavy-duty square body hydraulic cylinders engineered for compact high-strength industrial applications, machine tools, and automation systems.',
    url: '/products/hydraulic-cylinders/square-body-hydraulic-cylinder',
    image: '/images/products/hydraulic-cylinders/square-body-hydraulic-cylinder.webp',
  },

  // ── Schema ──
  schema: {
    productName: 'Square Body Hydraulic Cylinder',
    category: 'Hydraulic Cylinders',
    properties: [
      { name: 'Body Construction', value: 'Welded Square Profile' },
      { name: 'Bore Size', value: 'Customizable up to 500mm' },
      { name: 'Working Pressure', value: 'Up to 350 Bar' },
      { name: 'Application', value: 'High-Pressure Industrial Machinery' }
    ]
  },

  // ── Hero ──
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Hydraulic Cylinders', href: '/products/hydraulic-cylinders' },
    ],
    currentPage: 'Square Body Cylinders',
    subtitle: 'High Structural Rigidity for Compact Installations',
    h1: 'Square Body Hydraulic Cylinders',
    description: 'Honeywell Hydraulics manufactures heavy-duty square body hydraulic cylinders designed for severe industrial applications where space is limited but high structural rigidity is required. Engineered with a robust welded square profile, these cylinders offer exceptional strength and precise mounting alignment for machine tools, steel plants, and industrial automation.',
    primaryCta: { label: 'REQUEST A QUOTE', href: '/request-quote' },
    secondaryCta: { label: 'TECHNICAL SPECS', href: '#technical-specifications' },
    image: {
      src: '/images/products/hydraulic-cylinders/square-body-hydraulic-cylinder.webp',
      alt: 'Heavy duty square body hydraulic cylinder manufactured in Ahmedabad, Gujarat',
    },
    keySpecs: [
      { label: 'Body Type', value: 'Square Welded' },
      { label: 'Max Bore', value: '500 mm' },
      { label: 'Pressure', value: '350 Bar' },
      { label: 'Application', value: 'Heavy Industrial' },
    ],
  },

  // ── Overview ──
  overview: {
    heading: 'Engineered for Maximum Strength in Minimal Space',
    content: (
      <>
        <p>
          In complex industrial machinery and high-pressure manufacturing environments, standard round-body cylinders often present challenges for secure mounting and space optimization. <strong className="text-honeywell-navy">Square body hydraulic cylinders</strong> resolve these issues through their inherent geometric advantages. The flat surfaces of the square profile allow for extremely rigid, flush mounting directly against machine frames without the need for bulky external brackets or flanges.
        </p>
        <p>
          The thick-walled square construction acts as a built-in structural reinforcement. This design drastically increases the cylinder&apos;s overall rigidity and resistance to lateral deflection and twisting forces. Furthermore, the square profile enables a cleaner, more compact integration into tight spaces, making them the preferred choice for modern CNC machine tools, specialized hydraulic presses, and advanced material handling automation.
        </p>
        <p>
          At Honeywell Hydraulics, we manufacture custom square body cylinders tailored to the most demanding industrial specifications. Utilizing deep-penetration welding techniques and precision boring, we deliver leak-proof, heavy-duty actuation solutions that provide reliable, long-lasting performance in steel mills, automotive manufacturing plants, and heavy fabrication facilities.
        </p>
      </>
    ),
  },

  // ── Key Features ──
  keyFeatures: {
    heading: 'Core Advantages & Design Features',
    description: 'Our square body cylinders are engineered to provide maximum rigidity and durability in compact heavy-duty applications.',
    showStepNumbers: false,
    items: [
      {
        icon: <ArrowUpToLine className="w-6 h-6" />,
        title: 'Compact Installation',
        description: 'The flat square profile allows for flush, low-profile mounting directly against machinery frames, saving critical space.',
      },
      {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: 'High Structural Rigidity',
        description: 'The thick-walled square construction provides superior resistance to lateral bending and torsional twisting forces.',
      },
      {
        icon: <HardHat className="w-6 h-6" />,
        title: 'Heavy-Duty Welded Design',
        description: 'Manufactured with automated deep-penetration welding to ensure absolute structural integrity under extreme pressure.',
      },
      {
        icon: <ShieldAlert className="w-6 h-6" />,
        title: 'Precision Alignment',
        description: 'Flat mounting surfaces simplify installation and ensure precise linear alignment, reducing rod seal wear.',
      },
      {
        icon: <Scale className="w-6 h-6" />,
        title: 'Versatile Mounting',
        description: 'Supports various mounting styles including direct body tapping, through-holes, and custom integrated flanges.',
      },
      {
        icon: <Settings className="w-6 h-6" />,
        title: 'OEM Customization',
        description: 'Fully customizable bore sizes, strokes, and port orientations to integrate perfectly into specialized machinery.',
      },
    ],
  },

  // ── Technical Specs ──
  technicalSpecs: {
    heading: 'Technical Specifications',
    description: 'Our square body cylinders are built using premium materials to endure the harsh realities of heavy industrial applications.',
    primaryCta: { label: 'DISCUSS YOUR PROJECT', href: '/request-quote' },
    secondaryCta: { label: 'VIEW ALL PRODUCTS', href: '/products/hydraulic-cylinders' },
    tableTitle: 'Square Body Cylinder Specs',
    rows: [
      { parameter: 'Bore Diameter', value: '40 mm to 500 mm' },
      { parameter: 'Stroke Length', value: 'Up to 4000 mm (Customizable)' },
      { parameter: 'Working Pressure', value: 'Up to 350 Bar' },
      { parameter: 'Testing Pressure', value: '1.5x Working Pressure' },
      { parameter: 'Mounting Options', value: 'Direct Tapped, Through-Hole, Integrated Flange' },
      { parameter: 'Body Construction', value: 'Heavy-duty welded square steel profile' },
      { parameter: 'Tube Material', value: 'ST52 Seamless Honed Tube (H8 Tolerance)' },
      { parameter: 'Piston Rod', value: 'EN8 / C45 / EN19 (Hard Chrome Plated)' },
      { parameter: 'Seal Kits', value: 'Polyurethane & PTFE (Parker / Hallite)' },
      { parameter: 'Surface Finish', value: 'Anti-corrosive epoxy or polyurethane coating' },
    ],
  },

  // ── Variants ──
  variants: {
    heading: 'Available Mounting Configurations',
    description: 'The square body design allows for highly versatile and rigid mounting directly to machine frames.',
    items: [
      {
        icon: <ArrowUpToLine className="w-7 h-7" />,
        title: 'Direct Tapped Body Mount',
        description: 'The flat surfaces of the square body are precision-tapped with threaded holes. This allows the cylinder to be bolted directly against a machine plate without any external brackets.',
        highlights: [
          'Most compact installation',
          'Extremely rigid connection',
          'Clean, bracket-free design'
        ],
      },
      {
        icon: <Settings className="w-7 h-7" />,
        title: 'Through-Hole Body Mount',
        description: 'Unthreaded clearance holes are drilled straight through the solid square body, allowing long mounting bolts to pass completely through the cylinder and secure it to the frame.',
        highlights: [
          'High tensile securing',
          'Easy bolt-through installation',
          'Excellent load distribution'
        ],
      },
      {
        icon: <Scale className="w-7 h-7" />,
        title: 'Integrated Flange Mount',
        description: 'A custom mounting flange is welded directly onto the square body (front or rear), combining the structural benefits of the square profile with traditional flange mounting.',
        highlights: [
          'Maximum straight-line force',
          'Replaces legacy flange cylinders',
          'Superior push/pull stability'
        ],
      },
    ],
  },

  // ── Comparisons ──
  comparisons: [
    {
      heading: 'Square Body vs. Tie-Rod Cylinders',
      description: 'Understanding when to utilize a square profile instead of a traditional NFPA tie-rod design.',
      columns: [{ heading: 'Engineering Feature' }, { heading: 'Square Body Cylinders' }, { heading: 'Tie-Rod Cylinders' }],
      rows: [
        { feature: 'Space Profile', values: [{ text: 'Ultra-Compact (No protruding bolts)', highlight: true }, { text: 'Bulky (Tie-rods extend past the barrel)' }] },
        { feature: 'Mounting Style', values: [{ text: 'Flush against machine plates' }, { text: 'Requires external brackets or extended tie-rods' }] },
        { feature: 'Cleanliness', values: [{ text: 'Excellent (Smooth flat sides, no debris traps)' }, { text: 'Poor (Dirt accumulates on external tie-rods)' }] },
        { feature: 'Port Integration', values: [{ text: 'Internal cross-drilling (No hoses needed)' }, { text: 'Standard threaded ports only' }] },
      ],
    }
  ],

  // ── Engineering / How to Choose ──
  engineering: {
    heading: 'Engineering Considerations for Square Bodies',
    description: 'The square exterior changes how hydraulic power is integrated into the machine chassis.',
    items: [
      {
        label: 'A',
        title: 'Manifold / Hose-less Mounting',
        description: 'One of the primary engineering advantages of a square body is the ability to cross-drill hydraulic ports directly through the flat mounting face. By matching these ports to O-rings on your machine chassis, the cylinder can be powered without any external hydraulic hoses, completely eliminating hose-failure risks.',
      },
      {
        label: 'B',
        title: 'Tooling & Space Constraints',
        description: 'In specialized injection molding core-pulls or tightly packed progressive stamping dies, there simply isn\'t room for standard cylinder flanges or protruding tie-rods. A square body cylinder maximizes the bore size (and thus thrust force) within an absolute minimum physical envelope.',
      },
      {
        label: 'C',
        title: 'Rigid Side-Load Resistance',
        description: 'Because the flat side of the square body can be bolted directly flush against a steel machine plate, the cylinder becomes structurally integrated with the machine frame. This provides exceptional resistance to vibration and slight side-loading compared to pivoting mounts.',
      },
    ],
  },

  // ── Industries ──
  industries: {
    heading: 'Applications & Industries',
    description: 'Square body cylinders are essential for heavy industrial machinery that requires compact, high-force actuation.',
    items: [
      {
        icon: <FaIndustry className="w-6 h-6" />,
        name: 'Machine Tools',
        description: 'Clamping, positioning, and actuation in advanced CNC machining centers.',
        href: '/industries/square-body-hydraulic-cylinder-manufacturer-honeywell-hydraulics',
      },
      {
        icon: <HardHat className="w-6 h-6" />,
        name: 'Steel Plants',
        description: 'Heavy-duty actuation for rolling mills, shears, and continuous casting equipment.',
        href: '/industries/steel-plants',
      },
      {
        icon: <FaBuilding className="w-6 h-6" />,
        name: 'Industrial Automation',
        description: 'High-speed, high-precision actuation for specialized manufacturing assembly lines.',
        href: '/industries/industrial-automation',
      },
      {
        icon: <FaWarehouse className="w-6 h-6" />,
        name: 'Hydraulic Presses',
        description: 'Specialized pressing mechanisms requiring extremely rigid, flush-mounted cylinders.',
        href: '/industries/hydraulic-presses',
      },
    ],
  },

  // ── Manufacturing ──
  manufacturing: {
    heading: 'Honeywell Manufacturing Excellence',
    description: 'Our advanced manufacturing facility in Ahmedabad guarantees that every square body cylinder is built to endure brutal industrial environments. We focus heavily on weld integrity and bore concentricity.',
    steps: [
      {
        icon: <Cog className="w-6 h-6" />,
        title: 'Solid Block Milling',
        description: 'Unlike standard cylinders made from round tubing, square bodies are often CNC milled from solid high-tensile steel blocks, ensuring maximum structural rigidity and perfectly flat mounting faces.',
      },
      {
        icon: <FlaskConical className="w-6 h-6" />,
        title: 'Internal Bore Honing',
        description: 'Once the square exterior is established, the internal bore is deep-hole drilled and micro-honed to an H8 tolerance, ensuring perfect roundness despite the square external geometry.',
      },
      {
        icon: <FileCheck className="w-6 h-6" />,
        title: 'Cross-Drilled Porting',
        description: 'Advanced 5-axis CNC machining is used to drill complex internal hydraulic pathways, allowing fluid to enter from the flat mounting face rather than standard threaded side-ports.',
      },
      {
        icon: <Package className="w-6 h-6" />,
        title: 'High-Frequency Cycle Testing',
        description: 'Square body cylinders are frequently used in rapid automation. We subject them to high-frequency cycle testing to ensure the seals and internal porting can handle rapid pressure spikes without fatigue.',
      },
    ],
    midCta: {
      heading: 'Need Custom Square Body Cylinders for Your Machinery?',
      description: 'Our engineers can design and manufacture cylinders based on your specific space constraints, mounting hole patterns, and stroke lengths.',
      primaryCta: { label: 'SUBMIT OEM REQUIREMENTS', href: '/request-quote' },
      whatsappLabel: 'WhatsApp Us',
    },
  },

  // ── Spotlights (Case Studies) ──
  spotlights: [
    {
      badge: 'CASE STUDY',
      heading: 'Space-Saving Actuation for a High-Speed CNC Machining Center',
      subheading: 'Machine Tool OEM — Gujarat, India',
      stats: [
        { value: '30%', label: 'Space Saved' },
        { value: 'Tapped', label: 'Body Mount' },
        { value: 'Zero', label: 'Deflection' },
      ],
      phases: [
        {
          number: '01',
          title: 'The Challenge',
          description: "A machine tool OEM was designing a new, highly compact multi-axis CNC machining center. Standard flange-mounted cylinders for the workpiece clamping system were too bulky and interfered with the cutting tool path.",
        },
        {
          number: '02',
          title: 'The Engineering',
          description: "We engineered custom square body hydraulic cylinders with direct-tapped mounting holes on the flat side surfaces. This allowed the cylinders to be bolted perfectly flush against the machine\'s internal casting, eliminating the need for mounting brackets entirely.",
        },
        {
          number: '03',
          variant: 'dark',
          title: 'The Outcome',
          description: "The square body design reduced the required installation footprint by 30%. The rigid, flush mounting also eliminated lateral deflection during high-pressure clamping, improving overall machining accuracy for the OEM.",
          cta: { label: 'READ FULL CASE STUDY', href: '#' },
        },
      ],
    },
  ],

  // ── FAQs ──
  faqs: [
    {
      question: 'What is a square body hydraulic cylinder?',
      answer: 'A square body hydraulic cylinder utilizes a square or rectangular outer steel profile instead of a traditional round tube. The internal bore remains perfectly round, but the flat exterior allows for compact, flush mounting directly against machinery surfaces.'
    },
    {
      question: 'What are the advantages of a square body design?',
      answer: 'The primary advantages are extreme structural rigidity, high resistance to twisting or lateral deflection, and the ability to mount the cylinder in very tight spaces without requiring bulky external flanges or clevis brackets.'
    },
    {
      question: 'Which industries use square body cylinders?',
      answer: 'They are widely used in machine tools (CNC centers), steel plants, hydraulic presses, injection molding machines, and custom industrial automation where space is restricted and high forces are required.'
    },
    {
      question: 'How do you mount a square body cylinder?',
      answer: 'They are typically mounted by drilling and tapping threaded holes directly into the flat sides of the cylinder body (Direct Tapped Mount), or by drilling clearance holes entirely through the body for long bolts (Through-Hole Mount).'
    },
    {
      question: 'Can you customize the mounting hole patterns?',
      answer: 'Absolutely. We custom manufacture the cylinder body and precision-drill the mounting hole patterns to match the exact geometric specifications of your machinery.'
    }
  ],

  // ── Related Products ──
  relatedProducts: {
    description: 'Explore our other heavy-duty hydraulic cylinder designs for industrial applications.',
    items: [
      {
        title: 'Welded Hydraulic Cylinders',
        description: 'Heavy-duty, compact round-body cylinders designed for extreme industrial and mobile applications.',
        category: 'Hydraulic Cylinders',
        imageSrc: '/images/products/hydraulic-cylinders/welded-hydraulic-cylinders-manufacturer.webp',
        href: '/products/hydraulic-cylinders/welded-hydraulic-cylinders',
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
        title: 'Trunnion Mounted Hydraulic Cylinders',
        description: 'Heavy-duty trunnion mounted hydraulic cylinders engineered for pivoting machinery.',
        category: 'Hydraulic Cylinders',
        imageSrc: '/images/products/hydraulic-cylinders/trunnion-mounted-hydraulic-cylinder.webp',
        href: '/products/hydraulic-cylinders/trunnion-mounted-hydraulic-cylinder',
        ctaText: 'View Details',
      },
    ],
  },
};
