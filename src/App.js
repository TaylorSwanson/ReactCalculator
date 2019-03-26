import React, { Component } from 'react';
import Stack from "./components/Stack.js";
import Buttons from "./components/Buttons.js";

import './styles/app.sass';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Stack/>
        <Buttons/>
      </div>
    );
  }
}

export default App;
