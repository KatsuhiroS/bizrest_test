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
  subject_id: 1,
  order: 1
)

Chapter.create(
  title: '会計入門1',
  lesson_id: 1,
  order: 1
)

Chapter.create(
  title: '会計入門2',
  lesson_id: 1,
  order: 2
)

Chapter.create(
  title: '会計入門3',
  lesson_id: 1,
  order: 3
)

Chapter.create(
  title: '会計入門4',
  lesson_id: 1,
  order: 4
)

Chapter.create(
  title: '会計入門5',
  lesson_id: 1,
  order: 5
)

Chapter.create(
  title: '会計入門6',
  lesson_id: 1,
  order: 6
)

Chapter.create(
  title: '会計入門7',
  lesson_id: 1,
  order: 7
)

Chapter.create(
  title: '会計入門8',
  lesson_id: 1,
  order: 8
)

Chapter.create(
  title: '会計入門9',
  lesson_id: 1,
  order: 9
)

Chapter.create(
  title: '会計入門10',
  lesson_id: 1,
  order: 10
)

Chapter.create(
  title: '会計入門11',
  lesson_id: 1,
  order: 11
)

Chapter.create(
  title: '会計入門12',
  lesson_id: 1,
  order: 12
)

Instruction.create(
  text: '「財産・もうけを記録して報告する一連の流れ」を意味する言葉を、選択肢から選んでください',
  chapter_id: 1,
)

Instruction.create(
  text: '「財務三表」を意味する書類はどれか、選択肢の中から3つ選んでください',
  chapter_id: 2,
)

Instruction.create(
  text: '貸借対照表の左側と右側を意味する言葉を、選択肢から選んでください',
  chapter_id: 3,
)

Instruction.create(
  text: '「1年以内に現金になるイメージ」に紐づく言葉を、選択肢から選んでください',
  chapter_id: 4,
)

Instruction.create(
  text: '「調達した資金のうち返済義務のないもの」に紐づく言葉を、選択肢から選んでください',
  chapter_id: 5,
)

Instruction.create(
  text: '「返済日が期末日から1年超の負債」に紐づく言葉を、選択肢から選んでください',
  chapter_id: 6,
)

Instruction.create(
  text: '選択肢の勘定を、適切なグループに分類してください',
  chapter_id: 7,
)

Instruction.create(
  text: '「収益から費用を引いたとき、プラスになるときの金額」に紐づく言葉を、選択肢から選んでください',
  chapter_id: 8,
)

Instruction.create(
  text: '損益計算書の左側と右側を意味する言葉を、選択肢から選んでください',
  chapter_id: 9,
)

Instruction.create(
  text: '売上高から売上原価と販売費及び一般管理費を引いた利益を、選択肢から選んでください',
  chapter_id: 10,
)

Instruction.create(
  text: '「毎期行われる取引から発生する利益」に紐づく言葉を、選択肢から選んでください',
  chapter_id: 11,
)

Instruction.create(
  text: '「全ての取引を含んだ最終的な利益」に紐づく言葉を、選択肢から選んでください',
  chapter_id: 12,
)

AnswerChoice.create(
  name: '簿記',
  item_type: 'accountTitle',
  chapter_id: 1,
)

AnswerChoice.create(
  name: '予算',
  item_type: 'accountTitle',
  chapter_id: 1,
)

AnswerChoice.create(
  name: '会計',
  item_type: 'accountTitle',
  chapter_id: 1,
)

AnswerChoice.create(
  name: '経営',
  item_type: 'accountTitle',
  chapter_id: 1,
)

AnswerChoice.create(
  name: '貸借対照表',
  item_type: 'accountTitle',
  chapter_id: 2,
)

AnswerChoice.create(
  name: '貸借計算書',
  item_type: 'accountTitle',
  chapter_id: 2,
)

AnswerChoice.create(
  name: '損益計算書',
  item_type: 'accountTitle',
  chapter_id: 2,
)

