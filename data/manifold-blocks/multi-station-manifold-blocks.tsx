import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import type { ProductPageData } from '@/components/product-page/types';

export const multiStationManifoldBlocksData: ProductPageData = {
  seo: {
    title: 'Multi-Station Manifold Blocks | Parallel Circuit Control',
    description: 'Multi-station hydraulic manifold blocks manufacturer in India. 2 to 10-station parallel circuit manifolds for synchronized multi-cylinder industrial automation.',
    url: '/products/manifold-blocks/multi-station-manifold-blocks',
    image: '/images/products/manifold-blocks/multi-station-manifold-block.webp',
  },
  schema: {
    productName: 'Multi-Station Manifold Blocks',
    category: 'Manifold Blocks',
    properties: [
      { name: 'Station Range', value: '2-Station to 10-Station' },
      { name: 'CETOP Sizes', value: 'CETOP 3, CETOP 5, CETOP 7, CETOP 8' },
      { name: 'Circuit Configuration', value: 'Parallel, Series, or Mixed' },
    ],
  },
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products/' },
      { label: 'Manifold Blocks', href: '/products/manifold-blocks/' },
    ],
    currentPage: 'Multi Station Manifold Blocks',
    subtitle: 'Multi-Station Manifolds',
    h1: 'Multi-Station Manifold Blocks Manufacturer',
    description: 'One block. Multiple cylinders. Total synchronized control. We manufacture single monolithic valve bodies housing 2 to 10 directional control valves in a shared P and T gallery circuit for complex Special Purpose Machines.',
    primaryCta: {
      label: 'REQUEST A QUOTE',
      href: '/request-quote/#quote-form',
    },
    secondaryCta: {
      label: 'SUBMIT SCHEMATIC',
      href: '/contact-us/',
    },
    image: {
      src: '/images/products/manifold-blocks/multi-station-manifold-block.webp',
      alt: 'Multi-station manifold blocks manufacturer in Ahmedabad — Honeywell Hydraulics',
    },
    keySpecs: [
      { label: 'Stations', value: '2 to 10' },
      { label: 'Sizes', value: 'CETOP 3, 5, 7, 8' },
      { label: 'Circuit', value: 'Parallel / Series' },
      { label: 'Material', value: 'Aluminium / Steel' },
    ],
  },
  overview: {
    heading: 'What Is a Multi-Station Manifold Block?',
    content: (
      <>
        <p>
          A <strong className="text-honeywell-navy">multi-station manifold block</strong> (also called a parallel manifold rail or gang block) is a single elongated block of machined metal that accommodates multiple directional control valves — each valve occupying one &quot;station&quot; on the block&apos;s top face.
        </p>
        <p>
          Internally, the block contains two shared longitudinal galleries running the full length of the block:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>The P Gallery:</strong> Connects to the hydraulic power pack and distributes system pressure to all valve stations simultaneously.</li>
          <li><strong>The T Gallery:</strong> Collects the return oil from all valve stations and routes it back to the tank.</li>
        </ul>
        <p>
          Each valve station has its own independent <strong>A and B work port pair</strong> exiting the block body, allowing each valve to control an independent actuator. This architecture allows one power pack to serve multiple cylinders from a single, centralized, completely leak-proof block.
        </p>
      </>
    ),
  },
  comparisons: [
    {
      heading: 'Parallel vs. Series Circuit Configuration',
      description: 'The internal gallery design dictates the operational logic of the multi-station block. The majority of industrial SPM applications use parallel centre configuration, allowing any valve to be operated independently or simultaneously.',
      columns: [
        { heading: 'Circuit Type' },
        { heading: 'Parallel' },
        { heading: 'Series' },
        { heading: 'Tandem Centre' }
      ],
      rows: [
        {
          feature: 'P Gallery Design',
          values: [
            { text: 'Single shared P gallery feeds all stations simultaneously' },
            { text: 'Outlet of station 1 feeds inlet of station 2, etc.' },
            { text: 'Shared P and T with tandem spool valves for low-idle pressure' }
          ]
        },
        {
          feature: 'T Gallery Design',
          values: [
            { text: 'Single shared T gallery' },
            { text: 'Single shared T return' },
            { text: 'Standard T' }
          ]
        },
        {
          feature: 'Typical Use Case',
          values: [
            { text: 'Independent control of multiple cylinders (most common)' },
            { text: 'Synchronized sequence — cylinder A MUST complete before cylinder B starts' },
            { text: 'High-speed press with energy-efficient idle state' }
          ]
        }
      ]
    },
    {
      heading: 'Station Count Selection Guide',
      description: 'Selecting the correct number of stations is determined by the number of independent actuators in your circuit. Our engineers will analyse your hydraulic schematic and recommend the optimal station count.',
      columns: [
        { heading: 'Station Count' },
        { heading: 'Typical Machine Type' },
        { heading: 'Cylinder Requirement' }
      ],
      rows: [
        {
          feature: '2-Station',
          values: [
            { text: 'Simple clamping + pressing machine' },
            { text: '2 independent cylinders or motors' }
          ]
        },
        {
          feature: '4-Station',
          values: [
            { text: 'Injection moulding core-pull systems' },
            { text: 'Clamping + injection + core-pull A + core-pull B' }
          ]
        },
        {
          feature: '6-Station',
          values: [
            { text: 'Multi-clamp SPM fixtures' },
            { text: '6 independent work-holding clamps' }
          ]
        },
        {
          feature: '8-Station',
          values: [
            { text: 'Transfer press automation' },
            { text: '8 sequential pressing/punching cylinders' }
          ]
        },
        {
          feature: '10-Station',
          values: [
            { text: 'Complex assembly automation' },
            { text: '10-axis SPM with full simultaneous logic' }
          ]
        }
      ]
    }
  ],
  engineering: {
    heading: 'CETOP Size Options',
    items: [
      {
        label: 'CETOP 3',
        title: 'CETOP 3 (NG6) Multi-Station',
        description: 'Ideal for compact SPMs with cylinder bores up to 80mm and flow rates up to 40 LPM per station.',
      },
      {
        label: 'CETOP 5',
        title: 'CETOP 5 (NG10) Multi-Station',
        description: 'The most common size for general industrial automation up to 120 LPM per station.',
      },
      {
        label: 'CETOP 7',
        title: 'CETOP 7 (NG16) Multi-Station',
        description: 'For high-flow circuits powering large-bore cylinders and hydraulic motors at up to 250 LPM per station.',
      },
      {
        label: 'CETOP 8',
        title: 'CETOP 8 (NG22) Multi-Station',
        description: 'For very high-flow systems driving massive press cylinders at 400+ LPM per station.',
      },
    ]
  },
  keyFeatures: {
    heading: 'Integrated Safety Features',
    description: 'Multi-station blocks can incorporate optional integrated safety logic, eliminating additional external valve installations.',
    items: [
      {
        icon: <CheckCircle2 className="w-6 h-6 text-honeywell-red" />,
        title: 'Individual Station Relief Valves',
        description: 'Per-station pressure relief cartridges machined directly into the block body, allowing different circuit areas to operate at different pressures from a single power pack.',
      },
      {
        icon: <CheckCircle2 className="w-6 h-6 text-honeywell-red" />,
        title: 'Pilot-Operated Check Valves (POCVs)',
        description: 'Integrated directly at each A/B work port to provide load-holding capability for vertical cylinders or clamping applications.',
      },
      {
        icon: <CheckCircle2 className="w-6 h-6 text-honeywell-red" />,
        title: 'Gauge Ports',
        description: 'G1/4" pressure gauge tapping points at each station for commissioning and diagnostic purposes.',
      },
      {
        icon: <CheckCircle2 className="w-6 h-6 text-honeywell-red" />,
        title: 'Manual Override Provisions',
        description: 'Threaded override bores allow technicians to manually shift a stuck solenoid valve during maintenance without disassembling the hydraulic circuit.',
      },
    ]
  },
  technicalSpecs: {
    heading: 'Technical Specifications',
    description: 'Detailed specifications for our multi-station manifold blocks.',
    tableTitle: 'Capabilities',
    primaryCta: {
      label: 'REQUEST QUOTE',
      href: '/request-quote/#quote-form',
    },
    secondaryCta: {
      label: 'CONSULT ENGINEERING',
      href: '/contact-us/',
    },
    rows: [
      { parameter: 'Station Range', value: '2-Station to 10-Station (custom counts on request)' },
      { parameter: 'CETOP Sizes', value: 'CETOP 3, CETOP 5, CETOP 7, CETOP 8' },
      { parameter: 'Material', value: 'Aluminium 6061-T6 (≤210 Bar), ST52 Steel (≤315 Bar)' },
      { parameter: 'Circuit Configuration', value: 'Parallel, Series, or Mixed (custom)' },
      { parameter: 'Optional Integrations', value: 'Per-station relief, POCVs, gauge ports, manual overrides' },
      { parameter: 'Surface Treatment', value: 'Anodize (Al), Zinc Plate or Black Oxide (Steel)' },
      { parameter: 'Lead Time', value: '2–4 weeks (standard), 1 week (repeat orders)' },
      { parameter: 'Testing', value: '100% hydrostatic at 1.5x working pressure' },
    ],
  },
  spotlights: [
    {
      badge: 'OEM Case Study',
      heading: '8-Station CETOP 5 Manifold Block for Automotive Welding SPM',
      subheading: 'Tier-2 Automotive Supplier — Changodar GIDC, Ahmedabad',
      stats: [],
      phases: [
        {
          number: '01',
          title: 'The Challenge',
          description: 'An automotive supplier was building a robotic MIG welding SPM that required 8 hydraulic clamps. Their original design used 8 individual CETOP 5 subplates connected by 16 steel pipes, which occupied excessive space and developed 3 leaks during prototyping.',
        },
        {
          number: '02',
          title: 'The Solution',
          description: 'We designed a single 8-station CETOP 5 parallel manifold block with integrated POCV cartridges at each A port for clamp load-holding. All 16 pilot connections were internalized, leaving only 8 external A-port connections.',
        },
        {
          number: '03',
          title: 'The Outcome',
          description: 'The block replaced all 16 pipes and 32 fittings. No leaks were recorded during commissioning, and the robot cell footprint was reduced by 220mm, allowing for an optimized robot reach envelope.',
        }
      ]
    }
  ],
  productName: 'Multi Station Manifold Blocks',
  faqs: [
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
    title: 'Stop using chaotic pipework to connect multiple valves.',
    description: 'Centralize your circuit logic into a single, precision-machined multi-station manifold block from Honeywell Hydraulics.',
    primaryCtaText: 'REQUEST OEM QUOTE',
    primaryCtaHref: '/request-quote/#quote-form',
    secondaryCtaText: 'Submit SPM Schematic',
    secondaryCtaHref: '/contact-us/',
  }
};
