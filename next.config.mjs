/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bucketforrezqorazeq.storage.c2.liara.space',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'storebucet.storage.c2.liara.space', // Temporarily add this
        port: '',
        pathname: '/**',
      },
    ],
  },

};

export default nextConfig;
