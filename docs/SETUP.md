# GitHub Pages Deployment Guide

This guide will walk you through deploying your portfolio website to GitHub Pages for free hosting.

## Table of Contents

1. [What is GitHub Pages?](#what-is-github-pages)
2. [Prerequisites](#prerequisites)
3. [Step-by-Step Deployment](#step-by-step-deployment)
4. [Using a Custom Domain (Optional)](#using-a-custom-domain-optional)
5. [Updating Your Portfolio](#updating-your-portfolio)
6. [Troubleshooting](#troubleshooting)

---

## What is GitHub Pages?

GitHub Pages is a free hosting service that turns your GitHub repository into a live website. Perfect for portfolios!

**Benefits**:
- ✅ Completely free
- ✅ Automatic HTTPS security
- ✅ Easy to update (just push changes)
- ✅ Can use custom domain
- ✅ Fast and reliable

**Your site will be live at**: `https://yourusername.github.io`

---

## Prerequisites

Before starting, make sure you have:

- [ ] A GitHub account (free) - Sign up at https://github.com
- [ ] Your portfolio files customized and ready
- [ ] Git installed on your computer (download from https://git-scm.com)

**New to Git?** Don't worry! Follow the steps exactly as written.

---

## Step-by-Step Deployment

### Step 1: Create a GitHub Repository

1. **Go to GitHub** and log in
2. **Click the "+" icon** in the top right → "New repository"
3. **Name your repository**: `yourusername.github.io`
   - Replace `yourusername` with your actual GitHub username
   - Example: If your username is "janedoe", name it `janedoe.github.io`
4. **Make it Public** (required for free GitHub Pages)
5. **Don't** initialize with README, .gitignore, or license
6. **Click** "Create repository"

**Important**: The repository name MUST be `yourusername.github.io` exactly, or it won't work!

### Step 2: Prepare Your Portfolio Files

1. **Open Terminal** (Mac/Linux) or **Git Bash** (Windows)
2. **Navigate to your portfolio folder**:
   ```bash
   cd path/to/general-portfolio
   ```
   Example: `cd /Users/jane/Documents/general-portfolio`

3. **Initialize Git** (if not already done):
   ```bash
   git init
   ```

4. **Add all files**:
   ```bash
   git add .
   ```

5. **Create first commit**:
   ```bash
   git commit -m "Initial commit: Add portfolio files"
   ```

### Step 3: Connect to GitHub

1. **Add your GitHub repository as the remote**:
   ```bash
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   ```
   Replace `yourusername` with your actual GitHub username

2. **Verify the remote was added**:
   ```bash
   git remote -v
   ```
   You should see your repository URL listed

### Step 4: Push to GitHub

1. **Push your code**:
   ```bash
   git branch -M main
   git push -u origin main
   ```

2. **Enter your GitHub credentials** when prompted
   - Username: Your GitHub username
   - Password: Your GitHub Personal Access Token (not your account password)

**Getting a Personal Access Token**:
- Go to GitHub → Settings → Developer settings → Personal access tokens
- Generate new token → Select "repo" scope → Copy the token
- Use this token as your password when pushing

### Step 5: Enable GitHub Pages

1. **Go to your repository** on GitHub
2. **Click** "Settings" (top navigation)
3. **Click** "Pages" (left sidebar)
4. **Under "Source"**: Select "Deploy from a branch"
5. **Under "Branch"**: Select `main` and `/ (root)`, then click "Save"
6. **Wait 1-2 minutes** for deployment

### Step 6: Visit Your Live Site!

Your portfolio is now live at: `https://yourusername.github.io`

**First visit might take a few minutes**. If you see a 404 error, wait a bit and refresh.

---

## Using a Custom Domain (Optional)

Want to use your own domain (like `www.yourname.com`) instead of the GitHub URL?

### Step 1: Buy a Domain

Purchase a domain from registrars like:
- Namecheap: https://www.namecheap.com
- Google Domains: https://domains.google
- GoDaddy: https://www.godaddy.com

**Average cost**: $10-15/year

### Step 2: Configure DNS

In your domain registrar's settings, add these DNS records:

**Type A Records** (add all 4):
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME Record**:
```
www -> yourusername.github.io
```

### Step 3: Add Custom Domain to GitHub

1. Go to your repository → Settings → Pages
2. Under "Custom domain", enter your domain (e.g., `www.yourname.com`)
3. Click "Save"
4. Check "Enforce HTTPS" (may take a few hours to become available)

### Step 4: Create CNAME File

In your portfolio folder, create a file named `CNAME` (no extension) with your domain:

```
www.yourname.com
```

Commit and push:
```bash
git add CNAME
git commit -m "Add custom domain"
git push
```

**DNS changes can take 24-48 hours** to propagate fully.

---

## Updating Your Portfolio

Made changes to your portfolio? Here's how to update the live site:

1. **Make your changes** to the files locally
2. **Add changes to git**:
   ```bash
   git add .
   ```
3. **Commit with a message**:
   ```bash
   git commit -m "Update project descriptions"
   ```
4. **Push to GitHub**:
   ```bash
   git push
   ```

**Your site updates automatically** within a minute!

### Quick Update Workflow

```bash
# After making changes:
git add .
git commit -m "Description of changes"
git push
```

---

## Troubleshooting

### 404 Error / Site Not Found

**Possible causes**:
1. **Repository name is wrong** - Must be `yourusername.github.io` exactly
2. **Not enabled** - Check Settings → Pages to ensure it's enabled
3. **Just deployed** - Wait 2-5 minutes after first deployment
4. **Wrong branch** - Make sure you selected `main` branch

**Solution**: Double-check repository name and GitHub Pages settings.

### CSS/Images Not Loading

**Cause**: File paths might be incorrect

**Solution**:
1. Make sure all paths are relative (no leading `/`)
2. Check file names match exactly (case-sensitive)
3. Verify files are in the correct folders

**Example**:
```html
<!-- ✅ Correct -->
<link rel="stylesheet" href="assets/css/theme.css">

<!-- ❌ Wrong -->
<link rel="stylesheet" href="/assets/css/theme.css">
```

### Changes Not Showing Up

**Possible causes**:
1. **Browser cache** - Your browser is showing old version
2. **Didn't push** - Changes aren't on GitHub yet

**Solutions**:
1. **Hard refresh**: Ctrl+Shift+R (Cmd+Shift+R on Mac)
2. **Check GitHub**: Verify files updated on GitHub.com
3. **Clear cache**: Clear browser cache and cookies
4. **Incognito mode**: Try viewing in private/incognito window

### Git Push Failed

**Error**: "Permission denied" or "Authentication failed"

**Solution**:
1. Make sure you're using Personal Access Token, not password
2. Generate new token at: GitHub → Settings → Developer settings
3. Save token somewhere safe (you'll need it again)

**Error**: "Repository not found"

**Solution**: Check the remote URL is correct:
```bash
git remote -v
```
Should show your repository URL. If wrong, update it:
```bash
git remote set-url origin https://github.com/yourusername/yourusername.github.io.git
```

### Custom Domain Not Working

**Solutions**:
1. **Wait 24-48 hours** - DNS changes take time
2. **Check DNS records** - Verify they're set correctly
3. **Check CNAME file** - Make sure it exists in your repository
4. **Enforce HTTPS** - Uncheck and recheck this setting in GitHub Pages

**Test DNS propagation**: https://www.whatsmydns.net/

---

## Best Practices

### Before Pushing Changes

- [ ] Test locally - Open `index.html` in browser
- [ ] Check all links work
- [ ] Verify images load
- [ ] Test dark mode toggle
- [ ] Proofread content
- [ ] View on mobile

### Regular Maintenance

- **Update projects** as you complete them
- **Keep resume link current**
- **Refresh screenshot** if UI changes
- **Fix broken links** periodically
- **Update skills** as you learn new technologies

### Security

- ✅ Use HTTPS (enabled automatically)
- ✅ Don't commit sensitive data (API keys, passwords)
- ✅ Keep dependencies updated
- ❌ Don't include `.env` files with secrets

---

## Additional Resources

### Git & GitHub Tutorials
- GitHub Guides: https://guides.github.com/
- Git Basics: https://git-scm.com/book/en/v2
- GitHub Pages Documentation: https://docs.github.com/en/pages

### Git Cheat Sheet

```bash
# Check status
git status

# Add all changes
git add .

# Commit with message
git commit -m "Your message here"

# Push to GitHub
git push

# Pull latest changes
git pull

# View commit history
git log

# Undo last commit (keeps changes)
git reset --soft HEAD~1
```

---

## Alternative Deployment Options

While GitHub Pages is recommended, you can also deploy to:

### Netlify
- Drag and drop deployment
- Free tier available
- Automatic deploys from Git
- Website: https://www.netlify.com

### Vercel
- Optimized for modern frameworks
- Free for personal projects
- Easy Git integration
- Website: https://vercel.com

### Traditional Web Hosting
- Upload files via FTP
- Requires paid hosting plan
- More control over server
- Examples: Bluehost, HostGator, SiteGround

---

## Need Help?

**Still stuck?** Try these:

1. **GitHub Docs**: https://docs.github.com/en/pages
2. **Stack Overflow**: Search for your specific error
3. **GitHub Community**: https://github.community/
4. **YouTube Tutorials**: Search "GitHub Pages tutorial"

---

**Congratulations!** Your portfolio is now live for the world to see! 🎉

Share your link with potential employers, add it to your resume, and show off your work!

**Your URL**: `https://yourusername.github.io`
