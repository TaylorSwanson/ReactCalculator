import React, { Component } from 'react';
import Button from "./Button.js";

class Buttons extends Component {
  render() {
    return (
      <div>
        <div className="button-row">
          <Button value="7"/>
          <Button value="8"/>
          <Button value="9"/>
          <Button value="+"
          isFunctional="true"
          action="add"/>
          <div className="clear"></div>
        </div>

        <div className="button-row">
          <Button value="4"/>
          <Button value="5"/>
          <Button value="6"/>
          <Button value="-"
          isFunctional="true"
          smallText="true"
          action="subtract"/>
          <div className="clear"></div>
        </div>

        <div className="button-row">
          <Button value="1"/>
          <Button value="2"/>
          <Button value="3"/>
          <Button value="×"
          isFunctional="true"
          action="multiply"/>
          <div className="clear"></div>
        </div>

        <div className="button-row">
          <Button value="0"/>
          <Button value="."/>
          <Button value="AC"
          smallText="true"
          action="clear"/>
          <Button value="÷"
          isFunctional="true"
          action="divide"/>
          <div className="clear"></div>
        </div>
        
        <div className="button-row">
          <Button value="="
          isFunctional="true"
          equals="true"
          action="equals"/>
          <div className="clear"></div>
        </div>
      </div>
    );
  }
}

export default Buttons;