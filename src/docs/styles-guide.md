# Umbral Theme - Design System & Styles Guide

**Version:** 1.0.0
**Last Updated:** 2025-01-02
**Theme:** Umbral WordPress Block Theme

This is the official design system documentation for the Umbral WordPress theme. This guide documents all colors, typography, spacing, components, and patterns used throughout the theme.

---

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Color System](#color-system)
3. [Glass Morphism Components](#glass-morphism-components)
4. [Typography System](#typography-system)
5. [Spacing & Layout](#spacing--layout)
6. [Component Patterns](#component-patterns)
7. [Visual Effects](#visual-effects)
8. [Responsive Design](#responsive-design)
9. [Quick Reference](#quick-reference)

---

## Design Philosophy

### Core Principles

1. **Glass Morphism First**: The foundation of this design system. Nearly all containers use semi-transparent backgrounds with backdrop filters.
2. **Neutral Palette Dominance**: 90% of colors use Tailwind's neutral scale (50-950).
3. **Consistent Typography**: Almost all text uses `tracking-tight` for a refined appearance.
4. **Subtle Elevation**: Minimal shadows with barely-there depth.
5. **Generous Rounding**: Large border-radius values (`rounded-3xl`) for major sections.
6. **Smooth Interactions**: 200-300ms transitions with easing.
7. **Icon Consistency**: Standard sizing (`w-4 h-4`) with `stroke-width="1.5"`.

### Visual Hierarchy

```
Headings (neutral-900/950) ’ Body Text (neutral-600) ’ Metadata (neutral-500/400)
Primary Actions (Dark) ’ Secondary Actions (Glass) ’ Tertiary (Ghost)
```

---

## Color System

### Neutral Palette (Primary)

This theme uses Tailwind's neutral scale as its foundation:

| Shade | Hex | Usage |
|-------|-----|-------|
| **neutral-50** | `#fafafa` | Button text on dark backgrounds |
| **neutral-200** | `#e5e5e5` | **PRIMARY BORDER COLOR** (95% of borders) |
| **neutral-400** | `#a3a3a3` | Icons, timeline dots, secondary indicators |
| **neutral-500** | `#737373` | Secondary text, metadata, labels, muted text |
| **neutral-600** | `#525252` | **PRIMARY BODY TEXT** (descriptions, paragraphs) |
| **neutral-700** | `#404040` | Subheadings, medium-emphasis text, code borders |
| **neutral-800** | `#262626` | Button hover states (dark backgrounds) |
| **neutral-900** | `#171717` | **PRIMARY HEADINGS**, dark backgrounds, primary buttons |
| **neutral-950** | `#0a0a0a` | Deep text emphasis (contrast fix) |

### Accent Colors (Semantic)

Used sparingly for status indicators and emphasis:

| Color | Shades | Usage |
|-------|--------|-------|
| **Green** | `400`, `500` | Available status, success states, positive metrics |
| **Blue** | `500` | Informational highlights, metric indicators |
| **Purple** | `500` | Alternative metric indicators, decorative accents |
| **Red** | `500`, `600` | YouTube branding, love/heart indicators |

### Glass Morphism Accent

- **Primary Accent**: `rgba(63, 144, 254, *)` - Blue accent for glass-button borders and active states

### Code Syntax Colors

```css
/* Code background */
background: #272729

/* Code text */
color: #e6edf3

/* Inline code accent */
color: oklch(75% 0.15 162.48) /* Custom green */

/* Comments */
color: #9ca3af /* Improved contrast */
```

### Gradient Overlays

```css
/* Standard image overlay */
bg-gradient-to-t from-black/20 via-transparent to-transparent

/* Subtle image overlay */
bg-gradient-to-t from-black/10 via-transparent to-transparent

/* Alternative direction */
bg-gradient-to-tr from-black/10 via-transparent to-transparent
```

---

## Glass Morphism Components

The cornerstone of this design system. All glass components use `backdrop-filter: blur()` with semi-transparent backgrounds.

### Component Overview

| Component | Use Case | Background Opacity |
|-----------|----------|-------------------|
| `.glass-card` | Article cards, content blocks | 0.75 (75%) |
| `.glass-section` | Large section containers | 0.7 (70%) |
| `.glass-badge` | Pills, tags, labels | 0.9 (90%) |
| `.glass-stat` | Stats, metrics displays | 0.96 (96%) |
| `.glass-button` | Interactive buttons | 0.7 (70%) |
| `.glass-panel` | Accordions, special panels | 0.85 (85%) |

---

### `.glass-card`

**Purpose**: Primary content cards (work showcase, community cards, about section)

**Properties**:
```css
background: rgba(255, 255, 255, 0.75)
backdrop-filter: blur(16px)
-webkit-backdrop-filter: blur(16px)
border: 1px solid rgba(229, 229, 229, 0.8)
border-radius: 1rem
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)
transition: all 0.3s ease
```

**Hover State**:
```css
background: rgba(255, 255, 255, 0.85)
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)
transform: translateY(-2px)
```

**HTML Example**:
```html
<article class="glass-card overflow-hidden">
  <div class="relative aspect-[16/9]">
    <img src="..." alt="..." class="w-full h-full object-cover" />
  </div>
  <div class="p-4 border-t border-neutral-200">
    <h3 class="text-base font-semibold tracking-tight">Card Title</h3>
    <p class="text-sm text-neutral-600 mt-1">Description text</p>
  </div>
</article>
```

---

### `.glass-section`

**Purpose**: Large section backgrounds (tech partners, tech stack, services)

**Properties**:
```css
background: rgba(250, 250, 250, 0.7)
backdrop-filter: blur(8px)
-webkit-backdrop-filter: blur(8px)
border: 1px solid rgba(229, 229, 229, 0.6)
border-radius: 1rem
```

**HTML Example**:
```html
<div class="glass-section rounded-3xl p-6 sm:p-8">
  <h2 class="text-2xl sm:text-3xl font-bold tracking-tight">Section Title</h2>
  <p class="text-neutral-600 mt-2">Section description</p>
  <!-- Section content -->
</div>
```

---

### `.glass-badge`

**Purpose**: Tech tags, labels, pills

**Properties**:
```css
background: rgba(255, 255, 255, 0.9)
backdrop-filter: blur(6px)
-webkit-backdrop-filter: blur(6px)
border: 1px solid rgba(229, 229, 229, 0.7)
border-radius: 0.375rem
padding: 0.25rem 0.625rem
transition: all 0.2s ease
```

**Hover State**:
```css
background: rgba(255, 255, 255, 1)
border-color: rgba(63, 144, 254, 0.3)
```

**Active State**:
```css
background: rgba(63, 144, 254, 0.1)
border-color: rgba(63, 144, 254, 0.4)
```

**HTML Example**:
```html
<span class="glass-badge px-2.5 py-1 text-xs">Voiceflow</span>
```

---

### `.glass-stat`

**Purpose**: Stats, metrics, number displays

**Properties**:
```css
background: rgba(255, 255, 255, 0.96)
backdrop-filter: blur(16px)
-webkit-backdrop-filter: blur(16px)
border: 1px solid rgba(229, 229, 229, 0.95)
border-radius: 0.5rem
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.08)
```

**HTML Example**:
```html
<div class="glass-stat p-3">
  <div class="flex items-center gap-2 mb-1">
    <div class="w-2 h-2 rounded-full bg-green-500"></div>
    <div class="text-lg font-semibold tracking-tight text-neutral-900">5+</div>
  </div>
  <p class="text-[11px] text-neutral-600">years building AI</p>
</div>
```

---

### `.glass-button`

**Purpose**: Secondary/ghost buttons, icon buttons

**Properties**:
```css
background: rgba(255, 255, 255, 0.7)
backdrop-filter: blur(12px)
-webkit-backdrop-filter: blur(12px)
border: 1px solid rgba(229, 229, 229, 0.7)
border-radius: 0.5rem
transition: all 0.2s ease
```

**Hover State**:
```css
background: rgba(255, 255, 255, 0.85)
border-color: rgba(63, 144, 254, 0.5)
box-shadow: 0 4px 6px -1px rgba(63, 144, 254, 0.1)
```

**Disabled State**:
```css
background: rgba(255, 255, 255, 0.5)
border-color: rgba(229, 229, 229, 0.5)
opacity: 0.6
cursor: not-allowed
```

**HTML Example**:
```html
<button class="glass-button inline-flex items-center gap-2 px-4 py-2 text-sm font-medium">
  <svg class="w-4 h-4">...</svg>
  <span>Button Text</span>
</button>
```

---

### `.glass-panel`

**Purpose**: Accordions, expandable content, special panels

**Properties**:
```css
background: rgba(255, 255, 255, 0.85)
backdrop-filter: blur(20px)
-webkit-backdrop-filter: blur(20px)
border: 1px solid rgba(229, 229, 229, 0.6)
border-radius: 1rem
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05)
```

**HTML Example**:
```html
<div class="glass-panel rounded-xl overflow-hidden">
  <button class="w-full p-4 flex items-center justify-between">
    <span class="text-sm font-medium">Panel Title</span>
    <svg class="w-4 h-4">...</svg>
  </button>
  <div class="p-4 border-t border-neutral-200">
    Panel content
  </div>
</div>
```

---

### Glass Utility Classes

```css
/* Just the backdrop-filter effect */
.glass-effect {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* Strong blur */
.glass-blur-strong {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

/* Subtle blur */
.glass-blur-subtle {
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}

/* Dark glass variant */
.glass-dark {
  background: rgba(39, 39, 41, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #e8e8e8;
}
```

---

## Typography System

### Font Families

```css
/* Primary (System) */
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif

/* Serif */
font-family: 'Instrument Serif', Georgia, Cambria, 'Times New Roman', Times, serif

/* Monospace (Code) */
font-family: 'Geist Mono', 'SF Mono', Monaco, Inconsolata, 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace
```

### Hero Typography

```css
.text-hero {
  font-size: clamp(3.5rem, 6vw, 6rem); /* 56px - 96px */
  line-height: 1;
  letter-spacing: -0.05em;
}
```

**Usage**: Main hero heading ("Conner Burton")

---

### Heading Scale

| Element | Classes | Size | Weight | Tracking | Use Case |
|---------|---------|------|--------|----------|----------|
| **H1** | `text-3xl sm:text-5xl` | 1.875-3rem | `font-bold` / `font-semibold` | `tracking-tight` | Page titles, major headings |
| **H2** | `text-2xl sm:text-3xl` | 1.5-1.875rem | `font-semibold` / `font-bold` | `tracking-tight` | Section headings |
| **H3** | `text-xl` | 1.25rem | `font-semibold` | `tracking-tight` | Card titles, subsection headings |
| **H4** | `text-base` | 1rem | `font-semibold` / `font-medium` | `tracking-tight` | Small headings, labels |

**Example**:
```html
<h1 class="text-3xl sm:text-5xl font-bold tracking-tight">Page Title</h1>
<h2 class="text-2xl sm:text-3xl font-semibold tracking-tight">Section Title</h2>
<h3 class="text-xl font-semibold tracking-tight">Card Title</h3>
```

---

### Body Text Scale

| Class | Size | Color | Line Height | Usage |
|-------|------|-------|-------------|-------|
| **Large** | `text-lg` - `text-2xl` | `text-neutral-600` | `leading-relaxed` | Hero descriptions, lead paragraphs |
| **Base** | `text-base` | `text-neutral-600` | `leading-relaxed` | Primary body text |
| **Small** | `text-sm` | `text-neutral-600` | `leading-relaxed` | Secondary descriptions, card content |
| **Extra Small** | `text-xs` | `text-neutral-500` | default | Metadata, labels, badges |
| **Tiny** | `text-[11px]` | `text-neutral-500`/`600` | default | Stat labels, micro-copy |

**Example**:
```html
<p class="text-base text-neutral-600 leading-relaxed">
  Primary body text with comfortable line height.
</p>
<p class="text-sm text-neutral-600 mt-1">
  Secondary descriptive text.
</p>
<span class="text-xs text-neutral-500">Metadata " Label</span>
```

---

### Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| `font-medium` | 500 | Labels, buttons, emphasized text |
| `font-semibold` | 600 | **MOST COMMON** - All headings, card titles |
| `font-bold` | 700 | Major page headings, strong emphasis |

---

### Letter Spacing (Tracking)

| Class | Value | Usage |
|-------|-------|-------|
| `tracking-tight` | -0.025em | **95% OF ALL TEXT** - Default for refined look |
| `tracking-tighter` | -0.05em | Hero heading only |

**Important**: Almost all text in this theme uses `tracking-tight`. This is a core design principle.

---

### Line Heights

| Class | Value | Usage |
|-------|-------|-------|
| `leading-none` | 1 | Hero heading, display text |
| `leading-tight` | 1.25 | Compact text, UI elements |
| Default | 1.5 | Standard UI text |
| `leading-relaxed` | 1.625 | **BODY TEXT STANDARD** - Comfortable reading |

---

## Spacing & Layout

### Section Spacing Patterns

**Vertical Separation**:
```css
/* Standard section spacing */
mt-16 sm:mt-20        /* 4rem ’ 5rem */

/* Extra large section spacing */
mt-16 sm:mt-24        /* 4rem ’ 6rem */

/* Section border + padding */
border-t border-neutral-200 pt-10
```

**Container Padding**:
```css
/* Standard container (used in 100% of sections) */
max-w-7xl mx-auto px-4 sm:px-6
```

---

### Spacing Scale

| Value | Pixels | Common Usage |
|-------|--------|--------------|
| `0.5` | 2px | Fine-tuning, icon positioning |
| `1` | 4px | Tiny gaps, icon spacing |
| `2` | 8px | Small gaps, badge padding |
| `3` | 12px | **VERY COMMON** - Medium gaps |
| `4` | 16px | **MOST COMMON** - Standard gaps, padding |
| `5` | 20px | Large gaps |
| `6` | 24px | Section gaps |
| `8` | 32px | Extra large section gaps |
| `10` | 40px | Section top padding |
| `16` | 64px | Section vertical separation |
| `20` | 80px | Large section separation (tablet+) |

---

### Grid Patterns

#### Hero Grid (7/5 Split)
```html
<div class="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-8">
  <div class="lg:col-span-7"><!-- Left content (wider) --></div>
  <div class="lg:col-span-5"><!-- Right content --></div>
</div>
```

#### Three Column Grid
```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
  <!-- Three equal columns -->
</div>
```

#### Masonry/Columns Layout
```html
<div class="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
  <!-- Auto-flowing masonry cards -->
</div>
```

#### Stats Grid (3 columns)
```html
<div class="grid grid-cols-3 gap-3">
  <!-- Three stat cards -->
</div>
```

---

### Flex Patterns

**Header Navigation**:
```html
<div class="flex items-center justify-between">
  <!-- Logo left, nav right -->
</div>
```

**Button Groups**:
```html
<div class="flex flex-col sm:flex-row gap-3">
  <!-- Stacked mobile, horizontal desktop -->
</div>
```

**Icon + Text**:
```html
<div class="flex items-center gap-2">
  <svg class="w-4 h-4">...</svg>
  <span>Text</span>
</div>
```

---

## Component Patterns

### Buttons

#### Primary Button (Dark)
```html
<a href="#" class="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-tight text-neutral-50 bg-neutral-900 hover:bg-neutral-800 border border-neutral-900">
  <svg class="w-4 h-4">...</svg>
  <span>Button Text</span>
</a>
```

**Size Variants**:
- Small: `px-3 py-1.5`
- Medium: `px-4 py-2` or `px-5 py-3`
- Large: `px-6 py-3.5`

**With Elevation**:
```html
class="... shadow-lg hover:shadow-xl transition-all"
```

#### Glass Button (Light)
```html
<button class="glass-button inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-tight text-neutral-900">
  <svg class="w-4 h-4">...</svg>
  <span>Button Text</span>
</button>
```

---

### Cards

#### Work Showcase Card
```html
<article class="glass-card group break-inside-avoid mb-5 overflow-hidden">
  <div class="relative aspect-[16/9]">
    <img
      src="..."
      alt="..."
      class="w-full h-full object-cover grayscale saturate-[0.7] contrast-[1.1] transition-transform duration-500 group-hover:scale-[1.03] group-hover:filter-none"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
  </div>
  <div class="p-4 border-t border-neutral-200">
    <div class="flex items-center gap-2 text-xs text-neutral-500">
      <svg class="w-4 h-4">...</svg>
      <span>Category</span>
    </div>
    <h3 class="mt-2 text-base font-semibold tracking-tight">Card Title</h3>
    <p class="text-sm text-neutral-600 mt-1">Brief description of the work</p>
  </div>
</article>
```

**Image Aspect Ratios**:
- `aspect-[16/9]` - Landscape (work cards)
- `aspect-[4/3]` - Square-ish
- `aspect-[4/5]` - Portrait (headshot)
- `aspect-[5/6]` - Tall portrait

---

### Stats/Metrics Pattern

```html
<div class="glass-stat p-3">
  <div class="flex items-center gap-2 mb-1">
    <!-- Colored indicator dot -->
    <div class="w-2 h-2 rounded-full bg-green-500"></div>
    <!-- Large number -->
    <div class="text-lg font-semibold tracking-tight text-neutral-900">5+</div>
  </div>
  <!-- Tiny label -->
  <p class="text-[11px] text-neutral-600">years building AI</p>
</div>
```

**Dot Colors by Type**:
- Green (`bg-green-500`) - Positive, available, success
- Blue (`bg-blue-500`) - Information, metrics
- Purple (`bg-purple-500`) - Special metrics
- Neutral (`bg-neutral-900`, `700`, `500`, `400`) - Progressive timeline fade

---

### Badge Pattern

**Light Badge** (glass morphism):
```html
<span class="glass-badge px-2.5 py-1 text-xs">Voiceflow</span>
```

**Dark Badge**:
```html
<span class="inline-flex items-center rounded-full text-xs px-2.5 py-1 bg-neutral-900 text-neutral-50">
  Voiceflow
</span>
```

---

### Icon Pattern

**Standard Icon Sizes**:
```css
w-4 h-4        /* MOST COMMON - 16px - UI icons, buttons */
w-5 h-5        /* Medium - 20px */
w-[18px] h-[18px]  /* Specific small size */
w-8 h-8        /* Large - 32px - Special icons (YouTube logo) */
```

**Icon Colors**:
```css
text-neutral-400   /* Muted/inactive */
text-neutral-600   /* Standard */
text-neutral-700   /* Emphasized */
text-neutral-900   /* Dark/active */
```

**Stroke Width**: Always `stroke-width="1.5"` for Lucide icons

**Example**:
```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="1.5"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="w-4 h-4"
>
  <path d="M5 12h14"></path>
  <path d="m12 5 7 7-7 7"></path>
</svg>
```

---

### Timeline/List Pattern

```html
<ol>
  <li class="relative pl-6 pb-4 border-l border-neutral-200 last:border-0">
    <!-- Progressive fade dot -->
    <span class="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-neutral-900"></span>
    <p class="text-sm font-medium tracking-tight">Item Title</p>
    <p class="text-xs text-neutral-600 mt-1">Item description</p>
  </li>
  <!-- More items with progressively lighter dots: neutral-700, 500, 400 -->
</ol>
```

**Dot Progression**:
1. `bg-neutral-900` (darkest)
2. `bg-neutral-700`
3. `bg-neutral-500`
4. `bg-neutral-400` (lightest)

---

### Accordion Pattern (Alpine.js)

```html
<div x-data="{ activeItem: null }" class="space-y-3">
  <!-- Accordion Item -->
  <div class="glass-panel rounded-xl overflow-hidden">
    <button
      x-on:click="activeItem = activeItem === 1 ? null : 1"
      class="w-full p-4 sm:p-5 flex items-center justify-between"
    >
      <span class="text-sm font-medium tracking-tight">Accordion Title</span>
      <div class="flex-shrink-0">
        <svg x-show="activeItem !== 1" class="w-5 h-5"><!-- Plus icon --></svg>
        <svg x-show="activeItem === 1" x-cloak class="w-5 h-5"><!-- Minus icon --></svg>
      </div>
    </button>
    <div x-show="activeItem === 1" x-collapse class="border-t border-neutral-200">
      <div class="p-4 sm:p-6">
        <!-- Accordion content -->
      </div>
    </div>
  </div>
</div>
```

---

## Visual Effects

### Border System

**Border Colors**:
```css
border-neutral-200   /* PRIMARY - 95% of all borders */
border-neutral-700   /* Code blocks */
border-neutral-900   /* Dark buttons */
```

**Border Radius**:

| Class | Pixels | Usage |
|-------|--------|-------|
| `rounded` | 4px | Small elements |
| `rounded-xl` | 12px | Code blocks, medium cards |
| `rounded-3xl` | 24px | **LARGE SECTIONS** - Main aesthetic |
| `rounded-full` | 9999px | **BUTTONS, BADGES, DOTS** - Very common |

**Border Widths**: Always `border` (1px) - no thick borders used

---

### Shadow System

**Light Shadows**:
```css
shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)
```

**Medium Shadows**:
```css
shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)
```

**Extra Large Shadows**:
```css
shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)
```

**Usage Pattern**: Shadows are used sparingly - glass morphism provides most depth.

---

### Animation & Transitions

#### Transition Patterns

**Standard Transitions**:
```css
transition: all 0.3s ease        /* Cards, major elements */
transition: all 0.2s ease        /* Badges, buttons, fast interactions */
transition-colors duration-300   /* Color-only transitions */
transition-transform             /* Transform-only transitions */
transition-shadow                /* Shadow-only transitions */
```

**Image Hover**:
```css
transition-transform duration-500 group-hover:scale-[1.03]
```

#### Transform Patterns

**Hover Lift**:
```css
hover:translateY(-2px)
```

**Icon Scale**:
```css
hover:scale-110
```

#### Keyframe Animations

**Letter Reveal** (Hero heading):
```css
@keyframes letterReveal {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Staggered delays: 0.05s per character */
```

**Status Pulse** (Available indicator):
```html
<span class="relative flex h-3 w-3">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-40"></span>
  <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500/60 backdrop-blur-sm border border-green-400/30"></span>
</span>
```

---

### Image Treatment

**Grayscale Effect**:
```css
/* Default state */
grayscale saturate-[0.7] contrast-[1.1]

/* Hover state (restore color) */
filter: grayscale(0%) saturate(1) contrast(1)
```

**Object Positioning**:
```css
object-cover                /* Standard cover */
object-cover object-[65%]   /* Hero headshot - 65% horizontal */
```

**Picture Element Pattern**:
```html
<picture>
  <source
    type="image/webp"
    srcset="
      image-300w.webp 300w,
      image-768w.webp 768w,
      image-1024w.webp 1024w,
      image-1536w.webp 1536w,
      image-2048w.webp 2048w
    "
    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 1242px"
  />
  <img
    src="image.jpg"
    alt="..."
    loading="lazy"
    class="w-full h-full object-cover"
  />
</picture>
```

---

## Responsive Design

### Breakpoints

| Prefix | Min Width | Usage |
|--------|-----------|-------|
| `sm:` | 640px | Tablet |
| `md:` | 768px | Desktop small |
| `lg:` | 1024px | Desktop large |

### Common Responsive Patterns

**Text Sizes**:
```css
text-base sm:text-lg           /* Body text scale up */
text-xl sm:text-2xl             /* Heading scale up */
text-2xl sm:text-3xl md:text-5xl  /* Major heading scale */
```

**Spacing**:
```css
mt-16 sm:mt-20                 /* Section margins */
px-4 sm:px-6                   /* Container padding */
p-6 sm:p-8 md:p-12            /* Card padding scale */
gap-3 sm:gap-4 md:gap-6       /* Grid gaps scale */
```

**Grid Columns**:
```css
grid-cols-1 sm:grid-cols-2 lg:grid-cols-3    /* Progressive columns */
grid-cols-1 md:grid-cols-3                   /* Jump to 3 */
columns-1 sm:columns-2 lg:columns-3          /* Masonry columns */
```

**Visibility**:
```css
hidden sm:inline-flex          /* Show on desktop */
md:hidden                      /* Hide on desktop */
```

---

## Code Styling

### Inline Code

```css
background: #272729
color: oklch(75% 0.15 162.48)
font-size: 0.875em
padding: 0.2em 0.6em
border-radius: 0.375rem
font-family: 'SF Mono', Monaco, ...
```

**HTML Example**:
```html
<code class="px-2 py-1 text-sm rounded bg-[#272729] text-[oklch(75%_0.15_162.48)] font-geist-mono">
  inline code
</code>
```

### Code Blocks

```html
<pre class="text-[12px] leading-relaxed overflow-auto text-neutral-200 border-neutral-700 border rounded-xl mt-3 p-3 font-geist-mono bg-[#272729] max-h-[400px]">
  <code class="language-javascript">
    // Your code here
  </code>
</pre>
```

**Key Properties**:
- Background: `#272729`
- Text: `text-neutral-200`
- Border: `border-neutral-700`
- Max height: `400px` with scroll
- Font size: `12px` (0.75rem)
- Border radius: `rounded-xl` (12px)

---

## Quick Reference

### Most Used Utilities

| Utility | Frequency | Usage |
|---------|-----------|-------|
| `tracking-tight` | ~95% | Almost all text |
| `border-neutral-200` | ~90% | All borders |
| `text-neutral-600` | ~60% | Body text |
| `text-neutral-900` | ~40% | Headings |
| `gap-3`, `gap-4` | ~80% | Grid/flex gaps |
| `px-4 sm:px-6` | ~100% | All containers |
| `rounded-full` | ~70% | Buttons, badges, dots |
| `rounded-3xl` | ~50% | Large sections |
| `w-4 h-4` | ~90% | Icons |
| `text-sm` | ~60% | Secondary text |
| `font-semibold` | ~70% | Headings |
| `leading-relaxed` | ~60% | Body paragraphs |

### Glass Component Selector

**Need to display...**
- Article cards, featured content ’ `.glass-card`
- Large section backgrounds ’ `.glass-section`
- Tech tags, labels, pills ’ `.glass-badge`
- Stats, metrics, numbers ’ `.glass-stat`
- Secondary/icon buttons ’ `.glass-button`
- Accordions, special panels ’ `.glass-panel`

### Color Quick Pick

**Text Colors**:
- Headings ’ `text-neutral-900`
- Body ’ `text-neutral-600`
- Meta/Labels ’ `text-neutral-500`
- Muted ’ `text-neutral-400`

**Borders**:
- Standard ’ `border-neutral-200`
- Code ’ `border-neutral-700`

**Backgrounds**:
- Dark buttons ’ `bg-neutral-900`
- Light sections ’ `bg-neutral-50`

### Spacing Quick Pick

**Padding**:
- Cards (small) ’ `p-4`
- Cards (medium) ’ `p-5` or `p-6`
- Sections ’ `p-6 sm:p-8`

**Margins**:
- Between sections ’ `mt-16 sm:mt-20`
- Between elements ’ `mt-2`, `mt-3`, `mt-4`

**Gaps**:
- Tight ’ `gap-2`
- Standard ’ `gap-3` or `gap-4`
- Loose ’ `gap-6` or `gap-8`

---

## Best Practices

### When Creating New Components

1. **Check this guide first** - Look for existing patterns that match your needs
2. **Use glass morphism** - Default to `.glass-*` components for containers
3. **Follow color hierarchy** - `neutral-900` ’ `neutral-600` ’ `neutral-500`
4. **Add tracking-tight** - Almost all text should use this
5. **Use standard borders** - Default to `border-neutral-200`
6. **Round generously** - `rounded-3xl` for sections, `rounded-full` for buttons/badges
7. **Keep transitions smooth** - 200-300ms with ease
8. **Maintain icon consistency** - `w-4 h-4` with `stroke-width="1.5"`

### Don't Break the System

L **Avoid**:
- Custom colors outside the neutral palette (unless accent/semantic)
- Thick borders (stick with 1px)
- Text without `tracking-tight`
- Sharp corners on major elements
- Heavy shadows
- Mixing glass and solid backgrounds inconsistently

 **Do**:
- Use established glass components
- Maintain spacing consistency
- Follow responsive patterns
- Keep transitions uniform
- Use semantic accent colors sparingly
- Test accessibility (contrast, focus states)

---

## File Organization

```
src/styles/
   tailwind.css              # Main entry point
   core/
      colors.css           # Color variables
      wordpress.css        # WordPress defaults
      editor.css           # Editor styles
   components/
       glass.css            # P Glass morphism system (CRITICAL)
       typography.css       # Font utilities
       buttons.css          # Button styles
       cards.css            # Card components
       layout.css           # Layout utilities
       animations.css       # Keyframes, transitions
       syntax-highlighting.css  # Code styling
       utilities.css        # Helper classes
```

---

## Version History

**v1.0.0** (2025-01-02)
- Initial design system documentation
- Comprehensive glass morphism component library
- Typography, spacing, and layout patterns
- Component library with examples
- Quick reference guides

---

**Questions or Updates?**

This guide should be updated whenever new patterns emerge or existing patterns change. Keep it as the single source of truth for design decisions.
