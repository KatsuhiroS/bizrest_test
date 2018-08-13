import React from "react"
import PropTypes from 'prop-types'

import LessonIndexButton from './LessonIndexButton'
import LogoutButton from './LogoutButton'

const Mypage = props => (
  <div>
    <div>{props.name}</div>
    <LessonIndexButton />
    <button>ログアウト</button>
  </div>
)

Mypage.defaultProps = {
  name: 'マイページ'
}

Mypage.propTypes = {
  name: PropTypes.string
}

export default Mypage
