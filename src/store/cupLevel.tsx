import { createSlice } from "@reduxjs/toolkit";

export const cupLevel = createSlice({
  name: "cupLevel",
  initialState: {
    R: 100,
    G: 100,
    B: 100,
  },
  reducers: {
    updateCupSliderRed: (state, action) => {
      return { ...state, R: action.payload };
    },
    updateCupSliderGreen: (state, action) => {
      return { ...state, G: action.payload };
    },
    updateCupSliderBlue: (state, action) => {
      return { ...state, B: action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateCupSliderRed, updateCupSliderGreen, updateCupSliderBlue } =
  cupLevel.actions;

export default cupLevel.reducer;
