/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        pathname: '/image*'
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/**'
      }
    ]
  },
}

module.exports = nextConfig
