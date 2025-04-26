const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withPWA = require('next-pwa')({
  dest: 'public',
});

module.exports = withPlugins(
  [
    withBundleAnalyzer,
    withPWA,
  ],
  {
    reactStrictMode: true,
    images: {
      domains: ['example.com'],
    },
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            {
              key: 'X-XSS-Protection',
              value: '1; mode=block',
            },
          ],
        },
      ];
    },
    async rewrites() {
      return [
        {
          source: '/sitemap.xml',
          destination: '/api/sitemap',
        },
      ];
    },
  }
);
