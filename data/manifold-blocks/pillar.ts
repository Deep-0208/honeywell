import React from 'react';
import {
  Settings,
  Shield,
  Droplets,
  CheckCircle2,
  Factory,
  Building2,
  Cog,
  Zap,
} from 'lucide-react';

import type {
  ManifoldFeature,
  ManifoldSpec,
  ManifoldBlockType,
  ManifoldIndustry,
  FAQ,
} from './types';

// ─────────────────────────────────────────────────────────────────────────────
// Key Features / Advantages
// ─────────────────────────────────────────────────────────────────────────────

export const PILLAR_FEATURES: ManifoldFeature[] = [
  {
    icon: React.createElement(Droplets, { className: 'w-5 h-5' }),
    title: 'Elimination of Leak Points',
    description:
      'Every pipe fitting is a potential leak point. A manifold block eliminates these connections entirely, resolving the number one cause of hydraulic failure: fluid leakage.',
  },
  {
    icon: React.createElement(Zap, { className: 'w-5 h-5' }),
    title: 'Reduced Pressure Drop (ΔP)',
    description:
      'Smooth, optimized internal galleries maintain laminar flow, reducing turbulence and pressure drops compared to 90-degree pipe elbows, saving electrical energy at the power pack.',
  },
  {
    icon: React.createElement(Settings, { className: 'w-5 h-5' }),
    title: 'Simplified Maintenance',
    description:
      'If a valve fails, a maintenance engineer simply unscrews it from the top of the manifold and replaces it in minutes, without draining the system or dismantling complex pipework.',
  },
  {
    icon: React.createElement(Shield, { className: 'w-5 h-5' }),
    title: 'Zero-Leak Tolerances',
    description:
      'We guarantee h8 machining tolerances and Ra 0.2 µm surface finishes within the valve cavities to ensure absolute zero-leak operation and perfect O-ring seating.',
  },
  {
    icon: React.createElement(CheckCircle2, { className: 'w-5 h-5' }),
    title: '100% Hydrostatic Testing',
    description:
      'Every manifold block is sealed and pressurized to 1.5x its maximum working pressure to verify the integrity of the internal wall thicknesses before dispatch.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Technical Specifications
// ─────────────────────────────────────────────────────────────────────────────

export const PILLAR_SPECS: ManifoldSpec[] = [
  { parameter: 'Material Options', value: 'Aluminum (Alloy 6061-T6), Carbon Steel (ST52 / EN8), Ductile Iron, Stainless Steel (SS316)' },
  { parameter: 'Max Operating Pressure', value: 'Aluminum: 210 Bar. Steel/Iron: 350+ Bar. Custom configurations up to 500 Bar.' },
  { parameter: 'Valve Mounting Standards', value: 'ISO 4401 (CETOP 3, 5, 7, 8), SAE Cavities, Sun/HydraForce Cartridge Cavities' },
  { parameter: 'Port Thread Standards', value: 'BSPP, NPT, SAE O-Ring Boss, SAE Code 61/62 Flanges' },
  { parameter: 'Surface Finish', value: 'Zinc Plated, Black Oxidized, Anodized (Aluminum)' },
  { parameter: 'Testing Protocol', value: '100% Hydrostatically tested at 1.5x working pressure' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Manifold Block Types
// ─────────────────────────────────────────────────────────────────────────────

export const PILLAR_BLOCK_TYPES: ManifoldBlockType[] = [
  {
    title: 'CETOP Manifold Blocks',
    description:
      'Standardized subplates manufactured to ISO 4401 specifications. Features standard mounting patterns allowing any brand of directional control valve (Rexroth, Vickers, Parker, Yuken) to be bolted directly.',
    href: '/products/manifold-blocks/cetop-manifold-blocks/',
    image: '/images/products/manifold-blocks/cetop-manifold-block-iso-4401.webp',
  },
  {
    title: 'Multi-Station Manifold Blocks',
    description:
      'Designed to control multiple actuators simultaneously. Houses 2, 4, 6, or up to 10 CETOP valves in a single parallel or series circuit as the centralized command center.',
    href: '/products/manifold-blocks/multi-station-manifold-blocks/',
    image: '/images/products/manifold-blocks/multi-station-manifold-block.webp',
  },
  {
    title: 'Custom Hydraulic Manifold Blocks',
    description:
      'Our primary specialty. We design and machine bespoke manifolds integrating screw-in cartridge valves (Sun Hydraulics, HydraForce) for specific logic, load-holding, and proportional control.',
    href: '/products/manifold-blocks/custom-manifold-blocks/',
    image: '/images/products/manifold-blocks/custom-manifold-block-cnc-machined.webp',
  },
  {
    title: 'NG10 (06-Size) Manifold Blocks',
    description:
      'Precision CETOP 5 (NG10) subplates and multi-station blocks for industrial automation flows up to 120 LPM.',
    href: '/products/manifold-blocks/06-size-manifold-blocks/',
    image: '/images/products/manifold-blocks/ng10-06-size-manifold-block.webp',
  },
  {
    title: 'NG16 (10-Size) Manifold Blocks',
    description:
      'Heavy-duty CETOP 7 (NG16) manifold blocks designed for high-flow hydraulic systems operating up to 300 LPM.',
    href: '/products/manifold-blocks/10-size-manifold-blocks/',
    image: '/images/products/manifold-blocks/ng16-10-size-manifold-block.webp',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Industries Served
// ─────────────────────────────────────────────────────────────────────────────

export const PILLAR_INDUSTRIES: ManifoldIndustry[] = [
  {
    icon: React.createElement(Factory, { className: 'w-6 h-6' }),
    name: 'Automotive OEM',
    description:
      'Providing synchronized, high-speed control for automated robotic welding and assembly lines.',
  },
  {
    icon: React.createElement(Cog, { className: 'w-6 h-6' }),
    name: 'Injection Moulding',
    description:
      'Managing the complex logic required for rapid core pulls and high-pressure clamping sequences.',
  },
  {
    icon: React.createElement(Building2, { className: 'w-6 h-6' }),
    name: 'Steel & Metallurgy',
    description:
      'Delivering high-pressure, heat-resistant control blocks for heavy forging presses and rolling mills.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// FAQs
// ─────────────────────────────────────────────────────────────────────────────

export const PILLAR_FAQS: FAQ[] = [
  {
    question: 'Do you manufacture custom manifold blocks based on our engineering drawings?',
    answer:
      'Yes. Our OEM Hydraulic Manufacturing division can import your CAD files directly into our CNC centers and produce your proprietary manifold blocks in high volumes.',
  },
  {
    question: 'Can you help us design a manifold block if we only have the hydraulic schematic?',
    answer:
      'Absolutely. If you provide the hydraulic circuit schematic (the logic), our Custom Hydraulic System Design team will perform the 3D spatial layout, calculate the internal flow paths, and design the physical block for you.',
  },
  {
    question: 'What material do you use for manifold blocks?',
    answer:
      'We use high-grade Aluminum (6061-T6) for lightweight, low-pressure applications (up to 210 Bar), and ST52 Carbon Steel or Ductile Iron for high-pressure, heavy-duty applications (up to 350+ Bar).',
  },
  {
    question: 'Are your CETOP manifold blocks compatible with international valve brands?',
    answer:
      'Yes. Our CETOP subplates and multi-station blocks are machined to exact ISO 4401 standards, ensuring complete compatibility with directional valves from Rexroth, Vickers, Parker, Yuken, and others.',
  },
];
