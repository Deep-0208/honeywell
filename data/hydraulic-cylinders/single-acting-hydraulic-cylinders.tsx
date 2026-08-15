import React from 'react';
import {
  ShieldAlert,
  Settings,
  Hammer,
  Box,
  Zap,
  Cog,
} from 'lucide-react';
import { FaIndustry, FaHardHat, FaCar } from 'react-icons/fa';
import type { ProductPageData } from '@/components/product-page/types';

export const singleActingCylinderData: ProductPageData = {
  // 1. SEO & Metadata
  seo: {
    title: 'Single Acting Hydraulic Cylinder Manufacturer | Honeywell',
    description: 'Leading single acting hydraulic cylinder manufacturer in India. Supplying heavy-duty cylinders for presses, material handling, and custom applications.',
    url: '/products/hydraulic-cylinders/single-acting-hydraulic-cylinders/',
    image: '/images/products/hydraulic-cylinders/single-acting-hydraulic-cylinder-manufacturer.webp',
  },

  // 2. Schema Data
  schema: {
    productName: 'Single Acting Hydraulic Cylinders',
    category: 'Hydraulic Cylinders',
    properties: [
      { name: 'Bore Sizes', value: '40mm to 250mm' },
      { name: 'Operating Pressure', value: 'Up to 450 Bar' },
      { name: 'Stroke Length', value: 'Up to 6000mm' },
    ],
  },

  // 4. Hero Section
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products/' },
      { label: 'Hydraulic Cylinders', href: '/products/hydraulic-cylinders/' },
    ],
    currentPage: 'Single Acting Hydraulic Cylinders',
    subtitle: 'SINGLE ACTING HYDRAULIC CYLINDERS',
    h1: 'Single Acting Hydraulic Cylinder Manufacturer',
    description: 'Engineered for efficiency and robust performance. Honeywell Hydraulics is a premier custom single acting hydraulic cylinder manufacturer in Gujarat. Our single acting cylinders are designed to apply unidirectional force for lifting, pushing, or pressing applications, offering a highly reliable and cost-effective fluid power solution capable of sustaining up to 450 Bar working pressures.',
    image: {
      src: '/images/products/hydraulic-cylinders/single-acting-hydraulic-cylinder-manufacturer.webp',
      alt: 'Single Acting Hydraulic Cylinder Manufacturer',
    },
    primaryCta: { label: 'REQUEST A QUOTE', href: '/request-quote/#quote-form' },
    secondaryCta: { label: 'VIEW TECHNICAL SPECS', href: '#technical-specifications' },
    keySpecs: [
      { label: 'Max Pressure', value: '450 Bar' },
      { label: 'Bore Size', value: 'Up to 250 mm' },
      { label: 'Stroke', value: 'Up to 6000 mm' },
      { label: 'Applications', value: 'Unidirectional Force' },
    ],
  },

  overview: {
    heading: 'What Are Single Acting Hydraulic Cylinders?',
    content: (
      <>
        <p>Hydraulic cylinders are used as linear actuators to apply mechanical force in a linear motion. A <strong>single acting hydraulic cylinder</strong>, also known as a single acting hydraulic ram, operates in a single direction.</p>
        <p>It typically has a single port at the bottom of the cylinder where pressurised fluid is pumped into the system. As the fluid enters the system, it fills the cylinder and extends the piston inside, creating mechanical force to lift, push, or press heavy loads.</p>
        <p>To retract the piston, a single acting hydraulic cylinder must rely on an external force to expunge the fluid inside. This can be left to gravity if there is no immediate need to retract the piston rapidly. A second piston, mechanical weight, or strong internal springs can also be used to forcefully push the piston back into the cylinder.</p>
      </>
    ),
  },

  // 6. Key Features (Mechanics Explained)
  keyFeatures: {
    heading: 'Single Acting Cylinder Mechanics',
    description: 'Simplicity meets extreme performance. A look inside our single acting actuators.',
    items: [
      {
        icon: <Box className="w-6 h-6" />,
        title: 'Single Port Operation',
        description: 'Fluid enters through a single port to extend the cylinder. The simplicity of a single hydraulic line reduces plumbing complexity, potential leak points, and overall system cost.',
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: 'Piston and Rod Assembly',
        description: 'The hard-chrome plated piston rod (EN 8 / EN 9 / EN 19) transmits the mechanical force to the heavy load. Precision honing of the ST 52.3 tube ensures extremely low friction during extension and retraction.',
      },
      {
        icon: <Settings className="w-6 h-6" />,
        title: 'Retraction Mechanism',
        description: 'Unlike double acting cylinders, single acting variants rely on gravity, weight of the load, or internal springs for the return stroke. This makes them perfect for lifting applications like scissor lifts or jacks.',
      },
    ],
  },

  // 7. Technical Specs
  technicalSpecs: {
    heading: 'Technical Specifications',
    description: 'Our single acting cylinders are manufactured using premium ST 52.3 honed tubes and high-grade alloy steel rods for maximum strength and endurance.',
    tableTitle: 'Standard Spec Framework',
    rows: [
      { parameter: 'Bore Size', value: '40 to 250 mm (Custom sizes available)' },
      { parameter: 'Rod Dia', value: '16 to 200 mm' },
      { parameter: 'Stroke Length', value: 'Up to 6000 mm' },
      { parameter: 'Working Pressure', value: 'Up to 450 Bar' },
      { parameter: 'Honed Tube Material', value: 'ST 52.3 (Tolerance H8, H9)' },
      { parameter: 'Piston Rod Material', value: 'EN 8 / EN 9 / EN 19 / EN 31 (Tolerance f7)' },
      { parameter: 'Piston and Gland', value: 'EN 8' },
    ],
    primaryCta: { label: 'DISCUSS YOUR SPECS', href: '/request-quote/#quote-form' },
    secondaryCta: { label: 'REQUEST CAD MODELS', href: '/contact-us/' },
  },

  // 8. Product Variants / Advantages
  comparisons: [
    {
      heading: 'Single Acting vs. Double Acting Cylinders',
      description: 'Choosing the right actuator type for your machine\'s cycle profile.',
      columns: [{ heading: 'Feature' }, { heading: 'Single Acting Cylinders' }, { heading: 'Double Acting Cylinders' }],
      rows: [
        { feature: 'Force Direction', values: [{ text: 'Unidirectional (Push OR Pull)', highlight: true }, { text: 'Bidirectional (Push AND Pull)' }] },
        { feature: 'Hydraulic Ports', values: [{ text: 'One (Extension only)' }, { text: 'Two (Extension and Retraction)' }] },
        { feature: 'Retraction Method', values: [{ text: 'Gravity, Load Weight, or Spring' }, { text: 'Hydraulic Pressure' }] },
        { feature: 'System Complexity', values: [{ text: 'Low (Requires fewer valves/hoses)' }, { text: 'High (Requires complex valving)' }] },
        { feature: 'Typical Applications', values: [{ text: 'Scissor Lifts, Jacks, Forging Presses' }, { text: 'Excavators, Steering, Automation' }] },
      ],
    }
  ],
  
  // Custom section for advantages using the `engineering` block, or just let it render differently.
  // Actually, I can put Advantages in the engineering section or the spotlights.
  // We'll put Advantages in the engineering section since the data structure doesn't have a specific `advantages` block separate from comparison.
  // Wait, I can use the `engineering` block for Engineering Considerations and `features` for advantages. 
  // Let me look at how to handle multiple arrays. `features` are icons + title + desc. Advantages are also icon + title + desc. I'll merge them into the features or skip advantages and put them in engineering.
  // Since `ProductPageData` allows only one `features` array, I'll put the "Mechanics" in `features` and "Advantages" in `engineering`. Or I can just omit advantages and merge the text into the overview if needed, but it's better to preserve them.
  // Let's preserve `Advantages` as `engineering` items. Wait, `engineering` is just title/desc without icons. That's fine.

  engineering: {
    heading: 'Advantages of Single Acting Cylinders',
    description: 'Why engineers specify single acting cylinders for lifting and pressing applications.',
    items: [
      {
        label: 'A',
        title: 'Cost-Effective Design',
        description: 'With only one hydraulic port and line, single acting cylinders reduce the complexity of the hydraulic circuit, saving on hoses, fittings, and valving.',
      },
      {
        label: 'B',
        title: 'High Reliability',
        description: 'Fewer moving parts and a simpler sealing mechanism mean fewer points of potential failure, leading to a highly reliable actuator with lower maintenance needs.',
      },
      {
        label: 'C',
        title: 'Reduced Fluid Requirement',
        description: 'Because fluid is only used for the extension stroke, single acting systems require smaller reservoirs and smaller pumps compared to double acting setups.',
      },
      {
        label: 'D',
        title: 'Fail-Safe Retraction',
        description: 'In gravity-return applications, the cylinder will safely retract if hydraulic power is lost, providing an inherent fail-safe mechanism for lifting equipment.',
      },
      // Now adding the Engineering Considerations
      {
        label: 'E',
        title: 'Engineering: Retraction Method',
        description: 'Because there is no hydraulic pressure to retract the rod, you must determine if the load\'s weight is sufficient to overcome seal friction and push the fluid back into the reservoir quickly enough for your cycle times. If not, an internal return spring may be necessary.',
      },
      {
        label: 'F',
        title: 'Engineering: Breather Ports',
        description: 'The non-pressurized side of a single acting cylinder must be vented to the atmosphere to allow air to enter and exit as the cylinder strokes. We equip our breather ports with high-quality sintered bronze filters to prevent dust and moisture from being sucked into the cylinder during extension.',
      }
    ],
  },

  // 10. Industries
  industries: {
    heading: 'Industries Served',
    description: 'Single acting cylinders are the workhorses of vertical lifting and pressing.',
    items: [
      {
        icon: <FaHardHat className="w-6 h-6" />,
        name: 'Material Handling',
        description: 'Used extensively in scissor lifts, goods elevators, and platform lifts where gravity handles the return stroke.',
        href: '/industries/single-acting-hydraulic-cylinder-manufacturer-honeywell'
      },
      {
        icon: <FaIndustry className="w-6 h-6" />,
        name: 'Heavy Forging & Presses',
        description: 'Ideal for hydraulic presses where massive unidirectional downward force is required to stamp or bend metal.',
        href: '/industries/heavy-forging-presses'
      },
      {
        icon: <FaCar className="w-6 h-6" />,
        name: 'Automotive & Parking',
        description: 'Reliable actuators for car parking systems and hydraulic jacks.',
        href: '/industries/automotive-parking'
      },
    ],
  },

  // 11. Manufacturing Process
  manufacturing: {
    heading: 'Manufacturing & Quality Process',
    description: 'Our heavy-duty single acting cylinders are backed by our strict quality guarantee. Every unit is dispatched with complete material test certificates and dimensional reports.',
    steps: [
      {
        icon: <Cog className="w-6 h-6" />,
        title: 'Premium Materials',
        description: 'We exclusively use ST 52.3 seamless honed tubes and EN 8 / EN 19 piston rods. This guarantees superior wear resistance and structural integrity under high pressure.',
      },
      {
        icon: <Hammer className="w-6 h-6" />,
        title: 'Precision Machining',
        description: 'Our CNC machining processes ensure strict H8/H9 tolerances for the honed tubes and f7 tolerances for the piston rods, providing an ultra-smooth surface finish for extended seal life.',
      },
      {
        icon: <ShieldAlert className="w-6 h-6" />,
        title: 'Pressure Validation',
        description: 'Every cylinder undergoes rigorous hydrostatic testing at pressures well beyond their rated working capacity to guarantee leak-free performance and structural safety.',
      },
    ],
    midCta: {
      heading: 'The Honeywell Guarantee',
      description: 'Our heavy-duty single acting cylinders are backed by our strict quality guarantee. Every unit is dispatched with complete material test certificates and dimensional reports.',
      primaryCta: { label: 'VIEW QUALITY CERTIFICATES', href: '/contact-us/' },
    },
  },

  spotlights: [
    {
      badge: 'CASE STUDY',
      heading: 'Custom Actuators for Heavy Goods Elevators',
      subheading: 'Material Handling OEM',
      phases: [
        {
          number: '01',
          title: 'The Challenge',
          description: 'A material handling OEM required highly reliable, long-stroke lifting cylinders for their 5-ton industrial goods elevators. The cylinders needed to lift the platform efficiently and return safely using only the weight of the platform.',
        },
        {
          number: '02',
          title: 'The Solution',
          description: 'We engineered custom Single Acting Hydraulic Cylinders with a 6000mm stroke and specialized velocity fuses built into the base port. We used ultra-smooth honed tubes and premium rod seals to minimize friction during the gravity-assisted return stroke.',
        },
        {
          number: '03',
          title: 'The Outcome',
          description: 'Safe and reliable lifting capacity for 5-ton payloads. Smooth, friction-free gravity return stroke. Integrated velocity fuses for maximum safety.',
        }
      ],
      stats: [
        { value: '6000', label: 'mm Stroke Length' }
      ]
    }
  ],

  relatedProducts: {
    description: 'Explore our full range of heavy-duty hydraulic cylinders.',
    items: [
      {
        title: 'Custom Hydraulic Cylinders',
        description: 'Bespoke actuators engineered for extreme environments and unique mounting requirements.',
        category: 'Hydraulic Cylinders',
        imageSrc: '/images/products/hydraulic-cylinders/custom-hydraulic-cylinder-manufacturer.webp',
        href: '/products/hydraulic-cylinders/custom-hydraulic-cylinders/',
        ctaText: 'View Details',
      },
      {
        title: 'Tie Rod Hydraulic Cylinders',
        description: 'Standard NFPA tie rod cylinders for heavy-duty industrial applications.',
        category: 'Hydraulic Cylinders',
        imageSrc: '/images/products/hydraulic-cylinders/tie-rod-hydraulic-cylinder-manufacturer.webp',
        href: '/products/hydraulic-cylinders/tie-rod-hydraulic-cylinders/',
        ctaText: 'View Details',
      },
      {
        title: 'Telescopic Hydraulic Cylinders',
        description: 'Multi-stage cylinders providing exceptional stroke length from a compact retracted footprint.',
        category: 'Hydraulic Cylinders',
        imageSrc: '/images/products/hydraulic-cylinders/telescopic-hydraulic-cylinders-manufacturer.webp',
        href: '/products/hydraulic-cylinders/telescopic-hydraulic-cylinders/',
        ctaText: 'View Details',
      },
    ],
  },

  // 13. FAQs
  faqs: [
    {
      question: 'How does a single acting hydraulic cylinder retract?',
      answer: 'A single acting hydraulic cylinder must rely on an external force to expunge the fluid inside and retract. This can be left to gravity if there is no immediate need to retract the piston, but a second piston or mechanical load can also be used to forcefully push the piston back into the cylinder. Strong internal springs can also be utilized for retraction.',
    },
    {
      question: 'What is the main advantage of a single acting cylinder?',
      answer: 'Single acting cylinders are simpler in design and often more cost-effective because they require only one hydraulic line. They are highly reliable in applications where the return stroke can be accomplished by gravity, mechanical weight, or a spring.',
    },
    {
      question: 'Can single acting cylinders be used in horizontal applications?',
      answer: 'Yes, they can be used horizontally, provided there is an external force (like a spring mechanism or opposing load) to retract the rod. If relying purely on gravity, they are typically mounted vertically.',
    },
    {
      question: 'Do you manufacture custom single acting cylinders?',
      answer: 'Yes. We engineer custom single acting cylinders with bore sizes up to 250mm and stroke lengths up to 6000mm. We can customize mounting options, port locations, and material specifications according to your exact requirements.',
    },
  ],
  cta: {
    title: 'Need a single acting hydraulic cylinder for your application?',
    description: 'Spring-return and gravity-return configurations with bore sizes up to 250mm. Every cylinder is 100% hydrostatically pressure tested before dispatch.',
    primaryCtaText: 'REQUEST A QUOTE',
    primaryCtaHref: '/request-quote/#quote-form',
    secondaryCtaText: 'Talk to an Engineer',
    secondaryCtaHref: '/contact-us/',
  },
};
