/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  env:{
          GQL_TOKEN: process.env.GQL_TOKEN,
          USER: process.env.USER,
          STYLE: process.env.STYLE,
          REPEAT: process.env.REPEAT,
          BG: process.env.BG,
        }
};

export default nextConfig;
