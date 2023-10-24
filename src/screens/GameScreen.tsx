import { Text, View } from "react-native";
import React from "react";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import Game from "../components/Game";

const GameScreen: React.FC = () => {
  const backgroundColor = useSelector((state: RootState) => state.settings);

  return (
    <View className="bg-white h-screen flex items-center justify-center">
      <Game/>
    </View>
  );
};
export default GameScreen;