AnswerChoice.create(
  name: '株主資本等変動計算書',
  item_type: 'accountTitle',
  chapter_id: 2,
)

AnswerChoice.create(
  name: '貸借対照表',
  item_type: 'accountTitle',
  chapter_id: 2,
)

AnswerChoice.create(
  name: '損益決算表',
  item_type: 'accountTitle',
  chapter_id: 2,
)

AnswerChoice.create(
  name: 'キャッシュ・フロー計算書',
  item_type: 'accountTitle',
  chapter_id: 2,
)

AnswerChoice.create(
  name: '貸方',
  item_type: 'accountTitle',
  chapter_id: 3,
)

AnswerChoice.create(
  name: '借方',
  item_type: 'accountTitle',
  chapter_id: 3,
)

AnswerChoice.create(
  name: '固定資産',
  item_type: 'accountTitle',
  chapter_id: 4,
)

AnswerChoice.create(
  name: '純資産',
  item_type: 'accountTitle',
  chapter_id: 4,
)

AnswerChoice.create(
  name: '流動資産',
  item_type: 'accountTitle',
  chapter_id: 4,
)

AnswerChoice.create(
  name: '資産',
  item_type: 'accountTitle',
  chapter_id: 5,
)

AnswerChoice.create(
  name: '負債',
  item_type: 'accountTitle',
  chapter_id: 5,
)

AnswerChoice.create(
  name: '純資産',
  item_type: 'accountTitle',
  chapter_id: 5,
)

AnswerChoice.create(
  name: '流動資産',
  item_type: 'accountTitle',
  chapter_id: 6,
)

AnswerChoice.create(
  name: '固定負債',
  item_type: 'accountTitle',
  chapter_id: 6,
)

AnswerChoice.create(
  name: '純資産',
  item_type: 'accountTitle',
  chapter_id: 6,
)

AnswerChoice.create(
  name: '建物',
  item_type: 'accountTitle',
  chapter_id: 7,
)

AnswerChoice.create(
  name: '資本金',
  item_type: 'accountTitle',
  chapter_id: 7,
)

AnswerChoice.create(
  name: '借入金',
  item_type: 'accountTitle',
  chapter_id: 7,
)

AnswerChoice.create(
  name: '収入',
  item_type: 'accountTitle',
  chapter_id: 8,
)

AnswerChoice.create(
  name: '利益',
  item_type: 'accountTitle',
  chapter_id: 8,
)

AnswerChoice.create(
  name: '損失',
  item_type: 'accountTitle',
  chapter_id: 8,
)

AnswerChoice.create(
  name: '支出',
  item_type: 'accountTitle',
  chapter_id: 8,
)

AnswerChoice.create(
  name: '貸方',
  item_type: 'accountTitle',
  chapter_id: 9,
)

AnswerChoice.create(
  name: '借方',
  item_type: 'accountTitle',
  chapter_id: 9,
)

AnswerChoice.create(
  name: '経常利益',
  item_type: 'accountTitle',
  chapter_id: 10,
)

AnswerChoice.create(
  name: '売上総利益',
  item_type: 'accountTitle',
  chapter_id: 10,
)

AnswerChoice.create(
  name: '営業利益',
  item_type: 'accountTitle',
  chapter_id: 10,
)

AnswerChoice.create(
  name: '売上総利益',
  item_type: 'accountTitle',
  chapter_id: 11,
)

AnswerChoice.create(
  name: '経常利益',
  item_type: 'accountTitle',
  chapter_id: 11,
)

AnswerChoice.create(
  name: '営業利益',
  item_type: 'accountTitle',
  chapter_id: 11,
)

AnswerChoice.create(
  name: '当期純利益',
  item_type: 'accountTitle',
  chapter_id: 12,
)

AnswerChoice.create(
  name: '経常利益',
  item_type: 'accountTitle',
  chapter_id: 12,
)

AnswerChoice.create(
  name: '営業利益',
  item_type: 'accountTitle',
  chapter_id: 12,
)

