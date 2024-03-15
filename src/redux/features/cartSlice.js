import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      const productToAdd = action.payload;
      const exsitingProduct = state.find((item) => item.id === productToAdd.id);

      if (exsitingProduct) {
        exsitingProduct.quantity += 1;
      } else {
        state.push({ ...productToAdd, quantity: 1 });
      }
    },
  },
});

export const { add } = cartSlice.actions;
export default cartSlice;