import React, { Component } from "react";

export default class AnswerInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: "",
      amount: ""
    };
  }

  render() {
    return (
      <div style={{ float: "left" }}>
        <input
          type="number"
          value={this.state.amount}
          onChange={this.handleChange}
          style={{ height: "50px", fontSize: "20px", marginRight: "10px" }}
        />
      </div>
    );
  }

  handleChange = event => {
    const amount = event.target.value;
    const index = this.props.amountInputIndex;
    this.setState({ index: index, amount: amount });
    this.props.amountInput({ index, amount });
  }
}