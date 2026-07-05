import sys
import os
import subprocess

try:
    from rembg import remove
    from PIL import Image
except ImportError:
    print("Installing requirements...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "rembg", "Pillow"])
    from rembg import remove
    from PIL import Image

input_path = r'C:\Users\DELL\Downloads\Hydraulic powerpack.jpg'
output_path = r'C:\Users\DELL\Desktop\Honeywell Seo\website\public\images\products\hero\hydraulic-power-pack.webp'

print('Loading image from', input_path)
with open(input_path, 'rb') as i:
    input_data = i.read()

print('Removing background...')
output_data = remove(input_data)

# Save temporarily
temp_png = output_path + '.temp.png'
with open(temp_png, 'wb') as o:
    o.write(output_data)

print('Optimizing image...')
img = Image.open(temp_png)

# Convert to RGBA if not already
if img.mode != 'RGBA':
    img = img.convert('RGBA')

# Crop to non-transparent bounding box
bbox = img.getbbox()
if bbox:
    img = img.crop(bbox)

# Calculate aspect ratio
aspect = img.width / img.height
if img.width > 1200:
    new_width = 1200
    new_height = int(1200 / aspect)
    img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)

# Ensure the output directory exists
os.makedirs(os.path.dirname(output_path), exist_ok=True)

# Save as optimized webp
img.save(output_path, 'WEBP', quality=85, method=6, lossless=False)
os.remove(temp_png)

print('Successfully created optimized webp without background at', output_path)
