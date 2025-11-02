<?php
/**
 * Title: Header 1
 * Slug: umbral/header-1
 * Description: Reusable pattern section
 * Categories: patterns
 * Viewport Width: 1280
 * Inserter: true
 */
?>
<header class="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
  <nav class="flex items-center border-b border-neutral-200 pb-4">
    <!-- Brand -->
    <a href="#" class="inline-flex items-center">
      <img
        src="{{ site.theme.link }}/public/conner/umbral.svg"
        alt="Umbral"
        class="md:h-8 h-6"
      />
    </a>

    <!-- Nav links -->
    <div class="hidden md:flex items-center gap-6 ml-auto">
      <a href="#work" class="text-sm text-neutral-600 hover:text-neutral-900 tracking-tight">Work</a>
      <a href="#partners" class="text-sm text-neutral-600 hover:text-neutral-900 tracking-tight">Partners</a>
      <a href="#stack" class="text-sm text-neutral-600 hover:text-neutral-900 tracking-tight">Stack</a>
      <a href="#community" class="text-sm text-neutral-600 hover:text-neutral-900 tracking-tight">Community</a>
      <a href="#services" class="text-sm text-neutral-600 hover:text-neutral-900 tracking-tight">Services</a>
      <a href="#contact" class="text-sm text-neutral-600 hover:text-neutral-900 tracking-tight">Contact</a>
    </div>

    <!-- Actions -->
    <div class="flex items-center gap-2 ml-auto md:ml-6">
      <a
        href="https://cal.com/umbral/discovery-call?overlayCalendar=true"
        target="_blank"
        rel="noopener noreferrer"
        class="hidden sm:inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium tracking-tight text-neutral-50 bg-neutral-900 hover:bg-neutral-800 border border-neutral-900 shadow-sm"
      >
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
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        <span class="">Schedule</span>
      </a>
      <button
        type="button"
        data-menu-toggle=""
        class="glass-button md:hidden inline-flex items-center justify-center rounded-full p-2"
      >
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
          <path d="M4 12h16"></path>
          <path d="M4 18h16"></path>
          <path d="M4 6h16"></path>
        </svg>
        <span class="sr-only">Open menu</span>
      </button>
    </div>
  </nav>

  <!-- Mobile menu -->
  <div
    data-menu-panel=""
    class="glass-card md:hidden hidden mt-3 overflow-hidden"
  >
    <div class="px-4 py-3 grid gap-2">
      <a href="#work" class="text-sm text-neutral-900 tracking-tight py-1.5">Work</a>
      <a href="#partners" class="text-sm text-neutral-900 tracking-tight py-1.5">Partners</a>
      <a href="#stack" class="text-sm text-neutral-900 tracking-tight py-1.5">Stack</a>
      <a href="#community" class="text-sm text-neutral-900 tracking-tight py-1.5">Community</a>
      <a href="#services" class="text-sm text-neutral-900 tracking-tight py-1.5">Services</a>
      <a href="#contact" class="text-sm text-neutral-900 tracking-tight py-1.5">Contact</a>
    </div>
    <div class="border-t border-neutral-200 px-4 py-3">
      <a
        href="https://cal.com/umbral/discovery-call?overlayCalendar=true"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-neutral-50 bg-neutral-900 hover:bg-neutral-800 border border-neutral-900"
      >
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
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        <span>Schedule</span>
      </a>
    </div>
  </div>
</header>
