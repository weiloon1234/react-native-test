import React, { Component } from 'react';
import { Provider } from "react-redux";

import store from './app/store';
import { StyleProvider, getTheme } from "native-base";
import Setup from "./app/setup";
import variables from "./app/theme/variables/commonColor";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StyleProvider style={getTheme(variables)}>
          <Setup />
        </StyleProvider>
      </Provider>
    );
  }
}