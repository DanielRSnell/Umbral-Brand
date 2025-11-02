/**
 * Syntax Highlighting with Highlight.js
 *
 * Initializes code syntax highlighting for all <pre><code> blocks
 */

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import python from 'highlight.js/lib/languages/python';
import php from 'highlight.js/lib/languages/php';
import css from 'highlight.js/lib/languages/css';
import json from 'highlight.js/lib/languages/json';

// Register languages
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('python', python);
hljs.registerLanguage('php', php);
hljs.registerLanguage('css', css);
hljs.registerLanguage('json', json);

/**
 * Initialize syntax highlighting
 */
export function initSyntaxHighlight() {
  // Find all code blocks
  const codeBlocks = document.querySelectorAll('pre code');

  if (codeBlocks.length === 0) {
    return;
  }

  // Highlight each code block
  codeBlocks.forEach((block) => {
    hljs.highlightElement(block);
  });

  console.log(`Highlighted ${codeBlocks.length} code block(s)`);
}
