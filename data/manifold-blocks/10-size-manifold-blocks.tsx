import React from 'react';

import type { ProductPageData } from '@/components/product-page/types';

export const ng16ManifoldBlocksData: ProductPageData = {
  seo: {
    title: 'NG16 (10-Size) Manifold Blocks | High-Flow CETOP 7 Subplates',
    description: 'NG16 (10-size) manifold blocks manufacturer in India. Precision CETOP 7 subplates for high-flow hydraulic circuits up to 250 LPM. ISO 4401 compliant.',
    url: '/products/manifold-blocks/10-size-manifold-blocks',
    image: '/images/products/manifold-blocks/10-size-manifold-block-ng16.webp',
  },
  schema: {
    productName: 'NG16 / 10-Size Manifold Blocks',
    category: 'Manifold Blocks',
    properties: [
      { name: 'ISO Standard', value: 'ISO 4401-07 (CETOP 7 / NG16 / 10-Size)' },
      { name: 'Nominal Flow Capacity', value: '200 LPM (continuous), 250 LPM (peak)' },
      { name: 'Pressure Rating', value: 'AL: 210 Bar. Steel/Iron: 315 Bar' },
    ],
  },
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Manifold Blocks', href: '/products/manifold-blocks' },
    ],
    currentPage: '10 Size Manifold Blocks',
    subtitle: 'NG16 / 10-Size Manifolds',
    h1: 'NG16 / 10-Size Manifold Blocks Manufacturer',
    description: 'When the job demands serious flow and serious force. We manufacture heavy-duty NG16 (CETOP 7 / 10-Size) manifold blocks — the correct specification for high-flow industrial hydraulic circuits up to 250 LPM.',
    primaryCta: {
      label: 'ORDER NG16 BLOCKS',
      href: '/request-quote/#quote-form',
    },
    secondaryCta: {
      label: 'DOWNLOAD DATASHEET',
      href: '/resources/downloads/',
    },
    image: {
      src: '/images/products/manifold-blocks/10-size-manifold-block-ng16.webp',
      alt: 'NG16 10-size manifold blocks manufacturer in Ahmedabad — Honeywell Hydraulics',
    },
    keySpecs: [
      { label: 'Standard', value: 'ISO 4401-07' },
      { label: 'Flow', value: 'Up to 250 LPM' },
      { label: 'Pressure', value: 'Up to 315 Bar' },
      { label: 'Port Thread', value: 'G3/4" BSPP' },
    ],
  },
  overview: {
    heading: 'When Is NG16 (10-Size) Required?',
    content: (
      <>
        <p>
          The most common and costly mistake in hydraulic manifold specification is <strong className="text-honeywell-navy">undersizing the valve interface</strong>. Machine builders frequently default to NG10 (CETOP 5) blocks because they are cheaper and more readily available — then wonder why their machines run hot, cycle slowly, and suffer premature valve failure.
        </p>
        <p className="font-bold text-honeywell-red text-justify mt-4">
          The rule is simple: If your circuit flow rate exceeds 80 LPM at the directional valve, you must use NG16 or larger.
        </p>
        <p className="text-justify mt-4">
          Common scenarios requiring NG16:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong>Large-bore cylinders:</strong> A 160mm bore cylinder extending at 0.1 m/s requires ~200 LPM. Routing 200 LPM through an NG10 block creates 15+ m/s fluid velocity — this is catastrophic for the valve and the system.</li>
          <li><strong>Multiple small cylinders on one valve:</strong> If one directional valve serves two or three cylinders simultaneously, the combined flow demand may exceed NG10 capacity.</li>
          <li><strong>High-speed automation:</strong> Presses and handling equipment requiring rapid cylinder travel speeds generate high peak flow demands that exhaust NG10 capacity.</li>
          <li><strong>Long-stroke cylinders:</strong> Large fluid volume requirements per cycle may not cause velocity problems but create temperature issues in NG10 blocks with their smaller T gallery cross-sections.</li>
        </ul>
      </>
    ),
  },
  engineering: {
    heading: 'NG16 Product Range',
    items: [
      {
        label: 'Single-Station',
        title: 'NG16 Single-Station Subplates',
        description: 'For single-cylinder, high-flow applications. Standard configuration with G3/4" P and T ports. Available with SAE Code 61 flange option for very high-flow connections. Aluminium (up to 210 Bar) or ST52 Steel (up to 315 Bar).',
      },
      {
        label: 'Multi-Station',
        title: 'NG16 Multi-Station Manifold Rails',
        description: '2 to 6-station parallel rails. The physical size of NG16 blocks limits practical multi-station rails to 6 stations before the block length exceeds manageable dimensions. For 6+ high-flow stations, we recommend our custom manifold block approach with integrated cartridge valves.',
      },
      {
        label: 'Sandwich',
        title: 'NG16 Sandwich Subbase Plates',
        description: 'Extended subbase plates for stacking pressure-reducing and flow-control sandwich modules between the base and the directional valve. Useful for complex, multi-pressure circuits driving large cylinders.',
      },
    ]
  },
  comparisons: [
    {
      heading: 'Material Selection Guide for Heavy Industry',
      description: 'NG16 blocks are predominantly used in heavy industrial environments where material selection is critical. Ductile Iron is frequently specified for NG16 blocks in forging and heavy-press environments because its damping characteristics absorb the pressure pulsations generated by large displacement gear pumps.',
      columns: [
        { heading: 'Operating Condition' },
        { heading: 'Recommended Material' },
        { heading: 'Pressure Limit' },
      ],
      rows: [
        {
          feature: 'General factory floor',
          values: [
            { text: 'Aluminium 6061-T6 (anodized)' },
            { text: '210 Bar' }
          ]
        },
        {
          feature: 'Heavy press rooms, heat',
          values: [
            { text: 'ST52 Carbon Steel (zinc plated)' },
            { text: '315 Bar' }
          ]
        },
        {
          feature: 'Forge shops, high vibration',
          values: [
            { text: 'Ductile Iron (GGG50, epoxy coated)' },
            { text: '315 Bar' }
          ]
        },
        {
          feature: 'Marine/outdoor high-flow',
          values: [
            { text: 'SS316L (electroless nickel)' },
            { text: '250 Bar' }
          ]
        }
      ]
    }
  ],
  technicalSpecs: {
    heading: 'NG16 Technical Specifications & Performance Envelope',
    description: 'The NG16 interface is designed to handle up to 250 LPM without causing restrictive pressure drops. Proper port sizing and internal gallery dimensioning is critical at these flow rates.',
    tableTitle: 'NG16 Technical Data',
    primaryCta: {
      label: 'REQUEST QUOTE',
      href: '/request-quote/#quote-form',
    },
    secondaryCta: {
      label: 'CONTACT ENGINEERING',
      href: '/contact-us/',
    },
    rows: [
      { parameter: 'ISO Standard', value: 'ISO 4401-07-07-0-05' },
      { parameter: 'Nominal Flow Capacity', value: '200 LPM (continuous), 250 LPM (peak)' },
      { parameter: 'Maximum Working Pressure', value: '315 Bar (in steel/ductile iron blocks)' },
      { parameter: 'Mounting Bolt Pattern', value: '4 × M8 bolts, ISO 4401-07 spacing' },
      { parameter: 'P Port (Pressure In)', value: 'G 3/4" BSPP (or SAE-12)' },
      { parameter: 'T Port (Tank Return)', value: 'G 3/4" BSPP (or SAE-12)' },
      { parameter: 'A & B Work Ports', value: 'G 1/2" BSPP (or SAE-10)' },
      { parameter: 'Valve O-Ring Seal Size', value: 'ISO 4401-07 D-ring specification' },
      { parameter: 'Materials', value: 'AL 6061-T6, ST52 Steel, Ductile Iron GGG50, SS316L' },
      { parameter: 'Gallery Bore (Standard)', value: '22mm (P & T), 18mm (A & B work galleries)' },
      { parameter: 'Gallery Bore (Heavy Duty)', value: '25mm (P & T) for 200–250 LPM peak demand' },
      { parameter: 'Station Configurations', value: '1 to 6 stations' },
      { parameter: 'Testing', value: '100% Hydrostatic at 1.5x working pressure' },
    ],
  },
  spotlights: [
    {
      badge: 'OEM Case Study',
      heading: 'NG16 4-Station Manifold Block for Hydraulic Goods Lift',
      subheading: 'Material Handling Equipment Builder — Odhav GIDC, Ahmedabad',
      stats: [],
      phases: [
        {
          number: '01',
          title: 'The Challenge',
          description: 'A 10-tonne capacity hydraulic goods lift using four 200mm bore cylinders was suffering from premature valve seal degradation and synchronization hunting. Their previous design used four separate NG10 CETOP 5 blocks which were grossly undersized for the flow.',
        },
        {
          number: '02',
          title: 'The Solution',
          description: 'We redesigned the logic around a single 4-station NG16 manifold block in ST52 steel. The enlarged galleries eliminated velocity-induced pressure drops, and we integrated proportional flow-control cartridges per station directly within the block body.',
        },
        {
          number: '03',
          title: 'The Outcome',
          description: 'System operating temperature dropped by 22°C. The platform achieved ±1.2mm synchronization accuracy. The client standardized NG16 architecture across their entire heavy goods lift range.',
        }
      ]
    }
  ],
  productName: '10 Size Manifold Blocks',
  faqs: [
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
  ],
  relatedProducts: {
    description: 'Explore our complete range of hydraulic manifold and logic block solutions.',
    items: [
      {
        title: 'Custom Manifold Blocks',
        description: 'Fully integrated logic blocks with internal cartridge valves for zero-leak automation.',
        category: 'Manifold Blocks',
        imageSrc: '/images/products/manifold-blocks/custom-hydraulic-manifold-block.webp',
        href: '/products/manifold-blocks/custom-manifold-blocks/',
        ctaText: 'View Details',
      },
      {
        title: 'CETOP Subplates',
        description: 'Standard mounting plates for NG6 and NG10 directional control valves.',
        category: 'Manifold Blocks',
        imageSrc: '/images/products/manifold-blocks/cetop-subplate-manufacturer.webp',
        href: '/products/manifold-blocks/cetop-manifold-blocks/',
        ctaText: 'View Details',
      },
      {
        title: '06-Size Manifold Blocks',
        description: 'Standard NG10 CETOP 5 subplates for robust directional control.',
        category: 'Manifold Blocks',
        imageSrc: '/images/products/manifold-blocks/06-size-hydraulic-manifold.webp',
        href: '/products/manifold-blocks/06-size-manifold-blocks/',
        ctaText: 'View Details',
      },
    ],
  },
  cta: {
    title: 'Need NG16 subplates in stock with fast delivery?',
    description: 'The correct specification for high-flow industrial hydraulic circuits.',
    primaryCtaText: 'ORDER NG16 BLOCKS',
    primaryCtaHref: '/request-quote/#quote-form',
    secondaryCtaText: 'Submit Circuit Schematic',
    secondaryCtaHref: '/contact-us/',
  }
};
