import React from "react"
import PropTypes from 'prop-types'
import Header from '../Header/Header'
import AccountingStartButton from './AccountingStartButton'

const Accounting = props => (
  <div>
    <div>会計入門</div>
    <AccountingStartButton />
  </div>
)

Accounting.defaultProps = {
  name: '会計入門'
}

Accounting.propTypes = {
  name: PropTypes.string
}

export default Accounting
