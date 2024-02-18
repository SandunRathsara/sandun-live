/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        port: '',
        pathname: '/dms/image/D5603AQGBCIQqwg4HrA/profile-displayphoto-shrink_200_200/**',
      },
    ],
  },
};

export default nextConfig;
