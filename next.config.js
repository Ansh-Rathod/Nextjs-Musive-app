/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ["images.unsplash.com"] },

  compiler: {
    styledComponents: true,
  },
  env: {
    MUSIVE_API_URL: process.env.MUSIVE_API_URL,
  },
};

module.exports = nextConfig;
