//@type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizedFonts: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "down-vn.img.susercontent.com",
      },
      {
        protocol: "https",
        hostname: "cf.shopee.vn",
      },
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "scss")],
  },
};

module.exports = nextConfig;
