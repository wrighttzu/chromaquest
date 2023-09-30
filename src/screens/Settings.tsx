import React, { SetStateAction, useState } from "react";
import { Text, View } from "react-native";
import Button from "../components/button";
import Slider from "@react-native-community/slider";

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

export function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

const Settings: React.FC = () => {

  const [sliderValue, setSliderValue] = useState({
    R: 123,
    G: 123,
    B: 123,
  });

  const [changeColor, setChangeColor] = useState(
    rgbToHex(sliderValue.R, sliderValue.G, sliderValue.B)
  );
  
  function handleChange(value) {
    setSliderValue({ ...sliderValue, R: value });
    setChangeColor(rgbToHex(sliderValue.R, sliderValue.G, sliderValue.B))
  }
  return (
    <View
      style={{ backgroundColor: `${changeColor}` }}
      className="h-screen flex items-center justify-center"
    >
      <Text className="m-1 text-2xl">Welcome to the Settings screen!</Text>
      <Text className="m-1 text-2xl">Choose the background color</Text>
      <Text className="m text-lg">Red - {sliderValue.R} </Text>
      <Text>
        {sliderValue.R} - {rgbToHex(sliderValue.R, 0, 0)}
      </Text>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={255}
        minimumTrackTintColor="#003399"
        maximumTrackTintColor="#000066"
        onValueChange={handleChange}
        step={1}
      />
      <Button title="About" nav={"About"} />
    </View>
  );
};

export default Settings;
