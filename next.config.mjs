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
      {
        source: "/case-study/hoabl-website-case-study",
        destination: "/case-study/hoabl",
        permanent: true,
      },
      {
        source: "/case-study/lexotique-case-study",
        destination: "/case-study/lexotique",
        permanent: true,
      },
      {
        source: "/case-study/ecovero-case-study",
        destination: "/case-study/ecovero",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
