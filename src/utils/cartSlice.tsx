import { createSlice } from "@reduxjs/toolkit";
import type { ItemCard } from "./menuMockData";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [] as ItemCard[],
    countItem :{} as Record<string,number>,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    addCount : (state,action) => {
      state.countItem[action.payload.id] = action.payload.num;
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, clearCart,addCount } = cartSlice.actions;
export default cartSlice.reducer;
