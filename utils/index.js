export function resolveBasePath(path) {
    // other checks here
    return `${basePath}${path}`
}

export function basePath() {
    if (process.env.NODE_ENV === "development") return ''
    if (process.env.NETLIFY_ENV) return ''
    if (process.env.GITHUB_ACTIONS) return "/web-project"
    return ''
}


export const BASE_PATH =
    process.env.NODE_ENV === "development" ? "" : "/web-project";
