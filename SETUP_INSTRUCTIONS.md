# ExamReady Setup Instructions

## Quick Start Guide

### 1. Add Your PDF Files

Place your PDF files in the appropriate directories:

```
pdfs/
├── guides/              # Study guides
├── tasks/
│   ├── task1/          # Task 1 walkthroughs
│   ├── task2/          # Task 2 walkthroughs
│   ├── task3a/         # Task 3A walkthroughs
│   └── task3b/         # Task 3B walkthroughs
└── past-papers/
    ├── 2024/           # 2024 exam papers
    └── 2025/           # 2025 exam papers
```

**Important**: Follow the naming convention - use underscores and capitalize words:
- Good: `07_Install_Identity_And_Add_Applicationuser.pdf`
- Bad: `install identity and add applicationuser.pdf`

### 2. Update the Data File

Open `js/data.js` and update:

#### Add Study Guides
Find the `"documents"` array and add entries like:
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

#### Add Task Walkthroughs
Use `"type": "task"` for task-specific guides:
```javascript
{
    "id": "doc009",
    "title": "Task 1 Walkthrough Step 1",
    "type": "task",
    "task": "Task 1",
    "tags": ["Task 1"],
    "filename": "Task1_Step1_Setup.pdf",
    "path": "pdfs/tasks/task1/Task1_Step1_Setup.pdf",
    "updated": "2025-01-10"
}
```

#### Add Past Papers
Find the `"past_papers"` array:
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

#### Add FAQ Entries
Find the `"faq"` array:
```javascript
{
    "id": "faq001",
    "tag": "ASP.NET",
    "question": "How do I set up ASP.NET Identity?",
    "error_message": "Optional error message here",
    "code_block": "Optional code example here",
    "answers": [
        "First answer",
        "Second answer",
        "Third answer (max 3 shown)"
    ]
}
```

#### Update Google Forms
Replace the placeholder URLs:
```javascript
"google_forms": {
    "submit_answer": "https://forms.google.com/your-actual-form-url",
    "appreciate": "https://forms.google.com/your-actual-form-url"
}
```

### 3. Test Locally

1. Open `index.html` in a web browser
2. Check all pages work correctly
3. Verify PDFs open/download properly
4. Test filters and search on each page

### 4. Deploy to GitHub Pages

1. Create a new GitHub repository
2. Push all files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourrepo.git
   git push -u origin main
   ```
3. Go to repository Settings → Pages
4. Select `main` branch and root `/` directory
5. Click Save
6. Your site will be live at: `https://yourusername.github.io/yourrepo/`

### 5. Customize (Optional)

#### Change Colors
Edit `css/style.css` and modify CSS variables:
```css
:root {
    --accent-primary: #0d6efd;  /* Primary color */
    --accent-secondary: #6610f2; /* Secondary color */
}
```

#### Update Tags
Edit the `"tags"` array in `js/data.js`:
```javascript
"tags": [
    "Task 1",
    "Task 2",
    "Task 3A",
    "Task 3B",
    "ASP.NET",
    "Database",
    "Errors"
]
```

## Troubleshooting

### PDFs Not Loading?
- Check file paths match exactly in `data.js`
- Verify PDF files are in correct directories
- File names are case-sensitive

### Filters Not Working?
- Make sure tags in documents match tags in the main tags array
- Check browser console for JavaScript errors

### Theme Not Saving?
- Ensure localStorage is enabled in browser
- Check browser privacy settings

## Getting Help

- Read the full README.md for detailed documentation
- Check the code comments for inline explanations
- Review example data in `js/data.js`

## Tips

1. **Start Small**: Add a few PDFs and test before adding everything
2. **Consistent Naming**: Follow the underscore naming convention strictly
3. **Regular Backups**: Keep backups of your `data.js` file
4. **Test on Mobile**: Check responsiveness on different devices
5. **Use Tags Wisely**: Keep tag names consistent across all documents

---

Happy studying! 🎓
