import React from 'react';
import {
  Activity,
  Thermometer,
  Zap,
  CheckCircle2,
  Settings,
  Cog,
  Droplets,
  Truck,
  Hammer,
} from 'lucide-react';
import type { ProductPageData } from '@/components/product-page/types';

export const threePhasePowerPackData: ProductPageData = {
  seo: {
    title: '3 Phase Hydraulic Power Pack Manufacturer | Honeywell',
    description: 'Leading 3 phase hydraulic power pack manufacturer. We engineer continuous-duty industrial AC power units for factory automation and heavy manufacturing.',
    url: '/products/hydraulic-power-packs/3-phase-hydraulic-power-packs',
    image: '/images/products/hydraulic-power-packs/hydraulic-power-pack-3-phase.webp',
  },
  schema: {
    productName: '3 Phase Hydraulic Power Packs',
    category: 'Hydraulic Power Packs',
    properties: [
      { name: 'Duty Cycle', value: '100% Continuous' },
      { name: 'Motor Input', value: '3-Phase AC (415V/440V)' },
      { name: 'Efficiency', value: 'IE2 / IE3 / IE4' }
    ]
  },
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products/' },
      { label: 'Hydraulic Power Packs', href: '/products/hydraulic-power-packs/' },
    ],
    currentPage: '3 Phase Power Packs',
    subtitle: '3 Phase Hydraulic Power Packs',
    h1: '3 Phase Hydraulic Power Pack Manufacturer',
    description: 'Unyielding, continuous fluid power for automated factories. Honeywell Hydraulics is a premier 3 phase hydraulic power pack manufacturer in Gujarat, engineering heavy-duty, industrial AC power units for manufacturing plants running 24/7. Designed specifically to leverage three-phase grid electricity, our systems provide the absolute thermal stability, electrical efficiency, and mechanical reliability required to power your critical production line machinery without interruption.',
    image: {
      src: '/images/products/3-phase-hydraulic-power-pack-manufacturer.webp',
      alt: '3 Phase Hydraulic Power Pack Manufacturer in Ahmedabad - Continuous duty AC power unit by Honeywell Hydraulics',
    },
    primaryCta: { label: 'DOWNLOAD AC SPECS', href: '#' },
    secondaryCta: { label: 'VIEW TECHNICAL SPECS', href: '#technical-specifications' },
    keySpecs: [
      { label: 'Duty Cycle', value: '100% Continuous' },
      { label: 'Motor Input', value: '3-Phase AC (415V/440V)' },
      { label: 'Efficiency', value: 'IE2 / IE3 / IE4' },
      { label: 'Applications', value: 'Heavy Automation' },
    ],
  },
  overview: {
    heading: 'What Is A 3 Phase Hydraulic Power Pack?',
    content: (
      <>
        <p>
          In heavy manufacturing and automated production environments, fluid power must be generated constantly and reliably.
        </p>
        <p>
          A <strong className="text-honeywell-navy">3 Phase Hydraulic Power Pack</strong> is the standard industrial workhorse. Unlike DC mini power packs used on mobile battery-operated equipment, or standard single-phase units used in light commercial garages, a 3-phase unit is designed to wire directly into a factory&apos;s 415V/440V alternating current (AC) electrical grid.
        </p>
        <p>
          As a leading <strong>industrial hydraulic power pack supplier</strong>, we construct these units around robust, high-efficiency 3-phase electric motors. This multi-phase electrical input allows the motor to generate massive, smooth rotational torque to drive heavy-displacement hydraulic pumps continuously for thousands of hours without overheating, stalling, or suffering from the extreme electrical phase imbalances common in single-phase systems.
        </p>
      </>
    ),
  },
  keyFeatures: {
    heading: 'Why Industrial Plants Prefer 3 Phase Systems',
    description: 'Plant engineers and automation integrators exclusively specify 3-phase hydraulic power units for continuous-duty manufacturing for several critical physics-based reasons:',
    items: [
      {
        icon: <Activity className="w-6 h-6" />,
        title: 'A. Stable Power Delivery',
        description: 'A 3-phase electrical supply provides three alternating currents that peak at sequential times. This means power delivery to the hydraulic pump is constant and smooth, unlike single-phase motors which experience "dead spots" in torque. This smooth torque prevents hydraulic pulsation and ensures stable pressure output to your machine.',
      },
      {
        icon: <Thermometer className="w-6 h-6" />,
        title: 'B. Continuous Operation & Thermal Stability',
        description: 'Because 3-phase motors run much cooler than equivalent single-phase motors, they are capable of a 100% duty cycle. A 3-phase hydraulic power pack can run 24 hours a day, 365 days a year without the motor burning out, making them mandatory for continuous-process industries.',
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: 'C. Superior Motor Efficiency',
        description: '3-phase motors do not require failure-prone start capacitors or run capacitors. They draw significantly lower amperage per phase compared to single-phase motors of the same horsepower, resulting in massive long-term reductions in the factory\'s electricity consumption.',
      },
      {
        icon: <CheckCircle2 className="w-6 h-6" />,
        title: 'D. Lower Operating Cost',
        description: 'The initial capital investment in a 3-phase motor is often lower than a massive single-phase motor, and the electrical infrastructure required (smaller wire gauges, smaller breakers) is much cheaper to install. Combined with the energy savings, the Total Cost of Ownership (TCO) is incredibly low.',
      },
    ],
  },
  comparisons: [
    {
      heading: '3 Phase vs. Single Phase Power Packs',
      description: 'Understanding when to specify a 3-phase unit versus a standard single-phase unit is critical for plant electrical planning.',
      columns: [{ heading: 'Feature' }, { heading: '3 Phase Hydraulic Power Packs' }, { heading: 'Single Phase Hydraulic Power Packs' }],
      rows: [
        { feature: 'Electrical Input', values: [{ text: '415V / 440V (Three alternating currents)', highlight: true }, { text: '220V / 240V (Single alternating current)' }] },
        { feature: 'Duty Cycle', values: [{ text: 'Continuous (100% Duty Cycle)' }, { text: 'Intermittent (Prone to overheating if run constantly)' }] },
        { feature: 'Horsepower Limits', values: [{ text: 'Virtually unlimited (Fractional up to 200+ HP)' }, { text: 'Practically limited to 5 HP (due to extreme amp draw)' }] },
        { feature: 'Motor Components', values: [{ text: 'Simple, highly reliable (No capacitors/centrifugal switches)' }, { text: 'Complex (Requires start/run capacitors that frequently fail)' }] },
        { feature: 'Operating Torque', values: [{ text: 'Smooth, continuous torque delivery' }, { text: 'Pulsating torque' }] },
        { feature: 'Primary Application', values: [{ text: 'Factory automation, heavy manufacturing, continuous processing' }, { text: 'Home garages, light commercial lifts, remote single-phase grids' }] },
      ],
    }
  ],
  technicalSpecs: {
    heading: 'Technical Specifications Framework',
    description: 'Our 3-phase industrial power packs are engineered for absolute fluid consistency and thermal stability in continuous manufacturing.',
    tableTitle: 'Standard Capabilities',
    primaryCta: { label: 'REQUEST SPECS', href: '#' },
    secondaryCta: { label: 'VIEW MORE', href: '#' },
    rows: [
      { parameter: 'Electric Motor Inputs', value: '3-Phase AC (380V / 415V / 440V, 50Hz/60Hz)' },
      { parameter: 'Motor Efficiency Ratings', value: 'IE2, IE3 (Premium Efficiency), IE4 (Super Premium)' },
      { parameter: 'Horsepower Ratings', value: '1 HP to 200+ HP' },
      { parameter: 'Pump Architecture', value: 'Gear Pumps, Vane Pumps, Axial Piston Pumps (Fixed or Variable)' },
      { parameter: 'Maximum Operating Pressure', value: 'Up to 350 Bar (5000+ PSI)' },
      { parameter: 'Reservoir Capacity', value: '20 Liters to 5000+ Liters (Custom Steel or Stainless Steel)' },
      { parameter: 'Cooling Integration', value: 'Integrated Air-Cooled or Water-Cooled heat exchangers' },
      { parameter: 'Control Logic', value: 'Custom CNC Manifold Blocks integrated directly onto power unit' },
    ],
  },
  industries: {
    heading: 'Industries Served',
    description: 'Our custom AC industrial power units are the central fluid generation engines for continuous-manufacturing sectors:',
    items: [
      {
        icon: <Settings className="w-6 h-6" />,
        name: 'Manufacturing & Heavy Fabrication',
        description: 'Supplying continuous, high-volume flow for heavy steel processing, shearing, and metal bending machinery.',
        href: '#'
      },
      {
        icon: <Cog className="w-6 h-6" />,
        name: 'Industrial Automation',
        description: 'Designing highly compact, vibration-free 3-phase units for automated robotic clamping and CNC loading cells.',
        href: '#'
      },
      {
        icon: <Droplets className="w-6 h-6" />,
        name: 'Process Industries',
        description: 'Delivering robust, thermally stable power units for continuous chemical mixing and plastic extrusion environments.',
        href: '#'
      },
      {
        icon: <Truck className="w-6 h-6" />,
        name: 'Material Handling',
        description: 'Providing fail-safe AC power packs for massive factory gantry cranes and continuous conveyor routing systems.',
        href: '#'
      },
    ],
  },
  engineering: {
    heading: 'Engineering Considerations (Specifying AC Systems)',
    description: "Our Custom Hydraulic System Design team analyzes your factory's electrical grid and machine duty cycle before engineering an industrial power pack.",
    items: [
      {
        label: 'A',
        title: 'Motor Selection & Efficiency Ratings',
        description: 'We specify highly efficient IE2, IE3, or IE4 rated 3-phase induction motors. By accurately calculating the exact fluid volume (LPM) and system pressure (Bar) required by your machine, we select the smallest possible motor horsepower that can handle the peak load, drastically lowering your factory\'s reactive power consumption.',
      },
      {
        label: 'B',
        title: 'Duty Cycles & Heat Management',
        description: 'Even with an efficient 3-phase motor, pushing oil through a circuit 24 hours a day generates fluid heat. We engineer massive fabricated steel reservoirs to act as massive heat sinks, allowing the fluid to cool naturally and aerate properly. For high-cycle automated machinery, we integrate automated shell-and-tube water coolers or thermostatically controlled air-blast heat exchangers to maintain the oil at an optimal 45°C.',
      },
      {
        label: 'C',
        title: 'Reliability Planning & Filtration',
        description: 'In continuous-duty operations, fluid contamination causes catastrophic downtime. We equip our 3-phase power packs with oversized, 10-micron absolute return line filters, offline kidney-loop filtration systems, and electronic clogging indicators that alert your PLC before dirt destroys the hydraulic pump.',
      },
    ],
  },
  manufacturing: {
    heading: 'Manufacturing & Testing Process',
    description: 'Every 3-phase power unit is built in-house and validated rigorously for thermal and pressure stability.',
    steps: [
      {
        icon: <Cog className="w-6 h-6" />,
        title: 'Laser Motor Alignment',
        description: 'The 3-phase electric motor and hydraulic pump are mounted on a precision-machined bell housing and coupled using laser alignment. This guarantees absolute concentricity, eliminating vibration and preventing pump shaft seal failures.',
      },
      {
        icon: <Hammer className="w-6 h-6" />,
        title: 'Custom Reservoir Fabrication',
        description: 'We laser-cut and seam-weld custom steel reservoirs in-house, integrating internal baffle plates to prevent oil foaming and ensure complete fluid de-aeration during continuous pumping.',
      },
      {
        icon: <Activity className="w-6 h-6" />,
        title: 'Continuous Run Validation',
        description: '100% of our industrial power packs undergo rigorous 24-hour continuous-run testing on our dynamometer rigs. We monitor motor amperage draw, fluid temperature rise, and pressure stability before authorizing shipment.',
      },
    ],
    midCta: {
      heading: 'Need a Custom 3 Phase Power Unit?',
      description: 'We can design a continuous-duty AC power pack tailored exactly for your automation system.',
      primaryCta: { label: 'REQUEST A QUOTE', href: '/request-quote/' },
    }
  },
  spotlights: [
    {
      badge: 'PROJECT SPOTLIGHT',
      heading: 'Continuous-Duty 3-Phase Power Pack for an Automated Textile Calendering Machine',
      subheading: 'Textile Manufacturing Plant — Surat',
      stats: [
        { value: '₹45,000', label: 'Monthly Energy Savings' },
        { value: '100%', label: 'Duty Cycle Uptime' }
      ],
      phases: [
        {
          number: '01',
          title: 'The Challenge',
          description: "The client's automated calendering machine in Surat was operating on an under-sized, single-phase power unit. Running 24 hours a day to meet export demands, the single-phase motor constantly overheated and tripped thermal breakers. The pulsating pressure also caused microscopic variations in textile fabric tension.",
        },
        {
          number: '02',
          title: 'The Solution',
          description: "Honeywell redesigned the fluid generation system entirely, manufacturing a custom 3-Phase Hydraulic Power Pack utilizing a premium-efficiency IE3 motor and a variable displacement vane pump. We integrated a massive 200-liter baffled reservoir with a dedicated offline cooling circuit.",
        },
        {
          number: '03',
          title: 'The Outcome',
          description: "The 3-phase motor delivered flawlessly smooth torque, completely stabilizing hydraulic pressure and eliminating fabric tensioning issues. The new power pack has run continuously for 14 months without a single thermal shutdown, saving the plant over ₹45,000 in monthly electricity costs.",
        }
      ]
    }
  ],
  relatedProducts: {
    description: 'Explore our fluid power solutions built to complement 3-phase power units.',
    items: [
      {
        title: 'DC Mini Power Packs',
        description: 'Battery-operated units for mobile equipment.',
        category: 'Hydraulic Power Packs',
        imageSrc: '/images/products/hydraulic-power-packs/dc-mini-hydraulic-power-pack.webp',
        href: '/products/hydraulic-power-packs/dc-mini-power-packs/',
        ctaText: 'View Details',
      },
      {
        title: 'Tie Rod Hydraulic Cylinders',
        description: 'Heavy-duty NFPA tie rod cylinders for industrial automation.',
        category: 'Hydraulic Cylinders',
        imageSrc: '/images/products/hydraulic-cylinders/tie-rod-hydraulic-cylinder-manufacturer.webp',
        href: '/products/hydraulic-cylinders/tie-rod-hydraulic-cylinders/',
        ctaText: 'View Details',
      },
      {
        title: 'Custom Manifold Blocks',
        description: 'Bespoke CNC-machined hydraulic logic blocks.',
        category: 'Manifold Blocks',
        imageSrc: '/images/products/manifold-blocks/custom-manifold-block-cnc-machined.webp',
        href: '/products/manifold-blocks/custom-manifold-blocks/',
        ctaText: 'View Details',
      }
    ],
  },
  faqs: [
    {
      question: 'Can I run a 3-phase hydraulic power pack on a single-phase power supply?',
      answer: 'No. A 3-phase motor requires three alternating current legs (415V/440V). To run it on a single-phase grid (220V), you must install a Variable Frequency Drive (VFD) or a phase converter to artificially generate the third phase, though this is generally only recommended for smaller horsepower units.',
    },
    {
      question: 'Why does my current single-phase power pack overheat so quickly?',
      answer: 'Single-phase motors are generally designed for intermittent duty (e.g., running for 5 minutes to lift a car, then resting). They lack the smooth torque delivery of a 3-phase motor and draw massive amperage, generating extreme heat. For continuous automation, you must upgrade to a 3-phase system.',
    },
    {
      question: 'Do you custom-build the reservoirs for your industrial power packs?',
      answer: "Yes. We do not rely on standard, flimsy plastic tanks. We laser-cut and weld robust steel reservoirs in-house, sizing them specifically to provide adequate heat dissipation and fluid de-aeration for your machine's exact duty cycle.",
    },
    {
      question: 'Can you integrate variable displacement pumps into your 3-phase power packs?',
      answer: 'Absolutely. For maximum energy efficiency, we frequently couple our IE3 3-phase motors with variable displacement piston or vane pumps. The pump automatically destrokes (stops pumping fluid) when the system reaches maximum pressure, drastically reducing the motor\'s electrical load.',
    },
  ],
  cta: {
    title: 'Need a heavy-duty 3-phase hydraulic power pack for your factory?',
    description: 'IE3 motors, variable displacement pumps, and robust steel reservoirs — engineered for continuous industrial duty cycles.',
    primaryCtaText: 'REQUEST A QUOTE',
    primaryCtaHref: '/request-quote/',
    secondaryCtaText: 'Talk to an Engineer',
    secondaryCtaHref: '/contact-us/',
  },
};
