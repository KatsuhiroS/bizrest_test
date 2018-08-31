import React from "react"
import PropTypes from 'prop-types'

import Header from '../Header/Header'
import StudyModal from '../StudyModal/StudyModal'
import AnswerSection from '../AnswerSection/AnswerSection'

const AccountingStudy = props => (
  <div>
    <Header />
    <AnswerSection />
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
