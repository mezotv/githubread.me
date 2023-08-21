/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.react-fast-marquee.com',
          },
          {
            protocol: 'https',
            hostname: 'imgur.com',
          },
        ],
      },
}

module.exports = nextConfig
