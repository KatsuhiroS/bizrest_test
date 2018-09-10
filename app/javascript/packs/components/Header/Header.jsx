import React from "react";
import PropTypes from 'prop-types'

import HomeButton from './HomeButton'
import SubjectsButton from './SubjectsButton'
import MypageEditButton from './MypageEditButton'
import LogoutButton from './LogoutButton'

const Header = props => (
  <div>
    <SubjectsButton />
  </div>

)

Header.defaultProps = {
  name: ''
}

Header.propTypes = {
  name: PropTypes.string
}

export default Header;
