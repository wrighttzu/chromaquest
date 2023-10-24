import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import Settings from "./screens/Settings";
import About from "./screens/About";
import GameScreen from "./screens/GameScreen";


const AppStack = createStackNavigator();
const AppStackNavigator = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Home" component={HomeScreen}/>
      <AppStack.Screen name="Settings" component={Settings}/>
      <AppStack.Screen name="About" component={About}/>
      <AppStack.Screen name="GameScreen" component={GameScreen}/>
    </AppStack.Navigator>
  );
};

const AppContainer = () => (
  <NavigationContainer>
    <AppStackNavigator />
  </NavigationContainer>
);

export default AppContainer;