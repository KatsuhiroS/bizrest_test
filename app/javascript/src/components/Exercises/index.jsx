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
     answerColumns: [],
     answerChoices: [],
    }

    this.fetchExerciseData()
  }

  fetchExerciseData() {
    axios.get(`/api/${location.pathname}`).then((res) => {
      this.setState({
        slides: res.data.slides,
        instruction: res.data.instruction,
        answerColumns: res.data.answer_columns,
        answerChoices: res.data.answer_choices,
      })
    })
  }
  

  render() {
    const {slides, instruction, answerColumns, answerChoices} = this.state
    return(
      <div>
        <WorkArea
          instruction={instruction}
          answerColumns={answerColumns}
          answerChoices={answerChoices}
        />
        <SlideModal slides={slides} />
      </div>
    )
  }
}

export default withDragDropContext(Exercise)
