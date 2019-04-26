Subject.create(
  title: '会計',
  explanation: '世界で一番わかりやすい会計の教材です',
  image: '',
  slug: 'accounting',
  order: 1
)

# 上のSubjectのデータがid:1にならないとデータ作られないので注意
Lesson.create(
  name: '会計入門',
  subject_id: 1
)
