// reducers.js
import { combineReducers } from 'redux';
import cartReducer from './cartSlice'; // Import your cart reducer

const rootReducer = combineReducers({
    cart: cartReducer,
    // Add other reducers as needed
});

export default rootReducer;
