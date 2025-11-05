# Images Folder

This folder contains all images used in your portfolio website.

## Required Images

### Profile Photo
- **File**: `profile-placeholder.jpg`
- **Location**: `assets/images/`
- **Recommended Size**: 400x400 pixels (square)
- **Format**: JPG or PNG
- **Usage**: Your profile photo appears in the sidebar navigation
- **Tips**:
  - Use a professional headshot
  - Ensure good lighting and clear background
  - Square crop works best as it displays as a circle

### Project Images
- **Location**: `assets/images/projects/`
- **Recommended Size**: 800x600 pixels (landscape)
- **Format**: JPG or PNG (JPG recommended for smaller file size)
- **Required Files**:
  - `project-1.jpg` - Featured Project 1
  - `project-2.jpg` - Featured Project 2
  - `project-3.jpg` - Featured Project 3
  - `project-4.jpg` - Featured Project 4
  - `project-5.jpg` - Portfolio Project 5
  - `project-6.jpg` - Portfolio Project 6

### Project Detail Images (Optional)
- **Location**: `assets/images/projects/`
- **Recommended Size**: 1200x800 pixels
- **Format**: JPG or PNG
- **Usage**: Screenshots showing project features in detail pages
- **Naming**: `project-detail-1.jpg`, `project-detail-2.jpg`, etc.

## How to Add Your Images

1. **Prepare Your Images**:
   - Resize images to recommended dimensions
   - Optimize file size (aim for under 500KB per image)
   - Use descriptive filenames

2. **Add Profile Photo**:
   - Place your photo in `assets/images/`
   - Name it `profile-placeholder.jpg` (or update HTML to match your filename)

3. **Add Project Images**:
   - Place project screenshots in `assets/images/projects/`
   - Name them `project-1.jpg`, `project-2.jpg`, etc.
   - Update HTML files to use your actual project names

## Image Optimization Tools

To keep your site fast, compress images before uploading:

- **Online Tools**:
  - TinyPNG: https://tinypng.com/ (PNG/JPG compression)
  - Squoosh: https://squoosh.app/ (Google's image compressor)
  - Optimizilla: https://imagecompressor.com/

- **Desktop Tools**:
  - Windows: Microsoft Photos, Paint.NET
  - Mac: Preview, Photos app
  - Cross-platform: GIMP (free)

## Free Stock Photos (If Needed)

If you need placeholder images while building your portfolio:

- Unsplash: https://unsplash.com/ (high-quality, free photos)
- Pexels: https://www.pexels.com/ (free stock photos and videos)
- Pixabay: https://pixabay.com/ (free images and videos)

**Note**: Replace placeholder images with your actual project screenshots before launching!

## Troubleshooting

**Image not showing up?**
- Check the file path is correct in HTML
- Verify the file extension matches (.jpg vs .png)
- Ensure the file is in the right folder
- Check the image filename (case-sensitive on some systems)

**Image looks stretched or distorted?**
- Use the recommended image dimensions
- Check the CSS for that element
- Try a different aspect ratio (e.g., 4:3 or 16:9)

**Images loading slowly?**
- Compress images using tools listed above
- Aim for file sizes under 500KB
- Consider using WebP format for better compression
