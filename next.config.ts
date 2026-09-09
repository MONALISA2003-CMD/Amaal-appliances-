import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Remote catalogue images are rendered directly in the browser. This avoids the Next.js 50-pattern ceiling while preserving all researched image URLs.
    unoptimized: true,
    // The catalogue uses many independently researched retailer/manufacturer image hosts.
    // A single HTTPS wildcard keeps next/image compatible without exceeding Next.js's
    // 50-entry remotePatterns limit.
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
    ],
  },
};

export default nextConfig;
