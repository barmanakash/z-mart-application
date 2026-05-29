import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  // Track frontend checkout states for instant component visibility updates
  checkoutSummary: {
    subtotal: 0,
    savings: 0,
    shippingCharges: 99,
    finalTotal: 0
  }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Adds items to the bag or increments the quantity if the identical SKU (id + size + color) exists
    addToCart: (state, action) => {
      const { product, selectedSize, selectedColor, quantity } = action.payload;
      
      const existingItemIndex = state.cartItems.findIndex(
        item => 
          item.product._id === product._id && 
          item.size === selectedSize && 
          item.color === selectedColor
      );

      if (existingItemIndex >= 0) {
        state.cartItems[existingItemIndex].quantity += quantity;
      } else {
        state.cartItems.push({
          product,
          size: selectedSize,
          color: selectedColor,
          quantity
        });
      }
    },

    // Removes an item from the cart array using its unique item index mapping
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((_, idx) => idx !== action.payload);
    },

    // Updates quantities directly from a dynamic cart incrementor component
    updateCartQuantity: (state, action) => {
      const { index, quantity } = action.payload;
      if (state.cartItems[index] && quantity > 0) {
        state.cartItems[index].quantity = quantity;
      }
    },

    // Saves the calculated breakdown values evaluated by the system layout matrix
    updateCheckoutTotals: (state, action) => {
      state.checkoutSummary = action.payload;
    },

    // Flushes out the state upon successful order execution
    clearCart: (state) => {
      state.cartItems = [];
      state.checkoutSummary = { subtotal: 0, savings: 0, shippingCharges: 99, finalTotal: 0 };
    }
  }
});

// Explicitly export all actions so your components can call them securely via useDispatch
export const { 
  addToCart, 
  removeFromCart, 
  updateCartQuantity, 
  updateCheckoutTotals, 
  clearCart 
} = cartSlice.actions;

export default cartSlice.reducer;