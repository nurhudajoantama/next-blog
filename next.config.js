/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    ROOT_URL: process.env.ROOT_URL,
  },
};

module.exports = nextConfig;
