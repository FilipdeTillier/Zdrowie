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
      "@images": path.resolve(__dirname, "images"),
    };

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    domains: ["via.placeholder.com"],
  },
};

module.exports = nextConfig;
