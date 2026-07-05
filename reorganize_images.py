import os
import shutil

img_dir = r'C:\Users\DELL\Desktop\Honeywell Seo\website\public\images'
src_dir = r'C:\Users\DELL\Desktop\Honeywell Seo\website'

# 1. Collect all images
images = []
for root, _, files in os.walk(img_dir):
    for file in files:
        if file.endswith(('.webp', '.jpg', '.png', '.svg', '.jpeg')):
            full_path = os.path.join(root, file)
            rel_path = '/images/' + os.path.relpath(full_path, img_dir).replace(os.sep, '/')
            images.append({'full_path': full_path, 'rel_path': rel_path})

# 2. Find usages
usages = {img['rel_path']: [] for img in images}
for root, _, files in os.walk(src_dir):
    if any(ignore in root for ignore in ['node_modules', '.next', 'public', '.git']):
        continue
    for file in files:
        if file.endswith(('.tsx', '.ts', '.md', '.json', '.css')):
            file_path = os.path.join(root, file)
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    for img in images:
                        if img['rel_path'] in content:
                            usages[img['rel_path']].append(file_path)
            except Exception as e:
                pass

# 3. Compute new paths
moves = [] # list of dicts: {'old_rel': ..., 'new_rel': ..., 'old_full': ..., 'new_full': ...}

for img in images:
    old_rel = img['rel_path'] # e.g. /images/hero/img.webp
    old_full = img['full_path']
    filename = os.path.basename(old_full)
    is_used = len(usages[old_rel]) > 0

    new_rel = old_rel

    if not is_used:
        new_rel = f'/images/unused/{filename}'
    else:
        # Categorize
        if '/og/' in old_rel:
            new_rel = f'/images/seo/{filename}'
        elif '/clients/' in old_rel or '/logos/' in old_rel or '/testimonials/' in old_rel or old_rel == '/images/noise.webp':
            if '/clients/' in old_rel:
                new_rel = f'/images/shared/clients/{filename}'
            elif '/logos/' in old_rel:
                new_rel = f'/images/shared/logos/{filename}'
            elif '/testimonials/' in old_rel:
                new_rel = f'/images/shared/testimonials/{filename}'
            else:
                new_rel = f'/images/shared/{filename}'
        elif '/about/' in old_rel or '/facility/' in old_rel or '/manufacturing/' in old_rel:
            new_rel = f'/images/company/{filename}'
        elif old_rel.startswith('/images/hero/') or old_rel.startswith('/images/home/'):
            # If it's something like /images/home/hero/img.webp, just put it in /images/home/img.webp
            new_rel = f'/images/home/{filename}'
        elif old_rel.startswith('/images/products/'):
            # Keep subdirectories of products if they exist
            sub_path = old_rel.replace('/images/products/', '')
            new_rel = f'/images/products/{sub_path}'
            
    # Remove redundant slashes if any
    new_rel = new_rel.replace('//', '/')
    new_full = os.path.normpath(os.path.join(img_dir, '..', new_rel.lstrip('/')))
    
    if old_rel != new_rel:
        moves.append({
            'old_rel': old_rel,
            'new_rel': new_rel,
            'old_full': old_full,
            'new_full': new_full
        })

print(f"Planning to move {len(moves)} images out of {len(images)}")

# 4. Perform the replacements in code first
# Group files that need replacing
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

# 5. Move the actual files
for move in moves:
    os.makedirs(os.path.dirname(move['new_full']), exist_ok=True)
    if os.path.exists(move['old_full']):
        shutil.move(move['old_full'], move['new_full'])
        print(f"Moved {move['old_rel']} -> {move['new_rel']}")

# 6. Clean up empty directories in public/images
for root, dirs, files in os.walk(img_dir, topdown=False):
    for d in dirs:
        dir_path = os.path.join(root, d)
        try:
            if not os.listdir(dir_path):
                os.rmdir(dir_path)
                print(f"Removed empty directory {os.path.relpath(dir_path, img_dir)}")
        except Exception as e:
            pass

print("Done organizing images!")
