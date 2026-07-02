import { LocationPageData } from './gujarat';

export const injectionMouldingData: LocationPageData = {
  seo: {
    title: 'Injection Moulding Hydraulic Cylinders Gujarat | Honeywell',
    description: 'Specialized hydraulic cylinders for plastic injection moulding machines in Ahmedabad, Sanand & Halol GIDC. High-speed core pull cylinders & custom power packs.',
    canonical: 'https://www.honeywellhydraulics.com/locations/gujarat/injection-moulding-cylinders/',
    openGraph: {
      title: 'Injection Moulding Hydraulic Cylinders & Power Packs in Gujarat',
      description: 'Specialized hydraulic cylinders for plastic injection moulding machines in Ahmedabad, Sanand & Halol GIDC. High-speed core pull cylinders & custom power packs.',
      url: 'https://www.honeywellhydraulics.com/locations/gujarat/injection-moulding-cylinders/',
      images: [
        {
          url: '/images/locations/injection-moulding-cylinders-gujarat.jpg',
          width: 1200,
          height: 630,
          alt: 'Hydraulic cylinders for plastic injection moulding in Gujarat',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Injection Moulding Hydraulic Cylinders Gujarat | Honeywell',
      description: 'Specialized hydraulic cylinders for plastic injection moulding machines in Ahmedabad, Sanand & Halol GIDC.',
      images: ['/images/locations/injection-moulding-cylinders-gujarat.jpg'],
    },
    keywords: [
      'injection moulding hydraulic cylinders gujarat',
      'core pull cylinders ahmedabad',
      'hydraulic power pack for injection moulding',
      'plastic processing hydraulics gujarat',
      'hydraulic cylinder manufacturer sanand'
    ],
  },
  schema: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://www.honeywellhydraulics.com/locations/gujarat/injection-moulding-cylinders/#service',
        serviceType: 'Injection Moulding Hydraulic Solutions',
        provider: {
          '@type': 'ManufacturingBusiness',
          name: 'Honeywell Hydraulics',
          telephone: '+91-9924343873',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'B-18, Suryam Plaza Estate, Kathwada GIDC',
            addressLocality: 'Ahmedabad',
            addressRegion: 'Gujarat',
            postalCode: '382430',
            addressCountry: 'IN'
          }
        },
        areaServed: {
          '@type': 'State',
          name: 'Gujarat'
        },
        description: 'High-speed core pull cylinders and regenerative hydraulic power packs designed specifically for the plastic injection moulding industry in Gujarat.'
      },
      {
        '@type': 'WebPage',
        '@id': 'https://www.honeywellhydraulics.com/locations/gujarat/injection-moulding-cylinders/',
        name: 'Injection Moulding Hydraulic Cylinders in Gujarat | Honeywell',
        url: 'https://www.honeywellhydraulics.com/locations/gujarat/injection-moulding-cylinders/'
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.honeywellhydraulics.com/' },
          { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://www.honeywellhydraulics.com/locations/' },
          { '@type': 'ListItem', position: 3, name: 'Gujarat', item: 'https://www.honeywellhydraulics.com/locations/gujarat/' },
          { '@type': 'ListItem', position: 4, name: 'Injection Moulding Cylinders', item: 'https://www.honeywellhydraulics.com/locations/gujarat/injection-moulding-cylinders/' }
        ]
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Can you manufacture replacement core-pull cylinders for imported injection moulding machines?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We routinely reverse-engineer and manufacture drop-in replacement core-pull cylinders for imported machinery. We upgrade the internal sealing architecture to handle higher temperatures and faster cycle speeds, ensuring compatibility with your existing mold setups.' } },
          { '@type': 'Question', name: 'How do your hydraulic power packs reduce cycle times in plastic processing?', acceptedAnswer: { '@type': 'Answer', text: 'We design custom high-low hydraulic power packs utilizing regenerative circuits. This allows for a rapid, low-pressure approach during mold closing, seamlessly transitioning to extreme high-pressure clamping only when necessary, shaving critical seconds off every production cycle.' } },
          { '@type': 'Question', name: 'Do you provide local support for injection moulding plants in Halol and Sanand?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Based in Kathwada, Ahmedabad, we provide rapid, factory-direct engineering support and emergency hydraulic repairs to plastic manufacturers across Sanand, Halol, and Odhav GIDCs.' } }
        ]
      }
    ]
  },
  hero: {
    overline: 'PLASTICS INDUSTRY HYDRAULICS IN GUJARAT',
    title: 'Injection Moulding Hydraulic Cylinders in Gujarat',
    subtitle: 'Gujarat\'s plastics industry requires absolute precision and rapid cycle times. Honeywell Hydraulics engineers specialized, high-speed core pull cylinders and regenerative power packs for injection moulding manufacturers across Ahmedabad, Sanand, and Halol GIDC. We eliminate mold flashing and reduce your cycle times.',
    trustChips: ['High-Speed Core Pulls', 'Regenerative Circuits', 'Serving Sanand & Halol'],
    image: {
      src: '/images/locations/injection-moulding-cylinders-gujarat.jpg',
      alt: 'Hydraulic cylinders operating in a plastic injection moulding machine',
    },
    ctas: {
      primary: { label: 'REQUEST A QUOTE FOR PLASTICS', href: '/request-quote/' },
      secondary: { label: 'VIEW HYDRAULIC POWER PACKS', href: '/products/hydraulic-power-packs/' },
    },
  },
  benefits: {
    title: 'Engineered for High-Speed Plastic Processing',
    description: 'Generic cylinders cause mold flashing and slow production. Our hydraulics are built specifically for the demands of the plastics sector.',
    items: [
      {
        id: 'fast-cycle',
        title: 'Reduced Cycle Times',
        description: 'Through the use of regenerative hydraulic circuits and high-flow proportional valves, our power packs drastically increase mold open/close speeds without sacrificing clamping force.',
      },
      {
        id: 'precision-hold',
        title: 'Zero Mold Flashing',
        description: 'We utilize zero-leakage piston seals and precision-honed barrels to ensure clamping cylinders maintain absolute, unwavering pressure during the injection phase.',
      },
      {
        id: 'thermal-stability',
        title: 'High-Temperature Resilience',
        description: 'Injection moulding environments are hot. We equip our core-pull cylinders with high-temperature Viton seals to prevent premature degradation caused by radiant mold heat.',
      },
    ],
  },
  products: {
    title: 'Hydraulic Equipment for Injection Moulding',
    description: 'Precision components designed to integrate seamlessly into your plastic processing machinery.',
    items: [
      {
        id: 'core-pull',
        title: 'Core Pull Cylinders',
        description: 'Compact, high-speed hydraulic cylinders designed for rapid core insertion and extraction in complex mold setups.',
        href: '/products/hydraulic-cylinders/',
      },
      {
        id: 'high-low-packs',
        title: 'High-Low Power Packs',
        description: 'Custom hydraulic power units engineered with dual pumps for rapid approach and high-pressure clamping.',
        href: '/products/hydraulic-power-packs/',
      },
      {
        id: 'manifold-blocks',
        title: 'CETOP Manifold Blocks',
        description: 'Consolidated valve blocks to minimize hosing, reduce pressure drops, and increase system response times.',
        href: '/products/manifold-blocks/',
      },
    ],
  },
  industries: {
    title: 'Supporting Gujarat\'s Plastics Hubs',
    description: 'We supply specialized hydraulic actuation to the major plastic processing zones across the state.',
    items: [
      {
        id: 'automotive-plastics',
        title: 'Automotive Plastics (Sanand)',
        description: 'High-tonnage clamping cylinders for large-scale injection moulding of automotive bumpers and dashboard components.',
        href: '/locations/gujarat/ahmedabad/',
      },
      {
        id: 'consumer-goods',
        title: 'Consumer Goods (Halol & Odhav)',
        description: 'High-speed core pull cylinders for rapid, continuous production of consumer plastic goods and packaging.',
        href: '/industries/special-purpose-machines/',
      },
      {
        id: 'extrusion',
        title: 'Extrusion & Blow Moulding',
        description: 'Reliable hydraulic power packs and actuation systems for continuous plastic extrusion lines.',
        href: '/products/hydraulic-power-packs/',
      },
    ],
  },
  caseStudy: {
    title: 'Core-Pull Cylinder Upgrade in Sanand GIDC',
    challenge: 'An automotive plastics manufacturer in Sanand was struggling with slow cycle times and frequent seal failures on their core-pull cylinders due to high radiant heat from the molds.',
    solution: 'We reverse-engineered their setup and manufactured custom tie-rod cylinders utilizing high-temperature Viton seals and polished hard-chrome rods, designed to withstand the thermal load without leaking.',
    resultStat: '15%',
    resultLabel: 'Increase in daily production volume due to faster cycling',
  },
  serviceAreas: {
    title: 'Serving the Plastics Industry Across Gujarat',
    description: 'Based in Ahmedabad, we provide rapid factory-direct support to injection moulding plants statewide.',
    items: [
      { id: 'sanand', city: 'Sanand GIDC', description: 'Supplying heavy-duty hydraulics to automotive plastic component manufacturers.' },
      { id: 'halol', city: 'Halol GIDC', description: 'Delivering high-speed core pull cylinders and power packs to consumer goods producers.' },
      { id: 'odhav', city: 'Odhav & Kathwada', description: 'Immediate local support and custom manifold design for Ahmedabad\'s plastic sector.' },
      { id: 'vapi', city: 'Vapi & Daman', description: 'Supporting the massive plastics and packaging industries in South Gujarat.' },
    ],
  },
  trustFactors: {
    title: 'Trusted by Gujarat\'s Plastic Manufacturers',
    description: '"Mold flashing was costing us thousands in rejected parts. Honeywell Hydraulics analyzed our machine, identified that the clamp cylinder was losing pressure internally, and built a replacement that held perfectly. Our rejection rate dropped to zero." — Plant Manager, Plastics Manufacturing, Halol GIDC.',
    items: [
      { id: 'tf1', title: 'Application Expertise', description: 'We understand the specific pressure and speed requirements of injection, clamping, and ejection phases.' },
      { id: 'tf2', title: 'Reverse Engineering', description: 'We can manufacture exact, upgraded replacements for failing cylinders on imported machinery.' },
      { id: 'tf3', title: 'Local Accountability', description: 'As a local Gujarat manufacturer, we provide immediate on-site support when your production is down.' },
    ],
  },
  faqs: [
    { question: 'Can you manufacture replacement core-pull cylinders for imported injection moulding machines?', answer: 'Yes. We routinely reverse-engineer and manufacture drop-in replacement core-pull cylinders for imported machinery. We upgrade the internal sealing architecture to handle higher temperatures and faster cycle speeds, ensuring compatibility with your existing mold setups.' },
    { question: 'How do your hydraulic power packs reduce cycle times in plastic processing?', answer: 'We design custom high-low hydraulic power packs utilizing regenerative circuits. This allows for a rapid, low-pressure approach during mold closing, seamlessly transitioning to extreme high-pressure clamping only when necessary, shaving critical seconds off every production cycle.' },
    { question: 'Do you provide local support for injection moulding plants in Halol and Sanand?', answer: 'Absolutely. Based in Kathwada, Ahmedabad, we provide rapid, factory-direct engineering support and emergency hydraulic repairs to plastic manufacturers across Sanand, Halol, and Odhav GIDCs.' }
  ],
  cta: {
    title: 'Optimize Your Injection Moulding Cycle Times',
    description: 'Stop losing production volume to slow, leaking cylinders. Upgrade to precision-engineered hydraulic solutions designed specifically for the plastics industry.',
    phone: '+91 9924343873',
    email: 'sales@honeywellhydraulics.com',
    address: 'B-18, Suryam Plaza Estate, Kathwada GIDC, Ahmedabad (Serving all Gujarat Plastics Hubs)',
    serviceAreas: 'Serving Sanand, Halol, Odhav, Kathwada, Vapi, and Daman.',
  },
};
