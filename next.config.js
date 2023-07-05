/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
      {
        source: "/nextjs",
        destination: "/nextjs/home",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
