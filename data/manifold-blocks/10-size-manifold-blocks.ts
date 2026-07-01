import React from 'react';
import type { ManifoldSpec, FAQ, ComparisonRow } from './types';

// ─────────────────────────────────────────────────────────────────────────────
// Technical Specifications (from Section 9)
// ─────────────────────────────────────────────────────────────────────────────

export const NG16_SPECS: ManifoldSpec[] = [
  { parameter: 'ISO Standard', value: 'ISO 4401-07 (CETOP 7 / NG16 / 10-Size)' },
  { parameter: 'Materials', value: 'AL 6061-T6, ST52 Steel, Ductile Iron GGG50, SS316L' },
  { parameter: 'Pressure Rating', value: 'AL: 210 Bar. Steel/Iron: 315 Bar' },
  { parameter: 'Gallery Bore (Standard)', value: '22mm (P & T), 18mm (A & B work galleries)' },
  { parameter: 'Gallery Bore (Heavy Duty)', value: '25mm (P & T) for 200–250 LPM peak demand' },
  { parameter: 'Station Configurations', value: '1 to 6 stations' },
  { parameter: 'Port Connections', value: 'G3/4" BSPP, SAE-12 O-Ring Boss, SAE Code 61' },
  { parameter: 'Testing', value: '100% Hydrostatic at 1.5x working pressure' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Performance Envelope (from Section 4)
// ─────────────────────────────────────────────────────────────────────────────

export const NG16_PERFORMANCE: ManifoldSpec[] = [
  { parameter: 'ISO Standard', value: 'ISO 4401-07-07-0-05' },
  { parameter: 'Nominal Flow Capacity', value: '200 LPM (continuous), 250 LPM (peak)' },
  { parameter: 'Maximum Working Pressure', value: '315 Bar (in steel/ductile iron blocks)' },
  { parameter: 'Mounting Bolt Pattern', value: '4 × M8 bolts, ISO 4401-07 spacing' },
  { parameter: 'P Port (Pressure In)', value: 'G 3/4" BSPP (or SAE-12)' },
  { parameter: 'T Port (Tank Return)', value: 'G 3/4" BSPP (or SAE-12)' },
  { parameter: 'A & B Work Ports', value: 'G 1/2" BSPP (or SAE-10)' },
  { parameter: 'Valve O-Ring Seal Size', value: 'ISO 4401-07 D-ring specification' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Product Range (from Section 6)
// ─────────────────────────────────────────────────────────────────────────────

export const NG16_PRODUCT_RANGE = [
  {
    title: 'NG16 Single-Station Subplates',
    description: 'For single-cylinder, high-flow applications. Standard configuration with G3/4" P and T ports. Available with SAE Code 61 flange option for very high-flow connections. Aluminium (up to 210 Bar) or ST52 Steel (up to 315 Bar).',
  },
  {
    title: 'NG16 Multi-Station Manifold Rails',
    description: '2 to 6-station parallel rails. The physical size of NG16 blocks limits practical multi-station rails to 6 stations before the block length exceeds manageable dimensions. For 6+ high-flow stations, we recommend our custom manifold block approach with integrated cartridge valves.',
  },
  {
    title: 'NG16 Sandwich Subbase Plates',
    description: 'Extended subbase plates for stacking pressure-reducing and flow-control sandwich modules between the base and the directional valve. Useful for complex, multi-pressure circuits driving large cylinders.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Material Selection (from Section 7)
// ─────────────────────────────────────────────────────────────────────────────

export const NG16_MATERIALS: ComparisonRow[] = [
  { feature: 'General factory floor', columns: ['Aluminium 6061-T6 (anodized)', '210 Bar'] },
  { feature: 'Heavy press rooms, heat', columns: ['ST52 Carbon Steel (zinc plated)', '315 Bar'] },
  { feature: 'Forge shops, high vibration', columns: ['Ductile Iron (GGG50, epoxy coated)', '315 Bar'] },
  { feature: 'Marine/outdoor high-flow', columns: ['SS316L (electroless nickel)', '250 Bar'] },
];
export const NG16_MATERIAL_HEADERS = ['Operating Condition', 'Recommended Material', 'Pressure Limit'];

// ─────────────────────────────────────────────────────────────────────────────
// FAQs
// ─────────────────────────────────────────────────────────────────────────────

export const NG16_FAQS: FAQ[] = [
  {
    question: 'How do I know if I need NG10 or NG16?',
    answer: 'Calculate your maximum circuit flow: bore (m)² × π/4 × velocity (m/s) × 60,000 = LPM. If this exceeds 80 LPM, specify NG16. If it exceeds 200 LPM, specify CETOP 8 (NG22).',
  },
  {
    question: 'Can I mount an NG10 (CETOP 5) valve on an NG16 (CETOP 7) block?',
    answer: 'No. The bolt patterns, port locations, and O-ring sizes are completely different between sizes. Each CETOP size is a distinct, non-interchangeable interface.',
  },
  {
    question: 'Do you stock standard NG16 single-station subplates for quick delivery?',
    answer: 'We maintain buffer stock of standard NG16 single-station subplates in both aluminium and steel. Standard configurations (G3/4" BSPP ports) can typically be despatched within 3–5 working days.',
  },
  {
    question: 'What is ductile iron and why use it for NG16 blocks?',
    answer: 'Ductile iron (GGG50) is a cast iron alloy with superior mechanical toughness and excellent vibration damping compared to steel. For high-flow circuits driven by gear pumps (which produce significant pressure pulsation), ductile iron blocks absorb the pulsation energy, reducing stress fatigue on valve body seals and extending the overall system service life.',
  },
];
