import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  amount: 0,
  total: 0,
  price: 0,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    increaseAmount: (state) => {
      state.amount += 1;
      productsSlice.caseReducers.calculateTotal(state);
    },
    decreaseAmount: (state) => {
      state.amount -= 1;
      productsSlice.caseReducers.calculateTotal(state);
    },
    calculateTotal: (state) => {
      let totalPrice = 0;

      state.products.forEach((product) => {
        totalPrice += product.price * product.amount;
      });

      state.price = totalPrice;
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
      productsSlice.caseReducers.calculateTotal(state);
    },
  },
});

export const { increaseAmount, decreaseAmount, calculateTotal, addProduct } =
  productsSlice.actions;

export default productsSlice.reducer;
