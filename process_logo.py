import sys
from PIL import Image, ImageDraw

def process_logo(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    
    # Create a circular mask
    mask = Image.new("L", img.size, 0)
    draw = ImageDraw.Draw(mask)
    
    # The circle seems to touch the edges, let's draw an ellipse
    # taking the minimum of width/height to make a perfect circle in the center
    w, h = img.size
    min_dim = min(w, h)
    offset_x = (w - min_dim) // 2
    offset_y = (h - min_dim) // 2
    
    # Draw solid white circle
    draw.ellipse((offset_x, offset_y, offset_x + min_dim, offset_y + min_dim), fill=255)
    
    # Create an empty image with transparent background
    result = Image.new("RGBA", img.size, (0, 0, 0, 0))
    result.paste(img, (0, 0), mask=mask)
    
    # Crop to the circle
    result = result.crop((offset_x, offset_y, offset_x + min_dim, offset_y + min_dim))
    
    # Resize to a reasonable web size (e.g., 200x200 for navbar, maybe 500x500 for general use)
    result = result.resize((200, 200), Image.Resampling.LANCZOS)
    
    result.save(output_path, format="PNG")
    print(f"Saved to {output_path}")

if __name__ == "__main__":
    process_logo(sys.argv[1], sys.argv[2])
