/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  // Remove output: 'export' for development, only use for static export builds
  // output: 'export',
  
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Configure scroll behavior
  experimental: {
    scrollRestoration: true,
    // Enable optimized package imports
    optimizePackageImports: ['@shohojdhara/atomix', '@phosphor-icons/react'],
  },
  
  // Turbopack configuration (empty to silence warning)
  turbopack: {},
  
  // Transpile packages that need to be processed by Next.js
  transpilePackages: ['@shohojdhara/atomix', '@phosphor-icons/react'],
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // Image optimization configuration
  images: {
    // Note: For static exports (output: 'export'), external images cannot be optimized
    // by Next.js Image component. Consider using a CDN or downloading images locally.
    // For now, keeping unoptimized: false enables optimization for local images
    unoptimized: false,
    // Remote image patterns for external image optimization
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // Image formats to optimize
    formats: ['image/avif', 'image/webp'],
  },
  
  // Sass/SCSS configuration
  sassOptions: {
    includePaths: ['./src'],
  },
  
  // Webpack configuration
  webpack: (config, { isServer, webpack }) => {
    // Path aliases for cleaner imports
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

    // Module resolution paths
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, 'node_modules'),
    ];

    // Fix for packages that use Node.js modules in client-side code
    // The atomix package includes Node.js code (fs, path) that shouldn't run in the browser
    // Setting these to false tells webpack to ignore these modules in client bundles
    if (!isServer) {
      config.resolve.fallback = {
        ...(config.resolve.fallback || {}),
        fs: false,
        path: false,
        os: false,
        crypto: false,
        stream: false,
        util: false,
        buffer: false,
        process: false,
      };

      // Ignore require() calls for Node.js modules in the atomix package
      // This prevents webpack from trying to resolve these modules
      config.plugins.push(
        new webpack.IgnorePlugin({
          resourceRegExp: /^(fs|path|os|crypto|stream|util|buffer|process)$/,
          contextRegExp: /node_modules\/@shohojdhara\/atomix/,
        })
      );
    }

    // Ensure proper module resolution for ESM packages
    config.resolve.extensionAlias = {
      '.js': ['.js', '.ts', '.tsx'],
      '.jsx': ['.jsx', '.tsx'],
    };

    return config;
  },
  
  // URL redirects
  // async redirects() {
  //   return [
  //     {
  //       source: '/components',
  //       destination: '/docs/components/overview',
  //       permanent: true,
  //     },
  //     {
  //       source: '/design-tokens',
  //       destination: '/docs/design-tokens/colors',
  //       permanent: true,
  //     },
  //     {
  //       source: '/docs/installation',
  //       destination: '/docs/getting-started/installation',
  //       permanent: true,
  //     },
  //     {
  //       source: '/docs/quickstart',
  //       destination: '/docs/getting-started/quick-start',
  //       permanent: true,
  //     },
  //     {
  //       source: '/docs/theming',
  //       destination: '/docs/guides/theming',
  //       permanent: true,
  //     },
  //     {
  //       source: '/docs/components/guidelines',
  //       destination: '/docs/components/overview',
  //       permanent: true,
  //     },
  //   ];
  // },
  
  // Compiler options
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
};

module.exports = nextConfig;