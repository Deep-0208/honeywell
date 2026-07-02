import { LocationPageData } from './gujarat';

export const textileMachineryData: LocationPageData = {
  seo: {
    title: 'Textile Machinery Hydraulic Cylinders Surat | Honeywell',
    description: 'Zero-leakage hydraulic cylinders for textile processing machinery in Surat & South Gujarat. High-speed, judder-free actuation for stenters & folding machines.',
    canonical: 'https://www.honeywellhydraulics.com/locations/gujarat/textile-machinery-cylinders/',
    openGraph: {
      title: 'Textile Machinery Hydraulic Cylinders in Surat & South Gujarat',
      description: 'Zero-leakage hydraulic cylinders for textile processing machinery in Surat & South Gujarat. High-speed, judder-free actuation for stenters & folding machines.',
      url: 'https://www.honeywellhydraulics.com/locations/gujarat/textile-machinery-cylinders/',
      images: [
        {
          url: '/images/locations/textile-machinery-cylinders-surat.jpg',
          width: 1200,
          height: 630,
          alt: 'Hydraulic cylinders installed on textile processing machinery in Surat',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Textile Machinery Hydraulic Cylinders Surat | Honeywell',
      description: 'Zero-leakage hydraulic cylinders for textile processing machinery in Surat & South Gujarat.',
      images: ['/images/locations/textile-machinery-cylinders-surat.jpg'],
    },
    keywords: [
      'textile machinery hydraulic cylinders surat',
      'stenter machine hydraulic cylinders',
      'hydraulic cylinder for fabric folding',
      'zero leakage hydraulic cylinder',
      'textile processing hydraulics gujarat'
    ],
  },
  schema: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://www.honeywellhydraulics.com/locations/gujarat/textile-machinery-cylinders/#service',
        serviceType: 'Textile Machinery Hydraulic Solutions',
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
        description: 'Precision, zero-leakage hydraulic cylinders and enclosed power packs designed specifically for the textile processing industry in Surat and South Gujarat.'
      },
      {
        '@type': 'WebPage',
        '@id': 'https://www.honeywellhydraulics.com/locations/gujarat/textile-machinery-cylinders/',
        name: 'Textile Machinery Hydraulic Cylinders in Surat | Honeywell',
        url: 'https://www.honeywellhydraulics.com/locations/gujarat/textile-machinery-cylinders/'
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.honeywellhydraulics.com/' },
          { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://www.honeywellhydraulics.com/locations/' },
          { '@type': 'ListItem', position: 3, name: 'Gujarat', item: 'https://www.honeywellhydraulics.com/locations/gujarat/' },
          { '@type': 'ListItem', position: 4, name: 'Textile Machinery Cylinders', item: 'https://www.honeywellhydraulics.com/locations/gujarat/textile-machinery-cylinders/' }
        ]
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'How do you prevent hydraulic fluid from leaking onto textile fabrics?', acceptedAnswer: { '@type': 'Answer', text: 'We utilize a proprietary dual-seal architecture with extreme-tolerance PU wiper rings. This prevents any fluid bypass, ensuring 100% leak-free operation to protect your valuable fabric from contamination.' } },
          { '@type': 'Question', name: 'Can your hydraulic cylinders handle high-speed continuous motion in folding machines?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, our cylinders are engineered for the rapid, continuous cycling required in stenter machines and fabric folders. We use low-friction PTFE composite seals and Ra 0.2 µm honed barrels to ensure judder-free, high-speed movement without seal degradation.' } },
          { '@type': 'Question', name: 'Do you offer corrosion-resistant cylinders for wet-processing textile environments?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. For dyeing vats and wet-processing, we manufacture hydraulic cylinders using stainless steel 316 rods and chemical-resistant epoxy coatings to survive continuous exposure to moisture and textile dyes.' } }
        ]
      }
    ]
  },
  hero: {
    overline: 'TEXTILE INDUSTRY HYDRAULICS IN GUJARAT',
    title: 'Textile Machinery Hydraulic Cylinders in Surat',
    subtitle: 'Surat\'s massive textile processing industry requires zero-leakage, high-speed actuation. Honeywell Hydraulics engineers precision cylinders and enclosed power packs designed specifically for stenter machines, fabric folders, and wet processing equipment across South Gujarat.',
    trustChips: ['Zero-Leakage Guarantee', 'High-Speed Cycling', 'Corrosion Resistant'],
    image: {
      src: '/images/locations/textile-machinery-cylinders-surat.jpg',
      alt: 'Hydraulic cylinders operating in a textile processing plant in Surat',
    },
    ctas: {
      primary: { label: 'REQUEST A QUOTE FOR TEXTILES', href: '/request-quote/' },
      secondary: { label: 'VIEW TEXTILE CYLINDERS', href: '/products/hydraulic-cylinders/' },
    },
  },
  benefits: {
    title: 'Engineered for Surat\'s Textile Processors',
    description: 'An oil leak in a textile plant is catastrophic. We design our hydraulic systems specifically to ensure absolute cleanliness and continuous reliability.',
    items: [
      {
        id: 'zero-leak',
        title: 'Zero-Leakage Architecture',
        description: 'A single drop of hydraulic oil can ruin meters of expensive fabric. Our cylinders feature advanced multi-stage PU and PTFE sealing systems to guarantee completely dry rod operation.',
      },
      {
        id: 'judder-free',
        title: 'Judder-Free High Speed',
        description: 'Textile folding and processing requires perfectly smooth actuation. We achieve Ra 0.2 µm internal surface finishes and utilize low-friction seals to eliminate stick-slip at high speeds.',
      },
      {
        id: 'corrosion-resistant',
        title: 'Dye & Chemical Resistance',
        description: 'For wet-processing environments, we offer stainless steel rods and specialized epoxy coatings that resist degradation from harsh textile dyes and bleaching chemicals.',
      },
    ],
  },
  products: {
    title: 'Hydraulic Equipment for Textile Machinery',
    description: 'Precision-engineered components built to integrate cleanly into modern textile processing lines.',
    items: [
      {
        id: 'stenter-cylinders',
        title: 'Stenter Machine Cylinders',
        description: 'Compact, high-speed tie-rod cylinders designed for continuous cycling and precise tension control.',
        href: '/products/hydraulic-cylinders/',
      },
      {
        id: 'enclosed-packs',
        title: 'Enclosed Power Packs',
        description: 'Hydraulic power units featuring fully enclosed reservoirs and filtration systems to prevent lint and dust contamination.',
        href: '/products/hydraulic-power-packs/',
      },
      {
        id: 'manifolds',
        title: 'Integrated Manifold Blocks',
        description: 'Consolidated CETOP manifolds that reduce the need for external hosing, dramatically lowering the risk of leaks.',
        href: '/products/manifold-blocks/',
      },
    ],
  },
  industries: {
    title: 'Supporting Gujarat\'s Textile Hubs',
    description: 'We supply specialized hydraulic actuation to the major textile processing zones across the state.',
    items: [
      {
        id: 'surat-processing',
        title: 'Dyeing & Printing (Surat)',
        description: 'Leak-free, chemical-resistant hydraulic systems for wet processing and high-pressure dyeing vats in Sachin and Pandesara.',
        href: '/locations/surat/',
      },
      {
        id: 'ahmedabad-mills',
        title: 'Cotton Mills (Ahmedabad)',
        description: 'High-speed hydraulic cylinders for modern weaving and spinning machinery across Narol and Piplaj.',
        href: '/locations/ahmedabad/',
      },
      {
        id: 'vapi-textiles',
        title: 'Technical Textiles (Vapi)',
        description: 'Robust hydraulic power packs and actuation systems for continuous production of industrial fabrics.',
        href: '/industries/special-purpose-machines/',
      },
    ],
  },
  caseStudy: {
    title: 'Stenter Machine Upgrade in Sachin GIDC',
    challenge: 'A major textile mill in Sachin GIDC was experiencing unacceptable fabric rejection rates because their generic hydraulic cylinders were weeping oil onto the fabric during high-speed folding.',
    solution: 'We engineered custom tie-rod cylinders featuring a specialized dual-wiper PU seal configuration and hard-chrome plated rods polished to a mirror finish, completely eliminating fluid bypass.',
    resultStat: '100%',
    resultLabel: 'Elimination of oil-stained fabric rejections',
  },
  serviceAreas: {
    title: 'Serving the Textile Industry Across Gujarat',
    description: 'Based in Ahmedabad, we provide rapid factory-direct support to textile mills statewide.',
    items: [
      { id: 'sachin', city: 'Sachin GIDC', description: 'Supplying zero-leakage cylinders to the heart of Surat\'s textile processing industry.' },
      { id: 'pandesara', city: 'Pandesara GIDC', description: 'Delivering chemical-resistant hydraulic solutions for dyeing and wet processing plants.' },
      { id: 'narol', city: 'Narol & Piplaj', description: 'Immediate local support and custom hydraulic design for Ahmedabad\'s textile sector.' },
      { id: 'vapi', city: 'Vapi & Valsad', description: 'Supporting the massive textile and chemical industries in South Gujarat.' },
    ],
  },
  trustFactors: {
    title: 'Trusted by Gujarat\'s Largest Mills',
    description: '"In textiles, an oil leak is a disaster. We switched to Honeywell Hydraulics because they understood our requirement for absolute cleanliness. Their cylinders have been running on our stenter machines for two years without a single drop of leaked oil." — Maintenance Manager, Textile Mill, Sachin GIDC.',
    items: [
      { id: 'tf1', title: 'Application-Specific Design', description: 'We don\'t sell off-the-shelf. We engineer the cylinder\'s internal geometry and seals specifically for your machine\'s speed and environment.' },
      { id: 'tf2', title: '100% Tested for Leaks', description: 'Every cylinder is pressure tested at 1.5x working load to guarantee zero external leakage before dispatch.' },
      { id: 'tf3', title: 'Fast Replacements', description: 'We keep your custom engineering drawings on file, allowing us to manufacture identical replacement cylinders rapidly.' },
    ],
  },
  faqs: [
    { question: 'How do you prevent hydraulic fluid from leaking onto textile fabrics?', answer: 'We utilize a proprietary dual-seal architecture with extreme-tolerance PU wiper rings. This prevents any fluid bypass, ensuring 100% leak-free operation to protect your valuable fabric from contamination.' },
    { question: 'Can your hydraulic cylinders handle high-speed continuous motion in folding machines?', answer: 'Yes, our cylinders are engineered for the rapid, continuous cycling required in stenter machines and fabric folders. We use low-friction PTFE composite seals and Ra 0.2 µm honed barrels to ensure judder-free, high-speed movement without seal degradation.' },
    { question: 'Do you offer corrosion-resistant cylinders for wet-processing textile environments?', answer: 'Yes. For dyeing vats and wet-processing, we manufacture hydraulic cylinders using stainless steel 316 rods and chemical-resistant epoxy coatings to survive continuous exposure to moisture and textile dyes.' }
  ],
  cta: {
    title: 'Stop Losing Fabric to Oil Leaks',
    description: 'Upgrade your textile machinery with precision-engineered, zero-leakage hydraulic cylinders from Honeywell Hydraulics.',
    phone: '+91 9924343873',
    email: 'sales@honeywellhydraulics.com',
    address: 'B-18, Suryam Plaza Estate, Kathwada GIDC, Ahmedabad (Serving all Gujarat Textile Hubs)',
    serviceAreas: 'Serving Surat, Sachin, Pandesara, Narol, Piplaj, and Vapi.',
  },
};
