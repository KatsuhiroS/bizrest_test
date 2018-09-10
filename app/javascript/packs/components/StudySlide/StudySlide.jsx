import React, { Component } from "react";
import { render } from "react-dom";
import Slider from "react-slick"

const styleSlideButton: React.CSSProperties = {
  display: 'inline-block',
  textDecoration: 'none',
  padding: '0.5em',
  margin: '0.5em',
  background: '#eeeeee',
  color: '#808080',
  borderRadius: '7px',
  fontSize: '15px',
  fontWeight: 'bold'
};

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
    return (
      <div>
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div key={1}>
            <h2 style={{textAlign: 'center'}}>現金を受け取った時は、勘定科目「現金」と受取金額を、借方（左側）に記入します。</h2>
          </div>
          <div key={2}>
            <h2 style={{textAlign: 'center'}}>商品を売り上げた時は、勘定科目「売上高」と売上金額を、貸方（右側）に記入します。</h2>
          </div>
          <div key={3}>
            <h2 style={{textAlign: 'center'}}>「スライドを閉じる」をクリックして問題に挑戦！</h2>
          </div>
        </Slider>
        <div style={{ textAlign: "center" }}>
          <button className="button" onClick={this.previous} style={{...styleSlideButton}}>
            前のスライド
          </button>
          <button className="button" onClick={this.next} style={{...styleSlideButton}}>
            次のスライド
          </button>
        </div>
      </div>
    );
  }
}
