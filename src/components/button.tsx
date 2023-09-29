import { Platform, Text, TouchableOpacity } from "react-native";


const Button = ({props}) => (
    <TouchableOpacity
            className={`h-10 w-4/5 mt-4 bg-[#42A5F5] justify-center rounded-lg items-center ${
              Platform.OS === "ios" ? "shadow-sm" : "shadow-lg"
            } shadow-black`}
          >
    <Text className="text-white">{props}</Text>
    </TouchableOpacity>
)
export default Button;