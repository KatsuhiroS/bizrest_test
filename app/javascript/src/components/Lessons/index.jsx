import React from 'react'
import axios from 'axios'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
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
          <Card style={styles.card}>
            <CardHeader
              title={lesson.name}
            />
            <CardContent>
              <p>このレッスンをやれば会計の基礎は完璧です。</p>
            </CardContent>
            <div style={{padding: '0 16px'}}>
              <Button
                className='lesson-start-btn'
                href='/accounting/study/1'
                variant='contained'
                color='primary'
                size='small'
              >
                レッスンを始める
              </Button>
              <Button
                href='#'
                variant='contained'
                size='small'
              >
                このレッスンの目次を見る
              </Button>
            </div>
          </Card>
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

const styles = {
  card: {
    width: '80%',
    padding: '20px',
    margin: '20px',
    boxShadow: '0px 1px 2px',
  }
}

export default Lessons
