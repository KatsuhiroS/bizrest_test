import React from "react";
import PropTypes from 'prop-types'

import SignupButton from './SignupButton'
import LoginButton from './LoginButton'

const Top = props => (
  <div>
    <div>{props.name}</div>
    <SignupButton />
    <LoginButton />
  </div>

)

Top.defaultProps = {
  name: 'Bizrest'
}

Top.propTypes = {
  name: PropTypes.string
}

export default Top;
