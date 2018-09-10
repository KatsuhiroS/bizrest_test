import React from "react";
import PropTypes from 'prop-types'

const styleStartButton: React.CSSProperties = {
  display: 'inline-block',
  textDecoration: 'none',
  padding: '1em',
  background: '#808080',
  color: '#eeeeee',
  borderRadius: '7px',
  fontSize: '15px',
  fontWeight: 'bold'
};

const AccountingStartButton = props => (
  <div onClick={() => location.reload()}>
    <a href="/accounting/study" style={{...styleStartButton}}>レッスンスタート</a>
  </div>
)

AccountingStartButton.defaultProps = {
  name: ''
}

AccountingStartButton.propTypes = {
  name: PropTypes.string
}

export default AccountingStartButton;
