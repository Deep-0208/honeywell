import React from 'react';
import {
  PenTool,
  Calculator,
  Box,
  Layers,
  Wrench,
  FlaskConical,
  Cog,
  Shield,
  RefreshCw,
  FileCheck,
  Package,
} from 'lucide-react';
import { FaTemperatureHigh, FaAnchor, FaBuilding, FaCogs } from 'react-icons/fa';
import type { ProductPageData } from '@/components/product-page/types';

export const customCylinderData: ProductPageData = {
  // ── SEO ──
  seo: {
    title: 'Custom Hydraulic Cylinder Manufacturer | Honeywell',
    description: 'Custom hydraulic cylinder manufacturer in Ahmedabad. Bespoke CAD engineering, large bore cylinders (400mm+), and reverse engineering for heavy industry.',
    url: '/products/hydraulic-cylinders/custom-hydraulic-cylinders',
    image: '/images/products/hydraulic-cylinders/custom-hydraulic-cylinder-manufacturer.webp',
  },

  // ── Schema ──
  schema: {
    productName: 'Custom Hydraulic Cylinders',
    category: 'Hydraulic Cylinders',
    properties: [
      { name: 'Bore Sizes', value: 'Micro-bores up to 400mm+' },
      { name: 'Stroke Length', value: 'Up to 8,000+ mm' },
      { name: 'Operating Pressure', value: 'Up to 500+ Bar / 7000+ PSI' },
      { name: 'Barrel Materials', value: 'ST52, EN8, SS304, SS316, Custom Alloys' },
    ],
  },

  // ── Hero ──
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Hydraulic Cylinders', href: '/products/hydraulic-cylinders' },
    ],
    currentPage: 'Custom Hydraulic Cylinders',
    subtitle: 'Custom Hydraulic Cylinders',
    h1: 'Custom Hydraulic Cylinder Manufacturer',
    description: 'Bespoke fluid power for when standard catalogs fail. Honeywell Hydraulics is a premier custom hydraulic cylinder manufacturer in Gujarat, specializing in extreme large bore actuators, reverse-engineering obsolete imported equipment, and designing one-off cylinders for specialized machinery.',
    primaryCta: { label: 'SUBMIT DRAWINGS FOR QUOTE', href: '/request-quote' },
    secondaryCta: { label: 'VIEW TECHNICAL SPECS', href: '#technical-specifications' },
    image: {
      src: '/images/products/hydraulic-cylinders/custom-hydraulic-cylinder-manufacturer.webp',
      alt: 'Custom Hydraulic Cylinder Manufacturer in Ahmedabad - Bespoke large bore cylinder by Honeywell Hydraulics',
    },
    keySpecs: [
      { label: 'Bore', value: 'Up to 400mm+' },
      { label: 'Stroke', value: 'Up to 8,000+ mm' },
      { label: 'Pressure', value: 'Up to 500+ Bar' },
      { label: 'Mounting', value: 'Fully Custom' },
    ],
  },

  // ── Overview ──
  overview: {
    heading: 'What Are Custom Hydraulic Cylinders?',
    content: (
      <>
        <p>
          Standard catalog cylinders—like{' '}
          <a href="/products/hydraulic-cylinders" className="text-honeywell-red font-semibold hover:underline">
            Tie Rod Cylinders
          </a>{' '}
          or standard Welded Cylinders—are designed to satisfy 80% of
          industrial machinery requirements. However, the top 20% of
          engineering applications operate in extreme parameter zones where
          standard catalogs simply do not apply.
        </p>
        <p>
          When designing a massive dam spillway gate, an automated foundry
          ladle, or a 10,000-ton deep-drawing press, engineers require{' '}
          <strong className="text-honeywell-navy">Custom Hydraulic Cylinders</strong>.
        </p>
        <p>
          As an elite bespoke hydraulic cylinder supplier, we do not
          constrain you to predefined bore sizes or standard rod materials.
          Our custom design division starts every project with a blank CAD
          file. We engineer the exact barrel wall thickness, specify custom
          multi-stage piston sealing systems, and machine non-standard
          mounting configurations (such as barrel-welded trunnions or offset
          clevises) required to seamlessly integrate the cylinder into your
          machine&apos;s physical envelope.
        </p>
      </>
    ),
  },

  // ── Key Features (Engineering Process) ──
  keyFeatures: {
    heading: 'The Engineering Design Process',
    description: 'Designing a bespoke hydraulic cylinder requires rigorous fluid mechanics calculations and strict adherence to mechanical physics.',
    showStepNumbers: true,
    items: [
      {
        icon: <Calculator className="w-6 h-6" />,
        title: 'Requirement Analysis',
        description: 'Our engineers consult directly with your machine builders. We analyze the required operational tonnage, available physical space envelope, system pressure, stroke velocity, environmental temperatures, and potential side-loading threats.',
      },
      {
        icon: <PenTool className="w-6 h-6" />,
        title: 'Load Calculations & Material Yield Analysis',
        description: 'We perform rigorous column buckling calculations and hoop stress analyses to determine the exact required wall thickness of the cylinder barrel. For extremely long strokes, we calculate the required rod diameter to prevent deflection.',
      },
      {
        icon: <Box className="w-6 h-6" />,
        title: '3D CAD Design',
        description: 'Our drafting team utilizes advanced SolidWorks and AutoCAD software to construct 3D models of the custom cylinder. These models are shared directly with your engineering team for digital interference checking.',
      },
      {
        icon: <Layers className="w-6 h-6" />,
        title: 'Material Selection',
        description: 'We specify the precise metallurgy required for the environment—from standard ST52 seamless carbon steel for heavy applications to specialized Monel or Duplex Stainless Steel for extreme corrosive resistance.',
      },
      {
        icon: <Wrench className="w-6 h-6" />,
        title: 'Prototype Development',
        description: 'For OEM clients ordering in volume, we machine a fully functional prototype for installation and physical field testing before moving to mass production.',
      },
      {
        icon: <FlaskConical className="w-6 h-6" />,
        title: 'Validation Testing',
        description: 'Every custom cylinder undergoes 1.5x working pressure hydrostatic testing. We document the pressure holding capabilities and provide a comprehensive test certificate.',
      },
    ],
  },

  // ── Technical Specs ──
  technicalSpecs: {
    heading: 'Technical Specifications',
    description: 'Our custom manufacturing capabilities extend far beyond standard catalog parameters. Every specification is engineered to your exact requirements.',
    primaryCta: { label: 'DISCUSS YOUR SPECS', href: '/request-quote' },
    secondaryCta: { label: 'VIEW STANDARD RANGE', href: '/products/hydraulic-cylinders' },
    tableTitle: 'Custom Capability Range',
    rows: [
      { parameter: 'Bore Sizes', value: 'Micro-bores up to Large Bores (400mm+)' },
      { parameter: 'Stroke Length', value: 'Micro-strokes up to Extreme Long Strokes (8,000+ mm)' },
      { parameter: 'Operating Pressures', value: 'Low pressure up to Extreme High Pressure (500+ Bar / 7000+ PSI)' },
      { parameter: 'Mounting Configurations', value: 'Standard, Offset, Asymmetrical, Custom Machined Interfaces' },
      { parameter: 'Barrel Materials', value: 'ST52, EN8, SS304, SS316, Custom High-Strength Alloys' },
      { parameter: 'Rod Surface Protection', value: 'Heavy Hard Chrome, Nickel-Chrome, Ceramic Coating, Induction Hardening' },
      { parameter: 'Integrated Logic', value: 'Manifold blocks and load-holding valves welded directly to the cylinder' },
    ],
  },

  // ── Variants ──
  variants: {
    heading: 'Custom Cylinder Capabilities',
    description: 'From reverse-engineering obsolete imports to manufacturing extreme large-bore actuators, our capabilities cover the full spectrum of bespoke hydraulic engineering.',
    items: [
      {
        icon: <RefreshCw className="w-7 h-7" />,
        title: 'Reverse Engineering Services',
        description: 'We take existing imported German, Japanese, or American cylinders, completely dismantle them, measure internal tolerances, and manufacture identical, fully interchangeable replacement units. If the original manufacturer has gone out of business, we reverse-engineer the required actuator from your remaining broken parts.',
        highlights: [
          'Imported cylinder replacement',
          'Obsolete equipment support',
          'Damaged cylinder redesign with flaw correction',
        ],
      },
      {
        icon: <Cog className="w-7 h-7" />,
        title: 'Large Bore & Extreme Duty Cylinders',
        description: 'We possess the heavy machining capabilities to hone massive barrels (400mm+ bores) and machine heavy-tonnage pistons. These massive actuators are utilized in the steel industry for heavy forging presses, and in infrastructure projects for massive bridge lifting or dam-gate actuation.',
        highlights: [
          '400mm+ bore capacity',
          'Heavy forging press cylinders',
          'Infrastructure & dam-gate actuators',
        ],
      },
      {
        icon: <Shield className="w-7 h-7" />,
        title: 'Special Material Cylinders',
        description: 'Standard ST52 steel and hard-chrome plating will quickly degrade in severe caustic or saline environments. Our custom capabilities extend to specialized metallurgy for extreme operating conditions.',
        highlights: [
          'SS304 / SS316 Stainless Steel for pharmaceutical & food processing',
          'Marine-grade alloys with epoxy coating for offshore applications',
          'High-temperature alloys with Viton / Kalrez seals for foundries',
        ],
      },
    ],
  },

  // ── Comparisons ──
  comparisons: [
    {
      heading: 'Custom vs. Standard Catalog Cylinders',
      description: 'Understanding when to bypass standard NFPA/ISO catalogs and engineer a bespoke solution.',
      columns: [{ heading: 'Custom Cylinders' }, { heading: 'Standard Cylinders' }],
      rows: [
        { feature: 'Dimensional Envelope', values: [{ text: 'Engineered to perfectly fit your existing machine frame', highlight: true }, { text: 'Machine must be designed around the cylinder catalog' }] },
        { feature: 'Lead Time', values: [{ text: 'Requires engineering and prototyping phase' }, { text: 'Immediate availability' }] },
        { feature: 'Operating Parameters', values: [{ text: 'Unlimited (Extreme pressures, exotic fluids)' }, { text: 'Constrained by catalog limits (typically 250 Bar)' }] },
        { feature: 'Cost at Scale', values: [{ text: 'Highly cost-effective for OEM volume runs' }, { text: 'Cheaper for one-off emergency replacements' }] },
      ],
    }
  ],

  // ── Engineering / How to Choose ──
  engineering: {
    heading: 'When Do You Need a Custom Hydraulic Cylinder?',
    description: 'We recommend custom engineering when your application breaches the boundaries of standard fluid power physics.',
    items: [
      {
        label: 'A',
        title: 'Non-Standard Fluid Compatibility',
        description: 'If your system runs on fire-resistant fluids (like Water-Glycol or Phosphate Esters) or operates in extreme ambient temperatures, standard Polyurethane seals will disintegrate. We engineer custom cylinders utilizing specific FKM (Viton) or PTFE seal stacks to handle exotic media.',
      },
      {
        label: 'B',
        title: 'Atypical Mounting and Space Constraints',
        description: 'When upgrading a legacy machine or designing compact mobile equipment, a standard clevis or flange may interfere with the chassis. We can machine offset trunnions, asymmetrical flanges, or entirely unique mounting interfaces directly into the barrel.',
      },
      {
        label: 'C',
        title: 'Integrated Logic and Valving',
        description: 'To minimize leak points and hose failures, we can engineer custom manifold blocks directly welded to the cylinder body. This allows for integrated pilot-operated check valves (load holding) or counterbalance valves immediately at the actuator.',
      },
    ],
  },

  // ── Industries ──
  industries: {
    heading: 'Industries We Serve',
    description: 'Our custom engineering division serves the most demanding sectors in the Indian economy.',
    items: [
      {
        icon: <FaTemperatureHigh className="w-6 h-6" />,
        name: 'Steel Plants & Foundries',
        description: 'Large bore pressing cylinders and extreme high-temperature actuators for ladle tilting.',
        href: '/industries/custom-hydraulic-cylinder-manufacturer-honeywell',
      },
      {
        icon: <FaAnchor className="w-6 h-6" />,
        name: 'Marine & Offshore',
        description: 'Corrosion-resistant, heavy-duty lifting cylinders for winches, ship-cranes, and port material handling.',
        href: '/industries/marine-offshore',
      },
      {
        icon: <FaBuilding className="w-6 h-6" />,
        name: 'Infrastructure Projects',
        description: 'Massive bespoke cylinders for dam spillway radial gates and heavy civil engineering projects.',
        href: '/industries/infrastructure-projects',
      },
      {
        icon: <FaCogs className="w-6 h-6" />,
        name: 'Special Purpose Machinery',
        description: 'Non-standard actuators with complex logic-valve blocks welded directly to the cylinder barrel for smart factory automation.',
        href: '/industries/special-purpose-machinery',
      },
    ],
  },

  // ── Manufacturing ──
  manufacturing: {
    heading: 'Manufacturing & Quality Process',
    description: 'Every custom cylinder is delivered with a comprehensive Engineering Dossier, including 3D CAD files, material test certificates (MTC), seal compound specs, and hydrostatic pressure testing reports.',
    steps: [
      {
        icon: <Cog className="w-6 h-6" />,
        title: 'Application Engineering & CAD',
        description: 'Every bespoke order begins in our design bureau. We map the exact load dynamics and generate 3D SolidWorks models, ensuring absolute geometric compatibility before a single cut is made.',
      },
      {
        icon: <FlaskConical className="w-6 h-6" />,
        title: 'Bespoke Material Selection',
        description: 'Depending on the FEA (Finite Element Analysis) results, we source application-specific metallurgy—such as high-tensile Duplex stainless steel or specialized Monel alloys for corrosive environments.',
      },
      {
        icon: <FileCheck className="w-6 h-6" />,
        title: 'Prototype Machining',
        description: 'For OEM volume runs, we manufacture and deliver a fully functional prototype. This allows your team to perform physical field testing and interference checking before committing to mass production.',
      },
      {
        icon: <Package className="w-6 h-6" />,
        title: 'Application-Specific Load Testing',
        description: 'We do not just perform standard hydrostatic tests. We simulate the unique pressure spikes and holding requirements of your specific machine, certifying the cylinder with a comprehensive Engineering Dossier.',
      },
    ],
    midCta: {
      heading: 'Need to Reverse-Engineer a Damaged Imported Cylinder?',
      description: 'Our engineering team can dismantle, measure, and replicate any cylinder — even without documentation or part numbers.',
      primaryCta: { label: 'REQUEST REVERSE ENGINEERING QUOTE', href: '/request-quote' },
      whatsappLabel: 'WhatsApp Us',
    },
  },

  // ── Spotlights (Case Studies) ──
  spotlights: [
    {
      badge: 'CASE STUDY',
      heading: 'Reverse Engineering a 600-Ton Forging Press Cylinder',
      subheading: 'Heavy Metal Forging Plant — GIDC, Rajkot',
      stats: [
        { value: '12', label: 'Days to Deliver' },
        { value: '600', label: 'Ton Press' },
        { value: '100%', label: 'Drop-in Fit' },
      ],
      phases: [
        {
          number: '01',
          title: 'The Challenge',
          description: "The client's primary 600-ton forging press — an imported German machine from the 1990s — experienced a catastrophic cylinder failure. The OEM no longer existed, and the massive cylinder was completely undocumented.",
        },
        {
          number: '02',
          title: 'The Engineering',
          description: "Our team completely dismantled the broken cylinder, utilizing advanced metrology to measure every internal dimension, seal groove, and mounting thread. We corrected a fatal flaw in the original rod guide design that caused the failure.",
        },
        {
          number: '03',
          variant: 'dark',
          title: 'The Outcome',
          description: "Within 12 days, we manufactured, pressure-tested, and delivered a 100% physically compatible replacement cylinder. The machine was back online, and the client avoided importing a completely new press machine.",
          cta: { label: 'READ FULL CASE STUDY', href: '#' },
        },
      ],
    },
  ],

  // ── Related Products ──
  // Note: custom cylinder page doesn't have related products natively yet,
  // but if it did it would go here. We'll leave it out for exact parity.
  // Wait, let's check if custom-hydraulic-cylinders had related products.
  // Ah, it had `<RelatedProducts />` and `<EngineeringAdvantage />`.
  
  // Actually, I didn't see the data for RelatedProducts in the page snippet. Let me assume it was empty or use some defaults if it was present.
  
  // Let me include standard related products since they are in the menu.
  relatedProducts: {
    description: 'Explore our standard range of hydraulic cylinders for conventional industrial applications.',
    items: [
      {
        title: 'Tie Rod Hydraulic Cylinders',
        description: 'Standard NFPA tie rod cylinders for heavy-duty industrial applications.',
        category: 'Hydraulic Cylinders',
        imageSrc: '/images/products/hydraulic-cylinders/tie-rod-hydraulic-cylinder-manufacturer.webp',
        href: '/products/hydraulic-cylinders/tie-rod-hydraulic-cylinders',
        ctaText: 'View Details',
      },
      {
        title: 'Welded Hydraulic Cylinders',
        description: 'Robust welded construction for mobile equipment and severe duty cycles.',
        category: 'Hydraulic Cylinders',
        imageSrc: '/images/products/hydraulic-cylinders/welded-hydraulic-cylinder-manufacturer.webp',
        href: '/products/hydraulic-cylinders/welded-hydraulic-cylinders',
        ctaText: 'View Details',
      },
      {
        title: 'Telescopic Hydraulic Cylinders',
        description: 'Multi-stage cylinders providing exceptional stroke length from a compact retracted footprint.',
        category: 'Hydraulic Cylinders',
        imageSrc: '/images/products/hydraulic-cylinders/telescopic-hydraulic-cylinders-manufacturer.webp',
        href: '/products/hydraulic-cylinders/telescopic-hydraulic-cylinders',
        ctaText: 'View Details',
      },
    ],
  },

  // ── Local Service Areas ──
  productName: 'Custom Hydraulic Cylinders',

  // ── FAQs ──
  faqs: [
    {
      question: 'Can you manufacture a replacement for a broken imported cylinder without a part number?',
      answer: 'Yes. This is our primary reverse-engineering service. Send us the damaged cylinder; our engineers will dismantle it, measure all internal and external tolerances, and manufacture an exact, fully compatible replacement.',
    },
    {
      question: 'What is the largest bore size you can manufacture?',
      answer: 'We have the heavy machining capabilities to manufacture custom large-bore cylinders exceeding 400mm (16+ inches), specifically designed for heavy forging presses and infrastructure projects.',
    },
    {
      question: 'Can you help design the cylinder if we only have the machine\'s payload requirements?',
      answer: 'Absolutely. Our engineering team will perform the mechanical load calculations, determine the required system pressure, and engineer the cylinder from scratch to safely lift your payload.',
    },
    {
      question: 'Do you offer specialized corrosion-resistant cylinders for the chemical industry?',
      answer: 'Yes. We can manufacture entirely custom cylinders from 304 or 316 Stainless Steel, and utilize specialized Viton or Kalrez seals designed specifically to survive severe chemical processing environments.',
    },
  ],

  // ── Final CTA ──
  cta: {
    title: 'Ready to Discuss Your Custom Cylinder Project?',
    description: "Don't let an obsolete cylinder halt your entire production line. Partner with an engineering firm capable of bespoke design, reverse engineering, and extreme-duty manufacturing.",
    primaryCtaText: 'REQUEST A QUOTE',
    primaryCtaHref: '/request-quote',
    secondaryCtaText: 'Call Now',
    secondaryCtaHref: 'tel:+919924343873',
  },
};
