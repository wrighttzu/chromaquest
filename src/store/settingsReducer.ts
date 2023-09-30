import { createSlice } from "@reduxjs/toolkit";

export const settingsSliderRed = createSlice({
  name: "settingsSliderRed",
  initialState: {
    R: 127,
    G: 127,
    B: 127,
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
  settingsSliderRed.actions;

export default settingsSliderRed.reducer;
