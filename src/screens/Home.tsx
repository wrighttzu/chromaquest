import React from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Button from "../components/button";


const HomeScreen: React.FC = () => {
  return (
    <View className="bg-white h-screen flex items-center justify-center">
      <Button props="New Game" />
      <Button props="Settings" />
      <Button props="About" />
      <Text className="m-10">Welcome to the home screen!</Text>
    </View>
  );
};

export default HomeScreen;