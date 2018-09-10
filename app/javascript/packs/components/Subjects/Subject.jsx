import React from "react";
import PropTypes from 'prop-types'

const Subject = props => (
  <div>
    <div><a href="/subjects/accounting">会計入門</a></div>
  </div>
)

Subject.defaultProps = {
  name: ''
}

Subject.propTypes = {
  name: PropTypes.string
}

export default Subject;
