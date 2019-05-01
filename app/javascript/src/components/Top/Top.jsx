import React from "react";
import PropTypes from 'prop-types'

import SignupButton from './SignupButton'
import LoginButton from './LoginButton'

const TopPage = props => (
  <div>
    <div>{props.name}</div>
    <SignupButton />
    <LoginButton />
  </div>

)

TopPage.defaultProps = {
  name: 'Bizrest'
}

TopPage.propTypes = {
  name: PropTypes.string
}

export default TopPage;
