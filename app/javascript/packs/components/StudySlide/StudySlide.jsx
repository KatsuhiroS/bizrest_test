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
    return (
      <div>
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div key={1}>
            <h3>1</h3>
          </div>
          <div key={2}>
            <h3>2</h3>
          </div>
          <div key={3}>
            <h3>3</h3>
          </div>
          <div key={4}>
            <h3>4</h3>
          </div>
          <div key={5}>
            <h3>5</h3>
          </div>
          <div key={6}>
            <h3>6</h3>
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
