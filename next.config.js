/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/mediscript' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/mediscript/' : '',
}

module.exports = nextConfig