AnswerColumn.create(
  order: 1,
  chapter_id: 1,
)

AnswerColumn.create(
  order: 1,
  chapter_id: 2,
)

AnswerColumn.create(
  order: 2,
  chapter_id: 2,
)

AnswerColumn.create(
  order: 3,
  chapter_id: 2,
)

AnswerSpace.create(
  category: '5分類以外',
  answer_column_id: 1,
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 1,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.000.jpeg',
  order: 1
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 1,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.001.jpeg',
  order: 2
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 1,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.002.jpeg',
  order: 3
)

Slide.create(
  title: '会計とは',
  content: '会計とは「財産・もうけを記録して報告」という一連の流れのことをいいます。',
  chapter_id: 1,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.003.jpeg',
  order: 4
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 1,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.004.jpeg',
  order: 5
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 1,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.005.jpeg',
  order: 6
)

Slide.create(
  title: '財産・もうけのイメージ',
  content: '財産・もうけとは以下のようなイメージです。',
  chapter_id: 1,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.006.jpeg',
  order: 7
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 1,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.007.jpeg',
  order: 8
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 1,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.008.jpeg',
  order: 9
)

Slide.create(
  title: '報告とは',
  content: '会計でいう報告とは、他の人にも正確に伝わるように活動の状況を数値で表すことをいいます。',
  chapter_id: 1,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.009.jpeg',
  order: 10
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 1,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.010.jpeg',
  order: 11
)

Slide.create(
  title: '会計期間とは',
  content: '財産・もうけの情報を１年ごとに区切って数値化したとき、この区切られた１年のことを会計期間といいます。',
  chapter_id: 1,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.011.jpeg',
  order: 12
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 1,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.012.jpeg',
  order: 13
)

Slide.create(
  title: '決算書とは',
  content: '決算書とは、会計期間ごとに、財産・もうけを記録した書類のことをいいます。',
  chapter_id: 1,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.013.jpeg',
  order: 14
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 1,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.014.jpeg',
  order: 15
)

Slide.create(
  title: '簿記とは',
  content: '簿記とは、財産・もうけを記録する方法のことをいいます。',
  chapter_id: 1,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.015.jpeg',
  order: 16
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 1,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.016.jpeg',
  order: 17
)

Slide.create(
  title: '記録する方法とは',
  content: '記録する方法とは、財産・もうけを記録するときのノートの取り方というイメージです。',
  chapter_id: 1,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.017.jpeg',
  order: 18
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 1,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.018.jpeg',
  order: 19
)

Slide.create(
  title: '会計と簿記の関係',
  content: '簿記は、会計の一部というイメージです。',
  chapter_id: 1,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.019.jpeg',
  order: 20
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 2,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.020.jpeg',
  order: 21
)

Slide.create(
  title: '簿記で記録した結果作られるのが決算書',
  content: '簿記によって記録した結果として決算書が作られます。',
  chapter_id: 2,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.021.jpeg',
  order: 22
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 2,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.022.jpeg',
  order: 23
)

Slide.create(
  title: '決算書とは',
  content: '決算書は正式には財務諸表といい、財務諸表のうち代表的な３つの書類を財務三表といいます。',
  chapter_id: 2,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.023.jpeg',
  order: 24
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 2,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.024.jpeg',
  order: 25
)

Slide.create(
  title: '財務三表とは',
  content: '財務三表とは貸借対照表、損益計算書、キャッシュ・フロー計算書の３つの書類のことをいいます。',
  chapter_id: 2,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.025.jpeg',
  order: 26
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 3,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.026.jpeg',
  order: 27
)

Slide.create(
  title: '貸借対照表とは',
  content: '貸借対照表は、期末日時点の財政状態を表す書類のことをいいます。',
  chapter_id: 3,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.027.jpeg',
  order: 28
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 3,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.028.jpeg',
  order: 29
)

