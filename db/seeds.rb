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

Slide.create(
  title: '会計とは',
  content: '会計とは「財産・もうけを記録して報告」という一連の流れのことをいいます。',
  chapter_id: 1,
  order: 1
)

Slide.create(
  title: '財産・もうけのイメージ',
  content: '財産・もうけとは以下のようなイメージです。',
  chapter_id: 1,
  order: 2
)

Slide.create(
  title: '報告とは',
  content: '会計でいう報告とは、他の人にも正確に伝わるように活動の状況を数値で表すことをいいます。',
  chapter_id: 1,
  order: 3
)

Slide.create(
  title: '会計期間とは',
  content: '財産・もうけの情報を１年ごとに区切って数値化したとき、この区切られた１年のことを会計期間といいます。',
  chapter_id: 1,
  order: 4
)

Slide.create(
  title: '決算書とは',
  content: '決算書とは、会計期間ごとに、財産・もうけを記録した書類のことをいいます。',
  chapter_id: 1,
  order: 5
)

Slide.create(
  title: '簿記とは',
  content: '簿記とは、財産・もうけを記録する方法のことをいいます。',
  chapter_id: 1,
  order: 6
)

Slide.create(
  title: '記録する方法とは',
  content: '記録する方法とは、財産・もうけを記録するときのノートの取り方というイメージです。',
  chapter_id: 1,
  order: 7
)

Slide.create(
  title: '会計と簿記の関係',
  content: '簿記は、会計の一部というイメージです。',
  chapter_id: 1,
  order: 8
)

Slide.create(
  title: '簿記で記録した結果作られるのが決算書',
  content: '簿記によって記録した結果として決算書が作られます。',
  chapter_id: 1,
  order: 9
)

Slide.create(
  title: '決算書とは',
  content: '決算書は正式には財務諸表といい、財務諸表のうち代表的な３つの書類を財務三表といいます。',
  chapter_id: 1,
  order: 10
)

Slide.create(
  title: '財務三表とは',
  content: '財務三表とは貸借対照表、損益計算書、キャッシュ・フロー計算書の３つの書類のことをいいます。',
  chapter_id: 1,
  order: 11
)

Slide.create(
  title: '貸借対照表とは',
  content: '貸借対照表は、期末日時点の財政状態を表す書類のことをいいます。',
  chapter_id: 1,
  order: 12
)

Slide.create(
  title: '貸借対照表を図解化',
  content: '実物の貸借対照表はシンプルに図解化することができます。',
  chapter_id: 1,
  order: 13
)

Slide.create(
  title: '貸借対照表は借方と貸方に分かれる',
  content: '貸借対照表は左右の２つ分かれ、左側を「借方」、右側を「貸方」といいます。',
  chapter_id: 1,
  order: 14
)

Slide.create(
  title: '貸借対照表の借方と貸方を覚えるコツ',
  content: '「かりかた」は「り」の書きおわりが左の方向だから左側、
  「かしかた」は「し」の書きおわりが右の方向だから右側と覚えます。',
  chapter_id: 1,
  order: 15
)

Slide.create(
  title: '貸借対照表は借方は資金の運用形態',
  content: '貸借対照表の借方は「どんな財産（勘定科目）」で資金を運用しているか。つまり資金の運用形態を表しています。',
  chapter_id: 1,
  order: 16
)

Slide.create(
  title: '貸借対照表の借方は流動資産と固定資産に分類',
  content: '貸借対照表の借方は、運用している財産を現金化までの期間で「流動資産」「固定資産」に分類されます。',
  chapter_id: 1,
  order: 17
)

Slide.create(
  title: '貸借対照表の貸方は資金の調達源泉',
  content: '貸借対照表の貸方は「どんな方法」で資金を調達したか。
  つまり資金の「調達源泉」を表しています。',
  chapter_id: 1,
  order: 18
)

Slide.create(
  title: '貸借対照表の貸方は負債と純資産に分類',
  content: '調達した資金のうち、返済義務のあるものが「負債」、ないものが「純資産」に分類されます。',
  chapter_id: 1,
  order: 19
)

