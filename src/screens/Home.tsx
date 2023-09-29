import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";


const HomeScreen: React.FC = () => {
  return (
    <View className="bg-white">
      <Text className="m-10">Welcome to the home screen!</Text>
    </View>
  );
};

export default HomeScreen;