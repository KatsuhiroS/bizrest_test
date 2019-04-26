import React from 'react'
import axios from 'axios'
import {
  apiLessonsIndex
} from '../Endpoint'

class Lessons extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      lessons: []
    }

    this.fetchLessons()
  }

  fetchLessons() {
    const slug = location.pathname.replace('/subjects/', '')
    const endpoint = apiLessonsIndex(slug)

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

export default Lessons
