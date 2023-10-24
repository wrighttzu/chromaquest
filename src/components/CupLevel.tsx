import { Text, View } from "react-native";
import React from "react";
import Slider from "@react-native-community/slider";
import { updateCupSliderBlue, updateCupSliderGreen, updateCupSliderRed } from "../store/cupLevel";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function CupLevel() {
  const cuplevel = useSelector((state: RootState) => state.cuplevel);
  const dispatch = useDispatch();
  console.log(cuplevel);

  return (
    <>  
      <View style={{ transform: [{ rotate: "-90deg" }] }}
        className="flex-nowrap flex-col gap-20">
        <View>
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={255}
            minimumTrackTintColor="#003399"
            maximumTrackTintColor="#000066"
            onValueChange={(value) => dispatch(updateCupSliderRed(value))}
            value={123}
            step={1}
          />
        </View>
        <View>
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={255}
            minimumTrackTintColor="#003399"
            maximumTrackTintColor="#000066"
            onValueChange={(value) => dispatch(updateCupSliderGreen(value))}
            value={123}
            step={1}
          />
        </View>
        <View>
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={255}
            minimumTrackTintColor="#003399"
            maximumTrackTintColor="#000066"
            onValueChange={(value) => dispatch(updateCupSliderBlue(value))}
            value={123}
            step={1}
          />
        </View>
      </View>
    </>
  );
}
