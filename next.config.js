/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ["images.unsplash.com", "s3.us-west-2.amazonaws.com"] },

  compiler: {
    styledComponents: true,
  },
  env: {
    MUSIVE_API_URL: process.env.MUSIVE_API_URL,
    ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
    ALGOLIA_API_KEY: process.env.ALGOLIA_API_KEY,
  },
};

module.exports = nextConfig;
