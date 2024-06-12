import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slices/productSlice";
import wishlistSlice from "./Slices/wishlistSlice";
import cartSllice from "./Slices/cartSllice";


const cartStore=configureStore({
    reducer:{
       
        productReducer:productSlice,
        wishlistReducer:wishlistSlice,
        cartReducer:cartSllice
    }
})
export default cartStore