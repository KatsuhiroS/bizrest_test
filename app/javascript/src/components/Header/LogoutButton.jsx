import React from "react";
import PropTypes from 'prop-types'

const LogoutButton = props => (
  <div>
    <button>
      <a href="/">ログアウト</a>
    </button>
  </div>
)

LogoutButton.defaultProps = {
  name: ''
}

LogoutButton.propTypes = {
  name: PropTypes.string
}

export default LogoutButton;
