import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd()
  },
  images: {
    qualities: [50, 75, 90]
  }
};

export default nextConfig;
