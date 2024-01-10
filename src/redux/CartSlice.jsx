import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name : "cart",
    initialState : [],
    reducers : {
        saveAllCarts : (state,action) => {
            return action.payload
        }
    }
})

export default CartSlice.reducer