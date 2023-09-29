import React from "react";
import {  Text,  View } from "react-native";
import Button from "../components/button";


const HomeScreen: React.FC = () => {
  return (
    <View className="bg-white h-screen flex items-center justify-center">
      <Button title="New Game" nav={`NewGame`} />
      <Button title="Settings" nav={'Settings'}/>
      <Button title="About" nav={'About'} />
      <Text className="m-10">Welcome to the home screen!</Text>
    </View>
  );
};

export default HomeScreen;