import { LocationPageData } from './gujarat';

export const morbiData: LocationPageData = {
  seo: {
    title: 'Hydraulic Cylinder Manufacturer Morbi | Ceramic Press Hydraulics',
    description: 'Leading hydraulic cylinder manufacturer for Morbi\'s ceramic tile industry. High-tonnage press cylinders for tile moulding, sanitaryware & vitrified production.',
    canonical: 'https://honeywellhydraulics.in/locations/morbi/',
    openGraph: {
      title: 'Hydraulic Cylinders for Morbi\'s Ceramic Tile Press Industry',
      description: 'Leading hydraulic cylinder manufacturer for Morbi\'s ceramic tile industry. High-tonnage press cylinders for tile moulding, sanitaryware & vitrified production.',
      url: 'https://honeywellhydraulics.in/locations/morbi/',
      images: [
        {
          url: '/images/locations/morbi-ceramic-press-hydraulics.jpg',
          width: 1200,
          height: 630,
          alt: 'Hydraulic press cylinders for ceramic tile manufacturing in Morbi Gujarat',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Hydraulic Cylinder Manufacturer Morbi | Ceramic Press Hydraulics',
      description: 'High-tonnage press cylinders for Morbi\'s ceramic tile industry. Tile moulding & sanitaryware.',
      images: ['/images/locations/morbi-ceramic-press-hydraulics.jpg'],
    },
    keywords: [
      'hydraulic cylinder manufacturer in Morbi',
      'hydraulic cylinder manufacturer Morbi',
      'hydraulic press cylinder Morbi',
      'ceramic tile press hydraulic Morbi',
      'hydraulic power pack manufacturer Morbi',
      'tile press hydraulic cylinder Gujarat',
      'hydraulic cylinder supplier Morbi',
      'hydraulic cylinder repair Morbi',
    ],
  },
  schema: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://honeywellhydraulics.in/locations/morbi/#service',
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
          name: 'Morbi',
          containedInPlace: {
            '@type': 'State',
            name: 'Gujarat'
          }
        },
        description: 'High-tonnage hydraulic press cylinders and power packs engineered for ceramic tile moulding, sanitaryware production, and vitrified tile manufacturing across Morbi — India\'s Ceramic Capital producing 80-90% of India\'s ceramic exports.'
      },
      {
        '@type': 'WebPage',
        '@id': 'https://honeywellhydraulics.in/locations/morbi/',
        name: 'Hydraulic Cylinder Manufacturer in Morbi | Honeywell Hydraulics',
        url: 'https://honeywellhydraulics.in/locations/morbi/'
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://honeywellhydraulics.in/' },
          { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://honeywellhydraulics.in/locations/' },
          { '@type': 'ListItem', position: 3, name: 'Morbi', item: 'https://honeywellhydraulics.in/locations/morbi/' }
        ]
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Can you manufacture hydraulic press cylinders for ceramic tile moulding in Morbi?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we specialize in high-tonnage hydraulic press cylinders for ceramic tile moulding presses. Our cylinders are engineered with hardened EN19/EN24 alloy steel rods and reinforced barrels to deliver consistent, uniform pressing force across millions of tile moulding cycles.' } },
          { '@type': 'Question', name: 'How do your cylinders handle the heat near ceramic kilns?', acceptedAnswer: { '@type': 'Answer', text: 'For kiln-adjacent installations, we use high-temperature Viton seals rated to 200°C and apply heat-reflective coatings on external surfaces. We also design the hydraulic system with adequate fluid cooling capacity to maintain optimal operating temperature despite ambient kiln heat.' } },
          { '@type': 'Question', name: 'Do you supply hydraulic power packs for tile press lines in Morbi?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We design custom hydraulic power packs for ceramic tile press lines, including high-low pump circuits for rapid press approach and slow, high-force moulding strokes. Our power packs are built for 24/7 continuous operation with robust cooling and filtration systems.' } },
          { '@type': 'Question', name: 'Can you provide replacement press cylinders quickly to minimize production downtime?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, our Kathwada GIDC facility is approximately 3 hours from Morbi. We keep engineering drawings on file for all our Morbi customers, allowing us to rapidly manufacture identical replacement cylinders and dispatch them within 1-2 days.' } },
          { '@type': 'Question', name: 'Do you repair and re-hone hydraulic press cylinders for ceramic manufacturers?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we provide complete press cylinder repair services — barrel re-honing to Ra 0.2-0.4 µm finish, rod re-chroming, seal replacement, and full teardown and rebuild. This is often a cost-effective way to restore press performance without a full cylinder replacement.' } }
        ]
      }
    ]
  },
  hero: {
    overline: 'SERVING MORBI — INDIA\'S CERAMIC CAPITAL',
    title: 'Hydraulic Cylinder Manufacturer for Morbi',
    subtitle: 'Morbi produces 80-90% of India\'s ceramic exports from over 1,100 manufacturing units. Every tile starts with a hydraulic press. Honeywell Hydraulics engineers high-tonnage press cylinders and power packs that deliver the consistent, extreme-force moulding performance Morbi\'s ceramic tile, vitrified, and sanitaryware manufacturers demand.',
    trustChips: ['Ceramic Press Expertise', 'High-Tonnage Cylinders', '~3 Hours from Our Factory'],
    image: {
      src: '/images/locations/morbi-ceramic-press-hydraulics.jpg',
      alt: 'Hydraulic press cylinders for ceramic tile moulding in Morbi Gujarat',
    },
    ctas: {
      primary: { label: 'GET A QUOTE FOR PRESS CYLINDERS', href: '/request-quote/#quote-form' },
      secondary: { label: 'VIEW PRESS CYLINDER RANGE', href: '/products/hydraulic-cylinders/' },
    },
  },
  benefits: {
    title: 'Engineered for Morbi\'s Ceramic Press Demands',
    description: 'Ceramic tile moulding demands extreme pressing force, absolute consistency, and continuous 24/7 operation. We engineer hydraulic press systems specifically for these requirements.',
    items: [
      {
        id: 'press-force',
        title: 'Consistent High-Tonnage Pressing',
        description: 'Our press cylinders deliver uniform moulding force across every cycle, ensuring consistent tile density and dimensional accuracy. Hardened EN19/EN24 rods and reinforced barrels handle extreme compression without deformation.',
      },
      {
        id: 'heat-resistance',
        title: 'Heat-Resistant Design',
        description: 'Ceramic production involves kiln temperatures exceeding 1,000°C. Our cylinders use high-temperature Viton seals rated to 200°C and heat-reflective coatings to perform reliably in kiln-adjacent installations.',
      },
      {
        id: 'continuous-duty',
        title: 'Built for 24/7 Continuous Operation',
        description: 'Morbi\'s tile factories run around the clock. Our cylinders and power packs are engineered for millions of pressing cycles with robust cooling, heavy-duty filtration, and extended seal life.',
      },
    ],
  },
  products: {
    title: 'Hydraulic Equipment for Ceramic Manufacturing',
    description: 'Purpose-built fluid power components for the demanding ceramic tile, sanitaryware, and vitrified manufacturing processes. All manufactured and 100% pressure-tested.',
    items: [
      {
        id: 'press-cylinders',
        title: 'High-Tonnage Press Cylinders',
        description: 'Hardened steel cylinders rated up to 350 Bar for ceramic tile moulding presses. Consistent force delivery over millions of pressing cycles.',
        href: '/products/hydraulic-cylinders/',
      },
      {
        id: 'power-packs',
        title: 'Press Line Power Packs',
        description: 'High-low pump circuit power packs for rapid approach and slow, high-force moulding. Built for 24/7 continuous ceramic production.',
        href: '/products/hydraulic-power-packs/',
      },
      {
        id: 'manifolds',
        title: 'Press Control Manifold Blocks',
        description: 'CNC-machined manifold blocks for multi-cylinder press systems, providing precise sequence control and reducing leak points.',
        href: '/products/manifold-blocks/',
      },
    ],
  },
  industries: {
    title: 'Powering Morbi\'s Ceramic Manufacturing Ecosystem',
    description: 'From wall tiles to sanitaryware, every ceramic product starts with a hydraulic press. We supply the full range of hydraulic equipment across Morbi\'s ceramic value chain.',
    items: [
      {
        id: 'wall-floor-tiles',
        title: 'Wall & Floor Tile Manufacturing',
        description: 'High-tonnage press cylinders for the moulding presses that form the vast majority of Morbi\'s production — wall tiles, floor tiles, and glazed tiles for domestic and export markets.',
        href: '/products/hydraulic-cylinders/',
      },
      {
        id: 'vitrified',
        title: 'Vitrified & Porcelain Tile Production',
        description: 'Extra-high-pressure press cylinders for vitrified tile manufacturing, where superior moulding force is required to achieve the dense, low-porosity structure of vitrified and porcelain tiles.',
        href: '/products/hydraulic-cylinders/',
      },
      {
        id: 'sanitaryware',
        title: 'Sanitaryware Manufacturing',
        description: 'Precision hydraulic press cylinders and mould clamping systems for sanitaryware production, including WC bowls, wash basins, and ceramic fittings.',
        href: '/products/hydraulic-power-packs/',
      },
      {
        id: 'roofing',
        title: 'Roofing Tiles & Technical Ceramics',
        description: 'Robust press cylinders for roofing tile moulding and technical ceramic product manufacturing in Morbi\'s diversifying ceramic ecosystem.',
        href: '/products/hydraulic-cylinders/',
      },
      {
        id: 'material-handling',
        title: 'Kiln Loading & Material Handling',
        description: 'Heavy-duty hydraulic lifting cylinders, pusher systems, and material handling equipment for kiln loading, tile stacking, and warehouse automation.',
        href: '/products/hydraulic-power-packs/',
      },
      {
        id: 'machinery-oem',
        title: 'Ceramic Machinery OEMs',
        description: 'Supplying hydraulic components to Morbi\'s local ceramic machinery manufacturers — press builders, kiln equipment makers, and automation solution providers.',
        href: '/products/manifold-blocks/',
      },
    ],
  },
  caseStudy: {
    title: 'Tile Press Cylinder Upgrade for Vitrified Tile Line',
    challenge: 'A large vitrified tile manufacturer in Morbi was experiencing inconsistent tile density due to pressure drop in their ageing press cylinders. The resulting dimensional variations were causing a 12% rejection rate at the quality inspection stage.',
    solution: 'We engineered drop-in replacement press cylinders with precision-honed barrels (Ra 0.2 µm), hardened EN24 alloy steel rods, and low-friction PTFE composite seals that maintain consistent pressing force. We also supplied a new high-low power pack with proportional pressure control for precise moulding force regulation.',
    resultStat: '2%',
    resultLabel: 'Drop in tile rejection rate (down from 12%)',
  },
  serviceAreas: {
    title: 'Service Areas & Coverage in Morbi Region',
    description: 'We supply high-tonnage press cylinders and hydraulic equipment to ceramic manufacturers across the Morbi-Wankaner-Halvad ceramic belt — approximately 3 hours from our Kathwada GIDC facility.',
    items: [
      { id: 'morbi-city', city: 'Morbi City & Industrial Area', description: 'India\'s Ceramic Capital — high-tonnage press cylinders for the massive concentration of wall tile, floor tile, and glazed tile manufacturers.' },
      { id: 'morbi-gidc', city: 'Morbi GIDC', description: 'Purpose-built hydraulic press systems for the organized ceramic manufacturing units in Morbi\'s GIDC estate.' },
      { id: 'wankaner', city: 'Wankaner', description: 'Press cylinders and power packs for the ceramic and engineering units in the Wankaner industrial cluster.' },
      { id: 'halvad', city: 'Halvad & Dhrangadhra', description: 'Hydraulic equipment for ceramic production, salt processing, and general engineering in the Surendranagar district.' },
      { id: 'tankara', city: 'Tankara & Maliya', description: 'Supporting the expanding ceramic tile manufacturing capacity in Morbi\'s satellite industrial areas.' },
      { id: 'rajkot-link', city: 'Rajkot (Adjacent Hub)', description: 'Connecting Morbi\'s ceramic industry with our Rajkot service area for comprehensive Saurashtra coverage.' },
      { id: 'surendranagar', city: 'Surendranagar', description: 'General industrial hydraulic supply for the manufacturing and processing units in the wider Surendranagar district.' },
    ],
  },
  trustFactors: {
    title: 'Trusted by Morbi\'s Ceramic Manufacturers',
    description: '"Tile quality starts with pressing consistency. Since we switched to Honeywell Hydraulics press cylinders, our tile density uniformity has improved dramatically and our rejection rate dropped from 12% to under 2%. Their understanding of ceramic press requirements is unmatched." — Production Manager, Vitrified Tile Factory, Morbi.',
    items: [
      { id: 'tf1', title: 'Ceramic Press Expertise', description: 'We understand the specific tonnage, speed, and cycle requirements of ceramic tile presses — from standard wall tiles to high-density vitrified production.' },
      { id: 'tf2', title: '100% Pressure Tested', description: 'Every press cylinder is hydrostatically tested at 1.5x rated working pressure. EN 10204 Type 3.1 material certificates provided for full traceability.' },
      { id: 'tf3', title: 'Rapid Morbi Delivery', description: 'Approximately 3 hours from our Kathwada facility. Drawings kept on file for rapid replacement manufacturing when you need it most.' },
    ],
  },
  faqs: [
    { question: 'Can you manufacture hydraulic press cylinders for ceramic tile moulding in Morbi?', answer: 'Yes, we specialize in high-tonnage hydraulic press cylinders for ceramic tile moulding presses. Our cylinders are engineered with hardened EN19/EN24 alloy steel rods and reinforced barrels to deliver consistent, uniform pressing force across millions of tile moulding cycles.' },
    { question: 'How do your cylinders handle the heat near ceramic kilns?', answer: 'For kiln-adjacent installations, we use high-temperature Viton seals rated to 200°C and apply heat-reflective coatings on external surfaces. We also design the hydraulic system with adequate fluid cooling capacity to maintain optimal operating temperature despite ambient kiln heat.' },
    { question: 'Do you supply hydraulic power packs for tile press lines in Morbi?', answer: 'Absolutely. We design custom hydraulic power packs for ceramic tile press lines, including high-low pump circuits for rapid press approach and slow, high-force moulding strokes. Our power packs are built for 24/7 continuous operation with robust cooling and filtration systems.' },
    { question: 'Can you provide replacement press cylinders quickly to minimize production downtime?', answer: 'Yes, our Kathwada GIDC facility is approximately 3 hours from Morbi. We keep engineering drawings on file for all our Morbi customers, allowing us to rapidly manufacture identical replacement cylinders and dispatch them within 1-2 days.' },
    { question: 'Do you repair and re-hone hydraulic press cylinders for ceramic manufacturers?', answer: 'Yes, we provide complete press cylinder repair services — barrel re-honing to Ra 0.2-0.4 µm finish, rod re-chroming, seal replacement, and full teardown and rebuild. This is often a cost-effective way to restore press performance without a full cylinder replacement.' },
  ],
  cta: {
    title: 'Upgrade Your Ceramic Press Hydraulics',
    description: 'Stop losing tiles to inconsistent pressing force. Upgrade to precision-engineered press cylinders from Honeywell Hydraulics — built for Morbi\'s 24/7 ceramic manufacturing demands.',
    phone: '+91 9924343873',
    email: 'sales@honeywellhydraulics.com',
    address: 'B-18, Suryam Plaza Estate, Near Nilkanth Estate, Road no. 15, Kathwada GIDC, Ahmedabad, Gujarat 382430',
    serviceAreas: 'Serving Morbi, Morbi GIDC, Wankaner, Halvad, Tankara, and the entire Morbi ceramic manufacturing belt.',
  },
};
