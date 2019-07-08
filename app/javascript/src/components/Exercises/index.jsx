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

  userAnswersSetState = (obj) => {

    this.setState(() => {
      this.state.answerColumns[obj.answer_space.answer_column_id-1].answer_spaces.filter((col) => col.id === obj.answer_space.id)[0].user_answer = obj.answer_space.user_answer
    })
    // this.setState({
    //   this.answerColumns
    // })
  }


  render() {
    const {slides, instruction, answerColumns, answerChoices} = this.state
    return(
      <div>
        <WorkArea
          instruction={instruction}
          answerColumns={answerColumns}
          answerChoices={answerChoices}
          setAnswerHandle={this.userAnswersSetState}
        />
        <SlideModal slides={slides} />
      </div>
    )
  }
}

export default withDragDropContext(Exercise)
