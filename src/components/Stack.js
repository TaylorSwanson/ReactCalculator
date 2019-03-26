import React, { Component } from 'react';
import { connect } from 'react-redux';

class Stack extends Component {
  calculateDisplayValue() {
    const stack = this.props.stack;
    if (stack.length == 0) {
      return "0";
    }

    // Current sum
    let value;

    // Iterate over stack and apply functions
    // This renders the stack in a user friendly way
    stack.forEach((s, i) => {
      // Prevent duplicate first numbers from rendering
      if (i === 0) return value = s;

      // Check if this is a method stack element
      if (isNaN(Number(s))) {
        const valMap = {
          "divide": "÷",
          "multiply": "×",
          "subtract": "-",
          "add": "+"
        };

        value += ` ${valMap[s]}`;
      } else {
        value += ` ${s}`;
      }
    });

    return value;
  }

  render() {
    return (
      <div className="stack">
        {this.calculateDisplayValue()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stack: state.stack,
  };
}

export default connect(mapStateToProps)(Stack);