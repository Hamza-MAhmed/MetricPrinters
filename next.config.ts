import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'images.unsplash.com',
//         pathname: '/**',
//       },
//     ],
//   },
// }

// export default nextConfig
// /** @type {import('next').NextConfig} */
// const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/MetricPrinters', // Replace with your exact GitHub repo name
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig