import React, { Component } from 'react';
import { connect } from 'react-redux';

class Button extends Component {
  constructor(props) {
    super(props);

    this.handleClick = function() {
      //
      if (props.isFunctional) {
        // Update redux
        return props.dispatch({
          type: "APPLY_OPERATION",
          payload: props.operation
        });
      }

      props.dispatch({
        type: "ADD_NUMBER",
        payload: props.value
      });
    };
  }

  render() {
    // Calculate class names
    let className = "";
    if (this.props.isFunctional) {
      className += " functional";
    }
    if (this.props.smallText) {
      className += " small-text";
    }

    return (
      <div className={`button ${className}`}
      onClick={this.handleClick}>
        {this.props.value}
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

export default connect(mapStateToProps)(Button);