/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "img.shields.io"
    ]
  },
  env: {
    GITHUB_APIKEY: process.env.GITHUB_APIKEY
  }
}

module.exports = nextConfig
