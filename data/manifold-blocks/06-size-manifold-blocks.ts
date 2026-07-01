import React from 'react';
import type { ManifoldSpec, FAQ, ComparisonRow } from './types';

// ─────────────────────────────────────────────────────────────────────────────
// Technical Specifications (from Section 8)
// ─────────────────────────────────────────────────────────────────────────────

export const NG10_SPECS: ManifoldSpec[] = [
  { parameter: 'ISO Standard', value: 'ISO 4401-05 (CETOP 5 / NG10 / 06-Size)' },
  { parameter: 'Material Options', value: 'AL 6061-T6, ST52 Carbon Steel, EN8 Steel' },
  { parameter: 'Pressure Rating', value: 'AL: 210 Bar max. Steel: 315 Bar max' },
  { parameter: 'Flow Rating', value: '80 LPM continuous, 120 LPM peak' },
  { parameter: 'Station Configurations', value: '1, 2, 3, 4, 5, 6, 8 stations' },
  { parameter: 'Port Thread Options', value: 'BSPP (G1/2" P&T, G3/8" A&B), SAE O-Ring Boss' },
  { parameter: 'Surface Finish', value: 'Anodize (AL), Zinc Plate / Black Oxide (Steel)' },
  { parameter: 'Testing', value: '100% Hydrostatic at 1.5x WP' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Performance Envelope (from Section 4)
// ─────────────────────────────────────────────────────────────────────────────

export const NG10_PERFORMANCE: ManifoldSpec[] = [
  { parameter: 'ISO Standard', value: 'ISO 4401-05-05-0-05' },
  { parameter: 'Nominal Flow Capacity', value: '80 LPM (continuous), 120 LPM (peak)' },
  { parameter: 'Maximum Working Pressure', value: '315 Bar (in steel/iron blocks)' },
  { parameter: 'Mounting Bolt Pattern', value: '4 × M6 bolts, ISO 4401-05 spacing' },
  { parameter: 'P Port (Pressure In)', value: 'G 1/2" BSPP (or SAE-8)' },
  { parameter: 'T Port (Tank Return)', value: 'G 1/2" BSPP (or SAE-8)' },
  { parameter: 'A & B Work Ports', value: 'G 3/8" BSPP (or SAE-6)' },
  { parameter: 'Valve Seal Size', value: 'D-ring or O-ring to ISO 4401-05 specification' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Product Range (from Section 5)
// ─────────────────────────────────────────────────────────────────────────────

export const NG10_PRODUCT_RANGE = [
  {
    title: 'Single-Station NG10 Subplates',
    description: 'Standard in-line subplates in Aluminium (≤210 Bar) and ST52 Steel (≤315 Bar). Available with G1/2" BSPP, SAE-8 O-Ring Boss, or SAE Code 61 flange ports in P and T positions.',
  },
  {
    title: 'NG10 Multi-Station Rails',
    description: '2-station to 8-station parallel rail manifolds sharing a common P and T gallery. Machined from a single billet of ST52 steel for maximum structural integrity. Available with integrated gauge ports and optional POCV cartridge provisions per station.',
  },
  {
    title: 'NG10 Sandwich (Subbase) Plates',
    description: 'Extended subbase bodies designed to stack one or more modular sandwich plates (flow control, pressure reducing, check valve plates) between the subbase and the directional valve, providing circuit modification capability without external pipework.',
  },
  {
    title: 'NG10 Custom Integration Blocks',
    description: 'Purpose-machined NG10-compatible blocks incorporating additional logic cavities for specific circuit functions — such as combined CETOP 5 directional valves plus Sun Hydraulics cartridge-type relief and sequence valves in a single monolithic block.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Size Comparison (from Section 6)
// ─────────────────────────────────────────────────────────────────────────────

export const NG10_SIZE_COMPARISON: ComparisonRow[] = [
  { feature: 'Max Flow', columns: ['40 LPM', '120 LPM', '250 LPM'] },
  { feature: 'Typical Cylinder Bore', columns: ['Up to 63mm', '63mm to 160mm', '100mm to 250mm'] },
  { feature: 'Block Size (Single Station)', columns: ['Very compact', 'Medium (industry standard)', 'Large'] },
  { feature: 'Availability', columns: ['High', 'Highest (most common)', 'Medium'] },
  { feature: 'Port Size', columns: ['G3/8"', 'G1/2"', 'G3/4"'] },
];
export const NG10_SIZE_HEADERS = ['NG6 (CETOP 3)', 'NG10 (CETOP 5)', 'NG16 (CETOP 7)'];

// ─────────────────────────────────────────────────────────────────────────────
// FAQs
// ─────────────────────────────────────────────────────────────────────────────

export const NG10_FAQS: FAQ[] = [
  {
    question: 'Is CETOP 5, NG10, and 06-Size all the same thing?',
    answer: 'Yes, completely. They are three different regional naming conventions for the identical ISO 4401-05 valve mounting interface. Any valve labelled with any of these three designations will mount on our block interchangeably.',
  },
  {
    question: 'What is the correct internal gallery bore size for an NG10 block at 80 LPM?',
    answer: 'To maintain fluid velocity below 6 m/s at 80 LPM, the minimum internal gallery bore diameter is 17mm for the P and T galleries. Our standard NG10 blocks use 18mm galleries for the P and T runs, providing a comfortable margin.',
  },
  {
    question: 'Do you supply NG10 blocks for proportional valve mounting?',
    answer: 'Yes. Proportional directional valves (such as the Rexroth 4WRPEH or Parker EW series) use the same NG10 mounting interface. The only difference is that proportional valve mounting faces require a finer surface finish (Ra 0.4 µm or better) to ensure the valve\'s internal spool seats flush. We specify this finish for all proportional-rated blocks.',
  },
];
