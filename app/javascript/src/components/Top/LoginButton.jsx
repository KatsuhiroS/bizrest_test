import React from "react";
import PropTypes from 'prop-types'

const LoginButton = props => (
  <div>
    <button>
      <a href="/signin">ログイン</a>
    </button>
  </div>

)

LoginButton.defaultProps = {
  name: ''
}

LoginButton.propTypes = {
  name: PropTypes.string
}

export default LoginButton;
