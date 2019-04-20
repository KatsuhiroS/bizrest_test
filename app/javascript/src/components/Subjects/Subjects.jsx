import React from "react"
import PropTypes from 'prop-types'
import Header from '../Header/Header'

import Subject from './Subject'

const Subjects = props => (
  <div>
    <Header />
    <div>{props.name}</div>
    <Subject />
  </div>
)

Subjects.defaultProps = {
  name: 'レッスン一覧'
}

Subjects.propTypes = {
  name: PropTypes.string
}

export default Subjects
