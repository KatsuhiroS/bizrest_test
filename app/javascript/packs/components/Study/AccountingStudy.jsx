import React from "react"
import PropTypes from 'prop-types'

import Header from '../Header/Header'
import StudyModal from '../StudyModal/StudyModal'

const AccountingStudy = props => (
  <div>
    <Header />
    <StudyModal />
  </div>
)

AccountingStudy.defaultProps = {
  name: ''
}

AccountingStudy.propTypes = {
  name: PropTypes.string
}

export default AccountingStudy
