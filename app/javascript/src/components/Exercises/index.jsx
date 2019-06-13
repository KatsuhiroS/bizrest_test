import React from "react"
import axios from 'axios'

import SlideModal from './Slides/SlideModal'
import WorkArea from './WorkArea'

class Exercise extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     slides: []
    }

    this.fetchSlides()
  }

  fetchSlides() {
    axios.get(`/api/${location.pathname}`).then((res) => {
      this.setState(
        { slides: res.data }
      )
    })
  }

  render() {
    const {slides} = this.state
    return(
      <div>
        <WorkArea />
        <SlideModal slides={slides} />
      </div>
    )
  }
}

export default Exercise
