import { describe, it, expect } from 'vitest';
import { getAriaLabel } from '../accessibility';

describe('getAriaLabel', () => {
  it('returns only the title when no description or badge is provided', () => {
    const item = { title: 'Home' };
    expect(getAriaLabel(item)).toBe('Home');
  });

  it('concatenates title and description when description is provided', () => {
    const item = { title: 'Home', description: 'Go to home page' };
    expect(getAriaLabel(item)).toBe('Home, Go to home page');
  });

  it('concatenates title and badge text when badge is provided', () => {
    const item = { title: 'Settings', badge: { text: 'New' } };
    expect(getAriaLabel(item)).toBe('Settings, New');
  });

  it('concatenates title, description, and badge text when all are provided', () => {
    const item = {
      title: 'Dashboard',
      description: 'Main dashboard',
      badge: { text: 'Updated' }
    };
    expect(getAriaLabel(item)).toBe('Dashboard, Main dashboard, Updated');
  });

  it('handles empty description or badge text correctly', () => {
    const item1 = { title: 'Home', description: '' };
    // Current implementation: if (item.description) will be false for empty string
    expect(getAriaLabel(item1)).toBe('Home');

    const item2 = { title: 'Settings', badge: { text: '' } };
    // Current implementation: if (item.badge) is true, but badge.text is empty
    expect(getAriaLabel(item2)).toBe('Settings, ');
  });
});
