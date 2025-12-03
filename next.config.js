/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/aianabuilders' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/aianabuilders' : '',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig

