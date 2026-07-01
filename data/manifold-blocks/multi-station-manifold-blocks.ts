import React from 'react';
import type { ManifoldSpec, FAQ, ComparisonRow } from './types';

// ─────────────────────────────────────────────────────────────────────────────
// Technical Specifications (from Section 9)
// ─────────────────────────────────────────────────────────────────────────────

export const MULTI_STATION_SPECS: ManifoldSpec[] = [
  { parameter: 'Station Range', value: '2-Station to 10-Station (custom counts on request)' },
  { parameter: 'CETOP Sizes', value: 'CETOP 3, CETOP 5, CETOP 7, CETOP 8' },
  { parameter: 'Material', value: 'Aluminium 6061-T6 (≤210 Bar), ST52 Steel (≤315 Bar)' },
  { parameter: 'Circuit Configuration', value: 'Parallel, Series, or Mixed (custom)' },
  { parameter: 'Optional Integrations', value: 'Per-station relief, POCVs, gauge ports, manual overrides' },
  { parameter: 'Surface Treatment', value: 'Anodize (Al), Zinc Plate or Black Oxide (Steel)' },
  { parameter: 'Lead Time', value: '2–4 weeks (standard), 1 week (repeat orders)' },
  { parameter: 'Testing', value: '100% hydrostatic at 1.5x working pressure' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Parallel vs Series Configuration (from Section 4)
// ─────────────────────────────────────────────────────────────────────────────

export const MULTI_STATION_CIRCUIT_TYPES: ComparisonRow[] = [
  { feature: 'P Gallery Design', columns: ['Single shared P gallery feeds all stations simultaneously', 'Outlet of station 1 feeds inlet of station 2, etc.', 'Shared P and T with tandem spool valves for low-idle pressure'] },
  { feature: 'T Gallery Design', columns: ['Single shared T gallery', 'Single shared T return', 'Standard T'] },
  { feature: 'Typical Use Case', columns: ['Independent control of multiple cylinders (most common)', 'Synchronized sequence — cylinder A MUST complete before cylinder B starts', 'High-speed press with energy-efficient idle state'] },
];
export const MULTI_STATION_CIRCUIT_HEADERS = ['Parallel', 'Series', 'Tandem Centre'];

// ─────────────────────────────────────────────────────────────────────────────
// Station Count Guide (from Section 5)
// ─────────────────────────────────────────────────────────────────────────────

export const MULTI_STATION_COUNT_GUIDE: ComparisonRow[] = [
  { feature: '2-Station', columns: ['Simple clamping + pressing machine', '2 independent cylinders or motors'] },
  { feature: '4-Station', columns: ['Injection moulding core-pull systems', 'Clamping + injection + core-pull A + core-pull B'] },
  { feature: '6-Station', columns: ['Multi-clamp SPM fixtures', '6 independent work-holding clamps'] },
  { feature: '8-Station', columns: ['Transfer press automation', '8 sequential pressing/punching cylinders'] },
  { feature: '10-Station', columns: ['Complex assembly automation', '10-axis SPM with full simultaneous logic'] },
];

// ─────────────────────────────────────────────────────────────────────────────
// CETOP Sizes (from Section 6)
// ─────────────────────────────────────────────────────────────────────────────

export const MULTI_STATION_CETOP_SIZES = [
  {
    title: 'CETOP 3 (NG6) Multi-Station',
    description: 'Ideal for compact SPMs with cylinder bores up to 80mm and flow rates up to 40 LPM per station.',
  },
  {
    title: 'CETOP 5 (NG10) Multi-Station',
    description: 'The most common size for general industrial automation up to 120 LPM per station.',
  },
  {
    title: 'CETOP 7 (NG16) Multi-Station',
    description: 'For high-flow circuits powering large-bore cylinders and hydraulic motors at up to 250 LPM per station.',
  },
  {
    title: 'CETOP 8 (NG22) Multi-Station',
    description: 'For very high-flow systems driving massive press cylinders at 400+ LPM per station.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Integrated Safety Features (from Section 7)
// ─────────────────────────────────────────────────────────────────────────────

export const MULTI_STATION_SAFETY_FEATURES = [
  {
    title: 'Individual Station Relief Valves',
    description: 'Per-station pressure relief cartridges machined directly into the block body, allowing different circuit areas to operate at different pressures from a single power pack.',
  },
  {
    title: 'Pilot-Operated Check Valves (POCVs)',
    description: 'Integrated directly at each A/B work port to provide load-holding capability for vertical cylinders or clamping applications.',
  },
  {
    title: 'Gauge Ports',
    description: 'G1/4" pressure gauge tapping points at each station for commissioning and diagnostic purposes.',
  },
  {
    title: 'Manual Override Provisions',
    description: 'Threaded override bores allow technicians to manually shift a stuck solenoid valve during maintenance without disassembling the hydraulic circuit.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// FAQs
// ─────────────────────────────────────────────────────────────────────────────

export const MULTI_STATION_FAQS: FAQ[] = [
  {
    question: 'Can one multi-station manifold block serve cylinders operating at different pressures?',
    answer: 'Yes. By integrating individual pressure-reducing valve cartridges or per-station relief cartridges into the block body, each station can operate at a different working pressure from the same shared P gallery supply.',
  },
  {
    question: 'We have 8 cylinders but only 6 operate simultaneously. Can we still use one block?',
    answer: 'Absolutely. In a parallel-centre manifold, each valve is independently controlled. You can energize any combination of stations at any time — including all 8 simultaneously or just one. The block size is determined by the total number of actuators, not by how many run concurrently.',
  },
  {
    question: 'What is the maximum length of a multi-station block?',
    answer: 'A 10-station CETOP 5 block is approximately 550–600mm in length. For requirements beyond 10 stations, we typically recommend a custom manifold block with cartridge valves for superior logic density, or two separate parallel multi-station blocks fed from a common header.',
  },
  {
    question: 'Can you replicate an existing multi-station block from another manufacturer?',
    answer: 'Yes. Provide us with the original block (or engineering drawing), and we will reverse-engineer and reproduce it. We can also improve on the original design — for example, adding gauge ports or integrating POCVs that were previously external.',
  },
];
