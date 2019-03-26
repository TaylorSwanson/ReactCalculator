import React, { Component } from 'react';
import Button from "./Button.js";

class Buttons extends Component {
  render() {
    return (
      <div className="button-row">
        <Button value="7"/>
        <Button value="8"/>
        <Button value="9"/>
        <Button value="AC"
        isFunctional="true"
        smallText="true"
        action="clear"/>

        <Button value="4"/>
        <Button value="5"/>
        <Button value="6"/>
        <Button value="÷"
        isFunctional="true"
        action="div"/>

        <Button value="1"/>
        <Button value="2"/>
        <Button value="3"/>
        <Button value="×"
        isFunctional="true"
        action="mul"/>

        <Button value="0"/>
        <Button value="."/>
        <Button value="="/>
        <Button value="+"
        isFunctional="true"
        action="div"/>

        <div className="clear"></div>
      </div>
    );
  }
}

export default Buttons;