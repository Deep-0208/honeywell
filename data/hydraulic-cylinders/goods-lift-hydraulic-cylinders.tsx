import React from 'react';
import { ShieldCheck, ArrowUpToLine, Settings, ShieldAlert, HardHat, Scale, Cog, FlaskConical, FileCheck } from 'lucide-react';
import { FaIndustry, FaWarehouse, FaBuilding, FaTruckLoading } from 'react-icons/fa';
import type { ProductPageData } from '@/components/product-page/types';

export const goodsLiftCylinderData: ProductPageData = {
  // ── SEO ──
  seo: {
    title: 'Goods Lift Hydraulic Cylinder Manufacturer | Honeywell Hydraulics',
    description: 'Heavy-duty hydraulic cylinder for goods lift and freight elevators. Engineered for vertical lifting with high load capacity (Up to 500 Tone) and integrated safety valves.',
    url: '/products/hydraulic-cylinders/goods-lift-hydraulic-cylinders',
    image: '/images/products/hydraulic-cylinders/goods-lift-hydraulic-cylinder-v2.webp',
  },

  // ── Schema ──
  schema: {
    productName: 'Goods Lift Hydraulic Cylinder',
    category: 'Hydraulic Cylinders',
    properties: [
      { name: 'Bore Sizes', value: 'Up to 700 mm' },
      { name: 'Stroke Length', value: 'Up to 6 Meter' },
      { name: 'Capacity', value: 'Up to 500 Tone' },
      { name: 'Working Pressure', value: 'Up to 500 Kg (approx. 500 Bar)' },
    ],
  },

  // ── Hero ──
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products/' },
      { label: 'Hydraulic Cylinders', href: '/products/hydraulic-cylinders/' },
    ],
    currentPage: 'Goods Lift Cylinders',
    subtitle: 'Heavy-Duty Vertical Lifting Solutions',
    h1: 'Goods Lift Hydraulic Cylinder Manufacturer',
    description: 'Honeywell Hydraulics is a leading manufacturer of goods lift hydraulic cylinders. A hydraulic cylinder is a mechanical actuator used to give a unidirectional force through a unidirectional stroke, engineered specifically for safe, high-capacity industrial freight elevators.',
    primaryCta: { label: 'REQUEST A QUOTE', href: '/request-quote/#quote-form' },
    secondaryCta: { label: 'TECHNICAL SPECS', href: '#technical-specifications' },
    image: {
      src: '/images/products/hydraulic-cylinders/goods-lift-hydraulic-cylinder-v2.webp',
      alt: 'Heavy duty goods lift hydraulic cylinder manufactured in Ahmedabad, Gujarat',
    },
    keySpecs: [
      { label: 'Capacity', value: 'Up to 500 Tone' },
      { label: 'Stroke', value: 'Up to 6m' },
      { label: 'Bore', value: 'Up to 700mm' },
      { label: 'Pressure', value: 'Up to 500 Kg' },
    ],
  },

  // ── Overview ──
  overview: {
    heading: 'Engineered for High-Tonnage Vertical Lifting',
    content: (
      <>
        <p>
          A <strong className="text-honeywell-navy">Hydraulic cylinder</strong> is a mechanical actuator that is used to give a unidirectional force through a unidirectional stroke. It has many applications, notably in engineering vehicles and material handling systems. We are one of the leading manufacturers of specialized hydraulic cylinders for goods lifts.
        </p>
        <p>
          These hydraulic cylinders are manufactured using the finest quality materials that are procured from the most reliable sources in the market. In an industrial warehouse or manufacturing plant, goods lifts and freight elevators demand uncompromising reliability and safety. 
        </p>
        <p>
          Our goods lift cylinders are engineered to provide smooth, judder-free vertical lifting for heavy industrial payloads. Unlike standard cylinders, these units feature integrated safety mechanisms like rupture valves (velocity fuses) to prevent sudden drops in case of hose failure, ensuring total compliance with industrial safety regulations.
        </p>
      </>
    ),
  },

  // ── Key Features ──
  keyFeatures: {
    heading: 'Core Advantages & Safety Features',
    description: 'Our goods lift cylinders are precision-engineered to handle extreme vertical loads while maintaining absolute safety and smooth operation.',
    showStepNumbers: false,
    items: [
      {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: 'Integrated Safety Valves',
        description: 'Designed with optional built-in velocity fuses (rupture valves) directly at the cylinder port to instantly arrest descent in the event of catastrophic hose failure.',
      },
      {
        icon: <ArrowUpToLine className="w-6 h-6" />,
        title: 'Smooth, Judder-Free Lifting',
        description: 'Precision-honed barrels (H8 tolerance) and high-quality polyurethane seals ensure smooth lifting and lowering, even at micro-speeds with off-center loads.',
      },
      {
        icon: <Scale className="w-6 h-6" />,
        title: 'High Load Capacity',
        description: 'Engineered for extreme material handling, capable of lifting payloads up to 500 Tonnes with synchronized dual-cylinder configurations available for wide platforms.',
      },
      {
        icon: <HardHat className="w-6 h-6" />,
        title: 'Heavy-Duty Construction',
        description: 'Manufactured with premium grade ST52 seamless steel tubes and induction-hardened, hard-chrome plated rods for maximum wear resistance and column strength.',
      },
      {
        icon: <ShieldAlert className="w-6 h-6" />,
        title: 'Side-Load Resistance',
        description: 'Extended bronze or composite internal guide rings are utilized to absorb the side-loads and eccentric forces frequently encountered in unevenly loaded goods lifts.',
      },
      {
        icon: <Settings className="w-6 h-6" />,
        title: 'Custom Mounting Configurations',
        description: 'Available with robust flange mounts, trunnions, or customized clevis mounts to seamlessly integrate with your specific elevator pit and structural guide rail design.',
      },
    ],
  },

  // ── Technical Specs ──
  technicalSpecs: {
    heading: 'Technical Specifications',
    description: 'Our goods lift cylinders are manufactured using the finest quality materials to meet the demanding requirements of vertical material handling.',
    primaryCta: { label: 'DISCUSS YOUR LIFT REQUIREMENTS', href: '/request-quote/#quote-form' },
    secondaryCta: { label: 'VIEW ALL PRODUCTS', href: '/products/hydraulic-cylinders/' },
    tableTitle: 'Goods Lift Cylinder Specs',
    rows: [
      { parameter: 'Maximum Bore Size', value: 'Up to 700 mm' },
      { parameter: 'Maximum Stroke Length', value: 'Up to 6 Meter (6000 mm)' },
      { parameter: 'Maximum Load Capacity', value: 'Up to 500 Tone' },
      { parameter: 'Working Pressure', value: 'Up to 500 Kg (approx. 500 Bar)' },
      { parameter: 'Tube Material', value: 'ST52 / EN8 Seamless Honed Tube' },
      { parameter: 'Piston Rod Material', value: 'EN8 / EN9, Hard Chrome Plated (HCP)' },
      { parameter: 'Mounting Options', value: 'Flange, Clevis, Trunnion, Custom' },
      { parameter: 'Seal Kits', value: 'Hallite, Parker, or equivalent premium brands' },
    ],
  },

  // ── Variants ──
  variants: {
    heading: 'Cylinder Configurations for Goods Lifts',
    description: 'Depending on pit depth, overhead clearance, and platform size, we manufacture different structural configurations of lift cylinders.',
    items: [
      {
        icon: <ArrowUpToLine className="w-7 h-7" />,
        title: 'Single-Acting Displacement Cylinders',
        description: 'The standard choice for most freight elevators. Hydraulic pressure extends the rod to lift the platform, while the weight of the platform (gravity) retracts the cylinder. Simple, reliable, and cost-effective.',
        highlights: [
          'Gravity-return operation',
          'Fewer wear parts and seals',
          'Ideal for direct-acting lifts',
        ],
      },
      {
        icon: <Settings className="w-7 h-7" />,
        title: 'Telescopic Lift Cylinders',
        description: 'For applications with limited pit depth but requiring significant vertical travel. Telescopic cylinders provide a long stroke from a highly compact retracted length.',
        highlights: [
          'Multi-stage extension',
          'Perfect for shallow elevator pits',
          'Available in synchronous acting models',
        ],
      },
      {
        icon: <Scale className="w-7 h-7" />,
        title: 'Synchronized Dual Cylinders',
        description: 'For wide goods lift platforms that require lifting from both sides. We engineer identical pairs of cylinders designed to operate in perfect unison using specialized flow dividers.',
        highlights: [
          'Prevents platform tilting',
          'Handles off-center loads safely',
          'Distributes mechanical stress',
        ],
      },
    ],
  },

  // ── Comparisons ──
  comparisons: [
    {
      heading: 'Goods Lift vs. Scissor Lift Cylinders',
      description: 'Understanding the mechanical differences in vertical material handling.',
      columns: [{ heading: 'Engineering Feature' }, { heading: 'Goods Lift Cylinders' }, { heading: 'Scissor Lift Cylinders' }],
      rows: [
        { feature: 'Load Mechanism', values: [{ text: 'Direct Acting (Pushes platform straight up)', highlight: true }, { text: 'Leveraged (Pushes scissor arms apart)' }] },
        { feature: 'Stroke Length', values: [{ text: 'Long (Usually equals the total lift height)' }, { text: 'Short (Multiplied by the scissor mechanism)' }] },
        { feature: 'Pressure Profile', values: [{ text: 'Constant pressure throughout the stroke' }, { text: 'Extreme high pressure at the start of the stroke' }] },
        { feature: 'Mounting Style', values: [{ text: 'Flange or Foot mounted' }, { text: 'Trunnion or Clevis mounted (Pivoting)' }] },
      ],
    }
  ],

  // ── Engineering / How to Choose ──
  engineering: {
    heading: 'Engineering Considerations for Goods Lifts',
    description: 'Specifying cylinders for freight elevators requires strict adherence to vertical lifting safety factors.',
    items: [
      {
        label: 'A',
        title: 'Payload & Safety Factors',
        description: 'Goods lift cylinders must be calculated not just for the payload, but for a 2x to 3x safety factor to account for sudden load shifting or shock impacts when forklifts drive onto the platform.',
      },
      {
        label: 'B',
        title: 'Gravity-Return Seal Friction',
        description: 'Single-acting goods lifts rely entirely on the platform weight to retract. If the rod seals are too tight, the empty platform will not descend. We utilize specialized low-friction Polyurethane U-cups designed specifically for gravity-return applications.',
      },
      {
        label: 'C',
        title: 'Rupture Valve Specification',
        description: 'To prevent catastrophic free-fall in the event of a severed hydraulic hose, we specify and integrate velocity fuses (hose burst valves) directly into the cylinder base port. If fluid velocity exceeds the safe descent rate, the valve slams shut instantly.',
      },
    ],
  },

  // ── Industries ──
  industries: {
    heading: 'Applications & Industries',
    description: 'Our goods lift cylinders are the backbone of vertical material handling across various industrial sectors.',
    items: [
      {
        icon: <FaWarehouse className="w-6 h-6" />,
        name: 'Warehouses & Logistics',
        description: 'Multi-floor freight elevators for moving pallets and heavy inventory safely between levels.',
        href: '#',
      },
      {
        icon: <FaIndustry className="w-6 h-6" />,
        name: 'Manufacturing Plants',
        description: 'Heavy-duty scissor lifts and mezzanine goods lifts for moving raw materials and finished products.',
        href: '#',
      },
      {
        icon: <FaBuilding className="w-6 h-6" />,
        name: 'Commercial Buildings',
        description: 'Automobile elevators, car parking systems, and heavy service elevators for retail complexes.',
        href: '#',
      },
      {
        icon: <FaTruckLoading className="w-6 h-6" />,
        name: 'Loading Docks',
        description: 'Hydraulic dock levelers and pit-mounted lifting platforms for truck loading and unloading.',
        href: '#',
      },
    ],
  },

  // ── Manufacturing ──
  manufacturing: {
    heading: 'Quality & Manufacturing Excellence',
    description: 'Safety is non-negotiable in vertical lifting. Our manufacturing process ensures every cylinder meets stringent industrial safety standards.',
    steps: [
      {
        icon: <Cog className="w-6 h-6" />,
        title: 'Ultra-Long Tube Honing',
        description: 'For direct-acting lifts covering multiple floors, we utilize specialized deep-hole honing machines capable of processing single-piece ST52 barrels up to 6 meters in length without mid-weld distortion.',
      },
      {
        icon: <ShieldAlert className="w-6 h-6" />,
        title: 'Velocity Fuse Integration',
        description: 'Safety is paramount. The cylinder base is CNC-machined to directly accept a cartridge-style velocity fuse (rupture valve), eliminating the risk of a threaded fitting breaking off during a failure event.',
      },
      {
        icon: <FlaskConical className="w-6 h-6" />,
        title: 'Low-Friction Seal Assembly',
        description: 'The piston and gland are assembled in a clean-room environment using specialized low-stick-slip PTFE and PU seals, guaranteeing smooth, jerk-free descent even when the lift platform is completely empty.',
      },
      {
        icon: <FileCheck className="w-6 h-6" />,
        title: 'Vertical Stroke Testing',
        description: 'Unlike standard cylinders tested horizontally, our goods lift cylinders undergo specialized vertical load testing to verify concentric extension and guarantee absolute zero internal bypassing under static holding pressure.',
      },
    ],
    midCta: {
      heading: 'Need a Custom Goods Lift Cylinder?',
      description: 'Our engineers can design a cylinder based on your specific platform size, travel height, and payload capacity.',
      primaryCta: { label: 'SUBMIT YOUR REQUIREMENTS', href: '/request-quote/#quote-form' },
      whatsappLabel: 'WhatsApp Us',
    },
  },

  // ── Spotlights (Case Studies) ──
  spotlights: [
    {
      badge: 'CASE STUDY',
      heading: 'Eliminating Platform Judder in a 10-Ton Warehouse Lift',
      subheading: 'Logistics Park — Ahmedabad, Gujarat',
      stats: [
        { value: '10', label: 'Ton Payload' },
        { value: '6m', label: 'Vertical Travel' },
        { value: '100%', label: 'Smooth Operation' },
      ],
      phases: [
        {
          number: '01',
          title: 'The Challenge',
          description: "A major logistics facility was experiencing severe 'stick-slip' (juddering) on their primary 10-ton freight elevator, causing damage to fragile goods during inter-floor transfer.",
        },
        {
          number: '02',
          title: 'The Engineering',
          description: "We identified that the original cylinder lacked proper side-load guide rings and was using inferior seals that caused friction binding. We designed a custom 6-meter stroke displacement cylinder with extended composite wear bands and low-friction polyurethane seals.",
        },
        {
          number: '03',
          variant: 'dark',
          title: 'The Outcome',
          description: "The new cylinder delivered completely smooth, judder-free lifting and lowering, even when the platform was unevenly loaded with pallets.",
          cta: { label: 'READ FULL CASE STUDY', href: '#' },
        },
      ],
    },
  ],

  // ── Related Products ──
  relatedProducts: {
    description: 'Explore our other heavy-duty hydraulic cylinders designed for industrial applications.',
    items: [
      {
        title: 'Double Acting Hydraulic Cylinders',
        description: 'Versatile cylinders providing powered force in both extension and retraction strokes.',
        category: 'Hydraulic Cylinders',
        imageSrc: '/images/products/hydraulic-cylinders/double-acting-hydraulic-cylinders-manufacturer.webp',
        href: '/products/hydraulic-cylinders/double-acting-hydraulic-cylinders/',
        ctaText: 'View Details',
      },
      {
        title: 'Custom Hydraulic Cylinders',
        description: 'Bespoke actuators engineered for extreme parameters and specialized industrial machinery.',
        category: 'Hydraulic Cylinders',
        imageSrc: '/images/products/hydraulic-cylinders/custom-hydraulic-cylinder-manufacturer.webp',
        href: '/products/hydraulic-cylinders/custom-hydraulic-cylinders/',
        ctaText: 'View Details',
      },
      {
        title: 'Telescopic Hydraulic Cylinders',
        description: 'Multi-stage cylinders providing exceptional stroke length from a compact retracted footprint.',
        category: 'Hydraulic Cylinders',
        imageSrc: '/images/products/hydraulic-cylinders/telescopic-hydraulic-cylinders-manufacturer.webp',
        href: '/products/hydraulic-cylinders/telescopic-hydraulic-cylinders/',
        ctaText: 'View Details',
      },
    ],
  },

  // ── Local Service Areas ──
  productName: 'Goods Lift Hydraulic Cylinders',

  // ── FAQs ──
  faqs: [
    {
      question: 'What is a Goods Lift Hydraulic Cylinder used for?',
      answer: 'A hydraulic cylinder is a mechanical actuator used to give a unidirectional force. In this context, it provides the powerful, smooth vertical lifting force required to raise and lower industrial goods lifts, freight elevators, and material handling platforms.',
    },
    {
      question: 'What safety features are included in your lift cylinders?',
      answer: 'Safety is paramount. We can integrate velocity fuses (rupture valves) directly into the cylinder port. If a hydraulic hose bursts, the valve instantly locks the cylinder, preventing the lift platform from falling.',
    },
    {
      question: 'What is the maximum capacity and stroke length available?',
      answer: 'We manufacture heavy-duty goods lift cylinders with capacities up to 500 Tonnes, stroke lengths up to 6 Meters (6000mm), and bore sizes up to 700mm, engineered using the finest quality materials.',
    },
    {
      question: 'Can you synchronize two cylinders for a wide lift platform?',
      answer: 'Yes. For wide or heavy platforms that require dual cylinders, we precision-manufacture matched cylinder pairs designed to operate synchronously with hydraulic flow dividers to prevent platform tilting.',
    },
    {
      question: 'Are your cylinders suitable for continuous industrial use?',
      answer: 'Absolutely. We use high-quality ST52 seamless honed tubes, hard chrome plated rods, and premium seal kits (like Hallite or Parker) to ensure long service life and high wear resistance in demanding, high-cycle warehouse environments.',
    },
  ],

  // ── Final CTA ──
  cta: {
    title: 'Need a Reliable Cylinder for Your Goods Lift?',
    description: "Partner with Honeywell Hydraulics for precision-engineered, high-capacity lifting cylinders built for absolute safety and smooth operation.",
    primaryCtaText: 'REQUEST A QUOTE',
    primaryCtaHref: '/request-quote/#quote-form',
    secondaryCtaText: 'Call Now',
    secondaryCtaHref: 'tel:+919924343873',
  },
};
