// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import cartReducer from './slices/cartSlice'; // Use curly braces for named exports

const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer, // Use the named export
        // Add other reducers as needed
    },
});

export default store;
