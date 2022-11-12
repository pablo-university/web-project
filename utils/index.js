export function resolveBasePath() {
    if (process.env.NODE_ENV === "development") return ''
    if (process.env.NETLIFY_ENV) return ''
    return "/web-project"
}


export const BASE_PATH =
    process.env.NODE_ENV === "development" ? "" : "/web-project";
