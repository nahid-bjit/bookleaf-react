
import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../utils/axiosInstance';
import { addToMany, setCartId } from './slices/cartSlice';
import { useState } from 'react';



export const addToCart = (product) => {
    console.log("product: ", product)
    const requestData = {
        bookId: product._id,
        amount: 1 // Set the amount to 1 by default
    };

    console.log("request data: ", requestData)

    return async (dispatch) => {
        try {
            const response = await axiosInstance.post("/cart/add-product", requestData);
            // Dispatch an action to update the cart in the Redux store if needed
        } catch (error) {
            // Handle any errors, e.g., show an error message
        }
    };
};

export const fetchUserCart = createAsyncThunk('cart/fetchUserCart', async (id, { dispatch, rejectWithValue }) => {
    try {
        const response = await axiosInstance.get(`/cart/${id}`);
        const cartData = response.data;
        console.log("cart data", cartData);
        // Add a delay using setTimeout
        setTimeout(() => {
            dispatch(addToMany(cartData.data.books));
            dispatch(setCartId({ cartId: cartData.data._id }))
        }, 1000); // Adjust the delay time (in milliseconds) as needed
        return cartData;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});


export const cartCheckout = async (cartId) => {
    console.log(cartId)
    try {
        const response = await axiosInstance.post("/transactions/checkout", {
            cartId: cartId
        })
        console.log(response)
        return response

    } catch (error) {
        console.log(error.response.data.message)
        alert(error.response.data.message)
        return error
    }
}

export const getUserTransection = async () => {

    //try catch
    const response = await axiosInstance.get("/transactions/my-transaction")
    return response.data

}


