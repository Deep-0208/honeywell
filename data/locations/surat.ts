import { LocationPageData } from './gujarat';

export const suratData: LocationPageData = {
  seo: {
    title: 'Hydraulic Cylinder Manufacturer Surat | Textile Hydraulics',
    description: 'Leading hydraulic cylinder manufacturer in Surat. We supply Sachin, Pandesara & Palsana with leak-free, high-speed cylinders for textile processing machinery.',
    canonical: 'https://www.honeywellhydraulics.com/locations/surat/',
    openGraph: {
      title: 'Hydraulic Cylinders for Surat\'s Textile & Diamond Industries',
      description: 'Leading hydraulic cylinder manufacturer in Surat. We supply Sachin, Pandesara & Palsana with leak-free, high-speed cylinders for textile processing machinery.',
      url: 'https://www.honeywellhydraulics.com/locations/surat/',
      images: [
        {
          url: '/images/locations/surat-textile-hydraulics.jpg',
          width: 1200,
          height: 630,
          alt: 'Hydraulic cylinders installed on textile machinery in Surat, Gujarat',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Hydraulic Cylinder Manufacturer Surat | Textile Hydraulics',
      description: 'Leading hydraulic cylinder manufacturer in Surat. Supplying Sachin, Pandesara & Palsana GIDC.',
      images: ['/images/locations/surat-textile-hydraulics.jpg'],
    },
    keywords: [
      'hydraulic cylinder manufacturer Surat',
      'textile hydraulic cylinders surat',
      'hydraulic cylinders Sachin GIDC',
      'hydraulic cylinders Pandesara',
      'hydraulic power pack surat'
    ],
  },
  schema: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://www.honeywellhydraulics.com/locations/surat/#service',
        serviceType: 'Hydraulic Cylinder Manufacturing & Supply',
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
          '@type': 'City',
          name: 'Surat'
        },
        description: 'Precision hydraulic cylinders and power packs specifically engineered for zero-leakage operation in Surat\'s textile processing and diamond cutting industries.'
      },
      {
        '@type': 'WebPage',
        '@id': 'https://www.honeywellhydraulics.com/locations/surat/',
        name: 'Hydraulic Cylinder Manufacturer in Surat | Honeywell Hydraulics',
        url: 'https://www.honeywellhydraulics.com/locations/surat/'
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.honeywellhydraulics.com/' },
          { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://www.honeywellhydraulics.com/locations/' },
          { '@type': 'ListItem', position: 3, name: 'Surat', item: 'https://www.honeywellhydraulics.com/locations/surat/' }
        ]
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'How do you prevent hydraulic fluid from leaking onto textile fabrics?', acceptedAnswer: { '@type': 'Answer', text: 'We utilize a proprietary dual-seal architecture with extreme-tolerance PU wiper rings. This prevents any fluid bypass, ensuring 100% leak-free operation to protect your valuable fabric from contamination.' } },
          { '@type': 'Question', name: 'Can your hydraulic cylinders handle high-speed continuous motion?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, our cylinders are engineered for the rapid, continuous cycling required in stenter machines and fabric folders. We use low-friction PTFE composite seals and Ra 0.2 µm honed barrels to ensure judder-free, high-speed movement without seal degradation.' } },
          { '@type': 'Question', name: 'Do you deliver custom hydraulic cylinders to Sachin and Pandesara GIDC?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Once your custom cylinder passes our strict hydrostatic testing in our facility, we dispatch it directly to your plant in Sachin, Pandesara, or Palsana GIDC via rapid express transport.' } }
        ]
      }
    ]
  },
  hero: {
    overline: 'SERVING SURAT & SOUTH GUJARAT',
    title: 'Hydraulic Cylinder Manufacturer for Surat',
    subtitle: 'Surat\'s textile and diamond industries demand precision, speed, and absolute cleanliness. Honeywell Hydraulics engineers specialized, zero-leakage hydraulic cylinders and power packs that keep Surat\'s massive processing mills in Sachin, Pandesara, and Palsana running 24/7.',
    trustChips: ['Zero-Leakage Guarantee', 'High-Speed Cycling', 'Rapid Surat Delivery'],
    image: {
      src: '/images/locations/surat-textile-hydraulics.jpg',
      alt: 'Hydraulic cylinders operating in a Surat textile processing plant',
    },
    ctas: {
      primary: { label: 'GET A QUOTE FOR TEXTILE HYDRAULICS', href: '/request-quote/' },
      secondary: { label: 'VIEW TEXTILE CAPABILITIES', href: '/industries/special-purpose-machines/' },
    },
  },
  benefits: {
    title: 'Engineered for Surat\'s High-Speed Industries',
    description: 'We don\'t just build generic cylinders; we build precision fluid power solutions designed for the specific challenges of textile and diamond processing.',
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
    title: 'Hydraulic Solutions for Surat',
    description: 'Precision-engineered components built to maintain the pace of South Gujarat\'s manufacturing sector.',
    items: [
      {
        id: 'textile-cylinders',
        title: 'Textile Machinery Cylinders',
        description: 'Compact, high-speed tie-rod cylinders designed for continuous cycling in stenters and folding machines.',
        href: '/products/hydraulic-cylinders/',
      },
      {
        id: 'clean-power-packs',
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
    title: 'Supporting Surat\'s Core Industries',
    description: 'We provide specialized hydraulic actuation for the unique machinery used throughout Surat.',
    items: [
      {
        id: 'textile',
        title: 'Textile Processing & Dyeing',
        description: 'Leak-free, chemical-resistant hydraulic systems for stenter machines, fabric folders, and high-pressure dyeing vats.',
        href: '/industries/special-purpose-machines/',
      },
      {
        id: 'diamonds',
        title: 'Diamond Cutting & Polishing',
        description: 'Micro-precision hydraulic actuators that provide smooth, vibration-free movement for automated diamond processing equipment.',
        href: '/industries/special-purpose-machines/',
      },
      {
        id: 'heavy-engineering',
        title: 'General Engineering (Hazira)',
        description: 'Large-bore, high-tonnage hydraulic cylinders for the heavy engineering and fabrication yards in Hazira.',
        href: '/industries/material-handling/',
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
    title: 'Service Areas & GIDC Coverage in Surat',
    description: 'We rapidly dispatch engineered hydraulic components to all textile and industrial hubs in the Surat region.',
    items: [
      { id: 'sachin', city: 'Sachin GIDC', description: 'Supplying zero-leakage cylinders to the heart of Surat\'s textile processing industry.' },
      { id: 'pandesara', city: 'Pandesara GIDC', description: 'Delivering chemical-resistant hydraulic solutions for dyeing and wet processing plants.' },
      { id: 'palsana', city: 'Palsana & Kadodara', description: 'Supporting massive weaving and spinning mills with reliable, high-speed hydraulic power.' },
      { id: 'hazira', city: 'Hazira', description: 'Heavy-duty hydraulic cylinders and systems for large-scale fabrication and heavy engineering.' },
    ],
  },
  trustFactors: {
    title: 'Trusted by Surat\'s Largest Mills',
    description: '"In textiles, an oil leak is a disaster. We switched to Honeywell Hydraulics because they understood our requirement for absolute cleanliness. Their cylinders have been running on our stenter machines for two years without a single drop of leaked oil." — Maintenance Manager, Textile Mill, Sachin GIDC.',
    items: [
      { id: 'tf1', title: 'Application-Specific Design', description: 'We don\'t sell off-the-shelf. We engineer the cylinder\'s internal geometry and seals specifically for your machine\'s speed and environment.' },
      { id: 'tf2', title: '100% Tested for Leaks', description: 'Every cylinder is pressure tested at 1.5x working load to guarantee zero external leakage.' },
      { id: 'tf3', title: 'Fast Replacements', description: 'We keep your custom engineering drawings on file, allowing us to manufacture identical replacement cylinders rapidly when needed.' },
    ],
  },
  faqs: [
    { question: 'How do you prevent hydraulic fluid from leaking onto textile fabrics?', answer: 'We utilize a proprietary dual-seal architecture with extreme-tolerance PU wiper rings. This prevents any fluid bypass, ensuring 100% leak-free operation to protect your valuable fabric from contamination.' },
    { question: 'Can your hydraulic cylinders handle high-speed continuous motion?', answer: 'Yes, our cylinders are engineered for the rapid, continuous cycling required in stenter machines and fabric folders. We use low-friction PTFE composite seals and Ra 0.2 µm honed barrels to ensure judder-free, high-speed movement without seal degradation.' },
    { question: 'Do you deliver custom hydraulic cylinders to Sachin and Pandesara GIDC?', answer: 'Yes. Once your custom cylinder passes our strict hydrostatic testing in our facility, we dispatch it directly to your plant in Sachin, Pandesara, or Palsana GIDC via rapid express transport.' }
  ],
  cta: {
    title: 'Stop Losing Fabric to Oil Leaks',
    description: 'Upgrade your textile machinery with precision-engineered, zero-leakage hydraulic cylinders from Honeywell Hydraulics.',
    phone: '+91 9924343873',
    email: 'sales@honeywellhydraulics.com',
    address: 'B-18, Suryam Plaza Estate, Kathwada GIDC, Ahmedabad (Serving Surat Region)',
    serviceAreas: 'Serving Sachin, Pandesara, Palsana, Hazira, and the entire South Gujarat region.',
  },
};
