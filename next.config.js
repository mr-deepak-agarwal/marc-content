/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'marc-content.vercel.app',
      },
    ],
    // Allow local images
    unoptimized: false,
  },
}

module.exports = nextConfig