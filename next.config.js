/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  // Remove output: 'export' for development, only use for static export builds
  // output: 'export',
  
  transpilePackages: ['@shohojdhara/atomix', '@phosphor-icons/react'],
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    // Note: For static exports (output: 'export'), external images cannot be optimized
    // by Next.js Image component. Consider using a CDN or downloading images locally.
    // For now, keeping unoptimized: true is required for static export with external images.
    unoptimized: false,
    // To enable optimization for local images, set unoptimized: false
    // and ensure images are in the public directory or use a CDN
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  sassOptions: {
    includePaths: ['./src'],
  },
  webpack: (config, { isServer, webpack }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/page-components'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@data': path.resolve(__dirname, './src/data'),
      '@types': path.resolve(__dirname, './src/types'),
      '@styles': path.resolve(__dirname, './src/styles'),
    };

    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, 'node_modules'),
    ];

    // Fix for @phosphor-icons/react with static export
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    // Ensure proper module resolution for ESM packages
    config.resolve.extensionAlias = {
      '.js': ['.js', '.ts', '.tsx'],
      '.jsx': ['.jsx', '.tsx'],
    };

    return config;
  },
  experimental: {
  },
  async redirects() {
    return [
      {
        source: '/components',
        destination: '/docs/components/overview',
        permanent: true,
      },
      {
        source: '/design-tokens',
        destination: '/docs/design-tokens/colors',
        permanent: true,
      },
      {
        source: '/docs/installation',
        destination: '/docs/getting-started/installation',
        permanent: true,
      },
      {
        source: '/docs/quickstart',
        destination: '/docs/getting-started/quick-start',
        permanent: true,
      },
      {
        source: '/docs/theming',
        destination: '/docs/guides/theming',
        permanent: true,
      },
      {
        source: '/docs/getting-started/migration',
        destination: '/docs/introduction',
        permanent: true,
      },
      {
        source: '/docs/components/guidelines',
        destination: '/docs/components/overview',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;