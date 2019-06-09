import React from "react"
import axios from 'axios'

import PropTypes from 'prop-types'

import StudyModal from './StudyModal/StudyModal'
import AnswerSection from './AnswerSection/AnswerSection'

class AccountingStudy extends React.Component {
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
        <AnswerSection />
        <StudyModal slides={slides} />
      </div>
    )
  }
}

AccountingStudy.defaultProps = {
  name: ''
}

AccountingStudy.propTypes = {
  name: PropTypes.string
}

export default AccountingStudy
