import React from 'react';
import {
  ArrowUpToLine,
  RefreshCw,
  Layers,
  Package,
  Activity,
  ShieldCheck,
  Truck,
  HardHat,
  Trash2,
  Building2,
  Cog,
} from 'lucide-react';
import type { ProductPageData } from '@/components/product-page/types';

export const telescopicCylinderData: ProductPageData = {
  // 1. SEO & Metadata
  seo: {
    title: 'Telescopic Hydraulic Cylinder Manufacturer | Honeywell',
    description: 'Leading telescopic hydraulic cylinder manufacturer in Gujarat. Engineering extreme-stroke, multi-stage cylinders for dump trucks and material handling.',
    url: '/products/hydraulic-cylinders/telescopic-hydraulic-cylinders/',
    image: '/images/products/hydraulic-cylinders/telescopic-hydraulic-cylinders-manufacturer.webp',
  },

  // 2. Schema Data
  schema: {
    productName: 'Telescopic Hydraulic Cylinders',
    category: 'Hydraulic Cylinders',
    properties: [
      { name: 'Number of Stages', value: '2-Stage to 6-Stage Configurations' },
      { name: 'Maximum Stroke Length', value: 'Up to 8,000+ mm' },
      { name: 'Maximum Operating Pressure', value: 'Up to 250 Bar (3600 PSI)' },
      { name: 'Action Type', value: 'Single-Acting and Double-Acting' },
    ],
  },

  // 4. Hero Section
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products/' },
      { label: 'Hydraulic Cylinders', href: '/products/hydraulic-cylinders/' },
    ],
    currentPage: 'Telescopic Cylinders',
    subtitle: 'TELESCOPIC HYDRAULIC CYLINDERS',
    h1: 'Telescopic Hydraulic Cylinder Manufacturer',
    description: 'Engineered for massive lifting heights from a minimal footprint. Honeywell Hydraulics is a premier custom telescopic hydraulic cylinder manufacturer in Gujarat, supplying highly robust, multi-stage cylinders exclusively for tipper bodies, dump trucks, and mobile lifting equipment.',
    image: {
      src: '/images/products/hydraulic-cylinders/telescopic-hydraulic-cylinders-manufacturer.webp',
      alt: 'Telescopic Hydraulic Cylinder Manufacturer in Ahmedabad - Multi-stage tipper cylinder by Honeywell Hydraulics',
    },
    primaryCta: { label: 'REQUEST OEM QUOTE', href: '/request-quote/' },
    secondaryCta: { label: 'VIEW TECHNICAL SPECS', href: '#technical-specifications' },
    keySpecs: [
      { label: 'Number of Stages', value: '2 to 5 Stages' },
      { label: 'Total Stroke', value: 'Up to 10,000 mm' },
      { label: 'Lifting Capacity', value: 'Up to 80+ Tons' },
      { label: 'Action Type', value: 'Single / Double Acting' },
    ],
  },

  overview: {
    heading: 'What Are Telescopic Hydraulic Cylinders?',
    content: (
      <>
        <p>When a machine requires a massive lifting stroke but has virtually no physical space to house a fully retracted cylinder, engineers turn to <strong>Telescopic Hydraulic Cylinders</strong>.</p>
        <p>Unlike standard Tie Rod Cylinders or Welded Cylinders which consist of a single rod and barrel, a telescopic cylinder features a series of nested, tubular steel stages (often referred to as sleeves or sleeves-and-plunger). These nested tubes slide outward from each other, operating much like a collapsible pirate&apos;s telescope.</p>
        <p>As a leading <strong>multi-stage hydraulic cylinder supplier</strong>, we design these complex actuators specifically for mobile equipment. A telescopic cylinder can provide an extended stroke that is significantly longer than its collapsed length—sometimes extending up to six times its closed dimension. This makes them the undisputed standard for dump trucks, refuse collection vehicles, and heavy-duty tipper bodies where space under the chassis is severely limited.</p>
      </>
    ),
  },

  // 6. Key Features (How Multi-Stage Cylinders Work)
  keyFeatures: {
    heading: 'How Multi-Stage Cylinders Work',
    description: 'The internal fluid dynamics of a telescopic cylinder are vastly more complex than a standard single-rod actuator, offering unique engineering advantages.',
    items: [
      {
        icon: <ArrowUpToLine className="w-6 h-6" />,
        title: 'Sequential Extension',
        description: 'Fluid pressure first acts on the largest diameter sleeve. Once fully extended, pressure forces the next smaller sleeve to extend. This continues until the final plunger is fully extended.',
      },
      {
        icon: <RefreshCw className="w-6 h-6" />,
        title: 'Gravity Retraction',
        description: 'In single-acting tipper applications, the cylinder relies on gravity. Opening the directional valve allows the immense weight of the dump bed to force fluid out and retract the sleeves.',
      },
      {
        icon: <Layers className="w-6 h-6" />,
        title: 'Stroke Multiplication',
        description: 'Achieves massive extended heights. A 5-stage cylinder with a closed length of just 1 meter can extend to provide a massive 4.5-meter lifting stroke.',
      },
      {
        icon: <Package className="w-6 h-6" />,
        title: 'Extreme Space Saving',
        description: 'A telescopic cylinder collapses into a fraction of its total stroke length (20% to 40%), allowing it to fit vertically under short truck chassis.',
      },
      {
        icon: <Activity className="w-6 h-6" />,
        title: 'Optimal Lifting Angles',
        description: 'Placing a compact cylinder directly at the front of a dump body (trunnion mount) allows the tipper to achieve maximum mechanical leverage and tipping stability.',
      },
      {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: 'Specialized Load Handling',
        description: 'The sequential extension exerts maximum force at the beginning of the stroke (when the dump bed is heaviest) and faster speed at the end of the stroke.',
      },
    ],
  },

  // 7. Technical Specs
  technicalSpecs: {
    heading: 'Technical Specifications',
    description: 'Engineered to support immense tipping loads with precise stage sequencing and robust column strength.',
    tableTitle: 'Standard Capability Range',
    rows: [
      { parameter: 'Number of Stages', value: '2-Stage to 6-Stage Configurations' },
      { parameter: 'Maximum Stroke Length', value: 'Up to 8,000+ mm (Custom long-stroke available)' },
      { parameter: 'Maximum Operating Pressure', value: 'Up to 250 Bar (3600 PSI)' },
      { parameter: 'Action Type', value: 'Single-Acting (Gravity Return), Double-Acting (Powered Return)' },
      { parameter: 'Mounting Options', value: 'Outer Trunnion (Front End), Cross-Tube (Underbody), Clevis' },
      { parameter: 'Stage Material', value: 'ST52 / EN8 Seamless Honed Tube (OD and ID)' },
      { parameter: 'Surface Protection', value: 'Hard Chrome Plated (All Stages)' },
      { parameter: 'Sealing System', value: 'High-pressure V-packing, heavy-duty rod wipers, bronze-filled guide rings' },
    ],
    primaryCta: { label: 'REQUEST OEM PRICING', href: '/request-quote/' },
    secondaryCta: { label: 'CALCULATE STROKE', href: '/contact-us/' },
  },

  // 8. Product Variants / Comparison
  comparisons: [
    {
      heading: 'Telescopic vs. Standard Cylinders',
      description: 'Choosing between a multi-stage cylinder and a standard actuator dictates the entire chassis design of your mobile equipment.',
      columns: [{ heading: 'Engineering Feature' }, { heading: 'Telescopic Hydraulic Cylinders' }, { heading: 'Standard Cylinders (Welded/Tie Rod)' }],
      rows: [
        { feature: 'Piston Rod Design', values: [{ text: 'Multiple nested tubular sleeves' }, { text: 'Single solid or hollow rod' }] },
        { feature: 'Collapsed Length', values: [{ text: 'Highly compact (20% to 40% of extended stroke)', highlight: true }, { text: 'Bulky (Always longer than the extended stroke)' }] },
        { feature: 'Force Profile', values: [{ text: 'Force decreases as each smaller stage extends' }, { text: 'Constant force throughout the entire stroke' }] },
        { feature: 'Speed Profile', values: [{ text: 'Speed increases as each smaller stage extends' }, { text: 'Constant speed throughout the entire stroke' }] },
        { feature: 'Primary Action', values: [{ text: 'Usually Single-Acting (Gravity return)' }, { text: 'Usually Double-Acting (Powered return)' }] },
        { feature: 'Primary Risk', values: [{ text: 'Susceptible to side-loading and column buckling' }, { text: 'Highly rigid against side-loads' }] },
      ],
    }
  ],

  // 10. Industries
  industries: {
    heading: 'Industries Served',
    description: 'Our custom telescopic cylinders are the backbone of the heavy transportation and mobile infrastructure sectors.',
    items: [
      {
        icon: <Truck className="w-6 h-6" />,
        name: 'Transportation & Logistics',
        description: 'Supplying high-volume, multi-stage cylinders for heavy commercial tipper trucks and bulk transport trailers.',
        href: '/industries/telescopic-hydraulic-cylinder-manufacturer-honeywell'
      },
      {
        icon: <HardHat className="w-6 h-6" />,
        name: 'Construction',
        description: 'Delivering robust lifting cylinders for massive earth-moving dump trucks and off-highway haulers operating in harsh environments.',
        href: '/industries/construction'
      },
      {
        icon: <Trash2 className="w-6 h-6" />,
        name: 'Waste Management',
        description: 'Engineering compact, double-acting telescopic cylinders for refuse collection vehicles and garbage packer blades.',
        href: '/industries/waste-management'
      },
      {
        icon: <Building2 className="w-6 h-6" />,
        name: 'Municipal Equipment',
        description: 'Manufacturing highly reliable actuators for municipal road sweepers, snowplows, and specialized utility trucks.',
        href: '/industries/municipal-equipment'
      },
    ],
  },

  // 10. Engineering / How to Choose
  engineering: {
    heading: 'How to Choose the Right Telescopic Hydraulic Cylinder',
    description: 'Telescopic cylinders are highly specialized. Specifying the correct multi-stage unit prevents catastrophic bending under load.',
    items: [
      {
        label: 'A',
        title: 'Stroke to Retracted Ratio',
        description: 'Telescopic cylinders are chosen when space is confined. Ensure the collapsed (retracted) length fits your chassis, while the total extended length provides the full tipping or lift angle required.',
      },
      {
        label: 'B',
        title: 'Single-Acting vs. Double-Acting',
        description: 'Most dump trucks use Single-Acting (gravity retract). If your application requires powered pull-down (e.g., horizontal compactors), you must specify a Double-Acting Telescopic cylinder, which has complex internal porting.',
      },
      {
        label: 'C',
        title: 'Column Load (Buckling Limits)',
        description: 'Multi-stage cylinders act as long, slender columns when fully extended. We calculate the maximum off-center side load to determine the necessary overlap between stages to prevent bending.',
      },
    ],
  },

  // 11. Manufacturing Process
  manufacturing: {
    heading: 'Manufacturing & Quality Process',
    description: 'Every multi-stage cylinder is delivered with complete stroke-multiplication reports and certified column-load limits, ensuring the actuator meets all safety factors required for heavy mobile equipment.',
    steps: [
      {
        icon: <Cog className="w-6 h-6" />,
        title: 'Concentric Tube Selection',
        description: 'Telescopic stages require exceptionally tight tolerances. We source specialized DOM (Drawn Over Mandrel) tubing to ensure absolute wall thickness consistency, preventing asymmetric bending.',
      },
      {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: 'Multi-Stage Precision Honing',
        description: 'Every individual tubular stage is CNC-machined, skived, and roller-burnished on both the ID (inside diameter) and OD (outside diameter) to guarantee smooth sequential staging without galling.',
      },
      {
        icon: <Package className="w-6 h-6" />,
        title: 'Complex Seal Integration',
        description: 'Because each stage seals against the inner diameter of the previous stage, we install heavy-duty glass-filled nylon wear rings and highly specialized multi-lip V-packing seals to handle high-pressure sequencing.',
      },
      {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: 'Vertical Staging Verification',
        description: '100% of our telescopic cylinders are hydrostatically tested vertically. This ensures that each stage extends and retracts smoothly in the correct sequence, and that the mechanical stop-rings can absorb full-pressure impacts.',
      },
    ],
    midCta: {
      heading: 'The Honeywell Guarantee',
      description: 'Our heavy-duty telescopic cylinders are backed by a strict Defect Warranty. Should your mobile equipment experience seal failure due to harsh environmental debris, our Cylinder Repair division can completely rebuild the unit.',
      primaryCta: { label: 'REQUEST REPAIR', href: '/contact-us/' },
    },
  },

  spotlights: [
    {
      badge: 'CASE STUDY',
      heading: 'Custom 5-Stage Mining Tipper Cylinder',
      subheading: 'Heavy Mining Tipper OEM — Metoda GIDC, Rajkot',
      phases: [
        {
          number: '01',
          title: 'The Challenge',
          description: "The OEM was designing a massive new dump truck specifically for heavy iron-ore mining. Standard 4-stage cylinders could not provide the required tipping angle without raising the truck's center of gravity dangerously high during transit.",
        },
        {
          number: '02',
          title: 'The Solution',
          description: 'We engineered a custom 5-Stage Telescopic Cylinder. By adding an extra stage, we reduced the collapsed length by 15%, allowing the OEM to lower the dump bed. We also integrated heavy-duty metallic scrapers onto every stage to clear abrasive ore dust.',
        },
        {
          number: '03',
          title: 'The Outcome',
          description: "The truck achieved a perfect 50-degree tipping angle from an ultra-low chassis profile. Specialized wiper seals prevented dust ingress. Extended the cylinder's operational lifespan in the mining environment by over 200%.",
        }
      ],
      stats: [
        { value: '50', label: 'Degree Tipping Angle' },
        { value: '+200%', label: 'Operational Lifespan' }
      ]
    }
  ],

  relatedProducts: {
    description: 'Explore our full range of heavy-duty hydraulic cylinders.',
    items: [
      {
        title: 'Custom Hydraulic Cylinders',
        description: 'Bespoke actuators engineered for extreme environments and unique mounting requirements.',
        category: 'Hydraulic Cylinders',
        imageSrc: '/images/products/hydraulic-cylinders/custom-hydraulic-cylinder-manufacturer.webp',
        href: '/products/hydraulic-cylinders/custom-hydraulic-cylinders/',
        ctaText: 'View Details',
      },
      {
        title: 'Tie Rod Hydraulic Cylinders',
        description: 'Standard NFPA tie rod cylinders for heavy-duty industrial applications.',
        category: 'Hydraulic Cylinders',
        imageSrc: '/images/products/hydraulic-cylinders/tie-rod-hydraulic-cylinder-manufacturer.webp',
        href: '/products/hydraulic-cylinders/tie-rod-hydraulic-cylinders/',
        ctaText: 'View Details',
      },
      {
        title: 'Double Acting Hydraulic Cylinders',
        description: 'Precision engineered for powered stroke in both directions.',
        category: 'Hydraulic Cylinders',
        imageSrc: '/images/products/hydraulic-cylinders/double-acting-hydraulic-cylinders-manufacturer.webp',
        href: '/products/hydraulic-cylinders/double-acting-hydraulic-cylinders/',
        ctaText: 'View Details',
      },
    ],
  },

  // 13. FAQs
  faqs: [
    {
      question: 'Why does a telescopic cylinder get faster as it extends?',
      answer: 'This is due to fluid dynamics. The hydraulic pump provides a constant flow of fluid (Liters Per Minute). As each smaller stage engages, it requires less fluid volume to fill. Therefore, the constant fluid flow fills the smaller volume faster, causing the extension speed to increase.',
    },
    {
      question: 'Can you build double-acting telescopic cylinders?',
      answer: 'Yes. While single-acting (gravity return) is standard for dump trucks, we engineer double-acting telescopic cylinders for horizontal applications like refuse packer blades, where hydraulic pressure is required to both extend and retract the stages.',
    },
    {
      question: 'What causes a telescopic cylinder to bend or buckle?',
      answer: 'Buckling is usually caused by extreme side-loading. This occurs if a dump truck attempts to tip its load while parked on uneven ground, or if the load gets stuck in the top of the dump bed. We engineer our cylinders with extended stage overlap to resist these bending forces, but operators must ensure safe tipping practices.',
    },
    {
      question: 'Do you manufacture both front-end and underbody tipper cylinders?',
      answer: 'Yes. We manufacture long-stroke trunnion-mounted cylinders for front-end tipping, as well as highly compact, high-pressure cross-tube mounted cylinders designed specifically for tight underbody chassis spaces.',
    },
  ],
  cta: {
    title: 'Need a multi-stage telescopic cylinder for your mobile equipment?',
    description: 'From 2-stage to 6-stage configurations for dump trucks, tippers, and heavy lifting equipment. Engineered for maximum stroke from minimum retracted length.',
    primaryCtaText: 'REQUEST A QUOTE',
    primaryCtaHref: '/request-quote/',
    secondaryCtaText: 'Talk to an Engineer',
    secondaryCtaHref: '/contact-us/',
  },
};
