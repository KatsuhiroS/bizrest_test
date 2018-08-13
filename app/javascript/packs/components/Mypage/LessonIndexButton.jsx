import React from "react";
import PropTypes from 'prop-types'

const LessonIndexButton = props => (
  <div>
    <button>レッスン一覧</button>
  </div>
)

LessonIndexButton.defaultProps = {
  name: ''
}

LessonIndexButton.propTypes = {
  name: PropTypes.string
}

export default LessonIndexButton;
