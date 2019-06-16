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
    }

    this.fetchExerciseData()
  }

  fetchExerciseData() {
    axios.get(`/api/${location.pathname}`).then((res) => {
      this.setState({
        slides: res.data.slides,
        instruction: res.data.instruction,
      })
    })
  }

  render() {
    const {slides, instruction} = this.state
    return(
      <div>
        <WorkArea instruction={instruction} />
        <SlideModal slides={slides} />
      </div>
    )
  }
}

export default withDragDropContext(Exercise)
