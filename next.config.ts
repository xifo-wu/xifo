import nextra from "nextra";
import type { NextConfig } from "next";

const withNextra = nextra({
  // ... Other Nextra config options
});

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.githubusercontent.com",
      },
    ],
  },
};

export default withNextra(nextConfig);
