import React from "react"
import PropTypes from 'prop-types'

import Header from '../Header/Header'
import StudySlide from '../StudySlide/StudySlide'

const AccountingStudy = props => (
  <div>
    <Header />
    <StudySlide />
  </div>
)

AccountingStudy.defaultProps = {
  name: ''
}

AccountingStudy.propTypes = {
  name: PropTypes.string
}

export default AccountingStudy
