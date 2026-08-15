import React from 'react';
import { Settings, ShieldCheck, Zap, Network, CheckCircle2, Cpu, Layers, ArrowRight } from 'lucide-react';
import { FaCogs, FaBoxOpen, FaRobot } from 'react-icons/fa';
import type { ProductPageData } from '@/components/product-page/types';

export const multistationPowerPackData: ProductPageData = {
  // ── SEO ──
  seo: {
    title: 'Multistation Hydraulic Power Pack Manufacturer | Centralized Control',
    description: 'India\'s leading Multistation Hydraulic Power Pack Manufacturer. We engineer centralized power units with advanced CETOP manifolds for simultaneous multi-actuator automation.',
    url: '/products/hydraulic-power-packs/multistation-hydraulic-power-packs',
    image: '/images/products/hydraulic-power-packs/multistation-hydraulic-power-pack.webp',
  },

  // ── Schema ──
  schema: {
    productName: 'Multistation Hydraulic Power Packs',
    category: 'Hydraulic Power Packs',
    properties: [
      { name: 'Core Function', value: 'Centralized Multi-Actuator Control' },
      { name: 'Valve Architecture', value: 'Stacked CETOP Manifold Banks' },
      { name: 'Logic Capability', value: 'Simultaneous & Sequential Operation' },
      { name: 'Control Integration', value: 'PLC / SCADA Automation Ready' },
    ],
  },

  // ── Hero ──
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Hydraulic Power Packs', href: '/products/hydraulic-power-packs' },
    ],
    currentPage: 'Multistation Units',
    subtitle: 'CENTRALIZED MULTI-CIRCUIT AUTOMATION',
    h1: 'Multistation Hydraulic Power Pack Manufacturer',
    description: 'One power source, infinite control. As a specialized Multistation Hydraulic Power Pack Manufacturer, Honeywell Hydraulics engineers centralized fluid power systems capable of driving multiple independent hydraulic circuits simultaneously or sequentially. By utilizing advanced CETOP manifold systems and precise flow sharing logic, we eliminate the need for scattered standalone pumps, streamlining your entire industrial production line.',
    primaryCta: { label: 'REQUEST MULTISTATION QUOTE', href: '/request-quote/#quote-form' },
    secondaryCta: { label: 'TECHNICAL SPECS', href: '#technical-specifications' },
    image: {
      src: '/images/products/hydraulic-power-packs/multistation-hydraulic-power-pack.webp',
      alt: 'Multistation Hydraulic Power Pack featuring a complex CETOP valve bank manifold designed for simultaneous actuator control.',
    },
    keySpecs: [
      { label: 'Circuits', value: '2 to 20+ Stations' },
      { label: 'Logic', value: 'Sequential & Sim.' },
      { label: 'Manifold', value: 'CETOP 3/5/7 Banks' },
      { label: 'Control', value: 'Central PLC Hub' },
    ],
  },

  // ── Overview ──
  overview: {
    heading: 'What is a Multistation Hydraulic Power Pack?',
    content: (
      <div className="space-y-6">
        <p>
          A <strong className="text-honeywell-navy">Multistation Hydraulic Power Pack</strong> (or Centralized Hydraulic Power Unit) is designed to supply pressurized fluid to multiple, independently operated <a href="/products/hydraulic-cylinders" className="text-honeywell-red font-semibold hover:underline">Hydraulic Cylinders</a> or motors from a single central reservoir and pump assembly.
        </p>
        <p>
          Instead of a simple up/down single-valve circuit, a multistation pack utilizes a large, CNC-machined <a href="/products/manifold-blocks" className="text-honeywell-navy underline hover:text-honeywell-red">Hydraulic Manifold Block</a> stacked with a "bank" of directional control valves.
        </p>
        <p>
          This centralized architecture is the backbone of automated industrial manufacturing. Whether you need five cylinders to actuate simultaneously with perfectly balanced flow, or sequentially in a strict PLC-timed order, a multistation unit handles the entire machine's logic from one location.
        </p>

        {/* Typical System Configuration Flow */}
        <div className="mt-10 bg-brand-lightSurface p-8 rounded-xl border border-slate-200">
          <h3 className="text-xl font-display font-bold text-honeywell-navy mb-6">Typical Multistation Configuration Flow</h3>
          <p className="text-sm text-brand-steelGray mb-6">How one pump drives multiple independent actions without stalling:</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-sm font-semibold text-brand-darkSlate">
            <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200">Electric Motor</span>
            <ArrowRight className="w-4 h-4 text-honeywell-red hidden md:block" />
            <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200">High-Flow Pump</span>
            <ArrowRight className="w-4 h-4 text-honeywell-red hidden md:block" />
            <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200">Main Manifold</span>
            <ArrowRight className="w-4 h-4 text-honeywell-red hidden md:block" />
            
            <div className="flex flex-col gap-2 mt-4 md:mt-0">
              <div className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-honeywell-red" />
                <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200">Station 1 (Clamp)</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-honeywell-red" />
                <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200">Station 2 (Form)</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-honeywell-red" />
                <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200">Station 3 (Eject)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Engineering Tip */}
        <div className="mt-8 bg-honeywell-navy text-white p-6 rounded-lg border-l-4 border-honeywell-red shadow-md">
          <div className="flex items-center gap-3 mb-2">
            <Zap className="w-6 h-6 text-honeywell-red" />
            <h4 className="text-lg font-bold">Engineering Tip</h4>
          </div>
          <p className="text-slate-200 italic leading-relaxed">
            Designing spare manifold ports (capped with blanking plates) and specifying extra electrical I/O capacity in your control panel during the initial build allows future hydraulic stations to be added with minimal redesign, saving thousands of dollars later.
          </p>
        </div>
      </div>
    ),
  },

  // ── Key Features ──
  keyFeatures: {
    heading: 'Core Engineering Advantages',
    description: 'Centralizing your hydraulic power eliminates messy redundant hardware and enables synchronized factory automation.',
    showStepNumbers: false,
    items: [
      {
        icon: <Network className="w-6 h-6" />,
        title: 'Centralized Fluid Power',
        description: 'Replaces 5 standalone power packs with 1 highly efficient central unit. Reduces factory noise, simplifies maintenance, and cuts electrical wiring costs drastically.',
      },
      {
        icon: <Layers className="w-6 h-6" />,
        title: 'Stacked CETOP Architecture',
        description: 'Manifolds utilize modular CETOP valve banks. You can sandwich flow-controls or pilot-operated checks directly beneath specific stations without affecting others.',
      },
      {
        icon: <Cpu className="w-6 h-6" />,
        title: 'Simultaneous Flow Balancing',
        description: 'Integrates proportional flow dividers and pressure compensators to guarantee multiple cylinders extend simultaneously, regardless of unequal physical loads.',
      },
      {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: 'PLC Sequential Control',
        description: 'Built specifically for automation. Pre-wired junction boxes interface directly with Siemens/Allen-Bradley PLCs for microsecond-accurate sequential timing.',
      },
    ],
  },

  // ── Technical Specs ──
  technicalSpecs: {
    heading: 'Multistation Capability Parameters',
    description: 'We engineer complex logic manifolds for high-speed industrial automation.',
    primaryCta: { label: 'VIEW MANIFOLDS', href: '/products/manifold-blocks' },
    secondaryCta: { label: 'CONTACT ENGINEERING', href: '/contact' },
    tableTitle: 'Automation Specifications',
    rows: [
      { parameter: 'Number of Stations', value: '2 to 20+ independent circuits' },
      { parameter: 'Operation Logic', value: 'Simultaneous, Sequential, or Hybrid' },
      { parameter: 'Valve Architecture', value: 'CETOP 3 (NG6), CETOP 5 (NG10), CETOP 7 (NG16)' },
      { parameter: 'Flow Distribution', value: 'Internal drilled galleries (CNC machined)' },
      { parameter: 'Load Balancing', value: 'Proportional Flow Control / Pressure Compensators' },
      { parameter: 'Pump Sizing Method', value: 'Based on Peak Simultaneous Demand (LPM)' },
      { parameter: 'Electrical Interface', value: 'Hardwired Relay, IO-Link, Profinet, Modbus TCP' },
      { parameter: 'Expandability', value: 'Spare stations via Blanking Plates' },
    ],
  },

  // ── Manufacturing ──
  manufacturing: {
    heading: 'Manufacturing: Manifold & Automation Expertise',
    description: 'Building a multistation pack is an exercise in complex precision machining and deep electrical integration.',
    steps: [
      {
        icon: <Settings className="w-6 h-6" />,
        title: 'Multi-Port CNC Manifold Machining',
        description: 'The heart of a multistation unit is the custom Manifold Block. We CNC machine solid blocks, drilling complex internal galleries that route pressure to multiple valve stations without external piping.',
      },
      {
        icon: <Layers className="w-6 h-6" />,
        title: 'Valve Bank Assembly & Balancing',
        description: 'We assemble stacked CETOP valve banks, integrating sandwich valves (flow restrictors, pilot-operated checks) directly beneath directional valves to tune specific stations independently.',
      },
      {
        icon: <Cpu className="w-6 h-6" />,
        title: 'Electrical Panel & PLC Integration',
        description: 'A multistation pack is useless without a brain. We build integrated electrical panels pre-wired to the solenoids, programming PLCs to execute your exact sequential logic.',
      },
      {
        icon: <CheckCircle2 className="w-6 h-6" />,
        title: 'Simultaneous Load Testing (FAT)',
        description: 'We do not just test the pump. We simulate your Peak Simultaneous Demand—firing all required valves at once—to guarantee the pump size and manifold galleries can handle massive flow without stalling.',
      },
    ],
    midCta: {
      heading: 'Standardizing Your Automated Machinery?',
      description: 'We supply fully tested, PLC-ready multistation packs for serial OEM assembly lines.',
      primaryCta: { label: 'REQUEST OEM CONTRACTS', href: '/request-quote/#quote-form' },
      whatsappLabel: 'WhatsApp Engineering',
    },
  },

  // ── Engineering / How to Choose ──
  engineering: {
    heading: 'Engineering Guide: Designing a Multistation System',
    description: 'Correct multistation design prevents "actuator starvation," where one cylinder steals oil from another.',
    items: [
      {
        label: 'A',
        title: 'Typical Design Inputs (Prerequisites)',
        description: '1. Number of Actuators 2. Individual flow/pressure needs 3. Sequence Logic Diagram 4. Peak Simultaneous Demand (absolute max moving at once) 5. PLC requirements 6. Space constraints 7. Expansion plans.',
      },
      {
        label: 'B',
        title: 'Selection Checklist',
        description: 'Verify: Total hydraulic stations, simultaneous vs sequential operation, flow sharing requirements, manifold configuration (series vs parallel), cooling requirements, and electrical control methods.',
      },
      {
        label: 'C',
        title: 'Peak Simultaneous Demand (Pump Sizing)',
        description: 'Do not size the pump by adding the flow of every cylinder. Size it based on Peak Simultaneous Demand—the volume required when the highest number of cylinders move simultaneously. Sequential logic requires far smaller pumps.',
      },
      {
        label: 'D',
        title: 'Maintenance Snapshot',
        description: 'DAILY: Check manifold for inter-station leaks, verify gauge pressure. WEEKLY: Inspect valve mounting bolts and solenoid terminals. MONTHLY: Check filter restriction, verify pump alignment. QUARTERLY: Perform PLC diagnostic I/O testing, test sequence timing.',
      },
    ],
  },

  // ── Comparisons ──
  comparisons: [
    {
      heading: 'Multistation vs. Standard Power Pack',
      description: 'Why centralized fluid power is fundamentally required for automation over decentralized standalone units.',
      columns: [{ heading: 'Multistation Power Pack' }, { heading: 'Standard Power Pack' }],
      rows: [
        { feature: 'Number of Circuits', values: [{ text: 'Multiple (2 to 20+ independent stations)', highlight: true }, { text: 'Single (One actuator or parallel only)' }] },
        { feature: 'Simultaneous Operation', values: [{ text: 'Engineered for flow sharing & load balancing', highlight: true }, { text: 'Will stall or favor the lightest load' }] },
        { feature: 'Sequential Operation', values: [{ text: 'Highly complex PLC-driven sequences', highlight: true }, { text: 'Simple up/down manual control' }] },
        { feature: 'Automation Compatibility', values: [{ text: 'Designed explicitly for PLC/SCADA integration', highlight: true }, { text: 'Rarely integrated' }] },
        { feature: 'Expandability', values: [{ text: 'High (Remove blanking plate, add valve)', highlight: true }, { text: 'Low (Requires messy external plumbing)' }] },
        { feature: 'Manifold Complexity', values: [{ text: 'Advanced multi-gallery CNC machined blocks', highlight: true }, { text: 'Basic single-station block' }] },
        { feature: 'Maintenance', values: [{ text: 'Centralized (One pump/tank to maintain)', highlight: true }, { text: 'Decentralized (Multiple pumps to maintain)' }] },
        { feature: 'Flow Balancing', values: [{ text: 'Integrates sandwich flow controls per station', highlight: true }, { text: 'No independent station control' }] },
        { feature: 'Energy Efficiency', values: [{ text: 'High (One large efficient motor replaces many)', highlight: true }, { text: 'Low if using multiple standard packs' }] },
        { feature: 'Installation', values: [{ text: 'Clean (One central unit with piped lines)', highlight: true }, { text: 'Cluttered (Power packs scattered everywhere)' }] },
        { feature: 'Initial Cost', values: [{ text: 'Higher upfront engineering cost' }, { text: 'Lower upfront cost', highlight: true }] },
        { feature: 'Industrial Suitability', values: [{ text: 'Assembly lines, CNC machines, Packaging', highlight: true }, { text: 'Scissor lifts, dump trucks, simple presses' }] },
      ],
    }
  ],

  // ── Industries (Renamed in content as Common Multistation Applications) ──
  industries: {
    heading: 'Common Multistation Applications',
    description: 'Centralized hydraulic units are vastly superior to installing individual power packs at every machine station.',
    items: [
      {
        icon: <FaRobot className="w-6 h-6" />,
        name: 'Assembly Line Automation',
        description: 'Coordinated actuator timing driven by a central PLC for flawless sequential manufacturing.',
        href: '/industries',
      },
      {
        icon: <FaCogs className="w-6 h-6" />,
        name: 'Fixture Clamping Systems',
        description: 'Requires highly stable pressure holding across multiple independent vices via PO check valves.',
        href: '/industries',
      },
      {
        icon: <FaBoxOpen className="w-6 h-6" />,
        name: 'Packaging Machinery',
        description: 'Fast, repetitive, sequential cycles (Fold → Press → Seal) operating from a single manifold.',
        href: '/industries',
      },
    ],
  },
  
  // ── Related Products ──
  relatedProducts: {
    description: 'Explore our other fluid power units designed for specific industrial applications.',
    items: [
      {
        title: 'Customized Power Packs',
        description: 'Bespoke turnkey fluid power systems engineered specifically for complex OEM machinery.',
        category: 'Hydraulic Power Packs',
        imageSrc: '/images/products/hydraulic-power-packs/customized-hydraulic-power-pack.webp',
        href: '/products/hydraulic-power-packs/customized-hydraulic-power-packs',
        ctaText: 'View Details',
      },
      {
        title: 'Hydraulic Power Pack for Press',
        description: 'Extreme high-pressure cyclic duty power units engineered for industrial metal forming.',
        category: 'Hydraulic Power Packs',
        imageSrc: '/images/products/hydraulic-power-packs/hydraulic-power-pack-for-press.webp',
        href: '/products/hydraulic-power-packs/hydraulic-power-packs-for-press',
        ctaText: 'View Details',
      },
      {
        title: 'Hydraulic Manifold Blocks',
        description: 'Custom CNC-machined blocks that consolidate complex valve logic into a single unit.',
        category: 'Hydraulic Components',
        imageSrc: '/images/products/manifold-blocks/hydraulic-manifold-block.webp',
        href: '/products/manifold-blocks',
        ctaText: 'View Details',
      },
    ],
  },

  productName: 'Multistation Power Packs',

  // ── FAQs ──
  faqs: [
    {
      question: 'Why use one multistation power pack instead of multiple small power packs?',
      answer: 'Centralization drastically reduces maintenance, electrical wiring, and noise. Maintaining one large pump, one set of filters, and one electrical connection is far cheaper and more reliable over 10 years than maintaining five separate standard power packs scattered around a machine.',
    },
    {
      question: 'How many stations can a multistation power pack support?',
      answer: 'Theoretically, infinite. Practically, we regularly build systems supporting anywhere from 2 to 20+ independent stations. The limiting factor is usually the physical size of the manifold block and the peak simultaneous flow demand on the pump.',
    },
    {
      question: 'If two cylinders actuate at once, why does one move faster than the other?',
      answer: 'Fluid takes the path of least resistance. The cylinder pushing the lighter load requires less pressure, so the oil rushes there first. To fix this, our engineers integrate flow dividers or pressure-compensated flow control valves on each station to force simultaneous movement regardless of load.',
    },
    {
      question: 'Can I add another cylinder to my machine later?',
      answer: 'Yes, if planned correctly. We always recommend OEMs design multistation packs with 1 or 2 "spare" stations capped with blanking plates. When you need to expand, simply remove the plate, bolt on a new directional valve, and run hoses to the new cylinder.',
    },
  ],

  // ── Final CTA ──
  cta: {
    title: 'Ready to Centralize Your Fluid Power?',
    description: "Stop scattering poorly integrated standard power packs across your factory floor. Partner with Honeywell Hydraulics to design a centralized, PLC-ready multistation system.",
    primaryCtaText: 'REQUEST MULTISTATION QUOTE',
    primaryCtaHref: '/request-quote/#quote-form',
    secondaryCtaText: 'Call Automation Eng.',
    secondaryCtaHref: 'tel:+919924343873',
  },
};
