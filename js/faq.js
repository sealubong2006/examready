/**
 * FAQ Page Script
 * Handles display of FAQ entries grouped by tag
 */

(function() {
    'use strict';
    
    /**
     * Initialize FAQ page
     */
    function init() {
        // Set Google Form URLs
        setFormURLs();
        
        // Display FAQ entries
        displayFAQ();
    }
    
    /**
     * Set Google Form URLs
     */
    function setFormURLs() {
        const submitAnswerBtn = document.getElementById('submitAnswerBtn');
        const appreciateBtn = document.getElementById('appreciateBtn');
        
        if (submitAnswerBtn) {
            submitAnswerBtn.href = EXAMREADY_DATA.google_forms.submit_answer;
        }
        
        if (appreciateBtn) {
            appreciateBtn.href = EXAMREADY_DATA.google_forms.appreciate;
        }
    }
    
    /**
     * Display FAQ entries grouped by tag
     */
    function displayFAQ() {
        const container = document.getElementById('faqContainer');
        const emptyState = document.getElementById('emptyState');
        
        if (!container) return;
        
        const faqEntries = EXAMREADY_DATA.faq;
        
        if (faqEntries.length === 0) {
            container.style.display = 'none';
            if (emptyState) emptyState.style.display = 'block';
            return;
        }
        
        // Group FAQ by tag
        const groupedFAQ = {};
        faqEntries.forEach(entry => {
            if (!groupedFAQ[entry.tag]) {
                groupedFAQ[entry.tag] = [];
            }
            groupedFAQ[entry.tag].push(entry);
        });
        
        // Generate HTML
        const html = Object.keys(groupedFAQ).map(tag => {
            const entries = groupedFAQ[tag];
            
            return `
                <div class="faq-category" id="faq-${tag.replace(/\s+/g, '-').toLowerCase()}">
                    <div class="faq-category-header" onclick="toggleFAQCategory('${tag.replace(/\s+/g, '-').toLowerCase()}')">
                        <div class="faq-category-title">
                            <span class="faq-category-icon"><i class="bi bi-tag"></i></span>
                            ${tag}
                            <span class="faq-category-count">${entries.length}</span>
                        </div>
                        <i class="bi bi-chevron-down faq-category-toggle"></i>
                    </div>
                    <div class="faq-items">
                        ${entries.map(entry => generateFAQItemHTML(entry)).join('')}
                    </div>
                </div>
            `;
        }).join('');
        
        container.innerHTML = html;
    }
    
    /**
     * Generate HTML for a single FAQ item
     */
    function generateFAQItemHTML(entry) {
        let html = `
            <div class="faq-item">
                <div class="faq-question-header">
                    <span class="faq-question-id">${entry.id}</span>
                    <div class="faq-question-text">${entry.question}</div>
                </div>
        `;
        
        // Add error message if present
        if (entry.error_message) {
            html += `
                <div class="faq-error">
                    <i class="bi bi-exclamation-triangle"></i> 
                    <strong>Error:</strong> ${entry.error_message}
                </div>
            `;
        }
        
        // Add code block if present
        if (entry.code_block) {
            html += `
                <div class="faq-code">
                    <pre><code>${escapeHTML(entry.code_block)}</code></pre>
                </div>
            `;
        }
        
        // Add answers (up to 3)
        if (entry.answers && entry.answers.length > 0) {
            const displayAnswers = entry.answers.slice(0, 3);
            html += `
                <div class="faq-answers">
                    ${displayAnswers.map(answer => `
                        <div class="faq-answer">
                            <div class="faq-answer-text">
                                <i class="bi bi-check-circle text-success me-2"></i>${answer}
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }
        
        html += `</div>`;
        return html;
    }
    
    /**
     * Toggle FAQ category
     */
    window.toggleFAQCategory = function(categoryId) {
        const category = document.getElementById(`faq-${categoryId}`);
        if (category) {
            category.classList.toggle('active');
        }
    };
    
    /**
     * Escape HTML to prevent XSS
     */
    function escapeHTML(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    // Initialize on DOM ready
    document.addEventListener('DOMContentLoaded', init);
})();
