import { configureStore } from "@reduxjs/toolkit";
// Correct import for a default export
import productsReducer from "../features/products/productSlice";
export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
