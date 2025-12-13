import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  return [
    {
      source: '/api/:path*',
      destination: `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1'}/:path*`, // Proxy to Backend
    },
  ]
};


export default nextConfig;