Slide.create(
  title: '負債は流動負債と固定負債に分類',
  content: '貸借対照表の貸方の負債は、調達した資金の返済日までの期間で「流動負債」「固定負債」に分類されます。',
  chapter_id: 1,
  order: 20
)

Slide.create(
  title: '貸借対照表の純資産は会社の元手や今までのもうけ分',
  content: '純資産には返済義務のない会社の元手や今までのもうけ分などが含まれます。',
  chapter_id: 1,
  order: 21
)

Slide.create(
  title: '貸借対照表は「資産 ー 負債 ＝ 純資産」',
  content: 'B/Sは「資産 ー 負債 ＝ 純資産」になり、借方の合計額と貸方の合計額は一致します。',
  chapter_id: 1,
  order: 22
)

Slide.create(
  title: '貸借対照表まとめ',
  content: 'B/Sは、貸方の「負債・純資産で資金を調達し、借方の資産でその資金を運用しているイメージです。',
  chapter_id: 1,
  order: 23
)

Slide.create(
  title: '損益計算書とは',
  content: '損益計算書は、会計期間の経営成績を表す書類のことをいいます。',
  chapter_id: 1,
  order: 24
)

Slide.create(
  title: '損益計算書を図解化',
  content: '実物の損益計算書は図解化することができます。',
  chapter_id: 1,
  order: 25
)

Slide.create(
  title: '収益・費用・利益とは',
  content: '図解をさらに簡略化すると収益・費用・利益に分類でき、収益は稼いだ金額、費用は稼ぐためにかかった金額のことをいいます。利益は収益から費用を引いた金額がプラスのときをいいます。',
  chapter_id: 1,
  order: 26
)

Slide.create(
  title: 'プラスは利益・マイナスは損失',
  content: '収益から費用を引いた金額がプラスのときは利益、マイナスのときは損失といいます。',
  chapter_id: 1,
  order: 27
)

Slide.create(
  title: '損益計算書は借方と貸方に分かれる',
  content: '損益計算書は左右の２つ分かれ、左側を「借方」、右側を「貸方」といいます。左側が「借方」、右側が「貸方」というのはB/Sと同じです。',
  chapter_id: 1,
  order: 28
)

Slide.create(
  title: '売上総利益とは',
  content: '売上総利益は売上高から売上原価を引いた金額をいいます。売上総利益は「粗利（あらり）」ともよばれ、商品の売上による利益を表します。',
  chapter_id: 1,
  order: 29
)

Slide.create(
  title: '販管費・営業利益とは',
  content: '販売費及び一般管理費は「販管費」と呼ばれことが多く、商品を販売するために間接的に発生する費用のことをいいます。営業利益は、売上総利益から販管費を引いた金額をいい、会社の本業による利益を表します。',
  chapter_id: 1,
  order: 30
)

Slide.create(
  title: '営業外収益/費用・経常利益とは',
  content: '営業外収益（費用）とは、会社の本業以外の活動による収益（費用）のことをいいます。経常利益は、営業利益に営業外収益を足して営業外費用を引いた金額をいい、毎期継続的に発生する利益を表します。',
  chapter_id: 1,
  order: 31
)

Slide.create(
  title: '特別利益/損失・税引前当期純利益とは',
  content: '特別利益（損失）とは、臨時的（毎期ではない頻度）に発生した利益や損失のことをいいます。税引前当期純利益は、経常利益に特別利益を足して特別損失を引いた金額をいい、税金を除く全ての利益を表します。',
  chapter_id: 1,
  order: 32
)

Slide.create(
  title: '法人税等・当期純利益とは',
  content: '法人税等とは、会社の利益に課される税金のことをいいます。
  当期純利益は、経常利益に特別利益を足して特別損失を引いた金額をいい、全てを含んだ最終的な利益を表します。',
  chapter_id: 1,
  order: 33
)
