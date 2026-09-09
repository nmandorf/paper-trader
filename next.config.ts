import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This starter is independent of the Yarn project in its parent directory.
  turbopack: { root: __dirname },
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