Slide.create(
  title: '貸借対照表を図解化',
  content: '実物の貸借対照表はシンプルに図解化することができます。',
  chapter_id: 3,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.029.jpeg',
  order: 30
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 3,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.030.jpeg',
  order: 31
)

Slide.create(
  title: '貸借対照表は借方と貸方に分かれる',
  content: '貸借対照表は左右の２つ分かれ、左側を「借方」、右側を「貸方」といいます。',
  chapter_id: 3,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.031.jpeg',
  order: 32
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 3,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.032.jpeg',
  order: 33
)

Slide.create(
  title: '貸借対照表の借方と貸方を覚えるコツ',
  content: '「かりかた」は「り」の書きおわりが左の方向だから左側、「かしかた」は「し」の書きおわりが右の方向だから右側と覚えます。',
  chapter_id: 3,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.033.jpeg',
  order: 34
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 4,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.034.jpeg',
  order: 35
)

Slide.create(
  title: '貸借対照表は借方は資金の運用形態',
  content: '貸借対照表の借方は「どんな財産（勘定科目）」で資金を運用しているか。つまり資金の運用形態を表しています。',
  chapter_id: 4,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.035.jpeg',
  order: 36
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 4,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.036.jpeg',
  order: 37
)

Slide.create(
  title: '貸借対照表の借方は流動資産と固定資産に分類',
  content: '貸借対照表の借方は、運用している財産を現金化までの期間で「流動資産」「固定資産」に分類されます。',
  chapter_id: 4,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.037.jpeg',
  order: 38
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 5,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.038.jpeg',
  order: 39
)

Slide.create(
  title: '貸借対照表の貸方は資金の調達源泉',
  content: '貸借対照表の貸方は「どんな方法」で資金を調達したか。つまり資金の「調達源泉」を表しています。',
  chapter_id: 5,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.039.jpeg',
  order: 40
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 5,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.040.jpeg',
  order: 41
)

Slide.create(
  title: '貸借対照表の貸方は負債と純資産に分類',
  content: '調達した資金のうち、返済義務のあるものが「負債」、ないものが「純資産」に分類されます。',
  chapter_id: 5,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.041.jpeg',
  order: 42
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 6,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.042.jpeg',
  order: 43
)

Slide.create(
  title: '負債は流動負債と固定負債に分類',
  content: '貸借対照表の貸方の負債は、調達した資金の返済日までの期間で「流動負債」「固定負債」に分類されます。',
  chapter_id: 6,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.043.jpeg',
  order: 44
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 7,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.044.jpeg',
  order: 45
)

Slide.create(
  title: '貸借対照表の純資産は会社の元手や今までのもうけ分',
  content: '純資産には返済義務のない会社の元手や今までのもうけ分などが含まれます。',
  chapter_id: 7,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.045.jpeg',
  order: 46
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 7,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.046.jpeg',
  order: 47
)

Slide.create(
  title: '貸借対照表は「資産 ー 負債 ＝ 純資産」',
  content: 'B/Sは「資産 ー 負債 ＝ 純資産」になり、借方の合計額と貸方の合計額は一致します。',
  chapter_id: 7,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.047.jpeg',
  order: 48
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 7,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.048.jpeg',
  order: 49
)

Slide.create(
  title: '貸借対照表まとめ',
  content: 'B/Sは、貸方の「負債・純資産で資金を調達し、借方の資産でその資金を運用しているイメージです。',
  chapter_id: 7,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.049.jpeg',
  order: 50
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 8,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.050.jpeg',
  order: 51
)

Slide.create(
  title: '損益計算書とは',
  content: '損益計算書は、会計期間の経営成績を表す書類のことをいいます。',
  chapter_id: 8,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.051.jpeg',
  order: 52
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 8,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.052.jpeg',
  order: 53
)

Slide.create(
  title: '損益計算書を図解化',
  content: '実物の損益計算書は図解化することができます。',
  chapter_id: 8,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.053.jpeg',
  order: 54
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 8,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.054.jpeg',
  order: 55
)

