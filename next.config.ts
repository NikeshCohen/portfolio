import type { NextConfig } from "next";

import { withContentlayer } from "next-contentlayer2";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {},
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

export default withContentlayer(nextConfig);
