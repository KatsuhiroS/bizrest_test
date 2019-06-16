import React from 'react'
import axios from 'axios'
import withDragDropContext from '../../lib/withDragDropContext'
import SlideModal from './Slides/SlideModal'
import WorkArea from './WorkArea'

class Exercise extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     slides: [],
     instruction: [],
     answerChoices: [],
    }

    this.fetchExerciseData()
  }

  fetchExerciseData() {
    axios.get(`/api/${location.pathname}`).then((res) => {
      this.setState({
        slides: res.data.slides,
        instruction: res.data.instruction,
        answerChoices: res.data.answer_choices,
      })
    })
  }

  render() {
    const {slides, instruction, answerChoices} = this.state
    return(
      <div>
        <WorkArea
          instruction={instruction}
          answerChoices={answerChoices}
        />
        <SlideModal slides={slides} />
      </div>
    )
  }
}

export default withDragDropContext(Exercise)
