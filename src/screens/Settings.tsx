import React, { SetStateAction, useState } from "react";
import { Text, View } from "react-native";
import Button from "../components/button";
import Slider from "@react-native-community/slider";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import {
  updateSliderBlue,
  updateSliderGreen,
  updateSliderRed,
} from "../store/settingsReducer";
import { rgbToHex } from "../utils/colorMath";

const Settings: React.FC = () => {
  const backgroundColor = useSelector((state: RootState) => state.settings);
  const dispatch = useDispatch();

  return (
    <View
      style={{
        backgroundColor: `${rgbToHex(
          backgroundColor.R,
          backgroundColor.G,
          backgroundColor.B
        )}`,
      }}
      className="h-screen flex items-center justify-center"
    >
      <Text className="text-2xl">Welcome to the Settings screen!</Text>
      <Text className="m-1 text-2xl">Choose the background color</Text>
      <Text className="m text-lg">Red - {backgroundColor.R} </Text>
      <Text className="m text-lg">Green - {backgroundColor.G} </Text>
      <Text className="m text-lg">Blue - {backgroundColor.B} </Text>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={255}
        minimumTrackTintColor="#003399"
        maximumTrackTintColor="#000066"
        onValueChange={(value) => dispatch(updateSliderRed(value))}
        value={backgroundColor.R}
        step={1}
      />
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={255}
        minimumTrackTintColor="#003399"
        maximumTrackTintColor="#000066"
        onValueChange={(value) => dispatch(updateSliderGreen(value))}
        value={backgroundColor.G}
        step={1}
      />
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={255}
        minimumTrackTintColor="#003399"
        maximumTrackTintColor="#000066"
        onValueChange={(value) => dispatch(updateSliderBlue(value))}
        value={backgroundColor.B}
        step={1}
      />
      <Button title="About" nav={"About"} />
    </View>
  );
};

export default Settings;
