import { LocationPageData } from './gujarat';

export const vadodaraData: LocationPageData = {
  seo: {
    title: 'Hydraulic Cylinder Manufacturer Vadodara | Honeywell Hydraulics',
    description: 'Leading hydraulic cylinder manufacturer supplying Vadodara, Makarpura & Nandesari. Specialized chemical-resistant cylinders and heavy-duty power packs.',
    canonical: 'https://honeywellhydraulics.in/locations/vadodara/',
    openGraph: {
      title: 'Hydraulic Cylinders for Vadodara\'s Chemical & Engineering Hubs',
      description: 'Leading hydraulic cylinder manufacturer supplying Vadodara, Makarpura & Nandesari. Specialized chemical-resistant cylinders and heavy-duty power packs.',
      url: 'https://honeywellhydraulics.in/locations/vadodara/',
      images: [
        {
          url: '/images/locations/vadodara-chemical-hydraulics.jpg',
          width: 1200,
          height: 630,
          alt: 'Chemical resistant hydraulic cylinders for Vadodara processing plants',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Hydraulic Cylinder Manufacturer Vadodara | Honeywell Hydraulics',
      description: 'Leading hydraulic cylinder manufacturer supplying Vadodara, Makarpura & Nandesari. Chemical-resistant cylinders.',
      images: ['/images/locations/vadodara-chemical-hydraulics.jpg'],
    },
    keywords: [
      'hydraulic cylinder manufacturer in Vadodara',
      'hydraulic cylinder manufacturer Vadodara',
      'hydraulic cylinders Makarpura GIDC',
      'chemical resistant hydraulic cylinders Vadodara',
      'hydraulic power pack manufacturer Vadodara',
      'stainless steel hydraulic cylinders Vadodara',
      'hydraulic cylinder supplier Vadodara',
      'hydraulic cylinder repair Vadodara',
    ],
  },
  schema: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://honeywellhydraulics.in/locations/vadodara/#service',
        serviceType: 'Hydraulic Cylinder Manufacturing & Supply',
        provider: {
          '@type': 'ManufacturingBusiness',
          name: 'Honeywell Hydraulics',
          telephone: '+91-9924343873',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'B-18, Suryam Plaza Estate, Near Nilkanth Estate, Road no. 15, Kathwada GIDC',
            addressLocality: 'Ahmedabad',
            addressRegion: 'Gujarat',
            postalCode: '382430',
            addressCountry: 'IN'
          }
        },
        areaServed: {
          '@type': 'City',
          name: 'Vadodara',
          containedInPlace: {
            '@type': 'State',
            name: 'Gujarat'
          }
        },
        description: 'Corrosion-resistant and heavy-duty hydraulic cylinders engineered for the chemical processing, pharmaceutical, transformer manufacturing, and heavy engineering industries across Vadodara\'s Makarpura, Nandesari, Por-Ramangamdi, Waghodia, and Savli GIDC estates.'
      },
      {
        '@type': 'WebPage',
        '@id': 'https://honeywellhydraulics.in/locations/vadodara/',
        name: 'Hydraulic Cylinder Manufacturer in Vadodara | Honeywell Hydraulics',
        url: 'https://honeywellhydraulics.in/locations/vadodara/'
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://honeywellhydraulics.in/' },
          { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://honeywellhydraulics.in/locations/' },
          { '@type': 'ListItem', position: 3, name: 'Vadodara', item: 'https://honeywellhydraulics.in/locations/vadodara/' }
        ]
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Can you manufacture stainless steel hydraulic cylinders for chemical plants in Nandesari?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we manufacture cylinders with stainless steel 304/316 rods and barrels specifically for corrosive chemical environments. We also utilize Viton and PTFE composite seals rated to 200°C to prevent chemical degradation of the internal components.' } },
          { '@type': 'Question', name: 'Do you supply hydraulic power packs to Makarpura GIDC?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We design and assemble custom hydraulic power packs for the heavy engineering and equipment manufacturing firms located in Makarpura GIDC, with rapid delivery from our Kathwada facility — approximately 2 hours from Vadodara.' } },
          { '@type': 'Question', name: 'How do you protect hydraulic cylinders from corrosion in humid industrial environments?', acceptedAnswer: { '@type': 'Answer', text: 'For non-stainless applications in harsh environments, we apply heavy-duty marine-grade epoxy coatings to the cylinder exterior and utilize extra-thick hard chrome plating (25+ microns) on the piston rods. This combination drastically extends lifespan even in acidic or high-humidity environments.' } },
          { '@type': 'Question', name: 'Do you supply hydraulic equipment for transformer manufacturing in Waghodia?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we manufacture precision hydraulic press cylinders and power packs used in transformer core lamination stacking, coil winding tensioners, and tank fabrication presses for transformer manufacturers in Waghodia GIDC and across the Vadodara region.' } },
          { '@type': 'Question', name: 'How quickly can you deliver replacement hydraulic cylinders to Vadodara?', acceptedAnswer: { '@type': 'Answer', text: 'Our Kathwada GIDC facility in Ahmedabad is approximately 2 hours from Vadodara via the expressway. For critical breakdowns, we can dispatch emergency replacement parts the same day. We also keep your custom engineering drawings on file for rapid re-manufacturing.' } }
        ]
      }
    ]
  },
  hero: {
    overline: 'SERVING VADODARA & CENTRAL GUJARAT',
    title: 'Hydraulic Cylinder Manufacturer for Vadodara',
    subtitle: 'Vadodara (Baroda) is Gujarat\'s powerhouse for chemical processing, transformer manufacturing, and heavy engineering. Honeywell Hydraulics supplies specialized, corrosion-resistant hydraulic cylinders and custom power packs to plants across Makarpura, Nandesari, Por-Ramangamdi, Waghodia, and Savli GIDCs — ensuring uninterrupted operation in the harshest environments.',
    trustChips: ['Chemical Resistant Designs', 'Stainless Steel Options', '~2 Hours from Our Factory'],
    image: {
      src: '/images/locations/vadodara-chemical-hydraulics.jpg',
      alt: 'Corrosion resistant hydraulic cylinders for Vadodara chemical processing',
    },
    ctas: {
      primary: { label: 'REQUEST A CUSTOM QUOTE', href: '/request-quote/#quote-form' },
      secondary: { label: 'VIEW CHEMICAL INDUSTRY SOLUTIONS', href: '/products/hydraulic-cylinders/' },
    },
  },
  benefits: {
    title: 'Engineered for Vadodara\'s Processing Hubs',
    description: 'Generic hydraulics fail rapidly in Vadodara\'s chemical, pharmaceutical, and heavy engineering environments. We engineer each cylinder for your specific operating conditions.',
    items: [
      {
        id: 'corrosion-defense',
        title: 'Advanced Corrosion Defense',
        description: 'We utilize stainless steel 304/316 components, specialized marine-grade epoxy coatings, and heavy hard-chrome plating (25+ microns) to protect your cylinders from aggressive chemical fumes, acidic environments, and high humidity.',
      },
      {
        id: 'chemical-seals',
        title: 'Chemical-Resistant Sealing',
        description: 'Standard nitrile seals melt in chemical plants. We employ high-temperature Viton seals rated to 200°C and PTFE composite seals that maintain integrity regardless of ambient chemical exposure — proven in Nandesari GIDC plants.',
      },
      {
        id: 'fast-transit',
        title: 'Rapid Deployment from Nearby',
        description: 'Located just 2 hours away in Kathwada GIDC Ahmedabad, we provide dramatically faster delivery and on-site engineering support compared to suppliers in Maharashtra or South India.',
      },
    ],
  },
  products: {
    title: 'Hydraulic Equipment Supplied to Vadodara',
    description: 'Rugged fluid power components built for chemical processing, pharmaceuticals, transformer manufacturing, and heavy engineering. All manufactured and 100% pressure-tested at our facility.',
    items: [
      {
        id: 'chemical-cylinders',
        title: 'Chemical-Resistant Cylinders',
        description: 'Custom cylinders featuring SS316 rods, marine-grade epoxy coatings, and high-temperature Viton seals for Nandesari\'s toughest chemical environments.',
        href: '/products/hydraulic-cylinders/',
      },
      {
        id: 'power-packs',
        title: 'Heavy-Duty Power Packs',
        description: 'Hydraulic power units with fully sealed reservoirs and high-flow systems for the heavy presses and fabrication equipment used in Makarpura and Por GIDC.',
        href: '/products/hydraulic-power-packs/',
      },
      {
        id: 'manifolds',
        title: 'Stainless Steel Manifolds',
        description: 'Custom CNC-machined manifold blocks designed to consolidate complex circuits without corroding in washdown and chemical processing environments.',
        href: '/products/manifold-blocks/',
      },
    ],
  },
  industries: {
    title: 'Supporting Vadodara\'s Core Industrial Sectors',
    description: 'Vadodara\'s economy spans chemicals, heavy engineering, transformers, pharmaceuticals, and oil and gas. We provide specialized hydraulic solutions for each sector\'s unique requirements.',
    items: [
      {
        id: 'chemical',
        title: 'Chemical & Petrochemical (Nandesari)',
        description: 'Corrosion-resistant hydraulic systems with SS316 rods and Viton seals for valve actuation, reactor mixing, and processing equipment in hazardous chemical environments.',
        href: '/products/hydraulic-cylinders/',
      },
      {
        id: 'heavy-engineering',
        title: 'Heavy Engineering & Fabrication (Makarpura)',
        description: 'Large-bore, high-tonnage welded hydraulic cylinders rated up to 350 Bar for heavy presses, fabrication equipment, and structural steel machining in Makarpura GIDC.',
        href: '/products/hydraulic-cylinders/',
      },
      {
        id: 'transformer',
        title: 'Transformer Manufacturing (Waghodia)',
        description: 'Precision hydraulic press cylinders for transformer core lamination stacking, coil winding tensioners, and tank fabrication presses serving Waghodia\'s transformer manufacturing hub.',
        href: '/products/hydraulic-power-packs/',
      },
      {
        id: 'pharma',
        title: 'Pharmaceuticals (Savli)',
        description: 'Clean, washdown-ready hydraulic components designed for the stringent hygiene requirements of pharmaceutical packaging, tableting, and filling machinery.',
        href: '/products/hydraulic-cylinders/',
      },
      {
        id: 'oil-gas',
        title: 'Oil & Gas Equipment (Por-Ramangamdi)',
        description: 'Heavy-duty hydraulic cylinders and test benches for valve testing, pipeline equipment, and oil and gas auxiliary systems manufactured in the Por-Ramangamdi industrial belt.',
        href: '/products/hydraulic-cylinders/',
      },
      {
        id: 'automotive',
        title: 'Automotive & Ancillary (Halol Corridor)',
        description: 'High-cycle press cylinders and automated power packs for automotive component stamping, die casting, and assembly line equipment along the Vadodara-Halol highway.',
        href: '/products/hydraulic-power-packs/',
      },
    ],
  },
  caseStudy: {
    title: 'Valve Actuation Upgrade in Nandesari GIDC',
    challenge: 'A chemical processing plant in Nandesari was replacing their standard hydraulic cylinders on mixing vat valve actuators every three months. The acidic ambient fumes were corroding the piston rods and destroying the seals, causing repeated unplanned shutdowns.',
    solution: 'We engineered custom replacement cylinders using Stainless Steel 316 for the piston rods, high-temperature Viton seals, and a heavy-duty chemical-resistant epoxy coating on the barrel exteriors. We also integrated a sealed breathing system to prevent moisture ingress.',
    resultStat: '4x',
    resultLabel: 'Increase in cylinder lifespan (now exceeding 12 months)',
  },
  serviceAreas: {
    title: 'Service Areas & GIDC Coverage in Vadodara',
    description: 'We rapidly dispatch engineered hydraulic components from our Kathwada GIDC facility to all major industrial hubs across the Vadodara region — approximately 2 hours via the expressway.',
    items: [
      { id: 'makarpura', city: 'Makarpura GIDC', description: 'Heavy-duty cylinders and power packs for one of Gujarat\'s largest and oldest engineering and fabrication estates.' },
      { id: 'nandesari', city: 'Nandesari GIDC', description: 'Specialized corrosion-resistant hydraulic solutions for the chemical, petrochemical, and dye manufacturing sectors.' },
      { id: 'por', city: 'Por-Ramangamdi GIDC', description: 'Robust hydraulic systems for heavy engineering, electrical products, oil and gas equipment, and plastics manufacturing.' },
      { id: 'waghodia', city: 'Waghodia GIDC', description: 'Precision hydraulic press cylinders and power packs for Vadodara\'s transformer and electrical switchgear manufacturing hub.' },
      { id: 'savli', city: 'Savli GIDC', description: 'Clean hydraulic components for pharmaceutical, biotechnology, and emerging electric vehicle manufacturing operations.' },
      { id: 'halol', city: 'Halol & Kalol', description: 'High-cycle hydraulic equipment for the automotive assembly and ancillary manufacturing corridor along the Vadodara-Halol highway.' },
      { id: 'padra', city: 'Padra & Jambusar', description: 'General engineering and industrial hydraulic support for manufacturing units in the surrounding Vadodara district.' },
    ],
  },
  trustFactors: {
    title: 'Trusted by Vadodara\'s Processing Plants',
    description: '"The acidic environment in our Nandesari plant eats standard hydraulic equipment alive. Honeywell Hydraulics designed stainless steel cylinders with Viton seals that have outlasted our previous supplier\'s cylinders by four times. They understand chemical environments." — Maintenance Head, Chemical Processing Plant, Vadodara.',
    items: [
      { id: 'tf1', title: 'Environmental Engineering', description: 'We don\'t sell generic cylinders to chemical plants. We engineer solutions that survive your specific ambient environment — temperature, humidity, chemical exposure, and pressure.' },
      { id: 'tf2', title: 'Material Traceability', description: 'We provide EN 10204 Type 3.1 material certificates for all stainless steel and specialized components. Full traceability from raw material to finished cylinder.' },
      { id: 'tf3', title: 'Reliable Same-Region Supply', description: 'Located just 2 hours away in Ahmedabad, we ensure your critical replacement parts arrive before production halts. Emergency same-day dispatch available.' },
    ],
  },
  faqs: [
    { question: 'Can you manufacture stainless steel hydraulic cylinders for chemical plants in Nandesari?', answer: 'Yes, we manufacture cylinders with stainless steel 304/316 rods and barrels specifically for corrosive chemical environments. We also utilize Viton and PTFE composite seals rated to 200°C to prevent chemical degradation of the internal components.' },
    { question: 'Do you supply hydraulic power packs to Makarpura GIDC?', answer: 'Absolutely. We design and assemble custom hydraulic power packs for the heavy engineering and equipment manufacturing firms located in Makarpura GIDC, with rapid delivery from our Kathwada facility — approximately 2 hours from Vadodara.' },
    { question: 'How do you protect hydraulic cylinders from corrosion in humid industrial environments?', answer: 'For non-stainless applications in harsh environments, we apply heavy-duty marine-grade epoxy coatings to the cylinder exterior and utilize extra-thick hard chrome plating (25+ microns) on the piston rods. This combination drastically extends lifespan even in acidic or high-humidity environments.' },
    { question: 'Do you supply hydraulic equipment for transformer manufacturing in Waghodia?', answer: 'Yes, we manufacture precision hydraulic press cylinders and power packs used in transformer core lamination stacking, coil winding tensioners, and tank fabrication presses for transformer manufacturers in Waghodia GIDC and across the Vadodara region.' },
    { question: 'How quickly can you deliver replacement hydraulic cylinders to Vadodara?', answer: 'Our Kathwada GIDC facility in Ahmedabad is approximately 2 hours from Vadodara via the expressway. For critical breakdowns, we can dispatch emergency replacement parts the same day. We also keep your custom engineering drawings on file for rapid re-manufacturing.' },
  ],
  cta: {
    title: 'Upgrade Your Plant\'s Hydraulics Today',
    description: 'Stop replacing corroded cylinders every few months. Partner with Honeywell Hydraulics for custom-engineered, chemical-resistant solutions that survive Vadodara\'s toughest industrial environments.',
    phone: '+91 9924343873',
    email: 'sales@honeywellhydraulics.com',
    address: 'B-18, Suryam Plaza Estate, Near Nilkanth Estate, Road no. 15, Kathwada GIDC, Ahmedabad, Gujarat 382430',
    serviceAreas: 'Serving Makarpura, Nandesari, Por-Ramangamdi, Waghodia, Savli, Halol, and the entire Vadodara industrial region.',
  },
};
