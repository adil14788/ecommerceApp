import { createSlice } from "@reduxjs/toolkit";

//basically here we are creating a model of the cart
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: Number(0),
        total: Number(0)
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
        deleteProduct: (state, action) => {
            // const newProducts = state.products.filter((item) => item._id !== action.payload._id);
            //     state.quantity -= 1;
            state.products = action.payload;
            // localStorage.cart?.removeItem("persists:root");
            //     state.total = state.total - (action.payload.quantity * action.payload.price);
        }
    },
});

export const { addProduct, deleteProduct } = cartSlice.actions;
//for the store
export default cartSlice.reducer;