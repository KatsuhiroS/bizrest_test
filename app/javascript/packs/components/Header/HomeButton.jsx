import React from "react";
import PropTypes from 'prop-types'

const HomeButton = props => (
  <div>
    <button>
      <a href="/mypage">ホーム</a>
    </button>
  </div>
)

// HomeButton.defaultProps = {
//   name: ''
// }
//
// HomeButton.propTypes = {
//   name: PropTypes.string
// }

export default HomeButton;
