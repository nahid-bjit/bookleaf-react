// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import productReducer from './actions'; // Adjust the import path to match your project structure

const store = configureStore({
    reducer: {
        auth: authReducer, // Your existing auth slice
        products: productReducer, // Add the product-related reducer
    },
});

export default store;
