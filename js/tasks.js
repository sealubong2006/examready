/**
 * Tasks Page Script
 * Handles filtering, searching, sorting for each task tab
 */

(function() {
    'use strict';
    
    // Store data for each task
    const taskData = {
        'Task 1': { all: [], filtered: [] },
        'Task 2': { all: [], filtered: [] },
        'Task 3A': { all: [], filtered: [] },
        'Task 3B': { all: [], filtered: [] }
    };
    
    /**
     * Initialize tasks page
     */
    function init() {
        // Load task documents
        loadTaskDocuments();
        
        // Set up each task tab
        setupTaskTab('Task 1', 'task1', 'Task1');
        setupTaskTab('Task 2', 'task2', 'Task2');
        setupTaskTab('Task 3A', 'task3a', 'Task3a');
        setupTaskTab('Task 3B', 'task3b', 'Task3b');
        
        // Display initial task
        displayTaskGuides('Task 1', 'task1');
    }
    
    /**
     * Load task documents from data
     */
    function loadTaskDocuments() {
        EXAMREADY_DATA.documents.forEach(doc => {
            if (doc.type === 'task' && taskData[doc.task]) {
                taskData[doc.task].all.push(doc);
                taskData[doc.task].filtered.push(doc);
            }
        });
    }
    
    /**
     * Set up a task tab
     */
    function setupTaskTab(taskName, taskId, containerId) {
        // Populate tag filter
        const tagFilter = document.getElementById(`tagFilter${containerId}`);
        if (tagFilter) {
            EXAMREADY_DATA.tags.forEach(tag => {
                const option = document.createElement('option');
                option.value = tag;
                option.textContent = tag;
                tagFilter.appendChild(option);
            });
        }
        
        // Set up event listeners
        const searchInput = document.getElementById(`search${containerId}`);
        const sortSelect = document.getElementById(`sort${containerId}`);
        
        if (searchInput) {
            searchInput.addEventListener('input', () => handleFilters(taskName, taskId));
        }
        
        if (tagFilter) {
            tagFilter.addEventListener('change', () => handleFilters(taskName, taskId));
        }
        
        if (sortSelect) {
            sortSelect.addEventListener('change', () => handleFilters(taskName, taskId));
        }
        
        // Tab switch listener
        const tabButton = document.getElementById(`${taskId}-tab`);
        if (tabButton) {
            tabButton.addEventListener('shown.bs.tab', () => {
                displayTaskGuides(taskName, taskId);
            });
        }
    }
    
    /**
     * Handle filters and sorting for a task
     */
    function handleFilters(taskName, taskId) {
        const containerId = taskId.charAt(0).toUpperCase() + taskId.slice(1);
        const searchTerm = document.getElementById(`search${containerId}`)?.value.toLowerCase() || '';
        const selectedTag = document.getElementById(`tagFilter${containerId}`)?.value || '';
        const sortOption = document.getElementById(`sort${containerId}`)?.value || 'title-asc';
        
        // Filter
        taskData[taskName].filtered = taskData[taskName].all.filter(guide => {
            const matchesSearch = guide.title.toLowerCase().includes(searchTerm);
            const matchesTag = !selectedTag || guide.tags.includes(selectedTag);
            return matchesSearch && matchesTag;
        });
        
        // Sort
        sortTaskGuides(taskName, sortOption);
        
        // Display
        displayTaskGuides(taskName, taskId);
    }
    
    /**
     * Sort task guides
     */
    function sortTaskGuides(taskName, option) {
        const guides = taskData[taskName].filtered;
        
        switch(option) {
            case 'title-asc':
                guides.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'title-desc':
                guides.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case 'date-desc':
                guides.sort((a, b) => new Date(b.updated) - new Date(a.updated));
                break;
            case 'date-asc':
                guides.sort((a, b) => new Date(a.updated) - new Date(b.updated));
                break;
        }
    }
    
    /**
     * Display task guides
     */
    function displayTaskGuides(taskName, taskId) {
        const containerId = taskId.charAt(0).toUpperCase() + taskId.slice(1);
        const container = document.getElementById(`${taskId}Container`);
        const emptyState = document.getElementById(`emptyState${containerId}`);
        const resultsCount = document.getElementById(`resultsCount${containerId}`);
        
        if (!container) return;
        
        const guides = taskData[taskName].filtered;
        
        // Update count
        if (resultsCount) {
            resultsCount.textContent = `${guides.length} guide${guides.length !== 1 ? 's' : ''}`;
        }
        
        // Show empty state if no results
        if (guides.length === 0) {
            container.style.display = 'none';
            if (emptyState) emptyState.style.display = 'block';
            return;
        }
        
        container.style.display = 'grid';
        if (emptyState) emptyState.style.display = 'none';
        
        // Generate HTML
        const html = guides.map(guide => `
            <div class="guide-card fade-in">
                <div class="guide-header">
                    <h3 class="guide-title">${guide.title}</h3>
                    <div class="guide-meta">
                        ${guide.tags.map(tag => `<span class="guide-tag">${tag}</span>`).join('')}
                    </div>
                </div>
                <div class="guide-date">Updated: ${formatDate(guide.updated)}</div>
                <div class="guide-actions">
                    <a href="${guide.path}" class="btn-guide" target="_blank">
                        <i class="bi bi-box-arrow-up-right"></i> Open
                    </a>
                    <a href="${guide.path}" class="btn-guide" download="${guide.filename}">
                        <i class="bi bi-download"></i> Download
                    </a>
                    <button class="btn-guide btn-preview" onclick="previewPDF('${guide.path}', '${guide.title}')">
                        <i class="bi bi-eye"></i> Preview
                    </button>
                </div>
            </div>
        `).join('');
        
        container.innerHTML = html;
    }
    
    /**
     * Format date
     */
    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', { 
            day: 'numeric', 
            month: 'short', 
            year: 'numeric' 
        });
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
