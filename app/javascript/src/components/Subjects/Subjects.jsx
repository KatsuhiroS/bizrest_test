import React from "react"
import PropTypes from 'prop-types'
import axios from 'axios'
import {
  apiLessonIndex
} from '../Endpoint'

import Subject from './Subject'


class Subjects extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      lessons: []
    }

    this.fetchLessons()
  }

  fetchLessons() {
    const slug = location.pathname.replace('/subjects/', '').replace('/lessons', '')
    const endpoint = apiLessonIndex(slug)

    axios.get(endpoint).then((res) => {
      this.setState(
        { lessons: res.data }
      )
    })
  }

  renderLessons(lessons) {
    return lessons.map((lesson) => {
      return(
        <div key={lesson.id}>
          <a href="/accounting/study/1">
            { lesson.name }
          </a>
        </div>
      )
    })
  }

  render() {
    return(
      <div>
        <div>レッスン一覧</div>
        {
          this.renderLessons(this.state.lessons)
        }
      </div>
    )
  }
}

export default Subjects
