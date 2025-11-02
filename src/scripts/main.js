/**
 * Main JavaScript Entry Point
 *
 * This file is the entry point for all JavaScript in the theme.
 * Import and initialize your components here.
 */

import Alpine from 'alpinejs';
import collapse from '@alpinejs/collapse';
import { initComponents } from './components/index';

// Register Alpine plugins
Alpine.plugin(collapse);

// Make Alpine available globally
window.Alpine = Alpine;

// Initialize all components on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  initComponents();

  // Update copyright year
  const yearElement = document.querySelector('[data-year]');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Skip if it's just "#" or empty
      if (!href || href === '#') return;

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Update URL without jumping
        if (history.pushState) {
          history.pushState(null, null, href);
        }
      }
    });
  });

  console.log('Theme components initialized successfully!');
});

// Start Alpine after DOM is ready
Alpine.start();
