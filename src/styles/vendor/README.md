# Vendor Overrides Directory

## Overview

This directory contains **third-party library CSS overrides**—customizations for external libraries like Splide, Swiper, or other JavaScript plugins.

Think of this as **where you tame third-party styles**—making external libraries match your design system.

---

## Philosophy

Vendor overrides allow you to:

1. **Hide unwanted UI** - Remove default arrows, pagination
2. **Match design system** - Override colors, spacing to match your theme
3. **Fix specificity issues** - Override library styles without `!important`
4. **Isolate changes** - Keep library customizations separate from your components

### Core Principle

**"Keep third-party library customizations isolated in vendor/ directory."**

---

## Usage

### Step 1: Create Override File

```bash
touch src/styles/vendor/library-name.css
```

Name it after the library (e.g., `splide-overrides.css`, `swiper-overrides.css`).

### Step 2: Add Overrides

```css
/* vendor/splide-overrides.css */

/* Hide default pagination */
.splide__pagination {
  display: none !important;
}

/* Hide default arrows */
.splide__arrows {
  display: none !important;
}

/* Custom track styling */
.splide__track {
  padding: 1rem 0;
}
```

### Step 3: Import in `tailwind.css`

**Important:** Import vendor files **without** `@layer`:

```css
/* tailwind.css */

/* ... other imports with layers ... */

/* Vendor overrides (no layer - highest specificity) */
@import './vendor/splide-overrides.css';
@import './vendor/swiper-overrides.css';
```

**Why no layer?** Libraries often use high specificity. Keeping overrides outside layers ensures they win.

---

## Common Libraries

### Splide.js (Carousel)

```css
/* vendor/splide-overrides.css */

/* Hide UI elements */
.splide__pagination,
.splide__arrows {
  display: none !important;
}

/* Match theme colors */
.splide__slide {
  background: var(--color-card);
}
```

### Swiper.js (Slider)

```css
/* vendor/swiper-overrides.css */

/* Hide pagination */
.swiper-pagination {
  display: none !important;
}

/* Custom navigation arrows */
.swiper-button-next,
.swiper-button-prev {
  color: var(--color-primary);
}
```

### Highlight.js (Syntax Highlighting)

```css
/* vendor/highlight-overrides.css */

/* Override default theme */
.hljs {
  background: var(--color-surface);
  color: var(--color-text);
  padding: 1.5rem;
  border-radius: 0.5rem;
}
```

### Lightbox Libraries

```css
/* vendor/lightbox-overrides.css */

/* Match theme */
.lightbox-overlay {
  background: rgba(0, 0, 0, 0.9);
}

.lightbox-close {
  color: var(--color-white);
}
```

---

## Best Practices

### 1. Use `!important` When Necessary

Libraries often have high specificity. Use `!important` to override:

```css
.library-element {
  display: none !important;
  /* Library uses inline styles or high specificity */
}
```

### 2. Reference Theme Variables

Match library styles to your theme:

```css
.library-button {
  background: var(--color-primary) !important;
  color: var(--color-white) !important;
  border-radius: var(--radius-lg) !important;
}
```

### 3. Document Why Overrides Exist

```css
/**
 * Splide Overrides
 *
 * Purpose: Hide default UI (we use custom controls)
 * Library: Splide.js v4.x
 * Docs: https://splidejs.com/
 */
.splide__pagination {
  display: none !important;
}
```

### 4. Keep Minimal

Only override what's necessary:

**Good:**
```css
/* Hide what we don't want */
.library__unwanted-ui {
  display: none !important;
}
```

**Bad:**
```css
/* Overriding everything */
.library__element { ... }
.library__child { ... }
.library__grandchild { ... }
/* Better to use a different library */
```

### 5. Scope to Library

Use library-specific class prefixes:

```css
/* Only affects Splide */
.splide__track { ... }

/* Only affects Swiper */
.swiper-slide { ... }
```

---

## When to Remove Libraries

If you're creating a clean boilerplate:

**Remove:**
- All library-specific override files
- Libraries that aren't universally needed (Splide, specific carousels, etc.)

**Keep:**
- Common overrides (if any libraries are kept)
- Generic patterns (e.g., syntax highlighting if using markdown)

**For this boilerplate:**
```bash
# Remove Splide overrides
rm src/styles/vendor/splide-overrides.css
```

Update `tailwind.css`:
```css
/* Remove vendor imports */
/* @import './vendor/splide-overrides.css'; */
```

---

## Alternative: CSS Carousel

Instead of JavaScript libraries, consider pure CSS solutions:

```css
/* components/css-carousel.css */
.css-carousel {
  overflow: hidden;
}

.css-carousel__track {
  display: flex;
  animation: scroll 30s linear infinite;
}

@keyframes scroll {
  to { transform: translateX(-50%); }
}
```

**Benefits:**
- No JavaScript dependency
- No vendor overrides needed
- Better performance

---

## Troubleshooting

### Override Not Working

**Try:**
1. Add `!important`
2. Increase specificity
3. Move import after other styles
4. Check library class names (inspect element)

### Styles Conflict

**Solution:**
```css
/* Scope overrides */
.my-carousel .splide__track {
  /* Only affects carousels with .my-carousel class */
}
```

### Library Updates Break Styles

**Fix:**
1. Check library changelog
2. Update overrides for new class names
3. Test after library updates

---

**Summary:**

This directory contains **third-party library CSS overrides**. Import without `@layer` for highest specificity. Use `!important` when needed. Reference theme variables to match design system. For boilerplate, remove all project-specific library overrides.

**For boilerplate:**
- Remove all files
- Keep directory for future library overrides

---

**Version:** 1.0.0
**Last Updated:** 2025-01-21
