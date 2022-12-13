const path = require("node:path");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@styles": path.resolve(__dirname, "styles"),
      "@common": path.resolve(__dirname, "common"),
      "@features": path.resolve(__dirname, "features"),
    };

    return config;
  },
  images: {
    domains: ["via.placeholder.com"],
  },
};

module.exports = nextConfig;
