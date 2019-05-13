import React, { Component } from "react";
import { render } from "react-dom";
import Slider from "react-slick"

export default class StudySlide extends Component {
  constructor(props) {
    super(props);
    console.log('constructor')
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next(props) {
    this.slider.slickNext(props);
  }
  previous(props) {
    this.slider.slickPrev(props);
  }

  afterChange(index) {
    const currentSlide = index;
    this.props.handleChangeSlide(currentSlide);
  }

  render(props) {
    const settings = {
      initialSlide: this.props.currentSlide,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: this.afterChange.bind(this),
    };
    const fontTitleDefault = {fontFamily:'Hiragino Maru Gothic Pro'};
    const fontTextDefault = {fontFamily:'Hiragino Maru Gothic Pro', fontSize: 20};
    const fontBrown = {fontWeight:'bold', color: '#a0522d'};
    const fontBlue = {fontWeight:'bold', color: '#0000cd'};
    const fontGreen = {fontWeight:'bold', color: '#006400'};
    const fontRed = {fontWeight:'bold', color: '#8b0000'};
    return (
      <div>
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div key={1}>
            <h2 style={fontTitleDefault}>会計とは</h2>
            <div style={fontTextDefault}>会計とは「<span style={fontBrown}>財産</span>・<span style={fontBrown}>もうけ</span>を<span style={fontBrown}>記録</span>して<span style={fontBrown}>報告</span>」という<span style={fontBrown}>一連の流れ</span>のことをいいます。</div>
          </div>
          <div key={2}>
            <h2 style={fontTitleDefault}>財産・もうけのイメージ</h2>
            <div style={fontTextDefault}><span style={fontBrown}>財産</span>・<span style={fontBrown}>もうけ</span>とは以下のようなイメージです。</div>
          </div>
          <div key={3}>
            <h2 style={fontTitleDefault}>報告とは</h2>
            <div style={fontTextDefault}>会計でいう報告とは、他の人にも正確に伝わるように活動の状況を<span style={fontBrown}>数値で表す</span>ことをいいます。</div>
          </div>
          <div key={4}>
            <h2 style={fontTitleDefault}>会計期間とは</h2>
            <div style={fontTextDefault}>財産・もうけの情報を１年ごとに区切って数値化したとき、この<span style={fontBrown}>区切られた１年</span>のことを<span style={fontBrown}>会計期間</span>といいます。</div>
          </div>
          <div key={5}>
            <h2 style={fontTitleDefault}>決算書とは</h2>
            <div style={fontTextDefault}>決算書とは、<span style={fontBrown}>会計期間ごと</span>に、<span style={fontBrown}>財産</span>・<span style={fontBrown}>もうけ</span>を記録した<span style={fontBrown}>書類</span>のことをいいます。</div>
          </div>
          <div key={6}>
            <h2 style={fontTitleDefault}>簿記とは</h2>
            <div style={fontTextDefault}>簿記とは、<span style={fontBrown}>財産</span>・<span style={fontBrown}>もうけ</span>を<span style={fontBrown}>記録する方法</span>のことをいいます。</div>
          </div>
          <div key={7}>
            <h2 style={fontTitleDefault}>記録する方法とは</h2>
            <div style={fontTextDefault}>記録する方法とは、財産・もうけを記録するときの<span style={fontBrown}>ノートの取り方</span>というイメージです。</div>
          </div>
          <div key={8}>
            <h2 style={fontTitleDefault}>会計と簿記の関係</h2>
            <div style={fontTextDefault}><span style={fontBrown}>簿記</span>は、<span style={fontBlue}>会計の一部</span>というイメージです。</div>
          </div>
          <div key={9}>
            <h2 style={fontTitleDefault}>簿記で記録した結果作られるのが決算書</h2>
            <div style={fontTextDefault}><span style={fontBrown}>簿記</span>によって記録した結果として<span style={fontBrown}>決算書</span>が作られます。</div>
          </div>
          <div key={10}>
            <h2 style={fontTitleDefault}>決算書とは</h2>
            <div style={fontTextDefault}><span style={fontBlue}>決算書</span>は正式には<span style={fontBlue}>財務諸表</span>といい、財務諸表のうち代表的な３つの書類を<span style={fontBrown}>財務三表</span>といいます。</div>
          </div>
          <div key={11}>
            <h2 style={fontTitleDefault}>財務三表とは</h2>
            <div style={fontTextDefault}><span style={fontBlue}>財務三表</span>とは<span style={fontBrown}>貸借対照表</span>、<span style={fontBrown}>損益計算書</span>、<span style={fontBrown}>キャッシュ・フロー計算書</span>の３つの書類のことをいいます。</div>
          </div>
          <div key={12}>
            <h2 style={fontTitleDefault}>貸借対照表とは</h2>
            <div style={fontTextDefault}><span style={fontBrown}>貸借対照表</span>は、<span style={fontBlue}>期末日時点</span>の<span style={fontGreen}>財政状態</span>を表す書類のことをいいます。</div>
          </div>
          <div key={13}>
            <h2 style={fontTitleDefault}>貸借対照表を図解化</h2>
            <div style={fontTextDefault}>実物の貸借対照表はシンプルに図解化することができます。</div>
          </div>
          <div key={14}>
            <h2 style={fontTitleDefault}>貸借対照表は借方と貸方に分かれる</h2>
            <div style={fontTextDefault}>貸借対照表は左右の２つ分かれ、<span style={fontBrown}>左側</span>を「<span style={fontBrown}>借方</span>」、<span style={fontBlue}>右側</span>を「<span style={fontBlue}>貸方</span>」といいます。</div>
          </div>
          <div key={15}>
            <h2 style={fontTitleDefault}>貸借対照表の借方と貸方を覚えるコツ</h2>
            <div style={fontTextDefault}>「か<span style={fontBrown}>り</span>かた」は「<span style={fontBrown}>り</span>」の書きおわりが<span style={fontBrown}>左</span>の方向だから<span style={fontBrown}>左側</span>、</div>
            <div style={fontTextDefault}>「か<span style={fontBlue}>し</span>かた」は「<span style={fontBlue}>し</span>」の書きおわりが<span style={fontBlue}>右</span>の方向だから<span style={fontBlue}>右側</span>と覚えます。</div>
          </div>
          <div key={16}>
            <h2 style={fontTitleDefault}>貸借対照表は借方は資金の運用形態</h2>
            <div style={fontTextDefault}>貸借対照表の<span style={fontBrown}>借方</span>は「<span style={fontBlue}>どんな財産</span>（勘定科目）」で資金を運用しているか。</div>
            <div style={fontTextDefault}>つまり資金の<span style={fontBrown}>運用形態</span>を表しています。</div>
          </div>
          <div key={17}>
            <h2 style={fontTitleDefault}>貸借対照表の借方は流動資産と固定資産に分類</h2>
            <div style={fontTextDefault}>貸借対照表の借方は、運用している財産を<span style={fontGreen}>現金化までの期間</span>で「<span style={fontBrown}>流動資産</span>」「<span style={fontBlue}>固定資産</span>」に分類されます。</div>
          </div>
          <div key={18}>
            <h2 style={fontTitleDefault}>貸借対照表の貸方は資金の調達源泉</h2>
            <div style={fontTextDefault}>貸借対照表の<span style={fontBrown}>貸方</span>は「<span style={fontBlue}>どんな方法</span>」で資金を調達したか。</div>
            <div style={fontTextDefault}>つまり資金の「<span style={fontBrown}>調達源泉</span>」を表しています。</div>
          </div>
          <div key={19}>
            <h2 style={fontTitleDefault}>貸借対照表の貸方は負債と純資産に分類</h2>
            <div style={fontTextDefault}>調達した資金のうち、<span style={fontBlue}>返済義務</span>の<span style={fontBrown}>あるもの</span>が「<span style={fontBrown}>負債</span>」、<span style={fontGreen}>ないもの</span>が「<span style={fontGreen}>純資産</span>」に分類されます。</div>
          </div>
          <div key={20}>
            <h2 style={fontTitleDefault}>負債は流動負債と固定負債に分類</h2>
            <div style={fontTextDefault}>貸借対照表の貸方の負債は、調達した資金の<span style={fontGreen}>返済日までの期間</span>で「<span style={fontBrown}>流動負債</span>」「<span style={fontBlue}>固定負債</span>」に分類されます。</div>
          </div>
          <div key={21}>
            <h2 style={fontTitleDefault}>貸借対照表の純資産は会社の元手や今までのもうけ分</h2>
            <div style={fontTextDefault}><span style={fontGreen}>純資産</span>には返済義務のない<span style={fontBrown}>会社の元手</span>や<span style={fontBlue}>今までのもうけ分</span>などが含まれます。</div>
          </div>
          <div key={22}>
            <h2 style={fontTitleDefault}>貸借対照表は「資産 ー 負債 ＝ 純資産」</h2>
            <div style={fontTextDefault}>B/Sは「<span style={fontBlue}>資産</span> ー <span style={fontRed}>負債</span> ＝ <span style={fontGreen}>純資産</span>」になり、<span style={fontBrown}>借方</span>の合計額と<span style={fontBrown}>貸方</span>の合計額は<span style={fontBrown}>一致</span>します。</div>
          </div>
          <div key={23}>
            <h2 style={fontTitleDefault}>貸借対照表まとめ</h2>
            <div style={fontTextDefault}>B/Sは、貸方の「<span style={fontBrown}>負債</span>・<span style={fontGreen}>純資産</span>で資金を調達し、借方の<span style={fontBlue}>資産</span>でその資金を運用しているイメージです。</div>
          </div>
          <div key={24}>
            <h2 style={fontTitleDefault}>損益計算書とは</h2>
            <div style={fontTextDefault}><span style={fontBrown}>損益計算書</span>は、<span style={fontBlue}>会計期間</span>の<span style={fontGreen}>経営成績</span>を表す書類のことをいいます。</div>
          </div>
          <div key={25}>
            <h2 style={fontTitleDefault}>損益計算書を図解化</h2>
            <div style={fontTextDefault}>実物の損益計算書は図解化することができます。</div>
          </div>
          <div key={26}>
            <h2 style={fontTitleDefault}>収益・費用・利益とは</h2>
            <div style={fontTextDefault}>図解をさらに簡略化すると<span style={fontBlue}>収益</span>・<span style={fontBrown}>費用</span>・<span style={fontGreen}>利益</span>に分類でき、<span style={fontBlue}>収益</span>は<span style={fontBlue}>稼いだ金額</span>、<span style={fontBrown}>費用</span>は<span style={fontBrown}>稼ぐためにかかった金額</span>のことをいいます。</div>
            <div style={fontTextDefault}><span style={fontGreen}>利益</span>は<span style={fontGreen}>収益から費用を引いた金額</span>がプラスのときをいいます。</div>
          </div>
          <div key={27}>
            <h2 style={fontTitleDefault}>プラスは利益・マイナスは損失</h2>
            <div style={fontTextDefault}>収益から費用を引いた金額が<span style={fontBlue}>プラス</span>のときは<span style={fontGreen}>利益</span>、<span style={fontBrown}>マイナス</span>のときは<span style={fontGreen}>損失</span>といいます。</div>
          </div>
        </Slider>
        <div style={{ textAlign: "center" }}>
          <button className="button" onClick={this.previous}>
            Previous
          </button>
          <button className="button" onClick={this.next}>
            Next
          </button>
        </div>
      </div>
    );
  }
}
