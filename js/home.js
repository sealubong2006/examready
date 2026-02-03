/**
 * Home Page Script
 * Handles latest updates display
 */

(function() {
    'use strict';
    
    /**
     * Format date to readable string
     */
    function formatDate(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 0) {
            return 'Today';
        } else if (diffDays === 1) {
            return 'Yesterday';
        } else if (diffDays < 7) {
            return `${diffDays} days ago`;
        } else {
            return date.toLocaleDateString('en-GB', { 
                day: 'numeric', 
                month: 'short', 
                year: 'numeric' 
            });
        }
    }
    
    /**
     * Get icon for document type
     */
    function getDocumentIcon(type) {
        return type === 'task' ? 'bi-list-task' : 'bi-book';
    }
    
    /**
     * Display latest updates
     */
    function displayLatestUpdates() {
        const container = document.getElementById('latestUpdatesContainer');
        if (!container) return;
        
        // Get all documents and sort by date (newest first)
        const allDocs = [...EXAMREADY_DATA.documents].sort((a, b) => {
            return new Date(b.updated) - new Date(a.updated);
        });
        
        // Take the 5 most recent
        const recentDocs = allDocs.slice(0, 5);
        
        if (recentDocs.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="bi bi-inbox"></i>
                    <h3>No updates yet</h3>
                    <p>Check back soon for new content</p>
                </div>
            `;
            return;
        }
        
        // Generate HTML
        const html = recentDocs.map(doc => `
            <div class="update-item fade-in">
                <div class="update-icon">
                    <i class="bi ${getDocumentIcon(doc.type)}"></i>
                </div>
                <div class="update-content">
                    <div class="update-title">${doc.title}</div>
                    <div class="update-meta">
                        ${doc.tags.map(tag => `<span class="badge bg-secondary me-1">${tag}</span>`).join('')}
                    </div>
                </div>
                <div class="update-date">${formatDate(doc.updated)}</div>
            </div>
        `).join('');
        
        container.innerHTML = html;
    }
    
    // Initialize on DOM ready
    document.addEventListener('DOMContentLoaded', () => {
        displayLatestUpdates();
    });
})();
