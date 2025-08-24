import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* opções de configuração aqui */
  env: {
    PORT: '3001'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  }
};

export default nextConfig;
