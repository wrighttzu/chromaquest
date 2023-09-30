import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AppContainer from "./src/AppContainer";
import { Provider } from "react-redux";
import store from "./src/store/store";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}
