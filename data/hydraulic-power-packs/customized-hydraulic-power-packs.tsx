import React from 'react';
import { Settings, ShieldCheck, Zap, Layers, Network, ClipboardList, CheckCircle2, Cpu, ArrowRight, Box } from 'lucide-react';
import { FaIndustry, FaBoxOpen, FaRobot } from 'react-icons/fa';
import type { ProductPageData } from '@/components/product-page/types';

export const customizedPowerPackData: ProductPageData = {
  // ── SEO ──
  seo: {
    title: 'Customized Hydraulic Power Pack Manufacturer | Bespoke OEM Units',
    description: 'Leading Customized Hydraulic Power Pack Manufacturer in India. We engineer bespoke industrial hydraulic power units with custom manifolds, PLC automation, and OEM integration.',
    url: '/products/hydraulic-power-packs/customized-hydraulic-power-packs',
    image: '/images/products/hydraulic-power-packs/customized-hydraulic-power-pack.webp',
  },

  // ── Schema ──
  schema: {
    productName: 'Customized Hydraulic Power Packs',
    category: 'Hydraulic Power Packs',
    properties: [
      { name: 'Engineering Type', value: 'Bespoke / Engineered-to-Order' },
      { name: 'Core Integration', value: 'Custom CNC Manifolds & PLC Automation' },
      { name: 'Applications', value: 'Serial OEM Machinery & Complex Automation' },
      { name: 'Build Standard', value: 'ISO / CETOP Compliant' },
    ],
  },

  // ── Hero ──
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products/' },
      { label: 'Hydraulic Power Packs', href: '/products/hydraulic-power-packs/' },
    ],
    currentPage: 'Customized Units',
    subtitle: 'BESPOKE OEM HYDRAULIC SYSTEMS',
    h1: 'Customized Hydraulic Power Pack Manufacturer',
    description: 'Engineered fluid power for exact application requirements. As India\'s leading Customized Hydraulic Power Pack Manufacturer, Honeywell Hydraulics designs and builds bespoke power units from the ground up. Whether you require complex multi-actuator synchronization, advanced PLC integration, highly specialized spatial envelopes, or extreme environmental protection, we engineer the hydraulic heart of your OEM machinery.',
    primaryCta: { label: 'REQUEST CUSTOM DESIGN', href: '/request-quote/#quote-form' },
    secondaryCta: { label: 'TECHNICAL SPECS', href: '#technical-specifications' },
    image: {
      src: '/images/products/hydraulic-power-packs/customized-hydraulic-power-pack.webp',
      alt: 'Customized Hydraulic Power Pack engineered by Honeywell Hydraulics featuring bespoke manifold block, automation PLC panel, and specialized reservoir.',
    },
    keySpecs: [
      { label: 'Design', value: 'Bespoke / OEM' },
      { label: 'Logic', value: 'Custom Manifolds' },
      { label: 'Control', value: 'PLC / VFD Ready' },
      { label: 'Testing', value: 'Full FAT Validation' },
    ],
  },

  // ── Overview ──
  overview: {
    heading: 'What Is a Customized Hydraulic Power Pack?',
    content: (
      <div className="space-y-6">
        <p>
          A <strong className="text-honeywell-navy">Customized Hydraulic Power Pack</strong> (or Bespoke Hydraulic Power Unit) is an engineered-to-order system designed exclusively to meet the highly specific demands of a unique application.
        </p>
        <p>
          Unlike standard off-the-shelf units that force machine designers to adapt to rigid constraints, a custom hydraulic system is built in total reverse: we analyze the OEM machine's mechanical requirements first, and then build the fluid power circuit to match it flawlessly.
        </p>
        <p>
          This requires advanced engineering capabilities, including custom <a href="/products/manifold-blocks/" className="text-honeywell-red font-semibold hover:underline">Hydraulic Manifold Block</a> design, specialized motor-pump synchronization, bespoke reservoir fabrication to fit unusual spatial footprints, and fully integrated electrical control panels equipped with PLC automation and sensor arrays.
        </p>

        {/* Typical System Configuration Flow */}
        <div className="mt-10 bg-brand-lightSurface p-8 rounded-xl border border-slate-200">
          <h3 className="text-xl font-display font-bold text-honeywell-navy mb-6">Typical System Configuration Flow</h3>
          <p className="text-sm text-brand-steelGray mb-6">While every bespoke system differs, a high-level logical flow of a customized circuit typically follows this path:</p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-brand-darkSlate">
            <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200">Electric Motor</span>
            <ArrowRight className="w-4 h-4 text-honeywell-red" />
            <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200">Hydraulic Pump</span>
            <ArrowRight className="w-4 h-4 text-honeywell-red" />
            <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200">Custom Reservoir</span>
            <ArrowRight className="w-4 h-4 text-honeywell-red" />
            <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200">Filtration</span>
            <ArrowRight className="w-4 h-4 text-honeywell-red" />
            <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200">Custom Manifold Block</span>
            <ArrowRight className="w-4 h-4 text-honeywell-red" />
            <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200">Actuators</span>
            <ArrowRight className="w-4 h-4 text-honeywell-red" />
            <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200">Return Filter</span>
          </div>
        </div>

        {/* Engineering Tip */}
        <div className="mt-8 bg-honeywell-navy text-white p-6 rounded-lg border-l-4 border-honeywell-red shadow-md">
          <div className="flex items-center gap-3 mb-2">
            <Zap className="w-6 h-6 text-honeywell-red" />
            <h4 className="text-lg font-bold">Engineering Tip</h4>
          </div>
          <p className="text-slate-200 italic leading-relaxed">
            Designing extra valve stations with blanking plates and specifying spare electrical I/O in the control panel during the initial build can significantly reduce future modification costs if the machine's capabilities need to expand.
          </p>
        </div>
      </div>
    ),
  },

  // ── Key Features ──
  keyFeatures: {
    heading: 'When Is Customization Required?',
    description: 'Standard units cannot solve complex engineering challenges. Customization becomes mandatory in the following scenarios:',
    showStepNumbers: false,
    items: [
      {
        icon: <Layers className="w-6 h-6" />,
        title: 'Extreme Space Constraints',
        description: 'Standard rectangular tanks may not fit inside an OEM machine chassis. We design L-shaped, overhead, or highly vertical reservoirs to maximize spatial efficiency.',
      },
      {
        icon: <Network className="w-6 h-6" />,
        title: 'Complex Multi-Actuator Sequencing',
        description: 'If the machine requires multiple cylinders to actuate in a specific timed sequence, we engineer custom manifold blocks with integrated cartridge valves to achieve precise logic.',
      },
      {
        icon: <Cpu className="w-6 h-6" />,
        title: 'Automation & PLC Integration',
        description: 'Modern automated assembly lines require constant feedback. We integrate advanced pressure transducers, digital flow meters, and LVDTs that feed data directly back to a central PLC.',
      },
      {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: 'Specialized Environments',
        description: 'Food processing requires stainless steel tanks; marine applications require epoxy-coated reservoirs; high-heat foundries require heavy-duty heat exchangers. We build for the environment.',
      },
    ],
  },

  // ── Technical Specs (Re-purposed for Custom Capabilities) ──
  technicalSpecs: {
    heading: 'Custom OEM Engineering Capabilities',
    description: 'We do not assemble parts; we engineer complete solutions. Our bespoke manufacturing capabilities cover the entire fluid power spectrum.',
    primaryCta: { label: 'VIEW MANUFACTURING', href: '/manufacturing-facility/' },
    secondaryCta: { label: 'CONTACT ENGINEERING', href: '/contact-us/' },
    tableTitle: 'Bespoke Design Parameters',
    rows: [
      { parameter: 'Hydraulic Circuitry', value: 'Fully bespoke CAD design and logic simulation' },
      { parameter: 'Manifold Design', value: 'CNC machined solid aluminum or ductile iron blocks' },
      { parameter: 'Reservoir Fabrication', value: 'Laser-cut, heavy-gauge steel with custom internal baffling' },
      { parameter: 'Electrical Automation', value: 'Siemens / Allen-Bradley PLC, VFDs, Star-Delta panels' },
      { parameter: 'Sensor Integration', value: 'Transducers, flow meters, IO-Link, PROFINET compatible' },
      { parameter: 'Thermal Management', value: 'Oversized heat exchangers or immersion heaters' },
      { parameter: 'Validation', value: 'Full Factory Acceptance Testing (FAT) under thermal load' },
      { parameter: 'Documentation', value: '2D/3D CAD, schematic diagrams, wiring diagrams, complete BOM' },
    ],
  },

  // ── Manufacturing ──
  manufacturing: {
    heading: 'Complete Custom OEM Integration',
    description: 'Our manufacturing process for bespoke units is a rigorous, multi-stage engineering pipeline designed to guarantee flawless integration with your machinery.',
    steps: [
      {
        icon: <ClipboardList className="w-6 h-6" />,
        title: 'Requirement Analysis & Circuit Design',
        description: 'We review your machine\'s cycle times, load forces, and spatial limits. We design the raw hydraulic circuit diagram ensuring perfectly sized line velocities and correct actuator speeds.',
      },
      {
        icon: <Settings className="w-6 h-6" />,
        title: 'Custom Manifold Machining',
        description: 'To reduce messy, leak-prone plumbing, we consolidate the valving logic into a single, CNC-machined manifold block. This bespoke "brain" minimizes space and ensures instantaneous valve response.',
      },
      {
        icon: <Box className="w-6 h-6" />,
        title: 'Reservoir Fabrication',
        description: 'We laser-cut and weld custom reservoirs from heavy-gauge steel, incorporating specific internal baffles to force oil cooling and de-aeration, and custom mounting brackets for your chassis.',
      },
      {
        icon: <CheckCircle2 className="w-6 h-6" />,
        title: 'Electrical Assembly & FAT',
        description: 'We build bespoke electrical panels pre-wired to the manifold’s sensors. We then run a rigorous Factory Acceptance Test (FAT), simulating your exact load profile to validate thermal stability and logic.',
      },
    ],
    midCta: {
      heading: 'Standardizing Your Serial Machinery?',
      description: 'We act as the dedicated fluid power department for leading OEMs, providing serial production of approved custom designs.',
      primaryCta: { label: 'DISCUSS OEM CONTRACTS', href: '/request-quote/#quote-form' },
      whatsappLabel: 'WhatsApp Engineering Team',
    },
  },

  // ── Engineering / How to Choose ──
  engineering: {
    heading: 'Engineering Guide: How To Design a Custom Unit',
    description: 'Proper custom design is rooted in accurate load calculations, safety margins, and rigorous maintenance planning.',
    items: [
      {
        label: '1',
        title: 'Load, Pressure, and Flow Calculations',
        description: 'Start at the actuator. Calculate the force required to move the load. Determine the bore of the hydraulic cylinder needed to generate that force at an optimal system pressure (150-250 Bar). Once the bore is known, calculate the fluid volume needed for speed (LPM), which dictates pump size.',
      },
      {
        label: '2',
        title: 'Heat Generation & Cooling Strategies',
        description: 'In highly automated circuits, fluid friction generates immense heat. We calculate the thermal rejection rate. If the bespoke reservoir lacks sufficient surface area to dissipate heat naturally, a forced-air oil cooler or chilled-water heat exchanger must be engineered into the return line.',
      },
      {
        label: '3',
        title: 'Selection Checklist (Customer Prerequisites)',
        description: 'Before designing, we require: 1. Required Pressure & Flow 2. Operating Voltage & Duty Cycle 3. Number of Actuators 4. Installation Space dimensions 5. Environmental conditions (IP ratings, temp) 6. Automation feedback requirements (PLC/Sensors) 7. Future expansion needs.',
      },
      {
        label: '4',
        title: 'Maintenance Snapshot',
        description: 'DAILY: Check oil levels, inspect for external leaks, listen for cavitation. WEEKLY: Inspect high-pressure hoses and motor mount fasteners. MONTHLY: Inspect filter restriction indicators and pump alignment. QUARTERLY: Analyze oil particle count, tighten electrical terminals, calibrate transducers.',
      },
    ],
  },

  // ── Comparisons ──
  comparisons: [
    {
      heading: 'Customized vs. Standard Hydraulic Power Packs',
      description: 'Understanding why complex machinery demands bespoke engineering over catalog solutions.',
      columns: [{ heading: 'Customized Power Pack' }, { heading: 'Standard Power Pack' }],
      rows: [
        { feature: 'Design Flexibility', values: [{ text: 'Unlimited; built to exact machine geometry', highlight: true }, { text: 'Rigid; must design machine around the pack' }] },
        { feature: 'Hydraulic Circuitry', values: [{ text: 'Bespoke multi-actuator logic (Custom Manifold)', highlight: true }, { text: 'Simple up/down or basic directional control' }] },
        { feature: 'Automation & PLC', values: [{ text: 'Fully integrated with digital transducers and I/O', highlight: true }, { text: 'Rarely integrated; relies on external logic' }] },
        { feature: 'Space Optimization', values: [{ text: 'Highly optimized (L-shaped, vertical, chassis-mount)', highlight: true }, { text: 'Standard catalog footprint only' }] },
        { feature: 'Reservoir Baffling', values: [{ text: 'Engineered specifically for the flow rate & thermal load', highlight: true }, { text: 'Basic generic baffling' }] },
        { feature: 'Energy Efficiency', values: [{ text: 'Extremely high (VFD and accumulator integration)', highlight: true }, { text: 'Average' }] },
        { feature: 'Initial Cost', values: [{ text: 'Higher (Engineering and CAD time required)' }, { text: 'Lower (Pre-engineered)', highlight: true }] },
        { feature: 'Long-Term ROI', values: [{ text: 'Highest (Prevents downtime, exact OEM fit)', highlight: true }, { text: 'Lower (May require ongoing modifications)' }] },
        { feature: 'Lead Time', values: [{ text: '4 to 8 Weeks (Design, Approval, Build, FAT)' }, { text: 'Off-the-shelf to 2 Weeks', highlight: true }] },
        { feature: 'Expandability', values: [{ text: 'Easily designed with spare blanking plates', highlight: true }, { text: 'Highly difficult to add valves later' }] },
        { feature: 'Serviceability', values: [{ text: 'Centralized manifold removes messy plumbing', highlight: true }, { text: 'Cluttered external piping makes service difficult' }] },
        { feature: 'OEM Suitability', values: [{ text: 'The industry standard for serial machine builders', highlight: true }, { text: 'Better suited for one-off repair applications' }] },
      ],
    }
  ],

  // ── Industries ──
  industries: {
    heading: 'Industries Utilizing Custom Units',
    description: 'Custom units are deployed wherever standard systems fail to meet operational demands.',
    items: [
      {
        icon: <FaRobot className="w-6 h-6" />,
        name: 'Automated Manufacturing',
        description: 'Robotic assembly lines requiring precise multi-actuator synchronization and PLC integration.',
        href: '#',
      },
      {
        icon: <FaBoxOpen className="w-6 h-6" />,
        name: 'Food & Packaging',
        description: 'Stainless steel units using food-grade oil to drive high-speed packaging machinery.',
        href: '#',
      },
      {
        icon: <FaIndustry className="w-6 h-6" />,
        name: 'Special Purpose Machines (SPM)',
        description: 'Custom presses and forming machines built with extreme spatial constraints.',
        href: '#',
      },
    ],
  },
  
  // ── Related Products ──
  relatedProducts: {
    description: 'Explore our other fluid power units designed for specific industrial applications.',
    items: [
      {
        title: 'Three Phase Power Packs',
        description: 'Heavy-duty 415V continuous duty power units for standard industrial manufacturing.',
        category: 'Hydraulic Power Packs',
        imageSrc: '/images/products/hydraulic-power-packs/three-phase-hydraulic-power-pack.webp',
        href: '/products/hydraulic-power-packs/three-phase-hydraulic-power-packs/',
        ctaText: 'View Details',
      },
      {
        title: 'Multistation Power Packs',
        description: 'Centralized power units designed to drive multiple independent hydraulic circuits simultaneously.',
        category: 'Hydraulic Power Packs',
        imageSrc: '/images/products/hydraulic-power-packs/multistation-hydraulic-power-pack.webp',
        href: '/products/hydraulic-power-packs/multistation-hydraulic-power-packs/',
        ctaText: 'View Details',
      },
      {
        title: 'Hydraulic Manifold Blocks',
        description: 'Custom CNC-machined blocks that consolidate complex valve logic into a single unit.',
        category: 'Hydraulic Components',
        imageSrc: '/images/products/manifold-blocks/hydraulic-manifold-block.webp',
        href: '/products/manifold-blocks/',
        ctaText: 'View Details',
      },
    ],
  },

  productName: 'Customized Power Packs',

  // ── FAQs ──
  faqs: [
    {
      question: 'What information do you require to design a custom power pack?',
      answer: 'We need your actuator specifications (cylinder bore/stroke or motor torque/RPM), required cycle times, operating environment, available voltage, spatial constraints, and whether you require an integrated electrical control panel.',
    },
    {
      question: 'Can you match our existing machine\'s communication protocol?',
      answer: 'Yes. Our electrical automation team can build the control panel to integrate with standard industrial protocols including PROFINET, EtherNet/IP, Modbus TCP, and IO-Link.',
    },
    {
      question: 'How long does it take to design and build a bespoke unit?',
      answer: 'Generally, CAD design and hydraulic circuit approval take 1-2 weeks. Fabrication, manifold machining, assembly, and FAT take an additional 3-4 weeks. Serial OEM production runs have significantly shorter lead times after the first prototype is approved.',
    },
    {
      question: 'What is the maintenance schedule for a custom hydraulic power pack?',
      answer: 'Daily: Check oil levels, visually inspect for leakage, listen for cavitation. Weekly: Inspect high-pressure hose integrity, verify fasteners. Monthly: Inspect filter restriction indicators, check alignment. Quarterly: Analyze oil condition, tighten electrical terminals, calibrate pressure transducers.',
    },
    {
      question: 'Do you provide full documentation for the custom unit?',
      answer: 'Absolutely. Every customized power pack ships with a comprehensive documentation dossier including 2D/3D CAD models, detailed hydraulic circuit schematics, electrical wiring diagrams, and a complete Bill of Materials (BOM) for future part sourcing.',
    },
    {
      question: 'Can you design a system for extreme cold or extreme heat?',
      answer: 'Yes. For extreme cold, we integrate thermostatic immersion heaters in the reservoir. For extreme heat, we utilize Viton/Kalrez seals, specialized high-temp hydraulic fluids, and oversized shell-and-tube heat exchangers.',
    },
  ],

  // ── Final CTA ──
  cta: {
    title: 'Ready to Engineer Your OEM Solution?',
    description: "Do not compromise your machine's performance with an off-the-shelf unit. Partner with Honeywell Hydraulics to engineer a highly optimized, automation-ready custom hydraulic power pack.",
    primaryCtaText: 'REQUEST CUSTOM DESIGN',
    primaryCtaHref: '/request-quote/#quote-form',
    secondaryCtaText: 'Call Engineering',
    secondaryCtaHref: 'tel:+919924343873',
  },
};
