import React, {Component} from "react";
import { render } from "react-dom";
import Modal from "react-modal";
import StudySlide from "../StudySlide/StudySlide"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "95%",
    height: "90%",
    transform: "translate(-50%, -50%)"
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

class StudyModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: true,
      currentSlide: 0,
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    Modal.setAppElement('body');
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#000";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleChangeSlide(currentSlide) {
    this.setState({currentSlide});
  }

  render(props) {
    // console.log(this.state.currentSlide)
    return (
      <div>
        <button onClick={this.openModal}>スライドに戻る</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={this.closeModal}>スライドを閉じる</button>
          <h1 ref={subtitle => (this.subtitle = subtitle)}>会計入門</h1>
          <StudySlide
            currentSlide={this.state.currentSlide}
            handleChangeSlide={this.handleChangeSlide.bind(this)}
          />
        </Modal>
      </div>
    );
  }
}

export default StudyModal
