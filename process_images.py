import os
from PIL import Image
from rembg import remove

source_dir = r"C:\Users\DELL\Downloads\product hero Image-20260623T094125Z-3-001\product hero Image"
dest_dir = r"c:\Users\DELL\Desktop\Honeywell Seo\website\public\images\products"

# Mappings of source file to target destination file
mappings = {
    "Hydraulic Cylinder.jpg": "hydraulic-cylinders/hydraulic-cylinders-ahmedabad.webp",
    "Hydraulic powerpack.jpg": "hydraulic-power-packs/hydraulic-power-pack-manufacturer.webp",
    "Manifold Block.avif": "hydraulic-manifold-blocks-manufacturer.webp",
    "Gear Pump.jpg": "custom-hydraulic-systems-ahmedabad.webp"
}

os.makedirs(os.path.join(dest_dir, "hydraulic-cylinders"), exist_ok=True)
os.makedirs(os.path.join(dest_dir, "hydraulic-power-packs"), exist_ok=True)

for src_name, dst_name in mappings.items():
    src_path = os.path.join(source_dir, src_name)
    dst_path = os.path.join(dest_dir, dst_name)
    
    if not os.path.exists(src_path):
        print(f"Skipping {src_name}, not found.")
        continue
        
    print(f"Processing {src_name}...")
    try:
        # Load image
        input_img = Image.open(src_path)
        
        # Remove background
        output_img = remove(input_img)
        
        # Create a white background
        white_bg = Image.new("RGBA", output_img.size, "WHITE")
        # Paste the image on the white background using the image's alpha as mask
        white_bg.paste(output_img, (0, 0), output_img)
        
        # Convert to RGB (WebP doesn't strictly need RGBA if bg is solid white)
        final_img = white_bg.convert("RGB")
        
        # Resize to a reasonable dimension (e.g. max 800x800) maintaining aspect ratio
        final_img.thumbnail((800, 800))
        
        # Save as webp
        final_img.save(dst_path, format="WEBP", quality=85)
        print(f"Saved {dst_path}")
    except Exception as e:
        print(f"Error processing {src_name}: {e}")
