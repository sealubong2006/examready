/**
 * Past Questions Page Script
 * Handles display of past exam papers by year and task
 */

(function() {
    'use strict';
    
    /**
     * Initialize past questions page
     */
    function init() {
        displayPastPapers();
    }
    
    /**
     * Display past papers grouped by year
     */
    function displayPastPapers() {
        const papers2025Container = document.getElementById('papers2025Container');
        const papers2024Container = document.getElementById('papers2024Container');
        const emptyState = document.getElementById('emptyState');
        
        if (!papers2025Container || !papers2024Container) return;
        
        // Get papers for each year
        const papers2025 = EXAMREADY_DATA.past_papers.filter(p => p.year === '2025');
        const papers2024 = EXAMREADY_DATA.past_papers.filter(p => p.year === '2024');
        
        if (papers2025.length === 0 && papers2024.length === 0) {
            if (emptyState) emptyState.style.display = 'block';
            return;
        }
        
        // Display 2025 papers
        if (papers2025.length > 0) {
            papers2025Container.innerHTML = generatePapersHTML(papers2025);
        } else {
            papers2025Container.innerHTML = '<p class="text-muted">No papers available for 2025 yet.</p>';
        }
        
        // Display 2024 papers
        if (papers2024.length > 0) {
            papers2024Container.innerHTML = generatePapersHTML(papers2024);
        } else {
            papers2024Container.innerHTML = '<p class="text-muted">No papers available for 2024 yet.</p>';
        }
    }
    
    /**
     * Generate HTML for papers
     */
    function generatePapersHTML(papers) {
        // Group by task
        const groupedByTask = {};
        papers.forEach(paper => {
            if (!groupedByTask[paper.task]) {
                groupedByTask[paper.task] = [];
            }
            groupedByTask[paper.task].push(paper);
        });
        
        // Generate HTML for each task group
        return Object.keys(groupedByTask).map(task => {
            const taskPapers = groupedByTask[task][0].papers;
            
            return `
                <div class="paper-group">
                    <h4 class="paper-group-title">${task}</h4>
                    <div class="paper-list">
                        ${taskPapers.map(paper => `
                            <div class="paper-item">
                                <div class="paper-icon">
                                    <i class="bi bi-file-earmark-pdf"></i>
                                </div>
                                <div class="paper-info">
                                    <div class="paper-name">${paper.filename}</div>
                                    <div class="paper-type">${paper.type === 'questions' ? 'Question Paper' : 'Marking Guide'}</div>
                                </div>
                                <div class="paper-actions">
                                    <a href="${paper.path}" class="btn-paper" target="_blank">
                                        <i class="bi bi-box-arrow-up-right"></i> Open
                                    </a>
                                    <a href="${paper.path}" class="btn-paper" download="${paper.filename}">
                                        <i class="bi bi-download"></i> Download
                                    </a>
                                    <button class="btn-paper btn-preview" onclick="previewPDF('${paper.path}', '${paper.filename}')">
                                        <i class="bi bi-eye"></i> Preview
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }).join('');
    }
    
    /**
     * Preview PDF (desktop only)
     */
    window.previewPDF = function(path, title) {
        // Check if desktop
        if (window.innerWidth < 992) {
            window.open(path, '_blank');
            return;
        }
        
        const modal = new bootstrap.Modal(document.getElementById('pdfPreviewModal'));
        const iframe = document.getElementById('pdfPreviewFrame');
        const modalTitle = document.getElementById('pdfPreviewTitle');
        
        modalTitle.textContent = title;
        iframe.src = path;
        modal.show();
    };
    
    // Initialize on DOM ready
    document.addEventListener('DOMContentLoaded', init);
})();
