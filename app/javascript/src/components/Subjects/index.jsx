import React from 'react'
import axios from 'axios'
import {
  apiSubjectsIndex,
  subjectsShow
} from '../Endpoint'

class Subjects extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      subjects: []
    }

    this.fetchSubjects()
  }

  fetchSubjects() {
    const endpoint = apiSubjectsIndex()

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
      const linkTo = subjectsShow(subject.slug)

      return(
        <div key={subject.id}>
          <a href={ linkTo }>{ subject.title }</a>
        </div>
      )
    })
  }
}

export default Subjects

