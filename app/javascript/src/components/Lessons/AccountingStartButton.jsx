import React from "react";
import PropTypes from 'prop-types'

const AccountingStartButton = props => (
  <div>
    <button>
      <a href="/accounting/study">レッスンスタート</a>
    </button>
  </div>
)

AccountingStartButton.defaultProps = {
  name: ''
}

AccountingStartButton.propTypes = {
  name: PropTypes.string
}

export default AccountingStartButton;
