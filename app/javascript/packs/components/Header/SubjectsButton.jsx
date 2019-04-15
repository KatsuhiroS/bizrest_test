import React from "react";
import PropTypes from 'prop-types'

const SubjectsButton = props => (
  <div>
    <button>
      <a href="/subjects">レッスン一覧</a>
    </button>
  </div>
)

SubjectsButton.defaultProps = {
  name: ''
}

SubjectsButton.propTypes = {
  name: PropTypes.string
}

export default SubjectsButton;
