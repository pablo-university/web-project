/** @type {import('next').NextConfig} */

function basePath() {
  if (process.env.NODE_ENV === 'development') return ''
  if (process.env.NETLIFY_ENV) return ''
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
