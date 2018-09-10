import React from "react";
import PropTypes from 'prop-types'
import AccountingStartButton from '../Lessons/AccountingStartButton'
import topimage from './topimage.jpg'

// import SignupButton from './SignupButton'
// import LoginButton from './LoginButton'

const styleTopContainer: React.CSSProperties = {
  backgroundImage: `url(${topimage})`,
  height: '100vh'
};

const styleTopTitle: React.CSSProperties = {
  color: '#3f3f3f',
  fontSize: '110px',
  textAlign: 'center',
  paddingTop: '170px',
  margin: '0px'
};

const styleSubTitle1: React.CSSProperties = {
  color: '#3f3f3f',
  textAlign: 'center',
  paddingTop: '40px'
};

const styleSubTitle2: React.CSSProperties = {
  color: '#3f3f3f',
  textAlign: 'center',
  paddingTop: '15px',
  paddingBottom: '30px'
};

const styleSubjectsButtonWrapper: React.CSSProperties = {
  textAlign: 'center'
};

const Top = props => (
  <div id="topContainer" style={{...styleTopContainer}}>
    <h1 id="topTitle" style={{...styleTopTitle}}>Bizrest</h1>
    <h2 id="subtitle1" style={{...styleSubTitle1}}>会計を学ぶならまずはここから</h2>
    <h2 id="subtitle2" style={{...styleSubTitle2}}>「世界一わかりやすい」を追求した完全無料の初心者向け学習サービス</h2>
    <div style={{...styleSubjectsButtonWrapper}}>
      <AccountingStartButton />
    </div>
  </div>
)

Top.defaultProps = {
  name: 'Bizrest'
}

Top.propTypes = {
  name: PropTypes.string
}

export default Top;
