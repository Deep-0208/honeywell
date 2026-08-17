import React from 'react';
import { Settings, ShieldCheck, Zap, BatteryCharging, Wrench, CheckCircle2, Activity, ArrowRight } from 'lucide-react';
import { FaIndustry, FaCogs, FaTractor } from 'react-icons/fa';
import type { ProductPageData } from '@/components/product-page/types';

export const accumulatorPowerPackData: ProductPageData = {
  // ── SEO ──
  seo: {
    title: 'Accumulator Hydraulic Power Pack Manufacturer | Energy Storage',
    description: 'Leading Accumulator Hydraulic Power Pack Manufacturer in India. We engineer nitrogen-charged fluid power systems for peak flow assistance and pressure stabilization.',
    url: '/products/hydraulic-power-packs/accumulator-hydraulic-power-packs',
    image: '/images/products/hydraulic-power-packs/accumulator-hydraulic-power-pack.webp',
  },

  // ── Schema ──
  schema: {
    productName: 'Accumulator Hydraulic Power Packs',
    category: 'Hydraulic Power Packs',
    properties: [
      { name: 'Core Function', value: 'Stored Energy & Peak Flow Assistance' },
      { name: 'Energy Storage Medium', value: 'Nitrogen Gas (Compressible)' },
      { name: 'Safety Integration', value: 'TÜV-Certified Dump Valve Blocks' },
      { name: 'Primary Benefit', value: 'Allows massive reduction in pump HP' },
    ],
  },

  // ── Hero ──
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products/' },
      { label: 'Hydraulic Power Packs', href: '/products/hydraulic-power-packs/' },
    ],
    currentPage: 'Accumulator Units',
    subtitle: 'STORED HYDRAULIC ENERGY',
    h1: 'Accumulator Hydraulic Power Pack Manufacturer',
    description: 'Instant peak flow and relentless pressure stability. As India\'s leading Accumulator Hydraulic Power Pack Manufacturer, Honeywell Hydraulics engineers advanced fluid power systems integrated with nitrogen-charged accumulators. Designed for applications requiring sudden bursts of extreme flow, prolonged pressure holding without pump engagement, or critical emergency shutdown operations.',
    primaryCta: { label: 'REQUEST ACCUMULATOR QUOTE', href: '/request-quote/#quote-form' },
    secondaryCta: { label: 'TECHNICAL SPECS', href: '#technical-specifications' },
    image: {
      src: '/images/products/hydraulic-power-packs/accumulator-hydraulic-power-pack.webp',
      alt: 'Hydraulic Power Pack engineered by Honeywell Hydraulics featuring a nitrogen-charged bladder accumulator and safety charging valve block.',
    },
    keySpecs: [
      { label: 'Energy', value: 'Nitrogen Stored' },
      { label: 'Flow', value: 'Instant Peak Delivery' },
      { label: 'Holding', value: 'Zero Pump Load' },
      { label: 'Safety', value: 'Auto-Dump Blocks' },
    ],
  },

  // ── Overview ──
  overview: {
    heading: 'Hydraulic Accumulator Fundamentals',
    content: (
      <div className="space-y-6">
        <p>
          Before exploring the power pack, it is critical to understand the physics of the accumulator itself. Because hydraulic fluid (oil) is fundamentally incompressible, it cannot store energy. A <strong>Hydraulic Accumulator</strong> solves this by utilizing a highly compressible gas—almost universally Nitrogen—to absorb and store hydraulic pressure.
        </p>
        <p>
          Inside a steel pressure vessel, a flexible bladder separates the nitrogen gas from the oil. When the pump forces oil into the accumulator, the nitrogen gas compresses, storing kinetic energy like a tightly coiled spring. When the machine demands sudden flow, the compressed nitrogen violently expands, instantly pushing the stored oil back into the circuit.
        </p>
        <p>
          An <strong className="text-honeywell-navy">Accumulator Hydraulic Power Pack</strong> integrates these pressure vessels directly into the hydraulic unit's <a href="/products/manifold-blocks/" className="text-honeywell-red font-semibold hover:underline">Manifold Block</a>. The pump's primary job becomes "charging" the accumulator during idle times. When sudden, massive flow is demanded, the accumulator discharges instantly, providing flow rates far exceeding the pump's physical capacity.
        </p>

        {/* Typical System Configuration Flow */}
        <div className="mt-10 bg-brand-lightSurface p-8 rounded-xl border border-slate-200">
          <h3 className="text-xl font-display font-bold text-honeywell-navy mb-6">Typical Accumulator Configuration Flow</h3>
          <p className="text-sm text-brand-steelGray mb-6">To safely store and release massive hydraulic energy, the circuit requires strict safety logic:</p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-brand-darkSlate">
            <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200">Electric Motor</span>
            <ArrowRight className="w-4 h-4 text-honeywell-red" />
            <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200">Hydraulic Pump</span>
            <ArrowRight className="w-4 h-4 text-honeywell-red" />
            <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200 text-honeywell-red border-honeywell-red">Safety Charging Block</span>
            <ArrowRight className="w-4 h-4 text-honeywell-red" />
            <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200 bg-blue-50">Nitrogen Accumulator</span>
            <ArrowRight className="w-4 h-4 text-honeywell-red" />
            <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200">Main Manifold</span>
            <ArrowRight className="w-4 h-4 text-honeywell-red" />
            <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200">Hydraulic Cylinder</span>
          </div>
        </div>

        {/* Engineering Tip */}
        <div className="mt-8 bg-honeywell-navy text-white p-6 rounded-lg border-l-4 border-honeywell-red shadow-md">
          <div className="flex items-center gap-3 mb-2">
            <Zap className="w-6 h-6 text-honeywell-red" />
            <h4 className="text-lg font-bold">Engineering Tip</h4>
          </div>
          <p className="text-slate-200 italic leading-relaxed">
            Nitrogen pre-charge pressure should always be determined strictly according to the intended operating pressure range and ambient temperature. A generic rule is pre-charging to 90% of the minimum working pressure. Incorrect pre-charge completely negates the accumulator's effectiveness and rapidly destroys the internal bladder.
          </p>
        </div>
      </div>
    ),
  },

  // ── Key Features ──
  keyFeatures: {
    heading: 'Core Engineering Advantages',
    description: 'Why do OEMs specify an accumulator rather than just buying a bigger pump? Efficiency and speed.',
    showStepNumbers: false,
    items: [
      {
        icon: <BatteryCharging className="w-6 h-6" />,
        title: 'Instant Peak Flow Assistance',
        description: 'Delivers instantaneous flow rates 10x higher than the pump capacity. Perfect for ultra-rapid injection molding or press closing cycles.',
      },
      {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: 'Emergency Safety Operation',
        description: 'Stores enough fluid power to safely actuate cylinders and execute emergency shutdowns even if the factory loses all electrical power.',
      },
      {
        icon: <Activity className="w-6 h-6" />,
        title: 'Pump Horsepower Reduction',
        description: 'A 5HP pump can do the work of a 50HP pump by slowly charging the accumulator over 20 seconds for a massive 2-second discharge.',
      },
      {
        icon: <Wrench className="w-6 h-6" />,
        title: 'Shock & Pulsation Damping',
        description: 'Absorbs destructive "water hammer" shock waves when massive directional valves slam shut, protecting your pipe fittings from rupturing.',
      },
    ],
  },

  // ── Technical Specs ──
  technicalSpecs: {
    heading: 'Accumulator System Parameters',
    description: 'We engineer complex stored-energy systems with rigorous safety integrations.',
    primaryCta: { label: 'VIEW MULTISTATION UNITS', href: '/products/hydraulic-power-packs/multistation-hydraulic-power-packs/' },
    secondaryCta: { label: 'CONTACT ENGINEERING', href: '/contact-us/' },
    tableTitle: 'Pressure Vessel Specifications',
    rows: [
      { parameter: 'Accumulator Types', value: 'Bladder (Rapid response) / Piston (High volume)' },
      { parameter: 'Gas Charge Medium', value: '99.9% Pure Dry Nitrogen Gas (Inert)' },
      { parameter: 'Safety Block Integration', value: 'TÜV Certified Auto-Dump & Isolation Valves' },
      { parameter: 'Pump Sizing Method', value: 'Based on average flow, not peak flow' },
      { parameter: 'Mounting Dynamics', value: 'Heavy-duty vibration isolated steel banding' },
      { parameter: 'Energy Efficiency', value: 'Allows pump unloading during pressure holding' },
      { parameter: 'Emergency Capability', value: 'Configurable strokes post power-failure' },
      { parameter: 'Testing', value: 'Cycle discharge FAT & Nitrogen Permeation Testing' },
    ],
  },

  // ── Manufacturing ──
  manufacturing: {
    heading: 'Manufacturing: Pressure Vessel Expertise',
    description: 'Integrating high-pressure gas with fluid requires uncompromising manufacturing safety standards.',
    steps: [
      {
        icon: <Wrench className="w-6 h-6" />,
        title: 'Isolated Recoil Mounting',
        description: 'When an accumulator discharges, it recoils violently. We fabricate heavy-duty, isolated steel mounting brackets with rubber straps to prevent the vessel from fracturing manifold threads.',
      },
      {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: 'Safety Charging Block Installation',
        description: 'We never install an accumulator without a safety block containing an isolation valve and a dump valve, ensuring stored energy bleeds to tank when power shuts off.',
      },
      {
        icon: <Settings className="w-6 h-6" />,
        title: 'Nitrogen Charging & Pre-charge',
        description: 'Prior to FAT, technicians charge the bladder with 99.9% pure Nitrogen using precise charging kits, calculating the exact pressure ratio needed for your specific minimum operating pressure.',
      },
      {
        icon: <CheckCircle2 className="w-6 h-6" />,
        title: 'Discharge Cycle FAT',
        description: 'We measure the recharge time and the discharge pressure drop using digital oscilloscopes to guarantee the system maintains required pressure during the peak flow event.',
      },
    ],
    midCta: {
      heading: 'Oversizing Your Pumps for Peak Flow?',
      description: 'Stop wasting electrical energy. We engineer accumulator systems that allow tiny pumps to deliver massive momentary power.',
      primaryCta: { label: 'DISCUSS ACCUMULATOR SIZING', href: '/request-quote/#quote-form' },
      whatsappLabel: 'WhatsApp Engineering',
    },
  },

  // ── Engineering / How to Choose ──
  engineering: {
    heading: 'Engineering Guide: Selecting an Accumulator Unit',
    description: 'Sizing an accumulator incorrectly is worse than not having one at all.',
    items: [
      {
        label: 'A',
        title: 'Typical Design Inputs (Prerequisites)',
        description: '1. Min/Max Operating Pressure Range 2. Peak Flow Requirement 3. Normal Flow Requirement 4. Cycle Frequency (time allowed to recharge) 5. Required Stored Energy (for emergency operation).',
      },
      {
        label: 'B',
        title: 'Selection Checklist',
        description: 'Verify: Required system pressure, peak flow demand vs pump capacity, required nitrogen pre-charge pressure, emergency operation needs, and pressure fluctuation limits.',
      },
      {
        label: 'C',
        title: 'Sizing for Peak Flow Assistance',
        description: 'If a machine requires 100 LPM for 2 seconds, but 10 LPM for 20 seconds, a 100 LPM pump wastes energy. We install a 15 LPM pump to slowly fill an accumulator, which then instantly discharges to meet the 100 LPM demand.',
      },
      {
        label: 'D',
        title: 'Maintenance Snapshot',
        description: 'DAILY: Verify main gauge, check for safety block leaks. WEEKLY: Inspect mounting brackets for vibration shifting. MONTHLY: Verify nitrogen pre-charge using a charging kit. QUARTERLY: Rigorously test the automatic dump/safety valve.',
      },
    ],
  },

  // ── Comparisons ──
  comparisons: [
    {
      heading: 'Accumulator vs. Standard Power Pack',
      description: 'Why relying purely on a pump for peak flow wastes massive amounts of electrical energy.',
      columns: [{ heading: 'Accumulator Power Pack' }, { heading: 'Standard Power Pack' }],
      rows: [
        { feature: 'Stored Energy', values: [{ text: 'High (Nitrogen gas acts as a spring)', highlight: true }, { text: 'Zero (Fluid cannot be compressed)' }] },
        { feature: 'Pressure Stability', values: [{ text: 'Absolute (Compensates for micro-leaks)', highlight: true }, { text: 'Drops immediately if pump turns off' }] },
        { feature: 'Peak Flow Capability', values: [{ text: 'Massive (Can deliver 10x pump capacity)', highlight: true }, { text: 'Limited strictly to pump\'s max LPM' }] },
        { feature: 'Emergency Operation', values: [{ text: 'Yes (Can cycle cylinders with power off)', highlight: true }, { text: 'No (Fails instantly on power loss)' }] },
        { feature: 'Energy Efficiency', values: [{ text: 'Extremely High (Pump unloads during holding)', highlight: true }, { text: 'Low (Pump must run constantly)' }] },
        { feature: 'Shock Absorption', values: [{ text: 'Absorbs violent hydraulic hammering', highlight: true }, { text: 'Takes full damage from shock waves' }] },
        { feature: 'Pulsation Damping', values: [{ text: 'Smooths out gear/piston pump ripples', highlight: true }, { text: 'Transfers all vibration to machine' }] },
        { feature: 'Pump Loading', values: [{ text: 'Low (Allows for significantly smaller pumps)', highlight: true }, { text: 'High (Requires oversized pumps)' }] },
        { feature: 'Heat Generation', values: [{ text: 'Very Low (Reduces fluid friction time)', highlight: true }, { text: 'High (Constant flow over relief valves)' }] },
        { feature: 'System Response', values: [{ text: 'Instantaneous (Milliseconds)', highlight: true }, { text: 'Delayed (Pump must build pressure)' }] },
        { feature: 'Maintenance', values: [{ text: 'Requires monthly nitrogen checks', highlight: true }, { text: 'Standard fluid/filter checks' }] },
        { feature: 'Industrial Suitability', values: [{ text: 'Injection Molding, Presses, Safety Systems', highlight: true }, { text: 'Basic continuous-flow applications' }] },
      ],
    }
  ],

  // ── Common Applications (Renamed from Industries) ──
  industries: {
    heading: 'Common Accumulator Applications',
    description: 'Accumulators are deployed when machines demand flow rates that far exceed normal pump capacities.',
    items: [
      {
        icon: <FaIndustry className="w-6 h-6" />,
        name: 'Hydraulic Presses',
        description: 'Maintains absolute holding pressure for hours without the pump running, preventing oil heating.',
        href: '#',
      },
      {
        icon: <FaCogs className="w-6 h-6" />,
        name: 'Injection Molding',
        description: 'Supplies sudden, massive peak flow for ultra-rapid mold closing, drastically reducing cycle times.',
        href: '#',
      },
      {
        icon: <FaTractor className="w-6 h-6" />,
        name: 'Mobile Hydraulics & Safety',
        description: 'Provides emergency steering or braking operation if the primary engine completely fails.',
        href: '#',
      },
    ],
  },
  
  // ── Related Products ──
  relatedProducts: {
    description: 'Explore our other fluid power units designed for specific industrial applications.',
    items: [
      {
        title: 'Hydraulic Power Pack for Press',
        description: 'Extreme high-pressure cyclic duty power units engineered for industrial metal forming.',
        category: 'Hydraulic Power Packs',
        imageSrc: '/images/products/hydraulic-power-packs/hydraulic-power-pack-for-press.webp',
        href: '/products/hydraulic-power-packs/hydraulic-power-packs-for-press/',
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

  productName: 'Accumulator Power Packs',

  // ── FAQs ──
  faqs: [
    {
      question: 'Why use nitrogen instead of standard compressed air?',
      answer: 'Compressed air contains oxygen and moisture. When mixed with highly pressurized hydraulic oil, oxygen creates an explosive diesel-effect risk. Moisture causes internal rusting. Nitrogen is an inert, dry gas that completely eliminates explosive risks and corrosion.',
    },
    {
      question: 'How often does an accumulator need to be recharged?',
      answer: 'While high-quality bladders are relatively impermeable, minor gas permeation occurs over time. We recommend verifying the nitrogen pre-charge pressure every month, and fully recharging if it drops below 5% of the engineered target.',
    },
    {
      question: 'What happens if the accumulator bladder ruptures?',
      answer: 'If the bladder tears, nitrogen gas enters the hydraulic circuit, causing severe pump cavitation, spongy cylinder movement, and foam in the reservoir. The accumulator will instantly lose its ability to store energy. The machine must be shut down, the gas bled via the safety block, and the bladder replaced.',
    },
    {
      question: 'Can an accumulator power pack save electricity?',
      answer: 'Yes, dramatically. By sizing the pump for the average flow rather than the peak flow, you can often utilize a 10HP electric motor instead of a 40HP motor. Furthermore, during long pressure-holding cycles, the pump can be completely turned off while the accumulator maintains the clamping force.',
    },
  ],

  // ── Final CTA ──
  cta: {
    title: 'Ready to Store Hydraulic Energy?',
    description: "Do not oversize your pumps and waste massive electrical energy. Partner with Honeywell Hydraulics to engineer an accumulator-assisted power pack that delivers violent peak flow and unparalleled efficiency.",
    primaryCtaText: 'REQUEST ACCUMULATOR QUOTE',
    primaryCtaHref: '/request-quote/#quote-form',
    secondaryCtaText: 'Call Engineering',
    secondaryCtaHref: 'tel:+919924343873',
  },
};
