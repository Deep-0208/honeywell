import React from 'react';
import type { ManifoldSpec, FAQ } from './types';

// ─────────────────────────────────────────────────────────────────────────────
// Technical Specifications (from Section 9)
// ─────────────────────────────────────────────────────────────────────────────

export const CETOP_SPECS: ManifoldSpec[] = [
  { parameter: 'Standards Compliance', value: 'ISO 4401 (CETOP 3, 5, 7, 8)' },
  { parameter: 'Materials', value: 'Aluminium 6061-T6, ST52 Steel, EN8 Steel' },
  { parameter: 'Pressure Rating', value: 'Aluminium: Up to 210 Bar. Steel: Up to 315 Bar' },
  { parameter: 'Mounting Face Finish', value: 'Ra 0.8 µm or finer' },
  { parameter: 'Port Thread Options', value: 'BSPP (G), NPT, SAE O-Ring Boss' },
  { parameter: 'Surface Treatment', value: 'Anodize (Al), Zinc Plate, Black Oxide (Steel)' },
  { parameter: 'Custom Modifications', value: 'Additional pilot ports, relief valve cavities, gauge ports' },
  { parameter: 'Testing', value: '100% hydrostatic at 1.5x WP' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Size Comparison (from Section 4)
// ─────────────────────────────────────────────────────────────────────────────

export const CETOP_SIZE_COMPARISON = [
  { standard: 'CETOP 3', iso: 'NG6', flow: 'Up to 40 LPM', pressure: 'Up to 315 Bar', port: 'G3/8" BSPP', application: 'Small cylinders, light automation' },
  { standard: 'CETOP 5', iso: 'NG10', flow: 'Up to 120 LPM', pressure: 'Up to 315 Bar', port: 'G1/2" BSPP', application: 'Medium industrial automation' },
  { standard: 'CETOP 7', iso: 'NG16', flow: 'Up to 250 LPM', pressure: 'Up to 315 Bar', port: 'G3/4" BSPP', application: 'Heavy presses, large actuators' },
  { standard: 'CETOP 8', iso: 'NG22', flow: 'Up to 400+ LPM', pressure: 'Up to 315 Bar', port: 'G1" BSPP', application: 'Very high-flow industrial systems' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Brand Compatibility (from Section 7)
// ─────────────────────────────────────────────────────────────────────────────

export const CETOP_BRAND_COMPATIBILITY = [
  { brand: 'Rexroth (Bosch)', supported: true },
  { brand: 'Parker Hannifin', supported: true },
  { brand: 'Vickers (Eaton)', supported: true },
  { brand: 'Yuken', supported: true },
  { brand: 'Wandfluh', supported: true },
  { brand: 'Atos', supported: true },
];

// ─────────────────────────────────────────────────────────────────────────────
// Configurations (from Section 5)
// ─────────────────────────────────────────────────────────────────────────────

export const CETOP_CONFIGURATIONS = [
  {
    title: 'Inline (In-Line) Subplates',
    description: 'The A and B work ports exit from the same face as the system P and T ports. This is the most common configuration for simple, single-cylinder circuits.',
  },
  {
    title: 'Subbase (Sandwich) Subplates',
    description: 'A taller body design intended to allow additional modular sandwich plates (pressure-reducing, flow-control, or check-valve plates) to be stacked between the subbase and the directional valve. This provides additional circuit flexibility without adding external pipework.',
  },
  {
    title: 'Multiple-Station Subplates',
    description: 'A single elongated body machined to accept 2, 3, 4, or more CETOP valves in a parallel arrangement, sharing common P and T galleries while providing individual A and B work ports per station.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// FAQs
// ─────────────────────────────────────────────────────────────────────────────

export const CETOP_FAQS: FAQ[] = [
  {
    question: 'What is the difference between CETOP 3 and CETOP 5?',
    answer: 'The primary difference is the flow capacity. CETOP 3 (NG6) is rated to approximately 40 LPM and uses G3/8" ports. CETOP 5 (NG10) is rated to approximately 120 LPM and uses G1/2" ports. Choosing the wrong size will cause excessive fluid velocity and heat generation. Always size by your circuit\'s actual flow rate.',
  },
  {
    question: 'Can you machine additional ports or cavities into a standard CETOP subplate?',
    answer: 'Yes. We routinely machine additional pilot ports, gauge ports (G1/4"), drain ports, and cartridge valve cavities into standard CETOP subplates to suit specific circuit requirements. Provide your drawing or describe your requirements and we will quote accordingly.',
  },
  {
    question: 'Do you supply CETOP subplates in stainless steel for corrosive environments?',
    answer: 'Yes. For marine, chemical, and food-processing applications, we can machine CETOP subplates in SS316L stainless steel. Please note this is a special-order item with longer lead times.',
  },
  {
    question: 'What is the minimum order quantity for CETOP subplates?',
    answer: 'We supply from single pieces for prototyping up to high-volume OEM batch runs. There is no minimum order quantity for standard configurations.',
  },
];
