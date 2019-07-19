import React, { Component } from "react";

class JudgementButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={this.judgement}>正誤判定</button>
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

    // console.log(je0);
    // console.log(je1);
    // console.log(je2);
    // console.log(drTotal);
    // console.log(
    //   Number(this.props.amount[0].amountInput) +
    //     Number(this.props.amount[1].amountInput)
    // );

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
