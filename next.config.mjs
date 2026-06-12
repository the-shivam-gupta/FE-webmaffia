/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowLocalIP: process.env.NODE_ENV === "development",
    remotePatterns: [
      // {
      //   protocol: "http",
      //   hostname: "localhost",
      //   port: "1337",
      //   pathname: "/uploads/**",
      // },
      {
        protocol: "https",
        hostname: "cms.webmaffia.com",
        pathname: "/uploads/**",
      },
    ],
  },
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