Slide.create(
  title: '収益・費用とは',
  content: '図解をさらに簡略化すると収益・費用・利益に分類でき、収益は稼いだ金額、費用は稼ぐためにかかった金額のことをいいます。',
  chapter_id: 8,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.055.jpeg',
  order: 56
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 8,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.056.jpeg',
  order: 57
)

Slide.create(
  title: 'プラスは利益・マイナスは損失',
  content: '収益から費用を引いた金額がプラスのときは利益、マイナスのときは損失といいます。',
  chapter_id: 8,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.057.jpeg',
  order: 58
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 9,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.058.jpeg',
  order: 59
)

Slide.create(
  title: '損益計算書は借方と貸方に分かれる',
  content: '損益計算書は左右の２つ分かれ、左側を「借方」、右側を「貸方」といいます。左側が「借方」、右側が「貸方」というのはB/Sと同じです。',
  chapter_id: 9,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.059.jpeg',
  order: 60
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 10,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.060.jpeg',
  order: 61
)

Slide.create(
  title: '損益計算書は借方には「費用」、貸方には「収益」',
  content: '損益計算書の借方には「費用」、貸方には「収益」の項目が入ります。',
  chapter_id: 10,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.061.jpeg',
  order: 62
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 10,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.062.jpeg',
  order: 63
)

Slide.create(
  title: '売上総利益とは',
  content: '売上総利益は売上高から売上原価を引いた金額をいいます。売上総利益は「粗利（あらり）」ともよばれ、商品の売上による利益を表します。',
  chapter_id: 10,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.063.jpeg',
  order: 64
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 10,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.064.jpeg',
  order: 65
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 10,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.065.jpeg',
  order: 66
)

Slide.create(
  title: '販管費・営業利益とは',
  content: '販売費及び一般管理費は「販管費」と呼ばれことが多く、商品を販売するために間接的に発生する費用のことをいいます。営業利益は、売上総利益から販管費を引いた金額をいい、会社の本業による利益を表します。',
  chapter_id: 10,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.066.jpeg',
  order: 67
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 11,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.067.jpeg',
  order: 68
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 11,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.068.jpeg',
  order: 69
)

Slide.create(
  title: '営業外収益/費用・経常利益とは',
  content: '営業外収益（費用）とは、会社の本業以外の活動による収益（費用）のことをいいます。経常利益は、営業利益に営業外収益を足して営業外費用を引いた金額をいい、毎期行われる取引から発生する利益を表します。',
  chapter_id: 11,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.069.jpeg',
  order: 70
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 12,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.070.jpeg',
  order: 71
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 12,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.071.jpeg',
  order: 72
)

Slide.create(
  title: '特別利益/損失・税引前当期純利益とは',
  content: '特別利益（損失）とは、臨時的に発生した利益や損失のことをいいます。税引前当期純利益は、経常利益に特別利益を足して特別損失を引いた金額をいい、税金を除く全ての利益を表します。',
  chapter_id: 12,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.072.jpeg',
  order: 73
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 12,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.073.jpeg',
  order: 74
)

Slide.create(
  title: '',
  content: '',
  chapter_id: 12,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.074.jpeg',
  order: 75
)

Slide.create(
  title: '法人税等・当期純利益とは',
  content: '法人税等とは、会社の利益に課される税金のことをいいます。当期純利益は、経常利益に特別利益を足して特別損失を引いた金額をいい、全ての取引を含んだ最終的な利益を表します。',
  chapter_id: 12,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.075.jpeg',
  order: 76
)

Slide.create(
  title: '利益まとめ',
  content: '利益をまとめると以下のとおりです。',
  chapter_id: 12,
  image: 'https://bizrest-test-01.s3-ap-northeast-1.amazonaws.com/Bizrest%E4%BC%9A%E8%A8%88%E5%85%A5%E9%96%80.076.jpeg',
  order: 77
)
