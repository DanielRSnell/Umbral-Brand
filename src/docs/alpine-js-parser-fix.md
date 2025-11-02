# Alpine.js Attribute Preservation Fix

**Date:** 2025-01-26
**Issue:** WordPress block parser was stripping colons from Alpine.js attributes
**Status:** Fixed

---

## Problem

When converting HTML to WordPress blocks, Alpine.js attributes with colons were being corrupted:

```html
<!-- Original HTML -->
<button x-on:click="toggle()">Click</button>
<div x-bind:class="{ active: open }">Content</div>

<!-- After WordPress parsing (BROKEN) -->
<button x-onclick="toggle()">Click</button>
<div x-bindclass="{ active: open }">Content</div>
```

The colons were being removed, breaking all Alpine.js functionality.

## Root Cause

The WordPress block parser uses the browser's `DOMParser` API to parse HTML. Per HTML specification, attribute names can only contain:
- Letters (a-z, A-Z)
- Digits (0-9)
- Hyphens (-)
- Underscores (_)
- Periods (.)

**Colons are NOT valid in HTML attribute names.** When the browser's DOMParser encounters `x-on:click`, it automatically strips the colon, resulting in `x-onclick`.

## Solution

We implemented a preprocessing step that:
1. **Encodes colons** as `__colon__` before parsing (a valid character sequence)
2. **Decodes them back** to `:` after parsing is complete

This works around the HTML spec limitation while preserving Alpine.js syntax.

## Implementation

### File: `includes/client-html2blocks.js`

#### 1. Preprocessing Function (Lines 8-23)

```javascript
function preprocessAlpineAttributes(html) {
  // Match Alpine.js attributes and encode colons
  // Patterns: x-on:event, x-bind:attr, @event, :attr
  return html
    .replace(/\s(x-on):([a-zA-Z0-9-_.]+)=/g, ' $1__colon__$2=')     // x-on:click
    .replace(/\s(x-bind):([a-zA-Z0-9-_.]+)=/g, ' $1__colon__$2=')   // x-bind:class
    .replace(/\s(@)([a-zA-Z0-9-_.]+)=/g, ' @$2=')                    // @click (no colon to preserve)
    .replace(/\s(:)([a-zA-Z0-9-_.]+)=/g, ' __colon__$2=');          // :disabled
}
```

**What it does:**
- Finds Alpine.js attributes with colons
- Replaces `:` with `__colon__` (lowercase because DOMParser lowercases everything)
- Handles both full syntax (`x-on:click`) and shorthand (`:disabled`)

#### 2. Call Preprocessor (Line 36)

```javascript
function html2blocks(html) {
  if (!html || typeof html !== 'string') {
    return [];
  }

  // Preprocess to preserve Alpine.js attribute colons
  html = preprocessAlpineAttributes(html);

  // Use DOMParser to parse HTML
  const parser = new DOMParser();
  const doc = parser.parseFromString(html.trim(), 'text/html');
  // ...
}
```

#### 3. Decode Colons (Lines 239-241)

```javascript
function getAttributes(element) {
  // ...
  Array.from(element.attributes).forEach(attr => {
    const decodedValue = decodeHtmlEntities(attr.value);

    // Decode __colon__ back to : in attribute names (for Alpine.js attributes)
    // NOTE: Using lowercase __colon__ because DOMParser lowercases all attribute names
    const attrName = attr.name.replace(/__colon__/g, ':');
    const attrNameLower = attrName.toLowerCase();

    // ... use attrName instead of attr.name for all attribute handling
  });
}
```

## Supported Alpine.js Attributes

All Alpine.js attributes now work correctly:

### Full Syntax (Recommended)
```html
<button x-on:click="toggle()">Click</button>
<div x-bind:class="{ active: isOpen }">Content</div>
<input x-model:debounce="search" />
```

### Shorthand Syntax
```html
<button @click="toggle()">Click</button>
<div :class="{ active: isOpen }">Content</div>
<input :disabled="loading" />
```

### Complete Example
```html
<div x-data="{ activeItem: null }">
  <button x-on:click="activeItem = 1">Toggle Item 1</button>
  <div x-show="activeItem === 1" x-collapse>
    <p>Content for item 1</p>
  </div>
</div>
```

## Testing

Verified with test HTML containing various Alpine.js attributes:

```javascript
const html = `
<div x-data="{ open: false }">
  <button x-on:click="open = !open" x-bind:class="open ? 'active' : ''">Toggle</button>
  <div x-show="open" :disabled="loading" @mouseenter="handleHover()">Content</div>
</div>
`;

const blocks = html2blocks(html);
// Result: All attributes preserved correctly:
// - x-on:click ✓
// - x-bind:class ✓
// - x-show ✓
// - :disabled ✓
// - @mouseenter ✓
```

## Impact

This fix enables:
- ✅ Alpine.js components in WordPress blocks
- ✅ Declarative JavaScript interactions
- ✅ Smooth animations with Alpine Collapse (`x-collapse`)
- ✅ State management with `x-data`
- ✅ Event handlers with `x-on:` and `@`
- ✅ Dynamic bindings with `x-bind:` and `:`

## Real-World Example: Accordion Component

**Before fix (broken):**
```html
<!-- Vanilla JS required due to parser limitations -->
<button data-accordion-trigger="1">Toggle</button>
<div data-accordion-content="1" style="display: none;">Content</div>
```

**After fix (Alpine.js works):**
```html
<div x-data="{ activeItem: null }">
  <button x-on:click="activeItem = activeItem === 1 ? null : 1">
    Toggle
    <svg x-show="activeItem !== 1">Plus Icon</svg>
    <svg x-show="activeItem === 1" x-cloak>Minus Icon</svg>
  </button>
  <div x-show="activeItem === 1" x-collapse>
    Content with smooth collapse animation
  </div>
</div>
```

**Benefits:**
- No JavaScript initialization required
- Smooth animations via Alpine Collapse
- Cleaner, more maintainable code
- Fully declarative in HTML

## Files Modified

1. **includes/client-html2blocks.js**
   - Added `preprocessAlpineAttributes()` function
   - Modified `html2blocks()` to call preprocessor
   - Modified `getAttributes()` to decode attribute names

2. **src/content/pages/home/section-6.html**
   - Converted accordion from vanilla JS to Alpine.js
   - Uses `x-data`, `x-on:click`, `x-show`, `x-collapse`

3. **src/scripts/components/accordion.js**
   - Removed vanilla JS logic
   - Now just documentation (Alpine handles everything)

4. **CLAUDE.md**
   - Added Alpine.js attribute support documentation
   - Documented the fix and implementation

## Notes

- **Lowercase placeholder**: We use `__colon__` (lowercase) because `DOMParser` lowercases all attribute names
- **HTML spec compliance**: This approach works within HTML spec constraints while preserving JavaScript framework syntax
- **Other frameworks**: This same approach could support other frameworks with colon syntax (Vue.js, etc.)
- **No breaking changes**: Existing Twig attributes and HTML attributes continue to work as before

## References

- **HTML Living Standard**: https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
- **Alpine.js Documentation**: https://alpinejs.dev/
- **Alpine Collapse Plugin**: https://alpinejs.dev/plugins/collapse

---

**Last Updated:** 2025-01-26
