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
    const fontBrown = {fontWeight:'bold', color: 'brown'};
    const fontBlue = {fontWeight:'bold', color: '#0000cd'};
    const fontGreen = {fontWeight:'bold', color: '#006400'};
    return (
      <div>
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div key={1}>
            <h1 style={fontTitleDefault}>会計とは</h1>
            <div style={fontTextDefault}>会計とは「<span style={fontBrown}>財産</span>・<span style={fontBrown}>もうけ</span>を<span style={fontBrown}>記録</span>して<span style={fontBrown}>報告</span>」という<span style={fontBrown}>一連の流れ</span>のことをいいます。</div>
          </div>
          <div key={2}>
            <h1 style={fontTitleDefault}>財産・もうけのイメージ</h1>
            <div style={fontTextDefault}><span style={fontBrown}>財産</span>・<span style={fontBrown}>もうけ</span>とは以下のようなイメージです。</div>
          </div>
          <div key={3}>
            <h1 style={fontTitleDefault}>報告とは</h1>
            <div style={fontTextDefault}>会計でいう報告とは、他の人にも正確に伝わるように活動の状況を<span style={fontBrown}>数値で表す</span>ことをいいます。</div>
          </div>
          <div key={4}>
            <h1 style={fontTitleDefault}>会計期間とは</h1>
            <div style={fontTextDefault}>財産・もうけの情報を１年ごとに区切って数値化したとき、この<span style={fontBrown}>区切られた１年</span>のことを<span style={fontBrown}>会計期間</span>といいます。</div>
          </div>
          <div key={5}>
            <h1 style={fontTitleDefault}>決算書とは</h1>
            <div style={fontTextDefault}>決算書とは、<span style={fontBrown}>会計期間ごと</span>に、<span style={fontBrown}>財産</span>・<span style={fontBrown}>もうけ</span>を記録した<span style={fontBrown}>書類</span>のことをいいます。</div>
          </div>
          <div key={6}>
            <h1 style={fontTitleDefault}>簿記とは</h1>
            <div style={fontTextDefault}>簿記とは、<span style={fontBrown}>財産</span>・<span style={fontBrown}>もうけ</span>を<span style={fontBrown}>記録する方法</span>のことをいいます。</div>
          </div>
          <div key={7}>
            <h1 style={fontTitleDefault}>記録する方法とは</h1>
            <div style={fontTextDefault}>記録する方法とは、財産・もうけを記録するときの<span style={fontBrown}>ノートの取り方</span>というイメージです。</div>
          </div>
          <div key={8}>
            <h1 style={fontTitleDefault}>会計と簿記の関係</h1>
            <div style={fontTextDefault}><span style={fontBrown}>簿記</span>は、<span style={fontBlue}>会計の一部</span>というイメージです。</div>
          </div>
          <div key={9}>
            <h1 style={fontTitleDefault}>簿記で記録した結果作られるのが決算書</h1>
            <div style={fontTextDefault}><span style={fontBrown}>簿記</span>によって記録した結果として<span style={fontBrown}>決算書</span>が作られます。</div>
          </div>
          <div key={10}>
            <h1 style={fontTitleDefault}>決算書とは</h1>
            <div style={fontTextDefault}><span style={fontBlue}>決算書</span>は正式には<span style={fontBlue}>財務諸表</span>といい、財務諸表のうち代表的な３つの書類を<span style={fontBrown}>財務三表</span>といいます。</div>
          </div>
          <div key={11}>
            <h1 style={fontTitleDefault}>財務三表とは</h1>
            <div style={fontTextDefault}><span style={fontBlue}>財務三表</span>とは<span style={fontBrown}>貸借対照表</span>、<span style={fontBrown}>損益計算書</span>、<span style={fontBrown}>キャッシュ・フロー計算書</span>の３つの書類のことをいいます。</div>
          </div>
          <div key={12}>
            <h1 style={fontTitleDefault}>貸借対照表とは</h1>
            <div style={fontTextDefault}><span style={fontBrown}>貸借対照表</span>は、<span style={fontBlue}>期末日時点</span>の<span style={fontGreen}>財政状態</span>を表す書類のことをいいます。</div>
          </div>
          <div key={13}>
            <h1 style={fontTitleDefault}>貸借対照表を図解化</h1>
            <div style={fontTextDefault}>実物の貸借対照表はシンプルな図にすることができます。</div>
          </div>
          <div key={14}>
            <h1 style={fontTitleDefault}>貸借対照表は借方と貸方に分かれる</h1>
            <div style={fontTextDefault}>貸借対照表は左右の２つ分かれ、<span style={fontBrown}>左側</span>を「<span style={fontBrown}>借方</span>」、<span style={fontBlue}>右側</span>を「<span style={fontBlue}>貸方</span>」といいます。</div>
          </div>
          <div key={15}>
            <h1 style={fontTitleDefault}>貸借対照表の借方と貸方を覚えるコツ</h1>
            <div style={fontTextDefault}>「か<span style={fontBrown}>り</span>かた」は「<span style={fontBrown}>り</span>」の書きおわりが<span style={fontBrown}>左</span>の方向だから<span style={fontBrown}>左側</span>、</div>
            <div style={fontTextDefault}>「か<span style={fontBlue}>し</span>かた」は「<span style={fontBlue}>し</span>」の書きおわりが<span style={fontBlue}>右</span>の方向だから<span style={fontBlue}>右側</span>と覚えます。</div>
          </div>
          <div key={16}>
            <h1 style={fontTitleDefault}>貸借対照表は借方は資金の運用形態</h1>
            <div style={fontTextDefault}>貸借対照表の<span style={fontBrown}>借方</span>は「<span style={fontBlue}>どんな財産</span>（勘定科目）」で資金を運用しているか。</div>
            <div style={fontTextDefault}>つまり資金の<span style={fontBrown}>運用形態</span>を表している。</div>
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
