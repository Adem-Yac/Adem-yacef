import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    localPatterns: [
      { pathname: "/projects/**" },
      { pathname: "/**" },
    ],
  },
};

export default nextConfig;
