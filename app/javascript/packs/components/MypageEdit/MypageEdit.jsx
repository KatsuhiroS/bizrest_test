import React from "react"
import PropTypes from 'prop-types'

import Header from '../Header/Header'

const Mypage = props => (
  <div>
    <Header />
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
