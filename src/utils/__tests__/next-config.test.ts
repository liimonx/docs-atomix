import { describe, it, expect } from 'vitest';
import nextConfig from '../../../next.config.js';

describe('next.config.js', () => {
  it('should have security headers configured', async () => {
    // Check if headers function exists
    expect(typeof nextConfig.headers).toBe('function');

    // Get the headers
    const headersList = await nextConfig.headers();

    // Find the headers for all routes
    const globalHeaders = headersList.find((h: any) => h.source === '/(.*)');
    expect(globalHeaders).toBeDefined();

    if (!globalHeaders) {
      throw new Error('Global headers not found');
    }

    const headers = globalHeaders.headers;

    // Helper to find a specific header
    const findHeader = (key: string) => headers.find((h: any) => h.key === key);

    // Verify specific security headers
    expect(findHeader('X-DNS-Prefetch-Control')?.value).toBe('on');
    expect(findHeader('Strict-Transport-Security')?.value).toContain('max-age=63072000');
    expect(findHeader('X-Frame-Options')?.value).toBe('SAMEORIGIN');
    expect(findHeader('X-Content-Type-Options')?.value).toBe('nosniff');
    expect(findHeader('Referrer-Policy')?.value).toBe('origin-when-cross-origin');

    // Check Permissions-Policy contains important directives
    const permissionsPolicy = findHeader('Permissions-Policy')?.value;
    expect(permissionsPolicy).toContain('camera=()');
    expect(permissionsPolicy).toContain('microphone=()');
    expect(permissionsPolicy).toContain('geolocation=()');
  });
});
