# Color Customization Guide

This guide explains how to customize the colors of your portfolio to match your personal brand or preferences.

## Table of Contents

1. [Understanding the Color Scheme](#understanding-the-color-scheme)
2. [Quick Color Change](#quick-color-change)
3. [Detailed Color Reference](#detailed-color-reference)
4. [Creating Your Own Theme](#creating-your-own-theme)
5. [Color Palette Suggestions](#color-palette-suggestions)

---

## Understanding the Color Scheme

The portfolio uses a blue-themed color scheme with these main colors:

| Color Purpose | Light Mode | Dark Mode | Hex Code |
|---------------|------------|-----------|----------|
| Primary Accent | Coral/Rust | Coral/Rust | #D67553 |
| Text (Primary) | Dark Gray | Near White | #292929 / rgba(256,256,256,0.95) |
| Text (Secondary) | Medium Gray | Light Gray | lighten(#292929, 15%) |
| Background | Off-White | Very Dark Blue-Gray | #fafafa / #151e29 |
| Sidebar | Coral/Rust | Coral/Rust | #D67553 |

---

## Quick Color Change

### Option 1: Using Find & Replace (Easiest)

The fastest way to change the primary color throughout the entire site:

1. Open `assets/css/theme.css` in your text editor
2. Use Find & Replace (Ctrl+H or Cmd+H)
3. **Find**: `#D67553` (current coral color)
4. **Replace**: Your chosen color (e.g., `#3498db` for blue)
5. Click "Replace All"
6. Save the file

**Done!** Refresh your browser to see the changes.

### Option 2: Color Picker Tools

Not sure what color to use? Try these tools:

- **Adobe Color**: https://color.adobe.com/ - Create color schemes
- **Coolors**: https://coolors.co/ - Generate color palettes
- **HTML Color Picker**: https://htmlcolorcodes.com/color-picker/

---

## Detailed Color Reference

### Primary Colors (Most Important)

These are the main colors you'll want to customize:

#### 1. Primary Accent Color

**Location in CSS**: Line ~6
```css
/* Find this: */
$theme-color-primary: #D67553;

/* Change to your color: */
$theme-color-primary: #3498db;  /* Example: Blue */
```

**Used for**:
- Sidebar background
- Primary buttons
- Links and hover states
- Active navigation items

**Recommended**: Choose a bold, saturated color that represents your brand

#### 2. Text Colors

**Location in CSS**: Lines ~7-10
```css
/* Primary text color (headings, important text) */
$theme-text-color-primary: #292929;

/* Secondary text color (paragraphs, descriptions) */
$theme-text-color-secondary: lighten($theme-text-color-primary, 15%);

/* Light text color (subtle text) */
$theme-text-color-light: lighten($theme-text-color-primary, 40%);
```

**Tip**: Usually you don't need to change text colors unless you're doing a complete redesign

#### 3. Background Colors

**Location in CSS**: Lines ~10-12
```css
/* Light background (off-white) */
$theme-bg-light: #fafafa;

/* Dark background (used in dark mode) */
$theme-bg-dark: #223142;
```

---

### Dark Mode Colors

Dark mode has its own color scheme defined later in the CSS file.

**Location in CSS**: Search for `/* DARK MODE */` or `.dark-mode`

Key dark mode variables:

```css
/* Dark mode background (very dark blue-gray) */
--dark-mode-bg-primary: #151e29;

/* Dark mode secondary background */
--dark-mode-bg-secondary: lighten(#151e29, 5%);

/* Dark mode text (near white) */
--dark-mode-text-primary: rgba(256, 256, 256, 0.95);

/* Dark mode secondary text (light gray) */
--dark-mode-text-secondary: rgba(256, 256, 256, 0.7);
```

**To customize dark mode**:
1. Search for `.dark-mode` in the CSS file
2. Look for color definitions
3. Update hex codes or rgba values
4. Save and test with dark mode toggled on

---

## Creating Your Own Theme

Want to create a completely custom color scheme? Follow these steps:

### Step 1: Choose Your Colors

Pick colors for these elements:

1. **Primary Color** - Main accent (buttons, sidebar, links)
2. **Secondary Color** - Supporting color (optional)
3. **Background Light** - Light mode background
4. **Background Dark** - Dark mode background
5. **Text Color** - Main text color

**Color Scheme Resources**:
- Paletton: https://paletton.com/ - Interactive color scheme designer
- Material Design Colors: https://materialui.co/colors/ - Pre-made palettes
- Flat UI Colors: https://flatuicolors.com/ - Modern color palettes

### Step 2: Test Contrast

Ensure your colors have enough contrast for readability:

- **Tool**: https://webaim.org/resources/contrastchecker/
- **Minimum**: 4.5:1 for normal text, 3:1 for large text

### Step 3: Update CSS

Open `assets/css/theme.css` and update the color variables:

```css
/* YOUR CUSTOM COLORS */
$theme-color-primary: #YOUR_PRIMARY_COLOR;     /* e.g., #3498db */
$theme-color-secondary: #YOUR_SECONDARY_COLOR; /* e.g., #2ecc71 */
$theme-bg-light: #YOUR_LIGHT_BG;              /* e.g., #f8f9fa */
$theme-bg-dark: #YOUR_DARK_BG;                /* e.g., #1a1a2e */
$theme-text-color-primary: #YOUR_TEXT_COLOR;   /* e.g., #2c3e50 */
```

### Step 4: Update Dark Mode

Search for the dark mode section and update:

```css
/* Dark Mode Background Colors */
.dark-mode {
  --dark-mode-bg-primary: #YOUR_DARK_BG;
  --dark-mode-bg-secondary: #YOUR_DARKER_BG;
  --dark-mode-text-primary: #YOUR_LIGHT_TEXT;
}
```

### Step 5: Test Thoroughly

- View each page in both light and dark modes
- Check text readability
- Verify button colors stand out
- Test link hover states
- View on mobile and desktop

---

## Color Palette Suggestions

### Professional Blue Theme
```css
$theme-color-primary: #2c3e50;     /* Dark Blue */
$theme-bg-light: #ecf0f1;          /* Light Gray */
$theme-bg-dark: #1a252f;           /* Very Dark Blue */
```

**Good for**: Corporate, professional, tech-focused portfolios

### Modern Purple Theme
```css
$theme-color-primary: #9b59b6;     /* Purple */
$theme-bg-light: #f8f9fa;          /* Off White */
$theme-bg-dark: #2c2c54;           /* Dark Purple */
```

**Good for**: Creative, design-focused, modern portfolios

### Energetic Orange Theme
```css
$theme-color-primary: #e74c3c;     /* Red-Orange */
$theme-bg-light: #fafafa;          /* White */
$theme-bg-dark: #2c1810;           /* Dark Brown */
```

**Good for**: Bold, energetic, standout portfolios

### Clean Green Theme
```css
$theme-color-primary: #27ae60;     /* Green */
$theme-bg-light: #f1f8f4;          /* Light Green-Gray */
$theme-bg-dark: #1e3a2b;           /* Dark Green */
```

**Good for**: Eco-friendly, health, nature-related portfolios

### Elegant Teal Theme
```css
$theme-color-primary: #1abc9c;     /* Teal */
$theme-bg-light: #f0f9f7;          /* Very Light Teal */
$theme-bg-dark: #0e3b34;           /* Dark Teal */
```

**Good for**: Modern, clean, professional portfolios

---

## Advanced Customization

### Gradient Backgrounds

Want a gradient instead of solid color? Update the sidebar:

```css
/* Find the .header class and change: */
.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* Purple gradient example */
}
```

**Gradient Generators**:
- CSS Gradient: https://cssgradient.io/
- UI Gradients: https://uigradients.com/

### Hover Effects

Customize button and link hover colors:

```css
/* Find button hover states and update: */
.btn-primary:hover {
  background-color: #YOUR_HOVER_COLOR;
  border-color: #YOUR_HOVER_COLOR;
}
```

### Syntax Highlighting (for dark mode)

If you're adding code snippets, customize code block colors:

```css
.dark-mode code {
  background-color: #1e1e1e;
  color: #d4d4d4;
  border: 1px solid #404040;
}
```

---

## Troubleshooting

### Colors Not Changing

1. **Clear browser cache**: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
2. **Check file path**: Verify `theme.css` is being loaded
3. **Check for typos**: Color codes must start with # and be 6 characters
4. **Inspect element**: Use browser DevTools (F12) to see what styles are applied

### Poor Contrast/Hard to Read

1. Use a contrast checker: https://webaim.org/resources/contrastchecker/
2. Lighten text on dark backgrounds
3. Darken text on light backgrounds
4. Avoid pure black (#000000) - use dark gray instead

### Dark Mode Looks Wrong

1. Search for all `.dark-mode` rules in CSS
2. Make sure dark mode backgrounds are actually dark
3. Ensure text colors are light enough
4. Test all buttons and links in dark mode

---

## Best Practices

1. **Stick to 2-3 main colors** - Too many colors looks unprofessional
2. **Use color psychology** - Blue = trust, Green = growth, Red = energy
3. **Maintain consistency** - Use the same colors throughout
4. **Test accessibility** - Ensure good contrast ratios
5. **Get feedback** - Ask others if colors work well together

---

## Testing Your Colors

Before finalizing your color scheme:

- [ ] Test in light mode on all pages
- [ ] Test in dark mode on all pages
- [ ] Check on mobile device
- [ ] Verify text is readable everywhere
- [ ] Test in different browsers
- [ ] Ask someone for feedback
- [ ] Use a contrast checker tool

---

## Need Help?

- Use online color scheme generators
- Check out portfolios you like and note their colors
- Ask for feedback in design communities
- Remember: When in doubt, keep it simple!

---

**Pro Tip**: Save your original `theme.css` file as `theme-backup.css` before making changes. That way you can always revert if needed!

Good luck customizing your colors! 🎨
