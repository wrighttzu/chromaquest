import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import Loading from "./screens/Loading";


const AppStack = createStackNavigator();
const AppStackNavigator = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: true }}>
      <AppStack.Screen name="Home" component={HomeScreen}/>
    </AppStack.Navigator>
  );
};

const AppContainer = () => (
  <NavigationContainer>
    <AppStackNavigator />
  </NavigationContainer>
);

export default AppContainer;