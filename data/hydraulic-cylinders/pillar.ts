import React from 'react';
import { ShieldCheck, Ruler, Wrench, Settings2, Shield, Factory, Truck, Cogs, Hammer, Tractor } from 'lucide-react';
import { FaIndustry, FaTruck, FaCogs, FaHammer, FaTractor } from 'react-icons/fa';

import type {
  CylinderFeature,
  CylinderSpec,
  CylinderType,
  CylinderIndustry,
  FAQ,
} from './types';

// ─────────────────────────────────────────────────────────────────────────────
// Key Features / Advantages
// ─────────────────────────────────────────────────────────────────────────────

export const PILLAR_FEATURES: CylinderFeature[] = [
  {
    icon: React.createElement(ShieldCheck, { className: 'w-5 h-5' }),
    title: 'Zero-Leak Assurance',
    description: 'We use high-grade seal kits (equivalent to Parker/Hallite) to ensure 100% leak-proof performance under extreme pressures and harsh conditions.',
  },
  {
    icon: React.createElement(Ruler, { className: 'w-5 h-5' }),
    title: 'Precision Machining',
    description: 'Our barrels are honed to H8 tolerance with Ra 0.2-0.4µm surface finish, drastically reducing seal wear and extending the cylinder lifecycle.',
  },
  {
    icon: React.createElement(Wrench, { className: 'w-5 h-5' }),
    title: 'Heavy-Duty Materials',
    description: 'We utilize cold-drawn ST52/E355 seamless steel tubes and EN8/EN19/EN24 alloy steel rods, hard chrome plated to 20-25 microns for maximum durability.',
  },
  {
    icon: React.createElement(Settings2, { className: 'w-5 h-5' }),
    title: 'Custom Engineering',
    description: 'From customized mountings to specific stroke lengths and high-temperature Viton seals, we design cylinders tailored to your exact machine requirements.',
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// Technical Specifications
// ─────────────────────────────────────────────────────────────────────────────

export const PILLAR_SPECS: CylinderSpec[] = [
  { parameter: 'Bore Size Range', value: '40 mm to 300 mm (Custom up to 500mm)' },
  { parameter: 'Stroke Length', value: 'Up to 3000 mm (Standard)' },
  { parameter: 'Working Pressure', value: '160 Bar to 350+ Bar' },
  { parameter: 'Rod Material', value: 'EN8 / EN19 / EN24 (Hard Chrome Plated 20-25µ)' },
  { parameter: 'Barrel Material', value: 'ST52 / E355 Cold Drawn Seamless Tubes' },
  { parameter: 'Seal Kits', value: 'Parker, Hallite, or Equivalent (PU/PTFE/Viton)' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Cylinder Types
// ─────────────────────────────────────────────────────────────────────────────

export const PILLAR_BLOCK_TYPES: CylinderType[] = [
  {
    title: "Double Acting Hydraulic Cylinders",
    description: "Our most versatile cylinders providing hydraulic power in both extension and retraction strokes for precise load control.",
    category: "Hydraulic Cylinders",
    imageSrc: "/images/home/hero/double-acting-hydraulic-cylinder-manufacturer.webp",
    href: "/products/hydraulic-cylinders/double-acting-hydraulic-cylinders/"
  },
  {
    title: "Single Acting Hydraulic Cylinders",
    description: "Designed for applications where gravity or a mechanical spring returns the cylinder to its original position.",
    category: "Hydraulic Cylinders",
    imageSrc: "/images/products/hydraulic-cylinders/single-acting-hydraulic-cylinder.webp",
    href: "/products/hydraulic-cylinders/single-acting-hydraulic-cylinders/"
  },
  {
    title: "Tie-Rod Hydraulic Cylinders",
    description: "Industry-standard NFPA cylinders designed for easy maintenance, high cycle rates, and rugged industrial applications.",
    category: "Hydraulic Cylinders",
    imageSrc: "/images/products/hydraulic-cylinders/tie-rod-hydraulic-cylinder.webp",
    href: "/products/hydraulic-cylinders/tie-rod-hydraulic-cylinders/"
  },
  {
    title: "Welded Hydraulic Cylinders",
    description: "Compact, heavy-duty cylinders engineered for mobile equipment and applications with spatial constraints.",
    category: "Hydraulic Cylinders",
    imageSrc: "/images/home/hero/welded-hydraulic-cylinder-manufacturer.webp",
    href: "/products/hydraulic-cylinders/welded-hydraulic-cylinders/"
  },
  {
    title: "Telescopic Hydraulic Cylinders",
    description: "Multi-stage cylinders offering exceptionally long strokes from a compact retracted length, ideal for tipper trucks.",
    category: "Hydraulic Cylinders",
    imageSrc: "/images/products/hydraulic-cylinders/telescopic-hydraulic-cylinder.webp",
    href: "/products/hydraulic-cylinders/telescopic-hydraulic-cylinders/"
  },
  {
    title: "Custom Hydraulic Cylinders",
    description: "Engineered-to-order cylinders tailored to your exact bore, stroke, pressure, and mounting specifications.",
    category: "Hydraulic Cylinders",
    imageSrc: "/images/home/hero/custom-hydraulic-cylinder-manufacturer.webp",
    href: "/products/hydraulic-cylinders/custom-hydraulic-cylinders/"
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// Industries Served
// ─────────────────────────────────────────────────────────────────────────────

export const PILLAR_INDUSTRIES: CylinderIndustry[] = [
  {
    icon: React.createElement(FaIndustry, { className: 'w-6 h-6' }),
    industryName: "Injection Moulding",
    description: "High-speed, high-cycle tie-rod hydraulic cylinders designed for rapid core-pulling and mould clamping.",
    href: "#",
  },
  {
    icon: React.createElement(FaTractor, { className: 'w-6 h-6' }),
    industryName: "Construction & Earthmoving",
    description: "Heavy-duty boom, stick, and bucket hydraulic cylinders engineered for shock resistance in excavators and earthmovers.",
    href: "#",
  },
  {
    icon: React.createElement(FaCogs, { className: 'w-6 h-6' }),
    industryName: "Manufacturing & Industrial Automation",
    description: "Precision hydraulic actuators with micron-level accuracy for robotic welding, assembly lines, and testing jigs.",
    href: "#",
  },
  {
    icon: React.createElement(FaTruck, { className: 'w-6 h-6' }),
    industryName: "Material Handling",
    description: "Reliable, leak-free telescopic and double-acting cylinders for forklifts, scissor lifts, and automated guided vehicles (AGVs).",
    href: "#",
  },
  {
    icon: React.createElement(FaHammer, { className: 'w-6 h-6' }),
    industryName: "Rolling Mill",
    description: "Rugged mill-type hydraulic cylinders built with high-temperature Viton seals to withstand extreme foundry environments.",
    href: "#",
  },
  {
    icon: React.createElement(FaIndustry, { className: 'w-6 h-6' }),
    industryName: "Wooden Industries",
    description: "High-tonnage hydraulic press cylinders optimized for plywood pressing, veneer peeling, and heavy timber cutting machines.",
    href: "#",
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// FAQs
// ─────────────────────────────────────────────────────────────────────────────

export const PILLAR_FAQS: FAQ[] = [
  {
    question: "Do you manufacture custom hydraulic cylinders?",
    answer: "Yes, custom manufacturing is our primary focus. We design and build hydraulic cylinders to your exact specifications, analyzing cycle rates, environmental exposure, side-loading possibilities, and fluid compatibility to ensure optimal performance."
  },
  {
    question: "What is the maximum bore size and stroke length you can manufacture?",
    answer: "We manufacture custom hydraulic cylinders with bore sizes ranging from 40mm up to 300mm, and stroke lengths reaching up to 3000mm. We can also accommodate special requirements beyond standard dimensions."
  },
  {
    question: "What materials are used in your hydraulic cylinders?",
    answer: "Our cylinders are constructed using premium materials: cold-drawn ST52/E355 grade seamless steel tubes for barrels, EN8/EN19/EN24 high-tensile alloy steel for rods (hard chrome plated to 20-25 microns), and imported polyurethane/PTFE seal kits equivalent to Parker or Hallite."
  },
  {
    question: "Are your cylinders tested before delivery?",
    answer: "Yes, every single industrial hydraulic cylinder we produce undergoes a rigorous quality assurance process, including 100% hydrostatic pressure testing at 1.5x its rated working pressure before dispatch to ensure zero out-of-the-box leaks."
  }
];
