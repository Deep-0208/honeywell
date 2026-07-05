import os
import shutil

img_dir = r'C:\Users\DELL\Desktop\Honeywell Seo\website\public\images'
src_dir = r'C:\Users\DELL\Desktop\Honeywell Seo\website'

images = [
    '/images/company/cnc-machining-center-hydraulic-cylinder.webp',
    '/images/company/cnc-turning-lathe-machining.webp',
    '/images/company/honeywell-hydraulics-team-ahmedabad.webp',
    '/images/company/honeywell-manufacturing-facility-kathwada.webp',
    '/images/company/hydraulic-cylinder-assembly-area.webp',
    '/images/company/hydraulic-cylinder-welding-fabrication.webp',
    '/images/company/hydrostatic-pressure-testing-hydraulic-cylinder.webp',
    '/images/company/vertical-milling-machine-machining.webp',
    '/images/home/custom-hydraulic-cylinder-manufacturer.webp',
    '/images/home/hand-lever-hydraulic-power-pack-manufacturer.webp',
    '/images/home/heavy-duty-hydraulic-press-cylinder.webp',
    '/images/home/multi-station-hydraulic-power-pack.webp',
    '/images/home/telescopic-hydraulic-cylinder-manufacturer.webp',
    '/images/home/tie-rod-hydraulic-cylinder.webp',
    '/images/products/3-phase-hydraulic-power-pack-manufacturer.webp',
    '/images/products/dc-hydraulic-power-pack-manufacturer.webp',
    '/images/products/double-acting-hydraulic-cylinder.webp',
    '/images/products/hero/custom-hydraulic-systems-ahmedabad.webp',
    '/images/products/hero/hydraulic-cylinders-ahmedabad.webp',
    '/images/products/hero/hydraulic-power-pack.webp',
    '/images/products/high-low-hydraulic-power-pack-manufacturer.webp',
    '/images/products/hydraulic-cylinders/double-acting-hydraulic-cylinder-manufacturer.webp',
    '/images/products/hydraulic-cylinders/hydraulic-cylinders-ahmedabad.webp',
    '/images/products/hydraulic-cylinders/single-acting-hydraulic-cylinder-manufacturer.webp',
    '/images/products/hydraulic-cylinders/telescopic-hydraulic-cylinders-manufacturer.webp',
    '/images/products/hydraulic-cylinders/tie-rod-hydraulic-cylinder-manufacturer.webp',
    '/images/products/hydraulic-power-packs/hand-lever-operated-power-pack.webp',
    '/images/products/hydraulic-power-packs/hydraulic-power-pack-3-phase.webp',
    '/images/products/hydraulic-power-packs/hydraulic-power-pack-manufacturer.webp',
    '/images/products/hydraulic-power-packs/hydraulic-power-pack-single-phase.webp',
    '/images/products/hydraulic-power-packs/hydraulic-power-pack-with-accumulator.webp',
    '/images/products/hydraulic-power-packs/hydraulic-power-pack-with-multiple-solenoid-valve.webp',
    '/images/products/welded-hydraulic-cylinder.webp',
    '/images/seo/custom-hydraulic-cylinder-manufacturer-og.jpg',
    '/images/seo/default-og.jpg',
    '/images/seo/double-acting-hydraulic-cylinder-og.webp',
    '/images/seo/telescopic-hydraulic-cylinders-og.png',
    '/images/shared/clients/aqseptence-group-of-india-pvt-ltd.webp',
    '/images/shared/clients/asian-tubes-pvt-ltd.webp',
    '/images/shared/clients/creative-automation.webp',
    '/images/shared/clients/dhanwanti-engineering.webp',
    '/images/shared/clients/hardik-engineering.webp',
    '/images/shared/clients/indotech-industries.webp',
    '/images/shared/clients/itl-industries.webp',
    '/images/shared/clients/j-j-industries.webp',
    '/images/shared/clients/jai-industries.webp',
    '/images/shared/clients/modi-enterprise.webp',
    '/images/shared/clients/naturage-storage-solution-pvt-ltd.webp',
    '/images/shared/clients/neelam-fabricators.webp',
    '/images/shared/clients/optiflux-pipe-industries.webp',
    '/images/shared/clients/prikan-machinery-pvt-ltd.webp',
    '/images/shared/clients/rama-cylinders-pvt-ltd.webp',
    '/images/shared/clients/ratnamani-metal-tubes.webp',
    '/images/shared/clients/safari-construction-equipments-pvt-ltd.webp',
    '/images/shared/clients/sharda-industries.webp',
    '/images/shared/clients/spincast-solution-pvt-ltd.webp',
    '/images/shared/clients/sushobhit-moulds.webp',
    '/images/shared/logos/long-size-logohydralics-logo.png',
    '/images/shared/noise.webp',
    '/images/shared/testimonials/avatar-1.webp',
    '/images/shared/testimonials/avatar-2.webp',
    '/images/shared/testimonials/avatar-3.webp'
]

def generate_seo_name(path):
    directory = os.path.dirname(path)
    filename = os.path.basename(path)
    name, ext = os.path.splitext(filename)
    
    new_name = name
    
    # Rule 1: Replace generic avatars
    if 'avatar' in name:
        new_name = name.replace('avatar', 'hydraulic-industry-client-review')
    
    # Rule 2: Replace poorly named logos
    if 'long-size-logo' in name:
        new_name = 'honeywell-hydraulics-logo-full'
    
    # Rule 3: Replace generic non-descriptive names
    if 'noise' == name:
        new_name = 'industrial-texture-background'
    if 'default-og' == name:
        new_name = 'honeywell-hydraulics-manufacturer-india-og'
    
    # Rule 4: Add 'manufacturer' to products that don't have it
    if 'products/' in directory and 'manufacturer' not in new_name and 'system' not in new_name and 'pack' not in new_name and 'cylinder' in new_name:
        new_name = new_name + '-manufacturer'
        
    return f'{directory}/{new_name}{ext}'

moves = []
for img in images:
    new_img = generate_seo_name(img)
    if new_img != img:
        moves.append({
            'old_rel': img,
            'new_rel': new_img,
            'old_full': os.path.normpath(os.path.join(img_dir, '..', img.lstrip('/'))),
            'new_full': os.path.normpath(os.path.join(img_dir, '..', new_img.lstrip('/')))
        })

print(f"Applying {len(moves)} renames.")

# Find usages
usages = {move['old_rel']: [] for move in moves}
for root, _, files in os.walk(src_dir):
    if any(ignore in root for ignore in ['node_modules', '.next', 'public', '.git']):
        continue
    for file in files:
        if file.endswith(('.tsx', '.ts', '.md', '.json', '.css')):
            file_path = os.path.join(root, file)
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    for move in moves:
                        if move['old_rel'] in content:
                            usages[move['old_rel']].append(file_path)
            except Exception as e:
                pass

file_replacements = {}
for move in moves:
    for file_path in usages[move['old_rel']]:
        if file_path not in file_replacements:
            file_replacements[file_path] = []
        file_replacements[file_path].append((move['old_rel'], move['new_rel']))

for file_path, replacements in file_replacements.items():
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        for old_str, new_str in replacements:
            content = content.replace(old_str, new_str)
            
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {os.path.relpath(file_path, src_dir)}")
    except Exception as e:
        print(f"Failed to update {file_path}: {e}")

# Perform physical renames
for move in moves:
    if os.path.exists(move['old_full']):
        shutil.move(move['old_full'], move['new_full'])
        print(f"Renamed: {move['old_rel']} -> {move['new_rel']}")
    else:
        print(f"WARNING: File not found {move['old_full']}")

print("Done renaming!")
