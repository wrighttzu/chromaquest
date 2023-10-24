import React from "react";
import { Text, View } from "react-native";
import ColorBall from "./colorBall";

const Scene = () => {
  return (
    <>
      <View>
        <Text className="text-white self-center">Game Scene</Text>
        <ColorBall/>
      </View>
    </>
  );
};

export default Scene;
