import React, { Component } from "react";
import { render } from "react-dom";
import Slider from "react-slick";

export default class Slide extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.backToSection = this.backToSection.bind(this);
  }

  // componentWillMount() {
  //   window.addEventListener("hashchange", this.backToSection, false);
  // }

  componentDidMount() {
    window.addEventListener("hashchange", this.backToSection, false);
  }

  componentWillUnmount() {
    // if (window) window.removeEventListener("hashchange", this.backToSection, false);
  }

  componentDidUpdate(){
    const {
      backToSection,
    } = this;
    window.onpopstate  = (e) => backToSection(e);
  }

  backToSection(e) {
    if (e) e.preventDefault();
    // let pathname = window.location.pathname;
    // const base = pathname.replace(/\d+$/, '');
    window.location.replace('/');
  }
  next(props) {
    const {
      currentSlide,
    } = this.props;
    let pathname = window.location.pathname;
    const base = pathname.replace(/\d+$/, '');
    window.history.pushState(null,  "page " + (currentSlide + 1), base + (currentSlide + 1));
    this.slider.slickNext(props);
  }
  previous(props) {
    const {
      currentSlide,
    } = this.props;
    let pathname = window.location.pathname;
    const base = pathname.replace(/\d+$/, '');
    window.history.pushState(null,  "page " + (currentSlide - 1), base + (currentSlide == 0 ? currentSlide : currentSlide - 1));
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
    const slideImage = {width: '60%', padding:15, margin: 'auto'}
    return (
      <div>
        <Slider ref={c => (this.slider = c)} {...settings}>
          {this.props.slides.map((slide, index) => {
            return (
              <div key={index}>
                <div>{index}</div>
                <h2 style={fontTitleDefault}>{slide.title}</h2>
                <div style={fontTextDefault}>{slide.content}</div>
                <img style={slideImage} src={slide.image} />
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
