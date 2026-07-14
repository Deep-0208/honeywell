import React from 'react';
import {
  Check,
  Settings,
  Box,
  Layers,
  ArrowRight
} from 'lucide-react';
import type { ProductPageData } from '@/components/product-page/types';

export const cetopManifoldBlocksData: ProductPageData = {
  seo: {
    title: 'CETOP Manifold Blocks Manufacturer | ISO 4401 Subplates',
    description: 'Precision CETOP manifold block manufacturer in India. ISO 4401 compliant CETOP 3 (NG6), CETOP 5 (NG10), CETOP 7, and CETOP 8 subplates for all valve brands.',
    url: '/products/manifold-blocks/cetop-manifold-blocks',
    image: '/images/products/manifold-blocks/cetop-manifold-block-iso-4401.webp',
  },
  schema: {
    productName: 'CETOP Manifold Blocks',
    category: 'Manifold Blocks',
    properties: [
      { name: 'Standards Compliance', value: 'ISO 4401 (CETOP 3, 5, 7, 8)' },
      { name: 'Materials', value: 'Aluminium 6061-T6, ST52 Steel, EN8 Steel' },
      { name: 'Pressure Rating', value: 'Up to 315 Bar' },
    ],
  },
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Manifold Blocks', href: '/products/manifold-blocks' },
      { label: 'Cetop Manifold Blocks', href: '/products/manifold-blocks/cetop-manifold-blocks' },
    ],
    currentPage: 'Cetop Manifold Blocks',
    subtitle: 'CETOP Manifold Blocks',
    h1: 'CETOP Manifold Blocks Manufacturer',
    description: 'Standardized, zero-tolerance valve interfaces for universal compatibility. We machine ISO 4401-compliant subplates in CETOP 3, 5, 7, and 8 sizes to guarantee bolt-pattern and port compatibility with all major directional control valves.',
    primaryCta: {
      label: 'ORDER CETOP BLOCKS',
      href: '/request-quote/',
    },
    secondaryCta: {
      label: 'DOWNLOAD DRAWINGS',
      href: '/resources/downloads/',
    },
    image: {
      src: '/images/products/manifold-blocks/cetop-manifold-block-iso-4401.webp',
      alt: 'CETOP manifold blocks manufacturer in Ahmedabad — Honeywell Hydraulics',
    },
    keySpecs: [
      { label: 'Standards', value: 'ISO 4401 (CETOP)' },
      { label: 'Sizes', value: 'NG6, NG10, NG16, NG22' },
      { label: 'Materials', value: 'Aluminium / Steel' },
      { label: 'Pressure', value: 'Up to 315 Bar' },
    ],
  },
  overview: {
    heading: 'What Are CETOP Manifold Blocks?',
    content: (
      <>
        <p>
          <strong className="text-honeywell-navy">CETOP</strong> (Comité Européen des Transmissions Oléohydrauliques et Pneumatiques) is the European standards body that established the ISO 4401 mounting interface for hydraulic directional control valves.
        </p>
        <p>
          A <strong>CETOP manifold block</strong> — also called a subplate or valve base — is a precision-machined mounting platform that provides:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>A standardized bolt pattern for mounting any CETOP-compliant directional valve</li>
          <li>Internal fluid galleries connecting the P (Pressure), T (Tank), A, and B work ports of the valve to the external system ports on the subplate body</li>
          <li>Port threads (BSPP, NPT, or SAE) for connecting the subplate to the wider hydraulic circuit</li>
        </ul>
        <p>
          Because the mounting pattern is internationally standardized, an OEM can specify a Honeywell-manufactured CETOP 5 subplate and mount any CETOP 5 valve from any brand onto it without modification — a critical advantage for procurement flexibility and long-term spares availability.
        </p>
      </>
    ),
  },
  comparisons: [
    {
      heading: 'CETOP Size Comparison Table',
      description: 'Understanding the correct CETOP size for your system flow requirement is fundamental to avoiding pressure drops. A mismatched CETOP size causes catastrophic fluid velocity in the internal galleries, generating heat and destroying the valve. Always size by flow rate, not by convenience.',
      columns: [
        { heading: 'Standard' },
        { heading: 'ISO 4401 Size' },
        { heading: 'Nominal Flow' },
        { heading: 'Working Pressure' },
        { heading: 'Port Thread' },
        { heading: 'Applications' }
      ],
      rows: [
        {
          feature: 'CETOP 3',
          values: [
            { text: 'NG6' },
            { text: 'Up to 40 LPM' },
            { text: 'Up to 315 Bar' },
            { text: 'G3/8" BSPP' },
            { text: 'Small cylinders, light automation' }
          ]
        },
        {
          feature: 'CETOP 5',
          values: [
            { text: 'NG10' },
            { text: 'Up to 120 LPM' },
            { text: 'Up to 315 Bar' },
            { text: 'G1/2" BSPP' },
            { text: 'Medium industrial automation' }
          ]
        },
        {
          feature: 'CETOP 7',
          values: [
            { text: 'NG16' },
            { text: 'Up to 250 LPM' },
            { text: 'Up to 315 Bar' },
            { text: 'G3/4" BSPP' },
            { text: 'Heavy presses, large actuators' }
          ]
        },
        {
          feature: 'CETOP 8',
          values: [
            { text: 'NG22' },
            { text: 'Up to 400+ LPM' },
            { text: 'Up to 315 Bar' },
            { text: 'G1" BSPP' },
            { text: 'Very high-flow industrial systems' }
          ]
        }
      ]
    }
  ],
  engineering: {
    heading: 'Standard Subplate Configurations',
    items: [
      {
        label: 'Inline',
        title: 'Inline (In-Line) Subplates',
        description: 'The A and B work ports exit from the same face as the system P and T ports. This is the most common configuration for simple, single-cylinder circuits.',
      },
      {
        label: 'Subbase',
        title: 'Subbase (Sandwich) Subplates',
        description: 'A taller body design intended to allow additional modular sandwich plates (pressure-reducing, flow-control, or check-valve plates) to be stacked between the subbase and the directional valve. This provides additional circuit flexibility without adding external pipework.',
      },
      {
        label: 'Multi-Station',
        title: 'Multiple-Station Subplates',
        description: 'A single elongated body machined to accept 2, 3, 4, or more CETOP valves in a parallel arrangement, sharing common P and T galleries while providing individual A and B work ports per station.',
      },
    ]
  },
  technicalSpecs: {
    heading: 'Material & Machining Specifications',
    description: 'Our CETOP subplates are manufactured to guarantee zero-leak valve seating under cyclic operating conditions.',
    tableTitle: 'CETOP Block Specs',
    primaryCta: {
      label: 'REQUEST OEM QUOTE',
      href: '/request-quote/',
    },
    secondaryCta: {
      label: 'CONSULT ENGINEERING',
      href: '/contact-us/',
    },
    rows: [
      { parameter: 'Standards Compliance', value: 'ISO 4401 (CETOP 3, 5, 7, 8)' },
      { parameter: 'Materials', value: 'Aluminium 6061-T6, ST52 Steel, EN8 Steel' },
      { parameter: 'Pressure Rating', value: 'Aluminium: Up to 210 Bar. Steel: Up to 315 Bar' },
      { parameter: 'Mounting Face Finish', value: 'Ra 0.8 µm or finer' },
      { parameter: 'Port Thread Options', value: 'BSPP (G), NPT, SAE O-Ring Boss' },
      { parameter: 'Surface Treatment', value: 'Anodize (Al), Zinc Plate, Black Oxide (Steel)' },
      { parameter: 'Custom Modifications', value: 'Additional pilot ports, relief valve cavities, gauge ports' },
      { parameter: 'Testing', value: '100% hydrostatic at 1.5x WP' },
    ],
  },
  keyFeatures: {
    heading: 'Brand Compatibility Matrix',
    description: 'ISO 4401 is a global standard. Any valve from any manufacturer labelled "CETOP 3", "CETOP 5", "NG6", or "NG10" will bolt directly to our corresponding subplate without modification.',
    items: [
      {
        icon: <Check className="w-6 h-6 text-green-600" />,
        title: 'Rexroth (Bosch)',
        description: 'Full compatibility with all Bosch Rexroth ISO 4401 valves.'
      },
      {
        icon: <Check className="w-6 h-6 text-green-600" />,
        title: 'Parker Hannifin',
        description: 'Full compatibility with all Parker Hannifin ISO 4401 valves.'
      },
      {
        icon: <Check className="w-6 h-6 text-green-600" />,
        title: 'Vickers (Eaton)',
        description: 'Full compatibility with all Vickers ISO 4401 valves.'
      },
      {
        icon: <Check className="w-6 h-6 text-green-600" />,
        title: 'Yuken',
        description: 'Full compatibility with all Yuken ISO 4401 valves.'
      },
      {
        icon: <Check className="w-6 h-6 text-green-600" />,
        title: 'Wandfluh',
        description: 'Full compatibility with all Wandfluh ISO 4401 valves.'
      },
      {
        icon: <Check className="w-6 h-6 text-green-600" />,
        title: 'Atos',
        description: 'Full compatibility with all Atos ISO 4401 valves.'
      }
    ]
  },
  spotlights: [
    {
      badge: 'OEM Case Study',
      heading: 'CETOP 5 Subplate OEM Supply for Hydraulic Press Automation',
      subheading: 'Press Machine Builder — Vatva GIDC, Ahmedabad',
      stats: [],
      phases: [
        {
          number: '01',
          title: 'The Challenge',
          description: 'A press machine builder needed a reliable local source for high-quality CETOP 5 subplates compatible with their Parker D1VW valves, requiring consistent quality, short lead times, and custom-drilled pilot ports.',
        },
        {
          number: '02',
          title: 'The Solution',
          description: 'We became their sole-source supplier, producing ST52 steel subplates with zinc plating and custom pilot ports. We perform 100% hydrostatic testing and maintain a 2-week buffer stock at our facility.',
        },
        {
          number: '03',
          title: 'The Outcome',
          description: 'The builder eliminated import dependency, reduced lead times from 8 weeks to 5 days, and achieved a significant cost reduction. Zero leaks reported across their entire fleet.',
        }
      ]
    }
  ],
  productName: 'CETOP Manifold Blocks',
  faqs: [
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
        title: 'Multi-Station Manifold Blocks',
        description: 'Parallel manifold rails for mounting multiple directional control valves compactly.',
        category: 'Manifold Blocks',
        imageSrc: '/images/products/manifold-blocks/multi-station-manifold-block.webp',
        href: '/products/manifold-blocks/multi-station-manifold-blocks/',
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
    title: 'Need OEM volume supply with guaranteed lead times?',
    description: 'Eliminate valve interface incompatibility and specify precisely manufactured, ISO 4401 certified CETOP subplates from Honeywell Hydraulics.',
    primaryCtaText: 'REQUEST OEM QUOTE',
    primaryCtaHref: '/request-quote/',
    secondaryCtaText: 'Consult Engineering',
    secondaryCtaHref: '/contact-us/',
  }
};
