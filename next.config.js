/** @type {import('next').NextConfig} */


function resolveBasePath() {
    if (process.env.NODE_ENV === "development") return ''
    if (process.env.NETLIFY_ENV) return ''
    return "/web-project"
}

const BASE_PATH = resolveBasePath();
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    ...BASE_PATH,
    basePath: BASE_PATH
};

module.exports = nextConfig;
