import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      // Here payload is an item
      state.items.push(action.payload);
    },

    removeItem: (state, action) => {
      // Here payload is an index which one should I delete
      state.items.splice(action.payload, 1);
    },

    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});

export const { addItems, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

// action: addItems
// reducer function: (state, action) => { },
