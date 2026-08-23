/**
 * Gallery Data — Honeywell Hydraulics
 *
 * Single source of truth for the /gallery page.
 * All assets verified against website/public/images/ filesystem.
 * Structured with full SEO metadata, technical specifications, and internal routing.
 */

export type GalleryCategory = 'all' | 'facility' | 'cylinders' | 'power-packs' | 'manifold-blocks';

export interface GalleryCategoryMeta {
  id: GalleryCategory;
  label: string;
  countKey: GalleryCategory;
  description: string;
}

export interface GalleryItem {
  id: string;
  category: 'facility' | 'cylinders' | 'power-packs' | 'manifold-blocks';
  categoryLabel: string;
  src: string;
  title: string;
  description: string;
  alt: string;
  href?: string;
  badge: string;
  aspectRatio: 'landscape' | 'portrait' | 'square';
}

export const GALLERY_CATEGORIES: GalleryCategoryMeta[] = [
  {
    id: 'all',
    label: 'All Showcase',
    countKey: 'all',
    description: 'Complete visual inventory of manufacturing infrastructure, cylinders, power packs, and manifold blocks.'
  },
  {
    id: 'facility',
    label: 'Manufacturing & Facility',
    countKey: 'facility',
    description: 'CNC machining centers, turning lathes, automated welding, assembly bays, and 400 bar test rigs at Kathwada GIDC.'
  },
  {
    id: 'cylinders',
    label: 'Hydraulic Cylinders',
    countKey: 'cylinders',
    description: 'Custom, double-acting, single-acting, tie-rod, telescopic, welded, and mounting-specific hydraulic cylinders.'
  },
  {
    id: 'power-packs',
    label: 'Hydraulic Power Packs',
    countKey: 'power-packs',
    description: '3-phase, single-phase, high-low, press machine, multi-station, accumulator, and manual hand-lever power units.'
  },
  {
    id: 'manifold-blocks',
    label: 'Manifold Blocks',
    countKey: 'manifold-blocks',
    description: 'Custom CNC-machined, CETOP 03 / NG6, CETOP 05 / NG10, ISO 4401 modular, and multi-station valve blocks.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  // ── 1. MANUFACTURING & FACILITY (7 Verified Assets) ──
  {
    id: 'facility-overview',
    category: 'facility',
    categoryLabel: 'Manufacturing & Facility',
    src: '/images/company/honeywell-manufacturing-facility-kathwada.webp',
    title: 'Honeywell Hydraulics Manufacturing Facility',
    description: 'State-of-the-art hydraulic manufacturing plant located in Kathwada GIDC, Ahmedabad, housing precision machining, fabrication, and testing infrastructure.',
    alt: 'Exterior and manufacturing floor of Honeywell Hydraulics plant at Kathwada GIDC Ahmedabad Gujarat',
    href: '/manufacturing-facility/',
    badge: 'Kathwada GIDC Plant',
    aspectRatio: 'landscape'
  },
  {
    id: 'facility-cnc-machining',
    category: 'facility',
    categoryLabel: 'Manufacturing & Facility',
    src: '/images/company/cnc-machining-center-hydraulic-cylinder.webp',
    title: 'CNC Machining Center for Cylinder Components',
    description: 'High-precision multi-axis CNC machining center dedicated to milling cylinder heads, base caps, and manifold ports to micron-level tolerances.',
    alt: 'Multi-axis CNC machining center milling precision hydraulic cylinder components at Honeywell Hydraulics',
    href: '/manufacturing-facility/',
    badge: 'Precision CNC Machining',
    aspectRatio: 'landscape'
  },
  {
    id: 'facility-cnc-lathe',
    category: 'facility',
    categoryLabel: 'Manufacturing & Facility',
    src: '/images/company/cnc-turning-lathe-machining.webp',
    title: 'Precision CNC Turning Lathe Operation',
    description: 'Heavy-duty CNC turning lathes machining hard-chrome plated piston rods, cylinder barrels, and gland bushings with f7/f8 diameter tolerances.',
    alt: 'Heavy duty CNC turning lathe machining piston rod and hydraulic cylinder parts in Ahmedabad facility',
    href: '/manufacturing-facility/',
    badge: 'CNC Turning & Boring',
    aspectRatio: 'portrait'
  },
  {
    id: 'facility-welding-bay',
    category: 'facility',
    categoryLabel: 'Manufacturing & Facility',
    src: '/images/company/hydraulic-cylinder-welding-fabrication.webp',
    title: 'Hydraulic Cylinder Welding & Heavy Fabrication',
    description: 'Certified welding bay with semi-automatic submerged arc and TIG welding for heavy-duty cylinder barrel caps, flanges, and high-pressure ports.',
    alt: 'Certified welding and structural fabrication bay for hydraulic cylinder barrels at Honeywell Hydraulics',
    href: '/manufacturing-facility/',
    badge: 'Certified Welding Bay',
    aspectRatio: 'square'
  },
  {
    id: 'facility-assembly-bay',
    category: 'facility',
    categoryLabel: 'Manufacturing & Facility',
    src: '/images/company/hydraulic-cylinder-assembly-area.webp',
    title: 'Clean Cylinder & Power Pack Assembly Area',
    description: 'Contamination-controlled assembly floor where multi-lip polyurethane seals, wear rings, honed barrels, and chrome rods are assembled by skilled technicians.',
    alt: 'Clean contamination-controlled hydraulic cylinder and power pack assembly area in Ahmedabad factory',
    href: '/manufacturing-facility/',
    badge: 'Cleanroom Assembly',
    aspectRatio: 'portrait'
  },
  {
    id: 'facility-hydrostatic-testing',
    category: 'facility',
    categoryLabel: 'Manufacturing & Facility',
    src: '/images/company/hydrostatic-pressure-testing-hydraulic-cylinder.webp',
    title: 'Hydrostatic Pressure Testing Rig (Up to 400 Bar)',
    description: '100% full-stroke hydrostatic testing bench equipped with digital pressure transducers to verify zero internal bypass and zero external leakage under proof load.',
    alt: 'Quality control engineer conducting 400 bar hydrostatic pressure testing on custom hydraulic cylinder',
    href: '/manufacturing-facility/',
    badge: '400 Bar Pressure Tested',
    aspectRatio: 'landscape'
  },
  {
    id: 'facility-engineering-team',
    category: 'facility',
    categoryLabel: 'Manufacturing & Facility',
    src: '/images/company/honeywell-hydraulics-team-ahmedabad.webp',
    title: 'Engineering & Manufacturing Leadership Team',
    description: 'Experienced hydraulic design engineers, CAD specialists, CNC programmers, and quality assurance personnel driving Honeywell Hydraulics.',
    alt: 'Honeywell Hydraulics engineering, design, and production management team in Ahmedabad Gujarat',
    href: '/about-us/',
    badge: 'Engineering Team',
    aspectRatio: 'landscape'
  },

  // ── 2. HYDRAULIC CYLINDERS (13 Verified Assets) ──
  {
    id: 'cylinder-double-acting',
    category: 'cylinders',
    categoryLabel: 'Hydraulic Cylinders',
    src: '/images/products/hydraulic-cylinders/double-acting-hydraulic-cylinders-manufacturer.webp',
    title: 'Double Acting Hydraulic Cylinders',
    description: 'Heavy-duty double acting cylinders delivering bidirectional hydraulic force for steel mills, presses, material handling, and mining applications.',
    alt: 'Double acting hydraulic cylinder with heavy duty welded construction manufactured by Honeywell Hydraulics Ahmedabad',
    href: '/products/hydraulic-cylinders/double-acting-hydraulic-cylinders/',
    badge: 'Bidirectional Power',
    aspectRatio: 'landscape'
  },
  {
    id: 'cylinder-single-acting',
    category: 'cylinders',
    categoryLabel: 'Hydraulic Cylinders',
    src: '/images/products/hydraulic-cylinders/single-acting-hydraulic-cylinder-manufacturer.webp',
    title: 'Single Acting Hydraulic Cylinders',
    description: 'High-thrust single acting ram and plunger cylinders designed for gravity or spring-return applications including hydraulic presses and lifting tables.',
    alt: 'Single acting hydraulic cylinder manufacturer in Ahmedabad India — Honeywell Hydraulics',
    href: '/products/hydraulic-cylinders/single-acting-hydraulic-cylinders/',
    badge: 'High-Thrust Ram',
    aspectRatio: 'square'
  },
  {
    id: 'cylinder-tie-rod',
    category: 'cylinders',
    categoryLabel: 'Hydraulic Cylinders',
    src: '/images/products/hydraulic-cylinders/tie-rod-hydraulic-cylinder-manufacturer.webp',
    title: 'Tie-Rod Hydraulic Cylinders (NFPA Standard)',
    description: 'High-tensile tie-rod hydraulic cylinders built to NFPA/ISO standards for injection moulding, automation lines, and machine tool clamping.',
    alt: 'NFPA standard tie rod hydraulic cylinder with high tensile tie rods manufactured in Gujarat India',
    href: '/products/hydraulic-cylinders/tie-rod-hydraulic-cylinders/',
    badge: 'NFPA / ISO Compliant',
    aspectRatio: 'landscape'
  },
  {
    id: 'cylinder-telescopic',
    category: 'cylinders',
    categoryLabel: 'Hydraulic Cylinders',
    src: '/images/products/hydraulic-cylinders/telescopic-hydraulic-cylinders-manufacturer.webp',
    title: 'Multi-Stage Telescopic Hydraulic Cylinders',
    description: 'Compact collapsed height multi-stage telescopic cylinders providing extended stroke lengths for tippers, dump trucks, and aerial access equipment.',
    alt: 'Multi-stage telescopic hydraulic cylinder with hard chrome plated sleeves manufactured by Honeywell Hydraulics',
    href: '/products/hydraulic-cylinders/telescopic-hydraulic-cylinders/',
    badge: 'Long-Stroke Multi-Stage',
    aspectRatio: 'portrait'
  },
  {
    id: 'cylinder-welded',
    category: 'cylinders',
    categoryLabel: 'Hydraulic Cylinders',
    src: '/images/products/hydraulic-cylinders/welded-hydraulic-cylinders-manufacturer.webp',
    title: 'Heavy Duty Welded Hydraulic Cylinders',
    description: 'Rugged welded body cylinders engineered for severe duty cycles, high shock loads, and harsh outdoor operating environments.',
    alt: 'Heavy duty welded hydraulic cylinder with forged end mounts manufactured in Ahmedabad Gujarat',
    href: '/products/hydraulic-cylinders/welded-hydraulic-cylinders/',
    badge: 'Heavy Shock-Load Rated',
    aspectRatio: 'square'
  },
  {
    id: 'cylinder-flange-mounted',
    category: 'cylinders',
    categoryLabel: 'Hydraulic Cylinders',
    src: '/images/products/hydraulic-cylinders/flange-mounted-hydraulic-cylinder.webp',
    title: 'Flange Mounted Hydraulic Cylinders',
    description: 'Front rectangular (MF1), front circular (MF3), and rear flange (MF2/MF4) mounting cylinders providing rigid thrust line support on machine frames.',
    alt: 'Front rectangular flange mounted hydraulic cylinder for industrial machine tools and presses',
    href: '/products/hydraulic-cylinders/flange-mounted-hydraulic-cylinder/',
    badge: 'Rigid Flange Mount',
    aspectRatio: 'square'
  },
  {
    id: 'cylinder-clevis-mounted',
    category: 'cylinders',
    categoryLabel: 'Hydraulic Cylinders',
    src: '/images/products/hydraulic-cylinders/clevis-mounted-hydraulic-cylinder.webp',
    title: 'Clevis Mounted Hydraulic Cylinders',
    description: 'Pivot-mounted clevis cylinders with spherical bearings or pivot pins designed for arc-motion loading in agricultural and mobile machinery.',
    alt: 'Rear clevis mounted hydraulic cylinder with pivot mounting pin for arc movement mechanisms',
    href: '/products/hydraulic-cylinders/clevis-mounted-hydraulic-cylinder/',
    badge: 'Pivot Arc Motion',
    aspectRatio: 'square'
  },
  {
    id: 'cylinder-trunnion-mounted',
    category: 'cylinders',
    categoryLabel: 'Hydraulic Cylinders',
    src: '/images/products/hydraulic-cylinders/trunnion-mounted-hydraulic-cylinder.webp',
    title: 'Trunnion Mounted Hydraulic Cylinders',
    description: 'Intermediate, head, and cap trunnion mounted cylinders (MT4/MT1/MT2) designed to reduce rod buckling loads over extended working strokes.',
    alt: 'Intermediate trunnion mounted hydraulic cylinder engineered to withstand high bending moments',
    href: '/products/hydraulic-cylinders/trunnion-mounted-hydraulic-cylinder/',
    badge: 'Reduced Buckling Load',
    aspectRatio: 'landscape'
  },
  {
    id: 'cylinder-custom',
    category: 'cylinders',
    categoryLabel: 'Hydraulic Cylinders',
    src: '/images/products/hydraulic-cylinders/custom-hydraulic-cylinder-manufacturer.webp',
    title: 'Custom Engineered Hydraulic Cylinders',
    description: 'Custom OEM hydraulic cylinders engineered to precise bore (25mm to 500mm), stroke (up to 6000mm), and pressure ratings up to 350 bar.',
    alt: 'Custom engineered hydraulic cylinder built to OEM specifications at Honeywell Hydraulics Ahmedabad',
    href: '/products/hydraulic-cylinders/custom-hydraulic-cylinders/',
    badge: 'Custom OEM Specs',
    aspectRatio: 'square'
  },
  {
    id: 'cylinder-square-body',
    category: 'cylinders',
    categoryLabel: 'Hydraulic Cylinders',
    src: '/images/products/hydraulic-cylinders/square-body-hydraulic-cylinder.webp',
    title: 'Square Body Hydraulic Industrial Jacks',
    description: 'Ultra-compact square body hydraulic cylinders and jacks built for high-force sheet metal clamping, die lifting, and confined tooling setups.',
    alt: 'Compact square body hydraulic jack cylinder for die clamping and fixture tooling in India',
    href: '/products/hydraulic-cylinders/square-body-hydraulic-cylinder/',
    badge: 'Compact Die Clamping',
    aspectRatio: 'square'
  },
  {
    id: 'cylinder-car-parking',
    category: 'cylinders',
    categoryLabel: 'Hydraulic Cylinders',
    src: '/images/products/hydraulic-cylinders/car-parking-hydraulic-cylinder-v2.webp',
    title: 'Multi-Level Car Parking Cylinders',
    description: 'Specialized hydraulic cylinders engineered for puzzle parking, stack parking, and automated rotary vehicle parking elevator systems.',
    alt: 'Heavy duty hydraulic cylinder for automated multi level car parking systems and vehicle stackers',
    href: '/products/hydraulic-cylinders/car-parking-hydraulic-cylinders/',
    badge: 'Automated Parking Duty',
    aspectRatio: 'square'
  },
  {
    id: 'cylinder-goods-lift',
    category: 'cylinders',
    categoryLabel: 'Hydraulic Cylinders',
    src: '/images/products/hydraulic-cylinders/goods-lift-hydraulic-cylinder-v2.webp',
    title: 'Goods Lift & Elevator Hydraulic Cylinders',
    description: 'Direct-acting and cantilever hydraulic cylinders designed for freight elevators, material lifts, and industrial warehouse goods hoists.',
    alt: 'Direct acting hydraulic cylinder for freight elevators and industrial goods lift systems in Gujarat',
    href: '/products/hydraulic-cylinders/goods-lift-hydraulic-cylinders/',
    badge: 'Freight Lift Grade',
    aspectRatio: 'square'
  },
  {
    id: 'cylinder-scissor-lift',
    category: 'cylinders',
    categoryLabel: 'Hydraulic Cylinders',
    src: '/images/products/hydraulic-cylinders/scissor-lift-table-hydraulic-cylinder.webp',
    title: 'Scissor Lift Table Hydraulic Cylinders',
    description: 'Precision displacement cylinders designed for synchronized dual-cylinder scissor lifts, dock levelers, and assembly work positioners.',
    alt: 'Hydraulic cylinder for scissor lift tables and material handling equipment by Honeywell Hydraulics',
    href: '/products/hydraulic-cylinders/scissor-lift-table-hydraulic-cylinder/',
    badge: 'Synchronized Lift Duty',
    aspectRatio: 'square'
  },

  // ── 3. HYDRAULIC POWER PACKS (10 Verified Assets) ──
  {
    id: 'powerpack-three-phase',
    category: 'power-packs',
    categoryLabel: 'Hydraulic Power Packs',
    src: '/images/products/hydraulic-power-packs/three-phase-hydraulic-power-pack.webp',
    title: 'Three Phase Industrial Hydraulic Power Pack',
    description: 'Continuous-duty 3-phase hydraulic power unit (3 HP to 100 HP) with premium IE3 electric motor, filtration system, and CETOP valve banks.',
    alt: 'Three phase industrial hydraulic power pack unit with IE3 motor and reservoir manufactured in Ahmedabad',
    href: '/products/hydraulic-power-packs/three-phase-hydraulic-power-packs/',
    badge: 'IE3 Continuous Duty',
    aspectRatio: 'portrait'
  },
  {
    id: 'powerpack-single-phase',
    category: 'power-packs',
    categoryLabel: 'Hydraulic Power Packs',
    src: '/images/products/hydraulic-power-packs/single-phase-hydraulic-power-pack.webp',
    title: 'Single Phase Compact Hydraulic Power Pack',
    description: 'Compact 220V/230V single-phase power packs for small workshops, garage lifts, dock levelers, and light industrial automation machines.',
    alt: 'Single phase compact hydraulic power pack unit for light industrial and lift applications',
    href: '/products/hydraulic-power-packs/single-phase-hydraulic-power-packs/',
    badge: 'Compact 230V Unit',
    aspectRatio: 'portrait'
  },
  {
    id: 'powerpack-for-press',
    category: 'power-packs',
    categoryLabel: 'Hydraulic Power Packs',
    src: '/images/products/hydraulic-power-packs/hydraulic-power-pack-for-press.webp',
    title: 'Hydraulic Power Pack for Press Machines',
    description: 'High-tonnage hydraulic unit engineered for deep drawing, rubber moulding, forging, and stamping presses with fast-approach and pre-fill circuits.',
    alt: 'High tonnage hydraulic power pack unit designed for deep drawing and forging press machinery',
    href: '/products/hydraulic-power-packs/hydraulic-power-packs-for-press/',
    badge: 'Heavy Press Duty',
    aspectRatio: 'square'
  },
  {
    id: 'powerpack-multistation',
    category: 'power-packs',
    categoryLabel: 'Hydraulic Power Packs',
    src: '/images/products/hydraulic-power-packs/multistation-hydraulic-power-pack.webp',
    title: 'Multi-Station Solenoid Valve Power Pack',
    description: 'Complex hydraulic power unit featuring multiple solenoid directional control valves, modular sandwich logic, and PLC electrical control panels.',
    alt: 'Multi-station hydraulic power pack with directional solenoid control valves and electrical panel',
    href: '/products/hydraulic-power-packs/multistation-hydraulic-power-packs/',
    badge: 'Multi-Actuator Control',
    aspectRatio: 'portrait'
  },
  {
    id: 'powerpack-accumulator',
    category: 'power-packs',
    categoryLabel: 'Hydraulic Power Packs',
    src: '/images/products/hydraulic-power-packs/accumulator-hydraulic-power-pack.webp',
    title: 'Accumulator-Assisted Hydraulic Power Pack',
    description: 'Bladder and piston accumulator-equipped power units designed for instantaneous high-flow demand cycles and emergency backup safety release.',
    alt: 'Accumulator assisted hydraulic power pack for high speed cycling and emergency energy storage',
    href: '/products/hydraulic-power-packs/accumulator-hydraulic-power-packs/',
    badge: 'Energy Storage Cycle',
    aspectRatio: 'landscape'
  },
  {
    id: 'powerpack-high-low',
    category: 'power-packs',
    categoryLabel: 'Hydraulic Power Packs',
    src: '/images/products/hydraulic-power-packs/high-low-hydraulic-power-pack.webp',
    title: 'High-Low Dual Stage Hydraulic Power Pack',
    description: 'Dual pump high-flow/low-pressure and low-flow/high-pressure power unit optimizing cycle speed and energy efficiency in hydraulic press operations.',
    alt: 'High-low dual stage hydraulic power pack unit for fast approach and high pressure clamping',
    href: '/products/hydraulic-power-packs/high-low-hydraulic-power-packs/',
    badge: 'Dual Flow Speed Circuit',
    aspectRatio: 'square'
  },
  {
    id: 'powerpack-hand-lever',
    category: 'power-packs',
    categoryLabel: 'Hydraulic Power Packs',
    src: '/images/products/hydraulic-power-packs/hand-lever-operated-hydraulic-power-pack.webp',
    title: 'Hand Lever Operated Hydraulic Power Pack',
    description: 'Manual mechanical spool valve power pack designed for rugged field conditions, mobile hydraulic equipment, and precise operator feedback.',
    alt: 'Hand lever operated hydraulic power pack with manual directional control valve manufactured in India',
    href: '/products/hydraulic-power-packs/hand-lever-operated-hydraulic-power-packs/',
    badge: 'Manual Lever Control',
    aspectRatio: 'square'
  },
  {
    id: 'powerpack-hand-pump',
    category: 'power-packs',
    categoryLabel: 'Hydraulic Power Packs',
    src: '/images/products/hydraulic-power-packs/hand-pump-operated-hydraulic-power-pack.webp',
    title: 'Hand Pump Emergency Auxiliary Power Pack',
    description: 'Integrated auxiliary hand pump system providing fail-safe manual lowering and emergency pressure generation during electrical outages.',
    alt: 'Auxiliary hand pump hydraulic power unit for emergency fail safe operation and manual positioning',
    href: '/products/hydraulic-power-packs/hand-pump-operated-hydraulic-power-packs/',
    badge: 'Fail-Safe Emergency Backup',
    aspectRatio: 'square'
  },
  {
    id: 'powerpack-customized',
    category: 'power-packs',
    categoryLabel: 'Hydraulic Power Packs',
    src: '/images/products/hydraulic-power-packs/customized-hydraulic-power-pack.webp',
    title: 'Custom Engineered Hydraulic Power Units (HPU)',
    description: 'Bespoke hydraulic power units engineered with custom tank volumes (20L to 2000L), proportional valves, immersion heaters, and oil coolers.',
    alt: 'Custom hydraulic power unit engineered to customer specifications at Honeywell Hydraulics plant',
    href: '/products/hydraulic-power-packs/customized-hydraulic-power-packs/',
    badge: 'Custom Engineered HPU',
    aspectRatio: 'square'
  },
  {
    id: 'powerpack-multi-valve',
    category: 'power-packs',
    categoryLabel: 'Hydraulic Power Packs',
    src: '/images/products/hydraulic-power-packs/hydraulic-power-pack-with-multiple-solenoid-valve.webp',
    title: 'Modular Multi-Valve Hydraulic Power Unit',
    description: 'High-density multi-station valve block integration designed to control multiple synchronized cylinders from a single centralized power pack.',
    alt: 'Modular hydraulic power pack unit with multi station solenoid valve bank and pressure relief modules',
    href: '/products/hydraulic-power-packs/multistation-hydraulic-power-packs/',
    badge: 'Synchronized Actuation',
    aspectRatio: 'square'
  },

  // ── 4. MANIFOLD BLOCKS & PRECISION LOGIC (5 Verified Assets) ──
  {
    id: 'manifold-custom-cnc',
    category: 'manifold-blocks',
    categoryLabel: 'Manifold Blocks',
    src: '/images/products/manifold-blocks/custom-manifold-block-cnc-machined.webp',
    title: 'Custom CNC Machined Hydraulic Manifold Block',
    description: 'Monoblock solid carbon steel manifold block CNC-machined with complex internal cross-flow galleries, cartridge cavities, and Ra 0.2 µm sealing faces.',
    alt: 'Custom precision CNC machined hydraulic manifold block manufactured in Ahmedabad by Honeywell Hydraulics',
    href: '/products/manifold-blocks/custom-manifold-blocks/',
    badge: 'Zero-Leak CNC Machined',
    aspectRatio: 'landscape'
  },
  {
    id: 'manifold-06-size',
    category: 'manifold-blocks',
    categoryLabel: 'Manifold Blocks',
    src: '/images/products/manifold-blocks/06-size-manifold-block-ng10.webp',
    title: '06-Size CETOP 03 / NG6 Hydraulic Manifold Block',
    description: 'Standard single-station CETOP 03 (D03 / NG6) directional valve subplate with standard P, T, A, B threaded ports rated for 315 bar working pressure.',
    alt: '06 size CETOP 03 NG6 directional valve hydraulic subplate manifold block manufactured in Gujarat',
    href: '/products/manifold-blocks/06-size-manifold-blocks/',
    badge: 'CETOP 03 / NG6 Standard',
    aspectRatio: 'landscape'
  },
  {
    id: 'manifold-10-size',
    category: 'manifold-blocks',
    categoryLabel: 'Manifold Blocks',
    src: '/images/products/manifold-blocks/10-size-manifold-block-ng16.webp',
    title: '10-Size CETOP 05 / NG10 Hydraulic Manifold Block',
    description: 'High-flow CETOP 05 (D05 / NG10) hydraulic valve manifold block machined from ductile iron with integrated pressure gauge test ports and relief cavity.',
    alt: '10 size CETOP 05 NG10 heavy flow hydraulic directional valve subplate block with phosphate finish',
    href: '/products/manifold-blocks/10-size-manifold-blocks/',
    badge: 'CETOP 05 / NG10 High-Flow',
    aspectRatio: 'landscape'
  },
  {
    id: 'manifold-cetop-iso4401',
    category: 'manifold-blocks',
    categoryLabel: 'Manifold Blocks',
    src: '/images/products/manifold-blocks/cetop-manifold-block-iso-4401.webp',
    title: 'CETOP Modular Sandwich Manifold Block (ISO 4401)',
    description: 'Precision ISO 4401 compliant modular sandwich subplate manifold block featuring recessed O-ring grooves and standardized 4-bolt valve mounting interface.',
    alt: 'ISO 4401 CETOP modular hydraulic sandwich plate manifold block with precision O-ring seal grooves',
    href: '/products/manifold-blocks/cetop-manifold-blocks/',
    badge: 'ISO 4401 Standard',
    aspectRatio: 'landscape'
  },
  {
    id: 'manifold-multi-station',
    category: 'manifold-blocks',
    categoryLabel: 'Manifold Blocks',
    src: '/images/products/manifold-blocks/multi-station-manifold-block.webp',
    title: 'Multi-Station Parallel Cartridge Manifold Block',
    description: '4-station parallel hydraulic manifold block with common pressure and tank galleries, dedicated work ports, and CNC machined cavity ports.',
    alt: 'Multi-station 4-valve parallel hydraulic manifold block machined from aircraft-grade aluminum/steel',
    href: '/products/manifold-blocks/multi-station-manifold-blocks/',
    badge: 'Multi-Station Parallel Rail',
    aspectRatio: 'landscape'
  }
];
