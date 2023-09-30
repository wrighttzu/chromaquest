import { createSlice } from "@reduxjs/toolkit";

export const settingsSliderRed = createSlice({
  name: "settingsSliderRed",
  initialState: {
    R: 127,
    G: 127,
    B: 127,
  },
  reducers: {
    updateSliderRed: (state, props) => {
      return { ...state, R: props.payload };
    },
    updateSliderGreen: (state, props) => {
      return { ...state, G: props.payload };
    },
    updateSliderBlue: (state, props) => {
      return { ...state, B: props.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateSliderRed, updateSliderGreen, updateSliderBlue } =
  settingsSliderRed.actions;

export default settingsSliderRed.reducer;
