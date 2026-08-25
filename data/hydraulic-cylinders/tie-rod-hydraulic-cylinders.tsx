import React from 'react';
import {
  Wrench,
  Layers,
  Settings,
  ShieldCheck,
  Zap,
  Box,
} from 'lucide-react';
import { FaIndustry, FaBox, FaWrench, FaCogs } from 'react-icons/fa';
import type { ProductPageData } from '@/components/product-page/types';

export const tieRodCylinderData: ProductPageData = {
  // 1. SEO & Metadata
  seo: {
    title: 'Tie Rod Hydraulic Cylinder Manufacturer in Gujarat | NFPA Standard',
    description: 'Leading tie rod hydraulic cylinder manufacturer in India. We supply heavy-duty, highly serviceable NFPA standard tie rod cylinders to OEMs and machine builders.',
    url: '/products/hydraulic-cylinders/tie-rod-hydraulic-cylinders/',
    image: '/images/products/hydraulic-cylinders/tie-rod-hydraulic-cylinder-manufacturer.webp',
  },

  // 2. Schema Data
  schema: {
    productName: 'Tie Rod Hydraulic Cylinders',
    category: 'Hydraulic Cylinders',
    properties: [
      { name: 'Bore Sizes', value: '40mm to 250mm (1.5" to 10" NFPA standard)' },
      { name: 'Maximum Operating Pressure', value: 'Up to 210 Bar (3000 PSI)' },
      { name: 'Mounting Standards', value: 'NFPA, ISO 6020/2, Custom' },
      { name: 'Barrel Material', value: 'ST52 Seamless Honed Tube' },
    ],
  },

  // 4. Hero Section
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products/' },
      { label: 'Hydraulic Cylinders', href: '/products/hydraulic-cylinders/' },
    ],
    currentPage: 'Tie Rod Cylinders',
    subtitle: 'HIGH SERVICEABILITY ACTUATION',
    h1: 'Tie Rod Hydraulic Cylinder Manufacturer',
    description: 'Engineered for absolute precision and rapid field maintenance. Honeywell Hydraulics is a premier tie rod hydraulic cylinder manufacturer in Gujarat, supplying highly standardized, heavy-duty NFPA tie rod cylinders to OEMs, machine builders, and automated factories.',
    image: {
      src: '/images/products/hydraulic-cylinders/tie-rod-hydraulic-cylinder-manufacturer.webp',
      alt: 'Tie Rod Hydraulic Cylinder Manufacturer in Ahmedabad - NFPA tie rod cylinder by Honeywell Hydraulics',
    },
    primaryCta: { label: 'REQUEST OEM QUOTE', href: '/request-quote/#quote-form' },
    secondaryCta: { label: 'VIEW TECHNICAL SPECS', href: '#technical-specifications' },
    keySpecs: [
      { label: 'Bore', value: '40mm - 250mm' },
      { label: 'Standard', value: 'NFPA / ISO 6020' },
      { label: 'Pressure', value: 'Up to 210 Bar' },
      { label: 'Maintenance', value: 'Field Serviceable' },
    ],
  },

  // 5. Overview Section
  overview: {
    heading: 'What Are Tie Rod Hydraulic Cylinders?',
    content: (
      <>
        <p>In the world of industrial linear actuation, the <strong>Tie Rod Hydraulic Cylinder</strong> is the undisputed standard for automated manufacturing. According to industry reliability studies, implementing standardized tie rod cylinders can reduce maintenance-related downtime by up to 80% compared to custom-welded alternatives in high-cycle environments.</p>
        <p>Unlike welded cylinders, which permanently fuse the barrel to the end caps, a tie rod cylinder relies on four or more high-tensile threaded steel rods (the &quot;tie rods&quot;) running the entire length of the cylinder exterior. These rods clamp the two end caps tightly against the central steel barrel.</p>
        <p>As a leading industrial tie rod cylinder supplier, we manufacture these units specifically for factory environments. Their clamped construction makes them incredibly easy to disassemble, inspect, and rebuild directly on the factory floor without requiring heavy cutting or welding equipment. Furthermore, they are typically manufactured to strict NFPA (National Fluid Power Association) or ISO dimensional standards, allowing machine builders to seamlessly drop our cylinders into existing equipment designs.</p>
      </>
    ),
  },

  // 6. Key Features (Construction)
  keyFeatures: {
    heading: 'Tie Rod Construction Explained',
    description: 'The structural integrity of a tie rod cylinder relies entirely on the precise machining and torquing of its core components.',
    items: [
      {
        icon: <Box className="w-6 h-6" />,
        title: 'The End Caps',
        description: 'CNC-machined from solid steel blocks. The head cap and the rear cap feature deep grooves designed to perfectly seat the barrel. These caps house the fluid ports and the crucial rod wiper and gland seals.',
      },
      {
        icon: <Wrench className="w-6 h-6" />,
        title: 'The Tie Rods',
        description: 'High-yield-strength alloy steel rods. Torqued to exact mathematical specifications to provide massive clamping force, ensuring the O-ring static seals never blow out under pressure.',
      },
      {
        icon: <Layers className="w-6 h-6" />,
        title: 'The Barrel',
        description: 'Precision-honed ST52 seamless steel tubing. Honed to a mirror-like Ra 0.2 µm finish. Zero heat-induced distortion maintains perfect internal cylindricity.',
      },
      {
        icon: <Settings className="w-6 h-6" />,
        title: 'The Piston & Rod',
        description: 'Internal piston utilizes premium polyurethane U-cups. The hard-chrome plated piston rod transmits mechanical force and resists wear.',
      },
      {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: 'Sealing System',
        description: 'Premium low-friction seals designed specifically to minimize heat generation during rapid, continuous-cycle stroking.',
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: 'Rapid Serviceability',
        description: 'Loosen the tie rod nuts, slide the end cap off, replace the seal, and re-bolt the cylinder together using standard hand tools within 30 minutes.',
      },
    ],
  },

  // 7. Technical Specs
  technicalSpecs: {
    heading: 'Technical Specifications',
    description: 'Manufactured to industry standard specifications to ensure interchangeability and reliability across all automated applications.',
    tableTitle: 'Standard Capability Range',
    rows: [
      { parameter: 'Bore Sizes', value: '40mm to 250mm (1.5" to 10" NFPA standard)' },
      { parameter: 'Maximum Operating Pressure', value: 'Up to 210 Bar (3000 PSI)' },
      { parameter: 'Maximum Side Load', value: 'Low to Moderate (Susceptible to tie-rod stretch)' },
      { parameter: 'Operating Speed', value: 'Up to 1.0 m/s (High-speed options available)' },
      { parameter: 'Mounting Standards', value: 'NFPA, ISO 6020/2, Custom' },
      { parameter: 'Tie Rod Material', value: 'High-Tensile Alloy Steel (Minimum 100,000 PSI yield)' },
      { parameter: 'Barrel Material', value: 'ST52 Seamless Honed Tube (Ra 0.2 µm finish)' },
      { parameter: 'Sealing Options', value: 'Polyurethane (Standard), Viton (High-Temp), PTFE (Low-Friction)' },
      { parameter: 'Cushioning', value: 'Adjustable internal cushioning available on both head and cap ends' },
    ],
    primaryCta: { label: 'REQUEST OEM PRICING', href: '/request-quote/#quote-form' },
    secondaryCta: { label: 'DISCUSS SIZING', href: '/contact-us/' },
  },

  // 8. Product Variants / Comparison
  comparisons: [
    {
      heading: 'Tie Rod vs. Welded Cylinders',
      description: 'Understanding when to specify a tie rod cylinder versus a welded cylinder is critical to machine design.',
      columns: [{ heading: 'Feature' }, { heading: 'Tie Rod Cylinders' }, { heading: 'Welded Cylinders' }],
      rows: [
        { feature: 'Construction', values: [{ text: 'Bolted exterior rods clamp caps to barrel' }, { text: 'End caps permanently welded to the barrel' }] },
        { feature: 'Maximum Pressure', values: [{ text: 'Low to Medium (Typically up to 210 Bar / 3000 PSI)' }, { text: 'High to Extreme (Up to 350+ Bar / 5000+ PSI)' }] },
        { feature: 'Serviceability', values: [{ text: 'Extremely High (Disassembled with standard wrenches)', highlight: true }, { text: 'Low (Requires specialized tools or cutting to rebuild)' }] },
        { feature: 'Environment', values: [{ text: 'Clean indoor factories, automated assembly lines' }, { text: 'Harsh outdoor, heavy construction, mining' }] },
        { feature: 'Standardization', values: [{ text: 'Highly standardized (NFPA/ISO interchangeable)' }, { text: 'Usually highly customized per application' }] },
      ],
    }
  ],

  // 9. Industries
  industries: {
    heading: 'Industries Served',
    description: 'Our custom tie rod hydraulic cylinders are the standard actuators for continuous manufacturing sectors.',
    items: [
      {
        icon: <FaIndustry className="w-6 h-6" />,
        name: 'Automotive OEM',
        description: 'Providing high-speed, highly serviceable clamping cylinders for robotic welding stations and assembly lines.',
        href: '#'
      },
      {
        icon: <FaBox className="w-6 h-6" />,
        name: 'Plastic Processing',
        description: 'Supplying standardized core-pull and ejector cylinders for injection moulding machines.',
        href: '#'
      },
      {
        icon: <FaWrench className="w-6 h-6" />,
        name: 'Machine Tool Builders',
        description: 'Delivering zero-distortion, low-friction actuation for automated CNC loading and unloading gantries.',
        href: '#'
      },
      {
        icon: <FaCogs className="w-6 h-6" />,
        name: 'Packaging & Automation',
        description: 'Engineering rapid-cycle cylinders for high-speed corrugated box manufacturing and palletizing robots.',
        href: '#'
      },
    ],
  },

  // 10. Engineering / How to Choose
  engineering: {
    heading: 'How to Choose the Right Tie-Rod Hydraulic Cylinder',
    description: 'When specifying an NFPA tie-rod cylinder, evaluating the duty cycle and environment is critical.',
    items: [
      {
        label: 'A',
        title: 'Duty Cycle & Cycle Rate',
        description: 'For high-speed automated processes, we specify low-friction PTFE seals and precision-tuned adjustable cushions to prevent end-of-stroke slamming, extending the cylinder life to millions of cycles.',
      },
      {
        label: 'B',
        title: 'Temperature Limitations',
        description: 'Standard polyurethane seals operate up to 90°C. For plastic injection molding or steel mills, we upgrade to Fluorocarbon (Viton) seals, allowing continuous operation at 200°C without seal degradation.',
      },
      {
        label: 'C',
        title: 'NFPA Mounting Style',
        description: 'Selecting the correct NFPA mount (e.g., MP1 Clevis, MF1 Front Flange, MS2 Side Lug) ensures the cylinder properly absorbs the load without inducing destructive side-loading on the piston rod.',
      },
    ],
  },

  // 11. Manufacturing Process
  manufacturing: {
    heading: 'Manufacturing & Quality Process',
    description: 'Every NFPA tie rod cylinder is delivered with a complete dimensional test certificate, verifying that the pin-to-pin lengths and port orientations exactly match your supplied CAD drawings.',
    steps: [
      {
        icon: 'cog',
        title: 'Material Verification',
        description: 'All incoming high-tensile steel tie-rods and ST52 honed tubes undergo strict metallurgical inspection and hardness testing prior to CNC machining.',
      },
      {
        icon: 'wrench',
        title: 'Precision Assembly & Torquing',
        description: 'Tie-rods are systematically tensioned using calibrated pneumatic torque-yield wrenches. This guarantees uniform clamping force across all four corners, preventing asymmetrical seal extrusion.',
      },
      {
        icon: 'shield',
        title: 'Automated Functional Testing',
        description: '100% of tie-rod units undergo automated cycling and 1.5x working pressure hydrostatic testing to guarantee zero internal bypass and perfect cushion engagement.',
      },
      {
        icon: 'shield',
        title: 'ISO Dimensional QA',
        description: 'Final inspection utilizes CMM (Coordinate Measuring Machines) to verify that pin-to-pin mounting dimensions perfectly match the requested NFPA or ISO 6020 specifications.',
      },
    ],
    midCta: {
      heading: 'The Honeywell Guarantee',
      description: 'Our heavy-duty tie rod cylinders are backed by a strict Defect Warranty. Should a unit require maintenance, our highly serviceable design allows your technicians to replace seals in minutes.',
      primaryCta: { label: 'REQUEST REPAIR', href: '/contact-us/' },
    },
  },

  // 11. Project Spotlight
  spotlights: [
    {
      badge: 'CASE STUDY',
      subheading: 'Automotive Robotic Welding Cell',
      heading: 'Project Spotlight: Standardized Tie Rod Cylinders',
      stats: [],
      phases: [
        {
          number: '01',
          title: 'The Challenge',
          description: 'The OEM built a multi-station robotic welding cell using custom-welded cylinders for part clamping. When a seal failed due to weld-spatter damage, the maintenance team had to cut the cylinder apart, causing 14 hours of assembly line downtime.',
        },
        {
          number: '02',
          title: 'The Solution',
          description: 'Honeywell Hydraulics supplied NFPA standard Tie Rod Cylinders with high-temperature Viton seals and heavy-duty rod wipers to repel weld spatter. We standardized the mounting dimensions across the entire cell.',
        },
        {
          number: '03',
          title: 'The Outcome',
          description: 'Downtime reduced from 14 hours to 30 minutes for seal replacement. Spatter-related failures eliminated by 90% due to upgraded wiper seals. 100% dimensional interchangeability allowed the client to stock just two cylinder sizes for the entire assembly line.',
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
        title: 'Welded Hydraulic Cylinders',
        description: 'Robust welded construction for mobile equipment and severe duty cycles.',
        category: 'Hydraulic Cylinders',
        imageSrc: '/images/products/hydraulic-cylinders/welded-hydraulic-cylinder-manufacturer.webp',
        href: '/products/hydraulic-cylinders/welded-hydraulic-cylinders/',
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
      question: 'Why should I choose a tie rod cylinder instead of a welded cylinder?',
      answer: 'If your machine operates indoors and requires rapid maintenance to prevent costly downtime, tie rod cylinders are superior because they can be disassembled and rebuilt on the factory floor with standard wrenches.',
    },
    {
      question: 'Are your tie rod cylinders interchangeable with other NFPA brands?',
      answer: 'Yes. We manufacture our tie rod cylinders to strict NFPA and ISO 6020/2 dimensional standards. The mounting dimensions, port locations, and pin-to-pin lengths will perfectly match major international brands, allowing for easy drop-in replacements.',
    },
    {
      question: 'Can a tie rod cylinder handle high pressures?',
      answer: 'Tie rod cylinders are generally rated for low to medium pressure (up to 210 Bar / 3000 PSI). For extreme high-pressure applications (350+ Bar) where shock loads could cause the tie rods to stretch, we recommend our Welded Hydraulic Cylinders.',
    },
    {
      question: 'Do you offer adjustable cushioning on your tie rod cylinders?',
      answer: 'Yes. We can integrate adjustable internal fluid cushions on both the head and cap ends to safely decelerate the piston at the end of the stroke, preventing mechanical slamming in high-speed automation.',
    },
  ],
  cta: {
    title: 'Need NFPA-standard tie rod hydraulic cylinders?',
    description: 'Field-serviceable design with replaceable seals and modular construction. Standard bore sizes ship within 7 working days.',
    primaryCtaText: 'REQUEST A QUOTE',
    primaryCtaHref: '/request-quote/#quote-form',
    secondaryCtaText: 'Talk to an Engineer',
    secondaryCtaHref: '/contact-us/',
  },
};
