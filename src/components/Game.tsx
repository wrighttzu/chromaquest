import React from "react";
import { Text, View } from "react-native";
import CupLevel from "./CupLevel";
import Button from "./button";
import GameScreen from "../screens/GameScreen";

const Game = () => {
  return (
    <View className="bg-white flex flex-col w-full">
      <View className="basis-3/6 bg-slate-500">
        <Text className="text-white self-center ">Game</Text>
      </View>
      <View className="basis-2/6 bg-gray-600">
        <CupLevel />
      </View>
      <View className="basis-1/6 items-center m-4">
        <Button title="New Game" nav={GameScreen} />
      </View>
    </View>
  );
};

export default Game;
