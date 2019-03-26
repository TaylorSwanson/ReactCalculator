import React, { Component } from 'react';
import Button from "./Button.js";

class Buttons extends Component {
  render() {
    return (
      <div className="button-row">
        <Button label="7"/>
        <Button label="8"/>
        <Button label="9"/>
        <Button label="AC" isFunctional="true"
        smallText="true"/>

        <Button label="4"/>
        <Button label="5"/>
        <Button label="6"/>
        <Button label="÷" isFunctional="true"/>

        <Button label="1"/>
        <Button label="2"/>
        <Button label="3"/>
        <Button label="×" isFunctional="true"/>

        <Button label="0"/>
        <Button label="."/>
        <Button label="="/>
        <Button label="+" isFunctional="true"/>
        <div className="clear"></div>
      </div>
    );
  }
}

export default Buttons;