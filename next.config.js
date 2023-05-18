/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // do not use "https://""
    domains: ["media.licdn.com"]
  }
}

module.exports = nextConfig
