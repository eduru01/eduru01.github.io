# Adding Projects to Your Portfolio

This guide explains how to add new projects to your portfolio, from creating project cards to building detailed project pages.

## Table of Contents

1. [Quick Start](#quick-start)
2. [Adding a Project Card](#adding-a-project-card)
3. [Creating a Project Detail Page](#creating-a-project-detail-page)
4. [Project Images Best Practices](#project-images-best-practices)
5. [Examples](#examples)

---

## Quick Start

To add a new project, you'll need:
1. Project screenshot/image (800x600px recommended)
2. Project title and brief description
3. Links to GitHub repo and/or live demo (optional)
4. Additional screenshots for detail page (optional)

---

## Adding a Project Card

Project cards appear on two pages:
- **index.html** - Featured Projects section (show your best 3-4 projects)
- **portfolio.html** - Full portfolio (all your projects)

### Step 1: Add Project Image

1. Save your project screenshot to `assets/images/projects/`
2. Name it descriptively (e.g., `todo-app.jpg`, `weather-dashboard.jpg`)
3. Recommended size: 800x600 pixels

### Step 2: Copy a Project Card Template

Find an existing project card in the HTML and copy the entire block:

```html
<!-- ==================== PROJECT CARD ==================== -->
<div class="col-md-6 mb-5">
    <div class="card project-card">
        <div class="row no-gutters">
            <!-- Project Image -->
            <div class="col-lg-4 card-img-holder">
                <img src="assets/images/projects/project-1.jpg"
                     class="card-img"
                     alt="Screenshot of Project Name">
            </div>

            <!-- Project Details -->
            <div class="col-lg-8">
                <div class="card-body">
                    <h5 class="card-title">
                        <a href="project-template.html" class="theme-link">
                            [Project Name]
                        </a>
                    </h5>
                    <p class="card-text">
                        [Brief project description]
                    </p>
                </div>
            </div>
        </div>

        <!-- Hover Overlay -->
        <div class="link-mask">
            <a class="link-mask-link" href="project-template.html"></a>
            <div class="link-mask-text">
                <a class="btn btn-secondary" href="project-template.html">
                    <i class="fas fa-eye mr-2"></i>View Project
                </a>
            </div>
        </div>
    </div>
</div>
<!-- ==================== END PROJECT CARD ==================== -->
```

### Step 3: Customize the Project Card

Replace these parts with your project information:

1. **Image Path**:
```html
<!-- Change: -->
<img src="assets/images/projects/project-1.jpg"

<!-- To: -->
<img src="assets/images/projects/your-project-name.jpg"
```

2. **Alt Text**:
```html
<!-- Change: -->
alt="Screenshot of Project Name"

<!-- To: -->
alt="Screenshot of Todo App Dashboard"
```

3. **Project Title**:
```html
<!-- Change: -->
[Project Name]

<!-- To: -->
Todo App
```

4. **Description**:
```html
<!-- Change: -->
[Brief project description]

<!-- To: -->
A task management app built with React and Firebase that helps users organize their daily tasks and track productivity.
```

5. **Links** (appears twice in the card - update both):
```html
<!-- Change: -->
href="project-template.html"

<!-- To: -->
href="todo-app-details.html"
```

### Step 4: Paste Into HTML

Paste your customized project card into the appropriate location:

**For Featured Projects** (index.html):
- Paste inside the `<div class="row">` in the Featured Projects section
- Recommended: Show only your 3-4 best projects

**For Full Portfolio** (portfolio.html):
- Paste inside the `<div class="row">` in the Projects Grid section
- Add as many projects as you have!

---

## Creating a Project Detail Page

Give each project its own detailed page to showcase features, screenshots, and technical details.

### Step 1: Duplicate the Template

1. Make a copy of `project-template.html`
2. Rename it to match your project (e.g., `todo-app.html`)
3. Save in the same directory as other HTML files

### Step 2: Update Page Metadata

At the top of your new file, update the `<head>` section:

```html
<!-- Change: -->
<title>[PROJECT NAME] - [YOUR NAME]</title>
<meta name="description" content="[PROJECT NAME] - [Brief project description]">

<!-- To: -->
<title>Todo App - Jane Smith</title>
<meta name="description" content="Todo App - A React-based task management application">
```

### Step 3: Update Project Hero Section

Around line 90:

```html
<!-- Change: -->
<h2 class="heading text-center">[PROJECT NAME]</h2>
<p class="mb-0 lead">
    [One sentence tagline describing what your project does]
</p>

<!-- To: -->
<h2 class="heading text-center">Todo App</h2>
<p class="mb-0 lead">
    A modern task management application with real-time sync
</p>
```

### Step 4: Fill in Project Meta Box

Around line 110, update the metadata:

```html
<!-- Project Name -->
<h3 class="client-name font-weight-bold mb-4">Todo App</h3>

<ul class="client-meta list-unstyled">
    <!-- Your Role -->
    <li class="mb-2">
        <i class="fas fa-user mr-2"></i>
        <strong>Role:</strong> Full Stack Developer
    </li>

    <!-- GitHub Link -->
    <li class="mb-2">
        <i class="fab fa-github mr-2"></i>
        <strong>Source Code:</strong>
        <a class="theme-link" href="https://github.com/yourusername/todo-app" target="_blank">
            View on GitHub
        </a>
    </li>

    <!-- Live Demo -->
    <li class="mb-2">
        <i class="fas fa-link mr-2"></i>
        <strong>Live Demo:</strong>
        <a class="theme-link" href="https://yourtodoapp.netlify.app" target="_blank">
            View Live Project
        </a>
    </li>

    <!-- Technologies -->
    <li class="mb-2">
        <i class="fas fa-code mr-2"></i>
        <strong>Technologies:</strong>
        React, Firebase, Material-UI, React Router
    </li>
</ul>
```

**Tips**:
- If you don't have a GitHub repo or live demo, remove those list items
- Be specific about the technologies you used

### Step 5: Write Project Overview

```html
<div class="client-bio mb-4">
    Todo App is a full-featured task management application I built to learn
    React and Firebase. Users can create, organize, and track tasks with
    real-time synchronization across devices. The app includes user authentication,
    priority levels, due dates, and completion statistics.
</div>
```

**Writing Tips**:
- Explain what the project does (2-3 sentences)
- Mention why you built it
- Include who would use it
- Highlight key features

### Step 6: Add Technical Overview

Around line 180:

```html
<h3 class="project-section-title mb-3">Technical Overview</h3>
<p>
    This project uses React for the frontend with Firebase for backend services.
    I implemented real-time data synchronization using Firestore, user authentication
    with Firebase Auth, and deployed the application to Netlify.
</p>

<ul class="mb-0">
    <li class="mb-2">
        <strong>Frontend:</strong> React, Material-UI, React Router
    </li>
    <li class="mb-2">
        <strong>Backend:</strong> Firebase (Firestore, Authentication)
    </li>
    <li class="mb-2">
        <strong>Tools:</strong> Git, VS Code, Chrome DevTools, Netlify
    </li>
</ul>
```

### Step 7: Add Screenshots

Add screenshots showing your project's features:

```html
<div class="row mt-5">
    <!-- Screenshot 1 -->
    <div class="col-12 col-lg-6 mb-5">
        <img class="img-fluid rounded"
             src="assets/images/projects/todo-app-dashboard.jpg"
             alt="Todo App main dashboard showing task list">
    </div>

    <!-- Screenshot 2 -->
    <div class="col-12 col-lg-6 mb-5">
        <img class="img-fluid rounded"
             src="assets/images/projects/todo-app-add-task.jpg"
             alt="Add new task modal">
    </div>

    <!-- Add more screenshots as needed -->
</div>
```

**Screenshot Tips**:
- Show different features/views
- Use clear, high-quality images
- Add descriptive alt text
- Recommended: 4-6 screenshots total

### Step 8: Optional Sections

Consider adding these sections to showcase more details:

**Challenges & Solutions**:
```html
<div class="project-section mb-5">
    <h3 class="project-section-title mb-3">Challenges & Solutions</h3>
    <p>
        One challenge was implementing real-time sync without performance issues.
        I solved this by using Firebase's onSnapshot listeners with proper cleanup
        in useEffect hooks to prevent memory leaks.
    </p>
</div>
```

**What I Learned**:
```html
<div class="project-section mb-5">
    <h3 class="project-section-title mb-3">What I Learned</h3>
    <ul>
        <li>React Hooks and state management</li>
        <li>Firebase integration and real-time databases</li>
        <li>User authentication flows</li>
        <li>Responsive design with Material-UI</li>
    </ul>
</div>
```

### Step 9: Update Navigation Links

Make sure the project card links to your new detail page:

```html
<!-- In index.html and portfolio.html: -->
<a href="todo-app.html" class="theme-link">Todo App</a>
```

---

## Project Images Best Practices

### Image Sizes

| Purpose | Recommended Size | Max File Size |
|---------|-----------------|---------------|
| Project Card | 800x600px | 300KB |
| Project Thumbnail | 600x400px | 200KB |
| Feature Screenshot | 1200x800px | 500KB |
| Detail Screenshot | 1600x1000px | 700KB |

### Taking Good Screenshots

1. **Clean up your UI** - Remove dummy data, test accounts, etc.
2. **Show the feature** - Capture the specific functionality
3. **Use real content** - Not "Test User" or "Lorem ipsum"
4. **Good lighting** - For app screenshots, use light mode
5. **Highlight interactions** - Show buttons, forms in action

### Optimizing Images

**Before uploading**, compress your images:

**Online Tools**:
- TinyPNG: https://tinypng.com/
- Squoosh: https://squoosh.app/
- Optimizilla: https://imagecompressor.com/

**Goal**: Reduce file size by 50-80% without visible quality loss

### Naming Conventions

Use descriptive, lowercase names with hyphens:

✅ Good:
- `todo-app-dashboard.jpg`
- `weather-app-search.jpg`
- `portfolio-mobile-view.jpg`

❌ Bad:
- `IMG_1234.jpg`
- `Screenshot 2024-01-15.png`
- `project image final final.jpg`

---

## Examples

### Example 1: Simple Project Card

```html
<div class="col-md-6 mb-5">
    <div class="card project-card">
        <div class="row no-gutters">
            <div class="col-lg-4 card-img-holder">
                <img src="assets/images/projects/weather-dashboard.jpg"
                     class="card-img"
                     alt="Weather Dashboard showing 5-day forecast">
            </div>
            <div class="col-lg-8">
                <div class="card-body">
                    <h5 class="card-title">
                        <a href="weather-dashboard.html" class="theme-link">
                            Weather Dashboard
                        </a>
                    </h5>
                    <p class="card-text">
                        A responsive weather app using OpenWeather API to display
                        current conditions and 5-day forecasts for any city.
                    </p>
                </div>
            </div>
        </div>
        <div class="link-mask">
            <a class="link-mask-link" href="weather-dashboard.html"></a>
            <div class="link-mask-text">
                <a class="btn btn-secondary" href="weather-dashboard.html">
                    <i class="fas fa-eye mr-2"></i>View Project
                </a>
            </div>
        </div>
    </div>
</div>
```

---

## Checklist for Adding a Project

Before publishing, make sure you've completed:

- [ ] Added project image to `assets/images/projects/`
- [ ] Optimized image file size
- [ ] Created project card with title and description
- [ ] Added card to portfolio.html
- [ ] Created project detail page (if applicable)
- [ ] Added screenshots to detail page
- [ ] Included GitHub and/or live demo links
- [ ] Tested all links work correctly
- [ ] Proofread all project descriptions
- [ ] Verified images load properly

---

## Tips for Showcasing Projects

1. **Quality over Quantity** - Show your best 6-10 projects, not every assignment
2. **Tell a Story** - Explain the problem, your solution, and the impact
3. **Show Your Process** - Mention challenges and how you solved them
4. **Include Links** - Always link to live demos and source code when possible
5. **Keep Updated** - Add new projects as you complete them
6. **Get Feedback** - Ask others to review your project descriptions

---

## Need Help?

- Check the inline comments in `project-template.html`
- See [CUSTOMIZATION-GUIDE.md](CUSTOMIZATION-GUIDE.md) for general help
- Review the existing project cards in the template for examples

Happy project adding! 🚀
