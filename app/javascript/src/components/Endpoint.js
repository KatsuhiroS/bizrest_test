const domain = 'http://localhost:3000'

export function apiSubjectsIndex() {
  return `${domain}/api/subjects`
}

export function subjectsShow(slug) {
  return `${domain}/subjects/${slug}`
}

export function subjectLessonIndex(subjectSlug) {
  return `${domain}/subjects/${subjectSlug}`
}

export function apiLessonsIndex(subjectSlug) {
  return `${domain}/api/subjects/${subjectSlug}`
}