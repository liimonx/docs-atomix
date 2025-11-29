// Accessibility Utilities
// =============================================================================

/**
 * Generate ARIA label for navigation items
 */
export function getAriaLabel(item: {
  title: string;
  description?: string;
  badge?: { text: string };
}): string {
  let label = item.title;
  
  if (item.description) {
    label += `, ${item.description}`;
  }
  
  if (item.badge) {
    label += `, ${item.badge.text}`;
  }
  
  return label;
}

/**
 * Generate ARIA current attribute value
 */
export function getAriaCurrent(isActive: boolean): 'page' | undefined {
  return isActive ? 'page' : undefined;
}

/**
 * Generate unique ID for accessibility
 * Note: This function should only be used in client components.
 * For SSR-safe ID generation, use React's useId hook instead.
 */
export function generateId(prefix: string, index?: number): string {
  // Use index-based ID if provided (deterministic)
  if (index !== undefined) {
    return `${prefix}-${index}`;
  }
  
  // For non-indexed IDs, use a timestamp-based approach that's more stable
  // but still unique. This is better than Math.random() for SSR scenarios.
  // However, React's useId hook is still preferred for SSR-safe IDs.
  if (typeof window !== 'undefined') {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
  }
  
  // Server-side: use a deterministic fallback
  // This is not ideal but prevents hydration mismatches
  return `${prefix}-ssr-${Date.now().toString(36)}`;
}

/**
 * Check if reduced motion is preferred
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Check if high contrast is preferred
 */
export function prefersHighContrast(): boolean {
  if (typeof window === 'undefined') return false;
  
  return window.matchMedia('(prefers-contrast: high)').matches;
}

/**
 * Get keyboard navigation handler
 */
export function handleKeyboardNavigation(
  event: KeyboardEvent | { key: string; preventDefault: () => void },
  onEnter?: () => void,
  onEscape?: () => void,
  onArrowUp?: () => void,
  onArrowDown?: () => void
): void {
  switch (event.key) {
    case 'Enter':
    case ' ':
      event.preventDefault();
      onEnter?.();
      break;
    case 'Escape':
      onEscape?.();
      break;
    case 'ArrowUp':
      event.preventDefault();
      onArrowUp?.();
      break;
    case 'ArrowDown':
      event.preventDefault();
      onArrowDown?.();
      break;
  }
}

/**
 * Focus trap utility
 */
export function trapFocus(element: HTMLElement): () => void {
  const focusableElements = element.querySelectorAll(
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );
  
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    }
  };

  element.addEventListener('keydown', handleTabKey);
  firstElement?.focus();

  return () => {
    element.removeEventListener('keydown', handleTabKey);
  };
}

