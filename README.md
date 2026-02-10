# ExamReady - T Levels Study Hub

A lightweight, front-end only study website for T Level exam preparation. Built with HTML, CSS, Bootstrap, and vanilla JavaScript with no backend dependencies.

##LIVE SITE
https://sealubong2006.github.io/examready/index.html

## 🎯 Purpose

ExamReady provides T Level students with a centralized hub for:
- Browsing comprehensive study guides
- Accessing task walkthroughs
- Reviewing past exam papers
- Finding answers to frequently asked questions

## 🚀 Features

### Core Functionality
- **Guides Page**: Browse, search, filter, and sort study guides by topic and task
- **Tasks Page**: Tabbed interface for Task 1, 2, 3A, and 3B with dedicated resources
- **Past Questions**: Accordion-grouped exam papers by year (2024, 2025)
- **FAQ**: Collapsible categories of common questions with code examples and answers
- **Dark/Light Mode**: Theme toggle with localStorage persistence
- **PDF Preview**: Desktop-only modal preview for PDFs
- **Responsive Design**: Mobile-friendly Bootstrap layout

### Technical Features
- 100% front-end (no backend, no auth, no API calls)
- Static JSON data store
- localStorage for theme preference only
- GitHub Pages compatible
- No frameworks (vanilla JavaScript)

## 📁 Project Structure

```
examready/
├── index.html              # Home page
├── guides.html             # Study guides page
├── tasks.html              # Task walkthroughs page
├── past-questions.html     # Past exam papers page
├── faq.html                # FAQ page
├── css/
│   └── style.css           # Main stylesheet with CSS variables
├── js/
│   ├── theme.js            # Theme toggle logic
│   ├── data.js             # Central JSON data store
│   ├── home.js             # Home page logic (latest updates)
│   ├── guides.js           # Guides page logic (filter, search, sort)
│   ├── tasks.js            # Tasks page logic (tabbed interface)
│   ├── past-questions.js   # Past papers display logic
│   └── faq.js              # FAQ display and interaction logic
├── pdfs/                   # PDF files (not included in repo)
│   ├── guides/
│   ├── tasks/
│   │   ├── task1/
│   │   ├── task2/
│   │   ├── task3a/
│   │   └── task3b/
│   └── past-papers/
│       ├── 2024/
│       └── 2025/
└── README.md               # This file
```

## 🛠️ Setup & Deployment

### Local Development
1. Clone the repository
2. Add your PDF files to the appropriate directories
3. Update `js/data.js` with your content information
4. Open `index.html` in a web browser

### GitHub Pages Deployment
1. Push to GitHub repository
2. Go to Settings → Pages
3. Select branch (usually `main` or `master`)
4. Select root directory
5. Save and wait for deployment

Your site will be available at: `https://[username].github.io/[repository-name]/`

## 📝 Content Management

All content is managed through `js/data.js`. To add or update content:

### Adding Study Guides
```javascript
{
    "id": "doc001",
    "title": "Your Guide Title",
    "type": "guide",
    "task": "Task 1",
    "tags": ["Task 1", "ASP.NET"],
    "filename": "Your_File_Name.pdf",
    "path": "pdfs/guides/Your_File_Name.pdf",
    "updated": "2025-01-15"
}
```

### Adding Past Papers
```javascript
{
    "year": "2025",
    "task": "Task 1",
    "papers": [
        {
            "type": "questions",
            "filename": "2025_Task1_Questions.pdf",
            "path": "pdfs/past-papers/2025/2025_Task1_Questions.pdf"
        },
        {
            "type": "marking",
            "filename": "2025_Task1_Marking_Guide.pdf",
            "path": "pdfs/past-papers/2025/2025_Task1_Marking_Guide.pdf"
        }
    ]
}
```

### Adding FAQ Entries
```javascript
{
    "id": "faq001",
    "tag": "ASP.NET",
    "question": "Your question here?",
    "error_message": "Optional error message",
    "code_block": "Optional code example",
    "answers": [
        "First answer",
        "Second answer",
        "Third answer"
    ]
}
```

### Updating Google Forms
Update the form URLs in `js/data.js`:
```javascript
"google_forms": {
    "submit_answer": "https://forms.google.com/your-form-url",
    "appreciate": "https://forms.google.com/your-form-url"
}
```

## 🎨 Customization

### Theme Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --bg-primary: #ffffff;
    --text-primary: #212529;
    --accent-primary: #0d6efd;
    /* ... more variables */
}
```

### PDF File Naming
All PDF filenames must follow this convention:
- Use underscores instead of spaces
- Capitalize each word
- Example: `07_Install_Identity_And_Add_Applicationuser.pdf`

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Flexbox, Grid
- **Bootstrap 5.3.2**: Responsive layout and components
- **Bootstrap Icons**: Icon library
- **Vanilla JavaScript**: No frameworks, pure ES6+
- **LocalStorage API**: Theme persistence only

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is an open-source student project. Contributions are welcome!

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Make your changes
4. Test thoroughly
5. Commit with clear messages (`git commit -m 'Add: Your feature description'`)
6. Push to your branch (`git push origin feature/YourFeature`)
7. Open a Pull Request

### Code Style Guidelines
- Use meaningful variable and function names
- Add comments for complex logic
- Follow existing code formatting
- Test across different screen sizes
- Ensure accessibility (ARIA labels, semantic HTML)

## ⚠️ Important Notes

### Limitations
- No user authentication
- No backend database
- No real-time updates
- PDFs must be hosted in the repository
- No file upload functionality

### PDF Preview
- Desktop only (viewport width ≥ 992px)
- Mobile devices open PDFs in new tab
- Requires browser PDF support

### External Dependencies
All external resources are loaded from CDN:
- Bootstrap CSS & JS
- Bootstrap Icons

## 📄 License

This project is for educational purposes. All T Level materials belong to their respective owners.

## 🙏 Acknowledgments

Built for students, by students. This is an unofficial study resource for classroom support only.
Greatful to Ethan Greatorex for his awesome contribution also find his website below
[Ethan's Website](https://ethangreatorex.co.uk/)

---

**Note**: This site contains no backend code, authentication systems, or user data collection. It's a purely static website designed for GitHub Pages hosting.
