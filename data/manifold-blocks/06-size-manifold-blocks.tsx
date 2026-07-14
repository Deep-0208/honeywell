import React from 'react';
import {
  Settings,
  Box,
  Layers,
  Activity,
  ArrowRight
} from 'lucide-react';
import type { ProductPageData } from '@/components/product-page/types';

export const ng10ManifoldBlocksData: ProductPageData = {
  seo: {
    title: 'NG10 (06-Size) Manifold Blocks | CETOP 5 Hydraulic Subplates',
    description: 'NG10 (06-size) hydraulic manifold blocks manufacturer in India. Precision CETOP 5 subplates and multi-station blocks for industrial automation up to 120 LPM.',
    url: '/products/manifold-blocks/06-size-manifold-blocks',
    image: '/images/products/manifold-blocks/06-size-manifold-block-ng10.webp',
  },
  schema: {
    productName: 'NG10 / 06-Size Manifold Blocks',
    category: 'Manifold Blocks',
    properties: [
      { name: 'ISO Standard', value: 'ISO 4401-05 (CETOP 5 / NG10 / 06-Size)' },
      { name: 'Flow Rating', value: '80 LPM continuous, 120 LPM peak' },
      { name: 'Pressure Rating', value: 'AL: 210 Bar max. Steel: 315 Bar max' },
    ],
  },
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Manifold Blocks', href: '/products/manifold-blocks' },
      { label: '06 Size Manifold Blocks', href: '/products/manifold-blocks/06-size-manifold-blocks' },
    ],
    currentPage: '06 Size Manifold Blocks',
    subtitle: 'NG10 / 06-Size Manifolds',
    h1: 'NG10 / 06-Size Manifold Blocks Manufacturer',
    description: 'The most widely used hydraulic valve interface size in industrial manufacturing. We manufacture high-precision NG10 (CETOP 5 / 06-Size) manifold blocks — the universally adopted standard for medium-duty industrial automation up to 120 LPM.',
    primaryCta: {
      label: 'ORDER NG10 BLOCKS',
      href: '/request-quote/',
    },
    secondaryCta: {
      label: 'DOWNLOAD LIBRARY',
      href: '/resources/downloads/',
    },
    image: {
      src: '/images/products/manifold-blocks/06-size-manifold-block-ng10.webp',
      alt: 'NG10 06-size manifold blocks manufacturer in Ahmedabad — Honeywell Hydraulics',
    },
    keySpecs: [
      { label: 'Standard', value: 'ISO 4401-05' },
      { label: 'Max Flow', value: '120 LPM' },
      { label: 'Max Pressure', value: '315 Bar' },
      { label: 'Port Thread', value: 'G1/2" BSPP / SAE-8' },
    ],
  },
  overview: {
    heading: 'Understanding the NG10 / 06 Designation',
    content: (
      <>
        <p>
          The <strong>NG10</strong> and <strong>06-Size</strong> designations both refer to the same physical valve interface, governed by <strong>ISO 4401</strong> (CETOP 5). The dual naming convention exists because different regions use different terminology:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>NG10:</strong> European designation used by Rexroth, Atos, and Wandfluh. &quot;NG&quot; = Nenngröße (Nominal Size in German).</li>
          <li><strong>CETOP 5:</strong> French standards body designation. Numerically refers to the standardized mounting interface.</li>
          <li><strong>06-Size:</strong> North American designation used by Parker, Vickers, and Eaton/Danfoss.</li>
        </ul>
        <p className="font-bold text-honeywell-navy text-justify mt-4">
          All three designations are physically identical. A Parker D3W &quot;06-size&quot; directional valve will mount directly onto a Honeywell CETOP 5 (NG10) manifold block — same bolt pattern, same port locations, same O-ring groove sizes.
        </p>
      </>
    ),
  },
  engineering: {
    heading: 'NG10 Block Product Range',
    description: 'We manufacture the full NG10 product family.',
    items: [
      {
        label: 'Single-Station',
        title: 'Single-Station NG10 Subplates',
        description: 'Standard in-line subplates in Aluminium (≤210 Bar) and ST52 Steel (≤315 Bar). Available with G1/2" BSPP, SAE-8 O-Ring Boss, or SAE Code 61 flange ports in P and T positions.',
      },
      {
        label: 'Multi-Station',
        title: 'NG10 Multi-Station Rails',
        description: '2-station to 8-station parallel rail manifolds sharing a common P and T gallery. Machined from a single billet of ST52 steel for maximum structural integrity. Available with integrated gauge ports and optional POCV cartridge provisions per station.',
      },
      {
        label: 'Sandwich',
        title: 'NG10 Sandwich (Subbase) Plates',
        description: 'Extended subbase bodies designed to stack one or more modular sandwich plates (flow control, pressure reducing, check valve plates) between the subbase and the directional valve, providing circuit modification capability without external pipework.',
      },
      {
        label: 'Custom',
        title: 'NG10 Custom Integration Blocks',
        description: 'Purpose-machined NG10-compatible blocks incorporating additional logic cavities for specific circuit functions — such as combined CETOP 5 directional valves plus Sun Hydraulics cartridge-type relief and sequence valves in a single monolithic block.',
      },
    ]
  },
  comparisons: [
    {
      heading: 'NG10 vs. NG6 and NG16: Choosing the Right Size',
      description: 'If you are in doubt between NG10 and NG16, calculate your actual circuit flow: Cylinder Bore² × π/4 × Piston Speed = Flow Rate (LPM). Match this to the NG size capacity.',
      columns: [
        { heading: 'Design Consideration' },
        { heading: 'NG6 (CETOP 3)' },
        { heading: 'NG10 (CETOP 5)' },
        { heading: 'NG16 (CETOP 7)' },
      ],
      rows: [
        {
          feature: 'Max Flow',
          values: [
            { text: '40 LPM' },
            { text: '120 LPM', highlight: true },
            { text: '250 LPM' }
          ]
        },
        {
          feature: 'Typical Cylinder Bore',
          values: [
            { text: 'Up to 63mm' },
            { text: '63mm to 160mm', highlight: true },
            { text: '100mm to 250mm' }
          ]
        },
        {
          feature: 'Block Size (Single Station)',
          values: [
            { text: 'Very compact' },
            { text: 'Medium (industry standard)', highlight: true },
            { text: 'Large' }
          ]
        },
        {
          feature: 'Availability',
          values: [
            { text: 'High' },
            { text: 'Highest (most common)', highlight: true },
            { text: 'Medium' }
          ]
        },
        {
          feature: 'Port Size',
          values: [
            { text: 'G3/8"' },
            { text: 'G1/2"', highlight: true },
            { text: 'G3/4"' }
          ]
        }
      ]
    }
  ],
  technicalSpecs: {
    heading: 'NG10 Performance & Technical Specifications',
    description: 'Understanding the operating limits of the NG10 interface prevents undersizing (which causes dangerous heat generation) or oversizing (which wastes capital). Attempting to run 200 LPM through an NG10 block will create fluid velocity exceeding 6 m/s in the internal galleries, generating severe heat and turbulence that destroys the directional valve internals.',
    tableTitle: 'NG10 Performance Envelope',
    primaryCta: {
      label: 'REQUEST QUOTE',
      href: '/request-quote/',
    },
    secondaryCta: {
      label: 'DOWNLOAD DATASHEET',
      href: '/resources/downloads/',
    },
    rows: [
      { parameter: 'ISO Standard', value: 'ISO 4401-05-05-0-05' },
      { parameter: 'Nominal Flow Capacity', value: '80 LPM (continuous), 120 LPM (peak)' },
      { parameter: 'Maximum Working Pressure', value: '315 Bar (in steel/iron blocks)' },
      { parameter: 'Mounting Bolt Pattern', value: '4 × M6 bolts, ISO 4401-05 spacing' },
      { parameter: 'P Port (Pressure In)', value: 'G 1/2" BSPP (or SAE-8)' },
      { parameter: 'T Port (Tank Return)', value: 'G 1/2" BSPP (or SAE-8)' },
      { parameter: 'A & B Work Ports', value: 'G 3/8" BSPP (or SAE-6)' },
      { parameter: 'Valve Seal Size', value: 'D-ring or O-ring to ISO 4401-05 specification' },
      { parameter: 'Material Options', value: 'AL 6061-T6, ST52 Carbon Steel, EN8 Steel' },
      { parameter: 'Station Configurations', value: '1, 2, 3, 4, 5, 6, 8 stations' },
      { parameter: 'Surface Finish', value: 'Anodize (AL), Zinc Plate / Black Oxide (Steel)' },
      { parameter: 'Testing', value: '100% Hydrostatic at 1.5x WP' },
    ],
  },
  spotlights: [
    {
      badge: 'OEM Case Study',
      heading: 'NG10 4-Station Manifold Block for Injection Moulding Core-Pull',
      subheading: 'Plastic Injection Mould Manufacturer — Sachin GIDC, Surat',
      stats: [],
      phases: [
        {
          number: '01',
          title: 'The Challenge',
          description: 'A mould manufacturer building an 8-cavity injection mould needed to integrate a 4-axis hydraulic core-pull system inside the mould base itself. Four individual NG10 subplates connected by external piping would not fit.',
        },
        {
          number: '02',
          title: 'The Solution',
          description: 'We designed a compact 4-station NG10 parallel manifold block with all four valve stations on one face. All P and T connections were internalized, and block height was minimized by using low-profile solenoid valves.',
        },
        {
          number: '03',
          title: 'The Outcome',
          description: 'The assembly fit within the mould base with 12mm to spare. The mould achieved a 6.2-second cycle time — 0.8 seconds faster than the competitor\'s external-pipework solution due to reduced fluid dead-volume.',
        }
      ]
    }
  ],
  productName: '06 Size Manifold Blocks',
  faqs: [
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
        title: '10-Size Manifold Blocks',
        description: 'High-flow NG16 CETOP 7 subplates for heavy industrial machinery.',
        category: 'Manifold Blocks',
        imageSrc: '/images/products/manifold-blocks/10-size-hydraulic-manifold.webp',
        href: '/products/manifold-blocks/10-size-manifold-blocks/',
        ctaText: 'View Details',
      },
    ],
  },
  cta: {
    title: 'Need standard NG10 subplates with fast delivery?',
    description: 'The most widely used hydraulic valve interface size in industrial manufacturing.',
    primaryCtaText: 'ORDER NG10 BLOCKS',
    primaryCtaHref: '/request-quote/',
    secondaryCtaText: 'Submit SPM Schematic',
    secondaryCtaHref: '/contact-us/',
  }
};
