import React from "react";
import {  Text,  View } from "react-native";
import Button from "../components/button";


const About: React.FC = () => {
  return (
    <View className="bg-white h-screen flex items-center justify-center">
      <Text className="m-10">In the enchanting realm of Chromatica, colors have mysteriously faded, plunging the land into grayscale gloom. Legends speak of a powerful artifact, the Chroma Crystal, shattered into RGB fragments, scattering across the realm. As the chosen one, you embark on a quest to restore the RGB balance and bring back the vibrant hues of Chromatica.</Text>
    </View>
  );
};

export default About;