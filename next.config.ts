import os from "node:os";
import path from "node:path";
import type { NextConfig } from "next";

function localDevOrigins(): string[] {
  const hosts = new Set<string>();
  const hostname = os.hostname();
  if (hostname) {
    hosts.add(hostname);
    hosts.add(`${hostname}.local`);
  }
  for (const addrs of Object.values(os.networkInterfaces())) {
    for (const addr of addrs ?? []) {
      if (addr.internal) continue;
      const family = String(addr.family);
      if (family === "IPv4" || family === "4") hosts.add(addr.address);
    }
  }
  return [...hosts];
}

const nextConfig: NextConfig = {
  allowedDevOrigins: localDevOrigins(),
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
