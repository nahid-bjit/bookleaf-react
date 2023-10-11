// actions.js
import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    editProduct: (state, action) => {
      // Assuming that 'action.payload' contains the updated product data
      const updatedProduct = action.payload;
      // Find the index of the product to edit in the state based on its ID
      const productIndex = state.findIndex(product => product.id === updatedProduct.id);
      if (productIndex !== -1) {
        // Replace the old product with the updated product in your state
        state[productIndex] = updatedProduct;
      }
    },
    deleteProduct: (state, action) => {
      // Assuming that 'action.payload' is the product ID to delete
      const productIdToDelete = action.payload;
      // Remove the product with the matching ID from your state
      state = state.filter(product => product.id !== productIdToDelete);
    },
  },
});

const { actions, reducer } = productSlice; // Destructure actions and reducer

export const { editProduct, deleteProduct } = actions;
export default reducer; // Export the reducer as the default
