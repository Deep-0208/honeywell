import React from 'react';
import {
  ShieldAlert,
  Box,
  Wrench,
  Cog,
  Zap,
} from 'lucide-react';
import { FaIndustry, FaFire, FaHardHat, FaAnchor, FaBox } from 'react-icons/fa';
import type { ProductPageData } from '@/components/product-page/types';

export const weldedCylinderData: ProductPageData = {
  // 1. SEO & Metadata
  seo: {
    title: 'Welded Hydraulic Cylinder Manufacturer | Honeywell',
    description: 'Leading welded hydraulic cylinder manufacturer in India. Supplying heavy-duty, high-pressure welded cylinders for presses, construction, and marine.',
    url: '/products/hydraulic-cylinders/welded-hydraulic-cylinders/',
    image: '/images/products/hydraulic-cylinders/welded-hydraulic-cylinders-manufacturer.webp',
  },

  // 2. Schema Data
  schema: {
    productName: 'Welded Hydraulic Cylinders',
    category: 'Hydraulic Cylinders',
    properties: [
      { name: 'Bore Sizes', value: '40mm to 400+ mm' },
      { name: 'Operating Pressure', value: 'Up to 350+ Bar / 5000+ PSI' },
      { name: 'Barrel Materials', value: 'ST52 / EN8' },
    ],
  },

  // 4. Hero Section
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products/' },
      { label: 'Hydraulic Cylinders', href: '/products/hydraulic-cylinders/' },
    ],
    currentPage: 'Welded Cylinders',
    subtitle: 'HEAVY DUTY PERFORMANCE',
    h1: 'Welded Hydraulic Cylinder Manufacturer',
    description: 'Engineered for extreme environments and uncompromising durability. Honeywell Hydraulics is a premier welded hydraulic cylinder manufacturer in Gujarat, delivering robust, high-tonnage actuators for mobile equipment, construction machinery, and heavy industrial applications.',
    image: {
      src: '/images/products/hydraulic-cylinders/welded-hydraulic-cylinder-manufacturer.webp',
      alt: 'Welded Hydraulic Cylinder Manufacturer in Ahmedabad - Heavy duty welded cylinder by Honeywell Hydraulics',
    },
    primaryCta: { label: 'REQUEST OEM QUOTE', href: '/request-quote/' },
    secondaryCta: { label: 'VIEW TECHNICAL SPECS', href: '#technical-specifications' },
    keySpecs: [
      { label: 'Bore', value: '40mm - 400+ mm' },
      { label: 'Pressure', value: 'Up to 350+ Bar' },
      { label: 'Durability', value: 'Extreme Duty' },
      { label: 'Mounting', value: 'Custom Welded' },
    ],
  },

  // 5. Overview Section
  overview: {
    heading: 'What Are Welded Hydraulic Cylinders?',
    content: (
      <>
        <p>When standard industrial cylinders fail under extreme shock loads, machine builders turn to <strong>Welded Hydraulic Cylinders</strong>.</p>
        <p>Unlike Tie Rod Hydraulic Cylinders, which rely on external threaded rods to bolt the assembly together, a welded cylinder is permanently fused into a single structural unit. The rear end cap and the front gland housing are precision-welded directly to the steel barrel.</p>
        <p>As a leading <strong>heavy-duty welded cylinder supplier</strong>, we manufacture these actuators for environments where failure is not an option. Because the external tie rods are completely eliminated, a welded cylinder can fit into incredibly tight spaces on construction equipment and automated machinery. More importantly, the welded construction allows the cylinder barrel to withstand immense internal pressure spikes without the risk of tie-rod stretching or catastrophic seal blowout.</p>
      </>
    ),
  },

  // 6. Key Features (Construction)
  keyFeatures: {
    heading: 'Welded Cylinder Construction Explained',
    description: 'The reliability of a welded cylinder relies entirely on the metallurgical integrity of its fused components.',
    items: [
      {
        icon: <Box className="w-6 h-6" />,
        title: 'The Welded Barrel',
        description: 'We utilize heavy-walled ST52 seamless steel tubing. The internal surface is skived and roller-burnished to an Ra 0.2 µm finish. The barrel wall thickness is calculated mathematically to resist bulging or deformation under extreme high-pressure transients.',
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: 'The End Caps (Base and Head)',
        description: 'The rear base cap is permanently welded to the barrel using advanced rotary friction or sub-arc welding techniques, creating a solid, leak-proof containment vessel. The front head cap (gland) is either welded or threaded securely into the barrel to house the rod seals.',
      },
      {
        icon: <Wrench className="w-6 h-6" />,
        title: 'Mounting Interfaces',
        description: 'Because there are no external tie rods obstructing the barrel, welded cylinders allow for incredibly versatile, heavy-duty mounting options. Trunnions, cross-tubes, and clevis mounts are welded directly to the barrel itself, creating a unified structure capable of absorbing massive shear forces.',
      },
      {
        icon: <Cog className="w-6 h-6" />,
        title: 'The Rod Assembly',
        description: 'The hard-chrome plated piston rod transmits the mechanical force to the heavy load. For severe environments like marine engineering or mining, we upgrade the rod material to hardened stainless steel with specialized anti-corrosive epoxy coatings.',
      },
      {
        icon: <ShieldAlert className="w-6 h-6" />,
        title: 'The Sealing System',
        description: 'Welded cylinders must survive extreme shock loads. We utilize heavy-duty, 5-piece piston seals, bronze-filled PTFE wear rings, and double-lip rod wipers designed to prevent dust, mud, and metallic rust from contaminating the high-pressure fluid.',
      },
    ],
  },

  // 7. Technical Specs
  technicalSpecs: {
    heading: 'Technical Specifications',
    description: 'Our welded cylinders are engineered from the ground up for extreme durability and long-term reliability.',
    tableTitle: 'Standard Spec Framework',
    rows: [
      { parameter: 'Bore Sizes', value: '40mm to 400+ mm (Custom large-bore available)' },
      { parameter: 'Maximum Operating Pressure', value: 'Up to 350+ Bar (5000+ PSI)' },
      { parameter: 'Maximum Side Load', value: 'High resilience (welded joints absorb shear)' },
      { parameter: 'Operating Speed', value: 'Up to 0.5 m/s (Standard)' },
      { parameter: 'Mounting Options', value: 'Cross-Tube, Clevis, Trunnion, Flange (Welded directly to barrel)' },
      { parameter: 'Barrel Material', value: 'ST52 / EN8 Seamless Honed Tube (Ra 0.2 µm)' },
      { parameter: 'Piston Rod Options', value: 'Hard Chrome Plated, Stainless Steel, Induction Hardened' },
      { parameter: 'Sealing System', value: 'Heavy-duty 5-piece piston seals, double-lip rod wipers, PTFE wear bands' },
      { parameter: 'Cushioning Options', value: 'Fixed or adjustable (Front/Rear)' },
      { parameter: 'Exterior Protection', value: 'Standard Polyurethane, Marine-Grade Epoxy, Zinc Plating' },
    ],
    primaryCta: { label: 'DISCUSS YOUR SPECS', href: '/request-quote/' },
    secondaryCta: { label: 'DOWNLOAD CAD MODELS', href: '#' },
  },

  // 8. Product Variants / Comparison
  comparisons: [
    {
      heading: 'Welded vs. Tie Rod Cylinders',
      description: 'Choosing the correct cylinder construction dictates the lifespan of your machinery.',
      columns: [{ heading: 'Engineering Feature' }, { heading: 'Welded Hydraulic Cylinders' }, { heading: 'Tie Rod Hydraulic Cylinders' }],
      rows: [
        { feature: 'Construction Method', values: [{ text: 'End caps and mounts permanently welded to barrel' }, { text: 'External threaded rods clamp square caps to barrel' }] },
        { feature: 'Maximum Pressure', values: [{ text: 'Extreme (Up to 350+ Bar / 5000+ PSI)', highlight: true }, { text: 'Low to Medium (Up to 210 Bar / 3000 PSI)' }] },
        { feature: 'Shock Load Resistance', values: [{ text: 'Excellent. Fused structure absorbs heavy vibration', highlight: true }, { text: 'Poor. Shock loads can stretch tie rods, causing leaks' }] },
        { feature: 'Physical Profile', values: [{ text: 'Sleek, highly compact footprint' }, { text: 'Bulky due to external rods and square caps' }] },
        { feature: 'Environmental Threat', values: [{ text: 'Survives mud, dust, weather, and marine salt' }, { text: 'Vulnerable to dirt buildup on external threads' }] },
        { feature: 'Serviceability', values: [{ text: 'Low. Requires specialized tools or machining to rebuild' }, { text: 'High. Can be disassembled with standard wrenches' }] },
      ],
    }
  ],

  // 9. Industries
  industries: {
    heading: 'Industries Served',
    description: 'Our custom welded cylinders are the primary actuators for heavy manufacturing and outdoor sectors:',
    items: [
      {
        icon: <FaFire className="w-6 h-6" />,
        name: 'Steel & Metallurgy',
        description: 'Supplying extreme-pressure, heat-resistant cylinders for rolling mills and automatic gauge control (AGC).',
        href: '/industries/welded-hydraulic-cylinder-manufacturer-honeywell'
      },
      {
        icon: <FaIndustry className="w-6 h-6" />,
        name: 'Heavy Forging',
        description: 'Delivering massive, thick-walled pressing cylinders designed to survive brutal metal-stamping shock loads.',
        href: '/industries/heavy-forging'
      },
      {
        icon: <FaHardHat className="w-6 h-6" />,
        name: 'Construction Equipment',
        description: 'Engineering rugged, weather-resistant boom, stick, and bucket cylinders for excavators and loaders.',
        href: '/industries/construction-equipment'
      },
      {
        icon: <FaAnchor className="w-6 h-6" />,
        name: 'Marine Engineering',
        description: 'Manufacturing corrosion-resistant, high-tensile cylinders for ship-breaking shears and marine winches.',
        href: '/industries/marine-engineering'
      },
      {
        icon: <FaBox className="w-6 h-6" />,
        name: 'Material Handling',
        description: 'Providing fail-safe, heavy-duty lifting cylinders for multi-ton gantry cranes and goods elevators.',
        href: '/industries/material-handling'
      },
    ],
  },

  // 10. Engineering
  engineering: {
    heading: 'How to Choose the Right Welded Hydraulic Cylinder',
    description: 'When specifying a welded cylinder for heavy equipment, our design engineers evaluate load, environment, and duty cycle.',
    items: [
      {
        label: 'A',
        title: 'Pressure Ratings & Wall Thickness',
        description: 'We perform rigorous hoop-stress calculations. If your hydraulic press generates extreme internal pressures, we specify thicker seamless steel tubing for the barrel to guarantee the cylinder will not bulge or burst under maximum tonnage.',
      },
      {
        label: 'B',
        title: 'Shock Loads & Vibration',
        description: 'In environments like Rajkot\'s forging industry, the cylinder experiences violent shock when the die hits the metal. We utilize specialized sub-arc welding techniques for the end caps to ensure the welds never crack under high-frequency vibration.',
      },
      {
        label: 'C',
        title: 'Corrosion Resistance & Outdoor Operation',
        description: 'For cylinders exposed to mud, rain, or the saline air of Bhavnagar\'s shipyards, we upgrade the exterior protection. We apply multi-layer marine-grade epoxy coatings, utilize stainless steel piston rods, and install heavy-duty metallic scrapers to physically clear abrasive rust from the rod before it destroys the internal seals.',
      },
    ],
  },

  // 11. Manufacturing Process
  manufacturing: {
    heading: 'Manufacturing & Quality Process',
    description: 'Every welded cylinder is delivered with complete material traceability documentation (MTC) and dimensional reports, ensuring the actuator meets all specified OEM tolerances.',
    steps: [
      {
        icon: <Cog className="w-6 h-6" />,
        title: 'Material Selection & Forging',
        description: 'We source high-yield ST52 seamless tubes and 42CrMo4 steel for mounts. Every batch undergoes ultrasonic testing to guarantee zero internal material voids before welding begins.',
      },
      {
        icon: <Cog className="w-6 h-6" />,
        title: 'Automated Sub-Arc Assembly',
        description: 'End caps and mounting blocks are fused using automated rotary sub-arc welding. This ensures 100% continuous weld penetration, eliminating the micro-cracks common in manual welding.',
      },
      {
        icon: <Wrench className="w-6 h-6" />,
        title: 'Post-Weld Precision Honing',
        description: 'Because welding induces heat distortion, we re-hone the internal barrel only after all exterior welds are complete, guaranteeing absolute cylindricity and maximizing seal longevity.',
      },
      {
        icon: <ShieldAlert className="w-6 h-6" />,
        title: 'Dynamic QA & Stress Testing',
        description: 'Beyond static pressure tests, welded units undergo cyclical shock-load simulations at 1.5x working pressure (up to 525 Bar) to validate the weld sheer strength and seal integrity under extreme stress.',
      },
    ],
    midCta: {
      heading: 'The Honeywell Guarantee',
      description: 'Our welded cylinders are designed for a 10+ year operational lifespan. We provide comprehensive MTC (Material Test Certificates) and hydrostatic test reports with every single unit.',
      primaryCta: { label: 'REQUEST TESTING REPORT', href: '/contact-us/' },
    },
  },

  // 12. Project Spotlight
  spotlights: [
    {
      badge: 'CASE STUDY',
      heading: 'Heavy-Duty Welded Cylinder Retrofit for a Steel Forging Press',
      subheading: 'Steel Forging OEM — Rajkot, Gujarat',
      stats: [],
      phases: [
        {
          number: '01',
          title: 'The Challenge',
          description: 'The OEM\'s 800-ton forging press was previously equipped with large tie-rod cylinders. Due to the violent shock loads generated during the stamping cycle, the tie rods were continually stretching, causing the O-rings to blow out. The press was experiencing hydraulic fluid leaks every two weeks.',
        },
        {
          number: '02',
          title: 'The Solution',
          description: 'Honeywell Hydraulics completely redesigned the actuators. We manufactured four massive, custom Welded Hydraulic Cylinders utilizing ultra-thick ST52 barrels. By permanently welding the heavy flange mounts directly to the barrel, we created a single, unyielding structural unit capable of absorbing the extreme shock vibration.',
        },
        {
          number: '03',
          title: 'The Outcome',
          description: 'The fluid leaks were entirely eliminated. The welded cylinders safely absorbed the brutal 350 Bar shock spikes without yielding. Allowed the forging plant to operate continuously for 18 months without requiring a single seal replacement.',
        }
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
      question: 'Can a welded cylinder be repaired if the seals fail?',
      answer: 'Yes, but it requires machining. The welded cylinder must be placed on a lathe to cut the weld, allowing access to the internal seals. After replacing the seals, the end cap must be re-welded and hydrostatically tested. Our Hydraulic Cylinder Repair division handles this completely in-house.',
    },
    {
      question: 'Why are welded cylinders better for outdoor construction equipment?',
      answer: 'Tie rod cylinders have external threads and nuts that catch dirt, mud, and water, leading to rapid corrosion. Welded cylinders have a smooth, sleek exterior profile that is inherently weatherproof and easier to protect with marine-grade paints.',
    },
    {
      question: 'Can you customize the mounting options on a welded cylinder?',
      answer: 'Absolutely. Because there are no external tie rods obstructing the barrel, we can weld custom trunnions, cross-tubes, or heavy flanges directly to the cylinder barrel at any orientation required by your machine design.',
    },
    {
      question: 'Do you manufacture high-pressure cylinders for heavy forging presses?',
      answer: 'Yes. Forging and deep drawing presses are our primary applications for welded cylinders. We engineer these actuators using ultra-thick ST52 seamless tubes designed to withstand constant, brutal 350+ Bar pressures.',
    },
  ],
  cta: {
    title: 'Need a heavy-duty welded hydraulic cylinder for your machinery?',
    description: 'Robust welded construction for construction equipment, presses, and mobile machinery. Every cylinder is 100% hydrostatically tested at 1.5× rated pressure.',
    primaryCtaText: 'REQUEST A QUOTE',
    primaryCtaHref: '/request-quote/',
    secondaryCtaText: 'Talk to an Engineer',
    secondaryCtaHref: '/contact-us/',
  },
};
