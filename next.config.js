/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.mallconomy.com'],
  },
  env: {
    DOMAIN: process.env.NEXT_PUBLIC_DOMAIN
  }
}

module.exports = nextConfig 