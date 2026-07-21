import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isGithubActions ? '/usc-sai-youth' : '',
  assetPrefix: isGithubActions ? '/usc-sai-youth/' : '',
};

export default nextConfig;