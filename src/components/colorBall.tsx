import React from "react";
import { Text, View } from "react-native";
import { rgbToHex } from "../utils/colorMath";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const ColorBall = () => {
  const cuplevel = useSelector((state: RootState) => state.cuplevel);

    return (
      <View
        style={{
          width: 200,
          height: 200,
          borderRadius: 200 / 2,
          margin: 20,
          backgroundColor: `${rgbToHex(
            cuplevel.R,
            cuplevel.G,
            cuplevel.B
          )}`
        }}
      />
    );
  };
export default ColorBall;
