import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import navigate for redirection

const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null, isLoading: false },
    reducers: {
        loginStart: (state) => {
            state.isLoading = true;
        },
        loginSuccess: (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
        },
        loginFailure: (state) => {
            state.isLoading = false;
        },
        logout: (state) => {
            state.user = null;
        },
    },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

const API_ENDPOINT = 'http://localhost:8000/auth/login';

export const loginUser = (credentials) => async (dispatch) => {
    try {
        dispatch(loginStart());

        const response = await axios.post(API_ENDPOINT, credentials);

        if (response.status === 200) {
            const user = response.data.data;
            dispatch(loginSuccess(user));

            // Redirect to the homepage after successful login
            useNavigate('/homepage');
        } else {
            dispatch(loginFailure());
        }
    } catch (error) {
        dispatch(loginFailure());
    }
};

export default authSlice.reducer;
