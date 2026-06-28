import { describe, it, expect } from 'vitest';
import nextConfig from '../../../next.config.js';

describe('next.config.js', () => {
  it('should have security headers configured', async () => {
    expect(typeof nextConfig.headers).toBe('function');

    const headersList = await nextConfig.headers();
    const globalHeaders = headersList.find((h: { source: string }) => h.source === '/(.*)');
    expect(globalHeaders).toBeDefined();

    if (!globalHeaders) {
      throw new Error('Global headers not found');
    }

    const headers = globalHeaders.headers;
    const findHeader = (key: string) => headers.find((h: { key: string; value: string }) => h.key === key);

    expect(findHeader('X-DNS-Prefetch-Control')?.value).toBe('on');
    expect(findHeader('Strict-Transport-Security')?.value).toContain('max-age=63072000');
    expect(findHeader('X-Frame-Options')?.value).toBe('SAMEORIGIN');
    expect(findHeader('X-Content-Type-Options')?.value).toBe('nosniff');
    expect(findHeader('Referrer-Policy')?.value).toBe('origin-when-cross-origin');

    const permissionsPolicy = findHeader('Permissions-Policy')?.value;
    expect(permissionsPolicy).toContain('camera=()');
    expect(permissionsPolicy).toContain('microphone=()');
    expect(permissionsPolicy).toContain('geolocation=()');

    const csp = findHeader('Content-Security-Policy')?.value;
    expect(csp).toContain("default-src 'self'");
    expect(csp).toContain('https://fonts.googleapis.com');
    expect(csp).toContain('https://fonts.gstatic.com');
  });

  it('should redirect legacy og-image.png to opengraph-image', async () => {
    expect(typeof nextConfig.redirects).toBe('function');
    const redirects = await nextConfig.redirects();
    const ogRedirect = redirects.find(
      (r: { source: string; destination: string }) => r.source === '/og-image.png',
    );
    expect(ogRedirect?.destination).toBe('/opengraph-image');
    expect(ogRedirect?.permanent).toBe(true);
  });
});
