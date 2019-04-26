import React from "react"
import PropTypes from 'prop-types'

const Mypage = props => (
  <div>
    <div>{props.name}</div>
  </div>
)

Mypage.defaultProps = {
  name: 'アカウント設定'
}

Mypage.propTypes = {
  name: PropTypes.string
}

export default Mypage
