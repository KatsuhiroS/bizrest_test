import React from "react";
import PropTypes from 'prop-types'
import axios from 'axios'
import {
  apiSubjectIndex,
  subjectShow
} from '../Endpoint'

class Subject extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      subjects: []
    }

    this.fetchSubjects()
  }

  fetchSubjects() {
    const endpoint = apiSubjectIndex()

    axios.get(endpoint).then((res) => {
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

