import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CancelProduct, CancelProductSliceState } from "./types";

const initialState: CancelProductSliceState = {
  cancelProducts: [],
};

const cancelSlice = createSlice({
  name: "cancelProducts",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CancelProduct>) {
      state.cancelProducts = [...state.cancelProducts, action.payload];
    },
    removeItem(state, action: PayloadAction<string>) {
      state.cancelProducts = state.cancelProducts.filter(
        (obj) => obj.id !== action.payload
      );
    },
    addAllItems(state, action: PayloadAction<CancelProduct[]>) {
      state.cancelProducts = action.payload;
    },
    removeAllItems(state) {
      state.cancelProducts = [];
    },
  },
});

export const { addItem, removeItem, addAllItems, removeAllItems } =
  cancelSlice.actions;

export default cancelSlice.reducer;
