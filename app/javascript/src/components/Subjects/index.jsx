import React from 'react'
import axios from 'axios'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
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
        <div key={subject.id} style={styles.container}>
          <Card style={styles.card}>
            <CardHeader
              title={subject.title}
            />
            <CardContent>
              <p>{subject.explanation}</p>
            </CardContent>
            <Button
              href={linkTo}
              variant='contained'
              color='primary'
              size='small'
            >
              レッスン一覧を見る
            </Button>
          </Card>
        </div>
      )
    })
  }
}

const styles = {
  container: {
    padding: '40px',
  },
  card: {
    textAlign: 'center',
    width: '33%',
    padding: '20px',
    boxShadow: '0px 1px 2px',
  },
}

export default Subjects

