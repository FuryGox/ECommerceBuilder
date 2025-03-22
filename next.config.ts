import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.lorem.space',
        pathname: '/image/**', 
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/200**', 
      },
    ],
  },
};

export default nextConfig;
