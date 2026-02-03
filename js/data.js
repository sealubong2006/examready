/**
 * ExamReady Data Store
 * Central JSON data structure for all site content
 */

const EXAMREADY_DATA = {
    "site_info": {
        "name": "ExamReady",
        "subtitle": "T Levels Hub",
        "description": "Unofficial study hub for T Level class preparation"
    },
    
    "tags": [
        "Task 1",
        "Task 2",
        "Task 3A",
        "Task 3B",
        "ASP.NET",
        "Database",
        "Errors"
    ],
    
    "google_forms": {
        "ask_questions": "https://forms.gle/NMC5HHx16nGU3um2A",
        "submit_answer": "https://forms.gle/tRcQwtgeJYtca5Jj8",
        "suggest_improvements": "https://forms.gle/LdNM3nXTwdveWswA7",
        "appreciate": "https://forms.gle/mRqCkK2rXTCT6Mwu5"
    },
    
    "documents": [
        {
            "id": "doc001",
            "title": "1. Getting Started with ASP.NET Core",
            "type": "guide",
            "task": "Task 2",
            "tags": ["Task 2", "ASP.NET"],
            "filename": "01_Setup_MVC_Environment.pdf",
            "path": "pdfs/guides/01_Setup_MVC_Environment.pdf",
            "updated": "2026-02-12"
        },
        {
            "id": "doc002",
            "title": "2. Creating Database Table Products",
            "type": "guide",
            "task": "Task 2",
            "tags": ["Task 2", "ASP.NET", "Database"],
            "filename": "02_Create_Table_Products.pdf",
            "path": "pdfs/guides/02_Create_Table_Products.pdf",
            "updated": "2026-01-13"
        },
        {
            "id": "doc003",
            "title": "3. Seeding Database with Product Data",
            "type": "guide",
            "task": "Task 2",
            "tags": ["Task 2", "Database", "ASP.NET"],
            "filename": "03_Seed_Products_Data.pdf",
            "path": "pdfs/guides/03_Seed_Products_Data.pdf",
            "updated": "2026-01-14"
        },
        {
            "id": "doc004",
            "title": "4. Display Products in Index View",
            "type": "guide",
            "task": "Task 2",
            "tags": ["Task 2", "ASP.NET"],
            "filename": "04_Display_Products_Index.pdf",
            "path": "pdfs/guides/04_Display_Products_Index.pdf",
            "updated": "2026-01-15"
        },
        {
            "id": "doc005",
            "title": "5. Create Product Form",
            "type": "guide",
            "task": "Task 2",
            "tags": ["Task 2", "Database", "ASP.NET"],
            "filename": "05_Create_Product_Form.pdf",
            "path": "pdfs/guides/05_Create_Product_Form.pdf",
            "updated": "2026-02-01"
        },
        {
            "id": "doc006",
            "title": "6. Update and Delete Products",
            "type": "guide",
            "task": "Task 2",
            "tags": ["Task 2", "Database", "ASP.NET"],
            "filename": "06_Update_Delete_Product.pdf",
            "path": "pdfs/guides/06_Update_Delete_Product.pdf",
            "updated": "2026-02-01"
        },
        {
            "id": "doc007",
            "title": "7. Install Identity and Add ApplicationUser",
            "type": "guide",
            "task": "Task 2",
            "tags": ["Task 2", "ASP.NET"],
            "filename": "07_Install_Identity_And_Add_ApplicationUser.pdf",
            "path": "pdfs/guides/07_Install_Identity_And_Add_ApplicationUser.pdf",
            "updated": "2026-02-02"
        },
        {
            "id": "doc008",
            "title": "8. Roles Seed Admin User",
            "type": "guide",
            "task": "Task 2",
            "tags": ["Task 2", "ASP.NET"],
            "filename": "08_Roles_Seed_Admin_User.pdf",
            "path": "pdfs/guides/08_Roles_Seed_Admin_User.pdf",
            "updated": "2026-02-02"
        },
        {
            "id": "doc009",
            "title": "9. User Registration System",
            "type": "guide",
            "task": "Task 2",
            "tags": ["Task 2"],
            "filename": "09_User_Registration_System.pdf",
            "path": "pdfs/guides/09_User_Registration_System.pdf",
            "updated": "2026-02-03"
        },
        {
            "id": "doc010",
            "title": "Task 1 Walkthrough Step 2",
            "type": "task",
            "task": "Task 1",
            "tags": ["Task 1"],
            "filename": "Task1_Step2_Implementation.pdf",
            "path": "pdfs/tasks/task1/Task1_Step2_Implementation.pdf",
            "updated": "2025-01-11"
        },
        {
            "id": "doc011",
            "title": "Task 2 Database Setup",
            "type": "task",
            "task": "Task 2",
            "tags": ["Task 2", "Database"],
            "filename": "Task2_Database_Setup.pdf",
            "path": "pdfs/tasks/task2/Task2_Database_Setup.pdf",
            "updated": "2025-01-14"
        },
        {
            "id": "doc012",
            "title": "Task 2 Query Guide",
            "type": "task",
            "task": "Task 2",
            "tags": ["Task 2", "Database"],
            "filename": "Task2_Query_Guide.pdf",
            "path": "pdfs/tasks/task2/Task2_Query_Guide.pdf",
            "updated": "2025-01-16"
        },
        {
            "id": "doc013",
            "title": "Task 3A Project Structure",
            "type": "task",
            "task": "Task 3A",
            "tags": ["Task 3A", "ASP.NET"],
            "filename": "Task3A_Project_Structure.pdf",
            "path": "pdfs/tasks/task3a/Task3A_Project_Structure.pdf",
            "updated": "2025-01-19"
        },
        {
            "id": "doc014",
            "title": "Task 3A Data Models",
            "type": "task",
            "task": "Task 3A",
            "tags": ["Task 3A", "Database"],
            "filename": "Task3A_Data_Models.pdf",
            "path": "pdfs/tasks/task3a/Task3A_Data_Models.pdf",
            "updated": "2025-01-21"
        },
        {
            "id": "doc015",
            "title": "Task 3B Testing Guide",
            "type": "task",
            "task": "Task 3B",
            "tags": ["Task 3B"],
            "filename": "Task3B_Testing_Guide.pdf",
            "path": "pdfs/tasks/task3b/Task3B_Testing_Guide.pdf",
            "updated": "2025-01-24"
        },
        {
            "id": "doc016",
            "title": "Task 3B Error Handling",
            "type": "task",
            "task": "Task 3B",
            "tags": ["Task 3B", "Errors"],
            "filename": "Task3B_Error_Handling.pdf",
            "path": "pdfs/tasks/task3b/Task3B_Error_Handling.pdf",
            "updated": "2025-01-26"
        }
    ],
    
    "past_papers": [
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
                    "filename": "2025_Tasks_Marking_Guide.pdf",
                    "path": "pdfs/past-papers/2025/2025_Tasks_Marking_Guide.pdf"
                }
            ]
        },
        {
            "year": "2025",
            "task": "Task 2",
            "papers": [
                {
                    "type": "questions",
                    "filename": "2025_Task2_Questions.pdf",
                    "path": "pdfs/past-papers/2025/2025_Task2_Questions.pdf"
                },
                {
                    "type": "marking",
                    "filename": "2025_Tasks_Marking_Guide.pdf",
                    "path": "pdfs/past-papers/2025/2025_Tasks_Marking_Guide.pdf"
                }
            ]
        },
        {
            "year": "2025",
            "task": "Task 3A",
            "papers": [
                {
                    "type": "questions",
                    "filename": "2025_Task3A_Questions.pdf",
                    "path": "pdfs/past-papers/2025/2025_Task3A_Questions.pdf"
                },
                {
                    "type": "marking",
                    "filename": "2025_Tasks_Marking_Guide.pdf",
                    "path": "pdfs/past-papers/2025/2025_Tasks_Marking_Guide.pdf"
                }
            ]
        },
        {
            "year": "2025",
            "task": "Task 3B",
            "papers": [
                {
                    "type": "questions",
                    "filename": "2025_Task3B_Questions.pdf",
                    "path": "pdfs/past-papers/2025/2025_Task3B_Questions.pdf"
                },
                {
                    "type": "marking",
                    "filename": "2025_Tasks_Marking_Guide.pdf",
                    "path": "pdfs/past-papers/2025/2025_Tasks_Marking_Guide.pdf"
                }
            ]
        },
        {
            "year": "2024",
            "task": "Task 1",
            "papers": [
                {
                    "type": "questions",
                    "filename": "2024_Task1_Questions.pdf",
                    "path": "pdfs/past-papers/2024/2024_Task1_Questions.pdf"
                },
                {
                    "type": "marking",
                    "filename": "2024_Tasks_Marking_Guide.pdf",
                    "path": "pdfs/past-papers/2024/2024_Tasks_Marking_Guide.pdf"
                }
            ]
        },
        {
            "year": "2024",
            "task": "Task 2",
            "papers": [
                {
                    "type": "questions",
                    "filename": "2024_Task2_Questions.pdf",
                    "path": "pdfs/past-papers/2024/2024_Task2_Questions.pdf"
                },
                {
                    "type": "marking",
                    "filename": "2024_Tasks_Marking_Guide.pdf",
                    "path": "pdfs/past-papers/2024/2024_Tasks_Marking_Guide.pdf"
                }
            ]
        },
        {
            "year": "2024",
            "task": "Task 3A",
            "papers": [
                {
                    "type": "questions",
                    "filename": "2024_Task3A_Questions.pdf",
                    "path": "pdfs/past-papers/2024/2024_Task3A_Questions.pdf"
                },
                {
                    "type": "marking",
                    "filename": "2024_Tasks_Marking_Guide.pdf",
                    "path": "pdfs/past-papers/2024/2024_Tasks_Marking_Guide.pdf"
                }
            ]
        },
        {
            "year": "2024",
            "task": "Task 3B",
            "papers": [
                {
                    "type": "questions",
                    "filename": "2024_Task3B_Questions.pdf",
                    "path": "pdfs/past-papers/2024/2024_Task3B_Questions.pdf"
                },
                {
                    "type": "marking",
                    "filename": "2024_Tasks_Marking_Guide.pdf",
                    "path": "pdfs/past-papers/2024/2024_Tasks_Marking_Guide.pdf"
                }
            ]
        }
    ],
    
    "faq": [
        {
            "id": "faq001",
            "tag": "ASP.NET",
            "question": "How do I set up ASP.NET Identity for user authentication?",
            "error_message": "EntityCommandExecutionException: An error occurred while executing the command definition",
            "code_block": "services.AddIdentity<ApplicationUser, IdentityRole>()\n    .AddEntityFrameworkStores<ApplicationDbContext>()\n    .AddDefaultTokenProviders();",
            "answers": [
                "Install the Microsoft.AspNetCore.Identity.EntityFrameworkCore NuGet package",
                "Create an ApplicationUser class that inherits from IdentityUser",
                "Configure Identity services in Program.cs or Startup.cs"
            ]
        },
        {
            "id": "faq002",
            "tag": "Database",
            "question": "What's the difference between Add-Migration and Update-Database?",
            "error_message": null,
            "code_block": "Add-Migration InitialCreate\nUpdate-Database",
            "answers": [
                "Add-Migration creates a new migration file based on model changes",
                "Update-Database applies pending migrations to the database",
                "Always run Add-Migration first, then Update-Database"
            ]
        },
        {
            "id": "faq003",
            "tag": "Errors",
            "question": "Why am I getting 'Cannot access a disposed object' error?",
            "error_message": "ObjectDisposedException: Cannot access a disposed object. Object name: 'ApplicationDbContext'",
            "code_block": null,
            "answers": [
                "The DbContext has been disposed before you tried to use it",
                "Use dependency injection to get a new context instance per request",
                "Avoid storing DbContext in static variables or long-lived objects"
            ]
        },
        {
            "id": "faq004",
            "tag": "Task 1",
            "question": "How do I create a simple CRUD controller in ASP.NET MVC?",
            "error_message": null,
            "code_block": "[HttpPost]\npublic IActionResult Create(Product product)\n{\n    if (ModelState.IsValid)\n    {\n        _context.Products.Add(product);\n        _context.SaveChanges();\n        return RedirectToAction(\"Index\");\n    }\n    return View(product);\n}",
            "answers": [
                "Use scaffolding to generate CRUD actions automatically",
                "Implement Create, Read, Update, Delete actions with proper HTTP verbs"
            ]
        },
        {
            "id": "faq005",
            "tag": "Task 2",
            "question": "How do I write efficient JOIN queries in SQL?",
            "error_message": null,
            "code_block": "SELECT o.OrderId, c.CustomerName\nFROM Orders o\nINNER JOIN Customers c ON o.CustomerId = c.CustomerId\nWHERE o.OrderDate > '2024-01-01';",
            "answers": [
                "Use INNER JOIN when you need matching records from both tables",
                "LEFT JOIN includes all records from the left table even without matches",
                "Always index foreign key columns for better JOIN performance"
            ]
        },
        {
            "id": "faq006",
            "tag": "Task 3A",
            "question": "How do I implement navigation properties in Entity Framework?",
            "error_message": null,
            "code_block": "public class Order\n{\n    public int OrderId { get; set; }\n    public int CustomerId { get; set; }\n    public Customer Customer { get; set; }\n}",
            "answers": [
                "Define navigation properties as virtual for lazy loading",
                "Use Include() method for eager loading related data"
            ]
        },
        {
            "id": "faq007",
            "tag": "Task 3B",
            "question": "How do I handle validation errors in ASP.NET Core?",
            "error_message": "ValidationException: One or more validation errors occurred",
            "code_block": "if (!ModelState.IsValid)\n{\n    return BadRequest(ModelState);\n}",
            "answers": [
                "Use data annotations like [Required] and [StringLength] on model properties",
                "Check ModelState.IsValid before processing form submissions",
                "Return validation errors to the client with BadRequest(ModelState)"
            ]
        },
        {
            "id": "faq008",
            "tag": "ASP.NET",
            "question": "What's the difference between ViewBag and ViewData?",
            "error_message": null,
            "code_block": "ViewBag.Message = \"Hello\";\nViewData[\"Message\"] = \"Hello\";",
            "answers": [
                "ViewBag uses dynamic properties while ViewData uses string keys",
                "Both pass data from controller to view for a single request",
                "ViewBag is easier to use but ViewData offers better compile-time checking"
            ]
        },
        {
            "id": "faq009",
            "tag": "Database",
            "question": "How do I prevent SQL injection attacks?",
            "error_message": null,
            "code_block": "var user = _context.Users\n    .FromSqlRaw(\"SELECT * FROM Users WHERE Username = {0}\", username)\n    .FirstOrDefault();",
            "answers": [
                "Always use parameterized queries or Entity Framework LINQ",
                "Never concatenate user input directly into SQL strings"
            ]
        },
        {
            "id": "faq010",
            "tag": "Errors",
            "question": "Why is my migration failing with foreign key constraint error?",
            "error_message": "SqlException: The ALTER TABLE statement conflicted with the FOREIGN KEY constraint",
            "code_block": null,
            "answers": [
                "Ensure related data exists before creating foreign key relationships",
                "Drop and recreate constraints in the correct order",
                "Check for orphaned records that don't have matching foreign key values"
            ]
        }
    ]
};
