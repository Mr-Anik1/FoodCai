import { createSlice } from "@reduxjs/toolkit";

const restaurantsDataSlice = createSlice({
  name: "restaurants",
  initialState: {
    restaurantsData: null,
  },
  reducers: {
    addRestaurantsData: (state, action) => {
      state.restaurantsData = action.payload;
    },
  },
});

export const { addRestaurantsData } = restaurantsDataSlice.actions;

export default restaurantsDataSlice.reducer;
