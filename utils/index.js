export function resolveBasePath(path = '') {
  // if have http
  if (path.indexOf('http') !== -1) {
    return path
  }
  // if based on server
  return `${basePath()}${path}`
}

export function basePath() {
  if (process.env.GITHUB_ACTIONS) return '/web-project'
  return ''
}
