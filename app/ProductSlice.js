import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "hashan",
  age: 25,
};
const ProductSlice = createSlice({
  name: "prpductSlice",
  initialState,
  reducers: {
    savename: (state, action) => {
      state.name = action.payload;
    },
  },
});
