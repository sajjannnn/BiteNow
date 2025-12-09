import { createSlice } from "@reduxjs/toolkit";
import type { ItemCard } from "./menuMockData";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items : [] as ItemCard[]
    },
    reducers: {
        addItem: (state,action) => {
            state.items.push(action.payload);
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
})

export const { addItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;