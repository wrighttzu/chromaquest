import React from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Button from "../components/button";


const Settings: React.FC = () => {
  return (
    <View className="bg-white h-screen flex items-center justify-center">
      <Text className="m-10">Welcome to the Settings screen!</Text>
      <Button title="About" nav={"About"}/>
    </View>
  );
};

export default Settings;