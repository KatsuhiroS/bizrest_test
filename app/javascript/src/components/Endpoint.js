const domain = 'http://localhost:3000'

export function subjectShow(slug) {
  return `${domain}/subjects/${slug}`
}

export function apiSubjectIndex() {
  return `${domain}/api/subjects`
}

export function subjectLessonIndex(subjectSlug) {
  return `${domain}/subjects/${subjectSlug}`
}

export function apiLessonIndex(subjectSlug) {
  return `${domain}/api/subjects/${subjectSlug}/lessons`
}
