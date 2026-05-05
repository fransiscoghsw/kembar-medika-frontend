import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://103.193.179.64/api/:path*",
      },
    ];
  },
};

export default nextConfig;