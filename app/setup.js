import React, { Component } from "react";
import axios from "axios/index";
import Config from "./config";
import { Root } from "native-base";

import AppNavigator from "./routes";

axios.defaults.baseURL = Config.API_BASE_URL;
axios.defaults.headers.common['Content-Type'] = Config.API_ACCEPT;
axios.defaults.headers.common['Accept'] = Config.API_ACCEPT;
axios.defaults.headers.common['secret'] = Config.API_SECRET;

export default class Setup extends Component {
  render() {
    return (
      <Root>
        <AppNavigator />
      </Root>
    );
  }
}
