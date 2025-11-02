/**
 * Alpine.js Accordion Component
 *
 * Features:
 * - Only one item open at a time (managed by Alpine x-data)
 * - Smooth animations with Alpine Collapse (x-collapse directive)
 * - Automatic icon toggling with x-show
 * - No JavaScript initialization required - Alpine handles everything declaratively
 *
 * Usage in HTML:
 * <div x-data="{ activeItem: null }">
 *   <button x-on:click="activeItem = activeItem === 1 ? null : 1">Toggle</button>
 *   <div x-show="activeItem === 1" x-collapse>Content</div>
 * </div>
 */

export function initAccordion() {
  // No JavaScript initialization needed
  // Alpine.js handles all accordion logic via x-data, x-on:click, x-show, and x-collapse
}
