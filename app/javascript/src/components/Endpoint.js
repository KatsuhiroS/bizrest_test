const domain = 'http://localhost:3000'

export function subjectShow(slug) {
  return `${domain}/subjects/${slug}`
}

export function apiSubjectIndex() {
  return `${domain}/api/subject`
}

