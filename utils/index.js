export function resolveBasePath(path) {
  // other checks here
  return `${basePath()}${path}`
}

export function basePath() {
  if (process.env.GITHUB_ACTIONS) return '/web-project'
  return ''
}
