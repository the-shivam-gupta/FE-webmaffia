/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/work",
        destination: "/case-study",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
