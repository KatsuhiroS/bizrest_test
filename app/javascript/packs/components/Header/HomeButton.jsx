import React from "react";
import PropTypes from 'prop-types'

const styleButton: React.CSSProperties = {
  display: 'inline-block',
  textDecoration: 'none',
  padding: '0.5em',
  marginLeft: '350px',
  marginTop: '20px',
  marginBottom: '50px',
  background: '#808080',
  color: '#eeeeee',
  borderRadius: '7px',
  fontSize: '15px',
  fontWeight: 'bold',
  textDecoration: 'none'
};

const HomeButton = props => (
  <div>
      <a href="/" style={{...styleButton}}>トップページ</a>
  </div>
)

HomeButton.defaultProps = {
  name: ''
}

HomeButton.propTypes = {
  name: PropTypes.string
}

export default HomeButton;
