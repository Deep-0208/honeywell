from PIL import Image
import os

input_path = r'C:\Users\DELL\Downloads\6. powerpack with Accumulator.JPG'
output_path = r'C:\Users\DELL\Desktop\Honeywell Seo\website\public\images\products\hero\hydraulic-power-pack-with-accumulator-manufacturer.webp'

print('Loading image...')
img = Image.open(input_path)

if img.mode != 'RGB':
    img = img.convert('RGB')

# Resize if too large
aspect = img.width / img.height
if img.width > 1200:
    new_width = 1200
    new_height = int(1200 / aspect)
    img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)

# Ensure the output directory exists
os.makedirs(os.path.dirname(output_path), exist_ok=True)

img.save(output_path, 'WEBP', quality=85, method=6)
print(f'Successfully optimized image to {output_path}')
