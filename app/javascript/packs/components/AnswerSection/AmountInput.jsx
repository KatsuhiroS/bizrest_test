import React, { Component } from "react";
import PropTypes from "prop-types";

export default class AmountInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: "",
      amount: ""
    };
  }

  render() {
    return (
      <div>
        <input
          type="number"
          value={this.state.amount}
          onChange={this.handleChange}
        />
      </div>
    );
  }

  handleChange = event => {
    const amount = event.target.value;
    const index = this.props.amountInputIndex;
    this.setState({ index: index, amount: amount });
    this.props.amountInput({ index, amount });
  };
}

AmountInput.propTypes = {
  name: PropTypes.number
};
