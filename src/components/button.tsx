import { Platform, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Button = ({ title, nav }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(nav)}
      className={`h-10 w-4/5 mt-4 bg-[#343f9e] justify-center rounded-lg items-center ${
        Platform.OS === "ios" ? "shadow-sm" : "shadow-lg"
      } shadow-black`}
    >
      <Text className="text-white">{title}</Text>
    </TouchableOpacity>
  );
};
export default Button;
