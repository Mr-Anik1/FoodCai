import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import restaurantsDataReducer from "./restaurantsDataSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    restaurants: restaurantsDataReducer,
  },
});

export { appStore };
