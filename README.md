# Student Portfolio Template

> This instance has been customized for: Ezenwanyi Duru

A beginner-friendly portfolio website template with blue color scheme, dark mode, and extensive documentation. Perfect for students and new developers.

## Features

- Responsive design (mobile, tablet, desktop)
- Dark mode toggle with cookie persistence
- Fixed sidebar navigation
- Heavily commented code
- GitHub Pages ready
- No build process required (pure HTML/CSS/JS)

## Quick Start

1. **Get Files**: Clone or download this repository
2. **Customize Content**:
   - Replace `[YOUR NAME]` and `[YOUR TITLE/ROLE]` placeholders
   - Add profile photo to `assets/images/profile-placeholder.jpg`
   - Update social media links
   - Add project images to `assets/images/projects/`
3. **Test**: Open `index.html` in your browser

## File Structure

```
general-portfolio/
├── index.html                    # Landing page (4 skills, 3 projects)
├── portfolio.html                # Full portfolio (3 projects)
├── project-template.html         # Reusable project detail template
├── assets/
│   ├── css/theme.css            # Blue theme styles
│   ├── js/dark-mode.js          # Dark mode functionality
│   ├── plugins/                 # Bootstrap, jQuery, FontAwesome
│   └── images/                  # Profile and project images
└── docs/
    ├── CUSTOMIZATION-GUIDE.md   # Personalization walkthrough
    ├── ADDING-PROJECTS.md       # Project showcase guide
    ├── COLOR-CUSTOMIZATION.md   # Theme customization
    └── SETUP.md                 # GitHub Pages deployment
```

## Customization Checklist

### Essential
- [ ] Replace `[YOUR NAME]` and `[YOUR TITLE/ROLE]` placeholders
- [ ] Add profile photo
- [ ] Update social media links
- [ ] Write bio/introduction

### Content
- [ ] Update skills grid (currently: Git, Python, JavaScript, SQL)
- [ ] Add project images
- [ ] Update project titles and descriptions
- [ ] Link to GitHub repos and live demos

### Before Launch
- [ ] Test on mobile devices
- [ ] Verify all links work
- [ ] Test dark mode
- [ ] Check images load correctly

## Documentation

- **[docs/CUSTOMIZATION-GUIDE.md](docs/CUSTOMIZATION-GUIDE.md)** - Step-by-step personalization
- **[docs/ADDING-PROJECTS.md](docs/ADDING-PROJECTS.md)** - Adding and organizing projects
- **[docs/COLOR-CUSTOMIZATION.md](docs/COLOR-CUSTOMIZATION.md)** - Changing color schemes
- **[docs/SETUP.md](docs/SETUP.md)** - GitHub Pages deployment

## Technologies

- HTML5, CSS3, JavaScript
- Bootstrap 4 (responsive grid)
- jQuery (DOM manipulation)
- FontAwesome (icons)
- js-cookie (dark mode persistence)

## Deployment

**GitHub Pages (Recommended)**: Free hosting with automatic updates. See [docs/SETUP.md](docs/SETUP.md) for setup.

**Alternatives**: Netlify, Vercel, or traditional web hosting.

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Images not showing | Check file paths (case-sensitive), verify images exist |
| Dark mode broken | Ensure jQuery loads before dark-mode.js, check browser console (F12) |
| Layout broken | Verify Bootstrap CSS is loading, check for missing closing tags |
| Not responsive | Confirm viewport meta tag in `<head>`, test with F12 device toolbar |

## Getting Help

1. Check documentation in `docs/` folder
2. Read code comments (all files are heavily commented)
3. Check browser console for errors (F12)
4. Search Stack Overflow for common issues

## License

Free to use for personal and commercial projects. No attribution required.

---

**Start customizing**: [docs/CUSTOMIZATION-GUIDE.md](docs/CUSTOMIZATION-GUIDE.md)
**