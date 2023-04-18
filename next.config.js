/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
    domains: [
      "img.shields.io",
      "avatars.githubusercontent.com"
    ]
  },
  env: {
    GITHUB_APIKEY: process.env.GITHUB_APIKEY
  }
}

module.exports = nextConfig
