import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import HomeScreen from "./screens/homeScreen";
import LoginScreen from "./screens/loginScreen";

const AppNavigator = StackNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    LoginScreen: { screen: LoginScreen },
  }, {
    initialRouteName: "HomeScreen",
    headerMode: "none"
  }
);
export default () =>
  <Root>
    <AppNavigator />
  </Root>;