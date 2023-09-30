import React from "react";
import { Text, View } from "react-native";
import Button from "../components/button";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { rgbToHex } from "../utils/colorMath";

const HomeScreen: React.FC = () => {
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
      className=" h-screen flex items-center justify-center"
    >
      <Button title="New Game" nav={`NewGame`} />
      <Button title="Settings" nav={"Settings"} />
      <Button title="About" nav={"About"} />
      <Text className="m-10">Welcome to the home screen!</Text>
    </View>
  );
};

export default HomeScreen;
