import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Stack from "./components/Stack.js";
import Buttons from "./components/Buttons.js";

import rootReducer from "./reducers/index.js";

import './styles/app.sass';

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Stack/>
          <Buttons/>
        </div>
      </Provider>
    );
  }
}

export default App;
