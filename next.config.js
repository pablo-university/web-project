/** @type {import('next').NextConfig} */
console.log();
const BASE_PATH =   process.env.NODE_ENV === 'development' ? {} : {
  basePath: '/web-project',
}
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  ...BASE_PATH
}

module.exports = nextConfig
