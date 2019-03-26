import React, { Component } from 'react';

class Button extends Component {
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
      <div class={`button ${className}`}>
        {this.props.label}
      </div>
    );
  }
}

export default Button;