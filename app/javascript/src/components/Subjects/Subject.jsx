import React from "react";
import PropTypes from 'prop-types'
import axios from 'axios'
import { subjectShow } from '../Endpoint'

class Subject extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      subjects: []
    }

    this.fetchSubjects()
  }

  fetchSubjects() {
    axios.get(`http://localhost:3000/api/subject`).then((res) => {
      this.setState({ subjects: res.data })
    })
  }

  render() {
    return(
      <div>
        { this.renderSubject(this.state.subjects) }
      </div>
    )
  }

  renderSubject(subjects) {
    return subjects.map((subject) => {
      const linkTo = subjectShow(subject.slug)

      return(
        <div key={subject.id}>
          <a href={ linkTo }>{ subject.title }</a>
        </div>
      )
    })
  }
}

export default Subject;

