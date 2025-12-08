/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['irbkvjomakcxeyodvoz.supabase.co'],
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
