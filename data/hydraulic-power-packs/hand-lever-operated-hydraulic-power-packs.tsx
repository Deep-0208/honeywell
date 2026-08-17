import React from 'react';
import { Settings, ShieldCheck, Zap, Wrench, CheckCircle2, Activity, ArrowRight, HandMetal } from 'lucide-react';
import { FaIndustry, FaCogs, FaTractor } from 'react-icons/fa';
import type { ProductPageData } from '@/components/product-page/types';

export const handLeverPowerPackData: ProductPageData = {
  // ── SEO ──
  seo: {
    title: 'Hand Lever Operated Hydraulic Power Pack Manufacturer | Manual Control',
    description: 'India\'s trusted Hand Lever Operated Hydraulic Power Pack Manufacturer. We engineer rugged, manually controlled fluid power systems for workshops and field service.',
    url: '/products/hydraulic-power-packs/hand-lever-operated-hydraulic-power-packs',
    image: '/images/products/hydraulic-power-packs/hand-lever-operated-hydraulic-power-pack.webp',
  },

  // ── Schema ──
  schema: {
    productName: 'Hand Lever Operated Hydraulic Power Packs',
    category: 'Hydraulic Power Packs',
    properties: [
      { name: 'Control Method', value: 'Manual Mechanical Spool Actuation' },
      { name: 'Electrical Dependency', value: 'Zero (For Directional Control)' },
      { name: 'Valve Type', value: 'Monoblock or Sectional Spool Valves' },
      { name: 'Primary Benefit', value: 'Extreme Reliability & Proportional Control' },
    ],
  },

  // ── Hero ──
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products/' },
      { label: 'Hydraulic Power Packs', href: '/products/hydraulic-power-packs/' },
    ],
    currentPage: 'Hand Lever Units',
    subtitle: 'MANUAL HYDRAULIC CONTROL',
    h1: 'Hand Lever Operated Hydraulic Power Pack Manufacturer',
    description: 'Complete mechanical control. Maximum reliability. As a premier Hand Lever Operated Hydraulic Power Pack Manufacturer, Honeywell Hydraulics engineers rugged manual fluid power systems that completely eliminate the need for complex PLCs and electrical solenoids. Designed for harsh environments, heavy-duty workshops, and field service equipment.',
    primaryCta: { label: 'REQUEST MANUAL UNIT QUOTE', href: '/request-quote/#quote-form' },
    secondaryCta: { label: 'TECHNICAL SPECS', href: '#technical-specifications' },
    image: {
      src: '/images/products/hydraulic-power-packs/hand-lever-operated-hydraulic-power-pack.webp',
      alt: 'Hand Lever Operated Hydraulic Power Pack engineered by Honeywell Hydraulics featuring a rugged manual directional control spool valve.',
    },
    keySpecs: [
      { label: 'Control', value: 'Manual Lever' },
      { label: 'Spools', value: '1 to 6+ Sections' },
      { label: 'Precision', value: 'Proportional Feathering' },
      { label: 'Electronics', value: 'Eliminated' },
    ],
  },

  // ── Overview ──
  overview: {
    heading: 'Manual Hydraulic Control Fundamentals',
    content: (
      <div className="space-y-6">
        <p>
          Before discussing the power pack itself, we must understand the core of its operation: the manual directional control valve. While the electric motor still spins the pump to generate fluid flow, the actual control of the <a href="/products/hydraulic-cylinders/" className="text-honeywell-red font-semibold hover:underline">Hydraulic Cylinders</a> is purely mechanical. Instead of relying on a computer to send an electrical signal to a magnetic solenoid, an operator physically pulls or pushes a steel lever to direct the oil.
        </p>
        <p>
          The hand lever is mechanically linked to an internal steel cylinder called a "spool." When the operator pulls the lever, they are physically sliding the spool inside the valve body. This movement uncovers drilled ports, allowing pressurized oil to flow to either the extend or retract port of the cylinder.
        </p>
        <p>
          By "feathering" the lever (moving it slowly), an experienced operator can precisely control the speed of the cylinder—a highly sought-after feature that is extremely expensive to replicate electronically.
        </p>

        {/* Typical System Configuration Flow */}
        <div className="mt-10 bg-brand-lightSurface p-8 rounded-xl border border-slate-200">
          <h3 className="text-xl font-display font-bold text-honeywell-navy mb-6">Typical Manual Configuration Flow</h3>
          <p className="text-sm text-brand-steelGray mb-6">How mechanical actuation routes fluid power without electronics:</p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-brand-darkSlate">
            <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200">Electric Motor</span>
            <ArrowRight className="w-4 h-4 text-honeywell-red" />
            <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200">Hydraulic Pump</span>
            <ArrowRight className="w-4 h-4 text-honeywell-red" />
            <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200 text-honeywell-red border-honeywell-red">Hand Lever Valve</span>
            
            <div className="flex flex-col gap-2 mx-4 text-xs font-normal">
              <div className="flex items-center gap-2 bg-blue-50 px-2 py-1 rounded">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span> Push = Extend
              </div>
              <div className="flex items-center gap-2 bg-gray-50 px-2 py-1 rounded">
                <span className="w-2 h-2 rounded-full bg-gray-500"></span> Release = Neutral
              </div>
              <div className="flex items-center gap-2 bg-red-50 px-2 py-1 rounded">
                <span className="w-2 h-2 rounded-full bg-red-500"></span> Pull = Retract
              </div>
            </div>

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
            Always position the hand lever valve block within a comfortable ergonomic operating range for the machine operator. However, ensure that the high-pressure hydraulic hoses exiting the valve are physically shielded from the operator's body and protected from accidental abrasive contact during lever actuation.
          </p>
        </div>
      </div>
    ),
  },

  // ── Key Features ──
  keyFeatures: {
    heading: 'Core Engineering Advantages',
    description: 'Why choose a manual lever over a modern electrical solenoid? Extreme reliability and physical operator control.',
    showStepNumbers: false,
    items: [
      {
        icon: <HandMetal className="w-6 h-6" />,
        title: 'Proportional "Feathering"',
        description: 'Operators can control the exact speed of the cylinder simply by varying how far they pull the lever. Vital for delicate pressing operations.',
      },
      {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: 'Immune to Electrical Failure',
        description: 'With no solenoids, coils, or PLCs required for directional control, these systems cannot be shut down by blown fuses or voltage spikes.',
      },
      {
        icon: <Wrench className="w-6 h-6" />,
        title: 'Field Serviceability',
        description: 'Mechanically dead-simple. If a manual valve seal degrades, a mechanic can rebuild it in the dirt with standard wrenches.',
      },
      {
        icon: <CheckCircle2 className="w-6 h-6" />,
        title: 'Spring-Return Safety',
        description: 'Engineered so the lever instantly snaps back to neutral the millisecond the operator releases it, dumping fluid to tank and stopping the machine.',
      },
    ],
  },

  // ── Technical Specs ──
  technicalSpecs: {
    heading: 'Manual System Parameters',
    description: 'We engineer robust mechanical power units designed to survive the harshest industrial conditions.',
    primaryCta: { label: 'VIEW ALL POWER PACKS', href: '/products/hydraulic-power-packs/' },
    secondaryCta: { label: 'CONTACT ENGINEERING', href: '/contact-us/' },
    tableTitle: 'Valve & Control Specifications',
    rows: [
      { parameter: 'Valve Construction', value: 'Cast Iron Monoblock or Sectional Slices' },
      { parameter: 'Spool Mechanics', value: 'Spring-Return to Neutral or Detent-Locking' },
      { parameter: 'Center Configuration', value: 'Open Center (Tandem) or Closed Center' },
      { parameter: 'Speed Control', value: 'Infinite (Manual proportional feathering)' },
      { parameter: 'Linkage Bearings', value: 'Heavy-duty greasable pivot pins' },
      { parameter: 'Expandability', value: 'Sectional valves allow adding extra levers later' },
      { parameter: 'Safety Interface', value: 'Direct physical tactile feedback to operator' },
      { parameter: 'Environmental Rating', value: 'Immune to dust, moisture, and EMI/RFI' },
    ],
  },

  // ── Manufacturing ──
  manufacturing: {
    heading: 'Manufacturing: Mechanical Valve Assembly',
    description: 'Building a manual power pack focuses on mechanical linkage integrity and leak-free valve stacking.',
    steps: [
      {
        icon: <Settings className="w-6 h-6" />,
        title: 'Monoblock vs Sectional Torquing',
        description: 'We assemble either Monoblocks (zero leakage cast iron) or Sectional valves (limitless expansion). We torque sectional assemblies to exact factory specs to prevent spool binding.',
      },
      {
        icon: <Wrench className="w-6 h-6" />,
        title: 'Lever Mechanism Linkage',
        description: 'We install heavy-duty steel levers with ergonomic grips, ensuring linkage pivot points are perfectly aligned. We meticulously adjust spring-return mechanisms for instant snap-back.',
      },
      {
        icon: <Activity className="w-6 h-6" />,
        title: 'High-Pressure Hose Routing',
        description: 'We utilize 90-degree swept fittings to direct high-pressure lines away from the operator\'s hands, ensuring full range of motion without pinching hoses.',
      },
      {
        icon: <CheckCircle2 className="w-6 h-6" />,
        title: 'Functional Ergonomic FAT',
        description: 'During FAT, we physically actuate every lever under full hydraulic load to verify "handle effort" (force required to shift). Poorly machined spools cause dangerous handle effort under pressure.',
      },
    ],
    midCta: {
      heading: 'Tired of Replacing Solenoids?',
      description: 'Strip the complex electronics off your aging machinery and replace them with a simple Hand Lever Power Pack.',
      primaryCta: { label: 'DISCUSS RETROFITTING', href: '/request-quote/#quote-form' },
      whatsappLabel: 'WhatsApp Engineering',
    },
  },

  // ── Engineering / How to Choose ──
  engineering: {
    heading: 'Engineering Guide: Selecting a Hand Lever Unit',
    description: 'How to select the right mechanical valve for your specific machine operator.',
    items: [
      {
        label: 'A',
        title: 'Typical Design Inputs (Prerequisites)',
        description: '1. Number of cylinders 2. Stroke length & required force 3. Valve functions (simultaneous vs single operation) 4. Lever positions (Spring vs Detent) 5. Operator location.',
      },
      {
        label: 'B',
        title: 'Selection Checklist',
        description: 'Verify: Number of valve functions (spools), required operating pressure, flow capacity, operator accessibility, mounting orientation, and safety requirements.',
      },
      {
        label: 'C',
        title: 'Feathering vs Bang-Bang',
        description: 'Unlike solenoids that are 100% open or closed, hand levers allow "proportional control." Pulling the lever just a few millimeters moves the cylinder at a crawl for delicate straightening operations.',
      },
      {
        label: 'D',
        title: 'Maintenance Snapshot',
        description: 'DAILY: Check for external weeping, lever stiffness. WEEKLY: Grease linkage pivots. MONTHLY: Check filter restriction. QUARTERLY: Test relief valve, inspect spool seals for internal bypassing.',
      },
    ],
  },

  // ── Comparisons ──
  comparisons: [
    {
      heading: 'Hand Lever vs. Solenoid Operated Power Pack',
      description: 'Why reverting to mechanical control is often the smartest upgrade for aging industrial machinery.',
      columns: [{ heading: 'Hand Lever Power Pack' }, { heading: 'Solenoid Power Pack' }],
      rows: [
        { feature: 'Control Method', values: [{ text: 'Mechanical (Physical pulling of a spool)', highlight: true }, { text: 'Electrical (Magnetic coil shifts spool)' }] },
        { feature: 'Operator Involvement', values: [{ text: 'High (Requires physical presence at valve)', highlight: true }, { text: 'Low (Can be controlled via remote/PLC)' }] },
        { feature: 'Automation Capability', values: [{ text: 'Zero (Cannot be tied to a computer)' }, { text: 'High (Easily integrated into SCADA/PLC)', highlight: true }] },
        { feature: 'Reliability (Harsh Env.)', values: [{ text: 'Extreme (Immune to dust/water/spikes)', highlight: true }, { text: 'Moderate (Solenoid coils can burn out)' }] },
        { feature: 'Maintenance', values: [{ text: 'Very Simple (Wrenches and seals)', highlight: true }, { text: 'Complex (Requires multimeters and wiring)' }] },
        { feature: 'Installation', values: [{ text: 'Simple (Just plug in motor, run hoses)', highlight: true }, { text: 'Complex (Requires electrical control panels)' }] },
        { feature: 'Electrical Dependency', values: [{ text: 'None (For the directional control)', highlight: true }, { text: '100% Dependent' }] },
        { feature: 'Initial Cost', values: [{ text: 'Highly Cost-Effective', highlight: true }, { text: 'Expensive (Requires relays, wiring, PLCs)' }] },
        { feature: 'Troubleshooting', values: [{ text: 'Visual (If lever moves, valve shifts)', highlight: true }, { text: 'Invisible (Must test electrical voltage)' }] },
        { feature: 'Response Time', values: [{ text: 'Depends on operator speed' }, { text: 'Milliseconds', highlight: true }] },
        { feature: 'Field Repair', values: [{ text: 'Easy (Can be rebuilt in the dirt)', highlight: true }, { text: 'Difficult (Requires clean electrical parts)' }] },
        { feature: 'Industrial Suitability', values: [{ text: 'Workshops, Ag machinery, Simple presses', highlight: true }, { text: 'CNC machines, Assembly lines, Automation' }] },
      ],
    }
  ],

  // ── Common Applications ──
  industries: {
    heading: 'Common Manual Applications',
    description: 'Manual power packs are deployed when extreme reliability and direct physical operator control are paramount.',
    items: [
      {
        icon: <FaIndustry className="w-6 h-6" />,
        name: 'Hydraulic Workshop Presses',
        description: 'Operator can "feel" the pressure and precisely feather the pressing speed during delicate operations.',
        href: '#',
      },
      {
        icon: <FaTractor className="w-6 h-6" />,
        name: 'Agricultural Implements',
        description: 'Rugged, weather-proof operation without relying on fragile electrical sensors or wiring harnesses.',
        href: '#',
      },
      {
        icon: <FaCogs className="w-6 h-6" />,
        name: 'Heavy Machinery Maintenance',
        description: 'Easy field servicing. If a manual valve breaks, a mechanic can fix it with a wrench, no laptop required.',
        href: '#',
      },
    ],
  },
  
  // ── Related Products ──
  relatedProducts: {
    description: 'Explore our other fluid power units designed for specific operational environments.',
    items: [
      {
        title: 'Single Phase Power Packs',
        description: 'Compact hydraulic power units designed to operate entirely on standard 220V household electricity.',
        category: 'Hydraulic Power Packs',
        imageSrc: '/images/products/hydraulic-power-packs/single-phase-hydraulic-power-pack.webp',
        href: '/products/hydraulic-power-packs/single-phase-hydraulic-power-packs/',
        ctaText: 'View Details',
      },
      {
        title: 'Customized Power Packs',
        description: 'Bespoke turnkey fluid power systems engineered specifically for complex OEM machinery.',
        category: 'Hydraulic Power Packs',
        imageSrc: '/images/products/hydraulic-power-packs/customized-hydraulic-power-pack.webp',
        href: '/products/hydraulic-power-packs/customized-hydraulic-power-packs/',
        ctaText: 'View Details',
      },
      {
        title: 'Hydraulic Cylinders',
        description: 'Heavy-duty actuators that pair perfectly with our manual directional control valves.',
        category: 'Hydraulic Components',
        imageSrc: '/images/products/cylinders/tie-rod-hydraulic-cylinder.webp',
        href: '/products/hydraulic-cylinders/',
        ctaText: 'View Details',
      },
    ],
  },

  productName: 'Hand Lever Power Packs',

  // ── FAQs ──
  faqs: [
    {
      question: 'Why choose a manual hand lever over electrical control?',
      answer: 'Simplicity and cost. A hand lever valve will never suffer from a burnt-out coil, a blown fuse, or a PLC programming error. For basic machinery, manual control is significantly cheaper to buy and infinitely easier to maintain in the field.',
    },
    {
      question: 'Can I control the speed of the cylinder with a hand lever?',
      answer: 'Yes. This is one of the greatest advantages of manual control. By "feathering" (partially pulling) the lever, you restrict the oil flow, allowing you to move the cylinder at a fraction of its normal speed for delicate positioning.',
    },
    {
      question: 'What happens if the operator lets go of the lever while the machine is running?',
      answer: 'If we engineer the valve with a "Spring-Return to Neutral" mechanism (which we do for 90% of our units), the lever instantly snaps back to the center position the millisecond the operator releases it. This immediately dumps the oil to the tank and stops the cylinder, acting as a built-in safety feature.',
    },
    {
      question: 'Can a manual power pack run multiple cylinders?',
      answer: 'Absolutely. We can stack multiple valve "slices" together (Sectional Valves) or use a multi-spool Monoblock. We regularly build units with 2, 3, or even 6 independent hand levers mounted in a single bank to control multiple functions on a single machine.',
    },
  ],

  // ── Final CTA ──
  cta: {
    title: 'Tired of Replacing Burnt Solenoids?',
    description: "Stop battling electrical failures on simple machinery. Partner with Honeywell Hydraulics to build a rugged, purely mechanical Hand Lever Power Pack that your operators can rely on for decades.",
    primaryCtaText: 'REQUEST MANUAL UNIT QUOTE',
    primaryCtaHref: '/request-quote/#quote-form',
    secondaryCtaText: 'Call Engineering',
    secondaryCtaHref: 'tel:+919924343873',
  },
};
