import React, { Component } from "react";

const styleButton: React.CSSProperties = {
  display: 'inline-block',
  textDecoration: 'none',
  padding: '0.5em',
  background: '#eeeeee',
  color: '#808080',
  borderRadius: '7px',
  fontSize: '15px',
  fontWeight: 'bold',
  textDecoration: 'none'
};

class JudgementButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button onClick={this.judgement} style={{...styleButton}}>正誤判定</button>
      </div>
    );
  }

  judgement = () => {
    let je0 = true;
    let je1 = true;
    let je2 = true;
    let drTotal = true;
    let crTotal = true;

    if (
      this.props.accountSpaces[0].lastDroppedItem === "現金" &&
      this.props.amount[0].amountInput === "500"
    ) {
      je0 = true;
    } else {
      je0 = false;
    }

    if (
      this.props.accountSpaces[1].lastDroppedItem === "売上高" &&
      this.props.amount[1].amountInput === "500"
    ) {
      je2 = true;
    } else {
      je2 = false;
    }

    if (!je0) {
      alert("不正解");
    } else if (!je1) {
      alert("不正解");
    } else if (!je2) {
      alert("不正解");
    } else if (!drTotal) {
      alert("不正解");
    } else if (!crTotal) {
      alert("不正解");
    } else {
      alert("正解");
    }
  };
}

export default JudgementButton;
