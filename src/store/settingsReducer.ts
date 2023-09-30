import { createSlice } from "@reduxjs/toolkit";

export const settingsSlider = createSlice({
  name: "settingsSlider",
  initialState: {
    R: 100,
    G: 200,
    B: 220,
  },
  reducers: {
    updateSliderRed: (state, action) => {
      return { ...state, R: action.payload };
    },
    updateSliderGreen: (state, action) => {
      return { ...state, G: action.payload };
    },
    updateSliderBlue: (state, action) => {
      return { ...state, B: action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateSliderRed, updateSliderGreen, updateSliderBlue } =
  settingsSlider.actions;

export default settingsSlider.reducer;
