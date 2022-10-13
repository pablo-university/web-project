import { BASE_PATH } from "utils";
/** @type {import('next').NextConfig} */
const BASE_PATH =   process.env.NODE_ENV === 'development' ? {} : {
  basePath: BASE_PATH,
}
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  ...BASE_PATH
}

module.exports = nextConfig
