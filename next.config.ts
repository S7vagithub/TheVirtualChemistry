import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow your network IP to access the dev server
  allowedDevOrigins: ["172.27.120.196"],
};

export default nextConfig;
