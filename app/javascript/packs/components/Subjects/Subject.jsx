import React from "react";
import PropTypes from 'prop-types'

const Subject = props => (
  <div>
    <div><a href="/subjects/accounting">会計入門</a></div>
    <div><a href="#">簿記</a></div>
    <div><a href="#">会計クイズ</a></div>
  </div>
)

Subject.defaultProps = {
  name: ''
}

Subject.propTypes = {
  name: PropTypes.string
}

export default Subject;
