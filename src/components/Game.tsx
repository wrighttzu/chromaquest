import React from "react";
import { Text, View } from "react-native";
import Button from "./button";
import GameScreen from "../screens/GameScreen";
import CupLevel from "./CupLevel";
import Scene from "./Scene";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { rgbToHex } from "../utils/colorMath";
import Cups from "./Cups";

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
     className="flex flex-col w-full h-full">
      <View className="basis-5/12 ">
        <Scene />
      </View>
      <View className="basis-1/12 ">
        <Cups />
      </View>
      <View className="basis-4/12">
        <CupLevel />
      </View>
      <View className="basis-1/12 items-center">
        <Button title="CHECK" nav={GameScreen} />
      </View>
    </View>
  );
};

export default Game;
