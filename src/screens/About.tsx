import React from "react";
import { Text, View } from "react-native";
import { rgbToHex } from "../utils/colorMath";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const About: React.FC = () => {
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
      <Text className="m-10 text-justify text-xl">
        In the enchanting realm of Chromatica, colors have mysteriously faded,
        plunging the land into grayscale gloom. Legends speak of a powerful
        artifact, the Chroma Crystal, shattered into RGB fragments, scattering
        across the realm. As the chosen one, you embark on a quest to restore
        the RGB balance and bring back the vibrant hues of Chromatica.
      </Text>
    </View>
  );
};

export default About;
