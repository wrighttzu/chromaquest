import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AppContainer from "./src/AppContainer";

const Stack = createStackNavigator();

export default function App() {
  return (
    <AppContainer/>
  );
}
