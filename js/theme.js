/**
 * Theme Management
 * Handles light/dark mode toggle and persistence
 */

(function() {
    'use strict';
    
    // Get theme from localStorage or default to light
    const getStoredTheme = () => localStorage.getItem('theme') || 'light';
    const setStoredTheme = theme => localStorage.setItem('theme', theme);
    
    // Apply theme to document
    const applyTheme = theme => {
        document.documentElement.setAttribute('data-theme', theme);
        updateThemeIcon(theme);
    };
    
    // Update theme toggle icon
    const updateThemeIcon = theme => {
        const icon = document.querySelector('#themeToggle i');
        if (icon) {
            if (theme === 'dark') {
                icon.className = 'bi bi-moon-fill';
            } else {
                icon.className = 'bi bi-sun-fill';
            }
        }
    };
    
    // Initialize theme on page load
    const initTheme = () => {
        const theme = getStoredTheme();
        applyTheme(theme);
    };
    
    // Toggle theme
    const toggleTheme = () => {
        const currentTheme = getStoredTheme();
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setStoredTheme(newTheme);
        applyTheme(newTheme);
    };
    
    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTheme);
    } else {
        initTheme();
    }
    
    // Add event listener to theme toggle button
    document.addEventListener('DOMContentLoaded', () => {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', toggleTheme);
        }
    });
})();
