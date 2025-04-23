import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "clanap.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
