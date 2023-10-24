import React from "react";
import { Text, View } from "react-native";
import Button from "./button";
import GameScreen from "../screens/GameScreen";
import CupLevel from "./CupLevel";
import Scene from "./Scene";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { rgbToHex } from "../utils/colorMath";

const Game = () => {
  const backgroundColor = useSelector((state: RootState) => state.settings);

  return (
    <View
    style={{
      backgroundColor: `${rgbToHex(
        backgroundColor.R,
        backgroundColor.G,
        backgroundColor.B
      )}`,
    }}
     className=" flex flex-col w-full h-full">
      <View className="basis-3/6">
        <Scene />
      </View>
      <View className="basis-2/6">
        <CupLevel />
      </View>
      <View className="basis-1/6 items-center m-4">
        <Button title="CHECK" nav={GameScreen} />
      </View>
    </View>
  );
};

export default Game;
