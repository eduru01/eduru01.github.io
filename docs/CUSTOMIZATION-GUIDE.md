# Portfolio Customization Guide

This guide will walk you through customizing your portfolio template step by step. Follow along in order for the best results!

## Table of Contents

1. [Before You Start](#before-you-start)
2. [Step 1: Update Personal Information](#step-1-update-personal-information)
3. [Step 2: Add Your Profile Photo](#step-2-add-your-profile-photo)
4. [Step 3: Customize Social Links](#step-3-customize-social-links)
5. [Step 4: Update Skills Section](#step-4-update-skills-section)
6. [Step 5: Add Your Projects](#step-5-add-your-projects)
7. [Step 6: Customize Your Bio](#step-6-customize-your-bio)
8. [Step 7: Add Your Resume](#step-7-add-your-resume)
9. [Final Checklist](#final-checklist)

---

## Before You Start

### Tools You'll Need
- **Text Editor** - VS Code, Sublime Text, Notepad++, or even basic Notepad
- **Web Browser** - Chrome, Firefox, or Safari for testing
- **Your Content** - Photos, project descriptions, links, etc.

### Find & Replace Tip
Most text editors have a "Find and Replace All" feature (usually Ctrl+H or Cmd+H). This is the fastest way to update placeholder text throughout all files!

---

## Step 1: Update Personal Information

### What to Replace

Throughout the HTML files, you'll find these placeholders:
- `[YOUR NAME]` - Your full name
- `[YOUR TITLE/ROLE]` - e.g., "Full Stack Developer" or "Computer Science Student"

### How to Do It

**Option A: Find and Replace (Recommended)**

1. Open your text editor
2. Open all three HTML files (`index.html`, `portfolio.html`, `project-template.html`)
3. Use Find and Replace (Ctrl+H or Cmd+H):
   - Find: `[YOUR NAME]`
   - Replace: Your actual name (e.g., "Jane Smith")
   - Click "Replace All"
4. Repeat for `[YOUR TITLE/ROLE]`

**Option B: Manual Update**

If you prefer to do it manually, search for each placeholder and update it in:
- `index.html` (appears ~5 times)
- `portfolio.html` (appears ~3 times)
- `project-template.html` (appears ~3 times)

### Files to Update
- ✅ `index.html`
- ✅ `portfolio.html`
- ✅ `project-template.html`

---

## Step 2: Add Your Profile Photo

### Prepare Your Photo

1. **Find a good photo** - Professional headshot or clear photo of yourself
2. **Crop it square** - Use any photo editor to crop to 1:1 ratio (e.g., 400x400px)
3. **Save as JPG** - Name it `profile-placeholder.jpg`

### Photo Specifications
- **Dimensions**: 400x400 pixels (square)
- **Format**: JPG or PNG
- **File Size**: Under 200KB recommended
- **Quality**: Clear, well-lit, professional

### Add to Your Portfolio

1. Navigate to `assets/images/`
2. Add your photo file
3. Name it `profile-placeholder.jpg` (or update the HTML if you use a different name)

### Update HTML (if using different filename)

If you named your photo something else, update these lines in all HTML files:

```html
<!-- Find this: -->
<img class="profile-image mb-3 rounded-circle mx-auto"
     src="assets/images/profile-placeholder.jpg"
     alt="Profile photo of [YOUR NAME]">

<!-- Change to: -->
<img class="profile-image mb-3 rounded-circle mx-auto"
     src="assets/images/your-photo-name.jpg"
     alt="Profile photo of Your Name">
```

### Files to Update
- ✅ `index.html` (line ~46)
- ✅ `portfolio.html` (line ~41)
- ✅ `project-template.html` (line ~41)

---

## Step 3: Customize Social Links

### Available Social Icons

The template includes 5 social link placeholders:
1. LinkedIn
2. GitHub
3. Twitter
4. Email
5. CodePen

### Update Your Links

**Location**: In the `<ul class="social-list">` section of each HTML file

**Before**:
```html
<li class="list-inline-item">
    <a href="#" target="_blank" aria-label="LinkedIn Profile">
        <i class="fab fa-linkedin-in fa-fw"></i>
    </a>
</li>
```

**After** (with your actual link):
```html
<li class="list-inline-item">
    <a href="https://linkedin.com/in/yourprofile" target="_blank" aria-label="LinkedIn Profile">
        <i class="fab fa-linkedin-in fa-fw"></i>
    </a>
</li>
```

### Add/Remove Social Links

**To Remove a Link**: Delete the entire `<li>` block

**To Add a New Link**:
1. Find more icons at [FontAwesome](https://fontawesome.com/icons?d=gallery&s=brands)
2. Copy an existing `<li>` block
3. Update the `href` and icon class

**Example - Adding Instagram**:
```html
<li class="list-inline-item">
    <a href="https://instagram.com/yourhandle" target="_blank" aria-label="Instagram">
        <i class="fab fa-instagram fa-fw"></i>
    </a>
</li>
```

### Email Link Format

For email, use the `mailto:` format:
```html
<a href="mailto:your.email@example.com" target="_blank" aria-label="Email">
```

### Files to Update
- ✅ `index.html` (lines ~49-59)
- ✅ `portfolio.html` (lines ~46-56)
- ✅ `project-template.html` (lines ~46-56)

---

## Step 4: Update Skills Section

### Location

The skills grid is in `index.html` starting around line 139.

### Customizing Skills

Each skill follows this pattern:

```html
<div class="item col-6 col-lg-3">
    <div class="item-inner text-center">
        <!-- Icon - Find more at fontawesome.com/icons -->
        <div class="item-icon"><i class="fab fa-js-square"></i></div>
        <!-- Skill Name -->
        <h3 class="item-title">JavaScript</h3>
    </div>
</div>
```

### How to Change a Skill

1. **Find a new icon** at [FontAwesome Icons](https://fontawesome.com/icons)
2. **Copy the icon class** (e.g., `fab fa-python`)
3. **Update the HTML**:

```html
<!-- Change this: -->
<div class="item-icon"><i class="fab fa-js-square"></i></div>
<h3 class="item-title">JavaScript</h3>

<!-- To this: -->
<div class="item-icon"><i class="fab fa-python"></i></div>
<h3 class="item-title">Python</h3>
```

### Adding More Skills

To add more skills, copy an entire skill block and paste it after the last one:

```html
<!-- Add after the last skill: -->
<div class="item col-6 col-lg-3">
    <div class="item-inner text-center">
        <div class="item-icon"><i class="fab fa-docker"></i></div>
        <h3 class="item-title">Docker</h3>
    </div>
</div>
```

### Removing Skills

Simply delete the entire `<div class="item col-6 col-lg-3">...</div>` block for skills you don't want.

### Recommended Icon Types
- **Languages**: `fab fa-js-square`, `fab fa-python`, `fab fa-java`
- **Frameworks**: `fab fa-react`, `fab fa-node-js`, `fab fa-angular`
- **Tools**: `fab fa-git-alt`, `fab fa-docker`, `fas fa-database`
- **General**: `fas fa-code`, `fas fa-mobile-alt`, `fas fa-server`

### Files to Update
- ✅ `index.html` (lines ~139-225)

---

## Step 5: Add Your Projects

This is covered in detail in [ADDING-PROJECTS.md](ADDING-PROJECTS.md), but here's a quick overview:

### Update Project Images

1. Add your project screenshots to `assets/images/projects/`
2. Name them `project-1.jpg`, `project-2.jpg`, etc.
3. Recommended size: 800x600 pixels

### Update Project Information

For each project card, update:
- **Image** path
- **Title** of the project
- **Description** (1-2 sentences)
- **Link** to project detail page or live demo

**Example**:

```html
<div class="col-md-6 mb-5">
    <div class="card project-card">
        <div class="row no-gutters">
            <div class="col-lg-4 card-img-holder">
                <!-- Update image path -->
                <img src="assets/images/projects/my-awesome-app.jpg"
                     class="card-img"
                     alt="Screenshot of My Awesome App">
            </div>
            <div class="col-lg-8">
                <div class="card-body">
                    <!-- Update title -->
                    <h5 class="card-title">
                        <a href="my-app-details.html" class="theme-link">
                            My Awesome App
                        </a>
                    </h5>
                    <!-- Update description -->
                    <p class="card-text">
                        A mobile app that helps users track their daily habits
                        using React Native and Firebase.
                    </p>
                </div>
            </div>
        </div>
        <!-- Update link in hover overlay -->
        <div class="link-mask">
            <a class="link-mask-link" href="my-app-details.html"></a>
            <div class="link-mask-text">
                <a class="btn btn-secondary" href="my-app-details.html">
                    <i class="fas fa-eye mr-2"></i>View Project
                </a>
            </div>
        </div>
    </div>
</div>
```

### Files to Update
- ✅ `index.html` (Featured Projects section, ~lines 434-583)
- ✅ `portfolio.html` (All Projects section, ~lines 150-450)

---

## Step 6: Customize Your Bio

### Hero Section Bio (index.html)

**Location**: Around line 120 in `index.html`

**Current**:
```html
<div class="bio mb-4 my-3">
    [Write a brief bio about yourself here...]
</div>
```

**Updated**:
```html
<div class="bio mb-4 my-3">
    I'm a Computer Science student at XYZ University with a passion for
    web development and solving real-world problems through code. Currently
    seeking internship opportunities for Summer 2024.
</div>
```

**Tips**:
- Keep it to 2-4 sentences
- Mention your education or current status
- Include what you're looking for (internships, jobs, freelance, etc.)
- Show your personality while staying professional

### Sidebar Bio

**Location**: In all three HTML files, in the sidebar navigation

**Current**:
```html
<div class="bio mb-3">
    Hi, my name is [YOUR NAME] and I'm a [YOUR TITLE/ROLE].
    Welcome to my portfolio website!
</div>
```

**Updated**:
```html
<div class="bio mb-3">
    Hi, I'm Jane Smith and I'm a Full Stack Developer.
    Welcome to my portfolio!
</div>
```

**Tips**:
- Keep it very brief (1-2 sentences)
- Make it welcoming and friendly
- Include your name and role

### "What I Do" Section

**Location**: Around line 136 in `index.html`

Update the section intro to describe your experience:

```html
<div class="section-intro mb-5">
    I have 2 years of experience building web applications using modern
    frameworks like React and Node.js. I'm passionate about creating
    user-friendly interfaces and writing clean, maintainable code.
</div>
```

### Files to Update
- ✅ `index.html` (Multiple bio sections)
- ✅ `portfolio.html` (Sidebar bio)
- ✅ `project-template.html` (Sidebar bio)

---

## Step 7: Add Your Resume

### Option A: Link to Google Drive or Dropbox

1. Upload your resume PDF to Google Drive or Dropbox
2. Get a shareable link
3. Update the resume link in HTML

**Google Drive**:
- Upload PDF → Right-click → Get link → Change to "Anyone with the link"
- Copy the sharing link

**Dropbox**:
- Upload PDF → Share → Create link → Copy link

### Option B: Link to Local PDF

1. Create a `files` folder: `assets/files/`
2. Add your resume PDF: `assets/files/resume.pdf`
3. Update the link:

```html
<a class="nav-link" href="assets/files/resume.pdf" target="_blank">
    <i class="fas fa-file-alt fa-fw mr-2"></i>Resume
</a>
```

### Update Resume Links

**Find this in all HTML files**:
```html
<a class="nav-link" href="#" target="_blank">
    <i class="fas fa-file-alt fa-fw mr-2"></i>Resume
</a>
```

**Change to**:
```html
<a class="nav-link" href="YOUR_RESUME_LINK_HERE" target="_blank">
    <i class="fas fa-file-alt fa-fw mr-2"></i>Resume
</a>
```

### Files to Update
- ✅ `index.html` (line ~70)
- ✅ `portfolio.html` (line ~74)
- ✅ `project-template.html` (line ~68)

---

## Final Checklist

Before launching your portfolio, go through this checklist:

### Content
- [ ] All `[PLACEHOLDER]` text has been replaced
- [ ] Profile photo is added and displays correctly
- [ ] All social links are updated and working
- [ ] Skills section reflects your actual skills
- [ ] Project information is accurate and complete
- [ ] Bio sections are personalized
- [ ] Resume link works

### Testing
- [ ] Open each page in your browser
- [ ] Test all navigation links
- [ ] Click on project cards and verify links work
- [ ] Test social media links
- [ ] Test dark mode toggle
- [ ] View on mobile device or use browser's responsive mode
- [ ] Check for typos and grammar errors

### Images
- [ ] All images load correctly
- [ ] Images are optimized (under 500KB each)
- [ ] Alt text is descriptive
- [ ] No broken image icons

### Polish
- [ ] Page titles are updated
- [ ] Meta descriptions are customized
- [ ] Favicon is added (optional)
- [ ] Footer is updated if you uncommented it

---

## Next Steps

Now that you've customized your portfolio:

1. **Test Thoroughly** - Click every link, test every feature
2. **Get Feedback** - Show it to friends, mentors, or classmates
3. **Deploy** - Follow [docs/SETUP.md](docs/SETUP.md) to publish on GitHub Pages
4. **Keep Updated** - Add new projects as you complete them

---

## Need Help?

- Check the inline comments in the HTML files
- Review [ADDING-PROJECTS.md](ADDING-PROJECTS.md) for project-specific help
- See [COLOR-CUSTOMIZATION.md](COLOR-CUSTOMIZATION.md) to change the color scheme
- Read [docs/SETUP.md](docs/SETUP.md) for deployment help

**Stuck?** Look for error messages in your browser's console (press F12) - they often point directly to the problem!

---

Good luck with your portfolio! 🎉
