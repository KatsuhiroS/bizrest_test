import React, { Component } from "react";
import { render } from "react-dom";
import Slider from "react-slick"

export default class StudySlide extends Component {
  constructor(props) {
    super(props);
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
    return (
      <div>
        <Slider ref={c => (this.slider = c)} {...settings}>
          {this.props.slides.map((slide, index) => {
            return (
              <div key={index}>
                <h2 style={fontTitleDefault}>{slide.title}</h2>
                <div style={fontTextDefault}>{slide.content}</div>
              </div>
            )
          })}
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
