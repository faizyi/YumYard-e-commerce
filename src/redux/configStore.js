import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../redux/themeSlice'
import cartReducer from '../redux/cartSlice'
import loaderReducer from '../redux/loader'
export const store = configureStore({
    reducer : {
        // reducer : themeReducer,
        cart : cartReducer,
        loader : loaderReducer
    }
})