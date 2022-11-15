/** @type {import('next').NextConfig} */

function basePath() {
  if (process.env.GITHUB_ACTIONS) return '/web-project'
  return ''
}

const BASE_PATH = basePath()
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  ...BASE_PATH,
  basePath: BASE_PATH,
}

module.exports = nextConfig
