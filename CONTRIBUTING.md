# Contributing to ExamReady

Thank you for your interest in contributing to ExamReady! This document provides guidelines and instructions for contributing to this open-source student project.

## 🎯 Project Vision

ExamReady is a lightweight, front-end only study hub for T Level students. Our goal is to provide a simple, accessible, and effective platform for exam preparation without backend complexity.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Submitting Changes](#submitting-changes)
- [Bug Reports](#bug-reports)
- [Feature Requests](#feature-requests)

## 📜 Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inclusive environment for all contributors, regardless of experience level, background, or identity.

### Expected Behavior

- Be respectful and considerate
- Welcome newcomers and help them get started
- Accept constructive criticism gracefully
- Focus on what's best for the project and community
- Show empathy towards other contributors

### Unacceptable Behavior

- Harassment, discrimination, or offensive comments
- Personal attacks or trolling
- Spam or off-topic discussions
- Publishing others' private information

## 🤝 How Can I Contribute?

### 1. Adding Study Content

**What we need:**
- Study guides for T Level topics
- Task walkthroughs with screenshots
- Past exam papers (if permitted)
- FAQ entries with solutions

**How to contribute:**
1. Ensure you have permission to share the content
2. Follow the PDF naming convention (underscores, capitalized words)
3. Add metadata to `js/data.js`
4. Submit a pull request

### 2. Improving Documentation

**What we need:**
- Clearer setup instructions
- Troubleshooting guides
- Video tutorials or screenshots
- Translations (if applicable)

**How to contribute:**
1. Fork the repository
2. Edit or create markdown files
3. Ensure clarity and accuracy
4. Submit a pull request

### 3. Fixing Bugs

**What we need:**
- Bug fixes for reported issues
- Improvements to existing features
- Cross-browser compatibility fixes
- Mobile responsiveness improvements

**How to contribute:**
1. Check existing issues
2. Comment on the issue you want to fix
3. Fork and create a branch
4. Fix the bug with tests
5. Submit a pull request

### 4. Adding Features

**What we need:**
- Enhanced search functionality
- Better filtering options
- Accessibility improvements
- Performance optimizations
- UI/UX enhancements

**Important:** Discuss major features in an issue first!

**How to contribute:**
1. Open an issue to discuss the feature
2. Get feedback from maintainers
3. Fork and create a feature branch
4. Implement with documentation
5. Submit a pull request

### 5. Improving Design

**What we need:**
- Better color schemes
- Improved layouts
- Enhanced animations
- Icon improvements
- Mobile-first improvements

**How to contribute:**
1. Create mockups or prototypes
2. Open an issue with your designs
3. Get feedback
4. Implement approved changes
5. Submit a pull request

## 💻 Development Setup

### Prerequisites

- Git installed on your machine
- A code editor (VS Code, Sublime, etc.)
- A modern web browser (Chrome, Firefox, Safari)
- Basic knowledge of HTML, CSS, JavaScript

### Getting Started

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/examready.git
   cd examready
   ```

3. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

4. **Make your changes**
   - Edit files as needed
   - Follow coding standards (see below)
   - Add comments where necessary

5. **Test your changes**
   - Open `index.html` in a browser
   - Test all pages and features
   - Check on mobile devices
   - Test in different browsers

6. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add: Clear description of changes"
   ```

7. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

8. **Open a Pull Request**
   - Go to the original repository on GitHub
   - Click "New Pull Request"
   - Select your branch
   - Fill in the PR template

## 📏 Coding Standards

### HTML

```html
<!-- ✅ Good: Semantic HTML with proper structure -->
<section class="guides-section">
    <h2 class="section-title">Study Guides</h2>
    <div class="guides-grid" id="guidesContainer">
        <!-- Content -->
    </div>
</section>

<!-- ❌ Bad: Generic divs without semantic meaning -->
<div class="section">
    <div class="title">Study Guides</div>
    <div class="grid" id="guidesContainer">
        <!-- Content -->
    </div>
</div>
```

**HTML Guidelines:**
- Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Include proper `alt` attributes for images
- Use descriptive `id` and `class` names
- Maintain proper indentation (2 or 4 spaces)
- Include ARIA labels for accessibility
- Close all tags properly

### CSS

```css
/* ✅ Good: Well-organized, using CSS variables */
.guide-card {
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: var(--spacing-md);
    transition: all var(--transition-base);
}

.guide-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
}

/* ❌ Bad: Hardcoded values, no variables */
.guide-card {
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 12px;
    padding: 24px;
    transition: all 0.25s ease;
}
```

**CSS Guidelines:**
- Use CSS variables for colors, spacing, and timing
- Follow BEM naming convention where appropriate
- Group related properties together
- Use consistent indentation
- Comment complex selectors
- Avoid `!important` unless absolutely necessary
- Write mobile-first media queries

### JavaScript

```javascript
// ✅ Good: Clear, documented, modular code
/**
 * Display guides with filtering and sorting
 */
function displayGuides() {
    const container = document.getElementById('guidesContainer');
    if (!container) return;
    
    // Check for empty results
    if (filteredGuides.length === 0) {
        showEmptyState();
        return;
    }
    
    // Generate and display HTML
    const html = generateGuidesHTML(filteredGuides);
    container.innerHTML = html;
}

// ❌ Bad: Unclear, undocumented code
function dg() {
    var c = document.getElementById('guidesContainer');
    if (filteredGuides.length === 0) {
        c.style.display = 'none';
        return;
    }
    var h = '';
    for (var i = 0; i < filteredGuides.length; i++) {
        h += '<div>...</div>';
    }
    c.innerHTML = h;
}
```

**JavaScript Guidelines:**
- Use `const` and `let`, avoid `var`
- Write descriptive variable and function names
- Add JSDoc comments for functions
- Use template literals for strings
- Handle errors gracefully
- Avoid global variables (use IIFEs)
- Use strict mode (`'use strict'`)
- Follow consistent formatting
- Check for null/undefined before using elements

### JSON Data Structure

```javascript
// ✅ Good: Consistent, well-structured data
{
    "id": "doc001",
    "title": "Getting Started with ASP.NET Core",
    "type": "guide",
    "task": "Task 1",
    "tags": ["Task 1", "ASP.NET"],
    "filename": "01_Getting_Started_ASP_NET_Core.pdf",
    "path": "pdfs/guides/01_Getting_Started_ASP_NET_Core.pdf",
    "updated": "2025-01-15"
}

// ❌ Bad: Inconsistent structure, missing fields
{
    "id": "1",
    "title": "ASP.NET Guide",
    "tags": ["asp.net"],
    "file": "guide.pdf"
}
```

**Data Guidelines:**
- Use consistent field names across all entries
- Include all required fields
- Follow date format: `YYYY-MM-DD`
- Use exact tag names from the tags array
- Ensure file paths are correct and consistent

### File Naming Conventions

**HTML/CSS/JS Files:**
- Use lowercase with hyphens: `past-questions.html`, `style.css`
- Be descriptive: `tasks.js` not `t.js`

**PDF Files:**
- Use underscores: `Install_Identity_And_Add_Applicationuser.pdf`
- Capitalize each word: `Task1_Step1_Setup.pdf`
- Be descriptive and consistent

## 🔄 Submitting Changes

### Pull Request Process

1. **Before submitting:**
   - Ensure code follows all coding standards
   - Test thoroughly on multiple browsers
   - Test on mobile devices
   - Update documentation if needed
   - Add comments to complex code

2. **PR Title Format:**
   ```
   Add: New feature description
   Fix: Bug description
   Update: What you updated
   Remove: What you removed
   Refactor: What you refactored
   ```

3. **PR Description Template:**
   ```markdown
   ## Description
   Brief description of changes
   
   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Documentation update
   - [ ] Code refactoring
   - [ ] UI/UX improvement
   
   ## Testing
   - [ ] Tested on Chrome
   - [ ] Tested on Firefox
   - [ ] Tested on Safari
   - [ ] Tested on mobile
   - [ ] All features work correctly
   
   ## Screenshots (if applicable)
   Add screenshots here
   
   ## Related Issues
   Closes #123
   ```

4. **Review Process:**
   - Maintainers will review your PR
   - Address any requested changes
   - Once approved, your PR will be merged
   - Your contribution will be credited!

### Commit Message Guidelines

Use clear, descriptive commit messages:

```bash
# ✅ Good commit messages
git commit -m "Add: Search functionality to guides page"
git commit -m "Fix: Theme toggle not persisting on reload"
git commit -m "Update: README with deployment instructions"
git commit -m "Refactor: Simplify filter logic in tasks.js"

# ❌ Bad commit messages
git commit -m "updates"
git commit -m "fix"
git commit -m "changes"
```

**Format:**
```
Type: Short description (50 chars or less)

Detailed explanation if needed (wrap at 72 chars)
- Bullet points for multiple changes
- Reference issue numbers: #123
```

**Types:**
- `Add:` New feature or content
- `Fix:` Bug fix
- `Update:` Update existing feature
- `Remove:` Remove feature or code
- `Refactor:` Code refactoring
- `Docs:` Documentation changes
- `Style:` CSS/formatting changes

## 🐛 Bug Reports

### Before Reporting

1. Check if the bug has already been reported
2. Try to reproduce the bug
3. Gather information about your environment

### Creating a Bug Report

Use this template:

```markdown
## Bug Description
A clear description of the bug

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Screenshots
If applicable, add screenshots

## Environment
- Browser: Chrome 120
- OS: Windows 11
- Device: Desktop
- Screen size: 1920x1080

## Additional Context
Any other relevant information
```

## 💡 Feature Requests

### Before Requesting

1. Check if the feature has been requested
2. Consider if it aligns with project goals
3. Think about implementation complexity

### Creating a Feature Request

Use this template:

```markdown
## Feature Description
Clear description of the proposed feature

## Problem It Solves
What problem does this solve?

## Proposed Solution
How should this feature work?

## Alternative Solutions
Other ways to solve this problem

## Additional Context
Mockups, examples, or references

## Implementation Notes
Technical considerations (optional)
```

## 🏆 Recognition

Contributors are recognized in several ways:

- Listed in GitHub contributors
- Mentioned in release notes
- Featured in project documentation
- Community appreciation

## 📞 Getting Help

**Questions about contributing?**
- Open a discussion on GitHub
- Comment on relevant issues
- Check existing documentation

**Stuck on something?**
- Ask in the issue comments
- Tag maintainers for help
- Join community discussions

## 🎓 Learning Resources

**New to open source?**
- [First Contributions](https://github.com/firstcontributions/first-contributions)
- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)

**Web Development:**
- [MDN Web Docs](https://developer.mozilla.org/)
- [JavaScript.info](https://javascript.info/)
- [Bootstrap Documentation](https://getbootstrap.com/docs/)

## 📝 License

By contributing to ExamReady, you agree that your contributions will be used for educational purposes in accordance with the project's goals.

---

## Thank You! 🙏

Every contribution, no matter how small, helps make ExamReady better for T Level students everywhere. We appreciate your time and effort!

**Happy Contributing!** 🎉
