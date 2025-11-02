/**
 * UnicornStudio Background Animation
 * Loads and initializes the UnicornStudio animation library
 *
 * Performance optimized: Defers loading until first user interaction
 * to avoid console errors from premature WebGL context initialization
 *
 * Fade-in effect: Elements with data-us-project start with opacity 0
 * and fade in once UnicornStudio finishes loading
 */

export function initUnicornStudio() {
  // Set initial opacity to 0 for all UnicornStudio elements
  const unicornElements = document.querySelectorAll('[data-us-project]');
  unicornElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transition = 'opacity 1.5s ease-in-out';
  });

  // Load only after first user interaction to prevent WebGL errors
  let hasLoaded = false;
  const interactionEvents = ['mousemove', 'scroll', 'touchstart', 'click'];

  function loadOnInteraction() {
    if (hasLoaded) return;
    hasLoaded = true;

    // Remove all interaction listeners
    interactionEvents.forEach(event => {
      window.removeEventListener(event, loadOnInteraction);
    });

    // Now load UnicornStudio
    loadUnicornStudio();
  }

  // Set up interaction listeners
  interactionEvents.forEach(event => {
    window.addEventListener(event, loadOnInteraction, { once: true, passive: true });
  });
}

function loadUnicornStudio() {
  // Check if already loaded
  if (window.UnicornStudio) return;

  // Initialize UnicornStudio placeholder
  window.UnicornStudio = { isInitialized: false };

  // Create and configure script element
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js';
  script.async = true; // Explicitly set async to ensure non-blocking behavior

  // Initialize UnicornStudio after script loads
  script.onload = function () {
    if (!window.UnicornStudio.isInitialized) {
      UnicornStudio.init();
      window.UnicornStudio.isInitialized = true;
      console.log('UnicornStudio animation loaded and initialized');

      // Fade in the UnicornStudio elements after initialization
      setTimeout(() => {
        const unicornElements = document.querySelectorAll('[data-us-project]');
        unicornElements.forEach(el => {
          el.style.opacity = '1';
        });
      }, 100); // Small delay to ensure canvas is rendered
    }
  };

  // Handle script loading errors
  script.onerror = function () {
    console.warn('Failed to load UnicornStudio animation library');
    // Fade in anyway so the page isn't broken
    const unicornElements = document.querySelectorAll('[data-us-project]');
    unicornElements.forEach(el => {
      el.style.opacity = '1';
    });
  };

  // Append script to document
  (document.head || document.body).appendChild(script);
}
