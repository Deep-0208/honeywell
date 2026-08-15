import React from 'react';
import {
  Shrink,
  Wrench,
  CircuitBoard,
  Droplets,
  Thermometer,
  ClipboardList,
  Monitor,
  FileCheck,
  Cog,
  Activity,
  FileText
} from 'lucide-react';
import type { ProductPageData } from '@/components/product-page/types';

export const customManifoldBlocksData: ProductPageData = {
  seo: {
    title: 'Custom Manifold Blocks Manufacturer | Bespoke Hydraulic Logic',
    description: 'Expert custom hydraulic manifold block manufacturer in Gujarat. We design and CNC-machine bespoke cartridge valve manifolds for SPMs and complex OEM circuits.',
    url: '/products/manifold-blocks/custom-manifold-blocks',
    image: '/images/products/manifold-blocks/custom-manifold-block-cnc-machined.webp',
  },
  schema: {
    productName: 'Custom Manifold Blocks',
    category: 'Manifold Blocks',
    properties: [
      { name: 'Maximum Block Size', value: 'Up to 600mm × 400mm × 350mm' },
      { name: 'Max Working Pressure', value: 'Up to 700 Bar (EN24T)' },
      { name: 'Valve Interfaces', value: 'CETOP 3/5/7/8, SAE, Sun/HydraForce cartridges' },
    ],
  },
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Manifold Blocks', href: '/products/manifold-blocks' },
      { label: 'Custom Manifold Blocks', href: '/products/manifold-blocks/custom-manifold-blocks' },
    ],
    currentPage: 'Custom Manifold Blocks',
    subtitle: 'Custom Manifold Blocks',
    h1: 'Custom Manifold Blocks Manufacturer',
    description: 'When standard CETOP blocks cannot solve the problem, we design the solution from scratch. We engineer completely bespoke hydraulic logic blocks for Special Purpose Machines, complex OEM automation circuits, and high-performance test rigs.',
    primaryCta: {
      label: 'SUBMIT SCHEMATIC',
      href: '/contact-us/',
    },
    secondaryCta: {
      label: 'REQUEST DESIGN QUOTE',
      href: '/request-quote/#quote-form',
    },
    image: {
      src: '/images/products/manifold-blocks/custom-manifold-block-cnc-machined.webp',
      alt: 'Custom manifold block manufacturer in Ahmedabad — Honeywell Hydraulics',
    },
    keySpecs: [
      { label: 'Max Size', value: '600x400x350 mm' },
      { label: 'Materials', value: 'AL / Steel / EN24T' },
      { label: 'Max Pressure', value: 'Up to 700 Bar' },
      { label: 'Interfaces', value: 'CETOP / Cartridge / SAE' },
    ],
  },
  overview: {
    heading: 'Consolidate Your Circuit. Eliminate Every Leak.',
    content: (
      <>
        <p>
          We take your hydraulic schematic and transform it into a single, precision-machined monolithic block — eliminating every external fitting, every hose, and every potential leak point from your machine&apos;s logic centre.
        </p>
        <p>
          Standard <strong>CETOP subplates</strong> and <strong>multi-station blocks</strong> solve the majority of industrial automation challenges. However, for specialized OEMs requiring absolute logic density, highly specific internal cross-porting, or the integration of advanced screw-in cartridge valves, a custom manifold block is the only viable engineering path.
        </p>
        <h3 className="text-xl font-bold text-honeywell-navy mt-8 mb-4">Cartridge Valve Integration</h3>
        <p>
          Our primary specialty within custom manifold design is the integration of <strong>screw-in cartridge valves</strong>. Unlike CETOP valves, cartridges screw directly into a machined cavity within the block body, making them completely internal and invisible from the outside.
        </p>
        <p>
          We machine cavities to the exact specifications of leading cartridge valve brands:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4 font-bold text-honeywell-navy">
          <li>Sun Hydraulics / Hydraforce</li>
          <li>Bosch Rexroth (SE, SL, SP series)</li>
          <li>Parker Hannifin logic elements</li>
          <li>Bucher Hydraulics logic cartridges</li>
        </ul>
      </>
    ),
  },
  keyFeatures: {
    heading: 'When Do You Need a Custom Manifold Block?',
    description: '',
    items: [
      {
        icon: <Shrink className="w-6 h-6 text-honeywell-red" />,
        title: 'Space is Critically Constrained',
        description: 'The machine frame cannot accommodate a standard multi-station block layout. A custom block is machined to the exact external dimensions that fit the available space.',
      },
      {
        icon: <Wrench className="w-6 h-6 text-honeywell-red" />,
        title: 'Cartridge Valves Are Required',
        description: 'Screw-in cartridge valves provide far superior logic density than CETOP valves. Integrating them requires custom cavities machined to proprietary specifications.',
      },
      {
        icon: <CircuitBoard className="w-6 h-6 text-honeywell-red" />,
        title: 'Circuit-Specific Logic',
        description: 'The system requires a unique internal port interconnection—for example, a cylinder that must regenerate its own return oil into the advance port.',
      },
      {
        icon: <Droplets className="w-6 h-6 text-honeywell-red" />,
        title: 'Leak Elimination is Paramount',
        description: 'In food processing, clean-room manufacturing, or precision test rigs, even a single external fitting is unacceptable. A monolithic block eliminates all external interconnections.',
      },
      {
        icon: <Thermometer className="w-6 h-6 text-honeywell-red" />,
        title: 'Thermal Management',
        description: 'We can machine integral cooling galleries inside the block body itself, circulating coolant water through the block to extract heat generated by high-flow proportional valves.',
      },
    ]
  },
  manufacturing: {
    heading: 'The Custom Manifold Design Process',
    description: 'Our Custom Hydraulic System Design division follows a rigorous, stage-gated design process to guarantee first-time success.',
    steps: [
      {
        icon: <ClipboardList className="w-6 h-6" />,
        title: 'Circuit Analysis',
        description: 'We receive your hydraulic schematic (P&ID) and your machine\'s space constraints. Our engineers analyse every valve, every flow path, and every pressure requirement.',
      },
      {
        icon: <Monitor className="w-6 h-6" />,
        title: '3D Spatial Layout (CAD)',
        description: 'We model the complete manifold block in 3D CAD. We plan every internal gallery, checking for wall thickness compliance, intersection angles, and plug positions. Every gallery bore is sized for velocity below 6 m/s.',
      },
      {
        icon: <FileCheck className="w-6 h-6" />,
        title: 'Client Review',
        description: 'We provide the complete 3D model and a detailed PDF layout drawing for your review. You verify port positions, mounting orientations, and access for wrench clearance before a single gram of metal is cut.',
      },
      {
        icon: <Cog className="w-6 h-6" />,
        title: 'CNC Machining',
        description: 'Approved designs enter our CNC machining centre. Deep-hole drilling rigs execute the gallery bores. 5-axis machining centres cut the cartridge valve cavities to the valve manufacturer\'s exact specifications.',
      },
      {
        icon: <Activity className="w-6 h-6" />,
        title: 'Hydrostatic Leak Testing',
        description: 'The completed block is sealed, connected to our test rig, and pressurized to 1.5x maximum working pressure. We verify zero internal cross-port leakage and zero external leakage.',
      },
      {
        icon: <FileText className="w-6 h-6" />,
        title: 'Documentation',
        description: 'You receive a complete technical dossier: the 3D STEP CAD model, PDF manufacturing drawing, internal gallery schematic, bill of materials (valve cavities and plugs), and the hydrostatic test certificate.',
      },
    ],
    midCta: {
      heading: 'Ready to optimize your circuit?',
      description: 'Submit your hydraulic schematic and space constraints to our engineering team.',
      primaryCta: {
        label: 'SUBMIT SCHEMATIC',
        href: '/contact-us/',
      }
    }
  },
  comparisons: [
    {
      heading: 'Custom Block vs. Standard Block',
      description: 'Decision Matrix',
      columns: [
        { heading: 'Design Factor' },
        { heading: 'Custom Manifold Block' },
        { heading: 'Standard CETOP/Multi-Station Block' },
      ],
      rows: [
        {
          feature: 'Space Required',
          values: [
            { text: 'Minimum (machined to fit exact cavity)', highlight: true },
            { text: 'Fixed, often larger footprint' }
          ]
        },
        {
          feature: 'Valve Technology',
          values: [
            { text: 'Any — CETOP, SAE, Cartridge, Proportional', highlight: true },
            { text: 'Primarily CETOP directional valves' }
          ]
        },
        {
          feature: 'Logic Density',
          values: [
            { text: 'Maximum (up to 20+ logic elements)', highlight: true },
            { text: 'Medium (up to 8–10 valves)' }
          ]
        },
        {
          feature: 'External Fittings',
          values: [
            { text: 'Zero. All logic is internal', highlight: true },
            { text: 'Some external connectors required' }
          ]
        },
        {
          feature: 'Lead Time',
          values: [
            { text: '3–6 weeks (design + machining)' },
            { text: '1–2 weeks (machining only)' }
          ]
        },
        {
          feature: 'Unit Cost',
          values: [
            { text: 'Higher (engineering + machining)' },
            { text: 'Lower' }
          ]
        },
        {
          feature: 'Best For',
          values: [
            { text: 'Complex SPMs, test rigs, OEM production', highlight: true },
            { text: 'General industrial automation' }
          ]
        }
      ]
    }
  ],
  technicalSpecs: {
    heading: 'Technical Specifications',
    description: 'Precision machining limits and specifications for custom manifold blocks.',
    tableTitle: 'Technical Capabilities',
    primaryCta: {
      label: 'REQUEST DESIGN QUOTE',
      href: '/request-quote/#quote-form',
    },
    secondaryCta: {
      label: 'SUBMIT SCHEMATIC',
      href: '/contact-us/',
    },
    rows: [
      { parameter: 'Maximum Block Size', value: 'Up to 600mm × 400mm × 350mm (larger on request)' },
      { parameter: 'Material Options', value: 'AL 6061-T6, ST52 Carbon Steel, EN24T Alloy Steel, SS316' },
      { parameter: 'Max Working Pressure', value: 'Aluminum: 210 Bar. Steel: 315–500 Bar. EN24T: Up to 700 Bar' },
      { parameter: 'Valve Interfaces', value: 'CETOP 3/5/7/8, SAE, Sun/HydraForce cartridges, Proportional' },
      { parameter: 'Internal Gallery Finish', value: 'Burr-free, flushed, Ra 1.6 µm minimum' },
      { parameter: 'Port Thread Options', value: 'BSPP, NPT, SAE O-Ring Boss, SAE Code 61/62 Flange' },
      { parameter: 'Documentation', value: '3D STEP, PDF drawing, gallery schematic, hydrostatic test cert.' },
    ],
  },
  spotlights: [
    {
      badge: 'OEM Case Study',
      heading: 'Custom Cartridge Manifold for 12-Axis SPM Automation',
      subheading: 'Automotive Component Manufacturer — Sanand GIDC, Ahmedabad',
      stats: [],
      phases: [
        {
          number: '01',
          title: 'The Challenge',
          description: 'An automotive manufacturer was building a custom SPM requiring 12 independent clamping circuits with sequence valves and pilot-operated check valves. The machine frame allowed only 180mm × 280mm of vertical space for the entire logic assembly.',
        },
        {
          number: '02',
          title: 'The Solution',
          description: 'Standard CETOP blocks would have required 900mm of rail length. We designed a single custom block measuring 165mm × 270mm × 310mm, integrating 12 Sun Hydraulics sequence/check cartridge sets entirely internally.',
        },
        {
          number: '03',
          title: 'The Outcome',
          description: 'The block fit the tight dimensions perfectly, eliminated 48 external fittings, and achieved zero leaks on the first hydrostatic test, allowing the SPM to meet its 8-second cycle time specification immediately.',
        }
      ]
    }
  ],
  productName: 'Custom Manifold Blocks',
  faqs: [
    {
      question: 'What do I need to provide to get a custom manifold block designed?',
      answer: 'The minimum requirement is a hydraulic circuit schematic (P&ID) showing all valves, flow paths, and working pressures. Ideally, also provide the available space dimensions and the port connection orientations you require. Our team will handle all 3D spatial layout and gallery sizing calculations.',
    },
    {
      question: 'How long does the design and manufacturing process take?',
      answer: 'For a first-article prototype, allow 3–6 weeks from approved design to delivery. This includes 1–2 weeks for 3D CAD design and client review, plus 2–4 weeks for CNC machining, deburring, plating, and testing. Series production of approved designs follows a faster, repeat-run timeline.',
    },
    {
      question: 'Can you reverse-engineer a manifold block from an existing imported block that has failed?',
      answer: 'Yes. If you supply the failed block, we can measure all external dimensions, port positions, and identify the internal gallery logic by pressure-testing each port combination. We then design a fully documented local replacement block that may be improved upon the original.',
    },
    {
      question: 'What is the smallest custom manifold block you can manufacture?',
      answer: 'We have machined blocks as small as 60mm × 40mm × 50mm integrating 3 cartridge valve cavities. The practical minimum is governed by the wall thickness required between pressure galleries — minimum 8mm wall for aluminium at 210 Bar, 6mm wall for steel at 315 Bar.',
    },
  ],
  relatedProducts: {
    description: 'Explore our complete range of hydraulic manifold and logic block solutions.',
    items: [
      {
        title: 'CETOP Subplates',
        description: 'Standard mounting plates for NG6 and NG10 directional control valves.',
        category: 'Manifold Blocks',
        imageSrc: '/images/products/manifold-blocks/cetop-subplate-manufacturer.webp',
        href: '/products/manifold-blocks/cetop-manifold-blocks/',
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
    title: 'Have a hydraulic schematic and space constraints?',
    description: 'If your machine logic outgrows what standard blocks can deliver, Honeywell Hydraulics will design and manufacture the exact custom manifold block your circuit demands — guaranteed to fit, guaranteed to seal.',
    primaryCtaText: 'REQUEST A CUSTOM DESIGN QUOTE',
    primaryCtaHref: '/request-quote/#quote-form',
    secondaryCtaText: 'Submit Schematic for Review',
    secondaryCtaHref: '/contact-us/',
  }
};
