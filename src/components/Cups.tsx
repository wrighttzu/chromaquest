import React from "react";
import { Text, View } from "react-native";
import AnimatedLottieView from "lottie-react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Cups = () => {
  const cuplevel = useSelector((state: RootState) => state.cuplevel);

  return (
    <View className="flex flex-row justify-evenly mx-8 -my-10">
      <View>
      <AnimatedLottieView
        source={require("../assets/greencup.json")}
        progress={cuplevel.R/255}
        style={{ height: 150 }}
      />
      </View>
      <View>
      <AnimatedLottieView
        source={require("../assets/greencup.json")}
        progress={cuplevel.G/255}
        style={{ height: 150 }}
      />
      </View>
      <View>
      <AnimatedLottieView
        source={require("../assets/greencup.json")}
        progress={cuplevel.B/255}
        style={{ height: 150 }}
      />
      </View>
    </View>
  );
};

export default Cups;
