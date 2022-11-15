export function resolveBasePath(path) {
  // other checks here
  if (path.indexOf('http') !== -1) {
    return path
  }
  // ---
  return `${basePath()}${path}`
}

export function basePath() {
  if (process.env.GITHUB_ACTIONS) return '/web-project'
  return ''
}
