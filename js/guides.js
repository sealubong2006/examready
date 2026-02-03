/**
 * Guides Page Script
 * Handles filtering, searching, sorting, and display of guides
 */

(function() {
    'use strict';
    
    let allGuides = [];
    let filteredGuides = [];
    
    /**
     * Initialize guides page
     */
    function init() {
        // Get guides from data
        allGuides = EXAMREADY_DATA.documents.filter(doc => doc.type === 'guide');
        filteredGuides = [...allGuides];
        
        // Populate tag filter
        populateTagFilter();
        
        // Display guides
        displayGuides();
        
        // Set up event listeners
        setupEventListeners();
    }
    
    /**
     * Populate tag filter dropdown
     */
    function populateTagFilter() {
        const tagFilter = document.getElementById('tagFilter');
        if (!tagFilter) return;
        
        EXAMREADY_DATA.tags.forEach(tag => {
            const option = document.createElement('option');
            option.value = tag;
            option.textContent = tag;
            tagFilter.appendChild(option);
        });
    }
    
    /**
     * Set up event listeners
     */
    function setupEventListeners() {
        const searchInput = document.getElementById('searchInput');
        const tagFilter = document.getElementById('tagFilter');
        const sortBy = document.getElementById('sortBy');
        
        if (searchInput) {
            searchInput.addEventListener('input', handleFilters);
        }
        
        if (tagFilter) {
            tagFilter.addEventListener('change', handleFilters);
        }
        
        if (sortBy) {
            sortBy.addEventListener('change', handleFilters);
        }
    }
    
    /**
     * Handle filters and sorting
     */
    function handleFilters() {
        const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
        const selectedTag = document.getElementById('tagFilter')?.value || '';
        const sortOption = document.getElementById('sortBy')?.value || 'title-asc';
        
        // Filter by search term
        filteredGuides = allGuides.filter(guide => {
            const matchesSearch = guide.title.toLowerCase().includes(searchTerm);
            const matchesTag = !selectedTag || guide.tags.includes(selectedTag);
            return matchesSearch && matchesTag;
        });
        
        // Sort
        sortGuides(sortOption);
        
        // Display
        displayGuides();
    }
    
    /**
     * Sort guides
     */
    function sortGuides(option) {
        switch(option) {
            case 'title-asc':
                filteredGuides.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'title-desc':
                filteredGuides.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case 'date-desc':
                filteredGuides.sort((a, b) => new Date(b.updated) - new Date(a.updated));
                break;
            case 'date-asc':
                filteredGuides.sort((a, b) => new Date(a.updated) - new Date(b.updated));
                break;
        }
    }
    
    /**
     * Display guides
     */
    function displayGuides() {
        const container = document.getElementById('guidesContainer');
        const emptyState = document.getElementById('emptyState');
        const resultsCount = document.getElementById('resultsCount');
        
        if (!container) return;
        
        // Update count
        if (resultsCount) {
            resultsCount.textContent = `${filteredGuides.length} guide${filteredGuides.length !== 1 ? 's' : ''}`;
        }
        
        // Show empty state if no results
        if (filteredGuides.length === 0) {
            container.style.display = 'none';
            if (emptyState) emptyState.style.display = 'block';
            return;
        }
        
        container.style.display = 'grid';
        if (emptyState) emptyState.style.display = 'none';
        
        // Generate HTML
        const html = filteredGuides.map(guide => `
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
