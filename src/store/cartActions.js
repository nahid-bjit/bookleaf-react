// cartActions.js
import axios from 'axios';
import axiosInstance, { axiosInstanceToken } from '../utils/axiosInstance';

export const addToCart = (product) => {
    console.log("product: ", product)
    return async (dispatch) => {
        try {
            const response = await axiosInstanceToken.post('/cart/add-product', { product });
            // Dispatch an action to update the cart in the Redux store if needed
        } catch (error) {
            // Handle any errors, e.g., show an error message
        }
    };
};
