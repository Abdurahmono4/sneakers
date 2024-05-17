import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  amount: 0,
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
    addItems(state) {
      localStorage.setItem("items", JSON.stringify(state.items));
      const itemsStorage = JSON.parse(localStorage.getItem("items"));
      state.cartItems = productsStorage;
      state.items = 0;
    },
    getProduct(state) {
      const itemsStorage = JSON.parse(localStorage.getProduct("products"));
      state.cartItems = productsStorage;
    },
    removeProduct(state) {
      const deleteItemsStorage = localStorage.removeItem("items");
      state.cartItems = deleteItemsStorage;
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
