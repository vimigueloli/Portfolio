/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
          GQL_TOKEN: process.env.GQL_TOKEN,
          USER: process.env.USER,
        }
};

export default nextConfig;
