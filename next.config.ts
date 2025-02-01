import nextra from "nextra";
import type { NextConfig } from "next";

const withNextra = nextra({
  // ... Other Nextra config options
});

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

export default withNextra(nextConfig);
