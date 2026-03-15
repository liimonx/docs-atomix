import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/page-components'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@data': path.resolve(__dirname, './src/data'),
      '@types': path.resolve(__dirname, './src/types'),
      '@styles': path.resolve(__dirname, './src/styles'),
    },
  },
  test: {
    environment: 'node',
    include: [
      'src/utils/__tests__/*.test.ts',
      'src/components/documentation/MarkdownPage.perf.test.tsx',
    ],
    exclude: [
      'node_modules/**',
      'atomix-src/**',
      'out/**',
      '**/*.stories.tsx',
      '**/*.stories.ts',
    ],
  },
});
