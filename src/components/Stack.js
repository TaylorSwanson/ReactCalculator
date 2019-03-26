import React, { Component } from 'react';
import { connect } from 'react-redux';

class Stack extends Component {
  render() {
    return (
      <div className="stack">
        {this.props.currentValue}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentValue: state.currentValue,
    currentOperation: state.currentOperation,
  };
}

export default connect(mapStateToProps)(Stack);