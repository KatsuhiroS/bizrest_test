import React from "react"
import PropTypes from 'prop-types'

import StudyModal from './StudyModal/StudyModal'
import AnswerSection from './AnswerSection/AnswerSection'

const AccountingStudy = props => {
  return(
    <div>
      <AnswerSection />
      <StudyModal />
    </div>
  )
}

AccountingStudy.defaultProps = {
  name: ''
}

AccountingStudy.propTypes = {
  name: PropTypes.string
}

export default AccountingStudy
