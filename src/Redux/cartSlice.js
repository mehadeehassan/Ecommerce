import { createSlice } from "@reduxjs/toolkit";

const CART_KEY = "myShopCart";
const initialState = JSON.parse(localStorage.getItem(CART_KEY)) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.find((item) => item.code === action.payload.code);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem(CART_KEY, JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const updated = state.filter((item) => item.code !== action.payload);
      localStorage.setItem(CART_KEY, JSON.stringify(updated));
      return updated;
    },
    increaseQty: (state, action) => {
      const item = state.find((i) => i.code === action.payload);
      if (item) item.quantity += 1;
      localStorage.setItem(CART_KEY, JSON.stringify(state));
    },
    decreaseQty: (state, action) => {
      const item = state.find((i) => i.code === action.payload);
      if (item) item.quantity = Math.max(item.quantity - 1, 1);
      localStorage.setItem(CART_KEY, JSON.stringify(state));
    },
    resetCart: () => {
      localStorage.setItem(CART_KEY, JSON.stringify([]));
      return [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  resetCart,
} = cartSlice.actions;
export default cartSlice.reducer;
