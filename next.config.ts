import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [{ source: "/restaurant", destination: "/dining", permanent: true }];
  },
};

export default nextConfig;
