/**
 * Component Initializer
 *
 * This file imports and initializes all JavaScript components.
 * Add your component imports and initialization calls here.
 *
 * Pattern:
 * 1. Import component initialization functions
 * 2. Call them in the initComponents() function
 * 3. Export initComponents to be called from main.js
 */

import { initFormHandler } from './form-handler';
import { initMobileMenu } from './mobile-menu';
import { initLetterReveal, initScrollAnimations, initCardHoverEffects } from './animations';
import { initUnicornStudio } from './unicorn-studio';
import { initSyntaxHighlight } from './syntax-highlight';
import { initAccordion } from './accordion';

/**
 * Initialize all components
 * Called from main.js on DOMContentLoaded
 */
export function initComponents() {
  // Initialize form handler (example pattern)
  initFormHandler();

  // Initialize Umbral-specific components
  initMobileMenu();
  initLetterReveal();
  initScrollAnimations();
  initCardHoverEffects();
  initUnicornStudio();
  initSyntaxHighlight();
  initAccordion();
}
