import React, { Component } from 'react';
import { connect } from 'react-redux';

class Button extends Component {


  handleClick() {
      const { action, value, dispatch } = this.props;
      if (action) {
        // Update redux
        return dispatch({
          type: "APPLY_OPERATION",
          payload: action
        });
      }

      dispatch({
        type: "ADD_NUMBER",
        payload: value
      });
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
    if (this.props.equals) {
      className += " equals";
    }

    return (
      <div className={`button ${className}`}
      onClick={() => this.handleClick()}>
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