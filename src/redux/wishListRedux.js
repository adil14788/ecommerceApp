import { createSlice } from "@reduxjs/toolkit";

//basically here we are creating a model of the cart
const wishListSlice = createSlice({
    name: "wishlist",
    initialState: {
        products: [],
    },
    reducers: {
        addProductToWL: (state, action) => {
            state.products.push(action.payload);
        },
        // deleteProductFromWL: (state) => {
        //     const newProducts = state.products.filter((item) => item._id !== action.payload._id);
        //     // state.products?.splice((item) => item._id === action.payload._id);
        //     state.products = newProducts;
        //     localStorage.cart?.setItem("products", state.products);
        //     state.total = state.total - (action.payload.quantity * action.payload.price);
        // }
    },
});

export const { addProductToWL } = wishListSlice.actions;
//for the store
export default wishListSlice.reducer;