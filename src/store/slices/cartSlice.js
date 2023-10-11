// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Initial state for the cart
    },
    reducers: {
        // ... your cart-related reducer actions
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer; // Named export for the reducer

// ... other code related to the cart slice
