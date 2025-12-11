import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;

export default appStore;
