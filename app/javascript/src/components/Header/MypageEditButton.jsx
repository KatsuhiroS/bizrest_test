import React from "react";
import PropTypes from 'prop-types'

const MypageEditButton = props => (
  <div>
    <button><a href="/mypage/edit">アカウント設定</a></button>
  </div>
)

MypageEditButton.defaultProps = {
  name: ''
}

MypageEditButton.propTypes = {
  name: PropTypes.string
}

export default MypageEditButton;
