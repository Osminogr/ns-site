import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Режим standalone для Docker
  output: 'standalone',
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
