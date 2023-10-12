// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        cartId: null
    },
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            state.items.push(newItem);
        },
        addToMany: (state, action) => {
            state.items = []
            console.log("actions playload: ", action.payload)
            const newItems = action.payload;
            state.items.push(...newItems);

        },
        setCartId: (state, action) => {
            state.cartId = action.payload.cartId;
        },

        removeFromCart: (state, action) => {
            const itemId = action.payload;
            state.items = state.items.filter(item => item.id !== itemId);
        },
        setCart: (state, action) => {

            // Update the cart state with the fetched data
            state.cartId = action.payload.cartId;
        },
        emptyCart: (state) => {
            state.items = []
        }
    },
});

export const { addToCart, removeFromCart, setCartId, setCart, emptyCart, addToMany } = cartSlice.actions;
export default cartSlice.reducer;
