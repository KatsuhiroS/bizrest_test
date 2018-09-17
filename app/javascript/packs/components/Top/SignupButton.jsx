import React from "react";
import PropTypes from 'prop-types'
import axios from 'axios'

const SignupButton = props => (
  <div>
    <button>
      <a href="/signup">無料登録</a>
    </button>
  </div>

)

SignupButton.defaultProps = {
  name: ''
}

SignupButton.propTypes = {
  name: PropTypes.string
}

export default SignupButton;
