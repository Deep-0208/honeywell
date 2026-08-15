import { LocationPageData } from './gujarat';

export const suratData: LocationPageData = {
  seo: {
    title: 'Hydraulic Cylinder Manufacturer Surat | Textile Hydraulics',
    description: 'Leading hydraulic cylinder manufacturer in Surat. We supply Sachin, Pandesara & Palsana with leak-free, high-speed cylinders for textile processing machinery.',
    canonical: 'https://honeywellhydraulics.in/locations/surat/',
    openGraph: {
      title: 'Hydraulic Cylinders for Surat\'s Textile & Diamond Industries',
      description: 'Leading hydraulic cylinder manufacturer in Surat. We supply Sachin, Pandesara & Palsana with leak-free, high-speed cylinders for textile processing machinery.',
      url: 'https://honeywellhydraulics.in/locations/surat/',
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
      'hydraulic cylinder manufacturer in Surat',
      'hydraulic cylinder manufacturer Surat',
      'textile hydraulic cylinders Surat',
      'hydraulic cylinders Sachin GIDC',
      'hydraulic cylinders Pandesara',
      'hydraulic power pack manufacturer Surat',
      'hydraulic cylinder supplier Surat',
      'hydraulic cylinder repair Surat',
    ],
  },
  schema: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://honeywellhydraulics.in/locations/surat/#service',
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
          name: 'Surat',
          containedInPlace: {
            '@type': 'State',
            name: 'Gujarat'
          }
        },
        description: 'Precision hydraulic cylinders and power packs specifically engineered for zero-leakage operation in Surat\'s textile processing, diamond cutting, and heavy engineering industries. Supplying Sachin, Pandesara, Udhna, Palsana, Katargam, Hazira, and Bamroli GIDC estates.'
      },
      {
        '@type': 'WebPage',
        '@id': 'https://honeywellhydraulics.in/locations/surat/',
        name: 'Hydraulic Cylinder Manufacturer in Surat | Honeywell Hydraulics',
        url: 'https://honeywellhydraulics.in/locations/surat/'
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://honeywellhydraulics.in/' },
          { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://honeywellhydraulics.in/locations/' },
          { '@type': 'ListItem', position: 3, name: 'Surat', item: 'https://honeywellhydraulics.in/locations/surat/' }
        ]
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'How do you prevent hydraulic fluid from leaking onto textile fabrics?', acceptedAnswer: { '@type': 'Answer', text: 'We utilize a proprietary dual-seal architecture with extreme-tolerance PU wiper rings and Ra 0.2 µm mirror-finish honed barrels. This prevents any fluid bypass, ensuring 100% leak-free operation to protect your valuable fabric from oil contamination.' } },
          { '@type': 'Question', name: 'Can your hydraulic cylinders handle high-speed continuous motion for stenter machines?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, our cylinders are engineered for the rapid, continuous cycling required in stenter machines and fabric folders. We use low-friction PTFE composite seals and Ra 0.2 µm honed barrels to ensure judder-free, high-speed movement without seal degradation over millions of cycles.' } },
          { '@type': 'Question', name: 'Do you deliver custom hydraulic cylinders to Sachin and Pandesara GIDC?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our Kathwada GIDC facility in Ahmedabad is approximately a 4-hour express dispatch from Surat. Once your custom cylinder passes our strict 1.5x hydrostatic testing, we dispatch directly to your plant in Sachin, Pandesara, Udhna, or Palsana GIDC.' } },
          { '@type': 'Question', name: 'Do you supply hydraulic equipment for Hazira heavy engineering projects?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We manufacture large-bore, high-tonnage welded hydraulic cylinders rated up to 350 Bar for the heavy fabrication yards and industrial projects in the Hazira industrial belt, including applications in oil and gas, shipbuilding, and structural steel fabrication.' } },
          { '@type': 'Question', name: 'Can you repair and refurbish hydraulic cylinders for textile mills in Surat?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we provide complete hydraulic cylinder repair services including seal replacement, barrel re-honing, rod re-chroming, and full teardown and rebuild. We keep your custom engineering drawings on file, allowing rapid turnaround on replacement cylinders to minimize your production downtime.' } }
        ]
      }
    ]
  },
  hero: {
    overline: 'SERVING SURAT & SOUTH GUJARAT',
    title: 'Hydraulic Cylinder Manufacturer for Surat',
    subtitle: 'Surat\'s textile and diamond industries demand precision, speed, and absolute cleanliness. Honeywell Hydraulics engineers specialized, zero-leakage hydraulic cylinders and power packs that keep Surat\'s massive processing mills in Sachin, Pandesara, Udhna, and Palsana running 24/7. Factory-direct supply from our Kathwada GIDC facility — approximately 4 hours from Surat via express dispatch.',
    trustChips: ['Zero-Leakage Guarantee', 'High-Speed Cycling', 'Express Surat Delivery'],
    image: {
      src: '/images/locations/surat-textile-hydraulics.jpg',
      alt: 'Hydraulic cylinders operating in a Surat textile processing plant',
    },
    ctas: {
      primary: { label: 'GET A QUOTE FOR TEXTILE HYDRAULICS', href: '/request-quote/#quote-form' },
      secondary: { label: 'VIEW TEXTILE CAPABILITIES', href: '/products/hydraulic-cylinders/' },
    },
  },
  benefits: {
    title: 'Engineered for Surat\'s High-Speed Industries',
    description: 'We don\'t build generic cylinders. We build precision fluid power solutions designed for the specific challenges of Surat\'s textile processing, diamond cutting, and chemical environments.',
    items: [
      {
        id: 'zero-leak',
        title: 'Zero-Leakage Architecture',
        description: 'A single drop of hydraulic oil can ruin meters of expensive fabric. Our cylinders feature advanced multi-stage PU and PTFE sealing systems with Ra 0.2 µm mirror-finished barrels to guarantee completely dry rod operation — proven in Sachin GIDC textile mills.',
      },
      {
        id: 'judder-free',
        title: 'Judder-Free High-Speed Cycling',
        description: 'Textile folding and stenter machines require perfectly smooth, high-frequency actuation. Our low-friction PTFE composite seals and precision-honed internals eliminate stick-slip, delivering vibration-free performance over millions of production cycles.',
      },
      {
        id: 'corrosion-resistant',
        title: 'Dye & Chemical Resistance',
        description: 'For the wet-processing environments of Pandesara\'s dyeing and chemical plants, we offer stainless steel rods and specialized epoxy coatings that resist degradation from harsh textile dyes, bleaching agents, and industrial chemicals.',
      },
    ],
  },
  products: {
    title: 'Hydraulic Solutions for Surat\'s Industries',
    description: 'Precision-engineered components built to maintain the pace of South Gujarat\'s manufacturing sector. All products manufactured, assembled, and 100% pressure-tested at our Kathwada GIDC facility.',
    items: [
      {
        id: 'textile-cylinders',
        title: 'Textile Machinery Cylinders',
        description: 'Compact, high-speed tie-rod and welded cylinders designed for continuous cycling in stenters, fabric folders, and dyeing machines. Zero-leakage guaranteed.',
        href: '/products/hydraulic-cylinders/',
      },
      {
        id: 'clean-power-packs',
        title: 'Enclosed Power Packs',
        description: 'Hydraulic power units with fully enclosed reservoirs and multi-stage filtration systems to prevent lint, dust, and fibre contamination in textile environments.',
        href: '/products/hydraulic-power-packs/',
      },
      {
        id: 'manifolds',
        title: 'Integrated Manifold Blocks',
        description: 'Consolidated CETOP manifolds that eliminate external hosing, dramatically reducing leak points and simplifying maintenance on complex textile processing lines.',
        href: '/products/manifold-blocks/',
      },
    ],
  },
  industries: {
    title: 'Powering Surat\'s Core Manufacturing Industries',
    description: 'Surat is India\'s synthetic textile capital and the world\'s diamond processing hub. We have deep engineering experience providing fluid power solutions tailored to each of the city\'s manufacturing sectors.',
    items: [
      {
        id: 'textile',
        title: 'Textile Processing & Dyeing (Sachin & Udhna)',
        description: 'Leak-free, chemical-resistant hydraulic systems for stenter machines, fabric folders, warping, and high-pressure dyeing vats in Sachin and Udhna GIDC mills.',
        href: '/products/hydraulic-cylinders/',
      },
      {
        id: 'diamonds',
        title: 'Diamond Cutting & Polishing (Katargam)',
        description: 'Micro-precision hydraulic actuators providing smooth, vibration-free movement for automated diamond processing and polishing equipment in the Katargam diamond hub.',
        href: '/products/hydraulic-cylinders/',
      },
      {
        id: 'heavy-engineering',
        title: 'Heavy Engineering & Fabrication (Hazira)',
        description: 'Large-bore, high-tonnage welded hydraulic cylinders rated up to 350 Bar for heavy fabrication yards, oil and gas installations, and structural steel projects in the Hazira industrial belt.',
        href: '/products/hydraulic-cylinders/',
      },
      {
        id: 'chemical',
        title: 'Chemical & Dye Manufacturing (Pandesara)',
        description: 'Corrosion-resistant hydraulic systems with stainless steel rods and specialized epoxy coatings for chemical reactors, mixing equipment, and dye processing machinery in Pandesara GIDC.',
        href: '/products/hydraulic-cylinders/',
      },
      {
        id: 'packaging',
        title: 'Packaging & Food Processing (Palsana)',
        description: 'Precision hydraulic actuation for wrapping, baling, and carton forming machinery serving Surat\'s rapidly growing packaging and food processing sector.',
        href: '/products/hydraulic-power-packs/',
      },
      {
        id: 'material-handling',
        title: 'Warehousing & Material Handling (Bamroli)',
        description: 'Heavy-duty lifting cylinders and compact DC power packs for goods lifts, dock levelers, and scissor lifts serving Surat\'s massive textile warehousing infrastructure.',
        href: '/products/hydraulic-power-packs/',
      },
    ],
  },
  caseStudy: {
    title: 'Stenter Machine Upgrade in Sachin GIDC',
    challenge: 'A prominent textile mill in Sachin GIDC was experiencing unacceptable fabric rejection rates because their generic hydraulic cylinders were weeping oil onto the fabric during high-speed folding operations, causing costly stains on finished goods.',
    solution: 'Our Kathwada engineering team designed custom tie-rod cylinders featuring a specialized dual-wiper PU seal configuration and hard-chrome plated rods polished to Ra 0.2 µm mirror finish. We also integrated an enclosed power pack with multi-stage filtration to eliminate contamination at the source.',
    resultStat: '100%',
    resultLabel: 'Elimination of oil-stained fabric rejections',
  },
  serviceAreas: {
    title: 'Service Areas & GIDC Coverage in Surat',
    description: 'We rapidly dispatch engineered hydraulic components from our Kathwada GIDC facility to all textile, chemical, and industrial hubs across the Surat region — approximately 4 hours via express transport.',
    items: [
      { id: 'sachin', city: 'Sachin GIDC', description: 'Supplying zero-leakage cylinders to Surat\'s largest industrial estate. Over 2,000 units across textiles, chemicals, and engineering.' },
      { id: 'pandesara', city: 'Pandesara GIDC', description: 'Chemical-resistant hydraulic solutions for Pandesara\'s dye, chemical, and wet-processing plants.' },
      { id: 'udhna', city: 'Udhna GIDC', description: 'High-speed textile processing cylinders for one of Surat\'s oldest and most active industrial estates.' },
      { id: 'palsana', city: 'Palsana & Kadodara', description: 'Supporting massive weaving, spinning, and knitting mills in the growing Udhna-Palsana industrial corridor.' },
      { id: 'katargam', city: 'Katargam', description: 'Micro-precision hydraulic actuators for Surat\'s global diamond cutting and polishing hub.' },
      { id: 'hazira', city: 'Hazira Industrial Belt', description: 'Heavy-duty hydraulic cylinders for large-scale fabrication, oil and gas installations, and heavy engineering projects.' },
      { id: 'bamroli', city: 'Bamroli & Logistics Hub', description: 'Goods lift cylinders and DC power packs for Surat\'s expanding logistics, warehousing, and material handling sector.' },
    ],
  },
  trustFactors: {
    title: 'Trusted by Surat\'s Largest Mills',
    description: '"In textiles, an oil leak is a disaster. We switched to Honeywell Hydraulics because they understood our requirement for absolute cleanliness. Their cylinders have been running on our stenter machines for two years without a single drop of leaked oil." — Maintenance Manager, Textile Mill, Sachin GIDC.',
    items: [
      { id: 'tf1', title: 'Application-Specific Design', description: 'We don\'t sell off-the-shelf. We engineer the cylinder\'s internal geometry, seals, and surface finish specifically for your machine\'s speed, pressure, and operating environment.' },
      { id: 'tf2', title: '100% Hydrostatically Tested', description: 'Every cylinder is pressure tested at 1.5x working load to guarantee zero external leakage. We provide EN 10204 Type 3.1 material certificates on request.' },
      { id: 'tf3', title: 'Fast Replacements & Drawings on File', description: 'We keep your custom engineering drawings on file, allowing us to manufacture identical replacement cylinders rapidly when needed — minimizing your production downtime.' },
    ],
  },
  faqs: [
    { question: 'How do you prevent hydraulic fluid from leaking onto textile fabrics?', answer: 'We utilize a proprietary dual-seal architecture with extreme-tolerance PU wiper rings and Ra 0.2 µm mirror-finish honed barrels. This prevents any fluid bypass, ensuring 100% leak-free operation to protect your valuable fabric from oil contamination.' },
    { question: 'Can your hydraulic cylinders handle high-speed continuous motion for stenter machines?', answer: 'Yes, our cylinders are engineered for the rapid, continuous cycling required in stenter machines and fabric folders. We use low-friction PTFE composite seals and Ra 0.2 µm honed barrels to ensure judder-free, high-speed movement without seal degradation over millions of cycles.' },
    { question: 'Do you deliver custom hydraulic cylinders to Sachin and Pandesara GIDC?', answer: 'Yes. Our Kathwada GIDC facility in Ahmedabad is approximately a 4-hour express dispatch from Surat. Once your custom cylinder passes our strict 1.5x hydrostatic testing, we dispatch directly to your plant in Sachin, Pandesara, Udhna, or Palsana GIDC.' },
    { question: 'Do you supply hydraulic equipment for Hazira heavy engineering projects?', answer: 'Absolutely. We manufacture large-bore, high-tonnage welded hydraulic cylinders rated up to 350 Bar for the heavy fabrication yards and industrial projects in the Hazira industrial belt, including applications in oil and gas, shipbuilding, and structural steel fabrication.' },
    { question: 'Can you repair and refurbish hydraulic cylinders for textile mills in Surat?', answer: 'Yes, we provide complete hydraulic cylinder repair services including seal replacement, barrel re-honing, rod re-chroming, and full teardown and rebuild. We keep your custom engineering drawings on file, allowing rapid turnaround on replacement cylinders to minimize your production downtime.' },
  ],
  cta: {
    title: 'Stop Losing Fabric to Oil Leaks',
    description: 'Upgrade your textile machinery with precision-engineered, zero-leakage hydraulic cylinders from Honeywell Hydraulics. Factory-direct from Kathwada GIDC, express delivery to Surat.',
    phone: '+91 9924343873',
    email: 'sales@honeywellhydraulics.com',
    address: 'B-18, Suryam Plaza Estate, Near Nilkanth Estate, Road no. 15, Kathwada GIDC, Ahmedabad, Gujarat 382430',
    serviceAreas: 'Serving Sachin, Pandesara, Udhna, Palsana, Katargam, Hazira, Bamroli, and the entire South Gujarat region.',
  },
};
