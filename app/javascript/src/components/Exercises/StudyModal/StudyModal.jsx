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
    transform: "translate(-50%, -50%)",
    background: "radial-gradient(#ffe9cc, #b3a592)"
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

class StudyModal extends Component {
  constructor(props) {
    super(props);

    Modal.setAppElement('#root')

    this.state = {
      modalIsOpen: true,
      currentSlide: 0,
    };

    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    Modal.setAppElement('body');
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  // afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   this.subtitle.style.color = "#000";
  // }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleChangeSlide(currentSlide) {
    this.setState({currentSlide});
  }

  render(props) {
    const {slides} = this.props
    console.log(slides)
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
          <StudySlide
            currentSlide={this.state.currentSlide}
            slides={slides}
            handleChangeSlide={this.handleChangeSlide.bind(this)}
          />
        </Modal>
      </div>
    );
  }
}

export default StudyModal
