import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./feature/cart-slice";
import cartReducer from "./feature/cart-slice"

export const store = configureStore({
    reducer: cartReducer
    
})
